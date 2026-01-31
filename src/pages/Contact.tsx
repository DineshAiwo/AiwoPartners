import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, MapPin, Linkedin, Twitter, Instagram, Youtube, Send } from "lucide-react";
import bgAurora from "@/assets/bg-aurora.jpg";
import sectionBgMesh from "@/assets/section-bg-mesh.jpg";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Get In Touch"
        subtitle="We're here to help you build your longevity ecosystem."
        backgroundImage={bgAurora}
      />

      {/* Contact Info & Form */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-premium">
                  <div className="feature-icon">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Email Us</h4>
                  <p className="text-white/60 mb-2">General: partners@aiwo.health</p>
                  <p className="text-white/60">Support: support-partners@aiwo.health</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="card-premium">
                  <div className="feature-icon">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Our HQ</h4>
                  <p className="text-white/60 mb-2">AIWO Health Private Limited,</p>
                  <p className="text-white/60">Chennai, Tamil Nadu, India</p>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="card-premium">
                <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-semibold text-white mb-3">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-white mb-3">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="form-control"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-semibold text-white mb-3">Subject</label>
                    <select className="form-control">
                      <option>Partnership Inquiry</option>
                      <option>Technical Support</option>
                      <option>Billing / Commissions</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-white mb-3">Message</label>
                    <textarea
                      rows={5}
                      placeholder="How can we help?"
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Banner */}
      <section className="section relative overflow-hidden" style={{ backgroundImage: `url(${sectionBgMesh})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-card max-w-xl mx-auto"
          >
            <h4 className="text-xl md:text-2xl font-bold text-white mb-8">Follow the Revolution</h4>
            <div className="flex justify-center gap-6">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
