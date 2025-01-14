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
                    "name": "\u8840\u8165\u4e4b\u5251",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7ea6\u675f\u4e4b\u5251.png",
                    "x": 204.0,
                    "y": 312.0,
                    "tooltip": "\u8840\u8165\u4e4b\u5251",
                    "data": "\u94bb\u77f3\u548c\u7eff\u5b9d\u77f3\u7684\u5b58\u50a8\u80fd\u529b\u6709\u9650. \u6709\u4e86\u8fd9\u628a\u5251,\u4f60\u5c31\u53ef\u4ee5\u4ece\u4f60\u7684\u654c\u4eba\u8eab\u4e0a\u83b7\u5f97\u7075\u9b42\u788e\u7247.\u662f\u65f6\u5019\u53bb\u6253\u730e\u4e86."
                },
                {
                    "name": "\u8fdb\u9636\u4eea\u5f0f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4eea\u5f0f\u63a8\u6d4b\u6756.png",
                    "x": 348.0,
                    "y": 228.0,
                    "tooltip": "\u8fdb\u9636\u4eea\u5f0f",
                    "data": "\u66f4\u5f3a\u529b\u7684\u4eea\u5f0f\u9700\u8981\u5e7d\u6697\u94ed\u6587.\u4f7f\u7528\u4f60\u7684\u65b0\u5e7d\u6697\u7c89\u7b14,\u53ef\u4ee5\u5f3a\u5316\u4f60\u7684\u4eea\u5f0f\u63a8\u6d4b\u6756\u6765\u653e\u7f6e\u8fd9\u4e9b.\u8ba9\u4f60\u53ef\u4ee5\u8fdb\u884c\u66f4\u591a\u7684\u4eea<br/>\u5f0f."
                },
                {
                    "name": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u70bc\u91d1\u672f\u53f0.png",
                    "x": 108.0,
                    "y": 216.0,
                    "tooltip": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "data": "\u4e0d\u50cf\"\u8840\u70bc\u91d1\u672f(blood-alchemy)\".\u4f60\u53ef\u80fd\u7a0d\u540e\u9700\u8981\u4e0d\u6b62\u4e00\u4e2a,\u4f46\u73b0\u5728\u4e00\u4e2a\u5c31\u8db3\u591f\u4e86.\u5728\u63d2\u69fd\u4e2d<br/>\u653e\u5165\u6c14\u8840\u5b9d\u73e0\u624d\u80fd\u5f00\u59cb\u5408\u6210,\u70bc\u91d1\u5c06\u4f1a\u6d88\u8017\u7075\u9b42\u7f51\u7edc\u4e2d\u7684LP.\u5236\u4f5c\u66f4\u590d\u6742\u7684\u7269\u54c1\u5c06\u9700\u8981\u66f4\u9ad8\u7ea7\u7684\u6c14\u8840\u5b9d\u73e0.\u5982\u679c<br/>\u5728\u70bc\u91d1\u8fc7\u7a0b\u4e2d,\u4f60\u7684\u7075\u9b42\u7f51\u7edc\u4e2d\u7684LP\u964d\u81f30,\u90a3\u4e48\u4f60\u5c06\u83b7\u5f97\u4e00\u4e2a\u6c38\u4e45\u7684\u53cd\u80c3debuff,\u76f4\u5230LP\u91cd\u65b0\u63d0\u5347\u624d<br/>\u80fd\u6d88\u9664\u5b83."
                },
                {
                    "name": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 192.0,
                    "y": 60.0,
                    "tooltip": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0",
                    "data": "\u4f60\u7684\u7b2c\u4e8c\u9636\u6c14\u8840\u5b9d\u73e0."
                },
                {
                    "name": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 516.0,
                    "y": 360.0,
                    "tooltip": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!",
                    "data": "\u4f60\u76845\u9636\u5b9d\u73e0."
                },
                {
                    "name": "\u5347\u534e",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5353\u8d8a\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 612.0,
                    "y": 312.0,
                    "tooltip": "\u5347\u534e",
                    "data": "\u4f60\u611f\u5230\u88ab\u8d4b\u4e88\u4e86\u529b\u91cf,\u8f7b\u98d8\u98d8\u7684,\u5c31\u50cf\u4e2a\u5e7d\u7075."
                },
                {
                    "name": "\u771f\u6b63\u7684\u8840\u9b54\u6cd5",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8840\u7ea2\u5934\u76d4.png",
                    "x": 156.0,
                    "y": 168.0,
                    "tooltip": "\u771f\u6b63\u7684\u8840\u9b54\u6cd5",
                    "data": "\u8840\u9b54\u6cd5\u5f88\u597d,\u795e\u79d8\u65f6\u4ee3\u4e5f\u662f.\u4e3a\u4ec0\u4e48\u4e0d\u628a\u4e24\u4e2a\u4e16\u754c\u7ed3\u5408\u8d77\u6765\u5462\uff1f"
                },
                {
                    "name": "\u57fa\u7840\u7b26\u6587",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6c14\u8840\u7b26\u6587.png",
                    "x": 156.0,
                    "y": 120.0,
                    "tooltip": "\u57fa\u7840\u7b26\u6587",
                    "data": "\u6c14\u8840\u7b26\u6587\u662f\u6784\u6210\u8840\u4e4b\u796d\u575b\u7684\u57fa\u7840\u7b26\u6587,\u505a\u597d\u51c6\u5907,\u4f60\u5c06\u9700\u8981\u6210\u5428\u7684\u6c14\u8840\u7b26\u6587.\u4f60\u9700\u89818\u4e2a\u7b26\u6587\u7528\u4e8e\u4f60\u7684\u7b2c2\u9636\u796d\u575b<br/>,\u73b0\u5728\u7528\u4f60\u7684\u65b0\u796d\u575b\u9020\u70b9\u65b0\u73a9\u610f\u5427."
                },
                {
                    "name": "3\u9636\u8840\u4e4b\u796d\u575b",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8840\u8165\u795e\u79d8\u5757.png",
                    "x": 252.0,
                    "y": 120.0,
                    "tooltip": "3\u9636\u8840\u4e4b\u796d\u575b",
                    "data": "\u4e3a\u4e86\u8ba9\u4f60\u7684\u796d\u575b\u66f4\u5f3a\u5927,\u4f60\u9700\u8981\u5347\u7ea7\u5b83. \u4f60\u9700\u8981\u7528\u8840\u8165\u795e\u79d8\u5757\u5efa\u9020\u4e24\u683c\u9ad8\u7684\u67f1\u5b50,\u5e76\u5728\u6bcf\u4e2a\u67f1\u5b50\u7684\u9876\u90e8\u653e\u4e00\u5757\u8424<br/>\u77f3.PS\uff1a \u5efa\u8bae\u5230\u8840\u9b54\u6cd5\u5b98\u65b9wiki\u67e5\u770b\u796d\u575b\u7ed3\u6784\u622a\u56fe,\u4e0e\u5b98\u65b9wiki\u796d\u575b\u552f\u4e00\u7684\u4e0d\u540c\u5c31\u662f\u67f1\u5b50\u6750\u8d28,\u5176\u4f59<br/>\u7ed3\u6784\u5b8c\u5168\u4e00\u81f4."
                },
                {
                    "name": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8840\u8165\u865a\u7a7a\u5757.png",
                    "x": 300.0,
                    "y": 360.0,
                    "tooltip": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "data": "\u5982\u679c\u4f60\u60f3\u5236\u4f5c4\u7ea7\u77f3\u677f,\u4f60\u9700\u8981\u4e00\u4e2a\u7b2c4\u5c42\u796d\u575b. \u8fd9\u53ef\u4ee5\u50cf\u4e09\u5c42\u796d\u575b\u4e00\u6837,\u56db\u683c\u9ad8\u7684\u8840\u8165\u865a\u7a7a\u5757\u67f1\u5b50,\u67f1\u5b50\u9876\u90e8<br/>\u6709\u8840\u7816."
                },
                {
                    "name": "5\u9636\u8840\u4e4b\u796d\u575b",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4fe1\u6807.png",
                    "x": 300.0,
                    "y": 408.0,
                    "tooltip": "5\u9636\u8840\u4e4b\u796d\u575b",
                    "data": "\u5982\u679c\u4f60\u60f3\u5236\u4f5c5\u7ea7\u677f\u5ca9,\u4f60\u9700\u8981\u4e00\u4e2a\u4e94\u9636\u796d\u575b. \u5b83\u9700\u89814\u4e2a\u4fe1\u6807. \u4fe1\u6807\u9700\u8981\u901a\u8fc7\u5965\u672f\u5408\u6210,\u53ef\u4ee5\u5728\u9b54\u5bfc\u624b\u518c\u4e2d<br/>\u7684GTNH\u9875\u9762\u4e0a\u627e\u5230\u76f8\u5173\u7814\u7a76. \u800c\u76f8\u5173\u4efb\u52a1\u5728\"\u719f\u7ec3\u7684\u795e\u79d8\u4f7f\"\u4efb\u52a1\u680f."
                },
                {
                    "name": "6\u9636\u8840\u4e4b\u796d\u575b",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8840\u8165\u7075\u5b9d\u5757.png",
                    "x": 564.0,
                    "y": 360.0,
                    "tooltip": "6\u9636\u8840\u4e4b\u796d\u575b",
                    "data": "\u8840\u796d\u575b\u7684\u6700\u9ad8\u7b49\u7ea7\u662f6\u7ea7.\u4f60\u9700\u89817\u683c\u9ad8\u7684\u8840\u8165\u7075\u5b9d\u5757\u67f1\u5b50,\u5e76\u4e14\u9876\u90e8\u653e\u7f6e\u788e\u7247\u96c6\u6676."
                },
                {
                    "name": "\u8840\u6db2\u80cc\u5305",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8840\u6db2\u80cc\u5305.png",
                    "x": 252.0,
                    "y": 12.0,
                    "tooltip": "\u8840\u6db2\u80cc\u5305",
                    "data": "\u8840\u6db2\u80cc\u5305\u4f1a\u6bcf\u6b21\u6263\u9664\u534a\u9897\u5fc3\u5e76\u8f6c\u5316\u4e3a100LP\u5b58\u50a8,\u76f4\u5230\u534a\u8840\u4e3a\u6b62(\u989d\u5916\u751f\u547d\u4e0a\u9650\u4e5f\u8ba1\u7b97\u5728\u5185),\u80cc\u5305\u7684\u5b58\u50a8\u4e0a<br/>\u9650\u4e3a10000LP. \u5f53\u8840\u4e4b\u796d\u575b\u6ca1\u6709\u6b63\u5728\u5408\u6210\u7684\u7269\u54c1\u65f6,\u4f60\u53ef\u4ee5\u624b\u6301\u80cc\u5305\u53f3\u952e\u796d\u575b,\u5c06\u5176\u5185\u5b58\u50a8\u7684LP\u6ce8\u5165\u796d<br/>\u575b\u4e2d."
                },
                {
                    "name": "\u7ea6\u675f\u88c5\u7532",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7ea6\u675f\u5934\u76d4.png",
                    "x": 156.0,
                    "y": 408.0,
                    "tooltip": "\u7ea6\u675f\u88c5\u7532",
                    "data": "\u662f\u65f6\u5019\u7ec4\u88c5\u4f60\u7684\u76d4\u7532\u4e86.\u6309\u7167\u5728\u5de5\u4f5c\u53f0\u4e2d\u5408\u6210\u80f8\u7532\u7684\u6446\u653e\u65b9\u5f0f,\u5728\u5730\u4e0a\u653e\u7f6e\u65b9\u5757. \u7075\u9b42\u88c5\u7532\u953b\u9020\u77f3\u5fc5\u987b\u5728\u81f3\u5c11\u4e24<br/>\u4fa7\u8fde\u63a5\u5230\u7ed3\u6784. \u7136\u540e,\u7528\u7a7a\u624b\u53f3\u952e\u953b\u9020\u77f3\u6765\u5236\u4f5c\u76d4\u7532."
                },
                {
                    "name": "\u7ea6\u675f\u5de5\u5177:\u65a7",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7ea6\u675f\u4e4b\u65a7.png",
                    "x": 156.0,
                    "y": 312.0,
                    "tooltip": "\u7ea6\u675f\u5de5\u5177:\u65a7",
                    "data": "\u5728\u88ab\u53f3\u51fb\u6fc0\u6d3b\u540e,\u8fd9\u4e2a\u65a7\u5934\u5c06\u6e05\u9664\u5927\u8303\u56f4\u5185\u7684\u4efb\u4f55\u6728\u6750.\u8b66\u544a:\u8fd9\u5c06\u4f7f\u7528\u5927\u91cf\u7684LP.\u4f60\u53ef\u80fd\u4f1a\u7a81\u7136\u6b7b\u4ea1..."
                },
                {
                    "name": "\u7ea6\u675f\u5de5\u5177:\u9550",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7ea6\u675f\u4e4b\u9550.png",
                    "x": 156.0,
                    "y": 240.0,
                    "tooltip": "\u7ea6\u675f\u5de5\u5177:\u9550",
                    "data": "\u91c7\u77ff\u4ece\u672a\u5982\u6b64\u7b80\u5355.\u53ea\u9700\u624b\u6301\u6b64\u5de5\u5177\u53f3\u952e,\u6240\u6709\u77f3\u5934\u90fd\u6d88\u5931\u4e86! \u50cf\u6240\u6709\u7ea6\u675f\u5de5\u5177\u4e00\u6837,\u5b83\u4f7f\u7528\u4e86\u5927\u91cf\u7684LP.\u5f53<br/>\u5fc3\u522b\u6389\u8fdb\u5ca9\u6d46!"
                },
                {
                    "name": "\u7ea6\u675f\u5de5\u5177:\u94f2",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7ea6\u675f\u4e4b\u9539.png",
                    "x": 156.0,
                    "y": 276.0,
                    "tooltip": "\u7ea6\u675f\u5de5\u5177:\u94f2",
                    "data": "\u6709\u6ca1\u6709\u60f3\u8fc7\u6e05\u7406\u4e00\u5927\u7247\u6709\u6ce5\u571f\u3001\u783e\u77f3\u548c\u6c99\u5b50\u7684\u5730\u5f62\uff1f\u4e3a\u4ec0\u4e48\u4e0d\u8ba9\u9b54\u9b3c\u53bb\u505a\u5462\uff1f\u8fd9\u4e2a\u94f2\u5b50,\u5145\u6ee1\u4e86\u6076\u9b54\u7684\u7075\u9b42,\u5c06\u901a<br/>\u8fc7\u4f60\u7684\u610f\u5fd7\u91ca\u653e\u529b\u91cf.\u4f46\u662f\u8981\u8b66\u544a:\u4f60\u8981\u53ec\u5524\u7684\u6076\u9b54\u662f\u9965\u6e34\u7684,\u800c\u4e14\u4f7f\u7528\u5b83\u5c06\u6d88\u8017\u5f88\u591aLP,\u6240\u4ee5\u786e\u4fdd\u4f60\u7684LP\u8db3<br/>\u591f\u5145\u8db3!\u4e0d\u4f1a\u6316\u6398\u4f60\u7684\u4e0b\u65b9."
                },
                {
                    "name": "\u590d\u6742\u7684\u6cd5\u672f\u7cfb\u7edf",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u629b\u5c04\u6cd5\u672f\u57fa\u67b6.png",
                    "x": 348.0,
                    "y": 120.0,
                    "tooltip": "\u590d\u6742\u7684\u6cd5\u672f\u7cfb\u7edf",
                    "data": "\u4e0e\u5177\u6709\u6838\u5fc3\u548c\u57fa\u67b6\u7684\u7b80\u5355\u6cd5\u672f\u4e0d\u540c,\u590d\u6742\u7684\u6cd5\u672f\u7cfb\u7edf\u4ee4\u4eba\u96be\u4ee5\u7f6e\u4fe1...\u590d\u6742. \u8fd9\u91cc\u6709\u592a\u591a\u7684\u7ec4\u5408\u6765\u8986\u76d6\u5b83\u4eec,<br/>\u56e0\u6b64\u5efa\u8bae\u5728\u5176\u4ed6\u5730\u65b9\u5bfb\u627e\u77e5\u8bc6. \u4f46\u662f,\u901a\u8fc7\u6b64\u4efb\u52a1\u4e2d\u7684\u7269\u54c1,\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e2a\u7b80\u5355\u7684\u6316\u6398\u6cd5\u672f."
                },
                {
                    "name": "\u6076\u9b54\u5165\u4fb5",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u73bb\u7483\u949f\u7f69.png",
                    "x": 516.0,
                    "y": 216.0,
                    "tooltip": "\u6076\u9b54\u5165\u4fb5",
                    "data": "\u662f\u65f6\u5019\u5f00\u542f\u4e00\u4e2a\u4f20\u9001\u95e8,\u901a\u5f80\u6211\u4eec\u4ee5\u5f80\u53ec\u5524\u7684\u6076\u9b54\u6240\u5728\u4e4b\u5730.\u80fd\u51fa\u4ec0\u4e48\u5dee\u9519\u5462? (\u5efa\u8bae\u5728\u4e00\u4e2a\u884c\u661f\u4e0a\u8fdb\u884c\u8fd9\u4e2a\u4eea<br/>\u5f0f,\u6076\u9b54\u7684\u57ce\u5e02\u4f1a\u5ef6\u4f38\u86ee\u5927\u7684\u8303\u56f4...)\u89e3\u91ca\u8d77\u6765\u5f88\u590d\u6742,\u6240\u4ee5\u67e5\u770bwiki\u6765\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f\u5427. \u4e0d\u8fc7\u4f60\u5f97\u8bb0<br/>\u4f4f,\u5f00\u542f\u8fd9\u4e2a\u4eea\u5f0f\u9700\u898115M\u7684LP,\u6240\u4ee5\u4f60\u9700\u8981\u81f3\u5c1125\u4e2a\u5b9d\u73e0\u7b26\u6587. \u53e6\u5916,\u4f60\u8fd8\u9700\u8981\u70bc\u91d1\u7145\u70e7\u7089\u7b49\u4e00\u7cfb\u5217\u5de5<br/>\u5177\u624d\u80fd\u83b7\u5f97\u6240\u9700\u7684\u73bb\u7483\u949f\u7f69,\u8bf7\u67e5\u9605\u9b54\u5bfc\u624b\u518c\u4e2d\u7684\u8840\u9b54\u6cd5\u7ae0\u8282\u83b7\u53d6\u66f4\u591a\u4fe1\u606f.\u4e3b\u4e16\u754c\u73b0\u5728\u88ab\u7981\u6b62\u5f00\u542f\u4f20\u9001\u95e8.\u592a\u591a<br/>\u4eba\u4e0d\u542c\u4ece\u5efa\u8bae\u800c\u5bfc\u81f4\u670d\u52a1\u5668\u4e0d\u5f97\u4e0d\u627f\u53d7\u8fd9\u4e9b."
                },
                {
                    "name": "\u732e\u796d\u5200",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u732e\u796d\u5200.png",
                    "x": 156.0,
                    "y": 72.0,
                    "tooltip": "\u732e\u796d\u5200",
                    "data": "\u662f\u65f6\u5019\u5f97\u5230\u66f4\u591a\u7684\u8840\u6db2\u4e86. \u602a\u7269\u662f\u66f4\u591a\u8840\u6db2\u7684\u826f\u597d\u6765\u6e90. \u5728\u4f60\u7684\u4e8c\u9636\u796d\u575b\u4e0a\u5c06\u4f60\u7684\u727a\u7272\u5315\u9996\u53d8\u6210\u4e00\u628a\u732e\u796d\u5200."
                },
                {
                    "name": "\u6076\u9b54\u6c14\u8840\u788e\u7247",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6076\u9b54\u6c14\u8840\u788e\u7247.png",
                    "x": 432.0,
                    "y": 360.0,
                    "tooltip": "\u6076\u9b54\u6c14\u8840\u788e\u7247",
                    "data": "\u60f3\u8981\u83b7\u5f97\u6076\u9b54\u6c14\u8840\u788e\u7247,\u4f60\u5f97\u5148\u53ec\u5524\u4e00\u53ea\u6076\u9b54\u7136\u540e\u6740\u6b7b\u5b83. \u4f60\u5f97\u5148\u50cf\u8fd9\u6837\u653e\u7f6e\u5965\u672f\u57fa\u5ea7:xpxpxxxxxx<br/>pxPxpxxxxxxpxpxx=\u7a7a\u4f4d,p=\u57fa\u5ea7,P=\u57fa\u67f1\u5728\u57fa\u67f1\u4e0a\u653e\u7f6e\u4e00\u4e2a\u7ed1\u5b9a\u8fc7\u7684\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0(\u6216\u4ee5<br/>\u4e0a),\u7136\u540e\u5728\u57fa\u5ea7\u4e0a\u653e\u4e0a\u76f8\u5e94\u7684\u796d\u54c1. \u796d\u54c1\u9700\u8981\u62e5\u6709\u76f8\u540c\u5143\u7d20. \u5177\u4f53\u6765\u8bf4,\u5c31\u662f:\u795e\u5723\u7c89\u672b\u3001\u4ee5\u592a\u5143\u7d20\u3001\u706b\u7130<br/>\u7c89\u672b\u3001\u6db2\u4e4b\u7c89\u672b\u3001\u6ce5\u571f\u7c89\u672b\u6216\u6697\u9ed1\u7c89\u672b.\u542f\u52a8\u65f6\u4f1a\u6709\u95ea\u7535\u51fa\u73b0,\u4e00\u6b21\u5438\u6536\u796d\u54c1\u540e\u6076\u9b54\u5c06\u4f1a\u51fa\u73b0(\u5176\u5b9e\u662f\u5143\u7d20\u7cbe\u7075,<br/>\u66f4\u591a\u6076\u9b54\u53ec\u5524\u8bf7\u53c2\u8003\u6559\u7a0b). \u6740\u6b7b\u6076\u9b54\u5e76\u4e0d\u603b\u662f\u6389\u843d\u788e\u7247,\u6240\u4ee5\u6700\u597d\u4e00\u6b21\u51c6\u5907\u591a\u5957\u796d\u54c1."
                },
                {
                    "name": "\u5143\u7d20\u94ed\u6587",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5143\u7d20\u94ed\u6587\uff1a\u6c34.png",
                    "x": 252.0,
                    "y": 252.0,
                    "tooltip": "\u5143\u7d20\u94ed\u6587",
                    "data": "\u4eea\u5f0f\u7684\u5fc5\u9700\u54c1. \u5236\u4f5c\u4eea\u5f0f\u63a8\u6d4b\u6756,\u4f60\u5c31\u80fd\u66f4\u65b9\u4fbf\u5730\u5e03\u7f6e\u4eea\u5f0f\u77f3."
                },
                {
                    "name": "\u5143\u7d20\u7c89\u7b14II",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5143\u7d20\u94ed\u6587\uff1a \u5e7d\u6697.png",
                    "x": 384.0,
                    "y": 252.0,
                    "tooltip": "\u5143\u7d20\u7c89\u7b14II",
                    "data": "\u5f3a\u5316\u8fc7\u7684\u5143\u7d20\u7c89\u7b14,\u53ef\u4ee5\u7528\u6765\u4e66\u5199\u4e00\u4e9b\u6bd4\u4f60\u4e60\u60ef\u7684\u7b26\u6587\u66f4\"\u9ed1\"\u7684\u7b26\u6587..."
                },
                {
                    "name": "\u5143\u7d20\u7c89\u7b14",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5143\u7d20\u94ed\u6587\uff1a\u7834\u6653.png",
                    "x": 612.0,
                    "y": 360.0,
                    "tooltip": "\u5143\u7d20\u7c89\u7b14",
                    "data": "\u9876\u7ea7\u7684\u7c89\u7b14,\u7528\u6765\u753b\u82b1\u4fcf\u7684\u58c1\u753b\uff1f"
                },
                {
                    "name": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u865a\u5f31\u6c14\u8840\u788e\u7247.png",
                    "x": 204.0,
                    "y": 360.0,
                    "tooltip": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "data": "\u901a\u8fc7Shift\u53f3\u952e\u542f\u52a8\u4f60\u7684\u5251,\u5e76\u6740\u6b7b\u654c\u4eba! \u6536\u96c6\u5c3d\u53ef\u80fd\u591a\u7684\u788e\u7247.\u4f60\u9700\u8981\u5f88\u591a\u5f88\u591a..."
                },
                {
                    "name": "\u73bb\u7483\u727a\u7272\u5315\u9996",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u73bb\u7483\u727a\u7272\u5315\u9996.png",
                    "x": 384.0,
                    "y": 168.0,
                    "tooltip": "\u73bb\u7483\u727a\u7272\u5315\u9996",
                    "data": "\u73bb\u7483\u727a\u7272\u5315\u9996\u7684\u4f7f\u7528\u65b9\u5f0f\u4e0e\u666e\u901a\u727a\u7272\u5315\u9996\u4e00\u81f4,\u4e0d\u540c\u7684\u662f\u6bcf\u6b21\u5b83\u80fd\u5e26\u6765500LP. \u624b\u6301\u71e7\u77f3\u6253\u788e\u666e\u901a\u73bb\u7483\u5373\u53ef<br/>\u83b7\u5f97\u73bb\u7483\u788e\u7247.\u4e0d\u5e78\u7684\u662f,\u73bb\u7483\u732e\u796d\u5200\u597d\u50cf\u6ca1\u6cd5\u6b63\u5e38\u5de5\u4f5c..."
                },
                {
                    "name": "\u9ad8\u7aef\u4eea\u5f0f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4eea\u5f0f\u63a8\u6d4b\u6756.png",
                    "x": 612.0,
                    "y": 408.0,
                    "tooltip": "\u9ad8\u7aef\u4eea\u5f0f",
                    "data": "\u6700\u540e\u7684\u7b26\u6587,\u7528\u4e8e\u6700\u5f3a\u5927\u7684\u4eea\u5f0f."
                },
                {
                    "name": "\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u90aa\u672f\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 612.0,
                    "y": 216.0,
                    "tooltip": "\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f",
                    "data": "\u4e0d\u5f00\u73a9\u7b11,\u4e00\u4e2a\u4eba\u80fd\u6709\u591a\u9ed1\u6697\uff1f\u4f60\u786e\u4fe1\u6c34\u6676\u4e2d\u7684\u90a3\u5f20\u8138\u53ea\u4e0d\u8fc7\u662f\u4f60\u7684\u60f3\u8c61."
                },
                {
                    "name": "\u704c\u8f93\u6cd5\u672f\u9644\u5c5e(Imbued spell upgrades)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/[\u704c\u8f93]\u6cd5\u672f\u9644\u5c5e\uff1a\u6548\u80fd.png",
                    "x": 564.0,
                    "y": 168.0,
                    "tooltip": "\u704c\u8f93\u6cd5\u672f\u9644\u5c5e(Imbued spell upgrades)",
                    "data": "\u6709\u4e86\u8fd9\u4e9b\u65b0\u7684\u788e\u7247,\u4f60\u53ef\u4ee5\u5236\u4f5c\u6700\u5f3a\u529b\u7684\u6cd5\u672f\u7ec4\u4ef6.\u4e5f\u8bb8\u662f\u65f6\u5019\u5347\u7ea7\u4f60\u7684\u91c7\u6398\u6cd5\u672f\u4e86\uff1f"
                },
                {
                    "name": "\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3.png",
                    "x": 204.0,
                    "y": 168.0,
                    "tooltip": "\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3",
                    "data": "\u901a\u8fc7\u8fd9\u5757\u77f3\u5934,\u4f60\u80fd\u4e3e\u884c\u7b80\u5355\u7684\u4eea\u5f0f,\u6bd4\u5982\u5c06\u767d\u663c\u53d8\u4e3a\u9ed1\u591c,\u6216\u8005\u53ec\u5524\u4e00\u573a\u96f7\u96e8."
                },
                {
                    "name": "\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u900f\u660e\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 612.0,
                    "y": 264.0,
                    "tooltip": "\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?",
                    "data": "\u4f46\u662f\u5b83\u4e3a\u4ec0\u4e48\u662f\u900f\u660e\u7684?\u5b9e\u9645\u4e0a\u5bb9\u91cf\u6ca1\u6709\u63d0\u5347,\u4e5f\u4e0d\u80fd\u6b63\u786e\u663e\u793a\u5176\u5185\u7684\u6c14\u8840,\u540c\u65f6\u65e0\u6cd5\u5728\u796d\u575b\u4e0a\u4f7f\u7528.\u4e0d\u8fc7\u5b83\u786e\u5b9e<br/>\u4f1a\u663e\u793a\u4f60\u5f53\u524d\u7684LP\u91cf,\u4e14\u53ef\u7528\u4e8e\u5408\u6210\u4e0b\u4e00\u9636\u5b9d\u73e0."
                },
                {
                    "name": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 300.0,
                    "y": 168.0,
                    "tooltip": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "data": "\u4f60\u7684\u7b2c\u4e09\u9636\u6c14\u8840\u5b9d\u73e0."
                },
                {
                    "name": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 432.0,
                    "y": 288.0,
                    "tooltip": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86",
                    "data": "\u4f60\u76844\u9636\u5b9d\u73e0."
                },
                {
                    "name": "\u5fae\u578b\u4eea\u5f0f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7075\u9b42\u538b\u7f29\u5668.png",
                    "x": 252.0,
                    "y": 216.0,
                    "tooltip": "\u5fae\u578b\u4eea\u5f0f",
                    "data": "\u4e0d\u60f3\u8ba9\u4eea\u5f0f\u5360\u7528\u592a\u591a\u7a7a\u95f4? \u90a3\u5c31\u7528\u7075\u9b42\u538b\u7f29\u5668\u628a\u4eea\u5f0f\u538b\u7f29\u5230\u4e00\u4e2a\u65b9\u5757\u91cc\u5427!\u8bd1\u8005\u6ce8: \u624b\u6301\u5b9d\u73e0\u53f3\u952e\u6b64\u65b9\u5757\u5373\u53ef<br/>\u538b\u7f29\u4e0a\u65b9\u4eea\u5f0f,\u4e0d\u8fc7\u5b9d\u73e0\u4f1a\u88ab\u5403\u6389..."
                },
                {
                    "name": "\u57fa\u67b6",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u51cb\u7075\u9ab7\u9ac5\u5934\u9885.png",
                    "x": 108.0,
                    "y": 324.0,
                    "tooltip": "\u57fa\u67b6",
                    "data": "\u57fa\u67b6\u4f7f\u4f60\u7684\u9b54\u6cd5\u6210\u578b."
                },
                {
                    "name": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8840\u4e4b\u796d\u575b.png",
                    "x": 12.0,
                    "y": 120.0,
                    "tooltip": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7",
                    "data": "\u5f53\u4e00\u822c\u7684\u9b54\u6cd5\u5df2\u7ecf\u4e0d\u80fd\u6ee1\u8db3\u4f60\u9700\u8981\u7684\u65f6\u5019,\u4f60\u53ef\u80fd\u9700\u8981\u4e00\u4e9b...\u66f4\u5f3a\u5927\u7684\u529b\u91cf.\u8fd9\u4efd\u529b\u91cf\u9700\u8981\u7528\u8840\u6db2\u6765\u652f\u4ed8,\u4f60<br/>\u7684\u8840...\u6216\u8005\u662f\u5176\u4ed6\u4ec0\u4e48\u4eba\u6216\u8005\u751f\u7269\u7684.\u5728\u7b2c\u4e00\u9636,\u4f60\u53ea\u9700\u8981\u653e\u7f6e\u4e00\u4e2a\u8840\u4e4b\u796d\u575b.\u5efa\u8bae\u505a\u597d\u89c4\u5212,\u8fd9\u4e2a\u796d\u575b\u5c06\u4f1a<br/>\u8d8a\u6765\u8d8a\u5927,\u6700\u9ad8\u7ea7\u796d\u575b\u5360\u573023x23.\u8bf7\u6ce8\u610f,\u5728GTNH\u4e2d,\u6211\u4eec\u524a\u51cf\u4e86\u83b7\u5f97\u7684\u8840\u5e76\u63d0\u9ad8\u4e86\u5408\u6210\u6d88\u8017. \u505a\u597d<br/>\u5fc3\u7406\u51c6\u5907.\u521d\u59cb\u796d\u575b\u5185\u90e8\u670910,000L\u7684\u50a8\u91cf,\u8fd8\u67091,000L\u8f93\u5165/\u51fa\u7f13\u5b58(\u4f60\u53ef\u4ee5\u5c06\u8840\u62bd\u51fa\u6216\u8005\u6cf5\u5165\u796d<br/>\u575b,\u4f46\u4e00\u5f00\u59cb\u7684\u901f\u5ea6\u5f88\u6162). \u8840\u4f1a\u4f18\u5148\u6ce8\u6ee1\u8f93\u5165/\u51fa\u7f13\u5b58,\u4f60\u5728\u7b2c\u4e00\u6b21\u5408\u6210\u65f6\u9700\u8981\u6ce8\u610f\u8fd9\u4e00\u70b9."
                },
                {
                    "name": "Poke",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u727a\u7272\u5315\u9996.png",
                    "x": 60.0,
                    "y": 120.0,
                    "tooltip": "Poke",
                    "data": "\u662f\u65f6\u5019\u62bd\u8840\u4e86.\u4f60\u5fc5\u987b\u4ece\u4f60\u81ea\u5df1\u5f00\u59cb...\u6bcf\u6b21\u4f7f\u7528\u53ef\u4e3a\u796d\u575b\u6ce8\u5165100LP."
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u865a\u5f31\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 108.0,
                    "y": 96.0,
                    "tooltip": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)",
                    "data": "\u4e0d\u5b8c\u5168\u662f\u4e00\u4e2a\"\u7535\u6c60\",\u66f4\u50cf\u662f\u4f60\u751f\u547d\u70b9(LP)--\u4e5f\u5c31\u662f\u8840\u6db2--\u7684\u4fbf\u643a\u5f0f\u63a5\u5165\u70b9.\u628a\u8fd9\u73a9\u610f\u7ed1\u5b9a\u5230\u4f60\u81ea\u5df1,<br/>\u53f3\u952e\u5373\u53ef\u6d88\u8017\u4f60\u7684\u7ea2\u5fc3\u5e76\u5728\u7075\u9b42\u7f51\u7edc\u4e2d\u5b58\u50a8200LP. \u7075\u9b42\u7f51\u7edc\u4e2d\u7684LP\u53ef\u4ee5\u4e3a\u70bc\u91d1\u6216\u8005\u4eea\u5f0f\u4f9b\u80fd. \u5c06\u6c14\u8840<br/>\u5b9d\u73e0\u653e\u5165\u796d\u575b\u5373\u53ef1:1\u5730\u8f6c\u5316\u796d\u575b\u4e2d\u7684\u8840\u6db2\u4e3aLP,\u8fd9\u662f\u81ea\u52a8\u5316\u7684\u57fa\u7840. \u4f60\u7ed1\u5b9a\u7684\u6700\u9ad8\u9636\u5b9d\u73e0\u5bb9\u91cf\u5373\u4e3a\u4f60\u7684\u7075<br/>\u9b42\u7f51\u7edc\u7684\u5bb9\u91cf\u4e0a\u9650,\u4f46\u662f\u4f60\u9700\u8981\u5c06\u5b83\u653e\u5230\u4e00\u4e2a\u5408\u9002\u7b49\u7ea7\u7684\u796d\u575b\u4e2d,\u4ee5\u6301\u7eed\u5438\u6536\u8840\u6db2.\u8bd1\u8005\u6ce8: \u5efa\u8bae\u7528\u4e00\u4e2a\u989d\u5916\u796d<br/>\u575b\u914d\u5408\u82e6\u96be\u4e4b\u4e95\u4eea\u5f0f\u4e0e\u732e\u796d\u7b26\u6587\u63d0\u4f9b\u6e90\u6e90\u4e0d\u65ad\u7684LP."
                },
                {
                    "name": "\u836f\u6c34\u50ac\u5316\u5242",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/[\u666e\u901a\u7684]\u5ef6\u65f6\u50ac\u5316\u5242.png",
                    "x": 36.0,
                    "y": 276.0,
                    "tooltip": "\u836f\u6c34\u50ac\u5316\u5242",
                    "data": "\u4e3a\u4e86\u63a7\u5236\u836f\u6c34,\u4f60\u9700\u8981\u50ac\u5316\u5242.\u7136\u540e,\u4f60\u53ef\u4ee5\u5c06\u529f\u7387\u50ac\u5316\u5242\u6216\u5ef6\u65f6\u50ac\u5316\u5242\u52a0\u5165\u836f\u6c34,\u4ee5\u589e\u52a0\u836f\u6548\u7684\u6301\u7eed\u65f6\u95f4\u6216\u5f3a\u5ea6<br/>."
                },
                {
                    "name": "\u836f\u6c34:\u98de\u884c\u836f\u6c34",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u836f\u74f6.png",
                    "x": 72.0,
                    "y": 276.0,
                    "tooltip": "\u836f\u6c34:\u98de\u884c\u836f\u6c34",
                    "data": "\u53ea\u662f\u60f3\u8ba9\u4f60\u77e5\u9053\u4ec0\u4e48\u662f\u53ef\u80fd\u7684.\u8ba9\u6211\u4eec\u505a\u4e00\u4e2a\u836f\u6c34\u6837\u54c1,\u597d\u4e48\uff1f\u7ed9\u81ea\u5df1\u62ff\u4e2a\u836f\u74f6\u3001\u7fbd\u6bdb\u548c\u4f60\u5236\u4f5c\u7684\u4e00\u79cd\u865a\u5f31\u7c98\u5408\u5242<br/>.\u5c06\u8fd9\u4e9b\u7ed3\u5408\u5728\u4e00\u8d77,\u4f60\u4f1a\u5f97\u5230\u4e00\u4e9b\u4f60\u53ef\u80fd\u60f3\u8981\u4fdd\u7559\u4e00\u6bb5\u65f6\u95f4\u7684\u4e1c\u897f."
                },
                {
                    "name": "\u5f3a\u529b\u88c5\u7532",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6ee1\u7684\u8840\u63d2\u69fd.png",
                    "x": 204.0,
                    "y": 408.0,
                    "tooltip": "\u5f3a\u529b\u88c5\u7532",
                    "data": "\u5b83\u7684\u5236\u4f5c\u6d41\u7a0b\u5f88\u590d\u6742,\u4e5f\u76f8\u5f53\u6602\u8d35.\u4f46\u4e3a\u4e86\u8fd9\u5957\u771f\u6b63\u5f3a\u5927\u7684\u88c5\u7532,\u4ed8\u51fa\u4e00\u5207\u52aa\u529b\u90fd\u662f\u503c\u5f97\u7684."
                },
                {
                    "name": "\u5f3a\u5927\u7684\u788e\u7247",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u751f\u547d\u788e\u7247.png",
                    "x": 564.0,
                    "y": 216.0,
                    "tooltip": "\u5f3a\u5927\u7684\u788e\u7247",
                    "data": "\u53ec\u5524\u6765\u7684\u6076\u9b54\u76f8\u5f53\u5f3a\u5927,\u4f46\u4ed6\u4eec\u7684\u7075\u9b42\u542b\u6709\u5de8\u5927\u7684\u529b\u91cf."
                },
                {
                    "name": "\u8865\u5145\u836f\u5242",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/[\u865a\u5f31\u7684]\u586b\u5145\u5242.png",
                    "x": 72.0,
                    "y": 240.0,
                    "tooltip": "\u8865\u5145\u836f\u5242",
                    "data": "\u5982\u679c\u836f\u74f6\u7a7a\u4e86,\u4f60\u4e0d\u5fc5\u628a\u5b83\u6254\u6389.\u518d\u8865\u5145\u4e00\u70b9."
                },
                {
                    "name": "\u4eea\u5f0f\u62c6\u89e3\u6756",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4eea\u5f0f\u62c6\u89e3\u6756.png",
                    "x": 252.0,
                    "y": 324.0,
                    "tooltip": "\u4eea\u5f0f\u62c6\u89e3\u6756",
                    "data": "\u4f7f\u7528\u4eea\u5f0f\u62c6\u89e3\u6756\u53ef\u4ee5\u5feb\u901f\u62c6\u9664\u4eea\u5f0f\u5e76\u81ea\u52a8\u56de\u6536\u4eea\u5f0f\u77f3."
                },
                {
                    "name": "\u4eea\u5f0f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e3b\u4eea\u5f0f\u77f3.png",
                    "x": 204.0,
                    "y": 216.0,
                    "tooltip": "\u4eea\u5f0f",
                    "data": "\u662f\u65f6\u5019\u8fdb\u884c\u4e9b\u4eea\u5f0f\u4e86. \u4f60\u53ef\u80fd\u9996\u5148\u6784\u9020\u6700\u57fa\u7840\u7684\u7ed1\u5b9a\u4eea\u5f0f.\u5728\u8fd9\u4e9b\u7eb7\u7e41\u590d\u6742\u3001\u591a\u79cd\u591a\u6837\u7684\u4eea\u5f0f\u4e2d,\u67d0\u4e9b\u662f\u6709\u7528\u7684<br/>,\u67d0\u4e9b\u662f\u8fa3\u9e21.\u8fd9\u91cc\u5217\u4e3e\u4e86\u4e00\u4e9b\u4f60\u53ef\u80fd\u4f1a\u5173\u5fc3\u7684\u4eea\u5f0f:\u4e0b\u754c\u591c\u66f2(Serenade of the Nethe<br/>r): \u8981\u662f\u4f60\u4e0d\u559c\u6b22\u70bc\u72f1\u4e4b\u58f6\u7684\u8bdd,\u8fd9\u662f\u4e2a\u4e0d\u9519\u7684\u66ff\u4ee3\u54c1;\u70bc\u91d1\u4e4b\u8c23(Ballad of Alchemy)<br/>: \u81ea\u52a8\u70bc\u91d1;\u82e6\u96be\u4e4b\u4e95(Well of Suffering): \u81ea\u52a8\u5316\u8840\u6db2\u6536\u96c6\u7cfb\u7edf;\u9668\u661f\u4eea\u5f0f(Mar<br/>k of the Falling Tower):\u6839\u636e\u6295\u5165\u7269\u54c1\u4e0d\u540c,\u53ec\u552438\u79cd\u9668\u661f(\u8bd1\u8005\u6ce8\uff1a\u6e85\u5c04\u8303\u56f4\u975e<br/>\u5e38\u5927,\u5efa\u8bae\u79bb\u81ea\u5df1\u5bb6\u8d8a\u8fdc\u8d8a\u597d);\u6076\u9b54\u5165\u4fb5(Convocation of the Damned): 6\u9636<br/>\u796d\u575b\u3001\u4ee5\u53ca\u5404\u79cd\u7ec8\u6781\u7269\u54c1\u6240\u9700."
                },
                {
                    "name": "\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4eea\u5f0f\u63a8\u6d4b\u6756.png",
                    "x": 252.0,
                    "y": 288.0,
                    "tooltip": "\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d",
                    "data": "\u65e2\u7136\u4f60\u6709\u4e86\u5143\u7d20\u94ed\u6587,\u5c31\u53ef\u4ee5\u5236\u4f5c\u57fa\u7840\u7684\u4eea\u5f0f\u63a8\u6d4b\u6756\u4e86.\u5b83\u53ef\u4ee5\u65b9\u4fbf\u5730\u653e\u7f6e\u590d\u6742\u7684\u4eea\u5f0f. Shift+\u53f3\u952e\u53ef\u5207<br/>\u6362\u4eea\u5f0f."
                },
                {
                    "name": "2\u9636\u7b26\u6587",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u901f\u5ea6\u7b26\u6587.png",
                    "x": 192.0,
                    "y": 12.0,
                    "tooltip": "2\u9636\u7b26\u6587",
                    "data": "\u901f\u5ea6\u7b26\u6587\u662f\u552f\u4e00\u76842\u9636\u7b26\u6587. \u987e\u540d\u601d\u4e49,\u6bcf\u4e2a\u901f\u5ea6\u7b26\u6587\u53ef\u52a0\u6cd5\u53e0\u52a025\uff05\u7684\u8840\u4e4b\u796d\u575b\u5904\u7406\u901f\u5ea6.\u4f46\u662f,\u8fd9\u79cd\u7b26\u6587<br/>\u4f1a\u4f7f\u5b9e\u9645\u5236\u4f5c\u7269\u54c1\u66f4\u52a0\u56f0\u96be,\u6240\u4ee5\u5728\u4f7f\u7528\u6b64\u7b26\u6587\u524d,\u8bf7\u786e\u8ba4\u81ea\u5df1\u80fd\u5426\u5236\u4f5c\u8fd9\u79cd\u7269\u54c1."
                },
                {
                    "name": "\u727a\u7272/\u732e\u796d\u7b26\u6587",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u727a\u7272\u7b26\u6587.png",
                    "x": 300.0,
                    "y": 60.0,
                    "tooltip": "\u727a\u7272/\u732e\u796d\u7b26\u6587",
                    "data": "\u6233\u4f60\u81ea\u5df1\u7684\u624b\u6307\u4ea7\u751f\u7684\u8840\u6db2\u53ef\u80fd\u9002\u7528\u4e8e\u7b80\u5355\u7684\u77f3\u677f\u548c\u7b26\u6587,\u4f46\u4e3a\u9ad8\u7ea7\u4e1c\u897f\u83b7\u5f97\u8db3\u591f\u7684\u8840\u6db2\u662f\u4e4f\u5473\u7684. \u4f7f\u7528\u727a\u7272/<br/>\u732e\u796d\u7b26\u6587,\u4f60\u53ef\u4ee5\u589e\u52a0\u4ece\u4f60\u81ea\u5df1\u6216\u602a\u7269\u8eab\u4e0a\u83b7\u5f97\u7684\u8840\u6db2.\u6bcf\u4e2a\u7b26\u6587\u52a0\u6cd5\u53e0\u52a012\uff05\u7684\u6536\u76ca."
                },
                {
                    "name": "\u770b\u5230\u4e00\u5207",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5360\u535c\u5370\u8bb0.png",
                    "x": 60.0,
                    "y": 168.0,
                    "tooltip": "\u770b\u5230\u4e00\u5207",
                    "data": "\u5f88\u96be\u770b\u5230\u4f60\u7684\u796d\u575b\u91cc\u6709\u591a\u5c11LP,\u6216\u8005\u4f60\u7684\u4e2a\u4eba\u6709\u591a\u5c11LP.\u8fd9\u4e2a\u5c0f\u88c5\u7f6e\u53ef\u4ee5\u5e2e\u4f60\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898.\u53ea\u662f\u624b\u6307\u4e0a\u6709\u70b9<br/>\u523a\u75db,\u4e00\u5207\u90fd\u4f1a\u663e\u9732\u51fa\u6765.\u5f53\u4f60\u6709\u4e86\u70bc\u91d1\u672f\u53f0\u540e\u4f60\u8fd8\u53ef\u4ee5\u5236\u9020\u66f4\u9ad8\u7ea7\u7684\u89c1\u89e3\u5370\u8bb0."
                },
                {
                    "name": "\u7b80\u5355\u7684\u70bc\u91d1\u672f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6ce5\u571f\u7c89\u672b.png",
                    "x": 36.0,
                    "y": 216.0,
                    "tooltip": "\u7b80\u5355\u7684\u70bc\u91d1\u672f",
                    "data": "\u70bc\u91d1\u672f\u53ef\u80fd\u5f88\u5947\u602a,\u4e5f\u5f88\u4e4f\u5473. \u6709\u5f88\u591a\u8bd5\u5242\u751a\u81f3\u66f4\u591a\u53ef\u80fd\u7684\u7ec4\u5408. \u73b0\u5728,\u4e3a\u4e86\u5f00\u59cb,\u4f60\u9700\u8981\u4e00\u4e9b\u57fa\u672c\u7684\u4e1c\u897f."
                },
                {
                    "name": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7b26\u5492\u684c.png",
                    "x": 156.0,
                    "y": 360.0,
                    "tooltip": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f",
                    "data": "\u7b80\u5355\u7684\u6cd5\u672f\u7cfb\u7edf\u5f88\u5bb9\u6613\u83b7\u5f97,\u53ef\u4ee5\u5728\u4f60\u7684\u8840\u9b54\u6cd5\u751f\u6daf\u65e9\u671f\u5b8c\u6210."
                },
                {
                    "name": "\u4e3e\u4e2a\u4f8b\u5b50\u5427!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u672a\u7ed1\u5b9a\u7684\u6c34\u6676.png",
                    "x": 108.0,
                    "y": 360.0,
                    "tooltip": "\u4e3e\u4e2a\u4f8b\u5b50\u5427!",
                    "data": "\u6709\u5f88\u591a\u7ec4\u5408\u503c\u5f97\u63a2\u7d22,\u6240\u4ee5\u53ea\u9700\u5c1d\u8bd5\u5e76\u72af\u9519! \u6216\u8005\u76f4\u63a5\u6c42\u52a9\u7f51\u7edc."
                },
                {
                    "name": "\u7279\u6b8a\u836f\u74f6",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u836f\u74f6.png",
                    "x": 108.0,
                    "y": 276.0,
                    "tooltip": "\u7279\u6b8a\u836f\u74f6",
                    "data": "\u666e\u901a\u7684\u73bb\u7483\u74f6\u4e0d\u80fd\u5bb9\u7eb3\u4f60\u60f3\u8981\u7684\u8fd9\u4e9b\u7279\u6b8a\u836f\u6c34. \u4f60\u9700\u8981\u7528\u796d\u575b\u4e0a\u7684\u8840\u6765\u704c\u8f93\u5b83\u4eec."
                },
                {
                    "name": "\u6cd5\u672f\u6838\u5fc3",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u672b\u5f71\u73cd\u73e0.png",
                    "x": 108.0,
                    "y": 396.0,
                    "tooltip": "\u6cd5\u672f\u6838\u5fc3",
                    "data": "\u6709\u4e5d\u4e2a\u57fa\u672c\u5143\u7d20,\u6bcf\u4e2a\u5143\u7d20\u90fd\u6709\u4e00\u4e2a\u6838\u5fc3,\u4ee3\u8868\u5b83\u4eec\u7684\u7269\u54c1.\u4f60\u628a\u8fd9\u4e2a\u6838\u5fc3\u653e\u5728\u4f60\u7684\u796d\u575b\u65c1\u8fb9,\u4ee5\u4fbf\u4f60\u7684\u9b54\u6cd5\u8fdb\u5165<br/>\u5b83\u548c\u57fa\u67b6."
                },
                {
                    "name": "\u542f\u52a8\u5668",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/[\u865a\u5f31]\u6fc0\u6d3b\u6c34\u6676.png",
                    "x": 252.0,
                    "y": 168.0,
                    "tooltip": "\u542f\u52a8\u5668",
                    "data": "\u4f60\u9700\u8981\u8fd9\u4e2a\u624d\u80fd\u542f\u52a8\u4eea\u5f0f. \u66f4\u590d\u6742\u7684\u4eea\u5f0f\u9700\u8981\u66f4\u9ad8\u7ea7\u7684\u542f\u52a8\u5668. \u5236\u4f5c\u51fa\u6765\u540e\u4f60\u9700\u8981\u9996\u5148\u53f3\u952e\u4ee5\u5c06\u5176\u7ed1\u5b9a\u5230\u81ea\u5df1<br/>,\u7136\u540e\u53f3\u952e\u4e3b\u4eea\u5f0f\u77f3\u5373\u53ef\u542f\u52a8\u4eea\u5f0f."
                },
                {
                    "name": "Summon the Meteor!",
                    "symbolSize": 43.199999999999996,
                    "symbol": "image://icon/\u795e\u79d8\u6c34\u6676\u77ff\u77f3.png",
                    "x": 474.0,
                    "y": 318.0,
                    "tooltip": "Summon the Meteor!",
                    "data": "The Mark of the Falling Tower is among the most po<br/>werful magic you can achieve in GTNH. It allows yo<br/>u to summon a huge meteor full of various GT ores <br/>right were you want it. All you need is a particul<br/>ar catalyst item and a good amount of LP. Even bet<br/>ter, you sometimes get access to ores before you c<br/>ould get them normally! Check out NEI for all the <br/>possible meteors. For example you can start by loo<br/>king at the uses of a Pufferfish.\n\nThe meteor requ<br/>ires at least a singular block to see the sky abov<br/>e the master ritual stone. You can use the alchemi<br/>cal component Terrae to increase the radius of the<br/> meteor by 1. Using Orbis Terrae increases the rad<br/>ius by 2.\n\nThe meteor deals some damage but it doe<br/>s not deal environmental/block damage. Just be wea<br/>ry if you have villagers or important mobs nearby.<br/> The size of the meteor also increases the damage <br/>& radius by an enormous amount.\n\nA multiblock mine<br/>rs can mine out the various ores spawned from the <br/>meteor, but there are other options too!"
                },
                {
                    "name": "\u4e00\u9636\u77f3\u677f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7a7a\u767d\u7684\u77f3\u677f.png",
                    "x": 108.0,
                    "y": 144.0,
                    "tooltip": "\u4e00\u9636\u77f3\u677f",
                    "data": "\u57fa\u7840\u77f3\u677f.\u57fa\u7840\u5230\u53ea\u662f\u77f3\u5934\u6ce8\u5165\u8840\u6db2.\u4f60\u53ef\u4ee5\u901a\u8fc7\u6cf5\u3001\u6876\u6216\u8005\u5355\u5143\u7b49\u4efb\u4f55\u65b9\u5f0f\u83b7\u53d6\u5207\u5272\u673a\u6240\u9700\u7684\u8840."
                },
                {
                    "name": "2\u9636\u5370\u8bb0",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u901f\u6398\u5370\u8bb0.png",
                    "x": 252.0,
                    "y": 60.0,
                    "tooltip": "2\u9636\u5370\u8bb0",
                    "data": "\u6709\u4e86\u52a0\u5f3a\u7684\u77f3\u677f,\u4f60\u5c31\u80fd\u5236\u9020\u65b0\u7684\u5370\u8bb0\u4e86."
                },
                {
                    "name": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u52a0\u5f3a\u7684\u77f3\u677f.png",
                    "x": 216.0,
                    "y": 96.0,
                    "tooltip": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "data": "\u4f60\u9700\u8981MOOORE.\u4f7f\u7528\u66f4\u591a\u7684\u8840\u6765\u6ce8\u5165\u77f3\u677f."
                },
                {
                    "name": "3\u9636\u7b26\u6587",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8f6c\u4f4d\u7b26\u6587.png",
                    "x": 384.0,
                    "y": 132.0,
                    "tooltip": "3\u9636\u7b26\u6587",
                    "data": "\u7b2c\u4e00\u79cd\u7b26\u6587,\u6bcf\u4e2a\u4e58\u6cd5\u53e0\u52a050\uff05\u7684\u796d\u575b\u8f93\u5165/\u51fa\u7f13\u5b58; \u7b2c\u4e8c\u79cd\u7b26\u6587,\u6bcf\u4e2a\u53ef\u4ee5\u589e\u52a03500L\u796d\u575b\u5bb9\u91cf.\u8fd9\u79cd<br/>\u7b26\u6587\u4e5f\u53ef\u4ee5\u589e\u52a0\u8f93\u5165/\u51fa\u7f13\u5b58,\u8868\u73b0\u4e3a\u796d\u575b\u5bb9\u91cf\u768410\uff05."
                },
                {
                    "name": "3\u9636\u5370\u8bb0",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7194\u5ca9\u5370\u8bb0.png",
                    "x": 348.0,
                    "y": 60.0,
                    "tooltip": "3\u9636\u5370\u8bb0",
                    "data": "\u73b0\u5728\u5b83\u4eec\u5f88\u6709\u7528."
                },
                {
                    "name": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u704c\u8f93\u77f3\u677f.png",
                    "x": 300.0,
                    "y": 120.0,
                    "tooltip": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "data": "...\u4f60\u9700\u8981\u66f4\u591a\u7684\u8840."
                },
                {
                    "name": "4\u9636\u7b26\u6587",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5b9d\u73e0\u7b26\u6587.png",
                    "x": 432.0,
                    "y": 216.0,
                    "tooltip": "4\u9636\u7b26\u6587",
                    "data": "\u6bcf\u4e2a\u8d85\u5bb9\u7b26\u6587\u53ef\u4ee5\u4e58\u6cd5\u53e0\u52a014\uff05\u8840\u4e4b\u796d\u575b\u7684\u5bb9\u91cf.\u6bcf\u4e2a\u5b9d\u73e0\u7b26\u6587\u53ef\u4ee5\u589e\u52a04\uff05\u7684\u7075\u9b42\u7f51\u7edc\u5bb9\u91cf,\u4f60\u5c06\u5728\u4e4b\u540e\u7528\u5230<br/>\u5b83\u7684."
                },
                {
                    "name": "4\u9636\u5370\u8bb0",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u538b\u7f29\u5370\u8bb0.png",
                    "x": 384.0,
                    "y": 324.0,
                    "tooltip": "4\u9636\u5370\u8bb0",
                    "data": "\u5b83\u4eec\u597d\u7528\u4e48? \u4e5f\u8bb8\u5427."
                },
                {
                    "name": "4\u9636\u77f3\u677f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6076\u9b54\u77f3\u677f.png",
                    "x": 348.0,
                    "y": 288.0,
                    "tooltip": "4\u9636\u77f3\u677f",
                    "data": "4\u9636\u77f3\u677f:\u63a5\u8fd1\u4e86."
                },
                {
                    "name": "5\u9636\u7b26\u6587",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4fc3\u8fdb\u7b26\u6587.png",
                    "x": 540.0,
                    "y": 312.0,
                    "tooltip": "5\u9636\u7b26\u6587",
                    "data": "\u6700\u9ad8\u9636\u7b26\u6587: \u5e76\u6ca1\u6709\u592a\u591a\u53ef\u7528\u7684\u7b26\u6587. \u4fc3\u8fdb\u7b26\u6587\u53ef\u4ee5\u51cf\u5c11\u796d\u575b\u7f13\u5b58\u4e0e\u5916\u754c\u5bb9\u5668\u4ea4\u4e92\u7684\u68c0\u6d4b\u65f6\u95f4. \u521d\u59cb\u503c\u4e3a2<br/>0t\u4e00\u6b21,\u6bcf\u589e\u52a0\u4e00\u4e2a\u7b26\u6587\u53ef\u4ee5\u51cf\u5c111t,\u6700\u5c0f\u503c\u4e3a1t."
                },
                {
                    "name": "5\u9636\u5370\u8bb0",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u95ea\u7535\u5370\u8bb0.png",
                    "x": 564.0,
                    "y": 408.0,
                    "tooltip": "5\u9636\u5370\u8bb0",
                    "data": "\u5b83\u4eec\u7684\u5b9e\u7528\u6027\u4e25\u91cd\u503c\u5f97\u6000\u7591,\u6240\u4ee5\u4f55\u4e0d\u5c1d\u8bd5\u8840\u6db2\u5175\u5de5\u5382(Blood-Arsenal)\u7684\u5370\u8bb0\u5462? \u628a\u5b83\u4eec\u6536\u96c6<br/>\u9f50\u5427!PS\uff1a \u95ea\u7535\u5370\u8bb0\u662f\u5236\u4f5c\u5353\u8d8a\u6c14\u8840\u5b9d\u73e0\u7684\u5fc5\u9700\u54c1..."
                },
                {
                    "name": "5\u9636\u77f3\u677f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u60ac\u5e7d\u77f3\u677f.png",
                    "x": 516.0,
                    "y": 408.0,
                    "tooltip": "5\u9636\u77f3\u677f",
                    "data": "\u4e00\u5757\u77f3\u677f,1023\u6876\u8840!\u8fd8\u80fd\u518d\u88c5\u591a\u5c11?\u6211\u60f3\u77e5\u9053.\u4e8e\u662f\u6211\u53c8\u52a0\u4e86\u6876\u8bd5\u8bd5.\u6210\u4e86!\u4e00\u5757\u77f3\u677f,1024\u6876\u8840!.<br/>....."
                },
                {
                    "name": "\u65e0\u9650\u7684LP",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u963f\u8499\u514b\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 612.0,
                    "y": 168.0,
                    "tooltip": "\u65e0\u9650\u7684LP",
                    "data": "\u5236\u6210\u8fd9\u4e2a\u7ec8\u6781\u6c14\u8840\u5b9d\u73e0,\u4f60\u5c06\u62e5\u6709\u65e0\u9650\u7684LP. \u4f46\u4f60\u4ecd\u7136\u9700\u8981\u8840\u6db2\u6765\u8fdb\u884c\u5408\u6210,\u4e0d\u662f\u5417? (\u67e5\u770b\u6c38\u9b42\u4e4b\u6ce3(C<br/>ry-of-the-Eternal-soul)\u4eea\u5f0f)\u8bd1\u8005\u6ce8: \u6b64\u5b9d\u73e0LP\u4e0a\u9650\u4e3a10\u4ebf,\u4f46\u6ce8\u610f\u9700\u8981\u624b\u6301<br/>\u6b64\u5b9d\u73e0\u624d\u80fd\u8865\u5145\u7075\u9b42\u7f51\u7edc\u4e2d\u7684LP,\u673a\u5236\u7c7b\u4f3c\u7684\u8fd8\u6709\u521b\u9020\u6cd5\u6756\u6216\u4e2d\u5b50\u6cd5\u6756."
                },
                {
                    "name": "\u82e6\u96be\u4e4b\u4e95",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e3b\u4eea\u5f0f\u77f3.png",
                    "x": 384.0,
                    "y": 204.0,
                    "tooltip": "\u82e6\u96be\u4e4b\u4e95",
                    "data": "\u82e6\u96be\u4e4b\u4e95\u4eea\u5f0f\u5c06\u5bf9\u534a\u5f846\u683c\u5185\u7684\u602a\u7269\u9020\u6210\u4f24\u5bb3,\u5e76\u5c06\u83b7\u5f97\u7684\u8840\u6db2\u6ce8\u51656\u683c\u4e4b\u5185\u7684\u796d\u575b. \u6bcf\u4e2a\u602a\u7269\u6bcf\u6b21\u4f24\u5bb3\u6d88\u80172<br/>LP,\u800c\u57fa\u7840\u6536\u83b7\u662f10LP,\u662f\u4e0d\u662f\u6709\u70b9\u8d5a\u5934? \u66f4\u68d2\u7684\u662f,\u4f60\u8fd8\u80fd\u901a\u8fc7\u732e\u796d\u7b26\u6587\u63d0\u9ad8\u6536\u83b7\u7684LP,\u662f\u4e0d\u662f\u8840\u8d5a<br/>? \u66f4\u4e0d\u7528\u8bf4\u8fd9\u4e2a\u4eea\u5f0f\u53ef\u4ee5\u5168\u81ea\u52a8\u8fd0\u884c,\u81ea\u52a8\u5316\u83b7\u53d6LP!"
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
                    "source": "\u4eea\u5f0f",
                    "target": "\u8840\u8165\u4e4b\u5251"
                },
                {
                    "source": "\u5143\u7d20\u7c89\u7b14II",
                    "target": "\u8fdb\u9636\u4eea\u5f0f"
                },
                {
                    "source": "\u4e00\u9636\u77f3\u677f",
                    "target": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "target": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "source": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "target": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "source": "\u53ef\u6015\u7684\u9b54\u6cd5\u8f7d\u4f53",
                    "target": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!"
                },
                {
                    "source": "\u6076\u9b54\u6c14\u8840\u788e\u7247",
                    "target": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!"
                },
                {
                    "source": "\u9540\u94d1\u94af",
                    "target": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!"
                },
                {
                    "source": "5\u9636\u77f3\u677f",
                    "target": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!"
                },
                {
                    "source": "6\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u5347\u534e"
                },
                {
                    "source": "\u94f1",
                    "target": "\u5347\u534e"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u771f\u6b63\u7684\u8840\u9b54\u6cd5"
                },
                {
                    "source": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)",
                    "target": "\u57fa\u7840\u7b26\u6587"
                },
                {
                    "source": "\u4e00\u9636\u77f3\u677f",
                    "target": "\u57fa\u7840\u7b26\u6587"
                },
                {
                    "source": "\u57fa\u7840\u7b26\u6587",
                    "target": "3\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u795e\u79d8\u70f9\u996a",
                    "target": "3\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "target": "4\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u6d53\u7f29\u9ed1\u6697",
                    "target": "4\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "target": "4\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "5\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "6\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "5\u9636\u77f3\u677f",
                    "target": "6\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u5f3a\u5927\u7684\u788e\u7247",
                    "target": "6\u9636\u8840\u4e4b\u796d\u575b"
                },
                {
                    "source": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "target": "\u8840\u6db2\u80cc\u5305"
                },
                {
                    "source": "\u5f3a\u529b\u88c5\u7532",
                    "target": "\u7ea6\u675f\u88c5\u7532"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u7ea6\u675f\u5de5\u5177:\u65a7"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u7ea6\u675f\u5de5\u5177:\u9550"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u7ea6\u675f\u5de5\u5177:\u94f2"
                },
                {
                    "source": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "target": "\u590d\u6742\u7684\u6cd5\u672f\u7cfb\u7edf"
                },
                {
                    "source": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!",
                    "target": "\u6076\u9b54\u5165\u4fb5"
                },
                {
                    "source": "4\u9636\u7b26\u6587",
                    "target": "\u6076\u9b54\u5165\u4fb5"
                },
                {
                    "source": "\u57fa\u7840\u7b26\u6587",
                    "target": "\u732e\u796d\u5200"
                },
                {
                    "source": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86",
                    "target": "\u6076\u9b54\u6c14\u8840\u788e\u7247"
                },
                {
                    "source": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u6076\u9b54\u6c14\u8840\u788e\u7247"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u5143\u7d20\u94ed\u6587"
                },
                {
                    "source": "4\u9636\u77f3\u677f",
                    "target": "\u5143\u7d20\u7c89\u7b14II"
                },
                {
                    "source": "6\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u5143\u7d20\u7c89\u7b14"
                },
                {
                    "source": "\u8840\u8165\u4e4b\u5251",
                    "target": "\u83b7\u53d6\u7075\u9b42\u788e\u7247"
                },
                {
                    "source": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "target": "\u73bb\u7483\u727a\u7272\u5315\u9996"
                },
                {
                    "source": "\u5143\u7d20\u7c89\u7b14",
                    "target": "\u9ad8\u7aef\u4eea\u5f0f"
                },
                {
                    "source": "\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?",
                    "target": "\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f"
                },
                {
                    "source": "\u5f3a\u5927\u7684\u788e\u7247",
                    "target": "\u704c\u8f93\u6cd5\u672f\u9644\u5c5e(Imbued spell upgrades)"
                },
                {
                    "source": "\u542f\u52a8\u5668",
                    "target": "\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3"
                },
                {
                    "source": "\u5347\u534e",
                    "target": "\u5b83\u80fd\u627f\u8f7d\u66f4\u591a,\u6ca1\u9519\u5427?"
                },
                {
                    "source": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "target": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0"
                },
                {
                    "source": "4\u9636\u77f3\u677f",
                    "target": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86"
                },
                {
                    "source": "\u79ef\u5c11\u6210\u94a8\u94a2",
                    "target": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86"
                },
                {
                    "source": "\u4eea\u5f0f",
                    "target": "\u5fae\u578b\u4eea\u5f0f"
                },
                {
                    "source": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f",
                    "target": "\u57fa\u67b6"
                },
                {
                    "source": "\u70bc\u5316\u6e90\u8d28",
                    "target": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "source": "\u8c03\u8c10\u4e4b\u77f3",
                    "target": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "source": "\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816...",
                    "target": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7"
                },
                {
                    "source": "\u4ed8\u51fa\u6700\u9ad8\u7684\u4ee3\u4ef7",
                    "target": "Poke"
                },
                {
                    "source": "Poke",
                    "target": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)"
                },
                {
                    "source": "\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV",
                    "target": "\u4fbf\u643a\u5f0f\u7535\u6c60...(Portable battery...)"
                },
                {
                    "source": "\u7b80\u5355\u7684\u70bc\u91d1\u672f",
                    "target": "\u836f\u6c34\u50ac\u5316\u5242"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u836f\u6c34\u50ac\u5316\u5242"
                },
                {
                    "source": "\u836f\u6c34\u50ac\u5316\u5242",
                    "target": "\u836f\u6c34:\u98de\u884c\u836f\u6c34"
                },
                {
                    "source": "\u7279\u6b8a\u836f\u74f6",
                    "target": "\u836f\u6c34:\u98de\u884c\u836f\u6c34"
                },
                {
                    "source": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "target": "\u5f3a\u529b\u88c5\u7532"
                },
                {
                    "source": "\u6076\u9b54\u5165\u4fb5",
                    "target": "\u5f3a\u5927\u7684\u788e\u7247"
                },
                {
                    "source": "\u836f\u6c34:\u98de\u884c\u836f\u6c34",
                    "target": "\u8865\u5145\u836f\u5242"
                },
                {
                    "source": "\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d",
                    "target": "\u4eea\u5f0f\u62c6\u89e3\u6756"
                },
                {
                    "source": "\u4e0d\u5b8c\u5584\u7684\u4eea\u5f0f\u77f3",
                    "target": "\u4eea\u5f0f"
                },
                {
                    "source": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "target": "\u4eea\u5f0f"
                },
                {
                    "source": "\u5143\u7d20\u94ed\u6587",
                    "target": "\u4eea\u5f0f\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d"
                },
                {
                    "source": "\u5b66\u5f92\u6c14\u8840\u5b9d\u73e0",
                    "target": "2\u9636\u7b26\u6587"
                },
                {
                    "source": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "target": "\u727a\u7272/\u732e\u796d\u7b26\u6587"
                },
                {
                    "source": "\u4e00\u9636\u77f3\u677f",
                    "target": "\u770b\u5230\u4e00\u5207"
                },
                {
                    "source": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "target": "\u7b80\u5355\u7684\u70bc\u91d1\u672f"
                },
                {
                    "source": "\u83b7\u53d6\u7075\u9b42\u788e\u7247",
                    "target": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f"
                },
                {
                    "source": "\u57fa\u67b6",
                    "target": "\u4e3e\u4e2a\u4f8b\u5b50\u5427!"
                },
                {
                    "source": "\u6cd5\u672f\u6838\u5fc3",
                    "target": "\u4e3e\u4e2a\u4f8b\u5b50\u5427!"
                },
                {
                    "source": "\u57fa\u7840\u7b26\u6587",
                    "target": "\u7279\u6b8a\u836f\u74f6"
                },
                {
                    "source": "\u8840\u4e4b\u70bc\u91d1\u672f(Alchemy with blood)",
                    "target": "\u7279\u6b8a\u836f\u74f6"
                },
                {
                    "source": "\u7b80\u5355\u4f46\u5f3a\u5927\u7684\u6cd5\u672f",
                    "target": "\u6cd5\u672f\u6838\u5fc3"
                },
                {
                    "source": "3\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u542f\u52a8\u5668"
                },
                {
                    "source": "\u6076\u9b54\u6c14\u8840\u788e\u7247",
                    "target": "Summon the Meteor!"
                },
                {
                    "source": "Poke",
                    "target": "\u4e00\u9636\u77f3\u677f"
                },
                {
                    "source": "\u7b2c\u4e8c\u9636-\u77f3\u677f",
                    "target": "2\u9636\u5370\u8bb0"
                },
                {
                    "source": "\u57fa\u7840\u7b26\u6587",
                    "target": "\u7b2c\u4e8c\u9636-\u77f3\u677f"
                },
                {
                    "source": "\u6cd5\u5e08\u6c14\u8840\u5b9d\u73e0",
                    "target": "3\u9636\u7b26\u6587"
                },
                {
                    "source": "\u7b2c\u4e09\u9636-\u77f3\u677f",
                    "target": "3\u9636\u5370\u8bb0"
                },
                {
                    "source": "3\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "\u7b2c\u4e09\u9636-\u77f3\u677f"
                },
                {
                    "source": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86",
                    "target": "4\u9636\u7b26\u6587"
                },
                {
                    "source": "4\u9636\u77f3\u677f",
                    "target": "4\u9636\u5370\u8bb0"
                },
                {
                    "source": "4\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "4\u9636\u77f3\u677f"
                },
                {
                    "source": "\u8d24\u8005\u6c14\u8840\u5b9d\u73e0.\u8ba9\u4ed6\u4eec\u6765\u5427!",
                    "target": "5\u9636\u7b26\u6587"
                },
                {
                    "source": "5\u9636\u77f3\u677f",
                    "target": "5\u9636\u5370\u8bb0"
                },
                {
                    "source": "5\u9636\u8840\u4e4b\u796d\u575b",
                    "target": "5\u9636\u77f3\u677f"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u65e0\u9650\u7684LP"
                },
                {
                    "source": "\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f",
                    "target": "\u65e0\u9650\u7684LP"
                },
                {
                    "source": "\u8fdb\u9636\u4eea\u5f0f",
                    "target": "\u82e6\u96be\u4e4b\u4e95"
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