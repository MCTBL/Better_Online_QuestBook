export var msgAction;
(function (msgAction) {
    msgAction["init"] = "init";
    msgAction["ready"] = "ready";
    msgAction["showDialog"] = "showDialog";
})(msgAction || (msgAction = {}));
/**对话框的class */
export var myDialog = `
<dialog close id = "myDialog">
	<article>
		<header>
			<button aria-label="Close" rel="prev"></button>
			<p>
				<strong>提示</strong>
			</p>
		</header>
		<p class="dialogContent">hello world!</p>
		<footer>
			<button className="secondary">
			取消
			</button>
			<button>确认</button>
		</footer>
	</article>
</dialog>
`;
