
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
                    "name": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1631.png",
                    "x": 60.0,
                    "y": 192.0,
                    "data": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u544a\u8bc9\u7ba1\u9053\u7cfb\u7edf\u4e2d\u7684\u6bcf\u4e2a\u8bbe\u5907,\u6b64\u82af\u7247\u6240\u8fde\u63a5\u7684\u5e93\u5b58\u4e2d\u6709\u54ea\u4e9b\u7269\u54c1,\u5982\u679c\u6709\u8bbe\u5907\u9700\u8981\u4ec0\u4e48,\u5b83\u4f1a\u53d1\u9001\u7ed9\u90a3\u4e9b\u8bbe\u5907. \u53f3\u952e\u5355\u51fb\u5b83\u4ee5\u8bbe\u7f6e\u8981\u4f20\u8f93\u7684\u7269\u54c1. \u5982\u679c\u7559\u7a7a\u5e76\u8bbe\u7f6e\u4e3a\u9ed1\u540d\u5355\u6a21\u5f0f(*blacklisted),\u5b83\u5c06\u4f20\u8f93\u6240\u6709\u7269\u54c1. \u5efa\u8bae\u5c06\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u4e0e\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247\u7ed3\u5408\u4f7f\u7528. \u8fd9\u6837\u6ea2\u51fa\u7684\u7269\u54c1\u4f1a\u5b58\u653e\u5165\u7f13\u5b58\u7bb1\u5b50\u4e2d,\u4f46\u662f\u4f60\u7684\u7cfb\u7edf\u7684\u5176\u4f59\u8bbe\u5907\u4ecd\u53ef\u4f7f\u7528\u8fd9\u4e9b\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGXw==",
                    "title": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247",
                    "tooltip": "<strong>\u7269\u54c1\u5e7f\u64ad\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u62bd\u53d6\u82af\u7247"
                },
                {
                    "name": "\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1628.png",
                    "x": 24.0,
                    "y": 96.0,
                    "data": "\u8be5\u82af\u7247\u53ef\u5c06\u7269\u54c1\u5b58\u50a8\u5230\u8fde\u63a5\u7684\u5e93\u5b58(\u5982\u7bb1\u5b50)\u4e2d.\u5b83\u4e3a\u6ca1\u6709\u5176\u4ed6\u5730\u65b9\u53ef\u53bb\u7684\u7269\u54c1\u6307\u5b9a\u5b58\u50a8\u7a7a\u95f4. \u5f3a\u70c8\u5efa\u8bae\u5728\u6bcf\u4e2a\u7ba1\u9053\u7cfb\u7edf\u4e2d\u90fd\u6709\u4e00\u4e2a\u9ed8\u8ba4\u5b58\u50a8\u7a7a\u95f4,\u5426\u5219\u4f1a\u53d1\u751f\u4e0d\u597d\u7684\u4e8b\u60c5. \u6700\u9002\u5408\u642d\u914d\u4e00\u4e9b\u5927\u7bb1\u5b50(\u5982\u94bb\u77f3\u7bb1\u5b50).</br></br>\u770b\u8d77\u6765\u8fd9\u73a9\u610f\u6709\u70b9bug,\u6240\u4ee5\u5148\u505a\u4e00\u4e2a\u8bd5\u8bd5,\u522b\u4e00\u4e0b\u505a\u592a\u591a.</br></br>\u4f60\u53ef\u80fd\u5fc5\u987b\u7528\u4e00\u4e2a\u666e\u901a\u7684\u7269\u54c1\u54cd\u5e94\u82af\u7247\u7136\u540e\u624b\u52a8\u6dfb\u52a0\u90a3\u4e9b\u53ef\u80fd\u8fc7\u8f7d\u7684\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGXA==",
                    "title": "\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247",
                    "tooltip": "<strong>\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82af\u7247"
                },
                {
                    "name": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/111.png",
                    "x": 324.0,
                    "y": 108.0,
                    "data": "\u4e3a\u4e86\u7ec4\u88c5\u6216\u5b9a\u5236\u4f60\u7684\u77ff\u8f66,\u4f60\u9700\u8981\u4e00\u4e2a\u8f66\u58f3\u6765\u9644\u52a0\u6240\u9700\u7684\u5347\u7ea7.\u6728\u5236\u7684\u53ef\u4ee5\u7528\u4e8e\u975e\u5e38\u7b80\u5355\u7684\u5e94\u7528,\u4f46\u8981\u79cd\u690d\u5c0f\u9ea6\u6216\u6811\u6728,\u4f60\u81f3\u5c11\u9700\u8981\u4e00\u4e2a\u94c1\u7684.</br></br>\u00a7c\u00a7l\u8b66\u544a: \u00a7r\u00a7c\u4e0d\u53d7\u4fdd\u62a4\u7684\u77ff\u8f66\u53ef\u80fd\u4f1a\u88ab\u96f7\u7535\u51fb\u4e2d\u800c\u8131\u8f68.\u7528\u73bb\u7483(\u6216\u4efb\u4f55\u56fa\u4f53\u65b9\u5757)\u906e\u76d6\u8be5\u533a\u57df,\u4ee5\u9632\u77ff\u8f66\u6d88\u5931.</br></br>\u53e6\u5916,\u8bf7\u786e\u4fdd\u5c06\u77ff\u8f66\u653e\u5728\u4e00\u4e2a\u533a\u5757\u4e2d,\u6216\u4f7f\u7528\u8986\u76d6\u6574\u4e2a\u77ff\u8f66\u5de5\u4f5c\u533a\u57df\u7684\u533a\u5757\u52a0\u8f7d\u5668.\u52a0\u8f7d/\u5378\u8f7d\u533a\u5757\u53ef\u80fd\u4f1a\u5bfc\u81f4\u77ff\u8f66\u6d88\u5931\u6216\u91cd\u590d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAbw==",
                    "title": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "tooltip": "<strong>\u7b80\u5355\u7684\u77ff\u8f66</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
                },
                {
                    "name": "\u7269\u54c1\u5408\u6210\u82af\u7247",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1633.png",
                    "x": 60.0,
                    "y": 240.0,
                    "data": "\u7269\u54c1\u5408\u6210\u82af\u7247\u5b8c\u5168\u7b26\u5408\u5b83\u7684\u540d\u5b57.\u5b83\u4e0d\u4ec5\u4ec5\u9002\u7528\u4e8e\u5de5\u4f5c\u53f0\u5408\u6210.\u4f60\u8fd8\u53ef\u4ee5\u5c06\u5b83\u4e0eGT\u673a\u5668\u4e00\u8d77\u4f7f\u7528.\u53ea\u9700\u5728\u5b83\u7684\u8bbe\u7f6e\u91cc\"Matrix\"\u9009\u9879,\u7c7b\u4f3cAE\u6837\u677f\u7ec8\u7aef,\u5de6\u4fa7\u4e3a\u5de5\u4f5c\u53f0\u5408\u6210\u8868\u6216\u673a\u5668\u8f93\u5165,\u53f3\u4fa7\u4e3a\u6210\u54c1\u8f93\u51fa. \u5b83\u4eec\u7684\u91cd\u8981\u7528\u9014\u4e4b\u4e00\u5c31\u662f\u4e0e\u6d41\u4f53\u50a8\u7f50\u6216\u8d85\u7ea7\u7f38\u4e00\u8d77\u4f7f\u7528,\u4ee5\u586b\u5145\u5355\u5143. </br></br></br>[note]\u867d\u7136\u8fd9\u4e9b\u82af\u7247\u5bf9\u4f60\u7684\u903b\u8f91\u7ba1\u9053\u7cfb\u7edf\u5f88\u6709\u7528,\u4f46\u5b83\u5f88\u5feb\u5c31\u4f1a\u53d8\u6210\u4e00\u4e2a\u5ef6\u8fdf\u5236\u9020\u673a,\u6240\u4ee5\u5c0f\u5fc3\u4f7f\u7528.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGYQ==",
                    "title": "\u7269\u54c1\u5408\u6210\u82af\u7247",
                    "tooltip": "<strong>\u7269\u54c1\u5408\u6210\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u5e7f\u64ad\u82af\u7247"
                },
                {
                    "name": "\u50a8\u5b58\u6db2\u4f53",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1637.png",
                    "x": 156.0,
                    "y": 240.0,
                    "data": "\u9996\u5148,\u6211\u4eec\u5e94\u8be5\u5728\u4e00\u4e9b\u5730\u65b9\u5b58\u653e\u6211\u4eec\u5c06\u4f7f\u7528\u7684\u6240\u6709\u6db2\u4f53. \u9700\u89813\u4e2a\u8d85\u7ea7\u7f38.</br></br>\u5982\u679c\u4f60\u5bf9\u5b83\u4eec\u7684\u7528\u9014\u611f\u5174\u8da3:</br>1\u4e3a\u6c27\u6c14</br>1\u4e3a\u6c22\u6c14</br>1\u4e3a\u786b\u9178",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGZQ==",
                    "title": "\u50a8\u5b58\u6db2\u4f53",
                    "tooltip": "<strong>\u50a8\u5b58\u6db2\u4f53</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u77f3\u6cb9\u63d0\u7eaf</br>\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316"
                },
                {
                    "name": "\u4ea4\u53c9\u70b9",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1624.png",
                    "x": 108.0,
                    "y": 12.0,
                    "data": "\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u5904\u7406\u4ea4\u53c9\u70b9\u5462\uff1f \u6211\u4eec\u4f7f\u7528\u8fd9\u79cd\u4ea4\u9519\u7ba1\u9053.\u5b83\u4eec\u5f88\u806a\u660e,\u5b83\u4eec\u4f1a\u628a\u6240\u6709\u4e1c\u897f\u9001\u5230\u9700\u8981\u53bb\u7684\u5730\u65b9,\u6240\u4ee5\u5982\u679c\u4f60\u5efa\u7acb\u4e00\u4e2a\u7ba1\u9053\u7cfb\u7edf,\u4e00\u5b9a\u8981\u628a\u8fd9\u79cd\u7ba1\u9053\u653e\u5728\u4ea4\u53c9\u70b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGWA==",
                    "title": "\u4ea4\u53c9\u70b9",
                    "tooltip": "<strong>\u4ea4\u53c9\u70b9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8ba9\u6211\u4eec\u505a\u4e9b\u7ba1\u9053"
                },
                {
                    "name": "\u8fdb\u4e00\u6b65\u81ea\u52a8\u5316",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1552.png",
                    "x": 264.0,
                    "y": 12.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u4ece\u8d27\u7269\u7ba1\u7406\u5668\u4e2d\u88c5\u8f7d\u6216\u5378\u8f7d\u8bb8\u591a\u4e0d\u540c\u7684\u7269\u54c1,\u7ba1\u9053\u53ef\u80fd\u4f1a\u53d8\u5f97\u975e\u5e38\u6df7\u4e71. \u4f60\u53ef\u4ee5\u5c06\u5916\u90e8\u5206\u914d\u5668\u653e\u7f6e\u5728\u8d27\u7269\u7ba1\u7406\u5668\u65c1\u8fb9,\u5b83\u5c06\u5e2e\u52a9\u4f60\u8bbf\u95ee\u8d27\u7269\u7ba1\u7406\u5668,\u53ef\u5728\u5206\u914d\u5668GUI\u4e2d\u6307\u5b9a\u7684\u4e0d\u540c\u680f\u4f4d.\u62bd\u51fa\u7269\u54c1\u975e\u5e38\u65b9\u4fbf!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGEA==",
                    "title": "\u8fdb\u4e00\u6b65\u81ea\u52a8\u5316",
                    "tooltip": "<strong>\u8fdb\u4e00\u6b65\u81ea\u52a8\u5316</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u81ea\u52a8\u88c5(\u5378)\u8f7d"
                },
                {
                    "name": "\u5c0f\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1641.png",
                    "x": 156.0,
                    "y": 192.0,
                    "data": "\u8fd9\u662f\u5236\u4f5c\u6240\u6709\u82af\u7247\u7684\u5c0f\u5956\u52b1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGaQ==",
                    "title": "\u5c0f\u5956\u52b1",
                    "tooltip": "<strong>\u5c0f\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247"
                },
                {
                    "name": "\u66f4\u591a\u7684\u6811\u79cd",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1551.png",
                    "x": 324.0,
                    "y": 12.0,
                    "data": "\u6807\u51c6\u7684\u6728\u6750\u5207\u5272\u673a(\u53f2\u8482\u592b\u77ff\u8f66)\u53ea\u80fd\u780d\u4f10(\u548c\u91cd\u65b0\u79cd\u690d)\u539f\u7248\u6811. \u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5176\u4ed6mod\u7684\u6811\u82d7,\u90a3\u4e48\u8fd9\u4e2a\u63d2\u4ef6\u4f1a\u6d3e\u4e0a\u7528\u573a. \u8c01\u77e5\u9053-\u4e5f\u8bb8\u4f60\u5df2\u7ecf\u538c\u5026\u4e86\u7528\u6728\u9f99\u5934\u70b9\u51fb\u6a61\u80f6\u6811.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGDw==",
                    "title": "\u66f4\u591a\u7684\u6811\u79cd",
                    "tooltip": "<strong>\u66f4\u591a\u7684\u6811\u79cd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u77ff\u8f66\u6a21\u5757:\u4f10\u6728</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u66f4\u591a\u7684\u5b58\u50a8\u7a7a\u95f4",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1211.png",
                    "x": 432.0,
                    "y": 108.0,
                    "data": "\u77ff\u8f66\u4e0d\u4f46\u53ef\u4ee5\u4fa7\u6302\u7bb1\u5b50,\u4e0a\u9762\u3001\u524d\u9762\u548c\u77ff\u8f66\u5185\u90e8\u90fd\u53ef\u4ee5\u589e\u52a0\u5b58\u50a8\u7a7a\u95f4. \u4e0d\u8fc7\u6709\u4e9b\u5730\u65b9\u662f\u9884\u7559\u7ed9\u5de5\u5177\u7684,\u6240\u4ee5\u7bb1\u5b50\u65e0\u6cd5\u653e\u5230\u90a3\u91cc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEuw==",
                    "title": "\u77ff\u8f66\u6a21\u5757:\u66f4\u591a\u7684\u5b58\u50a8\u7a7a\u95f4",
                    "tooltip": "<strong>\u77ff\u8f66\u6a21\u5757:\u66f4\u591a\u7684\u5b58\u50a8\u7a7a\u95f4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u77ff\u8f66\u6a21\u5757:\u50a8\u5b58"
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u6316\u6398",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1209.png",
                    "x": 264.0,
                    "y": 60.0,
                    "data": "\u60f3\u8bd5\u4e00\u8bd5\u8ba9\u77ff\u8f66\u6765\u6316\u6398\u4e48\uff1f\u7528\u94c1\u505a\u7684\u94bb\u5934\u662f\u6700\u4fbf\u5b9c\u7684\u4ee3\u66ff\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEuQ==",
                    "title": "\u77ff\u8f66\u6a21\u5757:\u6316\u6398",
                    "tooltip": "<strong>\u77ff\u8f66\u6a21\u5757:\u6316\u6398</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u7684\u77ff\u8f66"
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u5730\u70ed\u5f15\u64ce",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1210.png",
                    "x": 384.0,
                    "y": 156.0,
                    "data": "\u4f60\u7684\u77ff\u8f66\u9700\u8981\u52a8\u529b. \u77ff\u8f66\u53ef\u4ee5\u4f7f\u7528\u7164\u3001\u592a\u9633\u80fd\u6216\u8005\u5ca9\u6d46\u6765\u4f9b\u7535. \u8bd5\u7740\u7528\u5ca9\u6d46\u6765\u9a71\u52a8\u77ff\u8f66\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEug==",
                    "title": "\u77ff\u8f66\u6a21\u5757:\u5730\u70ed\u5f15\u64ce",
                    "tooltip": "<strong>\u77ff\u8f66\u6a21\u5757:\u5730\u70ed\u5f15\u64ce</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u7684\u77ff\u8f66"
                },
                {
                    "name": "\u81ea\u52a8\u88c5(\u5378)\u8f7d",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/108.png",
                    "x": 216.0,
                    "y": 60.0,
                    "data": "\u4f60\u53ef\u4ee5\u624b\u52a8\u586b\u5145\u548c\u6e05\u7a7a\u4f60\u7684\u77ff\u8f66,\u4f46\u81ea\u52a8\u5316\u8f6c\u79fb\u7269\u54c1\u66f4\u65b9\u4fbf,\u4e0d\u662f\u5417\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAbA==",
                    "title": "\u81ea\u52a8\u88c5(\u5378)\u8f7d",
                    "tooltip": "<strong>\u81ea\u52a8\u88c5(\u5378)\u8f7d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
                },
                {
                    "name": "\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1629.png",
                    "x": 144.0,
                    "y": 96.0,
                    "data": "\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247\u529f\u80fd\u4e0e\u7269\u54c1\u54cd\u5e94\u82af\u7247\u7c7b\u4f3c,\u4f46\u4e0d\u662f\u7531\u4f60\u8bbe\u7f6e\u5b83\u63a5\u53d7\u7684\u7269\u54c1,\u5b83\u4f1a\u63a5\u53d7\u7bb1\u5b50\u4e2d\u5b58\u5728\u7684\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGXQ==",
                    "title": "\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "tooltip": "<strong>\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u54cd\u5e94\u82af\u7247"
                },
                {
                    "name": "\u5bf9\u8131\u786b\u81ea\u52a8\u5316\u7684\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1642.png",
                    "x": 12.0,
                    "y": 288.0,
                    "data": "\u5982\u679c\u4f60\u5df2\u7ecf\u6b63\u786e\u5730\u5b8c\u6210\u4e86\u6240\u6709\u4e8b\u60c5,\u90a3\u4e48\u6700\u5927\u7684\u597d\u5904\u5c31\u662f\u8ba9\u4f60\u7684\u4e1c\u897f\u81ea\u52a8\u5316\u4e86.\u4f46\u662f\u8fd9\u91cc\u8fd8\u6709\u66f4\u591a\u7684\u5956\u52b1. </br></br>\u540e\u9762\u51e0\u6b65\u5c31\u662f\u81ea\u52a8\u5316\u5236\u9020\u805a\u4e59\u70ef\u548c\u785d\u9178. </br></br>\u4f7f\u7528\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247,\u4f60\u53ef\u4ee5\u968f\u65f6\u4fdd\u7559\u4e00\u5b9a\u6570\u91cf\u7684\u7269\u54c1,\u5f53\u4f60\u53d6\u51fa\u5355\u5143,\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\u65f6,\u4f60\u7684\u81ea\u52a8\u5316\u7cfb\u7edf\u5c06\u81ea\u52a8\u751f\u4ea7\u66f4\u591a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGag==",
                    "title": "\u5bf9\u8131\u786b\u81ea\u52a8\u5316\u7684\u5956\u52b1",
                    "tooltip": "<strong>\u5bf9\u8131\u786b\u81ea\u52a8\u5316\u7684\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5904\u7406\u786b\u5316\u6c22"
                },
                {
                    "name": "\u9ad8\u7ea7\u63a2\u6d4b\u8f68\u9053",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1553.png",
                    "x": 216.0,
                    "y": 12.0,
                    "data": "\u6709\u4e86\u8d27\u7269\u7ba1\u7406\u5668\u4e4b\u540e,\u8fd8\u9700\u8981\u4e00\u4e2a\u7279\u5b9a\u7684\u8f68\u9053,\u77ff\u8f66\u5c31\u53ef\u4ee5\u4e0e\u4e4b\u4ea4\u4e92. \u53ea\u9700\u5c06\u9ad8\u7ea7\u63a2\u6d4b\u8f68\u9053\u653e\u5728\u8d27\u7269\u7ba1\u7406\u5668\u65c1\u8fb9,\u6839\u636e\u5176\u6240\u5728\u4fa7\u9762\u7684\u989c\u8272,\u4f60\u5fc5\u987b\u8c03\u6574\u8d27\u7269\u7ba1\u7406\u5668GUI\u4e2d\u7684\u8bbe\u7f6e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGEQ==",
                    "title": "\u9ad8\u7ea7\u63a2\u6d4b\u8f68\u9053",
                    "tooltip": "<strong>\u9ad8\u7ea7\u63a2\u6d4b\u8f68\u9053</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u81ea\u52a8\u88c5(\u5378)\u8f7d"
                },
                {
                    "name": "\u7269\u54c1\u62bd\u53d6\u82af\u7247",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1630.png",
                    "x": 60.0,
                    "y": 144.0,
                    "data": "\u8be5\u82af\u7247\u5c06\u4ece\u8fde\u63a5\u5e93\u5b58\u4e2d\u62bd\u53d6\u7269\u54c1. \u7136\u540e,\u62bd\u53d6\u7684\u7269\u54c1\u4f1a\u67e5\u627e\u5e26\u6709\u7269\u54c1\u54cd\u5e94\u82af\u7247\u7684\u7ba1\u9053,\u5176\u4e2d\u662f\u5426\u6709\u53ef\u7528\u7684\u7a7a\u95f2\u7a7a\u95f4.\u5982\u679c\u5b83\u4eec\u6ca1\u6709\u627e\u5230,\u5b83\u4eec\u5c06\u8f6c\u5230\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247\u6240\u5728\u7684\u9ed8\u8ba4\u5b58\u50a8\u7bb1. \u5982\u679c\u4f60\u60f3\u8981\u62bd\u53d6\u6240\u6709\u7269\u54c1,\u8bf7\u5c06\u8fc7\u6ee4(Filter)\u7559\u7a7a\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9ed1\u540d\u5355\u6a21\u5f0f(*blacklisted).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGXg==",
                    "title": "\u7269\u54c1\u62bd\u53d6\u82af\u7247",
                    "tooltip": "<strong>\u7269\u54c1\u62bd\u53d6\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u54cd\u5e94\u82af\u7247</br>\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247"
                },
                {
                    "name": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1632.png",
                    "x": 108.0,
                    "y": 192.0,
                    "data": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247\u4f1a\u67e5\u770b\u6240\u8fde\u63a5\u7684\u5e93\u5b58\u5e76\u4fdd\u7559\u4e00\u5b9a\u6570\u91cf\u7684\u7269\u54c1. \u5982\u679c\u8be5\u7269\u54c1\u88ab\u79fb\u9664,\u5982\u679c\u7cfb\u7edf\u5185\u6709\u8fd9\u79cd\u7269\u54c1,\u5e76\u4e14\u53ef\u4ee5\u88ab\u53d1\u9001,\u5b83\u5c06\u6bcf\u9694\u51e0\u79d2\u949f\u5c31\u5411\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u53d1\u9001\u8bf7\u6c42. \u57fa\u672c\u4e0a\u5c31\u50cf\u4e00\u4e2a\u8ba8\u538c\u7684\u5b69\u5b50.</br></br>\u4e0d\u8fc7\u5b83\u771f\u7684\u5f88\u6709\u7528. \u4f8b\u5982\u4f60\u60f3\u8981\u4e00\u4e2a\u603b\u4f1a\u670964\u5757\u5706\u77f3\u548c\u6ce5\u571f\u7684\u7bb1\u5b50,\u5982\u679c\u4f60\u62ff\u8d70\u5b83\u4eec\u4f1a\u9a6c\u4e0a\u8865\u5145\uff1f\u8fd9\u5bb6\u4f19\u5c31\u975e\u5e38\u9002\u5408\u8fd9\u4efd\u5de5\u4f5c. \u8fd9\u5bf9\u4e8e\u4e00\u4e9b\u673a\u5668\u4fdd\u7559\u5e93\u5b58\u6765\u8bf4\u975e\u5e38\u68d2.  \u8fde\u63a5\u5230GT\u673a\u5668\u65f6,3x3\u7684\u5de6\u4e0a\u69fd\u76f8\u5f53\u4e8e\u673a\u5668\u7684\u5de6\u4fa7\u69fd.  \u60f3\u8981\u5316\u5b66\u53cd\u5e94\u91dc\u59cb\u7ec8\u4fdd\u75593\u4e2a\u6c22\u5355\u5143,\u4f60\u53ea\u9700\u8981\u52a0\u5165\u6c2e\u5c31\u53ef\u4ee5\u5236\u4f5c\u6c28\u4e48,\u5b83\u5c31\u5f88\u5408\u9002. \u8fd9\u91cc\u6709\u4e9b\u82af\u7247\u7ed9\u4f60.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGYA==",
                    "title": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247",
                    "tooltip": "<strong>\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u5e7f\u64ad\u82af\u7247"
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u7164\u70ad\u5f15\u64ce",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/107.png",
                    "x": 324.0,
                    "y": 156.0,
                    "data": "\u4f60\u7684\u77ff\u8f66\u663e\u7136\u9700\u8981\u80fd\u91cf.\u77ff\u8f66\u53ef\u4ee5\u901a\u8fc7\u592a\u9633\u80fd\u6216\u5ca9\u6d46\u4f9b\u80fd.\u4f46\u73b0\u5728\u4f60\u53ea\u80fd\u7528\u7b80\u5355\u7684\u7164\u70ad\u5f15\u64ce.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAaw==",
                    "title": "\u77ff\u8f66\u6a21\u5757:\u7164\u70ad\u5f15\u64ce",
                    "tooltip": "<strong>\u77ff\u8f66\u6a21\u5757:\u7164\u70ad\u5f15\u64ce</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u7684\u77ff\u8f66"
                },
                {
                    "name": "\u7b80\u5355\u7684\u5b58\u50a8\u7cfb\u7edf",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1635.png",
                    "x": 12.0,
                    "y": 240.0,
                    "data": "[warn]\u5728\u62bd\u5c49\u7ba1\u7406\u5668\u4e0a\u4f7f\u7528\u5927\u91cf\u7684\u8f93\u5165/\u8f93\u51fa\u8bbe\u5907\u5c06\u4f1a\u4e25\u91cd\u5f71\u54cdTPS! \u5982\u679c\u4f60\u5728\u516c\u5171\u670d\u52a1\u5668\u4e0a,\u8bf7\u52ff\u4f7f\u7528\u62bd\u5c49\u9635\u5217,\u5426\u5219\u4f60\u7684\u62bd\u5c49\u9635\u5217\u53ef\u80fd\u4f1a\u88ab\u5220\u9664,\u800c\u4f60\u4f1a\u88ab\u5c01\u7981.[/warn]</br></br>\u662f\u65f6\u5019\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u7cfb\u7edf\u6765\u5b58\u50a8\u4f60\u7684\u4e1c\u897f\u4e86. \u653e\u4e0b\u62bd\u5c49\u7ba1\u7406\u5668\u5e76\u5c06\u62bd\u5c49\u653e\u5728\u5176\u5468\u56f4.\u5c06\u8def\u7531\u63a5\u53e3\u7ba1\u9053\u8fde\u63a5\u5230\u62bd\u5c49\u7ba1\u7406\u5668,\u5e76\u5c06\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247\u548c\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u653e\u5165\u5176\u4e2d.\u4e0d\u8981\u5fd8\u8bb0\u8bbe\u7f6e\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u4f20\u8f93\u6240\u6709\u7269\u54c1(\u5c06\u8fc7\u6ee4(Filter)\u7559\u7a7a\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9ed1\u540d\u5355\u6a21\u5f0f(*blacklisted)). \u73b0\u5728\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u7bb1\u5b50,\u8fde\u63a5\u7740\u8def\u7531\u53e3\u7ba1\u9053\u4e14\u7ba1\u9053\u5df2\u63d2\u5165\u7269\u54c1\u62bd\u53d6\u82af\u7247,\u4f60\u5c31\u53ef\u4ee5\u4ece\u4f60\u7684\u5b58\u50a8\u7cfb\u7edf\u4e2d\u8bf7\u6c42\u7269\u54c1,\u800c\u4f60\u653e\u5165\u7684\u6240\u6709\u7269\u54c1\u90fd\u5c06\u88ab\u5206\u7c7b\u5b58\u5165\u5b58\u50a8\u7cfb\u7edf\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGYw==",
                    "title": "\u7b80\u5355\u7684\u5b58\u50a8\u7cfb\u7edf",
                    "tooltip": "<strong>\u7b80\u5355\u7684\u5b58\u50a8\u7cfb\u7edf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8def\u7531\u9700\u6c42\u7ba1\u9053"
                },
                {
                    "name": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2718.png",
                    "x": 324.0,
                    "y": 204.0,
                    "data": "\u5982\u679c\u4f60\u6b63\u5728\u7528,\u90a3\u4e48\u5b83\u4eec\u5c31\u4e0d\u9519,\u6211\u731c. \u81f3\u5c11\u542c\u8d77\u6765\u50cf\u8fd9\u4e48\u56de\u4e8b?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKng==",
                    "title": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?",
                    "tooltip": "<strong>\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf</br>\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce</br>\u77ff\u8f66\u6a21\u5757:\u5730\u70ed\u5f15\u64ce</br>\u77ff\u8f66\u6a21\u5757:\u7164\u70ad\u5f15\u64ce"
                },
                {
                    "name": "\u8def\u7531\u9700\u6c42\u7ba1\u9053",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1634.png",
                    "x": 12.0,
                    "y": 192.0,
                    "data": "\u8fd9\u4e2a\u7ba1\u9053\u8ba9\u4f60\u4ece\u7cfb\u7edf\u4e2d\u8bf7\u6c42\u7269\u54c1.\u5b83\u53ef\u663e\u793a\u7cfb\u7edf\u4e2d\u6240\u6709\u53ef\u7528\u7684\u7269\u54c1(\u5305\u62ec\u7269\u54c1\u5e7f\u64ad\u82af\u7247,\u4ee5\u53ca\u53ef\u4ee5\u901a\u8fc7\u7269\u54c1\u5408\u6210\u82af\u7247\u5408\u6210\u7684\u4ea7\u7269).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGYg==",
                    "title": "\u8def\u7531\u9700\u6c42\u7ba1\u9053",
                    "tooltip": "<strong>\u8def\u7531\u9700\u6c42\u7ba1\u9053</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u5e7f\u64ad\u82af\u7247"
                },
                {
                    "name": "\u82af\u7247",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1626.png",
                    "x": 60.0,
                    "y": 60.0,
                    "data": "\u73b0\u5728\u4f60\u9700\u8981\u5236\u4f5c\u4e00\u4e9b\u82af\u7247\u7528\u4e8e\u90a3\u4e9b\u63a5\u53e3\u7ba1\u9053. \u8fd9\u4e9b\u82af\u7247\u8fd8\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528,\u4f46\u8fd9\u662f\u5236\u4f5c\u5176\u4ed6\u82af\u7247\u7684\u6750\u6599.</br></br>\u73b0\u5728\u662f\u65f6\u5019\u627e\u627eIC\u4f5c\u7269\u4ee5\u83b7\u53d6\u4f60\u6240\u9700\u7684\u67d3\u6599\u4e86.</br></br>[note]\u5982\u679cNEI\u5de6\u4fa7\u7684\u4e66\u7b7e\u680f\u6321\u4f4f\u4f60\u4e86,\u53ef\u4ee5\u5c06\u5176\u5173\u95ed(O),\u76f4\u5230\u6211\u4eec\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGWg==",
                    "title": "\u82af\u7247",
                    "tooltip": "<strong>\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0e\u4e1c\u897f\u4e92\u52a8"
                },
                {
                    "name": "\u8ba9\u6211\u4eec\u505a\u4e9b\u7ba1\u9053",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1623.png",
                    "x": 156.0,
                    "y": 12.0,
                    "data": "\u9996\u5148,\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u7ba1\u9053\u6765\u8fde\u63a5\u5404\u79cd\u4e1c\u897f. \u4e0d\u8981\u5728\u4ea4\u53c9\u70b9\u4f7f\u7528\u8fd9\u4e9b\u7ba1\u9053,\u5426\u5219\u7269\u54c1\u5c06\u968f\u673a\u9009\u62e9\u54ea\u6761\u8def\u5f84,\u800c\u4f60\u663e\u7136\u4e0d\u5e0c\u671b\u8fd9\u6837.</br></br>[note]\u8bf7\u6ce8\u610f,\u7ea2\u77f3\u8ba1\u5212\u7684\u81ea\u52a8\u5316\u53ef\u80fd\u4f1a\u9020\u6210\u5ef6\u8fdf,\u6240\u4ee5\u5728\u670d\u52a1\u5668\u4e0a\u5c3d\u91cf\u4e0d\u8981\u5927\u89c4\u6a21\u4f7f\u7528,\u7b49\u5230\u89e3\u9501AE\u540e\u518d\u5f00\u59cb\u4f60\u7684\u5168\u9762\u81ea\u52a8\u5316\u8ba1\u5212\u5427. \u5728\u5355\u673a\u7684\u8bdd\u5c31\u968f\u4f60\u4e86,\u4f46\u522b\u5fd8\u4e86AE\u7684\u529f\u80fd\u66f4\u52a0\u5f3a\u5927.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGVw==",
                    "title": "\u8ba9\u6211\u4eec\u505a\u4e9b\u7ba1\u9053",
                    "tooltip": "<strong>\u8ba9\u6211\u4eec\u505a\u4e9b\u7ba1\u9053</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def"
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u519c\u4e1a",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/109.png",
                    "x": 384.0,
                    "y": 60.0,
                    "data": "\u4e0d\u5e78\u7684\u662f,\u57fa\u7840\u519c\u4e1a\u6a21\u5757\u9664\u4e86\u5c0f\u9ea6\u4ee5\u5916\u4ec0\u4e48\u90fd\u4e0d\u80fd\u79cd.\u5b83\u5e76\u4e0d\u8d35,\u4e5f\u8bb8\u662f\u6700\u4fbf\u5b9c\u7684\u81ea\u52a8\u5316\u98df\u7269\u751f\u4ea7\u65b9\u6cd5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAbQ==",
                    "title": "\u77ff\u8f66\u6a21\u5757:\u519c\u4e1a",
                    "tooltip": "<strong>\u77ff\u8f66\u6a21\u5757:\u519c\u4e1a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u7684\u77ff\u8f66"
                },
                {
                    "name": "\u77f3\u6cb9\u8131\u786b",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1639.png",
                    "x": 108.0,
                    "y": 288.0,
                    "data": "\u73b0\u5728\u662f\u65f6\u5019\u5f00\u59cb\u5b9e\u9645\u8131\u786b\u4e86. \u4f7f\u7528\u4f60\u9009\u62e9\u7684\u5316\u5b66\u53cd\u5e94\u91dc,\u586b\u5145\u542b\u786b\u8f7b\u71c3\u6cb9\u5e76\u5c06\u5176\u8fde\u63a5\u5230\u7535\u6e90. \u73b0\u5728\u8fde\u63a5\u4e00\u4e2a\u8def\u7531\u63a5\u53e3\u7ba1\u9053,\u63d2\u5165\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247,\u8bbe\u7f6e\u4e3a\u59cb\u7ec8\u4fdd\u75594\u4e2a\u6c22\u5355\u5143.\u7136\u540e\u63d2\u5165\u7269\u54c1\u62bd\u53d6\u82af\u7247,\u8bbe\u7f6e\u4e3a\u62bd\u53d6\u786b\u5316\u6c22\u5355\u5143\u548c\u7a7a\u5355\u5143.</br></br>\u6700\u540e\u53bb\u4f60\u7684\u50a8\u6c22\u8d85\u7ea7\u7f38,\u63d2\u5165\u4e00\u4e2a\u7269\u54c1\u5408\u6210\u82af\u7247,\u8bbe\u7f6e\u4e3a\u7528\u4e00\u4e2a\u7a7a\u5355\u5143\u5408\u6210\u4e00\u4e2a\u6c22\u5355\u5143.</br></br>\u4f60\u7684\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316\u5c31\u5b8c\u6210\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGZw==",
                    "title": "\u77f3\u6cb9\u8131\u786b",
                    "tooltip": "<strong>\u77f3\u6cb9\u8131\u786b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u89e3\u6c34"
                },
                {
                    "name": "\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1636.png",
                    "x": 108.0,
                    "y": 240.0,
                    "data": "\u8be5\u4efb\u52a1\u7ebf\u5c06\u5411\u4f60\u5c55\u793a\u5982\u4f55\u81ea\u52a8\u8131\u786b\u77f3\u6cb9\u4ea7\u54c1. \u4e00\u65e6\u89e3\u9501\u4e86LV\u84b8\u998f\u5ba4\u7684\u4efb\u52a1\u5e76\u62e5\u6709\u4e00\u4e9b\u805a\u4e59\u70ef\u7247,\u5c31\u56de\u5230\u8fd9\u91cc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGZA==",
                    "title": "\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316",
                    "tooltip": "<strong>\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247</br>\u7269\u54c1\u5408\u6210\u82af\u7247"
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u4f10\u6728",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/112.png",
                    "x": 324.0,
                    "y": 60.0,
                    "data": "\u57fa\u7840\u4f10\u6728\u673a\u7528\u4e00\u6bb5\u65f6\u95f4\u4e4b\u540e\u5c31\u4f1a\u574f,\u4f46\u662f\u4f60\u6c38\u8fdc\u90fd\u4e0d\u9700\u8981\u66f4\u6362\u5b83.\u5b83\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u94bb\u77f3\u4fee\u590d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAcA==",
                    "title": "\u77ff\u8f66\u6a21\u5757:\u4f10\u6728",
                    "tooltip": "<strong>\u77ff\u8f66\u6a21\u5757:\u4f10\u6728</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u7684\u77ff\u8f66"
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u50a8\u5b58",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/110.png",
                    "x": 384.0,
                    "y": 108.0,
                    "data": "\u4e00\u4e2a\u57fa\u7840\u7684\u77ff\u8f66\u4e0d\u80fd\u5bb9\u7eb3\u4efb\u4f55\u7269\u54c1,\u6240\u4ee5\u4f60\u9700\u8981\u9644\u4e0a\u7279\u6b8a\u7684\u7bb1\u5b50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAbg==",
                    "title": "\u77ff\u8f66\u6a21\u5757:\u50a8\u5b58",
                    "tooltip": "<strong>\u77ff\u8f66\u6a21\u5757:\u50a8\u5b58</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b80\u5355\u7684\u77ff\u8f66"
                },
                {
                    "name": "\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1627.png",
                    "x": 96.0,
                    "y": 96.0,
                    "data": "\u8be5\u82af\u7247\u53ef\u5c06\u7269\u54c1\u5b58\u50a8\u5230\u8fde\u63a5\u7684\u5e93\u5b58(\u5982\u7bb1\u5b50)\u4e2d. \u5b83\u53ea\u4f1a\u5b58\u50a8\u8fc7\u6ee4(Filter)\u8bbe\u7f6e\u7684\u7269\u54c1. \u8fd9\u79cd\u82af\u7247\u4e0d\u4f1a\u4e3b\u52a8\u8bf7\u6c42\u7269\u54c1,\u5b83\u4eec\u4ec5\u4f5c\u4e3a\u7269\u54c1\u7684\u76ee\u7684\u5730.</br>\u4f60\u53ef\u4ee5\u901a\u8fc7\u53f3\u952e\u5355\u51fb\u82af\u7247\u6253\u5f00\u83dc\u5355. \u5728\u90a3\u91cc\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u5b83\u63a5\u53d7\u54ea\u4e9b\u7269\u54c1\u4ee5\u53ca\u4f18\u5148\u7ea7. \u7269\u54c1\u5c06\u9996\u5148\u8f6c\u5230\u5177\u6709\u66f4\u9ad8\u4f18\u5148\u7ea7\u7684\u7269\u54c1\u54cd\u5e94\u82af\u7247.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGWw==",
                    "title": "\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "tooltip": "<strong>\u7269\u54c1\u54cd\u5e94\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u82af\u7247"
                },
                {
                    "name": "\u4e0e\u4e1c\u897f\u4e92\u52a8",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1625.png",
                    "x": 60.0,
                    "y": 12.0,
                    "data": "\u8fd9\u4e00\u5207\u90fd\u5f88\u597d,\u4f46\u8fd9\u4e9b\u7ba1\u9053\u90fd\u6ca1\u6709\u8fde\u63a5\u5230\u7bb1\u5b50\u548c\u673a\u5668. \u6211\u8be5\u600e\u4e48\u529e\u5462\uff1f \u6211\u5f88\u9ad8\u5174\u542c\u5230\u4f60\u7684\u63d0\u95ee. \u4f60\u9700\u8981\u4e00\u79cd\u7279\u6b8a\u7684\u7ba1\u9053. \u8fd9\u662f\u7528\u6765\u8fde\u63a5\u673a\u5668\u548c\u7bb1\u5b50\u7684. \u4f60\u5fc5\u987b\u7528\u6211\u4eec\u5373\u5c06\u5236\u4f5c\u7684\u82af\u7247\u6765\u8bbe\u7f6e\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGWQ==",
                    "title": "\u4e0e\u4e1c\u897f\u4e92\u52a8",
                    "tooltip": "<strong>\u4e0e\u4e1c\u897f\u4e92\u52a8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ea4\u53c9\u70b9"
                },
                {
                    "name": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/106.png",
                    "x": 216.0,
                    "y": 108.0,
                    "data": "\u597d\u5427,\u4e5f\u8bb8\u4e0d\u662f\u7b2c\u4e00\u79cd\u81ea\u52a8\u5316.\u4f46\u4e00\u5b9a\u662f\u6700\u6d6a\u6f2b\u7684!\u9996\u5148,\u4f60\u9700\u8981\u4e00\u53f0\u77ff\u8f66\u7ec4\u88c5\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAag==",
                    "title": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316",
                    "tooltip": "<strong>\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!</br>\u7194\u878d\u7ea2\u77f3?</br>\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#1</br>\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#4"
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1208.png",
                    "x": 264.0,
                    "y": 156.0,
                    "data": "\u4f60\u7684\u77ff\u8f66\u9700\u8981\u52a8\u529b. \u77ff\u8f66\u53ef\u4ee5\u4f7f\u7528\u7164\u3001\u592a\u9633\u80fd\u6216\u8005\u5ca9\u6d46\u6765\u4f9b\u7535. \u5982\u679c\u4f60\u9020\u4e86\u592a\u9633\u80fd\u7535\u6c60\u677f,\u4f60\u53ef\u4ee5\u7528\u592a\u9633\u80fd\u6765\u4e3a\u4f60\u7684\u77ff\u8f66\u5145\u7535.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEuA==",
                    "title": "\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce",
                    "tooltip": "<strong>\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u80fd</br>\u7b80\u5355\u7684\u77ff\u8f66"
                },
                {
                    "name": "\u5904\u7406\u786b\u5316\u6c22",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1640.png",
                    "x": 60.0,
                    "y": 288.0,
                    "data": "\u73b0\u5728\u8ba9\u6211\u4eec\u5c06\u6240\u6709\u786b\u5316\u6c22\u8f6c\u5316\u4e3a\u786b\u9178. \u5c06\u5316\u5b66\u53cd\u5e94\u91dc\u8fde\u63a5\u5230\u7535\u6e90,\u6c34\u548c\u7269\u54c1\u63a5\u53e3\u7ba1\u9053.\u63d2\u5165\u7269\u54c1\u54cd\u5e94\u82af\u7247,\u8bbe\u7f6e\u4e3a\u63a5\u53d7\u786b\u5316\u6c22\u5355\u5143,\u7136\u540e\u63d2\u5165\u7269\u54c1\u62bd\u53d6\u82af\u7247,\u8bbe\u7f6e\u4e3a\u62bd\u53d6\u7a7a\u5355\u5143.\u5728\u84b8\u998f\u5ba4\u4e2d\u84b8\u998f\u7a00\u786b\u9178\u5e76\u5c06\u4ea7\u7269\u50a8\u5b58\u5728\u8d85\u7ea7\u7f38\u4e2d. </br></br>\u606d\u559c\u4f60!\u4f60\u73b0\u5728\u53ef\u4ee5\u5b8c\u5168\u77f3\u6cb9\u81ea\u52a8\u8131\u786b,\u81ea\u52a8\u751f\u4ea7\u6c22\u6c14\u548c\u6c27\u6c14,\u8fd8\u53ef\u4ee5\u50a8\u5b58\u6240\u6709\u786b\u9178.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGaA==",
                    "title": "\u5904\u7406\u786b\u5316\u6c22",
                    "tooltip": "<strong>\u5904\u7406\u786b\u5316\u6c22</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u77f3\u6cb9\u8131\u786b"
                },
                {
                    "name": "\u7535\u89e3\u6c34",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1638.png",
                    "x": 156.0,
                    "y": 288.0,
                    "data": "\u73b0\u5728\u8ba9\u6211\u4eec\u81ea\u52a8\u5c06\u6c34\u7535\u89e3\u6210\u6c27\u6c14\u548c\u6c22\u6c14. \u4f60\u9700\u8981\u6c22\u6c14\u6765\u5904\u7406\u5927\u91cf\u7684\u4e1c\u897f,\u5305\u62ec\u8131\u786b,\u83b7\u5f97\u94a8\u4ee5\u53ca\u7528\u4e8e\u785d\u9178\u751f\u4ea7. \u6c27\u6c14\u4e5f\u662f\u6709\u7528\u7684,\u56e0\u4e3a\u6211\u786e\u4fe1\u4f60\u5728\u5236\u9020\u94a2\u65f6\u6ce8\u610f\u5230\u4e86\u8fd9\u4e00\u70b9. </br></br>\u5982\u4f55\u8bbe\u7f6e\u5b83: </br></br>\u653e\u4e0b\u7535\u89e3\u673a\u5e76\u5c06\u5176\u8fde\u63a5\u5230\u6c34\u548c\u7535.\u5c062\u4e2a\u8d85\u7ea7\u7f38\u653e\u5728\u9644\u8fd1.\u8bbe\u7f6e\u7535\u89e3\u673a\u4ee5\u4ea7\u751f\u6c22\u6c14\u548c\u6c27\u5355\u5143.\u4f7f\u7528\u666e\u901a\u7684GT\u6d41\u4f53\u7ba1\u9053\u5c06\u6c22\u6c14\u8f93\u51fa\u5230\u4e00\u4e2a\u8d85\u7ea7\u7f38\u4e2d.\u90a3\u5c31\u662f\u4f60\u7684\u50a8\u6c22\u7f38\u4e86.\u73b0\u5728\u5c06\u8def\u7531\u63a5\u53e3\u7ba1\u9053\u8fde\u63a5\u5230\u6240\u67093\u53f0\u673a\u5668.  </br></br>\u5bf9\u4e8e\u8fde\u63a5\u7535\u89e3\u673a\u7684\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247\u8bbe\u7f6e,\u59cb\u7ec8\u5728\u673a\u5668\u5185\u4fdd\u5b582\u4e2a\u7a7a\u5355\u5143.\u8fd8\u5e94\u653e\u5165\u7269\u54c1\u62bd\u53d6\u82af\u7247,\u5e76\u8bbe\u7f6e\u8fc7\u6ee4\u62bd\u53d6\u6c27\u5355\u5143. </br></br>\u73b0\u5728\u50a8\u5b58\u6c27\u6c14,\u5c06\u7269\u54c1\u54cd\u5e94\u82af\u7247\u8bbe\u7f6e\u4e3a\u63a5\u53d7\u6c27\u5355\u5143,\u800c\u7269\u54c1\u62bd\u53d6\u82af\u7247\u8bbe\u7f6e\u4e3a\u62bd\u53d6\u7a7a\u5355\u5143. </br></br>\u73b0\u5728\u5c06\u4e00\u4e9b\u7a7a\u5355\u5143\u653e\u5165\u4f60\u7684\u9ed8\u8ba4\u50a8\u5b58\u7bb1\u4e2d,\u4e0d\u8981\u5fd8\u8bb0\u5728\u90a3\u91cc\u8fd8\u8981\u63d2\u5165\u4e00\u4e2a\u7269\u54c1\u5e7f\u64ad\u82af\u7247.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGZg==",
                    "title": "\u7535\u89e3\u6c34",
                    "tooltip": "<strong>\u7535\u89e3\u6c34</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u50a8\u5b58\u6db2\u4f53"
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
                    "source": "\u7269\u54c1\u62bd\u53d6\u82af\u7247",
                    "target": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247"
                },
                {
                    "source": "\u82af\u7247",
                    "target": "\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247"
                },
                {
                    "source": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316",
                    "target": "\u7b80\u5355\u7684\u77ff\u8f66"
                },
                {
                    "source": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247",
                    "target": "\u7269\u54c1\u5408\u6210\u82af\u7247"
                },
                {
                    "source": "\u77f3\u6cb9\u63d0\u7eaf",
                    "target": "\u50a8\u5b58\u6db2\u4f53"
                },
                {
                    "source": "\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316",
                    "target": "\u50a8\u5b58\u6db2\u4f53"
                },
                {
                    "source": "\u8ba9\u6211\u4eec\u505a\u4e9b\u7ba1\u9053",
                    "target": "\u4ea4\u53c9\u70b9"
                },
                {
                    "source": "\u81ea\u52a8\u88c5(\u5378)\u8f7d",
                    "target": "\u8fdb\u4e00\u6b65\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247",
                    "target": "\u5c0f\u5956\u52b1"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u4f10\u6728",
                    "target": "\u66f4\u591a\u7684\u6811\u79cd"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u66f4\u591a\u7684\u6811\u79cd"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u50a8\u5b58",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u66f4\u591a\u7684\u5b58\u50a8\u7a7a\u95f4"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u6316\u6398"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u5730\u70ed\u5f15\u64ce"
                },
                {
                    "source": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316",
                    "target": "\u81ea\u52a8\u88c5(\u5378)\u8f7d"
                },
                {
                    "source": "\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "target": "\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247"
                },
                {
                    "source": "\u5904\u7406\u786b\u5316\u6c22",
                    "target": "\u5bf9\u8131\u786b\u81ea\u52a8\u5316\u7684\u5956\u52b1"
                },
                {
                    "source": "\u81ea\u52a8\u88c5(\u5378)\u8f7d",
                    "target": "\u9ad8\u7ea7\u63a2\u6d4b\u8f68\u9053"
                },
                {
                    "source": "\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "target": "\u7269\u54c1\u62bd\u53d6\u82af\u7247"
                },
                {
                    "source": "\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247",
                    "target": "\u7269\u54c1\u62bd\u53d6\u82af\u7247"
                },
                {
                    "source": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247",
                    "target": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u7164\u70ad\u5f15\u64ce"
                },
                {
                    "source": "\u8def\u7531\u9700\u6c42\u7ba1\u9053",
                    "target": "\u7b80\u5355\u7684\u5b58\u50a8\u7cfb\u7edf"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce",
                    "target": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u5730\u70ed\u5f15\u64ce",
                    "target": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u7164\u70ad\u5f15\u64ce",
                    "target": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?"
                },
                {
                    "source": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247",
                    "target": "\u8def\u7531\u9700\u6c42\u7ba1\u9053"
                },
                {
                    "source": "\u4e0e\u4e1c\u897f\u4e92\u52a8",
                    "target": "\u82af\u7247"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def",
                    "target": "\u8ba9\u6211\u4eec\u505a\u4e9b\u7ba1\u9053"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u519c\u4e1a"
                },
                {
                    "source": "\u7535\u89e3\u6c34",
                    "target": "\u77f3\u6cb9\u8131\u786b"
                },
                {
                    "source": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247",
                    "target": "\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u7269\u54c1\u5408\u6210\u82af\u7247",
                    "target": "\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u4f10\u6728"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u50a8\u5b58"
                },
                {
                    "source": "\u82af\u7247",
                    "target": "\u7269\u54c1\u54cd\u5e94\u82af\u7247"
                },
                {
                    "source": "\u4ea4\u53c9\u70b9",
                    "target": "\u4e0e\u4e1c\u897f\u4e92\u52a8"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u7194\u878d\u7ea2\u77f3?",
                    "target": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#1",
                    "target": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#4",
                    "target": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u592a\u9633\u80fd",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce"
                },
                {
                    "source": "\u77f3\u6cb9\u8131\u786b",
                    "target": "\u5904\u7406\u786b\u5316\u6c22"
                },
                {
                    "source": "\u50a8\u5b58\u6db2\u4f53",
                    "target": "\u7535\u89e3\u6c34"
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
    