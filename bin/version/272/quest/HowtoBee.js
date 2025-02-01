
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
                    "name": "\u53ea\u6709\u6700\u597d: \u6811\u6728\u57f9\u80b2",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2748.png",
                    "x": 744.0,
                    "y": 276.0,
                    "data": "\u4e3a\u90a3\u4e9b\u559c\u6b22\u6797\u4e1a\u6811\u6728\u7684\u4eba\u51c6\u5907.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKvA==",
                    "title": "\u53ea\u6709\u6700\u597d: \u6811\u6728\u57f9\u80b2",
                    "tooltip": "<strong>\u53ea\u6709\u6700\u597d: \u6811\u6728\u57f9\u80b2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u517b\u8702\u5458\u5957\u88c5",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/996.png",
                    "x": 252.0,
                    "y": 12.0,
                    "data": "\u5982\u679c\u4f60\u5df2\u7ecf\u6536\u96c6\u4e8624\u5757\u4e1d\u7ef8,\u90a3\u4e48\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e00\u5957\u5b8c\u6574\u7684\u517b\u8702\u5458\u5957\u88c5\u6765\u4fdd\u62a4\u4f60\u81ea\u5df1\u514d\u906d\u871c\u8702\u7684\u8707\u4f24\u6216\u662f\u522b\u7684\u4ec0\u4e48\u8d1f\u9762\u6548\u679c. \u4f60\u8fd8\u53ef\u4ee5\u7528\u8fd9\u5957\u88c5\u5907\u6765\u7ed9\u7384\u94a2\u88c5\u5907\u5347\u7ea7\u6765\u8ba9\u5b83\u4eec\u4e5f\u5177\u6709\u540c\u6837\u7684\u6548\u679c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD5A==",
                    "title": "\u517b\u8702\u5458\u5957\u88c5",
                    "tooltip": "<strong>\u517b\u8702\u5458\u5957\u88c5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6728\u5de5\u673a</br>\u4e1d\u7ef8"
                },
                {
                    "name": "\u4e00\u5929\u4e00\u523a\u6fc0,\u533b\u751f\u627e\u4e0a\u95e8",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2093.png",
                    "x": 108.0,
                    "y": 384.0,
                    "data": "\u7535\u523a\u6fc0\u5668,\u4e00\u5757\u80fd\u52a0\u88c54\u4e2a\u7535\u5b50\u7ba1\u7684\u7535\u5b50\u677f,\u63d0\u4f9b\u591a\u79cd\u529f\u80fd.  \u8868\u4e2d\u6240\u6709\u6570\u636e\u5747\u4e3a\u767e\u5206\u7387</br></br>\u94c1\u7535\u5b50\u7ba1-\u4ea7\u91cf:150(\u6700\u9ad8500)</br>\u94bb\u77f3\u7535\u5b50\u7ba1-\u4ea7\u91cf:250(\u6700\u9ad81000)</br>\u78f7\u7070\u77f3\u7535\u5b50\u7ba1-\u6388\u7c89:150(\u6700\u9ad8500)</br>\u9ed1\u66dc\u77f3\u7535\u5b50\u7ba1-\u5bff\u547d:80(\u6700\u5c0f20)</br>\u9752\u91d1\u77f3\u7535\u5b50\u7ba1-\u5bff\u547d:150(\u6700\u9ad8500)</br>\u70c8\u7130\u7535\u5b50\u7ba1-\u6a21\u62df\u5730\u72f1\u822c(\u4e0b\u754c)\u7684\u6e29\u5ea6</br>\u91d1\u7535\u5b50\u7ba1-\u7a81\u53d8:150(\u6700\u9ad8500)</br>\u9521\u7535\u5b50\u7ba1-\u8303\u56f4:40(\u6700\u5c0f10)\u3001\u4ea7\u91cf:90(\u6700\u5c0f50)</br>\u9752\u94dc\u7535\u5b50\u7ba1-\u8303\u56f4:150(\u6700\u9ad8500)</br></br>\u8fd9\u4e9b\u523a\u6fc0\u4e5f\u4f1a\u5bfc\u81f4\u57fa\u56e0\u8870\u9000\u51e0\u7387\u63d0\u9ad850\uff05.\u800c\u8fd9\u4f1a\u5f71\u54cd\u5351\u8d31\u79cd\u7684\u6b7b\u4ea1\u65f6\u95f4,\u6240\u4ee5\u5982\u679c\u4f60\u7528\u7684\u662f\u59cb\u7956\u79cd,\u90a3\u5c31\u4e0d\u7528\u62c5\u5fc3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAILQ==",
                    "title": "\u4e00\u5929\u4e00\u523a\u6fc0,\u533b\u751f\u627e\u4e0a\u95e8",
                    "tooltip": "<strong>\u4e00\u5929\u4e00\u523a\u6fc0,\u533b\u751f\u627e\u4e0a\u95e8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8702\u7bb1\u7ec4"
                },
                {
                    "name": "\u517b\u8702\u5458\u7bb1\u5b50",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1111.png",
                    "x": 300.0,
                    "y": 204.0,
                    "data": "\u53ea\u80fd\u5b58\u50a8\u871c\u8702\u7684\u7bb1\u5b50. \u4e0d\u8fc7\u5b83\u53ef\u4ee5\u5b58\u50a8\u591a\u8fbe125\u79cd\u4e0d\u540c\u7684\u871c\u8702!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEVw==",
                    "title": "\u517b\u8702\u5458\u7bb1\u5b50",
                    "tooltip": "<strong>\u517b\u8702\u5458\u7bb1\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed"
                },
                {
                    "name": "\u5de7\u514b\u529b\u6846\u67b6",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1514.png",
                    "x": 84.0,
                    "y": 156.0,
                    "data": "\u5de7\u514b\u529b\u6846\u67b6\u53ef\u7528\u4e8e\u589e\u52a0\u4ea7\u91cf,\u4f46\u4f1a\u7f29\u77ed\u871c\u8702\u5bff\u547d. \u7cbe\u660e\u7684\u517b\u8702\u5458\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u52a0\u901f\u7a81\u53d8,\u5728\u8702\u7bb1\u4e2d\u4f7f\u75283\u4e2a\u8fd9\u79cd\u6846\u67b6\u5373\u53ef\u5feb\u901f\u66f4\u65b0\u8fed\u4ee3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF6g==",
                    "title": "\u5de7\u514b\u529b\u6846\u67b6",
                    "tooltip": "<strong>\u5de7\u514b\u529b\u6846\u67b6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d78\u6e0d\u6846\u67b62"
                },
                {
                    "name": "\u5c06\u96c4\u5cf0\u653e\u5165\u7f50\u4e2d\u6447\u5300",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1512.png",
                    "x": 204.0,
                    "y": 60.0,
                    "data": "\u5982\u679c\u4f60\u57f9\u80b2\u7684\u871c\u8702\u53ef\u4ee5\u7ed9\u4f60\u4e00\u4e9b\u6b63\u9762buff\u7684\u8bdd,\u90a3\u4e0e\u5176\u628a\u591a\u4f59\u7684\u96c4\u5cf0\u90fd\u4e22\u4e86,\u8fd8\u4e0d\u5982\u628a\u5b83\u4eec\u653e\u5728\u871c\u8702\u6536\u96c6\u8005\u7684\u7f50\u5b50\u4e2d,\u4ee5\u4fbf\u5728\u57fa\u5730\u7684\u4efb\u4f55\u5730\u65b9\u83b7\u5f97\u8fd9\u4e9b\u6548\u679c</br></br>\u751f\u547d\u6062\u590d\uff1f\u83b7\u5f97\u7ecf\u9a8c\uff1f\u8fd8\u662f\u4e2d\u6bd2\uff1f</br></br>\u871c\u8702\u6536\u96c6\u8005\u7684\u7f50\u5b50\u751a\u81f3\u53ef\u4ee5\u8fde\u63a5\u5230\u7ba1\u9053\u6216\u4f20\u9001\u5e26\u6765\u81ea\u52a8\u4f20\u8f93,\u8fd9\u6837\u96c4\u5cf0\u7ed9\u4f60\u7684\u6548\u679c\u5c31\u53ef\u4ee5\u6301\u7eed\u5f88\u957f\u65f6\u95f4.</br></br>[note]\u6ce8\uff1a\u5e1d\u7687\u8702\u7684\u666e\u5929\u540c\u5e86\u6548\u679c\u5728\u63a8\u8fdb\u8840\u9b54\u6cd5\u65f6\u5341\u5206\u6709\u6548.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF6A==",
                    "title": "\u5c06\u96c4\u5cf0\u653e\u5165\u7f50\u4e2d\u6447\u5300",
                    "tooltip": "<strong>\u5c06\u96c4\u5cf0\u653e\u5165\u7f50\u4e2d\u6447\u5300</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898"
                },
                {
                    "name": "\u6052\u6e29\u7bb1",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2088.png",
                    "x": 300.0,
                    "y": 432.0,
                    "data": "\u8fd9\u662f\u4e00\u53f0\u5408\u6210\u673a\u5668,\u53ef\u5c06\u7269\u54c1\u548c\u6db2\u4f53\u52a0\u70ed\u5230\u80fd\u591f\u4fc3\u8fdb\u7ec6\u83cc\u751f\u957f\u7684\u6e29\u5ea6.  \u57f9\u517b\u7684\u7b2c\u4e00\u6b65\u5c31\u662f\u5236\u4f5c\u57f9\u517b\u57fa\u6db2\u4f53(\u6c34+\u57f9\u517b\u57fa).\u968f\u540e\u5c06\u5176\u4e0e\u5c0f\u9ea6\u4e00\u8d77\u57f9\u517b\u4ee5\u4ea7\u751f\u7ec6\u83cc.\u8fd9\u79cd\u7ec6\u83cc\u6db2\u4f53\u53ef\u4ee5\u4e0e\u7cd6\u4e00\u8d77\u8fdb\u884c\u7b2c\u4e09\u6b21\u57f9\u517b,\u4ea7\u751f\u9176.\u9176\u662f\u5176\u4ed6\u673a\u5668\u4e5f\u8981\u7528\u5230\u7684\u91cd\u8981\u7269\u8d28.  \u56e0\u6b64,\u5236\u9020\u9176\u7684\u6700\u4f73\u65b9\u6cd5\u662f\u7528\u4e09\u4e2a\u6052\u6e29\u7bb1\u6784\u9020\u4e00\u4e2a\u6d41\u6c34\u7ebf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIKA==",
                    "title": "\u6052\u6e29\u7bb1",
                    "tooltip": "<strong>\u6052\u6e29\u7bb1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!"
                },
                {
                    "name": "\u4e1d\u7ef8",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/995.png",
                    "x": 204.0,
                    "y": 12.0,
                    "data": "\u79bb\u5fc3\u4e1d\u6ed1\u8702\u80f6,\u670960\uff05\u7684\u51e0\u7387\u5f97\u5230\u4e1d\u7f15.\u7528\u6797\u4e1a\u6728\u5de5\u673a\u6216\u8005\u683c\u96f7\u7684\u7ec4\u88c5\u673a\u5c069\u4e2a\u4e1d\u7f15\u5236\u6210\u4e1d\u7ef8.</br></br>\u8fd9\u79cd\u7f16\u7ec7\u7269\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u517b\u8702\u5458\u5957\u88c5\u6216\u8005\u5c06\u4f60\u7684\u6797\u4e1a\u80cc\u5305\u5347\u7ea7\u523045\u683c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD4w==",
                    "title": "\u4e1d\u7ef8",
                    "tooltip": "<strong>\u4e1d\u7ef8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e1d\u6ed1\u8702\u7a9d</br>\u8f6c\u554a\u8f6c\u554a\u8f6c\u554a\u8f6c..."
                },
                {
                    "name": "\u82b1\u7c89\u6536\u96c6\u88c5\u5907",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7336878164390242998.png",
                    "x": 456.0,
                    "y": 264.0,
                    "data": "\u83b7\u53d6\u82b1\u7c89\u7684\u7b80\u5355\u65b9\u6cd5\u5c31\u662f\u53f3\u51fb\u6811\u53f6.\u7136\u800c\u82b1\u7c89\u6536\u96c6\u88c5\u5907\u662f\u4e00\u6b21\u6027\u4f7f\u7528\u7684,\u6240\u4ee5\u53ef\u4ee5\u591a\u5236\u4f5c\u4e00\u4e9b.",
                    "quest_id": "FLhv4l1HSSmaLiwukzMVSg==",
                    "title": "\u82b1\u7c89\u6536\u96c6\u88c5\u5907",
                    "tooltip": "<strong>\u82b1\u7c89\u6536\u96c6\u88c5\u5907</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u5236\u54c1"
                },
                {
                    "name": "\u53ea\u8981\u6700\u597d:\u7a74\u5c45\u6027",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/528.png",
                    "x": 696.0,
                    "y": 84.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81. \u62e5\u6709\u7a74\u5c45\u6027\u7684\u871c\u8702\u53ef\u4ee5\u5728\u88ab\u906e\u76d6\u4f4f\u7684\u8702\u7bb1\u4e2d\u5de5\u4f5c - \u66f4\u591a\u7684\u8702\u7bb1!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACEA==",
                    "title": "\u53ea\u8981\u6700\u597d:\u7a74\u5c45\u6027",
                    "tooltip": "<strong>\u53ea\u8981\u6700\u597d:\u7a74\u5c45\u6027</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/509.png",
                    "x": 600.0,
                    "y": 204.0,
                    "data": "\u4f7f\u7528\u8fd9\u53f0\u673a\u5668,\u4f60\u53ef\u4ee5\u4ece\u6837\u672c(\u8702\u871c\u3001\u6811\u82d7\u3001\u8774\u8776\u6216\u8005\u82b1\u6735)\u4e2d\u63d0\u53d6\u4e00\u4e2a\u968f\u673a\u7684\u6027\u72b6.\u6837\u672c\u5728\u88ab\u63d0\u53d6\u7684\u8fc7\u7a0b\u4e2d\u5c06\u88ab\u6467\u6bc1. \u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u4e00\u4e2a\u7a7a\u7684\u57fa\u56e0\u6837\u672c\u548c\u4e00\u4e2a\u57fa\u56e0\u836f\u76bf.</br></br>\u83b7\u5f97\u7684\u6837\u54c1\u662f\u968f\u673a\u7684,\u6240\u4ee5\u8bb0\u5f97\u56de\u6536\u90a3\u4e9b\u591a\u4f59\u7684\u57fa\u56e0\u6837\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB_Q==",
                    "title": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "tooltip": "<strong>\u57fa\u56e0\u91c7\u6837\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u5236\u54c1"
                },
                {
                    "name": "\u6846\u67b6",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1112.png",
                    "x": 108.0,
                    "y": 108.0,
                    "data": "\u672a\u5904\u7406\u6846\u67b6\u662f\u6700\u7b80\u5355\u7684\u6846\u67b6. \u4f60\u4e0d\u80fd\u5728\u7b80\u6613\u8702\u623f\u4f7f\u7528\u5b83\u4eec,\u53ea\u80fd\u7528\u4e8e\u8702\u7bb1\u6216\u8702\u7bb1\u7ec4. \u5b83\u4eec\u8fd8\u53ef\u7528\u4e8e\u5408\u6210\u8702\u7bb1.</br></br>\u5c06\u6846\u67b6\u5b89\u88c5\u5728\u8702\u7bb1\u4e2d,\u5b83\u4eec\u53ef\u4ee5\u63d0\u9ad8\u871c\u8702\u7684\u5404\u9879\u5c5e\u6027. \u6bcf\u4e2a\u672a\u5904\u7406\u6846\u67b6\u90fd\u5c06\u4f7f\u871c\u8702\u7684\u4ea7\u91cf\u7ffb\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEWA==",
                    "title": "\u6846\u67b6",
                    "tooltip": "<strong>\u6846\u67b6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u627e\u5230\u4e00\u4e9b\u871c\u8702"
                },
                {
                    "name": "\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2081.png",
                    "x": 300.0,
                    "y": 384.0,
                    "data": "Binnie\u7684\u57fa\u56e0\u5de5\u7a0b(Genetics)mod\u4f7f\u4f60\u80fd\u591f\u63d0\u53d6\u5e76\u6311\u9009\u871c\u8702\u3001\u6811\u548c\u82b1\u7684\u57fa\u56e0.\u4f46\u8fd9\u4e0d\u662f\u514d\u8d39\u7684!\u4f60\u9700\u8981\u4ed8\u51fa\u4e00\u5b9a\u7684\u4ee3\u4ef7.</br></br>\u76f4\u63a5\u7528GT\u7684EU\u7ed9\u8fd9\u4e9b\u673a\u5668\u4f9b\u7535\u4e0d\u662f\u597d\u7684\u9009\u62e9(\u4f1a\u9020\u6210\u5927\u91cf\u6d6a\u8d39),\u4f60\u5e94\u8be5\u7ed9EIO\u7684\u7535\u5bb9\u5e93\u63d0\u4f9b\u80fd\u91cf,\u7136\u540e\u518d\u7528\u7535\u5bb9\u5e93\u7ed9\u8fd9\u4e9b\u673a\u5668\u4f9b\u5e94RF\u80fd\u91cf. \u57fa\u56e0\u5de5\u7a0b\u7684\u673a\u5668\u65e0\u6cd5\u5728GT\u7684\u7535\u6d41\u5305\u7cfb\u7edf\u4e0b\u5f88\u597d\u5de5\u4f5c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIIQ==",
                    "title": "\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!",
                    "tooltip": "<strong>\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed"
                },
                {
                    "name": "\u5206\u6790\u4eea",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1954.png",
                    "x": 396.0,
                    "y": 384.0,
                    "data": "\u57fa\u56e0\u5de5\u7a0b\u7684\u5206\u6790\u4eea\u548c\u6797\u4e1a\u7684\u5206\u6790\u4eea\u529f\u80fd\u4e0a\u6ca1\u5565\u533a\u522b,\u663e\u793a\u871c\u8702\u3001\u6811\u3001\u8774\u8776\u548c\u82b1\u7684\u57fa\u56e0\u7ec4.\u5b83\u8fd8\u80fd\u7528\u4e8e\u63ed\u793aDNA\u5e8f\u5217\u4e0a\u7684\u57fa\u56e0.  \u4e0e\u6797\u4e1a\u5206\u6790\u4eea\u4e0d\u540c,\u8fd9\u53f0\u5206\u6790\u4eea\u9700\u8981\u80fd\u91cf(RF\u6216EU)\u548cDNA\u67d3\u6599,\u67d3\u8272\u67d3\u8272\u4f53\u5e76\u76f4\u63a5\u6d4b\u5b9a\u57fa\u56e0\u7ec4.\u5206\u6790\u4eea\u5355\u6b21\u8fd0\u884c\u9700\u898115\u79d2.</br></br>\u4efb\u52a1\u4e66\u5185\u5173\u4e8e\u8fd9\u51e0\u4e2a\u4efb\u52a1\u7684\u8d44\u6599\u6765\u81eaBinnie\u7684wiki\uff1a[url]https://binnie.mods.wiki/wiki/Tutorial/Genetics[/url]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHog==",
                    "title": "\u5206\u6790\u4eea",
                    "tooltip": "<strong>\u5206\u6790\u4eea</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u5206\u79bb\u5668"
                },
                {
                    "name": "\u6807\u5b9a\u6846\u67b6(\u751f\u4ea7\u6846\u67b6)",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1114.png",
                    "x": 156.0,
                    "y": 336.0,
                    "data": "\u6807\u5b9a\u6846\u67b6\u6bd4\u6d78\u6e0d\u6846\u67b6\u8fd8\u8981\u597d.</br>\u6bcf\u4e2a\u6807\u5b9a\u6846\u67b6\u53ef\u63d0\u9ad8\u4e00\u500d\u7684\u4ea7\u91cf.\u7ecf\u8fc7\u9a8c\u8bc1\u5728\u4e09\u79cd\u6797\u4e1a\u539f\u7248\u6846\u67b6\u4e2d(\u672a\u5904\u7406\u3001\u6d78\u6e0d\u548c\u6807\u5b9a)\u6807\u5b9a\u6846\u67b6\u662f\u6700\u7ecf\u4e45\u8010\u7528\u7684!</br></br>\u4f60\u53ef\u4ee5\u5236\u4f5c\u5b83\u4eec\u6216\u4ece\u6751\u6c11\u90a3\u91cc\u8d2d\u4e70.\u5982\u679c\u4f60\u627e\u4e0d\u5230\u517b\u8702\u5458\u6751\u6c11,\u8fd8\u6709\u51e0\u4e2a\u5176\u4ed6\u9009\u62e9.\u6cbb\u7597\u4e00\u4e2a\u50f5\u5c38\u6751\u6c11\u3001\u5728\u6751\u5e84\u4e2d\u6dfb\u52a0\u95e8\u6765\u8ba9\u6751\u6c11\u4eec\u81ea\u5df1\u589e\u52a0\u4eba\u53e3\u3001\u6216\u662f\u7528\u4e18\u6bd4\u7279\u7684\u5f13\u548c\u7bad...</br></br>\u9b54\u6cd5\u6846\u67b6\u76f8\u5173:</br>\u9b54\u6cd5\u871c\u8702\u7684\u6240\u6709\u6846\u67b6\u90fd\u4ee5\u9b54\u6cd5\u6846\u67b6\u4e3a\u6838\u5fc3.\u540c\u65f6\u9b54\u6cd5\u6846\u67b6\u672c\u8eab\u4e5f\u6709\u7279\u6b8a\u529f\u80fd-\u6253\u7834\u6700\u5927\u4ea7\u91cf\u63d0\u5347.\u666e\u901a\u6846\u67b6\u65e0\u6cd5\u8fbe\u523016\u500d\u4ee5\u4e0a\u7684\u4ea7\u91cf(4\u6846\u67b6),\u4f46\u6709\u4e86\u9b54\u6cd5\u6846\u67b6,\u8fd9\u4e2a\u6700\u5927\u503c\u53ef\u4ee5\u7ee7\u7eed\u63d0\u5347-\u4e0d\u8fc7\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f,\u8d85\u8fc716\u500d\u7684\u4ea7\u91cf\u4f1a\u8ba9\u4f60\u7684\u871c\u8702\u8d85\u8d1f\u8377\u5de5\u4f5c,\u6709\u4e00\u5b9a\u51e0\u7387\u9000\u5316\u6210\u5351\u8d31\u79cd.\u8fd9\u79cd\u9000\u5316\u53ef\u80fd\u53d1\u751f\u5728\u4efb\u4f55\u871c\u8702\u523b(bee-tick),\u4e0d\u6b62\u662f\u871c\u8702\u6b7b\u4ea1\u65f6.\u964d\u4f4e\u57fa\u56e0\u8870\u9000\u7684\u6846\u67b6\u53ef\u4ee5\u964d\u4f4e\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u7684\u51e0\u7387.</br></br>\u5f53\u7136,\u5177\u6709\u60a0\u957f\u7684\u5bff\u547d,\u9ad8\u4ea7\u7684\u57fa\u56e0,\u8702\u62e5\u800c\u81f3\u548c\u5de8\u91cf\u7684\u6846\u67b6,\u4f60\u53ef\u80fd\u8ba4\u4e3a\u8fd9\u662f\u503c\u5f97\u7684.</br></br>\u8bf7\u6ce8\u610f,\u666e\u901a\u4ea7\u7269\u7684\u751f\u4ea7\u4e0a\u9650\u4e3a200\uff05,\u800c\u7279\u6b8a\u4ea7\u7269\u7684\u751f\u4ea7\u4e0a\u9650\u4e3a100\uff05.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEWg==",
                    "title": "\u6807\u5b9a\u6846\u67b6(\u751f\u4ea7\u6846\u67b6)",
                    "tooltip": "<strong>\u6807\u5b9a\u6846\u67b6(\u751f\u4ea7\u6846\u67b6)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d78\u6e0d\u6846\u67b62"
                },
                {
                    "name": "\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2415.png",
                    "x": 108.0,
                    "y": 12.0,
                    "data": "\u4f60\u4e5f\u8bb8\u627e\u4e0d\u5230\u9002\u5408\u4f60\u7684\u519c\u4f5c\u7269\u6216\u871c\u8702\u7684\u6cbc\u6cfd\u6216\u70ed\u5e26\u68ee\u6797,\u4e5f\u6709\u53ef\u80fd\u662f\u79bb\u5f97\u592a\u8fdc\u5f88\u4e0d\u65b9\u4fbf,\u4f60\u7684\u8fd8\u53ef\u80fd\u4f4d\u4e8e\u8f83\u51b7\u7684\u6c14\u5019\u4e0b,\u4e0d\u5f97\u4e0d\u7ecf\u5e38\u9762\u5bf9\u72fc\u7fa4. \u522b\u6025\u7740\u6253\u5305\u6240\u6709\u4e1c\u897f,\u642c\u5230\u5176\u4ed6\u5730\u65b9,\u4f55\u4e0d\u8bd5\u8bd5\u6539\u53d8\u751f\u7269\u7fa4\u7cfb\u5462? \u5728\u8fd9\u4e2a\u6574\u5408\u5305\u4e2d\u6709\u51e0\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u505a\u5230:</br></br>\u4f7f\u7528\u5deb\u5e08\u5b9d\u5177(Witching-Gadgets)\u4e2d\u7684\u5965\u672f\u7fa4\u7cfb\u8f6c\u5316\u5668</br>-\u9700\u8981EV\u7535\u8def\u677f\u3001\u94a8\u94a2\u3001\u4e09\u9636\u706b\u7bad</br>-\u8fd8\u9700\u8981\u6ce8\u9b54\u3001\u865a\u7a7a\u91d1\u5c5e(\u8db3\u591f\u7684\u626d\u66f2)\u3001\u63d0\u4f9bCV\u7684\u5145\u80fd\u8282\u70b9\u3001\u5927\u91cf\u6e90\u8d28</br>-\u534a\u5f8416\u683c</br>-\u53ea\u80fd\u628a\u751f\u7269\u7fa4\u7cfb\u66f4\u6539\u4e3a\u51e0\u79cd\u7279\u5b9a\u200b\u200b\u539f\u7248\u6216\u795e\u79d8\u7684\u751f\u7269\u7fa4\u7cfb</br>-\u6709\u70b9\u6162</br></br>\u4f7f\u7528\u8840\u9b54\u6cd5(Blood-Magic)\u7684\u76d6\u4e9a\u4eea\u5f0f(Ritual-of-Gaia's-Transformation)</br>-\u9700\u8981\u865a\u7a7a\u91d1\u5c5e\u3001\u6ce8\u9b54\u3001\u94a8\u94a2</br>-\u9700\u8981\u6df1\u5165\u7814\u7a76\u8840\u9b54\u6cd5(\u4ee5\u53ca\u968f\u4e4b\u800c\u6765\u7684\u626d\u66f2)</br>-\u9700\u89811,000,000-LP\u3001\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0\u30014\u9636\u796d\u575b\u548c[\u89c9\u9192]\u6fc0\u6d3b\u6c34\u6676</br>-\u534a\u5f8410\u683c,\u53ef\u7528\u8840\u77f3\u7816(\u4efb\u610f\u7c7b\u578b)\u7cbe\u786e\u6307\u5b9a</br>-\u65e0\u6cd5\u6307\u5b9a\u751f\u7269\u7fa4\u7cfb,\u4f60\u53ea\u80fd\u57280.0\u52302.0\u7684\u8303\u56f4\u5185\u4fee\u6539\u6e29\u5ea6/\u6e7f\u5ea6,\u7136\u540e\u542c\u5929\u7531\u547d</br>-\u7531\u4e8e\u8303\u56f4\u6709\u9650\u4ee5\u53ca\u8303\u56f4\u91cd\u53e0\u7b49\u95ee\u9898,\u67d0\u4e9b\u751f\u7269\u7fa4\u7cfb\u65e0\u6cd5\u51fa\u73b0</br>-\u901a\u8fc7\u4e3b\u4eea\u5f0f\u77f3\u5468\u56f48\u4e2a\u57fa\u5ea7\u4e0a\u7684\u7269\u54c1\u6765\u8c03\u8282\u6e29\u5ea6/\u6e7f\u5ea6</br>-\u9700\u8981\u91cd\u65b0\u767b\u5f55\u624d\u80fd\u770b\u5230\u6539\u53d8</br>-\u6587\u5b57\u4e0e\u89e3\u91ca\u90fd\u5f88\u5c11</br>-\u901f\u5ea6\u5feb</br></br>\u4f7f\u7528\u5deb\u672f(Witchery)\u7684\u5b63\u8282\u53d8\u8fc1\u836f\u6c34</br>-\u5c0f\u8303\u56f4,\u8303\u56f4\u4e0e\u836f\u6c34\u7b49\u7ea7\u6709\u5173(\u5f3a\u5ea6\u7b49\u7ea7\u800c\u4e0d\u662f\u55b7\u6e85\u7b49\u7ea7)</br>-\u53ef\u4ee5\u660e\u786e\u6307\u5b9a\u751f\u7269\u7fa4\u7cfb</br>-\u9700\u4f7f\u7528\u590d\u6742\u7684\u5b9a\u5236\u917f\u9020\u7cfb\u7edf\u5236\u4f5c</br>-\u53ef\u4ee5\u6dfb\u52a0\u4e0d\u540c\u7684\u6210\u5206\u4ee5\u6539\u53d8\u836f\u6c34\u7684\u8303\u56f4</br>-\u6700\u5c0f\u4fee\u6539\u4e00\u4e2a\u65b9\u5757</br>-\u6700\u5927\u4e3a\u534a\u5f843\u683c\u7684\u5706</br>-\u7acb\u5373\u751f\u6548(\u4f60\u4f7f\u7528\u540e)</br></br>\u4f7f\u7528\u5deb\u672f\u7684\u5b63\u8282\u53d8\u8fc1\u4eea\u5f0f</br>-\u9700\u8981\u4e0d\u9508\u94a2\u3001\u5b8f\u4f1f\u4e4b\u6728\u6743\u6756\u6216\u66f4\u597d\u7684\u6cd5\u6756\u6765\u5236\u9020\u5deb\u672f\u7684\u84b8\u998f\u5854</br>-\u4f60\u5fc5\u987b\u6413\u4e00\u5806\u5deb\u672f\u914d\u5957\u8bbe\u5907</br>-\u53ea\u8981\u5b8c\u6210\u4e00\u6b21,\u4ee5\u540e\u5c31\u7b80\u5355\u4e86</br>-\u8d85\u5927\u8303\u56f4,16/32/48\u683c\u534a\u5f84\u7684\u5706</br>-\u53ef\u4ee5\u660e\u786e\u6307\u5b9a\u751f\u7269\u7fa4\u7cfb</br>-\u6709\u65f6\u5728\u7279\u5b9a\u7684\u533a\u5757\u4e2d\u4f1a\u5931\u8d25</br>-\u901f\u5ea6\u5f88\u5feb</br></br>\u5982\u679c\u4f60\u60f3\u77e5\u9053\u5deb\u672f\u7684\u76f8\u5173\u6559\u7a0b,\u8bf7\u67e5\u770b\"\u66ff\u4ee3\u9b54\u6cd5\"\u4efb\u52a1\u680f.</br></br>\u6ce8\u610f:IC2\u548c\u661f\u7cfb(Galacticraft)\u7684\u5730\u5f62\u8f6c\u6362(\u6539\u9020)\u673a\u53ea\u80fd\u6539\u53d8\u5730\u8868,\u65e0\u6cd5\u6539\u53d8\u751f\u7269\u7fa4\u7cfb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJbw==",
                    "title": "\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211",
                    "tooltip": "<strong>\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5</br>\u6f6e\u6e7f\u800c\u6e29\u6696\uff1f"
                },
                {
                    "name": "\u5de8\u578b\u5de5\u4e1a\u8702\u7bb1",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3284.png",
                    "x": 156.0,
                    "y": 480.0,
                    "data": "\u53c8\u53eb\u505a\u5de8\u578b\u8702\u7bb1.</br></br>\u5b83\u6709\u4e09\u79cd\u4e3b\u8981\u6a21\u5f0f(\u4f7f\u7528\u87ba\u4e1d\u5200\u5207\u6362)\u548c\u4e24\u79cd\u8fd0\u884c\u6a21\u5f0f(\u7528shift+\u87ba\u4e1d\u5200\u5207\u6362):</br></br>\u8f93\u5165\u6a21\u5f0f:\u4e0d\u6d88\u8017\u80fd\u91cf.\u5c06\u8702\u540e\u653e\u8fdb\u8f93\u5165\u603b\u7ebf,\u4ee5\u5c06\u5b83\u4eec\u653e\u5165\u5185\u90e8\u7f13\u51b2\u533a.</br></br>\u8f93\u51fa\u6a21\u5f0f:\u4e0d\u6d88\u8017\u80fd\u91cf.\u4f1a\u8ba9\u4f60\u7684\u871c\u8702\u56de\u5230\u8f93\u51fa\u603b\u7ebf.</br></br>\u8fd0\u884c\u6a21\u5f0f-\u666e\u901a:\u5904\u7406\u65f6\u95f4\u4e3a5\u79d2.\u6bcf\u4e2a\u8702\u540e\u90fd\u5c06\u4f7f\u673a\u5668\u591a\u6d88\u80171A-LuV.\u6240\u6709\u871c\u8702\u90fd\u53d7\u523064\u500d\u52a0\u901f\u548c8\u4e2a\u4ea7\u91cf\u5347\u7ea7\u4ee5\u53ca\u4e00\u4e2a\u57fa\u56e0\u7a33\u5b9a\u5347\u7ea7\u7684\u5f71\u54cd.\u6700\u5999\u7684\u662f,\u5de8\u578b\u8702\u7bb1\u5c06\u4e3a\u5176\u4e2d\u7684\u6bcf\u4e2a\u871c\u8702\u90fd\u63d0\u4f9b\u5b8c\u7f8e\u73af\u5883.</br></br>\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4e3a\u673a\u5668\u63d0\u4f9b\u8702\u738b\u6d46\u6765\u589e\u52a0\u4ea7\u91cf.\u6bcf\u7c92\u8702\u738b\u6d46\u5c06\u4e3a\u6bcf\u53ea\u871c\u8702\u63d0\u4f9b5\uff05\u7684\u5956\u52b1,\u6700\u9ad8\u53ef\u4e3a200\uff05,\u4ec5\u5728\u6bcf\u6b21\u8fd0\u884c\u5f00\u59cb\u65f6\u6d88\u8017\u5e76\u4ec5\u5e94\u7528\u4e8e\u8be5\u6b21\u8fd0\u884c.\u5f53\u7136,\u6b63\u5e38\u7684\u871c\u8702\u5c5e\u6027\u4ecd\u7136\u6709\u6548,\u4e0d\u8fc7\u5de8\u8702\u7bb1\u53ef\u4ee5\u4e3a\u4efb\u610f\u871c\u8702\u63d0\u4f9b\u5b8c\u7f8e\u7684\u73af\u5883.</br></br>\u8fd0\u884c\u6a21\u5f0f-\u8702\u7fa4:\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u4f60\u53ea\u80fd\u653e\u51651\u4e2a\u8702\u540e.\u5de8\u578b\u8702\u7bb1\u5c06\u4ee5\u6bcf\u6b21\u8fd0\u884c\u6d88\u8017100\u8702\u738b\u6d46\u7684\u4ee3\u4ef7\u6162\u6162\u751f\u4ea7\u51fa\u5351\u8d31\u79cd\u516c\u4e3b\u8702.\u57fa\u672c\u5904\u7406\u65f6\u95f4\u4e3a1\u5206\u949f\u5e76\u9700\u89811A-IV,\u4f46\u8be5\u8fc7\u7a0b\u53ef\u4ee5\u8d85\u9891.</br></br>[note]\u662f\u7684,\u4f60\u9700\u8981\u6210\u5343\u4e0a\u4e07\u7684\u7687\u540e,\u800c\u4e0d\u662f\u516c\u4e3b,\u6240\u4ee5\u52a0\u6cb9\u8ba9\u5b83\u751f![/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAM1A==",
                    "title": "\u5de8\u578b\u5de5\u4e1a\u8702\u7bb1",
                    "tooltip": "<strong>\u5de8\u578b\u5de5\u4e1a\u8702\u7bb1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u627f\u8ba4\u5427,UV\u9636\u6bb5\u4f60\u559c\u6b22\u7684Pt 1</br>\u767e\u4e07\u871c\u8702"
                },
                {
                    "name": "\u5168\u56fe\u9274",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2286.png",
                    "x": 348.0,
                    "y": 108.0,
                    "data": "\u5927\u5e08\u7ea7\u7684\u517b\u8702\u5458\u9700\u8981\u5927\u5e08\u7ea7\u7684\u56fe\u9274-\u5168\u56fe\u9274.\u786e\u4fdd\u4f60\u80fd\u6ee1\u8db3\u871c\u8702\u7684\u6240\u6709\u9700\u6c42,\u8fd9\u6837\u5b83\u4eec\u624d\u80fd\u5728\u8702\u7bb1\u4e2d\u6b63\u5e38\u5de5\u4f5c!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI7g==",
                    "title": "\u5168\u56fe\u9274",
                    "tooltip": "<strong>\u5168\u56fe\u9274</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702"
                },
                {
                    "name": "\u9ad8\u7ea7\u54c1\u79cd:\u7845\u6676",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/525.png",
                    "x": 696.0,
                    "y": 324.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACDQ==",
                    "title": "\u9ad8\u7ea7\u54c1\u79cd:\u7845\u6676",
                    "tooltip": "<strong>\u9ad8\u7ea7\u54c1\u79cd:\u7845\u6676</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u94bb\u77f3\u5236\u54c1",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/510.png",
                    "x": 504.0,
                    "y": 204.0,
                    "data": "\u4e5f\u88ab\u79f0\u4e3a\u5b9e\u9a8c\u5668\u76bf.\u505a\u597d\u51c6\u5907.\u4e3a\u4e86\u5b8c\u6210\u4e25\u8083\u7684\u871c\u8702\u57f9\u80b2\u5de5\u4f5c,\u4f60\u9700\u8981\u5927\u91cf\u7684\u94bb\u77f3! \u6211\u6ca1\u548c\u4f60\u5f00\u73a9\u7b11,\u771f\u7684\u9700\u8981\u5f88\u591a!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB_g==",
                    "title": "\u94bb\u77f3\u5236\u54c1",
                    "tooltip": "<strong>\u94bb\u77f3\u5236\u54c1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u6a21\u677f"
                },
                {
                    "name": "\u6f6e\u6e7f\u800c\u6e29\u6696\uff1f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1511.png",
                    "x": 108.0,
                    "y": 60.0,
                    "data": "\u522b\u518d\u731c\u4f60\u6240\u5728\u751f\u7269\u7fa4\u7cfb\u7684\u6e7f\u5ea6\u548c\u6e29\u5ea6\u4e86. \u4f7f\u7528\u6816\u606f\u5730\u5b9a\u4f4d\u4eea\u6765\u4e86\u89e3\u5f53\u5730\u7684\u6c14\u5019.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF5w==",
                    "title": "\u6f6e\u6e7f\u800c\u6e29\u6696\uff1f",
                    "tooltip": "<strong>\u6f6e\u6e7f\u800c\u6e29\u6696\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4e2a\u65b0\u5bb6"
                },
                {
                    "name": "\u9ad8\u7ea7\u54c1\u79cd:\u535a\u58eb",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/523.png",
                    "x": 600.0,
                    "y": 324.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACCw==",
                    "title": "\u9ad8\u7ea7\u54c1\u79cd:\u535a\u58eb",
                    "tooltip": "<strong>\u9ad8\u7ea7\u54c1\u79cd:\u535a\u58eb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u65bd\u74e6\u8f9b\u683c\u7684\u6db2\u5316\u673a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/517.png",
                    "x": 552.0,
                    "y": 144.0,
                    "data": "\u4eba\u4eec\u5e38\u8bf4,\u65e9\u9910\u8981\u5403\u597d.\u8fd9\u53f0\u673a\u5668\u53ef\u4ee5\u628a\u751f\u8089\u8f6c\u53d8\u6210\u6db2\u6001\u86cb\u767d\u8d28,\u7528\u6765\u6839\u636e\u57fa\u56e0\u6a21\u677f\u5236\u9020\u871c\u8702.\u8fd9\u4e0e\u65e9\u9910\u00a7o\u7edd\u5bf9\u00a7r\u4e00\u70b9\u5173\u7cfb\u90fd\u6ca1\u6709.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACBQ==",
                    "title": "\u65bd\u74e6\u8f9b\u683c\u7684\u6db2\u5316\u673a",
                    "tooltip": "<strong>\u65bd\u74e6\u8f9b\u683c\u7684\u6db2\u5316\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u5236\u54c1"
                },
                {
                    "name": "\u5347\u7ea7\u4f60\u7684\u6797\u4e1a\u80cc\u5305",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1367.png",
                    "x": 252.0,
                    "y": 60.0,
                    "data": "\u4f7f\u7528\u7f16\u7ec7\u4e1d\u7ef8,\u53ef\u4ee5\u5c06\u4f60\u7684\u6797\u4e1a\u80cc\u5305\u5347\u7ea7. \u6bcf\u4e2a\u5305\u670945\u4e2a\u63d2\u69fd.</br></br>\u4f60\u9700\u8981\u51c6\u5907\u4e00\u4e2a\u6728\u5de5\u673a\u3001\u4f60\u7684\u65e7\u80cc\u5305\u548c\u4e00\u70b9\u79cd\u5b50\u6cb9.</br></br>\u5982\u679c\u6ca1\u8bc6\u522b\u5230\u914d\u65b9,\u8bf7\u5c06\u7a7a\u80cc\u5305\u653e\u5165\u5408\u6210\u680f\u4e2d\u4ee5\u91cd\u7f6e\u5b83\u7684nbt\u6570\u636e. \u5f53\u7136\u5728\u8fd9\u4e48\u5e72\u4e4b\u524d\u8bb0\u5f97\u628a\u91cc\u5934\u7684\u4e1c\u897f\u5148\u62ff\u51fa\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFVw==",
                    "title": "\u5347\u7ea7\u4f60\u7684\u6797\u4e1a\u80cc\u5305",
                    "tooltip": "<strong>\u5347\u7ea7\u4f60\u7684\u6797\u4e1a\u80cc\u5305</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e1d\u7ef8</br>\u67d4\u8f6f\u7684\u76ae\u9769"
                },
                {
                    "name": "\u9876\u7ea7\u5206\u6790\u4eea",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/505.png",
                    "x": 300.0,
                    "y": 60.0,
                    "data": "\u8fd9\u662f\u4f60\u80fd\u505a\u51fa\u6765\u7684\u6700\u597d\u7684\u5206\u6790\u4eea,\u80fd\u6ee1\u8db3\u4f60\u6240\u6709\u7684\u626b\u63cf\u548c\u5206\u6790\u9700\u6c42.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB-Q==",
                    "title": "\u9876\u7ea7\u5206\u6790\u4eea",
                    "tooltip": "<strong>\u9876\u7ea7\u5206\u6790\u4eea</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u591a\u4e48\u6f02\u4eae\u7684\u6811\u53f6...</br>\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898</br>\u7814\u7a76\u8774\u8776"
                },
                {
                    "name": "\u57fa\u56e0\u6ce8\u5c04\u5668",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2103.png",
                    "x": 540.0,
                    "y": 432.0,
                    "data": "\u6700\u540e\u4e00\u6b65\u5c31\u662f\u57fa\u56e0\u6ce8\u5c04(\u63a5\u79cd).\u76ee\u524d\u552f\u4e00\u80fd\u63d2\u5165\u57fa\u56e0\u7684\u673a\u5668\u5c31\u662f\u57fa\u56e0\u6ce8\u5c04\u5668.\u8fd9\u9700\u8981\u7ec6\u83cc\u8d28\u7c92-\u7531\u7ec6\u83cc\u548c\u70c8\u7130\u7c89\u57f9\u517b\u800c\u6210,\u628a\u57fa\u56e0\u8f6c\u79fb\u5230\u6709\u673a\u4f53\u4e2d.</br></br>\u53ea\u6709\u5e7c\u5c0f\u9636\u6bb5\u7684\u6709\u673a\u4f53\u624d\u80fd\u88ab\u6ce8\u5165,\u6bd4\u5982\u871c\u8702\u5e7c\u4f53(\u871c\u8702)\u3001\u82b1\u7c89(\u6811\u548c\u82b1)\u3001\u5e7c\u866b(\u8774\u8776).\u5229\u7528\u6db2\u4f53\u57f9\u517b\u57fa\u53ef\u4ee5\u5c06\u871c\u8702\u5e7c\u4f53\u8f6c\u5316\u4e3a\u96c4\u5cf0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAINw==",
                    "title": "\u57fa\u56e0\u6ce8\u5c04\u5668",
                    "tooltip": "<strong>\u57fa\u56e0\u6ce8\u5c04\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>PCR\u4eea"
                },
                {
                    "name": "\u871c\u8702\u5728\u9ed1\u6697\u4e2d\u55e1\u55e1\u4f5c\u54cd",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1516.png",
                    "x": 36.0,
                    "y": 336.0,
                    "data": "\u5c31\u7b97\u7528\u4e0a\u7075\u9b42\u6846\u67b6\u90fd\u9700\u8981\u592a\u957f\u65f6\u95f4,\u65e0\u6cd5\u6ee1\u8db3\u4f60\u7684\u53e3\u5473?\u90a3\u5c31\u8bd5\u8bd5\u6e6e\u706d\u6846\u67b6\u5427,\u5b83\u4f1a\u5728\u4e00\u4e2a\u871c\u8702\u523b(27s)\u4e2d\u6467\u6bc1\u4e00\u53ea\u871c\u8702. \u5982\u679c\u7528\u4e86\u4e0d\u6b62\u4e00\u4e2a,\u4f60\u9700\u8981\u5f53\u5fc3,\u6709\u4f20\u8a00\u8bf4\u5b83\u53ef\u80fd\u4f1a\u4f24\u5bb3\u4f60\u7684\u516c\u4e3b\u8702...</br></br>[note]\u4f60\u53ef\u4ee5\u5728\u8981\u585e\u7684\u56fe\u4e66\u9986\u627e\u5230\u8fd9\u79cd\u6846\u67b6,\u4e5f\u53ef\u4ee5\u7528\u9f99\u86cb\u5408\u6210.</br>\u5965\u6cd5\u4fee\u590d\u53f0\u53ef\u4ee5\u4fee\u590d\u5305\u62ec\u6b64\u79cd\u5728\u5185\u7684\u5927\u591a\u6570\u6846\u67b6.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF7A==",
                    "title": "\u871c\u8702\u5728\u9ed1\u6697\u4e2d\u55e1\u55e1\u4f5c\u54cd",
                    "tooltip": "<strong>\u871c\u8702\u5728\u9ed1\u6697\u4e2d\u55e1\u55e1\u4f5c\u54cd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u871c\u8702\u4e4b\u6b7b"
                },
                {
                    "name": "\u5206\u6790\u5b83\u4eec",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/503.png",
                    "x": 204.0,
                    "y": 108.0,
                    "data": "\u6bcf\u4e00\u53ea\u871c\u8702\u90fd\u6709\u5f88\u591a\u5c5e\u6027\u6765\u51b3\u5b9a\u5b83\u4eec\u7684\u884c\u4e3a.\u6bd4\u5982\u5b83\u4eec\u5728\u96e8\u4e2d\u6216\u8005\u5728\u591c\u665a\u7684\u884c\u4e3a\u4e4b\u7c7b\u7684.\u4f60\u5fc5\u987b\u5bf9\u871c\u8702\u7684\u8fd9\u4e9b\u884c\u4e3a\u8fdb\u884c\u8ddf\u8e2a\u5206\u6790.\u8fd9\u73a9\u610f\u4e0d\u592a\u597d\u7528,\u56e0\u4e3a\u5b83\u65e0\u6cd5\u663e\u793a\u9690\u6027\u57fa\u56e0,\u4f46\u4fd7\u8bdd\u8bf4\u5f97\u597d,\"\u4e0d\u6d6a\u8d39,\u4e0d\u6101\u7f3a\".</br></br>\u4f60\u5c06\u9700\u8981\u7528\u7eb8\u6765\u5206\u6790\u6bcf\u53ea\u871c\u8702.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB9w==",
                    "title": "\u5206\u6790\u5b83\u4eec",
                    "tooltip": "<strong>\u5206\u6790\u5b83\u4eec</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4e2a\u65b0\u5bb6"
                },
                {
                    "name": "\u57fa\u56e0\u6570\u636e\u5e93",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2099.png",
                    "x": 444.0,
                    "y": 384.0,
                    "data": "\u53d1\u73b0\u7684\u57fa\u56e0\u5c06\u88ab\u8bb0\u5f55\u5230\u57fa\u56e0\u6570\u636e\u5e93\u4e2d.\u8fd9\u53f0\u624b\u6301\u8bbe\u5907\u6309\u751f\u7269\u7c7b\u578b\u5217\u51fa\u6240\u6709\u57fa\u56e0.\u4e3a\u4e86\u5c06\u57fa\u56e0\u6dfb\u52a0\u5230\u7a7a\u8840\u6e05\u74f6\u4e2d\u4ee5\u5141\u8bb8\u6ce8\u5c04,\u53ef\u4ee5\u5728\u624b\u6301\u74f6\u5b50\u65f6\u70b9\u51fb\u6240\u9700\u7684\u57fa\u56e0.\u7a7a\u8840\u6e05\u9635\u5217\u53ef\u7528\u4e8e\u540c\u65f6\u4fdd\u5b58\u591a\u4e2a\u57fa\u56e0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIMw==",
                    "title": "\u57fa\u56e0\u6570\u636e\u5e93",
                    "tooltip": "<strong>\u57fa\u56e0\u6570\u636e\u5e93</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d4b\u5e8f\u4eea"
                },
                {
                    "name": "\u517b\u8702\u5458\u80cc\u5305",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2745.png",
                    "x": 348.0,
                    "y": 204.0,
                    "data": "\u987e\u540d\u601d\u4e49,\u5b83\u975e\u5e38\u6709\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKuQ==",
                    "title": "\u517b\u8702\u5458\u80cc\u5305",
                    "tooltip": "<strong>\u517b\u8702\u5458\u80cc\u5305</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u517b\u8702\u5458\u7bb1\u5b50"
                },
                {
                    "name": "\u871c\u8702\u4e4b\u6b7b",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1513.png",
                    "x": 84.0,
                    "y": 336.0,
                    "data": "\u8fd9\u4e9b\u6846\u67b6\u53ef\u4ee5\u8ba9\u4f60\u66f4\u5feb\u5730\u6740\u6b7b\u871c\u8702.\u662f\u4e3a\u4e86\u65e9\u65e5\u7e41\u6b96\u4e0b\u4e00\u4ee3\u5bf9\u5427?\u4e0d\u662f\u56e0\u4e3a\u4f60\u4e0d\u559c\u6b22\u5b83\u4eec\u662f\u5427?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF6Q==",
                    "title": "\u871c\u8702\u4e4b\u6b7b",
                    "tooltip": "<strong>\u871c\u8702\u4e4b\u6b7b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d78\u6e0d\u6846\u67b62"
                },
                {
                    "name": "\u8774\u8776\u6548\u5e94",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2109.png",
                    "x": 300.0,
                    "y": 156.0,
                    "data": "\u8fd9\u4e2a\u6570\u636e\u5e93\u5c06\u4f1a\u8bb0\u5f55\u4f60\u6709\u5173\u8774\u8776\u7684\u4e00\u5207\u77e5\u8bc6.</br></br>\u5bf9\u4e86,\u56ed\u827a\u5b66\u76f8\u5173\u7684\u4e1c\u897f\u8bf7\u53bb\"\u57fa\u5730\u5efa\u8bbe\"\u4efb\u52a1\u680f\u67e5\u770b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIPQ==",
                    "title": "\u8774\u8776\u6548\u5e94",
                    "tooltip": "<strong>\u8774\u8776\u6548\u5e94</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7814\u7a76\u8774\u8776"
                },
                {
                    "name": "\u201c\u8702\u201d\u5bcc\u4f60\u7684\u77e5\u8bc6",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2108.png",
                    "x": 300.0,
                    "y": 108.0,
                    "data": "\u8fd9\u4e2a\u6570\u636e\u5e93\u4f1a\u8bb0\u5f55\u4f60\u53d1\u73b0\u7684\u6240\u6709\u5173\u4e8e\u871c\u8702\u7684\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIPA==",
                    "title": "\u201c\u8702\u201d\u5bcc\u4f60\u7684\u77e5\u8bc6",
                    "tooltip": "<strong>\u201c\u8702\u201d\u5bcc\u4f60\u7684\u77e5\u8bc6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898"
                },
                {
                    "name": "\u8702\u7bb1\u7ec4",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1123.png",
                    "x": 156.0,
                    "y": 384.0,
                    "data": "\u8702\u7bb1\u7ec4\u662f\u8702\u623f\u7684\u8fdb\u9636\u7248. \u53ef\u81ea\u7136\u589e\u52a0\u871c\u8702\u7684\u751f\u4ea7\u901f\u5ea6(\u4ee5\u53ca\u901a\u8fc7\u8702\u7bb1\u7ec4\u6846\u67b6\u652f\u67b6\u6dfb\u52a0\u591a\u8fbe\u516d\u4e2a\u6846\u67b6\u7684\u80fd\u529b)\uff0c\u5e76\u4e14\u8fd8\u53ef\u4ee5\u7528\u7ec4\u4ef6\u8d4b\u4e88\u5176\u4ed6\u7684\u80fd\u529b.</br></br>\u53ef\u4ee5\u4f7f\u7528\u8702\u7bb1\u7ec4\u52a0\u70ed\u5668\u6216\u8702\u7bb1\u7ec4\u98ce\u6247\u6765\u8c03\u8282\u8702\u7bb1\u7ec4\u7684\u5185\u90e8\u6e29\u5ea6,\u4ee5\u9002\u5e94\u9700\u8981\u66f4\u70ed\u6216\u66f4\u51b7\u6c14\u5019\u7684\u871c\u8702.</br></br>\u9664\u975e\u5bf9\u73af\u5883\u975e\u5e38\u6ee1\u610f,\u5426\u5219\u67d0\u4e9b\u7279\u5b9a\u7684\u871c\u8702\u5c06\u4e0d\u4f1a\u751f\u4ea7\u5176\u7279\u4ea7. \u60f3\u8981\u6ee1\u8db3\u8fd9\u4e00\u70b9,\u4f60\u9700\u8981\u4f7f\u73af\u5883\u7684\u6e29\u5ea6\u548c\u6e7f\u5ea6\u5b8c\u5168\u7b26\u5408\u8be5\u871c\u8702\u7684\u521d\u59cb\u8981\u6c42,\u5373\u672a\u57f9\u80b2\u5f3a\u5316\u8fc7\u6e29\u5ea6/\u6e7f\u5ea6\u9002\u5e94\u6027\u65f6\u7684\u8981\u6c42. \u67d0\u4e9b\u871c\u8702\u8fd8\u9700\u8981\u5728\u8702\u7bb1\u7ec4\u4e0b\u65b9\u6709\u7279\u5b9a\u65b9\u5757.</br></br>\u4e5f\u53ef\u4ee5\u4f7f\u7528\u57fa\u56e0\u7a81\u53d8\u5668\u6765\u589e\u52a0\u7a81\u53d8\u7684\u673a\u4f1a,\u8702\u7bb1\u7ec4\u65e5\u5149\u706f\u548c\u6321\u96e8\u65b9\u5757\u5141\u8bb8\u871c\u8702\u5206\u522b\u5728\u591c\u95f4\u548c\u4e0b\u96e8\u671f\u95f4\u5de5\u4f5c,\u5373\u4f7f\u6ca1\u6709\u591c\u884c\u548c\u8010\u96e8\u98de\u884c\u6027\u57fa\u56e0\u4e5f\u6ca1\u5173\u7cfb. \u8fd8\u53ef\u52a0\u5165\u5b75\u5316\u5ba4\u4ee5\u4f7f\u7528\u591a\u4f59\u7684\u8702\u738b\u6d46\u5236\u9020\u6301\u7eed\u6570\u4ee3\u7684\u516c\u4e3b\u8702.</br></br>[note]\u5982\u679c\u60f3\u8981\u57f9\u80b2\u5bf9\u8702\u7bb1\u4e0b\u65b9\u65b9\u5757\u6709\u7279\u6b8a\u8981\u6c42\u7684\u871c\u8702,\u4f60\u9700\u8981\u5c06\u6240\u9700\u7684\u65b9\u5757\u653e\u5728\u5e95\u90e8\u6b63\u4e2d,\u7136\u540e\u5c06\u8702\u7bb1\u7ec4\u5f53\u505a\u666e\u901a\u8702\u7bb1\u4f7f\u7528.</br></br>\u8bd1\u8005\u6ce8:\u5bf9\u4e8e\u9700\u8981\u63d0\u4ea4\u5927\u91cf\u7269\u54c1\u7684\u4efb\u52a1,\u63d0\u4ea4\u7ad9\u662f\u4e0d\u9519\u7684\u9009\u62e9.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEYw==",
                    "title": "\u8702\u7bb1\u7ec4",
                    "tooltip": "<strong>\u8702\u7bb1\u7ec4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed"
                },
                {
                    "name": "\u56e2\u7ed3\u8d77\u6765,\u871c\u8702\u4eec!",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2767.png",
                    "x": 84.0,
                    "y": 216.0,
                    "data": "\u8fd9\u4e9b\u6846\u67b6\u6709\u52a9\u4e8e\u9632\u6b62\u57fa\u56e0\u8870\u9000.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKzw==",
                    "title": "\u56e2\u7ed3\u8d77\u6765,\u871c\u8702\u4eec!",
                    "tooltip": "<strong>\u56e2\u7ed3\u8d77\u6765,\u871c\u8702\u4eec!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d78\u6e0d\u6846\u67b62"
                },
                {
                    "name": "\u56fe\u9274",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2102.png",
                    "x": 348.0,
                    "y": 156.0,
                    "data": "\u56fe\u9274\u5c06\u73b0\u6709\u7684\u56db\u4e2a\u6570\u636e\u5e93\u5408\u5e76\u5230\u4e00\u4e2a\u65b0\u7684\u6d4f\u89c8\u5668\u4e2d,\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u53d1\u73b0\u7684\u871c\u8702\u3001\u6811\u3001\u8774\u8776\u548c\u82b1\u7684\u7279\u6027\u3001\u7a81\u53d8\u548c\u57fa\u56e0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAINg==",
                    "title": "\u56fe\u9274",
                    "tooltip": "<strong>\u56fe\u9274</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8ffd\u8e2a\u4f60\u7684\u53d1\u73b0(\u82b1)</br>\u8ffd\u8e2a\u6797\u6728</br>\u201c\u8702\u201d\u5bcc\u4f60\u7684\u77e5\u8bc6</br>\u8774\u8776\u6548\u5e94"
                },
                {
                    "name": "\u53ea\u8981\u6700\u597d:\u8010\u6e29\u6027",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/519.png",
                    "x": 744.0,
                    "y": 84.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81.</br></br>[note]\u8010\u6e29\u6027\u5e26\u6765\u7684\u6e29\u5ea6\u9002\u5e94\u65e0\u6cd5\u4f7f\u871c\u8702\u5904\u4e8e\u6700\u4f73\u72b6\u6001(\u65e0\u6cd5\u751f\u4ea7\u7279\u6b8a\u4ea7\u7269),\u800c\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b,\u8010\u6e29\u6027\u51683\u5c31\u8db3\u591f\u4e86. \u5728\u5e38\u6e29\u533a\u57df,\u8010\u6e29\u6027\u51683\u53ef\u4ee5\u8ba9\u6240\u6709\u79cd\u7c7b\u7684\u871c\u8702\u6b63\u5e38\u5de5\u4f5c. \u5f53\u7136,\u8fd9\u9879\u5c5e\u6027\u7684\u6781\u9650\u662f\u51685,\u5982\u679c\u4f60\u611f\u5174\u8da3\u7684\u8bdd,\u901a\u8fc7\u9002\u5e94\u6027\u8c03\u6574\u5668,\u53ef\u4ee5\u8ba9\u5730\u72f1\u8702\u5728\u5bd2\u51b7\u533a\u57df\u6b63\u5e38\u5de5\u4f5c.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACBw==",
                    "title": "\u53ea\u8981\u6700\u597d:\u8010\u6e29\u6027",
                    "tooltip": "<strong>\u53ea\u8981\u6700\u597d:\u8010\u6e29\u6027</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u627e\u5230\u4e00\u4e9b\u871c\u8702",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/501.png",
                    "x": 60.0,
                    "y": 108.0,
                    "data": "\u4e0b\u4e00\u6b65:\u5728\u4e16\u754c\u5404\u5730\u627e\u4e00\u4e9b\u91ce\u751f\u8702\u5de2.\u4f60\u80fd\u627e\u523011\u4e2a\u79cd\u7c7b\u7684\u8702\u5de2,\u5176\u4e2d8\u79cd\u53ef\u4ee5\u5728\u4e3b\u4e16\u754c\u88ab\u53d1\u73b0.\u627e\u5230\u4efb\u610f\u4e00\u79cd\u871c\u8702\u4ee5\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB9Q==",
                    "title": "\u627e\u5230\u4e00\u4e9b\u871c\u8702",
                    "tooltip": "<strong>\u627e\u5230\u4e00\u4e9b\u871c\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5"
                },
                {
                    "name": "\u57fa\u56e0\u8f6c\u6362\u673a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/512.png",
                    "x": 552.0,
                    "y": 264.0,
                    "data": "\u7269\u79cd\u6216\u8005\u6027\u72b6\u7684DNA\u6837\u672c\u76f8\u5f53\u6709\u7814\u7a76\u4ef7\u503c.\u4f60\u5e94\u8be5\u5728\u624b\u4e2d\u5e38\u5907\u6bcf\u4e2a\u7269\u79cd/\u7279\u6548/\u6027\u72b6\u7684DNA\u6837\u672c. \u901a\u8fc7\u8fd9\u53f0\u673a\u5668,\u4f60\u80fd\u591f\u590d\u5236DNA\u6837\u672c,\u4f7f\u7528\u4e00\u4e2a\u7a7a\u7684\u57fa\u56e0\u836f\u76bf\u548c\u57fa\u56e0\u6a21\u677f\u6765\u590d\u5236DNA\u6837\u672c.</br></br>[note]\u5f53\u7136,\u8981\u662f\u7528\u4e0d\u4e0a\u7684\u5f53\u7136\u4e0d\u7528\u7559\u7740.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACAA==",
                    "title": "\u57fa\u56e0\u8f6c\u6362\u673a",
                    "tooltip": "<strong>\u57fa\u56e0\u8f6c\u6362\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u5236\u54c1"
                },
                {
                    "name": "X\u6218\u8b66,\u6216\u8005\u6211\u5e94\u8be5\u8bf4X-\u871c\u8702?",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2094.png",
                    "x": 108.0,
                    "y": 432.0,
                    "data": "\u57fa\u56e0\u7a81\u53d8\u5668\u80fd\u6781\u5927\u5730\u52a0\u901f\u57fa\u56e0\u7a81\u53d8,\u751a\u81f3\u8ba9\u90a3\u4e9b\u6781\u4e3a\u7f55\u89c1\u7684\u871c\u8702\u5f97\u4ee5\u88ab\u57f9\u80b2\u51fa\u6765.\u63d2\u5165\u57fa\u56e0\u7a81\u53d8\u5668\u7684\u7269\u54c1\u63a7\u5236\u5b83\u63d0\u5347\u591a\u5c11\u7a81\u53d8.  \u7075\u9b42\u6c99-\u63d0\u534750\uff05  \u672b\u5f71\u73cd\u73e0-\u63d0\u5347100\uff05  \u672b\u5f71\u4e4b\u773c-\u63d0\u5347300\uff05",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAILg==",
                    "title": "X\u6218\u8b66,\u6216\u8005\u6211\u5e94\u8be5\u8bf4X-\u871c\u8702?",
                    "tooltip": "<strong>X\u6218\u8b66,\u6216\u8005\u6211\u5e94\u8be5\u8bf4X-\u871c\u8702?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8702\u7bb1\u7ec4"
                },
                {
                    "name": "\u7a7a\u767d\u7684\u57fa\u56e0\u6837\u672c",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/514.png",
                    "x": 408.0,
                    "y": 204.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u83b7\u5f97\u4e00\u53ea\u871c\u8702\u8eab\u4e0a\u7684\u57fa\u56e0\u6837\u672c,\u90a3\u4e48\u4f60\u9700\u8981\u5927\u91cf\u7684\u7535\u529b,\u4e00\u4e2a\u5b9e\u9a8c\u5668\u76bf\u548c\u4e00\u4e2a\u7a7a\u7684\u57fa\u56e0\u6a21\u677f. \u4f60\u5176\u5b9e\u4e0d\u9700\u8981\u5f88\u591a\u7684\u6a21\u677f,\u56e0\u4e3a\u4f60\u53ef\u4ee5\u628a\u4f60\u4e0d\u9700\u8981\u7684\u6216\u8005\u4e0d\u60f3\u8981\u7684\u57fa\u56e0\u6a21\u677f\u6254\u8fdb\u7089\u5b50\u91cc\u9762\u70e7\u6210\u7a7a\u767d\u7684.\u4e0e\u6b64\u540c\u65f6\u4f60\u53ef\u4ee5\u5f00\u59cb\u7814\u7a76\u57fa\u56e0\u5de5\u7a0b\u8fd9\u4e2amod\u4e86,\u867d\u7136\u6211\u4eec\u77e5\u9053\u57fa\u56e0\u5de5\u4e1a\u7279\u522b\u597d\u7528\u2026\u2026\u57fa\u56e0\u5de5\u7a0b\u53ef\u4ee5\u7528\u4e8e\u871c\u8702\u3001\u6811\u6728\u548c\u56ed\u827a\u7684\u82b1,\u56e0\u6b64\u5b83\u6709\u81ea\u5df1\u7684\u4efb\u52a1\u7ebf.\u57fa\u56e0\u5de5\u4e1a(Gendustry)\u5bf9\u57f9\u80b2\u871c\u8702\u6765\u8bf4\u786e\u5b9e\u5f88\u597d\u7528,\u4f46\u9700\u8981\u9876\u7ea7\u7684\u8bbe\u5907\u624d\u80fd\u8fdb\u884c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACAg==",
                    "title": "\u7a7a\u767d\u7684\u57fa\u56e0\u6837\u672c",
                    "tooltip": "<strong>\u7a7a\u767d\u7684\u57fa\u56e0\u6837\u672c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c5\u9636\u6bb5(IV)</br>\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed"
                },
                {
                    "name": "\u57fa\u56e0\u6a21\u677f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/515.png",
                    "x": 456.0,
                    "y": 204.0,
                    "data": "\u57fa\u56e0\u6a21\u677f\u7528\u6765\u5c06\u591a\u4e2a\u57fa\u56e0\u6837\u672c\u7ec4\u5408\u5230\u4e00\u8d77\u5f62\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u6a21\u677f.\u4e00\u4e2a\u57fa\u56e0\u6a21\u677f\u53ef\u4ee5\u7528\u4e8e\u7ed9\u871c\u8702\u4e00\u6b21\u6dfb\u52a0\u591a\u4e2a\u7279\u6027,\u4f46\u5982\u679c\u4f60\u5728\u4e00\u4e2a\u6a21\u677f\u4e2d\u586b\u5145\u6ee1\u6240\u670913\u4e2a\u7279\u6027,\u90a3\u4e48\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528\u6db2\u4f53DNA\u548c\u86cb\u767d\u8d28\u76f4\u63a5\u9020\u51fa\u4e00\u53ea\u871c\u8702. \u5f53\u7136\u8fd9\u4e9b\u57fa\u56e0\u6a21\u677f\u548c\u57fa\u56e0\u6837\u677f\u4e00\u6837,\u90fd\u662f\u53ef\u4ee5\u590d\u5236\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACAw==",
                    "title": "\u57fa\u56e0\u6a21\u677f",
                    "tooltip": "<strong>\u57fa\u56e0\u6a21\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7a7a\u767d\u7684\u57fa\u56e0\u6837\u672c"
                },
                {
                    "name": "\u57fa\u56e0\u5206\u79bb\u5668",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2096.png",
                    "x": 396.0,
                    "y": 432.0,
                    "data": "\u57fa\u56e0\u5206\u79bb\u5668\u4e0e\u57fa\u56e0\u6c60\u7684\u5de5\u4f5c\u65b9\u5f0f\u7c7b\u4f3c,\u4f46\u4e0d\u4f1a\u5b8c\u5168\u7834\u574f\u57fa\u56e0.\u5b83\u4f1a\u4ece\u871c\u8702\u3001\u6811\u82d7\u6216\u82b1\u8fd9\u7c7b\u6709\u673a\u4f53\u4e2d\u968f\u673a\u63d0\u53d6\u57fa\u56e0\u7247\u6bb5,\u5e76\u590d\u5236\u5230\u7a7a\u767d\u5e8f\u5217\u4e2d.\u6b64\u8fc7\u7a0b\u9700\u8981\u4e59\u9187\u4f5c\u4e3a\u6eb6\u5242,\u8fd8\u9700\u8981\u9176\u6765\u5207\u65adDNA.\u5728\u5206\u6790\u5e8f\u5217\u4e4b\u524d,\u6211\u4eec\u4e0d\u77e5\u9053\u8be5\u57fa\u56e0\u662f\u4ec0\u4e48.\u4f46\u662f,\u5728\u9001\u7ed9\u6d4b\u5e8f\u4eea\u4e4b\u524d\u4e0d\u9700\u8981\u5bf9\u5176\u8fdb\u884c\u5206\u6790.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIMA==",
                    "title": "\u57fa\u56e0\u5206\u79bb\u5668",
                    "tooltip": "<strong>\u57fa\u56e0\u5206\u79bb\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u6c60"
                },
                {
                    "name": "\u53bb\u5bfb\u627e\u4e00\u4e9b\u70ed\u5e26\u871c\u8702",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/992.png",
                    "x": 156.0,
                    "y": 60.0,
                    "data": "\u63a5\u4e0b\u6765,\u4f60\u9700\u8981\u627e\u5230\u4e00\u4e9b\u70ed\u5e26\u871c\u8702. \u8fd9\u79cd\u871c\u8702\u7684\u8702\u5de2\u53ef\u4ee5\u5728\u4e1b\u6797\u751f\u7269\u7fa4\u7cfb\u627e\u5230. \u4f60\u8981\u5c0f\u5fc3\u8fd9\u4e9b\u871c\u8702,\u5b83\u4eec\u653b\u51fb\u6027\u5f88\u5f3a,\u53ef\u4ee5\u4f7f\u4f60\u4e2d\u6bd2. \u70ed\u5e26\u871c\u8702\u7684\u4ea7\u7269\u662f\u70ed\u5e26\u8702\u7a9d,\u70ed\u5e26\u8702\u7a9d\u53ef\u4ee5\u63d0\u53d6\u51fa\u5236\u9020\u517b\u8702\u5458\u5957\u88c5\u6240\u9700\u8981\u7684\u4e1d\u7f15.\u8bd5\u7740\u627e\u4e9b\u8702\u5de2\u4ee5\u83b7\u53d6\u539f\u59cb\u7684\u871c\u8702.\u8981\u662f\u627e\u4e0d\u7740,\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u751f\u7269\u7fa4\u7cfb\u6307\u5357\u9488\u4ee5\u5bfb\u627e\u7279\u5b9a\u751f\u7269\u7fa4\u7cfb.</br>\u8bd1\u8005\u6ce8:\u670d\u52a1\u5668\u614e\u7528...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD4A==",
                    "title": "\u53bb\u5bfb\u627e\u4e00\u4e9b\u70ed\u5e26\u871c\u8702",
                    "tooltip": "<strong>\u53bb\u5bfb\u627e\u4e00\u4e9b\u70ed\u5e26\u871c\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4e2a\u65b0\u5bb6"
                },
                {
                    "name": "\u8702\u7bb1\u7ec4\u5347\u7ea7",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2091.png",
                    "x": 204.0,
                    "y": 432.0,
                    "data": "\u8fd9\u4e9b\u8702\u7bb1\u7ec4\u7684\u57fa\u7840\u5347\u7ea7\u4f7f\u5b83\u66f4\u5f3a\u5927.</br></br>\u6846\u67b6\u680f-\u81ea\u52a8\u5316-\u4f7f\u8702\u7bb1\u7ec4\u53ef\u4ee5\u5b89\u88c5\u6846\u67b6,\u6bcf\u4e2a\u53ef\u88c5\u4e09\u4e2a\u6846\u67b6.\u6bcf\u4e2a\u871c\u8702\u523b(27s)\u6d88\u8017\u00a755\u70b9\u8010\u4e45\u00a7r.\u5982\u679c\u5728\u5f53\u524d\u523b\u8010\u4e45\u8017\u5c3d,\u90a3\u4e48\u6846\u67b6\u5c31\u4f1a\u5931\u6548.</br>\u7a33\u5b9a\u5668-\u4f7f\u871c\u8702\u7a81\u53d8\u7684\u51e0\u7387\u4e3a0,\u4f46\u662f\u4e0d\u5f71\u54cd\u57fa\u56e0\u7684\u81ea\u7531\u7ec4\u5408.\u975e\u5e38\u9002\u5408\u5c06\u67d0\u6761\u7279\u6027\u57f9\u80b2\u8fdb\u871c\u8702\u57fa\u56e0.</br>\u8702\u7bb1\u7ec4\u80fd\u91cf\u63a5\u53e3-\u4e3a\u8702\u7bb1\u7ec4\u4e2d\u9700\u8981\u80fd\u91cf\u7684\u6846\u67b6\u4f9b\u80fd</br>\u5b75\u5316\u95f4-\u5b75\u5316\u871c\u8702\u5e7c\u4f53,\u7528\u4e8e\u6ce8\u5165\u57fa\u56e0\u6216\u5236\u9020\u989d\u5916\u7684\u96c4\u5cf0.\u4e0d\u517c\u5bb9\u57fa\u56e0\u5de5\u4e1a\u871c\u8702...</br>\u8702\u7bb1\u7ec4\u6ee4\u7f51-\u6536\u96c6\u871c\u8702\u5de5\u4f5c\u8303\u56f4\u5185\u7684\u82b1\u7c89,\u800c\u4e0d\u662f\u8ba9\u5b83\u4eec\u7ed9\u6811\u6388\u7c89,\u6536\u96c6\u7684\u82b1\u7c89\u53ef\u4ee5\u624b\u52a8\u4f7f\u7528. \u9700\u8981\u624b\u52a8\u5c06\u4e1d\u7ef8\u653e\u5165\u8702\u7bb1\u7ec4\u4e2d.</br>\u8702\u7bb1\u7ec4\u514b\u9686\u76d2-\u5728\u8702\u7bb1\u7ec4\u5468\u56f4\u751f\u6210\u8702\u5de2,\u5176\u5185\u4e3a\u5351\u8d31\u79cd\u8702\u540e.\u65b0\u751f\u6210\u7684\u8702\u540e\u4e3a\u5185\u90e8\u84dd\u672c\u7684\u5b8c\u5168\u57fa\u56e0\u514b\u9686\u4f53.\u514b\u9686\u76d2\u9700\u8981\u8702\u738b\u6d46\u6216\u82ac\u82b3\u5757,\u800c\u540e\u8005\u6548\u7387\u66f4\u9ad8.</br></br>[note]\u8bf7\u6ce8\u610f,\u6240\u6709\u7684\u5347\u7ea7\u65b9\u5757\u90fd\u5fc5\u987b\u5728\u8702\u7bb1\u7ec4\u7684\u5e95\u90e8\u4e24\u5c42.\u540c\u65f6\u4e2d\u592e\u65b9\u5757\u4e0d\u53ef\u4e3a\u5347\u7ea7\u65b9\u5757,\u4e0d\u8fc7\u5e95\u90e8\u4e2d\u592e\u65b9\u5757\u53ef\u4ee5\u4e3a\u5347\u7ea7\u65b9\u5757.[/note]</br></br>[warn]\u9700\u8981\u80fd\u91cf\u65f6,\u8702\u7bb1\u7ec4\u80fd\u91cf\u63a5\u53e3\u4f1a\u5438\u6536\u6240\u6709\u7535\u6d41,\u5145\u6ee1\u4e00\u4e2a\u6781\u5c0f\u7684\u7f13\u5b58.\u6240\u4ee5\u8bf7\u4f7f\u7528EIO\u7535\u5bb9\u6216\u7c7b\u4f3c\u7684\u8bbe\u5907,\u9632\u6b62\u5176\u6d6a\u8d39\u4e3b\u7ebf\u7535\u6d41.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIKw==",
                    "title": "\u8702\u7bb1\u7ec4\u5347\u7ea7",
                    "tooltip": "<strong>\u8702\u7bb1\u7ec4\u5347\u7ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8702\u7bb1\u7ec4"
                },
                {
                    "name": "\u6d78\u6e0d\u6846\u67b62",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1113.png",
                    "x": 156.0,
                    "y": 276.0,
                    "data": "\u6d78\u6e0d\u6846\u67b6\u6bd4\u672a\u5904\u7406\u6846\u67b6\u66f4\u597d,\u6bcf\u4e00\u4e2a\u6d78\u6e0d\u6846\u67b6\u90fd\u53ef\u4ee5\u4f7f\u871c\u8702\u7684\u4ea7\u91cf\u7ffb\u500d.\u76f8\u6bd4\u672a\u5904\u7406\u6846\u67b6\u6765\u8bf4\u6d78\u6e0d\u6846\u67b6\u62e5\u6709\u66f4\u9ad8\u7684\u8010\u4e45,\u4f46\u662f\u6bd4\u6807\u5b9a\u6846\u67b6\u7684\u8010\u4e45\u8981\u4f4e\u4e00\u4e9b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEWQ==",
                    "title": "\u6d78\u6e0d\u6846\u67b6",
                    "tooltip": "<strong>\u6d78\u6e0d\u6846\u67b62</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4e2a\u65b0\u5bb6"
                },
                {
                    "name": "\u53ea\u8981\u6700\u597d:\u591c\u884c\u6027",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/527.png",
                    "x": 600.0,
                    "y": 84.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81.\u871c\u8702\u6ca1\u65e5\u6ca1\u591c,\u6574\u65e5\u6574\u591c\u5730\u5de5\u4f5c!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACDw==",
                    "title": "\u53ea\u8981\u6700\u597d:\u591c\u884c\u6027",
                    "tooltip": "<strong>\u53ea\u8981\u6700\u597d:\u591c\u884c\u6027</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u5fd9\u788c\u7684\u871c\u8702\u5c3d\u60c5\u55e1\u9e23",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2092.png",
                    "x": 204.0,
                    "y": 384.0,
                    "data": "\u8fd9\u4e9b\u5347\u7ea7\u901a\u8fc7\u4f7f\u871c\u8702\u4fdd\u6301\u5de5\u4f5c(\u4e0d\u56e0\u73af\u5883\u56e0\u7d20\u505c\u6b62\u5de5\u4f5c),\u6781\u5927\u5730\u63d0\u5347\u4f60\u7684\u751f\u4ea7\u6548\u7387.</br></br>\u6321\u96e8\u65b9\u5757-\u53ef\u5728\u96e8\u4e2d\u5de5\u4f5c</br>\u8702\u7bb1\u7ec4\u65e5\u5149\u706f-\u4e3a\u6ca1\u6709\u591c\u884c\u6027\u7684\u871c\u8702\u63d0\u4f9b\u5149\u7167</br>\u8702\u7bb1\u7ec4\u52a0\u70ed\u5668-\u5c06\u5e73\u5747\u6e29\u5ea6\u63d0\u9ad820\uff05(\u9700\u8981\u80fd\u91cf)</br>\u8702\u7bb1\u7ec4\u98ce\u6247-\u5c06\u5e73\u5747\u6e29\u5ea6\u964d\u4f4e20\uff05(\u9700\u8981\u80fd\u91cf)</br>\u8702\u7bb1\u7ec4\u4fdd\u6e7f\u5668-\u6709\u4e24\u79cd\u6a21\u5f0f,\u6c34\u548c\u5ca9\u6d46</br>\u5ca9\u6d46-\u6e29\u5ea6\u63d0\u9ad810\uff05,\u6e7f\u5ea6\u964d\u4f4e20\uff05</br>\u6c34-\u6e29\u5ea6\u964d\u4f4e10\uff05,\u6e7f\u5ea6\u63d0\u9ad820\uff05</br></br>\u5f88\u9057\u61be,\u6682\u65f6\u6ca1\u6709\u5347\u7ea7\u53ef\u4ee5\u8ba9\u8fd9\u4e9b\u871c\u8702\u559c\u6b22\u7a74\u5c45\u73af\u5883...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAILA==",
                    "title": "\u5fd9\u788c\u7684\u871c\u8702\u5c3d\u60c5\u55e1\u9e23",
                    "tooltip": "<strong>\u5fd9\u788c\u7684\u871c\u8702\u5c3d\u60c5\u55e1\u9e23</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8702\u7bb1\u7ec4"
                },
                {
                    "name": "\u8bf1\u53d8\u673a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/508.png",
                    "x": 396.0,
                    "y": 324.0,
                    "data": "\u7b49\u5f85\u7a81\u53d8\u7684\u8fc7\u7a0b\u662f\u65e2\u6f2b\u957f\u53c8\u607c\u4eba,\u800c\u4e14\u5927\u90e8\u5206\u7a81\u53d8\u7684\u7ed3\u679c\u5f88\u4ee4\u4eba\u6cae\u4e27.\u4f46\u662f\u6709\u4e86\u8fd9\u53f0\u673a\u5668,\u4f60\u53ef\u4ee5100\uff05\u7684\u5f97\u5230\u7eaf\u79cd\u7684\u7a81\u53d8\u4ea7\u7269. \u5982\u679c\u516c\u4e3b\u8702\u548c\u96c4\u5cf0\u7684\u7ec4\u5408\u6709\u591a\u79cd\u7a81\u53d8\u4ea7\u7269,\u90a3\u4e48\u7a81\u53d8\u7684\u7ed3\u679c\u4e5f\u4f1a\u662f\u968f\u673a\u7684.\u4f46\u662f\u90a3\u53c8\u5982\u4f55\uff1f</br></br>[note]\u73b0\u5728,\u5728\u6700\u540e\u7684\u4efb\u52a1\u680f(\u5956\u52b1\u533a),\u4f60\u53ef\u4ee5\u5c06\u4f60\u7684\u6218\u5229\u54c1\u888b(Bees-Advanced)\u5347\u7ea7\u4e3a\u6218\u5229\u54c1\u888b(Bees-Expert).</br></br>\u5982\u679c\u4f60\u4e4b\u524d\u6ca1\u80fd\u4ece\u67d0\u4e2a\u54c1\u79cd\u7684\u871c\u8702\u8eab\u4e0a\u83b7\u53d6\u7279\u6b8a\u6548\u679c\u7684\u57fa\u56e0,\u8fd9\u662f\u4e2a\u91cd\u65b0\u83b7\u53d6\u7684\u6cd5\u5b50.</br></br>\u5236\u9020\u5b83\u9700\u8981\u7845\u5ca9\u8702,\u4ee5\u53ca\u5176\u4ed6\u57fa\u56e0\u5de5\u4e1a\u7684\u673a\u5668.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB_A==",
                    "title": "\u8bf1\u53d8\u673a",
                    "tooltip": "<strong>\u8bf1\u53d8\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c6\u9636\u6bb5(LuV)</br>\u626e\u6f14\u4e0a\u5e1d"
                },
                {
                    "name": "\u53ea\u8981\u6700\u597d:\u8010\u96e8\u98de\u884c",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/526.png",
                    "x": 648.0,
                    "y": 84.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81.\u96e8\u4e2d\u517b\u8702!\u4f46\u8fd8\u662f\u8bf7\u786e\u4fdd\u4f60\u7684GT\u673a\u5668\u4e0d\u5728\u96e8\u4e2d!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACDg==",
                    "title": "\u53ea\u8981\u6700\u597d:\u8010\u96e8\u98de\u884c",
                    "tooltip": "<strong>\u53ea\u8981\u6700\u597d:\u8010\u96e8\u98de\u884c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/500.png",
                    "x": 12.0,
                    "y": 108.0,
                    "data": "\u50cf\u5f80\u5e38\u4e00\u6837,\u5982\u679c\u4f60\u60f3\u5f00\u59cb\u517b\u6b96\u871c\u8702,\u9996\u5148\u8981\u51c6\u5907\u4e00\u4e9b\u6700\u57fa\u7840\u7684\u4e1c\u897f\u2014\u2014\u2014\u2014\u6bd4\u5982\u4e00\u4e2a\u6355\u866b\u7f51.\u8981\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1,\u4f60\u9700\u8981\u5236\u4f5cGT\u7684\u6355\u866b\u7f51.\u7a0d\u540e\u4f60\u53ef\u4ee5\u81ea\u884c\u9009\u62e9\u5236\u4f5c\u5965\u672f\u6355\u866b\u7f51\u6216\u8005\u6da1\u8f6e\u6355\u866b\u7f513000.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB9A==",
                    "title": "\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5",
                    "tooltip": "<strong>\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248"
                },
                {
                    "name": "\u4fdd\u6301\u51b7\u9759,\u7834\u6d6a\u4e58\u8702(Keep Calm and Bee On)",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2255.png",
                    "x": 36.0,
                    "y": 156.0,
                    "data": "\u6b64\u6846\u67b6\u53ef\u4ee5\u8ba9\u4f60\u7684\u871c\u8702\u6301\u7eed\u66f4\u957f\u65f6\u95f4,\u5e76\u540c\u65f6\u63d0\u5347\u6d3b\u52a8\u8303\u56f4\u4ee5\u5e2e\u52a9\u6797\u4e1a\u6811\u6728\u57f9\u80b2.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIzw==",
                    "title": "\u4fdd\u6301\u51b7\u9759,\u7834\u6d6a\u4e58\u8702(Keep Calm and Bee On)",
                    "tooltip": "<strong>\u4fdd\u6301\u51b7\u9759,\u7834\u6d6a\u4e58\u8702(Keep Calm and Bee On)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de7\u514b\u529b\u6846\u67b6"
                },
                {
                    "name": "\u53ea\u8981\u6700\u597d:\u751f\u80b2\u80fd\u529b",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/521.png",
                    "x": 744.0,
                    "y": 180.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81. \u871c\u8702\u5230\u5904\u90fd\u662f!</br></br>[note]\u751f\u80b2\u80fd\u529b4\u662f\u57f9\u80b2\u871c\u8702\u7684\u91cd\u8981\u5c5e\u6027,\u4f46\u751f\u80b2\u80fd\u529b1\u5374\u662f\u871c\u8702\u6295\u5165\u751f\u4ea7\u65f6\u4f60\u6700\u9700\u8981\u7684\u5c5e\u6027.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACCQ==",
                    "title": "\u53ea\u8981\u6700\u597d:\u751f\u80b2\u80fd\u529b",
                    "tooltip": "<strong>\u53ea\u8981\u6700\u597d:\u751f\u80b2\u80fd\u529b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u4e1d\u6ed1\u8702\u7a9d",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/993.png",
                    "x": 156.0,
                    "y": 12.0,
                    "data": "\u5904\u7406\u4e1d\u6ed1\u8702\u7a9d\u53ef\u4ee5\u5f97\u5230\u4e1d\u6ed1\u8702\u80f6,\u518d\u6b21\u5904\u7406\u4e1d\u6ed1\u8702\u80f6\u53ef\u4ee5\u5f97\u5230\u5236\u4f5c\u517b\u8702\u5458\u5957\u88c5\u6240\u9700\u8981\u7684\u4e1d\u7f15.</br></br>\u8fd9\u662f\u975e\u5e38\u6f2b\u957f\u7684\u8fc7\u7a0b,\u6240\u4ee5\u591a\u5806\u51e0\u4e2a\u5427.</br></br>\u8fd9\u4e2a\u914d\u65b9\u53ef\u4ee5\u4f7f\u7528\u683c\u96f7\u6216\u8005\u6797\u4e1a\u7684\u79bb\u5fc3\u673a\u6765\u8fdb\u884c\u5904\u7406. \u800c\u60f3\u8981\u5904\u7406\u66f4\u9ad8\u7ea7(\u4e5f\u66f4\u6709\u7528)\u7684\u8702\u7a9d,\u53ea\u80fd\u4f7f\u7528GT\u79bb\u5fc3\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD4Q==",
                    "title": "\u4e1d\u6ed1\u8702\u7a9d",
                    "tooltip": "<strong>\u4e1d\u6ed1\u8702\u7a9d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53bb\u5bfb\u627e\u4e00\u4e9b\u70ed\u5e26\u871c\u8702</br>\u8f6c\u554a\u8f6c\u554a\u8f6c\u554a\u8f6c..."
                },
                {
                    "name": "\u871c\u8702\u55e1\u55e1\u4f5c\u54cd\u8fd8\u662f\u5c16\u53eb\uff1f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1515.png",
                    "x": 84.0,
                    "y": 276.0,
                    "data": "\u8fd9\u4e9b\u6846\u67b6\u4f1a\u4f7f\u7a81\u53d8\u7684\u53d1\u751f\u7387\u589e\u52a0,\u5b83\u4eec\u8d85\u7ea7\u6709\u7528.</br></br>\u6309\u4f4fShift\u5373\u53ef\u67e5\u770b\u8fd9\u4e9b\u6846\u67b6\u7684\u5c5e\u6027,\u4f60\u5e94\u8be5\u6ce8\u610f\u5230\u4e86\u6709\u4e9b\u6570\u636e\u65c1\u8fb9\u8fd8\u6709\u62ec\u53f7,\u62ec\u53f7\u5185\u7684\u6570\u5b57\u662f\u6700\u5927\u53e0\u52a0\u540e\u7684\u6570\u636e.\u8fd9\u53ea\u5bf9\u66f4\u591a\u871c\u8702(Extra-Bees)\u7684\u6846\u67b6\u6709\u6548.</br></br>\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u6846\u67b6\u65f6,\u5176\u5404\u9879\u6570\u636e\u8ba1\u7b97\u65f6\u662f\u76f8\u4e58\u800c\u4e0d\u662f\u76f8\u52a0,\u6240\u4ee5\u5728\u8702\u7bb1\u7ec4\u4e2d\u653e\u51654\u4e2a\u6846\u67b6\u540e,\u7075\u9b42\u6846\u67b6\u5c31\u8fbe\u5230\u4e86\u6781\u9650,\u800c\u52a0\u901f\u6846\u67b6\u9700\u8981\u4f7f\u75289\u4e2a\u624d\u4f1a\u8fbe\u5230\u6781\u9650,\u5f53\u7136\u8fd9\u53ea\u662f\u540c\u79cd\u6846\u67b6\u7684\u6781\u9650,\u4f60\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u589e\u52a0.</br></br>\u4e3e\u4e2a\u4f8b\u5b50,5x[\u7535\u523a\u6fc0\u5668]3x[\u57fa\u56e0\u7a81\u53d8\u5668]4x1.8x[\u6846\u67b6]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF6w==",
                    "title": "\u871c\u8702\u55e1\u55e1\u4f5c\u54cd\u8fd8\u662f\u5c16\u53eb\uff1f",
                    "tooltip": "<strong>\u871c\u8702\u55e1\u55e1\u4f5c\u54cd\u8fd8\u662f\u5c16\u53eb\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d78\u6e0d\u6846\u67b62"
                },
                {
                    "name": "\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/507.png",
                    "x": 300.0,
                    "y": 276.0,
                    "data": "\u8702\u623f\u53ef\u4ee5\u7a33\u5b9a\u871c\u8702\u7684\u7a81\u53d8.\u4f8b\u5982,\u5982\u679c\u4f60\u6210\u529f\u57f9\u80b2\u4e86\u4e24\u79cd\u4e0d\u540c\u7684\u871c\u8702,\u4f46\u9690\u6027\u57fa\u56e0\u4e0e\u663e\u6027\u57fa\u56e0\u4e0d\u4e00\u81f4,\u4f7f\u7528\u8702\u623f\u53ef\u4ee5\u5728\u57f9\u80b2\u7eaf\u5408\u5b50\u7684\u540c\u65f6\u9632\u6b62\u5b83\u4eec\u7a81\u53d8\u4e3a\u522b\u7684\u79cd\u7c7b.</br></br>\u800c\u60f3\u8981\u8ba9\u5b83\u4eec\u6742\u4ea4\u5f62\u6210\u65b0\u7684\u7269\u79cd,\u4f60\u9700\u8981\u4e2a\u65b0\u73a9\u610f-\u8702\u7bb1.\u60f3\u8981\u5efa\u9020\u5b83\u4eec,\u4f60\u9700\u8981\u6728\u5de5\u673a\u548c\u6d78\u6e0d\u6846\u67b6,\u4ee5\u53ca\u79cd\u5b50\u6cb9\u548c\u6742\u915a\u6cb9-\u9700\u8981\u76f8\u5f53\u7684\u5de5\u4e1a\u6c34\u51c6!\u6216\u8005\u5982\u679c\u4f60\u8fd0\u6c14\u597d,\u4f60\u53ef\u4ee5\u627e\u5230\u517b\u8702\u5458\u6751\u6c11\u7136\u540e\u8ddf\u4ed6\u4e70\u70b9.\u6216\u8bb8\u4f60\u53ef\u4ee5\u8ba9\u8fd9\u4e2a\u6751\u6c11\u4e5f\u00a7l\u5e78\u8fd0\u5730\u00a7r\u9020\u51fa\u66f4\u591a\u7684\u517b\u8702\u5458\u6751\u6c11?\u8981\u662f\u4e18\u6bd4\u7279\u548c\u4ed6\u7684\u5f13\u7bad\u521a\u597d\u5c31\u5728\u9644\u8fd1\u5c31\u597d\u4e86...</br></br>\u7a7a\u8702\u7bb1\u7684\u751f\u4ea7\u6548\u7387\u5f88\u4f4e,\u4e8b\u5b9e\u4e0a\u6bd4\u7b80\u6613\u8702\u623f\u90fd\u4f4e\u4e0d\u5c11.\u4f46\u8702\u7bb1\u6709\u4e24\u5927\u4f18\u52bf-\u6846\u67b6\u548c\u81ea\u52a8\u5316.\u4f60\u73b0\u5728\u53ef\u4ee5\u5728\u5176\u5185\u653e\u5165\u4f60\u7684\u672a\u5904\u7406\u6846\u67b6\u6216\u6d78\u6e0d\u6846\u67b6\u6765\u63d0\u5347\u4ea7\u51fa-\u800c\u4e14\u8fd9\u79cd\u589e\u76ca\u662f\u53ef\u53e0\u52a0\u7684.\u6240\u4ee53\u4e2ax2\u6846\u67b6\u53ef\u4ee5\u7ed9\u4f602*2*2",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB-w==",
                    "title": "\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed",
                    "tooltip": "<strong>\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d78\u6e0d\u6846\u67b62"
                },
                {
                    "name": "\u53ea\u6709\u6700\u574f: \u6811\u6728\u9500\u6bc1!",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2749.png",
                    "x": 744.0,
                    "y": 324.0,
                    "data": "\u4e3a\u90a3\u4e9b\u4e0d\u559c\u6b22\u82b1\u8349\u6811\u6728\u7684\u4eba\u51c6\u5907 :(",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKvQ==",
                    "title": "\u53ea\u6709\u6700\u574f: \u6811\u6728\u9500\u6bc1!",
                    "tooltip": "<strong>\u53ea\u6709\u6700\u574f: \u6811\u6728\u9500\u6bc1!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u8ba9\u871c\u8702\u4f4f\u5f97\u66f4\u8212\u670d",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2082.png",
                    "x": 252.0,
                    "y": 432.0,
                    "data": "\u9002\u5e94\u6027\u8c03\u6574\u5668\u662f\u4f60\u57f9\u80b2\u871c\u8702\u7684\u5173\u952e\u673a\u5668.  \u6709\u4e86\u5927\u91cf\u7684\u80fd\u91cf\u548c\u9002\u5f53\u7684\u914d\u6599,\u4f60\u5c31\u80fd\u4f7f\u871c\u8702\u5728\u4efb\u4f55\u5730\u65b9\u8301\u58ee\u6210\u957f.\u63a8\u8350\u4f7f\u7528EIO\u7684\u7a7a\u95f4\u4f20\u9001\u5668\u4e3a\u8bbe\u5907\u4f9b\u80fd.\u4f46\u662f,\u5373\u4f7f\u871c\u8702\u80fd\u591f\u5fcd\u53d7\u5404\u79cd\u6c14\u5019\u5e76\u751f\u4ea7,\u53ef\u5b83\u4eec\u53ea\u6709\u5728\u6700\u559c\u6b22\u7684\u73af\u5883\u4e0b\u624d\u4f1a\u4ea7\u51fa\u7279\u6b8a\u4ea7\u7269.\u628a\u871c\u8702\u548c\u8fd9\u4e9b\u7269\u54c1\u4e00\u8d77\u653e\u5165\u6765\u8c03\u6574\u871c\u8702\u7684\u57fa\u56e0:</br></br>\u96ea\u7403-\u66f4\u5f3a\u7684\u4f4e\u6e29\u8010\u53d7\u6027</br>\u5ca9\u6d46-\u66f4\u5f3a\u7684\u9ad8\u6e29\u8010\u53d7\u6027</br>\u6c99\u5b50-\u66f4\u5f3a\u7684\u8010\u65f1\u6027</br>\u6c34-\u66f4\u5f3a\u7684\u8010\u6e7f\u6027</br></br>\u4f60\u5e94\u8be5\u77e5\u9053\u9002\u5e94\u6027\u8c03\u6574\u5668\u4e0d\u4f1a\u8fd4\u56de\u80f6\u56ca\u6216\u5355\u5143. \u8c03\u6574\u9002\u5e94\u6027\u9700\u8981\u7684\u7269\u54c1\u6570\u91cf\u975e\u5e38\u968f\u673a.</br></br>[note]\u4e00\u4e2a\u5f88\u597d\u7684\u5f00\u5c40\u7b56\u7565\u662f\u4f7f\u7528\u4e00\u53ea\u5df2\u7ecf\u62e5\u6709\u5168 1\u5c5e\u6027\u7684\u871c\u8702. \u7136\u540e\u4f60\u5c06\u6765\u53ef\u4ee5\u5728\u4efb\u610f\u65b9\u5411\u7ee7\u7eed\u63d0\u9ad8\u5b83! \u4f60\u5e76\u4e0d\u9700\u8981\u4f7f\u7528\u5ca9\u6d46\u5982\u679c\u4f60\u4e0d\u60f3\u8fd9\u6837\u505a. \u4e5f\u4e0d\u518d\u9700\u8981\u5355\u5143\u4e86. \u4f60\u53ef\u4ee5\u53ea\u4f7f\u7528\u6c99\u5b50\u548c\u96ea\u7403.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIIg==",
                    "title": "\u8ba9\u871c\u8702\u4f4f\u5f97\u66f4\u8212\u670d",
                    "tooltip": "<strong>\u8ba9\u871c\u8702\u4f4f\u5f97\u66f4\u8212\u670d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!"
                },
                {
                    "name": "\u626e\u6f14\u4e0a\u5e1d",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/506.png",
                    "x": 348.0,
                    "y": 324.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u871c\u8702\u7684\u6742\u4ea4\u548c\u53d8\u5f02\u4e0d\u518d\u968f\u673a,\u5982\u4f60\u6240\u613f,\u4f60\u9700\u8981\u8bf1\u53d8\u5242. \u8fd9\u79cd\u7eff\u8272\u7684\u3001\u81ed\u81ed\u7684\u6db2\u4f53\u9700\u8981\u4ece\u653e\u5c04\u6027\u83cc\u6ce5\u4e2d\u63d0\u70bc\u51fa\u6765,\u4f46\u662f\u8fd9\u79cd\u7ec6\u83cc\u4f3c\u4e4e\u53ea\u6709\u5728\u706b\u661f\u4e0a\u624d\u80fd\u627e\u5230.\u6240\u4ee5\u7b49\u4f60\u767b\u9646\u706b\u661f\u4e4b\u540e\u518d\u56de\u6765\u770b\u770b\u5427.</br></br>\u5728\u6b64\u671f\u95f4,\u4f60\u53ef\u4ee5\u5f00\u59cb\u7814\u7a76\u57fa\u56e0\u5de5\u7a0b\u8fd9\u4e2amod\u4e86,\u867d\u7136\u6211\u4eec\u77e5\u9053\u57fa\u56e0\u5de5\u4e1a\u7279\u522b\u597d\u7528\u2026\u2026\u4f46\u662f\u770b\u770b\u5408\u6210\u8868,\u4f60\u5c31\u4f1a\u660e\u767d\u4e3a\u4ec0\u4e48\u4f60\u5e94\u8be5\u7814\u7a76\u57fa\u56e0\u5de5\u7a0b\u4e86.</br></br>[note]\u5f53\u4f60\u80fd\u9020\u7ec6\u83cc\u57f9\u517b\u7f38\u4e4b\u540e,\u8bb0\u5f97\u591a\u641e\u70b9\u83cc\u6ce5.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB-g==",
                    "title": "\u626e\u6f14\u4e0a\u5e1d",
                    "tooltip": "<strong>\u626e\u6f14\u4e0a\u5e1d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed"
                },
                {
                    "name": "\u57fa\u56e0\u6c60",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2095.png",
                    "x": 348.0,
                    "y": 432.0,
                    "data": "\u53e6\u4e00\u4e2a\u91cd\u8981\u8d44\u6e90\u5c31\u662f\u539f\u751fDNA. \u539f\u751fDNA\u53ef\u4ee5\u4ece\u871c\u8702\u3001\u6811\u6216\u82b1\u7b49\u4efb\u4f55\u53ef\u7e41\u6b96\u7684\u6709\u673a\u4f53\u4e2d\u83b7\u5f97,\u4f7f\u7528\u57fa\u56e0\u6c60\u6765\u6536\u96c6.  \u57fa\u56e0\u6c60\u9700\u8981\u4e59\u9187\u548c\u9176\u6765\u5206\u89e3\u6709\u673a\u4f53\u6765\u4ea7\u751f\u539f\u751fDNA.\u6ce8\u610f,\u8fd9\u4e2a\u8fc7\u7a0b\u53ea\u4f1a\u4ea7\u751f\u539f\u751fDNA,\u4e0d\u4fdd\u5b58\u4efb\u4f55\u57fa\u56e0\u6216\u7b49\u4f4d\u57fa\u56e0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAILw==",
                    "title": "\u57fa\u56e0\u6c60",
                    "tooltip": "<strong>\u57fa\u56e0\u6c60</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6052\u6e29\u7bb1"
                },
                {
                    "name": "\u9ad8\u7ea7\u8bf1\u53d8\u673a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/513.png",
                    "x": 444.0,
                    "y": 324.0,
                    "data": "\u4e00\u4e2a\u66f4\u52a0\u5148\u8fdb\u7248\u672c\u7684\u8bf1\u53d8\u673a. \u5b83\u4f1a\u6d88\u8017\u66f4\u591a\u7684\u80fd\u91cf\u6765\u8ba9\u871c\u8702\u53d1\u751f\u7a81\u53d8,\u5e76\u4e14\u4f60\u53ef\u4ee5\u9009\u62e9\u4f60\u60f3\u8981\u7684\u7a81\u53d8\u7c7b\u578b. \u8fd9\u53f0\u673a\u5668\u662f\u751f\u4ea7\u9ad8\u7ea7\u871c\u8702\u7684\u5fc5\u5907\u5de5\u5177!</br></br>[note]\u5236\u9020\u5b83\u9700\u8981\u4e2d\u5b50\u8702.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACAQ==",
                    "title": "\u9ad8\u7ea7\u8bf1\u53d8\u673a",
                    "tooltip": "<strong>\u9ad8\u7ea7\u8bf1\u53d8\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8bf1\u53d8\u673a"
                },
                {
                    "name": "\u57fa\u56e0\u538b\u5370\u673a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/511.png",
                    "x": 504.0,
                    "y": 264.0,
                    "data": "\u901a\u8fc7\u8fd9\u4e00\u53f0\u5f3a\u5927\u7684\u673a\u5668\uff0c\u4f60\u53ef\u4ee5\u5411\u6837\u672c\u6ce8\u5c04\u57fa\u56e0\u6837\u672c\uff08\u4fee\u6539\u871c\u8702\u3001\u6811\u6728\u6216\u8774\u8776\u7684\u4efb\u4f55\u5c5e\u6027\uff09\u6765\u8c03\u6574\u4ed6\u4eec\u7684\u80fd\u529b\u3002\u57fa\u56e0\u6837\u672c\u6216\u8005\u57fa\u56e0\u6a21\u677f\u4e0d\u4f1a\u88ab\u6d88\u8017\u3002\u673a\u5668\u670930%%\u7684\u6982\u7387\u5c06\u59cb\u7956\u79cd\u964d\u7ea7\u4e3a\u5351\u8d31\u79cd\uff0c\u8fd8\u670980%\u7684\u6982\u7387\u6740\u6b7b\u5351\u8d31\u79cd\u3002\u6bcf\u6b21\u6ce8\u5c04\u90fd\u9700\u8981\u6d88\u8017\u4e00\u4e2a\u57fa\u56e0\u836f\u76bf\u3002",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB_w==",
                    "title": "\u57fa\u56e0\u538b\u5370\u673a",
                    "tooltip": "<strong>\u57fa\u56e0\u538b\u5370\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u5236\u54c1"
                },
                {
                    "name": "\u9ad8\u7ea7\u54c1\u79cd:\u6076\u9f99",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/522.png",
                    "x": 648.0,
                    "y": 324.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACCg==",
                    "title": "\u9ad8\u7ea7\u54c1\u79cd:\u6076\u9f99",
                    "tooltip": "<strong>\u9ad8\u7ea7\u54c1\u79cd:\u6076\u9f99</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u9cde\u7fc5\u76ee\u6606\u866b\u5b66\u5bb6\u7684\u80cc\u5305,\u54c8\u6b20",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2747.png",
                    "x": 204.0,
                    "y": 204.0,
                    "data": "\u6211\u4e0d\u786e\u5b9a\u8fd9\u4e9b\u5728\u4f60\u7684\u57fa\u5730\u91cc\u5230\u5904\u4e71\u98de\u7684\u8774\u8776\u6709\u4ec0\u4e48\u7528,\u4e0d\u8fc7\u8fd9\u4e2a\u5305\u4f60\u60f3\u505a\u5c31\u505a\u5457.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKuw==",
                    "title": "\u9cde\u7fc5\u76ee\u6606\u866b\u5b66\u5bb6\u7684\u80cc\u5305,\u00a7o\u54c8\u6b20\u00a7r",
                    "tooltip": "<strong>\u9cde\u7fc5\u76ee\u6606\u866b\u5b66\u5bb6\u7684\u80cc\u5305,\u54c8\u6b20</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u88c5\u8774\u8776\u7684\u7bb1\u5b50? \u771f\u7684\u5417?"
                },
                {
                    "name": "\u8981\u6709\u5149",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/518.png",
                    "x": 504.0,
                    "y": 144.0,
                    "data": "\u7ed9\u516c\u4e3b\u8702\u6ce8\u5c04\u57fa\u56e0\u6027\u72b6\u597d\u9ebb\u70e6\uff1f\u61d2\u5f97\u53bb\u5bfb\u627e\u5927\u91cf\u7684\u871c\u8702\uff1f\u8fd9\u90fd\u4e0d\u662f\u95ee\u9898,\u6709\u4e86\u8fd9\u4e2a\u6f02\u4eae\u7684\u5c0f\u88c5\u7f6e,\u4f60\u53ef\u4ee5\u7528\u5927\u91cf\u7684\u80fd\u91cf\u3001\u6db2\u4f53DNA\u548c\u86cb\u767d\u8d28\u6765\u5236\u9020\u4f60\u60f3\u8981\u7684\u4efb\u4f55\u871c\u8702. \u552f\u4e00\u7684\u7f3a\u70b9\u5c31\u662f:\u6240\u6709\u5236\u9020\u51fa\u7684\u871c\u8702\u90fd\u662f\u5351\u8d31\u79cd,\u8fd9\u610f\u5473\u7740\u8fd9\u4e9b\u5c0f\u5bb6\u4f19\u5728\u7e41\u884d90\u4e2a\u5468\u671f\u4ee5\u4e0a\u540e\u6709\u65ad\u4ee3\u7684\u53ef\u80fd\u6027.</br></br>\u5f53\u7136,\u5de5\u4e1a\u8702\u7bb1\u6709\u4e2a\u5347\u7ea7\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACBg==",
                    "title": "\u8981\u6709\u5149",
                    "tooltip": "<strong>\u8981\u6709\u5149</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u76f8\u5f53\u6b8b\u9177\u7684\u5904\u7406\u65b9\u5f0f</br>\u65bd\u74e6\u8f9b\u683c\u7684\u6db2\u5316\u673a"
                },
                {
                    "name": "\u88c5\u8774\u8776\u7684\u7bb1\u5b50? \u771f\u7684\u5417?",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2746.png",
                    "x": 204.0,
                    "y": 156.0,
                    "data": "\u5c06\u4f60\u90a3\u6beb\u65e0\u7528\u5904\u7684\u8774\u8776\u5b58\u653e\u5728\u6b64.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKug==",
                    "title": "\u88c5\u8774\u8776\u7684\u7bb1\u5b50? \u771f\u7684\u5417?",
                    "tooltip": "<strong>\u88c5\u8774\u8776\u7684\u7bb1\u5b50? \u771f\u7684\u5417?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7814\u7a76\u8774\u8776"
                },
                {
                    "name": "\u6700\u5feb\u7a81\u53d8",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2090.png",
                    "x": 36.0,
                    "y": 276.0,
                    "data": "GT++\u7684\u8bf1\u53d8\u6846\u67b6\u53ef\u4f7f\u4f60\u7684\u871c\u8702\u5728\u7728\u773c\u95f4\u5b8c\u6210\u7a81\u53d8.\u53ea\u662f\u8bb0\u5f97\u5236\u4f5c\u5b83\u7684\u65f6\u5019\u8981\u7a7f\u597d\u9632\u5316\u670d!</br></br>[note]\u4f4e\u4e8e6\u8010\u4e45\u7684\u6846\u67b6\u4f1a\u5728\u5176\u751f\u6548\u524d\u76f4\u63a5\u635f\u574f.\u6240\u4ee5\u901f\u5ea6\u53ea\u80fd\u63d0\u5347\u5230125\u500d,\u4f46\u6211\u89c9\u5f97\u5df2\u7ecf\u8db3\u591f\u4e86,\u4e0d\u662f\u5417?[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIKg==",
                    "title": "\u6700\u5feb\u7a81\u53d8",
                    "tooltip": "<strong>\u6700\u5feb\u7a81\u53d8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u871c\u8702\u55e1\u55e1\u4f5c\u54cd\u8fd8\u662f\u5c16\u53eb\uff1f"
                },
                {
                    "name": "\u7814\u7a76\u8774\u8776",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2106.png",
                    "x": 252.0,
                    "y": 156.0,
                    "data": "\u8774\u8776\u7684\u80fd\u529b\u6709\u9650,\u8fd9\u53f0\u5206\u6790\u4eea\u4f1a\u4e3a\u4f60\u8be6\u7ec6\u4ecb\u7ecd\u5b83\u4eec\u7684\u80fd\u529b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIOg==",
                    "title": "\u7814\u7a76\u8774\u8776",
                    "tooltip": "<strong>\u7814\u7a76\u8774\u8776</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898"
                },
                {
                    "name": "\u5ec9\u4ef7\u7684\u751f\u7269\u7fa4\u7cfb\u6539\u53d8",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2416.png",
                    "x": 60.0,
                    "y": 12.0,
                    "data": "\u5982\u679c\u4f60\u4e0d\u60f3\u5c06\u751f\u7269\u7fa4\u7cfb\u53d8\u66f4\u4e3a\u7279\u5b9a\u7684\u67d0\u4e00\u79cd,\u53ea\u60f3\u8ba9\u871c\u8702\u62e5\u6709\u4e2d\u6027\u7684\u73af\u5883,\u4e5f\u8bb8\u7528\u8282\u70b9\u6bd4\u8f83\u9002\u5408\u4f60.\u4f60\u53ef\u4ee5\u8bd5\u7740\u79cd\u690d\u94f6\u6811,\u8fd9\u6837\u6709\u51e0\u7387\u83b7\u5f97\u4e00\u4e2a\u7eaf\u51c0\u8282\u70b9,\u4f60\u4e5f\u53ef\u4ee5\u7528\u5404\u79cd\u65b9\u5f0f\u642c\u56de\u6765\u4e00\u4e2a\u7eaf\u51c0\u8282\u70b9.</br></br>\u8bf7\u6ce8\u610f,\"\u65e0\u80fd\u91cf\"\u7684\u7eaf\u51c0\u8282\u70b9\u4e0d\u4f1a\u6539\u53d8\u4efb\u4f55\u4e1c\u897f,\u9664\u975e\u5b83\u6709\u751f\u547d(Victus).\u4f60\u53ef\u4ee5\u8bd5\u8bd5\u51f6\u9669\u6216\u6c61\u67d3\u8282\u70b9,\u4f46...\u6709\u4e9b\u4e8b\u53ef\u6ca1\u6709\u540e\u6094\u836f.\u8282\u70b9\u7684\u5f71\u54cd\u8303\u56f4\u534a\u5f8411\u683c. \u60f3\u8981\u53d8\u56de\u539f\u6709\u751f\u7269\u7fa4\u7cfb,\u53ef\u4ee5\u4f7f\u7528\u5929\u57df\u82b1(\u534a\u5f847\u683c). \u8bf7\u6ce8\u610f,\u5ca9\u7cbe\u548c\u7cbe\u7075\u90fd\u4f1a\u5728\u9b54\u6cd5\u7c7b\u751f\u7269\u7fa4\u7cfb\u4e2d\u751f\u6210.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJcA==",
                    "title": "\u5ec9\u4ef7\u7684\u751f\u7269\u7fa4\u7cfb\u6539\u53d8",
                    "tooltip": "<strong>\u5ec9\u4ef7\u7684\u751f\u7269\u7fa4\u7cfb\u6539\u53d8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211"
                },
                {
                    "name": "\u4e00\u4e2a\u65b0\u5bb6",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/502.png",
                    "x": 156.0,
                    "y": 108.0,
                    "data": "\u65e2\u7136\u4f60\u5df2\u7ecf\u6467\u6bc1\u4e86\u53ef\u601c\u7684\u871c\u8702\u4eec\u7684\u5bb6\u56ed,\u4f60\u5c31\u5e94\u8be5\u7ed9\u5b83\u4eec\u5f04\u4e2a\u65b0\u7684.\u8fd9\u79cd\u7b80\u6613\u8702\u623f\u4e0d\u4f1a\u4f7f\u4f60\u7684\u871c\u8702\u53d1\u751f\u53d8\u5f02.\u4f46\u4f60\u8fd8\u662f\u9700\u8981\u8702\u7a9d\u6765\u4e3a\u871c\u8702\u5236\u4f5c\u66f4\u597d\u7684\u4f4f\u623f.  \u7b80\u6613\u8702\u623f\u7684\u751f\u4ea7\u901f\u5ea6\u8fd8\u4e0d\u9519,\u4f46\u4e0d\u80fd\u81ea\u52a8\u5316.</br></br>\u63d0\u793a-\u5728\u4f60\u7684\u8702\u623f\u9644\u8fd1\u79cd\u4e9b\u539f\u7248\u6811\u82d7.\u7b80\u6613\u8702\u623f\u6bd4\u8d77\"\u66f4\u597d\u7684\u4f4f\u623f\"\u67093\u500d\u7684\u6388\u7c89\u901f\u5ea6.\u871c\u8702\u4f1a\u7ed9\u6811\u6728\u6388\u7c89,\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u5f00\u59cb\u6797\u4e1a\u6811\u6728\u6742\u4ea4\u4e86.\u6211\u63a8\u8350\u4f60\u628a\u6a61\u6728\u548c\u767d\u6866\u76f8\u90bb\u79cd\u690d,\u5b83\u4eec\u4f1a\u7ed9\u4f60\u6797\u4e1a\u6811\u6728\u7684\u6742\u4ea4\u5f00\u4e2a\u597d\u5934.</br></br>\u5f53\u7136,\u5982\u679c\u4f60\u5fd8\u4e86\u91c7\u53d6\u9884\u9632\u63aa\u65bd,\u4e00\u6bb5\u65f6\u95f4\u540e\u4f60\u5c31\u4f1a\u53d1\u73b0\u81ea\u5df1\u88ab\u5927\u91cf\u8774\u8776\u6df9\u6ca1\uff0c\u8fd8\u5f88\u5361\u2026\u2026</br></br>\u4f60\u53ef\u80fd\u8fd8\u6ce8\u610f\u5230\u4e86\u5e26\u6709'\u9c9c\u82b1'\u7279\u6027\u7684\u871c\u8702\u4f1a\u8ba9\u82b1\u6269\u6563\u5f00\u6765. \u53ef\u4ee5\u5229\u7528\u8fd9\u4e00\u70b9\u83b7\u53d6\u85b0\u8863\u8349\u4e4b\u7c7b\u7684\u7f55\u89c1\u82b1\u5349.\u5982\u679c\u4f60\u4e0d\u60f3\u8ba9\u82b1\u5230\u5904\u90fd\u662f,\u53ea\u9700\u8981\u628a\u6ce5\u571f\u6216\u8005\u8349\u65b9\u5757\u6362\u6389,\u6216\u8005\u6362\u6389\u8fd9\u4e2a\u5c5e\u6027,\u4ea6\u6216\u964d\u4f4e\u6388\u7c89\u901f\u5ea6\u548c\u6d3b\u52a8\u8303\u56f4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB9g==",
                    "title": "\u4e00\u4e2a\u65b0\u5bb6",
                    "tooltip": "<strong>\u4e00\u4e2a\u65b0\u5bb6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6846\u67b6"
                },
                {
                    "name": "\u76f8\u5f53\u6b8b\u9177\u7684\u5904\u7406\u65b9\u5f0f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/516.png",
                    "x": 456.0,
                    "y": 144.0,
                    "data": "\u4f60\u5728\u57f9\u80b2\u871c\u8702\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u4ea7\u751f\u5f88\u591a\u591a\u4f59\u7684\u96c4\u5cf0(\u6216\u8005\u662f\u6811\u82d7,\u5982\u679c\u4f60\u79cd\u6811\u7684\u8bdd).\u5982\u679c\u4f60\u6ca1\u6709\u6254\u6389\u5b83\u4eec,\u4e5f\u8bb8\u4f60\u53ef\u4ee5\u628a\u5b83\u4eec\u53d8\u6210...\u6709\u7528\u7684\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACBA==",
                    "title": "\u76f8\u5f53\u6b8b\u9177\u7684\u5904\u7406\u65b9\u5f0f",
                    "tooltip": "<strong>\u76f8\u5f53\u6b8b\u9177\u7684\u5904\u7406\u65b9\u5f0f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u5236\u54c1"
                },
                {
                    "name": "\u767e\u4e07\u871c\u8702",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2089.png",
                    "x": 156.0,
                    "y": 432.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u8981\u7ec8\u6781\u7684\u871c\u8702\u751f\u4ea7\u901f\u5ea6,\u5de5\u4e1a\u8702\u7bb1\u662f\u552f\u4e00\u7684\u9053\u8def.  \u5de5\u4e1a\u8702\u7bb1\u4e2d\u7c7b\u4f3c\u6846\u67b6\u7684\u5347\u7ea7\u662f\u4e0d\u4f1a\u635f\u574f\u7684. \u4ea7\u91cf\u5347\u7ea7\u53ef\u4ee5\u53e0\u52a0\u6700\u591a8\u4e2a.\u8fd8\u6709\u8bb8\u591a\u73af\u5883\u6a21\u62df\u7c7b\u7684\u5347\u7ea7\u3001\u57fa\u56e0\u5bff\u547d\u7c7b\u5347\u7ea7\u3001\u6388\u7c89\u5347\u7ea7\u4e4b\u7c7b\u7684,\u8fd8\u6709\u6700\u5173\u952e\u7684\u81ea\u52a8\u5316\u5347\u7ea7-\u5de5\u4e1a\u5316\u91cf\u4ea7\u7684\u5173\u952e.</br></br>\u73b0\u5728\u5de5\u4e1a\u8702\u7bb1\u662fGT\u673a\u5668.\u5b83\u6700\u9ad8\u53ef\u4ee5\u63a5\u53d7UV\u7535\u538b,\u6700\u59274A\u7535\u6d41,\u4f46\u662f\u57fa\u7840\u529f\u7387\u53ea\u670937EU/t.\u4f60\u4e0d\u518d\u9700\u8981\u4e16\u754c\u52a0\u901f\u5668\u4e86,\u5e76\u4e14\u5de5\u4e1a\u8702\u7bb1\u53ea\u6709\u4e00\u4e2a\u7535\u538b\u7b49\u7ea7,\u6240\u4ee5\u4e5f\u4e0d\u5b58\u5728\u8d85\u9891.\u4f46\u662f\u6709\u5168\u65b0\u7684,\u4f5c\u7528\u7c7b\u4f3c\u4e8e\u4e16\u754c\u52a0\u901f\u5668\u7684\u00a7o\u901f\u5ea6\u5347\u7ea7\u00a7r,\u53ef\u4ee5\u76f4\u63a5\u653e\u5165\u673a\u5668\u4e2d.\u4f60\u4f1a\u7528\u5f97\u4e0a\u5b83\u4eec\u7684,\u5b83\u4eec\u53ef\u4ee5\u5927\u5e45\u63d0\u5347\u901f\u5ea6--\u540c\u65f6\u4e5f\u4f1a\u5927\u5e45\u589e\u52a0\u80fd\u8017.\u6700\u540e\u4e00\u7ea7\u7684\u901f\u5ea6\u5347\u7ea7\u4e5f\u4f1a\u63d0\u5347\u4ea7\u91cf.</br></br>\u4e0d\u8fc7\u6211\u60f3\u4e0d\u8be5\u5520\u53e8\u592a\u591a,\u53bb\u505a\u4e00\u4e2a,\u81ea\u5df1\u7422\u78e8\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIKQ==",
                    "title": "\u767e\u4e07\u871c\u8702",
                    "tooltip": "<strong>\u767e\u4e07\u871c\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8702\u7bb1\u7ec4"
                },
                {
                    "name": "\u53ea\u8981\u6700\u597d:\u5feb\u5230\u6a21\u7cca",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/524.png",
                    "x": 744.0,
                    "y": 228.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81.\u55e1\u55e1\u55e1\u55e1\u55e1\u55e1,\u52aa\u529b\u5de5\u4f5c,\u771f\u7684\u5f88\u55e1\u55e1!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACDA==",
                    "title": "\u53ea\u8981\u6700\u597d:\u5feb\u5230\u6a21\u7cca",
                    "tooltip": "<strong>\u53ea\u8981\u6700\u597d:\u5feb\u5230\u6a21\u7cca</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u5b9e\u9a8c\u53f0",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2100.png",
                    "x": 348.0,
                    "y": 384.0,
                    "data": "\u5b9e\u9a8c\u53f0\u662f\u4e2a\u53ef\u4ee5\u653e\u7f6e\u5404\u79cd\u6570\u636e\u5e93\u7684\u65b9\u5757(\u53f3\u952e\u653e\u7f6e),\u5305\u62ec\u517b\u8702\u5458\u6570\u636e\u5e93\u3001\u6797\u4e1a\u5458\u6570\u636e\u5e93\u3001\u56ed\u4e01\u6570\u636e\u5e93\u548c\u57fa\u56e0\u6570\u636e\u5e93. \u9760\u8fd1\u5e76\u53f3\u952e\u653e\u7f6e\u4e86\u6570\u636e\u5e93\u7684\u5b9e\u9a8c\u53f0,\u5373\u53ef\u8bbf\u95ee\u6570\u636e\u5e93.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAINA==",
                    "title": "\u5b9e\u9a8c\u53f0",
                    "tooltip": "<strong>\u5b9e\u9a8c\u53f0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!"
                },
                {
                    "name": "\u9057\u4f20\u5b66\u5bb6\u7684\u5de5\u5177",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2104.png",
                    "x": 252.0,
                    "y": 384.0,
                    "data": "\u5728\u5f00\u59cb\u64cd\u7eb5\u9057\u4f20\u7269\u8d28\u4e4b\u524d,\u4f60\u9700\u8981\u5404\u79cd\u5404\u6837\u7684\u5de5\u5177\u548c\u8017\u6750.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIOA==",
                    "title": "\u9057\u4f20\u5b66\u5bb6\u7684\u5de5\u5177",
                    "tooltip": "<strong>\u9057\u4f20\u5b66\u5bb6\u7684\u5de5\u5177</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!"
                },
                {
                    "name": "\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/504.png",
                    "x": 252.0,
                    "y": 108.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u517b\u8702\u4e8b\u4e1a\u66f4\u8fdb\u4e00\u6b65,\u4f60\u9700\u8981\u7528\u4e00\u79cd\u66f4\u52a0\u5148\u8fdb\u7684\u65b9\u5f0f\u6765\u89c2\u5bdf\u871c\u8702\u7684\u6240\u6709\u7279\u5f81,\u4e0d\u8bba\u662f\u663e\u6027\u8fd8\u662f\u9690\u6027\u7684. \u4f60\u53ea\u9700\u8981\u57f9\u80b2\u90a3\u4e9b\"\u7eaf\u79cd\"\u7684\u871c\u8702: \u7eaf\u79cd\u871c\u8702\u7684\u663e\u6027\u548c\u9690\u6027\u57fa\u56e0\u5b8c\u5168\u76f8\u540c.</br></br>[note]\u987a\u5e26\u4e00\u63d0,\u5e76\u975e\u8d8a'\u9ad8\u7ea7'\u7684\u7279\u6027\u8d8a\u597d.\u871c\u8702\u7684\u7279\u6027\u6709\u5f88\u591a,\u5408\u9002\u7684\u624d\u662f\u6700\u597d\u7684.\u7528\u4f60\u559c\u6b22\u7684\u90a3\u4e2a\u5c31\u884c.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB-A==",
                    "title": "\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898",
                    "tooltip": "<strong>\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4e2a\u65b0\u5bb6"
                },
                {
                    "name": "\u53ea\u8981\u6700\u597d:\u8010\u6e7f\u6027",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/520.png",
                    "x": 744.0,
                    "y": 132.0,
                    "data": "\u4e3a\u4e86\u57f9\u80b2\u6700\u597d\u7684\u871c\u8702,\u4f60\u5fc5\u987b\u53ea\u6536\u96c6\u4ed6\u4eec\u8eab\u4e0a\u6700\u597d\u7684\u6027\u72b6\u7279\u5f81.</br></br>[note]\u8010\u6e7f\u6027\u5e26\u6765\u7684\u6e7f\u5ea6\u9002\u5e94\u65e0\u6cd5\u4f7f\u871c\u8702\u5904\u4e8e\u6700\u4f73\u72b6\u6001(\u65e0\u6cd5\u751f\u4ea7\u7279\u6b8a\u4ea7\u7269),\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b,\u8010\u6e29\u6027\u51682\u5c31\u8db3\u591f\u4e86. 3+\u7684\u8010\u6e7f\u6027\u6ca1\u6709\u4ec0\u4e48\u610f\u4e49,\u56e0\u4e3a\u6e7f\u5ea6\u8303\u56f4\u6ca1\u6709\u90a3\u4e48\u5927.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACCA==",
                    "title": "\u53ea\u8981\u6700\u597d:\u8010\u6e7f\u6027",
                    "tooltip": "<strong>\u53ea\u8981\u6700\u597d:\u8010\u6e7f\u6027</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u8702\u6d46,\u65e9\u9910,\u5f88\u597d,Weirdos",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2768.png",
                    "x": 36.0,
                    "y": 216.0,
                    "data": "\u4f60\u8fd8\u8981\u8fd9\u4e2a\u505a\u4ec0\u4e48?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK0A==",
                    "title": "\u8702\u6d46,\u65e9\u9910,\u5f88\u597d,Weirdos",
                    "tooltip": "<strong>\u8702\u6d46,\u65e9\u9910,\u5f88\u597d,Weirdos</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u56e2\u7ed3\u8d77\u6765,\u871c\u8702\u4eec!"
                },
                {
                    "name": "PCR\u4eea",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2098.png",
                    "x": 492.0,
                    "y": 432.0,
                    "data": "\u8840\u6e05\u548c\u5e8f\u5217\u53ef\u4ee5\u653e\u7f6e\u5728PCR\u4eea\u4e2d,\u4ee5\u589e\u52a0\u5176\u5f3a\u5ea6\u548c\u6240\u542bDNA\u7684\u6570\u91cf.\u5728\u7528\u4e8e\u57fa\u56e0\u6ce8\u5c04\u5668\u4e4b\u524d,\u8840\u6e05\u81f3\u5c11\u9700\u8981\u805a\u5408\u4e00\u6b21.\u805a\u5408\u9700\u8981\u539f\u751fDNA\u548c\u805a\u5408\u83cc.\u539f\u751fDNA\u7531\u57fa\u56e0\u6c60\u83b7\u5f97,\u800c\u805a\u5408\u83cc\u53ef\u7528\u9aa8\u7c89\u57f9\u517b\u7ec6\u83cc\u6db2\u4f53\u83b7\u5f97.\u91d1\u7c92\u53ef\u4f5c\u4e3a\u50ac\u5316\u5242,\u52a0\u901f\u805a\u5408\u8fc7\u7a0b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIMg==",
                    "title": "PCR\u4eea",
                    "tooltip": "<strong>PCR\u4eea</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d4b\u5e8f\u4eea"
                },
                {
                    "name": "\u6d4b\u5e8f\u4eea",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2097.png",
                    "x": 444.0,
                    "y": 432.0,
                    "data": "\u83b7\u5f97\u6709\u4f60\u60f3\u8981\u7684\u57fa\u56e0\u7684DNA\u5e8f\u5217\u540e,\u4f60\u8fd8\u5f97\u628a\u5b83\u653e\u5165\u6d4b\u5e8f\u4eea\u4e2d.\u5b83\u4f7f\u7528\u8367\u5149\u67d3\u6599\u6765\u6807\u8bb0\u6b63\u786e\u7684\u987a\u5e8f,\u5e76\u5728\u5b8c\u6210\u540e\u5c06\u6570\u636e\u5b58\u5165\u57fa\u56e0\u6570\u636e\u5e93.\u91cd\u8981\u7684\u662f,\u6570\u636e\u53ea\u4f1a\u5b58\u5165\u653e\u7f6e\u673a\u5668\u8005\u7684\u6570\u636e\u5e93\u4e2d.  \u5982\u679c\u5148\u5c06\u5e8f\u5217\u653e\u5728PCR\u4eea\u4e2d\u4ee5\u589e\u52a0\u5f3a\u5ea6,\u5219\u57fa\u56e0\u7684\u6d4b\u5e8f\u901f\u5ea6\u4f1a\u66f4\u5feb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIMQ==",
                    "title": "\u6d4b\u5e8f\u4eea",
                    "tooltip": "<strong>\u6d4b\u5e8f\u4eea</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u56e0\u5206\u79bb\u5668"
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
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u53ea\u6709\u6700\u597d: \u6811\u6728\u57f9\u80b2"
                },
                {
                    "source": "\u6728\u5de5\u673a",
                    "target": "\u517b\u8702\u5458\u5957\u88c5"
                },
                {
                    "source": "\u4e1d\u7ef8",
                    "target": "\u517b\u8702\u5458\u5957\u88c5"
                },
                {
                    "source": "\u8702\u7bb1\u7ec4",
                    "target": "\u4e00\u5929\u4e00\u523a\u6fc0,\u533b\u751f\u627e\u4e0a\u95e8"
                },
                {
                    "source": "\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed",
                    "target": "\u517b\u8702\u5458\u7bb1\u5b50"
                },
                {
                    "source": "\u6d78\u6e0d\u6846\u67b62",
                    "target": "\u5de7\u514b\u529b\u6846\u67b6"
                },
                {
                    "source": "\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898",
                    "target": "\u5c06\u96c4\u5cf0\u653e\u5165\u7f50\u4e2d\u6447\u5300"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!",
                    "target": "\u6052\u6e29\u7bb1"
                },
                {
                    "source": "\u4e1d\u6ed1\u8702\u7a9d",
                    "target": "\u4e1d\u7ef8"
                },
                {
                    "source": "\u8f6c\u554a\u8f6c\u554a\u8f6c\u554a\u8f6c...",
                    "target": "\u4e1d\u7ef8"
                },
                {
                    "source": "\u94bb\u77f3\u5236\u54c1",
                    "target": "\u82b1\u7c89\u6536\u96c6\u88c5\u5907"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u53ea\u8981\u6700\u597d:\u7a74\u5c45\u6027"
                },
                {
                    "source": "\u94bb\u77f3\u5236\u54c1",
                    "target": "\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "source": "\u627e\u5230\u4e00\u4e9b\u871c\u8702",
                    "target": "\u6846\u67b6"
                },
                {
                    "source": "\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed",
                    "target": "\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!"
                },
                {
                    "source": "\u57fa\u56e0\u5206\u79bb\u5668",
                    "target": "\u5206\u6790\u4eea"
                },
                {
                    "source": "\u6d78\u6e0d\u6846\u67b62",
                    "target": "\u6807\u5b9a\u6846\u67b6(\u751f\u4ea7\u6846\u67b6)"
                },
                {
                    "source": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "target": "\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211"
                },
                {
                    "source": "\u6f6e\u6e7f\u800c\u6e29\u6696\uff1f",
                    "target": "\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211"
                },
                {
                    "source": "\u627f\u8ba4\u5427,UV\u9636\u6bb5\u4f60\u559c\u6b22\u7684Pt 1",
                    "target": "\u5de8\u578b\u5de5\u4e1a\u8702\u7bb1"
                },
                {
                    "source": "\u767e\u4e07\u871c\u8702",
                    "target": "\u5de8\u578b\u5de5\u4e1a\u8702\u7bb1"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702",
                    "target": "\u5168\u56fe\u9274"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u9ad8\u7ea7\u54c1\u79cd:\u7845\u6676"
                },
                {
                    "source": "\u57fa\u56e0\u6a21\u677f",
                    "target": "\u94bb\u77f3\u5236\u54c1"
                },
                {
                    "source": "\u4e00\u4e2a\u65b0\u5bb6",
                    "target": "\u6f6e\u6e7f\u800c\u6e29\u6696\uff1f"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u9ad8\u7ea7\u54c1\u79cd:\u535a\u58eb"
                },
                {
                    "source": "\u94bb\u77f3\u5236\u54c1",
                    "target": "\u65bd\u74e6\u8f9b\u683c\u7684\u6db2\u5316\u673a"
                },
                {
                    "source": "\u4e1d\u7ef8",
                    "target": "\u5347\u7ea7\u4f60\u7684\u6797\u4e1a\u80cc\u5305"
                },
                {
                    "source": "\u67d4\u8f6f\u7684\u76ae\u9769",
                    "target": "\u5347\u7ea7\u4f60\u7684\u6797\u4e1a\u80cc\u5305"
                },
                {
                    "source": "\u591a\u4e48\u6f02\u4eae\u7684\u6811\u53f6...",
                    "target": "\u9876\u7ea7\u5206\u6790\u4eea"
                },
                {
                    "source": "\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898",
                    "target": "\u9876\u7ea7\u5206\u6790\u4eea"
                },
                {
                    "source": "\u7814\u7a76\u8774\u8776",
                    "target": "\u9876\u7ea7\u5206\u6790\u4eea"
                },
                {
                    "source": "PCR\u4eea",
                    "target": "\u57fa\u56e0\u6ce8\u5c04\u5668"
                },
                {
                    "source": "\u871c\u8702\u4e4b\u6b7b",
                    "target": "\u871c\u8702\u5728\u9ed1\u6697\u4e2d\u55e1\u55e1\u4f5c\u54cd"
                },
                {
                    "source": "\u4e00\u4e2a\u65b0\u5bb6",
                    "target": "\u5206\u6790\u5b83\u4eec"
                },
                {
                    "source": "\u6d4b\u5e8f\u4eea",
                    "target": "\u57fa\u56e0\u6570\u636e\u5e93"
                },
                {
                    "source": "\u517b\u8702\u5458\u7bb1\u5b50",
                    "target": "\u517b\u8702\u5458\u80cc\u5305"
                },
                {
                    "source": "\u6d78\u6e0d\u6846\u67b62",
                    "target": "\u871c\u8702\u4e4b\u6b7b"
                },
                {
                    "source": "\u7814\u7a76\u8774\u8776",
                    "target": "\u8774\u8776\u6548\u5e94"
                },
                {
                    "source": "\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898",
                    "target": "\u201c\u8702\u201d\u5bcc\u4f60\u7684\u77e5\u8bc6"
                },
                {
                    "source": "\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed",
                    "target": "\u8702\u7bb1\u7ec4"
                },
                {
                    "source": "\u6d78\u6e0d\u6846\u67b62",
                    "target": "\u56e2\u7ed3\u8d77\u6765,\u871c\u8702\u4eec!"
                },
                {
                    "source": "\u8ffd\u8e2a\u4f60\u7684\u53d1\u73b0(\u82b1)",
                    "target": "\u56fe\u9274"
                },
                {
                    "source": "\u8ffd\u8e2a\u6797\u6728",
                    "target": "\u56fe\u9274"
                },
                {
                    "source": "\u201c\u8702\u201d\u5bcc\u4f60\u7684\u77e5\u8bc6",
                    "target": "\u56fe\u9274"
                },
                {
                    "source": "\u8774\u8776\u6548\u5e94",
                    "target": "\u56fe\u9274"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u53ea\u8981\u6700\u597d:\u8010\u6e29\u6027"
                },
                {
                    "source": "\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5",
                    "target": "\u627e\u5230\u4e00\u4e9b\u871c\u8702"
                },
                {
                    "source": "\u94bb\u77f3\u5236\u54c1",
                    "target": "\u57fa\u56e0\u8f6c\u6362\u673a"
                },
                {
                    "source": "\u8702\u7bb1\u7ec4",
                    "target": "X\u6218\u8b66,\u6216\u8005\u6211\u5e94\u8be5\u8bf4X-\u871c\u8702?"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u7a7a\u767d\u7684\u57fa\u56e0\u6837\u672c"
                },
                {
                    "source": "\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed",
                    "target": "\u7a7a\u767d\u7684\u57fa\u56e0\u6837\u672c"
                },
                {
                    "source": "\u7a7a\u767d\u7684\u57fa\u56e0\u6837\u672c",
                    "target": "\u57fa\u56e0\u6a21\u677f"
                },
                {
                    "source": "\u57fa\u56e0\u6c60",
                    "target": "\u57fa\u56e0\u5206\u79bb\u5668"
                },
                {
                    "source": "\u4e00\u4e2a\u65b0\u5bb6",
                    "target": "\u53bb\u5bfb\u627e\u4e00\u4e9b\u70ed\u5e26\u871c\u8702"
                },
                {
                    "source": "\u8702\u7bb1\u7ec4",
                    "target": "\u8702\u7bb1\u7ec4\u5347\u7ea7"
                },
                {
                    "source": "\u4e00\u4e2a\u65b0\u5bb6",
                    "target": "\u6d78\u6e0d\u6846\u67b62"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u53ea\u8981\u6700\u597d:\u591c\u884c\u6027"
                },
                {
                    "source": "\u8702\u7bb1\u7ec4",
                    "target": "\u5fd9\u788c\u7684\u871c\u8702\u5c3d\u60c5\u55e1\u9e23"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u8bf1\u53d8\u673a"
                },
                {
                    "source": "\u626e\u6f14\u4e0a\u5e1d",
                    "target": "\u8bf1\u53d8\u673a"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u53ea\u8981\u6700\u597d:\u8010\u96e8\u98de\u884c"
                },
                {
                    "source": "\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248",
                    "target": "\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5"
                },
                {
                    "source": "\u5de7\u514b\u529b\u6846\u67b6",
                    "target": "\u4fdd\u6301\u51b7\u9759,\u7834\u6d6a\u4e58\u8702(Keep Calm and Bee On)"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u53ea\u8981\u6700\u597d:\u751f\u80b2\u80fd\u529b"
                },
                {
                    "source": "\u53bb\u5bfb\u627e\u4e00\u4e9b\u70ed\u5e26\u871c\u8702",
                    "target": "\u4e1d\u6ed1\u8702\u7a9d"
                },
                {
                    "source": "\u8f6c\u554a\u8f6c\u554a\u8f6c\u554a\u8f6c...",
                    "target": "\u4e1d\u6ed1\u8702\u7a9d"
                },
                {
                    "source": "\u6d78\u6e0d\u6846\u67b62",
                    "target": "\u871c\u8702\u55e1\u55e1\u4f5c\u54cd\u8fd8\u662f\u5c16\u53eb\uff1f"
                },
                {
                    "source": "\u6d78\u6e0d\u6846\u67b62",
                    "target": "\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u53ea\u6709\u6700\u574f: \u6811\u6728\u9500\u6bc1!"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!",
                    "target": "\u8ba9\u871c\u8702\u4f4f\u5f97\u66f4\u8212\u670d"
                },
                {
                    "source": "\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed",
                    "target": "\u626e\u6f14\u4e0a\u5e1d"
                },
                {
                    "source": "\u6052\u6e29\u7bb1",
                    "target": "\u57fa\u56e0\u6c60"
                },
                {
                    "source": "\u8bf1\u53d8\u673a",
                    "target": "\u9ad8\u7ea7\u8bf1\u53d8\u673a"
                },
                {
                    "source": "\u94bb\u77f3\u5236\u54c1",
                    "target": "\u57fa\u56e0\u538b\u5370\u673a"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u9ad8\u7ea7\u54c1\u79cd:\u6076\u9f99"
                },
                {
                    "source": "\u88c5\u8774\u8776\u7684\u7bb1\u5b50? \u771f\u7684\u5417?",
                    "target": "\u9cde\u7fc5\u76ee\u6606\u866b\u5b66\u5bb6\u7684\u80cc\u5305,\u54c8\u6b20"
                },
                {
                    "source": "\u76f8\u5f53\u6b8b\u9177\u7684\u5904\u7406\u65b9\u5f0f",
                    "target": "\u8981\u6709\u5149"
                },
                {
                    "source": "\u65bd\u74e6\u8f9b\u683c\u7684\u6db2\u5316\u673a",
                    "target": "\u8981\u6709\u5149"
                },
                {
                    "source": "\u7814\u7a76\u8774\u8776",
                    "target": "\u88c5\u8774\u8776\u7684\u7bb1\u5b50? \u771f\u7684\u5417?"
                },
                {
                    "source": "\u871c\u8702\u55e1\u55e1\u4f5c\u54cd\u8fd8\u662f\u5c16\u53eb\uff1f",
                    "target": "\u6700\u5feb\u7a81\u53d8"
                },
                {
                    "source": "\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898",
                    "target": "\u7814\u7a76\u8774\u8776"
                },
                {
                    "source": "\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211",
                    "target": "\u5ec9\u4ef7\u7684\u751f\u7269\u7fa4\u7cfb\u6539\u53d8"
                },
                {
                    "source": "\u6846\u67b6",
                    "target": "\u4e00\u4e2a\u65b0\u5bb6"
                },
                {
                    "source": "\u94bb\u77f3\u5236\u54c1",
                    "target": "\u76f8\u5f53\u6b8b\u9177\u7684\u5904\u7406\u65b9\u5f0f"
                },
                {
                    "source": "\u8702\u7bb1\u7ec4",
                    "target": "\u767e\u4e07\u871c\u8702"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u53ea\u8981\u6700\u597d:\u5feb\u5230\u6a21\u7cca"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!",
                    "target": "\u5b9e\u9a8c\u53f0"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u751f\u7269\u8bfe\u5802!",
                    "target": "\u9057\u4f20\u5b66\u5bb6\u7684\u5de5\u5177"
                },
                {
                    "source": "\u4e00\u4e2a\u65b0\u5bb6",
                    "target": "\u626b\u63cf\u8fd8\u662f\u4e0d\u626b\u63cf--\u8fd9\u5e76\u975e\u4e00\u4e2a\u95ee\u9898"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u53ea\u8981\u6700\u597d:\u8010\u6e7f\u6027"
                },
                {
                    "source": "\u56e2\u7ed3\u8d77\u6765,\u871c\u8702\u4eec!",
                    "target": "\u8702\u6d46,\u65e9\u9910,\u5f88\u597d,Weirdos"
                },
                {
                    "source": "\u6d4b\u5e8f\u4eea",
                    "target": "PCR\u4eea"
                },
                {
                    "source": "\u57fa\u56e0\u5206\u79bb\u5668",
                    "target": "\u6d4b\u5e8f\u4eea"
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
    