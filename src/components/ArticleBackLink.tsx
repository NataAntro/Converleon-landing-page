import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const ArticleBackLink = () => {
  return (
    <Link
      to="/#learn-guides"
      className={cn(
        buttonVariants({ variant: "outline" }),
        "glass-card border-border/60 hover:bg-accent/50 mb-2 w-fit",
      )}
    >
      <ArrowLeft className="h-4 w-4" />
      Back to guides
    </Link>
  );
};

export default ArticleBackLink;
