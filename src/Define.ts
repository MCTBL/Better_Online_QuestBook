export type quest = { title: string, url: string, icon: string, title_zh?: string, search_key?: string[] }

export type m2qData = { action: msgAction, data: any }

export enum msgAction {
    init = "init",
    ready = "ready",
}
