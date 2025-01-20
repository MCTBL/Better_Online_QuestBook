import { ProjectConfig } from "./ProjectConfig.js";
export class ProjectData {
    static getPath(url) {
        return "version/" + ProjectConfig.resList[ProjectData.selectVersionIndex] + "/" + url;
    }
    static getQuestLinePath() {
        return this.getPath(ProjectConfig.questLinePath);
    }
}
ProjectData.selectVersionIndex = 0;
