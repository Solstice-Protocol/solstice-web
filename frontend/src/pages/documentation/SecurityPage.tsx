import { Breadcrumb } from '../../components/documentation/Breadcrumb';
import { CodeBlock } from '../../components/documentation/CodeBlock';
import { TableOfContents } from '../../components/documentation/TableOfContents';
import { Shield, Lock, Key, Eye, AlertTriangle } from 'lucide-react';

/**
 * SecurityPage Component
 * 
 * Documents security features, privacy guarantees, cryptographic primitives,
 * and best practices for secure integration.
 * 
 * Requirements: 11.1, 11.2, 11.3, 11.4, 11.5
 */
export function SecurityPage() {
  const headings = [
    { id: 'privacy-guarantees', text: 'Privacy Guarantees', level: 2 },
    { id: 'cryptographic-primitives', text: 'Cryptographic Primitives', level: 2 },
    { id: 'key-management', text: 'Key Management', level: 2 },
    { id: 'data-handling', text: 'Data Handling & Privacy', level: 2 },
    { id: 'secure-integration', text: 'Secure Integration Patterns', level: 2 },
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <Breadcrumb items={[{ label: 'Documentation', path: '/documentation' }, { label: 'Security' }]} />
          
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Security</h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive guide to security features, privacy guarantees, and best practices 
            for building secure applications with the Solstice SDK.
          </p>

          {/* Privacy Guarantees */}
          <section id="privacy-guarantees" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Privacy Guarantees
            </h2>
            <p className="text-gray-300 mb-6">
              Solstice SDK provides strong privacy guarantees through Zero-Knowledge proofs, 
              ensuring that users can prove attributes about their identity without revealing 
              the underlying personal information.
            </p>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-100">Zero-Knowledge Proofs</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Proofs reveal only the validity of a claim (e.g., "user is 18+") without 
                  exposing the underlying data (exact date of birth, name, address, etc.).
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-8 h-8 text-green-500" />
                  <h3 className="text-lg font-semibold text-gray-100">No Data Leakage</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Verifiers learn nothing beyond the validity of the proof. Personal information 
                  remains private and is never transmitted or stored.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-8 h-8 text-purple-500" />
                  <h3 className="text-lg font-semibold text-gray-100">Unlinkability</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Proofs cannot be linked across different applications or sessions, preventing 
                  tracking and profiling of users.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Key className="w-8 h-8 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-gray-100">User Control</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Users maintain full control over their data. Proofs are generated locally 
                  on the user's device, and no data is sent to third parties.
                </p>
              </div>
            </div>

            {/* What is Revealed */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">What Information is Revealed?</h3>
              <p className="text-gray-300 mb-4">
                Understanding what information is and isn't revealed by each proof type:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-100 mb-3">Age Proof</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-400 font-medium mb-2">✓ Revealed:</p>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>User meets minimum age requirement</li>
                        <li>Proof is valid and verified</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-400 font-medium mb-2">✗ NOT Revealed:</p>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>Exact date of birth</li>
                        <li>Actual age</li>
                        <li>Name, address, or other personal info</li>
                        <li>Aadhaar number</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-100 mb-3">Nationality Proof</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-400 font-medium mb-2">✓ Revealed:</p>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>User has specified nationality</li>
                        <li>Proof is valid and verified</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-400 font-medium mb-2">✗ NOT Revealed:</p>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>Name or personal details</li>
                        <li>Address or location</li>
                        <li>Date of birth or age</li>
                        <li>Aadhaar number</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-100 mb-3">Uniqueness Proof</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-400 font-medium mb-2">✓ Revealed:</p>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>Nullifier hash (unique per context)</li>
                        <li>User is unique in this context</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-400 font-medium mb-2">✗ NOT Revealed:</p>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        <li>Any personal information</li>
                        <li>Identity across different contexts</li>
                        <li>Link to other proofs or sessions</li>
                        <li>Aadhaar number</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cryptographic Primitives */}
          <section id="cryptographic-primitives" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Cryptographic Primitives
            </h2>
            <p className="text-gray-300 mb-6">
              Solstice SDK is built on battle-tested cryptographic primitives that provide 
              strong security guarantees.
            </p>

            {/* Groth16 SNARKs */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Groth16 SNARKs</h3>
              <p className="text-gray-300 mb-4">
                The SDK uses Groth16, a widely-used and highly efficient SNARK (Succinct Non-interactive 
                Argument of Knowledge) construction.
              </p>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-4">
                <h4 className="text-lg font-semibold text-gray-100 mb-3">Key Properties</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong>Succinctness:</strong> Proofs are only 256 bytes, making them efficient 
                      to store and transmit on-chain
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong>Fast Verification:</strong> Proofs verify in milliseconds, enabling 
                      real-time on-chain verification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong>Zero-Knowledge:</strong> Verifier learns nothing beyond the validity 
                      of the statement being proven
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong>Non-interactive:</strong> No back-and-forth communication required 
                      between prover and verifier
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong>Battle-tested:</strong> Used in production by major projects like 
                      Zcash, Filecoin, and many others
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  <strong>Security Note:</strong> Groth16 requires a trusted setup ceremony. 
                  Solstice uses publicly verifiable trusted setup parameters generated through 
                  a multi-party computation ceremony, ensuring no single party can compromise 
                  the system.
                </p>
              </div>
            </div>

            {/* Hash Functions */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Hash Functions</h3>
              <p className="text-gray-300 mb-4">
                The SDK uses cryptographic hash functions for data integrity and commitment schemes:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-100 mb-2">Poseidon Hash</h4>
                  <p className="text-gray-300 text-sm">
                    Used within ZK circuits for efficient hashing. Poseidon is optimized for 
                    zero-knowledge proofs and provides strong collision resistance.
                  </p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-100 mb-2">SHA-256</h4>
                  <p className="text-gray-300 text-sm">
                    Used for Aadhaar QR code validation and data integrity checks outside of circuits.
                  </p>
                </div>
              </div>
            </div>

            {/* Elliptic Curves */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Elliptic Curve Cryptography</h3>
              <p className="text-gray-300 mb-4">
                Groth16 proofs use the BN254 (also known as alt_bn128) elliptic curve pairing:
              </p>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>
                      <strong>BN254 Curve:</strong> Provides 128-bit security level
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>
                      <strong>Pairing-Friendly:</strong> Enables efficient proof verification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>
                      <strong>Widely Supported:</strong> Native support in Ethereum and Solana
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Management */}
          <section id="key-management" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Key Management Best Practices
            </h2>
            <p className="text-gray-300 mb-6">
              Proper key management is critical for maintaining security in your application.
            </p>

            {/* Wallet Keys */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Wallet Private Keys</h3>
              <p className="text-gray-300 mb-4">
                The SDK requires access to a Solana wallet for signing transactions:
              </p>

              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                  <div>
                    <p className="text-red-300 font-semibold mb-2">Critical Security Rules</p>
                    <ul className="space-y-2 text-red-200 text-sm">
                      <li>• Never hardcode private keys in your application code</li>
                      <li>• Never commit private keys to version control</li>
                      <li>• Never expose private keys in client-side code</li>
                      <li>• Never log or transmit private keys</li>
                    </ul>
                  </div>
                </div>
              </div>

              <CodeBlock
                code={`//  NEVER DO THIS - Hardcoded private key
const keypair = Keypair.fromSecretKey(
  new Uint8Array([1, 2, 3, ...]) // INSECURE!
);

//  CORRECT - Use wallet adapter (browser)
import { useWallet } from '@solana/wallet-adapter-react';

const { publicKey, signTransaction } = useWallet();
const sdk = new SolsticeSDK({
  connection,
  wallet: { publicKey, signTransaction },
});

//  CORRECT - Use environment variables (server)
import { Keypair } from '@solana/web3.js';

const keypair = Keypair.fromSecretKey(
  new Uint8Array(JSON.parse(process.env.PRIVATE_KEY))
);`}
                language="typescript"
              />
            </div>

            {/* Environment Variables */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Environment Variables</h3>
              <p className="text-gray-300 mb-4">
                Store sensitive configuration in environment variables:
              </p>

              <CodeBlock
                code={`# .env (NEVER commit this file)
SOLANA_RPC_URL=https://your-private-rpc.com
PRIVATE_KEY=[1,2,3,...]  # For server-side only

# .env.example (commit this as template)
SOLANA_RPC_URL=https://api.devnet.solana.com
PRIVATE_KEY=  # Add your private key here`}
                language="bash"
              />

              <div className="mt-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  <strong>Best Practices:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mt-2">
                  <li>Add .env to .gitignore</li>
                  <li>Provide .env.example as a template</li>
                  <li>Use different keys for development and production</li>
                  <li>Rotate keys regularly</li>
                  <li>Use key management services (AWS KMS, HashiCorp Vault) in production</li>
                </ul>
              </div>
            </div>

            {/* Circuit Keys */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Circuit Verification Keys</h3>
              <p className="text-gray-300 mb-4">
                Verification keys are public and used to verify proofs. They should be:
              </p>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Stored in your public directory or repository</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Verified against known good hashes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Served over HTTPS to prevent tampering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Backed up and version controlled</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Handling */}
          <section id="data-handling" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Data Handling & Privacy Considerations
            </h2>
            <p className="text-gray-300 mb-6">
              Guidelines for handling sensitive data and maintaining user privacy.
            </p>

            {/* Aadhaar Data */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Aadhaar QR Code Data</h3>
              <p className="text-gray-300 mb-4">
                Aadhaar QR codes contain sensitive personal information. Handle with extreme care:
              </p>

              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6 mb-4">
                <p className="text-red-300 font-semibold mb-3">Never Store or Transmit Aadhaar Data</p>
                <ul className="space-y-2 text-red-200 text-sm">
                  <li>• Do NOT store Aadhaar QR data in databases</li>
                  <li>• Do NOT log Aadhaar data</li>
                  <li>• Do NOT send Aadhaar data to servers</li>
                  <li>• Do NOT cache Aadhaar data in browser storage</li>
                  <li>• Process Aadhaar data only in memory, then discard immediately</li>
                </ul>
              </div>

              <CodeBlock
                code={`//  CORRECT - Process and discard immediately
async function generateProof(qrData: string) {
  try {
    // Parse QR data (in memory only)
    const aadhaarData = await sdk.parseAadhaarQR(qrData);
    
    // Generate proof
    const proof = await sdk.generateAgeProof({ aadhaarData, minAge: 18 });
    
    // Clear sensitive data from memory
    // (JavaScript GC will handle this, but be explicit)
    aadhaarData = null;
    qrData = null;
    
    return proof;
  } catch (error) {
    // Do NOT log aadhaarData or qrData
    console.error('Proof generation failed');
    throw error;
  }
}

//  NEVER DO THIS
async function badExample(qrData: string) {
  // INSECURE - Storing in database
  await database.save({ qrData });
  
  // INSECURE - Logging sensitive data
  console.log('QR Data:', qrData);
  
  // INSECURE - Sending to server
  await fetch('/api/verify', { body: JSON.stringify({ qrData }) });
}`}
                language="typescript"
              />
            </div>

            {/* Proof Data */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Proof Data Storage</h3>
              <p className="text-gray-300 mb-4">
                Proofs themselves are safe to store as they contain no personal information:
              </p>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <p className="text-gray-300 mb-3"><strong>Safe to Store:</strong></p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Generated proofs (256-byte proof data)</li>
                  <li>• Public signals</li>
                  <li>• Nullifier hashes (for uniqueness proofs)</li>
                  <li>• Transaction signatures</li>
                  <li>• Verification timestamps</li>
                </ul>
              </div>

              <CodeBlock
                code={`//  Safe to store proof data
interface StoredVerification {
  userId: string;
  proofType: 'age' | 'nationality' | 'uniqueness';
  proof: Uint8Array;  // Safe - contains no personal info
  publicSignals: string[];  // Safe
  nullifierHash?: string;  // Safe - unique per context
  txSignature: string;  // Safe
  verifiedAt: string;  // Safe
}

await database.verifications.insert({
  userId: user.id,
  proofType: 'age',
  proof: ageProof.proof,
  publicSignals: ageProof.publicSignals,
  txSignature: txSignature,
  verifiedAt: new Date().toISOString(),
});`}
                language="typescript"
              />
            </div>

            {/* GDPR Compliance */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Privacy Regulations (GDPR, etc.)</h3>
              <p className="text-gray-300 mb-4">
                Solstice SDK helps you comply with privacy regulations:
              </p>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong>Data Minimization:</strong> Only the minimum necessary information 
                      (proof validity) is revealed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong>Purpose Limitation:</strong> Proofs are specific to their purpose 
                      (age, nationality, uniqueness)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong>User Control:</strong> Users generate proofs locally and control 
                      when to share them
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>
                      <strong>No Personal Data Storage:</strong> No personal information is stored 
                      by your application
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Secure Integration Patterns */}
          <section id="secure-integration" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Secure Integration Patterns
            </h2>
            <p className="text-gray-300 mb-6">
              Best practices and patterns for securely integrating the Solstice SDK.
            </p>

            {/* Client-Side Proof Generation */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Client-Side Proof Generation</h3>
              <p className="text-gray-300 mb-4">
                Always generate proofs on the client side to maintain privacy:
              </p>

              <CodeBlock
                code={`//  CORRECT - Client-side proof generation
// Frontend (React component)
import { SolsticeSDK } from '@solsticeprotocol/sdk';

function ProofGenerator() {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const generateProof = async (qrData: string) => {
    // Initialize SDK on client
    const sdk = new SolsticeSDK({
      connection,
      wallet: { publicKey, signTransaction },
      circuitsPath: '/circuits',
    });

    // Parse and generate proof locally
    const aadhaarData = await sdk.parseAadhaarQR(qrData);
    const proof = await sdk.generateAgeProof({ aadhaarData, minAge: 18 });

    // Only send proof (not personal data) to backend
    await fetch('/api/verify', {
      method: 'POST',
      body: JSON.stringify({ proof }),
    });
  };

  return <div>{/* UI */}</div>;
}`}
                language="typescript"
              />
            </div>

            {/* Server-Side Verification */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Server-Side Verification</h3>
              <p className="text-gray-300 mb-4">
                Verify proofs on your backend for additional security:
              </p>

              <CodeBlock
                code={`// Backend API endpoint
import { SolsticeSDK } from '@solsticeprotocol/sdk';
import { Connection, Keypair } from '@solana/web3.js';

app.post('/api/verify', async (req, res) => {
  const { proof, proofType } = req.body;

  try {
    // Initialize SDK on server
    const connection = new Connection(process.env.SOLANA_RPC_URL);
    const keypair = Keypair.fromSecretKey(/* ... */);
    
    const sdk = new SolsticeSDK({
      connection,
      wallet: {
        publicKey: keypair.publicKey,
        signTransaction: async (tx) => {
          tx.sign([keypair]);
          return tx;
        },
      },
    });

    // Verify proof locally first
    const isValid = await sdk.verifyProofLocally({ proof, proofType });
    
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid proof' });
    }

    // Optionally verify on-chain
    const txSignature = await sdk.verifyProofOnChain({ proof, proofType });

    // Store verification result (not personal data)
    await database.verifications.insert({
      userId: req.user.id,
      proofType,
      txSignature,
      verifiedAt: new Date(),
    });

    res.json({ success: true, txSignature });
  } catch (error) {
    console.error('Verification failed:', error);
    res.status(500).json({ error: 'Verification failed' });
  }
});`}
                language="typescript"
              />
            </div>

            {/* HTTPS Only */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">HTTPS Only</h3>
              <p className="text-gray-300 mb-4">
                Always use HTTPS to prevent man-in-the-middle attacks:
              </p>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Serve your application over HTTPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Load circuit files over HTTPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Use HTTPS for all API calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Enable HSTS (HTTP Strict Transport Security)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Input Validation */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Input Validation</h3>
              <p className="text-gray-300 mb-4">
                Validate all inputs to prevent injection attacks:
              </p>

              <CodeBlock
                code={`function validateQRData(qrData: string): boolean {
  // Check format
  if (typeof qrData !== 'string') {
    return false;
  }

  // Check length (Aadhaar QR is typically 200-500 chars)
  if (qrData.length < 100 || qrData.length > 1000) {
    return false;
  }

  // Check for suspicious patterns
  if (qrData.includes('<script>') || qrData.includes('javascript:')) {
    return false;
  }

  return true;
}

// Use validation before processing
async function generateProof(qrData: string) {
  if (!validateQRData(qrData)) {
    throw new Error('Invalid QR data format');
  }

  const aadhaarData = await sdk.parseAadhaarQR(qrData);
  // ... continue
}`}
                language="typescript"
              />
            </div>

            {/* Rate Limiting */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Rate Limiting</h3>
              <p className="text-gray-300 mb-4">
                Implement rate limiting to prevent abuse:
              </p>

              <CodeBlock
                code={`// Express middleware for rate limiting
import rateLimit from 'express-rate-limit';

const verifyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: 'Too many verification attempts, please try again later',
});

app.post('/api/verify', verifyLimiter, async (req, res) => {
  // Verification logic
});`}
                language="typescript"
              />
            </div>

            {/* Security Checklist */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-100 mb-3">Security Checklist</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Never store or log Aadhaar QR data</span>
                </label>
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Generate proofs client-side only</span>
                </label>
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Use HTTPS for all communications</span>
                </label>
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Store private keys securely (environment variables, key management services)</span>
                </label>
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Validate all user inputs</span>
                </label>
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Implement rate limiting on verification endpoints</span>
                </label>
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Verify proofs on backend before trusting them</span>
                </label>
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Use secure RPC endpoints with authentication</span>
                </label>
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Monitor for suspicious activity and errors</span>
                </label>
                <label className="flex items-start gap-2 text-gray-300">
                  <input type="checkbox" className="mt-1" />
                  <span>Keep SDK and dependencies up to date</span>
                </label>
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
