export type quest = { title: string, url: string, icon: string, title_zh?: string }

export type m2qData = { action: msgAction, data: any }

export enum msgAction {
    init = "init",
    ready = "ready",
}
