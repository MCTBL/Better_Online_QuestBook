export type quest = { title: string, url: string, icon: string, title_zh?: string }

export type m2qData = { action: msgAction, data: any }

export enum msgAction {
	init = "init",
	ready = "ready",
	showDialog = "showDialog",
}


/**对话框的class */
export var myDialog =
	`
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