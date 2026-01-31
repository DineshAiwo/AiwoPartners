import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Link as LinkIcon, TrendingUp, GraduationCap, Dumbbell, UserCheck, Code, Briefcase, ChevronRight } from "lucide-react";
import videoAurora from "@/assets/video-aurora.mp4";
import sectionBgMesh from "@/assets/section-bg-mesh.jpg";
import sectionBgWaves from "@/assets/section-bg-waves.jpg";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoAurora} type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(4, 104, 205, 0.4) 0%, transparent 70%)' }}
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, rgba(26, 35, 126, 0.5) 0%, transparent 70%)' }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center pt-32 md:pt-40">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-8 leading-tight tracking-tight"
            >
              Build India's First $10 Billion Longevity Ecosystem With Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join 10,000+ partners transforming millions of lives through science-backed 
              longevity solutions. Earn ₹25L-₹10Cr+ annually while adding 20 healthy years 
              to your customers' lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/apply" className="btn-primary">
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                Watch Ecosystem Tour
              </Link>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: "500+", label: "Active Partners" },
              { value: "11", label: "Longevity Pillars" },
              { value: "₹25Cr+", label: "Partner Earnings" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="stat-card backdrop-blur-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white block mb-2">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-white/50 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Trust Bar */}
      <section className="py-12 md:py-16 border-y border-white/5 bg-background">
        <div className="container mx-auto px-6">
          <p className="text-center text-white/40 text-sm mb-6 uppercase tracking-widest">Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["Economic Times", "YourStory", "Inc42", "Forbes India"].map((name) => (
              <span key={name} className="text-white/30 font-semibold tracking-wide text-lg">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${sectionBgMesh})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-label">The AIWO Advantage</span>
            <h2>Why AIWO Partners Win</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: LinkIcon,
                title: "Integrated Ecosystem",
                desc: "Sell 8 brands from one platform. 200,000+ product combinations.",
                highlight: "Unlimited Revenue Potential"
              },
              {
                icon: TrendingUp,
                title: "Proven Profitability",
                desc: "Earn up to 25% commission on high-value retreat packages.",
                highlight: "High Ticket ROI"
              },
              {
                icon: GraduationCap,
                title: "Elite Academy",
                desc: "40+ hours of training on longevity science & sales mastery.",
                highlight: "Master the Science"
              }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="cursor-pointer"
              >
                <div className="card-premium h-full group">
                  <div className="feature-icon">
                    <card.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-white/50 mb-6 leading-relaxed">{card.desc}</p>
                  <div className="flex items-center gap-2 text-secondary font-medium">
                    <span>{card.highlight}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/40 mt-12 md:mt-16"
          >
            Start today to{" "}
            <Link to="/apply" className="text-secondary hover:underline font-medium">
              Become a Partner
            </Link>
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="divider-gradient" />
      </div>

      {/* Partner Types */}
      <section className="section-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-label">Partnership Models</span>
            <h2>Find Your Perfect Partnership Model</h2>
            <p>Diverse tracks tailored for wellness hubs, medical pros, and tech visionaries.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Dumbbell, title: "Channel Sales", subtitle: "For Wellness Centers & Clinics", revenue: "₹50L - ₹5Cr /yr" },
              { icon: UserCheck, title: "Referral Partner", subtitle: "For Individual Practitioners", revenue: "₹25L - ₹50L /yr" },
              { icon: Code, title: "Tech Partner", subtitle: "For Health-Tech Startups", revenue: "₹1Cr - ₹100Cr /yr" },
              { icon: Briefcase, title: "Corporate Consultant", subtitle: "For B2B Wellness Solutions", revenue: "₹2Cr - ₹10Cr /yr" },
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="cursor-pointer"
              >
                <div className="partner-card text-center h-full">
                  <div className="feature-icon mx-auto">
                    <type.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">{type.title}</h4>
                  <p className="text-sm text-white/40 mb-6">{type.subtitle}</p>
                  <p className="text-xl md:text-2xl font-bold text-secondary">{type.revenue}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/partner-types" className="btn-secondary">
              Explore All Models
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${sectionBgWaves})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/75" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-label">Success Stories</span>
            <h2>Transformations That Speak</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "Joined AIWO 2 years ago. Our revenue grew 8x by offering longevity retreats to our members. Highly trust, high returns.",
                name: "Rajesh Kumar",
                role: "Elite Gym Owner",
                result: "8X Revenue Growth"
              },
              {
                quote: "The perfect lifestyle brand. AIWO's 8 brands cover every requirement. Highly recommend for medical professionals.",
                name: "Dr. Priya Sharma",
                role: "Physician, Bangalore",
                result: "500+ Patient Referrals"
              },
              {
                quote: "Sales of retreat packages is seamless. AIWO's support system is the best in India. Generated 15.5Cr in profit last year.",
                name: "Amit Verma",
                role: "Entrepreneur, Delhi",
                result: "₹15.5 Crore in Sales"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="cursor-pointer"
              >
                <div className="testimonial-card">
                  <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="font-bold text-white">{testimonial.name}</h6>
                      <p className="text-sm text-white/40">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <span className="text-secondary font-semibold">{testimonial.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/success-stories" className="btn-secondary">
              Read All Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Legacy?
            </h2>
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto">
              Join India's most ambitious longevity ecosystem and transform lives while building generational wealth.
            </p>
            <Link to="/apply" className="btn-primary">
              Start Your Application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
