import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Wrench, Rocket, Target, Package, TrendingUp, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-medium mb-4 tracking-wide">VAMBERIC GROUP</p>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              We build brands that <br />
              <span className="text-gradient">win their category.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed">
              Vamberic is a house of brands creating and backing product businesses with one obsession: making useful things that scale.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Less noise. More leverage. More outcomes.
            </p>
            <a
              href="#brands"
              className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-2"
            >
              Explore our brands
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative rings around logo */}
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Main Logo Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-white border border-white/10 flex items-center justify-center p-8 shadow-2xl">
                 <img 
                   src="/lion_head.png" 
                   alt="Vamberic Lion Logo" 
                   className="w-full h-full object-contain"
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE ARE SECTION */}
      <section id="about" className="py-24 bg-secondary/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What we are" 
            subtitle="Our Identity"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 rounded-2xl"
            >
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                Vamberic Group builds independent product brands — each with its own identity and market — powered by a shared operating engine: product strategy, engineering, distribution, and commercial discipline.
              </p>
              <div className="border-l-2 border-primary pl-6 mt-8">
                <p className="text-lg text-muted-foreground italic">
                  We don't behave like a holding company that merely owns.
                </p>
                <p className="text-lg text-white font-semibold mt-2">
                  We behave like builders with standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="What we do" 
            subtitle="Our Approach"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Lightbulb,
                title: "Create",
                description: "We take sharp market questions and turn them into product brands with clear positioning and real demand."
              },
              {
                icon: Wrench,
                title: "Build",
                description: "We ship production-grade software: measurable value, resilient foundations, and an opinionated roadmap."
              },
              {
                icon: Rocket,
                title: "Back",
                description: "We provide the structure that makes growth repeatable: billing, support, security posture, analytics, and go-to-market systems."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE EXIST SECTION */}
      <section className="py-24 bg-secondary/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why we exist" 
            subtitle="Our Purpose"
          />
          
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                Most organisations try to grow by adding complexity.
              </p>
              <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed mb-8">
                Vamberic grows by increasing clarity and compounding execution.
              </p>
              <p className="text-xl text-primary font-medium">
                We build brands that are easy to understand, hard to ignore, and built to last.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED BRANDS SECTION */}
      <section id="brands" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Featured brands" 
            subtitle="Our Portfolio"
          />

          <div className="max-w-2xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 rounded-2xl group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/odyssiant_logo.png" 
                  alt="Odyssiant Logo" 
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Measure and improve how your brand appears in AI answers — and what to do about it.
              </p>
              <a
                href="https://www.odyssiant.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Visit Odyssiant
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="py-24 bg-secondary/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How we work" 
            subtitle="Our Process"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                number: "1",
                icon: Target,
                title: "Precision first",
                description: "We define the problem, the buyer, and the proof."
              },
              {
                number: "2",
                icon: Package,
                title: "Ship the minimum credible product",
                description: "Real users, real usage, real signal."
              },
              {
                number: "3",
                icon: TrendingUp,
                title: "Earn the right to scale",
                description: "We expand only when the foundations hold."
              },
              {
                number: "4",
                icon: Layers,
                title: "Compound the advantage",
                description: "We turn what works into systems — across brands."
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-primary absolute -top-3 left-4 z-20 font-display">
                  {step.number}
                </div>
                <div className="glass-card p-6 rounded-2xl relative mt-6 pt-8">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION - Hidden for now, will reinstate later
      <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none" />
            <SectionHeading 
              title="Start a conversation" 
              subtitle="Contact Us"
            />
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              What are you building, who is it for, and what would "meaningful progress" look like in 90 days?
            </p>
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      */}

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-background text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-white">
                <img src="/lion_head.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-white tracking-wide">VAMBERIC GROUP</span>
            </div>
            
            <p className="text-muted-foreground italic text-center max-w-md">
              A house of brands should feel inevitable, not noisy.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Vamberic Group. All rights reserved.
            </p>
            <a 
              href="mailto:info@vamberic.com" 
              className="text-primary hover:underline"
            >
              info@vamberic.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
