import { Breadcrumb } from '../../components/documentation/Breadcrumb';
import { CodeBlock } from '../../components/documentation/CodeBlock';
import { TableOfContents } from '../../components/documentation/TableOfContents';

/**
 * ApiReferencePage Component
 * 
 * Comprehensive API documentation for all public classes, methods,
 * and interfaces in the Solstice SDK.
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6
 */
export function ApiReferencePage() {
  const headings = [
    { id: 'solstice-sdk', text: 'SolsticeSDK', level: 2 },
    { id: 'constructor', text: 'Constructor', level: 3 },
    { id: 'proof-generation', text: 'Proof Generation Methods', level: 3 },
    { id: 'verification', text: 'Verification Methods', level: 3 },
    { id: 'utility-methods', text: 'Utility Methods', level: 3 },
    { id: 'proof-generator', text: 'ProofGenerator', level: 2 },
    { id: 'solana-client', text: 'SolanaClient', level: 2 },
    { id: 'qr-processor', text: 'QRProcessor', level: 2 },
    { id: 'types', text: 'Types and Interfaces', level: 2 },
    { id: 'errors', text: 'Error Classes', level: 2 },
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <Breadcrumb items={[{ label: 'Documentation', path: '/documentation' }, { label: 'API Reference' }]} />
          
          <h1 className="text-4xl font-bold text-text-primary mb-4">API Reference</h1>
          <p className="text-xl text-text-secondary mb-8">
            Complete API documentation for the Solstice SDK. All classes, methods, parameters, 
            and return types are documented here.
          </p>

          {/* SolsticeSDK Class */}
          <section id="solstice-sdk" className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              SolsticeSDK
            </h2>
            <p className="text-text-secondary mb-6">
              The main SDK class that provides all functionality for generating and verifying 
              Zero-Knowledge proofs. This is the primary entry point for integrating Solstice 
              into your application.
            </p>

            {/* Constructor */}
            <div id="constructor" className="mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-3">Constructor</h3>
              <p className="text-text-secondary mb-4">
                Creates a new instance of the SolsticeSDK.
              </p>

              <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                <h4 className="text-lg font-semibold text-text-primary mb-2">Signature</h4>
                <CodeBlock
                  code={`constructor(config: SolsticeSDKConfig)`}
                  language="typescript"
                  showLineNumbers={false}
                />
              </div>

              <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                <h4 className="text-lg font-semibold text-text-primary mb-3">Parameters</h4>
                <div className="space-y-3">
                  <div>
                    <code className="text-blue-400 font-mono">config: SolsticeSDKConfig</code>
                    <p className="text-text-muted text-sm mt-1">Configuration object for the SDK</p>
                    <div className="mt-2 ml-4 space-y-2 text-sm">
                      <div>
                        <code className="text-purple-400">connection: Connection</code>
                        <span className="text-text-muted"> - Solana connection instance</span>
                      </div>
                      <div>
                        <code className="text-purple-400">wallet: WalletAdapter</code>
                        <span className="text-text-muted"> - Wallet adapter with publicKey and signTransaction</span>
                      </div>
                      <div>
                        <code className="text-purple-400">circuitsPath: string</code>
                        <span className="text-text-muted"> - Path to circuit files (default: '/circuits')</span>
                      </div>
                      <div>
                        <code className="text-purple-400">programId?: PublicKey</code>
                        <span className="text-text-muted"> - Optional custom program ID</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                <h4 className="text-lg font-semibold text-text-primary mb-2">Example</h4>
                <CodeBlock
                  code={`import { SolsticeSDK } from '@solsticeprotocol/sdk';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const { connection } = useConnection();
const { publicKey, signTransaction } = useWallet();

const sdk = new SolsticeSDK({
  connection,
  wallet: { publicKey, signTransaction },
  circuitsPath: '/circuits',
});`}
                  language="typescript"
                />
              </div>
            </div>

            {/* Proof Generation Methods */}
            <div id="proof-generation" className="mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-3">Proof Generation Methods</h3>

              {/* generateAgeProof */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-text-primary mb-3">generateAgeProof()</h4>
                <p className="text-text-secondary mb-4">
                  Generates a Zero-Knowledge proof that a user meets a minimum age requirement 
                  without revealing their exact date of birth.
                </p>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-2">Signature</h5>
                  <CodeBlock
                    code={`async generateAgeProof(params: AgeProofParams): Promise<AgeProof>`}
                    language="typescript"
                    showLineNumbers={false}
                  />
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Parameters</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <code className="text-purple-400">aadhaarData: AadhaarData</code>
                      <span className="text-text-muted"> - Parsed Aadhaar QR code data</span>
                    </div>
                    <div>
                      <code className="text-purple-400">minAge: number</code>
                      <span className="text-text-muted"> - Minimum age requirement (e.g., 18, 21)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Returns</h5>
                  <p className="text-text-muted text-sm mb-2">
                    <code className="text-green-400">Promise&lt;AgeProof&gt;</code> - The generated age proof
                  </p>
                  <div className="ml-4 space-y-1 text-sm text-text-muted">
                    <div>• <code className="text-purple-400">proof: Uint8Array</code> - The ZK proof (256 bytes)</div>
                    <div>• <code className="text-purple-400">publicSignals: string[]</code> - Public inputs to the circuit</div>
                    <div>• <code className="text-purple-400">minAge: number</code> - The minimum age that was proven</div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <h5 className="font-semibold text-text-primary mb-2">Example</h5>
                  <CodeBlock
                    code={`const aadhaarData = await sdk.parseAadhaarQR(qrCodeData);

const ageProof = await sdk.generateAgeProof({
  aadhaarData,
  minAge: 18,
});

console.log('Proof generated:', ageProof);
// Proof generation takes approximately 5 seconds`}
                    language="typescript"
                  />
                </div>
              </div>

              {/* generateNationalityProof */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-text-primary mb-3">generateNationalityProof()</h4>
                <p className="text-text-secondary mb-4">
                  Generates a Zero-Knowledge proof of nationality without revealing other identity information.
                </p>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-2">Signature</h5>
                  <CodeBlock
                    code={`async generateNationalityProof(params: NationalityProofParams): Promise<NationalityProof>`}
                    language="typescript"
                    showLineNumbers={false}
                  />
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Parameters</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <code className="text-purple-400">aadhaarData: AadhaarData</code>
                      <span className="text-text-muted"> - Parsed Aadhaar QR code data</span>
                    </div>
                    <div>
                      <code className="text-purple-400">nationality: string</code>
                      <span className="text-text-muted"> - ISO country code (e.g., 'IN' for India)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Returns</h5>
                  <p className="text-text-muted text-sm mb-2">
                    <code className="text-green-400">Promise&lt;NationalityProof&gt;</code> - The generated nationality proof
                  </p>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <h5 className="font-semibold text-text-primary mb-2">Example</h5>
                  <CodeBlock
                    code={`const nationalityProof = await sdk.generateNationalityProof({
  aadhaarData,
  nationality: 'IN', // ISO country code
});`}
                    language="typescript"
                  />
                </div>
              </div>

              {/* generateUniquenessProof */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-text-primary mb-3">generateUniquenessProof()</h4>
                <p className="text-text-secondary mb-4">
                  Generates a Zero-Knowledge proof of uniqueness for Sybil resistance. Ensures each 
                  identity can only be used once per application context.
                </p>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-2">Signature</h5>
                  <CodeBlock
                    code={`async generateUniquenessProof(params: UniquenessProofParams): Promise<UniquenessProof>`}
                    language="typescript"
                    showLineNumbers={false}
                  />
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Parameters</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <code className="text-purple-400">aadhaarData: AadhaarData</code>
                      <span className="text-text-muted"> - Parsed Aadhaar QR code data</span>
                    </div>
                    <div>
                      <code className="text-purple-400">nullifier: string</code>
                      <span className="text-text-muted"> - Application-specific context string</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Returns</h5>
                  <p className="text-text-muted text-sm mb-2">
                    <code className="text-green-400">Promise&lt;UniquenessProof&gt;</code> - The generated uniqueness proof
                  </p>
                  <div className="ml-4 space-y-1 text-sm text-text-muted">
                    <div>• <code className="text-purple-400">nullifierHash: string</code> - Unique hash for this identity + context</div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <h5 className="font-semibold text-text-primary mb-2">Example</h5>
                  <CodeBlock
                    code={`const uniquenessProof = await sdk.generateUniquenessProof({
  aadhaarData,
  nullifier: 'my-app-airdrop-2024', // Unique per use case
});

// The nullifierHash can be stored to prevent duplicate registrations
console.log('Nullifier hash:', uniquenessProof.nullifierHash);`}
                    language="typescript"
                  />
                </div>
              </div>
            </div>

            {/* Verification Methods */}
            <div id="verification" className="mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-3">Verification Methods</h3>

              {/* verifyProofOnChain */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-text-primary mb-3">verifyProofOnChain()</h4>
                <p className="text-text-secondary mb-4">
                  Submits a proof to the Solana blockchain for verification. The proof is verified 
                  by the Solstice program using the Groth16 verifier.
                </p>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-2">Signature</h5>
                  <CodeBlock
                    code={`async verifyProofOnChain(params: VerifyProofParams): Promise<string>`}
                    language="typescript"
                    showLineNumbers={false}
                  />
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Parameters</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <code className="text-purple-400">proof: AgeProof | NationalityProof | UniquenessProof</code>
                      <span className="text-text-muted"> - The proof to verify</span>
                    </div>
                    <div>
                      <code className="text-purple-400">proofType: 'age' | 'nationality' | 'uniqueness'</code>
                      <span className="text-text-muted"> - Type of proof being verified</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Returns</h5>
                  <p className="text-text-muted text-sm">
                    <code className="text-green-400">Promise&lt;string&gt;</code> - Transaction signature
                  </p>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <h5 className="font-semibold text-text-primary mb-2">Example</h5>
                  <CodeBlock
                    code={`const proof = await sdk.generateAgeProof({ aadhaarData, minAge: 18 });

const txSignature = await sdk.verifyProofOnChain({
  proof,
  proofType: 'age',
});

console.log('Proof verified! Transaction:', txSignature);

// Wait for confirmation
await connection.confirmTransaction(txSignature, 'confirmed');`}
                    language="typescript"
                  />
                </div>
              </div>

              {/* verifyProofLocally */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-text-primary mb-3">verifyProofLocally()</h4>
                <p className="text-text-secondary mb-4">
                  Verifies a proof locally without submitting to the blockchain. Useful for testing 
                  and validation before on-chain submission.
                </p>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-2">Signature</h5>
                  <CodeBlock
                    code={`async verifyProofLocally(params: VerifyProofParams): Promise<boolean>`}
                    language="typescript"
                    showLineNumbers={false}
                  />
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Returns</h5>
                  <p className="text-text-muted text-sm">
                    <code className="text-green-400">Promise&lt;boolean&gt;</code> - True if proof is valid, false otherwise
                  </p>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <h5 className="font-semibold text-text-primary mb-2">Example</h5>
                  <CodeBlock
                    code={`const isValid = await sdk.verifyProofLocally({
  proof,
  proofType: 'age',
});

if (isValid) {
  console.log('Proof is valid, proceeding to on-chain verification');
  await sdk.verifyProofOnChain({ proof, proofType: 'age' });
}`}
                    language="typescript"
                  />
                </div>
              </div>
            </div>

            {/* Utility Methods */}
            <div id="utility-methods" className="mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-3">Utility Methods</h3>

              {/* parseAadhaarQR */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-text-primary mb-3">parseAadhaarQR()</h4>
                <p className="text-text-secondary mb-4">
                  Parses and validates Aadhaar QR code data, extracting identity information 
                  needed for proof generation.
                </p>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-2">Signature</h5>
                  <CodeBlock
                    code={`async parseAadhaarQR(qrData: string): Promise<AadhaarData>`}
                    language="typescript"
                    showLineNumbers={false}
                  />
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Parameters</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <code className="text-purple-400">qrData: string</code>
                      <span className="text-text-muted"> - Raw QR code data from Aadhaar card</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Returns</h5>
                  <p className="text-text-muted text-sm mb-2">
                    <code className="text-green-400">Promise&lt;AadhaarData&gt;</code> - Parsed Aadhaar data
                  </p>
                  <div className="ml-4 space-y-1 text-sm text-text-muted">
                    <div>• <code className="text-purple-400">name: string</code> - User's name</div>
                    <div>• <code className="text-purple-400">dateOfBirth: string</code> - Date of birth (YYYY-MM-DD)</div>
                    <div>• <code className="text-purple-400">gender: string</code> - Gender</div>
                    <div>• <code className="text-purple-400">address: string</code> - Address</div>
                    <div>• <code className="text-purple-400">aadhaarNumber: string</code> - Aadhaar number (hashed)</div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <h5 className="font-semibold text-text-primary mb-2">Example</h5>
                  <CodeBlock
                    code={`const qrData = '...'; // From QR scanner

const aadhaarData = await sdk.parseAadhaarQR(qrData);
console.log('Parsed data:', aadhaarData);

// Use parsed data for proof generation
const proof = await sdk.generateAgeProof({ aadhaarData, minAge: 18 });`}
                    language="typescript"
                  />
                </div>
              </div>

              {/* getIdentityStatus */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-text-primary mb-3">getIdentityStatus()</h4>
                <p className="text-text-secondary mb-4">
                  Checks if an identity has been registered on-chain and retrieves its verification status.
                </p>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-2">Signature</h5>
                  <CodeBlock
                    code={`async getIdentityStatus(publicKey: PublicKey): Promise<IdentityStatus | null>`}
                    language="typescript"
                    showLineNumbers={false}
                  />
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Parameters</h5>
                  <div className="space-y-2 text-sm">
                    <div>
                      <code className="text-purple-400">publicKey: PublicKey</code>
                      <span className="text-text-muted"> - Wallet public key to check</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
                  <h5 className="font-semibold text-text-primary mb-3">Returns</h5>
                  <p className="text-text-muted text-sm mb-2">
                    <code className="text-green-400">Promise&lt;IdentityStatus | null&gt;</code> - Identity status or null if not registered
                  </p>
                </div>

                <div className="bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <h5 className="font-semibold text-text-primary mb-2">Example</h5>
                  <CodeBlock
                    code={`const status = await sdk.getIdentityStatus(wallet.publicKey);

if (status) {
  console.log('Identity registered:', status);
  console.log('Verified proofs:', status.verifiedProofs);
} else {
  console.log('Identity not registered');
}`}
                    language="typescript"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ProofGenerator Class */}
          <section id="proof-generator" className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              ProofGenerator
            </h2>
            <p className="text-text-secondary mb-6">
              Low-level class for generating Zero-Knowledge proofs. Used internally by SolsticeSDK 
              but can be used directly for advanced use cases.
            </p>

            <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
              <h4 className="text-lg font-semibold text-text-primary mb-2">Constructor</h4>
              <CodeBlock
                code={`constructor(circuitsPath: string)`}
                language="typescript"
                showLineNumbers={false}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">generateProof()</h4>
                <p className="text-text-secondary mb-4">
                  Generates a ZK proof given circuit inputs and proof type.
                </p>
                <CodeBlock
                  code={`async generateProof(
  proofType: 'age' | 'nationality' | 'uniqueness',
  inputs: CircuitInputs
): Promise<Proof>`}
                  language="typescript"
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">loadCircuit()</h4>
                <p className="text-text-secondary mb-4">
                  Loads circuit files (WASM and zkey) for a specific proof type.
                </p>
                <CodeBlock
                  code={`async loadCircuit(
  proofType: 'age' | 'nationality' | 'uniqueness'
): Promise<void>`}
                  language="typescript"
                />
              </div>
            </div>

            <div className="mt-6 bg-blue-900/20 border border-blue-700/50  p-4">
              <p className="text-text-secondary text-sm">
                <strong>Note:</strong> Most developers should use the SolsticeSDK class instead of 
                ProofGenerator directly. This class is exposed for advanced use cases where fine-grained 
                control over proof generation is needed.
              </p>
            </div>
          </section>

          {/* SolanaClient Class */}
          <section id="solana-client" className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              SolanaClient
            </h2>
            <p className="text-text-secondary mb-6">
              Handles all Solana blockchain interactions including transaction building, 
              signing, and submission.
            </p>

            <div className="bg-gray-800/50 border-l-2 border-white/10  p-4 mb-4">
              <h4 className="text-lg font-semibold text-text-primary mb-2">Constructor</h4>
              <CodeBlock
                code={`constructor(
  connection: Connection,
  wallet: WalletAdapter,
  programId: PublicKey
)`}
                language="typescript"
                showLineNumbers={false}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">submitProof()</h4>
                <p className="text-text-secondary mb-4">
                  Submits a proof to the Solana program for on-chain verification.
                </p>
                <CodeBlock
                  code={`async submitProof(
  proof: Proof,
  proofType: ProofType
): Promise<string>`}
                  language="typescript"
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">getIdentityAccount()</h4>
                <p className="text-text-secondary mb-4">
                  Retrieves the identity account for a given public key.
                </p>
                <CodeBlock
                  code={`async getIdentityAccount(
  publicKey: PublicKey
): Promise<IdentityAccount | null>`}
                  language="typescript"
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">initializeIdentity()</h4>
                <p className="text-text-secondary mb-4">
                  Initializes a new identity account on-chain.
                </p>
                <CodeBlock
                  code={`async initializeIdentity(): Promise<string>`}
                  language="typescript"
                />
              </div>
            </div>
          </section>

          {/* QRProcessor Class */}
          <section id="qr-processor" className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              QRProcessor
            </h2>
            <p className="text-text-secondary mb-6">
              Utility class for processing Aadhaar QR codes, including scanning, parsing, 
              and validation.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">parseQRData()</h4>
                <p className="text-text-secondary mb-4">
                  Parses raw QR code data into structured Aadhaar information.
                </p>
                <CodeBlock
                  code={`static parseQRData(qrData: string): AadhaarData`}
                  language="typescript"
                  showLineNumbers={false}
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">validateQRData()</h4>
                <p className="text-text-secondary mb-4">
                  Validates QR code data format and checksums.
                </p>
                <CodeBlock
                  code={`static validateQRData(qrData: string): boolean`}
                  language="typescript"
                  showLineNumbers={false}
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">extractFields()</h4>
                <p className="text-text-secondary mb-4">
                  Extracts specific fields from Aadhaar QR data.
                </p>
                <CodeBlock
                  code={`static extractFields(
  qrData: string,
  fields: string[]
): Record<string, string>`}
                  language="typescript"
                />
              </div>
            </div>
          </section>

          {/* Types and Interfaces */}
          <section id="types" className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              Types and Interfaces
            </h2>
            <p className="text-text-secondary mb-6">
              TypeScript type definitions for all SDK interfaces and data structures.
            </p>

            <div className="space-y-6">
              {/* SolsticeSDKConfig */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">SolsticeSDKConfig</h4>
                <p className="text-text-secondary mb-4">Configuration object for initializing the SDK.</p>
                <CodeBlock
                  code={`interface SolsticeSDKConfig {
  connection: Connection;
  wallet: WalletAdapter;
  circuitsPath?: string;
  programId?: PublicKey;
}`}
                  language="typescript"
                />
              </div>

              {/* AadhaarData */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">AadhaarData</h4>
                <p className="text-text-secondary mb-4">Parsed Aadhaar identity data.</p>
                <CodeBlock
                  code={`interface AadhaarData {
  name: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  aadhaarNumber: string;
  photo?: string;
}`}
                  language="typescript"
                />
              </div>

              {/* AgeProof */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">AgeProof</h4>
                <p className="text-text-secondary mb-4">Age verification proof structure.</p>
                <CodeBlock
                  code={`interface AgeProof {
  proof: Uint8Array;
  publicSignals: string[];
  minAge: number;
  timestamp: number;
}`}
                  language="typescript"
                />
              </div>

              {/* NationalityProof */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">NationalityProof</h4>
                <p className="text-text-secondary mb-4">Nationality verification proof structure.</p>
                <CodeBlock
                  code={`interface NationalityProof {
  proof: Uint8Array;
  publicSignals: string[];
  nationality: string;
  timestamp: number;
}`}
                  language="typescript"
                />
              </div>

              {/* UniquenessProof */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">UniquenessProof</h4>
                <p className="text-text-secondary mb-4">Uniqueness verification proof structure.</p>
                <CodeBlock
                  code={`interface UniquenessProof {
  proof: Uint8Array;
  publicSignals: string[];
  nullifierHash: string;
  timestamp: number;
}`}
                  language="typescript"
                />
              </div>

              {/* IdentityStatus */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">IdentityStatus</h4>
                <p className="text-text-secondary mb-4">On-chain identity verification status.</p>
                <CodeBlock
                  code={`interface IdentityStatus {
  publicKey: PublicKey;
  isRegistered: boolean;
  verifiedProofs: {
    age?: boolean;
    nationality?: boolean;
    uniqueness?: boolean;
  };
  lastVerified: number;
}`}
                  language="typescript"
                />
              </div>

              {/* WalletAdapter */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">WalletAdapter</h4>
                <p className="text-text-secondary mb-4">Wallet adapter interface for signing transactions.</p>
                <CodeBlock
                  code={`interface WalletAdapter {
  publicKey: PublicKey | null;
  signTransaction: (tx: Transaction) => Promise<Transaction>;
  signAllTransactions?: (txs: Transaction[]) => Promise<Transaction[]>;
}`}
                  language="typescript"
                />
              </div>
            </div>
          </section>

          {/* Error Classes */}
          <section id="errors" className="mb-12">
            <h2 className="text-3xl font-semibold text-text-primary mb-4 border-b border-gray-700 pb-2">
              Error Classes
            </h2>
            <p className="text-text-secondary mb-6">
              Custom error classes thrown by the SDK for different error scenarios.
            </p>

            <div className="space-y-6">
              {/* SolsticeError */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">SolsticeError</h4>
                <p className="text-text-secondary mb-4">Base error class for all SDK errors.</p>
                <CodeBlock
                  code={`class SolsticeError extends Error {
  code: string;
  details?: any;
  
  constructor(message: string, code: string, details?: any);
}`}
                  language="typescript"
                />
              </div>

              {/* ProofGenerationError */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">ProofGenerationError</h4>
                <p className="text-text-secondary mb-4">Thrown when proof generation fails.</p>
                <CodeBlock
                  code={`class ProofGenerationError extends SolsticeError {
  constructor(message: string, details?: any);
}`}
                  language="typescript"
                />
                <div className="mt-3 bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <p className="text-text-secondary text-sm mb-2"><strong>Common causes:</strong></p>
                  <ul className="list-disc list-inside text-text-muted text-sm space-y-1">
                    <li>Circuit files not found or corrupted</li>
                    <li>Invalid input data</li>
                    <li>Insufficient memory for proof generation</li>
                  </ul>
                </div>
              </div>

              {/* VerificationError */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">VerificationError</h4>
                <p className="text-text-secondary mb-4">Thrown when proof verification fails.</p>
                <CodeBlock
                  code={`class VerificationError extends SolsticeError {
  constructor(message: string, details?: any);
}`}
                  language="typescript"
                />
                <div className="mt-3 bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <p className="text-text-secondary text-sm mb-2"><strong>Common causes:</strong></p>
                  <ul className="list-disc list-inside text-text-muted text-sm space-y-1">
                    <li>Invalid proof data</li>
                    <li>Proof does not match public signals</li>
                    <li>On-chain verification failed</li>
                  </ul>
                </div>
              </div>

              {/* QRParseError */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">QRParseError</h4>
                <p className="text-text-secondary mb-4">Thrown when QR code parsing fails.</p>
                <CodeBlock
                  code={`class QRParseError extends SolsticeError {
  constructor(message: string, details?: any);
}`}
                  language="typescript"
                />
                <div className="mt-3 bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <p className="text-text-secondary text-sm mb-2"><strong>Common causes:</strong></p>
                  <ul className="list-disc list-inside text-text-muted text-sm space-y-1">
                    <li>Invalid QR code format</li>
                    <li>Corrupted QR data</li>
                    <li>Unsupported Aadhaar version</li>
                  </ul>
                </div>
              </div>

              {/* WalletError */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">WalletError</h4>
                <p className="text-text-secondary mb-4">Thrown when wallet operations fail.</p>
                <CodeBlock
                  code={`class WalletError extends SolsticeError {
  constructor(message: string, details?: any);
}`}
                  language="typescript"
                />
                <div className="mt-3 bg-gray-800/50 border-l-2 border-white/10  p-4">
                  <p className="text-text-secondary text-sm mb-2"><strong>Common causes:</strong></p>
                  <ul className="list-disc list-inside text-text-muted text-sm space-y-1">
                    <li>Wallet not connected</li>
                    <li>User rejected transaction</li>
                    <li>Insufficient SOL balance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-800/50 border-l-2 border-white/10  p-4">
              <h4 className="text-lg font-semibold text-text-primary mb-3">Error Handling Example</h4>
              <CodeBlock
                code={`import { 
  SolsticeError, 
  ProofGenerationError, 
  QRParseError 
} from '@solsticeprotocol/sdk';

try {
  const aadhaarData = await sdk.parseAadhaarQR(qrData);
  const proof = await sdk.generateAgeProof({ aadhaarData, minAge: 18 });
} catch (error) {
  if (error instanceof QRParseError) {
    console.error('Invalid QR code:', error.message);
    // Show user-friendly message about QR code
  } else if (error instanceof ProofGenerationError) {
    console.error('Proof generation failed:', error.message);
    // Show error and suggest retry
  } else if (error instanceof SolsticeError) {
    console.error('SDK error:', error.code, error.message);
    // Handle other SDK errors
  } else {
    console.error('Unexpected error:', error);
  }
}`}
                language="typescript"
              />
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">Next Steps</h2>
            <p className="text-text-secondary mb-4">
              Now that you understand the API, explore these resources:
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="/documentation/examples"
                className="block bg-gray-800/50 border-l-2 border-white/10 hover:border-blue-500  p-6 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-blue-400 mb-2">
                  💡 Code Examples
                </h3>
                <p className="text-text-muted text-sm">
                  See real-world examples using these APIs in different scenarios.
                </p>
              </a>

              <a
                href="/documentation/integration-guide"
                className="block bg-gray-800/50 border-l-2 border-white/10 hover:border-blue-500  p-6 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-blue-400 mb-2">
                  🔧 Integration Guide
                </h3>
                <p className="text-text-muted text-sm">
                  Learn framework-specific integration patterns.
                </p>
              </a>
            </div>
          </section>
        </div>

        {/* Table of Contents Sidebar */}
        <div className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-8">
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </div>
  );
}
