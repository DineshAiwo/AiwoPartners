import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { Crosshair, Wrench, Headphones, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import bgDataStreams from "@/assets/bg-data-streams.jpg";
import bgHexagon from "@/assets/bg-hexagon.jpg";
import sectionBgMesh from "@/assets/section-bg-mesh.jpg";

const Benefits = () => {
  return (
    <>
      <PageHeader
        title="World-Class Support & ROI"
        subtitle="Unmatched Commissions, Training, and Marketing Co-Investment"
        backgroundImage={bgDataStreams}
      />

      {/* Commission Section */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Earnings</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Industry-Leading Commission Structure
              </h2>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                We believe in rewarding the transformers. Our multi-brand ecosystem allows for 
                various income streams from one-time tests to recurring memberships.
              </p>

              <div className="space-y-4">
                <div className="glass-card p-6">
                  <h4 className="font-bold text-white mb-2">Direct Sales Commission</h4>
                  <p className="text-3xl md:text-4xl font-black text-secondary mb-2">10% — 25%</p>
                  <span className="text-white/50 text-sm">Based on Partner Tier</span>
                </div>

                <div className="glass-card p-6">
                  <h4 className="font-bold text-white mb-2">Recurring Subscription Share</h4>
                  <p className="text-3xl md:text-4xl font-black text-secondary mb-2">5% — 10%</p>
                  <span className="text-white/50 text-sm">Lifetime attribution for memberships/supplements</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-premium">
                <h4 className="font-bold text-white text-xl mb-8">Earnings Examples</h4>
                <div className="space-y-0">
                  {[
                    { name: "AIWO AGE Test", price: "₹99,000 package", commission: "Up to ₹24,750" },
                    { name: "Longevity Retreat", price: "₹10,00,000 package", commission: "Up to ₹2,50,000" },
                    { name: "LiveLong Membership", price: "₹2,50,000 /yr recurring", commission: "Up to ₹62,500 /yr" },
                  ].map((item, i) => (
                    <div key={item.name} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-5 border-b border-white/5 last:border-0 gap-3">
                      <div>
                        <span className="font-bold text-white block">{item.name}</span>
                        <span className="text-sm text-white/50">{item.price}</span>
                      </div>
                      <span className="bg-secondary text-white text-sm font-bold px-4 py-2 rounded-full inline-block w-fit">
                        {item.commission}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="divider-gradient" />
      </div>

      {/* MDF & Marketing */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${bgHexagon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/85" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-label">Support</span>
            <h2>Marketing & Growth Resources</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Crosshair,
                title: "MDF Funding",
                desc: "Marketing Development Funds from ₹2L to ₹50L per year to help you host events, run ads, and scale local presence."
              },
              {
                icon: Wrench,
                title: "GTM Playbooks",
                desc: "Ready-to-use sales scripts, social media templates, and lead-gen landing pages designed for high conversion."
              },
              {
                icon: Headphones,
                title: "Priority Support",
                desc: "Dedicated Partner Success Managers providing monthly check-ins and strategic growth advice for Certified levels+."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-premium h-full">
                  <div className="feature-icon">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${sectionBgMesh})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-card">
              <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-3 text-left">
                  <span className="section-label">Training</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AIWO Academy</h2>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    Become a certified longevity expert. 40+ hours of video lessons, masterclasses on 
                    negotiation, and deep-dives into 11 longevity pillars.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Mandatory Foundation Certification",
                      "Vertical Specializations (Diabetes, Cardiac)",
                      "Monthly Expert-Led Webinars"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white">
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center hidden lg:block">
                  <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                    <GraduationCap className="w-16 h-16 text-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-accent">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Access All Benefits?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Join the AIWO Partner Program and unlock industry-leading earnings, support, and training.
            </p>
            <Link to="/apply" className="btn-primary">
              Join & Access All Benefits
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
