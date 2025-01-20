
        var chart_this_chart = echarts.init(
            document.getElementById('this_chart'), 'white', {renderer: 'canvas'});
        var option_this_chart = {
    "backgroundColor": "#f5f0d3",
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
        "enabled": false
    },
    "color": [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc"
    ],
    "series": [
        {
            "type": "graph",
            "layout": "none",
            "symbolSize": 10,
            "circular": {
                "rotateLabel": false
            },
            "force": {
                "repulsion": 0,
                "gravity": 0,
                "edgeLength": 30,
                "friction": 0.6,
                "layoutAnimation": true
            },
            "label": {
                "show": false,
                "position": "up",
                "margin": 8,
                "valueAnimation": false
            },
            "lineStyle": {
                "show": true,
                "width": 1,
                "opacity": 1,
                "curveness": 0,
                "type": "solid"
            },
            "roam": true,
            "draggable": false,
            "focusNodeAdjacency": true,
            "data": [
                {
                    "name": "\u300c \u300d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2888.png",
                    "x": 384.0,
                    "y": 108.0,
                    "data": "\u5f53\u4f60\u4ee5\u67d0\u79cd\u65b9\u5f0f\u8bbe\u6cd5\u8fde\u63a5\u4e0a\u5b83\u540e,\u53ef\u4ee5\u83b7\u5f97\u5927\u91cf\u7684\u7814\u7a76\u70b9,\u4f46\u4f60\u4e0d\u4f1a\u56e0\u6b64\u6210\u4e3a\u4e0a\u5e1d. \u4e0d\u8fc7\u4f60\u4e5f\u4e0d\u4f1a\u5c31\u6b64\u6d88\u5931,\u6240\u4ee5\u8fd9\u53ef\u80fd\u662f\u4e00\u6b21\u4f53\u9762\u7684\u4ea4\u6613\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALSA==",
                    "tooltip": "<strong>\u300c \u300d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u7684\u529b\u91cf</br>\u7ec8\u6781\u76ee\u6807:\u6742\u9879"
                },
                {
                    "name": "\u6700\u597d\u7684\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2728.png",
                    "x": 252.0,
                    "y": 300.0,
                    "data": "\u8fd9\u662f\u9664\u4e86\u6bd5\u4e1a\u88c5\u5907/\u521b\u9020\u6cd5\u6756\u4ee5\u5916,\u4f60\u80fd\u5236\u9020\u7684\u6700\u5f3a\u6cd5\u6756. \u8fd8\u6709\u4e00\u4e2a\u6743\u6756\u7248.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKqA==",
                    "tooltip": "<strong>\u6700\u597d\u7684\u6cd5\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5979\u653e\u5f03\u4e86</br>\u7075\u5b9d\u6756\u82af</br>\u7075\u5b9d\u6756\u7aef"
                },
                {
                    "name": "\u628a\u6240\u6709\u6838\u5fc3\u90fd\u5b58\u8d77\u6765.",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/328.png",
                    "x": 384.0,
                    "y": 156.0,
                    "data": "\u8d6b\u654f\u7684\u624b\u888b.(\u54c8\u5229\u6ce2\u72797\u91cc\u9762\u8d6b\u654f\u7684\u795e\u5947\u624b\u888b,\u88ab\u65bd\u4ee5\u65e0\u75d5\u4f38\u5c55\u5492.)",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABSA==",
                    "tooltip": "<strong>\u628a\u6240\u6709\u6838\u5fc3\u90fd\u5b58\u8d77\u6765.</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u5947\u7684\u5e03\u5339"
                },
                {
                    "name": "\u7075\u5b9d\u6756\u7aef",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2727.png",
                    "x": 204.0,
                    "y": 300.0,
                    "data": "\u4e0e\u6697\u5f71\u91d1\u5c5e\u6709\u5173,\u4e0d\u8fc7\u5b83\u4eec\u66f4\u68d2.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKpw==",
                    "tooltip": "<strong>\u7075\u5b9d\u6756\u7aef</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d"
                },
                {
                    "name": "\u7075\u5b9d\u6756\u82af",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2726.png",
                    "x": 300.0,
                    "y": 300.0,
                    "data": "\u73b0\u5728\u4f60\u53ef\u4ee5\u5236\u9020\u6700\u597d\u7684\u6cd5\u6756\u6756\u82af\u4e86,\u90a3\u8fd8\u7b49\u4ec0\u4e48.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKpg==",
                    "tooltip": "<strong>\u7075\u5b9d\u6756\u82af</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u5947\u7684\u5e03\u5339"
                },
                {
                    "name": "\u7075\u5b9d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/320.png",
                    "x": 168.0,
                    "y": 156.0,
                    "data": "\u5c06\u7075\u6db2\u548c\u865a\u7a7a\u91d1\u5c5e\u4ee5\u53ca\u94f1\u9507\u5408\u91d1\u7ed3\u5408,\u6211\u4eec\u53ef\u4ee5\u8f6c\u6362\u51fa\u4e00\u79cd\u65b0\u578b\u7684\u91d1\u5c5e. \u8fd9\u79cd\u91d1\u5c5e\u5341\u5206\u67d4\u8f6f,\u4f46\u662f\u5374\u8d85\u7ea7\u8010\u7528. \u5e76\u4e14\u8fd9\u79cd\u91d1\u5c5e\u6709\u7740\u4ee4\u4eba\u96be\u4ee5\u7f6e\u4fe1\u7684\u9b54\u529b\u4f20\u5bfc\u6027!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABQA==",
                    "tooltip": "<strong>\u7075\u5b9d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247"
                },
                {
                    "name": "\u795e\u5947\u7684\u5e03\u5339",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/316.png",
                    "x": 336.0,
                    "y": 156.0,
                    "data": "\u5c06\u5e03\u5339\u548c\u7075\u6db2\u7ed3\u5408,\u4f60\u5c06\u521b\u9020\u51fa\u4e00\u79cd\u582a\u6bd4\u79d8\u94f6\u7684\u5e03\u5339.\u5b83\u6bd4\u7f8a\u6bdb\u8fd8\u8981\u8f7b,\u4f46\u662f\u5374\u6bd4\u94a2\u94c1\u8fd8\u8981\u575a\u56fa.\u800c\u4e14,\u5b83\u5982\u540c\u4f60\u6240\u77e5\u9053\u7684\u6750\u6599\u4e00\u6837\u53ef\u4ee5\u6ce8\u5165\u9b54\u6cd5\u529b\u91cf.\u8fd9\u771f\u662f\u5236\u9020\u65b0\u578b\u88c5\u7532\u7684\u7edd\u4f73\u6750\u6599!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABPA==",
                    "tooltip": "<strong>\u795e\u5947\u7684\u5e03\u5339</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247"
                },
                {
                    "name": "\u5730\u5fc3\u4e4b\u65c5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2410.png",
                    "x": 12.0,
                    "y": 60.0,
                    "data": "\u5728\u5f97\u5230\u4e00\u628a\u65b0\u9550\u5b50\u5e76\u6e05\u7406\u4e86\u4e00\u4e24\u5ea7\u5c71\u4e4b\u540e,\u4f60\u60f3\u77e5\u9053\u81ea\u5df1\u80fd\u5426\u6316\u5f97...\u66f4\u6df1.\u7ed9\u4e86\u57fa\u5ca9\u4e00\u9550\u5b50\u540e,\u4f60\u770b\u5230\u4e00\u6761\u6df1\u5165\u5730\u5fc3\u7684\u8def.\u63a2\u7d22\u8fd9\u4e2a\u65b0\u4e16\u754c\u540e,\u4f60\u8bb0\u4e0b\u4e86\u51e0\u6761\u53d1\u73b0:%n%nA) \u4f3c\u4e4e\u6ca1\u6709\u751f\u547d%nB) \u5145\u6ee1\u4e86\u57fa\u5ca9,\u9700\u8981\u7528\u65b0\u9550\u5b50\u624d\u80fd\u6e05\u7406%nC) \u5230\u5904\u90fd\u662f\u4e00\u6761\u6761\u4e0a\u4e0b\u8d2f\u901a\u7684\u77ff\u8109%nD) \u67d0\u4e9b\u77ff\u77f3\u5f88\u5947\u602a,\u4e0d\u540c\u4e8e\u4f60\u4e60\u60ef\u7684\u77ff\u77f3%nE) \u7531\u4e8e\u77ff\u673a\u65e0\u6cd5\u7834\u574f\u57fa\u5ca9,\u6240\u4ee5\u4f60\u60f3\u4f7f\u7528\u5b83\u7684\u8bdd,\u5f97\u5148\u4e3a\u5b83\u6253\u901a\u4e00\u6761\u8def.%nF) \u79bb\u5f00\u6b64\u4e16\u754c\u540e,\u4f60\u5c06\u51fa\u73b0\u5728\u9644\u8fd1\u7684\u5730\u8868,\u4f60\u6b64\u7c7b\u8bb0\u5fc6\u7684\u7f3a\u5931\u53ef\u80fd\u662f\u7531\u4e8e\u7f3a\u6c27. \u6709\u53ef\u80fd. (\u79bb\u5f00\u57fa\u5ca9\u4e16\u754c\u540e,\u4f60\u5c06\u4f1a\u88ab\u4f20\u9001\u5230\u9644\u8fd1\u7684\u5730\u8868,\u4e0d\u4f1a\u4f20\u9001\u5230\u5730\u5e95\u7a92\u606f,\u4f46\u4e0d\u4fdd\u8bc1\u4e0d\u4f1a\u4f20\u9001\u5230\u6811\u7684\u5185\u90e8!)%n%n\u5728\u4f60\u5e26\u56de\u6765\u7684\u77ff\u77f3\u6837\u54c1\u4e2d,\u4f60\u627e\u5230\u4e86\u5927\u91cf\"\u57fa\u7840\"\u6216\u8005\"\u4e2d\u7ea7\"\u77ff\u77f3\u548c\u5b9d\u77f3,\u8fd8\u6709\u4e00\u4e9b\u4f60\u4e0d\u8ba4\u8bc6\u7684!\u4e5f\u8bb8\u5f97\u518d\u53bb\u4e00\u8d9f?  %n%n\u53e6\u5916,\u7531\u4e8e\u67d0\u79cd\u539f\u56e0,\u4f60\u4f3c\u4e4e\u95fb\u8d77\u6765\u50cf\u5976\u916a?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJag==",
                    "tooltip": "<strong>\u5730\u5fc3\u4e4b\u65c5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91ca\u653e\u529b\u91cf-\u9550"
                },
                {
                    "name": "\u795e\u5947\u7684\u4f20\u9001\u6838\u5fc3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/330.png",
                    "x": 168.0,
                    "y": 60.0,
                    "data": "\u5982\u679c\u4f60\u7684\u5feb\u6377\u680f\u4e2d\u6709\u7ed1\u5b9a\u7684\u4ed9\u57df\u73cd\u73e0,\u4ed9\u57df\u53ec\u5524\u6838\u5fc3\u5373\u53ef\u5c06\u4f60\u4f20\u9001\u56de\u76f8\u5e94\u7684\u4ed9\u57df\u4e4b\u95e8. \u4f18\u5148\u6fc0\u6d3b\u5feb\u6377\u680f\u6700\u5de6\u4fa7\u7684\u73cd\u73e0,\u6240\u4ee5\u4f60\u53ef\u4ee5\u540c\u65f6\u643a\u5e26\u591a\u4e2a\u73cd\u73e0\u5230\u5904\u65c5\u884c!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABSg==",
                    "tooltip": "<strong>\u795e\u5947\u7684\u4f20\u9001\u6838\u5fc3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u4eec\u4e3a\u4ec0\u4e48\u8981\u6b65\u884c\uff1f"
                },
                {
                    "name": "\u560e\u5623\u8106\u9e21\u8089\u5473",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1109.png",
                    "x": 108.0,
                    "y": 156.0,
                    "data": "\u5728\u8fdb\u884c\u5f88\u957f\u5f88\u957f\u65f6\u95f4\u7684\u795e\u79d8\u7814\u7a76\u540e,\u4f60\u627e\u5230\u4e86\u4e00\u6b21\u6027\u6c38\u4e45\u795b\u9664\u626d\u66f2\u7684\u65b9\u6cd5-\u7eaf\u51c0\u6cea\u6c34. \u5403\u6389\u5b83\u5c06\u795b\u9664\u4f60\u8eab\u4e0a\u6240\u6709\u7684\u626d\u66f2. \u4f46\u662f\u5c0f\u5fc3,\u795b\u9664\u626d\u66f2\u7684\u540c\u65f6\u53ef\u80fd\u4ea7\u751f\u7684\u8d1f\u9762\u6548\u679c\u4f1a\u5341\u5206\u81f4\u547d.%n%n\u8bd1\u8005\u6ce8:\u4f1a\u5c06\u8eab\u4e0a\u626d\u66f2\u503c\u4f1a\u4ea7\u751f\u7684\u6548\u679c\u4e00\u6b21\u6027\u7206\u53d1\u51fa\u6765,\u4e14\u6301\u7eed\u65f6\u95f4\u975e\u5e38\u957f,\u5efa\u8bae\u5403\u5b8c\u8d76\u7d27\u81ea\u6740.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEVQ==",
                    "tooltip": "<strong>\u560e\u5623\u8106\u9e21\u8089\u5473</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d"
                },
                {
                    "name": "\u51c0\u5316\u4f60\u7684\u626d\u66f2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1110.png",
                    "x": 60.0,
                    "y": 156.0,
                    "data": "\u4f60\u6709\u6ca1\u6709\u4e00\u4e2a\u68a6\u60f3,\u795b\u9664\u626d\u66f2\u7684\u540c\u65f6\u4e0d\u4f1a\u4ea7\u751f\u526f\u4f5c\u7528\uff1f \u51c0\u5316\u62a4\u8eab\u7b26\u4f1a\u8ba9\u4f60\u7684\u68a6\u60f3\u6210\u771f.\u5b83\u80fd\u968f\u65f6\u95f4\u4e00\u70b9\u4e00\u6ef4\u5730\u795b\u9664\u4f60\u8eab\u4e0a\u7684\u626d\u66f2,\u6240\u4ee5\u4e0d\u4f1a\u6709\u526f\u4f5c\u7528!%n%n\u522b\u5fd8\u4e86\u6234\u4e0a\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEVg==",
                    "tooltip": "<strong>\u51c0\u5316\u4f60\u7684\u626d\u66f2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u560e\u5623\u8106\u9e21\u8089\u5473"
                },
                {
                    "name": "\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/309.png",
                    "x": 252.0,
                    "y": 156.0,
                    "data": "\u4eca\u5929\u65e9\u4e0a,\u4f60\u53ea\u60f3\u5f80\u6b7b\u91cc\u6253\u81ea\u5df1\u7684\u8138.\u5728\u4f60\u8fc7\u53bb\u7684\u65c5\u7a0b\u4e2d,\u4f60\u5df2\u7ecf\u89c1\u8fc7\u4e86\u8bb8\u591a\u4e0d\u540c\u989c\u8272\u7684\u795e\u5947\u7684\u788e\u7247.\u4f46\u662f\u548c\u4f60\u6bcf\u5929\u4f7f\u7528\u7684\u90a3\u4e9b\u57fa\u7840\u8981\u7d20\u7684\u788e\u7247\u4e0d\u540c,\u8fd9\u4e24\u79cd\u788e\u7247\u4f3c\u4e4e\u5305\u542b\u4e86\u5b83\u4eec\u6240\u5728\u4e16\u754c\u7684\u539f\u59cb\u672c\u8d28.\u5929\u5802\u548c\u5730\u72f1....\u4e24\u4e2a\u622a\u7136\u76f8\u53cd\u7684\u4e16\u754c.%n%n\u4f60\u8ba4\u4e3a\u53ef\u4ee5\u7528\u5b83\u4eec\u6765\u5236\u9020\u4e00\u4e9b...\u5f3a\u529b\u7684\u4e1c\u897f.%n%nPS\uff1a\u5bf9,\u6211\u77e5\u9053\u5408\u6210\u65f6\u4e0d\u4f1a\u6d88\u8017\u73cd\u73e0,\u4e0d\u8fc7\u63a5\u53d7\u8fd9\u4e2a\u6545\u4e8b\u8bbe\u5b9a,\u597d\u5417?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABNQ==",
                    "tooltip": "<strong>\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u7684\u529b\u91cf"
                },
                {
                    "name": "\u795e\u7684\u529b\u91cf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/307.png",
                    "x": 336.0,
                    "y": 108.0,
                    "data": "\u4f60\u53d1\u73b0\u8fd9\u9897\u73cd\u73e0\u4f1a\u5bf9\u4f60\u9020\u6210\u4e00\u4e9b\u6709\u8da3\u7684\u5f71\u54cd.\u66fe\u7ecf\u5728\u4f60\u8033\u8fb9\u7684\u90a3\u4e9b\u4f4e\u8bed\u6d88\u5931\u4e86,\u5e76\u4e14\u6269\u5927\u4e86\u4f60\u5728\u67d0\u4e9b\u65b9\u9762\u7684\u611f\u77e5\u529b. \u4f60\u80fd\"\u611f\u89c9\"\u5230\u5728\u4f60\u8eab\u8fb9\u7684\u9b54\u529b.\u8fd9\u503c\u5f97\u8fdb\u4e00\u6b65\u7814\u7a76\u4e00\u4e0b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABMw==",
                    "tooltip": "<strong>\u795e\u7684\u529b\u91cf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u521b\u9020\u5929\u5730\u7684\u529b\u91cf"
                },
                {
                    "name": "\u8fd9\u4e9b\u4e1c\u897f\u4e0d\u4f1a'\u56de\u6765'\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2887.png",
                    "x": 336.0,
                    "y": 60.0,
                    "data": "\u8fd9\u79cd\u73cd\u73e0\u6bd4\u8f83\u5b9e\u7528\u7684\u7528\u9014\u4e4b\u4e00,\u5c31\u662f\u5236\u9020\u66f4\u597d\u7684\u70bc\u91d1\u7089. \u901a\u8fc7\u8fd9\u79cd\u70bc\u91d1\u7089,\u4f60\u53ef\u4ee5\u7528\u66f4\u5feb\u7684\u901f\u5ea6,\u5c06\u7269\u54c1\u70bc\u6210\u6e90\u8d28.%n%n\u5728\u5408\u6210\u8fc7\u7a0b\u4e2d,\u73cd\u73e0\u4e0d\u4f1a\u88ab\u6d88\u8017,\u4e5f\u4e0d\u4f1a\u635f\u5931\u8010\u4e45.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALRw==",
                    "tooltip": "<strong>\u8fd9\u4e9b\u4e1c\u897f\u4e0d\u4f1a'\u56de\u6765'\u4e86</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u7684\u529b\u91cf"
                },
                {
                    "name": "\u6c38\u4e0d\u78e8\u635f\u7684\u65a7\u5934",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/319.png",
                    "x": 108.0,
                    "y": 204.0,
                    "data": "\u7528\u65b0\u91d1\u5c5e\u6253\u9020\u7684\u65a7\u5934\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f,\u5e76\u4e14\u53ef\u4ee5\u66f4\u5bb9\u6613\u7684\u83b7\u5f97\u9ad8\u7b49\u7ea7\u7684\u9644\u9b54.\u4e0d\u8fc7\u6709\u4ec0\u4e48\u8ba9\u4f60\u89c9\u5f97\u53ef\u4ee5\u66f4\u8fdb\u4e00\u6b65...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABPw==",
                    "tooltip": "<strong>\u6c38\u4e0d\u78e8\u635f\u7684\u65a7\u5934</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d"
                },
                {
                    "name": "\u6c38\u4e0d\u78e8\u635f\u7684\u9774\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/318.png",
                    "x": 276.0,
                    "y": 252.0,
                    "data": "\u5b83\u4eec\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f.\u591a\u4e48\u65b9\u4fbf\u554a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABPg==",
                    "tooltip": "<strong>\u6c38\u4e0d\u78e8\u635f\u7684\u9774\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u5947\u7684\u5e03\u5339"
                },
                {
                    "name": "\u6c38\u4e0d\u78e8\u635f\u7684\u5934\u5dfe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/311.png",
                    "x": 276.0,
                    "y": 60.0,
                    "data": "\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f.\u591a\u4e48\u65b9\u4fbf\u554a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABNw==",
                    "tooltip": "<strong>\u6c38\u4e0d\u78e8\u635f\u7684\u5934\u5dfe</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u5947\u7684\u5e03\u5339"
                },
                {
                    "name": "\u6c38\u4e0d\u78e8\u635f\u7684\u62a4\u817f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/313.png",
                    "x": 276.0,
                    "y": 204.0,
                    "data": "\u5b83\u4eec\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f.\u591a\u4e48\u65b9\u4fbf\u554a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABOQ==",
                    "tooltip": "<strong>\u6c38\u4e0d\u78e8\u635f\u7684\u62a4\u817f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u5947\u7684\u5e03\u5339"
                },
                {
                    "name": "\u6c38\u4e0d\u78e8\u635f\u7684\u9550",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/322.png",
                    "x": 108.0,
                    "y": 60.0,
                    "data": "\u7528\u65b0\u91d1\u5c5e\u6253\u9020\u7684\u9550\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f,\u5e76\u4e14\u53ef\u4ee5\u66f4\u5bb9\u6613\u7684\u83b7\u5f97\u9ad8\u7b49\u7ea7\u7684\u9644\u9b54.\u4e0d\u8fc7\u6709\u4ec0\u4e48\u8ba9\u4f60\u89c9\u5f97\u53ef\u4ee5\u66f4\u8fdb\u4e00\u6b65...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABQg==",
                    "tooltip": "<strong>\u6c38\u4e0d\u78e8\u635f\u7684\u9550</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d"
                },
                {
                    "name": "\u6c38\u4e0d\u78e8\u635f\u7684\u6cd5\u888d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/315.png",
                    "x": 276.0,
                    "y": 108.0,
                    "data": "\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f.\u591a\u4e48\u65b9\u4fbf\u554a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABOw==",
                    "tooltip": "<strong>\u6c38\u4e0d\u78e8\u635f\u7684\u6cd5\u888d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u5947\u7684\u5e03\u5339"
                },
                {
                    "name": "\u6c38\u4e0d\u78e8\u635f\u7684\u94f2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/323.png",
                    "x": 108.0,
                    "y": 108.0,
                    "data": "\u7528\u65b0\u91d1\u5c5e\u6253\u9020\u7684\u94f2\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f,\u5e76\u4e14\u53ef\u4ee5\u66f4\u5bb9\u6613\u7684\u83b7\u5f97\u9ad8\u7b49\u7ea7\u7684\u9644\u9b54.\u4e0d\u8fc7\u6709\u4ec0\u4e48\u8ba9\u4f60\u89c9\u5f97\u53ef\u4ee5\u66f4\u8fdb\u4e00\u6b65...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABQw==",
                    "tooltip": "<strong>\u6c38\u4e0d\u78e8\u635f\u7684\u94f2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d"
                },
                {
                    "name": "\u6c38\u4e0d\u78e8\u635f\u7684\u5251",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/321.png",
                    "x": 108.0,
                    "y": 252.0,
                    "data": "\u7528\u65b0\u91d1\u5c5e\u6253\u9020\u7684\u5251\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f,\u5e76\u4e14\u53ef\u4ee5\u66f4\u5bb9\u6613\u7684\u83b7\u5f97\u9ad8\u7b49\u7ea7\u7684\u9644\u9b54.\u4e0d\u8fc7\u6709\u4ec0\u4e48\u8ba9\u4f60\u89c9\u5f97\u53ef\u4ee5\u66f4\u8fdb\u4e00\u6b65...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABQQ==",
                    "tooltip": "<strong>\u6c38\u4e0d\u78e8\u635f\u7684\u5251</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d"
                },
                {
                    "name": "\u91ca\u653e\u529b\u91cf-\u5934\u5dfe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/310.png",
                    "x": 228.0,
                    "y": 60.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u76d4\u7532\u5728\u6700\u5927\u7a0b\u5ea6\u4e0a\u4fdd\u62a4\u4f60,\u4f60\u9700\u8981\u91ca\u653e\u9690\u85cf\u5728\u5176\u4e2d\u7684\u529b\u91cf.\u8fd9\u53ef\u80fd\u5f88\u56f0\u96be,\u4f46\u662f\u503c\u5f97\u4f60\u4ed8\u51fa\u52aa\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABNg==",
                    "tooltip": "<strong>\u91ca\u653e\u529b\u91cf-\u5934\u5dfe</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d</br>\u6c38\u4e0d\u78e8\u635f\u7684\u5934\u5dfe"
                },
                {
                    "name": "\u91ca\u653e\u529b\u91cf-\u62a4\u817f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/312.png",
                    "x": 228.0,
                    "y": 204.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u76d4\u7532\u5728\u6700\u5927\u7a0b\u5ea6\u4e0a\u4fdd\u62a4\u4f60,\u4f60\u9700\u8981\u91ca\u653e\u9690\u85cf\u5728\u5176\u4e2d\u7684\u529b\u91cf.\u8fd9\u53ef\u80fd\u5f88\u56f0\u96be,\u4f46\u662f\u503c\u5f97\u4f60\u4ed8\u51fa\u52aa\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABOA==",
                    "tooltip": "<strong>\u91ca\u653e\u529b\u91cf-\u62a4\u817f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d</br>\u6c38\u4e0d\u78e8\u635f\u7684\u62a4\u817f"
                },
                {
                    "name": "\u91ca\u653e\u529b\u91cf-\u6cd5\u888d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/314.png",
                    "x": 228.0,
                    "y": 108.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u76d4\u7532\u5728\u6700\u5927\u7a0b\u5ea6\u4e0a\u4fdd\u62a4\u4f60,\u4f60\u9700\u8981\u91ca\u653e\u9690\u85cf\u5728\u5176\u4e2d\u7684\u529b\u91cf.\u8fd9\u53ef\u80fd\u5f88\u56f0\u96be,\u4f46\u662f\u503c\u5f97\u4f60\u4ed8\u51fa\u52aa\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABOg==",
                    "tooltip": "<strong>\u91ca\u653e\u529b\u91cf-\u6cd5\u888d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d</br>\u6c38\u4e0d\u78e8\u635f\u7684\u6cd5\u888d"
                },
                {
                    "name": "\u91ca\u653e\u529b\u91cf-\u9774\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/317.png",
                    "x": 228.0,
                    "y": 252.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u76d4\u7532\u5728\u6700\u5927\u7a0b\u5ea6\u4e0a\u4fdd\u62a4\u4f60,\u4f60\u9700\u8981\u91ca\u653e\u9690\u85cf\u5728\u5176\u4e2d\u7684\u529b\u91cf.\u8fd9\u53ef\u80fd\u5f88\u56f0\u96be,\u4f46\u662f\u503c\u5f97\u4f60\u4ed8\u51fa\u52aa\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABPQ==",
                    "tooltip": "<strong>\u91ca\u653e\u529b\u91cf-\u9774\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d</br>\u6c38\u4e0d\u78e8\u635f\u7684\u9774\u5b50"
                },
                {
                    "name": "\u91ca\u653e\u529b\u91cf-\u5251",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/324.png",
                    "x": 60.0,
                    "y": 252.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u65b0\u5de5\u5177\u66f4\u52a0\u6709\u6548\u7387,\u4f60\u9700\u8981\u91ca\u653e\u9690\u85cf\u5728\u5176\u4e2d\u7684\u529b\u91cf.\u8fd9\u53ef\u80fd\u5f88\u56f0\u96be,\u4f46\u662f\u503c\u5f97\u4f60\u4ed8\u51fa\u52aa\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABRA==",
                    "tooltip": "<strong>\u91ca\u653e\u529b\u91cf-\u5251</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c38\u4e0d\u78e8\u635f\u7684\u5251"
                },
                {
                    "name": "\u91ca\u653e\u529b\u91cf-\u65a7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/326.png",
                    "x": 60.0,
                    "y": 204.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u65b0\u5de5\u5177\u66f4\u52a0\u6709\u6548\u7387,\u4f60\u9700\u8981\u91ca\u653e\u9690\u85cf\u5728\u5176\u4e2d\u7684\u529b\u91cf.\u8fd9\u53ef\u80fd\u5f88\u56f0\u96be,\u4f46\u662f\u503c\u5f97\u4f60\u4ed8\u51fa\u52aa\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABRg==",
                    "tooltip": "<strong>\u91ca\u653e\u529b\u91cf-\u65a7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c38\u4e0d\u78e8\u635f\u7684\u65a7\u5934"
                },
                {
                    "name": "\u91ca\u653e\u529b\u91cf-\u94f2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/325.png",
                    "x": 60.0,
                    "y": 108.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u65b0\u5de5\u5177\u66f4\u52a0\u6709\u6548\u7387,\u4f60\u9700\u8981\u91ca\u653e\u9690\u85cf\u5728\u5176\u4e2d\u7684\u529b\u91cf.\u8fd9\u53ef\u80fd\u5f88\u56f0\u96be,\u4f46\u662f\u503c\u5f97\u4f60\u4ed8\u51fa\u52aa\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABRQ==",
                    "tooltip": "<strong>\u91ca\u653e\u529b\u91cf-\u94f2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c38\u4e0d\u78e8\u635f\u7684\u94f2"
                },
                {
                    "name": "\u91ca\u653e\u529b\u91cf-\u9550",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/327.png",
                    "x": 60.0,
                    "y": 60.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u65b0\u5de5\u5177\u66f4\u52a0\u6709\u6548\u7387,\u4f60\u9700\u8981\u91ca\u653e\u9690\u85cf\u5728\u5176\u4e2d\u7684\u529b\u91cf.\u8fd9\u53ef\u80fd\u5f88\u56f0\u96be,\u4f46\u662f\u503c\u5f97\u4f60\u4ed8\u51fa\u52aa\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABRw==",
                    "tooltip": "<strong>\u91ca\u653e\u529b\u91cf-\u9550</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c38\u4e0d\u78e8\u635f\u7684\u9550"
                },
                {
                    "name": "\u90a3\u4e9b\u4e1c\u897f\u53bb\u54ea\u4e86\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/329.png",
                    "x": 156.0,
                    "y": 252.0,
                    "data": "\u6700\u597d\u4e0d\u8981\u95ee\u8fd9\u4e2a\u95ee\u9898...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABSQ==",
                    "tooltip": "<strong>\u90a3\u4e9b\u4e1c\u897f\u53bb\u54ea\u4e86\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d"
                },
                {
                    "name": "\u6211\u4eec\u4e3a\u4ec0\u4e48\u8981\u6b65\u884c\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/331.png",
                    "x": 168.0,
                    "y": 108.0,
                    "data": "...\u8fd9\u4e2a\u5c0f\u88c5\u7f6e\u53ef\u4ee5\u8ba9\u4f60\u51e0\u4e4e\u80fd\u514d\u8d39\u7684\u8fdb\u884c\u4f20\u9001.\u8fd9\u662f\u4f5c\u5f0a\u4e48\uff1f\u5f88OP\uff1f\u4e0d,\u5f53\u7136\u4e0d\u662f,\u8fd9\u662f\u4e00\u4e2a\u4ed9\u57df\u4e4b\u95e8!%n%n\u6bcf\u53f0\u8bbe\u5907\u53ef\u8bbe\u7f6e10\u4e2a,\u6240\u4ee5\u8981\u6709\u521b\u9020\u529b! ...\u4e0d\u8fc7\u5b83\u4e0d\u80fd\u8de8\u7ef4\u5ea6\u4f20\u9001. \u4f46\u5728\u81ea\u5df1\u57fa\u5730\u5468\u8fb9\u5feb\u901f\u65c5\u884c\u662f\u5b8c\u5168\u591f\u7528\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABSw==",
                    "tooltip": "<strong>\u6211\u4eec\u4e3a\u4ec0\u4e48\u8981\u6b65\u884c\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247"
                }
            ],
            "edgeLabel": {
                "show": false,
                "margin": 8,
                "valueAnimation": false
            },
            "edgeSymbol": [
                "circle",
                "arrow"
            ],
            "edgeSymbolSize": 10,
            "links": [
                {
                    "source": "\u795e\u7684\u529b\u91cf",
                    "target": "\u300c \u300d"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u300c \u300d"
                },
                {
                    "source": "\u5979\u653e\u5f03\u4e86",
                    "target": "\u6700\u597d\u7684\u6cd5\u6756"
                },
                {
                    "source": "\u7075\u5b9d\u6756\u82af",
                    "target": "\u6700\u597d\u7684\u6cd5\u6756"
                },
                {
                    "source": "\u7075\u5b9d\u6756\u7aef",
                    "target": "\u6700\u597d\u7684\u6cd5\u6756"
                },
                {
                    "source": "\u795e\u5947\u7684\u5e03\u5339",
                    "target": "\u628a\u6240\u6709\u6838\u5fc3\u90fd\u5b58\u8d77\u6765."
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u7075\u5b9d\u6756\u7aef"
                },
                {
                    "source": "\u795e\u5947\u7684\u5e03\u5339",
                    "target": "\u7075\u5b9d\u6756\u82af"
                },
                {
                    "source": "\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247",
                    "target": "\u7075\u5b9d"
                },
                {
                    "source": "\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247",
                    "target": "\u795e\u5947\u7684\u5e03\u5339"
                },
                {
                    "source": "\u91ca\u653e\u529b\u91cf-\u9550",
                    "target": "\u5730\u5fc3\u4e4b\u65c5"
                },
                {
                    "source": "\u6211\u4eec\u4e3a\u4ec0\u4e48\u8981\u6b65\u884c\uff1f",
                    "target": "\u795e\u5947\u7684\u4f20\u9001\u6838\u5fc3"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u560e\u5623\u8106\u9e21\u8089\u5473"
                },
                {
                    "source": "\u560e\u5623\u8106\u9e21\u8089\u5473",
                    "target": "\u51c0\u5316\u4f60\u7684\u626d\u66f2"
                },
                {
                    "source": "\u795e\u7684\u529b\u91cf",
                    "target": "\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247"
                },
                {
                    "source": "\u521b\u9020\u5929\u5730\u7684\u529b\u91cf",
                    "target": "\u795e\u7684\u529b\u91cf"
                },
                {
                    "source": "\u795e\u7684\u529b\u91cf",
                    "target": "\u8fd9\u4e9b\u4e1c\u897f\u4e0d\u4f1a'\u56de\u6765'\u4e86"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u6c38\u4e0d\u78e8\u635f\u7684\u65a7\u5934"
                },
                {
                    "source": "\u795e\u5947\u7684\u5e03\u5339",
                    "target": "\u6c38\u4e0d\u78e8\u635f\u7684\u9774\u5b50"
                },
                {
                    "source": "\u795e\u5947\u7684\u5e03\u5339",
                    "target": "\u6c38\u4e0d\u78e8\u635f\u7684\u5934\u5dfe"
                },
                {
                    "source": "\u795e\u5947\u7684\u5e03\u5339",
                    "target": "\u6c38\u4e0d\u78e8\u635f\u7684\u62a4\u817f"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u6c38\u4e0d\u78e8\u635f\u7684\u9550"
                },
                {
                    "source": "\u795e\u5947\u7684\u5e03\u5339",
                    "target": "\u6c38\u4e0d\u78e8\u635f\u7684\u6cd5\u888d"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u6c38\u4e0d\u78e8\u635f\u7684\u94f2"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u6c38\u4e0d\u78e8\u635f\u7684\u5251"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u91ca\u653e\u529b\u91cf-\u5934\u5dfe"
                },
                {
                    "source": "\u6c38\u4e0d\u78e8\u635f\u7684\u5934\u5dfe",
                    "target": "\u91ca\u653e\u529b\u91cf-\u5934\u5dfe"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u91ca\u653e\u529b\u91cf-\u62a4\u817f"
                },
                {
                    "source": "\u6c38\u4e0d\u78e8\u635f\u7684\u62a4\u817f",
                    "target": "\u91ca\u653e\u529b\u91cf-\u62a4\u817f"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u91ca\u653e\u529b\u91cf-\u6cd5\u888d"
                },
                {
                    "source": "\u6c38\u4e0d\u78e8\u635f\u7684\u6cd5\u888d",
                    "target": "\u91ca\u653e\u529b\u91cf-\u6cd5\u888d"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u91ca\u653e\u529b\u91cf-\u9774\u5b50"
                },
                {
                    "source": "\u6c38\u4e0d\u78e8\u635f\u7684\u9774\u5b50",
                    "target": "\u91ca\u653e\u529b\u91cf-\u9774\u5b50"
                },
                {
                    "source": "\u6c38\u4e0d\u78e8\u635f\u7684\u5251",
                    "target": "\u91ca\u653e\u529b\u91cf-\u5251"
                },
                {
                    "source": "\u6c38\u4e0d\u78e8\u635f\u7684\u65a7\u5934",
                    "target": "\u91ca\u653e\u529b\u91cf-\u65a7"
                },
                {
                    "source": "\u6c38\u4e0d\u78e8\u635f\u7684\u94f2",
                    "target": "\u91ca\u653e\u529b\u91cf-\u94f2"
                },
                {
                    "source": "\u6c38\u4e0d\u78e8\u635f\u7684\u9550",
                    "target": "\u91ca\u653e\u529b\u91cf-\u9550"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u90a3\u4e9b\u4e1c\u897f\u53bb\u54ea\u4e86\uff1f"
                },
                {
                    "source": "\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247",
                    "target": "\u6211\u4eec\u4e3a\u4ec0\u4e48\u8981\u6b65\u884c\uff1f"
                }
            ]
        }
    ],
    "legend": [
        {
            "data": [],
            "selected": {}
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "showContent": true,
        "alwaysShowContent": false,
        "showDelay": 0,
        "hideDelay": 100,
        "enterable": false,
        "confine": false,
        "appendToBody": false,
        "transitionDuration": 0.4,
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        "padding": 5,
        "order": "seriesAsc"
    }
};
        chart_this_chart.setOption(option_this_chart);
            window.addEventListener('resize', function(){
                chart_this_chart.resize();
            })
    