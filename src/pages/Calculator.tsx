import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, Download } from "lucide-react";
import bgCircles from "@/assets/bg-circles.jpg";

const Calculator = () => {
  const [tier, setTier] = useState(0.15);
  const [customers, setCustomers] = useState(10);
  const [packageValue, setPackageValue] = useState(50000);
  const [market, setMarket] = useState(1.0);

  const monthlyEarnings = customers * packageValue * tier * market;
  const annualEarnings = monthlyEarnings * 12;

  const formatCurrency = (value: number) => {
    return '₹' + value.toLocaleString('en-IN');
  };

  return (
    <>
      <PageHeader
        title="Partner ROI Calculator"
        subtitle="Estimate Your Potential Earnings Based on Real-World Scenarios"
        backgroundImage={bgCircles}
      />

      {/* Calculator Section */}
      <section className="section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-label">Revenue Projector</span>
            <h2>Project Your Strategic Earnings</h2>
            <p>Adjust the variables below to see how the AIWO ecosystem scales with your business.</p>
          </motion.div>

          <div className="card-premium max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Inputs */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="block font-bold text-white mb-3">Select Partner Tier</label>
                  <select
                    value={tier}
                    onChange={(e) => setTier(parseFloat(e.target.value))}
                    className="form-control"
                  >
                    <option value={0.10}>Registered (10% Comm.)</option>
                    <option value={0.15}>Certified (15% Comm.)</option>
                    <option value={0.20}>Premier (20% Comm.)</option>
                    <option value={0.25}>Strategic (25% Comm.)</option>
                  </select>
                </div>

                <div>
                  <label className="flex justify-between font-bold text-white mb-3">
                    <span>Monthly New Customers</span>
                    <span className="text-secondary">{customers}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={customers}
                    onChange={(e) => setCustomers(parseInt(e.target.value))}
                    className="w-full accent-secondary h-2 rounded-full"
                  />
                </div>

                <div>
                  <label className="block font-bold text-white mb-3">Average Package Value</label>
                  <select
                    value={packageValue}
                    onChange={(e) => setPackageValue(parseFloat(e.target.value))}
                    className="form-control"
                  >
                    <option value={9900}>AIWO Health Foundation (₹9,900)</option>
                    <option value={50000}>AIWO AGE Pro (₹50,000)</option>
                    <option value={250000}>LiveLong Annual (₹2,50,000)</option>
                    <option value={1000000}>Longevity Retreat (₹10,00,000)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-white mb-3">Geographic Market</label>
                  <select
                    value={market}
                    onChange={(e) => setMarket(parseFloat(e.target.value))}
                    className="form-control"
                  >
                    <option value={1.0}>Tier 1 Cities (Metro)</option>
                    <option value={0.8}>Tier 2 Cities</option>
                    <option value={0.6}>Tier 3 / Regional</option>
                  </select>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-3">
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    key={monthlyEarnings}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="result-display"
                  >
                    <span className="text-white/50 uppercase text-sm font-bold block mb-3">
                      Monthly Earnings
                    </span>
                    <span className="text-3xl md:text-4xl font-black text-white">{formatCurrency(Math.round(monthlyEarnings))}</span>
                  </motion.div>

                  <motion.div
                    key={annualEarnings}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="result-display"
                    style={{ background: 'linear-gradient(135deg, #1A237E 0%, #0468CD 100%)' }}
                  >
                    <span className="text-white/70 uppercase text-sm font-bold block mb-3">
                      Annual Revenue
                    </span>
                    <span className="text-3xl md:text-4xl font-black text-white">{formatCurrency(Math.round(annualEarnings))}</span>
                  </motion.div>
                </div>

                <div className="glass-panel p-6 md:p-8">
                  <h5 className="font-bold text-white mb-6 text-center text-lg">3-Year Growth Potential</h5>
                  <div className="space-y-5">
                    {[
                      { year: "Year 1", amount: annualEarnings, width: "33%" },
                      { year: "Year 2 (Est. 50% Growth)", amount: annualEarnings * 1.5, width: "50%" },
                      { year: "Year 3 (Est. 100% Growth)", amount: annualEarnings * 2.5, width: "83%" },
                    ].map((row) => (
                      <div key={row.year}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-white/60">{row.year}</span>
                          <span className="text-secondary font-bold">{formatCurrency(Math.round(row.amount))}</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: row.width }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
            className="cta-card max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Unlock This Potential Today
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              Calculations are based on selected package values and tier commissions. Strategic 
              partners also unlock MDF funding and recurring revenue shares not included in basic estimates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/apply" className="btn-primary">
                Start Your Application
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => window.print()}
                className="btn-secondary"
              >
                <Download className="w-5 h-5" />
                Download Export
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
