
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
                    "name": "LSC",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2700.png",
                    "x": -144.0,
                    "y": 468.0,
                    "data": "\u8fd9\u662f\u5170\u6ce2\u987f\u8d85\u7ea7\u7535\u5bb9\u5e93(LSC)\u5728\u50a8\u91cf\u4e0a\u7684\u6700\u7ec8\u5347\u7ea7. \u7528\u7ec8\u6781\u7535\u6c60\u6216\u8005\u771f\u00b7\u7ec8\u6781\u7535\u6c60\u5408\u6210\u7684\u6210\u672c\u90fd\u4e00\u6837,\u8bf7\u968f\u610f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKjA==",
                    "title": "LSC",
                    "tooltip": "<strong>LSC</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u7535\u5bb9(UV)"
                },
                {
                    "name": "\u6781\u7ec8\u4e0e\u7ec8\u6781",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3295.png",
                    "x": -144.0,
                    "y": 516.0,
                    "data": "\u4e00\u4e2a\u66f4\u6602\u8d35\u4f46\u50a8\u91cf\u76f8\u540c\u7684\u7535\u5bb9\u5668?\u4f60\u6ca1\u770b\u9519,\u4f46\u5b83\u5728\u65e0\u7ebf\u7535\u529b\u7f51\u7edc\u4e2d\u7684\u4f20\u8f93\u901f\u7387\u8981\u5feb\u5f97\u591a!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAM3w==",
                    "title": "\u6781\u7ec8\u4e0e\u7ec8\u6781",
                    "tooltip": "<strong>\u6781\u7ec8\u4e0e\u7ec8\u6781</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4ee5\u592a\u4e4b\u529b</br>\u597d\u523a\u773c! #4</br>LSC"
                },
                {
                    "name": "\u52a0\u6cb9\u62bd\u5440~\u563f\u54df~",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2972.png",
                    "x": 180.0,
                    "y": 132.0,
                    "data": "\u5f53\u4f60\u9020\u597d\u6c34\u5e93\u4e4b\u540e,\u5e94\u8be5\u4f1a\u53d1\u73b0\u65e0\u6cd5\u76f4\u63a5\u5c06\u539f\u7248\u6c34\u5012\u5165\u6c34\u5e93.\u8fd9\u662f\u6db2\u538b\u6cf5\u7684\u5de5\u4f5c.\u8fd9\u79cd\u591a\u65b9\u5757\u7ed3\u6784\u6709\u8bb8\u591a\u7b49\u7ea7,\u53ef\u4ee5\u8ba9\u4f60\u7684\u6c34\u5e93\u5230\u8fbe\u4e0d\u540c\u7684\u6c34\u4f4d(",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALnA==",
                    "title": "\u52a0\u6cb9\u62bd\u5440~\u563f\u54df~",
                    "tooltip": "<strong>\u52a0\u6cb9\u62bd\u5440~\u563f\u54df~</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u65e0\u9650\u50a8\u80fd"
                },
                {
                    "name": "EV\u9633\u5149\u5316\u5408\u7269\u7535\u6c60",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1264.png",
                    "x": 0.0,
                    "y": 228.0,
                    "data": "\u5c0f\u578b\u9633\u5149\u5316\u5408\u7269\u7535\u6c60\u662f\u4f60\u7684\u7b2c\u4e00\u79cdEV\u7535\u6c60.\u6709\u4e9b\u4eba\u8ba4\u4e3a\u5b83\u6bd4\u5170\u6ce2\u987f\u7535\u6c60\u4fbf\u5b9c,\u4e0d\u8fc7\u8fd9\u53d6\u51b3\u4e8e\u4f60\u7684\u9633\u5149\u5316\u5408\u7269\u7684\u4ea7\u91cf,\u800c\u4e14\u5b83\u7684\u5bb9\u91cf\u66f4\u5c0f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE8A==",
                    "title": "EV\u9633\u5149\u5316\u5408\u7269\u7535\u6c60",
                    "tooltip": "<strong>EV\u9633\u5149\u5316\u5408\u7269\u7535\u6c60</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>EV\u7535\u6c60\u7bb1</br>\u84dd\u94a2"
                },
                {
                    "name": "\u522b\u628a\u624b\u6307\u63d2\u8fdb\u63d2\u5ea7\u91cc",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2144.png",
                    "x": -72.0,
                    "y": 132.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u8ba9\u591aA\u7535\u6d41\u901a\u8fc7\u8d85\u51c0\u95f4\u5899\u58c1,\u4f7f\u7528\u7ebf\u7f06\u4e8c\u6781\u7ba1\u5427.  \u5f53\u4ece\u4e3b\u7535\u6e90\u7ebf\u5206\u652f\u5230\u901a\u5e38\u4e0d\u4f1a\u4f7f\u7528\u90a3\u4e48\u591aA\u7535\u6d41\u7684\u652f\u7ebf\u65f6,\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7ebf\u7f06\u4e8c\u7ea7\u7ba1,\u6765\u5f88\u65b9\u4fbf\u5730\u9650\u5236\u7535\u6d41,\u9664\u6b64\u4e4b\u5916\u4e5f\u53ef\u9632\u6b62\u7535\u6d41\u8fc7\u5927\u7740\u706b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIYA==",
                    "title": "\u00a76\u00a7l\u522b\u628a\u624b\u6307\u63d2\u8fdb\u63d2\u5ea7\u91cc",
                    "tooltip": "<strong>\u522b\u628a\u624b\u6307\u63d2\u8fdb\u63d2\u5ea7\u91cc</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d85\u51c0\u95f4"
                },
                {
                    "name": "LESU\u5347\u7ea7-LV\u7b49\u7ea7",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1825.png",
                    "x": 180.0,
                    "y": 228.0,
                    "data": "\u5c06\u8fd9\u4e48\u591aLESU\u673a\u68b0\u65b9\u5757\u6dfb\u52a0\u5230\u4f60\u7684LESU,\u4f7f\u5176\u4eceULV\u5347\u7ea7\u81f3LV\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHIQ==",
                    "title": "LESU\u5347\u7ea7-LV\u7b49\u7ea7",
                    "tooltip": "<strong>LESU\u5347\u7ea7-LV\u7b49\u7ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u80fd\u91cf\u5b58\u50a8\u77e9\u9635"
                },
                {
                    "name": "\u7535\u6c60\u7bb1",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/619.png",
                    "x": 0.0,
                    "y": 84.0,
                    "data": "\u7535\u6c60\u76f4\u63a5\u88c5\u5728\u673a\u5668\u7684\u7535\u6c60\u69fd\u65f6,\u4e0e\u653e\u5728\u7535\u6c60\u7bb1\u4e2d\u65f6\u7684\u5de5\u4f5c\u65b9\u5f0f\u57fa\u672c\u4e00\u81f4.\u7535\u6c60\u7bb1\u4e3b\u8981\u7528\u9014\u5c31\u662f\u7f13\u51b2\u80fd\u91cf,\u63d0\u4f9b\u4e00\u4e2a\u7a33\u5b9a\u7684\u8f93\u51fa.</br></br>\u67091\u30014\u30019(!)\u300116\u69fd\u53ef\u4ee5\u9009\u62e9. \u6bcf\u4e2a\u5728\u7535\u6c60\u7bb1\u5185\u7684\u7535\u6c60\u53ef\u4ee5\u63a5\u65362A,\u5e76\u53ef\u4ee5\u8f93\u51fa1A-\u8bf7\u6ce8\u610f\u8fd9\u4e00\u70b9,\u522b\u70e7\u7ebf\u4e86! \u7ebf\u7f06\u67091x\u30012x\u30014x\u30018x\u300112x\u548c16x,\u4ee5\u9521\u4e3a\u4f8b,\u6bcfx\u53ef\u4ee5\u4f20\u8f931A. \u8bf7\u786e\u4fdd\u4e0d\u8981\u8d85\u8fc7\u5176\u6700\u5927\u7535\u6d41,\u4e0d\u7136\u7ebf\u7f06\u4f1a\u88ab\u878d\u5316,\u5316\u4e3a\u706b\u7130,\u800c\u4e14\u6709\u6982\u7387\u5f15\u7206\u673a\u5668.</br></br>\u8bf7\u8bb0\u4f4f,\u7535\u6c60\u7bb1\u63a5\u6536EU\u65f6\u4e5f\u4f1a\u6709\u635f\u5931,\u6240\u4ee5\u75284\u4e2a4\u69fd\u7535\u6c60\u7bb1\u6392\u6210\u4e00\u5217\u4f1a\u635f\u59318,\u800c1\u4e2a16\u69fd\u7535\u6c60\u7bb1\u53ea\u4f1a\u635f\u59312. \u800c\u4e14\u8fd9\u4e2a\u635f\u8017\u4e5f\u662f\u6bcfA\u8ba1\u7b97\u7684.</br></br>[note]\u4f60\u53ef\u4ee5\u7528\u7269\u6d41\u8f93\u5165\u7535\u6c60,\u4f46\u53ea\u6709\u7a7a\u7684\u9178\u6027\u7535\u6c60\u53ef\u4ee5\u4ece\u7535\u6c60\u7bb1\u4e2d\u8f93\u51fa. \u4e0d,\u4f60\u65e0\u6cd5\u5faa\u73af\u5229\u7528\u5b83.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACaw==",
                    "title": "\u7535\u6c60\u7bb1",
                    "tooltip": "<strong>\u7535\u6c60\u7bb1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u6c5e</br>\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u9178</br>\u53ef\u5145\u7535\u7535\u6c60\uff1a\u94a0</br>\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9549</br>\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9502"
                },
                {
                    "name": "\u5f00\u5145!(Take charge!)",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2732.png",
                    "x": -144.0,
                    "y": 228.0,
                    "data": "\u5170\u6ce2\u987f\u8d85\u7ea7\u7535\u5bb9\u5e93\u662f\u5927\u89c4\u6a21\u50a8\u7535\u7684\u6700\u4f73\u9009\u62e9.</br></br>\u5b83\u53ef\u80fd\u4f1a\u51fa\u73b0\u6545\u969c,\u6bcf\u4e2a\u7ef4\u62a4\u95ee\u9898\u5c06\u989d\u5916\u6d88\u801720\uff05\u80fd\u91cf(\u8bd5\u8bd5\u81ea\u52a8\u7ef4\u62a4\u4ed3),\u6240\u4ee5\u8bf7\u5c3d\u91cf\u907f\u514d\u6545\u969c\u95ee\u9898.\u4e0d\u8fc7\u5c31\u7b97\u8fd9\u6837,\u5b83\u7684\u6700\u9ad8\u80fd\u91cf\u635f\u5931\u4e5f\u5c312.2\uff05</br></br>\u6700\u521d\u4e5f\u662f\u6700\u5c0f\u7684\u8d85\u7ea7\u7535\u5bb9\u5e93\u9700\u8981\u4efb\u52a1\u91cc\u7684\u8fd9\u4e9b\u8231\u5ba4,\u518d\u52a0\u4e0a\u80fd\u6e90\u4ed3\u548c\u52a8\u529b\u4ed3(\u6216\u6fc0\u5149\u4ed3).\u522b\u5fd8\u4e86\u89e3\u5305\u5668\u53ef\u4ee5\u5c06\u5236\u6210\u7535\u5bb9\u7684\u7535\u6c60\u62c6\u51fa\u6765.\u6700\u540e\u4e00\u4e2a\u5236\u4f5c\u7535\u5bb9\u5e93\u7684\u7406\u7531!</br></br>\u4f60\u53ef\u4ee5\u4f7f\u7528\u6fc0\u5149\u4ed3,\u8f93\u51fa\u76f8\u5f53\u9ad8\u7684\u7535\u6d41.\u5b89\u88c5\u81f3\u5c11UV\u7b49\u7ea7\u7684\u73bb\u7483\u624d\u80fd\u89e3\u9501\u6fc0\u5149\u4ed3.(\u5728\u80fd\u6e90\u7ad9\u4e5f\u662fUV\u4ee5\u4e0a\u7684\u5185\u82af\u624d\u652f\u6301\u6fc0\u5149\u4ed3.)</br></br>\u987a\u4fbf\u8bf4\u4e00\u53e5,\u8fd9\u6837\u4e00\u53f0\u53ea\u7528EV\u7535\u5bb9\u7684\u5170\u6ce2\u987f\u8d85\u7ea7\u7535\u5bb9\u5e93\u53ef\u4ee5\u5b58\u50a8540M\u52308.1B-EU. \u8bf7\u8bb0\u4f4f,\u4f60\u9700\u8981\u4fdd\u8bc1\u8d85\u8fc7\u4e00\u534a\u7684\u65b9\u5757\u662f\u975e-\u7a7a\u7535\u5bb9,\u8fd9\u6837\u591a\u65b9\u5757\u7ed3\u6784\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKrA==",
                    "title": "\u5f00\u5145!(Take charge!)",
                    "tooltip": "<strong>\u5f00\u5145!(Take charge!)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u6c34\u6676</br>\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "name": "LV\u53d8\u538b\u5668",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1266.png",
                    "x": -192.0,
                    "y": 84.0,
                    "data": "\u4f7f\u7528LV\u7535\u538b\u9a71\u52a8MV\u673a\u5668\u662f\u53ef\u4ee5\u5b9e\u73b0\u7684.\u5236\u9020\u4e00\u4e2a\u53d8\u538b\u5668,\u5e76\u4f7f\u75284\u4e2a32EU/t\u7684\u7535\u6e90\u6765\u7ed9\u4e00\u4e2a128EU/t\u7684\u8bbe\u5907\u4f9b\u7535.</br></br>\u53d8\u538b\u5668\u53ef\u5c06\u7535\u538b\u5347\u9ad8\u6216\u964d\u4f4e(\u5347\u538b\u6a21\u5f0f/\u964d\u538b\u6a21\u5f0f),\u7528\u8f6f\u9524\u5207\u6362. \u5347\u538b\u6a21\u5f0f\u5c31\u662f\u5c064A-LV\u8f93\u5165\u8f6c\u6362\u4e3a1A-MV\u8f93\u51fa;\u964d\u538b\u6a21\u5f0f\u76f8\u53cd. </br></br>\u5982\u679c\u4f60\u4e0d\u60f3\u8ba9\u4f60\u7684\u57fa\u5730\u6210\u4e3a\u706b\u5c71\u53e3,\u786e\u4fdd\u4f60\u7406\u89e3\u4e86\u4e0b\u9762\u7684\u5185\u5bb9: </br></br>\u964d\u538b\u6a21\u5f0f\u662f\u9ed8\u8ba4\u6a21\u5f0f.\u5728\u964d\u538b\u6a21\u5f0f,\u5927\u70b9\u7684\u4e00\u9762\u662f\u8f93\u5165\u9762. \u800c\u5347\u538b\u6a21\u5f0f\u65f6,\u8fd9\u4e00\u9762\u662f\u8f93\u51fa\u9762. \u8981\u662f\u4e0d\u60f3\u7206\u70b8,\u5343\u4e07\u4e0d\u8981\u5f04\u6df7\u4e86!LV\u673a\u5668\u63a5\u6536\u5230MV\u7535\u5c31\u4f1a\u7206\u70b8! </br></br>\u5982\u679c\u53d8\u538b\u5668\u76f4\u63a5\u4e0e\u7535\u6e90\u76f8\u8fde,\u6216\u662f\u7ecf\u8fc7\u7535\u6e90,\u5728\u8fde\u63a5\u4e86\u7535\u5668\u7684\u60c5\u51b5\u4e0b\u8bf7\u52ff\u5207\u6362\u53d8\u538b\u5668\u6a21\u5f0f.\u6700\u597d\u62c6\u6389\u540e\u91cd\u65b0\u653e\u4ee5\u6e05\u7a7a\u7f13\u5b58\u7684\u80fd\u91cf,\u800c\u4e0d\u662f\u7528\u6273\u624b\u65cb\u8f6c\u540e\u70b8\u6389\u4e00\u6392\u673a\u5668. \u8bf7\u786e\u8ba4\u5df2\u7ecf\u7528\u526a\u7ebf\u94b3\u65ad\u5f00\u4e86\u9644\u8fd1\u7684\u7ebf\u7f06. %%\u4e0d\u8fc7\u503c\u5f97\u8bb0\u4f4f\u7684\u662f,\u5982\u679c\u5b89\u57f9\u6570\u8d85\u8fc7\u4e86\u673a\u5668\u6240\u9700\u7684,\u662f\u4e0d\u4f1a\u7206\u70b8\u7684. \u5b83\u4eec\u4f1a\u56e0\u4e3a\u66f4\u9ad8\u7b49\u7ea7\u7684\u7535\u538b\u7206\u70b8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE8g==",
                    "title": "LV\u53d8\u538b\u5668",
                    "tooltip": "<strong>LV\u53d8\u538b\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV"
                },
                {
                    "name": "\u4e0a\u5e1d\u7684\u84c4\u7535\u6c60",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2586.png",
                    "x": -48.0,
                    "y": 468.0,
                    "data": "\u6709\u4e86\u8fd9\u4e2a\u5bb9\u91cf\u8d85\u8fc7600,000\u4e2a\u80fd\u6e90\u7ad9\u7684\u7535\u6c60,\u8c01\u8fd8\u8981\u80fd\u6e90\u7ad9\u554a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKGg==",
                    "title": "\u4e0a\u5e1d\u7684\u84c4\u7535\u6c60",
                    "tooltip": "<strong>\u4e0a\u5e1d\u7684\u84c4\u7535\u6c60</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>UHV\u8d85\u5bfc(2,097,152 EU/t)</br>\u529b\u573a\u53d1\u751f\u5668(UV)"
                },
                {
                    "name": "HV\u7535\u6c60\u5916\u58f3",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1143.png",
                    "x": 0.0,
                    "y": 180.0,
                    "data": "\u66f4\u597d\u7684\u673a\u5668\u9700\u8981\u66f4\u597d\u7684\u7535\u6c60\u6765\u9a71\u52a8. \u4f60\u9700\u8981\u5236\u4f5c\u4e00\u4e9bHV\u7535\u6c60\u5916\u58f3. \u800c\u4f60\u53ef\u4ee5\u51b3\u5b9a\u7528\u8fd9\u4e9b\u5916\u58f3\u914d\u5408\u9502\u3001\u9549\u3001\u94a0\u5236\u4f5c\u5145\u7535\u7535\u6c60,\u6216\u8005\u5c06\u5b83\u4eec\u5236\u4f5c\u6210\u4e00\u6b21\u6027\u7684\u9178\u6027\u7535\u6c60. \u4f46\u4e00\u822c\u63a8\u8350\u9502\u7535\u6c60\u6216\u94a0\u7535\u6c60.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEdw==",
                    "title": "HV\u7535\u6c60\u5916\u58f3",
                    "tooltip": "<strong>HV\u7535\u6c60\u5916\u58f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c3\u9636\u6bb5(HV)</br>MV\u7535\u6c60\u5916\u58f3"
                },
                {
                    "name": "HV\u7535\u6c60",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1144.png",
                    "x": 48.0,
                    "y": 180.0,
                    "data": "\u66f4\u597d\u7684\u673a\u5668\u9700\u8981\u66f4\u597d\u7684\u7535\u6c60.\u9502\u662f\u5236\u4f5c\u7535\u6c60\u6700\u597d\u7684\u6750\u6599.\u5efa\u8bae\u4f7f\u7528\u805a\u4e59\u70ef\u7684\u7ec4\u88c5\u673a\u914d\u65b9\u53ef\u4ee5\u8282\u7701\u8d44\u6e90(\u81f3\u5c11\u5728LV-HV\u9636\u6bb5).</br></br>[note]\u4f60\u53ea\u9700\u5b8c\u6210\u5176\u4e2d\u4e00\u9879\u8981\u6c42\u5373\u53ef.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEeA==",
                    "title": "HV\u7535\u6c60",
                    "tooltip": "<strong>HV\u7535\u6c60</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HV\u7535\u6c60\u5916\u58f3"
                },
                {
                    "name": "LESU\u5347\u7ea7-LuV\u7b49\u7ea7",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1830.png",
                    "x": 180.0,
                    "y": 264.0,
                    "data": "\u60f3\u8981\u5230\u8fbeLESU\u6240\u80fd\u63d0\u4f9b\u7684\u6700\u9ad8\u7535\u538b,\u4f60\u9700\u8981\u6dfb\u52a0\u66f4\u591a\u66f4\u591a\u7684LESU\u673a\u68b0\u65b9\u5757.\u603b\u5171\u9700\u89818193\u4e2aLESU\u673a\u68b0\u65b9\u5757(\u5305\u62ec\u6b64\u524d\u7684\u6240\u6709\u5347\u7ea7\u6240\u9700)\u80fd\u4f7fLESU\u63a5\u53d7LuV\u7535\u538b.\u8981\u63d0\u4ea4\u8fd9\u4e2a\u4efb\u52a1,\u4f60\u9700\u8981\u63d0\u4ea4\u7ad9(\u84b8\u6c7d\u65f6\u4ee3\u4efb\u52a1\u680f),\u56e0\u4e3a\u4f60\u7684\u7269\u54c1\u680f\u88c5\u4e0d\u4e0b96\u7ec4.</br></br>[note]\u6211\u662f\u8bf4,\u4f60\u53ef\u4ee5\u90a3\u4e48\u505a,\u4f46\u53ea\u8981\u5728\u81ea\u52a8\u5408\u6210\u505a\u5b8c\u4e4b\u540e\u52fe\u9009\u590d\u9009\u6846\u5c31\u597d\u4e86.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHJg==",
                    "title": "LESU\u5347\u7ea7-LuV\u7b49\u7ea7",
                    "tooltip": "<strong>LESU\u5347\u7ea7-LuV\u7b49\u7ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c6\u9636\u6bb5(LuV)</br>LESU\u5347\u7ea7-IV\u7b49\u7ea7"
                },
                {
                    "name": "\u65e0\u7ebf\u7684\u529b\u91cf!?",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7126666155324853443.png",
                    "x": 144.0,
                    "y": 180.0,
                    "data": "\u88ab\u57fa\u5730\u91cc\u9762\u5bc6\u5bc6\u9ebb\u9ebb\u7684\u7535\u7ebf\u6574\u5410\u4e86?\u538c\u5026\u4e86\u4e3a\u4e86\u6ee1\u8db3\u4f9b\u7535\u8981\u6c42\u4e0d\u65ad\u5347\u7ea7\u7ebf\u7f06\uff1f\u559c\u6b22\u57fa\u5730\u91cc\u9762\u5168\u662f\u95ea\u7535\uff1f</br></br>\u90a3\u4e48\u8fd9\u4e2a\u591a\u65b9\u5757\u6b63\u5408\u4f60\u610f.\u7279\u65af\u62c9\u7535\u5854\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u591a\u65b9\u5757\u7ed3\u6784,\u53ef\u4ee5\u65e0\u7ebf\u8f93\u51fa\u9ad8\u7535\u6d41,\u652f\u6301\u6240\u6709TecTech\u80fd\u6e90\u4ed3.</br></br>\u9996\u5148\u4f60\u8981\u5728\u7535\u5bb9\u4ed3\u91cc\u653e\u4e0a\u548c\u521d\u7ea7\u8d85\u5bfc\u7279\u65af\u62c9\u7ed5\u7ec4\u76f8\u540c\u7535\u538b\u7684\u7279\u65af\u62c9\u7535\u5bb9.\u7279\u65af\u62c9\u7ed5\u7ec4\u51b3\u5b9a\u4e86\u7535\u5854\u8f93\u51fa\u7684\u7535\u538b\u7ea7\u522b,\u7279\u65af\u62c9\u7535\u5bb9\u7684\u6570\u91cf\u51b3\u5b9a\u4e86\u7535\u5854\u80fd\u8f93\u51fa\u7684\u6700\u5927\u7535\u6d41\u6570.</br></br>\u4e00\u4e2a\u7535\u5bb9\u4ed3\u6700\u591a\u80fd\u653e16\u4e2a\u7279\u65af\u62c9\u7535\u5bb9,\u6240\u4ee5\u4f60\u53ef\u80fd\u9700\u8981\u6839\u636e\u7528\u7535\u9700\u6c42\u589e\u52a0\u7535\u5bb9\u4ed3\u6570\u91cf.</br></br>\u642d\u5efa\u597d\u7535\u5854\u540e,\u53f3\u51fb\u6253\u5f00\u63a7\u5236\u5668,\u6839\u636e\u9700\u8981\u914d\u7f6e\u7535\u5854\u7684\u6700\u5927\u4f20\u8f93\u8ddd\u79bb.\u8fd9\u4e2a\u914d\u7f6e\u73b0\u5728\u6709\u70b9bug, \u56e0\u6b64\u81f3\u5c11\u73b0\u5728\u4f60\u4e0d\u9700\u8981\u4efb\u4f55\u7b49\u79bb\u5b50\u5c31\u80fd\u8fdb\u884c\u914d\u7f6e.\u5bf9\u5e94\u7684\u9009\u9879\u662f\"\u7279\u65af\u62c9\u7535\u5854\u4f20\u8f93\u534a\u5f84\u8bbe\u7f6e\".</br></br>\u8bbe\u7f6e\u5b8c\u4f60\u7684\u7535\u5854\u4e4b\u540e\u8be5\u600e\u4e48\u8f93\u9001\u7535\u529b\u5230\u673a\u5668\u5462?\u5f88\u9ad8\u5174\u4f60\u95ee\u4e86.\u8981\u9001\u7535\u5230\u57fa\u5730\u8fd8\u9700\u8981\u4f7f\u7528\u7279\u65af\u62c9\u7ebf\u5708\u5e3d.\u628a\u7ebf\u5708\u5e3d\u5b89\u88c5\u5230\u673a\u5668\u4e0a,\u80fd\u6e90\u4ed3\u4e0a,\u751a\u81f3\u53d8\u538b\u5668\u4e0a\u90fd\u80fd\u8ba9\u5b83\u4eec\u4ece\u7535\u5854\u83b7\u5f97\u7535\u529b.\u80fd\u6e90\u4ed3\u6709\u70b9\u7279\u6b8a,\u9700\u8981\u9762\u671d\u4e0a\u624d\u80fd\u6b63\u786e\u83b7\u5f97\u7535\u529b.</br></br>[warn]\u8b66\u544a!\u7279\u65af\u62c9\u7535\u5854\u4f1a\u5f3a\u5236\u8f93\u51fa\u56fa\u5b9a\u7535\u538b\u7684\u7535\u6d41,\u6bd4\u5982\u8bf4EV\u6216\u8005IV.\u5f53\u4f60\u5347\u7ea7\u521d\u7ea7\u8d85\u5bfc\u7279\u65af\u62c9\u7ed5\u7ec4\u524d\u4e00\u5b9a\u8981\u786e\u8ba4\u4f60\u6240\u6709\u7684\u7ebf\u5708\u5e3d\u548c\u6536\u53d1\u5668\u5bf9\u5e94\u7684\u673a\u5668\u90fd\u80fd\u627f\u53d7\u5347\u7ea7\u540e\u7684\u7535\u538b.\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4\u673a\u5668\u7206\u70b8.[/warn]</br></br>[warn]\u5728\u5173\u95ed\u63a7\u5236\u5668\u4e4b\u524d\u8c03\u6574\u591a\u65b9\u5757\u7ed3\u6784\u4e5f\u4f1a\u5bfc\u81f4\u7206\u70b8.[/warn]",
                    "quest_id": "Dif-0NSERYGdGP7j8xAzPQ==",
                    "title": "\u65e0\u7ebf\u7684\u529b\u91cf!?",
                    "tooltip": "<strong>\u65e0\u7ebf\u7684\u529b\u91cf!?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u73af\u6c27\u5316\u7269"
                },
                {
                    "name": "\u7eb3\u7c73\u6c34\u6676",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/790.png",
                    "x": -48.0,
                    "y": 180.0,
                    "data": "\u7eb3\u7c73\u6c34\u6676\u7528\u4e8e\u5236\u4f5c\u7eb3\u7c73\u88c5\u7532.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADFg==",
                    "title": "\u7eb3\u7c73\u6c34\u6676",
                    "tooltip": "<strong>\u7eb3\u7c73\u6c34\u6676</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u91cf\u6c34\u6676"
                },
                {
                    "name": "\u8d85\u8fc74A?\u592a\u75af\u72c2\u4e86!",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1924.png",
                    "x": -288.0,
                    "y": 180.0,
                    "data": "\u4e3a\u771f\u6b63\u7684\u7528\u7535\u72c2\u4eba\u51c6\u5907,\u53ef\u5c0616A\u964d\u538b\u53d8\u4e3a64A\u7684\u9ad8\u80fd\u53d8\u538b\u5668,\u592a\u75af\u72c2\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHhA==",
                    "title": "\u8d85\u8fc74A?\u592a\u75af\u72c2\u4e86!",
                    "tooltip": "<strong>\u8d85\u8fc74A?\u592a\u75af\u72c2\u4e86!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u6d41\u4e0d\u591f?"
                },
                {
                    "name": "\u7535\u6d41\u4e0d\u591f?",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1923.png",
                    "x": -240.0,
                    "y": 180.0,
                    "data": "4A\u6216\u8005\u66f4\u591a\u600e\u4e48\u6837?\u9ad8\u7535\u6d41\u53d8\u538b\u5668\u53ef\u4ee5\u5c064A\u7535\u6d41\u964d\u538b\u53d8\u4e3a16A\u7535\u6d41.\u975e\u5e38\u9002\u5408\u5efa\u7acb\u5927\u578b\u7535\u7f51\u96c6\u4e2d\u4f9b\u7535,\u5e76\u4e3a\u4f60\u4ee5\u540e\u5c06\u9ad8\u6c61\u67d3\u53d1\u7535\u673a\u8fdc\u79bb\u4f60\u7684\u57fa\u5730\u505a\u51c6\u5907.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHgw==",
                    "title": "\u7535\u6d41\u4e0d\u591f?",
                    "tooltip": "<strong>\u7535\u6d41\u4e0d\u591f?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53d8\u5f62\u91d1\u521a,\u51fa\u51fb!(\u53d8\u538b\u5668)"
                },
                {
                    "name": "\u80fd\u91cf\u7f13\u51b2\u5668",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2049.png",
                    "x": 0.0,
                    "y": 276.0,
                    "data": "\u4f60\u5728\u80fd\u91cf\u65b9\u9762\u7684\u7814\u7a76\u8fdb\u5c55\u4f7f\u4f60\u53d1\u660e\u4e86\u80fd\u91cf\u7f13\u51b2\u5668-\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u5757,\u53ef\u4ee5\u5b58\u50a8\u5de8\u91cf\u80fd\u91cf,\u800c\u4e14\u53ef\u643a\u5e26.\u6bd4\u7535\u6c60\u66f4\u597d,\u8fd9\u4e9b\u8bbe\u5907\u53ef\u4ee5\u8bbe\u7f6e\u8f93\u51fa1-16A,\u518d\u52a0\u4e0a\u9ad8\u7535\u6d41\u53d8\u538b\u5668,\u4f60\u5c31\u80fd\u628a\u7535\u538b\u7b49\u7ea7\u5f3a\u884c\u63d0\u9ad8\u4e24\u7ea7.  \u8fd9\u4e2aHV\u80fd\u91cf\u7f13\u5b58\u5668\u53ef\u4ee5\u4e3aHV\u673a\u5668\u4f9b\u80fd\u51e0\u5c0f\u65f6,\u6216\u4e3aEV\u673a\u5668\u4f9b\u80fd\u5c06\u8fd1\u4e00\u5c0f\u65f6.\u975e\u5e38\u9002\u5408\u8fdc\u8ddd\u79bb\u91c7\u77ff\u4f5c\u4e1a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIAQ==",
                    "title": "\u80fd\u91cf\u7f13\u51b2\u5668",
                    "tooltip": "<strong>\u80fd\u91cf\u7f13\u51b2\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)"
                },
                {
                    "name": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u6c5e",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/611.png",
                    "x": -36.0,
                    "y": 36.0,
                    "data": "\u6c5e\u53ca\u9178\u6027\u7535\u6c60\u662f\u4e00\u6b21\u6027\u7535\u6c60,\u65b0\u6210\u54c1\u7535\u529b\u662f\u6ee1\u7684,\u4f46\u4e0d\u80fd\u5145\u7535.\u4e00\u65e6\u7535\u529b\u7528\u5b8c\u4e86,\u53ef\u4ee5\u4f7f\u7528\u63d0\u53d6\u673a\u8f6c\u6362\u56de\u5c0f\u578b\u7535\u6c60\u5916\u58f3.</br></br>\u8fd9\u4e9b\u7535\u6c60\u53ef\u4ee5\u653e\u5728LV\u7ea7GT\u673a\u5668\u7684\u7535\u6c60\u69fd\u4e2d,\u673a\u5668\u5c06\u4f18\u5148\u4f7f\u7528\u7535\u6c60\u7535\u529b.\u4e5f\u53ef\u4ee5\u5728LV\u7535\u6c60\u7bb1\u4e2d\u4f7f\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACYw==",
                    "title": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u6c5e",
                    "tooltip": "<strong>\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u6c5e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u6c60\u5408\u91d1</br>\u6c5e"
                },
                {
                    "name": "\u8ba9\u6c34\u6d41\u8d77\u6765\u5440~\u6d41\u8d77\u6765\u5440~",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2973.png",
                    "x": 216.0,
                    "y": 132.0,
                    "data": "...\u4e0d\u80fd\u518d\u5fcd\u4e86.\u8feb\u4e0d\u53ca\u5f85\u6536\u83b7\u4f60\u52aa\u529b\u5de5\u4f5c\u7684\u6210\u679c\u4e86!\u5c06\u6c34\u5e93\u7684\u8f93\u51fa\u4ed3\u4e0e\u6c34\u8f6e\u673a\u7684\u8f93\u5165\u4ed3\u8fde\u63a5\u8d77\u6765,\u4eab\u53d7\u6700\u7ec8\u7684\u80fd\u91cf\u5427!\u4f60\u53ef\u4ee5\u901a\u8fc7\u622a\u65ad\u6d41\u4f53\u8f93\u5165,\u6216\u4f7f\u7528\u673a\u5668\u63a7\u5236\u8986\u76d6\u677f,\u6682\u505c\u6b64\u591a\u65b9\u5757\u7ed3\u6784.\u5662,\u4f60\u7684\u6c34\u5c31\u4f1a\u91cd\u65b0\u56de\u5230\u8f93\u51fa\u4ed3.</br></br>\u795d\u8d3a\u4f60,\u5efa\u6210\u4e86\u81ea\u5df1\u7684\u6c34\u5e93!\u4eab\u53d7\u4f60\u7684\u7279\u5927\u53f7\u7535\u6c60\u5427!</br></br>\u5982\u679c\u4f60\u8fd8\u6709\u5176\u4ed6\u95ee\u9898\u3001\u53d1\u73b0\u4fe1\u606f\u7f3a\u5931\u6216\u8005\u6709\u4efb\u4f55\u5efa\u8bae,\u4e0d\u8981\u72b9\u8c6b,\u76f4\u63a5\u5230GTNH\u5b98\u65b9Discord\u6765\u627e\u6211\u5427.\u8bf7\u5728\u4f60\u53d1\u7684\u6d88\u606f\u4e2d\u52a0\u5165'@SinTh0r4s',\u4ee5\u786e\u4fdd\u6211\u53ef\u4ee5\u770b\u5230\u8fd9\u6761\u6d88\u606f.</br>",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALnQ==",
                    "title": "\u8ba9\u6c34\u6d41\u8d77\u6765\u5440~\u6d41\u8d77\u6765\u5440~",
                    "tooltip": "<strong>\u8ba9\u6c34\u6d41\u8d77\u6765\u5440~\u6d41\u8d77\u6765\u5440~</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u65e0\u9650\u50a8\u80fd"
                },
                {
                    "name": "\u8680\u523b\u5170\u6ce2\u987f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2148.png",
                    "x": -48.0,
                    "y": 276.0,
                    "data": "IV\u7b49\u7ea7\u7684\u7535\u6c60\u9700\u8981\u5927\u91cf\u7684\u8d44\u6e90.  \u9996\u5148,\u4f60\u9700\u8981\u6fc0\u5149\u8680\u523b8\u4e2a\u5170\u6ce2\u987f\u6c34\u6676.\u52a1\u5fc5\u5728\u8d85\u51c0\u95f4\u5185\u5b8c\u6210\u8fd9\u9879\u5de5\u4f5c.</br></br>\u00a74\u5b83\u4eec\u4e5f\u7528\u4e8e\u4e00\u4e9b\u5148\u8fdb\u7684AE2\u82af\u7247.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIZA==",
                    "title": "\u8680\u523b\u5170\u6ce2\u987f",
                    "tooltip": "<strong>\u8680\u523b\u5170\u6ce2\u987f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u6c34\u6676"
                },
                {
                    "name": "\u4e2d\u578b\u9502\u7535\u6c60",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1083.png",
                    "x": 48.0,
                    "y": 132.0,
                    "data": "\u66f4\u597d\u7684\u673a\u5668\u9700\u8981\u66f4\u597d\u7684\u7535\u6c60.\u9502\u662f\u5236\u4f5c\u7535\u6c60\u6700\u597d\u7684\u6750\u6599.</br></br>[note]\u4f60\u53ea\u9700\u5b8c\u6210\u5176\u4e2d\u4e00\u9879\u8981\u6c42\u5373\u53ef.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEOw==",
                    "title": "\u4e2d\u578b\u9502\u7535\u6c60",
                    "tooltip": "<strong>\u4e2d\u578b\u9502\u7535\u6c60</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u7535\u6c60\u5916\u58f3"
                },
                {
                    "name": "\u4ee5\u592a\u4e4b\u529b",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3235.png",
                    "x": -96.0,
                    "y": 516.0,
                    "data": "\u8fd9\u4e9b\u5168\u65b0\u7684\u4ed3\u5ba4\u8ba9\u4f60\u80fd\u4ece\u4efb\u4f55\u7ef4\u5ea6\u7684\u4efb\u4f55\u4f4d\u7f6e\u65e0\u7ebf\u53d1\u9001\u3001\u5b58\u50a8\u3001\u63a5\u6536\u80fd\u91cf.\u5b83\u4eec\u53ef\u4ee5\u653e\u7f6e\u5728\u4efb\u4f55\u73b0\u6709\u7684\u591a\u65b9\u5757\u7ed3\u6784\u4e2d,\u548c\u6b63\u5e38\u7684\u80fd\u6e90\u4ed3/\u52a8\u529b\u4ed3\u4f5c\u7528\u76f8\u540c.\u65e0\u7ebf\u52a8\u529b\u4ed3\u4f1a\u6d88\u8017EU,\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u4e00\u4e2a\u4e0e\u73a9\u5bb6\u7ed1\u5b9a\u7684\u5168\u5c40\u65e0\u7ebf\u7f51\u7edc\u4e2d.\u8fd9\u4e2a\u65e0\u7ebf\u7f51\u7edc\u53ef\u4ee5\u5b58\u50a82^(2^31)EU,\u8fdc\u8fdc\u8d85\u8fc7\u4e86\u751a\u81f3\u662f\u6700\u9ad8\u7b49\u7ea7\u7684\u6fc0\u5149\u4ed3.</br></br>\u53ea\u8981\u7528/gt global_energy_join \u73a9\u5bb61 \u73a9\u5bb62\u6307\u4ee4,\u5c31\u53ef\u4ee5\u5c06\u5176\u4ed6\u73a9\u5bb6\u52a0\u5165\u4f60\u7684\u65e0\u7ebf\u7f51\u7edc\u4e2d,\u5171\u4eab\u4e00\u4e2a\u7f51\u7edc.\u8fd9\u4f1a\u4f7f\u73a9\u5bb61\u5728\u4e0e\u5168\u5c40\u7f51\u7edc\u4ea4\u4e92\u65f6\u4f7f\u7528\u73a9\u5bb62\u7684\u80fd\u91cf.</br></br>\u4f60\u4e0d\u80fd\u5c06\u5bfc\u7ebf/\u7ebf\u7f06\u63a5\u5230\u65e0\u7ebf\u80fd\u6e90\u4ed3/\u52a8\u529b\u4ed3\u4e0a.\u5b83\u4eec\u662f\u4e3a\u4e86\u5c3d\u91cf\u964d\u4f4e\u6e38\u620f\u5ef6\u8fdf\u800c\u8bbe\u8ba1\u7684,\u8fd9\u610f\u5473\u7740\u4e3a\u4e86\u9632\u6b62\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\u53d1\u751f,EU\u4ea4\u4e92\u7684\u65f6\u95f4\u95f4\u9694\u8f83\u5927.\u8fd9\u6837\u4f60\u5c31\u65e0\u9700\u642d\u5efa\u5e9e\u5927\u7684\u5bfc\u7ebf\u7f51\u7edc,\u4ece\u800c\u8282\u7701\u4e0b\u4e00\u4e9bTPS\u5ef6\u8fdf.</br></br>[note]2^(2^31)\u662f\u4e00\u4e2a\u6709646,456,994\u4f4d\u7684\u6570\u5b57--\u5982\u679c\u4f60\u7684\u8ba1\u7b97\u5668\u7206\u4e86\u7684\u8bdd.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMow==",
                    "title": "\u4ee5\u592a\u4e4b\u529b",
                    "tooltip": "<strong>\u4ee5\u592a\u4e4b\u529b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u5757\u65f6\u7a7a"
                },
                {
                    "name": "\u7535\u6c60\u5408\u91d1",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/609.png",
                    "x": 0.0,
                    "y": -12.0,
                    "data": "\u4f7f\u7528\u5408\u91d1\u7089/\u6405\u62cc\u673a\u6df7\u5408\u9511\u8ddf\u94c5,\u53ef\u4ee5\u5f97\u5230\u7535\u6c60\u5408\u91d1.</br>\u5c06\u5176\u4e0e\u4e00\u4e9b\u9521\u7ebf\u7f06\u7ec4\u5408\u5c31\u53ef\u4ee5\u5f97\u5230\u5c0f\u578b\u7535\u6c60\u5916\u58f3.</br></br>\u5c0f\u578b",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACYQ==",
                    "title": "\u00a75\u00a7l\u7535\u6c60\u5408\u91d1",
                    "tooltip": "<strong>\u7535\u6c60\u5408\u91d1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c5\u8f9b\u4e07\u82e6\u627e\u5230\u94c5</br>\u9511"
                },
                {
                    "name": "\u53d8\u538b\u5e76...\u4fdd\u6301",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2731.png",
                    "x": -192.0,
                    "y": 324.0,
                    "data": "\u6709\u6e90\u53d8\u538b\u5668\u53ef\u4ee5\u8fdb\u884c\u4efb\u610f\u7535\u538b\u95f4\u7684\u53d8\u6362,\u800c\u635f\u8017\u4ec5\u4e3a0.004\uff05,\u5982\u679c\u4e0d\u4ecb\u610f\u8fd9\u90e8\u5206\u635f\u8017\u7684\u8bdd,\u4f7f\u7528\u6709\u6e90\u53d8\u538b\u5668\u53ef\u6bd4\u7528\u4e00\u5927\u4e32\u53d8\u538b\u5668\u5c42\u5c42\u53d8\u538b\u9ad8\u7aef\u591a\u4e86. \u4e0d\u8fc7\u8fd9\u73a9\u610f\u6709\u70b9\u8d35... \u540c\u65f6,\u8fd9\u53f0\u673a\u5668\u8fd8\u53ef\u4ee5\u7528\u4e8e\u8f6c\u6298\u6fc0\u5149\u4ed3\u53d1\u51fa\u7684\u6fc0\u5149,\u8bf4\u4e0d\u5b9a\u8fd9\u624d\u662f\u5b83\u7684\u6b63\u786e\u7528\u6cd5!</br></br>\u5b83\u65e0\u9700\u7ef4\u62a4\u4ed3,\u53ea\u9700\u6709\u8f93\u5165/\u8f93\u51fa\u4ed3\u5373\u53ef.</br></br>[warn]\u5982\u679c\u4e0d\u60f3\u5728\u62c6\u5378\u673a\u5668\u65f6\u5f15\u53d1\u7206\u70b8,\u4e00\u5b9a\u8bb0\u5f97\u5173\u6389'\u5bfc\u80fd'\u6309\u94ae![/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKqw==",
                    "title": "\u53d8\u538b\u5e76...\u4fdd\u6301",
                    "tooltip": "<strong>\u53d8\u538b\u5e76...\u4fdd\u6301</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6bd5\u4e1a\u4e4b\u8def\u7684\u5f00\u7aef"
                },
                {
                    "name": "\u5170\u6ce2\u987f\u7535\u5bb9(UV)",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2735.png",
                    "x": -144.0,
                    "y": 420.0,
                    "data": "\u76f8\u6bd4\u524d\u4e00\u7ea7\u7535\u5bb9,\u9664\u4e86\u80fd\u5b58\u50a8\u66f4\u591a\u7535\u80fd,\u5176\u4f59\u6ca1\u4ec0\u4e48\u533a\u522b. \u73b0\u5728,\u4f60\u7684\u5170\u6ce2\u987f\u8d85\u7ea7\u7535\u5bb9\u5e93\u53ef\u4ee5\u5b58\u50a85.4T\u523081T-EU.</br></br>[note]\u8981\u6c42IV\u7b49\u7ea7\u4ee5\u4e0a\u7684\u73bb\u7483.[/note]</br></br>[note]PS\uff1a \u6700\u9ad8\u7ea7\u7684\u7535\u5bb9\u4efb\u52a1\u5728\"\u7ec8\u6781\u76ee\u6807\"\u4efb\u52a1\u680f.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKrw==",
                    "title": "\u5170\u6ce2\u987f\u7535\u5bb9(UV)",
                    "tooltip": "<strong>\u5170\u6ce2\u987f\u7535\u5bb9(UV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u7535\u5bb9(ZPM)"
                },
                {
                    "name": "LESU\u5347\u7ea7-IV\u7b49\u7ea7",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1829.png",
                    "x": 216.0,
                    "y": 264.0,
                    "data": "24\u7ec4LESU\u673a\u68b0\u65b9\u5757.\u4f60\u7684\u7269\u54c1\u680f\u80fd\u88c5\u4e0b\u5b83\u4eec,\u4f46\u5408\u6210\u5c31\u662f\u53e6\u4e00\u4e2a\u95ee\u9898\u4e86.</br></br>[note]\u5982\u679c\u4f60\u4e0d\u60f3\u4e8b\u5148\u6e05\u7a7a\u80cc\u5305\u7684\u8bdd,\u505a\u51fa\u8db3\u591f\u7684\u6570\u91cf\u540e\u52fe\u9009\u590d\u9009\u6846\u5373\u53ef.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHJQ==",
                    "title": "LESU\u5347\u7ea7-IV\u7b49\u7ea7",
                    "tooltip": "<strong>LESU\u5347\u7ea7-IV\u7b49\u7ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>LESU\u5347\u7ea7-EV\u7b49\u7ea7</br>\u7b2c5\u9636\u6bb5(IV)"
                },
                {
                    "name": "16\u69fdLV\u7ea7\u7535\u6c60\u7bb1",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/664.png",
                    "x": 48.0,
                    "y": 84.0,
                    "data": "\u628a\u4f60\u7684\u7535\u6c60\u7bb1\u5347\u7ea7\u621016\u69fd,\u4f5c\u4e3a\u4e3b\u8981\u5b58\u7535\u8bbe\u5907. </br></br>\u4f60\u53ef\u4ee5\u7528\u4e0d\u540c\u7684\u7535\u529b\u7f13\u5b58\u7269\u54c1, \u4e3b\u8981\u662f\u7535\u6c60.\u53ef\u7528\u4e8e\u4e0d\u540c\u573a\u5408,\u6bd4\u5982\u5de5\u4e1a\u9ad8\u7089\u3001\u7535\u5f27\u7089\u3001\u70ed\u529b\u79bb\u5fc3\u673a\u7b49\u7b49.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACmA==",
                    "title": "16\u69fdLV\u7ea7\u7535\u6c60\u7bb1",
                    "tooltip": "<strong>16\u69fdLV\u7ea7\u7535\u6c60\u7bb1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u6c60\u7bb1"
                },
                {
                    "name": "\u80fd\u91cf\u6c34\u6676",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/789.png",
                    "x": -96.0,
                    "y": 180.0,
                    "data": "\u5728MV\u6405\u62cc\u673a\u4e2d\u6405\u62cc\u7ea2\u5b9d\u77f3\u7c89\u53ca\u7ea2\u77f3\u7c89,\u53ef\u4ee5\u83b7\u5f97\u80fd\u91cf\u6c34\u6676\u7c89. \u7136\u540e\u518d\u7528\u9ad8\u538b\u91dc\u5904\u7406\u5236\u5f97\u80fd\u91cf\u6c34\u6676. \u80fd\u91cf\u6c34\u6676\u53ef\u4ee5\u50a8\u5b581MEU,\u5de5\u4f5c\u65b9\u5f0f\u4e0eHV\u7535\u6c60\u4e00\u81f4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADFQ==",
                    "title": "\u80fd\u91cf\u6c34\u6676",
                    "tooltip": "<strong>\u80fd\u91cf\u6c34\u6676</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u73a9\u6ce5\u5df4"
                },
                {
                    "name": "\u7ebf\u7f06\u4e8c\u6781\u7ba1",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1821.png",
                    "x": -72.0,
                    "y": 84.0,
                    "data": "\u6709\u65f6\u5019\u4f60\u53ea\u9700\u8981\u4e00\u4e2a\u4e8c\u6781\u7ba1,\u65e0\u8bba\u662f\u4e3a\u4e86\u9632\u6b62\u7535\u6d41\u5728\u590d\u6742\u7684\u80fd\u91cf\u7cfb\u7edf\u4e2d\u56de\u6d41\u800c\u9020\u6210\u70e7\u7ebf,\u6216\u662f\u5728Thermos\u670d\u52a1\u5668\u7684\u533a\u5757\u8fb9\u7f18. \u5236\u4f5c\u4e00\u4e2a4A\u4e8c\u6781\u7ba1,\u6211\u4f1a\u9001\u4f60\u4e2a2A\u7684!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHHQ==",
                    "title": "\u00a75\u00a7l\u7ebf\u7f06\u4e8c\u6781\u7ba1",
                    "tooltip": "<strong>\u7ebf\u7f06\u4e8c\u6781\u7ba1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e8c\u6781\u7ba11"
                },
                {
                    "name": "10\u4ebfEU",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2150.png",
                    "x": -96.0,
                    "y": 324.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u8981\u4e00\u4e2a\u56fa\u5b9a\u7684\u7535\u6c60,\u5236\u4f5cAFSU\u5427,\u5b83\u53ef\u4ee5\u50a8\u5b5810\u4ebfEU\u8fd8\u80fd\u4e3a\u7269\u54c1\u5145\u7535.\u4f60\u53ef\u4ee5\u4f7f\u7528\u6273\u624b\u62c6\u5378\u5b83,\u4f46\u8fd9\u6837\u4f60\u4f1a\u5931\u53bb\u5b58\u50a8EU\u768420\uff05.\u8bb0\u5f97\u662f\u7528\u53f3\u952e\u800c\u4e0d\u662f\u7528\u5de6\u952e.\u5de6\u952e\u4f1a\u5bfc\u81f4\u4f60\u635f\u5931\u6240\u6709\u5b58\u50a8\u7684EU.</br></br>\u4f5c\u4e3a\u66ff\u4ee3\u65b9\u6848,\u5982\u679c\u4f60\u80fd\u505a\u5f97\u8d77\u7684\u8bdd,\u8bd5\u8bd5GT++\u7684\u80fd\u91cf\u7f13\u51b2\u5668\u5427.\u5b83\u4eec\u66f4\u8d35\u800c\u4e14\u65e0\u6cd5\u4e3a\u7269\u54c1\u5145\u7535,\u4f46\u5b58\u50a8\u91cf\u66f4\u591a,\u4e14\u4e0d\u4f1a\u635f\u5931EU,\u800c\u4e14\u8f93\u51fa\u53ef\u8bbe\u7f6e\u4e3a1-16A.\u67e5\u770bGT++\u4efb\u52a1\u680f\u4ee5\u83b7\u77e5\u66f4\u591a\u7ec6\u8282.</br></br>[note]\u5b83\u4eec\u53ef\u4ee5\u63a5\u6536\u65e0\u9650\u5927\u7684\u7535\u6d41,\u6240\u4ee5\u6216\u8bb8\u4f60\u9700\u8981\u914d\u5408\u4e8c\u6781\u7ba1\u6216\u5176\u4ed6\u4ec0\u4e48(\u5982\u679c\u4f60\u4e0d\u60f3\u5f71\u54cd\u5230\u4e3b\u7ebf\u4f9b\u7535\u7684\u8bdd).\u00a7r</br></br>\u00a75\u8bd1\u8005\u6ce8:\u4f60\u53ef\u4ee5\u7528\u624b\u63a8\u8f66\u642c\u8fd0AFSU,\u4e0d\u4f1a\u635f\u5931\u4efb\u4f55\u5b58\u50a8\u7684EU.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIZg==",
                    "title": "10\u4ebfEU",
                    "tooltip": "<strong>10\u4ebfEU</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u80fd\u91cf\u7403"
                },
                {
                    "name": "\u7535\u6d41\u5f97\u5230\u5904\u90fd\u662f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1418.png",
                    "x": -192.0,
                    "y": 228.0,
                    "data": "...\u5728\u6211\u7684\u68a6\u91cc. \u8981\u662f\u6211\u4eec\u53ef\u4ee5\u5c06\u6240\u6709\u53d1\u7535\u673a\u7ec4\u96c6\u4e2d\u5728\u4e00\u4e2a\u4f4d\u7f6e,\u800c\u4e0d\u662f\u5728\u6bcf\u53f0\u53d1\u7535\u673a\u4e0a\u8fde\u4e00\u5806\u7535\u6c60,\u8be5\u591a\u597d\u554a\uff1f \u628a\u5b83\u4eec\u653e\u5728\u57fa\u5730\u91cc\u8fdc\u79bb\u6d3b\u52a8\u8303\u56f4\u7684\u90e8\u5206\uff1f \u653e\u5728\u5bb6\u5916\u4e61\u4e0b\u7684\u67d0\u5904\uff1f \u8ba9\u52a8\u7269\u9762\u5bf9\u6c61\u67d3\u53bb\u5427. \u65e0\u8bba\u5982\u4f55,\u6765\u7740\u624b\u642d\u5efa\u80fd\u6e90\u7ad9\u5427,\u5b83\u53ef\u4ee5\u5b58\u50a8EU\u5e76\u4f9b\u7ed9\u6211\u4eec\u7684\u57fa\u5730.</br></br>\u8bd1\u8005\u6ce8:\u4e5f\u53ef\u4ee5\u8bd5\u8bd5\u5170\u6ce2\u987f\u8d85\u7ea7\u7535\u5bb9\u5e93,\u8be6\u89c1\"\u591a\u65b9\u5757\u7ed3\u6784\"\u4efb\u52a1\u680f\u7684\"\u4e8b\u4e0d\u8fc7\u4e09\"\u4efb\u52a1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFig==",
                    "title": "\u7535\u6d41\u5f97\u5230\u5904\u90fd\u662f",
                    "tooltip": "<strong>\u7535\u6d41\u5f97\u5230\u5904\u90fd\u662f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)"
                },
                {
                    "name": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9502",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/615.png",
                    "x": 36.0,
                    "y": 36.0,
                    "data": "\u94a0\u3001\u9549\u3001\u9502\u7535\u6c60\u90fd\u662f\u53ef\u5145\u7535\u7535\u6c60.\u65b0\u6210\u54c1\u6ca1\u6709\u7535\u529b,\u4f46\u53ef\u4ee5\u5728\u4efb\u4f55GT\u673a\u5668\u4e2d\u5145\u7535.\u5982\u679c\u4e0d\u9700\u8981\u4e86,\u53ef\u4ee5\u7528\u63d0\u53d6\u673a\u8f6c\u6362\u56de\u5c0f\u578b\u7535\u6c60\u5916\u58f3,\u4f46\u4f1a\u5931\u53bb\u5185\u5bb9\u7269.</br></br>[note]\u9502\u7535\u6c60\u7684\u50a8\u7535\u91cf\u662f\u4e09\u79cd\u7535\u6c60\u4e2d\u6700\u5927\u7684.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACZw==",
                    "title": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9502",
                    "tooltip": "<strong>\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9502</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u88c5\u7f50\u673a</br>\u7535\u6c60\u5408\u91d1"
                },
                {
                    "name": "\u5b89\u5168\u7b2c\u4e00",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2161.png",
                    "x": -192.0,
                    "y": 36.0,
                    "data": "\u5bf9\u4e8e\u90a3\u4e9bGT\u65b0\u624b,\u8fd9\u91cc\u6709\u4e9b\u7528\u7535\u65b9\u9762\u7684\u63d0\u793a\u548c\u8b66\u544a.</br></br>\u673a\u5668\u4e0d\u559c\u6b22\u6dcb\u96e8,\u5426\u5219\u9644\u8fd1\u5c31\u4f1a\u7740\u706b.\u800c\u673a\u5668\u9644\u8fd1\u7684\u706b\u6709\u968f\u673a\u51e0\u7387\u5f15\u7206\u673a\u5668.\u53e6\u5916,\u7ed9\u673a\u5668\u8fc7\u9ad8\u7535\u538b\u4e5f\u4f1a\u9020\u6210\u7206\u70b8.</br></br>\u5728\u7ebf\u7f06\u91cc\u4f20\u8f93\u8fc7\u9ad8\u7535\u538b\u6216\u8fc7\u5927\u7535\u6d41\u4f1a\u9020\u6210\u7ebf\u7f06\u88ab\u70e7\u6bc1\u5e76\u5728\u9644\u8fd1\u7740\u706b,\u800c\u8fd9\u53ef\u80fd\u9020\u6210\u673a\u5668\u7206\u70b8.\u786e\u4fdd\u53d1\u7535\u673a\u548c\u7535\u6c60\u63d0\u4f9b\u7684\u7535\u6d41\u6570\u4e0d\u8d85\u8fc7\u7ebf\u7f06/\u5bfc\u7ebf\u7684\u4f20\u8f93\u80fd\u529b.</br></br>\u4e00\u53f0\u4ea7\u751f1A\u7535\u6d41\u7684\u53d1\u7535\u673a\u53ef\u80fd\u53ef\u4ee5\u4e3a\u591a\u53f0\u673a\u5668\u4f9b\u7535-\u5982\u679c\u90a3\u4e9b\u673a\u5668\u8fd0\u884c\u7684\u914d\u65b9\u4f4e\u4e8e\u6ee1\u7535\u538b\u7684\u8bdd.\u4e3e\u4e2a\u4f8b\u5b50,\u7814\u78e8\u673a\u5904\u7406\u77ff\u77f3\u65f6\u53ea\u97002EU/t,\u6240\u4ee5\u4f60\u53ef\u4ee5\u7528\u4e00\u53f01A\u53d1\u7535\u673a\u5e26\u52a8\u597d\u51e0\u53f0\u53f0\u7814\u78e8\u673a,\u5982\u679c\u7ebf\u7f06\u4e0d\u592a\u957f\u7684\u8bdd.(\u56e0\u4e3a\u7ebf\u635f\u8ba1\u7b97\u5355\u4f4d\u4e3a/\u7535\u6d41/\u7c73.\u8bf7\u6ce8\u610f,\u7ebf\u7f06\u4f1a\u4f18\u4e8e\u5bfc\u7ebf.)\u4f46\u662f\u8981\u5f53\u5fc3!\u6709\u65f6\u914d\u65b9\u4f1a\u9700\u8981\u8d85\u8fc7\u4f60\u9884\u60f3\u7684\u9ad8\u7535\u538b,\u6bd4\u5982\u7814\u78e8\u673a\u6c99\u5b50-->\u77f3\u82f1\u77ff\u7802\u8fd9\u4e2a\u914d\u65b9.</br></br>\u5927\u90e8\u5206\u673a\u5668\u53ea\u4f1a\u7528\u52301A,\u4f46\u6709\u4e9b\u4f8b\u5916,\u5982\u7535\u5f27\u7089\u3001\u70ed\u529b\u79bb\u5fc3\u673a\u3001\u4e16\u754c\u52a0\u901f\u5668\u3001\u8d28\u91cf\u53d1\u751f\u5668.\u6ce8\u610f,\u4e3a\u4e86\u786e\u4fdd\u8fd0\u884c\u65f6\u7535\u529b\u5145\u8db3,\u673a\u5668\u53ef\u4ee5\u63a5\u53d7\u6bd4\u8fd0\u884c\u6240\u9700\u66f4\u9ad8\u7684\u7535\u6d41(\u901a\u5e38\u4e3a2A),\u8fd9\u5728\u7ebf\u635f\u8f83\u9ad8(\u901a\u5e38\u662f\u5728LV\u9636\u6bb5),\u673a\u5668\u63a5\u6536\u5230\u76841A\u7535\u529b\u5305\u635f\u5931\u4e86\u592a\u591a\u65f6,\u5c24\u5176\u91cd\u8981.\u673a\u5668\u63a5\u53d7\u6700\u5927\u7535\u6d41\u7684\u516c\u5f0f\u662f:[(2*\u914d\u65b9EU/t)/\u673a\u5668\u7535\u538b]+1.(\"[]\"\u8868\u793a\u5411\u4e0b\u53d6\u6574) \u9009\u7528\u7ebf\u7f06\u65f6\u8bf7\u7262\u8bb0\u8fd9\u70b9.</br></br>\u67d0\u4e9b\u673a\u5668\u4e13\u7528\u4e8e\u5904\u7406\u591aA\u7535\u6d41,\u6bd4\u5982\u7535\u6c60\u7bb1\u3001\u53d8\u538b\u5668\u548c\u7ebf\u7f06\u4e8c\u7ea7\u7ba1.\u8bf7\u67e5\u770b\"EU\u7684\u5b58\u50a8\u4e0e\u53d8\u538b\"\u4efb\u52a1\u680f,\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f.</br></br>\u5982\u679c\u4f60\u9700\u8981\u8f93\u9001\u5927\u7535\u6d41,\u53ef\u4ee5\u4f7f\u7528\u66f4\u7c97\u7684\u7ebf\u7f06\u6216\u8d85\u5bfc\u5bfc\u7ebf(MV+,\u53e6\u5916ULV\u548cLV\u4e5f\u6709\u81ea\u5df1\u7684\u65e0\u7ebf\u635f\u7ebf\u7f06).\u5728\u540e\u671f,\u4f60\u8fd8\u53ef\u4ee5\u7528\u6fc0\u5149\u4ed3\u8f93\u9001\u5de8\u91cf\u7535\u6d41. \u751a\u81f3\u8fd8\u6709\u65e0\u7ebfEU\u7f51\u7edc,\u4e0d\u8fc7\u73b0\u5728\u8fd8\u53ef\u671b\u800c\u4e0d\u53ef\u5373.</br></br>\u8df3\u7535\u7684\u5355\u65b9\u5757\u673a\u5668\u5728\u6709\u7535\u540e\u4f1a\u91cd\u65b0\u5f00\u59cb\u5904\u7406,\u4e0d\u4f1a\u541e\u6389\u7269\u54c1.\u4f46\u591a\u65b9\u5757\u673a\u5668\u8df3\u7535\u5c31\u4f1a\u541e\u6389\u7269\u54c1\u4e86.</br></br>\u8bf7\u6ce8\u610f,\u4efb\u4f55\u53d1\u9001EU\u7684\u65b9\u5757\u90fd\u5b58\u5728\u5185\u963b,\u7535\u538b\u635f\u5931\u4e3a\u6bcf\u5b89\u57f92^(\u7535\u538b\u7b49\u7ea7-1). \u6bd4\u5982LV\u635f\u59311EU,MV\u635f\u59312EU,\u4ee5\u6b64\u7c7b\u63a8.\u56e0\u6b64\u8fde\u7eed\u4f7f\u7528\u5927\u91cf\u7535\u6c60\u7bb1\u4f1a\u5bf9\u80fd\u91cf\u9020\u6210\u6781\u5927\u6d6a\u8d39,\u5c24\u5176\u5728\u4f4e\u7535\u538b\u9636\u6bb5,\u751a\u81f3\u4e00\u4e2a\u7535\u6c60\u7bb1\u90fd\u4f1a\u9020\u6210MV\u5de5\u4e1a\u9ad8\u7089\u65e0\u6cd5\u7a33\u5b9a\u8fd0\u884c,\u6216\u8bb8\u53d1\u7535\u673a\u76f4\u4f9b\u4f1a\u66f4\u597d? \u5f53\u7136,\u5982\u679c\u4f60\u60f3\u5728\u957f\u8ddd\u79bb\u5185\u4fdd\u6301\u7535\u6d41\u8f93\u9001\u59cb\u7ec8\u5904\u4e8e\u5cf0\u503c,\u8fd8\u662f\u5076\u5c14\u9700\u8981\u501f\u52a9\u7535\u6c60\u7bb1\u7684,\u4e0d\u8fc7\u968f\u7740\u7535\u538b\u7684\u5347\u9ad8,\u5176\u5185\u963b\u9020\u6210\u7684\u635f\u5931\u5f71\u54cd\u4e5f\u8d8a\u6765\u8d8a\u5c0f.</br></br>\u5982\u679c\u8fd9\u91cc\u8fd8\u6ca1\u6709\u770b\u660e\u767d\u7684\u8bdd,\u8bf7\u8f6c\u5230[url]https://wiki.gtnewhorizons.com/wiki/Electricity[/url] \u9605\u8bfb\u66f4\u591a\u4fe1\u606f.</br></br> \u4e2d\u6587 WIKI \u7535\u529b\uff1a[url]gtnh.huijiwiki.com/p/149[/url]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIcQ==",
                    "title": "\u00a73\u00a7l\u5b89\u5168\u7b2c\u4e00",
                    "tooltip": "<strong>\u5b89\u5168\u7b2c\u4e00</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u66f4\u591a\u84b8\u6c7d!"
                },
                {
                    "name": "EV\u7535\u6c60\u7bb1",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1262.png",
                    "x": 96.0,
                    "y": 228.0,
                    "data": "\u5b83\u662fEV\u7684,\u597d\u4e0d?</br></br>[note]\u5b8c\u6210\u4e00\u4e2a\u8981\u6c42\u5373\u53ef.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE7g==",
                    "title": "EV\u7535\u6c60\u7bb1",
                    "tooltip": "<strong>EV\u7535\u6c60\u7bb1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c4\u9636\u6bb5(EV)</br>HV\u7535\u6c60\u7bb1"
                },
                {
                    "name": "HV\u7535\u6c60\u7bb1",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1142.png",
                    "x": 96.0,
                    "y": 180.0,
                    "data": "HV\u7684\u673a\u5668\u4e5f\u9700\u8981\u7535\u6c60\u7bb1\u6765\u4f5c\u4e3a\u7535\u529b\u7f13\u51b2\u533a.\u540c\u6837,HV\u7535\u6c60\u7bb1\u4e5f\u67091X\u30014X\u30019X\u548c16X\u5404\u79cd\u5c3a\u5bf8.</br></br>[note]\u4f60\u53ea\u9700\u5b8c\u6210\u5176\u4e2d\u4e00\u9879\u8981\u6c42\u5373\u53ef.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEdg==",
                    "title": "HV\u7535\u6c60\u7bb1",
                    "tooltip": "<strong>HV\u7535\u6c60\u7bb1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u91cf\u6c34\u6676</br>HV\u7535\u6c60"
                },
                {
                    "name": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u9178",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/612.png",
                    "x": -72.0,
                    "y": 36.0,
                    "data": "\u6c5e\u53ca\u9178\u6027\u7535\u6c60\u662f\u4e00\u6b21\u6027\u7535\u6c60,\u65b0\u6210\u54c1\u7535\u529b\u662f\u6ee1\u7684,\u4f46\u4e0d\u80fd\u5145\u7535.\u4e00\u65e6\u7535\u529b\u7528\u5b8c\u4e86,\u53ef\u4ee5\u4f7f\u7528\u63d0\u53d6\u673a\u8f6c\u6362\u56de\u5c0f\u578b\u7535\u6c60\u5916\u58f3.</br></br>\u8fd9\u4e9b\u7535\u6c60\u53ef\u4ee5\u653e\u5728LV\u7ea7GT\u673a\u5668\u7684\u7535\u6c60\u69fd\u4e2d,\u673a\u5668\u5c06\u4f18\u5148\u4f7f\u7528\u7535\u6c60\u7684EU\u7535\u529b,\u7136\u540e\u624d\u662f\u5185\u90e8\u7684EU\u50a8\u5b58.\u7535\u6c60\u4e5f\u53ef\u4ee5\u5728LV\u7535\u6c60\u7bb1\u4e2d\u505a\u4e3a\u7f13\u51b2\u4f7f\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACZA==",
                    "title": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u9178",
                    "tooltip": "<strong>\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u9178</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u6c60\u5408\u91d1</br>\u786b\u91781"
                },
                {
                    "name": "\u80fd\u66f4\u9ad8\u5417\uff1f",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6876851311040355991.png",
                    "x": -144.0,
                    "y": 564.0,
                    "data": "\u540c\u65f6\u66f4\u9ad8\u7684EU\u4f20\u8f93\u901f\u7387\uff01",
                    "quest_id": "13PWs3MhTUOgkIQq8EKhaQ==",
                    "title": "\u80fd\u66f4\u9ad8\u5417\uff1f",
                    "tooltip": "<strong>\u80fd\u66f4\u9ad8\u5417\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6781\u7ec8\u4e0e\u7ec8\u6781"
                },
                {
                    "name": "\u53ef\u8c03\u53d8\u538b\u5668",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1822.png",
                    "x": -240.0,
                    "y": 228.0,
                    "data": "\u4f60\u662f\u5426\u88ab\u5efa\u9020\u4e00\u957f\u4e32\u5206\u7ea7\u53d8\u538b\u5668\u641e\u5f97\u6655\u5934\u8f6c\u5411?\u4e0d\u60f3\u8ba9\u4f60\u7684\u57fa\u5730\u6709\u7206\u70b8\u7684\u98ce\u9669?\u60f3\u8981\u4f7f\u7528TecTech\u768464A\u80fd\u6e90\u4ed3\u548c\u52a8\u529b\u4ed3\u6765\u8f6c\u6362\u4f60\u7684\u7535\u529b?\u5236\u4f5c\u4e00\u4e2a\u53ef\u8c03\u53d8\u538b\u5668\u5427!</br></br>[note]\u8fd8\u9700\u8981\u6d88\u58f0\u4ed3\u3001\u80fd\u6e90\u4ed3\u548c\u52a8\u529b\u4ed3. \u4e0d\u4fdd\u8bc1\u7a33\u5b9a\u5de5\u4f5c,\u53ea\u80fd\u795d\u4f60\u597d\u8fd0.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHHg==",
                    "title": "\u53ef\u8c03\u53d8\u538b\u5668",
                    "tooltip": "<strong>\u53ef\u8c03\u53d8\u538b\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86"
                },
                {
                    "name": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9549",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/614.png",
                    "x": 0.0,
                    "y": 36.0,
                    "data": "\u94a0\u3001\u9549\u3001\u9502\u7535\u6c60\u90fd\u662f\u53ef\u5145\u7535\u7535\u6c60.\u65b0\u6210\u54c1\u6ca1\u6709\u7535\u529b,\u4f46\u53ef\u4ee5\u5728\u4efb\u4f55GT\u673a\u5668\u4e2d\u5145\u7535.\u5982\u679c\u4e0d\u9700\u8981\u4e86,\u53ef\u4ee5\u7528\u63d0\u53d6\u673a\u8f6c\u6362\u56de\u5c0f\u578b\u7535\u6c60\u5916\u58f3,\u4f46\u4f1a\u5931\u53bb\u5185\u5bb9\u7269.</br></br>\u00a73\u9549\u7535\u6c60\u7684\u50a8\u7535\u91cf\u662f\u4e09\u79cd\u7535\u6c60\u4e2d\u4e2d\u7b49\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACZg==",
                    "title": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9549",
                    "tooltip": "<strong>\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9549</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u88c5\u7f50\u673a</br>\u7535\u6c60\u5408\u91d1"
                },
                {
                    "name": "\u5170\u6ce2\u987f\u7535\u5bb9(IV)",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2894.png",
                    "x": -144.0,
                    "y": 276.0,
                    "data": "\u6bd4\u8d77\u4e4b\u524d\u7684\u7248\u672c,\u5b83\u7684\u5bb9\u91cf\u66f4\u5927,\u5176\u4f59\u6ca1\u5565\u5dee\u522b. \u4f7f\u7528\u8fd9\u79cd\u7535\u5bb9,\u4f60\u7684\u5170\u6ce2\u987f\u8d85\u7ea7\u7535\u5bb9\u5e93\u53ef\u4ee5\u5bb9\u7eb35.4B\u523081B-EU.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALTg==",
                    "title": "\u5170\u6ce2\u987f\u7535\u5bb9(IV)",
                    "tooltip": "<strong>\u5170\u6ce2\u987f\u7535\u5bb9(IV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u80fd\u91cf\u7403</br>\u5f00\u5145!(Take charge!)"
                },
                {
                    "name": "\u5170\u6ce2\u987f\u7535\u5bb9(ZPM)",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2734.png",
                    "x": -144.0,
                    "y": 372.0,
                    "data": "\u76f8\u6bd4\u524d\u4e00\u7ea7\u7535\u5bb9,\u9664\u4e86\u80fd\u5b58\u50a8\u66f4\u591a\u7535\u80fd,\u5176\u4f59\u6ca1\u4ec0\u4e48\u533a\u522b. \u73b0\u5728,\u4f60\u7684\u5170\u6ce2\u987f\u8d85\u7ea7\u7535\u5bb9\u5e93\u53ef\u4ee5\u5b58\u50a8540B\u52308.1T-EU.</br></br>[note]\u8981\u6c42EV\u7b49\u7ea7\u4ee5\u4e0a\u7684\u73bb\u7483.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKrg==",
                    "title": "\u5170\u6ce2\u987f\u7535\u5bb9(ZPM)",
                    "tooltip": "<strong>\u5170\u6ce2\u987f\u7535\u5bb9(ZPM)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u7535\u5bb9(LuV)"
                },
                {
                    "name": "\u5170\u6ce2\u987f\u80fd\u91cf\u7403",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2149.png",
                    "x": -96.0,
                    "y": 276.0,
                    "data": "\u5170\u6ce2\u987f\u80fd\u91cf\u7403\u662fIV\u7b49\u7ea7\u7684\u7535\u6c60.\u5b83\u53ef\u4ee5\u5b58\u50a8100M-EU.</br></br>[note]\u63d0\u793a: \u5230\u4e86IV,\u53ef\u4ee5\u7528\u5b83\u4eec\u9020\u51e0\u53f0\u5904\u7406\u9635\u5217.\u975e\u5e38\u6709\u7528.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIZQ==",
                    "title": "\u5170\u6ce2\u987f\u80fd\u91cf\u7403",
                    "tooltip": "<strong>\u5170\u6ce2\u987f\u80fd\u91cf\u7403</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8680\u523b\u5170\u6ce2\u987f</br>\u7ea4\u7ef4\u5f3a\u5316\u7535\u8def\u57fa\u677f"
                },
                {
                    "name": "\u8c01\u5728\u4e4e\u4e00\u70b9\u764c\u75c7...",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1419.png",
                    "x": 48.0,
                    "y": 276.0,
                    "data": "...\u8981\u662f\u4f60\u53ef\u4ee5\u4e0d\u5fc5\u8131\u5149\u8863\u670d\u4e3a\u7eb3\u7c73\u5957\u88c5\u5145\u7535\uff1f</br>\u65e0\u7ebf\u5145\u7535\u5668\u53ef\u4ee5\u4e3a\u4f60\u7684\u88c5\u7532\u548c\u5de5\u5177\u5145\u7535(\u7b49\u4e8e\u6216\u5c0f\u4e8e\u5145\u7535\u5668\u7684\u7535\u538b\u7b49\u7ea7)(\u8bd1\u8005\u6ce8: \u5b9e\u6d4b\u5927\u4e8e\u4e5f\u80fd\u5145- -),\u800c\u65e0\u9700\u5c06\u5176\u653e\u5165\u7535\u6c60\u7f13\u51b2\u533a.</br></br>\u4f60\u8fd8\u662f\u4e0d\u60f3\u8981\u5b69\u5b50...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFiw==",
                    "title": "\u8c01\u5728\u4e4e\u4e00\u70b9\u764c\u75c7...",
                    "tooltip": "<strong>\u8c01\u5728\u4e4e\u4e00\u70b9\u764c\u75c7...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u78b3\u76ae\u80a4</br>\u91cf\u5b50\u4e4b\u773c"
                },
                {
                    "name": "\u5170\u6ce2\u987f\u7535\u5bb9(LuV)",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2733.png",
                    "x": -144.0,
                    "y": 324.0,
                    "data": "\u76f8\u6bd4\u524d\u4e00\u7ea7\u7535\u5bb9,\u9664\u4e86\u80fd\u5b58\u50a8\u66f4\u591a\u7535\u80fd,\u5176\u4f59\u6ca1\u4ec0\u4e48\u533a\u522b. \u73b0\u5728,\u4f60\u7684\u5170\u6ce2\u987f\u8d85\u7ea7\u7535\u5bb9\u5e93\u53ef\u4ee5\u5b58\u50a854B\u5230810B-EU.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKrQ==",
                    "title": "\u5170\u6ce2\u987f\u7535\u5bb9(LuV)",
                    "tooltip": "<strong>\u5170\u6ce2\u987f\u7535\u5bb9(LuV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u7535\u5bb9(IV)"
                },
                {
                    "name": "LV\u9ad8\u80fd\u53d8\u538b\u5668",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1269.png",
                    "x": -288.0,
                    "y": 84.0,
                    "data": "\u5982\u679c\u4f60\u9700\u8981\u66f4\u5927\u7684\u7535\u6d41,\u90a3\u4e48\u4f60\u5c31\u9700\u8981\u4f7f\u7528\u9ad8\u80fd\u53d8\u538b\u5668\u2014\u2014\u5b83\u5c06\u63d0\u4f9b\u9ad8\u8fbe64A\u7684\u8f93\u51fa\u7535\u6d41(\u8f93\u516516A). \u4f7f\u7528\u8f6f\u9524\u6539\u53d8\u53d8\u538b\u5668\u7684\u8fd0\u884c\u6a21\u5f0f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE9Q==",
                    "title": "LV\u9ad8\u80fd\u53d8\u538b\u5668",
                    "tooltip": "<strong>LV\u9ad8\u80fd\u53d8\u538b\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>LV\u9ad8\u7535\u6d41\u53d8\u538b\u5668"
                },
                {
                    "name": "\u5170\u6ce2\u987f\u80fd\u91cf\u5b58\u50a8\u77e9\u9635",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1820.png",
                    "x": 144.0,
                    "y": 228.0,
                    "data": "\u5170\u6ce2\u987f\u80fd\u91cf\u5b58\u50a8\u77e9\u9635(LESU)\u662fGT\u6700\u53e4\u8001\u4e14\u8fd8\u80fd\u4f7f\u7528\u7684\u673a\u5668\u4e4b\u4e00,\u5b83\u51fa\u73b0\u4e8eMC1.3.X\u7248\u672c,\u4f46\u4e3a\u4e86\u9002\u5e94\u8fd9\u4e2a\u6574\u5408\u5305,\u5b83\u88ab\u91cd\u505a\u4e86.\u4f60\u53ef\u4ee5\u6dfb\u52a0\u51e0\u4e4e\u65e0\u9650\u7684LESU\u673a\u68b0\u65b9\u5757,\u7136\u540e\u4f60\u5c31\u4f1a\u6709\u5de8\u91cf\u7684\u80fd\u91cf\u5b58\u50a8.\u4f60\u751a\u81f3\u53ef\u4ee5\u4f4f\u5728\u4f60\u7684\u7535\u6c60\u91cc.</br>%[note]3PS\uff1a\u8fd9\u73a9\u610f\u662f\u8fa3\u9e21,\u522b\u505a.\u6216\u8005\u6709\u4eba\u67d0\u5929\u4f1a\u91cd\u505a\u6216\u8005\u589e\u5f3a\u5b83\u5462.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHHA==",
                    "title": "\u5170\u6ce2\u987f\u80fd\u91cf\u5b58\u50a8\u77e9\u9635",
                    "tooltip": "<strong>\u5170\u6ce2\u987f\u80fd\u91cf\u5b58\u50a8\u77e9\u9635</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c21\u8870\u53d8</br>\u6c21\u5faa\u73af"
                },
                {
                    "name": "EV GT++\u7535\u6c60",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1265.png",
                    "x": 48.0,
                    "y": 228.0,
                    "data": "\u60f3\u8981\u66f4\u4fbf\u5b9c\u7684EV\u7535\u6c60? \u628a\u4f60\u7684\u65e7\u7535\u6c60\u653e\u5728\u4e00\u8d77\u6363\u788e,\u8bf4\u4e0d\u5b9a\u5c31\u80fd\u505a\u51fa\u6765\u4ec0\u4e48!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE8Q==",
                    "title": "EV GT++\u7535\u6c60",
                    "tooltip": "<strong>EV GT++\u7535\u6c60</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>EV\u7535\u6c60\u7bb1"
                },
                {
                    "name": "\u5170\u6ce2\u987f\u6c34\u6676",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/806.png",
                    "x": -96.0,
                    "y": 228.0,
                    "data": "\u4f7f\u7528\u4f60\u7684\u65b0HV\u6405\u62cc\u673a,\u4f60\u53ef\u4ee5\u5236\u4f5c\u5170\u6ce2\u987f\u7c89\u672b.\u5c06\u4e4b\u653e\u5165\u9ad8\u538b\u91dc\u6765\u5236\u4f5c\u672a\u52a0\u5de5\u7684\u5170\u6ce2\u987f\u6c34\u6676.\u4f7f\u7528EV\u7ec4\u88c5\u673a\u53ca\u9ad8\u7ea7\u7535\u8def,\u4f60\u53ef\u4ee5\u5236\u4f5c\u80fd\u50a8\u5b581\u5343\u4e07EU\u7684\u5170\u6ce2\u987f\u6c34\u6676.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADJg==",
                    "title": "\u5170\u6ce2\u987f\u6c34\u6676",
                    "tooltip": "<strong>\u5170\u6ce2\u987f\u6c34\u6676</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u7c89</br>HV\u7ea7\u6405\u62cc"
                },
                {
                    "name": "LESU\u5347\u7ea7-HV\u7b49\u7ea7",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1827.png",
                    "x": 252.0,
                    "y": 228.0,
                    "data": "\u8981\u5347\u7ea7\u5230HV\u7b49\u7ea7\u81f3\u5c11\u9700\u8981\u8d85\u8fc7\u4e00\u7ec4LESU\u673a\u68b0\u65b9\u5757.  \u66f4\u591a\u65b9\u5757,\u66f4\u591a\u80fd\u91cf,\u66f4\u9ad8\u7535\u538b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHIw==",
                    "title": "LESU\u5347\u7ea7-HV\u7b49\u7ea7",
                    "tooltip": "<strong>LESU\u5347\u7ea7-HV\u7b49\u7ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c3\u9636\u6bb5(HV)</br>LESU\u5347\u7ea7-MV\u7b49\u7ea7"
                },
                {
                    "name": "\u4e2d\u538b\u7535\u6c60\u7bb1",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1082.png",
                    "x": 96.0,
                    "y": 132.0,
                    "data": "MV\u673a\u5668\u53ef\u4ee5\u5185\u7f6e\u4e00\u4e2a\u7535\u6c60.\u4f46\u6709\u65f6\u4f60\u9700\u8981\u5b58\u50a8\u66f4\u591a\u80fd\u91cf,\u6216\u8005\u4f60\u60f3\u8ba9\u6574\u4e2a\u80fd\u91cf\u7ebf\u5171\u4eab\u7535\u6c60.\u4f60\u53ef\u4ee5\u4f7f\u7528\u7535\u6c60\u7bb1\u6765\u5b58\u50a8\u5927\u91cf\u7535\u6c60.\u5b83\u4eec\u6709\u5f88\u591a\u89c4\u683c,\u50cf1\u683c\u30014\u683c\u30019\u683c\u548c16\u683c. </br></br>[note]\u4f60\u53ea\u9700\u5b8c\u6210\u5176\u4e2d\u4e00\u9879\u8981\u6c42\u5373\u53ef.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEOg==",
                    "title": "\u4e2d\u538b\u7535\u6c60\u7bb1",
                    "tooltip": "<strong>\u4e2d\u538b\u7535\u6c60\u7bb1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e2d\u578b\u9502\u7535\u6c60"
                },
                {
                    "name": "LESU\u5347\u7ea7-EV\u7b49\u7ea7",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1828.png",
                    "x": 252.0,
                    "y": 264.0,
                    "data": "\u63a5\u8fd18\u7ec4LESU\u673a\u68b0\u65b9\u5757,\u4f7f\u4f60\u7684LESU\u80fd\u8fbe\u5230EV\u7535\u538b.\u5230\u76ee\u524d\u4e3a\u6b62\u90fd\u4e0d\u96be.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHJA==",
                    "title": "LESU\u5347\u7ea7-EV\u7b49\u7ea7",
                    "tooltip": "<strong>LESU\u5347\u7ea7-EV\u7b49\u7ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c4\u9636\u6bb5(EV)</br>LESU\u5347\u7ea7-HV\u7b49\u7ea7"
                },
                {
                    "name": "\u7ec8\u7ae0\uff1a\u6700\u540e\u7684\u7535\u5bb9\uff01",
                    "symbolSize": 78,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6434507911289406845.png",
                    "x": -144.0,
                    "y": 624.0,
                    "data": "\u8fd9\u5c31\u662f\u6700\u540e\u7684\u7535\u5bb9\u4e86\uff0c\u5f88\u9057\u61be\u4e0d\u80fd\u66f4\u8fdb\u4e00\u6b65\u3002",
                    "quest_id": "vrE4rYLuSnmmtAklayd6gw==",
                    "title": "\u00a76\u00a7l\u7ec8\u7ae0\uff1a\u6700\u540e\u7684\u7535\u5bb9\uff01",
                    "tooltip": "<strong>\u7ec8\u7ae0\uff1a\u6700\u540e\u7684\u7535\u5bb9\uff01</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u66f4\u9ad8\u5417\uff1f"
                },
                {
                    "name": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u94a0",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/613.png",
                    "x": 72.0,
                    "y": 36.0,
                    "data": "\u94a0\u3001\u9549\u3001\u9502\u7535\u6c60\u90fd\u662f\u53ef\u5145\u7535\u7535\u6c60.\u65b0\u6210\u54c1\u6ca1\u6709\u7535\u529b,\u4f46\u53ef\u4ee5\u5728\u4efb\u4f55GT\u673a\u5668\u4e2d\u5145\u7535.\u5982\u679c\u4e0d\u9700\u8981\u4e86,\u53ef\u4ee5\u7528\u63d0\u53d6\u673a\u8f6c\u6362\u56de\u5c0f\u578b\u7535\u6c60\u5916\u58f3,\u4f46\u4f1a\u5931\u53bb\u5185\u5bb9\u7269.</br></br>\u653e\u5165\u673a\u5668\u7535\u6c60\u69fd\u540e,\u5982\u679c\u6709\u5bcc\u4f59\u80fd\u91cf\u8f93\u5165\u7684\u8bdd,\u7535\u6c60\u4f1a\u81ea\u52a8\u5145\u7535,\u800c\u5f53\u5916\u90e8\u4f9b\u7535\u4e0d\u8db3\u65f6,\u7535\u6c60\u4f1a\u653e\u7535\u8865\u8db3. \u5efa\u8bae\u7528\u4e8e\u4e00\u4e9b\u9ad8\u8017\u7535\u673a\u5668,\u9632\u6b62\u51fa\u73b0\u8df3\u7535.</br></br>[note]\u94a0\u7535\u6c60\u7684\u50a8\u7535\u91cf\u662f\u4e09\u79cd\u7535\u6c60\u4e2d\u6700\u5c0f\u7684,\u4e0d\u8fc7\u5b83\u4e5f\u662f\u9020\u4ef7\u6700\u4f4e\u5ec9\u7684.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACZQ==",
                    "title": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u94a0",
                    "tooltip": "<strong>\u53ef\u5145\u7535\u7535\u6c60\uff1a\u94a0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u88c5\u7f50\u673a</br>\u7535\u6c60\u5408\u91d1"
                },
                {
                    "name": "\u91cf\u5b50\u6c34\u6676",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/807.png",
                    "x": -48.0,
                    "y": 228.0,
                    "data": "\u4f60\u9700\u8981\u4e00\u4e9b\u91cf\u5b50\u6c34\u6676,\u624d\u80fd\u5236\u9020\u91cf\u5b50\u62a4\u7532. \u5c06\u5170\u6ce2\u987f\u6c34\u6676\u653e\u5165\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a\u5904\u7406,\u53ef\u4ee5\u5236\u6210\u91cf\u5b50\u6c34\u6676.\u4e0d\u8fc7\u4f60\u8fd8\u5f97\u5230\u8fbeIV\u9636\u6bb5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADJw==",
                    "title": "\u91cf\u5b50\u6c34\u6676",
                    "tooltip": "<strong>\u91cf\u5b50\u6c34\u6676</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5170\u6ce2\u987f\u6c34\u6676</br>EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a"
                },
                {
                    "name": "\u65e0\u9650\u50a8\u80fd",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2971.png",
                    "x": 144.0,
                    "y": 132.0,
                    "data": "\u4f60\u4e0d\u5e94\u8be5\u70b9\u51fb\u964c\u751f\u4eba\u7684\u94fe\u63a5! \u867d\u7136\u8fd9\u770b\u8d77\u6765\u50cf\u6807\u9898\u515a,\u4f46\u8fd9\u662f\u771f\u7684(\u4ece\u67d0\u79cd\u89d2\u5ea6\u6765\u770b).</br></br>\u5229\u7528\u52bf\u80fd!\u5b58\u50a8\u80fd\u91cf! \u53ea\u9700\u8981\u5efa\u9020\u4e00\u4e2a\u6c34\u5e93,\u5e76\u7528\u6c34\u94fa\u6ee1\u8fd9\u5e7f\u9614\u7684\u533a\u57df. \u4f60\u5c31\u80fd\u901a\u8fc7\u6cf5\u5165\u66f4\u591a\u7684\u6c34\u5b58\u50a8\u80fd\u91cf,\u6216\u662f\u5c06\u6c34\u6392\u51fa\u4ee5\u83b7\u53d6\u80fd\u91cf. \u5b83\u5c24\u5176\u9002\u5408\u98ce\u3001\u6c34\u548c\u592a\u9633\u80fd\u7b49\u6ce2\u52a8\u7684\u80fd\u6e90.\u6216\u8005\u5728\u5e73\u65f6\u50a8\u5b58\u591a\u4f59\u7684\u80fd\u91cf,\u7b49\u5230\u6709\u9700\u8981\u4e86\u518d\u5feb\u901f\u653e\u51fa. \u6c34\u5e93\u7684\u5bb9\u91cf\u975e\u5e38\u5de8\u5927,\u800c\u9009\u62e9\u6743\u5728\u4f60.</br></br>\u542c\u8d77\u6765\u5f88\u68d2! \u4f46\u662f...? -\u7684\u786e. \u6709\u4e00\u4e2a\u9677\u9631\uff1a\u6cf5\u548c\u6da1\u8f6e\u90fd\u4e00\u5b9a\u7684\u635f\u5931(\u6548\u7387). \u4f60\u8fd8\u6709\u5174\u8da3? \u8ba9\u6211\u4eec\u5f00\u59cb\u5236\u9020\u5427!</br></br>\u8fd9\u53f0\u591a\u65b9\u5757\u7ed3\u6784\u5177\u6709\u4e0d\u540c\u5bfb\u5e38\u7684\u5916\u5f62\uff1a\u591a\u65b9\u5757\u7684\u4e0a\u65b9\u662f\u5f00\u653e\u7684.\u84c4\u6c34\u6e56\u5c06\u4ece\u591a\u65b9\u5757\u7ed3\u6784\u4e2d\u5ef6\u4f38\u51fa\u6765,\u5e76\u4e00\u683c\u4e00\u683c\u5c3d\u53ef\u80fd\u5730\u8513\u5ef6.\u8513\u5ef6\u4e2d\u4f1a\u5c06\u690d\u7269\u7528\u6c34\u66ff\u4ee3(\u8bf7\u4fdd\u62a4\u597d\u4f60\u7684IC2\u4f5c\u7269!),\u800c\u56fa\u4f53\u65b9\u5757\u4e0d\u4f1a\u88ab\u66ff\u4ee3. \u53e6\u5916,\u4f60\u53ef\u4ee5\u5728\u4efb\u610f\u65b9\u5411\u9650\u5236.\u6c34\u6c38\u8fdc\u4e0d\u4f1a\u8d8a\u8fc7\u8fd9\u4e9b\u9650\u5236.\u4f60\u53ef\u4ee5\u901a\u8fc7\u624b\u6301\u87ba\u4e1d\u5200\u53f3\u952e\u63a7\u5236\u5668\u65b9\u5757,\u4ee5\u6253\u5f00\u7b2c\u4e8cGUI,\u8bbe\u7f6e\u90a3\u4e9b\u9650\u5236.</br></br>\u5728\u4f60\u914d\u7f6e\u597d\u9650\u5236\u4e4b\u540e,\u5b83\u4f1a\u81ea\u52a8\u7ea0\u6b63\u5230\u6700\u8fd1\u7684\u6709\u6548\u8bbe\u7f6e.\u8fd9\u79cd\u7ea0\u6b63\u7ecf\u5e38\u53d1\u751f\u5728\u4f60\u8bd5\u56fe\u8bbe\u7f6e\u8d85\u8fc7\u670d\u52a1\u5668\u9650\u5236\u7684\u6570\u503c.\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u4e0e\u7ba1\u7406\u5458\u8ba8\u8bba\u63d0\u9ad8\u8fd9\u4e9b\u9650\u5236(\u8fd9\u4e9b\u9650\u5236\u5e94\u8be5\u662f\u7528\u6765\u9650\u5236\u6076\u610f\u7834\u574f\u7684). \u6b64\u5916,\u6c34\u65e0\u6cd5\u8513\u5ef6\u5230\u522b\u4eba\u7684\u57ce\u9547\u4e0a.</br>\u4f60\u8fd8\u5728\u8fd9\u4e2aGUI\u7684\u5de6\u4e0a\u89d2\u53d1\u73b0\u4e86\u4e09\u4e2a\u795e\u79d8\u6309\u94ae.\u4ece\u5de6\u5230\u53f3\uff1a\u7b2c\u4e00\u4e2a\u6309\u94ae\u4f1a\u7f13\u6162\u79fb\u9664\u84c4\u6c34\u6e56\u65b9\u5757.\u4f8b\u5982,\u4f60\u53ef\u4ee5\u5728\u84c4\u6c34\u6e56\u8513\u5ef6\u8fc7\u754c\u7684\u65f6\u5019\u5c06\u5176\u7f29\u5c0f. \u6b64\u591a\u65b9\u5757\u7ed3\u6784\u4e5f\u4f1a\u9ed8\u8ba4\u4f7f\u7528\u6b64\u914d\u7f6e,\u56e0\u6b64\u4f60\u4e0d\u7528\u62c5\u5fc3\u7a81\u7136\u53d1\u5927\u6c34. \u7b2c\u4e8c\u3001\u4e09\u4e2a\u6309\u94ae\u4f1a\u7f13\u6162\u751f\u6210\u66f4\u591a\u7684\u84c4\u6c34\u6e56\u65b9\u5757.\u53e6\u5916,\u7b2c\u4e8c\u4e2a\u6309\u94ae\u4f1a\u4ee5\u7c89\u8272\u663e\u793a\u90a3\u4e9b\u84c4\u6c34\u6e56\u65b9\u5757,\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u770b\u5230\u5b83\u4eec\u5c06\u4f1a\u5728\u54ea\u91cc\u751f\u6210,\u7136\u540e\u63d2\u4e2a\u6d1e\u6216\u8005\u522b\u7684\u4ec0\u4e48.\u5728\u6b64\"debug\"\u6a21\u5f0f\u4e2d,\u4f60\u53ef\u4ee5\u5982\u7a7a\u6c14\u4e2d\u4e00\u6837\u5728\u84c4\u6c34\u6e56\u4e2d\u884c\u8d70/\u547c\u5438/\u4ea4\u4e92.\u8fd9\u53ef\u4ee5\u8ba9\u4f60\u8f7b\u6613\u5efa\u9020\u4e00\u4e2a\u6c89\u6ca1\u7684\u6751\u5e84,\u88c5\u9970\u4f60\u7684\u6c34\u5e93. \u7b2c\u4e09\u4e2a\u6309\u94ae\u5c31\u662f\u6b63\u5e38\u6a21\u5f0f,\u4f60\u53ef\u4ee5\u770b\u5230\u6c34\u5e76\u5728\u4f60\u7684\u80fd\u91cf\u7535\u6c60\u4e2d\u7545\u6e38.</br></br>\u5f53\u7136,\u63a7\u5236\u5668\u65b9\u5757\u4e5f\u6709\u4e2a\u666e\u901aGUI(\u7a7a\u624b\u53f3\u952e).\u5b83\u4f1a\u5411\u4f60\u5c55\u793a\u5b58\u50a8\u4e8e\u6c34\u5e93\u4e2d\u7684\u80fd\u91cf.\u60f3\u8981\u8fbe\u5230\u66f4\u9ad8\u7684\u6c34\u4f4d\u9700\u8981\u66f4\u5f3a\u7684\u6c34\u6cf5.\u4e3a\u4e86\u8fbe\u5230\u8fd9\u4e00\u76ee\u7684,\u4f60\u53ef\u4ee5\u5728GUI\u7684\u7535\u8def\u677f\u63d2\u69fd\u4e2d\u63d2\u5165\u7535\u8def\u677f\u914d\u7f6e\u7535\u538b\u7b49\u7ea7.\u522b\u62c5\u5fc3\uff1a\u5c31\u7b97\u4f60\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u5f88\u4f4e\u7684\u7535\u538b\u7b49\u7ea7\u4e5f\u4e0d\u4f1a\u635f\u5931\u4efb\u4f55\u80fd\u91cf,\u8fd9\u53ea\u5f71\u54cd\u73a9\u5bb6\u4fe1\u606f.\u4f60\u53ef\u4ee5\u7528\u5956\u52b1\u7684\u7535\u8def\u677f\u8bd5\u8bd5\u770b...</br></br>\u5982\u679c\u4f60\u8fd8\u6709\u5176\u4ed6\u95ee\u9898\u3001\u53d1\u73b0\u4fe1\u606f\u7f3a\u5931\u6216\u8005\u6709\u4efb\u4f55\u5efa\u8bae,\u4e0d\u8981\u72b9\u8c6b,\u76f4\u63a5\u5230GTNH\u5b98\u65b9Discord\u6765\u627e\u6211\u5427.\u8bf7\u5728\u4f60\u53d1\u7684\u6d88\u606f\u4e2d\u52a0\u5165'@SinTh0r4s',\u4ee5\u786e\u4fdd\u6211\u53ef\u4ee5\u770b\u5230\u8fd9\u6761\u6d88\u606f.</br></br>[warn]\u8b66\u544a\uff1a\u5df2\u7ecf\u6709\u4e0d\u5c11\u6c34\u5e93\u5bfc\u81f4\u7684bug\u751a\u81f3\u574f\u6863\u7684\u62a5\u544a. \u4f7f\u7528\u65f6\u8bf7\u81ea\u8d1f\u98ce\u9669. \u5982\u679c\u4f60\u80fd\u63d0\u4f9b\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\uff0c\u8bf7\u524d\u5f80GTNH github\u4ed3\u5e93\u62a5\u544a\u3002[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALmw==",
                    "title": "\u65e0\u9650\u50a8\u80fd",
                    "tooltip": "<strong>\u65e0\u9650\u50a8\u80fd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "MV\u7535\u6c60\u5916\u58f3",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/758.png",
                    "x": 0.0,
                    "y": 132.0,
                    "data": "\u66f4\u597d\u7684\u673a\u5668\u9700\u8981\u66f4\u597d\u7684\u7535\u6c60.\u8ba9\u6211\u4eec\u4e3a\u65b0\u7535\u6c60\u505a\u4e9bMV\u7ea7\u7535\u6c60\u5916\u58f3.</br></br>\u968f\u4f60\u505a\u54ea\u79cd\u7535\u6c60.\u4f46\u4e00\u822c\u63a8\u8350\u9502\u7535\u6c60\u6216\u94a0\u7535\u6c60.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC9g==",
                    "title": "MV\u7535\u6c60\u5916\u58f3",
                    "tooltip": "<strong>MV\u7535\u6c60\u5916\u58f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7535\u6c60\u7bb1</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "MV\u53d8\u538b\u5668",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1267.png",
                    "x": -192.0,
                    "y": 132.0,
                    "data": "\u4f7f\u7528MV\u7535\u538b\u9a71\u52a8HV\u673a\u5668\u662f\u53ef\u4ee5\u5b9e\u73b0\u7684.\u5236\u9020\u4e00\u4e2aMV\u53d8\u538b\u5668,\u5e76\u4f7f\u75284\u4e2a128EU/t\u7684\u7535\u6e90\u6765\u7ed9\u4e00\u4e2a512EU/t\u7684\u8bbe\u5907\u4f9b\u7535.\u4f60\u53ef\u4ee5\u4f7f\u7528\u8f6f\u9524\u6765\u8c03\u6574\u53d8\u538b\u5668\u7684\u6a21\u5f0f. \u6ce8\u610f:\u5982\u679c\u53d8\u538b\u5668\u5df2\u7ecf\u63a5\u5165\u7535\u7f51,\u6216\u8005\u53d8\u538b\u5668\u5df2\u7ecf\u8d1f\u8f7d\u673a\u5668\u5de5\u4f5c,\u90a3\u4e48\u5343\u4e07\u4e0d\u8981\u6539\u53d8\u6a21\u5f0f,\u5426\u5219\u4f60\u5c06\u4f1a\u770b\u5230\u673a\u5668\u7ec4\u6210\u7684\u70df\u82b1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE8w==",
                    "title": "MV\u53d8\u538b\u5668",
                    "tooltip": "<strong>MV\u53d8\u538b\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>LV\u53d8\u538b\u5668</br>\u7b2c2\u9636\u6bb5(MV)"
                },
                {
                    "name": "\u53d8\u5f62\u91d1\u521a,\u51fa\u51fb!(\u53d8\u538b\u5668)",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1922.png",
                    "x": -192.0,
                    "y": 180.0,
                    "data": "\u5f53\u4f60\u8fdb\u5165HV\u65f6\u4ee3\u540e,\u4f60\u53ef\u80fd\u4f1a\u5f00\u59cb\u8003\u8651\u96c6\u4e2d\u53d1\u7535\u8bbe\u5907\u5e76\u8fdb\u884c\u957f\u8ddd\u79bb\u8f93\u7535.\u4e00\u53f0HV\u5347EV\u7684\u53d8\u538b\u5668\u5c06\u4f7f\u4f60\u80fd\u4f4e\u635f\u8017\u5730\u8fdb\u884c\u957f\u8ddd\u79bb\u8f93\u7535.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHgg==",
                    "title": "\u53d8\u5f62\u91d1\u521a,\u51fa\u51fb!(\u53d8\u538b\u5668)",
                    "tooltip": "<strong>\u53d8\u5f62\u91d1\u521a,\u51fa\u51fb!(\u53d8\u538b\u5668)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c3\u9636\u6bb5(HV)</br>MV\u53d8\u538b\u5668"
                },
                {
                    "name": "LESU\u5347\u7ea7-MV\u7b49\u7ea7",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1826.png",
                    "x": 216.0,
                    "y": 228.0,
                    "data": "\u6dfb\u52a0\u66f4\u591aLESU\u673a\u68b0\u65b9\u5757\u4e0d\u4f46\u4f1a\u63d0\u5347\u4f60\u7684\u50a8\u80fd\u91cf,\u8fd8\u4f1a\u4f7fLESU\u5347\u7ea7\u5230MV\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHIg==",
                    "title": "LESU\u5347\u7ea7-MV\u7b49\u7ea7",
                    "tooltip": "<strong>LESU\u5347\u7ea7-MV\u7b49\u7ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>LESU\u5347\u7ea7-LV\u7b49\u7ea7"
                },
                {
                    "name": "LV\u9ad8\u7535\u6d41\u53d8\u538b\u5668",
                    "symbolSize": 39,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1268.png",
                    "x": -240.0,
                    "y": 84.0,
                    "data": "\u5982\u679c\u4f60\u9700\u8981\u901a\u8fc7\u53d8\u538b\u5668\u8f93\u51fa\u4e00\u4e2a4A\u4ee5\u4e0a\u7684\u7535\u6d41,\u90a3\u4e48\u4f60\u9700\u8981\u4e00\u4e2a\u9ad8\u7535\u6d41\u53d8\u538b\u5668. \u4f60\u53ef\u4ee5\u8f93\u51654A-MV,\u8f93\u51fa16A-LV. \u8fd9\u5728\u9700\u8981\u8ba9\u5927\u91cfLV\u673a\u5668\u540c\u65f6\u8fd0\u884c\u65f6\u975e\u5e38\u6709\u7528. \u9ad8\u7535\u6d41\u53d8\u538b\u5668\u540c\u6837\u53ef\u4ee5\u4f7f\u7528\u8f6f\u9524\u6539\u53d8\u5347\u538b/\u964d\u538b\u6a21\u5f0f,\u4e0e\u4e4b\u524d\u7684\u666e\u901a\u53d8\u538b\u5668\u7c7b\u4f3c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE9A==",
                    "title": "LV\u9ad8\u7535\u6d41\u53d8\u538b\u5668",
                    "tooltip": "<strong>LV\u9ad8\u7535\u6d41\u53d8\u538b\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>LV\u53d8\u538b\u5668"
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
                    "source": "\u5170\u6ce2\u987f\u7535\u5bb9(UV)",
                    "target": "LSC"
                },
                {
                    "source": "\u4ee5\u592a\u4e4b\u529b",
                    "target": "\u6781\u7ec8\u4e0e\u7ec8\u6781"
                },
                {
                    "source": "\u597d\u523a\u773c! #4",
                    "target": "\u6781\u7ec8\u4e0e\u7ec8\u6781"
                },
                {
                    "source": "LSC",
                    "target": "\u6781\u7ec8\u4e0e\u7ec8\u6781"
                },
                {
                    "source": "\u65e0\u9650\u50a8\u80fd",
                    "target": "\u52a0\u6cb9\u62bd\u5440~\u563f\u54df~"
                },
                {
                    "source": "EV\u7535\u6c60\u7bb1",
                    "target": "EV\u9633\u5149\u5316\u5408\u7269\u7535\u6c60"
                },
                {
                    "source": "\u84dd\u94a2",
                    "target": "EV\u9633\u5149\u5316\u5408\u7269\u7535\u6c60"
                },
                {
                    "source": "\u8d85\u51c0\u95f4",
                    "target": "\u522b\u628a\u624b\u6307\u63d2\u8fdb\u63d2\u5ea7\u91cc"
                },
                {
                    "source": "\u5170\u6ce2\u987f\u80fd\u91cf\u5b58\u50a8\u77e9\u9635",
                    "target": "LESU\u5347\u7ea7-LV\u7b49\u7ea7"
                },
                {
                    "source": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u6c5e",
                    "target": "\u7535\u6c60\u7bb1"
                },
                {
                    "source": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u9178",
                    "target": "\u7535\u6c60\u7bb1"
                },
                {
                    "source": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u94a0",
                    "target": "\u7535\u6c60\u7bb1"
                },
                {
                    "source": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9549",
                    "target": "\u7535\u6c60\u7bb1"
                },
                {
                    "source": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9502",
                    "target": "\u7535\u6c60\u7bb1"
                },
                {
                    "source": "\u5170\u6ce2\u987f\u6c34\u6676",
                    "target": "\u5f00\u5145!(Take charge!)"
                },
                {
                    "source": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u5f00\u5145!(Take charge!)"
                },
                {
                    "source": "\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV",
                    "target": "LV\u53d8\u538b\u5668"
                },
                {
                    "source": "UHV\u8d85\u5bfc(2,097,152 EU/t)",
                    "target": "\u4e0a\u5e1d\u7684\u84c4\u7535\u6c60"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(UV)",
                    "target": "\u4e0a\u5e1d\u7684\u84c4\u7535\u6c60"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "HV\u7535\u6c60\u5916\u58f3"
                },
                {
                    "source": "MV\u7535\u6c60\u5916\u58f3",
                    "target": "HV\u7535\u6c60\u5916\u58f3"
                },
                {
                    "source": "HV\u7535\u6c60\u5916\u58f3",
                    "target": "HV\u7535\u6c60"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "LESU\u5347\u7ea7-LuV\u7b49\u7ea7"
                },
                {
                    "source": "LESU\u5347\u7ea7-IV\u7b49\u7ea7",
                    "target": "LESU\u5347\u7ea7-LuV\u7b49\u7ea7"
                },
                {
                    "source": "\u73af\u6c27\u5316\u7269",
                    "target": "\u65e0\u7ebf\u7684\u529b\u91cf!?"
                },
                {
                    "source": "\u80fd\u91cf\u6c34\u6676",
                    "target": "\u7eb3\u7c73\u6c34\u6676"
                },
                {
                    "source": "\u7535\u6d41\u4e0d\u591f?",
                    "target": "\u8d85\u8fc74A?\u592a\u75af\u72c2\u4e86!"
                },
                {
                    "source": "\u53d8\u5f62\u91d1\u521a,\u51fa\u51fb!(\u53d8\u538b\u5668)",
                    "target": "\u7535\u6d41\u4e0d\u591f?"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u80fd\u91cf\u7f13\u51b2\u5668"
                },
                {
                    "source": "\u7535\u6c60\u5408\u91d1",
                    "target": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u6c5e"
                },
                {
                    "source": "\u6c5e",
                    "target": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u6c5e"
                },
                {
                    "source": "\u65e0\u9650\u50a8\u80fd",
                    "target": "\u8ba9\u6c34\u6d41\u8d77\u6765\u5440~\u6d41\u8d77\u6765\u5440~"
                },
                {
                    "source": "\u5170\u6ce2\u987f\u6c34\u6676",
                    "target": "\u8680\u523b\u5170\u6ce2\u987f"
                },
                {
                    "source": "MV\u7535\u6c60\u5916\u58f3",
                    "target": "\u4e2d\u578b\u9502\u7535\u6c60"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u5757\u65f6\u7a7a",
                    "target": "\u4ee5\u592a\u4e4b\u529b"
                },
                {
                    "source": "\u94c5\u8f9b\u4e07\u82e6\u627e\u5230\u94c5",
                    "target": "\u7535\u6c60\u5408\u91d1"
                },
                {
                    "source": "\u9511",
                    "target": "\u7535\u6c60\u5408\u91d1"
                },
                {
                    "source": "\u6bd5\u4e1a\u4e4b\u8def\u7684\u5f00\u7aef",
                    "target": "\u53d8\u538b\u5e76...\u4fdd\u6301"
                },
                {
                    "source": "\u5170\u6ce2\u987f\u7535\u5bb9(ZPM)",
                    "target": "\u5170\u6ce2\u987f\u7535\u5bb9(UV)"
                },
                {
                    "source": "LESU\u5347\u7ea7-EV\u7b49\u7ea7",
                    "target": "LESU\u5347\u7ea7-IV\u7b49\u7ea7"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "LESU\u5347\u7ea7-IV\u7b49\u7ea7"
                },
                {
                    "source": "\u7535\u6c60\u7bb1",
                    "target": "16\u69fdLV\u7ea7\u7535\u6c60\u7bb1"
                },
                {
                    "source": "\u73a9\u6ce5\u5df4",
                    "target": "\u80fd\u91cf\u6c34\u6676"
                },
                {
                    "source": "\u4e8c\u6781\u7ba11",
                    "target": "\u7ebf\u7f06\u4e8c\u6781\u7ba1"
                },
                {
                    "source": "\u5170\u6ce2\u987f\u80fd\u91cf\u7403",
                    "target": "10\u4ebfEU"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u7535\u6d41\u5f97\u5230\u5904\u90fd\u662f"
                },
                {
                    "source": "\u57fa\u7840\u88c5\u7f50\u673a",
                    "target": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9502"
                },
                {
                    "source": "\u7535\u6c60\u5408\u91d1",
                    "target": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9502"
                },
                {
                    "source": "\u66f4\u591a\u84b8\u6c7d!",
                    "target": "\u5b89\u5168\u7b2c\u4e00"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "EV\u7535\u6c60\u7bb1"
                },
                {
                    "source": "HV\u7535\u6c60\u7bb1",
                    "target": "EV\u7535\u6c60\u7bb1"
                },
                {
                    "source": "\u80fd\u91cf\u6c34\u6676",
                    "target": "HV\u7535\u6c60\u7bb1"
                },
                {
                    "source": "HV\u7535\u6c60",
                    "target": "HV\u7535\u6c60\u7bb1"
                },
                {
                    "source": "\u7535\u6c60\u5408\u91d1",
                    "target": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u9178"
                },
                {
                    "source": "\u786b\u91781",
                    "target": "\u4e00\u6b21\u6027\u7535\u6c60\uff1a\u9178"
                },
                {
                    "source": "\u6781\u7ec8\u4e0e\u7ec8\u6781",
                    "target": "\u80fd\u66f4\u9ad8\u5417\uff1f"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u53ef\u8c03\u53d8\u538b\u5668"
                },
                {
                    "source": "\u57fa\u7840\u88c5\u7f50\u673a",
                    "target": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9549"
                },
                {
                    "source": "\u7535\u6c60\u5408\u91d1",
                    "target": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u9549"
                },
                {
                    "source": "\u5170\u6ce2\u987f\u80fd\u91cf\u7403",
                    "target": "\u5170\u6ce2\u987f\u7535\u5bb9(IV)"
                },
                {
                    "source": "\u5f00\u5145!(Take charge!)",
                    "target": "\u5170\u6ce2\u987f\u7535\u5bb9(IV)"
                },
                {
                    "source": "\u5170\u6ce2\u987f\u7535\u5bb9(LuV)",
                    "target": "\u5170\u6ce2\u987f\u7535\u5bb9(ZPM)"
                },
                {
                    "source": "\u8680\u523b\u5170\u6ce2\u987f",
                    "target": "\u5170\u6ce2\u987f\u80fd\u91cf\u7403"
                },
                {
                    "source": "\u7ea4\u7ef4\u5f3a\u5316\u7535\u8def\u57fa\u677f",
                    "target": "\u5170\u6ce2\u987f\u80fd\u91cf\u7403"
                },
                {
                    "source": "\u78b3\u76ae\u80a4",
                    "target": "\u8c01\u5728\u4e4e\u4e00\u70b9\u764c\u75c7..."
                },
                {
                    "source": "\u91cf\u5b50\u4e4b\u773c",
                    "target": "\u8c01\u5728\u4e4e\u4e00\u70b9\u764c\u75c7..."
                },
                {
                    "source": "\u5170\u6ce2\u987f\u7535\u5bb9(IV)",
                    "target": "\u5170\u6ce2\u987f\u7535\u5bb9(LuV)"
                },
                {
                    "source": "LV\u9ad8\u7535\u6d41\u53d8\u538b\u5668",
                    "target": "LV\u9ad8\u80fd\u53d8\u538b\u5668"
                },
                {
                    "source": "\u6c21\u8870\u53d8",
                    "target": "\u5170\u6ce2\u987f\u80fd\u91cf\u5b58\u50a8\u77e9\u9635"
                },
                {
                    "source": "\u6c21\u5faa\u73af",
                    "target": "\u5170\u6ce2\u987f\u80fd\u91cf\u5b58\u50a8\u77e9\u9635"
                },
                {
                    "source": "EV\u7535\u6c60\u7bb1",
                    "target": "EV GT++\u7535\u6c60"
                },
                {
                    "source": "\u5170\u6ce2\u987f\u7c89",
                    "target": "\u5170\u6ce2\u987f\u6c34\u6676"
                },
                {
                    "source": "HV\u7ea7\u6405\u62cc",
                    "target": "\u5170\u6ce2\u987f\u6c34\u6676"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "LESU\u5347\u7ea7-HV\u7b49\u7ea7"
                },
                {
                    "source": "LESU\u5347\u7ea7-MV\u7b49\u7ea7",
                    "target": "LESU\u5347\u7ea7-HV\u7b49\u7ea7"
                },
                {
                    "source": "\u4e2d\u578b\u9502\u7535\u6c60",
                    "target": "\u4e2d\u538b\u7535\u6c60\u7bb1"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "LESU\u5347\u7ea7-EV\u7b49\u7ea7"
                },
                {
                    "source": "LESU\u5347\u7ea7-HV\u7b49\u7ea7",
                    "target": "LESU\u5347\u7ea7-EV\u7b49\u7ea7"
                },
                {
                    "source": "\u80fd\u66f4\u9ad8\u5417\uff1f",
                    "target": "\u7ec8\u7ae0\uff1a\u6700\u540e\u7684\u7535\u5bb9\uff01"
                },
                {
                    "source": "\u57fa\u7840\u88c5\u7f50\u673a",
                    "target": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u94a0"
                },
                {
                    "source": "\u7535\u6c60\u5408\u91d1",
                    "target": "\u53ef\u5145\u7535\u7535\u6c60\uff1a\u94a0"
                },
                {
                    "source": "\u5170\u6ce2\u987f\u6c34\u6676",
                    "target": "\u91cf\u5b50\u6c34\u6676"
                },
                {
                    "source": "EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "target": "\u91cf\u5b50\u6c34\u6676"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "\u65e0\u9650\u50a8\u80fd"
                },
                {
                    "source": "\u7535\u6c60\u7bb1",
                    "target": "MV\u7535\u6c60\u5916\u58f3"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "MV\u7535\u6c60\u5916\u58f3"
                },
                {
                    "source": "LV\u53d8\u538b\u5668",
                    "target": "MV\u53d8\u538b\u5668"
                },
                {
                    "source": "\u7b2c2\u9636\u6bb5(MV)",
                    "target": "MV\u53d8\u538b\u5668"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u53d8\u5f62\u91d1\u521a,\u51fa\u51fb!(\u53d8\u538b\u5668)"
                },
                {
                    "source": "MV\u53d8\u538b\u5668",
                    "target": "\u53d8\u5f62\u91d1\u521a,\u51fa\u51fb!(\u53d8\u538b\u5668)"
                },
                {
                    "source": "LESU\u5347\u7ea7-LV\u7b49\u7ea7",
                    "target": "LESU\u5347\u7ea7-MV\u7b49\u7ea7"
                },
                {
                    "source": "LV\u53d8\u538b\u5668",
                    "target": "LV\u9ad8\u7535\u6d41\u53d8\u538b\u5668"
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
    