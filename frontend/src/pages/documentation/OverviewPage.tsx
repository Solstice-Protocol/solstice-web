import { Breadcrumb } from '../../components/documentation/Breadcrumb';
import { ExternalLink } from '../../components/documentation/ExternalLink';

/**
 * OverviewPage Component
 * 
 * Provides an introduction to the Solstice SDK, including key features,
 * supported proof types, use cases, and performance metrics.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5
 */
export function OverviewPage() {
  return (
    <div className="max-w-4xl font-serif">
      <Breadcrumb items={[{ label: 'Documentation', path: '/documentation' }, { label: 'Overview' }]} />

      <h1 className="text-4xl lg:text-5xl font-normal tracking-tight text-text-primary mb-6">Solstice SDK Overview</h1>
      <p className="text-xl text-text-secondary font-light leading-relaxed mb-12 border-l-2 border-vintage-grape-500/50 pl-6">
        A Zero-Knowledge Identity Verification SDK for Solana that enables privacy-preserving
        identity verification using ZK proofs.
      </p>

      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-6 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          What is Solstice SDK?
        </h2>
        <div className="prose prose-lg prose-invert text-text-secondary font-light max-w-none">
          <p className="mb-4">
            The Solstice SDK <code className="text-vintage-grape-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">@solsticeprotocol/sdk</code> is a comprehensive TypeScript library that enables
            developers to integrate privacy-preserving identity verification into their Solana applications.
            By leveraging Zero-Knowledge proofs, users can prove attributes about their identity without
            revealing the underlying personal information.
          </p>
          <p>
            Built on top of Aadhaar QR code data and Groth16 SNARKs, Solstice provides a secure,
            efficient, and user-friendly way to implement identity verification in decentralized applications.
          </p>
        </div>
      </section>

      {/* Proof Types */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Supported Proof Types
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-5 border-l-2 border-vintage-grape-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg font-medium text-text-primary mb-2">Age Proof</h3>
            <p className="text-text-muted text-sm leading-relaxed font-light">
              Prove that a user meets age requirements (e.g., over 18, over 21) without revealing
              their exact date of birth or other personal information.
            </p>
          </div>

          <div className="p-5 border-l-2 border-vintage-grape-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg font-medium text-text-primary mb-2">Nationality Proof</h3>
            <p className="text-text-muted text-sm leading-relaxed font-light">
              Verify a user's nationality or geographic eligibility for region-restricted services
              while maintaining privacy of their full identity.
            </p>
          </div>

          <div className="p-5 border-l-2 border-vintage-grape-500/30 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <h3 className="text-lg font-medium text-text-primary mb-2">Uniqueness Proof</h3>
            <p className="text-text-muted text-sm leading-relaxed font-light">
              Ensure that each user can only register once, preventing Sybil attacks and duplicate
              accounts without linking identities across sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Key Features
        </h2>

        <div className="space-y-4">
          <div className="p-5 border-l-2 border-vintage-grape-500/20 hover:border-vintage-grape-500/40 transition-colors">
            <h3 className="text-lg font-medium text-text-primary mb-2">Privacy-Preserving Verification</h3>
            <p className="text-text-secondary font-light">
              Users can prove identity attributes without revealing sensitive personal information.
              Zero-Knowledge proofs ensure that verifiers learn nothing beyond the validity of the claim.
            </p>
          </div>

          <div className="p-5 border-l-2 border-grey-olive-500/20 hover:border-grey-olive-500/40 transition-colors">
            <h3 className="text-lg font-medium text-text-primary mb-2">Aadhaar QR Code Processing</h3>
            <p className="text-text-secondary font-light">
              Seamlessly extract and process identity data from Aadhaar QR codes. The SDK handles
              QR code scanning, data extraction, and validation automatically.
            </p>
          </div>

          <div className="p-5 border-l-2 border-stone-brown-500/20 hover:border-stone-brown-500/40 transition-colors">
            <h3 className="text-lg font-medium text-text-primary mb-2">Groth16 SNARKs</h3>
            <p className="text-text-secondary font-light">
              Built on battle-tested Groth16 SNARK cryptography, providing strong security guarantees
              with efficient proof generation and verification. Proofs are succinct and fast to verify on-chain.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Use Case Examples
        </h2>

        <div className="space-y-3">
          {['DeFi Applications', 'Voting Applications', 'Gaming Applications'].map((title, i) => (
            <div key={i} className="p-4 border-l-2 border-white/10 hover:border-vintage-grape-400/50 transition-colors">
              <h3 className="text-base font-medium text-text-primary">{title}</h3>
              <p className="text-text-muted font-light text-sm mt-1">Implement compliant solutions without compromising privacy.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal text-text-primary mb-8 tracking-wide flex items-center gap-3">
          <span className="w-8 h-[1px] bg-vintage-grape-400"></span>
          Next Steps
        </h2>

        <div className="grid gap-3 md:grid-cols-2">
          {[
            { title: 'Installation Guide', path: '/documentation/installation', desc: 'Learn how to install and configure the Solstice SDK.' },
            { title: 'Quick Start', path: '/documentation/quick-start', desc: 'Get up and running with a minimal working example.' },
            { title: 'API Reference', path: '/documentation/api-reference', desc: 'Explore the complete API documentation.' },
            { title: 'Examples', path: '/documentation/examples', desc: 'See real-world code examples.' }
          ].map((item, i) => (
            <a
              key={i}
              href={item.path}
              className="block p-4 border-l-2 border-white/10 hover:border-vintage-grape-400/50 hover:bg-white/[0.02] transition-all group"
            >
              <h3 className="text-base font-medium text-text-primary group-hover:text-vintage-grape-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm font-light mt-1">
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* External Resources */}
      <section className="mb-12 border-t border-white/5 pt-12">
        <h2 className="text-xl font-normal text-text-primary mb-4">External Resources</h2>
        <div className="space-y-3 font-light text-sm">
          <div>
            <ExternalLink href="https://github.com/solstice-protocol/solstice-sdk">
              GitHub Repository
            </ExternalLink>
            <p className="text-text-muted mt-1">View source code, report issues, and contribute</p>
          </div>
          <div>
            <ExternalLink href="https://www.npmjs.com/package/@solsticeprotocol/sdk">
              NPM Package
            </ExternalLink>
            <p className="text-text-muted mt-1">Package details, version history, and downloads</p>
          </div>
        </div>
      </section>
    </div>
  );
}
