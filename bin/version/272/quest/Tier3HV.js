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
                    "name": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673aII",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a II.png",
                    "x": 84.0,
                    "y": 324.0,
                    "tooltip": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673aII",
                    "data": "\u5de5\u4f5c\u7ad9\u7535\u8def\u53ef\u4ee5\u7528\u6765\u5236\u9020HV\u7535\u8def\u7ec4\u88c5\u673a.\u8fd9\u53f0\u673a\u5668\u53ef\u4ee5\u751f\u4ea7\u66f4\u52a0\u5148\u8fdb\u7684\u7535\u8def\u677f(IV).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAExg=="
                },
                {
                    "name": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a.png",
                    "x": 348.0,
                    "y": 132.0,
                    "tooltip": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a",
                    "data": "EV\u7535\u8def\u677f\u9700\u8981MV\u7684\u7535\u8def\u7ec4\u88c5\u673a,\u5236\u9020\u4e00\u53f0\u5427.\u4e0d\u4e45\u4e4b\u540e,\u6240\u6709\u7684\u7535\u8def\u677f\u914d\u65b9\u90fd\u4f1a\u9700\u8981\u8d85\u51c0\u95f4\u73af\u5883,\u5c3d\u5feb\u642d\u5efa\u597d<br/>\u8d85\u51c0\u95f4\u5427!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAExQ=="
                },
                {
                    "name": "\u6c28",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6c28\u5355\u5143.png",
                    "x": 420.0,
                    "y": 468.0,
                    "tooltip": "\u6c28",
                    "data": "\u6c2e\u548c\u6c22...\u5f97\u5230\u6c28.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADVg=="
                },
                {
                    "name": "UU\u589e\u5e45\u6db2\u751f\u4ea7\u5668",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636UU\u589e\u5e45\u6db2\u751f\u4ea7\u5668 II.png",
                    "x": 72.0,
                    "y": 120.0,
                    "tooltip": "UU\u589e\u5e45\u6db2\u751f\u4ea7\u5668",
                    "data": "\u60f3\u8981\u7528\u5e9f\u6599\u751f\u4ea7UU\u589e\u5e45\u6db2(UU-A),\u4f60\u9700\u8981\u4e00\u53f0UU\u589e\u5e45\u6db2\u751f\u4ea7\u5668,\u589e\u5e45\u6db2\u53ef\u4ee5\u63d0\u9ad8UU-M\u7684\u4ea7\u91cf. \u4e24<br/>\u79cd\u5e9f\u6599\u662f\u7b49\u6548\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHVA=="
                },
                {
                    "name": "\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5929\u57df\u4e4b\u5251.png",
                    "x": 828.0,
                    "y": 276.0,
                    "tooltip": "\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f",
                    "data": "\u4f7f\u7528\u5929\u57df\u4e4b\u5251,\u4f60\u7684\u6740\u624b\u4e54\u5c06\u6c38\u8fdc\u8fd0\u4f5c\u4e0b\u53bb...\u9002\u5f53\u7684\u9644\u9b54\u80fd\u8ba9\u5176\u66f4\u6709\u6548\u7387,\u4f46\u8fd9\u5e94\u8be5\u4e0d\u6210\u95ee\u9898.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAmA=="
                },
                {
                    "name": "\u81ea\u52a8\u5408\u62101",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u88c5\u914d\u5668.png",
                    "x": 732.0,
                    "y": 276.0,
                    "tooltip": "\u81ea\u52a8\u5408\u62101",
                    "data": "\u4f60\u4e86\u89e3\u7684\u53e6\u4e00\u4e2a\u81ea\u52a8\u5408\u6210\u65b9\u6cd5...\u5de6\u4fa7\u76843x3\u683c\u5b50\u4e2d\u8bbe\u7f6e\u5408\u6210\u8868.\u5de6\u4fa7\u7684\u4e2d\u95f4\u683c\u5c06\u663e\u793a\u8f93\u51fa.\u53f3\u4fa7\u7684\u7269\u54c1\u680f\u662f<br/>\u7ed9\u4f60\u653e\u539f\u6599\u7684.\u8f93\u51fa\u7269\u54c1\u5c06\u51fa\u73b0\u5728\u53f3\u4fa7\u4e2d\u95f4\u683c\u4e2d.\u8fd9\u53f0\u673a\u5668\u652f\u6301\u81ea\u52a8\u5316.\u4f60\u53ef\u4ee5\u7528\u7535\u5bb9\u5347\u7ea7\u8fd9\u53f0\u673a\u5668,\u63d0\u9ad8\u80fd\u6e90\u6d88<br/>\u8017\u901f\u5ea6\u4e0e\u5408\u6210\u901f\u5ea6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAkA=="
                },
                {
                    "name": "\u81ea\u52a8\u5316\u602a\u7269\u519c\u573a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6740\u624b\u4e54.png",
                    "x": 780.0,
                    "y": 276.0,
                    "tooltip": "\u81ea\u52a8\u5316\u602a\u7269\u519c\u573a",
                    "data": "\u5f53\u7136,\u50f5\u5c38\u559c\u6b22\u90a3\u79cd\u6076\u5fc3\u7684\u6db2\u4f53(\u8425\u517b\u7cbe\u534e\u6db2).\u5b83\u4f1a\u4f7f\u7528\u4f60\u7ed9\u5b83\u7684\u6b66\u5668,\u653b\u51fb\u5904\u4e8e\u5b83\u8303\u56f4\u5185\u7684\u4e00\u5207,\u6bcf\u6b21\u653b\u51fb\u65f6<br/>\u6d88\u8017\u5c11\u91cf\u7684\u6db2\u4f53.\u5b83\u4e5f\u4f1a\u653b\u51fb\u73a9\u5bb6,\u6240\u4ee5\u8981\u5c0f\u5fc3.\u8c23\u8a00\u8bf4,\u6709\u4e00\u79cd\u6b66\u5668\u5728\u8fd9\u4e2a\"\u673a\u5668\"\u4e2d\u4f7f\u7528\u65f6\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f..<br/>.\u53e6\u5916,\u5176\u5185\u50a8\u5b58\u7684\u7cbe\u534e\u6db2\u8d85\u8fc775\uff05\u624d\u4f1a\u8fd0\u884c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAlw=="
                },
                {
                    "name": "HV\u81ea\u52a8\u91c7\u77ff\u673a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u91c7\u77ff\u673a.png",
                    "x": 540.0,
                    "y": 240.0,
                    "tooltip": "HV\u81ea\u52a8\u91c7\u77ff\u673a",
                    "data": "\u548cLV\u548cMV\u7684\u81ea\u52a8\u91c7\u77ff\u673a\u5dee\u4e0d\u591a. HV\u91c7\u77ff\u673a\u9700\u8981128EU/t\u7684\u4f9b\u80fd\u624d\u80fd\u5de5\u4f5c.\u5b83\u53ef\u4ee5\u5728\u4ee5\u81ea\u5df1\u4e3a\u4e2d\u5fc34<br/>9x49\u683c\u7684\u8303\u56f4\u5185\u641c\u7d22\u77ff\u77f3(\u53ef\u7528\u87ba\u4e1d\u5200\u8c03\u6574\u8303\u56f4)(\u521a\u597d3x3\u533a\u5757,\u975e\u5e38\u9002\u5408\u533a\u5757\u52a0\u8f7d\u5668),\u5e76\u4e14\u6bd4MV\u7684<br/>\u81ea\u52a8\u91c7\u77ff\u673a\u8fd8\u8981\u5feb\u4e0a\u4e24\u500d!\u8fd8\u6709\u589e\u4ea73\u7684\u5956\u52b1!\u5bf9\u8d2b\u7620\u77ff\u5c24\u5176\u6709\u6548...\u5982\u679c\u4f60\u60f3\u8981\u66f4\u597d\u7684\u91c7\u77ff\u673a,\u8bf7\u67e5\u770b\u591a\u65b9\u5757<br/>\u4efb\u52a1.\u522b\u5fd8\u4e86\u906e\u96e8!\u8fd9\u4e9b\u77ff\u673a\u548c\u53d1\u7535\u673a\u90fd\u662fGT\u673a\u5668,\u6240\u4ee5\u522b\u5fd8\u4e86\u9632\u96e8.\u7136\u540e\u5728\u65c5\u884c\u5730\u56fe\u4e0a\u6807\u8bb0\u597d\u4f4d\u7f6e,\u8fd9\u6837\u4f60\u5c31<br/>\u518d\u4e5f\u4e0d\u4f1a\u5fd8\u8bb0\u81ea\u5df1\u628a\u77ff\u673a\u653e\u54ea\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADpA=="
                },
                {
                    "name": "\u590d\u4ec7\u8005\u8054\u76df3,\u7ec4\u88c5!",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8fdb\u9636\u7ec4\u88c5\u673a II.png",
                    "x": 612.0,
                    "y": 384.0,
                    "tooltip": "\u590d\u4ec7\u8005\u8054\u76df3,\u7ec4\u88c5!",
                    "data": "\u4f60\u77e5\u9053\u8fd9\u662f\u505a\u4ec0\u4e48\u7528\u7684.(=\uffe3\u03c9\uffe3=)",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADAg=="
                },
                {
                    "name": "\u94dd\u571f\u77ff\u6e23",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u94dd\u571f\u77ff\u6e23\u7c89.png",
                    "x": 624.0,
                    "y": 648.0,
                    "tooltip": "\u94dd\u571f\u77ff\u6e23",
                    "data": "\u73b0\u5728,\u8fd9\u4e9b\u6ce5\u6d46\u53ef\u4ee5\u5728\u4e00\u4e2a\u5316\u5b66\u53cd\u5e94\u4e2d\u88ab\u5206\u79bb.\u9664\u4e86\u6211\u4eec\u76f4\u63a5\u83b7\u5f97\u7684\u6c27\u5316\u94dd,\u6700\u91cd\u8981\u7684\u90e8\u5206\u662f\u94dd\u571f\u77ff\u6e23,\u6211\u4eec\u5c06\u7ee7<br/>\u7eed\u52a0\u5de5\u5b83.\u4f60\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u79bb\u5fc3\u5e9f\u6db2,\u518d\u62ff\u5230\u4e00\u4e9b\u989d\u5916\u7684\u526f\u4ea7\u54c1.\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u6c22\u6c27\u5316\u94dd,\u53bbNEI\u91cc\u627e\u627e\u770b.\u4f60\u53ef<br/>\u4ee5\u4ece\u94dd\u9178\u94a0\u6216\u7ea2\u5b9d\u77f3\u3001\u84dd\u5b9d\u77f3\u6216\u7eff\u8272\u84dd\u5b9d\u77f3\u91cc\u5f97\u5230\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALng=="
                },
                {
                    "name": "\u66f4\u597d\u7684\u78c1\u5316\u6746",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u4e24\u6781\u78c1\u5316\u673a II.png",
                    "x": 432.0,
                    "y": 156.0,
                    "tooltip": "\u66f4\u597d\u7684\u78c1\u5316\u6746",
                    "data": "\u5728\u672c\u9636\u6bb5\u4f60\u8fd8\u7528\u4e0d\u5230\u5b83\u4eec,\u4f46\u8981\u5236\u9020EV\u9a6c\u8fbe,\u5c31\u9700\u8981\u78c1\u5316\u9495\u6746\u4e86,\u6240\u4ee5\u5728\u8fdb\u5165EV\u9636\u6bb5\u4e4b\u524d,\u4f60\u5f97\u5148\u505a\u597d\u8fd9\u4e2a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALZQ=="
                },
                {
                    "name": "\u66f4\u5927\u3001\u66f4\u597d\u3001\u66f4\u5f3a?",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8c10\u632f\u7535\u5bb9\u5e93.png",
                    "x": 828.0,
                    "y": 132.0,
                    "tooltip": "\u66f4\u5927\u3001\u66f4\u597d\u3001\u66f4\u5f3a?",
                    "data": "\u8c10\u632f\u7535\u5bb9\u5e93\u662f\u76ee\u524dEIO\u975e\u521b\u9020\u7684\u6700\u5927\u5b58\u50a8RF\u80fd\u91cf\u7684\u7535\u6c60. \u5b83\u53ef\u4ee5\u5728\u5355\u65b9\u5757\u4e2d\u5b58\u50a825M-RF\u80fd\u91cf. \u5c06\u591a<br/>\u4e2a\u8c10\u632f\u7535\u5bb9\u5e93\u7ec4\u6210\u4e00\u4e2a\u66f4\u5927\u7684\u7ed3\u6784\u53ef\u4ee5\u5b58\u50a8\u66f4\u591a\u7684\u80fd\u91cf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD3A=="
                },
                {
                    "name": "\u751f\u7269\u5b9e\u9a8c\u5ba4",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/HV\u751f\u7269\u5b9e\u9a8c\u5ba4.png",
                    "x": 96.0,
                    "y": 576.0,
                    "tooltip": "\u751f\u7269\u5b9e\u9a8c\u5ba4",
                    "data": "\u751f\u7269\u5b9e\u9a8c\u5ba4\u662f\u4e00\u4e2a\u591a\u7528\u9014\u751f\u7269\u5de5\u7a0b\u7ad9. \u4f60\u53ef\u4ee5\u901a\u8fc7\u5b83\u6765\u5236\u9020\u7ec6\u83cc\u57f9\u517b\u76bf(\u7528\u4e8e\u7ec6\u83cc\u57f9\u517b\u7f38),\u4e5f\u53ef\u4ee5\u5236\u9020DNA<br/>\u6837\u54c1\u74f6\u548c\u6570\u636e\u7403,\u8fd8\u6709\u8d28\u7c92\u6837\u54c1\u74f6\u7528\u4e8e\u590d\u5236\u7ec6\u83cc.\u57f9\u517b\u76bf\u4e4b\u540e\u4f1a\u5728\"\u591a\u65b9\u5757\u7ed3\u6784\"\u4efb\u52a1\u680f\u4e2d\u7684\"\u7ec6\u83cc\u57f9\u517b\u7f38\"\u4e2d\u7528<br/>\u5230.\u5982\u679c\u4f60\u6709\u5de5\u4e1a\u5316\u917f\u9020\u7684\u9700\u6c42,\u4e5f\u53ef\u4ee5\u73b0\u5728\u5c31\u7528;\u6216\u662f\u7b49\u540e\u671f\u9700\u8981\u7814\u7a76\u751f\u7269\u5de5\u7a0b\u65f6\u4f7f\u7528.\u5982\u679c\u4f60\u53ea\u5728\u540e\u671f\u505a\u4e86\u7ec6<br/>\u83cc\u57f9\u517b\u7f38\u7684\u8bdd,\u5927\u6982\u4e5f\u4f1a\u505a\u4e00\u4e2a\u66f4\u9ad8\u7ea7\u7684\u751f\u7269\u5b9e\u9a8c\u5ba4.\u53ea\u9700\u8981\u4efb\u610f\u7b49\u7ea7\u7684\u751f\u7269\u5b9e\u9a8c\u5ba4\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKBg=="
                },
                {
                    "name": "\u4e2d\u592e\u5904\u7406\u5668(CPU)",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u4e2d\u592e\u5904\u7406\u5668.png",
                    "x": 264.0,
                    "y": 132.0,
                    "tooltip": "\u4e2d\u592e\u5904\u7406\u5668(CPU)",
                    "data": "\u96c6\u6210\u5904\u7406\u5668\u7535\u8def\u677f\u9700\u8981CPU. \u5207\u5272\u4e2d\u592e\u5904\u7406\u5668\u6676\u5706\u5373\u53ef\u751f\u4ea7CPU.\u4e0d\u8fc7\u751f\u4ea7\u8fc7\u7a0b\u9700\u8981\u5728\u8d85\u51c0\u95f4\u5185\u8fdb\u884c.\u5305\u62ec<br/>\u6fc0\u5149\u8680\u523b\u548c\u5207\u5272\u8fc7\u7a0b.",
                    "quest_id": "g=="
                },
                {
                    "name": "\u4fbf\u5b9c\u7684\u7b80\u5355\u7535\u8def",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/NAND\u82af\u7247.png",
                    "x": 432.0,
                    "y": 192.0,
                    "tooltip": "\u4fbf\u5b9c\u7684\u7b80\u5355\u7535\u8def",
                    "data": "NAND\u82af\u7247\u662f\u771f\u7a7a\u7ba1\u7684\u5de5\u4e1a\u66ff\u4ee3\u54c1,\u4fbf\u5b9c\u5f97\u591a. \u4e0d\u8fc7\u5b83\u4eec\u4e0d\u80fd\u7528\u6765\u5957\u5a03\u5236\u9020\u7535\u8def\u677f,\u53ea\u80fd\u4f5c\u4e3aULV\u7535\u8def\u677f\u4f7f<br/>\u7528. \u8bf7\u4ed4\u7ec6\u67e5\u770b\u6240\u6709\u53ef\u9009\u7684\u5408\u6210\u8868!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGsg=="
                },
                {
                    "name": "\u6c2f\u4eff",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6c2f\u4eff\u5355\u5143.png",
                    "x": 180.0,
                    "y": 516.0,
                    "tooltip": "\u6c2f\u4eff",
                    "data": "\u4e0b\u4e00\u6b65\u662f\u5c06\u7532\u70f7\u4e0e\u6c2f\u53cd\u5e94,\u5236\u5907\u6c2f.\u786e\u4fdd\u4f60\u4f7f\u7528\u4e86\u6b63\u786e\u7684\u7f16\u7a0b\u7535\u8def.\u73b0\u5728,\u662f\u65f6\u5019\u56e4\u79ef\u4e9b\u6c2f\u4e86.\u5bfb\u627e\u76d0\u77ff\u8109\u6216\u662f\u9752<br/>\u91d1\u77f3\u77ff\u8109.\u4f60\u8fd8\u53ef\u4ee5\u7528\u6076\u9b42\u4e4b\u6cea\u5f04\u70b9\u76d0\u6c34.\u4f60\u6700\u597d\u79cd\u690dIC\u4f5c\u7269\u6765\u83b7\u53d6\u6076\u9b42\u4e4b\u6cea,\u4f60\u5c06\u6765\u4f1a\u9700\u8981\u6210\u5428\u7684\u6c2f!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHFQ=="
                },
                {
                    "name": "\u4e16\u754c\u951a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e16\u754c\u951a.png",
                    "x": 612.0,
                    "y": 432.0,
                    "tooltip": "\u4e16\u754c\u951a",
                    "data": "\u4f60\u53ef\u4ee5\u7528HV\u7ec4\u88c5\u673a\u5236\u4f5c\u4e00\u4e2a\u4e16\u754c\u951a.\u53ef\u52a0\u8f7d3x3\u533a\u5757.\u4f60\u9700\u8981\u786c\u5e01\u6765\u4e3a\u533a\u5757\u52a0\u8f7d\u5668\u4f9b\u80fd.1\u4e2a\u672b\u5f71\u73cd\u73e0\u53ef\u4ee5\u4e3a<br/>\u4e2a\u4eba\u951a\u4f9b\u80fd4\u5c0f\u65f6,\u4e3a\u88ab\u52a8\u951a\u4f9b\u80fd1\u5c0f\u65f6.\u4e16\u754c\u951a\u9700\u8981\u4f7f\u7528\u533a\u5757\u52a0\u8f7d\u5668\u786c\u5e01\u6765\u9a71\u52a8(1\u7ea7\u63d0\u4f9b12\u4e2a\u5c0f\u65f6\u52a0\u8f7d\u65f6\u95f4<br/>,2\u7ea724\u5c0f\u65f6,3\u7ea748\u5c0f\u65f6).\u4e2a\u4eba\u951a\u53ea\u6709\u5728\u73a9\u5bb6\u5728\u7ebf\u65f6\u624d\u6709\u6548.\u88ab\u52a8\u951a\u5728\u73a9\u5bb6\u767b\u5f55\u540e\u5373\u751f\u6548,\u76f4\u5230\u670d\u52a1\u5668\u91cd<br/>\u542f\u624d\u4f1a\u5931\u6548.\u4e16\u754c\u951a\u53ea\u8981\u670d\u52a1\u5668\u8fd0\u884c,\u5c31\u4e00\u76f4\u6709\u6548.\u91cd\u542f\u540e\u4ecd\u7136\u53ef\u4ee5\u5373\u523b\u751f\u6548.\u8bf7\u4e0e\u670d\u52a1\u5668OP\u786e\u8ba4,\u4e16\u754c\u951a\u662f\u5426<br/>\u88ab\u7981\u7528. \u5728\u5b98\u65b9\u670d\u52a1\u5668,\u4e3a\u4e86\u4fdd\u8bc1TPS\u7ef4\u6301\u5728\u8f83\u9ad8\u6c34\u5e73,\u4e16\u754c\u951a\u76ee\u524d\u88ab\u7981\u7528.",
                    "quest_id": "Q=="
                },
                {
                    "name": "\u638c\u63a7\u4f60\u7684\u62bd\u5c49",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u62bd\u5c49\u7ba1\u7406\u5668.png",
                    "x": 480.0,
                    "y": 192.0,
                    "tooltip": "\u638c\u63a7\u4f60\u7684\u62bd\u5c49",
                    "data": "\u73b0\u5728\u4f60\u6709\u4e86MV\u7535\u8def\u677f\u548c\u4e0d\u9508\u94a2,\u53ef\u4ee5\u5236\u9020\u4fbf\u6377\u7684\u62bd\u5c49\u7ba1\u7406\u5668\u4e86.\u6b64\u65b9\u5757\u53ef\u4ee5\u4e0e\u534a\u5f844\u683c\u5185(\u5305\u62ecY\u8f74)\u3001\u603b\u5171\u6700<br/>\u591a50\u4e2a\u76f8\u90bb\u7684\u62bd\u5c49\u6784\u6210\u4e00\u4e2a\u6574\u4f53,\u5e76\u5bf9\u8303\u56f4\u5185\u7684\u6709\u6548\u62bd\u5c49\u6267\u884c\u5b58\u50a8\u6216\u53d6\u51fa\u64cd\u4f5c(\u5e76\u901a\u8fc7\u6b63\u786e\u7684\u8bbe\u7f6e\u8fdb\u884c\u68c0\u7d22).<br/>\u8fd9\u5c06\u4f7f\u4f60\u66f4\u8f7b\u677e\u5730\u5c06\u91c7\u77ff\u4e4b\u65c5\u7684\u6536\u83b7\u8f6c\u50a8\u5230\u5b58\u50a8\u7cfb\u7edf\u4e2d:\u53ea\u9700\u5bf9\u51c6\u62bd\u5c49\u7ba1\u7406\u5668\u6b63\u9762\u6309\u4f4f\u53f3\u952e1-2\u79d2,\u7136\u540e\u6240\u6709\u53ef<br/>\u4e0e\u62bd\u5c49\u5339\u914d\u7684\u7269\u54c1\u90fd\u5c06\u88ab\u5b58\u5165,\u800c\u4f60\u7684\u5de5\u5177\u4e4b\u7c7b\u7684\u5c06\u88ab\u4fdd\u7559\u5728\u539f\u5904.\u8bb0\u4f4f,\u6700\u540e\u653e\u7f6e\u62bd\u5c49\u7ba1\u7406\u5668,\u8fd9\u6837\u6240\u6709\u62bd\u5c49\u90fd<br/>\u5c06\u88ab\u6ce8\u518c.\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u7c7b\u578b\u7684\u7269\u54c1\u7ba1\u9053\u3001\u6f0f\u6597\u5c06\u5176\u7269\u54c1\u653e\u5165\u7ba1\u7406\u5668(\u901a\u8fc7\u5b83\u53ef\u4ee5\u653e\u8fdb\u5176\u4f59\u7684\u62bd\u5c49)\u4e2d.\u5982\u679c\u7528<br/>\u4e8e\u6df7\u5408\u519c\u573a\u6216\u602a\u7269\u5c60\u5bb0\u573a\u7684\u5b58\u50a8\u7cfb\u7edf,\u8bf7\u5148\u6807\u8bb0\u5b58\u50a8\u4e8e\u62bd\u5c49\u4e2d\u7684\u7269\u54c1,\u5e76\u7528\u62bd\u5c49\u94a5\u5319\u9501\u5b9a,\u8fd9\u6837\u4f60\u7684\u62bd\u5c49\u5b58\u50a8\u7cfb\u7edf<br/>\u5c31\u80fd\u6709\u5e8f\u5730\u5b58\u50a8\u7269\u54c1\u4e86.\u8981\u662f\u6ca1\u6709\u4e8b\u5148\u6807\u8bb0\u7684\u8bdd,\u62bd\u5c49\u7ba1\u7406\u5668\u5c31\u4f1a\u4ece\u6700\u8fd1\u7684\u62bd\u5c49\u5f00\u59cb\u586b\u5145.\u5982\u679c\u4f60\u5e0c\u671b\u5c06\u67d0\u79cd\u7269\u54c1<br/>\u4fdd\u7559\u4e00\u4e2a\u4ee5\u4e0a\u7684\u62bd\u5c49\u7684\u8bdd,\u5728\u8fdc\u79bb\u62bd\u5c49\u7ba1\u7406\u5668\u7684\u62bd\u5c49\u4e2d\u653e\u5165\u865a\u7a7a\u5347\u7ea7,\u8fd9\u6837\u62bd\u5c49\u7ba1\u7406\u5668\u5c31\u4f1a\u5148\u586b\u5145\u8f83\u8fd1\u7684\u90a3\u4e2a\u62bd\u5c49<br/>,\u518d\u586b\u5145\u8f83\u8fdc\u7684\u90a3\u4e2a\u5e76\u9500\u6bc1\u8fc7\u91cf\u7684\u7269\u54c1.\u5982\u679c\u4f60\u60f3\u8ba9\u62bd\u5c49\u5899\u8f6c\u5f2f\u53c8\u4e0d\u60f3\u770b\u4e0d\u5230\u8f6c\u89d2\u5904\u7684\u62bd\u5c49,\u4f7f\u7528\u6865\u63a5\u65b9\u5757\u5373\u53ef.<br/>\u5982\u679c\u60f3\u8981\u6709\u7b2c\u4e8c\u7269\u54c1\u8f93\u5165\u70b9,\u4f7f\u7528\u9644\u5c5e\u7ba1\u7406\u5668(\u6bcf\u4e2a\u62bd\u5c49\u7cfb\u7edf\u9650\u4e00\u4e2a,\u53ea\u53ef\u7528\u4e8e\u81ea\u52a8\u5316).\u8bf7\u6ce8\u610f,\u5bf9\u62bd\u5c49\u7ba1\u7406\u5668<br/>\u4f7f\u7528\u94a5\u5319\u53ef\u5bf9\u6240\u6709\u62bd\u5c49\u751f\u6548.\u5f53\u4f60\u62e5\u6709ME\u7f51\u7edc\u4e4b\u540e,\u5728\u62bd\u5c49\u7ba1\u7406\u5668\u4e0a\u653e\u7f6e\u5b58\u50a8\u603b\u7ebf\u5373\u53ef\u5c06\u62bd\u5c49\u7cfb\u7edf\u63a5\u5165\u4f60\u7684ME<br/>\u7f51\u7edc(\u5b58\u50a8\u3001\u68c0\u7d22\u3001\u53d6\u51fa).\u8bb0\u5f97\u6b64\u5b58\u50a8\u603b\u7ebf\u7684\u4f18\u5148\u7ea7\u6700\u597d\u5927\u4e8eME\u9a71\u52a8\u5668\u7684\u4f18\u5148\u7ea7.\u8981\u662f\u4f60\u5fd8\u4e86\u9501\u5b9a\u8fd9\u4e9b\u62bd\u5c49,<br/>\u4f60\u5c06\u4f1a\u770b\u5230\u5b83\u4eec\u5f88\u5feb\u5c31\u88abME\u7f51\u7edc\u4e2d\u7684\u7269\u54c1\u585e\u5f97\u4e71\u4e03\u516b\u7cdf.\u5728\u62bd\u5c49\u7ba1\u7406\u5668\u4e0a\u4f7f\u7528\u5927\u91cf\u7684\u8f93\u5165/\u8f93\u51fa\u8bbe\u5907\u5c06\u4f1a\u4e25\u91cd\u5f71<br/>\u54cdTPS! \u5982\u679c\u4f60\u5728\u516c\u5171\u670d\u52a1\u5668\u4e0a,\u8bf7\u52ff\u4f7f\u7528\u62bd\u5c49\u9635\u5217,\u5426\u5219\u4f60\u7684\u62bd\u5c49\u9635\u5217\u53ef\u80fd\u4f1a\u88ab\u5220\u9664,\u800c\u4f60\u4f1a\u88ab\u5c01\u7981.\u53e6\u5916<br/>,\u5b98\u65b9\u670d\u52a1\u5668\u4e0a\u7684\u6240\u6709\u975e\u80cc\u5305\u4ea4\u4e92\u90fd\u53ef\u80fd\u662f\u7981\u7528\u7684. \u795d\u8d3a\u4f60,\u62bd\u5c49\u9635\u5217,\u4e3a\u5927\u5bb6\u6467\u6bc1\u5b83\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJaA=="
                },
                {
                    "name": "\u7384\u94a2\u5de5\u5177\u548c\u6b66\u5668\u7684\u57fa\u7840\u5347\u7ea7",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7ec8\u7ed3\u4e4b\u5251.png",
                    "x": 780.0,
                    "y": 84.0,
                    "tooltip": "\u7384\u94a2\u5de5\u5177\u548c\u6b66\u5668\u7684\u57fa\u7840\u5347\u7ea7",
                    "data": "\u4e3a\u4e86\u5347\u7ea7\u7384\u94a2\u5de5\u5177\u6216\u6b66\u5668,\u4f60\u9700\u8981\u5145\u80fd\u6676\u4f53\u548c\u4e00\u4e9b\u7ecf\u9a8c\u503c(10\u7ea7). \u5347\u7ea7\u9700\u8981\u5728\u53ef\u9760\u7684\u94c1\u7827\u4e0a\u9762\u8fdb\u884c. \u4f7f\u7528<br/>\u5145\u80fd\u6676\u4f53\u5347\u7ea7\u5b8c\u6bd5\u540e\u7684\u6b66\u5668\u548c\u5de5\u5177\u53ef\u4ee5\u83b7\u5f97\u6ce8\u80fd\u9644\u9b54,\u7ed9\u4e8810\u4e07\u7684\u7535\u6c60\u5bb9\u91cf.\u80fd\u91cf\u5438\u6536\u62b5\u6d88\u4e00\u534a\u7684\u8010\u4e45\u635f\u4f24.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD5g=="
                },
                {
                    "name": "\u7384\u94a2\u5de5\u5177\u548c\u6b66\u5668\u7684\u9ad8\u7ea7\u5347\u7ea7",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7ec8\u7ed3\u4e4b\u5251.png",
                    "x": 780.0,
                    "y": 36.0,
                    "tooltip": "\u7384\u94a2\u5de5\u5177\u548c\u6b66\u5668\u7684\u9ad8\u7ea7\u5347\u7ea7",
                    "data": "\u4f60\u7684\u7384\u94a2\u5de5\u5177\u548c\u6b66\u5668\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u7535\u5bb9\u5668\u6216\u8005\u5176\u4ed6\u5404\u79cd\u7269\u54c1\u6765\u5347\u7ea7. \u6bcf\u6b21\u5347\u7ea7\u90fd\u9700\u8981\u82b1\u8d39\u4e00\u5b9a\u7684\u7ecf\u9a8c\u503c. \u53ea\u6709<br/>\u7ec8\u7ed3\u4e4b\u5251\u548c\u7384\u94a2\u9550\u53ef\u4ee5\u4f7f\u7528\u672b\u5f71\u6676\u4f53\u5347\u7ea7,\u5347\u7ea7\u540e\u53ef\u4ee5\u83b7\u5f97\u65c5\u884c\u9644\u9b54,\u8ba9\u8fd9\u4e24\u4e2a\u7269\u54c1\u62e5\u6709\u548c\u65c5\u884c\u6743\u6756\u4e00\u6837\u7684\u80fd\u529b.<br/>  \u6240\u6709\u5de5\u5177\u548c\u6b66\u5668\u90fd\u53ef\u4ee5\u901a\u8fc7\u7535\u5bb9\u5668\u6765\u5347\u7ea7(\u4e09\u79cd\u7535\u5bb9\u5206\u522b\u5c06\u7535\u6c60\u5bb9\u91cf\u63d0\u9ad8\u523015\u4e07\u300125\u4e07\u548c100\u4e07).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD5w=="
                },
                {
                    "name": "\u95ea\u5b58",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u95ea\u5b58.png",
                    "x": 180.0,
                    "y": 204.0,
                    "tooltip": "\u95ea\u5b58",
                    "data": "\u95ea\u5b58\u53ef\u4ee5\u7528\u6765\u4fdd\u5b58\u5730\u9707\u52d8\u63a2\u8005\u6570\u636e,\u5e76\u4e14\u95ea\u5b58\u5bf9\u4e8eLuV\u9636\u6bb5\u89e3\u9501\u7684\u88c5\u914d\u7ebf\u4e5f\u5341\u5206\u91cd\u8981.\u56e0\u6b64\u53bb\u5236\u9020\u4e00\u4e9b\u95ea\u5b58\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE2A=="
                },
                {
                    "name": "\u76ee\u6807:\u6708\u7403",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/1\u9636\u706b\u7bad.png",
                    "x": 576.0,
                    "y": 468.0,
                    "tooltip": "\u76ee\u6807:\u6708\u7403",
                    "data": "\u5728HV\u9636\u6bb5,\u4f60\u5e94\u8be5\u5c3d\u5feb\u767b\u4e0a\u6708\u7403.\u4ee5\u83b7\u5f97\u949b,\u7528\u4e8e\u5236\u9020EV\u673a\u5668\u548cAE\u7cfb\u7edf. \u4e0d\u8fc7\u8fd9\u662f\u4e00\u4e2a\u6f2b\u957f\u800c\u8270\u5de8\u7684\u4efb\u52a1<br/>,\u8bf7\u8f6c\u5230\"\u592a\u7a7a\u7ade\u8d5b\"\u4efb\u52a1\u680f\u83b7\u53d6\u66f4\u591a\u4fe1\u606f.\u53e6\u5916,IV\u7535\u8def\u677f\u548cHV\u7ec4\u88c5\u673a\u662f\u8fd9\u4e2a\u4efb\u52a1\u680f\u7684\u524d\u7f6e\u6761\u4ef6.\u5982\u679c\u4f60\u6b63<br/>\u5728\u8fdb\u884c\u4e0d\u4e0a\u5929\u6311\u6218,\u53ef\u4ee5\u624b\u6301\u4e00\u7ec4\u949b\u952d\u89e6\u53d1\u9690\u85cf\u4efb\u52a1,\u8df3\u8fc7\u672c\u4efb\u52a1\u524d\u8fdb\u5230\u4e0b\u4e00\u6b65. \u7b49\u4f60\u5230EV\u9636\u6bb5\u4e4b\u540e,\u8fd8\u80fd\u624b<br/>\u6301\u4e00\u7ec4\u94a8\u94a2\u952d\u89e6\u53d1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAog=="
                },
                {
                    "name": "\u4e8c\u7532\u57fa\u6c2f\u7845\u70f7",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e8c\u7532\u57fa\u6c2f\u7845\u70f7\u5355\u5143.png",
                    "x": 324.0,
                    "y": 516.0,
                    "tooltip": "\u4e8c\u7532\u57fa\u6c2f\u7845\u70f7",
                    "data": "\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u9700\u8981\u6c2f\u7532\u70f7\u548c\u7845\u7c89. \u7ecf\u8fc7\u53cd\u5e94\u540e,\u4f60\u5c31\u53ef\u4ee5\u83b7\u5f97\u4e8c\u7532\u57fa\u4e8c\u6c2f\u7845\u70f7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGfg=="
                },
                {
                    "name": "\u84b8\u998f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e01\u4e8c\u70ef\u5355\u5143.png",
                    "x": 180.0,
                    "y": 468.0,
                    "tooltip": "\u84b8\u998f",
                    "data": "\u4e3a\u4e86\u4e0b\u4e00\u6b65\u9700\u8981\u7684\u4e00\u4e9b\u6d41\u4f53/\u6c14\u4f53,\u5982\u82ef\u3001\u4e59\u70ef\u548c\u4e01\u4e8c\u70ef,\u4f60\u9700\u8981\u8ba9\u84b8\u998f\u5854\u8fd0\u884c\u6570\u8f6e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGUQ=="
                },
                {
                    "name": "\u672b\u5f71\u4e4b\u773c",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u672b\u5f71\u4e4b\u773c.png",
                    "x": 264.0,
                    "y": 420.0,
                    "tooltip": "\u672b\u5f71\u4e4b\u773c",
                    "data": "\u672b\u5f71\u4e4b\u773c\u53ef\u4ee5\u5728\u9ad8\u538b\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u5236\u4f5c.\u8ba9\u70c8\u7130\u7c89\u548c\u672b\u5f71\u73cd\u73e0\u8fdb\u884c\u53cd\u5e94.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE0Q=="
                },
                {
                    "name": "\u5145\u80fd\u5408\u91d1",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5145\u80fd\u5408\u91d1\u952d.png",
                    "x": 636.0,
                    "y": 132.0,
                    "tooltip": "\u5145\u80fd\u5408\u91d1",
                    "data": "\u5145\u80fd\u5408\u91d1\u662f\u5c06\u5bfc\u7535\u94c1\u3001\u9ed1\u94a2\u548c\u91d1\u6405\u62cc\u800c\u6210\u7684\u4e00\u79cd\u65b0\u578b\u5408\u91d1.\u5728\u5236\u9020\u53cc\u5c42\u7535\u5bb9\u548cHV\u80fd\u6e90\u4ed3\u7684\u65f6\u5019\u9700\u8981\u7528\u5230\u5b83. \u5728<br/>\u5f97\u5230\u5145\u80fd\u5408\u91d1\u7c89\u672b\u540e\u9700\u8981\u5c06\u5b83\u653e\u5165\u5de5\u4e1a\u9ad8\u7089\u4e2d\u7194\u70bc\u6210\u5145\u80fd\u5408\u91d1\u952d.\u5355\u6b65\u6405\u62cc\u7684\u914d\u65b9\u7528\u5230\u4e867\u79cd\u539f\u6599,\u6240\u4ee5\u9700\u8981EV<br/>+\u6216\u8005\u591a\u65b9\u5757\u6405\u62cc\u673a.\u73b0\u9636\u6bb5\u4f60\u5f97\u7528\u53e6\u4e00\u4e2a\u914d\u65b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD3g=="
                },
                {
                    "name": "\u66f4\u5927\u7684\u50a8\u7f50",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8d85\u7ea7\u7f38 II.png",
                    "x": 684.0,
                    "y": 84.0,
                    "tooltip": "\u66f4\u5927\u7684\u50a8\u7f50",
                    "data": "4000\u6876\u8fd8\u4e0d\u591f?\u60f3\u5b58\u591f\u70e7\u4e00\u8f88\u5b50\u7684\u67f4\u6cb9?\u8bd5\u8bd5\u8d85\u7ea7\u7f38II\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHEw=="
                },
                {
                    "name": "\u7ecf\u9a8c\u5b58\u50a8",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7ecf\u9a8c\u4ea4\u6362\u65b9\u5c16\u7891.png",
                    "x": 636.0,
                    "y": 180.0,
                    "tooltip": "\u7ecf\u9a8c\u5b58\u50a8",
                    "data": "\u6b7b\u4ea1\u5f88\u75db\u82e6,\u4e0d\u662f\u5417\uff1f\u56e0\u4e3a\u6b7b\u4ea1\u4f1a\u5bfc\u81f4\u4f60\u4e22\u5931\u6240\u6709\u5b9d\u8d35\u7684\u7ecf\u9a8c. \u4f46\u662f\u4e0d\u8981\u5bb3\u6015,\u6709\u4e2a\u529e\u6cd5\u53ef\u4ee5\u907f\u514d\u635f\u5931! \u4f60\u53ef<br/>\u4ee5\u901a\u8fc7\u7ecf\u9a8c\u4ea4\u6362\u65b9\u5c16\u7891\u6765\u628a\u4f60\u6240\u6709\u7684\u7ecf\u9a8c\u90fd\u5b58\u50a8\u5230\u4e00\u4e2a\u66f4\u52a0\u5b89\u5168\u7684\u5730\u65b9.\u7edd\u5bf9\u6bd4\u4f60\u5f53\u524d\u80fd\u505a\u5230\u7684\u6240\u6709\u65b9\u6848\u90fd\u66f4\u53ef\u9760<br/>.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAApw=="
                },
                {
                    "name": "\u8ba9\u8015\u79cd\u66f4\u5bb9\u6613\u4e00\u70b9",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u79cd\u690d\u7ad9.png",
                    "x": 636.0,
                    "y": 228.0,
                    "tooltip": "\u8ba9\u8015\u79cd\u66f4\u5bb9\u6613\u4e00\u70b9",
                    "data": "\u538c\u5026\u4e86\u6797\u4e1a\u591a\u65b9\u5757\u519c\u573a\u7684\u590d\u6742\u8981\u6c42\uff1f EIO\u7684\u79cd\u690d\u7ad9\u53ef\u4ee5\u5e2e\u52a9\u4f60\u51cf\u8f7b\u8fd9\u79cd\u75db\u82e6.\u5b83\u53ea\u9700\u8981EU\u548c\u5de5\u5177,\u5e76\u4e14\u53ef\u4ee5<br/>\u4f7f\u7528\u7535\u5bb9\u5668\u8f7b\u677e\u5347\u7ea7.\u652f\u6301\u5927\u591a\u6570\u6b63\u5e38\u7684\u4f5c\u7269\u548c\u6811\u6728,\u4f46\u9057\u61be\u7684\u662f\u4e0d\u652f\u6301IC2\u4f5c\u7269.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGyw=="
                },
                {
                    "name": "\u627e\u5230\u6c1f\u78b3\u9567\u94c8\u77ff\u77f3\u3001\u72ec\u5c45\u77f3\u548c\u9495\u77ff\u77f3",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u9495\u77ff\u77f3.png",
                    "x": 576.0,
                    "y": 552.0,
                    "tooltip": "\u627e\u5230\u6c1f\u78b3\u9567\u94c8\u77ff\u77f3\u3001\u72ec\u5c45\u77f3\u548c\u9495\u77ff\u77f3",
                    "data": "\u8bb8\u591aEV\u673a\u5668\u96f6\u4ef6(\u9a6c\u8fbe)\u9700\u8981\u9495. \u7a00\u571f\u662f\u83b7\u5f97\u9495\u7684\u597d\u65b9\u6cd5,\u4f46\u5728\u6708\u7403\u4e0a,\u4f60\u53ef\u4ee5\u627e\u5230\u542b\u6709\u9495\u77ff\u77f3\u7684\u77ff\u8109. \u77ff<br/>\u8109\u4e2d\u7684\u6c1f\u78b3\u9567\u94c8\u77ff\u8fd8\u662f\u6c1f\u7684\u91cd\u8981\u6765\u6e90.  \u800c\u4e14\u72ec\u5c45\u77f3\u8fd8\u53ef\u4ee5\u63d0\u53d6\u51fa\u66f4\u591a\u7a00\u571f.  \u8fd9\u79cd\u77ff\u8109\u53ef\u5728\u6708\u7403Y=20-<br/>40\u627e\u5230.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGTA=="
                },
                {
                    "name": "\u627e\u5230\u94dd\u571f\u77ff\u8109",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u94dd\u571f\u77ff\u77ff\u77f3.png",
                    "x": 672.0,
                    "y": 552.0,
                    "tooltip": "\u627e\u5230\u94dd\u571f\u77ff\u8109",
                    "data": "\u94dd\u571f\u77ff\u8109\u8574\u6db5\u4e24\u79cd\u53ef\u4ee5\u5904\u7406\u83b7\u5f97\u949b\u7684\u77ff\u77f3,\u94dd\u571f\u77ff\u548c\u949b\u94c1\u77ff. \u94dd\u571f\u77ff\u4e2d\u8fd8\u542b\u6709\u94dd,\u800c\u94dd\u77ff\u77f3\u8fd9\u79cd\u4e5f\u6709\u94dd(\u5e9f\u8bdd)<br/>. \u4f60\u9700\u8981\u6210\u5428\u7684\u949b,\u6240\u4ee5\u591a\u6316\u70b9\u94dd\u571f\u77ff\u8109\u5427.\u5f53\u4f60\u91c7\u77ff\u7684\u65f6\u5019,\u80af\u5b9a\u4f1a\u6316\u5230\u8d2b\u7620\u77ff\u5e76\u6361\u5230\u4e00\u4e9b\u9668\u94c1\u77ff,\u8db3\u591f\u9020\u706b<br/>\u7bad\u4e86. \u8981\u662f\u8fd8\u4e0d\u591f,\u6216\u8005\u4f60\u60f3\u591a\u56e4\u4e00\u70b9\u7684\u8bdd,\u53ef\u4ee5\u6316\u6398\u90a3\u4e9b\u4ece\u5929\u800c\u964d\u7684\u9668\u77f3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD8w=="
                },
                {
                    "name": "\u5bfb\u627e\u949b\u94c1",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u949b\u77ff\u77f3.png",
                    "x": 672.0,
                    "y": 468.0,
                    "tooltip": "\u5bfb\u627e\u949b\u94c1",
                    "data": "\u949b\u94c1\u76f8\u6bd4\u4e8e\u94dd\u571f\u6765\u8bf4\u53ef\u4ee5\u51fa\u4ea7\u66f4\u591a\u7684\u949b. \u949b\u94c1\u77ff\u8109\u53ef\u4ee5\u5728\u6708\u7403\u4e0aY=10-70\u627e\u5230.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFkA=="
                },
                {
                    "name": "\u00a79\u00a7lFluid Heater",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u6d41\u4f53\u52a0\u70ed\u5668 II.png",
                    "x": 600.0,
                    "y": 324.0,
                    "tooltip": "\u00a79\u00a7lFluid Heater",
                    "data": "You will need a Fluid Heater for some chemical pro<br/>cesses, for the best fries, but also right now to <br/>make NaK coolant. To proceed you will need either <br/>an MV or an HV Fluid Heater. Make one of them.\n\nTh<br/>e HV one can be used later to better process bauxi<br/>te after you have been to the moon.",
                    "quest_id": "55XTBx8LRN2Ol_42LS6Mwg=="
                },
                {
                    "name": "\u5fd8\u4e86\u4ec0\u4e48?",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u84dd\u77f3\u77ff\u77f3.png",
                    "x": 120.0,
                    "y": 132.0,
                    "tooltip": "\u5fd8\u4e86\u4ec0\u4e48?",
                    "data": "\u4f60\u7684\u5de5\u4f5c\u7ad9\u9700\u8981\u4e9b\u84dd\u77f3? \u56de\u5230\u4e0b\u754c\u5e76\u5728Y=5-45\u5bfb\u627e\u785d\u77f3\u77ff\u8109\u5427. \u8981\u662f\u4f60\u7684\u84dd\u77f3\u592a\u591a\u7684\u8bdd,\u8fd8\u53ef\u4ee5\u5c06\u5176\u79bb<br/>\u5fc3\u4ea7\u51fa\u7425\u73c0\u91d1\u548c\u7ea2\u77f3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJjw=="
                },
                {
                    "name": "\u9553,\u8fd8\u6709\u66f4\u591a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u9553\u7c89.png",
                    "x": 672.0,
                    "y": 648.0,
                    "tooltip": "\u9553,\u8fd8\u6709\u66f4\u591a",
                    "data": "\u79bb\u5fc3\u94dd\u571f\u77ff\u6e23,\u4ee5\u83b7\u5f97\u5269\u4f59\u7684\u6240\u9700\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALoA=="
                },
                {
                    "name": "\u5145\u5206\u5229\u7528\u4f60\u7684\u94dd\u571f\u77ff",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7c89\u788e\u7684\u94dd\u571f\u77ff\u77ff\u77f3.png",
                    "x": 672.0,
                    "y": 600.0,
                    "tooltip": "\u5145\u5206\u5229\u7528\u4f60\u7684\u94dd\u571f\u77ff",
                    "data": "\u4e0d\u540c\u4e8e\u76f4\u63a5\u70ed\u79bb, \u4f7f\u7528\u66f4\u5408\u9002\u7684\u5904\u7406\u65b9\u5f0f\u53ef\u4ee5\u8ba9\u4f60\u4ece\u94dd\u571f\u77ff\u4e2d\u83b7\u5f97\u66f4\u591a\u7684\u9553, \u5e76\u4ea7\u51fa\u5927\u91cf\u7684\u91d1\u7ea2\u77f3\u548c\u6c27\u5316\u94dd.<br/> \u9996\u5148, \u5236\u4f5c\u4e00\u4e9b\u94dd\u571f\u6ce5\u6d46.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALog=="
                },
                {
                    "name": "\u83b7\u5f97\u7b2c\u4e00\u5757\u94c2\u952d",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u94c2\u7c92.png",
                    "x": 588.0,
                    "y": 48.0,
                    "tooltip": "\u83b7\u5f97\u7b2c\u4e00\u5757\u94c2\u952d",
                    "data": "\u9ad8\u6548\u7684\u94c2\u5904\u7406\u76f8\u5f53\u590d\u6742.\u4f46\u662f\u73b0\u5728,\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5c06\u5176\u7194\u70bc\u6210\u94c2\u952d.\u8fd9\u53ef\u80fd\u4e0d\u662f\u6700\u9ad8\u6548\u7684\u65b9\u6cd5,\u4f46\u662f\u5bf9\u4e8e\u6211\u4eec\u63a5\u4e0b<br/>\u6765\u8981\u505a\u7684\u4e8b\u60c5\u5df2\u7ecf\u8db3\u591f\u4e86.\u5728\u8fd9\u4e2a\u9636\u6bb5,\u94c2\u7684\u6700\u4f18\u6765\u6e90\u662f\u66ae\u8272\u68ee\u6797\u4e2d\u7684\u954d\u77ff\u77f3,\u6216\u672b\u5730\u77f3\u7c89(\u5982\u679c\u4f60\u5df2\u7ecf\u80fd\u5728\u672b\u5730<br/>\u751f\u5b58).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI9w=="
                },
                {
                    "name": "\u9690\u85cf\u5f0f\u62bd\u5c49",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5c4f\u853d\u94a5\u5319.png",
                    "x": 312.0,
                    "y": 372.0,
                    "tooltip": "\u9690\u85cf\u5f0f\u62bd\u5c49",
                    "data": "\u4f60\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230,\u5f53\u4f60\u5728\u62bd\u5c49\u671d\u5411\u7684\u90a3\u9762,\u5e76\u4e14\u78b0\u5230\u62bd\u5c49\u5899\u65f6,\u4f1a\u6709\u4e00\u70b9\u70b9\u7684\u5ef6\u8fdf.\u5982\u679c\u4e0d\u60f3\u6709\u8fd9\u79cd\u5ef6\u8fdf\u7684\u8bdd,\u4f60<br/>\u53ef\u4ee5\u5236\u4f5c\u6b64\u94a5\u5319,\u8ba9\u62bd\u5c49\u4e0d\u5728\u524d\u90e8\u663e\u793a\u7269\u54c1. \u5bf9\u62bd\u5c49\u7ba1\u7406\u5668\u4f7f\u7528\u94a5\u5319\u53ef\u4ee5\u5bf9\u6574\u9762\u62bd\u5c49\u5899\u751f\u6548.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJXg=="
                },
                {
                    "name": "\u70ed\u6ce5\u6d46",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u70ed\u94dd\u571f\u6ce5\u6d46\u5355\u5143.png",
                    "x": 624.0,
                    "y": 600.0,
                    "tooltip": "\u70ed\u6ce5\u6d46",
                    "data": "\u7528\u84b8\u6c7d\u52a0\u70ed\u6ce5\u6d46.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALoQ=="
                },
                {
                    "name": "\u592a\u591a\u7684\u5706\u77f3\u662f\u591a\u5c11?",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8d85\u7ea7\u7bb1 III.png",
                    "x": 480.0,
                    "y": 240.0,
                    "tooltip": "\u592a\u591a\u7684\u5706\u77f3\u662f\u591a\u5c11?",
                    "data": "\u8d85\u7ea7\u7bb1III\u5b9e\u5728\u592a\u53ef\u7b11\u4e86.\u54ea\u6709\u4eba\u9700\u8981\u5b58\u50a8\u4e00\u5343\u516d\u767e\u4e07\u7684\u4e1c\u897f\u554a?  \u989d,\u4f60?\u90a3\u662f\u8c01...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHdQ=="
                },
                {
                    "name": "\u592a\u591a\u6db2\u4f53\u662f\u591a\u5c11?",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8d85\u7ea7\u7f38 III.png",
                    "x": 432.0,
                    "y": 240.0,
                    "tooltip": "\u592a\u591a\u6db2\u4f53\u662f\u591a\u5c11?",
                    "data": "\u4f60\u60f3\u50a8\u5b58\u7684\u6db2\u4f53\u65e0\u7a77\u65e0\u5c3d.\u4e3a\u4f60\u81ea\u5df1\u5236\u4f5c\u4e00\u4e9b\u8d85\u7ea7\u7f38III\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHFw=="
                },
                {
                    "name": "\u8fdb\u9636\u9505\u7089[HV]",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u9505\u7089[HV].png",
                    "x": 828.0,
                    "y": 528.0,
                    "tooltip": "\u8fdb\u9636\u9505\u7089[HV]",
                    "data": "GT++\u7684\u8fdb\u9636\u9505\u7089[HV]\u53ef\u4ee5\u6bd4MV\u7248\u672c\u66f4\u9ad8\u6548\u5730\u4ea7\u751f\u84b8\u6c7d.\u9664\u975e\u542f\u52a8\u65f6\u5c31\u84b8\u6c7d\u4e0d\u8db3,\u5426\u5219\u5b83\u4e0d\u4f1a\u8017\u5c3d\u71c3\u6599,<br/>\u6240\u4ee5\u5b83\u975e\u5e38\u9ad8\u6548.\u8bd1\u8005\u6ce8:\u9664\u6b64\u4e4b\u5916,\u5f53\u6e29\u5ea6\u9ad8\u4e8e\u4e00\u5b9a\u7a0b\u5ea6\u65f6\u5c31\u4f1a\u81ea\u52a8\u505c\u6b62\u6d88\u8017\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHbQ=="
                },
                {
                    "name": "HV\u5377\u677f\u673a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u5377\u677f\u673a II.png",
                    "x": 396.0,
                    "y": 372.0,
                    "tooltip": "HV\u5377\u677f\u673a",
                    "data": "HV\u5377\u677f\u673a\u7684\u901f\u5ea6\u662fLV\u5377\u677f\u673a\u76844\u500d,\u800c\u4e14\u5b83\u8fd8\u89e3\u9501\u4e86\u4e00\u4e2a\u91cd\u8981\u5408\u6210\u8868-\u9521\u7f50!  \u6709\u4e86\u8fd9\u53f0\u5377\u677f\u673a,\u4f60\u53ef\u4ee5\u5c06<br/>\u9521\u5916\u58f3\u5236\u6210\u9521\u7f50.\u5c06\u9521\u7f50\u4e0e\u98df\u7269\u4e00\u8d77\u653e\u5165\u88c5\u7f50\u673a(LV\u5c31\u591f\u4e86)\u53ef\u4ee5\u5236\u6210\u7f50\u5934.\u8fd9\u79cd\u7f50\u5934\u53ef\u4ee5\u5806\u53e064\u4e2a,\u5e76\u4e14\u8ba9<br/>\u4f60\u7684\u98df\u8c31\u4e0d\u518d\u590d\u6742-\u65e0\u9700\u6362\u7740\u82b1\u6837\u5403\u4e1c\u897f\u4e86!\u4e00\u6b21\u53f3\u952e,\u4f60\u5c31\u4f1a\u5403\u6389\u4f60\u5f53\u524d\u9700\u8981\u5403\u7684\u6240\u6709\u7f50\u5934.\u4e00\u4e2a\u7f3a\u70b9\u662f,\u4f60\u5c06<br/>\u4e0d\u518d\u83b7\u5f97\u9971\u98dfbuff\u548c\u8fd9\u4e2abuff\u63d0\u4f9b\u7684\u8f7b\u5fae\u751f\u547d\u6062\u590d\u6548\u679c,\u4e5f\u65e0\u6cd5\u901a\u8fc7\u591a\u6837\u98df\u54c1\u83b7\u5f97\u751f\u547d\u503c\u4e0a\u9650\u63d0\u5347.\u800c\u4e14<br/>,\u8fd9\u4e9b\u7f50\u5934\u4e5f\u4e0d\u9002\u5408\u653e\u5728\u5348\u9910\u888b\u6216\u5348\u9910\u76d2\u91cc,\u6240\u4ee5\u4f60\u4e0d\u518d\u9700\u8981\u90a3\u4e9b\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFCQ=="
                },
                {
                    "name": "HV\u677f\u6750\u5207\u5272\u673a",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8fdb\u9636\u677f\u6750\u5207\u5272\u673a II.png",
                    "x": 348.0,
                    "y": 276.0,
                    "tooltip": "HV\u677f\u6750\u5207\u5272\u673a",
                    "data": "\u751f\u4ea7NOR\u3001NAND\u548c\u5176\u4ed6\u7684\u9ad8\u7aef\u82af\u7247\u90fd\u9700\u8981\u7528\u5230HV\u7ea7\u522b\u7684\u5207\u5272\u673a.\u4f60\u8fd8\u9700\u8981\u8fd9\u53f0\u673a\u5668\u5207\u5272\u78f7\u63ba\u6742\u7684\u5355\u6676\u7845.<br/>\u5f88\u5feb\u4f60\u5c31\u4f1a\u53d1\u73b0,\u6bcf\u79cd\u5207\u5272\u914d\u65b9\u90fd\u9700\u8981\u8d85\u51c0\u95f4\u73af\u5883\u4e86,\u6240\u4ee5\u8bb0\u5f97\u4ed4\u7ec6\u67e5\u770bNEI.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE1A=="
                },
                {
                    "name": "HV\u80fd\u6e90\u4ed3",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/HV\u80fd\u6e90\u4ed3.png",
                    "x": 708.0,
                    "y": 384.0,
                    "tooltip": "HV\u80fd\u6e90\u4ed3",
                    "data": "HV\u80fd\u6e90\u4ed3\u662f\u4e00\u53f0\u9ad8\u901f\u5de5\u4e1a\u9ad8\u7089\u7684\u5173\u952e,\u8fd8\u80fd\u89e3\u9501\u66f4\u9ad8\u7ea7\u7684\u914d\u65b9.\u4f60\u9700\u8981\u5236\u4f5c\u6c26\u51b7\u5374\u5355\u5143\u6216\u8005\u94a0\u94be\u51b7\u5374\u5355\u5143.\u6d41\u4f53<br/>\u704c\u88c5\u673a\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684. NEI\u4f1a\u544a\u8bc9\u4f60\u600e\u4e48\u505a\u7684.\u8bf7\u6ce8\u610f,\u4f60\u9700\u8981\u8d85\u51c0\u95f4\u3001\u771f\u7a7a\u51b7\u51bb\u673a\u548c\u65b0\u7684\u7ebf\u5708.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHbw=="
                },
                {
                    "name": "HV\u538b\u6a21\u673a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u538b\u6a21\u673a II.png",
                    "x": 396.0,
                    "y": 324.0,
                    "tooltip": "HV\u538b\u6a21\u673a",
                    "data": "\u4f60\u9700\u8981HV\u538b\u6a21\u673a\u6765\u6324\u538b\u90a3\u4e9b\u96be\u4ee5\u52a0\u5de5\u7684\u91d1\u5c5e,\u5982\u94a8\u94a2\u548cHSS.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE9w=="
                },
                {
                    "name": "HV\u8d85\u5bfc(512 EU/t)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/1xHV\u8d85\u5bfc\u5bfc\u7ebf.png",
                    "x": 828.0,
                    "y": 576.0,
                    "tooltip": "HV\u8d85\u5bfc(512 EU/t)",
                    "data": "\u65e0\u635f\u7684HV\u8d85\u5bfc\u5bfc\u7ebf\u5982\u4f55? Titaniumonabariumdecacoppereikosaoxid<br/>e(HV\u8d85\u5bfc)\u662f\u4e00\u79cd\u8d85\u5bfc\u6750\u6599,\u53ef\u4ee5\u6beb\u65e0\u635f\u5931\u5730\u4f20\u9012\u4f60\u7684\u80fd\u91cf. \u73b0\u5728\u6bcf\u4e2a\u7535\u538b\u90fd\u6709\u7ebf\u635f\u4e3a0\u7684\u8d85\u5bfc\u5bfc\u7ebf.\u5728\u9ad8<br/>\u538b\u6405\u62cc\u673a\u4e2d\u6405\u62cc\u949b\u3001\u94a1\u3001\u94dc\u548c\u6c27. \u5236\u5f97\u7684\u7c97\u80da\u7c89\u9700\u8981\u7528\u5e26\u6709\u954d\u94ec\u5408\u91d1\u7ebf\u5708\u7684\u5de5\u4e1a\u9ad8\u7089(EBF)\u70e7\u5236. \u518d\u7528\u771f<br/>\u7a7a\u51b7\u51bb\u673a\u6765\u51b7\u5374\u5b83. \u5236\u4f5c\u4e00\u4e9bHV\u8d85\u5bfc\u7c97\u80da\u5bfc\u7ebf\u5e76\u4f7f\u7528\u7ec4\u88c5\u673a\u5c06\u8fd9\u4e9b\u5bfc\u7ebf\u4e0e\u6c26\u3001\u949b\u6d41\u4f53\u7ba1\u9053\u548cHV\u6cf5\u7ec4\u5408\u5728\u4e00\u8d77<br/>,\u4ee5\u83b7\u5f97512EU/t\u7684\u8d85\u5bfc\u5bfc\u7ebf.\u5f53\u7136,\u662f\u5426\u9700\u8981\u4e3a\u4e86\u8282\u7701\u8fd9\u4e48\u4e00\u70b9\u80fd\u91cf,\u5c31\u901a\u8fc7\u8fd9\u4e48\u590d\u6742\u7684\u5de5\u5e8f\u5236\u9020\u8d85\u5bfc\u5bfc<br/>\u7ebf,\u5b8c\u5168\u53d6\u51b3\u4e8e\u4f60\u81ea\u5df1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFfQ=="
                },
                {
                    "name": "\u96c6\u6210\u5904\u7406\u5668",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u96c6\u6210\u5904\u7406\u5668.png",
                    "x": 264.0,
                    "y": 60.0,
                    "tooltip": "\u96c6\u6210\u5904\u7406\u5668",
                    "data": "\u8fd9\u662f4\u6b21\u5957\u5a03\u7cfb\u5217\u7535\u8def\u677f\u7684\u5f00\u7aef. \u96c6\u6210\u7cfb\u5217\u7684\u7535\u8def\u677f\u4e0e\u540e\u9762\u7684\u7535\u8def\u677f\u7cfb\u5217\u4e0d\u4e00\u6837,\u4ec5\u5728\u4e0e\u547d\u540d\u65b9\u5f0f\u4e0d\u4e00\u6837,\u5176\u4ed6<br/>\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e00\u81f4. \u96c6\u6210\u7cfb\u5217\u7535\u8def\u677f,\u9664\u4e86\u662f\u4f60\u7684\u7b2c\u4e00\u79cdEV\u548cIV\u7535\u8def\u677f\u4ee5\u5916,\u5269\u4e0b\u7684\u4e5f\u5c31\u662f\u4e00\u79cd\u65b0\u7b49\u7ea7\u7684\u7535\u8def<br/>\u677f\u800c\u5df2. \u4e5f\u56e0\u6b64\u4f60\u9700\u8981\u4e24\u53f0\u65b0\u7684\u7535\u8def\u7ec4\u88c5\u673a\u5b8c\u6210\u5b83\u4eec\u7684\u5236\u9020.\u6700\u5f00\u59cb\u7684\u662f\u96c6\u6210\u5904\u7406\u5668,\u8fd9\u662f\u6700\u540e\u4e00\u79cdMV\u7535\u8def\u677f<br/>.\u4f60\u53ef\u4ee5\u76f4\u63a5\u5236\u9020\u800c\u4e0d\u7528\u5957\u5a03,\u6240\u4ee5\u5b83\u5c31\u662f\u6700\u4fbf\u5b9c\u7684. \u8fd9\u4e00\u70b9\u5728\u6bcf\u4e2a\u7cfb\u5217\u7684\u7535\u8def\u677f\u4e0a\u90fd\u9002\u7528.\u4f60\u9700\u8981\u53e6\u59164\u4e2a\u7535<br/>\u963b,4\u4e2a\u7535\u5bb9\u548c4\u4e2a\u6676\u4f53\u7ba1.\u8d34\u7247\u6216\u975e\u8d34\u7247\u7248\u672c\u90fd\u53ef\u4ee5.\u522b\u62c5\u5fc3\u8fdb\u9636\u8d34\u7247\u5143\u4ef6\u4e86,\u597d\u4e0d?\u5b83\u4eec\u662f\u7528\u4e8eLuV+\u7684.<br/>\u8fd9\u79cd\u5148\u8fdb\u7684\u7535\u8def\u677f\u9700\u8981\u8d85\u51c0\u95f4\u73af\u5883.\u53e6\u5916,\u4e4b\u540e\u7684\u6240\u6709\u7535\u8def\u677f\u90fd\u9700\u8981\u8d85\u51c0\u73af\u5883.",
                    "quest_id": "A=="
                },
                {
                    "name": "\u6211\u770b\u5230\u4e86\u4e00\u5207",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5b58\u50a8\u63a7\u5236\u9762\u677f.png",
                    "x": 828.0,
                    "y": 228.0,
                    "tooltip": "\u6211\u770b\u5230\u4e86\u4e00\u5207",
                    "data": "\u5b58\u50a8\u63a7\u5236\u9762\u677f\u53ef\u4ee5\u4ee3\u66ff\u7ea2\u77f3\u8ba1\u5212\u7684\u5b58\u50a8\u7cfb\u7edf(\u5e0c\u671b\u5427). \u548c\u7ea2\u77f3\u8ba1\u5212\u4e00\u6837,\u4f60\u5fc5\u987b\u4f7f\u7528\u7ba1\u9053\u94fe\u63a5\u6bcf\u4e00\u4e2a\u7bb1\u5b50\u6216\u8005<br/>\u6876. \u9664\u6b64\u4e4b\u5916,\u4f60\u8fd8\u9700\u8981\u7ed9\u6bcf\u4e00\u4e2a\u94fe\u63a5\u5230\u5b58\u50a8\u8bbe\u5907\u7684\u7ba1\u9053\u4e0a\u9762\u5b89\u88c5\"\u8fdc\u7a0b\u63a5\u5165\u5347\u7ea7\"\u540e\u624d\u53ef\u4ee5\u5728\u9762\u677f\u4e0a\u9762\u770b\u5230\u91cc<br/>\u9762\u5b58\u50a8\u7684\u7269\u54c1. \u63d0\u793a:\u8fd9\u4e2a\u8bbe\u5907\u9700\u8981\u4f7f\u7528\u8425\u517b\u7cbe\u534e\u6db2\u6765\u9a71\u52a8.\u597d\u5427,\u7b49\u5230\u4f60\u80fd\u9020AE\u7cfb\u7edf\u4e4b\u540e,\u8fd9\u4e9b\u90fd\u4f1a\u901a\u901a\u8fc7<br/>\u65f6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAow=="
                },
                {
                    "name": "\u00a79\u00a7lKeeping your energy hatch from overheating",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/60k\u6c26\u51b7\u5374\u5355\u5143.png",
                    "x": 708.0,
                    "y": 324.0,
                    "tooltip": "\u00a79\u00a7lKeeping your energy hatch from overheating",
                    "data": "You have two options here. Either you followed the<br/> NaK quests or you made a vacuum freezer to cool h<br/>elium.",
                    "quest_id": "pXRqb1HyQYSjtHp9dt1xZg=="
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u52a8\u80fd\u53d1\u7535\u673a.png",
                    "x": 828.0,
                    "y": 480.0,
                    "tooltip": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "data": "\u52a8\u80fd\u53d1\u7535\u673a\u53ef\u4ee5\u5c06\u673a\u68b0\u80fd\u8f6c\u5316\u6210\u7535\u80fd.\u4ea7\u751f\u7684\u7535\u529b\u53d6\u51b3\u4e8e\u52a8\u80fd\u8f93\u5165. \u52a8\u80fd\u53d1\u7535\u673a\u901a\u5e38\u548c\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u3001\u6c34\u529b\u52a8<br/>\u80fd\u53d1\u751f\u673a\u4e00\u8d77\u4f7f\u7528.\u800c\u84b8\u6c7d\u52a8\u80fd\u53d1\u751f\u673a\u53ea\u6709\u4e00\u4e2a\u7b49\u7ea7,\u6240\u4ee5\u5982\u679c\u5bf9\u84b8\u6c7d\u611f\u5174\u8da3\u7684\u8bdd,\u53ef\u4ee5\u8003\u8651\u8003\u8651\u84b8\u6c7d\u6da1\u8f6e.\u5f53\u653e<br/>\u7f6e\u52a8\u80fd\u53d1\u7535\u673a\u65f6,\u4efb\u4f55\u65f6\u5019,\u8f93\u5165\u7aef\u90fd\u662f\u9762\u5411\u4f60\u7684.\u6240\u4ee5\u4f60\u603b\u662f\u5148\u653e\u7f6e\u52a8\u80fd\u53d1\u7535\u673a,\u7136\u540e\u518d\u662f\u98ce\u529b/\u6c34\u529b\u52a8\u80fd\u53d1\u751f<br/>\u673a,\u7136\u540e\u518d\u5c06\u8f6c\u5b50\u653e\u5165.\u80fd\u91cf\u53ef\u4ee5\u4ece\u52a8\u80fd\u53d1\u7535\u673a\u7684\u4efb\u610f\u9762\u8f93\u51fa,\u800c\u6bcf\u4e00\u9762\u7684\u6700\u9ad8\u8f93\u51fa\u5373\u52a8\u80fd\u53d1\u7535\u673a\u7684\u7535\u538b\u7b49\u7ea7.\u8b66<br/>\u544a:\u4e0d\u6b63\u786e\u5730\u7834\u574f\u52a8\u80fd\u53d1\u7535\u673a\u5c06\u65e0\u6cd5\u6389\u843d\u53d1\u7535\u673a.\u4f60\u9700\u8981\u4f7f\u7528GT\u6273\u624b,\u53f3\u952e\u5b83.\u5b83\u5c31\u4f1a\u7acb\u523b\u6389\u843d.\u8981\u662f\u5b83\u8f6c\u4e86\u4e2a<br/>\u65b9\u5411,\u90a3\u5c31\u518d\u8bd5\u4e00\u6b21.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEcQ=="
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a.png",
                    "x": 828.0,
                    "y": 444.0,
                    "tooltip": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "data": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u9700\u8981\u901a\u8fc7\u6c34\u5728\u6cb3\u6d41\u6216\u8005\u6d77\u6d0b\u4e2d\u7684\u6d41\u52a8\u6765\u4ea7\u751f\u52a8\u80fd. \u548c\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e00\u6837,\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e5f\u9700<br/>\u8981\u4f7f\u7528\u6728\u3001\u94c1\u3001\u94a2\u3001\u78b3\u5236\u8f6c\u5b50\u6216\u8005\u4f7f\u7528GT++\u7684\u6750\u6599.\u5982\u679c\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u7684\u8f6c\u5b50\u4e0d\u662f\u5b8c\u5168\u6d78\u6ca1\u5728\u6c34\u4e2d,\u5219\u673a\u5668<br/>\u4f1a\u63d0\u9192\u4f60\"\u8f6c\u5b50\u6ca1\u6709\u8db3\u591f\u7684\u7a7a\u95f4\".\u5982\u679c\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e0d\u662f\u653e\u7f6e\u5728\u6cb3\u6d41\u3001\u6d77\u6d0b\u6216\u6df1\u6d77\u751f\u7269\u7fa4\u7cfb,\u90a3\u4e48\u673a\u5668\u4f1a\u63d0\u9192<br/>\u4f60\"\u5fc5\u987b\u653e\u7f6e\u5728\u6cb3\u6d41\u548c\u6d77\u6d0b\u751f\u7269\u7fa4\u7cfb\".\u67e5\u770bDiscord\u4e0a\u7684\u6e38\u620f\u673a\u5236\u8868\u683c,\u4f60\u80fd\u627e\u5230\u751f\u7269\u7fa4\u7cfb\u53ca\u5176\u6807\u7b7e\u7684\u5217<br/>\u8868.\u867d\u7136\u4e0d\u592a\u65b9\u4fbf,\u4f46\u6c34\u529b\u53d1\u7535\u673a\u8fd0\u884c\u66f4\u52a0\u7a33\u5b9a.\u4f60\u53ef\u4ee5\u901a\u8fc7\u5deb\u672f\u6765\u8f6c\u6362\u751f\u7269\u7fa4\u7cfb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEcw=="
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a.png",
                    "x": 864.0,
                    "y": 480.0,
                    "tooltip": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "data": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u6839\u636e\u4e0d\u540c\u7684\u98ce\u529b,\u7535\u529b\u8f93\u51fa\u4e5f\u4f1a\u968f\u4e4b\u53d8\u5316,\u867d\u7136\u67d0\u4e9b\u56e0\u7d20\u53ef\u4ee5\u6539\u53d8\u8fd9\u4e00\u70b9.\u548c\u98ce\u8f66\u4e0d\u540c,\u4e3a\u4e86\u4fdd\u8bc1<br/>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u7684\u6b63\u5e38\u8fd0\u8f6c,\u4f60\u9700\u8981\u7ecf\u5e38\u7ef4\u62a4\u8f6c\u5b50.\u4e00\u65e6\u8f6c\u5b50\u653e\u7f6e\u5728GUI\u4e2d,\u4f60\u9700\u8981\u786e\u5b9a\u98ce\u673a\u7684\u7ed3\u6784\u62e5\u6709\u8db3\u591f\u7684<br/>\u7a7a\u95f4,\u5e76\u4e14\u5f53\u524d\u4f4d\u7f6e\u7684\u98ce\u529b\u6c34\u5e73\u8db3\u591f\u542f\u52a8\u5f53\u524d\u7684\u8f6c\u5b50.\u5982\u679c\u8fd9\u4e9b\u6761\u4ef6\u90fd\u6ee1\u8db3,\u90a3\u4e48\u98ce\u673a\u5c31\u4f1a\u5f00\u59cb\u4ea7\u751f\u52a8\u80fd.\u5c06\u52a8\u80fd<br/>\u53d1\u7535\u673a\u8d34\u5230\u98ce\u673a\u6b63\u786e\u7684\u9762(\u9ed1\u8272\u5706\u5708),\u52a8\u80fd\u53d1\u7535\u673a\u5c31\u4f1a\u5f00\u59cb\u5c06\u52a8\u80fd\u8f6c\u5316\u6210\u7535\u80fd.\u5173\u4e8e\u98ce:\u9996\u5148,\u67d0\u4e00\u4e2a\u5730\u533a\u7684\u98ce<br/>\u529b\u5f3a\u5ea6\u53d7\u52303\u4e2a\u56e0\u7d20\u7684\u5f71\u54cd:\u9ad8\u5ea6\u3001\u5929\u6c14\u548c\u968f\u673a\u6027.Y\u8f74\u8d8a\u9ad8,\u98ce\u529b\u5c31\u8d8a\u5f3a.\u5982\u679cY\u8f74\u4f4e\u4e8e64,\u90a3\u4e48\u4f60\u5c06\u6ca1\u6709\u8db3<br/>\u591f\u7684\u98ce\u80fd\u53ef\u4ee5\u5229\u7528,\u98ce\u673a\u4e5f\u4e0d\u4f1a\u542f\u52a8.\u5929\u6c14\u4e5f\u4f1a\u4e0d\u540c\u7a0b\u5ea6\u7684\u589e\u5f3a\u98ce\u529b\uff1b\u96e8\u5929\u5c06\u4f1a\u5c06\u4f1a\u6bd4\u6b63\u5e38\u63d0\u9ad820\uff05\u7684\u98ce\u529b,\u96f7<br/>\u96e8\u5929\u5c06\u4f1a\u63d0\u9ad8\u523050\uff05.\u6700\u540e\u968f\u673a\u6027\u5c06\u4f1a\u4f7f\u98ce\u529b\u5f3a\u5ea6\u8fdb\u884c\u4e0d\u89c4\u5f8b\u7684\u968f\u673a\u53d8\u5316,\u4f46\u662f\u8fd9\u4e2a\u968f\u673a\u53d8\u5316\u5c06\u4f1a\u9650\u5236\u5728\u4e00\u4e2a\u6bd4<br/>\u8f83\u6709\u9650\u7684\u8303\u56f4\u5185.\u68c0\u67e5\u4e00\u4e2a\u4f4d\u7f6e\u7684\u98ce\u529b\u6c34\u5e73\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5c31\u662f\u7528\u98ce\u529b\u8ba1.Y\u8f74\u5728160\u7684\u9ad8\u5ea6\u6700\u5f3a,\u800c\u5efa\u9020\u7684\u6700\u9ad8<br/>\u9650\u5236Y=255\u98ce\u529b\u5219\u5c0f\u7684\u53ef\u601c. \u56e0\u6b64\u5c06\u98ce\u673a\u5efa\u8bbe\u5728\u7279\u522b\u9ad8\u7684\u533a\u57df\u662f\u6ca1\u6709\u610f\u4e49\u7684.\u867d\u7136\u5b89\u88c5\u8d77\u6765\u4e0d\u592a\u65b9\u4fbf,\u4f46\u98ce<br/>\u529b\u53d1\u7535\u673a\u4e0d\u8981\u6c42\u751f\u7269\u7fa4\u7cfb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEcg=="
                },
                {
                    "name": "LV\u529b\u573a\u53d1\u751f\u5668",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u529b\u573a\u53d1\u751f\u5668(LV).png",
                    "x": 480.0,
                    "y": 288.0,
                    "tooltip": "LV\u529b\u573a\u53d1\u751f\u5668",
                    "data": "\u529b\u573a\u53d1\u751f\u5668\u662f\u4e00\u79cd\u5f3a\u5927\u7684\u8bbe\u5907.\u5b83\u901a\u5e38\u7528\u4e8e\u5408\u6210\u8d85\u7ea7\u7f38\u3001\u8d85\u7ea7\u7bb1\u3001\u8d28\u91cf\u53d1\u751f\u5668\u3001\u590d\u5236\u673a\u6216\u4f20\u9001\u673a. \u4ee5\u53ca,\u67d0\u4e9b\u4eba<br/>\u559c\u6b22\u7528\u5b83\u6765\u63d0\u5347\u4e00\u4e9b\u7269\u54c1\u7684\u9020\u4ef7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHTw=="
                },
                {
                    "name": "LV\u7ea7\u5fae\u578b\u5904\u7406\u5668",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5fae\u578b\u5904\u7406\u5668.png",
                    "x": 324.0,
                    "y": 192.0,
                    "tooltip": "LV\u7ea7\u5fae\u578b\u5904\u7406\u5668",
                    "data": "\u5fae\u578b\u5904\u7406\u5668\u662f\u5236\u9020LV\u7535\u8def\u6700\u9ad8\u7b49\u7ea7\u7684\u65b9\u6cd5,\u6b64\u5408\u6210\u6bcf\u6b21\u8fd0\u884c\u53ef\u4ee5\u4ea7\u51fa2\u4e2a.\u9664\u4e86\u5217\u51fa\u7684\u4e1c\u897f\u4ee5\u5916,\u4f60\u8fd8\u9700\u89812\u7535<br/>\u963b\u3001\u6676\u4f53\u7ba1\u548c\u7535\u5bb9,\u8d34\u7247\u6216\u975e\u8d34\u7247\u90fd\u53ef\u4ee5.\u8fd9\u79cd\u5148\u8fdb\u7684\u7535\u8def\u677f\u9700\u8981\u8d85\u51c0\u95f4\u73af\u5883.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE0w=="
                },
                {
                    "name": "\u79c1\u4eba\u78c1\u94c1",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7535\u78c1\u94c1.png",
                    "x": 732.0,
                    "y": 180.0,
                    "tooltip": "\u79c1\u4eba\u78c1\u94c1",
                    "data": "\u5982\u679c\u4f60\u6ca1\u6709\u4ece\u6218\u5229\u54c1\u888b\u91cc\u5f00\u5230\u8fc7\u7535\u78c1\u94c1,\u90a3\u5c31\u7528\u5145\u80fd\u6676\u4f53\u505a\u4e00\u4e2a\u5427.  \u5728\u670d\u52a1\u5668\u4e2d,\u5982\u679c\u4f60\u79fb\u52a8\u592a\u5feb\u65f6,\u5b83\u4e0d\u80fd<br/>\u5f88\u597d\u5730\u5de5\u4f5c,\u4f46\u5b83\u80fd\u4f7f\u6536\u83b7\u4f5c\u7269\u53d8\u5f97\u7b80\u5355.\u8bd1\u8005\u6ce8:\u8bd5\u8bd5\u9f99\u7814\u7684\u78c1\u94c1\u5427,\u73b0\u5728\u5b83\u7684\u9020\u4ef7\u5927\u5e45\u5ea6\u4e0b\u8c03\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHQg=="
                },
                {
                    "name": "\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u5904\u7406\u5668\u4e3b\u673a.png",
                    "x": 84.0,
                    "y": 396.0,
                    "tooltip": "\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f",
                    "data": "\u5904\u7406\u5668\u4e3b\u673a\u662f\u4f60\u53ef\u4ee5\u5236\u9020\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f.\u5b83\u53ef\u4ee5\u7528\u4e8e\u5408\u6210\u90e8\u5206EV\u673a\u5668,\u4ee5\u53ca\u6240\u6709\u57fa\u7840IV\u673a\u5668\u53ca\u90e8\u4ef6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEyQ=="
                },
                {
                    "name": "HV\u7ea7\u6405\u62cc",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8fdb\u9636\u6405\u62cc\u673a II.png",
                    "x": 516.0,
                    "y": 48.0,
                    "tooltip": "HV\u7ea7\u6405\u62cc",
                    "data": "\u6405\u62cc\u66f4\u9ad8\u7ea7\u7684\u7c89\u672b\u9700\u8981\u66f4\u9ad8\u7ea7\u7684\u6405\u62cc\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADKA=="
                },
                {
                    "name": "\u00a79\u00a7lNaK",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/60k\u94a0\u94be\u51b7\u5374\u5355\u5143.png",
                    "x": 648.0,
                    "y": 324.0,
                    "tooltip": "\u00a79\u00a7lNaK",
                    "data": "Let's make some NaK coolant!",
                    "quest_id": "wLYoO7hsT_SOuJGzbgDMhg=="
                },
                {
                    "name": "\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u538b\u7f29\u7bb1\u5b50.png",
                    "x": 588.0,
                    "y": 240.0,
                    "tooltip": "\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f",
                    "data": "\u6765\u81ea\u65e0\u5c3d\u8d2a\u5a6a(Avaritia)\u7684\u538b\u7f29\u7bb1\u5b50\u600e\u4e48\u6837\uff1f\u8fd9\u4e2a\u7bb1\u5b50\u53ef\u4ee5\u5b58\u653e243\u683c\u7684\u7269\u54c1,\u5e76\u4e14\u5728\u88ab\u7834\u574f\u540e\u4f1a\u4fdd<br/>\u7559\u5176\u4e2d\u7684\u7269\u54c1,\u518d\u4e5f\u4e0d\u7528\u6162\u817e\u817e\u7684\u624b\u63a8\u8f66\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF7Q=="
                },
                {
                    "name": "\u785d\u9178",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u785d\u9178\u5355\u5143.png",
                    "x": 456.0,
                    "y": 552.0,
                    "tooltip": "\u785d\u9178",
                    "data": "\u785d\u9178\u53ef\u4ee5\u7531\u6c34\u3001\u6c27\u6c14\u548c\u4e8c\u6c27\u5316\u6c2e\u5236\u6210.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADUw=="
                },
                {
                    "name": "\u4e00\u6c27\u5316\u6c2e",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e00\u6c27\u5316\u6c2e\u5355\u5143.png",
                    "x": 456.0,
                    "y": 468.0,
                    "tooltip": "\u4e00\u6c27\u5316\u6c2e",
                    "data": "\u8981\u5236\u9020\u4e00\u6c27\u5316\u6c2e\u4f60\u9700\u8981\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u7ed3\u5408\u6c27\u548c\u6c28.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADVw=="
                },
                {
                    "name": "\u785d\u57fa!(\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9\u5355\u5143.png",
                    "x": 492.0,
                    "y": 516.0,
                    "tooltip": "\u785d\u57fa!(\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9)",
                    "data": "\u6bcf\u5355\u51431M-EU,\u6bd4\u67f4\u6cb9\u66f4\u52a0\u9ad8\u80fd.\u662f\u7684,\u662f\u7684,\u8fd9\u592a\u68d2\u4e86! \u5236\u9020\u4e00\u4e9b\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9,\u8ba9\u4f60\u7684\u5185\u71c3\u53d1\u7535\u673a\u8ff8<br/>\u53d1\u66f4\u5f3a\u5927\u7684\u52a8\u529b\u5427.\u53e6\u5916,\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9\u662f\u53e6\u4e00\u6761\u8def,\u6240\u4ee5\u5f53\u4f60\u5728EV\u9636\u6bb5\u60f3\u8981\u8f6c\u7528\u5b83\u65f6,\u4f60\u9700\u8981\u91cd\u65b0\u642d\u5efa\u6574\u6761\u751f<br/>\u4ea7\u7ebf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACLQ=="
                },
                {
                    "name": "\u4e8c\u6c27\u5316\u6c2e",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e8c\u6c27\u5316\u6c2e\u5355\u5143.png",
                    "x": 456.0,
                    "y": 516.0,
                    "tooltip": "\u4e8c\u6c27\u5316\u6c2e",
                    "data": "\u4e8c\u6c27\u5316\u6c2e\u9700\u8981\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u7ed3\u5408\u6c27\u6c14\u548c\u4e00\u6c27\u5316\u6c2e.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADVQ=="
                },
                {
                    "name": "NOR\u82af\u7247\u548cNAND\u82af\u7247",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/NAND\u5b58\u50a8\u5668\u82af\u7247.png",
                    "x": 180.0,
                    "y": 276.0,
                    "tooltip": "NOR\u82af\u7247\u548cNAND\u82af\u7247",
                    "data": "NAND\u82af\u7247\u53ef\u7528\u4e8e\u5236\u9020\u95ea\u5b58\u3001\u6570\u636e\u7403\u548cUV\u7535\u8def\u677f.NOR\u82af\u7247\u53ef\u7528\u4e8e\u5236\u9020\u6570\u636e\u7403\u548cLuV\u7535\u8def\u677f.\u5207\u5272NAN<br/>D\u6216NOR\u6676\u5706\u5373\u53ef\u83b7\u5f97\u76f8\u5e94\u7684\u82af\u7247. \u867d\u7136\u76ee\u524d\u4f60\u53ef\u80fd\u53ea\u7528\u5f97\u4e0a\u95ea\u5b58.\u8981\u6c42\u8d85\u51c0\u95f4\u73af\u5883.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE1w=="
                },
                {
                    "name": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8fdb\u9636\u5316\u5b66\u53cd\u5e94\u91dc II.png",
                    "x": 372.0,
                    "y": 420.0,
                    "tooltip": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c",
                    "data": "\u66f4\u9ad8\u7ea7\u522b\u7684\u5316\u5b66\u53cd\u5e94\u9700\u8981\u66f4\u9ad8\u7ea7\u522b\u7684\u7535\u538b,\u6bd4\u5982\u8bf4\u6c2e\u6c14\u548c\u6c22\u6c14\u53cd\u5e94\u4e3a\u6c28\u6c14\u7684\u5c31\u9700\u8981\u5728\u9ad8\u538b\u7684\u5316\u5b66\u53cd\u5e94\u91dc\u91cc\u9762\u8fdb\u884c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADrw=="
                },
                {
                    "name": "\u57f9\u517b\u76bf,\u8fd9\u53ef\u4e0d\u662f\u5403\u7684",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u57f9\u517b\u76bf.png",
                    "x": 48.0,
                    "y": 576.0,
                    "tooltip": "\u57f9\u517b\u76bf,\u8fd9\u53ef\u4e0d\u662f\u5403\u7684",
                    "data": "\u4f60\u9700\u8981\u57f9\u517b\u76bf\u6765\u57f9\u517b\u7ec6\u83cc. \u53ef\u4ee5\u7528\u787c\u73bb\u7483\u3001\u805a\u82ef\u4e59\u70ef\u3001\u805a\u56db\u6c1f\u4e59\u70ef\u5236\u4f5c\u57f9\u517b\u76bf.\u7136\u540e\u5fc5\u987b\u5bf9\u57f9\u517b\u76bf\u8fdb\u884c\u706d\u83cc\u5904\u7406<br/>,\u4ee5\u4f7f\u65b0\u7684\u57f9\u517b\u7269\u53ef\u4ee5\u5728\u5176\u4e0a\u751f\u957f. \u4f60\u53ef\u4ee5\u4f7f\u7528\u4e59\u9187\u3001\u7532\u9187\u3001\u6c28\u6c14\u6216\u6c2f\u6c14\u8fdb\u884c\u706d\u83cc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKBw=="
                },
                {
                    "name": "\u78f7\u63ba\u6742\u7684\u5355\u6676\u7845",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u78f7\u63ba\u6742\u7684\u5355\u6676\u7845.png",
                    "x": 264.0,
                    "y": 276.0,
                    "tooltip": "\u78f7\u63ba\u6742\u7684\u5355\u6676\u7845",
                    "data": "\u4f20\u7edf\u7684\u5355\u6676\u7845\u5236\u9020\u65b9\u6cd5\u76f8\u5f53\u6602\u8d35. \u56e0\u6b64\u6211\u4eec\u7814\u53d1\u4e86\u4e00\u79cd\u65b0\u7684\u5355\u6676\u7845\u5236\u9020\u65b9\u6cd5,\u5de5\u4e1a\u9ad8\u7089\u901a\u5165\u6c2e\u6c14\u5728\u4e0d\u4f4e\u4e8e248<br/>4K\u7684\u7089\u6e29\u4e0b\u7145\u70e7\u7845\u548c\u78f7\u7684\u6df7\u5408\u7c89\u672b,\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u5f97\u5230\u63ba\u6742\u4e86\u78f7\u7684\u5355\u6676\u7845.\u4e0d\u5e78\u7684\u662f,\u8fd9\u4e9b\u5355\u6676\u7845\u9700\u8981\u7684\u7089\u6e29\u8d85<br/>\u8fc7\u4e86\u767d\u94dc\u7ebf\u5708\u53ef\u4ee5\u63d0\u4f9b\u7684\u7089\u6e29.\u4f60\u9700\u8981\u5230\"\u591a\u65b9\u5757\u7ed3\u6784\"\u4efb\u52a1\u680f,\u4f9d\u6b21\u83b7\u5f97\u8d85\u51c0\u95f4\u3001\u771f\u7a7a\u51b7\u51bb\u673a\u548c\u574e\u5854\u5c14\u7ebf\u5708,\u7136<br/>\u540e\u4f60\u624d\u80fd\u70e7\u5236\u5355\u6676\u7845.\u8bd1\u8005\u6ce8:\u5e78\u8fd0\u7684\u662f,\u9ad8\u7089\u4f1a\u968f\u7535\u538b,\u5728\u57fa\u7840\u7089\u6e29\u7684\u57fa\u7840\u4e0a\u8c03\u6574\u5b9e\u9645\u7089\u6e29. \u8be6\u60c5\u8bf7\u53c2\u8003\"\u5de5<br/>\u4e1a\u9ad8\u7089\u65f6\u4ee3\"\u4efb\u52a1.\u66f4\u9ad8\u7ea7\u7684\u5355\u6676\u7845\u53ef\u4ee5\u5207\u51fa\u66f4\u591a\u7684\u6676\u5706,\u5236\u6210\u66f4\u591a\u7684\u82af\u7247.\u4f46\u67d0\u4e9b\u65f6\u5019\u4e00\u4e9b\u4f4e\u9636\u5355\u6676\u7845\u4e5f\u662f\u5c11\u4e0d<br/>\u4e86\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE1Q=="
                },
                {
                    "name": "\u78f7\u63ba\u6742\u7684\u6676\u5706",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u78f7\u63ba\u6742\u7684\u6676\u5706.png",
                    "x": 264.0,
                    "y": 204.0,
                    "tooltip": "\u78f7\u63ba\u6742\u7684\u6676\u5706",
                    "data": "\u60f3\u8981\u5c06\u78f7\u63ba\u6742\u7684\u5355\u6676\u7845\u5207\u5272\u6210\u6676\u5706,\u9700\u8981MV\u4ee5\u4e0a\u7684\u5207\u5272\u673a,\u5e76\u4e14\u9700\u8981\u4fdd\u8bc1\u5207\u5272\u73af\u5883\u6d01\u51c0\u65e0\u5c18. \u672a\u6765\u6280\u672f\u66f4\u52a0\u5148<br/>\u8fdb\u7684\u5355\u6676\u7845\u4f1a\u7528\u5230HV\u4ee5\u4e0a\u7684\u5207\u5272\u673a!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE1g=="
                },
                {
                    "name": "\u73a9\u6ce5\u5df4",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u9ad8\u538b\u91dc II.png",
                    "x": 600.0,
                    "y": 288.0,
                    "tooltip": "\u73a9\u6ce5\u5df4",
                    "data": "\u8fd9\u53f0\u673a\u5668\u4f7f\u4f60\u53ef\u4ee5\u5c06\u7c89\u672b\u5236\u4f5c\u6210\u6c34\u6676,\u5728\u9ad8\u9636\u914d\u65b9\u4e2d\u4f60\u5c06\u9700\u8981\u6c34\u6676.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADAQ=="
                },
                {
                    "name": "\u805a\u4e8c\u7532\u57fa\u7845\u6c27\u70f7\u7c89",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u805a\u4e8c\u7532\u57fa\u7845\u6c27\u70f7\u672b.png",
                    "x": 324.0,
                    "y": 576.0,
                    "tooltip": "\u805a\u4e8c\u7532\u57fa\u7845\u6c27\u70f7\u7c89",
                    "data": "\u5c06\u4e8c\u7532\u57fa\u6c2f\u7845\u70f7\u548c\u6c34\u52a0\u5165\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d,\u5f97\u5230\u805a\u4e8c\u7532\u57fa\u7845\u6c27\u70f7\u7c89.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGfw=="
                },
                {
                    "name": "\u805a\u82ef\u4e59\u70ef",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u805a\u82ef\u4e59\u70ef\u7247.png",
                    "x": 96.0,
                    "y": 516.0,
                    "tooltip": "\u805a\u82ef\u4e59\u70ef",
                    "data": "\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u4f7f\u6c27\u6c14\u548c\u82ef\u4e59\u70ef\u53cd\u5e94,\u53ef\u4ee5\u5236\u5f97\u805a\u82ef\u4e59\u70ef. \u518d\u914d\u5408\u6d41\u4f53\u56fa\u5316\u673a\u548c\u677f\u6a21\u5177,\u5373\u53ef\u83b7\u5f97\u805a\u82ef\u4e59\u70ef\u7247.<br/>\u53ea\u6709\u4e00\u79cd\u673a\u5668\u9700\u8981\u7528\u5230\u5b83,\u6240\u4ee5\u5728\u771f\u6b63\u7528\u5230\u4e4b\u524d\u4e0d\u7528\u51c6\u5907\u592a\u591a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKBQ=="
                },
                {
                    "name": "\u805a\u56db\u6c1f\u4e59\u70ef2",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u805a\u56db\u6c1f\u4e59\u70ef\u7247.png",
                    "x": 180.0,
                    "y": 576.0,
                    "tooltip": "\u805a\u56db\u6c1f\u4e59\u70ef2",
                    "data": "\u7194\u878d\u5851\u6599\u7684\u5473\u9053\u95fb\u8d77\u6765\u5f88\u68d2,\u4e0d\u662f\u4e48?\u5c06\u6c22\u6c1f\u9178\u4e0e\u6c2f\u4eff\u53cd\u5e94,\u5236\u5907\u51fa\u56db\u6c1f\u4e59\u70ef.\u518d\u5c06\u5176\u4e0e\u6c27\u53cd\u5e94,\u5236\u5907\u51fa\u805a\u56db\u6c1f\u4e59<br/>\u70ef.\u6700\u540e,\u7528\u6d41\u4f53\u56fa\u5316\u5668\u5236\u4f5c\u51fa\u805a\u56db\u6c1f\u4e59\u70ef\u7247.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHFg=="
                },
                {
                    "name": "\u7cbe\u786e\u5ea6\u662f\u5fc5\u8981\u7684",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8fdb\u9636\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a II.png",
                    "x": 180.0,
                    "y": 420.0,
                    "tooltip": "\u7cbe\u786e\u5ea6\u662f\u5fc5\u8981\u7684",
                    "data": "\u5236\u4f5c\u9ad8\u9636\u7684\u7535\u8def\u4ee5\u53ca\u5176\u5b83\u914d\u65b9\u65f6\u4f60\u5c06\u4f1a\u5e38\u4f7f\u7528\u5230\u8fd9\u53f0\u673a\u5668.\u4f60\u5f88\u5feb\u4f1a\u53d1\u73b0,\u6240\u6709\u7684\u6fc0\u5149\u8680\u523b\u914d\u65b9\u90fd\u9700\u8981\u8d85\u51c0\u95f4\u73af\u5883<br/>,\u6240\u4ee5\u8bf7\u5148\u9020\u4e2a\u8d85\u51c0\u95f4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADBA=="
                },
                {
                    "name": "\u5904\u7406\u5668\u96c6\u7fa4",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u5904\u7406\u5668\u96c6\u7fa4.png",
                    "x": 180.0,
                    "y": 132.0,
                    "tooltip": "\u5904\u7406\u5668\u96c6\u7fa4",
                    "data": "\u5904\u7406\u5668\u7cfb\u5217\u7535\u8def\u677f\u7684\u7b2c\u4e8c\u6b65,HV\u7b49\u7ea7. \u4f60\u9700\u8981\u7528\u4e24\u4e2a\u96c6\u6210\u5904\u7406\u5668\u8fdb\u884c\u5957\u5a03. \u5e76\u4e14\u4f9d\u7136\u9700\u8981\u5728\u8d85\u51c0\u95f4\u8fdb\u884c\u7ec4\u88c5<br/>.",
                    "quest_id": "Q=="
                },
                {
                    "name": "\u751f\u4e01\u82ef\u6a61\u80f6",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u751f\u4e01\u82ef\u6a61\u80f6\u7c89.png",
                    "x": 36.0,
                    "y": 468.0,
                    "tooltip": "\u751f\u4e01\u82ef\u6a61\u80f6",
                    "data": "\u5012\u6570\u7b2c\u4e8c\u6b65\u662f\u5236\u53d6\u751f\u4e01\u82ef\u6a61\u80f6.\u6df7\u5408\u4f60\u7684\u4e01\u4e8c\u70ef,\u82ef\u4e59\u70ef\u548c\u6c27\u6c14(\u4e5f\u53ef\u4f7f\u7528\u7a7a\u6c14,\u4ea7\u91cf\u5c11\u4e9b)\u5236\u4f5c\u751f\u4e01\u82ef\u6a61\u80f6\u7c89\u672b<br/>.\u9700\u8981HV\u5316\u5b66\u53cd\u5e94\u91dc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGVg=="
                },
                {
                    "name": "\u4e3a\u4e86\u73af\u5883\u5faa\u73af\u5229\u7528",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u56de\u6536\u673a II.png",
                    "x": 72.0,
                    "y": 168.0,
                    "tooltip": "\u4e3a\u4e86\u73af\u5883\u5faa\u73af\u5229\u7528",
                    "data": "\u5982\u679c\u4f60\u6709\u5806\u79ef\u5982\u5c71\u7684\u539f\u6728\u3001\u6811\u82d7\u3001\u5730\u72f1\u5ca9\u6216\u522b\u7684\u5783\u573e,\u5c06\u5b83\u4eec\u56de\u6536\u7136\u540e\u83b7\u5f97\u5e9f\u6599\u5427.(\u5e9f\u6599\u7684\u4ea7\u51fa\u51e0\u7387\u5e76\u975e100<br/>\uff05).\u5e9f\u6599\u53ef\u7528\u4e8e\u751f\u4ea7UU\u7269\u8d28\u589e\u5e45\u6db2(UU-A),\u53ef\u4ee5\u4f7f\u751f\u4ea7UU\u7269\u8d28\u7684\u8017\u65f6\u7f29\u77ed\u4e3a1/4,\u4ece\u800c\u8282\u7701\u5927\u91cf\u80fd<br/>\u91cf.\u67d0\u4e9b\u7269\u54c1,\u4f8b\u5982\u5706\u77f3\u3001\u77f3\u5934\u3001\u5c0f\u5806\u6216\u8005\u5c0f\u64ae\u7c89\u8fd9\u7c7b\u592a\u5bb9\u6613\u83b7\u53d6\u7684\u7269\u54c1\u4e0d\u4f1a\u4ea7\u751f\u5e9f\u6599.\u4f46\u662f\u53ea\u8981\u4f60\u80fd\u6254\u8fdb\u53bb\u7684\u4efb<br/>\u4f55\u7c89\u672b\u6216\u5783\u573e\u90fd\u80fd\u8ba9\u4f60\u83b7\u5f97\u5e9f\u6599.\u8bd1\u8005\u6ce8:\u8d34\u5728\u56de\u6536\u673a\u4e0a\u7684\u4f20\u9001\u5e26\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5206\u8fa8\u54ea\u4e9b\u7269\u54c1\u65e0\u6cd5\u4ea7\u751f\u5e9f\u6599\u2014\u2014\u4e0d\u4f1a<br/>\u4ea7\u751f\u5e9f\u6599\u7684\u7269\u54c1\u4e0d\u4f1a\u88ab\u81ea\u52a8\u8f93\u5165\u673a\u5668.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHcg=="
                },
                {
                    "name": "RF\u592a\u9633\u80fd\u677f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5149\u4f0f\u677f.png",
                    "x": 732.0,
                    "y": 84.0,
                    "tooltip": "RF\u592a\u9633\u80fd\u677f",
                    "data": "\u4f7f\u7528\u5149\u4f0f\u677f\u53ef\u4ee5\u7ed9\u4f7f\u7528RF\u80fd\u6e90\u7684\u673a\u5668\u63d0\u4f9b\u80fd\u91cf.\u5149\u4f0f\u677f\u7684\u8f93\u51fa\u529f\u7387\u4e3a10RF/t.\u975e\u5e38\u9002\u5408\u4e3a\u4f4e\u529f\u8017RF\u673a\u5668<br/>\u4f9b\u80fd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD6A=="
                },
                {
                    "name": "\u9ad8\u7ea7RF\u592a\u9633\u80fd\u677f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u9ad8\u7ea7\u5149\u4f0f\u677f.png",
                    "x": 732.0,
                    "y": 36.0,
                    "tooltip": "\u9ad8\u7ea7RF\u592a\u9633\u80fd\u677f",
                    "data": "\u5347\u7ea7\u540e\u7684\u9ad8\u7ea7\u5149\u4f0f\u677f\u8981\u6bd4\u539f\u6765\u7684\u5149\u4f0f\u677f\u8f93\u51fa\u9ad8\u5f88\u591a. \u9ad8\u7ea7\u5149\u4f0f\u677f\u80fd\u8fbe\u523040RF/t\u7684\u8f93\u51fa\u529f\u7387.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD6Q=="
                },
                {
                    "name": "\u5ca9\u77f3\u5207\u5272\u673aLV",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5ca9\u77f3\u5207\u5272\u673aLV.png",
                    "x": 864.0,
                    "y": 552.0,
                    "tooltip": "\u5ca9\u77f3\u5207\u5272\u673aLV",
                    "data": "\u5ca9\u77f3\u5207\u5272\u673a\u662f\u4e00\u79cd\u81ea\u5e26\u4e0d\u6bc1\u548c\u7cbe\u51c6\u91c7\u96c6\u7684\u6316\u6398\u8bbe\u5907.\u5b83\u4f7f\u4f60\u80fd\u591f\u5b8c\u597d\u65e0\u635f\u5730\u6316\u6398\u5b83\u4eec,\u6bd4\u5982\u73bb\u7483\u6216\u662f\u77f3\u5934,\u5f53\u7136,<br/>\u4f60\u5f97\u5148\u7ed9\u5b83\u5145\u7535.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHIA=="
                },
                {
                    "name": "\u8f6c\u5b50",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u94f1\u8f6c\u5b50.png",
                    "x": 864.0,
                    "y": 444.0,
                    "tooltip": "\u8f6c\u5b50",
                    "data": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u6216\u548c\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u90fd\u9700\u8981\u8f6c\u5b50\u6765\u8fd0\u4f5c. \u53ef\u901a\u8fc7\u6807\u51c6\u81ea\u52a8\u5316\u6dfb\u52a0\u6216\u662f\u79fb\u9664\u8f6c\u5b50. \u8d8a\u9ad8\u7ea7\u7684\u8f6c\u5b50<br/>\u4f7f\u7528\u65f6\u95f4\u5c31\u8d8a\u957f.\u6b64\u5916,\u7528\u94f1\u5236\u9020\u7684\u8f6c\u5b50\u4e0d\u4f1a\u78e8\u635f.\u800cIC2\u7684\u94f1\u8f6c\u5b50\u6709\u53ef\u80fd\u56e0\u4e3a\u8010\u4e45\u635f\u5931\u51fa\u73b0bug. \u5145\u80fd\u5408<br/>\u91d1\u8f6c\u5b50\u5728\u5f53\u524d\u53ef\u80fd\u662f\u6700\u4f18\u9009\u62e9,\u4ee5\u4e3a\u5b83\u6070\u597d\u53ef\u4ee5\u63d0\u4f9b\u6ee11A\u8f93\u51fa,\u800c\u76ee\u524d\u591a\u4f59\u8f93\u51fa\u4f1a\u88ab\u6d6a\u8d39.\u53ea\u9700\u5236\u9020\u4e00\u4e2a\u8f6c\u5b50\u5373<br/>\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEdA=="
                },
                {
                    "name": "\u91d1\u7ea2\u77f3",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u91d1\u7ea2\u77f3\u7c89.png",
                    "x": 768.0,
                    "y": 468.0,
                    "tooltip": "\u91d1\u7ea2\u77f3",
                    "data": "\u4f60\u5df2\u7ecf\u4ece\u526f\u4ea7\u7269\u4e2d\u83b7\u5f97\u4e86\u4e00\u4e9b\u91d1\u7ea2\u77f3\u4e86\u5bf9\u5427? \u6216\u8005\u76f4\u63a5'\u5de5\u4e1a\u9ad8\u7089'\u4e86\u4e00\u4e9b\u949b\u94c1?\u91d1\u7ea2\u77f3\u3001\u6c2f\u548c\u78b3\u5236\u6210\u56db\u6c2f\u5316\u949b<br/>,\u4ee5\u53ca\u4e00\u4e9b\u4e00\u6c27\u5316\u78b3.\u4f60\u53ef\u4ee5\u56de\u6536\u4e00\u6c27\u5316\u78b3\u8865\u5145\u4e00\u5b9a\u7684\u78b3,\u6216\u8005\u76f4\u63a5\u9500\u6bc1\u5b83\u4eec.\u4f7f\u7528HV\u9ad8\u7089\u5c06\u56db\u6c2f\u5316\u949b\u4e0e\u9541\u7ed3\u5408<br/>\u7145\u70e7,\u4f60\u5c31\u80fd\u83b7\u5f97\u70ed\u949b\u952d,\u4ee5\u53ca\u6c2f\u5316\u9541. \u540c\u6837,\u4f60\u53ef\u4ee5\u7528\u94a0\u5c06\u8fd9\u4e9b\u6c2f\u5316\u9541\u5904\u7406\u540e,\u56de\u6536\u6240\u6709\u7684\u9541\u548c\u6c2f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD9A=="
                },
                {
                    "name": "\u5c06\u80fd\u91cf\u9001\u56de",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/HV\u53d8\u538b\u5668.png",
                    "x": 900.0,
                    "y": 444.0,
                    "tooltip": "\u5c06\u80fd\u91cf\u9001\u56de",
                    "data": "\u52a8\u80fd\u53d1\u7535\u673a\u7684\u517c\u5bb9\u6027\u5f97\u5230\u4e86\u63d0\u5347,\u73b0\u5728\u65e0\u9700\u53d8\u538b\u5668\u5373\u53ef\u6b63\u5e38\u901a\u8fc7\u7ebf\u7f06\u8f93\u51fa\u80fd\u91cf.\u4f46\u5728\u8f93\u7535\u7684\u65f6\u5019,\u4f7f\u7528\u53d8\u538b\u5668\u5347\u538b<br/>\u4ecd\u7136\u4e0d\u5931\u4e3a\u4e00\u79cd\u6781\u4f73\u7684\u964d\u4f4e\u635f\u8017\u65b9\u5f0f.\u4e3e\u4e2a\u4f8b\u5b50,\u4ece160\u683c\u7684\u53d1\u7535\u673a\u4f20\u8f93\u523063\u683c\u5730\u8868,1\u7ebf\u635f\u7684\u7ebf\u7f06,\u6bcfA\u7535<br/>\u6d41\u4f1a\u635f\u593197EU,\u5982\u679c\u662fHV\u8f93\u7535,\u5c31\u4f1a\u662f97/512,\u5c06\u8fd1\u4e94\u5206\u4e4b\u4e00\u7684\u635f\u5931;\u800c\u5982\u679c\u662fEV\u8f93\u7535,\u90a3\u4e48\u5c31\u662f<br/>97/2048,\u4e0d\u52301/20\u7684\u635f\u5931,\u8fd9\u4e0d\u5c31\u662f\u597d\u591a\u4e86\u561b.(\u5347\u538b\u524d\u9700\u8981\u901a\u8fc7\u4e00\u6bb5\u7ebf\u7f06,\u5c06\u53d1\u7535\u673a\u8f93\u51fa\u7684IC-<br/>EU\u8f6c\u5316\u4e3aGT-EU)IC2\u673a\u5668\u4e0d\u6015\u88ab\u96e8\u6dcb,\u4f46\u522b\u5fd8\u4e86\u906e\u76d6\u53d8\u538b\u5668.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEeQ=="
                },
                {
                    "name": "\u5c06\u5b9d\u77f3\u4e0e\u7c89\u672b\u5206\u5f00",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u7b5b\u9009\u673a II.png",
                    "x": 516.0,
                    "y": 420.0,
                    "tooltip": "\u5c06\u5b9d\u77f3\u4e0e\u7c89\u672b\u5206\u5f00",
                    "data": "\u4f4e\u538b\u7b5b\u9009\u673a\u592a\u592a\u592a\u6162\u4e86,\u4f60\u5e94\u8be5\u5236\u4f5c\u4e00\u4e2aHV\u7b5b\u9009\u673a\u4ee5\u66f4\u5feb\u5730\u83b7\u5f97\u5b9d\u77f3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF8Q=="
                },
                {
                    "name": "\u5206\u5b50\u5206\u79bb\u5668",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6da1\u8f6e\u79bb\u5fc3\u673a.png",
                    "x": 540.0,
                    "y": 192.0,
                    "tooltip": "\u5206\u5b50\u5206\u79bb\u5668",
                    "data": "\u4f60\u77e5\u9053\u5417,\u66fe\u7ecf\u4f60\u53ef\u4ee5\u4ece\u5ca9\u6d46\u4e2d\u83b7\u5f97\u94a8\u9178\u9502\u3001\u94f6\u3001\u94bd\u548c\u94dc... \u7136\u800c\u73b0\u5728,\u7531\u4e8e\u524a\u5f31(Nerf),\u90a3\u4e2a\u65f6\u4ee3\u5df2<br/>\u7ecf\u8fc7\u53bb\u4e86. Nerf(\u8ba9\u6e38\u620f\u66f4\u96be)\u662fGTNH\u7684\u751f\u6d3b\u65b9\u5f0f. \u751a\u81f3\u70bc\u72f1\u4e4b\u58f6(\u767d\u5ad6\u5ca9\u6d46\u7684\u65b9\u6cd5\u4e4b\u4e00),\u4ee5\u524d\u7684<br/>\u5408\u6210\u8868\u662f\u65e0\u9700\u7ebf\u5708\u7684...\u4e5f\u4e0d\u7b97\u592a\u7cdf\u7cd5,\u4f60\u4ecd\u7136\u53ef\u4ee5\u4ece\u5ca9\u6d46\u4e2d\u767d\u5ad6\u4e0d\u5c11\u4e1c\u897f,\u53ea\u662f\u6ca1\u90a3\u4e48\u597d\u4e86\u800c\u5df2: \u4e8c\u6c27\u5316\u7845<br/>\u3001\u82e6\u571f\u3001\u751f\u77f3\u7070\u3001\u91d1\u7c92\u3001\u84dd\u5b9d\u77f3\u7c89\u8fd8\u6709\u94bd\u94c1.\u7194\u5ca9\u5ca9\u6d46(\u5c06\u666e\u901a\u5ca9\u6d46\u901a\u8fc7\u5927\u578b\u70ed\u4ea4\u6362\u673a\u83b7\u5f97): \u94dc\u3001\u9521\u3001\u94f6\u3001\u78f7<br/>\u9178\u9499\u3001\u767d\u94a8\u548c\u94dd\u571f.\u6240\u4ee5\u8fd9\u91cc\u6709\u4e00\u4e2aHV\u79bb\u5fc3\u673a\u7684\u4efb\u52a1,\u5bf9\u666e\u901a\u5ca9\u6d46\u8db3\u591f\u597d\u4e86,\u4f46\u5bf9\u4e8e\u7194\u878d\u5ca9\u6d46\u8fd8\u4e0d\u591f\u597d. \u60f3\u8981<br/>\u83b7\u5f97\u94a8\u9178\u9502\u7684\u8bdd,\u53ef\u4ee5\u8bd5\u8bd5\u79bb\u5fc3\u672b\u5730\u77f3\u7c89\u6216\u8005\u672b\u5f71\u7c98\u6d46.\u8bd1\u8005\u6ce8: \u7531\u4e8e\u7194\u5ca9\u5ca9\u6d46\u548c\u672b\u5f71\u7c98\u6d46mod\u672c\u8eab\u5c31\u6709\u6d41\u4f53<br/>,\u6240\u4ee5NEI\u4e2d\u76f4\u63a5\u5bf9\u8be5\u6d41\u4f53\u67e5\u770b\u7528\u9014\u662f\u641c\u4e0d\u51fa\u6765\u7684,\u53ef\u4ee5\u901a\u8fc7\u5bf9\u76f8\u5e94\u5355\u5143\u67e5\u770b\u7528\u9014,\u53ef\u4ee5\u770b\u5230GT\u7248\u672c\u7684\u8fd9\u4e24\u79cd<br/>\u6d41\u4f53.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHgQ=="
                },
                {
                    "name": "\u6447\u8d77\u6765...",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u7b5b\u9009\u673a.png",
                    "x": 516.0,
                    "y": 468.0,
                    "tooltip": "\u6447\u8d77\u6765...",
                    "data": "\u4ece\u6d17\u51c0\u7684\u77ff\u77f3\u4e2d\u7b5b\u51fa...\u65e0\u8bba\u5982\u4f55,\u5de5\u4e1a\u7b5b\u9009\u673a\u4f1a\u663e\u8457\u63d0\u9ad8\u7b5b\u9009\u901f\u5ea6.\u4f60\u4f1a\u600e\u4e48\u5904\u7406\u8fd9\u4e9b\u5b9d\u77f3\u5462\uff1f\u5982\u679c\u4f60\u4e0d\u60f3\u7528<br/>\u53cc\u80fd\u6e90\u4ed3\u5347\u538b\u7684\u8bdd,\u5f97\u518d\u505a\u4e00\u4e2a\u673a\u68b0\u65b9\u5757.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFjA=="
                },
                {
                    "name": "\u7845\u6a61\u80f6",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6c2f\u7532\u70f7\u5355\u5143.png",
                    "x": 372.0,
                    "y": 516.0,
                    "tooltip": "\u7845\u6a61\u80f6",
                    "data": "\u60f3\u5236\u4f5c\u4e00\u4e9b\u5408\u6210\u6a61\u80f6,\u7845\u6a61\u80f6\uff1f \u7b2c\u4e00\u6b65,\u4f60\u9700\u8981\u6c2f\u7532\u70f7.\u5c062\u5355\u4f4d\u6c2f+1\u5355\u4f4d\u7532\u70f7\u653e\u5165\u5316\u5b66\u53cd\u5e94\u91dc. \u6216\u8005\u4f60\u4e5f<br/>\u53ef\u4ee5\u7528\u7532\u9187\u548c\u6c22\u6c2f\u9178.\u6709\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u505a\u5230\u8fd9\u4e00\u70b9,\u8fd9\u4e2a\u4efb\u52a1\u53ea\u662f\u4e00\u4e2a\u4f8b\u5b50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGfQ=="
                },
                {
                    "name": "\u7845\u6a61\u80f6\u7247",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u7845\u6a61\u80f6\u7247.png",
                    "x": 276.0,
                    "y": 576.0,
                    "tooltip": "\u7845\u6a61\u80f6\u7247",
                    "data": "\u73b0\u5728\u6211\u4eec\u5728\u805a\u4e8c\u7532\u57fa\u7845\u6c27\u70f7\u7c89\u4e2d\u6dfb\u52a0\u4e00\u70b9\u786b,\u5f97\u5230\u7194\u878d\u7845\u6a61\u80f6. \u518d\u4f7f\u7528\u677f\u6a21\u5177\u56fa\u5316\u83b7\u5f97\u7845\u6a61\u80f6\u7247.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGgA=="
                },
                {
                    "name": "\u7b80\u5355\u7684SoC-\u82af\u7247\u7ea7\u7684\u7cfb\u7edf",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7b80\u5355\u7684SoC.png",
                    "x": 372.0,
                    "y": 192.0,
                    "tooltip": "\u7b80\u5355\u7684SoC-\u82af\u7247\u7ea7\u7684\u7cfb\u7edf",
                    "data": "SoC\u662f\u82af\u7247\u7ea7\u7cfb\u7edf(System on a Chip)\u7684\u7b80\u79f0,\u5b83\u53ef\u4ee5\u964d\u4f4e\u7535\u8def\u677f\u7684\u9020\u4ef7. \u5728\u8fd9\u91cc,\u7528\u7b80<br/>\u5355\u7684SoC\u53ef\u4ee5\u66ff\u6362\u771f\u7a7a\u7ba1,ULV\u7535\u8def\u677f\u66f4\u4fbf\u5b9c\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGsQ=="
                },
                {
                    "name": "\u5c0f\u578b\u7ebf\u5708",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u5c0f\u578b\u7ebf\u5708.png",
                    "x": 180.0,
                    "y": 60.0,
                    "tooltip": "\u5c0f\u578b\u7ebf\u5708",
                    "data": "\u751f\u4ea7\u5904\u7406\u5668\u96c6\u7fa4\u65f6\u9700\u8981\u7528\u5230\u5c0f\u578b\u7ebf\u5708,\u6709\u8bb8\u591a\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u5236\u9020\u5b83\u4eec.",
                    "quest_id": "w=="
                },
                {
                    "name": "\u8d34\u7247\u7535\u8def\u5143\u4ef6",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8d34\u7247\u4e8c\u6781\u7ba1.png",
                    "x": 588.0,
                    "y": -24.0,
                    "tooltip": "\u8d34\u7247\u7535\u8def\u5143\u4ef6",
                    "data": "SMD(Surface-mount devices\u610f\u4e3a:\u8868\u9762\u8d34\u88c5\u673a\u4ef6)\u662f\u4e00\u79cd\u66f4\u5148\u8fdb\u7684\u7535\u5b50\u96f6\u4ef6. \u5728\u751f<br/>\u4ea7\u4e0b\u4e00\u9636\u9ad8\u7ea7\u7535\u8def\u677f\u7684\u65f6\u5019\u4f60\u9700\u8981\u7528\u5230\u5b83\u4eec.\u800c\u4e14\u5b83\u4eec\u8981\u6bd4\u57fa\u7840\u7684\u7535\u5bb9\u3001\u6676\u4f53\u7ba1\u3001\u4e8c\u6781\u7ba1\u3001\u7535\u963b\u4fbf\u5b9c. \u7b49\u5230\u4f60\u642d<br/>\u5efa\u4e86\u4e00\u6761\u53ef\u9760\u7684\u805a\u4e59\u70ef\u751f\u4ea7\u7ebf,\u4f60\u5c31\u53ef\u4ee5\u6279\u91cf\u4f7f\u7528\u8d34\u7247\u7535\u8def\u5143\u4ef6\u8282\u7701\u5927\u91cf\u8d44\u6e90.\u5efa\u8bae\u4f60\u68c0\u67e5\u4e0b\u81ea\u5df1\u8fd8\u6709\u591a\u5c11\u9553\u5b58\u8d27<br/>.\u73b0\u5728\u4f7f\u7528\u8d34\u7247\u4e8c\u6781\u7ba1\u548c\u8d34\u7247\u6676\u4f53\u7ba1\u5e76\u4e0d\u5212\u7b97,\u9664\u975e\u4f60\u53ef\u4ee5\u901a\u8fc7\u9ad8\u538b\u7c89\u788e\u673a(\u5904\u7406\u94dd\u571f\u6216\u662f\u95ea\u950c\u77ff)\u6216\u8005\u871c\u8702\u63d0\u4f9b<br/>\u7a33\u5b9a\u7684\u9553\u6765\u6e90. \u4f7f\u7528IC\u76f8\u5e94\u6742\u4ea4\u4ea7\u7269\u53ef\u4ee5\u8ba9\u4f60\u7684\u950c\u3001\u95ea\u950c\u548c\u94dd\u571f\u62e5\u67094\u500d\u4ea7\u51fa.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD9Q=="
                },
                {
                    "name": "\u00a79\u00a7lSMD Inductors",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8d34\u7247\u7535\u611f.png",
                    "x": 576.0,
                    "y": 600.0,
                    "tooltip": "\u00a79\u00a7lSMD Inductors",
                    "data": "Now that you have Neodymium you can make the last <br/>of the SMDs, the SMD inductor. It can replace Smal<br/>l Coils in your circuit crafting.",
                    "quest_id": "eHWy8E4n1NCg=="
                },
                {
                    "name": "\u4e00\u4e9b\u7f55\u89c1\u7684\u9ad8\u7ea7\u91d1\u5c5e",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u94c2\u7cfb\u77ff\u6ce5\u7c89.png",
                    "x": 420.0,
                    "y": 516.0,
                    "tooltip": "\u4e00\u4e9b\u7f55\u89c1\u7684\u9ad8\u7ea7\u91d1\u5c5e",
                    "data": "\u5728\u9ec4\u94dc\u77ff\u3001\u954d\u9ec4\u94c1\u77ff\u4e0e\u785d\u9178\u7684\u67d0\u4e9b\u5316\u5b66\u53cd\u5e94\u8fc7\u7a0b\u4e2d,\u53ef\u4ee5\u5f97\u5230\u5c0f\u5806\u7684\u94c2\u3001\u94af\u3001\u94f1\u548c\u9507(\u91d1\u5c5e\u7c89). \u4f60\u73b0\u5728\u53ef\u80fd\u6ca1<br/>\u6709\u6280\u672f\u6765\u5904\u7406\u5b83\u4eec,\u4f46\u662f\u4ee5\u540e\u4f60\u9700\u8981\u5927\u91cf\u8fd9\u4e9b\u91d1\u5c5e.\u8bf7\u6ce8\u610f,\u8fd9\u4e0d\u662f\u83b7\u53d6\u7a00\u6709\u91d1\u5c5e\u7684\u6b63\u786e\u65b9\u6cd5.\u8fd9\u610f\u5473\u7740\u5b83\u4eec\u90fd\u4e0d<br/>\u662f\u7eaf\u51c0\u7684,\u5728\u7ecf\u8fc7\u94c2\u7ebf\u5904\u7406\u4e4b\u524d\u65e0\u6cd5\u88ab\u5229\u7528,\u9664\u4e86\u76f4\u63a5\u7528\u9ad8\u7089\u5904\u7406\u94c2\u91d1\u5c5e\u7c89\u83b7\u5f97\u94c2\u7c92. \u4f46\u771f\u6b63\u7684\u94c2\u5904\u7406\u9700\u8981EV<br/>\u7535\u538b,\u8fd8\u6709\u4e00\u4e9b\u9700\u8981IV\u7535\u538b. \u8003\u8651\u5230\u8fd9\u4e48\u505a\u5982\u6b64\u8d39\u65f6\u8d39\u529b,\u73b0\u5728\u6536\u96c6\u592a\u591a\u8fd9\u4e9b\u91d1\u5c5e\u7c89\u597d\u50cf\u4e0d\u662f\u4e2a\u597d\u4e3b\u610f.\u5316\u5b66<br/>\u6d78\u6d17\u673a\u8fd8\u53ef\u4ee5\u4ece\u954d\u77ff\u77f3\u4e2d\u6c5e\u6d17\u51fa\u94c2. \u662f\u65f6\u5019\u91cd\u8fd4\u66ae\u8272\u68ee\u6797\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFgw=="
                },
                {
                    "name": "\u566c\u9b42\u8005",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7075\u9b42\u7ed1\u5b9a\u5668.png",
                    "x": 732.0,
                    "y": 228.0,
                    "tooltip": "\u566c\u9b42\u8005",
                    "data": "\u5982\u679c\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u67d0\u4e9b\u751f\u7269\u7684\u667a\u6167\u6216\u8005\u80fd\u529b,\u8fd9\u662f\u4e0d\u662f\u5f88\u68d2\uff1f \u4e3e\u4e2a\u4f8b\u5b50:\u5229\u7528\u672b\u5f71\u4eba\u7684\u4f20\u9001\u80fd\u529b\u6216\u8005\u50f5\u5c38\u5927\u8111\u7b80<br/>\u5355\u7684\u903b\u8f91\u80fd\u529b(\u53cd\u6b63\u50f5\u5c38\u4e5f\u7528\u4e0d\u5230\u5927\u8111=.=)\u6765\u5236\u9020\u673a\u5668. \u4f60\u53ef\u4ee5\u5c06\u7075\u9b42\u74f6\u4e2d\u7684\u602a\u7269\u7075\u9b42\u878d\u5408\u8fdb\u4f60\u7684\u7279\u5b9a\u7684\u673a<br/>\u5668\u6216\u8bbe\u5907,\u6765\u6539\u8fdb\u5b83\u4eec\u7684\u529f\u80fd,\u6216\u7528\u4e8e\u5408\u6210.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAApQ=="
                },
                {
                    "name": "\u6307\u5b9a\u9644\u9b54",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u9644\u9b54\u5668.png",
                    "x": 828.0,
                    "y": 84.0,
                    "tooltip": "\u6307\u5b9a\u9644\u9b54",
                    "data": "\u9644\u9b54\u4e66\u5c31\u50cf\u9644\u9b54\u7269\u54c1\u4e00\u6837\u662f\u968f\u673a\u7684,\u5982\u679c\u4f60\u60f3\u5728\u4f60\u7684\u5de5\u5177\u6216\u62a4\u7532\u4e0a\u9644\u4e0a\u7279\u5b9a\u7684\u9b54\u5492\u662f\u4e00\u4ef6\u5f88\u56f0\u96be\u7684\u4e8b. \u73b0\u5728\u6709\u4e86<br/>\u4e00\u79cd\u53ef\u4ee5\u6307\u5b9a\u9644\u9b54\u7684\u65b9\u6cd5.\u5f53\u7136\u4e86,\u8fd9\u5e76\u4e0d\u4fbf\u5b9c(\u8bd1\u8005\u6ce8:\u5176\u5b9e\u4e5f\u4e0d\u8d35XD).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAqg=="
                },
                {
                    "name": "\u82ef\u4e59\u70ef",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u82ef\u4e59\u70ef\u5355\u5143.png",
                    "x": 96.0,
                    "y": 468.0,
                    "tooltip": "\u82ef\u4e59\u70ef",
                    "data": "\u5c06\u82ef\u4e0e\u4e59\u70ef\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u53cd\u5e94,\u53ef\u4ee5\u5236\u53d6\u51fa\u82ef\u4e59\u70ef.\u8fd8\u4f1a\u526f\u4ea7\u4e00\u4e9b\u6c22,\u5b58\u8d77\u6765\u5907\u7528\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGVA=="
                },
                {
                    "name": "\u4e01\u82ef\u6a61\u80f6\u677f",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u4e01\u82ef\u6a61\u80f6\u7247.png",
                    "x": 36.0,
                    "y": 516.0,
                    "tooltip": "\u4e01\u82ef\u6a61\u80f6\u677f",
                    "data": "\u73b0\u5728\u6211\u4eec\u5728\u751f\u4e01\u82ef\u6a61\u80f6\u7c89\u4e2d\u52a0\u5165\u4e00\u70b9\u786b,\u5f97\u5230\u7194\u878d\u4e01\u82ef\u6a61\u80f6,\u518d\u4f7f\u7528\u677f\u6a21\u5177\u56fa\u5316\u83b7\u5f97\u4e01\u82ef\u6a61\u80f6\u7247.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGfA=="
                },
                {
                    "name": "\u5408\u6210\u6a61\u80f6",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8f7b\u5ea6\u84b8\u6c7d\u88c2\u5316\u77f3\u8111\u6cb9\u5355\u5143.png",
                    "x": 276.0,
                    "y": 468.0,
                    "tooltip": "\u5408\u6210\u6a61\u80f6",
                    "data": "\u60f3\u8981\u5236\u9020\u4e01\u82ef\u5408\u6210\u6a61\u80f6?\u6211\u4f1a\u544a\u8bc9\u4f60\u600e\u4e48\u505a\u7684.\u4f60\u9700\u8981\u77f3\u6cb9\u88c2\u5316\u673a\u548c\u84b8\u998f\u5854.\u6709\u591a\u79cd\u65b9\u5f0f\u5236\u53d6\u4e01\u82ef\u6a61\u80f6,\u8fd9\u4e2a\u4efb\u52a1<br/>\u53ea\u662f\u4e3e\u5176\u4e2d\u4e00\u79cd.\u7b2c\u4e00\u6b65\u662f\u7528\u84b8\u6c7d\u88c2\u5316\u77f3\u8111\u6cb9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGTw=="
                },
                {
                    "name": "\u805a\u56db\u6c1f\u4e59\u70ef1",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6c22\u6c1f\u9178\u5355\u5143.png",
                    "x": 276.0,
                    "y": 516.0,
                    "tooltip": "\u805a\u56db\u6c1f\u4e59\u70ef1",
                    "data": "\u4f60\u53ea\u9700\u51e0\u6b65\u5373\u53ef\u5236\u9020\u51fa\u805a\u56db\u6c1f\u4e59\u70ef.\u7b2c\u4e00\u6b65\u662f\u5236\u4f5c\u6c22\u6c1f\u9178.\u5982\u679c\u4f60\u8fd8\u6ca1\u80fd\u767b\u4e0a\u6708\u7403,\u6700\u597d\u7684\u6c1f\u6765\u6e90\u53ef\u80fd\u662f\u7535\u89e3\u51b0\u6676<br/>\u77f3.\u5176\u4ed6\u7684\u9009\u9879\u6709\u5f00\u91c7\u65b9\u89e3\u77f3\u6216\u6c99\u77f3(1/640\u7684\u51e0\u7387\u5f97\u5230\u6c1f\u77f3\u77ff\u77f3);\u79bb\u5fc3\u77f3\u7c89\u6216\u9ed1\u8272\u82b1\u5c97\u5ca9\u7c89\u83b7\u5f97\u7684\u9ed1\u4e91\u6bcd<br/>\u7c89\u4e5f\u53ef\u7535\u89e3\u51fa\u6c1f.\u4f60\u8fd8\u80fd\u4ece\u9502\u4e91\u6bcd(\u6765\u81ea\u76d0\u77ff\u8109)\u6216\u4e91\u6bcd\u4e2d\u83b7\u5f97\u5c11\u91cf\u6c1f.  \u5c06\u6240\u5f97\u7684\u6c1f\u4e0e\u6c22\u53cd\u5e94,\u4f60\u5c31\u4f1a\u83b7\u5f97\u6c22<br/>\u6c1f\u9178.\u5982\u679c\u4f60\u5df2\u7ecf\u5230\u8bbf\u8fc7\u6708\u7403,\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5904\u7406\u6c1f\u78b3\u9567\u94c8\u77ff. WIKI \u6c1f\u4ea7\u7ebf\uff1agtnh.huijiwik<br/>i.com/p/808",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHFA=="
                },
                {
                    "name": "\u7279\u65af\u62c9\u5f88\u81ea\u8c6a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u65e0\u7ebf\u5145\u80fd\u5668.png",
                    "x": 684.0,
                    "y": 180.0,
                    "tooltip": "\u7279\u65af\u62c9\u5f88\u81ea\u8c6a",
                    "data": "\u538c\u5026\u4e86\u5c06EnderIO\u7269\u54c1\u653e\u5165\u7535\u5bb9\u5e93\u4e2d\u6765\u5145\u7535\u5417\uff1f \u662f\u65f6\u5019\u5236\u4f5c\u65e0\u7ebf\u5145\u7535\u5668\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF3g=="
                },
                {
                    "name": "\u56db\u785d\u57fa\u7532\u70f7",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u56db\u785d\u57fa\u7532\u70f7\u5355\u5143.png",
                    "x": 492.0,
                    "y": 552.0,
                    "tooltip": "\u56db\u785d\u57fa\u7532\u70f7",
                    "data": "\u751f\u7269\u67f4\u6cb9\u548c\u67f4\u6cb9\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u56db\u785d\u57fa\u7532\u70f7\u63d0\u5347\u71c3\u503c.\u800c\u56db\u785d\u57fa\u7532\u70f7\u9700\u8981\u7528\u4e59\u70ef\u916e\u548c\u785d\u9178\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u53cd\u5e94\u5236\u5f97.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADSQ=="
                },
                {
                    "name": "\u521b\u9020\u751f\u547d",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7535\u52a8\u5237\u602a\u7b3c.png",
                    "x": 780.0,
                    "y": 228.0,
                    "tooltip": "\u521b\u9020\u751f\u547d",
                    "data": "\u901a\u8fc7\u6d88\u8017\u5927\u91cf\u7684\u80fd\u91cf,\u4f60\u53ef\u4ee5\u91cd\u65b0\u6fc0\u6d3b\u90a3\u4e9b\u539f\u6765\u4f60\u6536\u96c6\u7684\u635f\u574f\u7684\u5237\u602a\u7b3c.\u5982\u679c\u4f60\u4e4b\u524d\u8fd8\u6ca1\u6709\u78b0\u5230\u8fc7\u5237\u602a\u7b3c,\u90a3\u4e48\u4f60<br/>\u73b0\u5728\u5e94\u8be5\u53bb\u627e\u4e00\u4e2a!\u5982\u679c\u635f\u574f\u7684\u5237\u602a\u7b3c\u7684\u5237\u602a\u79cd\u7c7b\u4e0d\u662f\u4f60\u60f3\u8981\u7684,\u90a3\u5c31\u8fd8\u5f97\u591a\u8d70\u51e0\u6b65. \u5c06\u60f3\u8981\u7684\u602a\u7269\u6293\u5230\u7075\u9b42\u74f6<br/>\u91cc\u5934,\u7136\u540e\u628a\u5b83\u548c\u635f\u574f\u7684\u5237\u602a\u7b3c\u4e00\u8d77\u653e\u8fdb\u7075\u9b42\u7ed1\u5b9a\u5668,\u5373\u53ef\u6539\u53d8\u5237\u602a\u7b3c\u7684\u5237\u602a\u79cd\u7c7b. \u8fd9\u4e2a\u64cd\u4f5c\u8017\u65f6\u975e\u5e38\u957f...<br/>\u4f7f\u7528\u94c1\u7827\u5c06\u7535\u52a8\u5237\u602a\u7b3c\u548c\u635f\u574f\u7684\u5237\u602a\u7b3c\u7ed3\u5408\u8d77\u6765,\u8bbe\u5b9a\u7535\u52a8\u5237\u602a\u7b3c\u7684\u5237\u602a\u7c7b\u578b. \u63a5\u4e0b\u6765\u53ea\u9700\u8981\u7ed9\u5b83\u4f9b\u80fd,\u5c31\u53ef\u4ee5<br/>\u5237\u602a\u5566!\u5982\u679c\u4f60\u5c06\u5176\u8bbe\u7f6e\u4e3a\u6355\u83b7\u6a21\u5f0f,\u90a3\u5c31\u53ef\u4ee5\u5b8c\u5168\u65e0\u98ce\u9669\u5730\u83b7\u5f97\u5f53\u524d\u7c7b\u578b\u7684\u602a\u7269\u7075\u9b42\u74f6.\u5728\u670d\u52a1\u5668\u8bf7\u5c3d\u91cf\u51cf\u5c11\u4f7f<br/>\u7528,\u602a\u7269\u4f1a\u5e26\u6765\u5ef6\u8fdf. \u8fd9\u4e9b\u602a\u7269\u4ea7\u7269\u7528\u4f5c\u7269\u66ff\u4ee3\u5373\u53ef.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAqQ=="
                },
                {
                    "name": "\u7b2c3\u9636\u6bb5(HV)",
                    "symbolSize": 86.39999999999999,
                    "symbol": "image://icon/HV\u673a\u5668\u5916\u58f3.png",
                    "x": 516.0,
                    "y": 132.0,
                    "tooltip": "\u7b2c3\u9636\u6bb5(HV)",
                    "data": "\u7167\u4f8b\u662f\u7b2c\u4e00\u4e2a\u673a\u5668\u5916\u58f3...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAoA=="
                },
                {
                    "name": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "symbolSize": 86.39999999999999,
                    "symbol": "image://icon/\u949b\u952d.png",
                    "x": 768.0,
                    "y": 552.0,
                    "tooltip": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "data": "\u91d1\u7ea2\u77f3\u3001\u6c2f\u548c\u78b3\u7c89\u53ef\u5236\u6210\u56db\u6c2f\u5316\u949b. \u628a\u5b83\u4e0e\u9541\u653e\u5165HV\u5de5\u4e1a\u9ad8\u7089,\u4f60\u5c06\u83b7\u5f97\u70ed\u949b\u952d.\u5c06\u5176\u51b7\u51bb,\u4f60\u5c31\u80fd\u83b7\u5f97\u4f60\u7684<br/>\u7b2c\u4e00\u5757\u949b\u952d\u4e86.\u5982\u679c\u4f60\u8db3\u591f\u6b27,\u5728\u6708\u7403\u4e0a\u8fd8\u80fd\u627e\u5230\u949b\u94c1\u77ff\u77f3,\u7a0d\u7a0d\u7b80\u5316\u5236\u53d6\u949b\u7684\u5de5\u5e8f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADXA=="
                },
                {
                    "name": "\u9177\u5211\u88c5\u7f6e",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5934\u9885\u88c5\u914d\u673a.png",
                    "x": 684.0,
                    "y": 228.0,
                    "tooltip": "\u9177\u5211\u88c5\u7f6e",
                    "data": "\u5f53\u81e3\u6c11\u4eec\u4e0d\u613f\u5408\u4f5c\u65f6...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAkg=="
                },
                {
                    "name": "\u901a\u7528\u7814\u78e8\u673a",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u901a\u7528\u7814\u78e8\u673a.png",
                    "x": 468.0,
                    "y": 420.0,
                    "tooltip": "\u901a\u7528\u7814\u78e8\u673a",
                    "data": "\u901a\u7528\u7814\u78e8\u673a\u662fHV\u9636\u6bb5\u7684\u91cd\u8981\u673a\u5668\u4e4b\u4e00. \u5b83\u6709\u4e00\u4e2a\u989d\u5916\u7684\u8f93\u51fa\u69fd,\u5728\u7814\u78e8\u7684\u8fc7\u7a0b\u4e2d\u8fd9\u4e2a\u989d\u5916\u7684\u8f93\u51fa\u69fd\u53ef\u4ee5\u83b7\u5f97\u66f4<br/>\u591a\u7684\u6750\u6599. \u4f60\u975e\u5e38,\u975e\u5e38,\u975e\u5e38\u9700\u8981\u8fd9\u53f0\u673a\u5668.\u6709\u4e86\u5b83,\u4f60\u5c31\u80fd\u5bf9\u9553\u5371\u673a\u8bf4\u518d\u89c1\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEjA=="
                },
                {
                    "name": "\u5347\u7ea7RF\u7535\u5bb9\u5e93",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7535\u5bb9\u5e93.png",
                    "x": 636.0,
                    "y": 84.0,
                    "tooltip": "\u5347\u7ea7RF\u7535\u5bb9\u5e93",
                    "data": "\u5c06\u4f60\u7684\u57fa\u7840\u7535\u5bb9\u5e93\u5347\u7ea7\u5230\u7535\u5bb9\u5e93,\u4ee5\u4fbf\u80fd\u591f\u50a8\u5b58\u66f4\u591a\u7684RF\u80fd\u91cf. \u5c06\u591a\u4e2a\u7535\u5bb9\u5e93\u7ec4\u6210\u4e00\u4e2a\u66f4\u5927\u7684\u7ed3\u6784\u53ef\u4ee5\u5b58\u50a8\u66f4<br/>\u591a\u7684\u80fd\u91cf.\u53e6\u5916,\u4f60\u8fd8\u53ef\u4ee5\u7528\u7535\u5bb9\u5347\u7ea7\u4f60\u7684EIO\u673a\u5668.\u5347\u7ea7\u540e\u7684\u673a\u5668\u53ef\u4ee5\u5b58\u50a8\u66f4\u591a\u80fd\u91cf,\u8017\u80fd\u66f4\u9ad8,\u5de5\u4f5c\u901f\u5ea6\u4e5f<br/>\u66f4\u5feb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD2w=="
                },
                {
                    "name": "UU\u7269\u8d28(UU-M)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u57fa\u7840\u8d28\u91cf\u53d1\u751f\u5668.png",
                    "x": 72.0,
                    "y": 72.0,
                    "tooltip": "UU\u7269\u8d28(UU-M)",
                    "data": "\u901a\u8fc7\u8d28\u91cf\u53d1\u751f\u5668,\u4f60\u73b0\u5728\u53ef\u4ee5\u771f\u6b63\u5236\u9020UU\u7269\u8d28(UU-M)\u4e86. \u5176\u5b9e,\u4ece\u6280\u672f\u4e0a\u6765\u8bf4,\u4f60\u53ef\u4ee5\u4e0d\u7528UU-A,<br/>\u76f4\u63a5\u5236\u9020UU-M,\u4f46\u8fd9\u6837\u4f1a\u5f88\u8d35. \u60f3\u8981\u8ba9\u8d28\u91cf\u53d1\u751f\u5668\u53ea\u5728\u6709UU-A\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c,\u53ef\u4ee5\u5728\u69fd\u4f4d\u4e2d\u653e\u4e00\u4e2a\u7f16\u7a0b<br/>\u7535\u8def(\u4efb\u610f\u914d\u7f6e\u503c). UU-M\u7528\u4e8e\u4e00\u4e9b\u975e\u5e38\u7279\u6b8a\u7684\u7269\u54c1\u5408\u6210,\u6bd4\u5982\u590d\u5236\u67d0\u4e9b\u6750\u6599(\u8bf7\u67e5\u770bNEI,\u5143\u7d20\u5468\u671f\u8868<br/>\u4e0a\u7684\u5927\u90e8\u5206/\u6240\u6709);\u914d\u5408\u4f5c\u7269,\u5bf9\u77ff\u7269\u8fdb\u884c\u589e\u4ea7;\u53c2\u4e0e\u67d0\u4e9b\u7279\u5b9a\u7684\u9ad8\u9636\u914d\u65b9\u5408\u6210,\u4ee5\u53ca...\u5750\u5728UU\u7269\u8d28\u91cc\u5934<br/>\u53ef\u4ee5\u83b7\u5f97'\u751f\u547d\u6062\u590d'\u72b6\u6001.\u8d28\u91cf\u53d1\u751f\u5668\u7684\u80fd\u91cf\u4f7f\u7528\u4e0e\u8d85\u9891\u4e0d\u540c\u4e8e\u666e\u901aGT\u673a\u5668.\u4e3a\u4e86\u4f7f\u6240\u6709\u7b49\u7ea7\u7684EU-UUM<br/>\u8f6c\u5316\u7387\u4e00\u81f4,\u8fd9\u53f0\u673a\u5668\u8fdb\u884c\u7684\u662f2/2\u65e0\u635f\u8d85\u9891.\u800c\u4e14\u8d77\u59cb\u9636\u6bb5LV\u65f6\u9700\u8981\u5927\u7535\u6d41.\u4e0b\u9762\u8fd9\u5f20\u8868\u66f4\u52a0\u6e05\u695a:\u7535\u538b\u7b49<br/>\u7ea7    \u7535\u6d41          \u529f\u7387      \u65f6\u95f4  LV          8A       <br/>    256          160  MV          4A           512<br/>          80  HV          2A           1024       <br/>  40  EV          1A           2048         20  IV<br/>          0.5A          4096         10  \u7b49\u7b49...\u8f93\u5165\u80fd\u91cf<br/>(\u6700\u597d\u8fd8\u6709UU-A),\u7136\u540e\u8f93\u51faUU-M. \u4f60\u8fd8\u5f97\u77e5\u9053\u8d28\u91cf\u53d1\u751f\u5668\u548c\u589e\u5e45\u6db2\u4ea7\u751f\u5668\u65e0\u6cd5\u653e\u5165\u5904\u7406\u9635\u5217.\u76ee\u524d\u800c<br/>\u8a00,\u5236\u9020\u51fa\u6765\u7684UU-M\u8fd8\u6ca1\u4ec0\u4e48\u7528,\u5b58\u7740\u5c31\u884c. \u60f3\u8981\u4f7f\u7528UU-M\u9700\u8981\u590d\u5236\u673a\u5e76\u914d\u5408\u6570\u636e\u7403,\u8fd9\u4e9b\u4f1a\u5728\u4e0b\u4e00\u9636<br/>\u6bb5\u8bb2\u89e3. \u4f60\u53ea\u9700\u5b8c\u6210\u5176\u4e2d\u4e00\u9879\u8981\u6c42\u5373\u53ef.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHVQ=="
                },
                {
                    "name": "\u8109\u51b2\u5408\u91d1",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8109\u51b2\u5408\u91d1\u952d.png",
                    "x": 708.0,
                    "y": 132.0,
                    "tooltip": "\u8109\u51b2\u5408\u91d1",
                    "data": "\u8109\u51b2\u5408\u91d1\u662f\u5c06\u5145\u80fd\u5408\u91d1\u7c89\u672b\u3001\u672b\u5f71\u4e4b\u773c\u7c89\u672b\u548c\u94ec\u7c89\u672b\u6405\u62cc\u5e76\u70e7\u5236\u518d\u51b7\u51bb\u800c\u6210\u7684\u4e00\u79cd\u9ad8\u7ea7\u5408\u91d1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD3Q=="
                },
                {
                    "name": "\u5145\u80fd\u6676\u4f53",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5145\u80fd\u6676\u4f53.png",
                    "x": 780.0,
                    "y": 132.0,
                    "tooltip": "\u5145\u80fd\u6676\u4f53",
                    "data": "\u5236\u9020\u8c10\u632f\u7535\u5bb9\u5e93\u9700\u8981\u8fd9\u79cd\u795e\u5947\u7684\u6676\u4f53.\u540c\u65f6\u5347\u7ea7\u7384\u94a2\u5236\u9020\u7684\u76d4\u7532\u548c\u5de5\u5177\u4e5f\u9700\u8981\u7528\u5230\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAjQ=="
                },
                {
                    "name": "\u98ce\u529b\u8ba1",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u98ce\u529b\u8ba1.png",
                    "x": 900.0,
                    "y": 480.0,
                    "tooltip": "\u98ce\u529b\u8ba1",
                    "data": "\u98ce\u529b\u8ba1\u53ef\u4ee5\u6d4b\u8bd5\u5f53\u524d\u4f4d\u7f6e\u7684\u98ce\u529b\u5f3a\u5ea6. \u4f7f\u7528\u8fd9\u4e2a\u5de5\u5177\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u8ba9\u4f60\u9009\u62e9\u653e\u7f6e\u98ce\u673a\u7684\u9ad8\u5ea6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEdQ=="
                },
                {
                    "name": "\u5de5\u4f5c\u7ad9,\u4f60\u7684\u7b2c\u4e00\u79cdEV\u7535\u8def\u677f",
                    "symbolSize": 86.39999999999999,
                    "symbol": "image://icon/\u5de5\u4f5c\u7ad9.png",
                    "x": 84.0,
                    "y": 240.0,
                    "tooltip": "\u5de5\u4f5c\u7ad9,\u4f60\u7684\u7b2c\u4e00\u79cdEV\u7535\u8def\u677f",
                    "data": "\u4f60\u7684\u7b2c\u4e00\u79cdEV\u7535\u8def\u677f\u662f\u5de5\u4f5c\u7ad9. \u5de5\u4f5c\u7ad9\u662f\u6700\u7b80\u5355\u7684\u9ad8\u7ea7\u7535\u8def,\u5b83\u53ef\u4ee5\u7528\u6765\u5236\u9020EV\u7ea7\u522b\u7684\u673a\u5668. \u8ba9\u6211\u4eec\u6765\u751f<br/>\u4ea7\u4e00\u4e9b!\u6b64\u5916,\u4f60\u8fd8\u9700\u898116\u4e2a\u4e8c\u6781\u7ba1,\u8d34\u7247\u6216\u975e\u8d34\u7247\u90fd\u884c.\u4f60\u53ef\u4ee5\u5728\u5408\u91d1\u51b6\u70bc\u7089\u4e2d\u5c06\u94f6\u548c\u84dd\u77f3\u6df7\u5408\u5236\u6210\u84dd\u8272\u5408\u91d1<br/>.\u5982\u679c\u4f60\u6ca1\u6709\u84dd\u77f3,\u7528\u6405\u62cc\u673a\u5c06\u7ea2\u77f3\u4e0e\u7425\u73c0\u91d1\u6df7\u5408\u5373\u53ef.\u73a9\u5f97\u5f00\u5fc3!\u53e6\u5916,\u8bf7\u6ce8\u610f,\u5c31\u5904\u7406\u84dd\u8272\u5408\u91d1\u6765\u8bf4,\u6d41\u4f53\u56fa<br/>\u5316\u5668\u6bd4\u538b\u6a21\u673a\u5feb\u591a\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD9g=="
                },
                {
                    "name": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u4f20\u611f\u5668(HV).png",
                    "x": 264.0,
                    "y": 348.0,
                    "tooltip": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "data": "\u4e00\u4e9b\u673a\u5668\u9700\u8981\u53d1\u5c04\u5668\u548c\u4f20\u611f\u5668,\u6bd4\u5982\u8bf4\u626b\u63cf\u4eea\u6216\u8005\u7535\u8def\u7ec4\u88c5\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAE0A=="
                },
                {
                    "name": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "symbolSize": 86.39999999999999,
                    "symbol": "image://icon/\u673a\u68b0\u81c2(HV).png",
                    "x": 516.0,
                    "y": 348.0,
                    "tooltip": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "data": "\u6cf5\u3001\u6d3b\u585e\u3001\u4f20\u9001\u5e26\u3001\u673a\u68b0\u81c2,\u90fd\u662fHV\u9636\u6bb5\u5f88\u91cd\u8981\u7684\u90e8\u4ef6.\u6bcf\u6837\u5148\u505a\u4e00\u4e2a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEzw=="
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
                    "target": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673aII"
                },
                {
                    "source": "\u5de5\u4f5c\u7ad9,\u4f60\u7684\u7b2c\u4e00\u79cdEV\u7535\u8def\u677f",
                    "target": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673aII"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5",
                    "target": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a"
                },
                {
                    "source": "H\u4ee3\u8868\u6c22...\u5b57\u6bcd\u8868\u7684\u5176\u4f59\u90e8\u5206\u592a\u590d\u6742\u4e86!",
                    "target": "\u6c28"
                },
                {
                    "source": "N\u4ee3\u8868\u6c2e...\u5b57\u6bcd\u8868\u53c8\u7f62\u5de5\u4e86!",
                    "target": "\u6c28"
                },
                {
                    "source": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c",
                    "target": "\u6c28"
                },
                {
                    "source": "\u4e3a\u4e86\u73af\u5883\u5faa\u73af\u5229\u7528",
                    "target": "UU\u589e\u5e45\u6db2\u751f\u4ea7\u5668"
                },
                {
                    "source": "\u81ea\u52a8\u5316\u602a\u7269\u519c\u573a",
                    "target": "\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f"
                },
                {
                    "source": "\u5206\u5272\u5fbd\u7ae0(\u6fc0\u6d3b)",
                    "target": "\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f"
                },
                {
                    "source": "\u9177\u5211\u88c5\u7f6e",
                    "target": "\u81ea\u52a8\u5408\u62101"
                },
                {
                    "source": "\u7f8e\u5473\u7684...",
                    "target": "\u81ea\u52a8\u5316\u602a\u7269\u519c\u573a"
                },
                {
                    "source": "\u566c\u9b42\u8005",
                    "target": "\u81ea\u52a8\u5316\u602a\u7269\u519c\u573a"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "HV\u81ea\u52a8\u91c7\u77ff\u673a"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u590d\u4ec7\u8005\u8054\u76df3,\u7ec4\u88c5!"
                },
                {
                    "source": "\u70ed\u6ce5\u6d46",
                    "target": "\u94dd\u571f\u77ff\u6e23"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u66f4\u597d\u7684\u78c1\u5316\u6746"
                },
                {
                    "source": "\u5145\u80fd\u6676\u4f53",
                    "target": "\u66f4\u5927\u3001\u66f4\u597d\u3001\u66f4\u5f3a?"
                },
                {
                    "source": "\u805a\u82ef\u4e59\u70ef",
                    "target": "\u751f\u7269\u5b9e\u9a8c\u5ba4"
                },
                {
                    "source": "\u805a\u56db\u6c1f\u4e59\u70ef2",
                    "target": "\u751f\u7269\u5b9e\u9a8c\u5ba4"
                },
                {
                    "source": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u4e2d\u592e\u5904\u7406\u5668(CPU)"
                },
                {
                    "source": "\u8d85\u51c0\u95f4",
                    "target": "\u4e2d\u592e\u5904\u7406\u5668(CPU)"
                },
                {
                    "source": "\u7b80\u5355\u7684SoC-\u82af\u7247\u7ea7\u7684\u7cfb\u7edf",
                    "target": "\u4fbf\u5b9c\u7684\u7b80\u5355\u7535\u8def"
                },
                {
                    "source": "\u805a\u56db\u6c1f\u4e59\u70ef1",
                    "target": "\u6c2f\u4eff"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df3,\u7ec4\u88c5!",
                    "target": "\u4e16\u754c\u951a"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u638c\u63a7\u4f60\u7684\u62bd\u5c49"
                },
                {
                    "source": "\u5145\u80fd\u6676\u4f53",
                    "target": "\u7384\u94a2\u5de5\u5177\u548c\u6b66\u5668\u7684\u57fa\u7840\u5347\u7ea7"
                },
                {
                    "source": "\u7384\u94a2\u5de5\u5177\u548c\u6b66\u5668\u7684\u57fa\u7840\u5347\u7ea7",
                    "target": "\u7384\u94a2\u5de5\u5177\u548c\u6b66\u5668\u7684\u9ad8\u7ea7\u5347\u7ea7"
                },
                {
                    "source": "NOR\u82af\u7247\u548cNAND\u82af\u7247",
                    "target": "\u95ea\u5b58"
                },
                {
                    "source": "\u4e2d\u592e\u5904\u7406\u5668(CPU)",
                    "target": "\u95ea\u5b58"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u76ee\u6807:\u6708\u7403"
                },
                {
                    "source": "\u7845\u6a61\u80f6",
                    "target": "\u4e8c\u7532\u57fa\u6c2f\u7845\u70f7"
                },
                {
                    "source": "\u5408\u6210\u6a61\u80f6",
                    "target": "\u84b8\u998f"
                },
                {
                    "source": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c",
                    "target": "\u672b\u5f71\u4e4b\u773c"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u5145\u80fd\u5408\u91d1"
                },
                {
                    "source": "\u66f4\u591a\u7684\u70ed\u91cf - \u574e\u5854\u5c14\u7ebf\u5708",
                    "target": "\u5145\u80fd\u5408\u91d1"
                },
                {
                    "source": "\u805a\u6c2f\u4e59\u70ef\u7247",
                    "target": "\u66f4\u5927\u7684\u50a8\u7f50"
                },
                {
                    "source": "\u8109\u51b2\u5408\u91d1",
                    "target": "\u66f4\u5927\u7684\u50a8\u7f50"
                },
                {
                    "source": "\u5145\u80fd\u5408\u91d1",
                    "target": "\u7ecf\u9a8c\u5b58\u50a8"
                },
                {
                    "source": "\u9177\u5211\u88c5\u7f6e",
                    "target": "\u8ba9\u8015\u79cd\u66f4\u5bb9\u6613\u4e00\u70b9"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u8ba9\u8015\u79cd\u66f4\u5bb9\u6613\u4e00\u70b9"
                },
                {
                    "source": "\u76ee\u6807:\u6708\u7403",
                    "target": "\u627e\u5230\u6c1f\u78b3\u9567\u94c8\u77ff\u77f3\u3001\u72ec\u5c45\u77f3\u548c\u9495\u77ff\u77f3"
                },
                {
                    "source": "\u76ee\u6807:\u6708\u7403",
                    "target": "\u627e\u5230\u94dd\u571f\u77ff\u8109"
                },
                {
                    "source": "\u76ee\u6807:\u6708\u7403",
                    "target": "\u5bfb\u627e\u949b\u94c1"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u00a79\u00a7lFluid Heater"
                },
                {
                    "source": "\u5904\u7406\u5668\u96c6\u7fa4",
                    "target": "\u5fd8\u4e86\u4ec0\u4e48?"
                },
                {
                    "source": "\u94dd\u571f\u77ff\u6e23",
                    "target": "\u9553,\u8fd8\u6709\u66f4\u591a"
                },
                {
                    "source": "\u627e\u5230\u94dd\u571f\u77ff\u8109",
                    "target": "\u5145\u5206\u5229\u7528\u4f60\u7684\u94dd\u571f\u77ff"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u83b7\u5f97\u7b2c\u4e00\u5757\u94c2\u952d"
                },
                {
                    "source": "\u66f4\u591a\u7684\u70ed\u91cf - \u574e\u5854\u5c14\u7ebf\u5708",
                    "target": "\u83b7\u5f97\u7b2c\u4e00\u5757\u94c2\u952d"
                },
                {
                    "source": "\u672b\u5f71\u4e4b\u773c",
                    "target": "\u9690\u85cf\u5f0f\u62bd\u5c49"
                },
                {
                    "source": "\u5145\u5206\u5229\u7528\u4f60\u7684\u94dd\u571f\u77ff",
                    "target": "\u70ed\u6ce5\u6d46"
                },
                {
                    "source": "\u00a79\u00a7lFluid Heater",
                    "target": "\u70ed\u6ce5\u6d46"
                },
                {
                    "source": "LV\u529b\u573a\u53d1\u751f\u5668",
                    "target": "\u592a\u591a\u7684\u5706\u77f3\u662f\u591a\u5c11?"
                },
                {
                    "source": "LV\u529b\u573a\u53d1\u751f\u5668",
                    "target": "\u592a\u591a\u6db2\u4f53\u662f\u591a\u5c11?"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u8fdb\u9636\u9505\u7089[HV]"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "HV\u5377\u677f\u673a"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "HV\u677f\u6750\u5207\u5272\u673a"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df3,\u7ec4\u88c5!",
                    "target": "HV\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "\u00a79\u00a7lKeeping your energy hatch from overheating",
                    "target": "HV\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "HV\u538b\u6a21\u673a"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "HV\u8d85\u5bfc(512 EU/t)"
                },
                {
                    "source": "\u5347\u7ea7\u954d\u94ec\u7ebf\u5708",
                    "target": "HV\u8d85\u5bfc(512 EU/t)"
                },
                {
                    "source": "\u5851\u6599\u7535\u8def\u57fa\u677f",
                    "target": "\u96c6\u6210\u5904\u7406\u5668"
                },
                {
                    "source": "\u4e2d\u592e\u5904\u7406\u5668(CPU)",
                    "target": "\u96c6\u6210\u5904\u7406\u5668"
                },
                {
                    "source": "\u521b\u9020\u751f\u547d",
                    "target": "\u6211\u770b\u5230\u4e86\u4e00\u5207"
                },
                {
                    "source": "\u7ec8\u7ed3...",
                    "target": "\u00a79\u00a7lKeeping your energy hatch from overheating"
                },
                {
                    "source": "\u00a79\u00a7lNaK",
                    "target": "\u00a79\u00a7lKeeping your energy hatch from overheating"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(HV)"
                },
                {
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)"
                },
                {
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "LV\u529b\u573a\u53d1\u751f\u5668"
                },
                {
                    "source": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "LV\u7ea7\u5fae\u578b\u5904\u7406\u5668"
                },
                {
                    "source": "\u5851\u6599\u7535\u8def\u57fa\u677f",
                    "target": "LV\u7ea7\u5fae\u578b\u5904\u7406\u5668"
                },
                {
                    "source": "\u8d85\u51c0\u95f4",
                    "target": "LV\u7ea7\u5fae\u578b\u5904\u7406\u5668"
                },
                {
                    "source": "\u5145\u80fd\u6676\u4f53",
                    "target": "\u79c1\u4eba\u78c1\u94c1"
                },
                {
                    "source": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673aII",
                    "target": "\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "HV\u7ea7\u6405\u62cc"
                },
                {
                    "source": "\u00a79\u00a7lFluid Heater",
                    "target": "\u00a79\u00a7lNaK"
                },
                {
                    "source": "HV\u81ea\u52a8\u91c7\u77ff\u673a",
                    "target": "\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f"
                },
                {
                    "source": "\u00a78Obsidian Chest",
                    "target": "\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f"
                },
                {
                    "source": "\u00a75\u00a76\u00a7lDark Steel Chest",
                    "target": "\u9700\u8981\u4e00\u4e2a\u5730\u65b9\u6765\u5b58\u653e\u6240\u6709\u8fd9\u4e9b\u77ff\u77f3\uff1f"
                },
                {
                    "source": "\u4e8c\u6c27\u5316\u6c2e",
                    "target": "\u785d\u9178"
                },
                {
                    "source": "O\u4f3c\u4e4e\u662f\u6c27",
                    "target": "\u785d\u9178"
                },
                {
                    "source": "\u6c28",
                    "target": "\u4e00\u6c27\u5316\u6c2e"
                },
                {
                    "source": "O\u4f3c\u4e4e\u662f\u6c27",
                    "target": "\u4e00\u6c27\u5316\u6c2e"
                },
                {
                    "source": "\u8f7b\u71c3\u6cb9",
                    "target": "\u785d\u57fa!(\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9)"
                },
                {
                    "source": "\u56db\u785d\u57fa\u7532\u70f7",
                    "target": "\u785d\u57fa!(\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9)"
                },
                {
                    "source": "\u4e00\u6c27\u5316\u6c2e",
                    "target": "\u4e8c\u6c27\u5316\u6c2e"
                },
                {
                    "source": "O\u4f3c\u4e4e\u662f\u6c27",
                    "target": "\u4e8c\u6c27\u5316\u6c2e"
                },
                {
                    "source": "\u7cbe\u786e\u5ea6\u662f\u5fc5\u8981\u7684",
                    "target": "NOR\u82af\u7247\u548cNAND\u82af\u7247"
                },
                {
                    "source": "\u78f7\u63ba\u6742\u7684\u6676\u5706",
                    "target": "NOR\u82af\u7247\u548cNAND\u82af\u7247"
                },
                {
                    "source": "\u8d85\u51c0\u95f4",
                    "target": "NOR\u82af\u7247\u548cNAND\u82af\u7247"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c"
                },
                {
                    "source": "\u751f\u7269\u5b9e\u9a8c\u5ba4",
                    "target": "\u57f9\u517b\u76bf,\u8fd9\u53ef\u4e0d\u662f\u5403\u7684"
                },
                {
                    "source": "HV\u677f\u6750\u5207\u5272\u673a",
                    "target": "\u78f7\u63ba\u6742\u7684\u5355\u6676\u7845"
                },
                {
                    "source": "\u592a\u9633\u80fd\u7ea7\u7845",
                    "target": "\u78f7\u63ba\u6742\u7684\u5355\u6676\u7845"
                },
                {
                    "source": "\u66f4\u591a\u7684\u70ed\u91cf - \u574e\u5854\u5c14\u7ebf\u5708",
                    "target": "\u78f7\u63ba\u6742\u7684\u5355\u6676\u7845"
                },
                {
                    "source": "\u78f7\u63ba\u6742\u7684\u5355\u6676\u7845",
                    "target": "\u78f7\u63ba\u6742\u7684\u6676\u5706"
                },
                {
                    "source": "\u8d85\u51c0\u95f4",
                    "target": "\u78f7\u63ba\u6742\u7684\u6676\u5706"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u73a9\u6ce5\u5df4"
                },
                {
                    "source": "\u4e8c\u7532\u57fa\u6c2f\u7845\u70f7",
                    "target": "\u805a\u4e8c\u7532\u57fa\u7845\u6c27\u70f7\u7c89"
                },
                {
                    "source": "\u82ef\u4e59\u70ef",
                    "target": "\u805a\u82ef\u4e59\u70ef"
                },
                {
                    "source": "\u6c2f\u4eff",
                    "target": "\u805a\u56db\u6c1f\u4e59\u70ef2"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "target": "\u7cbe\u786e\u5ea6\u662f\u5fc5\u8981\u7684"
                },
                {
                    "source": "\u5c0f\u578b\u7ebf\u5708",
                    "target": "\u5904\u7406\u5668\u96c6\u7fa4"
                },
                {
                    "source": "\u82ef\u4e59\u70ef",
                    "target": "\u751f\u4e01\u82ef\u6a61\u80f6"
                },
                {
                    "source": "\u5de5\u4f5c\u7ad9,\u4f60\u7684\u7b2c\u4e00\u79cdEV\u7535\u8def\u677f",
                    "target": "\u4e3a\u4e86\u73af\u5883\u5faa\u73af\u5229\u7528"
                },
                {
                    "source": "\u592a\u9633\u80fd",
                    "target": "RF\u592a\u9633\u80fd\u677f"
                },
                {
                    "source": "\u8109\u51b2\u5408\u91d1",
                    "target": "RF\u592a\u9633\u80fd\u677f"
                },
                {
                    "source": "RF\u592a\u9633\u80fd\u677f",
                    "target": "\u9ad8\u7ea7RF\u592a\u9633\u80fd\u677f"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u5ca9\u77f3\u5207\u5272\u673aLV"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u8f6c\u5b50"
                },
                {
                    "source": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u8f6c\u5b50"
                },
                {
                    "source": "\u5bfb\u627e\u949b\u94c1",
                    "target": "\u91d1\u7ea2\u77f3"
                },
                {
                    "source": "\u627e\u5230\u94dd\u571f\u77ff\u8109",
                    "target": "\u91d1\u7ea2\u77f3"
                },
                {
                    "source": "\u8f6c\u5b50",
                    "target": "\u5c06\u80fd\u91cf\u9001\u56de"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u5c06\u5b9d\u77f3\u4e0e\u7c89\u672b\u5206\u5f00"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u5206\u5b50\u5206\u79bb\u5668"
                },
                {
                    "source": "\u5c06\u5b9d\u77f3\u4e0e\u7c89\u672b\u5206\u5f00",
                    "target": "\u6447\u8d77\u6765..."
                },
                {
                    "source": "High Voltage Multiblocks",
                    "target": "\u6447\u8d77\u6765..."
                },
                {
                    "source": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c",
                    "target": "\u7845\u6a61\u80f6"
                },
                {
                    "source": "\u805a\u4e8c\u7532\u57fa\u7845\u6c27\u70f7\u7c89",
                    "target": "\u7845\u6a61\u80f6\u7247"
                },
                {
                    "source": "\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u7b80\u5355\u7684SoC-\u82af\u7247\u7ea7\u7684\u7cfb\u7edf"
                },
                {
                    "source": "\u96c6\u6210\u5904\u7406\u5668",
                    "target": "\u5c0f\u578b\u7ebf\u5708"
                },
                {
                    "source": "\u83b7\u5f97\u7b2c\u4e00\u5757\u94c2\u952d",
                    "target": "\u8d34\u7247\u7535\u8def\u5143\u4ef6"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df2,\u7ec4\u88c5!",
                    "target": "\u8d34\u7247\u7535\u8def\u5143\u4ef6"
                },
                {
                    "source": "\u627e\u5230\u6c1f\u78b3\u9567\u94c8\u77ff\u77f3\u3001\u72ec\u5c45\u77f3\u548c\u9495\u77ff\u77f3",
                    "target": "\u00a79\u00a7lSMD Inductors"
                },
                {
                    "source": "\u785d\u9178",
                    "target": "\u4e00\u4e9b\u7f55\u89c1\u7684\u9ad8\u7ea7\u91d1\u5c5e"
                },
                {
                    "source": "\u6c28",
                    "target": "\u4e00\u4e9b\u7f55\u89c1\u7684\u9ad8\u7ea7\u91d1\u5c5e"
                },
                {
                    "source": "\u9177\u5211\u88c5\u7f6e",
                    "target": "\u566c\u9b42\u8005"
                },
                {
                    "source": "\u4e00\u4e2a\u7075\u9b42\u7684\u5bb9\u5668",
                    "target": "\u566c\u9b42\u8005"
                },
                {
                    "source": "\u5145\u80fd\u6676\u4f53",
                    "target": "\u6307\u5b9a\u9644\u9b54"
                },
                {
                    "source": "\u84b8\u998f",
                    "target": "\u82ef\u4e59\u70ef"
                },
                {
                    "source": "\u751f\u4e01\u82ef\u6a61\u80f6",
                    "target": "\u4e01\u82ef\u6a61\u80f6\u677f"
                },
                {
                    "source": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c",
                    "target": "\u5408\u6210\u6a61\u80f6"
                },
                {
                    "source": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c",
                    "target": "\u805a\u56db\u6c1f\u4e59\u70ef1"
                },
                {
                    "source": "\u65b0\u7684\u5408\u91d1-\u9b42\u91d1",
                    "target": "\u7279\u65af\u62c9\u5f88\u81ea\u8c6a"
                },
                {
                    "source": "\u8109\u51b2\u5408\u91d1",
                    "target": "\u7279\u65af\u62c9\u5f88\u81ea\u8c6a"
                },
                {
                    "source": "\u4e59\u70ef\u916e",
                    "target": "\u56db\u785d\u57fa\u7532\u70f7"
                },
                {
                    "source": "\u785d\u9178",
                    "target": "\u56db\u785d\u57fa\u7532\u70f7"
                },
                {
                    "source": "\u566c\u9b42\u8005",
                    "target": "\u521b\u9020\u751f\u547d"
                },
                {
                    "source": "\u5145\u80fd\u6676\u4f53",
                    "target": "\u521b\u9020\u751f\u547d"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "target": "\u7b2c3\u9636\u6bb5(HV)"
                },
                {
                    "source": "\u9ad8\u7ea7\u7535\u8def\u677f",
                    "target": "\u7b2c3\u9636\u6bb5(HV)"
                },
                {
                    "source": "\u7194\u878d\u5851\u6599",
                    "target": "\u7b2c3\u9636\u6bb5(HV)"
                },
                {
                    "source": "\u7ec8\u7ed3...",
                    "target": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86"
                },
                {
                    "source": "\u91d1\u7ea2\u77f3",
                    "target": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u9177\u5211\u88c5\u7f6e"
                },
                {
                    "source": "\u65b0\u7684\u5408\u91d1-\u9b42\u91d1",
                    "target": "\u9177\u5211\u88c5\u7f6e"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u901a\u7528\u7814\u78e8\u673a"
                },
                {
                    "source": "\u57fa\u7840\u7535\u5bb9\u5e93",
                    "target": "\u5347\u7ea7RF\u7535\u5bb9\u5e93"
                },
                {
                    "source": "\u5145\u80fd\u5408\u91d1",
                    "target": "\u5347\u7ea7RF\u7535\u5bb9\u5e93"
                },
                {
                    "source": "UU\u589e\u5e45\u6db2\u751f\u4ea7\u5668",
                    "target": "UU\u7269\u8d28(UU-M)"
                },
                {
                    "source": "\u7ec8\u7ed3...",
                    "target": "\u8109\u51b2\u5408\u91d1"
                },
                {
                    "source": "\u5145\u80fd\u5408\u91d1",
                    "target": "\u8109\u51b2\u5408\u91d1"
                },
                {
                    "source": "\u5347\u7ea7\u954d\u94ec\u7ebf\u5708",
                    "target": "\u8109\u51b2\u5408\u91d1"
                },
                {
                    "source": "\u8109\u51b2\u5408\u91d1",
                    "target": "\u5145\u80fd\u6676\u4f53"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u98ce\u529b\u8ba1"
                },
                {
                    "source": "\u5904\u7406\u5668\u96c6\u7fa4",
                    "target": "\u5de5\u4f5c\u7ad9,\u4f60\u7684\u7b2c\u4e00\u79cdEV\u7535\u8def\u677f"
                },
                {
                    "source": "\u672b\u5f71\u4e4b\u773c",
                    "target": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
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