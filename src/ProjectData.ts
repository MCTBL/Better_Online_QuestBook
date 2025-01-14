import { ProjectConfig } from "./ProjectConfig.js";

export class ProjectData {
    static selectVersionIndex: number = 0;
    static getPath(url: string) {
        return "version/" + ProjectConfig.resList[ProjectData.selectVersionIndex] + "/" + url;
    }

    static getQuestLinePath() {
        return this.getPath(ProjectConfig.questLinePath);
    }
}