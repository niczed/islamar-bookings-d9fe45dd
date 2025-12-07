import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register PWA service worker if available (vite-plugin-pwa provides virtual helper)
try {
	// virtual:pwa-register is available after installing vite-plugin-pwa
	// we import lazily so the app still runs if the plugin isn't installed yet
	// @ts-ignore
	const { default: registerSW } = await import('virtual:pwa-register');
	const updateSW = registerSW({
		onRegistered(r) {
			// r is the registration
		},
		onNeedRefresh() {
			// you can prompt user to refresh
			console.log('New content available, please refresh.');
		}
	});
} catch (e) {
	// ignore if plugin isn't installed yet
}

createRoot(document.getElementById("root")!).render(<App />);
