import { Breadcrumb } from '../../components/documentation/Breadcrumb';
import { CodeBlock } from '../../components/documentation/CodeBlock';
import { TableOfContents } from '../../components/documentation/TableOfContents';

/**
 * ConfigurationPage Component
 * 
 * Documents all configuration options including environment variables,
 * network settings, and circuit parameters.
 * 
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5
 */
export function ConfigurationPage() {
  const headings = [
    { id: 'environment-variables', text: 'Environment Variables', level: 2 },
    { id: 'network-configuration', text: 'Network Configuration', level: 2 },
    { id: 'circuit-configuration', text: 'Circuit Configuration', level: 2 },
    { id: 'advanced-options', text: 'Advanced Options', level: 2 },
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <Breadcrumb items={[{ label: 'Documentation', path: '/documentation' }, { label: 'Configuration' }]} />
          
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Configuration</h1>
          <p className="text-xl text-gray-300 mb-8">
            Complete guide to configuring the Solstice SDK for your environment. Learn about 
            environment variables, network settings, and circuit parameters.
          </p>

          {/* Environment Variables */}
          <section id="environment-variables" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Environment Variables
            </h2>
            <p className="text-gray-300 mb-6">
              Configure the SDK using environment variables. These can be set in your .env file 
              or passed directly to your application.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-gray-800/50 border border-gray-700 rounded-lg">
                <thead>
                  <tr className="bg-gray-700/50">
                    <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                      Variable
                    </th>
                    <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                      Description
                    </th>
                    <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                      Default
                    </th>
                    <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                      Required
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-blue-400">SOLANA_RPC_URL</code>
                    </td>
                    <td className="p-4 text-gray-300">
                      Solana RPC endpoint URL
                    </td>
                    <td className="p-4 text-gray-400">
                      <code>https://api.devnet.solana.com</code>
                    </td>
                    <td className="p-4 text-gray-400">No</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-blue-400">SOLANA_NETWORK</code>
                    </td>
                    <td className="p-4 text-gray-300">
                      Network environment (devnet, testnet, mainnet-beta)
                    </td>
                    <td className="p-4 text-gray-400">
                      <code>devnet</code>
                    </td>
                    <td className="p-4 text-gray-400">No</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-blue-400">CIRCUITS_PATH</code>
                    </td>
                    <td className="p-4 text-gray-300">
                      Path to circuit files directory
                    </td>
                    <td className="p-4 text-gray-400">
                      <code>/circuits</code>
                    </td>
                    <td className="p-4 text-gray-400">No</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-blue-400">PROGRAM_ID</code>
                    </td>
                    <td className="p-4 text-gray-300">
                      Solstice program ID on Solana
                    </td>
                    <td className="p-4 text-gray-400">
                      <code>Built-in default</code>
                    </td>
                    <td className="p-4 text-gray-400">No</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-blue-400">COMMITMENT_LEVEL</code>
                    </td>
                    <td className="p-4 text-gray-300">
                      Transaction commitment level
                    </td>
                    <td className="p-4 text-gray-400">
                      <code>confirmed</code>
                    </td>
                    <td className="p-4 text-gray-400">No</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-blue-400">ENABLE_LOGGING</code>
                    </td>
                    <td className="p-4 text-gray-300">
                      Enable debug logging
                    </td>
                    <td className="p-4 text-gray-400">
                      <code>false</code>
                    </td>
                    <td className="p-4 text-gray-400">No</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <code className="text-blue-400">PROOF_TIMEOUT</code>
                    </td>
                    <td className="p-4 text-gray-300">
                      Proof generation timeout in milliseconds
                    </td>
                    <td className="p-4 text-gray-400">
                      <code>30000</code>
                    </td>
                    <td className="p-4 text-gray-400">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Example .env File</h3>
              <CodeBlock
                code={`# Solana Configuration
SOLANA_RPC_URL=https://api.devnet.solana.com
SOLANA_NETWORK=devnet
COMMITMENT_LEVEL=confirmed

# Solstice Configuration
CIRCUITS_PATH=/circuits
PROGRAM_ID=YourCustomProgramIdHere

# Development Options
ENABLE_LOGGING=true
PROOF_TIMEOUT=30000`}
                language="bash"
              />
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
              <p className="text-yellow-300 text-sm">
                <strong>⚠️ Note for React/Next.js:</strong> Client-side environment variables 
                must be prefixed with <code>REACT_APP_</code> (Create React App) or{' '}
                <code>NEXT_PUBLIC_</code> (Next.js) to be accessible in the browser.
              </p>
            </div>
          </section>

          {/* Network Configuration */}
          <section id="network-configuration" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Network Configuration
            </h2>
            <p className="text-gray-300 mb-6">
              Configure the SDK to work with different Solana networks: devnet for development, 
              testnet for testing, and mainnet-beta for production.
            </p>

            {/* Devnet Configuration */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Devnet (Development)</h3>
              <p className="text-gray-300 mb-4">
                Use devnet for local development and testing. Devnet SOL is free and can be 
                obtained from faucets.
              </p>
              <CodeBlock
                code={`import { Connection, clusterApiUrl } from '@solana/web3.js';
import { SolsticeSDK } from '@solsticeprotocol/sdk';

// Connect to devnet
const connection = new Connection(
  clusterApiUrl('devnet'),
  'confirmed'
);

const sdk = new SolsticeSDK({
  connection,
  wallet: { publicKey, signTransaction },
  circuitsPath: '/circuits',
});

console.log('Connected to devnet');`}
                language="typescript"
              />
              <div className="mt-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  <strong>Devnet RPC:</strong> <code className="text-blue-400">https://api.devnet.solana.com</code>
                  <br />
                  <strong>Faucet:</strong> Use <code className="text-blue-400">solana airdrop</code> CLI or web faucets
                </p>
              </div>
            </div>

            {/* Testnet Configuration */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Testnet (Testing)</h3>
              <p className="text-gray-300 mb-4">
                Use testnet for integration testing and staging environments before mainnet deployment.
              </p>
              <CodeBlock
                code={`import { Connection, clusterApiUrl } from '@solana/web3.js';
import { SolsticeSDK } from '@solsticeprotocol/sdk';

// Connect to testnet
const connection = new Connection(
  clusterApiUrl('testnet'),
  'confirmed'
);

const sdk = new SolsticeSDK({
  connection,
  wallet: { publicKey, signTransaction },
  circuitsPath: '/circuits',
});

console.log('Connected to testnet');`}
                language="typescript"
              />
              <div className="mt-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  <strong>Testnet RPC:</strong> <code className="text-blue-400">https://api.testnet.solana.com</code>
                  <br />
                  <strong>Note:</strong> Testnet is reset periodically, so don't rely on persistent data
                </p>
              </div>
            </div>

            {/* Mainnet Configuration */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Mainnet-Beta (Production)</h3>
              <p className="text-gray-300 mb-4">
                Use mainnet-beta for production deployments. Requires real SOL for transaction fees.
              </p>
              <CodeBlock
                code={`import { Connection, clusterApiUrl } from '@solana/web3.js';
import { SolsticeSDK } from '@solsticeprotocol/sdk';

// Connect to mainnet-beta
const connection = new Connection(
  clusterApiUrl('mainnet-beta'),
  'confirmed'
);

const sdk = new SolsticeSDK({
  connection,
  wallet: { publicKey, signTransaction },
  circuitsPath: '/circuits',
});

console.log('Connected to mainnet-beta');`}
                language="typescript"
              />
              <div className="mt-4 bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                <p className="text-red-300 text-sm">
                  <strong>⚠️ Production Warning:</strong> Mainnet transactions use real SOL. 
                  Thoroughly test on devnet/testnet before deploying to mainnet. Consider using 
                  a custom RPC provider for better performance and reliability.
                </p>
              </div>
            </div>

            {/* Custom RPC */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Custom RPC Endpoint</h3>
              <p className="text-gray-300 mb-4">
                For production applications, use a dedicated RPC provider for better performance, 
                reliability, and rate limits.
              </p>
              <CodeBlock
                code={`import { Connection } from '@solana/web3.js';
import { SolsticeSDK } from '@solsticeprotocol/sdk';

// Use custom RPC endpoint (e.g., QuickNode, Alchemy, Helius)
const connection = new Connection(
  process.env.CUSTOM_RPC_URL || 'https://your-rpc-endpoint.com',
  {
    commitment: 'confirmed',
    confirmTransactionInitialTimeout: 60000,
  }
);

const sdk = new SolsticeSDK({
  connection,
  wallet: { publicKey, signTransaction },
  circuitsPath: '/circuits',
});`}
                language="typescript"
              />
              <div className="mt-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Recommended RPC Providers:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  <li>QuickNode - High-performance dedicated nodes</li>
                  <li>Alchemy - Enterprise-grade infrastructure</li>
                  <li>Helius - Optimized for Solana with enhanced APIs</li>
                  <li>GenesysGo - Community-focused RPC provider</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Circuit Configuration */}
          <section id="circuit-configuration" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Circuit Configuration
            </h2>
            <p className="text-gray-300 mb-6">
              Configure circuit file paths and loading behavior for Zero-Knowledge proof generation.
            </p>

            {/* Circuit Path Configuration */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Circuit File Paths</h3>
              <p className="text-gray-300 mb-4">
                The SDK requires access to circuit files (WASM and zkey) for proof generation. 
                Configure the path based on your application structure.
              </p>
              <CodeBlock
                code={`// Browser/React Application
const sdk = new SolsticeSDK({
  connection,
  wallet: { publicKey, signTransaction },
  circuitsPath: '/circuits', // Relative to public directory
});

// Node.js Application
const sdk = new SolsticeSDK({
  connection,
  wallet: { publicKey, signTransaction },
  circuitsPath: './circuits', // Relative to project root
});

// Custom absolute path
const sdk = new SolsticeSDK({
  connection,
  wallet: { publicKey, signTransaction },
  circuitsPath: '/var/app/circuits',
});`}
                language="typescript"
              />
            </div>

            {/* Circuit File Structure */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Required Circuit Files</h3>
              <p className="text-gray-300 mb-4">
                Ensure your circuits directory contains all required files for each proof type:
              </p>
              <CodeBlock
                code={`circuits/
├── age_proof_js/
│   ├── age_proof.wasm
│   ├── witness_calculator.js
│   └── generate_witness.js
├── age_proof_final.zkey
├── age_proof_verification_key.json
├── nationality_proof_js/
│   ├── nationality_proof.wasm
│   ├── witness_calculator.js
│   └── generate_witness.js
├── nationality_proof_final.zkey
├── nationality_proof_verification_key.json
├── uniqueness_proof_js/
│   ├── uniqueness_proof.wasm
│   ├── witness_calculator.js
│   └── generate_witness.js
├── uniqueness_proof_final.zkey
└── uniqueness_proof_verification_key.json`}
                language="bash"
              />
            </div>

            {/* Circuit Parameters */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Circuit Parameters</h3>
              <p className="text-gray-300 mb-4">
                Advanced configuration for circuit loading and proof generation:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-gray-800/50 border border-gray-700 rounded-lg">
                  <thead>
                    <tr className="bg-gray-700/50">
                      <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                        Parameter
                      </th>
                      <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                        Description
                      </th>
                      <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-700">
                      <td className="p-4">
                        <code className="text-blue-400">circuitsPath</code>
                      </td>
                      <td className="p-4 text-gray-300">
                        Base path to circuit files directory
                      </td>
                      <td className="p-4 text-gray-400">
                        <code>/circuits</code>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-4">
                        <code className="text-blue-400">wasmPath</code>
                      </td>
                      <td className="p-4 text-gray-300">
                        Custom path to WASM files (overrides circuitsPath)
                      </td>
                      <td className="p-4 text-gray-400">
                        <code>undefined</code>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-4">
                        <code className="text-blue-400">zkeyPath</code>
                      </td>
                      <td className="p-4 text-gray-300">
                        Custom path to zkey files (overrides circuitsPath)
                      </td>
                      <td className="p-4 text-gray-400">
                        <code>undefined</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <code className="text-blue-400">preloadCircuits</code>
                      </td>
                      <td className="p-4 text-gray-300">
                        Preload circuits on SDK initialization
                      </td>
                      <td className="p-4 text-gray-400">
                        <code>false</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Advanced Options */}
          <section id="advanced-options" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Advanced Options
            </h2>
            <p className="text-gray-300 mb-6">
              Advanced configuration options for fine-tuning SDK behavior and performance.
            </p>

            {/* Complete Configuration Example */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Complete Configuration Example</h3>
              <p className="text-gray-300 mb-4">
                Example showing all available configuration options:
              </p>
              <CodeBlock
                code={`import { Connection, PublicKey } from '@solana/web3.js';
import { SolsticeSDK } from '@solsticeprotocol/sdk';

const sdk = new SolsticeSDK({
  // Required: Solana connection
  connection: new Connection(
    process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com',
    {
      commitment: 'confirmed',
      confirmTransactionInitialTimeout: 60000,
      wsEndpoint: 'wss://api.devnet.solana.com',
    }
  ),

  // Required: Wallet adapter
  wallet: {
    publicKey: wallet.publicKey,
    signTransaction: wallet.signTransaction,
  },

  // Circuit configuration
  circuitsPath: '/circuits',
  
  // Optional: Custom program ID
  programId: new PublicKey('YourCustomProgramIdHere'),

  // Optional: Logging
  enableLogging: process.env.NODE_ENV === 'development',

  // Optional: Timeouts
  proofTimeout: 30000, // 30 seconds
  transactionTimeout: 60000, // 60 seconds

  // Optional: Retry configuration
  maxRetries: 3,
  retryDelay: 1000, // 1 second

  // Optional: Preload circuits for faster first proof
  preloadCircuits: true,
});`}
                language="typescript"
              />
            </div>

            {/* Performance Tuning */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Performance Tuning</h3>
              <p className="text-gray-300 mb-4">
                Optimize SDK performance for your use case:
              </p>
              <CodeBlock
                code={`// For faster initial load (preload circuits)
const sdk = new SolsticeSDK({
  connection,
  wallet,
  circuitsPath: '/circuits',
  preloadCircuits: true, // Load circuits on initialization
});

// For lower memory usage (lazy load circuits)
const sdk = new SolsticeSDK({
  connection,
  wallet,
  circuitsPath: '/circuits',
  preloadCircuits: false, // Load circuits on demand
});

// For production with custom RPC
const sdk = new SolsticeSDK({
  connection: new Connection(
    process.env.CUSTOM_RPC_URL,
    {
      commitment: 'confirmed',
      confirmTransactionInitialTimeout: 90000,
      disableRetryOnRateLimit: false,
    }
  ),
  wallet,
  circuitsPath: '/circuits',
  maxRetries: 5,
  retryDelay: 2000,
});`}
                language="typescript"
              />
            </div>

            {/* Environment-Specific Configurations */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Environment-Specific Configurations</h3>
              <p className="text-gray-300 mb-4">
                Different configurations for development, staging, and production:
              </p>
              <CodeBlock
                code={`// config/solstice.ts
import { Connection, PublicKey } from '@solana/web3.js';

export const getSolsticeConfig = (env: 'development' | 'staging' | 'production') => {
  const configs = {
    development: {
      rpcUrl: 'https://api.devnet.solana.com',
      network: 'devnet',
      programId: 'DevnetProgramId...',
      enableLogging: true,
      preloadCircuits: false,
    },
    staging: {
      rpcUrl: 'https://api.testnet.solana.com',
      network: 'testnet',
      programId: 'TestnetProgramId...',
      enableLogging: true,
      preloadCircuits: true,
    },
    production: {
      rpcUrl: process.env.CUSTOM_RPC_URL || 'https://api.mainnet-beta.solana.com',
      network: 'mainnet-beta',
      programId: 'MainnetProgramId...',
      enableLogging: false,
      preloadCircuits: true,
    },
  };

  return configs[env];
};

// Usage
const config = getSolsticeConfig(process.env.NODE_ENV as any);
const connection = new Connection(config.rpcUrl, 'confirmed');

const sdk = new SolsticeSDK({
  connection,
  wallet,
  circuitsPath: '/circuits',
  programId: new PublicKey(config.programId),
  enableLogging: config.enableLogging,
  preloadCircuits: config.preloadCircuits,
});`}
                language="typescript"
              />
            </div>

            {/* Configuration Best Practices */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-100 mb-3">Configuration Best Practices</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Use environment variables</strong> for sensitive configuration like RPC URLs and program IDs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Test on devnet first</strong> before deploying to testnet or mainnet
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Use custom RPC providers</strong> in production for better reliability and performance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Enable logging in development</strong> to debug issues, but disable in production
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Preload circuits</strong> if you need fast first-proof generation, otherwise lazy load
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Set appropriate timeouts</strong> based on your network conditions and user experience requirements
                  </span>
                </li>
              </ul>
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
