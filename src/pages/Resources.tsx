import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { GraduationCap, Images, Settings, Calculator, FileText, HelpCircle, ArrowRight, ExternalLink } from "lucide-react";
import bgHexagon from "@/assets/bg-hexagon.jpg";
import sectionBgWaves from "@/assets/section-bg-waves.jpg";

const resources = [
  {
    icon: GraduationCap,
    title: "AIWO Academy",
    desc: "Access 40+ hours of video training on longevity science, sales mastery, and technical implementation.",
    link: "#",
    linkText: "Enter Academy",
    external: true
  },
  {
    icon: Images,
    title: "Brand Assets",
    desc: "Download official logos, social media templates, brochures, and lead-gen landing pages.",
    link: "#",
    linkText: "Download Kit"
  },
  {
    icon: Settings,
    title: "Partner Portal",
    desc: "Manage leads, track commissions in real-time, and download performance reports.",
    link: "#",
    linkText: "Login to Portal",
    external: true
  },
  {
    icon: Calculator,
    title: "ROI Modeling Tool",
    desc: "Advanced calculator for modeling multi-brand revenue streams and MDF projections.",
    link: "/calculator",
    linkText: "Open Calculator"
  },
  {
    icon: FileText,
    title: "GTM Playbooks",
    desc: "Vertical-specific guides (e.g., Gym Owners, Physicians) for successful integration.",
    link: "#",
    linkText: "Coming Soon",
    disabled: true
  },
  {
    icon: HelpCircle,
    title: "FAQ & Support",
    desc: "Search our knowledge base or open a ticket with your Partner Success Manager.",
    link: "/faq",
    linkText: "Visit Help Center"
  }
];

const Resources = () => {
  return (
    <>
      <PageHeader
        title="Partner Resource Library"
        subtitle="Everything you need to master, market, and manage your longevity business."
        backgroundImage={bgHexagon}
      />

      {/* Resources Grid */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="resource-card flex flex-col">
                  <div className="feature-icon">
                    <resource.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-sm text-white/50 mb-6 flex-grow leading-relaxed">{resource.desc}</p>
                  
                  {resource.disabled ? (
                    <button
                      disabled
                      className="btn-secondary opacity-50 cursor-not-allowed"
                    >
                      {resource.linkText}
                    </button>
                  ) : resource.external ? (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      {resource.linkText}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to={resource.link}
                      className="btn-secondary"
                    >
                      {resource.linkText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
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

      {/* Newsletter */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${sectionBgWaves})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-card max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Partner Newsletter</h2>
            <p className="text-white/60 mb-8">
              Get bi-weekly updates on new product launches, science breakthroughs, and partner webinars.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control flex-1"
              />
              <button type="submit" className="btn-primary">
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Resources;
