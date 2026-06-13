import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { scheduleAnalytics } from "./lib/analytics.ts";
import { restoreSpaRedirect } from "./lib/spaRedirect.ts";

restoreSpaRedirect();
scheduleAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
