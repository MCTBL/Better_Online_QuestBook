export class ProjectConfig {
	static readonly projectName = "BetterOnlineQuestBook";
	static readonly projectName_zh = "更好的在线任务书";
	static readonly projectNm = "BOQB";
	static readonly projectDsc_zh =
		"一时间想不起是哪个任务但又不方便开游戏?试试这个,更好的在线任务书!";
	static readonly projectDsc =
		"A convenient online quest book when you can't remember which quest to play!";
	static readonly projectVersion = "1.0.0";
	static readonly projectDescription = "BetterOnlineQuestBook";
	static readonly projectAuthor = ["MCTBL", "Grievous_Rain"];
	static readonly versionList = ["2.7.2"];
	static readonly resList = ["272", "270"];
	static readonly questLinePath = "quest_line.json";
	static readonly questDataPath = "quest_json";
	static readonly projectUrl =
		"https://github.com/MCTBL/Better_Online_QuestBook";
}
(window as any).ProjectConfig = ProjectConfig;
