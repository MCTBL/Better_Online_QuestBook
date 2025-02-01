
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
                    "name": "\u4ea4\u901a\u8fd0\u8f93\u7c7b-3\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/681.png",
                    "x": 204.0,
                    "y": 156.0,
                    "data": "\u4e09\u4e2a\u4ea4\u901a\u8fd0\u8f93\u7c7b-3\u5956\u52b1\u5305\u53ef\u4ee5\u6362\u4e00\u4e2a\u66f4\u597d\u7684\u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1\u5305.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACqQ==",
                    "title": "\u4ea4\u901a\u8fd0\u8f93\u7c7b-3\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1",
                    "tooltip": "<strong>\u4ea4\u901a\u8fd0\u8f93\u7c7b-3\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u77ff\u8f66"
                },
                {
                    "name": "\u5965\u672f\u65b0\u624b\u5956\u52b1 > \u5965\u672f\u8001\u624b\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/568.png",
                    "x": 12.0,
                    "y": 60.0,
                    "data": "\u4e09\u4e2a\u5965\u672f\u65b0\u624b\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACOA==",
                    "title": "\u5965\u672f\u65b0\u624b\u5956\u52b1 > \u5965\u672f\u8001\u624b\u5956\u52b1",
                    "tooltip": "<strong>\u5965\u672f\u65b0\u624b\u5956\u52b1 > \u5965\u672f\u8001\u624b\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "name": "\u6b63\u9910\u5956\u52b1 > \u7f8e\u98df\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/679.png",
                    "x": 108.0,
                    "y": 156.0,
                    "data": "\u4e09\u4e2a\u6b63\u9910\u5956\u52b1\u5305\u53ef\u4ee5\u6362\u4e00\u4e2a\u66f4\u597d\u7684\u7f8e\u98df\u5956\u52b1\u5305.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACpw==",
                    "title": "\u6b63\u9910\u5956\u52b1 > \u7f8e\u98df\u5956\u52b1",
                    "tooltip": "<strong>\u6b63\u9910\u5956\u52b1 > \u7f8e\u98df\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53a8\u5177</br>\u7f8e\u5473\u70e4\u9762\u5305"
                },
                {
                    "name": "\u57fa\u7840\u5956\u52b1 > \u84b8\u6c7d\u65f6\u4ee3\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/441.png",
                    "x": 12.0,
                    "y": 12.0,
                    "data": "\u4e09\u4e2a\u57fa\u7840\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABuQ==",
                    "title": "\u57fa\u7840\u5956\u52b1 > \u84b8\u6c7d\u65f6\u4ee3\u5956\u52b1",
                    "tooltip": "<strong>\u57fa\u7840\u5956\u52b1 > \u84b8\u6c7d\u65f6\u4ee3\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!"
                },
                {
                    "name": "\u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1 > \u4e13\u4e1a\u6797\u4e1a\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/565.png",
                    "x": 60.0,
                    "y": 108.0,
                    "data": "\u4e09\u4e2a\u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACNQ==",
                    "title": "\u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1 > \u4e13\u4e1a\u6797\u4e1a\u5956\u52b1",
                    "tooltip": "<strong>\u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1 > \u4e13\u4e1a\u6797\u4e1a\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e2d\u578b\u7535\u5b50\u677f</br>\u5927\u578b\u7535\u5b50\u677f</br>\u5148\u8fdb\u7535\u5b50\u677f"
                },
                {
                    "name": "MV\u65f6\u4ee3\u5956\u52b1 > HV\u65f6\u4ee3\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/445.png",
                    "x": 156.0,
                    "y": 12.0,
                    "data": "\u4e09\u4e2aMV\u65f6\u4ee3\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABvQ==",
                    "title": "MV\u65f6\u4ee3\u5956\u52b1 > HV\u65f6\u4ee3\u5956\u52b1",
                    "tooltip": "<strong>MV\u65f6\u4ee3\u5956\u52b1 > HV\u65f6\u4ee3\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c3\u9636\u6bb5(HV)"
                },
                {
                    "name": "\u5965\u672f\u8001\u624b\u5956\u52b1 > \u5965\u672f\u7cbe\u901a\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/569.png",
                    "x": 60.0,
                    "y": 60.0,
                    "data": "\u4e09\u4e2a\u5965\u672f\u8001\u624b\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACOQ==",
                    "title": "\u5965\u672f\u8001\u624b\u5956\u52b1 > \u5965\u672f\u7cbe\u901a\u5956\u52b1",
                    "tooltip": "<strong>\u5965\u672f\u8001\u624b\u5956\u52b1 > \u5965\u672f\u7cbe\u901a\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u719f\u7ec3\u7684\u795e\u79d8\u4f7f"
                },
                {
                    "name": "LV\u65f6\u4ee3\u5956\u52b1 > MV\u65f6\u4ee3\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/443.png",
                    "x": 108.0,
                    "y": 12.0,
                    "data": "\u4e09\u4e2aLV\u65f6\u4ee3\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABuw==",
                    "title": "LV\u65f6\u4ee3\u5956\u52b1 > MV\u65f6\u4ee3\u5956\u52b1",
                    "tooltip": "<strong>LV\u65f6\u4ee3\u5956\u52b1 > MV\u65f6\u4ee3\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u871c\u8702\u57fa\u7840\u5956\u52b1 > \u871c\u8702\u9ad8\u7ea7\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/574.png",
                    "x": 156.0,
                    "y": 108.0,
                    "data": "\u4e09\u4e2a\u871c\u8702\u57fa\u7840\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACPg==",
                    "title": "\u871c\u8702\u57fa\u7840\u5956\u52b1 > \u871c\u8702\u9ad8\u7ea7\u5956\u52b1",
                    "tooltip": "<strong>\u871c\u8702\u57fa\u7840\u5956\u52b1 > \u871c\u8702\u9ad8\u7ea7\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed"
                },
                {
                    "name": "\u84b8\u6c7d\u65f6\u4ee3\u5956\u52b1 > LV\u65f6\u4ee3\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/439.png",
                    "x": 60.0,
                    "y": 12.0,
                    "data": "\u4e09\u4e2a\u84b8\u6c7d\u65f6\u4ee3\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABtw==",
                    "title": "\u84b8\u6c7d\u65f6\u4ee3\u5956\u52b1 > LV\u65f6\u4ee3\u5956\u52b1",
                    "tooltip": "<strong>\u84b8\u6c7d\u65f6\u4ee3\u5956\u52b1 > LV\u65f6\u4ee3\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b2c1\u9636\u6bb5,LV"
                },
                {
                    "name": "\u53a8\u5e08\u8bad\u7ec3",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/858.png",
                    "x": 12.0,
                    "y": 156.0,
                    "data": "\u6211\u9700\u8981\u4e00\u4e9b\u914d\u6599\u6765\u5e2e\u52a9\u6211\u8fdb\u884c\u7ec3\u4e60,\u4e0d\u8fc7\u5b83\u4eec\u65e0\u6cd5\u5728\u6211\u8fd9\u91cc\u79cd\u690d,\u4f60\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u5417? \u6211\u4f1a\u56de\u62a5\u4f60\u4e00\u4e9b\u6210\u54c1.</br></br>[note]\u53ea\u9700\u51d1\u9f50\u4e00\u7ec4\u5373\u53ef\u5b8c\u6210\u4efb\u52a1.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADWg==",
                    "title": "\u53a8\u5e08\u8bad\u7ec3",
                    "tooltip": "<strong>\u53a8\u5e08\u8bad\u7ec3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53a8\u5177"
                },
                {
                    "name": "\u8840\u9b54\u6cd5\u8001\u624b\u5956\u52b1 > \u8840\u9b54\u6cd5\u7cbe\u901a\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/573.png",
                    "x": 300.0,
                    "y": 60.0,
                    "data": "\u4e09\u4e2a\u8840\u9b54\u6cd5\u8001\u624b\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACPQ==",
                    "title": "\u8840\u9b54\u6cd5\u8001\u624b\u5956\u52b1 > \u8840\u9b54\u6cd5\u7cbe\u901a\u5956\u52b1",
                    "tooltip": "<strong>\u8840\u9b54\u6cd5\u8001\u624b\u5956\u52b1 > \u8840\u9b54\u6cd5\u7cbe\u901a\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e09\u9636-\u77f3\u677f"
                },
                {
                    "name": "IV\u5956\u52b1>LuV\u5956\u52b1.",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1690.png",
                    "x": 300.0,
                    "y": 12.0,
                    "data": "\u4e09\u4e2aIV\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGmg==",
                    "title": "IV\u5956\u52b1>LuV\u5956\u52b1.",
                    "tooltip": "<strong>IV\u5956\u52b1>LuV\u5956\u52b1.</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c6\u9636\u6bb5(LuV)"
                },
                {
                    "name": "\u706b\u661f\u5956\u52b1 > \u5c0f\u884c\u661f\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/567.png",
                    "x": 300.0,
                    "y": 108.0,
                    "data": "\u4e09\u4e2a\u706b\u661f\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACNw==",
                    "title": "\u706b\u661f\u5956\u52b1 > \u5c0f\u884c\u661f\u5956\u52b1",
                    "tooltip": "<strong>\u706b\u661f\u5956\u52b1 > \u5c0f\u884c\u661f\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6708\u7403\u5956\u52b1 > \u706b\u661f\u5956\u52b1"
                },
                {
                    "name": "\u5965\u672f\u5927\u5e08\u5956\u52b1 > \u9b54\u5bfc\u5e08\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/571.png",
                    "x": 156.0,
                    "y": 60.0,
                    "data": "\u5341\u516d\u4e2a\u5965\u672f\u5927\u5e08\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACOw==",
                    "title": "\u5965\u672f\u5927\u5e08\u5956\u52b1 > \u9b54\u5bfc\u5e08\u5956\u52b1",
                    "tooltip": "<strong>\u5965\u672f\u5927\u5e08\u5956\u52b1 > \u9b54\u5bfc\u5e08\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u7684\u529b\u91cf"
                },
                {
                    "name": "\u8840\u9b54\u6cd5\u65b0\u624b\u5956\u52b1 > \u8840\u9b54\u6cd5\u8001\u624b\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/572.png",
                    "x": 252.0,
                    "y": 60.0,
                    "data": "\u4e09\u4e2a\u8840\u9b54\u6cd5\u65b0\u624b\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACPA==",
                    "title": "\u8840\u9b54\u6cd5\u65b0\u624b\u5956\u52b1 > \u8840\u9b54\u6cd5\u8001\u624b\u5956\u52b1",
                    "tooltip": "<strong>\u8840\u9b54\u6cd5\u65b0\u624b\u5956\u52b1 > \u8840\u9b54\u6cd5\u8001\u624b\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "name": "\u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-1\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/682.png",
                    "x": 252.0,
                    "y": 156.0,
                    "data": "\u4e09\u4e2a\u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1\u5305\u53ef\u4ee5\u6362\u4e00\u4e2a\u66f4\u597d\u7684\u4ea4\u901a\u8fd0\u8f93\u7c7b-1\u5956\u52b1\u5305.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACqg==",
                    "title": "\u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-1\u5956\u52b1",
                    "tooltip": "<strong>\u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-1\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ea4\u901a\u8fd0\u8f93\u7c7b-3\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1"
                },
                {
                    "name": "\u5feb\u9910\u5956\u52b1 > \u6b63\u9910\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/678.png",
                    "x": 60.0,
                    "y": 156.0,
                    "data": "\u4e09\u4e2a\u5feb\u9910\u5956\u52b1\u5305\u53ef\u4ee5\u6362\u4e00\u4e2a\u66f4\u597d\u7684\u6b63\u9910\u5956\u52b1\u5305.\u4ec0\u4e48\u65f6\u5019\u6b63\u9910\u6210\u66f4\u597d\u7684\u4e86\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACpg==",
                    "title": "\u5feb\u9910\u5956\u52b1 > \u6b63\u9910\u5956\u52b1",
                    "tooltip": "<strong>\u5feb\u9910\u5956\u52b1 > \u6b63\u9910\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5c0f\u9ea6\u65f6\u523b"
                },
                {
                    "name": "\u7f8e\u98df\u5956\u52b1 > \u751c\u70b9\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/680.png",
                    "x": 156.0,
                    "y": 156.0,
                    "data": "\u516d\u4e2a\u7f8e\u98df\u5956\u52b1\u5305\u53ef\u4ee5\u6362\u4e00\u4e2a\u66f4\u597d\u7684\u751c\u70b9\u5956\u52b1\u5305.</br></br>[note]\u4e0d\u8fc7,\u8fd9\u4e2a\u5956\u52b1\u5305\u91cc\u5934\u53ea\u6709\u68c9\u82b1\u7cd6,\u6240\u4ee5\u5176\u5b9e\u4e0d\u592a\u503c...[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACqA==",
                    "title": "\u7f8e\u98df\u5956\u52b1 > \u751c\u70b9\u5956\u52b1",
                    "tooltip": "<strong>\u7f8e\u98df\u5956\u52b1 > \u751c\u70b9\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b63\u9910\u5956\u52b1 > \u7f8e\u98df\u5956\u52b1"
                },
                {
                    "name": "\u57fa\u7840\u6797\u4e1a\u5956\u52b1 > \u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/564.png",
                    "x": 12.0,
                    "y": 108.0,
                    "data": "\u4e09\u4e2a\u57fa\u7840\u6797\u4e1a\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACNA==",
                    "title": "\u57fa\u7840\u6797\u4e1a\u5956\u52b1 > \u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1",
                    "tooltip": "<strong>\u57fa\u7840\u6797\u4e1a\u5956\u52b1 > \u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6797\u4e1amod\u6838\u5fc3\u65b9\u5757"
                },
                {
                    "name": "\u871c\u8702\u9ad8\u7ea7\u5956\u52b1 > \u871c\u8702\u4e13\u4e1a\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/575.png",
                    "x": 204.0,
                    "y": 108.0,
                    "data": "\u4e09\u4e2a\u871c\u8702\u9ad8\u7ea7\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACPw==",
                    "title": "\u871c\u8702\u9ad8\u7ea7\u5956\u52b1 > \u871c\u8702\u4e13\u4e1a\u5956\u52b1",
                    "tooltip": "<strong>\u871c\u8702\u9ad8\u7ea7\u5956\u52b1 > \u871c\u8702\u4e13\u4e1a\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u767e\u4e07\u871c\u8702</br>\u8bf1\u53d8\u673a</br>\u57fa\u56e0\u91c7\u6837\u673a"
                },
                {
                    "name": "\u6708\u7403\u5956\u52b1 > \u706b\u661f\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/566.png",
                    "x": 252.0,
                    "y": 108.0,
                    "data": "\u4e09\u4e2a\u6708\u7403\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACNg==",
                    "title": "\u6708\u7403\u5956\u52b1 > \u706b\u661f\u5956\u52b1",
                    "tooltip": "<strong>\u6708\u7403\u5956\u52b1 > \u706b\u661f\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c4\u9636\u6bb5(EV)"
                },
                {
                    "name": "EV\u65f6\u4ee3\u5956\u52b1 > IV\u65f6\u4ee3\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/449.png",
                    "x": 252.0,
                    "y": 12.0,
                    "data": "\u4e09\u4e2aEV\u65f6\u4ee3\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABwQ==",
                    "title": "EV\u65f6\u4ee3\u5956\u52b1 > IV\u65f6\u4ee3\u5956\u52b1",
                    "tooltip": "<strong>EV\u65f6\u4ee3\u5956\u52b1 > IV\u65f6\u4ee3\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c5\u9636\u6bb5(IV)"
                },
                {
                    "name": "\u5965\u672f\u7cbe\u901a\u5956\u52b1 > \u5965\u672f\u5927\u5e08\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/570.png",
                    "x": 108.0,
                    "y": 60.0,
                    "data": "\u4e09\u4e2a\u5965\u672f\u7cbe\u901a\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACOg==",
                    "title": "\u5965\u672f\u7cbe\u901a\u5956\u52b1 > \u5965\u672f\u5927\u5e08\u5956\u52b1",
                    "tooltip": "<strong>\u5965\u672f\u7cbe\u901a\u5956\u52b1 > \u5965\u672f\u5927\u5e08\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6d53\u7f29\u9ed1\u6697"
                },
                {
                    "name": "HV\u65f6\u4ee3\u5956\u52b1 > EV\u65f6\u4ee3\u5956\u52b1",
                    "symbolSize": 40,
                    "symbol": "image://version/272/quests_icons/QuestIcon/447.png",
                    "x": 204.0,
                    "y": 12.0,
                    "data": "\u4e09\u4e2aHV\u65f6\u4ee3\u5956\u52b1",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABvw==",
                    "title": "HV\u65f6\u4ee3\u5956\u52b1 > EV\u65f6\u4ee3\u5956\u52b1",
                    "tooltip": "<strong>HV\u65f6\u4ee3\u5956\u52b1 > EV\u65f6\u4ee3\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c4\u9636\u6bb5(EV)"
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
                    "source": "\u77ff\u8f66",
                    "target": "\u4ea4\u901a\u8fd0\u8f93\u7c7b-3\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1"
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u5965\u672f\u65b0\u624b\u5956\u52b1 > \u5965\u672f\u8001\u624b\u5956\u52b1"
                },
                {
                    "source": "\u53a8\u5177",
                    "target": "\u6b63\u9910\u5956\u52b1 > \u7f8e\u98df\u5956\u52b1"
                },
                {
                    "source": "\u7f8e\u5473\u70e4\u9762\u5305",
                    "target": "\u6b63\u9910\u5956\u52b1 > \u7f8e\u98df\u5956\u52b1"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c0.5\u9636,\u84b8\u6c7d!",
                    "target": "\u57fa\u7840\u5956\u52b1 > \u84b8\u6c7d\u65f6\u4ee3\u5956\u52b1"
                },
                {
                    "source": "\u4e2d\u578b\u7535\u5b50\u677f",
                    "target": "\u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1 > \u4e13\u4e1a\u6797\u4e1a\u5956\u52b1"
                },
                {
                    "source": "\u5927\u578b\u7535\u5b50\u677f",
                    "target": "\u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1 > \u4e13\u4e1a\u6797\u4e1a\u5956\u52b1"
                },
                {
                    "source": "\u5148\u8fdb\u7535\u5b50\u677f",
                    "target": "\u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1 > \u4e13\u4e1a\u6797\u4e1a\u5956\u52b1"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "MV\u65f6\u4ee3\u5956\u52b1 > HV\u65f6\u4ee3\u5956\u52b1"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u5965\u672f\u8001\u624b\u5956\u52b1 > \u5965\u672f\u7cbe\u901a\u5956\u52b1"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "LV\u65f6\u4ee3\u5956\u52b1 > MV\u65f6\u4ee3\u5956\u52b1"
                },
                {
                    "source": "\u6539\u5584\u5b83\u4eec\u7684\u5bb6\u56ed",
                    "target": "\u871c\u8702\u57fa\u7840\u5956\u52b1 > \u871c\u8702\u9ad8\u7ea7\u5956\u52b1"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c1\u9636\u6bb5,LV",
                    "target": "\u84b8\u6c7d\u65f6\u4ee3\u5956\u52b1 > LV\u65f6\u4ee3\u5956\u52b1"
                },
                {
                    "source": "\u53a8\u5177",
                    "target": "\u53a8\u5e08\u8bad\u7ec3"
                },
                {
                    "source": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "target": "\u8840\u9b54\u6cd5\u8001\u624b\u5956\u52b1 > \u8840\u9b54\u6cd5\u7cbe\u901a\u5956\u52b1"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "IV\u5956\u52b1>LuV\u5956\u52b1."
                },
                {
                    "source": "\u6708\u7403\u5956\u52b1 > \u706b\u661f\u5956\u52b1",
                    "target": "\u706b\u661f\u5956\u52b1 > \u5c0f\u884c\u661f\u5956\u52b1"
                },
                {
                    "source": "\u795e\u7684\u529b\u91cf",
                    "target": "\u5965\u672f\u5927\u5e08\u5956\u52b1 > \u9b54\u5bfc\u5e08\u5956\u52b1"
                },
                {
                    "source": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7",
                    "target": "\u8840\u9b54\u6cd5\u65b0\u624b\u5956\u52b1 > \u8840\u9b54\u6cd5\u8001\u624b\u5956\u52b1"
                },
                {
                    "source": "\u4ea4\u901a\u8fd0\u8f93\u7c7b-3\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1",
                    "target": "\u4ea4\u901a\u8fd0\u8f93\u7c7b-2\u5956\u52b1 > \u4ea4\u901a\u8fd0\u8f93\u7c7b-1\u5956\u52b1"
                },
                {
                    "source": "\u5c0f\u9ea6\u65f6\u523b",
                    "target": "\u5feb\u9910\u5956\u52b1 > \u6b63\u9910\u5956\u52b1"
                },
                {
                    "source": "\u6b63\u9910\u5956\u52b1 > \u7f8e\u98df\u5956\u52b1",
                    "target": "\u7f8e\u98df\u5956\u52b1 > \u751c\u70b9\u5956\u52b1"
                },
                {
                    "source": "\u6797\u4e1amod\u6838\u5fc3\u65b9\u5757",
                    "target": "\u57fa\u7840\u6797\u4e1a\u5956\u52b1 > \u9ad8\u7ea7\u6797\u4e1a\u5956\u52b1"
                },
                {
                    "source": "\u767e\u4e07\u871c\u8702",
                    "target": "\u871c\u8702\u9ad8\u7ea7\u5956\u52b1 > \u871c\u8702\u4e13\u4e1a\u5956\u52b1"
                },
                {
                    "source": "\u8bf1\u53d8\u673a",
                    "target": "\u871c\u8702\u9ad8\u7ea7\u5956\u52b1 > \u871c\u8702\u4e13\u4e1a\u5956\u52b1"
                },
                {
                    "source": "\u57fa\u56e0\u91c7\u6837\u673a",
                    "target": "\u871c\u8702\u9ad8\u7ea7\u5956\u52b1 > \u871c\u8702\u4e13\u4e1a\u5956\u52b1"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u6708\u7403\u5956\u52b1 > \u706b\u661f\u5956\u52b1"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "EV\u65f6\u4ee3\u5956\u52b1 > IV\u65f6\u4ee3\u5956\u52b1"
                },
                {
                    "source": "\u6d53\u7f29\u9ed1\u6697",
                    "target": "\u5965\u672f\u7cbe\u901a\u5956\u52b1 > \u5965\u672f\u5927\u5e08\u5956\u52b1"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "HV\u65f6\u4ee3\u5956\u52b1 > EV\u65f6\u4ee3\u5956\u52b1"
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
    