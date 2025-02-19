export var msgAction;
(function (msgAction) {
    msgAction["init"] = "init";
    msgAction["ready"] = "ready";
    msgAction["showPopup"] = "showPopup";
    msgAction["resetChart"] = "resetChart";
    msgAction["closeSearchPopup"] = "closeSearchPopup";
    msgAction["showSearchPopup"] = "showSearchPopup";
})(msgAction || (msgAction = {}));
export var localEnum;
(function (localEnum) {
    // /**上次打开的任务页面 */
    // mainIframeUrl = "mainIframeUrl",
    /**上次选中的任务下标 */
    localEnum["selectBtnIndex"] = "selectBtnIndex";
    // 	/**所有的任务数据 */
    // 	questData = "questData",
    // 	/**任务数据版本 */
    // 	questDataVersion = "questDataVersion",
    /**用户选中的语言 */
    localEnum["language"] = "language";
})(localEnum || (localEnum = {}));
export var lang;
(function (lang) {
    lang["zh"] = "zh";
    lang["en"] = "en";
})(lang || (lang = {}));
