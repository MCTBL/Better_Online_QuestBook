export class ProjectConfig {
	static readonly projectName = "BetterQuestBook";
	static readonly projectName_zh = "更好的任务书";
	static readonly projectVersion = "1.0.0";
	static readonly projectDescription = "BetterOnlineQuestBook";
	static readonly projectAuthor = ["MCTBL", "Grievous_Rain"];
	static readonly versionList = ["2.7.2"];
	static readonly resList = ["272", "270"];
	static readonly questLinePath = "quest_line.json";
	static readonly questDataPath = "quest_json";
}
(window as any).ProjectConfig = ProjectConfig;
