export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      <div className="fixed inset-0 radial-glow pointer-events-none" />
      <div className="scan-line" />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-black/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 hexagon bg-accent flex items-center justify-center">
                <span className="text-black font-bold text-sm">λ</span>
              </div>
              <span className="font-bold text-xl tracking-tight">LAMBA</span>
            </div>
            
            <div className="hidden md:flex items-center gap-10">
              <a href="#capabilities" className="text-sm text-text-secondary hover:text-white transition-colors">Capabilities</a>
              <a href="#technology" className="text-sm text-text-secondary hover:text-white transition-colors">Technology</a>
              <a href="#about" className="text-sm text-text-secondary hover:text-white transition-colors">About</a>
              <a href="#contact" className="btn-primary text-sm">Get Started</a>
            </div>

            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full mb-8 opacity-0 animate-fade-in-up">
              <span className="w-2 h-2 bg-accent rounded-full pulse-glow" />
              <span className="text-xs font-mono text-text-secondary tracking-wider uppercase">Systems Online</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 opacity-0 animate-fade-in-up animation-delay-200">
              <span className="block">We Build</span>
              <span className="block text-gradient glow-text">The Future</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
              Architecting intelligent systems that transform how organizations operate. 
              Enterprise-grade solutions built for scale, security, and precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-600">
              <a href="#contact" className="btn-primary">
                Start a Project
              </a>
              <a href="#capabilities" className="btn-secondary">
                Explore Capabilities
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border opacity-0 animate-fade-in-up animation-delay-800">
              <div>
                <div className="text-3xl md:text-4xl font-bold font-mono text-accent">99.9%</div>
                <div className="text-sm text-text-muted mt-1">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold font-mono text-accent">&lt;50ms</div>
                <div className="text-sm text-text-muted mt-1">Response Time</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold font-mono text-accent">∞</div>
                <div className="text-sm text-text-muted mt-1">Scale Potential</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border border-border rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-xs font-mono text-accent tracking-widest uppercase">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Systems That See<br />
              <span className="text-text-secondary">What Others Cannot</span>
            </h2>
            <p className="text-text-secondary text-lg">
              We engineer solutions that process complexity at scale, transforming raw data into strategic advantage.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Data Integration",
                description: "Unified data pipelines that connect disparate systems into a single source of truth.",
                metric: "10TB+/day"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Predictive Analytics",
                description: "Machine learning models that anticipate trends before they emerge.",
                metric: "94% accuracy"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Security Architecture",
                description: "Zero-trust frameworks that protect critical infrastructure at every layer.",
                metric: "0 breaches"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Real-time Processing",
                description: "Stream processing engines that analyze millions of events per second.",
                metric: "1M+ events/s"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
                title: "Distributed Systems",
                description: "Fault-tolerant architectures that scale horizontally without limits.",
                metric: "99.99% uptime"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "AI Operations",
                description: "Intelligent automation that optimizes workflows and reduces operational overhead.",
                metric: "60% efficiency"
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="group p-8 border border-border bg-surface/50 card-hover relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="text-accent mb-6">{capability.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">{capability.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-mono text-xs text-text-muted">Performance</span>
                    <span className="font-mono text-sm text-accent">{capability.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-xs font-mono text-accent tracking-widest uppercase">Technology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Infrastructure<br />
                <span className="text-text-secondary">Without Compromise</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Our technology stack is built on battle-tested foundations, engineered for 
                mission-critical deployments where failure is not an option.
              </p>

              <div className="space-y-6">
                {[
                  { label: "Compute Efficiency", value: 98 },
                  { label: "Data Throughput", value: 95 },
                  { label: "System Resilience", value: 99 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{item.label}</span>
                      <span className="text-sm font-mono text-accent">{item.value}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-accent-dim rounded-full transition-all duration-1000"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-square relative">
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border border-border rounded-full animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border border-accent/30 rounded-full" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border border-accent/50 rounded-full" style={{ animation: 'pulse-glow 3s ease-in-out infinite 0.5s' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center pulse-glow">
                    <div className="w-8 h-8 bg-accent rounded-full" />
                  </div>
                </div>

                {/* Data points */}
                {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${rotation}deg) translateY(-120px)`,
                    }}
                  >
                    <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-xs font-mono text-accent tracking-widest uppercase">About</span>
              <div className="w-12 h-[1px] bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Engineering Excellence<br />
              <span className="text-text-secondary">At Every Level</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Lamba Industries was founded on a simple principle: technology should amplify human capability, 
              not constrain it. We build systems that empower organizations to operate at the speed of thought, 
              with precision that was previously impossible.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Our team combines deep technical expertise with strategic insight, delivering solutions 
              that don&apos;t just solve today&apos;s problems—they anticipate tomorrow&apos;s challenges.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="gradient-border p-12 md:p-20 text-center relative overflow-hidden noise-overlay">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to Transform<br />
                <span className="text-gradient">Your Operations?</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
                Let&apos;s discuss how Lamba Industries can architect solutions tailored to your unique challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:contact@lambaindustries.com" className="btn-primary">
                  Contact Us
                </a>
                <a href="#capabilities" className="btn-secondary">
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 hexagon bg-accent flex items-center justify-center">
                <span className="text-black font-bold text-xs">λ</span>
              </div>
              <span className="font-bold tracking-tight">LAMBA INDUSTRIES</span>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-text-muted hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-sm text-text-muted hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm text-text-muted hover:text-white transition-colors">Security</a>
            </div>

            <div className="text-sm text-text-muted font-mono">
              © 2026 Lamba Industries
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
