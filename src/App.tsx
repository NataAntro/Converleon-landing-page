import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticlePage, { articles } from "./pages/ArticlePage";
import { legacyArticleSlugAliases } from "./data/articles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          {articles.map((article) => (
            <Route key={article.slug} path={`/blog/${article.slug}`} element={<ArticlePage slug={article.slug} />} />
          ))}
          {articles.map((article) => (
            <Route key={`${article.slug}/`} path={`/blog/${article.slug}/`} element={<ArticlePage slug={article.slug} />} />
          ))}
          {Object.entries(legacyArticleSlugAliases).map(([legacySlug, currentSlug]) => (
            <Route key={legacySlug} path={`/${legacySlug}`} element={<ArticlePage slug={currentSlug} />} />
          ))}
          {Object.entries(legacyArticleSlugAliases).map(([legacySlug, currentSlug]) => (
            <Route key={`${legacySlug}/`} path={`/${legacySlug}/`} element={<ArticlePage slug={currentSlug} />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
