import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ArrowRight, Compass, BrainCircuit, Users, Rocket, Search, PenTool, Play, Layers } from "lucide-react";

const capabilities = [
  {
    icon: Compass,
    title: "Product focus and validation",
    description: "Identify specific commercial problems, test demand with real customers and define a focused first offer."
  },
  {
    icon: BrainCircuit,
    title: "Data and AI",
    description: "Apply data, AI and automation where they make products more useful and efficient to operate."
  },
  {
    icon: Users,
    title: "Customer learning and growth",
    description: "Bring products to market, learn from customer behaviour and measure demand, usage and commercial results."
  },
  {
    icon: Rocket,
    title: "Shared platform and operations",
    description: "Reuse Vamberic infrastructure, tools and operating capabilities to launch, maintain and improve products across the portfolio."
  }
];

const processSteps = [
  {
    number: "1",
    icon: Search,
    title: "Focus",
    description: "Choose a specific commercial problem and establish what evidence would justify investment."
  },
  {
    number: "2",
    icon: PenTool,
    title: "Launch",
    description: "Build a focused first offer quickly, keeping scope and investment controlled."
  },
  {
    number: "3",
    icon: Play,
    title: "Validate",
    description: "Test demand with real customers and measure whether the product delivers useful outcomes."
  },
  {
    number: "4",
    icon: Layers,
    title: "Decide",
    description: "Use the results to improve, maintain or stop a product, and invest further where the evidence supports it."
  }
];

const experienceLogos = [
  { src: "/customer_rosslyn.png", alt: "Rosslyn" },
  { src: "/customer_bt.png", alt: "BT" },
  { src: "/customer_natwest.png", alt: "NatWest" },
  { src: "/customer_ifs.png", alt: "IFS" },
  { src: "/customer_camelot.png", alt: "Camelot" },
  { src: "/customer_ap.png", alt: "AP" },
  { src: "/customer_beroe.png", alt: "Beroe" },
  { src: "/customer_britishgas.jpg", alt: "British Gas" },
  { src: "/customer_cifas.jpg", alt: "CIFAS" },
  { src: "/customer_equans.jpg", alt: "Equans" },
  { src: "/customer_splitit.png", alt: "Splitit" },
  { src: "/customer_tfl.png", alt: "Transport for London" },
  { src: "/customer_newsuk.png", alt: "News UK" },
  { src: "/customer_silverstone.png", alt: "Silverstone" },
];

const ventures = [
  {
    name: "HVM",
    logo: "/hvm_logo.png",
    url: "https://h-v-m.agency/",
    description: "A demand intelligence service proposition focused on helping businesses understand commercial demand."
  },
  {
    name: "Built Matters",
    description: "An emerging product focused on the built environment and energy performance."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      <main>
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
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold font-display leading-tight mb-6">
                Focused products. <span className="text-gradient">Built to prove themselves.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed">
                Vamberic is a product studio and operating company. We build, launch and operate focused products for real commercial problems.
              </p>
              <p className="text-lg text-white font-medium mb-8 max-w-lg">
                Launch lean. Learn from customers. Invest on evidence.
              </p>
              <a
                href="mailto:info@vamberic.com"
                className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-2"
                data-testid="link-hero-cta"
              >
                Get in touch
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
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
                    alt="Vamberic Group lion emblem"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-secondary/20 relative scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="One studio. A portfolio of focused products."
              subtitle="Our Role"
            />

            <div className="max-w-4xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-12 rounded-2xl"
              >
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                  Vamberic builds and operates a growing portfolio of products and experiments, each shaped around a specific customer need.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The portfolio can include applications and service-based propositions. Each starts with a focused offer, controlled investment and a clear way to test demand.
                </p>
                <div className="border-l-2 border-primary pl-6 mt-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Shared infrastructure and operating capabilities help us launch efficiently, support products over time and apply what we learn across the portfolio.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section id="capabilities" className="py-24 relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              title="Shared capabilities behind every product"
              subtitle="Our Capabilities"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {capabilities.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="glass-card p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" aria-hidden="true" />
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

        {/* APPROACH SECTION */}
        <section className="py-24 bg-secondary/20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Evidence guides the next investment"
              subtitle="Our Approach"
            />

            <div className="max-w-4xl mx-auto mt-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                  Every product starts with a commercial problem and a testable idea about how to solve it.
                </p>
                <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed mb-8">
                  We launch lean, learn from real customers and use the results to decide what deserves further investment.
                </p>
                <p className="text-xl text-primary font-medium leading-relaxed">
                  Discipline means improving what works, maintaining what remains useful and stopping what does not justify further investment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-primary font-semibold text-sm uppercase mb-4 tracking-wider">Prior Experience</h2>
            <p className="text-center text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Our product work draws on prior experience across financial services, telecommunications, media, technology, energy and infrastructure. The organisations below reflect that background.
            </p>
            <div className="relative overflow-hidden">
              <ul className="flex animate-scroll gap-12 items-center w-max list-none m-0 p-0">
                {[...experienceLogos, ...experienceLogos].map((customer, idx) => (
                  <li
                    key={idx}
                    aria-hidden={idx >= experienceLogos.length ? true : undefined}
                    className="flex-shrink-0 h-16 w-32 flex items-center justify-center grayscale-[50%] hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 rounded-lg p-2 bg-white"
                  >
                    <img
                      src={customer.src}
                      alt={idx >= experienceLogos.length ? "" : customer.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* VENTURES SECTION */}
        <section id="ventures" className="py-24 bg-secondary/20 relative overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading
              title="Selected portfolio examples"
              subtitle="Ventures"
            />
            <p className="text-center text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto -mt-6 mb-12">
              Our portfolio brings together focused products and service propositions at different stages of development. Current examples include HVM and Built Matters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {ventures.map((venture, idx) => (
                <motion.div
                  key={venture.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300 flex flex-col"
                  data-testid={`card-venture-${venture.name.toLowerCase()}`}
                >
                  <h3 className="flex items-center gap-4 mb-6">
                    {venture.logo && (
                      <img
                        src={venture.logo}
                        alt="Henry Vincent Moss Agency logo"
                        width={96}
                        height={96}
                        loading="lazy"
                        className="w-24 h-24 shrink-0 rounded-lg object-contain"
                      />
                    )}
                    <span className="text-xl font-bold text-white font-display">{venture.name}</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 flex-1">
                    {venture.description}
                  </p>
                  {venture.url && (
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Visit {venture.name}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK SECTION */}
        <section className="py-24 relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How we work"
              subtitle="Our Process"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="text-5xl font-bold text-primary absolute -top-3 left-4 z-20 font-display" aria-hidden="true">
                    {step.number}
                  </div>
                  <div className="glass-card p-6 rounded-2xl relative mt-6 pt-8">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <step.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-display">
                      <span className="sr-only">{step.number}. </span>{step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-background text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-white">
                <img src="/lion_head.png" alt="Vamberic Group lion emblem" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-white tracking-wide">VAMBERIC GROUP</span>
            </div>

            <p className="text-muted-foreground text-center max-w-md">
              A product studio building and operating focused products for real commercial problems.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
            <p className="text-muted-foreground">
              &copy; 2026 Vamberic Group Ltd. All rights reserved.
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
