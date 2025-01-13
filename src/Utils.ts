export class Utils {

    static rotScreen() {
        var main = document.getElementById("main")!;
        window.addEventListener("resize", function () {
            adjustImageSize();
        });
        adjustImageSize();
        function adjustImageSize() {
            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            main.style.height = windowHeight + "px";
            main.style.width = windowWidth + "px";
            if (windowWidth > windowHeight) {
                main.style.transform = "rotate(0deg)";
            } else {
                main.style.transform = "rotate(90deg)";
            }
        }
    }

    static copyH5Str(str: string) {
        var input = str + "";
        const el = document.createElement("textarea");
        el.value = input;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        el.style.fontSize = "12pt";
        const selection = getSelection()!;
        var originalRange;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        el.selectionStart = 0;
        el.selectionEnd = input.length;
        var success = false;
        try {
            success = document.execCommand("copy");
        } catch (err) { }

        document.body.removeChild(el);
        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }
    }
}