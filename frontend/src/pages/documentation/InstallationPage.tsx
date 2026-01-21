import { Breadcrumb } from '../../components/documentation/Breadcrumb';
import { CodeBlock } from '../../components/documentation/CodeBlock';
import { ExternalLink } from '../../components/documentation/ExternalLink';
import { CheckCircle, AlertCircle } from 'lucide-react';

/**
 * InstallationPage Component
 * 
 * Provides installation instructions, prerequisites, environment setup,
 * and verification steps for the Solstice SDK.
 * 
 * Requirements: 4.1, 4.2, 4.3, 4.4, 4.5
 */
export function InstallationPage() {
  return (
    <div className="max-w-4xl font-serif">
      <Breadcrumb items={[{ label: 'Documentation', path: '/documentation' }, { label: 'Installation' }]} />

      <h1 className="text-4xl lg:text-5xl font-normal tracking-tight text-text-primary mb-6">Installation</h1>
      <p className="text-xl text-text-secondary font-light leading-relaxed mb-12 border-l-2 border-vintage-grape-500/50 pl-6">
        Get started with the Solstice SDK by installing it in your project and configuring
        the necessary dependencies.
      </p>

      {/* Prerequisites */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Prerequisites
        </h2>
        <p className="text-text-secondary font-light mb-6">
          Before installing the Solstice SDK, ensure your development environment meets the
          following requirements:
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
            <CheckCircle className="w-5 h-5 text-vintage-grape-400 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium text-text-primary text-lg">Node.js 18.x or higher</div>
              <p className="text-text-muted text-sm mt-1 font-light">
                The SDK requires Node.js version 18 or later. We recommend using the latest LTS version.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
            <CheckCircle className="w-5 h-5 text-vintage-grape-400 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium text-text-primary text-lg">npm 9.x or yarn 1.22.x</div>
              <p className="text-text-muted text-sm mt-1 font-light">
                A modern package manager is required. Both npm and yarn are supported.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
            <CheckCircle className="w-5 h-5 text-vintage-grape-400 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium text-text-primary text-lg">TypeScript 5.x (recommended)</div>
              <p className="text-text-muted text-sm mt-1 font-light">
                While the SDK works with JavaScript, TypeScript is recommended for better type safety
                and developer experience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
            <CheckCircle className="w-5 h-5 text-vintage-grape-400 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium text-text-primary text-lg">Solana Wallet Adapter</div>
              <p className="text-text-muted text-sm mt-1 font-light">
                For on-chain verification, you'll need @solana/wallet-adapter-react and related packages.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-vintage-grape-900/20 border border-vintage-grape-700/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-vintage-grape-300 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium text-vintage-grape-200 mb-2">Browser Compatibility</div>
              <p className="text-vintage-grape-100/80 text-sm font-light leading-relaxed">
                The SDK is designed to run in modern browsers. Ensure your target browsers support
                WebAssembly and the Web Crypto API. Chrome 90+, Firefox 88+, Safari 14+, and Edge 90+
                are recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NPM Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          NPM Installation
        </h2>
        <p className="text-text-secondary font-light mb-6">
          Install the Solstice SDK using your preferred package manager:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">Using npm</h3>
            <CodeBlock
              code="npm install @solsticeprotocol/sdk"
              language="bash"
              showLineNumbers={false}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">Using yarn</h3>
            <CodeBlock
              code="yarn add @solsticeprotocol/sdk"
              language="bash"
              showLineNumbers={false}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-text-primary mb-3">Using pnpm</h3>
            <CodeBlock
              code="pnpm add @solsticeprotocol/sdk"
              language="bash"
              showLineNumbers={false}
            />
          </div>
        </div>
      </section>

      {/* Additional Dependencies */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Additional Dependencies
        </h2>
        <p className="text-text-secondary font-light mb-6">
          For full functionality, you'll also need to install Solana wallet adapter packages:
        </p>

        <CodeBlock
          code={`npm install @solana/web3.js @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets`}
          language="bash"
          showLineNumbers={false}
        />

        <p className="text-text-muted text-sm mt-4 font-light">
          These packages enable wallet connectivity and transaction signing for on-chain proof verification.
        </p>
      </section>

      {/* Environment Variables */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Environment Variables
        </h2>
        <p className="text-text-secondary font-light mb-6">
          Configure the following environment variables in your project. Create a <code className="text-vintage-grape-300 bg-white/5 px-2 py-1 rounded">.env</code> file
          in your project root:
        </p>

        <CodeBlock
          code={`# Solana Network Configuration
VITE_SOLANA_RPC_URL=https://api.devnet.solana.com
VITE_SOLANA_NETWORK=devnet

# Solstice Program ID (devnet)
VITE_SOLSTICE_PROGRAM_ID=BuJQaP3qTAPgLrmyupbdv2R6EBgK9SnuEJd23HWQqBJv

# Circuit Files Path (relative to public directory)
VITE_CIRCUITS_PATH=/circuits

# Optional: Enable debug logging
VITE_DEBUG_MODE=false`}
          language="bash"
          filename=".env"
        />

        <div className="mt-8 space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-medium text-text-primary mb-2">VITE_SOLANA_RPC_URL</h4>
            <p className="text-text-secondary text-sm font-light">
              The RPC endpoint for connecting to the Solana network. Use devnet for development,
              testnet for testing, or mainnet-beta for production.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-medium text-text-primary mb-2">VITE_SOLANA_NETWORK</h4>
            <p className="text-text-secondary text-sm font-light">
              The network identifier: <code className="text-vintage-grape-300">devnet</code>, <code className="text-vintage-grape-300">testnet</code>,
              or <code className="text-vintage-grape-300">mainnet-beta</code>.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-medium text-text-primary mb-2">VITE_SOLSTICE_PROGRAM_ID</h4>
            <p className="text-text-secondary text-sm font-light">
              The Solana program ID for the Solstice verification contract. Different IDs are used
              for different networks.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="font-medium text-text-primary mb-2">VITE_CIRCUITS_PATH</h4>
            <p className="text-text-secondary text-sm font-light">
              Path to the circuit files directory. These files are required for proof generation
              and should be served from your public directory.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-stone-brown-900/20 border border-stone-brown-700/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-stone-brown-400 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium text-stone-brown-200 mb-2">Network Configuration</div>
              <p className="text-stone-brown-100/80 text-sm font-light">
                Make sure to use the correct program ID for your target network. Using a devnet
                program ID on mainnet will result in transaction failures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package.json Configuration */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Package.json Configuration
        </h2>
        <p className="text-text-secondary font-light mb-6">
          Here's an example <code className="text-vintage-grape-300 bg-white/5 px-2 py-1 rounded">package.json</code> with
          all necessary dependencies:
        </p>

        <CodeBlock
          code={`{
  "name": "my-solstice-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@solana/web3.js": "^1.87.6",
    "@solana/wallet-adapter-react": "^0.15.35",
    "@solana/wallet-adapter-react-ui": "^0.9.35",
    "@solana/wallet-adapter-wallets": "^0.19.32",
    "@solsticeprotocol/sdk": "^1.1.1",
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "@types/react": "^19.0.6",
    "@types/react-dom": "^19.0.2",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.8.3",
    "vite": "^6.0.11"
  }
}`}
          language="json"
          filename="package.json"
        />
      </section>

      {/* Circuit Files Setup */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Circuit Files Setup
        </h2>
        <p className="text-text-secondary font-light mb-6">
          The SDK requires circuit files for proof generation. These files must be accessible
          from your application's public directory.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-medium text-text-primary mb-3">Download Circuit Files</h3>
          <p className="text-text-secondary font-light mb-4">
            Download the pre-compiled circuit files from the SDK repository:
          </p>
          <ExternalLink href="https://github.com/solstice-protocol/solstice-sdk/releases/latest">
            Download Circuit Files
          </ExternalLink>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-medium text-text-primary mb-3">Directory Structure</h3>
          <p className="text-text-secondary font-light mb-4">
            Place the circuit files in your public directory with the following structure:
          </p>
          <CodeBlock
            code={`public/
└── circuits/
    ├── age_proof_final.zkey
    ├── age_proof.wasm
    ├── nationality_proof_final.zkey
    ├── nationality_proof.wasm
    ├── uniqueness_proof_final.zkey
    └── uniqueness_proof.wasm`}
            language="bash"
            showLineNumbers={false}
          />
        </div>
      </section>

      {/* Verification Steps */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Verification Steps
        </h2>
        <p className="text-text-secondary font-light mb-6">
          After installation, verify that everything is set up correctly:
        </p>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium text-text-primary mb-3">1. Check Package Installation</h3>
            <p className="text-text-secondary font-light mb-4">
              Verify the SDK is installed correctly:
            </p>
            <CodeBlock
              code="npm list @solsticeprotocol/sdk"
              language="bash"
              showLineNumbers={false}
            />
            <p className="text-text-muted text-sm mt-3 font-light">
              This should display the installed version (v1.1.1 or later).
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium text-text-primary mb-3">2. Test Import</h3>
            <p className="text-text-secondary font-light mb-4">
              Create a test file to verify the SDK can be imported:
            </p>
            <CodeBlock
              code={`import { SolsticeSDK } from '@solsticeprotocol/sdk';

console.log('Solstice SDK imported successfully!');
console.log('SDK version:', SolsticeSDK.version);`}
              language="typescript"
              filename="test-import.ts"
            />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium text-text-primary mb-3">3. Verify Circuit Files</h3>
            <p className="text-text-secondary font-light mb-4">
              Ensure circuit files are accessible by checking your browser's network tab
              when the application loads. You should see successful requests for:
            </p>
            <ul className="list-disc list-inside text-text-muted font-light space-y-1 ml-4">
              <li><code className="text-vintage-grape-300">age_proof_final.zkey</code></li>
              <li><code className="text-vintage-grape-300">age_proof.wasm</code></li>
              <li><code className="text-vintage-grape-300">nationality_proof_final.zkey</code></li>
              <li><code className="text-vintage-grape-300">nationality_proof.wasm</code></li>
              <li><code className="text-vintage-grape-300">uniqueness_proof_final.zkey</code></li>
              <li><code className="text-vintage-grape-300">uniqueness_proof.wasm</code></li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-medium text-text-primary mb-3">4. Run Development Server</h3>
            <p className="text-text-secondary font-light mb-4">
              Start your development server and check for any errors:
            </p>
            <CodeBlock
              code="npm run dev"
              language="bash"
              showLineNumbers={false}
            />
            <p className="text-text-muted text-sm mt-3 font-light">
              The application should start without errors. Check the console for any warnings
              related to the SDK.
            </p>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Troubleshooting
        </h2>

        <div className="space-y-4">
          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-6">
            <h4 className="font-medium text-red-200 mb-2">Module not found errors</h4>
            <p className="text-red-100/80 text-sm mb-3">
              If you see "Cannot find module '@solsticeprotocol/sdk'":
            </p>
            <ul className="list-disc list-inside text-red-100/70 text-sm space-y-1 ml-4 font-light">
              <li>Clear your node_modules and reinstall: <code className="text-white/80">rm -rf node_modules && npm install</code></li>
              <li>Ensure you're using Node.js 18 or higher</li>
              <li>Check that the package is listed in your package.json dependencies</li>
            </ul>
          </div>

          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-6">
            <h4 className="font-medium text-red-200 mb-2">Circuit files not loading</h4>
            <p className="text-red-100/80 text-sm mb-3">
              If circuit files fail to load (404 errors):
            </p>
            <ul className="list-disc list-inside text-red-100/70 text-sm space-y-1 ml-4 font-light">
              <li>Verify files are in the correct public/circuits directory</li>
              <li>Check that VITE_CIRCUITS_PATH environment variable is set correctly</li>
              <li>Ensure your build tool is configured to serve static files from public directory</li>
            </ul>
          </div>

          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-6">
            <h4 className="font-medium text-red-200 mb-2">TypeScript errors</h4>
            <p className="text-red-100/80 text-sm mb-3">
              If you encounter TypeScript type errors:
            </p>
            <ul className="list-disc list-inside text-red-100/70 text-sm space-y-1 ml-4 font-light">
              <li>Ensure you're using TypeScript 5.x or higher</li>
              <li>Add <code className="text-white/80">"moduleResolution": "bundler"</code> to your tsconfig.json</li>
              <li>Install type definitions: <code className="text-white/80">npm install --save-dev @types/node</code></li>
            </ul>
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
          Now that you have the SDK installed, you're ready to start building:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/documentation/quick-start"
            className="block bg-white/5 border border-white/10 hover:border-vintage-grape-500/50 rounded-xl p-6 transition-all duration-300 hover:bg-white/[0.08] group"
          >
            <h3 className="text-lg font-medium text-text-primary group-hover:text-vintage-grape-200 mb-2 transition-colors">
              Quick Start Guide
            </h3>
            <p className="text-text-muted text-sm font-light">
              Follow our quick start guide to create your first proof in 5 minutes.
            </p>
          </a>

          <a
            href="/documentation/configuration"
            className="block bg-white/5 border border-white/10 hover:border-vintage-grape-500/50 rounded-xl p-6 transition-all duration-300 hover:bg-white/[0.08] group"
          >
            <h3 className="text-lg font-medium text-text-primary group-hover:text-vintage-grape-200 mb-2 transition-colors">
              Configuration Guide
            </h3>
            <p className="text-text-muted text-sm font-light">
              Learn about advanced configuration options and environment setup.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
