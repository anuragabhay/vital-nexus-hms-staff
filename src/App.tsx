
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/DashboardPage";
import PatientManagement from "./pages/PatientManagement";
import AppointmentsPage from "./pages/AppointmentsPage";
import MedicalServicesPage from "./pages/MedicalServicesPage";
import BedManagementPage from "./pages/BedManagementPage";
import EmergencyPage from "./pages/EmergencyPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/patients" element={<PatientManagement />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/medical-services" element={<MedicalServicesPage />} />
          <Route path="/bed-management" element={<BedManagementPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
