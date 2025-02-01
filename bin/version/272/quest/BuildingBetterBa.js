
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
                    "name": "\u8986\u76d6\u4e07\u7269",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1967.png",
                    "x": 444.0,
                    "y": 60.0,
                    "data": "\u9576\u677f\u4f5c\u574a\u53ef\u4e3a\u4f60\u5236\u4f5c\u6728\u5730\u677f\u4e4b\u7c7b\u7684\u677f\u5b50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHrw==",
                    "title": "\u8986\u76d6\u4e07\u7269",
                    "tooltip": "<strong>\u8986\u76d6\u4e07\u7269</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82b1\u54e8\u7684\u6728\u5934"
                },
                {
                    "name": "\u6211\u7684\u5bbf\u654c",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1941.png",
                    "x": 108.0,
                    "y": 60.0,
                    "data": "\u51ff\u5b50\u5bf9\u4ed8\u697c\u68af\u65f6\u6709\u70b9\u5f31.\u8981\u662f\u6709\u66f4\u591a\u79cd\u7c7b\u7684\u697c\u68af\u5c31\u597d\u4e86,\u7a0d\u540e\u6211\u4f1a\u4e3a\u4f60\u5c55\u793a\u5982\u4f55\u5c06\u4efb\u610f\u65b9\u5757\u505a\u6210\u697c\u68af.</br></br>\u4f60\u8fd8\u53ef\u4ee5\u5728NEI\u4e2d\u641c\u7d22\"\u697c\u68af\",\u5bfb\u627e\u5176\u4ed6mod\u7684\u697c\u68af.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHlQ==",
                    "title": "\u6211\u7684\u5bbf\u654c",
                    "tooltip": "<strong>\u6211\u7684\u5bbf\u654c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u597d\u7684\u51ff\u5b50"
                },
                {
                    "name": "\u57fa\u7840\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1973.png",
                    "x": 60.0,
                    "y": 252.0,
                    "data": "\u57fa\u7840\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e\u7684\u706f\u53ea\u9700\u8981LV\u7684\u6405\u62cc\u673a\u5c31\u80fd\u5236\u4f5c\u4e86.  \u666e\u901a\u7248\u672c\u7684\u9700\u8981\u7ea2\u77f3\u4fe1\u53f7\u624d\u80fd\u5f00\u542f.\u800c\u53cd\u76f8\u7248\u672c\u7684\u5219\u662f\u53ea\u5728\u6ca1\u6709\u7ea2\u77f3\u4fe1\u53f7\u65f6\u5f00\u542f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHtQ==",
                    "title": "\u57fa\u7840\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e",
                    "tooltip": "<strong>\u57fa\u7840\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u563f,DJ,\u6405\u8d77\u6765!"
                },
                {
                    "name": "\u5bfb\u82b1",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1953.png",
                    "x": 396.0,
                    "y": 60.0,
                    "data": "\u60f3\u8981\u5f00\u59cb\u690d\u7269\u5b66\u8fd9\u4e2amod,\u4f60\u9700\u8981\u627e\u4e00\u4e9b\u82b1.\u7136\u540e\u7528\u4f60\u7684\u6ce5\u94f2\u628a\u6ce5\u571f\u53d8\u6210\u666e\u901a\u82b1\u571f.\u7136\u540e\u5c06\u4f60\u627e\u5230\u7684\u82b1\u79cd\u5728\u8fd9\u4e9b\u666e\u901a\u82b1\u571f\u4e0a,\u8fd9\u6837\u5b83\u4eec\u4f1a\u53d8\u6210\u690d\u7269\u5b66\u8fd9\u4e2amod\u7684\u82b1.  \u5982\u679c\u4f60\u5df2\u7ecf\u8fbe\u5230\u4e86MV\u9636\u6bb5,\u67e5\u770b\"\u4eba\u6765\u75af(\u8702)\"\u4efb\u52a1\u680f\u4ee5\u83b7\u77e5\u57fa\u56e0\u5de5\u7a0b(\u6ce8\u610f\u4e0e\u57fa\u56e0\u5de5\u4e1a\u533a\u5206)\u65b9\u9762\u7684\u4fe1\u606f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHoQ==",
                    "title": "\u5bfb\u82b1",
                    "tooltip": "<strong>\u5bfb\u82b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u5b66"
                },
                {
                    "name": "\u8fd9\u73a9\u610f\u8fd8\u80fd\u7528\u4e48?",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1964.png",
                    "x": 300.0,
                    "y": 204.0,
                    "data": "\u8c01\u6765\u544a\u8bc9\u6211?Wiki\u4e0a\u5173\u4e8e\u8fd9,\u9664\u4e86\"\u82b1\u56ed\"\u5176\u4ed6\u5565\u8bcd\u6761\u4e5f\u6ca1\u6709.  \u4e5f\u8bb8\u53ef\u4ee5\u505a\u4e00\u4e9b,\u7136\u540e\u628a\u5b83\u4eec\u8d34\u5728\u4e00\u4e2a\u6797\u4e1a\u6811\u573a\u7684\u6797\u4e1a\u7535\u8def\u677f\u4e0a?\u8c01\u5728\u4e4e,\u795d\u4f60\u597d\u8fd0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHrA==",
                    "title": "\u8fd9\u73a9\u610f\u8fd8\u80fd\u7528\u4e48?",
                    "tooltip": "<strong>\u8fd9\u73a9\u610f\u8fd8\u80fd\u7528\u4e48?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9676\u74f7"
                },
                {
                    "name": "\u96d5\u51ff\u4e07\u7269",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1939.png",
                    "x": 12.0,
                    "y": 60.0,
                    "data": "\u5982\u679c,\u56e0\u4e3a\u67d0\u4e9b\u539f\u56e0,\u4f60\u9700\u8981\u96d5\u51ff\u5927\u91cf\u7269\u54c1,\u81ea\u52a8\u96d5\u523b\u673a\u6b63\u662f\u4f60\u6240\u9700\u8981\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHkw==",
                    "title": "\u96d5\u51ff\u4e07\u7269",
                    "tooltip": "<strong>\u96d5\u51ff\u4e07\u7269</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!</br>\u66f4\u597d\u7684\u51ff\u5b50"
                },
                {
                    "name": "\u7528\u7535\u7167\u4eae\u4e00\u5927\u7247\u533a\u57df",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1979.png",
                    "x": 252.0,
                    "y": 252.0,
                    "data": "\u4f60\u73b0\u5728\u5df2\u7ecf\u6709\u4e86\u771f\u7a7a\u51b7\u51bb\u673a,\u53ef\u4ee5\u5c06\u538b\u7f29\u7a7a\u6c14\u5355\u5143\u6db2\u5316\u5e76\u79bb\u5fc3\u5b83\u4eec\u4ee5\u83b7\u5f97\u7a00\u6709\u6c14\u4f53.\u4f60\u9700\u8981\u8fd9\u4e9b\u7a00\u6709\u6c14\u4f53\u6765\u5236\u4f5c\u767d\u70bd\u706f.\u53ea\u8981\u6709\u7535,\u8fd9\u4e9b\u706f\u5c31\u4f1a\u5c04\u51fa\u5149\u675f\u6216\u66f4\u77ed\u66f4\u5bbd\u7684\u5149\u9525.\u4f7f\u7528\u6273\u624b\u5207\u6362\u6a21\u5f0f,Shift+\u53f3\u952e\u53ef\u4f7f\u5176\u53cd\u76f8.</br></br>\u63a8\u8350\u5148\u7ed9EIO\u7535\u5bb9\u5e93\u4f9b\u7535,\u7535\u5bb9\u5e93\u7528RF\u4e3a\u8fd9\u7c7b\u8bbe\u5907\u4f9b\u80fd,\u800c\u4e0d\u662f\u76f4\u63a5\u7528GT-EU\u4f9b\u80fd,\u56e0\u4e3a\u5b83\u4eec\u65e0\u6cd5\u5728GT\u7684\u7535\u6d41\u5305\u7cfb\u7edf\u4e0b\u6b63\u5e38\u5de5\u4f5c,\u5c31\u7b97\u53ea\u9700\u89811RF,\u5b83\u4eec\u4e5f\u4f1a\u6d88\u8017\u6389\u4e00\u6574\u4e2aEU\u7535\u6d41\u5305.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHuw==",
                    "title": "\u7528\u7535\u7167\u4eae\u4e00\u5927\u7247\u533a\u57df",
                    "tooltip": "<strong>\u7528\u7535\u7167\u4eae\u4e00\u5927\u7247\u533a\u57df</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ec8\u7ed3..."
                },
                {
                    "name": "\u9664\u8349\u79cd\u82b1",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1956.png",
                    "x": 348.0,
                    "y": 108.0,
                    "data": "\u6ca1\u4eba\u559c\u6b22\u6742\u8349.\u9664\u8349\u5242\u53ef\u4ee5\u4e3a\u4f60\u7684\u82b1\u571f\u9664\u8349.</br></br>\u9aa8\u7c89\u53ef\u4fc3\u8fdb\u82b1\u5349\u53d1\u82bd,\u4f7f\u5176\u66f4\u5feb\u6210\u719f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHpA==",
                    "title": "\u9664\u8349\u79cd\u82b1",
                    "tooltip": "<strong>\u9664\u8349\u79cd\u82b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c89\u672b\u7684\u529b\u91cf(Powder Power)"
                },
                {
                    "name": "\u6c34\u6676\u7bb1\u5b50",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5235602628658218321.png",
                    "x": 156.0,
                    "y": 360.0,
                    "data": "\u4f60\u5df2\u7ecf\u5236\u4f5c\u4e86\u4e00\u4e2a\u53ef\u4ee5\u8ba9\u4f60\u770b\u5230\u91cc\u9762\u5185\u5bb9\u7684\u7bb1\u5b50\uff0c\u662f\u4e0d\u662f\u5f88\u6709\u7528\uff1f</br></br>[note]\u5c31\u50cf\u4e4b\u524d\u7684\u7bb1\u5b50\u4e00\u6837\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7528\u5408\u9002\u7684\u5347\u7ea7\u7269\u54c1\u6765\u5347\u7ea7\u5b83\u3002",
                    "quest_id": "e-VLKN-JSRK3V2cmDbm6rw==",
                    "title": "\u00a7b\u6c34\u6676\u7bb1\u5b50",
                    "tooltip": "<strong>\u6c34\u6676\u7bb1\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae"
                },
                {
                    "name": "\u66f4\u597d\u7684EIO?",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1981.png",
                    "x": 60.0,
                    "y": 300.0,
                    "data": "EIO\u7684\u7535\u706f\u548c\u65e0\u7ebf\u7535\u706f\u53ef\u4ee5\u7167\u4eae\u6700\u591a10\u683c,\u800c\u666e\u901a\u706b\u628a\u53ea\u80fd\u7167\u4eae7\u683c.\u4f60\u9700\u8981\u79bb\u5fc3\u6db2\u6001\u7a7a\u6c14\u624d\u80fd\u8fc7\u53bb\u5236\u4f5c\u706f\u6ce1\u6240\u9700\u7684\u6c14\u4f53.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHvQ==",
                    "title": "\u66f4\u597d\u7684EIO?",
                    "tooltip": "<strong>\u66f4\u597d\u7684EIO?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ec8\u7ed3..."
                },
                {
                    "name": "\u529f\u80fd\u6027\u7ea2\u77f3\u8ba1\u5212\u706f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1975.png",
                    "x": 204.0,
                    "y": 204.0,
                    "data": "\u7ea2\u77f3\u8ba1\u5212\u63d0\u4f9b\u4e86\u4e24\u79cd\u7279\u6b8a\u7684\u706f,\u53ef\u4ee5\u7528\u4f5c\u6309\u94ae.  \u666e\u901a\u7684\u6309\u94ae\u4e00\u76f4\u4fdd\u6301\u70b9\u4eae.\u53cd\u9988\u7167\u660e\u6309\u94ae\u4f1a\u5728\u6536\u5230\u7ea2\u77f3\u4fe1\u53f7\u65f6\u70b9\u4eae.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHtw==",
                    "title": "\u529f\u80fd\u6027\u7ea2\u77f3\u8ba1\u5212\u706f",
                    "tooltip": "<strong>\u529f\u80fd\u6027\u7ea2\u77f3\u8ba1\u5212\u706f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u563f,DJ,\u6405\u8d77\u6765!"
                },
                {
                    "name": "\u4e00\u4e9b\u65b9\u4fbf\u7684\u7528\u6cd5",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1938.png",
                    "x": 300.0,
                    "y": 12.0,
                    "data": "\u5320\u9b42\u51ff\u5b50\u6ca1\u6709\u592a\u591a\u7528\u5904,\u4f46\u8fd9\u91cc\u6709\u51e0\u4e2a\u6709\u8da3\u7684\u7528\u6cd5.\u4f7f\u7528NEI\u67e5\u770b\u5176\u5b83\u88c5\u9970\u7528\u9014.\u4f60\u8fd8\u53ef\u4ee5\u505a\u4e9b\u534a\u7816,\u4f7f\u602a\u7269\u65e0\u6cd5\u5728\u5176\u4e0a\u751f\u6210.</br></br>\u5728\u8910\u5ca9\u5757\u94fa\u7684\u8def\u4e0a\u884c\u8d70\u4f1a\u6bd4\u5728\u7c97\u8d28\u8910\u5ca9\u5757\u94fa\u7684\u7a0d\u5fae\u5feb\u4e00\u70b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHkg==",
                    "title": "\u4e00\u4e9b\u65b9\u4fbf\u7684\u7528\u6cd5",
                    "tooltip": "<strong>\u4e00\u4e9b\u65b9\u4fbf\u7684\u7528\u6cd5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5408\u9002\u7684\u5de5\u5177"
                },
                {
                    "name": "\u5408\u9002\u7684\u5de5\u5177",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1936.png",
                    "x": 252.0,
                    "y": 12.0,
                    "data": "\u5320\u9b42\u6709\u81ea\u5df1\u7684\u7c7b\u4f3c\u51ff\u5b50\u7684\u5de5\u5177,\u7528\u4e8e\u6539\u53d8\u5320\u9b42\u65b9\u5757\u7684\u6837\u5f0f.  \u7528\u5904\u4e0d\u591a,\u4f46\u5982\u679c\u4f60\u67e5\u67e5NEI,\u4f60\u5c31\u80fd\u53d1\u73b0\u8fd9\u8fd8\u662f\u80fd\u505a\u4e0d\u5c11\u4e8b\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHkA==",
                    "title": "\u5408\u9002\u7684\u5de5\u5177",
                    "tooltip": "<strong>\u5408\u9002\u7684\u5de5\u5177</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5320\u9b42\u65b9\u5757"
                },
                {
                    "name": "\u57fa\u5730\u592a\u5927\uff1f\u6211\u4e3a\u4f60\u51c6\u5907\u597d\u4e86\u4e00\u4e9b\u4e1c\u897f!",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/952.png",
                    "x": 156.0,
                    "y": 12.0,
                    "data": "\u4e3a\u4e86\u9632\u6b62\u6c61\u67d3\u6216\u8005\u9632\u6b62\u673a\u5668\u7206\u70b8\u4f60\u53ef\u80fd\u4f1a\u5c06\u4f60\u7684\u57fa\u5730\u8bbe\u5907\u653e\u7f6e\u7684\u5341\u5206\u5206\u6563,\u8fd9\u6837\u6765\u56de\u79fb\u52a8\u771f\u7684\u5f88\u7d2f,\u6240\u4ee5\u4f55\u4e0d\u5236\u9020\u4e00\u4e9b\u6df7\u51dd\u571f\u52a0\u5feb\u79fb\u52a8\u901f\u5ea6\u5462?</br></br>\u5c1d\u8bd5\u53bb\u91c7\u96c6\u4e00\u4e9b\u5927\u7406\u77f3.\u5927\u7406\u77f3\u78e8\u6210\u7c89\u672b\u540e\u79bb\u5fc3\u53ef\u4ee5\u83b7\u5f97\u5f88\u591a\u65b9\u89e3\u77f3,\u5728\u6405\u62cc\u673a\u91cc\u52a0\u6c34\u5c06\u5b83\u548c\u77f3\u7c89\u3001\u7c98\u571f\u7c89\u3001\u77f3\u82f1\u7802\u6405\u62cc.\u63a5\u4e0b\u6765\u6405\u62cc\u7269\u8f93\u51fa\u5230\u4e00\u4e2a\u6d41\u4f53\u56fa\u5316\u5668\u4e2d\u4f7f\u5176\u56fa\u5316\u4e3a\u6df7\u51dd\u571f\u5757.</br></br>\u5728\u8fd9\u4e9b\u6df7\u51dd\u571f\u5757\u4e0a\u4f60\u4f1a\u8d70\u7684\u66f4\u5feb.\u5e76\u4e14\u4f60\u53ef\u4ee5\u5c06\u5b83\u4eec\u5408\u6210\u4e3a\u6df7\u51dd\u571f\u7816,\u6df7\u51dd\u571f\u7816\u53ef\u4ee5\u963b\u6b62\u602a\u7269\u751f\u6210.</br></br>\u63d0\u793a:10\u6876\u6e7f\u6df7\u51dd\u571f\u53ef\u4ee5\u5408\u6210160\u5757\u6df7\u51dd\u571f.\u5b83\u4eec\u8fd8\u53ef\u4ee5\u7528\u51ff\u5b50\u52a0\u5de5\u6210\u4e0d\u540c\u7684\u6837\u5f0f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADuA==",
                    "title": "\u57fa\u5730\u592a\u5927\uff1f\u6211\u4e3a\u4f60\u51c6\u5907\u597d\u4e86\u4e00\u4e9b\u4e1c\u897f!",
                    "tooltip": "<strong>\u57fa\u5730\u592a\u5927\uff1f\u6211\u4e3a\u4f60\u51c6\u5907\u597d\u4e86\u4e00\u4e9b\u4e1c\u897f!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u6d41\u4f53\u56fa\u5316\u5668</br>\u563f,DJ,\u6405\u8d77\u6765!</br>\u8f6c\u554a\u8f6c\u554a\u8f6c\u554a\u8f6c..."
                },
                {
                    "name": "\u5c3d\u53ef\u80fd\u5feb\u5730\u51ff",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1940.png",
                    "x": 12.0,
                    "y": 108.0,
                    "data": "\u81ea\u52a8\u96d5\u523b\u673a\u5b9e\u5728\u592a\u6162\u4e86.\u5236\u4f5c\u4e00\u4e9b\u5347\u7ea7,\u8ba9\u5b83\u5feb\u70b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHlA==",
                    "title": "\u5c3d\u53ef\u80fd\u5feb\u5730\u51ff",
                    "tooltip": "<strong>\u5c3d\u53ef\u80fd\u5feb\u5730\u51ff</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u96d5\u51ff\u4e07\u7269"
                },
                {
                    "name": "\u7cbe\u81f4\u706f\u7b3c",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1971.png",
                    "x": 108.0,
                    "y": 204.0,
                    "data": "\u6536\u85cf\u9986(BiblioCraft)mod\u63d0\u4f9b\u5404\u79cd\u7cbe\u81f4\u706f\u7b3c. \u8fd8\u80fd\u7528\u8721\u6768\u6885\u6216\u8005\u8702\u8721\u5236\u4f5c\u8721\u70db.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHsw==",
                    "title": "\u7cbe\u81f4\u706f\u7b3c",
                    "tooltip": "<strong>\u7cbe\u81f4\u706f\u7b3c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u63d0\u53d6\u539f\u6599</br>\u538b\u7f29\u6750\u6599"
                },
                {
                    "name": "\u6808\u6865",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3294.png",
                    "x": 108.0,
                    "y": 300.0,
                    "data": "\u6808\u6865Mod\u6dfb\u52a0\u4e86\u591a\u79cd\u88c5\u9970\u6027\u65b9\u5757\u6765\u88c5\u9970\u4f60\u7684\u5de5\u5382.</br></br>\u811a\u624b\u67b6\u548c\u65bd\u5de5\u811a\u624b\u67b6\u5bf9\u4e8e\u4f60\u53ef\u4ee5\u98de\u884c\u4e4b\u524d\u7684\u7a7a\u4e2d\u5efa\u9020\u5f88\u6709\u7528.\u5b83\u4eec\u50cf\u68af\u5b50\u4e00\u6837\u53ef\u4ee5\u6500\u722c,\u5e76\u5728\u8f7b\u51fb\u65f6\u7acb\u523b\u7834\u574f\u6389\u843d.\u53ca\u65f6\u5728\u6500\u722c\u65f6\u677e\u5f00\u79fb\u52a8\u952e,\u4e5f\u4e0d\u597d\u4ece\u811a\u624b\u67b6\u4e0a\u6454\u843d.\u5982\u679c\u4f7f\u7528\u56fa\u4f53\u65b9\u5757\u53f3\u51fb\u65bd\u5de5\u811a\u624b\u67b6,\u811a\u624b\u67b6\u5c06\u4f1a\u88ab\u66ff\u6362\u4e3a\u8be5\u56fa\u4f53\u65b9\u5757.</br></br>\u6808\u6865\u53ef\u4ee5\u76f8\u4e92\u8fde\u63a5\u5f62\u6210\u4e00\u6761\u5bbd\u9614\u7684\u901a\u9053.\u53ef\u4ee5\u901a\u8fc7\u8b66\u793a\u80f6\u5e26\u548c\u9713\u8679\u706f\u88c5\u9970\u6808\u6865,\u540e\u8005\u53ef\u4ee5\u63d0\u4f9b\u660f\u6697\u7684\u7167\u660e.</br></br>\u7b3c\u5f0f\u6276\u68af\u53ef\u4ee5\u8ba9\u4f60\u4e0a\u4e0b\u79fb\u52a8\u800c\u4e0d\u4f1a\u6454\u843d,\u5e76\u4e14\u6bd4\u539f\u7248\u68af\u5b50\u5feb\u5f97\u591a.</br></br>\u652f\u67f1\u53ea\u662f\u4e00\u4e2a\u88c5\u9970\u6027\u65b9\u5757,\u5b83\u4eec\u53ef\u4ee5\u5728\u4efb\u610f\u65b9\u5411\u4e92\u76f8\u8fde\u63a5,\u5e76\u5411\u5177\u6709\u68af\u5b50\u7684\u529f\u80fd.</br></br>\u575a\u5b9e\u94c1\u8f68\u53ef\u4ee5\u8ba9\u77ff\u8f66\u5728\u6ca1\u6709\u65b9\u5757\u652f\u6491\u7684\u60c5\u51b5\u4e0b\u901a\u8fc7.\u4f7f\u7528\u710a\u67aa\u53f3\u952e\u575a\u5b9e\u94c1\u8f68\u53ef\u4ee5\u6c38\u4e45\u4e3a\u5176\u5145\u80fd,\u800c\u4e0d\u9700\u8981\u7ea2\u77f3\u706b\u628a.\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u8db3\u591f\u7684\u5a31\u4e50\u9879\u76ee,\u7528\u5b83\u4eec\u5efa\u9020\u4e00\u4e2a\u8fc7\u5c71\u8f66\u5427!</br></br>\u710a\u67aa\u53ef\u4ee5\u8ba9\u4f60\u901a\u8fc7\u53f3\u952e\u5355\u51fb\u79fb\u9664\u6808\u6865\u7684\u680f\u6746\u6216\u5730\u677f.\u7528\u710a\u67aa\u53ef\u4ee5\u5728\u6808\u6865\u680f\u6746\u4e0a\u6253\u5f00\u4e00\u4e2a\u5141\u8bb8\u4f60\u8fdb\u51fa\u7684\u901a\u9053,\u4f46\u4e0d\u8981\u8fdd\u53cd\"\u5b89\u5168\u751f\u4ea7\u7ba1\u7406\u6761\u4f8b\".GT\u6216Forge\u517c\u5bb9\u7684\u6273\u624b\u4e5f\u6709\u76f8\u540c\u7684\u529f\u80fd,\u6240\u4ee5\u4f60\u6ca1\u6709\u5fc5\u8981\u5236\u4f5c\u710a\u67aa.</br>",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAM3g==",
                    "title": "\u6808\u6865",
                    "tooltip": "<strong>\u6808\u6865</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1517.png",
                    "x": 228.0,
                    "y": 396.0,
                    "data": "...\u6700\u540e,\u7bb1\u5b50\u7684\u6700\u7ec8\u5f62\u6001,\u5373\u4f7f\u88ab\u7834\u574f\u4e86,\u91cc\u9762\u7684\u7269\u54c1\u8fd8\u662f\u4f1a\u4fdd\u7559!\u8fd9\u6837\u7269\u54c1\u8fd0\u8f93\u5c31\u4f1a\u53d8\u5f97\u7b80\u5355\u5f97\u591a!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF7Q==",
                    "title": "\u00a79\u00a7l\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f",
                    "tooltip": "<strong>\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HV\u81ea\u52a8\u91c7\u77ff\u673a</br>\u9ed1\u66dc\u77f3\u7bb1\u5b50</br>\u7384\u94a2\u7bb1\u5b50"
                },
                {
                    "name": "\u4e94\u989c\u516d\u8272\u7684\u73bb\u7483",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1959.png",
                    "x": 396.0,
                    "y": 156.0,
                    "data": "\u79cd\u7c7b\u4e30\u5bcc\u7684\u67d3\u6599\u5e26\u6765\u4e86\u989c\u8272\u4e30\u5bcc\u7684\u73bb\u7483.\u53ea\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f-\u4e0d\u540c\u4e8e\u666e\u901a\u73bb\u7483,\u8fd9\u4e9b\u73bb\u7483\u4e0d\u9632\u706b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHpw==",
                    "title": "\u4e94\u989c\u516d\u8272\u7684\u73bb\u7483",
                    "tooltip": "<strong>\u4e94\u989c\u516d\u8272\u7684\u73bb\u7483</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53c8\u591a\u4e8680\u79cd\u65b0\u989c\u8272\u7ed9\u4f60\u73a9"
                },
                {
                    "name": "\u9ed1\u66dc\u77f3\u7bb1\u5b50",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5548813088822417447.png",
                    "x": 156.0,
                    "y": 432.0,
                    "data": "\u5c06\u94bb\u77f3\u7bb1\u5b50\u4e0e\u9ed1\u66dc\u77f3\u7ed3\u5408\u8d77\u6765\uff0c\u4f7f\u4f60\u80fd\u591f\u5236\u4f5c\u4e00\u4e2a\u9632\u7206\u7bb1\uff01</br></br>[note]\u5c31\u50cf\u4e4b\u524d\u7684\u7bb1\u5b50\u4e00\u6837\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7528\u5408\u9002\u7684\u5347\u7ea7\u7269\u54c1\u6765\u5347\u7ea7\u5b83\u3002",
                    "quest_id": "QMlw6Z67T5-y_qflA7On2Q==",
                    "title": "\u00a78\u9ed1\u66dc\u77f3\u7bb1\u5b50",
                    "tooltip": "<strong>\u9ed1\u66dc\u77f3\u7bb1\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae"
                },
                {
                    "name": "\u9524\u5b50\u8d8a\u591a,\u9ebb\u70e6\u8d8a\u591a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1966.png",
                    "x": 444.0,
                    "y": 156.0,
                    "data": "\u6ca1\u9519,\u662f\u65f6\u5019\u770b\u770b\u522b\u7684\u9524\u5b50\u4e86. \u6728\u5de5\u5927\u5e08\u9524\u4f7f\u4f60\u80fd\u591f\u65cb\u8f6c\u8bb8\u591a\u65b9\u5757.</br></br>\u6f5c\u884c\u4f7f\u7528\u53ef\u4ee5\u5782\u76f4\u65cb\u8f6c\u65b9\u5757.</br></br>\u4e3a\u4ec0\u4e48\u4f4e\u9636\u7684\u9524\u5b50\u53eb\u5927\u5e08\u9524?\u8c01\u77e5\u9053??</br></br>\u8bd1\u8005\u6ce8:\u6807\u9898\u539f\u6587\u662f\"Mo' Hammers Mo' Problems\",\u6765\u6e90\u4e8e\u7f8e\u56fd\u8bf4\u5531\u6b4c\u624bThe Notorious B.I.G.\u7684\u6b4c\u66f2\u540d\"Mo' Money,Mo' Problems\",\u4ea6\u662f\u4e00\u53e5\u4fda\u8bed,\u610f\u4e3a\"\u91d1\u94b1\u8d8a\u591a\u9ebb\u70e6\u8d8a\u591a\".",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHrg==",
                    "title": "\u9524\u5b50\u8d8a\u591a,\u9ebb\u70e6\u8d8a\u591a",
                    "tooltip": "<strong>\u9524\u5b50\u8d8a\u591a,\u9ebb\u70e6\u8d8a\u591a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82b1\u54e8\u7684\u6728\u5934</br>\u74f7\u7816\u4f5c\u574a</br>\u73bb\u7483\u4f5c\u574a"
                },
                {
                    "name": "\u53c8\u591a\u4e8680\u79cd\u65b0\u989c\u8272\u7ed9\u4f60\u73a9",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1958.png",
                    "x": 348.0,
                    "y": 156.0,
                    "data": "\u5f53\u4f60\u79cd\u690d\u539f\u7248\u82b1,\u5728\u5176\u6210\u719f\u540e.\u7528\u526a\u5200\u6536\u5272\u83b7\u5f97\u5e7c\u82d7-\u53ef\u4ee5\u91cd\u65b0\u79cd\u690d\u7e41\u6b96.\u7834\u574f\u82b1\u5c31\u4f1a\u83b7\u5f97\u4e00\u6735\u6210\u719f\u7684\u82b1.\u7528\u5de5\u4f5c\u53f0\u5904\u7406\u8fd9\u82b1,\u4f60\u5c31\u80fd\u83b7\u5f97\u67d3\u6599.</br></br>\u60f3\u8981\u6742\u4ea4,\u4f60\u9700\u8981\u5c06\u82b1\u4e0e\u7a7a\u82b1\u571f\u76f8\u90bb\u79cd\u690d.\u7559\u795e\u6742\u8349.\u6700\u540e\u4e00\u4e2a\u5c0f\u5e7c\u82d7\u5c31\u4f1a\u5f00\u59cb\u751f\u957f.</br></br>\u8bb0\u4f4f,\u505a\u8fd9\u4e9b\u4e8b\u60c5\u65f6\u8981\u5728\u5730\u4e0b\u6216\u662f\u5c01\u95ed\u7a7a\u95f4,\u5426\u5219TPS\u4f1a\u8ba9\u4f60\u540e\u6094\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHpg==",
                    "title": "\u53c8\u591a\u4e8680\u79cd\u65b0\u989c\u8272\u7ed9\u4f60\u73a9",
                    "tooltip": "<strong>\u53c8\u591a\u4e8680\u79cd\u65b0\u989c\u8272\u7ed9\u4f60\u73a9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9664\u8349\u79cd\u82b1"
                },
                {
                    "name": "EIO\u7684\u706f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1980.png",
                    "x": 12.0,
                    "y": 300.0,
                    "data": "EIO\u4e5f\u6709\u81ea\u5df1\u7684\u706f.\u8fd9\u4e9b\u706f\u7684\u534a\u5f84\u80fd\u8fbe\u52308\u683c,\u800c\u6b63\u5e38\u706b\u628a\u53ea\u67097\u683c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHvA==",
                    "title": "EIO\u7684\u706f",
                    "tooltip": "<strong>EIO\u7684\u706f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3"
                },
                {
                    "name": "\u9676\u74f7",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1960.png",
                    "x": 348.0,
                    "y": 204.0,
                    "data": "\u7528\u4e00\u4e9b\u7c98\u571f\u548c\u67d3\u6599,\u4f60\u53ef\u4ee5\u5236\u4f5c\u67d3\u8272\u7c98\u571f.\u5c06\u67d3\u8272\u7c98\u571f\u70e7\u5236,\u4f60\u5c31\u80fd\u83b7\u5f97\u57fa\u7840\u7684\u9676\u74f7\u5757.\u5982\u679c\u4f60\u60f3\u8981\u9020\u51fa\u4e00\u7247\u62e5\u6709\u5747\u5300\u8fc7\u5ea6\u989c\u8272\u7684\u533a\u57df,\u8fd9\u4e9b\u65b9\u5757\u4f1a\u5f88\u6709\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHqA==",
                    "title": "\u9676\u74f7",
                    "tooltip": "<strong>\u9676\u74f7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53c8\u591a\u4e8680\u79cd\u65b0\u989c\u8272\u7ed9\u4f60\u73a9"
                },
                {
                    "name": "\u8ffd\u8e2a\u4f60\u7684\u53d1\u73b0(\u82b1)",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2105.png",
                    "x": 300.0,
                    "y": 108.0,
                    "data": "\u8fd9\u4e2a\u5b9e\u7528\u7684\u8bbe\u5907\u5c06\u8ffd\u8e2a\u8bb0\u5f55\u4f60\u8fc4\u4eca\u4e3a\u6b62\u53d1\u73b0\u7684\u82b1\u53ca\u5176\u7279\u6027.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIOQ==",
                    "title": "\u8ffd\u8e2a\u4f60\u7684\u53d1\u73b0(\u82b1)",
                    "tooltip": "<strong>\u8ffd\u8e2a\u4f60\u7684\u53d1\u73b0(\u82b1)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9664\u8349\u79cd\u82b1"
                },
                {
                    "name": "\u74f7\u7816\u56fe\u6848",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1962.png",
                    "x": 396.0,
                    "y": 252.0,
                    "data": "\u73b0\u5728\u4f60\u6709\u4e86\u74f7\u7816,\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e9b\u7b80\u5355\u7684\u56fe\u6848.\u5728\u5de5\u4f5c\u53f0\u4e2d\u6392\u62102x2,\u7ea2/\u9ec4\u6216\u9ec4/\u7ea2,\u53ef\u5236\u4f5c\u51fa\u65b9\u683c\u74f7\u7816.\u5c06\u8fd9\u4e9b\u65b9\u683c\u74f7\u7816\u518d\u6446\u62102x2\u53ef\u83b7\u5f97\u65b9\u683c\u66f4\u5c0f\u7684\u65b9\u683c\u74f7\u7816.\u53bbBinnie\u7684wiki\u9875\u9762\u4e0a(Botany)\u770b\u770b\u4f60\u8fd8\u80fd\u7528\u74f7\u7816\u505a\u51fa\u54ea\u4e9b\u56fe\u6848.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHqg==",
                    "title": "\u74f7\u7816\u56fe\u6848",
                    "tooltip": "<strong>\u74f7\u7816\u56fe\u6848</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7814\u94b5\u548c\u74f7\u7816"
                },
                {
                    "name": "\u57fa\u7840\u65b9\u5757",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1942.png",
                    "x": 12.0,
                    "y": 12.0,
                    "data": "\u51ff\u5b50\u63d0\u4f9b\u79cd\u7c7b\u7e41\u591a\u7684\u65b9\u5757.\u5728NEI\u4e2d\u641c\u7d22\"chisel\"\u53ef\u4ee5\u627e\u5230\u4e00\u9875\u53c8\u4e00\u9875\u7684\u7ed3\u679c.\u8fd9\u91cc\u6709\u4e2a\u5c0f\u4f8b\u5b50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHlg==",
                    "title": "\u57fa\u7840\u65b9\u5757",
                    "tooltip": "<strong>\u57fa\u7840\u65b9\u5757</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u597d\u7684\u51ff\u5b50"
                },
                {
                    "name": "\u5c31\u50cf\u624b\u91cc\u62ff\u7740\u4e2a\u53bf\u6269\u5c55\u529e\u516c\u5ba4",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1957.png",
                    "x": 396.0,
                    "y": 108.0,
                    "data": "\u571f\u58e4\u68c0\u6d4b\u8ba1\u5c06\u544a\u8bc9\u4f60\u82b1\u571f\u7684\u72b6\u6001-\u5e72\u71e5\u6027\u3001\u80a5\u6c83\u5ea6\u7b49.\u4f60\u53ef\u4ee5\u5bf9\u82b1\u571f\u4f7f\u7528\u5404\u79cd\u7c89\u672b\u6765\u8c03\u6574\u5176\u5c5e\u6027,\u6ee1\u8db3\u82b1\u7684\u9700\u6c42.</br></br>\u8bd1\u8005\u6ce8:\u53bf\u6269\u5c55\u529e\u516c\u5ba4(County-Extension-Offices)\u662f\u7f8e\u56fd\u56fd\u5bb6\u519c\u836f\u4fe1\u606f\u4e2d\u5fc3(NPIC)\u5728\u5404\u53bf\u8bbe\u7f6e\u7684\u4e00\u79cd\u673a\u6784,\u529e\u516c\u5ba4\u53ef\u4ee5\u63d0\u4f9b\u6709\u5173\u56ed\u827a\u3001\u519c\u4e1a\u548c\u5bb3\u866b\u9632\u6cbb\u95ee\u9898\u7684\u76f8\u5173\u54a8\u8be2.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHpQ==",
                    "title": "\u5c31\u50cf\u624b\u91cc\u62ff\u7740\u4e2a\u53bf\u6269\u5c55\u529e\u516c\u5ba4",
                    "tooltip": "<strong>\u5c31\u50cf\u624b\u91cc\u62ff\u7740\u4e2a\u53bf\u6269\u5c55\u529e\u516c\u5ba4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9664\u8349\u79cd\u82b1"
                },
                {
                    "name": "\u95e8\u540e\u6709\u4ec0\u4e48#3?",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1982.png",
                    "x": 156.0,
                    "y": 60.0,
                    "data": "\u66f4\u591a\u95e8(MalisisDoors)mod\u53ef\u4ee5\u8ba9\u4f60\u89c1\u8bc6\u5404\u79cd\u5947\u601d\u5999\u60f3\u7684\u5b9a\u5236\u95e8.</br></br>\u7528\u73a9\u5bb6\u63a2\u6d4b\u8986\u76d6\u677f\u5f00\u95e8\u6bd4\u8d77\u7528\u6309\u94ae\u6216\u538b\u529b\u677f\u5f00\u95e8\u597d\u591a\u4e86...\u4e0d\u8fc7\u9020\u4ef7\u6709\u70b9...\u5012\u9709.</br></br>\u6216\u8bb8\u4f60\u53ef\u4ee5\u627e\u5230\u8fd9\u53f0\u65b9\u5757\u6df7\u5408\u5668\u7684\u7528\u6cd5,\u5b83\u592a\u5947\u602a\u4e86\u5e76\u4e14\u65e0\u6cd5\u6b63\u786e\u5de5\u4f5c.\u6211\u6b63\u6253\u7b97\u628a\u5b83\u6254\u4e86\u5462.</br></br>\u8fd8\u6709\u4e00\u4e9b\u53ef\u5408\u6210\u7684\u66f4\u591a\u95e8mod\u7684\u7269\u54c1,\u67e5\u770bNEI\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHvg==",
                    "title": "\u95e8\u540e\u6709\u4ec0\u4e48#3?",
                    "tooltip": "<strong>\u95e8\u540e\u6709\u4ec0\u4e48#3?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#1"
                },
                {
                    "name": "\u66f4\u597d\u7684\u51ff\u5b50",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1935.png",
                    "x": 60.0,
                    "y": 12.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u88c5\u9970\u57fa\u5730,\u5c31\u9700\u8981\u4e00\u628a\u66f4\u597d\u7684\u51ff\u5b50.  \u9ed1\u66dc\u77f3\u51ff\u5b50\u6bd4\u8d77\u94c1\u51ff\u5b50\u6765\u8bf4\u4e00\u4e2a\u9876\u4fe9.\u94bb\u77f3\u51ff\u5b50\u80fd\u6253\u5341\u4e2a,\u4f46\u9700\u8981LV\u5207\u5272\u673a\u624d\u80fd\u5236\u4f5c.</br></br>\u666e\u901a:256</br>\u9ed1\u66dc\u77f3:512</br>\u94bb\u77f3:2560</br>\u57fa\u5ca9:32767</br></br>\u663e\u7136,\u8d8a\u786c\u7684\u6750\u8d28\u8d8a\u8010\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHjw==",
                    "title": "\u66f4\u597d\u7684\u51ff\u5b50",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u51ff\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599"
                },
                {
                    "name": "\u5e73\u9762\u706f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1976.png",
                    "x": 108.0,
                    "y": 252.0,
                    "data": "\u8fd9\u4e9bZtones\u4e2d\u7b80\u5355\u7684\u706f\u6709\u6f02\u4eae\u3001\u67d4\u548c\u7684\u706f\u5f62.\u6211\u559c\u6b22\u5c06\u5b83\u4eec\u7528\u5728\u5929\u82b1\u677f\u4e0a,\u8425\u9020\u51fa\u529e\u516c\u5ba4\u7684\u611f\u89c9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHuA==",
                    "title": "\u5e73\u9762\u706f",
                    "tooltip": "<strong>\u5e73\u9762\u706f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e"
                },
                {
                    "name": "\u82b1\u54e8\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1974.png",
                    "x": 12.0,
                    "y": 252.0,
                    "data": "\u82b1\u54e8\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e\u7684\u706f\u3001\u706f\u7b3c\u548c\u706f\u5177\u9700\u8981\u51b2\u538b\u673a\u5e8a\u548c\u7ec4\u88c5\u673a\u624d\u80fd\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHtg==",
                    "title": "\u82b1\u54e8\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e",
                    "tooltip": "<strong>\u82b1\u54e8\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!</br>\u51b2\u538b\u4e07\u7269"
                },
                {
                    "name": "\u4e2d\u9636\u5efa\u7b51\u4e4b\u6756",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1947.png",
                    "x": 156.0,
                    "y": 156.0,
                    "data": "\u4e0b\u4e00\u9636\u7684\u5efa\u7b51\u4e4b\u6756\u662f\u94bb\u77f3\u5efa\u7b51\u4e4b\u6756,\u62e5\u6709\u6240\u6709\u7684\u6709\u8da3\u6a21\u5f0f.\u53ea\u662f\u7528\u7684\u65f6\u5019\u8981\u5f53\u5fc3,\u4e00\u4e0d\u5c0f\u5fc3\u653e\u4e0b\u4e00\u5927\u7247\u65b9\u5757\u4f1a\u4ee4\u4eba\u5f88\u4e0d\u6109\u5feb!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHmw==",
                    "title": "\u4e2d\u9636\u5efa\u7b51\u4e4b\u6756",
                    "tooltip": "<strong>\u4e2d\u9636\u5efa\u7b51\u4e4b\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f4e\u9636\u5efa\u7b51\u4e4b\u6756"
                },
                {
                    "name": "\u7384\u94a2\u7bb1\u5b50",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8724598716517898559.png",
                    "x": 192.0,
                    "y": 396.0,
                    "data": "\u62e5\u62b1\u9ed1\u6697\u540e,\u4f60\u53ef\u4ee5\u83b7\u5f97\u65b0\u7684\u66f4\u5927\u7684\u7384\u94a2\u7bb1\u5b50.\u4e5f\u8bb8\u5c06\u6765\u4f1a\u6709\u53e6\u4e00\u79cd\u5347\u7ea7\u65b9\u5f0f?</br></br>[note]\u5c31\u50cf\u4e4b\u524d\u7684\u7bb1\u5b50\u4e00\u6837,\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5408\u9002\u7684\u5347\u7ea7\u7269\u54c1\u6765\u5347\u7ea7\u5230\u7384\u94a2\u7bb1\u5b50.[/note]</br>",
                    "quest_id": "t6xRGFm_S2SG6_-xNh8mwQ==",
                    "title": "\u00a75\u00a76\u00a7l\u7384\u94a2\u7bb1\u5b50",
                    "tooltip": "<strong>\u7384\u94a2\u7bb1\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae</br>\u6765\u5230\u9ed1\u6697\u9762...(Come to the Dark Side...)"
                },
                {
                    "name": "\u8424\u77f3&\u51ff\u5b50\u706b\u628a,\u592a\u7a7a\u4f7f\u7528\u8bc4\u4f30",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1977.png",
                    "x": 156.0,
                    "y": 204.0,
                    "data": "\u5f53\u4f60\u79bb\u5f00\u5730\u7403,\u63a2\u7d22\u661f\u7a7a\u65f6,\u4f60\u9700\u8981\u6700\u4f18\u79c0\u7684\u706b\u628a-\u53ef\u4ee5\u5728\u65e0\u6c27\u73af\u5883\u4f7f\u7528\u7684\u706b\u628a.\u4e3a\u6b64,\u4f60\u9700\u8981\u8424\u77f3\u706b\u628a.\u4f60\u53ef\u4ee5\u7528\u51ff\u5b50\u5c06\u8fd9\u4e9b\u706b\u628a\u505a\u6210\u5404\u79cd\u6837\u5f0f.\u8fd9\u79cd\u706b\u628a\u5df2\u88ab\u8bc1\u5b9e\u53ef\u5728\u6df1\u7a7a\u4f7f\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHuQ==",
                    "title": "\u8424\u77f3&\u51ff\u5b50\u706b\u628a,\u592a\u7a7a\u4f7f\u7528\u8bc4\u4f30",
                    "tooltip": "<strong>\u8424\u77f3&\u51ff\u5b50\u706b\u628a,\u592a\u7a7a\u4f7f\u7528\u8bc4\u4f30</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!"
                },
                {
                    "name": "\u5320\u9b42\u65b9\u5757",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1937.png",
                    "x": 204.0,
                    "y": 12.0,
                    "data": "\u5320\u9b42\u63d0\u4f9b\u4e86\u51e0\u79cd\u6709\u7528\u7684\u65b9\u5757.\u5c06\u9521\u548c\u6c99\u783e\u653e\u5165\u51b6\u70bc\u5382,\u83b7\u5f97\u7684\u7c97\u8d28\u8910\u5ca9\u5757\u4f1a\u8ba9\u4f60\u79fb\u52a8\u901f\u5ea6\u7a0d\u5fae\u63d0\u9ad8\u4e00\u70b9.\u5706\u77f3\u53ef\u505a\u6210\u7126\u9ed1\u77f3\u5934,\u53ef\u7528\u4e8e\u6784\u5efa\u51b6\u70bc\u5382\u7684\u5899\u58c1,\u800c\u65e0\u9700\u4f7f\u7528\u7c98\u571f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHkQ==",
                    "title": "\u5320\u9b42\u65b9\u5757",
                    "tooltip": "<strong>\u5320\u9b42\u65b9\u5757</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5e0c\u671b\u4f60\u5df2\u7ecf\u51c6\u5907\u597d\u4e86!"
                },
                {
                    "name": "\u8424\u77f32",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1972.png",
                    "x": 12.0,
                    "y": 204.0,
                    "data": "\u4f60\u5df2\u7ecf\u5230\u8fc7\u4e0b\u754c\u5e76\u6536\u96c6\u4e86\u8424\u77f3.\u9664\u4e86\u5408\u6210\u7528\u9014,\u4f60\u8fd8\u53ef\u4ee5\u7528\u5b83\u6765\u7167\u660e.\u4f60\u53ef\u4ee5\u5c06\u8424\u77f3\u6d82\u8272(\u4e0d\u5e78\u7684\u662f,\u57281.7.10,\u4e0d\u652f\u6301\u5f69\u5149)\u6216\u8005\u7528\u624b\u952f\u5c06\u5176\u5207\u6210\u5c0f\u7c92,\u8fd9\u6837\u65e2\u80fd\u7167\u660e\u53c8\u4e0d\u5360\u592a\u5927\u5730\u65b9.</br></br>\u4f60\u80fd\u627e\u5230\u6216\u57f9\u80b2\u51fa\u591a\u79cd\u80fd\u51fa\u4ea7\u8424\u77f3\u7684\u690d\u7269,\u6bd4\u5982\u8f89\u5149\u82b1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHtA==",
                    "title": "\u8424\u77f3",
                    "tooltip": "<strong>\u8424\u77f32</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599</br>\u4e0b\u754c"
                },
                {
                    "name": "\u7406\u6e05\u695a\u4f60\u5bb6\u90a3\u5806\u610f\u5927\u5229\u9762\u5427",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2138.png",
                    "x": 252.0,
                    "y": 156.0,
                    "data": "\u6ca1\u4eba\u559c\u6b22\u4e00\u56e2\u7cdf\u7684\u57fa\u5730.\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e2a\u55b7\u6f06\u7f50\u7136\u540e\u586b\u5145\u5316\u5b66\u67d3\u6599-\u7531\u786b\u9178\u5236\u5907\u800c\u6765,\u7528\u55b7\u6f06\u7f50\u7ed9\u4f60\u7684\u5730\u6bef\u3001\u7ebf\u7f06\u3001\u5bfc\u7ebf\u548c\u673a\u5668\u4e0a\u8272,\u8ba9\u5b83\u4eec\u4e95\u4e95\u6709\u6761. \u4e0d\u8fc7\u73b0\u5728,\u6709\u51e0\u4e2a\u514d\u8d39\u8d60\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIWg==",
                    "title": "\u7406\u6e05\u695a\u4f60\u5bb6\u90a3\u5806\u610f\u5927\u5229\u9762\u5427",
                    "tooltip": "<strong>\u7406\u6e05\u695a\u4f60\u5bb6\u90a3\u5806\u610f\u5927\u5229\u9762\u5427</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!"
                },
                {
                    "name": "\u66f4\u50cf Ouch-i-tect",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1986.png",
                    "x": 108.0,
                    "y": 108.0,
                    "data": "\u5efa\u7b51\u5e08\u952f\u53f0\u53ef\u4ee5\u5c06\u5927\u90e8\u5206\u6574\u7acb\u65b9\u4f53\u65b9\u5757\u52a0\u5de5\u6210\u5404\u79cd\u4ee4\u4eba\u60ca\u53f9\u7684\u5f62\u72b6.</br></br>\u7528\u6728\u5de5\u9524\u53f3\u952e\u53ef\u5c06\u65b9\u5757\u65cb\u8f6c90\u5ea6.\u7528\u6728\u5de5\u9524Shift+\u53f3\u952e\u53ef\u66f4\u6539\u5e95\u9762\u7684\u65b9\u5411.</br></br>\u51ff\u5b50\u6709\u8bb8\u591a\u65b9\u5f0f\u6765\u6539\u53d8\u65b9\u5757\u7684\u7ed3\u6784. \u67d0\u4e9b\u5757\u81ea\u52a8\u4e0e\u76f8\u90bb\u65b9\u5757\u5f62\u6210\u8fde\u63a5.\u53ef\u4ee5\u901a\u8fc7\u624b\u6301\u51ff\u5b50\u53f3\u952e\u4f60\u60f3\u6539\u53d8\u7684\u9762\u9644\u8fd1,\u6765\u7981\u7528\u6216\u91cd\u65b0\u542f\u7528\u81ea\u52a8\u8fde\u63a5.</br></br>\u67d0\u4e9b\u65b9\u5757\u53ef\u4ee5\u585e\u5165\u7b2c\u4e8c\u6750\u6599.\u7528\u51ff\u5b50\u53f3\u952e\u65b9\u5757\u7684\u4e2d\u5fc3,\u53ef\u4ee5\u53d6\u51fa\u7b2c\u4e8c\u6750\u6599.</br></br>\u4f60\u8fd8\u53ef\u4ee5\u7528\u51ff\u5b50\u53f3\u952e\u539f\u7248\u73bb\u7483\u3001\u73bb\u7483\u677f\u3001\u8424\u77f3\u6216\u51b0\u5757\u6765\u65e0\u635f\u91c7\u96c6\u5b83\u4eec.</br></br>\u8bd1\u8005\u6ce8:\u539f\u6587Ouch-i-tect\u662fArchitect(\u5efa\u7b51)\u7684\u8c10\u97f3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHwg==",
                    "title": "\u66f4\u50cf Ouch-i-tect",
                    "tooltip": "<strong>\u66f4\u50cf Ouch-i-tect</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u5de5\u4e1a3D\u6253\u5370\u673a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/387.png",
                    "x": 60.0,
                    "y": 108.0,
                    "data": "\u9700\u8981\u5927\u91cf\u7684\u51ff\u5236\u65b9\u5757?\u8fd9\u53f0\u673a\u5668\u5f88\u9002\u5408\u4f60.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABgw==",
                    "title": "\u5de5\u4e1a3D\u6253\u5370\u673a",
                    "tooltip": "<strong>\u5de5\u4e1a3D\u6253\u5370\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)"
                },
                {
                    "name": "\u82b1\u54e8\u7684\u6728\u5934",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1968.png",
                    "x": 444.0,
                    "y": 108.0,
                    "data": "\u6709\u4e86\u6728\u6750\u4f5c\u574a,\u4f60\u53ef\u4ee5\u505a\u51fa\u8bb8\u591a\u82b1\u54e8\u7684\u6728\u5934.\u4f60\u53ef\u4ee5\u4f7f\u7528\u539f\u7248\u3001\u6797\u4e1a\u3001\u66f4\u591a\u6811mod\u4e2d\u7684\u5404\u79cd\u6728\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHsA==",
                    "title": "\u82b1\u54e8\u7684\u6728\u5934",
                    "tooltip": "<strong>\u82b1\u54e8\u7684\u6728\u5934</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6797\u4e1amod\u6838\u5fc3\u65b9\u5757"
                },
                {
                    "name": "\u66f4\u5feb\u3001\u66f4\u597d\u3001\u66f4\"\u5efa\u7b51\"",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1984.png",
                    "x": 252.0,
                    "y": 60.0,
                    "data": "\u5f3a\u5316\u5efa\u7b51\u6307\u5bfc\u4eea\u63d0\u4f9b\u4e86\u66f4\u6709\u7279\u5f81\u7684\u6307\u5bfc.\u6700\u91cd\u8981\u7684\u662f,\u4f60\u53ef\u4ee5\u624b\u6301\u4f60\u60f3\u8981\u653e\u7f6e\u7684\u65b9\u5757\u53f3\u952e\u8fd9\u53f0\u673a\u5668\u4efb\u610f\u767d\u8272\u90e8\u5206,\u7136\u540e\u8fd9\u4e2a\u65b9\u5757\u5c31\u4f1a\u88ab\u653e\u7f6e\u5728\u4e16\u754c\u4e2d.\u4f60\u9700\u8981\u63d0\u4f9b\u7ea2\u77f3\u4fe1\u53f7\u6765\u6fc0\u6d3b\u8fd9\u53f0\u673a\u5668.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHwA==",
                    "title": "\u66f4\u5feb\u3001\u66f4\u597d\u3001\u66f4\"\u5efa\u7b51\"",
                    "tooltip": "<strong>\u66f4\u5feb\u3001\u66f4\u597d\u3001\u66f4\"\u5efa\u7b51\"</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!</br>\u9020\u4e2a\u5927\u5bb6\u4f19"
                },
                {
                    "name": "\u8f7b\u677e\u5efa\u7b51",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/601.png",
                    "x": 204.0,
                    "y": 156.0,
                    "data": "\u624b\u52a8\u653e\u7f6e\u65b9\u5757\u6709\u65f6\u975e\u5e38\u5355\u8c03\u4e4f\u5473.\u5982\u679c\u80fd\u4e00\u6b21\u653e\u4e5d\u4e2a\u4e0d\u662f\u5f88\u597d\u5417\uff1f\u597d\u6d88\u606f,\u51c6\u5907\u597d\u4e0b\u5217\u5404\u79cd\u5efa\u7b51\u65b9\u5757,\u7136\u540e\u6211\u4f1a\u7ed9\u4f60\u4e9b\u597d\u4e1c\u897f.</br></br>\u4f60\u4e5f\u53ef\u4ee5\u7528\u4e0d\u7a33\u5b9a\u91d1\u5c5e\u952d\u81ea\u5df1\u9020\u4e00\u4e2a(\u6216\u505a\u4e2a\u66f4\u597d\u7684).</br></br>\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u5347\u7ea7\u4e3a\u5176\u4ed6\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACWQ==",
                    "title": "\u8f7b\u677e\u5efa\u7b51",
                    "tooltip": "<strong>\u8f7b\u677e\u5efa\u7b51</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!"
                },
                {
                    "name": "\u4e0d\u60f3\u63a5\u53d7\u4f60\u673a\u5668\u63d0\u4f9b\u7684ASMR\u670d\u52a1?",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1948.png",
                    "x": 12.0,
                    "y": 156.0,
                    "data": "\u8981\u662f\u4f60\u673a\u5668\u53d1\u51fa\u7684\u58f0\u97f3\u5feb\u628a\u4f60\u903c\u75af\u4e86,\u4f60\u53ef\u4ee5\u6dfb\u52a0\u9759\u97f3\u5347\u7ea7\u8ba9\u5b83\u4eec\u95ed\u5634.</br></br>\u6ce8\u610f:\u8fd9\u4e5f\u610f\u5473\u7740\u4f60\u5c06\u4e0d\u4f1a\u542c\u5230\u8df3\u7535\u7684\u58f0\u97f3.  \u53e6\u5916,\u4e00\u65e6\u6dfb\u52a0\u4e86\u8fd9\u4e2a\u5347\u7ea7\u5c31\u65e0\u6cd5\u79fb\u9664\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHnA==",
                    "title": "\u4e0d\u60f3\u63a5\u53d7\u4f60\u673a\u5668\u63d0\u4f9b\u7684ASMR\u670d\u52a1?",
                    "tooltip": "<strong>\u4e0d\u60f3\u63a5\u53d7\u4f60\u673a\u5668\u63d0\u4f9b\u7684ASMR\u670d\u52a1?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u878d\u805a\u4e59\u70ef"
                },
                {
                    "name": "\u70b9\u4eae\u5b83!",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1370.png",
                    "x": 204.0,
                    "y": 252.0,
                    "data": "\u5965\u672f\u706f\u521b\u9020\u4e86\u989d\u5916\u7684\u5149\u6e90,\u5176\u4f5c\u7528\u7c7b\u4f3c\u4e8e\u706b\u628a,\u4f46\u5176\u8303\u56f4\u4e3a\u534a\u5f84\u4e3a16\u683c\u7684\u7403\u4f53.\u4e0d\u540c\u4e8e\u4e00\u822c\u5149\u6e90\u7684\u662f,\u5965\u672f\u706f\u7684\u5149\u53ef\u4ee5\u7a7f\u5899,\u6216\u8005\u522b\u7684\u4efb\u4f55\u963b\u788d.\u8fd9\u4e2a\u7279\u6027\u53ef\u80fd\u5f88\u6709\u7528...\u552f\u4e00\u7684\u7f3a\u70b9,\u5b83\u4f1a\u7167\u4eae\u4f60\u4e0d\u9700\u8981\u7167\u4eae\u7684\u5730\u65b9,\u6bd4\u5982\u8bf4\u5de5\u4e1a\u9ad8\u7089\u5185\u90e8.</br></br>\u5f53\u8fde\u63a5\u5230\u5965\u672f\u94bb\u63a2\u673a\u7684\u5e95\u90e8\u65f6,\u5965\u672f\u706f\u83b7\u5f97\u989d\u5916\u7684\u80fd\u529b:\u5b83\u5c06\u7167\u4eae\u5965\u672f\u94bb\u63a2\u673a\u6240\u6316\u6398\u7684\u96a7\u9053.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFWg==",
                    "title": "\u70b9\u4eae\u5b83!",
                    "tooltip": "<strong>\u70b9\u4eae\u5b83!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u8be5\u5230\u54ea\u627e\u7425\u73c0?"
                },
                {
                    "name": "\u4e0d\u7528\u7535,\u7167\u4eae\u4e00\u5927\u7247\u533a\u57df",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1978.png",
                    "x": 252.0,
                    "y": 204.0,
                    "data": "\u5982\u679c\u4f60\u6709\u76f8\u5f53\u5927\u7684\u4e00\u7247\u533a\u57df\u9700\u8981\u7167\u660e,\u800c\u4f60\u53c8\u4e0d\u60f3\u7528\u7535,\u90a3\u53ef\u4ee5\u8bd5\u8bd5\u8fd9\u4e9b\u6cdb\u5149\u706f.\u5b83\u4eec\u53ef\u4ee5\u4f7f\u7528\u7194\u7089\u7684\u71c3\u6599,\u5305\u62ec\u65b9\u5757\u548c\u538b\u7f29\u65b9\u5757.\u5236\u4f5c\u65f6\u786e\u5b9e\u9700\u8981\u4e00\u4e9b\u7535\u5b50\u5143\u4ef6.  \u5b83\u53ef\u4ee5\u53d1\u51fa\u4e00\u9053\u957f\u8ddd\u79bb\u7684\u5149\u675f,\u4e5f\u53ef\u4ee5\u653e\u51fa\u77ed\u8ddd\u79bb\u7684\u5149\u9525.\u4f7f\u7528\u6273\u624b\u5207\u6362\u6a21\u5f0f,Shift+\u53f3\u952e\u53ef\u4f7f\u5176\u53cd\u76f8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHug==",
                    "title": "\u4e0d\u7528\u7535,\u7167\u4eae\u4e00\u5927\u7247\u533a\u57df",
                    "tooltip": "<strong>\u4e0d\u7528\u7535,\u7167\u4eae\u4e00\u5927\u7247\u533a\u57df</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!</br>\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def"
                },
                {
                    "name": "\u7d27\u51d1\u7684\u5b58\u50a8",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6848797731239430532.png",
                    "x": 12.0,
                    "y": 396.0,
                    "data": "\u73b0\u5728\u4f60\u5df2\u7ecf\u6709\u4e86\u8d8a\u6765\u8d8a\u591a\u7684\u94dc\u50a8\u5907,\u4f60\u611f\u89c9\u4f60\u7684\u6728\u7bb1\u5b50\u592a\u5c0f\u4e86,\u4e0d\u80fd\u5b58\u4e0b\u4f60\u7684\u6240\u6709\u4e1c\u897f. </br></br>[note]\u662f\u65f6\u5019\u5c06\u4f60\u7684\u6728\u7bb1\u5b50\u5347\u7ea7\u4e3a\u94dc\u7bb1\u5b50\u4e86!\u66f4\u9ad8\u7b49\u7ea7\u7684\u7bb1\u5b50\u53ef\u4ee5\u901a\u8fc7\u5347\u7ea7\u7ec4\u4ef6\u65b9\u4fbf\u5730\u8fdb\u884c\u5347\u7ea7,\u4f46\u5e76\u4e0d\u662f\u6240\u6709\u7b49\u7ea7\u7684\u7bb1\u5b50\u90fd\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u65b9\u6cd5\u76f4\u63a5\u5347\u7ea7.\u8bd5\u8bd5\u770b\"\u7bb1\u5b50\u5347\u7ea7\uff1a\u6728>\u94dc\",\u867d\u7136\u7528\u8fd9\u79cd\u65b9\u5f0f\u5c06\u6728\u7bb1\u5b50\u5347\u7ea7\u5230\u9ad8\u7ea7\u7684\u7bb1\u5b50\u5e76\u4e0d\u4f1a\u66f4\u52a0\u4fbf\u5b9c.[/note]</br></br>[note]\u5347\u7ea7\u540e\u76f8\u90bb\u7684\u7bb1\u5b50\u4e0d\u518d\u80fd\u8fde\u63a5\u7ec4\u6210\u66f4\u5927\u7684\u7bb1\u5b50.[/note]",
                    "quest_id": "QNsm_wc0QO2g9C6_-vj2fA==",
                    "title": "\u00a72\u00a7l\u7d27\u51d1\u7684\u5b58\u50a8",
                    "tooltip": "<strong>\u7d27\u51d1\u7684\u5b58\u50a8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u5988\u5988\u5feb\u770b!\u6ca1\u6709\u706b\u628a!",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1969.png",
                    "x": 60.0,
                    "y": 204.0,
                    "data": "\u538c\u5026\u4e86\u57fa\u5730\u91cc\u53ea\u6709\u706b\u628a\u7167\u660e?\u8fd9\u4e00\u7cfb\u5217\u4efb\u52a1\u5c06\u4f1a\u4e3a\u4f60\u5c55\u793a\u5404\u79cd\u5404\u6837\u7684\u7167\u660e\u624b\u6bb5,\u4e00\u5b9a\u8ba9\u4f60\u6f02\u4eae\u7684\u57fa\u5730\u4eae\u4eae\u5802\u5802\u7684.</br></br>\u9996\u5148,\u94c1\u8defmod\u7684\u706f\u7b3c.\u8fd9\u4e9b\u706f\u7b3c\u6709\u5404\u79cd\u6750\u8d28,\u5305\u62ec\u5404\u79cd\u77f3\u5934\u548c\u91d1\u5c5e.\u77f3\u5934\u505a\u7684\u706f\u7b3c\u5408\u6210\u8d77\u6765\u5e76\u4e0d\u592a\u96be.\u6709\u4e2a\u4f18\u70b9\u6216\u8005\u8bf4\u7f3a\u70b9:\u8fd9\u4e9b\u706f\u7b3c\u662f\u56fa\u4f53\u65b9\u5757-\u4f60\u4e0d\u80fd\u7a7f\u8fc7\u5b83\u4eec,\u5b83\u4eec\u4e5f\u4e0d\u4f1a\u50cf\u6c99\u5b50\u90a3\u6837\u6389\u843d.\u5728NEI\u4e2d\u641c\u7d22\"\u706f\u7b3c\"\u6765\u5bfb\u627e\u66f4\u591a\u6750\u8d28.\u73b0\u5728\u505a\u8d77\u6765\u6709\u70b9\u9ebb\u70e6,\u4f46\u7a0d\u540e\u4f60\u53ef\u4ee5\u7528\u7ec4\u88c5\u673a\u975e\u5e38\u7b80\u5355\u5730\u5236\u4f5c\u5b83\u4eec.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHsQ==",
                    "title": "\u5988\u5988\u5feb\u770b!\u6ca1\u6709\u706b\u628a!",
                    "tooltip": "<strong>\u5988\u5988\u5feb\u770b!\u6ca1\u6709\u706b\u628a!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u6df7\u51dd\u571f\u548cGT\u77f3\u5934",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1944.png",
                    "x": 108.0,
                    "y": 12.0,
                    "data": "\u51ff\u5b50\u8fd8\u53ef\u4ee5\u628a\u6df7\u51dd\u571f\u548cGT\u77f3\u5934\u505a\u6210\u6709\u8da3\u7684\u65b0\u65b9\u5757.\u67d0\u4e9bGT\u77f3\u5934\u751a\u81f3\u8fd8\u53ef\u4ee5\u963b\u6b62\u602a\u7269\u5728\u5176\u4e0a\u751f\u6210.GT\u6df7\u51dd\u571f\u53ef\u8ba9\u4f60\u8dd1\u5f97\u66f4\u5feb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHmA==",
                    "title": "\u6df7\u51dd\u571f\u548cGT\u77f3\u5934",
                    "tooltip": "<strong>\u6df7\u51dd\u571f\u548cGT\u77f3\u5934</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u563f,DJ,\u6405\u8d77\u6765!</br>\u66f4\u597d\u7684\u51ff\u5b50"
                },
                {
                    "name": "\u7b2c\u4e8c\u628a\u952f--\u624b\u952f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1970.png",
                    "x": 204.0,
                    "y": 108.0,
                    "data": "forge\u5c0f\u65b9\u5757(Forge-Microblocks)mod\u5bf9\u5236\u4f5c\u5b9a\u5236\u90e8\u4ef6\u975e\u5e38\u6709\u7528.\u624b\u952f\u6709\u51e0\u4e2a\u7b49\u7ea7\u7684\u6750\u8d28.\u5982\u679c\u4f60\u7ed9\u6211\u4e00\u628a\u94c1\u624b\u952f,\u6211\u4f1a\u9001\u4f60\u4e00\u628a\u94bb\u77f3\u624b\u952f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHsg==",
                    "title": "\u7b2c\u4e8c\u628a\u952f--\u624b\u952f",
                    "tooltip": "<strong>\u7b2c\u4e8c\u628a\u952f--\u624b\u952f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u66f4\u52a0\u7d27\u51d1\u7684\u5b58\u50a8",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1085.png",
                    "x": 48.0,
                    "y": 396.0,
                    "data": "\u73b0\u5728\u4f60\u5df2\u7ecf\u6709\u4e86\u8d8a\u6765\u8d8a\u591a\u7684\u94c1\u50a8\u5907,\u4f60\u611f\u89c9\u4f60\u7684\u94dc\u7bb1\u5b50\u592a\u5c0f\u4e86,\u4e0d\u80fd\u5b58\u4e0b\u4f60\u7684\u6240\u6709\u4e1c\u897f. </br></br>[note]\u4f60\u6709\u4e00\u4e2a\u8fc7\u5c0f\u7684\u94dc\u7bb1\u5b50\u5417?\u901a\u8fc7\u5347\u7ea7\u7ec4\u4ef6\u5c06\u5176\u5347\u7ea7\u5230\u94c1\u7bb1\u5b50.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEPQ==",
                    "title": "\u00a72\u00a7l\u66f4\u52a0\u7d27\u51d1\u7684\u5b58\u50a8",
                    "tooltip": "<strong>\u66f4\u52a0\u7d27\u51d1\u7684\u5b58\u50a8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u73bb\u7483\u4f5c\u574a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1965.png",
                    "x": 444.0,
                    "y": 204.0,
                    "data": "\u60f3\u8981\u5b9a\u5236\u73bb\u7483\u7684\u5f62\u72b6\u548c\u914d\u7f6e?\u73bb\u7483\u4f5c\u574a\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u72ec\u4e00\u65e0\u4e8c\u7684\u56fe\u6848\u7136\u540e\u628a\u5b83\u4eec\u5370\u5728\u4f60\u7684\u7a97\u6237\u4e0a.\u4f60\u9700\u8981\u505a\u4e9b\u73bb\u7483\u914d\u4ef6,\u6765\u628a\u73bb\u7483\u805a\u5728\u4e00\u8d77.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHrQ==",
                    "title": "\u73bb\u7483\u4f5c\u574a",
                    "tooltip": "<strong>\u73bb\u7483\u4f5c\u574a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e94\u989c\u516d\u8272\u7684\u73bb\u7483"
                },
                {
                    "name": "\u6728\u5320\u65b9\u5757",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2160.png",
                    "x": 156.0,
                    "y": 108.0,
                    "data": "\u53e6\u4e00\u4e2a\u81ea\u5b9a\u4e49\u65b9\u5757\u7cfb\u7edf! \u6728\u5320\u65b9\u5757(Carpenter's-blocks)\u5236\u4f5c\u51fa\u6765\u65f6\u662f\u7a7a\u767d\u7684,\u653e\u7f6e\u5230\u4e16\u754c\u540e,\u5728\u5176\u4e0a\u53ef\u5e94\u7528\u7b80\u5355\u65b9\u5757\u7684\u6750\u8d28.\u8fd9\u4e9b\u65b9\u5757\u4e0d\u80fd\u662f\u65b9\u5757\u5b9e\u4f53(\u5373\u6ca1\u6709NBT),\u6240\u4ee5\u690d\u7269\u5b66\u7684\u65b9\u5757\u65e0\u6cd5\u4f7f\u7528,\u4f46GT\u77f3\u5934(\u4f8b\u5982\u7ea2\u8272\u82b1\u5c97\u5ca9)\u3001\u4efb\u610f\u67d3\u8272\u7c98\u571f\u6216\u539f\u7248\u8349\u65b9\u5757\u53ef\u4ee5\u4f7f\u7528.\u51ff\u5b50\u5904\u7406\u7684\u67d0\u4e9b\u6837\u5f0f\u7684\u73bb\u7483\u53ef\u7528,\u5e76\u4e14Ztones\u7684\u65b9\u5757\u548c\u67d3\u8272\u73bb\u7483\u4e5f\u53ef\u7528.</br></br>\u6728\u5320\u5377\u95f8\u95e8\u9700\u8981\u9876\u4e0a\u6709\u4e2a\u65b9\u5757,\u4ee5\u4fbf\u95e8\u80fd\u4ece\u4e0a\u9762\u843d\u4e0b\u6765,\u4f46\u51e0\u4e4e\u53ef\u4ee5\u6269\u6210\u4efb\u4f55\u957f\u5ea6.\u5377\u95f8\u95e8\u65c1\u8fb9\u4efb\u4f55\u4e00\u4e2a\u65b9\u5757\u4e0a\u7684\u7ea2\u77f3\u4fe1\u53f7\u90fd\u53ef\u4ee5\u6253\u5f00\u6216\u5173\u95ed\u5377\u95f8\u95e8.\u6253\u5f00/\u5173\u95ed\u5c06\u5728\u591a\u4e2a\u5782\u76f4\u95e8\u4e4b\u95f4\u4f20\u9012,\u6240\u4ee5\u4f60\u53ef\u4ee5\u5b89\u88c5\u975e\u65b9\u5f62\u7684\u95e8.\u7a7a\u624b\u6f5c\u884c+\u53f3\u952e\u53ef\u4fee\u6539\u95e8\u7684\u5f00\u5173\u6781\u6027.</br></br>\u6728\u5320\u538b\u529b\u76d8\u4ec5\u9650\u73a9\u5bb6\u6fc0\u6d3b,\u662f\u5b8c\u7f8e\u7684\u57fa\u5730\u95e8\u6fc0\u6d3b\u88c5\u7f6e.</br></br>\u6728\u5320\u6d3b\u677f\u95e8\u5fc5\u987b\u5bf9\u51c6\u65b9\u5757\u4fa7\u9762\u624d\u80fd\u653e\u7f6e.\u5b83\u53ef\u4ee5\u8ba9\u4f60\u514d\u53d7\u5769\u57da...\u526f\u4ea7\u7269\u7684\u56f0\u6270.</br></br>\u8fd8\u6709\u66f4\u591a\u5f62\u72b6\u53ef\u4f9b\u9009\u62e9,\u5728NEI\u641c\u7d22\"\u6728\u5320\"\u6765\u67e5\u770b\u8fd9\u4e9b\u9009\u9879.</br></br>\u6728\u5320\u51ff\u53ef\u4ee5\u7ed9\u5df2\u7ecf\u6539\u53d8\u6750\u8d28\u7684\u6728\u5320\u65b9\u5757\u6dfb\u52a0\u4e00\u5c42\u7eb9\u8def.</br></br>\u6728\u5320\u9524\u6709\u8bb8\u591a\u529f\u80fd. \u4ee5\u4e0b\u5217\u8868\u683c\u5f0f\u4e3a:(\u6728\u5320)\u5bf9\u8c61\u7269\u54c1-\u5de6\u952e\u6548\u679c-\u53f3\u952e\u6548\u679c-\u6f5c\u884c\u53f3\u952e\u6548\u679c.</br>\u95e8\u3001\u5377\u95f8\u95e8\u3001\u6d3b\u677f\u95e8-\u5411\u4e0a\u5207\u6362\u6837\u5f0f-\u5411\u4e0b\u5207\u6362\u6837\u5f0f-\u5207\u6362\u6728\u95e8/\u94c1\u95e8\u5f00\u5173\u65b9\u5f0f.</br>\u6805\u680f-\u65e0-\u5207\u6362\u6837\u5f0f-\u65e0.</br>\u5e8a-\u5411\u4e0a\u5207\u6362\u6837\u5f0f-\u5411\u4e0b\u5207\u6362\u6837\u5f0f-\u56de\u5230\u521d\u59cb\u6837\u5f0f.</br>\u6309\u94ae\u3001\u62c9\u6746-\u5207\u6362\u8f93\u51fa\u4fe1\u53f7(\u53cd\u76f8)-\u65e0-\u65e0.</br>\u6298\u53e0\u65b9\u5757-\u964d\u4f4e\u67d0\u4e00\u89d2-\u5347\u9ad8\u67d0\u4e00\u89d2-\u65e0.</br>\u9633\u5149\u4f20\u611f\u5668-\u5207\u6362\u8f93\u51fa\u4fe1\u53f7(\u53cd\u76f8)-\u5207\u6362\u7075\u654f\u6027-\u5207\u6362\u7075\u654f\u6027.</br>\u538b\u529b\u76d8-\u5207\u6362\u8f93\u51fa\u4fe1\u53f7(\u53cd\u76f8)-\u5207\u6362\u89e6\u53d1\u6761\u4ef6-\u5207\u6362\u89e6\u53d1\u6761\u4ef6.</br>\u6805\u680f\u95e8-\u65e0-\u5207\u6362\u6837\u5f0f-\u65e0.</br>\u68af\u5b50-\u5411\u4e0a\u5207\u6362\u6837\u5f0f-\u5411\u4e0b\u5207\u6362\u6837\u5f0f-\u5411\u4e0b\u5207\u6362\u6837\u5f0f.</br>\u4fdd\u9669\u7bb1-\u5207\u6362\u6b63\u9762\u671d\u5411(\u9762\u5411\u73a9\u5bb6)-\u5207\u6362\u7269\u54c1\u5b58\u653e-\u5207\u6362\u9501/\u89e3\u9501.</br>\u6954\u5f62\u659c\u5761\u3001\u697c\u68af-\u8f6c\u5411-\u5207\u6362\u6837\u5f0f-\u5207\u6362\u6837\u5f0f.</br>\u706b\u628a-\u5207\u6362\u6837\u5f0f-\u5207\u6362\u6837\u5f0f-\u5207\u6362\u6837\u5f0f.</br>\u74f7\u7816-\u5411\u4e0a\u5207\u6362\u6837\u5f0f-\u5411\u4e0b\u5207\u6362\u6837\u5f0f-\u540c\u4e00\u6837\u5f0f\u5185\u56fe\u6848\u65cb\u8f6c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIcA==",
                    "title": "\u6728\u5320\u65b9\u5757",
                    "tooltip": "<strong>\u6728\u5320\u65b9\u5757</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u690d\u7269\u5b66",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1952.png",
                    "x": 396.0,
                    "y": 12.0,
                    "data": "\u690d\u7269\u5b66(Botany)\u8fd9\u4e2amod\u4e3a\u65b9\u5757\u548c\u73bb\u7483\u63d0\u4f9b\u4e86\u66f4\u591a\u989c\u8272,\u4ee5\u53ca\u7b80\u5355\u7684\u74f7\u7816\u56fe\u6848,\u6216\u8005\u7528\u74f7\u7816\u4f5c\u574a\u505a\u51fa\u66f4\u590d\u6742\u7684\u56fe\u6848.  \u73b0\u5728,\u4f60\u9700\u8981\u505a\u4e2a\u94c1\u8d28\u6ce5\u94f2.</br></br>\u8fd9\u4e2amod\u4f1a\u4ea7\u751f\u5927\u91cf\u7684\u8774\u8776,\u6240\u4ee5\u52a1\u5fc5\u628a\u4f60\u7684\u82b1\u56ed\u653e\u5728\u5730\u4e0b\u6216\u8005\u73bb\u7483\u623f\u5b50\u91cc.\u8774\u8776\u4f1a\u5728\u4f60\u7684\u9886\u5730\u5468\u56f4\u6269\u6563\u5f00\u6765,\u611f\u67d3\u6811\u53f6\u5e76\u4ea7\u751f\u66f4\u591a\u7684\u8774\u8776,\u9020\u6210\u5ef6\u8fdf...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHoA==",
                    "title": "\u690d\u7269\u5b66",
                    "tooltip": "<strong>\u690d\u7269\u5b66</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ed9\u7f8a\u7406\u7406\u53d1"
                },
                {
                    "name": "\u4f4e\u9636\u5efa\u7b51\u4e4b\u6756",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1946.png",
                    "x": 108.0,
                    "y": 156.0,
                    "data": "\u94c1\u8d28\u5efa\u7b51\u4e4b\u6756\u6bd4\u77f3\u8d28\u7684\u80fd\u7528\u66f4\u4e45,\u5e76\u6709\u4e9b\u4e0d\u540c\u6a21\u5f0f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHmg==",
                    "title": "\u4f4e\u9636\u5efa\u7b51\u4e4b\u6756",
                    "tooltip": "<strong>\u4f4e\u9636\u5efa\u7b51\u4e4b\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u5efa\u7b51\u4e4b\u6756"
                },
                {
                    "name": "\u7814\u94b5\u548c\u74f7\u7816",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1961.png",
                    "x": 348.0,
                    "y": 252.0,
                    "data": "\u8981\u5236\u4f5c\u74f7\u7816\u56fe\u6848,\u4f60\u9700\u8981\u628a\u4f60\u7684\u9676\u74f7\u5757\u505a\u6210\u74f7\u7816.\u9996\u5148\u505a\u4e2a\u7814\u94b5,\u7136\u540e\u628a\u5b83\u548c\u9676\u74f7\u5757\u5728\u5de5\u4f5c\u53f0\u4e2d\u6309\u71673\u5757+1\u94b5\u6446\u653e,\u7136\u540e\u4f60\u5c31\u4f1a\u83b7\u5f97\u74f7\u7816\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHqQ==",
                    "title": "\u7814\u94b5\u548c\u74f7\u7816",
                    "tooltip": "<strong>\u7814\u94b5\u548c\u74f7\u7816</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9676\u74f7"
                },
                {
                    "name": "\u66f4\u52a0\u66f4\u52a0\u7d27\u51d1\u7684\u5b58\u50a8",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1095.png",
                    "x": 84.0,
                    "y": 396.0,
                    "data": "\u5982\u679c\u4f60\u627e\u5230\u4e86\u8db3\u591f\u591a\u7684\u9ec4\u91d1,\u90a3\u4e48\u4f60\u53ef\u4ee5\u7ee7\u7eed\u5347\u7ea7\u4f60\u7684\u7bb1\u5b50.\u9ec4\u91d1\u7bb1\u5b50\u62e5\u67099x9\u7684\u5b58\u50a8\u7a7a\u95f4.[note]\u4f60\u6709\u4e00\u4e2a\u8fc7\u5c0f\u7684\u94c1\u7bb1\u5b50\u5417?\u901a\u8fc7\u5347\u7ea7\u7ec4\u4ef6\u5c06\u5176\u5347\u7ea7\u5230\u91d1\u7bb1\u5b50.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAERw==",
                    "title": "\u00a72\u00a7l\u66f4\u52a0\u66f4\u52a0\u7d27\u51d1\u7684\u5b58\u50a8",
                    "tooltip": "<strong>\u66f4\u52a0\u66f4\u52a0\u7d27\u51d1\u7684\u5b58\u50a8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u94a2\u7bb1\u5b50?",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8598415503288479283.png",
                    "x": 120.0,
                    "y": 396.0,
                    "data": "\u94a2\u7bb1\u5b50\u7684\u9020\u4ef7\u660e\u663e\u9ad8\u4e8e\u91d1\u7bb1,\u5bb9\u91cf\u4e5f\u66f4\u5c0f,\u4f46\u53ef\u7528\u4e8e\u67d0\u4e9b\u7279\u6b8a\u5408\u6210\u914d\u65b9.</br>",
                    "quest_id": "V4jinTYRSueIrEqn90dRzQ==",
                    "title": "\u00a73\u00a7l\u94a2\u7bb1\u5b50?",
                    "tooltip": "<strong>\u94a2\u7bb1\u5b50?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!"
                },
                {
                    "name": "\u7c89\u672b\u7684\u529b\u91cf(Powder Power)",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1955.png",
                    "x": 348.0,
                    "y": 60.0,
                    "data": "\u690d\u7269\u5b66\u5229\u7528\u5404\u79cd\u7c89\u672b\u6765\u63d0\u9ad8\u82b1\u571f\u5c5e\u6027.</br></br>\u63d0\u9ad8PH\u503c-\u7070\u70ec\u7c89\u3001\u6728\u6d46\u7c89</br>\u964d\u4f4ePH\u503c-\u8986\u76d6\u7269\u7c89\u3001\u786b\u78fa\u7c89</br>\u63d0\u9ad8\u80a5\u6c83\u5ea6-\u80a5\u6599\u7c89\u3001\u5806\u80a5\u7c89",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHow==",
                    "title": "\u7c89\u672b\u7684\u529b\u91cf(Powder Power)",
                    "tooltip": "<strong>\u7c89\u672b\u7684\u529b\u91cf(Powder Power)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u82b1"
                },
                {
                    "name": "\u57fa\u7840\u5efa\u7b51\u4e4b\u6756",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1945.png",
                    "x": 60.0,
                    "y": 156.0,
                    "data": "\u77f3\u8d28\u5efa\u7b51\u4e4b\u6756\u7684\u552f\u4e00\u4f18\u70b9\u5c31\u662f\u4fbf\u5b9c.\u5b83\u65e0\u6cd5\u63d0\u4f9b\u592a\u591a\u7684\u6a21\u5f0f,\u4e5f\u4e0d\u80fd\u7528\u592a\u4e45.\u4f46\u4f60\u53ef\u4ee5\u6210\u5428\u5730\u5236\u4f5c\u5b83.</br></br>\u81f3\u4e8e\u4f7f\u7528,\u53ea\u9700\u7784\u51c6\u65b9\u5757(\u7269\u54c1\u680f\u4e2d\u6709\u66f4\u591a\u540c\u6837\u7684\u65b9\u5757),\u5c31\u4f1a\u663e\u793a\u51fa\u5c06\u4f1a\u6446\u653e\u7684\u8f6e\u5ed3,\u53f3\u952e\u5373\u53ef\u5b9e\u73b0\u6446\u653e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHmQ==",
                    "title": "\u57fa\u7840\u5efa\u7b51\u4e4b\u6756",
                    "tooltip": "<strong>\u57fa\u7840\u5efa\u7b51\u4e4b\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u6750\u6599"
                },
                {
                    "name": "\u4e00\u9879\u73b0\u4ee3\u79d1\u6280",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8955940478007720167.png",
                    "x": 156.0,
                    "y": 300.0,
                    "data": "\u6df7\u51dd\u571f.\u54e6\u4e0d\uff0c\u662f\u6c49\u9ebb\u6df7\u51dd\u571f!\u901a\u8fc7GTNH Chisel\u6a21\u7ec4\u5e26\u6765\u7684\u4e00\u9879\u5168\u65b0\u7684\u73b0\u4ee3\u6280\u672f.\u4e00\u5171\u670916\u79cd\u989c\u8272.</br></br>\u5728Chisel\u4e2d\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u6f02\u4eae\u7684\u65b9\u5757.\u53ea\u9700\u8981\u5728NEI\u4e2d\u8f93\u5165\"@chisel\"\u7136\u540e\u770b\u4e00\u770b.",
                    "quest_id": "VFVruPLHQAeDthuV-s7HGQ==",
                    "title": "\u4e00\u9879\u73b0\u4ee3\u79d1\u6280",
                    "tooltip": "<strong>\u4e00\u9879\u73b0\u4ee3\u79d1\u6280</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u690d\u7269\u7403"
                },
                {
                    "name": "\u74f7\u7816\u4f5c\u574a",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1963.png",
                    "x": 396.0,
                    "y": 204.0,
                    "data": "\u74f7\u7816\u4f5c\u574a\u53ef\u4ee5\u5c06\u5355\u8272\u9676\u74f7\u5757\u505a\u6210\u5404\u79cd\u6709\u6f02\u4eae\u56fe\u6848\u7684\u65b9\u5757.</br></br>\u4e0e\u540d\u5b57\u76f8\u53cd,\u5728\u8fd9\u91cc\u5904\u7406\u7684\u662f\u9676\u74f7\u5757,\u800c\u4e0d\u662f\u74f7\u7816.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHqw==",
                    "title": "\u74f7\u7816\u4f5c\u574a",
                    "tooltip": "<strong>\u74f7\u7816\u4f5c\u574a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9676\u74f7"
                },
                {
                    "name": "\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1094.png",
                    "x": 156.0,
                    "y": 396.0,
                    "data": "\u5728\u4f60\u5236\u9020\u4e86\u4e00\u53f0\u5207\u5272\u673a\u4e4b\u540e,\u4f60\u53ef\u4ee5\u5207\u5272\u4e00\u4e9b\u94bb\u77f3\u677f\u6765\u5236\u4f5c108\u683c\u7684\u5927\u53f7\u65b0\u7bb1\u5b50\u4e86!</br></br>[note]\u5c31\u50cf\u4e4b\u524d\u7684\u5176\u4ed6\u7bb1\u5b50\u4e00\u6837,\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5347\u7ea7\u7269\u54c1.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAERg==",
                    "title": "\u00a75\u00a7l\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae",
                    "tooltip": "<strong>\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5207\u5272\u6210\u7247"
                },
                {
                    "name": "\u9020\u4e2a\u5927\u5bb6\u4f19",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1983.png",
                    "x": 204.0,
                    "y": 60.0,
                    "data": "\u4f60\u53ef\u4ee5\u7684!\u5efa\u7b51\u6307\u5bfc\u4eea\u53ef\u4ee5\u4e3a\u4f60\u663e\u793a\u67d0\u4e9b\u7b80\u5355\u51e0\u4f55\u56fe\u5f62\u7684\u8f6e\u5ed3.\u4f60\u9700\u8981\u7ed9\u5b83\u7ea2\u77f3\u4fe1\u53f7\u624d\u80fd\u6fc0\u6d3b\u5b83.  \u8bd1\u8005\u6ce8:\u4f60\u53ef\u4ee5\u901a\u8fc7Shift+\u53f3\u952e\u5b83\u6765\u6539\u53d8\u5f62\u72b6,\u6216\u8005\u53f3\u952e\u5b83\u7684\u4e0d\u540c\u9762\u6765\u589e\u5927\u6216\u51cf\u5c0f\u8f6e\u5ed3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHvw==",
                    "title": "\u9020\u4e2a\u5927\u5bb6\u4f19",
                    "tooltip": "<strong>\u9020\u4e2a\u5927\u5bb6\u4f19</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!</br>\u4e0d\u7528\u9509\u5200\u4e86"
                },
                {
                    "name": "\u5f27\u5149\u706f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1464.png",
                    "x": 156.0,
                    "y": 252.0,
                    "data": "\u5f27\u5149\u706f\u662f\u4e00\u79cd\u975e\u5e38\u660e\u4eae\u7684\u706f. \u5b83\u662f\u6307\u5411\u6027\u7684\u2014\u2014\u2014\u2014\u610f\u5473\u7740\u5b83\u4f1a\u5728\u6240\u671d\u5411\u7684\u65b9\u5411\u6295\u5c04\u66f4\u4eae\u7684\u5149\u7ebf. \u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u6273\u624b\u65cb\u8f6c\u5176\u671d\u5411.</br></br>\u5305\u62ec\u5f27\u5149\u706f\u5728\u5185,\u9760\u8fd1\u5149\u6e90\u7684\u65b9\u5757\u7684\u4eae\u5ea6\u4e3a:</br></br>\u7ea2\u77f3\u706b\u628a:3-6</br>\u706b\u628a:9-12</br>\u8424\u77f3:10-13</br>\u5f27\u5149\u706f:13-14</br></br>\u5f27\u5149\u706f\u53ef\u4ee5\u7167\u4eae\u76f8\u5f53\u5927\u7684\u533a\u57df--\u4f8b\u5982\u6574\u4e2a\u623f\u95f4--\u4f7f\u5176\u5149\u7167\u7b49\u7ea7\u4e3a14:\u51e0\u4e4e\u548c\u767d\u663c\u65f6\u4e00\u6837\u660e\u4eae.</br></br>\u5f27\u5149\u706f\u4e5f\u5177\u6709\u4e3b\u52a8\u9a71\u9010\u602a\u7269\u7684\u6709\u8da3\u7279\u6027. \u5b83\u7684\u5149\u7ebf\u4e0d\u4ec5\u53ef\u4ee5\u9632\u6b62\u602a\u7269\u5728\u9644\u8fd1\u751f\u6210,\u800c\u4e14\u65e0\u6bd4\u660e\u4eae,\u4ee5\u81f3\u4e8e\u602a\u7269\u9760\u8fd1\u5b83\u4eec,\u5c31\u4f1a\u8f6c\u8eab\u8d70\u5f00. \u8fd9\u79cd\u602a\u7269\u9a71\u9010\u6548\u679c\u88ab\u8bc1\u5b9e\u53ef\u7528\u4e8e:\u50f5\u5c38\u3001\u9ab7\u9ac5\u3001\u722c\u884c\u8005\u3001\u8fdb\u5316\u7684\u50f5\u5c38\u3001\u8fdb\u5316\u7684\u9ab7\u9ac5\u3001\u8fdb\u5316\u7684\u722c\u884c\u8005. \u5b83\u4e5f\u9002\u7528\u4e8e\u5176\u4ed6\u7c7b\u578b\u7684\u602a\u7269(\u9700\u8981\u786e\u8ba4). \u4f46\u5b83\u5bf9\u8718\u86db(\u5b83\u4eec\u4e0d\u6015\u9633\u5149)\u6216boss\u602a\u6ca1\u6709\u5f71\u54cd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFuA==",
                    "title": "\u5f27\u5149\u706f",
                    "tooltip": "<strong>\u5f27\u5149\u706f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u706b\u7bad"
                },
                {
                    "name": "\u6709\u8da3\u7684\u805a\u4f1a\u65b9\u5757",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1943.png",
                    "x": 60.0,
                    "y": 60.0,
                    "data": "\u8fd9\u91cc\u8fd8\u6709\u4e00\u4e9b\u771f\u6b63\u65f6\u9ae6\u7684\u65b9\u5757.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHlw==",
                    "title": "\u6709\u8da3\u7684\u805a\u4f1a\u65b9\u5757",
                    "tooltip": "<strong>\u6709\u8da3\u7684\u805a\u4f1a\u65b9\u5757</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u597d\u7684\u51ff\u5b50"
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
                    "source": "\u82b1\u54e8\u7684\u6728\u5934",
                    "target": "\u8986\u76d6\u4e07\u7269"
                },
                {
                    "source": "\u66f4\u597d\u7684\u51ff\u5b50",
                    "target": "\u6211\u7684\u5bbf\u654c"
                },
                {
                    "source": "\u563f,DJ,\u6405\u8d77\u6765!",
                    "target": "\u57fa\u7840\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e"
                },
                {
                    "source": "\u690d\u7269\u5b66",
                    "target": "\u5bfb\u82b1"
                },
                {
                    "source": "\u9676\u74f7",
                    "target": "\u8fd9\u73a9\u610f\u8fd8\u80fd\u7528\u4e48?"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u96d5\u51ff\u4e07\u7269"
                },
                {
                    "source": "\u66f4\u597d\u7684\u51ff\u5b50",
                    "target": "\u96d5\u51ff\u4e07\u7269"
                },
                {
                    "source": "\u7ec8\u7ed3...",
                    "target": "\u7528\u7535\u7167\u4eae\u4e00\u5927\u7247\u533a\u57df"
                },
                {
                    "source": "\u7c89\u672b\u7684\u529b\u91cf(Powder Power)",
                    "target": "\u9664\u8349\u79cd\u82b1"
                },
                {
                    "source": "\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae",
                    "target": "\u6c34\u6676\u7bb1\u5b50"
                },
                {
                    "source": "\u7ec8\u7ed3...",
                    "target": "\u66f4\u597d\u7684EIO?"
                },
                {
                    "source": "\u563f,DJ,\u6405\u8d77\u6765!",
                    "target": "\u529f\u80fd\u6027\u7ea2\u77f3\u8ba1\u5212\u706f"
                },
                {
                    "source": "\u5408\u9002\u7684\u5de5\u5177",
                    "target": "\u4e00\u4e9b\u65b9\u4fbf\u7684\u7528\u6cd5"
                },
                {
                    "source": "\u5320\u9b42\u65b9\u5757",
                    "target": "\u5408\u9002\u7684\u5de5\u5177"
                },
                {
                    "source": "\u57fa\u7840\u6d41\u4f53\u56fa\u5316\u5668",
                    "target": "\u57fa\u5730\u592a\u5927\uff1f\u6211\u4e3a\u4f60\u51c6\u5907\u597d\u4e86\u4e00\u4e9b\u4e1c\u897f!"
                },
                {
                    "source": "\u563f,DJ,\u6405\u8d77\u6765!",
                    "target": "\u57fa\u5730\u592a\u5927\uff1f\u6211\u4e3a\u4f60\u51c6\u5907\u597d\u4e86\u4e00\u4e9b\u4e1c\u897f!"
                },
                {
                    "source": "\u8f6c\u554a\u8f6c\u554a\u8f6c\u554a\u8f6c...",
                    "target": "\u57fa\u5730\u592a\u5927\uff1f\u6211\u4e3a\u4f60\u51c6\u5907\u597d\u4e86\u4e00\u4e9b\u4e1c\u897f!"
                },
                {
                    "source": "\u96d5\u51ff\u4e07\u7269",
                    "target": "\u5c3d\u53ef\u80fd\u5feb\u5730\u51ff"
                },
                {
                    "source": "\u63d0\u53d6\u539f\u6599",
                    "target": "\u7cbe\u81f4\u706f\u7b3c"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u7cbe\u81f4\u706f\u7b3c"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u6808\u6865"
                },
                {
                    "source": "HV\u81ea\u52a8\u91c7\u77ff\u673a",
                    "target": "\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f"
                },
                {
                    "source": "\u9ed1\u66dc\u77f3\u7bb1\u5b50",
                    "target": "\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f"
                },
                {
                    "source": "\u7384\u94a2\u7bb1\u5b50",
                    "target": "\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f"
                },
                {
                    "source": "\u53c8\u591a\u4e8680\u79cd\u65b0\u989c\u8272\u7ed9\u4f60\u73a9",
                    "target": "\u4e94\u989c\u516d\u8272\u7684\u73bb\u7483"
                },
                {
                    "source": "\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae",
                    "target": "\u9ed1\u66dc\u77f3\u7bb1\u5b50"
                },
                {
                    "source": "\u82b1\u54e8\u7684\u6728\u5934",
                    "target": "\u9524\u5b50\u8d8a\u591a,\u9ebb\u70e6\u8d8a\u591a"
                },
                {
                    "source": "\u74f7\u7816\u4f5c\u574a",
                    "target": "\u9524\u5b50\u8d8a\u591a,\u9ebb\u70e6\u8d8a\u591a"
                },
                {
                    "source": "\u73bb\u7483\u4f5c\u574a",
                    "target": "\u9524\u5b50\u8d8a\u591a,\u9ebb\u70e6\u8d8a\u591a"
                },
                {
                    "source": "\u9664\u8349\u79cd\u82b1",
                    "target": "\u53c8\u591a\u4e8680\u79cd\u65b0\u989c\u8272\u7ed9\u4f60\u73a9"
                },
                {
                    "source": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3",
                    "target": "EIO\u7684\u706f"
                },
                {
                    "source": "\u53c8\u591a\u4e8680\u79cd\u65b0\u989c\u8272\u7ed9\u4f60\u73a9",
                    "target": "\u9676\u74f7"
                },
                {
                    "source": "\u9664\u8349\u79cd\u82b1",
                    "target": "\u8ffd\u8e2a\u4f60\u7684\u53d1\u73b0(\u82b1)"
                },
                {
                    "source": "\u7814\u94b5\u548c\u74f7\u7816",
                    "target": "\u74f7\u7816\u56fe\u6848"
                },
                {
                    "source": "\u66f4\u597d\u7684\u51ff\u5b50",
                    "target": "\u57fa\u7840\u65b9\u5757"
                },
                {
                    "source": "\u9664\u8349\u79cd\u82b1",
                    "target": "\u5c31\u50cf\u624b\u91cc\u62ff\u7740\u4e2a\u53bf\u6269\u5c55\u529e\u516c\u5ba4"
                },
                {
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#1",
                    "target": "\u95e8\u540e\u6709\u4ec0\u4e48#3?"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u66f4\u597d\u7684\u51ff\u5b50"
                },
                {
                    "source": "\u57fa\u7840\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e",
                    "target": "\u5e73\u9762\u706f"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u82b1\u54e8\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e"
                },
                {
                    "source": "\u51b2\u538b\u4e07\u7269",
                    "target": "\u82b1\u54e8\u7684\u7ea2\u77f3\u8ba1\u5212:\u7167\u660e"
                },
                {
                    "source": "\u4f4e\u9636\u5efa\u7b51\u4e4b\u6756",
                    "target": "\u4e2d\u9636\u5efa\u7b51\u4e4b\u6756"
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
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u8424\u77f3&\u51ff\u5b50\u706b\u628a,\u592a\u7a7a\u4f7f\u7528\u8bc4\u4f30"
                },
                {
                    "source": "\u5e0c\u671b\u4f60\u5df2\u7ecf\u51c6\u5907\u597d\u4e86!",
                    "target": "\u5320\u9b42\u65b9\u5757"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u8424\u77f32"
                },
                {
                    "source": "\u4e0b\u754c",
                    "target": "\u8424\u77f32"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u7406\u6e05\u695a\u4f60\u5bb6\u90a3\u5806\u610f\u5927\u5229\u9762\u5427"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u66f4\u50cf Ouch-i-tect"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u5de5\u4e1a3D\u6253\u5370\u673a"
                },
                {
                    "source": "\u6797\u4e1amod\u6838\u5fc3\u65b9\u5757",
                    "target": "\u82b1\u54e8\u7684\u6728\u5934"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!",
                    "target": "\u66f4\u5feb\u3001\u66f4\u597d\u3001\u66f4\"\u5efa\u7b51\""
                },
                {
                    "source": "\u9020\u4e2a\u5927\u5bb6\u4f19",
                    "target": "\u66f4\u5feb\u3001\u66f4\u597d\u3001\u66f4\"\u5efa\u7b51\""
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!",
                    "target": "\u8f7b\u677e\u5efa\u7b51"
                },
                {
                    "source": "\u7194\u878d\u805a\u4e59\u70ef",
                    "target": "\u4e0d\u60f3\u63a5\u53d7\u4f60\u673a\u5668\u63d0\u4f9b\u7684ASMR\u670d\u52a1?"
                },
                {
                    "source": "\u6211\u8be5\u5230\u54ea\u627e\u7425\u73c0?",
                    "target": "\u70b9\u4eae\u5b83!"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u4e0d\u7528\u7535,\u7167\u4eae\u4e00\u5927\u7247\u533a\u57df"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def",
                    "target": "\u4e0d\u7528\u7535,\u7167\u4eae\u4e00\u5927\u7247\u533a\u57df"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u7d27\u51d1\u7684\u5b58\u50a8"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u5988\u5988\u5feb\u770b!\u6ca1\u6709\u706b\u628a!"
                },
                {
                    "source": "\u563f,DJ,\u6405\u8d77\u6765!",
                    "target": "\u6df7\u51dd\u571f\u548cGT\u77f3\u5934"
                },
                {
                    "source": "\u66f4\u597d\u7684\u51ff\u5b50",
                    "target": "\u6df7\u51dd\u571f\u548cGT\u77f3\u5934"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u7b2c\u4e8c\u628a\u952f--\u624b\u952f"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u66f4\u52a0\u7d27\u51d1\u7684\u5b58\u50a8"
                },
                {
                    "source": "\u4e94\u989c\u516d\u8272\u7684\u73bb\u7483",
                    "target": "\u73bb\u7483\u4f5c\u574a"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u6728\u5320\u65b9\u5757"
                },
                {
                    "source": "\u7ed9\u7f8a\u7406\u7406\u53d1",
                    "target": "\u690d\u7269\u5b66"
                },
                {
                    "source": "\u57fa\u7840\u5efa\u7b51\u4e4b\u6756",
                    "target": "\u4f4e\u9636\u5efa\u7b51\u4e4b\u6756"
                },
                {
                    "source": "\u9676\u74f7",
                    "target": "\u7814\u94b5\u548c\u74f7\u7816"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u66f4\u52a0\u66f4\u52a0\u7d27\u51d1\u7684\u5b58\u50a8"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u94a2\u7bb1\u5b50?"
                },
                {
                    "source": "\u5bfb\u82b1",
                    "target": "\u7c89\u672b\u7684\u529b\u91cf(Powder Power)"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u57fa\u7840\u5efa\u7b51\u4e4b\u6756"
                },
                {
                    "source": "\u690d\u7269\u7403",
                    "target": "\u4e00\u9879\u73b0\u4ee3\u79d1\u6280"
                },
                {
                    "source": "\u9676\u74f7",
                    "target": "\u74f7\u7816\u4f5c\u574a"
                },
                {
                    "source": "\u5207\u5272\u6210\u7247",
                    "target": "\u94bb\u77f3\u7bb1\u5b50...\u54e6,\u95ea\u95ea\u53d1\u4eae"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u9020\u4e2a\u5927\u5bb6\u4f19"
                },
                {
                    "source": "\u4e0d\u7528\u9509\u5200\u4e86",
                    "target": "\u9020\u4e2a\u5927\u5bb6\u4f19"
                },
                {
                    "source": "3\u9636\u706b\u7bad",
                    "target": "\u5f27\u5149\u706f"
                },
                {
                    "source": "\u66f4\u597d\u7684\u51ff\u5b50",
                    "target": "\u6709\u8da3\u7684\u805a\u4f1a\u65b9\u5757"
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
    