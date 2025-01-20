
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
                    "name": "\u66f4\u597d\u7684\u5bfb\u627e\u7269\u54c1\u65b9\u5f0f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2026.png",
                    "x": 600.0,
                    "y": 288.0,
                    "data": "NEI\u5177\u6709\u5185\u7f6e\u641c\u7d22\u529f\u80fd,\u7528\u4e8e\u67e5\u627e\u5b58\u50a8\u5728\u9644\u8fd1\u5e93\u5b58\u4e2d\u7684\u7269\u54c1. \u4ed3\u5e93\u76ee\u5f55(Stockroom-Catalog)\u53ef\u4ee5\u663e\u793a\u4f60\u5e93\u5b58\u4e2d\u7684\u7269\u54c1\u5217\u8868.%n%n\u624b\u6301\u4ed3\u5e93\u76ee\u5f55Shift+\u53f3\u952e\u4e00\u4e2a\u65b0\u5e93\u5b58(\u7bb1\u5b50\u3001\u4e66\u67b6\u3001\u6876\u4ee5\u53ca\u4efb\u4f55\u6709\u7269\u54c1\u680f\u7684\u4e1c\u897f),\u6765\u5c06\u8fd9\u4e2a\u5e93\u5b58\u52a0\u5165\u4ed3\u5e93\u76ee\u5f55\u4e2d\u8fdb\u884c\u8ffd\u8e2a.%n%n\u518d\u6b21Shift+\u53f3\u952e\u76f8\u540c\u7684\u65b9\u5757\u6765\u4ece\u76ee\u5f55\u4e2d\u79fb\u9664\u6b64\u5e93\u5b58.%n%n\u5728\u4ed3\u5e93\u76ee\u5f55\u4e2d\u7684\u65b9\u5757\u4f1a\u6709\u5c0f\u5c0f\u7684\u7c92\u5b50\u6548\u679c,\u8ba9\u4f60\u77e5\u9053\u5b83\u6b63\u5728\u88ab\u8ffd\u8e2a.%n%n\u624b\u6301\u4ed3\u5e93\u76ee\u5f55\u53f3\u952e\u53ef\u4ee5\u6253\u5f00\u5b83\u7684GUI\u5e76\u770b\u5230\u5217\u8868.  \u4f60\u53ef\u4ee5\u5bf9\u5217\u8868\u8fdb\u884c\u6392\u5e8f,\u5305\u62ec\u5347\u5e8f\u548c\u964d\u5e8f\u3001\u6570\u91cf(\u8ba1\u6570)\u6216\u5b57\u6bcd\u987a\u5e8f.%n%n\u4f60\u8fd8\u53ef\u4ee5\u770b\u5230\u6709\u67d0\u4ef6\u7279\u5b9a\u7269\u54c1\u7684\u6240\u6709\u5e93\u5b58\u5217\u8868,\u5e76\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5c06\u5176\u4e2d\u67d0\u4e2a\u5e93\u5b58\u52a0\u5165\u53e6\u4e00\u4e2a\u4ed3\u5e93\u76ee\u5f55,\u4ee5\u4fbf\u67e5\u627e\u7269\u54c1.%n%n\u4ed3\u5e93\u76ee\u5f55\u8fd8\u53ef\u4ee5\u7528\u6392\u7248\u53f0\u548c\u62d3\u5370\u673a\u590d\u5370.%n%n\u70b9\u51fb\u4ed3\u5e93\u76ee\u5f55\u7684\u6807\u9898\u53ef\u4ee5\u968f\u610f\u6539\u52a8,\u53ef\u4ee5\u7528\u4e8e\u81ea\u5b9a\u4e49\u6807\u8bb0\u4ed3\u5e93\u76ee\u5f55.%n%n\u70b9\u51fb\u6bcf\u4e2a\u5217\u8868\u53f3\u4fa7\u7684\u5c0f\u7bb1\u5b50\u56fe\u6807\u53ef\u4ee5\u6253\u5f00\u5e93\u5b58\u5217\u8868\u89c6\u56fe.%n%n\u5982\u679c\u4f60\u60f3\u7684\u8bdd,\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e2a\u8def\u6807\u76d8,\u7528\u6765\u6307\u5411\u4f60\u8981\u627e\u7684\u7bb1\u5b50.\u7531\u4e8e\u6211\u4eec\u5df2\u7ecf\u6709\u4e86\u65c5\u884c\u5730\u56fe\u548cNEI,\u6240\u4ee5\u8fd9\u73a9\u610f\u4e0d\u662f\u5fc5\u9700\u54c1.%n%n[warn]\u4e0d\u8fc7\u4ed3\u5e93\u76ee\u5f55\u8c8c\u4f3c\u6709\u70b9\u574f\u4e86,\u5bf9GT\u7269\u54c1\u4e0d\u592a\u517c\u5bb9.[/warn]%n%n\u8bd1\u8005\u6ce8:\u4ed3\u5e93\u76ee\u5f55\u4e0d\u80fd\u6b63\u786e\u663e\u793a\u5f88\u591aGT\u7269\u54c1\u7684\u540d\u5b57,\u6240\u4ee5...\u867d\u7136\u5b83\u662f\u4e2a\u597d\u4e1c\u897f,\u4f46\u5728GTNH\u91cc\u53ef\u80fd\u7528\u5904\u4e0d\u5927...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH6g==",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u5bfb\u627e\u7269\u54c1\u65b9\u5f0f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e66"
                },
                {
                    "name": "\u52a0\u901f\u690d\u7269\u751f\u957f\u901f\u5ea6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/705.png",
                    "x": 156.0,
                    "y": 324.0,
                    "data": "\u690d\u7269\u751f\u957f\u5f97\u5f88\u7f13\u6162,\u4f60\u73b0\u5728\u5e94\u8be5\u53d1\u73b0\u8fd9\u70b9\u4e86.\u6240\u4ee5\u4f55\u4e0d\u8bd5\u7740\u52a0\u70b9\u901f\uff1f\u6d12\u6c34\u58f6\u9a6c\u4e0a\u5c31\u53ef\u4ee5\u6d3e\u4e0a\u7528\u573a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACwQ==",
                    "tooltip": "<strong>\u52a0\u901f\u690d\u7269\u751f\u957f\u901f\u5ea6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u6e05\u6670\u7684\u89c6\u91ce",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/52.png",
                    "x": 696.0,
                    "y": 144.0,
                    "data": "\u4f60\u8fd8\u4f4f\u5728\u90a3\u7528\u6ce5\u571f\u6216\u5706\u77f3\u505a\u7684\u706b\u67f4\u76d2\u91cc\u5417\uff1f\u4f55\u4e0d\u8ba9\u9633\u5149\u7167\u8fdb\u6765\u5462\uff1f\u78e8\u788e\u4e00\u4e9b\u6c99\u5b50\u548c\u71e7\u77f3,\u505a\u4e9b\u73bb\u7483\u7c89\u653e\u8fdb\u4f60\u7684\u51b6\u70bc\u7089\u91cc,\u63a5\u7740\u628a\u5b83\u4eec\u5012\u5230\u94f8\u9020\u76c6\u91cc,\u505a\u4e9b\u901a\u900f\u73bb\u7483.%n%n[note]\u63d0\u793a:\u8981\u60f3\u4f7f\u7528\u6b64\u914d\u65b9,\u4f60\u5fc5\u987b\u5148\u7528\u51ff\u5b50\u5904\u7406\u5b83.[/note]%n%n[note]PS\uff1a\u7c89\u788e\u673a\u4e0d\u518d\u51fa\u4ea7\u5c0f\u64ae\u7c89,\u624b\u6413\u5427.\u7b49\u4f60\u5728LV\u9636\u6bb5\u62e5\u6709\u4e00\u53f0\u6405\u62cc\u673a\u540e,\u4e00\u5b9a\u4f1a\u5f88\u559c\u6b22\u8fd9\u4e00\u70b9\u7684.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAANA==",
                    "tooltip": "<strong>\u6e05\u6670\u7684\u89c6\u91ce</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f"
                },
                {
                    "name": "\u9ad8\u7ea7\u592a\u9633\u80fd\u9505\u7089",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2389.png",
                    "x": 84.0,
                    "y": 216.0,
                    "data": "\u5f53\u6709\u4e86\u4e00\u4e9b\u84b8\u6c7d\u673a\u5668\u540e,\u4f60\u53ef\u4ee5\u5236\u9020\u4e00\u4e9b\u9ad8\u7ea7\u592a\u9633\u80fd\u9505\u7089.\u5b83\u4eec\u7684\u6bcf\u79d2\u84b8\u6c7d\u8f93\u51fa\u66f4\u9ad8,\u5176\u4ed6\u65b9\u9762\u4e0e\u7b80\u6613\u592a\u9633\u80fd\u9505\u7089\u76f8\u540c.%n%n\u4ece\u5b83\u7684\u5e95\u90e8\u901a\u5165\u6c34,\u4e0e\u5176\u4ed6\u9505\u7089\u4e0d\u540c,\u8fd9\u4e2a\u9505\u7089\u53ea\u5728\u8f93\u51fa\u53e3\u8f93\u51fa\u84b8\u6c7d.%n%n\u63d0\u793a:\u8bf7\u8bb0\u4f4f\u592a\u9633\u80fd\u9505\u7089\u4f1a\u9499\u5316,\u5e76\u968f\u7740\u65f6\u95f4\u63a8\u79fb\u964d\u4f4e\u6548\u80fd-\u4e0d\u8fc7\u84b8\u6c7d\u8f93\u51fa\u6700\u4f4e\u53ea\u4f1a\u964d\u5230120L/s,\u800c\u4e0d\u662f\u548c\u7b80\u6613\u592a\u9633\u80fd\u9505\u7089\u4e00\u6837\u964d\u4f4e\u523040L/s.\u7b49\u5230\u7535\u529b\u65f6\u4ee3,\u4f60\u5c31\u80fd\u4f7f\u7528\u84b8\u998f\u6c34\u9632\u6b62\u9499\u5316.%n%n[note]\u4f60\u9700\u8981\u6765\u81ea\u66ae\u8272\u68ee\u6797(LV+)\u6216\u8d2b\u7620\u77ff\u77f3\u7684\u94f6.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJVQ==",
                    "tooltip": "<strong>\u9ad8\u7ea7\u592a\u9633\u80fd\u9505\u7089</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6bd4\u94c1\u66f4\u597d</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!</br>\u592a\u9633\u4e4b\u529b"
                },
                {
                    "name": "\u4e00\u4e2a\u9002\u5408\u505a\u56fd\u738b\u7684\u50bb\u74dc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2140.png",
                    "x": 492.0,
                    "y": 132.0,
                    "data": "\u53ea\u6709\u6700\u75af\u72c2\u7684\u50bb\u74dc\u624d\u4f1a\u7528\u94bb\u77f3\u5236\u4f5c\u5de5\u5177! \u4e5f\u8bb8\u8fd9\u4e2a\u75af\u5b50\u5927\u667a\u82e5\u611a?%n%nPS\uff1a\u4f60\u8fd8\u53ef\u4ee5\u628a\u5b83\u4eec\u7528\u4f5c\u71c3\u6599,\u8fd9\u592a\u75af\u72c2\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIXA==",
                    "tooltip": "<strong>\u4e00\u4e2a\u9002\u5408\u505a\u56fd\u738b\u7684\u50bb\u74dc</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u54e6!\u95ea\u95ea\u53d1\u5149(\u4e0d\u662f\u767d\u91d1!)"
                },
                {
                    "name": "\u8010\u9178\u94dd",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1126.png",
                    "x": 216.0,
                    "y": 144.0,
                    "data": "\u53c8\u5230\u4e86\u5347\u7ea7\u65f6\u95f4!\u7406\u8bba\u4e0a\u4f60\u53ef\u4ee5\u5728\u51b6\u70bc\u7089\u91cc\u9762\u901a\u8fc7\u7194\u5408\u94a2\u3001\u94dd\u548c\u9ed1\u66dc\u77f3\u5f97\u5230\u8010\u9178\u94dd,\u4f46\u4e3a\u4e86\u66f4\u9ad8\u7684\u4ea7\u7387,\u4f60\u53ef\u4ee5\u5c55\u793a\u4f60\u662f\u4e00\u540d\u683c\u96f7\u79d1\u6280\u7684\u4f18\u79c0\u5458\u5de5,\u5728NEI\u91cc\u67e5\u8be2\u5230\u53e6\u4e00\u79cd\u4f7f\u7528\u91d1\u5c5e\u7c89\u7684\u5236\u4f5c\u914d\u65b9. \u8010\u9178\u94dd\u5236\u4f5c\u7684\u9550\u53ef\u4ee5\u5728\u4e0b\u754c\u91c7\u96c6\u963f\u8fea\u7279\u77ff\u77f3\u548c\u94b4\u77ff\u77f3.%n%n\u5c06\u5269\u4f59\u7684\u8010\u9178\u94dd\u7559\u5728\u51b6\u70bc\u7089\u4e2d,\u4f60\u5c06\u4f1a\u7528\u5230\u5b83\u6765\u953b\u9020\u5de5\u5177.\u4f60\u9700\u898116\u4e2a\u952d\u6765\u5236\u90202\u5757\u5927\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEZg==",
                    "tooltip": "<strong>\u8010\u9178\u94dd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "Java\u7684\u53e6\u4e00\u4e2a\u7528\u9014,\u5443,\u6211\u662f\u8bf4\u5ca9\u6d46(Lava)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/61.png",
                    "x": 48.0,
                    "y": 144.0,
                    "data": "\u73b0\u5728\u4f60\u6709\u94a2\u4e86, \u7ec8\u4e8e\u53ef\u4ee5\u505a\u51fa\u4e00\u53f0\u8db3\u4ee5\u4f7f\u7528\u5ca9\u6d46\u7684\u9505\u7089. \u84b8\u6c7d\u53ea\u4f1a\u4ece\u80cc\u9762\u8f93\u51fa,\u4f60\u9700\u8981\u4ece\u4fa7\u9762\u8f93\u5165\u6c34\u5e76\u4ece\u9876\u90e8\u8f93\u5165\u5ca9\u6d46. \u4f60\u8fd8\u4f1a\u989d\u5916\u83b7\u5f97\u9ed1\u66dc\u77f3!%n%n\u4f60\u77e5\u9053\u5417\uff1f\u8d85\u8fc730\u4ebf\u53f0\u673a\u5668\u5728Lava\u4e0a\u8fd0\u884c\uff08Java\uff09\uff01",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAPQ==",
                    "tooltip": "<strong>Java\u7684\u53e6\u4e00\u4e2a\u7528\u9014,\u5443,\u6211\u662f\u8bf4\u5ca9\u6d46(Lava)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u8be5\u600e\u4e48\u5b58\u50a8\u8fd9\u4e48\u591a\u6d41\u4f53?</br>\u84b8\u6c7d\u66ff\u4ee3\u54c1</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!"
                },
                {
                    "name": "\u5b8c\u5168\u4e0d\u540c\u7684\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/119.png",
                    "x": 60.0,
                    "y": 444.0,
                    "data": "\u5982\u679c\u4f60\u6536\u96c6\u4e86\u602a\u7269\u6389\u843d\u7684\u5251\u6216\u8005\u62a4\u7532,\u90a3\u4e48\u666e\u901a\u7684\u7bb1\u5b50\u5f88\u5feb\u5c31\u4f1a\u88ab\u586b\u6ee1.\u4f7f\u7528\u6587\u6863\u67dc,\u53ef\u4ee5\u5b58\u50a8\u6700\u591a270\u4e2a\u76f8\u540c\u7c7b\u578b\u7684\u4e1c\u897f.  \u6587\u6863\u67dc\u88ab\u7834\u574f\u6210\u4e3a\u7269\u54c1\u65f6,\u4f1a\u4fdd\u7559\u5176\u4e2d\u7684\u7269\u54c1.%n%n\u975e\u5e38\u9002\u5408\u5b58\u50a8IC2\u7684\u6742\u4ea4\u79cd\u5b50\u888b\u3001\u6797\u4e1a\u7684\u6811\u82d7\u6216\u871c\u8702!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAdw==",
                    "tooltip": "<strong>\u5b8c\u5168\u4e0d\u540c\u7684\u5b58\u50a8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u5408\u91d1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/48.png",
                    "x": 336.0,
                    "y": 72.0,
                    "data": "\u6700\u91cd\u8981\u7684\u5408\u91d1\u5f53\u7136\u662f\u7ea2\u8272\u5408\u91d1(\u76f4\u5230\u4f60\u5230\u8fbe\u66f4\u9ad8\u7684\u9636\u6bb5\u4e4b\u524d\u5566)!\u5e78\u8fd0\u7684\u662f,\u4f60\u6709\u4e00\u53f0\u5408\u91d1\u7089,\u6240\u4ee5,\u6293\u8d77\u4e9b\u7ea2\u77f3\u6765\u548c\u94dc\u7ed3\u5408,\u9001\u4f60\u81ea\u5df1\u4e00\u6253\u8fd9\u73a9\u610f\u5427!%n%n\u522b\u5c06\u9752\u94dc\u548c\u94dc\u6df7\u6dc6\u8d77\u6765,\u5426\u5219\u4f60\u4f1a\u5f88\u5934\u75bc\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAMA==",
                    "tooltip": "<strong>\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u5408\u91d1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u591a\u9ad8\u7ea7\u5408\u91d1"
                },
                {
                    "name": "\u6876\u5347\u7ea7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1124.png",
                    "x": 516.0,
                    "y": 288.0,
                    "data": "\u4f60\u7684\u539f\u77f3\u6216\u8005\u6ce5\u571f\u5df2\u7ecf\u5c06\u4f60\u7684\u6876\u90fd\u585e\u6ee1\u4e86\uff1f \u6ca1\u5173\u7cfb,\u5347\u7ea7!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEZA==",
                    "tooltip": "<strong>\u6876\u5347\u7ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!"
                },
                {
                    "name": "\u6876\u5347\u7ea7 T2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1125.png",
                    "x": 516.0,
                    "y": 324.0,
                    "data": "\u4ec0\u4e48\uff1f\u4f60\u7684\u6876\u53c8\u6ee1\u4e86\uff1f \u4e0d\u8981\u7d27,\u7ee7\u7eed\u5347\u7ea7!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEZQ==",
                    "tooltip": "<strong>\u6876\u5347\u7ea7 T2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6876\u5347\u7ea7"
                },
                {
                    "name": "\u6876\u5347\u7ea7 T3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2910.png",
                    "x": 516.0,
                    "y": 360.0,
                    "data": "\u4ec0\u4e48\uff1f\u4f60\u7684\u6876\u53c8\u6ee1\u4e86\uff1f \u4e0d\u8981\u7d27,\u7ee7\u7eed\u5347\u7ea7!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALXg==",
                    "tooltip": "<strong>\u6876\u5347\u7ea7 T3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6876\u5347\u7ea7 T2"
                },
                {
                    "name": "\u6876\u5347\u7ea7 T4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2911.png",
                    "x": 552.0,
                    "y": 360.0,
                    "data": "\u4ec0\u4e48\uff1f\u4f60\u7684\u6876\u53c8\u6ee1\u4e86\uff1f \u4e0d\u8981\u7d27,\u7ee7\u7eed\u5347\u7ea7!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALXw==",
                    "tooltip": "<strong>\u6876\u5347\u7ea7 T4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6876\u5347\u7ea7 T3"
                },
                {
                    "name": "\u6876\u5347\u7ea7 T5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2912.png",
                    "x": 588.0,
                    "y": 360.0,
                    "data": "\u4ec0\u4e48\uff1f\u4f60\u7684\u6876\u53c8\u6ee1\u4e86\uff1f \u4e0d\u8981\u7d27,\u7ee7\u7eed\u5347\u7ea7!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALYA==",
                    "tooltip": "<strong>\u6876\u5347\u7ea7 T5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6876\u5347\u7ea7 T4"
                },
                {
                    "name": "\u57fa\u7840\u5236\u4f5c:\u673a\u5668\u5916\u58f3",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/73.png",
                    "x": 216.0,
                    "y": 612.0,
                    "data": "\u6240\u6709\u673a\u5668\u90fd\u9700\u8981\u4e00\u4e2a\u5916\u58f3\u6765\u4fdd\u62a4\u5b83\u4eec\u7684\u654f\u611f\u90e8\u4ef6.\u597d\u6d88\u606f\u662f:\u5b83\u4eec\u6bcf\u4e00\u7b49\u7ea7\u90fd\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u5236\u4f5c,\u53ea\u6709\u6750\u6599\u53d1\u751f\u53d8\u5316.%n%n\u6b63\u5982tooltip\u6240\u8ff0,\u4f7f\u7528\u673a\u5668\u5916\u58f3\u53ef\u4ee5\u4f20\u8f931A\u7684\u7535\u6d41.\u8fd9\u53ef\u4ee5\u88ab\u7528\u4f5c1A\u4e8c\u6781\u7ba1,\u5c06\u7535\u7f06\u5185\u7684\u7535\u6d41\u5206\u51fa1A\u6216\u662f\u7528\u4e8e\u7a0d\u540e\u7684\u8d85\u51c0\u95f4--\u5728Thermos\u670d\u52a1\u5668\u91cc\u4f1a\u5f88\u6709\u7528.\u540c\u6837,\u7269\u54c1\u6216\u6d41\u4f53\u4e5f\u53ef\u4ee5\u901a\u8fc7\u673a\u5668\u5916\u58f3\u4f20\u8f93.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAASQ==",
                    "tooltip": "<strong>\u57fa\u7840\u5236\u4f5c:\u673a\u5668\u5916\u58f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)</br>\u6bd4\u94c1\u66f4\u597d"
                },
                {
                    "name": "\u57fa\u7840\u5236\u4f5c:\u9a6c\u8fbe",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/71.png",
                    "x": 696.0,
                    "y": 612.0,
                    "data": "\u7535\u52a8\u9a6c\u8fbe\u662f\u80fd\u591f\u5c06\u7535\u529b\u8f6c\u5316\u4e3a\u65cb\u8f6c\u80fd\u7684\u5c0f\u673a\u4ef6.\u5bf9\u4e8e\u6240\u6709\u7c7b\u578b\u7684\u673a\u5668\u90fd\u975e\u5e38\u6709\u7528,\u800c\u4e14\u5b83\u4e0d\u662f\u90a3\u4e48\u96be\u4ee5\u5236\u4f5c.\u4e0d\u540c\u7b49\u7ea7\u7684\u7535\u52a8\u9a6c\u8fbe\u7684\u5408\u6210\u65b9\u6cd5\u662f\u76f8\u4f3c\u7684,\u53ea\u6709\u6750\u6599\u968f\u7740\u7b49\u7ea7\u7684\u53d8\u5316\u800c\u53d8\u5316.\u73b0\u5728\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f60\u7684\u7ea2\u77f3\u6765\u78c1\u5316\u4f60\u7684\u94c1\u68d2,\u540e\u9762\u4f60\u5c06\u4f1a\u5236\u4f5c\u4e00\u4e2a\u78c1\u5316\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAARw==",
                    "tooltip": "<strong>\u57fa\u7840\u5236\u4f5c:\u9a6c\u8fbe</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)</br>\u7edd\u7f18\u7ebf\u7f06"
                },
                {
                    "name": "\u57fa\u7840\u5236\u4f5c:\u8f6c\u5b50",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/72.png",
                    "x": 336.0,
                    "y": 612.0,
                    "data": "\u4e0d\u540c\u7b49\u7ea7\u7684\u8f6c\u5b50\u7684\u5236\u4f5c\u65b9\u6cd5\u4e5f\u662f\u76f8\u4f3c\u7684,\u53ea\u662f\u6750\u6599\u4e0d\u540c.\u73b0\u5728\u5408\u6210\u8d77\u6765\u6709\u4e9b\u70e6\u4eba,\u4e0d\u8fc7\u4f60\u4e5f\u4e0d\u662f\u9700\u8981\u5f88\u591a\u7684\u8f6c\u5b50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAASA==",
                    "tooltip": "<strong>\u57fa\u7840\u5236\u4f5c:\u8f6c\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u5236\u4f5c:\u673a\u5668\u5916\u58f3"
                },
                {
                    "name": "\u66f4\u597d\u7684\u6c34\u69fd...\u94c1\u50a8\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/16.png",
                    "x": 744.0,
                    "y": 192.0,
                    "data": "\u60f3\u8981\u5728\u4e00\u4e2a\u6c34\u69fd\u4e2d\u50a8\u5b58\u8d85\u8fc716\u6876\u6db2\u4f53\uff1f\u90a3\u5c31\u505a\u4e00\u4e2a\u94c1\u50a8\u7f50\u6216\u5347\u7ea7\u4f60\u7684\u5c0f\u6c34\u69fd.%n%n\u94bb\u77f3\u50a8\u7f50\u53ef\u4ee5\u50a8\u5b5864\u6876,\u800c\u9ed1\u66dc\u77f3\u50a8\u7f50\u5219\u53ef\u4ee5\u9632\u7206.\u540e\u9762\u8fd8\u6709\u66f4\u5927\u7684\u50a8\u7f50,\u4e0d\u8fc7\u4f60\u53ef\u80fd\u66f4\u559c\u6b22GT\u7684\u8d85\u7ea7\u7f38\u6216\u662f\u5927\u578b\u6d41\u4f53\u5355\u5143.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAEA==",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u6c34\u69fd...\u94c1\u50a8\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u8be5\u600e\u4e48\u5b58\u50a8\u8fd9\u4e48\u591a\u6d41\u4f53?"
                },
                {
                    "name": "\u6bd4\u94c1\u66f4\u597d",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/948.png",
                    "x": 216.0,
                    "y": 456.0,
                    "data": "\u5f53\u4f60\u6709\u4e86\u4e00\u70b9\u94a2\u5e76\u4e14\u80fd\u591f\u5236\u4f5c\u9ad8\u538b\u84b8\u6c7d\u673a\u5668\u7684\u65f6\u5019,\u953b\u94c1\u5c31\u4f1a\u53d8\u5f97\u5341\u5206\u91cd\u8981. \u8fd9\u79cd\u6750\u6599\u6bd4\u94c1\u786c\u5f97\u591a(\u4f46\u8fd8\u662f\u6bd4\u4e0d\u4e0a\u94a2),\u953b\u94c1\u5e38\u7528\u4e8e\u5236\u9020\u673a\u5668\u5916\u58f3,\u4e5f\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u4e00\u4e9b\u8010\u4e45\u66f4\u597d\u7684\u5de5\u5177(\u8981\u662f\u4f60\u4e0d\u60f3\u6d88\u8017\u94a2\u7684\u8bdd).%n%n\u60f3\u8981\u5236\u9020\u953b\u94c1,\u9996\u5148\u9700\u8981\u5c06\u94c1\u952d\u653e\u8fdb\u5320\u9b42\u51b6\u70bc\u5382\u5236\u6210\u94c1\u7c92,\u4e5f\u53ef\u4ee5\u7528\u952f\u5b50\u624b\u5207\u51fa\u7c92.\u7136\u540e\u518d\u5c06\u94c1\u7c92\u653e\u8fdb\u7194\u7089\u5236\u6210\u953b\u94c1\u7c92.\u6700\u540e,\u4f60\u9700\u8981\u4f7f\u7528\u538b\u7f29\u673a\u5c06\u8fd9\u4e9b\u7c92\u5236\u6210\u952d.%n%n\u63d0\u793a: \u7c89\u788e\u6216\u8005\u79bb\u5fc3\u7684\u94c1\u77ff\u77f3(\u4e0d\u662f\u50cf\u9ec4\u94c1\u77ff\u8fd9\u79cd\u7684\u6df7\u5408\u7269,\u800c\u662f\u9ec4\u94dc\u77ff\u8109\u4e2d\u7684\u7eaf\u94c1\u77ff\u77f3)\u90fd\u53ef\u4ee5\u76f4\u63a5\u653e\u8fdb\u7194\u7089\u70e7\u70bc.\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5408\u91d1\u7089\u6765\u66f4\u5feb\u5730\u5c06\u952d\u5236\u6210\u7c92,\u6216\u662f\u76f4\u63a5\u7528\u952f\u5207.%n%n\u4ee5\u540e,\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u7535\u5f27\u7089\u76f4\u63a5\u5c06\u94c1\u952d\u5236\u6210\u953b\u94c1\u952d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADtA==",
                    "tooltip": "<strong>\u6bd4\u94c1\u66f4\u597d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u7194\u70bc!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/65.png",
                    "x": 216.0,
                    "y": 384.0,
                    "data": "\u662f\u65f6\u5019\u641e\u4e9b\u94a2\u4e86!\u8bf7\u67e5\u770b\u591a\u65b9\u5757\u4efb\u52a1,\u5efa\u9020\u7816\u9ad8\u7089.\u7b49\u4f60\u81f3\u5c11\u5236\u4f5c\u4e868\u4e2a\u94a2\u952d\u540e,\u56de\u5230\u8fd9\u9875\u63d0\u4ea4\u4efb\u52a1.%n%n*\u8fd8\u770b\u4e0d\u5230\u8fd9\u4e2a\u4efb\u52a1?\u4f60\u9700\u8981\u5728\u8fd9\u91cc\u591a\u5b8c\u6210\u4e9b\u4efb\u52a1,\u76f4\u5230\u89e3\u9501\u84b8\u6c7d\u538b\u7f29\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAQQ==",
                    "tooltip": "<strong>\u7194\u70bc!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599</br>\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!"
                },
                {
                    "name": "\u4e66",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1008.png",
                    "x": 576.0,
                    "y": 324.0,
                    "data": "\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u5728\u6751\u5e84\u6216\u8005\u6709\u7740\u7816\u5757\u5c4b\u9876\u7684\u5730\u7262\u91cc\u9762\u627e\u5230\u4e66. \u4e0d\u8fc7\u6211\u53ef\u4ee5\u544a\u8bc9\u4f60\u4e66\u7684\u5408\u6210\u8868.%n%n\u73b0\u5728,\u80f6\u6c34\u5728\u4f60\u7684\u624b\u4e0a...\u6216\u8005\u8bf4\u5728\u9a6c\u8eab\u4e0a\uff1f\u8bd5\u7740\u5c06\u4e00\u5339\u9a6c\u653e\u5230\u51b6\u70bc\u7089\u4e2d,\u5e76\u5582\u7ed9\u5b83\u4e00\u4e9b\u5e72\u8349\u4fdd\u8bc1\u5b83\u7684\u5b58\u6d3b.(\u52a8\u7269\u4fdd\u62a4\u8005\u534f\u4f1a\u8868\u793a\u5f3a\u70c8\u8c34\u8d23)%n%n\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u7b49\u5230\u80fd\u53bb\u4e0b\u754c\u4e4b\u540e,\u83b7\u53d6\u4e00\u4e9b\u786b.\u968f\u4f60\u9009\u54ea\u4e2a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD8A==",
                    "tooltip": "<strong>\u4e66</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599"
                },
                {
                    "name": "Bowl full of spaghetti(\u7897\u91cc\u5806\u6ee1\u4e86\u610f\u5927\u5229\u9762)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1735.png",
                    "x": 120.0,
                    "y": 12.0,
                    "data": "\u6216\u8005\u81f3\u5c11\u4f60\u7684\u5de5\u5382\u91cc\u5806\u6ee1\u4e86\u7269\u54c1\u7ba1\u9053.\u4f7f\u7528\u8fd9\u4e9b\u7b80\u5355\u7684\u7269\u54c1\u7ba1\u9053\u548c\u4f20\u9001\u5e26,\u4f60\u53ef\u4ee5\u4ece\u4e00\u53f0\u673a\u5668\u4e2d\u53d6\u51fa\u7269\u54c1\u5e76\u7acb\u5373\u5c06\u5b83\u4eec\u9001\u5165\u7b2c\u4e8c\u53f0\u673a\u5668.%n%n\u7a0d\u540e\u4f60\u53ef\u4ee5\u5236\u9020\u66f4\u597d\u7684\u7269\u54c1\u7ba1\u9053.\u5728NEI\u4e2d\u641c\u7d22\"\u7269\u54c1\u7ba1\u9053\",\u7136\u540e\u81ea\u884c\u9009\u62e9.%n%n[warn]\u62c6\u9664\u5b83\u4eec\u9700\u8981\u7528\u5230\u81f3\u5c11\u94a2\u6750\u8d28\u7684\u6273\u624b!\u6240\u4ee5\u5728\u4f60\u6709\u4e00\u4e2a\u65b0\u6273\u624b\u524d,\u8bf7\u5c0f\u5fc3\u653e\u7f6e\u8fd9\u4e9b\u7ba1\u9053.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGxw==",
                    "tooltip": "<strong>Bowl full of spaghetti(\u7897\u91cc\u5806\u6ee1\u4e86\u610f\u5927\u5229\u9762)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6f0f\u6597"
                },
                {
                    "name": "\u7535\u8def\u57fa\u677f2",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/834.png",
                    "x": 336.0,
                    "y": 528.0,
                    "data": "\u6bcf\u4e00\u5757\u7535\u8def\u677f\u90fd\u9700\u8981\u7535\u8def\u57fa\u677f. \u5b83\u7531\u8986\u819c\u7535\u8def\u57fa\u677f\u548c\u94dc\u5bfc\u7ebf\u5236\u4f5c\u800c\u6210.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADQg==",
                    "tooltip": "<strong>\u7535\u8def\u57fa\u677f2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u662f\u65f6\u5019\u641e\u4e9b\u903b\u8f91\u7535\u8def"
                },
                {
                    "name": "\u538b\u7f29\u6750\u6599",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/54.png",
                    "x": 576.0,
                    "y": 240.0,
                    "data": "\u8fd9\u7b80\u5355\u7684\u8bbe\u5907\u53ef\u4ee5\u505a\u5230\u975e\u5e38\u91cd\u8981\u7684\u5de5\u4f5c:\u538b\u7f29.\u628a9\u4e2a\u952d\u538b\u7f29\u6210\u4e00\u4e2a\u5757\u662f\u5b83\u7684\u4e3b\u8981\u529f\u80fd,\u4f46\u5b83\u5728\u5176\u4ed6\u5404\u79cd\u914d\u65b9\u4e2d\u4e5f\u6d3e\u5f97\u4e0a\u7528\u573a,\u4e3e\u4f8b\u6765\u8bf4,\u53ef\u4ee5\u7528\u5b83\u6765\u505a\u4e9b\u7ed3\u5b9e\u8c46\u8150.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAANg==",
                    "tooltip": "<strong>\u538b\u7f29\u6750\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f"
                },
                {
                    "name": "\u4e00\u6b21\u780d\u4e00\u4e2a\u539f\u6728\u5df2\u7ecf\u8fc7\u6c14\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/743.png",
                    "x": 288.0,
                    "y": 180.0,
                    "data": "\u5236\u4f5c\u4e00\u628a\u4f10\u6728\u65a7,\u4f60\u5c31\u53ef\u4ee5\u4e00\u6b21\u780d\u6389\u4e00\u6574\u68f5\u6811.\u5f53\u4f60\u51c6\u5907\u780d\u6389\u4e00\u68f5\u795e\u5723\u6a61\u6728\u65f6,\u522b\u5fd8\u4e86\u5e26\u4e0a\u4f60\u7684\u80cc\u5305.%n%n\u4e13\u4e1a\u5efa\u8bae:\u7528\u6728\u8d28\u6a21\u5177\u505a\u51fa\u4e00\u4e2a\u7eaf\u5730\u72f1\u5ca9\u6750\u8d28\u7684\u4f10\u6728\u65a7,\u6316\u6398\u901f\u5ea6\u8d8a\u6162,\u5347\u7ea7\u6240\u9700\u7684\u7ecf\u9a8c\u8d8a\u5c11.\u7136\u540e\u5728\u5347\u7ea7\u540e\u7684\u69fd\u4f4d\u4e2d\u6253\u4e0a\u8010\u4e45\u5347\u7ea7.\u7b49\u4f60\u7b49\u7ea7\u5237\u591f\u4e86(\u8bd1\u8005\u6ce8\uff1a\u5148\u6765\u4e00\u4e2a\u4e0d\u6bc1),\u5c31\u53ef\u4ee5\u66f4\u6362\u66f4\u597d(\u4e5f\u66f4\u5feb)\u7684\u6750\u6599\u4e86,\u4f8b\u5982\u94a2,\u94dd\u6216\u8005\u5176\u4ed6\u6750\u6599.\u8bb0\u4f4f,\u81ea\u52a8\u7194\u70bc\u4e0d\u4f1a\u751f\u6548,\u522b\u8bd5\u7740\u6253\u4e0a\u81ea\u52a8\u7194\u70bc.%n%n\u672c\u4efb\u52a1\u63a5\u53d7\u4efb\u610f\u6750\u6599\u5236\u6210\u7684\u4f10\u6728\u65a7",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC5w==",
                    "tooltip": "<strong>\u4e00\u6b21\u780d\u4e00\u4e2a\u539f\u6728\u5df2\u7ecf\u8fc7\u6c14\u4e86</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5177\u88c5\u914d\u53f0"
                },
                {
                    "name": "\u63d0\u53d6\u539f\u6599",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/51.png",
                    "x": 696.0,
                    "y": 252.0,
                    "data": "\u4e3a\u4e86\u4e4b\u540e\u9700\u8981\u7684\u6a61\u80f6--\u5305\u88f9\u5bfc\u7ebf\u3001\u5236\u4f5c\u7ebf\u7f06,\u4f60\u8be5\u5f04\u53f0\u84b8\u6c7d\u63d0\u53d6\u673a\u4e86.\u4f60\u4e5f\u53ef\u4ee5\u7528\u8fd9\u53f0\u673a\u5668,\u4ece\u82b1\u6735\u91cc\u5f97\u5230\u66f4\u591a\u7684\u67d3\u6599,\u6216\u8005\u5c06\u5404\u79cd\u6c34\u679c\u505a\u6210\u679c\u6c41.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAMw==",
                    "tooltip": "<strong>\u63d0\u53d6\u539f\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6e05\u6670\u7684\u89c6\u91ce"
                },
                {
                    "name": "\u989d\u5916\u7684\u5f3a\u5316",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1130.png",
                    "x": 540.0,
                    "y": 180.0,
                    "data": "\u5982\u679c\u4f60\u7684\u5de5\u5177\u6ca1\u6709\u5269\u4f59\u7684\u5f3a\u5316\u6b21\u6570\u4e86,\u53ef\u4ee5\u7528\u4e00\u4e2a\u914d\u65b9\u5f88\u5bb9\u6613\u5730\u589e\u52a0\u4e00\u6b21!%n\u53ea\u9700\u8981\u4e00\u4e2a\u91d1\u5757\u548c\u4e00\u4e2a\u94bb\u77f3\u5373\u53ef.\u4f46\u662f\u8981\u6ce8\u610f,\u6bcf\u4e2a\u6b66\u5668\u53ea\u80fd\u7528\u8fd9\u4e2a\u914d\u65b9\u5f3a\u5316\u4e00\u6b21\u54e6!%n%n\u8fd8\u6709\u53e6\u5916\u4e24\u79cd\u914d\u65b9\u53ef\u4ee5\u6dfb\u52a0\u5f3a\u5316\u69fd,\u4f46\u8fd9\u56de\u4f60\u9700\u8981\u81ea\u5df1\u67e5\u9605\u5320\u9b42\u7684\u624b\u518c,\u4ee5\u83b7\u77e5\u9700\u8981\u7528\u5230\u4ec0\u4e48.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEag==",
                    "tooltip": "<strong>\u989d\u5916\u7684\u5f3a\u5316</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599</br>\u54e6!\u95ea\u95ea\u53d1\u5149(\u4e0d\u662f\u767d\u91d1!)"
                },
                {
                    "name": "\u5de5\u5382\u7684\u94c1\u95e8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1789.png",
                    "x": 168.0,
                    "y": 444.0,
                    "data": "\u4f60\u7684\u65b0\u5de5\u5382\u9700\u8981\u94c1\u95e8. \u4e0d\u5e78\u7684\u662f,\u5408\u6210\u8868\u771f\u7684\u5f88\u96be,\u800c\u4e14\u9700\u8981\u94a2.%n%n\u5982\u679c\u4f60\u613f\u610f\u7684\u8bdd,\u53ef\u4ee5\u9009\u62e9\u989d\u5916\u7684\u4e24\u4e2a\u95e8\u4f5c\u4e3a\u5956\u52b1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG_Q==",
                    "tooltip": "<strong>\u5de5\u5382\u7684\u94c1\u95e8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u71c3\u70e7\u7684\u7b28\u86cb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1845.png",
                    "x": 492.0,
                    "y": 408.0,
                    "data": "\u70c8\u7130\u4eba\u90fd\u662f\u7cbe\u82f1\u602a,\u5e76\u4e14\u90fd\u5f88\u8c03\u76ae.\u8fdc\u79bb\u761f\u75ab\u70c8\u7130\u4eba(Plague-blaze).\u5e26\u4e0a\u7cbe\u826f\u7684\u88c5\u5907\u7136\u540e\u51c6\u5907\u6218\u6597\u5427.  %n%n\u6216\u8005\u4f60\u53ef\u4ee5\u7528\u4e9b\u79d1\u6280\u7684\u529b\u91cf\u6362\u79cd\u65b9\u5f0f\u6467\u6bc1\u5b83\u4eec.  %n%n\u518d\u6216\u8005,\u522b\u627e\u5b83\u4eec\u7684\u9ebb\u70e6\u4e86,\u6362\u79cd\u65b9\u5f0f\u83b7\u53d6\u70c8\u7130\u68d2\u5427.(\u6bd4\u65b9\u8bf4\u79cd\u7530)",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHNQ==",
                    "tooltip": "<strong>\u71c3\u70e7\u7684\u7b28\u86cb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0b\u754c"
                },
                {
                    "name": "\u6253\u706b\u77f3",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/478.png",
                    "x": 324.0,
                    "y": 384.0,
                    "data": "\u5f53\u4f60\u7684\u94a2\u8db3\u591f\u5236\u4f5c\u6253\u706b\u77f3\u7684\u65f6\u5019,\u6211\u60f3\u4f60\u4e00\u5b9a\u60f3\u5feb\u70b9\u505a\u51fa\u6765\u4e00\u4e2a\u7136\u540e\u8d76\u5feb\u53bb\u4e0b\u754c. \u53bb\u5427!\u5c11\u5e74,\u4f46\u662f\u8fd9\u91cc\u7684\u4e0b\u754c\u662f\u4e00\u4e2a\u975e\u5e38\u975e\u5e38\u5371\u9669\u7684\u5730\u65b9\u54e6!%n%n\u6ce8\u610f:\u82d4\u85d3\u7403\u4f1a\u8d4b\u4e88\u5320\u9b42\u5de5\u5177\u81ea\u6211\u4fee\u590d\u7684\u529f\u80fd,\u4f46\u5982\u679c\u5de5\u5177\u5b8c\u5168\u635f\u574f\u4e86,\u81ea\u52a8\u4fee\u590d\u529f\u80fd\u65e0\u6cd5\u751f\u6548,\u9700\u8981\u5148\u7528\u6750\u6599\u4fee\u590d\u4e00\u70b9.%n%n\u8bf7\u6ce8\u610f,\u6253\u706b\u77f3\u53ef\u80fd\u9700\u8981\u591a\u8bd5\u51e0\u6b21\u624d\u80fd\u70b9\u7740.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB3g==",
                    "tooltip": "<strong>\u6253\u706b\u77f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "GT6\u578b\u5bfc\u7ebf\u548c\u7ebf\u7f06",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1147.png",
                    "x": 624.0,
                    "y": 420.0,
                    "data": "\u4e5f\u8bb8\u4f60\u5728\u60f3\u4e3a\u4ec0\u4e48\u73b0\u5728\u7684\u5bfc\u7ebf\u6216\u8005\u7ebf\u7f06\u4e0d\u4f1a\u81ea\u52a8\u8fde\u63a5\u4e86\uff1f\u8fd9\u662f\u4e3a\u4e86\u8ba9\u5bfc\u7ebf\u6216\u8005\u7ebf\u7f06\u66f4\u806a\u660e.\u4f60\u5fc5\u987b\u4f7f\u7528\u526a\u7ebf\u94b3(\u6216\u7535\u70d9\u94c1)\u6765\u8fde\u63a5\u4f60\u60f3\u8fde\u63a5\u7684\u5bfc\u7ebf\u548c\u7ebf\u7f06. \u8fd9\u6837\u5c06\u4f1a\u5e2e\u52a9\u4f60\u51cf\u5c11\u56e0\u4e3a\u8fde\u9519\u5bfc\u7ebf\u800c\u5bfc\u81f4\u7684BOOM\u4e86!  \u4f60\u53ef\u4ee5Shift\u53f3\u952e\u6765\u5c06\u5bfc\u7ebf\u4e0e\u4f60\u770b\u4e0d\u5230\u7684\u673a\u5668\u8fde\u63a5,\u6bd4\u5982\u5728\u673a\u5668\u6b63\u9762,\u4f7f\u5176\u8fde\u63a5\u5e95\u90e8\u7684\u7ebf\u7f06.%n\u53e6\u5916,\u89e6\u78b0\u672a\u88ab\u7edd\u7f18(\u7ebf\u7f06)\u7684\u5bfc\u7ebf\u4f1a\u53d7\u5230\u4f24\u5bb3.(\u8d85\u5bfc\u7ebf\u9664\u5916)%n%n\u63d0\u793a:\u5982\u679c\u4f60\u5bf9\u51c6\u5bfc\u7ebf\u548c\u7ebf\u7f06\u8fdb\u884c\u5b89\u88c5,\u90a3\u4e48\u5b83\u4eec\u5c06\u4f1a\u81ea\u52a8\u8fde\u63a5.\u7ebf\u7f06\u4e0e\u7ba1\u9053\u5747\u53ef\u6d82\u8272,\u9632\u6b62\u4f60\u5c06\u4e0d\u540c\u7535\u538b\u7684\u5bfc\u7ebf\u5f04\u6df7\u4e86,\u6216\u662f\u628a\u4e00\u6876\u5ca9\u6d46\u5012\u8fdb\u4e86\u5851\u6599\u7ba1\u9053.\u613f\u5929\u4e0b\u518d\u65e0BOOM.%n%n\u54c8\u54c8\u5f00\u4e2a\u73a9\u7b11,\u8fd9\u600e\u4e48\u53ef\u80fd\u5462!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEew==",
                    "tooltip": "<strong>GT6\u578b\u5bfc\u7ebf\u548c\u7ebf\u7f06</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)"
                },
                {
                    "name": "\u77f3\u818f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/868.png",
                    "x": 720.0,
                    "y": 24.0,
                    "data": "\u4f60\u9700\u8981\u6df7\u51dd\u571f\u548c\u77f3\u818f\u6765\u4e3a\u4f60\u7684\u9ad8\u7089\u505a\u7816\u5757.\u77f3\u818f\u53ef\u4ee5\u5728\u4e3b\u4e16\u754c(50\u201460\u5c42),\u548c\u7384\u6b66\u5ca9\u3001\u82b1\u5c97\u5ca9\u77ff\u7802\u3001\u6f02\u767d\u571f\u4e00\u8d77\u88ab\u53d1\u73b0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADZA==",
                    "tooltip": "<strong>\u77f3\u818f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c89\u788e\u673a v1.0!"
                },
                {
                    "name": "\u9524\u5b50\u65f6\u523b v2.0",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/53.png",
                    "x": 336.0,
                    "y": 240.0,
                    "data": "\u6bd5\u7adf\u9524\u5b50\u662f\u6709\u8010\u4e45\u7684,\u82b1\u8d396\u4e2a\u952d\u6765\u91cd\u65b0\u505a\u652f\u9524\u5b50\u4f3c\u4e4e\u9887\u4e3a\u6d6a\u8d39.\u5982\u679c\u6709\u53f0\u673a\u5668\u53ef\u4ee5\u50cf\u9524\u5b50\u4e00\u6837\u5de5\u4f5c\u4f46\u6ca1\u6709\u8010\u4e45\u6d88\u8017\u3001\u800c\u4e14\u53ea\u89813\u952d\u5c31\u53ef\u4ee5\u505a\u51fa\u4e24\u5757\u677f\u5b50\u2014\u2014\u90a3\u8be5\u6709\u591a\u597d\uff1f\u90a3\u4f60\u77e5\u9053\u5417\u2014\u2014\u90a3\u91cc\u5c31\u6709\u4e00\u53f0!\u800c\u4f60\u771f\u8be5\u505a\u4e00\u4e2a!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAANQ==",
                    "tooltip": "<strong>\u9524\u5b50\u65f6\u523b v2.0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4e2a\u94c1\u7827...\u6700\u597d\u505a\u4e24\u4e2a!"
                },
                {
                    "name": "\u6f0f\u6597",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1205.png",
                    "x": 84.0,
                    "y": 12.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u5bf9\u673a\u5668\u8fdb\u884c\u81ea\u52a8\u5316\u5347\u7ea7,\u90a3\u4e48\u6f0f\u6597\u80af\u5b9a\u4f1a\u6d3e\u4e0a\u7528\u573a. \u4f60\u53ef\u4ee5\u901a\u8fc7\u6f0f\u6597\u76f4\u63a5\u5c06\u7269\u6599\u8f93\u5165GT\u7684\u7ba1\u9053,\u800c\u4e0d\u9700\u8981\u4f7f\u7528\u4f20\u9001\u5e26. \u4f46\u662f,\u6f0f\u6597\u7684\u901f\u5ea6\u8d76\u4e0d\u4e0a\u4f20\u9001\u5e26,\u5e76\u4e14\u53ea\u80fd\u4ece\u4e0a\u65b9\u63a5\u6536\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEtQ==",
                    "tooltip": "<strong>\u6f0f\u6597</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!"
                },
                {
                    "name": "\u8fd9\u4e48\u591a\u4e1c\u897f\u5f80\u54ea\u653e\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/558.png",
                    "x": 288.0,
                    "y": 312.0,
                    "data": "\u5728\u4f60\u70e7\u70bc\u7b2c\u4e00\u5757\u94a2\u540e,\u4f60\u5c31\u80fd\u5236\u4f5c\u4e00\u4e2a\u5c0f\u80cc\u5305.\u5b83\u670936\u4e2a\u683c\u5b50,\u6bd4\u4e00\u4e2a\u5c0f\u7bb1\u5b50\u591a\u4e00\u70b9.\u7a0d\u540e\u4f60\u8fd8\u80fd\u6269\u5927\u5b83.%n%n\u4f60\u6700\u591a\u53ef\u4ee5\u5728\u7269\u54c1\u680f\u5185\u540c\u65f6\u62e5\u6709\u56db\u4e2a\u80cc\u5305.%n%n\u4f60\u53ef\u4ee5\u80cc\u4e0a\u4e00\u4e2a\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u81ea\u52a8\u6361\u62fe\u6a21\u5f0f.\u68c0\u67e5\"\u63a7\u5236\"\u4e2d\u7684\"\u6253\u5f00\u80cc\u5305(Open-Backpacks)\"\u5feb\u6377\u952e\u662f\u5426\u5df2\u7ed1\u5b9a\u5e76\u4e14\u6ca1\u6709\u51b2\u7a81.\u7ed1\u5b9a\u7684\u5feb\u6377\u952e\u4ec5\u5728\u80cc\u5305\u653e\u5165\u5176GUI\u69fd\u4f4d(Shift+<\u6253\u5f00\u80cc\u5305\u5feb\u6377\u952e>)\u540e\u65b9\u53ef\u751f\u6548.%n%n\u5f53\u5728\u624b\u4e0a\u62ff\u7740\u80cc\u5305\u7684\u65f6\u5019,\u4f60\u53ef\u4ee5\u901a\u8fc7 Shift+\u9f20\u6807\u53f3\u952e \u91cd\u547d\u540d\u4f60\u7684\u80cc\u5305.%n%n\u8bd1\u8005\u6ce8:\u901a\u8fc7\u8170\u5e26\u6216\u80cc\u5305\u5207\u6362\u7269\u54c1\u680f\u5373\u53ef\u643a\u5e26\u66f4\u591a\u80cc\u5305.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACLg==",
                    "tooltip": "<strong>\u8fd9\u4e48\u591a\u4e1c\u897f\u5f80\u54ea\u653e\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u5982\u4f55\u5236\u4f5c\u6a61\u80f6",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/496.png",
                    "x": 696.0,
                    "y": 384.0,
                    "data": "\u5236\u4f5c\u6a61\u80f6\u73b0\u5728\u53d8\u5f97\u66f4\u52a0\u590d\u6742\u4e86!\u4f60\u9700\u8981\u751f\u6a61\u80f6\u548c\u786b\u7c89. \u6240\u4ee5\u5728\u4e0b\u754c\u627e\u5230\u4e00\u4e2a\u786b\u77ff\u8109\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f,\u4e0d\u662f\u5417?\u786b\u77ff\u8109\u4f1a\u751f\u6210\u5728Y\u8f745-20\u7684\u8303\u56f4\u5185.\u4e4b\u540e,\u4f60\u53ef\u4ee5\u4ece\u786b\u5316\u6c22\u6216\u9ec4\u94c1\u77ff\u7b49\u5316\u5b66\u54c1\u4e2d\u83b7\u53d6\u786b.%n%n[warn]\u95ea\u950c\u77ff\u5bf9\u7a0d\u540e\u5236\u5907\u9553\u548c\u950c\u5f88\u91cd\u8981.\u5728\u8fdb\u5165LV\u53ef\u4ee5\u5b8c\u5168\u5904\u7406\u5b83\u4eec\u4e4b\u524d\u6700\u597d\u7559\u7740.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB8A==",
                    "tooltip": "<strong>\u5982\u4f55\u5236\u4f5c\u6a61\u80f6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u63d0\u53d6\u539f\u6599</br>\u4e0b\u754c"
                },
                {
                    "name": "\u5982\u4f55\u6253\u5f00\u94c1\u95e8?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2332.png",
                    "x": 168.0,
                    "y": 480.0,
                    "data": "\u94c1\u95e8\u53ef\u4ee5\u4f7f\u4f60\u7684\u5382\u623f\u6216\u4f4f\u623f\u66f4\u5b89\u5168.%n%n\u73b0\u5728,\u8ba9\u6211\u4eec\u5236\u4f5c\u51e0\u4e2a\u77f3\u5236\u538b\u529b\u677f\u548c\u6309\u94ae\u6765\u6253\u5f00\u6c89\u91cd\u7684\u94c1\u95e8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJHA==",
                    "tooltip": "<strong>\u5982\u4f55\u6253\u5f00\u94c1\u95e8?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7684\u94c1\u95e8"
                },
                {
                    "name": "\u6211\u4e0d\u6015\u6ca1\u9b3c!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1536.png",
                    "x": 744.0,
                    "y": 120.0,
                    "data": "\u6211\u5df2\u7ecf\u627e\u5230\u4ece\u6b7b\u8005\u7075\u9b42\u4e2d\u6536\u96c6\u7684\u7075\u6c14\u7684\u7528\u9014\u4e86.\u5b83\u53ef\u4ee5\u5236\u4f5c\u4e00\u79cd\u975e\u5e38\u5b9e\u7528\u7684\u73bb\u7483,\u4f60\u53ef\u4ee5\u5728\u5176\u4e0a\u884c\u8d70,\u4f46\u662f\u602a\u7269\u4e0d\u80fd. \u4f46\u662f,\u602a\u7269\u5374\u8ba4\u4e3a\u5b83\u4eec\u53ef\u4ee5!%n%n\u56e0\u6b64,\u5b83\u53ef\u4ee5\u7528\u6765\u5728\u4f60\u7684\u57fa\u5730\u5468\u56f4\u521b\u5efa\u62a4\u57ce\u6cb3,\u4ee5\u5404\u79cd\u65b9\u5f0f\u5c06\u602a\u7269\u6467\u6bc1,\u6216\u8005\u53ea\u662f\u5c06\u5b83\u4eec\u79fb\u5230\u5176\u4ed6\u5730\u65b9. \u6216\u662f\u7528\u5728\u5237\u602a\u573a\u91cc? \u5bf9\u4ed8\u4ece\u5730\u72f1\u95e8\u4e2d\u8d70\u51fa\u6765\u7684\u732a\u4eba? \u6709\u65e0\u9650\u53ef\u80fd!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGAA==",
                    "tooltip": "<strong>\u6211\u4e0d\u6015\u6ca1\u9b3c!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6e05\u6670\u7684\u89c6\u91ce"
                },
                {
                    "name": "\u6211\u77e5\u9053\u4ed6\u7684\u540d\u5b57!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2399.png",
                    "x": 780.0,
                    "y": 420.0,
                    "data": "\u53bb\u547d\u540d\u5668\u662f\u4e00\u4e2a\u7b80\u5355\u800c\u5b9e\u7528\u7684\u673a\u5668,\u53ef\u4ee5\u79fb\u9664\u4e0d\u6b63\u786e\u6216\u65e0\u7528\u7684NBT\u6570\u636e. \u53ea\u5bf9GT\u7269\u54c1\u6709\u6548?%n%n\u66fe\u7ecf\u8fd8\u6709\u62c6\u89e3NBT,\u90a3\u65f6\u53bb\u547d\u540d\u5668\u5341\u5206\u6709\u7528,\u4f46\u51e0\u4e4e\u6240\u6709\u4eba\u90fd\u8ba4\u4e3a,\u5220\u9664\u62c6\u89e3NBT\u662f\u975e\u5e38\u597d\u7684\u89e3\u8131.%n%n\u66ae\u8272\u68ee\u6797\u4e2d\u6709\u5f88\u591a\u94c5,\u5982\u679c\u4f60\u5b9e\u5728\u8138\u9ed1,\u4e0b\u754c\u4e5f\u6709\u4e0d\u5c11\u94c5\u7684\u8d2b\u7620\u77ff.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJXw==",
                    "tooltip": "<strong>\u6211\u77e5\u9053\u4ed6\u7684\u540d\u5b57!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6bd4\u94c1\u66f4\u597d</br>\u6a61\u80f6\u72471"
                },
                {
                    "name": "\u8fd9\u662f\u4e00\u9879\u80ae\u810f\u7684\u5de5\u4f5c,\u4f46\u4f60\u5f97\u53bb\u5e72",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/942.png",
                    "x": 780.0,
                    "y": 456.0,
                    "data": "\u640b\u5b50\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6e05\u9664\u7ba1\u9053\u4e2d\u6b8b\u7559\u7684\u6db2\u4f53,\u4e5f\u53ef\u4ee5\u7528\u6765\u6e05\u9664\u673a\u5668\u7f13\u5b58\u533a\u7684\u6db2\u4f53(\u53f3\u952e\u70b9\u51fb\u4e00\u6b21\u79fb\u96641000mB).\u8fd9\u53ef\u4ee5\u4f7f\u4f60\u4e0d\u5fc5\u6bcf\u6b21\u90fd\u628a\u673a\u5668\u62c6\u6389\u91cd\u65b0\u653e\u7f6e.  \u5236\u4f5c\u5b83\u9700\u8981\u4efb\u610f\u6750\u6599\u7684\u6746\u548c\u6a61\u80f6\u677f,\u6746\u4f1a\u51b3\u5b9a\u5236\u4f5c\u51fa\u6765\u7684\u640b\u5b50\u7684\u8010\u4e45\u5ea6.%n%n\u63d0\u793a:\u624b\u6301\u640b\u5b50\u653b\u51fb\u602a\u7269\u53ef\u4ee5\u9020\u62102.75-18.25\u7684\u4f24\u5bb3,\u5177\u4f53\u4f24\u5bb3\u8981\u770b\u5236\u9020\u640b\u5b50\u6746\u7684\u6750\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADrg==",
                    "tooltip": "<strong>\u8fd9\u662f\u4e00\u9879\u80ae\u810f\u7684\u5de5\u4f5c,\u4f46\u4f60\u5f97\u53bb\u5e72</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6a61\u80f6\u72471"
                },
                {
                    "name": "\u96c5\u514b\u00b7\u5e93\u65af\u6258",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2056.png",
                    "x": 780.0,
                    "y": 528.0,
                    "data": "\u6709\u4e86\u9632\u5316\u5934\u76d4,\u4f60\u5c31\u53ef\u4ee5\u5b89\u5168\u5730\u8fdb\u884c\u957f\u65f6\u95f4\u7684\u6c34\u4e0b\u63a2\u7d22\u4e86.\u4f60\u53ea\u9700\u8981\u4e00\u4e9b\u538b\u7f29\u7a7a\u6c14\u5355\u5143.\u6211\u4f1a\u7528\u4e00\u4e9b\u538b\u7f29\u7a7a\u6c14\u5355\u5143\u6362\u4f60\u7684\u9521\u952d.%n%n\u5f53\u4f60\u7684\u6c27\u6c14\u6761\u51cf\u5c11\u65f6,\u9632\u5316\u5934\u76d4\u4f1a\u6d88\u8017\u4e00\u4e2a\u538b\u7f29\u7a7a\u6c14\u5355\u5143(\u8865\u5145\u6c27\u6c14\u6761),\u5e76\u8fd4\u8fd8\u4e00\u4e2a\u7a7a\u5355\u5143.\u8fd9\u4e9b\u7a7a\u5355\u5143\u53ef\u4ee5\u6254\u8fdb\u538b\u7f29\u673a\u7ee7\u7eed\u5236\u4f5c\u538b\u7f29\u7a7a\u6c14\u5355\u5143.\u8fd9\u6837,\u4f60\u5c31\u53ef\u4ee5\u66f4\u65b9\u4fbf\u5730\u5728\u6cb3\u5e95\u6536\u96c6\u7c98\u571f\u4e86.  \u4e00\u65e6\u62e5\u6709\u4e86\u538b\u6a21\u5668\u6216\u5377\u677f\u673a,\u4f60\u5c31\u53ef\u4ee5\u81ea\u5df1\u5236\u4f5c\u66f4\u591a\u7684\u5355\u5143\u4e86.%n%n\u8bd1\u8005\u6ce8:\u96c5\u514b\u00b7\u5e93\u65af\u6258(Jacques Cousteau),\u662f\u6c34\u80ba\u7684\u53d1\u660e\u8005.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAICA==",
                    "tooltip": "<strong>\u96c5\u514b\u00b7\u5e93\u65af\u6258</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4fee\u7406\u4f60\u7684\u9632\u5316\u670d"
                },
                {
                    "name": "\u4f60\u7684\u5fc3\u7075\u4e4b\u5319",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2087.png",
                    "x": 132.0,
                    "y": 480.0,
                    "data": "\u6876\u9ed8\u8ba4\u5c31\u53ef\u4ee5\u9501\u5b9a\u53ea\u63a5\u53d7\u7279\u5b9a\u7269\u54c1,\u5373\u4f7f\u81ea\u5df1\u662f\u7a7a\u7684\u4e5f\u53ef\u4ee5\u6307\u5b9a.  \u800c\u5bf9\u4e8e\u62bd\u5c49,\u4f60\u9700\u8981\u5236\u4f5c\u62bd\u5c49\u94a5\u5319\u6765\u5c06\u5176\u9501\u5b9a\u53ea\u63a5\u53d7\u7279\u5b9a\u7269\u54c1.  \u8bd1\u8005\u6ce8:\u7a7a\u62bd\u5c49\u4e5f\u53ef\u4ee5\u9501\u5b9a,\u8fd9\u6837\u62bd\u5c49\u4e0d\u4f1a\u63a5\u53d7\u81ea\u52a8\u5316\u6765\u7684\u7269\u54c1,\u4f46\u53ef\u4ee5\u624b\u6301\u7269\u54c1\u53f3\u952e\u6765\u6307\u5b9a\u8be5\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIJw==",
                    "tooltip": "<strong>\u4f60\u7684\u5fc3\u7075\u4e4b\u5319</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5347\u7ea7\u62bd\u5c49"
                },
                {
                    "name": "\u9752\u91d1\u5ca9\u3001\u9752\u91d1\u77f3\u3001\u65b9\u7eb3\u77f3\u3001\u65b9\u89e3\u77f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/867.png",
                    "x": 672.0,
                    "y": 24.0,
                    "data": "\u4e3a\u4e86\u4f60\u7684\u7816\u9ad8\u7089\u4f60\u5fc5\u987b\u627e\u5230\u4e00\u6761\u542b\u6709\u65b9\u89e3\u77f3\u7684\u9752\u91d1\u77f3\u77ff\u8109.%n%n\u4f60\u53ef\u4ee5\u5728\u4e3b\u4e16\u754c\u6216\u8005\u66ae\u8272\u68ee\u6797(LV)(20\u201450\u5c42)\u627e\u5230\u77ff\u8109.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADYw==",
                    "tooltip": "<strong>\u9752\u91d1\u5ca9\u3001\u9752\u91d1\u77f3\u3001\u65b9\u7eb3\u77f3\u3001\u65b9\u89e3\u77f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c89\u788e\u673a v1.0!"
                },
                {
                    "name": "\u9752\u91d1\u77f3\u4ee3\u8868\u7684\u662f\u5e78\u8fd0\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1128.png",
                    "x": 624.0,
                    "y": 24.0,
                    "data": "\u4e5f\u8bb8\u4f60\u5f88\u5e78\u8fd0,\u5728\u4f7f\u7528\u4f60\u7684\u5320\u9b42\u9550\u5b50\u7684\u65f6\u5019\u83b7\u5f97\u4e86\u65f6\u8fd0\u9644\u9b54.\u5982\u679c\u6ca1\u6709\u83b7\u5f97\u4e5f\u4e0d\u9700\u8981\u592a\u8fc7\u4e8e\u6cae\u4e27,\u4f60\u53ef\u4ee5\u901a\u8fc7\u5411\u5320\u9b42\u5de5\u5177\u4e0a\u6dfb\u52a0\u9752\u91d1\u77f3\u6765\u83b7\u5f97\u65f6\u8fd0\u6548\u679c. \u5982\u679c\u4f60\u7684\u5de5\u5177\u8fd8\u6ca1\u6709\u83b7\u5f97\u989d\u5916\u7684\u5f3a\u5316\u6b21\u6570\u4f60\u53ef\u4ee5\u901a\u8fc7\u94bb\u77f3\u548c\u91d1\u5757\u6765\u6dfb\u52a0\u4e00\u6b21,\u7136\u540e\u518d\u4f7f\u7528\u9752\u91d1\u77f3\u6765\u5f3a\u5316.%n%n\u4f60\u53ef\u4ee5\u5c06\u9752\u91d1\u77f3\u653e\u5165\u88c5\u914d\u53f0\u7684\u591a\u4e2a\u683c\u5b50\u4e2d,\u6216\u662f\u7528\u9752\u91d1\u77f3\u5757\u6765\u66f4\u5feb\u5730\u63d0\u5347\u65f6\u8fd0\u7b49\u7ea7,\u751a\u81f3\u4f60\u53ef\u4ee5\u5c06\u9752\u91d1\u77f3\u5757\u653e\u5165\u5408\u6210\u7ad9\u6765\u6700\u5feb\u5730\u63d0\u5347\u65f6\u8fd0\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEaA==",
                    "tooltip": "<strong>\u9752\u91d1\u77f3\u4ee3\u8868\u7684\u662f\u5e78\u8fd0\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9752\u91d1\u5ca9\u3001\u9752\u91d1\u77f3\u3001\u65b9\u7eb3\u77f3\u3001\u65b9\u89e3\u77f3"
                },
                {
                    "name": "\u70b9\u71c3\u5236\u70ad\u4e4b\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/497.png",
                    "x": 372.0,
                    "y": 348.0,
                    "data": "\u4f60\u5df2\u7ecf\u627e\u5230\u4e86\u53e6\u5916\u4e00\u79cd\u751f\u4ea7\u5927\u91cf\u6728\u70ad\u7684\u5de5\u827a--\u4f7f\u7528\u6728\u70ad\u5806\u70b9\u706b\u5668. %n%n\u73b0\u5728\u5e94\u8be5\u53bb\u751f\u4ea7\u5927\u91cf\u7684\u6728\u70ad\u53bb\u4e86!%n%n\u5982\u679c\u8fd9\u662f\u4f60\u7684\u7b2c\u4e00\u4e2a\u591a\u65b9\u5757\u7ed3\u6784,\u6309\u4f4fshift\u67e5\u770b\u6269\u5c55tooltip,\u6216\u8005\u8bbf\u95ee[url]https://wiki.gtnewhorizons.com/wiki/Charcoal_Pile_Igniter[/url]\u83b7\u77e5\u5982\u4f55\u8ba9\u5b83\u5de5\u4f5c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB8Q==",
                    "tooltip": "<strong>\u70b9\u71c3\u5236\u70ad\u4e4b\u8def</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6bd4\u94c1\u66f4\u597d</br>\u6253\u706b\u77f3"
                },
                {
                    "name": "\u8def\u897f\u6cd5(\u5815\u843d\u5929\u4f7f)\u7684\u5c0f\u5e2e\u624b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1908.png",
                    "x": 396.0,
                    "y": 408.0,
                    "data": "\u6709\u4e86\u4e00\u53f0\u5408\u91d1\u7089\u548c\u4e00\u4e9b\u5730\u72f1\u5ca9\u7c89\u4e4b\u540e,\u4f60\u5c31\u53ef\u4ee5\u5236\u4f5c\u4e0b\u754c\u7194\u7089\u4e86,\u8fd9\u662f\u4e00\u79cd\u6781\u5bcc\u6548\u7387\u7684\u70d8\u70e4\u673a\u5668.\u5bf9\u67d0\u4e9b\u9700\u8981\u77ed\u65f6\u95f4\u70e7\u5236\u5927\u91cf\u7269\u54c1\u7684\u4eba\u6765\u8bf4\u5f88\u6709\u7528.%n%n\u552f\u4e00\u7684\u7f3a\u70b9\u5c31\u662f,\u7535\u7089\u53ef\u4ee5\u7528\u4e8e\u4e4b\u540e\u5de5\u4e1a\u9ad8\u7089\u7684\u5408\u6210,\u4f46\u4e0b\u754c\u7194\u7089\u5374\u4e0d\u884c.\u4f46\u8bdd\u8bf4\u56de\u6765,\u5730\u72f1\u5ca9\u7c89\u53cd\u6b63\u4e0d\u8981\u94b1,\u4f60\u6709\u4ec0\u4e48\u635f\u5931\u5462?\u518d\u8bf4\u4e86,\u4f60\u8fd8\u53ef\u4ee5\u7528\u5b83\u70e4\u6210\u5428\u7684\u9762\u5305\u5462!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHdA==",
                    "tooltip": "<strong>\u8def\u897f\u6cd5(\u5815\u843d\u5929\u4f7f)\u7684\u5c0f\u5e2e\u624b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0b\u754c"
                },
                {
                    "name": "\u7c89\u788e\u673a v1.0!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/50.png",
                    "x": 696.0,
                    "y": 72.0,
                    "data": "\u4f60\u603b\u7b97\u53ef\u4ee5\u505a\u51fa\u4e00\u4e2a\u53d6\u4ee3\u7814\u94b5\u7684\u8bbe\u5907\u4e86.\u65e0\u8bba\u5982\u4f55,\u60f3\u8981\u4e00\u4e2a\u4e0d\u4f1a\u88ab\u6d88\u8017\u6389\u7684\u8bbe\u5907\u662f\u9700\u8981\u4ed8\u51fa\u4ee3\u4ef7\u7684\u2014\u2014\u4f60\u9700\u8981\u4e24\u9897\u94bb\u77f3\u6765\u505a\u7814\u78e8\u5934.%n%n\u4e0d\u8981\u518d\u76f4\u63a5\u7194\u70bc\u4f60\u7684\u77ff\u77f3\u4e86,\u5c06\u5b83\u4eec\u653e\u5165\u8fd9\u53f0\u7c89\u788e\u673a,\u4f60\u7684\u77ff\u77f3\u4ea7\u7269\u5c06\u589e\u52a0\u4e00\u500d.%n%n\u6ce8\u610f:\u4e0d\u8981\u5835\u585e\u8f93\u51fa\u53e3,\u4e5f\u4e0d\u8981\u7ad9\u5728\u90a3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAMg==",
                    "tooltip": "<strong>\u7c89\u788e\u673a v1.0!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f</br>\u505a\u4e9b\u66f4\u597d\u7684\u5de5\u5177"
                },
                {
                    "name": "\u5236\u4f5c\u6e05\u5355,\u53cd\u590d\u68c0\u67e5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1507.png",
                    "x": 516.0,
                    "y": 216.0,
                    "data": "\u968f\u7740\u57fa\u5730\u7684\u6269\u5927,\u4f60\u5c06\u6709\u5341\u591a\u4e2a\u4e0d\u540c\u7684\u957f\u671f\u76ee\u6807,\u6bcf\u4e2a\u76ee\u6807\u53c8\u6709\u5f88\u591a\u6b65\u9aa4. \u6253\u9020\u4e00\u5757\u5199\u5b57\u677f\u4ee5\u8ddf\u8e2a\u4f60\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1.%n%n[note]\u63d0\u793a: \u4f60\u53ef\u4ee5\u901a\u8fc7Shift+\u53f3\u952e\u5c06\u5199\u5b57\u677f\u8d34\u5230\u5899\u4e0a. [/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF4w==",
                    "tooltip": "<strong>\u5236\u4f5c\u6e05\u5355,\u53cd\u590d\u68c0\u67e5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599"
                },
                {
                    "name": "\u6162\u6162\u6316\u571f\u5df2\u7ecf\u8fc7\u6c14\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/744.png",
                    "x": 384.0,
                    "y": 108.0,
                    "data": "\u5236\u4f5c\u4e00\u628a\u6316\u6398\u94f2,\u4f60\u5c31\u53ef\u4ee5\u4e00\u6b21\u63163x3\u8303\u56f4\u7684\u571f.\u4f60\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u6750\u6599,\u5982\u94c1\u3001\u94a2\u6216\u51b6\u70bc\u7089\u751f\u4ea7\u7684\u8010\u9178\u94dd,\u4e0d\u7528\u5c40\u9650\u4e8e\u94a2.%n%n\u66f4\u9ad8\u9636\u7684\u6750\u6599\u9700\u8981MV\u538b\u6a21\u673a.  \u522b\u4e0d\u5c0f\u5fc3\u6bc1\u4e86\u4f60\u7684\u6574\u4e2a\u82b1\u56ed.%n%n\u672c\u4efb\u52a1\u63a5\u53d7\u4efb\u610f\u6750\u6599\u5236\u6210\u7684\u76f8\u5e94\u5de5\u5177.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC6A==",
                    "tooltip": "<strong>\u6162\u6162\u6316\u571f\u5df2\u7ecf\u8fc7\u6c14\u4e86</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5177\u88c5\u914d\u53f0"
                },
                {
                    "name": "\u94f8\u6a21\u3001\u6a21\u5177\u3001\u94f8\u6a21",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/871.png",
                    "x": 336.0,
                    "y": 456.0,
                    "data": "\u5728\u4f60\u53ef\u4ee5\u5236\u4f5c\u94a2\u94c1\u548c\u62e5\u6709\u4e00\u53f0\u5320\u9b42\u51b6\u70bc\u7089\u4e4b\u540e,\u5c31\u53ef\u4ee5\u505a\u4e9b\u6a21\u5177\u4e86,\u5b83\u4eec\u53ef\u4ee5\u5e94\u7528\u5728\u5408\u91d1\u7089\u548c\u6d41\u4f53\u56fa\u5316\u5668.\u4f60\u9700\u8981\u8fd9\u4e9b\u6a21\u5177\u6765\u5236\u4f5c\u771f\u7a7a\u7ba1\u3001\u91d1\u5c5e\u952d\u3001\u9f7f\u8f6e\u548c\u5176\u4ed6\u66f4\u591a\u4e1c\u897f.%n%n[note]PS\uff1a'\u6a21\u5934'\u662f\u7ed9\u538b\u6a21\u673a\u7528\u7684.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADZw==",
                    "tooltip": "<strong>\u94f8\u6a21\u3001\u6a21\u5177\u3001\u94f8\u6a21</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u66f4\u591a\u9ad8\u7ea7\u5408\u91d1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/46.png",
                    "x": 216.0,
                    "y": 72.0,
                    "data": "\u4f60\u7684\u51b6\u70bc\u7089\u53ef\u4ee5\u5c06\u91d1\u5c5e\u6405\u62cc\u3001\u7194\u70bc\u6210\u5408\u91d1,\u4f46\u6548\u7387\u5e76\u4e0d\u9ad8,\u800c\u4e14\u7531\u4e8e\u5b83\u7684\u590d\u6742\u6027,\u7528\u5904\u6709\u9650.\u4f60\u9700\u8981\u6362\u53f0\u65b0\u7684,\u90a3\u4f55\u4e0d\u628a\u4f60\u7684\u84b8\u6c7d\u62ff\u6765\u7528\u7528\uff1f\u5408\u91d1\u7089\u53ef\u4ee5\u4f7f\u7528\u952d\u3001\u7c89\u751a\u81f3\u7c92,\u76f4\u63a5\u5408\u6210\u9752\u94dc.\u5982\u679c\u6709\u94a2\u7684\u8bdd,\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e2a\u7c92\u6a21\u5177,\u540c\u6837\u53ef\u4ee5\u5728\u6b64\u5c06\u952d\u8f6c\u5316\u4e3a\u7c92.%n%n\u5728\u52a0\u5de5\u751f\u6a61\u80f6\u7684\u65f6\u5019,\u5b83\u53ef\u80fd\u53ef\u4ee5\u6d3e\u4e0a\u7528\u573a.\u4f60\u5e94\u8be5\u7559\u610fNEI,\u770b\u770b\u673a\u5668\u4f55\u65f6\u80fd\u4e3a\u5236\u4f5c\u4ea7\u54c1\u63d0\u4f9b\u66f4\u4f18\u9009\u62e9.%n%n[note]\u6ce8\u610f:\u4e0e\u6240\u6709\u84b8\u6c7d\u8bbe\u5907\u7c7b\u4f3c,\u5f53\u914d\u65b9\u5b8c\u6210\u65f6,\u8f93\u51fa\u662f\u84b8\u6c7d\u51fa\u53e3.\u4e0d\u5f97\u5835\u585e!\u8fd8\u6709,\u84b8\u6c7d\u5f88\u70eb,\u8bb0\u5f97\u4e48?\u53ef\u7528\u6273\u624b\u6539\u53d8\u673a\u5668\u7684\u8f93\u51fa\u53e3.3x3\u7f51\u683c\u5c06\u663e\u793a\u4f60\u53f3\u952e\u540e\u8f93\u51fa\u53e3\u5c06\u79fb\u52a8\u5230\u54ea\u4e00\u4fa7.[/note]%n%n\u5728\u673a\u5668\u4e0b\u65b9\u653e\u7f6e\u4e00\u4e2a\u6f0f\u6597\u5373\u53ef\u4f7f\u673a\u5668\u5185\u4ea7\u7269\u8f93\u51fa.%n%n[warn]\u8b66\u544a:\u84b8\u6c7d\u5408\u91d1\u7089\u4f1a\u6d88\u8017\u5de8\u91cf\u7684\u84b8\u6c7d.[/warn]\u4e00\u5f00\u59cb\u4f7f\u7528\u65f6\u8bf7\u4e00\u6b65\u4e00\u6b65\u8fdb\u884c,\u76f4\u5230\u4f60\u4e86\u89e3\u4e86\u6d88\u8017\u84b8\u6c7d\u7684\u5177\u4f53\u901f\u5ea6.\u5927\u578b\u7ba1\u9053\u5bf9\u8d44\u6e90\u77ed\u7f3a\u8005\u662f\u4e0d\u9519\u7684\u7f13\u5b58,\u540c\u65f6\u9505\u7089\u548c\u673a\u5668\u672c\u8eab\u4e5f\u53ef\u4ee5\u7f13\u5b58\u4e00\u4e9b\u84b8\u6c7d.\u5982\u679c\u4f20\u8f93\u8ddd\u79bb\u6bd4\u8f83\u8fdc,\u53ef\u7528\u94c1\u5236\u6216\u94a2\u5236\u7684\u77ff\u8f66\u6c34\u69fd\u4f5c\u4e3a\u66f4\u5927\u7684\u84b8\u6c7d\u7f13\u5b58\u5668. %n%nWIKI \u84b8\u6c7d\u673a\u5668\uff1agtnh.huijiwiki.com/p/769\uff08\u8bf7\u770b\u84b8\u6c7d\u673a\u5668\u90e8\u5206\uff09",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAALg==",
                    "tooltip": "<strong>\u66f4\u591a\u9ad8\u7ea7\u5408\u91d1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!"
                },
                {
                    "name": "\u79fb\u52a8\u4f60\u7684\u50a8\u7f50\u3001\u7bb1\u5b50\u548c\u6876",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/625.png",
                    "x": 120.0,
                    "y": 324.0,
                    "data": "\u60f3\u8981\u642c\u52a8\u7bb1\u5b50\u800c\u4e0d\u4f7f\u7269\u54c1\u6563\u843d\u6ee1\u5730(BC\u2122)?  \u6ca1\u95ee\u9898!\u505a\u53f0\u624b\u63a8\u8f66\u4f60\u5c31\u53ef\u4ee5\u5e26\u7740\u88c5\u6ee1\u7684\u7bb1\u5b50\u3001\u6876\u6216\u62bd\u5c49\u5230\u4efb\u4f55\u5730\u65b9\u53bb.\u4f46\u6ce8\u610f,\u4f60\u4f1a\u5f97\u5230\u7f13\u6162debuff,\u5e0c\u671b\u4f60\u4e0d\u662f\u8981\u53bb\u592a\u8fdc\u7684\u5730\u65b9.\u5373\u4fbf\u662f\u975e\u4fbf\u643a\u5f0f\u7684BC\u50a8\u7f50\u548c\u66f4\u591a\u50a8\u7f50,\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u624b\u63a8\u8f66\u79fb\u52a8\u5b83\u4eec(\u4e0d\u635f\u5931\u6db2\u4f53),\u4f46GT\u50a8\u7f50\u4e0d\u884c.\u540c\u65f6,\u624b\u63a8\u8f66\u8fd8\u53ef\u4ee5\u79fb\u52a8\u5de5\u4f5c\u53f0(\u4e0d\u635f\u5931\u5b58\u50a8\u7684\u5408\u6210\u8868).%n%n\u624b\u6301\u7a7a\u7684\u624b\u63a8\u8f66Shift\u53f3\u51fb\u53ef\u4ee5\u6298\u53e0\u5b83.\u867d\u7136\u4e0d\u91cd\u65b0\u5c55\u5f00\u7684\u8bdd\u5b83\u6ca1\u6cd5\u642c\u8fd0\u4e1c\u897f,\u4f46\u8fd9\u6837\u5b83\u5c31\u53ef\u4ee5\u5806\u53e0\u548c\u653e\u8fdb\u80cc\u5305\u4e86.%n%nPS\uff1a\u4ee5\u540e\u4f60\u53ef\u4ee5\u901a\u8fc7\u98de\u884c\u6216\u7a7f\u6234\u65c5\u884c\u8005\u8170\u5e26\u6765\u7ed5\u8fc7\u7f13\u6162\u8fd9\u4e2adebuff.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACcQ==",
                    "tooltip": "<strong>\u79fb\u52a8\u4f60\u7684\u50a8\u7f50\u3001\u7bb1\u5b50\u548c\u6876</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!</br>\u7edd\u7f18\u7ebf\u7f06"
                },
                {
                    "name": "\u6ce5\u5df4,\u4e5f\u80fd\u7528\u6765\u7f8e\u5bb9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1915.png",
                    "x": 744.0,
                    "y": 228.0,
                    "data": "\u4f60\u53ef\u80fd\u5df2\u7ecf\u5728\u6e7f\u5730(\u6cbc\u6cfd)\u627e\u5230\u4e86\u6210\u5428\u7684\u6ce5\u5df4\u7403,\u8ba4\u4e3a\u5b83\u4eec\u53ea\u4f1a\u8ba9\u4f60\u5728\u6c34\u4e2d\u79fb\u52a8\u66f4\u9ebb\u70e6,\u6216\u8005\u4f60\u53ea\u662f\u7528\u5b83\u4eec\u6765\u505a\u62a4\u7532.\u522b\u6d6a\u8d39\u4e86!\u4f7f\u7528\u4f60\u65b0\u505a\u7684\u63d0\u53d6\u673a,\u53ef\u4ee5\u5f97\u5230\u9690\u85cf\u5728\u6ce5\u5df4\u4e2d\u7684\u7c98\u571f!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHew==",
                    "tooltip": "<strong>\u6ce5\u5df4,\u4e5f\u80fd\u7528\u6765\u7f8e\u5bb9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u63d0\u53d6\u539f\u6599"
                },
                {
                    "name": "\u591a\u65b9\u5757\u9769\u547d",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8198041923981670459.png",
                    "x": 120.0,
                    "y": 384.0,
                    "data": "\u4f60\u4e00\u76f4\u5728\u4f7f\u7528\u7684\u84b8\u6c7d\u673a\u5668\u8868\u73b0\u826f\u597d,\u4f46\u603b\u6709\u4e00\u5929\u4f60\u9700\u8981\u5904\u7406\u66f4\u591a\u7684\u7269\u54c1.\u8fd9\u65f6\u5019,\u6240\u8c13\u7684\u591a\u65b9\u5757\u673a\u5668\u5c31\u6d3e\u4e0a\u7528\u573a\u4e86.\u6709\u591a\u79cd\u84b8\u6c7d\u591a\u65b9\u5757\u673a\u5668\u53ef\u4f9b\u4f60\u9009\u62e9\u2014\u2014\u5feb\u53bb\u770b\u770b\u201c\u5927\u89c4\u6a21\u52a0\u5de5\u201d\u4efb\u52a1\u680f\u5427!%n%n\u8fd9\u4e2a\u4efb\u52a1\u680f\u5c06\u5411\u4f60\u4ecb\u7ecd\u4e00\u7cfb\u5217\u6781\u5176\u5f3a\u5927\u7684\u591a\u65b9\u5757\u673a\u5668,\u5b83\u4eec\u53ef\u4ee5\u66ff\u4ee3\u4f60\u90a3\u4e9b\u9648\u65e7\u7684\u5355\u65b9\u5757\u673a\u5668(\u4ee5\u53ca\u4e00\u4e9b\u65e7\u7684\u591a\u65b9\u5757\u673a\u5668!).\u8fd9\u4e9b\u65b0\u673a\u5668\u4e2d\u7684\u8bb8\u591a\u9700\u8981\u4f60\u5904\u7406\u989d\u5916\u7684\u673a\u5236\u548c\u8981\u6c42,\u4f46\u7edd\u5bf9\u503c\u5f97\u4e00\u8bd5!%n%n\u5728\u8fdb\u5165\u591a\u65b9\u5757\u7684\u4e16\u754c\u4e4b\u524d,\u4f60\u9700\u8981\u719f\u6089\u4ee5\u4e0b\u672f\u8bed:%n%n\u8d85\u9891(OC):%n\u5982\u679c\u4e00\u53f0\u673a\u5668\u80fd\u591f\u5904\u7406\u81f3\u5c11\u4e3a\u914d\u65b9\u6240\u9700\u7535\u538b4\u500d\u7684\u7535\u538b,\u5b83\u5c06\u4f1a\u8d85\u9891\u2014\u2014\u5bfc\u81f4\u5176\u9700\u89814\u500d\u7684EU/t,\u4f46\u8fd0\u884c\u901f\u5ea6\u63d0\u9ad8\u52302\u500d.\u8fd9\u79cd\u60c5\u51b5\u53ef\u4ee5\u591a\u6b21\u53d1\u751f!%n%n\u65e0\u635f\u8d85\u9891(\u901a\u5e38\u8868\u8ff0\u4e3a\u201c\u8d85\u9891\u65f6\u6548\u7387\u4e0d\u4f1a\u964d\u4f4e\u201d):%n\u67d0\u4e9b\u673a\u5668\u5728\u6761\u4ef6\u5141\u8bb8\u65f6(\u6216\u65e0\u6761\u4ef6)\u6267\u884c\u65e0\u635f\u8d85\u9891:\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b,\u673a\u5668\u9700\u89814\u500d\u7684EU/t,\u4f46\u8fd0\u884c\u901f\u5ea6\u63d0\u9ad8\u52304\u500d,\u4ece\u800c\u65e2\u589e\u52a0\u4e86\u901f\u5ea6\u53c8\u6ca1\u6709\u603bEU\u6d88\u8017\u7684\u51c0\u589e\u91cf!%n%n\u5e76\u884c(\u901a\u5e38\u8868\u8ff0\u4e3a\u201c\u540c\u65f6\u5904\u7406x\u4e2a\u7269\u54c1\u201d):%n\u5e76\u884c\u5de5\u4f5c\u7684\u673a\u5668\u5c31\u50cf\u5728\u8fd0\u884c\u591a\u4e2a\u81ea\u8eab\u2014\u2014\u4e5f\u5c31\u662f\u8bf4,\u5b83\u4eec\u53ef\u4ee5\u540c\u65f6\u6267\u884c\u591a\u4e2a\u76f8\u540c\u7684\u914d\u65b9,\u4f7f\u7528\u914d\u65b9\u7684EU/t\u4e58\u4ee5\u5e76\u884c\u6570.\u673a\u5668\u4f1a[warn]\u4f18\u5148\u8003\u8651[/warn]\u5e76\u884c\u8fd9\u79cd\u884c\u4e3a\u800c\u4e0d\u662f\u8d85\u9891,\u8fd9\u5bf9\u4f60\u6709\u5229!\u5e76\u884c\u66f4\u52a0\u9ad8\u6548.%n%n[note]\u5f53\u4f7f\u7528\u591a\u65b9\u5757\u673a\u5668\u65f6,\u5982\u679c\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u7535\u529b\u4e2d\u65ad,\u4f60\u7684\u8f93\u5165\u7269\u54c1\u5c06\u4f1a\u6c38\u4e45\u4e22\u5931\u2026\u2026\u5c0f\u5fc3![/note]",
                    "quest_id": "hEsmeH74S4aOOrROI1AHxQ==",
                    "tooltip": "<strong>\u591a\u65b9\u5757\u9769\u547d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u77f3\u82f1\u80fd\u8ba9\u6b66\u5668\u53d8\u5f97\u950b\u5229!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1132.png",
                    "x": 420.0,
                    "y": 336.0,
                    "data": "\u4f60\u7684\u5251\u592a\u949d\u4e86! \u62ff\u4e00\u4e9b\u4e0b\u754c\u77f3\u82f1\u628a\u5b83\u78e8\u5feb!%n%n\u5982\u679c\u4f60\u6709\u5f88\u591a\u8d5b\u7279\u65af\u77f3\u82f1,\u4e00\u4e2a\u8d5b\u7279\u65af\u77f3\u82f1\u53ef\u4ee5\u62b5\u5f97\u4e0a24\u4e2a\u4e0b\u754c\u77f3\u82f1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEbA==",
                    "tooltip": "<strong>\u77f3\u82f1\u80fd\u8ba9\u6b66\u5668\u53d8\u5f97\u950b\u5229!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0b\u754c"
                },
                {
                    "name": "\u65b0\u7684\u83b7\u5f97\u8424\u77f3\u7684\u6e20\u9053",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1092.png",
                    "x": 468.0,
                    "y": 336.0,
                    "data": "\u4f60\u5728\u4e0b\u754c\u53d1\u73b0\u4e86\u4e00\u4e9b\u548c\u8424\u77f3\u5f88\u7c7b\u4f3c\u7684\u690d\u7269. \u5c06\u5b83\u4eec\u79cd\u690d\u5230\u4e3b\u4e16\u754c\u4e2d.\u8fd9\u6837\u4f60\u5c31\u4e0d\u9700\u8981\u5728\u4e0b\u754c\u53bb\u5bfb\u627e\u8424\u77f3\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAERA==",
                    "tooltip": "<strong>\u65b0\u7684\u83b7\u5f97\u8424\u77f3\u7684\u6e20\u9053</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0b\u754c"
                },
                {
                    "name": "\u4e0b\u754c\u4e4b\u6811\u771f\u68d2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1741.png",
                    "x": 744.0,
                    "y": 384.0,
                    "data": "\u6709\u4e00\u4e9b\u975e\u5e38\u6709\u7528\u7684\u4e0b\u754c\u4e4b\u6811,\u5b83\u4eec\u63d0\u4f9b\u4e86\u50cf\u7ea2\u77f3,\u706b\u836f,\u9aa8\u7c89\u6216\u80a5\u6599\u7b49\u8d44\u6e90. \u53bb\u4e0b\u754c\u627e\u5230\u8fd9\u6837\u7684\u6811\u5427,\u5982\u8840\u6811,\u7194\u878d\u6811,\u9ed1\u6697\u6811\u6216\u5e7d\u9b42\u6811.\u8fd9\u4e9b\u6811\u53ef\u4ee5\u50cf\u666e\u901a\u7684\u6811\u6728\u4e00\u6837\u79cd\u690d,\u9664\u4e86\u8840\u6811.\u8840\u6811\u5fc5\u987b\u79cd\u5728\u5929\u82b1\u677f\u4e0a,\u7136\u540e\u5b83\u4f1a\u5411\u4e0b\u751f\u957f\u800c\u4e0d\u662f\u5411\u4e0a\u751f\u957f...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGzQ==",
                    "tooltip": "<strong>\u4e0b\u754c\u4e4b\u6811\u771f\u68d2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5982\u4f55\u5236\u4f5c\u6a61\u80f6"
                },
                {
                    "name": "\u4e00\u4e2a\u94c1\u7827...\u6700\u597d\u505a\u4e24\u4e2a!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/694.png",
                    "x": 456.0,
                    "y": 240.0,
                    "data": "\u4f7f\u7528\u4f60\u5168\u65b0\u7684\u538b\u7f29\u673a,\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e9b\u91d1\u5c5e\u5757\u4ee5\u5236\u4f5c\u94c1\u7827.\u6700\u597d\u505a\u4e24\u4e2a\u94c1\u7827,\u4e00\u4e2a\u7528\u4e8e\u5236\u4f5c\u953b\u9020\u9524.  \u6709\u4e86\u94c1\u7827\u4f60\u5c31\u53ef\u4ee5\u4fee\u7406\u3001\u66f4\u540d\u6216\u9644\u9b54\u4f60\u7684\u62a4\u7532\u53ca\u5de5\u5177.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACtg==",
                    "tooltip": "<strong>\u4e00\u4e2a\u94c1\u7827...\u6700\u597d\u505a\u4e24\u4e2a!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599"
                },
                {
                    "name": "\u4e00\u683c\u4e00\u683c\u6316\u77ff\u5df2\u7ecf\u8fc7\u6c14\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/742.png",
                    "x": 384.0,
                    "y": 180.0,
                    "data": "\u5236\u4f5c\u4e00\u67c4\u5927\u9524,\u4f60\u5c31\u53ef\u4ee5\u4e00\u6b21\u63163x3\u8303\u56f4\u7684\u77ff.\u4f60\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u6750\u6599,\u5982\u94c1\u3001\u94a2\u6216\u51b6\u70bc\u7089\u751f\u4ea7\u7684\u8010\u9178\u94dd,\u4e0d\u7528\u5c40\u9650\u4e8e\u94a2.\u66f4\u9ad8\u9636\u7684\u6750\u6599\u9700\u8981MV\u538b\u6a21\u673a.  \u4f60\u9700\u8981\u4e00\u4e2a\u9524\u5934\u3001\u4e24\u4e2a\u5927\u677f\u3001\u4e00\u4e2a\u575a\u97e7\u624b\u67c4\u6765\u5236\u9020\u4e00\u67c4\u5927\u9524.  \u5728\u4e0b\u754c\u5c0f\u5fc3\u70b9,\u56e0\u4e3a\u4e00\u4e0d\u5c0f\u5fc3\u4f60\u5c31\u4f1a\u88ab\u5ca9\u6d46\u716e\u719f.%n%n\u672c\u4efb\u52a1\u63a5\u53d7\u4efb\u610f\u6750\u6599\u5236\u6210\u7684\u76f8\u5e94\u5de5\u5177.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC5g==",
                    "tooltip": "<strong>\u4e00\u683c\u4e00\u683c\u6316\u77ff\u5df2\u7ecf\u8fc7\u6c14\u4e86</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5177\u88c5\u914d\u53f0"
                },
                {
                    "name": "\u54e6!\u95ea\u95ea\u53d1\u5149(\u4e0d\u662f\u767d\u91d1!)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/495.png",
                    "x": 540.0,
                    "y": 132.0,
                    "data": "\u5236\u9020\u4f60\u7684\u7b2c\u4e00\u53f0\u7c89\u788e\u673a\u9700\u89812\u4e2a\u94bb\u77f3,\u8fdb\u5165\u66ae\u8272\u68ee\u6797\u4e5f\u9700\u89811\u4e2a. \u5982\u679c\u627e\u5230\u4e00\u6761\u94bb\u77f3\u77ff\u8109,\u90a3\u4e48\u8fd9\u4e00\u5207\u5c31\u89e3\u51b3\u4e86. \u53bbY\u8f745-20\u7684\u533a\u57df\u627e\u4e00\u627e\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB7w==",
                    "tooltip": "<strong>\u54e6!\u95ea\u95ea\u53d1\u5149(\u4e0d\u662f\u767d\u91d1!)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f"
                },
                {
                    "name": "\u4ec0\u4e48\uff1f\u6c61\u67d3!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/534.png",
                    "x": 744.0,
                    "y": 492.0,
                    "data": "\u5982\u679c\u4f60\u7684\u7816\u9ad8\u7089\u8fd0\u884c\u4e86\u5f88\u4e45,\u5728\u4f60\u63a5\u8fd1\u5b83\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u51fa\u73b0\u6076\u5fc3\u3001\u5934\u75db\u6216\u8005\u5176\u4ed6\u5947\u602a\u7684\u75c7\u72b6.\u6ca1\u9519,\u8fd9\u5c31\u662f\u4f20\u8bf4\u4e2d\u7684\u6c61\u67d3... \u5982\u679c\u4f60\u80fd\u7ed9\u6211\u6536\u96c6\u4e00\u4e9b\u6a61\u80f6\u7247,\u6211\u53ef\u4ee5\u7ed9\u4e00\u5957\u9632\u5316\u670d\u6765\u62b5\u5fa1\u6c61\u67d3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACFg==",
                    "tooltip": "<strong>\u4ec0\u4e48\uff1f\u6c61\u67d3!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6a61\u80f6\u72471"
                },
                {
                    "name": "\u62bd\u6c34",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2446.png",
                    "x": 300.0,
                    "y": 480.0,
                    "data": "RC\u7684\u84c4\u6c34\u69fd\u65e0\u6cd5\u6ee1\u8db3\u4f60\u5e72\u6e34\u7684\u53cc\u5507? \u6216\u662f\u4f60\u9009\u62e9\u7684\u57fa\u5730\u751f\u7269\u7fa4\u7cfb\u6e7f\u5ea6\u592a\u4f4e? \u8fd9\u4e2a\u6cf5\u53ea\u9700\u6781\u5c11\u7684\u53ef\u71c3\u7269\u6d88\u8017(\u5982\u8910\u7164)\u5373\u53ef\u4ea7\u51fa\u66f4\u591a\u7684\u6c34.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJjg==",
                    "tooltip": "<strong>\u62bd\u6c34</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94f8\u6a21\u3001\u6a21\u5177\u3001\u94f8\u6a21"
                },
                {
                    "name": "\u5f3a\u5316X\uff1f\u7262\u4e0d\u53ef\u7834!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1127.png",
                    "x": 252.0,
                    "y": 276.0,
                    "data": "\u94a2\u94c1\u94f8\u9020\u7684\u5de5\u5177\u5df2\u7ecf\u53ef\u4ee5\u91c7\u96c6\u9ed1\u66dc\u77f3\u4e86.\u4f60\u53ef\u4ee5\u5236\u4f5c\u52a0\u56fa\u677f,\u5b83\u53ef\u4ee5\u5f3a\u5316\u4f60\u7684\u5320\u9b42\u5de5\u5177,\u8ba9\u4ed6\u4eec\u7684\u8010\u4e45\u5927\u5e45\u5ea6\u63d0\u9ad8! \u5982\u679c\u4f60\u5c06\u4f60\u7684\u5de5\u5177\u5f3a\u5316\u5230\u8010\u4e45X\u7684\u8bdd\u51e0\u4e4e\u4f1a\u8ba9\u5b83\u4eec\u53d8\u5f97\u7262\u4e0d\u53ef\u7834!%n%nPS\uff1a\u8bb8\u591a\u60c5\u51b5\u4e0b,\u5f3a\u5316\u8010\u4e45\u7684\u4ef7\u503c\u5e76\u4e0d\u9ad8,\u56e0\u4e3a\u5de5\u5177\u7684\u8010\u4e45\u4e0d\u4f1a\u5feb\u901f\u6d88\u8017,\u6240\u4ee5\u7ef4\u4fee\u8d77\u6765\u4e5f\u4e0d\u4f1a\u82b1\u8d39\u592a\u591a,\u5e76\u4e14\u968f\u7740\u79d1\u6280\u53d1\u5c55\u4f1a\u66f4\u6362\u66f4\u597d\u7684\u6750\u6599(\u8010\u4e45\u66f4\u9ad8,\u901f\u5ea6\u66f4\u5feb). \u53e6\u5916,\u7b49\u4f60\u5f3a\u5316\u5230\u4e0d\u6bc1(\u7262\u4e0d\u53ef\u7834)\u65f6,\u81ea\u52a8\u7684\u91c7\u77ff\u573a\u65e9\u5df2\u66ff\u4ee3\u4e86\u624b\u52a8\u6316\u77ff. \u6240\u4ee5\u4e0d\u8981\u5728\u8010\u4e45\u4e0a\u6d6a\u8d39\u69fd\u4f4d\u4e86,\u5f3a\u5316\u901f\u5ea6(\u7ea2\u77f3)\u6216\u8005\u65f6\u8fd0/\u7cbe\u51c6\u91c7\u96c6\u5427.\u7136\u800c,\u6709\u4e00\u4e9b\u975e\u5e38\u597d\u7684\u4f7f\u7528\u6848\u4f8b,\u5982\u4f10\u6728\u65a7\u548c\u81ea\u52a8\u5316\u6240\u7528\u7684\u5de5\u5177.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEZw==",
                    "tooltip": "<strong>\u5f3a\u5316X\uff1f\u7262\u4e0d\u53ef\u7834!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5347\u7ea7!\u5347\u7ea7!\u5347\u7ea7!"
                },
                {
                    "name": "\u4fee\u7406\u4f60\u7684\u9632\u5316\u670d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1888.png",
                    "x": 780.0,
                    "y": 492.0,
                    "data": "\u7a7f\u7740\u9632\u5316\u670d\u7684\u65f6\u5019\u5f97\u5c0f\u5fc3.\u5b83\u7684\u8010\u4e45\u4e0d\u9ad8.\u5373\u4f7f\u53ea\u4ece\u51e0\u683c\u9ad8\u7684\u5730\u65b9\u6454\u843d\u90fd\u4f1a\u5feb\u901f\u635f\u8017\u9774\u5b50\u7684\u8010\u4e45.%n%n\u5728\u4f60\u8fdb\u5165\u540eLV\u65f6\u4ee3\u80fd\u5236\u4f5c\u4e00\u5957\u65b0\u7684\u4e4b\u524d,\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u7528\u4e00\u4e9b\u6a61\u80f6\u7247\u548c\u4e00\u4e2a\u80f6\u6c34\u6876\u6765\u4fee\u7406\u4f60\u7684\u9632\u5316\u670d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHYA==",
                    "tooltip": "<strong>\u4fee\u7406\u4f60\u7684\u9632\u5316\u670d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ec0\u4e48\uff1f\u6c61\u67d3!"
                },
                {
                    "name": "\u7535\u963b1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/835.png",
                    "x": 576.0,
                    "y": 528.0,
                    "data": "\u6bcf\u4e2a\u7535\u8def\u677f\u90fd\u9700\u8981\u4e24\u4e2a\u7535\u963b.%n%n\u7a0d\u540e\u4f60\u8fd8\u53ef\u4ee5\u5236\u9020\u66f4\u597d\u7248\u672c\u7684\u7535\u963b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADQw==",
                    "tooltip": "<strong>\u7535\u963b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)"
                },
                {
                    "name": "\u6a61\u80f6\u72471",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/536.png",
                    "x": 744.0,
                    "y": 456.0,
                    "data": "\u8ba9\u6211\u4eec\u6765\u505a\u4e00\u4e2a\u677f\u6a21\u5177,\u4ee5\u5236\u4f5c\u6a61\u80f6\u7247. \u6a61\u80f6\u7247\u4e3b\u8981\u7528\u4e8e\u4f20\u9001\u5e26\u548c\u7ebf\u7f06.%n%n\u5728\u73b0\u9636\u6bb5,\u7528\u6a61\u80f6\u7247\u624b\u5de5\u5236\u9020\u7ebf\u7f06\u6bd4\u5408\u91d1\u7089\u7684\u914d\u65b9\u66f4\u5feb,\u6210\u672c\u66f4\u4f4e.%n%n\u6709\u4e86\u8fd9\u4e9b\u6a61\u80f6\u7247, \u4f60\u5c31\u53ef\u4ee5\u5236\u4f5c\u6d3b\u585e\u9774\u5b50 - \u8fd9\u5c06\u5927\u5927\u63d0\u9ad8\u4f60\u7684\u79fb\u52a8\u80fd\u529b.\u53ef\u4ee5\u5728\u4efb\u52a1\u201c\u6e38\u5386\u56db\u65b9\"\u4e2d\u627e\u5230\u8fd9\u4e2a\u4efb\u52a1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACGA==",
                    "tooltip": "<strong>\u6a61\u80f6\u72471</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7edd\u7f18\u7ebf\u7f06"
                },
                {
                    "name": "\u6a61\u80f6\u8f6f\u9524",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1157.png",
                    "x": 648.0,
                    "y": 492.0,
                    "data": "\u4f60\u7684\u6728\u5934\u8f6f\u9524\u7528\u51e0\u6b21\u5c31\u574f\u4e86.\u7528\u6a61\u80f6\u505a\u4e00\u4e2a\u66f4\u8010\u7528\u7684\u8f6f\u9524\u5427.%n%n\u6700\u597d\u7684\u8f6f\u9524\u662f\u7528\u94a2\u53f6\u5236\u6210\u7684,\u5176\u6b21\u662f\u94c1\u6728.\u5728\u8fdb\u5165\u66ae\u8272\u68ee\u6797\u540e,\u8fd9\u4e24\u79cd\u6750\u6599\u90fd\u633a\u5bb9\u6613\u83b7\u5f97.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEhQ==",
                    "tooltip": "<strong>\u6a61\u80f6\u8f6f\u9524</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7edd\u7f18\u7ebf\u7f06"
                },
                {
                    "name": "\u5b89\u5168\u7b2c\u4e00",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2161.png",
                    "x": 396.0,
                    "y": 576.0,
                    "data": "\u5bf9\u4e8e\u90a3\u4e9bGT\u65b0\u624b,\u8fd9\u91cc\u6709\u4e9b\u7528\u7535\u65b9\u9762\u7684\u63d0\u793a\u548c\u8b66\u544a.%n%n\u673a\u5668\u4e0d\u559c\u6b22\u6dcb\u96e8,\u5426\u5219\u9644\u8fd1\u5c31\u4f1a\u7740\u706b.\u800c\u673a\u5668\u9644\u8fd1\u7684\u706b\u6709\u968f\u673a\u51e0\u7387\u5f15\u7206\u673a\u5668.\u53e6\u5916,\u7ed9\u673a\u5668\u8fc7\u9ad8\u7535\u538b\u4e5f\u4f1a\u9020\u6210\u7206\u70b8.%n%n\u5728\u7ebf\u7f06\u91cc\u4f20\u8f93\u8fc7\u9ad8\u7535\u538b\u6216\u8fc7\u5927\u7535\u6d41\u4f1a\u9020\u6210\u7ebf\u7f06\u88ab\u70e7\u6bc1\u5e76\u5728\u9644\u8fd1\u7740\u706b,\u800c\u8fd9\u53ef\u80fd\u9020\u6210\u673a\u5668\u7206\u70b8.\u786e\u4fdd\u53d1\u7535\u673a\u548c\u7535\u6c60\u63d0\u4f9b\u7684\u7535\u6d41\u6570\u4e0d\u8d85\u8fc7\u7ebf\u7f06/\u5bfc\u7ebf\u7684\u4f20\u8f93\u80fd\u529b.%n%n\u4e00\u53f0\u4ea7\u751f1A\u7535\u6d41\u7684\u53d1\u7535\u673a\u53ef\u80fd\u53ef\u4ee5\u4e3a\u591a\u53f0\u673a\u5668\u4f9b\u7535-\u5982\u679c\u90a3\u4e9b\u673a\u5668\u8fd0\u884c\u7684\u914d\u65b9\u4f4e\u4e8e\u6ee1\u7535\u538b\u7684\u8bdd.\u4e3e\u4e2a\u4f8b\u5b50,\u7814\u78e8\u673a\u5904\u7406\u77ff\u77f3\u65f6\u53ea\u97002EU/t,\u6240\u4ee5\u4f60\u53ef\u4ee5\u7528\u4e00\u53f01A\u53d1\u7535\u673a\u5e26\u52a8\u597d\u51e0\u53f0\u53f0\u7814\u78e8\u673a,\u5982\u679c\u7ebf\u7f06\u4e0d\u592a\u957f\u7684\u8bdd.(\u56e0\u4e3a\u7ebf\u635f\u8ba1\u7b97\u5355\u4f4d\u4e3a/\u7535\u6d41/\u7c73.\u8bf7\u6ce8\u610f,\u7ebf\u7f06\u4f1a\u4f18\u4e8e\u5bfc\u7ebf.)\u4f46\u662f\u8981\u5f53\u5fc3!\u6709\u65f6\u914d\u65b9\u4f1a\u9700\u8981\u8d85\u8fc7\u4f60\u9884\u60f3\u7684\u9ad8\u7535\u538b,\u6bd4\u5982\u7814\u78e8\u673a\u6c99\u5b50-->\u77f3\u82f1\u77ff\u7802\u8fd9\u4e2a\u914d\u65b9.%n%n\u5927\u90e8\u5206\u673a\u5668\u53ea\u4f1a\u7528\u52301A,\u4f46\u6709\u4e9b\u4f8b\u5916,\u5982\u7535\u5f27\u7089\u3001\u70ed\u529b\u79bb\u5fc3\u673a\u3001\u4e16\u754c\u52a0\u901f\u5668\u3001\u8d28\u91cf\u53d1\u751f\u5668.\u6ce8\u610f,\u4e3a\u4e86\u786e\u4fdd\u8fd0\u884c\u65f6\u7535\u529b\u5145\u8db3,\u673a\u5668\u53ef\u4ee5\u63a5\u53d7\u6bd4\u8fd0\u884c\u6240\u9700\u66f4\u9ad8\u7684\u7535\u6d41(\u901a\u5e38\u4e3a2A),\u8fd9\u5728\u7ebf\u635f\u8f83\u9ad8(\u901a\u5e38\u662f\u5728LV\u9636\u6bb5),\u673a\u5668\u63a5\u6536\u5230\u76841A\u7535\u529b\u5305\u635f\u5931\u4e86\u592a\u591a\u65f6,\u5c24\u5176\u91cd\u8981.\u673a\u5668\u63a5\u53d7\u6700\u5927\u7535\u6d41\u7684\u516c\u5f0f\u662f:[(2*\u914d\u65b9EU/t)/\u673a\u5668\u7535\u538b]+1.(\"[]\"\u8868\u793a\u5411\u4e0b\u53d6\u6574) \u9009\u7528\u7ebf\u7f06\u65f6\u8bf7\u7262\u8bb0\u8fd9\u70b9.%n%n\u67d0\u4e9b\u673a\u5668\u4e13\u7528\u4e8e\u5904\u7406\u591aA\u7535\u6d41,\u6bd4\u5982\u7535\u6c60\u7bb1\u3001\u53d8\u538b\u5668\u548c\u7ebf\u7f06\u4e8c\u7ea7\u7ba1.\u8bf7\u67e5\u770b\"EU\u7684\u5b58\u50a8\u4e0e\u53d8\u538b\"\u4efb\u52a1\u680f,\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f.%n%n\u5982\u679c\u4f60\u9700\u8981\u8f93\u9001\u5927\u7535\u6d41,\u53ef\u4ee5\u4f7f\u7528\u66f4\u7c97\u7684\u7ebf\u7f06\u6216\u8d85\u5bfc\u5bfc\u7ebf(MV+,\u53e6\u5916ULV\u548cLV\u4e5f\u6709\u81ea\u5df1\u7684\u65e0\u7ebf\u635f\u7ebf\u7f06).\u5728\u540e\u671f,\u4f60\u8fd8\u53ef\u4ee5\u7528\u6fc0\u5149\u4ed3\u8f93\u9001\u5de8\u91cf\u7535\u6d41. \u751a\u81f3\u8fd8\u6709\u65e0\u7ebfEU\u7f51\u7edc,\u4e0d\u8fc7\u73b0\u5728\u8fd8\u53ef\u671b\u800c\u4e0d\u53ef\u5373.%n%n\u8df3\u7535\u7684\u5355\u65b9\u5757\u673a\u5668\u5728\u6709\u7535\u540e\u4f1a\u91cd\u65b0\u5f00\u59cb\u5904\u7406,\u4e0d\u4f1a\u541e\u6389\u7269\u54c1.\u4f46\u591a\u65b9\u5757\u673a\u5668\u8df3\u7535\u5c31\u4f1a\u541e\u6389\u7269\u54c1\u4e86.%n%n\u8bf7\u6ce8\u610f,\u4efb\u4f55\u53d1\u9001EU\u7684\u65b9\u5757\u90fd\u5b58\u5728\u5185\u963b,\u7535\u538b\u635f\u5931\u4e3a\u6bcf\u5b89\u57f92^(\u7535\u538b\u7b49\u7ea7-1). \u6bd4\u5982LV\u635f\u59311EU,MV\u635f\u59312EU,\u4ee5\u6b64\u7c7b\u63a8.\u56e0\u6b64\u8fde\u7eed\u4f7f\u7528\u5927\u91cf\u7535\u6c60\u7bb1\u4f1a\u5bf9\u80fd\u91cf\u9020\u6210\u6781\u5927\u6d6a\u8d39,\u5c24\u5176\u5728\u4f4e\u7535\u538b\u9636\u6bb5,\u751a\u81f3\u4e00\u4e2a\u7535\u6c60\u7bb1\u90fd\u4f1a\u9020\u6210MV\u5de5\u4e1a\u9ad8\u7089\u65e0\u6cd5\u7a33\u5b9a\u8fd0\u884c,\u6216\u8bb8\u53d1\u7535\u673a\u76f4\u4f9b\u4f1a\u66f4\u597d? \u5f53\u7136,\u5982\u679c\u4f60\u60f3\u5728\u957f\u8ddd\u79bb\u5185\u4fdd\u6301\u7535\u6d41\u8f93\u9001\u59cb\u7ec8\u5904\u4e8e\u5cf0\u503c,\u8fd8\u662f\u5076\u5c14\u9700\u8981\u501f\u52a9\u7535\u6c60\u7bb1\u7684,\u4e0d\u8fc7\u968f\u7740\u7535\u538b\u7684\u5347\u9ad8,\u5176\u5185\u963b\u9020\u6210\u7684\u635f\u5931\u5f71\u54cd\u4e5f\u8d8a\u6765\u8d8a\u5c0f.%n%n\u5982\u679c\u8fd9\u91cc\u8fd8\u6ca1\u6709\u770b\u660e\u767d\u7684\u8bdd,\u8bf7\u8f6c\u5230[url]https://wiki.gtnewhorizons.com/wiki/Electricity[/url] \u9605\u8bfb\u66f4\u591a\u4fe1\u606f.%n%n WIKI \u7535\u529b\uff1a[url]gtnh.huijiwiki.com/p/149[/url]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIcQ==",
                    "tooltip": "<strong>\u5b89\u5168\u7b2c\u4e00</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u591a\u84b8\u6c7d!"
                },
                {
                    "name": "\u53f2\u83b1\u59c6\u7a7a\u5c9b\u4e4b\u65c5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/875.png",
                    "x": 744.0,
                    "y": 420.0,
                    "data": "\u6a61\u80f6\u6811\u4e0d\u662f\u751f\u6a61\u80f6\u7684\u552f\u4e00\u6765\u6e90,\u53bb\u627e\u627e\u60ac\u5728\u7a7a\u4e2d\u7684\u53f2\u83b1\u59c6\u5c9b.\u5c9b\u4e0a\u51dd\u56fa\u7684\u53f2\u83b1\u59c6\u5757\u548c\u53f2\u83b1\u59c6\u6811\u53f6\u90fd\u53ef\u4ee5\u901a\u8fc7\u63d0\u53d6\u6216\u8005\u79bb\u5fc3\u7684\u65b9\u5f0f\u5f97\u5230\u751f\u6a61\u80f6.%n\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u6a61\u80f6\u6811\u6797\u573a\u65c1\u8fb9\u89c4\u5212\u4e00\u5757\u533a\u57df\u6765\u79cd\u690d\u4e00\u4e9b\u53f2\u83b1\u59c6\u6811\u82d7.\u8fd9\u6837\u5c31\u53ef\u4ee5\u6e90\u6e90\u4e0d\u65ad\u7684\u751f\u4ea7\u751f\u6a61\u80f6\u4e86.%n%n\u6db2\u6001\u7684\u53f2\u83b1\u59c6\u65e0\u6cd5\u653e\u7f6e,\u56e0\u4e3a\u5b83\u7c7b\u4f3c\u4e8e\u5237\u602a\u7b3c,\u4f1a\u9020\u6210\u5ef6\u8fdf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADaw==",
                    "tooltip": "<strong>\u53f2\u83b1\u59c6\u7a7a\u5c9b\u4e4b\u65c5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7edd\u7f18\u7ebf\u7f06"
                },
                {
                    "name": "\u66f4\u591a\u84b8\u6c7d!",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://version/272/quests_icons/QuestIcon/70.png",
                    "x": 456.0,
                    "y": 612.0,
                    "data": "\u4f60\u51e0\u4e4e\u5b8c\u6210\u5b83\u4e86!\u53ea\u9700\u8981\u6700\u540e\u4e00\u4e2a\u5236\u4f5c\u6b65\u9aa4\u5c31\u53ef\u4ee5\u5230\u8fbe\u7b2c1\u9636\u7684\u9700\u6c42!\u7ee7\u7eed\u524d\u8fdb\u5427!%n%n\u8fd9\u79cd\u84b8\u6c7d\u8f6e\u673a\u53ef\u4ee5\u5c06\u84b8\u6c7d\u8f6c\u5316\u4e3aEU.\u4f60\u4e4b\u524d\u4f7f\u7528\u7684\u80fd\u6e90\u4e00\u6210\u4e0d\u53d8,\u4f46\u4ece\u6b64\u523b\u5f00\u59cb,\u4f60\u53ef\u4ee5\u751f\u4ea7EU,\u5e76\u901a\u8fc7\u7ebf\u7f06\u5c06\u5176\u8f93\u9001\u5230\u4f60\u7684\u673a\u5668\u5185,\u53d6\u4ee3\u539f\u5148\u9700\u8981\u901a\u8fc7\u7ba1\u9053\u5c06\u84b8\u6c7d\u76f4\u63a5\u9001\u5230\u673a\u5668\u5904.\u76f8\u6bd4\u9752\u94dc\u673a\u5668,\u7535\u529b\u673a\u5668\u65e0\u9700\u6392\u6c14\u53e3,\u4e14\u66f4\u52a0\u9ad8\u6548.%n%n\u53e6\u5916,\u4e4b\u540e\u4f60\u5f88\u53ef\u80fd\u8fd8\u4f1a\u4ece\u84b8\u6c7d\u8f6c\u5411\u53e6\u4e00\u79cd\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAARg==",
                    "tooltip": "<strong>\u66f4\u591a\u84b8\u6c7d!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def</br>\u57fa\u7840\u5236\u4f5c:\u9a6c\u8fbe</br>\u57fa\u7840\u5236\u4f5c:\u8f6c\u5b50"
                },
                {
                    "name": "\u84b8\u6c7d\u66ff\u4ee3\u54c1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/59.png",
                    "x": 84.0,
                    "y": 144.0,
                    "data": "\u6709\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u4e3a\u4f60\u7684\u673a\u5668\u4ea7\u751f\u84b8\u6c7d,\u8fd9\u6761\u652f\u7ebf\u4efb\u52a1\u5411\u4f60\u5c55\u793a\u4e86\u4e00\u4e9b\u4ea7\u751f\u84b8\u6c7d\u7684\u66ff\u4ee3\u65b9\u6848.%n%n\u81f3\u4e8e\u60f3\u8981\u73bb\u7483\u7684\u8bdd,\u4f60\u9700\u8981\u518d\u591a\u5b8c\u6210\u51e0\u4e2a\u4efb\u52a1\u624d\u80fd\u770b\u5230\u76f8\u5173\u6307\u5bfc,\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5df1\u770bNEI\u76f4\u63a5\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAOw==",
                    "tooltip": "<strong>\u84b8\u6c7d\u66ff\u4ee3\u54c1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!"
                },
                {
                    "name": "\u94a2\u7bb1\u5b50?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8598415503288479283.png",
                    "x": 192.0,
                    "y": 288.0,
                    "data": "\u94a2\u7bb1\u5b50\u7684\u9020\u4ef7\u660e\u663e\u9ad8\u4e8e\u91d1\u7bb1,\u5bb9\u91cf\u4e5f\u66f4\u5c0f,\u4f46\u53ef\u7528\u4e8e\u67d0\u4e9b\u7279\u6b8a\u5408\u6210\u914d\u65b9.%n",
                    "quest_id": "V4jinTYRSueIrEqn90dRzQ==",
                    "tooltip": "<strong>\u94a2\u7bb1\u5b50?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u9a6f\u670d\u8c79\u732b\u624d\u80fd\u4ea4\u670b\u53cb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2346.png",
                    "x": 456.0,
                    "y": 12.0,
                    "data": "\u62e5\u6709\u6240\u9700\u6750\u6599\u540e,\u4f60\u5c06\u9700\u8981\u627e\u5230\u4e00\u53ea\u8c79\u732b\u6765\u9a6f\u670d.%n%n\u8c79\u732b\u53ef\u4ee5\u5728\u4e1b\u6797\u751f\u7269\u7fa4\u7cfb\u4e2d\u627e\u5230.%n%n\u5982\u679c\u4f60\u627e\u4e0d\u5230\u8c79\u732b,\u8fd8\u53ef\u4ee5\u7528\u5237\u602a\u86cb\u6765\u53ec\u5524\u5b83.%n%n\u4f60\u53ef\u4ee5\u901a\u8fc7\u7ed9\u8c79\u732b\u5582\u751f\u9c7c\u6765\u9a6f\u670d\u5b83.\u6240\u4ee5\u5728\u7269\u54c1\u680f\u5185\u5e26\u4e0a\u751f\u9c7c,\u7136\u540e\u5728\u5feb\u6377\u680f\u4e2d\u9009\u62e9\u751f\u9c7c.%n%n\u63d0\u793a:\u9a6f\u670d\u8c79\u732b\u8fc7\u7a0b\u4e2d,\u8bf7\u786e\u4fdd\u5468\u56f4\u7a7a\u65f7,\u4ee5\u4fbf\u4e3a\u8c79\u732b\u63d0\u4f9b\u8db3\u591f\u7684\u79fb\u52a8\u7a7a\u95f4.\u5982\u679c\u4f60\u5468\u56f4\u7684\u7a7a\u95f4\u592a\u5c0f,\u4f60\u5c06\u65e0\u6cd5\u9a6f\u670d\u8c79\u732b.%n%n\u7136\u540e,\u624b\u6301\u751f\u9c7c\u5e76\u4fdd\u6301\u4e0d\u52a8.\u5982\u679c\u4f60\u79fb\u52a8\u4e86,\u4f1a\u5413\u8dd1\u8c79\u732b\u7684.\u5982\u679c\u4f60\u5f88\u5b89\u9759,\u8c79\u732b\u6700\u7ec8\u4f1a\u6ce8\u610f\u5230\u4f60\u624b\u4e2d\u7684\u9c7c,\u5411\u4f60\u8d70\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJKg==",
                    "tooltip": "<strong>\u9a6f\u670d\u8c79\u732b\u624d\u80fd\u4ea4\u670b\u53cb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248"
                },
                {
                    "name": "\u51b7\u9177\u7684\u5bb6\u4f19",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1108.png",
                    "x": 600.0,
                    "y": 180.0,
                    "data": "\u4e00\u4e2a\u4eba\u5f88\u5b64\u72ec\uff1f\u6216\u8005\u4f60\u5c45\u4f4f\u7684\u5730\u65b9\u8ddd\u79bb\u96ea\u539f\u5f88\u8fdc\uff1f%n\u5236\u9020\u4e00\u4e2a\u96ea\u5080\u5121\u5427,\u4e5f\u8bb8\u4f60\u8fd8\u53ef\u4ee5\u548c\u5b83\u4e00\u8d77\u6253\u6253\u96ea\u4ed7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEVA==",
                    "tooltip": "<strong>\u51b7\u9177\u7684\u5bb6\u4f19</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599"
                },
                {
                    "name": "GT\u50a8\u7f50,ULV\u7248",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/890.png",
                    "x": 84.0,
                    "y": 324.0,
                    "data": "\u8d85\u4f4e\u538b\u6d41\u4f53\u50a8\u7f50\u662f\u4e0b\u4e00\u79cdGT\u50a8\u7f50.\u5b83\u53ef\u4ee5\u50a8\u5b5832\u6876,\u6216\u8005\u8bf432000L\u6d41\u4f53,\u4e14\u53ef\u7528\u4e8e\u704c\u88c5\u5355\u5143. \u5236\u4f5c\u5b83\u9700\u8981\u9521\u677f\u3001\u94c1\u677f\u3001\u94a2\u677f\u3001\u5927\u578b\u7c98\u571f\u7ba1\u9053\u548c\u4e00\u4e2a\u88c5\u6ee1\u6c34\u7684\u6c34\u6876.%n%nGT\u50a8\u7f50\u65e0\u6cd5\u81ea\u52a8\u8f93\u51fa.\u5982\u679c\u4f60\u60f3\u4f20\u8f93\u6d41\u4f53,\u8bf7\u4f7f\u7528\u6cf5\u3001\u5bfc\u7ba1\u6216\u5176\u4ed6\u7c7b\u4f3c\u81ea\u5e26\u52a8\u529b\u7684\u8bbe\u5907.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADeg==",
                    "tooltip": "<strong>GT\u50a8\u7f50,ULV\u7248</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/49.png",
                    "x": 576.0,
                    "y": 72.0,
                    "data": "\u4e3a\u4e86\u5f97\u5230\u66f4\u591a\u7684\u673a\u5668,\u4f60\u9700\u8981\u6d3b\u585e.\u53ef\u4e0d\u662f\u8981\u90a3\u4e9b\u4e1a\u4f59\u7684\u4e1c\u897f,\u4f60\u7f3a\u7684\u662f\u7279\u522b\u7684\u90a3\u79cd,\u800c\u6211\u5c06\u6307\u5bfc\u4f60\u8be5\u5982\u4f55\u505a\u51fa\u5b83\u4eec.%n%nPS\uff1a\u7cbe\u82f1\u602a\u4f1a\u6389\u843d\u6d3b\u585e,\u4e0d\u8fc7\u8fd9\u6837\u7684\u8bdd\u4f60\u5c31\u65e0\u6cd5\u5f97\u5230\u6b64\u4efb\u52a1\u7684\u8ba4\u53ef.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAMQ==",
                    "tooltip": "<strong>\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248"
                },
                {
                    "name": "\u94c1\u5bb6\u4f19",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1107.png",
                    "x": 636.0,
                    "y": 180.0,
                    "data": "\u4e00\u4e2a\u4eba\u5f88\u5b64\u72ec\uff1f\u60f3\u8981\u5e2e\u5fd9\u4fdd\u62a4\u4f60\u7684\u57fa\u5730\uff1f\u60f3\u8981\u5728\u72ec\u5bf9\u4e0b\u754c\u732a\u4eba\u65f6\u6709\u4e2a\u575a\u5f3a\u7684\u540e\u76fe? \u7528\u94c1\u5757\u548c\u5357\u74dc\u5236\u4f5c\u4e00\u4e9b\u94c1\u5080\u5121,\u8fd9\u6837\u4f60\u57fa\u5730\u91cc\u9762\u7684\u602a\u7269\u95ee\u9898\u5c31\u4f1a\u6d88\u5931\u4e86.%n%n\u94c1\u5080\u5121\u53ef\u4ee5\u5236\u9020\u5927\u91cf\u7684\u4f24\u5bb3\u5e76\u62c9\u53d6\u654c\u4eba\u4ec7\u6068,\u8ba9\u7c7b\u4f3c\u732a\u4eba\u7684\u5bb6\u4f19\u8fdc\u79bb\u4f60.\u5b83\u4eec\u751a\u81f3\u53ef\u4ee5\u5bf9\u4ed8\u8ba8\u538c\u7684\u5438\u8840\u9b3c\u732a\u4eba.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEUw==",
                    "tooltip": "<strong>\u94c1\u5bb6\u4f19</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599"
                },
                {
                    "name": "\u4e0b\u754c",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/479.png",
                    "x": 444.0,
                    "y": 384.0,
                    "data": "\u73b0\u5728\u8fd9\u91cc\u6709\u66f4\u52a0\u5371\u9669\u7684\u7cbe\u82f1\u602a\u7269. \u73a9\u5f97\u5f00\u5fc3!\u4fdd\u91cd",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB3w==",
                    "tooltip": "<strong>\u4e0b\u754c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6253\u706b\u77f3"
                },
                {
                    "name": "The one book to rule them all",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5122202840608450070.png",
                    "x": 552.0,
                    "y": 288.0,
                    "data": "This Tome can store multiple documentation books from other mods. It will be empty when crafted, but you can add books by combining it with the desired book in a crafting grid.\n\nRight-clicking with the Tome in hand will open an interface showing all the added books; clicking on a book will transform the tome into the selected book. To revert it back to the Tome, left-click while sneaking.\n\nTo retrieve a stored book, transform the Tome into the desired book and throw it away while sneaking - this will drop the selected book and leave the tome in your inventory.\n\n[warn]Some warnings:\n\nThe extended version of the Book of Biomes from Witchery is not compatible with this tome. \n\nYou should not throw it through the Botania portal. The elves might steal your Tome and return only their own copy of the Lexica Botania.[/warn]",
                    "quest_id": "XuZpnhWZRou46kensglZ6g==",
                    "tooltip": "<strong>The one book to rule them all</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e66</br>\u67d4\u8f6f\u7684\u76ae\u9769"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/62.png",
                    "x": 84.0,
                    "y": 180.0,
                    "data": "\u592a\u9633\u7684\u80fd\u91cf\u975e\u5e38\u5f3a\u5927,\u4e3a\u4f55\u4e0d\u5229\u7528\u5b83\u6765\u4ea7\u751f\u84b8\u6c7d\u5462?%n%n\u5728\u5e95\u90e8\u52a0\u6c34\u53ef\u4ee5\u4ea7\u751f\u84b8\u6c7d.\u4e0e\u5176\u4ed6\u9505\u7089\u4e0d\u540c,\u8fd9\u4e2a\u9505\u7089\u53ea\u5728\u8f93\u51fa\u53e3\u8f93\u51fa\u84b8\u6c7d.%n%n\u4f60\u9700\u8981\u6765\u81ea\u8d2b\u7620\u77ff\u4e2d\u7684\u94f6\u6765\u5236\u4f5c\u592a\u9633\u80fd\u9505\u7089.\u5728LV\u9636\u6bb5,\u4f60\u53ef\u4ee5\u5728\u66ae\u8272\u68ee\u6797\u4e2d\u83b7\u5f97\u66f4\u591a\u94f6.%n%n\u63d0\u793a:\u592a\u9633\u80fd\u9505\u7089\u4f1a\u9010\u6e10\u9499\u5316,\u5e76\u968f\u7740\u65f6\u95f4\u63a8\u79fb\u964d\u4f4e\u6548\u80fd,\u76f4\u523040L/s.\u8bd1\u8005\u6ce8:\u53ea\u8981\u628a\u9505\u7089\u62c6\u6389\u91cd\u65b0\u653e\u7f6e\u5c31\u80fd\u91cd\u7f6e\u9499\u5316(\uffe3\u25bd\uffe3)~* \u7b49\u5230\u7535\u529b\u65f6\u4ee3,\u4f60\u5c31\u80fd\u4f7f\u7528\u84b8\u998f\u6c34\u9632\u6b62\u9499\u5316.%n",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAPg==",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6e05\u6670\u7684\u89c6\u91ce</br>\u84b8\u6c7d\u66ff\u4ee3\u54c1"
                },
                {
                    "name": "\u662f\u65f6\u5019\u641e\u4e9b\u903b\u8f91\u7535\u8def",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/66.png",
                    "x": 456.0,
                    "y": 456.0,
                    "data": "\u597d\u6d88\u606f\u662f,\u4f60\u73b0\u5728\u53ef\u4ee5\u8fdb\u9636\u5230\u4e0b\u4e00\u9636\u6bb5\u4e86!\u800c\u574f\u6d88\u606f\u5219\u662f,\u5728\u5f00\u59cb\u4e4b\u524d,\u4f60\u4f9d\u7136\u5fc5\u987b\u505a\u4e00\u5927\u5806\u4e1c\u897f!\u4e0d\u8fc7\u4e0d\u7528\u62c5\u5fc3,\u6211\u4f1a\u6307\u5bfc\u4f60\u600e\u4e48\u53bb\u505a\u7684!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAQg==",
                    "tooltip": "<strong>\u662f\u65f6\u5019\u641e\u4e9b\u903b\u8f91\u7535\u8def</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)</br>\u94f8\u6a21\u3001\u6a21\u5177\u3001\u94f8\u6a21"
                },
                {
                    "name": "\u5de5\u5177\u88c5\u914d\u53f0",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/741.png",
                    "x": 336.0,
                    "y": 144.0,
                    "data": "\u5236\u9020\u51fa\u8010\u9178\u94dd\u540e,\u4e3a\u4e86\u5236\u9020\u66f4\u5927(\u5e76\u4e14\u66f4\u597d)\u7684\u5320\u9b42\u5de5\u5177\u4e86,\u662f\u65f6\u5019\u5236\u4f5c\u4e00\u4e2a\u5de5\u5177\u88c5\u914d\u53f0\u4e86.%n%n\u73b0\u5728\u94f8\u6a21\u4e0d\u4e00\u5b9a\u9700\u8981\u4f7f\u7528\u94c1\u6765\u5236\u4f5c;\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u6750\u6599,\u4f8b\u5982\u9521\u6216\u94dc\u7b49.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC5Q==",
                    "tooltip": "<strong>\u5de5\u5177\u88c5\u914d\u53f0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8010\u9178\u94dd"
                },
                {
                    "name": "\u5783\u573e\u592a\u591a??",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1919.png",
                    "x": 288.0,
                    "y": 240.0,
                    "data": "\u90a3\u662f\u4e0d\u53ef\u80fd\u7684!\u4f46\u5982\u679c\u4f60\u771f\u7684\u60f3\u6446\u8131\u90a3\u4e9b\u591a\u4f59\u7684\u7269\u54c1,\u5236\u4f5c\u4e00\u4e2a\u5783\u573e\u6876\u5427.\u5982\u679c\u4f60\u60f3\u505a\u4e2a\u82b1\u54e8\u88c5\u7f6e\u7684\u8bdd,\u53ef\u4ee5\u7528\u4e00\u4e2a\u6f0f\u6597,\u5e26\u4e0a\u62c9\u6746,\u8fd9\u6837\u5c31\u53ef\u4ee5\u786e\u4fdd\u4f60\u4e22\u8fdb\u53bb\u7684\u662f\u771f\u6b63\u7684\u5783\u573e.\u6211\u624d\u4e0d\u4f1a\u544a\u8bc9\u4f60\u6211\u4e0d\u5c0f\u5fc3\u628a\u5de5\u5177\u4e22\u8fdb\u53bb\u8fc7\u5462,\u4ece\u6765\u6ca1\u6709!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHfw==",
                    "tooltip": "<strong>\u5783\u573e\u592a\u591a??</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9524\u5b50\u65f6\u523b v2.0"
                },
                {
                    "name": "\u5347\u7ea7:\u538b\u7f29\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/55.png",
                    "x": 648.0,
                    "y": 240.0,
                    "data": "\u4e00\u53f0\u65b0\u7248\u7684\u84b8\u6c7d\u538b\u7f29\u673a!\u5b83\u6d88\u8017\u7684\u84b8\u6c7d\u603b\u91cf\u548c\u524d\u8f88\u76f8\u540c,\u4f46\u901f\u5ea6\u662f\u524d\u8f88\u7684\u4e24\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAANw==",
                    "tooltip": "<strong>\u5347\u7ea7:\u538b\u7f29\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6bd4\u94c1\u66f4\u597d</br>\u538b\u7f29\u6750\u6599</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!"
                },
                {
                    "name": "\u5347\u7ea7:\u7194\u7089",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/64.png",
                    "x": 12.0,
                    "y": 108.0,
                    "data": "\u4e00\u53f0\u65b0\u7248\u7684\u84b8\u6c7d\u7194\u7089.\u5b83\u6d88\u8017\u7684\u84b8\u6c7d\u603b\u91cf\u548c\u524d\u8f88\u76f8\u540c,\u4f46\u901f\u5ea6\u662f\u524d\u8f88\u7684\u4e24\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAQA==",
                    "tooltip": "<strong>\u5347\u7ea7:\u7194\u7089</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6bd4\u94c1\u66f4\u597d</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!</br>\u7528\u84b8\u6c7d\u70f9\u996a"
                },
                {
                    "name": "\u5347\u7ea7:\u7814\u78e8\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/58.png",
                    "x": 744.0,
                    "y": 72.0,
                    "data": "\u4e00\u53f0\u65b0\u7248\u7684\u84b8\u6c7d\u7814\u78e8\u673a.\u5b83\u6d88\u8017\u7684\u84b8\u6c7d\u603b\u91cf\u548c\u524d\u8f88\u76f8\u540c,\u4f46\u901f\u5ea6\u662f\u524d\u8f88\u7684\u4e24\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAOg==",
                    "tooltip": "<strong>\u5347\u7ea7:\u7814\u78e8\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c89\u788e\u673a v1.0!</br>\u6bd4\u94c1\u66f4\u597d</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!"
                },
                {
                    "name": "\u5347\u7ea7:\u71c3\u7164\u9505\u7089",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/60.png",
                    "x": 48.0,
                    "y": 180.0,
                    "data": "\u8fd9\u57fa\u672c\u4e0a\u53ea\u662f\u5bf9\u4f60\u73b0\u6709\u7684\u71c3\u7164\u9505\u7089\u5347\u7ea7,\u4f46\u4e0d\u7ba1\u600e\u6837,\u5b83\u4ea7\u751f\u4e86\u51e0\u4e4e\u662f\u4e24\u500d\u591a\u7684\u84b8\u6c7d.\u5982\u679c\u4f60\u9884\u8ba1\u8981\u505a\u4e9b\u66f4\u9ad8\u9636\u7684\u673a\u5668,\u90a3\u4f60\u6700\u597d\u8003\u8651\u5efa\u9020\u8fd9\u53f0\u8fdb\u9636\u7684\u71c3\u7164\u9505\u7089.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAPA==",
                    "tooltip": "<strong>\u5347\u7ea7:\u71c3\u7164\u9505\u7089</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u84b8\u6c7d\u66ff\u4ee3\u54c1</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!"
                },
                {
                    "name": "\u5347\u7ea7:\u63d0\u53d6\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/57.png",
                    "x": 744.0,
                    "y": 276.0,
                    "data": "\u4e00\u53f0\u65b0\u7248\u7684\u84b8\u6c7d\u63d0\u53d6\u673a!\u5b83\u6d88\u8017\u7684\u84b8\u6c7d\u603b\u91cf\u548c\u524d\u8f88\u76f8\u540c,\u4f46\u901f\u5ea6\u662f\u524d\u8f88\u7684\u4e24\u500d\u901f.%n%n\u4f60\u4f1a\u60f3\u8981\u5408\u6210\u8fd9\u4e2a\u5bb6\u4f19\u7684,\u56e0\u4e3a\u8fd9\u53f0\u63d0\u53d6\u673a\u4e5f\u786e\u5b9e\u5730\u5728\u63d0\u53d6\u8d70\u4f60\u7684\u70e6\u8e81...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAOQ==",
                    "tooltip": "<strong>\u5347\u7ea7:\u63d0\u53d6\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u63d0\u53d6\u539f\u6599</br>\u6bd4\u94c1\u66f4\u597d</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!"
                },
                {
                    "name": "\u5347\u7ea7:\u953b\u9020\u9524",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/56.png",
                    "x": 336.0,
                    "y": 192.0,
                    "data": "\u4e00\u53f0\u65b0\u7248\u7684\u84b8\u6c7d\u953b\u9020\u9524!\u5b83\u6d88\u8017\u7684\u84b8\u6c7d\u603b\u91cf\u548c\u524d\u8f88\u76f8\u540c,\u4f46\u901f\u5ea6\u662f\u524d\u8f88\u7684\u4e24\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAOA==",
                    "tooltip": "<strong>\u5347\u7ea7:\u953b\u9020\u9524</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6bd4\u94c1\u66f4\u597d</br>\u9524\u5b50\u65f6\u523b v2.0</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!"
                },
                {
                    "name": "\u5347\u7ea7:\u9ad8\u901f\u5408\u91d1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/47.png",
                    "x": 192.0,
                    "y": 12.0,
                    "data": "\u5c31\u50cf\u5927\u591a\u6570\u7684\u673a\u5668\u4e00\u6837,\u8fd9\u91cc\u6709\u4e2a\u66f4\u9ad8\u9636\u7684\u5408\u91d1\u7089.\u5b83\u6d88\u8017\u7684\u84b8\u6c7d\u603b\u91cf\u548c\u524d\u8f88\u76f8\u540c,\u4f46\u901f\u5ea6\u662f\u524d\u8f88\u7684\u4e24\u500d.%n%n\u8bf7\u8bb0\u4f4f,\u8fd9\u53f0\u673a\u5668\u9700\u8981\u5927\u91cf\u7684\u84b8\u6c7d,\u6240\u4ee5\u4f60\u6700\u597d\u5728\u9505\u7089\u3001\u7ba1\u9053\u6216\u8005\u50a8\u7f50\u4e2d\u5b58\u50a8\u8db3\u591f\u7684\u84b8\u6c7d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAALw==",
                    "tooltip": "<strong>\u5347\u7ea7:\u9ad8\u901f\u5408\u91d1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6bd4\u94c1\u66f4\u597d</br>\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!</br>\u66f4\u591a\u9ad8\u7ea7\u5408\u91d1"
                },
                {
                    "name": "\u5347\u7ea7!\u5347\u7ea7!\u5347\u7ea7!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/596.png",
                    "x": 252.0,
                    "y": 312.0,
                    "data": "\u5347\u7ea7\u4f60\u7684\u5de5\u5177.\u628a\u4f60\u7684\u5de5\u5177\u91c7\u6398\u7b49\u7ea7\u89e3\u9501\u5230\u7ea2\u77f3\u6216\u9ed1\u66dc\u77f3.  \u8bb0\u4f4f,\u66f4\u6362\u4e00\u4e2a\u65b0\u7684\u5de5\u5177\u5934,\u5176\u91c7\u6398\u7b49\u7ea7\u4f1a\u662f\u4f4e\u4e00\u7b49\u7ea7\u7684,\u6240\u4ee5\u4f60\u9700\u8981\u5145\u5206\u4f7f\u7528\u5b83,\u624d\u80fd\u5c06\u5176\u91c7\u6398\u7b49\u7ea7\u63d0\u5347\u4e3a\u5408\u9002\u7b49\u7ea7.  \u53bb\u5427,\u6316\u5e73\u4e00\u5ea7\u5c71\u6216\u662f\u522b\u7684\u4ec0\u4e48\u5427!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACVA==",
                    "tooltip": "<strong>\u5347\u7ea7!\u5347\u7ea7!\u5347\u7ea7!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u5347\u7ea7\u62bd\u5c49",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1987.png",
                    "x": 132.0,
                    "y": 444.0,
                    "data": "\u62bd\u5c49\u5347\u7ea7\u4e0d\u540c\u4e8e\u6876\u5347\u7ea7.\u9996\u5148\u4f60\u9700\u8981\u5236\u4f5c\u5347\u7ea7\u6a21\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHww==",
                    "tooltip": "<strong>\u5347\u7ea7\u62bd\u5c49</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u7528\u84b8\u6c7d\u70f9\u996a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/63.png",
                    "x": 12.0,
                    "y": 72.0,
                    "data": "\u5b83\u7684\u5904\u7406\u901f\u5ea6\u5e76\u4e0d\u5feb,\u4f46\u6bd4\u666e\u901a\u7194\u7089\u6548\u7387\u66f4\u9ad8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAPw==",
                    "tooltip": "<strong>\u7528\u84b8\u6c7d\u70f9\u996a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!"
                },
                {
                    "name": "\u6b22\u8fce\u6765\u73a9\u6797\u4e1aMOD",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/586.png",
                    "x": 648.0,
                    "y": 324.0,
                    "data": "\u4f60\u60f3\u8981\u505a\u4e00\u4e2a\u81ea\u52a8\u5316\u7684\u519c\u573a\u3001\u6811\u573a\u6216\u8005\u517b\u6b96\u871c\u8702\uff1f\u60f3\u8981\u7528\u6797\u4e1a\u5de5\u4f5c\u53f0\u7b80\u5316\u5408\u6210?\u90a3\u4e48\u5230\u8fd9\u4e00\u7ae0\u5c31\u5bf9\u4e86!\u4f60\u9700\u8981\u4e66\u67b6\u6765\u89e3\u9501\u4efb\u52a1,\u91cd\u542f\u538b\u7f29\u673a!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACSg==",
                    "tooltip": "<strong>\u6b22\u8fce\u6765\u73a9\u6797\u4e1aMOD</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e66"
                },
                {
                    "name": "\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://version/272/quests_icons/QuestIcon/44.png",
                    "x": 84.0,
                    "y": 72.0,
                    "data": "\u6b22\u8fce,\u5230\u76ee\u524d\u4e3a\u6b62\u505a\u5f97\u5f88\u597d!\u5728\u672c\u9636\u6bb5\u4f60\u5c06\u62e5\u6709\u4f60\u7684\u7b2c\u4e00\u53f0\u673a\u5668,\u83b7\u5f97\u66f4\u591a\u77ff\u7269\u4ea7\u7269,\u5e76\u4e14\u53ef\u4ee5\u66f4\u6709\u6548\u7387\u5730\u5236\u4f5c\u9752\u94dc\u952d.%n%n\u81f3\u4e8e\u6c34\u6e90\u95ee\u9898,\u67e5\u770b\u591a\u65b9\u5757\u680f\u4e2d\u7684\"\u7f3a\u6c34\u5371\u673a\"\u4efb\u52a1.%n%n\u8981\u7528\u7ba1\u9053\u8fde\u63a5\u4f60\u7684\u9505\u7089,\u8bf7\u786e\u4fdd\u4ece\u5e95\u90e8\u4f9b\u6c34,\u5e95\u90e8\u53ea\u4f1a\u63a5\u6536\u6c34,\u800c\u4e0d\u4f1a\u8f93\u51fa\u84b8\u6c7d,\u8fd9\u6837\u5c31\u4e0d\u7528\u62c5\u5fc3\u7ba1\u9053\u88ab\u878d\u5316\u4e86. \u6728\u8d28\u7ba1\u9053\u5c31\u80fd\u80dc\u4efb\u6b64\u4e8b.\u786e\u4fdd\u4f60\u7684\u6c34\u6e90\u6e90\u4e0d\u7edd[warn]\u56e0\u4e3a\u76f4\u63a5\u5411\u70bd\u70ed\u7684\u5e72\u9505\u7089\u52a0\u6c34\u5c06\u5bfc\u81f4\u7206\u70b8![/warn]%n%n\u84b8\u6c7d\u4f1a\u4ece\u4fa7\u9762\u8f93\u51fa.\u8bb0\u4f4f,\u84b8\u6c7d\u662f\u5f88\u70eb\u7684!\u5b83\u4f1a\u6467\u6bc1\u6728\u8d28\u7ba1\u9053,\u6240\u4ee5\u4f60\u5f97\u6362\u6210\u9752\u94dc\u7ba1\u9053,\u800c\u4e14\u5982\u679c\u4f60\u78b0\u5230\u5145\u6ee1\u84b8\u6c7d\u7684\u7ba1\u9053,\u5c06\u4f1a\u88ab\u70eb\u4f24.\u7528\u6728\u677f\u6216\u7eb8\u76d6\u4f4f\u5b83\u4eec.\u6216\u8005\u4e0d\u8981\u5728\u5176\u4e0a\u6216\u5468\u56f4\u884c\u8d70.%n%n\u53e6\u5916,\u8fd9\u4e9b\u84b8\u6c7d\u673a\u5668\u6ca1\u6709\u81ea\u5e26\u81ea\u52a8\u5316\u8f93\u51fa,\u5982\u679c\u8981GUI\u4e2d\u7684\u529f\u80fd,\u4f60\u5f97\u505a\u4e2a\u7528\u7535\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAALA==",
                    "tooltip": "<strong>\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ee7\u7eed\u524d\u8fdb"
                },
                {
                    "name": "\u54ea\u4e2a\u5de5\u7a0b\u5e08\u4e0d\u60f3\u8981\u4e00\u4e2a\u4fbf\u643a\u7684\u5de5\u4f5c\u53f0?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2407.png",
                    "x": 288.0,
                    "y": 276.0,
                    "data": "\u8fd9\u79cd\u80cc\u5305\u727a\u7272\u4e86\u4e00\u90e8\u5206\u7a7a\u95f4,\u4e3a\u4f60\u63d0\u4f9b\u4e86\u4fbf\u643a\u5f0f\u7684\u5de5\u4f5c\u53f0.\u4f60\u5fc5\u987b\u5c06\u8981\u5236\u4f5c\u7684\u7269\u54c1\u653e\u5165\u80cc\u5305.\u800c\u6b63\u56e0\u4e3a\u8fd9\u4e00\u70b9,\u4f60\u53ef\u4ee5\u7528\u5b83\u5feb\u901f\u5408\u6210\u5927\u91cf\u7269\u54c1.%n%n\u7a0d\u540e,\u4f60\u4e5f\u53ef\u4ee5\u7528\u5e93\u5b58\u8f83\u5927\u7684\u6797\u4e1a\u5de5\u4f5c\u53f0\u8fdb\u884c\u76f8\u540c\u7684\u64cd\u4f5c.\u5f53\u4f60\u5230\u8fbeMV\u9636\u6bb5,\u4f60\u53ef\u4ee5\u9009\u62e9\u4e00\u79cd\u63a2\u9669\u80cc\u5305,\u5b83\u6709\u4e00\u5bf9\u6c34\u69fd\u4ee5\u5b58\u50a8\u6d41\u4f53.%n%n",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJZw==",
                    "tooltip": "<strong>\u54ea\u4e2a\u5de5\u7a0b\u5e08\u4e0d\u60f3\u8981\u4e00\u4e2a\u4fbf\u643a\u7684\u5de5\u4f5c\u53f0?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u4e48\u591a\u4e1c\u897f\u5f80\u54ea\u653e\uff1f"
                },
                {
                    "name": "\u6211\u8be5\u600e\u4e48\u5b58\u50a8\u8fd9\u4e48\u591a\u6d41\u4f53?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/84.png",
                    "x": 744.0,
                    "y": 156.0,
                    "data": "\u4f7f\u7528\u5168\u65b0\u7684\u5408\u91d1\u7089,\u4f60\u53ef\u4ee5\u628a\u4e24\u79cd\u6750\u6599\u7ed3\u5408\u8d77\u6765.\u5982\u679c\u628a\u9ed1\u66dc\u77f3\u7c89\u548c\u73bb\u7483\u6405\u62cc\u8d77\u6765\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f\u9ed1\u66dc\u77f3\u73bb\u7483,\u5f88\u68d2.\u4f60\u53ef\u4ee5\u505a\u7684\u7b2c\u4e00\u4e2a\u50a8\u7f50\u662fBC\u50a8\u7f50.\u8fd9\u79cd\u50a8\u7f50\u53ef\u4ee5\u5bb9\u7eb316\u6876\u7684\u5355\u4e00\u6db2\u4f53.\u8fd9\u4e9b\u50a8\u7f50\u53ef\u4ee5\u5347\u7ea7,\u8fd9\u6837\u5c31\u80fd\u5bb9\u7eb3\u6700\u591a64\u6876\u6db2\u4f53\u4e86. \u4f60\u8fd8\u53ef\u4ee5\u5806\u53e0\u5b83\u4eec\u4ee5\u63d0\u9ad8\u50a8\u91cf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAVA==",
                    "tooltip": "<strong>\u6211\u8be5\u600e\u4e48\u5b58\u50a8\u8fd9\u4e48\u591a\u6d41\u4f53?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6e05\u6670\u7684\u89c6\u91ce"
                },
                {
                    "name": "\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/67.png",
                    "x": 576.0,
                    "y": 456.0,
                    "data": "\u4f60\u5e94\u8be5\u8bb0\u4f4f\u5982\u4f55\u5236\u4f5c\u5bfc\u7ebf\u548c\u7ebf\u7f06,\u5b83\u4eec\u662f\u5236\u9020\u673a\u5668\u6700\u57fa\u7840\u7684\u4e24\u79cd\u6750\u6599.\u4e00\u822c\u6765\u8bf4,\u4f60\u53ea\u9700\u7528\u526a\u7ebf\u94b3\u5c06\u91d1\u5c5e\u677f\u526a\u6210\u5bfc\u7ebf\u5c31\u884c\u4e86.\u8fd9\u79cd\u65b9\u6cd5\u6548\u7387\u4e0d\u9ad8,\u4f46\u4ee5\u540e\u4f1a\u6709\u66f4\u597d\u7684\u529e\u6cd5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAQw==",
                    "tooltip": "<strong>\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7edd\u7f18\u7ebf\u7f06"
                },
                {
                    "name": "\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/493.png",
                    "x": 456.0,
                    "y": 72.0,
                    "data": "\u5c0f\u578b\u9f7f\u8f6e\u9700\u8981\u7528\u526a\u7ebf\u94b3\u5236\u9020,\u6240\u4ee5\u8ba9\u6211\u4eec\u5236\u4f5c\u4e00\u4e2a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB7Q==",
                    "tooltip": "<strong>\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u5408\u91d1"
                },
                {
                    "name": "\u7edd\u7f18\u7ebf\u7f06",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/69.png",
                    "x": 696.0,
                    "y": 456.0,
                    "data": "\u4f7f\u7528\u6ca1\u6709\u7edd\u7f18\u7684\u5bfc\u7ebf\u4f3c\u4e4e\u662f\u4e00\u4e2a\u574f\u4e3b\u610f.\u73b0\u5728\u4f60\u6709\u4e00\u4e2a\u63d0\u53d6\u673a,\u53ef\u4ee5\u4ece\u7c98\u6027\u6811\u8102\u63d0\u53d6\u751f\u6a61\u80f6,\u8fd8\u6709\u4e00\u4e2a\u5408\u91d1\u7089,\u53ef\u4ee5\u7528\u786b\u5bf9\u5176\u8fdb\u884c\u6df1\u52a0\u5de5.\u4f60\u5e94\u8be5\u5408\u6210\u4e00\u4e9b\u6a61\u80f6\u6761.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAARQ==",
                    "tooltip": "<strong>\u7edd\u7f18\u7ebf\u7f06</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5982\u4f55\u5236\u4f5c\u6a61\u80f6"
                },
                {
                    "name": "\u94c1\u8d28\u5f29\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1156.png",
                    "x": 420.0,
                    "y": 144.0,
                    "data": "\u5149\u6709\u5f29\u8fd8\u4e0d\u591f,\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e9b\u5f39\u836f.\u8ba9\u6211\u4eec\u6765\u5236\u4f5c\u4e00\u4e9b\u6728\u8d28\u5f29\u7bad.\u73b0\u5728\u4f60\u53ef\u4ee5\u7528\u51b6\u70bc\u7089\u7194\u70bc\u94c1\u3001\u8010\u9178\u94dd\u6216\u8005\u94a2\u88c5\u4e0a\u4f60\u7684\u7bad\u5934.%n\u66f4\u9ad8\u9636\u7684\u5f29\u7bad\u548c\u7bad\u5934\u5236\u9020\u9700\u8981\u7528\u5230\u6d41\u4f53\u56fa\u5316\u5668,\u5c06\u4f60\u60f3\u8981\u7528\u7684\u91d1\u5c5e\u6cf5\u5165\u6d41\u4f53\u56fa\u5316\u5668\u5427.%n%n[warn]\u5347\u7ea7[/warn]:%n[note]\u4e0b\u754c(\u8d5b\u7279\u65af)\u77f3\u82f1-\u63d0\u9ad8\u4f24\u5bb3%n\u82d4\u85d3\u7403-\u81ea\u6211\u4fee\u590d(\u5728\u9b54\u5bfc\u624b\u518cGTNH\u680f\u89e3\u9501)[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEhA==",
                    "tooltip": "<strong>\u94c1\u8d28\u5f29\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6728\u5f29"
                },
                {
                    "name": "\u6728\u5f29",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1151.png",
                    "x": 384.0,
                    "y": 144.0,
                    "data": "\u73b0\u5728\u4f60\u53ef\u4ee5\u5236\u4f5c\u66f4\u597d\u7684\u8fdc\u7a0b\u6b66\u5668\u4e86. \u4f7f\u7528\u6728\u5236\u7684\u5f29\u8eab\u548c\u5f29\u81c2,\u5e76\u4f7f\u7528\u9ed1\u66dc\u77f3\u575a\u97e7\u7ed1\u5b9a\u7ed3(\u8010\u4e45III)\u6765\u8ba9\u5f29\u66f4\u52a0\u575a\u56fa. \u5f29\u5f26\u7528\u7528\u666e\u901a\u7684\u6750\u6599\u5236\u4f5c\u5c31\u53ef\u4ee5.%n%n\u5728\u4f60\u7684\u5de5\u5177\u88c5\u914d\u53f0\u4e0a\u5c06\u8fd9\u4e9b\u90e8\u4ef6\u7ec4\u88c5\u8d77\u6765.%n%n[warn]\u5347\u7ea7:[/warn]%n[note]\u7ea2\u77f3-\u62c9\u5f13\u901f\u5ea6%n\u9752\u91d1\u77f3-\u62a2\u593a%n\u82d4\u85d3\u7403-\u81ea\u6211\u4fee\u590d(\u8fd9\u4e2a\u5728NEI\u4e2d\u4e0d\u4f1a\u663e\u793a\u5408\u6210\u8868,\u9664\u975e\u4f60\u89e3\u9501\u4e86\u9b54\u5bfc\u624b\u518cGTNH\u680f\u7684\u76f8\u5e94\u7814\u7a76)[/note]%n%n\u6ce8\u610f:\u67d0\u4e9b\u602a\u7269\u9700\u8981\u4f7f\u7528\u7279\u5b9a\u5de5\u5177\u624d\u80fd\u4ea7\u751f\u4f24\u5bb3.\u5982\u679c\u4f60\u600e\u4e48\u6253\u5b83\u90fd\u4e0d\u6389\u8840,\u8d76\u7d27\u8dd1!!!\u7136\u540e\u627e\u51fa\u54ea\u79cd\u6b66\u5668\u6700\u9002\u5408\u6740\u6b7b\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEfw==",
                    "tooltip": "<strong>\u6728\u5f29</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5177\u88c5\u914d\u53f0"
                },
                {
                    "name": "\u5de5\u4f5c\u53f02.0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/576.png",
                    "x": 648.0,
                    "y": 276.0,
                    "data": "\u4e00\u4e2a\u5f3a\u5316\u7684\u624b\u52a8\u5de5\u4f5c\u53f0,\u4f46\u662f\u8fd9\u4e2a\u5de5\u4f5c\u53f0\u53ef\u4ee5\u8bb0\u4f4f\u4e4b\u524d\u76849\u4e2a\u5408\u6210\u8868. \u5de6\u952e\u70b9\u51fb\u53f3\u4fa7\u7684\u5408\u6210\u8868\u53ef\u4ee5\u63d0\u53d6\u5408\u6210\u914d\u65b9. \u53f3\u952e\u70b9\u51fb\u53ef\u4ee5\u9501\u5b9a\u5408\u6210\u8868.%n%n\u5408\u6210\u6240\u4f7f\u7528\u7684\u7269\u54c1\u53ef\u4ee5\u653e\u7f6e\u5230GUI\u4e0b\u65b9\u7684\u7269\u54c1\u7f13\u5b58\u533a\u5185. \u5de5\u4f5c\u53f0\u4e0a\u9762\u7684\u5236\u4f5c\u77e9\u9635\u4ec5\u4ec5\u662f\u89c6\u89c9\u6548\u679c,\u5e76\u6ca1\u6709\u5b9e\u9645\u7528\u9014.%n%n\u8fd9\u79cd\u6797\u4e1a\u5de5\u4f5c\u53f0\u975e\u5e38\u6709\u7528,\u53ef\u4ee5\u5927\u5927\u7b80\u5316\u5408\u6210\u5de5\u4f5c,\u5b83\u8fd8\u4f1a\u81ea\u52a8\u4f7f\u7528\u7f13\u5b58\u533a\u4e2d\u7684\u5de5\u5177\u53c2\u4e0e\u5408\u6210.%n%n\u7279\u522b\u7684:%n\u7528<\u4e00\u6876Y>\u5408\u6210<\u7269\u54c1X>\u65f6-\u5c06\u6240\u6709\u539f\u6599\u653e\u5165\u5de5\u4f5c\u53f0,\u9009\u62e9\u597d\u5408\u6210\u8868,Shift+\u5de6\u952e\u70b9\u51fb\u6210\u54c1\u5c31\u53ef\u4ee5\u5168\u90e8\u5408\u6210\u5b8c\u6bd5(\u8017\u5c3d\u5e93\u5b58\u5185\u539f\u6599)%n\u5408\u6210\u6f58\u9a6c\u65af\u7684\u6de1\u6c34-\u4e0e\u4e0a\u9762\u7c7b\u4f3c,\u4f46\u6ca1\u6709\u7b2c\u4e8c\u7269\u54c1%n\u5408\u6210\u7c98\u571f\u7816-\u6728\u6a21\u5177\u4f1a\u81ea\u52a8\u91cd\u590d\u4f7f\u7528%n\u5408\u6210\u4efb\u610f\u4f7f\u7528\u5de5\u5177\u7684\u7269\u54c1-\u5de5\u5177\u4e5f\u4f1a\u81ea\u52a8\u91cd\u590d\u4f7f\u7528\u5e76\u6d88\u8017\u8010\u4e45.%n%n[warn]\u8b66\u544a\uff1a\u5de5\u4f5c\u53f0\u88ab\u7834\u574f\u65f6,\u5b58\u50a8\u7684\u5408\u6210\u8868\u5c06\u4f1a\u4e22\u5931!\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5,\u8bf7\u7528\u624b\u63a8\u8f66\u642c\u52a8\u5b83.[/warn]%n%n[note]\u66f4\u591a\u6797\u4e1amod\u7684\u4efb\u52a1\u8bf7\u770b\u4e13\u95e8\u7684\u4efb\u52a1\u680f.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACQA==",
                    "tooltip": "<strong>\u5de5\u4f5c\u53f02.0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u73a9\u6797\u4e1aMOD"
                },
                {
                    "name": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/68.png",
                    "x": 456.0,
                    "y": 528.0,
                    "data": "\u84b8\u6c7d\u673a\u6709\u591f\u8822\u7684,\u5b83\u4eec\u53ea\u662f\u4e0d\u65ad\u91cd\u590d\u5730\u505a\u4e00\u4ef6\u4e8b\u60c5.\u5f53\u8fdb\u5165\u5230\u7535\u529b\u65f6\u4ee3,\u4f60\u4fbf\u51b3\u5b9a\u4e86\u8981\u8ba9\u673a\u5668\u6709\u66f4\u591a\u529f\u80fd,\u6bd4\u5982\u81ea\u52a8\u8f93\u51fa,\u4ee5\u8fdb\u884c\u4e00\u4e9b\u81ea\u52a8\u5316.\u4e3a\u6b64,\u4f60\u9700\u8981\u66f4\u591a\u7684\u7535\u5b50\u7535\u8def.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAARA==",
                    "tooltip": "<strong>\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u662f\u65f6\u5019\u641e\u4e9b\u903b\u8f91\u7535\u8def</br>\u7535\u8def\u57fa\u677f2</br>\u7535\u963b1"
                },
                {
                    "name": "\u4f60\u5988\u5988\u8bf4\u4f60\u5f97\u5347\u7ea7\u62bd\u5c49\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1988.png",
                    "x": 96.0,
                    "y": 444.0,
                    "data": "\u62bd\u5c49\u6709\u8bb8\u591a\u5347\u7ea7\u7b49\u7ea7.\u5236\u4f5c\u4e00\u4e9b\u94c1\u3001\u91d1\u7b49\u7ea7\u7684\u62bd\u5c49\u5347\u7ea7,\u6211\u5c06\u4f1a\u7ed9\u4f60\u4e00\u4e9b\u7279\u6b8a\u7528\u9014\u7684\u62bd\u5c49\u5347\u7ea7,\u5728\u4f60\u7684\u57fa\u5730\u5b9e\u9a8c\u5b9e\u9a8c\u8fd9\u4e9b\u7279\u6b8a\u5347\u7ea7\u5427.\u67e5\u770bNEI\u83b7\u77e5\u9ed1\u66dc\u77f3\u3001\u7eff\u5b9d\u77f3\u3001\u94bb\u77f3\u7b49\u66f4\u591a\u62bd\u5c49\u5347\u7ea7.%n%n[warn]\u60f3\u8981\u79fb\u9664\u5347\u7ea7,\u7a7a\u624bShift+\u53f3\u952e\u62bd\u5c49\u6253\u5f00\u5347\u7ea7GUI.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHxA==",
                    "tooltip": "<strong>\u4f60\u5988\u5988\u8bf4\u4f60\u5f97\u5347\u7ea7\u62bd\u5c49\u4e86</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5347\u7ea7\u62bd\u5c49"
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
                    "source": "\u4e66",
                    "target": "\u66f4\u597d\u7684\u5bfb\u627e\u7269\u54c1\u65b9\u5f0f"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u52a0\u901f\u690d\u7269\u751f\u957f\u901f\u5ea6"
                },
                {
                    "source": "\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f",
                    "target": "\u6e05\u6670\u7684\u89c6\u91ce"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u9ad8\u7ea7\u592a\u9633\u80fd\u9505\u7089"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u9ad8\u7ea7\u592a\u9633\u80fd\u9505\u7089"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b",
                    "target": "\u9ad8\u7ea7\u592a\u9633\u80fd\u9505\u7089"
                },
                {
                    "source": "\u54e6!\u95ea\u95ea\u53d1\u5149(\u4e0d\u662f\u767d\u91d1!)",
                    "target": "\u4e00\u4e2a\u9002\u5408\u505a\u56fd\u738b\u7684\u50bb\u74dc"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u8010\u9178\u94dd"
                },
                {
                    "source": "\u6211\u8be5\u600e\u4e48\u5b58\u50a8\u8fd9\u4e48\u591a\u6d41\u4f53?",
                    "target": "Java\u7684\u53e6\u4e00\u4e2a\u7528\u9014,\u5443,\u6211\u662f\u8bf4\u5ca9\u6d46(Lava)"
                },
                {
                    "source": "\u84b8\u6c7d\u66ff\u4ee3\u54c1",
                    "target": "Java\u7684\u53e6\u4e00\u4e2a\u7528\u9014,\u5443,\u6211\u662f\u8bf4\u5ca9\u6d46(Lava)"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "Java\u7684\u53e6\u4e00\u4e2a\u7528\u9014,\u5443,\u6211\u662f\u8bf4\u5ca9\u6d46(Lava)"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u5b8c\u5168\u4e0d\u540c\u7684\u5b58\u50a8"
                },
                {
                    "source": "\u66f4\u591a\u9ad8\u7ea7\u5408\u91d1",
                    "target": "\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u5408\u91d1"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u6876\u5347\u7ea7"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u6876\u5347\u7ea7"
                },
                {
                    "source": "\u6876\u5347\u7ea7",
                    "target": "\u6876\u5347\u7ea7 T2"
                },
                {
                    "source": "\u6876\u5347\u7ea7 T2",
                    "target": "\u6876\u5347\u7ea7 T3"
                },
                {
                    "source": "\u6876\u5347\u7ea7 T3",
                    "target": "\u6876\u5347\u7ea7 T4"
                },
                {
                    "source": "\u6876\u5347\u7ea7 T4",
                    "target": "\u6876\u5347\u7ea7 T5"
                },
                {
                    "source": "\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)",
                    "target": "\u57fa\u7840\u5236\u4f5c:\u673a\u5668\u5916\u58f3"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u57fa\u7840\u5236\u4f5c:\u673a\u5668\u5916\u58f3"
                },
                {
                    "source": "\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)",
                    "target": "\u57fa\u7840\u5236\u4f5c:\u9a6c\u8fbe"
                },
                {
                    "source": "\u7edd\u7f18\u7ebf\u7f06",
                    "target": "\u57fa\u7840\u5236\u4f5c:\u9a6c\u8fbe"
                },
                {
                    "source": "\u57fa\u7840\u5236\u4f5c:\u673a\u5668\u5916\u58f3",
                    "target": "\u57fa\u7840\u5236\u4f5c:\u8f6c\u5b50"
                },
                {
                    "source": "\u6211\u8be5\u600e\u4e48\u5b58\u50a8\u8fd9\u4e48\u591a\u6d41\u4f53?",
                    "target": "\u66f4\u597d\u7684\u6c34\u69fd...\u94c1\u50a8\u7f50"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u6bd4\u94c1\u66f4\u597d"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u7194\u70bc!"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!",
                    "target": "\u7194\u70bc!"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u4e66"
                },
                {
                    "source": "\u6f0f\u6597",
                    "target": "Bowl full of spaghetti(\u7897\u91cc\u5806\u6ee1\u4e86\u610f\u5927\u5229\u9762)"
                },
                {
                    "source": "\u662f\u65f6\u5019\u641e\u4e9b\u903b\u8f91\u7535\u8def",
                    "target": "\u7535\u8def\u57fa\u677f2"
                },
                {
                    "source": "\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f",
                    "target": "\u538b\u7f29\u6750\u6599"
                },
                {
                    "source": "\u5de5\u5177\u88c5\u914d\u53f0",
                    "target": "\u4e00\u6b21\u780d\u4e00\u4e2a\u539f\u6728\u5df2\u7ecf\u8fc7\u6c14\u4e86"
                },
                {
                    "source": "\u6e05\u6670\u7684\u89c6\u91ce",
                    "target": "\u63d0\u53d6\u539f\u6599"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u989d\u5916\u7684\u5f3a\u5316"
                },
                {
                    "source": "\u54e6!\u95ea\u95ea\u53d1\u5149(\u4e0d\u662f\u767d\u91d1!)",
                    "target": "\u989d\u5916\u7684\u5f3a\u5316"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u5de5\u5382\u7684\u94c1\u95e8"
                },
                {
                    "source": "\u4e0b\u754c",
                    "target": "\u71c3\u70e7\u7684\u7b28\u86cb"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u6253\u706b\u77f3"
                },
                {
                    "source": "\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)",
                    "target": "GT6\u578b\u5bfc\u7ebf\u548c\u7ebf\u7f06"
                },
                {
                    "source": "\u7c89\u788e\u673a v1.0!",
                    "target": "\u77f3\u818f"
                },
                {
                    "source": "\u4e00\u4e2a\u94c1\u7827...\u6700\u597d\u505a\u4e24\u4e2a!",
                    "target": "\u9524\u5b50\u65f6\u523b v2.0"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!",
                    "target": "\u6f0f\u6597"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u8fd9\u4e48\u591a\u4e1c\u897f\u5f80\u54ea\u653e\uff1f"
                },
                {
                    "source": "\u63d0\u53d6\u539f\u6599",
                    "target": "\u5982\u4f55\u5236\u4f5c\u6a61\u80f6"
                },
                {
                    "source": "\u4e0b\u754c",
                    "target": "\u5982\u4f55\u5236\u4f5c\u6a61\u80f6"
                },
                {
                    "source": "\u5de5\u5382\u7684\u94c1\u95e8",
                    "target": "\u5982\u4f55\u6253\u5f00\u94c1\u95e8?"
                },
                {
                    "source": "\u6e05\u6670\u7684\u89c6\u91ce",
                    "target": "\u6211\u4e0d\u6015\u6ca1\u9b3c!"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u6211\u77e5\u9053\u4ed6\u7684\u540d\u5b57!"
                },
                {
                    "source": "\u6a61\u80f6\u72471",
                    "target": "\u6211\u77e5\u9053\u4ed6\u7684\u540d\u5b57!"
                },
                {
                    "source": "\u6a61\u80f6\u72471",
                    "target": "\u8fd9\u662f\u4e00\u9879\u80ae\u810f\u7684\u5de5\u4f5c,\u4f46\u4f60\u5f97\u53bb\u5e72"
                },
                {
                    "source": "\u4fee\u7406\u4f60\u7684\u9632\u5316\u670d",
                    "target": "\u96c5\u514b\u00b7\u5e93\u65af\u6258"
                },
                {
                    "source": "\u5347\u7ea7\u62bd\u5c49",
                    "target": "\u4f60\u7684\u5fc3\u7075\u4e4b\u5319"
                },
                {
                    "source": "\u7c89\u788e\u673a v1.0!",
                    "target": "\u9752\u91d1\u5ca9\u3001\u9752\u91d1\u77f3\u3001\u65b9\u7eb3\u77f3\u3001\u65b9\u89e3\u77f3"
                },
                {
                    "source": "\u9752\u91d1\u5ca9\u3001\u9752\u91d1\u77f3\u3001\u65b9\u7eb3\u77f3\u3001\u65b9\u89e3\u77f3",
                    "target": "\u9752\u91d1\u77f3\u4ee3\u8868\u7684\u662f\u5e78\u8fd0\uff1f"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u70b9\u71c3\u5236\u70ad\u4e4b\u8def"
                },
                {
                    "source": "\u6253\u706b\u77f3",
                    "target": "\u70b9\u71c3\u5236\u70ad\u4e4b\u8def"
                },
                {
                    "source": "\u4e0b\u754c",
                    "target": "\u8def\u897f\u6cd5(\u5815\u843d\u5929\u4f7f)\u7684\u5c0f\u5e2e\u624b"
                },
                {
                    "source": "\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f",
                    "target": "\u7c89\u788e\u673a v1.0!"
                },
                {
                    "source": "\u505a\u4e9b\u66f4\u597d\u7684\u5de5\u5177",
                    "target": "\u7c89\u788e\u673a v1.0!"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u5236\u4f5c\u6e05\u5355,\u53cd\u590d\u68c0\u67e5"
                },
                {
                    "source": "\u5de5\u5177\u88c5\u914d\u53f0",
                    "target": "\u6162\u6162\u6316\u571f\u5df2\u7ecf\u8fc7\u6c14\u4e86"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u94f8\u6a21\u3001\u6a21\u5177\u3001\u94f8\u6a21"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!",
                    "target": "\u66f4\u591a\u9ad8\u7ea7\u5408\u91d1"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u79fb\u52a8\u4f60\u7684\u50a8\u7f50\u3001\u7bb1\u5b50\u548c\u6876"
                },
                {
                    "source": "\u7edd\u7f18\u7ebf\u7f06",
                    "target": "\u79fb\u52a8\u4f60\u7684\u50a8\u7f50\u3001\u7bb1\u5b50\u548c\u6876"
                },
                {
                    "source": "\u63d0\u53d6\u539f\u6599",
                    "target": "\u6ce5\u5df4,\u4e5f\u80fd\u7528\u6765\u7f8e\u5bb9"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u591a\u65b9\u5757\u9769\u547d"
                },
                {
                    "source": "\u4e0b\u754c",
                    "target": "\u77f3\u82f1\u80fd\u8ba9\u6b66\u5668\u53d8\u5f97\u950b\u5229!"
                },
                {
                    "source": "\u4e0b\u754c",
                    "target": "\u65b0\u7684\u83b7\u5f97\u8424\u77f3\u7684\u6e20\u9053"
                },
                {
                    "source": "\u5982\u4f55\u5236\u4f5c\u6a61\u80f6",
                    "target": "\u4e0b\u754c\u4e4b\u6811\u771f\u68d2"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u4e00\u4e2a\u94c1\u7827...\u6700\u597d\u505a\u4e24\u4e2a!"
                },
                {
                    "source": "\u5de5\u5177\u88c5\u914d\u53f0",
                    "target": "\u4e00\u683c\u4e00\u683c\u6316\u77ff\u5df2\u7ecf\u8fc7\u6c14\u4e86"
                },
                {
                    "source": "\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f",
                    "target": "\u54e6!\u95ea\u95ea\u53d1\u5149(\u4e0d\u662f\u767d\u91d1!)"
                },
                {
                    "source": "\u6a61\u80f6\u72471",
                    "target": "\u4ec0\u4e48\uff1f\u6c61\u67d3!"
                },
                {
                    "source": "\u94f8\u6a21\u3001\u6a21\u5177\u3001\u94f8\u6a21",
                    "target": "\u62bd\u6c34"
                },
                {
                    "source": "\u5347\u7ea7!\u5347\u7ea7!\u5347\u7ea7!",
                    "target": "\u5f3a\u5316X\uff1f\u7262\u4e0d\u53ef\u7834!"
                },
                {
                    "source": "\u4ec0\u4e48\uff1f\u6c61\u67d3!",
                    "target": "\u4fee\u7406\u4f60\u7684\u9632\u5316\u670d"
                },
                {
                    "source": "\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)",
                    "target": "\u7535\u963b1"
                },
                {
                    "source": "\u7edd\u7f18\u7ebf\u7f06",
                    "target": "\u6a61\u80f6\u72471"
                },
                {
                    "source": "\u7edd\u7f18\u7ebf\u7f06",
                    "target": "\u6a61\u80f6\u8f6f\u9524"
                },
                {
                    "source": "\u66f4\u591a\u84b8\u6c7d!",
                    "target": "\u5b89\u5168\u7b2c\u4e00"
                },
                {
                    "source": "\u7edd\u7f18\u7ebf\u7f06",
                    "target": "\u53f2\u83b1\u59c6\u7a7a\u5c9b\u4e4b\u65c5"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def",
                    "target": "\u66f4\u591a\u84b8\u6c7d!"
                },
                {
                    "source": "\u57fa\u7840\u5236\u4f5c:\u9a6c\u8fbe",
                    "target": "\u66f4\u591a\u84b8\u6c7d!"
                },
                {
                    "source": "\u57fa\u7840\u5236\u4f5c:\u8f6c\u5b50",
                    "target": "\u66f4\u591a\u84b8\u6c7d!"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!",
                    "target": "\u84b8\u6c7d\u66ff\u4ee3\u54c1"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u94a2\u7bb1\u5b50?"
                },
                {
                    "source": "\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248",
                    "target": "\u9a6f\u670d\u8c79\u732b\u624d\u80fd\u4ea4\u670b\u53cb"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u51b7\u9177\u7684\u5bb6\u4f19"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "GT\u50a8\u7f50,ULV\u7248"
                },
                {
                    "source": "\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248",
                    "target": "\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u94c1\u5bb6\u4f19"
                },
                {
                    "source": "\u6253\u706b\u77f3",
                    "target": "\u4e0b\u754c"
                },
                {
                    "source": "\u4e66",
                    "target": "The one book to rule them all"
                },
                {
                    "source": "\u67d4\u8f6f\u7684\u76ae\u9769",
                    "target": "The one book to rule them all"
                },
                {
                    "source": "\u6e05\u6670\u7684\u89c6\u91ce",
                    "target": "\u592a\u9633\u4e4b\u529b"
                },
                {
                    "source": "\u84b8\u6c7d\u66ff\u4ee3\u54c1",
                    "target": "\u592a\u9633\u4e4b\u529b"
                },
                {
                    "source": "\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)",
                    "target": "\u662f\u65f6\u5019\u641e\u4e9b\u903b\u8f91\u7535\u8def"
                },
                {
                    "source": "\u94f8\u6a21\u3001\u6a21\u5177\u3001\u94f8\u6a21",
                    "target": "\u662f\u65f6\u5019\u641e\u4e9b\u903b\u8f91\u7535\u8def"
                },
                {
                    "source": "\u8010\u9178\u94dd",
                    "target": "\u5de5\u5177\u88c5\u914d\u53f0"
                },
                {
                    "source": "\u9524\u5b50\u65f6\u523b v2.0",
                    "target": "\u5783\u573e\u592a\u591a??"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u5347\u7ea7:\u538b\u7f29\u673a"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u5347\u7ea7:\u538b\u7f29\u673a"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u5347\u7ea7:\u538b\u7f29\u673a"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u5347\u7ea7:\u7194\u7089"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u5347\u7ea7:\u7194\u7089"
                },
                {
                    "source": "\u7528\u84b8\u6c7d\u70f9\u996a",
                    "target": "\u5347\u7ea7:\u7194\u7089"
                },
                {
                    "source": "\u7c89\u788e\u673a v1.0!",
                    "target": "\u5347\u7ea7:\u7814\u78e8\u673a"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u5347\u7ea7:\u7814\u78e8\u673a"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u5347\u7ea7:\u7814\u78e8\u673a"
                },
                {
                    "source": "\u84b8\u6c7d\u66ff\u4ee3\u54c1",
                    "target": "\u5347\u7ea7:\u71c3\u7164\u9505\u7089"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u5347\u7ea7:\u71c3\u7164\u9505\u7089"
                },
                {
                    "source": "\u63d0\u53d6\u539f\u6599",
                    "target": "\u5347\u7ea7:\u63d0\u53d6\u673a"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u5347\u7ea7:\u63d0\u53d6\u673a"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u5347\u7ea7:\u63d0\u53d6\u673a"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u5347\u7ea7:\u953b\u9020\u9524"
                },
                {
                    "source": "\u9524\u5b50\u65f6\u523b v2.0",
                    "target": "\u5347\u7ea7:\u953b\u9020\u9524"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u5347\u7ea7:\u953b\u9020\u9524"
                },
                {
                    "source": "\u6bd4\u94c1\u66f4\u597d",
                    "target": "\u5347\u7ea7:\u9ad8\u901f\u5408\u91d1"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u5347\u7ea7:\u9ad8\u901f\u5408\u91d1"
                },
                {
                    "source": "\u66f4\u591a\u9ad8\u7ea7\u5408\u91d1",
                    "target": "\u5347\u7ea7:\u9ad8\u901f\u5408\u91d1"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u5347\u7ea7!\u5347\u7ea7!\u5347\u7ea7!"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u5347\u7ea7\u62bd\u5c49"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!",
                    "target": "\u7528\u84b8\u6c7d\u70f9\u996a"
                },
                {
                    "source": "\u4e66",
                    "target": "\u6b22\u8fce\u6765\u73a9\u6797\u4e1aMOD"
                },
                {
                    "source": "\u7ee7\u7eed\u524d\u8fdb",
                    "target": "\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!"
                },
                {
                    "source": "\u8fd9\u4e48\u591a\u4e1c\u897f\u5f80\u54ea\u653e\uff1f",
                    "target": "\u54ea\u4e2a\u5de5\u7a0b\u5e08\u4e0d\u60f3\u8981\u4e00\u4e2a\u4fbf\u643a\u7684\u5de5\u4f5c\u53f0?"
                },
                {
                    "source": "\u6e05\u6670\u7684\u89c6\u91ce",
                    "target": "\u6211\u8be5\u600e\u4e48\u5b58\u50a8\u8fd9\u4e48\u591a\u6d41\u4f53?"
                },
                {
                    "source": "\u7edd\u7f18\u7ebf\u7f06",
                    "target": "\u5bfc\u7ebf,\u5947\u602a?(Wired,weird?!)"
                },
                {
                    "source": "\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u5408\u91d1",
                    "target": "\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248"
                },
                {
                    "source": "\u5982\u4f55\u5236\u4f5c\u6a61\u80f6",
                    "target": "\u7edd\u7f18\u7ebf\u7f06"
                },
                {
                    "source": "\u6728\u5f29",
                    "target": "\u94c1\u8d28\u5f29\u7bad"
                },
                {
                    "source": "\u5de5\u5177\u88c5\u914d\u53f0",
                    "target": "\u6728\u5f29"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u73a9\u6797\u4e1aMOD",
                    "target": "\u5de5\u4f5c\u53f02.0"
                },
                {
                    "source": "\u662f\u65f6\u5019\u641e\u4e9b\u903b\u8f91\u7535\u8def",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def"
                },
                {
                    "source": "\u7535\u8def\u57fa\u677f2",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def"
                },
                {
                    "source": "\u7535\u963b1",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def"
                },
                {
                    "source": "\u5347\u7ea7\u62bd\u5c49",
                    "target": "\u4f60\u5988\u5988\u8bf4\u4f60\u5f97\u5347\u7ea7\u62bd\u5c49\u4e86"
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
    