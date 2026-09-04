import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { ArrowRight, Compass, BrainCircuit, Users, Rocket, Search, PenTool, Play, Layers, Mail } from "lucide-react";

const capabilities = [
  {
    icon: Compass,
    title: "Strategy and transformation",
    description: "Digital and AI strategies, transformation roadmaps, investment cases, operating models and commercial priorities."
  },
  {
    icon: BrainCircuit,
    title: "Data, AI and decision intelligence",
    description: "AI readiness, predictive analytics, data integration and practical approaches to applying intelligence within business decisions."
  },
  {
    icon: Users,
    title: "Customer, CRM and growth",
    description: "Customer journeys, CRM strategy, personalisation, marketing architecture, go-to-market planning and performance measurement."
  },
  {
    icon: Rocket,
    title: "Delivery and capability building",
    description: "Programme leadership from research through implementation, together with the frameworks, mentoring and knowledge transfer needed to sustain change."
  }
];

const processSteps = [
  {
    number: "1",
    icon: Search,
    title: "Diagnose",
    description: "Establish the business problem, current capabilities and evidence required to make the right decisions."
  },
  {
    number: "2",
    icon: PenTool,
    title: "Design",
    description: "Create a practical strategy, operating model and roadmap connecting investment to measurable outcomes."
  },
  {
    number: "3",
    icon: Play,
    title: "Deliver",
    description: "Lead implementation across business, marketing, data and technology teams."
  },
  {
    number: "4",
    icon: Layers,
    title: "Embed",
    description: "Build the frameworks, skills and measurement practices needed to sustain progress."
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

interface Venture {
  name: string;
  logo: string;
  logoClass?: string;
  showName?: boolean;
  description: string;
  url?: string;
  /** Speculative ventures are kept in code but hidden from the public page. */
  hidden?: boolean;
}

const ventures: Venture[] = [
  {
    name: "Odyssiant",
    logo: "/odyssiant_logo_new.png",
    description: "Measures and improves how your brand appears in AI answers, and what to do about it.",
    url: "https://www.odyssiant.ai/"
  },
  {
    name: "Auriqa",
    logo: "/auriqa_logo.png",
    description: "Surfaces answers from your own documents live in Risk, Credit and Board meetings, then turns them into a regulator-ready record of what was decided and why.",
    url: "https://www.auriqa.ai/"
  },
  {
    name: "ThinkBeam",
    logo: "/thinkbeam_logo.png",
    logoClass: "h-16",
    description: "Runs market research campaigns for organisations."
  },
  {
    name: "SpecForge",
    logo: "/specforge_logo.png",
    showName: true,
    description: "Streamlines your project planning and documentation with an intuitive specification management platform. Helping novices write specifications for systems and apps.",
    hidden: true
  },
  {
    name: "Odyssio",
    logo: "/odyssio_logo.png",
    showName: true,
    description: "The always-on social engine: organise, repurpose, schedule, and publish automatically.",
    hidden: true
  },
  {
    name: "SignalLedger",
    logo: "/signalledger_logo.png",
    showName: true,
    description: "Always-on competitor and category monitoring: track positioning changes, messaging shifts, and new offers, summarised weekly.",
    hidden: true
  },
  {
    name: "FAQFoundry",
    logo: "/faqfoundry_logo.png",
    showName: true,
    description: "Builds and maintains your \"answer library\" (FAQs, objections, comparisons) and outputs web-ready, sales-ready copy.",
    hidden: true
  },
  {
    name: "PipelineScribe",
    logo: "/pipelinescribe_logo.png",
    showName: true,
    description: "Transforms call notes and meeting transcripts into CRM-ready updates, follow-ups, and next steps: consistent, structured, searchable.",
    hidden: true
  },
  {
    name: "InsightSprint",
    logo: "/insightsprint_logo.png",
    showName: true,
    description: "Runs short research sprints (ICP interviews, surveys, message testing), then produces a board-ready insight summary.",
    hidden: true
  }
];

const visibleVentures = ventures.filter((v) => !v.hidden);

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
                Independent expertise for <span className="text-gradient">complex transformation.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed">
                Vamberic Group is an independent management and technology consultancy helping organisations turn data, AI and digital capabilities into practical transformation and measurable commercial outcomes.
              </p>
              <p className="text-lg text-white font-medium mb-8 max-w-lg">
                Strategy grounded in delivery. Technology connected to commercial value.
              </p>
              <a
                href="mailto:info@vamberic.com"
                className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-2"
                data-testid="link-hero-cta"
              >
                Discuss an engagement
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
              title="From ambition to practical change"
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
                  We work with enterprise and high-growth organisations to define priorities, align marketing, data and technology, and turn transformation plans into programmes that deliver.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Engagements span growth strategy, AI adoption, customer journeys, CRM, predictive analytics, marketing architecture, go-to-market development and organisational capability.
                </p>
                <div className="border-l-2 border-primary pl-6 mt-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our work combines strategic clarity with practical delivery, from initial research and investment cases through implementation, measurement and optimisation.
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
              title="Strategy, technology and delivery working together"
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
              title="Transformation should produce measurable value"
              subtitle="Our Approach"
            />

            <div className="max-w-4xl mx-auto mt-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                  Technology is useful only when it improves decisions, customer outcomes or commercial performance.
                </p>
                <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed mb-8">
                  Vamberic connects strategic ambition with the operating changes, data foundations and delivery disciplines required to produce results.
                </p>
                <p className="text-xl text-primary font-medium leading-relaxed">
                  The aim is not transformation for its own sake. It is clearer decisions, stronger capabilities and lasting business value.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 relative overflow-hidden scroll-mt-20">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-primary font-semibold text-sm uppercase mb-4 tracking-wider">Selected Experience</h2>
            <p className="text-center text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Experience spans financial services, insurance, telecommunications, media, technology, energy, infrastructure and other complex operating environments.
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
              title="Selected ventures"
              subtitle="Ventures"
            />
            <p className="text-center text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto -mt-6 mb-12">
              Alongside its advisory work, Vamberic develops specialist ventures that apply its experience in data, AI, research and decision-making to focused business problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {visibleVentures.map((venture, idx) => (
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
                    <img
                      src={venture.logo}
                      alt={`${venture.name} logo`}
                      className={`${venture.logoClass ?? "h-12"} object-contain`}
                    />
                    {venture.showName ? (
                      <span className="text-xl font-bold text-white font-display">{venture.name}</span>
                    ) : (
                      <span className="sr-only">{venture.name}</span>
                    )}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 flex-1">
                    {venture.description}
                  </p>
                  {venture.url ? (
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Visit {venture.name}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-muted-foreground font-medium">
                      Coming Soon
                    </span>
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

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background relative scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-20 -mt-20 pointer-events-none" />
              <SectionHeading
                title="Discuss an engagement"
                subtitle="Contact"
              />
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto -mt-6 leading-relaxed">
                Tell us about the decision, programme or capability you are working on and we will arrange an initial conversation.
              </p>
              <a
                href="mailto:info@vamberic.com"
                className="relative z-10 inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-2"
                data-testid="link-contact-cta"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                info@vamberic.com
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT FORM - Hidden for now, will reinstate later
        <div className="relative z-10">
          <ContactForm />
        </div>
        */}
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
              Independent management and technology consultancy.
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
