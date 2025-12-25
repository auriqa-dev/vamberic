import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Users, Globe, BarChart3, Lock } from "lucide-react";

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
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Strategic <br />
              <span className="text-gradient">Power & Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Vamberic Group delivers elite consulting services for organizations that demand absolute excellence. We bridge the gap between vision and execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="px-8 py-4 rounded-full bg-secondary/50 border border-white/10 text-white font-semibold text-lg hover:bg-secondary hover:border-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Our Philosophy
              </a>
            </div>
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

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-secondary/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Unrelenting Excellence" 
            subtitle="About Vamberic"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: ShieldCheck,
                title: "Integrity First",
                description: "We operate with absolute transparency and ethical fortitude. Trust is our most valuable currency."
              },
              {
                icon: Zap,
                title: "Rapid Execution",
                description: "Strategy without action is meaningless. We deploy solutions with precision and speed."
              },
              {
                icon: Users,
                title: "Elite Partnership",
                description: "We don't just consult; we integrate with your leadership to drive transformative growth."
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

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading 
            title="Core Capabilities" 
            subtitle="Our Services"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Strategic Consulting",
                desc: "Data-driven roadmaps for scaling operations and market penetration."
              },
              {
                icon: Lock,
                title: "Security & Risk",
                desc: "Comprehensive risk assessment and mitigation strategies for enterprise assets."
              },
              {
                icon: Globe,
                title: "Digital Transformation",
                desc: "Modernizing legacy systems to leverage cloud, AI, and cutting-edge tech."
              },
              {
                icon: Users,
                title: "Executive Leadership",
                desc: "Interim management and leadership coaching for high-stakes environments."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-secondary border border-white/10 flex items-center justify-center text-primary shadow-lg shadow-black/20">
                    <service.icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none" />
            
            <SectionHeading 
              title="Ready to Ascend?" 
              subtitle="Contact Us"
            />
            
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-background text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
              <img src="/logo_combined.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-white tracking-wide">VAMBERIC GROUP</span>
          </div>
          
          <div className="text-muted-foreground text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Vamberic Group. All rights reserved.</p>
            <div className="flex gap-6 justify-center md:justify-end mt-2">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
