import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { Headphones, Users, ArrowRight } from "lucide-react";
import bgGrid from "@/assets/bg-grid.jpg";
import sectionBgMesh from "@/assets/section-bg-mesh.jpg";

const steps = [
  {
    number: 1,
    title: "Apply & Get Certified",
    timeline: "Week 1–4",
    description: "Submit your application in 5 minutes. Once approved, you'll enter the AIWO Academy for a 40-hour deep-dive into longevity science and our brand ecosystem. Pass the exam to earn your Official Partner Badge.",
    tags: ["Brief Review", "Video Training", "Portal Access"]
  },
  {
    number: 2,
    title: "Launch & Sell",
    timeline: "Month 1–3",
    description: "Integrate AIWO into your clinic, studio, or digital platform. Use our GTM Playbooks and marketing assets to host your first workshops or launch campaigns. Our Success Managers will guide you through closing your first 10 customers.",
    tags: ["Sales Playbooks", "Brand Assets", "Lead Handoff"]
  },
  {
    number: 3,
    title: "Scale & Earn",
    timeline: "Month 3+",
    description: "Unlock premium tiers as your revenue grows. Access MDF funding to dominate your territory. Expand from testing to retreats and interventions, creating a recurring income engine with 80%+ customer retention.",
    tags: ["MDF Funding", "Tier Upgrades", "Recurring Share"]
  }
];

const HowItWorks = () => {
  return (
    <>
      <PageHeader
        title="Your Journey to Success"
        subtitle="3 Simple Steps to Build Your Longevity Business with AIWO"
        backgroundImage={bgGrid}
      />

      {/* Journey Steps */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-premium relative">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                    <div className="number-circle flex-shrink-0 mx-auto md:mx-0">
                      {step.number}
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{step.title}</h2>
                      <p className="text-secondary font-semibold mb-4">{step.timeline}</p>
                      <p className="text-white/60 mb-6 leading-relaxed">{step.description}</p>
                      
                      <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-lg text-sm text-white/60 bg-white/5 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="divider-gradient" />
      </div>

      {/* Support CTA */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${sectionBgMesh})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-label">Support</span>
            <h2>Never Walk Alone</h2>
            <p>Our Support Team is available 24/7 to ensure your onboarding is seamless.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-12">
            {[
              {
                icon: Headphones,
                title: "Live Support",
                desc: "Direct chat and email access for all Registered levels."
              },
              {
                icon: Users,
                title: "Success Manager",
                desc: "1-on-1 coaching for Certified and higher tiers."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card text-center h-full">
                  <div className="feature-icon mx-auto">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h5 className="font-bold text-white text-xl mb-3">{item.title}</h5>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/apply" className="btn-primary">
              Start Step 1 Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
