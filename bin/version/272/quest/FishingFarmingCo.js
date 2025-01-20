
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
                    "name": "\u9493\u9c7c\u4f19\u4f34",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/632.png",
                    "x": 684.0,
                    "y": 156.0,
                    "data": "\u4f60\u6709\u8bd5\u8fc7\u7a7a\u624b\u6293\u9c7c\u5417\uff1f\u662f\u65f6\u5019\u505a\u6839\u9493\u9c7c\u7aff\u8f7b\u677e\u9493\u9c7c\u4e86.\u5728\u6c34\u9762\u4f7f\u7528\u4f60\u7684\u9493\u7aff\u5e76\u7b49\u5230\u6d6e\u6807\u964d\u5230\u6c34\u4e0b,\u7136\u540e\u6536\u7ebf\u5e76\u5e0c\u671b\u4f60\u6293\u5230\u4e9b\u597d\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACeA==",
                    "tooltip": "<strong>\u9493\u9c7c\u4f19\u4f34</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248"
                },
                {
                    "name": "\u5973\u5b69\u6700\u597d\u7684\u670b\u53cb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1800.png",
                    "x": 108.0,
                    "y": 252.0,
                    "data": "\u60f3\u7ed9\u4e00\u4e2a\u5973\u5b69\u7559\u4e0b\u6df1\u523b\u5370\u8c61?\u79cd\u4e2a\u94bb\u77f3\u51fa\u6765\u600e\u4e48\u6837?!?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHCA==",
                    "tooltip": "<strong>\u5973\u5b69\u6700\u597d\u7684\u670b\u53cb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53ef\u518d\u751f\u77f3\u6cb9"
                },
                {
                    "name": "\u5206\u6790\u4f60\u7684\u4f5c\u7269",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1541.png",
                    "x": 300.0,
                    "y": 12.0,
                    "data": "\u4f5c\u7269\u5206\u6790\u4eea\u662f\u4e00\u79cd\u7535\u52a8\u5de5\u5177,\u7528\u4e8e\u5206\u6790IC2\u4f5c\u7269\u79cd\u5b50\u888b.\u53ef\u5c06\u5176\u653e\u5165MV\u673a\u5668\u6765\u5145\u7535;\u5efa\u8bae\u76f4\u63a5\u5c06MV\u7535\u6c60\u653e\u5165\u5176\u4e2d\u4ee5\u4fdd\u6301\u7535\u529b\u5145\u8db3(\u8bd1\u8005\u6ce8:\u5176\u5b9e\u4f60\u653e\u4e2a\u5170\u6ce2\u987f\u4e5f\u6ca1\u95ee\u9898).\u8981\u5b8c\u5168\u5206\u6790\u79cd\u5b50\u888b,\u4f60\u9700\u8981\u4f7f\u7528\u4f5c\u7269\u5206\u6790\u4eea\u5206\u6790\u56db\u6b21.\u5982\u679c\u5df2\u7ecf\u79cd\u690d\u4e86\u4f5c\u7269,\u6700\u597d\u7528\u4fbf\u643a\u5f0f\u626b\u63cf\u4eea\u8fdb\u884c\u5206\u6790,\u53ef\u6bd4\u4f5c\u7269\u5206\u6790\u4eea\u597d\u7528\u591a\u4e86--\u800c\u4e14\u6bcf\u6b21\u5de6\u952e\u4f5c\u7269\u67b6\u90fd\u6709\u53ef\u80fd\u4e22\u5931\u79cd\u5b50.%n%n\u4f5c\u7269\u5206\u6790\u4eea\u8fd8\u6709\u4e00\u4e2a\u540d\u4e3aIC2\u4f5c\u7269\u8ba1\u7b97\u5668\u7684\u529f\u80fd,\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u627e\u5230\u4efb\u4f55\u4f5c\u7269\u7684\u6742\u4ea4\u8f93\u51fa\u7ec4\u5408.\u8981\u4f7f\u7528\u8ba1\u7b97\u5668,\u8bf7\u5728\u624b\u6301\u4f5c\u7269\u5206\u6790\u4eea\u7684\u540c\u65f6\u6309\"IC2 side inventory\"\u952e(\u9ed8\u8ba4\u4e3aC,\u53ef\u5728\u63a7\u5236\u4e2d\u66f4\u6539).\u6f5c\u884c\u65f6\u4e5f\u53ef\u4ee5\u8fd9\u6837\u505a,\u4f1a\u6709\u4e00\u4e2a\u4e0d\u540c\u7684GUI,\u8fd9\u65f6\u4f60\u53ef\u4ee5\u9009\u62e9\u4efb\u4f55\u4f5c\u7269\u800c\u4e0d\u9700\u8981\u4ece\u4f60\u7684\u80cc\u5305\u4e2d\u4f7f\u7528\u5b83\u4eec. \u4f60\u53ef\u4ee5\u9009\u62e9\u60f3\u8981\u7684\u4f5c\u7269,\u7136\u540e\u67e5\u770b\u5982\u4f55\u6742\u4ea4\u6709\u8f83\u9ad8\u7684\u51e0\u7387.\u4e0d\u8fc7\u65e0\u6cd5\u53cd\u5411\u67e5\u770b,\u8981\u77e5\u9053\u8fd9\u4e2a,\u8bf7\u5728discord\u4e0a\u67e5\u627ecrops.zip(\u4e0d\u8fc7\u6ca1\u6709\u4e91\u6bcd\u4f5c\u7269(micadia)).%n%n\u5728\u4efb\u4e00GUI\u4e2d,\u4f60\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u56db\u4e2a\u4f5c\u7269\u4e00\u8d77\u6742\u4ea4.\u7136\u540e\u5355\u51fb\"process\",\u5e95\u90e8\u4e00\u884c\u5c06\u663e\u793a\u53ef\u80fd\u7684\u6742\u4ea4\u8f93\u51fa\u53ca\u5176\u51e0\u7387(\u5e76\u975e\u767e\u5206\u6bd4).\u4f60\u53ef\u4ee5\u4f7f\u7528\"+\"\u548c\"-\"\u6309\u94ae\u6eda\u52a8\u4f5c\u7269\u7684\u884c.\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528GUI\u4e2d\u53f3\u4e0b\u7684\u6309\u94ae\u6309\u4f5c\u7269\u7b49\u7ea7(tier)\u3001\u540d\u5b57(name)\u6216\u51e0\u7387(priority)\u5bf9\u8f93\u51fa\u884c\u8fdb\u884c\u6392\u5e8f.\u4f60\u53ef\u4ee5\u5728\u6309\u4f4fshift\u7684\u540c\u65f6\u6309\u4e0b\u6392\u5e8f\u6309\u94ae\u6765\u53cd\u8f6c\u6392\u5e8f.%n%n\u5f53\u4f60\u5c1d\u8bd5\u83b7\u53d6\u7279\u5b9a\u7684\u4f5c\u7269\u65f6,\u4f60\u901a\u5e38\u5e0c\u671b\u6700\u5927\u5316\u5176\u51e0\u7387.\u4f46\u66f4\u5177\u4f53\u5730\u8bf4,\u4f60\u5e0c\u671b\u5728\u6240\u6709\u53ef\u80fd\u4e2d\u6700\u5927\u5316\u5176\u51e0\u7387\u6bd4\u4f8b.\u8fd9\u610f\u5473\u7740\u7528\u4e0d\u540c\u4f5c\u7269\u4e00\u8d77\u6742\u4ea4\u901a\u5e38\u6ca1\u6709\u4efb\u4f55\u597d\u5904,\u8fd9\u53ea\u4f1a\u964d\u4f4e\u4f60\u60f3\u8981\u7684\u90a3\u79cd\u4f5c\u7269\u7684\u751f\u6210\u51e0\u7387,\u6240\u4ee5\u75282-4\u682a\u540c\u79cd\u4f5c\u7269\u6742\u4ea4\u5427.%n%n\u5173\u4e8e\u4f5c\u7269\u6742\u4ea4,\u8fd9\u91cc\u6709\u4e00\u7bc7\u6559\u7a0bhttps://tinyurl.com/GTNH-Crops  %n%n\u4e00\u5927\u7247\u7c98\u6027\u7518\u8517\u7530\u53ef\u4ee5\u6742\u4ea4\u51fa\u8bb8\u591a\u6709\u4ef7\u503c\u7684\u4f5c\u7269.\u56e0\u4e3a\u7c98\u6027\u7518\u8517\u7684\u4f5c\u7269\u7b49\u7ea7\u8f83\u9ad8(\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u7684\u968f\u673a\u53d8\u5f02\u7b49\u7ea7\u53d8\u5316\u4e0d\u5927),\u800c\u4e14\u7c98\u6027\u7518\u8517\u751f\u957f\u901f\u5ea6\u5f88\u5feb,\u8fd9\u6837\u5f88\u5bb9\u6613\u5c31\u53ef\u4ee5\u628a\u4e09\u56f4\u5237\u4e0a\u53bb,\u8fd9\u662f\u6742\u4ea4\u8bd5\u9a8c\u7530\u7684\u7b2c\u4e00\u6b65. \u53d8\u5f02\u662f\u968f\u673a\u7684,\u522b\u5fd8\u4e86\u7c98\u6027\u7518\u8517\u53ef\u4ee5\u6742\u4ea4\u51faUU\u4f5c\u7269(transformium).\u6742\u4ea4\u4f1a\u503e\u5411\u4e8e\u53d8\u5f02\u6210\u7c7b\u4f3c\u7684\u4f5c\u7269,\u6240\u4ee5\u5982\u679c\u4f60\u9700\u8981\u91d1\u5c5e,\u90a3\u5c31\u591a\u6742\u4ea4\u70b9\u91d1\u5c5e\u4f5c\u7269. \u8bf7\u5230Wiki\u6216\u8868\u683c(\u975e\u6700\u65b0)\u4e0a\u67e5\u770b\u4f5c\u7269\u7684\u5177\u4f53\u5c5e\u6027.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGBQ==",
                    "tooltip": "<strong>\u5206\u6790\u4f60\u7684\u4f5c\u7269</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5</br>\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV"
                },
                {
                    "name": "\u6211\u6388\u4e88\u4f60\u9a91\u58eb\u79f0\u53f7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1951.png",
                    "x": 396.0,
                    "y": 300.0,
                    "data": "\u60f3\u8981\u6709\u53d6\u4e4b\u4e0d\u5c3d\u7684\u9a91\u58eb\u91d1\u5c5e?\u8fd9\u79cd\u4f5c\u7269\u53ef\u4e0d\u592a\u597d\u79cd.  \u52a1\u5fc5\u7ed9\u5b83\u63d0\u4f9b\u80a5\u6c83\u7684\u571f\u5730\u3001\u6d01\u51c0\u7684\u7a7a\u6c14\u3001\u5145\u8db3\u7684\u80a5\u6599\u4e0e\u6c34.\u8981\u662f\u6ca1\u517b\u6d3b\u522b\u627e\u6211.%n%n\u4efb\u4f55\u77ff\u7269\u8393\u90fd\u662f\u826f\u597d\u7684\u8d44\u6e90\u4f5c\u7269,\u4ee5\u94b4\u548c\u963f\u8fea\u7279\u6700\u4f18,\u5176\u6b21\u662f\u94c1\u548c\u5176\u4ed6\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHnw==",
                    "tooltip": "<strong>\u6211\u6388\u4e88\u4f60\u9a91\u58eb\u79f0\u53f7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94a2\u53f62"
                },
                {
                    "name": "\u52a8\u7269\u9677\u9631",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/631.png",
                    "x": 540.0,
                    "y": 60.0,
                    "data": "\u538c\u5026\u730e\u6740\u725b\u3001\u50f5\u5c38\u548c\u7f8a\u4e86\u5417\uff1f\u4f60\u53ef\u4ee5\u5efa\u9020\u9677\u9631\u5e76\u671f\u671b\u52a8\u7269\u6216\u602a\u7269\u4f1a\u88ab\u5185\u90e8\u7684\u7f51\u5b50\u6293\u5230.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACdw==",
                    "tooltip": "<strong>\u52a8\u7269\u9677\u9631</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u5927\u9ea6\u65f6\u95f4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2725.png",
                    "x": 492.0,
                    "y": 108.0,
                    "data": "\u662f\u65f6\u5019\u79cd\u4e00\u4e9b\u5927\u9ea6\u6765\u505a\u70b9\u9762\u5305\u4e86. \u5728\u6ca1\u6709\u5c0f\u9ea6\u7684\u65f6\u5019,\u5927\u9ea6\u662f\u4e0d\u9519\u7684\u66ff\u4ee3\u9009\u62e9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKpQ==",
                    "tooltip": "<strong>\u5927\u9ea6\u65f6\u95f4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>...\u4e00\u5206\u6536\u83b7"
                },
                {
                    "name": "\u4f60\u6700\u597d\u628a\u4f60\u7684\u9632\u5316\u670d\u7a7f\u4e0a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1949.png",
                    "x": 348.0,
                    "y": 396.0,
                    "data": "\u98df\u4eba\u9b54\u6811(Troll-plant)!  \u5b83\u4f1a\u505a\u4ec0\u4e48?  \u5403\u4e86\u4f60!%n%n\u8bd1\u8005\u6ce8:\u5176\u5b9e\u5c31\u662f\u4ea7\u949a241\u800c\u5df2...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHnQ==",
                    "tooltip": "<strong>\u4f60\u6700\u597d\u628a\u4f60\u7684\u9632\u5316\u670d\u7a7f\u4e0a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c1\u6728\u6bd4\u666e\u901a\u6728\u6750\u597d"
                },
                {
                    "name": "\u6bd4\u725b\u5976\u597d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1605.png",
                    "x": 348.0,
                    "y": 252.0,
                    "data": "\u6211\u6700\u8fd1\u611f\u89c9\u4e0d\u8212\u670d.\u79cd\u70b9\u5927\u5730\u75a3\u5427. \u5b83\u4eec\u6bd4\u725b\u5976\u66f4\u597d,\u56e0\u4e3a\u5b83\u4eec\u53ea\u4f1a\u6d88\u9664\u8d1f\u9762\u72b6\u6001,\u4e14\u53ef\u5806\u53e0\u523064. \u8fd9\u5728\u4e0e\u53ef\u6015\u7684\u70bc\u91d1\u672f\u58eb\u6218\u6597\u65f6\u771f\u7684\u5f88\u597d\u7528!%n%n\u5176\u4e2d\u8fd8\u542b\u6709\u8981\u7d20\u6e90\u8d28:\u7075\u6c14x8,\u9b54\u6cd5x4\u548c\u751f\u547dx4,\u8fd9\u5bf9\u795e\u79d8\u4f7f\u4eec\u5f88\u6709\u7528.\u5728\u5730\u72f1\u75a3\u4e0b\u653e\u7f6e\u96ea\u5757,\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\u5373\u53ef\u83b7\u5f97\u5927\u5730\u75a3,\u65e0\u9700\u8d39\u529b\u5730\u6742\u4ea4\u53d8\u5f02.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGRQ==",
                    "tooltip": "<strong>\u6bd4\u725b\u5976\u597d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7518\u8517\u548c\u6811\u8102"
                },
                {
                    "name": "\u730e\u6740\u70c8\u7130\u4eba\u592a\u8fc7\u56f0\u96be?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1799.png",
                    "x": 204.0,
                    "y": 300.0,
                    "data": "\u90a3\u4e48\u79cd\u690d\u4e00\u4e9b\u70c8\u7130\u7518\u8517(blazereed)\u5427,\u4f60\u518d\u4e5f\u4e0d\u7528\u4e3a\u70c8\u7130\u68d2\u70e6\u5fc3\u4e86.%n%n\u6076\u9b42\u8349\u53ef\u4ee5\u6bd4\u8f83\u5bb9\u6613\u5730\u6742\u4ea4\u51fa\u70c8\u7130\u7518\u8517.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHBw==",
                    "tooltip": "<strong>\u730e\u6740\u70c8\u7130\u4eba\u592a\u8fc7\u56f0\u96be?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u7247\u53c8\u4e00\u7247"
                },
                {
                    "name": "\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2415.png",
                    "x": 156.0,
                    "y": 108.0,
                    "data": "\u4f60\u4e5f\u8bb8\u627e\u4e0d\u5230\u9002\u5408\u4f60\u7684\u519c\u4f5c\u7269\u6216\u871c\u8702\u7684\u6cbc\u6cfd\u6216\u70ed\u5e26\u68ee\u6797,\u4e5f\u6709\u53ef\u80fd\u662f\u79bb\u5f97\u592a\u8fdc\u5f88\u4e0d\u65b9\u4fbf,\u4f60\u7684\u8fd8\u53ef\u80fd\u4f4d\u4e8e\u8f83\u51b7\u7684\u6c14\u5019\u4e0b,\u4e0d\u5f97\u4e0d\u7ecf\u5e38\u9762\u5bf9\u72fc\u7fa4. \u522b\u6025\u7740\u6253\u5305\u6240\u6709\u4e1c\u897f,\u642c\u5230\u5176\u4ed6\u5730\u65b9,\u4f55\u4e0d\u8bd5\u8bd5\u6539\u53d8\u751f\u7269\u7fa4\u7cfb\u5462? \u5728\u8fd9\u4e2a\u6574\u5408\u5305\u4e2d\u6709\u51e0\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u505a\u5230:%n%n\u4f7f\u7528\u5deb\u5e08\u5b9d\u5177(Witching-Gadgets)\u4e2d\u7684\u5965\u672f\u7fa4\u7cfb\u8f6c\u5316\u5668%n-\u9700\u8981EV\u7535\u8def\u677f\u3001\u94a8\u94a2\u3001\u4e09\u9636\u706b\u7bad%n-\u8fd8\u9700\u8981\u6ce8\u9b54\u3001\u865a\u7a7a\u91d1\u5c5e(\u8db3\u591f\u7684\u626d\u66f2)\u3001\u63d0\u4f9bCV\u7684\u5145\u80fd\u8282\u70b9\u3001\u5927\u91cf\u6e90\u8d28%n-\u534a\u5f8416\u683c%n-\u53ea\u80fd\u628a\u751f\u7269\u7fa4\u7cfb\u66f4\u6539\u4e3a\u51e0\u79cd\u7279\u5b9a\u200b\u200b\u539f\u7248\u6216\u795e\u79d8\u7684\u751f\u7269\u7fa4\u7cfb%n-\u6709\u70b9\u6162%n%n\u4f7f\u7528\u8840\u9b54\u6cd5(Blood-Magic)\u7684\u76d6\u4e9a\u4eea\u5f0f(Ritual-of-Gaia's-Transformation)%n-\u9700\u8981\u865a\u7a7a\u91d1\u5c5e\u3001\u6ce8\u9b54\u3001\u94a8\u94a2%n-\u9700\u8981\u6df1\u5165\u7814\u7a76\u8840\u9b54\u6cd5(\u4ee5\u53ca\u968f\u4e4b\u800c\u6765\u7684\u626d\u66f2)%n-\u9700\u89811,000,000-LP\u3001\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0\u30014\u9636\u796d\u575b\u548c[\u89c9\u9192]\u6fc0\u6d3b\u6c34\u6676%n-\u534a\u5f8410\u683c,\u53ef\u7528\u8840\u77f3\u7816(\u4efb\u610f\u7c7b\u578b)\u7cbe\u786e\u6307\u5b9a%n-\u65e0\u6cd5\u6307\u5b9a\u751f\u7269\u7fa4\u7cfb,\u4f60\u53ea\u80fd\u57280.0\u52302.0\u7684\u8303\u56f4\u5185\u4fee\u6539\u6e29\u5ea6/\u6e7f\u5ea6,\u7136\u540e\u542c\u5929\u7531\u547d%n-\u7531\u4e8e\u8303\u56f4\u6709\u9650\u4ee5\u53ca\u8303\u56f4\u91cd\u53e0\u7b49\u95ee\u9898,\u67d0\u4e9b\u751f\u7269\u7fa4\u7cfb\u65e0\u6cd5\u51fa\u73b0%n-\u901a\u8fc7\u4e3b\u4eea\u5f0f\u77f3\u5468\u56f48\u4e2a\u57fa\u5ea7\u4e0a\u7684\u7269\u54c1\u6765\u8c03\u8282\u6e29\u5ea6/\u6e7f\u5ea6%n-\u9700\u8981\u91cd\u65b0\u767b\u5f55\u624d\u80fd\u770b\u5230\u6539\u53d8%n-\u6587\u5b57\u4e0e\u89e3\u91ca\u90fd\u5f88\u5c11%n-\u901f\u5ea6\u5feb%n%n\u4f7f\u7528\u5deb\u672f(Witchery)\u7684\u5b63\u8282\u53d8\u8fc1\u836f\u6c34%n-\u5c0f\u8303\u56f4,\u8303\u56f4\u4e0e\u836f\u6c34\u7b49\u7ea7\u6709\u5173(\u5f3a\u5ea6\u7b49\u7ea7\u800c\u4e0d\u662f\u55b7\u6e85\u7b49\u7ea7)%n-\u53ef\u4ee5\u660e\u786e\u6307\u5b9a\u751f\u7269\u7fa4\u7cfb%n-\u9700\u4f7f\u7528\u590d\u6742\u7684\u5b9a\u5236\u917f\u9020\u7cfb\u7edf\u5236\u4f5c%n-\u53ef\u4ee5\u6dfb\u52a0\u4e0d\u540c\u7684\u6210\u5206\u4ee5\u6539\u53d8\u836f\u6c34\u7684\u8303\u56f4%n-\u6700\u5c0f\u4fee\u6539\u4e00\u4e2a\u65b9\u5757%n-\u6700\u5927\u4e3a\u534a\u5f843\u683c\u7684\u5706%n-\u7acb\u5373\u751f\u6548(\u4f60\u4f7f\u7528\u540e)%n%n\u4f7f\u7528\u5deb\u672f\u7684\u5b63\u8282\u53d8\u8fc1\u4eea\u5f0f%n-\u9700\u8981\u4e0d\u9508\u94a2\u3001\u5b8f\u4f1f\u4e4b\u6728\u6743\u6756\u6216\u66f4\u597d\u7684\u6cd5\u6756\u6765\u5236\u9020\u5deb\u672f\u7684\u84b8\u998f\u5854%n-\u4f60\u5fc5\u987b\u6413\u4e00\u5806\u5deb\u672f\u914d\u5957\u8bbe\u5907%n-\u53ea\u8981\u5b8c\u6210\u4e00\u6b21,\u4ee5\u540e\u5c31\u7b80\u5355\u4e86%n-\u8d85\u5927\u8303\u56f4,16/32/48\u683c\u534a\u5f84\u7684\u5706%n-\u53ef\u4ee5\u660e\u786e\u6307\u5b9a\u751f\u7269\u7fa4\u7cfb%n-\u6709\u65f6\u5728\u7279\u5b9a\u7684\u533a\u5757\u4e2d\u4f1a\u5931\u8d25%n-\u901f\u5ea6\u5f88\u5feb%n%n\u5982\u679c\u4f60\u60f3\u77e5\u9053\u5deb\u672f\u7684\u76f8\u5173\u6559\u7a0b,\u8bf7\u67e5\u770b\"\u66ff\u4ee3\u9b54\u6cd5\"\u4efb\u52a1\u680f.%n%n\u6ce8\u610f:IC2\u548c\u661f\u7cfb(Galacticraft)\u7684\u5730\u5f62\u8f6c\u6362(\u6539\u9020)\u673a\u53ea\u80fd\u6539\u53d8\u5730\u8868,\u65e0\u6cd5\u6539\u53d8\u751f\u7269\u7fa4\u7cfb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJbw==",
                    "tooltip": "<strong>\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5</br>\u6f6e\u6e7f\u800c\u6e29\u6696\uff1f"
                },
                {
                    "name": "\u7164...\u6765\u81ea\u51cb\u7075\u7518\u8517?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1927.png",
                    "x": 156.0,
                    "y": 300.0,
                    "data": "\u51cb\u7075\u7518\u8517(Withereed)\u662f\u7164\u7684\u4e00\u79cd\u6765\u6e90,\u66f4\u91cd\u8981\u7684\u662f,\u5b83\u53ef\u4f5c\u4e3a\u66f4\u9ad8\u7ea7\u4f5c\u7269\u7684\u7236\u672c/\u6bcd\u672c.  \u4f60\u9700\u8981\u5c06\u7164\u5757\u7f6e\u4e8e\u4e0b\u65b9\u624d\u80fd\u4f7f\u5176\u5b8c\u5168\u6210\u719f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHhw==",
                    "tooltip": "<strong>\u7164...\u6765\u81ea\u51cb\u7075\u7518\u8517?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u730e\u6740\u70c8\u7130\u4eba\u592a\u8fc7\u56f0\u96be?"
                },
                {
                    "name": "\u61d2\u4eba\u53a8\u623f(Cooking for Blockheads)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2895.png",
                    "x": 636.0,
                    "y": 252.0,
                    "data": "\u611f\u8c22mitch\u628a\u8fd9\u4e2a\u8d85\u68d2\u7684mod\u79fb\u690d\u8fc7\u6765. \u901a\u8fc7\u8fd9\u4e2amod\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5408\u6210\u65b0\u98df\u7269. \u6240\u6709\u4e0e\u53a8\u623f\u5730\u677f\u76f8\u8fde\u7684\u65b9\u5757\u90fd\u88ab\u89c6\u4e3a\u540c\u4e00\u591a\u65b9\u5757\u7ed3\u6784(\u90fd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528!). \u53a8\u623f\u7684\u5de5\u4f5c\u53f0\u9762\u4f1a\u641c\u7d22\u4e0a\u65b9\u4e24\u683c\u7684\u6a71\u67dc,\u5305\u62ec\u5728\u6574\u4e2a\u591a\u65b9\u5757\u7ed3\u6784\u4e2d.%n%n\u5b58\u50a8\u5728\u5b58\u50a8\u5668(\u6bd4\u5982\u6a71\u67dc)\u6216\u4f60\u7684\u7269\u54c1\u680f\u4e2d\u7684\u7269\u54c1,\u90fd\u53ef\u4ee5\u53c2\u4e0e\u5408\u6210. \u6240\u6709\u5b58\u50a8\u7269\u54c1\u7684\u50a8\u5b58\u5668\u90fd\u662f\u4e00\u6837\u7684,\u6240\u4ee5\u9664\u975e\u4f60\u771f\u7684\u5f88\u60f3\u8981\u4e00\u9762\u5899\u7684\u51b0\u7bb1,\u5426\u5219\u4e0d\u8981\u9020\u592a\u591a... \u4e3a\u6c34\u69fd\u4f9b\u6c34,\u5373\u53ef\u652f\u6301\u6240\u6709\u9700\u8981\u6c34\u7684\u98df\u7269\u914d\u65b9.%n%n\u4f60\u53ef\u4ee5\u5728\u70e4\u7bb1\u4e2d\u5b58\u653e\u4e00\u4e9b\u70f9\u996a\u5de5\u5177.\u5269\u4e0b\u7684\u53ef\u4ee5\u5b58\u653e\u5728\u53a8\u5177\u67b6\u4e0a,\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u5408\u6210\u98df\u8c31\u914d\u65b9\u65f6\u81ea\u52a8\u4f7f\u7528\u5b83\u4eec\u4e86. \u5982\u679c\u4f60\u8fd8\u6ca1\u6cd5\u505a\u9f50\u6f58\u9a6c\u65af\u7684\u5de5\u5177,\u4e5f\u662f\u652f\u6301GT\u5de5\u5177\u7684,\u6bd4\u5982\u8f6f\u9524.%n%n\u70e4\u7bb1\u67093\u4e2a\u8f93\u5165\u69fd,3\u4e2a\u8f93\u51fa\u69fd,\u4e00\u6b21\u53ef\u4ee5\u5904\u74069\u4e2a\u7269\u54c1. \u5b83\u57fa\u672c\u4e0a\u5c31\u662f\u4e2a\u7089\u5b50.\u800c\u771f\u6b63\u6838\u5fc3\u7684\u662f\u70f9\u996a\u684c.%n%n\u70f9\u996a\u684c\u4f1a\u81ea\u52a8\u663e\u793a\u57fa\u4e8e\u73b0\u6709\u539f\u6750\u6599,\u53ef\u4ee5\u5236\u4f5c\u7684\u6240\u6709\u98df\u7269,\u800c\u4f60\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u76f4\u63a5\u5b8c\u6210\u5b83\u4eec. \u5236\u51fa\u6240\u6709\u7684\u98df\u7269,\u5e76\u83b7\u5f97\u6240\u6709\u7684\u5956\u52b1\u751f\u547d\u4e0a\u9650!%n%n\u4f60\u53ef\u4ee5\u4f7f\u7528\u67d3\u6599\u5bf9\u53a8\u623f\u8fdb\u884c\u6d82\u8272,\u70e4\u7bb1\u9664\u5916.%n%n\u8bf7\u6ce8\u610f,\u7531\u4e8e\u5f00\u53d1\u8fd8\u672a\u5b8c\u6210,\u6240\u4ee5\u61d2\u4eba\u53a8\u623f\u8fd8\u5b58\u5728\u4e00\u4e9b\u95ee\u9898,\u4f8b\u5982:\u8ba9\u70e4\u7bb1\u4e4b\u7c7b\u7684\u673a\u5668\u652f\u6301RF/EU\u80fd\u91cf\u7684\u5347\u7ea7\u8fd8\u6ca1\u6709\u52a0\u5165. \u7b49\u7b49...\u4e0d\u8fc7\u503c\u5f97\u5e86\u8d3a\u7684\u662f,\u5410\u53f8\u673a\u4fee\u597d\u4e86!%n%n\u8bf7\u5230GTNH\u4ed3\u5e93\u4e0b\u7684<CFB-specific>\u53cd\u9988bug\u53ca\u95ee\u9898,\u5730\u5740\u662f https://github.com/GTNewHorizons/CookingForBlockheads/issues %n%n\u7f50\u5b50\u91cc\u6ca1\u6709\u5976\u725b,\u672a\u6765\u4e5f\u4e0d\u4f1a\u6709.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALTw==",
                    "tooltip": "<strong>\u61d2\u4eba\u53a8\u623f(Cooking for Blockheads)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e66"
                },
                {
                    "name": "\u51b7\u5374\u4f60\u7684\u68c9\u82b1\u7cd6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1487.png",
                    "x": 564.0,
                    "y": 396.0,
                    "data": "\u4e0b\u4e00\u6b65\u5c31\u662f\u51b7\u5374\u70ed\u68c9\u82b1\u7cd6,\u4f7f\u7528HV\u7684\u771f\u7a7a\u51b7\u51bb\u673a\u8ba9\u5b83\u51b7\u9759\u4e00\u4e0b.%n%n\u4f60\u4f1a\u83b7\u5f97\u865a\u5f31II\u548c\u53cd\u80c3II\u6548\u679c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFzw==",
                    "tooltip": "<strong>\u51b7\u5374\u4f60\u7684\u68c9\u82b1\u7cd6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u70ed\u68c9\u82b1\u7cd6"
                },
                {
                    "name": "\u9999\u8106\u8150\u8089",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2898.png",
                    "x": 396.0,
                    "y": 108.0,
                    "data": "\u8150\u8089\u4e0d\u592a\u5065\u5eb7.\u5b83\u65e0\u6cd5\u4e3a\u4f60\u5145\u9965. \u8981\u662f\u667e\u5e72\u4f1a\u600e\u4e48\u6837?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALUg==",
                    "tooltip": "<strong>\u9999\u8106\u8150\u8089</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u67d4\u8f6f\u7684\u76ae\u9769"
                },
                {
                    "name": "\u4f5c\u7269\u81ea\u52a8\u5316",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1542.png",
                    "x": 300.0,
                    "y": 60.0,
                    "data": "\u4f5c\u7269\u76d1\u7ba1\u673a\u662f\u4e00\u53f0LV\u673a\u5668,\u53ef\u4ee5\u76d1\u63a711x11x3\u533a\u57df\u7684\u4f5c\u7269,\u5e76\u6839\u636e\u9700\u8981\u81ea\u52a8\u65bd\u80a5,\u4f7f\u7528\u9664\u8349\u5242\u4e0e\u6d47\u6c34. \u6c34\u53ef\u4ee5\u76f4\u63a5\u6cf5\u5165\u6216\u4f7f\u7528IC2\u6c34\u5316\u5355\u5143,\u6c34\u5316\u5355\u5143\u4f7f\u7528\u540e\u4e0d\u4f1a\u8fd4\u8fd8\u5355\u5143.%n%n\u4f5c\u7269\u76d1\u7ba1\u673a\u9632\u96e8,\u4f46\u8981\u786e\u4fdd\u4f60\u7684\u7535\u6e90\u4e0d\u4f1a\u6dcb\u96e8(\u4f60\u53ef\u80fd\u4f1a\u627e\u5230\u4e00\u79cd\u5947\u7279\u7684\u65b9\u5f0f\u505a\u5230),\u6216\u4f7f\u7528LV\u7535\u6c60\u4f9b\u7535. \u9502\u7535\u6c60\u5927\u6982\u80fd\u6301\u7eed\u7ea62\u5c0f\u65f6.%n%n\u8015\u5730\u4ecd\u7136\u9700\u8981\u9644\u8fd1\u6709\u6c34\u65b9\u5757\u624d\u80fd\u4fdd\u6301\u6e7f\u6da6,\u56e0\u4e3a\u76d1\u7ba1\u673a\u957f\u53ea\u4f1a\u6d47\u704c\u4f5c\u7269,\u800c\u4e0d\u662f\u571f\u58e4. \u5c1d\u8bd5\u5c06\u7761\u83b2\u653e\u5728\u6c34\u4e0a,\u8fd9\u6837\u8d70\u8def\u5c31\u4e0d\u4f1a\u6389\u4e0b\u53bb\u4e86,\u6216\u8005\u4f60\u53ef\u4ee5\u8bd5\u8bd5\u82b1\u571f.%n%n\u4f60\u9700\u8981\u4e0d\u9508\u94a2\u6765\u5236\u4f5c\u4f5c\u7269\u6536\u5272\u673a.  \u6797\u4e1a\u7684\u591a\u65b9\u5757\u519c\u573a(\u6797\u573a)\u53ef\u4f5c\u4e3a\u4f5c\u7269\u76d1\u7ba1\u673a\u548c\u4f5c\u7269\u6536\u5272\u673a\u7684\u66ff\u4ee3\u65b9\u6848,\u5b83\u4e5f\u53ef\u4ee5\u6536\u83b7\u4f5c\u7269\u67b6\u4e0a\u7684\u4f5c\u7269,\u751a\u81f3\u4e0d\u9700\u8981\u4f7f\u7528\u4f5c\u7269\u5206\u6790\u4eea\u6765\u9009\u62e9\u6b63\u786e\u7684\u751f\u957f\u9636\u6bb5\u5373\u53ef\u6536\u83b7!%n%n\u76ee\u524d,\u4f5c\u7269\u6536\u5272\u673a\u662fLV\u673a\u5668. \u6797\u4e1a\u519c\u573a\u53ef\u4ee5\u66ff\u4ee3\u4f5c\u7269\u76d1\u7ba1\u673a\u4e0e\u4f5c\u7269\u6536\u5272\u673a\u7684\u529f\u80fd.\u800c\u4e14\u5b83\u4e5f\u652f\u6301\u4f5c\u7269\u67b6,\u751a\u81f3\u65e0\u9700\u4f5c\u7269\u5206\u6790\u4eea\u4e5f\u53ef\u5728\u6b63\u786e\u7684\u9636\u6bb5\u6536\u5272\u4f5c\u7269!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGBg==",
                    "tooltip": "<strong>\u4f5c\u7269\u81ea\u52a8\u5316</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5</br>\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV"
                },
                {
                    "name": "\u4f5c\u7269\u4fe1\u606f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1794.png",
                    "x": 348.0,
                    "y": 12.0,
                    "data": "\u4f7f\u7528\u4fbf\u643a\u5f0f\u626b\u63cf\u4eea\u5bf9\u79cd\u690d\u4e8e\u571f\u5730\u4e0a\u7684\u4f5c\u7269\u626b\u63cf,\u4f60\u53ef\u4ee5\u83b7\u77e5\u4f5c\u7269\u4fe1\u606f\u4e0e\u73af\u5883\u4fe1\u606f.\u626b\u63cf\u4e4b\u540e\u7684\u4f5c\u7269\u6389\u843d\u7684\u79cd\u5b50\u4e5f\u4f1a\u4fdd\u6301\u626b\u63cf\u72b6\u6001.%n\u4f60\u53ef\u4ee5\u5728\u591a\u65b9\u5757\u4efb\u52a1\u680f\u7684\u5de5\u4e1a\u9ad8\u7089\u4efb\u52a1\u540e\u627e\u5230\u4fbf\u643a\u5f0f\u626b\u63cf\u4eea\u7684\u4efb\u52a1.\u5173\u4e8e\u8fd9\u4e9b\u53c2\u6570:%n%n\u751f\u957f(Growth):%n\u751f\u957f\u901f\u5ea6\u591a\u5feb,\u6570\u503c\u8d8a\u9ad8",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHAg==",
                    "tooltip": "<strong>\u4f5c\u7269\u4fe1\u606f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5206\u6790\u4f60\u7684\u4f5c\u7269"
                },
                {
                    "name": "\u6df1\u84dd\u8272\u7684\u84dd\u5b9d\u77f3\u4e4b\u6d77",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2265.png",
                    "x": 396.0,
                    "y": 156.0,
                    "data": "\u7528\u94dc\u77ff\u8393\u53ef\u4ee5\u5f88\u5bb9\u6613\u5f97\u83b7\u5f97\u84dd\u5b9d\u77f3\u8349(Sapphirum).\u4f60\u9700\u8981\u5728\u7530\u5730\u4e0b\u65b9\u653e\u4e2a\u84dd\u5b9d\u77f3\u5757\u624d\u80fd\u57f9\u80b2\u51fa\u5b83.\u5728LV\u9636\u6bb5,\u84dd\u5b9d\u77f3\u662f\u94dd\u548c\u6c27\u7684\u6781\u597d\u6765\u6e90.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI2Q==",
                    "tooltip": "<strong>\u6df1\u84dd\u8272\u7684\u84dd\u5b9d\u77f3\u4e4b\u6d77</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u5c1d\u8fc7\u91d1\u5c5e\u7684\u5473\u9053\u4e48?"
                },
                {
                    "name": "Dezil\u7684\u68c9\u82b1\u7cd6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1488.png",
                    "x": 600.0,
                    "y": 348.0,
                    "data": "\u6700\u540e\u4e00\u6b65,\u4f60\u9700\u8981\u7528\u4e00\u4e9b\u53f2\u8bd7\u7ea7\u7684\u98df\u7269\u4e3a\u4f60\u7684\u68c9\u82b1\u7cd6\u6ce8\u9b54.\u5f53\u7136,\u4f60\u5f97\u5148\u89e3\u9501\u6b64\u7814\u7a76\u624d\u80fd\u8fdb\u884c\u6ce8\u9b54.%n%n\u8fd9\u503c\u5f97\u4e48? \u771f\u7684\u6709\u9700\u8981\u8fd9\u4e48\u591abuff\u624d\u80fd\u6253\u8fc7\u7684\u654c\u4eba\u4e48? \u8fd9\u53d6\u51b3\u4e8e\u4f60.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF0A==",
                    "tooltip": "<strong>Dezil\u7684\u68c9\u82b1\u7cd6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u51b7\u5374\u4f60\u7684\u68c9\u82b1\u7cd6"
                },
                {
                    "name": "\u751f\u9762\u56e2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/637.png",
                    "x": 444.0,
                    "y": 156.0,
                    "data": "\u6c34\u8ddf\u9762\u7c89\u53ef\u4ee5\u5236\u6210\u751f\u9762\u56e2. \u751f\u9762\u56e2\u53ef\u4ee5\u7528\u4e8e\u8bb8\u591a\u6f58\u9a6c\u65af\u7684\u914d\u65b9\u4e2d.%n%n\u4e0d\u8981\u7528\u90a3\u7cdf\u7cd5\u7684NEI\u914d\u65b9,\u5c06\u4e00\u7ec4\u9762\u7c89\u4e22\u5165\u88c5\u6ee1\u6c34\u7684\u70bc\u836f\u9505\u4e2d\u5427.\u8c28\u9632\u4e73\u7cdc\u6cfb!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACfQ==",
                    "tooltip": "<strong>\u751f\u9762\u56e2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>...\u4e00\u5206\u6536\u83b7</br>\u9762\u7c89"
                },
                {
                    "name": "\u4f60\u5c1d\u8fc7\u91d1\u5c5e\u7684\u5473\u9053\u4e48?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2264.png",
                    "x": 348.0,
                    "y": 156.0,
                    "data": "\u91d1\u5c5e\u77ff\u8393\u662f\u65b0\u79cd\u5b50\u7684\u4f18\u79c0\u6765\u6e90.\u4f60\u53ef\u4ee5\u57f9\u80b2\u51fa\u5b83\u4eec,\u6216\u8005\u4ece\u786c\u5e01\u5546\u5e97\u8d2d\u4e70\u4e00\u4e9b.\u6211\u9700\u8981\u4e00\u4e9b\u94dc,\u6240\u4ee5\u7ed9\u6211\u4e00\u4e9b\u94dc\u77ff\u8393\u5427.%n%n\u91d1\u5c5e\u77ff\u8393\u9700\u8981\u76f8\u5e94\u7684\u91d1\u5c5e\u5757\u624d\u80fd\u5b8c\u5168\u6210\u719f,\u4f46\u4f60\u53ef\u4ee5\u5728\u5b8c\u5168\u6210\u719f\u524d\u6536\u83b7\u5b83\u4eec(\u6389\u843d\u6570\u91cf\u51cf\u5c11).\u4e0d\u8fc7\u51e0\u4e4e\u6240\u6709\u5176\u4ed6\u9700\u8981\u7279\u5b9a\u65b9\u5757\u7684\u4f5c\u7269\u90fd\u65e0\u6cd5\u5728\u5b8c\u5168\u6210\u719f\u524d\u6536\u83b7.\u8bf7\u67e5\u770b\u79cd\u5b50\u888b\u83b7\u77e5\u5b83\u5177\u4f53\u9700\u8981\u4ec0\u4e48.\u4f60\u8fd8\u53ef\u4ee5\u5230wiki\u4e0a\u67e5\u9605\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f.\u901a\u5e38\u8fd9\u7c7b\u4f5c\u7269\u9700\u8981\u77ff\u77f3\u6216\u91d1\u5c5e\u5757.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI2A==",
                    "tooltip": "<strong>\u4f60\u5c1d\u8fc7\u91d1\u5c5e\u7684\u5473\u9053\u4e48?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u611f\u89c9\u6709\u70b9\u50cf\u83dc\u9e1f..."
                },
                {
                    "name": "\u66f4\u591a\u72b6\u6001\u6570\u636e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2769.png",
                    "x": 396.0,
                    "y": 12.0,
                    "data": "\u8fd8\u9700\u8981\u8003\u8651\u53e6\u5916\u4e03\u4e2a\u72b6\u6001.%n%n\u80a5\u6599(Fertilizer)\u3001\u6c34\u5206(Water)\u3001\u548c\u9664\u8349\u5242(Weed-EX)\u8fd9\u4e09\u4e2a\u72b6\u6001\u503c\u66f4\u591a\u53cd\u5e94\u7684\u662f\u4f5c\u7269\u67b6\u800c\u975e\u4f5c\u7269\u672c\u8eab\u7684\u72b6\u6001.\u53cd\u5e94\u7684\u90fd\u662f\u4f7f\u7528\u4e86/\u5269\u4e0b\u4e86\u591a\u5c11\u80a5\u6599/\u6c34\u5206/\u9664\u8349\u5242.%n%n\u517b\u5206(Nutrients)\u3001\u6e7f\u5ea6(Humidity)\u3001\u548c\u7a7a\u6c14\u8d28\u91cf(Air-Quality)\u8fd9\u4e09\u4e2a\u72b6\u6001\u90fd\u662f\u5173\u4e8e\u73af\u5883\u7684.\u4e14\u5b83\u4eec\u8fd8\u53d7\u80a5\u6599\u548c\u6c34\u5206\u72b6\u6001\u7684\u5f71\u54cd.%n%n\u517b\u5206\u548c\u6e7f\u5ea6\u4e0e\u751f\u7269\u7fa4\u7cfb\u7684\u5173\u7cfb\u6700\u5927,\u6cbc\u6cfd(swamp)\u548c\u96e8\u6797(rainforest)\u751f\u7269\u7fa4\u7cfb\u6700\u4f73(\u708e\u70ed+\u6f6e\u6e7f),\u4e0d\u8fc7\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6b63\u786e\u7684\u8bbe\u7f6e\u83b7\u5f97\u989d\u5916\u7684\u72b6\u6001\u52a0\u6210.%n%n\u517b\u5206:%n\u519c\u7530\u4e0b\u65b9\u7684\u6ce5\u571f\u65b9\u5757\u67093\u70b9\u52a0\u6210,\u4f5c\u7269\u6240\u9700\u7684\u7279\u5b9a\u65b9\u5757\u67092\u70b9\u52a0\u6210.\u6240\u4ee5,\u6700\u4f73\u505a\u6cd5\u662f\u5c06\u6240\u9700\u7279\u5b9a\u65b9\u5757\u7f6e\u4e8e\u6ce5\u571f\u94fe\u7684\u6700\u4e0b\u65b9,\u56e0\u4e3a\u4f5c\u7269\u5224\u5b9a\u73af\u5883\u65f6\u662f\u6309\u7167\u94fe\u5f0f\u68c0\u6d4b\u7684,\u5e76\u975e\u68c0\u6d4b\u7279\u5b9a\u9ad8\u5ea6. \u4e3e\u4e2a\u4f8b\u5b50:\u4f5c\u7269\u67b6->\u7530->\u6ce5\u571f->\u77ff\u77f3->\u6ce5\u571f,\u8fd9\u6837\u7684\u6392\u5217\u53ea\u4f1a\u8ba1\u7b971\u5757\u6ce5\u571f\u7684\u517b\u5206\u503c,\u77ff\u77f3\u4e0b\u65b9\u7684\u6ce5\u571f\u5c06\u88ab\u5ffd\u7565.%n%n\u4f5c\u7269\u4e0a\u6240\u65bd\u7684\u80a5\u6599\u4f1a\u51b3\u5b9a5-10\u70b9\u517b\u5206\u503c.\u5373\u53ef\u901a\u8fc7\u65bd\u80a5\u63d0\u9ad8\u5176\u517b\u5206\u503c.199\u70b9\u80a5\u6599\u503c\u53ef\u83b7\u5f9710\u70b9\u517b\u5206\u503c\u52a0\u6210,\u4f46\u53ea\u6709\u5728\u4f5c\u7269\u80a5\u6599\u503c\u4f4e\u4e8e100\u65f6\u624d\u80fd\u518d\u6b21\u65bd\u80a5(\u8fd9\u4e5f\u662f\u517b\u5206\u503c5-10\u6d6e\u52a8\u7684\u539f\u56e0).\u6240\u4ee5\u5bf9\u4e8e\u9ad8\u7ea7\u4f5c\u7269\u800c\u8a00,\u8ba1\u7b97\u517b\u5206\u503c\u65f6\u8bf7\u4ee5100\u70b9\u80a5\u6599\u503c\u4e3a\u57fa\u51c6,\u800c\u4e0d\u8981\u7528199\u70b9\u80a5\u6599\u503c\u8fd9\u4e00\u6781\u9650\u52a0\u6210.\u9aa8\u7c89\u3001IC2\u80a5\u6599\u3001\u6797\u4e1a\u80a5\u6599\u90fd\u53ef\u7528\u4e8e\u65bd\u80a5.\u4e3a\u6797\u4e1a\u519c\u573a(\u679c\u56ed\u6a21\u5f0f)\u6216\u4f5c\u7269\u76d1\u7ba1\u673a\u63d0\u4f9b\u80a5\u6599\u90fd\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u65bd\u80a5(\u6797\u4e1a\u519c\u573a\u6536\u5272\u4f5c\u7269\u65f6\u4e5f\u9700\u8981\u80a5\u6599).%n%n\u6e7f\u5ea6:%n\u5f53\u6ce5\u571f\u8015\u5730\u88ab\u6c34\u6e7f\u6da6(\u53d8\u9ed1)\u65f6,\u53ef\u63d0\u4f9b2\u70b9\u6e7f\u5ea6\u503c\u52a0\u6210.\u800c\u5176\u4ed6\u65b9\u5757\u4f5c\u4e3a\u519c\u7530\u65e0\u6cd5\u4eab\u53d7\u6b64\u52a0\u6210.%n%n\u4f5c\u7269\u7684\u6c34\u5206\u503c\u53ef\u63d0\u4f9b10\u70b9\u6e7f\u5ea6\u503c.\u8fd9\u4e0e\u80a5\u6599\u503c\u7c7b\u4f3c,\u4f5c\u7269\u6700\u9ad8200\u70b9\u6c34\u5206\u503c\u53ef\u63d0\u4f9b10\u70b9\u6e7f\u5ea6\u503c;\u800c\u4e0d\u540c\u7684\u662f\u6c34\u5206\u503c\u53ef\u4ee5\u4e0d\u65ad\u8865\u5145\u4fdd\u6301200\u8fd9\u4e00\u5cf0\u503c,\u800c\u4e0d\u7528\u7b49\u5230\u4f4e\u4e8e100,\u6240\u4ee5\u6c34\u5206\u503c\u63d0\u4f9b\u7684\u6e7f\u5ea6\u503c\u4e00\u822c\u7a33\u5b9a10\u70b9.\u624b\u6301IC2\u6c34\u5316\u5355\u5143\u53ef\u4ee5\u6d47\u6c34,\u800c\u6797\u4e1a\u519c\u573a\u548c\u4f5c\u7269\u76d1\u7ba1\u673a\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5316\u704c\u6e89.\u4e0d\u8fc7\u6797\u4e1a\u519c\u573a\u6536\u5272\u4f5c\u7269\u65f6\u4e5f\u9700\u8981\u6c34.%n%n\u7a7a\u6c14\u8d28\u91cf:%n\u4f5c\u7269\u5468\u56f4\u76848\u683c\u7a7a\u95f4,\u51b3\u5b9a\u4e864\u70b9\u7a7a\u6c14\u8d28\u91cf\u503c\u52a0\u6210.\u4e00\u682a\u4f5c\u7269\u4f1a\u68c0\u6d4b\u5468\u56f48\u683c\u662f\u5426\u4e3a\u5b8c\u6574\u65b9\u5757\u6216\u5176\u4ed6\u4f5c\u7269,\u5982\u679c\u4e0d\u662f,\u90a3\u4e48\u6bcf\u4e24\u5904\u7a7a\u95f4\u5c06\u63d0\u4f9b1\u70b9\u7a7a\u6c14\u8d28\u91cf\u503c\u52a0\u6210,\u6700\u9ad84\u70b9.\u4e00\u822c\u6765\u8bf4\u8fd94\u70b9\u6216\u591a\u6216\u5c11\u4f1a\u6709\u90e8\u5206\u727a\u7272,\u65e0\u6cd5\u62ff\u5168.%n%n\u519c\u7530\u9ad8\u5ea6\u4e5f\u51b3\u5b9a\u4e864\u70b9\u7a7a\u6c14\u8d28\u91cf\u503c.\u4eceY",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK0Q==",
                    "tooltip": "<strong>\u66f4\u591a\u72b6\u6001\u6570\u636e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f5c\u7269\u4fe1\u606f"
                },
                {
                    "name": "\u91ce\u683c(\u5fb7\u56fd\u91ce\u683c\u724c\u5229\u53e3\u9152)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1275.png",
                    "x": 588.0,
                    "y": 156.0,
                    "data": "\u91ce\u683c\u724c\u5229\u53e3\u9152\u5728\u5fb7\u56fd\u662f\u5f88\u666e\u901a\u7684\u996e\u6599,\u4e3a\u4ec0\u4e48\u4f60\u4e0d\u6765\u4e00\u74f6\u5462\uff1f\u4fbf\u5b9c\u53c8\u5b9e\u60e0,\u55ef...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE-w==",
                    "tooltip": "<strong>\u91ce\u683c(\u5fb7\u56fd\u91ce\u683c\u724c\u5229\u53e3\u9152)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f0f\u7279\u52a0"
                },
                {
                    "name": "\u4f5c\u7269\u52a0\u901f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3142.png",
                    "x": 396.0,
                    "y": 60.0,
                    "data": "\u6b22\u8fce\u6765\u5230\u6211\u7684TED\u6f14\u8bb2,\u4eca\u5929\u6211\u4eec\u6765\u8c08\u8c08\u6781\u9650\u5de5\u4e1a\u6e29\u5ba4.%n\u8fd9\u662f\u6700\u5148\u8fdb\u4e14\u65e0\u5ef6\u8fdf\u7684\u4f5c\u7269\u519c\u573a,\u5e76\u53ef\u4ee5\u4e3a\u4f60\u63d0\u4f9b\u6210\u5428\u7684\u4f5c\u7269.%n\u8fd9\u53f0\u673a\u5668\u5728EV\u9636\u6bb5\u5c31\u53ef\u4ee5\u5236\u9020,\u4f46\u60f3\u8981\u89e3\u9501IC2\u6742\u4ea4\u4f5c\u7269\u6a21\u5f0f,\u8fd8\u5f97\u81f3\u5c11\u4e3a\u5176\u63d0\u4f9bLuV\u80fd\u91cf\u624d\u884c.%n\u653e\u7f6e\u63a7\u5236\u5668\u65b9\u5757\u540e\u5bf9\u5176\u4f7f\u7528\u6295\u5f71\u4eea\u5373\u53ef\u663e\u793a\u6574\u4f53\u7ed3\u6784.%n\u73bb\u7483\u7b49\u7ea7\u4f1a\u9650\u5236\u80fd\u6e90\u7b49\u7ea7,\u800cUV\u73bb\u7483\u652f\u6301\u6240\u6709\u80fd\u6e90\u7b49\u7ea7.%n\u624b\u6301\u87ba\u4e1d\u5200Shift+\u53f3\u952e\u4ee5\u5207\u6362\u4f5c\u7269\u6a21\u5f0f(IC2/\u666e\u901a),\u5f88\u9057\u61be,\u4f60\u4e0d\u80fd\u5728\u540c\u4e00\u53f0\u673a\u5668\u5185\u540c\u65f6\u79cd\u690d\u8fd9\u4e24\u79cd\u4f5c\u7269.%n\u8fd9\u53f0\u673a\u5668\u7ba1\u7406\u4f5c\u7269\u6709\u4e09\u79cd\u6a21\u5f0f(\u4f7f\u7528\u87ba\u4e1d\u5200\u5207\u6362):%n%n\u8bbe\u7f6e\u6a21\u5f0f(\u8f93\u5165):%n\u8fd9\u4e2a\u6a21\u5f0f\u4e0b,\u4f60\u53ef\u4ee5\u5c06\u4f5c\u7269\u79cd\u690d\u5230\u673a\u5668\u4e2d.%n\u53ea\u9700\u5c06\u79cd\u5b50\u9001\u5165\u673a\u5668\u7684\u8f93\u5165\u603b\u7ebf,\u7136\u540e\u4f7f\u7528\u8f6f\u9524\u542f\u52a8\u673a\u5668\u5373\u53ef.%n\u53e6\u5916,\u4f60\u8fd8\u9700\u8981\u8f93\u5165IC2\u6742\u4ea4\u4f5c\u7269\u751f\u957f\u6240\u9700\u8981\u7684\u65b9\u5757(\u5982\u679c\u6709\u7684\u8bdd)%n\u7b49\u5230\u8f93\u5165\u603b\u7ebf\u7a7a\u4e86,\u5c31\u53ef\u4ee5\u5173\u95ed\u673a\u5668\u5e76\u5207\u6362\u6a21\u5f0f\u4e86.%n\u8bf7\u6ce8\u610f,\u57fa\u4e8e\u4e0d\u540c\u7535\u538b\u7b49\u7ea7,\u673a\u5668\u5185\u90e8\u7684\u4f5c\u7269\u69fd\u4f4d\u662f\u6709\u9650\u7684.%n\u666e\u901a\u4f5c\u7269\u7684\u521d\u59cb\u69fd\u4f4d\u6570\u4e3a1,\u540c\u65f6EV\u540e\u7684\u6bcf\u4e2a\u7b49\u7ea7\u69fd\u4f4d\u6570x2,\u6bcf\u4e2a\u69fd\u4f4d\u53ef\u4ee5\u79cd\u690d64\u682a\u540c\u79cd\u4f5c\u7269.%n\u800c\u5728IC2\u6742\u4ea4\u4f5c\u7269\u6a21\u5f0f\u4e0b,\u521d\u59cb\u69fd\u4f4d\u6570\u4e3a4,\u540c\u65f6LuV\u540e\u7684\u6bcf\u4e2a\u7b49\u7ea7\u69fd\u4f4d\u6570x4,\u6bcf\u4e2a\u69fd\u4f4d\u53ea\u80fd\u79cd\u690d1\u682a\u4f5c\u7269.%n%n\u8bbe\u7f6e\u6a21\u5f0f(\u8f93\u51fa):%n\u6b64\u6a21\u5f0f\u4e0b,\u4f60\u53ef\u4ee5\u79fb\u52a8\u4f60\u7684\u6e29\u5ba4,\u6216\u662f\u5347\u7ea7\u4f5c\u7269.%n\u673a\u5668\u5728\u6b64\u6a21\u5f0f\u4e0b\u8fd0\u884c\u65f6,\u5c06\u5728\u8f93\u51fa\u603b\u7ebf\u4e2d\u8f93\u51fa\u5176\u5185\u90e8\u7684\u6240\u6709\u5df2\u79cd\u690d\u4f5c\u7269.%n%n\u666e\u901a\u4f5c\u7269\u8fd0\u884c:%n\u5bf9\u4e8e\u666e\u901a\u4f5c\u7269,\u5355\u6b21\u8fd0\u884c\u76f8\u5f53\u76f4\u622a\u4e86\u5f53.\u57fa\u7840\u8fd0\u884c\u65f6\u95f4\u4e3a5\u79d2,\u8fd0\u884c\u7ed3\u675f\u65f6\u6240\u6709\u4f5c\u7269\u90fd\u4f1a\u957f\u6210,\u5e76\u5c06\u6536\u83b7\u4ece\u8f93\u51fa\u603b\u7ebf\u4e2d\u8f93\u51fa. \u53e6\u5916,\u4eceEV\u4e4b\u540e,\u8fd0\u884c\u65f6\u95f4\u4e0d\u65ad\u7f29\u77ed(\u57fa\u7840\u8fd0\u884c\u65f6\u95f4\u9664\u4ee5\u8d85\u8fc7HV\u7684\u7ea7\u6570\u4e3a\u5b9e\u9645\u8fd0\u884c\u65f6\u95f4,\u6700\u5c0f1\u79d2.WOW) %n%nIC2\u6742\u4ea4\u4f5c\u7269\u5c31\u662f\u53e6\u4e00\u79cd\u8fd0\u884c\u65b9\u5f0f,\u6ca1\u8fd9\u4e48\u7b80\u5355\u4e86. \u901a\u5e38\u5b83\u4eec\u662f\u6a21\u62df\u7684,\u53ea\u662f\u52a0\u901f\u4e8632\u500d.\u57fa\u7840\u8fd0\u884c\u65f6\u95f4\u540c\u6837\u662f5\u79d2.\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e09\u5f55\u4eea\u6765\u68c0\u67e5\u4f5c\u7269\u751f\u957f\u8fdb\u5ea6.%n%n\u5982\u679c\u4f60\u60f3\u8ba9\u4f5c\u7269\u957f\u5f97\u66f4\u5feb\u70b9,\u53ef\u4ee5\u4f7f\u7528\u80a5\u6599(\u81f3\u591a400\uff05,\u591a\u4f59\u4f1a\u6389\u843d!).\u6e29\u5ba4\u4f1a\u5728\u8fd0\u884c\u5f00\u59cb\u7684\u65f6\u5019,\u4ece\u8f93\u5165\u603b\u7ebf\u4e2d\u63d0\u53d6\u80a5\u6599,\u5e76\u5728\u672c\u6b21\u8fd0\u884c\u4e2d\u4f7f\u7528. \u6bcf\u682a\u666e\u901a\u4f5c\u7269\u6a21\u5f0f\u4e0b\u7684\u4f5c\u7269,\u65bd\u80a5\u53ef\u4ee5\u83b7\u5f97+200\uff05,\u800c\u5728IC2\u6742\u4ea4\u4f5c\u7269\u6a21\u5f0f\u4e0b\u5219\u4e3a+10\uff05.\u6b64\u9879\u589e\u76ca\u5747\u5300\u5730\u5e94\u7528\u4e8e\u6bcf\u682a\u4f5c\u7269\u4e0a. \u6bd4\u5982\uff1a%n\u666e\u901a\u4f5c\u7269\u6a21\u5f0f,3\u4e2a\u5c0f\u9ea6\u79cd\u5b50,1\u4e2a\u8336\u79cd\u5b50,\u8f93\u5165\u4e00\u4efd\u80a5\u6599,\u4f60\u53ef\u4ee5\u83b7\u5f97+150\uff05\u5c0f\u9ea6\u6389\u843d,\u4ee5\u53ca+50\uff05\u8336\u6389\u843d.%nIC2\u6742\u4ea4\u4f5c\u7269\u6a21\u5f0f,16\u4e2a\u897f\u74dc\u79cd\u5b50\u888b,\u8f93\u516564\u4efd\u80a5\u6599,\u4f60\u4f1a\u83b7\u5f97+40\uff05\u6389\u843d.%n%n\u53e6\u5916,\u4f60\u7684\u4f5c\u7269\u90fd\u9700\u8981\u6c34\u624d\u80fd\u751f\u957f.\u6bcf\u6b21\u8fd0\u884c\u6bcf\u682a\u4f5c\u7269\u6d88\u80171000L\u6c34.\u6240\u4ee5,\u4e3e\u4f8b\u6765\u8bf4,\u5982\u679c\u4f60\u79cd\u690d\u4e86576\u682a\u8336\u4f5c\u7269,UV\u7b49\u7ea7\u7684\u6e29\u5ba4,\u6bcf\u79d2\u9700\u8981576000L\u6c34.%n%n\u6700\u540e\u7684\u6ce8\u610f\u4e8b\u9879:%n\u65e0\u6cd5\u7981\u7528\u52a8\u753b.%n\u53ef\u4ee5\u7528\u53cd\u76f8\u706f.%n\u6ce5\u571f\u5fc5\u987b\u4e3a\u8015\u8fc7\u7684\u6c83\u571f(RandomThings-mod\u7684).%n\u5982\u679c\u4f60\u9047\u5230\u4efb\u4f55\u95ee\u9898\u6216\u6709\u4efb\u4f55\u5efa\u8bae,\u8bf7\u5230github\u53d1issue\u5e76@kuba6000.%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u662f\u6211\u4e3a\u4e86\u79cd\u8336\u5199\u7684...%n",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMRg==",
                    "tooltip": "<strong>\u4f5c\u7269\u52a0\u901f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c5\u9636\u6bb5(IV)"
                },
                {
                    "name": "\u611f\u89c9\u6709\u70b9\u50cf\u83dc\u9e1f...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1603.png",
                    "x": 300.0,
                    "y": 156.0,
                    "data": "\u90a3\u4e48\u4f60\u80fd\u4e0d\u80fd\u5e2e\u6211\u79cd\u4e00\u4e9b\u7cbe\u534e\u8393\u4e1b,\u8ba9\u6211\u80fd\u591f\u5347\u7ea7\uff1f \u4f60\u53ef\u4ee5\u79cd\u690d\u76f4\u63a5\u4ece\u704c\u6728\u4e1b\u4e2d\u83b7\u5f97\u7684\u7cbe\u534e\u8393\u4e1b,\u6216\u7e41\u6b96\u4e00\u4e9b.%n%n\u4f5c\u4e3a\u5956\u52b1,\u6211\u4f1a\u7ed9\u4f60\u4e00\u4e2a\u611a\u8822\u7684\u79cd\u5b50,\u8fd9\u662f\u6211\u670b\u53cb\u63d0\u4f9b\u7684. \u5b83\u4e00\u5b9a\u4f1a\u8ba9\u4f60\u4fdd\u6301\u8b66\u60d5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGQw==",
                    "tooltip": "<strong>\u611f\u89c9\u6709\u70b9\u50cf\u83dc\u9e1f...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5"
                },
                {
                    "name": "\u521d\u6b21\u6742\u4ea4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/719.png",
                    "x": 108.0,
                    "y": 60.0,
                    "data": "\u4f60\u7684\u4f5c\u7269\u67b6\u4e0a\u5df2\u7ecf\u79cd\u597d\u4e86\u65b0\u7684\u690d\u7269.\u5bf9\u7740\u4f5c\u7269\u67b6\u4e0a\u7684\u6210\u719f\u4f5c\u7269\u53f3\u952e\u53ef\u4ee5\u6536\u83b7\u6389\u843d\u7269,%n%n\u800c\u5de6\u952e\u4f1a\u7834\u574f\u4f5c\u7269\u5e76\u6389\u843d\u79cd\u5b50\u888b(\u8bd1\u8005\u6ce8:\u5e76\u4e0d\u4e00\u5b9a\u6389\u843d\u4e00\u4e2a\u79cd\u5b50\u888b,\u53ef\u80fd\u4f1a\u6389\u843d0-2\u4e2a\u79cd\u5b50\u888b,\u68c0\u9a8c\u8840\u7edf\u7684\u65f6\u523b\u5230\u4e86!).\u63d0\u793a,\u968f\u7740\u4f5c\u7269\u6210\u719f\u5ea6\u7684\u589e\u52a0,\u6389\u843d\u79cd\u5b50\u888b\u7684\u51e0\u7387\u589e\u52a0(\u975e\u914b\u798f\u97f3).\u6536\u96c6\u597d\u516b\u79cd\u4e0d\u9650\u79cd\u7c7b\u7684\u79cd\u5b50\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1.%n%n\u60f3\u8981\u89e3\u9501\u4e0b\u4e00\u4e2a\u4efb\u52a1,\u4f60\u9700\u8981\u4e00\u53f0LV\u626b\u63cf\u4eea.%n%n\u8981\u662f\u4f60\u4ee5\u524d\u6ca1\u505a\u8fc7,\u53ef\u4ee5\u8003\u8651\u5236\u4f5c\u4e00\u4e9b\u6587\u6863\u67dc.\u5b83\u4eec\u53ef\u5b58\u50a8\u3001\u643a\u5e26\u5927\u91cf\u540c\u79cd\u7269\u54c1,\u975e\u5e38\u9002\u5408\u79cd\u5b50\u888b.\u53e6\u5916,\u6587\u6863\u67dc\u4f1a\u5c06\u5b58\u50a8\u7269\u6309\u540d\u79f0\u6392\u5e8f.\u60f3\u8981\u627e\u5230\u7279\u5b9a\u7684\u79cd\u5b50\u888b,\u5c06\u5b83\u7684\u540d\u5b57\u8f93\u5165NEI\u641c\u7d22\u680f,\u7136\u540e\u53cc\u51fb\u641c\u7d22\u680f,\u4f7f\u5176\u9ec4\u8272\u9ad8\u4eae.\u73b0\u5728\u4f60\u5c31\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5728\u6587\u6863\u67dc\u4e2d\u53d1\u73b0\u4f60\u8981\u627e\u7684\u79cd\u5b50\u888b\u4e86.%n%n\u6216\u8005\u76f4\u63a5\u628a\u4e0d\u8981\u7684\u79cd\u5b50\u4e22\u8fdb\u7bb1\u5b50\u91cc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACzw==",
                    "tooltip": "<strong>\u521d\u6b21\u6742\u4ea4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u519c\u573a\"\u667a\u8005\"\u624b\u518c"
                },
                {
                    "name": "\u7b2c\u4e00\u4e2a\u624b\u4f5c\u9762\u5305",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/636.png",
                    "x": 444.0,
                    "y": 204.0,
                    "data": "\u5728\u7194\u7089\u70d8\u7119\u4f60\u7684\u751f\u9762\u56e2,\u505a\u4e9b\u597d\u5403\u7684\u9762\u5305\u5427.\u4f60\u7684\u7b2c\u4e00\u4e2a\u9762\u5305!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACfA==",
                    "tooltip": "<strong>\u7b2c\u4e00\u4e2a\u624b\u4f5c\u9762\u5305</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>...\u4e00\u5206\u6536\u83b7</br>\u751f\u9762\u56e2"
                },
                {
                    "name": "\u9c7c\u7c7b\u8bf1\u9975",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/630.png",
                    "x": 684.0,
                    "y": 204.0,
                    "data": "\u4e3a\u4f60\u7684\u52a8\u7269\u9677\u9631\u5236\u4f5c\u4e00\u4e9b\u9c7c\u7c7b\u8bf1\u9975.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACdg==",
                    "tooltip": "<strong>\u9c7c\u7c7b\u8bf1\u9975</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6355\u9c7c\u9677\u9631"
                },
                {
                    "name": "\u6355\u9c7c\u9677\u9631",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/633.png",
                    "x": 636.0,
                    "y": 156.0,
                    "data": "\u9493\u9c7c\u53ef\u80fd\u5f88\u65e0\u804a,\u4f55\u4e0d\u7528\u9677\u9631\u81ea\u52a8\u6355\u9c7c\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACeQ==",
                    "tooltip": "<strong>\u6355\u9c7c\u9677\u9631</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177</br>\u9493\u9c7c\u4f19\u4f34"
                },
                {
                    "name": "\u6355\u9c7c\u9677\u96312.0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1009.png",
                    "x": 636.0,
                    "y": 204.0,
                    "data": "\u9493\u9c7c\u771f\u7684\u5f88\u65e0\u804a.\u90a3\u4e3a\u4ec0\u4e48\u4e0d\u7528\u6355\u9c7c\u9677\u9631\u6765\u81ea\u52a8\u6355\u9c7c\u5462\uff1f%n%n\u90a3\u4e48\u6765\u505a\u4e00\u4e2a2.0\u7248\u672c\u7684\u6355\u9c7c\u9677\u9631\u5427!\u4e0d\u9700\u8981\u9c7c\u9975\u5466~~~",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD8Q==",
                    "tooltip": "<strong>\u6355\u9c7c\u9677\u96312.0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7194\u70bc!</br>\u6355\u9c7c\u9677\u9631"
                },
                {
                    "name": "\u9762\u7c89",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/635.png",
                    "x": 444.0,
                    "y": 108.0,
                    "data": "\u505a\u9762\u5305\u7684\u7b2c\u4e00\u6b65\u662f\u4f7f\u7528\u7814\u94b5\u6216\u78e8\u7c89\u673a\u78e8\u788e\u5c0f\u9ea6\u4ee5\u53d6\u5f97\u9762\u7c89.\u9762\u53ef\u4ee5\u7528\u4e8e\u8bb8\u591a\u6f58\u9a6c\u65af\u7684\u914d\u65b9\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACew==",
                    "tooltip": "<strong>\u9762\u7c89</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5927\u9ea6\u65f6\u95f4</br>...\u4e00\u5206\u6536\u83b7</br>\u5c0f\u9ea6\u65f6\u523b"
                },
                {
                    "name": "\u82b1\u7684\u529b\u91cf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/725.png",
                    "x": 12.0,
                    "y": 108.0,
                    "data": "\u5728\u4f5c\u7269\u67b6\u4e0a\u79cd\u690d\u67d3\u6599\uff1f\u8bd5\u7740\u79cd\u4e00\u4e9b\u82b1,\u5982\u679c\u4f60\u5c06\u73ab\u7470\u53ca\u84b2\u516c\u82f1\u914d\u79cd,\u53ef\u4ee5\u5f97\u5230\u4e00\u79cd\u65b0\u7684\u82b1\u4ee5\u53ca\u4e0d\u540c\u989c\u8272\u7684\u67d3\u6599.%n%n\u4f60\u9700\u8981\u5c064\u79cd\u539f\u7248\u82b1\u653e\u7f6e\u5728\u4f5c\u7269\u67b6\u4e0a\u79cd\u690d.\u5b83\u4eec\u540c\u6837\u9700\u8981\u8f83\u9ad8\u7684\u4eae\u5ea6\u624d\u80fd\u751f\u957f.%n%n\u60f3\u8981\u83b7\u5f97\"\u73ab\u7470\u79cd\u5b50\",\u4f60\u9700\u8981\u5c06\u7f42\u7c9f\u79cd\u690d\u5728\u4f5c\u7269\u67b6\u4e0a.\u8001\u5b9e\u8bf4,\u53ea\u6709\u51e0\u79cd\u82b1\u53ef\u4ee5\u7528.%n%n\u5982\u679c\u4f60\u771f\u7684\u60f3\u8981\u8fd9\u4e9b\u67d3\u6599,\u8bf7\u6539\u7528\u5f69\u8679\u4ed9\u4eba\u638c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC1Q==",
                    "tooltip": "<strong>\u82b1\u7684\u529b\u91cf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u519c\u573a\"\u667a\u8005\"\u624b\u518c"
                },
                {
                    "name": "\u98df\u72692.0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1178.png",
                    "x": 588.0,
                    "y": 300.0,
                    "data": "\u5fd8\u8bb0\u4f60\u6709\u5173\u98df\u7269\u7684\u4e00\u5207\u77e5\u8bc6\u5427!\u6709\u4e86\u5168\u65b0\u7684\u88c5\u7f50\u673a,\u4f60\u53ef\u4ee5\u5c06\u98df\u7269\u53d8\u6210\u8425\u517b\u4e30\u5bcc\u7684\u7f50\u5934\u6765\u586b\u9971\u809a\u5b50\u4e86. \u7f50\u5934\u53ef\u4ee5\u5feb\u901f\u6062\u590d\u4f60\u7684\u9971\u98df\u5ea6,\u8fd9\u4f1a\u8ba9\u4f60\u611f\u89c9\u5f88\u5feb\u4e50!\u800c\u4e14\u968f\u4fbf\u5403\u591a\u5c11\u90fd\u4e0d\u4f1a\u6709\u51cf\u6301.%n%n\u522b\u7b49\u9971\u98df\u5ea6\u6389\u5230\u5e95\u624d\u5403\u7f50\u5934,\u7f50\u5934\u6062\u590d\u7684\u9971\u98df\u5ea6\u975e\u7ebf\u6027.\u4e00\u6b21\u54033\u4e2a\u6548\u7387\u6700\u9ad8.(\u6b64\u6570\u636e\u4e3a\u73a9\u5bb6\u63d0\u4f9b)  \u7136\u9e45\u8bd1\u8005\u8ba4\u4e3a\u7f50\u5934\u6839\u672c\u4e0d\u503c\u94b1,\u60f3\u600e\u4e48\u5403\u5c31\u600e\u4e48\u5403.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEmg==",
                    "tooltip": "<strong>\u98df\u72692.0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HV\u5377\u677f\u673a"
                },
                {
                    "name": "\u6de1\u6c34\u548c\u725b\u5976",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1010.png",
                    "x": 588.0,
                    "y": 12.0,
                    "data": "\u5f88\u591a\u5408\u6210\u8868\u90fd\u9700\u8981\u7528\u5230\u725b\u5976\u548c\u6de1\u6c34.\u4f46\u662f\u666e\u901a\u7684\u5236\u4f5c\u65b9\u6cd5\u5f88\u9ebb\u70e6.%n%n\u4f46\u662f\u5982\u679c\u4f7f\u7528\u6797\u4e1a\u5de5\u4f5c\u53f0\u5c31\u5bb9\u6613\u5f97\u591a.\u628a\u6240\u6709\u88c5\u6709\u725b\u5976\u6216\u8005\u6c34\u7684\u6876\u90fd\u653e\u8fdb\u5de5\u4f5c\u53f0\u7684\u7f13\u5b58\u533a,\u6309\u4f4fShift\u70b9\u51fb\u4e00\u4e0b\u5408\u6210\u8868,\u5c31\u53ef\u4ee5\u4e00\u6b21\u5168\u90e8\u5904\u7406\u5b8c\u6bd5\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD8g==",
                    "tooltip": "<strong>\u6de1\u6c34\u548c\u725b\u5976</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u714e\u9e21\u86cb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1088.png",
                    "x": 540.0,
                    "y": 300.0,
                    "data": "\u8d85\u7b80\u5355!\u7528\u5e73\u5e95\u9505\u6765\u714e\u9e21\u86cb!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEQA==",
                    "tooltip": "<strong>\u714e\u9e21\u86cb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53a8\u5177"
                },
                {
                    "name": "\u6c34\u679c\u8bf1\u9975",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/628.png",
                    "x": 540.0,
                    "y": 12.0,
                    "data": "\u4e3a\u4f60\u7684\u52a8\u7269\u9677\u9631\u5236\u4f5c\u4e00\u4e9b\u7f8e\u5473\u7684\u6c34\u679c\u8bf1\u9975.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACdA==",
                    "tooltip": "<strong>\u6c34\u679c\u8bf1\u9975</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52a8\u7269\u9677\u9631</br>\u6a61\u6811\u4e0d\u662f\u82f9\u679c\u6811"
                },
                {
                    "name": "\u8f6c\u57fa\u56e0\u4f5c\u7269",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2729.png",
                    "x": 156.0,
                    "y": 156.0,
                    "data": "\u6709\u4e09\u79cd\u673a\u5668\u4e3a\u8f6c\u57fa\u56e0\u670d\u52a1. \u4f60\u4e0d\u4ec5\u9700\u8981\u5927\u529f\u7387\u7684\u80fd\u6e90,\u8fd8\u9700\u8981\u6210\u5428\u7684UU-M.%n%n\u8fd9\u4e09\u79cd\u673a\u5668\u53ea\u80fd\u5904\u7406\u7279\u5b9a\u7b49\u7ea7\u4ee5\u4e0b\u7684\u4f5c\u7269. \u8fd9\u4e2a\u7b49\u7ea7\u8ba1\u7b97\u516c\u5f0f\u4e3a(\u4f5c\u7269\u7b49\u7ea7+2)/2,\u518d\u5411\u4e0a\u53d6\u6574. \u6240\u4ee5LV\u673a\u5668\u53ea\u80fd\u5904\u74061\u7ea7\u4f5c\u7269,\u800cMV\u673a\u5668\u5c31\u80fd\u5904\u74063\u7ea7\u4f5c\u7269. %n%nLV",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKqQ==",
                    "tooltip": "<strong>\u8f6c\u57fa\u56e0\u4f5c\u7269</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5</br>\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211"
                },
                {
                    "name": "\u70ed\u68c9\u82b1\u7cd6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1486.png",
                    "x": 528.0,
                    "y": 348.0,
                    "data": "\u4e0b\u4e00\u6b65\u662f\u5728\u5de5\u4e1a\u9ad8\u7089\u5185\u901a\u5165\u6c21\u6c14,\u4ee54500K\u7684\u7089\u6e29\u52a0\u70ed\u751f\u7cd6\u6d46,\u4f7f\u5176\u95ea\u95ea\u53d1\u5149.%n%n\u73b0\u5728,\u4f60\u53c8\u83b7\u5f97\u4e86\u9ebb\u75f9II\u6548\u679c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFzg==",
                    "tooltip": "<strong>\u70ed\u68c9\u82b1\u7cd6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u96be\u770b\u7684\u7cd6\u6d46"
                },
                {
                    "name": "\u8c37\u7269\u8bf1\u9975",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/627.png",
                    "x": 492.0,
                    "y": 60.0,
                    "data": "\u4e3a\u4f60\u7684\u52a8\u7269\u9677\u9631\u5236\u4f5c\u4e00\u4e9b\u826f\u597d\u7684\u8c37\u7269\u8bf1\u9975.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACcw==",
                    "tooltip": "<strong>\u8c37\u7269\u8bf1\u9975</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52a8\u7269\u9677\u9631</br>\u5c0f\u9ea6\u65f6\u523b"
                },
                {
                    "name": "\u8424\u77f31",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1806.png",
                    "x": 156.0,
                    "y": 348.0,
                    "data": "\u6709\u8bb8\u591a\u8424\u77f3\u4f5c\u7269-\u8f89\u5149\u82b1(glowflower),\u591c\u5149\u73ca\u745a(glowing-earth-coral),\u4ee5\u53ca\u8367\u5149\u8611\u83c7(glowshroom).  \u7528\u5730\u72f1\u75a3\u53ef\u4ee5\u6bd4\u8f83\u5bb9\u6613\u5730\u6742\u4ea4\u51fa\u8fd9\u4e9b\u4f5c\u7269.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHDg==",
                    "tooltip": "<strong>\u8424\u77f31</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u7247\u53c8\u4e00\u7247"
                },
                {
                    "name": "\u706b\u836f?\u66f4\u50cf\u571f\u7070!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1932.png",
                    "x": 300.0,
                    "y": 396.0,
                    "data": "\u722c\u884c\u8005\u4e4b\u8349(Creeperweed)\u53ef\u4e3a\u4f60\u63d0\u4f9b\u706b\u836f,\u4e0d\u9700\u8981\u62c5\u5fc3\u7206\u70b8.  \u5b83\u8fd8\u5f88\u591a\u7279\u6027(\u7528\u4e8e\u6742\u4ea4),\u662f\u4f18\u79c0\u7684\u7236\u672c\u6216\u6bcd\u672c.%n%n\u76ae\u9769\u85e4(Corium)\u53ef\u4ee5\u6bd4\u8f83\u5bb9\u6613\u5730\u6742\u4ea4\u51fa\u722c\u884c\u8005\u4e4b\u8349.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHjA==",
                    "tooltip": "<strong>\u706b\u836f?\u66f4\u50cf\u571f\u7070!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u7247\u53c8\u4e00\u7247"
                },
                {
                    "name": "\u4e30\u76db\u7684\u65e9\u9910",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1089.png",
                    "x": 492.0,
                    "y": 300.0,
                    "data": "\u73b0\u5728\u8ba9\u6211\u4eec\u5427\u6240\u6709\u7684\u4e1c\u897f\u653e\u5728\u4e00\u8d77,\u6765\u505a\u4e00\u987f\u4e30\u76db\u800c\u7f8e\u5473\u7684\u65e9\u9910.%n%n\u4e00\u4e9b\u70f9\u996a\u719f\u7684\u8089\u3001\u9a6c\u94c3\u85af\u86cb\u7cd5\u3001\u70e4\u9762\u5305\u3001\u714e\u9e21\u86cb\u548c\u7f8e\u5473\u7684\u679c\u6c41\u5c06\u4f1a\u8ba9\u4f60\u65e9\u9910\u5f88\u6709\u8425\u517b!%n%n\u5728\u8fd9\u91cc\u53ea\u80fd\u4f7f\u7528\u719f\u8089\u548c\u679c\u6c41.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEQQ==",
                    "tooltip": "<strong>\u4e30\u76db\u7684\u65e9\u9910</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u714e\u9e21\u86cb</br>\u7f8e\u5473\u70e4\u9762\u5305</br>\u679c\u6c41</br>\u9a6c\u94c3\u85af\u86cb\u7cd5"
                },
                {
                    "name": "\u8702\u871c\u7684\u7cd6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1283.png",
                    "x": 684.0,
                    "y": 60.0,
                    "data": "\u8702\u871c\u4e2d\u542b\u6709\u5927\u91cf\u7684\u7cd6,\u56e0\u6b64\u591a\u51c6\u5907\u4e00\u4e9b\u8702\u871c\u53ef\u80fd\u662f\u4e2a\u597d\u4e3b\u610f.%n%n\u53ea\u8981\u80cc\u5305\u4e2d\u6709\u5355\u5143\u6216\u8005\u6876\u88c5\u7684\u6d41\u4f53\u5c31\u53ef\u4ee5\u63d0\u4ea4\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFAw==",
                    "tooltip": "<strong>\u8702\u871c\u7684\u7cd6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9ec4\u8702\u8702\u871c"
                },
                {
                    "name": "\u5564\u9152\u82b1,\u5564\u9152\u7684\u6765\u6e90",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1288.png",
                    "x": 204.0,
                    "y": 108.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u8981\u4e00\u4e9b\u4f4e\u5ea6\u6570\u7684\u5564\u9152,\u90a3\u4e48\u4f60\u73b0\u5728\u9700\u8981\u6742\u4ea4\u51fa\u5564\u9152\u82b1\u6765\u917f\u9020\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFCA==",
                    "tooltip": "<strong>\u5564\u9152\u82b1,\u5564\u9152\u7684\u6765\u6e90</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5"
                },
                {
                    "name": "\u4e0d\u518d\u9965\u997f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/600.png",
                    "x": 492.0,
                    "y": 12.0,
                    "data": "\u9965\u997f\u95ee\u9898\u4e00\u76f4\u8ddf\u968f\u7740\u4f60,\u6d88\u8017\u4f60\u7684\u7cbe\u529b,\u4ece\u4e0d\u8ba9\u4f60\u4f11\u606f.\u8fd9\u4e16\u754c\u5145\u6ee1\u5404\u79cd\u8425\u517b\u7684\u6c34\u679c\u3001\u852c\u83dc\u3001\u9910\u70b9.\u9760\u8fd9\u4e9b\u89e3\u51b3\u4f60\u6c38\u4e0d\u6ee1\u8db3\u7684\u9965\u6e34\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACWA==",
                    "tooltip": "<strong>\u4e0d\u518d\u9965\u997f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u597d\u7d2f...\u5fc5\u987b...\u7761\u89c9..."
                },
                {
                    "name": "\u6211\u559c\u6b22\u5927\u4e09\u660e\u6cbb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1855.png",
                    "x": 492.0,
                    "y": 156.0,
                    "data": "\u73b0\u5728\u4f60\u6709\u4e86\u9762\u56e2,\u6709\u591a\u79cd\u5927\u4e09\u660e\u6cbb\u53ef\u4f9b\u9009\u62e9.\u5b83\u4eec\u80fd\u63d0\u4f9b\u5927\u91cf\u7684\u9971\u98df\u5ea6\u800c\u4e14\u5236\u4f5c\u7b80\u5355.%n%n\u852c\u83dc\u548c\u5976\u916a\u4e09\u660e\u6cbb\u5236\u4f5c\u5de5\u5e8f\u8f83\u591a,\u4e0d\u662f\u597d\u7684\u9009\u62e9.%n%n\u5982\u679c\u4f60\u9700\u8981\u66f4\u591a\u7684\u996e\u98df\u9009\u62e9,\u8fd9\u4e9b\u4e09\u660e\u6cbb\u4e5f\u6709\u6b63\u5e38\u5c3a\u5bf8\u7684\u79cd\u7c7b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHPw==",
                    "tooltip": "<strong>\u6211\u559c\u6b22\u5927\u4e09\u660e\u6cbb</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u751f\u9762\u56e2"
                },
                {
                    "name": "\u94c1\u6728\u6bd4\u666e\u901a\u6728\u6750\u597d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1930.png",
                    "x": 348.0,
                    "y": 348.0,
                    "data": "\u83b7\u5f97\u94a2\u53f6\u85e4(steeleafranks)\u7684\u5fc5\u8981\u6b65\u9aa4?\u6216\u8bb8\u4e0d\u662f.\u4f46\u662f\u94c1\u6728\u662f\u4e00\u79cd\u4f18\u79c0\u7684\u6728\u6750,\u53ef\u4ee5\u5236\u4f5c\u4e00\u67c4\u65e0\u6bd4\u8010\u7528\u7684\u64c0\u9762\u6756,\u6216\u662f\u5408\u9002\u7684\u9570\u5200.%n%n\u722c\u884c\u8005\u4e4b\u8349(Creeperweed)\u6709\u8f83\u9ad8\u51e0\u7387\u6742\u4ea4\u51fa\u6d3b\u6839(liveroot).%n%n\u8bd1\u8005\u6ce8:\u4f60\u4e00\u5b9a\u4e0d\u80fd\u9519\u8fc7\u94c1\u6728\u505a\u7684\u8f6f\u9524,\u6015\u662f\u80fd\u7528\u4e00\u8f88\u5b50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHig==",
                    "tooltip": "<strong>\u94c1\u6728\u6bd4\u666e\u901a\u6728\u6750\u597d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u7247\u53c8\u4e00\u7247"
                },
                {
                    "name": "\u679c\u6c41",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1086.png",
                    "x": 444.0,
                    "y": 300.0,
                    "data": "\u5927\u90e8\u5206\u7684\u6c34\u679c\u90fd\u53ef\u4ee5\u69a8\u6210\u679c\u6c41. \u8fd9\u662f\u4e00\u4e2a\u83b7\u5f97\u66f4\u591a\u98df\u7269\u79cd\u7c7b\u7684\u65b9\u6cd5,\u5e76\u4e14\u679c\u6c41\u6bd4\u76f4\u63a5\u5403\u6c34\u679c\u7684\u8425\u517b\u4ef7\u503c\u8981\u9ad8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEPg==",
                    "tooltip": "<strong>\u679c\u6c41</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8f6f\u9524\u5927\u5192\u9669!"
                },
                {
                    "name": "\u8def\u8fc7\u65f6\u6321\u597d\u4f60\u7684\u79c1\u5904,\u5c0f\u5fc3\u8f90\u5c04",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1929.png",
                    "x": 60.0,
                    "y": 348.0,
                    "data": "\u6838\u80fd\u8349\u4f1a\u6389\u843d\u6838\u80fd\u53f6\u5b50,\u53ef\u5c06\u6676\u8d28\u94c0\u77ff\u77f3\u589e\u4ea7\u52304\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHiQ==",
                    "tooltip": "<strong>\u8def\u8fc7\u65f6\u6321\u597d\u4f60\u7684\u79c1\u5904,\u5c0f\u5fc3\u8f90\u5c04</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u72ec\u773c\u5965\u4e01\u4e4b\u5b50"
                },
                {
                    "name": "\u5c31\u50cf\u5988\u5988\u4ee5\u524d\u505a\u7684",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1854.png",
                    "x": 492.0,
                    "y": 204.0,
                    "data": "\u679c\u9171\u4e09\u660e\u6cbb\u662f\u4e00\u79cd\u5f88\u597d\u7684\u98df\u7269\u6765\u6e90,\u63d0\u4f9b\u4e0d\u9519\u7684\u9971\u98df\u5ea6,\u4e14\u5bb9\u6613\u5236\u4f5c.  \u51e0\u4e4e\u6240\u6709\u7684\u6c34\u679c\u90fd\u53ef\u4ee5\u7528\u7096\u9505\u52a0\u7cd6\u5236\u6210\u679c\u9171.\u6709\u51e0\u79cd\u4e0d\u540c\u7684\u575a\u679c\u5976\u6cb9\u53ef\u4f9b\u9009\u62e9.\u82b1\u751f\u53ef\u5728\u68ee\u6797\u3001\u5c71\u5ce6\u6216\u51b0\u539f\u751f\u7269\u7fa4\u7cfb\u4e2d\u7684\u9646\u5730\u83dc\u56ed\u627e\u5230.  \u8170\u679c\u53ef\u5728\u4e1b\u6797\u6216\u8005\u6cbc\u6cfd\u7684\u6811\u4e0a\u627e\u5230. \u677f\u6817\u53ef\u5728\u66f4\u6e29\u6696\u7684\u68ee\u6797\u91cc\u627e\u5230. \u5f00\u5fc3\u679c\u6811\u5728\u4e1b\u6797\u91cc.\u8bb8\u591a\u8fd9\u4e9b\u6811\u82d7\u90fd\u53ef\u4e0e\u6751\u6c11\u4ea4\u6613\u83b7\u5f97.%n%n\u7528\u6797\u4e1a\u5de5\u4f5c\u53f0\u5236\u4f5c\u4e09\u660e\u6cbb,\u8fd9\u6837\u53ef\u4ee5\u4fdd\u5b58\u914d\u65b9,\u8ba9\u5236\u4f5c\u66f4\u65b9\u4fbf.%n%n\u6709\u4e9b\u4e09\u660e\u6cbb\u63d0\u4f9b\u66f4\u591a\u7684\u9971\u98df\u5ea6,\u6240\u4ee5\u5728\u8d2d\u4e70\u524d\u8bf7\u5148\u67e5\u770bNEI!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHPg==",
                    "tooltip": "<strong>\u5c31\u50cf\u5988\u5988\u4ee5\u524d\u505a\u7684</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53a8\u5177</br>\u7b2c\u4e00\u4e2a\u624b\u4f5c\u9762\u5305"
                },
                {
                    "name": "\u53a8\u5177",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/665.png",
                    "x": 540.0,
                    "y": 252.0,
                    "data": "\u4e3a\u4e86\u70f9\u8c03\u5065\u5eb7\u7684\u98df\u7269,\u4f60\u9700\u8981\u5148\u5236\u505a\u4e00\u4e9b\u5de5\u5177.\u7096\u9505,\u7f50,\u6496\u9762\u6756,\u7814\u94b5,\u6405\u62cc\u94b5,\u8f6f\u9524,\u5e73\u5e95\u9505,\u5200.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACmQ==",
                    "tooltip": "<strong>\u53a8\u5177</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u53a8\u51772.0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1836.png",
                    "x": 588.0,
                    "y": 252.0,
                    "data": "\u5c0f\u5200\u8fd9\u6837\u7684GT\u5de5\u5177\u5728\u5904\u7406\u98df\u7269\u65f6\u7528\u5b8c\u4e86?\u6f58\u9a6c\u65af\u7684\u5de5\u5177(\u7827\u677f\u3001\u69a8\u6c41\u673a\u3001\u70e4\u76d8)\u53ef\u4ee5\u6c38\u8fdc\u4f7f\u7528.%n%n\u5f53\u4f60\u80fd\u70e7\u5236\u4e0d\u9508\u94a2,\u5230\u8fbe\u9ad8\u538b\u540e,\u4f60\u5c31\u80fd\u5236\u4f5c\u8fd9\u4e9b\u5de5\u5177\u4e86,\u57fa\u672c\u6c38\u8fdc\u90fd\u4e0d\u4f1a\u574f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHLA==",
                    "tooltip": "<strong>\u53a8\u51772.0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089</br>\u53a8\u5177"
                },
                {
                    "name": "Korn and Doppelkorn(\u79d1\u6069\u9152\u548c\u7ecf\u8fc7\u4e24\u6b21\u84b8\u998f\u7684\u79d1\u6069\u9152)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1276.png",
                    "x": 588.0,
                    "y": 108.0,
                    "data": "Korn\u662f\u5fb7\u56fd\u7684\u5c0f\u9ea6,\u6240\u4ee5\u8fd9\u5c31\u662f\u8fd9\u79cd\u9152\u53ebKorn\u7684\u539f\u56e0. Doppelkorn(\u53cc\u84b8)\u610f\u5473\u7740\u66f4\u591a\u84b8\u998f,\u66f4\u9ad8\u7684\u9152\u7cbe\u542b\u91cf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE_A==",
                    "tooltip": "<strong>Korn and Doppelkorn(\u79d1\u6069\u9152\u548c\u7ecf\u8fc7\u4e24\u6b21\u84b8\u998f\u7684\u79d1\u6069\u9152)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u77f3\u6cb9\u63d0\u7eaf</br>\u5c0f\u9ea6\u6c41"
                },
                {
                    "name": "\u94a2\u53f62",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1807.png",
                    "x": 396.0,
                    "y": 348.0,
                    "data": "\u4e0d\u5fc5\u628a\u66ae\u8272\u68ee\u6797\u7ffb\u4e2a\u5e95\u671d\u5929\u6765\u5bfb\u627e\u94a2\u53f6,\u4f60\u53ea\u9700\u79cd\u7530\u5c31\u884c\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHDw==",
                    "tooltip": "<strong>\u94a2\u53f62</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c1\u6728\u6bd4\u666e\u901a\u6728\u6750\u597d"
                },
                {
                    "name": "\u9b54\u6cd5\u91d1\u5c5e\u8393(Magic Metal Berry)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1803.png",
                    "x": 300.0,
                    "y": 300.0,
                    "data": "..\u8fd9\u663e\u7136\u662f\u6211\u4e50\u961f\u7684\u540d\u5b57.\u4f46\u8fd9\u4e5f\u662f\u4e00\u79cd\u53ef\u4ee5\u751f\u4ea7\u795e\u79d8\u952d\u6216\u8005\u865a\u7a7a\u91d1\u5c5e\u7684\u5f3a\u5927\u4f5c\u7269.\u5728\u5176\u4e0b\u65b9\u653e\u7f6e\u94c1\u5757\u6216\u795e\u79d8\u952d\u5757\u53ef\u4ee5\u4f7f\u5176\u751f\u4ea7\u795e\u79d8\u952d,\u82e5\u662f\u5728\u5176\u4e0b\u65b9\u653e\u7f6e\u865a\u7a7a\u91d1\u5c5e\u5757,\u90a3\u4e48\u5b83\u5c31\u4f1a\u751f\u4ea7\u865a\u7a7a\u91d1\u5c5e.  \u4e0e\u5176\u4ed6\u77ff\u7269\u8393\u7c7b\u4f3c,\u5b83\u5fc5\u987b\u5728\u8f83\u4f4e\u7684\u5149\u7167\u7b49\u7ea7\u4e0b\u624d\u80fd\u751f\u957f.\u4efb\u4f55\u77ff\u7269\u8393\u90fd\u6709\u4e0d\u9519\u7684\u6982\u7387\u6742\u4ea4\u51fa\u9b54\u6cd5\u91d1\u5c5e\u8393.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHCw==",
                    "tooltip": "<strong>\u9b54\u6cd5\u91d1\u5c5e\u8393(Magic Metal Berry)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u7247\u53c8\u4e00\u7247"
                },
                {
                    "name": "\u6765\u81ea\u5927\u5730\u7684\u91d1\u5c5e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1601.png",
                    "x": 300.0,
                    "y": 204.0,
                    "data": "\u968f\u7740\u66f4\u9ad8\u7b49\u7ea7\u7684\u4f5c\u7269\u6742\u4ea4\u6210\u529f,\u4f60\u751a\u81f3\u53ef\u4ee5\u589e\u52a0\u77ff\u77f3\u4ea7\u91cf. \u5c06\u67d0\u4e9b\u7ea4\u7ef4\u548c\u6811\u53f6\u4e0e\u7c89\u788e\u7684\u77ff\u77f3\u6405\u62cc,\u53ef\u4f7f\u4f60\u7684\u77ff\u77f3\u4ea7\u91cf\u7ffb\u4e24\u756a(4\u500d),\u6216\u8005\u4f60\u53ef\u4ee5\u5c06\u5b83\u4eec\u76f4\u63a5\u8f6c\u5316\u4e3a\u5c0f\u64ae\u7c89. \u4f60\u4e5f\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u6750\u6599\u4e0eUU\u7269\u8d28\u6405\u62cc\u5728\u4e00\u8d77,\u76f4\u63a5\u5236\u6210\u6d17\u51c0\u7684\u7c89\u788e\u77ff.%n%n\u8bc1\u660e\u4f60\u83b7\u5f97\u8fd9\u4e9b\u91d1\u5c5e\u4f5c\u7269\u7684\u80fd\u529b,\u6211\u4f1a\u518d\u7ed9\u4f60\u4e00\u4e9b\u80a5\u6599\u4ee5\u53ca\u4e00\u4e9b\u5c5e\u6027\u4e0d\u9519\u7684\u7a00\u6709\u79cd\u5b50\u888b.\u4f18\u8d28\u6e90\u4f5c\u7269\u662f\u7cbe\u534e\u8393(essence-berry)\u6216\u522b\u7684\u77ff\u8393.%n%n\u4f60\u9700\u8981\u5c06\u5408\u9002\u7684\u77ff\u77f3\u65b9\u5757\u653e\u5728\u4f5c\u7269\u4e0b\u65b9\u624d\u80fd\u4f7f\u5176\u5b8c\u5168\u957f\u6210.\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u7684\u751f\u957f\u6761\u4ef6,\u5728\u77ff\u7269\u65b9\u5757\u548c\u4f5c\u7269\u4e4b\u95f4\u653e\u6700\u591a3\u5757\u6ce5\u571f.%n%n\u5bf9\u4e8e\u94c1\u53f6\u8349\u6216\u8005\u91d1\u53f6\u8349,\u4f60\u9700\u8981\u4f7f\u7528\u91d1\u5c5e\u5757\u800c\u4e0d\u662fGT\u77ff\u77f3\u65b9\u5757-\u539f\u7248\u77ff\u77f3\u5757\u53ef\u4ee5\u5728\u66ae\u8272\u68ee\u6797\u7684\u5730\u7cbe\u77ff\u6d1e\u4e2d\u627e\u5230.\u5f53\u7136\u5728\u786c\u5e01\u4efb\u52a1\u680f\u4f60\u53ef\u4ee5\u4e70\u5230\u8fd9\u7c7b\u77ff\u77f3.WAILA\u5c06\u4f1a\u544a\u8bc9\u4f60\u4f5c\u7269\u662f\u5426\u63a5\u53d7\u4f60\u653e\u7684\u65b9\u5757.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGQQ==",
                    "tooltip": "<strong>\u6765\u81ea\u5927\u5730\u7684\u91d1\u5c5e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7518\u8517\u548c\u6811\u8102"
                },
                {
                    "name": "\u5929\u5916\u91d1\u5c5e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1795.png",
                    "x": 348.0,
                    "y": 204.0,
                    "data": "\u4f60\u751a\u81f3\u53ef\u4ee5\u7528\u4f5c\u7269\u521b\u9020\u51fa\u5730\u8868\u4e0d\u5b58\u5728\u7684\u91d1\u5c5e!  \u5f53\u7136,\u4f60\u9700\u8981\u5c06\u5408\u9002\u7684\u91d1\u5c5e\u65b9\u5757\u7f6e\u4e8e\u4f5c\u7269\u4e4b\u4e0b,\u624d\u80fd\u4f7f\u5176\u5b8c\u5168\u6210\u719f.%n%n\u53e6\u5916,\u9ad8\u9636\u4f5c\u7269\u6389\u843d\u79cd\u5b50\u7684\u51e0\u7387\u66f4\u4f4e,\u6240\u4ee5\u5728\u5c1d\u8bd5\u5de6\u952e\u83b7\u53d6\u79cd\u5b50\u888b\u4e4b\u524d,\u6700\u597d\u518d\u7e41\u6b96\u4e00\u682a\u4fdd\u9669...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHAw==",
                    "tooltip": "<strong>\u5929\u5916\u91d1\u5c5e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6765\u81ea\u5927\u5730\u7684\u91d1\u5c5e"
                },
                {
                    "name": "\u5927\u5730\u6bcd\u4eb2\u7684\u4e73\u6c41",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1933.png",
                    "x": 108.0,
                    "y": 204.0,
                    "data": "\u725b\u5976\u75a3(Milkwart)\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u628a\u4f60\u7684\u725b\u7fa4\u6254\u4e86.\u8fd9\u5f88\u68d2,\u4e0d\u662f\u4e48?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHjQ==",
                    "tooltip": "<strong>\u5927\u5730\u6bcd\u4eb2\u7684\u4e73\u6c41</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7d20\u98df\u76ae\u9769?"
                },
                {
                    "name": "\u6700\u9002\u4f5c\u7269/\u6700\u5f3a\u4f5c\u7269",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2770.png",
                    "x": 108.0,
                    "y": 156.0,
                    "data": "\u5c06\u7c98\u6027\u7518\u8517(stickreed)\u57f9\u80b2\u523020/31/10(\u8bd1\u8005\u6ce8:\u5176\u5b9e\u6781\u9650\u662f21/31/0),\u7136\u540e\u7528\u5b83\u6765\u6742\u4ea4\u51fa\u5176\u4ed6\u4f5c\u7269,\u65b0\u4f5c\u7269\u5373\u53ef\u7ee7\u627f\u4e09\u56f4\u5c5e\u6027.\u5f53\u7136\u8fd9\u6837\u7684\u7c98\u6027\u7518\u8517\u8fd8\u53ef\u4ee5\u4e0e\u9700\u8981\u63d0\u9ad8\u81ea\u8eab\u4e09\u56f4\u7684\u5176\u4ed6\u4f5c\u7269\u6742\u4ea4.%n%n\u5728\u6cbc\u6cfd/\u96e8\u6797\u751f\u7269\u7fa4\u7cfb,\u9ad8\u5ea6130\u683c\u5de6\u53f3\u5efa\u7acb\u519c\u573a,\u6216\u662f\u7528\u5404\u79cd\u6539\u53d8\u751f\u7269\u7fa4\u7cfb\u7684\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c.\u8fd9\u6837\u4e0d\u6b62\u53ef\u4ee5\u8ba9\u4f5c\u7269\u5feb\u901f\u751f\u957f\u83b7\u5f97\u4ea7\u7269,\u8fd8\u53ef\u4ee5\u5feb\u901f\u57f9\u80b2\u4f5c\u7269.%n%n\u63a8\u8350\u4f7f\u7528\u591a\u65b9\u5757\u519c\u573a(\u6797\u4e1a).\u5982\u679c\u4f60\u7684\u4f5c\u7269\u957f\u5f97\u98de\u5feb,\u53ef\u540c\u65f6\u518d\u52a0\u4e0a\u4f5c\u7269\u6536\u5272\u673a.\u6216\u662f\u6dfb\u52a0\u66f4\u591a\u9f7f\u8f6e\u7bb1.%n%n\u6df1\u8272\u73bb\u7483\u5f88\u9002\u5408\u77ff\u8393\u7c7b\u4f5c\u7269.%n%n\u4e3a\u4e86\u907f\u514d\u6742\u8349\u6210\u707e,\u5c06\u6797\u4e1a\u519c\u573a\u642d\u5efa\u6210\u4e0a\u4e0b\u9519\u4f4d\u7684\u68cb\u76d8\u683c\u5427.\u867d\u7136\u8fd9\u6837\u770b\u8d77\u6765\u5f88\u50bb...\u6210\u957f\u503c\u4e0a\u9650\u53ef\u4ece23\u63d0\u5347\u523031,\u8fd8\u80fd\u83b7\u5f972\u70b9\u7a7a\u6c14\u8d28\u91cf\u503c\u52a0\u6210!%n%n\u80a5\u6599\u82b1(fertilia)\u53ef\u4ee5\u4ea7\u51fa\u66f4\u591a\u80a5\u6599.%n%n\u5982\u679c\u5ffd\u7565\u602a\u7269\u7684\u5176\u4ed6\u6389\u843d\u7269\u7684\u8bdd,\u7528\u519c\u573a\u4ee3\u66ff\u602a\u7269\u5c60\u5bb0\u573a\u662f\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f.\u867d\u8bf4\u7cbe\u82f1\u602a\u4f1a\u6389\u843d\u4e00\u4e9b\u7279\u6b8a\u7269\u54c1.%n%n\u5982\u679c\u9700\u8981\u7684\u8bdd,\u53ef\u4f7f\u7528\u5b9e\u4f53\u65b9\u5757(TE)\u6a21\u5f0f\u7684\u4e16\u754c\u52a0\u901f\u5668\u52a0\u901f\u4f5c\u7269\u751f\u957f.\u4e3b\u8981\u7528\u4e8e\u52a0\u901f\u6742\u4ea4\u57f9\u80b2,\u521d\u59cb\u751f\u957f,\u4ee5\u53ca\u4e13\u4f9b\u5143\u59cb\u6d46\u679c\u4f5c\u7269(primordial-berry).%n%n\u968f\u7740\u4f60\u7684\u7535\u538b\u7b49\u7ea7\u4e0d\u65ad\u63d0\u5347,\u4f60\u53ef\u4ee5\u7528UU-M\u914d\u5408\u673a\u5668\u76f4\u63a5\u5236\u51fa31/31/0\u7684\u4f5c\u7269.\u8fd9\u662f\u5426\u503c\u5f97\u53d6\u51b3\u4e8e\u4f60.%n%n\u5982\u679c\u60f3\u8981\u83b7\u5f97EV\u4ee5\u4e0a\u7684\u6750\u6599,\u4f60\u5f97\u8003\u8651\u8003\u8651\u517b\u8702\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK0g==",
                    "tooltip": "<strong>\u6700\u9002\u4f5c\u7269/\u6700\u5f3a\u4f5c\u7269</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8f6c\u57fa\u56e0\u4f5c\u7269"
                },
                {
                    "name": "More Red,less Wheat(\u66f4\u591a\u7684\u7ea2\u8272,\u66f4\u5c11\u7684\u5c0f\u9ea6)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1737.png",
                    "x": 204.0,
                    "y": 156.0,
                    "data": "\u5f53\u5c06\u4f5c\u7269\u6742\u4ea4\u4ee5\u83b7\u53d6\u4ea7\u51fa\u4f5c\u7269\u65f6,\u5c1d\u8bd5\u4f7f\u7528\u4e0e\u4ea7\u51fa\u4f5c\u7269\u7b49\u7ea7\u63a5\u8fd1\u3001\u5e76\u4e14\u5177\u6709\u76f8\u4f3c\u5c5e\u6027\u7684\u4f5c\u7269.%n%n\u4f8b\u5982,Redwheat(\u7ea2\u9ea6)\u5177\u6709\"\u7ea2\u8272\",\"\u5c0f\u9ea6\"\u548c\"\u7ea2\u77f3\"\u5c5e\u6027\u5e76\u4e14\u662f\u7b2c6\u9636\u4f5c\u7269.\u800cNetherwart(\u5730\u72f1\u75a3)\u5177\u6709\"\u7ea2\u8272\"\u5e76\u4e14\u662f\u7b2c5\u9636. \u4f7f\u7528\u4f5c\u7269\u5206\u6790\u4eea\u7684\u4f5c\u7269\u8ba1\u7b97\u5668\u6a21\u5f0f\u67e5\u770b\u7528\u4e24\u4e2a\u5730\u72f1\u75a3\u6742\u4ea4\u51fa\u7ea2\u9ea6\u7684\u51e0\u7387.%n%n\u4f60\u8fd8\u9700\u8981\u786e\u4fdd\u5149\u7167\u6c34\u5e73\u57285-10\u4e4b\u95f4,\u4ee5\u4fbf\u8fdb\u884c\u8fd9\u79cd\u7279\u5b9a\u7684\u6742\u4ea4\u80b2\u79cd.%n%n\u5176\u5b9e\u5427,\u5230\u4e86MV\u4e4b\u540e,\u4f60\u5c31\u80fd\u7528\u8424\u77f3\u4f5c\u7269(\u79cd\u690d\u8367\u5149\u79cd\u5b50)\u4ea7\u51fa\u7684\u8424\u77f3\u79bb\u5fc3\u51fa\u7ea2\u77f3\u4e86.\u8fd8\u6709\u7ea2\u77f3\u5757\u4f5c\u7269(\u79cd\u690d\u7ea2\u77f3\u74dc\u79cd\u5b50).\u751a\u81f3\u76f4\u63a5\u6316\u6398\u90fd\u884c.\u7ea2\u9ea6\u8fd9\u4e48\u9ebb\u70e6\u7684\u4f5c\u7269,\u8fd8\u662f\u4e00\u8fb9\u5f85\u7740\u53bb\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGyQ==",
                    "tooltip": "<strong>More Red,less Wheat(\u66f4\u591a\u7684\u7ea2\u8272,\u66f4\u5c11\u7684\u5c0f\u9ea6)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5564\u9152\u82b1,\u5564\u9152\u7684\u6765\u6e90"
                },
                {
                    "name": "\u519c\u573a\"\u667a\u8005\"\u624b\u518c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/718.png",
                    "x": 60.0,
                    "y": 60.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u77e5\u9053\u5982\u4f55\u79cd\u690d\u4f5c\u7269,\u4f60\u770b\u8fd9\u9875\u5c31\u5bf9\u4e86!\u62ff\u8d77\u9504\u5934\u548c\u9e64\u5634\u9504\u53d6\u5f97\u4e00\u4e9b\u4f5c\u7269(\u6216\u4f5c\u7269\u67b6)\u548c\u79cd\u5b50.\u4f60\u4e5f\u53ef\u4ee5\u628a\u4e00\u4e9b\u690d\u7269\u548c\u6d46\u679c\u76f4\u63a5\u653e\u5728\u4f5c\u7269\u67b6\u4e0a.\u6700\u597d\u7684\u521d\u59cb\u690d\u7269\u662f\u82b1\u3001\u5c0f\u9ea6\u3001\u4ed9\u4eba\u638c\u548c\u7518\u8517.%n%n\u63a5\u7740\u4f7f\u7528\u4f60\u7684\u5de5\u5177\u8015\u5757\u7530,\u786e\u4fdd\u8fd9\u5757\u7530\u9762\u79ef\u591f\u5927\u5e76\u4e14\u5149\u7ebf\u5145\u8db3,\u5e76\u5728\u7530\u4e2d\u592e\u653e\u4e0a\u6c34\u6e90. \u5efa\u8bae\u5f00\u57a6\u8bb8\u591a3x1\u5927\u5c0f\u7684\u7530\u4e14\u76f8\u4e92\u4e4b\u95f4\u9694\u79bb,\u5982\u4e0b\u6240\u793a:%n\u7530\u7530\u7530\u571f\u571f\u571f\u7530\u7530\u7530%n\u571f\u571f\u571f\u7530\u7530\u7530\u571f\u571f\u571f%n\u7530\u7530\u7530\u571f\u571f\u571f\u7530\u7530\u7530%n\u571f\u571f\u571f\u7530\u7530\u7530\u571f\u571f\u571f%n\u7530\u7530\u7530\u571f\u6c34\u571f\u7530\u7530\u7530%n\u571f\u571f\u571f\u7530\u7530\u7530\u571f\u571f\u571f%n\u7530\u7530\u7530\u571f\u571f\u571f\u7530\u7530\u7530%n\u571f\u571f\u571f\u7530\u7530\u7530\u571f\u571f\u571f%n\u7530\u7530\u7530\u571f\u571f\u571f\u7530\u7530\u7530%n\u571f\u571f\u571f\u7530\u7530\u7530\u571f\u571f\u571f%n\u73b0\u5728\u5c06\u4f5c\u7269\u67b6\u653e\u5728\u7530\u7684\u4e24\u7aef,\u63a5\u7740\u653e\u4e9b\u79cd\u5b50\u5230\u4f5c\u7269\u67b6\u4e0a,\u7136\u540e\u7b49\u4e00\u4f1a.%n%n\u7b49\u4f5c\u7269\u67b6\u4e0a\u7684\u4f5c\u7269\u5b8c\u5168\u6210\u719f\u540e,\u4f60\u53ef\u4ee5\u8bd5\u8bd5\u5229\u7528\u53cc\u91cd\u4f5c\u7269\u67b6(\u6742\u4ea4\u67b6)\u2014\u2014\u5728\u6210\u719f\u4f5c\u7269\u65c1\u7684\u7a7a\u4f5c\u7269\u67b6,\u518d\u63d2\u4e0a\u4e00\u6b21\u4f5c\u7269\u67b6.%n%n\u5982\u679c\u4f60\u8fd0\u6c14\u591f\u597d,\u4f60\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e9b\u5c06\u6765\u53ef\u4ee5\u88ab\u626b\u63cf\u7684\u65b0\u578b\u672a\u77e5\u79cd\u5b50.%n%n\u8bb0\u5f97,\u4f7f\u7528\u4f60\u7684\u94f2\u5b50\u628a\u4f5c\u7269\u67b6\u4e0a\u7684\u6742\u8349\u5904\u7406\u6389,\u5426\u5219\u5b83\u4eec\u4f1a\u56db\u5904\u957f\u6ee1\u4f60\u7684\u7530\u5730.%n%n\u4f7f\u75283x1\u5927\u5c0f\u7684\u7530\u53ef\u4ee5\u964d\u4f4e\u4f60\u7684\u5de5\u4f5c\u91cf.\u6bcf5-10\u5206\u949f\u68c0\u67e5\u4e00\u6b21,\u6e05\u9664\u6742\u8349,\u6536\u96c6\u65b0\u79cd\u5b50.\u5373\u4f7f\u4f60\u5fd8\u8bb0\u4e86,\u4e5f\u53ea\u4f1a\u635f\u5931\u4e00\u4e24\u9897\u79cd\u5b50.%n%n\u5982\u679c\u4f60\u6742\u4ea4\u51fa\u4e86\u67d0\u4e9b\u7a00\u6709\u79cd\u5b50,\u53ef\u4ee5\u53e6\u5916\u5f00\u8f9f3x3\u62165x5\u7684\u7530\u5730,\u5728\u7a00\u6709\u79cd\u5b50\u65c1\u8fb9\u653e\u4e0a\u4e09\u56f4\u8f83\u9ad8\u7684\u79cd\u5b50,\u6742\u4ea4\u6539\u826f\u5b83\u7684\u5c5e\u6027.\u4f46\u4f60\u5f97\u66f4\u52a0\u7559\u5fc3,\u56e0\u4e3a\u8fd9\u6837\u4e00\u65e6\u957f\u6742\u8349\u5c31\u53ef\u80fd\u4f1a\u6bc1\u4e86\u6574\u5757\u80b2\u79cd\u7530.%n%n\u8bf7\u6ce8\u610f,\u6742\u4ea4\u67b6\u8fb9\u7684\u4f5c\u7269\u8d8a\u591a,\u65b0\u4f5c\u7269\u5c31\u8d8a\u5bb9\u6613\u957f\u51fa\u6765,\u663e\u7136\u4f5c\u7269\u6570\u4e0a\u9650\u4e3a4.\u540c\u65f6\u8fd9\u4e5f\u662f\u7e41\u6b96\u540c\u79cd\u4f5c\u7269\u7684\u65b9\u6cd5,IC2\u4e0d\u50cf\u519c\u4e1a\u5de5\u827a(Agricraft)\u53ea\u9700\u901a\u8fc7\u526a\u679d\u5373\u53ef\u5feb\u901f\u7e41\u6b96.%n%n\u82e5\u662f\u6742\u4ea4\u4ea7\u751f\u4e86\u65b0\u4f5c\u7269,\u522b\u628a\u5b83\u7559\u5728\u7530\u91cc,\u5de6\u952e\u4f5c\u7269\u67b6\u5c06\u5176\u62d4\u51fa,\u8fd0\u6c14\u597d\u7684\u8bdd\u80fd\u83b7\u5f97\u79cd\u5b50\u888b.\u57283x1\u7684\u79cd\u5b50\u751f\u4ea7\u7530\u79cd\u690d\u4e09\u56f4\u8f83\u4f4e\u7684\u4f5c\u7269.\u7559\u4e0b\u9ad8\u4e09\u56f4\u7684\u4f5c\u7269\u79cd\u5b50,\u4ee5\u5907\u8fdb\u4e00\u6b65\u6742\u4ea4.%n%n\u4f60\u670990\uff05\u7684\u51e0\u7387\u83b7\u5f97\u4e0e\u7236\u672c\u6bcd\u672c\u76f8\u540c\u7684\u4f5c\u7269,\u4f59\u4e0b\u4e2a\u4f4d\u6570\u7684\u51e0\u7387,\u4f5c\u7269\u53ef\u80fd\u53d1\u751f\u7a81\u53d8,\u4ea7\u751f\u65b0\u7684\u4f5c\u7269.\u53c2\u8003IC2\u4f5c\u7269\u5206\u6790\u4eea\u4efb\u52a1\u83b7\u77e5\u66f4\u591a\u7ec6\u8282.%n\u8bd1\u8005\u6ce8:\u6297\u6027\u8fc7\u9ad8\u4f1a\u964d\u4f4e\u6742\u4ea4\u51e0\u7387,\u53ef\u4ee5\u4f7f\u7528\u751f\u957f\u8f83\u5feb\u7684\u4f5c\u7269\u81ea\u4ea4\u57f9\u80b2\u51fa\u4e09\u56f4\u8f83\u9ad8\u7684\u4f5c\u7269,\u5982\u7c98\u6027\u7518\u8517,\u7136\u540e\u5c06\u4f7f\u7528\u4f4e\u4e09\u56f4\u4f5c\u7269\u6742\u4ea4\u51fa\u7684\u7a00\u6709\u79cd\u5b50\u4e0e\u9ad8\u4e09\u56f4\u4f5c\u7269\u6742\u4ea4,\u6539\u826f\u7a00\u6709\u79cd\u5b50\u7684\u5c5e\u6027.%n\u8bd1\u8005\u518d\u6ce8:\u4e0d\u8981\u65e0\u9650\u63d0\u5347\u4f5c\u7269\u7684\u751f\u957f\u5c5e\u6027,\u5f53\u751f\u957f\u503c\u5927\u4e8e\u7b49\u4e8e24\u65f6,\u4f5c\u7269\u5c06\u83b7\u5f97\u7c7b\u4f3c\u6742\u8349\u7684\u5c5e\u6027,\u75af\u72c2\u5730\u4f7f\u4e34\u8fd1\u7a7a\u4f5c\u7269\u67b6\u6ecb\u751f\u6742\u8349,\u76f8\u4fe1\u6211,\u8fd9\u4f1a\u662f\u4e00\u573a\u707e\u96be.\u6240\u4ee5\u8bb2\u751f\u957f\u5c5e\u6027\u63a7\u5236\u572821\u6216\u4ee5\u4e0b,\u81f3\u4e8e\u4e3a\u4ec0\u4e48,\u6d89\u53ca\u5230\u6742\u4ea4\u673a\u5236\u95ee\u9898,\u8fd9\u91cc\u592a\u5c0f\u5199\u4e0d\u4e0b,\u7b80\u800c\u8a00\u4e4b,\u4e24\u4e2a21\u5c5e\u6027\u7684\u4f5c\u7269\u6742\u4ea4\u4ea7\u751f\u7684\u65b0\u4f5c\u7269\u751f\u957f\u5c5e\u6027\u4e0d\u4f1a\u8d85\u8fc723.\u6536\u83b7\u5c5e\u6027\u53ef\u4ee5\u5806\u5230\u6700\u9ad831,\u81f3\u4e8e\u6297\u6027,\u6211\u81f3\u4eca\u6ca1\u53d1\u73b0\u5b83\u6709\u5565\u7528,\u8be5\u957f\u6742\u8349\u7167\u6837\u957f.\u53e6\u5916,\u9ad8\u4e09\u56f4\u4f5c\u7269\u8981\u6c42\u5fc5\u987b\u4fdd\u6301\u6c34\u5206\u5145\u6c9b,\u5426\u5219\u79cd\u4e0b\u540e\u4f1a\u6d88\u5931,\u5e76\u7559\u4e0b\u7a7a\u7684\u4f5c\u7269\u67b6,\u6240\u4ee5\u4f60\u9700\u8981\u4e00\u53f0\u4f5c\u7269\u76d1\u7ba1\u673a.%n%n\u5f53\u6742\u4ea4\u67b6\u4e0e\u4e24\u79cd\u6216\u4e24\u79cd\u4ee5\u4e0a\u8fd1\u4e4e\u6210\u719f\u7684\u4f5c\u7269\u76f8\u90bb\u65f6,\u6742\u4ea4\u5c31\u6709\u53ef\u80fd\u53d1\u751f.%n\u8bd1\u8005\u4e09\u6ce8:\u4e0d\u63a8\u8350\u4f7f\u7528\u4e24\u79cd\u4ee5\u4e0a\u4f5c\u7269\u6742\u4ea4,\u4f7f\u7528IC\u4f5c\u7269\u5206\u6790\u4eea\u7684\u4f5c\u7269\u8ba1\u7b97\u5668\u6a21\u5f0f\u4f60\u5c31\u4f1a\u53d1\u73b0,\u4f7f\u7528\u4e24\u79cd\u4ee5\u4e0a\u4f5c\u7269\u6742\u4ea4\u51fa\u7a00\u6709\u4f5c\u7269\u7684\u51e0\u7387\u6781\u4f4e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACzg==",
                    "tooltip": "<strong>\u519c\u573a\"\u667a\u8005\"\u624b\u518c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cd\u8981\u7684\u5de5\u5177"
                },
                {
                    "name": "\u82d4\u85d3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2048.png",
                    "x": 300.0,
                    "y": 252.0,
                    "data": "\u653e\u5f03\u4e86\u5728\u66ae\u8272\u68ee\u6797\u91cc\u5bfb\u627e\u82d4\u85d3?\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u79cd\u690d\u4e00\u79cd\u80fd\u4e3a\u4f60\u4ea7\u51fa\u5404\u79cd\u82d4\u85d3\u7684\u4f5c\u7269,\u975e\u5e38\u9002\u5408\u4f60\u7684\u5320\u9b42\u5de5\u5177.\u4f60\u53ef\u4ee5\u4ece\u7761\u83b2(lilypad)\u5f00\u59cb\u57f9\u80b2.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIAA==",
                    "tooltip": "<strong>\u82d4\u85d3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7518\u8517\u548c\u6811\u8102"
                },
                {
                    "name": "\u65b0\"\u7ebf\"\u7a0b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1797.png",
                    "x": 204.0,
                    "y": 204.0,
                    "data": "\u538c\u5026\u4e86\u6740\u622e\u8718\u86db\u6765\u83b7\u53d6\u7ebf? \u79cd\u690d\u4e00\u4e9b\u4e9a\u9ebb\u5427,\u8fd9\u662f\u7eaf\u5929\u7136\u7eff\u8272\u7684\u7ebf\u7684\u6765\u6e90.%n%n\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06\u68c9\u82b1\u79cd\u5b50\u79cd\u690d\u5728\u4f5c\u7269\u67b6\u4e0a.  \u518d\u52a0\u4e0a\u4e0b\u4e2a\u4efb\u52a1\u7684\u4e00\u4e9b\u76ae\u9769,\u4f60\u5c31\u80fd\u5f88\u5bb9\u6613\u5730\u83b7\u5f97\u9489\u7d27\u7684\u76ae\u9769,\u8fdb\u800c\u83b7\u5f97\u67d4\u8f6f\u7684\u76ae\u9769.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHBQ==",
                    "tooltip": "<strong>\u65b0\"\u7ebf\"\u7a0b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7518\u8517\u548c\u6811\u8102"
                },
                {
                    "name": "\u9e21,\u4e00\u53ea\u4e5f\u522b\u60f3\u8dd1!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1857.png",
                    "x": 540.0,
                    "y": 204.0,
                    "data": "\u4f60\u559c\u6b22\u6d3e\u5417?\u5f53\u7136!  \u6709\u8bb8\u591a\u79cd\u6d3e\u53ef\u4f9b\u9009\u62e9.  \u9e21\u8089\u6d3e\u662f\u6700\u5bb9\u6613\u505a\u7684\u6d3e\u4e4b\u4e00.\u53ea\u9700\u751f\u9e21\u8089\u3001\u571f\u8c46\u3001\u80e1\u841d\u535c\u548c\u9762\u56e2.\u6c34\u679c\u6d3e\u8981\u7b80\u5355\u4e00\u70b9,\u6240\u4ee5\u63d0\u4f9b\u7684\u9971\u98df\u5ea6\u4e0d\u592a\u591a,\u4f46\u662f\u5728\u4f60\u7b49\u5f85\u6700\u597d\u98df\u7269\u7684\u8fc7\u7a0b\u4e2d,\u5b83\u4eec\u5bf9\u586b\u9971\u809a\u5b50\u5f88\u6709\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHQQ==",
                    "tooltip": "<strong>\u9e21,\u4e00\u53ea\u4e5f\u522b\u60f3\u8dd1!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53a8\u5177</br>\u751f\u9762\u56e2"
                },
                {
                    "name": "\u5176\u4ed6\u9b54\u6cd5\u82b1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1804.png",
                    "x": 348.0,
                    "y": 300.0,
                    "data": "\u5176\u4ed6\u9b54\u6cd5\u82b1\u6709:\u6c34\u94f6\u82b1(shimmerleaf)\u3001\u66fc\u9640\u7f57(mandragora)\u3001\u72fc\u6bd2\u8349(wolf's-bane)\u7b49.  \u8bd1\u8005\u6ce8:\u8fd8\u6709\u6bd4\u8f83\u5e38\u89c1\u7684\u70c8\u7130\u8349(cinderpearl)\u548c\u6700\u7ec8\u6781\u7684\u5143\u59cb\u8393(primordial-berry),\u4e0d\u8fc7\u5143\u59cb\u8393\u9ed8\u8ba4\u65e0\u6cd5\u57f9\u80b2\u51fa\u6765,\u53ef\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHDA==",
                    "tooltip": "<strong>\u5176\u4ed6\u9b54\u6cd5\u82b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9b54\u6cd5\u91d1\u5c5e\u8393(Magic Metal Berry)"
                },
                {
                    "name": "\u81ea\u4ea7\u80a5\u6599\u7684\u690d\u7269?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1808.png",
                    "x": 252.0,
                    "y": 12.0,
                    "data": "\u7ed9\u6211\u7b7e\u4e2a\u540d!\u80a5\u6599\u82b1(Fertilia)\u4f1a\u4e3a\u4f60\u751f\u4ea7\u80a5\u6599.%n%n\u6bd4\u8f83\u5bb9\u6613\u6742\u4ea4\u51fa\u80a5\u6599\u82b1\u7684\u4f5c\u7269\u6709:\u8718\u86db\u82b1(spidernip)\u3001\u5c71\u7cbe\u8349(trollplant)\u3001\u5947\u5999\u82b1(venomilia)\u6216\u50f5\u5c38\u8349(zomplant).\u5f53\u5fc3\u5947\u5999\u82b1,\u4e0d\u53ea\u662f\u56e0\u4e3a\u5b83\u6709\u6bd2,\u8fd8\u56e0\u4e3a\u5b83\u66f4\u5bb9\u6613\u957f\u6742\u8349(\u751f\u957f8+)!%n%n\u4f60\u53ef\u4ee5\u7528\u80a5\u6599\u82b1\u7684\u6389\u843d\u7269\u548cIC2\u80a5\u6599\u5728\u6405\u62cc\u673a\u4e2d\u5236\u4f5c\u53ef\u7528\u4e8e\u591a\u65b9\u5757\u519c\u573a\u7684\u6797\u4e1a\u80a5\u6599.%n%n\u53e6\u5916,\u80a5\u6599\u82b1\u6781\u7aef\u7a00\u6709,\u5c31\u7b97\u7528\u50f5\u5c38\u8349\u6742\u4ea4\u4e5f\u53ea\u67090.76\uff05\u7684\u51e0\u7387,\u6240\u4ee5\u8bf7\u505a\u597d\u82b1\u5927\u6982\u4e09\u4e0d\u673d(three-eternities)\u65f6\u95f4\u7684\u51c6\u5907.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHEA==",
                    "tooltip": "<strong>\u81ea\u4ea7\u80a5\u6599\u7684\u690d\u7269?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5"
                },
                {
                    "name": "\u9a6c\u94c3\u85af\u86cb\u7cd5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1087.png",
                    "x": 492.0,
                    "y": 252.0,
                    "data": "\u7528\u571f\u8c46\u3001\u6d0b\u8471\u3001\u9ec4\u6cb9\u548c\u5e73\u5e95\u9505\u6765\u5236\u4f5c\u975e\u5e38\u7f8e\u5473\u7684\u9a6c\u94c3\u85af\u86cb\u7cd5!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEPw==",
                    "tooltip": "<strong>\u9a6c\u94c3\u85af\u86cb\u7cd5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53a8\u5177"
                },
                {
                    "name": "\u9a6c\u73b2\u85af\u3001\u80e1\u841d\u535c\u3001\u5357\u74dc\u548c\u897f\u74dc.",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/723.png",
                    "x": 204.0,
                    "y": 12.0,
                    "data": "\u4f60\u7684\u79cd\u5b50\u6709\u4e09\u79cd\u4e0d\u540c\u7684\u6570\u503c\uff0d\uff0d\u751f\u957f\u3001\u4ea7\u91cf\u3001\u6297\u6027(GGR).%n%n\u5728\u6ca1\u6709\u7b2c\u4e09\u65b9\u5de5\u5177(\u6bd4\u5982NBT\u7f16\u8f91\u5668!)\u7684\u60c5\u51b5\u4e0b,\u53ea\u80fd\u900f\u8fc7\u4ea4\u53c9\u7e41\u6b96\u914d\u79cd\u6765\u6539\u53d8\u4f5c\u7269\u7684GGR.\u4e24\u682a\u690d\u7269\u4ea4\u53c9\u7e41\u6b96\u4ea7\u751f\u7684\u4f5c\u7269\u7684GGR\u503c,\u4f1a\u4ecb\u5728\u4e24\u682a\u4eb2\u4ee3GGR\u7684\u4e2d\u95f4.\u6709\u65f6,\u5b83\u7684\u503c\u53ef\u80fd\u4f1a\u9ad8\u4e00\u70b9\u70b9\u6216\u4f4e\u4e00\u70b9\u70b9.\u56e0\u6b64,\u60f3\u8981\u53d6\u5f97\u66f4\u9ad8\u7684GGR\u503c,\u4f60\u5fc5\u987b\u5386\u7ecf\u6570\u4ee3\u7684\u7e41\u6b96\u914d\u79cd.%n%nGGR\u7684\u6700\u9ad8\u6570\u503c\u662f31,\u800c\u6700\u4f4e\u503c\u4e3a0.%n%n\u987a\u4fbf\u4e00\u63d0,\u5982\u679c\u4f60\u60f3\u8981\u8df3\u8fc7\u8fd9\u4e9b\u6b65\u9aa4,NBT\u7f16\u8f91\u6307\u4ee4\u4e3a/nbtedit me,\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684'root',\u7136\u540e\u5411\u4e0b\u6eda\u52a8\u5230\u7269\u54c1\u680f,\u518d\u627e\u5230\u79cd\u5b50\u888b(\u5148\u6e05\u7a7a\u7269\u54c1\u680f\u53ef\u4ee5\u66f4\u5bb9\u6613\u627e\u5230),\u627e\u5230\u5305\u542b\u5c5e\u6027\u4fe1\u606f\u7684\u9875\u9762\u5e76\u70b9\u51fb\u56fe\u6807.\u627e\u5230GGR\u5c5e\u6027\u4fe1\u606f\u540e,\u9009\u62e9\u4e00\u9879,\u7136\u540e\u5355\u51fb\u5de6\u4e0a\u89d2\u7684\"\u7f16\u8f91\",\u522b\u5fd8\u4e86\u4fdd\u5b58.%n%n\u8bb0\u4f4f\u8fd9\u53ef\u80fd\u4f1a\u8ba9\u4f60\u7684\u73a9\u5bb6\u6c38\u4e45\u53d8\u7816!\u6240\u4ee5\u5728\u7f16\u8f91\u4f60\u7684\u5b9e\u9645\u73a9\u5bb6\u524d\u8bf7\u505a\u597d\u5907\u4efd.%n%n\u5f53\u7136,\u5728\u670d\u52a1\u5668\u4e0a\u522b\u60f3\u8fd9\u4e48\u5e72.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC0w==",
                    "tooltip": "<strong>\u9a6c\u73b2\u85af\u3001\u80e1\u841d\u535c\u3001\u5357\u74dc\u548c\u897f\u74dc.</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5"
                },
                {
                    "name": "\u5357\u74dc\u6d3e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2439.png",
                    "x": 588.0,
                    "y": 204.0,
                    "data": "\u5357\u74dc\u6d3e\u662f\u4e00\u79cd\u4f20\u7edf\u7684\u7f8e\u56fd\u751c\u70b9,\u5728\u4e07\u5723\u8282\u3001\u611f\u6069\u8282\u548c\u5723\u8bde\u8282\u671f\u95f4\u7279\u522b\u53d7\u6b22\u8fce.%n2\u5357\u74dc+3\u7cd6\u518d\u52a0\u64c0\u9762\u6756,\u591a\u7b80\u5355.%n\u597d\u597d\u4eab\u53d7\u5427.%n",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJhw==",
                    "tooltip": "<strong>\u5357\u74dc\u6d3e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53a8\u5177"
                },
                {
                    "name": "\u6211\u66f4\u559c\u6b22\u6cb9\u83dc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1604.png",
                    "x": 204.0,
                    "y": 252.0,
                    "data": "\u8fd9\u79cd\u79cd\u5b50\u662f\u751f\u7269\u67f4\u6cb9\u6240\u9700\u79cd\u5b50\u6cb9\u7684\u91cd\u8981\u6765\u6e90.%n%n\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u6742\u4ea4\u84b2\u516c\u82f1(dandelion)\u3001\u53ef\u53ef\u8c46(cocoa)\u3001\u9a6c\u94c3\u85af(potato)\u6216\u67e0\u6aac(lemon).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGRA==",
                    "tooltip": "<strong>\u6211\u66f4\u559c\u6b22\u6cb9\u83dc</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7518\u8517\u548c\u6811\u8102"
                },
                {
                    "name": "\u771f\u6b63op\u7684\u98df\u7269",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1483.png",
                    "x": 444.0,
                    "y": 348.0,
                    "data": "\u4f60\u542c\u8bf4Dezil\u7684\u68c9\u82b1\u7cd6\u662f\u975e\u5e38OP\u7684\u98df\u7269,\u5076\u5c14\u80fd\u5728\u5b9d\u7bb1\u4e2d\u627e\u5230.\u8ba9\u6211\u6765\u544a\u8bc9\u4f60\u5982\u4f55\u5236\u4f5c\u5b83\u600e\u4e48\u6837?%n%n\u5728\u68a6\u4e4b\u4e16\u754c\u5236\u4f5c\u51fa\u6c34\u5fc3\u4e4b\u917f\u540e,\u5c06\u4e00\u70b9\u9762\u7c89\u3001\u7cd6\u3001\u4e16\u754c\u76d0\u548c\u9f99\u5c18\u653e\u5165\u4f60\u7684IV\u6405\u62cc\u673a.%n\u653e\u5165\u6c34\u5fc3\u4e4b\u917f\u540e,\u6b64\u914d\u65b9\u4f1a\u5f00\u59cb\u5408\u6210,\u6700\u540e\u751f\u6210\u96be\u770b\u7684\u7cd6\u6d46\u2014\u2014\u2014\u2014\u4e00\u79cd\u6076\u81ed\u7684\u3001\u4ee4\u4eba\u538c\u6076\u7684...\u73a9\u610f.%n%n\u5f53\u5fc3,\u624b\u6301\u8fd9\u73a9\u610f\u65f6,\u4f1a\u83b7\u5f97\u5931\u660eII\u6548\u679c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFyw==",
                    "tooltip": "<strong>\u771f\u6b63op\u7684\u98df\u7269</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c34\u5fc3\u4e4b\u917f</br>IV\u6405\u62cc\u673a"
                },
                {
                    "name": "\u7ea2\u914d\u9ec4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2266.png",
                    "x": 396.0,
                    "y": 204.0,
                    "data": "\u77f3\u69b4\u77f3\u5b9e\u9645\u4e0a\u6bd4\u84dd\u5b9d\u77f3\u66f4\u6709\u4ef7\u503c.\u5b83\u4eec\u662f\u521d\u671f\u94ec\u548c\u9530\u7684\u53ef\u9760\u6765\u6e90.\u800c\u8fd9\u4e24\u6837\u91d1\u5c5e\u5bf9HV\u673a\u5668\u7684\u5236\u9020\u6765\u8bf4\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684. \u4f60\u9700\u8981\u5728\u7530\u5730\u4e0b\u65b9\u653e\u4e2a\u77f3\u69b4\u77f3\u5757(\u4efb\u610f\u7c7b\u578b)\u624d\u80fd\u57f9\u80b2\u51fa\u5b83. \u53ef\u4ee5\u901a\u8fc7\u7c89\u788e\u9530\u94dd\u69b4\u77f3\u77ff\u77f3\u83b7\u53d6\u77f3\u69b4\u77f3(\u526f\u4ea7\u7269),\u8fd8\u53ef\u4ee5\u7528\u805a\u7206\u538b\u7f29\u673a\u5c06\u77f3\u69b4\u77f3\u7c89\u91cd\u65b0\u538b\u6210\u6676\u4f53,\u518d\u5236\u4f5c\u6210\u5757.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI2g==",
                    "tooltip": "<strong>\u7ea2\u914d\u9ec4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6df1\u84dd\u8272\u7684\u84dd\u5b9d\u77f3\u4e4b\u6d77"
                },
                {
                    "name": "\u7518\u8517\u548c\u6811\u8102",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1600.png",
                    "x": 252.0,
                    "y": 204.0,
                    "data": "\u4f60\u5c06\u83b7\u5f97\u7684\u7b2c\u4e00\u6279\u6709\u7528\u4f5c\u7269\u4e4b\u4e00\u662f\u7c98\u6027\u7518\u8517.\u5b83\u751f\u957f\u8fc5\u901f,\u53ef\u4ee5\u751f\u4ea7\u7518\u8517(\u5728\u5176\u5b8c\u5168\u957f\u6210\u524d\u6536\u83b7)\u548c\u7c98\u6027\u6811\u8102.\u7c98\u6027\u7518\u8517\u6613\u4e8e\u57f9\u80b2,\u662f\u4e0e\u5176\u4ed6\u4f5c\u7269\u6742\u4ea4\u4ee5\u63d0\u9ad8\u5b83\u4eec\u4e09\u56f4(GGR:\u751f\u957f\u3001\u4ea7\u91cf\u3001\u6297\u6027)\u7684\u4f18\u826f\u9009\u62e9.\u6700\u597d\u7684\u505a\u6cd5\u662f\u5c06\u5176\u63a7\u5236\u572821/31/10,\u7136\u540e\u518d\u4ee5\u5b83\u4eec\u4e3a\u7236\u672c\u6bcd\u672c\u6742\u4ea4\u57f9\u80b2.24+\u7684\u751f\u957f\u503c\u4f1a\u4f7f\u4f5c\u7269\u8868\u73b0\u5f97\u50cf\u6742\u8349\u4e00\u6837,\u6240\u4ee5\u9700\u8981\u7559\u4e00\u6b21\u6742\u4ea4\u53ef\u80fd\u4ea7\u751f\u7684\u589e\u503c\u5bcc\u4f59.%n%n\u6211\u4f1a\u7528\u4e00\u4e9b\u80a5\u6599\u4ea4\u6362\u4f60\u7684\u7518\u8517\u4e0e\u7c98\u6027\u6811\u8102\u5404\u4e24\u7ec4.%n%nPS\uff1a\u6742\u4ea4\u51fa\u8fd9\u79cd\u4f5c\u7269\u4e4b\u540e,\u4f60\u5c31\u53ef\u4ee5\u628a\u6a61\u80f6\u6811\u4e22\u5230\u4e00\u8fb9\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGQA==",
                    "tooltip": "<strong>\u7518\u8517\u548c\u6811\u8102</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5"
                },
                {
                    "name": "\u53ef\u518d\u751f\u77f3\u6cb9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1809.png",
                    "x": 108.0,
                    "y": 300.0,
                    "data": "\u79cd\u51fa\u77f3\u6cb9?\u5c31\u50cf\u517b\u8702\u751f\u4ea7\u77f3\u6cb9\u4e00\u6837\u610f\u4e49\u975e\u51e1!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHEQ==",
                    "tooltip": "<strong>\u53ef\u518d\u751f\u77f3\u6cb9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7164...\u6765\u81ea\u51cb\u7075\u7518\u8517?"
                },
                {
                    "name": "\u673a\u68b0\u5316\u4f5c\u7269\u6536\u5272",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1862.png",
                    "x": 348.0,
                    "y": 60.0,
                    "data": "\u4f5c\u7269\u6536\u5272\u673a\u53ef\u4ee5\u81ea\u52a8\u6536\u527211x11x3\u8303\u56f4\u7684\u4f5c\u7269,\u592a\u68d2\u4e86! \u53c8\u56e0\u4e3a\u591a\u65b9\u5757\u519c\u573a\u5728HV\u9636\u6bb5,\u6240\u4ee5\u524d\u671f\u4f5c\u7269\u6536\u5272\u673a\u5c31\u662f\u6700\u597d\u7684\u519c\u4e1a\u81ea\u52a8\u5316\u9009\u62e9\u4e86.%n%n\u5982\u679c\u4f60\u9700\u8981\u5176\u5728\u7279\u5b9a\u9636\u6bb5\u6536\u5272\u4f5c\u7269,\u9700\u8981\u5728\u5176\u4e2d\u653e\u5165\u4f5c\u7269\u5206\u6790\u4eea.\u5426\u5219\u53ea\u8981\u53ef\u4ee5\u6536\u5272,\u4f5c\u7269\u6536\u5272\u673a\u5c31\u4f1a\u5373\u523b\u5de5\u4f5c.\u6bd4\u5982\u79cd\u690d\u7c98\u6027\u7518\u8517\u7684\u65f6\u5019,\u5982\u679c\u4e0d\u653e\u5206\u6790\u4eea,\u6536\u5272\u673a\u5c31\u4f1a\u57282\u9636\u6bb5(\u6536\u83b7\u7518\u8517)\u5de5\u4f5c,\u800c\u4e0d\u4f1a\u7b49\u52304\u9636\u6bb5(\u6536\u83b7\u7c98\u6027\u6811\u8102).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHRg==",
                    "tooltip": "<strong>\u673a\u68b0\u5316\u4f5c\u7269\u6536\u5272</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f5c\u7269\u81ea\u52a8\u5316"
                },
                {
                    "name": "\u6717\u59c6\u9152",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1281.png",
                    "x": 636.0,
                    "y": 108.0,
                    "data": "\u597d\u559d!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFAQ==",
                    "tooltip": "<strong>\u6717\u59c6\u9152</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u4e1a\u4e4b\u8def"
                },
                {
                    "name": "\u72ec\u773c\u5965\u4e01\u4e4b\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1928.png",
                    "x": 108.0,
                    "y": 348.0,
                    "data": "\u96f7\u795e\u4e4b\u8349(God-of-Thunder-plant)\u53ef\u5c06\u4f60\u4ece\u4e0b\u754c\u83b7\u5f97\u7684\u948d\u77ff\u77f3\u589e\u4ea7\u52304\u500d. \u5b83\u8fd8\u53ef\u4ee5\u7528\u6765\u57f9\u80b2\u6838\u80fd\u8349(Reactoria).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHiA==",
                    "tooltip": "<strong>\u72ec\u773c\u5965\u4e01\u4e4b\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7164...\u6765\u81ea\u51cb\u7075\u7518\u8517?"
                },
                {
                    "name": "\u52a0\u5feb\u4f60\u7684\u690d\u7269\u751f\u957f\u8fdb\u5ea6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/722.png",
                    "x": 108.0,
                    "y": 12.0,
                    "data": "\u4e3a\u4e86\u52a0\u5feb\u751f\u957f\u8fc7\u7a0b,\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e9b\u80a5\u6599.\u4f60\u4f1a\u6ce8\u610f\u5230,\u65e0\u8bba\u5982\u4f55,\u9aa8\u7c89\u4e0d\u518d\u8d77\u4f5c\u7528\u4e86.\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d,\u7528\u6c34\u6405\u62cc\u4e9b\u6728\u7070\u3001\u78f7\u7070\u77f3\u6216\u65b9\u89e3\u77f3,\u5c31\u80fd\u5f97\u5230\u4f60\u9700\u8981\u7684\u80a5\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC0g==",
                    "tooltip": "<strong>\u52a0\u5feb\u4f60\u7684\u690d\u7269\u751f\u957f\u8fdb\u5ea6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e59\u9170\u6c34\u6768\u9178(C9H8O4)...\u6c2f\u5316\u94a0(NaCl)...\u6c34(H2O)...</br>\u521d\u6b21\u6742\u4ea4"
                },
                {
                    "name": "\u77f3\u82af\u8349(Stone lillies)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1805.png",
                    "x": 252.0,
                    "y": 396.0,
                    "data": "\u77f3\u82af\u8349(Stonelilly)\u4f7f\u4f60\u80fd\u83b7\u5f97\u82b1\u5c97\u5ca9\u3001\u7384\u6b66\u5ca9\u6216\u662f\u5927\u7406\u77f3\u7684\u7c89\u672b.\u662f\u83b7\u5f97\u65b9\u89e3\u77f3\u3001\u6c1f\u6216\u94dd\u7684\u53ef\u518d\u751f\u65b9\u6cd5(\u8fd8\u6709\u4e00\u70b9\u70b9\u94c0).%n%n\u4f60\u9700\u8981\u5c06\u6b64\u524d\u63d0\u5230\u7684\u539f\u77f3\u7f6e\u4e8e\u4f5c\u7269\u4e4b\u4e0b\u624d\u80fd\u8ba9\u5b83\u5b8c\u5168\u6210\u719f.%n%n\u8fd8\u6709\u4e00\u79cd\u7070\u77f3\u82af\u8349(Grey-stonelilly)\u53ef\u4ee5\u4ea7\u51fa\u77f3\u7c89(\u8c01\u4f1a\u8981\u90a3\u73a9\u610f??)\u3001\u9ec4\u77f3\u82af\u8349(Yellow-stonelilly)\u53ef\u4ee5\u4ea7\u51fa\u6c99\u5b50\u6216\u672b\u5730\u77f3\u7c89.\u5bf9\u806a\u660e\u7684\u5316\u5b66\u5bb6\u6765\u8bf4\u5f88\u6709\u7528!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHDQ==",
                    "tooltip": "<strong>\u77f3\u82af\u8349(Stone lillies)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u7247\u53c8\u4e00\u7247"
                },
                {
                    "name": "\u7518\u8517",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1277.png",
                    "x": 636.0,
                    "y": 12.0,
                    "data": "\u7518\u8517\u662f\u7cd6\u7684\u6765\u6e90,\u5982\u679c\u4f60\u60f3\u8981\u4e00\u4e9b\u9152\u548c\u7cd6,\u90a3\u4e48\u4f60\u5c31\u9700\u8981\u7518\u8517.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE_Q==",
                    "tooltip": "<strong>\u7518\u8517</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7c89\u788e v0.1 Alpha"
                },
                {
                    "name": "\u751c\u5230\u7259\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1606.png",
                    "x": 156.0,
                    "y": 252.0,
                    "data": "\u7518\u8517\u65e0\u6cd5\u6ee1\u8db3\u4f60\u5bf9\u7cd6\u7684\u9700\u6c42\uff1f\u6bcf\u4e2a\u751c\u83dc(sugar-beet)\u53ef\u5236\u51fa8\u7cd6.\u9a6c\u94c3\u85af(potato)\u6216\u80e1\u841d\u535c(carrot)\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u6742\u4ea4\u51fa\u751c\u83dc.%n%n\u55ef...\u73b0\u5728\u6211\u60f3\u8981\u4e00\u4e9b\u7cd6\u679c.\u4ece\u4f60\u7684\u751c\u83dc\u91cc\u69a8\u53d6\u4e00\u4e9b\u7cd6\u6765.\u6211\u4f1a\u5206\u7ed9\u4f60\u4e00\u70b9.%n%n\u63d0\u53d6\u5176\u4e2d\u7684\u7cd6,\u518d\u5c06\u5176\u7535\u89e3\u6210O2\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGRg==",
                    "tooltip": "<strong>\u751c\u5230\u7259\u4e86</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7518\u8517\u548c\u6811\u8102"
                },
                {
                    "name": "\u4e00\u7247\u53c8\u4e00\u7247",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1607.png",
                    "x": 252.0,
                    "y": 300.0,
                    "data": "\u5f53\u4f60\u5f00\u8f9f\u4e86\u66f4\u5927\u7684\u7530\u5730\u540e,\u6536\u83b7\u4f5c\u7269\u53ef\u80fd\u4f1a\u53d8\u6210\u4e00\u4ef6\u771f\u6b63\u7684\u9ebb\u70e6\u4e8b. \u4e3a\u4f60\u81ea\u5df1\u5236\u4f5cGT\u9570\u5200,\u8ba9\u6536\u83b7\u53d8\u5f97\u5bb9\u6613,5x5",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGRw==",
                    "tooltip": "<strong>\u4e00\u7247\u53c8\u4e00\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7518\u8517\u548c\u6811\u8102"
                },
                {
                    "name": "\u7f8e\u5473\u70e4\u9762\u5305",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/638.png",
                    "x": 444.0,
                    "y": 252.0,
                    "data": "\u518d\u6b21\u70d8\u7119\u4f60\u7684\u9762\u5305,\u628a\u5b83\u505a\u6210\u70e4\u9762\u5305!\uff1f\u5b83\u80fd\u4e3a\u4f60\u63d0\u4f9b\u66f4\u591a\u8425\u517b\u70b9\u6570,\u800c\u4e14\u5177\u6709\u66f4\u9ad8\u7684\u70f9\u996a\u6f5c\u529b!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACfg==",
                    "tooltip": "<strong>\u7f8e\u5473\u70e4\u9762\u5305</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>...\u4e00\u5206\u6536\u83b7</br>\u7b2c\u4e00\u4e2a\u624b\u4f5c\u9762\u5305"
                },
                {
                    "name": "\u56e4\u79ef:\u7cd6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1282.png",
                    "x": 684.0,
                    "y": 12.0,
                    "data": "\u56e4\u79ef\u7cd6\u662f\u4e0d\u662f\u4e00\u4e2a\u597d\u4e3b\u610f\u5462\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFAg==",
                    "tooltip": "<strong>\u56e4\u79ef:\u7cd6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8702\u871c\u7684\u7cd6</br>\u7518\u8517"
                },
                {
                    "name": "\u5927\u5730\u5728\u54ed\u6ce3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1798.png",
                    "x": 156.0,
                    "y": 396.0,
                    "data": "\u9700\u8981\u6c2f\u7684\u53e6\u4e00\u79cd\u6765\u6e90? \u57f9\u80b2\u4e00\u4e9b\u6076\u9b42\u7518\u8517(Tearstalk)\u5427,\u53ef\u6536\u83b7\u6076\u9b42\u4e4b\u6cea,\u4ece\u4e2d\u53ef\u4ee5\u63d0\u53d6\u51fa\u76d0\u6c34.%n%n;-;%n%n\u5730\u72f1\u75a3(nether-wart)\u53ef\u4ee5\u6bd4\u8f83\u5bb9\u6613\u5730\u6742\u4ea4\u51fa\u6076\u9b42\u7518\u8517.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHBg==",
                    "tooltip": "<strong>\u5927\u5730\u5728\u54ed\u6ce3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u7247\u53c8\u4e00\u7247"
                },
                {
                    "name": "\u5de5\u4e1a\u4e4b\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1280.png",
                    "x": 636.0,
                    "y": 60.0,
                    "data": "\u751f\u4ea7\u6717\u59c6\u9152\u4e5f\u53ef\u4ee5\u662f\u81ea\u52a8\u5316\u7684,\u4f46\u662f\u4f60\u8981\u9075\u5faa\u5de5\u4e1a\u5236\u9020\u539f\u5219.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFAA==",
                    "tooltip": "<strong>\u5de5\u4e1a\u4e4b\u8def</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53d1\u9175\u917f\u9152!</br>\u7518\u8517"
                },
                {
                    "name": "\u94f2\u5b50\u65f6\u95f4\u5230",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1270.png",
                    "x": 60.0,
                    "y": 156.0,
                    "data": "\u591a\u529f\u80fd\u94f2\u7ed3\u5408\u4e86\u9664\u8349\u94f2\u3001\u9504\u5934\u548c\u94f2\u5b50\u7684\u529f\u80fd.\u5982\u679c\u4f60\u6709\u70b9\u5206\u4e0d\u592a\u6e05\u695a,\u8bf7\u4ec5\u5728\u5fc5\u8981\u65f6\u4f7f\u7528\u5b83,\u56e0\u4e3a\u5f88\u5bb9\u6613\u5f04\u4e71,\u4e0d\u77e5\u9053\u81ea\u5df1\u662f\u8981\u9664\u8349\u8fd8\u662f\u6536\u83b7\u4f5c\u7269,\u5f88\u5bb9\u6613\u4e0d\u5c0f\u5fc3\u6253\u574f\u4f5c\u7269. %n%n\u624b\u6301\u591a\u529f\u80fd\u94f2\u53f3\u952e\u6ca1\u6709\u5b8c\u5168\u6210\u719f\u7684\u4f5c\u7269,\u6709\u6781\u4f4e\u7684\u51e0\u7387\u83b7\u5f97\u79cd\u5b50. \u800c\u5de6\u952e\u6ca1\u6709\u5b8c\u5168\u6210\u719f\u7684\u4f5c\u7269\u4e0d\u4f1a\u6709\u4efb\u4f55\u6536\u83b7.%n%n\u5f53\u4f5c\u7269\u5b8c\u5168\u6210\u719f\u540e,\u5de6\u952e\u6389\u843d\u79cd\u5b50\u7684\u51e0\u7387\u4f1a\u66f4\u9ad8. \u800c\u53f3\u952e\u5b8c\u5168\u6210\u719f\u7684\u4f5c\u7269,\u79cd\u5b50\u7684\u6389\u843d\u51e0\u7387\u53cd\u800c\u4f1a\u6bd4\u6b63\u5e38\u5de6\u952e\u4f4e.%n%n\u6ce8\u610f,\u9ad8\u9636/\u9ad8\u5c5e\u6027\u4f5c\u7269\u6389\u843d\u79cd\u5b50\u7684\u51e0\u7387\u66f4\u4f4e,\u800c\u4e14\u662f\u4f4e\u5f97\u591a.%n%n\u516c\u5f0f\u662f:1+tanh((-1)(X+5((-\u6297\u6027/2)+\u751f\u957f+\u4ea7\u91cf)/21)/12); X\u4e3a\u4f5c\u7269\u7b49\u7ea7(0-16).  \u522b\u95ee\u6211\u8fd9\u4e2a\u516c\u5f0f\u7b97\u51fa\u6765\u7684\u51e0\u7387\u662f\u5de6\u952e\u8fd8\u662f\u53f3\u952e,\u95eeBart\u53bb,\u6216\u8005\u76f4\u63a5\u770b\u6e90\u7801.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE9g==",
                    "tooltip": "<strong>\u94f2\u5b50\u65f6\u95f4\u5230</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6742\u8349</br>\u8fdb\u9636\u5377\u677f\u673a"
                },
                {
                    "name": "\u66f4\u597d(?)\u7684\u6ce5\u571f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1793.png",
                    "x": 60.0,
                    "y": 12.0,
                    "data": "\u5c06\u6ce5\u571f\u4e0e\u6c99\u5b50\u653e\u5165\u7ec4\u88c5\u673a,\u518d\u52a0\u4e0a\u4e00\u4e9b\u79cd\u5b50\u6cb9,\u4f60\u5c31\u80fd\u83b7\u5f97\u82b1\u571f.  \u8fd9\u662f\u5b8c\u7f8e\u7684\u519c\u7530,\u4e0d\u9700\u8981\u9644\u8fd1\u5b58\u5728\u6c34\u6e90,\u4f60\u5728\u4e0a\u9762\u8df3\u8dc3\u4e0d\u4f1a\u7834\u574f\u5b83.\u4f46\u662f\u5982\u679c\u4f60\u5728\u4e0a\u9762\u75be\u8dd1\u53ef\u80fd\u4f1a\u5c06\u5176\u53d8\u56de\u6ce5\u571f,\u6240\u4ee5\u5c0f\u5fc3\u70b9.\u4f60\u53ef\u80fd\u9700\u8981\u770b\u770b\"\u57fa\u5730\u5efa\u8bbe\"\u4efb\u52a1\u680f\u4e2d\u6709\u5173\"\u7f13\u5efa\u6212\u6307\"\u7684\u4efb\u52a1.%n%n\u4e0e\u88ab\u6d47\u704c\u7684\u8015\u5730\u4e0d\u540c,\u82b1\u571f\u65e0\u6cd5\u63d0\u4f9b\u989d\u5916\u7684\u6e7f\u5ea6\u503c\u52a0\u6210,\u4e5f\u4e0d\u80fd\u52a0\u901fIC2\u4f5c\u7269\u751f\u957f,\u6240\u4ee5\u4f60\u5c31\u4e0d\u7528\u8003\u8651\u4ec0\u4e48\u6700\u5927\u6700\u5c0f\u4e86.%n%n\u9644\u9b54\u571f\u3001\u50ac\u751f\u706f\u3001\u6d12\u6c34\u5668\u7b49\u4e5f\u662f\u4e00\u6837.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHAQ==",
                    "tooltip": "<strong>\u66f4\u597d(?)\u7684\u6ce5\u571f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u521d\u6b21\u6742\u4ea4"
                },
                {
                    "name": "\u96be\u770b\u7684\u7cd6\u6d46",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1484.png",
                    "x": 492.0,
                    "y": 396.0,
                    "data": "\u4e0b\u4e00\u6b65\u662f\u628a\u8fd9\u4e2a\u96be\u770b\u7684\u7cd6\u6d46\u5f04\u5f97\u50cf\u70b9\u6837\u5b50.\u4f7f\u7528\u68c9\u82b1\u7cd6\u6a21\u5177,\u5728\u538b\u6a21\u673a\u5185\u7ed9\u96be\u770b\u7684\u7cd6\u6d46\u5851\u5f62,\u5f97\u5230\u751f\u7cd6\u6d46.\u8bb0\u5f97\u7528\u5b8c\u540e\u6d88\u6bd2.%n%n\u5f53\u5fc3,\u624b\u6301\u751f\u7cd6\u6d46\u65f6,\u4f1a\u83b7\u5f97\u5931\u660eII\u548c\u9965\u997fII\u6548\u679c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFzA==",
                    "tooltip": "<strong>\u96be\u770b\u7684\u7cd6\u6d46</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u771f\u6b63op\u7684\u98df\u7269"
                },
                {
                    "name": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/721.png",
                    "x": 252.0,
                    "y": 60.0,
                    "data": "\u5229\u7528\u4f60\u7684\u626b\u63cf\u4eea\u6765\u626b\u63cf\u4f60\u5df2\u62e5\u6709\u7684\u6240\u6709\u672a\u77e5\u79cd\u5b50.%n %n\u79cd\u5b50\u53ef\u4ee5\u518d\u6b21\u88ab\u683d\u79cd\u7528\u4e8e\u57f9\u80b2\u66f4\u597d\u3001\u9002\u5e94\u6027\u66f4\u4f73\u7684\u4f5c\u7269.%n%n\u7a0d\u540e\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f60\u7684\u4fbf\u643a\u5f0f\u626b\u63cf\u4eea(\u4e09\u5f55\u4eea)\u76f4\u63a5\u626b\u63cf\u4f5c\u7269\u67b6\u4e0a\u7684\u4f5c\u7269.%n%n\u517b\u5206\u4e0e\u7530\u5730\u4e4b\u4e0b\u7684\u6ce5\u571f\u65b9\u5757(\u6700\u591a4\u5757)\u3001\u751f\u7269\u7fa4\u7cfb(\u6cbc\u6cfd\u4e0e\u4e1b\u6797\u6700\u597d,\u5176\u5b9e\u662f\u8611\u83c7\u5c9b--\u57fa\u672c\u4e0a\u4efb\u4f55\u6f6e\u6e7f\u6216\u6e7f\u6da6\u7684\u751f\u7269\u7fa4\u7cfb\u90fd\u4e0d\u9519,\u6bd4\u5982\u96e8\u6797\u6216\u6cb3\u53e3)\u3001\u7a7a\u6c14\u8d28\u91cf(Y",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC0Q==",
                    "tooltip": "<strong>\u79cd\u5b50\u4e0d\u518d\u672a\u77e5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u521d\u6b21\u6742\u4ea4"
                },
                {
                    "name": "\u7d20\u98df\u4e3b\u4e49\u8005,\u4f46\u4ecd\u60f3\u5403\u8089?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1802.png",
                    "x": 204.0,
                    "y": 396.0,
                    "data": "\u4e0e\u5176\u6740\u6b7b\u52a8\u7269\u6765\u83b7\u5f97\u8089\u7c7b,\u4e0d\u5982\u57f9\u80b2\u4e00\u4e9b\u75af\u72c2\u7684\u8f6c\u57fa\u56e0\u4f5c\u7269\u4e3a\u4f60\u751f\u4ea7\u52a8\u7269\u4ea7\u54c1.\u79d1\u5b66\u4e07\u5c81!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHCg==",
                    "tooltip": "<strong>\u7d20\u98df\u4e3b\u4e49\u8005,\u4f46\u4ecd\u60f3\u5403\u8089?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u7247\u53c8\u4e00\u7247"
                },
                {
                    "name": "\u7d20\u98df\u76ae\u9769?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1931.png",
                    "x": 156.0,
                    "y": 204.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u8981\u7559\u7740\u4f60\u7684\u725b\u548c\u9a6c\u6765\u4ea7\u5976\u548c...\u80f6\u6c34...\u4f60\u53ef\u4ee5\u7528\u76ae\u9769\u85e4(Corium)\u6765\u83b7\u5f97\u76ae\u9769.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHiw==",
                    "tooltip": "<strong>\u7d20\u98df\u76ae\u9769?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u65b0\"\u7ebf\"\u7a0b"
                },
                {
                    "name": "\u852c\u83dc\u8bf1\u9975",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/629.png",
                    "x": 588.0,
                    "y": 60.0,
                    "data": "\u4e3a\u4f60\u7684\u52a8\u7269\u9677\u9631\u5236\u4f5c\u4e00\u4e9b\u852c\u83dc\u8bf1\u9975.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACdQ==",
                    "tooltip": "<strong>\u852c\u83dc\u8bf1\u9975</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52a8\u7269\u9677\u9631"
                },
                {
                    "name": "\u4f0f\u7279\u52a0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1278.png",
                    "x": 540.0,
                    "y": 156.0,
                    "data": "\"\u4f0f\u7279\u52a0\"\u5728\u4fc4\u8bed\u4e2d\u662f\"\u53ef\u7231\u7684\u5c0f\u6c34\"\u7684\u610f\u601d,\u8fd9\u662f\u4e00\u79cd\u9152\u7cbe\u542b\u91cf\u5f88\u9ad8\u7684\u996e\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE_g==",
                    "tooltip": "<strong>\u4f0f\u7279\u52a0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5c0f\u9ea6\u6c41</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2"
                },
                {
                    "name": "\u9ec4\u8702\u8702\u871c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1284.png",
                    "x": 684.0,
                    "y": 108.0,
                    "data": "\u5728\u4e0b\u754c\u53ef\u4ee5\u627e\u5230\u5de8\u578b\u9ec4\u8702. \u5feb! \u6f5c\u5165\u8702\u5de2\u5077\u4e00\u4e9b\u8702\u871c!%n%n\u53ea\u8981\u80cc\u5305\u4e2d\u6709\u5355\u5143\u6216\u8005\u6876\u88c5\u7684\u6d41\u4f53\u5c31\u53ef\u4ee5\u63d0\u4ea4\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFBA==",
                    "tooltip": "<strong>\u9ec4\u8702\u8702\u871c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0b\u754c"
                },
                {
                    "name": "\u5230\u5904\u90fd\u662f\u6c34",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1602.png",
                    "x": 156.0,
                    "y": 12.0,
                    "data": "\u867d\u7136\u4f60\u5fc5\u987b\u5728\u6c34\u9644\u8fd1\u79cd\u690d\u4f5c\u7269,\u4f46\u9664\u975e\u4f60\u4e00\u76f4\u624b\u52a8\u6d47\u6c34,\u5426\u5219\u5b83\u4eec\u5b9e\u9645\u4e0a\u4e0d\u4f1a\u5f97\u5230\u4efb\u4f55\u6c34\u5408\u4f5c\u7528. \u5236\u4f5c\u4e00\u4e2a\u6c34\u5316\u5355\u5143\u5e76\u5c06\u5176\u7528\u4e8e\u4f5c\u7269,\u4ee5\u63d0\u9ad8\u5176\u751f\u957f\u901f\u5ea6.%n%n\u4f60\u53ef\u4ee5\u5c06\u6c34\u5316\u5355\u5143\u653e\u5165\u79bb\u5fc3\u673a\u4e2d\u56de\u6536\u7a7a\u5355\u5143.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGQg==",
                    "tooltip": "<strong>\u5230\u5904\u90fd\u662f\u6c34</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u521d\u6b21\u6742\u4ea4"
                },
                {
                    "name": "\"\u76c6\u683d\"\u6811",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2405.png",
                    "x": 12.0,
                    "y": 60.0,
                    "data": "\u4f60\u53ef\u4ee5\u76f4\u63a5\u5c06\u539f\u7248\u6811\u82d7\u653e\u7f6e\u5728\u4f5c\u7269\u67b6\u4e0a.\u8fd9\u6837\u4f60\u5c31\u80fd\u83b7\u5f97\"\u76c6\u683d\"\u6811.\u76c6\u683d\u6811\u7684\u4ea7\u7269\u4e0e\u666e\u901a\u6811\u76f8\u540c,\u8fd8\u80fd\u8282\u7ea6\u6811\u6728\u751f\u957f\u3001\u88ab\u780d\u4f10\u65f6\u7684CPU\u8ba1\u7b97.%n%n\u800c\u8fd9\u4e9b\u901a\u5e38\u662f\u6d88\u8017\u670d\u52a1\u5668\u8d44\u6e90\u7684\u5927\u5934,\u6240\u4ee5\u5982\u679c\u4f60\u60f3\u73a9\u5f97\u6d41\u7545,\u5c31\u7528\u76c6\u683d\u6811\u4e3a\u4f60\u7684\u70ed\u89e3\u7089\u63d0\u4f9b\u6728\u6750\u5427.\u5b83\u4eec\u540c\u6837\u53ef\u4ee5\u4ee5\u6781\u5feb\u7684\u901f\u5ea6\u51fa\u4ea7\u6210\u5428\u7684\u6728\u6750,\u5c24\u5176\u662f\u5c5e\u6027\u63d0\u9ad8\u540e,\u4f60\u8fd8\u6709\u4ec0\u4e48\u7406\u7531\u4e0d\u5c06\u5176\u7528\u5728\u4f60\u7684\u81ea\u52a8\u5316\u6811\u573a\u5462.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJZQ==",
                    "tooltip": "<strong>\"\u76c6\u683d\"\u6811</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u519c\u573a\"\u667a\u8005\"\u624b\u518c"
                },
                {
                    "name": "\u9664\u8349\u5242",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1543.png",
                    "x": 300.0,
                    "y": 108.0,
                    "data": "\u9664\u8349\u5242\u53ef\u9632\u6b62\u6742\u8349\u5728\u7a7a\u4f5c\u7269\u67b6\u4e0a\u751f\u957f(\u6d88\u8017\u9664\u8349\u5242). \u5b83\u5bf9\u4f5c\u7269\u8d28\u91cf\u7684\u635f\u5bb3\u662f\u65e0\u7a3d\u4e4b\u8c08,\u6211\u4eec\u68c0\u67e5\u8fc7\u4ee3\u7801,\u53ef\u4ee5\u5411\u4f60\u4fdd\u8bc1.\u9664\u975e\u4f5c\u7269\u6709\u6742\u8349\u5c5e\u6027(\u5947\u5999\u82b1(venomilia)\u751f\u957f\u503c8+,\u5176\u4ed6\u4f5c\u7269\u751f\u957f\u503c24+),\u90a3\u4e48\u5b83\u53ef\u80fd\u4f1a\u635f\u59311\u70b9\u5c5e\u6027.\u800c\u4e14\u8fd8\u53ef\u4ee5\u518d\u6b21\u57f9\u80b2\u56de\u6765.\u4e14\u8fd9\u79cd\u635f\u5931\u53ea\u6709\u5728\u4f7f\u7528\u8fc7\u591a\u4e0b\u624d\u53ef\u80fd\u51fa\u73b0,\u800c\u4f5c\u7269\u76d1\u7ba1\u673a\u4e0d\u4f1a\u6ee5\u7528\u9664\u8349\u5242.%n%n\u7528\u6cd5:%n\u5f53\u624b\u6301\u9664\u8349\u5242\u65f6,\u53f3\u952e\u5355\u51fb\u4f5c\u7269\u67b6\u4ee5\u4f7f\u7528\u5b83. \u5b83\u4e5f\u53ef\u4ee5\u653e\u7f6e\u5728\u4f5c\u7269\u76d1\u7ba1\u673a\u4e2d,\u81ea\u52a8\u5c06\u5176\u5e94\u7528\u4e8e\u4f5c\u7269.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGBw==",
                    "tooltip": "<strong>\u9664\u8349\u5242</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f5c\u7269\u81ea\u52a8\u5316</br>\u5de5\u4e1a\u917f\u9020"
                },
                {
                    "name": "\u6742\u8349",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/724.png",
                    "x": 60.0,
                    "y": 108.0,
                    "data": "\u6742\u8349\u4f1a\u4e0d\u65f6\u5730\u5728\u4f60\u7a7a\u7684\u4f5c\u7269\u67b6/\u6742\u4ea4\u67b6\u4e0a\u751f\u957f.\u5b83\u4eec\u4f1a\u5728\u5176\u4e0a\u751f\u957f\u5e76\u8513\u5ef6,\u541e\u566c\u4f60\u73cd\u8d35\u7684\u4f5c\u7269,\u6240\u4ee5\u8bf7\u5728\u4f60\u60f3\u8981\u6062\u590d\u5230\u4e0a\u4e00\u4e2a\u5907\u4efd\u524d,\u4ed4\u7ec6\u6ce8\u610f\u5e76\u7528\u4f60\u7684\u9664\u8349\u526a\u6e05\u9664\u6742\u8349.%n\u4ee5\u540e\u4f60\u53ef\u4ee5\u5236\u4f5c\u9664\u8349\u5242\u6765\u9664\u8349(\u9664\u8349\u5242\u7528\u5c3d\u4e4b\u524d\u4e0d\u4f1a\u4ea7\u751f\u6742\u8349).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC1A==",
                    "tooltip": "<strong>\u6742\u8349</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u521d\u6b21\u6742\u4ea4"
                },
                {
                    "name": "\u6742\u8349II",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/720.png",
                    "x": 108.0,
                    "y": 108.0,
                    "data": "\u6742\u8349,\u6742\u8349,\u66f4\u591a\u7684\u6742\u8349.\u5f53\u4f60\u8fdb\u884c\u4f5c\u7269\u6742\u4ea4\u80b2\u79cd\u65f6,\u83b7\u5f97\u4e86\u5927\u91cf\u7684\u6742\u8349.%n%n\u9700\u8981\u6362\u4e00\u4e9b\u6cbc\u6c14\u5355\u5143\u6765\u53d1\u7535\uff1f\u6216\u8005\u6362\u4e00\u4e9b\u53ef\u4ee5\u7ed9\u7530\u5730\u7167\u660e\u7684\u8424\u77f3\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAC0A==",
                    "tooltip": "<strong>\u6742\u8349II</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u626b\u63cf\u871c\u8702\u3001\u79cd\u5b50\u4ee5\u53ca\u66f4\u591a</br>\u6742\u8349"
                },
                {
                    "name": "\u5c0f\u9ea6\u65f6\u523b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/634.png",
                    "x": 444.0,
                    "y": 60.0,
                    "data": "\u662f\u65f6\u5019\u79cd\u4e9b\u5c0f\u9ea6,\u7528\u4e8e\u52a8\u7269\u9677\u9631\u4e2d\u6240\u9700\u8981\u7684\u8c37\u7269\u8bf1\u9975.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACeg==",
                    "tooltip": "<strong>\u5c0f\u9ea6\u65f6\u523b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>...\u4e00\u5206\u6536\u83b7"
                },
                {
                    "name": "\u5c0f\u9ea6\u6c41",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1272.png",
                    "x": 540.0,
                    "y": 108.0,
                    "data": "\u917f\u9020\u5564\u9152\u6216\u8005\u5176\u4ed6\u542b\u9152\u7cbe\u996e\u6599\u7684\u7b2c\u4e00\u6b65\u5c31\u662f\u5236\u53d6\u5c0f\u9ea6\u6c41.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE-A==",
                    "tooltip": "<strong>\u5c0f\u9ea6\u6c41</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5c0f\u9ea6\u65f6\u523b"
                },
                {
                    "name": "Bob\u5230\u5e95\u662f\u8c01?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1950.png",
                    "x": 396.0,
                    "y": 396.0,
                    "data": "\u60f3\u8981\u4e9b\u7eff\u5b9d\u77f3\u7528\u6765\u4e70\u4e1c\u897f\u6216\u662f\u505a\u4e9b\u522b\u7684?\u8fd9\u91cc\u6709\u4e2a\u6765\u6e90.%n%n\u8bd1\u8005\u6ce8:Bobsyeruncleranks,\u8fd9\u4e2a\u4f5c\u7269\u5c31\u53eb\u8fd9,\u6055\u6211\u624d\u758f\u5b66\u6d45,\u5b9e\u5728\u4e0d\u77e5\u9053\u600e\u4e48\u7ffb...Bob's-Yer-Uncle\u662fhappy-Mondys\u4e50\u961f\u7684\u4e00\u9996\u6b4c,\u4e5f\u662f\u4e00\u4e2a\u829d\u52a0\u54e5\u4e50\u961f.%n%n\u8bd1\u8005\u518d\u6ce8:\u8fd9\u4e2a\u8bcd\u7684\u6700\u521d\u6765\u6e90\u662f\u82f1\u56fd\u719f\u8bed\"Bob's your uncle\",\u610f\u4e3a\"\u5c31\u5728\u8fd9\u513f\u4e86\"\u6216\u8005\"\u8fd9\u5c31\u5b8c\u6210\u4e86\".",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHng==",
                    "tooltip": "<strong>Bob\u5230\u5e95\u662f\u8c01?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94a2\u53f62"
                },
                {
                    "name": "\u4e3a\u4ec0\u4e48\u6211\u7684\u4f5c\u7269\u50cf\u9e21\u4e00\u6837\u53eb?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1801.png",
                    "x": 60.0,
                    "y": 204.0,
                    "data": "\u56e0\u4e3a\u5b83\u80fd\u4e0b\u86cb!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHCQ==",
                    "tooltip": "<strong>\u4e3a\u4ec0\u4e48\u6211\u7684\u4f5c\u7269\u50cf\u9e21\u4e00\u6837\u53eb?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5927\u5730\u6bcd\u4eb2\u7684\u4e73\u6c41"
                },
                {
                    "name": "\u5deb\u672f\u79cd\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1560.png",
                    "x": 444.0,
                    "y": 12.0,
                    "data": "\u8981\u83b7\u5f97\u5deb\u672f\u79cd\u5b50,\u4f60\u9700\u8981\u5728\u8fdc\u79bb\u6c34\u7684\u8349\u5730\u4e0a\u4f7f\u7528\u9504\u5934.\u8981\u6253\u5f00\u5269\u4f59\u7684\u4efb\u52a1\u7ebf,\u4f60\u9700\u8981\u5b8c\u6210\u795e\u79d8\u65f6\u4ee3\u7684\u4efb\u52a1\u3001\u7814\u7a76\u9b54\u5bfc\u624b\u518c\u4e2d\u5deb\u672f\u7ae0\u8282\u7684\u6761\u76ee.%n%n\u4f20\u8bf4,\u5f53\u66fc\u5fb7\u62c9\u8349\u7684\u6839\u88ab\u6316\u51fa\u6765\u65f6,\u5b83\u4f1a\u5c16\u53eb\u5e76\u6740\u6b7b\u6240\u6709\u542c\u5230\u5b83\u7684\u4eba.\u8fd9\u79cd\u8bf4\u6cd5\u53ea\u662f\u90e8\u5206\u6b63\u786e.\u4e00\u4e2a\u5b8c\u5168\u6210\u957f\u7684\u66fc\u5fb7\u62c9\u8349\u53ef\u80fd\u4f1a\u5c16\u53eb,\u7ed9\u5468\u56f4\u7684\u4eba\u5e26\u6765\u5de8\u5927\u7684\u4e0d\u9002.\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6700\u597d\u5728\u665a\u4e0a\u6536\u83b7\u66fc\u5fb7\u62c9\u8349\u6839\u7684\u539f\u56e0,\u90a3\u65f6\u690d\u7269\u66f4\u53ef\u80fd\u5904\u4e8e\u4f11\u7720\u72b6\u6001. \u66fc\u5fb7\u62c9\u8349\u662f\u7528\u66fc\u5fb7\u62c9\u8349\u79cd\u5b50\u79cd\u690d\u800c\u51fa\u7684,\u53ef\u4ee5\u901a\u8fc7\u624b\u6301\u9504\u53f3\u952e\u8349\u5730,\u6216\u7834\u574f\u90e8\u5206(\u6216\u5b8c\u5168)\u6210\u957f\u7684\u66fc\u5fb7\u62c9\u8349\u6765\u83b7\u5f97.%n%n\u7834\u574f\u5b8c\u5168\u6210\u957f\u7684\u66fc\u5fb7\u62c9\u8349\u5c06\u4ea7\u751f\u66fc\u5fb7\u62c9\u8349\u6839\u548c\u66fc\u5fb7\u62c9\u8349\u79cd\u5b50,\u8fd8\u53ef\u80fd\u4f1a\u5524\u9192\u66fc\u5fb7\u62c9\u8349\u5e76\u5bfc\u81f4\u5404\u79cd\u5404\u6837\u7684\u9ebb\u70e6(\u4ee5\u53ca\u5bf9\u8033\u6735\u7684\u6298\u78e8!).%n%n\u98a0\u8304\u79cd\u5b50\u53ef\u4ee5\u79cd\u690d\u5e76\u6700\u7ec8\u6210\u957f\u4e3a\u591a\u9636\u6bb5\u7684\u98a0\u8304.\u53ef\u4ee5\u6536\u83b7\u5b8c\u5168\u6210\u957f\u7684\u98a0\u8304\u4ee5\u83b7\u5f97\u66f4\u591a\u7684\u98a0\u8304\u79cd\u5b50\u548c\u98a0\u8304\u82b1.%n%n\u96ea\u73b2\u82b1\u79cd\u5b50\u53ef\u4ee5\u79cd\u690d\u5e76\u6700\u7ec8\u6210\u957f\u4e3a\u591a\u9636\u6bb5\u7684\u96ea\u94c3\u82b1.\u53ef\u4ee5\u6536\u83b7\u5b8c\u5168\u6210\u719f\u7684\u96ea\u94c3\u82b1\u4ee5\u83b7\u5f97\u66f4\u591a\u7684\u96ea\u73b2\u82b1\u79cd\u5b50,\u96ea\u7403,\u5076\u5c14\u4f1a\u6389\u843d\u51b0\u9488.%n%n\u6c34\u6d0b\u84df\u79cd\u5b50\u53ef\u4ee5\u79cd\u690d\u5e76\u6700\u7ec8\u6210\u957f\u4e3a\u591a\u9636\u6bb5\u7684\u6c34\u6d0b\u84df.\u53ef\u4ee5\u6536\u83b7\u5b8c\u5168\u6210\u719f\u7684\u6c34\u6d0b\u84df,\u4ee5\u83b7\u5f97\u66f4\u591a\u7684\u6c34\u6d0b\u84df\u79cd\u5b50\u548c\u6c34\u6d0b\u84df\u7403\u830e.\u6c34\u6d0b\u84df\u79cd\u5b50\u53ea\u80fd\u79cd\u690d\u5728\u9759\u6c34\u65b9\u5757\u4e0a.%n%n\u5927\u849c\u662f\u4e00\u79cd\u53ef\u79cd\u690d\u7684\u4f5c\u7269,\u53ef\u7528\u4e8e\u5236\u4f5c\u7f8e\u5473\u7684\u98df\u7269,\u5e76\u80fd\u514b\u5236\u5438\u8840\u9b3c.\u5927\u849c\u53ef\u4ee5\u901a\u8fc7\u624b\u6301\u9504\u53f3\u952e\u8349\u5730\u6765\u83b7\u5f97,\u5c3d\u7ba1\u5b83\u5177\u6709\u975e\u5e38\u4f4e\u7684\u6389\u843d\u51e0\u7387.\u5b83\u53ef\u4ee5\u79cd\u690d\u5728\u8015\u5730\u4e0a,\u5e76\u5206\u4e94\u4e2a\u9636\u6bb5\u751f\u957f.\u5f53\u5b8c\u5168\u6210\u957f\u65f6,\u53ef\u4ee5\u6536\u83b7\u6700\u591a\u4e09\u4e2a\u6389\u843d\u7684\u5927\u849c.\u5b83\u53ef\u4ee5\u91cd\u65b0\u79cd\u690d,\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5408\u6210.%n%n\u5927\u849c\u8fd8\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u8089\u6c64,\u7279\u522b\u7684\u8425\u517b\u9910.\u5b83\u4e5f\u662f\u5236\u4f5c\u5927\u849c\u73af\u7684\u4e3b\u8981\u6210\u5206,\u5927\u849c\u73af\u662f\u9632\u6b62\u5438\u8840\u9b3c\u7684\u6709\u6548\u5de5\u5177.\u6700\u540e,\u5973\u5deb\u53ef\u4ee5\u4f7f\u7528\u5927\u849c\u5728\u5deb\u5e08\u70bc\u836f\u9505\u4e2d\u7684\u5236\u4f5c\u5438\u8840\u9b3c\u5f31\u5316\u836f\u5242,\u72e9\u5deb\u4eba\u8fd8\u53ef\u4ee5\u7528\u5927\u849c\u5236\u4f5c\u72e9\u5deb\u9ece\u660e\u5957\u88c5.%n%n\u72fc\u6bd2\u8349\u79cd\u5b50\u53ef\u4ee5\u79cd\u690d\u5e76\u6700\u7ec8\u6210\u957f\u4e3a\u4e24\u683c\u9ad8\u7684\u72fc\u6bd2\u8349.\u53ef\u4ee5\u6536\u83b7\u5b8c\u5168\u6210\u957f\u7684\u72fc\u6bd2\u8349,\u4ee5\u83b7\u5f97\u66f4\u591a\u7684\u72fc\u6bd2\u8349\u79cd\u5b50\u548c\u72fc\u6bd2\u8349.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGGA==",
                    "tooltip": "<strong>\u5deb\u672f\u79cd\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u56ed\u4e01"
                },
                {
                    "name": "\u5565\u5565\u5206\u4e0d\u6e05\u695a?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1920.png",
                    "x": 12.0,
                    "y": 12.0,
                    "data": "\u8bb8\u591a\u690d\u7269\u770b\u8d77\u6765\u90fd\u5dee\u4e0d\u591a.\u603b\u6709\u4e00\u5929\u4f60\u53ef\u4ee5\u7528\u673a\u5668\u533a\u5206\u5b83\u4eec,\u8fd8\u80fd\u5f97\u77e5\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f.\u4f46\u662f\u73b0\u5728\u4f60\u9700\u8981\u5236\u4f5c\u4e00\u4e2a\u7b80\u6613\u7684\u690d\u7269\u900f\u955c,\u81f3\u5c11\u80fd\u5206\u8fa8\u5b83\u4eec\u7684\u7269\u79cd.%n%n\u4f7f\u7528\u900f\u955c\u540e,\u4f60\u53ef\u4ee5\u77e5\u9053\u4ee5\u4e0b\u4fe1\u606f:%n\u79cd\u7c7b%n\u4f5c\u7269\u7b49\u7ea7%n\u662f\u5426\u53ef\u4ee5\u751f\u957f(\u67d0\u4e9b\u4f5c\u7269\u6709\u7279\u6b8a\u8981\u6c42)%n\u662f\u5426\u53ef\u4ee5\u6536\u83b7%n\u751f\u957f\u72b6\u6001,\u5230\u4e0b\u4e00\u9636\u6bb5\u7684\u8fdb\u5ea6",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHgA==",
                    "tooltip": "<strong>\u5565\u5565\u5206\u4e0d\u6e05\u695a?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u519c\u573a\"\u667a\u8005\"\u624b\u518c"
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
                    "source": "\u7ebf\u6750\u8f67\u673av0.2\u6d4b\u8bd5\u7248",
                    "target": "\u9493\u9c7c\u4f19\u4f34"
                },
                {
                    "source": "\u53ef\u518d\u751f\u77f3\u6cb9",
                    "target": "\u5973\u5b69\u6700\u597d\u7684\u670b\u53cb"
                },
                {
                    "source": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "target": "\u5206\u6790\u4f60\u7684\u4f5c\u7269"
                },
                {
                    "source": "\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV",
                    "target": "\u5206\u6790\u4f60\u7684\u4f5c\u7269"
                },
                {
                    "source": "\u94a2\u53f62",
                    "target": "\u6211\u6388\u4e88\u4f60\u9a91\u58eb\u79f0\u53f7"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u52a8\u7269\u9677\u9631"
                },
                {
                    "source": "...\u4e00\u5206\u6536\u83b7",
                    "target": "\u5927\u9ea6\u65f6\u95f4"
                },
                {
                    "source": "\u94c1\u6728\u6bd4\u666e\u901a\u6728\u6750\u597d",
                    "target": "\u4f60\u6700\u597d\u628a\u4f60\u7684\u9632\u5316\u670d\u7a7f\u4e0a"
                },
                {
                    "source": "\u7518\u8517\u548c\u6811\u8102",
                    "target": "\u6bd4\u725b\u5976\u597d"
                },
                {
                    "source": "\u4e00\u7247\u53c8\u4e00\u7247",
                    "target": "\u730e\u6740\u70c8\u7130\u4eba\u592a\u8fc7\u56f0\u96be?"
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
                    "source": "\u730e\u6740\u70c8\u7130\u4eba\u592a\u8fc7\u56f0\u96be?",
                    "target": "\u7164...\u6765\u81ea\u51cb\u7075\u7518\u8517?"
                },
                {
                    "source": "\u4e66",
                    "target": "\u61d2\u4eba\u53a8\u623f(Cooking for Blockheads)"
                },
                {
                    "source": "\u70ed\u68c9\u82b1\u7cd6",
                    "target": "\u51b7\u5374\u4f60\u7684\u68c9\u82b1\u7cd6"
                },
                {
                    "source": "\u67d4\u8f6f\u7684\u76ae\u9769",
                    "target": "\u9999\u8106\u8150\u8089"
                },
                {
                    "source": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "target": "\u4f5c\u7269\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV",
                    "target": "\u4f5c\u7269\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u5206\u6790\u4f60\u7684\u4f5c\u7269",
                    "target": "\u4f5c\u7269\u4fe1\u606f"
                },
                {
                    "source": "\u4f60\u5c1d\u8fc7\u91d1\u5c5e\u7684\u5473\u9053\u4e48?",
                    "target": "\u6df1\u84dd\u8272\u7684\u84dd\u5b9d\u77f3\u4e4b\u6d77"
                },
                {
                    "source": "\u51b7\u5374\u4f60\u7684\u68c9\u82b1\u7cd6",
                    "target": "Dezil\u7684\u68c9\u82b1\u7cd6"
                },
                {
                    "source": "...\u4e00\u5206\u6536\u83b7",
                    "target": "\u751f\u9762\u56e2"
                },
                {
                    "source": "\u9762\u7c89",
                    "target": "\u751f\u9762\u56e2"
                },
                {
                    "source": "\u611f\u89c9\u6709\u70b9\u50cf\u83dc\u9e1f...",
                    "target": "\u4f60\u5c1d\u8fc7\u91d1\u5c5e\u7684\u5473\u9053\u4e48?"
                },
                {
                    "source": "\u4f5c\u7269\u4fe1\u606f",
                    "target": "\u66f4\u591a\u72b6\u6001\u6570\u636e"
                },
                {
                    "source": "\u4f0f\u7279\u52a0",
                    "target": "\u91ce\u683c(\u5fb7\u56fd\u91ce\u683c\u724c\u5229\u53e3\u9152)"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u4f5c\u7269\u52a0\u901f"
                },
                {
                    "source": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "target": "\u611f\u89c9\u6709\u70b9\u50cf\u83dc\u9e1f..."
                },
                {
                    "source": "\u519c\u573a\"\u667a\u8005\"\u624b\u518c",
                    "target": "\u521d\u6b21\u6742\u4ea4"
                },
                {
                    "source": "...\u4e00\u5206\u6536\u83b7",
                    "target": "\u7b2c\u4e00\u4e2a\u624b\u4f5c\u9762\u5305"
                },
                {
                    "source": "\u751f\u9762\u56e2",
                    "target": "\u7b2c\u4e00\u4e2a\u624b\u4f5c\u9762\u5305"
                },
                {
                    "source": "\u6355\u9c7c\u9677\u9631",
                    "target": "\u9c7c\u7c7b\u8bf1\u9975"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u6355\u9c7c\u9677\u9631"
                },
                {
                    "source": "\u9493\u9c7c\u4f19\u4f34",
                    "target": "\u6355\u9c7c\u9677\u9631"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u6355\u9c7c\u9677\u96312.0"
                },
                {
                    "source": "\u6355\u9c7c\u9677\u9631",
                    "target": "\u6355\u9c7c\u9677\u96312.0"
                },
                {
                    "source": "\u5927\u9ea6\u65f6\u95f4",
                    "target": "\u9762\u7c89"
                },
                {
                    "source": "...\u4e00\u5206\u6536\u83b7",
                    "target": "\u9762\u7c89"
                },
                {
                    "source": "\u5c0f\u9ea6\u65f6\u523b",
                    "target": "\u9762\u7c89"
                },
                {
                    "source": "\u519c\u573a\"\u667a\u8005\"\u624b\u518c",
                    "target": "\u82b1\u7684\u529b\u91cf"
                },
                {
                    "source": "HV\u5377\u677f\u673a",
                    "target": "\u98df\u72692.0"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u6de1\u6c34\u548c\u725b\u5976"
                },
                {
                    "source": "\u53a8\u5177",
                    "target": "\u714e\u9e21\u86cb"
                },
                {
                    "source": "\u52a8\u7269\u9677\u9631",
                    "target": "\u6c34\u679c\u8bf1\u9975"
                },
                {
                    "source": "\u6a61\u6811\u4e0d\u662f\u82f9\u679c\u6811",
                    "target": "\u6c34\u679c\u8bf1\u9975"
                },
                {
                    "source": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "target": "\u8f6c\u57fa\u56e0\u4f5c\u7269"
                },
                {
                    "source": "\u6211\u4e0d\u53bb\u5c31\u5c71,\u8ba9\u5c71\u6765\u5c31\u6211",
                    "target": "\u8f6c\u57fa\u56e0\u4f5c\u7269"
                },
                {
                    "source": "\u96be\u770b\u7684\u7cd6\u6d46",
                    "target": "\u70ed\u68c9\u82b1\u7cd6"
                },
                {
                    "source": "\u52a8\u7269\u9677\u9631",
                    "target": "\u8c37\u7269\u8bf1\u9975"
                },
                {
                    "source": "\u5c0f\u9ea6\u65f6\u523b",
                    "target": "\u8c37\u7269\u8bf1\u9975"
                },
                {
                    "source": "\u4e00\u7247\u53c8\u4e00\u7247",
                    "target": "\u8424\u77f31"
                },
                {
                    "source": "\u4e00\u7247\u53c8\u4e00\u7247",
                    "target": "\u706b\u836f?\u66f4\u50cf\u571f\u7070!"
                },
                {
                    "source": "\u714e\u9e21\u86cb",
                    "target": "\u4e30\u76db\u7684\u65e9\u9910"
                },
                {
                    "source": "\u7f8e\u5473\u70e4\u9762\u5305",
                    "target": "\u4e30\u76db\u7684\u65e9\u9910"
                },
                {
                    "source": "\u679c\u6c41",
                    "target": "\u4e30\u76db\u7684\u65e9\u9910"
                },
                {
                    "source": "\u9a6c\u94c3\u85af\u86cb\u7cd5",
                    "target": "\u4e30\u76db\u7684\u65e9\u9910"
                },
                {
                    "source": "\u9ec4\u8702\u8702\u871c",
                    "target": "\u8702\u871c\u7684\u7cd6"
                },
                {
                    "source": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "target": "\u5564\u9152\u82b1,\u5564\u9152\u7684\u6765\u6e90"
                },
                {
                    "source": "\u597d\u7d2f...\u5fc5\u987b...\u7761\u89c9...",
                    "target": "\u4e0d\u518d\u9965\u997f"
                },
                {
                    "source": "\u751f\u9762\u56e2",
                    "target": "\u6211\u559c\u6b22\u5927\u4e09\u660e\u6cbb"
                },
                {
                    "source": "\u4e00\u7247\u53c8\u4e00\u7247",
                    "target": "\u94c1\u6728\u6bd4\u666e\u901a\u6728\u6750\u597d"
                },
                {
                    "source": "\u8f6f\u9524\u5927\u5192\u9669!",
                    "target": "\u679c\u6c41"
                },
                {
                    "source": "\u72ec\u773c\u5965\u4e01\u4e4b\u5b50",
                    "target": "\u8def\u8fc7\u65f6\u6321\u597d\u4f60\u7684\u79c1\u5904,\u5c0f\u5fc3\u8f90\u5c04"
                },
                {
                    "source": "\u53a8\u5177",
                    "target": "\u5c31\u50cf\u5988\u5988\u4ee5\u524d\u505a\u7684"
                },
                {
                    "source": "\u7b2c\u4e00\u4e2a\u624b\u4f5c\u9762\u5305",
                    "target": "\u5c31\u50cf\u5988\u5988\u4ee5\u524d\u505a\u7684"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u53a8\u5177"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "target": "\u53a8\u51772.0"
                },
                {
                    "source": "\u53a8\u5177",
                    "target": "\u53a8\u51772.0"
                },
                {
                    "source": "\u77f3\u6cb9\u63d0\u7eaf",
                    "target": "Korn and Doppelkorn(\u79d1\u6069\u9152\u548c\u7ecf\u8fc7\u4e24\u6b21\u84b8\u998f\u7684\u79d1\u6069\u9152)"
                },
                {
                    "source": "\u5c0f\u9ea6\u6c41",
                    "target": "Korn and Doppelkorn(\u79d1\u6069\u9152\u548c\u7ecf\u8fc7\u4e24\u6b21\u84b8\u998f\u7684\u79d1\u6069\u9152)"
                },
                {
                    "source": "\u94c1\u6728\u6bd4\u666e\u901a\u6728\u6750\u597d",
                    "target": "\u94a2\u53f62"
                },
                {
                    "source": "\u4e00\u7247\u53c8\u4e00\u7247",
                    "target": "\u9b54\u6cd5\u91d1\u5c5e\u8393(Magic Metal Berry)"
                },
                {
                    "source": "\u7518\u8517\u548c\u6811\u8102",
                    "target": "\u6765\u81ea\u5927\u5730\u7684\u91d1\u5c5e"
                },
                {
                    "source": "\u6765\u81ea\u5927\u5730\u7684\u91d1\u5c5e",
                    "target": "\u5929\u5916\u91d1\u5c5e"
                },
                {
                    "source": "\u7d20\u98df\u76ae\u9769?",
                    "target": "\u5927\u5730\u6bcd\u4eb2\u7684\u4e73\u6c41"
                },
                {
                    "source": "\u8f6c\u57fa\u56e0\u4f5c\u7269",
                    "target": "\u6700\u9002\u4f5c\u7269/\u6700\u5f3a\u4f5c\u7269"
                },
                {
                    "source": "\u5564\u9152\u82b1,\u5564\u9152\u7684\u6765\u6e90",
                    "target": "More Red,less Wheat(\u66f4\u591a\u7684\u7ea2\u8272,\u66f4\u5c11\u7684\u5c0f\u9ea6)"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u519c\u573a\"\u667a\u8005\"\u624b\u518c"
                },
                {
                    "source": "\u7518\u8517\u548c\u6811\u8102",
                    "target": "\u82d4\u85d3"
                },
                {
                    "source": "\u7518\u8517\u548c\u6811\u8102",
                    "target": "\u65b0\"\u7ebf\"\u7a0b"
                },
                {
                    "source": "\u53a8\u5177",
                    "target": "\u9e21,\u4e00\u53ea\u4e5f\u522b\u60f3\u8dd1!"
                },
                {
                    "source": "\u751f\u9762\u56e2",
                    "target": "\u9e21,\u4e00\u53ea\u4e5f\u522b\u60f3\u8dd1!"
                },
                {
                    "source": "\u9b54\u6cd5\u91d1\u5c5e\u8393(Magic Metal Berry)",
                    "target": "\u5176\u4ed6\u9b54\u6cd5\u82b1"
                },
                {
                    "source": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "target": "\u81ea\u4ea7\u80a5\u6599\u7684\u690d\u7269?"
                },
                {
                    "source": "\u53a8\u5177",
                    "target": "\u9a6c\u94c3\u85af\u86cb\u7cd5"
                },
                {
                    "source": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "target": "\u9a6c\u73b2\u85af\u3001\u80e1\u841d\u535c\u3001\u5357\u74dc\u548c\u897f\u74dc."
                },
                {
                    "source": "\u53a8\u5177",
                    "target": "\u5357\u74dc\u6d3e"
                },
                {
                    "source": "\u7518\u8517\u548c\u6811\u8102",
                    "target": "\u6211\u66f4\u559c\u6b22\u6cb9\u83dc"
                },
                {
                    "source": "\u6c34\u5fc3\u4e4b\u917f",
                    "target": "\u771f\u6b63op\u7684\u98df\u7269"
                },
                {
                    "source": "IV\u6405\u62cc\u673a",
                    "target": "\u771f\u6b63op\u7684\u98df\u7269"
                },
                {
                    "source": "\u6df1\u84dd\u8272\u7684\u84dd\u5b9d\u77f3\u4e4b\u6d77",
                    "target": "\u7ea2\u914d\u9ec4"
                },
                {
                    "source": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5",
                    "target": "\u7518\u8517\u548c\u6811\u8102"
                },
                {
                    "source": "\u7164...\u6765\u81ea\u51cb\u7075\u7518\u8517?",
                    "target": "\u53ef\u518d\u751f\u77f3\u6cb9"
                },
                {
                    "source": "\u4f5c\u7269\u81ea\u52a8\u5316",
                    "target": "\u673a\u68b0\u5316\u4f5c\u7269\u6536\u5272"
                },
                {
                    "source": "\u5de5\u4e1a\u4e4b\u8def",
                    "target": "\u6717\u59c6\u9152"
                },
                {
                    "source": "\u7164...\u6765\u81ea\u51cb\u7075\u7518\u8517?",
                    "target": "\u72ec\u773c\u5965\u4e01\u4e4b\u5b50"
                },
                {
                    "source": "\u4e59\u9170\u6c34\u6768\u9178(C9H8O4)...\u6c2f\u5316\u94a0(NaCl)...\u6c34(H2O)...",
                    "target": "\u52a0\u5feb\u4f60\u7684\u690d\u7269\u751f\u957f\u8fdb\u5ea6"
                },
                {
                    "source": "\u521d\u6b21\u6742\u4ea4",
                    "target": "\u52a0\u5feb\u4f60\u7684\u690d\u7269\u751f\u957f\u8fdb\u5ea6"
                },
                {
                    "source": "\u4e00\u7247\u53c8\u4e00\u7247",
                    "target": "\u77f3\u82af\u8349(Stone lillies)"
                },
                {
                    "source": "\u7c89\u788e v0.1 Alpha",
                    "target": "\u7518\u8517"
                },
                {
                    "source": "\u7518\u8517\u548c\u6811\u8102",
                    "target": "\u751c\u5230\u7259\u4e86"
                },
                {
                    "source": "\u7518\u8517\u548c\u6811\u8102",
                    "target": "\u4e00\u7247\u53c8\u4e00\u7247"
                },
                {
                    "source": "...\u4e00\u5206\u6536\u83b7",
                    "target": "\u7f8e\u5473\u70e4\u9762\u5305"
                },
                {
                    "source": "\u7b2c\u4e00\u4e2a\u624b\u4f5c\u9762\u5305",
                    "target": "\u7f8e\u5473\u70e4\u9762\u5305"
                },
                {
                    "source": "\u8702\u871c\u7684\u7cd6",
                    "target": "\u56e4\u79ef:\u7cd6"
                },
                {
                    "source": "\u7518\u8517",
                    "target": "\u56e4\u79ef:\u7cd6"
                },
                {
                    "source": "\u4e00\u7247\u53c8\u4e00\u7247",
                    "target": "\u5927\u5730\u5728\u54ed\u6ce3"
                },
                {
                    "source": "\u53d1\u9175\u917f\u9152!",
                    "target": "\u5de5\u4e1a\u4e4b\u8def"
                },
                {
                    "source": "\u7518\u8517",
                    "target": "\u5de5\u4e1a\u4e4b\u8def"
                },
                {
                    "source": "\u6742\u8349",
                    "target": "\u94f2\u5b50\u65f6\u95f4\u5230"
                },
                {
                    "source": "\u8fdb\u9636\u5377\u677f\u673a",
                    "target": "\u94f2\u5b50\u65f6\u95f4\u5230"
                },
                {
                    "source": "\u521d\u6b21\u6742\u4ea4",
                    "target": "\u66f4\u597d(?)\u7684\u6ce5\u571f"
                },
                {
                    "source": "\u771f\u6b63op\u7684\u98df\u7269",
                    "target": "\u96be\u770b\u7684\u7cd6\u6d46"
                },
                {
                    "source": "\u521d\u6b21\u6742\u4ea4",
                    "target": "\u79cd\u5b50\u4e0d\u518d\u672a\u77e5"
                },
                {
                    "source": "\u4e00\u7247\u53c8\u4e00\u7247",
                    "target": "\u7d20\u98df\u4e3b\u4e49\u8005,\u4f46\u4ecd\u60f3\u5403\u8089?"
                },
                {
                    "source": "\u65b0\"\u7ebf\"\u7a0b",
                    "target": "\u7d20\u98df\u76ae\u9769?"
                },
                {
                    "source": "\u52a8\u7269\u9677\u9631",
                    "target": "\u852c\u83dc\u8bf1\u9975"
                },
                {
                    "source": "\u5c0f\u9ea6\u6c41",
                    "target": "\u4f0f\u7279\u52a0"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #2",
                    "target": "\u4f0f\u7279\u52a0"
                },
                {
                    "source": "\u4e0b\u754c",
                    "target": "\u9ec4\u8702\u8702\u871c"
                },
                {
                    "source": "\u521d\u6b21\u6742\u4ea4",
                    "target": "\u5230\u5904\u90fd\u662f\u6c34"
                },
                {
                    "source": "\u519c\u573a\"\u667a\u8005\"\u624b\u518c",
                    "target": "\"\u76c6\u683d\"\u6811"
                },
                {
                    "source": "\u4f5c\u7269\u81ea\u52a8\u5316",
                    "target": "\u9664\u8349\u5242"
                },
                {
                    "source": "\u5de5\u4e1a\u917f\u9020",
                    "target": "\u9664\u8349\u5242"
                },
                {
                    "source": "\u521d\u6b21\u6742\u4ea4",
                    "target": "\u6742\u8349"
                },
                {
                    "source": "\u626b\u63cf\u871c\u8702\u3001\u79cd\u5b50\u4ee5\u53ca\u66f4\u591a",
                    "target": "\u6742\u8349II"
                },
                {
                    "source": "\u6742\u8349",
                    "target": "\u6742\u8349II"
                },
                {
                    "source": "...\u4e00\u5206\u6536\u83b7",
                    "target": "\u5c0f\u9ea6\u65f6\u523b"
                },
                {
                    "source": "\u5c0f\u9ea6\u65f6\u523b",
                    "target": "\u5c0f\u9ea6\u6c41"
                },
                {
                    "source": "\u94a2\u53f62",
                    "target": "Bob\u5230\u5e95\u662f\u8c01?"
                },
                {
                    "source": "\u5927\u5730\u6bcd\u4eb2\u7684\u4e73\u6c41",
                    "target": "\u4e3a\u4ec0\u4e48\u6211\u7684\u4f5c\u7269\u50cf\u9e21\u4e00\u6837\u53eb?"
                },
                {
                    "source": "\u56ed\u4e01",
                    "target": "\u5deb\u672f\u79cd\u5b50"
                },
                {
                    "source": "\u519c\u573a\"\u667a\u8005\"\u624b\u518c",
                    "target": "\u5565\u5565\u5206\u4e0d\u6e05\u695a?"
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
    