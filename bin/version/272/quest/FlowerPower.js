
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
                    "name": "\u7aa5\u89c1\u6c34\u4e4b\u672a\u6765",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3227.png",
                    "x": 0.0,
                    "y": -84.0,
                    "data": "\u4e0b\u4e00\u6b65\u5c31\u662f\u505a\u50ac\u5316\u5668\u4e86.\u70bc\u91d1\u50ac\u5316\u5668\u53ef\u4ee5\u4f7f\u7528\u9b54\u529b,\u5c06\u7269\u54c1\u6216\u65b9\u5757\u8f6c\u53d8\u6210\u76f8\u5173\u7684\u53e6\u4e00\u79cd\u7269\u54c1\u6216\u65b9\u5757.</br></br>\u628a\u5b83\u653e\u5728\u5145\u6ee1\u7684\u9b54\u529b\u6c60\u4e0b\u9762,\u505a\u4e9b\u6d77\u6676\u77f3\u8bd5\u8bd5.</br></br>\u5408\u6210\u8868\u9700\u8981\u9b54\u5bfc\u624b\u518c\u7814\u7a76\u89e3\u9501.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMmw==",
                    "tooltip": "<strong>\u7aa5\u89c1\u6c34\u4e4b\u672a\u6765</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5347\u7ea7\u9b54\u529b\u6c60"
                },
                {
                    "name": "\u6c34\u690d\u7269\u9b54\u6cd5\u80fd\u91cf",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3255.png",
                    "x": -276.0,
                    "y": -120.0,
                    "data": "\u9b54\u529b\u662f\u84dd\u8272\u7684,\u6c34\u4e5f\u662f\u84dd\u8272\u7684.\u5176\u4e2d\u6709\u79cd\u5173\u8054,\u800c\u6c34\u7ee3\u7403(hydroangea)\u5c06\u8fd9\u79cd\u5173\u8054\u5316\u4f5c\u56e0\u679c\u5173\u7cfb.\u5728\u8fb9\u4e0a\u653e\u4e00\u683c\u6c34\u6e90,\u6c34\u7ee3\u7403\u4f1a\u5438\u6536\u6c34\u6e90,\u751f\u4ea7\u9b54\u529b - \u76f4\u5230\u4e00\u5c0f\u65f6\u4e4b\u540e\u81ea\u7136\u67af\u840e.</br></br>\u8fd9\u79cd\u82b1\u6709\u4e9b\u96be\u4ee5\u81ea\u52a8\u5316,\u56e0\u4e3a\u8fd9\u91cc\u6ca1\u6709\u5929\u7136\u7684\u65e0\u9650\u6c34.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMtw==",
                    "tooltip": "<strong>\u6c34\u690d\u7269\u9b54\u6cd5\u80fd\u91cf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b"
                },
                {
                    "name": "Moron\u7684\u9b54\u529b\u751f\u4ea7\u548c\u64cd\u7eb5\u6307\u5357",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3253.png",
                    "x": -216.0,
                    "y": 48.0,
                    "data": "\u8981\u4f7f\u7528\u9b54\u6cd5\u82b1\u5349\u7684\u529b\u91cf,\u4f60\u5fc5\u987b\u5148\u4e86\u89e3\u5982\u4f55\u751f\u4ea7\u548c\u64cd\u7eb5\u9b54\u529b.\u53ea\u8981\u6ee1\u8db3\u4ea7\u80fd\u82b1\u7684\u751f\u4ea7\u9700\u6c42,\u5b83\u4eec\u5c31\u4f1a\u4ea7\u751f\u51fa\u8fd9\u79cd\u7a7a\u7075\u7684\u84dd\u8272\u7269\u8d28.\u9b54\u529b\u4e0d\u6613\u91cf\u5316,\u6240\u4ee5\u5982\u679c\u4f60\u60f3\u6709\u6548\u5730\u4f7f\u7528\u5b83,\u5c31\u4e0d\u5f97\u4e0d\u505a\u5927\u91cf\u7684\u4f30\u7b97.</br></br>\u4e00\u65e6\u4f60\u9009\u5b9a\u4e86\u4e00\u79cd\u4ea7\u80fd\u82b1,\u5c31\u5fc5\u987b\u5728\u9b54\u529b\u53d1\u5c04\u5668\u8fb9\u4e0a\u79cd\u690d\u5b83.\u5f53\u6ee1\u8db3\u8be5\u82b1\u6735\u7684\u4ea7\u80fd\u6761\u4ef6\u65f6,\u5b83\u4f1a\u5f00\u59cb\u751f\u4ea7\u9b54\u529b,\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u6700\u9760\u8fd1\u7684\u9b54\u529b\u53d1\u5c04\u5668\u7684\u5185\u90e8\u7f13\u5b58\u4e2d.\u9b54\u529b\u53d1\u5c04\u5668\u4f1a\u81ea\u52a8\u53d1\u5c04\u5b58\u50a8\u7684\u4efb\u4f55\u9b54\u529b,\u53ea\u8981\u5176\u53d1\u5c04\u65b9\u5411\u4e0a\u6709\u5408\u9002\u7684\u63a5\u6536\u65b9\u5757(\u4f8b\u5982\u9b54\u529b\u6c60).\u4f60\u4f1a\u9700\u8981\u5f88\u591a\u8fd9\u4e9b\u8bbe\u5907\u7684,\u6240\u4ee5\u73b0\u5728\u5c31\u5408\u6210\u4e00\u5bf9\u5427.</br></br>\u653e\u7f6e\u9b54\u529b\u53d1\u5c04\u5668\u65f6,\u5b83\u4f1a\u9762\u671d\u4f60\u6240\u5728\u7684\u65b9\u5411.\u4f7f\u7528\u68ee\u6797\u6cd5\u6756\u53ef\u4ee5\u6539\u53d8\u5176\u671d\u5411:\u624b\u6301\u6cd5\u6756Shift+\u53f3\u952e\u9b54\u529b\u53d1\u5c04\u5668,\u7136\u540eShift+\u53f3\u952e\u4f60\u60f3\u8ba9\u5176\u671d\u5411\u7684\u65b9\u5757\u5373\u53ef.\u8fd9\u79cd\u7ed1\u5b9a\u7684\u65b9\u6cd5\u5bf9\u4e8e\u5176\u4ed6\u7269\u4ef6\u4e5f\u6709\u6548,\u4f8b\u5982\u5c06\u4ea7\u80fd\u82b1\u7ed1\u5b9a\u81f3\u6307\u5b9a\u7684\u9b54\u529b\u53d1\u5c04\u5668.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMtQ==",
                    "tooltip": "<strong>Moron\u7684\u9b54\u529b\u751f\u4ea7\u548c\u64cd\u7eb5\u6307\u5357</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u767d\u96cf\u83ca"
                },
                {
                    "name": "\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3228.png",
                    "x": 0.0,
                    "y": -120.0,
                    "data": "\u4f60\u53ef\u4ee5\u7528\u7b26\u6587\u796d\u575b\u5236\u4f5c\u7b26\u6587,\u7b26\u6587\u53ef\u4ee5\u8ba9\u4f60\u80fd\u591f\u5236\u4f5c\u66f4\u9ad8\u7ea7\u7684\u82b1\u5349.\u4f7f\u7528\u65b9\u6cd5:\u628a\u6750\u6599\u653e\u5728\u4e0a\u9762,\u7528\u68ee\u6797\u9b54\u6756\u53f3\u952e\u796d\u575b,\u6ee1\u8db3\u6761\u4ef6\u540e,\u5728\u796d\u575b\u4e0a\u4e22\u4e00\u9897\u6d3b\u77f3\u4ee5\u5b8c\u6210\u5236\u4f5c.\u4f60\u8fd8\u9700\u8981\u4e00\u4e2a\u9b54\u529b\u6e90,\u6bd4\u5982\u4e00\u4e2a\u6307\u5411\u796d\u575b\u7684\u9b54\u529b\u53d1\u5c04\u5668.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMnA==",
                    "tooltip": "<strong>\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7aa5\u89c1\u6c34\u4e4b\u672a\u6765</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "\u6cf0\u62c9\u94a2",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3229.png",
                    "x": 0.0,
                    "y": -156.0,
                    "data": "\u8981\u5236\u9020\u9ad8\u7ea7\u5de5\u5177\u548c\u88c5\u5907,\u4f60\u9700\u8981\u6cf0\u62c9\u94a2.\u5236\u4f5c\u6cf0\u62c9\u94a2\u9700\u8981\u4e13\u95e8\u7684\u88c5\u7f6e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMnQ==",
                    "tooltip": "<strong>\u6cf0\u62c9\u94a2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54"
                },
                {
                    "name": "\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3258.png",
                    "x": 240.0,
                    "y": 48.0,
                    "data": "\u529f\u80fd\u82b1\u662f\u690d\u7269\u9b54\u6cd5\u7684\u91cd\u8981\u90e8\u5206.\u5b83\u4eec\u5927\u591a\u6570\u5728\u5de5\u4f5c\u65b9\u5f0f\u4e0a\u90fd\u6709\u7ec6\u5fae\u5dee\u522b,\u8fd9\u4e9b\u5dee\u522b\u5f80\u5f80\u90fd\u53ef\u4ee5\u5728\u300a\u690d\u7269\u9b54\u6cd5\u8f9e\u5178\u300b--\u4e00\u672c\u690d\u7269\u5b66\u77e5\u8bc6\u5b8c\u5168\u624b\u518c--\u4e2d\u627e\u5230\u89e3\u91ca.\u8fd9\u6761\u4efb\u52a1\u7ebf\u4f1a\u7ed9\u51fa\u6700\u57fa\u7840\u7684\u89e3\u91ca,\u4f46\u4e00\u5b9a\u8981\u8bb0\u4f4f\u624b\u6301\u4e00\u672c\u300a\u690d\u7269\u9b54\u6cd5\u8f9e\u5178\u300b,\u8fd9\u6837\u4f60\u5c31\u80fd\u8f7b\u677e\u627e\u5230\u8be6\u7ec6\u7684\u53c2\u8003.</br></br>\u300a\u690d\u7269\u9b54\u6cd5\u8f9e\u5178\u300b\u4e0d\u4ec5\u662f\u4e00\u4e2a\u6709\u7528\u7684\u4fe1\u606f\u5e93,\u4e5f\u6709\u53e6\u4e00\u4e2a\u529f\u80fd:\u624b\u6301\u5b83\u770b\u5411\u4e16\u754c\u4e2d\u7684\u4efb\u610f\u690d\u7269\u9b54\u6cd5\u65b9\u5757,\u7528Shift+\u53f3\u952e\u5c31\u53ef\u4ee5\u6253\u5f00\u4e66\u4e2d\u76f8\u5173\u7684\u9875\u9762.</br></br>\u5bf9\u4e8e\u529f\u80fd\u82b1,\u4f60\u8fd8\u4f1a\u9700\u8981\u4e9b\u7ea2\u77f3\u6839.\u9700\u8981\u7528\u7ea2\u77f3\u6839\u5236\u9020\u7684\u529f\u80fd\u82b1\u90fd\u6709\u7528\u7ea2\u77f3\u4fe1\u53f7\u63a7\u5236\u6fc0\u6d3b\u7684\u529f\u80fd.\u5728\u7ee7\u7eed\u524d\u8fdb\u4e4b\u524d,\u5148\u505a\u4e00\u4e9b\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMug==",
                    "tooltip": "<strong>\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6cd5\u7684\u6839\u57fa"
                },
                {
                    "name": "\u9e21\u5316",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3269.png",
                    "x": -288.0,
                    "y": -240.0,
                    "data": "\u7d22\u5229\u5b89\u5fb7\u4e4b\u55dc(soarleander)\u4f1a\u6d88\u5316\u6389\u4efb\u4f55\u4e0e\u9e21\u6709\u5173\u7684\u4e1c\u897f,\u5305\u62ec\u6574\u53ea\u9e21.</br></br>\u8bd1\u8005\u6ce8:\u6ca1\u522b\u7684\u7528\u4e86!\u5c31\u662f\u8fd9\u4e48\u7b80\u5355!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMxQ==",
                    "tooltip": "<strong>\u9e21\u5316</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5173\u6389\u4f60\u7684\u88c5\u7f50\u673a"
                },
                {
                    "name": "\u66f4\u597d\u7684\u4ea7\u80fd\u82b1",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3263.png",
                    "x": -222.0,
                    "y": -246.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u8981\u4e9b\u6bd4\u706b\u7ea2\u83b2\u66f4\u597d\u7684\u82b1,\u5c31\u9700\u8981\u4e00\u4e2a\u7b26\u6587\u796d\u575b.\u5e78\u8fd0\u7684\u662f,\u4f60\u53ea\u8981\u80fd\u505a\u51fa\u7b26\u6587\u796d\u575b,\u5927\u90e8\u5206\u7b26\u6587\u90fd\u6781\u6613\u5408\u6210.\u4e0d\u8fc7,\u4e03\u5b97\u7f6a\u7b26\u6587\u9700\u8981\u949b\u624d\u80fd\u5236\u4f5c.\u73b0\u5728,\u53ea\u8981\u6bcf\u79cd\u5143\u7d20\u7b26\u6587\u505a\u4e00\u4e2a\u5c31\u597d;\u8fd9\u8db3\u591f\u4f60\u8d77\u6b65\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMvw==",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u4ea7\u80fd\u82b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54</br>\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b"
                },
                {
                    "name": "\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3262.png",
                    "x": -216.0,
                    "y": -96.0,
                    "data": "\u60f3\u8981\u7ee7\u7eed\u524d\u8fdb,\u4f60\u9700\u8981\u4e00\u4e9b\u9b54\u529b\u5c18.\u5148\u505a4\u4e2a\u518d\u51fa\u53d1\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMvg==",
                    "tooltip": "<strong>\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Moron\u7684\u9b54\u529b\u751f\u4ea7\u548c\u64cd\u7eb5\u6307\u5357"
                },
                {
                    "name": "\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3223.png",
                    "x": 0.0,
                    "y": 84.0,
                    "data": "\u65e2\u7136\u6709\u6d3b\u77f3\u4e86,\u5c31\u5f00\u59cb\u5236\u9020\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60\u5427.\u7528\u952f\u5b50\u5c06\u6d3b\u77f3\u5207\u6210\u53f0\u9636\u5236\u4f5c\u5e95\u90e8,\u628a\u6d3b\u77f3\u677f\u7c98\u5728\u4e00\u8d77\u5236\u6210\u56db\u8fb9.</br></br>\u4f60\u7f3a\u4e4f\u4f7f\u5176\u53d8\u5f97\u6709\u6548\u7684\u77e5\u8bc6,\u6240\u4ee5\u5f88\u9057\u61be,\u4f60\u6ca1\u6cd5\u7528\u5b83\u4e00\u6b21\u5408\u6210\u5f88\u591a\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMlw==",
                    "tooltip": "<strong>\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5207\u5272\u6210\u7247</br>\u767d\u96cf\u83ca"
                },
                {
                    "name": "\u8fd9\u4e9b\u82b1\u7a76\u7adf\u90fd\u6709\u4ec0\u4e48\u7528?",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3252.png",
                    "x": -48.0,
                    "y": 48.0,
                    "data": "\u5982\u679c\u4f60\u4ee5\u524d\u4ece\u672a\u63a5\u89e6\u8fc7\u690d\u7269\u9b54\u6cd5(Botania),\u53ef\u80fd\u4f1a\u56f0\u60d1\u4e8e\u4ed8\u51fa\u8fd9\u4e9b\u52aa\u529b\u5230\u5e95\u6709\u4ec0\u4e48\u610f\u4e49.\u8fd9\u5e76\u4e0d\u662f\u4e2a\u5bb9\u6613\u56de\u7b54\u7684\u95ee\u9898,\u4f46\u4f60\u81f3\u5c11\u73b0\u5728\u5c31\u80fd\u505a\u4e00\u4ef6\u76f8\u5f53\u6709\u7528\u7684\u4e8b--\u5236\u4f5c\u9b54\u529b\u94a2.</br></br>\u9b54\u529b\u94a2\u5728LV\u6750\u6599\u4e2d\u5982\u679c\u4e0d\u662f\u8010\u4e45\u5ea6\u6700\u9ad8\u7684,\u4e5f\u4e00\u5b9a\u662f\u8010\u4e45\u5ea6\u6700\u9ad8\u7684\u4e4b\u4e00,\u6240\u4ee5\u8fd9\u662f\u4f60\u5236\u4f5c\u5de5\u5177\u7684\u7edd\u4f73\u9009\u62e9--\u800c\u8fd9\u4e5f\u4ec5\u4ec5\u662f\u5176\u7528\u9014\u4e4b\u4e00.</br></br>\u5982\u679c\u4f60\u7279\u522b\u8ba8\u538c\u5320\u9b42\u7684\u8bdd,\u9b54\u529b\u94a2\u4e5f\u662f\u5236\u4f5cGT\u9550\u5b50\u7684\u6781\u597d\u6750\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMtA==",
                    "tooltip": "<strong>\u8fd9\u4e9b\u82b1\u7a76\u7adf\u90fd\u6709\u4ec0\u4e48\u7528?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60"
                },
                {
                    "name": "\u6388\u7c89\u597d\u4f19\u4f34",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3225.png",
                    "x": -48.0,
                    "y": 120.0,
                    "data": "\u6709\u4e9b\u82b1\u5230\u5904\u90fd\u6709,\u6709\u4e9b\u5219\u4ec5\u9650\u4e8e\u7279\u5b9a\u7684\u751f\u7269\u7fa4\u7cfb.\u5982\u679c\u4f60\u4e0d\u60f3\u79bb\u5bb6\u8d70\u592a\u8fdc,\u53ef\u4ee5\u627e\u4e9b\u5e2e\u624b.</br></br>\u5177\u6709\u91c7\u871c\u5bf9\u8c61\u7279\u6027\u7684\u871c\u8702\u4f1a\u5728\u5b83\u7684\u5de5\u4f5c\u8303\u56f4\u5185\u6162\u6162\u4ea7\u751f\u65b0\u7684\u82b1\u5349,\u5305\u62ec\u5927\u91cf\u4ece\u9065\u8fdc\u7267\u573a\u5e26\u6765\u7684\u54c1\u79cd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMmQ==",
                    "tooltip": "<strong>\u6388\u7c89\u597d\u4f19\u4f34</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82b1\u5349\u5ac1\u63a5"
                },
                {
                    "name": "\u767d\u96cf\u83ca",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3222.png",
                    "x": 0.0,
                    "y": 120.0,
                    "data": "\u4f60\u80fd\u505a\u51fa\u7684\u7b2c\u4e00\u79cd\u9b54\u529b\u82b1\u5349\u5c31\u662f\u767d\u96cf\u83ca.\u8fd9\u79cd\u82b1\u53ef\u4ee5\u7f13\u6162\u5730\u4e3a\u9644\u8fd1\u7684\u77f3\u5934\u548c\u539f\u6728\u6ce8\u5165\u9b54\u529b,\u5c06\u5176\u8f6c\u53d8\u4e3a\u690d\u7269\u9b54\u6cd5\u7684\u539f\u6750\u6599.</br></br>\u653e\u4e0b\u4e00\u6735\u767d\u96cf\u83ca,\u7136\u540e\u5728\u5176\u5468\u56f4\u7d27\u90bb\u76848\u683c\u653e\u4e0a\u77f3\u5934\u548c\u539f\u6728,\u8fc7\u4e00\u6bb5\u65f6\u95f4\u5b83\u4eec\u5c31\u4f1a\u8f6c\u5316\u4e3a\u6d3b\u77f3\u548c\u6d3b\u6728.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMlg==",
                    "tooltip": "<strong>\u767d\u96cf\u83ca</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82b1\u5349\u5ac1\u63a5"
                },
                {
                    "name": "\u4e9a\u5c14\u592b\u6d77\u59c6(Alfheim,\u7cbe\u7075\u4e4b\u56fd)",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3230.png",
                    "x": 0.0,
                    "y": -192.0,
                    "data": "\u4f20\u8bf4\u4e2d\u6709\u4e00\u4e2a\u4f20\u9001\u95e8,\u901a\u5411\u5145\u6ee1\u7eff\u8272\u80fd\u91cf\u7684\u5f02\u4e16\u754c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMng==",
                    "tooltip": "<strong>\u4e9a\u5c14\u592b\u6d77\u59c6(Alfheim,\u7cbe\u7075\u4e4b\u56fd)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6cf0\u62c9\u94a2"
                },
                {
                    "name": "\u5347\u7ea7\u9b54\u529b\u6c60",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3224.png",
                    "x": 0.0,
                    "y": -48.0,
                    "data": "\u65e2\u7136\u4f60\u5df2\u7ecf\u53d1\u73b0\u4e86\u88ab\u65bd\u4ee5\u9b54\u529b\u7684\u5769\u57da\u7684\u529b\u91cf,\u5c31\u53ef\u4ee5\u7528\u8fd9\u9879\u6280\u672f\u9020\u4e00\u5ea7\u66f4\u597d\u7684\u9b54\u529b\u6c60\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMmA==",
                    "tooltip": "<strong>\u5347\u7ea7\u9b54\u529b\u6c60</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684</br>\u8fd9\u4e9b\u82b1\u7a76\u7adf\u90fd\u6709\u4ec0\u4e48\u7528?</br>\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60"
                },
                {
                    "name": "\u592a\u9633\u80fd:\u82b1\u5349\u7248\u672c",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3254.png",
                    "x": -192.0,
                    "y": -60.0,
                    "data": "\u592a\u9633\u82b1(daybloom)\u662f\u4e00\u79cd\u6781\u5176\u7b80\u5355\u7684\u4ea7\u80fd\u82b1.\u4f60\u53ea\u9700\u8981\u653e\u7f6e\u5b83,\u5b83\u5c31\u4f1a\u5728\u767d\u5929\u514d\u8d39\u4ea7\u51fa\u9b54\u529b.\u8fd9\u79cd\u4ea7\u80fd\u65b9\u5f0f\u7684\u7f3a\u70b9\u662f,\u592a\u9633\u82b1\u4ec5\u4ec5\u8fc7\u4e00\u5c0f\u65f6\u5c31\u4f1a\u81ea\u7136\u67af\u840e.\u5236\u9020\u4e00\u6735,\u6211\u4f1a\u518d\u9001\u4f60\u4e00\u6735.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMtg==",
                    "tooltip": "<strong>\u592a\u9633\u80fd:\u82b1\u5349\u7248\u672c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Moron\u7684\u9b54\u529b\u751f\u4ea7\u548c\u64cd\u7eb5\u6307\u5357"
                },
                {
                    "name": "\u82b1!!!\u65e0\u9650\u7684\u82b1!!!",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3267.png",
                    "x": 246.0,
                    "y": -222.0,
                    "data": "\u7fe1\u7fe0\u82cb(jaded amaranthus)\u80fd\u4f7f\u9644\u8fd1\u957f\u51fa\u795e\u79d8\u82b1.\u795e\u79d8\u82b1\u9c9c\u8273\u7684\u82b1\u74e3\u53ef\u4ee5\u7528\u4e8e\u9b54\u6cd5,\u6240\u4ee5\u4f60\u5c31\u518d\u4e5f\u4e0d\u9700\u8981\u53bb\u627e\u8611\u83c7\u4e86.</br></br>\u8fd8\u6709\u4e00\u79cd\u53ef\u4ee5\u83b7\u5f97\u795e\u79d8\u82b1\u7684\u65b9\u6cd5,\u4e0d\u8fc7\u8fd9\u56de\u4f60\u8981\u81ea\u5df1\u627e\u51fa\u6765\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMww==",
                    "tooltip": "<strong>\u82b1!!!\u65e0\u9650\u7684\u82b1!!!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb</br>\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54"
                },
                {
                    "name": "\u548c\u7cbe\u7075\u5de5\u4e1a\u7684\u4e00\u573a\u4ea4\u6613",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3232.png",
                    "x": -48.0,
                    "y": -204.0,
                    "data": "\u6240\u4ee5\u5173\u4e8e\u7cbe\u7075\u7684\u4f20\u8a00\u66fe\u7ecf\u662f\u771f\u7684.\u597d\u5427,*\u66fe\u7ecf\u662f*\u771f\u7684.\u5b83\u4eec\u4e2d\u5927\u90e8\u5206\u4ecd\u7136\u662f\u771f\u7684.\u73b0\u5728\u662f\u5047\u7684\u90a3\u4e9b,\u66fe\u7ecf\u4e5f\u662f\u771f\u7684.</br></br>\u539f\u6765,\u4ed6\u4eec\u90a3\u4e4b\u540e\u4e00\u76f4\u5728\u548c\u4e00\u4e2a\u88ab\u79f0\u4f5cDream Master\u7684\u795e\u79d8\u4eba\u7269\u4ea4\u8c08,\u663e\u7136\u8fd9\u5728\u7cbe\u7075\u65cf\u7684\u571f\u5730\u4e0a\u5f15\u53d1\u4e86\u4e00\u6b21\u5de5\u4e1a\u9769\u547d.\u8fd9\u5f88\u4e0d\u5e78\u5730\u610f\u5473\u7740,\u4ed6\u4eec\u73b0\u5728\u575a\u6301\u5f15\u8fdb\u6700\u65b0\u6b3e\u7684\u673a\u68b0,\u4ee5\u9a71\u52a8\u4e0d\u65ad\u6269\u5927\u7684\u5de5\u5382,\u4ece\u800c\u6362\u6389\u6b63\u8fc5\u901f\u8fc7\u65f6\u7684\u7cbe\u7075\u6750\u6599.</br></br>\u6709\u4eba\u9700\u8981\u548c\u8fd9\u5bb6\u4f19\u8c08\u8c08...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMoA==",
                    "tooltip": "<strong>\u548c\u7cbe\u7075\u5de5\u4e1a\u7684\u4e00\u573a\u4ea4\u6613</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e9a\u5c14\u592b\u6d77\u59c6(Alfheim,\u7cbe\u7075\u4e4b\u56fd)"
                },
                {
                    "name": "\u53cd\u78c1\u6027",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3259.png",
                    "x": 264.0,
                    "y": -120.0,
                    "data": "\u5982\u679c\u4f60\u505a\u4e86\u4e00\u4e2a\u78c1\u5316\u6307\u73af,\u5c31\u4e0d\u5f97\u4e0d\u5728\u9700\u8981\u628a\u7269\u54c1\u653e\u5728\u5730\u9762\u4e0a\u4e0e\u82b1\u4ea4\u4e92\u7684\u690d\u7269\u9b54\u6cd5\u7cfb\u7edf\u9644\u8fd1\u6458\u4e0b\u6307\u73af,\u5bf9\u4e8e\u8fd9\u4e00\u70b9\u4f60\u53ef\u80fd\u65e9\u5df2\u538c\u5026\u4e86.\u5f31\u78c1\u5170(solegnolia)\u4fbf\u662f\u89e3\u51b3\u529e\u6cd5.\u53ea\u8981\u628a\u5b83\u653e\u5728\u4e0d\u9700\u8981\u81ea\u52a8\u62fe\u53d6\u7269\u54c1\u7684\u5730\u65b9,\u5f53\u4f60\u5728\u5176\u4f5c\u7528\u8303\u56f4\u5185,\u78c1\u5316\u6307\u73af\u5c31\u4f1a\u5931\u6548.\u5b83\u751a\u81f3\u4e0d\u9700\u8981\u9b54\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMuw==",
                    "tooltip": "<strong>\u53cd\u78c1\u6027</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb"
                },
                {
                    "name": "\u6839\u636e\u4e00\u5207\u5df2\u77e5\u7684\u9b54\u529b\u751f\u4ea7\u6cd5\u5219...",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3270.png",
                    "x": -240.0,
                    "y": -156.0,
                    "data": "...\u871c\u8702\u7edd\u4e0d\u53ef\u80fd\u751f\u4ea7\u9b54\u529b.\u98df\u8702\u6d77\u68e0(beegonia)\u4f3c\u4e4e\u5bf9\u6b64\u6d51\u7136\u4e0d\u77e5,\u5e76\u4e14\u4f1a\u5f88\u9ad8\u5174\u5730\u5403\u6389\u4f60\u6240\u6709\u76c8\u4f59\u7684\u96c4\u8702,\u4ee5\u586b\u6ee1\u4f60\u7684\u9b54\u529b\u6c60.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMxg==",
                    "tooltip": "<strong>\u6839\u636e\u4e00\u5207\u5df2\u77e5\u7684\u9b54\u529b\u751f\u4ea7\u6cd5\u5219...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b"
                },
                {
                    "name": "\u5f3a\u5236\u6027\u5ca9\u6d46\u80fd\u91cf",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3268.png",
                    "x": -276.0,
                    "y": -276.0,
                    "data": "\u70bd\u73ab\u7470(thermalily)\u4f1a\u6d88\u8017\u5ca9\u6d46,\u4f46\u8fd9\u5e76\u975e\u6301\u7eed\u8865\u5145\u5ca9\u6d46\u6c60\u90a3\u4e48\u7b80\u5355.\u4f60\u5f97\u8003\u8651\u5230\u5b83\u7684\u51b7\u5374\u65f6\u95f4.\u5c3d\u7ba1\u5982\u6b64,\u5982\u679c\u4f60\u6709\u597d\u7684\u5ca9\u6d46\u6765\u6e90,\u5b83\u8fd8\u662f\u6781\u6613\u81ea\u52a8\u5316\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMxA==",
                    "tooltip": "<strong>\u5f3a\u5236\u6027\u5ca9\u6d46\u80fd\u91cf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u597d\u7684\u4ea7\u80fd\u82b1"
                },
                {
                    "name": "\u6697\u80fd\u91cf",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3256.png",
                    "x": -240.0,
                    "y": -12.0,
                    "data": "\u5927\u6982\u4e0d\u662f\u4f60\u719f\u6089\u7684\u90a3\u79cd\"\u6697\u80fd\u91cf\".\u591c\u98a0\u8304(nightshade)\u5728\u591c\u665a\u4ea7\u751f\u9b54\u529b.\u548c\u5176\u4ed6\u88ab\u52a8\u4ea7\u80fd\u82b1\u4e00\u6837,\u5b83\u8fc7\u4e00\u5c0f\u65f6\u5c31\u4f1a\u81ea\u7136\u67af\u840e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMuA==",
                    "tooltip": "<strong>\u6697\u80fd\u91cf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Moron\u7684\u9b54\u529b\u751f\u4ea7\u548c\u64cd\u7eb5\u6307\u5357"
                },
                {
                    "name": "\u9b54\u6cd5\u7684\u6839\u57fa",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3220.png",
                    "x": 0.0,
                    "y": 192.0,
                    "data": "\u5982\u679c\u4f60\u719f\u6089\u690d\u7269\u9b54\u6cd5,\u4f1a\u6ce8\u610f\u5230\u4e3b\u4e16\u754c\u660e\u663e\u6ca1\u6709\u795e\u79d8\u82b1\u548c\u5fae\u5149\u8611\u83c7.\u5f88\u9057\u61be,\u5982\u6b64\u6f02\u4eae\u7684\u9b54\u529b\u5c55\u73b0\u65b9\u5f0f\u9700\u8981\u4f60\u63d0\u5347\u81ea\u5df1\u7684\u9b54\u6cd5\u6c34\u5e73.\u73b0\u5728\u4f60\u5f97\u5229\u7528\u8fd9\u4e2a\u65b0\u7ef4\u5ea6\u6240\u63d0\u4f9b\u7684\u4e1c\u897f.</br></br>\u66ae\u8272\u68ee\u6797\u7684\u6df1\u5c42\u6d1e\u7a74\u4e2d,\u5728Y\u8f74\u8f83\u4f4e\u7684\u5730\u65b9,\u53ef\u4ee5\u627e\u5230\u5fae\u5149\u8611\u83c7.\u8fd9\u4e9b\u662f\u4f60\u7684\u8d77\u59cb\u6750\u6599,\u53ef\u4ee5\u7528\u6765\u4ee3\u66ff\u82b1\u74e3.\u6ce8\u610f,\u4e0e\u82b1\u4e0d\u540c,\u4f60\u73b0\u5728\u8fd8\u4e0d\u80fd\u79cd\u690d\u5b83\u4eec,\u6240\u4ee5\u8981\u5c0f\u5fc3\u4f7f\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMlA==",
                    "tooltip": "<strong>\u9b54\u6cd5\u7684\u6839\u57fa</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "name": "\u66b4\u529b\u662f\u84dd\u8272\u7684",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3260.png",
                    "x": 216.0,
                    "y": -72.0,
                    "data": "\u6050\u60e7\u4e4b\u523a(dreadthorne)\u7c7b\u4f3c\u4e8e\u5a07\u5a9a\u4e4b\u523a,\u4e0d\u540c\u70b9\u5728\u4e8e\u5b83\u53ea\u4f1a\u6740\u6b7b\u6210\u5e74\u52a8\u7269.\u8fd9\u5bf9\u4e8e\u517b\u6b96\u7272\u755c\u5f88\u6709\u7528,\u4e0d\u8fc7\u5b83\u4e5f\u53ea\u662f\u5b8c\u7f8e\u519c\u573a\u7684\u4e00\u73af.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMvA==",
                    "tooltip": "<strong>\u66b4\u529b\u662f\u84dd\u8272\u7684</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb"
                },
                {
                    "name": "\u7b2c\u4e00\u56de\u5408...\u5f00\u6253!",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3231.png",
                    "x": 0.0,
                    "y": -228.0,
                    "data": "\u5728\u6b63\u786e\u7684\u4f4d\u7f6e\u653e\u7f6e4\u4e2a\u76d6\u4e9a\u6c34\u6676,\u624b\u6301\u6cf0\u62c9\u94a2\u952d,shift+\u53f3\u51fb\u6fc0\u6d3b\u7684\u4fe1\u6807,\u53ec\u5524\u76d6\u4e9a\u5b88\u62a4\u8005.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMnw==",
                    "tooltip": "<strong>\u7b2c\u4e00\u56de\u5408...\u5f00\u6253!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e9a\u5c14\u592b\u6d77\u59c6(Alfheim,\u7cbe\u7075\u4e4b\u56fd)"
                },
                {
                    "name": "\u7b26\u65872",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3246.png",
                    "x": 48.0,
                    "y": -132.0,
                    "data": "\u5236\u9020\u4e9b\u7b26\u6587\u5427,\u56e0\u4e3a--\u4e3a\u4ec0\u4e48\u4e0d\u5462?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMrg==",
                    "tooltip": "<strong>\u7b26\u65872</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54"
                },
                {
                    "name": "\u7ecf\u9a8c\u4e30\u5bcc\u7684\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3265.png",
                    "x": -192.0,
                    "y": -216.0,
                    "data": "\u963f\u5361\u7eb3\u8537\u8587(rosa-arcana)\u5c06\u7ecf\u9a8c\u8f6c\u5316\u4e3a\u9b54\u529b.\u56e0\u6b64\u5b83\u4f1a\u4ece\u7ad9\u5728\u5b83\u9644\u8fd1\u7684\u73a9\u5bb6\u8eab\u4e0a\u5438\u53d6\u7ecf\u9a8c.\u5f88\u4e0d\u5e78,\u60f3\u8981\u81ea\u52a8\u5316\u8fd9\u4e00\u8fc7\u7a0b\u5f88\u4e0d\u5b9e\u9645,\u56e0\u4e3a\u7ecf\u9a8c\u53ea\u80fd\u76f4\u63a5\u4ece\u73a9\u5bb6\u8eab\u4e0a\u5438\u53d6,\u4e0d\u80fd\u7528\u7ecf\u9a8c\u7403\u6216\u662f\u522b\u7684\u7ecf\u9a8c\u5b58\u50a8\u65b9\u5f0f.\u4e5f\u8bb8\u628a\u5b83\u653e\u5728\u4f60\u4f1a\u5f85\u5f88\u4e45\u7684\u4e00\u4e9b\u5730\u65b9\u8fd8\u4e0d\u9519.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMwQ==",
                    "tooltip": "<strong>\u7ecf\u9a8c\u4e30\u5bcc\u7684\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u597d\u7684\u4ea7\u80fd\u82b1"
                },
                {
                    "name": "\u7b2c\u4e8c\u56de\u5408...\u5f00\u6253!",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3241.png",
                    "x": 48.0,
                    "y": -240.0,
                    "data": "\u73b0\u5728\u7528\u4f60\u51fb\u6740\u76d6\u4e9a\u5b88\u62a4\u8005\u5f97\u5230\u7684\u76d6\u4e9a\u4e4b\u9b42\u5408\u6210\u4e00\u4e2a\u76d6\u4e9a\u9b42\u952d.</br></br>\u5728\u6b63\u786e\u7684\u4f4d\u7f6e\u653e\u7f6e4\u4e2a\u76d6\u4e9a\u6c34\u6676,\u624b\u6301\u76d6\u4e9a\u9b42\u952d,shift+\u53f3\u51fb\u6fc0\u6d3b\u7684\u4fe1\u6807,\u53ec\u5524\u589e\u5f3a\u7248\u7684\u76d6\u4e9a\u5b88\u62a4\u8005.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMqQ==",
                    "tooltip": "<strong>\u7b2c\u4e8c\u56de\u5408...\u5f00\u6253!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u56de\u5408...\u5f00\u6253!"
                },
                {
                    "name": "\u9b54\u529b\u94bb\u77f3",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3226.png",
                    "x": 48.0,
                    "y": -12.0,
                    "data": "\u9b54\u529b\u94bb\u77f3\u662f\u6ce8\u5165\u4e86\u9b54\u529b\u7684\u94bb\u77f3,\u5236\u4f5c\u5b83\u4eec\u9700\u8981\u7684\u9b54\u529b\u53d6\u51b3\u4e8e\u94bb\u77f3\u7684\u8d28\u91cf.</br></br>\u4e00\u5ea7\u5168\u6ee1\u7684\u7a00\u91ca\u9b54\u529b\u6c60\u52c9\u5f3a\u80fd\u628a\u4e00\u9897\u7cbe\u81f4\u7684\u94bb\u77f3\u8f6c\u53d8\u6210\u9b54\u529b\u94bb\u77f3.\u7b49\u5230\u4f60\u5347\u7ea7\u4e00\u6b21\u9b54\u529b\u6c60\u4e4b\u540e,\u5c31\u53ef\u4ee5\u7528\u666e\u901a\u94bb\u77f3\u4e86,\u4e0d\u8fc7\u9b54\u529b\u6d88\u8017\u4f1a\u591a\u4e9b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMmg==",
                    "tooltip": "<strong>\u9b54\u529b\u94bb\u77f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60"
                },
                {
                    "name": "\u8fd9\u662f\u5185\u71c3\u53d1\u7535\u673a\u5417?",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3257.png",
                    "x": -180.0,
                    "y": -120.0,
                    "data": "\u706b\u7ea2\u83b2(endoflame)\u6d88\u8017\u53ef\u71c3\u6750\u6599\u751f\u4ea7\u9b54\u529b.\u5b83\u53ef\u4ee5\u9ad8\u6548\u6d88\u8017\u71c3\u70e7\u65f6\u95f4\u4e0d\u8d85\u8fc764000(\u5355\u4e2a\u7269\u54c1)\u7684\u71c3\u6599(\u76f8\u5f53\u4e8e4\u4e2a\u7164\u70ad\u5757);\u4efb\u4f55\u8d85\u51fa\u6b64\u503c\u7684\u71c3\u70e7\u65f6\u95f4\u90fd\u4f1a\u6d6a\u8d39\u6389.\u706b\u7ea2\u83b2\u4e0d\u540c\u4e8e\u88ab\u52a8\u4ea7\u80fd\u82b1,\u5b83\u4e0d\u4f1a\u67af\u840e,\u5e76\u4e14\u7b80\u5355\u6613\u7528,\u56e0\u6b64\u505a\u51e0\u6735\u662f\u4e2a\u597d\u4e3b\u610f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMuQ==",
                    "tooltip": "<strong>\u8fd9\u662f\u5185\u71c3\u53d1\u7535\u673a\u5417?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b"
                },
                {
                    "name": "\u82b1\u5349\u5ac1\u63a5",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3221.png",
                    "x": 0.0,
                    "y": 156.0,
                    "data": "\u4f60\u8981\u505a\u7684\u7b2c\u4e00\u4e2a\u4e1c\u897f\u662f\u82b1\u836f\u53f0.\u5c06\u5fae\u5149\u8611\u83c7\u7684\u7ec4\u5206\u6d82\u5728\u70bc\u836f\u9505\u4e0a,\u5c31\u80fd\u7ed9\u4e88\u5b83\u81ea\u6211\u6062\u590d\u7684\u80fd\u529b.</br></br>\u64cd\u4f5c\u65f6,\u5148\u7528\u4e00\u6876\u6c34\u586b\u6ee1\u5b83,\u4ee5\u4fdd\u6301\u690d\u7269\u7684\u6c34\u5206.\u8981\u52a0\u5165\u5408\u6210\u6750\u6599,\u628a\u5b83\u4eec\u4e22\u5230\u82b1\u836f\u53f0\u4e0a\u9762\u5373\u53ef.</br></br>\u6240\u6709\u82b1\u836f\u53f0\u7684\u5408\u6210\u90fd\u9700\u8981\u4e9b\u9b54\u6cd5\u6210\u5206;\u8fd8\u9700\u8981\u4ece\u4e16\u754c\u4e2d\u53d6\u5f97\u7684\u4e00\u79cd\u6216\u591a\u79cd\u666e\u901a\u82b1,\u4f5c\u4e3a\u914d\u65b9\u7a33\u5b9a\u7684\u57fa\u7840.\u628a\u6240\u6709\u5408\u6210\u6750\u6599\u90fd\u52a0\u8fdb\u53bb\u540e,\u518d\u52a0\u4e00\u7c92\u79cd\u5b50\u5c31\u53ef\u4ee5\u5b8c\u6210\u5408\u6210.\u6240\u6709\u539f\u7248\u79cd\u5b50\u90fd\u884c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMlQ==",
                    "tooltip": "<strong>\u82b1\u5349\u5ac1\u63a5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6cd5\u7684\u6839\u57fa"
                },
                {
                    "name": "\u5173\u6389\u4f60\u7684\u88c5\u7f50\u673a",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3264.png",
                    "x": -252.0,
                    "y": -204.0,
                    "data": "\u6709\u4e9b\u82b1\u5403\u871c\u8702,\u6709\u7684\u5403\u6811\u53f6,\u6709\u7684\u5403\u53f2\u83b1\u59c6.\u800c\u8fd9\u79cd\u82b1\u4ec0\u4e48\u90fd\u80fd\u5403(\u5f53\u7136\u53ea\u5305\u62ec\u4f60\u80fd\u5403\u7684\u6240\u6709\u98df\u7269).\u5f7c\u65b9\u5170(gourmaryllis)\u5728\u4f60\u6295\u5582\u591a\u79cd\u591a\u6837\u7684\u7f8e\u5473\u98df\u7269\u65f6\u4f1a\u611f\u5230\u6700\u5feb\u4e50,\u6240\u4ee5\u4f46\u613fHV\u9636\u6bb5\u7684\u88c5\u7f50\u996e\u98df\u6ca1\u8ba9\u4f60\u5fd8\u4e86\u600e\u4e48\u70f9\u996a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMwA==",
                    "tooltip": "<strong>\u5173\u6389\u4f60\u7684\u88c5\u7f50\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u597d\u7684\u4ea7\u80fd\u82b1"
                },
                {
                    "name": "\u73ab\u7470\u662f\u8840\u7ea2\u7684",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3261.png",
                    "x": 276.0,
                    "y": -24.0,
                    "data": "\u5a07\u5a9a\u4e4b\u523a(bellethorne)\u662f\u4e00\u79cd\u6709\u8da3\u7684\u5c0f\u82b1,\u5b83[warn]\u6c38\u65e0\u6b62\u5883\u5730\u6e34\u6c42\u7740\u8840\u6db2[/warn],\u4e0d\u8fc7\u597d\u5728\u4e0d\u5305\u62ec\u4f60\u7684\u8840.\u53ea\u8981\u63d0\u4f9b\u4e86\u8db3\u591f\u7684\u9b54\u529b,\u5b83\u5c31\u4f1a\u5bf9\u9644\u8fd1\u7684\u4efb\u4f55\u751f\u7269\u5b9e\u4f53\u9020\u6210\u4f24\u5bb3,\u73a9\u5bb6\u9664\u5916.\u8fd9\u662f\u5f88\u597d\u7684\u989d\u5916\u4e00\u5c42\u9632\u5fa1\u63aa\u65bd,\u53ef\u4ee5\u653e\u5728\u4f60\u6e38\u620f\u524d\u671f\u7684\u7af9\u5b50\u5821\u5792\u5165\u53e3\u5904.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMvQ==",
                    "tooltip": "<strong>\u73ab\u7470\u662f\u8840\u7ea2\u7684</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb"
                },
                {
                    "name": "\u5514\u5463\u5463\u5463\u5463,\u597d\u9ecf!",
                    "symbolSize": 50,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3266.png",
                    "x": -180.0,
                    "y": -252.0,
                    "data": "\u4f60\u4f1a\u4e0d\u4f1a\u770b\u7740\u4e00\u4e2a\u53f2\u83b1\u59c6,\u60f3\u7740\"\u6211\u597d\u60f3\u5403\u6389\u5b83\"?\u7c98\u7403\u8349(narslimmus)\u5c31\u662f\u8fd9\u6837\u7684.</br></br>\u5b83\u9700\u8981\u79cd\u690d\u5728\u53f2\u83b1\u59c6\u53ef\u4ee5\u81ea\u7136\u751f\u6210\u7684\u5730\u65b9.\u4e0d\u8fc7\u4f60\u4e00\u65e6\u627e\u5230\u4e86\u8fd9\u6837\u7684\u597d\u5730\u65b9,\u5b83\u5c31\u4f1a\u5403\u6389\u751f\u6210\u7684\u90a3\u4e9b\u53f2\u83b1\u59c6,\u62a5\u4ee5\u4f60\u5927\u91cf\u7684\u9b54\u529b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMwg==",
                    "tooltip": "<strong>\u5514\u5463\u5463\u5463\u5463,\u597d\u9ecf!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u597d\u7684\u4ea7\u80fd\u82b1"
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
                    "source": "\u5347\u7ea7\u9b54\u529b\u6c60",
                    "target": "\u7aa5\u89c1\u6c34\u4e4b\u672a\u6765"
                },
                {
                    "source": "\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b",
                    "target": "\u6c34\u690d\u7269\u9b54\u6cd5\u80fd\u91cf"
                },
                {
                    "source": "\u767d\u96cf\u83ca",
                    "target": "Moron\u7684\u9b54\u529b\u751f\u4ea7\u548c\u64cd\u7eb5\u6307\u5357"
                },
                {
                    "source": "\u7aa5\u89c1\u6c34\u4e4b\u672a\u6765",
                    "target": "\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54"
                },
                {
                    "source": "\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54",
                    "target": "\u6cf0\u62c9\u94a2"
                },
                {
                    "source": "\u9b54\u6cd5\u7684\u6839\u57fa",
                    "target": "\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb"
                },
                {
                    "source": "\u5173\u6389\u4f60\u7684\u88c5\u7f50\u673a",
                    "target": "\u9e21\u5316"
                },
                {
                    "source": "\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54",
                    "target": "\u66f4\u597d\u7684\u4ea7\u80fd\u82b1"
                },
                {
                    "source": "\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b",
                    "target": "\u66f4\u597d\u7684\u4ea7\u80fd\u82b1"
                },
                {
                    "source": "Moron\u7684\u9b54\u529b\u751f\u4ea7\u548c\u64cd\u7eb5\u6307\u5357",
                    "target": "\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b"
                },
                {
                    "source": "\u5207\u5272\u6210\u7247",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60"
                },
                {
                    "source": "\u767d\u96cf\u83ca",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60",
                    "target": "\u8fd9\u4e9b\u82b1\u7a76\u7adf\u90fd\u6709\u4ec0\u4e48\u7528?"
                },
                {
                    "source": "\u82b1\u5349\u5ac1\u63a5",
                    "target": "\u6388\u7c89\u597d\u4f19\u4f34"
                },
                {
                    "source": "\u82b1\u5349\u5ac1\u63a5",
                    "target": "\u767d\u96cf\u83ca"
                },
                {
                    "source": "\u6cf0\u62c9\u94a2",
                    "target": "\u4e9a\u5c14\u592b\u6d77\u59c6(Alfheim,\u7cbe\u7075\u4e4b\u56fd)"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u5347\u7ea7\u9b54\u529b\u6c60"
                },
                {
                    "source": "\u8fd9\u4e9b\u82b1\u7a76\u7adf\u90fd\u6709\u4ec0\u4e48\u7528?",
                    "target": "\u5347\u7ea7\u9b54\u529b\u6c60"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60",
                    "target": "\u5347\u7ea7\u9b54\u529b\u6c60"
                },
                {
                    "source": "Moron\u7684\u9b54\u529b\u751f\u4ea7\u548c\u64cd\u7eb5\u6307\u5357",
                    "target": "\u592a\u9633\u80fd:\u82b1\u5349\u7248\u672c"
                },
                {
                    "source": "\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb",
                    "target": "\u82b1!!!\u65e0\u9650\u7684\u82b1!!!"
                },
                {
                    "source": "\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54",
                    "target": "\u82b1!!!\u65e0\u9650\u7684\u82b1!!!"
                },
                {
                    "source": "\u4e9a\u5c14\u592b\u6d77\u59c6(Alfheim,\u7cbe\u7075\u4e4b\u56fd)",
                    "target": "\u548c\u7cbe\u7075\u5de5\u4e1a\u7684\u4e00\u573a\u4ea4\u6613"
                },
                {
                    "source": "\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb",
                    "target": "\u53cd\u78c1\u6027"
                },
                {
                    "source": "\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b",
                    "target": "\u6839\u636e\u4e00\u5207\u5df2\u77e5\u7684\u9b54\u529b\u751f\u4ea7\u6cd5\u5219..."
                },
                {
                    "source": "\u66f4\u597d\u7684\u4ea7\u80fd\u82b1",
                    "target": "\u5f3a\u5236\u6027\u5ca9\u6d46\u80fd\u91cf"
                },
                {
                    "source": "Moron\u7684\u9b54\u529b\u751f\u4ea7\u548c\u64cd\u7eb5\u6307\u5357",
                    "target": "\u6697\u80fd\u91cf"
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u9b54\u6cd5\u7684\u6839\u57fa"
                },
                {
                    "source": "\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb",
                    "target": "\u66b4\u529b\u662f\u84dd\u8272\u7684"
                },
                {
                    "source": "\u4e9a\u5c14\u592b\u6d77\u59c6(Alfheim,\u7cbe\u7075\u4e4b\u56fd)",
                    "target": "\u7b2c\u4e00\u56de\u5408...\u5f00\u6253!"
                },
                {
                    "source": "\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54",
                    "target": "\u7b26\u65872"
                },
                {
                    "source": "\u66f4\u597d\u7684\u4ea7\u80fd\u82b1",
                    "target": "\u7ecf\u9a8c\u4e30\u5bcc\u7684\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6"
                },
                {
                    "source": "\u7b2c\u4e00\u56de\u5408...\u5f00\u6253!",
                    "target": "\u7b2c\u4e8c\u56de\u5408...\u5f00\u6253!"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u5ea7\u9b54\u529b\u6c60",
                    "target": "\u9b54\u529b\u94bb\u77f3"
                },
                {
                    "source": "\u84dd\u8272\u7684\u9b54\u6cd5\u7c89\u672b",
                    "target": "\u8fd9\u662f\u5185\u71c3\u53d1\u7535\u673a\u5417?"
                },
                {
                    "source": "\u9b54\u6cd5\u7684\u6839\u57fa",
                    "target": "\u82b1\u5349\u5ac1\u63a5"
                },
                {
                    "source": "\u66f4\u597d\u7684\u4ea7\u80fd\u82b1",
                    "target": "\u5173\u6389\u4f60\u7684\u88c5\u7f50\u673a"
                },
                {
                    "source": "\u690d\u7269\u9b54\u6cd5\u5b66\u5bb6\u6700\u597d\u7684\u670b\u53cb",
                    "target": "\u73ab\u7470\u662f\u8840\u7ea2\u7684"
                },
                {
                    "source": "\u66f4\u597d\u7684\u4ea7\u80fd\u82b1",
                    "target": "\u5514\u5463\u5463\u5463\u5463,\u597d\u9ecf!"
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
    