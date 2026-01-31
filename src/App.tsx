import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

// Pages
import Index from "./pages/Index";
import ProgramOverview from "./pages/ProgramOverview";
import PartnerTypes from "./pages/PartnerTypes";
import Tiers from "./pages/Tiers";
import Calculator from "./pages/Calculator";
import SuccessStories from "./pages/SuccessStories";
import Benefits from "./pages/Benefits";
import HowItWorks from "./pages/HowItWorks";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/program-overview" element={<ProgramOverview />} />
            <Route path="/partner-types" element={<PartnerTypes />} />
            <Route path="/tiers" element={<Tiers />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
