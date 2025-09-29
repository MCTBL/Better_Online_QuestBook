declare function html2canvas(element: HTMLElement, options?: any): Promise<HTMLCanvasElement>;
declare var isMobile: {
	phone: boolean;
};

declare var pako: {
    ungzip(data: Uint8Array, options?: { to: 'string' | 'uint8array' }): string | Uint8Array;
    gzip(data: Uint8Array | string, options?: { to: 'string' | 'uint8array' }): string | Uint8Array;
};