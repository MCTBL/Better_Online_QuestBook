
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
                    "name": "\u7c89\u8272\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2270.png",
                    "x": 972.0,
                    "y": 60.0,
                    "data": "\u7c89\u8272\u8702\u80fd\u4ea7\u51fa\u7c89\u8272\u67d3\u6599.\u5b83\u4eec\u8fd8\u62e5\u6709\"\u6700\u5feb\"\u7684\u751f\u4ea7\u901f\u5ea6\u4ee5\u53ca\u51683\u7684\u6e7f\u5ea6\u8010\u6027.\u7531\u7ea2\u8272\u8702\u548c\u767d\u8272\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI3g==",
                    "title": "\u7c89\u8272\u8702",
                    "tooltip": "<strong>\u7c89\u8272\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ea2\u8272\u8702</br>\u767d\u8272\u8702"
                },
                {
                    "name": "\u82e6\u884c\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2180.png",
                    "x": 108.0,
                    "y": 216.0,
                    "data": "\u82e6\u884c\u8702\u9700\u8981\u4e00\u540d\u7ec6\u5fc3\u7684\u517b\u8702\u5458.\u8981\u662f\u4e0d\u7a7f\u517b\u8702\u5458\u5957\u88c5\u7684\u8bdd,\u5b83\u4f1a\u4e3a\u4f60\u65bd\u52a0\u722c\u884c\u8005\u7206\u70b8\u6548\u679c.\u52a1\u5fc5\u5c0f\u5fc3.\u5b83\u9700\u8981\u4e00\u4e2a\u708e\u70ed\u6216\u4e0b\u754c\u7684\u751f\u7269\u7fa4\u7cfb\u548c\u5e72\u65f1\u7684\u6e7f\u5ea6.\u7531\u6e29\u548c\u8702\u548c\u8282\u4fed\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIhA==",
                    "title": "\u82e6\u884c\u8702",
                    "tooltip": "<strong>\u82e6\u884c\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8282\u4fed\u8702"
                },
                {
                    "name": "\u7164\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2168.png",
                    "x": 204.0,
                    "y": 216.0,
                    "data": "\u592a\u68d2\u4e86,\u7164\u624d\u662f\u738b\u9053.\u8fd9\u662f\u4e00\u79cd\u5f88\u68d2\u7684\u871c\u8702,\u80fd\u751f\u4ea7\u7164,\u4ece\u800c\u4e3a\u4f60\u7684\u5de5\u4e1a\u751f\u4ea7\u63d0\u4f9b\u539f\u6599\u548c\u52a8\u529b.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u7164\u5757.\u8fd9\u79cd\u871c\u8702\u5177\u6709\u4e00\u79cd\u6700\u6700\u5371\u9669\u7684\u7279\u6027\u2014\u2014\u8981\u662f\u4f60\u6ca1\u7a7f\u597d\u517b\u8702\u5458\u5957\u88c5\u7684\u8bdd,\u5b83\u4f1a\u8ba9\u4f60\u597d\u597d\u5c1d\u5c1d\u722c\u884c\u8005\u7684\u7206\u70b8.\u7531\u6ce5\u70ad\u8702\u548c\u656c\u4e1a\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIeA==",
                    "title": "\u7164\u8702",
                    "tooltip": "<strong>\u7164\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u656c\u4e1a\u8702</br>\u6ce5\u70ad\u8702"
                },
                {
                    "name": "\u7c98\u6db2\u7403\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2165.png",
                    "x": 972.0,
                    "y": 156.0,
                    "data": "\u7c98\u6db2\u7403\u7684\u7528\u5904\u4e0d\u5927,\u57f9\u80b2\u8fd9\u79cd\u871c\u8702\u540e\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u83b7\u5f97\u5b83.\u5b83\u662f\u57f9\u80b2\u51fa\u77f3\u6cb9\u8702\u7684\u5fc5\u7ecf\u4e4b\u8def,\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u51dd\u56fa\u53f2\u83b1\u59c6\u5757.\u7531\u7c98\u571f\u8702\u548c\u6cbc\u6cfd\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIdQ==",
                    "title": "\u7c98\u6db2\u7403\u8702",
                    "tooltip": "<strong>\u7c98\u6db2\u7403\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c98\u571f\u8702"
                },
                {
                    "name": "\u5965\u80fd\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2212.png",
                    "x": 396.0,
                    "y": 204.0,
                    "data": "\u5965\u80fd\u8702\u4ea7\u51fa\u7684\u8574\u9b54\u6db2\u6ef4\u7528\u4e8e\u5236\u9020\u82ac\u82b3\u5757-\u7528\u4e8e\u8702\u7bb1\u7ec4\u514b\u9686\u76d2,\u5b83\u6bd4\u666e\u901a\u7684\u8702\u738b\u6d46\u6709\u66f4\u9ad8\u7684\u6210\u529f\u7387.\u8fd9\u79cd\u871c\u8702\u4e5f\u662f\u795e\u79d8\u7c7b\u871c\u8702\u57f9\u80b2\u7ebf\u7684\u57fa\u77f3\u4e4b\u4e00.\u7531\u7384\u5965\u8702\u548c\u5965\u79d8\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIpA==",
                    "title": "\u5965\u80fd\u8702",
                    "tooltip": "<strong>\u5965\u80fd\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u79d8\u8702</br>\u7384\u5965\u8702"
                },
                {
                    "name": "\u95f7\u70e7\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2276.png",
                    "x": 540.0,
                    "y": 348.0,
                    "data": "\u95f7\u70e7\u8702\u4f1a\u751f\u6210\u70c8\u7130\u4eba,\u7279\u4ea7\u662f\u70c8\u7130\u68d2.\u6700\u597d\u7528\u4f60\u6d17\u597d\u57fa\u56e0\u7684\u6a21\u677f\u516c\u4e3b\u8702\u6765\u57f9\u80b2\u5b83\u4eec,\u5426\u5219\u5b83\u4eec\u7684\u7279\u6b8a\u6548\u679c\u53ef\u80fd\u4f1a\u6bc1\u4e86\u4f60\u7684\u57fa\u5730.\u53e6\u5916,\u5b83\u4eec\u7684\u6e29\u5ea6\u8981\u6c42\u4e3a\u5730\u72f1,\u4f46\u6e7f\u5ea6\u8981\u6c42\u5374\u662f\u666e\u901a,\u8fd9\u5f88\u6709\u8da3\u2014\u2014\u4f60\u5f97\u4f7f\u7528\u57fa\u56e0\u5de5\u4e1a\u7684\u9002\u5e94\u6027\u8c03\u6574\u5668\u6765\u8ba9\u871c\u8702\u9002\u5e94\u73af\u5883,\u6216\u8005\u7528\u522b\u7684\u4ec0\u4e48\u65b9\u6cd5\u6765\u8c03\u6574\u751f\u7269\u7fa4\u7cfb.\u5fc5\u987b\u5728\u4e0b\u754c\u624d\u53ef\u80fd\u57f9\u80b2\u51fa\u6765,\u7531\u5e7d\u9b42\u8702\u548c\u618e\u6076\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.</br></br>\u4f46\u662f\u5f88\u9057\u61be,\u8981\u4f7f\u5b83\u4eec\u751f\u4ea7\u70c8\u7130\u68d2,\u4f60\u8fd8\u662f\u5f97\u5c06\u5b83\u4eec\u653e\u7f6e\u5728\u7b26\u5408\u5176\u9ed8\u8ba4\u8981\u6c42\u7684\u751f\u7269\u7fa4\u7cfb\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI5A==",
                    "title": "\u95f7\u70e7\u8702",
                    "tooltip": "<strong>\u95f7\u70e7\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5e7d\u9b42\u8702</br>\u618e\u6076\u8702"
                },
                {
                    "name": "\u950c\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2195.png",
                    "x": 300.0,
                    "y": 216.0,
                    "data": "\u950c\u5408\u91d1\u5236\u6210\u7684\u9ec4\u94dc\u662f\u6e38\u620f\u65e9\u671f\u7269\u54c1\u7ba1\u9053\u7684\u6750\u6599.\u53e6\u5916,\u8fd9\u79cd\u871c\u8702\u6709\u5c0f\u6982\u7387\u751f\u4ea7\u9553\u8702\u7a9d,\u8fd9\u5bf9\u5236\u4f5c\u7535\u8def\u677f\u6216\u5404\u79cd\u8d34\u7247\u5143\u4ef6\u5341\u5206\u6709\u7528.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u950c\u5757.\u7531\u9521\u8702\u548c\u94c1\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIkw==",
                    "title": "\u950c\u8702",
                    "tooltip": "<strong>\u950c\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9521\u8702</br>\u94c1\u8702"
                },
                {
                    "name": "\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1118.png",
                    "x": 108.0,
                    "y": 60.0,
                    "data": "\u7528\u5bfb\u5e38\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u53ef\u4ee5\u5f97\u5230\u9ad8\u5c1a\u8702.\u9ad8\u5c1a\u8702\u6bcf3.8\u5206\u949f\u4f1a\u4ea7\u51fa\u4e00\u6b21\u6ef4\u6c34\u8702\u7a9d,\u8fd9\u4e2a\u8702\u7a9d\u53ef\u4ee5\u4ea7\u51fa\u5f88\u591a\u7684\u8702\u871c!\u6ce8\u610f,\u751f\u4ea7\u65f6\u95f4\u662f\u57fa\u4e8e\u871c\u8702\u7684\u57fa\u672c\u751f\u4ea7\u901f\u5ea6\u548c\u4ea7\u54c1\u7a00\u6709\u6027\u7684\u8fd1\u4f3c\u503c.\u5b83\u4eec\u4e0d\u80fd\u53cd\u6620\u5b9e\u9645\u7684\u751f\u4ea7\u65f6\u95f4.  \u4f60\u66fe\u542c\u5230\u4e00\u4e2a\u559d\u9189\u4e86\u7684\u517b\u8702\u5458\u8bf4\u8fc7,\u4ed6\u66f4\u503e\u5411\u4e8e\u7528\u8702\u871c\u6c41\u4e0e\u4e00\u70b9\u70b9\u9b54\u6cd5\u6765\u5236\u4f5c\u6846\u67b6.\u4e5f\u8bb8\u8fd9\u503c\u5f97\u4f60\u82b1\u65f6\u95f4\u81ea\u5df1\u5b9e\u9a8c\u4e00\u4e0b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEXg==",
                    "title": "\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702",
                    "tooltip": "<strong>\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702"
                },
                {
                    "name": "\u4ee5\u592a\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2219.png",
                    "x": 492.0,
                    "y": 204.0,
                    "data": "\u4ee5\u592a\u8702\u5bf9\u6240\u6709\u795e\u79d8\u8981\u7d20\u8702\u90fd\u5f88\u91cd\u8981.\u7531\u5965\u80fd\u8702\u548c\u8d85\u80fd\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIqw==",
                    "title": "\u4ee5\u592a\u8702",
                    "tooltip": "<strong>\u4ee5\u592a\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u80fd\u8702</br>\u8d85\u80fd\u8702"
                },
                {
                    "name": "\u4e09\u660e\u6cbb\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2289.png",
                    "x": 492.0,
                    "y": 396.0,
                    "data": "\u7ed9\u6211\u6765\u4e2a\u4e09\u660e\u6cbb,\u6216\u662f\u80fd\u51fa\u4ea7\u4e09\u660e\u6cbb\u539f\u6599\u4e4b\u7c7b\u7684\u73a9\u610f\u513f\u7684\u871c\u8702\u4e5f\u884c.\u7531\u706b\u8760\u8702\u548c\u519c\u8015\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI8Q==",
                    "title": "\u4e09\u660e\u6cbb\u8702",
                    "tooltip": "<strong>\u4e09\u660e\u6cbb\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u706b\u8760\u8702</br>\u519c\u8015\u8702"
                },
                {
                    "name": "\u5947\u672f\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2232.png",
                    "x": 396.0,
                    "y": 252.0,
                    "data": "\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u79e9\u5e8f\u9b54\u6676\u624d\u80fd\u57f9\u80b2\u51fa\u5b83.\u5b83\u53ef\u4ee5\u751f\u4ea7\u79e9\u5e8f\u4e4b\u5c18.\u7531\u4ee5\u592a\u8702\u548c\u5965\u80fd\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIuA==",
                    "title": "\u5947\u672f\u8702",
                    "tooltip": "<strong>\u5947\u672f\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u80fd\u8702</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u602a\u5f02\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2213.png",
                    "x": 396.0,
                    "y": 60.0,
                    "data": "\u602a\u5f02\u8702\u662f\u795e\u79d8\u7c7b\u871c\u8702\u7684\u8d77\u70b9.\u7531\u795e\u79d8\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIpQ==",
                    "title": "\u602a\u5f02\u8702",
                    "tooltip": "<strong>\u602a\u5f02\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702"
                },
                {
                    "name": "\u7ea2\u8272\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2272.png",
                    "x": 972.0,
                    "y": 12.0,
                    "data": "\u987e\u540d\u601d\u4e49,\u67d3\u6599\u8702\u662f\u7528\u6765\u4ea7\u51fa\u67d3\u6599\u7684,\u4e0d\u8fc7\u5176\u4e2d\u67d0\u4e9b\u54c1\u79cd\u8fd8\u6709\u4e9b\u4e0d\u9519\u7684\u5176\u4ed6\u7279\u6027.\u67d3\u6599\u8702\u6709\u8bb8\u591a\u79cd,\u4ee5\u4e0b\u8fd9\u4e9b\u53ea\u662f\u5176\u4e2d\u4e00\u90e8\u5206.\u5982\u679c\u4f60\u60f3\u83b7\u53d6\u90a3\u4e9b\u5f88\u96be\u4ece\u82b1\u4e2d\u63d0\u53d6\u7684\u67d3\u6599,\u90a3\u5b83\u4eec\u5c31\u5f88\u6709\u7528.\u7ea2\u8272\u8702\u7531\u5bfb\u5e38\u8702\u548c\u52e4\u594b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI4A==",
                    "title": "\u7ea2\u8272\u8702",
                    "tooltip": "<strong>\u7ea2\u8272\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52e4\u594b\u8702"
                },
                {
                    "name": "\u6d77\u6d0b\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2282.png",
                    "x": 828.0,
                    "y": 12.0,
                    "data": "\u6d77\u6d0b\u8702\u6709\u53ef\u80fd\u5f88\u96be\u57f9\u80b2\u51fa\u6765,\u56e0\u4e3a\u67d0\u4e9b\u670d\u52a1\u5668\u4f7f\u7528\u7684\u4e16\u754c\u751f\u6210\u6a21\u5f0f\u4f1a\u5bfc\u81f4\u6d77\u6d0b\u751f\u7269\u7fa4\u7cfb\u65e0\u6cd5\u751f\u6210.\u4f60\u53ef\u4ee5\u53bb\u66ae\u8272\u68ee\u6797\u7684\u6e56\u6cca\u78b0\u78b0\u8fd0\u6c14\u2014\u2014\u5982\u679c\u4f60\u770b\u5230\u6c34\u6816\u722c\u884c\u8005,\u90a3\u8bf4\u660e\u4f60\u6765\u5bf9\u5730\u65b9\u4e86!\u5982\u679c\u4f60\u5b9e\u5728\u627e\u4e0d\u5230\u5408\u9002\u7684\u5730\u70b9,\u4f60\u4e5f\u53ef\u4ee5\u5728\u786c\u5e01\u5546\u5e97\u90a3\u4e00\u680f\u8d2d\u4e70\u6d77\u6d0b\u871c\u8702.\u7531\u52e4\u594b\u8702\u548c\u6c34\u751f\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI6g==",
                    "title": "\u6d77\u6d0b\u8702",
                    "tooltip": "<strong>\u6d77\u6d0b\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702"
                },
                {
                    "name": "\u5145\u80fd\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2235.png",
                    "x": 600.0,
                    "y": 12.0,
                    "data": "\u5145\u80fd\u8702\u5c06\u4f1a\u968f\u673a\u4e3a\u9644\u8fd1\u8282\u70b9\u6dfb\u52a0\u8981\u7d20,\u53ef\u4ee5\u517b\u51fa\u4e2a\u8d85\u5927\u7684\u8282\u70b9.\u5728\u6ee1\u6708\u65f6\u6709\u6700\u9ad8\u51e0\u7387\u57f9\u80b2\u51fa\u5b83,\u7531\u590d\u5174\u8702\u548c\u9b54\u529b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.</br></br>[note]\u6709\u51e0\u4e2a\u7248\u672c\u4e2d\u7075\u6c14\u8282\u70b9\u4f53\u79ef\u662f\u6709\u4e0a\u9650\u7684,\u4f46\u662f\u73b0\u5728\u4e0a\u9650\u88ab\u79fb\u9664\u4e86!\u6216\u8bb8\u4f60\u53ef\u4ee5\u53bbDiscord\u9891\u9053,\u8d5e\u7f8e\u8d5e\u7f8eRunakai. :)[/note] </br></br>\u8bd1\u8005\u6ce8:\u5b9e\u9645\u4e0a\u8fd8\u662f\u6709\u8f6f\u4e0a\u9650\u2026\u2026\u4f46\u662f\u8db3\u591f\u7528\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIuw==",
                    "title": "\u5145\u80fd\u8702",
                    "tooltip": "<strong>\u5145\u80fd\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u529b\u8702</br>\u590d\u5174\u8702"
                },
                {
                    "name": "\u4e0b\u754c\u788e\u7247\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3298.png",
                    "x": 732.0,
                    "y": 552.0,
                    "data": "\u5bf9\u4f60\u7684\u7075\u6db2\u751f\u4ea7\u81f3\u5173\u91cd\u8981.</br></br>[note]\u4f60\u9700\u8981\u901a\u8fc7\u6742\u4ea4\u4e00\u7cfb\u5217\u6ca1\u6709\u4efb\u52a1\u5f15\u5bfc\u7684\u795e\u79d8\u8981\u7d20\u8702\u6765\u83b7\u53d6\u5b83.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAM4g==",
                    "title": "\u4e0b\u754c\u788e\u7247\u8702",
                    "tooltip": "<strong>\u4e0b\u754c\u788e\u7247\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d85\u80fd\u8702</br>\u98ce\u8702"
                },
                {
                    "name": "\u571f\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2222.png",
                    "x": 588.0,
                    "y": 108.0,
                    "data": "\u571f\u8702\u53ea\u6709\u5728\u7816\u5757\u4e4b\u4e0a\u624d\u80fd\u57f9\u80b2\u51fa\u6765.\u7531\u4ee5\u592a\u8702\u548c\u8d85\u80fd\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIrg==",
                    "title": "\u571f\u8702",
                    "tooltip": "<strong>\u571f\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d85\u80fd\u8702</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u7075\u6c14\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2224.png",
                    "x": 636.0,
                    "y": 300.0,
                    "data": "\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u98ce\u4e4b\u9b54\u6676\u5757\u624d\u80fd\u57f9\u80b2\u51fa\u5b83,\u5b83\u53ef\u4ee5\u751f\u4ea7\u98ce\u4e4b\u5c18,\u5728\u5176\u9644\u8fd1\u53ef\u83b7\u5f97\u901f\u5ea6buff.\u7531\u4e24\u4e2a\u98ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIsA==",
                    "title": "\u7075\u6c14\u8702",
                    "tooltip": "<strong>\u7075\u6c14\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u98ce\u8702"
                },
                {
                    "name": "\u6fc0\u52a8\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2251.png",
                    "x": 1020.0,
                    "y": 156.0,
                    "data": "\u4f60\u53ef\u80fd\u6697\u81ea\u601d\u5fd6,\u55ef,\u7528\u8fd9\u79cd\u871c\u8702\u5f88\u5bb9\u6613\u83b7\u5f97\u7ea2\u77f3\u2026\u2026\u597d\u5427,\u8fd8\u6709\u7834\u574f\u6027\u7684\u96f7\u51fb,\u4e5f\u8bb8\u4f60\u5e94\u8be5\u628a\u5b83\u4eec\u653e\u8fdc\u70b9.\u5f53\u7136\u4e5f\u53ef\u4ee5\u653e\u5728\u82e6\u529b\u6015\u5237\u602a\u7b3c\u9644\u8fd1\u6765\u5236\u9020\u9ad8\u538b\u82e6\u529b\u6015,\u4ece\u800c\u83b7\u5f97\u2026\u2026\u66f4\u591a\u7ecf\u9a8c?\u7531\u52c7\u8005\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.</br></br>\u8bd1\u8005\u6ce8: \u5236\u9020\u51fa\u6765\u7684\u9ad8\u538b\u82e6\u529b\u6015\u5168\u662f\u7cbe\u82f1\u602a,\u4f60\u6700\u597d\u522b\u8fd9\u4e48\u5e72.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIyw==",
                    "title": "\u6fc0\u52a8\u8702",
                    "tooltip": "<strong>\u6fc0\u52a8\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702"
                },
                {
                    "name": "\u6c34\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2227.png",
                    "x": 588.0,
                    "y": 348.0,
                    "data": "\u6c34\u8702\u53ea\u6709\u5728\u6c34\u4e4b\u4e0a\u624d\u80fd\u57f9\u80b2\u51fa\u6765.\u7531\u4ee5\u592a\u8702\u548c\u8d85\u80fd\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIsw==",
                    "title": "\u6c34\u8702",
                    "tooltip": "<strong>\u6c34\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d85\u80fd\u8702</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u62a5\u4ec7\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2207.png",
                    "x": 300.0,
                    "y": 360.0,
                    "data": "\u4ec7\u6068,\u5bf9\u4e07\u4e8b\u4e07\u7269\u7684\u4ec7\u6068,\u65e0\u8bba\u751f\u7269\u8fd8\u662f\u65b9\u5757.\u8ba9\u8702\u7bb1\u8fdc\u79bb\u4efb\u4f55\u6709\u4ef7\u503c\u7684\u4e1c\u897f,\u6700\u597d\u4e5f\u522b\u9760\u8fd1\u4e0d\u503c\u94b1\u7684.\u7531\u50e7\u4fa3\u8702\u548c\u8bb0\u6068\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAInw==",
                    "title": "\u62a5\u4ec7\u8702",
                    "tooltip": "<strong>\u62a5\u4ec7\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8bb0\u6068\u8702</br>\u50e7\u4fa3\u87021"
                },
                {
                    "name": "\u5f52\u9690\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2179.png",
                    "x": 108.0,
                    "y": 264.0,
                    "data": "\u5f52\u9690\u8702\u662f\u771f\u6b63\u7684\u9690\u5c45\u8005.\u5728\u5176\u6d3b\u52a8\u8303\u56f4\u5185\u4e0d\u5b58\u5728\u4efb\u4f55\u5b9e\u4f53\u7684\u60c5\u51b5\u4e0b,\u5b83\u4eec\u624d\u4f1a\u751f\u4ea7\u8702\u7a9d.\u9187\u539a\u8702\u7a9d\u53ef\u4ee5\u4ea7\u51fa\u4e0b\u754c\u77f3\u82f1.\u7531\u82e6\u884c\u8702\u548c\u50e7\u4fa3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIgw==",
                    "title": "\u5f52\u9690\u8702",
                    "tooltip": "<strong>\u5f52\u9690\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82e6\u884c\u8702</br>\u50e7\u4fa3\u87021"
                },
                {
                    "name": "\u90aa\u6076\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2177.png",
                    "x": 108.0,
                    "y": 168.0,
                    "data": "\u90aa\u6076\u8702\u4f1a\u4f24\u5bb3\u9760\u8fd1\u7684\u751f\u7269\u548c\u73a9\u5bb6,\u6240\u4ee5\u6700\u597d\u7a7f\u4e0a\u4f60\u7684\u517b\u8702\u5458\u5957\u88c5!\u53ea\u6709\u5728\u4e0b\u754c\u624d\u80fd\u57f9\u80b2\u51fa\u5b83,\u7531\u6e29\u548c\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIgQ==",
                    "title": "\u90aa\u6076\u8702",
                    "tooltip": "<strong>\u90aa\u6076\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702"
                },
                {
                    "name": "\u9545\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/362.png",
                    "x": 348.0,
                    "y": 648.0,
                    "data": "\u4e00\u53ea\u975e\u540c\u5bfb\u5e38\u7684\u871c\u8702.\u5982\u679c\u4f60\u4ee5\u4e3a\u9545\u53ea\u80fd\u901a\u8fc7\u805a\u53d8\u83b7\u5f97,\u90a3\u5c31\u5927\u9519\u7279\u9519\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABag==",
                    "title": "\u9545\u8702",
                    "tooltip": "<strong>\u9545\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9565\u8702</br>\u94ec\u8702"
                },
                {
                    "name": "\u751c\u7f8e\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2154.png",
                    "x": 1116.0,
                    "y": 12.0,
                    "data": "\u751c\u7f8e\u8702\u53ef\u4ee5\u4e3a\u4f60\u4ea7\u7cd6.\u7531\u52c7\u8005\u8702\u548c\u52e4\u594b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIag==",
                    "title": "\u751c\u7f8e\u8702",
                    "tooltip": "<strong>\u751c\u7f8e\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52e4\u594b\u8702"
                },
                {
                    "name": "\u94dc\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2162.png",
                    "x": 252.0,
                    "y": 168.0,
                    "data": "\u94dc\u8702\u662f\u91d1\u5c5e\u57f9\u80b2\u7ebf\u871c\u8702\u7684\u7b2c\u4e00\u6b65.\u6709\u592a\u591a\u7684\u91d1\u5c5e\u57f9\u80b2\u7ebf\u53ef\u4ee5\u5b8c\u6210,\u4f46\u73b0\u5728\u4f60\u53ef\u4ee5\u4f7f\u7528NEI\u67e5\u770b\u5982\u4f55\u57f9\u80b2\u66f4\u591a\u79cd\u7c7b\u7684\u871c\u8702.  \u94dc\u8702\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u6709\u4e2a\u94dc\u5757.\u7531\u5e84\u4e25\u8702\u548c\u7c98\u571f\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIcg==",
                    "title": "\u94dc\u8702",
                    "tooltip": "<strong>\u94dc\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5e84\u4e25\u8702</br>\u7c98\u571f\u8702"
                },
                {
                    "name": "Furious",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8785372800340988846.png",
                    "x": 1116.0,
                    "y": 156.0,
                    "data": "If you want to pursue the breeding path toward Lapotron and Pyrotheum Bees, you\u2019ll need to start by breeding some Furious Bees. They can be bred in the nether using Fiendish and Embittered Bees, with the latter found in the wilds of the Nether.\n\nBeware: Furious Bees spawn fire charges downward, so make sure your breeding area is fireproof!",
                    "quest_id": "v-1MbhJWRuiGFBX8KEvsUg==",
                    "title": "Furious",
                    "tooltip": "<strong>Furious</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b8b\u5fcd\u8702"
                },
                {
                    "name": "\u98ce\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2223.png",
                    "x": 588.0,
                    "y": 300.0,
                    "data": "\u98ce\u8702\u53ea\u6709\u5728\u6a61\u6811\u6811\u53f6\u4e4b\u4e0a\u624d\u80fd\u57f9\u80b2\u51fa\u6765,\u7531\u4ee5\u592a\u8702\u548c\u8d85\u80fd\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIrw==",
                    "title": "\u98ce\u8702",
                    "tooltip": "<strong>\u98ce\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d85\u80fd\u8702</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u51b0\u96ea\u5973\u738b\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/369.png",
                    "x": 828.0,
                    "y": 300.0,
                    "data": "\u6211\u4e0d\u660e\u767d\u4e3a\u4ec0\u4e48\u4f60\u4f1a\u9700\u8981\u5927\u91cf\u7684\u51b0\u96ea\u5973\u738b\u4e4b\u8840.\u4e0d\u8fc7\u7528\u8fd9\u53ea\u871c\u8702\u786e\u5b9e\u53ef\u4ee5\u83b7\u53d6\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABcQ==",
                    "title": "\u51b0\u96ea\u5973\u738b\u8702",
                    "tooltip": "<strong>\u51b0\u96ea\u5973\u738b\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66ae\u8272\u6076\u9b421</br>\u4e16\u754c\u76d0\u8702"
                },
                {
                    "name": "\u94bb\u77f3\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2172.png",
                    "x": 204.0,
                    "y": 360.0,
                    "data": "\u554a,\u7ec8\u4e8e,\u4e00\u4e2a\u5973\u5b69\u2014\u2014\u6211\u662f\u8bf4\u5973\u738b\u2014\u2014\u6700\u597d\u7684\u4f19\u4f34.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u94bb\u77f3\u5757,\u7531\u8d5b\u7279\u65af\u8702\u548c\u7164\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIfA==",
                    "title": "\u94bb\u77f3\u8702",
                    "tooltip": "<strong>\u94bb\u77f3\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7164\u8702</br>\u8d5b\u7279\u65af\u8702"
                },
                {
                    "name": "\u795e\u79d8\u788e\u7247\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2241.png",
                    "x": 684.0,
                    "y": 300.0,
                    "data": "\u795e\u79d8\u788e\u7247\u8702\u6709\u51e0\u7387\u4e3a\u4f60\u751f\u4ea7\u4efb\u610f\u788e\u7247\u8702\u80f6.\u5b83\u9700\u8981\u9b54\u6cd5\u68ee\u6797\u751f\u7269\u7fa4\u7cfb.\u7531\u795e\u79d8\u5c18\u8702\u548c\u6d41\u6c34\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIwQ==",
                    "title": "\u795e\u79d8\u788e\u7247\u8702",
                    "tooltip": "<strong>\u795e\u79d8\u788e\u7247\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d41\u6c34\u8702</br>\u795e\u79d8\u5c18\u8702"
                },
                {
                    "name": "\u57fa\u7840\u871c\u8702\u7edf\u8ba1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2211.png",
                    "x": 60.0,
                    "y": 60.0,
                    "data": "\u6709\u4e9b\u57fa\u7840\u871c\u8702\u5177\u6709\u4e0d\u9519\u7684\u5c5e\u6027,\u53ef\u4ee5\u52a0\u5165\u4f60\u7684\u57f9\u80b2\u50a8\u5907\u4e2d.</br></br>\u7a74\u5c45\u6027-\u77f3\u5934\u8702-\u8fd9\u4f7f\u4f60\u53ef\u4ee5\u5728\u8702\u7bb1\u4e0a\u5806\u4e1c\u897f\u6216\u5c06\u5176\u653e\u5728\u5ba4\u5185.\u4f60\u53ef\u4ee5\u5728\u8702\u7bb1\u4e0a\u653e\u4e2a\u7bb1\u5b50\u6765\u5f88\u65b9\u4fbf\u5730\u6536\u96c6\u4ea7\u7269.</br></br>\u591c\u884c\u6027-\u77f3\u5934\u8702-\u8fd9\u4f7f\u4f60\u7684\u871c\u8702\u5728\u591c\u95f4\u6216\u8005\u6697\u5904\u7ee7\u7eed\u5de5\u4f5c.</br></br>\u8010\u96e8\u98de\u884c\u6027-\u6c34\u751f\u8702-\u4f7f\u4f60\u7684\u871c\u8702\u5728\u96e8\u5929\u7ee7\u7eed\u5de5\u4f5c.</br></br>\u9ad8\u751f\u80b2\u80fd\u529b(x4)-\u51db\u51ac\u8702-\u57f9\u80b2\u65f6\u4f60\u9700\u8981\u6700\u5927\u7684\u96c4\u8702\u751f\u4ea7\u80fd\u529b.</br></br>\u8bb0\u4f4f,\u871c\u8702\u9700\u8981\u5bf9\u73af\u5883\u975e\u5e38\u6ee1\u610f\u65f6\u624d\u4f1a\u751f\u4ea7\u7279\u6b8a\u4ea7\u7269.</br>\u8fd9\u610f\u5473\u7740\u871c\u8702\u5fc5\u987b\u5728\u5b83\u611f\u89c9\u6700\u81ea\u7136\u7684\u73af\u5883\u4e2d.\u5373\u6ca1\u6709\u5f3a\u5316\u8fc7\u6e29\u5ea6/\u6e7f\u5ea6\u9002\u5e94\u6027\u524d\u7684\u871c\u8702\u6240\u9700\u8981\u7684\u6e29\u5ea6/\u6e7f\u5ea6.</br></br>\u4f8b\u5982,\u76d0\u8702\u9700\u8981\u6e29\u6696/\u6b63\u5e38\u7684\u6c14\u5019.\u5373\u4f7f\u5177\u6709+-\u6e7f\u5ea6\u548c\u6e29\u5ea6\u9002\u5e94\u6027,\u4e5f\u4e0d\u4f1a\u5728\u9664\u4e86\u6e29\u6696/\u6b63\u5e38\u6c14\u5019\u4ee5\u5916\u522b\u7684\u6c14\u5019\u4e0b\u751f\u4ea7\u76d0\u8702\u7a9d.\u4f7f\u7528\u8702\u7bb1\u5347\u7ea7\u4ee5\u786e\u4fdd\u5176\u5904\u4e8e\u6700\u4f73\u7684\u6e29\u5ea6/\u6e7f\u5ea6\u4e0b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIow==",
                    "title": "\u57fa\u7840\u871c\u8702\u7edf\u8ba1",
                    "tooltip": "<strong>\u57fa\u7840\u871c\u8702\u7edf\u8ba1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u871c\u8702\u57f9\u80b2\"\u667a\u8005\"\u624b\u518c"
                },
                {
                    "name": "Glowstone",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8934580080477372197.png",
                    "x": 1164.0,
                    "y": 204.0,
                    "data": "The Glowstone Princess isn't as picky as her peers. There are no breeding requirements besides the species being Gold and Redstone. Hooray!",
                    "quest_id": "NzynzD7HQrmEAf7BFd2A2w==",
                    "title": "Glowstone",
                    "tooltip": "<strong>Glowstone</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ea2\u77f3\u8702</br>Gold"
                },
                {
                    "name": "\u4e16\u754c\u76d0\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2242.png",
                    "x": 756.0,
                    "y": 300.0,
                    "data": "\u538c\u5026\u4e86\u5236\u4f5c\u4e16\u754c\u76d0\u7684\u7e41\u7410\u8fc7\u7a0b?\u7ecf\u8fc7\u6570\u5c0f\u65f6\u7684\u57f9\u80b2,\u4f60\u7ec8\u4e8e\u83b7\u5f97\u4e86\u8fd9\u79cd\u80fd\u4e3a\u4f60\u63d0\u4f9b\u6240\u9700\u4e16\u754c\u76d0\u7684\u871c\u8702.\u5b83\u9700\u8981\u9b54\u6cd5\u68ee\u6797\u751f\u7269\u7fa4\u7cfb.\u7531\u795e\u79d8\u5c18\u8702\u548c\u795e\u79d8\u788e\u7247\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIwg==",
                    "title": "\u4e16\u754c\u76d0\u8702",
                    "tooltip": "<strong>\u4e16\u754c\u76d0\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u79d8\u788e\u7247\u8702</br>\u795e\u79d8\u5c18\u8702"
                },
                {
                    "name": "\u7c98\u571f\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2163.png",
                    "x": 204.0,
                    "y": 120.0,
                    "data": "\u60f3\u8981\u57f9\u80b2\u51fa\u7c98\u571f\u8702,\u4f60\u5f97\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u7c98\u571f\u5757.\u7c98\u571f\u8702\u662f\u8bb8\u591a\u57f9\u80b2\u7ebf\u7684\u57fa\u77f3.\u7531\u656c\u4e1a\u8702\u548c\u52e4\u594b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIcw==",
                    "title": "\u7c98\u571f\u8702",
                    "tooltip": "<strong>\u7c98\u571f\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u656c\u4e1a\u8702</br>\u52e4\u594b\u8702"
                },
                {
                    "name": "\u52e4\u594b\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2156.png",
                    "x": 108.0,
                    "y": 12.0,
                    "data": "\u52e4\u594b\u8702\u662f\u57f9\u80b2\u8702\u7fa4\u7684\u6838\u5fc3.\u7531\u5bfb\u5e38\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIbA==",
                    "title": "\u52e4\u594b\u8702",
                    "tooltip": "<strong>\u52e4\u594b\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702"
                },
                {
                    "name": "\u8d5b\u7279\u65af\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2173.png",
                    "x": 156.0,
                    "y": 360.0,
                    "data": "\u8d5b\u7279\u65af\u8702,\u55ef...\u5b83\u6709\u5565\u57f9\u80b2\u73af\u5883\u8981\u6c42\u4e48?\u6211\u4e0d\u8bb0\u5f97\u4e86.\u6216\u8bb8\u4f60\u53ef\u4ee5\u8bd5\u8bd5\u8d5b\u7279\u65af\u77f3\u82f1\u5757?\u7531\u9752\u91d1\u77f3\u8702\u548c\u9041\u4e16\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIfQ==",
                    "title": "\u8d5b\u7279\u65af\u8702",
                    "tooltip": "<strong>\u8d5b\u7279\u65af\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9752\u91d1\u77f3\u8702</br>\u9041\u4e16\u8702"
                },
                {
                    "name": "Gold",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8063033383018802688.png",
                    "x": 1164.0,
                    "y": 156.0,
                    "data": "There are a plethora of ways to acquire gold, but here's one more for the dedicated apiarist. This breeding chain will eventually allow you to reach Sunnarium. You'll need a Block of Gold and a biome with a hot temperature. Breed them from Copper and Lead.",
                    "quest_id": "jvKBzB6tRpCQGlnboQxSAA==",
                    "title": "Gold",
                    "tooltip": "<strong>Gold</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94dc\u8702</br>\u94c5\u8702"
                },
                {
                    "name": "\u6d41\u6c34\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2220.png",
                    "x": 636.0,
                    "y": 348.0,
                    "data": "\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u6c34\u4e4b\u9b54\u6676\u624d\u80fd\u57f9\u80b2\u51fa\u5b83.\u5b83\u53ef\u4ee5\u751f\u4ea7\u6c34\u4e4b\u5c18.\u5728\u5176\u9644\u8fd1\u505c\u7559\u53ef\u6e05\u9664\u836f\u6c34\u6548\u679c,\u5c31\u50cf\u559d\u4e86\u6876\u725b\u5976\u4e00\u6837.\u8fd9\u5bf9\u806a\u660e\u7684\u5de5\u7a0b\u5e08\u5f88\u6709\u7528!\u7531\u4e24\u4e2a\u6c34\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIrA==",
                    "title": "\u6d41\u6c34\u8702",
                    "tooltip": "<strong>\u6d41\u6c34\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c34\u8702"
                },
                {
                    "name": "\u94f1\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/353.png",
                    "x": 156.0,
                    "y": 600.0,
                    "data": "\u4e00\u53ea\u94f1\u8702.\u4f60\u786e\u5b9e\u53ef\u4ee5\u4ece\u5b83\u7684\u8702\u7a9d\u4e2d\u5f97\u5230\u5c11\u91cf\u7eaf\u9507\u548c\u94f1.</br></br>[note]\u6709\u4e86\u94f1\u8702\u7a9d\u548c\u94c0\u8702\u7a9d,\u4f60\u5c31\u80fd\u5236\u4f5c\u7528\u4e8e\u5de5\u4e1a\u8702\u7bb1\u7684\u6c14\u5019\u63a7\u5236\u6a21\u5757\u4e86![/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABYQ==",
                    "title": "\u94f1\u8702",
                    "tooltip": "<strong>\u94f1\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94a8\u8702</br>\u94c2\u8702"
                },
                {
                    "name": "\u7eff\u5b9d\u77f3\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2200.png",
                    "x": 156.0,
                    "y": 456.0,
                    "data": "\u592a\u68d2\u4e86,\u4e00\u79cd\u975e\u5e38\u6709\u7528\u7684\u871c\u8702.\u7eff\u5b9d\u77f3\u53ef\u4ee5\u5236\u4f5c\u591a\u79cd\u5347\u7ea7,\u8fd8\u80fd\u7528\u6765\u4e0e\u6751\u6c11\u4ea4\u6613.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u7eff\u5b9d\u77f3\u5757.\u7531\u6a44\u6984\u77f3\u8702\u548c\u94bb\u77f3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAImA==",
                    "title": "\u7eff\u5b9d\u77f3\u8702",
                    "tooltip": "<strong>\u7eff\u5b9d\u77f3\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6a44\u6984\u77f3\u8702</br>\u94bb\u77f3\u8702"
                },
                {
                    "name": "\u4e2d\u5b50\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/355.png",
                    "x": 276.0,
                    "y": 648.0,
                    "data": "\u4f60\u7ec8\u4e8e\u6210\u529f\u8d70\u5230\u4e2d\u5b50\u8702\u8fd9\u4e00\u6b65\u4e86!\u592a\u68d2\u4e86!</br></br>\u4e2d\u5b50\u8702\u7a9d\u4e0d\u4ec5\u80fd\u591f\u51cf\u8f7b\u4f60\u9ad8\u7089\u7684\u8d1f\u62c5,\u4e5f\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u6700\u7ec8\u7684\u9ad8\u7ea7\u8bf1\u53d8\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABYw==",
                    "title": "\u4e2d\u5b50\u8702",
                    "tooltip": "<strong>\u4e2d\u5b50\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9545\u8702</br>\u8d85\u80fd\u7845\u5ca9\u8702"
                },
                {
                    "name": "\u6a61\u80f6\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2285.png",
                    "x": 924.0,
                    "y": 156.0,
                    "data": "\u7ec8\u4e8e!\u4f60\u5f97\u5230\u4e86\u6cbc\u6cfd\u7cfb\u5217\u871c\u8702\u4e2d\u6700\u6709\u7528\u7684\u4e00\u79cd.\u6a61\u80f6\u8702\u4f1a\u76f4\u63a5\u4e3a\u4f60\u751f\u4ea7\u6a61\u80f6\u6761,\u4f60\u4e0d\u518d\u9700\u8981\u90a3\u4e9b\u96be\u95fb\u7684\u786b\u4e86!\u7531\u5206\u998f\u8702\u548c\u6811\u8102\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI7Q==",
                    "title": "\u6a61\u80f6\u8702",
                    "tooltip": "<strong>\u6a61\u80f6\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5206\u998f\u8702</br>\u6811\u8102\u8702"
                },
                {
                    "name": "\u8d85\u80fd\u7845\u5ca9\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/350.png",
                    "x": 204.0,
                    "y": 600.0,
                    "data": "\u4e00\u53ea\u8d85\u80fd\u7845\u5ca9\u8702.\u5b83\u6709\u4e9b\u96be\u83b7\u5f97,\u5e76\u4e14\u6ca1\u9519,\u4e0d\u9700\u8981\u95ee\u4f60\u4e5f\u77e5\u9053,\u4f60\u4ecd\u7136\u9700\u8981\u8d85\u80fd\u7845\u5ca9\u4ea7\u7ebf\u624d\u80fd\u5904\u7406\u4ea7\u7269.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABXg==",
                    "title": "\u8d85\u80fd\u7845\u5ca9\u8702",
                    "tooltip": "<strong>\u8d85\u80fd\u7845\u5ca9\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94f1\u8702</br>\u949a\u8702"
                },
                {
                    "name": "\u8718\u86db\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2240.png",
                    "x": 444.0,
                    "y": 348.0,
                    "data": "\u5c0f\u5fc3,\u8fd9\u79cd\u871c\u8702\u7684\u7279\u6b8a\u6548\u679c\u4f1a\u5438\u5f15\u8718\u86db.\u4f46\u5b83\u6709\u4e00\u79cd\u6709\u7528\u7684\u7279\u6027: \u62e5\u6709\u975e\u5e38\u5927\u7684\u6d3b\u52a8\u8303\u56f4.\u6240\u4ee5\u975e\u5e38\u9002\u5408\u7528\u4e8e\u5927\u8303\u56f4\u6388\u7c89\u6216\u4e3a\u4f60\u63d0\u4f9b\u67d0\u4e9b\u589e\u76ca.\u7531\u8be1\u9690\u8702\u548c\u70ed\u5e26\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIwA==",
                    "title": "\u8718\u86db\u8702",
                    "tooltip": "<strong>\u8718\u86db\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8be1\u9690\u8702"
                },
                {
                    "name": "\u7837\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2254.png",
                    "x": 684.0,
                    "y": 492.0,
                    "data": "\u8fd9\u79cd\u81f4\u547d\u7684\u871c\u8702\u4f1a\u4e3a\u4f60\u751f\u4ea7\u7837,\u975e\u5e38\u9002\u5408\u7528\u4e8e\u4f60\u7684\u7535\u8def\u677f.\u8702\u7bb1\u4e0b\u65b9\u5f97\u653e\u4e2a\u7837\u5757.\u7531\u94f6\u8702\u548c\u950c\u8702\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIzg==",
                    "title": "\u7837\u8702",
                    "tooltip": "<strong>\u7837\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u950c\u8702</br>\u94f6\u8702"
                },
                {
                    "name": "\u80a5\u6599\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2290.png",
                    "x": 1068.0,
                    "y": 252.0,
                    "data": "\u80a5\u6599\u8702\u5c06\u4f1a\u4f7f\u4f60\u7684\u4f5c\u7269\u5e1d\u56fd\u53d1\u51fa\u6109\u5feb\u7684\u5495\u565c\u58f0\u2026\u2026\u6216\u8005\u52a0\u901f\u751f\u957f\u4e4b\u7c7b\u7684.\u5b83\u4eec\u62e5\u6709\"\u6700\u5feb\"\u7684\u751f\u4ea7\u901f\u5ea6\u4e0e\"\u8f83\u5feb\"\u7684\u6388\u7c89\u901f\u5ea6,\u7531\u7070\u70ec\u8702\u548c\u78f7\u7070\u77f3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI8g==",
                    "title": "\u80a5\u6599\u8702",
                    "tooltip": "<strong>\u80a5\u6599\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u78f7\u7070\u77f3\u8702</br>\u7070\u70ec\u8702"
                },
                {
                    "name": "\u9f99\u8840\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/395.png",
                    "x": 204.0,
                    "y": 696.0,
                    "data": "\u8981\u83b7\u5f97\u9f99\u8840\u8702\u975e\u5e38\u8d39\u52b2,\u4f46\u5b83\u5728\u6e38\u620f\u540e\u671f\u53ef\u4ee5\u6781\u5927\u65b9\u4fbf\u6d77\u73c0\u73cd\u7684\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABiw==",
                    "title": "\u9f99\u8840\u8702",
                    "tooltip": "<strong>\u9f99\u8840\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e2d\u5b50\u8702"
                },
                {
                    "name": "\u7530\u56ed\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2170.png",
                    "x": 156.0,
                    "y": 120.0,
                    "data": "\u7530\u56ed\u8702\u559c\u6b22\u5728\u7530\u56ed\u4e2d\u6d3b\u52a8-\u4e3a\u6b64,\u4f60\u5fc5\u987b\u8fc1\u79fb\u5230\u5e73\u539f\u578b\u7684\u751f\u7269\u7fa4\u7cfb.\u7531\u8349\u539f\u8702\u548c\u52e4\u594b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIeg==",
                    "title": "\u7530\u56ed\u8702",
                    "tooltip": "<strong>\u7530\u56ed\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52e4\u594b\u8702"
                },
                {
                    "name": "\u751f\u957f\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2158.png",
                    "x": 1164.0,
                    "y": 12.0,
                    "data": "\u751f\u957f\u8702\u662f\u6c34\u679c\u8702\u57f9\u80b2\u7ebf\u7684\u5f00\u7aef.\u7531\u68ee\u6797\u8702\u548c\u52e4\u594b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIbg==",
                    "title": "\u751f\u957f\u8702",
                    "tooltip": "<strong>\u751f\u957f\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52e4\u594b\u8702"
                },
                {
                    "name": "\u7ea2\u77f3\u5408\u91d1\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2182.png",
                    "x": 492.0,
                    "y": 456.0,
                    "data": "\u663e\u7136\u4f60\u9700\u8981\u4e00\u4e2a\u7ea2\u77f3\u5408\u91d1\u5757,\u5bf9\u5427?\u7531\u7ea2\u8272\u5408\u91d1\u8702\u548c\u7ea2\u77f3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIhg==",
                    "title": "\u7ea2\u77f3\u5408\u91d1\u8702",
                    "tooltip": "<strong>\u7ea2\u77f3\u5408\u91d1\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ea2\u8272\u5408\u91d1\u8702</br>\u7ea2\u77f3\u8702"
                },
                {
                    "name": "\u767d\u8272\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2271.png",
                    "x": 1020.0,
                    "y": 12.0,
                    "data": "\u767d\u8272\u8702\u80fd\u4ea7\u51fa\u767d\u8272\u67d3\u6599.\u7531\u51db\u51ac\u8702\u548c\u52e4\u594b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI3w==",
                    "title": "\u767d\u8272\u8702",
                    "tooltip": "<strong>\u767d\u8272\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52e4\u594b\u8702"
                },
                {
                    "name": "\u656c\u4e1a\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2164.png",
                    "x": 204.0,
                    "y": 12.0,
                    "data": "\u656c\u4e1a\u8702\u53ef\u751f\u4ea7\u82b1\u7c89-\u8702\u7bb1\u7ec4\u7684\u5173\u952e\u539f\u6599.\u5b83\u8fd8\u53ef\u7528\u4e8e\u57f9\u80b2\u8bb8\u591a\u5176\u4ed6\u871c\u8702.\u5b83\u4eec\u7684\u6388\u7c89\u901f\u5ea6\u5f88\u5feb,\u6bd4\u5927\u591a\u6570\u871c\u8702\u90fd\u5feb.\u7531\u4e0d\u5026\u8702\u548c\u52e4\u594b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIdA==",
                    "title": "\u656c\u4e1a\u8702",
                    "tooltip": "<strong>\u656c\u4e1a\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52e4\u594b\u8702</br>\u4e0d\u5026\u8702"
                },
                {
                    "name": "\u706b\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2221.png",
                    "x": 588.0,
                    "y": 252.0,
                    "data": "\u706b\u8702\u53ea\u6709\u5728\u5ca9\u6d46\u4e4b\u4e0a\u624d\u80fd\u57f9\u80b2\u51fa\u6765,\u7531\u4ee5\u592a\u8702\u548c\u8d85\u80fd\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIrQ==",
                    "title": "\u706b\u8702",
                    "tooltip": "<strong>\u706b\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d85\u80fd\u8702</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u7cbe\u795e\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2229.png",
                    "x": 636.0,
                    "y": 60.0,
                    "data": "\u7cbe\u795e\u8702\u662f\u7b2c\u4e00\u79cd\u53ef\u4ee5\u4e3a\u4f60\u751f\u4ea7\u7075\u9b42\u8702\u7a9d\u7684\u871c\u8702,\u7075\u9b42\u8702\u7a9d\u662f\u7075\u9b42\u871c\u8721\u7684\u5fc5\u9700\u54c1,\u800c\u7075\u9b42\u871c\u8721\u7528\u4e8e\u591a\u79cd\u9b54\u6cd5\u6846\u67b6.\u7531\u611f\u77e5\u8702\u548c\u4ee5\u592a\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAItQ==",
                    "title": "\u7cbe\u795e\u8702",
                    "tooltip": "<strong>\u7cbe\u795e\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u611f\u77e5\u8702</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u5f02\u56fd\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2237.png",
                    "x": 636.0,
                    "y": 204.0,
                    "data": "\u5c0f\u5fc3,\u5c31\u50cf\u5b83\u7684\u7236\u6bcd,\u5f02\u56fd\u8702\u4f1a\u8ba9\u4f60\u4e2d\u6bd2.\u4f46\u5b83\u4e5f\u662f\u4e1d\u7f15\u7684\u53e6\u4e00\u6765\u6e90.\u7531\u82e6\u884c\u8702\u548c\u70ed\u5e26\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIvQ==",
                    "title": "\u5f02\u56fd\u8702",
                    "tooltip": "<strong>\u5f02\u56fd\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82e6\u884c\u8702"
                },
                {
                    "name": "\u94f6\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2197.png",
                    "x": 684.0,
                    "y": 444.0,
                    "data": "\u94f6\u662fHV\u9636\u6bb5\u7684\u91cd\u8981\u91d1\u5c5e,\u800c\u4e14\u4f60\u4f1a\u957f\u671f\u9700\u8981\u7528\u5b83\u6765\u5236\u4f5c\u7425\u73c0\u91d1.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u94f6\u5757.\u7531\u94c5\u8702\u548c\u9521\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIlQ==",
                    "title": "\u94f6\u8702",
                    "tooltip": "<strong>\u94f6\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9521\u8702</br>\u94c5\u8702"
                },
                {
                    "name": "\u7070\u70ec\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2292.png",
                    "x": 1068.0,
                    "y": 156.0,
                    "data": "\u5236\u9020\u7070\u70ec\u7684\u871c\u8702?\u6b63\u5e38\u4eba\u4f1a\u9700\u8981\u8fd9\u79cd\u4e1c\u897f?\u4e0d\u8fc7\u81f3\u5c11\u4f60\u53ef\u4ee5\u4ece\u5b83\u4eec\u90a3\u91cc\u83b7\u53d6\u201c\u6d3b\u52a8\u8303\u56f4\u5927\u201d\u7684\u57fa\u56e0.\u4f60\u9700\u8981\u53bb\u4e0b\u754c\u8f6c\u8f6c,\u7531\u7c98\u571f\u8702\u548c\u7164\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI9A==",
                    "title": "\u7070\u70ec\u8702",
                    "tooltip": "<strong>\u7070\u70ec\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c98\u571f\u8702</br>\u7164\u8702"
                },
                {
                    "name": "\u8574\u9b54\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2215.png",
                    "x": 444.0,
                    "y": 108.0,
                    "data": "\u8574\u9b54\u8702\u662f\u4f60\u524d\u8fdb\u7684\u4e0b\u4e00\u6b65,\u7531\u9b45\u60d1\u8702\u548c\u602a\u5f02\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIpw==",
                    "title": "\u8574\u9b54\u8702",
                    "tooltip": "<strong>\u8574\u9b54\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u602a\u5f02\u8702</br>\u9b45\u60d1\u8702"
                },
                {
                    "name": "\u78f7\u7070\u77f3\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2291.png",
                    "x": 1068.0,
                    "y": 204.0,
                    "data": "\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u78f7\u7070\u77f3\u5757\u624d\u80fd\u57f9\u80b2\u51fa\u78f7\u7070\u77f3\u8702,\u5b83\u4eec\u7684\u79cd\u5b50\u6cb9\u8702\u7a9d\u80fd\u4ea7\u51fa\u79cd\u5b50\u6cb9.\u7531\u7070\u70ec\u8702\u548c\u7164\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI8w==",
                    "title": "\u78f7\u7070\u77f3\u8702",
                    "tooltip": "<strong>\u78f7\u7070\u77f3\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7070\u70ec\u8702</br>\u7164\u8702"
                },
                {
                    "name": "\u519c\u8015\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2287.png",
                    "x": 444.0,
                    "y": 396.0,
                    "data": "\u519c\u8015\u8702\u5e94\u8be5\u53ef\u4ee5\u5e2e\u52a9\u9644\u8fd1\u7684\u4f5c\u7269\u751f\u957f.\u6548\u679c\u4e0d\u662f\u5f88\u660e\u663e,\u662f\u5427?\u4f60\u5f97\u5728\u5e73\u539f\u7c7b\u7684\u751f\u7269\u7fa4\u7cfb\u624d\u80fd\u57f9\u80b2\u51fa\u5b83.\u7531\u7a3c\u7a51\u8702\u548c\u656c\u4e1a\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI7w==",
                    "title": "\u519c\u8015\u8702",
                    "tooltip": "<strong>\u519c\u8015\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7a3c\u7a51\u8702</br>\u656c\u4e1a\u8702"
                },
                {
                    "name": "\u82f1\u96c4\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2243.png",
                    "x": 60.0,
                    "y": 552.0,
                    "data": "\u8fd9\u79cd\u871c\u8702\u9700\u8981\u4e00\u70b9\u8fd0\u6c14.\u4f60\u5f97\u5728\u5730\u7262\u7bb1\u5b50\u91cc\u627e\u5230\u575a\u5b9a\u8702.\u82f1\u96c4\u8702\u7684\u6548\u679c\u5f88\u6709\u7528,\u4f1a\u4f24\u5bb3\u654c\u5bf9\u751f\u7269.\u7531\u575a\u5b9a\u8702\u548c\u52c7\u8005\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIww==",
                    "title": "\u82f1\u96c4\u8702",
                    "tooltip": "<strong>\u82f1\u96c4\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702"
                },
                {
                    "name": "\u51cb\u7075\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2247.png",
                    "x": 756.0,
                    "y": 180.0,
                    "data": "\u51cb\u7075\u8702\u53ef\u4e3a\u4f60\u751f\u4ea7\u51cb\u96f6\u9ab7\u9ac5\u5934\u548c\u5c11\u91cf\u4e0b\u754c\u4e4b\u661f\u7c89.\u8702\u7bb1\u9700\u8981\u5904\u5728\u672b\u5730,\u5e76\u4e14\u4e0b\u65b9\u9700\u8981\u653e\u4e2a\u4e0b\u754c\u4e4b\u661f\u5757\u624d\u80fd\u57f9\u80b2\u51fa\u5b83.\u7531\u51cb\u96f6\u8702\u548c\u6076\u9f99\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIxw==",
                    "title": "\u51cb\u7075\u8702",
                    "tooltip": "<strong>\u51cb\u7075\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9f99\u8702</br>\u51cb\u96f6\u8702"
                },
                {
                    "name": "\u9041\u4e16\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2175.png",
                    "x": 108.0,
                    "y": 312.0,
                    "data": "\u9041\u4e16\u8702\u4e0e\u5f52\u9690\u8702\u4e00\u6837,\u90fd\u8981\u6c42\u6d3b\u52a8\u8303\u56f4\u5185\u4e0d\u80fd\u6709\u4efb\u4f55\u5b9e\u4f53,\u4f46\u5b83\u4eec\u4f1a\u81ea\u5df1\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u2014\u2014\u5b83\u4eec\u5b9e\u5728\u592a\u8ba8\u538c\u4e86,\u4f1a\u4e3b\u52a8\u6392\u65a5\u6240\u6709\u9760\u8fd1\u7684\u751f\u7269.\u7531\u5f52\u9690\u8702\u548c\u50e7\u4fa3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIfw==",
                    "title": "\u9041\u4e16\u8702",
                    "tooltip": "<strong>\u9041\u4e16\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f52\u9690\u8702</br>\u50e7\u4fa3\u87021"
                },
                {
                    "name": "\u9b54\u6676\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3286.png",
                    "x": 156.0,
                    "y": 552.0,
                    "data": "\u4f60\u6ca1\u6709\u559d\u9189,NEI\u754c\u9762\u4e5f\u6ca1\u9a97\u4f60.\u901a\u8fc7\u79bb\u5fc3\u9b54\u6676\u8702\u7a9d,\u4f60\u53ef\u4ee5\u5f97\u5230\u4e00\u5927\u5806\u4e71\u4e03\u516b\u7cdf\u7684\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAM1g==",
                    "title": "\u9b54\u6676\u8702",
                    "tooltip": "<strong>\u9b54\u6676\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u79d8\u788e\u7247\u8702</br>\u7845\u5ca9\u8702"
                },
                {
                    "name": "\u8be1\u9690\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2239.png",
                    "x": 444.0,
                    "y": 300.0,
                    "data": "\u8be1\u9690\u8702\u662f\u8bb8\u591a\u602a\u7269\u8702\u7684\u6838\u5fc3.\u5728NEI\u67e5\u770b\u5b83\u7684\u6742\u4ea4\u6811\u5427,\u8fd9\u91cc\u5199\u4e0d\u4e0b.\u7531\u602a\u5f02\u8702\u548c\u6e29\u548c\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIvw==",
                    "title": "\u8be1\u9690\u8702",
                    "tooltip": "<strong>\u8be1\u9690\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u602a\u5f02\u8702"
                },
                {
                    "name": "\u798f\u9c81\u4f0a\u514b\u65af\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2190.png",
                    "x": 1212.0,
                    "y": 156.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u6df1\u5165\u53d1\u5c55AE2,\u4f60\u80af\u5b9a\u7528\u5f97\u4e0a\u8fd9\u79cd\u871c\u8702\u751f\u4ea7\u7684\u5ec9\u4ef7\u798f\u9c81\u4f0a\u514b\u65af\u6c34\u6676.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u798f\u9c81\u4f0a\u514b\u65af\u6c34\u6676\u5757,\u7531\u9752\u91d1\u77f3\u8702\u548c\u7ea2\u77f3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIjg==",
                    "title": "\u798f\u9c81\u4f0a\u514b\u65af\u8702",
                    "tooltip": "<strong>\u798f\u9c81\u4f0a\u514b\u65af\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ea2\u77f3\u8702</br>\u9752\u91d1\u77f3\u8702"
                },
                {
                    "name": "\u666e\u5929\u540c\u5e86\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2252.png",
                    "x": 1020.0,
                    "y": 204.0,
                    "data": "\u8fd9\u79cd\u6709\u8da3\u7684\u871c\u8702\u6ca1\u4ec0\u4e48\u6709\u7528\u7684\u4ea7\u7269,\u4f46\u5b83\u4f1a\u4ea7\u751f\u4e00\u79cd\u6709\u8da3\u7684\u6548\u679c:\u6301\u7eed\u7684\u70df\u706b\u8868\u6f14!\u4f60\u53ef\u4ee5\u628a\u8fd9\u4e2a\u7279\u6027\u6742\u4ea4\u8fdb\u522b\u7684\u871c\u8702\u57f9\u80b2\u7ebf\u5185,\u800c\u70df\u706b\u7684\u989c\u8272\u4f1a\u968f\u871c\u8702\u7684\u989c\u8272\u800c\u6539\u53d8.\u8fd9\u79cd\u871c\u8702\u5de5\u4f5c\u65f6\u9700\u8981\u8702\u7bb1\u9732\u5929,\u4f60\u53ef\u4ee5\u901a\u8fc7\u7528\u6d3b\u585e\u906e\u76d6\u8702\u7bb1\u6765\u505c\u4e0b\u70df\u82b1.\u5f88\u9002\u5408\u62ff\u6765\u5e86\u795d\u70b9\u4ec0\u4e48\u4e0d\u662f\u5417?\u7531\u82e6\u884c\u8702\u548c\u6fc0\u52a8\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIzA==",
                    "title": "\u666e\u5929\u540c\u5e86\u8702",
                    "tooltip": "<strong>\u666e\u5929\u540c\u5e86\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82e6\u884c\u8702</br>\u6fc0\u52a8\u8702"
                },
                {
                    "name": "\u9752\u91d1\u77f3\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2174.png",
                    "x": 156.0,
                    "y": 312.0,
                    "data": "\u7ec8\u4e8e,\u6765\u4e86\u53ea\u771f\u6b63\u6709\u70b9\u76fc\u5934\u7684\u871c\u8702.  \u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u9752\u91d1\u77f3\u5757.\u7531\u6076\u9b54\u8702\u548c\u5e1d\u7687\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIfg==",
                    "title": "\u9752\u91d1\u77f3\u8702",
                    "tooltip": "<strong>\u9752\u91d1\u77f3\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9b54\u8702</br>\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702"
                },
                {
                    "name": "\u949a\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2205.png",
                    "x": 276.0,
                    "y": 540.0,
                    "data": "\u949a,\u4ee3\u8868\u79d1\u6280\u7f29\u5f71\u7684\u91d1\u5c5e,\u5728\u5b87\u5b99\u4e2d\u65e0\u81ea\u7136\u5b58\u5728.\u8fd9\u79cd\u871c\u8702\u4f1a\u6467\u6bc1\u5b83\u5468\u56f4\u7684\u4e00\u5207.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u949a\u5757.\u7531\u94c0\u8702\u548c\u7eff\u5b9d\u77f3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.</br></br>[note]\u949a\u8702\u7a9d\u4e5f\u7528\u4e8e\u4e00\u4e9b\u5408\u6210\u914d\u65b9![/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAInQ==",
                    "title": "\u949a\u8702",
                    "tooltip": "<strong>\u949a\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7eff\u5b9d\u77f3\u8702</br>\u94c0\u8702"
                },
                {
                    "name": "\u5965\u79d8\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2217.png",
                    "x": 396.0,
                    "y": 156.0,
                    "data": "\u53ea\u662f\u4f60\u795e\u79d8\u7684\u964c\u751f\u4eba...\u7531\u602a\u5f02\u8702\u548c\u7384\u5965\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIqQ==",
                    "title": "\u5965\u79d8\u8702",
                    "tooltip": "<strong>\u5965\u79d8\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u602a\u5f02\u8702</br>\u7384\u5965\u8702"
                },
                {
                    "name": "\u5b87\u5b99\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3238.png",
                    "x": 60.0,
                    "y": 636.0,
                    "data": "\u5c06\u656c\u4e1a\u8702\u548c\u82f1\u96c4\u8702\u6742\u4ea4\u57f9\u80b2\u53ef\u4ee5\u5f97\u5230\u5b87\u5b99\u8702.\u5e76\u4e14\u8fd9\u9700\u8981\u4e25\u5bd2\u6c14\u6e29.</br></br>\u8fd9\u662f\u4f60\u4e2a\u4eba\u7684\u4e00\u5c0f\u6b65,\u5374\u662f\u8702\u7c7b\u7684\u4e00\u5927\u6b65.</br></br>[note]\u8fd9\u662f\u8bb8\u591a\u4e0e\u592a\u7a7a\u76f8\u5173\u871c\u8702\u7684\u8d77\u70b9.\u67e5\u67e5NEI\u5427,\u4e5f\u8bb8\u4f60\u80fd\u627e\u5230\u4e9b\u76ee\u6807.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMpg==",
                    "title": "\u5b87\u5b99\u8702",
                    "tooltip": "<strong>\u5b87\u5b99\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82f1\u96c4\u8702"
                },
                {
                    "name": "\u9057\u5fd8\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2245.png",
                    "x": 636.0,
                    "y": 156.0,
                    "data": "\u9057\u5fd8\u8702\u662f\u4e0b\u4e00\u6b65,\u7531\u6e6e\u6ca1\u8702\u548c\u65e0\u540d\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIxQ==",
                    "title": "\u9057\u5fd8\u8702",
                    "tooltip": "<strong>\u9057\u5fd8\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u65e0\u540d\u8702"
                },
                {
                    "name": "\u53e4\u4ee3\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2281.png",
                    "x": 876.0,
                    "y": 12.0,
                    "data": "\u53e4\u4ee3\u8702\u662f\u83b7\u53d6\u6e38\u620f\u4e2d\u6700\u597d\u4ea7\u6cb9\u8702\u7684\u7b2c\u4e00\u6b65.\u7531\u52e4\u594b\u8702\u548c\u9ad8\u5c1a\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI6Q==",
                    "title": "\u53e4\u4ee3\u8702",
                    "tooltip": "<strong>\u53e4\u4ee3\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52e4\u594b\u8702</br>\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702"
                },
                {
                    "name": "\u8702\u738b\u6d46",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1122.png",
                    "x": 252.0,
                    "y": 60.0,
                    "data": "\u8702\u738b\u6d46,\u871c\u8702\u5de2\u4e2d\u57f9\u80b2\u5e7c\u866b\u7684\u9752\u5e74\u5de5\u8702\u54bd\u5934\u817a\u7684\u5206\u6ccc\u7269,\u662f\u8702\u738b\u4ee5\u53ca\u5e7c\u866b\u7684\u98df\u7269,\u5b83\u53ea\u80fd\u7531\u5e1d\u7687\u8702\u751f\u4ea7.\u5b83\u7684\u4ea7\u91cf\u53ef\u4ee5\u88ab\u6807\u5b9a\u6846\u67b6\u4e4b\u7c7b\u7684\u6846\u67b6\u63d0\u5347,\u4f46\u7075\u9b42\u6846\u67b6\u662f\u4e2a\u4f8b\u5916.\u8702\u738b\u6d46\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u4e00\u79cd\u53eb\u505a\u4ed9\u9994\u871c\u9152\u7684\u7f8e\u98df,\u5403\u6389\u5b83\u53ef\u4ee5\u8865\u51458\u70b9\u9971\u98df\u5ea6(4\u683c\u9971\u98df\u69fd)\u5e76\u7ed9\u4e88\u73a9\u5bb640\u79d2\u7684\u751f\u547d\u56de\u590d.\u8702\u738b\u6d46\u4e5f\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u98d8\u9999\u9576\u677f,\u540e\u8005\u662f\u5236\u4f5c\u8702\u7bb1\u7ec4\u7684\u5fc5\u8981\u7ec4\u4ef6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEYg==",
                    "title": "\u8702\u738b\u6d46",
                    "tooltip": "<strong>\u8702\u738b\u6d46</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702"
                },
                {
                    "name": "\u5deb\u5996\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/366.png",
                    "x": 828.0,
                    "y": 156.0,
                    "data": "\u65e0\u9700\u51fb\u6740BOSS\u5373\u53ef\u6536\u83b7\u5deb\u5996\u4e4b\u9aa8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABbg==",
                    "title": "\u5deb\u5996\u8702",
                    "tooltip": "<strong>\u5deb\u5996\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d85\u80fd\u8702</br>\u5a1c\u8fe61"
                },
                {
                    "name": "\u4e0d\u5026\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2157.png",
                    "x": 156.0,
                    "y": 12.0,
                    "data": "\u4e0d\u5026\u8702\u662f\u4e24\u6761\u57f9\u80b2\u7ebf\u7684\u5173\u952e.\u7531\u52e4\u594b\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIbQ==",
                    "title": "\u4e0d\u5026\u8702",
                    "tooltip": "<strong>\u4e0d\u5026\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702</br>\u52e4\u594b\u8702"
                },
                {
                    "name": "\u9b42\u9b44\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2230.png",
                    "x": 684.0,
                    "y": 60.0,
                    "data": "\u9b42\u9b44\u8702\u6709\u6700\u9ad8\u7684\u7075\u9b42\u8702\u7a9d\u751f\u4ea7\u7387(20\uff05)\u2026\u2026\u597d\u5427,\u4ec5\u6b21\u4e8e\u68a6\u5883\u8702.\u65e0\u8bba\u5982\u4f55,\u9b42\u9b44\u8702\u7531\u611f\u77e5\u8702\u548c\u7cbe\u795e\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAItg==",
                    "title": "\u9b42\u9b44\u8702",
                    "tooltip": "<strong>\u9b42\u9b44\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u611f\u77e5\u8702</br>\u7cbe\u795e\u8702"
                },
                {
                    "name": "Lapotron",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8796313451559844100.png",
                    "x": 1140.0,
                    "y": 300.0,
                    "data": "This magnificent breed of Bee produces a whole plethora of useful resources, including endless amounts of Lapis, Energium, and Lapotron Dust. However, they are somewhat picky when it comes to breeding; you'll need Energium and Lapis Bees as parents, and the process must take place on the Moon under icy temperatures.",
                    "quest_id": "rKrpOyRHRvSF7TeFSskG_A==",
                    "title": "Lapotron",
                    "tooltip": "<strong>Lapotron</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Energium</br>\u9752\u91d1\u77f3\u8702"
                },
                {
                    "name": "\u6076\u9b54\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2176.png",
                    "x": 204.0,
                    "y": 264.0,
                    "data": "\u6700\u597d\u5c0f\u5fc3\u8fd9\u4e2a!\u5b83\u4f1a\u8ba9\u4f60\u7740\u706b.\u9664\u4e86\u8702\u7a9d,\u8fd9\u79cd\u871c\u8702\u8fd8\u80fd\u751f\u4ea7\u8424\u77f3\u7c89.\u8981\u5728\u4e0b\u754c\u624d\u80fd\u57f9\u80b2\u51fa\u5b83.\u7531\u90aa\u6076\u8702\u548c\u6b8b\u5fcd\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIgA==",
                    "title": "\u6076\u9b54\u8702",
                    "tooltip": "<strong>\u6076\u9b54\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u90aa\u6076\u8702</br>\u6b8b\u5fcd\u8702"
                },
                {
                    "name": "\u54c1\u7ea2\u8272\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2269.png",
                    "x": 1020.0,
                    "y": 108.0,
                    "data": "\u54c1\u7ea2\u8272\u8702\u4e5f\u6709\"\u6700\u5feb\"\u7684\u751f\u4ea7\u901f\u5ea6,\u4e14\u5177\u6709\u51683\u7684\u6e29\u5ea6\u8010\u6027.\u7531\u7c89\u8272\u8702\u548c\u84dd\u8272\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI3Q==",
                    "title": "\u54c1\u7ea2\u8272\u8702",
                    "tooltip": "<strong>\u54c1\u7ea2\u8272\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u84dd\u8272\u8702</br>\u7c89\u8272\u8702"
                },
                {
                    "name": "\u7ea2\u5b9d\u77f3\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2191.png",
                    "x": 204.0,
                    "y": 312.0,
                    "data": "\u7ea2\u5b9d\u77f3\u8702\u662f\u521d\u671f\u94ec\u7684\u6781\u597d\u6765\u6e90.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u7ea2\u5b9d\u77f3\u5757,\u7531\u7ea2\u77f3\u8702\u548c\u94bb\u77f3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIjw==",
                    "title": "\u7ea2\u5b9d\u77f3\u8702",
                    "tooltip": "<strong>\u7ea2\u5b9d\u77f3\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ea2\u77f3\u8702</br>\u94bb\u77f3\u8702"
                },
                {
                    "name": "\u5e7d\u9b42\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2275.png",
                    "x": 492.0,
                    "y": 300.0,
                    "data": "\u5e7d\u9b42\u8702\u4f1a\u751f\u6210\u6076\u9b42,\u8fd9\u662f\u6709\"\u8702\"\u9669\u7684.\u5b83\u4eec\u7684\u7279\u4ea7\u662f\u6076\u9b42\u4e4b\u6cea,\u4f46\u53ea\u6709x1\u7684\u751f\u80b2\u80fd\u529b,\u6240\u4ee5\u6700\u597d\u4f7f\u7528\u4f60\u57f9\u517b\u597d\u5176\u4ed6\u5c5e\u6027\u7684\u6a21\u677f\u516c\u4e3b\u8702\u6765\u57f9\u80b2.\u7531\u706b\u8760\u8702\u548c\u4ee5\u592a\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI4w==",
                    "title": "\u5e7d\u9b42\u8702",
                    "tooltip": "<strong>\u5e7d\u9b42\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u706b\u8760\u8702</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u94c5\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2196.png",
                    "x": 684.0,
                    "y": 396.0,
                    "data": "\u5f53\u4f60\u5f00\u59cb\u5236\u4f5c\u6838\u53cd\u5e94\u5806\u65f6,\u4f60\u9700\u8981\u6210\u5428\u7684\u94c5.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u94c5\u5757.\u7531\u94dc\u8702\u548c\u7164\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIlA==",
                    "title": "\u94c5\u8702",
                    "tooltip": "<strong>\u94c5\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94dc\u8702</br>\u7164\u8702"
                },
                {
                    "name": "\u77f3\u6cb9\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2167.png",
                    "x": 972.0,
                    "y": 252.0,
                    "data": "\u7ec8\u4e8e,\u9ed1\u91d1\u5230\u624b.\u77f3\u6cb9\u8702,\u901a\u8fc7\u9002\u5f53\u7684\u2026\u2026\u6fc0\u52b1\u2026\u2026\u5c31\u53ef\u4ee5\u6ee1\u8db3\u4f60\u80fd\u6e90\u4e0e\u5316\u5de5\u65b9\u9762\u7684\u4e00\u5207\u9700\u6c42,\u4f60\u81f3\u5c11\u4f1a\u6709\u597d\u4e00\u9635\u5b50\u4e0d\u7528\u64cd\u5fc3\u8fd9\u4e8b\u4e86.\u53e6\u4e00\u4e2a\u9009\u62e9\u662f\u5206\u998f\u8702,\u5b83\u5c5e\u4e8e\u9b54\u6cd5\u871c\u8702mod,\u63d0\u4f9b\u7684\u77f3\u6cb9\u7a0d\u5fae\u591a\u4e00\u70b9,\u4f46\u57f9\u80b2\u7ebf\u66f4\u957f,\u7531\u7164\u8702\u548c\u7c98\u6027\u6811\u8102\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIdw==",
                    "title": "\u77f3\u6cb9\u8702",
                    "tooltip": "<strong>\u77f3\u6cb9\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c98\u6027\u6811\u8102\u8702</br>\u7164\u8702"
                },
                {
                    "name": "\u611f\u77e5\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2228.png",
                    "x": 588.0,
                    "y": 60.0,
                    "data": "\u5173\u4e8e\u8fd9\u79cd\u871c\u8702\u6ca1\u4ec0\u4e48\u597d\u8bf4\u7684.\u7531\u4ee5\u592a\u8702\u548c\u8c10\u632f\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAItA==",
                    "title": "\u611f\u77e5\u8702",
                    "tooltip": "<strong>\u611f\u77e5\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u7845\u5ca9\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/358.png",
                    "x": 204.0,
                    "y": 540.0,
                    "data": "\u4e00\u53ea\u7845\u5ca9\u8702.\u5b83\u4e0d\u80fd\u8ba9\u4f60\u514d\u505a\u7845\u5ca9\u5904\u7406\u7ebf,\u4f46\u5982\u679c\u4f60\u79d1\u6280\u8db3\u591f\u7684\u8bdd,\u53ef\u4ee5\u7528\u5b83\u7684\u8702\u7a9d\u6765\u505a\u4e2a\u8bf1\u53d8\u673a!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABZg==",
                    "title": "\u7845\u5ca9\u8702",
                    "tooltip": "<strong>\u7845\u5ca9\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94f1\u8702</br>\u949a\u8702"
                },
                {
                    "name": "\u7cbe\u70bc\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2277.png",
                    "x": 876.0,
                    "y": 204.0,
                    "data": "\u554a,\u5c31\u662f\u5b83.\u4f17\u6240\u5468\u77e5,\u8fd9\u79cd\u871c\u8702\u53ef\u4ee5\u4e3a\u4e00\u6574\u4e2a\u6587\u660e\u4f9b\u80fd.\u628a\u5b83\u4eec\u653e\u8fdb\u6700\u9ad8\u7ea7\u7684\u8702\u7bb1(\u8702\u7bb1\u7ec4\u6216\u5de5\u4e1a\u8702\u7bb1),\u518d\u914d\u4e0a\u9002\u5f53\u7684\u6846\u67b6(\u5347\u7ea7),\u5b83\u4eec\u4ea7\u51fa\u77f3\u6cb9\u7684\u901f\u5ea6\u751a\u81f3\u53ef\u4ee5\u8d85\u8fc7\u67d0\u4e9b\u6cb9\u4e95!\u53e6\u5916,\u4f60\u8fd8\u53ef\u4ee5\u83b7\u5f97\u5c11\u91cf\u7684\u67f4\u6cb9!\u7531\u542b\u6cb9\u8702\u548c\u5206\u998f\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI5Q==",
                    "title": "\u7cbe\u70bc\u8702",
                    "tooltip": "<strong>\u7cbe\u70bc\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5206\u998f\u8702</br>\u542b\u6cb9\u8702"
                },
                {
                    "name": "\u6a44\u6984\u77f3\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2199.png",
                    "x": 156.0,
                    "y": 408.0,
                    "data": "\u4e00\u79cd\u67d0\u65b9\u9762\u5b8c\u5168\u6ca1\u7528\u7684\u871c\u8702,\u6a44\u6984\u77f3\u8702\u53ea\u5728\u57f9\u80b2\u66f4\u597d\u7684\u871c\u8702\u65f6\u624d\u6709\u70b9\u7528.\u6216\u8bb8\u5b83\u8fd8\u80fd\u4e3a\u4f60\u63d0\u4f9b\u4e9b\u9541?\u7531\u672b\u5f71\u8702\u548c\u8d5b\u7279\u65af\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIlw==",
                    "title": "\u6a44\u6984\u77f3\u8702",
                    "tooltip": "<strong>\u6a44\u6984\u77f3\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d5b\u7279\u65af\u8702"
                },
                {
                    "name": "\u94c1\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2193.png",
                    "x": 300.0,
                    "y": 168.0,
                    "data": "\u94c1\u8702\u4f5c\u4e3a\u4e00\u79cd\u8d44\u6e90\u8702\u6ca1\u5565\u5b58\u5728\u611f,\u56e0\u4e3a\u6709\u592a\u591a\u65b9\u5f0f\u53ef\u4ee5\u83b7\u5f97\u5927\u91cf\u7684\u94c1.\u4f46\u5b83\u662f\u871c\u8702\u57f9\u80b2\u7ebf\u7684\u5173\u952e\u4e00\u73af.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u94c1\u5757,\u7531\u94dc\u8702\u548c\u9521\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIkQ==",
                    "title": "\u94c1\u8702",
                    "tooltip": "<strong>\u94c1\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9521\u8702</br>\u94dc\u8702"
                },
                {
                    "name": "Pyrotheum",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9038089047233248346.png",
                    "x": 1092.0,
                    "y": 300.0,
                    "data": "Blazing Pyrotheum is needed in large quantities to satisfy the unquenchable thirst of your Volcani. This Bee produces Pyrotheum Dust directly - all you need to do is fluid-extract it (after reaching this point in the breeding chain, of course).\n\nBreed these bees from Energy and Redstone Bees. They aren't picky about conditions, requiring only Hellish temperature. Yay!",
                    "quest_id": "YVlqGPZBS8qCkkHlu1BDpg==",
                    "title": "Pyrotheum",
                    "tooltip": "<strong>Pyrotheum</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Energium</br>\u7ea2\u77f3\u8702"
                },
                {
                    "name": "\u6076\u610f\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2249.png",
                    "x": 732.0,
                    "y": 60.0,
                    "data": "\u8fd9\u53ea\u871c\u8702\u5411\u4f60\u8868\u73b0\u51fa\u7eaf\u7cb9\u7684\u4e0d\u5c51,\u4ee4\u4eba\u656c\u754f.\u5fc5\u987b\u5728\u4e0b\u754c\u624d\u80fd\u57f9\u80b2\u51fa\u6765.\u6ca1\u6709\u9002\u5f53\u9632\u62a4\u5c31\u522b\u5728\u5b83\u5468\u56f4\u8d70\u6765\u8d70\u53bb\u7684,\u770b\u8d77\u6765\u5b83\u5728\u5632\u7b11\u4f60\u7684\u8fd9\u79cd\u884c\u4e3a.\u7531\u618e\u6076\u8702\u548c\u5730\u72f1\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIyQ==",
                    "title": "\u6076\u610f\u8702",
                    "tooltip": "<strong>\u6076\u610f\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u618e\u6076\u8702"
                },
                {
                    "name": "\u8282\u4fed\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2181.png",
                    "x": 156.0,
                    "y": 216.0,
                    "data": "\u8282\u4fed\u8702\u6ca1\u6709\u4ec0\u4e48\u76f4\u63a5\u7528\u9014,\u4f46\u5b83\u662f\u8bb8\u591a\u57f9\u80b2\u7ebf\u7684\u5fc5\u7ecf\u4e4b\u8def.\u5b83\u9700\u8981\u708e\u70ed\u6216\u4e0b\u754c\u7684\u751f\u7269\u7fa4\u7cfb\u548c\u5e72\u65f1\u7684\u6e7f\u5ea6,\u7531\u6e29\u548c\u8702\u548c\u90aa\u6076\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIhQ==",
                    "title": "\u8282\u4fed\u8702",
                    "tooltip": "<strong>\u8282\u4fed\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u90aa\u6076\u8702</br>\u6b8b\u5fcd\u8702"
                },
                {
                    "name": "\u6ef4\u6c34\u8702\u7a9d",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1119.png",
                    "x": 108.0,
                    "y": 96.0,
                    "data": "\u4f60\u7684\u9ad8\u5c1a\u8702\u751f\u4ea7\u4e86\u4e00\u4e9b\u6ef4\u6c34\u8702\u7a9d.\u8fd9\u53ef\u662f\u83b7\u5f97\u8702\u871c\u7684\u597d\u6765\u6e90. \u591a\u51c6\u5907\u4e00\u4e9b,\u4e3a\u4e86\u4ee5\u540e\u5236\u4f5c\u6807\u5b9a\u6846\u67b6\u4e3b\u8981\u7684\u8702\u871c\u6c41\u6765\u5907\u4e00\u4e9b\u8d27!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEXw==",
                    "title": "\u6ef4\u6c34\u8702\u7a9d",
                    "tooltip": "<strong>\u6ef4\u6c34\u8702\u7a9d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702"
                },
                {
                    "name": "\u4e0d\u9508\u94a2\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/371.png",
                    "x": 636.0,
                    "y": 444.0,
                    "data": "\u8bf4\u5b9e\u8bdd,\u4e0d\u662f\u5f88\u5f3a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABcw==",
                    "title": "\u4e0d\u9508\u94a2\u8702",
                    "tooltip": "<strong>\u4e0d\u9508\u94a2\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94a2\u8702</br>\u94ec\u8702"
                },
                {
                    "name": "\u7c98\u6027\u6811\u8102\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2166.png",
                    "x": 972.0,
                    "y": 204.0,
                    "data": "\u53d7\u591f\u90a3\u4e2a\u7834\u6728\u9f99\u5934\u4e86?\u8bd5\u8bd5\u8fd9\u4e2a\u5427!\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u6a61\u80f6\u6728\u539f\u6728,\u7531\u7c98\u6db2\u7403\u8702\u548c\u6ce5\u70ad\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIdg==",
                    "title": "\u7c98\u6027\u6811\u8102\u8702",
                    "tooltip": "<strong>\u7c98\u6027\u6811\u8102\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c98\u6db2\u7403\u8702</br>\u6ce5\u70ad\u8702"
                },
                {
                    "name": "\u7ea2\u8272\u5408\u91d1\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2183.png",
                    "x": 444.0,
                    "y": 456.0,
                    "data": "\u57f9\u80b2\u7ea2\u8272\u5408\u91d1\u8702\u7684\u8702\u7bb1\u4e0b\u65b9\u9700\u8981\u4e00\u4e2a\u7ea2\u8272\u5408\u91d1\u5757,\u7531\u94dc\u8702\u548c\u7ea2\u77f3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIhw==",
                    "title": "\u7ea2\u8272\u5408\u91d1\u8702",
                    "tooltip": "<strong>\u7ea2\u8272\u5408\u91d1\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94dc\u8702</br>\u7ea2\u77f3\u8702"
                },
                {
                    "name": "\u6b8b\u5fcd\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2178.png",
                    "x": 156.0,
                    "y": 168.0,
                    "data": "\u4e0e\u90aa\u6076\u8702\u76f8\u540c,\u6b8b\u5fcd\u8702\u9700\u8981\u4e0b\u754c\u73af\u5883\u5e76\u7a7f\u597d\u5957\u88c5.\u7531\u90aa\u6076\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIgg==",
                    "title": "\u6b8b\u5fcd\u8702",
                    "tooltip": "<strong>\u6b8b\u5fcd\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u90aa\u6076\u8702</br>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702"
                },
                {
                    "name": "\u8352\u51c9\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/360.png",
                    "x": 396.0,
                    "y": 552.0,
                    "data": "\u8352\u51c9\u8702.\u4e5f\u8bb8\u4f60\u80fd\u641e\u6e05\u695a\u8fd9\u6761\u6742\u4ea4\u8def\u7ebf\u6709\u4ec0\u4e48\u7528?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABaA==",
                    "title": "\u8352\u51c9\u8702",
                    "tooltip": "<strong>\u8352\u51c9\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d2b\u7620\u8702</br>\u5e72\u65f1\u8702"
                },
                {
                    "name": "\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1117.png",
                    "x": 12.0,
                    "y": 12.0,
                    "data": "\u60f3\u8981\u871c\u8702\u8fdb\u884c\u6742\u4ea4,\u4f60\u9700\u8981\u4e24\u79cd\u4e0d\u540c\u54c1\u79cd\u7684\u8702.\u4ece\u4e16\u754c\u751f\u6210\u7684\u8702\u5de2\u4e2d\u83b7\u5f97\u4e00\u53ea\u96c4\u5cf0\u548c\u4e00\u53ea\u516c\u4e3b\u8702(\u6bd4\u5982\u8bf4\u8349\u539f\u8702\u548c\u68ee\u6797\u8702).</br></br>\u8702\u623f\u4e2d\u65e0\u6cd5\u6742\u4ea4.\u4f60\u53ef\u4ee5\u5728\u8702\u7bb1\u6216\u8005\u5176\u4ed6\u517b\u8702\u7684\u8bbe\u5907\u4e2d\u8fdb\u884c\u6742\u4ea4\u5f97\u5230\u4e00\u4e2a\u65b0\u7684\u54c1\u79cd.\u67d0\u4e9b\u6846\u67b6\u5c06\u6709\u52a9\u4e8e\u6b64\u8fc7\u7a0b.\u7f29\u77ed\u5b83\u4eec\u7684\u5bff\u547d\u610f\u5473\u7740\u66f4\u5feb\u7684\u66f4\u65b0\u8fed\u4ee3\u901f\u5ea6.\u53d8\u5f02\u51e0\u7387\u63d0\u5347\u610f\u5473\u7740\u66f4\u5feb\u83b7\u5f97\u7a00\u6709\u871c\u8702.</br></br>\u666e\u901a\u871c\u8702\u6bcf2.2\u5206\u949f\u4f1a\u4ea7\u751f\u4e00\u6b21\u871c\u8702\u4ea7\u7269.\u6ce8\u610f,\u751f\u4ea7\u65f6\u95f4\u662f\u57fa\u4e8e\u871c\u8702\u7684\u57fa\u672c\u751f\u4ea7\u901f\u5ea6\u548c\u4ea7\u54c1\u7a00\u6709\u6027\u7684\u8fd1\u4f3c\u503c.\u5b83\u4eec\u4e0d\u80fd\u53cd\u6620\u5b9e\u9645\u7684\u751f\u4ea7\u65f6\u95f4.</br></br>\u4f7f\u7528\u871c\u8702\u5206\u6790\u4eea\u6216\u662fGT\u626b\u63cf\u4eea,\u786e\u4fdd\u4f60\u57f9\u80b2\u7684\u871c\u8702\u662f\u7eaf\u79cd\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEXQ==",
                    "title": "\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702",
                    "tooltip": "<strong>\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5"
                },
                {
                    "name": "\u94c2\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2203.png",
                    "x": 252.0,
                    "y": 408.0,
                    "data": "\u94c2.\u5728\u5404\u4e2a\u9636\u6bb5\u90fd\u662f\u73cd\u8d35\u7684\u91d1\u5c5e\u8d44\u6e90.\u4f60\u751a\u81f3\u4e0d\u9700\u8981\u94c2\u5757,\u800c\u53ea\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u954d\u5757.\u7531\u94bb\u77f3\u8702\u548c\u94ec\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAImw==",
                    "title": "\u94c2\u8702",
                    "tooltip": "<strong>\u94c2\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94ec\u8702</br>\u94bb\u77f3\u8702"
                },
                {
                    "name": "\u57f9\u80b2\u4e00\u4e9b\u5e84\u4e25\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1120.png",
                    "x": 156.0,
                    "y": 60.0,
                    "data": "\u9ad8\u5c1a\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u80fd\u5f97\u5230\u5e84\u4e25\u8702,\u5e84\u4e25\u8702\u6709\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u5c5e\u6027:\u9ad8\u751f\u80b2\u80fd\u529b.\u5b83\u4eec\u5728\u6b7b\u4ea1\u540e\u4f1a\u7559\u4e0b4\u53ea\u96c4\u5cf0,\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u7559\u4e0b\u5927\u91cf\u7684\u9057\u4f20\u6837\u672c.</br></br>\u5e84\u4e25\u87021.5\u5206\u949f\u4ea7\u51fa\u4e00\u6b21\u6ef4\u6c34\u8702\u7a9d.\u6ce8\u610f,\u751f\u4ea7\u65f6\u95f4\u662f\u57fa\u4e8e\u871c\u8702\u7684\u57fa\u672c\u751f\u4ea7\u901f\u5ea6\u548c\u4ea7\u54c1\u7a00\u6709\u6027\u7684\u8fd1\u4f3c\u503c,\u5b83\u4eec\u4e0d\u80fd\u53cd\u6620\u5b9e\u9645\u7684\u751f\u4ea7\u65f6\u95f4.</br></br>\u8bd1\u8005\u6ce8: \u5176\u5b9e\u51db\u51ac\u8702\u5c31\u6709\u751f\u80b2\u80fd\u529b4\u8fd9\u4e2a\u5c5e\u6027\u2026\u2026",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEYA==",
                    "title": "\u57f9\u80b2\u4e00\u4e9b\u5e84\u4e25\u8702",
                    "tooltip": "<strong>\u57f9\u80b2\u4e00\u4e9b\u5e84\u4e25\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702"
                },
                {
                    "name": "Volcanic",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8657564700861666675.png",
                    "x": 1116.0,
                    "y": 204.0,
                    "data": "One step closer to your goal, these bees can be bred from Furious and Demonic Bees while inside the Nether. Just like their Furious counterparts, they will spawn fire charges while working.",
                    "quest_id": "ysj8avl1SESH2ibGOS3qjQ==",
                    "title": "Volcanic",
                    "tooltip": "<strong>Volcanic</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9b54\u8702</br>Furious"
                },
                {
                    "name": "\u51cb\u96f6\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2248.png",
                    "x": 732.0,
                    "y": 108.0,
                    "data": "\u5b83\u7ed9\u6240\u6709\u9760\u8fd1\u7684\u751f\u7269\u65bd\u52a0\u51cb\u96f6debuff.\u5fc5\u987b\u5728\u4e0b\u754c\u624d\u80fd\u57f9\u80b2\u51fa\u6765.\u7a81\u53d8\u51e0\u7387\u5f88\u4f4e,\u6240\u4ee5\u662f\u65f6\u5019\u627e\u627e\u80fd\u63d0\u5347\u7a81\u53d8\u51e0\u7387\u7684\u6846\u67b6\u4e86.\u7531\u6076\u9b54\u8702\u548c\u6076\u610f\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIyA==",
                    "title": "\u51cb\u96f6\u8702",
                    "tooltip": "<strong>\u51cb\u96f6\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9b54\u8702</br>\u6076\u610f\u8702"
                },
                {
                    "name": "\u82ac\u82b3\u5757",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2258.png",
                    "x": 252.0,
                    "y": 12.0,
                    "data": "\u82ac\u82b3\u5757\u7528\u4e8e\u8702\u7bb1\u7ec4\u514b\u9686\u76d2\u65f6\u7684\u6548\u7387\u662f\u8702\u738b\u6d46\u7684\u4e24\u500d.\u4f60\u9700\u8981\u5965\u80fd\u8702\u4ea7\u51fa\u7684\u8574\u9b54\u6db2\u6ef4\u548c\u656c\u4e1a\u8702\u4ea7\u51fa\u7684\u82b1\u7c89.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI0g==",
                    "title": "\u82ac\u82b3\u5757",
                    "tooltip": "<strong>\u82ac\u82b3\u5757</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8702\u738b\u6d46</br>\u656c\u4e1a\u8702"
                },
                {
                    "name": "\u5a1c\u8fe61",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/364.png",
                    "x": 828.0,
                    "y": 108.0,
                    "data": "\u4e5f\u8bb8\u4f60\u4e0d\u592a\u559c\u6b22\u6253BOSS,\u53c8\u6216\u8005\u4f60\u51fa\u4e8e\u67d0\u79cd\u539f\u56e0\u9009\u62e9\u5f00\u548c\u5e73\u6a21\u5f0f\u6765\u73a9?\u6ca1\u5173\u7cfb,\u4f60\u8fd8\u662f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u871c\u8702\u6765\u83b7\u5f97\u5a1c\u8fe6\u7684\u6389\u843d\u7269.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABbA==",
                    "title": "\u5a1c\u8fe6",
                    "tooltip": "<strong>\u5a1c\u8fe61</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702</br>\u602a\u5f02\u8702"
                },
                {
                    "name": "\u65e0\u540d\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2244.png",
                    "x": 588.0,
                    "y": 156.0,
                    "data": "\u6e6e\u6ca1\u8702\u53ef\u4ee5\u7528\u786c\u5e01\u4e70\u5230,\u6216\u662f\u5728\u672b\u5730\u627e\u5230.\u9700\u8981\u65e0\u540d\u8702\u624d\u80fd\u6742\u4ea4\u51fa\u6076\u9f99\u8702.\u65e0\u540d\u8702\u4e5f\u53ef\u4ee5\u751f\u4ea7\u9057\u5fd8\u871c\u8721,\u7531\u6e6e\u6ca1\u8702\u548c\u4ee5\u592a\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.</br></br>\u8bd1\u8005\u6ce8: \u4e8b\u5b9e\u4e0a\u6e6e\u6ca1,\u65e0\u540d,\u9057\u5fd8,\u7edd\u671b\u8702\u90fd\u53ef\u4ee5\u4ea7\u51fa\u9057\u5fd8\u871c\u8721.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIxA==",
                    "title": "\u65e0\u540d\u8702",
                    "tooltip": "<strong>\u65e0\u540d\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u590d\u5174\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2234.png",
                    "x": 540.0,
                    "y": 12.0,
                    "data": "\u590d\u5174\u8702\u53ea\u80fd\u5728\u79bb\u7075\u6c14\u8282\u70b925\u683c\u5185\u7684\u8702\u7bb1\u4e2d\u57f9\u80b2\u51fa\u6765,\u5b83\u4eec\u4f1a\u7f13\u6162\u5730\u4e3a\u6700\u8fd1\u7684\u8282\u70b9\u5145\u80fd.\u7531\u8c10\u632f\u8702\u548c\u9b54\u529b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIug==",
                    "title": "\u590d\u5174\u8702",
                    "tooltip": "<strong>\u590d\u5174\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u529b\u8702"
                },
                {
                    "name": "\u5e7b\u5f71\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2188.png",
                    "x": 540.0,
                    "y": 504.0,
                    "data": "\u5e7b\u5f71\u8702\u4e0e\u5e7d\u7075\u8702\u7c7b\u4f3c,\u4f46\u5b83\u4eec\u4f1a\u590d\u6d3b\u66f4\u591a\u751f\u7269,\u6bd4\u5982\u6076\u9b42,\u8718\u86db,\u722c\u884c\u8005,\u672b\u5f71\u4eba\u751a\u81f3\u672b\u5f71\u9f99.\u53ea\u8981\u8fd9\u4e9b\u6389\u843d\u7269\u5728\u9644\u8fd1,\u5b83\u4eec\u5c31\u4f1a\u88ab\u590d\u6d3b.\u7531\u5e7d\u7075\u8702\u548c\u672b\u5f71\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIjA==",
                    "title": "\u5e7b\u5f71\u8702",
                    "tooltip": "<strong>\u5e7b\u5f71\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5e7d\u7075\u8702"
                },
                {
                    "name": "\u6076\u9f99\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2246.png",
                    "x": 684.0,
                    "y": 156.0,
                    "data": "\u6076\u9f99\u8702\u53ef\u4ea7\u51fa\u7528\u9b54\u6cd5\u5236\u9020\u9f99\u86cb\u6240\u9700\u7684\u9f99\u4e4b\u5c18,\u5fc5\u987b\u5728\u672b\u5730\u624d\u80fd\u57f9\u80b2\u51fa\u5b83,\u7531\u5e1d\u7687\u8702\u548c\u9057\u5fd8\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIxg==",
                    "title": "\u6076\u9f99\u8702",
                    "tooltip": "<strong>\u6076\u9f99\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702</br>\u9057\u5fd8\u8702"
                },
                {
                    "name": "\u76db\u5f00\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2171.png",
                    "x": 1212.0,
                    "y": 60.0,
                    "data": "\u76db\u5f00\u8702\u4f1a\u50ac\u751f\u9644\u8fd1\u7684\u6811\u82d7,\u8fd9\u80af\u5b9a\u6709\u52a9\u4e8e\u4f60\u7684\u539f\u6728\u4e0e\u6811\u82d7\u4ea7\u91cf.\u76db\u5f00\u8702\u62e5\u6709\u6700\u5feb\u7684\u6388\u7c89\u901f\u5ea6,\u7531\u656c\u4e1a\u8702\u548c\u5174\u65fa\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIew==",
                    "title": "\u76db\u5f00\u8702",
                    "tooltip": "<strong>\u76db\u5f00\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u656c\u4e1a\u8702</br>\u5174\u65fa\u8702"
                },
                {
                    "name": "\u94c0\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2204.png",
                    "x": 276.0,
                    "y": 468.0,
                    "data": "\u6240\u6709\u7684\u4ec7\u6068\u90fd\u6709\u5176\u76ee\u7684\u2014\u2014\u521b\u9020\u8fd9\u79cd\u80fd\u591f\u751f\u4ea7\u5e9e\u5927\u80fd\u91cf\u7684\u871c\u8702.\u8001\u89c4\u77e9,\u8ba9\u5b83\u8fdc\u79bb\u4e00\u5207.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u94c0\u5757,\u7531\u590d\u4ec7\u8702\u548c\u94c2\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.</br></br>\u8981\u83b7\u5f97\u8702\u7a9d,\u4f60\u5f97\u627e\u5230\u4e00\u4e2a\u6e29\u5ea6\u5bd2\u51b7,\u6e7f\u5ea6\u666e\u901a\u7684\u751f\u7269\u7fa4\u7cfb,\u8981\u4e48\u5c31\u6a21\u62df\u8fd9\u4e9b\u751f\u957f\u6761\u4ef6.</br></br>[note]\u6709\u4e86\u94c0\u8702\u7a9d\u548c\u94f1\u8702\u7a9d,\u4f60\u5c31\u80fd\u5236\u4f5c\u7528\u4e8e\u5de5\u4e1a\u8702\u7bb1\u7684\u6c14\u5019\u63a7\u5236\u6a21\u5757\u4e86![/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAInA==",
                    "title": "\u94c0\u8702",
                    "tooltip": "<strong>\u94c0\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c2\u8702</br>\u590d\u4ec7\u8702"
                },
                {
                    "name": "\u6c14\u4f53\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/363.png",
                    "x": 588.0,
                    "y": 552.0,
                    "data": "\u8fd9\u6709\u4e00\u5927\u7fa4\u7684\u4ea7\u6c14\u871c\u8702,\u8ba9\u6211\u4eec\u5148\u6765\u57f9\u80b2\u5176\u4e2d\u7684\u4e00\u79cd\u5427.</br></br>\u00a73\u8fd9\u662f\u8bb8\u591a\u4e0e\u6c14\u4f53\u76f8\u5173\u7684\u871c\u8702\u7684\u8d77\u70b9.\u67e5\u67e5NEI\u5427,\u4e5f\u8bb8\u4f60\u80fd\u627e\u5230\u4e9b\u76ee\u6807.</br></br>[note]\u6c19\u8702\u4e5f\u8bb8\u662f\u6700\u6709\u7528\u7684\u4e00\u4e2a,\u4f60\u53ef\u4ee5\u628a\u5b83\u7528\u4e8e\u865a\u7a7a\u91c7\u77ff\u673a,\u6216\u8005\u5de5\u4e1a\u9ad8\u7089\u7684\u4fdd\u62a4\u6c14\u4ee5\u51cf\u5c11\u70e7\u5236\u65f6\u95f4.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABaw==",
                    "title": "\u6c14\u4f53\u8702",
                    "tooltip": "<strong>\u6c14\u4f53\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c34\u8702</br>\u672b\u5f71\u7c89\u672b\u8702"
                },
                {
                    "name": "\u5e72\u65f1\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/356.png",
                    "x": 396.0,
                    "y": 456.0,
                    "data": "\u5e72\u65f1\u8702.\u4f60\u8bf4\u5b83\u6ca1\u7528?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABZA==",
                    "title": "\u5e72\u65f1\u8702",
                    "tooltip": "<strong>\u5e72\u65f1\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8282\u4fed\u8702"
                },
                {
                    "name": "\u8d85\u80fd\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2214.png",
                    "x": 444.0,
                    "y": 156.0,
                    "data": "\u8fd9\u4e24\u5144\u5f1f\u53c8\u9047\u4e0a\u4ec0\u4e48\u9ebb\u70e6\u4e86?\u8d85\u80fd\u8702\u662f\u795e\u79d8\u7c7b\u871c\u8702\u7684\u5173\u952e\u4e00\u73af.\u67e5\u770bNEI\u83b7\u77e5\u57f9\u80b2\u7684\u6700\u4f73\u6708\u76f8,\u7531\u9b45\u60d1\u8702\u548c\u8574\u9b54\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIpg==",
                    "title": "\u8d85\u80fd\u8702",
                    "tooltip": "<strong>\u8d85\u80fd\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8574\u9b54\u8702</br>\u9b45\u60d1\u8702"
                },
                {
                    "name": "\u50e7\u4fa3\u87021",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2185.png",
                    "x": 60.0,
                    "y": 264.0,
                    "data": "\u50e7\u4fa3\u8702\u65e0\u6cd5\u5728\u91ce\u751f\u8702\u5de2\u4e2d\u53d1\u73b0,\u4e5f\u65e0\u6cd5\u57f9\u80b2\u51fa\u6765.\u4f60\u53ea\u80fd\u5bfb\u627e\u517b\u8702\u5458\u6751\u6c11\u4ea4\u6613\u83b7\u5f97\u5b83.\u6709\u8bb8\u591a\u65b9\u6cd5\u53ef\u4ee5\u5236\u9020\u66f4\u591a\u6751\u6c11,\u7814\u7a76\u7814\u7a76\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIiQ==",
                    "title": "\u50e7\u4fa3\u8702",
                    "tooltip": "<strong>\u50e7\u4fa3\u87021</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702"
                },
                {
                    "name": "\u795e\u79d8\u5c18\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2238.png",
                    "x": 684.0,
                    "y": 252.0,
                    "data": "\u867d\u7136\u795e\u79d8\u952d\u672c\u5c31\u5f88\u597d\u505a,\u4f46\u8fd9\u79cd\u871c\u8702\u53ef\u4ee5\u8ba9\u4f60\u81ea\u52a8\u5316\u5730\u83b7\u53d6\u5927\u91cf\u795e\u79d8\u952d.\u6742\u4ea4\u65f6\u8702\u7bb1\u4e0b\u65b9\u9700\u8981\u653e\u7f6e\u4e00\u4e2a\u795e\u79d8\u952d\u5757.\u7531\u4f0a\u7538\u8702\u548c\u707c\u70ed\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIvg==",
                    "title": "\u795e\u79d8\u5c18\u8702",
                    "tooltip": "<strong>\u795e\u79d8\u5c18\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u707c\u70ed\u8702</br>\u4f0a\u7538\u8702"
                },
                {
                    "name": "\u7ea2\u77f3\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2184.png",
                    "x": 252.0,
                    "y": 264.0,
                    "data": "\u57f9\u80b2\u7ea2\u77f3\u8702\u7684\u8702\u7bb1\u4e0b\u65b9\u9700\u8981\u4e00\u4e2a\u7ea2\u77f3\u5757,\u7531\u656c\u4e1a\u8702\u548c\u6076\u9b54\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIiA==",
                    "title": "\u7ea2\u77f3\u8702",
                    "tooltip": "<strong>\u7ea2\u77f3\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9b54\u8702</br>\u656c\u4e1a\u8702"
                },
                {
                    "name": "Sunnarium",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6278340775631964090.png",
                    "x": 1164.0,
                    "y": 252.0,
                    "data": "Not only does this bee produce more Glowstone than its parent species, but it's also capable of producing Sunnarium. However, this requires some technical progress: to breed this bee, you will need to place a Superconducting Coil Block beneath it.",
                    "quest_id": "VoQgq6UvTZmo3tpUIZs4Rg==",
                    "title": "Sunnarium",
                    "tooltip": "<strong>Sunnarium</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Glowstone</br>Gold"
                },
                {
                    "name": "\u94ec\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2202.png",
                    "x": 252.0,
                    "y": 360.0,
                    "data": "\u94ec,\u4e0d\u9508\u94a2\u7684\u91cd\u8981\u539f\u6599\u4e4b\u4e00.\u6700\u597d\u80fd\u76f4\u63a5\u83b7\u53d6,\u800c\u4e0d\u662f\u5fc5\u987b\u901a\u8fc7\u5904\u7406\u7ea2\u5b9d\u77f3\u6216\u77f3\u69b4\u77f3\u83b7\u53d6.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u94ec\u5757.\u7531\u949b\u8702\u548c\u7ea2\u5b9d\u77f3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAImg==",
                    "title": "\u94ec\u8702",
                    "tooltip": "<strong>\u94ec\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u949b\u8702</br>\u7ea2\u5b9d\u77f3\u8702"
                },
                {
                    "name": "\u8bb0\u6068\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2208.png",
                    "x": 300.0,
                    "y": 312.0,
                    "data": "\u5f53\u5fc3\u70b9,\u8fd9\u4e9b\u871c\u8702\u4e0d\u53ea\u618e\u6068\u6240\u6709\u7684\u751f\u7269,\u751a\u81f3\u8fd8\u618e\u6068\u65b9\u5757.\u628a\u5b83\u4eec\u7684\u8702\u7bb1\u653e\u8fdc\u70b9,\u8fdc\u79bb\u4e00\u5207.\u7531\u50e7\u4fa3\u8702\u548c\u6076\u9b54\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIoA==",
                    "title": "\u8bb0\u6068\u8702",
                    "tooltip": "<strong>\u8bb0\u6068\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9b54\u8702</br>\u50e7\u4fa3\u87021"
                },
                {
                    "name": "\u94dd\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2198.png",
                    "x": 300.0,
                    "y": 264.0,
                    "data": "\u5728MV\u9636\u6bb5\u4e4b\u524d\u4f60\u7528\u4e0d\u4e0a\u94dd,\u4f46\u5f53\u4f60\u9700\u8981\u5b83\u65f6,\u5c31\u662f\u6210\u5428\u5730\u8981.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u94dd\u5757.\u7531\u954d\u8702\u548c\u950c\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIlg==",
                    "title": "\u94dd\u8702",
                    "tooltip": "<strong>\u94dd\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u954d\u8702</br>\u950c\u8702"
                },
                {
                    "name": "\u948d\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/357.png",
                    "x": 348.0,
                    "y": 552.0,
                    "data": "\u4e00\u53ea\u948d\u8702.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABZQ==",
                    "title": "\u948d\u8702",
                    "tooltip": "<strong>\u948d\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7164\u8702</br>\u94c0\u8702"
                },
                {
                    "name": "\u7384\u5965\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2218.png",
                    "x": 396.0,
                    "y": 108.0,
                    "data": "\u53e6\u4e00\u79cd\u57fa\u7840\u7684\u9b54\u6cd5\u7c7b\u871c\u8702.\u7531\u602a\u5f02\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIqg==",
                    "title": "\u7384\u5965\u8702",
                    "tooltip": "<strong>\u7384\u5965\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u602a\u5f02\u8702</br>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702"
                },
                {
                    "name": "\u8d2b\u7620\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/308.png",
                    "x": 396.0,
                    "y": 504.0,
                    "data": "\u8fd9\u662f\u8d2b\u7620\u8702.\u597d\u4e0d\u4e86\u591a\u5c11.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABNA==",
                    "title": "\u8d2b\u7620\u8702",
                    "tooltip": "<strong>\u8d2b\u7620\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5e72\u65f1\u8702"
                },
                {
                    "name": "\u5174\u65fa\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2155.png",
                    "x": 1164.0,
                    "y": 60.0,
                    "data": "\u5174\u65fa\u8702\u6ca1\u5565\u7528,\u4f46\u5b83\u662f\u57f9\u80b2\u51fa\u6c34\u679c\u8702\u7684\u5fc5\u8981\u6b65\u9aa4.\u7531\u751f\u957f\u8702\u548c\u4e0d\u5026\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIaw==",
                    "title": "\u5174\u65fa\u8702",
                    "tooltip": "<strong>\u5174\u65fa\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u5026\u8702</br>\u751f\u957f\u8702"
                },
                {
                    "name": "\u94a8\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/352.png",
                    "x": 108.0,
                    "y": 600.0,
                    "data": "\u6765\u57f9\u80b2\u4e00\u53ea\u94a8\u8702\u5427.\u8fd9\u5c24\u5176\u6709\u610f\u601d,\u56e0\u4e3a\u4f60\u53ef\u4ee5\u4ece\u5b83\u7684\u8702\u7a9d\u4e2d\u5f97\u5230\u7eaf\u94a8,\u800c\u4e0d\u662f\u53ea\u6709\u94a8\u9178\u9502\u6216\u767d\u94a8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABYA==",
                    "title": "\u94a8\u8702",
                    "tooltip": "<strong>\u94a8\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82f1\u96c4\u8702</br>\u9530\u8702"
                },
                {
                    "name": "\u5145\u80fd\u5408\u91d1\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2187.png",
                    "x": 444.0,
                    "y": 504.0,
                    "data": "\u6beb\u65e0\u7591\u95ee,\u5145\u80fd\u5408\u91d1\u8702\u7684\u8702\u7bb1\u4e0b\u65b9\u9700\u8981\u6709\u4e2a\u5145\u80fd\u5408\u91d1\u5757.\u7531\u7ea2\u77f3\u5408\u91d1\u8702\u548c\u6076\u9b54\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIiw==",
                    "title": "\u5145\u80fd\u5408\u91d1\u8702",
                    "tooltip": "<strong>\u5145\u80fd\u5408\u91d1\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9b54\u8702</br>\u7ea2\u77f3\u5408\u91d1\u8702"
                },
                {
                    "name": "\u539f\u59cb\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2280.png",
                    "x": 876.0,
                    "y": 60.0,
                    "data": "\u539f\u59cb\u8702,\u4f1f\u5927\u57f9\u80b2\u7ebf\u7684\u53c8\u4e00\u5c0f\u6b65.\u7531\u5f52\u9690\u8702\u548c\u53e4\u4ee3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI6A==",
                    "title": "\u539f\u59cb\u8702",
                    "tooltip": "<strong>\u539f\u59cb\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f52\u9690\u8702</br>\u53e4\u4ee3\u8702"
                },
                {
                    "name": "\u6c34\u679c\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2153.png",
                    "x": 1116.0,
                    "y": 60.0,
                    "data": "\u6c34\u679c\u8702\u5c06\u4f1a\u8ba9\u4f60\u7684\u6797\u4e1a\u6811\u66f4\u5feb\u5730\u7ed3\u51fa\u679c\u5b9e.\u7531\u751c\u7f8e\u8702\u548c\u5174\u65fa\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIaQ==",
                    "title": "\u6c34\u679c\u8702",
                    "tooltip": "<strong>\u6c34\u679c\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u751c\u7f8e\u8702</br>\u5174\u65fa\u8702"
                },
                {
                    "name": "\u954d\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2194.png",
                    "x": 252.0,
                    "y": 216.0,
                    "data": "\u954d\u8702\u63d0\u4f9b\u4e86\u4e00\u79cd\u5f88\u6709\u7528\u7684\u8d44\u6e90.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u954d\u5757,\u7531\u94c1\u8702\u548c\u94dc\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIkg==",
                    "title": "\u954d\u8702",
                    "tooltip": "<strong>\u954d\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c1\u8702</br>\u94dc\u8702"
                },
                {
                    "name": "\u590d\u4ec7\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2206.png",
                    "x": 300.0,
                    "y": 408.0,
                    "data": "\u4ec7\u6068\u51dd\u805a\u4e3a\u90a3\u6700\u66b4\u529b\u7684\u5f62\u5f0f.\u8ba9\u5b83\u8fdc\u79bb\u4e00\u5207.\u7531\u62a5\u4ec7\u8702\u548c\u8bb0\u6068\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIng==",
                    "title": "\u590d\u4ec7\u8702",
                    "tooltip": "<strong>\u590d\u4ec7\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8bb0\u6068\u8702</br>\u62a5\u4ec7\u8702"
                },
                {
                    "name": "\u672b\u5f71\u7c89\u672b\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/372.png",
                    "x": 636.0,
                    "y": 492.0,
                    "data": "\u8fd9\u53ea\u871c\u8702\u7684\u540d\u5b57\u6709\u4e9b\u4e0d\u51c6\u786e,\u5b9e\u9645\u4e0a\u5b83\u4ea7\u51fa\u7684\u662f\u672b\u5f71\u7c98\u6d46\u548c\u672b\u5f71\u7c89\u672b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABdA==",
                    "title": "\u672b\u5f71\u7c89\u672b\u8702",
                    "tooltip": "<strong>\u672b\u5f71\u7c89\u672b\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u9508\u94a2\u8702"
                },
                {
                    "name": "\u949b\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2201.png",
                    "x": 252.0,
                    "y": 312.0,
                    "data": "\u6709\u4e00\u79cd\u871c\u8702,\u5b83\u751f\u4ea7\u7684\u949b\u4f7f\u5236\u9020\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u548c\u84b8\u998f\u5854\u53d8\u5f97\u5982\u4e00\u7f15\u6e05\u98ce. (Titanium from bees will make getting those LCRs and distillation towers a breeze)  \u563f,\u6211\u62bc\u97f5\u4e86!\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u949b\u5757.\u7531\u94dd\u8702\u548c\u7ea2\u77f3\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAImQ==",
                    "title": "\u949b\u8702",
                    "tooltip": "<strong>\u949b\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94dd\u8702</br>\u7ea2\u77f3\u8702"
                },
                {
                    "name": "\u871c\u8702\u57f9\u80b2\"\u667a\u8005\"\u624b\u518c",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2209.png",
                    "x": 12.0,
                    "y": 60.0,
                    "data": "\u9996\u5148,\u4e0d\u8981\u88ab\u4f60\u5728\u8fd9\u91cc\u770b\u5230\u7684\u8fd9\u4e48\u591a\u871c\u8702\u5413\u5230.\u8fd8\u6709\u66f4\u591a\u6ca1\u6709\u5199\u5165\u8fd9\u91cc\u7684\u871c\u8702,\u4f60\u9700\u8981\u7528NEI\u6765\u5bfb\u627e\u5b83\u4eec!</br></br>\u54c8\u54c8,\u5f00\u4e2a\u73a9\u7b11,\u4e0d\u8981\u614c!\u871c\u8702\u57f9\u80b2\u7ebf\u4e00\u70b9\u4e00\u70b9\u5730\u89e3\u9501,\u5f15\u5bfc\u4f60\u4e0b\u4e00\u6b65\u53ef\u4ee5\u505a\u4ec0\u4e48,\u4efb\u52a1\u7ebf\u5927\u591a\u6570\u662f\u4ece\u4e0a\u5230\u4e0b\u7684.\u5927\u7684\u56fe\u6807\u4ee3\u8868\u7279\u522b\u5f3a\u5927\u7684\u871c\u8702.\u8bb8\u591a\u57fa\u7840\u871c\u8702\u6709\u591a\u79cd\u57f9\u80b2\u9009\u62e9,\u8fd9\u91cc\u53ea\u5199\u4e00\u79cd\u57f9\u80b2\u8def\u7ebf.</br></br>\u871c\u8702\u6709\u4e24\u5957\u7279\u6027,\u6d3b\u8dc3\u7684(\u663e\u6027\u57fa\u56e0)\u548c\u4e0d\u6d3b\u8dc3\u7684(\u9690\u6027\u57fa\u56e0), \u663e\u6027\u57fa\u56e0\u5f71\u54cd\u871c\u8702\u7684\u6d3b\u52a8\u65b9\u5f0f,\u800c\u9690\u6027\u57fa\u56e0\u53ea\u4f1a\u5f71\u54cd\u9057\u4f20. </br></br>\u7279\u6027\u53ef\u4ee5\u662f[warn]\u663e\u6027\u7684[/warn]\u6216\u8005\u662f\u00a79\u9690\u6027\u7684\u00a7r. \u5f53\u4f60\u57f9\u80b2\u51fa\u5168\u65b0\u7684\u516c\u4e3b\u8702\u548c\u96c4\u5cf0\u540e,\u68c0\u67e5\u4e24\u5957\u7279\u6027,\u4e00\u81f4\u65f6\u4f60\u5c31\u5f97\u5230\u4e86\u7eaf\u79cd\u7684\u76ee\u6807\u871c\u8702.\u4f60\u53ef\u4ee5\u57f9\u80b2\u5177\u6709\u4e0d\u6d3b\u8dc3\u7279\u6027\u7684\u871c\u8702,\u8ba9\u5b83\u4eec\u901a\u8fc7\u4e4b\u540e\u7684\u6742\u4ea4\u4e2d\u6d3b\u8dc3\u8d77\u6765.\u4f7f\u7528\u5b9e\u5730\u8003\u5bdf\u5de5\u5177\u5305\u6216\u8005GT\u626b\u63cf\u4eea\u65f6\u65e0\u6cd5\u770b\u5230\u871c\u8702\u7684\u9690\u6027\u57fa\u56e0,\u6240\u4ee5\u4f60\u9700\u8981\u871c\u8702\u5206\u6790\u4eea.</br></br>\u57f9\u80b2\u871c\u8702\u65f6,\u5efa\u7acb\u4e00\u4e2a\u4e3b\u6a21\u677f\u871c\u8702\u662f\u4e2a\u597d\u4e3b\u610f.\u6240\u8c13\u4e3b\u6a21\u677f\u871c\u8702\u5c31\u662f\u4e00\u79cd\u51e0\u4e4e\u6ca1\u6709\u6742\u4ea4\u6f5c\u529b\u7684\u871c\u8702,\u4f46\u62e5\u6709\u4f60\u6240\u6709\u5e0c\u671b\u7684\u7279\u6027-\u77ed\u5bff\u3001\u591c\u884c\u6027\u3001\u7a74\u5c45\u6027\u3001\u8010\u96e8\u98de\u884c\u6027\u3001\u6e7f\u5ea6\u4e0e\u6e29\u5ea6\u8010\u53d7\u529b\u9ad8\u3001\u751f\u80b2\u80fd\u529b\u9ad8\u7b49\u7b49.\u4e00\u65e6\u4f60\u57f9\u80b2\u51fa\u8fd9\u79cd\u871c\u8702\u540e,\u7e41\u6b96\u4e00\u6279\u663e\u6027/\u9690\u6027\u57fa\u56e0\u4e00\u81f4\u7684\u7eaf\u79cd\u516c\u4e3b\u8702\u548c\u96c4\u5cf0.\u5b83\u4eec\u5c06\u6210\u4e3a\u4f60\u7684\u57f9\u80b2\u50a8\u5907.</br></br>\u5f53\u4f60\u51c6\u5907\u57f9\u80b2\u65b0\u54c1\u79cd\u7684\u871c\u8702\u65f6,\u4f60\u60f3\u8981\u5f97\u5230\u7684\u662f\u96c4\u5cf0-\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u52a8\u7528\u4f60\u7684\"\u57f9\u80b2\u50a8\u5907\"\u516c\u4e3b\u8702\u4e0e\u96c4\u8702\u57f9\u80b2\u51fa\u6ca1\u6709\u70e6\u4eba\u7684\u6548\u679c\u6216\u9650\u5236\u7684\u65b0\u54c1\u79cd.\u5c5e\u6027\u4e0d\u597d\u7684\u516c\u4e3b\u8702\u53ef\u4ee5\u4e0e\u4f60\u7684\"\u57f9\u80b2\u50a8\u5907\"\u96c4\u5cf0\u6742\u4ea4,\u91cd\u65b0\u52a0\u5165\u4f60\u7684\u57f9\u80b2\u50a8\u5907,\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06\u5176\u675f\u4e4b\u9ad8\u9601(\u8981\u662f\u61d2\u5f97\u6d17\u6389\u90a3\u4e9b\u70e6\u4eba\u7684\u6548\u679c\u6216\u9650\u5236\u7684\u8bdd).\u786e\u4fdd\u65b0\u871c\u8702\u4fdd\u6301\u4f60\u9700\u8981\u7684\u7279\u6027\u548c\u54c1\u79cd,\u7136\u540e\u6162\u6162\u7528\u4f60\u57f9\u80b2\u50a8\u5907\u4e2d\u7684\u7279\u6027\u8986\u76d6\u5176\u4f59.\u4f18\u5316\u57fa\u56e0\u7684\u8fc7\u7a0b\u4e0d\u5fc5\u5728\u8702\u7bb1\u4e2d\u8fdb\u884c,\u4f60\u53ef\u4ee5\u4f7f\u7528\u8702\u623f\u6765\u5b8c\u6210.\u8bf7\u8bb0\u4f4f,\u8702\u623f\u4e2d\u4e0d\u4f1a\u53d1\u751f\u4efb\u4f55\u7269\u79cd\u7a81\u53d8.\u5351\u8d31\u79cd\u7684\u871c\u8702\u5f88\u9002\u5408\u7528\u4e8e\u4ea4\u6362\u7279\u6027,\u56e0\u4e3a\u5b83\u4eec\u53ef\u968f\u610f\u5904\u7406-\u5728100\u4e2a\u7e41\u6b96\u5468\u671f\u540e,\u5b83\u4eec\u6709\u51e0\u7387\u6b7b\u53bb,\u4e4b\u540e\u6bcf\u591a\u7e41\u6b96\u4e00\u4ee3,\u5b83\u4eec\u7684\u6b7b\u4ea1\u51e0\u7387\u5c31\u4f1a\u7a0d\u5fae\u589e\u52a0\u4e00\u70b9,\u4e0d\u8fc7\u9057\u4f20\u7a33\u5b9a\u5347\u7ea7\u4e4b\u7c7b\u7684\u6846\u67b6\u53ef\u4ee5\u8ba9\u5b83\u4eec\u6d3b\u5f97\u66f4\u957f\u4e45\u4e9b.</br></br>\u4e00\u65e6\u4f60\u5de9\u56fa\u4e86\u54c1\u79cd,\u7559\u4e9b\u96c4\u5cf0.\u4f60\u53ef\u4ee5\u7528\u5b83\u4eec\u628a\u59cb\u7956\u79cd\u516c\u4e3b\u8702\u8f6c\u5316\u6210\u65b0\u7684\u54c1\u79cd.\u59cb\u7956\u79cd\u516c\u4e3b\u8702\u4e0d\u4f1a\u6b7b\u4ea1,\u4e0d\u8fc7\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b(\u6bd4\u5982\u4f7f\u7528\u4e86\u5927\u91cf\u63d0\u9ad8\u4ea7\u91cf\u7684\u6846\u67b6),\u5979\u4eec\u4f1a\u9000\u5316\u4e3a\u5351\u8d31\u79cd. \u77f3\u5934\u8702\u5c31\u662f\u59cb\u7956\u79cd\u6781\u597d\u7684\u6765\u6e90-\u5b83\u4eec\u6240\u6709\u7684\u516c\u4e3b\u8702\u90fd\u662f\u59cb\u7956\u79cd,\u800c\u4e14\u5c5e\u6027\u8fd8\u4e0d\u9519,\u5e76\u4e14\u5728\u5730\u4e0b\u5230\u5904\u90fd\u662f.\u8981\u662f\u6709\u4e2a\u672b\u5f71\u91c7\u77f3\u573a,\u4f60\u53ef\u4ee5\u8f7b\u6613\u83b7\u53d6\u5b83\u4eec.</br></br>\u4e00\u65e6\u4f60\u83b7\u5f97\u4e86\u65b0\u54c1\u79cd,\u5b83\u4f1a\u66ff\u6362\u6389\u871c\u8702\u663e\u6027\u57fa\u56e0\u6216\u8005\u9690\u5f62\u57fa\u56e0\u4e2d\u7684\u6240\u6709\u7279\u6027.\u5982\u679c\u540c\u4e00\u871c\u8702\u78b0\u4e0a\u4e86\u4e8c\u6b21\u7a81\u53d8,\u90a3\u4e48\u5b83\u7684\u663e\u6027\u548c\u9690\u6027\u57fa\u56e0\u90fd\u4f1a\u88ab\u66ff\u6362.\u6bd4\u5982,\u5f53\u4f60\u83b7\u5f97\u4e86\u4e00\u53ea\u7530\u91ce\u8702,\u6bcf\u4e00\u6761\u663e\u6027\u6216\u9690\u6027\u57fa\u56e0\u4efb\u9009\u5176\u4e00\u4f1a\u88ab\u7530\u91ce\u8702\u7684\u9ed8\u8ba4\u7279\u6027\u66ff\u6362.\u7ecf\u8fc7\u51e0\u6b21\u6df7\u5408\u7eaf\u5316,\u4f60\u624d\u80fd\u5f97\u5230\u7eaf\u79cd\u7684\u871c\u8702.\u5f53\u5fc3\u522b\u628a\u5173\u952e\u7279\u6027\u5f04\u4e22\u4e86,\u6bd4\u5982\u7530\u91ce\u8702\u7684\u5feb\u901f\u5de5\u4f5c\u7279\u6027.\u5927\u90e8\u5206\u7279\u6b8a\u6548\u679c\u90fd\u662f\u6ca1\u7528\u7684,\u6240\u4ee5\u4f60\u53ef\u4ee5\u4e0d\u7528\u8003\u8651\u5b83\u4eec.  </br></br>\u6240\u6709\u7684\u4efb\u52a1\u90fd\u9700\u8981\u7eaf\u79cd\u871c\u8702.\u7eaf\u79cd\u610f\u5473\u7740\u9690\u5f62\u57fa\u56e0\u7684\u54c1\u79cd\u548c\u663e\u6027\u57fa\u56e0\u7684\u76f8\u540c.</br></br>\u4e00\u822c\u6765\u8bf4,\u6240\u6709\u7684\u7279\u6027\u90fd\u53ef\u4ee5\u57f9\u80b2\u8fdb\u4efb\u610f\u54c1\u79cd\u7684\u871c\u8702.\u871c\u8702\u7684\u54c1\u79cd\u4f1a\u51b3\u5b9a\u5176\u6700\u4f73\u6e29\u5ea6/\u6e7f\u5ea6\u73af\u5883,\u4ee5\u53ca\u5176\u4ea7\u7269.\u7279\u6b8a\u54c1\u79cd\u7684\u871c\u8702\u9700\u8981\u5728\u5176\u6700\u4f73\u6e29\u5ea6/\u6e7f\u5ea6\u73af\u5883\u4e0b\u624d\u4f1a\u4ea7\u51fa\u7279\u6b8a\u4ea7\u7269.\u4f60\u53ef\u4ee5\u901a\u8fc7\u5de5\u4e1a\u8702\u7bb1\u7684\u5404\u79cd\u5347\u7ea7\u6765\u6a21\u62df\u7c7b\u4f3c\u7684\u73af\u5883,\u4f46\u871c\u8702\u7684\u8010\u53d7\u6027\u65e0\u6cd5\u8ba9\u5176\u5728\u975e\u6700\u4f73\u73af\u5883\u4e0b\u4ea7\u51fa\u7279\u6b8a\u4ea7\u7269.</br></br>\u5148\u8fdb\u7684\u6846\u67b6\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u6709\u7528\u7684\u5e2e\u52a9,\u5982\u63d0\u9ad8\u7a81\u53d8\u51e0\u7387\u3001\u6216\u964d\u4f4e\u5bff\u547d\u4ee5\u52a0\u5feb\u57f9\u80b2\u5468\u671f.\u4f46\u662f\u8fc7\u9ad8\u7684\u500d\u7387\u4f1a\u589e\u52a0\u57fa\u56e0\u8870\u9000\u51e0\u7387,\u8ba9\u59cb\u7956\u79cd\u516c\u4e3b\u8702\u9000\u5316\u6210\u5351\u8d31\u79cd.</br></br>\u770b\u8d77\u6765\u5f88\u590d\u6742\u5427,\u56e0\u4e3a\u672c\u6765\u5c31\u5f88\u590d\u6742!\u4f46\u5176\u4e2d\u8fd8\u662f\u6709\u5f88\u591a\u5371\u9669\u4e0e\u4e50\u8da3\u5e76\u5b58!</br></br>\u4e2d\u6587WIKI\uff1a</br>\u517b\u8702\uff1a\u00a71\u00a7n[url]https://gtnh.huijiwiki.com/p/424[/url]\u00a7r</br>\u9ad8\u9636\u517b\u8702\u601d\u8def\u5206\u4eab\uff1a\u00a71\u00a7n[url]https://gtnh.huijiwiki.com/p/1166[/url]\u00a7r",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIoQ==",
                    "title": "\u871c\u8702\u57f9\u80b2\"\u667a\u8005\"\u624b\u518c",
                    "tooltip": "<strong>\u871c\u8702\u57f9\u80b2\"\u667a\u8005\"\u624b\u518c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5"
                },
                {
                    "name": "\u5206\u998f\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2278.png",
                    "x": 876.0,
                    "y": 156.0,
                    "data": "\u8fd9\u4ec0\u4e48\u554a?  \u4f60\u8bf4\u8fd8\u4e0d\u5982\u521a\u521a\u90a3\u4e2a\uff01\u786e\u5b9e\uff0c\u5206\u998f\u8702\u6ca1\u5565\u5b9e\u9645\u4f5c\u7528\uff0c\u4f46\u5b83\u4ecd\u6709\u6f5c\u529b\u2026\u2026\u7531\u542b\u6cb9\u8702\u548c\u656c\u4e1a\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765\u3002",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI5g==",
                    "title": "\u5206\u998f\u8702",
                    "tooltip": "<strong>\u5206\u998f\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u656c\u4e1a\u8702</br>\u542b\u6cb9\u8702"
                },
                {
                    "name": "\u618e\u6076\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2250.png",
                    "x": 732.0,
                    "y": 12.0,
                    "data": "\u4f60\u80fd\u611f\u89c9\u5230\u5b83\u773c\u4e2d\u6d8c\u51fa\u7684\u4ec7\u6068,\u5982\u679c\u6ca1\u6709\u7a7f\u7740\u4e00\u6574\u5957\u517b\u8702\u5458\u5957\u88c5\u5c31\u522b\u63a5\u8fd1\u5b83.\u5fc5\u987b\u5728\u4e0b\u754c\u7531\u602a\u5f02\u8702\u548c\u5730\u72f1\u8702\u6742\u4ea4\u624d\u80fd\u57f9\u80b2\u51fa\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIyg==",
                    "title": "\u618e\u6076\u8702",
                    "tooltip": "<strong>\u618e\u6076\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u602a\u5f02\u8702"
                },
                {
                    "name": "\u6811\u8102\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2283.png",
                    "x": 924.0,
                    "y": 60.0,
                    "data": "\u597d\u5427,\u81f3\u5c11\u4f60\u53ef\u4ee5\u4ece\u8fd9\u79cd\u65e0\u804a\u7684\u871c\u8702\u4e2d\u5f97\u5230\u4e00\u4e9b\u7c98\u6027\u6811\u8102.\u7531\u6ce5\u6cde\u8702\u548c\u539f\u59cb\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI6w==",
                    "title": "\u6811\u8102\u8702",
                    "tooltip": "<strong>\u6811\u8102\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u539f\u59cb\u8702</br>\u6ce5\u6cde\u8702"
                },
                {
                    "name": "\u6e90\u8d28\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5534359835533217609.png",
                    "x": 396.0,
                    "y": 300.0,
                    "data": "\u8fd9\u53ea\u871c\u8702\u4e0d\u76f4\u63a5\u751f\u4ea7\u4efb\u4f55\u4e1c\u897f,\u800c\u662f\u727a\u7272\u81ea\u5df1\u7684\u751f\u547d\u6765\u4ea7\u751f\u6db2\u6001\u6e90\u8d28,\u6ee1\u8db3\u60a8\u6240\u6709\u7684\u9b54\u6cd5\u9700\u6c42.\u7136\u800c,\u8981\u505a\u5230\u8fd9\u4e00\u70b9\u3002\u5b83\u9700\u8981\u5728\u5176\u8702\u7bb1\u4e0b\u5b89\u88c5\u4e00\u4e2a\u517b\u8702\u4eba\u7684\u6ca5\u6c34\u5668.</br></br>\u871c\u8702\u751f\u4ea7\u8981\u7d20\u7684\u901f\u5ea6\u53d6\u51b3\u4e8e\u5b83\u7684\u5de5\u4f5c\u901f\u5ea6.\u4f60\u5fc5\u987b\u624b\u6301\u4e00\u4e2a\u88c5\u6ee1\u7684\u8981\u7d20\u5b89\u74ff\u53f3\u51fb\u517b\u8702\u4eba\u7684\u6ca5\u6c34\u5668\u6765\u9501\u5b9a\u8981\u7d20\u7c7b\u578b.</br></br>\u4f60\u53ef\u4ee5\u4ece\u5947\u672f\u8702\u548c\u6734\u5b9e\u8702\u6765\u57f9\u80b2\u5b83\u4eec.</br></br>\u00a73\u4f60\u4e5f\u53ef\u4ee5\u5e73\u94fa\u81f3\u591a\u4e5d\u4e2a\u517b\u8702\u4eba\u7684\u6ca5\u6c34\u5668\u5728\u8702\u7bb1\u7ec4\u65b9\u5757\u4e0b.",
                    "quest_id": "noSgUClGTO6zMgENR9pwtw==",
                    "title": "\u6e90\u8d28\u8702",
                    "tooltip": "<strong>\u6e90\u8d28\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6734\u5b9e\u8702</br>\u5947\u672f\u8702</br>\u8fd8\u6709\u54ea\u91cc\u53ef\u80fd\u51fa\u95ee\u9898\uff1f"
                },
                {
                    "name": "\u6734\u5b9e\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2231.png",
                    "x": 540.0,
                    "y": 60.0,
                    "data": "\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u6df7\u6c8c\u9b54\u6676\u5757\u624d\u80fd\u57f9\u80b2\u51fa\u5b83.\u5b83\u53ef\u4ee5\u751f\u4ea7\u6df7\u6c8c\u4e4b\u5c18,\u7531\u4ee5\u592a\u8702\u548c\u8d85\u80fd\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAItw==",
                    "title": "\u6734\u5b9e\u8702",
                    "tooltip": "<strong>\u6734\u5b9e\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d85\u80fd\u8702</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u8109\u51b2\u5408\u91d1\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2186.png",
                    "x": 492.0,
                    "y": 504.0,
                    "data": "\u7ec8\u4e8e,\u4e34\u8fd1\u5c3e\u58f0.\u8fd9\u662f\u4e00\u6bb5\u957f\u800c\u8270\u9669\u7684\u8def\u9014,\u4f46\u4f60\u73b0\u5728\u80fd\u76f4\u63a5\u901a\u8fc7\u871c\u8702\u4ea7\u7269\u83b7\u5f97\u8109\u51b2\u5408\u91d1\u4e86,\u5e72\u5f97\u6f02\u4eae!\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e00\u4e2a\u8109\u51b2\u5408\u91d1\u5757,\u7531\u5145\u80fd\u5408\u91d1\u8702\u548c\u5e7b\u5f71\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIig==",
                    "title": "\u8109\u51b2\u5408\u91d1\u8702",
                    "tooltip": "<strong>\u8109\u51b2\u5408\u91d1\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5145\u80fd\u5408\u91d1\u8702</br>\u5e7b\u5f71\u8702"
                },
                {
                    "name": "\u5e7d\u7075\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2189.png",
                    "x": 540.0,
                    "y": 456.0,
                    "data": "\u5e7d\u7075\u8702\u9700\u8981\u672b\u5f71\u8702\u624d\u80fd\u57f9\u80b2\u51fa\u6765,\u5373\u4f7f\u6700\u987d\u5f3a\u7684\u517b\u8702\u5458\u4e5f\u5c06\u4f1a\u5907\u53d7\u8003\u9a8c\u2014\u2014\u522b\u5fd8\u4e86\u4f60\u7684\u517b\u8702\u5458\u5957\u88c5. \u60f3\u8981\u8ba9\u8702\u7bb1\u4e2d\u7684\u5e7d\u7075\u8702\u5de5\u4f5c,\u9644\u8fd1\u5fc5\u987b\u6709\u9f99\u86cb.\u4e0d\u8981\u5728\u9644\u8fd1\u4e22\u4e0b\u4efb\u4f55\u9aa8\u5934,\u70c8\u7130\u68d2\u6216\u8150\u8089!\u8fd9\u79cd\u871c\u8702\u53ef\u4ee5\u590d\u6d3b\u5b83\u4eec!\u4e5f\u8bb8\u4f60\u80fd\u627e\u5230\u8fd9\u79cd\u80fd\u529b\u7684\u771f\u6b63\u7528\u9014\u2026\u2026\u7531\u672b\u5f71\u8702\u548c\u9041\u4e16\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIjQ==",
                    "title": "\u5e7d\u7075\u8702",
                    "tooltip": "<strong>\u5e7d\u7075\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9041\u4e16\u8702"
                },
                {
                    "name": "\u9b54\u529b\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2233.png",
                    "x": 492.0,
                    "y": 12.0,
                    "data": "\u9b54\u529b\u8702\u53ef\u4ee5\u57f9\u80b2\u51fa\u67d0\u4e9b\u8fd9\u4e2a\u6574\u5408\u5305\u4e2d\u6700\u5f3a\u5927\u7684\u871c\u8702.\u8fd9\u79cd\u871c\u8702\u9700\u8981\u5728\u8702\u7bb175\u683c\u4e4b\u5185\u6709\u4e00\u4e2a\u7075\u6c14\u8282\u70b9,\u5e76\u786e\u4fdd\u6708\u76f8\u7b26\u5408\u57f9\u80b2\u8981\u6c42.\u7531\u4ee5\u592a\u8702\u548c\u5730\u72f1\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIuQ==",
                    "title": "\u9b54\u529b\u8702",
                    "tooltip": "<strong>\u9b54\u529b\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u602a\u5f02\u8702</br>\u4ee5\u592a\u8702"
                },
                {
                    "name": "\u707c\u70ed\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2226.png",
                    "x": 636.0,
                    "y": 252.0,
                    "data": "\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u706b\u4e4b\u9b54\u6676\u5757\u624d\u80fd\u57f9\u80b2\u51fa\u5b83,\u5b83\u53ef\u4ee5\u751f\u4ea7\u706b\u4e4b\u5c18.\u4f46\u662f\u5c0f\u5fc3\u70b9,\u5b83\u4eec\u4f1a\u70b9\u71c3\u9644\u8fd1\u7684\u5b9e\u4f53!\u7531\u4e24\u4e2a\u706b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIsg==",
                    "title": "\u707c\u70ed\u8702",
                    "tooltip": "<strong>\u707c\u70ed\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u706b\u8702"
                },
                {
                    "name": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1116.png",
                    "x": 60.0,
                    "y": 12.0,
                    "data": "\u5bfb\u5e38\u8702\u548c\u68ee\u6797\u8702\u6742\u4ea4\u53ef\u4ee5\u57f9\u80b2\u51fa\u7530\u91ce\u8702.</br></br>\u7530\u91ce\u8702\u62e5\u6709\u6700\u77ed\u7684\u5bff\u547d,\u8fd9\u610f\u5473\u7740\u5b83\u4eec\u975e\u5e38\u9002\u5408\u7528\u4e8e\u6742\u4ea4\u57f9\u80b2.\u8702\u540e\u4f1a\u5f88\u5feb\u6b7b\u4ea1,\u8fc5\u901f\u63d0\u4f9b\u4f60\u60f3\u8981\u7684\u9057\u4f20\u7269\u8d28,\u4f46\u8981\u786e\u4fdd\u4f60\u80fd\u7559\u4f4f\u4f60\u60f3\u8981\u7684\u5c5e\u6027!</br></br>\u7530\u91ce\u8702\u7684\u751f\u4ea7\u901f\u5ea6\u4e5f\u4e0d\u9519,\u8fd9\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u4ea7\u51fa\u8bb8\u591a\u8702\u7a9d\u6765\u7ed9\u4f60\u7684\u5206\u6790\u4eea\u4f9b\u80fd.</br></br>\u7530\u91ce\u8702\u6bcf0.9\u5206\u949f\u4ea7\u51fa\u4e00\u4e2a\u8702\u7a9d.\u9700\u8981\u6ce8\u610f\u7684\u662f,\u751f\u4ea7\u65f6\u95f4\u662f\u57fa\u4e8e\u871c\u8702\u7684\u57fa\u672c\u751f\u4ea7\u901f\u5ea6\u548c\u4ea7\u54c1\u7a00\u6709\u6027\u7684\u8fd1\u4f3c\u503c,\u5b83\u4eec\u4e0d\u80fd\u76f4\u63a5\u53cd\u6620\u5b9e\u9645\u7684\u751f\u4ea7\u65f6\u95f4.</br></br>\u4f7f\u7528\u871c\u8702\u5206\u6790\u4eea\u6216\u662fGT\u626b\u63cf\u6765\u786e\u4fdd\u4f60\u57f9\u80b2\u51fa\u7684\u871c\u8702\u662f\u7eaf\u79cd\u7684.</br></br>\u871c\u8702\u57f9\u80b2\u7684\u4e3b\u7ebf\u4efb\u52a1\u90fd\u9700\u8981\u7eaf\u79cd\u871c\u8702\u6765\u63d0\u4ea4,\u4e0d\u8fc7\u5351\u8d31\u79cd\u548c\u59cb\u7956\u79cd\u5c31\u65e0\u6240\u8c13\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEXA==",
                    "title": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "tooltip": "<strong>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702"
                },
                {
                    "name": "\u9565\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/361.png",
                    "x": 348.0,
                    "y": 600.0,
                    "data": "\u5728ZPM\u9636\u6bb5,\u9565\u6781\u5176\u6709\u7528.\u4f60\u4f1a\u9700\u8981\u5f88\u591a\u9565,\u871c\u8702\u53ef\u4ee5\u5e2e\u5230\u4f60\u7684\u5fd9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABaQ==",
                    "title": "\u9565\u8702",
                    "tooltip": "<strong>\u9565\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u948d\u8702</br>\u8870\u8d25\u8702"
                },
                {
                    "name": "\u672b\u5f71\u788e\u7247",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3297.png",
                    "x": 660.0,
                    "y": 552.0,
                    "data": "\u5bf9\u4f60\u7684\u7075\u6db2\u751f\u4ea7\u81f3\u5173\u91cd\u8981.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAM4Q==",
                    "title": "\u672b\u5f71\u788e\u7247",
                    "tooltip": "<strong>\u672b\u5f71\u788e\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0b\u754c\u788e\u7247\u8702</br>\u672b\u5f71\u7c89\u672b\u8702"
                },
                {
                    "name": "Energium",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9173649568252084802.png",
                    "x": 1116.0,
                    "y": 252.0,
                    "data": "Are you tired of making Energium Dust by mixing Ruby and Redstone Dust? This bee offers a way to acquire it directly - how convenient is that? To breed it, you'll need to place some Hot Coolant below the hive while inside a Boneyard found in the Nether.\n\nUnlike its parents, this bee won't burn down your base\u2014but it will set you on fire if you're not wearing your apiarist suit!",
                    "quest_id": "B0XRo_S1RveAsKZSXms9vg==",
                    "title": "Energium",
                    "tooltip": "<strong>Energium</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6076\u9b54\u8702</br>Volcanic"
                },
                {
                    "name": "\u6ce5\u6cde\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2284.png",
                    "x": 924.0,
                    "y": 12.0,
                    "data": "\u6ce5\u6cde\u8702\u6682\u65f6\u6ca1\u5565\u7528,\u4f46\u5b83\u662f\u6cbc\u6cfd\u7cfb\u5217\u871c\u8702\u7684\u8d77\u70b9.\u4f60\u9700\u8981\u627e\u5230\u4e00\u4e2a\u6e29\u6696/\u6f6e\u6e7f\u7684\u751f\u7269\u7fa4\u7cfb\u6765\u57f9\u80b2\u5b83\u4eec.\u5584\u7528\u4f60\u7684\u751f\u7269\u7fa4\u7cfb\u6307\u5357\u9488(\u670d\u52a1\u5668\u614e\u7528)\u548c\u6816\u606f\u5730\u5b9a\u4f4d\u4eea,\u5176\u4e2d\u96e8\u6797\u7fa4\u7cfb\u662f\u6700\u5bb9\u6613\u627e\u5230\u7684\u4e00\u79cd.\u7531\u6cbc\u6cfd\u8702\u548c\u9ad8\u5c1a\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.</br></br>\u8bd1\u8005\u6ce8\uff1a\u522b\u4fe1\u4ed6\u7684,\u7531\u4e8e\u66f4\u591a\u751f\u7269\u7fa4\u7cfb\u6a21\u7ec4,\u96e8\u6797\u7fa4\u7cfb\u4e00\u70b9\u90fd\u4e0d\u597d\u627e\u2026\u2026",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI7A==",
                    "title": "\u6ce5\u6cde\u8702",
                    "tooltip": "<strong>\u6ce5\u6cde\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702"
                },
                {
                    "name": "\u542b\u6cb9\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2279.png",
                    "x": 876.0,
                    "y": 108.0,
                    "data": "\u6700\u540e\u4e00\u6b65,\u542b\u6cb9\u8702!\u5b83\u7684\u8702\u7a9d\u53ef\u4ee5\u4ea7\u51fa\u6700\u591a\u7684\u77f3\u6cb9,\u4f46\u4ea7\u51fa\u6548\u7387\u2026\u2026\u4e0d\u90a3\u4e48\u5c3d\u5982\u4eba\u610f.\u7531\u6d77\u6d0b\u8702\u548c\u539f\u59cb\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.\u4ee5\u9632\u4e07\u4e00\u4f60\u6ca1\u627e\u5230\u6d77\u6d0b\u751f\u7269\u7fa4\u7cfb\u6216\u7528\u5149\u4e86\u4f60\u7684\u517b\u8702\u5458\u5e01,\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6742\u4ea4\u539f\u59cb\u8702\u548c\u8282\u4fed\u8702\u83b7\u5f97\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI5w==",
                    "title": "\u542b\u6cb9\u8702",
                    "tooltip": "<strong>\u542b\u6cb9\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u539f\u59cb\u8702</br>\u6d77\u6d0b\u8702"
                },
                {
                    "name": "\u9521\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2192.png",
                    "x": 252.0,
                    "y": 120.0,
                    "data": "\u9521\u8702\u53ef\u4ee5\u5f88\u65e9\u5c31\u57f9\u80b2\u51fa\u6765,\u8282\u7701\u4f60\u5bfb\u627e\u9521\u77f3\u77ff\u7802\u7684\u65f6\u95f4.\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u9521\u5757.\u7531\u7c98\u571f\u8702\u548c\u52e4\u594b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIkA==",
                    "title": "\u9521\u8702",
                    "tooltip": "<strong>\u9521\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c98\u571f\u8702</br>\u52e4\u594b\u8702"
                },
                {
                    "name": "\u84dd\u8272\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2273.png",
                    "x": 1068.0,
                    "y": 12.0,
                    "data": "\u84dd\u8272\u8702\u662f\u84dd\u8272\u67d3\u6599\u7684\u65b9\u4fbf\u6765\u6e90.\u7531\u68ee\u6797\u8702\u548c\u52e4\u594b\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI4Q==",
                    "title": "\u84dd\u8272\u8702",
                    "tooltip": "<strong>\u84dd\u8272\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52e4\u594b\u8702"
                },
                {
                    "name": "\u8870\u8d25\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/359.png",
                    "x": 396.0,
                    "y": 600.0,
                    "data": "\u8870\u8d25\u8702\u5e76\u4e0d\u6bd4\u524d\u4e09\u79cd\u871c\u8702\u66f4\u6709\u7528.\u4e0d\u8fc7\u53ef\u4ee5\u80af\u5b9a\u7684\u662f,\u6211\u4eec\u79bb\u9565\u8702\u4e0d\u8fdc\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABZw==",
                    "title": "\u8870\u8d25\u8702",
                    "tooltip": "<strong>\u8870\u8d25\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8352\u51c9\u8702"
                },
                {
                    "name": "\u4f0a\u7538\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2236.png",
                    "x": 684.0,
                    "y": 204.0,
                    "data": "\u4f0a\u7538\u8702\u7684\u6548\u679c\u4e0d\u53ef\u601d\u8bae,\u80fd\u4e3a\u9644\u8fd1\u73a9\u5bb6\u63d0\u4f9b\u7ecf\u9a8c\u503c.\u7531\u5f02\u56fd\u8702\u548c\u70ed\u5e26\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIvA==",
                    "title": "\u4f0a\u7538\u8702",
                    "tooltip": "<strong>\u4f0a\u7538\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f02\u56fd\u8702"
                },
                {
                    "name": "\u94df\u8702",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/390.png",
                    "x": 756.0,
                    "y": 468.0,
                    "data": "\u4e0d\u80fd\u4f7f\u7528\u8bf1\u53d8\u673a,\u5fc5\u987b\u524d\u5f80\u91d1\u661f.\u4e0d\u8fc7\u4f60\u4e00\u65e6\u62e5\u6709\u4e86\u8fd9\u79cd\u871c\u8702,\u90a3\u53ef\u592a\u9999\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABhg==",
                    "title": "\u94df\u8702",
                    "tooltip": "<strong>\u94df\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c5\u8702</br>\u9507\u8702"
                },
                {
                    "name": "\u672b\u5f71\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/354.png",
                    "x": 492.0,
                    "y": 552.0,
                    "data": "\u4e00\u53ea\u672b\u5f71\u8702.\u6700\u6709\u8da3\u7684\u662f\u5b83\u90a3\u51e0\u4e4e\u95ea\u778e\u773c\u7684\u5de5\u4f5c\u901f\u5ea6!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABYg==",
                    "title": "\u672b\u5f71\u8702",
                    "tooltip": "<strong>\u672b\u5f71\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c2\u8702</br>\u5e7b\u5f71\u8702"
                },
                {
                    "name": "\u4e5d\u5934\u86c71",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/367.png",
                    "x": 828.0,
                    "y": 204.0,
                    "data": "\u5728\u66ae\u8272\u68ee\u6797\u4e2d\u53ec\u5524\u4e5d\u5934\u86c7!</br></br>\u00a73\u4e5f\u53ea\u6709\u5728\u66ae\u8272\u68ee\u6797\u7ef4\u5ea6\u624d\u80fd\u53ec\u5524\u6210\u529f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABbw==",
                    "title": "\u4e5d\u5934\u86c7",
                    "tooltip": "<strong>\u4e5d\u5934\u86c71</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u707c\u70ed\u8702</br>\u5deb\u5996\u8702"
                },
                {
                    "name": "\u9b45\u60d1\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2216.png",
                    "x": 444.0,
                    "y": 60.0,
                    "data": "\u4e09\u4e4b\u529b!\u9b45\u60d1\u8702\u662f\u4f60\u795e\u79d8\u7c7b\u871c\u8702\u57f9\u80b2\u7ebf\u7684\u4e0b\u4e00\u6b65,\u7531\u602a\u5f02\u8702\u548c\u7530\u91ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.</br></br>\u8bd1\u8005\u6ce8:\"\u4e09\u4e4b\u529b\"(The-power-of-three)\u662f\u7cfb\u5217\u5267\u300a\u5723\u5973\u9b54\u5492\u300b(Charmed,\u4e0e\u6e38\u620f\u4e2d\u7684\"\u9b45\u60d1\u8702\"\u540c\u540d)\u4e2d\u4e00\u79cd\u5f3a\u5927\u7684\u9b54\u6cd5,\u901a\u8fc7\u4e09\u59d0\u59b9\u7684\u7ed3\u5408\u53d1\u6325\u5de8\u5927\u7684\u529b\u91cf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIqA==",
                    "title": "\u9b45\u60d1\u8702",
                    "tooltip": "<strong>\u9b45\u60d1\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u602a\u5f02\u8702</br>\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702"
                },
                {
                    "name": "\u66ae\u8272\u6076\u9b421",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/368.png",
                    "x": 828.0,
                    "y": 252.0,
                    "data": "\u4ec0\u4e48,\u4f60\u9700\u8981\u5f88\u591a\u9b54\u6cd5\u6728\u5934?\u597d\u5427,\u8fd9\u79cd\u871c\u8702\u53ef\u4ee5\u751f\u4ea7\u7837\u94c5\u94c1\u77ff\u77f3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABcA==",
                    "title": "\u66ae\u8272\u6076\u9b42",
                    "tooltip": "<strong>\u66ae\u8272\u6076\u9b421</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u79d8\u5c18\u8702</br>\u4e5d\u5934\u86c71"
                },
                {
                    "name": "\u7a3c\u7a51\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2288.png",
                    "x": 396.0,
                    "y": 396.0,
                    "data": "\u50cf\u5927\u591a\u6570\u519c\u592b\u4e00\u6837,\u8fd9\u4e9b\u871c\u8702\u597d\u50cf\u628a\u6240\u6709\u65f6\u95f4\u90fd\u82b1\u5728\u62b1\u6028\u90bb\u5c45\u6216\u5929\u6c14,\u800c\u4e0d\u662f\u505a\u4e9b\u5b9e\u9645\u7684\u4e8b.\u4f60\u5f97\u5728\u5e73\u539f\u7c7b\u7684\u751f\u7269\u7fa4\u7cfb\u624d\u80fd\u57f9\u80b2\u51fa\u5b83.\u7531\u4e0d\u5026\u8702\u548c\u7530\u56ed\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI8A==",
                    "title": "\u7a3c\u7a51\u8702",
                    "tooltip": "<strong>\u7a3c\u7a51\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7530\u56ed\u8702</br>\u4e0d\u5026\u8702"
                },
                {
                    "name": "\u9530\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/351.png",
                    "x": 108.0,
                    "y": 552.0,
                    "data": "\u4e00\u53ea\u9530\u8702.\u4e0d\u662f\u5f88\u6709\u7528,\u4f46\u662f\u79bb\u4e00\u4e9b\u66f4\u6709\u8da3\u7684\u871c\u8702\u53c8\u8fd1\u4e86\u4e00\u6b65.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABXw==",
                    "title": "\u9530\u8702",
                    "tooltip": "<strong>\u9530\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94dd\u8702</br>\u949b\u8702"
                },
                {
                    "name": "\u7206\u70b8",
                    "symbolSize": 74,
                    "symbol": "image://version/272/quests_icons/QuestIcon/804.png",
                    "x": 828.0,
                    "y": 468.0,
                    "data": "\u662f\u4f60\u7684\u805a\u7206\u538b\u7f29\u673a\u7684\u7406\u60f3\u9009\u62e9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADJA==",
                    "title": "\u7206\u70b8",
                    "tooltip": "<strong>\u7206\u70b8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7164\u8702</br>\u706b\u77f3"
                },
                {
                    "name": "\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1121.png",
                    "x": 204.0,
                    "y": 60.0,
                    "data": "\u6742\u4ea4\u9ad8\u5c1a\u8702\u548c\u5e84\u4e25\u8702\u53ef\u4ee5\u5f97\u5230\u5e1d\u7687\u8702,\u8fd9\u4e9b\u871c\u8702\u5728\u5b83\u4eec\u7684\u6d3b\u52a8\u8303\u56f4\u91cc\u53ef\u4ee5\u63d0\u4f9b\u751f\u547d\u6062\u590d\u6548\u679c.\u5f53\u4f60\u9047\u5230\u4e00\u4e9b\u2026\u2026\u610f\u5916\u60c5\u51b5\u65f6,\u4f60\u53ef\u80fd\u4f1a\u7528\u5f97\u4e0a\u5b83\u4eec.\u5e1d\u7687\u8702\u6bcf3.8\u5206\u949f\u4ea7\u51fa\u4e00\u6b21\u6ef4\u6c34\u8702\u7a9d,\u6bcf5.1\u5206\u949f\u4ea7\u51fa\u4e00\u6b21\u8702\u738b\u6d46.\u6ce8\u610f,\u751f\u4ea7\u65f6\u95f4\u662f\u57fa\u4e8e\u871c\u8702\u7684\u57fa\u672c\u751f\u4ea7\u901f\u5ea6\u548c\u4ea7\u54c1\u7a00\u6709\u6027\u7684\u8fd1\u4f3c\u503c,\u5b83\u4eec\u4e0d\u80fd\u53cd\u6620\u5b9e\u9645\u7684\u751f\u4ea7\u65f6\u95f4.\u8702\u738b\u6d46\u662f\u5236\u4f5c\u98d8\u9999\u9576\u677f\u7684\u539f\u6750\u6599,\u540e\u8005\u7528\u4e8e\u5236\u4f5c\u8702\u7bb1\u7ec4(\u7b2c\u4e09\u9636\u7684\u8702\u7bb1).\u4f60\u73b0\u5728\u53ef\u4ee5\u5f00\u59cb\u5b8c\u6210\"\u4eba\u6765\u75af(\u8702)\"\u4efb\u52a1\u680f\u4e2d\u7684\u4e3b\u8981\u4efb\u52a1\"\u5168\u56fe\u9274\"\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEYQ==",
                    "title": "\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702",
                    "tooltip": "<strong>\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57f9\u80b2\u4e00\u4e9b\u5e84\u4e25\u8702"
                },
                {
                    "name": "\u9507\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/391.png",
                    "x": 756.0,
                    "y": 396.0,
                    "data": "\u8fd9\u79cd\u871c\u8702\u76f8\u5f53\u6709\u610f\u601d.\u8bf4\u4e0d\u5b9a\u53ef\u4ee5\u628a\u5b83\u6574\u5408\u8fdb\u4f60\u7684\u9507\u5904\u7406\u7ebf\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABhw==",
                    "title": "\u9507\u8702",
                    "tooltip": "<strong>\u9507\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94a8\u8702</br>\u94c2\u8702"
                },
                {
                    "name": "\u6ce5\u70ad\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2169.png",
                    "x": 204.0,
                    "y": 168.0,
                    "data": "\u8fd9\u4e9b\u871c\u8702\u751f\u4ea7\u7684\u6ce5\u70ad\u53ef\u7528\u4e8e\u7194\u7089\u6216\u9505\u7089.\u514d\u8d39\u7684\u71c3\u6599,\u5bf9\u5427?\u7531\u7530\u56ed\u8702\u548c\u7c98\u571f\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIeQ==",
                    "title": "\u6ce5\u70ad\u8702",
                    "tooltip": "<strong>\u6ce5\u70ad\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c98\u571f\u8702</br>\u7530\u56ed\u8702"
                },
                {
                    "name": "\u706b\u8760\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2274.png",
                    "x": 492.0,
                    "y": 348.0,
                    "data": "\u706b\u8760\u8702\u4f1a\u751f\u6210\u4e5d\u72f1\u7131\u8760,\u6240\u4ee5\u51c6\u5907\u6218\u6597\u5427.\u5b83\u4eec\u7684\u7279\u4ea7\u662f\u706b\u836f,\u7531\u8be1\u9690\u8702\u548c\u98ce\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI4g==",
                    "title": "\u706b\u8760\u8702",
                    "tooltip": "<strong>\u706b\u8760\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u98ce\u8702</br>\u8be1\u9690\u8702"
                },
                {
                    "name": "\u94a2\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/370.png",
                    "x": 636.0,
                    "y": 396.0,
                    "data": "\u5b83\u4ea7\u51fa\u7684\u94a2\u4e0d\u591a,\u4f46\u81f3\u5c11\u4e0d\u4f1a\u9020\u6210\u6c61\u67d3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABcg==",
                    "title": "\u94a2\u8702",
                    "tooltip": "<strong>\u94a2\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c1\u8702</br>\u7164\u8702"
                },
                {
                    "name": "\u6ce5\u571f\u8702",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2225.png",
                    "x": 636.0,
                    "y": 108.0,
                    "data": "\u4f60\u9700\u8981\u5728\u8702\u7bb1\u4e0b\u65b9\u653e\u4e2a\u5730\u4e4b\u9b54\u6676\u624d\u80fd\u57f9\u80b2\u51fa\u5b83.\u5b83\u53ef\u4ee5\u751f\u4ea7\u5730\u4e4b\u5c18.\u5b83\u8fd8\u53ef\u4ee5\u63d0\u5347\u4f60\u7684\u6316\u6398\u901f\u5ea6.\u7531\u4e24\u4e2a\u571f\u8702\u6742\u4ea4\u57f9\u80b2\u800c\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIsQ==",
                    "title": "\u6ce5\u571f\u8702",
                    "tooltip": "<strong>\u6ce5\u571f\u8702</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u571f\u8702"
                },
                {
                    "name": "\u706b\u77f3",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/777.png",
                    "x": 828.0,
                    "y": 396.0,
                    "data": "\u4e0d\u8981\u70eb\u5230\u81ea\u5df1\u4e86.</br></br>[note]\u5982\u679c\u4f60\u613f\u610f\u7684\u8bdd,\u4e5f\u53ef\u4ee5\u4ece\u786b\u8702\u90a3\u91cc\u83b7\u5f97\u706b\u77f3.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADCQ==",
                    "title": "\u706b\u77f3",
                    "tooltip": "<strong>\u706b\u77f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ea2\u77f3\u8702</br>\u7ea2\u5b9d\u77f3\u8702"
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
                    "source": "\u7ea2\u8272\u8702",
                    "target": "\u7c89\u8272\u8702"
                },
                {
                    "source": "\u767d\u8272\u8702",
                    "target": "\u7c89\u8272\u8702"
                },
                {
                    "source": "\u8282\u4fed\u8702",
                    "target": "\u82e6\u884c\u8702"
                },
                {
                    "source": "\u656c\u4e1a\u8702",
                    "target": "\u7164\u8702"
                },
                {
                    "source": "\u6ce5\u70ad\u8702",
                    "target": "\u7164\u8702"
                },
                {
                    "source": "\u7c98\u571f\u8702",
                    "target": "\u7c98\u6db2\u7403\u8702"
                },
                {
                    "source": "\u5965\u79d8\u8702",
                    "target": "\u5965\u80fd\u8702"
                },
                {
                    "source": "\u7384\u5965\u8702",
                    "target": "\u5965\u80fd\u8702"
                },
                {
                    "source": "\u5e7d\u9b42\u8702",
                    "target": "\u95f7\u70e7\u8702"
                },
                {
                    "source": "\u618e\u6076\u8702",
                    "target": "\u95f7\u70e7\u8702"
                },
                {
                    "source": "\u9521\u8702",
                    "target": "\u950c\u8702"
                },
                {
                    "source": "\u94c1\u8702",
                    "target": "\u950c\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "target": "\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702"
                },
                {
                    "source": "\u5965\u80fd\u8702",
                    "target": "\u4ee5\u592a\u8702"
                },
                {
                    "source": "\u8d85\u80fd\u8702",
                    "target": "\u4ee5\u592a\u8702"
                },
                {
                    "source": "\u706b\u8760\u8702",
                    "target": "\u4e09\u660e\u6cbb\u8702"
                },
                {
                    "source": "\u519c\u8015\u8702",
                    "target": "\u4e09\u660e\u6cbb\u8702"
                },
                {
                    "source": "\u5965\u80fd\u8702",
                    "target": "\u5947\u672f\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u5947\u672f\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "target": "\u602a\u5f02\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u7ea2\u8272\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702",
                    "target": "\u6d77\u6d0b\u8702"
                },
                {
                    "source": "\u9b54\u529b\u8702",
                    "target": "\u5145\u80fd\u8702"
                },
                {
                    "source": "\u590d\u5174\u8702",
                    "target": "\u5145\u80fd\u8702"
                },
                {
                    "source": "\u8d85\u80fd\u8702",
                    "target": "\u4e0b\u754c\u788e\u7247\u8702"
                },
                {
                    "source": "\u98ce\u8702",
                    "target": "\u4e0b\u754c\u788e\u7247\u8702"
                },
                {
                    "source": "\u8d85\u80fd\u8702",
                    "target": "\u571f\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u571f\u8702"
                },
                {
                    "source": "\u98ce\u8702",
                    "target": "\u7075\u6c14\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "target": "\u6fc0\u52a8\u8702"
                },
                {
                    "source": "\u8d85\u80fd\u8702",
                    "target": "\u6c34\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u6c34\u8702"
                },
                {
                    "source": "\u8bb0\u6068\u8702",
                    "target": "\u62a5\u4ec7\u8702"
                },
                {
                    "source": "\u50e7\u4fa3\u87021",
                    "target": "\u62a5\u4ec7\u8702"
                },
                {
                    "source": "\u82e6\u884c\u8702",
                    "target": "\u5f52\u9690\u8702"
                },
                {
                    "source": "\u50e7\u4fa3\u87021",
                    "target": "\u5f52\u9690\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "target": "\u90aa\u6076\u8702"
                },
                {
                    "source": "\u9565\u8702",
                    "target": "\u9545\u8702"
                },
                {
                    "source": "\u94ec\u8702",
                    "target": "\u9545\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u751c\u7f8e\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5e84\u4e25\u8702",
                    "target": "\u94dc\u8702"
                },
                {
                    "source": "\u7c98\u571f\u8702",
                    "target": "\u94dc\u8702"
                },
                {
                    "source": "\u6b8b\u5fcd\u8702",
                    "target": "Furious"
                },
                {
                    "source": "\u8d85\u80fd\u8702",
                    "target": "\u98ce\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u98ce\u8702"
                },
                {
                    "source": "\u66ae\u8272\u6076\u9b421",
                    "target": "\u51b0\u96ea\u5973\u738b\u8702"
                },
                {
                    "source": "\u4e16\u754c\u76d0\u8702",
                    "target": "\u51b0\u96ea\u5973\u738b\u8702"
                },
                {
                    "source": "\u7164\u8702",
                    "target": "\u94bb\u77f3\u8702"
                },
                {
                    "source": "\u8d5b\u7279\u65af\u8702",
                    "target": "\u94bb\u77f3\u8702"
                },
                {
                    "source": "\u6d41\u6c34\u8702",
                    "target": "\u795e\u79d8\u788e\u7247\u8702"
                },
                {
                    "source": "\u795e\u79d8\u5c18\u8702",
                    "target": "\u795e\u79d8\u788e\u7247\u8702"
                },
                {
                    "source": "\u871c\u8702\u57f9\u80b2\"\u667a\u8005\"\u624b\u518c",
                    "target": "\u57fa\u7840\u871c\u8702\u7edf\u8ba1"
                },
                {
                    "source": "\u7ea2\u77f3\u8702",
                    "target": "Glowstone"
                },
                {
                    "source": "Gold",
                    "target": "Glowstone"
                },
                {
                    "source": "\u795e\u79d8\u788e\u7247\u8702",
                    "target": "\u4e16\u754c\u76d0\u8702"
                },
                {
                    "source": "\u795e\u79d8\u5c18\u8702",
                    "target": "\u4e16\u754c\u76d0\u8702"
                },
                {
                    "source": "\u656c\u4e1a\u8702",
                    "target": "\u7c98\u571f\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u7c98\u571f\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "target": "\u52e4\u594b\u8702"
                },
                {
                    "source": "\u9752\u91d1\u77f3\u8702",
                    "target": "\u8d5b\u7279\u65af\u8702"
                },
                {
                    "source": "\u9041\u4e16\u8702",
                    "target": "\u8d5b\u7279\u65af\u8702"
                },
                {
                    "source": "\u94dc\u8702",
                    "target": "Gold"
                },
                {
                    "source": "\u94c5\u8702",
                    "target": "Gold"
                },
                {
                    "source": "\u6c34\u8702",
                    "target": "\u6d41\u6c34\u8702"
                },
                {
                    "source": "\u94a8\u8702",
                    "target": "\u94f1\u8702"
                },
                {
                    "source": "\u94c2\u8702",
                    "target": "\u94f1\u8702"
                },
                {
                    "source": "\u6a44\u6984\u77f3\u8702",
                    "target": "\u7eff\u5b9d\u77f3\u8702"
                },
                {
                    "source": "\u94bb\u77f3\u8702",
                    "target": "\u7eff\u5b9d\u77f3\u8702"
                },
                {
                    "source": "\u9545\u8702",
                    "target": "\u4e2d\u5b50\u8702"
                },
                {
                    "source": "\u8d85\u80fd\u7845\u5ca9\u8702",
                    "target": "\u4e2d\u5b50\u8702"
                },
                {
                    "source": "\u5206\u998f\u8702",
                    "target": "\u6a61\u80f6\u8702"
                },
                {
                    "source": "\u6811\u8102\u8702",
                    "target": "\u6a61\u80f6\u8702"
                },
                {
                    "source": "\u94f1\u8702",
                    "target": "\u8d85\u80fd\u7845\u5ca9\u8702"
                },
                {
                    "source": "\u949a\u8702",
                    "target": "\u8d85\u80fd\u7845\u5ca9\u8702"
                },
                {
                    "source": "\u8be1\u9690\u8702",
                    "target": "\u8718\u86db\u8702"
                },
                {
                    "source": "\u950c\u8702",
                    "target": "\u7837\u8702"
                },
                {
                    "source": "\u94f6\u8702",
                    "target": "\u7837\u8702"
                },
                {
                    "source": "\u78f7\u7070\u77f3\u8702",
                    "target": "\u80a5\u6599\u8702"
                },
                {
                    "source": "\u7070\u70ec\u8702",
                    "target": "\u80a5\u6599\u8702"
                },
                {
                    "source": "\u4e2d\u5b50\u8702",
                    "target": "\u9f99\u8840\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u7530\u56ed\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u751f\u957f\u8702"
                },
                {
                    "source": "\u7ea2\u8272\u5408\u91d1\u8702",
                    "target": "\u7ea2\u77f3\u5408\u91d1\u8702"
                },
                {
                    "source": "\u7ea2\u77f3\u8702",
                    "target": "\u7ea2\u77f3\u5408\u91d1\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u767d\u8272\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u656c\u4e1a\u8702"
                },
                {
                    "source": "\u4e0d\u5026\u8702",
                    "target": "\u656c\u4e1a\u8702"
                },
                {
                    "source": "\u8d85\u80fd\u8702",
                    "target": "\u706b\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u706b\u8702"
                },
                {
                    "source": "\u611f\u77e5\u8702",
                    "target": "\u7cbe\u795e\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u7cbe\u795e\u8702"
                },
                {
                    "source": "\u82e6\u884c\u8702",
                    "target": "\u5f02\u56fd\u8702"
                },
                {
                    "source": "\u9521\u8702",
                    "target": "\u94f6\u8702"
                },
                {
                    "source": "\u94c5\u8702",
                    "target": "\u94f6\u8702"
                },
                {
                    "source": "\u7c98\u571f\u8702",
                    "target": "\u7070\u70ec\u8702"
                },
                {
                    "source": "\u7164\u8702",
                    "target": "\u7070\u70ec\u8702"
                },
                {
                    "source": "\u602a\u5f02\u8702",
                    "target": "\u8574\u9b54\u8702"
                },
                {
                    "source": "\u9b45\u60d1\u8702",
                    "target": "\u8574\u9b54\u8702"
                },
                {
                    "source": "\u7070\u70ec\u8702",
                    "target": "\u78f7\u7070\u77f3\u8702"
                },
                {
                    "source": "\u7164\u8702",
                    "target": "\u78f7\u7070\u77f3\u8702"
                },
                {
                    "source": "\u7a3c\u7a51\u8702",
                    "target": "\u519c\u8015\u8702"
                },
                {
                    "source": "\u656c\u4e1a\u8702",
                    "target": "\u519c\u8015\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702",
                    "target": "\u82f1\u96c4\u8702"
                },
                {
                    "source": "\u6076\u9f99\u8702",
                    "target": "\u51cb\u7075\u8702"
                },
                {
                    "source": "\u51cb\u96f6\u8702",
                    "target": "\u51cb\u7075\u8702"
                },
                {
                    "source": "\u5f52\u9690\u8702",
                    "target": "\u9041\u4e16\u8702"
                },
                {
                    "source": "\u50e7\u4fa3\u87021",
                    "target": "\u9041\u4e16\u8702"
                },
                {
                    "source": "\u795e\u79d8\u788e\u7247\u8702",
                    "target": "\u9b54\u6676\u8702"
                },
                {
                    "source": "\u7845\u5ca9\u8702",
                    "target": "\u9b54\u6676\u8702"
                },
                {
                    "source": "\u602a\u5f02\u8702",
                    "target": "\u8be1\u9690\u8702"
                },
                {
                    "source": "\u7ea2\u77f3\u8702",
                    "target": "\u798f\u9c81\u4f0a\u514b\u65af\u8702"
                },
                {
                    "source": "\u9752\u91d1\u77f3\u8702",
                    "target": "\u798f\u9c81\u4f0a\u514b\u65af\u8702"
                },
                {
                    "source": "\u82e6\u884c\u8702",
                    "target": "\u666e\u5929\u540c\u5e86\u8702"
                },
                {
                    "source": "\u6fc0\u52a8\u8702",
                    "target": "\u666e\u5929\u540c\u5e86\u8702"
                },
                {
                    "source": "\u6076\u9b54\u8702",
                    "target": "\u9752\u91d1\u77f3\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702",
                    "target": "\u9752\u91d1\u77f3\u8702"
                },
                {
                    "source": "\u7eff\u5b9d\u77f3\u8702",
                    "target": "\u949a\u8702"
                },
                {
                    "source": "\u94c0\u8702",
                    "target": "\u949a\u8702"
                },
                {
                    "source": "\u602a\u5f02\u8702",
                    "target": "\u5965\u79d8\u8702"
                },
                {
                    "source": "\u7384\u5965\u8702",
                    "target": "\u5965\u79d8\u8702"
                },
                {
                    "source": "\u82f1\u96c4\u8702",
                    "target": "\u5b87\u5b99\u8702"
                },
                {
                    "source": "\u65e0\u540d\u8702",
                    "target": "\u9057\u5fd8\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u53e4\u4ee3\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702",
                    "target": "\u53e4\u4ee3\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702",
                    "target": "\u8702\u738b\u6d46"
                },
                {
                    "source": "\u8d85\u80fd\u8702",
                    "target": "\u5deb\u5996\u8702"
                },
                {
                    "source": "\u5a1c\u8fe61",
                    "target": "\u5deb\u5996\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "target": "\u4e0d\u5026\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u4e0d\u5026\u8702"
                },
                {
                    "source": "\u611f\u77e5\u8702",
                    "target": "\u9b42\u9b44\u8702"
                },
                {
                    "source": "\u7cbe\u795e\u8702",
                    "target": "\u9b42\u9b44\u8702"
                },
                {
                    "source": "Energium",
                    "target": "Lapotron"
                },
                {
                    "source": "\u9752\u91d1\u77f3\u8702",
                    "target": "Lapotron"
                },
                {
                    "source": "\u90aa\u6076\u8702",
                    "target": "\u6076\u9b54\u8702"
                },
                {
                    "source": "\u6b8b\u5fcd\u8702",
                    "target": "\u6076\u9b54\u8702"
                },
                {
                    "source": "\u84dd\u8272\u8702",
                    "target": "\u54c1\u7ea2\u8272\u8702"
                },
                {
                    "source": "\u7c89\u8272\u8702",
                    "target": "\u54c1\u7ea2\u8272\u8702"
                },
                {
                    "source": "\u7ea2\u77f3\u8702",
                    "target": "\u7ea2\u5b9d\u77f3\u8702"
                },
                {
                    "source": "\u94bb\u77f3\u8702",
                    "target": "\u7ea2\u5b9d\u77f3\u8702"
                },
                {
                    "source": "\u706b\u8760\u8702",
                    "target": "\u5e7d\u9b42\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u5e7d\u9b42\u8702"
                },
                {
                    "source": "\u94dc\u8702",
                    "target": "\u94c5\u8702"
                },
                {
                    "source": "\u7164\u8702",
                    "target": "\u94c5\u8702"
                },
                {
                    "source": "\u7c98\u6027\u6811\u8102\u8702",
                    "target": "\u77f3\u6cb9\u8702"
                },
                {
                    "source": "\u7164\u8702",
                    "target": "\u77f3\u6cb9\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u611f\u77e5\u8702"
                },
                {
                    "source": "\u94f1\u8702",
                    "target": "\u7845\u5ca9\u8702"
                },
                {
                    "source": "\u949a\u8702",
                    "target": "\u7845\u5ca9\u8702"
                },
                {
                    "source": "\u5206\u998f\u8702",
                    "target": "\u7cbe\u70bc\u8702"
                },
                {
                    "source": "\u542b\u6cb9\u8702",
                    "target": "\u7cbe\u70bc\u8702"
                },
                {
                    "source": "\u8d5b\u7279\u65af\u8702",
                    "target": "\u6a44\u6984\u77f3\u8702"
                },
                {
                    "source": "\u9521\u8702",
                    "target": "\u94c1\u8702"
                },
                {
                    "source": "\u94dc\u8702",
                    "target": "\u94c1\u8702"
                },
                {
                    "source": "Energium",
                    "target": "Pyrotheum"
                },
                {
                    "source": "\u7ea2\u77f3\u8702",
                    "target": "Pyrotheum"
                },
                {
                    "source": "\u618e\u6076\u8702",
                    "target": "\u6076\u610f\u8702"
                },
                {
                    "source": "\u90aa\u6076\u8702",
                    "target": "\u8282\u4fed\u8702"
                },
                {
                    "source": "\u6b8b\u5fcd\u8702",
                    "target": "\u8282\u4fed\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702",
                    "target": "\u6ef4\u6c34\u8702\u7a9d"
                },
                {
                    "source": "\u94a2\u8702",
                    "target": "\u4e0d\u9508\u94a2\u8702"
                },
                {
                    "source": "\u94ec\u8702",
                    "target": "\u4e0d\u9508\u94a2\u8702"
                },
                {
                    "source": "\u7c98\u6db2\u7403\u8702",
                    "target": "\u7c98\u6027\u6811\u8102\u8702"
                },
                {
                    "source": "\u6ce5\u70ad\u8702",
                    "target": "\u7c98\u6027\u6811\u8102\u8702"
                },
                {
                    "source": "\u94dc\u8702",
                    "target": "\u7ea2\u8272\u5408\u91d1\u8702"
                },
                {
                    "source": "\u7ea2\u77f3\u8702",
                    "target": "\u7ea2\u8272\u5408\u91d1\u8702"
                },
                {
                    "source": "\u90aa\u6076\u8702",
                    "target": "\u6b8b\u5fcd\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "target": "\u6b8b\u5fcd\u8702"
                },
                {
                    "source": "\u8d2b\u7620\u8702",
                    "target": "\u8352\u51c9\u8702"
                },
                {
                    "source": "\u5e72\u65f1\u8702",
                    "target": "\u8352\u51c9\u8702"
                },
                {
                    "source": "\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5",
                    "target": "\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702"
                },
                {
                    "source": "\u94ec\u8702",
                    "target": "\u94c2\u8702"
                },
                {
                    "source": "\u94bb\u77f3\u8702",
                    "target": "\u94c2\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702",
                    "target": "\u57f9\u80b2\u4e00\u4e9b\u5e84\u4e25\u8702"
                },
                {
                    "source": "\u6076\u9b54\u8702",
                    "target": "Volcanic"
                },
                {
                    "source": "Furious",
                    "target": "Volcanic"
                },
                {
                    "source": "\u6076\u9b54\u8702",
                    "target": "\u51cb\u96f6\u8702"
                },
                {
                    "source": "\u6076\u610f\u8702",
                    "target": "\u51cb\u96f6\u8702"
                },
                {
                    "source": "\u8702\u738b\u6d46",
                    "target": "\u82ac\u82b3\u5757"
                },
                {
                    "source": "\u656c\u4e1a\u8702",
                    "target": "\u82ac\u82b3\u5757"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702",
                    "target": "\u5a1c\u8fe61"
                },
                {
                    "source": "\u602a\u5f02\u8702",
                    "target": "\u5a1c\u8fe61"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u65e0\u540d\u8702"
                },
                {
                    "source": "\u9b54\u529b\u8702",
                    "target": "\u590d\u5174\u8702"
                },
                {
                    "source": "\u5e7d\u7075\u8702",
                    "target": "\u5e7b\u5f71\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702",
                    "target": "\u6076\u9f99\u8702"
                },
                {
                    "source": "\u9057\u5fd8\u8702",
                    "target": "\u6076\u9f99\u8702"
                },
                {
                    "source": "\u656c\u4e1a\u8702",
                    "target": "\u76db\u5f00\u8702"
                },
                {
                    "source": "\u5174\u65fa\u8702",
                    "target": "\u76db\u5f00\u8702"
                },
                {
                    "source": "\u94c2\u8702",
                    "target": "\u94c0\u8702"
                },
                {
                    "source": "\u590d\u4ec7\u8702",
                    "target": "\u94c0\u8702"
                },
                {
                    "source": "\u6c34\u8702",
                    "target": "\u6c14\u4f53\u8702"
                },
                {
                    "source": "\u672b\u5f71\u7c89\u672b\u8702",
                    "target": "\u6c14\u4f53\u8702"
                },
                {
                    "source": "\u8282\u4fed\u8702",
                    "target": "\u5e72\u65f1\u8702"
                },
                {
                    "source": "\u8574\u9b54\u8702",
                    "target": "\u8d85\u80fd\u8702"
                },
                {
                    "source": "\u9b45\u60d1\u8702",
                    "target": "\u8d85\u80fd\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702",
                    "target": "\u50e7\u4fa3\u87021"
                },
                {
                    "source": "\u707c\u70ed\u8702",
                    "target": "\u795e\u79d8\u5c18\u8702"
                },
                {
                    "source": "\u4f0a\u7538\u8702",
                    "target": "\u795e\u79d8\u5c18\u8702"
                },
                {
                    "source": "\u6076\u9b54\u8702",
                    "target": "\u7ea2\u77f3\u8702"
                },
                {
                    "source": "\u656c\u4e1a\u8702",
                    "target": "\u7ea2\u77f3\u8702"
                },
                {
                    "source": "Glowstone",
                    "target": "Sunnarium"
                },
                {
                    "source": "Gold",
                    "target": "Sunnarium"
                },
                {
                    "source": "\u949b\u8702",
                    "target": "\u94ec\u8702"
                },
                {
                    "source": "\u7ea2\u5b9d\u77f3\u8702",
                    "target": "\u94ec\u8702"
                },
                {
                    "source": "\u6076\u9b54\u8702",
                    "target": "\u8bb0\u6068\u8702"
                },
                {
                    "source": "\u50e7\u4fa3\u87021",
                    "target": "\u8bb0\u6068\u8702"
                },
                {
                    "source": "\u954d\u8702",
                    "target": "\u94dd\u8702"
                },
                {
                    "source": "\u950c\u8702",
                    "target": "\u94dd\u8702"
                },
                {
                    "source": "\u7164\u8702",
                    "target": "\u948d\u8702"
                },
                {
                    "source": "\u94c0\u8702",
                    "target": "\u948d\u8702"
                },
                {
                    "source": "\u602a\u5f02\u8702",
                    "target": "\u7384\u5965\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "target": "\u7384\u5965\u8702"
                },
                {
                    "source": "\u5e72\u65f1\u8702",
                    "target": "\u8d2b\u7620\u8702"
                },
                {
                    "source": "\u4e0d\u5026\u8702",
                    "target": "\u5174\u65fa\u8702"
                },
                {
                    "source": "\u751f\u957f\u8702",
                    "target": "\u5174\u65fa\u8702"
                },
                {
                    "source": "\u82f1\u96c4\u8702",
                    "target": "\u94a8\u8702"
                },
                {
                    "source": "\u9530\u8702",
                    "target": "\u94a8\u8702"
                },
                {
                    "source": "\u6076\u9b54\u8702",
                    "target": "\u5145\u80fd\u5408\u91d1\u8702"
                },
                {
                    "source": "\u7ea2\u77f3\u5408\u91d1\u8702",
                    "target": "\u5145\u80fd\u5408\u91d1\u8702"
                },
                {
                    "source": "\u5f52\u9690\u8702",
                    "target": "\u539f\u59cb\u8702"
                },
                {
                    "source": "\u53e4\u4ee3\u8702",
                    "target": "\u539f\u59cb\u8702"
                },
                {
                    "source": "\u751c\u7f8e\u8702",
                    "target": "\u6c34\u679c\u8702"
                },
                {
                    "source": "\u5174\u65fa\u8702",
                    "target": "\u6c34\u679c\u8702"
                },
                {
                    "source": "\u94c1\u8702",
                    "target": "\u954d\u8702"
                },
                {
                    "source": "\u94dc\u8702",
                    "target": "\u954d\u8702"
                },
                {
                    "source": "\u8bb0\u6068\u8702",
                    "target": "\u590d\u4ec7\u8702"
                },
                {
                    "source": "\u62a5\u4ec7\u8702",
                    "target": "\u590d\u4ec7\u8702"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u8702",
                    "target": "\u672b\u5f71\u7c89\u672b\u8702"
                },
                {
                    "source": "\u94dd\u8702",
                    "target": "\u949b\u8702"
                },
                {
                    "source": "\u7ea2\u77f3\u8702",
                    "target": "\u949b\u8702"
                },
                {
                    "source": "\u5148\u8bf4\u91cd\u8981\u7684\u4e8b\u60c5",
                    "target": "\u871c\u8702\u57f9\u80b2\"\u667a\u8005\"\u624b\u518c"
                },
                {
                    "source": "\u656c\u4e1a\u8702",
                    "target": "\u5206\u998f\u8702"
                },
                {
                    "source": "\u542b\u6cb9\u8702",
                    "target": "\u5206\u998f\u8702"
                },
                {
                    "source": "\u602a\u5f02\u8702",
                    "target": "\u618e\u6076\u8702"
                },
                {
                    "source": "\u539f\u59cb\u8702",
                    "target": "\u6811\u8102\u8702"
                },
                {
                    "source": "\u6ce5\u6cde\u8702",
                    "target": "\u6811\u8102\u8702"
                },
                {
                    "source": "\u6734\u5b9e\u8702",
                    "target": "\u6e90\u8d28\u8702"
                },
                {
                    "source": "\u5947\u672f\u8702",
                    "target": "\u6e90\u8d28\u8702"
                },
                {
                    "source": "\u8fd8\u6709\u54ea\u91cc\u53ef\u80fd\u51fa\u95ee\u9898\uff1f",
                    "target": "\u6e90\u8d28\u8702"
                },
                {
                    "source": "\u8d85\u80fd\u8702",
                    "target": "\u6734\u5b9e\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u6734\u5b9e\u8702"
                },
                {
                    "source": "\u5145\u80fd\u5408\u91d1\u8702",
                    "target": "\u8109\u51b2\u5408\u91d1\u8702"
                },
                {
                    "source": "\u5e7b\u5f71\u8702",
                    "target": "\u8109\u51b2\u5408\u91d1\u8702"
                },
                {
                    "source": "\u9041\u4e16\u8702",
                    "target": "\u5e7d\u7075\u8702"
                },
                {
                    "source": "\u602a\u5f02\u8702",
                    "target": "\u9b54\u529b\u8702"
                },
                {
                    "source": "\u4ee5\u592a\u8702",
                    "target": "\u9b54\u529b\u8702"
                },
                {
                    "source": "\u706b\u8702",
                    "target": "\u707c\u70ed\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5bfb\u5e38\u8702",
                    "target": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702"
                },
                {
                    "source": "\u948d\u8702",
                    "target": "\u9565\u8702"
                },
                {
                    "source": "\u8870\u8d25\u8702",
                    "target": "\u9565\u8702"
                },
                {
                    "source": "\u4e0b\u754c\u788e\u7247\u8702",
                    "target": "\u672b\u5f71\u788e\u7247"
                },
                {
                    "source": "\u672b\u5f71\u7c89\u672b\u8702",
                    "target": "\u672b\u5f71\u788e\u7247"
                },
                {
                    "source": "\u6076\u9b54\u8702",
                    "target": "Energium"
                },
                {
                    "source": "Volcanic",
                    "target": "Energium"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u9ad8\u5c1a\u8702",
                    "target": "\u6ce5\u6cde\u8702"
                },
                {
                    "source": "\u539f\u59cb\u8702",
                    "target": "\u542b\u6cb9\u8702"
                },
                {
                    "source": "\u6d77\u6d0b\u8702",
                    "target": "\u542b\u6cb9\u8702"
                },
                {
                    "source": "\u7c98\u571f\u8702",
                    "target": "\u9521\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u9521\u8702"
                },
                {
                    "source": "\u52e4\u594b\u8702",
                    "target": "\u84dd\u8272\u8702"
                },
                {
                    "source": "\u8352\u51c9\u8702",
                    "target": "\u8870\u8d25\u8702"
                },
                {
                    "source": "\u5f02\u56fd\u8702",
                    "target": "\u4f0a\u7538\u8702"
                },
                {
                    "source": "\u94c5\u8702",
                    "target": "\u94df\u8702"
                },
                {
                    "source": "\u9507\u8702",
                    "target": "\u94df\u8702"
                },
                {
                    "source": "\u94c2\u8702",
                    "target": "\u672b\u5f71\u8702"
                },
                {
                    "source": "\u5e7b\u5f71\u8702",
                    "target": "\u672b\u5f71\u8702"
                },
                {
                    "source": "\u707c\u70ed\u8702",
                    "target": "\u4e5d\u5934\u86c71"
                },
                {
                    "source": "\u5deb\u5996\u8702",
                    "target": "\u4e5d\u5934\u86c71"
                },
                {
                    "source": "\u602a\u5f02\u8702",
                    "target": "\u9b45\u60d1\u8702"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u7530\u91ce\u8702",
                    "target": "\u9b45\u60d1\u8702"
                },
                {
                    "source": "\u795e\u79d8\u5c18\u8702",
                    "target": "\u66ae\u8272\u6076\u9b421"
                },
                {
                    "source": "\u4e5d\u5934\u86c71",
                    "target": "\u66ae\u8272\u6076\u9b421"
                },
                {
                    "source": "\u7530\u56ed\u8702",
                    "target": "\u7a3c\u7a51\u8702"
                },
                {
                    "source": "\u4e0d\u5026\u8702",
                    "target": "\u7a3c\u7a51\u8702"
                },
                {
                    "source": "\u94dd\u8702",
                    "target": "\u9530\u8702"
                },
                {
                    "source": "\u949b\u8702",
                    "target": "\u9530\u8702"
                },
                {
                    "source": "\u7164\u8702",
                    "target": "\u7206\u70b8"
                },
                {
                    "source": "\u706b\u77f3",
                    "target": "\u7206\u70b8"
                },
                {
                    "source": "\u57f9\u80b2\u4e00\u4e9b\u5e84\u4e25\u8702",
                    "target": "\u57f9\u80b2\u4e00\u4e9b\u5e1d\u7687\u8702"
                },
                {
                    "source": "\u94a8\u8702",
                    "target": "\u9507\u8702"
                },
                {
                    "source": "\u94c2\u8702",
                    "target": "\u9507\u8702"
                },
                {
                    "source": "\u7c98\u571f\u8702",
                    "target": "\u6ce5\u70ad\u8702"
                },
                {
                    "source": "\u7530\u56ed\u8702",
                    "target": "\u6ce5\u70ad\u8702"
                },
                {
                    "source": "\u98ce\u8702",
                    "target": "\u706b\u8760\u8702"
                },
                {
                    "source": "\u8be1\u9690\u8702",
                    "target": "\u706b\u8760\u8702"
                },
                {
                    "source": "\u94c1\u8702",
                    "target": "\u94a2\u8702"
                },
                {
                    "source": "\u7164\u8702",
                    "target": "\u94a2\u8702"
                },
                {
                    "source": "\u571f\u8702",
                    "target": "\u6ce5\u571f\u8702"
                },
                {
                    "source": "\u7ea2\u77f3\u8702",
                    "target": "\u706b\u77f3"
                },
                {
                    "source": "\u7ea2\u5b9d\u77f3\u8702",
                    "target": "\u706b\u77f3"
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
    