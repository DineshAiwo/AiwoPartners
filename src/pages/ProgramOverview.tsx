import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { 
  Microscope, Palmtree, CalendarCheck, Pill, 
  Hand, Building2, Users, Monitor,
  Moon, Wind, Utensils, HeartPulse, Sun, Smile, Sparkles, FlaskConical,
  ArrowRight
} from "lucide-react";
import bgHexagon from "@/assets/bg-hexagon.jpg";
import bgDna from "@/assets/bg-dna.jpg";
import videoHexagon from "@/assets/video-hexagon.mp4";
const brands = [
  { icon: Microscope, name: "AIWO Health", desc: "Comprehensive diagnostic testing & biomarker tracking." },
  { icon: Palmtree, name: "AIWO Healthcation", desc: "Luxury longevity retreats for deep transformation." },
  { icon: CalendarCheck, name: "AIWO LiveLong", desc: "Ongoing longevity memberships & support." },
  { icon: Pill, name: "AIWO Kart", desc: "Science-backed personalized supplements." },
  { icon: Hand, name: "AIWO Intervention", desc: "Advanced therapies for peak performance." },
  { icon: Building2, name: "AIWO Enterprise", desc: "B2B wellness programs for high-growth firms." },
  { icon: Users, name: "AIWO Community", desc: "Moai groups and social connection platform." },
  { icon: Monitor, name: "AIWO LifeOS", desc: "AI-powered health management technology." },
];

const pillars = [
  { icon: Moon, name: "Sleep", impact: "30-40% mortality impact" },
  { icon: Wind, name: "Breathing", impact: "20-30% mortality impact" },
  { icon: Utensils, name: "Nutrition", impact: "Metabolic health & insulin" },
  { icon: HeartPulse, name: "Exercise", impact: "35% mortality reduction" },
  { icon: Sun, name: "Circadian Rhythm", impact: "15-25% mortality impact" },
  { icon: Smile, name: "Stress Mgmt", impact: "40% mortality impact" },
  { icon: Sparkles, name: "Purpose", impact: "Ikigai & meaning" },
  { icon: FlaskConical, name: "Gut Health", impact: "Microbiome optimization" },
];

const ProgramOverview = () => {
  return (
    <>
      <PageHeader
        title="India's First Integrated Longevity Partnership Ecosystem"
        subtitle="The AIWO Partners Program"
        backgroundVideo={videoHexagon}
      />

      {/* Vision & Mission Section */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Our Purpose</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Vision & Mission
              </h2>
              <p className="text-xl md:text-2xl text-secondary font-semibold mb-6">
                Enable 1 billion humans to add 20+ healthy years to their lifespan.
              </p>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Build India's first $10 billion longevity company by empowering 10,000+ partners to 
                collectively reach 10 million Indians with transformational longevity solutions.
              </p>
              
              <div className="glass-card p-6 md:p-8">
                <h4 className="font-bold text-secondary text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Why Now?
                </h4>
                <p className="text-white/60 leading-relaxed">
                  The longevity market in India is exploding. By 2030, 150 million Indians will be 
                  seeking proactive health solutions. AIWO is the only company providing an end-to-end 
                  ecosystem—and we're inviting you to be part of this revolution.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-premium">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8">What Makes AIWO Different</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="text-white/50 uppercase text-xs border-b border-white/10">
                        <th className="pb-4 text-left font-semibold">Aspect</th>
                        <th className="pb-4 text-left font-semibold">Traditional</th>
                        <th className="pb-4 text-left text-secondary font-semibold">AIWO</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      {[
                        { aspect: "Offerings", traditional: "Single point solutions", aiwo: "8 Integrated Brands" },
                        { aspect: "Science", traditional: "Generic advice", aiwo: "400+ Biomarkers" },
                        { aspect: "Support", traditional: "DIY / Minimal", aiwo: "Physician-Guided" },
                        { aspect: "Revenue", traditional: "One-time sales", aiwo: "Recurring Membership" },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 last:border-0">
                          <td className="py-5 font-semibold">{row.aspect}</td>
                          <td className="py-5 text-white/50">{row.traditional}</td>
                          <td className="py-5 text-secondary font-semibold">{row.aiwo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

      {/* The 8 Brands Section */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${bgHexagon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/85" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-label">The Ecosystem</span>
            <h2>The 8 Integrated Brands</h2>
            <p>A complete ecosystem covering every aspect of the longevity journey.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="brand-card">
                  <div className="feature-icon mx-auto">
                    <brand.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-3">{brand.name}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{brand.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11+1 Longevity Pillars Section */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${bgDna})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="section-label">The Science</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  The 11+1 Longevity Pillars
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  AIWO's scientific framework addresses the root causes of aging through a 
                  comprehensive multi-tiered approach.
                </p>
                
                <div className="glass-card p-6">
                  <h5 className="font-bold text-secondary text-lg mb-2">Foundation Layer (Pillar 0)</h5>
                  <p className="text-white/50 leading-relaxed">
                    Genetic & Epigenetic Optimization - The personalization engine of our entire ecosystem.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-4">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="pillar-item">
                      <div className="pillar-icon">
                        <pillar.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-bold text-white block">{pillar.name}</span>
                        <span className="text-sm text-white/50">{pillar.impact}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join the Revolution?
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Be among the top 10,000 partners building India's longevity ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/partner-types" className="btn-secondary">
                Explore Tracks
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

export default ProgramOverview;
