import { Breadcrumb } from '../../components/documentation/Breadcrumb';
import { CodeBlock } from '../../components/documentation/CodeBlock';
import { TableOfContents } from '../../components/documentation/TableOfContents';
import { ExternalLink } from '../../components/documentation/ExternalLink';

/**
 * ExamplesPage Component
 * 
 * Provides real-world code examples for DeFi, voting, and gaming applications.
 * Includes complete working examples with explanatory comments.
 * 
 * Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6
 */
export function ExamplesPage() {
  const headings = [
    { id: 'defi-example', text: 'DeFi Age Verification', level: 2 },
    { id: 'voting-example', text: 'Voting Application', level: 2 },
    { id: 'gaming-example', text: 'Gaming Application', level: 2 },
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <Breadcrumb items={[{ label: 'Documentation', path: '/documentation' }, { label: 'Examples' }]} />
          
          <h1 className="text-4xl font-bold text-text-primary mb-4">Code Examples</h1>
          <p className="text-xl text-text-secondary mb-8">
            Real-world examples demonstrating how to integrate Solstice SDK into different 
            types of applications. Each example includes complete, working code with detailed comments.
          </p>

          {/* DeFi Example */}
          <section id="defi-example" className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              DeFi Age Verification Example
            </h2>
            <p className="text-text-secondary mb-6">
              This example demonstrates how to implement age verification for a DeFi lending platform 
              that requires users to be 18 or older to access services.
            </p>

            <div className="bg-blue-900/20 border border-blue-700/50  p-4 mb-6">
              <p className="text-text-secondary text-sm">
                <strong>Use Case:</strong> A decentralized lending protocol needs to verify that users 
                meet minimum age requirements for regulatory compliance, without collecting or storing 
                personal information.
              </p>
            </div>

            <CodeBlock
              code={`// DeFiAgeVerification.tsx
import { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SolsticeSDK } from '@solsticeprotocol/sdk';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function DeFiAgeVerification() {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [qrData, setQrData] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');
  const [txSignature, setTxSignature] = useState('');
  const [error, setError] = useState('');

  // Minimum age requirement for DeFi platform
  const MIN_AGE = 18;

  const handleVerifyAge = async () => {
    // Validate wallet connection
    if (!publicKey || !signTransaction) {
      setError('Please connect your wallet first');
      return;
    }

    // Validate QR data input
    if (!qrData.trim()) {
      setError('Please provide Aadhaar QR code data');
      return;
    }

    try {
      setVerificationStatus('verifying');
      setError('');

      // Initialize SDK
      const sdk = new SolsticeSDK({
        connection,
        wallet: { publicKey, signTransaction },
        circuitsPath: '/circuits',
      });

      // Step 1: Parse Aadhaar QR code
      console.log('Parsing Aadhaar QR code...');
      const aadhaarData = await sdk.parseAadhaarQR(qrData);
      console.log('QR code parsed successfully');

      // Step 2: Generate age proof (takes ~5 seconds)
      console.log(\`Generating proof for minimum age \${MIN_AGE}...\`);
      const ageProof = await sdk.generateAgeProof({
        aadhaarData,
        minAge: MIN_AGE,
      });
      console.log('Age proof generated:', ageProof);

      // Step 3: Verify proof locally before submitting to chain
      console.log('Verifying proof locally...');
      const isValid = await sdk.verifyProofLocally({
        proof: ageProof,
        proofType: 'age',
      });

      if (!isValid) {
        throw new Error('Proof verification failed locally');
      }

      // Step 4: Submit proof to Solana blockchain
      console.log('Submitting proof to blockchain...');
      const signature = await sdk.verifyProofOnChain({
        proof: ageProof,
        proofType: 'age',
      });

      // Step 5: Wait for transaction confirmation
      await connection.confirmTransaction(signature, 'confirmed');
      
      setTxSignature(signature);
      setVerificationStatus('verified');
      console.log('Age verification complete! Transaction:', signature);

      // Now user can access DeFi services
      // Store verification status in your application state
      localStorage.setItem('ageVerified', 'true');
      localStorage.setItem('verificationTx', signature);
    } catch (err) {
      console.error('Verification error:', err);
      setError(err instanceof Error ? err.message : 'Verification failed');
      setVerificationStatus('failed');
    }
  };

  // Check if user is already verified
  const isAlreadyVerified = localStorage.getItem('ageVerified') === 'true';

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gray-800  p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-text-primary mb-2">
          Age Verification Required
        </h2>
        <p className="text-text-muted mb-6">
          You must be at least {MIN_AGE} years old to access this DeFi platform.
          Verify your age using your Aadhaar QR code.
        </p>

        {/* Wallet Connection */}
        <div className="mb-6">
          <WalletMultiButton className="w-full" />
        </div>

        {!isAlreadyVerified ? (
          <>
            {/* QR Code Input */}
            <div className="mb-6">
              <label className="block text-text-secondary mb-2 font-medium">
                Aadhaar QR Code Data
              </label>
              <textarea
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600  text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Scan your Aadhaar QR code and paste the data here"
                disabled={verificationStatus === 'verifying'}
              />
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerifyAge}
              disabled={verificationStatus === 'verifying' || !publicKey}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6  transition-colors"
            >
              {verificationStatus === 'verifying' ? 'Verifying...' : 'Verify Age'}
            </button>

            {/* Status Messages */}
            {verificationStatus === 'verifying' && (
              <div className="mt-4 p-4 bg-blue-900/30 border border-blue-700 ">
                <p className="text-blue-300 text-sm">
                  ⏳ Generating and verifying proof... This may take up to 10 seconds.
                </p>
              </div>
            )}

            {verificationStatus === 'verified' && (
              <div className="mt-4 p-4 bg-green-900/30 border border-green-700 ">
                <p className="text-green-300 font-medium mb-2">
                   Age verification successful!
                </p>
                <p className="text-text-muted text-sm">
                  Transaction: <code className="text-xs">{txSignature}</code>
                </p>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-900/30 border border-red-700 ">
                <p className="text-text-secondary text-sm"> {error}</p>
              </div>
            )}
          </>
        ) : (
          <div className="p-4 bg-green-900/30 border border-green-700 ">
            <p className="text-green-300 font-medium">
               You are already verified! You can now access all DeFi services.
            </p>
          </div>
        )}

        {/* Privacy Notice */}
        <div className="mt-6 p-4 bg-gray-700/50 ">
          <p className="text-text-muted text-xs">
             <strong>Privacy Guaranteed:</strong> Your personal information is never revealed. 
            The zero-knowledge proof only confirms you meet the age requirement without exposing 
            your date of birth or other identity details.
          </p>
        </div>
      </div>
    </div>
  );
}`}
              language="typescript"
            />

            <div className="mt-6 p-5 border-l-2 border-white/10 bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Complete age verification flow with user feedback</li>
                <li>• Local proof verification before on-chain submission</li>
                <li>• Transaction confirmation and status tracking</li>
                <li>• Persistent verification state using localStorage</li>
                <li>• Error handling and user-friendly messages</li>
              </ul>
            </div>
          </section>

          {/* Voting Example */}
          <section id="voting-example" className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              Voting Application Example
            </h2>
            <p className="text-text-secondary mb-6">
              This example shows how to implement a secure voting system with uniqueness proofs 
              to ensure one-person-one-vote while maintaining voter anonymity.
            </p>

            <div className="bg-purple-900/20 border border-purple-700/50  p-4 mb-6">
              <p className="text-text-secondary text-sm">
                <strong>Use Case:</strong> A DAO governance system needs to ensure each member can 
                only vote once per proposal, while keeping votes anonymous and preventing Sybil attacks.
              </p>
            </div>

            <CodeBlock
              code={`// VotingSystem.tsx
import { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SolsticeSDK } from '@solsticeprotocol/sdk';
import { PublicKey } from '@solana/web3.js';

interface Proposal {
  id: string;
  title: string;
  description: string;
  options: string[];
  endTime: Date;
}

export function VotingSystem({ proposal }: { proposal: Proposal }) {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [qrData, setQrData] = useState('');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [votingStatus, setVotingStatus] = useState<'idle' | 'verifying' | 'voting' | 'voted'>('idle');
  const [hasVoted, setHasVoted] = useState(false);
  const [nullifierHash, setNullifierHash] = useState('');
  const [error, setError] = useState('');

  // Generate unique nullifier for this proposal
  // This ensures the same person can vote on different proposals
  // but can only vote once per proposal
  const proposalNullifier = \`voting-proposal-\${proposal.id}\`;

  useEffect(() => {
    // Check if user has already voted on this proposal
    const storedNullifier = localStorage.getItem(\`vote-\${proposal.id}\`);
    if (storedNullifier) {
      setHasVoted(true);
      setNullifierHash(storedNullifier);
    }
  }, [proposal.id]);

  const handleVote = async () => {
    if (!publicKey || !signTransaction) {
      setError('Please connect your wallet');
      return;
    }

    if (selectedOption === null) {
      setError('Please select a voting option');
      return;
    }

    if (!qrData.trim()) {
      setError('Please provide Aadhaar QR code data');
      return;
    }

    try {
      setVotingStatus('verifying');
      setError('');

      // Initialize SDK
      const sdk = new SolsticeSDK({
        connection,
        wallet: { publicKey, signTransaction },
        circuitsPath: '/circuits',
      });

      // Step 1: Parse Aadhaar QR code
      console.log('Parsing Aadhaar QR code...');
      const aadhaarData = await sdk.parseAadhaarQR(qrData);

      // Step 2: Generate uniqueness proof
      // The nullifier ensures this identity can only vote once on this proposal
      console.log('Generating uniqueness proof...');
      const uniquenessProof = await sdk.generateUniquenessProof({
        aadhaarData,
        nullifier: proposalNullifier,
      });

      console.log('Uniqueness proof generated');
      console.log('Nullifier hash:', uniquenessProof.nullifierHash);

      // Step 3: Check if this nullifier has already been used
      // In a real application, check against your backend/smart contract
      const alreadyVoted = await checkNullifierUsed(uniquenessProof.nullifierHash);
      if (alreadyVoted) {
        throw new Error('This identity has already voted on this proposal');
      }

      // Step 4: Verify proof on-chain
      setVotingStatus('voting');
      console.log('Submitting proof to blockchain...');
      const txSignature = await sdk.verifyProofOnChain({
        proof: uniquenessProof,
        proofType: 'uniqueness',
      });

      await connection.confirmTransaction(txSignature, 'confirmed');

      // Step 5: Submit vote with nullifier hash
      // The vote is linked to the nullifier, not the user's identity
      await submitVote({
        proposalId: proposal.id,
        option: selectedOption,
        nullifierHash: uniquenessProof.nullifierHash,
        proofTx: txSignature,
      });

      // Store nullifier locally to prevent re-voting
      localStorage.setItem(\`vote-\${proposal.id}\`, uniquenessProof.nullifierHash);
      
      setNullifierHash(uniquenessProof.nullifierHash);
      setHasVoted(true);
      setVotingStatus('voted');
      console.log('Vote submitted successfully!');
    } catch (err) {
      console.error('Voting error:', err);
      setError(err instanceof Error ? err.message : 'Voting failed');
      setVotingStatus('idle');
    }
  };

  // Mock function - replace with actual backend/contract call
  async function checkNullifierUsed(nullifier: string): Promise<boolean> {
    // Check if nullifier exists in your database or smart contract
    // This prevents the same person from voting twice
    return false; // Placeholder
  }

  // Mock function - replace with actual vote submission
  async function submitVote(voteData: any): Promise<void> {
    // Submit vote to your backend or smart contract
    // The vote is anonymous but verifiably unique
    console.log('Submitting vote:', voteData);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gray-800  p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          {proposal.title}
        </h2>
        <p className="text-text-muted mb-6">{proposal.description}</p>

        {!hasVoted ? (
          <>
            {/* Voting Options */}
            <div className="mb-6">
              <label className="block text-text-secondary mb-3 font-medium">
                Select Your Vote
              </label>
              <div className="space-y-2">
                {proposal.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    className={\`w-full p-4  border-2 transition-colors text-left \${
                      selectedOption === index
                        ? 'border-blue-500 bg-blue-900/30'
                        : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                    }\`}
                  >
                    <span className="text-text-primary font-medium">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* QR Code Input */}
            <div className="mb-6">
              <label className="block text-text-secondary mb-2 font-medium">
                Aadhaar QR Code (for uniqueness verification)
              </label>
              <textarea
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600  text-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Paste Aadhaar QR data"
                disabled={votingStatus !== 'idle'}
              />
            </div>

            {/* Submit Vote Button */}
            <button
              onClick={handleVote}
              disabled={votingStatus !== 'idle' || selectedOption === null || !publicKey}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6  transition-colors"
            >
              {votingStatus === 'verifying' && 'Verifying Identity...'}
              {votingStatus === 'voting' && 'Submitting Vote...'}
              {votingStatus === 'idle' && 'Cast Vote'}
            </button>

            {error && (
              <div className="mt-4 p-4 bg-red-900/30 border border-red-700 ">
                <p className="text-text-secondary text-sm"> {error}</p>
              </div>
            )}
          </>
        ) : (
          <div className="p-6 bg-green-900/30 border border-green-700 ">
            <p className="text-green-300 font-medium mb-2">
               Your vote has been recorded!
            </p>
            <p className="text-text-muted text-sm">
              Nullifier: <code className="text-xs">{nullifierHash.slice(0, 16)}...</code>
            </p>
            <p className="text-text-muted text-sm mt-2">
              Your vote is anonymous but verifiably unique. You cannot vote again on this proposal.
            </p>
          </div>
        )}

        {/* Privacy & Security Notice */}
        <div className="mt-6 p-4 bg-gray-700/50 ">
          <p className="text-text-muted text-xs">
             <strong>Anonymous Voting:</strong> Your vote is completely anonymous. The system 
            only knows that a unique, verified person voted, but cannot link the vote to your identity.
            <br /><br />
            🛡️ <strong>Sybil Resistance:</strong> The uniqueness proof ensures each person can 
            only vote once, preventing vote manipulation.
          </p>
        </div>
      </div>
    </div>
  );
}`}
              language="typescript"
            />

            <div className="mt-6 p-5 border-l-2 border-white/10 bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• One-person-one-vote guarantee using uniqueness proofs</li>
                <li>• Anonymous voting with verifiable uniqueness</li>
                <li>• Proposal-specific nullifiers for multi-proposal support</li>
                <li>• Duplicate vote prevention with nullifier tracking</li>
                <li>• Complete privacy - votes cannot be linked to identities</li>
              </ul>
            </div>
          </section>

          {/* Gaming Example */}
          <section id="gaming-example" className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              Gaming Application Example
            </h2>
            <p className="text-text-secondary mb-6">
              This example demonstrates how to implement age verification and anti-cheat measures 
              for an online gaming platform using both age and uniqueness proofs.
            </p>

            <div className="bg-green-900/20 border border-green-700/50  p-4 mb-6">
              <p className="text-text-secondary text-sm">
                <strong>Use Case:</strong> An online casino or gaming platform needs to verify 
                players are 21+ and ensure each person can only create one account to prevent 
                multi-accounting and cheating.
              </p>
            </div>

            <CodeBlock
              code={`// GamingRegistration.tsx
import { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SolsticeSDK } from '@solsticeprotocol/sdk';

interface RegistrationData {
  username: string;
  email: string;
  acceptedTerms: boolean;
}

export function GamingRegistration() {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [qrData, setQrData] = useState('');
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    username: '',
    email: '',
    acceptedTerms: false,
  });
  const [step, setStep] = useState<'form' | 'verifying' | 'complete'>('form');
  const [verificationResults, setVerificationResults] = useState({
    ageVerified: false,
    uniquenessVerified: false,
    ageTxSignature: '',
    uniquenessTxSignature: '',
    nullifierHash: '',
  });
  const [error, setError] = useState('');

  // Gaming platform requirements
  const MIN_AGE = 21; // Minimum age for gambling/casino games
  const PLATFORM_NULLIFIER = 'gaming-platform-2024'; // Unique per platform

  const handleRegister = async () => {
    // Validate form
    if (!registrationData.username || !registrationData.email) {
      setError('Please fill in all fields');
      return;
    }

    if (!registrationData.acceptedTerms) {
      setError('Please accept the terms and conditions');
      return;
    }

    if (!publicKey || !signTransaction) {
      setError('Please connect your wallet');
      return;
    }

    if (!qrData.trim()) {
      setError('Please provide Aadhaar QR code data');
      return;
    }

    try {
      setStep('verifying');
      setError('');

      // Initialize SDK
      const sdk = new SolsticeSDK({
        connection,
        wallet: { publicKey, signTransaction },
        circuitsPath: '/circuits',
      });

      // Step 1: Parse Aadhaar QR code
      console.log('Parsing Aadhaar QR code...');
      const aadhaarData = await sdk.parseAadhaarQR(qrData);
      console.log('QR code parsed successfully');

      // Step 2: Generate and verify age proof (21+)
      console.log(\`Generating age proof for minimum age \${MIN_AGE}...\`);
      const ageProof = await sdk.generateAgeProof({
        aadhaarData,
        minAge: MIN_AGE,
      });

      console.log('Verifying age proof on-chain...');
      const ageTxSignature = await sdk.verifyProofOnChain({
        proof: ageProof,
        proofType: 'age',
      });

      await connection.confirmTransaction(ageTxSignature, 'confirmed');
      console.log('Age verification complete:', ageTxSignature);

      // Step 3: Generate and verify uniqueness proof (anti-cheat)
      console.log('Generating uniqueness proof for anti-cheat...');
      const uniquenessProof = await sdk.generateUniquenessProof({
        aadhaarData,
        nullifier: PLATFORM_NULLIFIER,
      });

      // Check if this person has already registered
      const alreadyRegistered = await checkAccountExists(uniquenessProof.nullifierHash);
      if (alreadyRegistered) {
        throw new Error(
          'An account with this identity already exists. Multiple accounts are not allowed.'
        );
      }

      console.log('Verifying uniqueness proof on-chain...');
      const uniquenessTxSignature = await sdk.verifyProofOnChain({
        proof: uniquenessProof,
        proofType: 'uniqueness',
      });

      await connection.confirmTransaction(uniquenessTxSignature, 'confirmed');
      console.log('Uniqueness verification complete:', uniquenessTxSignature);

      // Step 4: Create gaming account
      // Link account to nullifier hash (not to personal identity)
      await createGamingAccount({
        username: registrationData.username,
        email: registrationData.email,
        walletAddress: publicKey.toBase58(),
        nullifierHash: uniquenessProof.nullifierHash,
        ageVerificationTx: ageTxSignature,
        uniquenessVerificationTx: uniquenessTxSignature,
        verifiedAt: new Date().toISOString(),
      });

      // Update state
      setVerificationResults({
        ageVerified: true,
        uniquenessVerified: true,
        ageTxSignature,
        uniquenessTxSignature,
        nullifierHash: uniquenessProof.nullifierHash,
      });

      setStep('complete');
      console.log('Registration complete!');
    } catch (err) {
      console.error('Registration error:', err);
      setError(err instanceof Error ? err.message : 'Registration failed');
      setStep('form');
    }
  };

  // Mock function - replace with actual backend call
  async function checkAccountExists(nullifier: string): Promise<boolean> {
    // Check if nullifier exists in your database
    // This prevents the same person from creating multiple accounts
    return false; // Placeholder
  }

  // Mock function - replace with actual account creation
  async function createGamingAccount(accountData: any): Promise<void> {
    // Create account in your backend
    // Store nullifier hash to prevent duplicate accounts
    console.log('Creating gaming account:', accountData);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-gray-800  p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-text-primary mb-2">
          Create Gaming Account
        </h2>
        <p className="text-text-muted mb-6">
          Register for our gaming platform. You must be 21+ and can only create one account.
        </p>

        {step === 'form' && (
          <>
            {/* Registration Form */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-text-secondary mb-2 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  value={registrationData.username}
                  onChange={(e) =>
                    setRegistrationData({ ...registrationData, username: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600  text-text-primary focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Choose a username"
                />
              </div>

              <div>
                <label className="block text-text-secondary mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  value={registrationData.email}
                  onChange={(e) =>
                    setRegistrationData({ ...registrationData, email: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 border border-gray-600  text-text-primary focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-text-secondary mb-2 font-medium">
                  Aadhaar QR Code (for age & uniqueness verification)
                </label>
                <textarea
                  value={qrData}
                  onChange={(e) => setQrData(e.target.value)}
                  className="w-full p-3 bg-gray-700 border border-gray-600  text-text-primary focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={4}
                  placeholder="Paste Aadhaar QR data here"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={registrationData.acceptedTerms}
                  onChange={(e) =>
                    setRegistrationData({ ...registrationData, acceptedTerms: e.target.checked })
                  }
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-text-secondary text-sm">
                  I accept the terms and conditions, and I am at least 21 years old
                </label>
              </div>
            </div>

            {/* Register Button */}
            <button
              onClick={handleRegister}
              disabled={!publicKey}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6  transition-colors"
            >
              Register Account
            </button>

            {error && (
              <div className="mt-4 p-4 bg-red-900/30 border border-red-700 ">
                <p className="text-text-secondary text-sm"> {error}</p>
              </div>
            )}
          </>
        )}

        {step === 'verifying' && (
          <div className="py-12 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-text-secondary text-lg mb-2">Verifying your identity...</p>
            <p className="text-text-muted text-sm">
              This process includes age verification (21+) and uniqueness verification.
              <br />
              Please wait, this may take up to 15 seconds.
            </p>
          </div>
        )}

        {step === 'complete' && (
          <div className="space-y-4">
            <div className="p-6 bg-green-900/30 border border-green-700 ">
              <p className="text-green-300 font-bold text-xl mb-4">
                 Registration Complete!
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400"></span>
                  <span className="text-text-secondary">Age verified (21+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400"></span>
                  <span className="text-text-secondary">Uniqueness verified (anti-cheat)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400"></span>
                  <span className="text-text-secondary">Account created</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-700/50 ">
              <p className="text-text-muted text-xs mb-2">
                <strong>Verification Details:</strong>
              </p>
              <div className="space-y-1 text-xs font-mono text-gray-500">
                <div>Age Tx: {verificationResults.ageTxSignature.slice(0, 20)}...</div>
                <div>Uniqueness Tx: {verificationResults.uniquenessTxSignature.slice(0, 20)}...</div>
                <div>Account ID: {verificationResults.nullifierHash.slice(0, 20)}...</div>
              </div>
            </div>

            <button
              onClick={() => window.location.href = '/games'}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6  transition-colors"
            >
              Start Playing
            </button>
          </div>
        )}

        {/* Security Features */}
        <div className="mt-6 p-4 bg-gray-700/50 ">
          <p className="text-text-muted text-xs">
             <strong>Privacy Protected:</strong> Your personal information is never stored or shared.
            <br /><br />
            🛡️ <strong>Anti-Cheat:</strong> Each person can only create one account, preventing 
            multi-accounting and ensuring fair play.
            <br /><br />
             <strong>Age Verified:</strong> Zero-knowledge proof confirms you're 21+ without 
            revealing your exact age or date of birth.
          </p>
        </div>
      </div>
    </div>
  );
}`}
              language="typescript"
            />

            <div className="mt-6 p-5 border-l-2 border-white/10 bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Combined age and uniqueness verification in one flow</li>
                <li>• Multi-account prevention using nullifier hashes</li>
                <li>• Age-gated access for gambling/casino games (21+)</li>
                <li>• Privacy-preserving registration process</li>
                <li>• Complete anti-cheat system with identity verification</li>
              </ul>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              Additional Resources
            </h2>
            <p className="text-text-secondary mb-6">
              Explore more examples and get the complete source code:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-5 border-l-2 border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                   Example Repository
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  Complete working examples with full source code, tests, and deployment instructions.
                </p>
                <ExternalLink href="https://github.com/solstice-protocol/solstice-examples">
                  View on GitHub
                </ExternalLink>
              </div>

              <div className="p-5 border-l-2 border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  🎮 Live Demos
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  Try out live demos of each example application in your browser.
                </p>
                <ExternalLink href="https://examples.solsticeprotocol.com">
                  Try Live Demos
                </ExternalLink>
              </div>

              <div className="p-5 border-l-2 border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                   Tutorial Series
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  Step-by-step video tutorials walking through each example implementation.
                </p>
                <ExternalLink href="https://youtube.com/@solsticeprotocol">
                  Watch Tutorials
                </ExternalLink>
              </div>

              <div className="p-5 border-l-2 border-white/10 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  💬 Community Support
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  Get help from the community and share your own implementations.
                </p>
                <ExternalLink href="https://discord.gg/solstice">
                  Join Discord
                </ExternalLink>
              </div>
            </div>
          </section>
        </div>

        {/* Table of Contents */}
        <div className="hidden xl:block w-64 shrink-0">
          <div className="sticky top-8">
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </div>
  );
}
