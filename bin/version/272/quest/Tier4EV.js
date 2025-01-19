
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
                    "name": "\u9ad8\u7ea7\u80f6\u6c34",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/459.png",
                    "x": 546.0,
                    "y": 90.0,
                    "tooltip": "\u9ad8\u7ea7\u80f6\u6c34",
                    "data": "\u5c06\u5176\u4e0e\u4e19\u916e\u6216\u4e59\u9178\u7532\u916f\u7ed3\u5408,\u5c31\u53ef\u4ee5\u5f97\u5230\u9ad8\u7ea7\u80f6\u6c34\u4e86."
                },
                {
                    "name": "\u8fdb\u9636\u949b\u94c1\u77ff\u5904\u7406",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2562.png",
                    "x": 396.0,
                    "y": 144.0,
                    "tooltip": "\u8fdb\u9636\u949b\u94c1\u77ff\u5904\u7406",
                    "data": "\u8981\u5c3d\u53ef\u80fd\u591a\u7684\u83b7\u53d6\u949b\u94c1\u77ff\u7c89,\u4f60\u9700\u8981\u5728EV\u5316\u5b66\u6d78\u6d17\u5668\u4e2d\u4f7f\u7528\u786b\u9178\u5904\u7406\u7c89\u788e\u7684\u949b\u94c1\u77ff.\u786b\u9178\u53ef\u4ee5\u88ab\u5b8c\u5168\u56de\u6536."
                },
                {
                    "name": "\u9ad8\u7ea7\u602a\u7269\u9632\u62a4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/200.png",
                    "x": 720.0,
                    "y": 228.0,
                    "tooltip": "\u9ad8\u7ea7\u602a\u7269\u9632\u62a4",
                    "data": "\u5353\u8d8a\u706b\u70ac\u548c\u5962\u534e\u540a\u9876\u706f\u7c7b\u4f3c,\u53ef\u4ee5\u963b\u6b62\u5f88\u5927\u8303\u56f4\u5185\u5237\u602a.\u6240\u4ee5\u4e00\u4e2a\u5353\u8d8a\u706b\u70ac\u53ef\u80fd\u5c31\u80fd\u4fdd\u62a4\u4f60\u7684\u6574\u4e2a\u57fa\u5730. \u5353\u8d8a\u706b\u70ac\u7684\u6709\u6548\u8303\u56f4\u662f,\u6c34\u5e73\u65b9\u5411\u534a\u5f8464\u683c,\u7ad6\u76f4\u65b9\u5411\u4e0a\u4e0b32\u683c.%n%n\u4f46\u522b\u5fd8\u4e86\u602a\u7269\u4ecd\u7136\u53ef\u4ee5\u8ddf\u7740\u4f60\u56de\u5bb6!"
                },
                {
                    "name": "\u5408\u9002\u7684\u80fd\u6e90",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/190.png",
                    "x": 816.0,
                    "y": 288.0,
                    "tooltip": "\u5408\u9002\u7684\u80fd\u6e90",
                    "data": "\u4e0d\u7ba1\u4f60\u5728\u7528\u9b54\u6cd5\u3001\u84b8\u6c7d\u3001\u77f3\u6cb9\u6216\u8005\u6cbc\u6c14\u5728\u53d1\u7535,\u5230\u4e86\u8fd9\u4e00\u9636\u6bb5\u4f60\u90fd\u4f1a\u78b0\u5230\u95ee\u9898. \u6240\u4ee5\u4f60\u9700\u8981\u5347\u7ea7\u4f60\u7684\u7535\u7f51,\u81f3\u5c11\u5bf9\u9ad8\u7089\u4f9b\u7535\u7cfb\u7edf\u8fdb\u884c\u5347\u7ea7. \u6240\u4ee5\u8ba9\u6211\u4eec\u6765\u4f7f\u7528\u5f3a\u5927\u7684\u80fd\u6e90:\u6838\u80fd!%n%n\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u53cd\u5e94\u5806\u7684\u5de5\u4f5c\u539f\u7406,\u8bf7\u53c2\u8003\u82f1\u7279\u7f51\u4ee5\u53ca https://github.com/MauveCloud/Ic2ExpReactorPlanner/releases \u8fd9\u91cc\u7684\u6838\u7535\u8ba1\u7b97\u5668%n%n\u63d0\u793a: \u8fd9\u4e2a\u6574\u5408\u5305\u6838\u53cd\u5e94\u5806\u7684\u6548\u7387\u4e58\u6570\u4e3a10,\u8fd9\u610f\u5473\u7740GTNH\u724c\u53cd\u5e94\u5806\u7684\u6548\u7387\u8981\u6bd4\u4ee5\u5f80\u7684\u9ad810\u500d!!!\u8bf7\u786e\u4fdd\u5728\u9ad8\u7ea7\u4e2d\u5c06\u8ba1\u7b97\u5668\u8bbe\u7f6e\u4e3aGTNH\u6a21\u5f0f.\u53e6\u5916,\u6240\u6709\u90e8\u4ef6\u60ac\u505c\u663e\u793a\u7684\u90fd\u662f\u57fa\u7840\u6570\u636e(x10\u4e4b\u524d).%n%n\u5728https://gtnh.miraheze.org/wiki/Nuclear_Reactors \u53ef\u4ee5\u83b7\u77e5\u66f4\u591aGTNH\u6838\u53cd\u5e94\u5806\u4fe1\u606f. \u76ee\u524d1920EU/t\u7684\u948d\u5806\u5e94\u8be5\u662f\u6700\u4f73\u9009\u62e9.%n%nWIKI \u6838\u53cd\u5e94\u5806\uff1agtnh.huijiwiki.com/p/977"
                },
                {
                    "name": "\u56de\u5230\u6b65\u9aa41",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2302.png",
                    "x": 654.0,
                    "y": 450.0,
                    "tooltip": "\u56de\u5230\u6b65\u9aa41",
                    "data": "\u53ef\u4ee5\u901a\u8fc7\u52a0\u70ed\u7cbe\u70bc\u94c2\u76d0\u4ee5\u84b8\u53d1\u6389\u6700\u540e\u5269\u4f59\u7684\u6742\u8d28.\u73b0\u5728,\u4f60\u518d\u4e00\u6b21\u83b7\u5f97\u4e86\u94c2\u91d1\u5c5e\u7c89,\u53c8\u53ef\u4ee5\u518d\u6b21\u56de\u5230\u7b2c\u4e00\u6b65,\u8fdb\u884c\u6eb6\u89e3\u4e86.%n%n\u5728\u4f60\u7684\u5de5\u4e1a\u9ad8\u7089\u5e95\u5c42\u6dfb\u52a0\u4e00\u4e2a\u8f93\u51fa\u4ed3,\u7528\u4e8e\u56de\u6536\u6c2f\u518d\u5229\u7528."
                },
                {
                    "name": "\u57fa\u7840\u6838\u71c3\u6599:\u948d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/193.png",
                    "x": 816.0,
                    "y": 336.0,
                    "tooltip": "\u57fa\u7840\u6838\u71c3\u6599:\u948d",
                    "data": "\u948d\u71c3\u6599\u68d2\u662f\u6240\u6709\u71c3\u6599\u68d2\u91cc\u9762\u6700\u5f31\u7684\u4e00\u4e2a.\u4f46\u662f\u4f18\u70b9\u662f\u5f88\u5bb9\u6613\u751f\u4ea7,\u800c\u4e14\u6bd4\u8f83\u597d\u63a7\u5236\u5806\u6e29,\u8fd0\u884c\u65f6\u95f4\u5f88\u957f(\u662f\u94c0\u68d2\u76842\u500d).\u751a\u81f3\u5728\u70e7\u5b8c\u540e\u8fd8\u4f1a\u8fd4\u8fd81/3\u7684\u948d! \u6240\u4ee5\u7528\u948d\u53ef\u4ee5\u505a\u4e00\u4e2a\u5b8c\u7f8e\u7684\"\u4e00\u52b3\u6c38\u9038\"\u7684\u7535\u529b\u4f9b\u5e94\u88c5\u7f6e.%n%n\u8bf7\u6ce8\u610f:\u5f53\u948d\u71c3\u6599\u68d2\u8017\u5c3d\u540e,\u4f60\u53ef\u4ee5\u79bb\u5fc3\u5b83\u83b7\u5f97\u9565,\u800c\u9565\u662f\u805a\u53d8\u83b7\u5f97\u9545\u7684\u539f\u6599.%n\u867d\u7136\u4f60\u53ea\u6709\u5230UV\u9636\u6bb5\u624d\u4f1a\u9700\u8981\u9545,\u4f46\u4f60\u73b0\u5728\u5c31\u53ef\u4ee5\u5f00\u59cb\u56e4\u79ef\u9565\u4e86,\u800c\u4e14\u4f60\u8fd8\u80fd\u83b7\u5f97\u7535\u529b,\u4f55\u4e50\u800c\u4e0d\u4e3a?"
                },
                {
                    "name": "\u66f4\u5927\u7684\u7b52",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2391.png",
                    "x": 396.0,
                    "y": 252.0,
                    "tooltip": "\u66f4\u5927\u7684\u7b52",
                    "data": "\u73b0\u5728\u4f60\u6709\u4e86\u7b52,\u60f3\u8ba9\u5b83\u66f4\u5927\u5417?%n%n\u5982\u679c\u60f3\u7684\u8bdd,\u4f60\u6700\u597d\u5f00\u59cb\u6536\u96c6\u6216\u5236\u4f5c\u6570\u4ee5\u4e07\u8ba1\u7684\u5706\u77f3.\u5e76\u6839\u636e\u81ea\u5df1\u7684\u559c\u597d\u5236\u9020\u70b8\u836f.%n%n\u9996\u5148\u7528\u7f16\u7a0b\u7535\u8def1\u5728\u7ec4\u88c5\u673a\u4e2d\u538b\u7f29\u5706\u77f3,\u7136\u540e\u5c06\u5176\u805a\u7206\u538b\u7f29,\u4e0d\u65ad\u91cd\u590d\u76f4\u5230\u83b7\u5f97\u56db\u91cd\u538b\u7f29\u5706\u77f3.\u8fd9\u6837\u505a\u56db\u6b21\u540e,\u518d\u5c06\u5b83\u4e0e\u94bb\u77f3\u5757\u4e00\u8d77\u653e\u5165\u7ec4\u88c5\u673a,\u5373\u53ef\u5236\u6210\u57fa\u5ca9\u952d.%n%n\u7136\u540e\u5c06\u6574\u4e2a\u8fc7\u7a0b\u518d\u91cd\u590d5\u6b21,\u4f60\u5c31\u80fd\u5236\u4f5c\u51fa\u57fa\u5ca9\u7b52\u4e86.%n%n\u8d85\u8fc764k\u6876\u7684\u4fbf\u643a\u6d41\u4f53\u5b58\u50a8.\u975e\u5e38\u9002\u5408\u4f60\u65b0\u9020\u7684\u91c7\u77ff\u573a!%n%n\u5728\u5927\u540e\u671f\u4f1a\u6709\u57fa\u5ca9\u77ff,\u4e0d\u8fc7\u5230\u90a3\u65f6\u4f60\u5e94\u8be5\u4e5f\u7528\u4e0d\u4e0a\u8fd9\u4e9b\u7b52\u4e86."
                },
                {
                    "name": "\u53cc\u915aA",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1230.png",
                    "x": 606.0,
                    "y": 150.0,
                    "tooltip": "\u53cc\u915aA",
                    "data": "\u5236\u4f5c\u73af\u6c27\u6811\u8102\u7684\u5316\u5de5\u539f\u6599\u4e4b\u4e00. \u901a\u8fc7\u7ed3\u5408\u82ef\u915a\u3001\u4e19\u916e\u3001\u6c22\u6c2f\u9178\u5236\u53d6."
                },
                {
                    "name": "\u84dd\u94a2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1263.png",
                    "x": 720.0,
                    "y": 264.0,
                    "tooltip": "\u84dd\u94a2",
                    "data": "\u9633\u5149\u5316\u5408\u7269\u7535\u6c60\u5916\u58f3\u662f\u7528\u84dd\u94a2\u5236\u6210\u7684,\u84dd\u94a2\u662f\u94a2\u3001\u9ed1\u94a2\u3001\u9ec4\u94dc\u548c\u73ab\u7470\u91d1\u7684\u6405\u62cc\u7269."
                },
                {
                    "name": "\u7528\u7eaf\u80fd\u91cf\u521b\u9020\u65b0\u6750\u6599",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1879.png",
                    "x": 60.0,
                    "y": 60.0,
                    "tooltip": "\u7528\u7eaf\u80fd\u91cf\u521b\u9020\u65b0\u6750\u6599",
                    "data": "\u4f60\u53ef\u4ee5\u4f7f\u7528\u626b\u63cf\u4eea,\u626b\u63cf\u7279\u5b9a\u7269\u54c1(\u8bf7\u67e5\u770b\u590d\u5236\u673a\u7684NEI\u914d\u65b9),\u5e76\u5c06\u5143\u7d20\u4fe1\u606f\u50a8\u5b58\u5230\u6570\u636e\u7403,\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u7528\u590d\u5236\u673a\u590d\u5236\u8fd9\u4e9b\u5143\u7d20\u4e86. \u57fa\u4e8e\u4e0d\u540c\u5143\u7d20,\u8fd9\u4e00\u8fc7\u7a0b\u4f1a\u6d88\u8017\u4e0d\u540c\u6570\u91cf\u7684UU-M\u53ca\u65f6\u95f4. \u800c\u626b\u63cf\u8fc7\u7a0b\u4e5f\u6781\u5176\u6f2b\u957f.%n%n\u4f60\u53ef\u80fd\u9700\u8981\u590d\u5236\u7684\u5143\u7d20\u5305\u62ec:%n\u94df%n\u94c2\u7cfb\u91d1\u5c5e\u6bd4\u5982\u94f1\u548c\u9507%n\u6db2\u6001\u7a7a\u6c14\u84b8\u998f\u7684\u6781\u7a00\u6709\u4ea7\u7269\u6c16\u3001\u6c2a\u3001\u6c19%n\u9feb%n%n\u5bf9\u4e8e\u67d0\u4e9b\u5143\u7d20(\u9feb),\u8fd9\u53ef\u80fd\u662f\u552f\u4e00\u53ef\u4ee5\u91cf\u4ea7\u7684\u65b9\u5f0f."
                },
                {
                    "name": "\u5173\u952e\u6750\u6599",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1891.png",
                    "x": 252.0,
                    "y": 456.0,
                    "tooltip": "\u5173\u952e\u6750\u6599",
                    "data": "\u94a8\u94a2\u662f\u4f60\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u79cd\u6750\u6599,\u4f46\u4f60\u9996\u5148\u5f97\u5728\u706b\u661f\u4e0a\u627e\u5230\u6234\u65af\u3001\u767d\u94a8\u3001\u94a8\u9178\u76d0\u4e09\u8005\u6df7\u5408\u7684\u77ff\u8109.\u8bf7\u641c\u7d22Y"
                },
                {
                    "name": "EV\u5207\u5272\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2018.png",
                    "x": 456.0,
                    "y": 372.0,
                    "tooltip": "EV\u5207\u5272\u673a",
                    "data": "\u65e2\u7136\u5df2\u7ecf\u5230\u8fbeEV\u9636\u6bb5\u4e86,\u4f60\u5c31\u9700\u8981\u66f4\u5148\u8fdb\u7684\u5207\u5272\u673a.\u6700\u597d\u505a\u4e00\u4e2a."
                },
                {
                    "name": "\u6570\u636e\u7403",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1878.png",
                    "x": 96.0,
                    "y": 24.0,
                    "tooltip": "\u6570\u636e\u7403",
                    "data": "\u6570\u636e\u7403\u662f\u9ad8\u9636\u7684\u95ea\u5b58,\u7528\u4e8e\u8bb0\u5f55\u590d\u5236\u4fe1\u606f\u6216\u662f\u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\u5668\u4f7f\u7528."
                },
                {
                    "name": "\u5904\u7406\u8f90\u5c04",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2210.png",
                    "x": 864.0,
                    "y": 180.0,
                    "tooltip": "\u5904\u7406\u8f90\u5c04",
                    "data": "\u653e\u5c04\u6027\u6750\u6599\u4f1a\u9020\u6210\u4e24\u79cd\u8f90\u5c04\u6548\u679c.\u4e00\u79cd\u662f\u5927\u91cf\u7684\u6807\u51c6debuff.\u8fd9\u4e9b\u53ef\u901a\u8fc7\u5e38\u89c4\u65b9\u6cd5\u79fb\u9664,\u6bd4\u5982\u725b\u5976\u3001\u5927\u5730\u75a3\u6216\u522b\u7684\u65b9\u6cd5.%n%n\u53e6\u4e00\u79cd\u6548\u679c\u5c31\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\u8f90\u5c04\u72b6\u6001.\u4f60\u62ff\u7740\u653e\u5c04\u6027\u6750\u6599\u8d8a\u4e45,\u8fd9\u4e2a\u72b6\u6001\u8d8a\u6709\u53ef\u80fd\u51fa\u73b0.\u5f3a\u653e\u5c04\u6027\u6750\u6599\u4f1a\u5e26\u6765\u6570\u5206\u949f\u7684\u8fd9\u79cd\u81f4\u547d\u72b6\u6001.\u751f\u547d\u6062\u590d\u6548\u679c\u53ef\u80fd\u4f1a\u5ef6\u8fdf\u4e0d\u53ef\u907f\u514d\u7684\u6b7b\u4ea1,\u4f46\u5927\u591a\u6570\u63d0\u4f9b\u751f\u547d\u6062\u590d\u6548\u679c\u7684\u6e90\u6ca1\u6709\u8db3\u591f\u5feb\u6216\u8db3\u591f\u957f\u7684\u65f6\u95f4\u6765\u7ef4\u6301\u4f60\u7684\u751f\u547d.\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u9632\u8eab\u62a4\u8eab\u7b26\u6765\u6446\u8131\u8f90\u5c04\u72b6\u6001.\u4f60\u5e94\u8be5\u901a\u8fc7\u6708\u7403\u4e4b\u65c5\u83b7\u5f97\u4e86\u4e00\u4e2a,\u8981\u662f\u6ca1\u6709,\u4f60\u5c31\u5f97\u6df1\u5165\u7814\u7a76\u795e\u79d8\u6765\u81ea\u5df1\u5236\u4f5c\u4e00\u4e2a\u4e86."
                },
                {
                    "name": "\u5bf9\u4e8c\u6c2f\u82ef",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2448.png",
                    "x": 654.0,
                    "y": 390.0,
                    "tooltip": "\u5bf9\u4e8c\u6c2f\u82ef",
                    "data": "\u4f60\u9700\u8981\u4ed8\u51fa\u66f4\u591a\u7684\u52aa\u529b\u624d\u80fd\u5236\u9020\u51fa\u66f4\u9ad8\u9636\u7684\u7ebf\u7f06. \u8ba9\u6211\u4eec\u4ece\u5bf9\u4e8c\u6c2f\u82ef\u5f00\u59cb\u5427."
                },
                {
                    "name": "\u76ee\u6807:\u706b\u536b\u4e8c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/188.png",
                    "x": 48.0,
                    "y": 456.0,
                    "tooltip": "\u76ee\u6807:\u706b\u536b\u4e8c",
                    "data": "\u5b9e\u9645\u4e0a,\u4ece\u5176\u4ed6\u4e24\u4e2a\u661f\u7403\u4e0a\u9762\u4f60\u53ef\u4ee5\u627e\u5230\u73b0\u9636\u6bb5\u6240\u9700\u7684\u6240\u6709\u77ff\u77f3,\u4f46\u5230\u706b\u536b\u4e8c\u8f6c\u8f6c\u6709\u4ec0\u4e48\u4e0d\u597d\u5462?"
                },
                {
                    "name": "\u76ee\u6807:\u706b\u661f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/186.png",
                    "x": 252.0,
                    "y": 372.0,
                    "tooltip": "\u76ee\u6807:\u706b\u661f",
                    "data": "\u4f60\u5728\u706b\u661f\u53ef\u4ee5\u627e\u5230\u4e00\u4e9b\u65b0\u7684\u77ff\u7269,\u6bd4\u5982\u8bf4\u94a8\u3001\u94c0\u548c\u6234\u65af. \u4ece\u94c0-238\u91cc\u53ef\u4ee5\u79bb\u5fc3\u51fa\u94c0-235\u548c\u949a-239,\u800c\u6709\u5fc5\u8981\u7684\u60c5\u51b5\u4e0b,\u949a-239\u8fd8\u53ef\u4ee5\u79bb\u5fc3\u51fa\u949a-241."
                },
                {
                    "name": "\u76ee\u6807:\u706b\u536b\u4e00",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/187.png",
                    "x": 144.0,
                    "y": 456.0,
                    "tooltip": "\u76ee\u6807:\u706b\u536b\u4e00",
                    "data": "\u706b\u536b\u4e00\u4e0a\u6709\u4e0d\u5c11\u65b0\u77ff\u7269,\u6536\u96c6\u4e00\u4e9b\u5427!%n%n\u5766\u767d\u8bf4,\u9664\u4e86\u5730\u7262\u4ee5\u5916,\u73b0\u9636\u6bb5\u7684\u6240\u6709\u77ff\u77f3\u90fd\u53ef\u4ee5\u5728\u706b\u536b\u4e00\u627e\u5230."
                },
                {
                    "name": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1899.png",
                    "x": 816.0,
                    "y": 372.0,
                    "tooltip": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))",
                    "data": "\u9700\u8981\u66f4\u591a\u80fd\u91cf?\u4f55\u4e0d\u5c06\u71c3\u6599\u68d2\u7ed3\u5408\u8d77\u6765?\u4e8c\u8054\u71c3\u6599\u68d2\u53ef\u4ee5\u4ea7\u751f\u66f4\u591a\u80fd\u91cf(\u5e76\u4e0d\u4e00\u5b9a\u662f\u53cc\u500d,\u8fd9\u56e0\u71c3\u6599\u68d2\u7c7b\u578b\u800c\u5f02)\u4ee5\u53ca\u66f4\u591a\u70ed\u91cf(\u540c\u6837\u975e\u53cc\u500d),\u5374\u53ea\u5360\u7528\u4e00\u4e2a\u683c\u5b50.\u4f60\u9700\u8981\u66f4\u590d\u6742\u7684\u8bbe\u8ba1\u6765\u5904\u7406\u5b83\u4eec,\u4f46\u4f60\u5df2\u7ecf\u51c6\u5907\u597d\u4e86,\u5bf9\u5427?%n%n\u6240\u4ee5\u4f55\u4e0d\u66f4\u8fdb\u4e00\u6b65,\u53cc\u500d\u53cc\u500d\u540e\u53d8\u4e3a\u56db\u500d(4x)?\u56db\u8054\u71c3\u6599\u68d2\u4f1a\u4ea7\u751f\u66f4\u591a\u66f4\u591a\u7684\u80fd\u91cf\u548c\u70ed\u91cf,\u5176\u4ed6\u5de5\u4f5c\u539f\u7406\u57fa\u672c\u76f8\u540c(\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b).%n%n\u53e6\u5916\u660e\u667a\u7684\u505a\u6cd5\u662f1->4\u800c\u4e0d\u662f1->2->4."
                },
                {
                    "name": "\u5bcc\u96c6\u9f99\u86cb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1658.png",
                    "x": 360.0,
                    "y": 468.0,
                    "tooltip": "\u5bcc\u96c6\u9f99\u86cb",
                    "data": "\u4e0b\u4e00\u6b65\u662f\u5728\u672b\u5f71\u86cb\u4e2d\u52a0\u5165\u9f99\u5c18(\u6216\u9f99\u952d\u7c89)\u548c\u672b\u5f71\u7c98\u6d46,\u4ee5\u5f97\u5230\u5bcc\u96c6\u9f99\u86cb. \u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u4e00\u6bb5\u65f6\u95f4.\u5728\u5f00\u59cb\u6b64\u8fc7\u7a0b\u4e4b\u524d,\u4f60\u7684\u8d85\u51c0\u95f4\u5fc5\u987b100\uff05\u6e05\u6d01.(\u6216\u662f\u4f7f\u7528\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.)"
                },
                {
                    "name": "\u9f99\u86cb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1659.png",
                    "x": 312.0,
                    "y": 468.0,
                    "tooltip": "\u9f99\u86cb",
                    "data": "\u5236\u9020\u9f99\u86cb\u7684\u6700\u540e\u4e00\u6b65\u662f\u4e3a\u5bcc\u96c6\u9f99\u86cb\u52a0\u5165\u7194\u878d\u672b\u5f71\u548c\u9f99\u4e4b\u5fc3(\u4f5c\u4e3a\u50ac\u5316\u5242,\u4e0d\u4f1a\u6d88\u8017). \u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u4e00\u6bb5\u65f6\u95f4.\u5728\u5f00\u59cb\u6b64\u8fc7\u7a0b\u4e4b\u524d,\u4f60\u7684\u8d85\u51c0\u95f4\u5fc5\u987b100\uff05\u6e05\u6d01.(\u6216\u662f\u4f7f\u7528\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.)"
                },
                {
                    "name": "\u57fa\u56e0\u7a81\u53d8\u86cb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1656.png",
                    "x": 360.0,
                    "y": 372.0,
                    "tooltip": "\u57fa\u56e0\u7a81\u53d8\u86cb",
                    "data": "\u5728\u4f60\u627e\u5230\u4e00\u79cd\u65b9\u6cd5\u4f7f\u83cc\u6ce5\u66f4\u5f3a\u5927\u5e76\u7814\u53d1\u51fa\u8bf1\u53d8\u5242\u540e,\u5c1d\u8bd5\u5c06\u5927\u9e21\u86cb\u6d78\u6ce1\u5728\u5176\u4e2d. \u4f60\u9700\u8981\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4. \u4e0b\u4e00\u6b65\u662f\u5c06\u4f60\u7684\u5927\u9e21\u86cb,\u4e00\u5806\u94c0238(\u4e00\u5b9a\u8981\u7a7f\u597d\u4f60\u7684\u9632\u5316\u670d)\u548c\u8bf1\u53d8\u5242\u653e\u5165\u5316\u5b66\u53cd\u5e94\u91dc.\u5728\u5f00\u59cb\u6b64\u8fc7\u7a0b\u4e4b\u524d,\u4f60\u7684\u8d85\u51c0\u95f4\u5fc5\u987b100\uff05\u6e05\u6d01.(\u6216\u662f\u4f7f\u7528\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.)"
                },
                {
                    "name": "\u7cbe\u82f1\u7eb3\u7c73\u7535\u8111",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1251.png",
                    "x": 144.0,
                    "y": 192.0,
                    "tooltip": "\u7cbe\u82f1\u7eb3\u7c73\u7535\u8111",
                    "data": "\u7cbe\u82f1\u7eb3\u7c73\u7535\u8111\u662fIV\u7ea7\u7684\u7535\u8def.%n\u751f\u4ea7\u8fc7\u7a0b\u4e2d\u540c\u6837\u9700\u8981\u4fdd\u8bc1\u5168\u7a0b\u65e0\u5c18."
                },
                {
                    "name": "\u9ad8\u7ea7\u7535\u8def\u57fa\u677f",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1234.png",
                    "x": 426.0,
                    "y": 18.0,
                    "tooltip": "\u9ad8\u7ea7\u7535\u8def\u57fa\u677f",
                    "data": "\u9996\u5148\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4f7f\u7528\u786b\u9178\u5c06\u91d1\u7b94\u548c\u73af\u6c27\u6811\u8102\u7247\u7ed3\u5408\u5236\u53d6\u73af\u6c27\u6811\u8102\u57fa\u677f.\u7136\u540e\u518d\u4f7f\u7528\u6c2f\u5316\u94c1\u6216\u8005\u8fc7\u786b\u9178\u94a0\u5c06\u7425\u73c0\u91d1\u677f\u548c\u73af\u6c27\u6811\u8102\u57fa\u677f\u7ed3\u5408,\u5c31\u53ef\u4ee5\u5f97\u5230\u9ad8\u7ea7\u7535\u8def\u57fa\u677f\u4e86. \u4ee5\u4e0a\u5236\u4f5c\u8fc7\u7a0b\u90fd\u9700\u8981\u7528\u5230\u5316\u5b66\u53cd\u5e94\u91dc."
                },
                {
                    "name": "\u7ea4\u7ef4\u5f3a\u5316\u7535\u8def\u57fa\u677f",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1677.png",
                    "x": 750.0,
                    "y": 90.0,
                    "tooltip": "\u7ea4\u7ef4\u5f3a\u5316\u7535\u8def\u57fa\u677f",
                    "data": "\u5c06\u7ea4\u7ef4\u5f3a\u5316\u7684\u73af\u6c27\u6811\u8102\u7247\u3001\u94dd\u7b94\u548c\u786b\u9178\u8fdb\u884c\u53cd\u5e94,\u53ef\u4ee5\u83b7\u5f97\u7ea4\u7ef4\u5f3a\u5316\u7535\u8def\u57fa\u677f. \u518d\u6dfb\u52a0\u5145\u80fd\u91d1\u5c5e\u7b94\u548c\u4e09\u6c2f\u5316\u94c1/\u8fc7\u786b\u9178\u94a0,\u5c31\u53ef\u4ee5\u5236\u9020\u51fa\u7cbe\u5236\u7535\u8def\u57fa\u677f.%n%n\u5982\u679c\u4f60\u4e0d\u60f3\u9020\u5170\u6ce2\u987f\u80fd\u91cf\u7403(\u5904\u7406\u9635\u5217\u7684\u539f\u6599\u4e4b\u4e00),\u5269\u4e0b\u7684\u4efb\u52a1\u7ebf\u5728IV\u9636\u6bb5."
                },
                {
                    "name": "\u672b\u5f71\u86cb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1657.png",
                    "x": 360.0,
                    "y": 420.0,
                    "tooltip": "\u672b\u5f71\u86cb",
                    "data": "\u4e0b\u4e00\u6b65,\u4f60\u5fc5\u987b\u7ed9\u4f60\u7684\u57fa\u56e0\u7a81\u53d8\u86cb\u6ce8\u5165\u7ec8\u672b\u952d\u7c89\u548c\u7194\u878d\u672b\u5f71\u73cd\u73e0,\u4ee5\u83b7\u5f97\u4e00\u4e2a\u672b\u5f71\u86cb. \u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u4e00\u6bb5\u65f6\u95f4.\u5728\u5f00\u59cb\u6b64\u8fc7\u7a0b\u4e4b\u524d,\u4f60\u7684\u8d85\u51c0\u95f4\u5fc5\u987b100\uff05\u6e05\u6d01.(\u6216\u662f\u4f7f\u7528\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.)"
                },
                {
                    "name": "\u73af\u6c27\u6c2f\u4e19\u70f7",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1228.png",
                    "x": 666.0,
                    "y": 150.0,
                    "tooltip": "\u73af\u6c27\u6c2f\u4e19\u70f7",
                    "data": "\u73af\u6c27\u6c2f\u4e19\u70f7\u662f\u5236\u4f5c\u73af\u6c27\u6811\u8102\u7684\u5316\u5de5\u539f\u6599\u4e4b\u4e00. \u5230\u5982\u4eca\u8fd9\u4e2a\u5730\u6b65,\u4f60\u5e94\u8be5\u6709\u8db3\u591f\u7684\u7ecf\u9a8c\u6765\u6839\u636eNEI\u786e\u5b9a\u54ea\u6761\u8def\u5f84\u662f\u6700\u9002\u5408\u4f60\u81ea\u5df1\u7684\u4e86."
                },
                {
                    "name": "\u73af\u6c27\u5316\u7269",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1224.png",
                    "x": 606.0,
                    "y": 18.0,
                    "tooltip": "\u73af\u6c27\u5316\u7269",
                    "data": "\u73af\u6c27\u5316\u7269\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u9ad8\u7ea7\u7535\u8def\u57fa\u677f.\u4f60\u9700\u8981\u5c06\u73af\u6c27\u6c2f\u4e19\u70f7\u3001\u53cc\u915aA\u548c\u6c22\u6c27\u5316\u94a0\u8fdb\u884c\u53cd\u5e94,\u53ef\u4ee5\u5236\u53d6\u51fa\u73af\u6c27\u6811\u8102.%n%n\u5728\u5176\u4ed6\u4e1c\u897f\u4e0a,\u4f60\u8fd8\u4f1a\u7528\u5230\u7194\u878d\u72b6\u6001,\u8bf7\u81ea\u884c\u67e5\u770bNEI."
                },
                {
                    "name": "EV\u7ec4\u88c5\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1406.png",
                    "x": 480.0,
                    "y": 120.0,
                    "tooltip": "EV\u7ec4\u88c5\u673a",
                    "data": "EV\u7ec4\u88c5\u673a\u662f\u5236\u4f5c\u5170\u6ce2\u987f\u6c34\u6676\u3001\u7ebf\u5708\u7684\u5fc5\u9700\u54c1.\u5176\u4f59\u914d\u65b9\u7684\u5de5\u4f5c\u901f\u5ea6\u662fHV\u7ec4\u88c5\u673a\u7684\u4e24\u500d."
                },
                {
                    "name": "EV\u5316\u5b66\u6d78\u6d17\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1252.png",
                    "x": 408.0,
                    "y": 192.0,
                    "tooltip": "EV\u5316\u5b66\u6d78\u6d17\u673a",
                    "data": "\u5236\u4f5c\u91cf\u5b50\u4e4b\u773c\u9700\u8981\u7528\u5230HV+\u7ea7\u522b\u6216\u4ee5\u4e0a\u7684\u5316\u5b66\u6d78\u6d17\u673a.\u6700\u597d\u505a\u4e00\u4e2aEV\u7684,\u8fd9\u6837\u4f60\u4e5f\u53ef\u4ee5\u66f4\u597d\u7684\u5904\u7406\u949b\u94c1\u77ff."
                },
                {
                    "name": "EV\u7ea7\u5316\u5b66\u53cd\u5e94\u91dc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1242.png",
                    "x": 672.0,
                    "y": 264.0,
                    "tooltip": "EV\u7ea7\u5316\u5b66\u53cd\u5e94\u91dc",
                    "data": "EV\u7ea7\u522b\u7684\u5316\u5b66\u53cd\u5e94\u91dc\u53ef\u4ee5\u8ba9\u4f60\u751f\u4ea7\u94df,\u540c\u65f6\u5927\u5927\u52a0\u5feb\u751f\u4ea7\u6c21\u7684\u901f\u5ea6.\u5982\u679c\u4f60\u5df2\u7ecf\u9020\u4e86\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc,\u53ef\u4ee5\u76f4\u63a5\u5347\u538b\u4f7f\u7528.%n%n\u5b8c\u6210\u4efb\u610f\u8981\u6c42\u5373\u53ef."
                },
                {
                    "name": "EV\u7ea7\u7535\u8def\u7ec4\u88c5\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1223.png",
                    "x": 228.0,
                    "y": 108.0,
                    "tooltip": "EV\u7ea7\u7535\u8def\u7ec4\u88c5\u673a",
                    "data": "EV\u7535\u8def\u7ec4\u88c5\u673a\u9700\u8981IV\u7535\u8def\u677f\u53c2\u4e0e\u5408\u6210.\u6709\u4e86\u8fd9\u53f0\u673a\u5668,\u4f60\u5c31\u80fd\u5236\u9020\u66f4\u52a0\u5148\u8fdb\u7684\u7535\u8def\u677f\u4e86."
                },
                {
                    "name": "EV Field Generators",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5984592636755449553.png",
                    "x": 144.0,
                    "y": 372.0,
                    "tooltip": "EV Field Generators",
                    "data": "With Field Generators you can make your first Quantum Chests or Quantum Tanks. But the first two should be for your T2 rocket.\n\n[note]Note that the Assembler recipe is more resource efficient.[/note]"
                },
                {
                    "name": "EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1407.png",
                    "x": 360.0,
                    "y": 108.0,
                    "tooltip": "EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "data": "\u5236\u9020\u91cf\u5b50\u6676\u4f53\u9700\u8981EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a. \u5176\u4ed6\u914d\u65b9\u7684\u901f\u5ea6\u662fHV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a\u7684\u4e24\u500d."
                },
                {
                    "name": "EV\u8d85\u5bfc(2048 EU/t)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1408.png",
                    "x": 192.0,
                    "y": 540.0,
                    "tooltip": "EV\u8d85\u5bfc(2048 EU/t)",
                    "data": "\u65e0\u635f\u7684EV\u8d85\u5bfc\u5bfc\u7ebf\u600e\u4e48\u6837\uff1fUraniumtriplatinide(EV\u8d85\u5bfc)\u662f\u4e00\u79cd\u8d85\u5bfc\u6750\u6599,\u53ef\u4ee5\u6beb\u65e0\u635f\u5931\u5730\u4f20\u9012\u80fd\u91cf. \u73b0\u5728\u6bcf\u4e2a\u7535\u538b\u90fd\u6709\u7ebf\u635f\u4e3a0\u7684\u8d85\u5bfc\u5bfc\u7ebf.%n%n\u5728\u9ad8\u538b\u6405\u62cc\u673a\u4e2d\u6405\u62cc\u94c0238\u548c\u94c2. \u5236\u5f97\u7684\u7c97\u80da\u7c89\u9700\u8981\u7528\u5e26\u6709\u949b\u94c2\u9492\u7ebf\u5708\u7684\u5de5\u4e1a\u9ad8\u7089(EBF)\u70e7\u5236. \u518d\u7528\u771f\u7a7a\u51b7\u51bb\u673a\u6765\u51b7\u5374\u5b83. \u5236\u4f5c\u4e00\u4e9bEV\u8d85\u5bfc\u7c97\u80da\u5bfc\u7ebf\u5e76\u4f7f\u7528\u7ec4\u88c5\u673a\u5c06\u8fd9\u4e9b\u5bfc\u7ebf\u4e0e\u6c26,\u94a8\u94a2\u6d41\u4f53\u7ba1\u9053\u548cIV\u6cf5\u7ec4\u5408\u5728\u4e00\u8d77,\u4ee5\u83b7\u5f972048EU/t\u8d85\u5bfc\u5bfc\u7ebf.%n%n\u5f53\u7136,\u662f\u5426\u9700\u8981\u4e3a\u4e86\u8282\u7701\u8fd9\u4e48\u4e00\u70b9\u80fd\u91cf,\u5c31\u901a\u8fc7\u8fd9\u4e48\u590d\u6742\u7684\u5de5\u5e8f\u5236\u9020\u8d85\u5bfc\u5bfc\u7ebf,\u5b8c\u5168\u53d6\u51b3\u4e8e\u4f60\u81ea\u5df1.%n%n\u8bd1\u8005\u6ce8:\u8fd9\u662fGTNH\u4e2d\u552f\u4e00\u73b0\u5b9e\u5b58\u5728\u3001\u6709\u636e\u53ef\u67e5\u7684\u8d85\u5bfc."
                },
                {
                    "name": "EXTREME MIXING",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8426991409753954133.png",
                    "x": 528.0,
                    "y": 396.0,
                    "tooltip": "EXTREME MIXING",
                    "data": "Well, maybe it's not as extreme as the quest name suggests, but it gets the job done.\n\nYou'll need one anyway so why not make one now and save some time on the mixing?"
                },
                {
                    "name": "\u7ea4\u7ef4\u5f3a\u5316\u73af\u6c27\u6811\u8102\u7247",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1676.png",
                    "x": 750.0,
                    "y": 18.0,
                    "tooltip": "\u7ea4\u7ef4\u5f3a\u5316\u73af\u6c27\u6811\u8102\u7247",
                    "data": "\u66f4\u5148\u8fdb\u7684\u7535\u8def\u677f\u9700\u8981\u7ea4\u7ef4\u5f3a\u5316\u73af\u6c27\u6811\u8102\u7247. \u5c06\u73bb\u7483\u7ea4\u7ef4\u4e0e\u73af\u6c27\u6811\u8102\u6df7\u5408\u8d77\u6765,\u53ef\u4ee5\u83b7\u5f97\u8fd9\u79cd\u7ea4\u7ef4\u5f3a\u5316\u7684\u8584\u7247. \u6216\u8005,\u4f60\u53ef\u4ee5\u4f7f\u7528\u78b3\u7ea4\u7ef4. \u6211\u4eec\u4e4b\u6240\u4ee5\u8981\u4f60\u505a\u4e2a\u8fd9\u662f\u56e0\u4e3a...\u91cd\u65b0\u5199\u4efb\u52a1\u592a\u9ebb\u70e6\u4e86."
                },
                {
                    "name": "Four fluids in the one Hatch!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7598566101277288092.png",
                    "x": 648.0,
                    "y": 336.0,
                    "tooltip": "Four fluids in the one Hatch!",
                    "data": "Now that you're in EV tier you now have access to the Quadruple input hatches. These hatches can hold four different fluids in the one hatch which saves valuable spots in your multiblocks.\n\nPerfect to be placed in your EBFs."
                },
                {
                    "name": "\u73bb\u7483\u7ea4\u7ef4",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1675.png",
                    "x": 678.0,
                    "y": 18.0,
                    "tooltip": "\u73bb\u7483\u7ea4\u7ef4",
                    "data": "\u73bb\u7483\u7ea4\u7ef4\u7528\u6765\u5236\u4f5c\u7ea4\u7ef4\u5f3a\u5316\u7535\u8def\u57fa\u677f.\u7528\u4e8e\u4e0b\u4e00\u9636\u7684\u7535\u8def\u677f.%n%n\u787c\u7802\u53ef\u4ee5\u4ece\u76d0\u77ff\u4e2d\u63d0\u53d6\u51fa\u6765.\u5c06\u5176\u7535\u89e3\u4ee5\u83b7\u5f97\u787c\u5e76\u5c06\u5176\u4e0e\u73bb\u7483\u7c89\u6405\u62cc\u5236\u6210\u787c\u73bb\u7483\u7c89.%n%n\u5236\u51fa\u7684\u952d\u53ef\u4ee5\u5728\u7ebf\u6750\u8f67\u673a\u6216\u538b\u6a21\u673a(\u63a8\u8350)\u4e2d\u5236\u6210\u73bb\u7483\u7ea4\u7ef4.%n%n\u787c\u73bb\u7483\u8fd8\u53ef\u4ee5\u7528\u6765\u5236\u9020\u66f4\u9ad8\u7ea7\u7684\u73bb\u7483,\u89e3\u9501\u66f4\u9ad8\u7ea7\u7684\u57f9\u517b\u7f38\u914d\u65b9,\u6216\u8005\u7528\u6765\u642d\u5efa\u5176\u4ed6\u591a\u65b9\u5757\u7ed3\u6784."
                },
                {
                    "name": "\u77f3\u58a8\u70ef",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/394.png",
                    "x": 480.0,
                    "y": 48.0,
                    "tooltip": "\u77f3\u58a8\u70ef",
                    "data": "IV\u9a6c\u8fbe\u9700\u8981\u77f3\u58a8\u70ef\u6765\u5236\u4f5c.\u77f3\u58a8\u70ef\u662f\u4e00\u79cd\u53ea\u6709\u4e00\u5c42\u539f\u5b50\u8584\u7684\u6750\u6599.\u5b83\u6709\u975e\u5e38\u826f\u597d\u7684\u7535\u6027\u80fd.\u4f60\u4e0d\u5f97\u4e0d\u73b0\u5728\u505a\u4e00\u70b9\u77f3\u58a8\u70ef\u6765\u5f97\u5230IV\u9a6c\u8fbe,\u4f60\u53ef\u4ee5\u4f7f\u7528\u5f3a\u5927\u7684\u7c98\u5408\u5242,\u628a\u5355\u5c42\u6750\u6599\u4ece\u77f3\u58a8\u4e0a\u62c9\u4e0b\u6765."
                },
                {
                    "name": "HEV Mk III \u9632\u62a4\u7cfb\u7edf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/189.png",
                    "x": 864.0,
                    "y": 216.0,
                    "tooltip": "HEV Mk III \u9632\u62a4\u7cfb\u7edf",
                    "data": "\u63a5\u4e0b\u6765\u4f60\u4f1a\u63a5\u89e6\u5230\u4e00\u4e9b\u6709\u6c61\u67d3\u751a\u81f3\u5f88\u5371\u9669\u7684\u4e1c\u897f. \u4f60\u53ef\u80fd\u4f1a\u5728\u8fd9\u91cc\u8ddf\u8bb8\u591a\u80ae\u810f\u7684\u4e1c\u897f\u6253\u4ea4\u9053,\u6240\u4ee5\u4f60\u8981\u505a\u597d\u6700\u574f\u7684\u6253\u7b97.%n%n\u8981\u662f\u4e0d\u505a\u597d\u9632\u62a4,\u67d0\u4e9b\u7269\u54c1\u4f1a\u7ed9\u4f60\u5e26\u6765\u8f90\u5c04\u72b6\u6001.\u8f90\u5c04\u72b6\u6001\u7684\u6301\u7eed\u65f6\u95f4\u53d6\u51b3\u4e8e\u7269\u54c1\u79cd\u7c7b.\u6709\u7684\u7269\u54c1\u7ed9\u4f60\u7684\u8f90\u5c04\u72b6\u6001\u6301\u7eed\u65f6\u95f4\u8d85\u957f\u751a\u81f3**.**,\u8fd9\u5c06\u6740\u6b7b\u4f60,\u56e0\u4e3a\u4f60\u65e0\u6cd5\u6446\u8131\u8fd9\u79cd\u72b6\u6001\u53ea\u80fd\u7b49\u6b7b.%n%n\u53e6\u4e00\u4e9b\u7269\u54c1\u5c06\u4f1a\u7ed9\u4f60\u5e26\u6765\u4e00\u4e9b\u5e38\u89c1\u5f02\u5e38\u72b6\u6001(debuff),\u800c\u4e0d\u662f\u76f4\u63a5\u8f90\u5c04\u72b6\u6001.\u8fd9\u6837\u5c31\u8fd8\u53ef\u4ee5\u62a2\u6551,\u6bd4\u5982\u725b\u5976\u3001\u5927\u5730\u75a3\u3001\u6c34\u871c\u8702\u7b49.%n%n\u5982\u679c\u4f60\u7a7f\u4e86\u4e00\u5957\u9632\u5316\u670d(\u522b\u5fd8\u4e86\u6a61\u80f6\u9774\u5b50!),\u90a3\u5c31\u4e0d\u4f1a\u53d7\u5230\u4efb\u4f55\u8f90\u5c04debuff\u5f71\u54cd. \u5176\u4ed6\u6709\u9632\u5316\u670d\u529f\u80fd(Provides-full-hazmat-protection)\u7684\u5957\u88c5\u4e5f\u6709\u8fd9\u4e2a\u6548\u679c."
                },
                {
                    "name": "\u66f4\u9ad8\u9636\u7684\u7ebf\u7f06",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2450.png",
                    "x": 714.0,
                    "y": 450.0,
                    "tooltip": "\u66f4\u9ad8\u9636\u7684\u7ebf\u7f06",
                    "data": "\u4f60\u9700\u8981\u4f7f\u7528\u805a\u82ef\u786b\u919a\u7b94\u548c\u7845\u6a61\u80f6\u624d\u80fd\u5236\u9020\u51fa\u66f4\u9ad8\u9636\u7684\u7ebf\u7f06. \u5728IV\u9636\u6bb5,\u4f60\u8fd8\u9700\u8981\u94a8\u548c\u94c2."
                },
                {
                    "name": "HSS-G",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1491.png",
                    "x": 198.0,
                    "y": 294.0,
                    "tooltip": "HSS-G",
                    "data": "\u5728\u7528\u94a8\u94a2\u5347\u7ea7\u4e86\u5de5\u4e1a\u9ad8\u7089\u7684\u7ebf\u5708,\u5e76\u5236\u9020\u4e86IV\u7ec4\u88c5\u673a\u540e,\u4f60\u53ef\u4ee5\u7528\u9ad8\u901f\u94a2(HSS-G)\u952d\u4e3a\u4f60\u7684\u9ad8\u7089\u6362\u4e0a\u65b0\u7684\u7ebf\u5708\u4e86.\u8fd9\u79cd\u952d\u5728LuV\u9636\u6bb5\u5f88\u91cd\u8981.%n%nHSS-G\u662f\u7531\u94a8\u94a2\u3001\u94ec\u3001\u94bc\u548c\u9492\u6df7\u5408\u800c\u6210\u7684."
                },
                {
                    "name": "\u6b21\u6c2f\u9178",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/859.png",
                    "x": 672.0,
                    "y": 192.0,
                    "tooltip": "\u6b21\u6c2f\u9178",
                    "data": "\u6b21\u6c2f\u9178\u9700\u8981\u6c34\u3001\u6c2f\u548c\u4e00\u4e9b\u6c5e.%n%n\u53ef\u7528\u4e8e\u9178\u6027\u53d1\u7535\u673a,\u6216\u5236\u6210\u73af\u6c27\u6c2f\u4e19\u70f7."
                },
                {
                    "name": "\u53cd\u5e94\u5806\u6269\u5bb9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/195.png",
                    "x": 816.0,
                    "y": 240.0,
                    "tooltip": "\u53cd\u5e94\u5806\u6269\u5bb9",
                    "data": "\u60f3\u8981\u91ca\u653e\u53cd\u5e94\u5806\u5168\u90e8\u7684\u6f5c\u529b,\u4f60\u5c31\u9700\u8981\u7ed9\u4f60\u7684\u53cd\u5e94\u5806\u52a0\u88c56\u4e2a\u53cd\u5e94\u4ed3."
                },
                {
                    "name": "\u94df",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1005.png",
                    "x": 516.0,
                    "y": 360.0,
                    "tooltip": "\u94df",
                    "data": "\u5728EV\u9636\u6bb5\u4f60\u9700\u8981\u94df\u6765\u5236\u4f5cHV\u7ea7\u522b\u7684\u592a\u9633\u80fd\u677f.\u4f46\u662f\u94df\u65e0\u6cd5\u901a\u8fc7\u77ff\u77f3\u83b7\u5f97(\u9664\u4e86\u5728\u7f57\u65af\u4e0a\u6709\u6781\u5c0f\u50a8\u91cf).%n%n\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7EV\u7ea7\u7684\u5316\u5b66\u53cd\u5e94\u91dc\u5236\u5907\u94df. \u9996\u5148\u4f60\u9700\u8981\u5c06\u6d17\u5e72\u51c0\u7684\u65b9\u94c5\u77ff\u548c\u95ea\u950c\u77ff\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u548c\u786b\u9178\u8fdb\u884c\u53cd\u5e94\u5f97\u5230\u94df\u5bcc\u96c6\u6eb6\u6db2,\u7136\u540e\u5728\u94df\u5bcc\u96c6\u6eb6\u6db2\u4e2d\u52a0\u5165\u94dd\u7c89\u518d\u6b21\u8fdb\u884c\u53cd\u5e94\u540e\u624d\u80fd\u5f97\u5230\u4e00\u70b9\u70b9\u94df\u7c89. \u540e\u9762\u94df\u7684\u7528\u91cf\u4f1a\u5f88\u5927,\u6240\u4ee5\u8bf7\u5c3d\u5feb\u5b8c\u6210\u94df\u7684\u81ea\u52a8\u5316\u751f\u4ea7.%n%n\u5269\u4e0b\u7684\u94c5\u950c\u6eb6\u6db2\u8fd8\u80fd\u5206\u79bb\u56de\u6536\u94c5\u3001\u950c\u3001\u94f6\u3001\u786b\u548c\u6c34. \u6240\u4ee5\u5176\u5b9e\u4e5f\u4e0d\u80fd\u8bf4\u77ff\u77f3\u4e2d\u7edd\u5bf9\u4e0d\u80fd\u83b7\u5f97\u94df,\u53ea\u662f\u7ecf\u8fc7\u7684\u6b65\u9aa4\u591a\u4e86\u70b9,\u4ea7\u91cf\u5c11\u4e86\u70b9\u800c\u5df2.%n%n WIKI \u94df\u4ea7\u7ebf\uff1agtnh.huijiwiki.com/p/1146"
                },
                {
                    "name": "\u79ef\u5c11\u6210\u94a8\u94a2",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2390.png",
                    "x": 258.0,
                    "y": 294.0,
                    "tooltip": "\u79ef\u5c11\u6210\u94a8\u94a2",
                    "data": "\u597d\u5427,\u73b0\u5728\u4f60\u53ef\u4ee5:%n%n1) \u914d\u5408\u4e00\u4e9b\u78b3\u7c89,\u5c06\u4e09\u6c27\u5316\u94a8\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u5904\u7406\u6210\u70ed\u94a8\u952d%n2) \u7ee7\u7eed\u5236\u6210\u94a8\u94a2%n%n\u6211\u4eec\u9700\u8981\u7684\u662f\u94a8\u94a2,\u6240\u4ee5\u5c06\u4e09\u6c27\u5316\u94a8\u4e0e\u6c22\u6c14\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u7145\u70e7,\u8131\u53bb\u6c27.%n%n\u518d\u5c06\u83b7\u5f97\u7eaf\u94a8\u4e0e\u94a2\u6405\u62cc\u6df7\u5408,\u83b7\u5f97\u94a8\u94a2\u7c89.%n%n\u94a8\u94a2\u7c89\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u7194\u70bc\u540e\u518d\u51b7\u51bb,\u83b7\u5f97\u94a8\u94a2\u952d.%n%n\u8bf7\u6ce8\u610f,\u4e09\u6c27\u5316\u94a8->\u94a8\u952d,\u8fd9\u4e00\u5904\u7406\u53ef\u4ee5\u7f29\u77ed\u70e7\u5236\u65f6\u95f4.\u7eaf\u94a8\u7c89\u6ca1\u6cd5\u8fd9\u4e48\u505a. \u5230IV\u9636\u6bb5\u4f60\u9700\u8981\u6210\u5428\u7684\u94a8\u548c\u94a8\u94a2,\u6240\u4ee5\u5c3d\u91cf\u7f29\u77ed\u70e7\u5236\u65f6\u95f4\u662f\u6709\u5fc5\u8981\u7684."
                },
                {
                    "name": "\u5170\u6ce2\u987f\u7c89\u672b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/805.png",
                    "x": 432.0,
                    "y": 108.0,
                    "tooltip": "\u5170\u6ce2\u987f\u7c89\u672b",
                    "data": "\u4e3a\u5236\u4f5c\u5170\u6ce2\u987f\u6c34\u6676,\u4f60\u9700\u8981\u6405\u62cc\u80fd\u91cf\u6c34\u6676\u7c89\u53ca\u9752\u91d1\u77f3\u7c89."
                },
                {
                    "name": "\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/194.png",
                    "x": 816.0,
                    "y": 204.0,
                    "tooltip": "\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806",
                    "data": "\u73b0\u5728\u4f60\u5df2\u7ecf\u521d\u6b65\u638c\u63e1\u4e86\u63a7\u5236\u53cd\u5e94\u5806\u7684\u4e00\u4e9b\u57fa\u672c\u77e5\u8bc6,\u53ef\u4ee5\u5efa\u7acb\u81ea\u5df1\u7684\u53d1\u7535\u7ad9\u4e86.\u65f6\u523b\u4e86\u89e3\u4f60\u7684\u53cd\u5e94\u5806\u7684\u8fd0\u884c\u72b6\u6001\u5341\u5206\u91cd\u8981(\u6216\u8005\u53ef\u80fd\u4f60\u4ec5\u4ec5\u662f\u770b\u4e2d\u4e86\u8fd9\u4e2a\u6f02\u4eae\u7684\u5927\u5c4f\u5e55...).\u6211\u8fd9\u91cc\u6709\u4e9b\u4e1c\u897f\u53ef\u4ee5\u5e2e\u52a9\u5230\u4f60.%n%n\u5bf9\u7740\u4f60\u60f3\u8981\u76d1\u89c6\u7684\u65b9\u5757\u4f7f\u7528\u4f20\u611f\u5de5\u5177,\u7136\u540e\u628a\u5f97\u5230\u7684\u5361\u7247\u653e\u5728\u663e\u793a\u9762\u677f\u4e2d. \u63a5\u4e0b\u6765,\u9009\u62e9\u8981\u663e\u793a\u7684\u4fe1\u606f\u6761\u76ee."
                },
                {
                    "name": "\u9700\u8981\u66f4\u591a\u7684\u7535\u529b,\u5148\u751f!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2023.png",
                    "x": 456.0,
                    "y": 456.0,
                    "tooltip": "\u9700\u8981\u66f4\u591a\u7684\u7535\u529b,\u5148\u751f!",
                    "data": "\u5de5\u4e1a\u9ad8\u7089\u548c\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u7684\u914d\u65b9\u9700\u8981\u8d8a\u6765\u8d8a\u591a\u7684\u7535\u529b.  \u4f60\u9700\u8981\u5408\u6210EV\u80fd\u6e90\u4ed3\u4f9b\u7535,\u4ee5\u4fdd\u6301\u5b83\u4eec\u6301\u7eed\u8fd0\u884c."
                },
                {
                    "name": "\u70ed\u4ea4\u6362",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/196.png",
                    "x": 864.0,
                    "y": 324.0,
                    "tooltip": "\u70ed\u4ea4\u6362",
                    "data": "\u53cd\u5e94\u5806\u7684\u6e29\u5ea6\u4f1a\u5347\u9ad8.\u56e0\u6b64\u4f60\u9700\u8981\u5c06\u71c3\u6599\u68d2\u7684\u6e29\u5ea6\u8f6c\u79fb\u5230\u5176\u4ed6\u4ec0\u4e48\u5730\u65b9\u53bb.%n\u70ed\u4ea4\u6362\u5668\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u79cd\u529f\u80fd,\u4f60\u5e94\u8be5\u6bcf\u4e00\u79cd\u70ed\u4ea4\u6362\u5668\u90fd\u5236\u9020\u4e00\u4e2a,\u5e76\u4e14\u8bd5\u4e00\u8bd5\u54ea\u4e00\u79cd\u66f4\u9002\u5408\u4f60\u7684\u53cd\u5e94\u5806.%n%n\u4f60\u53ef\u4ee5\u901a\u8bfbwiki\u540e\u8bd5\u7740\u7406\u89e3\u53cd\u5e94\u5806\u7684\u5de5\u4f5c\u539f\u7406,\u6216\u8005\u76f4\u63a5\u6284\u4f5c\u4e1a..."
                },
                {
                    "name": "\u529b\u573a\u53d1\u751f\u5668(MV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1880.png",
                    "x": 60.0,
                    "y": 24.0,
                    "tooltip": "\u529b\u573a\u53d1\u751f\u5668(MV)",
                    "data": "\u529b\u573a\u53d1\u751f\u5668\u662f\u4e00\u79cd\u5f3a\u5927\u4f46\u6602\u8d35\u7684\u8bbe\u5907."
                },
                {
                    "name": "\u7eb3\u7c73\u6676\u5706\u548cCPU",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1249.png",
                    "x": 354.0,
                    "y": 18.0,
                    "tooltip": "\u7eb3\u7c73\u6676\u5706\u548cCPU",
                    "data": "\u7eb3\u7c73CPU\u6676\u5706\u662f\u7531CPU\u6676\u5706,\u6dfb\u52a0\u751f\u78b3\u7ea4\u7ef4,\u518d\u4e0e\u7194\u878d\u8424\u77f3\u8fdb\u884c\u53cd\u5e94\u540e\u5f97\u5230\u7684\u4e00\u79cd\u7eb3\u7c73\u7ea7CPU\u6676\u5706. \u5207\u5272\u7eb3\u7c73CPU\u6676\u5706\u5c31\u53ef\u4ee5\u5f97\u5230\u7eb3\u7c73CPU\u4e86."
                },
                {
                    "name": "\u7eb3\u7c73\u5904\u7406\u5668",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1248.png",
                    "x": 144.0,
                    "y": 24.0,
                    "tooltip": "\u7eb3\u7c73\u5904\u7406\u5668",
                    "data": "\u8fd9\u91cc\u662f\u7eb3\u7c73\u7cfb\u5217\u7535\u8def\u677f.\u5b83\u4eec\u6700\u5927\u7684\u610f\u4e49\u5c31\u5728\u4e8e\u901a\u8fc7\u524d\u4e09\u79cd,\u5957\u5a03\u51fa\u6700\u540e\u4e00\u79cd\u7535\u8def\u677f,\u5b83\u4eec\u90fd\u53eb\u540c\u4e00\u4e2a\u540d\u5b57(\u5728\u8fd9\u91cc\u5c31\u662f\u7eb3\u7c73)."
                },
                {
                    "name": "\u7eb3\u7c73\u5904\u7406\u5668\u96c6\u7fa4",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1250.png",
                    "x": 144.0,
                    "y": 108.0,
                    "tooltip": "\u7eb3\u7c73\u5904\u7406\u5668\u96c6\u7fa4",
                    "data": "\u7eb3\u7c73\u5904\u7406\u5668\u96c6\u7fa4\u662fEV\u7ea7\u7535\u8def.%n\u751f\u4ea7\u8fc7\u7a0b\u4e2d\u540c\u6837\u9700\u8981\u4fdd\u8bc1\u5168\u7a0b\u65e0\u5c18."
                },
                {
                    "name": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1261.png",
                    "x": 144.0,
                    "y": 276.0,
                    "tooltip": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a",
                    "data": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a\u662f\u4f60\u80fd\u5236\u9020\u7684\u7b2c\u4e00\u79cdLuV\u7ea7\u7535\u8def\u677f,\u4e5f\u662fEV\u65f6\u4ee3\u751f\u4ea7\u7684\u7535\u8def\u677f\u7cfb\u5217\u4e2d\u7684\u6700\u540e\u4e00\u4e2a.\u4e3a\u4e86\u5408\u62102\u9636\u706b\u7bad\u5e76\u62b5\u8fbe\u706b\u661f,\u706b\u536b\u4e00\u548c\u706b\u536b\u4e8c,\u4f60\u9700\u8981\u5236\u4f5c8\u4e2a\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a.%n%n\u5728\u90a3\u4e4b\u540e,\u4f60\u5c06\u66f4\u52a0\u5bb9\u6613\u8fdb\u5165IV\u65f6\u4ee3,\u4f46\u4f60\u8fd8\u9700\u8981\u989d\u5916\u4e24\u4e2a\u7535\u8def\u677f\u53bb\u5236\u4f5cIV\u7535\u8def\u7ec4\u88c5\u673a."
                },
                {
                    "name": "\u613f\u518d\u65e0\u7206\u70b8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1902.png",
                    "x": 864.0,
                    "y": 288.0,
                    "tooltip": "\u613f\u518d\u65e0\u7206\u70b8",
                    "data": "\u6709\u4e86\u6838(\u5f39)\u53cd\u5e94\u5806\u4e4b\u540e,\u4f60\u5bf9\u57fa\u5730\u7684\u7834\u574f\u80fd\u529b\u7a81\u7834\u4e86\u5929\u9645...\u4f60\u53ef\u4ee5\u628a\u53cd\u5e94\u5806\u653e\u5f97\u8fdc\u8fdc\u7684(20\u533a\u5757\u8fdc),\u6216\u662f\u7528\u9632\u7206\u6750\u6599\u5c06\u53cd\u5e94\u5806\u56f4\u4e2a\u4e25\u4e25\u5b9e\u5b9e.%n%nEIO\u7684\u77f3\u82f1\u73bb\u7483\u4e0d\u518d\u597d\u7528,\u5fd8\u4e86\u5b83\u4eec\u5427.\u8bf7\u4f7f\u7528GTNH\u8ba4\u8bc1\u7684\u9540\u5c42\u9632\u7206\u77f3\u7cfb\u5217!  \u5176\u4ed6\u7684\u53ef\u9009\u9632\u7206\u6750\u6599\u8fd8\u5305\u62ec\u795e\u79d8\u7684\u5b88\u536b\u8005\u73bb\u7483.\u6839\u636e\u4f60\u7684\u53cd\u5e94\u5806\u5a01\u529b,\u53ef\u80fd\u9700\u8981\u591a\u5c42\u9632\u7206\u77f3,\u8bf7\u5728\u521b\u9020\u6a21\u5f0f\u6d4b\u8bd5. \u8bb0\u5f97\u8f6c\u89d2\u90e8\u4f4d\u4e5f\u9700\u8981\u95ed\u5408\u8d77\u6765-\u5426\u5219\u7206\u70b8\u4f1a\u4ece\u8f6c\u89d2\u7684\u7f1d\u9699\u5904\u6f0f\u51fa\u6765. \u81f3\u4e8e\u600e\u4e48\u628a\u7535\u5bfc\u51fa\u6765...\u53ea\u8981\u7ed9\u7ebf\u7f06\u6765\u51e0\u4e2a90\u00b0\u62d0\u5f2f\u5c31\u597d\u4e86,\u56e0\u4e3a\u7206\u70b8\u662f\u8d70\u76f4\u7ebf\u7684.%n%n\u6709\u516d\u79cd\u9540\u5c42\u9632\u7206\u77f3,\u5177\u4f53\u8bf7\u67e5\u770bNEI.%n%n\u597d\u5427,\u597d\u5427,\u4f60\u4e0d\u5fc5\u5fd8\u8bb0\u77f3\u82f1\u73bb\u7483,\u6211\u4f1a\u7ed9\u4f60\u4e00\u4e9b\u7684.\u4e5f\u8bb8\u4f60\u53ef\u4ee5\u7528\u5b83\u6321\u96e8."
                },
                {
                    "name": "\u90a6\u5fb7\u5148\u751f,\u4e00\u4e2a\u9f99\u86cb\u662f\u4e0d\u591f\u7684",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1655.png",
                    "x": 312.0,
                    "y": 372.0,
                    "tooltip": "\u90a6\u5fb7\u5148\u751f,\u4e00\u4e2a\u9f99\u86cb\u662f\u4e0d\u591f\u7684",
                    "data": "\u9f99\u86cb\u662f\u975e\u5e38\u7f55\u89c1\u7684,\u53ea\u6709\u5728\u9f99\u6b7b\u540e\u624d\u4f1a\u6389\u843d.\u8ba9\u6211\u544a\u8bc9\u4f60\u5982\u4f55\u4ece\u602a\u7269\u86cb\u91cd\u65b0\u5236\u9020\u51fa\u8fd9\u4e2a\u5f3a\u5927\u7684\u7269\u54c1.%n%n\u8ba9\u6211\u4eec\u4ece\u7b2c\u4e00\u6b65\u5f00\u59cb.\u4f7f\u7528\u602a\u7269\u86cb(\u968f\u610f\u9009\u62e9,\u5982\u679c\u6ca1\u6709,\u53ef\u4ee5\u5728\u201c\u786c\u5e01\u201d\u4efb\u52a1\u680f\u8d2d\u4e70),\u57f9\u517b\u57fa\u548c\u7ec6\u83cc\u6765\u5236\u4f5c\u5927\u9e21\u86cb. \u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u4e00\u6bb5\u65f6\u95f4.\u786e\u4fdd\u4f60\u7684\u8d85\u51c0\u95f4100\uff05\u6e05\u6d01,\u5426\u5219\u4f60\u5c06\u4f1a\u6709\u5931\u53bb\u7269\u54c1\u7684\u98ce\u9669.(\u8bd1\u8005\u6ce8:\u5176\u5b9e\u8d85\u51c0\u95f4\u7684\u6d01\u51c0\u5ea6\u53ea\u5728\u914d\u65b9\u5f00\u59cb\u7684\u4e00\u77ac\u95f4\u6709\u6548,\u90a3\u65f6\u5df2\u7ecf\u51b3\u5b9a\u4e86\u8fd9\u6b21\u5904\u7406\u662f\u5426\u4f1a\u541e\u4ea7\u7269)(\u6216\u662f\u4f7f\u7528\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.)  \u5982\u679c\u4f60\u8fd8\u6ca1\u53bb\u8fc7\u706b\u661f,\u4f60\u5fc5\u987b\u7b49\u5230\u53bb\u8fc7\u4e4b\u540e,\u518d\u8fdb\u884c\u4e0b\u4e00\u6b65\u7684\u8bf1\u53d8."
                },
                {
                    "name": "\u5176\u4ed6\u77ff\u77f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1244.png",
                    "x": 96.0,
                    "y": 456.0,
                    "tooltip": "\u5176\u4ed6\u77ff\u77f3",
                    "data": "\u5728\u8fd9\u4e9b\u661f\u7403\u4e0a\u8fd8\u53ef\u4ee5\u627e\u5230\u4e00\u4e9b\u5176\u4ed6\u77ff\u77f3(\u5176\u4e2d\u6709\u4e9b\u8001\u5b9e\u8bf4\u6ca1\u5565\u7528),\u5f53\u524d\u9636\u6bb5\u6700\u6709\u53ef\u80fd\u7528\u5230\u7684\u5728\u53f3\u8fb9\u5217\u51fa. \u8fd8\u6709\u9f99\u77ff\u3001\u7389\u3001\u8292\u785d\u3001\u5766\u6851\u77f3\u3001\u6e29\u7279\u59c6\u548c\u5e7d\u51a5\u5267\u6bd2\u7ed3\u6676."
                },
                {
                    "name": "\u82ef\u915a1",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1229.png",
                    "x": 606.0,
                    "y": 210.0,
                    "tooltip": "\u82ef\u915a1",
                    "data": "\u5236\u53d6\u82ef\u915a\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u5c31\u662f\u901a\u8fc7\u84b8\u998f\u5ba4\u84b8\u998f\u91cd\u71c3\u6cb9. \u5f53\u7136\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5f02\u4e19\u82ef\u548c\u548c\u6c27\u6c14\u53cd\u5e94,\u6c34\u3001\u6c2f\u3001\u82ef\u53cd\u5e94,\u6216\u662f\u84b8\u998f\u901a\u8fc7\u70ed\u89e3\u7089\u83b7\u53d6\u7684\u6728\u7126\u6cb9\u7b49\u591a\u79cd\u65b9\u5f0f\u83b7\u5f97."
                },
                {
                    "name": "\u94c2\u5904\u7406,\u6b65\u9aa44",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2296.png",
                    "x": 582.0,
                    "y": 570.0,
                    "tooltip": "\u94c2\u5904\u7406,\u6b65\u9aa44",
                    "data": "\u6c2f\u5316\u94c2?\u8fd9\u5c31\u662f\u6211\u8bf4\u7684\u66f4\u9ad8\u6548\u7684\u94c2\u5904\u7406\u65b9\u5f0f,\u5176\u83b7\u53d6\u7eaf\u94c2\u7684\u6548\u7387\u8fdc\u9ad8\u4e8e\u76f4\u63a5\u7194\u70bc!\u4e0d\u7528\u62c5\u5fc3,\u53ea\u9700\u5c06\u6c2f\u5316\u94c2\u4e0e\u9499\u53cd\u5e94\u5373\u53ef\u83b7\u5f97\u7eaf\u94c2,\u800c\u9499\u548c\u6c2f\u8fd8\u53ef\u4ee5\u5faa\u73af\u5229\u7528!"
                },
                {
                    "name": "\u94c2\u5904\u7406,\u6b65\u9aa43",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2297.png",
                    "x": 582.0,
                    "y": 510.0,
                    "tooltip": "\u94c2\u5904\u7406,\u6b65\u9aa43",
                    "data": "\u4e07\u5c81!\u6211\u7684\u6240\u6709\u94c2\u91d1\u5c5e\u7c89\u90fd\u53d8\u6210\u6db2\u6001\u7684\u4e86...\u662f\u65f6\u5019\u6dfb\u52a0\u7b2c\u4e8c\u79cd\u5316\u5b66\u7269\u8d28\u4f7f\u7c89\u672b\u91cd\u7ed3\u6676\u4e86.%n%n\u63a5\u4e0b\u6765\u4e0d\u540c\u7684\u4ea7\u7269\u6709\u4e0d\u540c\u7684\u5904\u7406\u65b9\u5f0f:%n%n\u518d\u6c89\u6dc0\u94c2: \u8fdb\u5165\u6b65\u9aa44,\u5373\u6700\u540e\u4e00\u6b65.%n\u94c2\u76d0: \u8fdb\u5165\u56de\u6536\u6b65\u9aa4.%n\u5bcc\u94af\u6c28: \u4e0e\u94c2\u6e23\u7c7b\u4f3c,\u7559\u5230IV\u518d\u5904\u7406. \u4e0d\u8fc7\u4f60\u60f3\u7684\u8bdd,\u4e5f\u53ef\u4ee5\u73b0\u5728\u5c31\u5904\u7406\u5b83\u4eec,\u4f46\u4f60\u76ee\u524d\u5176\u5b9e\u4e0d\u9700\u8981\u5b83\u4eec\u7684\u4ea7\u7269.%n\u5176\u4ed6: \u53ef\u56de\u6536."
                },
                {
                    "name": "\u94c2\u5904\u7406,\u6b65\u9aa42b",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2299.png",
                    "x": 582.0,
                    "y": 450.0,
                    "tooltip": "\u94c2\u5904\u7406,\u6b65\u9aa42b",
                    "data": "\u73b0\u5728,\u4f60\u5df2\u7ecf\u83b7\u5f97\u4e86\u6240\u9700\u7684\u6240\u6709\u5316\u5b66\u54c1.\u90a3\u4e48,\u9996\u5148\u5c06\u6240\u6709\u94c2\u91d1\u5c5e\u7c89\u7528\u738b\u6c34\u6eb6\u89e3.\u540c\u65f6,\u4f60\u8fd8\u4f1a\u83b7\u5f97\u4e00\u4e9b\u94c2\u6e23\u7c89.\u8fd9\u79cd\u9ad8\u6d53\u7f29\u7684\u7c89\u672b\u4e2d\u542b\u6709\u591a\u79cd\u7a00\u6709\u91d1\u5c5e,\u5982\u94f1\u3001\u9507\u3001\u94d1\u548c\u948c.\u5728IV\u4ee5\u4e0a\u7684\u9636\u6bb5,\u4f60\u4f1a\u9700\u8981\u8fd9\u4e9b\u91d1\u5c5e\u7684,\u6240\u4ee5\u73b0\u5728\u5c31\u5f00\u59cb\u56e4\u79ef\u5b83\u4eec\u5427!"
                },
                {
                    "name": "\u94c2\u5904\u7406,\u6b65\u9aa41",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2300.png",
                    "x": 582.0,
                    "y": 390.0,
                    "tooltip": "\u94c2\u5904\u7406,\u6b65\u9aa41",
                    "data": "\u738b\u6c34-\u9178\u4e2d\u4e4b\u738b-\u662f\u4e00\u79cd\u53ef\u4ee5\u6eb6\u89e3\u94c2\u7684\u5316\u5b66\u7269\u8d28.\u8fd9\u662f\u94c2\u5904\u7406\u7684\u7406\u60f3\u6eb6\u5242.\u5236\u5907\u4e00\u4e9b\u5427.%n%n\u4f60\u5df2\u7ecf\u642d\u597d\u4e86\u6574\u6761\u81ea\u52a8\u5316\u94c2\u7ebf,\u4e0d\u60f3\u518d\u4e00\u4e2a\u4e2a\u8d70\u8fd9\u4e9b\u5355\u5143\u4efb\u52a1\u4e86? \u624b\u6301\u4efb\u610f\u4e00\u7ec4\u94c2\u7ebf\u7684\u6700\u7ec8\u4ea7\u7269\u7c89,\u5373\u53ef\u8df3\u8fc7\u76f8\u5e94\u7684\u4efb\u52a1\u7ebf.%n%n\u8bd1\u8005\u6ce8:GTNH\u7684\u738b\u6c34\u7ec4\u6210\u5e76\u4e0d\u79d1\u5b66.\u73b0\u5b9e\u4e2d\u7684\u738b\u6c34\u662f\u7531\u6d53\u785d\u9178:\u6d53\u76d0\u9178"
                },
                {
                    "name": "\u94c2\u5904\u7406,\u6b65\u9aa42a",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2301.png",
                    "x": 522.0,
                    "y": 450.0,
                    "tooltip": "\u94c2\u5904\u7406,\u6b65\u9aa42a",
                    "data": "\u6c2f\u5316\u94f5\u662f\u4e00\u79cd\u5316\u5b66\u7269\u8d28,\u53ef\u7528\u4e8e\u5c06\u6eb6\u89e3\u7684\u94c2\u4ee5\u7eaf\u51c0\u6001\u6790\u51fa,\u4f60\u9700\u8981\u5236\u5907\u4e00\u4e9b."
                },
                {
                    "name": "\u94c2\u76d0\u56de\u6536",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2298.png",
                    "x": 654.0,
                    "y": 510.0,
                    "tooltip": "\u94c2\u76d0\u56de\u6536",
                    "data": "\u4ec0\u4e48,\u56de\u6536?\u592a\u8822\u4e86.\u6211\u53ea\u60f3\u9500\u6bc1\u8fd9\u4e9b\u4e1c\u897f!--\u8fd9\u53ef\u80fd\u5c31\u662f\u4f60\u73b0\u5728\u7684\u60f3\u6cd5,\u4f46\u4f60\u9700\u8981\u77e5\u9053,\u94c2\u76d0\u4e2d\u7684\u94c2\u542b\u91cf\u4ecd\u7136\u5f88\u9ad8.\u6211\u4eec\u5e94\u8be5\u5bf9\u5176\u8fdb\u884c\u56de\u6536,\u4ee5\u4ece\u4e2d\u83b7\u53d6\u5c3d\u53ef\u80fd\u591a\u7684\u94c2!%n%n\u7b5b\u9009\u53ef\u4ee5\u83b7\u5f97\u7cbe\u70bc\u94c2\u76d0.\u51fa\u4ea7\u51e0\u7387\u4e3a95\uff05."
                },
                {
                    "name": "EV\u9636\u6bb5,\u4e0e\u7c89\u5171\u821e",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2980.png",
                    "x": 438.0,
                    "y": 294.0,
                    "tooltip": "EV\u9636\u6bb5,\u4e0e\u7c89\u5171\u821e",
                    "data": "EV\u9ad8\u538b\u91dc\u7528\u4e8e\u5904\u7406\u94a8\u4ee5\u53ca\u5176\u4ed6\u9ad8\u9636\u6750\u6599."
                },
                {
                    "name": "\u805a\u82ef\u786b\u919a",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2449.png",
                    "x": 714.0,
                    "y": 390.0,
                    "tooltip": "\u805a\u82ef\u786b\u919a",
                    "data": "\u5c06\u5bf9\u4e8c\u6c2f\u82ef\u4e0e\u786b\u5316\u94a0\u52a0\u4e0a\u6c27\u6c14\u53cd\u5e94,\u4f60\u5c31\u80fd\u83b7\u5f97\u805a\u82ef\u786b\u919a\u4e86."
                },
                {
                    "name": "\u805a\u4e59\u9178\u4e59\u70ef\u916f",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/460.png",
                    "x": 546.0,
                    "y": 150.0,
                    "tooltip": "\u805a\u4e59\u9178\u4e59\u70ef\u916f",
                    "data": "\u4f60\u73b0\u5728\u5df2\u7ecf\u77e5\u9053\u805a\u5408\u662f\u600e\u4e48\u5b8c\u6210\u7684\u4e86.\u7528\u7a7a\u6c14\u6216\u6c27\u6c14,\u8fd8\u6709\u53ef\u9009\u7684\u56db\u6c2f\u5316\u949b\u6765\u83b7\u5f97\u805a\u4e59\u9178\u4e59\u70ef\u916f."
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6d1e\u7a74?\u4fbf\u643a\u5f0f\u533a\u5757\u600e\u4e48\u6837!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1847.png",
                    "x": 312.0,
                    "y": 420.0,
                    "tooltip": "\u4fbf\u643a\u5f0f\u6d1e\u7a74?\u4fbf\u643a\u5f0f\u533a\u5757\u600e\u4e48\u6837!",
                    "data": "\u901a\u8fc7\u8fdb\u4e00\u6b65\u7814\u7a76,\u6211\u53d1\u73b0\u4e86\u7528\u7075\u9b42\u4e4b\u94c1\u5236\u4f5c\u7684\u7075\u9b42\u4e4b\u5319\u53ef\u4ee5\u6253\u5f00\u4e00\u4e2a\u8896\u73cd\u7ef4\u5ea6(\u901a\u7075\u4e16\u754c).\u8fd9\u4e2a\u7ef4\u5ea6\u53ea\u6709\u4e00\u4e2a\u533a\u5757\u5bbd,\u4f46\u975e\u5e38\u9002\u5408\u4ece\u9065\u8fdc\u7684\u661f\u7403\u4e0a\u56de\u6536\u77ff\u77f3,\u6216\u662f\u4f5c\u4e3a\u4e00\u573a\u8270\u82e6\u6218\u6597\u540e\u7684\u907f\u96be\u6240. \u5c06\u5176\u4f5c\u4e3a\u4f20\u9001\u4e2d\u5fc3\u4e5f\u662f\u4e2a\u597d\u4e3b\u610f..."
                },
                {
                    "name": "\u6765\u81ea\u6838\u80fd\u7684\u592a\u9633\u4e4b\u529b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3074.png",
                    "x": 864.0,
                    "y": 360.0,
                    "tooltip": "\u6765\u81ea\u6838\u80fd\u7684\u592a\u9633\u4e4b\u529b",
                    "data": "\u4f60\u7684\u8001\u4f19\u8ba1\u5355\u65b9\u5757\u5206\u5b50\u91cd\u7ec4\u4eea\u5df2\u7ecf\u4e00\u53bb\u4e0d\u56de\u4e86.\u90a3\u4e48\u5982\u4f55\u83b7\u53d6\u9633\u5149\u5316\u5408\u7269\u5462? \u6709\u51e0\u79cd\u65b9\u6cd5,\u4e0d\u8fc7\u5728EV\u9636\u6bb5,\u4f60\u53ea\u6709\u8ba9\u8424\u77f3\u5728\u6838\u7535\u4e2d\u63a5\u53d7\u8f90\u5c04,\u518d\u5c06\u5176\u8f6c\u5316\u4e3a\u9633\u5149\u5316\u5408\u7269\u8fd9\u4e00\u6761\u8def.%n%n\u5c06\u8424\u77f3\u71c3\u6599\u68d2\u653e\u7f6e\u5728IC2\u53cd\u5e94\u5806\u4e2d\u7684\u4efb\u610f\u71c3\u6599\u68d2\u65c1,\u8424\u77f3\u71c3\u6599\u68d2\u4f1a\u7f13\u6162\u5145\u80fd.\u5145\u80fd\u901f\u5ea6\u4e3a\u6bcf\u79d2`(\u76f8\u90bb\u71c3\u6599\u68d2\u6570\u91cf)*(\u5411\u4e0b\u53d6\u6574(\u5f53\u524d\u5806\u6e29/3000)+1)`.\u5728\u6b64\u60c5\u51b5\u4e0b,\u4e00\u6839\u4e8c\u8054\u71c3\u6599\u68d2\u7b49\u4e8e\u4e24\u6839\u71c3\u6599\u68d2,\u800c\u4e00\u6839\u56db\u8054\u71c3\u6599\u68d2\u7b49\u4e8e\u56db\u6839\u71c3\u6599\u68d2,\u8424\u77f3\u71c3\u6599\u68d2\u4e0d\u4f1a\u4ea7\u751f\u70ed\u80fd,\u4e5f\u4e0d\u4f1a\u4f7f\u5176\u4ed6\u7ec4\u4ef6\u4ea7\u751f\u70ed\u80fd,\u5728IC2\u6838\u7535\u6a21\u62df\u5668\u4e2d,\u4f60\u53ef\u4ee5\u5c06\u8424\u77f3\u71c3\u6599\u68d2\u5f53\u6210\u53cd\u5e94\u5806\u9694\u677f.%n%n\u6b63\u5982\u4f60\u6240\u89c1,\u5145\u80fd\u901f\u5ea6\u662f\u76f4\u63a5\u4e0e\u5806\u6e29\u548c\u71c3\u6599\u68d2\u6570\u91cf\u6210\u6b63\u6bd4\u7684,\u5728\u6781\u7aef\u60c5\u51b5\u4e0b,\u4f60\u53ef\u4ee5\u5728\u4e0d\u5230\u534a\u5206\u949f\u7684\u65f6\u95f4\u5185\u5b8c\u5168\u5145\u80fd\u4e00\u6839\u8424\u77f3\u71c3\u6599\u68d2,\u5e76\u6bcf10\u79d2\u8f93\u51fa\u4e00\u4e2a\u9633\u5149\u5316\u5408\u7269(\u5e73\u5747\u6765\u8bf4,\u56e0\u4e3a\u6bcf\u4e2a\u71c3\u6599\u68d2\u7684\u5145\u80fd\u901f\u5ea6\u56e0\u5176\u4f4d\u7f6e\u800c\u5f02),\u4f46\u90a3\u4f1a\u9700\u8981\u76f8\u5f53\u591a\u7684\u8d44\u6e90.\u8fd8\u9700\u8981\u4f60\u7528\u4e00\u53f0\u771f\u7a7a\u51b7\u51bb\u673a\u6765\u4e3a\u51b7\u5374\u5355\u5143\u964d\u6e29,\u5e76\u4f7f\u53cd\u5e94\u5806\u572866000+\u7684\u5806\u6e29\u4e0b\u8fd0\u884c.\u660e\u667a\u5730\u5e73\u8861\u4f60\u7684\u8d44\u6e90\u548c\u9700\u6c42.\u4e0d\u7ba1\u600e\u6837,\u5982\u679c\u4f60\u9700\u8981\u5feb\u901f\u5145\u80fd,\u8fd9\u662f\u4e00\u4e2a\u5728IC2\u6838\u7535\u6a21\u62df\u5668\u4e0a\u53ef\u884c\u7684\u65b9\u6848:%n%nerp"
                },
                {
                    "name": "\u7c89\u788e\u661f\u7403",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/212.png",
                    "x": 498.0,
                    "y": 294.0,
                    "tooltip": "\u7c89\u788e\u661f\u7403",
                    "data": "\u5c31\u662f\u5b57\u9762\u7684\u610f\u601d. \u4f60\u53ef\u4ee5\u628a\u5927\u90e8\u5206\u7684\u884c\u661f\u5ca9\u77f3\u6254\u5230\u7c89\u788e\u673a\u91cc\u6253\u788e,\u8fd9\u4e9b\u88ab\u6253\u788e\u7684\u7c89\u901a\u8fc7\u79bb\u5fc3\u6709\u4e00\u5b9a\u51e0\u7387\u4ea7\u51fa\u5f88\u591a\u6709\u7528\u7684\u91d1\u5c5e\u6216\u5176\u4ed6\u73a9\u610f.\u57fa\u4e8e\u661f\u7403\u4e0d\u540c\u800c\u4ea7\u51fa\u4e0d\u540c. \u8fd9\u9700\u8981\u4e0d\u5c11\u80fd\u91cf,\u4f46\u662f\u6211\u786e\u4fe1\u53ef\u4ee5\u5e2e\u52a9\u5230\u4f60.%n%n\u60f3\u8981\u83b7\u5f97\u94a8\u9178\u9502,\u4f60\u53ef\u4ee5\u79bb\u5fc3\u4e4b\u524d\u7c89\u788e\u7684\u6708\u5c18,\u6216\u662f\u7528HV\u4ee5\u4e0a\u7684\u7c89\u788e\u673a\u7c89\u788e\u672b\u5730\u77f3\u5e76\u5c06\u5176\u79bb\u5fc3,\u4e5f\u53ef\u4ee5\u79bb\u5fc3\u672b\u5f71\u7c98\u6d46(\u7136\u540e\u53d1\u73b0\u79bb\u5fc3\u540e\u4e0d\u8fd4\u8fd8\u6876...).%n%n\u5982\u679c\u60f3\u8981\u5236\u9020\u706b\u7bad\u7684\u8bdd,\u5728\u80fd\u591f\u53bb\u51fa\u4ea7\u6b64\u77ff\u77f3\u7684\u661f\u7403\u4e4b\u524d,\u4f60\u5f97\u901a\u8fc7\u4ee5\u4e0a\u65b9\u5f0f\u83b7\u53d6\u4e00\u70b9.\u7136\u800c,\u8bf7\u6ce8\u610f\u4f60\u9700\u8981\u4e00\u53f0\u5177\u6709\u949b\u94c2\u9492\u7ebf\u5708\u7684\u5de5\u4e1a\u9ad8\u7089\u6765\u5c06\u94a8\u94a2\u7c89\u7194\u70bc\u4e3a\u952d!%n%n\u5b8c\u6210\u4efb\u52a1\u4e4b\u4e00\u5373\u53ef.%n%nBot\u518d\u6b21\u8c03\u6574\u4e86\u914d\u65b9,\u4e0d\u4fdd\u8bc1\u51c6\u786e\u6027."
                },
                {
                    "name": "\u7eaf\u94c0\u77ff\u77f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1415.png",
                    "x": 144.0,
                    "y": 540.0,
                    "tooltip": "\u7eaf\u94c0\u77ff\u77f3",
                    "data": "\u5982\u679c\u4f60\u60f3\u8981\u4e3a\u6838\u53cd\u5e94\u5806\u6536\u96c6\u7eaf\u94c0\u77ff\u77f3,\u90a3\u5c31\u9700\u8981\u5230\u706b\u536b\u4e8c\u6216\u706b\u536b\u4e00\u5f00\u91c7\u5b83\u4eec.\u5b83\u4eec\u7684\u751f\u6210\u9ad8\u5ea6\u572820-30."
                },
                {
                    "name": "\u91cf\u5b50\u4e4b\u773c",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1247.png",
                    "x": 312.0,
                    "y": 192.0,
                    "tooltip": "\u91cf\u5b50\u4e4b\u773c",
                    "data": "\u751f\u4ea7EV\u53d1\u5c04\u5668\u548c\u4f20\u611f\u5668\u9700\u8981\u7528\u5230\u91cf\u5b50\u4e4b\u773c,\u901a\u8fc7\u5316\u5b66\u6d78\u6d17\u673a\u5c06\u672b\u5f71\u4e4b\u773c\u6d78\u6ce1\u5728\u6c21\u4e2d\u5c31\u53ef\u4ee5\u5f97\u5230."
                },
                {
                    "name": "QED(Quit Exhaling Dusts)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/199.png",
                    "x": 672.0,
                    "y": 228.0,
                    "tooltip": "QED(Quit Exhaling Dusts)",
                    "data": "QED\u53ef\u4ee5\u5236\u9020\u7684\u4e1c\u897f\u5341\u5206\u6709\u9650,\u6211\u76f4\u63a5\u5728\u6b64\u5217\u4e3e:%n%n\u5353\u8d8a\u706b\u70ac: \u9632\u6b62\u602a\u7269\u751f\u6210.%n\u672b\u5f71\u91c7\u77f3\u573a,\u53ca\u5176\u914d\u5957\u7684\u672b\u5f71\u8def\u6807: \u7528\u4e8e\u6807\u8bb0\u672b\u5f71\u91c7\u77f3\u573a\u7684\u5de5\u4f5c\u8303\u56f4. \u4e0d\u540c\u4e8e\u91c7\u77ff\u573a,\u672b\u5f71\u91c7\u77f3\u573a\u4f1a\u6316\u6398\u8303\u56f4\u5185\u7684\u6240\u6709\u65b9\u5757,\u662f\u83b7\u53d6\u5404\u79cd\u661f\u7403\u77f3\u5934/\u6ce5\u571f\u7684\u6700\u4f73\u65b9\u5f0f.%n\u672b\u5f71\u5ca9\u6d46\u6cf5: \u7528\u4e8e\u5728\u4e0b\u754c\u62bd\u5ca9\u6d46,\u5ef6\u8fdf\u6bd4\u8f83\u5c0f.%n\u4f20\u8f93\u8282\u70b9(\u80fd\u91cf)/(\u9ad8\u80fd): \u4f20\u8f93RF,\u6240\u4ee5...\u6ca1\u5565\u7528."
                },
                {
                    "name": "\u6c21\u8870\u53d8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1480.png",
                    "x": 348.0,
                    "y": 252.0,
                    "tooltip": "\u6c21\u8870\u53d8",
                    "data": "\u6c21\u662fEV\u53d1\u5c04\u5668\u548c\u4f20\u611f\u5668\u4e2d\u91cf\u5b50\u4e4b\u773c\u7684\u5408\u6210\u539f\u6599\u4e4b\u4e00(IV\u9636\u6bb5\u7684\u91cf\u5b50\u4e4b\u661f\u4e5f\u9700\u8981).%n%n\u4f60\u53ef\u4ee5\u5c06\u6d17\u51c0\u7684\u948d\u77ff\u77f3,\u6ca5\u9752\u94c0\u77ff\u77f3,\u6676\u8d28\u94c0\u77ff\u77f3\u6216\u94c0-238\u77ff\u77f3\u653e\u5165\u7b5b\u9009\u673a\u83b7\u53d6\u956d-226.\u9700\u8981\u5728\u80cc\u5305\u91cc\u4fdd\u75594500\u79d2(75\u5206\u949f)\u5b8c\u6210\u8870\u53d8,\u5728\u8870\u53d8\u5b8c\u6210\u524d\u4f60\u4f1a\u83b7\u5f97debuff,\u9664\u975e\u4f60\u7a7f\u4e0a\u5168\u8eab\u9632\u62a4\u670d.\u76f8\u53cd,\u5236\u4f5c\u4e00\u4e2a\u94c5\u5c01\u76d2\u5c06\u956d\u653e\u5728\u91cc\u9762\u7b49\u5f85\u8870\u53d8\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u6ce8\u610f.%n%n\u948d\u77ff\u77f3\u53ef\u4ee5\u4ece\u4e0b\u5c4a\u83b7\u53d6,\u4f46\u5176\u4ed6\u4e09\u79cd\u77ff\u77f3\u9700\u89812\u9636\u706b\u7bad\u624d\u80fd\u83b7\u53d6.\u7136\u800c,\u948d\u77ff\u77f3\u4e2d\u83b7\u5f97\u956d\u7684\u6982\u7387\u8981\u5c0f\u5f97\u591a,\u6240\u4ee5\u4f60\u9700\u8981\u5927\u91cf\u7684\u948d\u624d\u80fd\u7ee7\u7eed.%n%n\u5728\u5b8c\u6210\u8870\u53d8\u540e,\u4f60\u53ef\u4ee5\u901a\u8fc7\u7535\u89e3\u83b7\u5f97\u6c21\u5e76\u5236\u4f5c\u4e0b\u4e00\u4e2a\u7535\u8def\u677f\u7cfb\u5217.\u4f46\u662f,\u5728\u5f97\u5230\u949a-239\u524d,\u4f60\u8fd8\u4e0d\u80fd\u8fdb\u884c\u6c21\u5faa\u73af.%n%n\u53e6\u5916,\u6676\u8d28\u94c0\u77ff\u8109\u53ef\u4ee5\u5728\u706b\u536b\u4e00\u3001\u706b\u536b\u4e8c\u6216\u8c37\u795e\u661f\u627e\u5230.%n%n\u5b8c\u6210\u4e00\u4e2a\u8981\u6c42\u5373\u53ef."
                },
                {
                    "name": "\u6c21\u5faa\u73af",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1241.png",
                    "x": 360.0,
                    "y": 192.0,
                    "tooltip": "\u6c21\u5faa\u73af",
                    "data": "\u6c21\u662f\u5236\u4f5c\u91cf\u5b50\u4e4b\u773c\u548c\u91cf\u5b50\u4e4b\u661f\u7684\u539f\u6750\u6599\u4e4b\u4e00.\u91cf\u5b50\u4e4b\u773c\u548c\u91cf\u5b50\u4e4b\u661f\u5206\u522b\u662f\u751f\u4ea7EV\u548cIV\u7684\u53d1\u5c04\u5668\u4f20\u611f\u5668\u91cd\u8981\u7684\u539f\u6750\u6599.%n%n\u9996\u5148\u4f60\u9700\u8981\u627e\u5230\u4e00\u4e2a\u6ca5\u9752\u94c0\u77ff\u8109,\u5e76/\u6216\u56de\u6536\u6838\u53cd\u5e94\u5806\u4e2d\u7684\u949a239\u548c\u94c0238.%n%n\u6ca5\u9752\u94c0\u77ff\u8109\u53ef\u5728\u706b\u661f\u548c\u706b\u536b\u4e00\u4e0a\u627e\u5230.%n%n\u8bd1\u8005\u6ce8:\u5f53\u524d\u53ea\u6709\u8fd9\u4fe9\u661f\u7403\u53ef\u4ee5\u627e\u5230,\u540e\u9762\u8fd8\u6709\u8bb8\u591a\u661f\u7403\u90fd\u6709\u6ca5\u9752\u6cb9\u77ff\u8109,\u8be6\u60c5\u53c2\u8003NEI.%n%n\u6709\u4e86\u949a\u548c\u94c0\u4e4b\u540e,\u4f7f\u7528\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u7684\u4ea7\u6c21\u914d\u65b9,\u5faa\u73af\u4f7f\u7528\u949a-239\u5373\u53ef\u6e90\u6e90\u4e0d\u65ad\u5730\u83b7\u5f97\u6c21\u4e86."
                },
                {
                    "name": "\u6ca5\u9752\u94c0\u77ff(\u6838\u71c3\u6599)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1243.png",
                    "x": 192.0,
                    "y": 456.0,
                    "tooltip": "\u6ca5\u9752\u94c0\u77ff(\u6838\u71c3\u6599)",
                    "data": "\u6ca5\u9752\u94c0\u77ff\u8109\u53ef\u4ee5\u4e3a\u4f60\u7684\u6838\u53cd\u5e94\u5806\u63d0\u4f9b\u4e0d\u7eaf\u7684\u653e\u5c04\u6027\u6838\u71c3\u6599(\u94c0\u6216\u949a). \u4f60\u53ef\u4ee5\u5728\u706b\u661f\u548c\u706b\u536b\u4e00Y\u8f7430-60\u7684\u8303\u56f4\u5185\u627e\u5230\u6ca5\u9752\u94c0\u77ff\u8109."
                },
                {
                    "name": "\u786b\u5316\u94a0",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1652.png",
                    "x": 714.0,
                    "y": 330.0,
                    "tooltip": "\u786b\u5316\u94a0",
                    "data": "\u5c06\u786b\u548c\u94a0\u7ed3\u5408\u5373\u53ef\u83b7\u5f97\u786b\u5316\u94a0."
                },
                {
                    "name": "\u7b2c4\u9636\u6bb5(EV)",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://version/272/quests_icons/QuestIcon/176.png",
                    "x": 576.0,
                    "y": 288.0,
                    "tooltip": "\u7b2c4\u9636\u6bb5(EV)",
                    "data": "\u8fd9\u4e00\u9636\u6bb5\u7684\u4e3b\u8981\u76ee\u6807\u662f\u5236\u9020\u4e00\u4e2a2\u9636\u706b\u7bad\u5e76\u6210\u529f\u767b\u9646\u706b\u661f. \u7531\u4e8e\u4f60\u7684\u673a\u5668\u9646\u7eed\u90fd\u4f1a\u5230\u8fbeEV\u7ea7\u522b,\u57fa\u5730\u7684\u6574\u4f53\u8017\u7535\u91cf\u4e5f\u6709\u4e86\u5927\u5e45\u5ea6\u7684\u63d0\u9ad8.\u56e0\u6b64\u4f60\u9700\u8981\u91cd\u65b0\u8003\u8651\u4e00\u4e0b\u4f60\u7684\u53d1\u7535\u914d\u7f6e. \u8fd9\u4e00\u9636\u6bb5\u5c06\u6709\u53d1\u7535\u76f8\u5173\u7684\u4efb\u52a1\u6765\u8ba9\u4f60\u786e\u4fdd\u57fa\u5730\u7684\u7535\u529b\u4f9b\u5e94.  \"\u591a\u65b9\u5757\u7ed3\u6784\"\u4efb\u52a1\u680f\u4e2d\u6709\u4e00\u4e9b\u4efb\u52a1\u5bf9\u4f60\u6709\u5e2e\u52a9:\u5927\u578b\u71c3\u6c14\u6da1\u8f6e\u3001\u5927\u578b\u5185\u71c3\u5f15\u64ce\u548c\u91c7\u77ff\u573a."
                },
                {
                    "name": "\u94a8\u9178\u9502\u5904\u7406 - \u7b2c2\u6b65",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2890.png",
                    "x": 318.0,
                    "y": 294.0,
                    "tooltip": "\u94a8\u9178\u9502\u5904\u7406 - \u7b2c2\u6b65",
                    "data": "\u4e0b\u4e00\u6b65\u662f\u4e09\u6c27\u5316\u94a8. \u8bf7\u6ce8\u610f,\u6240\u6709\u6c2f\u5316\u9499\u90fd\u80fd\u5b8c\u5168\u5faa\u73af\u5229\u7528. \u5982\u679c\u4e00\u8d77\u5904\u7406\u4e86\u767d\u94a8\u77ff,\u4f60\u4f1a\u9700\u8981\u4e00\u53f0\u7535\u89e3\u673a\u7684."
                },
                {
                    "name": "\u94a8\u9178\u9502\u5904\u7406 - \u7b2c1\u6b65",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2889.png",
                    "x": 378.0,
                    "y": 294.0,
                    "tooltip": "\u94a8\u9178\u9502\u5904\u7406 - \u7b2c1\u6b65",
                    "data": "\u4e3a\u4e86\u8ba9\u7194\u70bc\u65f6\u95f4\u4e0d\u90a3\u4e48\u79bb\u8c31,\u4f60\u9700\u8981\u505a\u4e00\u5b9a\u7684\u52aa\u529b. \u9996\u5148,\u8ba9\u6211\u4eec\u628a\u94a8\u9178\u9502\u8f6c\u5316\u4e3a\u767d\u94a8. \u8981\u662f\u4f60\u76f4\u63a5\u6316\u5230\u4e86\u767d\u94a8,\u90a3\u5c31\u8df3\u8fc7\u8fd9\u4e00\u6b65.%n%n\u8bf7\u6ce8\u610f,\u5982\u679c\u4f60\u6b63\u5728\u5904\u7406\u7f57\u65af128b(a)\u4e0a\u6316\u5230\u7684\u94a8\u9178\u9530\u6216\u94a8\u94c1,\u7b2c\u4e00\u6b65\u4f1a\u7565\u6709\u4e0d\u540c."
                },
                {
                    "name": "\u94a8\u94a2",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/861.png",
                    "x": 252.0,
                    "y": 540.0,
                    "tooltip": "\u94a8\u94a2",
                    "data": "\u4e0b\u4e00\u9636\u6bb5\u7684\u6240\u6709\u673a\u5668\u90fd\u9700\u8981\u94a8\u94a2.\u4f60\u80fd\u51c6\u5907\u597d\u8db3\u591f\u8fdb\u9636\u7684\u94a8\u94a2\u5417?"
                },
                {
                    "name": "\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1900.png",
                    "x": 816.0,
                    "y": 408.0,
                    "tooltip": "\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39",
                    "data": "\u71c3\u6599\u68d2\u7ed3\u675f\u4e00\u4e2a\u5468\u671f\u540e\u4f1a\u53d8\u4e3a\u67af\u7aed\u7684\u71c3\u6599\u68d2.\u4f60\u53ef\u4ee5\u5c06\u5176\u70ed\u79bb\u4ee5\u56de\u6536\u90e8\u5206\u6750\u6599. \u6839\u636e\u71c3\u6599\u68d2\u7684\u4e0d\u540c,\u83b7\u5f97\u7684\u7269\u54c1\u4e5f\u4e0d\u540c,\u8bf7\u67e5\u770bNEI\u6216wiki\u4ee5\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f."
                },
                {
                    "name": "\u6563\u70ed1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/197.png",
                    "x": 864.0,
                    "y": 252.0,
                    "tooltip": "\u6563\u70ed1",
                    "data": "\u4f60\u4e0d\u80fd\u8ba9\u70ed\u91cf\u805a\u96c6\u5728\u53cd\u5e94\u5806\u5185\u90e8,\u6700\u7ec8\u4f60\u9700\u8981\u5c06\u53cd\u5e94\u5806\u5185\u90e8\u7684\u70ed\u91cf\u6563\u53d1\u7684\u5927\u6c14\u4e2d. \u4e0d\u540c\u7684\u6563\u70ed\u7247\u6709\u4e0d\u540c\u7684\u6563\u70ed\u80fd\u529b,\u4f60\u9700\u8981\u627e\u51fa\u54ea\u4e00\u79cd\u6563\u70ed\u7247\u9002\u5408\u7528\u5728\u4f60\u8bbe\u8ba1\u7684\u53cd\u5e94\u5806\u4e2d. \u4e0e\u5176\u4ed6\u4efb\u52a1\u4e00\u6837,\u8981\u4e48\u901a\u8bfbwiki\u540e\u8bd5\u7740\u7406\u89e3\u53cd\u5e94\u5806\u7684\u5de5\u4f5c\u539f\u7406,\u8981\u4e48\u76f4\u63a5\u6284\u4f5c\u4e1a..."
                },
                {
                    "name": "\u4e59\u9178\u4e59\u70ef\u916f",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/461.png",
                    "x": 546.0,
                    "y": 210.0,
                    "tooltip": "\u4e59\u9178\u4e59\u70ef\u916f",
                    "data": "\u8fd9\u79cd\u6709\u673a\u7269\u53ea\u662f\u4e00\u5757\u57ab\u811a\u77f3."
                },
                {
                    "name": "\u60f3\u52a0\u5165\u4e50\u961f\u5417\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1474.png",
                    "x": 444.0,
                    "y": 252.0,
                    "tooltip": "\u60f3\u52a0\u5165\u4e50\u961f\u5417\uff1f",
                    "data": "\u6216\u8005\u81f3\u5c11\u548cdrum(\u591a\u4e49:\u9f13\u3001\u7b52)\u4e00\u8d77\u73a9\uff1f \u5982\u679c\u4f60\u5728\u5236\u9020\u706b\u7bad\u548c\u9694\u70ed\u5957\u88c5\u540e\u6709\u989d\u5916\u7684\u9668\u94c1,\u8bf7\u5c06\u5176\u53d8\u6210\u9668\u94a2\u5e76\u7528\u5b83\u5236\u4f5c\u4e00\u4e9b\u7b52. \u8fd9\u4e9b\u7b52\u53ef\u4ee5\u5bb9\u7eb3256\u6876\u6d41\u4f53,\u4e14\u62c6\u5378\u540e\u53ef\u4fdd\u7559\u5185\u90e8\u6d41\u4f53.%n%n\u53e6\u5916,\u4f60\u77e5\u9053\u4e0d,\u5b83\u8fd8\u80fd\u5f53\u505a\u5355\u5143\u4e00\u6837\u4f7f\u7528!\u8bd5\u8bd5\u7528\u7b52\u6765\u5728\u8d85\u7ea7\u7f38\u4e4b\u95f4\u88c5\u8fd0\u6d41\u4f53\u5427!"
                },
                {
                    "name": "\u6c34,\u5feb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2722.png",
                    "x": 432.0,
                    "y": 144.0,
                    "tooltip": "\u6c34,\u5feb",
                    "data": "\u8fdc\u7a0b\u63a5\u53e3(Remote-IO)\u7684\u84c4\u6c34\u7bb1\u7c7b\u4f3c\u65e0\u5c3d\u4e4b\u58f6,\u5176\u8f93\u51fa\u6c34\u7684\u901f\u5ea6\u53ea\u53d6\u51b3\u4e8e\u4f60\u80fd\u62bd\u591a\u5feb,\u4f46\u8fd9\u4e2a\u65b9\u5757\u7684\u516d\u4e2a\u9762\u90fd\u53ef\u4ee5\u8f93\u51fa."
                },
                {
                    "name": "\u8fd9\u76d2\u5b50\u91cc\u6709\u4ec0\u4e48?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1925.png",
                    "x": 300.0,
                    "y": 252.0,
                    "tooltip": "\u8fd9\u76d2\u5b50\u91cc\u6709\u4ec0\u4e48?",
                    "data": "\u538c\u5026\u4e86\u63e3\u7740\u4e00\u515c\u956d\u7b49\u5f85\u5927\u7ea67\u5c0f\u65f6\u8870\u53d8?\u6709\u4e86\u8fd9\u4e2a\u94c5\u5c01\u76d2,\u4f60\u5c31\u80fd\u5c06\u956d\u548c\u522b\u7684\u6750\u6599\u653e\u8fdb\u53bb,\u5b83\u4eec\u4f1a\u81ea\u5df1\u8870\u53d8,\u540c\u65f6\u4f60\u5c31\u80fd\u5e72\u70b9\u522b\u7684\u4e86.%n%n\u4f60\u53ef\u80fd\u65e0\u6cd5\u901a\u8fc7shift+\u5355\u51fb\u5feb\u901f\u5b58\u5165\u6216\u53d6\u51fa\u7269\u54c1,\u4f46\u7ba1\u9053\u4ecd\u53ef\u5de5\u4f5c.\u4f7f\u7528\u4e00\u4e2a\u8fc7\u6ee4\u5668\u5373\u53ef\u81ea\u52a8\u5316\u6574\u4e2a\u8fc7\u7a0b.(\u4e0d\u80fd\u7528\u4e16\u754c\u52a0\u901f\u5668)"
                },
                {
                    "name": "EV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1246.png",
                    "x": 312.0,
                    "y": 108.0,
                    "tooltip": "EV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "data": "\u4e00\u4e9b\u673a\u5668\u9700\u8981\u53d1\u5c04\u5668\u548c\u4f20\u611f\u5668,\u6bd4\u5982\u8bf4\u626b\u63cf\u4eea\u6216\u8005\u7535\u8def\u7ec4\u88c5\u673a."
                },
                {
                    "name": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1245.png",
                    "x": 480.0,
                    "y": 192.0,
                    "tooltip": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "data": "\u6cf5\u3001\u6d3b\u585e\u3001\u4f20\u9001\u5e26\u3001\u673a\u68b0\u81c2\u5728EV\u9636\u6bb5\u4f9d\u7136\u5f88\u91cd\u8981,\u6bcf\u6837\u505a\u4e00\u4e2a\u6837\u54c1\u5427."
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
                    "source": "\u805a\u4e59\u9178\u4e59\u70ef\u916f",
                    "target": "\u9ad8\u7ea7\u80f6\u6c34"
                },
                {
                    "source": "EV\u5316\u5b66\u6d78\u6d17\u673a",
                    "target": "\u8fdb\u9636\u949b\u94c1\u77ff\u5904\u7406"
                },
                {
                    "source": "QED(Quit Exhaling Dusts)",
                    "target": "\u9ad8\u7ea7\u602a\u7269\u9632\u62a4"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "source": "\u94c2\u76d0\u56de\u6536",
                    "target": "\u56de\u5230\u6b65\u9aa41"
                },
                {
                    "source": "\u94c2\u5904\u7406,\u6b65\u9aa41",
                    "target": "\u56de\u5230\u6b65\u9aa41"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u57fa\u7840\u6838\u71c3\u6599:\u948d"
                },
                {
                    "source": "\u60f3\u52a0\u5165\u4e50\u961f\u5417\uff1f",
                    "target": "\u66f4\u5927\u7684\u7b52"
                },
                {
                    "source": "\u82ef\u915a1",
                    "target": "\u53cc\u915aA"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u84dd\u94a2"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(MV)",
                    "target": "\u7528\u7eaf\u80fd\u91cf\u521b\u9020\u65b0\u6750\u6599"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u661f",
                    "target": "\u5173\u952e\u6750\u6599"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "EV\u5207\u5272\u673a"
                },
                {
                    "source": "\u7eb3\u7c73\u5904\u7406\u5668",
                    "target": "\u6570\u636e\u7403"
                },
                {
                    "source": "\u94c2\u5904\u7406,\u6b65\u9aa44",
                    "target": "\u6570\u636e\u7403"
                },
                {
                    "source": "HEV Mk III \u9632\u62a4\u7cfb\u7edf",
                    "target": "\u5904\u7406\u8f90\u5c04"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u5bf9\u4e8c\u6c2f\u82ef"
                },
                {
                    "source": "EV Field Generators",
                    "target": "\u76ee\u6807:\u706b\u536b\u4e8c"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u76ee\u6807:\u706b\u661f"
                },
                {
                    "source": "EV Field Generators",
                    "target": "\u76ee\u6807:\u706b\u661f"
                },
                {
                    "source": "EV Field Generators",
                    "target": "\u76ee\u6807:\u706b\u536b\u4e00"
                },
                {
                    "source": "\u57fa\u7840\u6838\u71c3\u6599:\u948d",
                    "target": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))"
                },
                {
                    "source": "\u672b\u5f71\u86cb",
                    "target": "\u5bcc\u96c6\u9f99\u86cb"
                },
                {
                    "source": "\u5bcc\u96c6\u9f99\u86cb",
                    "target": "\u9f99\u86cb"
                },
                {
                    "source": "\u90a6\u5fb7\u5148\u751f,\u4e00\u4e2a\u9f99\u86cb\u662f\u4e0d\u591f\u7684",
                    "target": "\u57fa\u56e0\u7a81\u53d8\u86cb"
                },
                {
                    "source": "\u7eb3\u7c73\u5904\u7406\u5668\u96c6\u7fa4",
                    "target": "\u7cbe\u82f1\u7eb3\u7c73\u7535\u8111"
                },
                {
                    "source": "\u73af\u6c27\u5316\u7269",
                    "target": "\u9ad8\u7ea7\u7535\u8def\u57fa\u677f"
                },
                {
                    "source": "\u7ea4\u7ef4\u5f3a\u5316\u73af\u6c27\u6811\u8102\u7247",
                    "target": "\u7ea4\u7ef4\u5f3a\u5316\u7535\u8def\u57fa\u677f"
                },
                {
                    "source": "\u57fa\u56e0\u7a81\u53d8\u86cb",
                    "target": "\u672b\u5f71\u86cb"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u73af\u6c27\u6c2f\u4e19\u70f7"
                },
                {
                    "source": "\u6b21\u6c2f\u9178",
                    "target": "\u73af\u6c27\u6c2f\u4e19\u70f7"
                },
                {
                    "source": "\u73af\u6c27\u6c2f\u4e19\u70f7",
                    "target": "\u73af\u6c27\u5316\u7269"
                },
                {
                    "source": "\u53cc\u915aA",
                    "target": "\u73af\u6c27\u5316\u7269"
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "EV\u7ec4\u88c5\u673a"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "EV\u5316\u5b66\u6d78\u6d17\u673a"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "EV\u7ea7\u5316\u5b66\u53cd\u5e94\u91dc"
                },
                {
                    "source": "EV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "target": "EV\u7ea7\u7535\u8def\u7ec4\u88c5\u673a"
                },
                {
                    "source": "HSS-G",
                    "target": "EV Field Generators"
                },
                {
                    "source": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "EV Field Generators"
                },
                {
                    "source": "EV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "target": "EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a"
                },
                {
                    "source": "\u7eaf\u94c0\u77ff\u77f3",
                    "target": "EV\u8d85\u5bfc(2048 EU/t)"
                },
                {
                    "source": "\u6ca5\u9752\u94c0\u77ff(\u6838\u71c3\u6599)",
                    "target": "EV\u8d85\u5bfc(2048 EU/t)"
                },
                {
                    "source": "\u94a8\u94a2",
                    "target": "EV\u8d85\u5bfc(2048 EU/t)"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "EXTREME MIXING"
                },
                {
                    "source": "\u73bb\u7483\u7ea4\u7ef4",
                    "target": "\u7ea4\u7ef4\u5f3a\u5316\u73af\u6c27\u6811\u8102\u7247"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "Four fluids in the one Hatch!"
                },
                {
                    "source": "\u73af\u6c27\u5316\u7269",
                    "target": "\u73bb\u7483\u7ea4\u7ef4"
                },
                {
                    "source": "\u9ad8\u7ea7\u80f6\u6c34",
                    "target": "\u77f3\u58a8\u70ef"
                },
                {
                    "source": "EV\u7ec4\u88c5\u673a",
                    "target": "\u77f3\u58a8\u70ef"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "HEV Mk III \u9632\u62a4\u7cfb\u7edf"
                },
                {
                    "source": "\u7845\u6a61\u80f6\u7247",
                    "target": "\u66f4\u9ad8\u9636\u7684\u7ebf\u7f06"
                },
                {
                    "source": "\u805a\u82ef\u786b\u919a",
                    "target": "\u66f4\u9ad8\u9636\u7684\u7ebf\u7f06"
                },
                {
                    "source": "\u5347\u7ea7\u949b\u94c2\u9492\u5408\u91d1\u7ebf\u5708",
                    "target": "HSS-G"
                },
                {
                    "source": "\u79ef\u5c11\u6210\u94a8\u94a2",
                    "target": "HSS-G"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u6b21\u6c2f\u9178"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u53cd\u5e94\u5806\u6269\u5bb9"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u94df"
                },
                {
                    "source": "\u5347\u7ea7\u949b\u94c2\u9492\u5408\u91d1\u7ebf\u5708",
                    "target": "\u79ef\u5c11\u6210\u94a8\u94a2"
                },
                {
                    "source": "\u94a8\u9178\u9502\u5904\u7406 - \u7b2c2\u6b65",
                    "target": "\u79ef\u5c11\u6210\u94a8\u94a2"
                },
                {
                    "source": "\u80fd\u91cf\u6c34\u6676",
                    "target": "\u5170\u6ce2\u987f\u7c89\u672b"
                },
                {
                    "source": "EV\u7ec4\u88c5\u673a",
                    "target": "\u5170\u6ce2\u987f\u7c89\u672b"
                },
                {
                    "source": "\u53cd\u5e94\u5806\u6269\u5bb9",
                    "target": "\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806"
                },
                {
                    "source": "EV\u5207\u5272\u673a",
                    "target": "\u9700\u8981\u66f4\u591a\u7684\u7535\u529b,\u5148\u751f!"
                },
                {
                    "source": "\u79ef\u5c11\u6210\u94a8\u94a2",
                    "target": "\u9700\u8981\u66f4\u591a\u7684\u7535\u529b,\u5148\u751f!"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u70ed\u4ea4\u6362"
                },
                {
                    "source": "\u6570\u636e\u7403",
                    "target": "\u529b\u573a\u53d1\u751f\u5668(MV)"
                },
                {
                    "source": "\u9ad8\u7ea7\u7535\u8def\u57fa\u677f",
                    "target": "\u7eb3\u7c73\u6676\u5706\u548cCPU"
                },
                {
                    "source": "\u4e2d\u592e\u5904\u7406\u5668(CPU)",
                    "target": "\u7eb3\u7c73\u6676\u5706\u548cCPU"
                },
                {
                    "source": "\u7eb3\u7c73\u6676\u5706\u548cCPU",
                    "target": "\u7eb3\u7c73\u5904\u7406\u5668"
                },
                {
                    "source": "EV\u7ea7\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u7eb3\u7c73\u5904\u7406\u5668"
                },
                {
                    "source": "\u7eb3\u7c73\u5904\u7406\u5668",
                    "target": "\u7eb3\u7c73\u5904\u7406\u5668\u96c6\u7fa4"
                },
                {
                    "source": "\u7cbe\u82f1\u7eb3\u7c73\u7535\u8111",
                    "target": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u613f\u518d\u65e0\u7206\u70b8"
                },
                {
                    "source": "\u672b\u5f71\u4e4b\u773c2",
                    "target": "\u90a6\u5fb7\u5148\u751f,\u4e00\u4e2a\u9f99\u86cb\u662f\u4e0d\u591f\u7684"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u661f",
                    "target": "\u90a6\u5fb7\u5148\u751f,\u4e00\u4e2a\u9f99\u86cb\u662f\u4e0d\u591f\u7684"
                },
                {
                    "source": "\u8d85\u51c0\u95f4",
                    "target": "\u90a6\u5fb7\u5148\u751f,\u4e00\u4e2a\u9f99\u86cb\u662f\u4e0d\u591f\u7684"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u536b\u4e00",
                    "target": "\u5176\u4ed6\u77ff\u77f3"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u536b\u4e8c",
                    "target": "\u5176\u4ed6\u77ff\u77f3"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u82ef\u915a1"
                },
                {
                    "source": "\u94c2\u5904\u7406,\u6b65\u9aa43",
                    "target": "\u94c2\u5904\u7406,\u6b65\u9aa44"
                },
                {
                    "source": "\u94c2\u5904\u7406,\u6b65\u9aa42b",
                    "target": "\u94c2\u5904\u7406,\u6b65\u9aa43"
                },
                {
                    "source": "\u94c2\u5904\u7406,\u6b65\u9aa42a",
                    "target": "\u94c2\u5904\u7406,\u6b65\u9aa43"
                },
                {
                    "source": "\u94c2\u5904\u7406,\u6b65\u9aa41",
                    "target": "\u94c2\u5904\u7406,\u6b65\u9aa42b"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u94c2\u5904\u7406,\u6b65\u9aa41"
                },
                {
                    "source": "\u94c2\u5904\u7406,\u6b65\u9aa41",
                    "target": "\u94c2\u5904\u7406,\u6b65\u9aa42a"
                },
                {
                    "source": "\u94c2\u5904\u7406,\u6b65\u9aa43",
                    "target": "\u94c2\u76d0\u56de\u6536"
                },
                {
                    "source": "\u7c89\u788e\u661f\u7403",
                    "target": "EV\u9636\u6bb5,\u4e0e\u7c89\u5171\u821e"
                },
                {
                    "source": "\u5bf9\u4e8c\u6c2f\u82ef",
                    "target": "\u805a\u82ef\u786b\u919a"
                },
                {
                    "source": "\u786b\u5316\u94a0",
                    "target": "\u805a\u82ef\u786b\u919a"
                },
                {
                    "source": "\u4e59\u9178\u4e59\u70ef\u916f",
                    "target": "\u805a\u4e59\u9178\u4e59\u70ef\u916f"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u661f",
                    "target": "\u4fbf\u643a\u5f0f\u6d1e\u7a74?\u4fbf\u643a\u5f0f\u533a\u5757\u600e\u4e48\u6837!"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u6765\u81ea\u6838\u80fd\u7684\u592a\u9633\u4e4b\u529b"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u7c89\u788e\u661f\u7403"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u536b\u4e00",
                    "target": "\u7eaf\u94c0\u77ff\u77f3"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u536b\u4e8c",
                    "target": "\u7eaf\u94c0\u77ff\u77f3"
                },
                {
                    "source": "\u6c21\u8870\u53d8",
                    "target": "\u91cf\u5b50\u4e4b\u773c"
                },
                {
                    "source": "\u6c21\u5faa\u73af",
                    "target": "\u91cf\u5b50\u4e4b\u773c"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "QED(Quit Exhaling Dusts)"
                },
                {
                    "source": "EV\u5316\u5b66\u6d78\u6d17\u673a",
                    "target": "\u6c21\u8870\u53d8"
                },
                {
                    "source": "EV\u5316\u5b66\u6d78\u6d17\u673a",
                    "target": "\u6c21\u5faa\u73af"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u661f",
                    "target": "\u6ca5\u9752\u94c0\u77ff(\u6838\u71c3\u6599)"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u536b\u4e00",
                    "target": "\u6ca5\u9752\u94c0\u77ff(\u6838\u71c3\u6599)"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u786b\u5316\u94a0"
                },
                {
                    "source": "\u5de5\u4f5c\u7ad9,\u4f60\u7684\u7b2c\u4e00\u79cdEV\u7535\u8def\u677f",
                    "target": "\u7b2c4\u9636\u6bb5(EV)"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u7b2c4\u9636\u6bb5(EV)"
                },
                {
                    "source": "\u94a8\u9178\u9502\u5904\u7406 - \u7b2c1\u6b65",
                    "target": "\u94a8\u9178\u9502\u5904\u7406 - \u7b2c2\u6b65"
                },
                {
                    "source": "EV\u9636\u6bb5,\u4e0e\u7c89\u5171\u821e",
                    "target": "\u94a8\u9178\u9502\u5904\u7406 - \u7b2c1\u6b65"
                },
                {
                    "source": "\u5173\u952e\u6750\u6599",
                    "target": "\u94a8\u94a2"
                },
                {
                    "source": "EXTREME MIXING",
                    "target": "\u94a8\u94a2"
                },
                {
                    "source": "\u5347\u7ea7\u949b\u94c2\u9492\u5408\u91d1\u7ebf\u5708",
                    "target": "\u94a8\u94a2"
                },
                {
                    "source": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))",
                    "target": "\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u6563\u70ed1"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u4e59\u9178\u4e59\u70ef\u916f"
                },
                {
                    "source": "\u4e59\u9178",
                    "target": "\u4e59\u9178\u4e59\u70ef\u916f"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u60f3\u52a0\u5165\u4e50\u961f\u5417\uff1f"
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u6c34,\u5feb"
                },
                {
                    "source": "\u6c21\u8870\u53d8",
                    "target": "\u8fd9\u76d2\u5b50\u91cc\u6709\u4ec0\u4e48?"
                },
                {
                    "source": "\u91cf\u5b50\u4e4b\u773c",
                    "target": "EV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
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
    