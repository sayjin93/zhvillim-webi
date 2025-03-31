// Importojmë ReactDOM qe është një bibliotekë që na lejon të renderojmë komponentët React në DOM
import { createRoot } from "react-dom/client";

// Importojmë komponentin App
import App from "./App.jsx";

// Gjejmë elementin root nga HTML
const rootElement = document.getElementById("root");

// Krijojmë një instancë të root-it duke përdorur createRoot dhe kalojmë elementin root
const root = createRoot(rootElement);

// Renderojmë komponentin App në elementin root
root.render(<App />);
