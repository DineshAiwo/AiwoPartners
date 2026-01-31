import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { ChevronDown, ArrowRight } from "lucide-react";
import bgDna from "@/assets/bg-dna.jpg";

const faqCategories = [
  {
    id: "general",
    name: "General Program",
    questions: [
      {
        q: "Who can become an AIWO Partner?",
        a: "We welcome healthcare professionals, gym owners, spa operators, corporate wellness consultants, and tech platforms. The key requirement is a commitment to longevity science and a high-quality customer base."
      },
      {
        q: "What is the cost to join?",
        a: "Joining the \"Registered\" tier is completely free. Higher tiers like \"Certified\" and \"Premier\" may involve training certification fees or annual revenue commitments to unlock premium benefits like leads and MDF."
      },
      {
        q: "Is there a territory restriction?",
        a: "By default, partners can sell anywhere in India. Premier and Strategic partners may negotiate exclusive territories as part of their partnership agreements."
      }
    ]
  },
  {
    id: "commissions",
    name: "Commissions & Payouts",
    questions: [
      {
        q: "When are commissions paid?",
        a: "Commissions are processed monthly and paid out by the 10th of the following month for all cleared sales and renewals."
      },
      {
        q: "Is there recurring revenue?",
        a: "Yes! For Certified tiers and above, you earn 5% to 10% on all recurring subscriptions and supplement renewals for the lifetime of that customer relationship."
      },
      {
        q: "What payment methods are supported?",
        a: "We support direct bank transfers (NEFT/RTGS) to Indian bank accounts. International partners can receive payments via wire transfer."
      }
    ]
  },
  {
    id: "training",
    name: "Training & Certification",
    questions: [
      {
        q: "How long does certification take?",
        a: "The Foundation Certification typically takes 2-4 weeks to complete, including 40 hours of video content and a final assessment."
      },
      {
        q: "Can I access training before being approved?",
        a: "Basic orientation materials are available during the application review process. Full Academy access is granted upon application approval."
      }
    ]
  },
  {
    id: "technical",
    name: "Technical Integration",
    questions: [
      {
        q: "Is there an API for tech partners?",
        a: "Yes, Tech Partners receive full API documentation and sandbox access for integrating AIWO services into their platforms."
      },
      {
        q: "What support is available for integrations?",
        a: "Tech Partners receive dedicated technical support, including regular office hours calls and priority ticket handling."
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        title="Common Questions"
        subtitle="Everything You Need to Know About the AIWO Partner Ecosystem"
        backgroundImage={bgDna}
      />

      {/* FAQ Section */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Category Tabs */}
            <div className="space-y-3">
              <p className="text-sm text-white/40 uppercase tracking-widest mb-4 font-semibold">Categories</p>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenQuestion(null);
                  }}
                  className={`w-full text-left py-4 px-5 rounded-xl border transition-all ${
                    activeCategory === category.id
                      ? 'bg-secondary text-white border-secondary'
                      : 'border-white/10 text-white hover:bg-white/5'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Questions */}
            <div className="lg:col-span-3">
              {faqCategories.map((category) => (
                <AnimatePresence key={category.id} mode="wait">
                  {activeCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">{category.name}</h3>
                      <div className="space-y-4">
                        {category.questions.map((item, index) => (
                          <div
                            key={index}
                            className="faq-item"
                          >
                            <button
                              onClick={() => setOpenQuestion(openQuestion === `${category.id}-${index}` ? null : `${category.id}-${index}`)}
                              className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                            >
                              <span className="font-semibold text-white pr-4">{item.q}</span>
                              <ChevronDown
                                className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-300 ${
                                  openQuestion === `${category.id}-${index}` ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {openQuestion === `${category.id}-${index}` && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: "auto" }}
                                  exit={{ height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-white/60 leading-relaxed">
                                    {item.a}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-accent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-card max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-white/60 mb-8">
              Our Partnership Strategy team is ready to help you find the right path.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
