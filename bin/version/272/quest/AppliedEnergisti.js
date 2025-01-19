
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
                    "name": "1024K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2465.png",
                    "x": 684.0,
                    "y": 156.0,
                    "tooltip": "1024K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u79cd\u7ec4\u4ef6\u4e0e\u4e4b\u524d\u7684\u7ec4\u4ef6\u6ca1\u4ec0\u4e48\u533a\u522b,\u6240\u4e0d\u540c\u7684\u662f,\u5f53\u5c06\u5176\u88c5\u5165\u9ad8\u7ea7\u5b58\u50a8\u5916\u58f3\u5236\u6210\u5143\u4ef6\u540e,\u5b83\u80fd\u88c5\u4e0b\u66f4\u591a\u7684\u4e1c\u897f."
                },
                {
                    "name": "1024k\u5408\u6210\u5b58\u50a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2473.png",
                    "x": 684.0,
                    "y": 192.0,
                    "tooltip": "1024k\u5408\u6210\u5b58\u50a8\u5668",
                    "data": "\u6784\u5efa\u5408\u6210CPU\u7684\u7ec4\u4ef6,\u53ef\u63d0\u4f9b1,048,576\u5b57\u8282\u5408\u6210\u7f13\u5b58."
                },
                {
                    "name": "1024k Essentia Component",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5461816394932849813.png",
                    "x": 684.0,
                    "y": 336.0,
                    "tooltip": "1024k Essentia Component",
                    "data": "Same as 1k."
                },
                {
                    "name": "1024k Essentia Storage Cell",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6699349212107946035.png",
                    "x": 684.0,
                    "y": 372.0,
                    "tooltip": "1024k Essentia Storage Cell",
                    "data": "These hold 2,097,152 units of essentia.\n\nAnd can hold 36 types."
                },
                {
                    "name": "1024K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2490.png",
                    "x": 684.0,
                    "y": 264.0,
                    "tooltip": "1024K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u4e9b\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6\u7684\u4f5c\u7528\u4e0e\u7269\u54c1\u7248\u672c\u5dee\u4e0d\u591a,\u4e0d\u8fc7\u5b58\u50a8\u7684\u662f\u6d41\u4f53."
                },
                {
                    "name": "1024K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2493.png",
                    "x": 684.0,
                    "y": 300.0,
                    "tooltip": "1024K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u8fd9\u79cd\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a8262,144\u6876,\u6216\u8005\u8bf4262,144,000L\u5355\u4e00\u6d41\u4f53. \u7a0d\u5fae\u6bd4\u91cf\u5b50\u7f38II\u66f4\u80fd\u88c5\u4e00\u70b9."
                },
                {
                    "name": "1024K-ME\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2469.png",
                    "x": 684.0,
                    "y": 120.0,
                    "tooltip": "1024K-ME\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u66f4\u66f4\u5927."
                },
                {
                    "name": "16384K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2467.png",
                    "x": 792.0,
                    "y": 156.0,
                    "tooltip": "16384K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u5728 ExtraCells \u65f6\u4ee3\u66fe\u7ecf\u6700\u9ad8\u7ea7\u7684\u7ec4\u4ef6. \u73b0\u5728\u6211\u4eec\u6dfb\u52a0\u4e86\u66f4\u591a!"
                },
                {
                    "name": "16384k\u5408\u6210\u5b58\u50a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2475.png",
                    "x": 792.0,
                    "y": 192.0,
                    "tooltip": "16384k\u5408\u6210\u5b58\u50a8\u5668",
                    "data": "\u6784\u5efa\u5408\u6210CPU\u7684\u7ec4\u4ef6,\u53ef\u63d0\u4f9b16,777,216\u5b57\u8282\u5408\u6210\u7f13\u5b58."
                },
                {
                    "name": "16384k Essentia Component",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4696434011398522032.png",
                    "x": 792.0,
                    "y": 336.0,
                    "tooltip": "16384k Essentia Component",
                    "data": "Same as 1k."
                },
                {
                    "name": "16384k Essentia Storage Cell",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9071312821552184337.png",
                    "x": 792.0,
                    "y": 372.0,
                    "tooltip": "16384k Essentia Storage Cell",
                    "data": "These hold 33,554,432 units of essentia.\n\nAnd can hold 60 types."
                },
                {
                    "name": "16384k Fluid Component",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8598630939261560940.png",
                    "x": 792.0,
                    "y": 264.0,
                    "tooltip": "16384k Fluid Component",
                    "data": "Final one (so far)"
                },
                {
                    "name": "16384k Fluid Storage Cell",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5536293655471471866.png",
                    "x": 792.0,
                    "y": 300.0,
                    "tooltip": "16384k Fluid Storage Cell",
                    "data": "It holds over 32GL."
                },
                {
                    "name": "16384K-ME\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2471.png",
                    "x": 792.0,
                    "y": 120.0,
                    "tooltip": "16384K-ME\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u5b83\u7684\u6750\u8d28\u770b\u8d77\u6765\u5f88\u82b1\u54e8,\u4e0d\u8fc7\u5b83\u7684\u786e\u80fd\u591f\u5b58\u50a8\u5de8\u91cf\u7269\u54c1. \u5b83\u80fd\u5b58\u4e0b133,169,152\u4e2a\u5355\u4e00\u79cd\u7c7b\u7269\u54c1,\u8fd9\u4e2a\u6570\u5b57\u4e0e\u91cf\u5b50\u7bb1-I\u4e00\u81f4. \u8981\u662f\u4f60\u5bf9\u8fd9\u73a9\u610f\u8fd8\u4e0d\u6ee1\u610f\u7684\u8bdd,\u90a3\u5c31\u7528\u66f4\u9ad8\u7ea7\u7684\u91cf\u5b50\u7bb1\u914d\u5408\u5b58\u50a8\u603b\u7ebf\u5427."
                },
                {
                    "name": "16K\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1253.png",
                    "x": 540.0,
                    "y": 156.0,
                    "tooltip": "16K\u7ec4\u4ef6",
                    "data": "\u7b2c\u4e8c\u5927\u7684\u5b58\u50a8\u7ec4\u4ef6,\u7528\u6765\u5236\u4f5c16K\u7684\u5b58\u50a8\u5143\u4ef6,\u6216\u8005\u4f5c\u4e3a64K\u5b58\u50a8\u7ec4\u4ef6\u7684\u96f6\u4ef6. \u4f60\u53ef\u4ee5\u901a\u8fc7\u6e05\u7a7a16K-ME\u5b58\u50a8\u5143\u4ef6\u5185\u7684\u6570\u636e\u6765\u56de\u653616K\u5b58\u50a8\u5355\u5143,\u624b\u6301\u6e05\u7a7a\u540e\u768416K-ME\u5b58\u50a8\u5143\u4ef6\u6309\u4f4fSHIFT\u53f3\u952e."
                },
                {
                    "name": "16K\u5408\u6210\u5b58\u50a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1254.png",
                    "x": 540.0,
                    "y": 192.0,
                    "tooltip": "16K\u5408\u6210\u5b58\u50a8\u5668",
                    "data": "\u5408\u6210\u5904\u7406\u5355\u5143\u7684\u7ec4\u6210\u90e8\u5206,\u53ef\u4ee5\u63d0\u4f9b16384\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4."
                },
                {
                    "name": "16K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2499.png",
                    "x": 540.0,
                    "y": 336.0,
                    "tooltip": "16K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u4e9b\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6\u7684\u4f5c\u7528\u4e0e\u7269\u54c1\u7248\u672c\u5dee\u4e0d\u591a,\u4e0d\u8fc7\u5b58\u50a8\u7684\u662f\u6e90\u8d28."
                },
                {
                    "name": "16K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2503.png",
                    "x": 540.0,
                    "y": 372.0,
                    "tooltip": "16K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u8fd9\u79cd\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a832,768\u5355\u4f4d\u7684\u5355\u4e00\u6e90\u8d28."
                },
                {
                    "name": "16K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2480.png",
                    "x": 540.0,
                    "y": 264.0,
                    "tooltip": "16K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u4e9b\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6\u7684\u4f5c\u7528\u4e0e\u7269\u54c1\u7248\u672c\u5dee\u4e0d\u591a,\u4e0d\u8fc7\u5b58\u50a8\u7684\u662f\u6d41\u4f53."
                },
                {
                    "name": "16K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2484.png",
                    "x": 540.0,
                    "y": 300.0,
                    "tooltip": "16K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u8fd9\u79cd\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a84,096\u6876,\u6216\u8005\u8bf44,096,000L\u5355\u4e00\u6d41\u4f53. \u57fa\u672c\u76f8\u5f53\u4e8e1\u4e2a\u8d85\u7ea7\u7f38I\u7684\u5bb9\u91cf."
                },
                {
                    "name": "16K-ME\u5b58\u50a8\u5355\u5143",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/180.png",
                    "x": 540.0,
                    "y": 120.0,
                    "tooltip": "16K-ME\u5b58\u50a8\u5355\u5143",
                    "data": "\u4e00\u4e2a\u4e2d\u578b\u5b58\u50a8\u5355\u5143.\u62e5\u670916384\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4.16384\u5b57\u8282\u53ef\u4ee5\u5bb9\u7eb32032\u7ec4\u5355\u4e00\u7269\u54c1\u6216\u800563\u79cd\u5408\u8ba11040\u7ec4\u7684\u4e0d\u540c\u7269\u54c1.16K\u5b58\u50a8\u5355\u5143\u6bcf\u5b58\u50a8\u4e00\u7c7b\u7269\u54c1\u9700\u8981\u6d88\u8017128\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4.%n%n\u5b58\u50a8\u5355\u5143\u9700\u8981\u548cME\u9a71\u52a8\u5668\u6216\u8005ME\u7bb1\u5b50\u642d\u914d\u4f7f\u7528,\u8fd9\u4e2a\u7ec4\u4ef6\u5c06\u4ee51.5AE/t\u7684\u901f\u5ea6\u6d88\u8017\u80fd\u6e90.%n%n\u4f60\u53ef\u4ee5\u5c06\u7ec4\u4ef6\u5185\u7684\u6240\u6709\u7269\u54c1\u5168\u90e8\u53d6\u51fa\u540e,\u624b\u6301\u5b58\u50a8\u5143\u4ef6\u6309\u4f4fSHIFT\u53f3\u51fb,\u6216\u8005\u5728\u5408\u6210\u680f\u91cc\u9762\u5c06\u5b83\u62c6\u5206\u6210\u5b58\u50a8\u7ec4\u4ef6\u548c\u5b58\u50a8\u5916\u58f3."
                },
                {
                    "name": "1k-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1314.png",
                    "x": 432.0,
                    "y": 156.0,
                    "tooltip": "1k-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u6700\u5c0f\u7684\u5b58\u50a8\u7ec4\u4ef6,\u7528\u6765\u5236\u4f5c1K\u7684\u5b58\u50a8\u5143\u4ef6,\u6216\u8005\u4f5c\u4e3a4K\u5b58\u50a8\u7ec4\u4ef6\u7684\u96f6\u4ef6. \u4f60\u53ef\u4ee5\u901a\u8fc7\u6e05\u7a7a1K-ME\u5b58\u50a8\u5143\u4ef6\u5185\u7684\u6570\u636e\u6765\u56de\u65361K\u5b58\u50a8\u5355\u5143,\u624b\u6301\u6e05\u7a7a\u540e\u76841K-ME\u5b58\u50a8\u5143\u4ef6\u6309\u4f4fSHIFT\u53f3\u952e."
                },
                {
                    "name": "1K\u5408\u6210\u5b58\u50a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1315.png",
                    "x": 432.0,
                    "y": 192.0,
                    "tooltip": "1K\u5408\u6210\u5b58\u50a8\u5668",
                    "data": "\u5408\u6210\u5904\u7406\u5355\u5143\u7684\u7ec4\u6210\u90e8\u5206,\u53ef\u4ee5\u63d0\u4f9b1024\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4.%n%n\u5408\u6210\u5b58\u50a8\u5668\u662f\u5408\u6210\u5904\u7406\u5355\u5143\u4e2d\u552f\u4e00\u4e0d\u53ef\u7f3a\u5c11\u7684\u7ec4\u4ef6.\u6bcf\u4e00\u4e2a\u5408\u6210\u5904\u7406\u5355\u5143\u90fd\u53ef\u4ee5\u5b8c\u6210\u72ec\u7acb\u7684\u5408\u6210\u5de5\u4f5c(\u800c\u4e0d\u662f\u540c\u4e00\u4e2a\u5408\u6210\u5de5\u4f5c\u7684\u5b50\u4efb\u52a1).\u5408\u6210\u5de5\u4f5c\u5305\u542b\u7684\u6240\u6709\u914d\u65b9\u6240\u9700\u7684\u7269\u54c1\u8d8a\u591a,\u4f60\u5c31\u9700\u8981\u8d8a\u591a\u7684\u5408\u6210\u5b58\u50a8\u5668.\u4f7f\u7528\u4e00\u4e2a\u5927\u5bb9\u91cf\u5408\u6210\u5b58\u50a8\u5668\u914d\u4e0a\u4e00\u5806\u5c0f\u5bb9\u91cf\u7684\u53ef\u80fd\u662f\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f,\u4f46\u8981\u8bb0\u5f97\u5f53\u4f60\u4e0b\u5355\u5408\u6210\u65f6,\u7cfb\u7edf\u4f1a\u5c1d\u8bd5\u4f18\u5148\u4f7f\u7528\u6700\u5927\u7684\u90a3\u4e2a\u5408\u6210\u5b58\u50a8\u5668.\u5408\u6210\u5361\u8bf7\u6c42\u5408\u6210\u4e5f\u4f1a\u7528\u5230\u5408\u6210\u5904\u7406\u5355\u5143.\u6240\u4ee5\u5982\u679c\u8981\u5927\u91cf\u4f7f\u7528\u5408\u6210\u5361\u7684\u8bdd,\u4f60\u9700\u8981\u6570\u4e2a\u72ec\u7acb\u7684\u5408\u6210\u5904\u7406\u5355\u5143.\u4e00\u4e2a\u5408\u6210\u5904\u7406\u5355\u5143\u591a\u65b9\u5757\u7ed3\u6784\u4e0d\u8bba\u6709\u591a\u5927,\u90fd\u53ea\u8981\u4e00\u4e2a\u9891\u9053.\u5408\u6210\u5904\u7406\u5355\u5143\u53ea\u6709\u4e3a\u957f\u65b9\u4f53\u65f6\u624d\u80fd\u6210\u578b."
                },
                {
                    "name": "1K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2497.png",
                    "x": 432.0,
                    "y": 336.0,
                    "tooltip": "1K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u4e9b\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6\u7684\u4f5c\u7528\u4e0e\u7269\u54c1\u7248\u672c\u5dee\u4e0d\u591a,\u4e0d\u8fc7\u5b58\u50a8\u7684\u662f\u6e90\u8d28."
                },
                {
                    "name": "1K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2501.png",
                    "x": 432.0,
                    "y": 372.0,
                    "tooltip": "1K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u4e0e\u5b58\u50a8\u7269\u54c1\u7684\u5143\u4ef6\u4e0d\u540c,\u8fd9\u4e9b\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6\u6bcf\u4e2a\u53ea\u80fd\u5b58\u50a812\u79cd\u6e90\u8d28. 1K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a82,048\u5355\u4f4d\u7684\u5355\u4e00\u6e90\u8d28. \u5982\u679c\u5b58\u50a812\u79cd\u4e0d\u540c\u6e90\u8d28,\u90a3\u4e48\u5e73\u5747\u4e0b\u6765\u6bcf\u79cd\u6e90\u8d28\u7684\u5bb9\u91cf\u4e3a\u5927\u7ea6168\u5355\u4f4d. \u5982\u679c\u6bcf\u79cd\u6e90\u8d28\u90fd\u5b89\u6392\u4e00\u4e2a\u5b58\u50a8\u5143\u4ef6\u7684\u8bdd,\u90a3\u4e48\u81f3\u5c11\u9700\u898167\u4e2a. \u5236\u4f5c\u4e00\u4e2a\u6e90\u8d28\u7ec8\u7aef,\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u4e86\u89e3ME\u7f51\u7edc\u4e2d\u7684\u6e90\u8d28\u72b6\u6001\u4e86. \u6e90\u8d28\u5143\u4ef6\u7684\u8017\u80fd\u4e0e\u7269\u54c1\u5143\u4ef6\u4e00\u81f4."
                },
                {
                    "name": "1K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2478.png",
                    "x": 432.0,
                    "y": 264.0,
                    "tooltip": "1K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u4e9b\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6\u7684\u4f5c\u7528\u4e0e\u7269\u54c1\u7248\u672c\u5dee\u4e0d\u591a,\u4e0d\u8fc7\u5b58\u50a8\u7684\u662f\u6d41\u4f53."
                },
                {
                    "name": "1K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2482.png",
                    "x": 432.0,
                    "y": 300.0,
                    "tooltip": "1K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u4e0e\u5b58\u50a8\u7269\u54c1\u7684\u5143\u4ef6\u4e0d\u540c,\u8fd9\u4e9b\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6\u6bcf\u4e2a\u53ea\u80fd\u5b58\u50a85\u79cd\u6d41\u4f53. 1K\u7684\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a8256\u6876\u5355\u4e00\u6d41\u4f53. \u5982\u679c\u5b58\u50a85\u79cd\u6d41\u4f53,\u90a3\u4e48\u5e73\u5747\u4e0b\u6765\u6bcf\u79cd\u6d41\u4f53\u7684\u5bb9\u91cf\u4e3a51\u53c81/5\u6876. \u5236\u4f5c\u4e00\u4e2a\u6d41\u4f53\u7ec8\u7aef,\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u4e86\u89e3ME\u7f51\u7edc\u4e2d\u7684\u6d41\u4f53\u72b6\u6001\u4e86."
                },
                {
                    "name": "1K-ME\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1313.png",
                    "x": 432.0,
                    "y": 120.0,
                    "tooltip": "1K-ME\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u6700\u5e95\u5c42\u7684\u5b58\u50a8\u5355\u5143.\u62e5\u67091024\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4,\u53ef\u4ee5\u5bb9\u7eb3127\u7ec4\u5355\u4e00\u7269\u54c1\u6216\u800563\u79cd\u5408\u8ba165\u7ec4\u7684\u4e0d\u540c\u7269\u54c1.1K\u5b58\u50a8\u5355\u5143\u6bcf\u5b58\u50a8\u4e00\u7c7b\u7269\u54c1\u9700\u8981\u6d88\u80178\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4.%n%n\u5b58\u50a8\u5355\u5143\u9700\u8981\u548cME\u9a71\u52a8\u5668\u6216\u8005ME\u7bb1\u5b50\u642d\u914d\u4f7f\u7528,\u8fd9\u4e2a\u7ec4\u4ef6\u5c06\u4ee50.5AE/t\u7684\u901f\u5ea6\u6d88\u8017\u80fd\u6e90.%n%n\u4f60\u53ef\u4ee5\u5c06\u7ec4\u4ef6\u5185\u7684\u6240\u6709\u7269\u54c1\u5168\u90e8\u53d6\u51fa\u540e,\u624b\u6301\u5b58\u50a8\u5143\u4ef6\u6309\u4f4fSHIFT\u53f3\u51fb,\u6216\u8005\u5728\u5408\u6210\u680f\u91cc\u9762\u5c06\u5b83\u62c6\u5206\u6210\u5b58\u50a8\u7ec4\u4ef6\u548c\u5b58\u50a8\u5916\u58f3.%n%n\u4f60\u53ef\u4ee5\u5728\u5143\u4ef6\u5de5\u4f5c\u53f0\u4e2d\u683c\u5f0f\u5316\u5b58\u50a8\u5143\u4ef6."
                },
                {
                    "name": "256K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2464.png",
                    "x": 648.0,
                    "y": 156.0,
                    "tooltip": "256K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u79cd\u7ec4\u4ef6\u4e0e\u4e4b\u524d\u7684\u7ec4\u4ef6\u6ca1\u4ec0\u4e48\u533a\u522b,\u6240\u4e0d\u540c\u7684\u662f,\u5f53\u5c06\u5176\u88c5\u5165\u9ad8\u7ea7\u5b58\u50a8\u5916\u58f3\u5236\u6210\u5143\u4ef6\u540e,\u5b83\u80fd\u88c5\u4e0b\u66f4\u591a\u7684\u4e1c\u897f."
                },
                {
                    "name": "256k\u5408\u6210\u5b58\u50a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2472.png",
                    "x": 648.0,
                    "y": 192.0,
                    "tooltip": "256k\u5408\u6210\u5b58\u50a8\u5668",
                    "data": "\u6784\u5efa\u5408\u6210CPU\u7684\u7ec4\u4ef6,\u53ef\u63d0\u4f9b262,144\u5b57\u8282\u5408\u6210\u7f13\u5b58."
                },
                {
                    "name": "256k Essentia Component",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4728780650118080217.png",
                    "x": 648.0,
                    "y": 336.0,
                    "tooltip": "256k Essentia Component",
                    "data": "Same as 1k."
                },
                {
                    "name": "256k Essentia Storage Cell",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7584910742716174902.png",
                    "x": 648.0,
                    "y": 372.0,
                    "tooltip": "256k Essentia Storage Cell",
                    "data": "These hold 524,288 units of essentia.\n\nAnd can hold 24 types."
                },
                {
                    "name": "256K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2489.png",
                    "x": 648.0,
                    "y": 264.0,
                    "tooltip": "256K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u4e9b\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6\u7684\u4f5c\u7528\u4e0e\u7269\u54c1\u7248\u672c\u5dee\u4e0d\u591a,\u4e0d\u8fc7\u5b58\u50a8\u7684\u662f\u6d41\u4f53."
                },
                {
                    "name": "256K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2492.png",
                    "x": 648.0,
                    "y": 300.0,
                    "tooltip": "256K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u8fd9\u79cd\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a865,536\u6876,\u6216\u8005\u8bf465,536,000L\u5355\u4e00\u6d41\u4f53. \u7a0d\u5fae\u6bd4\u8d85\u7ea7\u7f38V\u66f4\u80fd\u88c5\u4e00\u70b9."
                },
                {
                    "name": "256K-ME\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2468.png",
                    "x": 648.0,
                    "y": 120.0,
                    "tooltip": "256K-ME\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u66f4\u5927."
                },
                {
                    "name": "4096K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2466.png",
                    "x": 756.0,
                    "y": 156.0,
                    "tooltip": "4096K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u79cd\u7ec4\u4ef6\u4e0e\u4e4b\u524d\u7684\u7ec4\u4ef6\u6ca1\u4ec0\u4e48\u533a\u522b,\u6240\u4e0d\u540c\u7684\u662f,\u5f53\u5c06\u5176\u88c5\u5165\u9ad8\u7ea7\u5b58\u50a8\u5916\u58f3\u5236\u6210\u5143\u4ef6\u540e,\u5b83\u80fd\u88c5\u4e0b\u66f4\u591a\u7684\u4e1c\u897f."
                },
                {
                    "name": "4096k\u5408\u6210\u5b58\u50a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2474.png",
                    "x": 756.0,
                    "y": 192.0,
                    "tooltip": "4096k\u5408\u6210\u5b58\u50a8\u5668",
                    "data": "\u6784\u5efa\u5408\u6210CPU\u7684\u7ec4\u4ef6,\u53ef\u63d0\u4f9b4,194,304\u5b57\u8282\u5408\u6210\u7f13\u5b58."
                },
                {
                    "name": "4096k Essentia Component",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7214976492058174101.png",
                    "x": 756.0,
                    "y": 336.0,
                    "tooltip": "4096k Essentia Component",
                    "data": "Same as 1k."
                },
                {
                    "name": "4096k Essentia Storage Cell",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6004958964934582288.png",
                    "x": 756.0,
                    "y": 372.0,
                    "tooltip": "4096k Essentia Storage Cell",
                    "data": "These hold 8,388,608 units of essentia.\n\nAnd can hold 48 types."
                },
                {
                    "name": "4096K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2491.png",
                    "x": 756.0,
                    "y": 264.0,
                    "tooltip": "4096K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u53c8\u4e00\u4e2a\uff0c\u4e5f\u662f\u6700\u9ad8\u9636\u7684\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6.(\u6682\u65f6)"
                },
                {
                    "name": "4096K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2494.png",
                    "x": 756.0,
                    "y": 300.0,
                    "tooltip": "4096K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u5b83\u80fd\u5b58\u50a81,048,576\u6876,\u6216\u8005\u8bf41,048,576,000L. \u5bb9\u91cf\u4e0e\u91cf\u5b50\u7f38IV\u5927\u81f4\u76f8\u7b49."
                },
                {
                    "name": "4096K-ME\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2470.png",
                    "x": 756.0,
                    "y": 120.0,
                    "tooltip": "4096K-ME\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u4f60\u8fd8\u5728\u671f\u5f85\u4ec0\u4e48? \u66f4\u66f4\u66f4\u5927."
                },
                {
                    "name": "4K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1317.png",
                    "x": 468.0,
                    "y": 156.0,
                    "tooltip": "4K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u7b2c\u4e8c\u5c0f\u7684\u5b58\u50a8\u7ec4\u4ef6,\u7528\u6765\u5236\u4f5c4K\u7684\u5b58\u50a8\u5143\u4ef6,\u6216\u8005\u4f5c\u4e3a16K\u5b58\u50a8\u7ec4\u4ef6\u7684\u96f6\u4ef6. \u4f60\u53ef\u4ee5\u901a\u8fc7\u6e05\u7a7a4K-ME\u5b58\u50a8\u5143\u4ef6\u5185\u7684\u6570\u636e\u6765\u56de\u65364K\u5b58\u50a8\u5355\u5143,\u624b\u6301\u6e05\u7a7a\u540e\u76844K-ME\u5b58\u50a8\u5143\u4ef6\u6309\u4f4fSHIFT\u53f3\u952e."
                },
                {
                    "name": "4K\u5408\u6210\u5b58\u50a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1318.png",
                    "x": 468.0,
                    "y": 192.0,
                    "tooltip": "4K\u5408\u6210\u5b58\u50a8\u5668",
                    "data": "\u5408\u6210\u5904\u7406\u5355\u5143\u7684\u7ec4\u6210\u90e8\u5206,\u53ef\u4ee5\u63d0\u4f9b4096\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4."
                },
                {
                    "name": "4K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2498.png",
                    "x": 468.0,
                    "y": 336.0,
                    "tooltip": "4K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u4e9b\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6\u7684\u4f5c\u7528\u4e0e\u7269\u54c1\u7248\u672c\u5dee\u4e0d\u591a,\u4e0d\u8fc7\u5b58\u50a8\u7684\u662f\u6e90\u8d28."
                },
                {
                    "name": "4K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2502.png",
                    "x": 468.0,
                    "y": 372.0,
                    "tooltip": "4K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u8fd9\u79cd\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a88,192\u5355\u4f4d\u7684\u5355\u4e00\u6e90\u8d28."
                },
                {
                    "name": "4K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2479.png",
                    "x": 468.0,
                    "y": 264.0,
                    "tooltip": "4K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u4e9b\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6\u7684\u4f5c\u7528\u4e0e\u7269\u54c1\u7248\u672c\u5dee\u4e0d\u591a,\u4e0d\u8fc7\u5b58\u50a8\u7684\u662f\u6d41\u4f53."
                },
                {
                    "name": "4K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2483.png",
                    "x": 468.0,
                    "y": 300.0,
                    "tooltip": "4K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u8fd9\u79cd\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a81,024\u6876,\u6216\u8005\u8bf41,024,000L\u5355\u4e00\u6d41\u4f53."
                },
                {
                    "name": "4K-ME\u5b58\u50a8\u5355\u5143",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1316.png",
                    "x": 468.0,
                    "y": 120.0,
                    "tooltip": "4K-ME\u5b58\u50a8\u5355\u5143",
                    "data": "\u7b2c\u4e8c\u5c42\u7684\u5b58\u50a8\u5355\u5143.\u62e5\u67094096\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4.4096\u5b57\u8282\u53ef\u4ee5\u5bb9\u7eb3508\u7ec4\u5355\u4e00\u7269\u54c1\u6216\u800563\u79cd\u5408\u8ba1260\u7ec4\u7684\u4e0d\u540c\u7269\u54c1.4K\u5b58\u50a8\u5355\u5143\u6bcf\u5b58\u50a8\u4e00\u7c7b\u7269\u54c1\u9700\u8981\u6d88\u801732\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4.%n%n\u5b58\u50a8\u5355\u5143\u9700\u8981\u548cME\u9a71\u52a8\u5668\u6216\u8005ME\u7bb1\u5b50\u642d\u914d\u4f7f\u7528,\u8fd9\u4e2a\u7ec4\u4ef6\u5c06\u4ee51AE/t\u7684\u901f\u5ea6\u6d88\u8017\u80fd\u6e90.%n%n\u4f60\u53ef\u4ee5\u5c06\u7ec4\u4ef6\u5185\u7684\u6240\u6709\u7269\u54c1\u5168\u90e8\u53d6\u51fa\u540e,\u624b\u6301\u5b58\u50a8\u5143\u4ef6\u6309\u4f4fSHIFT\u53f3\u51fb,\u6216\u8005\u5728\u5408\u6210\u680f\u91cc\u9762\u5c06\u5b83\u62c6\u5206\u6210\u5b58\u50a8\u7ec4\u4ef6\u548c\u5b58\u50a8\u5916\u58f3."
                },
                {
                    "name": "64K\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1256.png",
                    "x": 576.0,
                    "y": 156.0,
                    "tooltip": "64K\u7ec4\u4ef6",
                    "data": "\u76f8\u5bf9\u800c\u8a00\u6700\u5927\u7684\u5b58\u50a8\u7ec4\u4ef6,\u7528\u6765\u5236\u4f5c64K\u7684\u5b58\u50a8\u5143\u4ef6. \u4f60\u53ef\u4ee5\u901a\u8fc7\u6e05\u7a7a64K-ME\u5b58\u50a8\u5143\u4ef6\u5185\u7684\u6570\u636e\u6765\u56de\u653664K\u5b58\u50a8\u5355\u5143,\u624b\u6301\u6e05\u7a7a\u540e\u768464K-ME\u5b58\u50a8\u5143\u4ef6\u6309\u4f4fSHIFT\u53f3\u952e."
                },
                {
                    "name": "64K\u5408\u6210\u5b58\u50a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1257.png",
                    "x": 576.0,
                    "y": 192.0,
                    "tooltip": "64K\u5408\u6210\u5b58\u50a8\u5668",
                    "data": "\u5408\u6210\u5904\u7406\u5355\u5143\u7684\u7ec4\u6210\u90e8\u5206,\u53ef\u4ee5\u63d0\u4f9b65536\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4."
                },
                {
                    "name": "64K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2500.png",
                    "x": 576.0,
                    "y": 336.0,
                    "tooltip": "64K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u6700\u9ad8\u9636\u7684\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6.(\u6682\u65f6)"
                },
                {
                    "name": "64K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2504.png",
                    "x": 576.0,
                    "y": 372.0,
                    "tooltip": "64K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u8fd9\u79cd\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a8131,072\u5355\u4f4d\u7684\u5355\u4e00\u6e90\u8d28."
                },
                {
                    "name": "64K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2481.png",
                    "x": 576.0,
                    "y": 264.0,
                    "tooltip": "64K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "data": "\u8fd9\u4e9b\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6\u7684\u4f5c\u7528\u4e0e\u7269\u54c1\u7248\u672c\u5dee\u4e0d\u591a,\u4e0d\u8fc7\u5b58\u50a8\u7684\u662f\u6d41\u4f53."
                },
                {
                    "name": "64K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2485.png",
                    "x": 576.0,
                    "y": 300.0,
                    "tooltip": "64K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u8fd9\u79cd\u5143\u4ef6\u53ef\u4ee5\u5b58\u50a816,384\u6876,\u6216\u8005\u8bf416,384,000L\u5355\u4e00\u6d41\u4f53. \u57fa\u672c\u76f8\u5f53\u4e8e1\u4e2a\u8d85\u7ea7\u7f38III\u7684\u5bb9\u91cf."
                },
                {
                    "name": "64K-ME\u5b58\u50a8\u5355\u5143",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1255.png",
                    "x": 576.0,
                    "y": 120.0,
                    "tooltip": "64K-ME\u5b58\u50a8\u5355\u5143",
                    "data": "\u76f8\u5bf9\u800c\u8a00\u6700\u5927\u7684\u5b58\u50a8\u5355\u5143.\u62e5\u670965536\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4.65536\u5b57\u8282\u53ef\u4ee5\u5bb9\u7eb38128\u7ec4\u5355\u4e00\u7269\u54c1\u6216\u800563\u79cd\u5408\u8ba14160\u7ec4\u7684\u4e0d\u540c\u7269\u54c1.64K\u5b58\u50a8\u5355\u5143\u6bcf\u5b58\u50a8\u4e00\u7c7b\u7269\u54c1\u9700\u8981\u6d88\u8017512\u5b57\u8282\u7684\u5b58\u50a8\u7a7a\u95f4.%n%n\u5b58\u50a8\u5355\u5143\u9700\u8981\u548cME\u9a71\u52a8\u5668\u6216\u8005ME\u7bb1\u5b50\u642d\u914d\u4f7f\u7528,\u8fd9\u4e2a\u7ec4\u4ef6\u5c06\u4ee52AE/t\u7684\u901f\u5ea6\u6d88\u8017\u80fd\u6e90.%n%n\u4f60\u53ef\u4ee5\u5c06\u7ec4\u4ef6\u5185\u7684\u6240\u6709\u7269\u54c1\u5168\u90e8\u53d6\u51fa\u540e,\u624b\u6301\u5b58\u50a8\u5143\u4ef6\u6309\u4f4fSHIFT\u53f3\u51fb,\u6216\u8005\u5728\u5408\u6210\u680f\u91cc\u9762\u5c06\u5b83\u62c6\u5206\u6210\u5b58\u50a8\u7ec4\u4ef6\u548c\u5b58\u50a8\u5916\u58f3."
                },
                {
                    "name": "ME\u6570\u5b57\u5947\u70b9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/468.png",
                    "x": 864.0,
                    "y": 156.0,
                    "tooltip": "ME\u6570\u5b57\u5947\u70b9",
                    "data": "\u4ec0\u4e48?\u4f60\u88c5\u6ee1\u4e86\u91cf\u5b50\u5b58\u50a8\u5143\u4ef6?\u6211\u5e0c\u671b\u88c5\u7684\u662f\u4e9b\u6bd4\u5706\u77f3\u66f4\u597d\u7684\u4e1c\u897f.\u603b\u4e4b,\u4f60\u6700\u597d\u505a\u4e2a\u66f4\u5927\u4e9b\u7684.%n%n\u5514\u5463,\u7ed9\u4e00\u4e2a\u5143\u4ef6\u52a0\u4e0a\u66f4\u591a\u7684\u5b58\u50a8\u7a7a\u95f4\u4f1a\u5bfc\u81f4\u5b83\u7684\u4fe1\u606f\u5bc6\u5ea6\u8fc7\u5927,\u4ee5\u81f3\u4e8e\u574d\u7f29\u6210\u4e86\u4e00\u4e2a\u5947\u70b9.\u90a3\u4e48,\u4e3a\u4f55\u4e0d\u806a\u660e\u4e9b,\u76f4\u63a5\u7528\u4e00\u4e2a\u73b0\u6210\u7684\u5947\u70b9\u5462!\u5728\u5b83\u5468\u56f4\u6253\u9020\u4e0a\u575a\u56fa\u7684\u5916\u58f3,\u88c5\u4e9b\u8fde\u63a5\u90e8\u4ef6,\u5e94\u8be5\u5c31\u597d\u4e86.\u4e0d\u8fc7\u6700\u597d\u7528\u4e00\u4e2a\u6c38\u6052\u5947\u70b9\u4ee5\u786e\u4fdd\u4e00\u5207\u7a33\u5b9a.%n%n%nME\u6570\u5b57\u5947\u70b9\u53ef\u4ee5\u5b58\u50a8\u8d85\u8fc7400\u4ebf\u4ebf(\u8bd1\u8005\u6ce8:\u5b9e\u9645\u50a8\u91cf\u4e3a2^62)\u4e2a\u7269\u54c1.\u5982\u679c\u4f60\u6210\u529f\u5730\u586b\u6ee1\u4e86\u4e00\u4e2a\u6570\u5b57\u5947\u70b9,\u8bf7\u8054\u7cfb\u5f00\u53d1\u56e2\u961f,\u8fd9\u6837\u4ed6\u4eec\u5c31\u80fd\u4ee5\u4f5c\u5f0a\u4e3a\u7531\u5c01\u7981\u4f60,...\u989d,\u6211\u662f\u8bf4\u606d\u559c\u4f60\u8fbe\u6210\u6210\u5c31,\u80af\u5b9a\u662f\u8fd9\u6837!"
                },
                {
                    "name": "Adv. Stocking Bus",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5092663277638354864.png",
                    "x": 48.0,
                    "y": 84.0,
                    "tooltip": "Adv. Stocking Bus",
                    "data": "Stocking bus but better!\n\nThis one can pull first 16 types of items automatically from ME network, which can be useful for some automations. Minimum stack size and refresh time can be configured in the GUI.\n\n[note]Using this on your main network is probably not a very good idea.[/note]"
                },
                {
                    "name": "AE2\u6d41\u4f53\u5408\u6210(AE2FC)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3250.png",
                    "x": 396.0,
                    "y": 300.0,
                    "tooltip": "AE2\u6d41\u4f53\u5408\u6210(AE2FC)",
                    "data": "\u597d\u597d\u597d,\u8fd9\u513f\u6709\u4ec0\u4e48?\u4e0d\u518d\u9700\u8981\u5bb9\u91cf\u74f6\u4e86?\u6ca1\u95e8!%n\u4e0d\u8bba\u5982\u4f55,\u5728\u542c\u7740\u67d0\u4e9b\u4eba\u5492\u9a82\"\u5bb9\u91cf\u74f6\u662f*\u72d7\u5c4e*,\u4f46\u5374\u662f*\u552f\u4e00\u7684*\u53ef\u4ee5\u81ea\u52a8\u5316\u6d41\u4f53\u5408\u6210\u548c\u88c5\u914d\u7ebf\u7684\u65b9\u5f0f\"\u65f6,\u4f60\u5df2\u7ecf\u53ef\u4ee5\u7528\u4e0a\u8fd9\u4e2a\u7531GlodBlock\u4ece\u9ad8\u7248\u672c\u79fb\u690d\u7684\u3001\u5f3a\u5927\u7684AE2\u9644\u5c5emod\u5566.\u901a\u8fc7\u5176\u4ed6\u5f00\u53d1\u8005\u7684\u5e2e\u52a9.%n%n\u73b0\u5728,\u9700\u8981\u4ec0\u4e48\u624d\u80fd\u8ba9\u8fd9\u4e2a\u7f8e\u5999\u7684\u73a9\u610f\u8fd0\u4f5c\u5462?%n\u6bcf\u4e2aME\u7cfb\u7edf\u90fd\u9700\u8981\u4e00\u4e2aME\u6d41\u4f53\u79bb\u6563\u5668,\u5b83\u652f\u6301\u6309\u9700\u5408\u6210.\u867d\u7136\u6ca1\u6709\u6d41\u4f53\u79bb\u6563\u5668,\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528AE2FC\u8f6c\u8fd0\u6d41\u4f53;\u4f46\u5b83\u662f\u81ea\u52a8\u5408\u6210\u5fc5\u9700\u7684.%n%n\u7136\u540e\u4f60\u8fd8\u9700\u8981\u4e00\u4e2aME\u6d41\u4f53\u6837\u677f\u7ec8\u7aef\u6216\u662fME\u589e\u5e7f\u6d41\u4f53\u6837\u677f\u7ec8\u7aef,\u540e\u8005\u7528\u4e8e\u88c5\u914d\u7ebf.%n%n\u4e66\u5199\u6837\u677f\u65f6,\u4f60\u4f1a\u6ce8\u610f\u5230\u6d41\u4f53\u653e\u7f6e\u7684\u6837\u5f0f\u5c31\u5982\u540c\u7269\u54c1\u4e00\u6837.%n\u5b8c\u6210\u4e66\u5199\u7684\u6837\u677f\u770b\u7740\u662f\u84dd\u8272\u7684.\u5c06\u5176\u653e\u7f6e\u5728ME\u4e8c\u5408\u4e00\u63a5\u53e3\u4e2d,\u80fd\u4f7fAE2\"\u540c\u65f6\"\u53d1\u9001\u6d41\u4f53\u548c\u7269\u54c1.\u6ce8\u610f,\"\u540c\u65f6\"\u662f\u8bf4\"\u4e24\u8005\u90fd\u4f1a\",\u800c\u5728\u5148\u540e\u987a\u5e8f\u4e0a,AE2\u4f1a\u5148\u53d1\u9001\u6d41\u4f53,\u518d\u53d1\u9001\u7269\u54c1.%n\u5982\u679c\u60f3\u5c06\u6d41\u4f53\u50a8\u5b58\u5728\u4e8c\u5408\u4e00\u63a5\u53e3\u4e2d,\u4f60\u53ef\u4ee5\u70b9\u51fbGUI\u53f3\u4e0a\u89d2\u4ee5\u5207\u6362\u8bbe\u7f6e\u754c\u9762.%n%n\u5982\u679c\u4f60\u5728\u666e\u901a\u63a5\u53e3\u754c\u9762\u4e2d\u4f7f\u7528\u84dd\u8272\u6837\u677f(\u6d41\u4f53\u6837\u677f),AE2\u4f1a\u4ee5\u6d41\u4f53\u5305\u7684\u5f62\u5f0f\u53d1\u9001\u6d41\u4f53.\u8fd9\u53ea\u662f\u7528\u7269\u54c1\u7684\u5f62\u5f0f\u6765\u4ee3\u8868\u6d41\u4f53.ME\u6d41\u4f53\u5c01\u5305\u89e3\u7801\u5668\u53ef\u4ee5\u5c06\u5176\u53d8\u56de\u6d41\u4f53,\u5e76\u50a8\u5b58\u5728\u6d41\u4f53\u69fd\u4e2d.%n%n\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u539f\u6750\u6599\u7f13\u5b58\u4ed3(\u5927\u578b\u6216\u662f\u666e\u901a\u7684),\u8fd9\u6837\u4f60\u7531\u6837\u677f\u53d1\u9001\u7684\u7269\u54c1\u548c\u6d41\u4f53\u5c31\u90fd\u80fd\u5b58\u50a8\u5728\u4e00\u4e2a\u65b9\u5757\u5185\u90e8\u4e86.\u666e\u901a\u7684\u539f\u6750\u6599\u7f13\u5b58\u4ed3\u53ef\u4ee5\u5b58\u50a89\u7ec4\u7269\u54c1\u548c4\u79cd\u6d41\u4f53,\u5927\u578b\u7684\u5219\u662f27\u7ec4\u7269\u54c1\u548c7\u79cd\u6d41\u4f53.%n\u901a\u8fc7\u7269\u54c1\u6216\u662f\u6d41\u4f53\u5bfc\u7ba1\u4e4b\u7c7b\u7684\u624b\u6bb5,\u5c31\u53ef\u4ee5\u7528\u5b83\u81ea\u52a8\u5316\u591a\u65b9\u5757\u673a\u5668.%n%n\u5982\u679c\u4f60\u60f3\u81ea\u52a8\u5316\u5355\u65b9\u5757\u673a\u5668,\u90a3\u5c31\u5982\u540c\u8282\u98df\u671f\u95f4\u5403\u5de7\u514b\u529b\u86cb\u7cd5\u4e00\u6837\u7b80\u5355:%n\u4e66\u5199\u6837\u677f,\u5236\u9020\u4e00\u4e2a\u4e8c\u5408\u4e00\u63a5\u53e3,\u5f53\u5f53\u5f53\u5f53--\u5b8c\u6210!%n\u5b83\u4f1a\u81ea\u52a8\u628a\u6d41\u4f53\u585e\u5230\u5355\u65b9\u5757\u673a\u5668\u7684\u6d41\u4f53\u683c\u5b50\u91cc.%n%n\u81ea\u52a8\u5316\u88c5\u914d\u7ebf\u4e5f\u5f88\u7b80\u5355.\u5b83\u548c\u7279\u5b9a\u7684\u5bb9\u91cf\u74f6\u8bbe\u7f6e\u662f\u4e00\u6837\u7684,\u53ea\u4e0d\u8fc7\u7528\u6d41\u4f53\u5c01\u5305\u89e3\u7801\u5668\u66ff\u6362\u4e86\u6d41\u4f53\u50a8\u7f50,\u5e76\u4f7f\u7528\u6d41\u4f53\u5b58\u50a8\u603b\u7ebf\u8f93\u5165\u6d41\u4f53.\u540c\u6837\u5730,\u5148\u53d1\u9001\u6d41\u4f53,\u518d\u53d1\u9001\u7269\u54c1--\u53ea\u8981\u4f7f\u7528\u4e86\u589e\u5e7f\u6d41\u4f53\u6837\u677f\u7ec8\u7aef\u4e2d\u7684\"\u4f18\u5148\u53d1\u9001\u6d41\u4f53\"\u6309\u94ae(\u7531Runakai\u548cRukern\u5236\u4f5c)\u5c31\u884c.\u8bf7\u786e\u4fdd\u7ed9\u6d41\u4f53\u5c01\u5305\u89e3\u7801\u5668\u63d0\u4f9b\u5355\u72ec\u7684\u5b50\u7f51\u7edc.\u5982\u679c\u4f60\u9700\u8981\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f,\u8bf7\u8bbf\u95eeWiki:%n%nhttps://gtnh.miraheze.org/wiki/AE2FC%n%n\u66f4\u591a\u5b58\u50a8\u5355\u51432(ExtraCells2)mod\u73b0\u5728\u5df2\u7ecf\u5f03\u7528\u4e86.\u786e\u4fdd\u4f60\u5c06\u6240\u6709\u65e7\u7684\u5143\u4ef6\u8f6c\u6362\u4e3aAE2\u548cAE2FC\u5143\u4ef6.%n"
                },
                {
                    "name": "AE\u6e90\u8d28\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2495.png",
                    "x": 396.0,
                    "y": 336.0,
                    "tooltip": "AE\u6e90\u8d28\u5b58\u50a8",
                    "data": "\u8fd9\u662f1K\u30014K\u300116K\u548c64K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6\u6240\u9700\u7684\u6e90\u8d28\u5904\u7406\u5668.%n%n\u7528ME\u7f51\u7edc\u6765\u5b58\u50a8\u6240\u6709\u8ba8\u538c\u7684\u6e90\u8d28\u5427! \u522b\u5fd8\u4e86\u5148\u89e3\u9501\u76f8\u5e94\u7814\u7a76."
                },
                {
                    "name": "AE\u7a7a\u95f4\u5b58\u50a82",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2506.png",
                    "x": 432.0,
                    "y": 48.0,
                    "tooltip": "AE\u7a7a\u95f4\u5b58\u50a82",
                    "data": "2^3-\u7a7a\u95f4\u5b58\u50a8\u5143\u4ef6\u7684\u4e3b\u8981\u7ec4\u4ef6."
                },
                {
                    "name": "AE\u7a7a\u95f4\u5b58\u50a81",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2505.png",
                    "x": 396.0,
                    "y": 48.0,
                    "tooltip": "AE\u7a7a\u95f4\u5b58\u50a81",
                    "data": "\u8fd9\u662f2^3\u300116^3\u548c128^3\u7a7a\u95f4\u7ec4\u4ef6\u6240\u9700\u76841\u9636\u7a7a\u95f4\u5904\u7406\u5668.%n%n\u4f60\u662f\u5426\u6709\u8fc7\u6536\u62fe\u884c\u88c5\u5e76\u642c\u52a8\u6574\u4e2a\u57fa\u5730\u7684\u60f3\u6cd5? \u7136\u540e\u53c8\u89c9\u5f97\u642c\u5bb6\u5b9e\u5728\u592a\u9ebb\u70e6\u4e86? \u5e0c\u671b\u80fd\u76f4\u63a5\u628a\u6574\u4e2a\u57fa\u5730\u6253\u5305\u5e26\u8d70? \u597d\u5427,\u73b0\u5728\u4f60...\u5443...\u8fd8\u662f\u505a\u4e0d\u5230,\u56e0\u4e3aGT\u65b9\u5757\u4e0d\u652f\u6301\u7a7a\u95f4\u5854(\u4f1a\u9020\u6210\u6570\u636e\u4e22\u5931). \u7ed3\u679c\u53ef\u80fd\u5c31\u662f:\u4e16\u754c\u8fde\u5e26level\u6587\u4ef6\u4e00\u8d77\u574f\u6389. \u4f46\u662f\u6211\u731c\u4f60\u53ef\u4ee5\u5236\u9020\u4e00\u4e2a\u4f20\u9001\u5668?"
                },
                {
                    "name": "AE\u7a7a\u95f4\u5b58\u50a83",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2507.png",
                    "x": 468.0,
                    "y": 48.0,
                    "tooltip": "AE\u7a7a\u95f4\u5b58\u50a83",
                    "data": "16^3-\u7a7a\u95f4\u5b58\u50a8\u5143\u4ef6\u7684\u4e3b\u8981\u7ec4\u4ef6."
                },
                {
                    "name": "AE\u7a7a\u95f4\u5b58\u50a84",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2508.png",
                    "x": 504.0,
                    "y": 48.0,
                    "tooltip": "AE\u7a7a\u95f4\u5b58\u50a84",
                    "data": "128^3-\u7a7a\u95f4\u5b58\u50a8\u5143\u4ef6\u7684\u4e3b\u8981\u7ec4\u4ef6."
                },
                {
                    "name": "AE\u7a7a\u95f4\u5b58\u50a86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2510.png",
                    "x": 468.0,
                    "y": 84.0,
                    "tooltip": "AE\u7a7a\u95f4\u5b58\u50a86",
                    "data": "\u53ef\u4ee5\u5728\u5185\u90e8\u5b58\u50a816^3\u8303\u56f4\u5185\u7684\u6240\u6709\u65b9\u5757. \u4e00\u5171\u662f4096\u4e2a\u65b9\u5757."
                },
                {
                    "name": "AE\u7a7a\u95f4\u5b58\u50a85",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2509.png",
                    "x": 432.0,
                    "y": 84.0,
                    "tooltip": "AE\u7a7a\u95f4\u5b58\u50a85",
                    "data": "\u53ef\u4ee5\u5728\u5185\u90e8\u5b58\u50a82^3\u8303\u56f4\u5185\u7684\u6240\u6709\u65b9\u5757. \u4e00\u5171\u662f8\u4e2a\u65b9\u5757,\u8fd9\u70b9\u7a7a\u95f4\u9664\u4e86\u4f60\u81ea\u5df1\u5565\u4e5f\u4f20\u9001\u4e0d\u4e86,\u6240\u4ee5\u7ee7\u7eed\u5408\u6210\u66f4\u9ad8\u9636\u7684\u5143\u4ef6\u5427."
                },
                {
                    "name": "AE\u7a7a\u95f4\u5b58\u50a87",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2511.png",
                    "x": 504.0,
                    "y": 84.0,
                    "tooltip": "AE\u7a7a\u95f4\u5b58\u50a87",
                    "data": "\u53ef\u4ee5\u5728\u5185\u90e8\u5b58\u50a8128^3\u8303\u56f4\u5185\u7684\u6240\u6709\u65b9\u5757. \u4e00\u5171\u662f2,097,152\u4e2a\u65b9\u5757. \u628a\u4e00\u4e2a\u6751\u5e84\u4f20\u9001\u5230\u6708\u7403,\u8ba9\u6751\u6c11\u4eec\u5c1d\u5c1d\u7a92\u606f\u7684\u6ecb\u5473!"
                },
                {
                    "name": "1\u9636AE\u6d41\u4f53\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2477.png",
                    "x": 396.0,
                    "y": 264.0,
                    "tooltip": "1\u9636AE\u6d41\u4f53\u5b58\u50a8",
                    "data": "\u8fd9\u662f1K\u30014K\u300116K\u548c64K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6\u6240\u9700\u76841\u9636\u6d41\u4f53\u5904\u7406\u5668.%n%n\u8fd8\u4e0d\u60f3\u4e22\u6389\u4f60\u7684\u8d85\u7ea7\u7f38? \u90a3\u5c31\u7ed9\u5b83\u4eec\u88c5\u4e0a\u6d41\u4f53\u5b58\u50a8\u603b\u7ebf\u5427. \u8981\u77e5\u9053\u8d85\u7ea7\u7f38\u6bcf\u5347\u4e00\u7ea7\u5bb9\u91cf\u53d8\u4e3a2\u500d,\u4f46ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6\u6bcf\u5347\u4e00\u7ea7\u5bb9\u91cf\u4f1a\u53d8\u4e3a4\u500d. \u5f53\u7136,\u8d85\u7ea7\u7f38\u66f4\u4fbf\u5b9c.%n%nAE2\u7684\u6d41\u4f53\u5b58\u50a8\u5b58\u5728\u4e0d\u5c11bug. \u8bf7\u5411\u6211\u4eec\u53cd\u9988\u8fd9\u4e9bbug,\u8fd9\u6837\u6211\u4eec\u5c31\u80fd\u4fee\u590d\u5b83\u4eec\u4e86(\u5e0c\u671b\u5427)!"
                },
                {
                    "name": "1\u9636AE\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1311.png",
                    "x": 396.0,
                    "y": 156.0,
                    "tooltip": "1\u9636AE\u5b58\u50a8",
                    "data": "\u7528\u6765\u5236\u4f5c1K\u548c4K\u7684\u5b58\u50a8\u5143\u4ef6.%n%n\u9664\u4e86ME\u5185\u90e8\u7684\u5b58\u50a8\u4ee5\u5916,\u4f60\u8fd8\u53ef\u4ee5\u7528\u5b58\u50a8\u603b\u7ebf\u8fde\u63a5\u5176\u4ed6\u65b9\u5757\u5b9e\u73b0\u5916\u90e8\u5b58\u50a8.\u5e38\u89c1\u505a\u6cd5\u662f\u8fde\u63a5\u5230\u62bd\u5c49\u7ba1\u7406\u5668\u6216\u8005\u538b\u7f29\u7bb1\u5b50\u5e93.\u8fd9\u53ef\u4ee5\u964d\u4f4e\u4f60\u7684AE\u7cfb\u7edf\u8017\u80fd.%n\u8bd1\u8005\u6ce8:\u6700\u5173\u952e\u662f\u964d\u4f4e\u6210\u672c...%n%n\u8bf7\u6ce8\u610f,\u8fd9\u6837\u7ed9AE\u5916\u63a5\u5b58\u50a8\u4f1a\u6781\u5927\u5f71\u54cd\u670d\u52a1\u5668\u6027\u80fd,\u5728\u67d0\u4e9b\u670d\u52a1\u5668\u4f1a\u88abban!%n%n\u8d85\u7ea7\u7bb1\u548c\u91cf\u5b50\u7bb1\u4e0d\u4f1a\u9020\u6210TPS\u95ee\u9898."
                },
                {
                    "name": "AE Tier 2 Fluid Storage",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4667288543375339252.png",
                    "x": 612.0,
                    "y": 264.0,
                    "tooltip": "AE Tier 2 Fluid Storage",
                    "data": "This Processor allows you to craft 256k, 1024k, 4096 and 16384k Fluid Storage Components. \n\nThese Components need to be paired with Advanced Fluid Storage Housings to turn them into Fluid Storage Cells."
                },
                {
                    "name": "2\u9636AE\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1319.png",
                    "x": 504.0,
                    "y": 156.0,
                    "tooltip": "2\u9636AE\u5b58\u50a8",
                    "data": "\u8fd9\u4e2a\u5904\u7406\u5668\u7528\u4e8e\u5236\u4f5c16K\u548c64K\u7684\u5b58\u50a8\u5143\u4ef6."
                },
                {
                    "name": "3\u9636AE\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2463.png",
                    "x": 612.0,
                    "y": 156.0,
                    "tooltip": "3\u9636AE\u5b58\u50a8",
                    "data": "\u8fd9\u662f256K\u548c1024K-ME\u5b58\u50a8\u7ec4\u4ef6\u6240\u9700\u76843\u9636\u7269\u54c1\u5904\u7406\u5668. \u5728IV\u9636\u6bb5\u4f60\u5c31\u80fd\u5236\u9020\u5b83\u4e86."
                },
                {
                    "name": "4\u9636AE\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2476.png",
                    "x": 720.0,
                    "y": 156.0,
                    "tooltip": "4\u9636AE\u5b58\u50a8",
                    "data": "\u8fd9\u662f4096K\u548c16384K-ME\u5b58\u50a8\u7ec4\u4ef6\u6240\u9700\u76844\u9636\u7269\u54c1\u5904\u7406\u5668. \u4f60\u5f97\u8fdb\u5165LuV\u9636\u6bb5\u624d\u80fd\u5236\u9020\u5b83\u4eec."
                },
                {
                    "name": "\u963f\u5c14\u6cd5\u548c\u6b27\u7c73\u8304(Alpha and Omega)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2532.png",
                    "x": 156.0,
                    "y": 264.0,
                    "tooltip": "\u963f\u5c14\u6cd5\u548c\u6b27\u7c73\u8304(Alpha and Omega)",
                    "data": "ME\u7834\u574f\u9762\u677f\u53ef\u4ee5\u50cf\u73a9\u5bb6\u4e00\u6837\u6316\u6398\u5b83\u524d\u65b9\u7684\u65b9\u5757\u5e76\u653e\u5165\u7f51\u7edc\u4e2d,\u4e5f\u53ef\u4ee5\u6536\u96c6\u6389\u843d\u7269. \u800cME\u7cbe\u51c6\u7834\u574f\u9762\u677f\u6316\u6398\u65b9\u5757\u65f6\u4f1a\u6709\u7cbe\u51c6\u91c7\u96c6\u6548\u679c.%n%nME\u6210\u578b\u9762\u677f\u5219\u76f8\u53cd,\u5b83\u5c06\u65b9\u5757\u653e\u7f6e\u5230\u4e16\u754c\u4e0a\u6216\u5c06\u7269\u54c1\u629b\u51fa. \u4f60\u9700\u8981\u544a\u8bc9\u5b83\u653e\u7f6e/\u629b\u51fa\u4ec0\u4e48. \u8fd9\u51e0\u79cd\u9762\u677f\u90fd\u540c\u65f6\u652f\u6301\u65b9\u5757/\u7269\u54c1\u6a21\u5f0f."
                },
                {
                    "name": "And Another Digital Singularity",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7226135969109944920.png",
                    "x": 864.0,
                    "y": 336.0,
                    "tooltip": "And Another Digital Singularity",
                    "data": "Do you really need this?"
                },
                {
                    "name": "\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1301.png",
                    "x": 120.0,
                    "y": 228.0,
                    "tooltip": "\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3",
                    "data": "\u6210\u578b\u6838\u5fc3\u2014\u2014\u2014\u2014\u5c06\u80fd\u91cf\u8f6c\u5316\u6210\u7269\u8d28\u7684\u7ec4\u4ef6. \u7834\u574f\u6838\u5fc3\u2014\u2014\u2014\u2014\u5c06\u7269\u8d28\u8f6c\u5316\u6210\u80fd\u91cf\u7684\u7ec4\u4ef6. \u7528\u4e8e\u5236\u9020ME\u7f51\u7edc\u4e2d\u7684I/O\u63a5\u53e3."
                },
                {
                    "name": "Another Digital Singularity",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7261779885652482879.png",
                    "x": 864.0,
                    "y": 264.0,
                    "tooltip": "Another Digital Singularity",
                    "data": "You've probably drained quite a few of them at this point.\n\n[note]Have you heard about YOTTanks?[/note]"
                },
                {
                    "name": "\u5916\u661f\u79d1\u6280-\u81ea\u52a8\u5408\u6210",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/182.png",
                    "x": 120.0,
                    "y": 192.0,
                    "tooltip": "\u5916\u661f\u79d1\u6280-\u81ea\u52a8\u5408\u6210",
                    "data": "\u624b\u52a8\u5408\u6210\u7269\u54c1\u5f88\u75db\u82e6,\u4e3a\u4ec0\u4e48\u4e0d\u628a\u5b83\u4eec\u4ea4\u7ed9\u5916\u661f\u79d1\u6280\u5462\uff1f"
                },
                {
                    "name": "\u5e94\u7528\u683c\u96f7(Applied Greg)?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2877.png",
                    "x": 84.0,
                    "y": 120.0,
                    "tooltip": "\u5e94\u7528\u683c\u96f7(Applied Greg)?",
                    "data": "\u8f93\u5165/\u8f93\u51fa\u603b\u7ebf(ME)\u662f\u4e00\u79cd\u79d1\u6280\u548c...\u53e6\u4e00\u79cd\u79d1\u6280\u7ed3\u5408\u7684\u4ea7\u7269. \u522b\u8fd9\u4e48\u770b\u6211,\u5b83\u5c31\u662f,\u597d\u4e0d? \u6709\u4e86\u8fd9\u4e9b\u603b\u7ebf,\u4f60\u53ef\u4ee5\u76f4\u63a5\u8ba9GT\u591a\u65b9\u5757\u673a\u5668\u548cME\u7f51\u7edc\u8fdb\u884c\u7269\u54c1\u8f93\u5165/\u8f93\u51fa\u4ea4\u4e92. \u5b83\u4eec\u53ef\u4ee5\u5927\u5e45\u5ea6\u964d\u4f4e\u5ef6\u8fdf,\u4ece\u800c\u663e\u8457\u63d0\u5347TPS,\u6240\u4ee5\u5728\u670d\u52a1\u5668\u4e2d,\u8bf7\u5c3d\u65e9\u6362\u7528\u8fd9\u4e9b\u603b\u7ebf.%n%n\u53ea\u9700\u8981\u62c6\u9664\u4f60\u7684\u666e\u901aGT\u603b\u7ebf+ME\u603b\u7ebf/ME\u63a5\u53e3,\u518d\u6362\u4e0a\u8f93\u5165/\u8f93\u51fa\u603b\u7ebf(ME),\u5e76\u76f4\u63a5\u8fde\u4e0aAE\u7ebf\u7f06,\u5373\u53ef\u5b8c\u6210\u6362\u88c5. \u5b83\u4f1a\u4f7f\u75281\u4e2a\u9891\u9053,\u800c\u5176\u4ed6\u65b9\u6848\u4e00\u6837\u8981\u75281\u4e2a\u9891\u9053."
                },
                {
                    "name": "\u81ea\u52a8\u5965\u672f\u5408\u6210",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2547.png",
                    "x": 156.0,
                    "y": 336.0,
                    "tooltip": "\u81ea\u52a8\u5965\u672f\u5408\u6210",
                    "data": "\u5965\u672f\u88c5\u914d\u5ba4\u7c7b\u4f3c\u4e8e\u5206\u5b50\u88c5\u914d\u5ba4\u4e0e\u5965\u672f\u5de5\u4f5c\u53f0\u7684\u7ed3\u5408,\u8ba9\u4f60\u80fd\u591f\u81ea\u52a8\u5408\u6210\u4e00\u5207\u5965\u672f\u5de5\u4f5c\u53f0\u4e0a\u53ef\u7528\u7684\u5408\u6210. \u4f60\u9700\u8981\u5c06\u5176\u4e0e\u8981\u7d20\u4e2d\u7ee7\u63a5\u53e3\u94fe\u63a5,\u4e3a\u5176\u4f9b\u5e94vis,\u8fd8\u9700\u8981\u63d0\u4f9b\u7f16\u5199\u4e86\u6b64\u5408\u6210\u7684\u77e5\u8bc6\u6838\u5fc3,\u624d\u80fd\u8ba9\u5965\u672f\u88c5\u914d\u5ba4\u6b63\u5e38\u5de5\u4f5c. \u53e6\u5916,\u4f60\u8fd8\u53ef\u4ee5\u5c06\u9b54\u529b\u51cf\u514d\u7684\u88c5\u5907\u653e\u5165GUI\u4e2d\u4ee5\u83b7\u5f97\u51cf\u514d\u6548\u679c. \u57fa\u7840\u51cf\u514d\u4e3a20\uff05. \u6bcf\u63d2\u5165\u4e00\u5f20\u52a0\u901f\u5361,\u5408\u6210\u65f6\u95f4\u7f29\u77ed20\uff05,\u8017\u80fd\u63d0\u9ad850\uff05. \u9b54\u529b\u51cf\u514d\u88c5\u5907\u7684\u6bcf\u4e00\u70b9\u626d\u66f2\u4f1a\u4f7f\u8017\u80fd\u63d0\u9ad815\uff05.%n%n\u77e5\u8bc6\u6838\u5fc3\u6700\u591a\u53ef\u4ee5\u5b58\u50a821\u4e2a\u6837\u677f,\u5982\u679c\u4f60\u60f3\u8981\u81ea\u52a8\u5408\u6210\u66f4\u591a\u7269\u54c1,\u4f60\u9700\u8981\u51c6\u5907\u5176\u4ed6\u7684\u5965\u672f\u88c5\u914d\u5ba4.%n%n\u4f60\u9700\u8981\u77e5\u8bc6\u8bb0\u5f55\u4eea\u624d\u80fd\u7f16\u5199\u77e5\u8bc6\u6838\u5fc3\u5185\u7684\u6837\u677f. \u77e5\u8bc6\u8bb0\u5f55\u4eea\u4e0e\u6837\u677f\u7ec8\u7aef\u7684\u5de5\u4f5c\u65b9\u5f0f\u57fa\u672c\u4e00\u81f4,\u4e0d\u8fc7\u5b83\u65e0\u9700\u8fde\u5165\u7f51\u7edc,\u4e5f\u4e0d\u5360\u7528\u9891\u9053. \u5982\u679c\u4f60\u60f3\u8981\u64e6\u9664\u6837\u677f,\u53ea\u9700\u9009\u4e2d\u6b64\u6837\u677f,\u8fd9\u65f6\u4fdd\u5b58\u6309\u94ae\u4f1a\u53d8\u4e3a\u64e6\u9664\u6309\u94ae.%n"
                },
                {
                    "name": "\u81ea\u52a8\u5408\u62102",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1312.png",
                    "x": 396.0,
                    "y": 192.0,
                    "tooltip": "\u81ea\u52a8\u5408\u62102",
                    "data": "\u8fd9\u662f\u5408\u6210\u5904\u7406\u5355\u5143\u7684\u7ec4\u6210\u90e8\u5206\u4e4b\u4e00,\u8fd9\u4e2a\u7279\u6b8a\u7684\u65b9\u5757\u5e76\u6ca1\u6709\u63d0\u4f9b\u5408\u6210\u5904\u7406\u5355\u5143\u7684\u529f\u80fd,\u4f46\u662f\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\"\u586b\u5145\"\u5757\u5b58\u5728. \u5e76\u4e14\u4e5f\u662f\u5236\u9020\u5408\u6210\u76d1\u89c6\u5668\u3001\u5e76\u884c\u5904\u7406\u5668\u548c\u4e0d\u540c\u89c4\u683c\u7684\u5408\u6210\u5b58\u50a8\u5668\u7684\u57fa\u7840\u7ec4\u4ef6."
                },
                {
                    "name": "\u7ec8\u7aef\u65e0\u5904\u4e0d\u5728",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/185.png",
                    "x": 228.0,
                    "y": 84.0,
                    "tooltip": "\u7ec8\u7aef\u65e0\u5904\u4e0d\u5728",
                    "data": "\u8fd9\u4e2aME\u7ec8\u7aef\u662f\u4e00\u4e2aHID(\u4eba\u673a\u63a5\u53e3\u8bbe\u5907),\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b83\u6765\u8bbf\u95ee\u63a5\u5165\u7684ME\u7f51\u7edc\u4e2d\u7684\u6240\u6709\u5b58\u50a8\u8bbe\u5907. \u7ec8\u7aef\u5177\u6709\u6392\u5e8f\u548c\u641c\u7d22\u7684\u529f\u80fd.\u5c06\u7ec8\u7aef\u63a5\u5165\u7f51\u7edc\u9700\u8981\u5360\u7528\u4e00\u4e2a\u9891\u9053. \u4f60\u53ef\u4ee5\u5c06ME\u7ec8\u7aef\u5347\u7ea7\u4e3aME\u5408\u6210\u7ec8\u7aef,\u5408\u6210\u7ec8\u7aef\u62e5\u67093*3\u7684\u5408\u6210\u9762\u677f,\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528ME\u7f51\u7edc\u4e2d\u7684\u7269\u54c1\u8fdb\u884c\u5408\u6210.\u548cME\u7ec8\u7aef\u4e00\u6837,ME\u5408\u6210\u7ec8\u7aef\u540c\u6837\u9700\u8981\u4e00\u4e2a\u9891\u9053\u6765\u8fd0\u884c. \u6700\u540e\u662fME\u63a5\u53e3\u7ec8\u7aef,\u8fd9\u4e2a\u9762\u677f\u53ef\u4ee5\u76f4\u63a5\u5bf9ME\u63a5\u53e3\u91cc\u9762\u7684\u7f16\u7801\u6837\u677f\u8fdb\u884c\u66f4\u6362,\u63a5\u53e3\u7ec8\u7aef\u663e\u793a\u7684ME\u63a5\u53e3\u540d\u5b57\u7531\u5b83\u6240\u76f8\u90bb\u7684\u673a\u5668\u540d\u5b57\u51b3\u5b9a,\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u540d\u79f0\u538b\u5370\u6a21\u677f\u6216\u8005\u94c1\u7827\u6765\u6539\u53d8ME\u63a5\u53e3\u7684\u540d\u5b57. \u4f60\u8fd8\u53ef\u4ee5\u5207\u6362\u7ec8\u7aef\u7684\u754c\u9762."
                },
                {
                    "name": "\u4f20\u9001\u6211\u5427,\u65af\u79d1\u8482(Beam Me Up,Scotty)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2529.png",
                    "x": 396.0,
                    "y": 84.0,
                    "tooltip": "\u4f20\u9001\u6211\u5427,\u65af\u79d1\u8482(Beam Me Up,Scotty)",
                    "data": "\u5982\u679c\u60f3\u6574\u4f53\u79fb\u52a8\u4e00\u7247\u7a7a\u95f4,\u4f60\u9700\u8981\u4e00\u4e2a\u63d2\u5165\u7a7a\u95f4\u5b58\u50a8\u5143\u4ef6\u7684\u7a7a\u95f4IO\u7aef\u53e3,\u518d\u52a0\u4e0a\u81f3\u5c116\u4e2a\u7a7a\u95f4\u5854\u65b9\u5757. \u7a7a\u95f4\u5854\u65b9\u5757\u7528\u4e8e\u6807\u51faX\u3001Y\u548cZ\u4e09\u8f74\u8fb9\u754c,\u522b\u5fd8\u4e86\u7a7a\u95f4IO\u7aef\u53e3\u8fd8\u9700\u8981\u4e00\u4e2a\u7a7a\u95f4\u5854\u65b9\u5757\u7528\u4e8e\u5408\u6210. \u5982\u679c\u6548\u7387\u4f4e\u4e8e100\uff05,\u90a3\u4e48\u80fd\u91cf\u6d88\u8017\u5c06\u6025\u5267\u589e\u52a0,\u56e0\u6b64\u8bf7\u6dfb\u52a0\u66f4\u591a\u7684\u7a7a\u95f4\u5854\u65b9\u5757\u4ee5\u63d0\u9ad8\u6548\u7387. \u4f7f\u7528\u7ea2\u77f3\u4fe1\u53f7\u6fc0\u6d3b\u7a7a\u95f4IO\u7aef\u53e3,\u7a7a\u95f4\u5854\u5185\u90e8\u7684\u65b9\u5757\u5c31\u4f1a\u88ab\u88c5\u5165\u7a7a\u95f4IO\u7aef\u53e3\u5185\u90e8\u7ef4\u5ea6,\u7a7a\u95f4\u5b58\u50a8\u5143\u4ef6\u5c06\u88ab\u79fb\u5230\u8f93\u51fa\u69fd,\u8fd9\u6837\u4f60\u5c31\u80fd\u5e26\u7740\u8fd9\u7247\u7a7a\u95f4\u5230\u5904\u8dd1\u4e86. \u5982\u679c\u4f60\u60f3\u5c06\u5176\u7528\u4f5c\u4f20\u9001\u5668,\u90a3\u4e48\u6b63\u786e\u7684\u64cd\u4f5c\u975e\u5e38\u91cd\u8981. \u5426\u5219\u4f60\u4f1a\u88ab\u56f0\u5728\u90a3\u91cc\u5934... \u540c\u65f6\u4f60\u7684\u7f51\u7edc\u5fc5\u987b\u5b58\u50a8\u8db3\u591f\u7684\u80fd\u91cf,\u6240\u4ee5\u9700\u8981\u81f3\u5c111\u4e2a\u80fd\u6e90\u5143\u4ef6. \u6bcf\u4e2a\u63a7\u5236\u5668(\u7f51\u7edc)\u53ea\u80fd\u6709\u4e00\u4e2a\u7a7a\u95f4\u5854,\u6240\u4ee5\u53ef\u4ee5\u8003\u8651\u5b50\u7f51\u7edc.%n%n\u5728X\u548cZ\u8f74\u4f7f\u75282\u4e2a\u7a7a\u95f4\u5854\u65b9\u5757,\u5728Y\u8f74\u4e2d\u4f7f\u75283\u4e2a,\u5c06\u4e3a\u4f60\u5212\u51fa\u4e00\u4e2a1x2x1\u7684\u7a7a\u95f4\u6765\u4f20\u9001\u81ea\u5df1. \u5728\u4f20\u9001\u7684\u6536\u53d1\u4e24\u7aef\u90fd\u9700\u8981\u6709\u4e00\u4e2a\u7a7a\u95f4IO\u7aef\u53e3. \u4f46\u662f\u4f60\u4ecd\u7136\u9700\u8981\u8bbe\u8ba1\u4e00\u4e2a\u7ea2\u77f3\u7535\u8def\u6765\u6b63\u786e\u6fc0\u6d3b\u5730\u5b83\u4eec!  %n%n\u5982\u679c\u4f60\u60f3\u8fdb\u4e00\u6b65\u4e86\u89e3\u7a7a\u95f4IO\u63a5\u53e3\u548c\u66f4\u5927\u7684\u7ed3\u6784,\u8bf7\u9605\u8bfb\u6b64\u6587\u7ae0: https://www.reddit.com/r/feedthebeast/comments/3c2b2r/a_treatise_on_nocheat_smp_ae2_spatial_io/ %n\u5982\u679c\u4f60\u60f3\u770b\u4f20\u9001\u5668\u7684\u4f8b\u5b50,\u4e5f\u8bf7\u53c2\u9605\u6b64\u5730\u5740: https://www.reddit.com/r/feedthebeast/comments/2mhrf8/ae2_spatial_transporters/ %n%n\u7a7a\u95f4\u5b58\u50a8\u5143\u4ef6,\u67d0\u79cd\u610f\u4e49\u7684\u4e00\u6b21\u6027\u7528\u54c1,\u9996\u6b21\u4f7f\u7528\u65f6\u7684XYZ\u4e09\u8f74\u4e0d\u4f1a\u53d8\u5316,\u4e14\u6b64\u5143\u4ef6\u65e0\u6cd5\u88ab\u683c\u5f0f\u5316\u6216\u91cd\u65b0\u5408\u6210. \u6240\u4ee5\u6700\u597d\u5728\u521b\u9020\u6a21\u5f0f\u5148\u6d4b\u8bd5\u4e00\u4e0b!%n%n\u90fd\u602aAE,\u5b83\u53ef\u80fd\u4f1a\u8ba9\u4f60\u7684\u4e16\u754c\u67091\u79d2\u7684\u5ef6\u8fdf."
                },
                {
                    "name": "P2P\u901a\u9053-ME",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/203.png",
                    "x": 156.0,
                    "y": 120.0,
                    "tooltip": "P2P\u901a\u9053-ME",
                    "data": "P2P\u901a\u9053-ME\u53ef\u4ee5\u4f20\u9001\u6700\u591a32\u4e2a\u9891\u9053! \u4f60\u9700\u8981\u5236\u9020\u5f88\u591a\u8fd9\u79cd\u4e1c\u897f! \u5b83\u4eec\u53ef\u4ee5\u4f5c\u4e3a\u4f20\u9001\u8282\u70b9,\u5c06\u5305\u542b\u7684\u4fe1\u606f\u4ece\u4e00\u4e2a\u5730\u65b9\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u5730\u65b9. \u4f60\u6700\u597d\u4f7f\u7528\u4e0d\u540c\u7f51\u7edc\u6765\u4e3aP2P\u63d0\u4f9b\u9891\u9053,\u6240\u4ee5\u642d\u5efa\u4e00\u4e2a\u5b50\u7f51\u7edc\u5427.%n%nP2P\u901a\u9053-ME\u53ef\u4ee5\u5c06\u6700\u591a32\u4e2a\u9891\u9053\u6253\u5305\u62101\u4e2a\u9891\u9053,\u5e76\u4f20\u8f93\u5230\u76ee\u7684\u5730. \u6bcf\u4e2aP2P\u901a\u9053\u9700\u8981\u4e00\u4e2a\u7a7a\u95f2\u9891\u9053. P2P\u901a\u9053\u4e0d\u53ef\u5d4c\u5957,\u4f46\u53ef\u4e00\u5bf9\u591a,\u800c\u540c\u4e00\u6761\u4f20\u8f93\u9891\u9053\u7684\u7ebf\u7f06\u4e5f\u53ef\u4ee5\u540c\u65f6\u4f20\u8f93\u591a\u4e2aP2P\u7684\u4fe1\u606f. \u5bf9\u4e8e\u666e\u901a\u7684ME\u73bb\u7483\u7ebf\u7f06,\u53ef\u4ee5\u8fde\u63a54\u5bf9P2P,\u800c\u81f4\u5bc6\u7ebf\u7f06\u53ef\u4ee5\u8fde\u63a516\u5bf9. \u5982\u679c\u4ecd\u7136\u4e0d\u591f\u7684\u8bdd,\u4f60\u8fd8\u53ef\u4ee5\u4e3a\u5b50\u7f51\u7edc\u6dfb\u52a0ME\u63a7\u5236\u5668,\u6216\u4f7f\u7528\u591a\u4e2a\u5b50\u7f51\u7edc.%n%n\u4e00\u822c\u6765\u8bf4,P2P\u7684\u5165\u53e3\u4f1a\u8d34\u5728\u4e3b\u7f51\u7edc\u7684ME\u63a7\u5236\u5668\u4e0a,\u800c\u51fa\u53e3\u4f1a\u5728\u4f60\u7684\u673a\u5668\u90a3\u8fb9.%n%n\u8fd9\u91cc\u6709\u4e00\u4efd\u4e0d\u9519\u7684P2P\u7ebf\u4e0a\u6559\u7a0bhttps://tinyurl.com/GTNH-AE2. %n%n\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5176\u4ed6\u79cd\u7c7b\u7684P2P\u901a\u9053,\u624b\u6301\u76f8\u5e94\u7269\u54c1\u53f3\u952eP2P\u9762\u7684\u4e2d\u5fc3\u5373\u53ef(\u6bd4\u5982,GT\u7ebf\u7f06\u5bf9\u5e94GT-EU\u6a21\u5f0f,\u7ea2\u77f3\u5bf9\u5e94\u7ea2\u77f3\u4fe1\u53f7\u6a21\u5f0f,RF\u5bfc\u7ba1\u5bf9\u5e94RF\u6a21\u5f0f,\u706b\u628a\u5bf9\u5e94\u5149\u6a21\u5f0f,\u6876\u5bf9\u5e94\u6db2\u4f53\u6a21\u5f0f,\u7bb1\u5b50\u5bf9\u5e94\u7269\u54c1\u6a21\u5f0f,OC\u7ebf\u7f06\u5bf9\u5e94OC\u6a21\u5f0f)\u5207\u6362\u4e3a\u5bf9\u5e94\u6a21\u5f0f,\u62c6\u4e0b\u4e5f\u4f1a\u4fdd\u7559. \u5bf9\u5176\u4f7f\u7528ME\u73bb\u7483\u7ebf\u7f06\u5373\u53ef\u5c06P2P\u901a\u9053\u5207\u6362\u56deME\u6a21\u5f0f."
                },
                {
                    "name": "\u5916\u661f\u79d1\u6280-\u7ebf\u7f06",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/184.png",
                    "x": 264.0,
                    "y": 156.0,
                    "tooltip": "\u5916\u661f\u79d1\u6280-\u7ebf\u7f06",
                    "data": "\u5982\u679c\u4f60\u60f3\u5728\u4f60\u7684\u57fa\u5730\u67d0\u4e2a\u4f4d\u7f6e\u8bbf\u95eeAE\u7f51\u7edc,\u90a3\u4e48\u4f60\u5c31\u9700\u8981\u94fa\u8bbe\u4e00\u6761\u7ebf\u7f06\u5230\u90a3\u4e2a\u4f4d\u7f6e.\u4f60\u9700\u8981\u5f88\u591a\u7ebf\u7f06. \u73b0\u5728\u4f7f\u7528\u666e\u901a\u7684\u73bb\u7483\u7ebf\u7f06\u6216\u8005\u667a\u80fd\u7ebf\u7f06\u5c31\u80fd\u6ee1\u8db3\u65e5\u5e38\u4f7f\u7528.\u4f46\u662f\u4ee5\u540e,\u8d8a\u6765\u8d8a\u591a\u7684\u8bbe\u5907\u9700\u8981\u63a5\u5165\u7f51\u7edc,\u81f4\u5bc6\u7ebf\u7f06\u548cP2P\u901a\u9053\u5c31\u4f1a\u6d3e\u4e0a\u7528\u573a\u4e86.  \u73bb\u7483\u7ebf\u7f06\u548c\u5305\u5c42\u7ebf\u7f06\u529f\u80fd\u76f8\u540c,\u53ea\u662f\u5916\u89c2\u6709\u533a\u522b.\u90fd\u80fd\u643a\u5e268\u4e2a\u9891\u9053.   \u77f3\u82f1\u7ea4\u7ef4\u4e0d\u643a\u5e26\u9891\u9053,\u4f46\u53ef\u4ee5\u643a\u5e26\u80fd\u91cf.\u8fd9\u4e2a\u7279\u6027\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u8ba9\u72ec\u7acb\u5b50\u7f51\u7edc\u4f7f\u7528\u4e3b\u7f51\u7edc\u4e2d\u7684\u80fd\u91cf.  \u4f60\u8fd8\u53ef\u4ee5\u4e3a\u4f60\u7684\u7ebf\u7f06\u6d82\u8272-\u4e0d\u540c\u989c\u8272\u7684\u7ebf\u7f06\u4e0d\u4f1a\u8fde\u63a5,\u5229\u7528\u8fd9\u4e00\u70b9\u53ef\u4ee5\u8ba9\u4e0d\u540c\u989c\u8272\u7ebf\u7f06\u5e76\u884c\u6765\u6269\u5145\u7f51\u7edc\u5bb9\u91cf.\u53ea\u6709\u9ed8\u8ba4\u8272\u7684\u7ebf\u7f06\u624d\u53ef\u4ee5\u8fde\u63a5\u6240\u6709\u522b\u7684\u989c\u8272\u7684\u7ebf\u7f06.\u5230\u540e\u671f\u7528P2P\u901a\u9053\u6765\u4f20\u8f93\u9891\u9053\u66f4\u6709\u6548\u7387,\u53ef\u4f20\u8f9332\u9891\u9053\u800c\u672c\u8eab\u53ea\u6d88\u80171\u9891\u9053.  \u8bd1\u8005\u6ce8:P2P\u901a\u9053\u4e0d\u80fd\u5d4c\u5957,\u5373\u7528P2P\u901a\u9053\u4f20\u8f93\u7684\u9891\u9053\u65e0\u6cd5\u63d0\u4f9b\u7ed9\u53e6\u5916\u7684P2P\u901a\u9053\u2014\u2014\u2014\u2014\u4f1a\u663e\u793a\u8bbe\u5907\u7f3a\u5c11\u9891\u9053\u5e76\u4e14P2P\u901a\u9053\u4e0d\u4f1a\u5de5\u4f5c.  \u8bd1\u8005\u518d\u6ce8:P2P\u901a\u9053\u53ef\u4ee5\u4e00\u5165\u591a\u51fa,\u5373\u591a\u4e2aP2P\u901a\u9053\u51fa\u53e3\u53ef\u4ee5\u5206\u4eab\u4e00\u4e2aP2P\u901a\u9053\u5165\u53e3\u6240\u63d0\u4f9b\u7684\u9891\u9053.  \u7ebf\u7f06\u951a\u5c31\u50cf\u8986\u76d6\u677f\u4e00\u6837,\u53ef\u4ee5\u628a\u4f60\u4e0d\u5e0c\u671b\u8fde\u8d77\u6765\u7684\u4e24\u6761\u7ebf\u7f06\u9694\u5f00."
                },
                {
                    "name": "\u7f51\u7edc\u4f20\u8f93vis",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2515.png",
                    "x": 12.0,
                    "y": 192.0,
                    "tooltip": "\u7f51\u7edc\u4f20\u8f93vis",
                    "data": "\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u8bbe\u5907\u5c06\u9b54\u529b\u4e2d\u7ee7\u5668\u5185\u7684vis(CV)\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u9b54\u529b\u4e2d\u7ee7\u5668\u3001\u5965\u672f\u88c5\u914d\u5ba4\u6216\u5965\u672f\u5408\u6210\u7ec8\u7aef. \u603b\u4e4b,\u5728\u8981\u7d20\u4e2d\u7ee7\u63a5\u53e3\u4e0a\u653e\u7f6e\u9b54\u529b\u4e2d\u7ee7\u5668(\u5f53\u7136\u9b54\u529b\u4e2d\u7ee7\u5668\u8981\u901a\u6709CV),\u7136\u540e\u4f7f\u7528\u5185\u5b58\u5361\u5c06\u6b64\u63a5\u53e3\u4e0e\u53e6\u4e00\u8bbe\u5907\u94fe\u63a5. \u5982\u679c\u94fe\u63a5\u7684\u8bbe\u5907\u662f\u53e6\u4e00\u4e2a\u8981\u7d20\u4e2d\u7ee7\u63a5\u53e3,\u90a3\u4e48\u663e\u7136\u5728\u53e6\u4e00\u4fa7\u4e5f\u9700\u8981\u53e6\u4e00\u4e2a\u9b54\u529b\u4e2d\u7ee7\u5668."
                },
                {
                    "name": "\u5e76\u884c\u5904\u7406\u5355\u5143",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1326.png",
                    "x": 468.0,
                    "y": 228.0,
                    "tooltip": "\u5e76\u884c\u5904\u7406\u5355\u5143",
                    "data": "\u5408\u6210\u5904\u7406\u5355\u5143\u7684\u7ec4\u6210\u90e8\u5206,\u5b83\u80fd\u63d0\u4f9b\u989d\u5916\u7684\u5411ME\u63a5\u53e3\u8fd0\u8f93\u7269\u54c1\u7684\u4efb\u52a1\u7a7a\u95f4.\u80fd\u4f7f\u8fde\u63a5\u540c\u4e2aME\u63a5\u53e3\u7684\u591a\u4e2a\u5206\u5b50\u88c5\u914d\u5ba4\u540c\u65f6\u8fdb\u884c\u4e0d\u540c\u9636\u6bb5\u7684\u5408\u6210\u4efb\u52a1,\u4ee5\u63d0\u9ad8\u603b\u4f53\u7684\u5408\u6210\u901f\u5ea6.\u8fd9\u4e9b\u4ec5\u5728\u4f60\u7684\u914d\u65b9\u914d\u7f6e\u5df2\u6b63\u786e\u5206\u79bb\u6b65\u9aa4\u65f6\u624d\u6709\u7528,\u8fd9\u4f1a\u4f7f\u7cfb\u7edf\u53ef\u4ee5\u5e76\u884c\u8fd0\u884c\u591a\u4e2a\u4efb\u52a1,\u751a\u81f3\u53ef\u4ee5\u8de8\u591a\u4e2a\u63a5\u53e3\u5171\u4eab\u540c\u4e00\u4e2a\u6837\u677f."
                },
                {
                    "name": "\u5e76\u884c\u5904\u7406\u5355\u5143,\u4f46\u662f16\u6838",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/392.png",
                    "x": 540.0,
                    "y": 228.0,
                    "tooltip": "\u5e76\u884c\u5904\u7406\u5355\u5143,\u4f46\u662f16\u6838",
                    "data": "\u4e3a\u4e86\u66f4\u7d27\u51d1\u7684\u5408\u6210\u5904\u7406\u5668."
                },
                {
                    "name": "\u5e76\u884c\u5904\u7406\u5355\u5143,\u4f46\u662f4\u6838",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/393.png",
                    "x": 504.0,
                    "y": 228.0,
                    "tooltip": "\u5e76\u884c\u5904\u7406\u5355\u5143,\u4f46\u662f4\u6838",
                    "data": "\u4f60\u7684\u5408\u6210\u5904\u7406\u5668\u88c5\u4e86\u591a\u5c11\u4e2a\u5e76\u884c\u5904\u7406\u5355\u5143\u4e86?\u8fd8\u662f\u4e0d\u591f\u7528\u5417?\u522b\u62c5\u5fc3,\u6211\u4eec\u6709\u6700\u65b0\u6280\u672f\u6765\u89e3\u51b3\u8fd9\u4e8b!"
                },
                {
                    "name": "Crafting Input Proxy",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6007564242168652354.png",
                    "x": 12.0,
                    "y": 48.0,
                    "tooltip": "Crafting Input Proxy",
                    "data": "You have mastered both interdimensional transportation and wallsharing, why not combine them? \n\nYou can link both crafting input bus/buffer to proxies with data sticks and use it to process patterns with multiple machines, as if you are wallsharing them, but without actually wallsharing them.\n\n[note]Maybe this can reduce lag?[/note]"
                },
                {
                    "name": "\u5408\u6210\u76d1\u63a7\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1260.png",
                    "x": 432.0,
                    "y": 228.0,
                    "tooltip": "\u5408\u6210\u76d1\u63a7\u5668",
                    "data": "\u5408\u6210\u5904\u7406\u5355\u5143\u7684\u4e00\u90e8\u5206,\u901a\u8fc7\u8fd9\u4e2a\u7ec4\u4ef6\u4f60\u53ef\u4ee5\u770b\u5230\u76ee\u524d\u81ea\u52a8\u5408\u6210\u7684\u8fdb\u5ea6."
                },
                {
                    "name": "Cribs",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5429883527448864555.png",
                    "x": 48.0,
                    "y": 48.0,
                    "tooltip": "Cribs",
                    "data": "As your researches for Applied Greg continued, you found a way to combine ME interface's pattern processing ability with input busses, crafting input busses! Now, you can directly place patterns into input bus. However, input busses lacked sufficient item space and computational power to process items coming from your ME network. Thus, you added additional storage and circuits.\n\nYou can even place non-consumable items like lenses, molds inside!! However, consumable items won't do anything.\n\nBut, still you lack enough technology to process fluids, they are just not good for electronics.\n\nCrafting input bus is fully isolated from other busses/hatches, so you may have to change your patterns.\n\n[warn]Crafting input proxy[/warn] will let you wallshare multiblocks without actually wallsharing them. UV-Tier\n\n[warn]Crafting input buffer[/warn] will be waterproof. UIV-Tier"
                },
                {
                    "name": "\u5207\u65ad\u7535\u6e90!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2544.png",
                    "x": 336.0,
                    "y": 84.0,
                    "tooltip": "\u5207\u65ad\u7535\u6e90!",
                    "data": "ME\u89e6\u53d1\u603b\u7ebf\u5728\u6ca1\u6709\u6536\u5230\u7ea2\u77f3\u4fe1\u53f7\u65f6\u4f1a\u5207\u65ad\u7ebf\u7f06. \u4e0e\u4e4b\u76f8\u5bf9\u7684\u8fd8\u6709ME\u53cd\u76f8\u89e6\u53d1\u603b\u7ebf. \u8fd9\u4e24\u79cd\u603b\u7ebf\u5fc5\u987b\u5b89\u88c5\u5728\u4e24\u6bb5\u7ebf\u7f06\u4e4b\u95f4,\u5c31\u50cf\u77f3\u82f1\u7ea4\u7ef4\u4e00\u6837."
                },
                {
                    "name": "\u4e00\u526f\u6251\u514b\u724c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2539.png",
                    "x": 300.0,
                    "y": 300.0,
                    "tooltip": "\u4e00\u526f\u6251\u514b\u724c",
                    "data": "\u8fd9\u4e9b\u5361\u53ef\u4ee5\u4e3a\u67d0\u4e9b\u8bbe\u5907\u6216\u9762\u677f\u6dfb\u52a0\u989d\u5916\u529f\u80fd. \u5b83\u4eec\u7684tooltip\u4e2d\u663e\u793a\u4e86\u53ef\u7528\u7684\u8bbe\u5907\u53ca\u6570\u91cf.%n%n\u7ea2\u77f3\u5361: \u4e3a\u53ef\u7528\u7684\u8bbe\u5907\u6dfb\u52a0\u7ea2\u77f3\u4e92\u52a8\u6027,\u6709\u4ee5\u4e0b\u9009\u9879:%n\u603b\u662f\u6fc0\u6d3b: \u65e0\u8bba\u662f\u5426\u6709\u7ea2\u77f3\u4fe1\u53f7,\u4fdd\u6301\u8f93\u5165/\u8f93\u51fa.%n\u65e0\u4fe1\u53f7\u65f6\u6fc0\u6d3b: \u6ca1\u6709\u7ea2\u77f3\u4fe1\u53f7\u65f6,\u4fdd\u6301\u8f93\u5165/\u8f93\u51fa.%n\u6709\u4fe1\u53f7\u65f6\u6fc0\u6d3b: \u6709\u7ea2\u77f3\u4fe1\u53f7\u65f6,\u4fdd\u6301\u8f93\u5165/\u8f93\u51fa.%n\u6709\u8109\u51b2\u4fe1\u53f7\u65f6\u6fc0\u6d3b: \u6536\u5230\u4e00\u6b21\u7ea2\u77f3\u8109\u51b2\u4fe1\u53f7\u65f6,\u8fdb\u884c\u4e00\u6b21\u8f93\u5165/\u8f93\u51fa.%n%n\u5bb9\u91cf\u5361: \u6dfb\u52a0\u66f4\u591a\u63d2\u69fd. \u5982\u679c\u5c06\u5176\u63d2\u5165\u8f93\u51fa\u603b\u7ebf,\u5219\u4f1a\u6dfb\u52a0\u4e00\u4e2a\u56fe\u6807\u7528\u6765\u9009\u62e9\u8f93\u51fa\u7269\u54c1\u7684\u4f18\u5148\u7ea7(\u8c03\u5ea6\u6a21\u5f0f).%n%n%n\u5408\u6210\u5361: \u81ea\u52a8\u5360\u7528CPU\u5408\u6210\u6307\u5b9a\u7269\u54c1.%n\u63d2\u5165ME\u63a5\u53e3\u65f6,\u5982\u679cME\u63a5\u53e3\u5df2\u6709\u6807\u8bb0\u7684\u7269\u54c1\u5e76\u4e14\u6570\u91cf\u5c11\u4e8e\u6807\u8bb0\u6570\u91cf\u65f6,\u5c06\u81ea\u52a8\u5f00\u59cb\u5408\u6210\u76f4\u5230\u4e0e\u6807\u8bb0\u6570\u91cf\u76f8\u7b49\u4e3a\u6b62. \u522b\u5fd8\u4e86\u81ea\u52a8\u5408\u6210\u7684\u524d\u63d0\u662f\u6709\u76f8\u5e94\u7684\u6837\u677f. \u5982\u679c\u60f3\u8981\u5728\u7f51\u7edc\u4e2d\u80fd\u770b\u5230ME\u63a5\u53e3\u5185\u7684\u7269\u54c1,\u4f60\u9700\u8981\u5728ME\u63a5\u53e3\u4e0a\u8d34\u4e00\u4e2a\u5b58\u50a8\u603b\u7ebf.%n%n\u63d2\u5165ME-\u6807\u51c6\u53d1\u4fe1\u5668\u65f6,\u6a21\u5f0f\u4e00: \u5f53\u6307\u5b9a\u7269\u54c1\u6b63\u5728\u5408\u6210\u65f6\u53d1\u51fa\u7ea2\u77f3\u4fe1\u53f7. \u6a21\u5f0f\u4e8c: \u5f53\u6307\u5b9a\u7269\u54c1\u88ab\u8bf7\u6c42\u5408\u6210\u65f6\u53d1\u51fa\u7ea2\u77f3\u4fe1\u53f7,\u4f46\u662f \u5b83\u4e0d\u4f1a\u53d1\u9001\u8981\u5408\u6210\u7684\u7269\u54c1. \u8fd9\u5728\u5047\u5408\u6210\u6216\u8005\u7ed9\u5176\u4ed6\u673a\u5668\u53d1\u9001\u5408\u6210\u4fe1\u53f7\u7684\u65f6\u5019\u5f88\u6709\u7528. \u8fd0\u7528\u5047\u5408\u6210\u7684\u65f6\u5019,\u522b\u5fd8\u4e86\u5c06\u88ab\u8bf7\u6c42\u7684\u7269\u54c1\u8f93\u5165\u7f51\u7edc\u4e2d,\u8fd9\u6837\u5b83\u624d\u4e0d\u4f1a\u4e00\u76f4\u5360\u7528\u5408\u6210CPU.%n%n\u63d2\u5165ME\u8f93\u51fa\u603b\u7ebf\u65f6,\u5b83\u5c06\u5c1d\u8bd5\u8f93\u51fa\u5728GUI\u4e2d\u6807\u8bb0\u7684\u7269\u54c1. \u6a21\u5f0f\u4e00: \u5b83\u5c06\u4f18\u5148\u8f93\u51fa\u7f51\u7edc\u4e2d\u7684\u5df2\u6709\u7269\u54c1,\u7136\u540e\u518d\u8f93\u51fa\u5408\u6210\u7269\u54c1. \u6a21\u5f0f\u4e8c: \u5b83\u5c06\u53ea\u8f93\u51fa\u5408\u6210\u7269\u54c1.%n%n\u52a0\u901f\u5361: \u8ba9\u8bbe\u5907\u6216\u8005\u9762\u677f\u66f4\u5feb\u5730\u5de5\u4f5c. \u4f60\u53ef\u80fd\u9700\u8981\u4e0d\u5c11\u52a0\u901f\u5361.%n%n\u53cd\u76f8\u5361: \u4f7f\u7269\u54c1\u8fc7\u6ee4\u53cd\u8f6c\u6216\u8005\u67d0\u4e9b\u9762\u677f\u53cd\u8f6c.%n%n\u6a21\u7cca\u5361: \u8fc7\u6ee4\u65f6\u5e94\u7528\u6a21\u7cca\u903b\u8f91,\u8ba4\u4e3a\u5177\u6709\u4e0d\u540cNBT\u6216\u8010\u4e45\u6570\u636e\u7684\u7269\u54c1\u76f8\u540c. \u6ce8\u610f\u8fd9\u4e0eMeta\u6570\u636e\u6709\u533a\u522b. \u5982\u679c\u4f60\u53ea\u662f\u60f3\u6a21\u7cca\u8bc6\u522bNBT\u6570\u636e,\u5c06\u5176\u8bbe\u7f6e\u4e3a\u5339\u914d\u6240\u6709. \u5982\u679c\u5c06\u5176\u8bbe\u7f6e\u4e3a99\uff05,\u5b83\u4f1a\u6a21\u7cca\u8bc6\u522b\u6240\u6709\u8010\u4e45\u7684\u7269\u54c1. \u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u53cd\u76f8\u5361\u5c06\u5176\u8fc7\u6ee4\u53cd\u8f6c."
                },
                {
                    "name": "\u81f4\u5bc6\u80fd\u6e90\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1299.png",
                    "x": 192.0,
                    "y": 264.0,
                    "tooltip": "\u81f4\u5bc6\u80fd\u6e90\u5143\u4ef6",
                    "data": "\u81f4\u5bc6\u80fd\u6e90\u5143\u4ef6\u53ef\u4ee5\u8ba9\u4f60\u7684\u7f51\u7edc\u66f4\u52a0\u66f4\u52a0\u7a33\u5b9a. \u5b83\u53ef\u4ee5\u5b58\u50a8160\u4e07AE\u7684\u80fd\u91cf."
                },
                {
                    "name": "\u81f4\u5bc6\u7ebf\u7f06",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2120.png",
                    "x": 264.0,
                    "y": 84.0,
                    "tooltip": "\u81f4\u5bc6\u7ebf\u7f06",
                    "data": "\u81f4\u5bc6\u7ebf\u7f06\u4f1a\u6210\u4e3a\u4f60\u7f51\u7edc\u7684\u4e3b\u5e72.\u5b83\u4eec\u53ef\u4ee5\u4f20\u8f9332\u4e2a\u9891\u9053\u5e76\u663e\u793a\u5728\u7528\u9891\u9053\u6570.\u5e73\u9762\u72b6\u603b\u7ebf/\u63a5\u53e3\u65e0\u6cd5\u76f4\u63a5\u8fde\u63a5\u5b83\u4eec.  \u8bd1\u8005\u6ce8:\u7ec8\u7aef\u4e5f\u4e0d\u884c."
                },
                {
                    "name": "\u6269\u6563\u4e0e\u805a\u96c6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2512.png",
                    "x": 120.0,
                    "y": 336.0,
                    "tooltip": "\u6269\u6563\u4e0e\u805a\u96c6",
                    "data": "\u6269\u6563\u6838\u5fc3\u548c\u805a\u96c6\u6838\u5fc3\u662f\u795e\u79d8\u80fd\u6e90(Thaumic-Energistics)\u8bbe\u5907\u7684\u57fa\u7840\u7ec4\u4ef6. \u5b83\u4eec\u662f\u7531\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3\u5236\u6210\u7684."
                },
                {
                    "name": "\u66f4\u7b80\u5355\u7684\u88c5\u914d\u7ebf\u81ea\u52a8\u5316",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2520.png",
                    "x": 156.0,
                    "y": 12.0,
                    "tooltip": "\u66f4\u7b80\u5355\u7684\u88c5\u914d\u7ebf\u81ea\u52a8\u5316",
                    "data": "\u4e0d\u540c\u4e8e\u666e\u901a\u7684\u6837\u677f\u7ec8\u7aef,\u8fd9\u79cd\u589e\u5e7f\u6837\u677f\u7ec8\u7aef\u6ca1\u6709\u5408\u6210\u6a21\u5f0f\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u591a\u5f97\u591a\u7684\u8f93\u5165\u3001\u8f93\u51fa\u7a7a\u95f4,\u5e76\u4e14\u8f93\u5165\u4e0e\u8f93\u51fa\u7684\u683c\u6570\u53ef\u4ee5\u4ea4\u6362. \u8fd9\u5c06\u662f\u4f60\u88c5\u914d\u7ebf\u6a21\u677f\u7684\u6700\u4f73\u9009\u62e9. \u6216\u8005, \u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u505a\u6d41\u4f53\u7248\u672c\u7684\u5462? \u53ea\u9700\u8981\u4e00\u70b9\u7b80\u5355\u7684\u5347\u7ea7."
                },
                {
                    "name": "\u817e\u7a7a\u50a8\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1309.png",
                    "x": 48.0,
                    "y": 228.0,
                    "tooltip": "\u817e\u7a7a\u50a8\u7f50",
                    "data": "\u53ef\u4ee5\u5c06\u6d41\u4f53\u8f93\u5165ME\u7f51\u7edc\u4e2d,\u524d\u63d0\u662fME\u7f51\u7edc\u6709\u4e13\u95e8\u7684\u6d41\u4f53\u5b58\u50a8\u5355\u5143.%n%n\u8bd1\u8005\u6ce8:AE2FC\u4e5f\u6709\u6d41\u4f53\u8f93\u5165\u603b\u7ebf,\u800c\u4e14\u901f\u5ea6\u66f4\u5feb."
                },
                {
                    "name": "\u80fd\u6e90\u63a5\u6536\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2136.png",
                    "x": 156.0,
                    "y": 156.0,
                    "tooltip": "\u80fd\u6e90\u63a5\u6536\u5668",
                    "data": "\u80fd\u91cf\u63a5\u6536\u5668\u662f\u5411AE\u7f51\u7edc\u6ce8\u5165\u80fd\u91cf\u7684\u4e00\u79cd\u53ef\u9009\u8bbe\u5907.\u4f60\u53ef\u4ee5\u6784\u5efa\u4e00\u4e2a\u53ea\u6709\u80fd\u6e90\u63a5\u6536\u5668\u7684\"\u54d1\u7684\"\u7f51\u7edc,\u4f46\u60f3\u8981\u6709\u771f\u6b63\u7684\u529f\u80fd,\u4f60\u8fd8\u662f\u9700\u8981ME\u63a7\u5236\u5668.%n%n\u5982\u679c\u8981\u6784\u5efa\u5b50\u7f51\u7edc,\u76f4\u63a5\u7528\u77f3\u82f1\u7ea4\u7ef4\u4f20\u8f93\u80fd\u91cf\u5c31\u884c\u4e86."
                },
                {
                    "name": "\u6e90\u8d28\u53d1\u4fe1\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2526.png",
                    "x": 300.0,
                    "y": 48.0,
                    "tooltip": "\u6e90\u8d28\u53d1\u4fe1\u5668",
                    "data": "\u4e0e\u53e6\u5916\u4e24\u79cd\u53d1\u4fe1\u5668\u7c7b\u4f3c,\u6e90\u8d28\u7248\u672c."
                },
                {
                    "name": "Essentia Quantum Storage",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6766405517321273132.png",
                    "x": 828.0,
                    "y": 336.0,
                    "tooltip": "Essentia Quantum Storage",
                    "data": "Seems like you really want to swim in essentia?"
                },
                {
                    "name": "1\u9636AE\u6e90\u8d28\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2496.png",
                    "x": 396.0,
                    "y": 372.0,
                    "tooltip": "1\u9636AE\u6e90\u8d28\u5b58\u50a8",
                    "data": "\u8fd9\u662f\u6570\u5b57\u5316\u5b58\u50a8\u7684\u6e90\u8d28\u7248\u672c,\u53ef\u4ee5\u7528\u4e8e\u5728\u4f60\u7684\u7f51\u7edc\u4e2d\u5b58\u50a8\u6e90\u8d28."
                },
                {
                    "name": "\u4ece\u7f51\u7edc\u4e2d\u5bfc\u51fa\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2513.png",
                    "x": 12.0,
                    "y": 264.0,
                    "tooltip": "\u4ece\u7f51\u7edc\u4e2d\u5bfc\u51fa\u6e90\u8d28",
                    "data": "\u7167\u4e0a\u9762\u8bf4\u7684\u505a\u5427. \u4f46\u662f\u53ef\u80fd\u7528\u4e0d\u4e86\u592a\u591a,\u8c01\u77e5\u9053\u5462."
                },
                {
                    "name": "\u4ece\u7f51\u7edc\u4e2d\u63d0\u53d6\u7269\u54c1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1306.png",
                    "x": 84.0,
                    "y": 264.0,
                    "tooltip": "\u4ece\u7f51\u7edc\u4e2d\u63d0\u53d6\u7269\u54c1",
                    "data": "ME\u8f93\u51fa\u603b\u7ebf\u5c06\u4f1a\u4eceME\u7f51\u7edc\u4e2d\u5c06\u7269\u54c1\u63d0\u53d6\u81f3\u5bb9\u5668\u4e2d.\u9700\u8981\u63d0\u53d6\u7684\u7269\u54c1\u5fc5\u987b\u653e\u5165\u6e05\u5355,\u5426\u5219\u8f93\u51fa\u603b\u7ebf\u5c06\u4e0d\u4f1a\u8f93\u51fa\u4efb\u4f55\u7269\u54c1.ME\u8f93\u51fa\u603b\u7ebf\u4f1a\u5c1d\u8bd5\u8f93\u51fa\u4efb\u4f55\u5728\u5176\u6e05\u5355\u4e0a\u7684\u7269\u54c1.\u5982\u679c\u5728\u7f51\u7edc\u4e2d\u627e\u4e0d\u5230\u6e05\u5355\u4e2d\u6240\u6807\u8bb0\u7684\u9700\u8981\u63d0\u53d6\u7684\u7269\u54c1,\u90a3\u4e48\u5c06\u8df3\u8f6c\u5230\u4e0b\u4e00\u4e2a\u7269\u54c1\u7ee7\u7eed\u5bfb\u627e.(\u6709\u591a\u79cd\u6a21\u5f0f\u53ef\u9009) \u8fd9\u4e2a\u8bbe\u5907\u9700\u89811\u4e2a\u9891\u9053. \u548cME\u8f93\u5165\u603b\u7ebf\u529f\u80fd\u76f8\u53cd."
                },
                {
                    "name": "\u88c5\u6ee1\u6c34\u7bb1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1259.png",
                    "x": 48.0,
                    "y": 264.0,
                    "tooltip": "\u88c5\u6ee1\u6c34\u7bb1",
                    "data": "\u8f93\u51faME\u7f51\u7edc\u4e2d\u7684\u6d41\u4f53."
                },
                {
                    "name": "Fluid Quantum Storage",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7095756151271155560.png",
                    "x": 828.0,
                    "y": 264.0,
                    "tooltip": "Fluid Quantum Storage",
                    "data": "Are you draining an ocean?"
                },
                {
                    "name": "\u6d41\u4f53\u4ea4\u6362",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2540.png",
                    "x": 156.0,
                    "y": 192.0,
                    "tooltip": "\u6d41\u4f53\u4ea4\u6362",
                    "data": "\u6d41\u4f53\u81ea\u52a8\u88c5\u586b\u673a\u7684\u9ed8\u8ba4\u6a21\u5f0f\u4f1a\u57fa\u4e8e\u7f51\u7edc\u4e2d\u7684\u6240\u6709\u53ef\u7528\u6d41\u4f53\u6dfb\u52a0\u5408\u6210\u6876\u88c5\u6d41\u4f53\u7684\u6837\u677f. \u6bd4\u5982\u5408\u6210\u4e00\u4e2a\u6c34\u6876,\u4f1a\u4ece\u7f51\u7edc\u4e2d\u62bd\u53d6\u4e00\u4e2a\u6876\u4ee5\u53ca\u6c34,\u8fd4\u56de\u4e00\u4e2a\u6c34\u6876.%n\u8bd1\u8005\u6ce8: \u53ef\u4ee5\u4fee\u6539\u88c5\u586b\u5bb9\u5668,\u6bd4\u5982\u5355\u5143\u6216\u8005\u901a\u7528\u6d41\u4f53\u5355\u5143,\u4e0d\u8fc7\u4f7f\u7528\u5355\u5143\u7684\u65f6\u5019\u6709\u4e2abug,\u5851\u6599\u5236\u54c1\u4e00\u4e2a\u5355\u5143\u5bb9\u91cf144mb,\u4f46\u4f1a\u62bd\u53d61000mb... \u6240\u4ee5\u63a8\u8350\u4f7f\u7528\u901a\u7528\u6d41\u4f53\u5355\u5143. \u53e6\u5916\u8fd9\u73a9\u610f\u7684\u901f\u5ea6\u5b9e\u5728\u4e0d\u548b\u5730..."
                },
                {
                    "name": "\u798f\u9c81\u4f0a\u514b\u65af(Fluix)\u6c34\u6676",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/181.png",
                    "x": 192.0,
                    "y": 156.0,
                    "tooltip": "\u798f\u9c81\u4f0a\u514b\u65af(Fluix)\u6c34\u6676",
                    "data": "\u4e0d\u662f\"flux(\u5492\u6ce2)\"!\u867d\u7136\u5b83\u4eec\u7684\u989c\u8272\u5dee\u4e0d\u591a! \u4f60\u9700\u8981\u5c06\u7ea2\u77f3\u548c\u4e0b\u754c\u77f3\u82f1\u6dfb\u52a0\u5230\u5145\u80fd\u8d5b\u7279\u65af\u77f3\u82f1\u4e2d."
                },
                {
                    "name": "ME\u6d41\u4f53\u63a5\u53e3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1305.png",
                    "x": 48.0,
                    "y": 192.0,
                    "tooltip": "ME\u6d41\u4f53\u63a5\u53e3",
                    "data": "\u5c06\u4f60\u7684\u6d41\u4f53\u5236\u4f5c\u6837\u677f\u653e\u5728\u4e8c\u5408\u4e00\u63a5\u53e3\u4e2d.\u8fd9\u5c06\u4f7fAE2\u80fd\u591f\u540c\u65f6\u53d1\u9001\u6d41\u4f53\u548c\u7269\u54c1.\u6ce8\u610f.\u6d41\u4f53\u5148\u88ab\u53d1\u9001,\u7136\u540e\u624d\u662f\u7269\u54c1."
                },
                {
                    "name": "\u4e3a\u6bd4\u6c14\u4f53\u66f4\u6c14\u4f53\u7684--\u6e90\u8d28--\u7f16\u7801",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2531.png",
                    "x": 300.0,
                    "y": 156.0,
                    "tooltip": "\u4e3a\u6bd4\u6c14\u4f53\u66f4\u6c14\u4f53\u7684--\u6e90\u8d28--\u7f16\u7801",
                    "data": "\u8fd9\u662f\u6e90\u8d28\u7248\u672c\u7684\u5143\u4ef6\u5de5\u4f5c\u53f0."
                },
                {
                    "name": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/183.png",
                    "x": 336.0,
                    "y": 228.0,
                    "tooltip": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "data": "\u6709\u4e09\u79cd\u65b9\u6cd5\u5236\u9020AE\u5904\u7406\u5668. \u7b2c\u4e00,\u4f7f\u7528AE\u7684\u538b\u5370\u5668,\u5b83\u7684\u901f\u5ea6\u6bd4\u8f83\u6162,\u4e14\u4e00\u6b21\u53ea\u80fd\u5bb9\u7eb3\u4e00\u4efd\u7269\u54c1,\u8fd8\u9700\u8981\u4ece\u7279\u5b9a\u65b9\u5411\u8f93\u5165/\u8f93\u51fa,\u4e0d\u8fc7\u53ef\u4ee5\u7528AE\u5361\u52a0\u901f. \u7b2c\u4e8c,\u8fd8\u6709\u7c7b\u4f3c\u7684\u9ad8\u7ea7\u538b\u5370\u5668,\u4f46\u8fd9\u79cd\u5bb9\u7eb3\u7684\u7269\u54c1\u53ef\u4ee5\u5806\u53e0,\u4e14\u4e0d\u9700\u8981\u7279\u5b9a\u65b9\u5411\u8f93\u5165/\u8f93\u51fa. \u6700\u540e,GT\u7ec4\u88c5\u673a(\u4ee5\u53ca\u540e\u9762\u7684\u591a\u65b9\u5757\u7ec4\u88c5\u673a),\u901f\u5ea6\u975e\u5e38\u5feb,\u4f46\u8981\u6c42\u6d41\u4f53\u8f93\u5165,\u5e76\u6d88\u8017\u66f4\u591a\u80fd\u91cf. \u73b0\u5728,\u6bcf\u79cd\u7535\u8def\u505a8\u4e2a\u5427."
                },
                {
                    "name": "\u5f97\u627e\u5230\u5b83\u4eec",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/179.png",
                    "x": 336.0,
                    "y": 120.0,
                    "tooltip": "\u5f97\u627e\u5230\u5b83\u4eec",
                    "data": "\u5730\u8868\u4e0a\u6709\u5f88\u591a\u9668\u77f3,\u4f46\u5730\u4e0b\u6709\u66f4\u591a.\u4e3a\u4e86\u627e\u5230\u8fd9\u4e9b\u9668\u77f3,\u4f60\u9700\u8981\u4e00\u4e2a\u9668\u77f3\u7f57\u76d8.\u4f46\u9668\u77f3\u7f57\u76d8\u53ea\u4f1a\u544a\u8bc9\u4f60\u5f53\u524d\u533a\u5757\u91cc\u6709\u4e00\u9897\u9668\u77f3,\u800c\u7528\u4f60\u53e4\u8001\u7684\u5bfb\u77ff\u9b54\u6756,\u4f60\u53ef\u4ee5\u66f4\u51c6\u786e\u5730\u77e5\u9053\u9668\u77f3\u85cf\u5728\u54ea\u91cc.%n%n\u60f3\u8981\u83b7\u77e5AE2\u7684\u66f4\u591a\u7ec6\u8282,\u8bbf\u95eehttps://tinyurl.com/GTNH-AE2"
                },
                {
                    "name": "\u9ad8\u7ea7\u5b58\u50a8\u5916\u58f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2487.png",
                    "x": 612.0,
                    "y": 120.0,
                    "tooltip": "\u9ad8\u7ea7\u5b58\u50a8\u5916\u58f3",
                    "data": "\u9ad8\u9636\u5b58\u50a8\u7ec4\u4ef6\u9700\u8981\u4f7f\u7528\u6b64\u5916\u58f3\u624d\u80fd\u5236\u6210\u53ef\u7528\u7684\u5143\u4ef6."
                },
                {
                    "name": "Housing for Advanced Fluid Components",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8261255533218631311.png",
                    "x": 612.0,
                    "y": 300.0,
                    "tooltip": "Housing for Advanced Fluid Components",
                    "data": "You need to use this for the higher-tiered Fluid Cells."
                },
                {
                    "name": "\u6211\u53ef\u4ee5\u968f\u4fbf\u7528\u65e0\u7ebf\u63a5\u5165\u5668\u4e86,\u8c22\u8c22",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2528.png",
                    "x": 228.0,
                    "y": 264.0,
                    "tooltip": "\u6211\u53ef\u4ee5\u968f\u4fbf\u7528\u65e0\u7ebf\u63a5\u5165\u5668\u4e86,\u8c22\u8c22",
                    "data": "\u4e2d\u5b50\u80fd\u6e90\u5143\u4ef6\u53ef\u4ee5\u4e3a\u4f60\u7684\u7f51\u7edc\u63d0\u4f9b\u65e0\u9650\u7684\u80fd\u91cf. \u4f60\u9700\u8981\u65e0\u5c3d\u952d\u624d\u80fd\u5236\u9020\u5b83."
                },
                {
                    "name": "\u7167\u660e\u9762\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2519.png",
                    "x": 192.0,
                    "y": 84.0,
                    "tooltip": "\u7167\u660e\u9762\u677f",
                    "data": "\u6240\u6709\u7684\u7ec8\u7aef\u90fd\u662f\u7531\u6b64\u5408\u6210\u51fa\u6765\u7684. \u6240\u4ee5\u4f60\u5e94\u8be5\u9700\u8981\u4e0d\u5c11."
                },
                {
                    "name": "\u5431\u5431\u5431...\u5145\u7535",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1290.png",
                    "x": 192.0,
                    "y": 120.0,
                    "tooltip": "\u5431\u5431\u5431...\u5145\u7535",
                    "data": "\u5145\u80fd\u8d5b\u7279\u65af\u77f3\u82f1\u662f\u5236\u4f5c\u5f88\u591aAE\u7269\u54c1\u7684\u57fa\u7840\u6750\u6599.\u4f60\u53ef\u4ee5\u8ba9\u7ea2\u77f3\u7c89\u548c\u8d5b\u7279\u65af\u77f3\u82f1\u7c89\u53d1\u751f\u53cd\u5e94,\u5f97\u5230\u5145\u80fd\u8d5b\u7279\u65af\u77f3\u82f1\u7c89,\u7136\u540e\u4f7f\u7528\u9ad8\u538b\u91dc\u6676\u5316\u5f97\u5230\u5b83.%n%n\u6216\u8005\u5982\u679c\u4f60\u6709\u5927\u91cf\u7684\u94a0,\u5219\u53ef\u4ee5\u4f7f\u7528\u5316\u5b66\u53cd\u5e94\u91dc\u914d\u65b9. \u4f60\u8fd8\u53ef\u4ee5\u5236\u9020\u5145\u80fd\u5668(AE),\u76f4\u63a5\u5c06\u8d5b\u7279\u65af\u77f3\u82f1\u5145\u80fd,\u4f46\u8fd9\u6bd4\u8f83\u6162. \u5145\u80fd\u5668\u5e95\u90e8\u53ef\u76f4\u63a5\u4e0eGT\u7ebf\u7f06\u6216AE\u7ebf\u7f06\u8fde\u63a5.%n%n\u8bf7\u6ce8\u610f,\u67d0\u4e9b\u914d\u65b9(\u76f8\u5f53\u4e00\u90e8\u5206)\u53ea\u6709\u4e00\u5b9a\u51e0\u7387\u51fa\u4ea7\u5145\u80fd\u8d5b\u7279\u65af\u77f3\u82f1."
                },
                {
                    "name": "\u5c06\u7269\u54c1\u8f93\u5165\u7f51\u7edc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1308.png",
                    "x": 84.0,
                    "y": 228.0,
                    "tooltip": "\u5c06\u7269\u54c1\u8f93\u5165\u7f51\u7edc",
                    "data": "\u5c06\u5176\u9762\u5bf9\u7684\u5bb9\u5668\u4e2d\u7684\u7269\u54c1\u8f93\u5165\u8fdbME\u7f51\u7edc\u4e2d. \u4f60\u53ef\u4ee5\u901a\u8fc7UI\u6765\u9009\u62e9\u63d0\u53d6\u54ea\u4e9b\u7269\u54c1,\u6216\u8005\u9ed8\u8ba4\u5c06\u6240\u6709\u7269\u54c1\u5168\u90e8\u63d0\u53d6\u8fdb\u5165ME\u7f51\u7edc. \u8f93\u5165\u603b\u7ebf\u5c06\u4f1a\u8bd5\u56fe\u5c06\u5bb9\u5668\u5185\u7684\u5168\u90e8\u7269\u54c1\u5bfc\u5165\u7f51\u7edc,\u4f8b\u5982,\u5982\u679c\u7f51\u7edc\u7684\u5b58\u50a8\u7c7b\u522b\u5df2\u7ecf\u5230\u8fbe\u4e86\u6700\u5927,\u90a3\u4e48\u8f93\u5165\u603b\u7ebf\u5c06\u4f1a\u5c1d\u8bd5\u5bfb\u627e\u5bb9\u5668\u4e2d\u5df2\u7ecf\u5b58\u5728\u4e8eME\u7f51\u7edc\u4e2d\u7684\u5e76\u4e14\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u5806\u53e0\u7684\u7269\u54c1. \u9700\u89811\u4e2a\u9891\u9053,\u548cME\u8f93\u51fa\u603b\u7ebf\u529f\u80fd\u76f8\u53cd.%n%n\u5f53\u673a\u5668\u7684\u5904\u7406\u901f\u5ea6\u5f88\u5feb\u65f6,\u6700\u597d\u8ba9\u5176\u76f4\u63a5\u8f93\u51fa\u5230ME\u63a5\u53e3\u4e2d,\u56e0\u4e3aME\u63a5\u53e3\u7684\u4f20\u8f93\u662f\u5373\u65f6\u7684."
                },
                {
                    "name": "\u9769\u547d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/365.png",
                    "x": 84.0,
                    "y": 372.0,
                    "tooltip": "\u9769\u547d",
                    "data": "\u4f60\u89c9\u5f97\u6ce8\u9b54\u592a\u6162\u4e86?\u5509,\u4f60\u8981\u7528\u4e16\u754c\u52a0\u901f\u5668\u624d\u80fd\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898--\u4f46\u8fd9\u4f1a\u5bfc\u81f4\u5927\u91cf\u7684\u5ef6\u8fdf.%n%n\u597d\u5728\u4f60\u518d\u4e5f\u4e0d\u7528\u62c5\u5fc3\u4e86!\u8bd5\u8bd5\u5168\u65b0\u7684\"\u6ce8\u9b54\u622a\u6d41\u8005\"\u5427.\u9605\u8bfb\u9b54\u5bfc\u624b\u518c\"\u795e\u79d8\u9769\u547d\"\u7ae0\u8282\u83b7\u53d6\u66f4\u591a\u4fe1\u606f."
                },
                {
                    "name": "ME\u5b58\u50a8\u603b\u7ebf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1303.png",
                    "x": 48.0,
                    "y": 120.0,
                    "tooltip": "ME\u5b58\u50a8\u603b\u7ebf",
                    "data": "\u5c06ME\u5b58\u50a8\u603b\u7ebf\u8d34\u5728\u5176\u4ed6\u7684\u5bb9\u5668\u4e0a,\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7ME\u7f51\u7edc\u6765\u7ba1\u7406\u8fd9\u4e2a\u5bb9\u5668.\u901a\u8fc7ME\u5b58\u50a8\u603b\u7ebf\u7684\u5b58\u50a8\u63a7\u5236\u662f\u53cc\u5411\u7684,\u53ea\u8981ME\u5b58\u50a8\u603b\u7ebf\u6b63\u5728\u6b63\u5e38\u5de5\u4f5c,\u90a3\u4e48\u5b83\u5c31\u65e2\u53ef\u4ee5\u8f93\u5165\u4e5f\u53ef\u4ee5\u8f93\u51fa.ME\u5b58\u50a8\u603b\u7ebf\u5c06\u51e0\u4e4e\u53ef\u4ee5\u8c03\u7528\u4efb\u4f55MOD\u7684\u5b58\u50a8\u6a21\u5757,\u5305\u62ecMFR\u7684\u5f02\u6b21\u5143\u5b58\u50a8\u5668,FZ\u7684\u6876,JABBA\u7684\u6876\u548c\u66f4\u597d\u5b58\u50a8\u91cc\u9762\u7684\u8d27\u4ed3(Better-Storage-crates).\u4e5f\u53ef\u4ee5\u7528\u5728BC\u7684\u7ba1\u9053\u4e2d.%n%n\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b58\u50a8\u603b\u7ebf\u7684UI\u6765\u63a7\u5236\u5bb9\u5668\u53ef\u4ee5\u5b58\u50a8\u54ea\u4e9b\u7269\u54c1,\u8fd9\u9879\u8bbe\u7f6e\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5bb9\u5668\u5185\u5df2\u6709\u7269\u54c1\u7684\u53d6\u51fa.%n%n\u5982\u679c\u4f60\u628aME\u5b58\u50a8\u603b\u7ebf\u8d34\u5230\u4e00\u4e2aME\u63a5\u53e3\u4e0a,\u90a3\u4e48\u8fd9\u4e2a\u5b58\u50a8\u603b\u7ebf\u5c31\u53ef\u4ee5\u4e0eME\u63a5\u53e3\u6240\u5728\u7f51\u7edc\u4e2d\u7684\u5168\u90e8\u5185\u5bb9\u8fdb\u884c\u4ea4\u4e92.\u9664\u975e\u8fd9\u4e2aME\u63a5\u53e3\u6807\u8bb0\u4e86\u81ea\u8eab\u5b58\u50a8\u7684\u7269\u54c1--\u8fd9\u6837\u5b58\u50a8\u603b\u7ebf\u53ea\u80fd\u8bbf\u95eeME\u63a5\u53e3\u5185\u90e8\u7684\u7269\u54c1."
                },
                {
                    "name": "ME\u63a5\u53e3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1302.png",
                    "x": 84.0,
                    "y": 192.0,
                    "tooltip": "ME\u63a5\u53e3",
                    "data": "ME\u63a5\u53e3\u662f\u552f\u4e00\u65e2\u53ef\u4ee5\u7528\u4f5c\u9762\u677f\u4e5f\u53ef\u4ee5\u7528\u4f5c\u65b9\u5757\u7684\u7ec4\u4ef6.\u5b83\u7684\u8fd9\u4e24\u79cd\u5f62\u6001,\u53ef\u4ee5\u5728\u5408\u6210\u680f\u4e2d\u4efb\u610f\u5207\u6362. \u5982\u679c\u5e0c\u671b\u5728\u4e00\u683c\u4e2d\u63d0\u4f9b\u591a\u4e2a\u4e0d\u540c\u7684\u63a5\u53e3,\u90a3\u4e48\u9762\u677f\u6a21\u5f0f\u5c31\u5f88\u6709\u7528,\u4f46\u6bcf\u4e2aME\u63a5\u53e3\u4f9d\u7136\u9700\u89811\u4e2a\u9891\u9053. \u800c\u65b9\u5757\u6a21\u5f0f\u5219\u5141\u8bb8\u5176\u4ed6\u591a\u4e2a\u65b9\u5757\u8fde\u63a5\u5230\u540c\u4e00ME\u63a5\u53e3\u4e0a,\u8fd9\u6837\u53ea\u9700\u89811\u4e2a\u9891\u9053. \u5f53\u4e0e\u5176\u4ed6MOD\u7684\u7ba1\u9053\u3001\u673a\u5668\u6216\u8005\u7f51\u7edc\u8fde\u63a5\u65f6,ME\u63a5\u53e3\u4f5c\u4e3a\u4e2d\u95f4\u7684\u8f6c\u6362\u63a5\u53e3\u5b58\u5728.%n%n\u5982\u679c\u4f60\u4f7f\u7528\u4e86\u6750\u8d28\u5305,\u7136\u540e\u63a5\u53e3\u7684GUI\u65e0\u6cd5\u6b63\u5e38\u663e\u793a\u7684\u8bdd,\u8bf7\u5220\u9664\u8d44\u6e90\u5305zip\u538b\u7f29\u5305\u5185,assets\\appliedenergistics2\\textures\\guis\\interface.png\u8fd9\u4e2a\u6587\u4ef6."
                },
                {
                    "name": "ME\u6d41\u4f53\u5b58\u50a8\u603b\u7ebf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1304.png",
                    "x": 12.0,
                    "y": 120.0,
                    "tooltip": "ME\u6d41\u4f53\u5b58\u50a8\u603b\u7ebf",
                    "data": "\u4ec5\u80fd\u5bf9\u6d41\u4f53\u8fdb\u884c\u64cd\u4f5c."
                },
                {
                    "name": "\u5b58\u50a8\u65f6\u95f4!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/178.png",
                    "x": 336.0,
                    "y": 192.0,
                    "tooltip": "\u5b58\u50a8\u65f6\u95f4!",
                    "data": "\u60f3\u8981\u642d\u5efa\u4e00\u4e2aAE\u7cfb\u7edf,\u4f60\u9700\u89814\u79cd\u4e0d\u540c\u7c7b\u578b\u82af\u7247\u7684\u538b\u5370\u6a21\u677f,\u628a\u5b83\u4eec\u6536\u96c6\u9f50\u5168\u5427! \u5982\u679c\u4f60\u5230EV\u9636\u6bb5\u8fd8\u672a\u96c6\u9f50\u5b83\u4eec\u7684\u8bdd,\u4e5f\u53ef\u4ee5\u901a\u8fc7\u673a\u5668\u76f4\u63a5\u5236\u9020.%n%n\u53e6\u5916,\u642d\u5efaAE\u7cfb\u7edf\u9700\u8981\u6210\u5428\u7684\u949b,\u6240\u4ee5\u5148\u505a\u5230\u91cf\u4ea7\u949b\u5427!"
                },
                {
                    "name": "\u4fdd\u6301\u7f51\u7edc\u7a33\u5b9a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1291.png",
                    "x": 192.0,
                    "y": 228.0,
                    "tooltip": "\u4fdd\u6301\u7f51\u7edc\u7a33\u5b9a",
                    "data": "\u80fd\u6e90\u5143\u4ef6\u53ef\u4ee5\u5e2e\u52a9\u4f60\u7a33\u5b9a\u7f51\u7edc\u4e2d\u7684\u7528\u7535\u6ce2\u52a8. \u5b83\u53ef\u4ee5\u5b58\u50a8200000AE\u7684\u80fd\u6e90. \u4e0d\u8fc7\u80fd\u6e90\u5143\u4ef6\u4e0d\u80fd\u76f4\u63a5\u63a5\u53d7\u7535\u80fd,\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7ME\u7f51\u7edc\u8fdb\u884c\u80fd\u91cf\u7f13\u51b2."
                },
                {
                    "name": "\u9b54\u6cd5\u4ec6\u4ece",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2549.png",
                    "x": 120.0,
                    "y": 372.0,
                    "tooltip": "\u9b54\u6cd5\u4ec6\u4ece",
                    "data": "\u5f53\u5080\u5121\u5728\u65e0\u7ebf\u8303\u56f4\u5185\u65f6,\u4f60\u5c31\u80fd\u901a\u8fc7\u65e0\u7ebf\u5080\u5121\u80cc\u5305\u5c06\u6b64\u5080\u5121\u4e0eME\u7f51\u7edc\u8fde\u63a5. \u67e5\u9605\u9b54\u5bfc\u624b\u518c\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f.%n%n"
                },
                {
                    "name": "\u5965\u672f\u5408\u6210\u7ec8\u7aef",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2517.png",
                    "x": 228.0,
                    "y": 120.0,
                    "tooltip": "\u5965\u672f\u5408\u6210\u7ec8\u7aef",
                    "data": "\u5965\u672f\u5408\u6210\u7ec8\u7aef\u662f\u5965\u672f\u5de5\u4f5c\u53f0\u7684\u7ec8\u7aef\u7248\u672c. \u9664\u4e86\u6cd5\u6756,\u5b83\u8fd8\u53ef\u4ee5\u5728\u5185\u90e8\u4fdd\u7559\u4e00\u5957vis\u51cf\u514d\u88c5\u5907. \u4f60\u8fd8\u80fd\u5c06\u5176\u4e0e\u8981\u7d20\u4e2d\u7ee7\u63a5\u53e3\u94fe\u63a5,\u8fd9\u6837\u5c31\u80fd\u4e3a\u7ec8\u7aef\u5185\u7684\u6cd5\u6756\u5145\u80fd.%n%n\u6e90\u8d28\u7ec8\u7aef\u4e0e\u6d41\u4f53\u7ec8\u7aef\u7684\u5de5\u4f5c\u65b9\u5f0f\u7c7b\u4f3c."
                },
                {
                    "name": "\u5feb\u901f\u7f16\u5199\u6837\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2521.png",
                    "x": 192.0,
                    "y": 12.0,
                    "tooltip": "\u5feb\u901f\u7f16\u5199\u6837\u677f",
                    "data": "\u5728\u6837\u677f\u7f16\u7801\u53f0\u4e2d,\u4f60\u53ef\u4ee5\u5728NEI\u9875\u9762\u6309\u4f4fShift\u5e76\u5355\u51fb\"?\"\u6309\u94ae\u76f4\u63a5\u7f16\u5199\u5408\u6210\u6837\u677f,\u5373\u4fbf\u4f60\u7684ME\u7f51\u7edc\u4e2d\u6ca1\u6709\u6240\u9700\u7684\u539f\u6599\u4e5f\u80fd\u6210\u529f(\u5728\u6837\u677f\u7ec8\u7aef\u4e2d\u8fdb\u884c\u76f8\u540c\u64cd\u4f5c\u65f6\u8981\u6c42\u6709\u6240\u9700\u539f\u6599\u624d\u80fd\u6210\u529f\u7f16\u5199\u6837\u677f).%n%n\u867d\u7136,\u4f60\u4e5f\u80fd\u4eceNEI\u76f4\u63a5\u62d6\u62fd\u7269\u54c1\u5b9e\u73b0\u6837\u677f\u7f16\u5199,\u4f46\u8fd9\u6837\u5c31\u6162\u591a\u4e86,\u56e0\u4e3a\u4f60\u9700\u8981\u4e00\u4e2a\u4e00\u4e2a\u6838\u5bf9\u6240\u9700\u539f\u6599. \u8fd9\u79cd\u64cd\u4f5c\u5bf9\u4e8e\u5904\u7406\u6a21\u5f0f\u6ca1\u6709\u591a\u5927\u7528\u5904,\u56e0\u4e3a\u5904\u7406\u6a21\u5f0f\u7684\u6837\u677f\u57fa\u672c\u603b\u662f64\u4e3a\u4e00\u5355\u4f4d."
                },
                {
                    "name": "ME\u63a7\u5236\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2137.png",
                    "x": 336.0,
                    "y": 264.0,
                    "tooltip": "ME\u63a7\u5236\u5668",
                    "data": "ME\u7f51\u7edc\u7684\u6838\u5fc3.\u76f4\u63a5\u5411\u5b83\u6ce8\u5165\u80fd\u91cf\u53ef\u4ee5\u7ed9\u6574\u4e2a\u7f51\u7edc\u4f9b\u80fd,\u4e0d\u8fc7\u4f60\u5927\u6982\u8fd8\u662f\u4f1a\u60f3\u5c3d\u53ef\u80fd\u7559\u4e0b\u7a7a\u95f4,\u4ee5\u6784\u5efa\u7f51\u7edc\u4e3b\u4f53.\u6ca1\u6709ME\u63a7\u5236\u5668\u7684\u7f51\u7edc\u53ea\u80fd\u67098\u4e2a\u9891\u9053.%n%nME\u63a7\u5236\u5668\u53ef\u4ee5\u6784\u6210\u591a\u65b9\u5757\u7ed3\u6784,\u80fd\u6269\u5c55\u81f3\u6700\u59277x7x7,\u6bcf\u4e2a\u63a7\u5236\u5668\u65b9\u5757\u6700\u591a\u53ea\u80fd\u5728\u4e00\u4e2a\u8f74\u4e0a\u6709\u4e24\u4e2a\u76f8\u90bb\u7684\u63a7\u5236\u5668\u65b9\u5757,\u5426\u5219\u5c31\u4f1a\u7f62\u5de5.%n(\u8bd1\u8005\u6ce8:\u8fd9\u53e5\u8bdd\u7b49\u4ef7\u4e8e:\u4e00\u4e2a\u63a7\u5236\u5668\u65b9\u5757\u5728\u540c\u4e00\u5e73\u9762\u4e0a\u6700\u591a\u53ea\u80fd\u67093\u4e2a\u76f8\u90bb\u7684\u63a7\u5236\u5668\u65b9\u5757.)%n\u4e0d\u7ba1\u90a3\u662f\u4ec0\u4e48\u610f\u601d,\u52a8\u624b\u8bd5\u4e00\u8bd5\u5c31\u77e5\u9053\u4e86,\u597d\u5417? \u4e00\u4e2aME\u7f51\u7edc\u53ea\u80fd\u6709\u4e00\u4e2aME\u63a7\u5236\u5668\u591a\u65b9\u5757\u7ed3\u6784.%n%n\u5173\u4e8e\u9891\u9053:%n\u603b\u7684\u6765\u8bf4,\u9664\u975e\u7279\u6b8a\u60c5\u51b5,\u6bcf\u79cd\u8bbe\u5907\u90fd\u8981\u5360\u7528\u4e00\u4e2a\u9891\u9053.\u5982\u679c\u9891\u9053\u4e0d\u8db3,\u8bbe\u5907\u5c31\u4e0d\u4f1a\u8fd0\u884c.\u5982\u679c\u65e0\u6cd5\u786e\u5b9a\u662f\u4ec0\u4e48\u5bfc\u81f4\u4e86ME\u7f51\u7edc\u95ee\u9898,\u8bd5\u8bd5\u5728\u76f8\u5173\u7ebf\u8def\u4e0a\u7528\u667a\u80fd\u7ebf\u7f06,\u6216\u662f\u7f51\u7edc\u53ef\u89c6\u5316\u5de5\u5177\u6765\u770b\u770b\u9891\u9053\u5360\u7528."
                },
                {
                    "name": "\u65e0\u7ebf\u63a5\u5165",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1300.png",
                    "x": 192.0,
                    "y": 300.0,
                    "tooltip": "\u65e0\u7ebf\u63a5\u5165",
                    "data": "\u5728ME\u5b89\u5168\u7ec8\u7aef\u9a8c\u8bc1\u4f60\u7684\u65e0\u7ebf\u7ec8\u7aef,\u65e0\u7ebf\u7ec8\u7aef\u5c06\u4f1a\u83b7\u5f97\u5bf9ME\u7f51\u7edc\u7684\u6c38\u4e45\u8bbf\u95ee\u548c\u63a7\u5236\u6743. \u5982\u679c\u65e0\u7ebf\u7ec8\u7aef\u6ca1\u7535\u4e86\u4f60\u53ef\u4ee5\u5c06\u5b83\u653e\u8fdb\u5145\u7535\u5668\u5145\u7535. \u65e0\u7ebf\u7ec8\u7aef\u6709160\u4e07AE\u7684\u80fd\u6e90\u50a8\u91cf.\u5728\u4f7f\u7528\u65e0\u7ebf\u7ec8\u7aef\u65f6,\u548c\u6700\u8fd1\u7684\u65e0\u7ebf\u63a5\u5165\u70b9\u8ddd\u79bb\u6bcf\u589e\u52a01\u7c73,\u80fd\u91cf\u6d88\u8017\u589e\u52a01AE/t."
                },
                {
                    "name": "\u5c06ME\u7f51\u7edc\u63a5\u5165\u8d85\u51c0\u95f4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1329.png",
                    "x": 156.0,
                    "y": 228.0,
                    "tooltip": "\u5c06ME\u7f51\u7edc\u63a5\u5165\u8d85\u51c0\u95f4",
                    "data": "\u65e0\u7ebf\u63a5\u5165\u5668\u2014\u2014\u8fd1\u8ddd\u79bb\u4f20\u8f93\u7684\u91cf\u5b50\u6865\u4ee3\u66ff\u65b9\u6848. \u901a\u8fc7\u65e0\u7ebf\u8bbe\u7f6e\u5de5\u5177\u70b9\u5bf9\u70b9\u8fde\u63a5,\u4f46\u4e00\u4e2a\u65e0\u7ebf\u63a5\u5165\u5668\u53ea\u80fd\u8fde\u63a5\u53e6\u5916\u4e00\u4e2a\u65e0\u7ebf\u63a5\u5165\u5668.\u4e00\u4e2a\u63a5\u5165\u5668\u7684\u8017\u80fd\u4e3a(10+\u8ddd\u79bb*ln(\u8ddd\u79bb^2+3)AE/t.\u4e0d\u80fd\u8de8\u7ef4\u5ea6\u8fde\u63a5.\u80fd\u91cf\u53ea\u80fd\u4ece\u4e00\u4e2a\u9762\u8f93\u5165.\u6700\u591a\u53ef\u4f20\u8f9332\u4e2a\u9891\u9053.\u80fd\u4e0e\u81f4\u5bc6\u7ebf\u7f06\u76f4\u63a5\u8fde\u63a5.\u672c\u8eab\u4e0d\u6d88\u8017\u9891\u9053."
                },
                {
                    "name": "AE\u6742\u9879",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2548.png",
                    "x": 300.0,
                    "y": 336.0,
                    "tooltip": "AE\u6742\u9879",
                    "data": "\u6709\u4e00\u4e9bAE\u7269\u54c1\u4e0d\u662f\u7279\u522b\u6709\u7528,\u4f46\u4e5f\u8bb8\u503c\u5f97\u4e00\u63d0,\u5982\u4e0b\u6240\u793a:%n%n\u8d5b\u7279\u65af\u77f3\u82f1\u6c34\u69fd:\u53ef\u5b58\u50a832\u6876\u6d41\u4f53,\u4fbf\u643a\u4e14\u6613\u4e8e\u5236\u9020.%n%n\u663e\u793a\u5143\u4ef6:\u5728\u5143\u4ef6\u5de5\u4f5c\u53f0\u4e2d\u914d\u7f6e,\u7528\u4e8e\u8fc7\u6ee4\u7ec8\u7aef\u4e2d\u663e\u793a\u7684\u7269\u54c1(\u5f53\u7136\u9700\u8981\u63d2\u5165\u8be5\u7ec8\u7aef\u624d\u6709\u6548)%n%n\u8d5b\u7279\u65af/\u4e0b\u754c\u77f3\u82f1\u5207\u5272\u5200:\u53f3\u952e\u6253\u5f00GUI.\u5728\u63d2\u69fd\u5185\u653e\u5165\u94c1\u952d,\u7136\u540e\u8f93\u5165\u540d\u5b57\u5373\u53ef\u83b7\u5f97\u540d\u79f0\u538b\u5370\u6a21\u677f.\u8fd9\u4e2a\u538b\u5370\u6a21\u677f\u53ef\u7528\u4e8e\u538b\u5370\u5668\u4e2d\u547d\u540d\u7269\u54c1,\u800c\u65e0\u9700\u94c1\u7827. \u4f60\u8fd8\u53ef\u4ee5\u7528\u5207\u5272\u5200\u76f4\u63a5\u547d\u540d\u4e16\u754c\u4e2d\u7684P2P\u901a\u9053\u548cME\u63a5\u53e3.%n%nME\u65b9\u5757\u5bb9\u5668:\u4ec5\u5bb9\u7eb3\u4e00\u79cd\u7269\u54c1,\u4f46\u5bb9\u91cf\u4e0e64K\u5b58\u50a8\u5143\u4ef6\u76f8\u5f53.\u53ef\u628a\u5176\u5185\u7269\u54c1\u653e\u7f6e\u5230\u4e16\u754c\u4e0a,\u6216\u8005\u66ff\u63621x1\u62163x3\u8303\u56f4\u65b9\u5757.\u88ab\u66ff\u6362\u7684\u65b9\u5757\u4f1a\u4ee5\u6389\u843d\u7269\u7684\u5f62\u5f0f\u51fa\u73b0.\u53ef\u4ee5\u6c34\u5e73\u6216\u5782\u76f4\u66ff\u6362,\u8fd9\u53d6\u51b3\u4e8e\u4f60\u9009\u4e2d\u65b9\u5757\u7684\u54ea\u4e2a\u9762.Shift+\u53f3\u952e\u7a7a\u6c14\u53ef\u4ee5\u5207\u6362\u6a21\u5f0f,\u53f3\u952e\u65b9\u5757\u6fc0\u6d3b\u6a21\u5f0f.%n%n\u5145\u80fd\u77f3\u82f1\u706b\u628a:\u4e0e\u706b\u628a\u53d1\u5149\u8303\u56f4\u4e00\u81f4,\u4f46\u770b\u8d77\u6765\u66f4\u9ad8\u7aef...%n%n\u5149\u4eae\u63a2\u6d4b\u5668:\u57fa\u4e8e\u4eae\u5ea6\u53d1\u51fa\u7ea2\u77f3\u4fe1\u53f7.\u4e0d\u8fc7\u7531\u4e8e\u4eae\u5ea67\u624d\u80fd\u4f7f\u5176\u5f00\u59cb\u5de5\u4f5c,\u6240\u4ee5\u6bd4\u4e0d\u4e0a\u9633\u5149\u4f20\u611f\u5668.%n%nME\u5347\u7ea7(Tier 1/2/3):\u5982\u679c\u4f60\u73a9OC\u7684\u8bdd,\u8fd9\u4e09\u4e2a\u5347\u7ea7\u53ef\u4ee5\u4f7f\u4f60\u7684\u673a\u5668\u4eba\u6216\u65e0\u4eba\u673a\u83b7\u5f97\u65e0\u7ebf\u8bbf\u95eeME\u7f51\u7edc\u7684\u6743\u9650.%nT1:0.5\u500d\u65e0\u7ebf\u8303\u56f4%nT2:\u65e0\u9650\u8303\u56f4%nT3:\u4efb\u610f\u7ef4\u5ea6,\u65e0\u9650\u8303\u56f4%n%n\u71b5\u53d8\u673a\u68b0\u81c2:\u5c06\u8349\u65b9\u5757/\u6ce5\u571f/\u5e72\u71e5\u6ce5\u571f\u4e92\u76f8\u8f6c\u5316,\u6216\u751f\u706b.\u8fd8\u80fd\u878d\u5316\u51b0.\u65e0\u7528...%n%n\u7269\u8d28\u70ae:\u53d1\u5c04\u7269\u8d28\u7403(\u7531\u7269\u8d28\u805a\u5408\u5668\u5236\u51fa). \u8bd1\u8005\u6ce8:\u4e5f\u53ef\u4ee5\u53d1\u5c04\u91d1\u5c5e\u7c92... \u5c06\u5176\u63d2\u5165ME\u7bb1\u5b50\u6216\u8005\u9a71\u52a8\u5668,\u7136\u540e\u5728\u7ec8\u7aef\u653e\u5165\u7269\u8d28\u7403\u8fdb\u884c\u586b\u5145.\u6211\u89c9\u5f97\u8fd8\u884c? \u4e0d\u8fc7\u5b83\u4f1a\u7834\u574f\u65b9\u5757...\u597d\u5427,\u6211\u731c\u4f60\u4f1a\u7528\u67d3\u8272\u7403?%n%n\u67d3\u8272\u5668:\u4f7f\u7528\u67d3\u6599\u6216\u67d3\u8272\u7403(\u6548\u7387\u66f4\u9ad8)\u5bf9\u7269\u54c1\u8fdb\u884c\u67d3\u8272.\u4f60\u53ef\u4ee5\u67d3\u8272\u7c98\u571f,\u6216\u8005\u4efb\u610f\u517c\u5bb9\u4f2a\u88c5\u677f\u7684\u65b9\u5757,\u6bd4\u5982\u7f8a\u6bdb\u6216\u8005\u8349\u65b9\u5757.\u586b\u5145\u65b9\u5f0f\u4e0e\u7269\u8d28\u70ae\u4e00\u81f4.\u4f60\u53ef\u4ee5\u6309\u4f4fShift+\u53f3\u952e(\u4e5f\u53ef\u4ee5\u6ed1\u52a8\u6eda\u8f6e)\u6765\u5faa\u73af\u9009\u62e9\u989c\u8272.\u4f7f\u7528\u96ea\u7403\u53ef\u4ee5\u64e6\u53bb\u989c\u8272.\u4e5f\u53ef\u4ee5\u7528\u53d1\u5c04\u5668.%n%n\u6d77\u8c61:\u8fd9\u662f\u4e00\u53ea\u6d77\u8c61,\u4f60\u5728\u671f\u5f85\u4ec0\u4e48?"
                },
                {
                    "name": "\u589e\u5f3a\u6837\u677f!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2534.png",
                    "x": 120.0,
                    "y": 156.0,
                    "tooltip": "\u589e\u5f3a\u6837\u677f!",
                    "data": "\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86ME\u63a5\u53e3\u7684GUI\u6709\u4e86\u4e00\u4e9b\u53d8\u5316.\u90a3\u662f\u56e0\u4e3a\u6709\u4e86\u8fd9\u5f20\u5361,\u4f60\u5c31\u80fd\u5728\u4e00\u4e2aME\u63a5\u53e3\u4e2d\u653e\u5165\u66f4\u591a\u7684\u6837\u677f,\u6bcf\u5f20\u5361\u589e\u52a09\u4e2a,\u4e00\u5171\u53ef\u4ee5\u670936\u4e2a\u6837\u677f. \u4f46\u662f,\u63a5\u53e3\u7684\u6bcf\u6b21\u5de5\u4f5c\u5c06\u4f1a\u6d88\u8017\u539f\u67654\u500d\u7684\u80fd\u91cf,\u800c\u4e14\u6bcf\u6dfb\u52a0\u4e00\u5f20\u5361\u8fd9\u4e2a\u6570\u5b57\u5c06\u6309\u4e58\u6cd5\u53e0\u52a0(\u610f\u5473\u7740\u52a0\u6ee1\u5361\u7684ME\u63a5\u53e3\u8017\u80fd\u4e3a\u539f\u6765\u768464\u500d). \u5982\u679c\u8fdb\u884c\u67d0\u4e9b\u590d\u6742\u81ea\u52a8\u5408\u6210\u5904\u7406\u7684\u8bdd,\u8bf7\u786e\u4fdd\u4f60\u6709\u4e00\u4e9b\u81f4\u5bc6\u80fd\u6e90\u5143\u4ef6\u4f5c\u4e3a\u80fd\u91cf\u7f13\u5b58.%n%n\u6240\u4ee5\u57fa\u7840\u8017\u7535:(\u63a5\u53e3\u5185\u7684\u7269\u54c1\u603b\u6570)*\u914d\u7f6e\u52a0\u6210(GTNH\u662f10\u500d...). \u63d2\u4e0a\u6837\u677f\u5bb9\u91cf\u5361\u540e,\u8017\u80fd\u9700\u8981\u4e58\u4ee54^(\u6837\u677f\u5bb9\u91cf\u5361\u6570\u91cf)%n%n\u4e3e\u4e2a\u4f8b\u5b50:\u5408\u6210(\u539f\u6728->\u6728\u677f)\u6ca1\u6709\u5347\u7ea7\u7684\u63a5\u53e3\u8017\u80fd\u4e3a:1*10AE,\u4e5f\u5c31\u662f5EU(\u522b\u5fd8\u4e861EU"
                },
                {
                    "name": "Need More Information?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5638703973738633044.png",
                    "x": 264.0,
                    "y": 264.0,
                    "tooltip": "Need More Information?",
                    "data": "A brand new tool for you, amigo.\n\nThis little buddy not only has a larger card slot than the normal one, but also can show more information about your network storage.\n\nClicking the component icon can switch between ITEM, FLUID, and ESSENTIA details.\n\n[warn]NOTE:\n|  unit  |      range   |\n|    B   |    0~2^10   |\n|   KB   | 2^10~2^20 |\n|   MB   | 2^20~2^30 |\n|   GB   | 2^30~2^40 |\n|   TB   | 2^40~2^50 |\n|   PB   | 2^50~2^60 |\n|   EB   | 2^60~2^70 |\n|   ZB   | 2^70~2^80 |\n|   YB   | 2^80~2^90 |\n|   BB   | over 2^90  |[/warn]"
                },
                {
                    "name": "Oceans in a Bottle",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7041794358275821537.png",
                    "x": 900.0,
                    "y": 264.0,
                    "tooltip": "Oceans in a Bottle",
                    "data": "After managing to create an artificial universe capable of storing near-infinite amounts of items, you applied this same technology to your Fluid Digital Singularity Cell to create this truly magnificent piece of tech. This allows you to store up to 5 different types of fluids without the universe collapsing in on itself."
                },
                {
                    "name": "Optimizing Patterns in Late Game!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9120793416319577555.png",
                    "x": 264.0,
                    "y": 12.0,
                    "tooltip": "Optimizing Patterns in Late Game!",
                    "data": "You have probably already seen the button called Optimize Patterns when making an order in your AE system, now it's time to put it in the good use!\n\nTo unlock this feature, just add a Pattern Optimization Matrix block to your AE system (you only need one).\n\n# What does it do?\n\nThis feature allows you to multiply patterns that are needed in large amounts.\n\n1. After calculating a big order, just click Optimize Patterns and you will be welcomed by a new window.\n2. There you specify how much you wish for a singular pattern to be ordered (maximum amount of steps), we recommend putting it at 1000 or 100, [warn]remember that over-optimizing patterns could lead to longer waiting times[/warn]. At this point, you can also disable singular patterns from optimization by clicking on them, but there shouldn't be any unwanted patterns anyway if you already excluded them by toggling a button in unwanted interfaces.\n\u00a7\n\n3. Click Optimize and you are done! Try ordering again to see the changes in pattern steps\n\nAll changes are [warn]permanent and can't be reverted automatically[/warn] so make sure that you have excluded all unwanted interfaces (the Allow Pattern Optimization button is GRAY) like:\n- Single Assembly Line interfaces\n- Extreme Crafting interfaces\n- And any interface that doesn't have (almost)infinite buffer at the other side (inf. chest/storage cells)\nPatterns are only multiplied by powers of 2, so your AAL patterns should be safe.\n\n[note]If you are still confused about maximum order steps here's an example:\nOrdering an EOH calculates that it will need 1,000,008 UHV superconductors crafted (41667 steps, 24 UHV SC patterned), now you proceed to optimize patterns and specify that you wish it to do 1000 steps maximum, it will multiply your pattern 64 times to achieve that goal (41667 / 64 ~= 652 which is lower or equal to 1000). After clicking optimize, UHV SC pattern will now output 1536 UHV SC (24 before).[/note]"
                },
                {
                    "name": "\u81ea\u52a8\u84b8\u998f\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2546.png",
                    "x": 156.0,
                    "y": 372.0,
                    "tooltip": "\u81ea\u52a8\u84b8\u998f\u6e90\u8d28",
                    "data": "\u84b8\u998f\u7f16\u7801\u53f0\u7c7b\u4f3c\u4e8e\u6e90\u8d28\u7248\u7684\u6837\u677f\u7f16\u7801\u53f0,\u7528\u5b83\u7f16\u5199\u51fa\u7684\u6837\u677f\u4f7f\u4f60\u80fd\u591f\u81ea\u52a8\u5c06\u76f8\u5e94\u7269\u54c1\u6295\u5165\u70bc\u91d1\u7089\u5e76\u83b7\u5f97\u6240\u9700\u7684\u6e90\u8d28.%n\u9996\u5148,\u5c06\u626b\u63cf\u8fc7\u7684\u7269\u54c1\u653e\u5165\u7f16\u7801\u53f0,\u540c\u65f6\u653e\u5165\u7a7a\u767d\u6837\u677f. \u5982\u679c\u7269\u54c1\u5305\u542b\u4e0d\u6b62\u4e00\u79cd\u6e90\u8d28,\u4f60\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u6e90\u8d28\u5c06\u5176\u7f6e\u9876,\u518d\u70b9\u51fb\u53f3\u4fa7\u6309\u94ae\u5373\u53ef\u7f16\u7801\u6837\u677f,\u7f16\u5199\u51fa\u7269\u54c1->\u6e90\u8d28\u7684\u6837\u677f. \u5c06\u6b64\u6837\u677f\u63d2\u5165\u70bc\u91d1\u7089\u8fb9\u7684ME\u63a5\u53e3,\u4f60\u5c31\u80fd\u5728\u6e90\u8d28\u7ec8\u7aef\u4e2d\u81ea\u52a8\u5408\u6210\u8fd9\u79cd\u6e90\u8d28\u4e86,\u4e0e\u666e\u901a\u7684\u7269\u54c1\u5408\u6210\u7c7b\u4f3c\u7684\u65b9\u5f0f.%n%n\u4e0d\u8fc7\u76ee\u524d\u8fd8\u6ca1\u6709\u81ea\u52a8\u5408\u6210\u5728\u5965\u672f\u5408\u6210\u8fc7\u7a0b\u4e2d\u6240\u9700\u6e90\u8d28\u7684\u65b9\u6cd5.%n%n"
                },
                {
                    "name": "\u77ff\u5178\u8fc7\u6ee4\u5361",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1330.png",
                    "x": 84.0,
                    "y": 300.0,
                    "tooltip": "\u77ff\u5178\u8fc7\u6ee4\u5361",
                    "data": "\u5b89\u88c5\u77ff\u5178\u8fc7\u6ee4\u5361\u7684\u603b\u7ebf\u4f1a\u5c06\u76f8\u540c\u77ff\u5178\u7684\u7269\u54c1\u6216\u8005\u6d41\u4f53\u4eceME\u7f51\u7edc\u4e2d\u63d0\u53d6\u5230\u76f8\u5e94\u5bb9\u5668\u6216\u50a8\u7f50\u4e2d. \u6253\u5f00\u77ff\u5178\u8fc7\u6ee4\u5361\u7684\u754c\u9762,\u5c31\u53ef\u4ee5\u8f93\u5165\u60f3\u8981\u8f93\u51fa\u7684\u540d\u79f0,\u4f8b\u5982\u60f3\u8981\u8f93\u51fa\u6240\u6709\u7684\u77ff\u77f3,\u90a3\u4e48\u8bf7\u952e\u5165\"ore*\". \u5b83\u7684\u901f\u5ea6\u5f88\u5feb.%n%nPS\uff1acrushed* & !crushedPurified* & !crushedCentrifuged*\u53ef\u4ee5\u6307\u5b9a\u7c89\u788e\u77ff\u77f3,\u5e76\u6ee4\u6389\u6d17\u51c0\u77ff\u77f3,\u7136\u540e\u518d\u5c06\u6d17\u51c0\u77ff\u77f3\u6253\u7c89\u8fd8\u662f\u70ed\u79bb\u6216\u7b5b\u9009\u5c31\u968f\u4f60\u4e86.%n%n\u76f8\u6bd4\u77ff\u5178\u603b\u7ebf,\u77ff\u5178\u5361\u53ef\u4ee5\u7528\u5728\u66f4\u591a\u7684\u8bbe\u5907\u4e0a,\u5ef6\u8fdf\u8fd8\u66f4\u5c11,\u800c\u5de5\u4f5c\u65b9\u5f0f\u7c7b\u4f3c. \u5c06\u5176\u63d2\u5165\u603b\u7ebf\u6216\u5143\u4ef6,\u70b9\u51fb\u51fa\u73b0\u7684T\u6309\u94ae,\u5373\u53ef\u8f93\u5165\u8fc7\u6ee4\u7684\u77ff\u5178. \u603b\u7ebf\u7248\u672c\u5df2\u65e0\u6cd5\u5408\u6210."
                },
                {
                    "name": "\u7f3a\u805a\u56db\u6c1f\u4e59\u70ef? \u542f\u52a8\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2525.png",
                    "x": 300.0,
                    "y": 84.0,
                    "tooltip": "\u7f3a\u805a\u56db\u6c1f\u4e59\u70ef? \u542f\u52a8\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc!",
                    "data": "\u5b83\u4e0e\u6d41\u4f53\u63a2\u6d4b\u8986\u76d6\u677f\u57fa\u672c\u76f8\u540c,\u4e0d\u540c\u7684\u662f\u5b83\u68c0\u6d4b\u7684\u662f\u4f60ME\u7f51\u7edc\u4e2d\u7684\u6d41\u4f53. \u53f3\u952e\u6253\u5f00GUI,\u7528\u5355\u5143\u5728\u7a7a\u4f4d\u5904\u6807\u8bb0\u6d41\u4f53\u5e76\u8bbe\u7f6e\u6570\u91cf,\u518d\u6b21\u5355\u51fb\u53d6\u6d88\u8bbe\u7f6e."
                },
                {
                    "name": "\u6837\u677f\u7ec8\u7aef",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1328.png",
                    "x": 192.0,
                    "y": 48.0,
                    "tooltip": "\u6837\u677f\u7ec8\u7aef",
                    "data": "\u8fd9\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u7528\u4e8e\u7f16\u7801\u7a7a\u767d\u6837\u677f\u7684ME\u5408\u6210\u7ec8\u7aef.%n%nME\u6837\u677f\u7ec8\u7aef\u548c\u666e\u901a\u7ec8\u7aef\u4e00\u6837\u90fd\u53ef\u4ee5\u5bf9\u7f51\u7edc\u5185\u7684\u7269\u54c1\u8fdb\u884c\u6d4f\u89c8\u548c\u7ba1\u7406,\u4f46\u8fd8\u5305\u542b\u4e86\u8bbe\u8ba1\u6837\u677f\u7684\u533a\u57df.\u6709\u4e24\u79cd\u6837\u677f\u7f16\u7801\u6a21\u5f0f:\u5408\u6210\u6837\u677f\u548c\u5904\u7406\u6837\u677f.\u5904\u7406\u6837\u677f\u7528\u4e8e\u4e0d\u4f7f\u7528\u6807\u51c6\u5de5\u4f5c\u53f0\u914d\u65b9\u7684\u673a\u5668,\u4f8b\u5982\u7194\u7089\u548c\u5176\u4ed6(\u51e0\u4e4e\u6240\u6709)mod\u7684\u673a\u5668.\u70b9\u51fb\u754c\u9762\u53f3\u4fa7\u7684\u7194\u7089/\u5de5\u4f5c\u53f0\u6309\u94ae\u53ef\u4ee5\u5207\u6362\u7f16\u7801\u6a21\u5f0f:\u5de5\u4f5c\u53f0\u56fe\u6807\u4ee3\u8868\u7740\u5408\u6210\u6837\u677f\u6a21\u5f0f,\u800c\u7194\u7089\u56fe\u6807\u5219\u4ee3\u8868\u5904\u7406\u6837\u677f\u6a21\u5f0f.%n%n\u5bf9\u4e8e\u5408\u6210\u6837\u677f(\"\u5408\u6210...\"),\u5728\u5de6\u4fa7\u76843x3\u5de5\u4f5c\u53f0\u4e2d\u6307\u5b9a\u539f\u6750\u6599,\u53f3\u4fa7\u7684\u683c\u5b50\u4f1a\u6839\u636e\u5408\u6210\u8868\u914d\u65b9\u81ea\u52a8\u7ed9\u51fa\u8981\u5408\u6210\u7684\u7269\u54c1.%n%n\u5bf9\u4e8e\u5904\u7406\u6837\u677f(\"\u5236\u4f5c...\"),\u9700\u8981\u6307\u5b9a\u8f93\u5165\u539f\u6599(\u5de6\u4fa7)\u548c\u8f93\u51fa\u4ea7\u7269(\u53f3\u4fa7)\u4ee5\u53ca\u5b83\u4eec\u5404\u81ea\u7684\u6570\u91cf.\u5982\u679c\u5b9e\u9645\u914d\u65b9\u4e0d\u80fd\u4fdd\u8bc1100\uff05\u6210\u529f(\u6bd4\u5982GT\u77ff\u7269\u5904\u7406\u4e2d\u7684\u526f\u4ea7\u7269),\u7531\u4e8e\u63a5\u6536\u4e0d\u5230\u8db3\u591f\u7684\u4ea7\u7269,\u5904\u7406\u6837\u677f\u5c06\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c.%n%n\u5728\u5408\u6210\u6837\u677f\u6a21\u5f0f\u4e0b,\u53ea\u8981\u7269\u54c1\u680f\u548c\u7f51\u7edc\u4e2d\u6709\u8db3\u591f\u7684\u539f\u6750\u6599,\u53ef\u4ee5\u76f4\u63a5\u70b9\u51fb\u53f3\u4fa7\u7684\u8f93\u51fa\u683c,\u53d6\u51fa\u5408\u6210\u4ea7\u7269(\u5c31\u548cME\u5408\u6210\u7ec8\u7aef\u4e00\u6837).%n\u522b\u5fd8\u4e86\u5728\u9700\u8981\u7684\u65f6\u5019\u542f\u7528\u77ff\u7269\u8bcd\u5178\u66ff\u6362\u529f\u80fd."
                },
                {
                    "name": "\u6676\u4f53\u50ac\u751f\u4ed3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1295.png",
                    "x": 228.0,
                    "y": 228.0,
                    "tooltip": "\u6676\u4f53\u50ac\u751f\u4ed3",
                    "data": "\u6676\u4f53\u50ac\u751f\u4ed3\u53ef\u4ee5\u901a\u8fc7\u63d2\u5165\u52a0\u901f\u5361\u6765\u66f4\u52a0\u5feb\u901f\u5730\u50ac\u751f\u6676\u4f53.\u5b83\u7684\u5de5\u4f5c\u65b9\u5f0f\u66f4\u50cf\u662f\u666e\u901a\u7684\u8bbe\u5907,\u6676\u4f53\u5728\u5176\u5185\u90e8\u5b58\u50a8\u7a7a\u95f4\u4e2d\u751f\u957f.\u5e76\u4e14\u4e0e\u66f4\u539f\u59cb\u7684\u7248\u672c\u4e0d\u540c,\u5b83\u5728\u4e0d\u4f7f\u7528\u65f6\u4e0d\u8017\u7535.\u8fd9\u53f0\u673a\u5668\u4e5f\u4e0d\u9700\u8981\u9891\u9053."
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6570\u5b57\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2538.png",
                    "x": 300.0,
                    "y": 264.0,
                    "tooltip": "\u4fbf\u643a\u5f0f\u6570\u5b57\u5b58\u50a8",
                    "data": "\u987e\u540d\u601d\u4e49.%n%n\u7b2c\u4e00\u4e2a\u662f\u7528\u4e8e\u7269\u54c1\u7684,\u4f7f\u7528\u8d77\u6765\u7c7b\u4f3c\u7269\u54c1\u7ec8\u7aef. \u5b83\u53ef\u4ee5\u5bb9\u7eb34,032\u4e2a\u5355\u4e00\u7269\u54c1. \u4e0d\u8fc7\u5728\u4f60\u88c5\u6ee1\u5b83\u4e4b\u524d,\u81ea\u5e26\u7684\u80fd\u91cf\u5c31\u4f1a\u5148\u7528\u5b8c...%n%n\u7b2c\u4e8c\u4e2a\u662f\u7528\u4e8e\u6d41\u4f53\u7684,\u4f7f\u7528\u8d77\u6765\u7c7b\u4f3c\u6d41\u4f53\u7ec8\u7aef. \u5b83\u53ef\u4ee5\u5bb9\u7eb3128\u6876\u5355\u4e00\u6d41\u4f53.%n%n\u5b58\u53d6\u7269\u54c1/\u6d41\u4f53,\u6216\u662f\u6253\u5f00GUI\u90fd\u4f1a\u8017\u80fd. \u4f7f\u7528EIO\u7684\u65e0\u7ebf\u5145\u80fd\u5668\u53ef\u4ee5\u8ba9\u4f60\u65b9\u4fbf\u5f88\u591a. \u8001\u5b9e\u8bf4,\u8fd9\u4e24\u79cd\u4fbf\u643a\u5f0f\u5143\u4ef6\u610f\u4e49\u4e0d\u5927..."
                },
                {
                    "name": "\u6309\u9700\u4f9b\u5e94\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2545.png",
                    "x": 84.0,
                    "y": 336.0,
                    "tooltip": "\u6309\u9700\u4f9b\u5e94\u6e90\u8d28",
                    "data": "\u6e90\u8d28\u4f9b\u5e94\u5668\u548c\u6ce8\u9b54\u4f9b\u5e94\u5668\u505a\u7684\u90fd\u662f\u540c\u4e00\u4ef6\u4e8b,\u4e3a\u8bbe\u5907\u63d0\u4f9b\u5176\u6240\u9700\u7684\u6e90\u8d28.%n%n\u6e90\u8d28\u4f9b\u5e94\u5668\u9700\u8981\u7d27\u8d34\u8be5\u8bbe\u5907,\u6700\u5e38\u7528\u4e8e\u795e\u79d8\u70bc\u91d1\u5854(\u81ea\u52a8\u70bc\u91d1). \u5176\u5b9e\u6e90\u8d28\u4f9b\u5e94\u5668\u5c31\u662f\u4e2aME\u6e90\u8d28\u63a5\u53e3,\u4f60\u53ef\u4ee5\u5c06\u5176\u653e\u7f6e\u4e8e\u84b8\u998f\u5668\u6216\u8005\u9ad8\u7ea7\u70bc\u91d1\u7089\u65c1\u8fb9\u5145\u5f53\u6e90\u8d28\u8f93\u5165\u603b\u7ebf.%n%n\u6ce8\u9b54\u4f9b\u5e94\u5668\u5219\u7528\u4e8e\u90a3\u4e9b\u51ed\u7a7a\u62bd\u53d6\u6e90\u8d28\u7684\u8bbe\u5907,\u6bd4\u5982\u7b26\u6587\u77e9\u9635(\u6ce8\u9b54\u796d\u575b)\u6216\u8d85\u541f\u9644\u9b54\u53f0. \u65e0\u9700\u7d27\u8d34\u8bbe\u5907.%n%n\u5f53\u7136,\u8fd9\u4e24\u79cd\u4f9b\u5e94\u5668\u53ef\u63d0\u4f9b\u7684\u6e90\u8d28\u90fd\u5fc5\u987b\u662f\u7f51\u7edc\u5185\u7684."
                },
                {
                    "name": "\u5411\u7f51\u7edc\u4e2d\u5bfc\u5165\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2514.png",
                    "x": 12.0,
                    "y": 228.0,
                    "tooltip": "\u5411\u7f51\u7edc\u4e2d\u5bfc\u5165\u6e90\u8d28",
                    "data": "\u8d34\u5230\u5965\u672f\u84b8\u998f\u5668\u6216\u8005\u9ad8\u7ea7\u70bc\u91d1\u7089\u7684\u8f93\u51fa\u53e3. \u5982\u679c\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u7684\u8bdd,\u8bf7\u8fde\u63a5\u7ba1\u9053\u5230\u6e90\u8d28\u7f50\u5b50,\u7136\u540e\u5c06\u6e90\u8d28\u8f93\u5165\u603b\u7ebf\u8d34\u5230\u7f50\u5b50\u4e0a. \u4f60\u7ec8\u4e8e\u53ef\u4ee5\u6446\u8131\u90a3\u4e9b\u773c\u795e\u8be1\u5f02\u7684\u5080\u5121\u4e86."
                },
                {
                    "name": "\u9ad8\u7eaf\u5ea6\u6676\u4f53",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1296.png",
                    "x": 192.0,
                    "y": 192.0,
                    "tooltip": "\u9ad8\u7eaf\u5ea6\u6676\u4f53",
                    "data": "\u9ad8\u7eaf\u5ea6\u7684\u4e0b\u754c\u77f3\u82f1\u3001\u8d5b\u7279\u65af\u548c\u798f\u9c81\u4f0a\u514b\u65af\u6c34\u6676\u53ef\u901a\u8fc7\u79cd\u5b50(\u7ec4\u88c5\u6c99\u5b50\u548c\u6676\u4f53\u7c89\u672b)\u83b7\u5f97.%n%n\u5c06\u5b83\u4eec\u4e22\u5165\u6c34\u4e2d\u53ef\u4ee5\u81ea\u7136\u751f\u957f,\u800c\u5728GT\u9ad8\u538b\u91dc\u4e2d\u53ef\u4ee5\u5927\u5927\u52a0\u5feb\u8fd9\u4e00\u8fc7\u7a0b.%n%n\u9ad8\u538b\u91dc\u914d\u65b9\u4e2d,\u84b8\u998f\u6c34\u53ef\u4ee5\u8ba9\u65f6\u95f4\u51cf\u534a.%n"
                },
                {
                    "name": "\u91cf\u5b50\u6865\u8fde\u63a5\u4f60\u7684\u524d\u54e8\u57fa\u5730",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2536.png",
                    "x": 336.0,
                    "y": 336.0,
                    "tooltip": "\u91cf\u5b50\u6865\u8fde\u63a5\u4f60\u7684\u524d\u54e8\u57fa\u5730",
                    "data": "\u91cf\u5b50\u6865\u4f7f\u4f60\u80fd\u591f\u5c06\u8ddd\u79bb\u9065\u8fdc\u7684ME\u7f51\u7edc\u8fde\u63a5\u8d77\u6765,\u5373\u4fbf\u662f\u4e0d\u540c\u7ef4\u5ea6\u90fd\u53ef\u4ee5. \u6240\u4ee5\u4f60\u53ef\u4ee5\u628a\u50cf\u5de8\u578b\u9ad8\u7089\u8fd9\u79cd\u6c61\u67d3\u5927\u6237\u6254\u5230\u865a\u7a7a\u4e16\u754c,\u7136\u540e\u901a\u8fc7\u91cf\u5b50\u6865\u4e0e\u4f60\u5b89\u5168\u7684\u4e3b\u57fa\u5730\u8fde\u63a5\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5408\u6210. \u91cf\u5b50\u6865\u75318\u4e2aME\u91cf\u5b50\u73af\u56f4\u7ed5\u4e00\u4e2aME\u91cf\u5b50\u94fe\u63a5\u4ed3\u6784\u6210. \u7136\u540e\u5728\u91cf\u5b50\u94fe\u63a5\u4ed3\u5185\u653e\u4e0a\u91cf\u5b50\u7ea0\u7f20\u5947\u70b9,\u8bb0\u5f97\u7528\u7ebf\u7f06\u7ed9\u91cf\u5b50\u73af\u4f9b\u7535\u5e76\u63d0\u4f9b\u9891\u9053(\u53ea\u6709\u91cf\u5b50\u4ed3\u4e0a\u4e0b\u5de6\u53f3\u90a3\u56db\u4e2a\u5757\u80fd\u63d0\u4f9b\u9891\u9053,\u91cf\u5b50\u73af\u672c\u8eab\u4e0d\u5360\u7528\u9891\u9053). \u6bcf\u5bf9\u91cf\u5b50\u6865\u6d88\u80171000EU/t.%n%n\u91cf\u5b50\u6865\u53ef\u4ee5\u4f20\u8f93\u80fd\u91cf,\u4f46\u672a\u94fe\u63a5\u7684\u91cf\u5b50\u73af\u9700\u8981\u4f9b\u80fd\u624d\u53ef\u4ee5\u542f\u52a8,\u6240\u4ee5\u5b89\u88c5\u65f6\u9700\u8981\u643a\u5e26\u80fd\u6e90\u5143\u4ef6. \u8bf7\u8bb0\u4f4f,\u91cf\u5b50\u6865\u8fde\u63a5\u7684\u7f51\u7edc\u8fd8\u662f\u540c\u4e00\u4e2a\u7f51\u7edc,\u6240\u4ee5\u53ea\u80fd\u6709\u4e00\u4e2a\u63a7\u5236\u5668,\u540c\u65f6\u5b83\u80fd\u591f\u4f20\u8f93\u7684\u9891\u9053\u4e5f\u7531\u4f60\u8fde\u63a5\u7684\u7ebf\u7f06\u51b3\u5b9a,\u6240\u4ee5\u4f7f\u7528P2P\u901a\u9053\u4ee5\u4f20\u8f93\u66f4\u591a\u9891\u9053\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9.%n%n\u8981\u662f\u4f60\u6709\u4e0d\u6b62\u4e00\u5bf9\u91cf\u5b50\u6865,\u547d\u540d\u91cf\u5b50\u7ea0\u7f20\u5947\u70b9\u4ee5\u8fdb\u884c\u533a\u5206\u5427."
                },
                {
                    "name": "ME\u91cf\u5b50\u5b58\u50a8\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/466.png",
                    "x": 828.0,
                    "y": 156.0,
                    "tooltip": "ME\u91cf\u5b50\u5b58\u50a8\u5143\u4ef6",
                    "data": "\u4f60\u73b0\u5728\u80fd\u591f\u5c06\u91cf\u5b50\u7bb1\u901a\u8fc7\u5b58\u50a8\u603b\u7ebf\u8fde\u63a5\u5230ME\u7cfb\u7edf,\u800c\u4e14\u6216\u8bb8\u4f60\u5df2\u7ecf\u8fd9\u4e48\u505a\u4e86.\u4e0d\u8fc7\u4e3a\u4f55\u4e0d\u4f7f\u7528\u65b0\u7684\u79d1\u6280\u6765\u505a\u4e00\u4e2a\u91cf\u5b50\u5b58\u50a8\u5143\u4ef6\u5462?%n%n\u5b83\u53ea\u652f\u6301\u4e00\u4e2a\u7269\u54c1\u79cd\u7c7b,\u4f46\u53ef\u4ee5\u50a8\u5b58\u8d85\u8fc7\u5341\u4ebf\u4e2a\u7269\u54c1!\u8fd9\u4e00\u5b9a\u5f88\u591f\u7528,\u5bf9\u5427?\u5bf9--\u5427--?"
                },
                {
                    "name": "\u914d\u65b9\u6a21\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1327.png",
                    "x": 228.0,
                    "y": 12.0,
                    "tooltip": "\u914d\u65b9\u6a21\u677f",
                    "data": "\u4e00\u4e2a\u7a7a\u767d\u7684\u6a21\u677f,\u53ea\u8981\u901a\u8fc7\u6837\u677f\u7ec8\u7aef\u8fdb\u884c\u7f16\u7801,\u5c31\u53ef\u4ee5\u653e\u5165\u5206\u5b50\u88c5\u914d\u5ba4\u6216\u8005ME\u63a5\u53e3\u4e2d,\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5408\u6210\u6216\u8005\u8c03\u7528\u5916\u90e8\u673a\u5668\u8fdb\u884c\u751f\u4ea7."
                },
                {
                    "name": "\u57fa\u4e8e\u50a8\u91cf\u7684\u7ea2\u77f3\u4fe1\u53f7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2523.png",
                    "x": 300.0,
                    "y": 120.0,
                    "tooltip": "\u57fa\u4e8e\u50a8\u91cf\u7684\u7ea2\u77f3\u4fe1\u53f7",
                    "data": "\u8fd9\u79cd\u8bbe\u5907\u4f1a\u6839\u636eME\u7f51\u7edc\u4e2d\u7684\u6307\u5b9a\u7269\u54c1\u6570\u91cf(\u6216\u80fd\u91cf)\u53d1\u51fa(\u6216\u4e0d\u53d1\u51fa)\u7ea2\u77f3\u4fe1\u53f7. \u53f3\u952e\u6253\u5f00GUI,\u5728\u7a7a\u4f4d\u5904\u6807\u8bb0\u7269\u54c1\u5e76\u8bbe\u7f6e\u6570\u91cf,\u518d\u6b21\u5355\u51fb\u53d6\u6d88\u8bbe\u7f6e."
                },
                {
                    "name": "\u57fa\u7840AE\u7cfb\u7edf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2753.png",
                    "x": 264.0,
                    "y": 192.0,
                    "tooltip": "\u57fa\u7840AE\u7cfb\u7edf",
                    "data": "\u73b0\u5728\u4f60\u89e3\u9501\u4e86AE2,\u4f46\u4e0d\u77e5\u9053\u600e\u4e48\u7528? \u522b\u62c5\u5fc3,\u8fd9\u4e2a\u4efb\u52a1\u7ebf\u5c31\u662f\u6559\u4f60\u600e\u4e48\u7528AE\u7684. \u5236\u4f5c\u53f3\u4fa7\u7684\u7269\u54c1,\u4f60\u5c31\u80fd\u642d\u5efa\u4e00\u4e2a\u57fa\u7840\u7684AE\u7cfb\u7edf(\u5e76\u975e\u5b8c\u5168\u6ca1\u6709\u7528). \u5728\u5b8c\u6210\u4efb\u52a1\u540e,\u4f60\u5c31\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u5b83\u4eec\u4e86.%n%n\u7406\u8bba\u4e0a\u4f60\u53ef\u4ee5\u505a\u4e2aME\u7bb1\u5b50,\u4f46\u5b83\u4e0e\u666e\u901a\u7bb1\u5b50\u5176\u5b9e\u533a\u522b\u4e0d\u5927.%n%n\u5c06\u7535\u6e90\u63a5\u5230\u80fd\u6e90\u63a5\u6536\u5668,\u5e76\u5c06ME\u9a71\u52a8\u5668\u7d27\u8d34\u5b83\u653e\u7f6e,\u5728\u5176\u4e0a\u65b9\u653e\u7f6eME\u73bb\u7483\u7ebf\u7f06\u7528\u4e8e\u8fde\u63a5ME\u7ec8\u7aef. \u6700\u540e\u653e\u5165\u5b58\u50a8\u5143\u4ef6,\u5c31\u5927\u529f\u544a\u6210\u4e86! \u522b\u5fd8\u4e86\u7f51\u7edc\u5de5\u5177,\u5b83\u80fd\u8ba9\u4f60\u62c6\u5378\u66f4\u65b9\u4fbf,\u540c\u65f6\u53ef\u4ee5\u67e5\u770b\u7f51\u7edc\u7684\u8017\u7535\u60c5\u51b5(\u5185\u90e8\u8fd8\u80fd\u653e9\u683c\u5361\u7247).%n%n\u4e3a\u4e86\u8282\u80fd,\u6211\u4eec\u9700\u8981\u505a\u4e9b\u989d\u5916\u5de5\u4f5c. \u5728ME\u7ec8\u7aef\u524d\u65b92\u683c\u653e\u7f6e\u4e00\u5757\u538b\u529b\u677f,\u5728\u538b\u529b\u677f\u4e0e\u80fd\u6e90\u63a5\u6536\u5668\u4e4b\u95f4\u653e\u4e0a\u7ea2\u77f3. \u62c6\u9664\u80fd\u6e90\u63a5\u6536\u5668\u5e76\u653e\u4e0aME\u73bb\u7483\u7ebf\u7f06,\u7136\u540e\u5728\u9a71\u52a8\u5668\u548c\u80fd\u6e90\u63a5\u6536\u5668\u9884\u8ba1\u4f4d\u7f6e\u4e4b\u95f4\u88c5\u4e0aME\u89e6\u53d1\u603b\u7ebf. \u6700\u540e\u91cd\u65b0\u63a5\u4e0a\u7535\u6e90. \u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5f53\u4f60\u7ad9\u5728\u7ec8\u7aef\u524d\u65f6,ME\u7f51\u7edc\u624d\u4f1a\u63a5\u5165\u7535\u6e90. \u8fd9\u4e2a\u5fae\u578b\u7f51\u7edc\u672c\u8eab\u8017\u7535\u7ea638EU,\u77e5\u9053AE\u7f51\u7edc\u4e0d\u4fbf\u5b9c\u4e86\u5427,\u4e0d\u7ba1\u662f\u6750\u6599\u8fd8\u662f\u8017\u7535..."
                },
                {
                    "name": "\u81ea\u52a8\u5408\u62103",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2755.png",
                    "x": 396.0,
                    "y": 228.0,
                    "tooltip": "\u81ea\u52a8\u5408\u62103",
                    "data": "\u8fd9\u662fAE\u7684\u6838\u5fc3\u529f\u80fd,\u8ba9\u6211\u4eec\u5f00\u59cb\u5427. \u88c5\u597d\u5408\u6210\u5b58\u50a8\u5668\u548c\u5206\u5b50\u88c5\u914d\u5ba4\u4ee5\u53ca\u6837\u677f\u7ec8\u7aef,\u7136\u540e\u5728\u5206\u5b50\u88c5\u914d\u5ba4\u8d34\u4e0aME\u63a5\u53e3(\u5982\u679c\u63a5\u53e3\u662f\u9762\u677f\u5f62\u6001,\u8bf7\u786e\u4fdd\u5206\u5b50\u88c5\u914d\u5ba4\u53e6\u4e00\u4fa7\u6709\u4f9b\u80fd,\u5f53\u7136\u7edd\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6211\u4eec\u5728\u8fd9\u91cc\u90fd\u4f1a\u4f7f\u7528\u65b9\u5757\u5f62\u6001\u7684\u63a5\u53e3). \u5982\u679c\u4e0d\u914d\u5408ME\u63a5\u53e3\u4f7f\u7528,\u5206\u5b50\u88c5\u914d\u5ba4\u5185\u90e8\u53ea\u6709\u4e00\u4e2a\u5b58\u50a8\u6837\u677f\u7684\u7a7a\u95f4. \u5c06\u7a7a\u767d\u6837\u677f\u653e\u5165\u6837\u677f\u7ec8\u7aef,\u7136\u540e\u5728\u5408\u6210\u680f\u7f16\u5199\u6837\u677f,\u6700\u540e\u70b9\u51fb\u7bad\u5934\u5b58\u50a8. \u5c06\u7f16\u5199\u597d\u7684\u6837\u677f\u653e\u5165ME\u63a5\u53e3\u540e,\u4f60\u5c31\u53ef\u4ee5\u5728\u7ec8\u7aef\u76f4\u63a5\u4e0b\u5355\u5408\u6210\u4e86.%n%n\u81f3\u4e8e\u52a0\u5de5\u6837\u677f(\u673a\u5668\u6216\u662f\u5176\u4ed6\u4e0d\u540c\u4e8e\u4f20\u7edf3x3\u5408\u6210),\u9700\u8981\u70b9\u51fb\u53f3\u4fa7\u7684\u6309\u94ae\u5207\u6362. \u4e14\u9700\u8981\u540c\u65f6\u6807\u8bb0\u539f\u6599\u4e0e\u4ea7\u7269. \u6bd4\u5982,\u53ef\u4ee5\u5c06ME\u63a5\u53e3\u8d34\u5230\u7194\u7089\u4e0a,\u7ed3\u5408ME\u8f93\u5165\u603b\u7ebf\u7528\u4e8e\u5c06\u4ea7\u7269\u9001\u56deME\u7f51\u7edc. \u5982\u679c\u662f\u80fd\u591f\u81ea\u52a8\u8f93\u51fa\u7684\u673a\u5668(\u6bd4\u5982\u591a\u65b9\u5757\u673a\u5668),\u53ea\u9700\u8981\u5728\u8f93\u51fa\u53e3\u8d34\u4e0aME\u63a5\u53e3\u5373\u53ef(\u8fd9\u6837\u66f4\u5feb\u4e14\u8fd8\u6ca1\u6709\u4ec0\u4e48\u5ef6\u8fdf)."
                },
                {
                    "name": "\u5916\u90e8\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2754.png",
                    "x": 12.0,
                    "y": 84.0,
                    "tooltip": "\u5916\u90e8\u5b58\u50a8",
                    "data": "\u62bd\u5c49\u975e\u5e38\u597d\u7528,\u5bf9\u5427? \u5c06\u62bd\u5c49\u9635\u5217\u63a5\u5165\u4f60\u7684ME\u7f51\u7edc\u5427. \u5728\u62bd\u5c49\u7ba1\u7406\u5668\u5468\u56f4\u653e\u4e00\u4e9b\u62bd\u5c49,\u7136\u540e\u5c06ME\u5b58\u50a8\u603b\u7ebf\u8d34\u5230\u62bd\u5c49\u7ba1\u7406\u5668\u4e0a\u5e76\u5c06\u4f18\u5148\u7ea7\u8c03\u9ad8,\u8fd9\u5c06\u4f7f\u7f51\u7edc\u4f18\u5148\u5904\u7406\u62bd\u5c49\u9635\u5217\u7684\u8f93\u5165/\u8f93\u51fa. \u522b\u5fd8\u4e86\u5728\u771f\u6b63\u8054\u7f51\u524d\u7ed9\u4f60\u7684\u62bd\u5c49\u4e0a\u9501,\u4e0d\u7136\u5b83\u4eec\u4f1a\u88ab\u4e71\u4e03\u516b\u7cdf\u7684\u4e1c\u897f\u585e\u6ee1\u7684. \u6bcf\u6837\u4e1c\u897f\u90fd\u6709\u5b83\u7684\u53bb\u5904\u4e86! \u91c7\u77ff\u51fa\u6765\u7684\u5927\u91cf\u7c89\u3001\u6216\u662f\u5176\u4ed6\u6210\u5343\u4e0a\u4e07\u7684\u4e1c\u897f\u5c31\u6807\u8bb0\u5728\u62bd\u5c49\u9635\u5217,\u96f6\u96f6\u788e\u788e\u7684\u4e1c\u897f\u5b58\u50a8\u5728\u5143\u4ef6\u4e2d.%n%n\u7528\u540c\u6837\u7684\u65b9\u6cd5,\u4f60\u53ef\u4ee5\u5c06\u7bb1\u5b50\u6216\u662f\u5176\u4ed6\u5bb9\u5668\u8fde\u5165\u7f51\u7edc. \u7528\u672b\u5f71\u7bb1\u5b50\u5c06\u7269\u54c1\u4f20\u56de\u57fa\u5730,\u8fdb\u5165ME\u7f51\u7edc,\u4f46\u8fd9\u6837\u7f51\u7edc\u4e2d\u5c31\u4f1a\u4e0d\u505c\u5f97\u6709\u4e1c\u897f\u8fdb\u51fa,\u6270\u4e71\u7ec8\u7aef\u5185\u7684\u6392\u5217. \u8fd9\u4e00\u70b9\u53ef\u4ee5\u901a\u8fc7\u663e\u793a\u5143\u4ef6\u89e3\u51b3,\u5b83\u80fd\u8fc7\u6ee4\u7ec8\u7aef\u4e2d\u663e\u793a\u7684\u7269\u54c1; \u5f53\u7136\u4e5f\u53ef\u4ee5\u8ba9\u5b83\u4eec\u8fdb\u5165\u4e00\u4e2a\u5b50\u7f51\u7edc\u6216\u662f\u76f4\u63a5\u5904\u7406\u6389. \u603b\u4e4b,\u53d1\u6325\u4f60\u7684\u60f3\u8c61\u529b,\u5c3d\u60c5\u5c1d\u8bd5\u65b0\u73a9\u6cd5\u5427!%n%n\u5728\u62bd\u5c49\u7ba1\u7406\u5668\u4e0a\u4f7f\u7528\u5927\u91cf\u7684\u8f93\u5165/\u8f93\u51fa\u8bbe\u5907\u5c06\u4f1a\u4e25\u91cd\u5f71\u54cdTPS! \u5982\u679c\u4f60\u5728\u516c\u5171\u670d\u52a1\u5668\u4e0a,\u8bf7\u52ff\u4f7f\u7528\u62bd\u5c49\u9635\u5217,\u5426\u5219\u4f60\u7684\u62bd\u5c49\u9635\u5217\u53ef\u80fd\u4f1a\u88ab\u5220\u9664,\u800c\u4f60\u4f1a\u88ab\u5c01\u7981."
                },
                {
                    "name": "P2P",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2756.png",
                    "x": 120.0,
                    "y": 84.0,
                    "tooltip": "P2P",
                    "data": "AE\u8f83\u590d\u6742\u7684\u90e8\u5206\u4e4b\u4e00,\u5728\u4e86\u89e3\u5e76\u719f\u7ec3\u638c\u63e1\u4e86P2P\u4e4b\u540e,\u4f60\u5c31\u53ef\u4ee5\u8bf4\u662f\u57fa\u672c\u638c\u63e1\u4e86\u8fd9\u4e2amod. \u9996\u5148,\u628a\u4f60\u7684\u80fd\u6e90\u63a5\u6536\u5668\u6362\u6210ME\u63a7\u5236\u5668. \u5b83\u80fd\u591f\u63d0\u4f9b\u66f4\u591a\u53ef\u7528\u7684\u9891\u9053. \u5c06P2P\u901a\u9053\u8d34\u5230\u63a7\u5236\u5668\u7684\u4e00\u9762\u4e0a,\u7136\u540e\u7528\u7ebf\u7f06\u8fde\u63a5\u5230\u8fdc\u5904. \u8bf7\u786e\u4fdd\u8fd9\u6761\u7ebf\u7f06\u5185\u6709\u80fd\u91cf(\u80fd\u6e90\u63a5\u6536\u5668\u6216\u662f\u77f3\u82f1\u7ea4\u7ef4\u8fde\u5230\u4e3b\u7f51\u7edc),\u4f46\u4e0d\u662f\u666e\u901a\u7ebf\u7f06,\u9700\u8981\u5c06\u5176\u4e0e\u4e3b\u7f51\u7edc\u9891\u9053\u9694\u79bb(\u8bd1\u8005\u6ce8: \u5176\u5b9e\u4e0d\u9694\u79bb\u4e5f\u95ee\u9898\u4e0d\u5927,\u53ea\u662f\u8981\u8bb0\u5f97P2P\u4e0d\u80fd\u5d4c\u5957\u5c31\u884c\u4e86,\u6240\u4ee5\u8fd8\u662f\u8fd9\u6837\u7528\u8d77\u6765\u66f4\u4e0d\u5bb9\u6613\u6df7). \u5728\u8fd9\u6761\u7ebf\u7f06\u7684\u53e6\u4e00\u7aef\u8fde\u63a5\u4e0a\u53e6\u4e00\u4e2aP2P\u901a\u9053,\u5e76\u5728\u5b83\u7684\u51fa\u53e3\u5904\u81f3\u5c11\u653e\u4e0a\u4e00\u4e2a\u81f4\u5bc6\u7ebf\u7f06. \u624b\u6301\u5185\u5b58\u5361Shift+\u53f3\u952e\u7b2c\u4e00\u4e2aP2P\u901a\u9053,\u7136\u540e\u518d\u53f3\u952e\u7b2c\u4e8c\u4e2aP2P\u901a\u9053. \u8fd9\u6837\u5c31\u53ef\u4ee5\u5c06\u4e24\u8005\u94fe\u63a5,\u5b50\u7f51\u7edc\u76842\u4e2a\u9891\u9053\u5c31\u53ef\u4ee5\u4f20\u8f93\u4e3b\u7f51\u7edc\u768432\u4e2a\u9891\u9053\u4e86(\u63a7\u5236\u5668\u7684\u6bcf\u4e2a\u9762\u4e5f\u662f32\u4e2a\u9891\u9053). \u5bf9\u6bcf\u4e2a\u6ca1\u6709\u63a7\u5236\u5668\u7684\u5b50\u7f51\u7edc(\u51718\u4e2a\u9891\u9053),\u53ef\u4ee5\u5b89\u88c5\u56db\u5bf9P2P\u901a\u9053,\u4f20\u8f93\u6700\u591a128\u4e2a\u9891\u9053. \u8fd9\u4e0b\u4f60\u77e5\u9053\u8fd9\u73a9\u610f\u591a\u4e48\u6709\u7528\u4e86\u5427!%n%nAE2\u8fd8\u6709\u8bb8\u591a\u6709\u8da3\u4e14\u6709\u7528\u7684\u73a9\u6cd5,\u591a\u5c1d\u8bd5,\u9605\u8bfb\u4efb\u52a1\u4e66,\u770b\u6559\u7a0b\u89c6\u9891\u7b49\u7b49\u90fd\u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u4f7f\u7528AE\u7f51\u7edc.%n%n\u53e6\u5916,Extra-Cell-2\u5728\u6d41\u4f53\u65b9\u9762\u6709\u4e00\u5806bug,\u80fd\u4e0d\u7528\u5c31\u4e0d\u7528\u5427...%n%n\u4efb\u52a1\u4e66\u4f5c\u8005\u5f88\u9057\u61be :(%n\u8bd1\u8005\u6ce8:AE2FC,\u771f\u6b63\u7684\u795e! :)"
                },
                {
                    "name": "\u4e00\u4e2a\u5947\u70b9\u610f\u5473\u7740...(Singular Singularities Signify Something)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2535.png",
                    "x": 336.0,
                    "y": 300.0,
                    "tooltip": "\u4e00\u4e2a\u5947\u70b9\u610f\u5473\u7740...(Singular Singularities Signify Something)",
                    "data": "\u6709\u65f6\u5f88\u96be\u627e\u5230\u4efb\u52a1\u540d\u79f0,\u5bf9\u5427? \u60f3\u8981\u5236\u4f5c\u4e00\u4e2a\u5947\u70b9(\u7528\u4e8e\u91cf\u5b50\u6865),\u4f60\u9700\u8981\u5411\u8bbe\u7f6e\u4e3a\u5947\u70b9\u6a21\u5f0f\u7684\u7269\u8d28\u805a\u5408\u5668\u6295\u5165512,000\u4e2a\u7269\u54c1,\u540c\u65f6\u7269\u8d28\u805a\u5408\u5668\u5185\u8fd8\u9700\u8981\u6709\u4e00\u4e2aME-64K\u7269\u54c1\u5b58\u50a8\u7ec4\u4ef6(\u6216\u66f4\u9ad8\u7ea7).%n%n\u7136\u540e\u5c06\u83b7\u5f97\u7684\u5947\u70b9\u4e0e\u672b\u5f71\u73cd\u73e0\u7c89\u4e00\u8d77\u653e\u5728\u5730\u4e0a,\u4f7f\u7528\u7206\u70b8\u7269(\u8ff7\u4f60TNT\u5c31\u4e0d\u9519)\u5c06\u5b83\u4eec\u538b\u7f29\u5373\u53ef\u83b7\u5f97\u4e00\u5bf9\u91cf\u5b50\u7ea0\u7f20\u5947\u70b9.%n%n\u6bcf\u4e2a\u91cf\u5b50\u7ea0\u7f20\u5947\u70b9\u90fd\u662f\u552f\u4e00\u914d\u5bf9\u7684."
                },
                {
                    "name": "\u667a\u80fd\u7ebf\u7f06",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2119.png",
                    "x": 264.0,
                    "y": 120.0,
                    "tooltip": "\u667a\u80fd\u7ebf\u7f06",
                    "data": "\u667a\u80fd\u7ebf\u7f06\u6bd4\u73bb\u7483\u7ebf\u7f06\u6216\u5305\u5c42\u7ebf\u7f06\u66f4\u597d,\u56e0\u4e3a\u53ef\u4ee5\u76f4\u63a5\u770b\u5230\u5728\u7528\u9891\u9053\u6570."
                },
                {
                    "name": "\u628a\u7ec4\u4ef6\u653e\u8fdb\u53bb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1310.png",
                    "x": 396.0,
                    "y": 120.0,
                    "tooltip": "\u628a\u7ec4\u4ef6\u653e\u8fdb\u53bb",
                    "data": "\u4e00\u4e2a\u7a7a\u7684\u5b58\u50a8\u5916\u58f3,\u53ef\u4ee5\u653e\u5165\u4efb\u4f55\u7684\u5b58\u50a8\u7ec4\u4ef6\u6765\u5236\u9020\u4e00\u4e2a\u76f8\u5e94\u5927\u5c0f\u53ef\u7528\u7684\u5b58\u50a8\u5143\u4ef6.%n%n\u4f60\u8fd8\u53ef\u4ee5\u76f4\u63a5\u5408\u6210\u51fa\u5b58\u50a8\u5143\u4ef6,\u4ece\u800c\u8df3\u8fc7\u8fd9\u4e00\u6b65."
                },
                {
                    "name": "\u52a0\u901f\u6210\u957f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1294.png",
                    "x": 228.0,
                    "y": 192.0,
                    "tooltip": "\u52a0\u901f\u6210\u957f",
                    "data": "\u8fd9\u4e2a\u8bbe\u5907\u53ef\u4ee5\u52a0\u901f\u5404\u79cd\u6c34\u6676\u79cd\u5b50\u7684\u6210\u957f\u901f\u5ea6. \u6676\u4f53\u50ac\u751f\u5668\u5fc5\u987b\u4ece\u9876\u90e8\u6216\u8005\u5e95\u90e8\u901a\u8fc7ME\u7f51\u7edc\u8fdb\u884c\u4f9b\u7535,\u5de5\u4f5c\u7684\u60c5\u51b5\u4e0b\u6d88\u80178AE/t\u7684\u80fd\u91cf. \u6c34\u6676\u79cd\u5b50\u5fc5\u987b\u6d78\u6ce1\u5728\u76f8\u90bb\u7684\u6c34\u4e2d,\u5f53\u6676\u4f53\u53d7\u5230\u50ac\u751f\u5668\u7684\u5f71\u54cd\u65f6\u4f1a\u53d1\u5149.\u53ea\u80fd\u8fde\u63a5\u5230\u7ebf\u7f06\u4e0a\u6216\u5176\u4ed6\u673a\u5668\u7684\u9876\u90e8\u548c\u5e95\u90e8. \u8fd9\u53f0\u673a\u5668\u4e0d\u9700\u8981\u9891\u9053."
                },
                {
                    "name": "\u6625\u5b63\u5927\u626b\u9664",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2530.png",
                    "x": 300.0,
                    "y": 192.0,
                    "tooltip": "\u6625\u5b63\u5927\u626b\u9664",
                    "data": "\u5f53\u4f60\u7b2c\u4e00\u6b21\u642d\u51faAE\u7f51\u7edc,\u4f60\u4e00\u5b9a\u54111K-ME\u5b58\u50a8\u5143\u4ef6\u91cc\u5934\u6254\u4e86\u4e00\u5806\u4e1c\u897f,\u73b0\u5728\u4f60\u9700\u8981\u6e05\u7a7a\u5b83\u4eec\u7528\u4e8e\u5408\u6210\u66f4\u9ad8\u7ea7\u7684\u5b58\u50a8\u5143\u4ef6. ME-IO\u7aef\u53e3\u53ef\u4ee5\u7528\u4e8e\u88c5\u6ee1\u6216\u8005\u6e05\u7a7a\u4f60\u7684\u5143\u4ef6.%n%n\u4f60\u8fd8\u53ef\u4ee5\u7528\u5143\u4ef6\u5de5\u4f5c\u53f0\u914d\u7f6e\u4f60\u7684\u5143\u4ef6,\u8fd9\u6837\u5b83\u4eec\u5c31\u53ea\u4f1a\u5b58\u50a8\u4f60\u6307\u5b9a\u7684\u7269\u54c1\u4e86. \u4e0d\u8fc7\u522b\u5fd8\u4e86,\u7269\u54c1\u79cd\u7c7b\u7684\u589e\u591a\u610f\u5473\u7740\u603b\u4f53\u7a7a\u95f4\u7684\u7f29\u5c0f. \u6bd4\u5982,\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5143\u4ef6\u53ea\u5b58\u50a8\u9752\u91d1\u77f3,\u7136\u540e\u5c06\u5176\u653e\u5165ME-IO\u7aef\u53e3\u4ece\u7f51\u7edc\u4e2d\u586b\u5145,\u8fd9\u6837\u6b64\u5143\u4ef6\u5c31\u53ea\u4f1a\u5b58\u50a8\u9752\u91d1\u77f3\u4e86. \u76f8\u4fe1\u4f60\u4ee5\u524d\u4e00\u76f4\u7528\u62bd\u5c49\u6765\u5b58\u50a8\u5de8\u91cf\u7269\u54c1,\u8bb0\u5f97\u63a7\u5236\u597d\u4f18\u5148\u7ea7,\u522b\u8ba9\u7269\u54c1\u65e2\u8fdb\u5165\u4e86\u62bd\u5c49\u53c8\u5728\u7f51\u7edc\u4e2d\u5360\u7528\u7c7b\u578b! \u5982\u679c\u4f60\u60f3\u628a\u62bd\u5c49\u91cc\u7684\u5bb6\u5f53\u6253\u5305\u5e26\u8d70,\u653e\u5165\u4e00\u4e2a\u65b0\u5143\u4ef6,\u5012\u7a7a\u8001\u5143\u4ef6,\u6216\u8005\u6682\u65f6\u5207\u65ad\u4f60\u7684\u62bd\u5c49\u7cfb\u7edf\u4e0e\u7f51\u7edc\u7684\u8fde\u63a5.%n%n\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6\u4e00\u6837\u53ef\u4ee5\u7528\u5143\u4ef6\u5de5\u4f5c\u53f0\u914d\u7f6e(\u4efb\u610f\u5305\u542b\u6d41\u4f53\u7684\u5bb9\u5668\u90fd\u53ef\u7528\u4e8e\u6807\u8bb0).%n%n\u5143\u4ef6\u5de5\u4f5c\u53f0\u4e0d\u5fc5\u8fde\u63a5\u5230\u7f51\u7edc\u4e5f\u4e0d\u9700\u8981\u9891\u9053."
                },
                {
                    "name": "Stocking Fluids",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6652765312740277196.png",
                    "x": 84.0,
                    "y": 84.0,
                    "tooltip": "Stocking Fluids",
                    "data": "Works like stocking input bus but for fluids.\n\n[note]You need only one to complete the quest.[/note]"
                },
                {
                    "name": "\u5728\u7f50\u5b50\u91cc\u5b58\u50a8\u6e90\u8d28? \u600e\u4e48\u8fd8\u6765?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2516.png",
                    "x": -24.0,
                    "y": 120.0,
                    "tooltip": "\u5728\u7f50\u5b50\u91cc\u5b58\u50a8\u6e90\u8d28? \u600e\u4e48\u8fd8\u6765?",
                    "data": "\u663e\u7136,\u5982\u679c\u4f60\u5c06\u8fd9\u4e2a\u8fde\u63a5\u5230\u865a\u7a7a\u7f50\u5b50/\u6cef\u706d\u4e4b\u7f50\u7136\u540e\u8bbe\u7f6e\u8f83\u4f4e\u7684\u4f18\u5148\u7ea7,\u5b83\u4eec\u5c31\u80fd\u81ea\u52a8\u9500\u6bc1\u6ea2\u51fa\u7684\u6e90\u8d28. \u5f88\u68d2\u5427?%n%n\u4ec0\u4e48? \u5c06\u6e90\u8d28\u91cd\u65b0\u5b58\u653e\u5728\u7f50\u5b50\u91cc? \u4f60\u786e\u5b9a? \u6211\u60f3\u4f60\u53ef\u4ee5...\u5982\u679c\u786e\u5b9e\u9700\u8981\u7684\u8bdd...\u6216\u8bb8\u53ef\u4ee5\u770b\u770b\u65b0\u7684\u66f4\u5927\u7684\u7f50\u5b50..."
                },
                {
                    "name": "\u5b58\u50a8\u4f60\u7684ME\u6570\u636e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1292.png",
                    "x": 300.0,
                    "y": 228.0,
                    "tooltip": "\u5b58\u50a8\u4f60\u7684ME\u6570\u636e",
                    "data": "\u8fd9\u4e2a\u65b9\u5757\u53ea\u6709\u4e00\u4e2a\u529f\u80fd,\u5c31\u662f\u52a0\u8f7d\u5b58\u50a8\u5143\u4ef6. ME\u9a71\u52a8\u5668\u6700\u5927\u53ef\u4ee5\u52a0\u8f7d10\u4e2a\u5b58\u50a8\u5355\u5143,\u6240\u4ee5\u4f60\u53ef\u4ee5\u628a\u5b58\u50a8\u7a7a\u95f4\u538b\u7f29\u5230\u4e00\u4e2a\u5f88\u5c0f\u7684\u7a7a\u95f4\u5185. ME\u9a71\u52a8\u5668\u524d\u65b9\u7684\u6307\u793a\u706f\u53ef\u4ee5\u663e\u793a\u76ee\u524d\u5b58\u50a8\u5355\u5143\u7684\u72b6\u6001.\u7ea2\u8272\u8868\u793a\u5b58\u50a8\u5355\u5143\u5df2\u7ecf\u6ee1\u4e86,\u6a59\u8272\u8868\u793a\u5b58\u50a8\u5355\u5143\u4e0d\u80fd\u5bb9\u7eb3\u66f4\u591a\u7c7b\u578b,\u4f46\u662f\u8fd8\u53ef\u4ee5\u5b58\u50a8\u4e00\u4e9b\u7269\u54c1.\u7eff\u8272\u8868\u793a\u5b58\u50a8\u5355\u5143\u7c7b\u578b\u548c\u6570\u91cf\u90fd\u6ca1\u6709\u6ee1.\u9ed1\u8272\u53ef\u80fd\u662f\u6ca1\u6709\u63d2\u5165\u5b58\u50a8\u5355\u5143,\u8981\u4e48\u5c31\u662f\u672a\u5411ME\u9a71\u52a8\u5668\u4f9b\u7535\u6216\u8005ME\u9a71\u52a8\u5668\u5904\u4e8e\u79bb\u7ebf\u72b6\u6001. \u6ce8\u610f\u5982\u679c\u6ca1\u6709ME\u7f51\u7edc,ME\u9a71\u52a8\u5668\u4ec0\u4e48\u90fd\u505a\u4e0d\u4e86.\u5b83\u9700\u8981ME\u7f51\u7edc\u4e2d\u6709\u8f93\u5165/\u8f93\u51fa\u8bbe\u5907. \u7a7a\u8f7d\u7684\u8bdd\u5b83\u9700\u89812AE/t\u7684\u80fd\u6e90\u9a71\u52a8,\u6bcf\u589e\u52a0\u4e00\u4e2a\u5b58\u50a8\u5355\u5143\u90fd\u4f1a\u989d\u5916\u589e\u52a0\u8017\u7535\u91cf. ME\u9a71\u52a8\u5668\u9700\u8981\u4e00\u4e2a\u9891\u9053\u6765\u8fd0\u884c."
                },
                {
                    "name": "\u8fd9\u53ef\u4e0d\u662f\u5b58\u50a8\u5143\u4ef6!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/374.png",
                    "x": 504.0,
                    "y": 120.0,
                    "tooltip": "\u8fd9\u53ef\u4e0d\u662f\u5b58\u50a8\u5143\u4ef6!",
                    "data": "\u5f53\u5fc3!\u4f7f\u7528\u65f6\u52a1\u5fc5\u4e07\u5206\u5c0f\u5fc3!\u8fd9\u4e2a\u5143\u4ef6\u7684\u529f\u80fd\u6b63\u5982\u5176\u540d\u5b57\u4e00\u6837:\u5b83\u4f1a\u5220\u9664\u4f60\u653e\u8fdb\u53bb\u7684\u4efb\u4f55\u4e1c\u897f.\u6240\u4ee5\u6700\u597d\u786e\u4fdd\u4f60\u80fd\u591f\u7cbe\u786e\u63a7\u5236\u54ea\u4e9b\u4e1c\u897f\u80fd\u8fdb\u5165\u8fd9\u4e2a\u5143\u4ef6\u91cc."
                },
                {
                    "name": "Thaumometric Essentia Cell",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5026883587627462782.png",
                    "x": 336.0,
                    "y": 156.0,
                    "tooltip": "Thaumometric Essentia Cell",
                    "data": "After meddling with the 4th Dimension, you've finally discovered a way to access its unlimited Essentia supply. The Thaumometric Essentia Cell is your tool for extracting Essentia from this boundless source\u2014think of it as your unlimited magic credit card.\n\nUnfortunately, you must filter each type of Essentia in your Essentia Cell Workbench. If only your technology were more advanced..."
                },
                {
                    "name": "\u6d41\u4f53\u7ec8\u7aef",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2518.png",
                    "x": 228.0,
                    "y": 48.0,
                    "tooltip": "\u6d41\u4f53\u7ec8\u7aef",
                    "data": "ME\u6d41\u4f53\u7ec8\u7aef\u4f7f\u4f60\u80fd\u76f4\u63a5\u901a\u8fc7\u6876\u3001\u5355\u5143\u6216\u8005\u5176\u4ed6\u5bb9\u5668\u8f93\u5165/\u8f93\u51fa\u7f51\u7edc\u4e2d\u7684\u6d41\u4f53. \u5728\u7ec8\u7aef\u7684\u5de6\u4e0b\u63d2\u69fd\u4e2d\u653e\u5165\u88c5\u6ee1\u7684\u5355\u5143\u6216\u8005\u5176\u4ed6\u7269\u54c1,\u5373\u53ef\u5c06\u5176\u5185\u7684\u6d41\u4f53\u9001\u5165\u7f51\u7edc\u4e2d,\u800c\u5355\u5143\u4f1a\u79fb\u52a8\u5230\u53f3\u4fa7\u7684\u8f93\u51fa\u63d2\u69fd. \u4e0e\u4e4b\u76f8\u5bf9\u7684,\u5728\u7ec8\u7aef\u5185\u9009\u62e9\u4e00\u79cd\u6d41\u4f53\u7136\u540e\u5728\u5de6\u4fa7\u653e\u5165\u7a7a\u5355\u5143,\u5b83\u4f1a\u88c5\u6ee1\u8fd9\u79cd\u6d41\u4f53,\u79fb\u52a8\u5230\u8f93\u51fa\u69fd."
                },
                {
                    "name": "\u8fde\u63a5P2P\u901a\u9053",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1331.png",
                    "x": 120.0,
                    "y": 120.0,
                    "tooltip": "\u8fde\u63a5P2P\u901a\u9053",
                    "data": "\u4e00\u4e2a\u53ef\u4ee5\u5b58\u50a8\u3001\u590d\u5236\u3001\u7c98\u8d34\u7f51\u7edc\u914d\u7f6e\u7684\u5c0f\u5de5\u5177. \u6309\u4f4fSHIFT\u53f3\u51fbME\u7f51\u7edc\u8bbe\u5907\u53ef\u4ee5\u5c06\u76ee\u6807\u7f51\u7edc\u8bbe\u5907\u7684\u914d\u7f6e\u590d\u5236\u5230\u5185\u5b58\u5361\u4e2d,\u5bf9\u7740\u5176\u4ed6\u540c\u7c7b\u578b\u7684\u8bbe\u5907\u70b9\u51fb\u53f3\u952e\u53ef\u4ee5\u5c06\u590d\u5236\u597d\u7684\u914d\u7f6e\u6587\u4ef6\u7c98\u8d34\u5230\u8bbe\u5907\u4e2d. \u5bf9\u7740\u7a7a\u767d\u533a\u57df\u6309\u7740SHIFT\u53f3\u952e\u53ef\u4ee5\u6e05\u9664\u5185\u5b58\u5361\u4e2d\u7684\u4fe1\u606f. \u5185\u5b58\u5361\u662f\u8fde\u63a5\u4e24\u4e2aP2P\u901a\u9053\u4e0d\u53ef\u6216\u7f3a\u7684\u5de5\u5177!"
                },
                {
                    "name": "\u5fc5\u5907\u5de5\u5177",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2537.png",
                    "x": 264.0,
                    "y": 228.0,
                    "tooltip": "\u5fc5\u5907\u5de5\u5177",
                    "data": "\u7f51\u7edc\u5de5\u5177\u662fAE2\u6700\u4e3b\u8981\u7684\u5b9e\u7528\u5de5\u5177.%n%n\u53f3\u952e\u7f51\u7edc\u4efb\u610f\u4e00\u5904\u53ef\u4ee5\u663e\u793a\u7f51\u7edc\u80fd\u8017,\u4ee5\u53ca\u6784\u6210\u7f51\u7edc\u7684\u6240\u6709\u8bbe\u5907.%n\u53f3\u952e\u7a7a\u6c14\u53ef\u4ee5\u663e\u793a\u81ea\u8eab\u7684GUI,\u5b58\u50a8\u5361\u7247\u6216\u8005\u5207\u6362\u4f2a\u88c5\u677f\u900f\u660e\u5ea6.%nShift+\u53f3\u952e\u62c6\u5378AE\u8bbe\u5907(\u8f93\u5165\u603b\u7ebf\u3001\u63a5\u53e3,\u7b49\u7b49),\u5728\u4e0d\u65ad\u5f00\u7ebf\u7f06\u7684\u60c5\u51b5\u4e0b\u62c6\u5378\u6307\u5b9a\u8bbe\u5907,\u540c\u65f6\u4e5f\u80fd\u7acb\u5373\u62c6\u5378AE\u7684\u5404\u79cd\u65b9\u5757.%n%n%n\u7f51\u7edc\u53ef\u89c6\u5316\u5de5\u5177,\u529f\u80fd\u4e0e\u5176\u63cf\u8ff0\u5b8c\u5168\u4e00\u81f4,\u53ef\u4ee5\u5f62\u8c61\u663e\u793a\u4f60\u7f51\u7edc\u4e2d\u7684\u9891\u9053. \u9996\u5148,\u53f3\u952e\u4e00\u4e2a\u7f51\u7edc\u4ee5\u5c06\u5176\u9009\u4e2d.\u4e00\u5f00\u59cb\u4f60\u4f1a\u770b\u5230\u6240\u6709\u4fe1\u606f,\u4f46\u4f60\u8fd8\u53ef\u4ee5\u6309\u4f4fShift\u5e76\u6eda\u52a8\u9f20\u6807\u6eda\u8f6e\u4ee5\u5207\u6362\u5404\u79cd\u6a21\u5f0f. \u8bf7\u8bb0\u4f4f,\u5982\u679c\u4f60\u7684\u7f51\u7edc\u4e2d\u8fd8\u6709\u5b50\u7f51\u7edc,\u6bd4\u5982\u7528\u4e8e\u4f20\u8f93P2P\u901a\u9053\u7684\u5b50\u7f51\u7edc,\u90a3\u4e9b\u5b50\u7f51\u8282\u70b9\u4e0d\u4f1a\u663e\u793a\u51fa\u6765,\u56e0\u4e3a\u90a3\u662f\u53e6\u4e00\u7f51\u7edc,\u4f46P2P\u901a\u9053\u7684\u51fa\u5165\u53e3\u4f1a\u6b63\u5e38\u663e\u793a. \u8fd9\u79cd\u663e\u793a\u53ef\u4ee5\u7a7f\u8fc7\u65b9\u5757\u6216\u5b9e\u4f53,\u56e0\u6b64\u4f60\u53ef\u4ee5\u501f\u6b64\u67e5\u770b\u6574\u4e2a\u57fa\u5730."
                },
                {
                    "name": "Ultimate Parallelization...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5839827992902048320.png",
                    "x": 48.0,
                    "y": 156.0,
                    "tooltip": "Ultimate Parallelization...",
                    "data": "Allows for parallelization of a single interface, you don't have to copy patterns for multiple interfaces anymore."
                },
                {
                    "name": "Universe in a Bottle",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4676551497712001940.png",
                    "x": 900.0,
                    "y": 156.0,
                    "tooltip": "Universe in a Bottle",
                    "data": "Those Digital Singularities, while offering a vast amount of space, felt constraining with their ability to store only one type of item... So you came up with something different this time. Having reached the peak of technology, you managed to create and contain an Artificial Universe within a Storage Cell. This allows you to store up to 63 different types of items without the universe collapsing in on itself."
                },
                {
                    "name": "\u53ef\u89c6\u5316\u4f60\u7684\u7269\u54c1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2522.png",
                    "x": 156.0,
                    "y": 84.0,
                    "tooltip": "\u53ef\u89c6\u5316\u4f60\u7684\u7269\u54c1",
                    "data": "ME\u5b58\u50a8\u76d1\u63a7\u5668\u4f7f\u4f60\u53ef\u4ee5\u76f4\u63a5\u770b\u5230ME\u7f51\u7edc\u4e2d\u67d0\u6837\u7269\u54c1\u7684\u6570\u91cf. \u6bd4\u5982\u5b83\u53ef\u4ee5\u544a\u8bc9\u4f60\u5e93\u5b58\u7684\u7535\u8def\u677f\u6570\u91cf\u4e0d\u8db3\u9700\u8981\u8865\u5145\u4e00\u4e9b,\u6216\u8005\u544a\u8bc9\u4f60\u4e00\u4e2a\u6f2b\u957f\u5408\u6210\u8ba2\u5355\u7684\u5904\u7406\u8fdb\u5ea6. \u6709\u51e0\u79cd\u4f7f\u7528\u65b9\u5f0f.%n%n\u624b\u6301\u7269\u54c1\u53f3\u952e: \u5982\u679c\u76d1\u63a7\u5668\u672a\u88ab\u9501\u5b9a,\u5c06\u663e\u793a\u8be5\u7269\u54c1\u7684\u5f53\u524d\u50a8\u91cf.%n\u7a7a\u624b\u53f3\u952e: \u5c06\u91cd\u7f6e\u672a\u88ab\u9501\u5b9a\u7684\u76d1\u63a7\u5668.%n\u624b\u6301AE2\u7684\u6273\u624b\u6216\u7f51\u7edc\u5de5\u5177\u53f3\u952e: \u5c06\u5207\u6362\u9501\u5b9a\u72b6\u6001.%n%n%nME\u4ea4\u6362\u76d1\u63a7\u5668\u662fME\u5b58\u50a8\u76d1\u63a7\u5668\u7684\u5347\u7ea7\u7248\u672c. \u5b83\u6dfb\u52a0\u4e86\u4e0e\u7f51\u7edc\u4ea4\u4e92\u7684\u529f\u80fd,\u5373\u5b58\u53d6\u7269\u54c1. \u5b83\u9664\u4e86\u6b63\u5e38\u7684\u4ea4\u4e92\u529f\u80fd\u5916,\u8fd8\u6709...%n%n\u624b\u6301\u7269\u54c1Shift+\u53f3\u952e: \u5c1d\u8bd5\u5c06\u4e00\u7ec4\u7269\u54c1\u5b58\u5165\u7f51\u7edc. \u5373\u4f7f\u4e0d\u5728\u76d1\u63a7\u5668\u4e0a\u663e\u793a\u7684\u7269\u54c1\u4e5f\u53ef\u4ee5\u6b63\u5e38\u5b58\u5165!%nShift+\u53cc\u51fb\u53f3\u952e: \u5c1d\u8bd5\u5c06\u6240\u6709\u663e\u793a\u7c7b\u578b\u7684\u7269\u54c1\u5b58\u5165\u7f51\u7edc.%n\u53f3\u952e(\u9501\u5b9a\u65f6): \u5c1d\u8bd5\u4ece\u7f51\u7edc\u4e2d\u53d6\u51fa\u663e\u793a\u7684\u7269\u54c1."
                },
                {
                    "name": "\u6211\u7f3a\u5c11\u6b3a\u9a97(Nebrisum)\u6e90\u8d28,\u8fd8\u662f\u5929\u542f(Terminus)?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2527.png",
                    "x": 120.0,
                    "y": 48.0,
                    "tooltip": "\u6211\u7f3a\u5c11\u6b3a\u9a97(Nebrisum)\u6e90\u8d28,\u8fd8\u662f\u5929\u542f(Terminus)?",
                    "data": "\u8fd9\u4e9b\u662f\u6e90\u8d28\u7248\u672c."
                },
                {
                    "name": "Waterproof Tech",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4618074744092982901.png",
                    "x": 84.0,
                    "y": 48.0,
                    "tooltip": "Waterproof Tech",
                    "data": "With the ability to bend spacetime at your will, you can prevent fluids and electronics from interacting.\n\nFluid containing patterns can be processed.\n\n[note]Otherwise it works like crafting input bus.[/note]"
                },
                {
                    "name": "\u4e3a\u4ec0\u4e48\u6211\u9700\u8981\u77e5\u9053\u6709\u591a\u5c11\u7caa\u6d46?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2524.png",
                    "x": 156.0,
                    "y": 48.0,
                    "tooltip": "\u4e3a\u4ec0\u4e48\u6211\u9700\u8981\u77e5\u9053\u6709\u591a\u5c11\u7caa\u6d46?",
                    "data": "\u8fd9\u4e9b\u662f\u6d41\u4f53\u7248\u672c."
                },
                {
                    "name": "\u65e0\u7ebf 2.0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2542.png",
                    "x": 192.0,
                    "y": 336.0,
                    "tooltip": "\u65e0\u7ebf 2.0",
                    "data": "\u8fd9\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u65e0\u7ebf\u7ec8\u7aef. \u5b83\u751a\u81f3\u80fd\u65e0\u7ebf\u5408\u6210. \u5f53\u4f60\u6253\u5f00\u5b83\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u6709\u70b9\u5ef6\u8fdf(\u5c24\u5176\u662f\u7b2c\u4e00\u6b21),\u4f46\u5b83\u5f88\u4fbf\u6377,\u503c\u5f97\u968f\u8eab\u643a\u5e26,\u5bf9\u5427? \u4f60\u4e0d\u80fd\u4ece\u8fd9\u4e2a\u7ec8\u7aef\u62bd\u51fa\u6d41\u4f53,\u4f46\u4f60\u53ef\u4ee5\u540c\u65f6\u5e26\u4e2a\u901a\u7528\u7ec8\u7aef...%n%n\u78c1\u573a\u589e\u5e45\u5361\u4f1a\u5c06\u6536\u96c6\u5230\u7684\u6389\u843d\u7269\u76f4\u63a5\u9001\u5165\u7f51\u7edc,\u800c\u4e0d\u662f\u7269\u54c1\u680f. \u624b\u6301\u78c1\u573a\u589e\u5e45\u5361\u53f3\u952e\u53ef\u4ee5\u6539\u53d8\u6536\u96c6\u7684\u767d\u540d\u5355/\u9ed1\u540d\u5355(white/blacklist),\u6309\u4f4fShift+\u53f3\u952e\u53ef\u4ee5\u5207\u6362\u6a21\u5f0f."
                },
                {
                    "name": "Wireless 2.5 - All in One",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7557382781858199589.png",
                    "x": 228.0,
                    "y": 336.0,
                    "tooltip": "Wireless 2.5 - All in One",
                    "data": "By combining various wireless terminals, you can create the ultimate 7-in-1 wireless terminal.\n\nYou can combine this with infinity booster card for unlimited range across all dimensions."
                },
                {
                    "name": "\u65e0\u7ebf 3.0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2543.png",
                    "x": 192.0,
                    "y": 372.0,
                    "tooltip": "\u65e0\u7ebf 3.0",
                    "data": "\u6b64\u5347\u7ea7\u53ef\u4ee5\u65e0\u9650\u62d3\u5c55\u4f60\u7684\u65e0\u7ebf\u8303\u56f4,\u751a\u81f3\u4e0d\u9700\u8981\u65e0\u7ebf\u8bbf\u95ee\u70b9! \u60f3\u8981\u5236\u4f5c\u5b83,\u4f60\u9700\u8981\u63d0\u4f9b\u65e0\u5c3d\u952d.%n%n\u9057\u61be\u7684\u662f,\u8fd9\u73a9\u610fbug\u5f88\u591a. \u603b\u662f\u83ab\u540d\u5176\u5999\u5730\u6d88\u5931\u6216\u8005\u6389\u51fa\u7ec8\u7aef.%n%n\u73b0\u5728\u5927\u90e8\u5206bug\u5df2\u7ecf\u4fee\u590d\u4e86.\u4e5f\u8bb8\u597d\u7528\u4e9b\u4e86?"
                },
                {
                    "name": "\u65e0\u7ebf\u4fe1\u53f7\u589e\u5e45\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1258.png",
                    "x": 264.0,
                    "y": 336.0,
                    "tooltip": "\u65e0\u7ebf\u4fe1\u53f7\u589e\u5e45\u5668",
                    "data": "\u65e0\u7ebf\u4fe1\u53f7\u589e\u5e45\u5668\u7528\u4e8e\u589e\u52a0\u65e0\u7ebf\u63a5\u5165\u70b9\u7684\u8986\u76d6\u8303\u56f4,\u6700\u5927\u5806\u53e0\u657064.%n%n*\u63d2\u5165\u8d8a\u591a,\u8017\u7535\u8d8a\u591a,\u5177\u4f53\u5982\u4e0b:%n%n0\u589e\u5e45\u5668%n\u8303\u56f4:16,80EU/t%n%n16\u589e\u5e45\u5668%n\u8303\u56f4:80,400EU/t%n%n32\u589e\u5e45\u5668%n\u8303\u56f4:197,1890EU/t%n%n48\u589e\u5e45\u5668%n\u8303\u56f4:348.5,8833EU/t%n%n64\u589e\u5e45\u5668%n\u8303\u56f4:528,41040EU/t%n%n\u8fd9\u91cc\u7684\u8303\u56f4\u503c\u4e3a\u534a\u5f84."
                },
                {
                    "name": "\u65e0\u7ebf\u7f51\u7edc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1298.png",
                    "x": 264.0,
                    "y": 300.0,
                    "tooltip": "\u65e0\u7ebf\u7f51\u7edc",
                    "data": "\u5b89\u5168\u7ec8\u7aef\u5141\u8bb8\u4f60\u914d\u7f6e\u591a\u4e2a\u73a9\u5bb6\u6743\u9650. \u5b89\u5168\u7ec8\u7aef\u65e0\u6cd5\u963b\u6b62\u7269\u7406\u4e0a\u7684\u7834\u574f,\u5b83\u53ea\u80fd\u63d0\u4f9b\u7f51\u7edc\u65b9\u9762\u7684\u5b89\u5168\u9632\u62a4. \u653e\u7f6eME\u5b89\u5168\u7ec8\u7aef\u7684\u73a9\u5bb6\u5bf9\u7f51\u7edc\u5177\u6709\u5b8c\u5168\u7684\u63a7\u5236\u6743,\u5e76\u4e14\u65e0\u6cd5\u53d6\u6d88\u81ea\u5df1\u7684\u6700\u9ad8\u6743\u9650.\u8be5\u73a9\u5bb6\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u4e00\u5f20\u7a7a\u767d\u7684\u751f\u7269\u8bc6\u522b\u5361\u6765\u4e3a\u6ca1\u6709\u6743\u9650\u7684\u73a9\u5bb6\u63d0\u4f9b\u4e00\u4e9b\u7279\u5b9a\u7684\u6743\u9650. \u9664\u4e86\u5b89\u5168\u6027,\u5b83\u8fd8\u53ef\u4ee5\u5c06\u65e0\u7ebf\u7ec8\u7aef\u548cME\u7f51\u7edc\u5173\u8054,\u5e76\u4e14\u8ba9\u65e0\u7ebf\u7ec8\u7aef\u53ef\u4ee5\u8bbf\u95eeME\u7f51\u7edc. \u65e0\u7ebf\u8bbf\u95ee\u7684\u8303\u56f4\u662f\u6839\u636e\u5b89\u88c5\u5230ME\u65e0\u7ebf\u63a5\u5165\u70b9\u7684\u65e0\u7ebf\u4fe1\u53f7\u589e\u5e45\u5668\u6570\u91cf\u51b3\u5b9a\u7684. \u4e00\u4e2aME\u7f51\u7edc\u53ef\u4ee5\u6709\u4efb\u610f\u6570\u91cf\u7684ME\u65e0\u7ebf\u63a5\u5165\u70b9,\u6bcf\u4e2a\u63a5\u5165\u70b9\u53ef\u4ee5\u914d\u7f6e\u4efb\u610f\u6570\u91cf\u7684\u4fe1\u53f7\u589e\u5e45\u5668.\u8fd9\u6837\u4f60\u53ef\u4ee5\u6539\u53d8\u548c\u4f18\u5316\u6574\u4e2aME\u65e0\u7ebf\u7f51\u7edc\u7684\u7535\u529b\u6d88\u8017\u548c\u8986\u76d6\u8303\u56f4. \u6bcf\u4e00\u4e2a\u63a5\u5165\u70b9\u90fd\u9700\u8981\u4e00\u4e2a\u901a\u9053\u6765\u8fd0\u884c."
                },
                {
                    "name": "...with Fluid Support!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4762456525753574104.png",
                    "x": 12.0,
                    "y": 156.0,
                    "tooltip": "...with Fluid Support!",
                    "data": "Now with fluid support!"
                },
                {
                    "name": "Yet Another Singularity?!?!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7143266453897023303.png",
                    "x": 864.0,
                    "y": 192.0,
                    "tooltip": "Yet Another Singularity?!?!",
                    "data": "Ever wanted to order 10 million billion billion chests and noticed that your crafting storage was just not big enough?\n\nWell, here is your solution, provided to you by the good folks over at GTNHCorp (Name Pending).\n\nThe Singularity Crafting Storage has a storage of 9,223,372,036,854,775,807 Bytes, which, if you can't read numbers, is a lot.\n\nEnjoy crafting one :) You'll need to kill some Chaos Guardians for it."
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
                    "source": "256K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "1024K-ME\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "1024K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "1024k\u5408\u6210\u5b58\u50a8\u5668"
                },
                {
                    "source": "256k Essentia Component",
                    "target": "1024k Essentia Component"
                },
                {
                    "source": "1024k Essentia Component",
                    "target": "1024k Essentia Storage Cell"
                },
                {
                    "source": "AE Tier 2 Fluid Storage",
                    "target": "1024K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f",
                    "target": "1024K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "1024K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "1024K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "1024K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "1024K-ME\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "4096K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "16384K-ME\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "16384K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "16384k\u5408\u6210\u5b58\u50a8\u5668"
                },
                {
                    "source": "4096k Essentia Component",
                    "target": "16384k Essentia Component"
                },
                {
                    "source": "16384k Essentia Component",
                    "target": "16384k Essentia Storage Cell"
                },
                {
                    "source": "AE Tier 2 Fluid Storage",
                    "target": "16384k Fluid Component"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "16384k Fluid Component"
                },
                {
                    "source": "16384k Fluid Component",
                    "target": "16384k Fluid Storage Cell"
                },
                {
                    "source": "16384K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "16384K-ME\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "2\u9636AE\u5b58\u50a8",
                    "target": "16K\u7ec4\u4ef6"
                },
                {
                    "source": "16K\u7ec4\u4ef6",
                    "target": "16K\u5408\u6210\u5b58\u50a8\u5668"
                },
                {
                    "source": "4K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "16K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "16K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "16K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "1\u9636AE\u6d41\u4f53\u5b58\u50a8",
                    "target": "16K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "16K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "16K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "16K\u7ec4\u4ef6",
                    "target": "16K-ME\u5b58\u50a8\u5355\u5143"
                },
                {
                    "source": "1\u9636AE\u5b58\u50a8",
                    "target": "1k-ME\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "\u81ea\u52a8\u5408\u62102",
                    "target": "1K\u5408\u6210\u5b58\u50a8\u5668"
                },
                {
                    "source": "1k-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "1K\u5408\u6210\u5b58\u50a8\u5668"
                },
                {
                    "source": "AE\u6e90\u8d28\u5b58\u50a8",
                    "target": "1K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "1\u9636AE\u6e90\u8d28\u5b58\u50a8",
                    "target": "1K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "1K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "1K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "1\u9636AE\u6d41\u4f53\u5b58\u50a8",
                    "target": "1K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "1K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "1K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "1k-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "1K-ME\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "\u628a\u7ec4\u4ef6\u653e\u8fdb\u53bb",
                    "target": "1K-ME\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "3\u9636AE\u5b58\u50a8",
                    "target": "256K-ME\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "256K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "256k\u5408\u6210\u5b58\u50a8\u5668"
                },
                {
                    "source": "64K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "256k Essentia Component"
                },
                {
                    "source": "256k Essentia Component",
                    "target": "256k Essentia Storage Cell"
                },
                {
                    "source": "AE Tier 2 Fluid Storage",
                    "target": "256K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "\u5de5\u4f5c\u7ad9,\u4f60\u7684\u7b2c\u4e00\u79cdEV\u7535\u8def\u677f",
                    "target": "256K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "Housing for Advanced Fluid Components",
                    "target": "256K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "256K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "256K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "256K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "256K-ME\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "\u9ad8\u7ea7\u5b58\u50a8\u5916\u58f3",
                    "target": "256K-ME\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "4\u9636AE\u5b58\u50a8",
                    "target": "4096K-ME\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "4096K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "4096k\u5408\u6210\u5b58\u50a8\u5668"
                },
                {
                    "source": "1024k Essentia Component",
                    "target": "4096k Essentia Component"
                },
                {
                    "source": "4096k Essentia Component",
                    "target": "4096k Essentia Storage Cell"
                },
                {
                    "source": "AE Tier 2 Fluid Storage",
                    "target": "4096K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "4096K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "4096K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "4096K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "4096K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "4096K-ME\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "1\u9636AE\u5b58\u50a8",
                    "target": "4K-ME\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "4K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "4K\u5408\u6210\u5b58\u50a8\u5668"
                },
                {
                    "source": "1K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "4K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "4K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "4K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "1\u9636AE\u6d41\u4f53\u5b58\u50a8",
                    "target": "4K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "4K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "4K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "4K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "4K-ME\u5b58\u50a8\u5355\u5143"
                },
                {
                    "source": "\u628a\u7ec4\u4ef6\u653e\u8fdb\u53bb",
                    "target": "4K-ME\u5b58\u50a8\u5355\u5143"
                },
                {
                    "source": "16K\u7ec4\u4ef6",
                    "target": "64K\u7ec4\u4ef6"
                },
                {
                    "source": "64K\u7ec4\u4ef6",
                    "target": "64K\u5408\u6210\u5b58\u50a8\u5668"
                },
                {
                    "source": "16K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "64K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "64K-ME\u6e90\u8d28\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "64K-ME\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "1\u9636AE\u6d41\u4f53\u5b58\u50a8",
                    "target": "64K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6"
                },
                {
                    "source": "64K-ME\u6d41\u4f53\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "64K-ME\u6d41\u4f53\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "64K\u7ec4\u4ef6",
                    "target": "64K-ME\u5b58\u50a8\u5355\u5143"
                },
                {
                    "source": "ME\u91cf\u5b50\u5b58\u50a8\u5143\u4ef6",
                    "target": "ME\u6570\u5b57\u5947\u70b9"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "ME\u6570\u5b57\u5947\u70b9"
                },
                {
                    "source": "\u7535\u8def\u677f\u5927\u5e08",
                    "target": "ME\u6570\u5b57\u5947\u70b9"
                },
                {
                    "source": "\u597d\u5427,\u770b\u8d77\u6765...\u95ea\u4eae?",
                    "target": "ME\u6570\u5b57\u5947\u70b9"
                },
                {
                    "source": "\u5e94\u7528\u683c\u96f7(Applied Greg)?",
                    "target": "Adv. Stocking Bus"
                },
                {
                    "source": "1\u9636AE\u6d41\u4f53\u5b58\u50a8",
                    "target": "AE2\u6d41\u4f53\u5408\u6210(AE2FC)"
                },
                {
                    "source": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "target": "AE\u6e90\u8d28\u5b58\u50a8"
                },
                {
                    "source": "AE\u7a7a\u95f4\u5b58\u50a81",
                    "target": "AE\u7a7a\u95f4\u5b58\u50a82"
                },
                {
                    "source": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "target": "AE\u7a7a\u95f4\u5b58\u50a81"
                },
                {
                    "source": "AE\u7a7a\u95f4\u5b58\u50a82",
                    "target": "AE\u7a7a\u95f4\u5b58\u50a83"
                },
                {
                    "source": "AE\u7a7a\u95f4\u5b58\u50a83",
                    "target": "AE\u7a7a\u95f4\u5b58\u50a84"
                },
                {
                    "source": "AE\u7a7a\u95f4\u5b58\u50a83",
                    "target": "AE\u7a7a\u95f4\u5b58\u50a86"
                },
                {
                    "source": "AE\u7a7a\u95f4\u5b58\u50a82",
                    "target": "AE\u7a7a\u95f4\u5b58\u50a85"
                },
                {
                    "source": "\u628a\u7ec4\u4ef6\u653e\u8fdb\u53bb",
                    "target": "AE\u7a7a\u95f4\u5b58\u50a85"
                },
                {
                    "source": "AE\u7a7a\u95f4\u5b58\u50a84",
                    "target": "AE\u7a7a\u95f4\u5b58\u50a87"
                },
                {
                    "source": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "target": "1\u9636AE\u6d41\u4f53\u5b58\u50a8"
                },
                {
                    "source": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "target": "1\u9636AE\u5b58\u50a8"
                },
                {
                    "source": "IV\u7ec4\u88c5\u673a",
                    "target": "AE Tier 2 Fluid Storage"
                },
                {
                    "source": "1\u9636AE\u6d41\u4f53\u5b58\u50a8",
                    "target": "AE Tier 2 Fluid Storage"
                },
                {
                    "source": "4K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "2\u9636AE\u5b58\u50a8"
                },
                {
                    "source": "64K\u7ec4\u4ef6",
                    "target": "3\u9636AE\u5b58\u50a8"
                },
                {
                    "source": "1024K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "4\u9636AE\u5b58\u50a8"
                },
                {
                    "source": "\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3",
                    "target": "\u963f\u5c14\u6cd5\u548c\u6b27\u7c73\u8304(Alpha and Omega)"
                },
                {
                    "source": "Essentia Quantum Storage",
                    "target": "And Another Digital Singularity"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "And Another Digital Singularity"
                },
                {
                    "source": "\u597d\u5427,\u770b\u8d77\u6765...\u95ea\u4eae?",
                    "target": "And Another Digital Singularity"
                },
                {
                    "source": "\u8fd8\u6709\u54ea\u91cc\u53ef\u80fd\u51fa\u95ee\u9898\uff1f",
                    "target": "And Another Digital Singularity"
                },
                {
                    "source": "\u9ad8\u7eaf\u5ea6\u6676\u4f53",
                    "target": "\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3"
                },
                {
                    "source": "Fluid Quantum Storage",
                    "target": "Another Digital Singularity"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "Another Digital Singularity"
                },
                {
                    "source": "\u7535\u8def\u677f\u5927\u5e08",
                    "target": "Another Digital Singularity"
                },
                {
                    "source": "\u597d\u5427,\u770b\u8d77\u6765...\u95ea\u4eae?",
                    "target": "Another Digital Singularity"
                },
                {
                    "source": "\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3",
                    "target": "\u5916\u661f\u79d1\u6280-\u81ea\u52a8\u5408\u6210"
                },
                {
                    "source": "ME\u63a5\u53e3",
                    "target": "\u5e94\u7528\u683c\u96f7(Applied Greg)?"
                },
                {
                    "source": "\u6269\u6563\u4e0e\u805a\u96c6",
                    "target": "\u81ea\u52a8\u5965\u672f\u5408\u6210"
                },
                {
                    "source": "1\u9636AE\u5b58\u50a8",
                    "target": "\u81ea\u52a8\u5408\u62102"
                },
                {
                    "source": "\u7167\u660e\u9762\u677f",
                    "target": "\u7ec8\u7aef\u65e0\u5904\u4e0d\u5728"
                },
                {
                    "source": "AE\u7a7a\u95f4\u5b58\u50a81",
                    "target": "\u4f20\u9001\u6211\u5427,\u65af\u79d1\u8482(Beam Me Up,Scotty)"
                },
                {
                    "source": "AE\u7a7a\u95f4\u5b58\u50a85",
                    "target": "\u4f20\u9001\u6211\u5427,\u65af\u79d1\u8482(Beam Me Up,Scotty)"
                },
                {
                    "source": "\u798f\u9c81\u4f0a\u514b\u65af(Fluix)\u6c34\u6676",
                    "target": "P2P\u901a\u9053-ME"
                },
                {
                    "source": "\u798f\u9c81\u4f0a\u514b\u65af(Fluix)\u6c34\u6676",
                    "target": "\u5916\u661f\u79d1\u6280-\u7ebf\u7f06"
                },
                {
                    "source": "ME\u6d41\u4f53\u63a5\u53e3",
                    "target": "\u7f51\u7edc\u4f20\u8f93vis"
                },
                {
                    "source": "\u81ea\u52a8\u5408\u62102",
                    "target": "\u5e76\u884c\u5904\u7406\u5355\u5143"
                },
                {
                    "source": "\u5e76\u884c\u5904\u7406\u5355\u5143,\u4f46\u662f4\u6838",
                    "target": "\u5e76\u884c\u5904\u7406\u5355\u5143,\u4f46\u662f16\u6838"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u5e76\u884c\u5904\u7406\u5355\u5143,\u4f46\u662f16\u6838"
                },
                {
                    "source": "\u5e76\u884c\u5904\u7406\u5355\u5143",
                    "target": "\u5e76\u884c\u5904\u7406\u5355\u5143,\u4f46\u662f4\u6838"
                },
                {
                    "source": "Cribs",
                    "target": "Crafting Input Proxy"
                },
                {
                    "source": "\u627f\u8ba4\u5427,UV\u9636\u6bb5\u4f60\u559c\u6b22\u7684Pt 2",
                    "target": "Crafting Input Proxy"
                },
                {
                    "source": "\u81ea\u52a8\u5408\u62102",
                    "target": "\u5408\u6210\u76d1\u63a7\u5668"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "Cribs"
                },
                {
                    "source": "Adv. Stocking Bus",
                    "target": "Cribs"
                },
                {
                    "source": "\u57fa\u4e8e\u50a8\u91cf\u7684\u7ea2\u77f3\u4fe1\u53f7",
                    "target": "\u5207\u65ad\u7535\u6e90!"
                },
                {
                    "source": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "target": "\u4e00\u526f\u6251\u514b\u724c"
                },
                {
                    "source": "\u4fdd\u6301\u7f51\u7edc\u7a33\u5b9a",
                    "target": "\u81f4\u5bc6\u80fd\u6e90\u5143\u4ef6"
                },
                {
                    "source": "\u667a\u80fd\u7ebf\u7f06",
                    "target": "\u81f4\u5bc6\u7ebf\u7f06"
                },
                {
                    "source": "\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3",
                    "target": "\u6269\u6563\u4e0e\u805a\u96c6"
                },
                {
                    "source": "\u6837\u677f\u7ec8\u7aef",
                    "target": "\u66f4\u7b80\u5355\u7684\u88c5\u914d\u7ebf\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u5c06\u7269\u54c1\u8f93\u5165\u7f51\u7edc",
                    "target": "\u817e\u7a7a\u50a8\u7f50"
                },
                {
                    "source": "\u798f\u9c81\u4f0a\u514b\u65af(Fluix)\u6c34\u6676",
                    "target": "\u80fd\u6e90\u63a5\u6536\u5668"
                },
                {
                    "source": "\u57fa\u4e8e\u50a8\u91cf\u7684\u7ea2\u77f3\u4fe1\u53f7",
                    "target": "\u6e90\u8d28\u53d1\u4fe1\u5668"
                },
                {
                    "source": "\u6e7f\u4ef6\u4e3b\u673a",
                    "target": "Essentia Quantum Storage"
                },
                {
                    "source": "16384k Essentia Component",
                    "target": "Essentia Quantum Storage"
                },
                {
                    "source": "AE\u6e90\u8d28\u5b58\u50a8",
                    "target": "1\u9636AE\u6e90\u8d28\u5b58\u50a8"
                },
                {
                    "source": "\u88c5\u6ee1\u6c34\u7bb1",
                    "target": "\u4ece\u7f51\u7edc\u4e2d\u5bfc\u51fa\u6e90\u8d28"
                },
                {
                    "source": "\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3",
                    "target": "\u4ece\u7f51\u7edc\u4e2d\u63d0\u53d6\u7269\u54c1"
                },
                {
                    "source": "\u4ece\u7f51\u7edc\u4e2d\u63d0\u53d6\u7269\u54c1",
                    "target": "\u88c5\u6ee1\u6c34\u7bb1"
                },
                {
                    "source": "\u6e7f\u4ef6\u4e3b\u673a",
                    "target": "Fluid Quantum Storage"
                },
                {
                    "source": "16384k Fluid Component",
                    "target": "Fluid Quantum Storage"
                },
                {
                    "source": "\u5916\u661f\u79d1\u6280-\u81ea\u52a8\u5408\u6210",
                    "target": "\u6d41\u4f53\u4ea4\u6362"
                },
                {
                    "source": "\u5431\u5431\u5431...\u5145\u7535",
                    "target": "\u798f\u9c81\u4f0a\u514b\u65af(Fluix)\u6c34\u6676"
                },
                {
                    "source": "ME\u63a5\u53e3",
                    "target": "ME\u6d41\u4f53\u63a5\u53e3"
                },
                {
                    "source": "\u6625\u5b63\u5927\u626b\u9664",
                    "target": "\u4e3a\u6bd4\u6c14\u4f53\u66f4\u6c14\u4f53\u7684--\u6e90\u8d28--\u7f16\u7801"
                },
                {
                    "source": "\u5b58\u50a8\u65f6\u95f4!",
                    "target": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u5f97\u627e\u5230\u5b83\u4eec"
                },
                {
                    "source": "\u77f3\u82f1\u5ca9\u77ff\u8109",
                    "target": "\u5f97\u627e\u5230\u5b83\u4eec"
                },
                {
                    "source": "3\u9636AE\u5b58\u50a8",
                    "target": "\u9ad8\u7ea7\u5b58\u50a8\u5916\u58f3"
                },
                {
                    "source": "AE Tier 2 Fluid Storage",
                    "target": "Housing for Advanced Fluid Components"
                },
                {
                    "source": "\u81f4\u5bc6\u80fd\u6e90\u5143\u4ef6",
                    "target": "\u6211\u53ef\u4ee5\u968f\u4fbf\u7528\u65e0\u7ebf\u63a5\u5165\u5668\u4e86,\u8c22\u8c22"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u6211\u53ef\u4ee5\u968f\u4fbf\u7528\u65e0\u7ebf\u63a5\u5165\u5668\u4e86,\u8c22\u8c22"
                },
                {
                    "source": "\u5431\u5431\u5431...\u5145\u7535",
                    "target": "\u7167\u660e\u9762\u677f"
                },
                {
                    "source": "\u77f3\u82f1\u5ca9\u77ff\u8109",
                    "target": "\u5431\u5431\u5431...\u5145\u7535"
                },
                {
                    "source": "\u4e59\u9170\u6c34\u6768\u9178(C9H8O4)...\u6c2f\u5316\u94a0(NaCl)...\u6c34(H2O)...",
                    "target": "\u5431\u5431\u5431...\u5145\u7535"
                },
                {
                    "source": "\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3",
                    "target": "\u5c06\u7269\u54c1\u8f93\u5165\u7f51\u7edc"
                },
                {
                    "source": "\u6309\u9700\u4f9b\u5e94\u6e90\u8d28",
                    "target": "\u9769\u547d"
                },
                {
                    "source": "ME\u63a5\u53e3",
                    "target": "ME\u5b58\u50a8\u603b\u7ebf"
                },
                {
                    "source": "\u7834\u574f\u6838\u5fc3\u548c\u6210\u578b\u6838\u5fc3",
                    "target": "ME\u63a5\u53e3"
                },
                {
                    "source": "ME\u5b58\u50a8\u603b\u7ebf",
                    "target": "ME\u6d41\u4f53\u5b58\u50a8\u603b\u7ebf"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u5b58\u50a8\u65f6\u95f4!"
                },
                {
                    "source": "\u4ece\u5929\u800c\u964d",
                    "target": "\u5b58\u50a8\u65f6\u95f4!"
                },
                {
                    "source": "\u9ad8\u7eaf\u5ea6\u6676\u4f53",
                    "target": "\u4fdd\u6301\u7f51\u7edc\u7a33\u5b9a"
                },
                {
                    "source": "\u6269\u6563\u4e0e\u805a\u96c6",
                    "target": "\u9b54\u6cd5\u4ec6\u4ece"
                },
                {
                    "source": "\u7ec8\u7aef\u65e0\u5904\u4e0d\u5728",
                    "target": "\u5965\u672f\u5408\u6210\u7ec8\u7aef"
                },
                {
                    "source": "\u6837\u677f\u7ec8\u7aef",
                    "target": "\u5feb\u901f\u7f16\u5199\u6837\u677f"
                },
                {
                    "source": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "target": "ME\u63a7\u5236\u5668"
                },
                {
                    "source": "\u65e0\u7ebf\u7f51\u7edc",
                    "target": "\u65e0\u7ebf\u63a5\u5165"
                },
                {
                    "source": "\u81f4\u5bc6\u80fd\u6e90\u5143\u4ef6",
                    "target": "\u65e0\u7ebf\u63a5\u5165"
                },
                {
                    "source": "\u9ad8\u7eaf\u5ea6\u6676\u4f53",
                    "target": "\u5c06ME\u7f51\u7edc\u63a5\u5165\u8d85\u51c0\u95f4"
                },
                {
                    "source": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "target": "\u5c06ME\u7f51\u7edc\u63a5\u5165\u8d85\u51c0\u95f4"
                },
                {
                    "source": "\u7167\u660e\u9762\u677f",
                    "target": "\u5c06ME\u7f51\u7edc\u63a5\u5165\u8d85\u51c0\u95f4"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "AE\u6742\u9879"
                },
                {
                    "source": "ME\u63a5\u53e3",
                    "target": "\u589e\u5f3a\u6837\u677f!"
                },
                {
                    "source": "64K\u7ec4\u4ef6",
                    "target": "Need More Information?"
                },
                {
                    "source": "\u5fc5\u5907\u5de5\u5177",
                    "target": "Need More Information?"
                },
                {
                    "source": "Another Digital Singularity",
                    "target": "Oceans in a Bottle"
                },
                {
                    "source": "UXV\u7535\u8def\u677f",
                    "target": "Oceans in a Bottle"
                },
                {
                    "source": "My Eyes Hurt! #1",
                    "target": "Optimizing Patterns in Late Game!"
                },
                {
                    "source": "\u914d\u65b9\u6a21\u677f",
                    "target": "Optimizing Patterns in Late Game!"
                },
                {
                    "source": "\u6269\u6563\u4e0e\u805a\u96c6",
                    "target": "\u81ea\u52a8\u84b8\u998f\u6e90\u8d28"
                },
                {
                    "source": "\u4ece\u7f51\u7edc\u4e2d\u63d0\u53d6\u7269\u54c1",
                    "target": "\u77ff\u5178\u8fc7\u6ee4\u5361"
                },
                {
                    "source": "\u57fa\u4e8e\u50a8\u91cf\u7684\u7ea2\u77f3\u4fe1\u53f7",
                    "target": "\u7f3a\u805a\u56db\u6c1f\u4e59\u70ef? \u542f\u52a8\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc!"
                },
                {
                    "source": "\u7167\u660e\u9762\u677f",
                    "target": "\u6837\u677f\u7ec8\u7aef"
                },
                {
                    "source": "\u52a0\u901f\u6210\u957f",
                    "target": "\u6676\u4f53\u50ac\u751f\u4ed3"
                },
                {
                    "source": "\u5b58\u50a8\u4f60\u7684ME\u6570\u636e",
                    "target": "\u4fbf\u643a\u5f0f\u6570\u5b57\u5b58\u50a8"
                },
                {
                    "source": "\u6269\u6563\u4e0e\u805a\u96c6",
                    "target": "\u6309\u9700\u4f9b\u5e94\u6e90\u8d28"
                },
                {
                    "source": "\u817e\u7a7a\u50a8\u7f50",
                    "target": "\u5411\u7f51\u7edc\u4e2d\u5bfc\u5165\u6e90\u8d28"
                },
                {
                    "source": "\u798f\u9c81\u4f0a\u514b\u65af(Fluix)\u6c34\u6676",
                    "target": "\u9ad8\u7eaf\u5ea6\u6676\u4f53"
                },
                {
                    "source": "\u4e00\u4e2a\u5947\u70b9\u610f\u5473\u7740...(Singular Singularities Signify Something)",
                    "target": "\u91cf\u5b50\u6865\u8fde\u63a5\u4f60\u7684\u524d\u54e8\u57fa\u5730"
                },
                {
                    "source": "\u6e7f\u4ef6\u4e3b\u673a",
                    "target": "ME\u91cf\u5b50\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "16384K-ME\u5b58\u50a8\u7ec4\u4ef6",
                    "target": "ME\u91cf\u5b50\u5b58\u50a8\u5143\u4ef6"
                },
                {
                    "source": "\u6837\u677f\u7ec8\u7aef",
                    "target": "\u914d\u65b9\u6a21\u677f"
                },
                {
                    "source": "\u5916\u661f\u79d1\u6280-\u7ebf\u7f06",
                    "target": "\u57fa\u4e8e\u50a8\u91cf\u7684\u7ea2\u77f3\u4fe1\u53f7"
                },
                {
                    "source": "\u5916\u661f\u79d1\u6280-\u7ebf\u7f06",
                    "target": "\u57fa\u7840AE\u7cfb\u7edf"
                },
                {
                    "source": "\u81ea\u52a8\u5408\u62102",
                    "target": "\u81ea\u52a8\u5408\u62103"
                },
                {
                    "source": "ME\u5b58\u50a8\u603b\u7ebf",
                    "target": "\u5916\u90e8\u5b58\u50a8"
                },
                {
                    "source": "P2P\u901a\u9053-ME",
                    "target": "P2P"
                },
                {
                    "source": "ME\u63a7\u5236\u5668",
                    "target": "\u4e00\u4e2a\u5947\u70b9\u610f\u5473\u7740...(Singular Singularities Signify Something)"
                },
                {
                    "source": "\u5916\u661f\u79d1\u6280-\u7ebf\u7f06",
                    "target": "\u667a\u80fd\u7ebf\u7f06"
                },
                {
                    "source": "1\u9636AE\u5b58\u50a8",
                    "target": "\u628a\u7ec4\u4ef6\u653e\u8fdb\u53bb"
                },
                {
                    "source": "\u9ad8\u7eaf\u5ea6\u6676\u4f53",
                    "target": "\u52a0\u901f\u6210\u957f"
                },
                {
                    "source": "\u5b58\u50a8\u4f60\u7684ME\u6570\u636e",
                    "target": "\u6625\u5b63\u5927\u626b\u9664"
                },
                {
                    "source": "\u627f\u8ba4\u5427,UV\u9636\u6bb5\u4f60\u559c\u6b22\u7684Pt 1",
                    "target": "Stocking Fluids"
                },
                {
                    "source": "\u667a\u80fd\u7535\u8def",
                    "target": "Stocking Fluids"
                },
                {
                    "source": "\u5e94\u7528\u683c\u96f7(Applied Greg)?",
                    "target": "Stocking Fluids"
                },
                {
                    "source": "ME\u6d41\u4f53\u5b58\u50a8\u603b\u7ebf",
                    "target": "\u5728\u7f50\u5b50\u91cc\u5b58\u50a8\u6e90\u8d28? \u600e\u4e48\u8fd8\u6765?"
                },
                {
                    "source": "\u83b7\u5f97\u7b2c\u4e00\u4e2aAE\u5904\u7406\u5668",
                    "target": "\u5b58\u50a8\u4f60\u7684ME\u6570\u636e"
                },
                {
                    "source": "\u5916\u661f\u79d1\u6280-\u7ebf\u7f06",
                    "target": "\u5b58\u50a8\u4f60\u7684ME\u6570\u636e"
                },
                {
                    "source": "2\u9636AE\u5b58\u50a8",
                    "target": "\u8fd9\u53ef\u4e0d\u662f\u5b58\u50a8\u5143\u4ef6!"
                },
                {
                    "source": "\u4e3a\u6bd4\u6c14\u4f53\u66f4\u6c14\u4f53\u7684--\u6e90\u8d28--\u7f16\u7801",
                    "target": "Thaumometric Essentia Cell"
                },
                {
                    "source": "\u6cd5\u6756\u6838\u5fc3:\u90aa\u672f",
                    "target": "Thaumometric Essentia Cell"
                },
                {
                    "source": "UIV Field Generator",
                    "target": "Thaumometric Essentia Cell"
                },
                {
                    "source": "\u7ec8\u7aef\u65e0\u5904\u4e0d\u5728",
                    "target": "\u6d41\u4f53\u7ec8\u7aef"
                },
                {
                    "source": "P2P\u901a\u9053-ME",
                    "target": "\u8fde\u63a5P2P\u901a\u9053"
                },
                {
                    "source": "\u5b58\u50a8\u4f60\u7684ME\u6570\u636e",
                    "target": "\u5fc5\u5907\u5de5\u5177"
                },
                {
                    "source": "ME\u63a5\u53e3",
                    "target": "Ultimate Parallelization..."
                },
                {
                    "source": "ME\u6570\u5b57\u5947\u70b9",
                    "target": "Universe in a Bottle"
                },
                {
                    "source": "UXV\u7535\u8def\u677f",
                    "target": "Universe in a Bottle"
                },
                {
                    "source": "\u7167\u660e\u9762\u677f",
                    "target": "\u53ef\u89c6\u5316\u4f60\u7684\u7269\u54c1"
                },
                {
                    "source": "\u53ef\u89c6\u5316\u4f60\u7684\u7269\u54c1",
                    "target": "\u6211\u7f3a\u5c11\u6b3a\u9a97(Nebrisum)\u6e90\u8d28,\u8fd8\u662f\u5929\u542f(Terminus)?"
                },
                {
                    "source": "Cribs",
                    "target": "Waterproof Tech"
                },
                {
                    "source": "Your First SpaceTime",
                    "target": "Waterproof Tech"
                },
                {
                    "source": "\u53ef\u89c6\u5316\u4f60\u7684\u7269\u54c1",
                    "target": "\u4e3a\u4ec0\u4e48\u6211\u9700\u8981\u77e5\u9053\u6709\u591a\u5c11\u7caa\u6d46?"
                },
                {
                    "source": "\u65e0\u7ebf\u63a5\u5165",
                    "target": "\u65e0\u7ebf 2.0"
                },
                {
                    "source": "\u4e00\u4e2a\u5947\u70b9\u610f\u5473\u7740...(Singular Singularities Signify Something)",
                    "target": "\u65e0\u7ebf 2.0"
                },
                {
                    "source": "\u65e0\u7ebf 2.0",
                    "target": "Wireless 2.5 - All in One"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u65e0\u7ebf 3.0"
                },
                {
                    "source": "\u65e0\u7ebf 2.0",
                    "target": "\u65e0\u7ebf 3.0"
                },
                {
                    "source": "\u65e0\u7ebf\u7f51\u7edc",
                    "target": "\u65e0\u7ebf\u4fe1\u53f7\u589e\u5e45\u5668"
                },
                {
                    "source": "\u5b58\u50a8\u4f60\u7684ME\u6570\u636e",
                    "target": "\u65e0\u7ebf\u7f51\u7edc"
                },
                {
                    "source": "Ultimate Parallelization...",
                    "target": "...with Fluid Support!"
                },
                {
                    "source": "\u6df7\u6c8c\u6838\u5fc3",
                    "target": "Yet Another Singularity?!?!"
                },
                {
                    "source": "ME\u6570\u5b57\u5947\u70b9",
                    "target": "Yet Another Singularity?!?!"
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
    