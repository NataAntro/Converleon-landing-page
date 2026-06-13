import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Guides from "./pages/Guides";
import ArticlePage from "./pages/ArticlePage";
import { articles } from "./data/articleCatalog";
import { legacyArticleSlugAliases } from "./data/articles";

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/guides/" element={<Guides />} />
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
