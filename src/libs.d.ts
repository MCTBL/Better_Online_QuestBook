declare function html2canvas(element: HTMLElement, options?: any): Promise<HTMLCanvasElement>;
declare var isMobile: {
    phone: boolean;
    tablet: boolean;
};

// jQuery types
declare var $: JQueryStatic;
declare var jQuery: JQueryStatic;

interface JQueryStatic {
    (selector: string): JQuery;
    (element: HTMLElement): JQuery;
    (window: Window): JQuery;
    (callback: () => void): void;
    getJSON(url: string, callback?: (data: any) => void): any;
}

interface JQuery {
    on(event: string, handler: (event?: any) => void): JQuery;
    off(event?: string, handler?: (event?: any) => void): JQuery;
    click(handler?: (event?: any) => void): JQuery;
    addClass(className: string): JQuery;
    removeClass(className: string): JQuery;
    text(text?: string): string | JQuery;
    append(content: any): JQuery;
    find(selector: string): JQuery;
    data(key: string, value?: any): any;
    width(): number;
    hide(): JQuery;
    show(): JQuery;
    css(property: string, value?: string | number): string | JQuery;
    css(properties: { [key: string]: string | number }): JQuery;
    empty(): JQuery;
    animate(properties: any, duration?: number, easing?: string, complete?: () => void): JQuery;
    animate(properties: any, options?: any): JQuery;
    val(value?: string): string | JQuery;
    attr(name: string, value?: string): string | JQuery;
    each(callback: (index: number, element: HTMLElement) => void): JQuery;
    html(htmlString?: string): string | JQuery;
    focus(): JQuery;
    length: number;
    [index: number]: HTMLElement;
}

// echarts namespace
declare namespace echarts {
    function init(dom: HTMLElement, theme?: any): EChartsInstance;
    interface EChartsInstance {
        setOption(option: any): void;
        resize(): void;
        on(event: string, handler: (params: any) => void): void;
        clear(): void;
    }
    // Add the missing ECharts type
    type ECharts = EChartsInstance;
}