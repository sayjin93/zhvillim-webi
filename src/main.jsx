import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Get the root element
const element = document.getElementById("root");
if (!element) {
  throw new Error("Root element not found");
}

// Create a root
const root = createRoot(element);

// Initial render
root.render(<App />);
