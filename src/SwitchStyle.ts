interface isMobile {
    tablet: boolean;
    phone: boolean;
}

export class SwitchStyle {
    constructor() {
        let isMobile: isMobile = (window as any).isMobile;
        if (isMobile.phone) {
            this.loadStylesheet('mobile.css');
        } else {
            this.loadStylesheet('desktop.css');
        }
    }

    loadStylesheet(filename: string) {
        const linkId = 'dynamic-css';
        let stylesheet: any = document.getElementById(linkId);

        if (!stylesheet) {
            stylesheet = document.createElement('link');
            stylesheet.id = linkId;
            stylesheet.rel = 'stylesheet';
            document.head.appendChild(stylesheet);
        }

        if (stylesheet.href !== filename) {
            stylesheet.href = filename;
        }
    }
}


//------------------------JS---------------------------
// (function () {
//     var isMobile = {
//         tablet: false,
//         phone: false
//     };

//     if (window.isMobile) {
//         isMobile = window.isMobile;
//     }

//     function SwitchStyle() {
//         if (isMobile.phone) {
//             this.loadStylesheet('mobile.css');
//         } else {
//             this.loadStylesheet('desktop.css');
//         }
//     }

//     SwitchStyle.prototype.loadStylesheet = function (filename) {
//         var linkId = 'dynamic-css';
//         var stylesheet = document.getElementById(linkId);

//         if (!stylesheet) {
//             stylesheet = document.createElement('link');
//             stylesheet.id = linkId;
//             stylesheet.rel = 'stylesheet';
//             document.head.appendChild(stylesheet);
//         }

//         if (stylesheet.href !== filename) {
//             stylesheet.href = filename;
//         }
//     };

//     new SwitchStyle();
// })();