
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
                    "name": "\u4e09\u52a0\u56db,\u518d\u5e26\u4e0a\u4e8c...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1912.png",
                    "x": 828.0,
                    "y": 60.0,
                    "data": "\u5728\u6ce8\u9b54\u7684\u65f6\u5019,\u8981\u662f\u80fd\u77e5\u9053\u51c6\u786e\u7a33\u5b9a\u5ea6\u5c31\u597d\u4e86. \u5f53\u4f60\u5230\u8fbeHV\u540e,\u4f60\u5c31\u53ef\u4ee5\u5236\u4f5c\u5965\u672f\u8ba1\u7b97\u5668\u4e86,\u7528\u5b83\u53ef\u4ee5\u8ffd\u8e2a\u4f60\u7684\u6ce8\u9b54.\u8fd9\u5c31\u610f\u5473\u7740\u6ce8\u9b54\u767e\u5206\u4e4b\u767e\u5b89\u5168,\u5bf9\u5427??",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHeA==",
                    "tooltip": "<strong>\u4e09\u52a0\u56db,\u518d\u5e26\u4e0a\u4e8c...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "\u66f4\u597d\u7684\u6d41\u4f53\u7ba1\u9053",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2046.png",
                    "x": 108.0,
                    "y": 252.0,
                    "data": "\u65e2\u7136\u4f60\u6709\u4e86\u94c5,\u4f60\u5c31\u53ef\u4ee5\u628a\u4f60\u7684\u9752\u94dc\u6d41\u4f53\u7ba1\u9053\u6362\u6210\u5177\u6709\u66f4\u9ad8\u5bb9\u91cf\u7684\u7c97\u9752\u94dc\u5408\u91d1\u6d41\u4f53\u7ba1\u9053\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH_g==",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u6d41\u4f53\u7ba1\u9053</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c5\u3001\u65b9\u94c5\u3001\u94f6\u548c\u51b0\u6676\u77f3"
                },
                {
                    "name": "Adding More Funtions",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5563376651650091647.png",
                    "x": 396.0,
                    "y": -36.0,
                    "data": "One such improvement is the Advanced Redcrystal.\n\nIt allows you to set a threshold with your wand to define how strong a signal needs to be in order to pass through. This can come in handy when checking fill level of tanks or power storage.\n\n[note]One caveat for redstone experts: The Advanced Redcrystal checks the signal strength in the block it is in, not in the previous block like a comparator would.[/note]",
                    "quest_id": "ad_fPxg-ThqyyuppTrG1gQ==",
                    "tooltip": "<strong>Adding More Funtions</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Solid, Directional Redstone"
                },
                {
                    "name": "\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/234.png",
                    "x": 588.0,
                    "y": 252.0,
                    "data": "\u5728\u4f60\u627e\u5bfb\u548c\u5f00\u91c7\u8574\u9b54\u77f3\u7684\u65f6\u5019\u4f60\u6709\u4e00\u4e2a\u60f3\u6cd5,\u5982\u4f55\u771f\u6b63\u4f7f\u7528\u5b8f\u4f1f\u4e4b\u6728\u6765\u5236\u4f5c\u4e00\u6839\u65b0\u7684\u6cd5\u6756.\u5b9e\u9645\u4e0a\u8fd9\u5f88\u7b80\u5355,\u4f46\u662f\u8fc7\u53bb\u4f60\u7f3a\u5c11\u4e00\u4e9b\u5f88\u91cd\u8981\u7684\u4e1c\u897f\u2014\u2014VIS! \u5728\u5236\u4f5c\u5b8f\u4f1f\u4e4b\u6728\u6756\u67c4\u7684\u8fc7\u7a0b\u4e2d\u9700\u8981\u4f7f\u7528VIS\u7684\u529b\u91cf\u6765\u4fdd\u8bc1\u8fd9\u795e\u5947\u7684\u6728\u5934\u4e0d\u4f1a\u5931\u53bb\u5b83\u5e94\u6709\u7684\u529b\u91cf!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA6g==",
                    "tooltip": "<strong>\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6539\u8fdb\u4f60\u7684\u6cd5\u6756"
                },
                {
                    "name": "Alleviating Warp",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7122426930826890446.png",
                    "x": 300.0,
                    "y": -36.0,
                    "data": "When you get poisoned or withered a bit of milk solves the problem. Why not create something akin to milk, but for Warp effects?\n\nBriar gives a bit of an answer to that. These two block tall plants, which require good light to grow, will produce Briar Seed Bags when harvested. Those can be combined with sugar and a suitable container in an Arcane Workbench to create Rosehip Syrup.\n\nRosehip Syrup stacks up to 16 and can be used the same as milk, also removing some (though not all) Warp effects as well as Flux Flue and Flux Phage.\n\nThe plant has a strange life cycle where the seed pods will first appear as yellow dots, turn pink as they start to mature, then disappear, only to return fully matured. Still, if it works, it works.",
                    "quest_id": "gVqhKJAoTfudKA5xUWMzMg==",
                    "tooltip": "<strong>Alleviating Warp</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6cd5\u6ce5\u571f"
                },
                {
                    "name": "\u66f4\u5f3a\u5927\u7684\u529b\u91cf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/236.png",
                    "x": 588.0,
                    "y": 204.0,
                    "data": "\u5a1c\u8fe6\u7684\u529b\u91cf\u5f88\u5f31,\u4f7f\u7528\u5a1c\u8fe6\u9cde\u7247\u5236\u9020\u7684\u6cd5\u6756\u4ec5\u80fd\u4fdd\u5b58\u6709\u9650\u7684\"VIS\".\u4f60\u9700\u8981\u4e00\u4e2a\u66f4\u597d\u3001\u66f4\u5f3a\u5927\u7684\u5bb9\u5668\u6765\u8ba9\u4f60\u7684\u6cd5\u6756\u50a8\u5b58\u66f4\u591a\u7684\"VIS\".\u4f60\u542c\u8bf4\u8fc7\u66ae\u8272\u68ee\u6797\u90aa\u6076\u7684\u5deb\u5996\u7684\u4f20\u8bf4\u4e48\uff1f\u4e5f\u8bb8...\u4ed6\u6709\u4e00\u4e9b\u4e1c\u897f\u662f\u4f60\u60f3\u8981\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA7A==",
                    "tooltip": "<strong>\u66f4\u5f3a\u5927\u7684\u529b\u91cf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756"
                },
                {
                    "name": "\u706b\u628a\u7684\u4ee3\u66ff\u54c1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/255.png",
                    "x": 492.0,
                    "y": 60.0,
                    "data": "\u8fd8\u53ef\u4ee5\u66ff\u4ee3\u5ca9\u6d46!\u5b83\u53ef\u662f\u5f88\u597d\u7684\u9b54\u6cd5\u70ed/\u5149\u6e90.\u4e5f\u53ef\u7528\u4e8e\u5769\u57da\u4e0b\u65b9\u4f5c\u4e3a\u70ed\u6e90! \u4e0d\u8fc7\u5deb\u672f\u7684\u5769\u57da\u53ef\u4e0d\u8ba4\u8fd9\u4e2a. :(",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA_w==",
                    "tooltip": "<strong>\u706b\u628a\u7684\u4ee3\u66ff\u54c1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "\u6709\u7528\u7684\u690d\u7269",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/302.png",
                    "x": 348.0,
                    "y": 12.0,
                    "data": "\u4e00\u822c\u7684\u690d\u7269\u90fd\u662f\u7528\u6765\u5236\u4f5c\u98df\u7269\u7684.\u4f46\u662f\u4f60\u60f3\u77e5\u9053\u662f\u5426\u80fd\u5f97\u5230\u4e00\u4e9b\"\u66f4\u52a0\u7279\u6b8a\"\u7684\u690d\u7269...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABLg==",
                    "tooltip": "<strong>\u6709\u7528\u7684\u690d\u7269</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6cd5\u6ce5\u571f"
                },
                {
                    "name": "A Pechuliar Merchant",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6442987415315414167.png",
                    "x": 156.0,
                    "y": 108.0,
                    "data": "During your travels, you've heard about a forest filled to the brim with magic. In that forest, there is a rumor about an interesting little fellow who can trade magical artifacts, including infused shards! Supposedly, they scour the world for gems and gold, but are cold to wanderers who have no valuables to their name.\n \nYou wonder if you can find this merchant and obtain their wares. If only there was a tool that could help find this... \"Magical Forest\".\n\n[note]Note: This quest accepts meeting any type of Pech, not just Pech Foragers.[/note]",
                    "quest_id": "TvVeFhtYQCSmlekVCdADaQ==",
                    "tooltip": "<strong>A Pechuliar Merchant</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756"
                },
                {
                    "name": "\u5f00\u91c7\u963f\u8fea\u7279\u548c\u94b4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1837.png",
                    "x": 108.0,
                    "y": 60.0,
                    "data": "\u94c1\u6728\u6bd4\u4f60\u60f3\u8c61\u7684\u8fd8\u8981\u575a\u56fa\u8010\u7528.\u7528\u5b83\u5236\u4f5c\u7684\u5de5\u5177\u548c\u88c5\u7532\u6709\u4f18\u8d8a\u7684\u6027\u80fd.\u7528\u5b83\u5236\u4f5c\u9550,\u5f00\u91c7\u7b49\u7ea7\u80fd\u8fbe\u5230\u94b4,\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4e0d\u7528\u5de5\u4e1a\u9ad8\u7089\u4e5f\u80fd\u83b7\u5f97\u963f\u8fea\u7279\u548c\u94b4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHLQ==",
                    "tooltip": "<strong>\u5f00\u91c7\u963f\u8fea\u7279\u548c\u94b4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c1\u6728"
                },
                {
                    "name": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/227.png",
                    "x": 408.0,
                    "y": 204.0,
                    "data": "\u73b0\u5728\u4f60\u9700\u8981\u4e00\u4e2a\u53f0\u5b50,\u53ef\u4ee5\u5728\u5176\u4e0a\u5236\u9020\u9b54\u6cd5\u7269\u54c1.\u5b83\u53ef\u80fd\u4e5f\u662f\u4e00\u4e2a\u5c0f\u5c0f\u7684\u9b54\u6cd5\u7269\u54c1. \u8ba9\u6211\u4eec\u6765\u770b\u770b\u4e66\u4e0a\u662f\u600e\u4e48\u8bf4\u7684.%n%n\u6216\u8bb8\u6211\u9700\u8981\u8d81\u6b64\u673a\u4f1a,\u597d\u597d\u7814\u8bfb\u4e00\u4e0b\u9b54\u5bfc\u624b\u518c,\u4e86\u89e3\u90a3\u4e9b\u672a\u77e5\u7684\u77e5\u8bc6,\u800c\u4e0d\u662f\u5728Discord\u4e0a\u4e1c\u95ee\u897f\u95ee\u663e\u5f97\u50cf\u4e00\u4e2a\u667a\u8005.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA4w==",
                    "tooltip": "<strong>\u5965\u6cd5\u5de5\u4f5c\u53f0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e66\u5199\u5de5\u5177"
                },
                {
                    "name": "\u5e73\u8861\u788e\u7247\u548c\u4e16\u754c\u76d0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/242.png",
                    "x": 348.0,
                    "y": 108.0,
                    "data": "\u5728\u795e\u79d8\u5769\u57da\u4e2d\u628a6\u4e2d\u57fa\u672c\u5143\u7d20\u548c\u5143\u7d20\u788e\u7247\u6405\u62cc\u5728\u4e00\u8d77,\u4f60\u5c31\u4f1a\u5f97\u5230\u5e73\u8861\u788e\u7247.\u5c06\u5e73\u8861\u788e\u7247\u78e8\u788e\u540e\u4f60\u53ef\u4ee5\u5f97\u5230\"\u4e16\u754c\u76d0\",\u8fd9\u7edd\u5bf9\u662f\u5f88\u91cd\u8981\u7684\u4e00\u79cd\u7269\u8d28,\u76f8\u4fe1\u6211!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA8g==",
                    "tooltip": "<strong>\u5e73\u8861\u788e\u7247\u548c\u4e16\u754c\u76d0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "\u66f4\u597d\u7684\u87ba\u4e1d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/235.png",
                    "x": 588.0,
                    "y": 300.0,
                    "data": "\u5f88\u4e0d\u5e78,\u4f60\u7684\u94dd\u87ba\u4e1d\u5df2\u7ecf\u4e0d\u80fd\u56fa\u5b9a\u5b8f\u4f1f\u4e4b\u6728\u6728\u68cd\u4e86.\u4e0d\u77e5\u4e3a\u4ec0\u4e48,\u5b8f\u4f1f\u4e4b\u6728\u6728\u68cd\u6709\u4e00\u79cd\u795e\u79d8\u7684\u529b\u91cf\u5728\u6392\u65a5\u7740\u94dd\u87ba\u4e1d.\u4e0d\u8fc7\u5e78\u8fd0\u7684\u662f,\u4f60\u6709\u4e00\u4e2a\u9ad8\u7089,\u53ef\u4ee5\u5236\u4f5c\u51fa\u6bd4\u94dd\u66f4\u597d\u7684\u91d1\u5c5e\u4e86. \u5feb\u53bb\u8bd5\u4e00\u8bd5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA6w==",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u87ba\u4e1d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756"
                },
                {
                    "name": "\u5495\u565c...\u5495\u565c...\u5495\u565c...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1106.png",
                    "x": 348.0,
                    "y": 252.0,
                    "data": "\u917f\u9020\u53f0\u53ef\u4ee5\u917f\u9020\u5404\u79cd\u5404\u6837\u7684\u836f\u6c34,\u6bd4\u5982\u8bf4\u591c\u89c6\u3001\u6cbb\u7597\u3001\u6025\u901f\u4ee5\u53ca\u8df3\u8dc3.\u4e5f\u53ef\u4ee5\u5236\u9020\u4e00\u4e9b\u653b\u51fb\u6027\u836f\u5242\u6216\u8005\u55b7\u6e85\u578b\u836f\u6c34. \u917f\u9020\u53f0\u540c\u65f6\u8fd8\u662f\u673a\u5668\u917f\u9020\u5ba4\u7684\u539f\u6750\u6599\u4e4b\u4e00.%n%n\u53ea\u8981\u6709\u6700\u57fa\u7840\u7684\u6cd5\u6756\u5c31\u53ef\u4ee5\u5236\u9020\u51fa\u917f\u9020\u53f0.%n%n\u5177\u4f53\u7684\u5408\u6210\u8868\u53ef\u4ee5\u5728\u9b54\u5bfc\u624b\u518c\u4e2d\u7684GTNH\u9875\u9762\u627e\u5230.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEUg==",
                    "tooltip": "<strong>\u5495\u565c...\u5495\u565c...\u5495\u565c...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u6cd5\u5de5\u4f5c\u53f0"
                },
                {
                    "name": "\u9774\u5b50\u662f\u7528\u6765\u8d70\u8def\u7684",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1997.png",
                    "x": 732.0,
                    "y": 60.0,
                    "data": "\u4e5f\u7528\u6765\u6e38\u6cf3...\u5728\u73af\u6e38\u4e16\u754c\u65f6,\u8fd9\u4e9b\u65c5\u884c\u8005\u4e4b\u9774\u4f1a\u8ba9\u4f60\u5feb\u51fa\u6b8b\u5f71.\u60f3\u8981\u5236\u4f5c\u5b83\u4eec,\u4f60\u5f97\u5148\u7814\u7a76\u7814\u7a76\u6ce8\u9b54.%n%n\u8fd8\u6709\u7535\u5b50\u7248\u672c,\u62e5\u6709\u66f4\u9ad8\u7684\u9b54\u529b\u51cf\u514d,\u8bf7\u67e5\u9605'\u7535\u5b50\u9b54\u6cd5\u5de5\u5177'\u7ae0\u8282.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHzQ==",
                    "tooltip": "<strong>\u9774\u5b50\u662f\u7528\u6765\u8d70\u8def\u7684</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u662f\u8c01,\u4e00\u4e2a\u5973\u88c1\u7f1d?</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2146.png",
                    "x": 444.0,
                    "y": 12.0,
                    "data": "\u81ea\u52a8\u5316\u9b54\u6cd5\u975e\u5e38\u5de7\u5999,\u53ea\u6709\"\u806a\u660e\u7684\"\u6cd5\u5e08\u624d\u9700\u8981\u7814\u7a76\u5b83.\u5236\u4f5c\u4e00\u4e9b\u6c34\u6676\u4e4b\u8111\u5e76\u626b\u63cf\u5b83\u4eec,\u4ee5\u89e3\u9501\u4e0b\u4e00\u9636\u6bb5.\u4f60\u4f1a\u7528\u5230\u50f5\u5c38\u4e4b\u8111,\u901a\u5e38\u4ece\u51f6\u9669\u8282\u70b9\u5237\u51fa\u7684\u5371\u9669\u7684\u7ea2\u773c\u5de8\u4eba\u50f5\u5c38\u8eab\u4e0a\u6536\u96c6\u800c\u6765.%n%n\u8bd1\u8005\u6ce8:\u539f\u6807\u9898\u4e3a\"BRRRRAAAAAAAIIIIIIINNNNNNNSSSSS\".",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIYg==",
                    "tooltip": "<strong>\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "\u4eba\u9760\u8863\u88c5...\u5deb\u5e08\u4e5f\u4e00\u6837",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2065.png",
                    "x": 444.0,
                    "y": 252.0,
                    "data": "\u5deb\u5e08\u5b9d\u5177(Witching-Gadgets)\u7684\u7eba\u8f66\u4f1a\u89e3\u9501\u4e00\u4e9b\u6709\u7528\u7684\u6750\u6599\u4e0e\u7269\u54c1.\u5e0c\u671b\u6ca1\u6709\u8ba8\u538c\u7684\u4f8f\u5112\u5996(\u683c\u6797\u7ae5\u8bdd\u4e2d\u53ef\u4ee5\u5c06\u7a3b\u8349\u7eba\u6210\u91d1\u5b50\u7684\u4f8f\u5112\u5996).  \u786e\u8ba4\u4f60\u505a\u7684\u662f\u5deb\u5e08\u5b9d\u5177\u7684\u7eba\u8f66\u800c\u4e0d\u662f\u5deb\u672f\u7684\u8f6c\u8f6e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIEQ==",
                    "tooltip": "<strong>\u4eba\u9760\u8863\u88c5...\u5deb\u5e08\u4e5f\u4e00\u6837</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u6cd5\u5de5\u4f5c\u53f0</br>\u795e\u79d8\u70f9\u996a"
                },
                {
                    "name": "Comparing at a Distance",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7975621830681627535.png",
                    "x": 444.0,
                    "y": -84.0,
                    "data": "Comparators are wonderfully useful devices, but their need to be directly next to whatever they are comparing is quite limiting. If you could do so remotely that would free you from one major constraint.\n\nRemote Comparators allow you to do just that. Sneak-right click with a crystalline eye to bind the block you want to watch, and place the eye in a remote comparator to start monitering the block remotely.\n\nGiven the extra distance, though the range of the remote comparator is quite limited, you should expect the tiniest amount of signal lag compared to a direct comparator. You're doubtful that is ever going to be a limiting factor, though.",
                    "quest_id": "HF-prjNuRP-RUOYzn170cQ==",
                    "tooltip": "<strong>Comparing at a Distance</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u4ec5\u662f\u7528\u6765\u88c5\u9970</br>Solid, Directional Redstone"
                },
                {
                    "name": "Counting Items",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7497528900357426935.png",
                    "x": 492.0,
                    "y": -84.0,
                    "data": "The Remote Comparator makes it significantly easier to get comparator signals out of whatever block you want, but looking at your storage chests you can't help but see no reason to bother. So what if they're nearly full? You want to know what they're nearly full of.\n\nTally Boxes can be pointed at a container - either directly or, using a Remote Comparator, remotely - and given a Runic Whitelist that specifies conditions where you want a Tally Box to send a redstone signal. Quantity, metadata and NBT matching are options, as is using a basic name filter.\n\nNote that the redstone side is always opposite the reading side, and Remote Comparators must be placed on top of Tally Boxes to work together, meaning redstone is always output on the down face in that case.\n\n[note]Runic Whitelists don't let you use NEI ghost items to set their filters, unfortunately.[/note]",
                    "quest_id": "jvbdUzcgTfGX820wUPhxCQ==",
                    "tooltip": "<strong>Counting Items</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Comparing at a Distance"
                },
                {
                    "name": "\u9b54\u6676",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/243.png",
                    "x": 492.0,
                    "y": 204.0,
                    "data": "\u4f5c\u4e3a\u4e00\u540d\u795e\u79d8\u4f7f,\u4f60\u559c\u6b22\u4e00\u4e9b\u95ea\u4eae\u7684\u4e1c\u897f.\u8fd8\u6709\u4ec0\u4e48\u4e1c\u897f\u80fd\u6bd4\u5143\u7d20\u788e\u7247\u7ec4\u6210\u7684\u9b54\u6676\u66f4\u6709\u5149\u6cfd\u5462\uff1f\u4f60\u60f3\u8981\u5f97\u5230\u6240\u6709\u79cd\u7c7b\u7684\u9b54\u6676!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA8w==",
                    "tooltip": "<strong>\u9b54\u6676</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u6cd5\u5de5\u4f5c\u53f0"
                },
                {
                    "name": "\u8bc5\u5492\u4e4b\u571f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1103.png",
                    "x": 540.0,
                    "y": -84.0,
                    "data": "\u8bc5\u5492\u4e4b\u571f\u4e0a\u4f1a\u5237\u51fa\u5f3a\u529b\u7684\u602a\u7269,\u4f60\u53ef\u4ee5\u8ddf\u5b83\u4eec\u5927\u5e72\u4e00\u573a,\u6216\u8005\u76f4\u63a5\u4e0a\u5e8a\u65e0\u89c6\u5b83\u4eec. \u4f60\u53ef\u4ee5\u7528\u5e26\u6709\u7cbe\u51c6\u91c7\u96c6\u7684\u94f2\u5b50\u6316\u8d70\u8bc5\u5492\u4e4b\u571f. \u8fd9\u79cd\u88ab\u8bc5\u5492\u7684\u571f\u58e4\u4e0a\u9762\u7684\u5237\u602a\u901f\u5ea6\u5f88\u5feb,\u4f60\u53ef\u4ee5\u5c06\u5b83\u4eec\u5e26\u5230\u522b\u7684\u5730\u65b9\u6765\u5efa\u7acb\u4f60\u7684\u5237\u602a\u88c5\u7f6e. \u53e6\u5916,\u5728\u539f\u7248\u5237\u602a\u7b3c\u4e0b\u65b9\u653e\u7f6e\u4e00\u5757\u8bc5\u5492\u4e4b\u571f,\u53ef\u4f7f\u5176\u65e0\u9700\u73a9\u5bb6\u5728\u9644\u8fd1\u4e5f\u53ef\u4ee5\u751f\u6210\u602a\u7269.%n%n\u4f7f\u7528\u8bc5\u5492\u571f\u5728\u4e0b\u754c\u5efa\u9020\u5237\u602a\u5c4b\u65f6,\u4e0d\u826f\u7684\u8bbe\u8ba1\u4f1a\u5bfc\u81f4\u4e25\u91cd\u7684TPS\u95ee\u9898.%n%n\u786e\u4fdd\u8bc5\u5492\u571f\u4e0e\u4e0b\u754c\u4e0d\u8981\u4ea7\u751f\u4e00\u6bdb\u94b1\u5173\u7cfb.\u6bd4\u5982\u4f60\u53ef\u4ee5\u5c06\u5176\u653e\u7f6e\u5728\u5927\u7406\u77f3\u4e0a,\u4f46\u5927\u7406\u77f3\u4e0d\u80fd\u78b0\u5230\u4efb\u4f55\u4e0b\u754c\u76f8\u5173\u7269\u54c1(\u5730\u72f1\u5ca9,\u5730\u72f1\u7816\u7b49),\u4e14\u5fc5\u987b\u6d6e\u7a7a.%n%n\u540c\u65f6,\u8bc5\u5492\u571f\u6700\u5927\u9762\u79ef\u8981\u9650\u5236\u57281\u533a\u5757\u4ee5\u5185,\u4e14\u4e0e\u533a\u5757\u8fb9\u7f18\u9700\u4fdd\u63012\u683c\u7f13\u51b2.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAETw==",
                    "tooltip": "<strong>\u8bc5\u5492\u4e4b\u571f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7cbe\u81f4\u7684\u73e0\u5b9d</br>\u5206\u5272\u5fbd\u7ae0(\u6fc0\u6d3b)"
                },
                {
                    "name": "\u5206\u5272\u5fbd\u7ae0(\u6fc0\u6d3b)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1101.png",
                    "x": 588.0,
                    "y": -36.0,
                    "data": "\u4e5f\u8bb8\u4f60\u5728\u5b9d\u7bb1\u4e2d\u627e\u5230\u7684\u5206\u5272\u5fbd\u7ae0\u5df2\u7ecf\u538b\u4e86\u597d\u4e45\u7684\u7bb1\u5e95.\u8fd8\u662f\u8bf4\u4ece\u51cb\u7075\u90a3\u91cc\u62a2\u5230\u7684\u5fbd\u7ae0\u5806\u79ef\u5982\u5c71? \u597d\u5427,\u65e0\u8bba\u600e\u4e48\u5f97\u6765\u7684,\u4f60\u5e94\u8be5\u542c\u8bf4\u8fc7\u7528\u4e00\u79cd\u4eea\u5f0f\u53ef\u4ee5\u6fc0\u6d3b\u5b83.%n%n\u9996\u5148\u4f60\u9700\u8981\u4e00\u4e2a\u9644\u9b54\u53f0,8\u4e2a\u7ea2\u77f3,\u4e00\u628a\u597d\u4e00\u70b9\u7684\u6b66\u5668\u548c\u4e00\u53ea\u7528\u6765\u732e\u796d\u7684\u52a8\u7269.\u7528\u9ec4\u91d1\u5957\u7d22\u6293\u4f4f\u5b83\u4eec\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9.\u8981\u662f\u4f60\u8fd8\u6ca1\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1,\u67e5\u770bLV\u9636\u6bb5\u4efb\u52a1\u680f.%n%n\u628a\u4f60\u7684\u9644\u9b54\u53f0\u653e\u5728\u4e00\u4e2a\u4e0b\u65b9\u662f\u8349\u65b9\u5757\u7684\u7a7a\u5730\u4e0a,\u5e76\u7528\u7ea2\u77f3\u56f4\u7ed5\u9644\u9b54\u53f0\u4e00\u5708.%n%n\u5230\u4e86\u5348\u591c\u65f6\u5206,\u4f60\u4f1a\u53d1\u73b0\u5206\u5272\u5fbd\u7ae0\u5f00\u59cb\u53d1\u5149\u4e86(\u624b\u6301\u5fbd\u7ae0\u53f3\u952e\u9644\u9b54\u53f0\u80fd\u591f\u68c0\u67e5\u65f6\u95f4\u662f\u5426\u6070\u5f53),\u8fd9\u4e2a\u65f6\u5019\u5c06\u7528\u6765\u732e\u796d\u7684\u52a8\u7269\u653e\u5230\u9644\u9b54\u53f0\u4e0a\u5e76\u6740\u6b7b\u5b83.%n%n\u4eea\u5f0f\u5b8c\u6210\u540e\u4f60\u5c31\u4f1a\u53d1\u73b0\u5206\u5272\u5fbd\u7ae0\u5df2\u7ecf\u6210\u529f\u6fc0\u6d3b\u4e86.%n%n\u5f53\u7136\u8fdb\u884c\u8fd9\u4e2a\u4eea\u5f0f\u4e0d\u662f\u6ca1\u6709\u4ee3\u4ef7\u7684!%n%n\u8bd1\u8005\u6ce8:\u73b0\u5728\u53ef\u4ee5\u7528\u76f4\u63a5\u5408\u6210\u4e0d\u7a33\u5b9a\u91d1\u5c5e\u952d\u7684\u914d\u65b9\u4e86,\u5e76\u4e14\u53ea\u8981\u6309\u4f4fshift\u4e00\u6b21\u5408\u6210\u591a\u4e2a\u952d,\u5b83\u5c31\u4e0d\u4f1a\u7206\u70b8!%n%n\u8bd1\u8005\u518d\u6ce8:\u5347\u7ea7\u7248\u4f2a\u9006\u5fbd\u7ae0\u53ef\u4ee5\u65e0\u9650\u5408\u6210\u952d,\u540e\u9762\u7684\u4efb\u52a1\u4f1a\u4ecb\u7ecd\u76f8\u5e94\u4eea\u5f0f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAETQ==",
                    "tooltip": "<strong>\u5206\u5272\u5fbd\u7ae0(\u6fc0\u6d3b)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9644\u9b54\u53f01.0"
                },
                {
                    "name": "\u9b54\u6cd5\u6ce5\u571f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1002.png",
                    "x": 348.0,
                    "y": -36.0,
                    "data": "\u9b54\u6cd5\u6ce5\u571f\u53ef\u4ee5\u8ba9\u6811\u82d7\u6216\u8005\u4f5c\u7269\u5728\u4e0a\u9762\u751f\u957f\u7684\u66f4\u5feb. \u591a\u5757\u9b54\u6cd5\u6ce5\u571f\u5806\u53e0\u5728\u4e00\u8d77\u7684\u65f6\u5019\u4f1a\u968f\u673a\u52a0\u901f\u9876\u7aef\u7684\u65f6\u95f4\u6d41\u901d. \u53d8\u76f8\u968f\u673a\u8ba9\u6811\u82d7\u6216\u8005\u4f5c\u7269\u7684\u751f\u957f\u901f\u5ea6\u589e\u52a0\u4e00\u70b9. \u6ce8:\u5728\u9b54\u5bfc\u624b\u518c\u795e\u79d8\u517b\u8702\u5b66\u627e\u5230\u76f8\u5173\u7814\u7a76.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD6g==",
                    "tooltip": "<strong>\u9b54\u6cd5\u6ce5\u571f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "\u9644\u9b54\u53f01.0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1100.png",
                    "x": 540.0,
                    "y": 12.0,
                    "data": "\u5728\u4f60\u5236\u9020\u6210\u529f\u53ef\u4ee5\u5b58\u50a850\u70b9VIS\u7684\u6cd5\u6756\u4e4b\u540e,\u5c31\u53ef\u4ee5\u7528\u5b83\u6765\u5236\u4f5c\u9644\u9b54\u53f0\u4e86.\u5408\u6210\u8868\u53ef\u4ee5\u5728\u9b54\u5bfc\u624b\u518c\u7684\"GTNH\"\u7ae0\u8282\u4e2d\u627e\u5230.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAETA==",
                    "tooltip": "<strong>\u9644\u9b54\u53f01.0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u7528\u7164</br>\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756</br>\u706b\u628a\u7684\u4ee3\u66ff\u54c1"
                },
                {
                    "name": "\u70bc\u5316\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/240.png",
                    "x": 588.0,
                    "y": 108.0,
                    "data": "\u8981\u83b7\u5f97\u6e90\u8d28,\u4f60\u9700\u8981\u70bc\u5316\u4e00\u4e9b\u7269\u54c1.\u5f53\u7136,\u4f60\u4ec5\u4ec5\u5e94\u8be5\u628a\u90a3\u4e9b\u542b\u6709\u6e90\u8d28\u5e76\u4e14\u4f60\u4e0d\u662f\u5f88\u9700\u8981\u7684\u4e1c\u897f\u70bc\u5316\u6389.  \u8bb0\u5f97\u5b9e\u65f6\u817e\u7a7a\u4f60\u7684\u84b8\u998f\u5668,\u8981\u662f\u5b83\u4eec\u88c5\u6ee1\u4e86\u6e90\u8d28,\u4f1a\u9020\u6210TPS\u6025\u5267\u4e0b\u964d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA8A==",
                    "tooltip": "<strong>\u70bc\u5316\u6e90\u8d28</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u7528\u7164</br>\u795e\u79d8\u70f9\u996a</br>\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816..."
                },
                {
                    "name": "\u6e90\u8d28\u8fc7\u6ee4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/254.png",
                    "x": 636.0,
                    "y": 108.0,
                    "data": "\u8fd9\u4e2a\u6f02\u4eae\u7684\u5c0f\u88c5\u7f6e\u4f1a\u5e2e\u4f60\u4ece\u70bc\u91d1\u7089\u6216\u5769\u57da\u4e2d\u8fc7\u6ee4\u51fa\u7269\u54c1\u4e2d\u8574\u542b\u7684\u6e90\u8d28.\u4e00\u65e6\u5b83\u63a5\u6536\u5230\u4e86\u4efb\u4f55\u4e00\u79cd\u7c7b\u578b\u6e90\u8d28,\u90a3\u4e48\u8fd9\u4e2a\u84b8\u998f\u5668\u5c31\u53ea\u4f1a\u63a5\u6536\u8fd9\u79cd\u6e90\u8d28,\u76f4\u5230\u5965\u672f\u84b8\u998f\u5668\u5176\u4e2d\u7684\u6e90\u8d28\u88ab\u5168\u90e8\u63d0\u53d6\u5b8c\u6bd5.\u4f60\u53ef\u4ee5\u5728\u70bc\u91d1\u7089\u4e0a\u65b9\u653e\u7f6e\u591a\u4e2a\u84b8\u998f\u5668,\u591a\u4e48\u65b9\u4fbf\u554a. \u6700\u597d\u84b8\u998f\u5668\u6570\u91cf\u53ef\u4ee5\u5bf9\u5e94\u6b63\u5728\u70bc\u91d1\u7089\u4e2d\u7269\u54c1\u7684\u6e90\u8d28\u79cd\u7c7b\u6570.%n%n\u53ef\u4f7f\u7528\u6807\u7b7e\u9501\u5b9a\u6e90\u8d28\u79cd\u7c7b,\u5426\u5219\u6bcf\u5f53\u84b8\u998f\u5668\u518d\u6b21\u88ab\u5145\u6ee1,\u5176\u4e2d\u5f88\u53ef\u80fd\u5c31\u662f\u53e6\u4e00\u79cd\u6e90\u8d28\u4e86,\u8fd9\u6837\u5c31\u6709\u53ef\u80fd\u5835\u585e\u4f60\u7684\u6e90\u8d28\u7ba1\u9053.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA_g==",
                    "tooltip": "<strong>\u6e90\u8d28\u8fc7\u6ee4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u70bc\u5316\u6e90\u8d28"
                },
                {
                    "name": "Essentia Storage",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6939546665296547760.png",
                    "x": 684.0,
                    "y": 108.0,
                    "data": "At long last, you have all the tools to smelt items into Essentia, keep it stable, and store it for later use.\n\nThe last step was creating Warded Jars, relatively simple creations that keep Essentia in a quasi-liquid state, which makes it easier to keep Essentia from turning into Flux. Unlike phials, which must hold 8 Essentia exactly to keep it stable, Warded Jars can store anywhere from 1 to 64 Essentia.\n\nThese Warded Jars are safe to pick up and carry around, which you suspect will not be the case for most objects storing much more Essentia than these jars do. Right click them with a label to filter that jar to a specific type of Essentia. Use a preset label if the jar is still empty.\n\nSneak-right click with an empty hand to remove a label from a jar, or void the Essentia it contains if it doesn't have a label. Voiding Essentia from jars will not generate Flux, because... magic, I guess. It's very convenient, so just politely don't question it too much.",
                    "quest_id": "cbv93MoJQESfsccTQMCwUA==",
                    "tooltip": "<strong>Essentia Storage</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6e90\u8d28\u8fc7\u6ee4"
                },
                {
                    "name": "\u4e00\u5207\u90fd\u5f88\u6a21\u7cca?\u8bd5\u8bd5\u955c\u7247\u5427",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2067.png",
                    "x": 732.0,
                    "y": 300.0,
                    "data": "\u5728\u4f60\u62e5\u6709\u4e86\u63ed\u793a\u4e4b\u62a4\u76ee\u955c\u4e4b\u540e,\u795e\u79d8\u89c6\u754c(Thaumic-Horizons)\u63d0\u4f9b\u4e86\u591a\u79cd\u6709\u7528\u7684\u955c\u7247.  \u8fd9\u4e2a\u955c\u7247\u53ef\u4ee5\u63d0\u4f9b\u591c\u89c6\u6548\u679c.\u8bd5\u8bd5\u5176\u4ed6\u7684\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIEw==",
                    "tooltip": "<strong>\u4e00\u5207\u90fd\u5f88\u6a21\u7cca?\u8bd5\u8bd5\u955c\u7247\u5427</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u53ef\u4ee5\u770b\u5230\u4e00\u5207</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "Fuuuuuu...sion(\u878d\u5408)!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/238.png",
                    "x": 780.0,
                    "y": 108.0,
                    "data": "\u4f60\u7684\u5965\u672f\u5de5\u4f5c\u53f0\u5728\u628a\"vis\"\u6ce8\u5165\u5230\u7269\u54c1\u7684\u65f6\u5019\u8868\u73b0\u7684\u5f88\u597d.\u4f46\u662f,\u4f60\u89c9\u5f97\u4ec5\u4ec5\u8fd9\u6837\u505a\u662f\u4e0d\u591f\u7684.\u5982\u679c\u80fd\u628a\u5404\u79cd\u5404\u6837\u7684\u6e90\u8d28\u4e5f\u6ce8\u5165\u7269\u54c1\u4e2d\u4f1a\u53d1\u751f\u4ec0\u4e48\u795e\u5947\u7684\u73b0\u8c61\u5462\uff1f\u53ef\u80fd\u6027\u662f\u65e0\u9650\u7684...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA7g==",
                    "tooltip": "<strong>Fuuuuuu...sion(\u878d\u5408)!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u70bc\u5316\u6e90\u8d28</br>\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756</br>\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816..."
                },
                {
                    "name": "\u83b7\u5f97\u788e\u7247",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/233.png",
                    "x": 204.0,
                    "y": 108.0,
                    "data": "\u73b0\u5728\u4f60\u627e\u5230\u4e866\u79cd\u62e5\u6709\u6700\u539f\u59cb\u529b\u91cf\u7684\u9b54\u6cd5\u77f3\u5934,\u4f60\u9700\u8981\u6253\u788e\u8fd9\u4e9b\u77f3\u5934\u6765\u83b7\u5f97\u9b54\u529b\u788e\u7247.\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u5c31\u662f\u628a\u8fd9\u4e9b\u77f3\u5934\u6254\u5230\u4f60\u7684\u953b\u9020\u9524\u91cc\u9762.\u540e\u6765,\u5f53\u4f60\u6709\u7b5b\u9009\u673a\u7684\u65f6\u5019,\u4f60\u53ef\u4ee5\u7b5b\u51fa\u66f4\u591a\u7684\u788e\u7247.\u9ad8\u538b\u91dc\u53ef\u4ee5\u628a\u7c89\u672b\u53d8\u6210\u788e\u7247.\u4e5f\u8bb8\u6709\u4e00\u79cd\u9b54\u6cd5\u7684\u65b9\u5f0f\u6765\u505a\u540c\u6837\u7684\u4e8b\u60c5\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA6Q==",
                    "tooltip": "<strong>\u83b7\u5f97\u788e\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8574\u9b54\u77f3</br>A Pechuliar Merchant"
                },
                {
                    "name": "\u7ed9\u6211,\u7ed9\u6211,\u7ed9\u6211",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2147.png",
                    "x": 444.0,
                    "y": -36.0,
                    "data": "\u8d2a\u5a6a\u73cd\u73e0\u662f\u4e0b\u4e00\u4e2a\u4f60\u8981\u4e92\u52a8\u7684\u5bf9\u8c61,\u4ee5\u6b64\u6765\u89e3\u9501\u81ea\u52a8\u5316\u9b54\u6cd5\u7684\u4e0b\u4e00\u90e8\u5206.\u5236\u4f5c\u4e00\u4e2a\u8d2a\u5a6a\u73cd\u73e0,\u628a\u4e00\u4e9b\u4e1c\u897f\u6254\u5230\u5730\u4e0a,\u7136\u540e\u62ff\u7740\u73cd\u73e0\u4e00\u904d\u53c8\u4e00\u904d\u5730\u53f3\u952e\u6254\u5411\u90a3\u4e9b\u7269\u54c1,\u76f4\u5230\u83b7\u5f97\u8d2a\u5a6a\u73cd\u73e0\u788e\u7247,\u8fd9\u4f1a\u89e3\u9501\u66f4\u591a\u7814\u7a76\u9879\u76ee.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIYw==",
                    "tooltip": "<strong>\u7ed9\u6211,\u7ed9\u6211,\u7ed9\u6211</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u5b50"
                },
                {
                    "name": "\u53ef\u5b58\u50a875vis\u7684\u6743\u6756",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/877.png",
                    "x": 780.0,
                    "y": 204.0,
                    "data": "\u6743\u6756\u662f\u7528\u6756\u67c4\u3001\u5143\u59cb\u9b54\u529b\u3001\u4e09\u4e2a\u6756\u7aef\u3001\u4e00\u4e2a\u66ae\u8272\u68ee\u6797\u602a\u7269\u6389\u843d\u7269\u3001\u548c\u4e00\u4e9b\u87ba\u4e1d\u5236\u6210\u7684.\u53ef\u4f7f\u7528\u4efb\u4f55\u79cd\u7c7b\u7684\u6756\u67c4\u548c\u6756\u7aef,\u4f46\u4e09\u4e2a\u6756\u7aef\u5fc5\u987b\u540c\u7c7b.\u6743\u6756\u65e0\u6cd5\u5b89\u88c5\u6cd5\u6756\u6838\u5fc3,\u4f46vis\u5b58\u50a8\u91cf\u662f\u76f8\u540c\u6756\u67c4\u5236\u6210\u6cd5\u6756\u7684150\uff05,\u5e76\u63d0\u4f9b\u989d\u591610\uff05\u7684\u9b54\u529b\u51cf\u514d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADbQ==",
                    "tooltip": "<strong>\u53ef\u5b58\u50a875vis\u7684\u6743\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5143\u59cb\u9b54\u529b"
                },
                {
                    "name": "\u8d2a\u5a6a\u7bb1\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2050.png",
                    "x": 300.0,
                    "y": 252.0,
                    "data": "\u81ea\u52a8\u5316\u9b54\u6cd5(Automagy)\u7684\u8d2a\u5a6a\u7bb1\u5b50\u770b\u8d77\u6765\u6709\u4e9b\u6709\u8da3\u7684\u7528\u6cd5.\u5bf9\u795e\u79d8\u4f7f\u6765\u8bf4,\u8fd9\u4e5f\u662f\u975e\u5e38\u91cd\u8981\u7684\u8bbe\u5907.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIAg==",
                    "tooltip": "<strong>\u8d2a\u5a6a\u7bb1\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u6cd5\u5de5\u4f5c\u53f0"
                },
                {
                    "name": "Growing Auram",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6377301388234701261.png",
                    "x": 300.0,
                    "y": -84.0,
                    "data": "One Essentia you might have a hard time gathering is Auram. Maybe you've gotten some from Ethereal Essence, which is dropped by the flying balls of light that rarely show up in the Nether, or some from Nodes. But that is hardly a good supply. The Aurelia plant can resolve this.\n\nWhen a full moon is visible overhead, Aurelia flowers will open up their petals presumably to feed off of the light. Significant for you is that they will occasionally shed these petals, which can be collected off the ground as a dense source of Auram Essentia.\n\nYou should make sure the ground near the flower is level and clear, so you'll be able to collect the petals later. The flower itself is simply planted on grass, not farmland, so no need to have a water source nearby either.\n\n[note]Terra Wart is also a growable source of Auram Essentia. It has a quest in the Fishing, Farming, Cooking quest tab.[/note]",
                    "quest_id": "BiGj2-sBQ62nf0YtAKpGMw==",
                    "tooltip": "<strong>Growing Auram</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6cd5\u6ce5\u571f"
                },
                {
                    "name": "Growing Glowstone the Magical Way",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6516225634758235386.png",
                    "x": 396.0,
                    "y": -84.0,
                    "data": "There are many plants that can provide you with Glowstone Dust. But the best one might just be Glieonia. This magical plant, once matured, can be harvested for two Glowstone Dust directly.",
                    "quest_id": "LUwrS4RnQGilkbdPQ_DrBg==",
                    "tooltip": "<strong>Growing Glowstone the Magical Way</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6cd5\u6ce5\u571f"
                },
                {
                    "name": "Growing your own Knowledge!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5722547895249924043.png",
                    "x": 300.0,
                    "y": 12.0,
                    "data": "Ever thought to yourself \"man, why does everything have to use primal aspects so much?\" Well now you won't have to worry about that anymore!\n\nMeet the Rosa Mysteria. When the sprout planted on a Crystal Block, it will use that block's essence to grow into an Aspect Shard of the same type! These shards can then be thrown into your Cauldron or Alchemical Furnace, or used as Knowledge Fragments to gain Research Points. Even Mixed Crystals can be used as a catalyst!\n\n[warn]Warning: Planting Rosa Mysteria on Tainted Crystal Blocks will lead to unforseen   consequences.[/warn]",
                    "quest_id": "eWOxG-reT9ewlW0CNXgQNQ==",
                    "tooltip": "<strong>Growing your own Knowledge!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6cd5\u6ce5\u571f"
                },
                {
                    "name": "\u6211\u53ef\u4ee5\u770b\u5230\u4e00\u5207",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1998.png",
                    "x": 684.0,
                    "y": 300.0,
                    "data": "\u6709\u4e86\u65b0\u6cd5\u6756,\u4f60\u5c31\u53ef\u4ee5\u5236\u4f5c\u63ed\u793a\u4e4b\u62a4\u76ee\u955c\u4e86.  \u66f4\u5999\u7684\u662f,\u62a4\u76ee\u955c\u8fd8\u4f1a\u4e3a\u4f60\u63d0\u4f9b5\uff05\u7684\u9b54\u529b\u51cf\u514d.%n%n\u7b80\u5355\u7684\u955c\u7247\u5347\u7ea7\u4e5f\u53ef\u4ee5\u8ba9\u4f60\u62e5\u6709\u5404\u79cd\u89c6\u89c9\u80fd\u529b.%n%n\u7a0d\u540e\u4f60\u53ef\u4ee5\u5236\u4f5c\u66f4\u5148\u8fdb\u7684\u62a4\u76ee\u955c,\u751a\u81f3\u53ef\u4ee5\u5c06\u62a4\u76ee\u955c\u4e0e\u62a4\u7532\u7ed3\u5408\u8d77\u6765.%n%n\u7ed3\u5408\u795e\u79d8\u8282\u70b9\u8ffd\u8e2a\u5668,\u5bfb\u627e\u8282\u70b9\u90a3\u90fd\u4e0d\u662f\u4e8b\u513f. \u795e\u79d8\u8282\u70b9\u8ffd\u8e2a\u5668\u7684\u9ed8\u8ba4\u5feb\u6377\u952e\u662f\"I\".\u4f60\u53ef\u4ee5\u5728\u5217\u8868\u4e2d\u9009\u62e9\u4f60\u626b\u63cf\u8fc7\u7684\u8282\u70b9,\u7136\u540e\u7bad\u5934\u4f1a\u544a\u8bc9\u4f60\u600e\u4e48\u8d70\u7684.\u4f60\u8fd8\u53ef\u4ee5\u5bf9\u6b64\u5217\u8868\u6392\u5e8f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHzg==",
                    "tooltip": "<strong>\u6211\u53ef\u4ee5\u770b\u5230\u4e00\u5207</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756"
                },
                {
                    "name": "\u5f3a\u5316\u62a4\u7532:\u6b66\u58eb\u98ce\u683c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/290.png",
                    "x": 780.0,
                    "y": 60.0,
                    "data": "\u662f\u65f6\u5019\u5f04\u4e00\u5957\u50cf\u6837\u4e00\u70b9\u7684\u76d4\u7532\u4e86! \u6709\u4e86\u8fd9\u4e9b\u76d4\u7532,\u5bf9\u4ed8\u90a3\u4e9b\u7cbe\u82f1\u602a\u7684\u65f6\u5019\u5c31\u4e0d\u4f1a\u50cf\u73b0\u5728\u8fd9\u4e48\u75db\u82e6\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABIg==",
                    "tooltip": "<strong>\u5f3a\u5316\u62a4\u7532:\u6b66\u58eb\u98ce\u683c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "\u6539\u8fdb\u4f60\u7684\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/232.png",
                    "x": 492.0,
                    "y": 252.0,
                    "data": "\u4f60\u7684\u6cd5\u6756\u5728\u5438\u6536\u548c\u91ca\u653e\u9b54\u529b\u65b9\u9762\u505a\u5f97\u5f88\u597d,\u4e0d\u8fc7\u94c1\u6756\u7aef\u6709\u70b9\u592a\u5f31\u4e86.\u4e00\u4e0d\u5c0f\u5fc3\u5c31\u53ef\u80fd\u4f1a\u4f24\u5bb3\u5230\u8282\u70b9.\u4e5f\u4f1a\u5bfc\u81f4\u4f60\u7684\u5408\u6210\u66f4\u52a0\u56f0\u96be.\u4e5f\u8bb8\u4f60\u5e94\u8be5\u5c1d\u8bd5\u4f7f\u7528\u4e00\u4e9b\u66f4\u597d\u7684\u6750\u6599\u6765\u5f3a\u5316\u4e00\u4e0b\u4f60\u7684\u6cd5\u6756.\u6069...\u91d1\u600e\u4e48\u6837\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA6A==",
                    "tooltip": "<strong>\u6539\u8fdb\u4f60\u7684\u6cd5\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u6cd5\u5de5\u4f5c\u53f0"
                },
                {
                    "name": "\u65e0\u9650\u8759\u8760!\u7b49\u7b49,\u4ec0\u4e48??",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2259.png",
                    "x": 876.0,
                    "y": 96.0,
                    "data": "\u538c\u5026\u4e86\u626d\u66f2\u62db\u6765\u7684\u6210\u5343\u4e0a\u4e07\u7684\u8759\u8760\u5728\u4f60\u8033\u8fb9\u5c16\u53eb?\u7528\u8fd9\u53f0\u8bbe\u5907\u628a\u5b83\u4eec\u5438\u5f15\u5230\u4e00\u4e2a\u80fd\u96c6\u4e2d\u5904\u7406\u5b83\u4eec\u7684\u5730\u65b9\u5427.\u5965\u672f\u751f\u7269\u78c1\u94c1\u53ef\u4ee5\u8bbe\u7f6e\u5438\u5f15\u6216\u6392\u65a5\u751f\u7269,\u5176\u4f5c\u7528\u8303\u56f4\u4e3a\u6536\u5230\u7684\u7ea2\u77f3\u4fe1\u53f7\u9664\u4ee52.%n%n\u4f60\u53ef\u4ee5\u4f7f\u7528\u7075\u9b42\u6a21\u5177\u6765\u8fc7\u6ee4\u78c1\u94c1\u5438\u5f15\u6216\u6392\u65a5\u7684\u751f\u7269.\u8fd9\u8ba9\u4f60\u6709\u4e86\u4e00\u4e9b\u81ea\u52a8\u5316\u7684\u601d\u8def...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI0w==",
                    "tooltip": "<strong>\u65e0\u9650\u8759\u8760!\u7b49\u7b49,\u4ec0\u4e48??</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "\u65e0\u9650\u7684\u5ca9\u6d46",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/258.png",
                    "x": 876.0,
                    "y": 12.0,
                    "data": "\u597d\u5427,\u8fd9\u786e\u5b9e\u9700\u8981\u4e00\u70b9\u706b\u4e4b\u6e90\u8d28.\u4f46\u662f\u5982\u679c\u4f60\u5c06\u5b83\u505a\u51fa\u6765\u4f60\u5c31\u518d\u4e5f\u4e0d\u9700\u8981\u8003\u8651\u5ca9\u6d46\u7684\u95ee\u9898\u4e86. \u4e0d\u8fc7,\u8fd9\u73a9\u610f\u53ef\u4e0d\u4fbf\u5b9c.(\u9b54\u5bfc\u624b\u518c\u79d8\u672f\u5b66)",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABAg==",
                    "tooltip": "<strong>\u65e0\u9650\u7684\u5ca9\u6d46</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u65e0\u9650\u7684\u6c34\u6e90"
                },
                {
                    "name": "\u65e0\u9650\u7684\u6c34\u6e90",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/259.png",
                    "x": 876.0,
                    "y": 60.0,
                    "data": "\u4f60\u7684\u52aa\u529b\u7ec8\u4e8e\u8fce\u6765\u4e86\u7ed3\u679c!\u4f60\u518d\u4e5f\u4e0d\u7528\u4e3a\u4e86\u6c34\u6e90\u800c\u53d1\u6101\u4e86.\u901a\u8fc7\u9b54\u6cd5\u4f60\u7ec8\u4e8e\u627e\u5230\u4e86\u4e00\u79cd\u83b7\u5f97\u65e0\u9650\u6c34\u6e90\u7684\u65b9\u6cd5!(\u9b54\u5bfc\u624b\u518c\u79d8\u672f\u5b66)",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABAw==",
                    "tooltip": "<strong>\u65e0\u9650\u7684\u6c34\u6e90</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "\u8574\u9b54\u77f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/229.png",
                    "x": 156.0,
                    "y": 60.0,
                    "data": "\u4e0d\u7ba1\u4f60\u5728\u8fd9\u4e2a\u7ef4\u5ea6\u54ea\u4e2a\u89d2\u843d\u90fd\u4f1a\u53d1\u73b0\u8fd9\u91cc\u5145\u6ee1\u4e86\u9b54\u6cd5\u80fd\u91cf.\u4f60\u60f3\u77e5\u9053\u666e\u901a\u7684\u77f3\u5934\u5982\u679c\u957f\u65f6\u95f4\u66b4\u9732\u5728\u8fd9\u4e48\u9ad8\u6d53\u5ea6\u7684\u9b54\u6cd5\u80fd\u91cf\u4e2d\u4f1a\u53d1\u751f\u4ec0\u4e48\u6709\u8da3\u7684\u53d8\u5316. \u4e5f\u8bb8\u662f\u65f6\u5019\u53bb\u770b\u770b\u8fd9\u4e2a\u7ef4\u5ea6\u7684\u77ff\u7269\u751f\u6210\u4e86!%n%n\u6709\u4e09\u79cd\u77ff\u8109.\u6bcf\u79cd\u77ff\u8109\u4e2d\u90fd\u6709\u7425\u73c0\u548c\u6731\u7802\u77ff\u77f3.\u5b83\u4eec\u7684\u7528\u9014\u4e0d\u591a,\u4f46\u4e5f\u5c11\u4e0d\u4e86,\u6240\u4ee5\u81f3\u5c11\u5b58\u4e00\u70b9\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA5Q==",
                    "tooltip": "<strong>\u8574\u9b54\u77f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "name": "\u94c1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/798.png",
                    "x": 636.0,
                    "y": 252.0,
                    "data": "\u5236\u4f5c\u91d1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756\u9700\u898130vis,\u4f46\u4f60\u7684\u65e7\u6cd5\u6756\u7684\u6781\u9650\u662f25.\u6240\u4ee5\u5148\u505a\u4e00\u628a\u94c1\u6216\u94dc\u7aef\u7684\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756,\u8fbe\u523050vis\u5bb9\u91cf,\u7136\u540e\u5728\u4e0b\u4e00\u4e2a\u4efb\u52a1,\u5236\u4f5c\u4e00\u628a\u91d1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756.%n%n\u4f60\u53ef\u4ee5\u5728\u6756\u7aef,\u6838\u5fc3,\u6216\u662fBOSS\u6750\u6599\u4e0a\u6309'U'\u952e\u4f7f\u7528NEI\u627e\u5230\u8fd9\u4e2a\u9b54\u6756\u7684\u6b63\u786eGTNH\u914d\u65b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADHg==",
                    "tooltip": "<strong>\u94c1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756</br>\u66f4\u597d\u7684\u87ba\u4e1d</br>\u66f4\u5f3a\u5927\u7684\u529b\u91cf"
                },
                {
                    "name": "\u94c1\u6728",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1158.png",
                    "x": 60.0,
                    "y": 108.0,
                    "data": "\u94c1\u6728\u6bd4\u6a61\u80f6\u66f4\u52a0\u8010\u7528,\u662f\u5236\u4f5c\u8f6f\u9524\u7684\u7406\u60f3\u6750\u6599. \u6536\u96c6\u4e00\u4e9b\u5730\u4e0b\u7684\u6d3b\u6839,\u78e8\u788e\u5b83,\u7136\u540e\u5c06\u6d3b\u6839\u7c89\u3001\u94c1\u7c89\u548c\u91d1\u7c89\u6405\u62cc\u6df7\u5408,\u4f60\u5c31\u5f97\u5230\u4e86\u4e00\u79cd\u795e\u5947\u7684\u65b0\u6750\u6599.%n%n\u4f60\u8fd8\u53ef\u4ee5\u7528\u8fd9\u4e2a\u6750\u6599\u6765\u5236\u4f5c\u4e00\u4e9b\u72ec\u7279\u7684\u88c5\u5907.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEhg==",
                    "tooltip": "<strong>\u94c1\u6728</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "name": "\u5b83\u53eb\u795e\u79d8\u70bc\u91d1\u5854,\u597d\u4e0d?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2886.png",
                    "x": 684.0,
                    "y": 60.0,
                    "data": "\u8fd9\u53f0\u8bbe\u5907\u76f8\u5f53\u4e8e\u81ea\u52a8\u5316\u5769\u57da. \u8bf7\u67e5\u770b\u9b54\u5bfc\u624b\u518c\u4e2d,\u5769\u57da\u53f3\u8fb9\u8fdc\u5904\u7684\u7814\u7a76,\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALRg==",
                    "tooltip": "<strong>\u5b83\u53eb\u795e\u79d8\u70bc\u91d1\u5854,\u597d\u4e0d?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Essentia Storage"
                },
                {
                    "name": "\u544a\u8bc9\u6211\u8981\u626b\u63cf\u4ec0\u4e48!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1461.png",
                    "x": 300.0,
                    "y": 108.0,
                    "data": "\u4e0d\u60f3\u518d\u731c\u6d4b\u4ec0\u4e48\u7269\u54c1\u542b\u6709\u4ec0\u4e48\u8981\u7d20? \u53ea\u60f3\u76f4\u63a5\u5f00\u59cb\u5de5\u4f5c? \u626b\u63cf\u8fd9\u4e9b\u4e1c\u897f\u5427. \u7b2c\u4e00\u7ec4\u9700\u8981\u6309\u987a\u5e8f\u626b\u63cf. \u5982\u679c\u5b83\u4eec\u4e2d\u7684\u67d0\u4e9b\u7269\u54c1\u65e0\u6cd5\u626b\u63cf\u51fa\u7ed3\u679c,\u8bf7\u5c1d\u8bd5\u5148\u626b\u63cf\u522b\u7684(\u7279\u522b\u662f\u7b2c\u4e09\u7ec4).%n%n\u6d12\u6c34\u58f6%n\u706b\u628a%n\u7164%n\u8349\u65b9\u5757%n\u6d3b\u677f\u95e8%n\u7bb1\u5b50%n\u73bb\u7483%n\u767d\u9aa8\u65b9\u5757%n\u9e21%n\u7075\u9b42\u6c99%n\u7eb8%n\u8150\u8089%n\u5c0f\u9ea6%n\u71e7\u77f3%n\u9ed1\u66dc\u77f3%n%n\u7070\u4e91%n\u4efb\u610f\u67d3\u6599%n\u7f8a\u6bdb%n\u8718\u86db\u773c%n\u96ea\u7403%n\u725b\u5976%n\u539f\u7248\u9504%n\u539f\u7248\u9550%n\u7bad%n\u539f\u7248\u62a4\u7532%n\u6c34\u94f6%n\u6805\u680f\u95e8%n\u94c1\u7c92%n\u91d1%n\u50f5\u5c38\u4e4b\u8111%n\u672b\u5f71\u73cd\u73e0%n\u7c98\u6db2\u7403.\u5b9e\u5728\u627e\u4e0d\u7740\u53f2\u83b1\u59c6\u53ef\u4ee5\u5728\u5769\u57da\u91cc\u52a0\u6ee1\u7269\u54c1\u5236\u9020\u5492\u6ce2\u7c98\u6d46,\u7136\u540e\u5c31\u53ef\u4ee5\u751f\u6210\u795e\u79d8\u53f2\u83b1\u59c6\u4e86(\u522b\u5728\u57fa\u5730\u91cc\u8fd9\u4e48\u5e72)%n\u5e26\u6c61\u67d3\u7684\u4efb\u610f\u7269\u54c1.%n\u5929\u57df\u4e4b\u534e(\u4efb\u610f\u8981\u7d20,\u5c0f\u7cbe\u7075\u7684\u6389\u843d\u7269,\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u624b\u64b8\u8282\u70b9)\u6216\u5927\u5730\u75a3%n%n\u94dd\u952d%n\u94c2\u91d1\u5c5e\u7c89%n\u7ec6\u94dc\u5bfc\u7ebf%n\u78c1\u94c1\u77ff\u7c89%n\u948d\u7c89%n\u732a%n\u5730\u72f1\u5ca9%n\u91d1\u5236\u62a4\u7532%n\u5e8a%n\u62f4\u7ef3(\u4e0d\u662f\u94c5) \u8bd1\u8005\u6ce8:\u62f4\u7ef3\u548c\u94c5\u5728\u82f1\u8bed\u4e2d\u90fd\u662fLead%n\u6076\u9b42\u4e4b\u6cea%n\u65f6\u949f%n\u6c34\u6676\u77e9\u9635%n%n\u6700\u540e\u8fd8\u67095\u79cd\u901a\u5e38\u53ea\u80fd\u901a\u8fc7\u8981\u7d20\u5408\u6210/\u521b\u9020\u8282\u70b9\u83b7\u53d6\u7684\u8981\u7d20.\u53ef\u4ee5\u7ed3\u5408\u4ee5\u4e0b\u8981\u7d20\u83b7\u53d6:%n%nCognitio(\u601d\u7ef4) + Ordo(\u79e9\u5e8f)%nCognitio(\u601d\u7ef4) + Vitium(\u6c61\u67d3)%nVacuos(\u865a\u7a7a) + Motus(\u79fb\u52a8)%nLux(\u5149\u660e) + Primordium(\u59cb\u6e90)%nHumanus(\u4eba\u7c7b) + Iter(\u65c5\u884c)%n%n%n%n\u8bf7\u6ce8\u610f,\u4ee5\u4e0a\u5217\u8868\u4ec5\u7528\u4e8e\u89e3\u9501\u8981\u7d20,\u4f60\u53ef\u80fd\u8fd8\u9700\u8981\u626b\u63cf\u4e00\u4e9b\u7279\u5b9a\u7269\u54c1(\u6bd4\u5982\u4e0b\u754c\u4f20\u9001\u95e8),\u4ee5\u89e3\u9501\u67d0\u4e9b\u9690\u85cf\u7814\u7a76.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFtQ==",
                    "tooltip": "<strong>\u544a\u8bc9\u6211\u8981\u626b\u63cf\u4ec0\u4e48!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u89c1\u6240\u672a\u89c1"
                },
                {
                    "name": "Keeping Out the Riff-Raff",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6318031316370662851.png",
                    "x": 540.0,
                    "y": 156.0,
                    "data": "You're starting to get tired of having to build everything like some kind of fortress just to make sure no unwanted guests come in. Sure, that's just the nature of living in a world where infinite hoards of restless undead haunt every other dark corner, but is having a secure entryway that isn't conveniently door-shaped too much to ask?\n\nNot anymore. Paving Stone of Warding, assuming nothing sits on top of it, will project a two block tall invisible forcefield above itself that block non-player mobs from passing through, at least the common riff-raff. As a bonus spiders cannot climb the forcefield, so no need for overhangs to keep them out too.\n\nThat said, since the forcefield cannot tell an arrow fired by you from one fired at you, mundane objects will still pass through regardless. And the forcefield does as much to block line of sight as the term invisible would suggest.\n\nOf course, you're not concerned about that part. Being able to shoot things with your crossbow while they can't reach you is very much in your favor, all told.",
                    "quest_id": "_N4B3gVMTZOoUdf9--7aPQ==",
                    "tooltip": "<strong>Keeping Out the Riff-Raff</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816..."
                },
                {
                    "name": "\u4e13\u4f9b\u51ef\u9a6c\u7279(K-Mart)(\u5927\u578b\u767e\u8d27\u8fde\u9501\u5e97)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1996.png",
                    "x": 444.0,
                    "y": 300.0,
                    "data": "\u6bcf\u4e00\u70b9vis\u90fd\u5f88\u91cd\u8981,\u6240\u4ee5\u4e3a\u4f60\u81ea\u5df1\u5236\u4f5c\u795e\u79d8\u4f7f\u5957\u88c5\u5427,\u8fd9\u53ef\u4ee5\u5e2e\u52a9\u4f60\u964d\u4f4e\u6d88\u8017.\u7a0d\u540e\u4f60\u53ef\u4ee5\u5236\u4f5c\u66f4\u597d\u7684\u6cd5\u888d.  \u8fd9\u4e9b\u6cd5\u888d\u4e4b\u7c7b\u7684\u88c5\u5907\u65e0\u6cd5\u63d0\u4f9b\u592a\u591a\u7684\u62a4\u7532,\u6240\u4ee5\u8bb0\u5f97\u5728\u72e9\u730e\u524d\u66f4\u6362\u88c5\u5907!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHzA==",
                    "tooltip": "<strong>\u4e13\u4f9b\u51ef\u9a6c\u7279(K-Mart)(\u5927\u578b\u767e\u8d27\u8fde\u9501\u5e97)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u662f\u8c01,\u4e00\u4e2a\u5973\u88c1\u7f1d?"
                },
                {
                    "name": "\u9a91\u58eb\u91d1\u5c5e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2059.png",
                    "x": 60.0,
                    "y": 12.0,
                    "data": "\u9a91\u58eb\u91d1\u5c5e\u952d\u662f\u4ece\u5730\u7cbe\u9a91\u58eb\u8981\u585e\u4e2d\u83b7\u5f97\u7684\u6218\u5229\u54c1.(\u8bd1\u8005\u6ce8:\u6781\u5149\u5bab\u6bbf\u7684\u7bb1\u5b50\u4e2d\u4e5f\u4f1a\u51fa\u73b0.)\u5b83\u4eec\u53ef\u88ab\u5236\u4f5c\u6210\u94bb\u77f3\u7b49\u7ea7\u7684\u88c5\u7532.\u4f60\u53ef\u4ee5\u628a\u5bc4\u5c45\u87f9\u6389\u843d\u7684\u62a4\u7532\u788e\u7247\u5806\u70e7\u5236\u6210\u9a91\u58eb\u91d1\u5c5e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAICw==",
                    "tooltip": "<strong>\u9a91\u58eb\u91d1\u5c5e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94a2\u53f61"
                },
                {
                    "name": "\u94c5\u3001\u65b9\u94c5\u3001\u94f6\u548c\u51b0\u6676\u77f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/610.png",
                    "x": 108.0,
                    "y": 204.0,
                    "data": "\u4f60\u65e0\u6cd5\u5728\u4e3b\u4e16\u754c\u6216\u4e0b\u754c\u627e\u5230\u94c5.\u8be5\u63a2\u7d22\u795e\u79d8\u7684\u66ae\u8272\u68ee\u6797\u4e86.\u5728Y",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACYg==",
                    "tooltip": "<strong>\u94c5\u3001\u65b9\u94c5\u3001\u94f6\u548c\u51b0\u6676\u77f3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "name": "\u70b9\u4eae\u5b83!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1370.png",
                    "x": 492.0,
                    "y": -36.0,
                    "data": "\u5965\u672f\u706f\u521b\u9020\u4e86\u989d\u5916\u7684\u5149\u6e90,\u5176\u4f5c\u7528\u7c7b\u4f3c\u4e8e\u706b\u628a,\u4f46\u5176\u8303\u56f4\u4e3a\u534a\u5f84\u4e3a16\u683c\u7684\u7403\u4f53.\u4e0d\u540c\u4e8e\u4e00\u822c\u5149\u6e90\u7684\u662f,\u5965\u672f\u706f\u7684\u5149\u53ef\u4ee5\u7a7f\u5899,\u6216\u8005\u522b\u7684\u4efb\u4f55\u963b\u788d.\u8fd9\u4e2a\u7279\u6027\u53ef\u80fd\u5f88\u6709\u7528...\u552f\u4e00\u7684\u7f3a\u70b9,\u5b83\u4f1a\u7167\u4eae\u4f60\u4e0d\u9700\u8981\u7167\u4eae\u7684\u5730\u65b9,\u6bd4\u5982\u8bf4\u5de5\u4e1a\u9ad8\u7089\u5185\u90e8.%n%n\u5f53\u8fde\u63a5\u5230\u5965\u672f\u94bb\u63a2\u673a\u7684\u5e95\u90e8\u65f6,\u5965\u672f\u706f\u83b7\u5f97\u989d\u5916\u7684\u80fd\u529b:\u5b83\u5c06\u7167\u4eae\u5965\u672f\u94bb\u63a2\u673a\u6240\u6316\u6398\u7684\u96a7\u9053.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFWg==",
                    "tooltip": "<strong>\u70b9\u4eae\u5b83!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u8be5\u5230\u54ea\u627e\u7425\u73c0?"
                },
                {
                    "name": "\u82cd\u7a79\u6811",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1838.png",
                    "x": 12.0,
                    "y": 204.0,
                    "data": "\u8981\u662f\u4f60\u5728\u66ae\u8272\u68ee\u6797\u6e38\u8361\u4e86\u4e0d\u5c11\u65f6\u95f4,\u90a3\u5e94\u8be5\u4f1a\u53d1\u73b0\u82cd\u7a79\u6811.\u8fd9\u79cd\u5927\u6811\u4f1a\u751f\u6210\u8bb8\u591a\u539f\u6728\u548c\u6811\u6839,\u6811\u6839\u4f1a\u6389\u843d\u6728\u68cd.\u6ce8\u610f!\u4e0d\u8981\u5728\u6811\u8fb9\u6216\u4efb\u4f55\u6811\u53ef\u80fd\u957f\u5230\u7684\u5730\u65b9\u653e\u7f6e\u7bb1\u5b50\u6216\u8005\u522b\u7684\u4ec0\u4e48,\u5426\u5219\u957f\u51fa\u7684\u6811\u6839/\u6811\u5e72\u53ef\u80fd\u4f1a\u66ff\u6362\u6389\u5b83.\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\u8fd9\u662f\u4e00\u4e2a\u6709\u7528\u7684\u65b9\u6cd5(\u67d0\u4e9b\u60c5\u51b5\u4e0b),\u4f46\u4f60\u771f\u7684\u4e0d\u5e94\u8be5\u8fd9\u6837\u505a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHLg==",
                    "tooltip": "<strong>\u82cd\u7a79\u6811</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "name": "\u795e\u5947\u7684\u7fbd\u6bdb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1070.png",
                    "x": 12.0,
                    "y": 108.0,
                    "data": "\u60f3\u8981\u77e5\u9053\u81ea\u5df1\u6240\u5904\u7684\u4f4d\u7f6e,\u4ee5\u53ca\u60f3\u8981\u53bb\u7684\u5730\u65b9,\u4f60\u9700\u8981\u5236\u4f5c\u4e00\u5f20\u5730\u56fe. \u8fd9\u662f\u4e00\u4e2a\u5145\u6ee1\u9b54\u529b\u7684\u5730\u65b9,\u6240\u4ee5\u9700\u8981\u7684\u662f\u9b54\u6cd5\u5730\u56fe! \u5b83\u7684\u4e3b\u8981\u90e8\u5206\u5c31\u662f\u9b54\u6cd5\u5730\u56fe\u6838\u5fc3.%n%n\u9996\u5148,\u5bfb\u627e\u5e76\u6536\u96c6\u4e4c\u9e26\u7684\u7fbd\u6bdb,\u4f60\u53ef\u4ee5\u5728\u66ae\u8272\u68ee\u6797\u901a\u8fc7\u6740\u6b7b\u4e4c\u9e26\u6765\u5f97\u5230\u5b83.\u5b83\u4eec\u7ecf\u5e38\u5728\u9ed1\u66dc\u77f3\u67f1\u8fb9\u51fa\u6ca1.%n%n\u7136\u540e\u4f60\u9700\u8981\u4e00\u70b9\u706b\u70ac\u6d46\u679c(\u901a\u5e38\u5728\u5730\u4e0b)\u548c\u8424\u77f3\u7c89.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAELg==",
                    "tooltip": "<strong>\u795e\u5947\u7684\u7fbd\u6bdb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "name": "\u9b54\u6cd5\u5730\u56fe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1071.png",
                    "x": 12.0,
                    "y": 60.0,
                    "data": "\u8981\u5236\u4f5c\u9b54\u6cd5\u5730\u56fe,\u4f60\u9700\u8981\u9b54\u6cd5\u5730\u56fe\u6838\u5fc3\u548c\u4e00\u53e0\u7eb8.%n%n\u53f3\u952e\u4f7f\u7528\u9b54\u6cd5\u5730\u56fe\u540e,\u5b83\u4f1a\u4e3a\u4f60\u7ed8\u5236\u9644\u8fd1\u533a\u57df\u7684\u5730\u56fe,\u5e76\u6807\u6ce8\u51faBOSS\u7684\u4f4d\u7f6e.\u4f60\u9700\u8981\u6309\u7167\u6210\u5c31\u6307\u5f15,\u4f9d\u6b21\u51fb\u6740\u4e0d\u540cBOSS,\u4ee5\u63a2\u7d22\u5269\u4e0b\u7684\u66ae\u8272\u68ee\u6797.%n%n\u9996\u5148\u9700\u8981\u51fb\u6740\u7684\u662f\u5a1c\u8fe6.\u9664\u4e86\u6210\u5c31\u6307\u5f15\u5916,\u4efb\u52a1\u4e66\u7684\u53e6\u4e00\u7ae0\u8282\u4e5f\u4f1a\u544a\u8bc9\u4f60\u51fb\u6740BOSS\u7684\u987a\u5e8f. \u572824\u4e2a\u5c0f\u65f6\u4e4b\u5185\u4f60\u53ea\u80fd\u5f97\u5230\u4e00\u5f20\u9b54\u6cd5\u5730\u56fe,\u6240\u4ee5\u8981\u5c0f\u5fc3\u4f7f\u7528!%n%n\u8bf7\u8bb0\u4f4f!\u4e00\u5b9a\u8981\u5728\u66ae\u8272\u68ee\u91cc\u4e2d\u4f7f\u7528\u9b54\u6cd5\u5730\u56fe.\u5728\u4e3b\u4e16\u754c\u6216\u5176\u4ed6\u4efb\u610f\u7ef4\u5ea6\u4f7f\u7528\u90fd\u4f1a\u7ed9\u670d\u52a1\u5668\u5e26\u6765\u5ef6\u8fdf!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAELw==",
                    "tooltip": "<strong>\u9b54\u6cd5\u5730\u56fe</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u5947\u7684\u7fbd\u6bdb"
                },
                {
                    "name": "More Health",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5362928539393889721.png",
                    "x": 684.0,
                    "y": 204.0,
                    "data": "No matter how much of a crack shot you become it doesn't help when your twitchy fingers shoot your crossbow before your eyes can notice the tell-tale red lines on one particular type of spider's body. Usually incredible amounts of pain follow...\n\nWith your new wand you are able to craft Red Heart Canisters. A total of ten of them can be put in their own dedicated inventory slot, increasing your maximum health by one heart per.\n\nIt might not be enough, but if it ends up making the difference between standing upright and standing horizontally in a box, you'll be thankful you made these things.",
                    "quest_id": "TjJv9pSOSaW1kwzoTZ9qRw==",
                    "tooltip": "<strong>More Health</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756"
                },
                {
                    "name": "Need More Sugar?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4762573495702958200.png",
                    "x": 348.0,
                    "y": -84.0,
                    "data": "With Briar starting to consume you might also want to increase your sugar production.\n\nSweeds are planted on grass, not farmland, and will spread to propogate themselves. Once fully matured they can be harvested for sugar as well as sugar cane.",
                    "quest_id": "UAWjHTM_SAW95_Cji-9PiA==",
                    "tooltip": "<strong>Need More Sugar?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6cd5\u6ce5\u571f"
                },
                {
                    "name": "\u4e0d\u7528\u7164",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/256.png",
                    "x": 540.0,
                    "y": 60.0,
                    "data": "\u4e00\u79cd\u66f4\u597d\u7684\u65b9\u5f0f.\u8bf4\u5b9e\u8bdd,\u4f7f\u7528\u7164\u6765\u5236\u4f5c\u5b83\u672c\u8eab\u5c31\u662f\u4e00\u79cd\u6d6a\u8d39.\u4f60\u53ef\u4ee5\u4f7f\u7528\u6728\u70ad\u7c89\u6216\u8005\u8910\u7164\u7c89\u6765\u751f\u4ea7\u6e90\u52a8\u4e4b\u7130. \u5728\u70bc\u91d1\u7089\u4e2d\u4f7f\u7528\u5b83\u6765\u4f5c\u4e3a\u71c3\u6599\u53ef\u4ee5\u52a0\u901f\u7269\u54c1\u5728\u70bc\u91d1\u7089\u4e2d\u6eb6\u89e3\u7684\u901f\u5ea6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABAA==",
                    "tooltip": "<strong>\u4e0d\u7528\u7164</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/241.png",
                    "x": 408.0,
                    "y": 108.0,
                    "data": "\u81f3\u5c11\u4e0d\u662f\u505a\u80fd\u5403\u7684\u6c64\u7684.\u62ff\u7740\u6cd5\u6756\u53f3\u952e\u5bf9\u7740\u70bc\u836f\u9505\u6765\u4e00\u8bb0\u91cd\u51fb,\u4f1a\u6709\u795e\u5947\u7684\u4e8b\u60c5\u53d1\u751f. \u7136\u540e\u5728\u5769\u57da\u4e0b\u97622\u683c\u5904\u653e\u4e0a\u5730\u72f1\u5ca9\u7528\u6253\u706b\u77f3\u70b9\u71c3\u5b83,\u7a0d\u540e\u5411\u5927\u9505\u6ce8\u6ee1\u6c34.(\u5769\u57da\u53ef\u4ee5\u548c\u7ba1\u9053\u4e00\u8d77\u5de5\u4f5c,\u6765\u81ea\u52a8\u52a0\u6c34)%n%n\u73b0\u5728\u4f60\u5c31\u80fd\u5b8c\u6210\u5769\u57da\u914d\u65b9\u4e86!%n%n\u522b\u4e00\u6b21\u52a0\u5165\u592a\u591a\u4e1c\u897f,\u5426\u5219,\u4f1a\u6709\u574f\u4e8b\u53d1\u751f\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA8Q==",
                    "tooltip": "<strong>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e66\u5199\u5de5\u5177"
                },
                {
                    "name": "\u4e0d\u4ec5\u662f\u7528\u6765\u88c5\u9970",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/251.png",
                    "x": 540.0,
                    "y": 204.0,
                    "data": "\u5f53\u7136,\u5b83\u4eec\u770b\u8d77\u6765\u5f88\u6f02\u4eae.\u4f46\u662f\u5965\u672f\u77f3\u7816\u8fd8\u6709\u4e00\u4e2a\u66f4\u52a0\u91cd\u8981\u7684\u529f\u80fd:\u5f15\u5bfc\u5927\u91cf\u7684VIS\u548c\u6e90\u8d28.\u5b83\u7684\u7b2c\u4e00\u6b21\u8fd0\u7528\u5373\u642d\u5efa\u6ce8\u9b54\u796d\u575b\u548c\u70bc\u91d1\u7089.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA-w==",
                    "tooltip": "<strong>\u4e0d\u4ec5\u662f\u7528\u6765\u88c5\u9970</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6676"
                },
                {
                    "name": "\u5143\u59cb\u9b54\u529b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/879.png",
                    "x": 732.0,
                    "y": 252.0,
                    "data": "\u6709\u4e86\u65b0\u7684\u53ef\u5b58\u50a850vis\u7684\u9b54\u6756,\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e00\u67c4\u6743\u6756,\u53ef\u5b58\u50a875vis\u9b54\u529b. \u9996\u5148\u4f60\u9700\u8981\u4e00\u4e9b\u5143\u59cb\u9b54\u529b,\u5408\u6210\u9700\u6d88\u801750vis.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADbw==",
                    "tooltip": "<strong>\u5143\u59cb\u9b54\u529b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5e73\u8861\u788e\u7247\u548c\u4e16\u754c\u76d0</br>\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756"
                },
                {
                    "name": "\u59cb\u6e90\u8611\u83c7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1286.png",
                    "x": 408.0,
                    "y": 156.0,
                    "data": "\u5982\u679c\u4f60\u79cd\u690d\u4e86\u4e00\u9897\u65b0\u7684\u59cb\u6e90\u8611\u83c7,\u7b49\u5b83\u4eec\u6210\u719f\u540e\u6536\u83b7,\u5b83\u4eec\u5c06\u4f1a\u628a\u6536\u96c6\u5230\u7684\u8981\u7d20\u7403\u91ca\u653e.\u7b80\u5355\u6765\u8bb2\u5c31\u662f\u79cd\u74dc\u5f97\u74dc,\u79cd\u8611\u83c7\u5f97\u8981\u7d20...%n%n\u627e\u4e00\u627e\u9b54\u6cd5\u68ee\u6797\u751f\u7269\u7fa4\u7cfb,\u90a3\u91cc\u53ef\u4ee5\u627e\u5230\u7ea4\u6bdb\u83c7,\u5982\u679c\u5b9e\u5728\u627e\u4e0d\u5230\u90a3\u4e48\u5c31\u53bb\u4e70\u70b9\u5427.%n%n2\u4e2a\u5357\u74dc\u52a0\u4e0a4\u4e2a\u5c0f\u64ae\u77f3\u7c89\u53ef\u4ee5\u5b8c\u7f8e\u63d0\u4f9b\u6240\u9700\u6e90\u8d28.%n%n\u53ea\u8981\u5b8c\u5168\u957f\u6210,\u5c31\u53ef\u4ee5\u7834\u574f\u5b83\u4eec,\u4f1a\u6389\u843d\u8981\u7d20\u7403,\u5c31\u8ddf\u5237\u602a\u4e00\u6837. \u4e0d\u8fc7\u4f60\u5f97\u5e26\u7740\u6cd5\u6756\u624d\u80fd\u5438\u6536\u8fd9\u4e9b\u8981\u7d20\u7403. \u5b83\u4eec\u9700\u8981\u7279\u5b9a\u7684\u5149\u7167\u624d\u80fd\u751f\u957f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFBg==",
                    "tooltip": "<strong>\u59cb\u6e90\u8611\u83c7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "Pushing Back the Taint",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6644822685919168427.png",
                    "x": 300.0,
                    "y": 60.0,
                    "data": "So how do you actually destroy tainted land?\n\nThese Ethereal Blooms will remove Tainted Lands within a small area around themselves, which in turn kills off any Fibrous Tendrils. They cannot cleanse Tainted Nodes, nor will they necessarily return tainted biomes back to what they were before, but they will provide a barrier.\n\nThe Shimmerleaf they are made from have a recipe in an LV Assembling Machine if you're having a hard time finding them around Silverwood trees. There is also an IC2 crop version of them.",
                    "quest_id": "aWvML-AaSIyjyNj5ElS4VQ==",
                    "tooltip": "<strong>Pushing Back the Taint</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Taint Warnings"
                },
                {
                    "name": "\u4fdd\u62a4\u9c7f\u9c7c,\u4eba\u4eba\u6709\u8d23",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/257.png",
                    "x": 444.0,
                    "y": 60.0,
                    "data": "\u6709\u4e00\u4e2a\u975e\u5e38\u65b9\u4fbf\u7684\u529e\u6cd5\u83b7\u5f97\u58a8\u6c34\u5e76\u4e14\u80fd\u8ba9PETA(\u5584\u5f85\u52a8\u7269\u7ec4\u7ec7)\u7684\u6d3b\u52a8\u5bb6\u4eec\u9ad8\u5174. \u63d0\u793a:\u90a3\u4e9b\u73ab\u7470\u7684\u6e90\u8d28\u53ef\u80fd\u4f1a\u6709\u7528...(\u9b54\u5bfc\u624b\u518c\u4f2a\u7ecf\u9875\u9762-\u6697\u5f71\u73ab\u7470)",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABAQ==",
                    "tooltip": "<strong>\u4fdd\u62a4\u9c7f\u9c7c,\u4eba\u4eba\u6709\u8d23</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "\u4e66\u5199\u5de5\u5177",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1096.png",
                    "x": 300.0,
                    "y": 156.0,
                    "data": "\u9700\u8981\u7b14\u548c\u7eb8\u624d\u53ef\u4ee5\u89e3\u9501\u67d0\u9879\u7814\u7a76. \u800c\u60f3\u8981\u8fdb\u884c\u7814\u7a76,\u4f60\u9700\u8981\u5728\u7814\u7a76\u53f0\u4e2d\u653e\u5165\u7b14\u4e0e\u58a8\u3001\u7814\u7a76\u7b14\u8bb0\u8fdb\u884c\u8fde\u8fde\u770b,\u6240\u4ee5\u4f60\u6700\u597d\u505a\u4e24\u4e2a. \u54e6\u522b\u5fd8\u4e86\u4f60\u8fd8\u9700\u8981\u4e00\u4e9b\u58a8\u6c34.%n%n\u6ce8\u610f:Thaumcraft-Research-Tweaks\u91cd\u505a\u4e86\u7814\u7a76\u53f0\u7684GUI.\u73b0\u5728,\u5404\u8981\u7d20\u4e4b\u95f4\u7684\u62d6&\u653e\u5df2\u7ecf\u6574\u5408\u8fdb\u4e86GUI.\u4f60\u8fd8\u53ef\u4ee5\u5728\u62d6\u52a8\u8981\u7d20\u65f6\u53f3\u952e,\u5373\u53ef\u76f4\u63a5\u653e\u4e0b\u8981\u7d20\u540c\u65f6\u4e0d\u5f71\u54cd\u7ee7\u7eed\u62d6\u52a8;\u5728\u8fde\u8fde\u770b\u7684\u65f6\u5019\u540c\u6837\u9002\u7528. \u8fd9\u4e9b\u65b0\u7279\u6027\u90fd\u5df2\u7ecf\u5199\u5165\u4e86\u9b54\u5bfc\u624b\u518c,\u8bf7\u67e5\u770b'\u7814\u7a76'\u3001'\u7814\u7a76\u4e13\u957f'\u3001'\u7814\u7a76\u7cbe\u901a'\u548c'\u7814\u7a76\u62f7\u8d1d'\u9875.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAESA==",
                    "tooltip": "<strong>\u4e66\u5199\u5de5\u5177</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u89c1\u6240\u672a\u89c1</br>\u626d\u66f2\u8b66\u62a5"
                },
                {
                    "name": "\u5bfb\u627e\u7b54\u6848",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/225.png",
                    "x": 60.0,
                    "y": 156.0,
                    "data": "\u6628\u5929\u665a\u4e0a\u4f60\u505a\u4e86\u4e00\u4e2a\u68a6,\u68a6\u5230\u4e86\u53e6\u5916\u4e00\u4e2a\u7ef4\u5ea6.\u548c\u4f60\u6240\u5728\u7684\u7ef4\u5ea6\u76f8\u6bd4\u662f\u5982\u6b64\u7684\u602a\u5f02\u4e14\u4e0d\u540c,\u51e0\u4e4e\u53ef\u4ee5\u8bf4\u662f...\u9b54\u5e7b?\u5c31\u50cf\u4f60\u627e\u5230\u7684\u90a3\u9897\u5c0f\u6811\u82d7\u4e00\u6837.\u4f60\u51b3\u5b9a\u53bb\u90a3\u91cc\u5bfb\u627e\u7b54\u6848.%n%n\u9996\u5148,\u6316\u4e2a2x2\u7684\u5751\u5e76\u586b\u6ee1\u6c34,\u5468\u56f4\u73af\u7ed512\u6735\u82b1. \u7136\u540e\u4f60\u9700\u8981\u4e22\u5165\u4e00\u4e2a\u6709\u80fd\u529b\u6253\u5f00\u5f02\u6b21\u5143\u901a\u9053\u7684\u6c34\u6676.\u4e0d,\u5982\u679c\u4ec5\u4ec5\u662f\u94bb\u77f3\u662f\u6ca1\u6709\u8fd9\u79cd\u80fd\u529b\u7684!%n%n\u73af\u7ed5\u7684\u82b1\u53ef\u4ee5\u662f\u4efb\u610f\u7684\u539f\u7248\u82b1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA4Q==",
                    "tooltip": "<strong>\u5bfb\u627e\u7b54\u6848</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b2c1\u9636\u6bb5,LV</br>\u8fd9\u5565\u73a9\u610f\u513f\uff1f"
                },
                {
                    "name": "\u89c1\u6240\u672a\u89c1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/226.png",
                    "x": 252.0,
                    "y": 108.0,
                    "data": "\u4e00\u5207\u90fd\u662f\u75316\u79cd\u57fa\u7840\u8981\u7d20\u7ec4\u6210.\u8fd96\u79cd\u8981\u7d20\u53ef\u4ee5\u7ec4\u6210\u66f4\u52a0\u590d\u6742\u7684\u8981\u7d20,\u4f46\u662f\u59cb\u7ec8\u53ea\u67096\u79cd\u57fa\u7840\u8981\u7d20,\u6709\u70b9\u50cf\u88ab\u4f60\u627e\u5230\u7684\u788e\u7247,\u4f60\u53d1\u73b0\u5f53\u4f60\u628a\u788e\u7247\u9760\u8fd1\u7531\u5b83\u4eec\u7ec4\u6210\u7684\u4e1c\u897f\u65c1\u8fb9\u65f6,\u5b83\u4eec\u5c31\u4f1a\u5f00\u59cb\u9707\u52a8.\u4e5f\u8bb8\u4f60\u53ef\u4ee5\u9760\u7740\u8fd9\u79cd\u53d1\u73b0\u6765\u5236\u9020\u4e00\u4e2a\u53ef\u4ee5\"\u626b\u63cf\"\u7269\u54c1\u7684\u5de5\u5177,\u5e76\u663e\u793a\u51fa\u7ec4\u6210\u5b83\u4eec\u7684\u8981\u7d20.\u8fd9\u5728\u4ee5\u540e\u53ef\u80fd\u4f1a\u975e\u5e38\u6709\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA4g==",
                    "tooltip": "<strong>\u89c1\u6240\u672a\u89c1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u83b7\u5f97\u788e\u7247"
                },
                {
                    "name": "\u7cbe\u81f4\u7684\u73e0\u5b9d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1104.png",
                    "x": 540.0,
                    "y": -36.0,
                    "data": "\u4f7f\u7528\u7cbe\u81f4\u7684\u73e0\u5b9d\u53ef\u4ee5\u4e3a\u4f60\u7684\u5320\u9b42\u5de5\u5177\u4e0a\u9762\u9644\u52a0\u7cbe\u51c6\u91c7\u96c6\u7684\u9644\u9b54. \u5bf9\u5927\u90e8\u5206\u90e8\u4ef6\u6765\u8bf4,\u7cbe\u51c6\u91c7\u96c6\u6709\u70b9...\u6ca1\u7528,\u56e0\u4e3a\u50cf\u7164\u77ff\u8fd9\u6837\u7684GT\u77ff\u77f3,\u672c\u6765\u5c31\u4f1a\u5b8c\u6574\u6389\u843d\u4e3a\u65b9\u5757. \u4e0d\u8fc7,\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u83b7\u53d6\u4e00\u4e9b\u8bc5\u5492\u571f\u3001\u8349\u65b9\u5757\u4e4b\u7c7b\u7684\u7269\u54c1.%n%n\u5177\u4f53\u7684\u5408\u6210\u8868\u53ef\u4ee5\u5728\u9b54\u5bfc\u624b\u518c\u7684\"GTNH\"\u7ae0\u8282\u4e2d\u627e\u5230(\u524d\u7f6e\u89e3\u9501\u9644\u9b54\u53f0).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEUA==",
                    "tooltip": "<strong>\u7cbe\u81f4\u7684\u73e0\u5b9d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9644\u9b54\u53f01.0"
                },
                {
                    "name": "Solid, Directional Redstone",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6167478518452759927.png",
                    "x": 396.0,
                    "y": 12.0,
                    "data": "Redstone Dust is a wonderful substance, but it has several limitations that only true Minecrafters can handle.\n\nLuckily, with a bit of magic the dust crystallizes and becomes much easier to handle.\n\nRedcrystal can be placed directly against a wall or ceiling, and also allows you to use a wand to toggle whether a given side sends/receives any redstone signals. This allows for nice and compact builds in places regular redstone couldn't even exist in the first place.\n\nMaybe it is possible to improve these redcrystals further to allow them to manipulate or process the signal they're receiving in some way...",
                    "quest_id": "fmeCtrL-SNGqaLb208VSiQ==",
                    "tooltip": "<strong>Solid, Directional Redstone</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "\u592a\u6e34\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2042.png",
                    "x": 300.0,
                    "y": 204.0,
                    "data": "\u542c\u8fd9\u50a8\u7f50\u91cc\u6c34\u7684\u5495\u565c\u58f0\u8ba9\u6211\u5f88\u6e34.\u5982\u679c\u5b83\u88ab\u653e\u5728\u6c34\u6e90\u65b9\u5757\u8fb9,\u5c31\u80fd\u6210\u4e3a\u5408\u9002\u7684\u6c34\u6e90.\u5b83\u8fd8\u652f\u6301\u4e00\u4e9b\u901f\u5ea6\u548c\u5bb9\u91cf\u5347\u7ea7.  \u4f60\u53ef\u4ee5\u8bd5\u8bd5\u628a\u5b83\u653e\u5728\u725b\u8fb9\u4e0a,\u5b83\u80fd\u6536\u96c6\u725b\u5976,\u6ee1\u8db3\u4f60\u6240\u6709\u5976\u916a\u9ec4\u6cb9\u4e4b\u7c7b\u7684\u9700\u6c42.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH-g==",
                    "tooltip": "<strong>\u592a\u6e34\u4e86</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u6cd5\u5de5\u4f5c\u53f0"
                },
                {
                    "name": "\u954d\u7684\u6765\u6e90",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1613.png",
                    "x": 60.0,
                    "y": 204.0,
                    "data": "\u5de5\u4e1a\u9ad8\u7089\u7684\u5408\u6210\u6750\u6599\u4e4b\u4e00\u5c31\u662f\u954d. \u73b0\u5728\u4f60\u5df2\u7ecf\u6253\u5f00\u4e86\u66ae\u8272\u4f20\u9001\u95e8,\u662f\u65f6\u5019\u6536\u96c6\u4e00\u4e9b\u954d\u4e86. \u7845\u9541\u954d\u77ff\u8109\u4e2d\u6709\u7845\u9541\u954d\u77ff\u77f3\u3001\u954d\u77ff\u77f3\u3001\u8f89\u94b4\u77ff\u77f3\u548c\u954d\u9ec4\u94c1\u77ff\u77f3,\u5b83\u4eec\u90fd\u53ef\u4ee5\u51fa\u4ea7\u954d,\u7845\u9541\u954d\u77ff\u8109\u53ef\u5728\u66ae\u8272\u68ee\u6797Y",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGTQ==",
                    "tooltip": "<strong>\u954d\u7684\u6765\u6e90</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "name": "\u94a2\u53f61",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1159.png",
                    "x": 60.0,
                    "y": 60.0,
                    "data": "\u5982\u679c\u4f60\u5728\u66ae\u8272\u68ee\u6797\u7684\u8ff7\u5bab\u91cc\u627e\u5230\u4e86\u94a2\u53f6\u90a3\u4e48\u4f60\u771f\u7684\u5f88\u5e78\u8fd0. \u94a2\u53f6\u662f\u5236\u4f5c\u8f6f\u9524\u7684\u6700\u4f73\u6750\u6599,\u800c\u4e14\u7528\u94a2\u53f6\u5236\u4f5c\u7684\u76d4\u7532\u8fd8\u53ef\u4ee5\u62e5\u6709\u4e00\u4e9b\u795e\u5947\u7684\u6548\u679c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEhw==",
                    "tooltip": "<strong>\u94a2\u53f61</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c1\u6728"
                },
                {
                    "name": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/237.png",
                    "x": 684.0,
                    "y": 252.0,
                    "data": "\u4f7f\u7528\u91d1\u6756\u7aef\u53ef\u4ee5\u4f7f\u4f60\u907f\u514d\u94c1\u6756\u7aef\u7684\u7f3a\u70b9.\u6240\u4ee5\u6700\u597d\u5347\u7ea7\u5230\u91d1\u6756\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756!%n%n\u6709\u4e86\u8fd9\u4e2a\u53ef\u4ee5\u4f7f\u4f60\u6bd4\u4ee5\u5f80\u4efb\u4f55\u65f6\u5019\u66f4\u52a0\u5f3a\u5927!\u4f60\u6709\u4e00\u79cd\u611f\u89c9,\u8fd9\u6839\u65b0\u9b54\u6756\u5f88\u5feb\u5c31\u4f1a\u6d3e\u4e0a\u7528\u573a.%n%n\u672a\u6765\u7684\u9b54\u6756\u4efb\u52a1\u4e0d\u4f1a\u4e13\u6ce8\u4e8e\u6756\u7aef.\u4f60\u73b0\u5728\u77e5\u9053\u94c1\u6756\u7aef\u7684\u9b54\u6756\u5236\u4f5c\u6210\u672c\u6700\u4f4e,\u4f46\u91d1\u6756\u7aef\u66f4\u597d.\u4f60\u8fd8\u5e94\u8be5\u5c1d\u8bd5\u5176\u4ed6\u53ef\u4ee5\u5236\u4f5c\u7684\u6756\u7aef,\u5b83\u4eec\u53ef\u80fd\u4f1a\u66f4\u597d!%n\u94c1\u6756\u7aef\u662f\u6700\u4fbf\u5b9c\u7684,\u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u4f60\u603b\u662f\u9700\u8981\u4ece\u94c1\u6756\u7aef\u6cd5\u6756\u5f00\u59cb,\u4ec5\u4ec5\u662f\u4e3a\u4e86\u5236\u4f5c\u66f4\u597d\u7684\u9b54\u6756.\u76f8\u53cd,\u4f60\u5e94\u8be5\u5f00\u59cb\u53e0\u52a0\u5404\u79cd\u6765\u6e90\u7684\u9b54\u529b\u51cf\u514d!\u5982\u679c\u4f60\u73b0\u5728\u7684\u88c5\u5907\u6ca1\u6709\u81f3\u5c1110%\u7684\u9b54\u529b\u51cf\u514d,\u4f60\u53ef\u80fd\u5e94\u8be5\u770b\u770b\u672c\u7ae0\u7684\u5176\u4ed6\u4efb\u52a1\u6765\u63d0\u9ad8\u4f60\u7684\u9b54\u529b\u51cf\u514d\u3002",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA7Q==",
                    "tooltip": "<strong>\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756"
                },
                {
                    "name": "\u8ff7\u5931\u5728\u66ae\u8272\u68ee\u6797\u91cc?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1368.png",
                    "x": 12.0,
                    "y": 156.0,
                    "data": "\u5982\u679c\u4f60\u6b63\u5728\u66ae\u8272\u68ee\u6797\u4e2d\u63a2\u7d22\u65f6,\u4f20\u9001\u95e8\u88ab\u7834\u574f\u4e86,\u4f60\u5c31\u4f1a\u9677\u5165\u56f0\u5883. \u6bcf\u969424\u5c0f\u65f6,\u4f60\u5c31\u53ef\u4ee5\u4ea4\u6362\u4e00\u4e9b\u6750\u6599,\u4ee5\u83b7\u5f97\u65b0\u7684\u4f20\u9001\u6c34\u6676,\u4ece\u800c\u79bb\u5f00\u8fd9\u91cc.%n%n\u4e5f\u53ef\u4ee5\u81ea\u5df1\u591a\u9020\u4e00\u4e2a\u5f00\u95e8\u6c34\u6676,\u653e\u5728\u66ae\u8272\u68ee\u6797\u91cc\u7684\u7bb1\u5b50\u91cc\u4ee5\u5907\u4e0d\u65f6\u4e4b\u9700.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFWA==",
                    "tooltip": "<strong>\u8ff7\u5931\u5728\u66ae\u8272\u68ee\u6797\u91cc?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "name": "Taint Warnings",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7526210071214077051.png",
                    "x": 348.0,
                    "y": 60.0,
                    "data": "Now that you have started using Vis in the form of Essentia, a warning about Taint.\n\nVis in the state of Essentia is unstable if not stored properly. Left alone too long, or emptied out of the Crucible, Essentia will break down. But not into Vis. Rather, it will turn into Flux.\n\nFlux manifests as a liquid or a gas, but is, itself, only a nuisance. Thaumaturges exposed to the stuff can end up getting Flux Flue, a condition which makes it harder to channel Vis, but it is only temporary.\n\nLarger concentrations of Flux will solidify into Thaumic Slimes, bizarre creatures that try to merge with each other to grow larger. They can be dangerous, but are no less susceptible to crossbow bolts than most things.\n\nHowever, if too much flux is allowed to linger for too long, it will corrupt the land and solidify into tendrils. This is a manifestation of the blight called Taint. Fibrous Tendrils (as well as condensed blocks thereof) spread the Tainted Lands, feeding on the magic it twists. Nodes are especially vulnerable, becoming Tainted themselves if exposed to this twisted magic.\n\nDestroying the tendrils stops the spread, but unless all are destroyed this is only temporary. A more effective solution is to destroy the Tainted Land itself, as outside this specific biome tendrils quickly starve and die off.\n\nIf you are exceedingly careless with your Crucible you can, in fact, create Tainted Lands. So you would be wise to try wasting as little Essentia as possible, and clean up any you do waste.",
                    "quest_id": "JyVKlIbSSiaXjYfQ2FFLhQ==",
                    "tooltip": "<strong>Taint Warnings</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "Thauminite Helmet",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8670597739683462194.png",
                    "x": 492.0,
                    "y": 156.0,
                    "data": "If you improve your Thaumium to Thauminite, you can make this very stylish helmet! Also comes with a very useful 5% vis discount while equipped.\n\nMaybe this new material is useful for wands too?",
                    "quest_id": "CAqER5QVQg2Hq9lLZ9zDzg==",
                    "tooltip": "<strong>Thauminite Helmet</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u795e\u79d8\u70f9\u996a"
                },
                {
                    "name": "\u795e\u79d8\u70f9\u996a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1177.png",
                    "x": 492.0,
                    "y": 108.0,
                    "data": "\u73b0\u5728\u662f\u65f6\u5019\u6765\u5236\u4f5c\u795e\u79d8\u952d\u4e86. \u4f60\u5728\u8fdb\u884c\u4e86\u4e00\u756a\u7814\u7a76\u4e4b\u540e\u5f97\u77e5\u5236\u4f5c\u8fd9\u79cd\u795e\u79d8\u7684\u91d1\u5c5e,\u9700\u8981\u5c06\u94c1\u952d\u6254\u8fdb\u5305\u542b\u9b54\u6cd5\u6e90\u8d28\u7684\u5927\u9505\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEmQ==",
                    "tooltip": "<strong>\u795e\u79d8\u70f9\u996a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "name": "\u9009\u62e9...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/245.png",
                    "x": 972.0,
                    "y": 156.0,
                    "data": "\u5230\u76ee\u524d\u4e3a\u6b62,\u4f60\u5e94\u8be5\u5df2\u7ecf\u6536\u96c6\u4e86\u8bb8\u591a\u7075\u6c14\u8282\u70b9\u7684\u4f4d\u7f6e\u6765\u4ece\u4e2d\u83b7\u5f97\"VIS\".\u4f46\u662f\u4f60\u4e5f\u53ef\u80fd\u6ce8\u610f\u5230\u4e86,\u6709\u4e9b\u7c7b\u578b\u7684\u7075\u6c14\u8282\u70b9\u4e2d\u7684\u5143\u7d20\u542b\u91cf\u5f88\u4f4e,\u6bd4\u5982\u8bf4\"\u79e9\u5e8f\"\u6216\u8005\"\u706b\". \u4e0d\u8fc7\u6709\u4e00\u4e2a\u597d\u6d88\u606f,\u7ed9\u6211\u4e00\u4e9b\u9b54\u6676,\u6211\u5c06\u7ed9\u4f60\u4e00\u4e9b\u6211\u539f\u6765\u7684\u7075\u6c14\u8282\u70b9.\u867d\u7136\u90fd\u662f\u82cd\u767d\u8282\u70b9,\u4f46\u662f\u6211\u611f\u89c9\u8fd9\u8fd8\u662f\u633a\u6709\u7528\u7684. \u4f46\u662f\u5728\u9009\u62e9\u524d\u8bf7\u4e09\u601d,\u4f60\u53ea\u80fd\u57286\u4e2d\u8282\u70b9\u4e2d\u9009\u62e9\u4e00\u79cd!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA9Q==",
                    "tooltip": "<strong>\u9009\u62e9...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u5df2\u7ecf\u51fa\u5e08\u4e86!"
                },
                {
                    "name": "\u9009\u62e9:\u98ce",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/250.png",
                    "x": 972.0,
                    "y": 120.0,
                    "data": "\u7ed9\u62116\u4e2a\u98ce\u4e4b\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA-g==",
                    "tooltip": "<strong>\u9009\u62e9:\u98ce</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9009\u62e9:\u706b</br>\u9009\u62e9...</br>\u9009\u62e9:\u5730</br>\u9009\u62e9:\u6df7\u6c8c</br>\u9009\u62e9:\u79e9\u5e8f</br>\u9009\u62e9:\u6c34"
                },
                {
                    "name": "\u9009\u62e9:\u6c34",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/249.png",
                    "x": 972.0,
                    "y": 192.0,
                    "data": "\u7ed9\u62116\u4e2a\u6c34\u4e4b\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA-Q==",
                    "tooltip": "<strong>\u9009\u62e9:\u6c34</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9009\u62e9:\u706b</br>\u9009\u62e9...</br>\u9009\u62e9:\u5730</br>\u9009\u62e9:\u6df7\u6c8c</br>\u9009\u62e9:\u79e9\u5e8f</br>\u9009\u62e9:\u98ce"
                },
                {
                    "name": "\u9009\u62e9:\u706b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/244.png",
                    "x": 924.0,
                    "y": 192.0,
                    "data": "\u7ed9\u62116\u4e2a\u706b\u4e4b\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA9A==",
                    "tooltip": "<strong>\u9009\u62e9:\u706b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9009\u62e9...</br>\u9009\u62e9:\u5730</br>\u9009\u62e9:\u6df7\u6c8c</br>\u9009\u62e9:\u79e9\u5e8f</br>\u9009\u62e9:\u6c34</br>\u9009\u62e9:\u98ce"
                },
                {
                    "name": "\u9009\u62e9:\u79e9\u5e8f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/248.png",
                    "x": 1020.0,
                    "y": 120.0,
                    "data": "\u7ed9\u62116\u4e2a\u79e9\u5e8f\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA-A==",
                    "tooltip": "<strong>\u9009\u62e9:\u79e9\u5e8f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9009\u62e9:\u706b</br>\u9009\u62e9...</br>\u9009\u62e9:\u5730</br>\u9009\u62e9:\u6df7\u6c8c</br>\u9009\u62e9:\u6c34</br>\u9009\u62e9:\u98ce"
                },
                {
                    "name": "\u9009\u62e9:\u6df7\u6c8c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/247.png",
                    "x": 1020.0,
                    "y": 192.0,
                    "data": "\u7ed9\u62116\u4e2a\u6df7\u6c8c\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA9w==",
                    "tooltip": "<strong>\u9009\u62e9:\u6df7\u6c8c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9009\u62e9:\u706b</br>\u9009\u62e9...</br>\u9009\u62e9:\u5730</br>\u9009\u62e9:\u79e9\u5e8f</br>\u9009\u62e9:\u6c34</br>\u9009\u62e9:\u98ce"
                },
                {
                    "name": "\u9009\u62e9:\u5730",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/246.png",
                    "x": 924.0,
                    "y": 120.0,
                    "data": "\u7ed9\u62116\u4e2a\u5730\u4e4b\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA9g==",
                    "tooltip": "<strong>\u9009\u62e9:\u5730</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9009\u62e9:\u706b</br>\u9009\u62e9...</br>\u9009\u62e9:\u6df7\u6c8c</br>\u9009\u62e9:\u79e9\u5e8f</br>\u9009\u62e9:\u6c34</br>\u9009\u62e9:\u98ce"
                },
                {
                    "name": "\u591c\u665a\u4e0d\u518d\u6f06\u9ed1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1565.png",
                    "x": 348.0,
                    "y": 300.0,
                    "data": "\u771f\u5b9e\u9ed1\u591c(Hardcore-darkness)\u4ee4\u4eba\u75db\u82e6,\u4f46\u73b0\u5728\u591c\u665a\u5c06\u662f\u5149\u660e\u7684. \u81f3\u5c11,\u5728\u4f60\u770b\u8d77\u6765\u662f\u5149\u660e\u7684,\u602a\u7269\u8fd8\u662f\u4f1a\u751f\u6210!\u4f60\u8fd8\u8981\u5c0f\u5fc3,\u602a\u7269\u5e76\u4e0d\u4f1a\u88ab\u524a\u5f31.%n%n\u987a\u4fbf\u4e00\u63d0,\u4ece\u8fd9\u74f6\u836f\u6c34\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u52a0\u5de5\u51fa\u6301\u7eed\u65f6\u95f4\u66f4\u957f\u7684\u836f\u6c34.\u53e6\u5916,\u4f60\u5e94\u8be5\u4e00\u6b21\u5236\u90203\u4e2a,\u8fd9\u6837\u5c31\u4e0d\u4f1a\u6d6a\u8d39\u6750\u6599\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGHQ==",
                    "tooltip": "<strong>\u591c\u665a\u4e0d\u518d\u6f06\u9ed1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5495\u565c...\u5495\u565c...\u5495\u565c..."
                },
                {
                    "name": "\u4f60\u5df2\u7ecf\u51fa\u5e08\u4e86!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/252.png",
                    "x": 852.0,
                    "y": 156.0,
                    "data": "...\u5e74\u8f7b\u7684\u5b66\u5f92.\u4f60\u5df2\u7ecf\u719f\u7ec3\u638c\u63e1\u4e86\u5982\u4f55\u4f7f\u7528\u6cd5\u6756\u64cd\u7eb56\u79cd\u57fa\u672c\u5143\u7d20,\u4e5f\u7cbe\u901a\u4e86\u5982\u4f55\u5411\u5404\u79cd\u7269\u54c1\u4e2d\u6ce8\u5165\u6e90\u8d28\u548c\"VIS\"\u7684\u65b9\u6cd5.\u4f46\u662f\u8bf7\u8bb0\u4f4f\u5e74\u8f7b\u4eba,\u5728\u63a2\u7a76\u9b54\u6cd5\u7684\u540c\u65f6,\u4f60\u4f1a\u63a5\u89e6\u5230\u4e00\u4e9b\u90aa\u6076\u529b\u91cf.\u8fd9\u79cd\u90aa\u6076\u7684\u529b\u91cf\u4f1a\u5f15\u5bfc\u4f60\u53bb\u63a2\u7a76\u90a3\u4e9b\u7981\u5fcc\u7684\u9b54\u6cd5.\u6211\u770b\u5230\u4e86\u672a\u6765\u53ef\u80fd\u4f1a\u53d1\u751f\u7684\u4e00\u4e9b\u4e8b\u60c5...\u5f02\u5e38\u7684\u5929\u6c14\u3001\u865a\u5f31\u7684\u8eab\u4f53\u3001\u604d\u60da\u7684\u795e\u5fd7\u3001\u5b9e\u4f53\u5316\u7684\u5fc3\u9b54,\u751a\u81f3\u4f1a\u6709\u90aa\u6076\u7684\u5b88\u536b\u4f20\u9001\u5230\u4f60\u7684\u8eab\u8fb9.\u4e00\u8def\u5c0f\u5fc3,\u6211\u7684\u670b\u53cb...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA_A==",
                    "tooltip": "<strong>\u4f60\u5df2\u7ecf\u51fa\u5e08\u4e86!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53ef\u5b58\u50a875vis\u7684\u6743\u6756</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "\u9b54\u5bfc\u624b\u518c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/231.png",
                    "x": 204.0,
                    "y": 156.0,
                    "data": "\u4f60\u9700\u8981\u5c06\u5230\u76ee\u524d\u4e3a\u6b62\u7684\u6240\u6709\u53d1\u73b0\u8bb0\u5f55\u4e0b\u6765,\u4f46\u662f\u4f60\u5f88\u61d2. \u4e0d\u8fc7\u4f60\u6709\u4e00\u6839\u6cd5\u6756,\u6240\u4ee5\u4e3a\u4ec0\u4e48\u4e0d\u8bd5\u7740\u7528\u4e00\u79cd\u5f88\u795e\u5947\u7684\u65b9\u5f0f\"\u5199\u4e0b\"\u4f60\u7684\u7814\u7a76\u5462\uff1f \u4f60\u60f3\u77e5\u9053\u4f60\u662f\u5426\u53ef\u4ee5\u7528\u4f60\u7684\u6cd5\u6756\u65bd\u5c55\u9b54\u6cd5\u6765\u53d8\u5316\u51fa\u4e00\u672c\u9b54\u6cd5\u4e66,\u8fd9\u6837\u5b83\u5c31\u80fd\u8bb0\u5f55\u4f60\u7684\u6240\u6709\u53d1\u73b0... \u4f60\u53ef\u4ee5\u62ff\u7740\u6cd5\u6756\u5bf9\u7740\u4e66\u67b6\u65bd\u5c55\u9b54\u6cd5\u8bd5\u4e00\u8bd5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA5w==",
                    "tooltip": "<strong>\u9b54\u5bfc\u624b\u518c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756"
                },
                {
                    "name": "Tube Madness",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5271180655444922868.png",
                    "x": 636.0,
                    "y": 60.0,
                    "data": "So you want to move essentia from your Alchemical furnace to your warded Jars without getting it all gunked up with different essentia types?\n\nWell you came to the right place, with the use of buffered tubes and your handy wand you can move your essentia in tubes to fill all your jars without having to manually break and replace one jar at a time.\n\nTo create a simple setup place the buffered tubes in a main line from your Arcane Alembic with tubes coming out of the main buffered tube line. These standard tubes will then go directly into a warded jar. To get the essentia to flow correctly into the buffered tubes, shift right click the output side of the buffered tube with your wand untill it is red. This will change the band to a red band which will limit the suction of the Essentia.\n\nThe Essentia will be forced from the buffered tube to a normal tube then into your Warded jars. Chain your buffered tubes as needed untill all your Warded Jars will fit.\n\nNote: This system will get gunked up with essentia if any of your Warded Jars are full!\n\nIf you would like more information please check out the guide 'A Thaumaturge Guide to Laying Pipe' by xlstadal for more indepth Thaumcraft 4 Tube knowledge.\n\n[url]https://docs.google.com/document/d/1fMvJ5HbeOdy4UgBMe47cggis02idxWoMDgK81SgowEo[/url]",
                    "quest_id": "xoH_knd-RV-22QEfLUtuDA==",
                    "tooltip": "<strong>Tube Madness</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6e90\u8d28\u8fc7\u6ee4"
                },
                {
                    "name": "\u5c1d\u8bd5\u628a\u6db2\u4f53\u70bc\u5316\u6210\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/253.png",
                    "x": 588.0,
                    "y": 60.0,
                    "data": "\u6211\u6709\u4e00\u4e2a\u7b80\u5355\u7684\u60f3\u6cd5.\u6709\u4e9b\u4eba\u4ec5\u4ec5\u4e3a\u4e86\u4ece\u6c34\u6216\u8005\u725b\u5976\u4e2d\u83b7\u5f97\u6c34\u4e4b\u6e90\u8d28\u6216\u6cbb\u7597\u6e90\u8d28\u800c\u6d6a\u8d39\u4e86\u5927\u91cf\u7684\u6876.\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u70bc\u5236\u6db2\u4f53\u672c\u8eab\u4ece\u800c\u83b7\u5f97\u6e90\u8d28\u5462\uff1f\u54ce...\u8fd9\u771f\u611a\u8822.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA_Q==",
                    "tooltip": "<strong>\u5c1d\u8bd5\u628a\u6db2\u4f53\u70bc\u5316\u6210\u6e90\u8d28</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u70bc\u5316\u6e90\u8d28"
                },
                {
                    "name": "Understanding Wand Progression",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8049119362564896392.png",
                    "x": 540.0,
                    "y": 252.0,
                    "data": "More advanced Thaumcraft recipes require larger and larger amounts of vis that your initial wands can't handle. You need to progress bit by bit to increase your capabilities. The progression is two-fold:\n\nFirst, you need to craft more advanced wands, the Greatwood Wand is next. And secondly, you need to improve your crafting discounts. They reduce the vis cost of crafts and thus also let you craft higher vis recipes.\n\nIn your progression you will need to rely on both aspects. Better wands and higher discounts. However, as you progress, there are many different ways on how to procede. Some ways focus more on discounts, others more on wands. Therefore, the questbook can only give you some general advice.\n\nFor example, when making a new wand type, it is always cheapest to first make it with iron caps and then try to improve it afterwards. However, if you are able to obtain enough discounts you can directly make the wand with gold caps or better, skipping the iron capped wand.\n\nBut before all these options really open up, let us work on that Greatwood Wand!",
                    "quest_id": "bfrxXr1iSpGQS8iV95nJeA==",
                    "tooltip": "<strong>Understanding Wand Progression</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6539\u8fdb\u4f60\u7684\u6cd5\u6756"
                },
                {
                    "name": "\u626d\u66f2\u8b66\u62a5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1778.png",
                    "x": 252.0,
                    "y": 156.0,
                    "data": "\u795e\u79d8\u65f6\u4ee3\u7684\u8bbe\u5907\u4e0e\u5de5\u5177\u53ef\u4ee5\u5e26\u6765\u5de8\u5927\u7684\u529b\u91cf. \u4f46\u529b\u91cf\u662f\u9700\u8981\u4ed8\u51fa\u4ee3\u4ef7\u7684.... \u4ece\u7248\u672c4.2\u5f00\u59cb,\u8fd9\u79cd\u4ee3\u4ef7\u4ee5\u626d\u66f2\u8868\u73b0\u51fa\u6765: \u5bf9\u89d2\u8272\u601d\u60f3\u4e0e\u7075\u9b42\u7684\u4fb5\u8680,\u9010\u6e10\u5bf9\u4ed6\u4eec\u9020\u6210\u66f4\u591a\u53ef\u6015\u7684\u5f71\u54cd.%n%n\u867d\u7136\u626d\u66f2\u7684\u6548\u679c\u5c0f\u5219\u70e6\u4eba,\u5927\u5219\u81f4\u547d,\u4f46\u79ef\u7d2f\u8db3\u591f\u591a\u7684\u626d\u66f2\u4e5f\u53ef\u4ee5\u8ba9\u4f60\u83b7\u5f97\u66f4\u5927\u7684\u529b\u91cf...\u4ee3\u4ef7\u5c31\u662f\u8d8a\u53d1\u75af\u72c2,\u4e5f\u8d8a\u53d1\u5438\u5f15\u9ed1\u6697\u529b\u91cf. \u81f3\u5c11,\u90a3\u5728\u65c1\u4eba\u770b\u6765\u662f\u75af\u72c2... \u4f46\u662f,\u5f53\u4f60\u5934\u8111\u4e2d\u7684\u58f0\u97f3\u7ed9\u51fa\u4e86\u6709\u7528\u7684\u77e5\u8bc6\u65f6\uff1b\u5728\u4f60\u79bb\u5f00\u4e4b\u524d\u51fa\u73b0\u7684\u602a\u7269\u4ecd\u7136\u7559\u5728\u4f60\u8eab\u540e\u65f6,\u4f60\u5f00\u59cb\u6000\u7591:\u5b83\u771f\u7684\u662f\u7cbe\u795e\u9519\u4e71\u5417\uff1f%n%n\u795e\u79d8\u626d\u66f2\u5b66\u6dfb\u52a0\u4e86\u4e00\u7cfb\u5217\u626d\u66f2\u6548\u679c. \u8981\u4e07\u5206\u5f53\u5fc3,\u56e0\u4e3a\u4f60\u80af\u5b9a\u4e0d\u60f3\u8ba9\u4f60\u7684\u57fa\u5730\u5185\u90e8\u6216\u5468\u56f4\u751f\u6210\u51cb\u7075.%n%n\u626d\u66f2\u6548\u679c\u4e0e\u626d\u66f2\u503c\u76f8\u5173.%n%n5\u626d\u66f2: \u8baf\u606f%n10\u626d\u66f2: \u865a\u62df\u7206\u70b8%n15\u626d\u66f2: \u786c\u5e01\u3001\u5357\u74dc%n20\u626d\u66f2: \u4e0b\u86cb\u3001\u751f\u6210\u5e7b\u5f71%n25\u626d\u66f2: \u865a\u62df\u722c\u884c\u8005\u3001\u865a\u62df\u4e0b\u96e8%n30\u626d\u66f2: \u865a\u62dfGT\u97f3\u6548\u3001\u751f\u6210\u8759\u8760%n35\u626d\u66f2: \u6d41\u8840\u3001\u865a\u62df\u672b\u5f71\u4eba%n40\u626d\u66f2: \u751f\u6210\u53cb\u65b9\u722c\u884c\u8005%n45\u626d\u66f2: \u8df3\u8dc3\u63d0\u5347\u3001\u53cd\u80c3%n50\u626d\u66f2: \u5931\u7720\u3001Vis\u6d41\u5931%n55\u626d\u66f2: \u96f7\u96e8%n60\u626d\u66f2: \u751f\u6210\u4e5d\u72f1\u7131\u8760%n65\u626d\u66f2: \u5931\u660e\u3001\u4e2d\u6bd2%n70\u626d\u66f2: \u7272\u755c\u4e4b\u96e8%n75\u626d\u66f2: \u751f\u6210\u5206\u8eab%n80\u626d\u66f2: \u751f\u6210\u672b\u5f71\u4eba\u3001\u51cb\u96f6\u6548\u679c%n85\u626d\u66f2: \u602a\u98ce%n90\u626d\u66f2: \u672b\u5f71\u73cd\u73e0%n95\u626d\u66f2: \u706b\u7403%n100\u626d\u66f2: \u5965\u672f\u77f3\u854a\u8bd5\u7eb8\u3001\u5783\u573e%n110\u626d\u66f2: \u9ed1\u66dc\u77f3%n120\u626d\u66f2: \u95ea\u7535%n125\u626d\u66f2: \u7269\u54c1\u680f\u4ea4\u6362%n130\u626d\u66f2: \u968f\u673a\u4f20\u9001%n140\u626d\u66f2: \u52a0\u901f%n150\u626d\u66f2: \u865a\u62df\u51cb\u7075\u3001\u7269\u54c1\u680f\u6df7\u4e71%n160\u626d\u66f2: \u7206\u70b8\u5012\u6570%n170\u626d\u66f2: \u8611\u83c7%n175\u626d\u66f2: \u4e0b\u96ea(\u751f\u6210\u96ea\u5080\u5121)%n180\u626d\u66f2: \u88c5\u5907\u8150\u8680%n190\u626d\u66f2: \u751f\u673a\u52c3\u52c3%n200\u626d\u66f2: \u751f\u6210\u51cb\u7075",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG8g==",
                    "tooltip": "<strong>\u626d\u66f2\u8b66\u62a5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u5bfc\u624b\u518c"
                },
                {
                    "name": "\u4f60\u662f\u8c01,\u4e00\u4e2a\u5973\u88c1\u7f1d?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1995.png",
                    "x": 396.0,
                    "y": 252.0,
                    "data": "\u9b54\u529b\u5e03\u5339\u662f\u5236\u4f5c\u534e\u4e3d\u957f\u888d\u548c\u6cd5\u5e08\u5957\u88c5\u7684\u5173\u952e\u6750\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHyw==",
                    "tooltip": "<strong>\u4f60\u662f\u8c01,\u4e00\u4e2a\u5973\u88c1\u7f1d?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5965\u6cd5\u5de5\u4f5c\u53f0"
                },
                {
                    "name": "\u6211\u8be5\u5230\u54ea\u627e\u7425\u73c0?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1369.png",
                    "x": 492.0,
                    "y": 12.0,
                    "data": "\u6bcf\u4e2a\u795e\u79d8\u8574\u9b54\u77f3\u77ff\u8109\u90fd\u6709\u4e00\u70b9\u7425\u73c0\u77ff\u77f3. \u6211\u6562\u80af\u5b9a\u4f60\u5df2\u7ecf\u6512\u4e86\u4e0d\u5c11\u4e86.%n%n\u987a\u4fbf\u4e00\u63d0,\u7528\u7425\u73c0\u5236\u9020\u7684GT\u5de5\u5177\u81ea\u5e26\u7cbe\u51c6\u91c7\u96c6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFWQ==",
                    "tooltip": "<strong>\u6211\u8be5\u5230\u54ea\u627e\u7425\u73c0?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u706b\u628a\u7684\u4ee3\u66ff\u54c1"
                },
                {
                    "name": "\u7537\u5deb\u5973\u5deb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/224.png",
                    "x": 492.0,
                    "y": 300.0,
                    "data": "\u5982\u679c\u4f60\u5df2\u7ecf\u9020\u597d\u4e86\u7eba\u8f66,\u5e76\u5b8c\u6210\u4e86\u7814\u7a76,\u540c\u65f6\u62e5\u670950-vis\u4ee5\u4e0a\u7684\u9b54\u6756,\u90a3\u4f60\u5c31\u80fd\u5236\u9020\u8fd9\u4e9b\u4e86. \u5b83\u4eec\u975e\u5e38\u6709\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA4A==",
                    "tooltip": "<strong>\u7537\u5deb\u5973\u5deb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4eba\u9760\u8863\u88c5...\u5deb\u5e08\u4e5f\u4e00\u6837</br>\u4e13\u4f9b\u51ef\u9a6c\u7279(K-Mart)(\u5927\u578b\u767e\u8d27\u8fde\u9501\u5e97)"
                },
                {
                    "name": "\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/239.png",
                    "x": 588.0,
                    "y": 156.0,
                    "data": "\u73b0\u5728\u662f\u9b54\u6cd5\u65f6\u95f4. \u5728\u6784\u5efa\u6ce8\u9b54\u796d\u575b\u7684\u8fc7\u7a0b\u4e2d,\u4f60\u4f1a\u9700\u89818\u5757\u5965\u672f\u77f3\u7816.\u8fd8\u6709\u53e6\u59164\u5757\u7528\u4e8e\u70bc\u91d1\u7089.%n%n\u662f\u7684,\u4f60\u9700\u8981\u4e00\u53f0MV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a--\u641e\u5b9a\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA7w==",
                    "tooltip": "<strong>\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u4ec5\u662f\u7528\u6765\u88c5\u9970"
                },
                {
                    "name": "\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/230.png",
                    "x": 156.0,
                    "y": 156.0,
                    "data": "\u4f60\u786e\u4fe1\u5728\u8fd9\u4e2a\u4e16\u754c\u53ef\u4ee5\u627e\u5230\u4f60\u60f3\u8981\u7684\u7b54\u6848.\u4e3a\u4e86\u7ee7\u7eed\u5965\u6cd5\u4e4b\u65c5,\u4f60\u9700\u8981\u4e00\u4e9b\u9053\u5177\u6765\u5904\u7406\u88ab\u79f0\u4e3a\"VIS\"\u7684\u9b54\u6cd5\u80fd\u91cf.\u4f60\u731c\u5e94\u8be5\u5236\u4f5c\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756\u4e86!%n%n\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5f00\u59cb\u8ba8\u4f10\u66ae\u8272\u68ee\u6797\u7684BOSS\u4eec,\u90a3\u5f97\u6293\u7d27\u4e86. \u6240\u6709\u7684\u6cd5\u6756\u90fd\u9700\u8981\u67d0\u79cd\u66ae\u8272BOSS\u7684\u6389\u843d\u7269,\u66f4\u597d\u7684\u6cd5\u6756\u9700\u8981\u66f4\u540e\u9762\u7684BOSS\u6389\u843d\u7269.\u5f53\u4f60\u9996\u6b21\u51fb\u6740BOSS\u4e4b\u540e,\u5c31\u53ef\u4ee5\u4e70\u5230\u5237\u602a\u86cb\u4e86(\u53ea\u80fd\u5728\u66ae\u8272\u4f7f\u7528),\u4e5f\u53ef\u4ee5\u7528\u6218\u5229\u54c1+\u4e16\u754c\u76d0\u76f4\u63a5\u5408\u6210\u6389\u843d\u7269.%n%n\u4f60\u5e94\u5f53\u5728NEIz\u4e2d\u67e5\u770b\u6cd5\u6756\u5408\u6210\u8868. \u9b54\u5bfc\u624b\u518c\u4e2d\u7684\u5408\u6210\u8868\u5e76\u4e0d\u5b8c\u6210\u6b63\u786e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA5g==",
                    "tooltip": "<strong>\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bfb\u627e\u7b54\u6848"
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
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "target": "\u4e09\u52a0\u56db,\u518d\u5e26\u4e0a\u4e8c..."
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u4e09\u52a0\u56db,\u518d\u5e26\u4e0a\u4e8c..."
                },
                {
                    "source": "\u94c5\u3001\u65b9\u94c5\u3001\u94f6\u548c\u51b0\u6676\u77f3",
                    "target": "\u66f4\u597d\u7684\u6d41\u4f53\u7ba1\u9053"
                },
                {
                    "source": "Solid, Directional Redstone",
                    "target": "Adding More Funtions"
                },
                {
                    "source": "\u6539\u8fdb\u4f60\u7684\u6cd5\u6756",
                    "target": "\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756"
                },
                {
                    "source": "\u9b54\u6cd5\u6ce5\u571f",
                    "target": "Alleviating Warp"
                },
                {
                    "source": "\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756",
                    "target": "\u66f4\u5f3a\u5927\u7684\u529b\u91cf"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u706b\u628a\u7684\u4ee3\u66ff\u54c1"
                },
                {
                    "source": "\u9b54\u6cd5\u6ce5\u571f",
                    "target": "\u6709\u7528\u7684\u690d\u7269"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756",
                    "target": "A Pechuliar Merchant"
                },
                {
                    "source": "\u94c1\u6728",
                    "target": "\u5f00\u91c7\u963f\u8fea\u7279\u548c\u94b4"
                },
                {
                    "source": "\u4e66\u5199\u5de5\u5177",
                    "target": "\u5965\u6cd5\u5de5\u4f5c\u53f0"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u5e73\u8861\u788e\u7247\u548c\u4e16\u754c\u76d0"
                },
                {
                    "source": "\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756",
                    "target": "\u66f4\u597d\u7684\u87ba\u4e1d"
                },
                {
                    "source": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "target": "\u5495\u565c...\u5495\u565c...\u5495\u565c..."
                },
                {
                    "source": "\u4f60\u662f\u8c01,\u4e00\u4e2a\u5973\u88c1\u7f1d?",
                    "target": "\u9774\u5b50\u662f\u7528\u6765\u8d70\u8def\u7684"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u9774\u5b50\u662f\u7528\u6765\u8d70\u8def\u7684"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u5b50"
                },
                {
                    "source": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "target": "\u4eba\u9760\u8863\u88c5...\u5deb\u5e08\u4e5f\u4e00\u6837"
                },
                {
                    "source": "\u795e\u79d8\u70f9\u996a",
                    "target": "\u4eba\u9760\u8863\u88c5...\u5deb\u5e08\u4e5f\u4e00\u6837"
                },
                {
                    "source": "\u4e0d\u4ec5\u662f\u7528\u6765\u88c5\u9970",
                    "target": "Comparing at a Distance"
                },
                {
                    "source": "Solid, Directional Redstone",
                    "target": "Comparing at a Distance"
                },
                {
                    "source": "Comparing at a Distance",
                    "target": "Counting Items"
                },
                {
                    "source": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "target": "\u9b54\u6676"
                },
                {
                    "source": "\u7cbe\u81f4\u7684\u73e0\u5b9d",
                    "target": "\u8bc5\u5492\u4e4b\u571f"
                },
                {
                    "source": "\u5206\u5272\u5fbd\u7ae0(\u6fc0\u6d3b)",
                    "target": "\u8bc5\u5492\u4e4b\u571f"
                },
                {
                    "source": "\u9644\u9b54\u53f01.0",
                    "target": "\u5206\u5272\u5fbd\u7ae0(\u6fc0\u6d3b)"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u9b54\u6cd5\u6ce5\u571f"
                },
                {
                    "source": "\u4e0d\u7528\u7164",
                    "target": "\u9644\u9b54\u53f01.0"
                },
                {
                    "source": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756",
                    "target": "\u9644\u9b54\u53f01.0"
                },
                {
                    "source": "\u706b\u628a\u7684\u4ee3\u66ff\u54c1",
                    "target": "\u9644\u9b54\u53f01.0"
                },
                {
                    "source": "\u4e0d\u7528\u7164",
                    "target": "\u70bc\u5316\u6e90\u8d28"
                },
                {
                    "source": "\u795e\u79d8\u70f9\u996a",
                    "target": "\u70bc\u5316\u6e90\u8d28"
                },
                {
                    "source": "\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816...",
                    "target": "\u70bc\u5316\u6e90\u8d28"
                },
                {
                    "source": "\u70bc\u5316\u6e90\u8d28",
                    "target": "\u6e90\u8d28\u8fc7\u6ee4"
                },
                {
                    "source": "\u6e90\u8d28\u8fc7\u6ee4",
                    "target": "Essentia Storage"
                },
                {
                    "source": "\u6211\u53ef\u4ee5\u770b\u5230\u4e00\u5207",
                    "target": "\u4e00\u5207\u90fd\u5f88\u6a21\u7cca?\u8bd5\u8bd5\u955c\u7247\u5427"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u4e00\u5207\u90fd\u5f88\u6a21\u7cca?\u8bd5\u8bd5\u955c\u7247\u5427"
                },
                {
                    "source": "\u70bc\u5316\u6e90\u8d28",
                    "target": "Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "source": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756",
                    "target": "Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "source": "\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816...",
                    "target": "Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "source": "\u8574\u9b54\u77f3",
                    "target": "\u83b7\u5f97\u788e\u7247"
                },
                {
                    "source": "A Pechuliar Merchant",
                    "target": "\u83b7\u5f97\u788e\u7247"
                },
                {
                    "source": "\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u5b50",
                    "target": "\u7ed9\u6211,\u7ed9\u6211,\u7ed9\u6211"
                },
                {
                    "source": "\u5143\u59cb\u9b54\u529b",
                    "target": "\u53ef\u5b58\u50a875vis\u7684\u6743\u6756"
                },
                {
                    "source": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "target": "\u8d2a\u5a6a\u7bb1\u5b50"
                },
                {
                    "source": "\u9b54\u6cd5\u6ce5\u571f",
                    "target": "Growing Auram"
                },
                {
                    "source": "\u9b54\u6cd5\u6ce5\u571f",
                    "target": "Growing Glowstone the Magical Way"
                },
                {
                    "source": "\u9b54\u6cd5\u6ce5\u571f",
                    "target": "Growing your own Knowledge!"
                },
                {
                    "source": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756",
                    "target": "\u6211\u53ef\u4ee5\u770b\u5230\u4e00\u5207"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u5f3a\u5316\u62a4\u7532:\u6b66\u58eb\u98ce\u683c"
                },
                {
                    "source": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "target": "\u6539\u8fdb\u4f60\u7684\u6cd5\u6756"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u65e0\u9650\u8759\u8760!\u7b49\u7b49,\u4ec0\u4e48??"
                },
                {
                    "source": "\u65e0\u9650\u7684\u6c34\u6e90",
                    "target": "\u65e0\u9650\u7684\u5ca9\u6d46"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u65e0\u9650\u7684\u6c34\u6e90"
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u8574\u9b54\u77f3"
                },
                {
                    "source": "\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756",
                    "target": "\u94c1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756"
                },
                {
                    "source": "\u66f4\u597d\u7684\u87ba\u4e1d",
                    "target": "\u94c1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756"
                },
                {
                    "source": "\u66f4\u5f3a\u5927\u7684\u529b\u91cf",
                    "target": "\u94c1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756"
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u94c1\u6728"
                },
                {
                    "source": "Essentia Storage",
                    "target": "\u5b83\u53eb\u795e\u79d8\u70bc\u91d1\u5854,\u597d\u4e0d?"
                },
                {
                    "source": "\u89c1\u6240\u672a\u89c1",
                    "target": "\u544a\u8bc9\u6211\u8981\u626b\u63cf\u4ec0\u4e48!"
                },
                {
                    "source": "\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816...",
                    "target": "Keeping Out the Riff-Raff"
                },
                {
                    "source": "\u4f60\u662f\u8c01,\u4e00\u4e2a\u5973\u88c1\u7f1d?",
                    "target": "\u4e13\u4f9b\u51ef\u9a6c\u7279(K-Mart)(\u5927\u578b\u767e\u8d27\u8fde\u9501\u5e97)"
                },
                {
                    "source": "\u94a2\u53f61",
                    "target": "\u9a91\u58eb\u91d1\u5c5e"
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u94c5\u3001\u65b9\u94c5\u3001\u94f6\u548c\u51b0\u6676\u77f3"
                },
                {
                    "source": "\u6211\u8be5\u5230\u54ea\u627e\u7425\u73c0?",
                    "target": "\u70b9\u4eae\u5b83!"
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u82cd\u7a79\u6811"
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u795e\u5947\u7684\u7fbd\u6bdb"
                },
                {
                    "source": "\u795e\u5947\u7684\u7fbd\u6bdb",
                    "target": "\u9b54\u6cd5\u5730\u56fe"
                },
                {
                    "source": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756",
                    "target": "More Health"
                },
                {
                    "source": "\u9b54\u6cd5\u6ce5\u571f",
                    "target": "Need More Sugar?"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u4e0d\u7528\u7164"
                },
                {
                    "source": "\u4e66\u5199\u5de5\u5177",
                    "target": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684"
                },
                {
                    "source": "\u9b54\u6676",
                    "target": "\u4e0d\u4ec5\u662f\u7528\u6765\u88c5\u9970"
                },
                {
                    "source": "\u5e73\u8861\u788e\u7247\u548c\u4e16\u754c\u76d0",
                    "target": "\u5143\u59cb\u9b54\u529b"
                },
                {
                    "source": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756",
                    "target": "\u5143\u59cb\u9b54\u529b"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u59cb\u6e90\u8611\u83c7"
                },
                {
                    "source": "Taint Warnings",
                    "target": "Pushing Back the Taint"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u4fdd\u62a4\u9c7f\u9c7c,\u4eba\u4eba\u6709\u8d23"
                },
                {
                    "source": "\u89c1\u6240\u672a\u89c1",
                    "target": "\u4e66\u5199\u5de5\u5177"
                },
                {
                    "source": "\u626d\u66f2\u8b66\u62a5",
                    "target": "\u4e66\u5199\u5de5\u5177"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c1\u9636\u6bb5,LV",
                    "target": "\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "source": "\u8fd9\u5565\u73a9\u610f\u513f\uff1f",
                    "target": "\u5bfb\u627e\u7b54\u6848"
                },
                {
                    "source": "\u83b7\u5f97\u788e\u7247",
                    "target": "\u89c1\u6240\u672a\u89c1"
                },
                {
                    "source": "\u9644\u9b54\u53f01.0",
                    "target": "\u7cbe\u81f4\u7684\u73e0\u5b9d"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "Solid, Directional Redstone"
                },
                {
                    "source": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "target": "\u592a\u6e34\u4e86"
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u954d\u7684\u6765\u6e90"
                },
                {
                    "source": "\u94c1\u6728",
                    "target": "\u94a2\u53f61"
                },
                {
                    "source": "\u94c1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756",
                    "target": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756"
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u8ff7\u5931\u5728\u66ae\u8272\u68ee\u6797\u91cc?"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "Taint Warnings"
                },
                {
                    "source": "\u795e\u79d8\u70f9\u996a",
                    "target": "Thauminite Helmet"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u795e\u79d8\u70f9\u996a"
                },
                {
                    "source": "\u4f60\u5df2\u7ecf\u51fa\u5e08\u4e86!",
                    "target": "\u9009\u62e9..."
                },
                {
                    "source": "\u9009\u62e9:\u706b",
                    "target": "\u9009\u62e9:\u98ce"
                },
                {
                    "source": "\u9009\u62e9...",
                    "target": "\u9009\u62e9:\u98ce"
                },
                {
                    "source": "\u9009\u62e9:\u5730",
                    "target": "\u9009\u62e9:\u98ce"
                },
                {
                    "source": "\u9009\u62e9:\u6df7\u6c8c",
                    "target": "\u9009\u62e9:\u98ce"
                },
                {
                    "source": "\u9009\u62e9:\u79e9\u5e8f",
                    "target": "\u9009\u62e9:\u98ce"
                },
                {
                    "source": "\u9009\u62e9:\u6c34",
                    "target": "\u9009\u62e9:\u98ce"
                },
                {
                    "source": "\u9009\u62e9:\u706b",
                    "target": "\u9009\u62e9:\u6c34"
                },
                {
                    "source": "\u9009\u62e9...",
                    "target": "\u9009\u62e9:\u6c34"
                },
                {
                    "source": "\u9009\u62e9:\u5730",
                    "target": "\u9009\u62e9:\u6c34"
                },
                {
                    "source": "\u9009\u62e9:\u6df7\u6c8c",
                    "target": "\u9009\u62e9:\u6c34"
                },
                {
                    "source": "\u9009\u62e9:\u79e9\u5e8f",
                    "target": "\u9009\u62e9:\u6c34"
                },
                {
                    "source": "\u9009\u62e9:\u98ce",
                    "target": "\u9009\u62e9:\u6c34"
                },
                {
                    "source": "\u9009\u62e9...",
                    "target": "\u9009\u62e9:\u706b"
                },
                {
                    "source": "\u9009\u62e9:\u5730",
                    "target": "\u9009\u62e9:\u706b"
                },
                {
                    "source": "\u9009\u62e9:\u6df7\u6c8c",
                    "target": "\u9009\u62e9:\u706b"
                },
                {
                    "source": "\u9009\u62e9:\u79e9\u5e8f",
                    "target": "\u9009\u62e9:\u706b"
                },
                {
                    "source": "\u9009\u62e9:\u6c34",
                    "target": "\u9009\u62e9:\u706b"
                },
                {
                    "source": "\u9009\u62e9:\u98ce",
                    "target": "\u9009\u62e9:\u706b"
                },
                {
                    "source": "\u9009\u62e9:\u706b",
                    "target": "\u9009\u62e9:\u79e9\u5e8f"
                },
                {
                    "source": "\u9009\u62e9...",
                    "target": "\u9009\u62e9:\u79e9\u5e8f"
                },
                {
                    "source": "\u9009\u62e9:\u5730",
                    "target": "\u9009\u62e9:\u79e9\u5e8f"
                },
                {
                    "source": "\u9009\u62e9:\u6df7\u6c8c",
                    "target": "\u9009\u62e9:\u79e9\u5e8f"
                },
                {
                    "source": "\u9009\u62e9:\u6c34",
                    "target": "\u9009\u62e9:\u79e9\u5e8f"
                },
                {
                    "source": "\u9009\u62e9:\u98ce",
                    "target": "\u9009\u62e9:\u79e9\u5e8f"
                },
                {
                    "source": "\u9009\u62e9:\u706b",
                    "target": "\u9009\u62e9:\u6df7\u6c8c"
                },
                {
                    "source": "\u9009\u62e9...",
                    "target": "\u9009\u62e9:\u6df7\u6c8c"
                },
                {
                    "source": "\u9009\u62e9:\u5730",
                    "target": "\u9009\u62e9:\u6df7\u6c8c"
                },
                {
                    "source": "\u9009\u62e9:\u79e9\u5e8f",
                    "target": "\u9009\u62e9:\u6df7\u6c8c"
                },
                {
                    "source": "\u9009\u62e9:\u6c34",
                    "target": "\u9009\u62e9:\u6df7\u6c8c"
                },
                {
                    "source": "\u9009\u62e9:\u98ce",
                    "target": "\u9009\u62e9:\u6df7\u6c8c"
                },
                {
                    "source": "\u9009\u62e9:\u706b",
                    "target": "\u9009\u62e9:\u5730"
                },
                {
                    "source": "\u9009\u62e9...",
                    "target": "\u9009\u62e9:\u5730"
                },
                {
                    "source": "\u9009\u62e9:\u6df7\u6c8c",
                    "target": "\u9009\u62e9:\u5730"
                },
                {
                    "source": "\u9009\u62e9:\u79e9\u5e8f",
                    "target": "\u9009\u62e9:\u5730"
                },
                {
                    "source": "\u9009\u62e9:\u6c34",
                    "target": "\u9009\u62e9:\u5730"
                },
                {
                    "source": "\u9009\u62e9:\u98ce",
                    "target": "\u9009\u62e9:\u5730"
                },
                {
                    "source": "\u5495\u565c...\u5495\u565c...\u5495\u565c...",
                    "target": "\u591c\u665a\u4e0d\u518d\u6f06\u9ed1"
                },
                {
                    "source": "\u53ef\u5b58\u50a875vis\u7684\u6743\u6756",
                    "target": "\u4f60\u5df2\u7ecf\u51fa\u5e08\u4e86!"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u4f60\u5df2\u7ecf\u51fa\u5e08\u4e86!"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756",
                    "target": "\u9b54\u5bfc\u624b\u518c"
                },
                {
                    "source": "\u6e90\u8d28\u8fc7\u6ee4",
                    "target": "Tube Madness"
                },
                {
                    "source": "\u70bc\u5316\u6e90\u8d28",
                    "target": "\u5c1d\u8bd5\u628a\u6db2\u4f53\u70bc\u5316\u6210\u6e90\u8d28"
                },
                {
                    "source": "\u6539\u8fdb\u4f60\u7684\u6cd5\u6756",
                    "target": "Understanding Wand Progression"
                },
                {
                    "source": "\u9b54\u5bfc\u624b\u518c",
                    "target": "\u626d\u66f2\u8b66\u62a5"
                },
                {
                    "source": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "target": "\u4f60\u662f\u8c01,\u4e00\u4e2a\u5973\u88c1\u7f1d?"
                },
                {
                    "source": "\u706b\u628a\u7684\u4ee3\u66ff\u54c1",
                    "target": "\u6211\u8be5\u5230\u54ea\u627e\u7425\u73c0?"
                },
                {
                    "source": "\u4eba\u9760\u8863\u88c5...\u5deb\u5e08\u4e5f\u4e00\u6837",
                    "target": "\u7537\u5deb\u5973\u5deb"
                },
                {
                    "source": "\u4e13\u4f9b\u51ef\u9a6c\u7279(K-Mart)(\u5927\u578b\u767e\u8d27\u8fde\u9501\u5e97)",
                    "target": "\u7537\u5deb\u5973\u5deb"
                },
                {
                    "source": "\u4e0d\u4ec5\u662f\u7528\u6765\u88c5\u9970",
                    "target": "\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816..."
                },
                {
                    "source": "\u5bfb\u627e\u7b54\u6848",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756"
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
    