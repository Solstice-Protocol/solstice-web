/**
 * Search Index for Documentation Pages
 * 
 * This file contains the search index data structure for all documentation pages.
 * It includes page titles, content snippets, and headings for fuzzy search functionality.
 */

export interface SearchIndexEntry {
  pageId: string;
  title: string;
  content: string;
  headings: string[];
  path: string;
}

/**
 * Documentation search index
 * Contains searchable content for all documentation pages
 */
export const searchIndex: SearchIndexEntry[] = [
  {
    pageId: 'overview',
    title: 'Overview',
    path: '/documentation',
    headings: [
      'What is Solstice SDK?',
      'Key Features',
      'Proof Types',
      'Use Cases',
      'Performance Metrics'
    ],
    content: `
      Solstice SDK Overview
      Zero-Knowledge Identity Verification SDK for Solana
      
      What is Solstice SDK?
      The Solstice SDK (@solsticeprotocol/sdk) is a comprehensive Zero-Knowledge Identity Verification SDK 
      built for the Solana blockchain. It enables privacy-preserving identity verification using ZK proofs, 
      allowing developers to verify user attributes without exposing sensitive personal information.
      
      Key Features
      - Privacy-preserving verification using Zero-Knowledge proofs
      - Aadhaar QR code processing for identity verification
      - Groth16 SNARKs for efficient proof generation
      - On-chain verification on Solana blockchain
      - Three types of proofs: Age, Nationality, and Uniqueness
      
      Proof Types
      Age Proof: Verify that a user meets age requirements without revealing their exact age
      Nationality Proof: Verify a user's nationality without exposing other identity details
      Uniqueness Proof: Prevent Sybil attacks by ensuring one identity per user
      
      Use Cases
      DeFi: Age verification for regulatory compliance in decentralized finance applications
      Voting: Ensure one vote per person with uniqueness proofs
      Gaming: Age-gated content and anti-cheat mechanisms
      
      Performance Metrics
      Proof generation time: ~5 seconds
      Proof size: 256 bytes (compressed)
      On-chain verification: <100ms
    `
  },
  {
    pageId: 'installation',
    title: 'Installation',
    path: '/documentation/installation',
    headings: [
      'NPM Installation',
      'Prerequisites',
      'Environment Variables',
      'Package Configuration',
      'Verification'
    ],
    content: `
      Installation Guide
      
      NPM Installation
      Install the Solstice SDK using npm or yarn:
      npm install @solsticeprotocol/sdk
      yarn add @solsticeprotocol/sdk
      
      Prerequisites
      - Node.js version 18.0.0 or higher
      - npm version 8.0.0 or higher
      - Solana wallet adapter packages
      - React 18+ (for React applications)
      
      Environment Variables
      Configure the following environment variables:
      VITE_SOLANA_NETWORK: Network to connect to (devnet, testnet, mainnet-beta)
      VITE_PROGRAM_ID: Solstice program ID on Solana
      VITE_RPC_ENDPOINT: Custom RPC endpoint (optional)
      
      Package Configuration
      Add the SDK to your package.json dependencies
      Configure TypeScript for proper type checking
      Set up circuit files in your public directory
      
      Verification
      Verify installation by importing the SDK
      Check that all dependencies are installed correctly
      Test basic SDK initialization
    `
  },
  {
    pageId: 'quick-start',
    title: 'Quick Start',
    path: '/documentation/quick-start',
    headings: [
      'Basic Setup',
      'Initialize SDK',
      'Generate Proof',
      'Verify On-Chain',
      'Complete Example'
    ],
    content: `
      Quick Start Guide
      Get started with Solstice SDK in 5 minutes
      
      Basic Setup
      Import the SDK and initialize with your configuration
      Connect to Solana network
      Set up wallet adapter
      
      Initialize SDK
      Create a new SolsticeSDK instance
      Configure network and program ID
      Connect wallet
      
      Generate Proof
      Scan Aadhaar QR code
      Extract identity data
      Generate age, nationality, or uniqueness proof
      
      Verify On-Chain
      Submit proof to Solana blockchain
      Verify proof using on-chain program
      Handle verification result
      
      Complete Example
      Full integration flow from setup to verification
      Error handling and best practices
      State management for React applications
    `
  },
  {
    pageId: 'api-reference',
    title: 'API Reference',
    path: '/documentation/api-reference',
    headings: [
      'SolsticeSDK Class',
      'ProofGenerator Class',
      'SolanaClient Class',
      'QRProcessor Class',
      'Types and Interfaces',
      'Utility Functions'
    ],
    content: `
      API Reference
      Complete documentation of all SDK classes and methods
      
      SolsticeSDK Class
      Main SDK class for interacting with Solstice Protocol
      Methods: initialize, generateProof, verifyProof, getIdentityStatus
      
      ProofGenerator Class
      Generate Zero-Knowledge proofs from identity data
      Methods: generateAgeProof, generateNationalityProof, generateUniquenessProof
      Parameters: identityData, proofType, options
      
      SolanaClient Class
      Interact with Solana blockchain
      Methods: submitProof, verifyOnChain, getIdentityAccount, initializeRegistry
      
      QRProcessor Class
      Process Aadhaar QR codes and extract identity data
      Methods: scanQR, parseQRData, extractIdentityData
      
      Types and Interfaces
      ProofType: 'age' | 'nationality' | 'uniqueness'
      IdentityData: Interface for identity information
      ProofResult: Interface for proof generation result
      VerificationResult: Interface for verification result
      
      Utility Functions
      Helper functions for common operations
      Error handling utilities
      Data validation functions
    `
  },
  {
    pageId: 'integration-guide',
    title: 'Integration Guide',
    path: '/documentation/integration-guide',
    headings: [
      'React Integration',
      'Next.js Integration',
      'Node.js Integration',
      'State Management',
      'Best Practices'
    ],
    content: `
      Integration Guide
      Framework-specific integration instructions
      
      React Integration
      Set up Solstice SDK in React applications
      Use React hooks for state management
      Handle wallet connection with Solana wallet adapter
      Implement proof generation flow
      
      Next.js Integration
      Server-side rendering considerations
      Client-side SDK initialization
      API routes for backend verification
      Environment variable configuration
      
      Node.js Integration
      Backend integration for server-side verification
      Express.js middleware examples
      Database integration for storing proofs
      API endpoint implementation
      
      State Management
      Redux integration patterns
      Context API usage
      Zustand state management
      React Query for async operations
      
      Best Practices
      Error handling strategies
      Loading states and user feedback
      Security considerations
      Performance optimization
    `
  },
  {
    pageId: 'examples',
    title: 'Examples',
    path: '/documentation/examples',
    headings: [
      'DeFi Use Case',
      'Voting Application',
      'Gaming Application',
      'Full Code Examples',
      'Example Repositories'
    ],
    content: `
      Examples
      Real-world code examples for different use cases
      
      DeFi Use Case
      Age verification for regulatory compliance
      Implement KYC without revealing identity
      Integrate with DeFi protocols
      Handle proof verification in smart contracts
      
      Voting Application
      One person, one vote with uniqueness proofs
      Anonymous voting with identity verification
      Prevent Sybil attacks
      Integrate with governance systems
      
      Gaming Application
      Age-gated content verification
      Anti-cheat mechanisms with uniqueness proofs
      Player identity verification
      Reward distribution based on verified identity
      
      Full Code Examples
      Complete working examples with explanatory comments
      Step-by-step implementation guides
      Error handling and edge cases
      Testing strategies
      
      Example Repositories
      Links to full example projects on GitHub
      Starter templates for different frameworks
      Demo applications
    `
  },
  {
    pageId: 'configuration',
    title: 'Configuration',
    path: '/documentation/configuration',
    headings: [
      'Environment Variables',
      'Network Configuration',
      'Circuit Configuration',
      'Advanced Options',
      'Configuration Examples'
    ],
    content: `
      Configuration
      Configure Solstice SDK for your environment
      
      Environment Variables
      VITE_SOLANA_NETWORK: devnet, testnet, or mainnet-beta
      VITE_PROGRAM_ID: Solstice program ID
      VITE_RPC_ENDPOINT: Custom RPC endpoint
      VITE_CIRCUIT_PATH: Path to circuit files
      
      Network Configuration
      Devnet: Development and testing
      Testnet: Pre-production testing
      Mainnet-beta: Production deployment
      Custom RPC endpoints for better performance
      
      Circuit Configuration
      Circuit file paths and locations
      Proving key configuration
      Verification key setup
      WASM file configuration
      
      Advanced Options
      Custom proof parameters
      Gas optimization settings
      Timeout configurations
      Retry logic settings
      
      Configuration Examples
      Development environment setup
      Production configuration
      Multi-network support
      Environment-specific settings
    `
  },
  {
    pageId: 'error-handling',
    title: 'Error Handling',
    path: '/documentation/error-handling',
    headings: [
      'Error Types',
      'Error Codes',
      'Troubleshooting',
      'Error Handling Patterns',
      'Best Practices'
    ],
    content: `
      Error Handling
      Handle errors gracefully in your application
      
      Error Types
      NetworkError: Connection issues with Solana network
      ProofGenerationError: Errors during proof generation
      VerificationError: Proof verification failures
      QRScanError: QR code scanning issues
      WalletError: Wallet connection problems
      
      Error Codes
      ERR_NETWORK_TIMEOUT: Network request timeout
      ERR_INVALID_PROOF: Invalid proof format
      ERR_VERIFICATION_FAILED: On-chain verification failed
      ERR_QR_INVALID: Invalid QR code format
      ERR_WALLET_NOT_CONNECTED: Wallet not connected
      
      Troubleshooting
      Common error scenarios and solutions
      Debug mode and logging
      Network connectivity issues
      Circuit file loading problems
      Wallet connection troubleshooting
      
      Error Handling Patterns
      Try-catch blocks for async operations
      Error boundaries in React
      Graceful degradation strategies
      User-friendly error messages
      
      Best Practices
      Log errors for debugging
      Provide clear user feedback
      Implement retry logic
      Handle edge cases
      Monitor error rates
    `
  },
  {
    pageId: 'security',
    title: 'Security',
    path: '/documentation/security',
    headings: [
      'Privacy Guarantees',
      'Cryptographic Primitives',
      'Key Management',
      'Data Handling',
      'Secure Integration'
    ],
    content: `
      Security
      Security features and best practices
      
      Privacy Guarantees
      Zero-Knowledge proofs ensure privacy
      No personal data exposed on-chain
      Selective disclosure of attributes
      Cryptographic guarantees of privacy
      
      Cryptographic Primitives
      Groth16 SNARKs for proof generation
      Poseidon hash function
      BN254 elliptic curve
      Trusted setup ceremony
      
      Key Management
      Secure storage of private keys
      Wallet integration best practices
      Key rotation strategies
      Hardware wallet support
      
      Data Handling
      Minimize data collection
      Secure data transmission
      Encrypted storage recommendations
      Data retention policies
      
      Secure Integration
      Input validation and sanitization
      Prevent replay attacks
      Rate limiting recommendations
      Audit logging
      Security testing strategies
    `
  },
  {
    pageId: 'performance',
    title: 'Performance',
    path: '/documentation/performance',
    headings: [
      'Benchmark Data',
      'Proof Size Metrics',
      'Optimization Tips',
      'Performance Trade-offs',
      'Profiling'
    ],
    content: `
      Performance
      Performance characteristics and optimization
      
      Benchmark Data
      Proof generation time: ~5 seconds
      On-chain verification: <100ms
      QR code scanning: <1 second
      Network latency: varies by RPC
      
      Proof Size Metrics
      Compressed proof size: 256 bytes
      Uncompressed proof: ~1KB
      Public inputs: 32 bytes
      Total transaction size: ~500 bytes
      
      Optimization Tips
      Use custom RPC endpoints for faster network access
      Cache circuit files for faster loading
      Batch multiple verifications
      Optimize proof generation parameters
      Use web workers for proof generation
      
      Performance Trade-offs
      Proof size vs generation time
      Security level vs performance
      Network speed vs decentralization
      Client-side vs server-side generation
      
      Profiling
      Measure proof generation time
      Monitor network latency
      Track transaction confirmation time
      Identify bottlenecks
      Performance testing strategies
    `
  }
];
