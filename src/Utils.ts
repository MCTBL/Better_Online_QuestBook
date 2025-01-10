export class Utils {



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