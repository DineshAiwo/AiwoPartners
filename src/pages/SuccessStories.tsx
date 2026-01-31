import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight } from "lucide-react";
import bgAurora from "@/assets/bg-aurora.jpg";
import sectionBgWaves from "@/assets/section-bg-waves.jpg";

const filterCategories = [
  "All Stories",
  "Channel Sales",
  "Medical Pro",
  "Corporate Wellness",
  "Tech Integration"
];

const stories = [
  {
    badge: "3X Revenue Growth",
    name: "Rajesh Kumar",
    role: "Wellness Studio Owner, Mumbai",
    quote: "I added ₹1.2 Crore in revenue without hiring a single employee. AIWO's retreat packages sell themselves. Best decision for my studio.",
    tier: "Premier",
    category: "Channel Sales"
  },
  {
    badge: "200+ Patient Referrals",
    name: "Dr. Priya Sharma",
    role: "Functional Medicine, Bangalore",
    quote: "My patients finally have a comprehensive solution. AIWO's testing and physician-guided interventions reversed markers for hundreds.",
    tier: "Certified",
    category: "Medical Pro"
  },
  {
    badge: "₹5.5Cr in Corporate Sales",
    name: "Amit Verma",
    role: "HR Solutions Consultant, Delhi",
    quote: "Closed 5 enterprise deals in my first 6 months. AIWO's B2B programs are unmatched in ROI proof and employee engagement.",
    tier: "Strategic",
    category: "Corporate Wellness"
  },
  {
    badge: "+150% Profit Margin",
    name: "Neha Patel",
    role: "Yoga Studio Chain, Ahmedabad",
    quote: "Integrating AIWO supplements into our class memberships transformed our bottom line while keeping students motivated.",
    tier: "Certified",
    category: "Channel Sales"
  },
  {
    badge: "Global Scale Reached",
    name: "Vikram Joshi",
    role: "Health Tech Founder, Pune",
    quote: "API integration with AIWO LifeOS allowed us to offer longevity insights to our wearable device users across 5 countries.",
    tier: "Strategic",
    category: "Tech Integration"
  },
  {
    badge: "₹80L Annual Earnings",
    name: "Meera Singh",
    role: "Wellness Influencer, Hyderabad",
    quote: "Being a referral partner is the most transparent income source I've had. My audience loves the science-backed approach.",
    tier: "Registered",
    category: "Medical Pro"
  }
];

const SuccessStories = () => {
  const [activeFilter, setActiveFilter] = useState("All Stories");

  const filteredStories = activeFilter === "All Stories" 
    ? stories 
    : stories.filter(story => story.category === activeFilter);

  return (
    <>
      <PageHeader
        title="Real Partners, Real Results"
        subtitle="From ₹25 Lakhs to ₹10 Crores: Hear from our Global Network"
        backgroundImage={bgAurora}
      />

      {/* Filters */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-secondary text-white'
                    : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${sectionBgWaves})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/85" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-premium h-full flex flex-col">
                  {/* Metric Badge */}
                  <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold text-secondary bg-secondary/10 border border-secondary/30 mb-6 w-fit">
                    {story.badge}
                  </span>
                  
                  {/* Name & Role */}
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{story.name}</h4>
                  <p className="text-xs text-white/50 uppercase font-bold tracking-wider mb-4">{story.role}</p>
                  
                  {/* Quote */}
                  <p className="text-white/60 italic mb-6 flex-grow leading-relaxed">
                    "{story.quote}"
                  </p>
                  
                  {/* Footer */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-white/40">Tier: {story.tier}</span>
                    <button className="text-secondary text-sm font-bold hover:underline">
                      Read Case Study →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Banner CTA */}
      <section className="section-accent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-card max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Want to See Your Story Here?
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Join our mission to transform longevity in India and beyond.
            </p>
            <Link to="/apply" className="btn-primary">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
