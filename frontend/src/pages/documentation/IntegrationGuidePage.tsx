import { Breadcrumb } from '../../components/documentation/Breadcrumb';
import { CodeBlock } from '../../components/documentation/CodeBlock';
import { TableOfContents } from '../../components/documentation/TableOfContents';
import { useState } from 'react';

/**
 * IntegrationGuidePage Component
 * 
 * Provides framework-specific integration guides for React, Next.js, and Node.js.
 * Includes complete code examples and best practices for each framework.
 * 
 * Requirements: 7.1, 7.2, 7.3, 7.4, 7.5
 */
export function IntegrationGuidePage() {
  const [activeTab, setActiveTab] = useState<'react' | 'nextjs' | 'nodejs'>('react');

  const headings = [
    { id: 'react-integration', text: 'React Integration', level: 2 },
    { id: 'nextjs-integration', text: 'Next.js Integration', level: 2 },
    { id: 'nodejs-integration', text: 'Node.js Integration', level: 2 },
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <Breadcrumb items={[{ label: 'Documentation', path: '/documentation' }, { label: 'Integration Guide' }]} />
          
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Integration Guide</h1>
          <p className="text-xl text-gray-300 mb-8">
            Framework-specific guides for integrating the Solstice SDK into your application.
            Choose your framework below to see tailored examples and best practices.
          </p>

          {/* Framework Tabs */}
          <div className="flex gap-2 mb-8 border-b border-gray-700">
            <button
              onClick={() => setActiveTab('react')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'react'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              React
            </button>
            <button
              onClick={() => setActiveTab('nextjs')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'nextjs'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Next.js
            </button>
            <button
              onClick={() => setActiveTab('nodejs')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'nodejs'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Node.js
            </button>
          </div>

          {/* React Integration */}
          {activeTab === 'react' && (
            <section id="react-integration" className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
                React Integration
              </h2>
              <p className="text-gray-300 mb-6">
                Integrate Solstice SDK into your React application with proper state management 
                and wallet integration using Solana wallet adapters.
              </p>

              {/* Installation */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">1. Install Dependencies</h3>
                <p className="text-gray-300 mb-4">
                  First, install the Solstice SDK along with Solana wallet adapters:
                </p>
                <CodeBlock
                  code={`npm install @solsticeprotocol/sdk @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets @solana/web3.js`}
                  language="bash"
                />
              </div>

              {/* Setup Wallet Provider */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">2. Setup Wallet Provider</h3>
                <p className="text-gray-300 mb-4">
                  Configure the Solana wallet adapter in your app's root component:
                </p>
                <CodeBlock
                  code={`// App.tsx
import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {/* Your app components */}
          <YourApp />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;`}
                  language="typescript"
                />
              </div>

              {/* Initialize SDK */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">3. Initialize SDK in Component</h3>
                <p className="text-gray-300 mb-4">
                  Create a custom hook or initialize the SDK in your component:
                </p>
                <CodeBlock
                  code={`// hooks/useSolsticeSDK.ts
import { useMemo } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SolsticeSDK } from '@solsticeprotocol/sdk';

export function useSolsticeSDK() {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();

  const sdk = useMemo(() => {
    if (!publicKey || !signTransaction) {
      return null;
    }

    return new SolsticeSDK({
      connection,
      wallet: { publicKey, signTransaction },
      circuitsPath: '/circuits',
    });
  }, [connection, publicKey, signTransaction]);

  return sdk;
}`}
                  language="typescript"
                />
              </div>

              {/* State Management */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">4. State Management Pattern</h3>
                <p className="text-gray-300 mb-4">
                  Manage proof generation state with React hooks:
                </p>
                <CodeBlock
                  code={`// components/ProofGenerator.tsx
import { useState } from 'react';
import { useSolsticeSDK } from '../hooks/useSolsticeSDK';

export function ProofGenerator() {
  const sdk = useSolsticeSDK();
  const [loading, setLoading] = useState(false);
  const [proof, setProof] = useState(null);
  const [error, setError] = useState(null);

  const generateAgeProof = async (qrData: string, minAge: number) => {
    if (!sdk) {
      setError('SDK not initialized. Please connect your wallet.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Parse Aadhaar QR code
      const aadhaarData = await sdk.parseAadhaarQR(qrData);

      // Generate proof
      const ageProof = await sdk.generateAgeProof({
        aadhaarData,
        minAge,
      });

      setProof(ageProof);
      
      // Optionally verify on-chain
      const txSignature = await sdk.verifyProofOnChain({
        proof: ageProof,
        proofType: 'age',
      });

      console.log('Proof verified on-chain:', txSignature);
    } catch (err) {
      setError(err.message);
      console.error('Proof generation failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Your UI components */}
      {loading && <p>Generating proof...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {proof && <p className="text-green-500">Proof generated successfully!</p>}
    </div>
  );
}`}
                  language="typescript"
                />
              </div>

              {/* Complete Example */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">5. Complete Example</h3>
                <p className="text-gray-300 mb-4">
                  Here's a complete working example with QR scanning and proof generation:
                </p>
                <CodeBlock
                  code={`// components/IdentityVerification.tsx
import { useState } from 'react';
import { useSolsticeSDK } from '../hooks/useSolsticeSDK';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function IdentityVerification() {
  const sdk = useSolsticeSDK();
  const [qrData, setQrData] = useState('');
  const [minAge, setMinAge] = useState(18);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!sdk) {
      setStatus('Please connect your wallet first');
      return;
    }

    try {
      setLoading(true);
      setStatus('Parsing QR code...');
      
      const aadhaarData = await sdk.parseAadhaarQR(qrData);
      
      setStatus('Generating proof... (this takes ~5 seconds)');
      const proof = await sdk.generateAgeProof({ aadhaarData, minAge });
      
      setStatus('Verifying proof on-chain...');
      const txSignature = await sdk.verifyProofOnChain({
        proof,
        proofType: 'age',
      });
      
      setStatus(\`Success! Transaction: \${txSignature}\`);
    } catch (error) {
      setStatus(\`Error: \${error.message}\`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Age Verification</h2>
      
      <WalletMultiButton className="mb-4" />
      
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Aadhaar QR Data:</label>
          <textarea
            value={qrData}
            onChange={(e) => setQrData(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="Paste QR code data here"
          />
        </div>
        
        <div>
          <label className="block mb-2">Minimum Age:</label>
          <input
            type="number"
            value={minAge}
            onChange={(e) => setMinAge(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <button
          onClick={handleVerify}
          disabled={loading || !sdk}
          className="w-full bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Verify Age'}
        </button>
        
        {status && (
          <div className="p-3 bg-gray-100 rounded">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}`}
                  language="typescript"
                />
              </div>

              {/* React-Specific Considerations */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">React-Specific Considerations</h3>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">🔄 State Management</h4>
                    <p className="text-gray-300 text-sm">
                      Use React hooks (useState, useEffect) to manage proof generation state. 
                      Consider using Context API or state management libraries like Zustand for 
                      complex applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">⚡ Performance</h4>
                    <p className="text-gray-300 text-sm">
                      Memoize the SDK instance with useMemo to prevent unnecessary re-initialization. 
                      Proof generation is CPU-intensive, so show loading indicators to improve UX.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">🔌 Wallet Connection</h4>
                    <p className="text-gray-300 text-sm">
                      Always check if the wallet is connected before initializing the SDK. 
                      Handle wallet disconnection gracefully by cleaning up SDK instances.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">📦 Circuit Files</h4>
                    <p className="text-gray-300 text-sm">
                      Place circuit files in the public directory (/public/circuits) so they can 
                      be loaded at runtime. Ensure the circuitsPath matches your public directory structure.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Next.js Integration */}
          {activeTab === 'nextjs' && (
            <section id="nextjs-integration" className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
                Next.js Integration
              </h2>
              <p className="text-gray-300 mb-6">
                Integrate Solstice SDK into your Next.js application with proper SSR handling 
                and App Router or Pages Router support.
              </p>

              {/* Installation */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">1. Install Dependencies</h3>
                <CodeBlock
                  code={`npm install @solsticeprotocol/sdk @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets @solana/web3.js`}
                  language="bash"
                />
              </div>

              {/* App Router Setup */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">2. Setup with App Router (Next.js 13+)</h3>
                <p className="text-gray-300 mb-4">
                  Create a client component for wallet provider:
                </p>
                <CodeBlock
                  code={`// app/providers.tsx
'use client';

import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

export function Providers({ children }: { children: React.ReactNode }) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}`}
                  language="typescript"
                />
                <p className="text-gray-300 mt-4 mb-4">
                  Then wrap your app in the root layout:
                </p>
                <CodeBlock
                  code={`// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}`}
                  language="typescript"
                />
              </div>

              {/* Pages Router Setup */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">3. Setup with Pages Router (Next.js 12 and below)</h3>
                <p className="text-gray-300 mb-4">
                  Configure wallet provider in _app.tsx:
                </p>
                <CodeBlock
                  code={`// pages/_app.tsx
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}`}
                  language="typescript"
                />
              </div>

              {/* Client-Side Only Component */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">4. Create Client-Side Component</h3>
                <p className="text-gray-300 mb-4">
                  SDK operations must run client-side only. Use 'use client' directive or dynamic imports:
                </p>
                <CodeBlock
                  code={`// components/ProofGenerator.tsx
'use client'; // For App Router

import { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SolsticeSDK } from '@solsticeprotocol/sdk';

export function ProofGenerator() {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [loading, setLoading] = useState(false);

  const generateProof = async (qrData: string) => {
    if (!publicKey || !signTransaction) {
      alert('Please connect your wallet');
      return;
    }

    const sdk = new SolsticeSDK({
      connection,
      wallet: { publicKey, signTransaction },
      circuitsPath: '/circuits',
    });

    setLoading(true);
    try {
      const aadhaarData = await sdk.parseAadhaarQR(qrData);
      const proof = await sdk.generateAgeProof({ aadhaarData, minAge: 18 });
      console.log('Proof generated:', proof);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Your UI */}
    </div>
  );
}`}
                  language="typescript"
                />
              </div>

              {/* Dynamic Import Alternative */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">5. Alternative: Dynamic Import (Pages Router)</h3>
                <p className="text-gray-300 mb-4">
                  For Pages Router, you can use dynamic imports to prevent SSR issues:
                </p>
                <CodeBlock
                  code={`// pages/verify.tsx
import dynamic from 'next/dynamic';

// Dynamically import component with no SSR
const ProofGenerator = dynamic(
  () => import('../components/ProofGenerator'),
  { ssr: false }
);

export default function VerifyPage() {
  return (
    <div>
      <h1>Identity Verification</h1>
      <ProofGenerator />
    </div>
  );
}`}
                  language="typescript"
                />
              </div>

              {/* Next.js Specific Considerations */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">Next.js-Specific Considerations</h3>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">🖥️ SSR Handling</h4>
                    <p className="text-gray-300 text-sm">
                      The SDK uses browser-only APIs (WebAssembly, Clipboard). Always use 'use client' 
                      directive (App Router) or dynamic imports with ssr: false (Pages Router).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">📁 Public Directory</h4>
                    <p className="text-gray-300 text-sm">
                      Place circuit files in /public/circuits directory. Next.js serves files from 
                      /public at the root URL path.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">⚙️ Environment Variables</h4>
                    <p className="text-gray-300 text-sm">
                      Use NEXT_PUBLIC_ prefix for client-side environment variables. Example: 
                      NEXT_PUBLIC_SOLANA_RPC_URL for custom RPC endpoints.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">🔄 API Routes</h4>
                    <p className="text-gray-300 text-sm">
                      For server-side proof verification, create API routes that interact with Solana. 
                      However, proof generation must happen client-side due to WASM requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Node.js Integration */}
          {activeTab === 'nodejs' && (
            <section id="nodejs-integration" className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
                Node.js Integration
              </h2>
              <p className="text-gray-300 mb-6">
                Integrate Solstice SDK into your Node.js backend for server-side proof verification 
                and blockchain interactions.
              </p>

              {/* Installation */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">1. Install Dependencies</h3>
                <CodeBlock
                  code={`npm install @solsticeprotocol/sdk @solana/web3.js`}
                  language="bash"
                />
              </div>

              {/* Basic Setup */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">2. Basic Setup</h3>
                <p className="text-gray-300 mb-4">
                  Initialize the SDK with a Keypair for server-side operations:
                </p>
                <CodeBlock
                  code={`// server.js
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { SolsticeSDK } from '@solsticeprotocol/sdk';
import fs from 'fs';

// Load keypair from file (or environment variable)
const keypairData = JSON.parse(
  fs.readFileSync('./keypair.json', 'utf-8')
);
const keypair = Keypair.fromSecretKey(new Uint8Array(keypairData));

// Create connection
const connection = new Connection(
  process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com',
  'confirmed'
);

// Create wallet adapter for server-side use
const wallet = {
  publicKey: keypair.publicKey,
  signTransaction: async (tx) => {
    tx.sign([keypair]);
    return tx;
  },
};

// Initialize SDK
const sdk = new SolsticeSDK({
  connection,
  wallet,
  circuitsPath: './circuits', // Local file path for Node.js
});

console.log('SDK initialized with public key:', keypair.publicKey.toBase58());`}
                  language="typescript"
                />
              </div>

              {/* Express API Example */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">3. Express API Example</h3>
                <p className="text-gray-300 mb-4">
                  Create an Express API for proof verification:
                </p>
                <CodeBlock
                  code={`// api/verify.js
import express from 'express';
import { SolsticeSDK } from '@solsticeprotocol/sdk';
import { Connection, Keypair } from '@solana/web3.js';

const app = express();
app.use(express.json());

// Initialize SDK (same as above)
const connection = new Connection(process.env.SOLANA_RPC_URL);
const keypair = Keypair.fromSecretKey(/* ... */);
const wallet = {
  publicKey: keypair.publicKey,
  signTransaction: async (tx) => {
    tx.sign([keypair]);
    return tx;
  },
};

const sdk = new SolsticeSDK({
  connection,
  wallet,
  circuitsPath: './circuits',
});

// Endpoint to verify proof on-chain
app.post('/api/verify-proof', async (req, res) => {
  try {
    const { proof, proofType } = req.body;

    // Verify proof locally first
    const isValid = await sdk.verifyProofLocally({
      proof,
      proofType,
    });

    if (!isValid) {
      return res.status(400).json({
        success: false,
        error: 'Invalid proof',
      });
    }

    // Submit to blockchain
    const txSignature = await sdk.verifyProofOnChain({
      proof,
      proofType,
    });

    res.json({
      success: true,
      txSignature,
      message: 'Proof verified on-chain',
    });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Endpoint to check identity status
app.get('/api/identity/:publicKey', async (req, res) => {
  try {
    const publicKey = new PublicKey(req.params.publicKey);
    const status = await sdk.getIdentityStatus(publicKey);

    if (!status) {
      return res.status(404).json({
        success: false,
        error: 'Identity not found',
      });
    }

    res.json({
      success: true,
      status,
    });
  } catch (error) {
    console.error('Status check error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
                  language="typescript"
                />
              </div>

              {/* Background Job Example */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">4. Background Job Processing</h3>
                <p className="text-gray-300 mb-4">
                  Process proof verifications in background jobs:
                </p>
                <CodeBlock
                  code={`// workers/proofProcessor.js
import { SolsticeSDK } from '@solsticeprotocol/sdk';
import { Connection, Keypair } from '@solana/web3.js';

class ProofProcessor {
  constructor() {
    const connection = new Connection(process.env.SOLANA_RPC_URL);
    const keypair = Keypair.fromSecretKey(/* ... */);
    
    this.sdk = new SolsticeSDK({
      connection,
      wallet: {
        publicKey: keypair.publicKey,
        signTransaction: async (tx) => {
          tx.sign([keypair]);
          return tx;
        },
      },
      circuitsPath: './circuits',
    });
  }

  async processProofQueue(proofQueue) {
    for (const job of proofQueue) {
      try {
        console.log(\`Processing proof job \${job.id}\`);

        // Verify locally first
        const isValid = await this.sdk.verifyProofLocally({
          proof: job.proof,
          proofType: job.proofType,
        });

        if (!isValid) {
          console.error(\`Invalid proof for job \${job.id}\`);
          await this.markJobFailed(job.id, 'Invalid proof');
          continue;
        }

        // Submit to blockchain
        const txSignature = await this.sdk.verifyProofOnChain({
          proof: job.proof,
          proofType: job.proofType,
        });

        console.log(\`Proof verified: \${txSignature}\`);
        await this.markJobComplete(job.id, txSignature);
      } catch (error) {
        console.error(\`Error processing job \${job.id}:\`, error);
        await this.markJobFailed(job.id, error.message);
      }
    }
  }

  async markJobComplete(jobId, txSignature) {
    // Update database or queue
    console.log(\`Job \${jobId} completed: \${txSignature}\`);
  }

  async markJobFailed(jobId, error) {
    // Update database or queue
    console.log(\`Job \${jobId} failed: \${error}\`);
  }
}

// Usage
const processor = new ProofProcessor();
setInterval(async () => {
  const queue = await getProofQueue(); // Your queue implementation
  await processor.processProofQueue(queue);
}, 5000);`}
                  language="typescript"
                />
              </div>

              {/* Environment Configuration */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">5. Environment Configuration</h3>
                <p className="text-gray-300 mb-4">
                  Example .env file for Node.js applications:
                </p>
                <CodeBlock
                  code={`# Solana Configuration
SOLANA_RPC_URL=https://api.devnet.solana.com
SOLANA_NETWORK=devnet

# Solstice Configuration
CIRCUITS_PATH=./circuits
PROGRAM_ID=YourProgramIdHere

# Server Configuration
PORT=3000
NODE_ENV=development

# Keypair (for development only - use secure key management in production)
KEYPAIR_PATH=./keypair.json`}
                  language="bash"
                />
              </div>

              {/* Node.js Specific Considerations */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">Node.js-Specific Considerations</h3>
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2"> Key Management</h4>
                    <p className="text-gray-300 text-sm">
                      Never commit keypairs to version control. Use environment variables or secure 
                      key management services (AWS KMS, HashiCorp Vault) in production.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">⚠️ Proof Generation Limitation</h4>
                    <p className="text-gray-300 text-sm">
                      Proof generation requires WebAssembly and is CPU-intensive. It's recommended to 
                      generate proofs client-side and only verify them server-side.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">📁 Circuit Files</h4>
                    <p className="text-gray-300 text-sm">
                      Store circuit files in a local directory accessible to your Node.js process. 
                      Use absolute or relative paths in circuitsPath configuration.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">🔄 Connection Management</h4>
                    <p className="text-gray-300 text-sm">
                      Reuse Connection instances across requests to avoid connection overhead. 
                      Consider implementing connection pooling for high-traffic applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100 mb-2">📊 Monitoring</h4>
                    <p className="text-gray-300 text-sm">
                      Implement logging and monitoring for proof verification operations. Track 
                      transaction signatures and verification success rates.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
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
