var chart_this_chart = echarts.init(
            document.getElementById('this_chart'), 'white', {renderer: 'canvas'});
            
            chart_this_chart.on('click', function (params) {
                    if (params.dataType === 'node') {
                        navigator.clipboard.writeText(params.data.tooltip.replaceAll("<br/>", ""));
                    }
            });
        
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
                    "name": "2-\u785d\u57fa\u6c2f\u82ef",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/2-\u785d\u57fa\u6c2f\u82ef\u5355\u5143.png",
                    "x": 528.0,
                    "y": 696.0,
                    "tooltip": "\u4e0b\u4e00\u6b65\u662f\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u5c06\u785d\u9178\u6df7\u9178\u4e0e\u6c2f\u82ef\u6405\u62cc,\u5f97\u52302-\u785d\u57fa\u6c2f\u82ef."
                },
                {
                    "name": "3,3-\u4e8c\u6c28\u57fa\u8054\u82ef\u80fa",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/3,3'-\u4e8c\u6c28\u57fa\u8054\u82ef\u80fa\u5355\u5143.png",
                    "x": 612.0,
                    "y": 780.0,
                    "tooltip": "\u5728IV\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u5c063,3-\u4e8c\u6c2f\u8054\u82ef\u80fa\u4e0e\u6c28\u548c\u950c\u6405\u62cc,\u5f97\u52303,3-\u4e8c\u6c28\u57fa\u8054\u82ef\u80fa."
                },
                {
                    "name": "3,3-\u4e8c\u6c2f\u8054\u82ef\u80fa",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/3,3'-\u4e8c\u6c2f\u8054\u82ef\u80fa\u5355\u5143.png",
                    "x": 528.0,
                    "y": 780.0,
                    "tooltip": "\u5728EV\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d,\u5c062-\u785d\u57fa\u6c2f\u82ef\u4e0e\u94dc\u7c89\u6405\u62cc,\u5f97\u52303,3-\u4e8c\u6c2f\u8054\u82ef\u80fa."
                },
                {
                    "name": "\u6765\u70b9\u7b5b\u9009",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u72ec\u5c45\u77f3\u7a00\u571f\u6ee4\u6e23\u7c89.png",
                    "x": 1332.0,
                    "y": 780.0,
                    "tooltip": "\u73b0\u5728,\u4f60\u53ef\u4ee5\u7b5b\u51fa\u6765\u4e00\u4e9b\u653e\u5c04\u6027\u6742\u8d28\u4e86."
                },
                {
                    "name": "\u4f60\u5feb\u641e\u5b9a\u94d1\u4e86",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u518d\u6c89\u6dc0\u94d1\u7c89.png",
                    "x": 1164.0,
                    "y": 36.0,
                    "tooltip": "\u5c06\u6eb6\u6db2\u653e\u5165\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d,\u5728\u5176\u65cb\u8f6c\u65f6\u8fdb\u884c\u52a0\u70ed.\u8fd9\u6837\u4f60\u5c31\u80fd\u4ece\u6eb6\u6db2\u4e2d\u83b7\u5f97\u7c89\u672b,100\uff05\u65e0\u7ed3\u5757!"
                },
                {
                    "name": "\u53e6\u4e00\u79cd\u9700\u8981\u5934\u75bc\u7684\u9178!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7532\u9178\u5355\u5143.png",
                    "x": 1248.0,
                    "y": 480.0,
                    "tooltip": "\u7532\u9178,\u4e5f\u79f0\u4e3a\u8681\u9178,\u662f\u4e00\u79cd\u76f8\u5f53\u7b80\u5355\u7684\u6709\u673a\u9178.\u5728\u94af\u5904\u7406\u4e2d\u7684\u6700\u540e\u4e00\u6b65\u5927\u91cf\u9700\u8981\u8fd9\u79cd\u7532\u9178,\u6240\u4ee5,\u6210\u5428\u5730\u5236\u5907\u7532\u9178<br/>\u5427!\u786b\u9178\u94a0\u53ef\u5faa\u73af\u5229\u7528.\u5148\u5236\u5907\u786b\u9178\u94a0,\u7136\u540e\u662f\u7532\u9178."
                },
                {
                    "name": "\u53e6\u4e00\u4e2a\u5403\u76d0\u7684",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94d1\u76d0\u7c89.png",
                    "x": 1080.0,
                    "y": 204.0,
                    "tooltip": "\u563f,\u4f60\u4e3a\u4ec0\u4e48\u8fd9\u6837\u770b\u7740\u6211?\u8fd8\u6ca1\u5b8c\u5450.\u51c6\u5907\u66f4\u591a\u7684\u6c2f\u548c\u76d0\u6765\u5904\u7406\u4f60\u7684\u94d1\u5427."
                },
                {
                    "name": "\u6c29",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6c29\u5355\u5143.png",
                    "x": 420.0,
                    "y": 444.0,
                    "tooltip": "\u8981\u5904\u7406\u4e00\u4e9b\u4f60\u4ee5\u540e\u4f1a\u53d1\u73b0\u7684\u65b0\u952d,\u4f60\u9700\u8981\u6c29\u6c14. \u6c29\u6c14\u7b2c\u4e00\u4e2a\u6765\u6e90\u6765\u81ea\u7a7a\u6c14\u4e2d\u7684\u5c11\u91cf\u5b58\u5728(\u7a00\u6709\u6c14\u4f53). \u4e0d\u540c\u4e8e<br/>\u76f4\u63a5\u79bb\u5fc3\u538b\u7f29\u7a7a\u6c14\u5355\u5143,\u4f60\u9700\u8981\u5148\u5c06\u5176\u5728\u771f\u7a7a\u51b7\u51bb\u673a\u5185\u8f6c\u5316\u6210\u6db2\u6001\u7a7a\u6c14\u5355\u5143,\u8fd9\u6837\u624d\u80fd\u66f4\u6709\u6548\u5730\u79bb\u5fc3.\u4f60\u8fd8\u53ef\u4ee5\u5236<br/>\u9020\u8fdb\u6c14\u4ed3\u66ff\u4ee3\u538b\u7f29\u673a,\u6548\u679c\u78be\u538b.\u9664\u975e\u4f60\u5bf9\u67d0\u4e9b\u7a00\u6709\u6c14\u4f53\u611f\u5174\u8da3,\u4e0d\u7136\u7684\u8bdd\u4e0d\u7528\u5728\u610f\u84b8\u998f\u5854\u7684\u914d\u65b9,\u5b83\u6bd4\u4e0d\u4e0a\u79bb\u5fc3<br/>\u914d\u65b9. \u84b8\u998f\u5854\u84b8\u998f\u6db2\u6001\u7a7a\u6c14\u8fd8\u8981\u6c42\u6db2\u6001\u7a7a\u6c14\u4ed3(\u53ea\u5bf9\u6db2\u6001\u7a7a\u6c14\u6709\u6548)\u548c\u5de8\u578b\u8f93\u51fa\u4ed3."
                },
                {
                    "name": "\u7b5b\u9009,\u7b5b\u9009!\u6211\u7684\u7b5b\u9009\u738b\u56fd!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6d53\u7f29\u785d\u9178\u72ec\u5c45\u77f3\u6d78\u51fa\u6eb6\u6db2\u5355\u5143.png",
                    "x": 1248.0,
                    "y": 1032.0,
                    "tooltip": "\u73b0\u5728,\u7b5b\u9009(\u6216\u8005\u8bf4\u8fc7\u6ee4)\u785d\u9178\u6d78\u51fa\u6df7\u5408\u7269,\u5373\u53ef\u4ece\u4e2d\u83b7\u53d6\u4e8c\u6c27\u5316\u94c8."
                },
                {
                    "name": "\u00a7b\u00a7lA Small Reward: The Infinite Spray Can",
                    "symbolSize": 31.200000000000003,
                    "x": 576.0,
                    "y": 156.0,
                    "tooltip": "Congratulations! You have completed the Platinum L<br/>ine. Not many players have the perseverance to acc<br/>omplish this task. A small reward is in order!\n\nTh<br/>e [note]Infinite Spray Can[/note] never runs out o<br/>f paint, and contains all sixteen colors (as well <br/>as solvent!) Of course, line mode and Ring of Loki<br/> support are included. There are also many conveni<br/>ence features. Middle click to open a color choice<br/> GUI. Middle click a painted block to copy its col<br/>or to the spray can. Left click to cycle the activ<br/>e color (sneak to go backwards.) Sneak middle clic<br/>k to lock the can; while locked, you can't acciden<br/>tally change the color. Sneak middle click to unlo<br/>ck. \n\nNaturally, you'll have to craft the infinite<br/> spray can yourself. It's a Dire Crafting recipe, <br/>so hopefully you have a dire crafting table. It re<br/>quires a lot of platinum line materials, of course<br/>. And, apparently, a rainbow cactus, so a small de<br/>tour into magic will be necessary. And a bunch of <br/>random-looking AE2 parts. And an IV world accelera<br/>tor. And... a fence?\n\nIs this really a reward?"
                },
                {
                    "name": "ASoC\u8fdb\u9636\u82af\u7247\u7ea7\u7cfb\u7edf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/ASoC.png",
                    "x": -24.0,
                    "y": 648.0,
                    "tooltip": "\u4e3a\u4e86\u4f7fHV\u548cEV\u7535\u8def\u677f\u7684\u6210\u672c\u66f4\u4f4e,\u4f60\u9700\u8981ASoC.\u8fdb\u9636\u82af\u7247\u7ea7\u7cfb\u7edf.\u4e0d\u8fc7\u4f60\u5f97\u7b49\u5230\u4e0b\u4e00\u9636\u6bb5\u624d\u80fd\u5236\u9020\u66f4\u4fbf\u5b9c<br/>\u7684EV\u7535\u8def\u677f."
                },
                {
                    "name": "\u4f46\u662f...\u8fd9\u5f88\u8d35!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7c97\u5236\u94d1\u91d1\u5c5e\u7c89.png",
                    "x": 1080.0,
                    "y": 288.0,
                    "tooltip": "\u4ee5\u524d\u6536\u96c6\u950c\u53ef\u80fd\u4e0d\u662f\u4e00\u4ef6\u4ee4\u4eba\u6109\u5feb\u7684\u4efb\u52a1,\u4f46\u5728\u8fd9\u91cc,\u5b83\u53ea\u662f\u7528\u4f5c\u50ac\u5316\u5242,\u6240\u4ee5\u4e0d\u4f1a\u88ab\u6d88\u8017.\u7535\u89e3\u786b\u9178\u950c,\u4f60\u53ef\u4ee5<br/>\u83b7\u5f97\u8fd4\u8fd8\u7684\u786b\u548c4000L\u6c27\u6c14."
                },
                {
                    "name": "\u6728\u536b\u56db\u4e4b\u65c5",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6728\u536b\u56db\u51b0\u77ff\u77f3.png",
                    "x": 348.0,
                    "y": 648.0,
                    "tooltip": "\u6728\u536b\u56db\u51b0\u662f4\u9636\u706b\u7bad\u6240\u9700\u7684\u6750\u6599. \u627e\u627eY=40-60.\u4f60\u8fd8\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u94c2\u7cfb\u77ff\u77f3\u548c\u653e\u5c04\u6027\u77ff\u77f3.\u8fd9\u91cc\u7684\u8d2b<br/>\u7620\u77ff\u53ef\u51fa\u4ea7\u6df1\u94c5\u548c\u6df1\u7a7a\u79d8\u94f6."
                },
                {
                    "name": "\u8c37\u795e\u661f\u4e4b\u65c5",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u786b\u94c2\u77ff\u77ff\u77f3.png",
                    "x": 276.0,
                    "y": 648.0,
                    "tooltip": "\u4f60\u53ef\u4ee5\u5728\u8c37\u795e\u661f\u4e0a\u627e\u5230\u6728\u536b\u56db\u4e0a\u9664\u53bb\u6728\u536b\u56db\u51b0\u4e4b\u5916\u7684\u5176\u4ed6\u77ff\u77f3,\u4f46\u771f\u6b63\u7684\u76ee\u6807\u662f\u5730\u7262\u548c\u8d2b\u7620\u77ff\uff1a\u7845\u5ca9\u548c\u91cf\u5b50.\u7845\u5ca9<br/>\u53ef\u7528\u4e8e\u5236\u9020\u66f4\u9ad8\u6548\u7684\u5355\u6676\u7845,\u4ee5\u53caZPM\u9636\u6bb5\u9700\u8981\u7528\u5230\u7684\u6210\u5428\u90e8\u4ef6.\u91cf\u5b50\u7528\u4e8e\u5236\u90205\u9636\u706b\u7bad\u4ee5\u53caGT\u4e2d\u6700\u9ad8\u901a\u91cf\u7684<br/>\u7269\u54c1\u7ba1\u9053.\u522b\u5fd8\u4e86\u5e26\u4e0a\u4f60\u7684\u91c7\u77ff\u573a,\u4ee5\u6700\u5927\u5316\u77ff\u77f3\u4ea7\u91cf."
                },
                {
                    "name": "\u5ec9\u4ef7\u7684\u4f4e\u538b\u7535\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5fae\u578b\u5904\u7406\u5668.png",
                    "x": 72.0,
                    "y": 564.0,
                    "tooltip": "\u4f7f\u7528IV\u7535\u8def\u7ec4\u88c5\u673a\u548cSoC,\u4f60\u73b0\u5728\u53ef\u4ee5\u4ee5\u66f4\u4f4e\u7684\u4ef7\u683c\u5236\u9020\u5fae\u578b\u5904\u7406\u5668.\u8bf7\u6ce8\u610f,\u8fd9\u79cd\u7535\u8def\u677f\u65e0\u6cd5\u5957\u5a03\u6210MV\u7535<br/>\u8def\u677f."
                },
                {
                    "name": "\u66f4\u4fbf\u5b9c\u7684MV\u7535\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u96c6\u6210\u5904\u7406\u5668.png",
                    "x": 24.0,
                    "y": 516.0,
                    "tooltip": "\u4f7f\u7528IV\u7535\u8def\u7ec4\u88c5\u673a\u548cSoC,\u4f60\u73b0\u5728\u53ef\u4ee5\u7528\u66f4\u4f4e\u7684\u6210\u672c\u5236\u9020\u96c6\u6210\u5904\u7406\u5668."
                },
                {
                    "name": "\u5316\u5b66\u6d78\u6d17!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u4e2d\u548c\u72ec\u5c45\u77f3\u7a00\u571f\u6ee4\u6e23\u7c89.png",
                    "x": 1332.0,
                    "y": 864.0,
                    "tooltip": "\u662f\u7684,\u8fd9\u771f\u662f\u4e00\u6761\u5168\u65b9\u4f4d\u7684\u5904\u7406\u7ebf.\u518d\u4e00\u6b21,\u4f60\u9700\u8981\u7528\u5230\u785d\u9178\u94f5. \u8fd9\u53ea\u662f\u518d\u6b21\u63d0\u9192\u90a3\u4e9b\u5c1a\u672a\u5236\u9020\u4e13\u95e8\u7684\u785d\u9178\u81ea\u52a8<br/>\u5316\u8bbe\u65bd\u7684\u73a9\u5bb6 :P"
                },
                {
                    "name": "IV\u5316\u5b66\u53cd\u5e94\u91dc",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u8fdb\u9636\u5316\u5b66\u53cd\u5e94\u91dc IV.png",
                    "x": 696.0,
                    "y": 480.0,
                    "tooltip": "\u9ad8\u7ea7\u5316\u5b66\u914d\u65b9\u9700\u8981IV\u5316\u5b66\u53cd\u5e94\u91dc.\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u7ed9\u4f60\u7684\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u6362\u4e0a\u4e24\u4e2aEV\u80fd\u6e90\u4ed3\u6216\u662f\u4e00\u4e2aIV\u80fd\u6e90\u4ed3<br/>....\u5728\u4f60\u5b8c\u6210\u94c2\u7cfb\u5904\u7406\u540e. \u73a9\u5f97\u5f00\u5fc3!\u5982\u679c\u4f60\u9519\u8fc7\u4e86\u8fd9\u4e9b\u4efb\u52a1,\u6216\u662f\u5fd8\u8bb0\u63d0\u4ea4,\u624b\u6301\u4e00\u7ec4\u94c2\u7ebf\u7684\u6700\u7ec8\u4ea7\u7269\u7c89<br/>,\u5373\u53ef\u8df3\u8fc7\u4e2d\u95f4\u7684\u4efb\u52a1.\u7c7b\u4f3c\u7684,\u4f60\u8fd8\u53ef\u4ee5\u8df3\u8fc7PBI,\u4f46\u8fd9\u56de\u4f60\u5f97\u62ff\u7740256\u4e2a."
                },
                {
                    "name": "\u4e09\u6c27\u5316\u94ec",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u4e09\u6c27\u5316\u94ec\u7c89.png",
                    "x": 852.0,
                    "y": 612.0,
                    "tooltip": "\u4e09\u6c27\u5316\u94ec\u5206\u4e24\u6b65\u7531\u94ec\u548c\u6c27\u5236\u6210. \u4f60\u9700\u8981\u5148\u5236\u5907\u51fa\u4e8c\u6c27\u5316\u94ec,\u7136\u540e\u624d\u80fd\u5236\u5907\u51fa\u4e09\u6c27\u5316\u94ec."
                },
                {
                    "name": "\u540c\u7c7b\u8005,\u805a\u96c6!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9507\u6eb6\u6db2\u5355\u5143.png",
                    "x": 828.0,
                    "y": 372.0,
                    "tooltip": "\u9178\u6027\u9507\u6eb6\u6db2\u6d53\u5ea6\u4e0d\u8db3\u4ee5\u76f4\u63a5\u63d0\u53d6\u51fa\u9507. \u4f7f\u7528\u84b8\u998f\u5854\u8fdb\u884c\u84b8\u998f,\u5c31\u53ef\u4ee5\u83b7\u5f97\u66f4\u6d53\u7f29\u7684\u9507\u6eb6\u6db2."
                },
                {
                    "name": "\u4e0e\u8349\u9178\u7ed3\u5408",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8349\u9178\u94c8\u7c89.png",
                    "x": 1416.0,
                    "y": 948.0,
                    "tooltip": "\u5c06\u83b7\u5f97\u7684\u6c2f\u5316\u94c8\u4e0e\u8349\u9178\u8fdb\u884c\u53cd\u5e94,\u5373\u53ef\u5236\u5f97\u8349\u9178\u94c8.\u800c\u8349\u9178\u94c8\u53ef\u4ee5\u5728\u7a0d\u540e\u8fdb\u884c\u7145\u70e7(\u5f53\u7136,\u662f\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u8fdb\u884c)<br/>,\u8f6c\u5316\u6210\u53e6\u4e00\u79cd\u94c8\u7684\u6c27\u5316\u7269--\u6c27\u5316\u94c8(III)."
                },
                {
                    "name": "\u00a7b\u00a7lConcentrated Samarium",
                    "symbolSize": 62.400000000000006,
                    "x": 996.0,
                    "y": 864.0,
                    "tooltip": "Precipitate samarium ions with oxalic acid. Samari<br/>um oxalate is then washed with hydrochloric acid; <br/>you get Impure Samarium Chloride as a result. This<br/> Samarium chloride dust is the base material for t<br/>he extraction of samarium.\n\nTo actually get Samari<br/>um Dust out of this, there are two methods, one is<br/> for IV, the other a bit later in LuV."
                },
                {
                    "name": "\u51b7\u9759\u4e00\u4e0b",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u56db\u6c27\u5316\u948c\u7c89.png",
                    "x": 828.0,
                    "y": 36.0,
                    "tooltip": "\u5728\u8fd9\u4e00\u6b65,\u4f60\u53ea\u9700\u8981\u5c06\u56db\u6c27\u5316\u948c\u901a\u8fc7\u4e00\u53f0\u6d41\u4f53\u56fa\u5316\u5668,\u628a\u5b83...\u56fa\u5316\u4e00\u4e0b."
                },
                {
                    "name": "\u7a00\u91ca,\u518d\u4e00\u6b21",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7a00\u91ca\u786b\u9178\u72ec\u5c45\u77f3\u6eb6\u6db2\u5355\u5143.png",
                    "x": 1164.0,
                    "y": 780.0,
                    "tooltip": "\u90a3\u4e9b\u786b\u9178\u76d0\u53ef\u4e0d\u4f1a\u81ea\u5df1\u7a00\u91ca!\u53ef\u4ee5\u4ece\u6bcf\u5757\u72ec\u5c45\u77f3\u4e2d\u83b7\u5f97\u66f4\u591a\u7684\u6d41\u4f53,\u4f60\u4e0d\u559c\u6b22\u4ec0\u4e48?"
                },
                {
                    "name": "\u90bb\u4e8c\u7532\u82ef",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u90bb\u4e8c\u7532\u82ef\u5355\u5143.png",
                    "x": 696.0,
                    "y": 612.0,
                    "tooltip": "\u90bb\u4e8c\u7532\u82ef\u53ef\u4ee5\u7528\u6728\u7126\u6cb9\u84b8\u998f\u6216\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u4f7f\u7528\u82ef\u548c\u7532\u70f7\u53cd\u5e94\u5408\u6210."
                },
                {
                    "name": "\u95f4\u82ef\u4e8c\u7532\u9178\u4e8c\u82ef\u916f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u95f4\u82ef\u4e8c\u7532\u9178\u4e8c\u82ef\u916f\u5355\u5143.png",
                    "x": 696.0,
                    "y": 696.0,
                    "tooltip": "\u6405\u62cc\u786b\u9178,\u90bb\u82ef\u4e8c\u7532\u9178\u548c\u82ef\u915a\u5f97\u5230\u95f4\u82ef\u4e8c\u7532\u9178\u4e8c\u82ef\u916f.\u9700\u8981IV\u5316\u5b66\u53cd\u5e94\u91dc."
                },
                {
                    "name": "\u6eb6\u89e3\u94f1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9178\u6027\u94f1\u6eb6\u6db2\u5355\u5143.png",
                    "x": 828.0,
                    "y": 120.0,
                    "tooltip": "\u7528\u6c22\u6c2f\u9178\u6eb6\u89e3\u4e8c\u6c27\u5316\u94f1,\u5236\u5f97\u9178\u6027\u94f1\u6eb6\u6db2."
                },
                {
                    "name": "\u70d8\u5e72\u771f\u68d2",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5e72\u71e5\u6d53\u7f29\u785d\u9178\u72ec\u5c45\u77f3\u7a00\u571f\u7c89.png",
                    "x": 1164.0,
                    "y": 864.0,
                    "tooltip": "\u4f60\u7684\u6d53\u7f29\u7c89\u5b9e\u5728\u592a\u6f6e\u6e7f\u4e86!\u9700\u8981\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u70d8\u5e72\u5b83\u4eec.\u8c22\u5929\u8c22\u5730,\u8fd9\u79cd\u52a0\u5de5\u5e76\u4e0d\u56f0\u96be."
                },
                {
                    "name": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u95f4",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u4f4e\u7eaf\u94ea\u7c89.png",
                    "x": 1248.0,
                    "y": 612.0,
                    "tooltip": "\u5904\u7406\u7684\u4e0b\u4e00\u6b65,\u5c31\u662f\u5c06\u4f60\u5236\u5f97\u7684\u6eb6\u6db2\u914d\u5408\u9541\u7c89,\u653e\u5165\u5de5\u4e1a\u9ad8\u7089\u4e2d\u8fdb\u884c\u7145\u70e7."
                },
                {
                    "name": "\u6c27\u5316\u94d5(EuO)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6c27\u5316\u94d5\u7c89.png",
                    "x": 1164.0,
                    "y": 1116.0,
                    "tooltip": "\u7ec8\u4e8e,\u5df2\u7ecf\u5f88\u63a5\u8fd1\u72ec\u5c45\u77f3\u4e2d\u7684\u94d5\u4e86!\u4e0d\u8fc7,\u4f60\u5f97\u5230LuV/ZPM\u9636\u6bb5\u624d\u80fd\u5904\u7406\u5b83\u4eec,\u4e5f\u6709\u53ef\u80fd\u4f60\u5df2\u7ecf\u5728\u8fd9\u4e2a\u9636\u6bb5<br/>\u4e86,\u6240\u4ee5\u7ee7\u7eed\u524d\u8fdb\u5427."
                },
                {
                    "name": "\u6728\u536b\u4e8c\u4e4b\u65c5",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6df1\u94c5\u77ff\u77f3.png",
                    "x": 276.0,
                    "y": 492.0,
                    "tooltip": "\u4f60\u5728\u6728\u536b\u4e8c\u4e0a\u53ef\u4ee5\u627e\u5230\u6df1\u94c5,\u5b83\u662f4\u9636\u706b\u7bad\u6240\u9700\u7684\u6750\u6599. \u627e\u627eY=55-65.\u4f60\u8fd8\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u94ec\u3001\u94bc\u3001\u9530<br/>\u3001\u94a8\u9178\u9502\u548c\u8910\u94dc\u7b49\u7b49.\u6728\u536b\u56db\u4e0a\u7684\u8d2b\u7620\u77ff\u4e5f\u53ef\u4ee5\u51fa\u4ea7\u6df1\u94c5."
                },
                {
                    "name": "\u66f4\u66f4\u597d\u7684\u78c1\u5316\u6746",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8fdb\u9636\u4e24\u6781\u78c1\u5316\u673a IV.png",
                    "x": 264.0,
                    "y": 444.0,
                    "tooltip": "\u4e0e\u4e4b\u524d\u7c7b\u4f3c,\u4e0b\u4e00\u9636\u6bb5\u7684\u9a6c\u8fbe\u9700\u8981\u66f4\u597d\u7684\u78c1\u5316\u6746. \u60f3\u8981\u5236\u9020\u78c1\u5316\u9490\u6746,\u4f60\u5f97\u5148\u505a\u597d\u8fd9\u4e2a."
                },
                {
                    "name": "\u9700\u8981\u66f4\u591a\u7684\u6c2f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6c2f\u5316\u94f1\u7c89.png",
                    "x": 744.0,
                    "y": 120.0,
                    "tooltip": "\u5c06\u9178\u6027\u94f1\u6eb6\u6db2\u4e0e\u6c2f\u5316\u94f5\u6df7\u5408,\u4f60\u5c06\u83b7\u5f97\u4e00\u4e9b\u6c2f\u5316\u94f1,\u800c\u6c2f\u5316\u94f1\u5f88\u5bb9\u6613\u5904\u7406\u6210\u94f1.\u4f60\u5feb\u5b8c\u6210\u4e86."
                },
                {
                    "name": "\u6700\u540e,\u771f\u6b63\u7684\u94ea",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u94ea\u952d.png",
                    "x": 1416.0,
                    "y": 612.0,
                    "tooltip": "\u5230\u73b0\u5728\u4e3a\u6b62\u8fd8\u633a\u7b80\u5355\u7684\u5bf9\u5427?\u540c\u65f6\u4f60\u8fd8\u53ef\u4ee5\u56de\u6536\u4e00\u534a\u7684\u7898.\u53e6\u5916,\u6240\u8c13\u5e9f\u6599\u4e5f\u522b\u6254\u4e86.\u4e4b\u540e\u53ef\u80fd\u8fd8\u4f1a\u6709\u7528,\u7279\u522b\u662f<br/>\u5982\u679c\u6709\u4eba\u7ed9\u51fa\u597d\u7684\u601d\u8def wink wink nudge nudge"
                },
                {
                    "name": "\u6700\u540e,\u9490!",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u9490\u952d.png",
                    "x": 1500.0,
                    "y": 1116.0,
                    "tooltip": "(\u4ee5\u53ca\u9486)\u7b80\u5355\u5427?\u522b\u62c5\u5fc3,\u8fd8\u6709\u6c1f\u78b3\u9567\u94c8\u5904\u7406\u7ebf\u7b49\u7740\u4f60\u5462,\u5e94\u8be5\u80fd\u6ee1\u8db3\u4f60\u5bf9\u590d\u6742\u4ea7\u7ebf\u7684\u6e34\u671b\u5427!"
                },
                {
                    "name": "\u6700\u540e\u4e00\u6b21\u5206\u79bb-\u94f1&\u9507",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9178\u6027\u9507\u6eb6\u6db2\u5355\u5143.png",
                    "x": 828.0,
                    "y": 288.0,
                    "tooltip": "\u9507\u548c\u94f1\u7684\u63d0\u53d6\u975e\u5e38\u68d8\u624b.\u4f60\u9700\u8981\u52a0\u70ed\u5e76\u4f7f\u7528\u6c22\u6c2f\u9178\u624d\u80fd\u5c06\u5176\u4ece\u7a00\u6709\u91d1\u5c5e\u6e23\u4e2d\u63d0\u53d6\u51fa\u6765,\u4e0d\u8fc7\u6211\u4eec\u5df2\u7ecf\u63a5\u8fd1\u5c3e\u58f0\u4e86."
                },
                {
                    "name": "\u7b2c\u4e00\u6b21\u5206\u79bb-\u94d1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u786b\u9178\u94d1\u5355\u5143.png",
                    "x": 996.0,
                    "y": 372.0,
                    "tooltip": "\u94c2\u7cfb\u5904\u7406\u7ebf(\u7b80\u79f0\u94c2\u7ebf)\u662f\u4e00\u4e2a\u591a\u6b65\u7684,\u590d\u6742\u7684\u94fe\u5f0f\u8fc7\u7a0b. \u9274\u4e8e\u5b83\u7684\u590d\u6742\u6027,\u4ee5\u53ca\u5bf9\u94c2\u7cfb\u91d1\u5c5e\u7684\u5927\u91cf\u9700\u6c42,\u5efa\u8bae<br/>\u642d\u5efa\u4e00\u4e2a\u81ea\u52a8\u5316\u751f\u4ea7\u7ebf\u4e00\u76f4\u8fd0\u884c. \u770b\u4e86\u8fd9\u4e9b\u4efb\u52a1\u4e4b\u540e,\u4f60\u5e94\u8be5\u80fd\u66f4\u597d\u5730\u7406\u89e3\u8fd9\u4e00\u70b9. \u4e5f\u6709\u53ef\u80fd\u4f60\u5df2\u7ecf\u642d\u597d\u4e86,<br/>\u90a3\u4e48\u5c31\u62bd\u51fa\u4ea7\u7269\u5b8c\u6210\u4efb\u52a1\u5427,\u968f\u4f60\u600e\u4e48\u529e.\u4f5c\u4e3a\u83b7\u53d6\u94d1\u3001\u948c\u3001\u94f1\u548c\u9507\u7684\u7b2c\u4e00\u6b65,\u6211\u4eec\u9700\u8981\u5c06\u94d1\u4e0e\u5176\u4ed6\u91d1\u5c5e\u5206\u79bb,\u501f<br/>\u52a9\u4e4b\u524d\u751f\u4ea7\u7684\u7126\u786b\u9178\u94be,\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u5c06\u5176\u84b8\u53d1\u4e3a\u6c14\u6001\u6df7\u5408\u7269.\u8fd9\u4e00\u6b65\u5904\u7406\u6d41\u4f53\u7684\u91cf\u975e\u5e38\u70e6\u4eba,\u90fd\u602aBart.\u6ce8<br/>\u610f:\u8bb0\u5f97\u5728\u5e95\u90e8\u653e\u4e0a\u8f93\u51fa\u4ed3!"
                },
                {
                    "name": "\u6c14\u4f53\u53d8\u6210\u6db2\u4f53",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u786b\u9178\u94d1\u6eb6\u6db2\u5355\u5143.png",
                    "x": 1080.0,
                    "y": 372.0,
                    "tooltip": "\u5c06\u786b\u9178\u94d1\u6eb6\u89e3\u5230\u6c34\u4e2d,\u83b7\u5f97\u786b\u9178\u94d1\u6eb6\u6db2,\u4ee5\u53ca\u4e00\u4e9b\u6d78\u51fa\u6e23\u548c\u7194\u878d\u94be.\u4f60\u53ef\u4ee5\u56de\u6536\u5927\u6982\u76f8\u5f53\u4e8e13\u4e2a\u952d\u7684\u94be,\u9700\u8981\u6d41<br/>\u4f53\u56fa\u5316\u518d\u6253\u7c89,\u4ee5\u5907\u518d\u6b21\u4f7f\u7528."
                },
                {
                    "name": "\u51b7\u51bb\u785d\u9178\u76d0",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6d53\u7f29\u785d\u9178\u72ec\u5c45\u77f3\u6d78\u51fa\u6eb6\u6db2\u5355\u5143.png",
                    "x": 1248.0,
                    "y": 1116.0,
                    "tooltip": "\u662f\u7684,\u4f60\u6ca1\u770b\u9519\uff1a\u4e00\u6761\u5e26\u771f\u7a7a\u51b7\u51bb\u673a\u7684\u5904\u7406\u7ebf!\u60f3\u8981\u5206\u79bb\u67d0\u4e9b\u66f4...\u987d\u56fa\u7684\u5143\u7d20,\u9700\u8981\u6781\u5ea6\u4f4e\u6e29."
                },
                {
                    "name": "\u00a7b\u00a7lGetting Samarium in IV",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9490\u7c89.png",
                    "x": 948.0,
                    "y": 948.0,
                    "tooltip": "Mix Samarium chloride dust with Salt. Electrolyze <br/>the result and the Samarium dust will be separated<br/> out.\n\nSodium and chlorine can also be fully recov<br/>ered.\n\nYou also get some additional residue. It do<br/>es not have any uses currently but might be useful<br/> in the future."
                },
                {
                    "name": "\u00a7b\u00a7lGetting Samarium in LuV",
                    "symbolSize": 62.400000000000006,
                    "x": 1044.0,
                    "y": 948.0,
                    "tooltip": "Once you get ZPM tier power (2 LuV energy hatches)<br/>, this method is much better.\n\nMelt the Samarium C<br/>hloride and reduce it with Lanthanum in a Distilla<br/>tion Tower. Then recover Lanthanum Chloride by ele<br/>ctrolysis."
                },
                {
                    "name": "\u53d1\u5149\u7269\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u591c\u5149\u73ca\u745a.png",
                    "x": 216.0,
                    "y": 444.0,
                    "tooltip": "\u53e6\u4e00\u79cd\u83b7\u53d6\u9633\u5149\u5316\u5408\u7269\u7684\u65b9\u6cd5\uff1a\u53ea\u9700\u8981\u628a\u4e00\u5806\u5806\u591c\u5149\u73ca\u745a\u914d\u5408\u4e0a\u4e00\u70b9\u70b9UU\u7269\u8d28,\u4e00\u8d77\u4e22\u8fdb\u9ad8\u538b\u91dc\u4e2d,\u7136\u540e\u770b\u8138.<br/>\u4f60\u53ef\u4ee5\u4f7f\u7528IC2\u4f5c\u7269\u519c\u573a,\u6216\u662f\u7528\u4efb\u4f55\u79cd\u7c7b\u7684\u8424\u77f3\u519c\u573a\u914d\u5408GT++\u85fb\u7c7b\u519c\u573a.\u53e6\u5916,\u5982\u679c\u80fd\u591f\u5145\u5206\u5229\u7528\u591c\u5149\u73ca<br/>\u745a\u6216\u662f\u8424\u77f3,\u4f60\u5c31\u53ef\u4ee5\u65e0\u9650\u83b7\u53d6\u7c7b\u4f3c\u91d1\u3001\u7ea2\u77f3\u3001\u6c5e,\u7b49\u7b49\u8d44\u6e90.\u5927\u578b\u52a0\u5de5\u5382\u53ef\u4ee5\u5927\u5927\u52a0\u5feb\u5904\u7406\u901f\u5ea6,\u4e0d\u8fc7\u5b83\u7684\u9020\u4ef7<br/>\u4e5f\u540c\u6837\u9ad8\u6602."
                },
                {
                    "name": "\u94ea\u5904\u7406\u7ebf",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u56db\u6c2f\u5316\u94ea\u7c89.png",
                    "x": 1164.0,
                    "y": 612.0,
                    "tooltip": "\u94ea\u5904\u7406\u5728\u6b64\u5b58\u5728\u5173\u952e\u5206\u652f.\u4f9d\u5faa\u8fd9\u4e00\u6761\u5c0f\u4efb\u52a1\u7ebf\u53ef\u4ee5\u83b7\u5f97\u66f4\u591a\u4fe1\u606f.\u9996\u5148,\u4f60\u9700\u8981\u5c06\u6c27\u5316\u94ea\u4e0e\u6c22\u6c2f\u9178\u653e\u5728\u4e00\u8d77\u53cd\u5e94<br/>.\u7136\u540e,\u7c7b\u4f3c\u9506,\u66f4\u591a\u7528\u5230\u7684\u662f\u6eb6\u6db2\u800c\u975e\u7c89\u672b."
                },
                {
                    "name": "\u52a0\u70ed!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u70ed\u56db\u6c27\u5316\u948c\u6eb6\u6db2\u5355\u5143.png",
                    "x": 912.0,
                    "y": 120.0,
                    "tooltip": "\u83b7\u53d6\u70ed\u56db\u6c27\u5316\u948c\u6eb6\u6db2\u6709\u4e24\u79cd\u65b9\u5f0f,\u6d41\u4f53\u52a0\u70ed\u5668\u6216\u8005\u77f3\u6cb9\u88c2\u5316\u673a\u90fd\u884c,\u4e0d\u8fc7\u88c2\u5316\u673a\u7684\u51fa\u4ea7\u662f\u52a0\u70ed\u5668\u7684\u4e24\u500d,\u6240\u4ee5\u5efa\u8bae<br/>\u4f7f\u7528\u88c2\u5316\u673a.\u81ea\u52a8\u5316\u65f6,\u4e24\u6b65\u4e4b\u524d\u56de\u6536\u7684\u84b8\u6c7d\u53ea\u67092/9\u6876,\u5269\u4e0b\u7684\u84b8\u6c7d\u5efa\u8bae\u7528\u6d41\u4f53\u52a0\u70ed\u5668\u8865\u5145."
                },
                {
                    "name": "HSS-S",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9ad8\u901f\u94a2-S\u952d.png",
                    "x": 624.0,
                    "y": 288.0,
                    "tooltip": "\u73b0\u5728\u4f60\u6709\u4e86HSS-G,\u662f\u65f6\u5019\u5236\u4f5cHSS-S\u4e86. \u8fd9\u79cd\u65b0\u578b\u5408\u91d1\u662f\u8bb8\u591aLuV\u914d\u65b9\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206."
                },
                {
                    "name": "\u00a7b\u00a7lIntradimensional Input buses",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5171\u4eab\u8f93\u5165\u603b\u7ebf.png",
                    "x": 84.0,
                    "y": 420.0,
                    "tooltip": "This Special bus is rather pricey however it will <br/>allow all items that are in the bus to be accessib<br/>le in all other linked buses in the same dimension<br/>. \n\nThis would allow multiple machines to work fro<br/>m the same input of items. \n\nWhile holding a data <br/>stick the configuration settings can be copied wit<br/>h a left click and pasted with a right click on th<br/>e bus.\n"
                },
                {
                    "name": "\u6728\u536b\u4e00\u4e4b\u65c5",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u70e7\u7eff\u77f3\u77ff\u77f3.png",
                    "x": 420.0,
                    "y": 696.0,
                    "tooltip": "\u6b64\u9636\u6bb5\u7684\u77ff\u8109,\u5982\u679c\u5728\u6c34\u661f\u4e0a\u627e\u4e0d\u5230,\u90a3\u4e48\u5728\u6728\u536b\u4e00\u4e0a\u80af\u5b9a\u53ef\u4ee5\u627e\u5230. \u8f6f\u9530\u77ff\u8109\u53ef\u51fa\u4ea7\u94cc,\u800c\u6df1\u7a7a\u79d8\u94f6\u548c\u8910\u94dc\u53ef<br/>\u4ee5\u51fa\u4ea7\u9490.\u5728\u8fd9\u91cc\u8fd8\u53ef\u4ee5\u627e\u5230\u6ce8\u9b54\u91d1\u77ff\u8109.\u4e0e\u91d1\u661f\u7c7b\u4f3c,\u8fd9\u91cc\u8fd8\u6709\u706b\u77f3\u7684\u8d2b\u7620\u77ff."
                },
                {
                    "name": "\u94f1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94f1\u7c89.png",
                    "x": 624.0,
                    "y": 204.0,
                    "tooltip": "\u5c06\u9499\u6dfb\u52a0\u5230\u6c2f\u5316\u94f1\u4e2d,\u6700\u7ec8\u5f97\u5230\u7eaf\u51c0\u7684\u94f1.\u5269\u4e0b\u7684\u91d1\u5c5e\u6ce5\u6e23\u7c89\u53ef\u4ee5\u4e22\u5230\u79bb\u5fc3\u673a\u4e2d,\u83b7\u53d6\u954d\u548c\u94dc,\u540c\u65f6\u6c2f\u5316\u9499\u5728\u8fdb\u884c<br/>\u7535\u89e3\u4e4b\u524d,\u9700\u8981\u5148\u5728\u6d41\u4f53\u56fa\u5316\u5668\u4e2d\u8fdb\u884c\u56fa\u5316,\u7535\u89e3\u540e\u83b7\u5f97\u9499\u548c\u6c2f.\u53e6\u5916,\u8fd9\u4e00\u6b65\u9700\u8981EV,\u4e5f\u662f\u94f1\u5904\u7406\u552f\u4e00\u9700\u8981E<br/>V\u7684\u4e00\u6b65,\u6240\u4ee5\u5982\u679c\u4f60\u5728\u4e4b\u524d\u5c31\u9700\u8981\u94f1\u7684\u8bdd,\u53ef\u4ee5\u65e9\u65e9\u5f00\u59cb."
                },
                {
                    "name": "IV\u7ec4\u88c5\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8fdb\u9636\u7ec4\u88c5\u673a IV.png",
                    "x": 432.0,
                    "y": 204.0,
                    "tooltip": "\u60f3\u8981\u5236\u4f5c\u65b0\u7ebf\u5708,\u6216\u662fHV\u592a\u9633\u80fd\u8986\u76d6\u677f,\u4f60\u9700\u8981\u5bcc\u96c6\u9633\u5149\u5316\u5408\u7269,\u505a\u4e00\u53f0IV\u7ec4\u88c5\u673a\u5427!  \u5b83\u6bd4EV\u7ec4\u88c5\u673a\u5feb<br/>\u4e00\u500d."
                },
                {
                    "name": "IV\u7535\u8def\u7ec4\u88c5\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a IV.png",
                    "x": 24.0,
                    "y": 468.0,
                    "tooltip": "IV\u7535\u8def\u7ec4\u88c5\u673a\u53ef\u4ee5\u8ba9\u4f60\u8f7b\u677e\u5236\u4f5cMV\u7535\u8def\u677f,\u4ee5\u53ca\u5355\u6b65EV\u7535\u8def\u677f."
                },
                {
                    "name": "IV\u80fd\u6e90\u4ed3",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/IV\u80fd\u6e90\u4ed3.png",
                    "x": 516.0,
                    "y": 204.0,
                    "tooltip": "\u4e3a\u4f60\u7684\u591a\u65b9\u5757\u673a\u5668\u5347\u7ea7\u80fd\u6e90\u540c\u65f6\u63a8\u8fdb\u79d1\u6280\u53d1\u5c55.\u4f60\u9700\u8981\u7528\u9492\u9553\u5408\u91d1\u5236\u9020\u9ad8\u529f\u7387IC\u6676\u5706,\u7136\u540e\u7528IV\u5207\u5272\u673a\u5904\u7406(<br/>\u8981\u662f\u4f60\u6ca1\u505a\u5de5\u4e1a\u5207\u5272\u673a\u7684\u8bdd).\u5e0c\u671b\u94c2\u7cfb\u8ba9\u4f60\u73a9\u5f97\u5f00\u5fc3,lol."
                },
                {
                    "name": "IV\u6405\u62cc\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8fdb\u9636\u6405\u62cc\u673a IV.png",
                    "x": 516.0,
                    "y": 372.0,
                    "tooltip": "IV\u6405\u62cc\u673a\u53ef\u4ee5\u6405\u62cc\u9ad8\u901f\u94a2-S\u7c89\u7b49\u5408\u91d1,\u4e5f\u662f\u5236\u4f5cIV\u8d85\u5bfc\u6240\u5fc5\u9700\u7684.\u4f60\u4e5f\u53ef\u4ee5\u68c0\u67e5GT++\u4efb\u52a1\u9875,\u5e76\u505a\u4e00\u4e2a<br/>\u591a\u65b9\u5757\u6405\u62cc\u673a."
                },
                {
                    "name": "IV\u8d85\u5bfc(8192 EU/t)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/1xIV\u8d85\u5bfc\u5bfc\u7ebf.png",
                    "x": 516.0,
                    "y": 288.0,
                    "tooltip": "\u65e0\u635f\u7684IV\u8d85\u5bfc\u5bfc\u7ebf\u600e\u4e48\u6837\uff1fVanadiumtriindinide(IV\u8d85\u5bfc)\u662f\u4e00\u79cd\u8d85\u5bfc\u6750\u6599,\u53ef\u4ee5\u6beb\u65e0<br/>\u635f\u5931\u5730\u4f20\u9012\u80fd\u91cf. \u73b0\u5728\u6bcf\u4e2a\u7535\u538b\u90fd\u6709\u7ebf\u635f\u4e3a0\u7684\u8d85\u5bfc\u5bfc\u7ebf.\u5728\u9ad8\u538b\u6405\u62cc\u673a\u4e2d\u6405\u62cc\u9492\u548c\u94df. \u5236\u5f97\u7684\u7c97\u80da\u7c89\u9700\u8981\u7528<br/>\u5e26\u6709HSS-G\u7ebf\u5708\u7684\u5de5\u4e1a\u9ad8\u7089(EBF)\u70e7\u5236. \u518d\u7528\u771f\u7a7a\u51b7\u51bb\u673a\u6765\u51b7\u5374\u5b83. \u5236\u9020\u4e00\u4e9bIV\u8d85\u5bfc\u7c97\u80da\u5bfc\u7ebf\u5e76\u4f7f<br/>\u7528\u7ec4\u88c5\u673a\u5c06\u8fd9\u4e9b\u7ebf\u4e0e\u6c26\u548c\u94cc\u949b\u6d41\u4f53\u7ba1\u9053\u548cIV\u6cf5\u7ec4\u5408\u5728\u4e00\u8d77,\u4ee5\u83b7\u5f97\u4f60\u76848192EU/t\u8d85\u5bfc\u5bfc\u7ebf.\u81eaIV\u4ee5\u4e0a<br/>,\u8d85\u5bfc\u5bfc\u7ebf\u5c06\u52a0\u5165\u4e00\u4e9b\u5408\u6210\u4e2d,\u6210\u4e3a\u5f3a\u5236\u8981\u6c42."
                },
                {
                    "name": "\u7ee7\u7eed\u710a\u63a5!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94cb\u94c5\u5408\u91d1140\u5355\u5143.png",
                    "x": 348.0,
                    "y": 120.0,
                    "tooltip": "\u4e00\u6bb5\u65f6\u95f4\u4ee5\u6765,\u4f60\u4e00\u76f4\u5728\u4f7f\u7528\u4e00\u79cd\u975e\u5e38\u57fa\u7840\u7684\u710a\u6599\u5408\u91d1.\u662f\u65f6\u5019\u5347\u7ea7\u4e86! \u8fd9\u79cd\u710a\u6599\u4f1a\u7528\u4e8e\u88c5\u914d\u7ebf\u5408\u6210\u914d\u65b9."
                },
                {
                    "name": "\u6d78\u51fa\u6d53\u7f29\u7269",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u785d\u9178\u72ec\u5c45\u77f3\u6d78\u51fa\u6df7\u5408\u7269\u5355\u5143.png",
                    "x": 1164.0,
                    "y": 1032.0,
                    "tooltip": "\u8fd9\u91cc\u6709\u4e24\u4e2a\u9009\u62e9\uff1a\u4f60\u53ef\u4ee5\u5c06\u785d\u9178\u6d78\u51fa\u6df7\u5408\u7269\u4e0e\u6c34\u6df7\u5408,\u5f97\u5230\u76f8\u5bf9\u8f83\u4f4e\u7684\u4ea7\u7387;\u6216\u662f\u9009\u62e9\u628a\u6c34\u6362\u6210\u5bcc\u94c8\u6df7\u5408\u7269,\u5f97\u5230<br/>\u53cc\u500d\u7684\u4ea7\u7387."
                },
                {
                    "name": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5408\u91d1\u51b6\u70bc\u7089.png",
                    "x": 348.0,
                    "y": 204.0,
                    "tooltip": "\u6216\u8005\u662f\u5408\u91d1\u51b6\u70bc\u7089(Alloy Blast Smelter)\uff1f \u55ef,\u660e\u767d\u4e9b\u4e86. \u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u751f\u4ea7<br/>\u66f4\u5148\u8fdb\u7684GT++\u591a\u65b9\u5757,\u4ee5\u53ca\u9ad8\u7ea7\u710a\u6599\u6240\u9700\u7684\u9ad8\u7ea7\u5408\u91d1. \u5b83\u76f4\u63a5\u5c06\u91d1\u5c5e\u7194\u70bc\u6210\u6db2\u4f53. \u8fd9\u53f0\u673a\u5668\u751a\u81f3\u53ef\u4ee5\u66f4\u5feb<br/>\u5730\u7194\u5316\u94a8\u4e4b\u7c7b\u7684\u91d1\u5c5e! \u81f3\u5c11\u5728\u4f60\u7ed9\u5de5\u4e1a\u9ad8\u7089\u66f4\u6362\u66f4\u9ad8\u7ea7\u7ebf\u5708\u4e4b\u524d\u662f\u8fd9\u6837\u7684.\u53ea\u63a5\u53d71\u4e2a\u80fd\u6e90\u4ed3.\u73b0\u5728\u4f60\u89e3\u9501\u7684G<br/>T++\u591a\u65b9\u5757\u673a\u5668\u662f\u53ef\u9009\u7684,\u4e0d\u8fc7\u5b83\u4eec\u5747\u4e3a\u73b0\u6709\u5355\u65b9\u5757\u673a\u5668\u7684\u8d85\u5f3a\u5347\u7ea7.\u4e0d\u6b62\u63d0\u4f9b\u4e86\u66f4\u5feb\u7684\u901f\u5ea6,\u8fd8\u6709\u4e00\u4e9b\u9ad8\u7ea7\u529f<br/>\u80fd\uff1a\u6bd4\u5982\u65e0\u9700\u5355\u5143\u5373\u53ef\u7535\u89e3\u5316\u5408\u7269,\u4e00\u53f0\u591a\u65b9\u5757\u673a\u5668\u5373\u53ef\u652f\u6301\u8bb8\u591a\u4e0d\u540c\u6a21\u5934.\u5b83\u4eec\u8fd8\u81ea\u5e26\u8d85\u51c0\u95f4\u548c\u4f4e\u91cd\u529b\u73af\u5883."
                },
                {
                    "name": "\u5927\u578b\u91cf\u5b50\u7535\u8111",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5927\u578b\u91cf\u5b50\u7535\u8111.png",
                    "x": 144.0,
                    "y": 204.0,
                    "tooltip": "\u5927\u578b\u91cf\u5b50\u7535\u8111\u662f\u4e00\u4e2aLuV\u7535\u8def\u677f."
                },
                {
                    "name": "\u6c34\u661f\u4e4b\u65c5",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94f1\u77ff\u77f3.png",
                    "x": 420.0,
                    "y": 780.0,
                    "tooltip": "\u8fd9\u4e2a\u661f\u7403\u4e0a\u552f\u4e00\u6709\u8da3\u7684\u77ff\u77f3\u662f\u6765\u81ea\u8d2b\u7620\u77ff\u7684\u6df1\u6e0a\u94c1.\u591a\u6536\u96c6\u70b9\u5427,\u4f60\u9700\u8981\u4ece\u4e2d\u83b7\u53d6\u4e09\u5143\u91d1\u5c5e."
                },
                {
                    "name": "\u72ec\u5c45\u77f3",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u72ec\u5c45\u77f3.png",
                    "x": 1080.0,
                    "y": 612.0,
                    "tooltip": "\u6b22\u8fce\u6765\u5230\u9567\u7cfb\u5904\u7406!\u8fd9\u5c06\u662f\u4e00\u6b21\u6709\u8da3\u7684\u65c5\u884c,\u4e0d\u7ba1\u4f60\u559c\u6b22\u4e0e\u5426 :P\u9996\u5148\u83b7\u5f97\u4e00\u4e9b\u72ec\u5c45\u77f3,\u5f53\u7136\u8fd9\u53ea\u591f\u5f00\u59cb,\u56e0\u4e3a<br/>\u540e\u9762\u4f60\u4f1a\u9700\u8981\u6210\u5428\u7684\u72ec\u5c45\u77f3\u624d\u80fd\u771f\u6b63\u83b7\u5f97\u8fd9\u6761\u4efb\u52a1\u7ebf\u7684\u6240\u6709\u5956\u52b1.\u7136\u540e,\u4f60\u9700\u8981\u5c06\u72ec\u5c45\u77f3\u4e0e\u785d\u9178\u5728\u716e\u89e3\u6c60\u5185\u6df7\u5408,<br/>\u83b7\u5f97\u5176\u6d4a\u6eb6\u6db2.\u662f\u7684\u6ca1\u9519,\u9567\u7cfb\u5904\u7406\u975e\u5e38\u6d88\u8017\u785d\u9178!"
                },
                {
                    "name": "\u00a7b\u00a7lMore Samarium !",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9490\u7a00\u571f\u6d4a\u6db2\u5355\u5143.png",
                    "x": 996.0,
                    "y": 780.0,
                    "tooltip": "If you have a stable Samarium resource acquisition<br/>, refining Samarium Ore should be the best way to <br/>get Samarium.\n\nAs the first step, disolve some Sam<br/>arium Ore Concentrate Dust or Crushed Samarium Ore<br/> (you probably don't have access to this option ye<br/>t) in Nitric Acid in a Digester to get Muddy Samar<br/>ium Rare Earth Solution. Thorium and Phosphate are<br/> retained in the form of a solid slag powder. \n\nTh<br/>en transfer the muddy solution to a Dissolution Ta<br/>nk and continue to soak it in nitric acid. The und<br/>issolved powder is then meticulously filtered out,<br/> yielding some Cerium.\n\nThen dilute the result wit<br/>h water to adjust the pH."
                },
                {
                    "name": "\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u7845",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u7845.png",
                    "x": 108.0,
                    "y": 648.0,
                    "tooltip": "\u8981\u5236\u9020\u66f4\u5148\u8fdb\u7684\u6676\u5706,\u9996\u5148\u9700\u8981\u5236\u4f5c\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u7845. \u8be5\u8fc7\u7a0b\u9700\u8981750\u79d2,\u5e76\u4e14\u9700\u8981\u5c06\u592a\u9633\u80fd\u7ea7\u7845\u5757\u3001\u7845\u5ca9<br/>\u952d\u548c\u7837\u5316\u9553\u6676\u4f53\u653e\u5165\u5de5\u4e1a\u9ad8\u7089\u4e2d\u8fdb\u884c\u7194\u70bc. \u4f60\u53ef\u4ee5\u4ece\u6bcf\u4e2a\u5355\u6676\u7845\u4e2d\u5207\u5272\u83b7\u5f9764\u4e2a\u6676\u5706."
                },
                {
                    "name": "\u7845\u5ca9\u63ba\u6742\u7684\u6676\u5706",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7845\u5ca9\u63ba\u6742\u7684\u6676\u5706.png",
                    "x": 24.0,
                    "y": 648.0,
                    "tooltip": "\u4e3a\u4e86\u5236\u9020\u4e00\u4e9b\u7845\u5ca9\u63ba\u6742\u7684\u6676\u5706,\u5c06\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u7845\u7f6e\u4e8e\u5207\u5272\u673a\u4e2d. \u8fd9\u79cd\u5148\u8fdb\u7684\u6676\u5706\u548c\u82af\u7247\u9700\u8981HV\u5207\u5272\u673a."
                },
                {
                    "name": "\u94cc\u949b\u5408\u91d1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94cc\u949b\u5408\u91d1\u952d.png",
                    "x": 432.0,
                    "y": 288.0,
                    "tooltip": "\u5728LuV\u9636\u6bb5,\u94cc\u949b\u5408\u91d1\u53d8\u5f97\u975e\u5e38\u91cd\u8981.\u5b83\u9700\u8981EV\u6405\u62cc\u673a\u548c\u62e5\u6709\u949b\u94c2\u9492\u7ebf\u5708\u7684\u5de5\u4e1a\u9ad8\u7089\u5236\u4f5c."
                },
                {
                    "name": "\u785d\u9178\u6df7\u9178",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u785d\u9178\u6df7\u9178\u5355\u5143.png",
                    "x": 528.0,
                    "y": 612.0,
                    "tooltip": "\u6211\u4eec\u8fd8\u9700\u8981\u785d\u9178\u6df7\u9178. \u6211\u4eec\u53ef\u4ee5\u7528\u785d\u9178\u548c\u786b\u9178\u6765\u5236\u4f5c."
                },
                {
                    "name": "\u785d\u5316\u65f6\u95f4...\u518d\u4e00\u6b21",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6d53\u7f29\u6c2e\u5316\u72ec\u5c45\u77f3\u7a00\u571f\u6eb6\u6db2\u5355\u5143.png",
                    "x": 1164.0,
                    "y": 948.0,
                    "tooltip": "\u60f3\u8981\u8fdb\u4e00\u6b65\u5904\u7406\u8fd9\u4e9b\u5e72\u71e5\u7c89,\u4f60\u8fd8\u9700\u8981\u6295\u5165\u66f4\u591a\u785d\u9178."
                },
                {
                    "name": "\u94c1\u78c1\u6027\u4e0d\u592a\u5f3a...",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u51b7\u5374\u6d53\u7f29\u785d\u9178\u72ec\u5c45\u77f3\u7a00\u571f\u7c89.png",
                    "x": 1332.0,
                    "y": 1116.0,
                    "tooltip": "...\u4f46\u662f\u8db3\u591f\u7535\u78c1\u79bb\u6790\u673a\u5c06\u5176\u5206\u79bb.\u73b0\u5728,\u4f60\u83b7\u5f97\u4e86\u6c27\u5316\u94d5\u548c\u4e00\u4e9b\u66f4\u7a00\u6709\u7684\u7a00\u571f,\u6211\u4eec\u79f0\u4e4b\u4e3a\u7f55\u571f."
                },
                {
                    "name": "\u73b0\u5728\u8fdb\u884c\u785d\u5316",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9178\u6027\u72ec\u5c45\u77f3\u7c89.png",
                    "x": 1248.0,
                    "y": 780.0,
                    "tooltip": "\u4e0b\u4e00\u6b65\u4f60\u9700\u8981\u7528\u5230\u785d\u9178\u94f5(\u53c8\u8981\u8ddf\u785d\u9178\u6253\u4ea4\u9053\u4e86!),\u8fd8\u6709\u7a00\u91ca\u786b\u9178\u72ec\u5c45\u77f3.\u5c06\u4e24\u8005\u5728\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u8fdb\u884c\u53cd\u5e94<br/>.\u6d41\u4f53\u4ea7\u7269\u5c31\u90a3\u4e48\u7b80\u5355\u5730\u6d88\u5931\u5728\u865a\u7a7a\u4e2d.\u6700\u597d\u4e0d\u8981\u62c5\u5fc3\u5b83\u4eec."
                },
                {
                    "name": "\u524d\u5f80\u5c0f\u884c\u661f\u548c\u5176\u4ed6\u4e09\u9636\u661f\u7403\u7684\u8def\u4e0a",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/3\u9636\u706b\u7bad.png",
                    "x": 348.0,
                    "y": 564.0,
                    "tooltip": "\u8fd9\u4e00\u9636\u6bb5\u6211\u60f3\u5e94\u8be5\u662f\"\u5230\u8fbe\u5176\u4ed6\u7684\u661f\u7403\"\u5e76\u4e14\u62e5\u6709IV\u7535\u538b\u7684\u673a\u5668. \u5f53\u8fdb\u5165\u4e86\u8fd9\u4e2a\u9636\u6bb5\u540e,\u4f60\u7684\u53d1\u7535\u673a\u5e94\u8be5\u5df2\u7ecf<br/>\u53d1\u6325\u4e86\u51e0\u4e4e\u5168\u90e8\u7684\u6f5c\u80fd.\u53bb\u67d0\u4e9b\u661f\u7403\u4e0a\u91c7\u96c6\u4e00\u4e9b\u73cd\u8d35\u7684\u77ff\u77f3\u53ef\u4ee5\u5e2e\u52a9\u63d0\u9ad8\u4f60\u7684\u53d1\u7535\u80fd\u529b.\u5f53\u7136,\u5c0f\u884c\u661f\u4e0a\u4e5f\u6709\u7845\u5ca9<br/>,\u4efb\u541b\u91c7\u64b7."
                },
                {
                    "name": "\u5728\u524d\u5f804\u9636\u661f\u7403\u7684\u8def\u4e0a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/4\u9636\u706b\u7bad.png",
                    "x": 348.0,
                    "y": 732.0,
                    "tooltip": "4\u9636\u661f\u7403\u662f\u6728\u536b\u4e00(\u5728\u90a3\u91cc\u4f60\u4f1a\u53d1\u73b0\u4e0b\u4e00\u4e2a\u5730\u7262),\u91d1\u661f(\u9700\u8981\u592a\u7a7a\u670d)\u548c\u6c34\u661f."
                },
                {
                    "name": "\u94f1\u9507\u5408\u91d1",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u94f1\u9507\u5408\u91d1\u952d.png",
                    "x": 744.0,
                    "y": 204.0,
                    "tooltip": "\u94f1\u9507\u5408\u91d1\u662f\u4e00\u79cd\u76f8\u5f53\u6602\u8d35\u7684\u5408\u91d1. \u4f60\u9700\u8981\u7528\u5b83\u6765\u5408\u6210\u7eaf\u51c0\u6cea\u6c34,\u4ee5\u5f7b\u5e95\u6446\u8131\u626d\u66f2. \u540c\u65f6,\u94f1\u9507\u5408\u91d1\u4e5f\u662fZPM<br/>\u53d1\u5c04\u5668\u548c\u4f20\u611f\u5668\u7684\u539f\u6750\u6599\u4e4b\u4e00."
                },
                {
                    "name": "\u9507",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9507\u7c89.png",
                    "x": 744.0,
                    "y": 372.0,
                    "tooltip": "\u4f60\u5df2\u6d53\u7f29\u4e86\u6eb6\u6db2,\u73b0\u5728\u662f\u65f6\u5019\u4ece\u4e2d\u6536\u96c6\u56fa\u4f53\u9507\u4e86.\u7ee7\u7eed\u5427,\u5c06\u5176\u4e0e\u6c22\u6c2f\u9178\u6df7\u5408."
                },
                {
                    "name": "\u8349\u9178",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8349\u9178\u5355\u5143.png",
                    "x": 1416.0,
                    "y": 1032.0,
                    "tooltip": "\u76ee\u524d\u8349\u9178\u771f\u7684\u4ec5\u9002\u7528\u4e8e\u94c8\u5904\u7406.\u7ee7\u7eed\u524d\u8fdb\u5e76\u5236\u5907\u4e00\u70b9\u8349\u9178\u5427.\u6709\u591a\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5236\u53d6\u8349\u9178,\u8bf7\u67e5\u9605NEI\u5e76\u9009\u62e9\u6700\u9002<br/>\u5408\u81ea\u5df1\u7684\u65b9\u6cd5\u5427."
                },
                {
                    "name": "\u94af",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94af\u7c89.png",
                    "x": 1248.0,
                    "y": 372.0,
                    "tooltip": "\u6700\u540e,\u5411\u518d\u6c89\u6dc0\u94af\u4e2d\u52a0\u5165\u7532\u9178,\u83b7\u53d6\u7eaf\u51c0\u7684\u94af,\u4ee5\u53ca\u4e00\u4e9b\u53ef\u4ee5\u5faa\u73af\u5229\u7528\u7684\u4ea7\u7269."
                },
                {
                    "name": "\u94af\u5904\u7406",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5bcc\u94af\u6c28\u5355\u5143.png",
                    "x": 1080.0,
                    "y": 480.0,
                    "tooltip": "\u94af\u662f\u4e00\u79cd\u76f8\u5f53\u6709\u7528\u7684\u94c2\u7cfb\u91d1\u5c5e,\u662f\u6240\u6709LuV\u673a\u5668\u7684\u5fc5\u9700\u6750\u6599.\u672c\u4efb\u52a1\u7ebf\u5c06\u5e2e\u52a9\u4f60\u5f04\u6e05\u695a\u5982\u4f55\u9ad8\u6548\u5730\u5904\u7406\u5b83.\u9996\u5148<br/>,\u4f60\u9700\u8981\u5c06\u90e8\u5206(\u7ea6\u4e00\u534a)\u5bcc\u94af\u6c28\u5904\u7406\u6210\u94af\u76d0\u7c89."
                },
                {
                    "name": "\u82ef\u915a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u82ef\u915a\u5355\u5143.png",
                    "x": 612.0,
                    "y": 696.0,
                    "tooltip": "\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u7684\u65b9\u5f0f\u83b7\u5f97\u82ef\u915a,\u8981\u662f\u4f60\u624b\u5934\u6ca1\u6709\u7684\u8bdd,\u4e0d\u59a8\u5c1d\u8bd5\u7528\u6c2f\u82ef\u548c\u6c34\u5408\u6210\u4e00\u4e9b.\u8bd1\u8005\u6ce8:\u6728\u7126\u6cb9/\u91cd\u71c3\u6cb9<br/>\u53ef\u4ea7\u51fa\u82ef\u915a."
                },
                {
                    "name": "\u90bb\u82ef\u4e8c\u7532\u9178",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u90bb\u82ef\u4e8c\u7532\u9178\u5355\u5143.png",
                    "x": 780.0,
                    "y": 696.0,
                    "tooltip": "\u8981\u83b7\u5f97\u90bb\u82ef\u4e8c\u7532\u9178,\u4f60\u9700\u8981\u5728EV\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u6df7\u5408\u90bb\u4e8c\u7532\u82ef,\u91cd\u94ec\u9178\u94be\u548c\u6c27\u6c14."
                },
                {
                    "name": "\u94c2\u7cfb\u5904\u7406-\u5176\u4ed6\u6240\u6709\u91d1\u5c5e",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7194\u878d\u7126\u786b\u9178\u94be\u5355\u5143.png",
                    "x": 912.0,
                    "y": 372.0,
                    "tooltip": "\u76ee\u524d\u4e3a\u6b62,\u4f60\u5df2\u7ecf\u4f7f\u7528\u8fd9\u79cd\u7b80\u5355\u7684\u65b9\u6cd5\u5904\u7406\u4e86\u4e0d\u5c11\u94c2,\u4f60\u5e94\u8be5\u83b7\u5f97\u4e86\u4e0d\u5c11\u94c2\u6e23\u7c89.\u73b0\u5728\u6211\u4eec\u5728\u8fd9\u91cc\u5904\u7406\u8fd9\u4e9b\u94c2\u6e23\u7c89<br/>\u5e76\u4ece\u4e2d\u83b7\u5f97\u4f59\u4e0b\u7684\u7a00\u6709\u91d1\u5c5e.\u4f46\u662f\u8981\u505a\u5230\u8fd9\u4e00\u70b9,\u6211\u4eec\u518d\u591a\u8d70\u51e0\u6b65\u5236\u5907\u7126\u786b\u9178\u94be,\u5e76\u5c06\u5176\u63d0\u53d6\u4e3a\u7194\u878d\u72b6\u6001."
                },
                {
                    "name": "\u805a\u82ef\u5e76\u54aa\u5511",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6c2f\u82ef\u5355\u5143.png",
                    "x": 612.0,
                    "y": 612.0,
                    "tooltip": "\u805a\u82ef\u5e76\u54aa\u5511(\u7b80\u79f0PBI)\u662f\u7528\u4e8eZPM\u673a\u5668\u5916\u58f3\u548c\u9ad8\u7ea7\u592a\u9633\u80fd\u7535\u6c60\u677f\u7684\u5408\u6210\u7ea4\u7ef4,\u5b83\u8fd8\u80fd\u63d0\u9ad8\u67d0\u4e9b\u5176\u4ed6\u7269\u54c1\u7684\u5408<br/>\u6210\u6548\u7387. \u5236\u4f5c\u5b83\u6709\u5f88\u591a\u6b65\u9aa4. \u8ba9\u6211\u4eec\u4ece\u57fa\u672c\u539f\u6599\u5f00\u59cb.  \u9996\u5148,\u6211\u4eec\u7528\u82ef\u548c\u6c2f\u5236\u9020\u4e00\u4e9b\u6c2f\u82ef. \u53e6\u5916,\u522b\u5fd8<br/>\u4e86\u5b8c\u6210IV\u9636\u6bb5\u7684\u5176\u4ed6\u975e\u94c2\u7cfb\u5316\u5b66\u4efb\u52a1."
                },
                {
                    "name": "\u6700\u540e--\u805a\u82ef\u5e76\u54aa\u5511!",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u805a\u82ef\u5e76\u54aa\u5511\u677f.png",
                    "x": 696.0,
                    "y": 780.0,
                    "tooltip": "3,3-\u4e8c\u6c28\u57fa\u8054\u82ef\u80fa\u548c\u95f4\u82ef\u4e8c\u7532\u9178\u4e8c\u82ef\u916f\u6700\u7ec8\u4f1a\u5236\u6210\u7194\u878d\u805a\u82ef\u5e76\u54aa\u5511. \u4f7f\u7528\u677f\u6a21\u5177\u6765\u83b7\u5f97\u805a\u82ef\u5e76\u54aa\u5511\u677f."
                },
                {
                    "name": "\u91cd\u94ec\u9178\u94be",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u91cd\u94ec\u9178\u94be\u7c89.png",
                    "x": 852.0,
                    "y": 696.0,
                    "tooltip": "\u785d\u9178\u94be\u548c\u4e09\u6c27\u5316\u94ec\u5728HV\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u53cd\u5e94\u53ef\u5236\u5f97\u91cd\u94ec\u9178\u94be."
                },
                {
                    "name": "\u785d\u9178\u94be",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u785d\u9178\u94be\u7c89.png",
                    "x": 780.0,
                    "y": 612.0,
                    "tooltip": "\u785d\u9178\u94be\u7531\u94be\u548c\u785d\u9178\u5236\u6210."
                },
                {
                    "name": "QBit\u6676\u5706\u548c\u82af\u7247",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/QBit\u6676\u5706.png",
                    "x": 24.0,
                    "y": 372.0,
                    "tooltip": "QBit\u6676\u5706\u7531\u7eb3\u7c73CPU\u6676\u5706\u3001\u91cf\u5b50\u4e4b\u773c\u914d\u5408\u7837\u5316\u9553\u5236\u5f97,\u4e5f\u53ef\u4ee5\u7528\u7eb3\u7c73CPU\u6676\u5706\u3001\u78f7\u5316\u94df\u9553\u914d\u5408\u6c21\u5236\u5907. <br/>\u518d\u5c06\u5176\u5207\u5272,\u5236\u6210QBit\u5904\u7406\u5668\u82af\u7247."
                },
                {
                    "name": "\u91cf\u5b50\u5904\u7406\u5668\u96c6\u7fa4",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u91cf\u5b50\u5904\u7406\u5668\u96c6\u7fa4.png",
                    "x": 24.0,
                    "y": 204.0,
                    "tooltip": "\u91cf\u5b50\u5904\u7406\u5668\u96c6\u7fa4\u662f\u4e00\u4e2aIV\u7535\u8def\u677f."
                },
                {
                    "name": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a.png",
                    "x": 144.0,
                    "y": 288.0,
                    "tooltip": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a\u662f\u4f60\u53ef\u4ee5\u5236\u4f5c\u7684\u7b2c\u4e00\u4e2aZPM\u7535\u8def\u677f."
                },
                {
                    "name": "\u91cf\u5b50\u4e4b\u661f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u91cf\u5b50\u4e4b\u661f.png",
                    "x": 144.0,
                    "y": 372.0,
                    "tooltip": "IV\u7684\u53d1\u5c04\u5668\u4e0e\u4f20\u611f\u5668\u5408\u6210\u65f6\u9700\u8981\u91cf\u5b50\u4e4b\u661f. \u5c06\u4f60\u7684\u4e0b\u754c\u4e4b\u661f\u653e\u5165\u88c5\u6709\u6c21\u7684HV\u5316\u5b66\u6d78\u6d17\u673a.  \u671f\u5f85\u4f60\u7684\u81ea\u52a8<br/>\u5316\u6c21\u4ea7\u7ebf."
                },
                {
                    "name": "\u53d6\u51fa\u6ce5\u6e23\u83b7\u5f97\u94f1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u4e8c\u6c27\u5316\u94f1\u7c89.png",
                    "x": 828.0,
                    "y": 204.0,
                    "tooltip": "\u5c06\u94f1\u4e0e\u65e0\u7528\u7684\u6ce5\u6e23\u5206\u79bb\u975e\u5e38\u5bb9\u6613.\u53ea\u9700\u5728\u9ad8\u7089\u4e2d\u52a0\u70ed\u5373\u53ef\u5b8c\u6210\u6b64\u6b65\u9aa4.\u5269\u4e0b\u7684\u6ce5\u6e23\u7c89\u53ef\u4ee5\u79bb\u5fc3\u6210\u91d1\u548c\u4e8c\u6c27\u5316\u7845."
                },
                {
                    "name": "\u518d\u6c89...\u4ec0\u4e48?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94af\u7c89.png",
                    "x": 1164.0,
                    "y": 372.0,
                    "tooltip": "\u518d\u6c89\u6dc0!\u610f\u4e3a\u4ece\u6eb6\u6db2/\u60ac\u6d4a\u6db2\u4e2d\u5206\u79bb\u51fa\u56fa\u4f53,\u7136\u540e\u518d\u6b21\u6eb6\u89e3,\u5e76\u518d\u6b21\u5206\u79bb.\u5c06\u5bcc\u94af\u6c28\u4e0e\u94af\u91d1\u5c5e\u7c89\u7ed3\u5408,\u4f1a\u518d\u6b21\u5f97\u5230<br/>\u94af\u76d0\u7c89,\u540c\u65f6\u8fd8\u6709\u518d\u6c89\u6dc0\u94af.\u4ece\u6b64\u4f60\u5c31\u80fd\u8df3\u8fc7\u7b2c\u4e00\u6b65\u4e86,\u56e0\u4e3a\u8fd9\u6837\u4e5f\u80fd\u5f97\u5230\u94af\u76d0\u7c89,\u800c\u4e14\u66f4\u591a. \u4e0d\u8fc7\u4f60\u786e\u5b9e\u9700\u8981<br/>\u627e\u5230\u4e00\u79cd\u81ea\u52a8\u5316\u5904\u7406\u7c89\u672b\u7684\u65b9\u6cd5.\u7136\u540e,\u5c06\u7532\u9178\u6dfb\u52a0\u5230\u8be5\u6df7\u5408\u7269\u4e2d\u5373\u53ef\u83b7\u5f97\u7eaf\u94af.\u4f60\u53ef\u4ee5\u5c06\u5176\u7528\u4e8e\u5320\u9b42\u6b66\u5668,\u4e5f\u53ef<br/>\u4ee5\u7559\u5f85\u4ee5\u540e\u4f7f\u7528.\u8981\u662f\u4f60\u7684\u5bcc\u94af\u6c28\u4e0d\u591f\u7528\u4e86,\u5c06\u94af\u91d1\u5c5e\u7c89\u4e0e\u6c28\u53cd\u5e94\u5373\u53ef\u76f4\u63a5\u83b7\u5f97\u5bcc\u94af\u6c28."
                },
                {
                    "name": "\u91cd\u65b0\u89e3\u51b3\u7eaf\u5ea6\u95ee\u9898",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94d1\u6ee4\u997c\u6eb6\u6db2\u5355\u5143.png",
                    "x": 1080.0,
                    "y": 36.0,
                    "tooltip": "\u55ef,\u7b5b\u9009\u673a\u8868\u73b0\u4e0d\u9519,\u4f60\u7b5b\u53bb\u4e86\u5f88\u591a\u6742\u8d28,\u4f46\u540c\u65f6,\u7b5b\u9009\u51fa\u4e86\u4e9b\u65b0\u7684...\u662f\u65f6\u5019\u7528\u6c34\u8fc7\u6ee4\u6389\u5b83\u4eec\u4e86."
                },
                {
                    "name": "\u94d1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94d1\u7c89.png",
                    "x": 1248.0,
                    "y": 36.0,
                    "tooltip": "\u94d1\u5904\u7406\u7684\u6700\u540e\u4e00\u6b65.\u4f60\u8fd8\u4f1a\u83b7\u5f97\u4e00\u4e9b\u8fd4\u8fd8\u7684\u6c2f\u548c\u6c28."
                },
                {
                    "name": "\u9540\u94d1\u94af",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u9540\u94d1\u94af\u952d.png",
                    "x": 1248.0,
                    "y": 204.0,
                    "tooltip": "\u9540\u94d1\u94af\u7528\u4e8e\u5236\u9020LuV\u673a\u68b0\u65b9\u5757.\u4f60\u5df2\u7ecf\u77e5\u9053\u8be5\u5982\u4f55\u5236\u9020\u5b83\u4e86,\u73b0\u5728\u9700\u8981\u7684\u5c31\u662f\u8fdb\u884c\u81ea\u52a8\u5316\u5e76\u5236\u9020\u51fa\u4e00\u6279\u51fa\u6765,\u4f60<br/>\u4f1a\u7528\u5230\u5b83\u4eec\u7684.\u5b83\u5176\u5b9e\u662f\u5408\u91d1,\u4e3a\u4ec0\u4e48\u53eb\u9540\u94d1\u94af\u5462?\u6211\u4e5f\u4e0d\u77e5\u9053!"
                },
                {
                    "name": "\u7f57\u65af128b\u4e4b\u65c5",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9492\u9541\u7535\u6c14\u77f3\u77ff\u77f3.png",
                    "x": 276.0,
                    "y": 564.0,
                    "tooltip": "\u7f57\u65af128b\u662f\u4e00\u9897\u5f88\u68d2\u4e14\u5b9c\u5c45\u7684\u661f\u7403,\u4e0d\u4f1a\u751f\u6210\u602a\u7269(\u5305\u62ec\u4efb\u4f55\u5f62\u5f0f\u7684\u654c\u5bf9\u751f\u7269).\u661f\u7403\u4e0a\u6709\u591a\u79cd\u65b0\u7684\u77ff\u8109,\u6709<br/>\u4f20\u8a00\u8bf4\u90a3\u91cc\u4f1a\u6709\u53e4\u4ee3\u6587\u660e\u7684\u9057\u8ff9,\u8fd8\u6709\u4e00\u4e9b\u9057\u7559\u4e0b\u7684\u673a\u5668.\u4f60\u53ef\u4ee5\u5728\u661f\u7cfb\u5730\u56fe\u7684\u5e95\u90e8\u627e\u5230\u8be5\u661f\u7403."
                },
                {
                    "name": "\u948c\u94f1\u5408\u91d1?",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u948c\u94f1\u5408\u91d1\u952d.png",
                    "x": 624.0,
                    "y": 36.0,
                    "tooltip": "\u948c\u4e0e\u94f1\u7ed3\u5408\u4f1a\u4ea7\u751f\u4e00\u79cd\u975e\u5e38\u7279\u6b8a\u7684\u91d1\u5c5e,\u4e3b\u8981\u7528\u4e8eLuV\u90e8\u4ef6.\u4f60\u4f1a\u9700\u8981\u4e00\u5927\u5806\u948c\u94f1\u5408\u91d1\u7684."
                },
                {
                    "name": "\u948c",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u948c\u7c89.png",
                    "x": 744.0,
                    "y": 36.0,
                    "tooltip": "\u5236\u53d6\u948c\u7684\u6700\u540e\u4e00\u6b65\u5c31\u662f\u5c06\u4e4b\u524d\u83b7\u5f97\u7684\u7c89\u672b\u4e0e\u6c22\u6c2f\u9178\u53cd\u5e94.\u9664\u4e86\u948c,\u4ea7\u7269\u8fd8\u6709\u6c2f\u548c\u6c34."
                },
                {
                    "name": "\u76d0\u4e0d\u80fd\u5728\u6c34\u4e2d\u50a8\u5b58?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94d1\u76d0\u6eb6\u6db2\u5355\u5143.png",
                    "x": 1080.0,
                    "y": 120.0,
                    "tooltip": "\u4f7f\u7528\u6405\u62cc\u673a,\u5c06\u94d1\u76d0\u6eb6\u89e3\u5728\u6c34\u4e2d,\u83b7\u53d6\u94d1\u76d0\u6eb6\u6db2."
                },
                {
                    "name": "\u91d1\u5c5e\u76d0\u662f\u6700\u7cdf\u7cd5\u7684!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94af\u76d0\u7c89.png",
                    "x": 1164.0,
                    "y": 480.0,
                    "tooltip": "\u73b0\u5728,\u4f60\u83b7\u5f97\u4e86\u94af\u76d0,\u4f46\u76d0\u5bf9\u4f60\u6beb\u65e0\u7528\u5904,\u6240\u4ee5\u4f60\u9700\u8981\u5c06\u5176\u673a\u68b0\u7b5b\u5206,\u83b7\u53d6\u94af\u91d1\u5c5e\u7c89.\u4e0d\u8fc7\u6210\u529f\u7b5b\u5f97\u7c89\u7684\u51e0\u7387\u4e3a9<br/>5\uff05."
                },
                {
                    "name": "\u9490,\u53e6\u4e00\u6761\u8def",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9490\u7c89.png",
                    "x": 996.0,
                    "y": 696.0,
                    "tooltip": "\u73b0\u5728,\u53ea\u9700\u8981\u628a\u4f60\u7684\u9490\u4ece\u90a3\u4e9b\u5783\u573e(\u8109\u77f3)\u4e2d\u79bb\u5fc3\u51fa\u6765\u5c31\u884c\u4e86.\u540c\u65f6,\u4f60\u8fd8\u83b7\u5f97\u4e86\u4e00\u70b9\u65b9\u948d\u77f3,\u771f\u68d2."
                },
                {
                    "name": "\u9971\u548c\u9700\u6c42",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9971\u548c\u72ec\u5c45\u77f3\u7a00\u571f\u7c89.png",
                    "x": 1416.0,
                    "y": 1200.0,
                    "tooltip": "\u4f60\u5feb\u6210\u529f\u4e86!\u73b0\u5728\u4f60\u9700\u8981\u5c06\u5176\u4e0e\u4e19\u916e\u6df7\u5408."
                },
                {
                    "name": "\u7b2c\u4e8c\u6b21\u5206\u79bb-\u948c",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u948c\u9178\u94a0\u7c89.png",
                    "x": 912.0,
                    "y": 288.0,
                    "tooltip": "\u94fe\u5f0f\u8fc7\u7a0b\u7684\u4e0b\u4e00\u6b65,\u6211\u4eec\u5c06\u4ece\u6d78\u51fa\u6e23\u4e2d\u5206\u79bb\u51fa\u948c. \u8bf7\u8bb0\u4f4f,\u4f60\u65e2\u53ef\u4ee5\u4ece\u94c2\u6e23\u4e5f\u53ef\u4ee5\u4ece\u786b\u9178\u94d1\u6eb6\u6db2\u4e2d\u83b7\u53d6\u5b83.\u8fd9\u4e00<br/>\u6b65\u9700\u8981\u785d\u77f3\u548c\u76d0\u6c34. \u4f60\u53ef\u4ee5\u9009\u62e9\u62bd\u53d6\u76d0\u6c34\u4e95\u3001\u6316\u785d\u77f3\u77ff,\u4e5f\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u5236\u9020\u5b83\u4eec. \u9274\u4e8e\u9700\u8981\u7684\u785d\u77f3\u6570\u91cf\u975e\u5e38<br/>\u5e9e\u5927,\u5efa\u8bae\u81ea\u52a8\u5316\u5236\u9020\u5b83\u4eec.\u81f3\u4e8e\u84b8\u6c7d,\u4f60\u53ef\u4ee5\u76f4\u63a5\u9500\u6bc1\u5b83\u4eec,\u6216\u662f\u56de\u6536\u7559\u7740\u5236\u9020\u70ed\u56db\u6c27\u5316\u948c\u6eb6\u6db2."
                },
                {
                    "name": "\u5206\u79bb\u8fd9\u4e9b\u6700\u540e\u7684\u5fae\u7c92",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9490\u6c89\u6dc0\u7c89.png",
                    "x": 1416.0,
                    "y": 1116.0,
                    "tooltip": "\u73b0\u5728,\u8be5\u628a\u5269\u4e0b\u7684\u4e00\u8d77\u79bb\u5fc3\u4e86.\u540c\u65f6\u4f60\u53ef\u4ee5\u4ece\u4e2d\u56de\u6536\u4e00\u4e9b\u6c2f\u7532\u70f7,\u4e0d\u9519\u5427?"
                },
                {
                    "name": "\u7b5b\u51fa\u597d\u4e1c\u897f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u786b\u9178\u72ec\u5c45\u77f3\u7c89.png",
                    "x": 1080.0,
                    "y": 780.0,
                    "tooltip": "\u662f\u7684,\u4f60\u6ca1\u770b\u9519,\u7b5b\u9009\u6d41\u4f53\u7684\u914d\u65b9!\u8fd9\u91cc\u7684\u5f88\u591a\u6750\u6599\u90fd\u5e76\u975e\u5176\u6700\u4f73\u6765\u6e90,\u4f46\u603b\u6bd4\u6ca1\u6709\u597d.\u53e6\u5916,\u786b\u9178\u72ec\u5c45\u77f3\u5176\u5b9e\u4e5f<br/>\u5e76\u4e0d\u662f\u5b9e\u9645\u7684\u5316\u5408\u7269,\u4ec5\u4ec5\u4f5c\u4e3a\u4e00\u4e2a\u672f\u8bed,\u4ee3\u6307\u7a00\u571f\u7684\u5404\u79cd\u786b\u9178\u76d0\u96c6\u5408\u4f53.\u7531\u4e8e\u4e0d\u60f3\u8ba9\u5927\u5bb6\u62c5\u5fc3\u5176\u4f59\u4ea7\u7269\u7684\u51e0\u7387\u95ee<br/>\u9898,\u6240\u4ee5\u672c\u4efb\u52a1\u53ea\u8981\u6c42\u4e3b\u4ea7\u7269\u5373\u53ef."
                },
                {
                    "name": "\u7b5b\u9009\u5f88\u68d2",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94d1\u6ee4\u997c\u7c89.png",
                    "x": 996.0,
                    "y": 36.0,
                    "tooltip": "\u7b5b\u9009\u785d\u9178\u94d1\u4ee5\u83b7\u53d6\u94d1\u6ee4\u997c\u7c89.\u51fa\u4ea7\u6982\u7387\u4e3a95\uff05."
                },
                {
                    "name": "\u5355\u6b65EV\u7535\u8def",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u91cf\u5b50\u5904\u7406\u5668.png",
                    "x": 24.0,
                    "y": 288.0,
                    "tooltip": "\u91cf\u5b50\u5904\u7406\u5668\u662f\u4f60\u901a\u8fc7\u5355\u6b65\u5408\u6210\u5236\u9020EV\u7535\u8def\u7684\u7b2c\u4e00\u6b21\u673a\u4f1a."
                },
                {
                    "name": "SoC-\u82af\u7247\u7ea7\u7684\u7cfb\u7edf!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/SoC.png",
                    "x": 24.0,
                    "y": 564.0,
                    "tooltip": "\u4e3a\u4e86\u538b\u4f4eLV\u548cMV\u7535\u8def\u7684\u6210\u672c,\u4f60\u9700\u8981SoC.\u82af\u7247\u7ea7\u7684\u7cfb\u7edf."
                },
                {
                    "name": "\u785d\u9178\u94a0",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u785d\u9178\u94a0\u7c89.png",
                    "x": 996.0,
                    "y": 204.0,
                    "tooltip": "\u8fdb\u4e00\u6b65\u5904\u7406\u94d1\u9700\u8981\u7528\u5230\u785d\u9178\u94a0."
                },
                {
                    "name": "\u00a7b\u00a7lSupersized Buses",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8d85\u7ea7\u8f93\u5165\u603b\u7ebf(LV).png",
                    "x": 312.0,
                    "y": 444.0,
                    "tooltip": "Input and output buses not holding enough for you?<br/> \n\nUpgrade your buses to the Super bus and enjoy i<br/>ncreased slots."
                },
                {
                    "name": "\u53e6\u4e00\u90e8\u5206",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5f02\u8d28\u5364\u5316\u72ec\u5c45\u77f3\u7a00\u571f\u6df7\u5408\u7269\u7c89.png",
                    "x": 1332.0,
                    "y": 1200.0,
                    "tooltip": "\u88ab\u8fd9\u4e9b\u540d\u5b57\u6574\u75b2\u4e86\u662f\u5427?\u5e0c\u671b\u5982\u6b64.\u73b0\u5728\u8f6e\u5230\u4e86\u6c2f\u5316\u4e0e\u52a0\u70ed,\u4ee5\u5bf9\u6240\u5f97\u7c89\u8fdb\u4e00\u6b65\u5206\u79bb."
                },
                {
                    "name": "\u53e6\u4e00\u6761\u8def",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9490\u7cbe\u7c89.png",
                    "x": 996.0,
                    "y": 612.0,
                    "tooltip": "\u4f60\u5fc5\u7136\u8fd8\u4f1a\u6316\u5230\u4e0d\u5c11\u9490\u77ff\u77f3,\u6700\u7ec8\u56e4\u4e0b\u6210\u5428\u7684\u7c89.\u8fd9\u91cc\u6709\u4e24\u79cd\u9009\u62e9\uff1a\u5176\u4e00\u5305\u542b\u5728\u72ec\u5c45\u77f3\u5904\u7406\u7ebf\u4e2d,\u5e76\u4e14\u4ea7\u91cf\u66f4\u9ad8;<br/>\u53e6\u4e00\u79cd\u66f4\u7b80\u5355,\u4f46\u4ea7\u91cf\u8f83\u4f4e.\u6211\u4eec\u5728\u8fd9\u91cc\u5148\u8bb2\u4e00\u4e0b\u540e\u8005.\u6700\u7ec8\u4f60\u53ef\u80fd\u8fd8\u4f1a\u5b8c\u5168\u5207\u6362\u5230\u72ec\u5c45\u77f3\u9009\u9879,\u4f46\u73b0\u5728,\u7528\u8fd9\u79cd<br/>\u65b9\u5f0f\u8fdb\u884c\u4e00\u5b9a\u7684\u8865\u5145\u662f\u4e2a\u597d\u4e3b\u610f."
                },
                {
                    "name": "\u90a3\u662f\u6211\u7684\u76d0!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u785d\u9178\u94d1\u7c89.png",
                    "x": 996.0,
                    "y": 120.0,
                    "tooltip": "\u5c06\u94d1\u76d0\u6eb6\u6db2\u4e0e\u785d\u9178\u94a0\u53cd\u5e94,\u83b7\u53d6\u785d\u9178\u94d1."
                },
                {
                    "name": "\u00a7b\u00a7lThe sane option",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://icon/\u57c3\u514b\u68ee\u7f8e\u5b5a\u5316\u5de5\u5382.png",
                    "x": 270.0,
                    "y": 162.0,
                    "tooltip": "So you choose the sane two step processing option?<br/>\n\nGreat choice.\n\nTo get started you will need to c<br/>reate a Titanium tier Chemical Plant with \u00a7nat lea<br/>st HV tier machine casings.\u00a7r It can be HV tier ca<br/>sings as two HV tier energy hatches will overclock<br/> the multiblock to EV.\n\nOnce completed, place in y<br/>our Borax Dust. Then in the second step feed in yo<br/>ur Thorium Dust with some Distilled Water.\n\nThen y<br/>ou have your Thorium 232 Dust, nice and easy."
                },
                {
                    "name": "\u94c8\u5904\u7406\u5f00\u59cb",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6c2f\u5316\u94c8\u7c89.png",
                    "x": 1332.0,
                    "y": 1032.0,
                    "tooltip": "\u8fd9\u6761\u4efb\u52a1\u7ebf\u5c06\u4f1a\u6307\u5bfc\u4f60\u83b7\u53d6\u5143\u7d20\u94c8.\u9996\u5148,\u5c06\u4e8c\u6c27\u5316\u94c8\u4e0e\u6c2f\u5316\u94f5\u8fdb\u884c\u53cd\u5e94,\u5236\u53d6\u4e00\u4e9b\u6c2f\u5316\u94c8."
                },
                {
                    "name": "\u8fd9\u53ef\u80fd\u4e0d\u592a\u503c",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u78f7\u9178\u948d\u7cbe\u7c89.png",
                    "x": 1416.0,
                    "y": 780.0,
                    "tooltip": "\u4f60\u53ef\u4ee5\u76f4\u63a5\u7528\u9ad8\u7089\u7145\u70e7\u83b7\u5f97\u7684\u78f7\u9178\u948d\u6ee4\u997c\u7c89,\u4ee5\u7ee7\u7eed\u5b8c\u6210\u5904\u7406\u94fe,\u4e0d\u8fc7\u6700\u7ec8\u7684\u4ea7\u91cf\u4e0d\u9ad8...\u4e0d\u8fc7,\u5982\u679c\u4f60\u7684\u8d44\u6e90<br/>\u5145\u8db3,\u4f55\u4e50\u800c\u4e0d\u4e3a?"
                },
                {
                    "name": "\u00a7b\u00a7lThorium 232?",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://icon/\u948d-232\u7c89.png",
                    "x": 270.0,
                    "y": 210.0,
                    "tooltip": "So you were looking at Thorium 232 and wondering h<br/>ow to make it?\n\nYou could centrifuge it at a horri<br/>ble chance rate with a long recipe but there are b<br/>etter ways of obtaining it.\n\nThe better ways are p<br/>rocessing chains that can be made in three differe<br/>nt paths with the third path being unlocked at a f<br/>urther stage after obtaining Fusion with the Neutr<br/>on Activator.\n\nThe first path requires the chemica<br/>l plant multiblock that you might not be familiar <br/>with but will become required to create rocket fue<br/>l for any tier three or higher rocket. This path i<br/>s the fastest with only two steps to obtain the Th<br/>orium 232, but requires borax which can only be ob<br/>tained (for now) through mining salt veins as a by<br/>product or through bees (probably the better optio<br/>n if you already have some).\n\nThe second path is a<br/> six step processing chain that requires Chemical <br/>Reactors, a Centrifuge, and an EBF. Even though it<br/> is longer it offers much better conversion ratio <br/>(75% instead of 25% in chemical plant), instead of<br/> borax it requires nitric acid (4000L per dust if <br/>you account for recycling) and 100L of fluorine pe<br/>r dust.\n\nEither way I would recommend using AE2FC <br/>as it allows on demand fluid crafting which will a<br/>ssist in both processing chains.\n"
                },
                {
                    "name": "\u948d\u4e0e\u78f7\u9178\u76d0",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u78f7\u9178\u76d0\u7c89.png",
                    "x": 1416.0,
                    "y": 696.0,
                    "tooltip": "\u73b0\u5728,\u5c06\u6240\u83b7\u5f97\u7684\u7cbe\u7c89\u70ed\u529b\u79bb\u5fc3,\u4f60\u5c31\u53ef\u4ee5\u83b7\u5f97\u948d\u548c\u78f7\u9178\u76d0\u7c89.\u544a\u8bc9\u8fc7\u4f60\u4ea7\u91cf\u4e0d\u9ad8..."
                },
                {
                    "name": "\u7b2c5\u9636\u6bb5(IV)",
                    "symbolSize": 124.80000000000001,
                    "symbol": "image://icon/IV\u673a\u5668\u5916\u58f3.png",
                    "x": 348.0,
                    "y": 372.0,
                    "tooltip": "\u5728IV\u9636\u6bb5,\u4f60\u9700\u8981\u94a8\u94a2\u5236\u9020\u673a\u5668. \u4f60\u5e94\u8be5\u9020\u8bbf\u706b\u661f\u548c\u5b83\u7684\u536b\u661f:\u706b\u536b\u4e00\u548c\u706b\u536b\u4e8c.\u8bb0\u5f97\u5c06\u4f60\u7684\u5de5\u4e1a\u9ad8\u7089\u7ebf\u5708\u5347<br/>\u7ea7\u4e3a\u949b\u94c2\u9492\u7ebf\u5708.\u5230\u76ee\u524d\u4e3a\u6b62\u4f60\u5e94\u8be5\u5df2\u7ecf\u7cbe\u901a\u4e86\u683c\u96f7\u79d1\u6280,\u524d\u63d0\u662f\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u6e05\u7406\u8fc7\u683c\u96f7\u673a\u5668\u5728\u4f60\u5bb6\u91cc\u7559\u4e0b\u7684\u5927<br/>\u5751...\u597d\u591aGT++\u591a\u65b9\u5757\u7ed3\u6784\u5728\u8fd9\u4e2a\u9636\u6bb5\u90fd\u5df2\u7ecf\u9646\u7eed\u89e3\u9501.\u8bb0\u5f97\u5148\u51c6\u5907\u4e00\u53f0\u5408\u91d1\u51b6\u70bc\u7089,\u5e76\u68c0\u67e5GT++\u4efb\u52a1<br/>\u9875."
                },
                {
                    "name": "\u7b5b,\u8fd8\u662f\u4e0d\u7b5b?(To Sift, or Not to Sift?)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6d53\u7f29\u72ec\u5c45\u77f3\u7a00\u571f\u6c22\u6c27\u5316\u7269\u7c89.png",
                    "x": 1248.0,
                    "y": 864.0,
                    "tooltip": "\u771f\u6b63\u7684\u95ee\u9898\u662f,\u662f\u8c01\u60f3\u51fa\u8fd9\u4e9b\u7b5b\u9009\u5408\u6210\u8868\u7684?\u4f60\u53ef\u4ee5\u4ece\u4e2d\u83b7\u5f97\u4e00\u4e9b\u94c0,\u6240\u4ee5\u8fd9\u4e2a\u5408\u6210\u8868\u8fd8\u4e0d\u7b97\u592a\u7cdf."
                },
                {
                    "name": "\u00a7b\u00a7lUniversal pickaxe, Vajra",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91d1\u521a\u6775.png",
                    "x": 516.0,
                    "y": 144.0,
                    "tooltip": "This tool can mine blocks instantly, including Gre<br/>gTech blocks or cables. Using leftclick will mine <br/>blocks as usual, while enabling accurate mode will<br/> allow you to rightclick to harvest blocks 1 by 1,<br/> while also applying silk touch.\n\n[note]To enable <br/>accurate mode press Mode Switch Key + Right click <br/>while holding Vajra.[/note]"
                },
                {
                    "name": "\u94c0?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94c0-235\u7c89.png",
                    "x": 1332.0,
                    "y": 948.0,
                    "tooltip": "...\u518d\u7b5b\u9009\u6240\u83b7\u5f97\u7684\u7c89,\u4f60\u53ef\u4ee5\u83b7\u5f97\u94c0-238/235\u7c89.\u4f60\u786e\u5b9e\u80fd\u591f\u4ece\u4e2d\u83b7\u5f97\u4e00\u4e9b\u94c0-235,\u6240\u4ee5\u5e76\u4e0d\u662f<br/>\u5b8c\u5168\u6d6a\u8d39\u65f6\u95f4,\u5e0c\u671b\u5427..."
                },
                {
                    "name": "\u94c0\u6ee4\u6e23",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94c0\u6ee4\u6e23\u7c89.png",
                    "x": 1248.0,
                    "y": 948.0,
                    "tooltip": "\u7a0d\u540e,\u4f60\u53ef\u4ee5\u7528\u4e00\u4e9b\u6c22\u6c1f\u9178\u5904\u7406\u8fd9\u4e9b\u94c0\u6ee4\u6e23\u7c89."
                },
                {
                    "name": "\u91d1\u661f\u4e4b\u65c5",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u91cf\u5b50\u77ff\u77f3.png",
                    "x": 276.0,
                    "y": 780.0,
                    "tooltip": "\u91d1\u661f\u67093\u79cd\u65b0\u77ff\u8109,\u91cf\u5b50\u952d\u548c\u91d1\u7ea2\u77f3\u662f\u6700\u91cd\u8981\u7684.\u5982\u679c\u4f60\u4e4b\u524d\u8fd8\u6ca1\u91c7\u591f\u7845\u5ca9\u7684\u8bdd,\u8fd9\u91cc\u4e5f\u6709.\u5982\u679c\u4f60\u4ecd\u7136\u9700\u8981\u7684\u8bdd<br/>,\u8fd9\u91cc\u4e5f\u6709\u706b\u77f3\u8d2b\u7620\u77ff.\u8bf7\u786e\u4fdd\u4f60\u7a7f\u7740\u9002\u5f53\u7684\u9632\u62a4\u88c5\u5907!"
                },
                {
                    "name": "\u00a7b\u00a7lWait are you sure?",
                    "symbolSize": 49.4,
                    "symbol": "image://icon/\u5de5\u4e1a\u9ad8\u7089.png",
                    "x": 211.0,
                    "y": 211.0,
                    "tooltip": "So for some reason you have decided to pick the EB<br/>F option.\n\nWell get ready for a processing line.\n\n<br/>First you need to react Thorium Dust with Hydroflu<br/>oric Acid and eight buckets of Nitric Acid. I hope<br/> you have a Nitric Acid setup.\n\nThen react the Tho<br/>rium Nitrate with Sodium Hydroxide to produce Thor<br/>ium Hydroxide. Then react with even more Hydrofluo<br/>ric Acid to get Thorium Tetrafluoride.\n\nThen pump <br/>it into a Centrifuge to separate the normal Thoriu<br/>m away from the Thorium 232. Sadly it is still in <br/>a liquid form so you will need to blast it with Zi<br/>nc Chloride and Calcium.\n\nThen finally use your Bl<br/>ast Furnace again for the Zn-Th alloy ingot to sep<br/>arate the Zinc from the Thorium 232 to obtain the <br/>Thorium 232 Dust and even get your Zinc back in fl<br/>uid form.\n\nWell I hope you enjoyed the processing <br/>line for Thorium 232 EBF edition.\n"
                },
                {
                    "name": "\u7a00\u91ca\u6ce5\u6d46",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7a00\u91ca\u72ec\u5c45\u77f3\u7a00\u571f\u6ce5\u6d46\u5355\u5143.png",
                    "x": 1080.0,
                    "y": 696.0,
                    "tooltip": "\u716e\u89e3\u6c60\u7684\u4ea7\u7269\u8fd8\u662f\u592a\u8fc7\u6d53\u7a20,\u4f60\u8fd8\u9700\u8981\u7528\u6c34\u5728\u6eb6\u89e3\u7f50\u4e2d\u5bf9\u5176\u8fdb\u884c\u7a00\u91ca.\u6709\u8da3\u7684\u4e8b\u5b9e\uff1a\u914d\u65b9\u4e2d\u7684\u785d\u77f3\u4ec5\u4ec5\u662f\u4e3a\u4e86\u4fbf\u4e8e<br/>\u641c\u7d22\u800c\u6dfb\u52a0\u7684!\u5728\u7a00\u91ca\u8fc7\u7a0b\u4e2d,\u4f60\u8fd8\u4f1a\u5f97\u5230\u4e00\u4e9b\u9506\u548c\u94ea.\u8fd9\u4e24\u8005\u5728\u4e4b\u540e\u90fd\u4f1a\u7528\u5230,\u6240\u4ee5\u5343\u4e07\u4e0d\u8981\u968f\u624b\u9500\u6bc1\u4e86."
                },
                {
                    "name": "\u6211\u4eec\u4e0d\u662f\u5728\u7ecf\u8425\u519c\u573a!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7898\u5316\u94ea\u7c89.png",
                    "x": 1332.0,
                    "y": 612.0,
                    "tooltip": "...\u4f4e\u7eaf\u94ea\u662f\u4ec0\u4e48\u4e1c\u897f?\u597d\u5427,\u4f60\u9700\u8981\u7684\u5f53\u7136\u662f\u7eaf\u5ea6\u6700\u9ad8\u7684\u94ea,\u6240\u4ee5\u4e0d\u80fd\u7b80\u5355\u5730\u52a0\u70b9\u9541\u7c89\u9ad8\u7089\u7145\u70e7,\u8fd8\u9700\u8981\u4e00\u4e9b<br/>\u5176\u4ed6\u5de5\u5e8f.\u7ee7\u7eed\u524d\u8fdb\u5427,\u52a0\u5165\u4e00\u4e9b\u7898\u8fdb\u884c\u53cd\u5e94.\u8981\u662f\u4f60\u8fd8\u4e0d\u786e\u5b9a\u600e\u4e48\u83b7\u53d6\u7898,\u770b\u770b\u6d77\u85fb\u7070\u5427. (\u63d0\u793a\uff1a\u9700\u8981\u770b\u7684<br/>\u662f\u5c0f\u5806\u7c89\u54e6)\u6ce8\u610f\uff1a\u53cd\u5e94\u4e2d\u53ef\u4f7f\u7528\u6d41\u4f53\u72b6\u6001\u7684\u7898\u6216\u8005\u7898\u7c89,\u6240\u4ee5,\u8981\u5b8c\u6210\u4efb\u52a1,\u4f60\u53ea\u9700\u8981\u5176\u4e2d\u4e4b\u4e00,\u4e5f\u53ef\u90fd\u4e0d\u7528!"
                },
                {
                    "name": "\u76d0\u5230\u54ea\u91cc\u53bb\u4e86?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u56db\u6c27\u5316\u948c\u6eb6\u6db2\u5355\u5143.png",
                    "x": 912.0,
                    "y": 204.0,
                    "tooltip": "\u5c06\u6c2f\u6c14\u4e0e\u948c\u9178\u94a0\u53cd\u5e94\u5373\u53ef\u5236\u5f97\u56db\u6c27\u5316\u948c\u6eb6\u6db2.\u8bd1\u8005\u6ce8:\u6eb6\u5242\u54ea\u6765\u7684..."
                },
                {
                    "name": "\u4e3a\u4ec0\u4e48,Bart,\u4e3a\u4ec0\u4e48?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u56db\u6c27\u5316\u948c\u5355\u5143.png",
                    "x": 912.0,
                    "y": 36.0,
                    "tooltip": "\u5e26\u4e0a\u4f60\u7684\u70ed\u56db\u6c27\u5316\u948c\u6eb6\u6db2,\u4f7f\u7528\u84b8\u998f\u5854\u5bf9\u5176\u8fdb\u884c\u84b8\u998f,\u83b7\u53d6\u56db\u6c27\u5316\u948c,\u4ee5\u53ca\u76d0\u548c\u6c34.\u4f46\u662f,\u8fd9\u4e00\u6b65\u7684\u6570\u91cf\u975e\u5e38\u70e6\u4eba<br/>.\u4f60\u9700\u8981\u8fd0\u884c5\u6b21\u624d\u80fd\u5f97\u5230\u4e00\u4e2a\u5355\u5143\u7684\u91cf."
                },
                {
                    "name": "\u8fd9\u94c8\u5728\u5f00\u73a9\u7b11\u5427?(You Can't Be Cerious!)",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u94c8\u952d.png",
                    "x": 1416.0,
                    "y": 864.0,
                    "tooltip": "\u4e00\u8bed\u53cc\u5173\u5bf9\u5427?\u73b0\u5728,\u4f60\u53ef\u4ee5\u7535\u89e3\u6c27\u5316\u94c8(III)\u83b7\u53d6\u7eaf\u51c0\u7684\u5143\u7d20\u94c8\u7c89\u4e86.\u54e6,\u8fd8\u6709\u6c27,\u4e0d\u8fc7\u8c01\u5728\u4e4e\u5462?"
                },
                {
                    "name": "\u5728IV\u4e2d\u4f60\u4f1a\u8ba8\u538c\u4e4b5\u548c6",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u4f20\u611f\u5668(IV).png",
                    "x": 144.0,
                    "y": 468.0,
                    "tooltip": "\u4e00\u4e9b\u673a\u5668\u9700\u8981\u53d1\u5c04\u5668\u548c\u4f20\u611f\u5668,\u6bd4\u5982\u8bf4\u626b\u63cf\u4eea\u6216\u8005\u7535\u8def\u7ec4\u88c5\u673a."
                },
                {
                    "name": "\u5728IV\u4f60\u4f1a\u8ba8\u538c\u4e4b1-4",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u673a\u68b0\u81c2(IV).png",
                    "x": 240.0,
                    "y": 372.0,
                    "tooltip": "\u6cf5,\u6d3b\u585e,\u4f20\u9001\u5e26\u548c\u673a\u68b0\u81c2\u662fIV\u4e2d\u6700\u9700\u8981\u7684\u673a\u5668\u90e8\u4ef6.\u6bcf\u6837\u90fd\u505a\u4e00\u4e2a."
                },
                {
                    "name": "\u4f60\u7684\u7b2c\u4e00\u5757\u7845\u5ca9\u952d",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7845\u5ca9\u952d.png",
                    "x": 192.0,
                    "y": 648.0,
                    "tooltip": "\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230,\u73b0\u5728\u4f60\u65e0\u6cd5\u76f4\u63a5\u4ece\u7845\u5ca9\u77ff\u77f3\u4e2d\u83b7\u5f97\u7845\u5ca9\u7c89\u4e86,\u5b83\u53ea\u80fd\u51fa\u4ea7\u6c27\u5316\u7845\u5ca9\u6df7\u5408\u7269(NOM)\u7c89,\u771f\u8ba9<br/>\u4eba\u607c\u706b.\u5b8c\u6574\u7684\u7845\u5ca9\u5904\u7406\u7ebf\u975e\u5e38\u590d\u6742,\u5c24\u5176\u5728IV\u9636\u6bb5,\u6211\u76f8\u4fe1\u5728\u5b8c\u6210\u4e86\u94c2\u7cfb\u5904\u7406\u7ebf\u3001\u805a\u82ef\u5e76\u54aa\u5511(PBI)\u7ebf,<br/>\u4ee5\u53ca\u9567\u7cfb\u5904\u7406\u7ebf\u4e4b\u540e,\u4f60\u4e0d\u4f1a\u60f3\u5728\u77ed\u65f6\u95f4\u5185\u518d\u642d\u4e00\u6761\u7ebf.\u5e78\u597d,\u4f60\u53ef\u4ee5\u5728\u5de5\u4e1a\u9ad8\u7089(EBF)\u4e2d\u76f4\u63a5\u7194\u70bc\u6c27\u5316\u7845\u5ca9<br/>\u6df7\u5408\u7269\u7c89,\u83b7\u5f97\u7845\u5ca9\u7c92,\u4f46\u8fd9\u6837\u6ca1\u4ec0\u4e48\u6548\u7387,\u4f1a\u635f\u5931\u5176\u4e2d\u7684\u526f\u4ea7\u7269.PS\uff1a\u6c27\u5316\u7845\u5ca9\u6df7\u5408\u7269\u6709\u65f6\u5019\u4e5f\u53eb\"\u6c27\u5316\u7845\u5ca9<br/>\u91d1\u5c5e\u6df7\u5408\u7269\",\u7f29\u5199\u4e3aNq-MOM."
                },
                {
                    "name": "\u9487\u94a1\u94dc\u6c27",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9487\u94a1\u94dc\u6c27\u5408\u91d1\u952d.png",
                    "x": 276.0,
                    "y": 300.0,
                    "tooltip": "\u5728LuV\u9636\u6bb5\u4e2d,\u9487\u94a1\u94dc\u6c27\u53d8\u5f97\u66f4\u52a0\u91cd\u8981. \u5b83\u9700\u8981EV\u6405\u62cc\u673a\u548c\u949b\u94c2\u9492\u7ebf\u5708\u7684\u5de5\u4e1a\u9ad8\u7089."
                },
                {
                    "name": "\u6c27\u5316\u94ea-\u6c27\u5316\u9506\u6df7\u5408\u7269",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6c27\u5316\u94ea-\u6c27\u5316\u9506\u6df7\u5408\u7269\u7c89.png",
                    "x": 1164.0,
                    "y": 696.0,
                    "tooltip": "\u8fd9\u4e2a\u8fc7\u7a0b\u6709\u70b9\u590d\u6742,\u6240\u4ee5\u6211\u4f1a\u6307\u5bfc\u4f60\u5b8c\u6210\u5b83.\u9996\u5148,\u5c06\u4ece\u6eb6\u89e3\u7f50\u4e2d\u83b7\u5f97\u7684\u7c89\u8fdb\u884c\u79bb\u5fc3.\u94ea\u548c\u9506\u90fd\u662f\u96be\u6eb6\u91d1\u5c5e,\u7c7b\u4f3c<br/>\u4e8e\u949b\u548c\u9506,\u6240\u4ee5\u5b83\u4eec\u7684\u5904\u7406\u8fc7\u7a0b\u6bd4\u8f83\u76f8\u4f3c. \u8bd1\u8005\u6ce8:\u6211\u731c\u4ed6\u60f3\u8bf4\u7684\u662f\"\u7c7b\u4f3c\u4e8e\u94cc\u548c\u94bd\"..."
                },
                {
                    "name": "\u9506\u952d",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/\u9506\u952d.png",
                    "x": 1332.0,
                    "y": 696.0,
                    "tooltip": "\u53ea\u9700\u8981\u5c06\u56db\u6c2f\u5316\u9506\u6eb6\u6db2\u914d\u5408\u9541\u7c89,\u653e\u5165\u5de5\u4e1a\u9ad8\u7089\u4e2d\u8fdb\u884c\u7145\u70e7,\u7136\u540e\u5c31\u5927\u529f\u544a\u6210\u4e86!"
                },
                {
                    "name": "\u9506\u5904\u7406\u7ebf",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u56db\u6c2f\u5316\u9506\u7c89.png",
                    "x": 1248.0,
                    "y": 696.0,
                    "tooltip": "\u9506\u5904\u7406\u7ebf\u7684\u5f00\u7aef,\u540c\u6837\u662f\u5c06\u6c27\u5316\u9506\u4e0e\u6c22\u6c2f\u9178\u8fdb\u884c\u53cd\u5e94.\u6c27\u5316\u9506\u7c89\u672c\u8eab\u57fa\u672c\u6ca1\u7528,\u4e0d\u8fc7...\u505a\u6210\u6eb6\u6db2\u5c31\u6709\u76f8\u5f53\u591a\u7684<br/>\u53ef\u80fd\u4e86."
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
                    "source": "\u805a\u82ef\u5e76\u54aa\u5511",
                    "target": "2-\u785d\u57fa\u6c2f\u82ef"
                },
                {
                    "source": "\u785d\u9178\u6df7\u9178",
                    "target": "2-\u785d\u57fa\u6c2f\u82ef"
                },
                {
                    "source": "3,3-\u4e8c\u6c2f\u8054\u82ef\u80fa",
                    "target": "3,3-\u4e8c\u6c28\u57fa\u8054\u82ef\u80fa"
                },
                {
                    "source": "2-\u785d\u57fa\u6c2f\u82ef",
                    "target": "3,3-\u4e8c\u6c2f\u8054\u82ef\u80fa"
                },
                {
                    "source": "\u73b0\u5728\u8fdb\u884c\u785d\u5316",
                    "target": "\u6765\u70b9\u7b5b\u9009"
                },
                {
                    "source": "\u91cd\u65b0\u89e3\u51b3\u7eaf\u5ea6\u95ee\u9898",
                    "target": "\u4f60\u5feb\u641e\u5b9a\u94d1\u4e86"
                },
                {
                    "source": "\u91d1\u5c5e\u76d0\u662f\u6700\u7cdf\u7cd5\u7684!",
                    "target": "\u53e6\u4e00\u79cd\u9700\u8981\u5934\u75bc\u7684\u9178!"
                },
                {
                    "source": "\u4f46\u662f...\u8fd9\u5f88\u8d35!",
                    "target": "\u53e6\u4e00\u4e2a\u5403\u76d0\u7684"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u6c29"
                },
                {
                    "source": "\u6d78\u51fa\u6d53\u7f29\u7269",
                    "target": "\u7b5b\u9009,\u7b5b\u9009!\u6211\u7684\u7b5b\u9009\u738b\u56fd!"
                },
                {
                    "source": "\u94f1",
                    "target": "\u00a7b\u00a7lA Small Reward: The Infinite Spray Can"
                },
                {
                    "source": "\u94af",
                    "target": "\u00a7b\u00a7lA Small Reward: The Infinite Spray Can"
                },
                {
                    "source": "\u7845\u5ca9\u63ba\u6742\u7684\u6676\u5706",
                    "target": "ASoC\u8fdb\u9636\u82af\u7247\u7ea7\u7cfb\u7edf"
                },
                {
                    "source": "EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "target": "ASoC\u8fdb\u9636\u82af\u7247\u7ea7\u7cfb\u7edf"
                },
                {
                    "source": "\u6c14\u4f53\u53d8\u6210\u6db2\u4f53",
                    "target": "\u4f46\u662f...\u8fd9\u5f88\u8d35!"
                },
                {
                    "source": "\u524d\u5f80\u5c0f\u884c\u661f\u548c\u5176\u4ed6\u4e09\u9636\u661f\u7403\u7684\u8def\u4e0a",
                    "target": "\u6728\u536b\u56db\u4e4b\u65c5"
                },
                {
                    "source": "\u524d\u5f80\u5c0f\u884c\u661f\u548c\u5176\u4ed6\u4e09\u9636\u661f\u7403\u7684\u8def\u4e0a",
                    "target": "\u8c37\u795e\u661f\u4e4b\u65c5"
                },
                {
                    "source": "SoC-\u82af\u7247\u7ea7\u7684\u7cfb\u7edf!",
                    "target": "\u5ec9\u4ef7\u7684\u4f4e\u538b\u7535\u8def"
                },
                {
                    "source": "EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "target": "\u5ec9\u4ef7\u7684\u4f4e\u538b\u7535\u8def"
                },
                {
                    "source": "IV\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u66f4\u4fbf\u5b9c\u7684MV\u7535\u8def"
                },
                {
                    "source": "SoC-\u82af\u7247\u7ea7\u7684\u7cfb\u7edf!",
                    "target": "\u66f4\u4fbf\u5b9c\u7684MV\u7535\u8def"
                },
                {
                    "source": "EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "target": "\u66f4\u4fbf\u5b9c\u7684MV\u7535\u8def"
                },
                {
                    "source": "\u6765\u70b9\u7b5b\u9009",
                    "target": "\u5316\u5b66\u6d78\u6d17!"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "IV\u5316\u5b66\u53cd\u5e94\u91dc"
                },
                {
                    "source": "IV\u5316\u5b66\u53cd\u5e94\u91dc",
                    "target": "\u4e09\u6c27\u5316\u94ec"
                },
                {
                    "source": "\u6700\u540e\u4e00\u6b21\u5206\u79bb-\u94f1&\u9507",
                    "target": "\u540c\u7c7b\u8005,\u805a\u96c6!"
                },
                {
                    "source": "\u8349\u9178",
                    "target": "\u4e0e\u8349\u9178\u7ed3\u5408"
                },
                {
                    "source": "\u00a7b\u00a7lMore Samarium !",
                    "target": "\u00a7b\u00a7lConcentrated Samarium"
                },
                {
                    "source": "\u4e3a\u4ec0\u4e48,Bart,\u4e3a\u4ec0\u4e48?",
                    "target": "\u51b7\u9759\u4e00\u4e0b"
                },
                {
                    "source": "\u7b5b\u51fa\u597d\u4e1c\u897f",
                    "target": "\u7a00\u91ca,\u518d\u4e00\u6b21"
                },
                {
                    "source": "IV\u5316\u5b66\u53cd\u5e94\u91dc",
                    "target": "\u90bb\u4e8c\u7532\u82ef"
                },
                {
                    "source": "\u82ef\u915a",
                    "target": "\u95f4\u82ef\u4e8c\u7532\u9178\u4e8c\u82ef\u916f"
                },
                {
                    "source": "\u90bb\u82ef\u4e8c\u7532\u9178",
                    "target": "\u95f4\u82ef\u4e8c\u7532\u9178\u4e8c\u82ef\u916f"
                },
                {
                    "source": "\u53d6\u51fa\u6ce5\u6e23\u83b7\u5f97\u94f1",
                    "target": "\u6eb6\u89e3\u94f1"
                },
                {
                    "source": "\u7b5b,\u8fd8\u662f\u4e0d\u7b5b?(To Sift, or Not to Sift?)",
                    "target": "\u70d8\u5e72\u771f\u68d2"
                },
                {
                    "source": "\u94ea\u5904\u7406\u7ebf",
                    "target": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u95f4"
                },
                {
                    "source": "\u94c1\u78c1\u6027\u4e0d\u592a\u5f3a...",
                    "target": "\u6c27\u5316\u94d5(EuO)"
                },
                {
                    "source": "\u524d\u5f80\u5c0f\u884c\u661f\u548c\u5176\u4ed6\u4e09\u9636\u661f\u7403\u7684\u8def\u4e0a",
                    "target": "\u6728\u536b\u4e8c\u4e4b\u65c5"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u66f4\u66f4\u597d\u7684\u78c1\u5316\u6746"
                },
                {
                    "source": "\u6eb6\u89e3\u94f1",
                    "target": "\u9700\u8981\u66f4\u591a\u7684\u6c2f"
                },
                {
                    "source": "\u6211\u4eec\u4e0d\u662f\u5728\u7ecf\u8425\u519c\u573a!",
                    "target": "\u6700\u540e,\u771f\u6b63\u7684\u94ea"
                },
                {
                    "source": "\u5206\u79bb\u8fd9\u4e9b\u6700\u540e\u7684\u5fae\u7c92",
                    "target": "\u6700\u540e,\u9490!"
                },
                {
                    "source": "\u7b2c\u4e8c\u6b21\u5206\u79bb-\u948c",
                    "target": "\u6700\u540e\u4e00\u6b21\u5206\u79bb-\u94f1&\u9507"
                },
                {
                    "source": "\u94c2\u7cfb\u5904\u7406-\u5176\u4ed6\u6240\u6709\u91d1\u5c5e",
                    "target": "\u7b2c\u4e00\u6b21\u5206\u79bb-\u94d1"
                },
                {
                    "source": "\u7b2c\u4e00\u6b21\u5206\u79bb-\u94d1",
                    "target": "\u6c14\u4f53\u53d8\u6210\u6db2\u4f53"
                },
                {
                    "source": "\u7b5b\u9009,\u7b5b\u9009!\u6211\u7684\u7b5b\u9009\u738b\u56fd!",
                    "target": "\u51b7\u51bb\u785d\u9178\u76d0"
                },
                {
                    "source": "\u00a7b\u00a7lConcentrated Samarium",
                    "target": "\u00a7b\u00a7lGetting Samarium in IV"
                },
                {
                    "source": "\u00a7b\u00a7lConcentrated Samarium",
                    "target": "\u00a7b\u00a7lGetting Samarium in LuV"
                },
                {
                    "source": "LuV\u80fd\u6e90\u4ed3",
                    "target": "\u00a7b\u00a7lGetting Samarium in LuV"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u53d1\u5149\u7269\u8d28"
                },
                {
                    "source": "\u6c27\u5316\u94ea-\u6c27\u5316\u9506\u6df7\u5408\u7269",
                    "target": "\u94ea\u5904\u7406\u7ebf"
                },
                {
                    "source": "\u76d0\u5230\u54ea\u91cc\u53bb\u4e86?",
                    "target": "\u52a0\u70ed!"
                },
                {
                    "source": "\u94f1",
                    "target": "HSS-S"
                },
                {
                    "source": "HSS-G",
                    "target": "HSS-S"
                },
                {
                    "source": "\u9507",
                    "target": "HSS-S"
                },
                {
                    "source": "\u6700\u540e--\u805a\u82ef\u5e76\u54aa\u5511!",
                    "target": "\u00a7b\u00a7lIntradimensional Input buses"
                },
                {
                    "source": "\u5728IV\u4e2d\u4f60\u4f1a\u8ba8\u538c\u4e4b5\u548c6",
                    "target": "\u00a7b\u00a7lIntradimensional Input buses"
                },
                {
                    "source": "\u5728\u524d\u5f804\u9636\u661f\u7403\u7684\u8def\u4e0a",
                    "target": "\u6728\u536b\u4e00\u4e4b\u65c5"
                },
                {
                    "source": "\u9700\u8981\u66f4\u591a\u7684\u6c2f",
                    "target": "\u94f1"
                },
                {
                    "source": "\u5728IV\u4f60\u4f1a\u8ba8\u538c\u4e4b1-4",
                    "target": "IV\u7ec4\u88c5\u673a"
                },
                {
                    "source": "\u5728IV\u4e2d\u4f60\u4f1a\u8ba8\u538c\u4e4b5\u548c6",
                    "target": "IV\u7535\u8def\u7ec4\u88c5\u673a"
                },
                {
                    "source": "IV\u8d85\u5bfc(8192 EU/t)",
                    "target": "IV\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "\u94f1",
                    "target": "IV\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "IV\u7ec4\u88c5\u673a",
                    "target": "IV\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "IV\u6405\u62cc\u673a"
                },
                {
                    "source": "IV\u6405\u62cc\u673a",
                    "target": "IV\u8d85\u5bfc(8192 EU/t)"
                },
                {
                    "source": "\u94cc\u949b\u5408\u91d1",
                    "target": "IV\u8d85\u5bfc(8192 EU/t)"
                },
                {
                    "source": "HSS-G",
                    "target": "IV\u8d85\u5bfc(8192 EU/t)"
                },
                {
                    "source": "\u5347\u7ea7\u9ad8\u901f\u94a2-G\u7ebf\u5708",
                    "target": "IV\u8d85\u5bfc(8192 EU/t)"
                },
                {
                    "source": "\u94df",
                    "target": "IV\u8d85\u5bfc(8192 EU/t)"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u7ee7\u7eed\u710a\u63a5!"
                },
                {
                    "source": "\u785d\u5316\u65f6\u95f4...\u518d\u4e00\u6b21",
                    "target": "\u6d78\u51fa\u6d53\u7f29\u7269"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)"
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u96c6\u7fa4",
                    "target": "\u5927\u578b\u91cf\u5b50\u7535\u8111"
                },
                {
                    "source": "\u5728\u524d\u5f804\u9636\u661f\u7403\u7684\u8def\u4e0a",
                    "target": "\u6c34\u661f\u4e4b\u65c5"
                },
                {
                    "source": "\u83b7\u5f97\u72ec\u5c45\u77f3\u6d4a\u6eb6\u6db2",
                    "target": "\u72ec\u5c45\u77f3"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u72ec\u5c45\u77f3"
                },
                {
                    "source": "\u53e6\u4e00\u6761\u8def",
                    "target": "\u00a7b\u00a7lMore Samarium !"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u5757\u7845\u5ca9\u952d",
                    "target": "\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u7845"
                },
                {
                    "source": "\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u7845",
                    "target": "\u7845\u5ca9\u63ba\u6742\u7684\u6676\u5706"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u94cc\u949b\u5408\u91d1"
                },
                {
                    "source": "\u5347\u7ea7\u949b\u94c2\u9492\u5408\u91d1\u7ebf\u5708",
                    "target": "\u94cc\u949b\u5408\u91d1"
                },
                {
                    "source": "\u805a\u82ef\u5e76\u54aa\u5511",
                    "target": "\u785d\u9178\u6df7\u9178"
                },
                {
                    "source": "\u70d8\u5e72\u771f\u68d2",
                    "target": "\u785d\u5316\u65f6\u95f4...\u518d\u4e00\u6b21"
                },
                {
                    "source": "\u51b7\u51bb\u785d\u9178\u76d0",
                    "target": "\u94c1\u78c1\u6027\u4e0d\u592a\u5f3a..."
                },
                {
                    "source": "\u7a00\u91ca,\u518d\u4e00\u6b21",
                    "target": "\u73b0\u5728\u8fdb\u884c\u785d\u5316"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u524d\u5f80\u5c0f\u884c\u661f\u548c\u5176\u4ed6\u4e09\u9636\u661f\u7403\u7684\u8def\u4e0a"
                },
                {
                    "source": "\u88c5\u914d\u7ebf",
                    "target": "\u5728\u524d\u5f804\u9636\u661f\u7403\u7684\u8def\u4e0a"
                },
                {
                    "source": "\u6728\u536b\u56db\u4e4b\u65c5",
                    "target": "\u5728\u524d\u5f804\u9636\u661f\u7403\u7684\u8def\u4e0a"
                },
                {
                    "source": "\u94f1",
                    "target": "\u94f1\u9507\u5408\u91d1"
                },
                {
                    "source": "\u9507",
                    "target": "\u94f1\u9507\u5408\u91d1"
                },
                {
                    "source": "\u540c\u7c7b\u8005,\u805a\u96c6!",
                    "target": "\u9507"
                },
                {
                    "source": "\u94c8\u5904\u7406\u5f00\u59cb",
                    "target": "\u8349\u9178"
                },
                {
                    "source": "\u53e6\u4e00\u79cd\u9700\u8981\u5934\u75bc\u7684\u9178!",
                    "target": "\u94af"
                },
                {
                    "source": "\u518d\u6c89...\u4ec0\u4e48?",
                    "target": "\u94af"
                },
                {
                    "source": "IV\u5316\u5b66\u53cd\u5e94\u91dc",
                    "target": "\u94af\u5904\u7406"
                },
                {
                    "source": "\u805a\u82ef\u5e76\u54aa\u5511",
                    "target": "\u82ef\u915a"
                },
                {
                    "source": "\u90bb\u4e8c\u7532\u82ef",
                    "target": "\u90bb\u82ef\u4e8c\u7532\u9178"
                },
                {
                    "source": "\u91cd\u94ec\u9178\u94be",
                    "target": "\u90bb\u82ef\u4e8c\u7532\u9178"
                },
                {
                    "source": "IV\u5316\u5b66\u53cd\u5e94\u91dc",
                    "target": "\u94c2\u7cfb\u5904\u7406-\u5176\u4ed6\u6240\u6709\u91d1\u5c5e"
                },
                {
                    "source": "IV\u5316\u5b66\u53cd\u5e94\u91dc",
                    "target": "\u805a\u82ef\u5e76\u54aa\u5511"
                },
                {
                    "source": "\u95f4\u82ef\u4e8c\u7532\u9178\u4e8c\u82ef\u916f",
                    "target": "\u6700\u540e--\u805a\u82ef\u5e76\u54aa\u5511!"
                },
                {
                    "source": "3,3-\u4e8c\u6c28\u57fa\u8054\u82ef\u80fa",
                    "target": "\u6700\u540e--\u805a\u82ef\u5e76\u54aa\u5511!"
                },
                {
                    "source": "\u785d\u9178\u94be",
                    "target": "\u91cd\u94ec\u9178\u94be"
                },
                {
                    "source": "\u4e09\u6c27\u5316\u94ec",
                    "target": "\u91cd\u94ec\u9178\u94be"
                },
                {
                    "source": "IV\u5316\u5b66\u53cd\u5e94\u91dc",
                    "target": "\u785d\u9178\u94be"
                },
                {
                    "source": "\u7eb3\u7c73\u6676\u5706\u548cCPU",
                    "target": "QBit\u6676\u5706\u548c\u82af\u7247"
                },
                {
                    "source": "IV\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "QBit\u6676\u5706\u548c\u82af\u7247"
                },
                {
                    "source": "\u5355\u6b65EV\u7535\u8def",
                    "target": "\u91cf\u5b50\u5904\u7406\u5668\u96c6\u7fa4"
                },
                {
                    "source": "\u5927\u578b\u91cf\u5b50\u7535\u8111",
                    "target": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "source": "\u5728IV\u4f60\u4f1a\u8ba8\u538c\u4e4b1-4",
                    "target": "\u91cf\u5b50\u4e4b\u661f"
                },
                {
                    "source": "\u6700\u540e\u4e00\u6b21\u5206\u79bb-\u94f1&\u9507",
                    "target": "\u53d6\u51fa\u6ce5\u6e23\u83b7\u5f97\u94f1"
                },
                {
                    "source": "\u91d1\u5c5e\u76d0\u662f\u6700\u7cdf\u7cd5\u7684!",
                    "target": "\u518d\u6c89...\u4ec0\u4e48?"
                },
                {
                    "source": "\u7b5b\u9009\u5f88\u68d2",
                    "target": "\u91cd\u65b0\u89e3\u51b3\u7eaf\u5ea6\u95ee\u9898"
                },
                {
                    "source": "\u4f60\u5feb\u641e\u5b9a\u94d1\u4e86",
                    "target": "\u94d1"
                },
                {
                    "source": "\u94d1",
                    "target": "\u9540\u94d1\u94af"
                },
                {
                    "source": "\u94af",
                    "target": "\u9540\u94d1\u94af"
                },
                {
                    "source": "\u524d\u5f80\u5c0f\u884c\u661f\u548c\u5176\u4ed6\u4e09\u9636\u661f\u7403\u7684\u8def\u4e0a",
                    "target": "\u7f57\u65af128b\u4e4b\u65c5"
                },
                {
                    "source": "\u94f1",
                    "target": "\u948c\u94f1\u5408\u91d1?"
                },
                {
                    "source": "\u948c",
                    "target": "\u948c\u94f1\u5408\u91d1?"
                },
                {
                    "source": "\u51b7\u9759\u4e00\u4e0b",
                    "target": "\u948c"
                },
                {
                    "source": "\u53e6\u4e00\u4e2a\u5403\u76d0\u7684",
                    "target": "\u76d0\u4e0d\u80fd\u5728\u6c34\u4e2d\u50a8\u5b58?"
                },
                {
                    "source": "\u94af\u5904\u7406",
                    "target": "\u91d1\u5c5e\u76d0\u662f\u6700\u7cdf\u7cd5\u7684!"
                },
                {
                    "source": "\u53e6\u4e00\u6761\u8def",
                    "target": "\u9490,\u53e6\u4e00\u6761\u8def"
                },
                {
                    "source": "\u53e6\u4e00\u90e8\u5206",
                    "target": "\u9971\u548c\u9700\u6c42"
                },
                {
                    "source": "\u7b2c\u4e00\u6b21\u5206\u79bb-\u94d1",
                    "target": "\u7b2c\u4e8c\u6b21\u5206\u79bb-\u948c"
                },
                {
                    "source": "\u9971\u548c\u9700\u6c42",
                    "target": "\u5206\u79bb\u8fd9\u4e9b\u6700\u540e\u7684\u5fae\u7c92"
                },
                {
                    "source": "\u7a00\u91ca\u6ce5\u6d46",
                    "target": "\u7b5b\u51fa\u597d\u4e1c\u897f"
                },
                {
                    "source": "\u90a3\u662f\u6211\u7684\u76d0!",
                    "target": "\u7b5b\u9009\u5f88\u68d2"
                },
                {
                    "source": "\u7ea4\u7ef4\u5f3a\u5316\u7535\u8def\u57fa\u677f",
                    "target": "\u5355\u6b65EV\u7535\u8def"
                },
                {
                    "source": "QBit\u6676\u5706\u548c\u82af\u7247",
                    "target": "\u5355\u6b65EV\u7535\u8def"
                },
                {
                    "source": "\u7845\u5ca9\u63ba\u6742\u7684\u6676\u5706",
                    "target": "SoC-\u82af\u7247\u7ea7\u7684\u7cfb\u7edf!"
                },
                {
                    "source": "EV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a",
                    "target": "SoC-\u82af\u7247\u7ea7\u7684\u7cfb\u7edf!"
                },
                {
                    "source": "\u76d0\u4e0d\u80fd\u5728\u6c34\u4e2d\u50a8\u5b58?",
                    "target": "\u785d\u9178\u94a0"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u00a7b\u00a7lSupersized Buses"
                },
                {
                    "source": "\u94c1\u78c1\u6027\u4e0d\u592a\u5f3a...",
                    "target": "\u53e6\u4e00\u90e8\u5206"
                },
                {
                    "source": "IV\u5316\u5b66\u53cd\u5e94\u91dc",
                    "target": "\u53e6\u4e00\u6761\u8def"
                },
                {
                    "source": "\u785d\u9178\u94a0",
                    "target": "\u90a3\u662f\u6211\u7684\u76d0!"
                },
                {
                    "source": "\u76d0\u4e0d\u80fd\u5728\u6c34\u4e2d\u50a8\u5b58?",
                    "target": "\u90a3\u662f\u6211\u7684\u76d0!"
                },
                {
                    "source": "\u00a7b\u00a7lThorium 232?",
                    "target": "\u00a7b\u00a7lThe sane option"
                },
                {
                    "source": "\u7b5b\u9009,\u7b5b\u9009!\u6211\u7684\u7b5b\u9009\u738b\u56fd!",
                    "target": "\u94c8\u5904\u7406\u5f00\u59cb"
                },
                {
                    "source": "\u6765\u70b9\u7b5b\u9009",
                    "target": "\u8fd9\u53ef\u80fd\u4e0d\u592a\u503c"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u00a7b\u00a7lThorium 232?"
                },
                {
                    "source": "\u8fd9\u53ef\u80fd\u4e0d\u592a\u503c",
                    "target": "\u948d\u4e0e\u78f7\u9178\u76d0"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u7b2c5\u9636\u6bb5(IV)"
                },
                {
                    "source": "\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f",
                    "target": "\u7b2c5\u9636\u6bb5(IV)"
                },
                {
                    "source": "\u77f3\u58a8\u70ef",
                    "target": "\u7b2c5\u9636\u6bb5(IV)"
                },
                {
                    "source": "\u94a8\u94a2",
                    "target": "\u7b2c5\u9636\u6bb5(IV)"
                },
                {
                    "source": "\u5316\u5b66\u6d78\u6d17!",
                    "target": "\u7b5b,\u8fd8\u662f\u4e0d\u7b5b?(To Sift, or Not to Sift?)"
                },
                {
                    "source": "\u94f1",
                    "target": "\u00a7b\u00a7lUniversal pickaxe, Vajra"
                },
                {
                    "source": "IV\u8d85\u5bfc(8192 EU/t)",
                    "target": "\u00a7b\u00a7lUniversal pickaxe, Vajra"
                },
                {
                    "source": "\u94c0\u6ee4\u6e23",
                    "target": "\u94c0?"
                },
                {
                    "source": "\u7b5b,\u8fd8\u662f\u4e0d\u7b5b?(To Sift, or Not to Sift?)",
                    "target": "\u94c0\u6ee4\u6e23"
                },
                {
                    "source": "\u5728\u524d\u5f804\u9636\u661f\u7403\u7684\u8def\u4e0a",
                    "target": "\u91d1\u661f\u4e4b\u65c5"
                },
                {
                    "source": "\u00a7b\u00a7lThorium 232?",
                    "target": "\u00a7b\u00a7lWait are you sure?"
                },
                {
                    "source": "\u72ec\u5c45\u77f3",
                    "target": "\u7a00\u91ca\u6ce5\u6d46"
                },
                {
                    "source": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u95f4",
                    "target": "\u6211\u4eec\u4e0d\u662f\u5728\u7ecf\u8425\u519c\u573a!"
                },
                {
                    "source": "\u7b2c\u4e8c\u6b21\u5206\u79bb-\u948c",
                    "target": "\u76d0\u5230\u54ea\u91cc\u53bb\u4e86?"
                },
                {
                    "source": "\u52a0\u70ed!",
                    "target": "\u4e3a\u4ec0\u4e48,Bart,\u4e3a\u4ec0\u4e48?"
                },
                {
                    "source": "\u4e0e\u8349\u9178\u7ed3\u5408",
                    "target": "\u8fd9\u94c8\u5728\u5f00\u73a9\u7b11\u5427?(You Can't Be Cerious!)"
                },
                {
                    "source": "\u91cf\u5b50\u4e4b\u661f",
                    "target": "\u5728IV\u4e2d\u4f60\u4f1a\u8ba8\u538c\u4e4b5\u548c6"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u5728IV\u4f60\u4f1a\u8ba8\u538c\u4e4b1-4"
                },
                {
                    "source": "\u8c37\u795e\u661f\u4e4b\u65c5",
                    "target": "\u4f60\u7684\u7b2c\u4e00\u5757\u7845\u5ca9\u952d"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u9487\u94a1\u94dc\u6c27"
                },
                {
                    "source": "\u5347\u7ea7\u949b\u94c2\u9492\u5408\u91d1\u7ebf\u5708",
                    "target": "\u9487\u94a1\u94dc\u6c27"
                },
                {
                    "source": "\u7a00\u91ca\u6ce5\u6d46",
                    "target": "\u6c27\u5316\u94ea-\u6c27\u5316\u9506\u6df7\u5408\u7269"
                },
                {
                    "source": "\u9506\u5904\u7406\u7ebf",
                    "target": "\u9506\u952d"
                },
                {
                    "source": "\u6c27\u5316\u94ea-\u6c27\u5316\u9506\u6df7\u5408\u7269",
                    "target": "\u9506\u5904\u7406\u7ebf"
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