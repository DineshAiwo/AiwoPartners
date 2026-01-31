import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, CheckCircle } from "lucide-react";
import bgDataStreams from "@/assets/bg-data-streams.jpg";
import bgCircles from "@/assets/bg-circles.jpg";

const partnerTypes = [
  {
    type: "A",
    title: "Channel Sales",
    revenue: "₹50L - ₹5Cr / year",
    description: "Leverage your physical infrastructure to sell high-margin longevity interventions.",
    bestFor: [
      "Gym & Fitness Center Owners",
      "High-end Spas & Wellness Retreats",
      "Diagnostic Centers & Specialized Clinics"
    ],
    color: "#1A237E"
  },
  {
    type: "B",
    title: "Referral Partner",
    revenue: "₹25L - ₹2Cr / year",
    description: "Focus on your expertise while we handle the fulfillment and clinical protocols.",
    bestFor: [
      "Independent Doctors (MBBS/MD)",
      "Certified Nutritionists & Dietitians",
      "Lifestyle Coaches & Biohackers"
    ],
    color: "#0468CD"
  },
  {
    type: "C",
    title: "Tech Partner",
    revenue: "₹1Cr - ₹10Cr / year",
    description: "Use our API stack to power longevity features inside your own application.",
    bestFor: [
      "Health-Tech Startups & Apps",
      "Corporate Wellness Platform Owners",
      "Wearable & IoT Device Companies"
    ],
    color: "#3A5536"
  },
  {
    type: "D",
    title: "Corporate Consultant",
    revenue: "₹2Cr - ₹10Cr / year",
    description: "Deploy bulk longevity programs to massive corporate workforces across India.",
    bestFor: [
      "HR & Productivity Consultants",
      "B2B Healthcare Service Providers",
      "Insurance & Policy Brokers"
    ],
    color: "#7B4F36"
  }
];

const PartnerTypes = () => {
  return (
    <>
      <PageHeader
        title="Choose Your Pathway"
        subtitle="4 Partner Types × 4 Tiers = India's Strongest Wealth Generation Model"
        backgroundImage={bgDataStreams}
      />

      {/* Partner Models Grid */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${bgCircles})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/85" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-premium h-full">
                  <div 
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white mb-6"
                    style={{ background: partner.color }}
                  >
                    Target: {partner.revenue}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Type {partner.type}: {partner.title}
                  </h2>
                  
                  <p className="text-lg text-white/60 mb-8 leading-relaxed">
                    {partner.description}
                  </p>

                  <h5 className="font-bold text-white mb-4">Best Suited For:</h5>
                  <ul className="space-y-3 mb-8">
                    {partner.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/70">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/apply" 
                    className="btn-primary w-full sm:w-auto"
                  >
                    Apply as {partner.title}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
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
              Not Sure Which Model Fits?
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Connect with our Partnership Strategy team for a 1-on-1 discovery call.
            </p>
            <Link to="/contact" className="btn-primary">
              Get Expert Guidance
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PartnerTypes;
