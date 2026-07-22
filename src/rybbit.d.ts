interface Rybbit {
	pageview: () => void;
	event: (name: string, properties?: Record<string, unknown>) => void;
}

declare global {
	interface Window {
		rybbit: Rybbit;
	}
}

export {};
