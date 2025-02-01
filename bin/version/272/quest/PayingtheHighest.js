
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
                    "name": "\u5143\u7d20\u94ed\u6587",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/425.png",
                    "x": 252.0,
                    "y": 252.0,
                    "data": "\u4eea\u5f0f\u7684\u5fc5\u9700\u54c1. \u5236\u4f5c\u4eea\u5f0f\u63a8\u6d4b\u6756,\u4f60\u5c31\u80fd\u66f4\u65b9\u4fbf\u5730\u5e03\u7f6e\u4eea\u5f0f\u77f3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABqQ==",
                    "title": "\u5143\u7d20\u94ed\u6587",
                    "tooltip": "<strong>\u5143\u7d20\u94ed\u6587</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4eea\u5f0f"
                },
                {
                    "name": "4\u9636\u77f3\u677f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/704.png",
                    "x": 348.0,
                    "y": 288.0,
                    "data": "4\u9636\u77f3\u677f:\u63a5\u8fd1\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACwA==",
                    "title": "4\u9636\u77f3\u677f",
                    "tooltip": "<strong>4\u9636\u77f3\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "name": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/707.png",
                    "x": 516.0,
                    "y": 360.0,
                    "data": "\u4f60\u76845\u9636\u5b9d\u73e0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACww==",
                    "title": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!",
                    "tooltip": "<strong>\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53ef\u6015\u7684\u9b54\u6cd5\u8f7d\u4f53</br>\u6076\u9b54\u6c14\u8840\u788e\u7247</br>\u9540\u94d1\u94af</br>5\u9636\u77f3\u677f"
                },
                {
                    "name": "2\u9636\u7b26\u6587",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/463.png",
                    "x": 192.0,
                    "y": 12.0,
                    "data": "\u901f\u5ea6\u7b26\u6587\u662f\u552f\u4e00\u76842\u9636\u7b26\u6587. \u987e\u540d\u601d\u4e49,\u6bcf\u4e2a\u901f\u5ea6\u7b26\u6587\u53ef\u52a0\u6cd5\u53e0\u52a025\uff05\u7684\u8840\u4e4b\u796d\u575b\u5904\u7406\u901f\u5ea6.</br></br>\u4f46\u662f,\u8fd9\u79cd\u7b26\u6587\u4f1a\u4f7f\u5b9e\u9645\u5236\u4f5c\u7269\u54c1\u66f4\u52a0\u56f0\u96be,\u6240\u4ee5\u5728\u4f7f\u7528\u6b64\u7b26\u6587\u524d,\u8bf7\u786e\u8ba4\u81ea\u5df1\u80fd\u5426\u5236\u4f5c\u8fd9\u79cd\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABzw==",
                    "title": "2\u9636\u7b26\u6587",
                    "tooltip": "<strong>2\u9636\u7b26\u6587</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "name": "5\u9636\u8840\u4e4b\u796d\u575b",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/928.png",
                    "x": 300.0,
                    "y": 408.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u5236\u4f5c5\u7ea7\u677f\u5ca9,\u4f60\u9700\u8981\u4e00\u4e2a\u4e94\u9636\u796d\u575b. \u5b83\u9700\u89814\u4e2a\u4fe1\u6807. \u4fe1\u6807\u9700\u8981\u901a\u8fc7\u5965\u672f\u5408\u6210,\u53ef\u4ee5\u5728\u9b54\u5bfc\u624b\u518c\u4e2d\u7684GTNH\u9875\u9762\u4e0a\u627e\u5230\u76f8\u5173\u7814\u7a76. \u800c\u76f8\u5173\u4efb\u52a1\u5728\"\u719f\u7ec3\u7684\u795e\u79d8\u4f7f\"\u4efb\u52a1\u680f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADoA==",
                    "title": "5\u9636\u8840\u4e4b\u796d\u575b",
                    "tooltip": "<strong>5\u9636\u8840\u4e4b\u796d\u575b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "name": "\u7ea6\u675f\u5de5\u5177:\u65a7",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/436.png",
                    "x": 156.0,
                    "y": 312.0,
                    "data": "\u5728\u88ab\u53f3\u51fb\u6fc0\u6d3b\u540e,\u8fd9\u4e2a\u65a7\u5934\u5c06\u6e05\u9664\u5927\u8303\u56f4\u5185\u7684\u4efb\u4f55\u6728\u6750.\u8b66\u544a:\u8fd9\u5c06\u4f7f\u7528\u5927\u91cf\u7684LP.\u4f60\u53ef\u80fd\u4f1a\u7a81\u7136\u6b7b\u4ea1...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABtA==",
                    "title": "\u7ea6\u675f\u5de5\u5177:\u65a7",
                    "tooltip": "<strong>\u7ea6\u675f\u5de5\u5177:\u65a7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4eea\u5f0f"
                },
                {
                    "name": "\u5f3a\u5927\u7684\u788e\u7247",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/703.png",
                    "x": 564.0,
                    "y": 216.0,
                    "data": "\u53ec\u5524\u6765\u7684\u6076\u9b54\u76f8\u5f53\u5f3a\u5927,\u4f46\u4ed6\u4eec\u7684\u7075\u9b42\u542b\u6709\u5de8\u5927\u7684\u529b\u91cf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACvw==",
                    "title": "\u5f3a\u5927\u7684\u788e\u7247",
                    "tooltip": "<strong>\u5f3a\u5927\u7684\u788e\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9b54\u5165\u4fb5"
                },
                {
                    "name": "\u7ea6\u675f\u88c5\u7532",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/431.png",
                    "x": 156.0,
                    "y": 408.0,
                    "data": "\u662f\u65f6\u5019\u7ec4\u88c5\u4f60\u7684\u76d4\u7532\u4e86.\u6309\u7167\u5728\u5de5\u4f5c\u53f0\u4e2d\u5408\u6210\u80f8\u7532\u7684\u6446\u653e\u65b9\u5f0f,\u5728\u5730\u4e0a\u653e\u7f6e\u65b9\u5757. \u7075\u9b42\u88c5\u7532\u953b\u9020\u77f3\u5fc5\u987b\u5728\u81f3\u5c11\u4e24\u4fa7\u8fde\u63a5\u5230\u7ed3\u6784. \u7136\u540e,\u7528\u7a7a\u624b\u53f3\u952e\u953b\u9020\u77f3\u6765\u5236\u4f5c\u76d4\u7532.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABrw==",
                    "title": "\u7ea6\u675f\u88c5\u7532",
                    "tooltip": "<strong>\u7ea6\u675f\u88c5\u7532</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f3a\u529b\u88c5\u7532"
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/164.png",
                    "x": 108.0,
                    "y": 96.0,
                    "data": "\u4e0d\u5b8c\u5168\u662f\u4e00\u4e2a\"\u7535\u6c60\",\u66f4\u50cf\u662f\u4f60\u751f\u547d\u70b9(LP)--\u4e5f\u5c31\u662f\u8840\u6db2--\u7684\u4fbf\u643a\u5f0f\u63a5\u5165\u70b9.</br></br>\u628a\u8fd9\u73a9\u610f\u7ed1\u5b9a\u5230\u4f60\u81ea\u5df1,\u53f3\u952e\u5373\u53ef\u6d88\u8017\u4f60\u7684\u7ea2\u5fc3\u5e76\u5728\u7075\u9b42\u7f51\u7edc\u4e2d\u5b58\u50a8200LP. \u7075\u9b42\u7f51\u7edc\u4e2d\u7684LP\u53ef\u4ee5\u4e3a\u70bc\u91d1\u6216\u8005\u4eea\u5f0f\u4f9b\u80fd. \u5c06\u6c14\u8840\u5b9d\u73e0\u653e\u5165\u796d\u575b\u5373\u53ef1:1\u5730\u8f6c\u5316\u796d\u575b\u4e2d\u7684\u8840\u6db2\u4e3aLP,\u8fd9\u662f\u81ea\u52a8\u5316\u7684\u57fa\u7840. </br></br>\u4f60\u7ed1\u5b9a\u7684\u6700\u9ad8\u9636\u5b9d\u73e0\u5bb9\u91cf\u5373\u4e3a\u4f60\u7684\u7075\u9b42\u7f51\u7edc\u7684\u5bb9\u91cf\u4e0a\u9650,\u4f46\u662f\u4f60\u9700\u8981\u5c06\u5b83\u653e\u5230\u4e00\u4e2a\u5408\u9002\u7b49\u7ea7\u7684\u796d\u575b\u4e2d,\u4ee5\u6301\u7eed\u5438\u6536\u8840\u6db2.</br></br>\u8bd1\u8005\u6ce8: \u5efa\u8bae\u7528\u4e00\u4e2a\u989d\u5916\u796d\u575b\u914d\u5408\u82e6\u96be\u4e4b\u4e95\u4eea\u5f0f\u4e0e\u732e\u796d\u7b26\u6587\u63d0\u4f9b\u6e90\u6e90\u4e0d\u65ad\u7684LP.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAApA==",
                    "title": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)",
                    "tooltip": "<strong>\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Poke</br>\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV"
                },
                {
                    "name": "3\u9636\u7b26\u6587",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/427.png",
                    "x": 384.0,
                    "y": 132.0,
                    "data": "\u7b2c\u4e00\u79cd\u7b26\u6587,\u6bcf\u4e2a\u4e58\u6cd5\u53e0\u52a050\uff05\u7684\u796d\u575b\u8f93\u5165/\u51fa\u7f13\u5b58; \u7b2c\u4e8c\u79cd\u7b26\u6587,\u6bcf\u4e2a\u53ef\u4ee5\u589e\u52a03500L\u796d\u575b\u5bb9\u91cf.\u8fd9\u79cd\u7b26\u6587\u4e5f\u53ef\u4ee5\u589e\u52a0\u8f93\u5165/\u51fa\u7f13\u5b58,\u8868\u73b0\u4e3a\u796d\u575b\u5bb9\u91cf\u768410\uff05.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABqw==",
                    "title": "3\u9636\u7b26\u6587",
                    "tooltip": "<strong>3\u9636\u7b26\u6587</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "name": "2\u9636\u5370\u8bb0",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/228.png",
                    "x": 252.0,
                    "y": 60.0,
                    "data": "\u6709\u4e86\u52a0\u5f3a\u7684\u77f3\u677f,\u4f60\u5c31\u80fd\u5236\u9020\u65b0\u7684\u5370\u8bb0\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA5A==",
                    "title": "2\u9636\u5370\u8bb0",
                    "tooltip": "<strong>2\u9636\u5370\u8bb0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e8c\u9636-\u77f3\u677f"
                },
                {
                    "name": "\u590d\u6742\u7684\u6cd5\u672f\u7cfb\u7edf",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/438.png",
                    "x": 348.0,
                    "y": 120.0,
                    "data": "\u4e0e\u5177\u6709\u6838\u5fc3\u548c\u57fa\u67b6\u7684\u7b80\u5355\u6cd5\u672f\u4e0d\u540c,\u590d\u6742\u7684\u6cd5\u672f\u7cfb\u7edf\u4ee4\u4eba\u96be\u4ee5\u7f6e\u4fe1...\u590d\u6742. \u8fd9\u91cc\u6709\u592a\u591a\u7684\u7ec4\u5408\u6765\u8986\u76d6\u5b83\u4eec,\u56e0\u6b64\u5efa\u8bae\u5728\u5176\u4ed6\u5730\u65b9\u5bfb\u627e\u77e5\u8bc6. \u4f46\u662f,\u901a\u8fc7\u6b64\u4efb\u52a1\u4e2d\u7684\u7269\u54c1,\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e2a\u7b80\u5355\u7684\u6316\u6398\u6cd5\u672f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABtg==",
                    "title": "\u590d\u6742\u7684\u6cd5\u672f\u7cfb\u7edf",
                    "tooltip": "<strong>\u590d\u6742\u7684\u6cd5\u672f\u7cfb\u7edf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "name": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/430.png",
                    "x": 204.0,
                    "y": 360.0,
                    "data": "\u901a\u8fc7Shift\u53f3\u952e\u542f\u52a8\u4f60\u7684\u5251,\u5e76\u6740\u6b7b\u654c\u4eba! \u6536\u96c6\u5c3d\u53ef\u80fd\u591a\u7684\u788e\u7247.\u4f60\u9700\u8981\u5f88\u591a\u5f88\u591a...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABrg==",
                    "title": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "tooltip": "<strong>\u83b7\u53d6\u7075\u9b42\u788e\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8840\u8165\u4e4b\u5251"
                },
                {
                    "name": "\u4eea\u5f0f\u62c6\u89e3\u6756",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2462.png",
                    "x": 252.0,
                    "y": 324.0,
                    "data": "\u4f7f\u7528\u4eea\u5f0f\u62c6\u89e3\u6756\u53ef\u4ee5\u5feb\u901f\u62c6\u9664\u4eea\u5f0f\u5e76\u81ea\u52a8\u56de\u6536\u4eea\u5f0f\u77f3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJng==",
                    "title": "\u4eea\u5f0f\u62c6\u89e3\u6756",
                    "tooltip": "<strong>\u4eea\u5f0f\u62c6\u89e3\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d"
                },
                {
                    "name": "\u7ea6\u675f\u5de5\u5177:\u9550",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/434.png",
                    "x": 156.0,
                    "y": 240.0,
                    "data": "\u91c7\u77ff\u4ece\u672a\u5982\u6b64\u7b80\u5355.\u53ea\u9700\u624b\u6301\u6b64\u5de5\u5177\u53f3\u952e,\u6240\u6709\u77f3\u5934\u90fd\u6d88\u5931\u4e86! \u50cf\u6240\u6709\u7ea6\u675f\u5de5\u5177\u4e00\u6837,\u5b83\u4f7f\u7528\u4e86\u5927\u91cf\u7684LP.</br></br>[note]\u5f53\u5fc3\u522b\u6389\u8fdb\u5ca9\u6d46![/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABsg==",
                    "title": "\u7ea6\u675f\u5de5\u5177:\u9550",
                    "tooltip": "<strong>\u7ea6\u675f\u5de5\u5177:\u9550</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4eea\u5f0f"
                },
                {
                    "name": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/421.png",
                    "x": 300.0,
                    "y": 120.0,
                    "data": "...\u4f60\u9700\u8981\u66f4\u591a\u7684\u8840.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABpQ==",
                    "title": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "tooltip": "<strong>\u7b2c\u4e09\u9636-\u77f3\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "name": "\u5347\u534e",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/701.png",
                    "x": 612.0,
                    "y": 312.0,
                    "data": "\u4f60\u611f\u5230\u88ab\u8d4b\u4e88\u4e86\u529b\u91cf,\u8f7b\u98d8\u98d8\u7684,\u5c31\u50cf\u4e2a\u5e7d\u7075.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACvQ==",
                    "title": "\u5347\u534e",
                    "tooltip": "<strong>\u5347\u534e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>6\u9636\u8840\u4e4b\u796d\u575b</br>\u94f1"
                },
                {
                    "name": "\u6076\u9b54\u6c14\u8840\u788e\u7247",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2456.png",
                    "x": 432.0,
                    "y": 360.0,
                    "data": "\u60f3\u8981\u83b7\u5f97\u6076\u9b54\u6c14\u8840\u788e\u7247,\u4f60\u5f97\u5148\u53ec\u5524\u4e00\u53ea\u6076\u9b54\u7136\u540e\u6740\u6b7b\u5b83. \u4f60\u5f97\u5148\u50cf\u8fd9\u6837\u653e\u7f6e\u5965\u672f\u57fa\u5ea7:</br></br>xpxpx</br>xxxxx</br>pxPxp</br>xxxxx</br>xpxpx</br></br>x",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJmA==",
                    "title": "\u6076\u9b54\u6c14\u8840\u788e\u7247",
                    "tooltip": "<strong>\u6076\u9b54\u6c14\u8840\u788e\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86</br>4\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "name": "\u836f\u6c34:\u98de\u884c\u836f\u6c34",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/415.png",
                    "x": 72.0,
                    "y": 276.0,
                    "data": "\u53ea\u662f\u60f3\u8ba9\u4f60\u77e5\u9053\u4ec0\u4e48\u662f\u53ef\u80fd\u7684.\u8ba9\u6211\u4eec\u505a\u4e00\u4e2a\u836f\u6c34\u6837\u54c1,\u597d\u4e48\uff1f\u7ed9\u81ea\u5df1\u62ff\u4e2a\u836f\u74f6\u3001\u7fbd\u6bdb\u548c\u4f60\u5236\u4f5c\u7684\u4e00\u79cd\u865a\u5f31\u7c98\u5408\u5242.\u5c06\u8fd9\u4e9b\u7ed3\u5408\u5728\u4e00\u8d77,\u4f60\u4f1a\u5f97\u5230\u4e00\u4e9b\u4f60\u53ef\u80fd\u60f3\u8981\u4fdd\u7559\u4e00\u6bb5\u65f6\u95f4\u7684\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABnw==",
                    "title": "\u836f\u6c34:\u98de\u884c\u836f\u6c34",
                    "tooltip": "<strong>\u836f\u6c34:\u98de\u884c\u836f\u6c34</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u836f\u6c34\u50ac\u5316\u5242</br>\u7279\u6b8a\u836f\u74f6"
                },
                {
                    "name": "5\u9636\u7b26\u6587",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/711.png",
                    "x": 540.0,
                    "y": 312.0,
                    "data": "\u6700\u9ad8\u9636\u7b26\u6587: \u5e76\u6ca1\u6709\u592a\u591a\u53ef\u7528\u7684\u7b26\u6587. \u4fc3\u8fdb\u7b26\u6587\u53ef\u4ee5\u51cf\u5c11\u796d\u575b\u7f13\u5b58\u4e0e\u5916\u754c\u5bb9\u5668\u4ea4\u4e92\u7684\u68c0\u6d4b\u65f6\u95f4. \u521d\u59cb\u503c\u4e3a20t\u4e00\u6b21,\u6bcf\u589e\u52a0\u4e00\u4e2a\u7b26\u6587\u53ef\u4ee5\u51cf\u5c111t,\u6700\u5c0f\u503c\u4e3a1t.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACxw==",
                    "title": "5\u9636\u7b26\u6587",
                    "tooltip": "<strong>5\u9636\u7b26\u6587</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!"
                },
                {
                    "name": "\u8fdb\u9636\u4eea\u5f0f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/712.png",
                    "x": 348.0,
                    "y": 228.0,
                    "data": "\u66f4\u5f3a\u529b\u7684\u4eea\u5f0f\u9700\u8981\u5e7d\u6697\u94ed\u6587.\u4f7f\u7528\u4f60\u7684\u65b0\u5e7d\u6697\u7c89\u7b14,\u53ef\u4ee5\u5f3a\u5316\u4f60\u7684\u4eea\u5f0f\u63a8\u6d4b\u6756\u6765\u653e\u7f6e\u8fd9\u4e9b.\u8ba9\u4f60\u53ef\u4ee5\u8fdb\u884c\u66f4\u591a\u7684\u4eea\u5f0f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACyA==",
                    "title": "\u8fdb\u9636\u4eea\u5f0f",
                    "tooltip": "<strong>\u8fdb\u9636\u4eea\u5f0f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5143\u7d20\u7c89\u7b14II"
                },
                {
                    "name": "\u4eea\u5f0f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/433.png",
                    "x": 204.0,
                    "y": 216.0,
                    "data": "\u662f\u65f6\u5019\u8fdb\u884c\u4e9b\u4eea\u5f0f\u4e86. \u4f60\u53ef\u80fd\u9996\u5148\u6784\u9020\u6700\u57fa\u7840\u7684\u7ed1\u5b9a\u4eea\u5f0f.</br></br>\u5728\u8fd9\u4e9b\u7eb7\u7e41\u590d\u6742\u3001\u591a\u79cd\u591a\u6837\u7684\u4eea\u5f0f\u4e2d,\u67d0\u4e9b\u662f\u6709\u7528\u7684,\u67d0\u4e9b\u662f\u8fa3\u9e21.</br></br>\u8fd9\u91cc\u5217\u4e3e\u4e86\u4e00\u4e9b\u4f60\u53ef\u80fd\u4f1a\u5173\u5fc3\u7684\u4eea\u5f0f:</br>\u4e0b\u754c\u591c\u66f2(Serenade-of-the-Nether): \u8981\u662f\u4f60\u4e0d\u559c\u6b22\u70bc\u72f1\u4e4b\u58f6\u7684\u8bdd,\u8fd9\u662f\u4e2a\u4e0d\u9519\u7684\u66ff\u4ee3\u54c1;</br>\u70bc\u91d1\u4e4b\u8c23(Ballad-of-Alchemy): \u81ea\u52a8\u70bc\u91d1;</br>\u82e6\u96be\u4e4b\u4e95(Well-of-Suffering): \u81ea\u52a8\u5316\u8840\u6db2\u6536\u96c6\u7cfb\u7edf;</br>\u9668\u661f\u4eea\u5f0f(Mark-of-the-Falling-Tower):\u6839\u636e\u6295\u5165\u7269\u54c1\u4e0d\u540c,\u53ec\u552438\u79cd\u9668\u661f(\u8bd1\u8005\u6ce8\uff1a\u6e85\u5c04\u8303\u56f4\u975e\u5e38\u5927,\u5efa\u8bae\u79bb\u81ea\u5df1\u5bb6\u8d8a\u8fdc\u8d8a\u597d);</br>\u6076\u9b54\u5165\u4fb5(Convocation of the Damned): 6\u9636\u796d\u575b\u3001\u4ee5\u53ca\u5404\u79cd\u7ec8\u6781\u7269\u54c1\u6240\u9700.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABsQ==",
                    "title": "\u4eea\u5f0f",
                    "tooltip": "<strong>\u4eea\u5f0f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3</br>\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)"
                },
                {
                    "name": "\u4e00\u9636\u77f3\u677f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/407.png",
                    "x": 108.0,
                    "y": 144.0,
                    "data": "\u57fa\u7840\u77f3\u677f.\u57fa\u7840\u5230\u53ea\u662f\u77f3\u5934\u6ce8\u5165\u8840\u6db2.</br></br>\u4f60\u53ef\u4ee5\u901a\u8fc7\u6cf5\u3001\u6876\u6216\u8005\u5355\u5143\u7b49\u4efb\u4f55\u65b9\u5f0f\u83b7\u53d6\u5207\u5272\u673a\u6240\u9700\u7684\u8840.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABlw==",
                    "title": "\u4e00\u9636\u77f3\u677f",
                    "tooltip": "<strong>\u4e00\u9636\u77f3\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Poke"
                },
                {
                    "name": "\u53ec\u5524\u9668\u77f3!",
                    "symbolSize": 59,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7595617807436879192.png",
                    "x": 474.0,
                    "y": 318.0,
                    "data": "\u9668\u661f\u4eea\u5f0f\u662fGTNH\u4e2d\u4f60\u80fd\u4f7f\u7528\u7684\u6700\u4e3a\u5f3a\u5927\u7684\u9b54\u6cd5\u4e4b\u4e00.\u5b83\u80fd\u5728\u4f60\u6307\u5b9a\u7684\u5730\u65b9\u53ec\u5524\u4e00\u679a\u7531\u5404\u79cdGT\u77ff\u7269\u7ec4\u6210\u7684\u5de8\u578b\u9668\u77f3.\u8981\u6d88\u8017\u7684\u53ea\u662f\u4e00\u4e2a\u796d\u54c1\u548c\u5927\u91cfLP.\u66f4\u597d\u7684\u662f,\u901a\u8fc7\u9668\u661f\u4eea\u5f0f,\u4f60\u751a\u81f3\u80fd\u6bd4\u6b63\u5e38\u6d41\u7a0b\u66f4\u65e9\u83b7\u5f97\u67d0\u4e9b\u77ff\u7269!\u7528NEI\u67e5\u8be2\u6240\u6709\u53ef\u4ee5\u83b7\u5f97\u7684\u9668\u77f3.\u4e3e\u4e2a\u4f8b\u5b50,\u4f60\u53ef\u4ee5\u5148\u770b\u770b\u4f7f\u7528\u6cb3\u8c5a\u7684\u5408\u6210\u8868.</br></br>\u9668\u77f3\u4f1a\u843d\u5728\u4e3b\u4eea\u5f0f\u77f3\u4e0a\u65b9\u6700\u9ad8\u7684\u65b9\u5757\u4e0a.\u901a\u5165\u6ce5\u571f\u8bd5\u5242(Terrae)\u53ef\u4ee5\u8ba9\u9668\u77f3\u7684\u534a\u5f84\u589e\u52a01.\u901a\u5165\u73af\u5883\u8bd5\u5242(Orbis Terrae)\u53ef\u4ee5\u8ba9\u9668\u77f3\u7684\u534a\u5f84\u589e\u52a02.</br></br>\u9668\u77f3\u6389\u843d\u65f6\u4f1a\u5bf9\u5468\u56f4\u5b9e\u4f53\u9020\u6210\u4f24\u5bb3,\u4f46\u662f\u4e0d\u4f1a\u7834\u574f\u65b9\u5757\u548c\u5730\u5f62.\u5982\u679c\u6709\u6751\u6c11\u6216\u8005\u91cd\u8981\u7684\u751f\u7269\u5728\u9644\u8fd1\u8981\u6ce8\u610f.\u9668\u77f3\u7684\u5c3a\u5bf8\u8d8a\u5927,\u5bf9\u5b9e\u4f53\u9020\u6210\u7684\u4f24\u5bb3\u548c\u4f24\u5bb3\u8303\u56f4\u4f1a\u76f8\u5e94\u5de8\u91cf\u589e\u52a0.</br></br>\u53ef\u4ee5\u7528\u591a\u65b9\u5757\u77ff\u673a\u6316\u7a7a\u9668\u77f3\u91cc\u9762\u7684\u5404\u79cd\u77ff\u7269,\u4f46\u4e5f\u6709\u522b\u7684\u65b9\u6cd5!",
                    "quest_id": "s4B77B7FSamWlvHY8hfqqA==",
                    "title": "\u53ec\u5524\u9668\u77f3!",
                    "tooltip": "<strong>\u53ec\u5524\u9668\u77f3!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9b54\u6c14\u8840\u788e\u7247"
                },
                {
                    "name": "3\u9636\u8840\u4e4b\u796d\u575b",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/926.png",
                    "x": 252.0,
                    "y": 120.0,
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u796d\u575b\u66f4\u5f3a\u5927,\u4f60\u9700\u8981\u5347\u7ea7\u5b83. \u4f60\u9700\u8981\u7528\u8840\u8165\u795e\u79d8\u5757\u5efa\u9020\u4e24\u683c\u9ad8\u7684\u67f1\u5b50,\u5e76\u5728\u6bcf\u4e2a\u67f1\u5b50\u7684\u9876\u90e8\u653e\u4e00\u5757\u8424\u77f3.</br></br>PS\uff1a \u5efa\u8bae\u5230\u8840\u9b54\u6cd5\u5b98\u65b9wiki\u67e5\u770b\u796d\u575b\u7ed3\u6784\u622a\u56fe,\u4e0e\u5b98\u65b9wiki\u796d\u575b\u552f\u4e00\u7684\u4e0d\u540c\u5c31\u662f\u67f1\u5b50\u6750\u8d28,\u5176\u4f59\u7ed3\u6784\u5b8c\u5168\u4e00\u81f4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADng==",
                    "title": "3\u9636\u8840\u4e4b\u796d\u575b",
                    "tooltip": "<strong>3\u9636\u8840\u4e4b\u796d\u575b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u7b26\u6587</br>\u795e\u79d8\u70f9\u996a"
                },
                {
                    "name": "6\u9636\u8840\u4e4b\u796d\u575b",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/929.png",
                    "x": 564.0,
                    "y": 360.0,
                    "data": "\u8840\u796d\u575b\u7684\u6700\u9ad8\u7b49\u7ea7\u662f6\u7ea7.\u4f60\u9700\u89817\u683c\u9ad8\u7684\u8840\u8165\u7075\u5b9d\u5757\u67f1\u5b50,\u5e76\u4e14\u9876\u90e8\u653e\u7f6e\u788e\u7247\u96c6\u6676.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADoQ==",
                    "title": "6\u9636\u8840\u4e4b\u796d\u575b",
                    "tooltip": "<strong>6\u9636\u8840\u4e4b\u796d\u575b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7075\u5b9d</br>5\u9636\u77f3\u677f</br>\u5f3a\u5927\u7684\u788e\u7247"
                },
                {
                    "name": "\u57fa\u7840\u7b26\u6587",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/409.png",
                    "x": 156.0,
                    "y": 120.0,
                    "data": "\u6c14\u8840\u7b26\u6587\u662f\u6784\u6210\u8840\u4e4b\u796d\u575b\u7684\u57fa\u7840\u7b26\u6587,\u505a\u597d\u51c6\u5907,\u4f60\u5c06\u9700\u8981\u6210\u5428\u7684\u6c14\u8840\u7b26\u6587.</br></br>\u4f60\u9700\u89818\u4e2a\u7b26\u6587\u7528\u4e8e\u4f60\u7684\u7b2c2\u9636\u796d\u575b,\u73b0\u5728\u7528\u4f60\u7684\u65b0\u796d\u575b\u9020\u70b9\u65b0\u73a9\u610f\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABmQ==",
                    "title": "\u57fa\u7840\u7b26\u6587",
                    "tooltip": "<strong>\u57fa\u7840\u7b26\u6587</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)</br>\u4e00\u9636\u77f3\u677f"
                },
                {
                    "name": "\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/428.png",
                    "x": 252.0,
                    "y": 288.0,
                    "data": "\u65e2\u7136\u4f60\u6709\u4e86\u5143\u7d20\u94ed\u6587,\u5c31\u53ef\u4ee5\u5236\u4f5c\u57fa\u7840\u7684\u4eea\u5f0f\u63a8\u6d4b\u6756\u4e86.\u5b83\u53ef\u4ee5\u65b9\u4fbf\u5730\u653e\u7f6e\u590d\u6742\u7684\u4eea\u5f0f. Shift+\u53f3\u952e\u53ef\u5207\u6362\u4eea\u5f0f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABrA==",
                    "title": "\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d",
                    "tooltip": "<strong>\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5143\u7d20\u94ed\u6587"
                },
                {
                    "name": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/422.png",
                    "x": 216.0,
                    "y": 96.0,
                    "data": "\u4f60\u9700\u8981MOOORE.\u4f7f\u7528\u66f4\u591a\u7684\u8840\u6765\u6ce8\u5165\u77f3\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABpg==",
                    "title": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "tooltip": "<strong>\u7b2c\u4e8c\u9636-\u77f3\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u7b26\u6587"
                },
                {
                    "name": "\u5143\u7d20\u7c89\u7b14",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/706.png",
                    "x": 612.0,
                    "y": 360.0,
                    "data": "\u9876\u7ea7\u7684\u7c89\u7b14,\u7528\u6765\u753b\u82b1\u4fcf\u7684\u58c1\u753b\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACwg==",
                    "title": "\u5143\u7d20\u7c89\u7b14",
                    "tooltip": "<strong>\u5143\u7d20\u7c89\u7b14</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>6\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "name": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/410.png",
                    "x": 108.0,
                    "y": 216.0,
                    "data": "\u4e0d\u50cf\"\u8840\u70bc\u91d1\u672f(blood-alchemy)\".\u4f60\u53ef\u80fd\u7a0d\u540e\u9700\u8981\u4e0d\u6b62\u4e00\u4e2a,\u4f46\u73b0\u5728\u4e00\u4e2a\u5c31\u8db3\u591f\u4e86.</br></br>\u5728\u63d2\u69fd\u4e2d\u653e\u5165\u6c14\u8840\u5b9d\u73e0\u624d\u80fd\u5f00\u59cb\u5408\u6210,\u70bc\u91d1\u5c06\u4f1a\u6d88\u8017\u7075\u9b42\u7f51\u7edc\u4e2d\u7684LP.\u5236\u4f5c\u66f4\u590d\u6742\u7684\u7269\u54c1\u5c06\u9700\u8981\u66f4\u9ad8\u7ea7\u7684\u6c14\u8840\u5b9d\u73e0.</br></br>\u5982\u679c\u5728\u70bc\u91d1\u8fc7\u7a0b\u4e2d,\u4f60\u7684\u7075\u9b42\u7f51\u7edc\u4e2d\u7684LP\u964d\u81f30,\u90a3\u4e48\u4f60\u5c06\u83b7\u5f97\u4e00\u4e2a\u6c38\u4e45\u7684\u53cd\u80c3debuff,\u76f4\u5230LP\u91cd\u65b0\u63d0\u5347\u624d\u80fd\u6d88\u9664\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABmg==",
                    "title": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "tooltip": "<strong>\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u9636\u77f3\u677f</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "\u8840\u6db2\u80cc\u5305",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2451.png",
                    "x": 252.0,
                    "y": 12.0,
                    "data": "\u8840\u6db2\u80cc\u5305\u4f1a\u6bcf\u6b21\u6263\u9664\u534a\u9897\u5fc3\u5e76\u8f6c\u5316\u4e3a100LP\u5b58\u50a8,\u76f4\u5230\u534a\u8840\u4e3a\u6b62(\u989d\u5916\u751f\u547d\u4e0a\u9650\u4e5f\u8ba1\u7b97\u5728\u5185),\u80cc\u5305\u7684\u5b58\u50a8\u4e0a\u9650\u4e3a10000LP. \u5f53\u8840\u4e4b\u796d\u575b\u6ca1\u6709\u6b63\u5728\u5408\u6210\u7684\u7269\u54c1\u65f6,\u4f60\u53ef\u4ee5\u624b\u6301\u80cc\u5305\u53f3\u952e\u796d\u575b,\u5c06\u5176\u5185\u5b58\u50a8\u7684LP\u6ce8\u5165\u796d\u575b\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJkw==",
                    "title": "\u8840\u6db2\u80cc\u5305",
                    "tooltip": "<strong>\u8840\u6db2\u80cc\u5305</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e8c\u9636-\u77f3\u677f"
                },
                {
                    "name": "\u57fa\u67b6",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/417.png",
                    "x": 108.0,
                    "y": 324.0,
                    "data": "\u57fa\u67b6\u4f7f\u4f60\u7684\u9b54\u6cd5\u6210\u578b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABoQ==",
                    "title": "\u57fa\u67b6",
                    "tooltip": "<strong>\u57fa\u67b6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f"
                },
                {
                    "name": "Poke",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/177.png",
                    "x": 60.0,
                    "y": 120.0,
                    "data": "\u662f\u65f6\u5019\u62bd\u8840\u4e86.\u4f60\u5fc5\u987b\u4ece\u4f60\u81ea\u5df1\u5f00\u59cb...</br></br>\u6bcf\u6b21\u4f7f\u7528\u53ef\u4e3a\u796d\u575b\u6ce8\u5165100LP.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAsQ==",
                    "title": "\u00a7oPoke\u00a7r",
                    "tooltip": "<strong>Poke</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "name": "\u73bb\u7483\u727a\u7272\u5315\u9996",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2452.png",
                    "x": 384.0,
                    "y": 168.0,
                    "data": "\u73bb\u7483\u727a\u7272\u5315\u9996\u7684\u4f7f\u7528\u65b9\u5f0f\u4e0e\u666e\u901a\u727a\u7272\u5315\u9996\u4e00\u81f4,\u4e0d\u540c\u7684\u662f\u6bcf\u6b21\u5b83\u80fd\u5e26\u6765500LP. \u624b\u6301\u71e7\u77f3\u6253\u788e\u666e\u901a\u73bb\u7483\u5373\u53ef\u83b7\u5f97\u73bb\u7483\u788e\u7247.</br></br>\u4e0d\u5e78\u7684\u662f,\u73bb\u7483\u732e\u796d\u5200\u597d\u50cf\u6709\u4e9bbug, \u4f46\u53c8\u6709\u4eba\u8bf4\u5b83\u4e00\u5207\u6b63\u5e38. \u81ea\u5df1\u8bd5\u8bd5\u5427, \u9047\u5230\u95ee\u9898\u5c31\u63d0issue.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJlA==",
                    "title": "\u73bb\u7483\u727a\u7272\u5315\u9996",
                    "tooltip": "<strong>\u73bb\u7483\u727a\u7272\u5315\u9996</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "name": "3\u9636\u5370\u8bb0",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/406.png",
                    "x": 348.0,
                    "y": 60.0,
                    "data": "\u73b0\u5728\u5b83\u4eec\u5f88\u6709\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABlg==",
                    "title": "3\u9636\u5370\u8bb0",
                    "tooltip": "<strong>3\u9636\u5370\u8bb0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e09\u9636-\u77f3\u677f"
                },
                {
                    "name": "\u542f\u52a8\u5668",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2457.png",
                    "x": 252.0,
                    "y": 168.0,
                    "data": "\u4f60\u9700\u8981\u8fd9\u4e2a\u624d\u80fd\u542f\u52a8\u4eea\u5f0f\u3002\u66f4\u590d\u6742\u7684\u4eea\u5f0f\u9700\u8981\u66f4\u9ad8\u7ea7\u7684\u542f\u52a8\u5668\u3002\u5236\u4f5c\u51fa\u6765\u540e\u4f60\u9700\u8981\u9996\u5148\u53f3\u952e\u4ee5\u5c06\u5176\u7ed1\u5b9a\u5230\u81ea\u5df1\uff0c\u7136\u540e\u53f3\u952e\u4e3b\u4eea\u5f0f\u77f3\u5373\u53ef\u542f\u52a8\u4eea\u5f0f\u3002</br></br>[note]\u80fd\u91cf\u6c34\u6676\u9700\u8981\u5b8c\u5168\u5145\u6ee1\u3002[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJmQ==",
                    "title": "\u542f\u52a8\u5668",
                    "tooltip": "<strong>\u542f\u52a8\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "name": "\u8865\u5145\u836f\u5242",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/413.png",
                    "x": 72.0,
                    "y": 240.0,
                    "data": "\u5982\u679c\u836f\u74f6\u7a7a\u4e86,\u4f60\u4e0d\u5fc5\u628a\u5b83\u6254\u6389.\u518d\u8865\u5145\u4e00\u70b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABnQ==",
                    "title": "\u8865\u5145\u836f\u5242",
                    "tooltip": "<strong>\u8865\u5145\u836f\u5242</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u836f\u6c34:\u98de\u884c\u836f\u6c34"
                },
                {
                    "name": "\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2460.png",
                    "x": 612.0,
                    "y": 264.0,
                    "data": "\u4f46\u662f\u5b83\u4e3a\u4ec0\u4e48\u662f\u900f\u660e\u7684?</br></br>[note]\u5b9e\u9645\u4e0a\u5bb9\u91cf\u6ca1\u6709\u63d0\u5347,\u4e5f\u4e0d\u80fd\u6b63\u786e\u663e\u793a\u5176\u5185\u7684\u6c14\u8840,\u540c\u65f6\u65e0\u6cd5\u5728\u796d\u575b\u4e0a\u4f7f\u7528.\u4e0d\u8fc7\u5b83\u786e\u5b9e\u4f1a\u663e\u793a\u4f60\u5f53\u524d\u7684LP\u91cf,\u4e14\u53ef\u7528\u4e8e\u5408\u6210\u4e0b\u4e00\u9636\u5b9d\u73e0.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJnA==",
                    "title": "\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?",
                    "tooltip": "<strong>\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5347\u534e"
                },
                {
                    "name": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/424.png",
                    "x": 300.0,
                    "y": 168.0,
                    "data": "\u4f60\u7684\u7b2c\u4e09\u9636\u6c14\u8840\u5b9d\u73e0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABqA==",
                    "title": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "tooltip": "<strong>\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e09\u9636-\u77f3\u677f</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86"
                },
                {
                    "name": "\u4e3e\u4e2a\u4f8b\u5b50\u5427!",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/419.png",
                    "x": 108.0,
                    "y": 360.0,
                    "data": "\u6709\u5f88\u591a\u7ec4\u5408\u503c\u5f97\u63a2\u7d22,\u6240\u4ee5\u53ea\u9700\u5c1d\u8bd5\u5e76\u72af\u9519! </br></br>[note]\u6216\u8005\u76f4\u63a5\u6c42\u52a9\u7f51\u7edc.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABow==",
                    "title": "\u4e3e\u4e2a\u4f8b\u5b50\u5427!",
                    "tooltip": "<strong>\u4e3e\u4e2a\u4f8b\u5b50\u5427!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u67b6</br>\u6cd5\u672f\u6838\u5fc3"
                },
                {
                    "name": "\u5fae\u578b\u4eea\u5f0f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2458.png",
                    "x": 252.0,
                    "y": 216.0,
                    "data": "\u4e0d\u60f3\u8ba9\u4eea\u5f0f\u5360\u7528\u592a\u591a\u7a7a\u95f4? \u90a3\u5c31\u7528\u7075\u9b42\u538b\u7f29\u5668\u628a\u4eea\u5f0f\u538b\u7f29\u5230\u4e00\u4e2a\u65b9\u5757\u91cc\u5427!</br></br>\u8bd1\u8005\u6ce8: \u624b\u6301\u5b9d\u73e0\u53f3\u952e\u6b64\u65b9\u5757\u5373\u53ef\u538b\u7f29\u4e0a\u65b9\u4eea\u5f0f,\u4e0d\u8fc7\u5b9d\u73e0\u4f1a\u88ab\u5403\u6389...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJmg==",
                    "title": "\u5fae\u578b\u4eea\u5f0f",
                    "tooltip": "<strong>\u5fae\u578b\u4eea\u5f0f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4eea\u5f0f"
                },
                {
                    "name": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/423.png",
                    "x": 192.0,
                    "y": 60.0,
                    "data": "\u4f60\u7684\u7b2c\u4e8c\u9636\u6c14\u8840\u5b9d\u73e0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABpw==",
                    "title": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0",
                    "tooltip": "<strong>\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089</br>\u7b2c\u4e8c\u9636-\u77f3\u677f"
                },
                {
                    "name": "\u82e6\u96be\u4e4b\u4e95",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2454.png",
                    "x": 384.0,
                    "y": 204.0,
                    "data": "\u82e6\u96be\u4e4b\u4e95\u4eea\u5f0f\u5c06\u5bf9\u534a\u5f846\u683c\u5185\u7684\u602a\u7269\u9020\u6210\u4f24\u5bb3,\u5e76\u5c06\u83b7\u5f97\u7684\u8840\u6db2\u6ce8\u51656\u683c\u4e4b\u5185\u7684\u796d\u575b. \u6bcf\u4e2a\u602a\u7269\u6bcf\u6b21\u4f24\u5bb3\u6d88\u80172LP,\u800c\u57fa\u7840\u6536\u83b7\u662f10LP,\u662f\u4e0d\u662f\u6709\u70b9\u8d5a\u5934? \u66f4\u68d2\u7684\u662f,\u4f60\u8fd8\u80fd\u901a\u8fc7\u732e\u796d\u7b26\u6587\u63d0\u9ad8\u6536\u83b7\u7684LP,\u662f\u4e0d\u662f\u8840\u8d5a? \u66f4\u4e0d\u7528\u8bf4\u8fd9\u4e2a\u4eea\u5f0f\u53ef\u4ee5\u5168\u81ea\u52a8\u8fd0\u884c,\u81ea\u52a8\u5316\u83b7\u53d6LP!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJlg==",
                    "title": "\u82e6\u96be\u4e4b\u4e95",
                    "tooltip": "<strong>\u82e6\u96be\u4e4b\u4e95</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fdb\u9636\u4eea\u5f0f"
                },
                {
                    "name": "\u7ea6\u675f\u5de5\u5177:\u94f2",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/435.png",
                    "x": 156.0,
                    "y": 276.0,
                    "data": "\u6709\u6ca1\u6709\u60f3\u8fc7\u6e05\u7406\u4e00\u5927\u7247\u6709\u6ce5\u571f\u3001\u783e\u77f3\u548c\u6c99\u5b50\u7684\u5730\u5f62\uff1f\u4e3a\u4ec0\u4e48\u4e0d\u8ba9\u9b54\u9b3c\u53bb\u505a\u5462\uff1f\u8fd9\u4e2a\u94f2\u5b50,\u5145\u6ee1\u4e86\u6076\u9b54\u7684\u7075\u9b42,\u5c06\u901a\u8fc7\u4f60\u7684\u610f\u5fd7\u91ca\u653e\u529b\u91cf.\u4f46\u662f\u8981\u8b66\u544a:\u4f60\u8981\u53ec\u5524\u7684\u6076\u9b54\u662f\u9965\u6e34\u7684,\u800c\u4e14\u4f7f\u7528\u5b83\u5c06\u6d88\u8017\u5f88\u591aLP,\u6240\u4ee5\u786e\u4fdd\u4f60\u7684LP\u8db3\u591f\u5145\u8db3!</br></br>[note]\u4e0d\u4f1a\u6316\u6398\u4f60\u7684\u4e0b\u65b9.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABsw==",
                    "title": "\u7ea6\u675f\u5de5\u5177:\u94f2",
                    "tooltip": "<strong>\u7ea6\u675f\u5de5\u5177:\u94f2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4eea\u5f0f"
                },
                {
                    "name": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/708.png",
                    "x": 432.0,
                    "y": 288.0,
                    "data": "\u4f60\u76844\u9636\u5b9d\u73e0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACxA==",
                    "title": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86",
                    "tooltip": "<strong>\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u77f3\u677f</br>\u79ef\u5c11\u6210\u94a8\u94a2"
                },
                {
                    "name": "5\u9636\u5370\u8bb0",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2459.png",
                    "x": 564.0,
                    "y": 408.0,
                    "data": "\u5b83\u4eec\u7684\u5b9e\u7528\u6027\u4e25\u91cd\u503c\u5f97\u6000\u7591,\u6240\u4ee5\u4f55\u4e0d\u5c1d\u8bd5\u8840\u6db2\u5175\u5de5\u5382(Blood-Arsenal)\u7684\u5370\u8bb0\u5462? \u628a\u5b83\u4eec\u6536\u96c6\u9f50\u5427!</br></br>PS\uff1a \u95ea\u7535\u5370\u8bb0\u662f\u5236\u4f5c\u5353\u8d8a\u6c14\u8840\u5b9d\u73e0\u7684\u5fc5\u9700\u54c1...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJmw==",
                    "title": "5\u9636\u5370\u8bb0",
                    "tooltip": "<strong>5\u9636\u5370\u8bb0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>5\u9636\u77f3\u677f"
                },
                {
                    "name": "\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2453.png",
                    "x": 204.0,
                    "y": 168.0,
                    "data": "\u901a\u8fc7\u8fd9\u5757\u77f3\u5934,\u4f60\u80fd\u4e3e\u884c\u7b80\u5355\u7684\u4eea\u5f0f,\u6bd4\u5982\u5c06\u767d\u663c\u53d8\u4e3a\u9ed1\u591c,\u6216\u8005\u53ec\u5524\u4e00\u573a\u96f7\u96e8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJlQ==",
                    "title": "\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3",
                    "tooltip": "<strong>\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u542f\u52a8\u5668"
                },
                {
                    "name": "\u770b\u5230\u4e00\u5207",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/408.png",
                    "x": 60.0,
                    "y": 168.0,
                    "data": "\u5f88\u96be\u770b\u5230\u4f60\u7684\u796d\u575b\u91cc\u6709\u591a\u5c11LP,\u6216\u8005\u4f60\u7684\u4e2a\u4eba\u6709\u591a\u5c11LP.\u8fd9\u4e2a\u5c0f\u88c5\u7f6e\u53ef\u4ee5\u5e2e\u4f60\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898.\u53ea\u662f\u624b\u6307\u4e0a\u6709\u70b9\u523a\u75db,\u4e00\u5207\u90fd\u4f1a\u663e\u9732\u51fa\u6765.</br></br>\u5f53\u4f60\u6709\u4e86\u70bc\u91d1\u672f\u53f0\u540e\u4f60\u8fd8\u53ef\u4ee5\u5236\u9020\u66f4\u9ad8\u7ea7\u7684\u89c1\u89e3\u5370\u8bb0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABmA==",
                    "title": "\u770b\u5230\u4e00\u5207",
                    "tooltip": "<strong>\u770b\u5230\u4e00\u5207</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u9636\u77f3\u677f"
                },
                {
                    "name": "\u732e\u796d\u5200",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1325.png",
                    "x": 156.0,
                    "y": 72.0,
                    "data": "\u662f\u65f6\u5019\u5f97\u5230\u66f4\u591a\u7684\u8840\u6db2\u4e86. \u602a\u7269\u662f\u66f4\u591a\u8840\u6db2\u7684\u826f\u597d\u6765\u6e90. \u5728\u4f60\u7684\u4e8c\u9636\u796d\u575b\u4e0a\u5c06\u4f60\u7684\u727a\u7272\u5315\u9996\u53d8\u6210\u4e00\u628a\u732e\u796d\u5200.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFLQ==",
                    "title": "\u732e\u796d\u5200",
                    "tooltip": "<strong>\u732e\u796d\u5200</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u7b26\u6587"
                },
                {
                    "name": "\u5143\u7d20\u7c89\u7b14II",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/709.png",
                    "x": 384.0,
                    "y": 252.0,
                    "data": "\u5f3a\u5316\u8fc7\u7684\u5143\u7d20\u7c89\u7b14,\u53ef\u4ee5\u7528\u6765\u4e66\u5199\u4e00\u4e9b\u6bd4\u4f60\u4e60\u60ef\u7684\u7b26\u6587\u66f4\"\u9ed1\"\u7684\u7b26\u6587...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACxQ==",
                    "title": "\u5143\u7d20\u7c89\u7b14II",
                    "tooltip": "<strong>\u5143\u7d20\u7c89\u7b14II</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u77f3\u677f"
                },
                {
                    "name": "\u7b80\u5355\u7684\u70bc\u91d1\u672f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/412.png",
                    "x": 36.0,
                    "y": 216.0,
                    "data": "\u70bc\u91d1\u672f\u53ef\u80fd\u5f88\u5947\u602a,\u4e5f\u5f88\u4e4f\u5473. \u6709\u5f88\u591a\u8bd5\u5242\u751a\u81f3\u66f4\u591a\u53ef\u80fd\u7684\u7ec4\u5408. \u73b0\u5728,\u4e3a\u4e86\u5f00\u59cb,\u4f60\u9700\u8981\u4e00\u4e9b\u57fa\u672c\u7684\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABnA==",
                    "title": "\u7b80\u5355\u7684\u70bc\u91d1\u672f",
                    "tooltip": "<strong>\u7b80\u5355\u7684\u70bc\u91d1\u672f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)"
                },
                {
                    "name": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/416.png",
                    "x": 156.0,
                    "y": 360.0,
                    "data": "\u7b80\u5355\u7684\u6cd5\u672f\u7cfb\u7edf\u5f88\u5bb9\u6613\u83b7\u5f97,\u53ef\u4ee5\u5728\u4f60\u7684\u8840\u9b54\u6cd5\u751f\u6daf\u65e9\u671f\u5b8c\u6210.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABoA==",
                    "title": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f",
                    "tooltip": "<strong>\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u83b7\u53d6\u7075\u9b42\u788e\u7247"
                },
                {
                    "name": "\u7279\u6b8a\u836f\u74f6",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/414.png",
                    "x": 108.0,
                    "y": 276.0,
                    "data": "\u666e\u901a\u7684\u73bb\u7483\u74f6\u4e0d\u80fd\u5bb9\u7eb3\u4f60\u60f3\u8981\u7684\u8fd9\u4e9b\u7279\u6b8a\u836f\u6c34. \u4f60\u9700\u8981\u7528\u796d\u575b\u4e0a\u7684\u8840\u6765\u704c\u8f93\u5b83\u4eec.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABng==",
                    "title": "\u7279\u6b8a\u836f\u74f6",
                    "tooltip": "<strong>\u7279\u6b8a\u836f\u74f6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u7b26\u6587</br>\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)"
                },
                {
                    "name": "\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/700.png",
                    "x": 612.0,
                    "y": 216.0,
                    "data": "\u4e0d\u5f00\u73a9\u7b11,\u4e00\u4e2a\u4eba\u80fd\u6709\u591a\u9ed1\u6697\uff1f\u4f60\u786e\u4fe1\u6c34\u6676\u4e2d\u7684\u90a3\u5f20\u8138\u53ea\u4e0d\u8fc7\u662f\u4f60\u7684\u60f3\u8c61.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACvA==",
                    "title": "\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f",
                    "tooltip": "<strong>\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?"
                },
                {
                    "name": "4\u9636\u5370\u8bb0",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/420.png",
                    "x": 384.0,
                    "y": 324.0,
                    "data": "\u5b83\u4eec\u597d\u7528\u4e48? \u4e5f\u8bb8\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABpA==",
                    "title": "4\u9636\u5370\u8bb0",
                    "tooltip": "<strong>4\u9636\u5370\u8bb0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u77f3\u677f"
                },
                {
                    "name": "\u836f\u6c34\u50ac\u5316\u5242",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/411.png",
                    "x": 36.0,
                    "y": 276.0,
                    "data": "\u4e3a\u4e86\u63a7\u5236\u836f\u6c34,\u4f60\u9700\u8981\u50ac\u5316\u5242.\u7136\u540e,\u4f60\u53ef\u4ee5\u5c06\u529f\u7387\u50ac\u5316\u5242\u6216\u5ef6\u65f6\u50ac\u5316\u5242\u52a0\u5165\u836f\u6c34,\u4ee5\u589e\u52a0\u836f\u6548\u7684\u6301\u7eed\u65f6\u95f4\u6216\u5f3a\u5ea6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABmw==",
                    "title": "\u836f\u6c34\u50ac\u5316\u5242",
                    "tooltip": "<strong>\u836f\u6c34\u50ac\u5316\u5242</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u7684\u70bc\u91d1\u672f</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86"
                },
                {
                    "name": "\u704c\u8f93\u6cd5\u672f\u9644\u5c5e(Imbued spell upgrades)",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/715.png",
                    "x": 564.0,
                    "y": 168.0,
                    "data": "\u6709\u4e86\u8fd9\u4e9b\u65b0\u7684\u788e\u7247,\u4f60\u53ef\u4ee5\u5236\u4f5c\u6700\u5f3a\u529b\u7684\u6cd5\u672f\u7ec4\u4ef6.\u4e5f\u8bb8\u662f\u65f6\u5019\u5347\u7ea7\u4f60\u7684\u91c7\u6398\u6cd5\u672f\u4e86\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACyw==",
                    "title": "\u704c\u8f93\u6cd5\u672f\u9644\u5c5e(Imbued spell upgrades)",
                    "tooltip": "<strong>\u704c\u8f93\u6cd5\u672f\u9644\u5c5e(Imbued spell upgrades)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f3a\u5927\u7684\u788e\u7247"
                },
                {
                    "name": "\u771f\u6b63\u7684\u8840\u9b54\u6cd5",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/437.png",
                    "x": 156.0,
                    "y": 168.0,
                    "data": "\u8840\u9b54\u6cd5\u5f88\u597d,\u795e\u79d8\u65f6\u4ee3\u4e5f\u662f.\u4e3a\u4ec0\u4e48\u4e0d\u628a\u4e24\u4e2a\u4e16\u754c\u7ed3\u5408\u8d77\u6765\u5462\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABtQ==",
                    "title": "\u771f\u6b63\u7684\u8840\u9b54\u6cd5",
                    "tooltip": "<strong>\u771f\u6b63\u7684\u8840\u9b54\u6cd5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4eea\u5f0f"
                },
                {
                    "name": "\u8840\u8165\u4e4b\u5251",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/432.png",
                    "x": 204.0,
                    "y": 312.0,
                    "data": "\u94bb\u77f3\u548c\u7eff\u5b9d\u77f3\u7684\u5b58\u50a8\u80fd\u529b\u6709\u9650. \u6709\u4e86\u8fd9\u628a\u5251,\u4f60\u5c31\u53ef\u4ee5\u4ece\u4f60\u7684\u654c\u4eba\u8eab\u4e0a\u83b7\u5f97\u7075\u9b42\u788e\u7247.\u662f\u65f6\u5019\u53bb\u6253\u730e\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABsA==",
                    "title": "\u8840\u8165\u4e4b\u5251",
                    "tooltip": "<strong>\u8840\u8165\u4e4b\u5251</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4eea\u5f0f"
                },
                {
                    "name": "\u5f3a\u529b\u88c5\u7532",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/429.png",
                    "x": 204.0,
                    "y": 408.0,
                    "data": "\u5b83\u7684\u5236\u4f5c\u6d41\u7a0b\u5f88\u590d\u6742,\u4e5f\u76f8\u5f53\u6602\u8d35.\u4f46\u4e3a\u4e86\u8fd9\u5957\u771f\u6b63\u5f3a\u5927\u7684\u88c5\u7532,\u4ed8\u51fa\u4e00\u5207\u52aa\u529b\u90fd\u662f\u503c\u5f97\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABrQ==",
                    "title": "\u5f3a\u529b\u88c5\u7532",
                    "tooltip": "<strong>\u5f3a\u529b\u88c5\u7532</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u83b7\u53d6\u7075\u9b42\u788e\u7247"
                },
                {
                    "name": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/161.png",
                    "x": 12.0,
                    "y": 120.0,
                    "data": "\u5f53\u4e00\u822c\u7684\u9b54\u6cd5\u5df2\u7ecf\u4e0d\u80fd\u6ee1\u8db3\u4f60\u9700\u8981\u7684\u65f6\u5019,\u4f60\u53ef\u80fd\u9700\u8981\u4e00\u4e9b...\u66f4\u5f3a\u5927\u7684\u529b\u91cf.\u8fd9\u4efd\u529b\u91cf\u9700\u8981\u7528\u8840\u6db2\u6765\u652f\u4ed8,\u4f60\u7684\u8840...\u6216\u8005\u662f\u5176\u4ed6\u4ec0\u4e48\u4eba\u6216\u8005\u751f\u7269\u7684.</br></br>\u5728\u7b2c\u4e00\u9636,\u4f60\u53ea\u9700\u8981\u653e\u7f6e\u4e00\u4e2a\u8840\u4e4b\u796d\u575b.\u5efa\u8bae\u505a\u597d\u89c4\u5212,\u8fd9\u4e2a\u796d\u575b\u5c06\u4f1a\u8d8a\u6765\u8d8a\u5927,\u6700\u9ad8\u7ea7\u796d\u575b\u5360\u573023x23.</br></br>\u8bf7\u6ce8\u610f,\u5728GTNH\u4e2d,\u6211\u4eec\u524a\u51cf\u4e86\u83b7\u5f97\u7684\u8840\u5e76\u63d0\u9ad8\u4e86\u5408\u6210\u6d88\u8017. \u505a\u597d\u5fc3\u7406\u51c6\u5907.</br></br>\u521d\u59cb\u796d\u575b\u5185\u90e8\u670910,000L\u7684\u50a8\u91cf,\u8fd8\u67091,000L\u8f93\u5165/\u51fa\u7f13\u5b58(\u4f60\u53ef\u4ee5\u5c06\u8840\u62bd\u51fa\u6216\u8005\u6cf5\u5165\u796d\u575b,\u4f46\u4e00\u5f00\u59cb\u7684\u901f\u5ea6\u5f88\u6162). \u8840\u4f1a\u4f18\u5148\u6ce8\u6ee1\u8f93\u5165/\u51fa\u7f13\u5b58,\u4f60\u5728\u7b2c\u4e00\u6b21\u5408\u6210\u65f6\u9700\u8981\u6ce8\u610f\u8fd9\u4e00\u70b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAoQ==",
                    "title": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7",
                    "tooltip": "<strong>\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u70bc\u5316\u6e90\u8d28</br>\u8c03\u8c10\u4e4b\u77f3</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684</br>\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816..."
                },
                {
                    "name": "\u9ad8\u7aef\u4eea\u5f0f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/713.png",
                    "x": 612.0,
                    "y": 408.0,
                    "data": "\u6700\u540e\u7684\u7b26\u6587,\u7528\u4e8e\u6700\u5f3a\u5927\u7684\u4eea\u5f0f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACyQ==",
                    "title": "\u9ad8\u7aef\u4eea\u5f0f",
                    "tooltip": "<strong>\u9ad8\u7aef\u4eea\u5f0f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5143\u7d20\u7c89\u7b14"
                },
                {
                    "name": "5\u9636\u77f3\u677f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/702.png",
                    "x": 516.0,
                    "y": 408.0,
                    "data": "\u4e00\u5757\u77f3\u677f,1023\u6876\u8840!\u8fd8\u80fd\u518d\u88c5\u591a\u5c11?\u6211\u60f3\u77e5\u9053.\u4e8e\u662f\u6211\u53c8\u52a0\u4e86\u6876\u8bd5\u8bd5.\u6210\u4e86!\u4e00\u5757\u77f3\u677f,1024\u6876\u8840!......",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACvg==",
                    "title": "5\u9636\u77f3\u677f",
                    "tooltip": "<strong>5\u9636\u77f3\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>5\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "name": "4\u9636\u7b26\u6587",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/710.png",
                    "x": 432.0,
                    "y": 216.0,
                    "data": "\u6bcf\u4e2a\u8d85\u5bb9\u7b26\u6587\u53ef\u4ee5\u4e58\u6cd5\u53e0\u52a014\uff05\u8840\u4e4b\u796d\u575b\u7684\u5bb9\u91cf.</br></br>\u6bcf\u4e2a\u5b9d\u73e0\u7b26\u6587\u53ef\u4ee5\u589e\u52a04\uff05\u7684\u7075\u9b42\u7f51\u7edc\u5bb9\u91cf,\u4f60\u5c06\u5728\u4e4b\u540e\u7528\u5230\u5b83\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACxg==",
                    "title": "4\u9636\u7b26\u6587",
                    "tooltip": "<strong>4\u9636\u7b26\u6587</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86"
                },
                {
                    "name": "\u6cd5\u672f\u6838\u5fc3",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/418.png",
                    "x": 108.0,
                    "y": 396.0,
                    "data": "\u6709\u4e5d\u4e2a\u57fa\u672c\u5143\u7d20,\u6bcf\u4e2a\u5143\u7d20\u90fd\u6709\u4e00\u4e2a\u6838\u5fc3,\u4ee3\u8868\u5b83\u4eec\u7684\u7269\u54c1.\u4f60\u628a\u8fd9\u4e2a\u6838\u5fc3\u653e\u5728\u4f60\u7684\u796d\u575b\u65c1\u8fb9,\u4ee5\u4fbf\u4f60\u7684\u9b54\u6cd5\u8fdb\u5165\u5b83\u548c\u57fa\u67b6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABog==",
                    "title": "\u6cd5\u672f\u6838\u5fc3",
                    "tooltip": "<strong>\u6cd5\u672f\u6838\u5fc3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f"
                },
                {
                    "name": "\u727a\u7272/\u732e\u796d\u7b26\u6587",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/426.png",
                    "x": 300.0,
                    "y": 60.0,
                    "data": "\u6233\u4f60\u81ea\u5df1\u7684\u624b\u6307\u4ea7\u751f\u7684\u8840\u6db2\u53ef\u80fd\u9002\u7528\u4e8e\u7b80\u5355\u7684\u77f3\u677f\u548c\u7b26\u6587,\u4f46\u4e3a\u9ad8\u7ea7\u4e1c\u897f\u83b7\u5f97\u8db3\u591f\u7684\u8840\u6db2\u662f\u4e4f\u5473\u7684. \u4f7f\u7528\u727a\u7272/\u732e\u796d\u7b26\u6587,\u4f60\u53ef\u4ee5\u589e\u52a0\u4ece\u4f60\u81ea\u5df1\u6216\u602a\u7269\u8eab\u4e0a\u83b7\u5f97\u7684\u8840\u6db2.</br></br>\u6bcf\u4e2a\u7b26\u6587\u52a0\u6cd5\u53e0\u52a012\uff05\u7684\u6536\u76ca.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABqg==",
                    "title": "\u727a\u7272/\u732e\u796d\u7b26\u6587",
                    "tooltip": "<strong>\u727a\u7272/\u732e\u796d\u7b26\u6587</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e09\u9636-\u77f3\u677f"
                },
                {
                    "name": "\u65e0\u9650\u7684LP",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2455.png",
                    "x": 612.0,
                    "y": 168.0,
                    "data": "\u5236\u6210\u8fd9\u4e2a\u7ec8\u6781\u6c14\u8840\u5b9d\u73e0,\u4f60\u5c06\u62e5\u6709\u65e0\u9650\u7684LP. \u4f46\u4f60\u4ecd\u7136\u9700\u8981\u8840\u6db2\u6765\u8fdb\u884c\u5408\u6210,\u4e0d\u662f\u5417? (\u67e5\u770b\u6c38\u9b42\u4e4b\u6ce3(Cry-of-the-Eternal-soul)\u4eea\u5f0f)</br></br>\u8bd1\u8005\u6ce8: \u6b64\u5b9d\u73e0LP\u4e0a\u9650\u4e3a10\u4ebf,\u4f46\u6ce8\u610f\u9700\u8981\u624b\u6301\u6b64\u5b9d\u73e0\u624d\u80fd\u8865\u5145\u7075\u9b42\u7f51\u7edc\u4e2d\u7684LP,\u673a\u5236\u7c7b\u4f3c\u7684\u8fd8\u6709\u521b\u9020\u6cd5\u6756\u6216\u4e2d\u5b50\u6cd5\u6756.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJlw==",
                    "title": "\u65e0\u9650\u7684LP",
                    "tooltip": "<strong>\u65e0\u9650\u7684LP</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ec8\u6781\u76ee\u6807:\u6742\u9879</br>\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f"
                },
                {
                    "name": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/927.png",
                    "x": 300.0,
                    "y": 360.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u5236\u4f5c4\u7ea7\u77f3\u677f,\u4f60\u9700\u8981\u4e00\u4e2a\u7b2c4\u5c42\u796d\u575b. \u8fd9\u53ef\u4ee5\u50cf\u4e09\u5c42\u796d\u575b\u4e00\u6837,\u56db\u683c\u9ad8\u7684\u8840\u8165\u865a\u7a7a\u5757\u67f1\u5b50,\u67f1\u5b50\u9876\u90e8\u6709\u8840\u7816.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADnw==",
                    "title": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "tooltip": "<strong>4\u9636\u8840\u4e4b\u796d\u575b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0</br>\u6d53\u7f29\u9ed1\u6697</br>\u83b7\u53d6\u7075\u9b42\u788e\u7247"
                },
                {
                    "name": "\u6076\u9b54\u5165\u4fb5",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/714.png",
                    "x": 516.0,
                    "y": 216.0,
                    "data": "\u662f\u65f6\u5019\u5f00\u542f\u4e00\u4e2a\u4f20\u9001\u95e8,\u901a\u5f80\u6211\u4eec\u4ee5\u5f80\u53ec\u5524\u7684\u6076\u9b54\u6240\u5728\u4e4b\u5730.\u80fd\u51fa\u4ec0\u4e48\u5dee\u9519\u5462? (\u5efa\u8bae\u5728\u4e00\u4e2a\u884c\u661f\u4e0a\u8fdb\u884c\u8fd9\u4e2a\u4eea\u5f0f,\u6076\u9b54\u7684\u57ce\u5e02\u4f1a\u5ef6\u4f38\u86ee\u5927\u7684\u8303\u56f4...)</br></br>\u89e3\u91ca\u8d77\u6765\u5f88\u590d\u6742,\u6240\u4ee5\u67e5\u770bwiki\u6765\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f\u5427. \u4e0d\u8fc7\u4f60\u5f97\u8bb0\u4f4f,\u5f00\u542f\u8fd9\u4e2a\u4eea\u5f0f\u9700\u898115M\u7684LP,\u6240\u4ee5\u4f60\u9700\u8981\u81f3\u5c1113\u4e2a\u5b9d\u73e0\u7b26\u6587. \u53e6\u5916,\u4f60\u8fd8\u9700\u8981\u70bc\u91d1\u7145\u70e7\u7089\u7b49\u4e00\u7cfb\u5217\u5de5\u5177\u624d\u80fd\u83b7\u5f97\u6240\u9700\u7684\u73bb\u7483\u949f\u7f69,\u8bf7\u67e5\u9605\u9b54\u5bfc\u624b\u518c\u4e2d\u7684\u8840\u9b54\u6cd5\u7ae0\u8282\u83b7\u53d6\u66f4\u591a\u4fe1\u606f.</br></br>[note]\u4e3b\u4e16\u754c\u73b0\u5728\u88ab\u7981\u6b62\u5f00\u542f\u4f20\u9001\u95e8.\u592a\u591a\u4eba\u4e0d\u542c\u4ece\u5efa\u8bae\u800c\u5bfc\u81f4\u670d\u52a1\u5668\u4e0d\u5f97\u4e0d\u627f\u53d7\u8fd9\u4e9b.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACyg==",
                    "title": "\u6076\u9b54\u5165\u4fb5",
                    "tooltip": "<strong>\u6076\u9b54\u5165\u4fb5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!</br>4\u9636\u7b26\u6587"
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
                    "source": "\u4eea\u5f0f",
                    "target": "\u5143\u7d20\u94ed\u6587"
                },
                {
                    "source": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "4\u9636\u77f3\u677f"
                },
                {
                    "source": "\u53ef\u6015\u7684\u9b54\u6cd5\u8f7d\u4f53",
                    "target": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!"
                },
                {
                    "source": "\u6076\u9b54\u6c14\u8840\u788e\u7247",
                    "target": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!"
                },
                {
                    "source": "\u9540\u94d1\u94af",
                    "target": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!"
                },
                {
                    "source": "5\u9636\u77f3\u677f",
                    "target": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!"
                },
                {
                    "source": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0",
                    "target": "2\u9636\u7b26\u6587"
                },
                {
                    "source": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "5\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u7ea6\u675f\u5de5\u5177:\u65a7"
                },
                {
                    "source": "\u6076\u9b54\u5165\u4fb5",
                    "target": "\u5f3a\u5927\u7684\u788e\u7247"
                },
                {
                    "source": "\u5f3a\u529b\u88c5\u7532",
                    "target": "\u7ea6\u675f\u88c5\u7532"
                },
                {
                    "source": "Poke",
                    "target": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)"
                },
                {
                    "source": "\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV",
                    "target": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)"
                },
                {
                    "source": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "target": "3\u9636\u7b26\u6587"
                },
                {
                    "source": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "target": "2\u9636\u5370\u8bb0"
                },
                {
                    "source": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "target": "\u590d\u6742\u7684\u6cd5\u672f\u7cfb\u7edf"
                },
                {
                    "source": "\u8840\u8165\u4e4b\u5251",
                    "target": "\u83b7\u53d6\u7075\u9b42\u788e\u7247"
                },
                {
                    "source": "\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d",
                    "target": "\u4eea\u5f0f\u62c6\u89e3\u6756"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u7ea6\u675f\u5de5\u5177:\u9550"
                },
                {
                    "source": "3\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u7b2c\u4e09\u9636-\u77f3\u677f"
                },
                {
                    "source": "6\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u5347\u534e"
                },
                {
                    "source": "\u94f1",
                    "target": "\u5347\u534e"
                },
                {
                    "source": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86",
                    "target": "\u6076\u9b54\u6c14\u8840\u788e\u7247"
                },
                {
                    "source": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u6076\u9b54\u6c14\u8840\u788e\u7247"
                },
                {
                    "source": "\u836f\u6c34\u50ac\u5316\u5242",
                    "target": "\u836f\u6c34:\u98de\u884c\u836f\u6c34"
                },
                {
                    "source": "\u7279\u6b8a\u836f\u74f6",
                    "target": "\u836f\u6c34:\u98de\u884c\u836f\u6c34"
                },
                {
                    "source": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!",
                    "target": "5\u9636\u7b26\u6587"
                },
                {
                    "source": "\u5143\u7d20\u7c89\u7b14II",
                    "target": "\u8fdb\u9636\u4eea\u5f0f"
                },
                {
                    "source": "\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3",
                    "target": "\u4eea\u5f0f"
                },
                {
                    "source": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "target": "\u4eea\u5f0f"
                },
                {
                    "source": "Poke",
                    "target": "\u4e00\u9636\u77f3\u677f"
                },
                {
                    "source": "\u6076\u9b54\u6c14\u8840\u788e\u7247",
                    "target": "\u53ec\u5524\u9668\u77f3!"
                },
                {
                    "source": "\u57fa\u7840\u7b26\u6587",
                    "target": "3\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u795e\u79d8\u70f9\u996a",
                    "target": "3\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "6\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "5\u9636\u77f3\u677f",
                    "target": "6\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u5f3a\u5927\u7684\u788e\u7247",
                    "target": "6\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)",
                    "target": "\u57fa\u7840\u7b26\u6587"
                },
                {
                    "source": "\u4e00\u9636\u77f3\u677f",
                    "target": "\u57fa\u7840\u7b26\u6587"
                },
                {
                    "source": "\u5143\u7d20\u94ed\u6587",
                    "target": "\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d"
                },
                {
                    "source": "\u57fa\u7840\u7b26\u6587",
                    "target": "\u7b2c\u4e8c\u9636-\u77f3\u677f"
                },
                {
                    "source": "6\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u5143\u7d20\u7c89\u7b14"
                },
                {
                    "source": "\u4e00\u9636\u77f3\u677f",
                    "target": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)"
                },
                {
                    "source": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "target": "\u8840\u6db2\u80cc\u5305"
                },
                {
                    "source": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f",
                    "target": "\u57fa\u67b6"
                },
                {
                    "source": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7",
                    "target": "Poke"
                },
                {
                    "source": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "target": "\u73bb\u7483\u727a\u7272\u5315\u9996"
                },
                {
                    "source": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "target": "3\u9636\u5370\u8bb0"
                },
                {
                    "source": "3\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u542f\u52a8\u5668"
                },
                {
                    "source": "\u836f\u6c34:\u98de\u884c\u836f\u6c34",
                    "target": "\u8865\u5145\u836f\u5242"
                },
                {
                    "source": "\u5347\u534e",
                    "target": "\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?"
                },
                {
                    "source": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "target": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "source": "\u57fa\u67b6",
                    "target": "\u4e3e\u4e2a\u4f8b\u5b50\u5427!"
                },
                {
                    "source": "\u6cd5\u672f\u6838\u5fc3",
                    "target": "\u4e3e\u4e2a\u4f8b\u5b50\u5427!"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u5fae\u578b\u4eea\u5f0f"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "target": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "source": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "target": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "source": "\u8fdb\u9636\u4eea\u5f0f",
                    "target": "\u82e6\u96be\u4e4b\u4e95"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u7ea6\u675f\u5de5\u5177:\u94f2"
                },
                {
                    "source": "4\u9636\u77f3\u677f",
                    "target": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86"
                },
                {
                    "source": "\u79ef\u5c11\u6210\u94a8\u94a2",
                    "target": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86"
                },
                {
                    "source": "5\u9636\u77f3\u677f",
                    "target": "5\u9636\u5370\u8bb0"
                },
                {
                    "source": "\u542f\u52a8\u5668",
                    "target": "\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3"
                },
                {
                    "source": "\u4e00\u9636\u77f3\u677f",
                    "target": "\u770b\u5230\u4e00\u5207"
                },
                {
                    "source": "\u57fa\u7840\u7b26\u6587",
                    "target": "\u732e\u796d\u5200"
                },
                {
                    "source": "4\u9636\u77f3\u677f",
                    "target": "\u5143\u7d20\u7c89\u7b14II"
                },
                {
                    "source": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "target": "\u7b80\u5355\u7684\u70bc\u91d1\u672f"
                },
                {
                    "source": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "target": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f"
                },
                {
                    "source": "\u57fa\u7840\u7b26\u6587",
                    "target": "\u7279\u6b8a\u836f\u74f6"
                },
                {
                    "source": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "target": "\u7279\u6b8a\u836f\u74f6"
                },
                {
                    "source": "\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?",
                    "target": "\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f"
                },
                {
                    "source": "4\u9636\u77f3\u677f",
                    "target": "4\u9636\u5370\u8bb0"
                },
                {
                    "source": "\u7b80\u5355\u7684\u70bc\u91d1\u672f",
                    "target": "\u836f\u6c34\u50ac\u5316\u5242"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u836f\u6c34\u50ac\u5316\u5242"
                },
                {
                    "source": "\u5f3a\u5927\u7684\u788e\u7247",
                    "target": "\u704c\u8f93\u6cd5\u672f\u9644\u5c5e(Imbued spell upgrades)"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u771f\u6b63\u7684\u8840\u9b54\u6cd5"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u8840\u8165\u4e4b\u5251"
                },
                {
                    "source": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "target": "\u5f3a\u529b\u88c5\u7532"
                },
                {
                    "source": "\u70bc\u5316\u6e90\u8d28",
                    "target": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "source": "\u8c03\u8c10\u4e4b\u77f3",
                    "target": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "source": "\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816...",
                    "target": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "source": "\u5143\u7d20\u7c89\u7b14",
                    "target": "\u9ad8\u7aef\u4eea\u5f0f"
                },
                {
                    "source": "5\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "5\u9636\u77f3\u677f"
                },
                {
                    "source": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86",
                    "target": "4\u9636\u7b26\u6587"
                },
                {
                    "source": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f",
                    "target": "\u6cd5\u672f\u6838\u5fc3"
                },
                {
                    "source": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "target": "\u727a\u7272/\u732e\u796d\u7b26\u6587"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u65e0\u9650\u7684LP"
                },
                {
                    "source": "\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f",
                    "target": "\u65e0\u9650\u7684LP"
                },
                {
                    "source": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "target": "4\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u6d53\u7f29\u9ed1\u6697",
                    "target": "4\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "target": "4\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!",
                    "target": "\u6076\u9b54\u5165\u4fb5"
                },
                {
                    "source": "4\u9636\u7b26\u6587",
                    "target": "\u6076\u9b54\u5165\u4fb5"
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
    