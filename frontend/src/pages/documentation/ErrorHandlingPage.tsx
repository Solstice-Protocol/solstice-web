import { Breadcrumb } from '../../components/documentation/Breadcrumb';
import { CodeBlock } from '../../components/documentation/CodeBlock';
import { TableOfContents } from '../../components/documentation/TableOfContents';

/**
 * ErrorHandlingPage Component
 * 
 * Documents all error types, error codes, troubleshooting steps,
 * and best practices for error handling.
 * 
 * Requirements: 10.1, 10.2, 10.3, 10.4, 10.5
 */
export function ErrorHandlingPage() {
  const headings = [
    { id: 'error-types', text: 'Error Types', level: 2 },
    { id: 'error-codes', text: 'Error Codes', level: 2 },
    { id: 'error-handling-patterns', text: 'Error Handling Patterns', level: 2 },
    { id: 'troubleshooting', text: 'Troubleshooting Guide', level: 2 },
    { id: 'best-practices', text: 'Best Practices', level: 2 },
  ];

  return (
    <div className="max-w-6xl">
      <div className="flex gap-8">
        <div className="flex-1 min-w-0">
          <Breadcrumb items={[{ label: 'Documentation', path: '/documentation' }, { label: 'Error Handling' }]} />
          
          <h1 className="text-4xl font-bold text-gray-100 mb-4">Error Handling</h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive guide to handling errors in the Solstice SDK. Learn about error types, 
            error codes, troubleshooting steps, and best practices for robust error handling.
          </p>

          {/* Error Types */}
          <section id="error-types" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Error Types
            </h2>
            <p className="text-gray-300 mb-6">
              The Solstice SDK throws specific error types for different failure scenarios. 
              All errors extend the base <code className="text-blue-400">SolsticeError</code> class.
            </p>

            <div className="space-y-6">
              {/* QRParseError */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  <code className="text-red-400">QRParseError</code>
                </h3>
                <p className="text-gray-300 mb-3">
                  Thrown when Aadhaar QR code data cannot be parsed or is invalid.
                </p>
                <div className="bg-gray-900/50 rounded p-3 mb-3">
                  <p className="text-sm text-gray-400 mb-1"><strong>Common Causes:</strong></p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Invalid QR code format</li>
                    <li>Corrupted QR data</li>
                    <li>Unsupported Aadhaar version</li>
                    <li>Missing required fields</li>
                  </ul>
                </div>
                <CodeBlock
                  code={`try {
  const aadhaarData = await sdk.parseAadhaarQR(qrData);
} catch (error) {
  if (error instanceof QRParseError) {
    console.error('QR parsing failed:', error.message);
    // Show user-friendly message
    alert('Invalid QR code. Please scan again.');
  }
}`}
                  language="typescript"
                  showLineNumbers={false}
                />
              </div>

              {/* ProofGenerationError */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  <code className="text-red-400">ProofGenerationError</code>
                </h3>
                <p className="text-gray-300 mb-3">
                  Thrown when Zero-Knowledge proof generation fails.
                </p>
                <div className="bg-gray-900/50 rounded p-3 mb-3">
                  <p className="text-sm text-gray-400 mb-1"><strong>Common Causes:</strong></p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Circuit files not found or corrupted</li>
                    <li>Invalid input data for circuit</li>
                    <li>Insufficient memory for proof generation</li>
                    <li>Timeout during proof generation</li>
                  </ul>
                </div>
                <CodeBlock
                  code={`try {
  const proof = await sdk.generateAgeProof({ aadhaarData, minAge: 18 });
} catch (error) {
  if (error instanceof ProofGenerationError) {
    console.error('Proof generation failed:', error.message);
    console.error('Error code:', error.code);
    // Retry or show error to user
  }
}`}
                  language="typescript"
                  showLineNumbers={false}
                />
              </div>

              {/* VerificationError */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  <code className="text-red-400">VerificationError</code>
                </h3>
                <p className="text-gray-300 mb-3">
                  Thrown when proof verification fails (locally or on-chain).
                </p>
                <div className="bg-gray-900/50 rounded p-3 mb-3">
                  <p className="text-sm text-gray-400 mb-1"><strong>Common Causes:</strong></p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Invalid proof data</li>
                    <li>Proof doesn't match public signals</li>
                    <li>Wrong verification key</li>
                    <li>Tampered proof</li>
                  </ul>
                </div>
                <CodeBlock
                  code={`try {
  const isValid = await sdk.verifyProofLocally({ proof, proofType: 'age' });
  if (!isValid) {
    throw new VerificationError('Proof verification failed');
  }
} catch (error) {
  if (error instanceof VerificationError) {
    console.error('Verification failed:', error.message);
    // Proof is invalid, do not proceed
  }
}`}
                  language="typescript"
                  showLineNumbers={false}
                />
              </div>

              {/* TransactionError */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  <code className="text-red-400">TransactionError</code>
                </h3>
                <p className="text-gray-300 mb-3">
                  Thrown when Solana transaction submission or confirmation fails.
                </p>
                <div className="bg-gray-900/50 rounded p-3 mb-3">
                  <p className="text-sm text-gray-400 mb-1"><strong>Common Causes:</strong></p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Insufficient SOL for transaction fees</li>
                    <li>Transaction timeout</li>
                    <li>Network congestion</li>
                    <li>Invalid transaction signature</li>
                    <li>Program execution error</li>
                  </ul>
                </div>
                <CodeBlock
                  code={`try {
  const txSignature = await sdk.verifyProofOnChain({ proof, proofType: 'age' });
  await connection.confirmTransaction(txSignature, 'confirmed');
} catch (error) {
  if (error instanceof TransactionError) {
    console.error('Transaction failed:', error.message);
    console.error('Transaction signature:', error.signature);
    // Check if user has enough SOL, retry, or show error
  }
}`}
                  language="typescript"
                  showLineNumbers={false}
                />
              </div>

              {/* WalletError */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  <code className="text-red-400">WalletError</code>
                </h3>
                <p className="text-gray-300 mb-3">
                  Thrown when wallet operations fail (connection, signing, etc.).
                </p>
                <div className="bg-gray-900/50 rounded p-3 mb-3">
                  <p className="text-sm text-gray-400 mb-1"><strong>Common Causes:</strong></p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Wallet not connected</li>
                    <li>User rejected transaction</li>
                    <li>Wallet disconnected during operation</li>
                    <li>Unsupported wallet adapter</li>
                  </ul>
                </div>
                <CodeBlock
                  code={`try {
  if (!publicKey || !signTransaction) {
    throw new WalletError('Wallet not connected');
  }
  const sdk = new SolsticeSDK({ connection, wallet: { publicKey, signTransaction } });
} catch (error) {
  if (error instanceof WalletError) {
    console.error('Wallet error:', error.message);
    // Prompt user to connect wallet
  }
}`}
                  language="typescript"
                  showLineNumbers={false}
                />
              </div>

              {/* ConfigurationError */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  <code className="text-red-400">ConfigurationError</code>
                </h3>
                <p className="text-gray-300 mb-3">
                  Thrown when SDK configuration is invalid or incomplete.
                </p>
                <div className="bg-gray-900/50 rounded p-3 mb-3">
                  <p className="text-sm text-gray-400 mb-1"><strong>Common Causes:</strong></p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Missing required configuration parameters</li>
                    <li>Invalid circuit path</li>
                    <li>Invalid program ID</li>
                    <li>Incompatible configuration options</li>
                  </ul>
                </div>
                <CodeBlock
                  code={`try {
  const sdk = new SolsticeSDK({
    connection,
    wallet,
    circuitsPath: '/invalid/path', // This will throw
  });
} catch (error) {
  if (error instanceof ConfigurationError) {
    console.error('Configuration error:', error.message);
    // Fix configuration and retry
  }
}`}
                  language="typescript"
                  showLineNumbers={false}
                />
              </div>
            </div>
          </section>

          {/* Error Codes */}
          <section id="error-codes" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Error Codes
            </h2>
            <p className="text-gray-300 mb-6">
              Each error includes a specific error code for programmatic handling and debugging.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-gray-800/50 border border-gray-700 rounded-lg">
                <thead>
                  <tr className="bg-gray-700/50">
                    <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                      Code
                    </th>
                    <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                      Error Type
                    </th>
                    <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                      Description
                    </th>
                    <th className="text-left p-4 text-gray-100 font-semibold border-b border-gray-700">
                      Resolution
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">QR_001</code>
                    </td>
                    <td className="p-4 text-gray-300">QRParseError</td>
                    <td className="p-4 text-gray-300">Invalid QR format</td>
                    <td className="p-4 text-gray-400">Verify QR code is from Aadhaar card</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">QR_002</code>
                    </td>
                    <td className="p-4 text-gray-300">QRParseError</td>
                    <td className="p-4 text-gray-300">Missing required fields</td>
                    <td className="p-4 text-gray-400">Ensure QR contains all required data</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">QR_003</code>
                    </td>
                    <td className="p-4 text-gray-300">QRParseError</td>
                    <td className="p-4 text-gray-300">Corrupted QR data</td>
                    <td className="p-4 text-gray-400">Rescan QR code</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">PROOF_001</code>
                    </td>
                    <td className="p-4 text-gray-300">ProofGenerationError</td>
                    <td className="p-4 text-gray-300">Circuit files not found</td>
                    <td className="p-4 text-gray-400">Check circuitsPath configuration</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">PROOF_002</code>
                    </td>
                    <td className="p-4 text-gray-300">ProofGenerationError</td>
                    <td className="p-4 text-gray-300">Invalid circuit inputs</td>
                    <td className="p-4 text-gray-400">Verify input data format</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">PROOF_003</code>
                    </td>
                    <td className="p-4 text-gray-300">ProofGenerationError</td>
                    <td className="p-4 text-gray-300">Proof generation timeout</td>
                    <td className="p-4 text-gray-400">Increase timeout or retry</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">VERIFY_001</code>
                    </td>
                    <td className="p-4 text-gray-300">VerificationError</td>
                    <td className="p-4 text-gray-300">Invalid proof</td>
                    <td className="p-4 text-gray-400">Regenerate proof</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">VERIFY_002</code>
                    </td>
                    <td className="p-4 text-gray-300">VerificationError</td>
                    <td className="p-4 text-gray-300">Proof-signal mismatch</td>
                    <td className="p-4 text-gray-400">Check proof and public signals</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">TX_001</code>
                    </td>
                    <td className="p-4 text-gray-300">TransactionError</td>
                    <td className="p-4 text-gray-300">Insufficient SOL</td>
                    <td className="p-4 text-gray-400">Add SOL to wallet</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">TX_002</code>
                    </td>
                    <td className="p-4 text-gray-300">TransactionError</td>
                    <td className="p-4 text-gray-300">Transaction timeout</td>
                    <td className="p-4 text-gray-400">Retry transaction</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">TX_003</code>
                    </td>
                    <td className="p-4 text-gray-300">TransactionError</td>
                    <td className="p-4 text-gray-300">Program execution failed</td>
                    <td className="p-4 text-gray-400">Check program logs</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">WALLET_001</code>
                    </td>
                    <td className="p-4 text-gray-300">WalletError</td>
                    <td className="p-4 text-gray-300">Wallet not connected</td>
                    <td className="p-4 text-gray-400">Connect wallet</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-4">
                      <code className="text-red-400">WALLET_002</code>
                    </td>
                    <td className="p-4 text-gray-300">WalletError</td>
                    <td className="p-4 text-gray-300">User rejected transaction</td>
                    <td className="p-4 text-gray-400">Prompt user to approve</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <code className="text-red-400">CONFIG_001</code>
                    </td>
                    <td className="p-4 text-gray-300">ConfigurationError</td>
                    <td className="p-4 text-gray-300">Invalid configuration</td>
                    <td className="p-4 text-gray-400">Check SDK configuration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Error Handling Patterns */}
          <section id="error-handling-patterns" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Error Handling Patterns
            </h2>
            <p className="text-gray-300 mb-6">
              Best practices and patterns for handling errors in your application.
            </p>

            {/* Basic Error Handling */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Basic Error Handling</h3>
              <p className="text-gray-300 mb-4">
                Always wrap SDK operations in try-catch blocks:
              </p>
              <CodeBlock
                code={`import { SolsticeSDK, QRParseError, ProofGenerationError } from '@solsticeprotocol/sdk';

async function verifyAge(qrData: string, minAge: number) {
  try {
    // Parse QR code
    const aadhaarData = await sdk.parseAadhaarQR(qrData);
    
    // Generate proof
    const proof = await sdk.generateAgeProof({ aadhaarData, minAge });
    
    // Verify on-chain
    const txSignature = await sdk.verifyProofOnChain({ proof, proofType: 'age' });
    
    return { success: true, txSignature };
  } catch (error) {
    console.error('Age verification failed:', error);
    
    // Handle specific error types
    if (error instanceof QRParseError) {
      return { success: false, error: 'Invalid QR code. Please scan again.' };
    }
    
    if (error instanceof ProofGenerationError) {
      return { success: false, error: 'Proof generation failed. Please try again.' };
    }
    
    // Generic error
    return { success: false, error: 'Verification failed. Please try again.' };
  }
}`}
                language="typescript"
              />
            </div>

            {/* Error Recovery with Retry */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Error Recovery with Retry</h3>
              <p className="text-gray-300 mb-4">
                Implement retry logic for transient errors:
              </p>
              <CodeBlock
                code={`async function verifyProofWithRetry(
  proof: any,
  proofType: string,
  maxRetries = 3
): Promise<string> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(\`Verification attempt \${attempt}/\${maxRetries}\`);
      
      const txSignature = await sdk.verifyProofOnChain({ proof, proofType });
      
      // Wait for confirmation
      await connection.confirmTransaction(txSignature, 'confirmed');
      
      console.log('Verification successful!');
      return txSignature;
    } catch (error) {
      lastError = error as Error;
      console.error(\`Attempt \${attempt} failed:\`, error);
      
      // Don't retry for certain errors
      if (error instanceof VerificationError || error instanceof WalletError) {
        throw error; // These errors won't be fixed by retrying
      }
      
      // Wait before retrying (exponential backoff)
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
        console.log(\`Retrying in \${delay}ms...\`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw new Error(\`Verification failed after \${maxRetries} attempts: \${lastError.message}\`);
}`}
                language="typescript"
              />
            </div>

            {/* User-Friendly Error Messages */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">User-Friendly Error Messages</h3>
              <p className="text-gray-300 mb-4">
                Convert technical errors into user-friendly messages:
              </p>
              <CodeBlock
                code={`function getErrorMessage(error: Error): string {
  // Map error codes to user-friendly messages
  const errorMessages: Record<string, string> = {
    'QR_001': 'The QR code format is invalid. Please scan your Aadhaar QR code.',
    'QR_002': 'The QR code is missing required information. Please use a valid Aadhaar QR code.',
    'QR_003': 'The QR code data is corrupted. Please try scanning again.',
    'PROOF_001': 'Circuit files could not be loaded. Please refresh the page.',
    'PROOF_002': 'Invalid data provided. Please check your inputs.',
    'PROOF_003': 'Proof generation timed out. Please try again.',
    'VERIFY_001': 'The proof is invalid. Please generate a new proof.',
    'TX_001': 'Insufficient SOL in your wallet. Please add SOL and try again.',
    'TX_002': 'Transaction timed out. Please try again.',
    'TX_003': 'Transaction failed. Please check your connection and try again.',
    'WALLET_001': 'Please connect your wallet to continue.',
    'WALLET_002': 'Transaction was rejected. Please approve the transaction to continue.',
    'CONFIG_001': 'Configuration error. Please contact support.',
  };
  
  // Check if error has a code
  if ('code' in error && typeof error.code === 'string') {
    return errorMessages[error.code] || error.message;
  }
  
  // Check error type
  if (error instanceof QRParseError) {
    return 'Invalid QR code. Please scan your Aadhaar QR code again.';
  }
  
  if (error instanceof ProofGenerationError) {
    return 'Proof generation failed. Please try again.';
  }
  
  if (error instanceof WalletError) {
    return 'Wallet error. Please check your wallet connection.';
  }
  
  // Default message
  return 'An error occurred. Please try again.';
}

// Usage in React component
function MyComponent() {
  const [error, setError] = useState('');
  
  const handleVerify = async () => {
    try {
      await verifyAge(qrData, 18);
    } catch (err) {
      const message = getErrorMessage(err as Error);
      setError(message);
    }
  };
  
  return (
    <div>
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
  );
}`}
                language="typescript"
              />
            </div>

            {/* Error Logging */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-100 mb-3">Error Logging and Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Implement comprehensive error logging for debugging and monitoring:
              </p>
              <CodeBlock
                code={`// errorLogger.ts
interface ErrorLog {
  timestamp: string;
  errorType: string;
  errorCode?: string;
  message: string;
  stack?: string;
  context?: any;
}

class ErrorLogger {
  private logs: ErrorLog[] = [];
  
  log(error: Error, context?: any) {
    const errorLog: ErrorLog = {
      timestamp: new Date().toISOString(),
      errorType: error.constructor.name,
      errorCode: 'code' in error ? (error as any).code : undefined,
      message: error.message,
      stack: error.stack,
      context,
    };
    
    this.logs.push(errorLog);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorLog);
    }
    
    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToMonitoring(errorLog);
    }
  }
  
  private sendToMonitoring(errorLog: ErrorLog) {
    // Send to your monitoring service (Sentry, LogRocket, etc.)
    // Example: Sentry.captureException(errorLog);
  }
  
  getLogs(): ErrorLog[] {
    return this.logs;
  }
  
  clearLogs() {
    this.logs = [];
  }
}

export const errorLogger = new ErrorLogger();

// Usage
try {
  const proof = await sdk.generateAgeProof({ aadhaarData, minAge: 18 });
} catch (error) {
  errorLogger.log(error as Error, {
    operation: 'generateAgeProof',
    minAge: 18,
    userId: user.id,
  });
  throw error;
}`}
                language="typescript"
              />
            </div>
          </section>

          {/* Troubleshooting Guide */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Troubleshooting Guide
            </h2>
            <p className="text-gray-300 mb-6">
              Common issues and their solutions.
            </p>

            <div className="space-y-6">
              {/* Issue 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  ❌ "Circuit files not found" Error
                </h3>
                <p className="text-gray-300 mb-3">
                  <strong>Symptoms:</strong> ProofGenerationError with code PROOF_001
                </p>
                <p className="text-gray-300 mb-3">
                  <strong>Causes:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
                  <li>Circuit files not in the correct directory</li>
                  <li>Incorrect circuitsPath configuration</li>
                  <li>Missing circuit files</li>
                </ul>
                <p className="text-gray-300 mb-2">
                  <strong>Solutions:</strong>
                </p>
                <ol className="list-decimal list-inside text-gray-400 space-y-1">
                  <li>Verify circuit files are in the public/circuits directory (browser) or ./circuits (Node.js)</li>
                  <li>Check circuitsPath configuration matches your directory structure</li>
                  <li>Ensure all required files are present (WASM, zkey, verification key)</li>
                  <li>Check browser console for 404 errors when loading circuit files</li>
                </ol>
              </div>

              {/* Issue 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  ❌ "Insufficient SOL" Error
                </h3>
                <p className="text-gray-300 mb-3">
                  <strong>Symptoms:</strong> TransactionError with code TX_001
                </p>
                <p className="text-gray-300 mb-3">
                  <strong>Causes:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
                  <li>Wallet has insufficient SOL for transaction fees</li>
                  <li>Transaction requires more SOL than available</li>
                </ul>
                <p className="text-gray-300 mb-2">
                  <strong>Solutions:</strong>
                </p>
                <ol className="list-decimal list-inside text-gray-400 space-y-1">
                  <li>Add SOL to your wallet (use faucet for devnet/testnet)</li>
                  <li>Check wallet balance before submitting transactions</li>
                  <li>Implement balance checking in your UI</li>
                </ol>
              </div>

              {/* Issue 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  ❌ Proof Generation Takes Too Long
                </h3>
                <p className="text-gray-300 mb-3">
                  <strong>Symptoms:</strong> Proof generation exceeds 10 seconds or times out
                </p>
                <p className="text-gray-300 mb-3">
                  <strong>Causes:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
                  <li>Slow device or limited CPU resources</li>
                  <li>Circuit files loading slowly</li>
                  <li>Browser throttling background tabs</li>
                </ul>
                <p className="text-gray-300 mb-2">
                  <strong>Solutions:</strong>
                </p>
                <ol className="list-decimal list-inside text-gray-400 space-y-1">
                  <li>Increase proofTimeout configuration</li>
                  <li>Preload circuits on SDK initialization</li>
                  <li>Show loading indicator to improve user experience</li>
                  <li>Ensure tab is active during proof generation</li>
                  <li>Consider using Web Workers for proof generation</li>
                </ol>
              </div>

              {/* Issue 4 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  ❌ "Wallet not connected" Error
                </h3>
                <p className="text-gray-300 mb-3">
                  <strong>Symptoms:</strong> WalletError with code WALLET_001
                </p>
                <p className="text-gray-300 mb-3">
                  <strong>Causes:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
                  <li>User hasn't connected wallet</li>
                  <li>Wallet disconnected during operation</li>
                  <li>Wallet adapter not properly initialized</li>
                </ul>
                <p className="text-gray-300 mb-2">
                  <strong>Solutions:</strong>
                </p>
                <ol className="list-decimal list-inside text-gray-400 space-y-1">
                  <li>Check wallet connection before SDK operations</li>
                  <li>Show wallet connection UI prominently</li>
                  <li>Handle wallet disconnection events</li>
                  <li>Verify wallet adapter is properly configured</li>
                </ol>
              </div>

              {/* Issue 5 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  ❌ Transaction Timeout
                </h3>
                <p className="text-gray-300 mb-3">
                  <strong>Symptoms:</strong> TransactionError with code TX_002
                </p>
                <p className="text-gray-300 mb-3">
                  <strong>Causes:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
                  <li>Network congestion</li>
                  <li>RPC endpoint issues</li>
                  <li>Transaction not confirmed in time</li>
                </ul>
                <p className="text-gray-300 mb-2">
                  <strong>Solutions:</strong>
                </p>
                <ol className="list-decimal list-inside text-gray-400 space-y-1">
                  <li>Implement retry logic with exponential backoff</li>
                  <li>Use a reliable RPC provider</li>
                  <li>Increase transaction timeout configuration</li>
                  <li>Check Solana network status</li>
                  <li>Use 'confirmed' commitment level instead of 'finalized'</li>
                </ol>
              </div>

              {/* Issue 6 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  ❌ Invalid QR Code
                </h3>
                <p className="text-gray-300 mb-3">
                  <strong>Symptoms:</strong> QRParseError with codes QR_001, QR_002, or QR_003
                </p>
                <p className="text-gray-300 mb-3">
                  <strong>Causes:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
                  <li>QR code not from Aadhaar card</li>
                  <li>Corrupted or incomplete QR data</li>
                  <li>Unsupported Aadhaar version</li>
                </ul>
                <p className="text-gray-300 mb-2">
                  <strong>Solutions:</strong>
                </p>
                <ol className="list-decimal list-inside text-gray-400 space-y-1">
                  <li>Verify QR code is from a valid Aadhaar card</li>
                  <li>Ensure QR code is fully visible and not damaged</li>
                  <li>Try scanning QR code again</li>
                  <li>Check QR scanner library is working correctly</li>
                  <li>Validate QR data format before parsing</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4 border-b border-gray-700 pb-2">
              Best Practices
            </h2>
            <p className="text-gray-300 mb-6">
              Follow these best practices for robust error handling in production applications.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Always Use Try-Catch Blocks
                </h3>
                <p className="text-gray-300 text-sm">
                  Wrap all SDK operations in try-catch blocks to handle errors gracefully. 
                  Never let errors propagate unhandled to the user.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Handle Specific Error Types
                </h3>
                <p className="text-gray-300 text-sm">
                  Check for specific error types (QRParseError, ProofGenerationError, etc.) 
                  to provide targeted error messages and recovery strategies.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Provide User-Friendly Messages
                </h3>
                <p className="text-gray-300 text-sm">
                  Convert technical error messages into clear, actionable messages that users 
                  can understand and act upon.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Implement Retry Logic
                </h3>
                <p className="text-gray-300 text-sm">
                  For transient errors (network issues, timeouts), implement retry logic with 
                  exponential backoff. Don't retry for permanent errors (invalid proof, wallet rejection).
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Log Errors Comprehensively
                </h3>
                <p className="text-gray-300 text-sm">
                  Log all errors with context (operation, user ID, timestamp) for debugging. 
                  Use error monitoring services in production (Sentry, LogRocket, etc.).
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Validate Inputs Early
                </h3>
                <p className="text-gray-300 text-sm">
                  Validate user inputs (QR data, wallet connection, etc.) before calling SDK 
                  methods to catch errors early and provide immediate feedback.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Show Loading States
                </h3>
                <p className="text-gray-300 text-sm">
                  Display loading indicators during long operations (proof generation, transaction 
                  confirmation) to improve user experience and reduce perceived errors.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Test Error Scenarios
                </h3>
                <p className="text-gray-300 text-sm">
                  Test your error handling with various failure scenarios: invalid QR codes, 
                  network failures, insufficient SOL, wallet disconnection, etc.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Provide Fallback Options
                </h3>
                <p className="text-gray-300 text-sm">
                  When operations fail, provide users with alternative actions: retry, contact 
                  support, use different wallet, etc.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-2 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Monitor Error Rates
                </h3>
                <p className="text-gray-300 text-sm">
                  Track error rates and types in production to identify systemic issues and 
                  improve reliability over time.
                </p>
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
