import { Breadcrumb } from '../../components/documentation/Breadcrumb';
import { CodeBlock } from '../../components/documentation/CodeBlock';

/**
 * QuickStartPage Component
 * 
 * Provides a step-by-step quick start guide with minimal working examples
 * for proof generation and on-chain verification.
 * 
 * Requirements: 5.1, 5.2, 5.3, 5.4, 5.5
 */
export function QuickStartPage() {
  return (
    <div className="max-w-4xl font-serif">
      <Breadcrumb items={[{ label: 'Documentation', path: '/documentation' }, { label: 'Quick Start' }]} />

      <h1 className="text-4xl lg:text-5xl font-normal tracking-tight text-text-primary mb-6">Quick Start Guide</h1>
      <p className="text-xl text-text-secondary font-light leading-relaxed mb-12 border-l-2 border-vintage-grape-500/50 pl-6">
        Get up and running with the Solstice SDK in 5 minutes. This guide walks you through
        the complete integration flow from setup to on-chain verification.
      </p>

      <div className="p-5 border-l-2 border-vintage-grape-500/30 bg-white/[0.02] mb-12">
        <div className="flex items-start gap-4">
          
          <div>
            <div className="font-medium text-vintage-grape-200 mb-2">Prerequisites</div>
            <p className="text-vintage-grape-100/80 text-sm font-light leading-relaxed">
              This guide assumes you have already installed the SDK and configured your environment.
              If not, please see the <a href="/documentation/installation" className="text-vintage-grape-300 hover:text-vintage-grape-200 underline decoration-vintage-grape-500/30 underline-offset-4">Installation Guide</a> first.
            </p>
          </div>
        </div>
      </div>

      {/* Step 1: Basic Setup */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vintage-grape-500/20 text-vintage-grape-200 font-normal border border-vintage-grape-500/30 font-serif text-xl">
            1
          </div>
          <h2 className="text-2xl font-normal text-text-primary tracking-wide">Basic Setup</h2>
        </div>

        <p className="text-text-secondary font-light mb-6 pl-14">
          First, import the necessary components from the SDK and set up your React application
          with wallet connectivity:
        </p>

        <div className="pl-14">
          <CodeBlock
            code={`import { SolsticeSDK } from '@solsticeprotocol/sdk';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';

function App() {
  const { publicKey, signTransaction } = useWallet();
  const { connection } = useConnection();
  const [sdk, setSdk] = useState<SolsticeSDK | null>(null);

  // Initialize SDK when wallet connects
  useEffect(() => {
    if (publicKey && connection) {
      const solsticeSDK = new SolsticeSDK({
        connection,
        wallet: { publicKey, signTransaction },
        circuitsPath: '/circuits',
      });
      setSdk(solsticeSDK);
    }
  }, [publicKey, connection, signTransaction]);

  return (
    <div>
      <WalletMultiButton />
      {sdk && <ProofGenerator sdk={sdk} />}
    </div>
  );
}`}
            language="typescript"
            filename="App.tsx"
          />

          <div className="mt-6 p-5 border-l-2 border-white/10 bg-white/[0.02]">
            <h4 className="font-medium text-text-primary mb-3">What's happening here?</h4>
            <ul className="space-y-3 text-text-muted text-sm font-light">
              <li className="flex items-start gap-3">
                
                <span>We import the SolsticeSDK class and Solana wallet hooks</span>
              </li>
              <li className="flex items-start gap-3">
                
                <span>The SDK is initialized when a wallet connects</span>
              </li>
              <li className="flex items-start gap-3">
                
                <span>We pass the connection, wallet, and circuits path to the SDK</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 2: Minimal Working Example */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vintage-grape-500/20 text-vintage-grape-200 font-normal border border-vintage-grape-500/30 font-serif text-xl">
            2
          </div>
          <h2 className="text-2xl font-normal text-text-primary tracking-wide">Minimal Working Example</h2>
        </div>

        <p className="text-text-secondary font-light mb-6 pl-14">
          Here's a complete, minimal example that demonstrates the entire flow from QR code
          scanning to proof generation:
        </p>

        <div className="pl-14">
          <CodeBlock
            code={`import { SolsticeSDK } from '@solsticeprotocol/sdk';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { useState } from 'react';

function ProofGenerator({ sdk }: { sdk: SolsticeSDK }) {
  const [qrData, setQrData] = useState('');
  const [proof, setProof] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateProof = async () => {
    try {
      setLoading(true);
      setError('');

      // Parse Aadhaar QR code data
      const aadhaarData = await sdk.parseAadhaarQR(qrData);
      
      // Generate age proof (user is over 18)
      const ageProof = await sdk.generateAgeProof({
        aadhaarData,
        minAge: 18,
      });

      setProof(ageProof);
      console.log('Proof generated successfully:', ageProof);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate proof');
      console.error('Proof generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          Aadhaar QR Code Data
        </label>
        <textarea
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
          placeholder="Paste Aadhaar QR code data here..."
          className="w-full p-3 border "
          rows={4}
        />
      </div>

      <button
        onClick={handleGenerateProof}
        disabled={!qrData || loading}
        className="px-6 py-3 bg-blue-600 text-white  hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Generating Proof...' : 'Generate Age Proof'}
      </button>

      {error && (
        <div className="p-4 bg-red-900/20 border border-red-700  text-text-secondary">
          {error}
        </div>
      )}

      {proof && (
        <div className="p-4 bg-green-900/20 border border-green-700 ">
          <h3 className="font-semibold text-green-300 mb-2">Proof Generated!</h3>
          <pre className="text-xs text-text-secondary overflow-auto">
            {JSON.stringify(proof, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}`}
            language="typescript"
            filename="ProofGenerator.tsx"
          />

          <div className="mt-6 p-5 border-l-2 border-white/10 bg-white/[0.02]">
            <h4 className="font-medium text-text-primary mb-3">Key Points</h4>
            <ul className="space-y-3 text-text-muted text-sm font-light">
              <li className="flex items-start gap-3">
                
                <span><strong>parseAadhaarQR():</strong> Extracts and validates data from the QR code</span>
              </li>
              <li className="flex items-start gap-3">
                
                <span><strong>generateAgeProof():</strong> Creates a ZK proof that the user meets the age requirement</span>
              </li>
              <li className="flex items-start gap-3">
                
                <span>The proof generation takes approximately 5 seconds</span>
              </li>
              <li className="flex items-start gap-3">
                
                <span>Error handling ensures a smooth user experience</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 3: Basic Proof Generation */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vintage-grape-500/20 text-vintage-grape-200 font-normal border border-vintage-grape-500/30 font-serif text-xl">
            3
          </div>
          <h2 className="text-2xl font-normal text-text-primary tracking-wide">Generate Different Proof Types</h2>
        </div>

        <p className="text-text-secondary font-light mb-6 pl-14">
          The SDK supports three types of proofs. Here's how to generate each one:
        </p>

        <div className="space-y-8 pl-14">
          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">Age Proof</h3>
            <p className="text-text-secondary font-light mb-3">
              Prove that a user meets a minimum age requirement:
            </p>
            <CodeBlock
              code={`// Generate proof that user is over 18
const ageProof = await sdk.generateAgeProof({
  aadhaarData,
  minAge: 18,
});

// Generate proof that user is over 21
const ageProof21 = await sdk.generateAgeProof({
  aadhaarData,
  minAge: 21,
});`}
              language="typescript"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">Nationality Proof</h3>
            <p className="text-text-secondary font-light mb-3">
              Prove that a user has a specific nationality:
            </p>
            <CodeBlock
              code={`// Generate proof of Indian nationality
const nationalityProof = await sdk.generateNationalityProof({
  aadhaarData,
  nationality: 'IN', // ISO country code
});`}
              language="typescript"
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">Uniqueness Proof</h3>
            <p className="text-text-secondary font-light mb-3">
              Prove that a user is unique without revealing their identity:
            </p>
            <CodeBlock
              code={`// Generate uniqueness proof for Sybil resistance
const uniquenessProof = await sdk.generateUniquenessProof({
  aadhaarData,
  nullifier: 'my-app-unique-context', // App-specific context
});`}
              language="typescript"
            />
          </div>
        </div>
      </section>

      {/* Step 4: On-Chain Verification */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vintage-grape-500/20 text-vintage-grape-200 font-normal border border-vintage-grape-500/30 font-serif text-xl">
            4
          </div>
          <h2 className="text-2xl font-normal text-text-primary tracking-wide">On-Chain Verification</h2>
        </div>

        <p className="text-text-secondary font-light mb-6 pl-14">
          Once you have a proof, verify it on-chain using the Solana program:
        </p>

        <div className="pl-14">
          <CodeBlock
            code={`async function verifyProofOnChain(sdk: SolsticeSDK, proof: any) {
  try {
    // Submit proof to Solana for verification
    const txSignature = await sdk.verifyProofOnChain({
      proof,
      proofType: 'age', // 'age', 'nationality', or 'uniqueness'
    });

    console.log('Proof verified on-chain!');
    console.log('Transaction signature:', txSignature);

    // Wait for confirmation
    const confirmation = await sdk.connection.confirmTransaction(
      txSignature,
      'confirmed'
    );

    if (confirmation.value.err) {
      throw new Error('Transaction failed');
    }

    return {
      success: true,
      signature: txSignature,
    };
  } catch (error) {
    console.error('Verification failed:', error);
    throw error;
  }
}`}
            language="typescript"
          />

          <div className="mt-6 p-5 border-l-2 border-white/10 bg-white/[0.02]">
            <h4 className="font-medium text-text-primary mb-3">Verification Process</h4>
            <ul className="space-y-3 text-text-muted text-sm font-light">
              <li className="flex items-start gap-3">
                
                <span>The proof is submitted to the Solstice Solana program</span>
              </li>
              <li className="flex items-start gap-3">
                
                <span>The program verifies the proof using the Groth16 verifier</span>
              </li>
              <li className="flex items-start gap-3">
                
                <span>Verification happens in milliseconds on-chain</span>
              </li>
              <li className="flex items-start gap-3">
                
                <span>The transaction signature can be used as proof of verification</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 5: Complete Integration Flow */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vintage-grape-500/20 text-vintage-grape-200 font-normal border border-vintage-grape-500/30 font-serif text-xl">
            5
          </div>
          <h2 className="text-2xl font-normal text-text-primary tracking-wide">Complete Integration Flow</h2>
        </div>

        <p className="text-text-secondary font-light mb-6 pl-14">
          Here's a complete example that ties everything together:
        </p>

        <div className="pl-14">
          <CodeBlock
            code={`import { SolsticeSDK } from '@solsticeprotocol/sdk';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { useState } from 'react';

function CompleteExample() {
  const { publicKey, signTransaction } = useWallet();
  const { connection } = useConnection();
  const [status, setStatus] = useState('');

  const handleCompleteFlow = async (qrData: string) => {
    try {
      // 1. Initialize SDK
      setStatus('Initializing SDK...');
      const sdk = new SolsticeSDK({
        connection,
        wallet: { publicKey, signTransaction },
        circuitsPath: '/circuits',
      });

      // 2. Parse QR code
      setStatus('Parsing Aadhaar QR code...');
      const aadhaarData = await sdk.parseAadhaarQR(qrData);
      console.log('Aadhaar data parsed successfully');

      // 3. Generate proof
      setStatus('Generating ZK proof (this takes ~5 seconds)...');
      const proof = await sdk.generateAgeProof({
        aadhaarData,
        minAge: 18,
      });
      console.log('Proof generated:', proof);

      // 4. Verify on-chain
      setStatus('Verifying proof on Solana...');
      const txSignature = await sdk.verifyProofOnChain({
        proof,
        proofType: 'age',
      });

      // 5. Wait for confirmation
      setStatus('Waiting for transaction confirmation...');
      await connection.confirmTransaction(txSignature, 'confirmed');

      // 6. Success!
      setStatus(\`Success! Transaction: \${txSignature}\`);
      
      return {
        success: true,
        proof,
        txSignature,
      };
    } catch (error) {
      setStatus(\`Error: \${error.message}\`);
      throw error;
    }
  };

  return (
    <div>
      <div className="mb-4">
        <strong>Status:</strong> {status}
      </div>
      {/* Your UI components here */}
    </div>
  );
}`}
            language="typescript"
            filename="CompleteExample.tsx"
          />

          <div className="mt-8 bg-gradient-to-r from-vintage-grape-900/40 to-stone-brown-900/40 border border-vintage-grape-700/30  p-8">
            <h4 className="font-medium text-vintage-grape-200 mb-4 flex items-center gap-3 text-lg">
              
              Complete Flow Summary
            </h4>
            <ol className="space-y-3 text-text-secondary text-sm list-decimal list-inside font-light">
              <li><strong className="text-text-primary font-medium">Initialize SDK</strong> with wallet and connection</li>
              <li><strong className="text-text-primary font-medium">Parse Aadhaar QR</strong> to extract identity data</li>
              <li><strong className="text-text-primary font-medium">Generate ZK Proof</strong> (~5 seconds)</li>
              <li><strong className="text-text-primary font-medium">Submit to Solana</strong> for on-chain verification</li>
              <li><strong className="text-text-primary font-medium">Confirm transaction</strong> and get signature</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Testing Tips */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Testing Tips
        </h2>

        <div className="space-y-6">
          <div className="p-5 border-l-2 border-white/10 bg-white/[0.02]">
            <h4 className="font-medium text-text-primary mb-2">Use Devnet for Testing</h4>
            <p className="text-text-muted text-sm mb-3 font-light">
              Always test on Solana devnet before deploying to mainnet:
            </p>
            <CodeBlock
              code={`// In your .env file
VITE_SOLANA_RPC_URL=https://api.devnet.solana.com
VITE_SOLANA_NETWORK=devnet`}
              language="bash"
              showLineNumbers={false}
            />
          </div>

          <div className="p-5 border-l-2 border-white/10 bg-white/[0.02]">
            <h4 className="font-medium text-text-primary mb-2">Test with Sample Data</h4>
            <p className="text-text-secondary text-sm font-light">
              The SDK includes test utilities for generating sample Aadhaar data. This is useful
              for development and testing without real identity documents.
            </p>
          </div>

          <div className="p-5 border-l-2 border-white/10 bg-white/[0.02]">
            <h4 className="font-medium text-text-primary mb-2">Monitor Performance</h4>
            <p className="text-text-secondary text-sm font-light">
              Proof generation should take approximately 5 seconds. If it takes significantly longer,
              check that circuit files are loading correctly and consider optimizing your build configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Common Issues
        </h2>

        <div className="space-y-4">
          <div className="p-5 border-l-2 border-vintage-grape-500/30 bg-white/[0.02]">
            <h4 className="font-medium text-text-muted mb-2">"Circuit files not found"</h4>
            <p className="text-text-muted text-sm font-light">
              Ensure circuit files are in your public/circuits directory and the path is configured correctly.
            </p>
          </div>

          <div className="p-5 border-l-2 border-vintage-grape-500/30 bg-white/[0.02]">
            <h4 className="font-medium text-text-muted mb-2">"Wallet not connected"</h4>
            <p className="text-text-muted text-sm font-light">
              Make sure the user has connected their wallet before initializing the SDK.
            </p>
          </div>

          <div className="p-5 border-l-2 border-vintage-grape-500/30 bg-white/[0.02]">
            <h4 className="font-medium text-text-muted mb-2">"Transaction failed"</h4>
            <p className="text-text-muted text-sm font-light">
              Check that you're using the correct program ID for your network (devnet/mainnet) and
              that the wallet has sufficient SOL for transaction fees.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Next Steps
        </h2>
        <p className="text-text-secondary font-light mb-6">
          Now that you've completed the quick start, explore more advanced topics:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/documentation/api-reference"
            className="block bg-white/5 border border-white/10 hover:border-vintage-grape-500/50  p-6 transition-all duration-300 hover:bg-white/[0.08] group"
          >
            <h3 className="text-lg font-medium text-text-primary group-hover:text-vintage-grape-200 mb-2 transition-colors">
              API Reference
            </h3>
            <p className="text-text-muted text-sm font-light">
              Explore the complete API documentation with all available methods and options.
            </p>
          </a>

          <a
            href="/documentation/integration-guide"
            className="block bg-white/5 border border-white/10 hover:border-vintage-grape-500/50  p-6 transition-all duration-300 hover:bg-white/[0.08] group"
          >
            <h3 className="text-lg font-medium text-text-primary group-hover:text-vintage-grape-200 mb-2 transition-colors">
              Integration Guide
            </h3>
            <p className="text-text-muted text-sm font-light">
              Learn framework-specific integration patterns for React, Next.js, and Node.js.
            </p>
          </a>

          <a
            href="/documentation/examples"
            className="block bg-white/5 border border-white/10 hover:border-vintage-grape-500/50  p-6 transition-all duration-300 hover:bg-white/[0.08] group"
          >
            <h3 className="text-lg font-medium text-text-primary group-hover:text-vintage-grape-200 mb-2 transition-colors">
              Examples
            </h3>
            <p className="text-text-muted text-sm font-light">
              See complete examples for DeFi, voting, and gaming applications.
            </p>
          </a>

          <a
            href="/documentation/security"
            className="block bg-white/5 border border-white/10 hover:border-vintage-grape-500/50  p-6 transition-all duration-300 hover:bg-white/[0.08] group"
          >
            <h3 className="text-lg font-medium text-text-primary group-hover:text-vintage-grape-200 mb-2 transition-colors">
              Security Best Practices
            </h3>
            <p className="text-text-muted text-sm font-light">
              Learn about security considerations and best practices for production deployments.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
