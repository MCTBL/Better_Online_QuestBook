
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
                    "name": "\u65b9\u6cd5\u4e00:IC2\u6d41\u4f53/\u56fa\u4f53\u88c5\u7f50\u673a",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/734.png",
                    "x": 108.0,
                    "y": 108.0,
                    "data": "\u7b2c\u4e00\u4e2a\u5236\u4f5c\u751f\u7269\u8d28\u7684\u65b9\u6cd5\u662f\u4f7f\u7528IC2\u6d41\u4f53/\u56fa\u4f53\u88c5\u7f50\u673a.\u4e00\u6876\u6c34\u4ee5\u53ca\u4e00\u4e2a\u7ce0\u53ef\u4ee5\u5236\u6210\u4e00\u6876\u7684\u751f\u7269\u8d28.</br></br>[warn]\u8fd9\u4e2a\u9009\u62e9\u5e76\u4e0d\u771f\u7684\u63a8\u8350. \u4f60\u5e94\u8be5\u5173\u6ce8GT\u673a\u5668, \u800c\u4e0d\u662fIC2\u7684. \u5b83\u4e0e\u666e\u901a\u5355\u5143\u7684\u4ea4\u4e92\u4e5f\u6709\u4e00\u4e9b\u95ee\u9898,\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u901a\u7528\u6d41\u4f53\u5355\u5143.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC3g==",
                    "title": "\u00a76\u00a7l\u65b9\u6cd5\u4e00:IC2\u6d41\u4f53/\u56fa\u4f53\u88c5\u7f50\u673a",
                    "tooltip": "<strong>\u65b9\u6cd5\u4e00:IC2\u6d41\u4f53/\u56fa\u4f53\u88c5\u7f50\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ce0"
                },
                {
                    "name": "\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3072.png",
                    "x": 264.0,
                    "y": 564.0,
                    "data": "\u4f60\u5236\u6210\u4e86\u4f60\u7684\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d.\u662f\u65f6\u5019\u591a\u9020\u4e00\u4e9b,\u5347\u7ea7\u4f60\u7684\u5de5\u4e1a\u9ad8\u7089\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMAA==",
                    "title": "\u00a76\u00a7l\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d",
                    "tooltip": "<strong>\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u51b7\u5374\u6db2</br>MV\u7ea7\u80fd\u6e90\u4ed3</br>\u51b7\u5374\u574e\u5854\u5c14\u5408\u91d1"
                },
                {
                    "name": "\u805a\u6c2f\u4e59\u70ef",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1873.png",
                    "x": 612.0,
                    "y": 264.0,
                    "data": "\u805a\u6c2f\u4e59\u70ef\u662f\u7194\u878d\u72b6\u6001\u7684PVC(Poly-Vinyl-Chloride). \u4f60\u9700\u8981\u6c2f\u4e59\u70ef\u548c\u6c27\u6c14\u6765\u5236\u5907\u805a\u6c2f\u4e59\u70ef. \u7a0d\u540e\u4f60\u4f1a\u9700\u8981\u7528\u5b83\u6765\u5236\u4f5c\u8d34\u7247\u7535\u5bb9.</br></br>\u60f3\u8981\u8ba9\u4f60\u7684\u53cd\u5e94\u91dc\u5e72\u5e72\u51c0\u51c0,\u4f60\u5c31\u8981\u8fde\u505a\u4e24\u6b21,\u6216\u8005\u9009\u62e9\u90a3\u4e2a8\u79d2\u7684\u914d\u65b9\u91cd\u590d\u4e09\u6b21. \u4e00\u4e2a\u5355\u5143\u7684\u7194\u878d\u805a\u6c2f\u4e59\u70ef\u4e3a144L,\u6070\u597d\u662f\u4e00\u4e2a\u6761\u6216\u7247\u7684\u91cf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHUQ==",
                    "title": "\u00a76\u00a7l\u805a\u6c2f\u4e59\u70ef",
                    "tooltip": "<strong>\u805a\u6c2f\u4e59\u70ef</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c2f\u4e59\u70ef"
                },
                {
                    "name": "\u54b3\u54b3\u54b3-\u9700\u8981\u5904\u7406\u4e0b\u6c61\u67d3\u4e86!",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1417.png",
                    "x": 120.0,
                    "y": 564.0,
                    "data": "\u9e1f\u513f\u4ece\u5929\u5760\u843d,\u9c7c\u5728\u6cb3\u91cc\u7ffb\u7740\u809a\u76ae,\u9178\u96e8\u878d\u5316\u4e86\u5730\u9762...\u662f\u65f6\u5019\u5904\u7406\u5783\u573e\u3001\u51c0\u5316\u7a7a\u6c14\u4e86.</br></br>\u5c0f\u578b\u9ed1\u94a2\u6da1\u8f6e\u53ef\u4ee5\u6ee1\u8db3\u76ee\u524d\u6240\u9700. \u4f60\u9700\u89812A\u7684\u7a33\u5b9a\u7535\u6d41\u624d\u80fd\u4fdd\u8bc1\u6c61\u67d3\u6e05\u6d17\u673a\u6301\u7eed\u5de5\u4f5c.</br></br>\u8bd1\u8005\u6ce8: \u5982\u679c\u53bb\u8fc7\u672b\u5730\u7684\u8bdd,\u7ec8\u672b\u6da1\u8f6e\u662f\u4e0d\u9519\u7684\u9009\u62e9.</br></br>\u7528\u87ba\u4e1d\u5200\u5355\u51fb+/-\u6807\u5fd7\u53ef\u4ee5\u6539\u53d8\u6c61\u67d3\u63a2\u6d4b\u4eea\u7684\u8bbe\u7f6e. \u53e6\u5916,\u901a\u5e38\u6765\u8bf4,\u66f4\u597d(\u66f4\u5927)\u7684\u6da1\u8f6e,\u6e05\u7406\u6c61\u67d3\u6548\u679c\u5c31\u8d8a\u597d. \u4ee3\u7801\u592a\u590d\u6742,\u65e0\u6cd5\u5728\u6b64\u5904\u8fdb\u884c\u8be6\u7ec6\u8bf4\u660e,\u4f46\u57fa\u672c\u4e0a\u5c31\u662f\u8fd9\u6837. \u53d1\u7535\u8d8a\u591a\u7684\u6da1\u8f6e",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFiQ==",
                    "title": "\u00a76\u00a7l\u54b3\u54b3\u54b3-\u9700\u8981\u5904\u7406\u4e0b\u6c61\u67d3\u4e86!",
                    "tooltip": "<strong>\u54b3\u54b3\u54b3-\u9700\u8981\u5904\u7406\u4e0b\u6c61\u67d3\u4e86!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u9508\u94a2\u592a\u96be\u70e7\u4e86\uff1f"
                },
                {
                    "name": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/893.png",
                    "x": 696.0,
                    "y": 276.0,
                    "data": "\u8fd9\u4e2a\u7269\u54c1\u4f60\u5728MV\u9636\u6bb5\u4f1a\u7528\u5230\u5f88\u591a\u5f88\u591a,\u5982\u679c\u4f60\u60f3\u4ece\u4f60\u7684\u50a8\u7f50\u4e2d\u63d0\u53d6\u6db2\u4f53\u6216\u8005\u60f3\u8ba9\u7535\u89e3\u673a\u6216\u8005\u79bb\u5fc3\u673a\u540c\u65f6\u8f93\u51fa\u6db2\u4f53\u548c\u7269\u54c1\u7684\u8bdd,\u90a3\u4e48\u4f60\u5c31\u9700\u8981\u4e00\u4e2a.</br></br>\u00a74\u63d0\u793a:\u7535\u52a8\u6cf5\u9700\u8981\u4f5c\u4e3aGT\u6d41\u4f53\u7ba1\u9053\u6216\u8005GT\u673a\u5668\u7684\u8986\u76d6\u677f\u4f7f\u7528,\u7528\u87ba\u4e1d\u5200\u53f3\u51fb\u53ef\u4ee5\u6539\u53d8\u5b83\u7684\u5de5\u4f5c\u6a21\u5f0f.\u5f53\u7136,\u73b0\u5728\u76f4\u63a5\u7a7a\u624bShift+\u53f3\u952e\u663e\u793aGUI\u66f4\u52a0\u65b9\u4fbf.</br></br>\u7535\u52a8\u6cf5\u8fd8\u53ef\u4ee5\u5728\u7ec4\u88c5\u673a\u5185\u5347\u7ea7\u4e3a\u6d41\u4f53\u6821\u51c6\u5668,\u4ee5\u4fbf\u7cbe\u786e\u7684\u63a7\u5236\u6d41\u4f53\u4f20\u8f93\u7684\u901f\u5ea6.</br></br>\u8bd1\u8005\u6ce8:\u6d41\u4f53\u6821\u51c6\u5668\u6bd4\u8f83\u9002\u7528\u4e8e\u84b8\u6c7d\u8f6e\u673a\u6216\u71c3\u6c14\u8f6e\u673a\u8fd9\u7c7b\u6d88\u8017\u901f\u5ea6\u8f83\u5feb\u7684\u591a\u65b9\u5757\u673a\u5668,\u7b49\u79bb\u5b50\u6da1\u8f6e\u9700\u8981\u7528\u5230\u7684\u662fIC\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADfQ==",
                    "title": "\u00a76\u00a7lMV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2",
                    "tooltip": "<strong>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "\u8d85\u4f4e\u529f\u7387IC",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1868.png",
                    "x": 192.0,
                    "y": 420.0,
                    "data": "MV\u80fd\u6e90\u4ed3\u9700\u8981\u8d85\u4f4e\u529f\u7387IC.\u53bb\u5236\u9020\u4e00\u4e9b\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHTA==",
                    "title": "\u00a76\u00a7l\u8d85\u4f4e\u529f\u7387IC",
                    "tooltip": "<strong>\u8d85\u4f4e\u529f\u7387IC</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u6676\u5706"
                },
                {
                    "name": "\u690d\u7269\u7403",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/731.png",
                    "x": 300.0,
                    "y": 60.0,
                    "data": "\u4e0b\u4e00\u6b65,\u4f60\u9700\u8981\u538b\u7f29\u5c0f\u9ea6\u751f\u4ea7\u690d\u7269\u7403.</br></br>MV\u538b\u7f29\u673a\u6bd4LV\u7684\u5feb\u4e00\u500d.\u4f60\u53ef\u80fd\u8ba4\u4e3a\u7528MV\u538b\u7f29\u673a\u662f\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f.\u90a3\u4f60\u5c31[warn]\u9519\u4e86[/warn]. \u4e3a\u4ec0\u4e48?\u8bf7\u8bb0\u4f4f,\u5b83\u7684\u8017\u7535\u662fLV\u76844\u500d.\u8fd9\u610f\u5473\u7740\u4f60\u9700\u8981\u82b1\u8d394\u500d\u7684EU,\u800c\u5f97\u5230\u7684\u56de\u62a5EU\u6ca1\u6709\u53d8\u5316,\u4ec5\u4ec5\u52a0\u5feb\u4e86\u901f\u5ea6.\u6700\u540e\u8fd9\u4e00\u5957\u4ea7\u7ebf\u6536\u83b7\u7684\u662fEU\u8d64\u5b57.\u5f88\u8bbd\u523a\u5427,\u6211\u61c2\u7684. \u4f60\u8fd8\u53ef\u4ee5\u7528\u591a\u4e2a\u673a\u5668(\u6211\u559c\u6b22),\u7a0d\u540e\u8fd8\u80fd\u7528\u5904\u7406\u9635\u5217\u6216\u591a\u65b9\u5757\u673a\u5668(\u5982\u679c\u6709\u7684\u8bdd). \u8fd9\u9002\u7528\u4e8e\u6240\u6709\u71c3\u6599\u751f\u4ea7\u7ebf,\u8fd9\u662f\u57fa\u7840\u7406\u8bba.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC2w==",
                    "title": "\u00a76\u00a7l\u690d\u7269\u7403",
                    "tooltip": "<strong>\u690d\u7269\u7403</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u751f\u7269\u8d28\u71c3\u6599"
                },
                {
                    "name": "\u7194\u878d\u805a\u4e59\u70ef",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/759.png",
                    "x": 612.0,
                    "y": 420.0,
                    "data": "\u805a\u4e59\u70ef\u7531\u4e59\u70ef\u548c\u6c27\u6c14\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u5236\u6210.</br>\u4e00\u4e2a\u7194\u878d\u805a\u4e59\u70ef\u5355\u5143\u4e3a144L\u805a\u4e59\u70ef,\u521a\u597d\u662f\u4e00\u4e2a\u6761\u6216\u8005\u677f\u7684\u91cf.</br>\u5982\u679c\u4f60\u9700\u8981\u66f4\u7cbe\u786e\u7684\u5bb9\u91cf,\u4f60\u53ef\u4ee5\u4f7f\u7528\u5bb9\u91cf\u74f6,\u5bb9\u91cf\u74f6\u9700\u8981\u787c(\u7535\u89e3\u787c\u7802).</br></br>\u624b\u6301\u5355\u5143\u7684\u65f6\u5019,\u4f60\u00a7o\u53ef\u80fd\u00a7r\u4f1a\u53d7\u5230\u4f24\u5bb3.\u8bb0\u5f97\u6234\u4e0a\u624b\u5957,\u6216\u8005\u628a\u624b\u5957\u6389\u4e2a\u4e2a. \u6240\u6709\u7684\u7194\u878d\u5355\u5143\u90fd\u4f1a\u4ea7\u751f\u4f24\u5bb3,\u5e76\u4e14\u53ea\u80fd\u5bb9\u7eb3144L,\u50cf\u4e00\u4e9b\u91d1\u5c5e\u6750\u6599\u3001\u5851\u6599\u7b49\u90fd\u662f\u7194\u878d\u5355\u5143. \u62b1\u6b49,\u00a7o\u6d41\u4f53\u63d0\u53d6\u00a7r,\u65e0\u8bba\u8fd9\u662f\u4ec0\u4e48\u610f\u601d.</br></br>\u53d1\u73b0\u6709\u4e9b\u6b8b\u7559? \u8bd5\u8bd5\u640b\u5b50,\u6216\u8005\u4f60\u6750\u6599\u8db3\u591f\u7684\u8bdd,\u53ef\u4ee5\u4f7f\u752812\u4e2a\u4e59\u70ef\u5355\u5143\u52a0\u4e0a84\u4e2a\u6c27\u5355\u5143\u521a\u597d\u5236\u6210125\u5355\u5143\u805a\u4e59\u70ef.</br></br>\u8bd1\u8005\u6ce8:\u53ef\u4ee5\u7528\u901a\u7528\u6d41\u4f53\u5355\u5143\u7ed5\u8fc7\u8fd9\u4e9b\u7194\u878d\u5355\u5143,\u53ef\u4ee5\u6b63\u5e38\u5bb9\u7eb31000L,\u4e14\u4e0d\u4f1a\u6709\u4f24\u5bb3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC9w==",
                    "title": "\u00a76\u00a7l\u7194\u878d\u805a\u4e59\u70ef",
                    "tooltip": "<strong>\u7194\u878d\u805a\u4e59\u70ef</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>O\u4f3c\u4e4e\u662f\u6c27</br>\u4e59\u70ef"
                },
                {
                    "name": "\u53d1\u9175\u751f\u7269\u8d281",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/736.png",
                    "x": 156.0,
                    "y": 204.0,
                    "data": "\u4f7f\u7528MV\u53d1\u9175\u69fd,\u4f60\u53ef\u4ee5\u5236\u9020\u53d1\u9175\u751f\u7269\u8d28.\u8fd9\u662f\u5236\u4f5c\u7532\u70f7(methane)\u3001\u4e59\u9187(ethanol)\u548c\u7532\u9187(methanol)\u7684\u57fa\u7840\u539f\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC4A==",
                    "title": "\u00a76\u00a7l\u53d1\u9175\u751f\u7269\u8d28",
                    "tooltip": "<strong>\u53d1\u9175\u751f\u7269\u8d281</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u751f\u7269\u8d28</br>\u8def\u7ebf\u4e09\uff1a\u70ed\u89e3\u7089"
                },
                {
                    "name": "\u4f60\u53d7\u591f\u4e86?\u6211\u6253\u8d4c\u4f60\u89c9\u5f97\u62a5\u7eb8\u65e9\u5c31\u6b7b\u4e86!",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1913.png",
                    "x": 648.0,
                    "y": 156.0,
                    "data": "\u6392\u7248\u53f0\u548c\u62d3\u5370\u673a\u4f7f\u4f60\u80fd\u590d\u5236\u9644\u9b54\u4e66.\u8fd9\u4e2a\u8fc7\u7a0b\u6709\u70b9\u590d\u6742,\u6240\u4ee5\u4f60\u6700\u597d\u67e5\u67e5Bibliocraft\u8fd9\u4e2amod\u7684wiki.\u590d\u5236\u9644\u9b54\u4e66\u9700\u8981\u5927\u91cf\u7684\u7ecf\u9a8c,\u6240\u4ee5\u662f\u65f6\u5019\u53bb\u5237\u5237\u7ecf\u9a8c\u4e86...</br></br>\u590d\u5236\u65f6\u8fd0III\u9644\u9b54\u4e66\u9700\u898140+\u7b49\u7ea7\u7684\u7ecf\u9a8c.\u8bf7\u6ce8\u610f,wiki\u63d0\u5230\u8fc7,\u53ea\u652f\u6301\u539f\u7248\u58a8\u56ca.</br></br>[note]\u4f60\u8fd8\u9700\u8981\u4e00\u4e9b\u795e\u79d8\u952d.\u4f60\u53ef\u4ee5\u7814\u7a76\u795e\u79d8\u65f6\u4ee3,\u4e5f\u53ef\u4ee5\u5728\u5956\u52b1\u7bb1\u4e2d\u78b0\u78b0\u8fd0\u6c14,\u6216\u662f\u5c1d\u8bd5\u57f9\u80b2\u9b54\u6cd5\u91d1\u5c5e\u8393(Magic-Metal-Berry)\u8fd9\u79cd\u6742\u4ea4\u4f5c\u7269.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHeQ==",
                    "title": "\u00a76\u00a7l\u4f60\u53d7\u591f\u4e86?\u6211\u6253\u8d4c\u4f60\u89c9\u5f97\u62a5\u7eb8\u65e9\u5c31\u6b7b\u4e86!",
                    "tooltip": "<strong>\u4f60\u53d7\u591f\u4e86?\u6211\u6253\u8d4c\u4f60\u89c9\u5f97\u62a5\u7eb8\u65e9\u5c31\u6b7b\u4e86!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "\u6211\u4eec\u53ea\u662f\u98ce\u4e2d\u7684\u5c18\u571f",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1850.png",
                    "x": 648.0,
                    "y": 216.0,
                    "data": "\u5bfb\u627e\u4f60\u7684\u602a\u7269\u519c\u573a\u4e2d\u6d41\u6c34\u7684\u66ff\u4ee3\u54c1? \u4f7f\u7528\u98ce\u6247\u5c06\u751f\u7269\u6216\u662f\u7269\u54c1\u5439\u5411\u4f60\u60f3\u8981\u7684\u5730\u65b9. \u4f7f\u7528\u7ea2\u77f3\u4fe1\u53f7\u6fc0\u6d3b\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHOg==",
                    "title": "\u00a76\u00a7l\u6211\u4eec\u53ea\u662f\u98ce\u4e2d\u7684\u5c18\u571f",
                    "tooltip": "<strong>\u6211\u4eec\u53ea\u662f\u98ce\u4e2d\u7684\u5c18\u571f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "\u7269\u54c1\u592a\u591a? \u4e0d\u5b58\u5728\u7684!",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2414.png",
                    "x": 924.0,
                    "y": 228.0,
                    "data": "\u4e1c\u897f\u592a\u591a\u653e\u4e0d\u4e0b? \u53ea\u8981\u628a\u8fd9\u4e2a\u574f\u5c0f\u5b50\u62cd\u5728\u62bd\u5c49\u4e0a,\u4f60\u653e\u5165\u7684\u6240\u6709\u7269\u54c1\u8d85\u51fa\u6700\u5927\u50a8\u91cf\u7684\u7269\u54c1\u90fd\u5c06\u81ea\u52a8\u9500\u6bc1! \u4e0e\u62bd\u5c49\u7ba1\u7406\u5668\u7ed3\u5408\u4f7f\u7528\u6548\u679c\u66f4\u4f73.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJbg==",
                    "title": "\u00a76\u00a7l\u7269\u54c1\u592a\u591a? \u4e0d\u5b58\u5728\u7684!",
                    "tooltip": "<strong>\u7269\u54c1\u592a\u591a? \u4e0d\u5b58\u5728\u7684!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fdb\u9636\u5377\u677f\u673a"
                },
                {
                    "name": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1477.png",
                    "x": 732.0,
                    "y": 108.0,
                    "data": "\u4e3a\u4e86\u5236\u9020\u626b\u63cf\u4eea\u548c\u5730\u9707\u52d8\u63a2\u8005,\u4f60\u9700\u8981\u5f88\u591a\u7b2c\u516d\u79cd\u914d\u4ef6...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFxQ==",
                    "title": "\u00a76\u00a7lMV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6",
                    "tooltip": "<strong>MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "\u690d\u7269\u56e2\u5757",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/732.png",
                    "x": 252.0,
                    "y": 60.0,
                    "data": "\u5c06\u690d\u7269\u7403\u78e8\u788e\u6210\u4e3a\u690d\u7269\u56e2\u5757,\u4fbf\u4e8e\u8fdb\u4e00\u6b65\u7684\u52a0\u5de5. \u5728LV\u53caMV\u9636\u6bb5\u4f60\u6bcf\u6b21\u53ea\u80fd\u5f97\u5230\u4e00\u4e2a\u690d\u7269\u56e2\u5757,\u800c\u5728HV\u9636\u6bb5\u7531\u4e8e\u6709\u989d\u5916\u69fd\u4f4d,\u4f60\u53ef\u4ee5\u5f97\u5230\u4e24\u4e2a.IV\u7814\u78e8\u673a\u5219\u53ef\u4ee5\u7ed9\u4f60\u6700\u591a\u56db\u4e2a,\u989d\u5916\u4e24\u4e2a\u4ea7\u7269\u5206\u522b\u662f50\uff05\u53ca25\uff05\u51e0\u7387. \u4f46\u8fd9\u70b9\u589e\u4ea7\u4e0e\u6295\u5165\u7684\u7535\u529b\u6210\u672c\u4e0d\u6210\u6bd4\u4f8b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC3A==",
                    "title": "\u00a76\u00a7l\u690d\u7269\u56e2\u5757",
                    "tooltip": "<strong>\u690d\u7269\u56e2\u5757</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u7403"
                },
                {
                    "name": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #1",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/895.png",
                    "x": 780.0,
                    "y": 276.0,
                    "data": "\u5728MV\u9636\u6bb5\u4f60\u4e5f\u9700\u8981\u5f88\u591a\u8fd9\u4e2a\u4e1c\u897f.\u5982\u679c\u4f60\u60f3\u4ece\u7bb1\u5b50\u4e2d\u6216\u6876\u4e2d\u53d6\u51fa\u7269\u54c1\u90a3\u4e48\u4f60\u5c31\u9700\u8981\u7528\u5230\u5b83.\u6bd4LV\u7684\u66f4\u5feb,\u6709\u4e00\u5b9a\u7684\u5b9e\u7528\u6027.</br></br>\u00a74\u63d0\u793a:\u7528\u4e00\u4e9bGT\u7269\u54c1\u7ba1\u9053\u6216\u673a\u5668\u8fde\u63a5\u5b83,\u7528\u87ba\u4e1d\u5200\u53f3\u51fb\u5b83\u53ef\u4ee5\u6539\u53d8\u5b83\u7684\u5de5\u4f5c\u6a21\u5f0f.\u5f53\u7136,\u73b0\u5728\u76f4\u63a5\u7a7a\u624bShift+\u53f3\u952e\u663e\u793aGUI\u66f4\u52a0\u65b9\u4fbf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADfw==",
                    "title": "\u00a76\u00a7lMV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #1",
                    "tooltip": "<strong>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/897.png",
                    "x": 864.0,
                    "y": 348.0,
                    "data": "\u5728MV\u9636\u6bb5\u4f60\u4f1a\u9700\u8981\u5927\u91cf\u7684\u673a\u68b0\u81c2,\u8fd9\u4e5f\u662f\u4e00\u4ef6\u5f88\u75db\u82e6\u7684\u5de5\u4f5c.\u53ef\u4ee5\u8bf4\u662f\u6709\u53f2\u4ee5\u6765\u6700\u75db\u82e6\u7684\u4e8b\u60c5(\u7b11).</br></br>\u00a74\u63d0\u793a:\u673a\u68b0\u81c2\u5c31\u50cf\u4e00\u4e2a\u4f20\u9001\u5e26,\u4f46\u662f\u5b83\u53ef\u4ee5\u7cbe\u786e\u7684\u4ece\u5bb9\u5668\u4e2d\u63d0\u53d6\u67d0\u4e00\u4e2a\u69fd\u4f4d\u7684\u7269\u54c1.\u7528\u87ba\u4e1d\u5200\u53f3\u51fb\u6765\u8c03\u6574\u673a\u68b0\u81c2\u5bf9\u5e94\u7684\u69fd\u4f4d.\u5f53\u7136,\u73b0\u5728\u76f4\u63a5\u7a7a\u624bShift+\u53f3\u952e\u663e\u793aGUI\u66f4\u52a0\u65b9\u4fbf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADgQ==",
                    "title": "\u00a76\u00a7lMV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4",
                    "tooltip": "<strong>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3"
                },
                {
                    "name": "\u7384\u94a2\u5de5\u5177",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/140.png",
                    "x": 792.0,
                    "y": 84.0,
                    "data": "\u8fd8\u6709\u7384\u94a2\u5236\u6210\u7684\u5de5\u5177.\u5b83\u4eec\u90fd\u53ef\u4ee5\u63a5\u53d7\u5347\u7ea7.\u6309\u4f4fshift\u4ee5\u83b7\u5f97\u5de5\u5177\u63d0\u793a,\u5b83\u4f1a\u89e3\u91ca\u4f60\u9700\u8981\u7528\u4ec0\u4e48\u6750\u6599\u6765\u7ed9\u5de5\u5177\u5347\u7ea7.</br></br>\u8fd9\u4e9b\u5de5\u5177\u8fd8\u53ef\u4ee5\u50cf\u539f\u7248\u5de5\u5177\u4e00\u6837\u83b7\u5f97\u9644\u9b54. \u7ec8\u7ed3\u4e4b\u5251\u53ef\u4ee5\u63d0\u5347\u51cb\u7075\u9ab7\u9ac5\u5934\u4e0e\u672b\u5f71\u73cd\u73e0\u7684\u6389\u843d\u51e0\u7387.\u5b83\u8fd8\u53ef\u4ee5\u88ab\u5347\u7ea7,\u80fd\u591f\u4f20\u9001\u73a9\u5bb6.</br></br>\u7384\u94a2\u526a\u53ef\u4ee5\u88ab\u6ce8\u80fd,\u53ef\u4ee5\u4e00\u6b21\u526a\u4e0b5x5x3\u7684\u8303\u56f4(\u5305\u62ec\u6811\u53f6).\u7528\u5b83\u6765\u6e05\u7406\u5de8\u5927\u7684\u7ea2\u6728\u5427!\u53ef\u80fd\u4f60\u8fd8\u80fd\u627e\u5230\u5b83\u522b\u7684\u7528\u9014.</br></br>\u7384\u94a2\u65a7,\u4e00\u65e6\u88ab\u6ce8\u80fd,\u653e\u5165\u79cd\u690d\u7ad9\u7684\u7384\u94a2\u65a7\u53ef\u4ee5\u88ab\u65e0\u7ebf\u5145\u80fd.</br></br>\u7384\u94a2\u9550?\u597d\u5427,\u5b83\u80fd\u5f00\u91c7\u94b4,\u8981\u662f\u4f60\u8fd8\u6ca1\u6709\u522b\u7684\u80fd\u5f00\u91c7\u94b4\u7684\u9550\u5b50\u7684\u8bdd.\u8981\u662f\u4f60\u7684\u65e5\u5e38\u5f00\u91c7\u9550\u6bd4\u8fd9\u4e2a\u597d\u7684\u8bdd,\u7384\u94a2\u9550\u8fd8\u53ef\u4ee5\u7528\u6765\u4f5c\u4e3a\u88c5\u9970\u7269...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAjA==",
                    "title": "\u00a76\u00a7l\u7384\u94a2\u5de5\u5177",
                    "tooltip": "<strong>\u7384\u94a2\u5de5\u5177</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)"
                },
                {
                    "name": "MV\u9a6c\u8fbe",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1867.png",
                    "x": 696.0,
                    "y": 180.0,
                    "data": "\u5927\u90e8\u5206\u4e2d\u538b\u673a\u5668\u90fd\u9700\u8981MV\u9a6c\u8fbe.\u5982\u679c\u4f60\u8fd8\u6ca1\u9020\u4e24\u6781\u78c1\u5316\u673a\u7684\u8bdd,\u56de\u5230LV\u9636\u6bb5\u627e\u5230\u5408\u6210\u5b83\u7684\u4efb\u52a1\u5427. MV\u9a6c\u8fbe\u9700\u8981\u78c1\u5316\u94a2\u6746\u548c\u94dd\u6746,2x\u767d\u94dc\u5bfc\u7ebf\u548c\u94dc\u7ebf\u7f06.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHSw==",
                    "title": "\u00a76\u00a7lMV\u9a6c\u8fbe",
                    "tooltip": "<strong>MV\u9a6c\u8fbe</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u4f60\u51c6\u5907\u597d\u8fc8\u5411HV\u4e86\u5417\uff1f",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/749.png",
                    "x": 72.0,
                    "y": 348.0,
                    "data": "\u4e0d\u9508\u94a2\u4f1a\u662fHV\u9636\u6bb5\u7684\u4e3b\u8981\u539f\u6750\u6599.\u4f60\u9700\u8981\u4e00\u53f0MV\u6405\u62cc\u673a\u6765\u5236\u4f5c\u4e0d\u9508\u94a2\u7c89.</br></br>\u9530:\u9530\u94dd\u69b4\u77f3\u3001\u8f6f\u9530\u77ff\u548c\u94bd\u94c1\u77ff\u7684\u5904\u7406\u526f\u4ea7\u7269;\u76f4\u63a5\u7535\u89e3\u8fd8\u53ef\u4ee5\u83b7\u53d6\u66f4\u591a.\u53e6\u4e00\u79cd\u6765\u6e90\u662f\u4ece\u77f3\u69b4\u77f3\u77ff\u7802\u6216\u662f\u94c1\u94dd\u69b4\u77f3\u4e2d\u83b7\u5f97\u77f3\u69b4\u77f3\u7c89.\u5982\u679c\u4f60\u5b9e\u5728\u627e\u4e0d\u5230\u7684\u8bdd,\u53ef\u4ee5\u5728\u786c\u5e01\u4efb\u52a1\u680f\u4e70\u70b9\u77ff\u77f3.</br></br>\u94ec:\u53ef\u4ee5\u4ece\u7ea2\u5b9d\u77f3\u7c89\u4e2d\u79bb\u5fc3\u51fa\u6765.\u5982\u679c\u7ea2\u77f3\u77ff\u8109\u4f34\u751f\u7684\u7ea2\u5b9d\u77f3\u4e0d\u591f\u591a\u7684\u8bdd,\u53ef\u4ee5\u79bb\u5fc3\u7ea2\u77f3\u4f5c\u4e3a\u8865\u5145.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC7Q==",
                    "title": "\u00a76\u00a7l\u4f60\u51c6\u5907\u597d\u8fc8\u5411HV\u4e86\u5417\uff1f",
                    "tooltip": "<strong>\u4f60\u51c6\u5907\u597d\u8fc8\u5411HV\u4e86\u5417\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u7684\u6405\u62cc"
                },
                {
                    "name": "\u7535\u89e3\u7ea2\u5b9d\u77f3",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/757.png",
                    "x": 348.0,
                    "y": 288.0,
                    "data": "\u7535\u89e3\u7ea2\u5b9d\u77f3\u53ef\u4ee5\u83b7\u53d6\u94ec\u548c\u4e00\u70b9\u70b9\u94dd.\u8981\u662f\u4f60\u611f\u89c9\u7ea2\u5b9d\u77f3\u4e0d\u592a\u591f,\u53ef\u4ee5\u79bb\u5fc3\u7ea2\u77f3.</br></br>\u94dd\u548c\u6c27\u7684\u53e6\u4e00\u4e2a\u4f18\u79c0\u6765\u6e90\u662f\u7ea2\u8272\u82b1\u5c97\u5ca9\u7c89.\u4f60\u53ef\u4ee5\u4ece\"\u6355\u9c7c,\u519c\u4e1a,\u70f9\u996a\"\u4efb\u52a1\u680f\u4e2d\u7684IC2\u4f5c\u7269\u7ea2\u77f3\u82af\u8349(red-stonelillies)\u4e2d\u83b7\u5f97\u8fd9\u4e9b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC9Q==",
                    "title": "\u00a76\u00a7f\u00a76\u00a7l\u7535\u89e3\u7ea2\u5b9d\u77f3",
                    "tooltip": "<strong>\u7535\u89e3\u7ea2\u5b9d\u77f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u89e3\u4e07\u7269"
                },
                {
                    "name": "\u4e09\u6c2f\u7845\u70f7 \u7eed",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1492.png",
                    "x": 468.0,
                    "y": 444.0,
                    "data": "\u5728\u7b2c\u4e8c\u4e2a\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\uff0c\u518d\u6b21\u901a\u5165\u6c22\u6c14\u5c31\u53ef\u4ee5\u83b7\u5f97\u7eaf\u5316\u7684\u592a\u9633\u80fd\u7ea7\u7845.\u4f60\u8fd8\u53ef\u4ee5\u62ff\u56de\u6240\u6709\u7684\u6c22\u6c2f\u9178.</br></br>\u4e5f\u8bb8\u4f60\u53ef\u4ee5\u81ea\u52a8\u5316\u8fd9\u4e2a\u8fc7\u7a0b?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF1A==",
                    "title": "\u00a76\u00a7l\u4e09\u6c2f\u7845\u70f7 \u7eed",
                    "tooltip": "<strong>\u4e09\u6c2f\u7845\u70f7 \u7eed</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e09\u6c2f\u7845\u70f7"
                },
                {
                    "name": "\u6676\u4f53\u7ba11",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/785.png",
                    "x": 516.0,
                    "y": 636.0,
                    "data": "\u4e3a\u4e86\u8fdb\u5165\u4e0b\u4e00\u4e2a\u9636\u6bb5,\u6211\u4eec\u9700\u8981\u9ad8\u7ea7\u7535\u8def\u677f. \u800c\u4e3a\u4e86\u5236\u9020\u9ad8\u7ea7\u7535\u8def\u677f,\u4f60\u9700\u8981\u4e00\u4e9b\u6676\u4f53\u7ba1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADEQ==",
                    "title": "\u00a76\u00a7l\u6676\u4f53\u7ba1",
                    "tooltip": "<strong>\u6676\u4f53\u7ba11</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u677f"
                },
                {
                    "name": "\u8fdb\u9636\u6d41\u4f53\u63d0\u53d6\u673a",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1324.png",
                    "x": 156.0,
                    "y": 300.0,
                    "data": "MV\u6d41\u4f53\u63d0\u53d6\u673a\u6bd4LV\u6d41\u4f53\u63d0\u53d6\u673a\u5de5\u4f5c\u901f\u5ea6\u5feb2\u500d,\u7535\u529b\u6d88\u8017\u9ad84\u500d. </br></br>\u751f\u7269\u67f4\u6cb9\u7684\u539f\u6599\u9700\u8981\u79cd\u5b50\u6cb9\u6216\u9c7c\u6cb9. \u987e\u540d\u601d\u4e49,\u79cd\u5b50\u51fa\u4ea7\u79cd\u5b50\u6cb9,\u9c7c\u51fa\u4ea7\u9c7c\u6cb9,\u9700\u8981\u7684\u5c31\u662f\u6d41\u4f53\u63d0\u53d6\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFLA==",
                    "title": "\u00a76\u00a7l\u8fdb\u9636\u6d41\u4f53\u63d0\u53d6\u673a",
                    "tooltip": "<strong>\u8fdb\u9636\u6d41\u4f53\u63d0\u53d6\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u6211\u9700\u8981\u6765\u4e00\u676f.\u656c\u66f4\u591a\u7684\u94ec.",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2975.png",
                    "x": 276.0,
                    "y": 300.0,
                    "data": "\u5904\u7406\u7ea2\u5b9d\u77f3\u77ff\u77f3\u6700\u6709\u6548\u7684\u65b9\u6cd5,\u4f18\u4e8e\u7535\u89e3.</br></br>[note]\u8bb0\u5f97\u5728NEI\u4e2d\u67e5\u770b\u5904\u7406\u84dd\u5b9d\u77f3\u548c\u7eff\u8272\u84dd\u5b9d\u77f3\u7684\u7c7b\u4f3c\u5de5\u827a[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALnw==",
                    "title": "\u00a76\u00a7l\u6211\u9700\u8981\u6765\u4e00\u676f.\u656c\u66f4\u591a\u7684\u94ec.",
                    "tooltip": "<strong>\u6211\u9700\u8981\u6765\u4e00\u676f.\u656c\u66f4\u591a\u7684\u94ec.</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c22\u6c27\u5316\u94a01</br>\u8fdb\u9636\u79bb\u5fc3\u673a</br>MV\u9636\u6bb5\u7684\u6405\u62cc"
                },
                {
                    "name": "\u57fa\u7840\u7535\u5bb9\u5e93",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/604.png",
                    "x": 936.0,
                    "y": 84.0,
                    "data": "\u57fa\u7840\u7535\u5bb9\u5e93\u662f\u4e00\u79cdRF\u7535\u6c60,\u53ef\u4ee5\u5b58\u50a8RF\u80fd\u91cf. \u5c06\u591a\u4e2a\u7535\u5bb9\u5e93\u7ec4\u6210\u4e00\u4e2a\u66f4\u5927\u7684\u7ed3\u6784\u53ef\u4ee5\u5b58\u50a8\u66f4\u591a\u7684\u80fd\u91cf-\u5b83\u4eec\u5c06\u5408\u5e76\u6210\u4e00\u4e2a\u7535\u6c60.</br></br>\u5982\u679c\u4e0d\u60f3\u7528GUI\u7684\u8bdd,\u4f60\u8fd8\u53ef\u4ee5\u7528\u526a\u7ebf\u94b3\u6216\u4ee5\u592a\u6273\u624b\u4fee\u6539\u7535\u5bb9\u5e93\u4efb\u610f\u9762\u7684\u6a21\u5f0f.\u5176\u4e2d\u4e00\u4e2a\u6a21\u5f0f\u53ef\u4ee5\u663e\u793a\u8f93\u5165/\u8f93\u51fa\u7684RF,\u4f46\u8fd9\u4e2a\u6a21\u5f0f\u8981\u6c42\u7535\u5bb9\u5e93\u9ad8\u5bbd\u6bd4\u8981\u9ad8\u4e00\u70b9.(1:1\u65f6\u53ef\u80fd\u663e\u793a\u4e0d\u5b8c\u5168)</br></br>\u7535\u5bb9\u5e93\u975e\u5e38\u9002\u5408\u4e0eRF\u673a\u5668\u8fde\u63a5.\u867d\u7136GT\u7535\u7ebf\u53ef\u4ee5\u5c06EU\u8f6c\u5316\u4e3aRF,\u4f46GT\u7535\u7ebf\u8f93\u7535\u4e3a\u6bcfA\u6574\u5305\u8f93\u9001. EIO\u7684\u673a\u5668\u53ef\u4ee5\u6070\u5230\u597d\u5904\u5730\u63a5\u6536\u80fd\u91cf,\u4f46\u57fa\u56e0\u5de5\u4e1a\u7684\u673a\u5668\u5374\u505a\u4e0d\u5230,\u4f1a\u6d6a\u8d39\u4e00\u5305\u4e2d\u7684\u5927\u90e8\u5206\u7535\u529b,\u6240\u4ee5\u9047\u4e0a\u975eEIO\u673a\u5668\u9700\u8981\u7528\u5230RF,\u5c31\u7528\u7535\u5bb9\u5e93\u6765\u8f6c\u6362\u4e00\u4e0b\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACXA==",
                    "title": "\u00a76\u00a7l\u57fa\u7840\u7535\u5bb9\u5e93",
                    "tooltip": "<strong>\u57fa\u7840\u7535\u5bb9\u5e93</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u673a\u5668\u6846\u67b6"
                },
                {
                    "name": "\u5316\u5b66\u8bfe,\u7b2c\u4e8c\u90e8\u5206",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1744.png",
                    "x": 564.0,
                    "y": 264.0,
                    "data": "\u66f4\u9ad8\u7ea7\u7684\u914d\u65b9\u5982\u805a\u4e59\u70ef\u9700\u8981MV\u5316\u5b66\u53cd\u5e94\u91dc.\u800c\u5904\u7406LV\u914d\u65b9\u901f\u5ea6\u53d8\u4e3a\u539f\u6765\u7684\u4e24\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG0A==",
                    "title": "\u00a76\u00a7l\u5316\u5b66\u8bfe,\u7b2c\u4e8c\u90e8\u5206",
                    "tooltip": "<strong>\u5316\u5b66\u8bfe,\u7b2c\u4e8c\u90e8\u5206</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u7535\u89e3\u4e07\u7269",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/126.png",
                    "x": 444.0,
                    "y": 276.0,
                    "data": "\u81ea\u4ece\u5f00\u59cb\u78e8\u7c89,\u6d17\u77ff\u548c\u79bb\u5fc3\u77ff\u77f3\u540e,\u4f60\u6536\u96c6\u4e86\u5f88\u591a\u7c89\u672b,\u4f46\u5565\u4e5f\u5e72\u4e0d\u4e86. \u73b0\u5728\u662f\u65f6\u5019\u4ece\u8fd9\u4e9b\u7c89\u672b\u4e2d\u83b7\u53d6\u6709\u7528\u7684\u6750\u6599\u4e86.</br></br>\u8fd9\u53f0\u673a\u5668\u5728\u4f60\u7684MV\u9636\u6bb5\u00a7o\u975e\u5e38\u00a7o\u00a7r\u91cd\u8981.\u5982\u679c\u4f60\u627e\u5230\u4e86\u4e00\u4e2a\u542b\u6709\u6210\u5343\u4e0a\u4e07\u7c98\u571f\u7684\u751f\u7269\u7fa4\u7cfb,\u4f60\u53ef\u4ee5\u7528\u8fd9\u53f0\u673a\u5668\u914d\u5408\u4e00\u4e9b\u5176\u4ed6\u673a\u5668\u628a\u7c98\u571f\u8fdb\u884c\u5904\u7406\u6210\u94a0,\u9502,\u7845,\u94dd\u548c\u6c27!</br></br>\u8bd1\u8005\u6ce8:\u683c\u96f7\u7684\u7535\u89e3\u673a\u4e00\u70b9\u90fd\u4e0d\u7535\u89e3!\u8fd9\u5206\u660e\u662f\u539f\u5b50\u5265\u79bb\u673a...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAfg==",
                    "title": "\u00a76\u00a7l\u7535\u89e3\u4e07\u7269",
                    "tooltip": "<strong>\u7535\u89e3\u4e07\u7269</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u51b7\u5374\u6db2",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3073.png",
                    "x": 264.0,
                    "y": 636.0,
                    "data": "\u4f7f\u7528MV\u6405\u62cc\u673a,\u6df7\u5408\u6c34/\u84b8\u998f\u6c34\u4e0e\u9752\u91d1\u77f3\u7c89,\u5236\u9020\u4f60\u7684\u7b2c\u4e00\u6876\u51b7\u5374\u6db2\u5427.</br></br>\u4f7f\u7528\u84b8\u998f\u6c34\u53ef\u4ee5\u8282\u7701\u9752\u91d1\u77f3\u7c89,\u540c\u65f6\u5927\u5e45\u63d0\u5347\u5904\u7406\u901f\u5ea6.</br></br>[warn]\u8981\u662f\u4f60\u4e0d\u60f3\u7528\u84b8\u998f\u6c34, \u4f60\u5c31\u5f97\u7528\u591a\u5f97\u591a\u7684\u9752\u91d1\u77f3\u7c89. [/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMAQ==",
                    "title": "\u00a76\u00a7l\u51b7\u5374\u6db2",
                    "tooltip": "<strong>\u51b7\u5374\u6db2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u7684\u6405\u62cc</br>\u51b7\u5374\u574e\u5854\u5c14\u5408\u91d1"
                },
                {
                    "name": "\u8fdb\u9636\u79bb\u5fc3\u673a",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1322.png",
                    "x": 348.0,
                    "y": 156.0,
                    "data": "MV\u79bb\u5fc3\u673a\u6bd4LV\u79bb\u5fc3\u673a\u5de5\u4f5c\u901f\u5ea6\u5feb2\u500d,\u7535\u529b\u6d88\u8017\u9ad84\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFKg==",
                    "title": "\u00a76\u00a7l\u8fdb\u9636\u79bb\u5fc3\u673a",
                    "tooltip": "<strong>\u8fdb\u9636\u79bb\u5fc3\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u917f\u9020\u6db2\u4f53",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/142.png",
                    "x": 1080.0,
                    "y": 228.0,
                    "data": "\u8fd9\u79cd\u673a\u5668\u4e0d\u4ec5\u80fd\u591f\u917f\u9020\u66f4\u5f3a\u5927\u7684\u53ef\u71c3\u6db2\u4f53,\u8fd8\u53ef\u7528\u4e8e\u917f\u9020\u8425\u517b\u7cbe\u534e\u6db2,\u53ef\u80fd\u5f88\u5feb\u2122\u5c31\u6709\u7528\u4e86.</br></br>\u914d\u65b9\u6709\u8bb8\u591a\u53ef\u9009\u7269\u54c1,\u8bf7\u6ce8\u610f,\u4e0d\u540c\u7269\u54c1\u7684\u4ea7\u7387\u4e0d\u540c. \u8bf7\u6839\u636e\u81ea\u5df1\u7684\u60c5\u51b5\u81ea\u884c\u9009\u62e9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAjg==",
                    "title": "\u00a76\u00a7l\u917f\u9020\u6db2\u4f53",
                    "tooltip": "<strong>\u917f\u9020\u6db2\u4f53</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u6613RF\u80fd\u6e90:\u6db2\u4f53"
                },
                {
                    "name": "MV\u81ea\u52a8\u91c7\u77ff\u673a",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/931.png",
                    "x": 852.0,
                    "y": 228.0,
                    "data": "MV\u91c7\u77ff\u673a\u540c\u6837\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6316\u51fa\u5730\u4e0b\u7684\u77ff\u77f3,\u800c\u4e14\u505a\u5f97\u66f4\u597d. \u540c\u6837,\u5728\u673a\u5668\u7684GUI\u7684\u5de6\u4fa7\u653e\u7f6e\u4e24\u7ec4\u6316\u77ff\u7ba1\u9053. MV\u91c7\u77ff\u673a\u9700\u898132EU/t\u7684\u4f9b\u80fd\u624d\u80fd\u5de5\u4f5c.\u5b83\u53ef\u4ee5\u5728\u4ee5\u81ea\u5df1\u4e3a\u4e2d\u5fc333x33\u683c\u7684\u8303\u56f4\u5185\u641c\u7d22\u77ff\u77f3(\u53ef\u7528\u87ba\u4e1d\u5200\u8c03\u6574\u8303\u56f4),\u5e76\u4e14\u53ef\u4ee5\u6bd4LV\u7ea7\u522b\u7684\u91c7\u77ff\u673a\u901f\u5ea6\u5feb\u4e0a2\u500d.\u8fd8\u6709\u589e\u4ea72\u7684\u5956\u52b1!\u5bf9\u8d2b\u7620\u77ff\u5c24\u5176\u6709\u6548...</br></br>\u522b\u5fd8\u4e86\u906e\u96e8!\u8fd9\u4e9b\u77ff\u673a\u548c\u53d1\u7535\u673a\u90fd\u662fGT\u673a\u5668,\u6240\u4ee5\u522b\u5fd8\u4e86\u9632\u96e8.\u7136\u540e\u5728\u65c5\u884c\u5730\u56fe\u4e0a\u6807\u8bb0\u597d\u4f4d\u7f6e,\u8fd9\u6837\u4f60\u5c31\u518d\u4e5f\u4e0d\u4f1a\u5fd8\u8bb0\u81ea\u5df1\u628a\u77ff\u673a\u653e\u54ea\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADow==",
                    "title": "\u00a76\u00a7lMV\u81ea\u52a8\u91c7\u77ff\u673a",
                    "tooltip": "<strong>MV\u81ea\u52a8\u91c7\u77ff\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3</br>MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6"
                },
                {
                    "name": "\u8fdb\u9636\u538b\u7f29\u673a",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1320.png",
                    "x": 480.0,
                    "y": 108.0,
                    "data": "MV\u538b\u7f29\u673a\u6bd4LV\u538b\u7f29\u673a\u5de5\u4f5c\u901f\u5ea6\u5feb2\u500d,\u7535\u529b\u6d88\u8017\u9ad84\u500d. \u8fd9\u53ef\u80fd\u662f\u4e2a\u597d\u4e3b\u610f,\u4f46\u4e5f\u6709\u53ef\u80fd\u00a74\u4e0d\u662f\u00a7r. \u4e3a\u4ec0\u4e48\u5462?4\u500d\u7684\u529f\u7387\u610f\u5473\u7740\u53cc\u500d\u7684\u6d88\u8017,\u53ea\u662f\u66f4\u5feb\u4e00\u4e9b. \u6709\u4e9b\u60c5\u51b5\u4e0b,\u8fc7\u9ad8\u7684\u8d85\u9891\u53ef\u80fd\u4f1a\u5f97\u4e0d\u507f\u5931(\u6bd4\u5982\u71c3\u6599\u751f\u4ea7\u7ebf). \u8bbd\u523a\u5427,\u6211\u77e5\u9053,\u4f60\u53ef\u4ee5\u7528\u591a\u4e2a\u673a\u5668,\u7a0d\u540e\u8fd8\u6709\u5904\u7406\u9635\u5217\u6216\u76f8\u5e94\u591a\u65b9\u5757\u673a\u5668.</br></br>\u5f53\u7136,\u5982\u679c\u662f\u5176\u4ed6\u52a0\u5de5\u8fc7\u7a0b,\u8fd9\u79cd\u8d85\u9891\u5e26\u6765\u7684\u63d0\u901f\u53ef\u80fd\u662f\u00a7o\u503c\u5f97\u7684\u00a7r.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFKA==",
                    "title": "\u00a76\u00a7l\u8fdb\u9636\u538b\u7f29\u673a",
                    "tooltip": "<strong>\u8fdb\u9636\u538b\u7f29\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u805a\u6c2f\u4e59\u70ef\u7247",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1874.png",
                    "x": 612.0,
                    "y": 228.0,
                    "data": "\u805a\u6c2f\u4e59\u70ef\u7247\u53ef\u7528\u4e8e\u5408\u6210\u4e0d\u9519\u7684PVC\u7269\u54c1\u7ba1\u9053,\u4e5f\u80fd\u7528\u4e8e\u5236\u9020\u8d34\u7247\u5143\u4ef6(\u5236\u6210\u7b94)\u3001\u5851\u6599\u7535\u8def\u57fa\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHUg==",
                    "title": "\u00a76\u00a7l\u805a\u6c2f\u4e59\u70ef\u7247",
                    "tooltip": "<strong>\u805a\u6c2f\u4e59\u70ef\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u805a\u6c2f\u4e59\u70ef"
                },
                {
                    "name": "\u66f4\u597d\u7684\u84b8\u998f\u5ba4",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3069.png",
                    "x": 108.0,
                    "y": 156.0,
                    "data": "\u60f3\u8981\u66f4\u5feb\u5730\u751f\u4ea7\u7532\u9187\u548c\u4e59\u9187,\u5236\u9020\u4e00\u53f0MV\u84b8\u998f\u5ba4\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAL_Q==",
                    "title": "\u00a76\u00a7l\u66f4\u597d\u7684\u84b8\u998f\u5ba4",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u84b8\u998f\u5ba4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53d1\u9175\u751f\u7269\u8d281"
                },
                {
                    "name": "GT\u50a8\u7f50,HV\u7248",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/894.png",
                    "x": 648.0,
                    "y": 252.0,
                    "data": "\u9ad8\u538b\u6d41\u4f53\u50a8\u7f50\u53ef\u4ee5\u50a8\u5b58256\u6876,\u6216\u8005\u8bf4256000L\u6d41\u4f53. \u5236\u4f5c\u5b83\u9700\u8981\u94dd\u677f\u3001\u7384\u94a2\u677f\u3001\u771f\u7a7a\u7ba1\u3001MV\u7ea7\u7535\u52a8\u6cf5\u548c\u4e00\u4e2a\u94a2\u6d41\u4f53\u7ba1\u9053.\u8fd9\u4e2a\u9020\u4ef7\u4e5f\u5f88\u4ee4\u4eba\u5934\u75bc,\u6240\u4ee5\u975e\u5fc5\u8981\u7684\u60c5\u51b5\u4e0b,\u4e0d\u5efa\u8bae\u5236\u9020\u5b83. \u8fd9\u662f\u50a8\u7f50\u7684\u6700\u9ad8\u7248\u672c,\u63a5\u4e0b\u6765,\u5b83\u5c06\u88ab\u8d85\u7ea7\u7f38\u66ff\u4ee3. \u5b9e\u9645\u4e0a\u4f60\u73b0\u5728\u5c31\u80fd\u5236\u9020\u8d85\u7ea7\u7f38\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADfg==",
                    "title": "\u00a76\u00a7lGT\u50a8\u7f50,HV\u7248",
                    "tooltip": "<strong>GT\u50a8\u7f50,HV\u7248</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2"
                },
                {
                    "name": "\u8fdb\u9636\u7814\u78e8\u673a",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1321.png",
                    "x": 444.0,
                    "y": 108.0,
                    "data": "MV\u7814\u78e8\u673a\u6bd4LV\u7814\u78e8\u673a\u5de5\u4f5c\u901f\u5ea6\u5feb2\u500d,\u7535\u529b\u6d88\u8017\u9ad84\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFKQ==",
                    "title": "\u00a76\u00a7l\u8fdb\u9636\u7814\u78e8\u673a",
                    "tooltip": "<strong>\u8fdb\u9636\u7814\u78e8\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ULV)1x1",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/935.png",
                    "x": 276.0,
                    "y": 336.0,
                    "data": "\u628a\u4e00\u5757\u57fa\u7840\u592a\u9633\u80fd\u677f\u548c\u4e00\u4e2aULV\u673a\u5668\u65b9\u5757\u653e\u5165MV\u7ea7\u522b\u7684\u7ec4\u88c5\u673a\u4e2d,\u7ec4\u88c5\u673a\u5c06\u4f1a\u628a\u5b83\u4eec\u7ec4\u88c5\u4e3a\u4e00\u4e2aULV\u7b49\u7ea7\u7684\u592a\u9633\u80fd\u53d1\u7535\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADpw==",
                    "title": "\u00a76\u00a7l\u592a\u9633\u4e4b\u529b(ULV)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(ULV)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u80fd"
                },
                {
                    "name": "\u4e00\u4e2a\u7075\u9b42\u7684\u5bb9\u5668",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/168.png",
                    "x": 840.0,
                    "y": 516.0,
                    "data": "\u7a0d\u540e\u7684HV\u9636\u6bb5EIO\u673a\u5668\u4f1a\u7528\u5230\u7075\u9b42\u74f6.\u800c\u73b0\u5728,\u4f60\u53d1\u73b0\u4f7f\u7528\u7075\u9b42\u74f6\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5c06\u90a3\u4e9b\u53ef\u6015\u7684\u602a\u7269\u5b89\u6392\u5f97\u660e\u660e\u767d\u767d...\u7075\u9b42\u74f6\u662f\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u5bb9\u5668.\u53ea\u8981\u53f3\u952e\u70b9\u51fb\u4efb\u4f55\u6d3b\u7684\u5b9e\u4f53\u5c31\u80fd\u7a83\u53d6\u5b83\u7684\u7075\u9b42.\u518d\u6b21\u53f3\u952e\u53ef\u4ee5\u5c06\u5176\u91cd\u65b0\u91ca\u653e\u51fa\u6765.</br></br>\u73b0\u5728\u4f60\u6709\u4e00\u4e2a\u5927\u80c6\u7684\u60f3\u6cd5...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAqA==",
                    "title": "\u00a76\u00a7l\u4e00\u4e2a\u7075\u9b42\u7684\u5bb9\u5668",
                    "tooltip": "<strong>\u4e00\u4e2a\u7075\u9b42\u7684\u5bb9\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u65b0\u7684\u5408\u91d1-\u9b42\u91d1"
                },
                {
                    "name": "\u8fdb\u9636\u5377\u677f\u673a",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1081.png",
                    "x": 948.0,
                    "y": 276.0,
                    "data": "\u6709\u4e86\u8fdb\u9636\u5377\u677f\u673a,\u4f60\u53ef\u4ee5\u76f4\u63a5\u5236\u4f5c\u53cc\u91cd\u3001\u4e09\u91cd\u6216\u662f\u66f4\u591a\u5c42\u7684\u91d1\u5c5e\u677f,\u8fd9\u662f\u4f60\u5236\u4f5cHV\u9636\u6bb5\u7684\u7b2c\u4e00\u679a\u706b\u7bad\u6240\u5fc5\u9700\u7684. </br></br>\u4e5f\u53ef\u4ee5\u5236\u4f5c\u81f4\u5bc6\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEOQ==",
                    "title": "\u00a76\u00a7l\u8fdb\u9636\u5377\u677f\u673a",
                    "tooltip": "<strong>\u8fdb\u9636\u5377\u677f\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3"
                },
                {
                    "name": "MV\u7ea7\u80fd\u6e90\u4ed3",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/754.png",
                    "x": 192.0,
                    "y": 492.0,
                    "data": "\u6709\u4e9b\u539f\u6599\u5982\u4e0d\u9508\u94a2,\u9700\u8981480EU/t.\u4f60\u7684LV\u7ea7\u80fd\u6e90\u4ed3\u5df2\u7ecf\u4e0d\u6577\u4f7f\u7528.\u5236\u9020\u81f3\u5c11\u4e24\u4e2aMV\u7ea7\u80fd\u6e90\u4ed3,\u6765\u5c06\u4f60\u7684\u5de5\u4e1a\u9ad8\u7089\u5347\u7ea7\u5230HV.</br>\u5982\u679c\u4f60\u6ca1\u6709\u6240\u9700\u7684\u8d85\u4f4e\u529f\u7387IC,\u5148\u505a\u70b9\u6676\u5706\u5427.</br></br>[note]\u987a\u4fbf\u4e00\u63d0,\u5982\u679c\u591a\u65b9\u5757\u7684\u914d\u65b9\u54ea\u6015\u53ea\u8d85\u8fc7\u4e86\u67d0\u4e2a\u7535\u538b\u7b49\u7ea71A\u529f\u73871EU,\u4f60\u4e5f\u5fc5\u987b\u4f7f\u7528\u7b2c\u4e8c\u4e2a\u80fd\u6e90\u4ed3\u4e3a\u5176\u4f9b\u80fd.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC8g==",
                    "title": "\u00a76\u00a7lMV\u7ea7\u80fd\u6e90\u4ed3",
                    "tooltip": "<strong>MV\u7ea7\u80fd\u6e90\u4ed3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6da6\u6ed1\u6cb92</br>\u8d85\u4f4e\u529f\u7387IC</br>\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3"
                },
                {
                    "name": "\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1598.png",
                    "x": 864.0,
                    "y": 420.0,
                    "data": "\u662f\u65f6\u5019\u5236\u9020\u7ec4\u88c5\u673a\u7684MV\u7248\u672c\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGPg==",
                    "title": "\u00a76\u00a7l\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!",
                    "tooltip": "<strong>\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #1"
                },
                {
                    "name": "\u8fdb\u9636\u9505\u7089[MV]",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1898.png",
                    "x": 144.0,
                    "y": 444.0,
                    "data": "GT++\u7684\u8fdb\u9636\u9505\u7089[MV],\u76f8\u5bf9LV\u7248\u672c,\u53ef\u4ee5\u66f4\u9ad8\u6548\u5730\u4ea7\u751f\u84b8\u6c7d.\u9664\u975e\u542f\u52a8\u65f6\u5c31\u84b8\u6c7d\u4e0d\u8db3,\u5426\u5219\u5b83\u4e0d\u4f1a\u8017\u5c3d\u71c3\u6599,\u6240\u4ee5\u5b83\u975e\u5e38\u9ad8\u6548.</br></br>\u8bd1\u8005\u6ce8:\u9664\u6b64\u4e4b\u5916,\u5f53\u6e29\u5ea6\u9ad8\u4e8e\u4e00\u5b9a\u7a0b\u5ea6\u65f6\u5c31\u4f1a\u81ea\u52a8\u505c\u6b62\u6d88\u8017\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHag==",
                    "title": "\u00a75\u00a7l\u00a76\u00a7l\u8fdb\u9636\u9505\u7089[MV]",
                    "tooltip": "<strong>\u8fdb\u9636\u9505\u7089[MV]</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089"
                },
                {
                    "name": "\u7194\u70bc\u5408\u91d1(alloy)(\u7194\u70bc\u6240\u6709\u4e50\u8da3(all-joy))",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/143.png",
                    "x": 984.0,
                    "y": 180.0,
                    "data": "\u8fd9\u79cd\u5408\u91d1\u7089\u53ef\u4ee5\u5e2e\u4f60\u751f\u4ea7\u5404\u79cd\u77f3\u82f1\u73bb\u7483\u548c\u7eaf\u51c0\u73bb\u7483.</br></br>\u4f46\u662f\u5b83\u00a7o\u4e0d\u80fd\u00a7r\u5236\u9020EIO\u7684\u5404\u79cd\u5408\u91d1,\u4f60\u9700\u8981\u6405\u62cc\u673a\u548c(\u53ef\u80fd)\u5de5\u4e1a\u9ad8\u7089\u624d\u80fd\u5236\u9020\u5b83\u4eec.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAjw==",
                    "title": "\u00a76\u00a7l\u7194\u70bc\u5408\u91d1(alloy)(\u7194\u70bc\u6240\u6709\u4e50\u8da3(all-joy))",
                    "tooltip": "<strong>\u7194\u70bc\u5408\u91d1(alloy)(\u7194\u70bc\u6240\u6709\u4e50\u8da3(all-joy))</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u673a\u5668\u6846\u67b6"
                },
                {
                    "name": "\u767e\u4e07\u5f52\u4e00",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1907.png",
                    "x": 972.0,
                    "y": 228.0,
                    "data": "\u8fd8\u662f\u56db\u767e\u4e07\u5f52\u4e00?\u60f3\u8981\u5b58\u50a8\u65e0\u7a77\u65e0\u5c3d\u7684\u5706\u77f3?\u77f3\u7c89?\u6811\u82d7?\u8d85\u7ea7\u7bb1\u6b63\u662f\u4f60\u6240\u9700\u8981\u7684\u4e1c\u897f.\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u8d85\u7ea7\u7bb1I\u5c31\u53ef\u4ee5\u5b58\u50a8\u56db\u767e\u4e07\u7269\u54c1,\u653e\u8f7b\u677e.\u4f60\u53ef\u4ee5\u4e00\u6b21\u624b\u52a8\u53d6\u51fa\u4e00\u7ec464\u4e2a\u7269\u54c1,\u6216\u662f\u4f7f\u7528\u4f20\u9001\u5e26\u4e4b\u7c7b\u7684\u5feb\u901f\u62bd\u53d6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHcw==",
                    "title": "\u00a76\u00a7l\u767e\u4e07\u5f52\u4e00",
                    "tooltip": "<strong>\u767e\u4e07\u5f52\u4e00</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fdb\u9636\u5377\u677f\u673a"
                },
                {
                    "name": "\u8fc7\u786b\u9178\u94a01",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1021.png",
                    "x": 696.0,
                    "y": 504.0,
                    "data": "\u8fc7\u786b\u9178\u94a0\u53ef\u4ee5\u901a\u8fc7\u7535\u89e3\u786b\u9178\u6c22\u94a0\u7c89\u672b\u83b7\u5f97. \u800c\u786b\u9178\u6c22\u94a0\u5219\u662f\u901a\u8fc7\u76d0\u548c\u786b\u9178\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u53cd\u5e94\u5f97\u5230. \u4f60\u53ef\u4ee5\u4f7f\u7528\u8fc7\u786b\u9178\u94a0\u6765\u8680\u523b\u7535\u8def\u677f,\u800c\u751f\u4ea7\u786b\u9178\u6c22\u94a0\u4ea7\u751f\u7684\u526f\u4ea7\u7269\u6c22\u6c2f\u9178\u5219\u53ef\u4ee5\u4f5c\u4e3a\u65e5\u540e\u751f\u4ea7\u73af\u6c27\u6811\u8102\u7684\u57fa\u7840\u539f\u6599\u4f7f\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD_Q==",
                    "title": "\u00a76\u00a7r\u00a76\u00a7k\u00a7r\u00a76\u00a7l\u8fc7\u786b\u9178\u94a0",
                    "tooltip": "<strong>\u8fc7\u786b\u9178\u94a01</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u878d\u5851\u6599"
                },
                {
                    "name": "\u6709\u673a\u4e4b\u9053",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/780.png",
                    "x": 252.0,
                    "y": 108.0,
                    "data": "\u751f\u7269\u78b3\u677f\u7531\u751f\u7269\u6709\u673a\u7f51\u5236\u6210.\u5c06\u751f\u78b3\u677f\u653e\u5165\u5de5\u4e1a\u9ad8\u7089\u6765\u5236\u9020\u78b3\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADDA==",
                    "title": "\u00a76\u00a7l\u6709\u673a\u4e4b\u9053",
                    "tooltip": "<strong>\u6709\u673a\u4e4b\u9053</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u751f\u7269\u6709\u673a\u7f51"
                },
                {
                    "name": "\u4e59\u9178",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/852.png",
                    "x": 528.0,
                    "y": 420.0,
                    "data": "\u4e59\u9178\u53ef\u4ee5\u7531\u6c27\u6c14\u548c\u4e59\u70ef\u5236\u6210.\u6216\u7531\u751f\u7269\u8d28\u3001\u6728\u918b\u9178\u6216\u918b\u5236\u6210.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADVA==",
                    "title": "\u00a76\u00a7l\u4e59\u9178",
                    "tooltip": "<strong>\u4e59\u9178</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>O\u4f3c\u4e4e\u662f\u6c27</br>\u4e59\u70ef"
                },
                {
                    "name": "\u53ea\u6709\u4e00\u4e2a\u4eba\u80fd\u6d3b\u4e0b\u6765...",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1643.png",
                    "x": 888.0,
                    "y": 36.0,
                    "data": "...\u6240\u4ee5\u780d\u6389\u5b83\u4eec\u7684\u8111\u888b\u5427. </br></br>\u7528\u4f60\u7684\u5de5\u5177\u4e3a\u81ea\u5df1\u953b\u9020\u4e00\u67c4\u5288\u5200\u5427,\u7136\u540e\u6536\u96c6\u4e00\u4e9b\u51cb\u7075\u9ab7\u9ac5\u5934. </br></br>[warn]\u5982\u679c\u4f60\u96be\u4ee5\u627e\u5230\u51cb\u7075\u9ab7\u9ac5,\u7b49\u4f60\u5230HV\u540e,\u5c31\u53ef\u4ee5\u5728\u4e0b\u754c\u653e\u7f6e\u4e00\u4e2a\u9ab7\u9ac5\u7535\u52a8\u5237\u602a\u7b3c.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGaw==",
                    "title": "\u00a76\u00a7l\u53ea\u6709\u4e00\u4e2a\u4eba\u80fd\u6d3b\u4e0b\u6765...",
                    "tooltip": "<strong>\u53ea\u6709\u4e00\u4e2a\u4eba\u80fd\u6d3b\u4e0b\u6765...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u56da\u7981\u4e00\u4e2a\u6076\u9b54\u2014\u2014\u2014\u2014\u51cb\u7075\u5c60\u5bb0\u573a"
                },
                {
                    "name": "\u70c8\u9152",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/150.png",
                    "x": 1080.0,
                    "y": 276.0,
                    "data": "\u6700\u4f4e\u7ea7\u7684,\u53ef\u518d\u751f\u7684\u53ef\u71c3\u6db2\u4f53.\u4ea7\u51fa60RF/t,\u4f46\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5316\u7684\"\u7eff\u8272\"\u80fd\u6e90.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAlg==",
                    "title": "\u00a76\u00a7l\u70c8\u9152",
                    "tooltip": "<strong>\u70c8\u9152</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u917f\u9020\u6db2\u4f53"
                },
                {
                    "name": "\u771f\u6b63\u7684\u7a00\u571f",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2409.png",
                    "x": 924.0,
                    "y": 432.0,
                    "data": "\u6b64\u524d\u4f60\u53ef\u80fd\u5ffd\u89c6\u4e86\u7a00\u571f\u7684\u5904\u7406,\u4f46\u4f60\u76f8\u4fe1\u65b0\u7684\u8131\u6c34\u673a\u53ef\u4ee5\u4e3a\u4f60\u63d0\u4f9b\u6bd4\u4ee5\u524d\u66f4\u591a\u7684\u6750\u6599,\u7269\u6709\u6240\u503c. \u9996\u5148,\u4f60\u9700\u8981\u4f7f\u7528\u4e00\u4e9b\u786b\u9178\u5728\u5316\u5b66\u6d78\u6d17\u673a\u4e2d\u6eb6\u89e3\u6742\u8d28,\u7559\u4e0b\u7c89\u788e\u7684\u7a00\u571f(I)\u77ff\u77f3.\u4e4b\u540e\u4f60\u9700\u8981\u50cf\u6b63\u5e38\u77ff\u7269\u5904\u7406\u4e00\u6837\u5904\u7406\u5b83,\u76f4\u5230\u83b7\u5f97\u7a00\u571f(I)\u7c89.</br></br>\u518d\u5c06\u5176\u653e\u5165\u5316\u5b66\u8131\u6c34\u673a\u4e2d,\u4f60\u5c06\u83b7\u5f97\u4e00\u7cfb\u5217\u5947\u602a\u7684\u7269\u8d28,\u80fd\u591f\u8fa8\u8ba4\u7684\u53ea\u6709\u5176\u4e2d\u4e00\u90e8\u5206.\u4f46\u5982\u679c\u4f60\u5c06\u8fd9\u4e9b\u7269\u8d28\u7535\u89e3\u6216\u518d\u6b21\u8131\u6c34,\u5c31\u6709\u53ef\u80fd\u5f97\u5230\u4e00\u4e9b\u6709\u7528\u7684\u6750\u6599.\u8fd9\u53ef\u80fd\u4f1a\u6d88\u8017\u5927\u91cf\u7684\u7a00\u571f,\u4f46\u4f60\u00a7o\u00a7o\u00a7r\u00a7h\u00a7o\u5df2\u7ecf\u00a7r\u5c6f\u4e86\u5f88\u591a\u4e86,\u5bf9\u5427?\u4f60\u81f3\u5c11\u9700\u8981204\u4e2a\u7a00\u571f.</br></br>\u4f60\u76f8\u4fe1\u5982\u679c\u62e5\u6709\u66f4\u5f3a\u5927\u7684\u9178\u548c\u673a\u5668,\u4f60\u5c31\u80fd\u4ece\u7a00\u571f\u4e2d\u63d0\u53d6\u66f4\u591a\u6709\u4ef7\u503c\u7684\u6750\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJaQ==",
                    "title": "\u00a76\u00a7l\u771f\u6b63\u7684\u7a00\u571f",
                    "tooltip": "<strong>\u771f\u6b63\u7684\u7a00\u571f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5316\u5b66\u8131\u6c34\u673a"
                },
                {
                    "name": "\u5927\u578b\u94dd\u6d41\u4f53\u5355\u5143",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1520.png",
                    "x": 876.0,
                    "y": 480.0,
                    "data": "512\u6876\u8fd8\u65e0\u6cd5\u6ee1\u8db3\u4f60\uff1f \u5927\u578b\u94dd\u6d41\u4f53\u5355\u5143\u6bcf\u4e2a\u53ef\u5bb9\u7eb332\u6876\u6d41\u4f53,\u6700\u5927\u5806\u53e064. \u4e00\u683c\u80fd\u88c532*64\u6876\u6db2\u4f53\uff1f \u90a3\u53ef\u662f\u534a\u4e2a\u8d85\u7ea7\u7f38I!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF8A==",
                    "title": "\u00a76\u00a7l\u5927\u578b\u94dd\u6d41\u4f53\u5355\u5143",
                    "tooltip": "<strong>\u5927\u578b\u94dd\u6d41\u4f53\u5355\u5143</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!"
                },
                {
                    "name": "\u592a\u9633\u80fd\u7ea7\u7845",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1788.png",
                    "x": 444.0,
                    "y": 492.0,
                    "data": "\u65e0\u8bba\u4f60\u9009\u62e9\u4e86\u54ea\u6761\u8def\u7ebf,\u4f60\u73b0\u5728\u80af\u5b9a\u6709\u4e86\u592a\u9633\u80fd\u7ea7\u7845\u7c89.\u4f60\u60f3\u628a\u5b83\u51b6\u70bc\u6210\u952d,\u518d\u538b\u6210\u677f\u6765\u5236\u4f5c\u6676\u4f53\u7ba1,\u4f46\u4f60\u8fd8\u9700\u8981\u4e00\u4e9b\u53bb\u5236\u9020\u5355\u6676\u7845.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG_A==",
                    "title": "\u00a76\u00a7l\u592a\u9633\u80fd\u7ea7\u7845",
                    "tooltip": "<strong>\u592a\u9633\u80fd\u7ea7\u7845</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e09\u6c2f\u7845\u70f7 \u7eed</br>\u56db\u6c2f\u5316\u7845 \u7eed"
                },
                {
                    "name": "\u7384\u94a2\u7ba1\u9053",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/953.png",
                    "x": 840.0,
                    "y": 84.0,
                    "data": "\u7384\u94a2\u6d41\u4f53\u7ba1\u9053\u7684\u5bb9\u91cf\u8981\u6bd4\u4f60\u53ef\u80fd\u6b63\u5728\u4f7f\u7528\u7684\u9752\u94dc\u3001\u94a2\u6216\u662f\u7c97\u9752\u94dc\u5408\u91d1\u6d41\u4f53\u7ba1\u9053\u7684\u5bb9\u91cf\u5927\u5f97\u591a.\u8bf7\u786e\u8ba4\u81ea\u5df1\u6273\u624b\u53ef\u4ee5\u641e\u5b9a\u91c7\u6398\u7b49\u7ea73\u7684\u6750\u6599,\u4e0d\u7136\u5c31\u65e0\u6cd5\u62c6\u9664\u8fd9\u4e9b\u7ba1\u9053\u4e86.</br></br>[note]\u5982\u679c\u4f60\u7528\u4e0d\u7740\u7684\u8bdd,\u4e5f\u53ef\u4ee5\u76f4\u63a5\u56de\u6536\u8fd9\u4e9b\u7ba1\u9053. \u4e0d\u662f\u6240\u6709\u7ba1\u9053\u90fd\u9700\u8981\u8db3\u591f\u5927\u6216\u8005\u8db3\u591f\u8010\u70ed.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADuQ==",
                    "title": "\u00a75\u00a76\u00a7l\u7384\u94a2\u7ba1\u9053",
                    "tooltip": "<strong>\u7384\u94a2\u7ba1\u9053</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)"
                },
                {
                    "name": "\u7b80\u5355\u7684\u6db2\u4f53\u8f6c\u79fb",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/154.png",
                    "x": 300.0,
                    "y": 204.0,
                    "data": "\u5c31\u50cf\u7269\u54c1\u8f6c\u8fd0\u5668\u4e00\u6837,\u6db2\u4f53\u8f6c\u8fd0\u5668\u8f6c\u79fb\u6db2\u4f53.\u76f8\u540c\u7684\u4f7f\u7528\u9650\u5236,1\u683c\u8ddd\u79bb,\u6db2\u4f53\u8f6c\u8fd0\u5668\u4e5f\u53ef\u4ee5\u5347\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAmg==",
                    "title": "\u00a76\u00a7l\u7b80\u5355\u7684\u6db2\u4f53\u8f6c\u79fb",
                    "tooltip": "<strong>\u7b80\u5355\u7684\u6db2\u4f53\u8f6c\u79fb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u7684\u7269\u54c1\u8f6c\u79fb"
                },
                {
                    "name": "\u53d8\u5f97\u6f02\u4eae",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/137.png",
                    "x": 1032.0,
                    "y": 84.0,
                    "data": "\u867d\u7136\u5bfc\u7ba1\u672c\u8eab\u5df2\u7ecf\u5f88\u68d2\u4e86,\u4f46\u5982\u679c\u4f60\u60f3\u7684\u8bdd,\u4e5f\u53ef\u4ee5\u9690\u85cf\u5b83\u4eec. \u6709\u4e24\u79cd\u7c7b\u578b\u7684\u5bfc\u7ba1\u6846\u67b6,\u57fa\u7840\u7684\u548c\u786c\u5316\u7684. \u57fa\u7840\u7684\u7b80\u5355\u6613\u7528,\u800c\u786c\u5316\u7684\u80fd\u591f\u62b5\u5fa1\u7206\u70b8\u548c\u5de5\u5177\u7684\u6316\u6398. \u4f60\u5f97\u7528\u4ee5\u592a\u6273\u624b\u624d\u80fd\u62c6\u9664\u5b83.</br></br>\u4f60\u5f97\u5148\u5728\u55b7\u6d82\u673a\u4e2d\u5bf9\u6846\u67b6\u8fdb\u884c\u55b7\u6d82-\u5728\u6f06\u5237\u5904\u653e\u7f6e\u4f60\u60f3\u8981\u7684\u5916\u89c2\u65b9\u5757,\u518d\u5728\u5de6\u4fa7\u653e\u4e0a\u6846\u67b6. \u5f53\u7136,\u55b7\u6d82\u673a\u9700\u8981\u4f9b\u80fd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAiQ==",
                    "title": "\u00a76\u00a7l\u53d8\u5f97\u6f02\u4eae",
                    "tooltip": "<strong>\u53d8\u5f97\u6f02\u4eae</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u673a\u5668\u6846\u67b6</br>\u5bfc\u7ba1"
                },
                {
                    "name": "\u5f53\u4f60\u9700\u8981\u65f6,\u90a3\u4e2a\u52e4\u6742\u5de5\u5728\u54ea?",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1916.png",
                    "x": 660.0,
                    "y": 60.0,
                    "data": "\u7ef4\u62a4\u63d0\u793a\u8986\u76d6\u677f\u5728\u5176\u6240\u9644\u7740\u7684\u63a7\u5236\u5668\u9700\u8981\u7ef4\u62a4\u65f6,\u4f1a\u53d1\u51fa\u7ea2\u77f3\u4fe1\u53f7.\u8fd9\u5bf9\u4f60\u8981\u5728HV\u9636\u6bb5\u5efa\u9020\u7684\u8d85\u51c0\u95f4\u975e\u5e38\u6709\u7528,\u56e0\u4e3a\u7ef4\u62a4\u95ee\u9898\u4f1a\u964d\u4f4e\u6d01\u51c0\u5ea6,\u9020\u6210\u4e00\u5b9a\u6bd4\u4f8b\u7684\u4ea7\u7269\u88ab\u9500\u6bc1.</br></br>\u5bf9\u4e8e\u8d85\u51c0\u95f4,\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u8986\u76d6\u677f\u8d34\u5728\u63a7\u5236\u5668\u7684\u5e95\u90e8\u6216\u9876\u90e8.\u5bf9\u4e8e\u522b\u7684\u673a\u5668,\u4f60\u53ef\u80fd\u9700\u8981\u8d34\u5728\u4fa7\u9762\u4e14\u4e0d\u6321\u4f4f\u6b63\u9762.\u8fd9\u79cd\u60c5\u51b5\u4e0b,\u4f60\u53ef\u4ee5\u7528\u7535\u70d9\u94c1\u52a0\u4e0a\u7ec6\u710a\u9521\u5bfc\u7ebf\u53f3\u952e\u8986\u76d6\u677f,\u8fd9\u6837\u5b83\u5c31\u80fd\u53d1\u51fa\u5f3a\u7ea2\u77f3\u4fe1\u53f7\u7a7f\u8fc7\u76f8\u90bb\u7684\u65b9\u5757\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHfA==",
                    "title": "\u00a76\u00a7l\u5f53\u4f60\u9700\u8981\u65f6,\u90a3\u4e2a\u52e4\u6742\u5de5\u5728\u54ea?",
                    "tooltip": "<strong>\u5f53\u4f60\u9700\u8981\u65f6,\u90a3\u4e2a\u52e4\u6742\u5de5\u5728\u54ea?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5"
                },
                {
                    "name": "\u6c5e\u592a\u591a\u4e86?",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2253.png",
                    "x": 252.0,
                    "y": 156.0,
                    "data": "\u4e00\u5c0f\u65f6\u53c8\u4e00\u5c0f\u65f6...\u4e00\u5929\u53c8\u4e00\u5929...\u4e00\u5468\u53c8\u4e00\u5468...\u4f60\u4e3a\u4e86\u7ea2\u5b9d\u77f3(\u94ec)\u5904\u7406\u4e86\u6210\u5428\u7684\u7ea2\u77f3,\u4e5f\u79ef\u6512\u4e86\u5927\u91cf\u7684\u6c5e,\u4e0d\u77e5\u9053\u80fd\u7528\u6765\u505a\u4ec0\u4e48.</br></br>\u4f60\u53ef\u4ee5\u5c06\u5176\u90fd\u5b58\u5230\u8d85\u7ea7\u7f38\u91cc,\u4f46\u4e8b\u5b9e\u4e0a\u6ca1\u4eba\u9700\u8981\u90a3\u4e48\u591a\u6b21\u6c2f\u9178.\u4f60\u53ef\u4ee5\u5236\u9020\u4e00\u53f0\u9178\u6027\u53d1\u7535\u673a,\u81f3\u5c11\u80fd\u767d\u5ad6\u70b9\u7535.</br></br>\u8bd1\u8005\u6ce8:\u4f7f\u7528\u6c5e\u5316\u5b66\u6d78\u6d17\u5904\u7406\u67d0\u4e9b\u77ff\u7269\u53ef\u4ee5\u589e\u4ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIzQ==",
                    "title": "\u00a76\u00a7l\u6c5e\u592a\u591a\u4e86?",
                    "tooltip": "<strong>\u6c5e\u592a\u591a\u4e86?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7528\u5b8c\u4e86\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\uff1f"
                },
                {
                    "name": "\u751f\u7269\u67f4\u6cb91",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/845.png",
                    "x": 204.0,
                    "y": 252.0,
                    "data": "\u4f60\u53ef\u4ee5\u4f7f\u7528\u7532\u9187\u3001\u4e59\u9187\u3001\u79cd\u5b50\u6cb9\u6216\u8005\u9c7c\u6cb9\u6765\u5236\u4f5c\u751f\u7269\u67f4\u6cb9.\u6bcf\u5355\u4f4d(1000mB)\u7684\u751f\u7269\u67f4\u6cb9\u71c3\u70e7\u540e\u80fd\u4ea7\u751f320,000EU\u7684\u7535\u529b,\u4f4e\u4e8e\u666e\u901a\u7684\u67f4\u6cb9,\u4f46\u8fd9\u662f\u53ef\u518d\u751f\u80fd\u6e90.\u67f4\u6cb9\u548c\u751f\u7269\u67f4\u6cb9\u90fd\u53ef\u4ee5\u9a71\u52a8\u5185\u71c3\u53d1\u7535\u673a,\u800c\u4e14\u67f4\u6cb9\u548c\u751f\u7269\u67f4\u6cb9\u90fd\u53ef\u4ee5\u5728\u6405\u62cc\u673a\u4e2d\u6405\u62cc\u56db\u785d\u57fa\u7532\u70f7\u5f97\u5230\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9.\u5728\u751f\u4ea7\u751f\u7269\u67f4\u6cb9\u7684\u8fc7\u7a0b\u4e2d\u4f60\u80fd\u83b7\u5f97\u4e00\u4e9b\u7518\u6cb9\u526f\u4ea7\u7269,\u628a\u4ed6\u4eec\u6536\u96c6\u8d77\u6765,\u8fd9\u6837\u5c31\u53ef\u4ee5\u4e3a\u4f60\u4ee5\u540e\u5236\u9020\u7528\u4e8e\u751f\u4ea7\u70b8\u836f\u7684\u785d\u5316\u7518\u6cb9\u6216\u8005\u73af\u6c27\u6811\u8102.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADTQ==",
                    "title": "\u00a76\u00a7l\u751f\u7269\u67f4\u6cb9",
                    "tooltip": "<strong>\u751f\u7269\u67f4\u6cb91</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u6cb9</br>\u6c22\u6c27\u5316\u94a01</br>\u9c7c\u6cb9</br>\u7532\u9187</br>\u4e59\u91871"
                },
                {
                    "name": "\u7ba1\u9053,\u7ba1\u9053\u65e0\u5904\u4e0d\u5728",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1736.png",
                    "x": 996.0,
                    "y": 324.0,
                    "data": "\u73b0\u5728\u4f60\u5df2\u7ecf\u8fdb\u5165MV,\u4f60\u5c06\u9700\u8981\u5f00\u59cb\u81ea\u52a8\u5316\u6d41\u7a0b. \u5982\u805a\u4e59\u70ef\u3001\u6c27\u6c14\u3001\u6c2e\u6c14\u3001\u6c22\u6c14\u3001\u6a61\u80f6\u3001\u6728\u70ad\u7b49.\u66f4\u5feb\u7684\u7269\u54c1\u7ba1\u9053\u5c06\u6709\u52a9\u4e8e\u5728\u4f60\u7684\u57fa\u5730\u5185\u5feb\u901f\u8fd0\u8f93\u7269\u54c1. \u73b0\u5728,\u4f7f\u7528\u4f60\u7684\u6f02\u4eae\u7684\u65b0\u538b\u6a21\u673a\u6765\u5236\u4f5c\u4e00\u4e9b\u9ec4\u94dc\u7269\u54c1\u7ba1\u9053.</br></br>\u5956\u52b1-\u52a0\u56fa\u7269\u54c1\u7ba1\u9053-\u5141\u8bb8\u4f60\u786e\u5b9a\u76ee\u7684\u5730\u7684\u4f18\u5148\u7ea7(\u5229\u7528\u8def\u7531\u503c).\u5728\u5904\u7406\u8def\u5f84\u65f6,\u52a0\u56fa\u7ba1\u9053\u53e6\u4e00\u4fa7\u7684\u4f4d\u7f6e\u4e0e\u666e\u901a\u7ba1\u9053\u76f8\u6bd4\u8fdc\u5f97\u591a. \u5f53\u4f60\u60f3\u8981\u8ba9\u6ea2\u51fa(\u6216\u4e0d\u5339\u914d)\u7684\u7269\u54c1\u53bb\u5176\u4ed6\u5730\u65b9\u65f6\u975e\u5e38\u65b9\u4fbf!</br></br>\u81f3\u4e8e\u66f4\u9ad8\u7b49\u7ea7,\u5728NEI\u4e2d\u67e5\u627e\"* item pipe\",\u6216\u8005\u76f4\u63a5\u67e5\u770b\u6570\u636e\u8868\u683c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGyA==",
                    "title": "\u00a76\u00a7l\u7ba1\u9053,\u7ba1\u9053\u65e0\u5904\u4e0d\u5728",
                    "tooltip": "<strong>\u7ba1\u9053,\u7ba1\u9053\u65e0\u5904\u4e0d\u5728</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u51fa\u6240\u6709\u4e1c\u897f(Extrude all the things)"
                },
                {
                    "name": "\u9c7c\u6cb9",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1544.png",
                    "x": 204.0,
                    "y": 300.0,
                    "data": "\u4e3a\u4e86\u751f\u4ea7\u751f\u7269\u67f4\u6cb9,\u4f60\u9700\u8981\u751f\u4ea7\u4e00\u4e9b\u79cd\u5b50\u6cb9\u6216\u8005\u662f\u9c7c\u6cb9,\u5c06\u5b83\u4eec\u548c\u7532\u9187\u6216\u8005\u4e59\u9187\u6405\u62cc\u5c31\u53ef\u4ee5\u5f97\u5230\u751f\u7269\u67f4\u6cb9. \u56e0\u6b64\u4f60\u9700\u8981\u4e00\u4e2a\u80fd\u5feb\u901f\u4ece\u79cd\u5b50\u4e2d\u538b\u69a8\u51fa\u79cd\u5b50\u6cb9\u6216\u662f\u628a\u9c7c\u53d8\u6210\u9c7c\u6cb9\u7684\u673a\u5668,\u55ef...\u8fdb\u9636\u6d41\u4f53\u63d0\u53d6\u673a\u5c31\u4e0d\u9519.</br></br>[note]\u6709\u4f20\u8a00\u8bf4\u6709\u4e00\u79cd\u9c7c\u5f62\u72b6\u7684\u5947\u602a\u4f5c\u7269...</br></br>\u4f60\u4e5f\u53ef\u4ee5\u770b\u770b\"\u6355\u9c7c,\u519c\u4e1a,\u70f9\u996a\"\u4efb\u52a1\u680f,\u6293\u4e9b\u9c7c\u6765\u63d0\u53d6\u9c7c\u6cb9\u4e5f\u662f\u4e0d\u9519\u7684\u9009\u62e9.[/warn]</br></br>\u8bd1\u8005\u6ce8:\u8fd9\u79cd\u5947\u602a\u7684\u4f5c\u7269\u6211\u731c\u662f\u91d1\u9c7c\u8349(GoldfishPlant).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGCA==",
                    "title": "\u00a76\u00a7l\u9c7c\u6cb9",
                    "tooltip": "<strong>\u9c7c\u6cb9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fdb\u9636\u6d41\u4f53\u63d0\u53d6\u673a"
                },
                {
                    "name": "\u592a\u9633\u80fd",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/933.png",
                    "x": 276.0,
                    "y": 372.0,
                    "data": "\u73b0\u5728\u6211\u4eec\u5e94\u8be5\u7814\u7a76\u4e00\u4e9b\u522b\u7684\u53ef\u518d\u751f\u80fd\u6e90\u4e86.\u8ba9\u6211\u4eec\u4ece\u592a\u9633\u80fd\u5f00\u59cb,\u6700\u4f4e\u7b49\u7ea7\u7684\u592a\u9633\u80fd\u677f\u53d1\u7535\u91cf\u662f1EU/t.\u8fd9\u4e9b\u592a\u9633\u80fd\u677f\u53ef\u4ee5\u4f5c\u4e3a\u5927\u90e8\u5206GT\u673a\u5668\u7684\u8986\u76d6\u677f\u4f7f\u7528,\u8ba9\u8fd9\u4e9b\u673a\u5668\u80fd\u4ece\u592a\u9633\u4e2d\u83b7\u53d6\u80fd\u6e90(\u4f46\u524d\u63d0\u662f\u5b83\u53ef\u4ee5\u770b\u89c1\u592a\u9633,\u5373\u9876\u90e8\u6ca1\u6709\u4e0d\u900f\u660e\u906e\u6321).</br></br>\u5343\u4e07\u8bb0\u4f4f\u6321\u96e8,\u5728\u673a\u5668\u4e0a\u65b9\u653e\u4e00\u5c42\u73bb\u7483,\u4e5f\u522b\u5fd8\u4e86\u673a\u5668\u7d27\u90bb\u7684\u65b9\u5757\u4e5f\u4e0d\u80fd\u6dcb\u96e8.</br></br>[note]\u94dd\u94c1\u677f\u9700\u8981MV\u51b2\u538b\u673a\u5e8a.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADpQ==",
                    "title": "\u00a76\u00a7l\u592a\u9633\u80fd",
                    "tooltip": "<strong>\u592a\u9633\u80fd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u6676\u5706"
                },
                {
                    "name": "\u7845\u677f",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/752.png",
                    "x": 444.0,
                    "y": 636.0,
                    "data": "\u9ad8\u7ea7\u7535\u8def\u677f\u9700\u8981\u6676\u4f53\u7ba1,\u7531\u9ad8\u7eaf\u7845\u677f\u3001\u7ec6\u9521\u5bfc\u7ebf,\u53ca\u7194\u878d\u805a\u4e59\u70ef\u5236\u6210.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC8A==",
                    "title": "\u00a76\u00a7l\u7845\u677f",
                    "tooltip": "<strong>\u7845\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u80fd\u7ea7\u952d"
                },
                {
                    "name": "\u538b\u5236MV\u9636\u6bb5\u7684\u4e00\u5207",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1547.png",
                    "x": 888.0,
                    "y": 228.0,
                    "data": "\u4f7f\u7528MV\u51b2\u538b\u673a\u5e8a,\u4f60\u53ef\u4ee5\u5236\u9020\u7528\u4e8e\u592a\u9633\u80fd\u7535\u6c60\u677f\u7684\u94dd\u94c1\u677f,\u7528\u4e8e\u6da1\u8f6e\u7684\u6da1\u8f6e\u6247\u53f6\u548cLogistics-Pipes\u7684\u4e00\u4e9b\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGCw==",
                    "title": "\u00a76\u00a7l\u538b\u5236MV\u9636\u6bb5\u7684\u4e00\u5207",
                    "tooltip": "<strong>\u538b\u5236MV\u9636\u6bb5\u7684\u4e00\u5207</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3"
                },
                {
                    "name": "MV\u9636\u6bb5\u7684\u6405\u62cc",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/751.png",
                    "x": 192.0,
                    "y": 348.0,
                    "data": "\u60f3\u8981\u8fdb\u9636HV\u9636\u6bb5,MV\u6405\u62cc\u673a\u4e0d\u5bb9\u9519\u8fc7.\u540c\u65f6\u8fd8\u89e3\u9501\u4e86\u67f4\u6cb9\u8fd9\u4e00\u66f4\u5f3a\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC7w==",
                    "title": "\u00a76\u00a7lMV\u9636\u6bb5\u7684\u6405\u62cc",
                    "tooltip": "<strong>MV\u9636\u6bb5\u7684\u6405\u62cc</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "\u4e0d\u9519\u7684\u96c6\u6210\u7535\u8def",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/793.png",
                    "x": 516.0,
                    "y": 564.0,
                    "data": "\u8bdd\u8bf4,\u4f60\u4e4b\u524d\u8bd5\u8fc7\u770b\u770b\u7535\u8def\u677f\u7684\u77ff\u8f9e\u5417? \u4f60\u53ef\u4ee5\u4ece\u77ff\u8f9e\u4e2d\u770b\u51fa\u7535\u8def\u677f\u7684\u7b49\u7ea7.</br>\u7535\u8def\u677f\u7b49\u7ea7\u6709: \u7b80\u5355\u7684(ULV)\u3001\u57fa\u7840\u7684(LV)\u3001\u4e0d\u9519\u7684(MV)\u3001\u8fdb\u9636(HV)\u3001\u7b49\u7b49. </br></br>\u73b0\u5728,\u53bb\u5236\u9020\u4e0d\u9519\u7684\u96c6\u6210\u7535\u8def\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADGQ==",
                    "title": "\u00a76\u00a7l\u4e0d\u9519\u7684\u96c6\u6210\u7535\u8def",
                    "tooltip": "<strong>\u4e0d\u9519\u7684\u96c6\u6210\u7535\u8def</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u96c6\u6210\u903b\u8f91\u7535\u8def1"
                },
                {
                    "name": "\u51b7\u5374\u574e\u5854\u5c14\u5408\u91d1",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3071.png",
                    "x": 192.0,
                    "y": 564.0,
                    "data": "\u4f7f\u7528MV\u5316\u5b66\u6d78\u6d17\u673a,\u53ef\u4ee5\u5c06\u70ed\u574e\u5854\u5c14\u5408\u91d1\u952d\u51b7\u5374\u4e0b\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAL_w==",
                    "title": "\u00a76\u00a7l\u51b7\u5374\u574e\u5854\u5c14\u5408\u91d1",
                    "tooltip": "<strong>\u51b7\u5374\u574e\u5854\u5c14\u5408\u91d1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #1"
                },
                {
                    "name": "\u6b22\u8fce\u6765\u5230\u5927\u82ef\u73af\u795e\u6559",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2141.png",
                    "x": 540.0,
                    "y": 156.0,
                    "data": "\u8981\u662f\u4f60\u5230\u4e86MV\u8fd8\u5728\u4f7f\u7528\u84b8\u6c7d,\u4f60\u53ef\u80fd\u60f3\u77e5\u9053\u5982\u4f55\u7ee7\u7eed\u751f\u5b58\u4e0b\u53bb,\u5e76\u8d70\u5f97\u66f4\u8fdc.\u4e00\u79cd\u9009\u62e9\u662f\u6539\u7528\u8f7b\u71c3\u6599,\u8fd9\u5728LV\u5c31\u8bb2\u8fc7\u4e86.  \u53e6\u4e00\u79cd\u9009\u62e9\u5c31\u662f\u7528\u82ef.\u82ef\u662f\u7531\u6728\u7126\u6cb9\u5236\u6210\u7684.\u6709\u4e24\u6761\u8def\u53ef\u4ee5\u8d70,\u90fd\u4ece\u79cd\u6811\u6536\u83b7\u539f\u6728\u5f00\u59cb.</br></br>\u4e00\u6761\u8def\u662f\u4f7f\u7528\u7126\u7089\u6216\u9ad8\u7ea7\u7126\u7089\u5236\u9020\u6728\u70ad,\u6d41\u4f53\u63d0\u53d6\u5f97\u5230\u6728\u7126\u6cb9. \u7136\u540e\u84b8\u998f\u6728\u7126\u6cb9\u5236\u53d6\u82ef. \u8fd9\u79cd\u65b9\u6cd5\u4ea7\u751f\u8f83\u5c11\u6c61\u67d3,\u4e0d\u8fc7\u83b7\u5f97\u7684\u82ef\u4e5f\u4f1a\u6bd4\u8f83\u5c11.</br></br>\u7b2c\u4e8c\u6761\u8def\u5c31\u662f\u4f7f\u7528\u591a\u65b9\u5757\u70ed\u89e3\u7089(\u52a0\u5165\u6c2e\u6c14\u901f\u5ea6\u66f4\u5feb),\u76f4\u63a5\u751f\u4ea7\u6728\u70ad\u548c\u6728\u7126\u6cb9.\u6d41\u4f53\u63d0\u53d6\u6728\u70ad\u4ee5\u83b7\u5f97\u989d\u5916\u7684\u6728\u7126\u6cb9. \u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u540c\u4e0a. \u6b64\u65b9\u6cd5\u4f1a\u5728\u70ed\u89e3\u7089\u8fd9\u6b65\u4ea7\u751f\u6c61\u67d3,\u4f46\u6bcf\u4e2a\u539f\u6728\u53ef\u83b7\u5f97\u66f4\u591a\u7684\u82ef.</br></br>\u591a\u4f59\u7684\u6728\u7126\u6cb9\u4e5f\u53ef\u4ee5\u5236\u6210\u7532\u82ef-\u7206\u70b8\u7269\u7684\u4e00\u4e2a\u5173\u952e\u6210\u5206,\u4f60\u4ee5\u540e\u4f1a\u9700\u8981\u5b83\u7684(\u5c24\u5176\u5728\u5236\u9020\u706b\u7bad\u7684\u65f6\u5019).</br></br>\u5982\u679c\u9009\u62e9\u4ea7\u51fa\u6728\u70ad\u526f\u4ea7,\u90a3\u4e48\u4f60\u53ef\u4ee5\u83b7\u5f97\u5927\u91cf\u6709\u7528\u7684\u526f\u4ea7\u7269,\u4f46\u8fd9\u9700\u89814\u5ea7\u84b8\u998f\u5854.</br></br>[note]\u4e4b\u540e\u4f60\u53ef\u4ee5\u4f7f\u7528\u5de5\u4e1a\u7126\u7089\u6765\u83b7\u5f97\u66f4\u9ad8\u7684\u6548\u7387.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIXQ==",
                    "title": "\u00a76\u00a7l\u6b22\u8fce\u6765\u5230\u5927\u82ef\u73af\u795e\u6559",
                    "tooltip": "<strong>\u6b22\u8fce\u6765\u5230\u5927\u82ef\u73af\u795e\u6559</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u7b80\u5355\u7684\u7269\u54c1\u8f6c\u79fb",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/153.png",
                    "x": 348.0,
                    "y": 204.0,
                    "data": "\u8f6c\u8fd0\u5668\u53ea\u80fd\u57281\u683c\u7684\u8ddd\u79bb\u5185\u8f6c\u79fb\u7269\u54c1.\u4f46\u5b83\u4eec\u76f8\u5f53\u4fbf\u5b9c,\u662f\u6784\u5efa\u7d27\u51d1\u578b\u673a\u7ec4\u7684\u597d\u5e2e\u624b.\u5b83\u4eec\u5305\u62ec\u4e00\u4e2a\u7b80\u5355\u7684\u8fc7\u6ee4\u7cfb\u7edf,\u4e14\u652f\u6301\u591a\u79cd\u8f93\u5165\u548c\u8f93\u51fa!\u8424\u77f3\u5c06\u4f7f\u5176\u8f6c\u79fb\u901f\u5ea6\u66f4\u5feb - \u5c1d\u8bd5\u53d1\u73b0\u5176\u4ed6\u5347\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAmQ==",
                    "title": "\u00a76\u00a7l\u7b80\u5355\u7684\u7269\u54c1\u8f6c\u79fb",
                    "tooltip": "<strong>\u7b80\u5355\u7684\u7269\u54c1\u8f6c\u79fb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u7384\u94a2\u7bb1\u5b50",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8724598716517898559.png",
                    "x": 888.0,
                    "y": 132.0,
                    "data": "\u62e5\u62b1\u9ed1\u6697\u540e,\u4f60\u53ef\u4ee5\u83b7\u5f97\u65b0\u7684\u66f4\u5927\u7684\u7384\u94a2\u7bb1\u5b50.\u4e5f\u8bb8\u5c06\u6765\u4f1a\u6709\u53e6\u4e00\u79cd\u5347\u7ea7\u65b9\u5f0f?</br></br>[note]\u5c31\u50cf\u4e4b\u524d\u7684\u7bb1\u5b50\u4e00\u6837,\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5408\u9002\u7684\u5347\u7ea7\u7269\u54c1\u6765\u5347\u7ea7\u5230\u7384\u94a2\u7bb1\u5b50.[/note]</br>",
                    "quest_id": "t6xRGFm_S2SG6_-xNh8mwQ==",
                    "title": "\u00a75\u00a76\u00a7l\u7384\u94a2\u7bb1\u5b50",
                    "tooltip": "<strong>\u7384\u94a2\u7bb1\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae</br>\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)"
                },
                {
                    "name": "\u67f4\u6cb91",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/553.png",
                    "x": 144.0,
                    "y": 384.0,
                    "data": "\u5f53\u4f60\u80fd\u5236\u9020MV\u6405\u62cc\u673a\u4e4b\u540e,\u5c31\u53ef\u4ee5\u5c065\u4efd\u8f7b\u71c3\u6cb9\u5355\u5143\u548c1\u4efd\u91cd\u71c3\u6cb9\u5355\u5143\u6405\u62cc,\u83b7\u5f976\u4efd\u67f4\u6cb9\u5355\u5143. \u67f4\u6cb9\u662f\u4e00\u79cd\u5341\u5206\u5f3a\u5927\u7684\u71c3\u6599,1\u5355\u5143\u7684\u67f4\u6cb9(1000mB)\u5728\u5185\u71c3\u53d1\u7535\u673a\u4e2d\u7406\u8bba\u4e0a\u80fd\u63d0\u4f9b480KEU\u7684\u7535\u91cf!\u5ffd\u7565\u6405\u62cc\u8017\u7535,\u7b80\u5355\u8ba1\u7b97\u4e00\u4e0b,\u76f8\u5f53\u4e8e\u628a\u539f\u6765\u76841,525KEU\u6405\u62cc\u4e00\u4e0b,\u5c31\u53d8\u4e3a\u4e862,880KEU.\u8840\u8d5a!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACKQ==",
                    "title": "\u00a76\u00a7l\u67f4\u6cb9",
                    "tooltip": "<strong>\u67f4\u6cb91</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8f7b\u71c3\u6cb91</br>\u91cd\u71c3\u6cb91</br>MV\u9636\u6bb5\u7684\u6405\u62cc"
                },
                {
                    "name": "\u4f60\u89c9\u5f97\u4f60\u662f\u975e\u914b?",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1914.png",
                    "x": 612.0,
                    "y": 156.0,
                    "data": "\u597d\u5427,\u518d\u4e5f\u4e0d\u4f1a\u4e86!\u7ed9\u6211\u4e00\u4e9b\u7eff\u5b9d\u77f3\u548c\u4e00\u672c\u7a7a\u767d\u7684\u4e66,\u6211\u4f1a\u7ed9\u4f60\u4e00\u672c\u80fd\u7528\u6765\u62d3\u5370\u7684\u65f6\u8fd0I\u9644\u9b54\u4e66.\u590d\u5236\u51e0\u6b21\u540e,\u4f60\u53ef\u4ee5\u5728\u94c1\u7827\u4e2d\u5c06\u51e0\u672c\u65f6\u8fd0I\u7ed3\u5408\u8d77\u6765\u53d8\u6210\u65f6\u8fd0II.\u7136\u540e\u518d\u590d\u5236,\u6700\u540e\u4f60\u5c31\u80fd\u83b7\u5f97\u65f6\u8fd0III\u7684\u9644\u9b54\u4e66\u4e86!</br></br>\u6709\u4e86\u65f6\u8fd0III,\u518d\u52a0\u4e0a\u5404\u79cd\u7279\u5b9a\u7269\u54c1\u4f60\u5c31\u53ef\u4ee5\u5c06\u81ea\u5df1\u7684\u6218\u5229\u54c1\u888b\u5347\u7ea7\u4e3a\u65f6\u8fd0III\u7684\u6218\u5229\u54c1\u888b,\u8fd9\u5c06\u4f1a\u79fb\u9664\u5783\u573e\u5956\u52b1,\u5e26\u6765\u66f4\u591a\u7684\u597d\u4e1c\u897f!</br></br>\u7075\u9b42\u7ed1\u5b9a\u662f\u53e6\u4e00\u4e2a\u6709\u7528\u7684\u9644\u9b54,\u5728\u4f60\u6b7b\u4ea1\u65f6,\u5b83\u4f1a\u4f7f\u62e5\u6709\u8be5\u9644\u9b54\u7684\u7269\u54c1\u7559\u5728\u4f60\u7684\u8eab\u4e0a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHeg==",
                    "title": "\u00a76\u00a7l\u4f60\u89c9\u5f97\u4f60\u662f\u975e\u914b?",
                    "tooltip": "<strong>\u4f60\u89c9\u5f97\u4f60\u662f\u975e\u914b?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u53d7\u591f\u4e86?\u6211\u6253\u8d4c\u4f60\u89c9\u5f97\u62a5\u7eb8\u65e9\u5c31\u6b7b\u4e86!"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ULV)",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/934.png",
                    "x": 312.0,
                    "y": 372.0,
                    "data": "\u4e0b\u4e00\u4e2a\u7b49\u7ea7\u7684\u592a\u9633\u80fd\u677f\u7b49\u7ea7\u662fULV\u7ea7,\u4ed6\u4eec\u53ef\u4ee5\u63d0\u4f9b8EU/t\u7684\u80fd\u6e90.\u540c\u6837\u4ed6\u4eec\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5927\u90e8\u5206\u683c\u96f7\u673a\u5668\u7684\u8986\u76d6\u677f\u4f7f\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADpg==",
                    "title": "\u00a76\u00a7l\u592a\u9633\u4e4b\u529b(ULV)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(ULV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u80fd"
                },
                {
                    "name": "\u751f\u7269\u8d28\u71c3\u6599",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/730.png",
                    "x": 348.0,
                    "y": 60.0,
                    "data": "\u4f60\u73b0\u5728\u4f7f\u7528\u84b8\u6c7d\u3001\u6742\u915a\u6cb9,\u53ef\u80fd\u8fd8\u6709\u77f3\u6cb9\u53ca\u5176\u526f\u4ea7\u7269\u6765\u53d1\u7535.\u662f\u65f6\u5019\u5f00\u59cb\u5236\u9020\u5e76\u4f7f\u7528\u751f\u7269\u67f4\u6cb9\u4e86.</br></br>\u7b2c\u4e00\u6b65\u662f\u7528\u6709\u673a\u6750\u6599\u5236\u9020\u690d\u7269\u7403.\u4f60\u53ef\u4ee5\u4f7f\u7528\u5c0f\u9ea6\u3001\u7518\u8517\u3001\u82f9\u679c\u3001\u6811\u82d7\u6216\u8005...\u51e0\u4e4e\u4efb\u4f55\u4f5c\u7269. \u975b\u84dd\u82b1(Indigo-blossoms)\u7684\u4ea7\u51fa\u6bd4\u662f4:1,\u8fd9\u4e0e\u5176\u4ed6IC2\u4f5c\u7269\u4e0d\u540c,\u9664\u6b64\u4e4b\u5916\u4e5f\u6ca1\u5565\u522b\u7684\u7528\u4e86. \u4e0d\u8fc7\u5b9e\u9645\u4e0a\u5927\u5bb6\u57fa\u672c\u90fd\u4f1a\u7528\u6811\u82d7,\u56e0\u4e3a\u4f60\u603b\u4f1a\u9700\u8981\u4e00\u4e2a\u6811\u573a\u7684.</br></br>\u786e\u4fdd\u4f60\u6709\u4e00\u5ea7\u81ea\u52a8\u5316\u6797\u4e1a\u591a\u65b9\u5757\u519c\u573a\u3001\u53f2\u8482\u592b\u77ff\u8f66\u519c\u573a,\u6216IC2\u4f5c\u7269\u67b6\u914d\u5408\u6536\u5272\u673a.\u56e0\u4e3a\u4f60\u9700\u8981\u5927\u91cf\u7684\u751f\u7269\u8d28\u539f\u6599,\u7528\u4e8e\u6301\u7eed\u5730\u5236\u9020\u751f\u7269\u67f4\u6cb9.</br></br>\u00a74\u63d0\u793a:\u699b\u5b50\u662f\u751f\u7269\u67f4\u6cb9\u7684\u7ec8\u6781\u6765\u6e90.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC2g==",
                    "title": "\u00a76\u00a7l\u751f\u7269\u8d28\u71c3\u6599",
                    "tooltip": "<strong>\u751f\u7269\u8d28\u71c3\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u706b\u7130\u6c34",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/149.png",
                    "x": 1128.0,
                    "y": 228.0,
                    "data": "\u592a\u7cdf\u4e86,\u4f60\u4e0d\u80fd\u996e\u7528\u5b83. \u5728\u71c3\u70e7\u53d1\u7535\u673a\u4e2d\u4f7f\u7528\u65f6,\u5b83\u80fd\u4ea7\u51fa80RF/t.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAlQ==",
                    "title": "\u00a76\u00a7l\u706b\u7130\u6c34",
                    "tooltip": "<strong>\u706b\u7130\u6c34</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u917f\u9020\u6db2\u4f53"
                },
                {
                    "name": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/753.png",
                    "x": 72.0,
                    "y": 492.0,
                    "data": "\u4e0d\u9508\u94a2\u952d\u9700\u8981\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u8fdb\u884c\u70e7\u5236\u65b9\u53ef\u83b7\u5f97,\u7089\u6e29\u8981\u6c421700K.</br></br>\u9700\u8981480EU/t\u70e7\u523680\u79d2,\u5982\u679c\u52a0\u5165\u6c27\u6c14\u5219\u9700\u898160\u79d2. \u5982\u679c\u6761\u4ef6\u5141\u8bb8,\u8bf7\u5c3d\u91cf\u4e3a\u9ad8\u7089\u63d0\u4f9b\u4fdd\u62a4\u6c14,\u8fd9\u53ef\u4ee5\u8282\u7701\u5927\u91cf\u7684\u80fd\u6e90,\u53e6\u5916\u4f60\u4e5f\u9700\u8981\u7528\u5230\u5927\u91cf\u7684\u4e0d\u9508\u94a2. \u77f3\u6cb9\u88c2\u5316\u673a\u3001\u5927\u578b\u84b8\u6c7d\u6da1\u8f6e\u3001\u84b8\u998f\u5854\u90fd\u662f\u5403\u4e0d\u9508\u94a2\u5927\u6237.\u5355\u5355\u4e00\u5ea7\u84b8\u998f\u5854\u5c31\u4f1a\u6d88\u8017\u51e0\u7ec4\u4e0d\u9508\u94a2,\u800c\u4f60\u9700\u8981\u8fdc\u8fdc\u4e0d\u6b62\u4e00\u5ea7\u84b8\u998f\u5854.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC8Q==",
                    "title": "\u00a76\u00a7l\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "tooltip": "<strong>\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u7ea7\u80fd\u6e90\u4ed3</br>\u4f60\u51c6\u5907\u597d\u8fc8\u5411HV\u4e86\u5417\uff1f"
                },
                {
                    "name": "\u7ce0",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/733.png",
                    "x": 156.0,
                    "y": 60.0,
                    "data": "\u690d\u7269\u56e2\u5757\u5fc5\u987b\u7ecf\u8fc7\u79bb\u5fc3\u53d8\u6210\u7ce0--\u751f\u7269\u8d28\u7684\u57fa\u7840\u539f\u6599.\u4f60\u9700\u8981\u4e00\u81f3\u4e8c\u53f0MV\u79bb\u5fc3\u673a\u6765\u8fd0\u4f5c\u65b0\u7684\u751f\u4ea7\u7ebf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC3Q==",
                    "title": "\u00a76\u00a7l\u7ce0",
                    "tooltip": "<strong>\u7ce0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u56e2\u5757"
                },
                {
                    "name": "\u7f8e\u5473\u7684...",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/148.png",
                    "x": 1032.0,
                    "y": 228.0,
                    "data": "\u55ef,\u662f\u7684...\u597d\u5427,\u4f60\u786e\u4fe1\u5b83\u5728...\u67d0\u4e00\u5929...\u6700\u7ec8...\u4f1a\u6709\u4e00\u4e9b\u7528\u9014\u7684,\u5927\u6982.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAlA==",
                    "title": "\u00a76\u00a7l\u7f8e\u5473\u7684...",
                    "tooltip": "<strong>\u7f8e\u5473\u7684...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u917f\u9020\u6db2\u4f53"
                },
                {
                    "name": "\u6709\u7814\u78e8\u5934\u603b\u6bd4\u6ca1\u6709\u597d",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2086.png",
                    "x": 984.0,
                    "y": 36.0,
                    "data": "\u867d\u7136SAG\u7814\u78e8\u673a\u6ca1\u6709\u7814\u78e8\u5934\u4e5f\u80fd\u7528,\u800c\u71e7\u77f3\u7814\u78e8\u5934\u53ea\u80fd\u8282\u7701\u4e00\u70b9\u70b9\u80fd\u91cf.\u4f46\u5982\u679c\u4f60\u60f3\u89c1\u8bc6\u89c1\u8bc6SAG\u7814\u78e8\u673a\u7684\u771f\u672c\u4e8b,\u4f60\u5f97\u7528\u94bb\u77f3\u6216\u94a8\u7814\u78e8\u5934.  \u5236\u4f5c\u4e00\u4e2a\u94bb\u77f3\u7814\u78e8\u5934,\u6211\u4f1a\u7ed9\u4f60\u4e2a\u94a8\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIJg==",
                    "title": "\u00a76\u00a7l\u6709\u7814\u78e8\u5934\u603b\u6bd4\u6ca1\u6709\u597d",
                    "tooltip": "<strong>\u6709\u7814\u78e8\u5934\u603b\u6bd4\u6ca1\u6709\u597d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u79cd\u77ff\u7269\u5904\u7406..."
                },
                {
                    "name": "\u7b2c2\u9636\u6bb5(MV)",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1148.png",
                    "x": 444.0,
                    "y": 180.0,
                    "data": "MV\u673a\u5668\u5916\u58f3\u9700\u8981\u94dd,\u6bcf\u4e2aMV\u673a\u5668\u7684\u7ec4\u4ef6\u4e5f\u9700\u8981\u94dd,\u6240\u4ee5\u8bf7\u8ba9\u4f60\u7684\u5de5\u4e1a\u9ad8\u7089\u4fdd\u6301\u8fd0\u884c.</br></br>\u8fd9\u91cc\u6709\u4e00\u4e9b\u8d77\u6b65\u7684\u5efa\u8bae:</br>- MV\u7535\u89e3\u673a\u53ef\u4ee5\u8ba9\u94dd\u7684\u83b7\u53d6\u66f4\u5bb9\u6613.</br>- MV\u538b\u6a21\u673a\u8ba9\u5236\u4f5c\u7ec4\u4ef6\u66f4\u52a0\u4fbf\u5b9c.</br>- MV\u91c7\u77ff\u673a\u53ef\u4ee5\u8282\u7ea6\u4f60\u7684\u65f6\u95f4.  </br></br>\u4e0d\u77e5\u9053\u4f60\u662f\u5426\u8fd8\u8bb0\u5f97'\u5b89\u5168\u7b2c\u4e00'\u8fd9\u4e2a\u4efb\u52a1,\u5173\u4e8e\u63a5\u9519\u7535\u538b\u7684\u7ec6\u8282\u63cf\u8ff0? </br>\u7b80\u800c\u8a00\u4e4b\u5c31\u662f\u628aMV\u7535\u9001\u5230LV\u673a\u5668\u4f1a\u628a\u5b83\u70b8\u6389.</br>\u8ba9MV\u7535\u6d41\u901a\u8fc7LV\u7ebf\u7f06\u4f1a\u7194\u6bc1\u7ebf\u7f06,\u9020\u6210\u7684\u706b\u7130\u4e5f\u53ef\u80fd\u5f15\u53d1\u673a\u5668\u7206\u70b8. </br>\u53e6\u5916,\u7528\u9ad8\u7535\u538b\u673a\u5668\u52a0\u5de5\u4f4e\u7535\u538b\u914d\u65b9(\u4e0d\u5305\u62ecULV,ULV\u914d\u65b9\u89c6\u4e3aLV),\u4f1a\u8fdb\u884c\u8d85\u9891. \u8d85\u9891\u4f1a\u6d88\u80174\u500d\u7684\u529f\u7387,\u7f29\u77ed\u4e00\u534a\u7684\u52a0\u5de5\u65f6\u95f4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEfA==",
                    "title": "\u00a76\u00a7l\u7b2c2\u9636\u6bb5(MV)",
                    "tooltip": "<strong>\u7b2c2\u9636\u6bb5(MV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!</br>\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV</br>\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3</br>\u8fdb\u9636\u7535\u5b50\u7535\u8def(Good Circuits.)</br>\u4e59\u9170\u6c34\u6768\u9178(C9H8O4)...\u6c2f\u5316\u94a0(NaCl)...\u6c34(H2O)..."
                },
                {
                    "name": "\u80f6\u6c34\u7559\u75d5(Hangover From All That Glue)?",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2736.png",
                    "x": 612.0,
                    "y": 468.0,
                    "data": "\u8d34\u7247\u5143\u4ef6\u662f\u66f4\u9ad8\u7ea7\u7684\u7535\u8def\u677f\u90e8\u4ef6. \u5b83\u4eec\u662fEV+\u7cfb\u5217\u7535\u8def\u677f\u7684\u5fc5\u9700\u54c1,\u4e14\u5236\u9020\u6210\u672c\u66f4\u4f4e(\u642d\u914d\u5408\u9002\u7684\u6750\u6599).\u4f60\u9700\u8981MV\u7ec4\u88c5\u673a\u548c\u805a\u4e59\u70ef\u624d\u80fd\u751f\u4ea7\u5b83\u4eec. \u76ee\u524d,\u8d34\u7247\u7535\u963b\u53ef\u80fd\u662f\u4f60\u552f\u4e00\u53ef\u4ee5\u8f7b\u677e\u5236\u9020\u7684\u8d34\u7247\u5143\u4ef6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKsA==",
                    "title": "\u00a76\u00a7l\u80f6\u6c34\u7559\u75d5(Hangover From All That Glue)?",
                    "tooltip": "<strong>\u80f6\u6c34\u7559\u75d5(Hangover From All That Glue)?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u878d\u805a\u4e59\u70ef</br>\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!"
                },
                {
                    "name": "\u5bfc\u7ba1",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/134.png",
                    "x": 1032.0,
                    "y": 132.0,
                    "data": "\u8fd9\u53ef\u80fd\u662f\u591a\u79cd\u4f20\u8f93\u65b9\u5f0f\u4e2d\u6700\u68d2\u7684\u4e00\u79cd,\u6bcf\u4e00\u79cd\u90fd\u505a\u4e00\u4e9b\u5427.\u800c\u4e14\u6bcf\u79cd(\u9664\u4e86\u7269\u54c1\u5bfc\u7ba1)\u90fd\u6709\u66f4\u9ad8\u7ea7\u7684\u5bfc\u7ba1.</br></br>[note]\u7b49\u4f60\u79d1\u6280\u5230\u4e86,\u8fd8\u6709ME\u5bfc\u7ba1.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAhg==",
                    "title": "\u00a76\u00a7l\u5bfc\u7ba1",
                    "tooltip": "<strong>\u5bfc\u7ba1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>IO,IO,\u6211\u4eec\u53bbEnderIO"
                },
                {
                    "name": "\u592a\u9633\u80fd\u7ea7\u952d",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/746.png",
                    "x": 336.0,
                    "y": 564.0,
                    "data": "\u60f3\u8981\u5c06\u4f60\u7684\u592a\u9633\u80fd\u7ea7\u7c89,\u8f6c\u5316\u4e3a\u592a\u9633\u80fd\u7ea7\u952d,\u4f60\u9700\u8981\u4e00\u53f0\u81f3\u5c11\u574e\u5854\u5c14\u5408\u91d1\u7ebf\u5708\u7684\u5de5\u4e1a\u9ad8\u7089,\u5e76\u5c06\u4ea7\u51fa\u7684\u70ed\u952d\u5728\u5316\u5b66\u6d78\u6d17\u673a\u4e2d\u51b7\u5374.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC6g==",
                    "title": "\u00a76\u00a7l\u592a\u9633\u80fd\u7ea7\u952d",
                    "tooltip": "<strong>\u592a\u9633\u80fd\u7ea7\u952d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d</br>\u51b7\u5374\u6db2</br>\u592a\u9633\u80fd\u7ea7\u7845</br>\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3"
                },
                {
                    "name": "O\u4f3c\u4e4e\u662f\u6c27",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/846.png",
                    "x": 528.0,
                    "y": 348.0,
                    "data": "\u6c27\u6c14\u53ef\u4ee5\u901a\u8fc7\u5f88\u591a\u79cd\u65b9\u5f0f\u5f97\u5230.\u4f60\u53ef\u4ee5\u901a\u8fc7\u79bb\u5fc3\u673a\u79bb\u5fc3\u9ec4\u8910\u94c1\u77ff\u77f3\u6216\u8005\u68d5\u8910\u94c1\u77ff\u77f3\u5f97\u5230\u6c27\u6c14,\u5b83\u4eec\u90fd\u662f\u5f88\u5bb9\u6613\u627e\u5230\u7684\u77ff\u7269.\u6216\u8005\u4f60\u53ef\u4ee5\u901a\u8fc7\u7535\u89e3\u9521\u77f3\u77ff\u7802\u3001\u7cd6\u3001\u6c34\u6216\u8005\u5176\u4ed6\u7684\u5bcc\u6c27\u77ff\u7269\u6765\u5236\u53d6\u6c27\u6c14.</br></br>\u7a0d\u540e,\u7535\u89e3\u6c34\u6216\u79bb\u5fc3\u7a7a\u6c14\u53ef\u80fd\u5c06\u6210\u4e3a\u4f60\u7684\u4e3b\u8981\u6c27\u6c14\u6765\u6e90.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADTg==",
                    "title": "\u00a76\u00a7lO\u4f3c\u4e4e\u662f\u6c27",
                    "tooltip": "<strong>O\u4f3c\u4e4e\u662f\u6c27</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u89e3\u4e07\u7269"
                },
                {
                    "name": "\u6c2f\u5316\u94c11",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1020.png",
                    "x": 780.0,
                    "y": 420.0,
                    "data": "\u6c2f\u5316\u94c1\u53ef\u4ee5\u7528\u4e8e\u8680\u523b\u7535\u8def\u57fa\u677f.</br>\u60f3\u8981\u5236\u53d6\u8fd9\u79cd\u6db2\u4f53,\u4f60\u9996\u5148\u9700\u8981\u7528\u6c22\u6c14\u548c\u6c2f\u6c14\u5236\u53d6\u6c22\u6c2f\u9178,\u7136\u540e\u518d\u5c06\u6c22\u6c2f\u9178\u548c\u94c1\u7c89\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u6df7\u5408.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD_A==",
                    "title": "\u00a76\u00a7l\u6c2f\u5316\u94c1",
                    "tooltip": "<strong>\u6c2f\u5316\u94c11</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u878d\u5851\u6599"
                },
                {
                    "name": "\u4e00\u79cd\u77ff\u7269\u5904\u7406...",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/145.png",
                    "x": 984.0,
                    "y": 84.0,
                    "data": "\u7814\u78e8\u673a\u4e0eSAG\u7814\u78e8\u4e4b\u95f4\u7684\u6218\u4e89\u4ecd\u5728\u7ee7\u7eed,\u770b\u4e0d\u5230\u5c3d\u5934,\u90a3\u4e48\u4f55\u5fc5\u7ea0\u7ed3\u9009\u54ea\u4e2a\u5462?</br></br>HV\u7814\u78e8\u673a\u53ef\u83b7\u5f97\u66f4\u591a\u7684\u526f\u4ea7\u7269,\u4f46SAG\u7814\u78e8\u673a\u4e5f\u6709\u5176\u95ea\u5149\u70b9:\u5347\u7ea7\u7814\u78e8\u5934!SAG\u7814\u78e8\u673a\u662f\u4e00\u79cd\u5b8c\u7f8e\u7684\u673a\u5668,\u53ef\u4ee5\u5728\u4e0d\u4f7f\u7528\u871c\u8702\u548c\u4f5c\u7269\u7684\u60c5\u51b5\u4e0b\u4ece\u77ff\u77f3\u4e2d\u83b7\u5f97\u6700\u5927\u7684\u6536\u76ca. \u4f7f\u7528\u94a8\u78e8\u5934\u53ef\u4ee5\u83b7\u5f97\u989d\u5916\u7684\u8f93\u51fa,\u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4ee5\u6b64\u5237\u6750\u6599.(\u6bd4\u5982\u952d,\u5c31\u6ca1\u6709\u989d\u5916\u4ea7\u51fa)  \u53e6\u5916,\u5bf9\u4e8e\u8bb8\u591a\u77ff\u7269,\u4f60\u5c06\u76f4\u63a5\u83b7\u5f97\u6700\u7ec8\u8f93\u51fa,\u800c\u65e0\u9700\u8fdb\u4e00\u6b65\u5904\u7406.\u5b83\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5904\u7406\u7ea2\u77f3\u83b7\u5f97\u94ec!</br></br>SAG\u5bf9\u4e8e\u94c5\u3001\u94dc\u3001\u9521\u3001\u94f6\u3001\u954d\u3001\u7ea2\u77f3\u3001\u7ea2\u5b9d\u77f3\u3001\u9752\u91d1\u77f3\u3001\u77f3\u82f1\u548c\u5b54\u96c0\u77f3\u77ff\u90fd\u5f88\u6709\u7528.\u8981\u662f\u4f60\u7528\u4e86\u8db3\u591f\u597d\u7684\u78e8\u5934,\u8fd8\u6709\u4e9b\u522b\u7684\u77ff\u7269\u4e5f\u5c06\u83b7\u5f97\u66f4\u591a\u7684\u8f93\u51fa.</br></br>\u751a\u81f3\u7164\u70ad\u3001\u6728\u70ad\u3001\u5c0f\u9ea6\u548c\u672b\u5f71\u73cd\u73e0\u90fd\u80fd\u83b7\u5f97\u989d\u5916\u8f93\u51fa.</br></br>\u6362\u53e5\u8bdd\u8bf4,\u5728\u8fd9\u65b9\u9762,GT\u7684\u7814\u78e8\u673a\u8fd8\u5728\u540e\u5934\u62cd\u9a6c\u8ffd\u8d76\u5462.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAkQ==",
                    "title": "\u00a76\u00a7l\u4e00\u79cd\u77ff\u7269\u5904\u7406...",
                    "tooltip": "<strong>\u4e00\u79cd\u77ff\u7269\u5904\u7406...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u673a\u5668\u6846\u67b6"
                },
                {
                    "name": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1478.png",
                    "x": 660.0,
                    "y": 108.0,
                    "data": "\u5728\u5236\u9020\u5fae\u6ce2\u7089\u3001\u626b\u63cf\u4eea\u548c\u6700\u91cd\u8981\u7684\u7535\u8def\u7ec4\u88c5\u673a\u8fd8\u6709\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a\u7684\u65f6\u5019\u4f60\u4f1a\u9700\u8981\u8fd9\u4e2a\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFxg==",
                    "title": "\u00a76\u00a7lMV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5",
                    "tooltip": "<strong>MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "\u5934\u75bc(Salty)\u7684\u7845\u4ea7\u7ebf?",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3214.png",
                    "x": 384.0,
                    "y": 420.0,
                    "data": "\u5982\u679c\u4f60\u5bf9\u63d0\u7eaf\u7845\u6240\u9700\u7684\u5404\u79cd\u8d44\u6e90\u611f\u5230\u5934\u75bc\u7684\u8bdd,\u6211\u8fd9\u6709\u4e2a\u597d\u6d88\u606f! \u4f60\u53ef\u4ee5\u901a\u8fc7\u7535\u89e3\u5904\u7406\u4ea7\u7269\u76d0(Salt),\u56de\u6536\u6240\u6709\u7684\u6c2f\u548c\u94a0!</br></br></br>[warn]\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528\u950c\u6765\u4ee3\u66ff\u94a0\uff0c\u7b2c\u4e00\u6b65\u53cd\u5e94\u4f1a\u6162\u4e00\u70b9\uff0c\u4f46\u56de\u6536\u950c\u7c89\u901f\u5ea6\u8fdc\u6bd4\u7528\u94a0\u8981\u5feb\u3002[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMjg==",
                    "title": "\u00a76\u00a7l\u5934\u75bc(Salty)\u7684\u7845\u4ea7\u7ebf?",
                    "tooltip": "<strong>\u5934\u75bc(Salty)\u7684\u7845\u4ea7\u7ebf?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u56db\u6c2f\u5316\u7845 \u7eed"
                },
                {
                    "name": "\u8def\u7ebf\u4e09\uff1a\u70ed\u89e3\u7089",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3070.png",
                    "x": 204.0,
                    "y": 108.0,
                    "data": "\u4f7f\u7528GT\u7684\u70ed\u89e3\u7089,\u4f60\u53ef\u4ee5\u4eab\u53d7\u5347\u7ea7\u7ebf\u5708\u5e26\u6765\u7684\u901f\u5ea6\u52a0\u6210.</br></br>\u4f60\u8fd8\u53ef\u4ee5\u907f\u5f00\u53d1\u9175\u69fd.\u8bf7\u67e5\u770bNEI\u51b3\u5b9a\u54ea\u6761\u8def\u6700\u9002\u5408\u4f60. GT++\u7684\u5de5\u4e1a\u7126\u7089\u4e5f\u53ef\u4ee5\u505a\u5230\u8fd9\u4e00\u70b9.</br></br>(\u4f60\u53ea\u9700\u63d0\u4ea4\u5176\u4e2d\u4e4b\u4e00)</br></br>",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAL_g==",
                    "title": "\u00a76\u00a7l\u8def\u7ebf\u4e09\uff1a\u70ed\u89e3\u7089",
                    "tooltip": "<strong>\u8def\u7ebf\u4e09\uff1a\u70ed\u89e3\u7089</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ce0"
                },
                {
                    "name": "\u78b3\u677f",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/778.png",
                    "x": 564.0,
                    "y": 456.0,
                    "data": "\u78b3\u677f\u53ef\u7528\u4e8e\u5408\u6210\u4e00\u5806\u4e1c\u897f,\u5305\u62ec\u6700\u7ec8\u7684\u7eb3\u7c73\u88c5\u7532.\u8bf7\u67e5\u770b\"\u6446\u8131\u6b7b\u4ea1,\u6e38\u5386\u56db\u65b9\"\u7ae0\u8282.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADCg==",
                    "title": "\u00a77\u00a76\u00a7l\u78b3\u677f",
                    "tooltip": "<strong>\u78b3\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u751f\u78b3\u7f51"
                },
                {
                    "name": "\u4e59\u70ef\u916e",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/850.png",
                    "x": 528.0,
                    "y": 456.0,
                    "data": "\u5e0c\u671b\u4f60\u5728\u751f\u4ea7\u71c3\u6599\u7684\u8fc7\u7a0b\u4e2d\u7559\u4e0b\u4e86\u4e00\u4e9b\u786b\u9178.\u8981\u662f\u6ca1\u7559\u7684\u8bdd,\u5c31\u591a\u505a\u4e00\u70b9\u5427,\u786b\u9178\u6c38\u8fdc\u4e0d\u5acc\u591a.\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u4e59\u9178\u548c\u786b\u9178\u5c06\u53d1\u751f\u53cd\u5e94\u5f97\u5230\u4e59\u70ef\u916e.</br></br>\u7559\u70b9\u4e59\u70ef\u916e\u5230HV,\u4f60\u4f1a\u9700\u8981\u5b83\u6765\u5408\u6210\u56db\u785d\u57fa\u7532\u70f7,\u6700\u7ec8\u5236\u6210\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADUg==",
                    "title": "\u00a76\u00a7l\u4e59\u70ef\u916e",
                    "tooltip": "<strong>\u4e59\u70ef\u916e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5316\u5b66\u8bfe,\u7b2c\u4e8c\u90e8\u5206</br>\u4e59\u9178"
                },
                {
                    "name": "\u751f\u7845\u7c89",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3211.png",
                    "x": 444.0,
                    "y": 348.0,
                    "data": "\u6240\u6709\u5355\u6676\u7845(\u4ee5\u53ca\u6676\u5706\u3001\u82af\u7247\u548c\u7535\u8def)\u7684\u5236\u9020\u90fd\u9700\u8981\u7845.\u56e0\u6b64,\u7845\u662f\u4e00\u79cd\u00a7o\u975e\u5e38\u91cd\u8981\u7684\u6750\u6599\u00a7r.</br></br>\u4f7f\u7528\u65b0\u9020\u7684\u7535\u89e3\u673a,\u4f60\u53ef\u4ee5\u4ece\u8bb8\u591a\u4e0d\u540c\u6765\u6e90\u83b7\u5f97\u751f\u7845\u7c89.\u6216\u8005,\u4f60\u4e5f\u53ef\u4ee5\u79bb\u5fc3\u7ea2\u77f3.\u4f60\u8fd8\u53ef\u4ee5\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d,\u5c06\u9541\u7c89\u4e0e\u4e8c\u6c27\u5316\u7845\u8fdb\u884c\u53cd\u5e94,\u7136\u540e\u5728\u7535\u89e3\u673a\u4e2d\u56de\u6536\u9541,\u8fd9\u540c\u65f6\u4f1a\u7ed9\u4f60\u5e26\u6765\u5927\u91cf\u7684\u6c27\u6c14.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMiw==",
                    "title": "\u00a76\u00a7l\u751f\u7845\u7c89",
                    "tooltip": "<strong>\u751f\u7845\u7c89</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e8c\u6c27\u5316\u7845</br>\u7535\u89e3\u4e07\u7269"
                },
                {
                    "name": "\u4fbf\u643a\u63a2\u77ff\u4eea",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1482.png",
                    "x": 732.0,
                    "y": 60.0,
                    "data": "\u968f\u7740\u6280\u672f\u7684\u53d1\u5c55,\u4f60\u627e\u5230\u4e86\u4e00\u79cd\u5bfb\u627e\u77ff\u77f3\u7684\u65b9\u5f0f.</br></br>\u5f88\u4e0d\u5e78,\u73b0\u6709\u6280\u672f\u8fd8\u65e0\u6cd5\u4f7f\u5176\u53ef\u4fee\u590d\u6216\u53ef\u5145\u7535,\u6240\u4ee5\u6bcf\u6b21\u5b83\u635f\u574f\u540e\u4f60\u90fd\u5f97\u505a\u4e2a\u65b0\u7684.\u7535\u538b\u7b49\u7ea7\u8d8a\u9ad8\u6548\u679c\u8d8a\u597d,\u7528\u6750\u8d8a\u597d\u8010\u4e45\u8d8a\u9ad8.</br></br>\u5b83\u4e0d\u50cf\u5730\u9707\u52d8\u63a2\u8005\u4e00\u6837\u9700\u8981\u5236\u4f5c\u6210\u4e66,\u611f\u8c22Visual-Prospecting,\u4f60\u53ef\u4ee5\u5728\u5730\u56fe\u4e0a\u770b\u5230\u626b\u63cf\u7ed3\u679c.</br></br>\u5f88\u96be\u9009\u62e9\u5236\u4f5cMV\u63a2\u77ff\u4eea\u7684\u597d\u6750\u6599.\u8fd9\u91cc\u7ed9\u4f60\u63d0\u4f9b\u51e0\u4e2a\u5efa\u8bae: \u5bf9\u5e94\u9636\u6bb5,\u6750\u6599,\u63a2\u6d4b\u8303\u56f4,\u548c\u5b83\u4eec\u7684\u5e73\u5747\u53ef\u63a2\u6d4b\u77ff\u8109\u6570\u91cf:</br></br>LV-\u9492\u94a2-3x3-50</br>MV-\u9492\u94a2-3x3-213</br>HV-\u8109\u51b2\u5408\u91d1-5x5-299</br>EV-\u6697\u5f71\u91d1\u5c5e-7x7-1080</br>IV-\u5965\u5229\u54c8\u94a2-7x7-2649</br></br>\u5982\u4f60\u6240\u89c1,\u968f\u7740\u79d1\u6280\u7b49\u7ea7\u7684\u63d0\u5347,\u63a2\u77ff\u4eea\u8d8a\u6765\u8d8a\u597d\u7528,\u6240\u4ee5\u5f53\u4f60\u89c9\u5f97\u9700\u8981\u4e00\u4e2a\u7684\u65f6\u5019,\u4e0d\u8981\u72b9\u8c6b\u76f4\u63a5\u6413\u51c6\u6ca1\u9519,\u7528\u7684\u6750\u6599\u8d8a\u9ad8\u8d8a\u597d.</br></br>\u795d\u4f60\u597d\u8fd0!</br></br>\u00a73",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFyg==",
                    "title": "\u00a75\u00a76\u00a7l\u4fbf\u643a\u63a2\u77ff\u4eea",
                    "tooltip": "<strong>\u4fbf\u643a\u63a2\u77ff\u4eea</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6"
                },
                {
                    "name": "\u6c2f\u4e59\u70ef",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1872.png",
                    "x": 612.0,
                    "y": 300.0,
                    "data": "\u6c2f\u4e59\u70ef\u662f\u5236\u4f5c\u5148\u8fdb\u7684PVC\u7269\u54c1\u7ba1\u9053\u7684\u57fa\u7840\u4ea7\u54c1.PVC\u7269\u54c1\u7ba1\u9053\u7528\u4e8e\u5408\u6210LuV\u673a\u5668\u6216\u8d85\u7ea7\u7f38II\u7684\u5bc6\u5c01\u673a\u68b0\u65b9\u5757.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHUA==",
                    "title": "\u00a76\u00a7l\u6c2f\u4e59\u70ef",
                    "tooltip": "<strong>\u6c2f\u4e59\u70ef</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e59\u70ef"
                },
                {
                    "name": "\u96c6\u6210\u903b\u8f91\u7535\u8def1",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/794.png",
                    "x": 444.0,
                    "y": 564.0,
                    "data": "\u60f3\u8981\u5236\u9020HV\u673a\u5668,\u5c31\u9700\u8981HV\u7535\u8def\u677f.\u4f60\u80fd\u5236\u9020\u7684\u7b2c\u4e00\u79cdHV\u7535\u8def\u677f\u662fIC2\u7684\u9ad8\u7ea7\u7535\u8def\u677f. \u4f60\u9700\u8981\u5148\u5236\u9020LV\u7535\u8def,\u7136\u540e\u5957\u5a03\u5236\u9020MV\u7535\u8def,\u6700\u540e\u518d\u6b21\u5957\u5a03\u5236\u6210HV\u7535\u8def.\u9012\u5f52\u5408\u6210!\u59cb\u4e8eLV\u96c6\u6210\u903b\u8f91\u7535\u8def\u677f. \u800c\u4e14\u4f60\u4e0d\u80fd\u7528IC2\u7684\u57fa\u7840\u7535\u8def\u677f\u5957\u5a03.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADGg==",
                    "title": "\u00a76\u00a7l\u96c6\u6210\u903b\u8f91\u7535\u8def",
                    "tooltip": "<strong>\u96c6\u6210\u903b\u8f91\u7535\u8def1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u96c6\u6210\u903b\u8f91\u7535\u8def\u548cRAM\u82af\u7247</br>\u57fa\u7840\u7535\u8def\u7ec4\u88c5\u673a"
                },
                {
                    "name": "\u7845\u6676\u5706",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/792.png",
                    "x": 264.0,
                    "y": 420.0,
                    "data": "\u5c06\u5355\u6676\u7845\u653e\u5165\u677f\u6750\u5207\u5272\u673a\u5904\u7406,\u53ef\u4ee5\u83b7\u5f97\u7845\u6676\u5706. \u4f60\u6700\u597d\u8d76\u7d27\u5236\u4f5c\u4e00\u53f0MV\u5207\u5272\u673a,\u4e4b\u540e\u5236\u4f5cRAM\u3001IC,\u53ca\u5176\u5b83\u82af\u7247\u65f6\u90fd\u4f1a\u7528\u5230\u5b83.</br></br>\u5982\u679c\u4f60\u624b\u4e0a\u5df2\u7ecf\u6709\u4e86\u805a\u4e59\u70ef\u7684\u8bdd,\u4f7f\u7528\u6676\u5706\u5236\u9020\u4e8c\u6781\u7ba1\u7684\u4ea7\u7387\u4f1a\u66f4\u9ad8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADGA==",
                    "title": "\u00a76\u00a7l\u7845\u6676\u5706",
                    "tooltip": "<strong>\u7845\u6676\u5706</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5355\u6676\u7845"
                },
                {
                    "name": "\u7532\u9187",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/843.png",
                    "x": 156.0,
                    "y": 252.0,
                    "data": "\u7532\u9187\u53ef\u4ee5\u4f5c\u4e3a\u5185\u71c3\u53d1\u7535\u673a\u7684\u71c3\u6599.\u6bcf\u5355\u4f4d(1000mB)\u7684\u7532\u9187\u53ef\u4ee5\u4ea7\u751f84,000EU\u7684\u7535\u529b. \u7532\u9187\u4e5f\u662f\u5236\u9020\u751f\u7269\u67f4\u6cb9\u6216\u8005\u5176\u4ed6\u6db2\u4f53(\u5982\u6c2f\u7532\u70f7\u3001\u4e59\u9178\u7532\u916f\u3001\u4e8c\u7532\u80fa)\u7684\u91cd\u8981\u539f\u6599.\u5b83\u4e5f\u7528\u4e8e\u5236\u9020\u67d0\u79cd\u706b\u7bad\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADSw==",
                    "title": "\u00a76\u00a7l\u7532\u9187",
                    "tooltip": "<strong>\u7532\u9187</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53d1\u9175\u751f\u7269\u8d281"
                },
                {
                    "name": "\u751f\u7269\u6709\u673a\u7f51",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/774.png",
                    "x": 300.0,
                    "y": 108.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u4fdd\u62a4\u73af\u5883,\u53ef\u4ee5\u7528\u9ad8\u538b\u91dc\u5c0616\u4e2a\u690d\u7269\u7403\u5236\u6210\u672a\u52a0\u5de5\u7684\u751f\u7269\u7ea4\u7ef4.\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5217\u6db2\u4f53:  \u00a74-\u751f\u7269\u8d28:33\uff05\u51e0\u7387. -\u7532\u9187:50\uff05\u51e0\u7387. -\u67f4\u6cb9:90\uff05\u51e0\u7387. -\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9:100\uff05\u51e0\u7387.  \u00a7r\u7136\u800c,\u60f3\u8981\u901a\u8fc7\u8fd9\u79cd\u65b9\u6cd5\u5236\u9020\u78b3\u677f,\u4f60\u8fd8\u9700\u8981\u5de5\u4e1a\u9ad8\u7089.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADBg==",
                    "title": "\u00a76\u00a7l\u751f\u7269\u6709\u673a\u7f51",
                    "tooltip": "<strong>\u751f\u7269\u6709\u673a\u7f51</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5316\u5c18\u4e3a\u6676</br>\u690d\u7269\u7403"
                },
                {
                    "name": "\u96c6\u6210\u903b\u8f91\u7535\u8def\u548cRAM\u82af\u7247",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/837.png",
                    "x": 336.0,
                    "y": 492.0,
                    "data": "\u5148\u8fdb\u7684\u7535\u8def\u677f\u9700\u8981\u96c6\u6210\u903b\u8f91\u7535\u8def\u548cRAM\u82af\u7247,\u4f60\u53ef\u4ee5\u901a\u8fc7\u5207\u5272\u96c6\u6210\u903b\u8f91\u7535\u8def\u6676\u5706\u548cRAM\u82af\u7247\u6676\u5706\u6765\u83b7\u5f97\u4ed6\u4eec.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADRQ==",
                    "title": "\u00a76\u00a7l\u96c6\u6210\u903b\u8f91\u7535\u8def\u548cRAM\u82af\u7247",
                    "tooltip": "<strong>\u96c6\u6210\u903b\u8f91\u7535\u8def\u548cRAM\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a"
                },
                {
                    "name": "\u4e09\u6c2f\u7845\u70f7",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1549.png",
                    "x": 468.0,
                    "y": 396.0,
                    "data": "\u7b2c\u4e8c\u6761\u8def\u7ebf\u53ef\u80fd\u66f4\u597d!\u53ea\u9700\u8981\u4e24\u4e2a\u5355\u65b9\u5757\u5316\u5b66\u53cd\u5e94\u91dc,\u4f60\u5c31\u53ef\u4ee5\u5236\u4f5c\u592a\u9633\u80fd\u7ea7\u7845.\u7b2c\u4e00\u6b65,\u5236\u4f5c\u4e00\u4e9b\u4e09\u6c2f\u7845\u70f7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGDQ==",
                    "title": "\u00a76\u00a7l\u4e09\u6c2f\u7845\u70f7",
                    "tooltip": "<strong>\u4e09\u6c2f\u7845\u70f7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u751f\u7845\u7c89"
                },
                {
                    "name": "\u4e8c\u6c27\u5316\u7845",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1819.png",
                    "x": 384.0,
                    "y": 348.0,
                    "data": "\u4e3a\u81ea\u5df1\u51c6\u5907\u4e00\u4e9b\u4e8c\u6c27\u5316\u7845\u5427! \u5c06\u5176\u914d\u5408\u78b3\u7c89\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u7194\u70bc,\u662f\u83b7\u53d6\u751f\u7845\u952d\u7684\u6700\u4f73\u65b9\u5f0f.\u751f\u7845\u952d\u6709\u591a\u79cd\u7528\u9014,\u4e0d\u8fc7\u6700\u91cd\u8981\u7684\u7528\u9014\u5c31\u662f\u5c06\u5176\u518d\u6b21\u6253\u7c89,\u83b7\u5f97\u751f\u7845\u7c89. \u4f60\u8fd8\u53ef\u4ee5\u501f\u52a9\u94dd\u6216\u9541,\u5bf9\u4e8c\u6c27\u5316\u7845\u8fdb\u884c\u5316\u5b66\u5904\u7406,\u5c06\u5176\u8f6c\u5316\u4e3a\u751f\u7845\u7c89.</br></br>\u79bb\u5fc3\u73bb\u7483\u7c89\u6216\u662f\u7535\u89e3\u6c99\u5b50\u90fd\u53ef\u4ee5\u8f7b\u6613\u83b7\u5f97\u4e8c\u6c27\u5316\u7845.</br></br>\u5982\u679c\u4f60\u624b\u4e0a\u53ea\u6709\u751f\u7845\u7c89,\u53c8\u6025\u9700\u4e8c\u6c27\u5316\u7845,\u53ef\u4ee5\u4f7f\u7528\u7535\u5f27\u7089\u6216\u9ad8\u538b\u91dc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHGw==",
                    "title": "\u00a76\u00a7l\u4e8c\u6c27\u5316\u7845",
                    "tooltip": "<strong>\u4e8c\u6c27\u5316\u7845</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u89e3\u4e07\u7269"
                },
                {
                    "name": "\u7535\u89e3\u7c98\u571f",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/760.png",
                    "x": 348.0,
                    "y": 324.0,
                    "data": "\u7ffb\u9605NEI\u7684\u8fc7\u7a0b\u4e2d,\u4f60\u5e94\u8be5\u53d1\u73b0\u4e86\u7535\u89e3\u7c98\u571f\u53ef\u4ee5\u4e3a\u4f60\u5e26\u6765\u6c27\u5316\u94dd\u3001\u4e8c\u6c27\u5316\u7845\u3001\u94a0\u548c\u9502\u7c89.\u8fd8\u6709\u6c34...\u4e0d\u8fc7\u4f60\u5e94\u8be5\u4f1a\u76f4\u63a5\u9500\u6bc1,\u5bf9\u5427? \u5728\u5ce1\u8c37(canyon)\u3001\u53f0\u539f(mesa)\u548c\u7a00\u6811\u6c99\u6f20(lush-desert)\u751f\u7269\u7fa4\u7cfb\u53ef\u4ee5\u627e\u5230\u5927\u91cf\u7684\u6709\u8272\u7c98\u571f\u5757,\u5c06\u4e4b\u7814\u78e8\u6210\u7c98\u571f\u7c89.</br></br>\u5728MV\u9636\u6bb5,\u6709\u975e\u5e38\u591a\u7684\u65b9\u5f0f\u83b7\u53d6\u6c27\u5316\u94dd,\u8db3\u4ee5\u652f\u6301\u4f60\u8fbe\u5230EV\u9636\u6bb5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC-A==",
                    "title": "\u00a76\u00a7l\u7535\u89e3\u7c98\u571f",
                    "tooltip": "<strong>\u7535\u89e3\u7c98\u571f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u89e3\u4e07\u7269"
                },
                {
                    "name": "\u533a\u5757\u52a0\u8f7d",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1180.png",
                    "x": 996.0,
                    "y": 276.0,
                    "data": "\u8ba9\u6211\u4eec\u5236\u9020\u4e00\u4e9b\u951a\u6765\u4fdd\u6301\u533a\u5757\u52a0\u8f7d\u5427.\u5236\u4f5c\u951a\u6240\u9700\u7684\u81f4\u5bc6\u677f\u53ef\u4ee5\u4f7f\u7528MV\u5377\u677f\u673a\u751f\u4ea7. \u8fd9\u4e9b\u951a\u53ef\u4ee5\u52a0\u8f7d3x3\u533a\u5757,\u4f60\u9700\u8981\u52a0\u8f7d\u5668\u786c\u5e01\u6216\u672b\u5f71\u73cd\u73e0\u6765\u9a71\u52a8\u8fd9\u4e9b\u951a.</br></br>1\u4e2a\u672b\u5f71\u73cd\u73e0\u53ef\u4ee5\u4e3a\u4e2a\u4eba\u951a\u4f9b\u80fd4\u5c0f\u65f6,\u4e3a\u88ab\u52a8\u951a\u4f9b\u80fd1\u5c0f\u65f6.\u4e16\u754c\u951a\u9700\u8981\u4f7f\u7528\u533a\u5757\u52a0\u8f7d\u5668\u786c\u5e01\u6765\u9a71\u52a8(1\u7ea7\u63d0\u4f9b12\u4e2a\u5c0f\u65f6\u52a0\u8f7d\u65f6\u95f4,2\u7ea724\u5c0f\u65f6,3\u7ea748\u5c0f\u65f6).</br></br>\u00a7a\u4e2a\u4eba\u951a\u00a7r\u53ea\u6709\u5728\u73a9\u5bb6\u5728\u7ebf\u65f6\u624d\u6709\u6548.</br></br>\u00a79\u88ab\u52a8\u951a\u00a7r\u5728\u73a9\u5bb6\u767b\u5f55\u540e\u5373\u751f\u6548,\u76f4\u5230\u670d\u52a1\u5668\u91cd\u542f\u624d\u4f1a\u5931\u6548.</br></br>[warn]\u4e16\u754c\u951a[/warn]\u53ea\u8981\u670d\u52a1\u5668\u8fd0\u884c,\u5c31\u4e00\u76f4\u6709\u6548.\u91cd\u542f\u540e\u4ecd\u7136\u53ef\u4ee5\u5373\u523b\u751f\u6548.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEnA==",
                    "title": "\u00a76\u00a7l\u533a\u5757\u52a0\u8f7d",
                    "tooltip": "<strong>\u533a\u5757\u52a0\u8f7d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fdb\u9636\u5377\u677f\u673a"
                },
                {
                    "name": "\u4e59\u70ef",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/847.png",
                    "x": 612.0,
                    "y": 348.0,
                    "data": "\u4f60\u53ef\u4ee5\u7528\u5f88\u591a\u4e0d\u540c\u7684\u65b9\u6cd5\u6765\u5236\u9020\u4e59\u70ef.</br></br>-\u4e59\u9187\u548c\u786b\u9178\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u53cd\u5e94</br>-\u5316\u5b66\u8131\u6c34\u4e59\u9187</br>-\u5728\u84b8\u998f\u5ba4\u4e2d\u84b8\u998f\u5404\u79cd\u6c14\u4f53(\u6bd4\u5982\u6728\u70ad\u6c14)</br>-\u4e5f\u53ef\u4ee5\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u4f7f\u7528\u6c22\u6c14\u6216\u84b8\u6c7d\u88c2\u89e3\u77f3\u8111\u6cb9\u3001\u71c3\u6cb9\u548c\u70bc\u6cb9\u6c14</br>- \u5728\u77f3\u6cb9\u5de5\u4e1a\u7ae0\u8282\u83b7\u5f97\u66f4\u591a\u4fe1\u606f</br></br>[note]\u4f60\u4eca\u540e\u6240\u9700\u8981\u7684\u4e59\u70ef\u53ef\u8fdc\u4e0d\u6b62\u56db\u4e2a\u5355\u5143\u8fd9\u4e48\u70b9\uff0c\u591a\u591a\u7559\u610f\u3002[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADTw==",
                    "title": "\u00a76\u00a7l\u4e59\u70ef",
                    "tooltip": "<strong>\u4e59\u70ef</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5316\u5b66\u8bfe,\u7b2c\u4e8c\u90e8\u5206</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u751f\u7269\u8d28",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1323.png",
                    "x": 156.0,
                    "y": 156.0,
                    "data": "\u4e0d\u7ba1\u4f60\u9009\u7528IC2\u8fd8\u662fGT\u6765\u5236\u4f5c\u751f\u7269\u8d28,\u6c34\u548c\u7ce0\u90fd\u662f\u5fc5\u987b\u7684\u6750\u6599.</br></br>\u4f60\u8fd8\u53ef\u4ee5\u7528\u70ed\u89e3\u7089\u5236\u9020\u751f\u7269\u8d28,\u800c\u4e14\u66f4\u6709\u6548\u7387.</br></br>\u8bf7\u6ce8\u610f,\u6797\u4e1a\u8fd8\u6709\u81ea\u5df1\u7684\u751f\u7269\u8d28.\u4e5f\u53ef\u4ee5\u5236\u6210\u7c7b\u4f3c\u7684\u53d1\u9175\u751f\u7269\u8d28.\u8bf7\u81ea\u884c\u9009\u62e9\u751f\u4ea7\u54ea\u79cd\u751f\u7269\u8d28.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFKw==",
                    "title": "\u00a75\u00a76\u00a7l\u751f\u7269\u8d28",
                    "tooltip": "<strong>\u751f\u7269\u8d28</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u65b9\u6cd5\u4e00:IC2\u6d41\u4f53/\u56fa\u4f53\u88c5\u7f50\u673a</br>\u8def\u7ebf\u4e09\uff1a\u70ed\u89e3\u7089</br>\u65b9\u6cd5\u4e8c:\u917f\u9020"
                },
                {
                    "name": "\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/138.png",
                    "x": 840.0,
                    "y": 132.0,
                    "data": "....\u6211\u4eec\u6709\u997c\u5e72.(...we have cookies.)",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAig==",
                    "title": "\u00a75\u00a76\u00a7l\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)",
                    "tooltip": "<strong>\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>IO,IO,\u6211\u4eec\u53bbEnderIO"
                },
                {
                    "name": "\u7535\u89e3\u787c\u7802",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2043.png",
                    "x": 504.0,
                    "y": 276.0,
                    "data": "\u6709\u4e86MV\u7535\u89e3\u673a,\u4f60\u5c31\u80fd\u4ece\u787c\u7802\u4e2d\u7535\u89e3\u51fa\u787c.\u8fd9\u79cd\u5143\u7d20\u7a0d\u540e\u53ef\u7528\u4e8e\u5236\u4f5c\u787c\u73bb\u7483\u548c\u73bb\u7483\u7ea4\u7ef4,\u4f46\u73b0\u5728\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u5236\u4f5c\u6709\u7cbe\u786e\u5bb9\u91cf\u7684\u5bb9\u91cf\u74f6.\u8fd9\u5bf9\u67d0\u4e9b\u53ea\u9700\u5c11\u91cf\u6d41\u4f53\u7684\u914d\u65b9\u5f88\u6709\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH-w==",
                    "title": "\u00a76\u00a7l\u7535\u89e3\u787c\u7802",
                    "tooltip": "<strong>\u7535\u89e3\u787c\u7802</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u89e3\u4e07\u7269"
                },
                {
                    "name": "\u6c22\u6c27\u5316\u94a01",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/849.png",
                    "x": 348.0,
                    "y": 252.0,
                    "data": "\u4f60\u9700\u8981\u5236\u9020\u4e00\u4e9b\u6c22\u6c27\u5316\u94a0(\u7528\u4e8e\u751f\u7269\u67f4\u6cb9\u53ca\u5176\u4ed6),\u4f60\u53ef\u4ee5\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u901a\u8fc7\u94a0\u548c\u6c34\u7684\u53cd\u5e94\u5f97\u5230\u6c22\u6c27\u5316\u94a0.\u4e5f\u53ef\u4ee5\u5148\u5c06\u76d0\u548c\u6c34\u6405\u62cc\u6210\u76d0\u6c34,\u7136\u540e\u901a\u8fc7\u5728\u7535\u89e3\u673a\u4e2d\u7535\u89e3\u76d0\u6c34\u6765\u5f97\u5230\u5b83.</br></br>\u6c22\u6c27\u5316\u94a0\u4e5f\u7528\u4e8e\u8fdb\u9636\u7684\u94dd\u751f\u4ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADUQ==",
                    "title": "\u00a76\u00a7f\u00a76\u00a7l\u6c22\u6c27\u5316\u94a0",
                    "tooltip": "<strong>\u6c22\u6c27\u5316\u94a01</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u7b80\u6613RF\u80fd\u6e90:\u56fa\u4f53",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/131.png",
                    "x": 936.0,
                    "y": 180.0,
                    "data": "\u8fd9\u53f0\u673a\u5668\u80fd\u901a\u8fc7\u71c3\u70e7\u7164\u70ad\u4f5c\u4e3a\u71c3\u6599\u4ea7\u751fRF\u80fd\u91cf,\u8db3\u591f\u4f9b\u7ed9\u4f60\u7684\u57fa\u7840\u673a\u5668.\u8fd9\u53f0\u673a\u5668\u8fd8\u53ef\u4ee5\u63a5\u53d7\u538b\u7f29\u65b9\u5757\u71c3\u6599\u6216\u8005\u591a\u91cd\u538b\u7f29\u65b9\u5757\u71c3\u6599.\u4e00\u5757\u70e7\u4e00\u5e74? \u4f60\u540c\u6837\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5\u7535\u5bb9\u6765\u63d0\u5347\u8fd9\u53f0\u673a\u5668\u7684\u8f93\u51fa\u548c\u6548\u7387.</br></br>GT\u5bfc\u7ebf\u548c\u53d8\u538b\u5668\u53ef\u4ee5\u5c06EU\u8f6c\u6362\u4e3aRF,\u5374\u65e0\u6cd5\u9006\u5411\u8f6c\u6362.\u8bf7\u6ce8\u610f,eNet\u4fee\u6539\u4e86GT\u7535\u7f51,\u8981\u6c42\u81f3\u5c11\u5305\u542b\u4e00\u4e2aGT\u7528\u7535\u5668-\u4e00\u4e2a\u5339\u914d\u7535\u538b\u7684\u673a\u5668\u5916\u58f3\u5373\u53ef.</br></br>\u800cEIO\u673a\u5668\u3001GT\u5bfc\u7ebf\u548c\u7ebf\u7f06\u53ef\u4ee5\u6dcb\u96e8.</br></br>\u8fd9\u53f0\u673a\u5668\u53ef\u80fd\u5bf9\u57fa\u56e0\u5de5\u4e1a\u7684\u673a\u5668\u6bd4\u8f83\u6709\u7528,\u56e0\u4e3a\u5b83\u4eec\u76f4\u63a5\u8fde\u63a5GT\u5bfc\u7ebf\u65f6\u4f1a\u6d88\u8017\u66f4\u591a\u7535\u80fd-\u800c\u6797\u4e1a\u7684\u673a\u5668\u548cEIO\u7684\u673a\u5668\u5c31\u6ca1\u6709\u8fd9\u79cd\u95ee\u9898(\u9664\u4e86\u70ed\u7535\u5b50\u52a0\u5de5\u53f0). \u6216\u4f7f\u7528\u7535\u5bb9\u5e93\u4e2d\u8f6c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAgw==",
                    "title": "\u00a76\u00a7l\u7b80\u6613RF\u80fd\u6e90:\u56fa\u4f53",
                    "tooltip": "<strong>\u7b80\u6613RF\u80fd\u6e90:\u56fa\u4f53</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u673a\u5668\u6846\u67b6"
                },
                {
                    "name": "\u65b9\u6cd5\u4e8c:\u917f\u9020",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/735.png",
                    "x": 156.0,
                    "y": 108.0,
                    "data": "\u5982\u679c\u4f60\u6bd4\u8f83\u8d70\u8fd0,\u627e\u5230\u4e86\u4e00\u4e2a\u917f\u9020\u53f0;\u6216\u8005\u5df2\u7ecf\u5f00\u59cb\u63a2\u7d22\u795e\u79d8\u65f6\u4ee3mod,\u6709\u80fd\u529b\u5236\u4f5c\u4e00\u4e2a\u917f\u9020\u53f0\u7684\u8bdd,\u5c31\u53ef\u4ee5\u75281000mB\u6c34\u52a0\u4e0a\u4e00\u4e2a\u7ce0\u5f97\u52301000mB\u751f\u7269\u8d28.\u6362\u7528\u84b8\u998f\u6c34\u540e,\u4ea7\u7387\u66f4\u9ad8\u4e14\u901f\u5ea6\u66f4\u5feb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC3w==",
                    "title": "\u00a76\u00a7l\u65b9\u6cd5\u4e8c:\u917f\u9020",
                    "tooltip": "<strong>\u65b9\u6cd5\u4e8c:\u917f\u9020</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ce0"
                },
                {
                    "name": "\u4e59\u91871",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/844.png",
                    "x": 204.0,
                    "y": 204.0,
                    "data": "\u4e59\u9187\u53ef\u4ee5\u4f5c\u4e3a\u5185\u71c3\u53d1\u7535\u673a\u7684\u71c3\u6599.\u6bcf\u5355\u4f4d(1000mB)\u7684\u4e59\u9187\u53ef\u4ee5\u4ea7\u751f192,000EU\u7684\u7535\u529b.\u4e59\u9187\u4e5f\u662f\u5236\u9020\u751f\u7269\u67f4\u6cb9\u6216\u8005\u5176\u4ed6\u6db2\u4f53(\u5982\u4e59\u70ef)\u7684\u91cd\u8981\u539f\u6599",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADTA==",
                    "title": "\u00a76\u00a7l\u4e59\u9187",
                    "tooltip": "<strong>\u4e59\u91871</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53d1\u9175\u751f\u7269\u8d281"
                },
                {
                    "name": "\u673a\u5668\u6846\u67b6",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/129.png",
                    "x": 984.0,
                    "y": 132.0,
                    "data": "\u6240\u6709\u672b\u5f71\u63a5\u53e3\u7684\u673a\u5668\u90fd\u9700\u8981\u673a\u5668\u6846\u67b6,\u5b83\u7684\u5408\u6210\u914d\u65b9\u8ddf\u4ee5\u524d\u51e0\u4e4e\u662f\u4e00\u6837\u7684,\u9664\u4e86\u4f60\u9700\u8981\u7684\u662f\u677f\u800c\u4e0d\u662f\u952d.\u4f46\u8fd9\u5e94\u8be5\u4e0d\u6210\u95ee\u9898...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAgQ==",
                    "title": "\u00a76\u00a7l\u673a\u5668\u6846\u67b6",
                    "tooltip": "<strong>\u673a\u5668\u6846\u67b6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bd\u77ff\u77f3"
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u50a8\u7f50",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/130.png",
                    "x": 1032.0,
                    "y": 180.0,
                    "data": "\u5728\u6b64\u4e4b\u524d,\u4f60\u8fd8\u8981\u7528\u624b\u63a8\u8f66\u5e26\u7740BC\u50a8\u7f50\u6765\u643a\u5e26\u6db2\u4f53\u5230\u5904\u8dd1,\u8fd9\u4e8b\u5e72\u8d77\u6765\u771f\u53eb\u4e00\u4e2a\u75db\u82e6,\u8fd8\u6162. \u800c\u8fd9\u4e9bEIO\u7684\u6d41\u4f53\u7bb1\u80fd\u591f\u81ea\u5df1\u8f93\u51fa/\u62bd\u8fdb\u6d41\u4f53,\u56e0\u4e3a\u5b83\u4eec\u5185\u7f6e\u4e86\u4e00\u4e9b\u7531\u9b54\u6cd5\u80fd\u6e90\u9a71\u52a8\u7684\u6cf5,\u771f\u65b9\u4fbf.</br></br>\u9ad8\u538b\u6d41\u4f53\u7bb1\u5177\u6709\u4e24\u500d\u7684\u5bb9\u79ef.</br></br>[note]\u4f46\u662f\u8981\u5c0f\u5fc3,\u5b83\u4f1a\u541e\u6389\u6c34\u5355\u5143,\u4e0d\u4f1a\u8fd4\u8fd8\u7a7a\u5355\u5143.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAgg==",
                    "title": "\u00a76\u00a7l\u4fbf\u643a\u5f0f\u50a8\u7f50",
                    "tooltip": "<strong>\u4fbf\u643a\u5f0f\u50a8\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u673a\u5668\u6846\u67b6"
                },
                {
                    "name": "\u7518\u6cb9",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1226.png",
                    "x": 252.0,
                    "y": 204.0,
                    "data": "\u7518\u6cb9\u662f\u751f\u4ea7\u751f\u7269\u67f4\u6cb9\u7684\u526f\u4ea7\u7269,\u4f46\u5b83\u771f\u7684\u5f88\u6709\u7528. \u5728EV\u9636\u6bb5,\u7518\u6cb9\u53ef\u4ee5\u7528\u6765\u5236\u9020\u73af\u6c27\u6811\u8102,\u4ee5\u53ca...\u6211\u731c\u8fd8\u6709\u70b8\u836f. \u4f46\u662fTNT\u548c\u5de5\u4e1aTNT(iTNT)\u662f\u66f4\u597d\u7684\u9009\u62e9.</br></br>[note]PS\uff1a \u70b8\u836f\u5e76\u4e0d\u662f\u5fc5\u9700\u54c1,\u800c\u73af\u6c27\u6811\u8102\u6709\u5176\u4ed6\u7684\u5236\u9020\u65b9\u5f0f,\u5982\u679c\u4f60\u5e76\u4e0d\u60f3\u8981\u751f\u7269\u67f4\u6cb9\u7684\u8bdd.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEyg==",
                    "title": "\u00a76\u00a7l\u7518\u6cb9",
                    "tooltip": "<strong>\u7518\u6cb9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u751f\u7269\u67f4\u6cb91"
                },
                {
                    "name": "\u52a0\u901f\u7f13\u6162\u7684\u673a\u5668",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2110.png",
                    "x": 960.0,
                    "y": 396.0,
                    "data": "\u8bb8\u591amod\u6ca1\u6709\u52a0\u901f\u7f13\u6162\u673a\u5668\u7684\u65b9\u6cd5.\u4e3a\u6b64,\u4f60\u9700\u8981\u4e00\u53f0GT\u4e16\u754c\u52a0\u901f\u5668.\u4f46\u662f\u5b83\u4f1a\u6d88\u8017\u5927\u91cf\u7535\u529b,\u6240\u4ee5\u4f60\u7684\u7535\u529b\u57fa\u7840\u8bbe\u65bd\u6700\u597d\u505a\u597d\u51c6\u5907.tooltip\u4f1a\u5217\u51fa\u53ef\u63d0\u4f9b\u7684\u6027\u80fd\u63d0\u5347.\u5bf9\u4e8e\u57fa\u4e8e\u65b9\u5757\u7684\u52a0\u901f,\u4e16\u754c\u52a0\u901f\u5668\u53ef\u4ee5\u63d0\u4f9b\u8303\u56f4\u52a0\u901f.\u5bf9\u4e8e\u5b9e\u4f53\u65b9\u5757(\u5927\u591a\u6570\u673a\u5668),\u5b83\u53ea\u80fd\u52a0\u901f\u7d27\u8d34\u81ea\u5df1\u7684\u65b9\u5757,\u800c\u4e14\u9700\u8981\u4f7f\u7528\u87ba\u4e1d\u5200\u5207\u6362\u6a21\u5f0f.\u6b64\u6a21\u5f0f\u5c06\u6d88\u8017\u53cc\u500d\u7684\u80fd\u91cf.</br></br>[warn]\u52a0\u901f\u5668\u5bf9GT\u673a\u5668\u65e0\u6548![/warn]\u5bf9\u4e8eGT,\u771f\u7684\u60f3\u52a0\u901f\u7684\u8bdd,\u6570\u91cf\u548c\u5347\u538b\u624d\u662f\u738b\u9053.</br></br>\u4f60\u53ef\u4ee5\u4f7f\u7528\u6273\u624b\u6765\u5207\u6362\u52a0\u901f\u500d\u7387. \u500d\u7387\u5c06\u4f1a\u5148\u53d8\u4e3a\u6700\u5c0f\u503c,\u7136\u540e\u6bcf\u6b21\u53f3\u952e\u63d0\u5347\u4e00\u4e2a\u7b49\u7ea7. \u5b83\u5c06\u6d88\u8017\u8be5\u7b49\u7ea7\u7684\u80fd\u91cf(\u5e76\u8fdb\u884c\u52a0\u901f),\u673a\u5236\u4e0eGT\u8d85\u9891\u4e00\u81f4,2x\u901f\u5ea6,4x\u8017\u80fd.</br></br>\u00a73*\u867d\u7136tooltip\u4e0a\u8bf48A,\u4f46\u8fd9\u662f\u5b83\u7684\u6700\u5927\u53ef\u63a5\u6536\u7535\u6d41,\u800c\u4e0d\u662f\u4f7f\u7528\u7535\u6d41. \u5728\u65b9\u5757\u6a21\u5f0f(\u9ed8\u8ba4)\u4e0b3A,\u5728\u5b9e\u4f53\u65b9\u5757(TE)\u6a21\u5f0f\u4e0b6A.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIPg==",
                    "title": "\u00a76\u00a7l\u52a0\u901f\u7f13\u6162\u7684\u673a\u5668",
                    "tooltip": "<strong>\u52a0\u901f\u7f13\u6162\u7684\u673a\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4"
                },
                {
                    "name": "\u751f\u78b3\u7f51",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/773.png",
                    "x": 564.0,
                    "y": 420.0,
                    "data": "\u8fd9\u79cd\u5236\u9020\u78b3\u677f\u7684\u65b9\u6cd5\u662f\u5728\u9ad8\u538b\u91dc\u4e2d\u52a0\u5165\u78b3\u7c89.\u6709\u56db\u79cd\u4e0d\u540c\u7684\u53ef\u7528\u6d41\u4f53.</br></br>\u6bcf\u4e2a\u65f6\u4ee3\u90fd\u6709\u5404\u81ea\u7684\u6700\u4f73\u65b9\u6848\uff1aLV\u65f6\u4ee3,\u4f7f\u7528\u7194\u878d\u805a\u4e59\u70ef\u4f1a\u5f97\u52301\u4e2a\u78b3\u7ea4\u7ef4;MV\u65f6\u4ee3,\u4f7f\u7528\u805a\u56db\u6c1f\u4e59\u70ef\u4f1a\u5f97\u52302\u4e2a;HV\u65f6\u4ee3,\u4f7f\u7528\u73af\u6c27\u6811\u8102\u4f1a\u5f97\u52304\u4e2a;EV\u65f6\u4ee3,\u4f7f\u7528\u805a\u82ef\u5e76\u54aa\u5511\u53ef\u4ee5\u5f97\u523016\u4e2a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADBQ==",
                    "title": "\u00a76\u00a7l\u751f\u78b3\u7f51",
                    "tooltip": "<strong>\u751f\u78b3\u7f51</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u878d\u805a\u4e59\u70ef"
                },
                {
                    "name": "\u5316\u5b66\u8131\u6c34\u673a",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1614.png",
                    "x": 924.0,
                    "y": 396.0,
                    "data": "\u5c06\u4f60\u7684\u8461\u8404\u8131\u6c34\u5236\u6210\u8461\u8404\u5e72.\u6216\u662f\u5728MV\u9636\u6bb5\u5236\u4f5c\u4e00\u4e9b\u82ef\u4e59\u70ef,\u82ef\u6216\u4e59\u70ef. \u65e0\u8bba\u7528\u6765\u505a\u4ec0\u4e48,\u8fd9\u4e2a\u673a\u5668\u4e0d\u5bb9\u9519\u8fc7.  \u5316\u5b66\u8131\u6c34\u673a\u8fd8\u53ef\u4ee5\u5904\u7406\u667e\u5e72\u67b6\u7684\u914d\u65b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGTg==",
                    "title": "\u00a76\u00a7l\u5316\u5b66\u8131\u6c34\u673a",
                    "tooltip": "<strong>\u5316\u5b66\u8131\u6c34\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4"
                },
                {
                    "name": "\u65b0\u7684\u5408\u91d1-\u9b42\u91d1",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/166.png",
                    "x": 840.0,
                    "y": 480.0,
                    "data": "\u4e00\u4e9b...\"\u90aa\u6076\"\u7528\u9014\u7684\u673a\u5668.\u4f60\u53ef\u80fd\u8ba4\u4e3a\u5b83\u4eec\u662f\u4e00\u79cd\"\u9b54\u6cd5\"\u7c7b\u578b\u8bbe\u5907.\u4f46\u662f\u4e0d\u7ba1\u600e\u4e48\u6837,\u4f60\u9700\u8981\u4e00\u79cd\u65b0\u7684\u5408\u91d1:\"\u9b42\u91d1\".",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAApg==",
                    "title": "\u00a76\u00a7l\u65b0\u7684\u5408\u91d1-\u9b42\u91d1",
                    "tooltip": "<strong>\u65b0\u7684\u5408\u91d1-\u9b42\u91d1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!"
                },
                {
                    "name": "\u706b\u77f3\u77ff/\u7c89",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1279.png",
                    "x": 816.0,
                    "y": 228.0,
                    "data": "BC\u91cc\u9762\u7684\u5efa\u7b51\u673a\u548c\u586b\u5145\u673a\u90fd\u8981\u7528\u5230\u706b\u77f3.\u4e0d\u5e78\u7684\u662f\u706b\u77f3\u53ea\u4f1a\u5728\u4e0b\u754c\u5ca9\u6d46\u6e56\u7684\u5e95\u90e8\u751f\u6210...</br></br>\u4e0d\u8fc7\u8fd9\u91cc\u6709\u4e00\u4e9b\u63d0\u793a\u53ef\u80fd\u4f1a\u5e2e\u52a9\u5230\u4f60:</br></br>-\u706b\u77f3\u53ea\u4f1a\u57286\u683c\u6df1\u4ee5\u4e0a\u7684\u5ca9\u6d46\u6e56\u4e2d\u751f\u6210,\u5e76\u4e14\u5b83\u53ea\u4f1a\u53d6\u4ee3\u5730\u72f1\u5ca9,\u6240\u4ee5\u4e00\u4e2a\u5145\u6ee1\u4e86\u7075\u9b42\u6c99\u7684\u5ce1\u8c37\u662f\u7edd\u5bf9\u4e0d\u4f1a\u4ea7\u751f\u706b\u77f3\u7684.\u4f60\u80fd\u60f3\u5230\u68c0\u67e5\u5ca9\u6d46\u6df1\u5ea6,\u5e76\u83b7\u77e5\u5e95\u90e8\u6709\u4ec0\u4e48\u7684\u65b9\u6cd5\u5417?</br>-\u6216\u8005,\u5982\u679c\u4f60\u53ef\u4ee5\u8ba9\u81ea\u5df1\u7684\u8111\u888b\u4fdd\u6301\u5728\u5ca9\u6d46\u4e0a\u65b9\u6b63\u786e\u7684\u9ad8\u5ea6,\u5e76\u627e\u5230\u4e00\u4e2a\u6b63\u786e\u7684\u89d2\u5ea6,\u4f60\u5c31\u80fd\u76f4\u63a5\u770b\u5230\u5ca9\u6d46\u6e56\u7684\u5e95\u90e8-\u5f53\u7136,\u4e00\u4e2a\u53ef\u4ee5\u60ac\u505c\u7684\u80cc\u5305\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684.</br>-...\u6216\u8005\u76f4\u63a5\u628a\u9f20\u6807\u79fb\u5230\u65c5\u884c\u8005\u5730\u56fe\u4e0a\u67e5\u770b\u751f\u7269\u7fa4\u7cfb. \u5730\u72f1(Hell)\u5c31\u662f\u9ed8\u8ba4\u7684\u5730\u72f1\u5ca9\u5730\u5f62.</br></br>\u53ea\u8981\u5728GT\u91c7\u77ff\u673a\u7684\u5de5\u4f5c\u8303\u56f4\u5185,\u706b\u77f3\u4e5f\u53ef\u4ee5\u76f4\u63a5\u88ab\u6316\u51fa\u6765.</br></br>\u706b\u77f3\u77ff\u77f3\u6216\u706b\u77f3\u90fd\u4f1a\u4e0d\u65ad\u70b9\u71c3\u8eab\u8fb9\u7684\u65b9\u5757,\u56e0\u6b64\u627e\u5230\u540e\u9a6c\u4e0a\u5c06\u5b83\u4eec\u6536\u7eb3\u5230\u80cc\u5305\u91cc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE_w==",
                    "title": "\u00a76\u00a7l\u706b\u77f3\u77ff/\u7c89",
                    "tooltip": "<strong>\u706b\u77f3\u77ff/\u7c89</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u81ea\u52a8\u91c7\u77ff\u673a"
                },
                {
                    "name": "\u6c22\u6c2f\u9178",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1227.png",
                    "x": 696.0,
                    "y": 552.0,
                    "data": "\u6c22\u6c2f\u9178\u4e0d\u53ea\u662f\u751f\u4ea7\u8fc7\u786b\u9178\u94a0\u7684\u526f\u4ea7\u7269,\u8fd8\u662fHV/EV\u9636\u6bb5\u751f\u4ea7\u73af\u6c27\u6811\u8102\u7684\u91cd\u8981\u5316\u5de5\u539f\u6599.\u5b83\u8fd8\u80fd\u7528\u4e8e\u6210\u4ea7\u8702\u7a9d.</br></br>\u4f60\u8fd8\u53ef\u4ee5\u76f4\u63a5\u7528\u6c22\u548c\u6c2f\u5408\u6210\u6c22\u6c2f\u9178.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEyw==",
                    "title": "\u00a76\u00a7l\u6c22\u6c2f\u9178",
                    "tooltip": "<strong>\u6c22\u6c2f\u9178</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c2f\u5316\u94c11</br>\u8fc7\u786b\u9178\u94a01</br>\u4e09\u6c2f\u7845\u70f7"
                },
                {
                    "name": "\u7532\u70f72",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/842.png",
                    "x": 108.0,
                    "y": 204.0,
                    "data": "\u7532\u70f7\u53ef\u4ee5\u5728\u71c3\u6c14\u8f6e\u673a\u4e2d\u4f5c\u4e3a\u71c3\u6599\u4f7f\u7528,\u6bcf\u5355\u4f4d(1000mB)\u7684\u7532\u70f7\u53ef\u4ee5\u4ea7\u751f104,000EU\u7684\u7535\u529b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADSg==",
                    "title": "\u00a76\u00a7l\u7532\u70f7",
                    "tooltip": "<strong>\u7532\u70f72</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53d1\u9175\u751f\u7269\u8d281"
                },
                {
                    "name": "\u4f60\u60f3\u8981\u7684\u6240\u6709\u4f5c\u7269",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1518.png",
                    "x": 792.0,
                    "y": 132.0,
                    "data": "\u538c\u5026\u4e86\u624b\u52a8\u4f7f\u7528\u9aa8\u7c89\u6216\u80a5\u6599\uff1f \u6d12\u6c34\u5668\u53ef\u4ee5\u63d0\u9ad8\u4f5c\u7269\u751f\u957f\u901f\u5ea6. \u9aa8\u7c89\u6216\u80a5\u6599\u5c06\u4f7f\u5176\u66f4\u5feb\u5730\u53d1\u6325\u4f5c\u7528.</br></br>[note]\u6ce8\u610f:\u6d12\u6c34\u5668\u5bf9IC2\u4f5c\u7269\u67b6\u4e0a\u7684\u4f5c\u7269\u65e0\u6548.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF7g==",
                    "title": "\u00a76\u00a7l\u4f60\u60f3\u8981\u7684\u6240\u6709\u4f5c\u7269",
                    "tooltip": "<strong>\u4f60\u60f3\u8981\u7684\u6240\u6709\u4f5c\u7269</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)"
                },
                {
                    "name": "\u4e0d\u9508\u94a2\u592a\u96be\u70e7\u4e86\uff1f",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1494.png",
                    "x": 72.0,
                    "y": 564.0,
                    "data": "\u662f\u65f6\u5019\u8d77\u7b2c\u4e8c\u53f0\u9ad8\u7089\u4e86!</br></br>\u4f60\u53ef\u4ee5\u901a\u8fc73\u79cd\u65b9\u5f0f\u66f4\u5feb\u5730\u5236\u9020\u952d: \u66f4\u597d\u7684\u7ebf\u5708,\u66f4\u9ad8\u7b49\u7ea7\u7684\u80fd\u6e90\u4ed3\u6216\u66f4\u591a\u7684\u9ad8\u7089.</br></br>\u5de5\u4e1a\u9ad8\u7089(EBF)\u53ef\u4ee5\u5171\u7528\u673a\u68b0\u65b9\u5757\u3001\u6d88\u58f0\u4ed3\u548c\u8f93\u5165/\u8f93\u51fa\u4ed3(\u603b\u7ebf),\u4f46\u4e0d\u80fd\u5171\u7528\u7ef4\u62a4\u4ed3(\u4e0d\u8fc7\u81ea\u52a8\u7ef4\u62a4\u4ed3\u53ef\u4ee5\u5171\u7528).\u5728\u4f9b\u7535\u5145\u8db3\u7684\u524d\u63d0\u4e0b,\u53ef\u4ee5\u5c1d\u8bd5\u5171\u7528\u80fd\u6e90\u4ed3.\u6240\u4ee5\u5f53\u4f60\u6709\u4e24\u53f0MV\u9ad8\u7089\u65f6,\u53ea\u7528\u4e00\u4e2aMV\u80fd\u6e90\u4ed3\u53ef\u80fd\u662f\u65e0\u6cd5\u8fd0\u884c\u7684(\u8003\u8651\u7ebf\u635f). \u4e0d\u8fc7\u8fd9\u79cd\u60c5\u51b5\u968f\u7740\u7535\u538b\u63d0\u9ad8\u5c31\u57fa\u672c\u6ca1\u6709\u4e86,\u653e\u5fc3\u5927\u80c6\u5171\u7528\u80fd\u6e90\u4ed3\u5427.\u53e6\u5916,\u5904\u7406\u9635\u5217\u7684\u8f93\u5165\u6700\u597d\u4e0d\u8981\u5171\u7528,\u5bb9\u6613\u51fa\u95ee\u9898...\u5982\u679c\u4f60\u4e00\u5b9a\u8981\u5171\u7528,\u8bb0\u5f97\u5173\u95ed\u8f93\u5165\u603b\u7ebf\u7684\u8fc7\u6ee4(\u87ba\u4e1d\u5200\u53f3\u952e\u8f93\u5165\u603b\u7ebf).</br></br>\u8bf7\u8bb0\u4f4f,\u9ad8\u7089\u7684\u6c61\u67d3\u975e\u5e38\u4e25\u91cd,\u5982\u679c\u540c\u65f6\u6709\u4e24\u53f0\u5de5\u4e1a\u9ad8\u7089(EBF)\u8fd0\u884c,\u5f88\u5feb\u4f60\u5bb6\u7684\u6c61\u67d3\u5c31\u4f1a\u7206\u8868! \u8bf7\u6ce8\u610f\u9ad8\u6c61\u67d3\u6548\u5e94.\u4f7f\u7528\u6700\u597d\u7684\u6d88\u58f0\u4ed3,\u4e0d\u8981\u5c06\u5de5\u4e1a\u9ad8\u7089(EBF)\u653e\u5728\u4e0e\u519c\u7530\u9644\u8fd1,\u4e5f\u4e0d\u8981\u4e0e\u5176\u4ed6\u9ad8\u6c61\u67d3\u673a\u5668(\u5982\u70ed\u89e3\u7089\u548c\u5927\u578b\u9505\u7089)\u653e\u5728\u76f8\u540c\u533a\u5757\u4e2d.</br></br>\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f60\u80fd\u9020\u7684\u4efb\u4f55\u7ebf\u5708,\u4f46\u8981\u662f\u624b\u5934\u8fd8\u7f3a\u4e91\u6bcd\u7684\u8bdd,\u4f60\u53ef\u80fd\u9700\u8981\u7740\u624b\u5f00\u59cb\u5bfb\u627e\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF1g==",
                    "title": "\u00a76\u00a7f\u00a76\u00a7l\u4e0d\u9508\u94a2\u592a\u96be\u70e7\u4e86\uff1f",
                    "tooltip": "<strong>\u4e0d\u9508\u94a2\u592a\u96be\u70e7\u4e86\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089"
                },
                {
                    "name": "\u7194\u878d\u5851\u6599",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/750.png",
                    "x": 696.0,
                    "y": 420.0,
                    "data": "\u7194\u878d\u805a\u4e59\u70ef\u53ef\u4ee5\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u5236\u9020,\u4f7f\u7528\u4e59\u70ef\u8ddf\u538b\u7f29\u7a7a\u6c14\u5355\u5143\u6216\u6c27\u5355\u5143\u53cd\u5e94--\u4f7f\u7528\u6c27\u53ef\u4ee5\u589e\u4ea750\uff05.\u4f7f\u7528\u6a21\u5177(\u677f)\u5728\u6d41\u4f53\u56fa\u5316\u5668\u4e2d\u5236\u6210\u5851\u6599\u7247.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC7g==",
                    "title": "\u00a76\u00a7l\u7194\u878d\u5851\u6599",
                    "tooltip": "<strong>\u7194\u878d\u5851\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u878d\u805a\u4e59\u70ef</br>\u6d41\u4f53\u56fa\u5316\u5668"
                },
                {
                    "name": "\u538b\u51fa\u6240\u6709\u4e1c\u897f(Extrude all the things)",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/740.png",
                    "x": 948.0,
                    "y": 348.0,
                    "data": "\u73b0\u5728\u4f60\u8fbe\u5230\u4e86MV\u9636\u6bb5,\u5236\u4f5c\u6746\u3001\u7ba1\u9053\u3001\u7ebf\u7f06,\u4ee5\u53ca\u5176\u5b83\u8bb8\u591a\u96f6\u4ef6\u8be5\u6709\u66f4\u597d\u7684\u4ea7\u51fa\u6bd4\u4e86.\u5927\u90e8\u4efd\u7684\u538b\u6a21\u673a\u914d\u65b9\u90fd\u8d85\u8fc732EU/t,\u6240\u4ee5\u6700\u597d\u5236\u4f5c\u4e00\u53f0MV\u538b\u6a21\u673a.\u505a\u597d\u673a\u5668\u4e4b\u540e\u4f60\u8fd8\u9700\u8981\u5236\u4f5c\u5bf9\u5e94\u96f6\u4ef6\u7684\u6a21\u5934.</br></br>\u8fd9\u91cc\u5e76\u672a\u5217\u4e3e\u6240\u6709\u6a21\u5934,\u8bb0\u5f97\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u68c0\u67e5\u4e00\u4e0b.</br></br>[note]\u5927\u90e8\u4efd\u683c\u96f7\u6dfb\u52a0\u7684\u5320\u9b42\u5de5\u5177\u90e8\u4ef6\u90fd\u7531\u538b\u6a21\u673a\u5236\u4f5c. \u9274\u4e8e\u5b83\u4eec\u7684\u5b9e\u7528\u6027,\u4e3a\u4e86\u5e73\u8861,\u5176\u52a0\u5de5\u65f6\u95f4\u90fd\u5f88\u957f.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC5A==",
                    "title": "\u00a76\u00a7l\u538b\u51fa\u6240\u6709\u4e1c\u897f(Extrude all the things)",
                    "tooltip": "<strong>\u538b\u51fa\u6240\u6709\u4e1c\u897f(Extrude all the things)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3"
                },
                {
                    "name": "\u5851\u6599\u7535\u8def\u57fa\u677f1",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1015.png",
                    "x": 780.0,
                    "y": 504.0,
                    "data": "\u5851\u6599\u7535\u8def\u57fa\u677f\u9996\u5148\u9700\u8981\u4f7f\u7528\u786b\u9178\u548c\u5851\u6599\u677f\u6765\u5236\u9020\u5851\u6599\u57fa\u677f. \u7136\u540e\u5728\u57fa\u677f\u4e0a\u6dfb\u52a0\u94dc\u7b94\u5e76\u901a\u8fc7\u6c2f\u5316\u94c1\u6216\u8005\u8fc7\u786b\u9178\u94a0\u5904\u7406\u540e\u53ef\u4ee5\u5f97\u5230\u5851\u6599\u7535\u8def\u57fa\u677f. \u4e4b\u540e\u5b83\u4eec\u7684\u9020\u4ef7\u4f1a\u968f\u7740\u79d1\u6280\u63d0\u5347\u800c\u8d8a\u6765\u8d8a\u4f4e.</br></br>[warn]\u5851\u6599\u7535\u8def\u57fa\u677f\u7528\u4e8eHV\u9636\u6bb5\u5236\u9020\u7684\u7535\u8def\u677f.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD9w==",
                    "title": "\u00a76\u00a7l\u5851\u6599\u7535\u8def\u57fa\u677f",
                    "tooltip": "<strong>\u5851\u6599\u7535\u8def\u57fa\u677f1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c2f\u5316\u94c11</br>\u8fc7\u786b\u9178\u94a01"
                },
                {
                    "name": "\u4f60\u7528\u5b8c\u4e86\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\uff1f",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1093.png",
                    "x": 300.0,
                    "y": 156.0,
                    "data": "\u4f60\u5df2\u7ecf\u7528\u5b8c\u4e86\u4f60\u7684\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\u50a8\u5907\uff1f\u5982\u679c\u4f60\u5df2\u7ecf\u5efa\u8bbe\u597d\u4e86\u8f89\u5149\u82b1\u519c\u573a\u7684\u8bdd.\u4f60\u53ef\u4ee5\u901a\u8fc7\u79bb\u5fc3\u8424\u77f3\u7c89\u6765\u83b7\u5f97\u5c0f\u5806\u7684\u7ea2\u77f3\u548c\u91d1\u7c89. \u7ea2\u77f3\u4e5f\u662f\u83b7\u5f97\u94dd\u548c\u94ec\u7684\u5f88\u597d\u9014\u5f84. \u5728HV\u9636\u6bb5,\u4f60\u4f1a\u7528\u5230\u6210\u5428\u7684\u91d1,\u5728\u6b64\u4e4b\u524d\u65e9\u505a\u50a8\u5907\u662f\u4e2a\u597d\u4e3b\u610f.</br></br>[note]\u5176\u5b9e\u6709\u8bb8\u591a\u690d\u7269\u90fd\u53ef\u4ee5\u51fa\u4ea7\u8424\u77f3,\u6311\u4e00\u79cd\u4f60\u559c\u6b22\u7684\u5427![/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAERQ==",
                    "title": "\u00a76\u00a7l\u4f60\u7528\u5b8c\u4e86\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\uff1f",
                    "tooltip": "<strong>\u4f60\u7528\u5b8c\u4e86\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fdb\u9636\u79bb\u5fc3\u673a"
                },
                {
                    "name": "\u56db\u6c2f\u5316\u7845",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3212.png",
                    "x": 420.0,
                    "y": 396.0,
                    "data": "\u7136\u800c,\u4f60\u83b7\u5f97\u7684\u751f\u7845\u7c89\u8fd8\u4e0d\u591f\u7eaf\u51c0!\u6211\u4eec\u9700\u8981\u7ee7\u7eed\u52aa\u529b.\u8fd9\u91cc\u6709\u4e24\u79cd\u5408\u7406\u7684\u9009\u62e9.\u8ba9\u6211\u4eec\u5148\u5728\u8fd9\u91cc\u770b\u4e0b\u7b2c\u4e00\u79cd.\u522b\u62c5\u5fc3,\u8fd9\u53ea\u9700\u8981\u7b80\u5355\u7684\u4e24\u6b65\u5904\u7406.\u9996\u5148,\u8ba9\u6211\u4eec\u5148\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u5c06\u5176\u4e0e\u4e00\u4e9b\u6c2f\u8fdb\u884c\u53cd\u5e94.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMjA==",
                    "title": "\u00a76\u00a7l\u56db\u6c2f\u5316\u7845",
                    "tooltip": "<strong>\u56db\u6c2f\u5316\u7845</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u751f\u7845\u7c89"
                },
                {
                    "name": "\u94bd\u77ff\u77f3",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1835.png",
                    "x": 888.0,
                    "y": 180.0,
                    "data": "\u94bd\u7528\u6765\u5236\u4f5cGT\u7684\u7535\u5bb9(\u53ef\u9009)\u548cEIO\u7684\u7535\u5bb9,\u5b83\u8fd8\u662f\u94cc\u7684\u4e00\u79cd\u6765\u6e90.</br>\u4f60\u80fd\u5728\u4e3b\u4e16\u754cY",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHKw==",
                    "title": "\u00a76\u00a7l\u94bd\u77ff\u77f3",
                    "tooltip": "<strong>\u94bd\u77ff\u77f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>IO,IO,\u6211\u4eec\u53bbEnderIO"
                },
                {
                    "name": "\u6d41\u4f53\u56fa\u5316\u5668",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/951.png",
                    "x": 696.0,
                    "y": 348.0,
                    "data": "\u4f7f\u7528\u5404\u79cd\u7c7b\u578b\u7684\u6a21\u5177(\u677f\u3001\u68d2\u4e4b\u7c7b\u7684),\u53ef\u4ee5\u4f7f\u7528\u6d41\u4f53\u56fa\u5316\u5668\u6765\u5236\u4f5c\u5f88\u591a\u4e0d\u540c\u7684\u7269\u54c1.</br></br>\u6a21\u5177\u2260\u6a21\u5934. \u6240\u4ee5\u4f60\u9700\u8981\u51c6\u5907\u597d\u4e24\u5957.\u5982\u679c\u73b0\u5728\u9020\u4e0d\u8d77\u7684\u8bdd,\u53ef\u4ee5\u5148\u51c6\u5907\u597d\u6700\u91cd\u8981\u7684\u51e0\u79cd\u6a21\u5177/\u6a21\u5934.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADtw==",
                    "title": "\u00a76\u00a7l\u6d41\u4f53\u56fa\u5316\u5668",
                    "tooltip": "<strong>\u6d41\u4f53\u56fa\u5316\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2"
                },
                {
                    "name": "\u5355\u6676\u7845",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/782.png",
                    "x": 336.0,
                    "y": 420.0,
                    "data": "\u5236\u9020\u6676\u5706\u4e4b\u524d,\u4f60\u5fc5\u987b\u5148\u5236\u9020\u5355\u6676\u7845.\u8fd9\u4e00\u5de5\u5e8f\u9700\u8981\u5728\u5de5\u4e1a\u9ad8\u7089\u52a0\u5165\u592a\u9633\u80fd\u7ea7\u7845\u7c89\u4ee5\u53ca\u4e00\u4e2a\u5c0f\u578b\u7837\u5316\u9553\u6676\u4f53,\u7528\u65f6450\u79d2.\u6bcf\u4e2a\u5355\u6676\u7845\u53ef\u4ee5\u5236\u621016\u4e2a\u6676\u5706.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADDg==",
                    "title": "\u00a76\u00a7l\u5355\u6676\u7845",
                    "tooltip": "<strong>\u5355\u6676\u7845</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7837\u5316\u9553\u6676\u4f53</br>\u592a\u9633\u80fd\u7ea7\u7845"
                },
                {
                    "name": "IO,IO,\u6211\u4eec\u53bbEnderIO",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/128.png",
                    "x": 840.0,
                    "y": 180.0,
                    "data": "\u4f60\u4e4b\u524d\u53ef\u80fd\u5df2\u7ecf\u7528\u8fc7\u672b\u5f71\u63a5\u53e3\u7684\u4e1c\u897f\u4e86.\u5bf9\u5f88\u591a\u4e8b\u60c5\u6765\u8bf4,\u5b83\u90fd\u662f\u975e\u5e38\u6709\u7528\u7684.\u4f46\u5728\u8fd9\u91cc,\u5f88\u591a\u5408\u6210\u8868\u90fd\u53d8\u4e86,\u800c\u4e14\u5bf9\u4e8e\u7c7b\u4f3c\u77ff\u7269\u5904\u7406\u7684\u4e8b,\u5b83\u4eec\u4e5f\u96be\u4ee5\u80dc\u4efb\u4e86. \u8ba9\u6211\u4eec\u770b\u770b\u5b83\u80fd\u63d0\u4f9b\u4e9b\u4ec0\u4e48. \u8bf7\u6ce8\u610f,\u53e6\u5916\u4e00\u534a\u9700\u8981\u7b49\u5230HV\u9636\u6bb5\u624d\u80fd\u89e3\u9501.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAgA==",
                    "title": "\u00a76\u00a7lIO,IO,\u6211\u4eec\u53bbEnderIO",
                    "tooltip": "<strong>IO,IO,\u6211\u4eec\u53bbEnderIO</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "\u56db\u6c2f\u5316\u7845 \u7eed",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3213.png",
                    "x": 420.0,
                    "y": 444.0,
                    "data": "\u7b2c\u4e8c\u6b65,\u8ba9\u6211\u4eec\u5c06\u56db\u6c2f\u5316\u7845\u4e0e\u94a0\u7c89\u7ed3\u5408\u8d77\u6765.\u597d\u8036!\u7845\u7c89\u73b0\u5728\u88ab\u51c0\u5316\u5230\u4e86\u592a\u9633\u80fd\u7ea7!</br></br>\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d,\u6c2f\u548c\u94a0\u662f\u4e0d\u4f1a\u635f\u5931\u7684.\u8981\u91cd\u65b0\u83b7\u5f97\u5b83\u4eec,\u53ea\u9700\u8981\u5c06\u6700\u540e\u5f97\u5230\u7684\u76d0\u7535\u89e3,\u5e76\u5c06\u5176\u9001\u56de\u5316\u5b66\u53cd\u5e94\u91dc,\u8ba9\u5b83\u7ee7\u7eed\u53c2\u4e0e\u5c06\u751f\u7845\u8f6c\u5316\u4e3a\u592a\u9633\u80fd\u7ea7\u7845\u7684\u5b8c\u6574\u5faa\u73af.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMjQ==",
                    "title": "\u00a76\u00a7l\u56db\u6c2f\u5316\u7845 \u7eed",
                    "tooltip": "<strong>\u56db\u6c2f\u5316\u7845 \u7eed</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u56db\u6c2f\u5316\u7845"
                },
                {
                    "name": "\u5347\u7ea7\u5bfc\u7ba1",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/136.png",
                    "x": 1080.0,
                    "y": 132.0,
                    "data": "\u5bfc\u7ba1\u672c\u8eab\u662f\u975e\u5e38\u68d2\u7684,\u4f46\u4f60\u53ef\u4ee5\u505a\u5f97\u66f4\u597d.\u901a\u8fc7\u4f7f\u7528\u8fc7\u6ee4\u5668\u548c\u901f\u5ea6\u5347\u7ea7,\u4f60\u53ef\u4ee5\u66f4\u597d\u5730\u63a7\u5236\u5b83\u4eec\u7684\u5de5\u4f5c\u548c\u5de5\u4f5c\u901f\u5ea6.</br></br>[note]PS\uff1a\u4e0d\u8fc7\u4f60\u73b0\u5728\u4e00\u4e2a\u90fd\u505a\u4e0d\u51fa\u6765.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAiA==",
                    "title": "\u00a76\u00a7l\u5347\u7ea7\u5bfc\u7ba1",
                    "tooltip": "<strong>\u5347\u7ea7\u5bfc\u7ba1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfc\u7ba1"
                },
                {
                    "name": "\u6563\u70ed2",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/206.png",
                    "x": 216.0,
                    "y": 636.0,
                    "data": "\u4f7f\u7528\u6563\u70ed\u7247,\u53ef\u4ee5\u8ba9\u4f60\u5728\u79d1\u6280\u6c34\u5e73\u4e0d\u9ad8\u65f6\u56de\u6536\u70ed\u51b7\u5374\u6db2.\u53ea\u8981\u5c06\u6563\u70ed\u7247\u4f5c\u4e3a\u8986\u76d6\u677f\u8d34\u5728\u4efb\u4f55\u50a8\u5b58IC2\u70ed\u51b7\u5374\u6db2\u7684GT\u65b9\u5757\u4e0a,\u5e76\u5728\u524d\u9762\u653e\u4e0a\u4e00\u683c\u6c34\u5c31\u884c\u4e86.\u6700\u7b80\u5355\u7684\u53ef\u80fd\u5c31\u662fGT\u50a8\u7f50\u6216\u8005\u6d41\u4f53\u7ba1\u9053.\u5728\u80fd\u5236\u9020\u5927\u578b\u70ed\u4ea4\u6362\u673a\u6216\u8005\u771f\u7a7a\u51b7\u51bb\u673a\u4e4b\u524d,\u8fd9\u53ef\u80fd\u5bf9\u4f60\u4f1a\u6709\u4e9b\u5e2e\u52a9.</br></br>\u9ad8\u7ea7/\u8d85\u9891\u6563\u70ed\u7247\u6bd4\u666e\u901a\u7684\u6563\u70ed\u7247\u5feb\u5f97\u591a,\u4e0d\u8fc7\u4f60\u73b0\u5728\u8fd8\u505a\u4e0d\u4e86.\u800c\u4e14\u5b83\u4eec\u5728\u524d\u9762\u4e00\u683c\u662f\u7a7a\u6c14\u65f6\u4e5f\u80fd\u5de5\u4f5c,\u4f46\u662f\u666e\u901a\u6563\u70ed\u7247\u524d\u9762\u5fc5\u987b\u662f\u6c34.\u53e6\u5916,\u663e\u800c\u6613\u89c1,\u4e0d\u8bba\u54ea\u79cd\u6563\u70ed\u7247,\u524d\u9762\u4e00\u683c\u653e\u4e0a\u6c34\u65f6\u7684\u5de5\u4f5c\u901f\u5ea6\u90fd\u6bd4\u53ea\u6709\u7a7a\u6c14\u65f6\u66f4\u5feb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAzg==",
                    "title": "\u00a76\u00a7l\u6563\u70ed",
                    "tooltip": "<strong>\u6563\u70ed2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u51b7\u5374\u6db2"
                },
                {
                    "name": "\u66f4\u597d\u7684\u5de5\u5177",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1910.png",
                    "x": 996.0,
                    "y": 372.0,
                    "data": "\u73b0\u5728\u4f60\u6709\u4e86\u4e00\u53f0MV\u538b\u6a21\u673a,\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e0b\u4e00\u9636\u7684\u5320\u9b42\u5de5\u5177\u4e86-\u9492\u94a2\u9524\u5934\u548c\u5927\u9a6c\u58eb\u9769\u94a2\u624b\u67c4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHdg==",
                    "title": "\u00a76\u00a7l\u66f4\u597d\u7684\u5de5\u5177",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u5de5\u5177</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u51fa\u6240\u6709\u4e1c\u897f(Extrude all the things)"
                },
                {
                    "name": "MV\u8d85\u5bfc(128 EU/t)",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1404.png",
                    "x": 108.0,
                    "y": 420.0,
                    "data": "\u65e0\u635f\u7684MV\u8d85\u5bfc\u5bfc\u7ebf\u600e\u4e48\u6837\uff1fPentacadmiummagnesiumhexaoxide(MV\u8d85\u5bfc)\u662f\u4e00\u79cd\u8d85\u5bfc\u6750\u6599,\u53ef\u4ee5\u6beb\u65e0\u635f\u5931\u5730\u4f20\u9012\u80fd\u91cf. \u73b0\u5728,\u6bcf\u4e2a\u7535\u538b\u90fd\u6709\u7ebf\u635f\u4e3a0\u7684\u8d85\u5bfc\u5bfc\u7ebf.</br></br>\u5728\u6405\u62cc\u673a\u4e2d\u6405\u62cc\u9549,\u9541\u548c\u6c27. \u5236\u5f97\u7684\u7c97\u80da\u7c89\u9700\u8981\u7528\u5e26\u6709\u574e\u5854\u5c14\u5408\u91d1\u7ebf\u5708\u7684\u5de5\u4e1a\u9ad8\u7089(EBF)\u70e7\u5236. \u518d\u7528\u771f\u7a7a\u51b7\u51bb\u673a\u6765\u51b7\u5374\u5b83. \u5236\u4f5c\u4e00\u4e9bMV\u8d85\u5bfc\u7c97\u80da\u5bfc\u7ebf\u5e76\u4f7f\u7528\u7ec4\u88c5\u673a\u5c06\u8fd9\u4e9b\u5bfc\u7ebf\u4e0e\u6c26\u3001\u4e0d\u9508\u94a2\u6d41\u4f53\u7ba1\u9053\u548cMV\u6cf5\u7ec4\u5408\u5728\u4e00\u8d77,\u4ee5\u83b7\u5f97128EU/t\u7684\u8d85\u5bfc\u5bfc\u7ebf.</br></br>[note]\u5f53\u7136,\u662f\u5426\u9700\u8981\u4e3a\u4e86\u8282\u7701\u8fd9\u4e48\u4e00\u70b9\u80fd\u91cf,\u5c31\u901a\u8fc7\u8fd9\u4e48\u590d\u6742\u7684\u5de5\u5e8f\u5236\u9020\u8d85\u5bfc\u5bfc\u7ebf,\u5b8c\u5168\u53d6\u51b3\u4e8e\u4f60\u81ea\u5df1. \u53e6\u5916\u8bf7\u6ce8\u610f,\u867d\u7136\u8fd9\u4e9b\u8d85\u5bfc\u5bfc\u7ebf\u662f\"\u5bfc\u7ebf\",\u4f46\u78b0\u5230\u5b83\u4eec\u4e0d\u4f1a\u89e6\u7535\u53d7\u4f24.[/note]</br></br>\u8bd1\u8005\u6ce8:\u5982\u679c\u4f60\u8bd5\u56fe\u5728\u4e92\u8054\u7f51\u4e0a\u641c\u7d22GTNH\u7684\u8d85\u5bfc\u6750\u6599,\u53ef\u80fd\u4f1a\u627e\u5230\u4e00\u4e2a\u53eb\u505a\"Superconductors\"\u7684\u7f51\u7ad9,\u7ed9\u51fa\u4e86\u5f88\u591a\u79cd\u9ad8\u6e29\u8d85\u5bfc\u6750\u6599,\u8fd9\u6b63\u662fGTNH\u524d\u671f\u8d85\u5bfc\u7684\u7075\u611f\u6765\u6e90.\u4f46\u662f\u6700\u597d\u522b\u76f8\u4fe1\u90a3\u4e0a\u9762\u7684\"\u7814\u7a76\u6210\u679c\",\u56e0\u4e3a\u8fd9\u662f\u4e2a\u6c11\u79d1\u7f51\u7ad9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFfA==",
                    "title": "\u00a76\u00a7lMV\u8d85\u5bfc(128 EU/t)",
                    "tooltip": "<strong>MV\u8d85\u5bfc(128 EU/t)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ec8\u7ed3...</br>\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089</br>\u66f4\u591a\u7684\u70ed\u91cf - \u574e\u5854\u5c14\u7ebf\u5708"
                },
                {
                    "name": "\u56da\u7981\u4e00\u4e2a\u6076\u9b54\u2014\u2014\u2014\u2014\u51cb\u7075\u5c60\u5bb0\u573a",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1527.png",
                    "x": 888.0,
                    "y": 84.0,
                    "data": "\u66fe\u7ecf\u60f3\u8981\u6293\u53ea\u51cb\u7075,\u4f46\u642d\u5efa\u56da\u7262\u7684\u552f\u4e00\u7684\u9009\u62e9\u662f\u4e0d\u53ef\u79fb\u52a8\u7684\u57fa\u5ca9\uff1f \u65e2\u7136\u80fd\u5408\u6210\u7384\u94a2,\u90a3\u4e48\u4f60\u5c31\u53ef\u4ee5\u5236\u9020\u52a0\u5f3a\u9ed1\u66dc\u77f3,\u51cb\u7075\u70b8\u4e0d\u52a8\u5b83. \u5982\u679c\u4f60\u6709\u7535\u52a8\u5237\u602a\u7b3c\u63d0\u4f9b\u51cb\u7075\u9ab7\u9ac5\u5934,\u90a3\u4e48\u52a0\u5f3a\u9ed1\u66dc\u77f3\u6784\u6210\u7684\u56da\u7262\u5bf9\u4e8e\u624b\u52a8\u6740\u6b7b\u751a\u81f3\u81ea\u52a8\u5316\u5c60\u5bb0\u51cb\u7075\u5f88\u6709\u7528.</br></br>[note]\u63d0\u793a:\u4e0e\u539f\u7248\u9ed1\u66dc\u77f3\u4e0d\u540c,\u52a0\u5f3a\u9ed1\u66dc\u77f3\u53ef\u4ee5\u901a\u8fc7\u6d3b\u585e\u79fb\u52a8,\u8fd9\u53ef\u80fd\u4f1a\u6d3e\u4e0a\u7528\u573a.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF9w==",
                    "title": "\u00a76\u00a7l\u56da\u7981\u4e00\u4e2a\u6076\u9b54\u2014\u2014\u2014\u2014\u51cb\u7075\u5c60\u5bb0\u573a",
                    "tooltip": "<strong>\u56da\u7981\u4e00\u4e2a\u6076\u9b54\u2014\u2014\u2014\u2014\u51cb\u7075\u5c60\u5bb0\u573a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)"
                },
                {
                    "name": "\u79cd\u5b50\u6cb9",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/848.png",
                    "x": 108.0,
                    "y": 300.0,
                    "data": "\u6f58\u9a6c\u65af\u7684\u82b1\u751f\u4e5f\u662f\u4e0d\u9519\u7684\u79cd\u5b50\u6cb9\u6765\u6e90,\u800c\u4e14\u53ef\u4ee5\u7528\u6d12\u6c34\u5668\u52a0\u901f\u5176\u751f\u957f. \u6216\u8005\u53ef\u4ee5\u7528IC2\u7684\u6742\u4ea4\u4f5c\u7269\u6cb9\u83dc(Rape).\u5176\u5b83\u7684\u9009\u62e9\u8fd8\u6709\u6797\u4e1a\u7684\u5404\u79cd\u575a\u679c,\u6bd4\u5982\u699b\u5b50\u3001\u7070\u6838\u6843\u3001\u6216\u8005\u575a\u679c\u4e4b\u738b:\u6930\u5b50. \u5f53\u7136\u666e\u901a\u7684\u4f5c\u7269\u79cd\u5b50\u4e5f\u53ef\u4ee5\u538b\u69a8\u51fa\u79cd\u5b50\u6cb9,\u6bd4\u5982\u5c0f\u9ea6\u79cd\u5b50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADUA==",
                    "title": "\u00a76\u00a7l\u79cd\u5b50\u6cb9",
                    "tooltip": "<strong>\u79cd\u5b50\u6cb9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fdb\u9636\u6d41\u4f53\u63d0\u53d6\u673a"
                },
                {
                    "name": "\u5c06\u90a3\u4e9b\u533a\u5757,\u53d8\u6210\u4e00\u884c",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2014.png",
                    "x": 1032.0,
                    "y": 276.0,
                    "data": "\u6709\u65f6\u4f60\u4e0d\u9700\u8981\u52a0\u8f7d3x3\u533a\u5757,\u4f46\u9700\u8981\u52a0\u8f7d\u4e00\u6761\u957f\u957f\u7684\u7ebf.\u8fd9\u5bf9\u94c1\u8def\u7ebf\u6216\u957f\u8ddd\u79bb\u8f93\u7535\u7ebf\u5f88\u6709\u7528.  \u62f1\u536b\u4e4b\u951a\u53ef\u4ee5\u80dc\u4efb\u8fd9\u9879\u5de5\u4f5c.  \u624b\u6301\u64ac\u68cd\u53f3\u952e\u533a\u5757\u52a0\u8f7d\u5668\u4ee5\u6fc0\u6d3b\u5b83.\u7136\u540e\u6cbf\u76f4\u7ebf\u8d70\u51fa,\u653e\u7f6e\u62f1\u536b\u4e4b\u951a,\u624b\u6301\u64ac\u68cd\u53f3\u952e.\u8fd9\u6837,\u6700\u591a25x1\u7684\u533a\u5757\u5c06\u4f1a\u4fdd\u6301\u52a0\u8f7d.</br></br>\u76f8\u6bd4\u4e8e\u4e00\u8def\u6b63\u5e38\u52a0\u8f7d3x3\u533a\u5757,\u8fd9\u6837\u8282\u7701\u5f97\u591a,\u4f46\u8fd8\u662f\u8981\u591a\u591a\u56e4\u79ef\u672b\u5f71\u73cd\u73e0\u548c\u533a\u5757\u52a0\u8f7d\u5e01.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH3g==",
                    "title": "\u00a76\u00a7l\u5c06\u90a3\u4e9b\u533a\u5757,\u53d8\u6210\u4e00\u884c",
                    "tooltip": "<strong>\u5c06\u90a3\u4e9b\u533a\u5757,\u53d8\u6210\u4e00\u884c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u533a\u5757\u52a0\u8f7d"
                },
                {
                    "name": "\u8d85\u7ea7\u7f38 I",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/944.png",
                    "x": 648.0,
                    "y": 312.0,
                    "data": "\u8d85\u7ea7\u7f38\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0e\u4e4b\u524d\u5c0f\u4e00\u70b9\u7684GT\u50a8\u7f50\u4e00\u81f4,\u53ea\u662f\u88c5\u5f97\u66f4\u591a. \u51c6\u786e\u6765\u8bf4\u662f4000,000L.  \u5728\u73b0\u9636\u6bb5,\u5efa\u8bae\u53ea\u7ed9\u9700\u8981\u5927\u91cf\u50a8\u5b58\u7684\u6d41\u4f53\u914d\u5907\u8d85\u7ea7\u7f38. \u8981\u5236\u4f5c\u8d85\u7ea7\u7f38I\u4f60\u9700\u8981\u5148\u5236\u9020\u4e00\u4e2a\u5bc6\u5c01\u673a\u68b0\u65b9\u5757I,\u8fd9\u4e2a\u4e1c\u897f\u9700\u8981\u94a2\u677f\u548c\u5927\u578b\u805a\u4e59\u70ef\u7ba1\u9053.\u5236\u9020\u8d85\u7ea7\u7f38I\u7684\u5176\u4ed6\u6750\u6599\u8fd8\u5305\u62ec4\u5757\u7535\u8def\u677f\u30012\u5757\u94dd\u677f\u30011\u5757\u8109\u51b2\u94c1\u677f\u548c1\u4e2aMV\u7ea7\u7535\u52a8\u6cf5.\u8fd9\u4e2a\u9020\u4ef7\u5f53\u524d\u6765\u8bf4\u8fd8\u662f\u5f88\u8d35\u7684.</br></br>\u73b0\u5728\u4f60\u53ef\u4ee5\u5728\u4e00\u4e2a\u8d85\u7ea7\u7f38\u91cc\u5b58\u50a85x5x5\u4f53\u79ef\u7684RC\u94a2\u8d28\u84c4\u6c34\u5668\u5b58\u50a8\u7684\u6db2\u4f53\u4e86.</br></br>[note]\u8d85\u7ea7\u7f38\u548c\u91cf\u5b50\u7f38\u73b0\u5728\u52a0\u5165\u4e86\u5927\u91cf\u5b9e\u7528\u529f\u80fd.\u4f60\u53ef\u4ee5\u7528\u6273\u624b\u62c6\u9664\u8d85\u7ea7\u7f38\u5e76\u62fe\u53d6,\u8fd9\u4e48\u505a\u5e76\u4e0d\u4f1a\u9500\u6bc1\u5176\u4e2d\u7684\u6db2\u4f53.\u4e0d\u8fc7\u62ff\u7740\u8d85\u7ea7\u7f38\u4f1a\u7ed9\u4f60\u5f88\u4e25\u91cd\u7684debuff(\u91cf\u5b50\u7f38\u4e0d\u4f1a),\u6240\u4ee5\u6700\u597d\u51c6\u5907\u4e9b\u725b\u5976(\u8bd1\u8005\u6ce8:\u6216\u8005\u5927\u5730\u75a3.)\u5982\u679c\u4f60\u786e\u5b9e\u60f3\u8981\u9500\u6bc1\u6d41\u4f53,\u53ef\u4ee5\u5728\u62c6\u9664\u4e4b\u524d\u4f7f\u7528GUI\u5185\u7684\u5168\u90e8\u9500\u6bc1\u6309\u94ae\uff0c\u6216\u5c06\u5176\u653e\u5165\u5de5\u4f5c\u53f0\u5408\u6210\u4e00\u4e0b\u4ee5\u6e05\u9664\u6389\u5185\u90e8\u6570\u636e\u4fe1\u606f.</br></br>\u8d85\u7ea7\u7f38\u73b0\u5728\u8fd8\u6709\u4e86\u51e0\u79cd\u53ef\u9009\u529f\u80fd:\u81ea\u52a8\u8f93\u51fa\u6d41\u4f53,\u9501\u5b9a\u6d41\u4f53,\u6ea2\u51fa\u9500\u6bc1\u6a21\u5f0f,\u6216\u662f\u5b8c\u5168\u9500\u6bc1\u6a21\u5f0f.\u6240\u6709\u8fd9\u4e9b\u90fd\u96c6\u6210\u5728\u4e86\u4e00\u4e2a\u7b80\u6d01\u7f8e\u89c2\u7684GUI\u4e2d.\u4e0d\u5f97\u4e0d\u8bf4,\u8fd9\u771f\u662f\u6781\u5176\u91cd\u91cf\u7ea7\u7684\u66f4\u65b0.[/note](\u8bd1\u8005\u6ce8:\u91cd\u91cf\u7ea7\u7684,\u539f\u6587\u4e3aIMPACTful,\u4e00\u8bed\u53cc\u5173,\u8fd8\u8868\u660e\u4e86\u8fd9\u4e9b\u529f\u80fd\u90fd\u662f\u4eceIMPACT\u6574\u5408\u5305\"\u501f\"\u6765\u7684.)",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADsA==",
                    "title": "\u00a76\u00a7l\u8d85\u7ea7\u7f38 I",
                    "tooltip": "<strong>\u8d85\u7ea7\u7f38 I</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u878d\u805a\u4e59\u70ef</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2"
                },
                {
                    "name": "\u9ad8\u7ea7\u7535\u8def\u677f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/838.png",
                    "x": 612.0,
                    "y": 564.0,
                    "data": "\u6700\u540e,HV\u7535\u8def\u677f.\u5236\u9020\u5b83\u9700\u8981\u4e0d\u9519\u7684\u96c6\u6210\u7535\u8def\u3001\u96c6\u6210\u903b\u8f91\u7535\u8def\u3001RAM\u3001\u6676\u4f53\u7ba1\u3001\u7ec6\u7425\u73c0\u91d1\u5bfc\u7ebf\u548c\u94dc\u87ba\u6813.</br></br>\u53e6\u5916,\u968f\u7740\u79d1\u6280\u63d0\u5347,\u7535\u8def\u677f\u7684\u9020\u4ef7\u4f1a\u968f\u4e4b\u964d\u4f4e,\u4e0d\u8fc7\u9700\u8981\u5728HV\u4e4b\u540e\u624d\u80fd\u4eab\u53d7\u5230.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADRg==",
                    "title": "\u00a76\u00a7l\u9ad8\u7ea7\u7535\u8def\u677f",
                    "tooltip": "<strong>\u9ad8\u7ea7\u7535\u8def\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6676\u4f53\u7ba11</br>\u4e0d\u9519\u7684\u96c6\u6210\u7535\u8def"
                },
                {
                    "name": "\u7b80\u6613RF\u80fd\u6e90:\u6db2\u4f53",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/132.png",
                    "x": 1080.0,
                    "y": 180.0,
                    "data": "\u8fd9\u53f0\u53d1\u7535\u673a\u9700\u8981\u4f5c\u4e3a\u51b7\u5374\u5242\u7684\u6c34\u548c\u4f5c\u4e3a\u71c3\u6599\u7684\u53ef\u71c3\u6db2\u4f53,\u5b83\u53d1\u7535\u7684\u529f\u7387\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u6db2\u4f53.</br></br>\u6d41\u4f53           \u71c3\u70e7\u65f6\u95f4(ticks/mB)    \u8f93\u51fa\u529f\u7387(RF/tick)    \u8f93\u51fa\u80fd\u91cf(RF/mB) </br>\u6cb9             5                     30                   150</br>\u70c8\u9152           6                     60                   360</br>\u4e59\u9187           15                    40                   600 </br>\u706b\u7130\u6c34         15                    80                   1200</br>\u67f4\u6cb9           25                    60                   1500</br></br>[note]\u706b\u7bad\u71c3\u6599\u5df2\u7981\u7528.[note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAhA==",
                    "title": "\u00a76\u00a7l\u7b80\u6613RF\u80fd\u6e90:\u6db2\u4f53",
                    "tooltip": "<strong>\u7b80\u6613RF\u80fd\u6e90:\u6db2\u4f53</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4fbf\u643a\u5f0f\u50a8\u7f50"
                },
                {
                    "name": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/896.png",
                    "x": 864.0,
                    "y": 276.0,
                    "data": "\u591a\u56e4\u79ef\u4e00\u4e9b\u6750\u6599\u5427,\u672a\u6765\u4f60\u4f1a\u5236\u9020\u5f88\u591a\u7535\u52a8\u6d3b\u585e\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADgA==",
                    "title": "\u00a76\u00a7lMV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "tooltip": "<strong>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "\u54d4...\u54d4...\u54d4...",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1917.png",
                    "x": 660.0,
                    "y": 24.0,
                    "data": "\u5b9e\u65f6\u4e86\u89e3\u4f60\u7684\u8d85\u51c0\u95f4\u662f\u5426\u9700\u8981\u7ef4\u62a4\u975e\u5e38\u91cd\u8981.\u4ec5\u4ec5\u4eae\u706f\u6015\u662f\u4e0d\u591f,\u4f55\u4e0d\u8bd5\u8bd5\u8702\u9e23\u5668\u5462?\u5373\u4f7f\u4f60\u5728128\u7c73\u5916\u5b83\u90fd\u80fd\u8ba9\u4f60\u542c\u5230.</br></br>[warn]\u8b66\u544a:\u53ef\u80fd\u4f1a\u5413\u5c3f\u4f60\u2192_\u2192[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHfQ==",
                    "title": "\u00a76\u00a7l\u54d4...\u54d4...\u54d4...",
                    "tooltip": "<strong>\u54d4...\u54d4...\u54d4...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f53\u4f60\u9700\u8981\u65f6,\u90a3\u4e2a\u52e4\u6742\u5de5\u5728\u54ea?"
                },
                {
                    "name": "\u53e6\u4e00\u79cd\u6273\u624b",
                    "symbolSize": 25,
                    "symbol": "image://version/272/quests_icons/QuestIcon/135.png",
                    "x": 1080.0,
                    "y": 84.0,
                    "data": "\u4ee5\u592a\u6273\u624b\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u666e\u901a\u7684\u6273\u624b.\u5728\u63e1\u4f4f\u5b83\u7684\u540c\u65f6,\u4f60\u53ef\u4ee5\u5728\u7ba1\u9053\u7c7b\u578b\u4e4b\u95f4\u5207\u6362,\u5141\u8bb8\u4f60\u4ece\u8bb8\u591a\u6e20\u9053\u4e2d\u79fb\u9664\u4e00\u4e2a\u7279\u5b9a\u7c7b\u578b\u7684\u7ba1\u9053,\u6309\u4f4fCtrl+\u6eda\u52a8\u9f20\u6807\u6eda\u8f6e\u53ef\u4ee5\u5207\u6362\u6a21\u5f0f.\u5373\u4f7f\u4f60\u65e0\u6cd5\u63a5\u89e6\u5230\u7ba1\u9053\u7684\u53e6\u4e00\u4fa7,Shift+\u5de6\u952e\u4e5f\u53ef\u4ee5\u6253\u5f00\u914d\u7f6e\u63a5\u53e3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAhw==",
                    "title": "\u00a76\u00a7l\u53e6\u4e00\u79cd\u6273\u624b",
                    "tooltip": "<strong>\u53e6\u4e00\u79cd\u6273\u624b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfc\u7ba1"
                },
                {
                    "name": "MV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/791.png",
                    "x": 264.0,
                    "y": 492.0,
                    "data": "\u5236\u9020\u9ad8\u7ea7\u7535\u8def\u9700\u8981\u4e00\u53f0MV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a,\u5236\u9020\u4e00\u53f0\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADFw==",
                    "title": "\u00a76\u00a7lMV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "tooltip": "<strong>MV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5</br>\u7845\u6676\u5706"
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
                    "source": "\u7ce0",
                    "target": "\u65b9\u6cd5\u4e00:IC2\u6d41\u4f53/\u56fa\u4f53\u88c5\u7f50\u673a"
                },
                {
                    "source": "\u51b7\u5374\u6db2",
                    "target": "\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d"
                },
                {
                    "source": "MV\u7ea7\u80fd\u6e90\u4ed3",
                    "target": "\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d"
                },
                {
                    "source": "\u51b7\u5374\u574e\u5854\u5c14\u5408\u91d1",
                    "target": "\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d"
                },
                {
                    "source": "\u6c2f\u4e59\u70ef",
                    "target": "\u805a\u6c2f\u4e59\u70ef"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u592a\u96be\u70e7\u4e86\uff1f",
                    "target": "\u54b3\u54b3\u54b3-\u9700\u8981\u5904\u7406\u4e0b\u6c61\u67d3\u4e86!"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2"
                },
                {
                    "source": "\u7845\u6676\u5706",
                    "target": "\u8d85\u4f4e\u529f\u7387IC"
                },
                {
                    "source": "\u751f\u7269\u8d28\u71c3\u6599",
                    "target": "\u690d\u7269\u7403"
                },
                {
                    "source": "O\u4f3c\u4e4e\u662f\u6c27",
                    "target": "\u7194\u878d\u805a\u4e59\u70ef"
                },
                {
                    "source": "\u4e59\u70ef",
                    "target": "\u7194\u878d\u805a\u4e59\u70ef"
                },
                {
                    "source": "\u751f\u7269\u8d28",
                    "target": "\u53d1\u9175\u751f\u7269\u8d281"
                },
                {
                    "source": "\u8def\u7ebf\u4e09\uff1a\u70ed\u89e3\u7089",
                    "target": "\u53d1\u9175\u751f\u7269\u8d281"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "\u4f60\u53d7\u591f\u4e86?\u6211\u6253\u8d4c\u4f60\u89c9\u5f97\u62a5\u7eb8\u65e9\u5c31\u6b7b\u4e86!"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "\u6211\u4eec\u53ea\u662f\u98ce\u4e2d\u7684\u5c18\u571f"
                },
                {
                    "source": "\u8fdb\u9636\u5377\u677f\u673a",
                    "target": "\u7269\u54c1\u592a\u591a? \u4e0d\u5b58\u5728\u7684!"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6"
                },
                {
                    "source": "\u690d\u7269\u7403",
                    "target": "\u690d\u7269\u56e2\u5757"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #1"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "target": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4"
                },
                {
                    "source": "\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)",
                    "target": "\u7384\u94a2\u5de5\u5177"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "MV\u9a6c\u8fbe"
                },
                {
                    "source": "MV\u9636\u6bb5\u7684\u6405\u62cc",
                    "target": "\u4f60\u51c6\u5907\u597d\u8fc8\u5411HV\u4e86\u5417\uff1f"
                },
                {
                    "source": "\u7535\u89e3\u4e07\u7269",
                    "target": "\u7535\u89e3\u7ea2\u5b9d\u77f3"
                },
                {
                    "source": "\u4e09\u6c2f\u7845\u70f7",
                    "target": "\u4e09\u6c2f\u7845\u70f7 \u7eed"
                },
                {
                    "source": "\u7845\u677f",
                    "target": "\u6676\u4f53\u7ba11"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u8fdb\u9636\u6d41\u4f53\u63d0\u53d6\u673a"
                },
                {
                    "source": "\u6c22\u6c27\u5316\u94a01",
                    "target": "\u6211\u9700\u8981\u6765\u4e00\u676f.\u656c\u66f4\u591a\u7684\u94ec."
                },
                {
                    "source": "\u8fdb\u9636\u79bb\u5fc3\u673a",
                    "target": "\u6211\u9700\u8981\u6765\u4e00\u676f.\u656c\u66f4\u591a\u7684\u94ec."
                },
                {
                    "source": "MV\u9636\u6bb5\u7684\u6405\u62cc",
                    "target": "\u6211\u9700\u8981\u6765\u4e00\u676f.\u656c\u66f4\u591a\u7684\u94ec."
                },
                {
                    "source": "\u673a\u5668\u6846\u67b6",
                    "target": "\u57fa\u7840\u7535\u5bb9\u5e93"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u5316\u5b66\u8bfe,\u7b2c\u4e8c\u90e8\u5206"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u7535\u89e3\u4e07\u7269"
                },
                {
                    "source": "MV\u9636\u6bb5\u7684\u6405\u62cc",
                    "target": "\u51b7\u5374\u6db2"
                },
                {
                    "source": "\u51b7\u5374\u574e\u5854\u5c14\u5408\u91d1",
                    "target": "\u51b7\u5374\u6db2"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u8fdb\u9636\u79bb\u5fc3\u673a"
                },
                {
                    "source": "\u7b80\u6613RF\u80fd\u6e90:\u6db2\u4f53",
                    "target": "\u917f\u9020\u6db2\u4f53"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "target": "MV\u81ea\u52a8\u91c7\u77ff\u673a"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6",
                    "target": "MV\u81ea\u52a8\u91c7\u77ff\u673a"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u8fdb\u9636\u538b\u7f29\u673a"
                },
                {
                    "source": "\u805a\u6c2f\u4e59\u70ef",
                    "target": "\u805a\u6c2f\u4e59\u70ef\u7247"
                },
                {
                    "source": "\u53d1\u9175\u751f\u7269\u8d281",
                    "target": "\u66f4\u597d\u7684\u84b8\u998f\u5ba4"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2",
                    "target": "GT\u50a8\u7f50,HV\u7248"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u8fdb\u9636\u7814\u78e8\u673a"
                },
                {
                    "source": "\u592a\u9633\u80fd",
                    "target": "\u592a\u9633\u4e4b\u529b(ULV)1x1"
                },
                {
                    "source": "\u65b0\u7684\u5408\u91d1-\u9b42\u91d1",
                    "target": "\u4e00\u4e2a\u7075\u9b42\u7684\u5bb9\u5668"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "target": "\u8fdb\u9636\u5377\u677f\u673a"
                },
                {
                    "source": "\u6da6\u6ed1\u6cb92",
                    "target": "MV\u7ea7\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "\u8d85\u4f4e\u529f\u7387IC",
                    "target": "MV\u7ea7\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3",
                    "target": "MV\u7ea7\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4",
                    "target": "\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #1",
                    "target": "\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "target": "\u8fdb\u9636\u9505\u7089[MV]"
                },
                {
                    "source": "\u673a\u5668\u6846\u67b6",
                    "target": "\u7194\u70bc\u5408\u91d1(alloy)(\u7194\u70bc\u6240\u6709\u4e50\u8da3(all-joy))"
                },
                {
                    "source": "\u8fdb\u9636\u5377\u677f\u673a",
                    "target": "\u767e\u4e07\u5f52\u4e00"
                },
                {
                    "source": "\u7194\u878d\u5851\u6599",
                    "target": "\u8fc7\u786b\u9178\u94a01"
                },
                {
                    "source": "\u751f\u7269\u6709\u673a\u7f51",
                    "target": "\u6709\u673a\u4e4b\u9053"
                },
                {
                    "source": "O\u4f3c\u4e4e\u662f\u6c27",
                    "target": "\u4e59\u9178"
                },
                {
                    "source": "\u4e59\u70ef",
                    "target": "\u4e59\u9178"
                },
                {
                    "source": "\u56da\u7981\u4e00\u4e2a\u6076\u9b54\u2014\u2014\u2014\u2014\u51cb\u7075\u5c60\u5bb0\u573a",
                    "target": "\u53ea\u6709\u4e00\u4e2a\u4eba\u80fd\u6d3b\u4e0b\u6765..."
                },
                {
                    "source": "\u917f\u9020\u6db2\u4f53",
                    "target": "\u70c8\u9152"
                },
                {
                    "source": "\u5316\u5b66\u8131\u6c34\u673a",
                    "target": "\u771f\u6b63\u7684\u7a00\u571f"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!",
                    "target": "\u5927\u578b\u94dd\u6d41\u4f53\u5355\u5143"
                },
                {
                    "source": "\u4e09\u6c2f\u7845\u70f7 \u7eed",
                    "target": "\u592a\u9633\u80fd\u7ea7\u7845"
                },
                {
                    "source": "\u56db\u6c2f\u5316\u7845 \u7eed",
                    "target": "\u592a\u9633\u80fd\u7ea7\u7845"
                },
                {
                    "source": "\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)",
                    "target": "\u7384\u94a2\u7ba1\u9053"
                },
                {
                    "source": "\u7b80\u5355\u7684\u7269\u54c1\u8f6c\u79fb",
                    "target": "\u7b80\u5355\u7684\u6db2\u4f53\u8f6c\u79fb"
                },
                {
                    "source": "\u673a\u5668\u6846\u67b6",
                    "target": "\u53d8\u5f97\u6f02\u4eae"
                },
                {
                    "source": "\u5bfc\u7ba1",
                    "target": "\u53d8\u5f97\u6f02\u4eae"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5",
                    "target": "\u5f53\u4f60\u9700\u8981\u65f6,\u90a3\u4e2a\u52e4\u6742\u5de5\u5728\u54ea?"
                },
                {
                    "source": "\u4f60\u7528\u5b8c\u4e86\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\uff1f",
                    "target": "\u6c5e\u592a\u591a\u4e86?"
                },
                {
                    "source": "\u79cd\u5b50\u6cb9",
                    "target": "\u751f\u7269\u67f4\u6cb91"
                },
                {
                    "source": "\u6c22\u6c27\u5316\u94a01",
                    "target": "\u751f\u7269\u67f4\u6cb91"
                },
                {
                    "source": "\u9c7c\u6cb9",
                    "target": "\u751f\u7269\u67f4\u6cb91"
                },
                {
                    "source": "\u7532\u9187",
                    "target": "\u751f\u7269\u67f4\u6cb91"
                },
                {
                    "source": "\u4e59\u91871",
                    "target": "\u751f\u7269\u67f4\u6cb91"
                },
                {
                    "source": "\u538b\u51fa\u6240\u6709\u4e1c\u897f(Extrude all the things)",
                    "target": "\u7ba1\u9053,\u7ba1\u9053\u65e0\u5904\u4e0d\u5728"
                },
                {
                    "source": "\u8fdb\u9636\u6d41\u4f53\u63d0\u53d6\u673a",
                    "target": "\u9c7c\u6cb9"
                },
                {
                    "source": "\u7845\u6676\u5706",
                    "target": "\u592a\u9633\u80fd"
                },
                {
                    "source": "\u592a\u9633\u80fd\u7ea7\u952d",
                    "target": "\u7845\u677f"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "target": "\u538b\u5236MV\u9636\u6bb5\u7684\u4e00\u5207"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "MV\u9636\u6bb5\u7684\u6405\u62cc"
                },
                {
                    "source": "\u96c6\u6210\u903b\u8f91\u7535\u8def1",
                    "target": "\u4e0d\u9519\u7684\u96c6\u6210\u7535\u8def"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2",
                    "target": "\u51b7\u5374\u574e\u5854\u5c14\u5408\u91d1"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #1",
                    "target": "\u51b7\u5374\u574e\u5854\u5c14\u5408\u91d1"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u6b22\u8fce\u6765\u5230\u5927\u82ef\u73af\u795e\u6559"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u7b80\u5355\u7684\u7269\u54c1\u8f6c\u79fb"
                },
                {
                    "source": "\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae",
                    "target": "\u7384\u94a2\u7bb1\u5b50"
                },
                {
                    "source": "\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)",
                    "target": "\u7384\u94a2\u7bb1\u5b50"
                },
                {
                    "source": "\u8f7b\u71c3\u6cb91",
                    "target": "\u67f4\u6cb91"
                },
                {
                    "source": "\u91cd\u71c3\u6cb91",
                    "target": "\u67f4\u6cb91"
                },
                {
                    "source": "MV\u9636\u6bb5\u7684\u6405\u62cc",
                    "target": "\u67f4\u6cb91"
                },
                {
                    "source": "\u4f60\u53d7\u591f\u4e86?\u6211\u6253\u8d4c\u4f60\u89c9\u5f97\u62a5\u7eb8\u65e9\u5c31\u6b7b\u4e86!",
                    "target": "\u4f60\u89c9\u5f97\u4f60\u662f\u975e\u914b?"
                },
                {
                    "source": "\u592a\u9633\u80fd",
                    "target": "\u592a\u9633\u4e4b\u529b(ULV)"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u751f\u7269\u8d28\u71c3\u6599"
                },
                {
                    "source": "\u917f\u9020\u6db2\u4f53",
                    "target": "\u706b\u7130\u6c34"
                },
                {
                    "source": "MV\u7ea7\u80fd\u6e90\u4ed3",
                    "target": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089"
                },
                {
                    "source": "\u4f60\u51c6\u5907\u597d\u8fc8\u5411HV\u4e86\u5417\uff1f",
                    "target": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089"
                },
                {
                    "source": "\u690d\u7269\u56e2\u5757",
                    "target": "\u7ce0"
                },
                {
                    "source": "\u917f\u9020\u6db2\u4f53",
                    "target": "\u7f8e\u5473\u7684..."
                },
                {
                    "source": "\u4e00\u79cd\u77ff\u7269\u5904\u7406...",
                    "target": "\u6709\u7814\u78e8\u5934\u603b\u6bd4\u6ca1\u6709\u597d"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "source": "\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV",
                    "target": "\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "source": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3",
                    "target": "\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "source": "\u8fdb\u9636\u7535\u5b50\u7535\u8def(Good Circuits.)",
                    "target": "\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "source": "\u4e59\u9170\u6c34\u6768\u9178(C9H8O4)...\u6c2f\u5316\u94a0(NaCl)...\u6c34(H2O)...",
                    "target": "\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "source": "\u7194\u878d\u805a\u4e59\u70ef",
                    "target": "\u80f6\u6c34\u7559\u75d5(Hangover From All That Glue)?"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!",
                    "target": "\u80f6\u6c34\u7559\u75d5(Hangover From All That Glue)?"
                },
                {
                    "source": "IO,IO,\u6211\u4eec\u53bbEnderIO",
                    "target": "\u5bfc\u7ba1"
                },
                {
                    "source": "\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d",
                    "target": "\u592a\u9633\u80fd\u7ea7\u952d"
                },
                {
                    "source": "\u51b7\u5374\u6db2",
                    "target": "\u592a\u9633\u80fd\u7ea7\u952d"
                },
                {
                    "source": "\u592a\u9633\u80fd\u7ea7\u7845",
                    "target": "\u592a\u9633\u80fd\u7ea7\u952d"
                },
                {
                    "source": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3",
                    "target": "\u592a\u9633\u80fd\u7ea7\u952d"
                },
                {
                    "source": "\u7535\u89e3\u4e07\u7269",
                    "target": "O\u4f3c\u4e4e\u662f\u6c27"
                },
                {
                    "source": "\u7194\u878d\u5851\u6599",
                    "target": "\u6c2f\u5316\u94c11"
                },
                {
                    "source": "\u673a\u5668\u6846\u67b6",
                    "target": "\u4e00\u79cd\u77ff\u7269\u5904\u7406..."
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5"
                },
                {
                    "source": "\u56db\u6c2f\u5316\u7845 \u7eed",
                    "target": "\u5934\u75bc(Salty)\u7684\u7845\u4ea7\u7ebf?"
                },
                {
                    "source": "\u7ce0",
                    "target": "\u8def\u7ebf\u4e09\uff1a\u70ed\u89e3\u7089"
                },
                {
                    "source": "\u751f\u78b3\u7f51",
                    "target": "\u78b3\u677f"
                },
                {
                    "source": "\u5316\u5b66\u8bfe,\u7b2c\u4e8c\u90e8\u5206",
                    "target": "\u4e59\u70ef\u916e"
                },
                {
                    "source": "\u4e59\u9178",
                    "target": "\u4e59\u70ef\u916e"
                },
                {
                    "source": "\u4e8c\u6c27\u5316\u7845",
                    "target": "\u751f\u7845\u7c89"
                },
                {
                    "source": "\u7535\u89e3\u4e07\u7269",
                    "target": "\u751f\u7845\u7c89"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6",
                    "target": "\u4fbf\u643a\u63a2\u77ff\u4eea"
                },
                {
                    "source": "\u4e59\u70ef",
                    "target": "\u6c2f\u4e59\u70ef"
                },
                {
                    "source": "\u96c6\u6210\u903b\u8f91\u7535\u8def\u548cRAM\u82af\u7247",
                    "target": "\u96c6\u6210\u903b\u8f91\u7535\u8def1"
                },
                {
                    "source": "\u57fa\u7840\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u96c6\u6210\u903b\u8f91\u7535\u8def1"
                },
                {
                    "source": "\u5355\u6676\u7845",
                    "target": "\u7845\u6676\u5706"
                },
                {
                    "source": "\u53d1\u9175\u751f\u7269\u8d281",
                    "target": "\u7532\u9187"
                },
                {
                    "source": "\u5316\u5c18\u4e3a\u6676",
                    "target": "\u751f\u7269\u6709\u673a\u7f51"
                },
                {
                    "source": "\u690d\u7269\u7403",
                    "target": "\u751f\u7269\u6709\u673a\u7f51"
                },
                {
                    "source": "MV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "target": "\u96c6\u6210\u903b\u8f91\u7535\u8def\u548cRAM\u82af\u7247"
                },
                {
                    "source": "\u751f\u7845\u7c89",
                    "target": "\u4e09\u6c2f\u7845\u70f7"
                },
                {
                    "source": "\u7535\u89e3\u4e07\u7269",
                    "target": "\u4e8c\u6c27\u5316\u7845"
                },
                {
                    "source": "\u7535\u89e3\u4e07\u7269",
                    "target": "\u7535\u89e3\u7c98\u571f"
                },
                {
                    "source": "\u8fdb\u9636\u5377\u677f\u673a",
                    "target": "\u533a\u5757\u52a0\u8f7d"
                },
                {
                    "source": "\u5316\u5b66\u8bfe,\u7b2c\u4e8c\u90e8\u5206",
                    "target": "\u4e59\u70ef"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u4e59\u70ef"
                },
                {
                    "source": "\u65b9\u6cd5\u4e00:IC2\u6d41\u4f53/\u56fa\u4f53\u88c5\u7f50\u673a",
                    "target": "\u751f\u7269\u8d28"
                },
                {
                    "source": "\u8def\u7ebf\u4e09\uff1a\u70ed\u89e3\u7089",
                    "target": "\u751f\u7269\u8d28"
                },
                {
                    "source": "\u65b9\u6cd5\u4e8c:\u917f\u9020",
                    "target": "\u751f\u7269\u8d28"
                },
                {
                    "source": "IO,IO,\u6211\u4eec\u53bbEnderIO",
                    "target": "\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)"
                },
                {
                    "source": "\u7535\u89e3\u4e07\u7269",
                    "target": "\u7535\u89e3\u787c\u7802"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u6c22\u6c27\u5316\u94a01"
                },
                {
                    "source": "\u673a\u5668\u6846\u67b6",
                    "target": "\u7b80\u6613RF\u80fd\u6e90:\u56fa\u4f53"
                },
                {
                    "source": "\u7ce0",
                    "target": "\u65b9\u6cd5\u4e8c:\u917f\u9020"
                },
                {
                    "source": "\u53d1\u9175\u751f\u7269\u8d281",
                    "target": "\u4e59\u91871"
                },
                {
                    "source": "\u94bd\u77ff\u77f3",
                    "target": "\u673a\u5668\u6846\u67b6"
                },
                {
                    "source": "\u673a\u5668\u6846\u67b6",
                    "target": "\u4fbf\u643a\u5f0f\u50a8\u7f50"
                },
                {
                    "source": "\u751f\u7269\u67f4\u6cb91",
                    "target": "\u7518\u6cb9"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4",
                    "target": "\u52a0\u901f\u7f13\u6162\u7684\u673a\u5668"
                },
                {
                    "source": "\u7194\u878d\u805a\u4e59\u70ef",
                    "target": "\u751f\u78b3\u7f51"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #4",
                    "target": "\u5316\u5b66\u8131\u6c34\u673a"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!",
                    "target": "\u65b0\u7684\u5408\u91d1-\u9b42\u91d1"
                },
                {
                    "source": "MV\u81ea\u52a8\u91c7\u77ff\u673a",
                    "target": "\u706b\u77f3\u77ff/\u7c89"
                },
                {
                    "source": "\u6c2f\u5316\u94c11",
                    "target": "\u6c22\u6c2f\u9178"
                },
                {
                    "source": "\u8fc7\u786b\u9178\u94a01",
                    "target": "\u6c22\u6c2f\u9178"
                },
                {
                    "source": "\u4e09\u6c2f\u7845\u70f7",
                    "target": "\u6c22\u6c2f\u9178"
                },
                {
                    "source": "\u53d1\u9175\u751f\u7269\u8d281",
                    "target": "\u7532\u70f72"
                },
                {
                    "source": "\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)",
                    "target": "\u4f60\u60f3\u8981\u7684\u6240\u6709\u4f5c\u7269"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "target": "\u4e0d\u9508\u94a2\u592a\u96be\u70e7\u4e86\uff1f"
                },
                {
                    "source": "\u7194\u878d\u805a\u4e59\u70ef",
                    "target": "\u7194\u878d\u5851\u6599"
                },
                {
                    "source": "\u6d41\u4f53\u56fa\u5316\u5668",
                    "target": "\u7194\u878d\u5851\u6599"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "target": "\u538b\u51fa\u6240\u6709\u4e1c\u897f(Extrude all the things)"
                },
                {
                    "source": "\u6c2f\u5316\u94c11",
                    "target": "\u5851\u6599\u7535\u8def\u57fa\u677f1"
                },
                {
                    "source": "\u8fc7\u786b\u9178\u94a01",
                    "target": "\u5851\u6599\u7535\u8def\u57fa\u677f1"
                },
                {
                    "source": "\u8fdb\u9636\u79bb\u5fc3\u673a",
                    "target": "\u4f60\u7528\u5b8c\u4e86\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\uff1f"
                },
                {
                    "source": "\u751f\u7845\u7c89",
                    "target": "\u56db\u6c2f\u5316\u7845"
                },
                {
                    "source": "IO,IO,\u6211\u4eec\u53bbEnderIO",
                    "target": "\u94bd\u77ff\u77f3"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2",
                    "target": "\u6d41\u4f53\u56fa\u5316\u5668"
                },
                {
                    "source": "\u7837\u5316\u9553\u6676\u4f53",
                    "target": "\u5355\u6676\u7845"
                },
                {
                    "source": "\u592a\u9633\u80fd\u7ea7\u7845",
                    "target": "\u5355\u6676\u7845"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "IO,IO,\u6211\u4eec\u53bbEnderIO"
                },
                {
                    "source": "\u56db\u6c2f\u5316\u7845",
                    "target": "\u56db\u6c2f\u5316\u7845 \u7eed"
                },
                {
                    "source": "\u5bfc\u7ba1",
                    "target": "\u5347\u7ea7\u5bfc\u7ba1"
                },
                {
                    "source": "\u51b7\u5374\u6db2",
                    "target": "\u6563\u70ed2"
                },
                {
                    "source": "\u538b\u51fa\u6240\u6709\u4e1c\u897f(Extrude all the things)",
                    "target": "\u66f4\u597d\u7684\u5de5\u5177"
                },
                {
                    "source": "\u7ec8\u7ed3...",
                    "target": "MV\u8d85\u5bfc(128 EU/t)"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "target": "MV\u8d85\u5bfc(128 EU/t)"
                },
                {
                    "source": "\u66f4\u591a\u7684\u70ed\u91cf - \u574e\u5854\u5c14\u7ebf\u5708",
                    "target": "MV\u8d85\u5bfc(128 EU/t)"
                },
                {
                    "source": "\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)",
                    "target": "\u56da\u7981\u4e00\u4e2a\u6076\u9b54\u2014\u2014\u2014\u2014\u51cb\u7075\u5c60\u5bb0\u573a"
                },
                {
                    "source": "\u8fdb\u9636\u6d41\u4f53\u63d0\u53d6\u673a",
                    "target": "\u79cd\u5b50\u6cb9"
                },
                {
                    "source": "\u533a\u5757\u52a0\u8f7d",
                    "target": "\u5c06\u90a3\u4e9b\u533a\u5757,\u53d8\u6210\u4e00\u884c"
                },
                {
                    "source": "\u7194\u878d\u805a\u4e59\u70ef",
                    "target": "\u8d85\u7ea7\u7f38 I"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2",
                    "target": "\u8d85\u7ea7\u7f38 I"
                },
                {
                    "source": "\u6676\u4f53\u7ba11",
                    "target": "\u9ad8\u7ea7\u7535\u8def\u677f"
                },
                {
                    "source": "\u4e0d\u9519\u7684\u96c6\u6210\u7535\u8def",
                    "target": "\u9ad8\u7ea7\u7535\u8def\u677f"
                },
                {
                    "source": "\u4fbf\u643a\u5f0f\u50a8\u7f50",
                    "target": "\u7b80\u6613RF\u80fd\u6e90:\u6db2\u4f53"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3"
                },
                {
                    "source": "\u5f53\u4f60\u9700\u8981\u65f6,\u90a3\u4e2a\u52e4\u6742\u5de5\u5728\u54ea?",
                    "target": "\u54d4...\u54d4...\u54d4..."
                },
                {
                    "source": "\u5bfc\u7ba1",
                    "target": "\u53e6\u4e00\u79cd\u6273\u624b"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5",
                    "target": "MV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a"
                },
                {
                    "source": "\u7845\u6676\u5706",
                    "target": "MV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a"
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
    