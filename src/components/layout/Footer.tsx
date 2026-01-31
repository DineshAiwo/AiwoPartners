import { Link } from "react-router-dom";
import { Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { SiThreads, SiReddit, SiSnapchat } from "react-icons/si";
import logoWhite from "@/assets/logo-white.png";

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/aiwopartners/",
    label: "Instagram"
  },
  { 
    icon: SiThreads, 
    href: "https://www.threads.com/@aiwopartners",
    label: "Threads"
  },
  { 
    icon: Twitter, 
    href: "https://x.com/AiwoPartners",
    label: "X (Twitter)"
  },
  { 
    icon: SiReddit, 
    href: "https://www.reddit.com/user/AiwoPartners/",
    label: "Reddit"
  },
  { 
    icon: SiSnapchat, 
    href: "https://www.snapchat.com/add/aiwopartners",
    label: "Snapchat"
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src={logoWhite} alt="AIWO Partners" className="h-10 w-auto" />
            </Link>
            <p className="text-white/40 leading-relaxed mb-8 max-w-sm">
              Building India's first $10 Billion longevity company through a network of 
              elite health and wellness entrepreneurs.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h5 className="font-semibold text-white mb-6">Program</h5>
            <ul className="space-y-4">
              {[
                { label: "Overview", href: "/program-overview" },
                { label: "Partner Types", href: "/partner-types" },
                { label: "Tiers", href: "/tiers" },
                { label: "Calculator", href: "/calculator" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/40 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-semibold text-white mb-6">Resources</h5>
            <ul className="space-y-4">
              {[
                { label: "Benefits", href: "/benefits" },
                { label: "Success Stories", href: "/success-stories" },
                { label: "Resource Library", href: "/resources" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/40 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-semibold text-white mb-6">Support</h5>
            <ul className="space-y-4">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Apply Now", href: "/apply" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/40 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h5 className="font-semibold text-white mb-6">Newsletter</h5>
            <p className="text-sm text-white/40 mb-4">
              Get insights on longevity business.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all hover:gap-3"
                style={{ background: 'linear-gradient(135deg, #1A237E 0%, #0468CD 100%)' }}
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © 2026 AIWO Partner Program. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
