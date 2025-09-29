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
        
        // Initialize theme
        this.initTheme();
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

    initTheme() {
        // Get saved theme from localStorage or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
        
        // Add event listener for theme toggle button
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    this.toggleTheme();
                });
            }
        });
    }

    setTheme(theme: string) {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update theme toggle icon
        this.updateThemeIcon(theme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateThemeIcon(theme: string) {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const path = themeToggle.querySelector('path');
            if (path) {
                if (theme === 'dark') {
                    // Moon icon for dark mode
                    path.setAttribute('d', 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z');
                } else {
                    // Sun icon for light mode
                    path.setAttribute('d', 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636a9 9 0 101.591 1.591z');
                }
            }
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