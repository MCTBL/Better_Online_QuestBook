
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
                    "name": "\u9ad8\u7ea7\u96c6\u7ebf\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2013.png",
                    "x": 156.0,
                    "y": 240.0,
                    "data": "\u9ad8\u7ea7\u96c6\u7ebf\u5668\u5177\u6709\u5de5\u5382\u7ebf\u7f06\u7684\u529f\u80fd,\u53ef\u4ee5\u6269\u5c55\u5de5\u5382\u7ba1\u7406\u5668\u7684\u8303\u56f4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH3Q==",
                    "tooltip": "<strong>\u9ad8\u7ea7\u96c6\u7ebf\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u96c6\u7ebf\u5668"
                },
                {
                    "name": "\u9ad8\u7ea7\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2004.png",
                    "x": 60.0,
                    "y": 240.0,
                    "data": "\u9ad8\u7ea7\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9\u53ef\u4ee5\u5bf9\u73a9\u5bb6\u7269\u54c1\u680f\u6dfb\u52a0/\u79fb\u9664\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH1A==",
                    "tooltip": "<strong>\u9ad8\u7ea7\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9"
                },
                {
                    "name": "\u4f60\u7684\u6240\u6709\u5361\u90fd\u5c5e\u4e8e\u6211\u4eec",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1749.png",
                    "x": 264.0,
                    "y": 72.0,
                    "data": "\u57fa\u677f\u5c31\u50cf\u4f60\u8ba4\u4e3a\u7684\u90a3\u6837;\u5b83\u4eec\u662f\u4f60\u5236\u4f5c\u7684\u6bcf\u5f20\u5361\u7528\u4e8e\u8fde\u63a5\u4e3b\u677f\u7684\u57fa\u7840\u90e8\u5206.%n%n\u6211\u5efa\u8bae\u5236\u4f5c\u5927\u91cf\u7684\u57fa\u677f\u4ee5\u5907\u672a\u6765\u751f\u4ea7\u5361.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG1Q==",
                    "tooltip": "<strong>\u4f60\u7684\u6240\u6709\u5361\u90fd\u5c5e\u4e8e\u6211\u4eec</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111"
                },
                {
                    "name": "\u7b97\u672f\u903b\u8f91\u7535\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1748.png",
                    "x": 306.0,
                    "y": 168.0,
                    "data": "\u7b97\u672f\u903b\u8f91\u7535\u8def\u7528\u4e8e\u8bb8\u591a\u90e8\u4ef6\u5408\u6210;\u5f80\u5f80\u8981\u63098-16\u4e2a\u751a\u81f364\u4e2a\u6210\u7ec4\u4f7f\u7528.%n%n\u6240\u4ee5\u8bf7\u786e\u4fdd\u4f9b\u5e94\u5145\u8db3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG1A==",
                    "tooltip": "<strong>\u7b97\u672f\u903b\u8f91\u7535\u8def</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111"
                },
                {
                    "name": "\u57fa\u7840\u80fd\u91cf\u663e\u793a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1764.png",
                    "x": 480.0,
                    "y": 216.0,
                    "data": "\u5728\u8fd9\u4e00\u90e8\u5206,\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528\u9002\u914d\u5668.\u5c06\u5b83\u653e\u5728\u4f60\u5de5\u4e1a\u9ad8\u7089(EBF)\u8fde\u7740\u7684\u7535\u6c60\u7bb1\u65c1\u8fb9,\u5e76\u7528\u7ebf\u7f06\u5c06\u5b83\u8fde\u63a5\u5230\u8ba1\u7b97\u673a.%n\u73b0\u5728\u8ba9\u6211\u4eec\u5728\u8ba1\u7b97\u673a\u4e0a\u952e\u5165'lua'\u4ee5\u6253\u5f00LUA\u73af\u5883,\u5728LUA\u73af\u5883\u4e2d\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u6d4b\u8bd5,\u4e0d\u9700\u8981\u62c5\u5fc3\u53cd\u590d\u4fdd\u5b58\u8c03\u8bd5\u7a0b\u5e8f\u7684\u9ebb\u70e6.%n%n\u952e\u5165'component.list()',\u4f1a\u663e\u793a\u4e00\u4e2a\u5305\u542b\u7ec4\u4ef6\u4e2d\u6240\u6709.list\u7684\u8868.\u6211\u4eec\u6b63\u5728\u5bfb\u627e\u7684\u662fgt_batterybuffer.%n\u5982\u679c\u9644\u8fd1\u6709\u592a\u591a\u4e1c\u897f,\u53ef\u80fd\u65e0\u6cd5\u663e\u793a\u5b8c\u5168,\u800c\u641c\u7d22\u6574\u4e2a\u7ec4\u4ef6\u5217\u8868\u7684\u65b9\u5f0f\u5bf9\u4e8e\u521d\u5b66\u8005\u6765\u8bf4\u592a\u9ad8\u7ea7\u4e86.%n%n\u73b0\u5728\u4e3a\u5b83\u5206\u914d\u4e00\u4e2a\u53d8\u91cf;\u4f8b\u5982'a",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG5A==",
                    "tooltip": "<strong>\u57fa\u7840\u80fd\u91cf\u663e\u793a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5b89\u88c5\u786c\u76d8"
                },
                {
                    "name": "BIOS",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1758.png",
                    "x": 300.0,
                    "y": 72.0,
                    "data": "ROM\u662f\u8ba1\u7b97\u673a\u542f\u52a8\u6240\u5fc5\u9700\u7684,\u4f60\u4e5f\u8981\u7528\u5b83\u4eec\u6765\u8fd0\u884c\u65e0\u4eba\u673a.%n%n\u4f60\u7684BIOS\u5199\u5728\u8fd9\u4e9b\u5c0f\u78c1\u76d8\u4e0a,\u7ed9\u6211\u4e00\u4e2a\u7a7a\u767d\u78c1\u76d8,\u6211\u4f1a\u628a\u57fa\u672c\u7684BIOS\u5199\u5230\u5b83\u4e0a\u9762.%n%n\u4f60\u4ee5\u540e\u4e5f\u53ef\u4ee5\u8fd9\u6837\u505a,\u53ea\u8981\u5236\u4f5c\u66f4\u591a\u8ba1\u7b97\u673a,\u5c06\u73b0\u6709\u7684BIOS\u5237\u5165\u65b0\u78c1\u76d8\u6216\u5c06\u7a7a\u767d\u7684\u78c1\u76d8\u4e0e\u624b\u518c\u7ed3\u5408\u8d77\u6765.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG3g==",
                    "tooltip": "<strong>BIOS</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111"
                },
                {
                    "name": "\u65b9\u5757\u66f4\u65b0\u68c0\u6d4b\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2017.png",
                    "x": 204.0,
                    "y": 144.0,
                    "data": "\u65b9\u5757\u66f4\u65b0\u68c0\u6d4b\u5668\u4f7f\u4f60\u7684\u5de5\u5382\u7ba1\u7406\u5668\u53ef\u4ee5\u68c0\u6d4b\u5230\u65b9\u5757\u66f4\u65b0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH4Q==",
                    "tooltip": "<strong>\u65b9\u5757\u66f4\u65b0\u68c0\u6d4b\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u65b9\u5757\u4ea4\u4e92\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2016.png",
                    "x": 12.0,
                    "y": 96.0,
                    "data": "\u65b9\u5757\u4ea4\u4e92\u5668\u53ef\u4ee5\u7834\u574f\u5e76\u62fe\u53d6\u6216\u662f\u653e\u7f6e\u65b9\u5757.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH4A==",
                    "tooltip": "<strong>\u65b9\u5757\u4ea4\u4e92\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u4f2a\u88c5\u65b9\u5757",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2000.png",
                    "x": 12.0,
                    "y": 144.0,
                    "data": "\u4f2a\u88c5\u65b9\u5757\u80fd\u4f7f\u7ebf\u7f06\u7684\u9762\u53ef\u4ee5\u6a21\u62df\u4efb\u610f\u5176\u4ed6\u65b9\u5757.\u4f2a\u88c5\u65b9\u5757\u5728\u5b8c\u6574\u7684\u7a0b\u5e8f\u8fd0\u884c\u4e2d\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c,\u56e0\u6b64\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u66f4\u65b0.%n%n\u8bf7\u6ce8\u610f,\u4f2a\u88c5\u65b9\u5757\u4e0e\u6240\u6709SFM\u7ebf\u7f06\u653e\u7f6e\u8d77\u6765\u6ca1\u4ec0\u4e48\u533a\u522b,\u4f46\u5b83\u65e0\u6cd5\u5145\u5f53\u5de5\u5382\u7ebf\u7f06,\u56e0\u6b64\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\u9700\u8981\u4e0e\u9ad8\u7ea7\u96c6\u7ebf\u5668\u7ed3\u5408\u4f7f\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH0A==",
                    "tooltip": "<strong>\u4f2a\u88c5\u65b9\u5757</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u96c6\u7ebf\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2012.png",
                    "x": 156.0,
                    "y": 192.0,
                    "data": "\u96c6\u7ebf\u5668\u4f7f\u4f60\u80fd\u5c06\u5c3d\u53ef\u80fd\u591a\u7684\u5176\u4ed6\u7ebf\u7f06\u7ec4\u5408\u5230\u4e00\u4e2a\u65b9\u5757\u4e2d.\u4f60\u53ef\u4ee5\u628a\u7ea2\u77f3\u4fe1\u53f7\u63a5\u6536\u5668\u548c\u7ea2\u77f3\u4fe1\u53f7\u53d1\u5c04\u5668\u4ee5\u53ca\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9\u7edf\u7edf\u6574\u5408\u5230\u4e00\u4e2a\u65b9\u5757\u4e2d.%n%n\u7ec4\u5408\u800c\u6765\u7684\u7ebf\u7f06\u662f\u4e00\u79cd\"\u7ec8\u7aef\"\u7c7b\u7684\u7ebf\u7f06,\u5b83\u4e0d\u80fd\u50cf\u5de5\u5382\u7ebf\u7f06\u4e00\u6837\u6269\u5c55\u5de5\u5382\u7ba1\u7406\u5668\u7684\u8303\u56f4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH3A==",
                    "tooltip": "<strong>\u96c6\u7ebf\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u786c\u5e01\u8f6c\u6362",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1777.png",
                    "x": 480.0,
                    "y": 72.0,
                    "data": "\u752832\u4e2aDoge\u5e01\u63621\u4e2a\u6bd4\u7279\u5e01.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG8Q==",
                    "tooltip": "<strong>\u786c\u5e01\u8f6c\u6362</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8ba1\u7b97\u673a\u673a\u7bb1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1754.png",
                    "x": 384.0,
                    "y": 228.0,
                    "data": "100\uff05\u9632\u6c34.(100\uff05\u6f0f\u6db2)%n%n\u8ba1\u7b97\u673a\u673a\u7bb1\u672c\u8d28\u4e0a\u662f\u6240\u6709\u8ba1\u7b97\u673a\u90e8\u4ef6\u7684\u96c6\u7ebf\u5668. \u81f3\u5c11\u9700\u8981\u4e24\u6839\u5185\u5b58,\u4e00\u4e2aBIOS-ROM,\u4e00\u4e2aCPU\u548c\u4e00\u4e2a\u786c\u76d8\u624d\u80fd\u8ba9\u4f60\u7684\u8ba1\u7b97\u673a\u6b63\u5e38\u8fd0\u884c.%n%n\u80fd\u91cf\u8f6c\u6362\u5668\u4f7f\u4f60\u80fd\u7528GT\u7535\u7f51\u4f9b\u7535,\u8f6f\u76d8\u9a71\u52a8\u5668\u5141\u8bb8\u4f60\u5c06\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u5230\u786c\u76d8\u9a71\u52a8\u5668\u4e0a. \u8fd9\u4e24\u4e2a\u90e8\u5206\u90fd\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684,\u4f46\u7531\u4e8e\u4e00\u4e9b\u5947\u602a\u7684\u539f\u56e0\u9700\u89812\u9636\u5fae\u82af\u7247\u6765\u5236\u4f5c;\u6240\u4ee5\u6211\u4f1a\u8ba9\u4f60\u7528\u4e00\u4e9b\u6750\u6599+1\u9636\u5fae\u82af\u7247\u6362\u4e00\u70b9-\u522b\u5f04\u4e22\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG2g==",
                    "tooltip": "<strong>\u8ba1\u7b97\u673a\u673a\u7bb1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u63a7\u5236\u5355\u5143",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1752.png",
                    "x": 270.0,
                    "y": 168.0,
                    "data": "\u5982\u6b64\u53ef\u63a7! \u5947\u602a\u7684\u662f,\u8fd9\u79cd\u90e8\u4ef6\u8981\u7528HV\u7535\u8def\u677f\u5236\u4f5c;\u6240\u4ee5\u8fd9\u513f\u63d0\u4f9b\u4e86\u4e00\u4e9b,\u4f60\u53ef\u4ee5\u7528MV\u7535\u8def\u677f\u4ee3\u66ffHV\u7535\u8def\u677f\u5151\u6362,\u7528\u4e8e\u5236\u4f5c\u4f60\u7b2c\u4e00\u53f0\u7535\u8111\u7684\u96f6\u4ef6.\u4e0d\u8981\u628a\u5b83\u4eec\u5168\u90e8\u653e\u5728\u4e00\u4e2a\u5730\u65b9!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG2A==",
                    "tooltip": "<strong>\u63a7\u5236\u5355\u5143</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111"
                },
                {
                    "name": "\u4f2a\u88c5\u65b9\u5757-\u53cc\u9762",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2002.png",
                    "x": 12.0,
                    "y": 192.0,
                    "data": "\u4f2a\u88c5\u65b9\u5757-\u53cc\u9762\u53ef\u4ee5\u8bbe\u7f6e\u5185\u4fa7\u548c\u5916\u4fa7\u72ec\u7acb\u4f2a\u88c5,\u6bd4\u5982\u4f60\u53ef\u4ee5\u8ba9\u5b83\u4f2a\u88c5\u6210\u73bb\u7483.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH0g==",
                    "tooltip": "<strong>\u4f2a\u88c5\u65b9\u5757-\u53cc\u9762</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f2a\u88c5\u65b9\u5757"
                },
                {
                    "name": "\u4ece\u90a3\u51fa\u6765\u7684\u6240\u6709\u827a\u672f\u5bb6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2719.png",
                    "x": 432.0,
                    "y": 72.0,
                    "data": "\u8fd9\u662f\u521b\u9020\u7ec4\u4ef6. \u57fa\u4e8e\u5404\u81ea\u7684\u79cd\u7c7b,\u8fd8\u6709T2\u548cT3\u7ec4\u4ef6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKnw==",
                    "tooltip": "<strong>\u4ece\u90a3\u51fa\u6765\u7684\u6240\u6709\u827a\u672f\u5bb6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111</br>\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "name": "\u78c1\u76d8\u9a71\u52a8\u5668(HDD)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1756.png",
                    "x": 384.0,
                    "y": 42.0,
                    "data": "\u78c1\u76d8\u9a71\u52a8\u5668\u662f\u4f60\u5b58\u50a8\u6240\u6709\u7a0b\u5e8f\u548c\u6570\u636e\u7684\u5730\u65b9.%n%n\u4f60\u6b63\u5728\u73a9Minecraft,\u4f46\u5e94\u8be5\u5df2\u7ecf\u77e5\u9053\u8fd9\u4e00\u70b9\u4e86.\u9664\u975e\u4f60\u7528\u7684\u662f\u56fa\u6001\u786c\u76d8(SSD).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG3A==",
                    "tooltip": "<strong>\u78c1\u76d8\u9a71\u52a8\u5668(HDD)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u9636"
                },
                {
                    "name": "Hello World!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1761.png",
                    "x": 432.0,
                    "y": 168.0,
                    "data": "\u9996\u5148,\u8ba9\u6211\u4eec\u5c06OpenOS\u5b89\u88c5\u5230\u8ba1\u7b97\u673a\u4e0a,\u8fd9\u6837\u4f60\u5c31\u4e0d\u5fc5\u603b\u662f\u9700\u8981\u9a71\u52a8\u5668\u4e2d\u7684\u8f6f\u76d8.\u952e\u5165'install',\u7136\u540e\u5728\u8be2\u95ee\u4f60\u662f\u5426\u8981\u5b89\u88c5OpenOS\u65f6\u952e\u5165'Y'.%n%n\u5b8c\u6210\u540e,\u53d6\u51fa\u8f6f\u76d8,\u6254\u5230\u5899\u4e0a,\u91cd\u65b0\u542f\u52a8\u8ba1\u7b97\u673a.%n%n\u952e\u5165'df'\u4ee5\u663e\u793a\u6240\u6709\u5f53\u524d\u6587\u4ef6\u7cfb\u7edf\u548c\u6302\u8f7d\u70b9,\u4f60\u4f1a\u6ce8\u610f\u5230\u4e00\u4e2a\u540d\u4e3aOpenOS\u7684\u6587\u4ef6;\u8fd9\u662f\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf\u540e\u7684\u786c\u76d8\u9a71\u52a8\u5668\u9ed8\u8ba4\u540d\u79f0.%n%n\u7528'label -a OpenOS HDD'\u66f4\u6539\u540d\u79f0,'-a'\u4f1a\u8ba9\u6307\u4ee4\u68c0\u67e5\u5b83\u540e\u9762\u8f93\u5165\u7684\u540d\u5b57. <-- \u5176\u4e2d\u4e00\u90e8\u5206\u663e\u7136\u662f\u9519\u8bef\u7684? \u8bf7\u544a\u8bc9\u6211\u4eec\u54ea\u90e8\u5206\u51fa\u9519\u4e86\u597d\u4e0d.%n%n\u73b0\u5728\u8ba9\u6211\u4eec\u73a9\u73a9,\u5236\u4f5c\u4f60\u7684\u7b2c\u4e00\u4e2a\u7a0b\u5e8f\u5427!\u8981\u4e0d\u505a\u70b9\u6709\u7528\u7684\u4e1c\u897f\u5427:\u952e\u5165'edit startup'\u8fdb\u5165\u65b0\u7a0b\u5e8f\"startup\"\u7684\u7f16\u8f91\u9875\u9762.\u6765\u505a\u4e9b\u7b80\u5355\u7684\u4e8b\u60c5,\u5c31\u6bd4\u5982\u6c38\u4e0d\u8fc7\u65f6\u7684'print(\"Hello World!\")'.%n%n\u73b0\u5728\u6309Ctrl+S\u4fdd\u5b58,\u6309Ctrl+W\u9000\u51fa\u8be5\u754c\u9762.\u56de\u5230\u4f60\u7684/home\u6839\u76ee\u5f55,\u952e\u5165'startup',\u4f60\u5c31\u4f1a\u770b\u5230\u5c4f\u5e55\u4e0a\u663e\u793a\u201cHello World!\u201d,\u5999\u4e0d\u5999?%n%n\u73b0\u5728\u6765\u8ba9\"startup\"(\u610f\u4e3a\"\u542f\u52a8\")\u771f\u6b63\u5728\u5f00\u673a\u542f\u52a8\u65f6\u5de5\u4f5c.\u952e\u5165'edit.shrc',\".shrc\"\u662f\u4e00\u4e2a\u795e\u79d8\u6587\u4ef6,\u5728\u542f\u52a8PC\u65f6\u8fd0\u884cshell\u547d\u4ee4.\u6240\u4ee5\u5728\".shrc\"\u4e2d\u952e\u5165'startup',\u4fdd\u5b58\u5e76\u91cd\u65b0\u542f\u52a8\u8ba1\u7b97\u673a.\u73b0\u5728\u4e00\u5f00\u673a\u5e94\u8be5\u5c31\u4f1a\u663e\u793a\u201cHello World!\u201d.\u5999\u4e0a\u52a0\u5999,\u662f\u5427?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG4Q==",
                    "tooltip": "<strong>Hello World!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "name": "\u6211\u559c\u6b22\u6309F5\u952e.",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1762.png",
                    "x": 384.0,
                    "y": 102.0,
                    "data": "\u5b83\u662f\u5982\u6b64\u4ee4\u4eba\u8033\u76ee\u4e00\u65b0.%n%n\u653e\u7f6e\u4e00\u4e2a\u9762\u5411\u5c4f\u5e55\u7684\u952e\u76d8-\u6216\u7c98\u5728\u5c4f\u5e55\u80cc\u9762,\u4f7f\u5176\u80fd\u591f\u4e0e\u8ba1\u7b97\u673a\u8fdb\u884c\u4ea4\u4e92.%n%n\u952e\u76d8\u662f\u7edd\u5bf9\u6709\u5fc5\u8981\u7684,\u6ca1\u6709\u5b83\u4f60\u51e0\u4e4e\u4ec0\u4e48\u90fd\u505a\u4e0d\u6210,\u4f46\u662f\u4e00\u65e6\u4f60\u6709\u4e86\u4e00\u4e2a\u65e0\u4f11\u6b62\u5730\u8fd0\u884c\u7684\u7a0b\u5e8f,\u90a3\u5c31\u53ef\u4ee5\u5b89\u5168\u5730\u62c6\u9664\u5b83\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG4g==",
                    "tooltip": "<strong>\u6211\u559c\u6b22\u6309F5\u952e.</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u667a\u529b\u662f\u9002\u5e94\u53d8\u5316\u7684\u80fd\u529b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1760.png",
                    "x": 384.0,
                    "y": 138.0,
                    "data": "\u8fd9\u4e2a\u65b9\u5757\u5141\u8bb8\u6211\u4eec\u7684\u8ba1\u7b97\u673a\u4e0eGT\u673a\u5668\u548c\u5176\u4ed6\u4e00\u5207\u8fdb\u884c\u4ea4\u4e92. \u5fc5\u9700\u54c1!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG4A==",
                    "tooltip": "<strong>\u667a\u529b\u662f\u9002\u5e94\u53d8\u5316\u7684\u80fd\u529b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2001.png",
                    "x": 60.0,
                    "y": 192.0,
                    "data": "\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9\u53ef\u4ee5\u8bbf\u95ee\u975e\u56fa\u5b9a\u5b9e\u4f53\u7684\u7269\u54c1\u680f,\u6bd4\u5982\u8bf4\u77ff\u8f66.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH0Q==",
                    "tooltip": "<strong>\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u7269\u54c1\u9600\u95e8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2010.png",
                    "x": 108.0,
                    "y": 192.0,
                    "data": "\u7269\u54c1\u9600\u95e8\u4f7f\u4f60\u7684\u5de5\u5382\u7ba1\u7406\u5668\u53ef\u4ee5\u5438\u51653x3x3\u7acb\u65b9\u4f53\u8303\u56f4\u5185\u7684\u6389\u843d\u7269.\u4f60\u8fd8\u53ef\u4ee5\u7528\u5b83\u5c06\u7269\u54c1\u6cbf\u5176\u9762\u671d\u65b9\u5411\u6254\u5230\u4e16\u754c\u91cc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH2g==",
                    "tooltip": "<strong>\u7269\u54c1\u9600\u95e8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "It's everytime these Transistors",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7132625864114193932.png",
                    "x": 336.0,
                    "y": 72.0,
                    "data": "Hello fellow achievement hunter. \n\nLooking for the OC Transistor to get one out of all these achievements?\nLucky you, because now you can craft it and it's realy simple.\n\nJust put one of your first GT Transistors in your 2x2 crafting grid and be happy with it's result. Don't forget to change it back the same way.",
                    "quest_id": "5mcwk7dYSBydA9KRHbW59A==",
                    "tooltip": "<strong>It's everytime these Transistors</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1989.png",
                    "x": 108.0,
                    "y": 96.0,
                    "data": "\u5de5\u5382\u7ba1\u7406\u5668\u662f\u53f2\u5854\u897f...\u6211\u662f\u8bf4\u53f2\u8482\u592b\u5de5\u5382\u7ba1\u7406(SFM)\u7684\u6838\u5fc3\u65b9\u5757. SFM\u662f\u4e00\u79cd\u9ad8\u9636\u81ea\u52a8\u5316\u7cfb\u7edf.\u867d\u7136AE2\u53ef\u4ee5\u5904\u7406\u8bb8\u591a\u4e0d\u540c\u7684\u5408\u6210\u4efb\u52a1,\u4f46SFM\u53ef\u4ee5\u5904\u7406\u66f4\u4e3a\u590d\u6742\u7684\u5408\u6210\u4efb\u52a1.\u5b9e\u9645\u4e0a,\u88c5\u914d\u7ebf\u4e0d\u4e00\u5b9a\u9700\u8981\u5b83.\u4f46\u4f60\u4ecd\u7136\u53ef\u4ee5\u6cbf\u7740\u8fd9\u4e2a\u601d\u8def\u8d70\u4e0b\u53bb.%n%n\u5de5\u5382\u7ebf\u7f06\u53ef\u5c06\u5de5\u5382\u7ba1\u7406\u5668\u8fde\u63a5\u5230\u7269\u54c1\u6216\u6d41\u4f53\u5bb9\u5668.%n%n\u5728\u67d0\u4e2a\u667a\u8005\u5199\u51fa\u667a\u8005\u624b\u518c\u4ee5\u524d,\u4f60\u6700\u597d\u7684\u9009\u62e9\u5c31\u662f\u5b9e\u9a8c,\u5728Discord\u4e0a\u5bfb\u6c42\u5e2e\u52a9,\u6216\u662f\u641c\u7d22Google.\u8fd9\u4e2a\u754c\u9762\u7c7b\u4f3c\u4e8e\u5927\u591a\u6570\u57fa\u4e8e\u56fe\u5f62\u7528\u6237\u754c\u9762\u7684\u81ea\u52a8\u5316\u7cfb\u7edf,\u6bd4\u5982LabView.%n%n\u8bbe\u8ba1\u7cdf\u7cd5\u7684SFM\u7cfb\u7edf\u4f1a\u5bfc\u81f4TPS\u4e0b\u964d.\u786e\u4fdd\u4f60\u7684\u8f93\u51fa\u7a7a\u7f6e,\u5343\u4e07\u4e0d\u8981\u586b\u6ee1.%n%n\u5de5\u5382\u7ebf\u7f06\u662fSFM\u7684\u57fa\u7840\u7ebf\u7f06.\u5b83\u4eec\u4f7f\u5de5\u5382\u7ba1\u7406\u5668\u80fd\u4e0e\u5404\u79cd\u5bb9\u5668\u4ea4\u4e92,\u5e76\u5145\u5f53\u7ba1\u7406\u5668\u4e0e\u5176\u4ed6\u8bbe\u5907\u4e4b\u95f4\u7684\u8fde\u63a5\u8005.%n%nmehdi2344\u8ba4\u4e3a\u6211\u5f00\u5934\u5199\u7684\u73a9\u7b11\u5f88\u7cdf\u7cd5,\u4f46\u4ed6\u662f\u4e2a\u7b28\u86cb,\u5c31\u8fd9\u6837.%n%n\u611f\u8c22\u8fd9\u4e9b\u4efb\u52a1\u7684\u4e66\u5199\u8005Nori-Silverrage!%n%n\u53e6\u5916,\u5728\u521b\u9020\u6a21\u5f0f\u6d4b\u8bd5\u65f6,\u53ef\u4ee5\u4f7f\u7528'\u521b\u9020\u7269\u54c1\u4f9b\u5e94\u5668'. Energistics-Connector\u88ab\u7981\u7528,\u539f\u56e0\u662f\u5b83\u65e0\u6cd5\u6b63\u786e\u5de5\u4f5c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHxQ==",
                    "tooltip": "<strong>\u5de5\u5382\u7ba1\u7406\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f"
                },
                {
                    "name": "\u5b89\u88c5\u786c\u76d8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1763.png",
                    "x": 432.0,
                    "y": 216.0,
                    "data": "\u597d\u5427,\u4f60\u6709\u4e86\u53f0\u7535\u8111,\u5b83\u4e00\u5f00\u673a\u5c31\u4f1a\u8bf4\u201cHello World!\u201d,\u4f60\u89c9\u5f97\u597d\u6781\u4e86,\u4eff\u4f5b\u81ea\u5df1\u80fd\u591f\u7edf\u6cbb\u4e16\u754c.%n%n\u73b0\u5728\u6211\u4eec\u6765\u8bbe\u7f6e\u786c\u76d8.\u518d\u6b21\u7528\u7f16\u8f91\u5668\u6253\u5f00\".shrc\",\u6309Enter\u6362\u5230\u4e0b\u4e00\u884c,\u7136\u540e\u952e\u5165'cd ../',\u8fd9\u4f1a\u628a\u4f60\u6b63\u5728\u67e5\u770b\u7684\u76ee\u5f55\u8f6c\u5230\u6839\u76ee\u5f55.%n%n\u518d\u6b21\u6362\u884c\u5e76\u952e\u5165'mount HDD C:'--\u4f55\u4e50\u800c\u4e0d\u4e3a\u5462,\u8fd9\u53ef\u662f\u7ecf\u5178(Classic)\u8bbe\u7f6e;\u8fd9\u4f1a\u628a\u6587\u4ef6\u9a71\u52a8\u5668\u6302\u8f7d\u5230\u4f60\u6240\u5728\u7684\u6587\u4ef6\u5939\u4e2d.\u7ee7\u7eed\u6362\u884c\u5e76\u952e\u5165'cd C:/',\u4fdd\u5b58\u5e76\u91cd\u65b0\u542f\u52a8\u8ba1\u7b97\u673a.%n%n\u73b0\u5728,\u5f00\u673a\u65f6\u5c31\u4f1a\u663e\u793a\u6f02\u4eae\u7684\"C:/\"!\u5c1d\u8bd5\u952e\u5165'mkdir programs',\u8fd9\u6837\u4f60\u5c31\u6709\u4e86\u4e00\u4e2a\u4e13\u95e8\u653e\u7f6e\u7a0b\u5e8f\u7684\u76ee\u5f55,\u4ee5\u4fbf\u7ec4\u7ec7\u6574\u7406.%n'cd programs'\u53ef\u4ee5\u8fdb\u5165\u7a0b\u5e8f\u76ee\u5f55,'cd ../'\u53ef\u4ee5\u56de\u5230\u4e0a\u7ea7\u76ee\u5f55;\u8fd8\u6709\u522b\u7684\u64cd\u4f5c,\u6bd4\u5982\u8bf4,\u4f60\u5728C:\u4e2d\u6709\u4e00\u4e2a\u540d\u4e3aapples\u7684\u6587\u4ef6\u5939,\u4f46\u662f\u4f60\u5c31\u5728apples\u91cc,\u952e\u5165'cd ../apples'\u4f60\u8fd8\u662f\u4f1a\u5728apples\u91cc.\"..\"\u57fa\u672c\u53ea\u662f\u4ee3\u8868\u4e0a\u7ea7\u76ee\u5f55,\u800c\u4e14\u53ef\u4ee5\u5806\u53e0;\u9002\u7528\u4e8e\u590d\u5236\u548c\u79fb\u52a8\u6587\u4ef6,\u975e\u5e38\u6709\u7528.%n%n\u73b0\u5728\u6211\u4eec\u8981\u505a\u4e9b\u6709\u7528\u7684\u4e1c\u897f,\u5e26\u4e0a\u4f60\u7684\u9002\u914d\u5668\u548c\u7ebf\u7f06,\u53bb\u770b\u770b\u4e0b\u4e00\u4e2a\u4efb\u52a1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG4w==",
                    "tooltip": "<strong>\u5b89\u88c5\u786c\u76d8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Hello World!"
                },
                {
                    "name": "\u79fb\u52a8\u5de5\u5382\u7ba1\u7406\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1990.png",
                    "x": 192.0,
                    "y": 48.0,
                    "data": "\u66fe\u7ecf\u5b8c\u6210\u4e86\u4e00\u4e2a\u5f88\u68d2\u7684\u7a0b\u5e8f,\u7136\u540e\u610f\u8bc6\u5230\u4f60\u7684\u7ba1\u7406\u5668\u9700\u8981\u642c\u5bb6,\u4f60\u5fc5\u987b\u91cd\u5199\u6574\u4e2a\u7a0b\u5e8f?\u66fe\u7ecf\u9700\u8981\u591a\u6b21\u590d\u5236\u3001\u7c98\u8d34\u4e00\u6bb5\u4ee3\u7801,\u7136\u540e\u6cae\u4e27\u5730\u53d1\u73b0\u4f60\u505a\u4e0d\u5230?  \u6709\u4e86\u7ba1\u7406\u5668\u590d\u5236\u5668,\u4f60\u518d\u4e5f\u4e0d\u4f1a\u4e3a\u6b64\u70e6\u607c\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHxg==",
                    "tooltip": "<strong>\u79fb\u52a8\u5de5\u5382\u7ba1\u7406\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u6211\u7684\u5c0f\u4fa6\u63a2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1755.png",
                    "x": 384.0,
                    "y": 198.0,
                    "data": "\u4e00\u628a\u87ba\u4e1d\u5200\u548c\u6273\u624b. \u4e0d\u662f\u771f\u6b63\u5fc5\u8981\u7684\u5de5\u5177,\u4f46\u6709\u4e00\u4e9b\u7528\u5904;\u6211\u5efa\u8bae\u591a\u8bfb\u8bfb\u4f60\u7684\u8ba1\u7b97\u673a\u624b\u518c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG2w==",
                    "tooltip": "<strong>\u6211\u7684\u5c0f\u4fa6\u63a2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u547d\u540d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1991.png",
                    "x": 144.0,
                    "y": 24.0,
                    "data": "\u5de5\u5382\u8d34\u6807\u5668\u4f7f\u4f60\u80fd\u591f\u7ed9\u4e88\u4efb\u610f\u80fd\u4e0e\u5de5\u5382\u7ba1\u7406\u5668\u8fde\u63a5\u7684\u4e1c\u897f\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684\u540d\u5b57-\u6709\u52a9\u4e8e\u4f60\u5199\u7a0b\u5e8f\u65f6\u8fa8\u8ba4\u5b83\u4eec.%n%n\u5728\u6587\u672c\u6846\u4e2d\u8bbe\u7f6e\u6807\u7b7e\u6216\u8005\u641c\u7d22\u5df2\u5b58\u50a8\u7684\u6807\u7b7e-\u70b9\u51fb\u4efb\u610f\u5df2\u5b58\u50a8\u6807\u7b7e\u4ee5\u9009\u4e2d\u5b83,\u53cc\u51fb\u4ee5\u7f16\u8f91\u5b83.\u5173\u95edGUI\u65f6,\u65e0\u8bba\u6587\u672c\u6846\u4e2d\u6709\u4ec0\u4e48\u90fd\u5c06\u88ab\u8bbe\u7f6e\u4e3a\u6807\u7b7e.%n%n\u624b\u6301\u8d34\u6807\u5668\u5de6\u952e\u4ee5\u8d34\u4e0a\u6807\u7b7e,\u53f3\u952e\u4ee5\u6253\u5f00GUI.\u8d34\u4e0a\u4e00\u4e2a\u7a7a\u767d\u6807\u7b7e\u5c06\u4f1a\u79fb\u9664\u4efb\u610f\u5df2\u5b58\u5728\u7684\u6807\u7b7e.%n%n\u6216\u8bb8\u6709bug\u6216\u8bb8\u6ca1\u6709.\u591a\u4eba\u6e38\u620f\u91cd\u65b0\u767b\u5f55\u4f1a\u9020\u6210\u6807\u7b7e\u4e22\u5931,\u4e0d\u8fc7\u5728\u5355\u4eba\u6e38\u620f\u4e2d\u6ca1\u6709\u8fd9\u6837\u7684\u95ee\u9898.\u73a9\u5f97\u5f00\u5fc3!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHxw==",
                    "tooltip": "<strong>\u547d\u540d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u4e0d\u662f\u4f60\u90a3\u666e\u901a\u7684\u62fc\u76d8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1757.png",
                    "x": 252.0,
                    "y": 102.0,
                    "data": "\u6211\u4eec\u7684\u786c\u76d8\u9700\u8981\u8fd9\u4e9b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG3Q==",
                    "tooltip": "<strong>\u4e0d\u662f\u4f60\u90a3\u666e\u901a\u7684\u62fc\u76d8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111"
                },
                {
                    "name": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1765.png",
                    "x": 480.0,
                    "y": 120.0,
                    "data": "\u563f,\u7528\u6bd4\u7279\u5e01!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG5Q==",
                    "tooltip": "<strong>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "name": "\u8d2d\u4e70\u7ebf\u7f06",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1771.png",
                    "x": 540.0,
                    "y": 216.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f602\u6bd4\u7279\u5e01\u768416\u6839\u7ebf\u7f06.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG6w==",
                    "tooltip": "<strong>\u8d2d\u4e70\u7ebf\u7f06</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8d2d\u4e70\u8f6f\u76d8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1774.png",
                    "x": 576.0,
                    "y": 120.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f60\u4e00\u4e2a1\u6bd4\u7279\u5e01\u7684\u8f6f\u76d8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG7g==",
                    "tooltip": "<strong>\u8d2d\u4e70\u8f6f\u76d8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8d2d\u4e70\u952e\u76d8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1775.png",
                    "x": 576.0,
                    "y": 168.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f60\u4e00\u4e2a2\u6bd4\u7279\u5e01\u7684\u952e\u76d8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG7w==",
                    "tooltip": "<strong>\u8d2d\u4e70\u952e\u76d8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8d2d\u4e70\u7f51\u5361",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1766.png",
                    "x": 540.0,
                    "y": 72.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f60\u4e00\u4e2a6\u6bd4\u7279\u5e01\u7684\u7f51\u5361.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG5g==",
                    "tooltip": "<strong>\u8d2d\u4e70\u7f51\u5361</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u663e\u5361",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1769.png",
                    "x": 540.0,
                    "y": 120.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f60\u4e00\u4e2a4\u6bd4\u7279\u5e01\u7684\u4e00\u9636\u663e\u5361.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG6Q==",
                    "tooltip": "<strong>\u8d2d\u4e70\u7b2c\u4e00\u9636\u663e\u5361</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u786c\u76d8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1773.png",
                    "x": 576.0,
                    "y": 72.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f60\u4e00\u4e2a8\u6bd4\u7279\u5e01\u7684\u4e00\u9636\u786c\u76d8.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG7Q==",
                    "tooltip": "<strong>\u8d2d\u4e70\u7b2c\u4e00\u9636\u786c\u76d8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u5185\u5b58",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1768.png",
                    "x": 540.0,
                    "y": 168.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f60\u4e00\u5bf94\u6bd4\u7279\u5e01\u7684\u4e00\u9636\u5185\u5b58.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG6A==",
                    "tooltip": "<strong>\u8d2d\u4e70\u7b2c\u4e00\u9636\u5185\u5b58</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u7b80\u6613\u5fae\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1776.png",
                    "x": 576.0,
                    "y": 216.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f60\u4e00\u4e2a2\u6bd4\u7279\u5e01\u7684\u7b2c\u4e00\u9636\u7b80\u6613\u5fae\u82af\u7247.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG8A==",
                    "tooltip": "<strong>\u8d2d\u4e70\u7b2c\u4e00\u9636\u7b80\u6613\u5fae\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u663e\u793a\u5c4f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1772.png",
                    "x": 576.0,
                    "y": 24.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f60\u4e00\u4e2a3\u6bd4\u7279\u5e01\u7684\u4e00\u9636\u663e\u793a\u5c4f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG7A==",
                    "tooltip": "<strong>\u8d2d\u4e70\u7b2c\u4e00\u9636\u663e\u793a\u5c4f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u65e0\u7ebf\u7f51\u5361",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1767.png",
                    "x": 540.0,
                    "y": 24.0,
                    "data": "\u6211\u4f1a\u5356\u7ed9\u4f60\u4e00\u4e2a12\u6bd4\u7279\u5e01\u7684\u4e00\u9636\u65e0\u7ebf\u7f51\u5361.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG5w==",
                    "tooltip": "<strong>\u8d2d\u4e70\u7b2c\u4e00\u9636\u65e0\u7ebf\u7f51\u5361</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u5feb\u901f\u7269\u54c1\u9600\u95e8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2011.png",
                    "x": 108.0,
                    "y": 240.0,
                    "data": "\u5feb\u901f\u7269\u54c1\u9600\u95e8\u53ef\u65e0\u5ef6\u8fdf\u5730\u5438\u5165\u6389\u843d\u7269.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH2w==",
                    "tooltip": "<strong>\u5feb\u901f\u7269\u54c1\u9600\u95e8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7269\u54c1\u9600\u95e8"
                },
                {
                    "name": "\u7ea2\u77f3\u4fe1\u53f7\u53d1\u5c04\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1999.png",
                    "x": 204.0,
                    "y": 192.0,
                    "data": "\u7ea2\u77f3\u4fe1\u53f7\u53d1\u5c04\u5668\u76846\u4e2a\u9762\u90fd\u80fd\u53d1\u51fa\u7ea2\u77f3\u4fe1\u53f7.\u7ea2\u77f3\u4fe1\u53f7\u7684\u5f3a\u5ea6\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4efb\u610f\u503c,\u52a0\u3001\u51cf\u548c\u66f4\u591a\u884c\u4e3a\u5747\u53ef\u8bbe\u7f6e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHzw==",
                    "tooltip": "<strong>\u7ea2\u77f3\u4fe1\u53f7\u53d1\u5c04\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u7ea2\u77f3\u4fe1\u53f7\u63a5\u6536\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2015.png",
                    "x": 204.0,
                    "y": 240.0,
                    "data": "\u7ea2\u77f3\u4fe1\u53f7\u63a5\u6536\u5668\u7684\u516d\u4e2a\u9762\u90fd\u53ef\u4ee5\u63a5\u6536\u7ea2\u77f3\u4fe1\u53f7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH3w==",
                    "tooltip": "<strong>\u7ea2\u77f3\u4fe1\u53f7\u63a5\u6536\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ea2\u77f3\u4fe1\u53f7\u53d1\u5c04\u5668"
                },
                {
                    "name": "RF\u8282\u70b9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2882.png",
                    "x": 24.0,
                    "y": 48.0,
                    "data": "RF\u8282\u70b9\u5c31\u662f\u4e00\u4e2aRF\u7684\u8f93\u5165/\u8f93\u51fa\u8282\u70b9. \u6211\u731c\u4f60\u6709\u53ef\u80fd\u9700\u8981.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALQg==",
                    "tooltip": "<strong>RF\u8282\u70b9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u77ed\u671f\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1750.png",
                    "x": 384.0,
                    "y": 72.0,
                    "data": "\u5f97\u52a0RAM\u4e86.%n%n\u5185\u5b58,\u6216RAM,\u672c\u8d28\u662f\u4f60\u8ba1\u7b97\u673a\u4e0a\u7684\u4e34\u65f6\u6570\u636e\u5b58\u50a8,\u53ef\u4ee5\u901a\u8fc7\u7a0b\u5e8f\u5feb\u901f\u8bbf\u95ee.%n%n\u56e0\u6b64\u540d\u4e3a\u5feb\u901f\u5b58\u53d6\u5b58\u50a8\u5668(Rapid-Access-Memory,RAM).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG1g==",
                    "tooltip": "<strong>\u77ed\u671f\u5b58\u50a8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u544a\u793a\u724c\u66f4\u65b0\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2009.png",
                    "x": 204.0,
                    "y": 96.0,
                    "data": "\u544a\u793a\u724c\u66f4\u65b0\u5668\u4f7f\u4f60\u7684\u5de5\u5382\u7ba1\u7406\u5668\u53ef\u4ee5\u66f4\u65b0\u5916\u90e8\u4fe1\u606f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH2Q==",
                    "tooltip": "<strong>\u544a\u793a\u724c\u66f4\u65b0\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "SFM\u57fa\u7840",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2019.png",
                    "x": 72.0,
                    "y": 24.0,
                    "data": "\u53d8\u91cf-\u58f0\u660evs\u6807\u51c6%n\u58f0\u660e\u4f1a\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u53ef\u7528\u65b9\u5757\u7684\u53d8\u91cf.\u8fd9\u4f7f\u5de5\u4f5c\u6d41\u66f4\u65b0\u5f88\u65b9\u4fbf.\u6bd4\u5982,\u4f60\u53ef\u4ee5\u6709\u4e2a\u5305\u542b\u4e24\u4e2a\u7bb1\u5b50\u7684\u53d8\u91cf.\u4f60\u5728\u4e00\u4e2a\u6f02\u4eae\u7684for-each\u5faa\u73af\u4e2d\u7528\u5230\u4e86\u5b83,\u4e4b\u540e\u4f60\u53c8\u6dfb\u52a0\u4e86\u4e00\u4e2a\u7bb1\u5b50.\u53ea\u9700\u66f4\u65b0\u53d8\u91cf,for-each\u5faa\u73af\u5c31\u53ef\u4ee5\u7528\u4e0a\u8fd9\u4e2a\u7bb1\u5b50\u4e86.%n%n\u6807\u51c6\u53d8\u91cf\u53ef\u4ee5\u63d2\u5165\u5230\u5de5\u4f5c\u6d41\u7684\u4e2d\u95f4(\u5b83\u6709\u8f93\u5165/\u8f93\u51fa),\u56e0\u6b64\u53ef\u4ee5\u5728\u8fd0\u884c\u4e2d\u8fdb\u884c\u4fee\u6539.%n%n\u8bf7\u6ce8\u610f,for-each\u5faa\u73af\u9700\u8981\u4e00\u4e2a\u7a7a\u53d8\u91cf.\u8fd9\u5728\u5faa\u73af\u4e2d\u5217\u4e3a\"\u5143\u7d20\".%n%n\u5168\u5c40vs\u672c\u5730%n\u5168\u5c40\u5c06\u4fdd\u7559\u5728\u5de5\u4f5c\u6d41\u4e2d\u5bf9\u4e00\u4e2a\u53d8\u91cf\u505a\u7684\u66f4\u6539,\u53cd\u4e4b,\u672c\u5730\u4fdd\u7559\u5728\u5de5\u4f5c\u6d41\u4e2d\u5bf9\u8fd9\u4e00\u90e8\u5206\u6240\u505a\u7684\u6240\u6709\u66f4\u6539.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH4w==",
                    "tooltip": "<strong>SFM\u57fa\u7840</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "name": "\u7b2c\u4e00\u9636",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1759.png",
                    "x": 336.0,
                    "y": 120.0,
                    "data": "\u606d\u559c,\u6211\u4eec\u6709\u4e86\u642d\u5efa\u7535\u8111\u7684\u90e8\u4ef6!%n%n\u8fd9\u91cc\u6709\u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG3w==",
                    "tooltip": "<strong>\u7b2c\u4e00\u9636</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u4e2a\u7b80\u6613\u5fae\u82af\u7247</br>\u7b97\u672f\u903b\u8f91\u7535\u8def</br>\u4f60\u7684\u6240\u6709\u5361\u90fd\u5c5e\u4e8e\u6211\u4eec</br>\u63a7\u5236\u5355\u5143</br>\u4e0d\u662f\u4f60\u90a3\u666e\u901a\u7684\u62fc\u76d8</br>BIOS"
                },
                {
                    "name": "\u4f2a\u88c5\u65b9\u5757-\u53d8\u6362",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2003.png",
                    "x": 12.0,
                    "y": 240.0,
                    "data": "\u4f2a\u88c5\u65b9\u5757-\u53d8\u6362\u4f7f\u4f60\u80fd\u591f\u4fee\u6539\u7ebf\u7f06\u7684\u78b0\u649e\u7bb1,\u6240\u4ee5\u4f60\u53ef\u4ee5\u628a\u5b83\u53d8\u6210\u95e8\u6216\u8005\u522b\u7684\u4ec0\u4e48.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH0w==",
                    "tooltip": "<strong>\u4f2a\u88c5\u65b9\u5757-\u53d8\u6362</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f2a\u88c5\u65b9\u5757-\u53cc\u9762"
                },
                {
                    "name": "\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1745.png",
                    "x": 288.0,
                    "y": 120.0,
                    "data": "\u4f60\u597d,\u6211\u7684\u540d\u5b57\u662fTeirdalin,\u4eca\u5929\u6211\u4eec\u5c06\u5f00\u59cb\u4e00\u4e2a\u6700\u4ee4\u4eba\u5174\u594b\u4e14\u6709\u8da3\u7684mod:\u5f00\u653e\u5f0f\u7535\u8111(OpenComputers)! \u9996\u5148,\u4f60\u9700\u8981\u4e00\u4e9b\u8010\u5fc3\u624d\u80fd\u5b66\u4f1a\u8fd9\u4e2amod,\u4f46\u4f60\u6700\u7ec8\u4f1a\u5f97\u5230\u56de\u62a5!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG0Q==",
                    "tooltip": "<strong>\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a</br>\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!"
                },
                {
                    "name": "\u6570\u636e\u5bf9CPU\u8bf4\u4e86\u4ec0\u4e48\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1753.png",
                    "x": 384.0,
                    "y": 168.0,
                    "data": "\u8ba9\u6211\u5728\u5916\u9762\u7f13\u5b58.%n%n\u4f60\u7684CPU\u57fa\u672c\u4e0a\u4ee3\u8868\u4f60\u7684\u8ba1\u7b97\u673a\u5904\u7406\u6570\u636e\u7684\u901f\u5ea6.%n\u66f4\u5f3a\u7684CPU",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG2Q==",
                    "tooltip": "<strong>\u6570\u636e\u5bf9CPU\u8bf4\u4e86\u4ec0\u4e48\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u7cbe\u5f69\u7684\u56fe\u50cf!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1751.png",
                    "x": 384.0,
                    "y": 12.0,
                    "data": "\u770b\u89c1\u6570\u5b57\u7684\u4e16\u754c.%n%n\u663e\u5361\u4f7f\u8ba1\u7b97\u673a\u80fd\u5728\u5c4f\u5e55\u4e0a\u7ed8\u5236\u6587\u672c\u548c\u5176\u4ed6\u5185\u5bb9.%n%n\u4f7f\u7528\u66f4\u597d\u7684\u663e\u5361,\u5206\u8fa8\u7387\u5c31\u4f1a\u66f4\u9ad8,\u4e5f\u53ef\u4ee5\u62e5\u6709\u66f4\u597d\u7684\u7ed8\u5236\u529f\u80fd.%n%n\u4f60\u8fd8\u9700\u8981\u66f4\u9ad8\u7ea7\u522b\u7684\u663e\u793a\u5668\u6765\u663e\u793a\u989c\u8272\u6216\u83b7\u5f97\u89e6\u6478\u5c4f\u7684\u517c\u5bb9\u6027,\u4f46\u8fd9\u662f\u4ee5\u540e\u9700\u8981\u62c5\u5fc3\u7684\u4e8b\u60c5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG1w==",
                    "tooltip": "<strong>\u7cbe\u5f69\u7684\u56fe\u50cf!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c\u4e00\u9636"
                },
                {
                    "name": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1747.png",
                    "x": 432.0,
                    "y": 120.0,
                    "data": "\u5c06\u4f60\u4e4b\u524d\u83b7\u5f97\u7684\u80fd\u91cf\u8f6c\u6362\u5668\u653e\u7f6e\u5728\u7ebf\u7f06\u9644\u8fd1\u5e76\u5c06\u5176\u7528\u526a\u7ebf\u94b3\u8fde\u63a5(\u4e5f\u53ef\u7528RF\u6216AE\u4f9b\u80fd). \u73b0\u5728\u6328\u7740\u8f6c\u6362\u5668\u653e\u7f6e\u4f60\u7684\u8ba1\u7b97\u673a\u673a\u7bb1,\u901a\u8fc7\u79d1\u6280\u7684\u529b\u91cf,\u5b83\u5c06\u4e3a\u8ba1\u7b97\u673a\u673a\u7bb1\u63d0\u4f9b\u7535\u529b!%n%n\u8bd1\u8005\u6ce8:\u5176\u5b9e\u76f4\u63a5\u7ed9\u673a\u7bb1\u63a5\u7535\u7ebf\u5c31\u884c... \u73b0\u5728\u5c06\u786c\u76d8\u9a71\u52a8\u3001\u5185\u5b58\u548c\u663e\u5361\u653e\u5165\u5185\u90e8,\u5c06\u78c1\u76d8\u9a71\u52a8\u5668\u653e\u5728\u8ba1\u7b97\u673a\u65c1\u8fb9,\u7136\u540e\u63d2\u5165\u64cd\u4f5c\u7cfb\u7edf\u78c1\u76d8.\u5c06\u6211\u4eec\u5236\u4f5c\u7684BIOS\u63d2\u5165\u673a\u7bb1\u7136\u540e\u6253\u5f00.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG0w==",
                    "tooltip": "<strong>\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u667a\u529b\u662f\u9002\u5e94\u53d8\u5316\u7684\u80fd\u529b</br>\u6211\u559c\u6b22\u6309F5\u952e.</br>\u77ed\u671f\u5b58\u50a8</br>\u7cbe\u5f69\u7684\u56fe\u50cf!</br>\u6570\u636e\u5bf9CPU\u8bf4\u4e86\u4ec0\u4e48\uff1f</br>\u8ba1\u7b97\u673a\u673a\u7bb1</br>\u6211\u7684\u5c0f\u4fa6\u63a2</br>\u78c1\u76d8\u9a71\u52a8\u5668(HDD)"
                },
                {
                    "name": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7b80\u6613\u5fae\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1746.png",
                    "x": 252.0,
                    "y": 138.0,
                    "data": "\u7b80\u6613\u5fae\u82af\u7247\u5c06\u5728\u4f60\u5236\u4f5c\u7684\u5927\u90e8\u5206\u7269\u54c1\u4e2d\u7528\u5230,\u5982\u679c\u53ef\u80fd\u7684\u8bdd,\u6211\u5efa\u8bae\u5927\u91cf\u5236\u4f5c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAG0g==",
                    "tooltip": "<strong>\u4f60\u7684\u7b2c\u4e00\u4e2a\u7b80\u6613\u5fae\u82af\u7247</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111"
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
                    "source": "\u96c6\u7ebf\u5668",
                    "target": "\u9ad8\u7ea7\u96c6\u7ebf\u5668"
                },
                {
                    "source": "\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9",
                    "target": "\u9ad8\u7ea7\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111",
                    "target": "\u4f60\u7684\u6240\u6709\u5361\u90fd\u5c5e\u4e8e\u6211\u4eec"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111",
                    "target": "\u7b97\u672f\u903b\u8f91\u7535\u8def"
                },
                {
                    "source": "\u5b89\u88c5\u786c\u76d8",
                    "target": "\u57fa\u7840\u80fd\u91cf\u663e\u793a"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111",
                    "target": "BIOS"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u65b9\u5757\u66f4\u65b0\u68c0\u6d4b\u5668"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u65b9\u5757\u4ea4\u4e92\u5668"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u4f2a\u88c5\u65b9\u5757"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u96c6\u7ebf\u5668"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u786c\u5e01\u8f6c\u6362"
                },
                {
                    "source": "\u7b2c\u4e00\u9636",
                    "target": "\u8ba1\u7b97\u673a\u673a\u7bb1"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111",
                    "target": "\u63a7\u5236\u5355\u5143"
                },
                {
                    "source": "\u4f2a\u88c5\u65b9\u5757",
                    "target": "\u4f2a\u88c5\u65b9\u5757-\u53cc\u9762"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111",
                    "target": "\u4ece\u90a3\u51fa\u6765\u7684\u6240\u6709\u827a\u672f\u5bb6"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u4ece\u90a3\u51fa\u6765\u7684\u6240\u6709\u827a\u672f\u5bb6"
                },
                {
                    "source": "\u7b2c\u4e00\u9636",
                    "target": "\u78c1\u76d8\u9a71\u52a8\u5668(HDD)"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111",
                    "target": "Hello World!"
                },
                {
                    "source": "\u7b2c\u4e00\u9636",
                    "target": "\u6211\u559c\u6b22\u6309F5\u952e."
                },
                {
                    "source": "\u7b2c\u4e00\u9636",
                    "target": "\u667a\u529b\u662f\u9002\u5e94\u53d8\u5316\u7684\u80fd\u529b"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u7269\u54c1\u680f\u4e2d\u8f6c\u7ad9"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u7269\u54c1\u9600\u95e8"
                },
                {
                    "source": "\u7b2c\u4e00\u9636",
                    "target": "It's everytime these Transistors"
                },
                {
                    "source": "\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f",
                    "target": "\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "source": "Hello World!",
                    "target": "\u5b89\u88c5\u786c\u76d8"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u79fb\u52a8\u5de5\u5382\u7ba1\u7406\u5668"
                },
                {
                    "source": "\u7b2c\u4e00\u9636",
                    "target": "\u6211\u7684\u5c0f\u4fa6\u63a2"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u547d\u540d"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111",
                    "target": "\u4e0d\u662f\u4f60\u90a3\u666e\u901a\u7684\u62fc\u76d8"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111",
                    "target": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u7ebf\u7f06"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u8f6f\u76d8"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u952e\u76d8"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u7f51\u5361"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u663e\u5361"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u786c\u76d8"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u5185\u5b58"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u7b80\u6613\u5fae\u82af\u7247"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u663e\u793a\u5c4f"
                },
                {
                    "source": "\u5728\u7ebf\u8d2d\u7269-\u7b2c\u4e00\u9636",
                    "target": "\u8d2d\u4e70\u7b2c\u4e00\u9636\u65e0\u7ebf\u7f51\u5361"
                },
                {
                    "source": "\u7269\u54c1\u9600\u95e8",
                    "target": "\u5feb\u901f\u7269\u54c1\u9600\u95e8"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u7ea2\u77f3\u4fe1\u53f7\u53d1\u5c04\u5668"
                },
                {
                    "source": "\u7ea2\u77f3\u4fe1\u53f7\u53d1\u5c04\u5668",
                    "target": "\u7ea2\u77f3\u4fe1\u53f7\u63a5\u6536\u5668"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "RF\u8282\u70b9"
                },
                {
                    "source": "\u7b2c\u4e00\u9636",
                    "target": "\u77ed\u671f\u5b58\u50a8"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "\u544a\u793a\u724c\u66f4\u65b0\u5668"
                },
                {
                    "source": "\u5de5\u5382\u7ba1\u7406\u5668",
                    "target": "SFM\u57fa\u7840"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7b80\u6613\u5fae\u82af\u7247",
                    "target": "\u7b2c\u4e00\u9636"
                },
                {
                    "source": "\u7b97\u672f\u903b\u8f91\u7535\u8def",
                    "target": "\u7b2c\u4e00\u9636"
                },
                {
                    "source": "\u4f60\u7684\u6240\u6709\u5361\u90fd\u5c5e\u4e8e\u6211\u4eec",
                    "target": "\u7b2c\u4e00\u9636"
                },
                {
                    "source": "\u63a7\u5236\u5355\u5143",
                    "target": "\u7b2c\u4e00\u9636"
                },
                {
                    "source": "\u4e0d\u662f\u4f60\u90a3\u666e\u901a\u7684\u62fc\u76d8",
                    "target": "\u7b2c\u4e00\u9636"
                },
                {
                    "source": "BIOS",
                    "target": "\u7b2c\u4e00\u9636"
                },
                {
                    "source": "\u4f2a\u88c5\u65b9\u5757-\u53cc\u9762",
                    "target": "\u4f2a\u88c5\u65b9\u5757-\u53d8\u6362"
                },
                {
                    "source": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!",
                    "target": "\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111"
                },
                {
                    "source": "\u7b2c\u4e00\u9636",
                    "target": "\u6570\u636e\u5bf9CPU\u8bf4\u4e86\u4ec0\u4e48\uff1f"
                },
                {
                    "source": "\u7b2c\u4e00\u9636",
                    "target": "\u7cbe\u5f69\u7684\u56fe\u50cf!"
                },
                {
                    "source": "\u667a\u529b\u662f\u9002\u5e94\u53d8\u5316\u7684\u80fd\u529b",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "source": "\u6211\u559c\u6b22\u6309F5\u952e.",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "source": "\u77ed\u671f\u5b58\u50a8",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "source": "\u7cbe\u5f69\u7684\u56fe\u50cf!",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "source": "\u6570\u636e\u5bf9CPU\u8bf4\u4e86\u4ec0\u4e48\uff1f",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "source": "\u8ba1\u7b97\u673a\u673a\u7bb1",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "source": "\u6211\u7684\u5c0f\u4fa6\u63a2",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "source": "\u78c1\u76d8\u9a71\u52a8\u5668(HDD)",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u53f0\u7535\u8111"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u5f00\u653e\u5f0f\u7535\u8111",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7b80\u6613\u5fae\u82af\u7247"
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
    