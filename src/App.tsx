import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Sponsoring from "./pages/Sponsoring";
import NotFound from "./pages/NotFound";
import BusinessLayout from "./components/business/BusinessLayout";
import BusinessHome from "./pages/business/BusinessHome";
import BusinessJoin from "./pages/business/BusinessJoin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sponsoring" element={<Sponsoring />} />
          <Route path="/business" element={<BusinessLayout />}>
            <Route index element={<BusinessHome />} />
            <Route path="rejoindre" element={<BusinessJoin />} />
            {/* À venir : "annuaire" et "annuaire/:slug" (BusinessListingCard) */}
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
