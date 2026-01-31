import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { Check, ArrowRight } from "lucide-react";
import bgGrid from "@/assets/bg-grid.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import sectionBgMesh from "@/assets/section-bg-mesh.jpg";

const tiers = [
  {
    badge: "Entry Level",
    name: "Registered",
    description: "Kickstart your longevity business path.",
    commission: "10%",
    commissionLabel: "Comm.",
    recurringRevenue: null,
    features: [
      "Basic Training (8h)",
      "Partner Portal Access",
      "Starter Marketing Kit",
      "Email Support"
    ],
    buttonText: "Get Started",
    featured: false
  },
  {
    badge: "Pro Builder",
    name: "Certified",
    description: "Scale with dedicated support and leads.",
    commission: "15%",
    commissionLabel: "Base Comm.",
    recurringRevenue: "+ 5% Recurring Revenue",
    features: [
      "Advanced Cert (40h)",
      "Dedicated Success Mgr",
      "AIWO Lead Allocation",
      "₹2 Lakhs MDF /yr",
      "Quarterly Reviews"
    ],
    buttonText: "Unlock Certified",
    featured: true
  },
  {
    badge: "Market Leader",
    name: "Premier",
    description: "Dominance with exclusive benefits.",
    commission: "20%",
    commissionLabel: "Base Comm.",
    recurringRevenue: "+ 8% Recurring Revenue",
    features: [
      "Executive Sponsorship",
      "Joint GTM Planning",
      "₹10 Lakhs MDF /yr",
      "Annual Partner Summit",
      "Beta Product Access"
    ],
    buttonText: "Go Premier",
    featured: false
  },
  {
    badge: "Elite Partner",
    name: "Strategic",
    description: "Highest level of ecosystem influence.",
    commission: "25%",
    commissionLabel: "Base Comm.",
    recurringRevenue: "+ 10% Recurring Revenue",
    features: [
      "C-Suite Access (CEO)",
      "Advisory Board Participation",
      "₹50 Lakhs MDF /yr",
      "Territory Rights",
      "Revenue Guarantees"
    ],
    buttonText: "Request Strategic",
    featured: false
  }
];

const comparisonData = [
  {
    feature: "Training Requirements",
    registered: "8 Hours",
    certified: "40 Hours",
    premier: "Full Brand Mastery",
    strategic: "Dedicated AIWO Practice"
  },
  {
    feature: "Revenue Commitment",
    registered: "Zero",
    certified: "₹25L /yr",
    premier: "₹1Cr /yr",
    strategic: "₹5Cr /yr"
  },
  {
    feature: "MDF Support",
    registered: "-",
    certified: "₹2L",
    premier: "₹10L",
    strategic: "₹50L+"
  },
  {
    feature: "Lead Allocation",
    registered: "Self-Gen Only",
    certified: "Shared Leads",
    premier: "Priority Placement",
    strategic: "Strategic Territories"
  }
];

const Tiers = () => {
  return (
    <>
      <PageHeader
        title="Partnership Tiers"
        subtitle="Clear Progression from Entry to C-Suite Strategic Level"
        backgroundVideo={heroVideo}
      />

      {/* Tiers Grid */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${bgGrid})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${tier.featured ? 'lg:scale-105 lg:z-10' : ''}`}
              >
                <div className={`card-premium h-full flex flex-col ${tier.featured ? 'ring-2 ring-secondary shadow-lg shadow-secondary/20' : ''}`}>
                  {/* Badge */}
                  <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit ${
                    tier.featured 
                      ? 'bg-secondary text-white' 
                      : 'bg-white/10 text-white border border-white/10'
                  }`}>
                    {tier.badge}
                  </span>

                  {/* Name & Description */}
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-white/50 mb-6">{tier.description}</p>

                  {/* Commission */}
                  <div className="mb-2">
                    <span className="text-4xl md:text-5xl font-black text-white">{tier.commission}</span>
                    <span className="text-sm text-white/50 ml-2">{tier.commissionLabel}</span>
                  </div>
                  
                  {/* Recurring Revenue */}
                  {tier.recurringRevenue && (
                    <p className="text-sm text-secondary font-bold mb-6">{tier.recurringRevenue}</p>
                  )}
                  {!tier.recurringRevenue && <div className="mb-6" />}

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    to="/apply"
                    className={`w-full text-center ${tier.featured ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {tier.buttonText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table (Desktop) */}
      <section className="section relative overflow-hidden hidden lg:block" style={{ backgroundImage: `url(${sectionBgMesh})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/85" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Deep Dive: Tiers Comparison</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-5 px-6 text-xs text-white/40 uppercase tracking-wider font-semibold">Feature</th>
                    <th className="text-center py-5 px-4 text-xs text-white/40 uppercase tracking-wider font-semibold">Registered</th>
                    <th className="text-center py-5 px-4 text-xs text-white/40 uppercase tracking-wider font-semibold">Certified</th>
                    <th className="text-center py-5 px-4 text-xs text-white/40 uppercase tracking-wider font-semibold">Premier</th>
                    <th className="text-center py-5 px-4 text-xs text-white/40 uppercase tracking-wider font-semibold">Strategic</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className={index < comparisonData.length - 1 ? 'border-b border-white/5' : ''}>
                      <td className="py-5 px-6 font-bold text-secondary">{row.feature}</td>
                      <td className="py-5 px-4 text-center text-white/50 text-sm">{row.registered}</td>
                      <td className="py-5 px-4 text-center text-white/50 text-sm">{row.certified}</td>
                      <td className="py-5 px-4 text-center text-white/50 text-sm">{row.premier}</td>
                      <td className="py-5 px-4 text-center text-white/50 text-sm">{row.strategic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-accent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-card max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your tier is automatically upgraded based on your trailing 12-month sales performance. 
              Upgrades are processed quarterly, and you'll receive a notification when you qualify 
              for the next level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/calculator" className="btn-secondary">
                Calculate Your Potential
              </Link>
              <Link to="/apply" className="btn-primary">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Tiers;
