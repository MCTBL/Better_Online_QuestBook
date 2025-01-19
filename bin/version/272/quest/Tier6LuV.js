
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
                    "name": "\u901f\u5ea6\u5347\u7ea7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/202.png",
                    "x": 360.0,
                    "y": 372.0,
                    "tooltip": "\u901f\u5ea6\u5347\u7ea7",
                    "data": "\u5982\u679c\u4f60\u611f\u89c9\u672b\u5f71\u91c7\u77f3\u573a\u7684\u6316\u6398\u901f\u5ea6\u4e0d\u80fd\u8ba9\u4f60\u6ee1\u610f\u7684\u8bdd... \u90a3\u4e48\u4f60\u9700\u8981\u70b9\u4e1c\u897f\u8ba9\u5b83\u5feb\u70b9\u5de5\u4f5c!"
                },
                {
                    "name": "\u52a0\u901fIII",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1682.png",
                    "x": 456.0,
                    "y": 372.0,
                    "tooltip": "\u52a0\u901fIII",
                    "data": "\u5982\u679c\u901f\u5ea6\u5347\u7ea7II\u592a\u6162\u4e86\u7684\u8bdd,\u90a3\u5c31\u5347\u7ea7\u4e3a\u901f\u5ea6III\u5427."
                },
                {
                    "name": "\u52a0\u901fII",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1681.png",
                    "x": 408.0,
                    "y": 372.0,
                    "tooltip": "\u52a0\u901fII",
                    "data": "\u867d\u7136\u901f\u5ea6\u5347\u7ea7\u7684\u672b\u5f71\u91c7\u77f3\u573a\u672c\u8eab\u5c31\u5f88\u597d\u4e86,\u4f46\u4e3a\u4ec0\u4e48\u4e0d\u52a0\u5feb\u901f\u5ea6\u5462\uff1f"
                },
                {
                    "name": "\u8fdb\u9636\u8d34\u7247\u5143\u4ef6",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2608.png",
                    "x": 564.0,
                    "y": 300.0,
                    "tooltip": "\u8fdb\u9636\u8d34\u7247\u5143\u4ef6",
                    "data": "\u5236\u9020\u6676\u4f53\u7cfb\u5217\u4ee5\u4e0a\u7535\u8def\u677f\u65f6\u9700\u8981\u7528\u5230\u8fdb\u9636\u8d34\u7247\u5143\u4ef6.%n%n\u5982\u679c\u4f7f\u7528\u8fdb\u9636\u8d34\u7247\u5143\u4ef6\u5408\u6210\u6bd4\u6676\u4f53\u7535\u8def\u66f4\u4f4e\u9636\u7684\u7535\u8def\u677f,\u6d88\u8017\u4e3a\u666e\u901a\u8d34\u7247\u5143\u4ef6\u76841/4,\u540c\u65f6\u52a0\u5de5\u65f6\u95f4\u4e3a\u539f\u6765\u7684\u4e00\u534a."
                },
                {
                    "name": "\u5feb\u6210\u529f\u4e86",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2941.png",
                    "x": 468.0,
                    "y": 456.0,
                    "tooltip": "\u5feb\u6210\u529f\u4e86",
                    "data": "\u73b0\u5728\u4f60\u53ea\u9700\u8981\u8ba9\u6eb6\u6db2\u4e2d\u7684\u7845\u5ca9\u6790\u51fa\u5c31\u884c\u4e86. \u597d\u8036!"
                },
                {
                    "name": "\u53e6\u4e00\u79cd\u6eb6\u5242",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2934.png",
                    "x": 300.0,
                    "y": 648.0,
                    "tooltip": "\u53e6\u4e00\u79cd\u6eb6\u5242",
                    "data": "\u4e3a\u4ec0\u4e48\u5b83\u9700\u8981\u79cd\u5b50\u6cb9?"
                },
                {
                    "name": "\u9511\u548c\u6c2f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2922.png",
                    "x": 300.0,
                    "y": 744.0,
                    "tooltip": "\u9511\u548c\u6c2f",
                    "data": "\u73b0\u5728,\u5c06\u9511\u3001\u6c2f\u548c\u4e59\u919a\u6295\u5165\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u8fdb\u884c\u53cd\u5e94,\u4ee5\u5236\u53d6\u4e09\u6c2f\u5316\u9511\u6eb6\u6db2."
                },
                {
                    "name": "\u88c5\u914d\u7ebf\u914d\u65b9\u66f4\u65b0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2024.png",
                    "x": -24.0,
                    "y": 360.0,
                    "tooltip": "\u88c5\u914d\u7ebf\u914d\u65b9\u66f4\u65b0",
                    "data": "\u6574\u5408\u5305\u66f4\u65b0\u4e14\u88c5\u914d\u7ebf\u5408\u6210\u8868\u6709\u6539\u52a8\u7684\u8bdd,\u4f60\u7684\u65e7\u95ea\u5b58\u540c\u6837\u9700\u8981\u66f4\u65b0\u5176\u5185\u7684\u5408\u6210\u8868.\u5728\u8001\u7248\u672c,\u66f4\u65b0\u95ea\u5b58\u9700\u8981\u91cd\u65b0\u626b\u63cf\u65b0\u7269\u54c1,\u800c\u73b0\u5728,\u5c06\u95ea\u5b58\u653e\u5165\u88c5\u914d\u7ebf\u540e\u5373\u53ef\u81ea\u52a8\u5b8c\u6210\u66f4\u65b0. \u5982\u679c\u4f60\u53d1\u73b0\u66f4\u65b0\u540e\u95ea\u5b58\u6709bug\u7684\u8bdd,\u8bf7\u901a\u8fc7Discord\u6216GitHub\u4e0e\u5f00\u53d1\u7ec4\u8054\u7cfb."
                },
                {
                    "name": "\u81ea\u52a8\u6316\u6398",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/201.png",
                    "x": 312.0,
                    "y": 372.0,
                    "tooltip": "\u81ea\u52a8\u6316\u6398",
                    "data": "\u4f60\u7684\u6316\u77ff\u5229\u5668!QED\u724c\u672b\u5f71\u91c7\u77f3\u573a.%n%n\u6b63\u59820lafe\u6240\u8bf4,\"\u8fd9\u4e2a\u5c0f\u9ed1\u5323\u5b50\u53ef\u4ee5\u8ba9\u4f60\u7684\u65e5\u5b50\u53d8\u5f97\u60ec\u610f\"\u548c\"\u4f60\u5bf9\u81f4\u5bc6\u9ed1\u66dc\u77f3\u677f\u7684\u6d77\u91cf\u9700\u6c42.\"%n%n\u4f60\u6700\u597d\u538b\u7f29\u4e00\u4e0b!%n%n\u6ce8\u610f:\u6700\u597d\u5c06\u91c7\u77f3\u573a\u548c\u6807\u8bb0\u653e\u5728\u77ff\u8109\u8fb9\u754c\u4e0a. \u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f,\u4f60\u53ef\u4ee5\u7acb\u5373\u5f00\u59cb\u83b7\u5f97\u77ff\u77f3,\u5728\u884c\u661f\u7ef4\u5ea6\u5c24\u4e3a\u6709\u6548."
                },
                {
                    "name": "\u66f4\u4fbf\u5b9c\u7684\u9ad8\u538b\u7535\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1684.png",
                    "x": 696.0,
                    "y": 192.0,
                    "tooltip": "\u66f4\u4fbf\u5b9c\u7684\u9ad8\u538b\u7535\u8def",
                    "data": "\u4f60\u53ef\u4ee5\u4ee5\u66f4\u4fbf\u5b9c\u7684\u4ef7\u683c\u5236\u9020\u7eb3\u7c73\u5904\u7406\u5668\u4e86. \u9996\u5148\u9700\u8981\u538b\u5370\u7535\u8def..."
                },
                {
                    "name": "Clarifier",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5895649105231252556.png",
                    "x": 216.0,
                    "y": 528.0,
                    "tooltip": "Clarifier",
                    "data": "The first step in the water purification process is the clarifier. Operating this machine is a simple task, you will just need to maintain a steady supply of Activated Carbon for the filters. Using this machine, you will be able to make Grade 1 Purified Water, which can spead up processing of Naquadah-Doped Boules and Wafers by 25%."
                },
                {
                    "name": "\u6676\u4f53\u82af\u7247",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1687.png",
                    "x": 480.0,
                    "y": 192.0,
                    "tooltip": "\u6676\u4f53\u82af\u7247",
                    "data": "\u8981\u5236\u9020\u8fd9\u4e9b\u82af\u7247,\u4f60\u9700\u8981\u94d5,\u4ee5\u53ca\u5728\u5c0f\u884c\u661f\u5e26(\u6216\u7a7a\u95f4\u7ad9)\u7684HV\u9ad8\u538b\u91dc,\u4ee5\u5b9e\u73b0\"\u4f4e\u91cd\u529b\"\u73af\u5883.%n%n\u6216\u8005\u901a\u8fc7\u591a\u65b9\u5757\u673a\u5668(\u5927\u578b\u52a0\u5de5\u5382)\u65e0\u89c6\u73af\u5883\u8981\u6c42,\u4f46\u5904\u7406\u9635\u5217\u4e0d\u884c."
                },
                {
                    "name": "\u6676\u4f53\u5904\u7406\u5668",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1686.png",
                    "x": 648.0,
                    "y": 300.0,
                    "tooltip": "\u6676\u4f53\u5904\u7406\u5668",
                    "data": "\u73b0\u5728\u4f60\u5df2\u7ecf\u8fdb\u5165\u4e86LuV,\u4f60\u53ef\u4ee5\u66f4\u7b80\u5355\u5730\u5236\u4f5cIV\u7535\u8def,\u4ee5\u53ca\u4f60\u7684\u7b2c\u4e00\u4e2aUV\u7535\u8def.%n%n\u6bcf\u79cd\u7684\u7b2c\u4e00\u5757\u7535\u8def\u677f\u5236\u9020\u5b8c\u6210\u540e,\u5236\u9020\u538b\u5370\u7535\u8def\u914d\u5408\u7535\u8def\u88c5\u914d\u7ebf\u6765\u964d\u4f4e\u5236\u9020\u6210\u672c. \u67e5\u9605\"\u83b7\u53d6\u4efb\u52a1\"\u4ee5\u83b7\u77e5\u64cd\u4f5c\u65b9\u5f0f."
                },
                {
                    "name": "\u6676\u4f53\u5904\u7406\u5668\u96c6\u7fa4",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1708.png",
                    "x": 648.0,
                    "y": 456.0,
                    "tooltip": "\u6676\u4f53\u5904\u7406\u5668\u96c6\u7fa4",
                    "data": "\u6676\u4f53\u5904\u7406\u5668\u96c6\u7fa4\u662fLuV\u7535\u8def\u677f."
                },
                {
                    "name": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1710.png",
                    "x": 648.0,
                    "y": 828.0,
                    "tooltip": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "data": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a\u662f\u4f60\u53ef\u4ee5\u5236\u4f5c\u7684\u7b2c\u4e00\u4e2aUV\u7535\u8def\u677f."
                },
                {
                    "name": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u95f41",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2928.png",
                    "x": 468.0,
                    "y": 648.0,
                    "tooltip": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u95f41",
                    "data": "\u5c06\u6c27\u5316\u7845\u5ca9\u6df7\u5408\u7269\u7c89\u4e0e\u6c1f\u9511\u9178\u4e00\u8d77\u52a0\u70ed,\u6c1f\u9511\u9178\u5c31\u80fd\u6eb6\u89e3Nq\u3001Ga\u3001Ad,\u800c\u949b\u5c06\u4f1a\u53d8\u4e3a\u67d0\u79cd\u5316\u5408\u7269\u6790\u51fa."
                },
                {
                    "name": "\u7cbe\u82f1\u7535\u8def\u677f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1688.png",
                    "x": 552.0,
                    "y": 552.0,
                    "tooltip": "\u7cbe\u82f1\u7535\u8def\u677f",
                    "data": "\u65b0\u7684\u7535\u8def\u677f,\u65b0\u7684\u7535\u8def\u677f\u5de5\u827a.\u800c\u4e14\u9ad8\u7b97\u529b\u5de5\u4f5c\u7ad9 MK-I\u4e5f\u9700\u8981\u5b83."
                },
                {
                    "name": "\u4e59\u919a\u51b2\u51fb(Ether Strike)!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2921.png",
                    "x": 216.0,
                    "y": 744.0,
                    "tooltip": "\u4e59\u919a\u51b2\u51fb(Ether Strike)!",
                    "data": "\u7845\u5ca9\u975e\u5e38\u7a33\u5b9a,\u4ee5\u81f3\u4e8e\u5927\u90e8\u5206\u9178\u65e0\u6cd5\u4e0e\u5176\u53d1\u751f\u53cd\u5e94,\u6240\u4ee5\u4f60\u9700\u8981\u66f4\u5f3a\u7684\u9178\u624d\u80fd\u5c06\u5176\u6eb6\u89e3.%n%n\u8ba9\u6211\u4eec\u5236\u5907\u4e00\u4e9b\u5fc5\u8981\u7684\u6709\u673a\u6eb6\u5242,\u7528\u4ee5\u5408\u6210\u8fd9\u79cd\u9178."
                },
                {
                    "name": "\u8403\u53d6",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2930.png",
                    "x": 384.0,
                    "y": 552.0,
                    "tooltip": "\u8403\u53d6",
                    "data": "\u73b0\u5728,\u91d1\u5c5e\u5143\u7d20\u5df2\u7ecf\u88ab\u6d53\u7f29\u5230\u4e86\u6eb6\u6db2\u4e2d."
                },
                {
                    "name": "\u83b7\u53d6\u7acb\u65b9\u6c27\u5316\u9506",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2604.png",
                    "x": 564.0,
                    "y": 108.0,
                    "tooltip": "\u83b7\u53d6\u7acb\u65b9\u6c27\u5316\u9506",
                    "data": "\u5c06\u9506\u548c\u6c27\u5316\u9487\u5728\u5de5\u4e1a\u9ad8\u7089\u5185\u7ed3\u5408\u53ef\u83b7\u5f97\u7acb\u65b9\u6c27\u5316\u9506. \u4ec5\u4ec5\u9700\u8981\u7c89\u672b\u5373\u53ef.%n%n\u83b7\u5f97\u9506\u7684\u65b9\u6cd5\u6709:%n1)\u7f57\u65af128b\u4e0a\u7684\u7ea2\u9506\u77f3\u77ff\u77f3%n2)\u7b5b\u9009\u9521\u77f3\u3001\u9521\u3001\u6216\u949b\u94c1(\u8981\u662f\u4f60\u8ba8\u538c\u7f57\u65af\u7684\u8bdd)%n3)\u7528\u6c2f\u5316\u5b66\u6d78\u6d17\u9521\u6216\u91d1\u7ea2\u77f3%n%n\u6c27\u6c14\u5f88\u5bb9\u6613\u5c31\u80fd\u83b7\u5f97,\u4f46\u662f\u9487\u5c31\u4e0d\u90a3\u4e48\u7b80\u5355\u4e86. \u4f60\u6709\u591a\u79cd\u9009\u62e9:%n1)\u5c06\u7a00\u571f\u5904\u7406\u6210\u7a00\u571f(I)(\u67e5\u9605MV\u7684\u4efb\u52a1),\u7136\u540e\u4ece\u5206\u79bb\u51fa\u7684\u78f7\u9487\u77ff\u7c89\u4e2d\u83b7\u5f97%n2)\u4f7f\u7528\u66f4\u5f3a\u7684\u9178\u5c06\u7a00\u571f\u5904\u7406\u6210\u7a00\u571f(II),\u7136\u540e\u4ece\u5206\u79bb\u51fa\u7684\u9487\u77ff\u7c89\u4e2d\u83b7\u5f97%n3)\u5728\u4f60\u62e5\u6709\u4e86T6\u706b\u7bad\u4ee5\u540e,\u5c31\u53ef\u4ee5\u5728\u6d77\u536b\u4e00\u76f4\u63a5\u6316\u5230\u7eaf\u9487\u77ff\u77f3,\u7b80\u5355\u5f97\u4ee4\u4eba\u5c16\u53eb!%n4)\u5728ZPM\u9636\u6bb5,\u53ef\u4ee5\u5c1d\u8bd5\u524d\u5f80\u5e9f\u571f\u4e16\u754c\u4ee5\u83b7\u53d6\u4e00\u4e9b\u5947\u602a\u7684GT++\u77ff\u77f3,\u5176\u4e2d\u7684\u4e00\u4e9b\u77ff\u77f3\u4e2d\u542b\u6709\u9487(\u591a\u4e48\u968f\u673a\u7684\u77ff\u77f3\u751f\u6210!)%n%n\u4f60\u53ef\u4ee5\u901a\u8fc7\u7ea2\u77f3\u6216\u8005\u9668\u77f3\u83b7\u5f97\u7a00\u571f,\u4f46\u4f60\u4e5f\u80fd\u76f4\u63a5\u4ece\u72ec\u5c45\u77f3\u6216\u8005\u5176\u4ed6\u77ff\u77f3\u7684\u526f\u4ea7\u7269\u4e2d\u83b7\u5f97. \u5e0c\u671b\u4f60\u6ca1\u628a\u5b83\u4eec\u6254\u4e86?%n%n\u8bd1\u8005\u6ce8:ZPM+\u4e5f\u53ef\u4ee5\u7528\u827e\u8428-\u6d6e\u9009-\u771f\u7a7a\u5e72\u71e5\u7ebf\u83b7\u53d6\u9487."
                },
                {
                    "name": "\u83b7\u53d6\u5807\u4e91\u77f3",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2605.png",
                    "x": 564.0,
                    "y": 24.0,
                    "tooltip": "\u83b7\u53d6\u5807\u4e91\u77f3",
                    "data": "\u5c06\u77f3\u82f1\u5ca9\u548c\u7d2b\u6c34\u6676\u5728\u5de5\u4e1a\u9ad8\u7089\u5185\u7ed3\u5408\u53ef\u4ee5\u83b7\u5f97\u6709\u7455\u7684\u5807\u4e91\u77f3. \u63a5\u4e0b\u6765\u9700\u8981\u901a\u8fc7\u805a\u7206\u538b\u7f29\u673a\u6216\u662f\u6fc0\u5149\u8680\u523b\u673a\u63d0\u9ad8\u5b9d\u77f3\u8d28\u91cf,\u5236\u6210\u7cbe\u81f4\u7684\u5807\u4e91\u77f3. \u7c89\u672b\u72b6\u6001\u7684\u5807\u4e91\u77f3\u8fd8\u6709\u5176\u4ed6\u7528\u9014,\u6240\u4ee5\u4e0d\u8981\u5c06\u5b83\u4eec\u5168\u90e8\u8f6c\u5316.%n%n\u4e3a\u4e86\u6ee1\u8db3\u5927\u91cf\u7684\u7d2b\u6c34\u6676\u9700\u6c42,\u4f60\u9700\u8981\u5728\u91d1\u661f\u4e0a\u505c\u7559\u4e00\u4e0b.%n%n\u5982\u679c\u62e5\u6709T5\u706b\u7bad,\u7f57\u65af128ba\u53ef\u4ee5\u76f4\u63a5\u51fa\u4ea7\u5807\u4e91\u77f3,\u53ea\u9700\u8981\u7b5b\u9009\u4e00\u4e0b."
                },
                {
                    "name": "\u83b7\u53d6\u78b2",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2603.png",
                    "x": 564.0,
                    "y": 192.0,
                    "tooltip": "\u83b7\u53d6\u78b2",
                    "data": "\u83b7\u53d6\u78b2\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5:%n%n1)\u5de5\u4e1a\u9ad8\u7089\u5904\u7406\u7c89\u788e\u7684\u94c5\u77ff\u77f3\u53ef\u83b7\u5f972\u4e2a\u78b2\u7c92%n2)\u5982\u679c\u6709\u8001\u7248\u672c\u65f6\u751f\u6210\u7684\u4e16\u754c,\u4f60\u51e0\u4e4e\u53ef\u4ee5\u5728\u4efb\u4f55\u7ef4\u5ea6\u83b7\u5f97\u78b2\u6c5e\u94af(\u5b83\u5df2\u635f\u574f,\u56e0\u6b64\u5f53\u524d\u4e0d\u4f1a\u751f\u6210),\u8981\u662f\u4fee\u597d\u4e86\u8bdd\u8fd8\u6709\u6c34\u661f%n3)\u4f7f\u7528\u6700\u5f3a\u9178\u5904\u7406\u7a00\u571f\u83b7\u5f97\u7a00\u571f(III),\u5206\u79bb\u51fa\u7684\u786b\u78b2\u91d1\u9517\u77ff\u53ef\u4ee5\u4ea7\u51fa\u78b2%n4)\u8fdb\u5165\u5e9f\u571f\u4e16\u754c%n5)\u7b49\u4f60\u6709\u4e86\u865a\u7a7a\u91c7\u77ff\u573a,\u53ef\u4ee5\u5c06\u5176\u5e03\u7f6e\u5728\u4e3b\u4e16\u754c\u4ee5\u83b7\u53d6\u78b2.%n%n\u8bd1\u8005\u6ce8:ZPM+\u4e5f\u53ef\u4ee5\u7528\u827e\u8428-\u6d6e\u9009-\u771f\u7a7a\u5e72\u71e5\u7ebf\u83b7\u53d6\u78b2."
                },
                {
                    "name": "\u83b7\u53d6\u4efb\u52a1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2600.png",
                    "x": 480.0,
                    "y": 108.0,
                    "tooltip": "\u83b7\u53d6\u4efb\u52a1",
                    "data": "\u60f3\u8981\u5bf9\u7535\u8def\u88c5\u914d\u7ebf\u8fdb\u884c\u94ed\u523b,\u4f60\u9700\u8981\u4e00\u7cfb\u5217\u65b0\u6750\u6599.%n%n\u9996\u5148\u662f\u4e00\u4e9b\u539f\u6750\u6599: \u5807\u4e91\u77f3\u3001\u7acb\u65b9\u6c27\u5316\u9506\u8fd8\u6709\u78b2.%n%n\u4f60\u8fd8\u9700\u8981\u4e00\u4e9b\u5176\u4ed6\u6750\u6599,\u4f46\u662f\u6211\u4e0d\u9700\u8981\u89e3\u91ca\u8fd9\u4e9b,\u5bf9\u5427?%n%n\u5982\u679c\u6536\u96c6\u8fd9\u4e9b\u6750\u6599\u592a\u75db\u82e6\u4e86\u7684\u8bdd,\u4f60\u53ef\u4ee5\u7528\u590d\u5236\u673a\u590d\u5236\u5176\u4e2d\u7684\u4e00\u90e8\u5206."
                },
                {
                    "name": "\u53cd\u9b54\u6cd5\u8005\u7684\u6d41\u4f53\u4f20\u9001",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1621.png",
                    "x": 240.0,
                    "y": 60.0,
                    "tooltip": "\u53cd\u9b54\u6cd5\u8005\u7684\u6d41\u4f53\u4f20\u9001",
                    "data": "\u4e0d\u60f3\u7528\u9b54\u6cd5\u624b\u6bb5\u4f20\u9001\u6d41\u4f53,\u4e5f\u4e0d\u60f3\u7528\u6d41\u4f53P2P? TecTech\u4e3a\u4f60\u63d0\u4f9b\u4e86\u672b\u5f71\u6d41\u4f53\u8986\u76d6\u677f!%n%n\u5c06\u8986\u76d6\u677f\u8d34\u5230GT\u5bb9\u5668\u4e0a\u5e76\u6253\u5f00GUI.%n\u989c\u8272(Color):\u8986\u76d6\u677f\u57fa\u4e8e\u989c\u8272\u94fe\u63a5,\u53ef\u4ee5\u7406\u89e3\u4e3a\u9891\u9053.%n%n\u516c\u5171(Public):\u8986\u76d6\u677f\u4f1a\u94fe\u63a5\u5230\u6240\u6709\u540c\u989c\u8272\u4e14\u975e\u79c1\u6709(Private)\u7684\u8986\u76d6\u677f. \u4f7f\u7528\u7f51\u7edc\u7a0b\u5e8f\u6765\u4e86\u89e3\u90a3\u4e32\u989c\u8272\u4ee3\u7801\u7684\u610f\u601d,\u5e76\u9009\u62e9\u81ea\u5df1\u559c\u6b22\u7684\u989c\u8272.%n\u79c1\u6709(Private):\u4e0d\u4e0e\u516c\u5171\u9891\u9053\u94fe\u63a5.\u5728\u5355\u4eba\u6e38\u620f\u91cc\u6ca1\u6709\u610f\u4e49.%n%n\u8f93\u5165(Import):\u4ece\u5b89\u88c5\u5bb9\u5668\u62bd\u53d6\u6d41\u4f53.%n\u8f93\u51fa(Export):\u5411\u5b89\u88c5\u5bb9\u5668\u8f93\u51fa\u6d41\u4f53.%n%n\u4f60\u53ef\u4ee5\u540c\u65f6\u5b89\u88c5\u591a\u5bf9\u8986\u76d6\u677f\u7528\u4e8e\u52a0\u901f\u8f93\u5165/\u8f93\u51fa.\u5b83\u7684\u8fd0\u884c\u901f\u5ea6\u4e3a8000L/t,\u522b\u88abwiki\u6216\u6e90\u7801\u7684\u53d8\u91cf\u540d\u9a97\u4e86.%n%n\u672c\u8986\u76d6\u677f\u53ef\u4ee5\u5b89\u88c5\u5728\u591a\u65b9\u5757\u7684\u8f93\u51fa\u4ed3\u4e0a\u8fdc\u7a0b\u8f93\u51fa\u6d41\u4f53,\u6216\u5b89\u88c5\u5728\u8f93\u5165\u4ed3\u4e0a\u8fdc\u7a0b\u8f93\u5165\u6d41\u4f53. \u53ef\u80fd\u5728\u6709\u591a\u79cd\u6d41\u4f53\u8f93\u5165/\u8f93\u51fa\u65f6\u4e0d\u592a\u597d\u7528,\u6bd4\u5982\u5355\u65b9\u5757\u5316\u5b66\u53cd\u5e94\u91dc."
                },
                {
                    "name": "\u6c2f\u952e\u65ad\u88c2(Fracture Chlorine)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2926.png",
                    "x": 552.0,
                    "y": 744.0,
                    "tooltip": "\u6c2f\u952e\u65ad\u88c2(Fracture Chlorine)",
                    "data": "\u6c1f\u79bb\u5b50\u5177\u6709\u66f4\u9ad8\u7684\u7535\u52a8\u52bf,\u6240\u4ee5\u5b83\u4f1a\u66ff\u6362\u6389\u9511\u5468\u56f4\u7684\u6c2f\u79bb\u5b50."
                },
                {
                    "name": "\u706b\u7bad\u76f8\u5173",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2645.png",
                    "x": 372.0,
                    "y": 300.0,
                    "tooltip": "\u706b\u7bad\u76f8\u5173",
                    "data": "\u592a\u68d2\u4e86! \u4f60\u5b8c\u6210\u4e86\u4f60\u7684\u706b\u7bad\u548c\u805a\u53d8\u53cd\u5e94\u5806! \u662f\u65f6\u5019\u83b7\u53d6\u4e00\u4e9b\u65b0\u77ff\u77f3\u4e86! (\u8fd9\u79cd\u4e8b\u60c5\u6c38\u4e0d\u8fc7\u65f6) \u4f60\u4e0d\u9700\u8981\u624b\u6301\u5b83\u4eec,\u6211\u53ea\u662f\u5c06\u65b0\u7ef4\u5ea6\u5217\u51fa.%n%n\u65b0\u7684\u661f\u7403\u6709\u571f\u536b\u4e8c\u3001\u5929\u536b\u4e94\u3001\u5929\u536b\u56db\u3001\u7f57\u65af128ba\u548c\u571f\u536b\u516d. \u5929\u536b\u4e94\u662f\u5929\u738b\u661f\u7684\u7b2c\u4e00\u5927\u536b\u661f,\u540c\u65f6\u5929\u536b\u56db\u662f\u6700\u540e\u4e00\u4e2a\u5927\u536b\u661f. \u571f\u536b\u4e8c\u662f\u571f\u661f\u7684\u7b2c\u4e8c\u536b\u661f,\u540c\u65f6\u571f\u536b\u516d\u662f\u5012\u6570\u7b2c\u4e8c\u4e2a\u536b\u661f. \u7f57\u65af128ba\u662f\u7f57\u65af128b\u7684\u536b\u661f,\u4f4d\u4e8e\u7f57\u65af128\u661f\u7cfb\u7684\u5357\u90e8.%n%n\u65b0\u77ff\u8109\u6709\u954d\u3001\u94a8\u548c\u9492\u77ff\u8109. \u65b0\u77ff\u77f3\u6709: \u94ec\u3001\u6df1\u6e0a\u94c1\u3001\u94f1\u3001\u91d1\u3001\u78c1\u94c1\u3001\u954d\u3001\u9507\u3001\u7845\u3001\u6697\u5f71\u94c1\u3001\u94a8\u548c\u9492\u77ff\u77f3.%n%n\u5728\u571f\u536b\u4e8c\u3001\u5929\u536b\u56db\u548c\u571f\u536b\u516d\u4e0a\u53ef\u4ee5\u901a\u8fc7\u8d2b\u7620\u77ff\u83b7\u5f97\u4e2d\u5b50\u7c89(T6\u706b\u7bad\u6240\u9700).%n%n\u522b\u5fd8\u4e86\u83b7\u53d6\u5404\u4e2a\u661f\u7403\u7684\u77f3\u5934(\u6253\u7c89\u79bb\u5fc3\u6709\u60ca\u559c).%n%n\u5728\u571f\u536b\u4e8c\u5730\u7262\u4e2d,\u4f60\u80fd\u83b7\u5f97T6\u706b\u7bad\u7684\u8bbe\u8ba1\u56fe.%n%n\u4f60\u73b0\u5728\u662f\u4e0d\u662f\u8981\u8bf4,\u5e76\u975e\u6240\u6709\u661f\u7403\u90fd\u503c\u5f97\u53bb? \u6ca1\u9519,\u53bb\u90a3\u4e9b\u4f60\u60f3\u53bb\u7684\u661f\u7403\u7136\u540e\u8df3\u8fc7\u90a3\u4e9b\u4f60\u4e0d\u60f3\u53bb\u7684. \u4f7f\u7528NEI\u627e\u51fa\u4f60\u9700\u8981\u53bb\u7684\u5730\u65b9."
                },
                {
                    "name": "\u83b7\u5f97\u94d5",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1213.png",
                    "x": 312.0,
                    "y": 300.0,
                    "tooltip": "\u83b7\u5f97\u94d5",
                    "data": "\u4e3a\u4e86\u5c06\u53cd\u5e94\u5806\u5347\u7ea7\u5230MK2,\u5236\u9020\u672b\u5f71\u91c7\u77f3\u573a\u3001T5\u706b\u7bad\u3001\u89e3\u9501ZPM\u8fd8\u6709\u522b\u7684\u4ec0\u4e48\u4e1c\u897f,\u94d5\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684. \u7b49\u4f60\u62e5\u6709\u4e86T5\u706b\u7bad,\u4f60\u5c31\u53ef\u4ee5\u5f00\u91c7\u4e00\u79cd\u975e\u5e38\u7a00\u6709\u7684\u77ff\u77f3,\u53ef\u4ee5\u76f4\u63a5\u4ece\u4e2d\u83b7\u5f97\u94d5,\u76f4\u5230\u4f60\u80fd\u901a\u8fc7\u805a\u53d8\u53cd\u5e94\u5806\u6279\u91cf\u5236\u9020\u94d5. \u4e0d\u8fc7\u8fd9\u79cd\u77ff\u77f3\u975e\u5e38\u7a00\u6709,\u6240\u4ee5\u82b1\u8fd9\u4e2a\u65f6\u95f4\u53bb\u5bfb\u627e\u5b83\u5f80\u5f80\u5f97\u4e0d\u507f\u5931."
                },
                {
                    "name": "\u94ed\u523b,\u975e\u5e38\u91cd\u8981",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2602.png",
                    "x": 648.0,
                    "y": 192.0,
                    "tooltip": "\u94ed\u523b,\u975e\u5e38\u91cd\u8981",
                    "data": "\u73b0\u5728,\u4f60\u5df2\u83b7\u5f97\u4e86\u5236\u9020\u538b\u5370\u7535\u8def\u7684\u6240\u6709\u6750\u6599,\u662f\u65f6\u5019\u5236\u9020\u5b83\u4eec\u4e86. \u4f60\u9700\u8981\u5c06\u6240\u9700\u538b\u5370\u7684\u7535\u8def\u677f\u5728\u9002\u5f53\u7b49\u7ea7\u7684\u98df\u6750\u5207\u7247\u673a\u4e2d\u5207\u7247,\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5de5\u4e1a\u5207\u5272\u673a\u7684\u5207\u7247\u673a\u6a21\u5f0f.%n%n\u53ea\u9700\u5c06\u538b\u5370\u7535\u8def\u653e\u7f6e\u5728\u7535\u8def\u88c5\u914d\u7ebf\u7684\u63a7\u5236\u5668\u65b9\u5757\u7684\u7269\u54c1\u69fd\u4e2d,\u7528\u8f6f\u9524\u5f00\u673a\u5373\u53ef\u94ed\u523b. \u4f7f\u7528\u4e09\u5f55\u4eea\u626b\u63cf\u63a7\u5236\u5668\u65b9\u5757\u53ef\u4ee5\u83b7\u77e5\u5df2\u7ecf\u94ed\u523b\u7684\u7535\u8def. \u5982\u679c\u4f60\u4e0d\u60f3\u9020\u592a\u591a\u6761\u7535\u8def\u88c5\u914d\u7ebf,\u6216\u8bb8\u624b\u52a8\u66ff\u6362\u63a7\u5236\u5668\u65b9\u5757\u662f\u4e2a\u53ef\u884c\u7684\u65b9\u6cd5...%n%n\u67d0\u4e9b\u7535\u8def\u677f\u6709\u4e24\u4e2a\u914d\u65b9,\u800c\u4f60\u53ea\u9700\u8981\u4e00\u53f0\u7535\u8def\u88c5\u914d\u7ebf\u5373\u53ef.%n%n\u7531\u4e8e\u77ff\u8f9e\u95ee\u9898,\u5728\u5de5\u4e1a\u5207\u5272\u673a\u5185\u5207\u5272LV\u6216HV\u7535\u8def\u677f\u53ef\u80fd\u4f1a\u51fa\u95ee\u9898,\u6240\u4ee5\u7528HV+\u98df\u6750\u5207\u7247\u673a\u5207\u5272\u5b83\u4eec\u5427."
                },
                {
                    "name": "Industrial Water Purification",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6215508413557630456.png",
                    "x": 216.0,
                    "y": 444.0,
                    "tooltip": "Industrial Water Purification",
                    "data": "For a while now, you have been able to get away with cutting and engraving your silicon circuit wafers with nothing but the bare metal of your machines. However, this can cause significant imperfections in the final wafer, so now that you are producing even more advanced circuitry such imperfections are no longer tolerable. \n\nWith the ability to make LuV components, you can now make the Water Purification Plant. This multiblock allows you to make purified water, which will be helpful in making wafers of increasing purity and perfection. For your current Naquadah-Doped Wafers, this is not yet necessary, but using purified water may significantly speed up the process, so it's definitely worth checking out.\n\nThe Water Purification Plant does not run recipes itself. Instead, it provides the core logistics for your water purification line to work. Around it you can build water purification units that link to the Water Purification Plant. The plant then provides power and maintenance to the different units, and synchronizes their recipe cycles."
                },
                {
                    "name": "\u9178\u4e2d\u4e4b\u738b",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2927.png",
                    "x": 552.0,
                    "y": 648.0,
                    "tooltip": "\u9178\u4e2d\u4e4b\u738b",
                    "data": "\u6c1f\u9511\u9178,\u76ee\u524d\u4e16\u754c\u4e0a\u6700\u5f3a\u7684\u9178. \u5b83\u51e0\u4e4e\u53ef\u4ee5\u6eb6\u89e3\u5730\u7403\u4e0a\u7684\u4efb\u4f55\u7269\u8d28,\u6240\u4ee5\u5b83\u662f\u6211\u4eec\u5904\u7406\u6c27\u5316\u7845\u5ca9\u6df7\u5408\u7269\u7c89\u7684\u6700\u4f73\u9009\u62e9.%n%n\u5f53\u7136,\u8fd8\u6709\u6c1f\u9511\u9178\u65e0\u6cd5\u5904\u7406\u7684\u4e1c\u897f,\u6bd4\u5982\"\u7a7a\u5355\u5143\". x)"
                },
                {
                    "name": "LuV\u7ec4\u88c5\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1722.png",
                    "x": 156.0,
                    "y": 276.0,
                    "tooltip": "LuV\u7ec4\u88c5\u673a",
                    "data": "IV\u592a\u9633\u80fd\u8986\u76d6\u677f\u548c\u5176\u4ed6\u9ad8\u7ea7\u7269\u54c1\u9700\u8981LuV\u7ec4\u88c5\u673a. \u8ba9\u6211\u4eec\u5236\u4f5c\u4e00\u4e2a."
                },
                {
                    "name": "LuV\u7535\u8def\u7ec4\u88c5\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1683.png",
                    "x": 396.0,
                    "y": 108.0,
                    "tooltip": "LuV\u7535\u8def\u7ec4\u88c5\u673a",
                    "data": "\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u4e86,\u7535\u8def\u677f\u7684\u5408\u6210\u8868\u597d\u50cf\u8d35\u4e866\u500d... \u9002\u7528\u4e8e\u9700\u8981LuV+\u7535\u538b\u7684\u7535\u8def\u677f. \u5982\u679c\u4f60\u4e0d\u60f3\u6d6a\u8d39\u5927\u91cf\u8d44\u6e90\u7684\u8bdd,\u5c31\u5f97\u5728\u7535\u8def\u88c5\u914d\u7ebf\u5408\u6210\u8fd9\u4e9b\u7535\u8def\u677f\u4e86. \u5f53\u7136,\u4f60\u7684\u7b2c\u4e00\u5757\u7535\u8def\u677f\u8fd8\u662f\u8981\u7528\u666e\u901a\u7535\u8def\u7ec4\u88c5\u673a\u5408\u6210.%n%n\u7b2c\u4e00\u5757\u7535\u8def\u677f\u5b8c\u6210\u540e,\u4f60\u5c31\u80fd\u5236\u4f5c\u76f8\u5e94\u7684\u538b\u5370\u7535\u8def,\u4f7f\u7528\u538b\u5370\u7535\u8def\u5c06\u7535\u8def\u88c5\u914d\u7ebf\u8bbe\u7f6e\u4e3a\u76f8\u5e94\u7535\u8def(\u552f\u4e00)\u4e13\u5c5e."
                },
                {
                    "name": "LuV\u80fd\u6e90\u4ed3",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2599.png",
                    "x": 156.0,
                    "y": 372.0,
                    "tooltip": "LuV\u80fd\u6e90\u4ed3",
                    "data": "\u60f3\u8981\u5347\u7ea7\u4f60\u7684\u591a\u65b9\u5757\u7ed3\u6784(\u7136\u540e\u5236\u4f5c\u805a\u53d8\u53cd\u5e94\u5806),\u4f60\u9700\u8981\u5236\u9020\u8fd9\u4e9b\u80fd\u6e90\u4ed3. \u4e3a\u4e86\u805a\u53d8,\u4f60\u9700\u8981\u6210\u5428\u7684\u6676\u5706,\u6240\u4ee5\u8981\u662f\u4f60\u7684\u94df\u4ea7\u7ebf\u8fd8\u6ca1\u642d\u597d\u7684\u8bdd\u53ef\u5f97\u6293\u7d27\u4e86.%n%n\u9700\u8981LuV\u5207\u5272\u673a,\u591a\u65b9\u5757\u4e5f\u884c."
                },
                {
                    "name": "LuV\u6fc0\u5149\u8680\u523b\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1689.png",
                    "x": 396.0,
                    "y": 192.0,
                    "tooltip": "LuV\u6fc0\u5149\u8680\u523b\u673a",
                    "data": "LuV\u6fc0\u5149\u8680\u523b\u673a\u662f\u540e\u671f\u7535\u8def\u751f\u4ea7\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206. \u4f60\u9700\u8981\u4e3a\u6676\u4f53\u7cfb\u5217\u7535\u8def\u677f\u6216\u8005\u4e4b\u540e\u7684\u6e7f\u4ef6\u7cfb\u5217\u7535\u8def\u677f\u5236\u9020\u6676\u4f53CPU.%n%n\u5982\u679c\u4f60\u62e5\u6709\u5927\u578b\u52a0\u5de5\u5382,\u90a3\u4e48\u4f60\u5c31\u80fd\u901a\u8fc7\u5347\u7ea7\u80fd\u6e90\u4ed3\u6765\u6ee1\u8db3\u6b64\u5408\u6210\u8981\u6c42."
                },
                {
                    "name": "LuV\u8d85\u5bfc(32,768 EU/t)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1711.png",
                    "x": 156.0,
                    "y": 828.0,
                    "tooltip": "LuV\u8d85\u5bfc(32,768 EU/t)",
                    "data": "\u65e0\u635f32768-EU-LuV\u5bfc\u7ebf\u600e\u4e48\u6837\uff1f Tetraindiumditindibariumtitaniumheheptacoppertetrakaidekaoxide(\u662f\u7684\u4f60\u6ca1\u6709\u770b\u9519,\u8fd9\u5c31\u662f\u8fd9\u79cd\u6750\u6599\u7684\u539f\u6587)\u662f\u4e00\u79cd\u8d85\u5bfc\u6750\u6599,\u53ef\u4ee5\u6beb\u65e0\u635f\u5931\u5730\u4f20\u8f93\u4f60\u7684\u80fd\u91cf. \u73b0\u5728\u6bcf\u4e2a\u7535\u538b\u90fd\u6709\u7ebf\u635f\u4e3a0\u7684\u8d85\u5bfc\u5bfc\u7ebf.%n%n\u5728LuV\u6405\u62cc\u673a\u4e2d\u6405\u62cc\u94df\u3001\u9521\u3001\u94a1\u3001\u949b\u3001\u94dc\u548c\u6c27.\u5236\u5f97\u7684\u8d85\u5bfc\u7c97\u80da\u7c89\u9700\u8981\u7528\u5e26\u6709\u7845\u5ca9\u7ebf\u5708\u7684\u5de5\u4e1a\u9ad8\u7089(EBF)\u70e7\u5236,\u518d\u7528\u771f\u7a7a\u51b7\u51bb\u673a\u6765\u51b7\u5374\u5b83. \u5236\u9020\u4e00\u4e9bLuV\u8d85\u5bfc\u7c97\u80da\u5bfc\u7ebf\u5e76\u4f7f\u7528\u7ec4\u88c5\u673a\u5c06\u8fd9\u4e9b\u5bfc\u7ebf\u4e0e\u6c26\u548c\u5fae\u578b\u672b\u5f71\u952d\u6d41\u4f53\u7ba1\u9053\u548cLuV\u6cf5\u7ec4\u5408\u5728\u4e00\u8d77,\u4f60\u5c31\u80fd\u83b7\u5f9732768-EU/t\u7684\u8d85\u5bfc\u5bfc\u7ebf."
                },
                {
                    "name": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1200.png",
                    "x": 288.0,
                    "y": 240.0,
                    "tooltip": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "data": "\u73b0\u5728,\u4f60\u5df2\u7ecf\u62e5\u6709\u4e86\u4e00\u4e2a\u805a\u53d8\u53cd\u5e94\u5806,\u662f\u65f6\u5019\u5229\u7528\u5b83\u8fdb\u884c\u53d1\u7535\u4e86.%n%n\u6700\u5bb9\u6613\u83b7\u5f97\u7684\u4ea7\u80fd\u7b49\u79bb\u5b50\u4f53\u5c31\u662f\u6c26\u7b49\u79bb\u5b50\u4f53\u4e86,\u867d\u7136\u7b80\u5355\u4f46\u5b83\u80fd\u63d0\u4f9b\u7684\u80fd\u91cf\u4e00\u6837\u4e0d\u5c11. \u6c18\u53ef\u4ee5\u4ece\u53ef\u518d\u751f\u7684\u6c34\u4e2d\u83b7\u5f97,\u6c26-3\u53ef\u4ee5\u4ece\u672b\u5730\u77f3\u4e2d\u83b7\u5f97.%n%n\u7136\u800c,\u6211\u4eec\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5c06\u7b49\u79bb\u5b50\u4f53\u4e2d\u7684\u80fd\u91cf\u8f6c\u6362\u6210EU\u91ca\u653e\u51fa\u6765. \u8981\u505a\u5230\u8fd9\u4e00\u70b9,\u4f60\u9700\u8981\u4e00\u53f0\u5927\u578b\u7b49\u79bb\u5b50\u6da1\u8f6e.\u8fd8\u9700\u8981\u4e00\u4e2a\u52a8\u529b\u4ed3\u8f93\u51fa\u80fd\u91cf,\u4f60\u53ef\u4ee5\u8c03\u6574\u4e0d\u540c\u7684\u52a8\u529b\u4ed3\u6765\u8c03\u6574\u8f93\u51fa\u529f\u7387.\u7528\u6c26\u7b49\u79bb\u5b50\u4f53\u8fdb\u884c\u53d1\u7535,\u90a3\u4e48\u4f60\u9700\u8981\u4e00\u4e2a\u4e0d\u4f4e\u4e8eLuV\u7684\u52a8\u529b\u4ed3[\u7f13\u51b2].%n%n\u53e6\u5916\u8fd8\u6709\u5355\u65b9\u5757\u7684\u7b49\u79bb\u5b50\u53d1\u7535\u673a,\u4e0d\u8fc7\u5b83\u4eec\u7684\u6548\u7387\u592a\u4f4e\u4e86(\u91ce\u5916\u91c7\u77ff\u5012\u662f\u4e0d\u9519)."
                },
                {
                    "name": "\u6700\u540e,\u5206\u5b50\u91cd\u7ec4\u4eea!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3077.png",
                    "x": 108.0,
                    "y": 372.0,
                    "tooltip": "\u6700\u540e,\u5206\u5b50\u91cd\u7ec4\u4eea!",
                    "data": "\u5982\u679c\u4f60\u5728\u8fdb\u5165LuV\u9636\u6bb5\u4e4b\u524d\u770b\u5230\u4e86\u8fd9\u4e2a\u4efb\u52a1,\u5e0c\u671b\u4e86\u89e3\u600e\u4e48\u5236\u9020\u9633\u5149\u5408\u91d1\u7684\u8bdd,\u8bf7\u56de\u5934\u67e5\u770bEV\u548cIV\u9636\u6bb5\u7684\u4efb\u52a1\u5427.%n%n\u662f\u7684,\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u8fd8\u6709\u70b9bug.."
                },
                {
                    "name": "\u66f4\u591a\u6c2f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2924.png",
                    "x": 384.0,
                    "y": 744.0,
                    "tooltip": "\u66f4\u591a\u6c2f",
                    "data": "\u4e3a\u4ec0\u4e48\u6211\u4e0d\u80fd\u4e00\u6b65\u83b7\u5f97\u5b83!"
                },
                {
                    "name": "\u7a81\u53d8\u4ee4\u4eba\u6109\u60a6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2680.png",
                    "x": 480.0,
                    "y": 252.0,
                    "tooltip": "\u7a81\u53d8\u4ee4\u4eba\u6109\u60a6",
                    "data": "\u5236\u4f5c\u6676\u4f53\u82af\u7247\u539f\u6599\u65f6,\u8981\u662f\u89c9\u5f97\u94d5\u8fd9\u4e2a\u914d\u65b9\u592a\u8d35\u4e86\u7684\u8bdd,\u4f60\u8fd8\u6709\u53e6\u5916\u4e24\u4e2a\u9009\u62e9: \u83cc\u6ce5\u548c\u8bf1\u53d8\u5242.%n%n\u8bf1\u53d8\u5242\u6bd4\u83cc\u6ce5\u9ad8\u5230\u4e0d\u77e5\u9053\u54ea\u91cc\u53bb\u4e86,\u4f46\u600e\u4e48\u83b7\u5f97\u5462?\u6211\u4f1a\u6559\u4f60\u7684.%n%n\u9996\u5148,\u5728\u706b\u661f\u6536\u96c6\u4e00\u4e9b\u83cc\u6ce5,\u5728\u917f\u9020\u5ba4\u4e2d\u914d\u5408U-238\u5c06\u5176\u5236\u6210\u5bcc\u96c6\u83cc\u6ce5. \u7136\u540e,\u5c06\u5176\u53d1\u9175\u83b7\u5f97\u53d1\u9175\u83cc\u6ce5. \u6700\u540e\u84b8\u998f\u83b7\u5f97\u8bf1\u53d8\u5242.%n%n\u4f46\u4e00\u6876\u5c31\u591f\u4e86\u5417?\u6050\u6015\u4e0d\u591f!\u4e0d\u8fc7\u53ef\u4ee5\u7528\u7ec6\u83cc\u57f9\u517b\u7f38\u5236\u9020\u66f4\u591a. \u5c06\u8bf1\u53d8\u5242\u914d\u5408\u795e\u79d8\u6c34\u6676\u7c89\u5236\u6210\u57f9\u517b\u76bf.\u4e0d\u8fc7\u51e0\u7387\u6781\u4f4e...\u6240\u4ee5\u4f60\u5f97\u505a\u597d\u5931\u8d25\u591a\u6b21\u7684\u51c6\u5907.%n%n\u5236\u6210\u57f9\u517b\u76bf\u540e\u5373\u53ef\u5c06\u5176\u653e\u5165\u57f9\u517b\u7f38\u63a7\u5236\u5668\u4e2d,\u4e0d\u4f1a\u6d88\u8017.\u8981\u6c42\u81f3\u5c11LuV\u7b49\u7ea7\u7684\u73bb\u7483\u3001\u949a\u6746\u63d0\u4f9b\u8f90\u5c04.%n%n\u83cc\u6ce5\u4e5f\u53ef\u4ee5\u7528\u57f9\u517b\u7f38\u5927\u91cf\u5408\u6210,\u800c\u4e14\u57f9\u517b\u76bf\u505a\u8d77\u6765\u7b80\u5355\u591a\u4e86.%n%n\u8bf1\u53d8\u5242\u4e5f\u7528\u4e8e\u57fa\u56e0\u5de5\u4e1a\u4e2d,\u6240\u4ee5\u8981\u662f\u4f60\u5bf9\u517b\u8702\u611f\u5174\u8da3\u7684\u8bdd,\u591a\u505a\u70b9\u5427."
                },
                {
                    "name": "\u795e\u79d8...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2609.png",
                    "x": 432.0,
                    "y": 300.0,
                    "tooltip": "\u795e\u79d8...",
                    "data": "\u5982\u679c\u60f3\u8981\u4e00\u4e9b\u8fd9\u79cd\u9ad8\u5ea6\u795e\u79d8\u7684\u6750\u6599,\u4f60\u9700\u8981\u524d\u5f80\u571f\u536b\u4e8c,\u6536\u96c6\u5230\u5904\u6563\u5e03\u7684\u4e00\u4e9b\u6c34\u6676\u5e76\u5c06\u5176\u6253\u788e. \u6216\u7528\u94f2\u5b50\u6536\u96c6\u4e00\u4e9b\u571f\u536b\u4e8c\u51b0\u7136\u540e\u4ece\u4e2d\u83b7\u53d6\u795e\u79d8\u6c34\u6676\u7c89. \u5982\u679c\u4f60\u9700\u8981\u795e\u79d8\u6c34\u6676\u788e\u7247\u7684\u8bdd,\u901a\u8fc7\u9ad8\u538b\u91dc\u5373\u53ef\u5c06\u7c89\u8fd8\u539f\u6210\u6676\u4f53."
                },
                {
                    "name": "\u7845\u5ca9\u5408\u91d1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2607.png",
                    "x": 240.0,
                    "y": 372.0,
                    "tooltip": "\u7845\u5ca9\u5408\u91d1",
                    "data": "\u5efa\u9020\u805a\u53d8\u53cd\u5e94\u5806\u9700\u8981\u4e00\u4e9b\u7845\u5ca9\u5408\u91d1.%n%n\u9996\u5148,\u767b\u9646\u6c34\u661f\u5e76\u6536\u96c6\u4e00\u4e9b\u6df1\u6e0a\u94c1\u8d2b\u7620\u77ff(\u5982\u679c\u4e4b\u524d\u6ca1\u6709\u83b7\u5f97\u7684\u8bdd),\u4ece\u4e2d\u83b7\u53d6\u4e09\u5143\u91d1\u5c5e.%n%n\u7845\u5ca9\u7ebf\u5708\u548cLuV\u80fd\u6e90\u4ed3\u4e5f\u662f\u5236\u9020\u7845\u5ca9\u5408\u91d1\u6240\u5fc5\u987b\u7684."
                },
                {
                    "name": "\u7845\u5ca9\u7c89",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2942.png",
                    "x": 528.0,
                    "y": 420.0,
                    "tooltip": "\u7845\u5ca9\u7c89",
                    "data": "\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u5904\u7406\u6c27\u5316\u7845\u5ca9,\u83b7\u53d6\u7845\u5ca9\u7c89."
                },
                {
                    "name": "\u7845\u5ca9\u952d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2943.png",
                    "x": 528.0,
                    "y": 456.0,
                    "tooltip": "\u7845\u5ca9\u952d",
                    "data": "\u5982\u679c\u60f3\u8981\u7845\u5ca9\u952d\u7684\u8bdd,\u53ef\u4ee5\u5c06\u5176\u4e0e\u78b3\u7c89\u4e00\u8d77\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u7194\u70bc."
                },
                {
                    "name": "\u4e2d\u548c\u53cd\u5e94",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2929.png",
                    "x": 384.0,
                    "y": 648.0,
                    "tooltip": "\u4e2d\u548c\u53cd\u5e94",
                    "data": "\u6eb6\u6db2\u76ee\u524d\u662f\u9178\u6027\u7684. \u9553\u4f1a\u57288<pH<10\u65f6\u6790\u51fa."
                },
                {
                    "name": "\u4e0d,\u5b83\u4e0d\u80fd\u4fee\u597d\u4f60\u7684\u8f66",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2677.png",
                    "x": 204.0,
                    "y": 240.0,
                    "tooltip": "\u4e0d,\u5b83\u4e0d\u80fd\u4fee\u597d\u4f60\u7684\u8f66",
                    "data": "\u81ea\u52a8\u7ef4\u62a4\u4ed3\u4f1a\u6d88\u8017\u4e00\u5b9a\u6750\u6599,\u81ea\u52a8\u89e3\u51b3\u51fa\u73b0\u7684\u7ef4\u62a4\u95ee\u9898. \u5efa\u8bae\u7ed9\u4f60\u7684\u8d85\u51c0\u95f4\u914d\u4e00\u4e2a\u8fd9\u4e2a,\u4f60\u4e00\u5b9a\u7531\u4e8e\u7ef4\u62a4\u95ee\u9898\u88ab\u541e\u8fc7\u4e1c\u897f\u5427. \u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u7528\u8702\u9e23\u5668\u914d\u5408\u8986\u76d6\u677f\u63d0\u9192\u4f60\u81ea\u5df1.%n%n\u8bd1\u8005\u6ce8: \u6211\u9009\u62e9\u591a\u65b9\u5757 :p"
                },
                {
                    "name": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76845\u548c6",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1490.png",
                    "x": 240.0,
                    "y": 108.0,
                    "tooltip": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76845\u548c6",
                    "data": "\u4e00\u4e9b\u673a\u5668\u9700\u8981\u53d1\u5c04\u5668\u548c\u4f20\u611f\u5668,\u6bd4\u5982\u8bf4\u626b\u63cf\u4eea\u6216\u8005\u7535\u8def\u7ec4\u88c5\u673a."
                },
                {
                    "name": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1489.png",
                    "x": 156.0,
                    "y": 192.0,
                    "tooltip": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "data": "\u6cf5,\u6d3b\u585e,\u4f20\u9001\u5e26\u548c\u673a\u68b0\u81c2\u662fLuV\u4e2d\u6700\u9700\u8981\u7684\u673a\u5668\u90e8\u4ef6.\u7528\u4f60\u7684\u88c5\u914d\u7ebf\u6bcf\u6837\u90fd\u505a\u4e00\u4e2a."
                },
                {
                    "name": "Ozonation",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9020589751289166951.png",
                    "x": 216.0,
                    "y": 612.0,
                    "tooltip": "Ozonation",
                    "data": "Want even more speed on your wafer processing? Using Grade 2 Purified Water, made by ozonation, you can now reduce processing time by 50%. To run this machine, you will need to make large amounts of Ozone Gas by bombarding air with a strong laser. If you haven't already, you should definitely make the Hyper-Intensity Laser Engraver multiblock to speed up this process.\n\n[note]This multiblock is very picky about where the ozone input hatch goes. If you can't figure out why it's not forming, chances are you forgot to place this hatch in the correct location. Use the hologram projector to see where it goes.[/note]"
                },
                {
                    "name": "P-507",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2935.png",
                    "x": 300.0,
                    "y": 552.0,
                    "tooltip": "P-507",
                    "data": "\u8fd9\u79cd\u6eb6\u5242\u5728\u7845\u5ca9\u5904\u7406\u7ebf\u4e2d\u53ef\u4ee5\u65e0\u635f\u5faa\u73af,\u6240\u4ee5\u4e0d\u7528\u4e13\u95e8\u4e3a\u5b83\u5efa\u4e00\u6761\u4ea7\u7ebf."
                },
                {
                    "name": "\u6dd8\u91d1\u662f\u7b28\u86cb\u624d\u4f1a\u5e72\u7684",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2071.png",
                    "x": 192.0,
                    "y": 108.0,
                    "tooltip": "\u6dd8\u91d1\u662f\u7b28\u86cb\u624d\u4f1a\u5e72\u7684",
                    "data": "\u5f53\u4f60\u5230\u8fbe\u4e86LuV\u9636\u6bb5,\u5c31\u53ef\u4ee5\u5236\u9020\u795e\u7ea7\u7684\u63a2\u77ff\u4eea--\u7535\u5b50\u63a2\u77ff\u4eea\u4e86.  \u8fd9\u53f0\u624b\u6301\u5f0f\u673a\u5668\u53ef\u4ee5\u63d0\u4f9b\u8303\u56f4\u5185\u77ff\u77f3\u7684\u8be6\u7ec6\u4fe1\u606f,\u8fd8\u53ef\u4ee5\u751f\u6210\u5730\u4e0b\u6d41\u4f53\u5730\u56fe-\u6bcf\u4e2a\u533a\u5757\u4e2d\u6709\u4f55\u79cd\u6d41\u4f53,\u6709\u591a\u5c11\u6d41\u4f53.%n%n\u8bd1\u8005\u6ce8: Shift+\u53f3\u952e\u5207\u6362\u6a21\u5f0f,\u56db\u79cd\u6a21\u5f0f\u4f9d\u6b21\u662f\u77ff\u77f3(Ore)\u3001\u77ff\u77f3(\u542b\u8d2b\u7620\u77ff\u77f3)(Ore-with-small)\u3001\u5730\u4e0b\u6d41\u4f53(Underground-Fluid)\u3001\u6c61\u67d3(Pollution).%n%n\u8bf7\u6ce8\u610f,\u63a2\u6d4b\u8303\u56f4\u53d6\u51b3\u4e8e\u7535\u538b\u7b49\u7ea7\u4e0e\u6750\u6599\u7b49\u7ea7(\u800c\u8010\u4e45\u5176\u5b9e\u65e0\u5173\u7d27\u8981). \u4f60\u53ef\u4ee5\u5728\u53f3\u4fa7\u5217\u8868\u4e2d\u9009\u62e9\u4e00\u79cd\u77ff\u7269\u6216\u6d41\u4f53,\u8fd9\u6837\u63a2\u77ff\u4eea\u5c31\u53ea\u4f1a\u663e\u793a\u9009\u4e2d\u7684\u77ff\u7269\u6216\u6d41\u4f53,\u4f60\u4e5f\u53ef\u4ee5\u53cc\u51fb\u53f3\u4fa7\u5217\u8868,\u5207\u6362\u4eae/\u6697\u6a21\u5f0f."
                },
                {
                    "name": "\u56de\u6536\u6c1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2923.png",
                    "x": 384.0,
                    "y": 504.0,
                    "tooltip": "\u56de\u6536\u6c1f",
                    "data": "\u6c1f\u662f\u6700\u91cd\u8981\u7684\u8d44\u6e90\u4e4b\u4e00. \u4f60\u53ef\u4ee5\u5728\u8fd9\u4e00\u6b65\u56de\u6536\u5927\u90e8\u5206\u7684\u6c1f."
                },
                {
                    "name": "\u56de\u6536\u9553",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2933.png",
                    "x": 384.0,
                    "y": 696.0,
                    "tooltip": "\u56de\u6536\u9553",
                    "data": "\u4f60\u6709\u4e09\u79cd\u9009\u62e9\u6765\u5904\u7406\u5b83.%n%n1) \u7535\u89e3.%n%n2) \u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u4e0e\u94a0\u53cd\u5e94.%n%n3) \u5728\u6405\u62cc\u673a\u4e2d\u4e0e\u78f7\u9178\u94df\u6df7\u5408."
                },
                {
                    "name": "\u56de\u6536\u949b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2932.png",
                    "x": 468.0,
                    "y": 696.0,
                    "tooltip": "\u56de\u6536\u949b",
                    "data": "\u81f3\u4e8e\u4e09\u6c1f\u5316\u949b,\u4f60\u53ef\u4ee5\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u5904\u7406\u5b83,\u4ee5\u56de\u6536\u949b\u548c\u6c22\u6c1f\u9178,\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u7535\u89e3."
                },
                {
                    "name": "\u56de\u6536\u5e9f\u6db2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2931.png",
                    "x": 336.0,
                    "y": 504.0,
                    "tooltip": "\u56de\u6536\u5e9f\u6db2",
                    "data": "'\u5e9f\u6db2'\u5728\u67d0\u4e9b\u65b9\u9762\u5176\u5b9e\u8fd8\u662f\u5f88\u6709\u7528\u7684,\u4f60\u53ef\u4ee5\u4ece\u4e2d\u83b7\u5f97\u4e00\u4e9b\u6709\u8da3\u7684\u4e1c\u897f."
                },
                {
                    "name": "Relentless Glue",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8274215243329909479.png",
                    "x": -60.0,
                    "y": 300.0,
                    "tooltip": "Relentless Glue",
                    "data": "Ethyl Cyanoacrylate, commonly known as Super Glue is the best glue there is. But with great power comes... great complexity. It's not needed now and probably for the next few tiers, but it will make your recipes more efficient and will be necessary in the lategame.\n\n[note]Technically this line is available in IV, but only optional. Show your true skills by searching the recipes in NEI yourself![/note]"
                },
                {
                    "name": "\u968f\u673a\u8fc7\u7a0b\u7edd\u5bf9\u662f\u8d85\u68d2\u7684\u6e38\u620f\u8bbe\u8ba1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2606.png",
                    "x": 648.0,
                    "y": 108.0,
                    "tooltip": "\u968f\u673a\u8fc7\u7a0b\u7edd\u5bf9\u662f\u8d85\u68d2\u7684\u6e38\u620f\u8bbe\u8ba1",
                    "data": "\u6536\u96c6\u5b8c\u6240\u6709\u6750\u6599\u540e,\u4f60\u9700\u8981\u4f7f\u7528\u6405\u62cc\u673a\u6765\u5236\u9020\u78c1\u5171\u632f\u77f3\u7c89\u548c\u7535\u8def\u5316\u5408\u7269MK3.%n%n\u5728\u51b2\u538b\u673a\u5e8a\u5185\u5c06\u8fd9\u4e9b\u7c89\u7ed3\u5408\u5236\u6210\u538b\u5370\u57fa\u677f\u539f\u6599.%n%n\u518d\u4f7f\u7528\u6d01\u51c0\u73af\u5883\u4e0b\u7684\u9ad8\u538b\u91dc\u914d\u5408\u710a\u9521\u5236\u4f5c\u51fa\u538b\u5370\u57fa\u677f. \u4e0d\u8fc7,\u6210\u529f\u7684\u51e0\u7387\u53ea\u670975\uff05,\u6240\u4ee5\u6211\u8bf7\u4f60\u6536\u96c6\u4e00\u4e9b\u989d\u5916\u7684\u6750\u6599. \u5c31\u7b97\u5269\u4e0b\u4e5f\u53ef\u4ee5\u7528\u4e8e\u4e0b\u6b21\u94ed\u523b."
                },
                {
                    "name": "\u5206\u79bb\u6eb6\u5242",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2925.png",
                    "x": 468.0,
                    "y": 744.0,
                    "tooltip": "\u5206\u79bb\u6eb6\u5242",
                    "data": "\u84b8\u998f\u4e94\u6c2f\u5316\u9511\u6eb6\u6db2\u4ee5\u83b7\u53d6\u7eaf\u51c0\u7684\u6db2\u6001\u4e94\u6c2f\u5316\u9511,\u5e76\u4e14\u4f60\u53ef\u4ee5\u56de\u6536\u6240\u6709\u4e59\u919a."
                },
                {
                    "name": "\u5206\u79bb",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2940.png",
                    "x": 468.0,
                    "y": 552.0,
                    "tooltip": "\u5206\u79bb",
                    "data": "\u5b83\u53c8\u56de\u6765\u4e86?!!!%n%n\u8bf7\u67e5\u770b\u591a\u65b9\u5757\u4efb\u52a1\u6765\u83b7\u5f97\u4e2d\u5b50\u6d3b\u5316\u5668\u548c\u7cbe\u5bc6\u7ec4\u88c5\u673a\u7684\u66f4\u591a\u4fe1\u606f."
                },
                {
                    "name": "\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u78452",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2944.png",
                    "x": 528.0,
                    "y": 492.0,
                    "tooltip": "\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u78452",
                    "data": "\u4f60\u8fd8\u53ef\u4ee5\u7528\u6c27\u5316\u7845\u5ca9\u7c89\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u76f4\u63a5\u751f\u4ea7\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u7845,\u6bd4\u7528\u7845\u5ca9\u952d\u8017\u65f6\u66f4\u77ed."
                },
                {
                    "name": "\u5f00\u59cb\u805a\u53d8",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1212.png",
                    "x": 240.0,
                    "y": 300.0,
                    "tooltip": "\u5f00\u59cb\u805a\u53d8",
                    "data": "\u73b0\u5728\u4f60\u5bf9\u7535\u529b\u7684\u9700\u6c42\u6b63\u5728\u5927\u5e45\u5ea6\u589e\u52a0,\u6240\u4ee5\u4f60\u9700\u8981\u4e00\u79cd\u66f4\u52a0\u5f3a\u5927\u7684\u53d1\u7535\u65b9\u5f0f. \u6e05\u6d01\u73af\u4fdd\u53ef\u6301\u7eed\u4ea7\u751f1A-ZPM\u7ea7\u7535\u6d41\u7684\u673a\u5668\u4f60\u6709\u4e24\u4e2a\u9009\u62e9,\u592a\u9633\u80fd\u548c\u6838\u805a\u53d8.%n%n\u5229\u7528\u592a\u9633\u80fd\u5f88\u7b80\u5355,\u592a\u9633\u80fd\u8986\u76d6\u677f\u53ef\u4ee5\u4ea7\u751f524288EU/t\u7684\u80fd\u91cf\u8f93\u51fa. \u4f46\u662f\u7ecf\u8fc7\u6b63\u786e\u914d\u7f6e\u7684\u6838\u805a\u53d8\u80fd\u591f\u8fbe\u5230\u5176\u8fd18\u500d\u7684\u80fd\u91cf\u4ea7\u51fa.(\u6700\u5173\u952e\u7684\u662f\u592a\u9633\u80fd\u7684\u9020\u4ef7\u5b9e\u5728\u662f\u4e27\u5fc3\u75c5\u72c2...)%n%n\u8981\u5236\u9020\u4f60\u7684\u7b2c\u4e00\u4e2a\u805a\u53d8\u53cd\u5e94\u5806,\u4f60\u9700\u8981\u4e00\u4e2a\u53cd\u5e94\u5806\u63a7\u5236\u7535\u8111,\u4e0d\u4f4e\u4e8eLuv\u7ea7\u522b\u76842-16\u4e2a\u8f93\u5165\u4ed3,1-16\u4e2a\u8f93\u51fa\u4ed3,\u548c16\u4e2a\u80fd\u6e90\u4ed3.\u7ed9\u6bcf\u4e2a\u80fd\u6e90\u4ed3\u63d0\u4f9b2048EU/t\u7684\u7535\u529b\u4f9b\u5e94,10M-EU\u7684\u50a8\u80fd.%n%n\u8fd9\u610f\u5473\u7740\u4f60\u5c31\u53ef\u4ee5\u751f\u4ea7\u6240\u6709\u4f4e\u4e8e32768EU/t\u5e76\u4e14\u542f\u52a8\u80fd\u91cf\u9700\u6c42\u5c11\u4e8e160M-EU\u7684\u914d\u65b9\u4e86. \u4f7f\u7528\u66f4\u591a\u7684\u8f93\u5165/\u8f93\u51fa\u4ed3\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4f7f\u7528\u66f4\u5c11\u7684LuV\u673a\u68b0\u65b9\u5757.\u4f46\u8fd9\u4e2a\u539f\u5219\u5728MK1\u7ea7\u522b\u7684\u805a\u53d8\u53cd\u5e94\u5806\u4e2d\u4e0d\u662f\u5f88\u91cd\u8981,\u7136\u800c\u8fd9\u5728\u65e5\u540e\u5bf9\u53cd\u5e94\u5806\u8fdb\u884c\u5347\u7ea7\u65f6\u5f88\u6709\u5e2e\u52a9."
                },
                {
                    "name": "\u592a\u9633\u805a\u53d8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3091.png",
                    "x": 336.0,
                    "y": 240.0,
                    "tooltip": "\u592a\u9633\u805a\u53d8",
                    "data": "\u6279\u91cf\u751f\u4ea7\u9633\u5149\u5316\u5408\u7269\u7684\u66ff\u4ee3\u65b9\u6848."
                },
                {
                    "name": "\u4f60\u89c9\u5f97\u53d1\u5c04\u5668\u5df2\u7ecf\u591f\u7cdf\u7cd5\u4e86\uff1f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1680.png",
                    "x": 240.0,
                    "y": 192.0,
                    "tooltip": "\u4f60\u89c9\u5f97\u53d1\u5c04\u5668\u5df2\u7ecf\u591f\u7cdf\u7cd5\u4e86\uff1f",
                    "data": "\u529b\u573a\u53d1\u751f\u5668\u662f\u540e\u671f\u5408\u6210\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206,\u662f\u7684,\u5b83\u4eec\u5236\u4f5c\u8d77\u6765\u603b\u662f\u5f88\u56f0\u96be."
                },
                {
                    "name": "\u7b2c6\u9636\u6bb5(LuV)",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1493.png",
                    "x": 36.0,
                    "y": 300.0,
                    "tooltip": "\u7b2c6\u9636\u6bb5(LuV)",
                    "data": "\u5728LuV\u9636\u6bb5,\u4f60\u9700\u8981\u9540\u94d1\u94af\u5236\u9020\u673a\u5668.(\u5efa\u8bae\u9524\u94c2\u7cfb\u5904\u7406\u4f5c\u8005Bartimaeusnek.)%n\u5efa\u8bae\u5230\u8bbf\u7684\u661f\u7403: \u6728\u536b\u4e00\u3001\u91d1\u661f\u548c\u6c34\u661f.%n\u5f53\u524d\u9636\u6bb5\u673a\u5668\u96f6\u4ef6\u9700\u8981\u88c5\u914d\u7ebf\u624d\u80fd\u5236\u4f5c-\u8bf7\u67e5\u770b\u591a\u65b9\u5757\u4efb\u52a1\u680f\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f."
                },
                {
                    "name": "\u6da1\u8f6e\u65f6\u95f4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1201.png",
                    "x": 288.0,
                    "y": 192.0,
                    "tooltip": "\u6da1\u8f6e\u65f6\u95f4",
                    "data": "\u4f60\u5d2d\u65b0\u7684\u7b49\u79bb\u5b50\u6da1\u8f6e\u9700\u8981\u4e00\u4e2a\u5168\u65b0\u7684\u8f6c\u5b50\u6765\u9a71\u52a8\u5b83.%n%n\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55GT\u6750\u6599\u5236\u9020\u6da1\u8f6e,\u4f46\u662f\u76ee\u524d\u6da1\u8f6e\u7684\u6700\u4f73\u6750\u6599\u662f\u666e\u901a\u9f99\u952d.  \u4e09\u949b\u6750\u8d28\u7684\u6da1\u8f6e\u5c06\u63d0\u4f9b\u6700\u5927\u7684EU/t\u8f93\u51fa. \u800c\u4e2d\u5b50\u6750\u8d28\u7684\u6da1\u8f6e\u5c06\u63d0\u4f9b\u6700\u9ad8\u7684\u8010\u4e45,\u4f46\u662f\u6548\u7387\u6bd4\u8f83\u4f4e,\u6574\u4f53\u7684\u6da1\u8f6e\u673a\u529f\u7387\u5c06\u6bd4\u8f83\u5c0f. \u89c9\u9192\u9f99\u952d\u6750\u8d28\u7684\u6da1\u8f6e\u5c06\u4f1a\u63d0\u4f9b\u6bd4\u8f83\u5e73\u8861\u7684\u5c5e\u6027.\u8bf7\u5148\u5728\u521b\u9020\u6a21\u5f0f\u6d4b\u8bd5!%n%n\u4f7f\u7528\u6da1\u8f6e\u65f6,\u9700\u8981\u6ce8\u610f\u6d41\u901f.\u800c\u6240\u8c13\u6700\u4f73\u6d41\u901f,\u5373\u6da1\u8f6e\u6240\u5217\u4e0d\u540c\u71c3\u6599\u7684\u6700\u4f73\u6d41\u91cf,\u9664\u4ee5\u5bf9\u5e94\u7684\u71c3\u503c.\u4f60\u8fd8\u53ef\u4ee5\u76f4\u63a5\u7528\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668(Large-Turbine-Calculator)[\u5728\u4e3b\u6570\u636e\u8868\u683c(spreadsheet)\u5185\u6709\u4e2a\u94fe\u63a5,\u6307\u5411discord\u4e2d\u7684\u8ba1\u7b97\u5668];\u8fd8\u53ef\u4ee5\u5728\u5927\u578b\u6da1\u8f6e\u8fd0\u884c\u65f6(\u53ea\u9700\u8981\u63d0\u4f9b\u5f88\u5c11\u7684\u71c3\u6599\u8ba9\u5b83\u52a8\u8d77\u6765\u5c31\u884c),\u76f4\u63a5\u626b\u63cf\u4e3b\u65b9\u5757,\u5373\u53ef\u83b7\u77e5\u8be5\u6da1\u8f6e\u8f6c\u5b50\u4f7f\u7528\u67d0\u79cd\u71c3\u6599\u5bf9\u5e94\u7684\u6700\u4f73\u6d41\u901f. \u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u6216\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,\u786e\u4fdd\u6240\u63d0\u4f9b\u7684\u71c3\u6599\u901f\u5ea6\u4e0e\u6da1\u8f6e\u7684\u6700\u4f73\u6d41\u901f\u5339\u914d,\u4ee5\u53d1\u6325\u6700\u9ad8\u7684\u71c3\u6599\u6548\u7387;\u4e0d\u8fc7\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u8d85\u51fa\u6b64\u6700\u4f73\u6d41\u901f,\u4ee5\u964d\u4f4e\u6548\u7387\u4e3a\u4ee3\u4ef7,\u83b7\u5f97\u66f4\u9ad8\u7684\u529f\u7387\u8f93\u51fa,\u800c\u84b8\u6c7d\u6da1\u8f6e\u5728\u8d85\u51fa\u6700\u4f73\u6d41\u901f\u540e\u7684\u6548\u7387\u4fdd\u6301\u662f\u6700\u5dee\u7684.\u5728HV\u9636\u6bb5,\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528IC2\u7684\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,HV\u9636\u6bb5\u4ee5\u540e\u5c31\u80fd\u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u8986\u76d6\u677f\u4e86.%n%n\u518d\u6b21\u91cd\u590d,\u5f53\u4f60\u4e3a\u6da1\u8f6e\u63d0\u4f9b\u8d85\u8fc7\u6700\u4f73\u6d41\u901f\u7684\u71c3\u6599\u65f6(\u79f0\u4e4b\u4e3a\u8d85\u8f7d\u72b6\u6001),\u6da1\u8f6e\u7684\u8f93\u51fa\u529f\u7387\u63d0\u9ad8,\u4f46\u71c3\u6599\u6548\u7387\u964d\u4f4e,\u540c\u65f6\u6700\u9ad8\u8f93\u51fa\u529f\u7387\u53d6\u51b3\u4e8e\u6da1\u8f6e\u8f6c\u5b50\u7c7b\u578b\u53ca\u5176\u8d85\u8f7d\u6548\u7387\u7b49\u7ea7.\u5bf9\u4e8e\u7b49\u79bb\u5b50\u6da1\u8f6e,\u8d85\u8f7d\u6548\u7387\u7b49\u7ea71\uff1a\u6700\u9ad8\u8d85\u8f7d250\uff05,\u8f93\u51fa\u529f\u7387158\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea72\uff1a\u6700\u9ad8\u8d85\u8f7d400\uff05,\u8f93\u51fa\u529f\u7387214\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea73\uff1a\u6700\u9ad8\u8d85\u8f7d550\uff05,\u8f93\u51fa\u529f\u7387301\uff05.\u8d8a\u63a5\u8fd1\u8d85\u8f7d\u6781\u9650,\u635f\u5931\u7684\u71c3\u6599\u6548\u7387\u8d8a\u591a.%n%n\u51b3\u5b9a\u6743\u5728\u4f60!%n%n\u8bd1\u8005\u6ce8\uff1a\u8ba1\u7b97\u6d41\u91cf\u65f6\u6ce8\u610f\u5355\u4f4d\u6362\u7b97,\u5e76\u5411\u4e0a\u53d6\u6574.%n%n\u5173\u4e8e\u805a\u53d8\u7684\u66f4\u591a\u989d\u5916\u4fe1\u606f,\u8bf7\u67e5\u770b\u65b0\u4efb\u52a1\u7ae0\u8282\"\u5f3a\u5927\u7684\u6838\u7269\u7406\"."
                },
                {
                    "name": "\u7ec8\u6781\u6676\u4f53\u7535\u8111",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1709.png",
                    "x": 648.0,
                    "y": 648.0,
                    "tooltip": "\u7ec8\u6781\u6676\u4f53\u7535\u8111",
                    "data": "\u7ec8\u6781\u6676\u4f53\u7535\u8111\u662fZPM\u7535\u8def\u677f."
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
                    "source": "\u81ea\u52a8\u6316\u6398",
                    "target": "\u901f\u5ea6\u5347\u7ea7"
                },
                {
                    "source": "\u52a0\u901fII",
                    "target": "\u52a0\u901fIII"
                },
                {
                    "source": "\u901f\u5ea6\u5347\u7ea7",
                    "target": "\u52a0\u901fII"
                },
                {
                    "source": "\u6676\u4f53\u82af\u7247",
                    "target": "\u8fdb\u9636\u8d34\u7247\u5143\u4ef6"
                },
                {
                    "source": "\u5206\u79bb",
                    "target": "\u5feb\u6210\u529f\u4e86"
                },
                {
                    "source": "\u4e2d\u548c\u53cd\u5e94",
                    "target": "\u53e6\u4e00\u79cd\u6eb6\u5242"
                },
                {
                    "source": "\u4e59\u919a\u51b2\u51fb(Ether Strike)!",
                    "target": "\u9511\u548c\u6c2f"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u88c5\u914d\u7ebf\u914d\u65b9\u66f4\u65b0"
                },
                {
                    "source": "QED(Quit Exhaling Dusts)",
                    "target": "\u81ea\u52a8\u6316\u6398"
                },
                {
                    "source": "\u83b7\u5f97\u94d5",
                    "target": "\u81ea\u52a8\u6316\u6398"
                },
                {
                    "source": "ASoC\u8fdb\u9636\u82af\u7247\u7ea7\u7cfb\u7edf",
                    "target": "\u66f4\u4fbf\u5b9c\u7684\u9ad8\u538b\u7535\u8def"
                },
                {
                    "source": "\u94ed\u523b,\u975e\u5e38\u91cd\u8981",
                    "target": "\u66f4\u4fbf\u5b9c\u7684\u9ad8\u538b\u7535\u8def"
                },
                {
                    "source": "Industrial Water Purification",
                    "target": "Clarifier"
                },
                {
                    "source": "LuV\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u6676\u4f53\u82af\u7247"
                },
                {
                    "source": "LuV\u6fc0\u5149\u8680\u523b\u673a",
                    "target": "\u6676\u4f53\u82af\u7247"
                },
                {
                    "source": "\u83b7\u5f97\u94d5",
                    "target": "\u6676\u4f53\u82af\u7247"
                },
                {
                    "source": "\u8fdb\u9636\u8d34\u7247\u5143\u4ef6",
                    "target": "\u6676\u4f53\u5904\u7406\u5668"
                },
                {
                    "source": "\u7eb3\u7c73\u6676\u5706\u548cCPU",
                    "target": "\u6676\u4f53\u5904\u7406\u5668"
                },
                {
                    "source": "\u94cc\u949b\u5408\u91d1",
                    "target": "\u6676\u4f53\u5904\u7406\u5668"
                },
                {
                    "source": "\u7cbe\u82f1\u7535\u8def\u677f",
                    "target": "\u6676\u4f53\u5904\u7406\u5668"
                },
                {
                    "source": "\u94ed\u523b,\u975e\u5e38\u91cd\u8981",
                    "target": "\u6676\u4f53\u5904\u7406\u5668"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668",
                    "target": "\u6676\u4f53\u5904\u7406\u5668\u96c6\u7fa4"
                },
                {
                    "source": "\u7ec8\u6781\u6676\u4f53\u7535\u8111",
                    "target": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "source": "LuV\u8d85\u5bfc(32,768 EU/t)",
                    "target": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "source": "\u9178\u4e2d\u4e4b\u738b",
                    "target": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u95f41"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u7cbe\u82f1\u7535\u8def\u677f"
                },
                {
                    "source": "\u7ea4\u7ef4\u5f3a\u5316\u7535\u8def\u57fa\u677f",
                    "target": "\u7cbe\u82f1\u7535\u8def\u677f"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u4e59\u919a\u51b2\u51fb(Ether Strike)!"
                },
                {
                    "source": "\u4e2d\u548c\u53cd\u5e94",
                    "target": "\u8403\u53d6"
                },
                {
                    "source": "P-507",
                    "target": "\u8403\u53d6"
                },
                {
                    "source": "\u83b7\u53d6\u4efb\u52a1",
                    "target": "\u83b7\u53d6\u7acb\u65b9\u6c27\u5316\u9506"
                },
                {
                    "source": "\u83b7\u53d6\u4efb\u52a1",
                    "target": "\u83b7\u53d6\u5807\u4e91\u77f3"
                },
                {
                    "source": "\u83b7\u53d6\u4efb\u52a1",
                    "target": "\u83b7\u53d6\u78b2"
                },
                {
                    "source": "LuV\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u83b7\u53d6\u4efb\u52a1"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76845\u548c6",
                    "target": "\u53cd\u9b54\u6cd5\u8005\u7684\u6d41\u4f53\u4f20\u9001"
                },
                {
                    "source": "\u5206\u79bb\u6eb6\u5242",
                    "target": "\u6c2f\u952e\u65ad\u88c2(Fracture Chlorine)"
                },
                {
                    "source": "\u83b7\u5f97\u94d5",
                    "target": "\u706b\u7bad\u76f8\u5173"
                },
                {
                    "source": "5\u9636\u706b\u7bad",
                    "target": "\u706b\u7bad\u76f8\u5173"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u83b7\u5f97\u94d5"
                },
                {
                    "source": "\u968f\u673a\u8fc7\u7a0b\u7edd\u5bf9\u662f\u8d85\u68d2\u7684\u6e38\u620f\u8bbe\u8ba1",
                    "target": "\u94ed\u523b,\u975e\u5e38\u91cd\u8981"
                },
                {
                    "source": "LuV\u80fd\u6e90\u4ed3",
                    "target": "Industrial Water Purification"
                },
                {
                    "source": "\u6c2f\u952e\u65ad\u88c2(Fracture Chlorine)",
                    "target": "\u9178\u4e2d\u4e4b\u738b"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "target": "LuV\u7ec4\u88c5\u673a"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76845\u548c6",
                    "target": "LuV\u7535\u8def\u7ec4\u88c5\u673a"
                },
                {
                    "source": "LuV\u7ec4\u88c5\u673a",
                    "target": "LuV\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "LuV\u8d85\u5bfc(32,768 EU/t)",
                    "target": "LuV\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76845\u548c6",
                    "target": "LuV\u6fc0\u5149\u8680\u523b\u673a"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "LuV\u8d85\u5bfc(32,768 EU/t)"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535"
                },
                {
                    "source": "LuV\u80fd\u6e90\u4ed3",
                    "target": "\u6700\u540e,\u5206\u5b50\u91cd\u7ec4\u4eea!"
                },
                {
                    "source": "\u9511\u548c\u6c2f",
                    "target": "\u66f4\u591a\u6c2f"
                },
                {
                    "source": "\u7ec6\u83cc\u57f9\u517b\u7f38",
                    "target": "\u7a81\u53d8\u4ee4\u4eba\u6109\u60a6"
                },
                {
                    "source": "\u795e\u79d8...",
                    "target": "\u7a81\u53d8\u4ee4\u4eba\u6109\u60a6"
                },
                {
                    "source": "\u751f\u7269\u5b9e\u9a8c\u5ba4",
                    "target": "\u7a81\u53d8\u4ee4\u4eba\u6109\u60a6"
                },
                {
                    "source": "\u6676\u4f53\u82af\u7247",
                    "target": "\u7a81\u53d8\u4ee4\u4eba\u6109\u60a6"
                },
                {
                    "source": "\u83cc\u6ce5",
                    "target": "\u7a81\u53d8\u4ee4\u4eba\u6109\u60a6"
                },
                {
                    "source": "\u706b\u7bad\u76f8\u5173",
                    "target": "\u795e\u79d8..."
                },
                {
                    "source": "5\u9636\u706b\u7bad",
                    "target": "\u795e\u79d8..."
                },
                {
                    "source": "LuV\u80fd\u6e90\u4ed3",
                    "target": "\u7845\u5ca9\u5408\u91d1"
                },
                {
                    "source": "\u5347\u7ea7\u7845\u5ca9\u7ebf\u5708",
                    "target": "\u7845\u5ca9\u5408\u91d1"
                },
                {
                    "source": "\u5feb\u6210\u529f\u4e86",
                    "target": "\u7845\u5ca9\u5408\u91d1"
                },
                {
                    "source": "\u5feb\u6210\u529f\u4e86",
                    "target": "\u7845\u5ca9\u7c89"
                },
                {
                    "source": "\u5feb\u6210\u529f\u4e86",
                    "target": "\u7845\u5ca9\u952d"
                },
                {
                    "source": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u95f41",
                    "target": "\u4e2d\u548c\u53cd\u5e94"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "target": "\u4e0d,\u5b83\u4e0d\u80fd\u4fee\u597d\u4f60\u7684\u8f66"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "target": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76845\u548c6"
                },
                {
                    "source": "HSS-S",
                    "target": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4"
                },
                {
                    "source": "\u948c\u94f1\u5408\u91d1?",
                    "target": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4"
                },
                {
                    "source": "Clarifier",
                    "target": "Ozonation"
                },
                {
                    "source": "\u53e6\u4e00\u79cd\u6eb6\u5242",
                    "target": "P-507"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76845\u548c6",
                    "target": "\u6dd8\u91d1\u662f\u7b28\u86cb\u624d\u4f1a\u5e72\u7684"
                },
                {
                    "source": "\u8403\u53d6",
                    "target": "\u56de\u6536\u6c1f"
                },
                {
                    "source": "\u4e2d\u548c\u53cd\u5e94",
                    "target": "\u56de\u6536\u9553"
                },
                {
                    "source": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u95f41",
                    "target": "\u56de\u6536\u949b"
                },
                {
                    "source": "\u56de\u6536\u6c1f",
                    "target": "\u56de\u6536\u5e9f\u6db2"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "Relentless Glue"
                },
                {
                    "source": "\u83b7\u53d6\u78b2",
                    "target": "\u968f\u673a\u8fc7\u7a0b\u7edd\u5bf9\u662f\u8d85\u68d2\u7684\u6e38\u620f\u8bbe\u8ba1"
                },
                {
                    "source": "\u83b7\u53d6\u7acb\u65b9\u6c27\u5316\u9506",
                    "target": "\u968f\u673a\u8fc7\u7a0b\u7edd\u5bf9\u662f\u8d85\u68d2\u7684\u6e38\u620f\u8bbe\u8ba1"
                },
                {
                    "source": "\u83b7\u53d6\u5807\u4e91\u77f3",
                    "target": "\u968f\u673a\u8fc7\u7a0b\u7edd\u5bf9\u662f\u8d85\u68d2\u7684\u6e38\u620f\u8bbe\u8ba1"
                },
                {
                    "source": "\u66f4\u591a\u6c2f",
                    "target": "\u5206\u79bb\u6eb6\u5242"
                },
                {
                    "source": "\u8403\u53d6",
                    "target": "\u5206\u79bb"
                },
                {
                    "source": "\u7cbe\u82f1\u7535\u8def\u677f",
                    "target": "\u5206\u79bb"
                },
                {
                    "source": "\u4e2d\u5b50\u6d3b\u5316\u5668",
                    "target": "\u5206\u79bb"
                },
                {
                    "source": "\u5feb\u6210\u529f\u4e86",
                    "target": "\u7845\u5ca9\u63ba\u6742\u7684\u5355\u6676\u78452"
                },
                {
                    "source": "\u4f60\u89c9\u5f97\u53d1\u5c04\u5668\u5df2\u7ecf\u591f\u7cdf\u7cd5\u4e86\uff1f",
                    "target": "\u5f00\u59cb\u805a\u53d8"
                },
                {
                    "source": "\u7845\u5ca9\u5408\u91d1",
                    "target": "\u5f00\u59cb\u805a\u53d8"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u592a\u9633\u805a\u53d8"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76845\u548c6",
                    "target": "\u4f60\u89c9\u5f97\u53d1\u5c04\u5668\u5df2\u7ecf\u591f\u7cdf\u7cd5\u4e86\uff1f"
                },
                {
                    "source": "\u88c5\u914d\u7ebf",
                    "target": "\u7b2c6\u9636\u6bb5(LuV)"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u7b2c6\u9636\u6bb5(LuV)"
                },
                {
                    "source": "\u9540\u94d1\u94af",
                    "target": "\u7b2c6\u9636\u6bb5(LuV)"
                },
                {
                    "source": "\u7ee7\u7eed\u710a\u63a5!",
                    "target": "\u7b2c6\u9636\u6bb5(LuV)"
                },
                {
                    "source": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u7b2c6\u9636\u6bb5(LuV)"
                },
                {
                    "source": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "target": "\u6da1\u8f6e\u65f6\u95f4"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668\u96c6\u7fa4",
                    "target": "\u7ec8\u6781\u6676\u4f53\u7535\u8111"
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
    