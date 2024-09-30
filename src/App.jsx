import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import Attractions from "./pages/Attractions";
import AttractionDetails from "./components/AttractionDetails";
import SearchResultsPage from "./pages/SearchResultsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/attractions" element={<Attractions />} />
              <Route path="/attraction/:id" element={<AttractionDetails />} />
              <Route path="/search" element={<SearchResultsPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;