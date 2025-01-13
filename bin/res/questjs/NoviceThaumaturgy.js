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
                    "name": "\u4e09\u52a0\u56db,\u518d\u5e26\u4e0a\u4e8c...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u672f\u8ba1\u7b97\u5668.png",
                    "x": 828.0,
                    "y": 60.0,
                    "tooltip": "\u5728\u6ce8\u9b54\u7684\u65f6\u5019,\u8981\u662f\u80fd\u77e5\u9053\u51c6\u786e\u7a33\u5b9a\u5ea6\u5c31\u597d\u4e86. \u5f53\u4f60\u5230\u8fbeHV\u540e,\u4f60\u5c31\u53ef\u4ee5\u5236\u4f5c\u5965\u672f\u8ba1\u7b97\u5668\u4e86,\u7528\u5b83\u53ef\u4ee5\u8ffd\u8e2a\u4f60<br/>\u7684\u6ce8\u9b54.\u8fd9\u5c31\u610f\u5473\u7740\u6ce8\u9b54\u767e\u5206\u4e4b\u767e\u5b89\u5168,\u5bf9\u5427??"
                },
                {
                    "name": "\u66f4\u597d\u7684\u6d41\u4f53\u7ba1\u9053",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7c97\u9752\u94dc\u5408\u91d1\u6d41\u4f53\u7ba1\u9053.png",
                    "x": 60.0,
                    "y": 240.0,
                    "tooltip": "\u65e2\u7136\u4f60\u6709\u4e86\u94c5,\u4f60\u5c31\u53ef\u4ee5\u628a\u4f60\u7684\u9752\u94dc\u6d41\u4f53\u7ba1\u9053\u6362\u6210\u5177\u6709\u66f4\u9ad8\u5bb9\u91cf\u7684\u7c97\u9752\u94dc\u5408\u91d1\u6d41\u4f53\u7ba1\u9053\u4e86."
                },
                {
                    "name": "Adding More Funtions",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u949d\u5316\u7ea2\u6676.png",
                    "x": 396.0,
                    "y": -36.0,
                    "tooltip": "One such improvement is the Advanced Redcrystal.\n\n<br/>It allows you to set a threshold with your wand to<br/> define how strong a signal needs to be in order t<br/>o pass through. This can come in handy when checki<br/>ng fill level of tanks or power storage.\n\n[note]On<br/>e caveat for redstone experts: The Advanced Redcry<br/>stal checks the signal strength in the block it is<br/> in, not in the previous block like a comparator w<br/>ould.[/note]"
                },
                {
                    "name": "\u4e00\u4e2a\u66f4\"\u4f18\u79c0\"\u7684\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5b8f\u4f1f\u4e4b\u6728\u6756\u67c4.png",
                    "x": 588.0,
                    "y": 252.0,
                    "tooltip": "\u5728\u4f60\u627e\u5bfb\u548c\u5f00\u91c7\u8574\u9b54\u77f3\u7684\u65f6\u5019\u4f60\u6709\u4e00\u4e2a\u60f3\u6cd5,\u5982\u4f55\u771f\u6b63\u4f7f\u7528\u5b8f\u4f1f\u4e4b\u6728\u6765\u5236\u4f5c\u4e00\u6839\u65b0\u7684\u6cd5\u6756.\u5b9e\u9645\u4e0a\u8fd9\u5f88\u7b80\u5355,\u4f46\u662f<br/>\u8fc7\u53bb\u4f60\u7f3a\u5c11\u4e00\u4e9b\u5f88\u91cd\u8981\u7684\u4e1c\u897f\u2014\u2014VIS! \u5728\u5236\u4f5c\u5b8f\u4f1f\u4e4b\u6728\u6756\u67c4\u7684\u8fc7\u7a0b\u4e2d\u9700\u8981\u4f7f\u7528VIS\u7684\u529b\u91cf\u6765\u4fdd\u8bc1\u8fd9\u795e\u5947\u7684<br/>\u6728\u5934\u4e0d\u4f1a\u5931\u53bb\u5b83\u5e94\u6709\u7684\u529b\u91cf!"
                },
                {
                    "name": "Alleviating Warp",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6cbb\u6108\u82b1\u79cd\u5b50\u56ca.png",
                    "x": 300.0,
                    "y": -36.0,
                    "tooltip": "When you get poisoned or withered a bit of milk so<br/>lves the problem. Why not create something akin to<br/> milk, but for Warp effects?\n\nBriar gives a bit of<br/> an answer to that. These two block tall plants, w<br/>hich require good light to grow, will produce Bria<br/>r Seed Bags when harvested. Those can be combined <br/>with sugar and a suitable container in an Arcane W<br/>orkbench to create Rosehip Syrup.\n\nRosehip Syrup s<br/>tacks up to 16 and can be used the same as milk, a<br/>lso removing some (though not all) Warp effects as<br/> well as Flux Flue and Flux Phage.\n\nThe plant has <br/>a strange life cycle where the seed pods will firs<br/>t appear as yellow dots, turn pink as they start t<br/>o mature, then \u00a7odisappear\u00a7r, only to return fully<br/> matured. Still, if it works, it works."
                },
                {
                    "name": "\u66f4\u5f3a\u5927\u7684\u529b\u91cf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5deb\u5996\u4e4b\u9aa8.png",
                    "x": 588.0,
                    "y": 204.0,
                    "tooltip": "\u5a1c\u8fe6\u7684\u529b\u91cf\u5f88\u5f31,\u4f7f\u7528\u5a1c\u8fe6\u9cde\u7247\u5236\u9020\u7684\u6cd5\u6756\u4ec5\u80fd\u4fdd\u5b58\u6709\u9650\u7684\"VIS\".\u4f60\u9700\u8981\u4e00\u4e2a\u66f4\u597d\u3001\u66f4\u5f3a\u5927\u7684\u5bb9\u5668\u6765\u8ba9\u4f60\u7684<br/>\u6cd5\u6756\u50a8\u5b58\u66f4\u591a\u7684\"VIS\".\u4f60\u542c\u8bf4\u8fc7\u66ae\u8272\u68ee\u6797\u90aa\u6076\u7684\u5deb\u5996\u7684\u4f20\u8bf4\u4e48\uff1f\u4e5f\u8bb8...\u4ed6\u6709\u4e00\u4e9b\u4e1c\u897f\u662f\u4f60\u60f3\u8981\u7684."
                },
                {
                    "name": "\u706b\u628a\u7684\u4ee3\u66ff\u54c1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u95ea\u8000\u4e4b\u5149.png",
                    "x": 492.0,
                    "y": 60.0,
                    "tooltip": "\u8fd8\u53ef\u4ee5\u66ff\u4ee3\u5ca9\u6d46!\u5b83\u53ef\u662f\u5f88\u597d\u7684\u9b54\u6cd5\u70ed/\u5149\u6e90.\u4e5f\u53ef\u7528\u4e8e\u5769\u57da\u4e0b\u65b9\u4f5c\u4e3a\u70ed\u6e90! \u4e0d\u8fc7\u5deb\u672f\u7684\u5769\u57da\u53ef\u4e0d\u8ba4\u8fd9\u4e2a. :<br/>("
                },
                {
                    "name": "\u6709\u7528\u7684\u690d\u7269",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5f69\u8679\u4ed9\u4eba\u638c.png",
                    "x": 348.0,
                    "y": 12.0,
                    "tooltip": "\u4e00\u822c\u7684\u690d\u7269\u90fd\u662f\u7528\u6765\u5236\u4f5c\u98df\u7269\u7684.\u4f46\u662f\u4f60\u60f3\u77e5\u9053\u662f\u5426\u80fd\u5f97\u5230\u4e00\u4e9b\"\u66f4\u52a0\u7279\u6b8a\"\u7684\u690d\u7269..."
                },
                {
                    "name": "A Pechuliar Merchant",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91d1\u5e01.png",
                    "x": 156.0,
                    "y": 108.0,
                    "tooltip": "During your travels, you've heard about a forest f<br/>illed to the brim with magic. In that forest, ther<br/>e is a rumor about an interesting little fellow wh<br/>o can trade magical artifacts, including infused s<br/>hards! Supposedly, they scour the world for gems a<br/>nd gold, but are cold to wanderers who have no val<br/>uables to their name.\n \nYou wonder if you can find<br/> this merchant and obtain their wares. If only the<br/>re was a tool that could help find this... \u00a75\u00a7o\"Ma<br/>gical Forest\"\u00a7f\u00a7r.\n\n[note]Note: This quest accepts<br/> meeting any type of Pech, not just Pech Foragers.<br/>[/note]"
                },
                {
                    "name": "\u5f00\u91c7\u963f\u8fea\u7279\u548c\u94b4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u94c1\u6728\u9550.png",
                    "x": 132.0,
                    "y": 72.0,
                    "tooltip": "\u94c1\u6728\u6bd4\u4f60\u60f3\u8c61\u7684\u8fd8\u8981\u575a\u56fa\u8010\u7528.\u7528\u5b83\u5236\u4f5c\u7684\u5de5\u5177\u548c\u88c5\u7532\u6709\u4f18\u8d8a\u7684\u6027\u80fd.\u7528\u5b83\u5236\u4f5c\u9550,\u5f00\u91c7\u7b49\u7ea7\u80fd\u8fbe\u5230\u94b4,\u8fd9\u610f\u5473\u7740<br/>\u4f60\u53ef\u4ee5\u4e0d\u7528\u5de5\u4e1a\u9ad8\u7089\u4e5f\u80fd\u83b7\u5f97\u963f\u8fea\u7279\u548c\u94b4."
                },
                {
                    "name": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5965\u672f\u5de5\u4f5c\u53f0.png",
                    "x": 408.0,
                    "y": 204.0,
                    "tooltip": "\u73b0\u5728\u4f60\u9700\u8981\u4e00\u4e2a\u53f0\u5b50,\u53ef\u4ee5\u5728\u5176\u4e0a\u5236\u9020\u9b54\u6cd5\u7269\u54c1.\u5b83\u53ef\u80fd\u4e5f\u662f\u4e00\u4e2a\u5c0f\u5c0f\u7684\u9b54\u6cd5\u7269\u54c1. \u8ba9\u6211\u4eec\u6765\u770b\u770b\u4e66\u4e0a\u662f\u600e\u4e48\u8bf4<br/>\u7684.\u6216\u8bb8\u6211\u9700\u8981\u8d81\u6b64\u673a\u4f1a,\u597d\u597d\u7814\u8bfb\u4e00\u4e0b\u9b54\u5bfc\u624b\u518c,\u4e86\u89e3\u90a3\u4e9b\u672a\u77e5\u7684\u77e5\u8bc6,\u800c\u4e0d\u662f\u5728Discord\u4e0a\u4e1c\u95ee\u897f\u95ee\u663e<br/>\u5f97\u50cf\u4e00\u4e2a\u667a\u8005."
                },
                {
                    "name": "\u5e73\u8861\u788e\u7247\u548c\u4e16\u754c\u76d0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5e73\u8861\u788e\u7247.png",
                    "x": 348.0,
                    "y": 108.0,
                    "tooltip": "\u5728\u795e\u79d8\u5769\u57da\u4e2d\u628a6\u4e2d\u57fa\u672c\u5143\u7d20\u548c\u5143\u7d20\u788e\u7247\u6405\u62cc\u5728\u4e00\u8d77,\u4f60\u5c31\u4f1a\u5f97\u5230\u5e73\u8861\u788e\u7247.\u5c06\u5e73\u8861\u788e\u7247\u78e8\u788e\u540e\u4f60\u53ef\u4ee5\u5f97\u5230\"\u4e16\u754c<br/>\u76d0\",\u8fd9\u7edd\u5bf9\u662f\u5f88\u91cd\u8981\u7684\u4e00\u79cd\u7269\u8d28,\u76f8\u4fe1\u6211!"
                },
                {
                    "name": "\u66f4\u597d\u7684\u87ba\u4e1d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4e0d\u9508\u94a2\u87ba\u4e1d.png",
                    "x": 588.0,
                    "y": 300.0,
                    "tooltip": "\u5f88\u4e0d\u5e78,\u4f60\u7684\u94dd\u87ba\u4e1d\u5df2\u7ecf\u4e0d\u80fd\u56fa\u5b9a\u5b8f\u4f1f\u4e4b\u6728\u6728\u68cd\u4e86.\u4e0d\u77e5\u4e3a\u4ec0\u4e48,\u5b8f\u4f1f\u4e4b\u6728\u6728\u68cd\u6709\u4e00\u79cd\u795e\u79d8\u7684\u529b\u91cf\u5728\u6392\u65a5\u7740\u94dd\u87ba\u4e1d<br/>.\u4e0d\u8fc7\u5e78\u8fd0\u7684\u662f,\u4f60\u6709\u4e00\u4e2a\u9ad8\u7089,\u53ef\u4ee5\u5236\u4f5c\u51fa\u6bd4\u94dd\u66f4\u597d\u7684\u91d1\u5c5e\u4e86. \u5feb\u53bb\u8bd5\u4e00\u8bd5."
                },
                {
                    "name": "\u5495\u565c...\u5495\u565c...\u5495\u565c...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u917f\u9020\u53f0.png",
                    "x": 348.0,
                    "y": 252.0,
                    "tooltip": "\u917f\u9020\u53f0\u53ef\u4ee5\u917f\u9020\u5404\u79cd\u5404\u6837\u7684\u836f\u6c34,\u6bd4\u5982\u8bf4\u591c\u89c6\u3001\u6cbb\u7597\u3001\u6025\u901f\u4ee5\u53ca\u8df3\u8dc3.\u4e5f\u53ef\u4ee5\u5236\u9020\u4e00\u4e9b\u653b\u51fb\u6027\u836f\u5242\u6216\u8005\u55b7\u6e85\u578b\u836f\u6c34<br/>. \u917f\u9020\u53f0\u540c\u65f6\u8fd8\u662f\u673a\u5668\u917f\u9020\u5ba4\u7684\u539f\u6750\u6599\u4e4b\u4e00.\u53ea\u8981\u6709\u6700\u57fa\u7840\u7684\u6cd5\u6756\u5c31\u53ef\u4ee5\u5236\u9020\u51fa\u917f\u9020\u53f0.\u5177\u4f53\u7684\u5408\u6210\u8868\u53ef\u4ee5\u5728\u9b54<br/>\u5bfc\u624b\u518c\u4e2d\u7684GTNH\u9875\u9762\u627e\u5230."
                },
                {
                    "name": "\u9774\u5b50\u662f\u7528\u6765\u8d70\u8def\u7684",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65c5\u884c\u8005\u4e4b\u9774.png",
                    "x": 732.0,
                    "y": 60.0,
                    "tooltip": "\u4e5f\u7528\u6765\u6e38\u6cf3...\u5728\u73af\u6e38\u4e16\u754c\u65f6,\u8fd9\u4e9b\u65c5\u884c\u8005\u4e4b\u9774\u4f1a\u8ba9\u4f60\u5feb\u51fa\u6b8b\u5f71.\u60f3\u8981\u5236\u4f5c\u5b83\u4eec,\u4f60\u5f97\u5148\u7814\u7a76\u7814\u7a76\u6ce8\u9b54.\u8fd8\u6709\u7535<br/>\u5b50\u7248\u672c,\u62e5\u6709\u66f4\u9ad8\u7684\u9b54\u529b\u51cf\u514d,\u8bf7\u67e5\u9605'\u7535\u5b50\u9b54\u6cd5\u5de5\u5177'\u7ae0\u8282."
                },
                {
                    "name": "\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u8111\u5b50",
                    "symbolSize": 31.200000000000003,
                    "x": 444.0,
                    "y": 12.0,
                    "tooltip": "\u81ea\u52a8\u5316\u9b54\u6cd5\u975e\u5e38\u5de7\u5999,\u53ea\u6709\"\u806a\u660e\u7684\"\u6cd5\u5e08\u624d\u9700\u8981\u7814\u7a76\u5b83.\u5236\u4f5c\u4e00\u4e9b\u6c34\u6676\u4e4b\u8111\u5e76\u626b\u63cf\u5b83\u4eec,\u4ee5\u89e3\u9501\u4e0b\u4e00\u9636\u6bb5.\u4f60\u4f1a<br/>\u7528\u5230\u50f5\u5c38\u4e4b\u8111,\u901a\u5e38\u4ece\u51f6\u9669\u8282\u70b9\u5237\u51fa\u7684\u5371\u9669\u7684\u7ea2\u773c\u5de8\u4eba\u50f5\u5c38\u8eab\u4e0a\u6536\u96c6\u800c\u6765.\u8bd1\u8005\u6ce8:\u539f\u6807\u9898\u4e3a\"BRRRRAAA<br/>AAAAIIIIIIINNNNNNNSSSSS\"."
                },
                {
                    "name": "\u4eba\u9760\u8863\u88c5...\u5deb\u5e08\u4e5f\u4e00\u6837",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7eba\u8f66.png",
                    "x": 444.0,
                    "y": 252.0,
                    "tooltip": "\u5deb\u5e08\u5b9d\u5177(Witching-Gadgets)\u7684\u7eba\u8f66\u4f1a\u89e3\u9501\u4e00\u4e9b\u6709\u7528\u7684\u6750\u6599\u4e0e\u7269\u54c1.\u5e0c\u671b\u6ca1\u6709\u8ba8\u538c\u7684\u4f8f\u5112\u5996(<br/>\u683c\u6797\u7ae5\u8bdd\u4e2d\u53ef\u4ee5\u5c06\u7a3b\u8349\u7eba\u6210\u91d1\u5b50\u7684\u4f8f\u5112\u5996).  \u786e\u8ba4\u4f60\u505a\u7684\u662f\u5deb\u5e08\u5b9d\u5177\u7684\u7eba\u8f66\u800c\u4e0d\u662f\u5deb\u672f\u7684\u8f6c\u8f6e."
                },
                {
                    "name": "Comparing at a Distance",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8fdc\u7a0b\u6bd4\u8f83\u5668.png",
                    "x": 444.0,
                    "y": -84.0,
                    "tooltip": "Comparators are wonderfully useful devices, but th<br/>eir need to be directly next to whatever they are <br/>comparing is quite limiting. If you could do so re<br/>motely that would free you from one major constrai<br/>nt.\n\nRemote Comparators allow you to do just that.<br/> Sneak-right click with a crystalline eye to bind <br/>the block you want to watch, and place the eye in <br/>a remote comparator to start monitering the block <br/>remotely.\n\nGiven the extra distance, though the ra<br/>nge of the remote comparator is quite limited, you<br/> should expect the \u00a7otiniest\u00a7r amount of signal la<br/>g compared to a direct comparator. You're doubtful<br/> that is ever going to be a limiting factor, thoug<br/>h."
                },
                {
                    "name": "Counting Items",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8ba1\u6570\u76d2.png",
                    "x": 492.0,
                    "y": -84.0,
                    "tooltip": "The Remote Comparator makes it significantly easie<br/>r to get comparator signals out of whatever block <br/>you want, but looking at your storage chests you c<br/>an't help but see no reason to bother. So what if <br/>they're nearly full? You want to know what they're<br/> nearly full \u00a7oof\u00a7r.\n\nTally Boxes can be pointed a<br/>t a container - either directly or, using a Remote<br/> Comparator, remotely - and given a Runic Whitelis<br/>t that specifies conditions where you want a Tally<br/> Box to send a redstone signal. Quantity, metadata<br/> and NBT matching are options, as is using a basic<br/> name filter.\n\nNote that the redstone side is alwa<br/>ys opposite the reading side, and Remote Comparato<br/>rs must be placed on top of Tally Boxes to work to<br/>gether, meaning redstone is always output on the d<br/>own face in that case.\n\n[note]Runic Whitelists don<br/>'t let you use NEI ghost items to set their filter<br/>s, unfortunately.[/note]"
                },
                {
                    "name": "\u9b54\u6676",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u590d\u76f8\u9b54\u6676.png",
                    "x": 492.0,
                    "y": 204.0,
                    "tooltip": "\u4f5c\u4e3a\u4e00\u540d\u795e\u79d8\u4f7f,\u4f60\u559c\u6b22\u4e00\u4e9b\u95ea\u4eae\u7684\u4e1c\u897f.\u8fd8\u6709\u4ec0\u4e48\u4e1c\u897f\u80fd\u6bd4\u5143\u7d20\u788e\u7247\u7ec4\u6210\u7684\u9b54\u6676\u66f4\u6709\u5149\u6cfd\u5462\uff1f\u4f60\u60f3\u8981\u5f97\u5230\u6240\u6709\u79cd<br/>\u7c7b\u7684\u9b54\u6676!"
                },
                {
                    "name": "\u8bc5\u5492\u4e4b\u571f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8bc5\u5492\u4e4b\u571f.png",
                    "x": 540.0,
                    "y": -84.0,
                    "tooltip": "\u8bc5\u5492\u4e4b\u571f\u4e0a\u4f1a\u5237\u51fa\u5f3a\u529b\u7684\u602a\u7269,\u4f60\u53ef\u4ee5\u8ddf\u5b83\u4eec\u5927\u5e72\u4e00\u573a,\u6216\u8005\u76f4\u63a5\u4e0a\u5e8a\u65e0\u89c6\u5b83\u4eec. \u4f60\u53ef\u4ee5\u7528\u5e26\u6709\u7cbe\u51c6\u91c7\u96c6\u7684\u94f2\u5b50<br/>\u6316\u8d70\u8bc5\u5492\u4e4b\u571f. \u8fd9\u79cd\u88ab\u8bc5\u5492\u7684\u571f\u58e4\u4e0a\u9762\u7684\u5237\u602a\u901f\u5ea6\u5f88\u5feb,\u4f60\u53ef\u4ee5\u5c06\u5b83\u4eec\u5e26\u5230\u522b\u7684\u5730\u65b9\u6765\u5efa\u7acb\u4f60\u7684\u5237\u602a\u88c5\u7f6e. \u53e6<br/>\u5916,\u5728\u539f\u7248\u5237\u602a\u7b3c\u4e0b\u65b9\u653e\u7f6e\u4e00\u5757\u8bc5\u5492\u4e4b\u571f,\u53ef\u4f7f\u5176\u65e0\u9700\u73a9\u5bb6\u5728\u9644\u8fd1\u4e5f\u53ef\u4ee5\u751f\u6210\u602a\u7269.\u4f7f\u7528\u8bc5\u5492\u571f\u5728\u4e0b\u754c\u5efa\u9020\u5237\u602a\u5c4b<br/>\u65f6,\u4e0d\u826f\u7684\u8bbe\u8ba1\u4f1a\u5bfc\u81f4\u4e25\u91cd\u7684TPS\u95ee\u9898.\u786e\u4fdd\u8bc5\u5492\u571f\u4e0e\u4e0b\u754c\u4e0d\u8981\u4ea7\u751f\u4e00\u6bdb\u94b1\u5173\u7cfb.\u6bd4\u5982\u4f60\u53ef\u4ee5\u5c06\u5176\u653e\u7f6e\u5728\u5927\u7406\u77f3<br/>\u4e0a,\u4f46\u5927\u7406\u77f3\u4e0d\u80fd\u78b0\u5230\u4efb\u4f55\u4e0b\u754c\u76f8\u5173\u7269\u54c1(\u5730\u72f1\u5ca9,\u5730\u72f1\u7816\u7b49),\u4e14\u5fc5\u987b\u6d6e\u7a7a.\u540c\u65f6,\u8bc5\u5492\u571f\u6700\u5927\u9762\u79ef\u8981\u9650\u5236\u57281<br/>\u533a\u5757\u4ee5\u5185,\u4e14\u4e0e\u533a\u5757\u8fb9\u7f18\u9700\u4fdd\u63012\u683c\u7f13\u51b2."
                },
                {
                    "name": "\u5206\u5272\u5fbd\u7ae0(\u6fc0\u6d3b)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5206\u5272\u5fbd\u7ae0.png",
                    "x": 588.0,
                    "y": -36.0,
                    "tooltip": "\u4e5f\u8bb8\u4f60\u5728\u5b9d\u7bb1\u4e2d\u627e\u5230\u7684\u5206\u5272\u5fbd\u7ae0\u5df2\u7ecf\u538b\u4e86\u597d\u4e45\u7684\u7bb1\u5e95.\u8fd8\u662f\u8bf4\u4ece\u51cb\u7075\u90a3\u91cc\u62a2\u5230\u7684\u5fbd\u7ae0\u5806\u79ef\u5982\u5c71? \u597d\u5427,\u65e0\u8bba\u600e\u4e48<br/>\u5f97\u6765\u7684,\u4f60\u5e94\u8be5\u542c\u8bf4\u8fc7\u7528\u4e00\u79cd\u4eea\u5f0f\u53ef\u4ee5\u6fc0\u6d3b\u5b83.\u9996\u5148\u4f60\u9700\u8981\u4e00\u4e2a\u9644\u9b54\u53f0,8\u4e2a\u7ea2\u77f3,\u4e00\u628a\u597d\u4e00\u70b9\u7684\u6b66\u5668\u548c\u4e00\u53ea\u7528\u6765<br/>\u732e\u796d\u7684\u52a8\u7269.\u7528\u9ec4\u91d1\u5957\u7d22\u6293\u4f4f\u5b83\u4eec\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9.\u8981\u662f\u4f60\u8fd8\u6ca1\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1,\u67e5\u770bLV\u9636\u6bb5\u4efb\u52a1\u680f.\u628a\u4f60\u7684\u9644<br/>\u9b54\u53f0\u653e\u5728\u4e00\u4e2a\u4e0b\u65b9\u662f\u8349\u65b9\u5757\u7684\u7a7a\u5730\u4e0a,\u5e76\u7528\u7ea2\u77f3\u56f4\u7ed5\u9644\u9b54\u53f0\u4e00\u5708.\u5230\u4e86\u5348\u591c\u65f6\u5206,\u4f60\u4f1a\u53d1\u73b0\u5206\u5272\u5fbd\u7ae0\u5f00\u59cb\u53d1\u5149\u4e86(<br/>\u624b\u6301\u5fbd\u7ae0\u53f3\u952e\u9644\u9b54\u53f0\u80fd\u591f\u68c0\u67e5\u65f6\u95f4\u662f\u5426\u6070\u5f53),\u8fd9\u4e2a\u65f6\u5019\u5c06\u7528\u6765\u732e\u796d\u7684\u52a8\u7269\u653e\u5230\u9644\u9b54\u53f0\u4e0a\u5e76\u6740\u6b7b\u5b83.\u4eea\u5f0f\u5b8c\u6210\u540e\u4f60<br/>\u5c31\u4f1a\u53d1\u73b0\u5206\u5272\u5fbd\u7ae0\u5df2\u7ecf\u6210\u529f\u6fc0\u6d3b\u4e86.\u5f53\u7136\u8fdb\u884c\u8fd9\u4e2a\u4eea\u5f0f\u4e0d\u662f\u6ca1\u6709\u4ee3\u4ef7\u7684!\u8bd1\u8005\u6ce8:\u73b0\u5728\u53ef\u4ee5\u7528\u76f4\u63a5\u5408\u6210\u4e0d\u7a33\u5b9a\u91d1\u5c5e<br/>\u952d\u7684\u914d\u65b9\u4e86,\u5e76\u4e14\u53ea\u8981\u6309\u4f4fshift\u4e00\u6b21\u5408\u6210\u591a\u4e2a\u952d,\u5b83\u5c31\u4e0d\u4f1a\u7206\u70b8!\u8bd1\u8005\u518d\u6ce8:\u5347\u7ea7\u7248\u4f2a\u9006\u5fbd\u7ae0\u53ef\u4ee5\u65e0\u9650\u5408\u6210<br/>\u952d,\u540e\u9762\u7684\u4efb\u52a1\u4f1a\u4ecb\u7ecd\u76f8\u5e94\u4eea\u5f0f."
                },
                {
                    "name": "\u9b54\u6cd5\u6ce5\u571f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9b54\u6cd5\u6ce5\u571f.png",
                    "x": 348.0,
                    "y": -36.0,
                    "tooltip": "\u9b54\u6cd5\u6ce5\u571f\u53ef\u4ee5\u8ba9\u6811\u82d7\u6216\u8005\u4f5c\u7269\u5728\u4e0a\u9762\u751f\u957f\u7684\u66f4\u5feb. \u591a\u5757\u9b54\u6cd5\u6ce5\u571f\u5806\u53e0\u5728\u4e00\u8d77\u7684\u65f6\u5019\u4f1a\u968f\u673a\u52a0\u901f\u9876\u7aef\u7684\u65f6\u95f4\u6d41\u901d.<br/> \u53d8\u76f8\u968f\u673a\u8ba9\u6811\u82d7\u6216\u8005\u4f5c\u7269\u7684\u751f\u957f\u901f\u5ea6\u589e\u52a0\u4e00\u70b9. \u6ce8:\u5728\u9b54\u5bfc\u624b\u518c\u795e\u79d8\u517b\u8702\u5b66\u627e\u5230\u76f8\u5173\u7814\u7a76."
                },
                {
                    "name": "\u9644\u9b54\u53f01.0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9644\u9b54\u53f0.png",
                    "x": 540.0,
                    "y": 12.0,
                    "tooltip": "\u5728\u4f60\u5236\u9020\u6210\u529f\u53ef\u4ee5\u5b58\u50a850\u70b9VIS\u7684\u6cd5\u6756\u4e4b\u540e,\u5c31\u53ef\u4ee5\u7528\u5b83\u6765\u5236\u4f5c\u9644\u9b54\u53f0\u4e86.\u5408\u6210\u8868\u53ef\u4ee5\u5728\u9b54\u5bfc\u624b\u518c\u7684\"GTN<br/>H\"\u7ae0\u8282\u4e2d\u627e\u5230."
                },
                {
                    "name": "\u70bc\u5316\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u70bc\u91d1\u7089.png",
                    "x": 588.0,
                    "y": 108.0,
                    "tooltip": "\u8981\u83b7\u5f97\u6e90\u8d28,\u4f60\u9700\u8981\u70bc\u5316\u4e00\u4e9b\u7269\u54c1.\u5f53\u7136,\u4f60\u4ec5\u4ec5\u5e94\u8be5\u628a\u90a3\u4e9b\u542b\u6709\u6e90\u8d28\u5e76\u4e14\u4f60\u4e0d\u662f\u5f88\u9700\u8981\u7684\u4e1c\u897f\u70bc\u5316\u6389.  \u8bb0\u5f97<br/>\u5b9e\u65f6\u817e\u7a7a\u4f60\u7684\u84b8\u998f\u5668,\u8981\u662f\u5b83\u4eec\u88c5\u6ee1\u4e86\u6e90\u8d28,\u4f1a\u9020\u6210TPS\u6025\u5267\u4e0b\u964d."
                },
                {
                    "name": "\u6e90\u8d28\u8fc7\u6ee4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u672f\u84b8\u998f\u5668.png",
                    "x": 636.0,
                    "y": 108.0,
                    "tooltip": "\u8fd9\u4e2a\u6f02\u4eae\u7684\u5c0f\u88c5\u7f6e\u4f1a\u5e2e\u4f60\u4ece\u70bc\u91d1\u7089\u6216\u5769\u57da\u4e2d\u8fc7\u6ee4\u51fa\u7269\u54c1\u4e2d\u8574\u542b\u7684\u6e90\u8d28.\u4e00\u65e6\u5b83\u63a5\u6536\u5230\u4e86\u4efb\u4f55\u4e00\u79cd\u7c7b\u578b\u6e90\u8d28,\u90a3\u4e48\u8fd9<br/>\u4e2a\u84b8\u998f\u5668\u5c31\u53ea\u4f1a\u63a5\u6536\u8fd9\u79cd\u6e90\u8d28,\u76f4\u5230\u5965\u672f\u84b8\u998f\u5668\u5176\u4e2d\u7684\u6e90\u8d28\u88ab\u5168\u90e8\u63d0\u53d6\u5b8c\u6bd5.\u4f60\u53ef\u4ee5\u5728\u70bc\u91d1\u7089\u4e0a\u65b9\u653e\u7f6e\u591a\u4e2a\u84b8\u998f\u5668<br/>,\u591a\u4e48\u65b9\u4fbf\u554a. \u6700\u597d\u84b8\u998f\u5668\u6570\u91cf\u53ef\u4ee5\u5bf9\u5e94\u6b63\u5728\u70bc\u91d1\u7089\u4e2d\u7269\u54c1\u7684\u6e90\u8d28\u79cd\u7c7b\u6570.\u53ef\u4f7f\u7528\u6807\u7b7e\u9501\u5b9a\u6e90\u8d28\u79cd\u7c7b,\u5426\u5219\u6bcf\u5f53<br/>\u84b8\u998f\u5668\u518d\u6b21\u88ab\u5145\u6ee1,\u5176\u4e2d\u5f88\u53ef\u80fd\u5c31\u662f\u53e6\u4e00\u79cd\u6e90\u8d28\u4e86,\u8fd9\u6837\u5c31\u6709\u53ef\u80fd\u5835\u585e\u4f60\u7684\u6e90\u8d28\u7ba1\u9053."
                },
                {
                    "name": "Essentia Storage",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e90\u8d28\u7f50\u5b50.png",
                    "x": 684.0,
                    "y": 108.0,
                    "tooltip": "At long last, you have all the tools to smelt item<br/>s into Essentia, keep it stable, and store it for <br/>later use.\n\nThe last step was creating Warded Jars<br/>, relatively simple creations that keep Essentia i<br/>n a quasi-liquid state, which makes it easier to k<br/>eep Essentia from turning into Flux. Unlike phials<br/>, which must hold 8 Essentia exactly to keep it st<br/>able, Warded Jars can store anywhere from 1 to 64 <br/>Essentia.\n\nThese Warded Jars are safe to pick up a<br/>nd carry around, which you suspect will not be the<br/> case for most objects storing much more Essentia <br/>than these jars do. Right click them with a label <br/>to filter that jar to a specific type of Essentia.<br/> Use a preset label if the jar is still empty.\n\nSn<br/>eak-right click with an empty hand to remove a lab<br/>el from a jar, or void the Essentia it contains if<br/> it doesn't have a label. Voiding Essentia from ja<br/>rs will not generate Flux, because... magic, I gue<br/>ss. It's very convenient, so just politely don't q<br/>uestion it too much."
                },
                {
                    "name": "\u4e00\u5207\u90fd\u5f88\u6a21\u7cca?\u8bd5\u8bd5\u955c\u7247\u5427",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u706b\u4e4b\u8f89\u5149\u4e4b\u955c.png",
                    "x": 732.0,
                    "y": 300.0,
                    "tooltip": "\u5728\u4f60\u62e5\u6709\u4e86\u63ed\u793a\u4e4b\u62a4\u76ee\u955c\u4e4b\u540e,\u795e\u79d8\u89c6\u754c(Thaumic-Horizons)\u63d0\u4f9b\u4e86\u591a\u79cd\u6709\u7528\u7684\u955c\u7247.  \u8fd9<br/>\u4e2a\u955c\u7247\u53ef\u4ee5\u63d0\u4f9b\u591c\u89c6\u6548\u679c.\u8bd5\u8bd5\u5176\u4ed6\u7684\u5427."
                },
                {
                    "name": "Fuuuuuu...sion(\u878d\u5408)!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5965\u672f\u77f3\u7816.png",
                    "x": 780.0,
                    "y": 108.0,
                    "tooltip": "\u4f60\u7684\u5965\u672f\u5de5\u4f5c\u53f0\u5728\u628a\"vis\"\u6ce8\u5165\u5230\u7269\u54c1\u7684\u65f6\u5019\u8868\u73b0\u7684\u5f88\u597d.\u4f46\u662f,\u4f60\u89c9\u5f97\u4ec5\u4ec5\u8fd9\u6837\u505a\u662f\u4e0d\u591f\u7684.\u5982\u679c\u80fd\u628a\u5404\u79cd<br/>\u5404\u6837\u7684\u6e90\u8d28\u4e5f\u6ce8\u5165\u7269\u54c1\u4e2d\u4f1a\u53d1\u751f\u4ec0\u4e48\u795e\u5947\u7684\u73b0\u8c61\u5462\uff1f\u53ef\u80fd\u6027\u662f\u65e0\u9650\u7684..."
                },
                {
                    "name": "\u83b7\u5f97\u788e\u7247",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u706b\u4e4b\u788e\u7247.png",
                    "x": 204.0,
                    "y": 108.0,
                    "tooltip": "\u73b0\u5728\u4f60\u627e\u5230\u4e866\u79cd\u62e5\u6709\u6700\u539f\u59cb\u529b\u91cf\u7684\u9b54\u6cd5\u77f3\u5934,\u4f60\u9700\u8981\u6253\u788e\u8fd9\u4e9b\u77f3\u5934\u6765\u83b7\u5f97\u9b54\u529b\u788e\u7247.\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u5c31\u662f\u628a\u8fd9\u4e9b\u77f3<br/>\u5934\u6254\u5230\u4f60\u7684\u953b\u9020\u9524\u91cc\u9762.\u540e\u6765,\u5f53\u4f60\u6709\u7b5b\u9009\u673a\u7684\u65f6\u5019,\u4f60\u53ef\u4ee5\u7b5b\u51fa\u66f4\u591a\u7684\u788e\u7247.\u9ad8\u538b\u91dc\u53ef\u4ee5\u628a\u7c89\u672b\u53d8\u6210\u788e\u7247.\u4e5f\u8bb8<br/>\u6709\u4e00\u79cd\u9b54\u6cd5\u7684\u65b9\u5f0f\u6765\u505a\u540c\u6837\u7684\u4e8b\u60c5\uff1f"
                },
                {
                    "name": "\u7ed9\u6211,\u7ed9\u6211,\u7ed9\u6211",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8d2a\u5a6a\u73cd\u73e0.png",
                    "x": 444.0,
                    "y": -36.0,
                    "tooltip": "\u8d2a\u5a6a\u73cd\u73e0\u662f\u4e0b\u4e00\u4e2a\u4f60\u8981\u4e92\u52a8\u7684\u5bf9\u8c61,\u4ee5\u6b64\u6765\u89e3\u9501\u81ea\u52a8\u5316\u9b54\u6cd5\u7684\u4e0b\u4e00\u90e8\u5206.\u5236\u4f5c\u4e00\u4e2a\u8d2a\u5a6a\u73cd\u73e0,\u628a\u4e00\u4e9b\u4e1c\u897f\u6254\u5230\u5730\u4e0a<br/>,\u7136\u540e\u62ff\u7740\u73cd\u73e0\u4e00\u904d\u53c8\u4e00\u904d\u5730\u53f3\u952e\u6254\u5411\u90a3\u4e9b\u7269\u54c1,\u76f4\u5230\u83b7\u5f97\u8d2a\u5a6a\u73cd\u73e0\u788e\u7247,\u8fd9\u4f1a\u89e3\u9501\u66f4\u591a\u7814\u7a76\u9879\u76ee."
                },
                {
                    "name": "\u53ef\u5b58\u50a875vis\u7684\u6743\u6756",
                    "symbolSize": 62.400000000000006,
                    "x": 780.0,
                    "y": 204.0,
                    "tooltip": "\u6743\u6756\u662f\u7528\u6756\u67c4\u3001\u5143\u59cb\u9b54\u529b\u3001\u4e09\u4e2a\u6756\u7aef\u3001\u4e00\u4e2a\u66ae\u8272\u68ee\u6797\u602a\u7269\u6389\u843d\u7269\u3001\u548c\u4e00\u4e9b\u87ba\u4e1d\u5236\u6210\u7684.\u53ef\u4f7f\u7528\u4efb\u4f55\u79cd\u7c7b\u7684\u6756\u67c4\u548c\u6756<br/>\u7aef,\u4f46\u4e09\u4e2a\u6756\u7aef\u5fc5\u987b\u540c\u7c7b.\u6743\u6756\u65e0\u6cd5\u5b89\u88c5\u6cd5\u6756\u6838\u5fc3,\u4f46vis\u5b58\u50a8\u91cf\u662f\u76f8\u540c\u6756\u67c4\u5236\u6210\u6cd5\u6756\u7684150\uff05,\u5e76\u63d0\u4f9b\u989d\u5916<br/>10\uff05\u7684\u9b54\u529b\u51cf\u514d."
                },
                {
                    "name": "\u8d2a\u5a6a\u7bb1\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8d2a\u5a6a\u7bb1\u5b50.png",
                    "x": 300.0,
                    "y": 252.0,
                    "tooltip": "\u81ea\u52a8\u5316\u9b54\u6cd5(Automagy)\u7684\u8d2a\u5a6a\u7bb1\u5b50\u770b\u8d77\u6765\u6709\u4e9b\u6709\u8da3\u7684\u7528\u6cd5.\u5bf9\u795e\u79d8\u4f7f\u6765\u8bf4,\u8fd9\u4e5f\u662f\u975e\u5e38\u91cd\u8981\u7684\u8bbe\u5907."
                },
                {
                    "name": "Growing Auram",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7075\u6c14\u82b1\u74e3.png",
                    "x": 300.0,
                    "y": -84.0,
                    "tooltip": "One Essentia you might have a hard time gathering <br/>is Auram. Maybe you've gotten some from Ethereal E<br/>ssence, which is dropped by the flying balls of li<br/>ght that rarely show up in the Nether, or some fro<br/>m Nodes. But that is hardly a good supply. The Aur<br/>elia plant can resolve this.\n\nWhen a full moon is <br/>visible overhead, Aurelia flowers will open up the<br/>ir petals presumably to feed off of the light. Sig<br/>nificant for you is that they will occasionally sh<br/>ed these petals, which can be collected off the gr<br/>ound as a dense source of Auram Essentia.\n\nYou sho<br/>uld make sure the ground near the flower is level <br/>and clear, so you'll be able to collect the petals<br/> later. The flower itself is simply planted on gra<br/>ss, not farmland, so no need to have a water sourc<br/>e nearby either.\n\n[note]Terra Wart is also a growa<br/>ble source of Auram Essentia. It has a quest in th<br/>e Fishing, Farming, Cooking quest tab.[/note]"
                },
                {
                    "name": "Growing Glowstone the Magical Way",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8424\u77f3\u7c89.png",
                    "x": 396.0,
                    "y": -84.0,
                    "tooltip": "There are many plants that can provide you with Gl<br/>owstone Dust. But the best one might just be Glieo<br/>nia. This magical plant, once matured, can be harv<br/>ested for two Glowstone Dust directly."
                },
                {
                    "name": "Growing your own Knowledge!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u73ab\u7470\u82bd.png",
                    "x": 300.0,
                    "y": 12.0,
                    "tooltip": "Ever thought to yourself \"man, why does everything<br/> have to use primal aspects so much?\" Well now you<br/> won't have to worry about that anymore!\n\nMeet the<br/> Rosa Mysteria. When the sprout planted on a Cryst<br/>al Block, it will use that block's essence to grow<br/> into an Aspect Shard of the same type! These shar<br/>ds can then be thrown into your Cauldron or Alchem<br/>ical Furnace, or used as Knowledge Fragments to ga<br/>in Research Points. Even Mixed Crystals can be use<br/>d as a catalyst!\n\n[warn]Warning: Planting Rosa Mys<br/>teria on Tainted Crystal Blocks will lead to unf\u00a7k<br/>o\u00a7rrs\u00a7ke\u00a7re\u00a7kn   \u00a7rco\u00a7kn\u00a7rs\u00a7ke\u00a7rq\u00a7kue\u00a7rnc\u00a7ke\u00a7r\u00a7ks.<br/>\u00a7r[/warn]"
                },
                {
                    "name": "\u6211\u53ef\u4ee5\u770b\u5230\u4e00\u5207",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u63ed\u793a\u4e4b\u62a4\u76ee\u955c.png",
                    "x": 684.0,
                    "y": 300.0,
                    "tooltip": "\u6709\u4e86\u65b0\u6cd5\u6756,\u4f60\u5c31\u53ef\u4ee5\u5236\u4f5c\u63ed\u793a\u4e4b\u62a4\u76ee\u955c\u4e86.  \u66f4\u5999\u7684\u662f,\u62a4\u76ee\u955c\u8fd8\u4f1a\u4e3a\u4f60\u63d0\u4f9b5\uff05\u7684\u9b54\u529b\u51cf\u514d.\u7b80\u5355\u7684\u955c\u7247\u5347<br/>\u7ea7\u4e5f\u53ef\u4ee5\u8ba9\u4f60\u62e5\u6709\u5404\u79cd\u89c6\u89c9\u80fd\u529b.\u7a0d\u540e\u4f60\u53ef\u4ee5\u5236\u4f5c\u66f4\u5148\u8fdb\u7684\u62a4\u76ee\u955c,\u751a\u81f3\u53ef\u4ee5\u5c06\u62a4\u76ee\u955c\u4e0e\u62a4\u7532\u7ed3\u5408\u8d77\u6765.\u7ed3\u5408\u795e\u79d8<br/>\u8282\u70b9\u8ffd\u8e2a\u5668,\u5bfb\u627e\u8282\u70b9\u90a3\u90fd\u4e0d\u662f\u4e8b\u513f. \u795e\u79d8\u8282\u70b9\u8ffd\u8e2a\u5668\u7684\u9ed8\u8ba4\u5feb\u6377\u952e\u662f\"I\".\u4f60\u53ef\u4ee5\u5728\u5217\u8868\u4e2d\u9009\u62e9\u4f60\u626b\u63cf\u8fc7\u7684<br/>\u8282\u70b9,\u7136\u540e\u7bad\u5934\u4f1a\u544a\u8bc9\u4f60\u600e\u4e48\u8d70\u7684.\u4f60\u8fd8\u53ef\u4ee5\u5bf9\u6b64\u5217\u8868\u6392\u5e8f."
                },
                {
                    "name": "\u5f3a\u5316\u62a4\u7532:\u6b66\u58eb\u98ce\u683c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u8981\u585e\u515c\u936a.png",
                    "x": 780.0,
                    "y": 60.0,
                    "tooltip": "\u662f\u65f6\u5019\u5f04\u4e00\u5957\u50cf\u6837\u4e00\u70b9\u7684\u76d4\u7532\u4e86! \u6709\u4e86\u8fd9\u4e9b\u76d4\u7532,\u5bf9\u4ed8\u90a3\u4e9b\u7cbe\u82f1\u602a\u7684\u65f6\u5019\u5c31\u4e0d\u4f1a\u50cf\u73b0\u5728\u8fd9\u4e48\u75db\u82e6\u4e86!"
                },
                {
                    "name": "\u6539\u8fdb\u4f60\u7684\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91d1\u6756\u7aef.png",
                    "x": 492.0,
                    "y": 252.0,
                    "tooltip": "\u4f60\u7684\u6cd5\u6756\u5728\u5438\u6536\u548c\u91ca\u653e\u9b54\u529b\u65b9\u9762\u505a\u5f97\u5f88\u597d,\u4e0d\u8fc7\u94c1\u6756\u7aef\u6709\u70b9\u592a\u5f31\u4e86.\u4e00\u4e0d\u5c0f\u5fc3\u5c31\u53ef\u80fd\u4f1a\u4f24\u5bb3\u5230\u8282\u70b9.\u4e5f\u4f1a\u5bfc\u81f4\u4f60\u7684<br/>\u5408\u6210\u66f4\u52a0\u56f0\u96be.\u4e5f\u8bb8\u4f60\u5e94\u8be5\u5c1d\u8bd5\u4f7f\u7528\u4e00\u4e9b\u66f4\u597d\u7684\u6750\u6599\u6765\u5f3a\u5316\u4e00\u4e0b\u4f60\u7684\u6cd5\u6756.\u6069...\u91d1\u600e\u4e48\u6837\uff1f"
                },
                {
                    "name": "\u65e0\u9650\u8759\u8760!\u7b49\u7b49,\u4ec0\u4e48??",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u672f\u751f\u7269\u78c1\u94c1.png",
                    "x": 876.0,
                    "y": 96.0,
                    "tooltip": "\u538c\u5026\u4e86\u626d\u66f2\u62db\u6765\u7684\u6210\u5343\u4e0a\u4e07\u7684\u8759\u8760\u5728\u4f60\u8033\u8fb9\u5c16\u53eb?\u7528\u8fd9\u53f0\u8bbe\u5907\u628a\u5b83\u4eec\u5438\u5f15\u5230\u4e00\u4e2a\u80fd\u96c6\u4e2d\u5904\u7406\u5b83\u4eec\u7684\u5730\u65b9\u5427.\u5965\u672f\u751f<br/>\u7269\u78c1\u94c1\u53ef\u4ee5\u8bbe\u7f6e\u5438\u5f15\u6216\u6392\u65a5\u751f\u7269,\u5176\u4f5c\u7528\u8303\u56f4\u4e3a\u6536\u5230\u7684\u7ea2\u77f3\u4fe1\u53f7\u9664\u4ee52.\u4f60\u53ef\u4ee5\u4f7f\u7528\u7075\u9b42\u6a21\u5177\u6765\u8fc7\u6ee4\u78c1\u94c1\u5438\u5f15\u6216\u6392<br/>\u65a5\u7684\u751f\u7269.\u8fd9\u8ba9\u4f60\u6709\u4e86\u4e00\u4e9b\u81ea\u52a8\u5316\u7684\u601d\u8def..."
                },
                {
                    "name": "\u65e0\u9650\u7684\u5ca9\u6d46",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u5c3d\u4e4b\u58f6.png",
                    "x": 876.0,
                    "y": 12.0,
                    "tooltip": "\u597d\u5427,\u8fd9\u786e\u5b9e\u9700\u8981\u4e00\u70b9\u706b\u4e4b\u6e90\u8d28.\u4f46\u662f\u5982\u679c\u4f60\u5c06\u5b83\u505a\u51fa\u6765\u4f60\u5c31\u518d\u4e5f\u4e0d\u9700\u8981\u8003\u8651\u5ca9\u6d46\u7684\u95ee\u9898\u4e86. \u4e0d\u8fc7,\u8fd9\u73a9\u610f\u53ef\u4e0d<br/>\u4fbf\u5b9c.(\u9b54\u5bfc\u624b\u518c\u79d8\u672f\u5b66)"
                },
                {
                    "name": "\u65e0\u9650\u7684\u6c34\u6e90",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u70bc\u72f1\u4e4b\u58f6.png",
                    "x": 876.0,
                    "y": 60.0,
                    "tooltip": "\u4f60\u7684\u52aa\u529b\u7ec8\u4e8e\u8fce\u6765\u4e86\u7ed3\u679c!\u4f60\u518d\u4e5f\u4e0d\u7528\u4e3a\u4e86\u6c34\u6e90\u800c\u53d1\u6101\u4e86.\u901a\u8fc7\u9b54\u6cd5\u4f60\u7ec8\u4e8e\u627e\u5230\u4e86\u4e00\u79cd\u83b7\u5f97\u65e0\u9650\u6c34\u6e90\u7684\u65b9\u6cd5!(\u9b54<br/>\u5bfc\u624b\u518c\u79d8\u672f\u5b66)"
                },
                {
                    "name": "\u8574\u9b54\u77f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u706b\u4e4b\u8574\u9b54\u77f3.png",
                    "x": 204.0,
                    "y": 48.0,
                    "tooltip": "\u4e0d\u7ba1\u4f60\u5728\u8fd9\u4e2a\u7ef4\u5ea6\u54ea\u4e2a\u89d2\u843d\u90fd\u4f1a\u53d1\u73b0\u8fd9\u91cc\u5145\u6ee1\u4e86\u9b54\u6cd5\u80fd\u91cf.\u4f60\u60f3\u77e5\u9053\u666e\u901a\u7684\u77f3\u5934\u5982\u679c\u957f\u65f6\u95f4\u66b4\u9732\u5728\u8fd9\u4e48\u9ad8\u6d53\u5ea6\u7684\u9b54<br/>\u6cd5\u80fd\u91cf\u4e2d\u4f1a\u53d1\u751f\u4ec0\u4e48\u6709\u8da3\u7684\u53d8\u5316. \u4e5f\u8bb8\u662f\u65f6\u5019\u53bb\u770b\u770b\u8fd9\u4e2a\u7ef4\u5ea6\u7684\u77ff\u7269\u751f\u6210\u4e86!\u6709\u4e09\u79cd\u77ff\u8109.\u6bcf\u79cd\u77ff\u8109\u4e2d\u90fd\u6709\u7425\u73c0<br/>\u548c\u6731\u7802\u77ff\u77f3.\u5b83\u4eec\u7684\u7528\u9014\u4e0d\u591a,\u4f46\u4e5f\u5c11\u4e0d\u4e86,\u6240\u4ee5\u81f3\u5c11\u5b58\u4e00\u70b9\u5427."
                },
                {
                    "name": "\u94c1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "x": 636.0,
                    "y": 252.0,
                    "tooltip": "\u5236\u4f5c\u91d1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756\u9700\u898130vis,\u4f46\u4f60\u7684\u65e7\u6cd5\u6756\u7684\u6781\u9650\u662f25.\u6240\u4ee5\u5148\u505a\u4e00\u628a\u94c1\u6216\u94dc\u7aef\u7684\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756,\u8fbe<br/>\u523050vis\u5bb9\u91cf,\u7136\u540e\u5728\u4e0b\u4e00\u4e2a\u4efb\u52a1,\u5236\u4f5c\u4e00\u628a\u91d1\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756.\u4f60\u53ef\u4ee5\u5728\u6756\u7aef,\u6838\u5fc3,\u6216\u662fBOSS\u6750\u6599\u4e0a<br/>\u6309'U'\u952e\u4f7f\u7528NEI\u627e\u5230\u8fd9\u4e2a\u9b54\u6756\u7684\u6b63\u786eGTNH\u914d\u65b9."
                },
                {
                    "name": "\u94c1\u6728",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u94c1\u6728\u952d.png",
                    "x": 96.0,
                    "y": 96.0,
                    "tooltip": "\u94c1\u6728\u6bd4\u6a61\u80f6\u66f4\u52a0\u8010\u7528,\u662f\u5236\u4f5c\u8f6f\u9524\u7684\u7406\u60f3\u6750\u6599. \u6536\u96c6\u4e00\u4e9b\u5730\u4e0b\u7684\u6d3b\u6839,\u78e8\u788e\u5b83,\u7136\u540e\u5c06\u6d3b\u6839\u7c89\u3001\u94c1\u7c89\u548c\u91d1\u7c89\u6405\u62cc<br/>\u6df7\u5408,\u4f60\u5c31\u5f97\u5230\u4e86\u4e00\u79cd\u795e\u5947\u7684\u65b0\u6750\u6599.\u4f60\u8fd8\u53ef\u4ee5\u7528\u8fd9\u4e2a\u6750\u6599\u6765\u5236\u4f5c\u4e00\u4e9b\u72ec\u7279\u7684\u88c5\u5907."
                },
                {
                    "name": "\u5b83\u53eb\u795e\u79d8\u70bc\u91d1\u5854,\u597d\u4e0d?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u70bc\u91d1\u6784\u6750.png",
                    "x": 684.0,
                    "y": 60.0,
                    "tooltip": "\u8fd9\u53f0\u8bbe\u5907\u76f8\u5f53\u4e8e\u81ea\u52a8\u5316\u5769\u57da. \u8bf7\u67e5\u770b\u9b54\u5bfc\u624b\u518c\u4e2d,\u5769\u57da\u53f3\u8fb9\u8fdc\u5904\u7684\u7814\u7a76,\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f."
                },
                {
                    "name": "\u544a\u8bc9\u6211\u8981\u626b\u63cf\u4ec0\u4e48!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9b54\u5bfc\u624b\u518c.png",
                    "x": 300.0,
                    "y": 108.0,
                    "tooltip": "\u4e0d\u60f3\u518d\u731c\u6d4b\u4ec0\u4e48\u7269\u54c1\u542b\u6709\u4ec0\u4e48\u8981\u7d20? \u53ea\u60f3\u76f4\u63a5\u5f00\u59cb\u5de5\u4f5c? \u626b\u63cf\u8fd9\u4e9b\u4e1c\u897f\u5427. \u7b2c\u4e00\u7ec4\u9700\u8981\u6309\u987a\u5e8f\u626b\u63cf. \u5982\u679c<br/>\u5b83\u4eec\u4e2d\u7684\u67d0\u4e9b\u7269\u54c1\u65e0\u6cd5\u626b\u63cf\u51fa\u7ed3\u679c,\u8bf7\u5c1d\u8bd5\u5148\u626b\u63cf\u522b\u7684(\u7279\u522b\u662f\u7b2c\u4e09\u7ec4).\u6d12\u6c34\u58f6\u706b\u628a\u7164\u8349\u65b9\u5757\u6d3b\u677f\u95e8\u7bb1\u5b50\u73bb\u7483\u767d<br/>\u9aa8\u65b9\u5757\u9e21\u7075\u9b42\u6c99\u7eb8\u8150\u8089\u5c0f\u9ea6\u71e7\u77f3\u9ed1\u66dc\u77f3\u7070\u4e91\u4efb\u610f\u67d3\u6599\u7f8a\u6bdb\u8718\u86db\u773c\u96ea\u7403\u725b\u5976\u539f\u7248\u9504\u539f\u7248\u9550\u7bad\u539f\u7248\u62a4\u7532\u6c34\u94f6\u6805\u680f\u95e8\u94c1\u7c92<br/>\u91d1\u50f5\u5c38\u4e4b\u8111\u672b\u5f71\u73cd\u73e0\u7c98\u6db2\u7403.\u5b9e\u5728\u627e\u4e0d\u7740\u53f2\u83b1\u59c6\u53ef\u4ee5\u5728\u5769\u57da\u91cc\u52a0\u6ee1\u7269\u54c1\u5236\u9020\u5492\u6ce2\u7c98\u6d46,\u7136\u540e\u5c31\u53ef\u4ee5\u751f\u6210\u795e\u79d8\u53f2\u83b1\u59c6<br/>\u4e86(\u522b\u5728\u57fa\u5730\u91cc\u8fd9\u4e48\u5e72)\u5e26\u6c61\u67d3\u7684\u4efb\u610f\u7269\u54c1.\u5929\u57df\u4e4b\u534e(\u4efb\u610f\u8981\u7d20,\u5c0f\u7cbe\u7075\u7684\u6389\u843d\u7269,\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u624b\u64b8\u8282\u70b9)\u6216<br/>\u5927\u5730\u75a3\u94dd\u952d\u94c2\u91d1\u5c5e\u7c89\u7ec6\u94dc\u5bfc\u7ebf\u78c1\u94c1\u77ff\u7c89\u948d\u7c89\u732a\u5730\u72f1\u5ca9\u91d1\u5236\u62a4\u7532\u5e8a\u62f4\u7ef3(\u4e0d\u662f\u94c5) \u8bd1\u8005\u6ce8:\u62f4\u7ef3\u548c\u94c5\u5728\u82f1\u8bed\u4e2d\u90fd\u662f<br/>Lead\u6076\u9b42\u4e4b\u6cea\u65f6\u949f\u6c34\u6676\u77e9\u9635\u6700\u540e\u8fd8\u67095\u79cd\u901a\u5e38\u53ea\u80fd\u901a\u8fc7\u8981\u7d20\u5408\u6210/\u521b\u9020\u8282\u70b9\u83b7\u53d6\u7684\u8981\u7d20.\u53ef\u4ee5\u7ed3\u5408\u4ee5\u4e0b\u8981\u7d20\u83b7<br/>\u53d6:Cognitio(\u601d\u7ef4) + Ordo(\u79e9\u5e8f)Cognitio(\u601d\u7ef4) + Vitium(\u6c61\u67d3)<br/>Vacuos(\u865a\u7a7a) + Motus(\u79fb\u52a8)Lux(\u5149\u660e) + Primordium(\u59cb\u6e90)Huma<br/>nus(\u4eba\u7c7b) + Iter(\u65c5\u884c)\u8bf7\u6ce8\u610f,\u4ee5\u4e0a\u5217\u8868\u4ec5\u7528\u4e8e\u89e3\u9501\u8981\u7d20,\u4f60\u53ef\u80fd\u8fd8\u9700\u8981\u626b\u63cf\u4e00\u4e9b\u7279\u5b9a\u7269\u54c1(\u6bd4<br/>\u5982\u4e0b\u754c\u4f20\u9001\u95e8),\u4ee5\u89e3\u9501\u67d0\u4e9b\u9690\u85cf\u7814\u7a76."
                },
                {
                    "name": "Keeping Out the Riff-Raff",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5b88\u536b\u8005\u94fa\u8def\u77f3.png",
                    "x": 540.0,
                    "y": 156.0,
                    "tooltip": "You're starting to get tired of having to build ev<br/>erything like some kind of fortress just to make s<br/>ure no unwanted guests come in. Sure, that's just <br/>the nature of living in a world where infinite hoa<br/>rds of restless undead haunt every other dark corn<br/>er, but is having a secure entryway that isn't con<br/>veniently door-shaped too much to ask?\n\nNot anymor<br/>e. Paving Stone of Warding, assuming nothing sits <br/>on top of it, will project a two block tall invisi<br/>ble forcefield above itself that block non-player <br/>mobs from passing through, at least the common rif<br/>f-raff. As a bonus spiders cannot climb the forcef<br/>ield, so no need for overhangs to keep them out to<br/>o.\n\nThat said, since the forcefield cannot tell an<br/> arrow fired by you from one fired \u00a7oat you\u00a7r, mun<br/>dane objects will still pass through regardless. A<br/>nd the forcefield does as much to block line of si<br/>ght as the term \u00a7oinvisible\u00a7r would suggest.\n\nOf c<br/>ourse, you're not concerned about that part. Being<br/> able to shoot things with your crossbow while the<br/>y can't reach you is very much in \u00a7oyour\u00a7r favor, <br/>all told."
                },
                {
                    "name": "\u4e13\u4f9b\u51ef\u9a6c\u7279(K-Mart)(\u5927\u578b\u767e\u8d27\u8fde\u9501\u5e97)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u4f7f\u6cd5\u888d.png",
                    "x": 444.0,
                    "y": 300.0,
                    "tooltip": "\u6bcf\u4e00\u70b9vis\u90fd\u5f88\u91cd\u8981,\u6240\u4ee5\u4e3a\u4f60\u81ea\u5df1\u5236\u4f5c\u795e\u79d8\u4f7f\u5957\u88c5\u5427,\u8fd9\u53ef\u4ee5\u5e2e\u52a9\u4f60\u964d\u4f4e\u6d88\u8017.\u7a0d\u540e\u4f60\u53ef\u4ee5\u5236\u4f5c\u66f4\u597d\u7684\u6cd5\u888d.<br/>  \u8fd9\u4e9b\u6cd5\u888d\u4e4b\u7c7b\u7684\u88c5\u5907\u65e0\u6cd5\u63d0\u4f9b\u592a\u591a\u7684\u62a4\u7532,\u6240\u4ee5\u8bb0\u5f97\u5728\u72e9\u730e\u524d\u66f4\u6362\u88c5\u5907!"
                },
                {
                    "name": "\u9a91\u58eb\u91d1\u5c5e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u88c5\u7532\u788e\u7247\u5806.png",
                    "x": 96.0,
                    "y": 24.0,
                    "tooltip": "\u9a91\u58eb\u91d1\u5c5e\u952d\u662f\u4ece\u5730\u7cbe\u9a91\u58eb\u8981\u585e\u4e2d\u83b7\u5f97\u7684\u6218\u5229\u54c1.(\u8bd1\u8005\u6ce8:\u6781\u5149\u5bab\u6bbf\u7684\u7bb1\u5b50\u4e2d\u4e5f\u4f1a\u51fa\u73b0.)\u5b83\u4eec\u53ef\u88ab\u5236\u4f5c\u6210\u94bb\u77f3\u7b49<br/>\u7ea7\u7684\u88c5\u7532.\u4f60\u53ef\u4ee5\u628a\u5bc4\u5c45\u87f9\u6389\u843d\u7684\u62a4\u7532\u788e\u7247\u5806\u70e7\u5236\u6210\u9a91\u58eb\u91d1\u5c5e."
                },
                {
                    "name": "\u94c5\u3001\u65b9\u94c5\u3001\u94f6\u548c\u51b0\u6676\u77f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65b9\u94c5\u77ff\u77ff\u77f3.png",
                    "x": 60.0,
                    "y": 204.0,
                    "tooltip": "\u4f60\u65e0\u6cd5\u5728\u4e3b\u4e16\u754c\u6216\u4e0b\u754c\u627e\u5230\u94c5.\u8be5\u63a2\u7d22\u795e\u79d8\u7684\u66ae\u8272\u68ee\u6797\u4e86.\u5728Y=5-40\u5bfb\u627e\u65b9\u94c5\u77ff\u8109.\u4ece\u8fd9\u4e2a\u77ff\u8109\u4e2d,\u4f60\u80fd\u83b7<br/>\u5f97\u94c5\u3001\u94f6\u3001\u51b0\u6676\u77f3(\u7528\u4e8e\u751f\u4ea7\u94dd)\u548c\u65b9\u94c5(\u66f4\u591a\u7684\u94c5).\u4e3b\u4e16\u754c\u548c\u4e0b\u754c\u7684\u8d2b\u7620\u77ff\u4e2d\u6709\u5c11\u91cf\u7684\u94f6,\u5b9e\u9645\u8d2b\u7620\u77ff\u7684\u4ea7\u91cf<br/>\u53ef\u80fd\u8fd8\u66f4\u9ad8\u4e9b."
                },
                {
                    "name": "\u70b9\u4eae\u5b83!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u672f\u706f.png",
                    "x": 492.0,
                    "y": -36.0,
                    "tooltip": "\u5965\u672f\u706f\u521b\u9020\u4e86\u989d\u5916\u7684\u5149\u6e90,\u5176\u4f5c\u7528\u7c7b\u4f3c\u4e8e\u706b\u628a,\u4f46\u5176\u8303\u56f4\u4e3a\u534a\u5f84\u4e3a16\u683c\u7684\u7403\u4f53.\u4e0d\u540c\u4e8e\u4e00\u822c\u5149\u6e90\u7684\u662f,\u5965\u672f\u706f\u7684<br/>\u5149\u53ef\u4ee5\u7a7f\u5899,\u6216\u8005\u522b\u7684\u4efb\u4f55\u963b\u788d.\u8fd9\u4e2a\u7279\u6027\u53ef\u80fd\u5f88\u6709\u7528...\u552f\u4e00\u7684\u7f3a\u70b9,\u5b83\u4f1a\u7167\u4eae\u4f60\u4e0d\u9700\u8981\u7167\u4eae\u7684\u5730\u65b9,\u6bd4\u5982\u8bf4<br/>\u5de5\u4e1a\u9ad8\u7089\u5185\u90e8.\u5f53\u8fde\u63a5\u5230\u5965\u672f\u94bb\u63a2\u673a\u7684\u5e95\u90e8\u65f6,\u5965\u672f\u706f\u83b7\u5f97\u989d\u5916\u7684\u80fd\u529b:\u5b83\u5c06\u7167\u4eae\u5965\u672f\u94bb\u63a2\u673a\u6240\u6316\u6398\u7684\u96a7\u9053."
                },
                {
                    "name": "\u82cd\u7a79\u6811",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u82cd\u7a79\u6811\u82d7.png",
                    "x": 24.0,
                    "y": 216.0,
                    "tooltip": "\u8981\u662f\u4f60\u5728\u66ae\u8272\u68ee\u6797\u6e38\u8361\u4e86\u4e0d\u5c11\u65f6\u95f4,\u90a3\u5e94\u8be5\u4f1a\u53d1\u73b0\u82cd\u7a79\u6811.\u8fd9\u79cd\u5927\u6811\u4f1a\u751f\u6210\u8bb8\u591a\u539f\u6728\u548c\u6811\u6839,\u6811\u6839\u4f1a\u6389\u843d\u6728\u68cd.\u6ce8<br/>\u610f!\u4e0d\u8981\u5728\u6811\u8fb9\u6216\u4efb\u4f55\u6811\u53ef\u80fd\u957f\u5230\u7684\u5730\u65b9\u653e\u7f6e\u7bb1\u5b50\u6216\u8005\u522b\u7684\u4ec0\u4e48,\u5426\u5219\u957f\u51fa\u7684\u6811\u6839/\u6811\u5e72\u53ef\u80fd\u4f1a\u66ff\u6362\u6389\u5b83.\u4f60\u53ef\u80fd<br/>\u4f1a\u53d1\u73b0\u8fd9\u662f\u4e00\u4e2a\u6709\u7528\u7684\u65b9\u6cd5(\u67d0\u4e9b\u60c5\u51b5\u4e0b),\u4f46\u4f60\u771f\u7684\u4e0d\u5e94\u8be5\u8fd9\u6837\u505a."
                },
                {
                    "name": "\u795e\u5947\u7684\u7fbd\u6bdb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9b54\u6cd5\u5730\u56fe\u6838\u5fc3.png",
                    "x": 60.0,
                    "y": 108.0,
                    "tooltip": "\u60f3\u8981\u77e5\u9053\u81ea\u5df1\u6240\u5904\u7684\u4f4d\u7f6e,\u4ee5\u53ca\u60f3\u8981\u53bb\u7684\u5730\u65b9,\u4f60\u9700\u8981\u5236\u4f5c\u4e00\u5f20\u5730\u56fe. \u8fd9\u662f\u4e00\u4e2a\u5145\u6ee1\u9b54\u529b\u7684\u5730\u65b9,\u6240\u4ee5\u9700\u8981\u7684\u662f<br/>\u9b54\u6cd5\u5730\u56fe! \u5b83\u7684\u4e3b\u8981\u90e8\u5206\u5c31\u662f\u9b54\u6cd5\u5730\u56fe\u6838\u5fc3.\u9996\u5148,\u5bfb\u627e\u5e76\u6536\u96c6\u4e4c\u9e26\u7684\u7fbd\u6bdb,\u4f60\u53ef\u4ee5\u5728\u66ae\u8272\u68ee\u6797\u901a\u8fc7\u6740\u6b7b\u4e4c\u9e26\u6765<br/>\u5f97\u5230\u5b83.\u5b83\u4eec\u7ecf\u5e38\u5728\u9ed1\u66dc\u77f3\u67f1\u8fb9\u51fa\u6ca1.\u7136\u540e\u4f60\u9700\u8981\u4e00\u70b9\u706b\u70ac\u6d46\u679c(\u901a\u5e38\u5728\u5730\u4e0b)\u548c\u8424\u77f3\u7c89."
                },
                {
                    "name": "\u9b54\u6cd5\u5730\u56fe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7a7a\u767d\u7684\u9b54\u6cd5\u5730\u56fe.png",
                    "x": 60.0,
                    "y": 72.0,
                    "tooltip": "\u8981\u5236\u4f5c\u9b54\u6cd5\u5730\u56fe,\u4f60\u9700\u8981\u9b54\u6cd5\u5730\u56fe\u6838\u5fc3\u548c\u4e00\u53e0\u7eb8.\u53f3\u952e\u4f7f\u7528\u9b54\u6cd5\u5730\u56fe\u540e,\u5b83\u4f1a\u4e3a\u4f60\u7ed8\u5236\u9644\u8fd1\u533a\u57df\u7684\u5730\u56fe,\u5e76\u6807\u6ce8\u51fa<br/>BOSS\u7684\u4f4d\u7f6e.\u4f60\u9700\u8981\u6309\u7167\u6210\u5c31\u6307\u5f15,\u4f9d\u6b21\u51fb\u6740\u4e0d\u540cBOSS,\u4ee5\u63a2\u7d22\u5269\u4e0b\u7684\u66ae\u8272\u68ee\u6797.\u9996\u5148\u9700\u8981\u51fb\u6740\u7684\u662f\u5a1c\u8fe6<br/>.\u9664\u4e86\u6210\u5c31\u6307\u5f15\u5916,\u4efb\u52a1\u4e66\u7684\u53e6\u4e00\u7ae0\u8282\u4e5f\u4f1a\u544a\u8bc9\u4f60\u51fb\u6740BOSS\u7684\u987a\u5e8f. \u572824\u4e2a\u5c0f\u65f6\u4e4b\u5185\u4f60\u53ea\u80fd\u5f97\u5230\u4e00\u5f20\u9b54\u6cd5<br/>\u5730\u56fe,\u6240\u4ee5\u8981\u5c0f\u5fc3\u4f7f\u7528!\u8bf7\u8bb0\u4f4f!\u4e00\u5b9a\u8981\u5728\u66ae\u8272\u68ee\u91cc\u4e2d\u4f7f\u7528\u9b54\u6cd5\u5730\u56fe.\u5728\u4e3b\u4e16\u754c\u6216\u5176\u4ed6\u4efb\u610f\u7ef4\u5ea6\u4f7f\u7528\u90fd\u4f1a\u7ed9\u670d\u52a1\u5668<br/>\u5e26\u6765\u5ef6\u8fdf!"
                },
                {
                    "name": "More Health",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7ea2\u5fc3\u5bb9\u5668.png",
                    "x": 684.0,
                    "y": 204.0,
                    "tooltip": "No matter how much of a crack shot you become it d<br/>oesn't help when your twitchy fingers shoot your c<br/>rossbow before your eyes can notice the tell-tale <br/>red lines on one particular type of spider's body.<br/> Usually incredible amounts of pain follow...\n\nWit<br/>h your new wand you are able to craft Red Heart Ca<br/>nisters. A total of ten of them can be put in thei<br/>r own dedicated inventory slot, increasing your ma<br/>ximum health by one heart per.\n\nIt might not be en<br/>ough, but if it ends up making the difference betw<br/>een standing upright and standing horizontally in <br/>a box, you'll be thankful you made these things."
                },
                {
                    "name": "Need More Sugar?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u82a6\u82c7\u79cd\u5b50.png",
                    "x": 348.0,
                    "y": -84.0,
                    "tooltip": "With Briar starting to consume you might also want<br/> to increase your sugar production.\n\nSweeds are pl<br/>anted on grass, not farmland, and will spread to p<br/>ropogate themselves. Once fully matured they can b<br/>e harvested for sugar as well as sugar cane."
                },
                {
                    "name": "\u4e0d\u7528\u7164",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e90\u52a8\u4e4b\u7130.png",
                    "x": 540.0,
                    "y": 60.0,
                    "tooltip": "\u4e00\u79cd\u66f4\u597d\u7684\u65b9\u5f0f.\u8bf4\u5b9e\u8bdd,\u4f7f\u7528\u7164\u6765\u5236\u4f5c\u5b83\u672c\u8eab\u5c31\u662f\u4e00\u79cd\u6d6a\u8d39.\u4f60\u53ef\u4ee5\u4f7f\u7528\u6728\u70ad\u7c89\u6216\u8005\u8910\u7164\u7c89\u6765\u751f\u4ea7\u6e90\u52a8\u4e4b\u7130. <br/>\u5728\u70bc\u91d1\u7089\u4e2d\u4f7f\u7528\u5b83\u6765\u4f5c\u4e3a\u71c3\u6599\u53ef\u4ee5\u52a0\u901f\u7269\u54c1\u5728\u70bc\u91d1\u7089\u4e2d\u6eb6\u89e3\u7684\u901f\u5ea6."
                },
                {
                    "name": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5769\u57da.png",
                    "x": 408.0,
                    "y": 108.0,
                    "tooltip": "\u81f3\u5c11\u4e0d\u662f\u505a\u80fd\u5403\u7684\u6c64\u7684.\u62ff\u7740\u6cd5\u6756\u53f3\u952e\u5bf9\u7740\u70bc\u836f\u9505\u6765\u4e00\u8bb0\u91cd\u51fb,\u4f1a\u6709\u795e\u5947\u7684\u4e8b\u60c5\u53d1\u751f. \u7136\u540e\u5728\u5769\u57da\u4e0b\u97622\u683c\u5904\u653e<br/>\u4e0a\u5730\u72f1\u5ca9\u7528\u6253\u706b\u77f3\u70b9\u71c3\u5b83,\u7a0d\u540e\u5411\u5927\u9505\u6ce8\u6ee1\u6c34.(\u5769\u57da\u53ef\u4ee5\u548c\u7ba1\u9053\u4e00\u8d77\u5de5\u4f5c,\u6765\u81ea\u52a8\u52a0\u6c34)\u73b0\u5728\u4f60\u5c31\u80fd\u5b8c\u6210\u5769\u57da\u914d<br/>\u65b9\u4e86!\u522b\u4e00\u6b21\u52a0\u5165\u592a\u591a\u4e1c\u897f,\u5426\u5219,\u4f1a\u6709\u574f\u4e8b\u53d1\u751f\u7684."
                },
                {
                    "name": "\u4e0d\u4ec5\u662f\u7528\u6765\u88c5\u9970",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u672f\u77f3\u5757.png",
                    "x": 540.0,
                    "y": 204.0,
                    "tooltip": "\u5f53\u7136,\u5b83\u4eec\u770b\u8d77\u6765\u5f88\u6f02\u4eae.\u4f46\u662f\u5965\u672f\u77f3\u7816\u8fd8\u6709\u4e00\u4e2a\u66f4\u52a0\u91cd\u8981\u7684\u529f\u80fd:\u5f15\u5bfc\u5927\u91cf\u7684VIS\u548c\u6e90\u8d28.\u5b83\u7684\u7b2c\u4e00\u6b21\u8fd0\u7528\u5373<br/>\u642d\u5efa\u6ce8\u9b54\u796d\u575b\u548c\u70bc\u91d1\u7089."
                },
                {
                    "name": "\u5143\u59cb\u9b54\u529b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5143\u59cb\u9b54\u529b.png",
                    "x": 732.0,
                    "y": 252.0,
                    "tooltip": "\u6709\u4e86\u65b0\u7684\u53ef\u5b58\u50a850vis\u7684\u9b54\u6756,\u4f60\u53ef\u4ee5\u5236\u4f5c\u4e00\u67c4\u6743\u6756,\u53ef\u5b58\u50a875vis\u9b54\u529b. \u9996\u5148\u4f60\u9700\u8981\u4e00\u4e9b\u5143\u59cb\u9b54\u529b,<br/>\u5408\u6210\u9700\u6d88\u801750vis."
                },
                {
                    "name": "\u59cb\u6e90\u8611\u83c7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7ea4\u6bdb\u83c7.png",
                    "x": 408.0,
                    "y": 156.0,
                    "tooltip": "\u5982\u679c\u4f60\u79cd\u690d\u4e86\u4e00\u9897\u65b0\u7684\u59cb\u6e90\u8611\u83c7,\u7b49\u5b83\u4eec\u6210\u719f\u540e\u6536\u83b7,\u5b83\u4eec\u5c06\u4f1a\u628a\u6536\u96c6\u5230\u7684\u8981\u7d20\u7403\u91ca\u653e.\u7b80\u5355\u6765\u8bb2\u5c31\u662f\u79cd\u74dc\u5f97\u74dc,<br/>\u79cd\u8611\u83c7\u5f97\u8981\u7d20...\u627e\u4e00\u627e\u9b54\u6cd5\u68ee\u6797\u751f\u7269\u7fa4\u7cfb,\u90a3\u91cc\u53ef\u4ee5\u627e\u5230\u7ea4\u6bdb\u83c7,\u5982\u679c\u5b9e\u5728\u627e\u4e0d\u5230\u90a3\u4e48\u5c31\u53bb\u4e70\u70b9\u5427.2\u4e2a\u5357\u74dc<br/>\u52a0\u4e0a4\u4e2a\u5c0f\u64ae\u77f3\u7c89\u53ef\u4ee5\u5b8c\u7f8e\u63d0\u4f9b\u6240\u9700\u6e90\u8d28.\u53ea\u8981\u5b8c\u5168\u957f\u6210,\u5c31\u53ef\u4ee5\u7834\u574f\u5b83\u4eec,\u4f1a\u6389\u843d\u8981\u7d20\u7403,\u5c31\u8ddf\u5237\u602a\u4e00\u6837. \u4e0d<br/>\u8fc7\u4f60\u5f97\u5e26\u7740\u6cd5\u6756\u624d\u80fd\u5438\u6536\u8fd9\u4e9b\u8981\u7d20\u7403. \u5b83\u4eec\u9700\u8981\u7279\u5b9a\u7684\u5149\u7167\u624d\u80fd\u751f\u957f."
                },
                {
                    "name": "Pushing Back the Taint",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5929\u57df\u82b1.png",
                    "x": 300.0,
                    "y": 60.0,
                    "tooltip": "So how do you actually destroy tainted land?\n\nThes<br/>e Ethereal Blooms will remove Tainted Lands within<br/> a small area around themselves, which in turn kil<br/>ls off any Fibrous Tendrils. They cannot cleanse T<br/>ainted Nodes, nor will they necessarily return tai<br/>nted biomes back to what they were before, but the<br/>y will provide a barrier.\n\nThe Shimmerleaf they ar<br/>e made from have a recipe in an LV Assembling Mach<br/>ine if you're having a hard time finding them arou<br/>nd Silverwood trees. There is also an IC2 crop ver<br/>sion of them."
                },
                {
                    "name": "\u4fdd\u62a4\u9c7f\u9c7c,\u4eba\u4eba\u6709\u8d23",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6697\u5f71\u73ab\u7470\u4e1b.png",
                    "x": 444.0,
                    "y": 60.0,
                    "tooltip": "\u6709\u4e00\u4e2a\u975e\u5e38\u65b9\u4fbf\u7684\u529e\u6cd5\u83b7\u5f97\u58a8\u6c34\u5e76\u4e14\u80fd\u8ba9PETA(\u5584\u5f85\u52a8\u7269\u7ec4\u7ec7)\u7684\u6d3b\u52a8\u5bb6\u4eec\u9ad8\u5174. \u63d0\u793a:\u90a3\u4e9b\u73ab\u7470\u7684\u6e90\u8d28\u53ef<br/>\u80fd\u4f1a\u6709\u7528...(\u9b54\u5bfc\u624b\u518c\u4f2a\u7ecf\u9875\u9762-\u6697\u5f71\u73ab\u7470)"
                },
                {
                    "name": "\u4e66\u5199\u5de5\u5177",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7b14\u4e0e\u58a8.png",
                    "x": 300.0,
                    "y": 156.0,
                    "tooltip": "\u9700\u8981\u7b14\u548c\u7eb8\u624d\u53ef\u4ee5\u89e3\u9501\u67d0\u9879\u7814\u7a76. \u800c\u60f3\u8981\u8fdb\u884c\u7814\u7a76,\u4f60\u9700\u8981\u5728\u7814\u7a76\u53f0\u4e2d\u653e\u5165\u7b14\u4e0e\u58a8\u3001\u7814\u7a76\u7b14\u8bb0\u8fdb\u884c\u8fde\u8fde\u770b,\u6240\u4ee5<br/>\u4f60\u6700\u597d\u505a\u4e24\u4e2a. \u54e6\u522b\u5fd8\u4e86\u4f60\u8fd8\u9700\u8981\u4e00\u4e9b\u58a8\u6c34.\u6ce8\u610f:Thaumcraft-Research-Tweaks<br/>\u91cd\u505a\u4e86\u7814\u7a76\u53f0\u7684GUI.\u73b0\u5728,\u5404\u8981\u7d20\u4e4b\u95f4\u7684\u62d6&\u653e\u5df2\u7ecf\u6574\u5408\u8fdb\u4e86GUI.\u4f60\u8fd8\u53ef\u4ee5\u5728\u62d6\u52a8\u8981\u7d20\u65f6\u53f3\u952e,\u5373\u53ef\u76f4\u63a5<br/>\u653e\u4e0b\u8981\u7d20\u540c\u65f6\u4e0d\u5f71\u54cd\u7ee7\u7eed\u62d6\u52a8;\u5728\u8fde\u8fde\u770b\u7684\u65f6\u5019\u540c\u6837\u9002\u7528. \u8fd9\u4e9b\u65b0\u7279\u6027\u90fd\u5df2\u7ecf\u5199\u5165\u4e86\u9b54\u5bfc\u624b\u518c,\u8bf7\u67e5\u770b'\u7814\u7a76'<br/>\u3001'\u7814\u7a76\u4e13\u957f'\u3001'\u7814\u7a76\u7cbe\u901a'\u548c'\u7814\u7a76\u62f7\u8d1d'\u9875."
                },
                {
                    "name": "\u5bfb\u627e\u7b54\u6848",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u66ae\u8272\u68ee\u6797\u5165\u53e3.png",
                    "x": 60.0,
                    "y": 156.0,
                    "tooltip": "\u6628\u5929\u665a\u4e0a\u4f60\u505a\u4e86\u4e00\u4e2a\u68a6,\u68a6\u5230\u4e86\u53e6\u5916\u4e00\u4e2a\u7ef4\u5ea6.\u548c\u4f60\u6240\u5728\u7684\u7ef4\u5ea6\u76f8\u6bd4\u662f\u5982\u6b64\u7684\u602a\u5f02\u4e14\u4e0d\u540c,\u51e0\u4e4e\u53ef\u4ee5\u8bf4\u662f...\u9b54<br/>\u5e7b?\u5c31\u50cf\u4f60\u627e\u5230\u7684\u90a3\u9897\u5c0f\u6811\u82d7\u4e00\u6837.\u4f60\u51b3\u5b9a\u53bb\u90a3\u91cc\u5bfb\u627e\u7b54\u6848.\u9996\u5148,\u6316\u4e2a2x2\u7684\u5751\u5e76\u586b\u6ee1\u6c34,\u5468\u56f4\u73af\u7ed512\u6735\u82b1<br/>. \u7136\u540e\u4f60\u9700\u8981\u4e22\u5165\u4e00\u4e2a\u6709\u80fd\u529b\u6253\u5f00\u5f02\u6b21\u5143\u901a\u9053\u7684\u6c34\u6676.\u4e0d,\u5982\u679c\u4ec5\u4ec5\u662f\u94bb\u77f3\u662f\u6ca1\u6709\u8fd9\u79cd\u80fd\u529b\u7684!\u73af\u7ed5\u7684\u82b1\u53ef\u4ee5\u662f<br/>\u4efb\u610f\u7684\u539f\u7248\u82b1."
                },
                {
                    "name": "\u89c1\u6240\u672a\u89c1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9b54\u5bfc\u900f\u955c.png",
                    "x": 252.0,
                    "y": 108.0,
                    "tooltip": "\u4e00\u5207\u90fd\u662f\u75316\u79cd\u57fa\u7840\u8981\u7d20\u7ec4\u6210.\u8fd96\u79cd\u8981\u7d20\u53ef\u4ee5\u7ec4\u6210\u66f4\u52a0\u590d\u6742\u7684\u8981\u7d20,\u4f46\u662f\u59cb\u7ec8\u53ea\u67096\u79cd\u57fa\u7840\u8981\u7d20,\u6709\u70b9\u50cf\u88ab\u4f60\u627e<br/>\u5230\u7684\u788e\u7247,\u4f60\u53d1\u73b0\u5f53\u4f60\u628a\u788e\u7247\u9760\u8fd1\u7531\u5b83\u4eec\u7ec4\u6210\u7684\u4e1c\u897f\u65c1\u8fb9\u65f6,\u5b83\u4eec\u5c31\u4f1a\u5f00\u59cb\u9707\u52a8.\u4e5f\u8bb8\u4f60\u53ef\u4ee5\u9760\u7740\u8fd9\u79cd\u53d1\u73b0\u6765\u5236\u9020<br/>\u4e00\u4e2a\u53ef\u4ee5\"\u626b\u63cf\"\u7269\u54c1\u7684\u5de5\u5177,\u5e76\u663e\u793a\u51fa\u7ec4\u6210\u5b83\u4eec\u7684\u8981\u7d20.\u8fd9\u5728\u4ee5\u540e\u53ef\u80fd\u4f1a\u975e\u5e38\u6709\u7528."
                },
                {
                    "name": "\u7cbe\u81f4\u7684\u73e0\u5b9d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7cbe\u81f4\u73e0\u5b9d.png",
                    "x": 540.0,
                    "y": -36.0,
                    "tooltip": "\u4f7f\u7528\u7cbe\u81f4\u7684\u73e0\u5b9d\u53ef\u4ee5\u4e3a\u4f60\u7684\u5320\u9b42\u5de5\u5177\u4e0a\u9762\u9644\u52a0\u7cbe\u51c6\u91c7\u96c6\u7684\u9644\u9b54. \u5bf9\u5927\u90e8\u5206\u90e8\u4ef6\u6765\u8bf4,\u7cbe\u51c6\u91c7\u96c6\u6709\u70b9...\u6ca1\u7528,<br/>\u56e0\u4e3a\u50cf\u7164\u77ff\u8fd9\u6837\u7684GT\u77ff\u77f3,\u672c\u6765\u5c31\u4f1a\u5b8c\u6574\u6389\u843d\u4e3a\u65b9\u5757. \u4e0d\u8fc7,\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u83b7\u53d6\u4e00\u4e9b\u8bc5\u5492\u571f\u3001\u8349\u65b9\u5757\u4e4b\u7c7b\u7684\u7269<br/>\u54c1.\u5177\u4f53\u7684\u5408\u6210\u8868\u53ef\u4ee5\u5728\u9b54\u5bfc\u624b\u518c\u7684\"GTNH\"\u7ae0\u8282\u4e2d\u627e\u5230(\u524d\u7f6e\u89e3\u9501\u9644\u9b54\u53f0)."
                },
                {
                    "name": "Solid, Directional Redstone",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7ea2\u6676.png",
                    "x": 396.0,
                    "y": 12.0,
                    "tooltip": "Redstone Dust is a wonderful substance, but it has<br/> several limitations that only true Minecrafters c<br/>an handle.\n\nLuckily, with a bit of magic the dust <br/>crystallizes and becomes much easier to handle.\n\nR<br/>edcrystal can be placed directly against a wall or<br/> ceiling, and also allows you to use a wand to tog<br/>gle whether a given side sends/receives any redsto<br/>ne signals. This allows for nice and compact build<br/>s in places regular redstone couldn't even exist i<br/>n the first place.\n\nMaybe it is possible to improv<br/>e these redcrystals further to allow them to manip<br/>ulate or process the signal they're receiving in s<br/>ome way..."
                },
                {
                    "name": "\u592a\u6e34\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e34\u996e\u50a8\u7f50.png",
                    "x": 300.0,
                    "y": 204.0,
                    "tooltip": "\u542c\u8fd9\u50a8\u7f50\u91cc\u6c34\u7684\u5495\u565c\u58f0\u8ba9\u6211\u5f88\u6e34.\u5982\u679c\u5b83\u88ab\u653e\u5728\u6c34\u6e90\u65b9\u5757\u8fb9,\u5c31\u80fd\u6210\u4e3a\u5408\u9002\u7684\u6c34\u6e90.\u5b83\u8fd8\u652f\u6301\u4e00\u4e9b\u901f\u5ea6\u548c\u5bb9\u91cf\u5347\u7ea7<br/>.  \u4f60\u53ef\u4ee5\u8bd5\u8bd5\u628a\u5b83\u653e\u5728\u725b\u8fb9\u4e0a,\u5b83\u80fd\u6536\u96c6\u725b\u5976,\u6ee1\u8db3\u4f60\u6240\u6709\u5976\u916a\u9ec4\u6cb9\u4e4b\u7c7b\u7684\u9700\u6c42."
                },
                {
                    "name": "\u954d\u7684\u6765\u6e90",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7845\u9541\u954d\u77ff\u77ff\u77f3.png",
                    "x": 96.0,
                    "y": 216.0,
                    "tooltip": "\u5de5\u4e1a\u9ad8\u7089\u7684\u5408\u6210\u6750\u6599\u4e4b\u4e00\u5c31\u662f\u954d. \u73b0\u5728\u4f60\u5df2\u7ecf\u6253\u5f00\u4e86\u66ae\u8272\u4f20\u9001\u95e8,\u662f\u65f6\u5019\u6536\u96c6\u4e00\u4e9b\u954d\u4e86. \u7845\u9541\u954d\u77ff\u8109\u4e2d\u6709\u7845\u9541<br/>\u954d\u77ff\u77f3\u3001\u954d\u77ff\u77f3\u3001\u8f89\u94b4\u77ff\u77f3\u548c\u954d\u9ec4\u94c1\u77ff\u77f3,\u5b83\u4eec\u90fd\u53ef\u4ee5\u51fa\u4ea7\u954d,\u7845\u9541\u954d\u77ff\u8109\u53ef\u5728\u66ae\u8272\u68ee\u6797Y=10-40\u627e\u5230. <br/>\u5728MV\u9636\u6bb5,\u4f60\u9700\u8981\u6210\u5428\u7684\u954d\u6765\u5236\u4f5c\u767d\u94dc,\u6240\u4ee5\u56e4\u79ef\u4e00\u4e9b\u5427.\u5904\u7406\u8f89\u94b4\u77ff(\u6d17\u77ff\u6216\u70ed\u79bb)\u65f6,\u4f1a\u51fa\u4ea7\u4e00\u4e9b\u94b4.\u800c\u60f3<br/>\u8981\u7535\u89e3\u8f89\u94b4,\u81f3\u5c11\u9700\u8981MV\u7684\u7535\u89e3\u673a. \u4e0d\u8fc7\u8981\u662f\u4f60\u7684\u5de5\u4e1a\u9ad8\u7089\u6bd4\u8f83\u95f2\u7684\u8bdd,\u4e5f\u53ef\u4ee5\u7528\u9ad8\u7089\u6765\u5904\u7406\u8f89\u94b4. \u8bf7\u8bb0\u4f4f<br/>,\u56de\u6536\u83b7\u5f97\u7684\u4e8c\u6c27\u5316\u786b\u91cf\u662f\u57fa\u4e8e\u4f60\u7684\u6d88\u58f0\u4ed3\u7b49\u7ea7\u7684. \u8fd9\u4e48\u83b7\u53d6\u94b4,\u53ef\u80fd\u6bd4\u5728\u4e0b\u754c\u5230\u5904\u627e\u8981\u65b9\u4fbf\u4e00\u4e9b.\u4f60\u4e5f\u53ef\u4ee5\u5728<br/>\u4e3b\u4e16\u754c\u627e\u5230\u5c11\u91cf\u7684\u954d\u9ec4\u94c1\u77ff."
                },
                {
                    "name": "\u94a2\u53f6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u94a2\u53f6.png",
                    "x": 96.0,
                    "y": 60.0,
                    "tooltip": "\u5982\u679c\u4f60\u5728\u66ae\u8272\u68ee\u6797\u7684\u8ff7\u5bab\u91cc\u627e\u5230\u4e86\u94a2\u53f6\u90a3\u4e48\u4f60\u771f\u7684\u5f88\u5e78\u8fd0. \u94a2\u53f6\u662f\u5236\u4f5c\u8f6f\u9524\u7684\u6700\u4f73\u6750\u6599,\u800c\u4e14\u7528\u94a2\u53f6\u5236\u4f5c\u7684\u76d4\u7532<br/>\u8fd8\u53ef\u4ee5\u62e5\u6709\u4e00\u4e9b\u795e\u5947\u7684\u6548\u679c."
                },
                {
                    "name": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91d1\u6756\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756.png",
                    "x": 684.0,
                    "y": 252.0,
                    "tooltip": "\u4f7f\u7528\u91d1\u6756\u7aef\u53ef\u4ee5\u4f7f\u4f60\u907f\u514d\u94c1\u6756\u7aef\u7684\u7f3a\u70b9.\u6240\u4ee5\u6700\u597d\u5347\u7ea7\u5230\u91d1\u6756\u7aef\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756!\u6709\u4e86\u8fd9\u4e2a\u53ef\u4ee5\u4f7f\u4f60\u6bd4\u4ee5\u5f80\u4efb\u4f55\u65f6\u5019<br/>\u66f4\u52a0\u5f3a\u5927!\u4f60\u6709\u4e00\u79cd\u611f\u89c9,\u8fd9\u6839\u65b0\u9b54\u6756\u5f88\u5feb\u5c31\u4f1a\u6d3e\u4e0a\u7528\u573a.\u672a\u6765\u7684\u9b54\u6756\u4efb\u52a1\u4e0d\u4f1a\u4e13\u6ce8\u4e8e\u6756\u7aef.\u4f60\u73b0\u5728\u77e5\u9053\u94c1\u6756\u7aef\u7684<br/>\u9b54\u6756\u5236\u4f5c\u6210\u672c\u6700\u4f4e,\u4f46\u91d1\u6756\u7aef\u66f4\u597d.\u4f60\u8fd8\u5e94\u8be5\u5c1d\u8bd5\u5176\u4ed6\u53ef\u4ee5\u5236\u4f5c\u7684\u6756\u7aef,\u5b83\u4eec\u53ef\u80fd\u4f1a\u66f4\u597d!\u94c1\u6756\u7aef\u662f\u6700\u4fbf\u5b9c\u7684,\u4f46<br/>\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u4f60\u603b\u662f\u9700\u8981\u4ece\u94c1\u6756\u7aef\u6cd5\u6756\u5f00\u59cb,\u4ec5\u4ec5\u662f\u4e3a\u4e86\u5236\u4f5c\u66f4\u597d\u7684\u9b54\u6756.\u76f8\u53cd,\u4f60\u5e94\u8be5\u5f00\u59cb\u53e0\u52a0\u5404\u79cd\u6765\u6e90\u7684\u9b54\u529b<br/>\u51cf\u514d!\u5982\u679c\u4f60\u73b0\u5728\u7684\u88c5\u5907\u6ca1\u6709\u81f3\u5c1110%\u7684\u9b54\u529b\u51cf\u514d,\u4f60\u53ef\u80fd\u5e94\u8be5\u770b\u770b\u672c\u7ae0\u7684\u5176\u4ed6\u4efb\u52a1\u6765\u63d0\u9ad8\u4f60\u7684\u9b54\u529b\u51cf\u514d\u3002"
                },
                {
                    "name": "\u8ff7\u5931\u5728\u66ae\u8272\u68ee\u6797\u91cc?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u66ae\u8272\u4f20\u9001\u95e8\u6fc0\u6d3b\u6c34\u6676.png",
                    "x": 24.0,
                    "y": 96.0,
                    "tooltip": "\u5982\u679c\u4f60\u6b63\u5728\u66ae\u8272\u68ee\u6797\u4e2d\u63a2\u7d22\u65f6,\u4f20\u9001\u95e8\u88ab\u7834\u574f\u4e86,\u4f60\u5c31\u4f1a\u9677\u5165\u56f0\u5883. \u6bcf\u969424\u5c0f\u65f6,\u4f60\u5c31\u53ef\u4ee5\u4ea4\u6362\u4e00\u4e9b\u6750\u6599,\u4ee5<br/>\u83b7\u5f97\u65b0\u7684\u4f20\u9001\u6c34\u6676,\u4ece\u800c\u79bb\u5f00\u8fd9\u91cc.\u4e5f\u53ef\u4ee5\u81ea\u5df1\u591a\u9020\u4e00\u4e2a\u5f00\u95e8\u6c34\u6676,\u653e\u5728\u66ae\u8272\u68ee\u6797\u91cc\u7684\u7bb1\u5b50\u91cc\u4ee5\u5907\u4e0d\u65f6\u4e4b\u9700."
                },
                {
                    "name": "Taint Warnings",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8150\u5316\u690d\u7269.png",
                    "x": 348.0,
                    "y": 60.0,
                    "tooltip": "Now that you have started using Vis in the form of<br/> Essentia, a warning about Taint.\n\nVis in the stat<br/>e of Essentia is unstable if not stored properly. <br/>Left alone too long, or emptied out of the Crucibl<br/>e, Essentia will break down. But not into Vis. Rat<br/>her, it will turn into Flux.\n\nFlux manifests as a <br/>liquid or a gas, but is, itself, only a nuisance. <br/>Thaumaturges exposed to the stuff can end up getti<br/>ng Flux Flue, a condition which makes it harder to<br/> channel Vis, but it is only temporary.\n\nLarger co<br/>ncentrations of Flux will solidify into Thaumic Sl<br/>imes, bizarre creatures that try to merge with eac<br/>h other to grow larger. They can be dangerous, but<br/> are no less susceptible to crossbow bolts than mo<br/>st things.\n\nHowever, if too much flux is allowed t<br/>o linger for too long, it will corrupt the land an<br/>d solidify into tendrils. This is a manifestation <br/>of the blight called Taint. Fibrous Tendrils (as w<br/>ell as condensed blocks thereof) spread the Tainte<br/>d Lands, feeding on the magic it twists. Nodes are<br/> especially vulnerable, becoming Tainted themselve<br/>s if exposed to this twisted magic.\n\nDestroying th<br/>e tendrils stops the spread, but unless \u00a7oall\u00a7r ar<br/>e destroyed this is only temporary. A more effecti<br/>ve solution is to destroy the Tainted Land itself,<br/> as outside this specific biome tendrils quickly s<br/>tarve and die off.\n\nIf you are \u00a7oexceedingly\u00a7r car<br/>eless with your Crucible you can, in fact, create <br/>Tainted Lands. So you would be wise to try wasting<br/> as little Essentia as possible, and clean up any <br/>you do waste."
                },
                {
                    "name": "Thauminite Helmet",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u79d8\u6676\u5934\u76d4.png",
                    "x": 492.0,
                    "y": 156.0,
                    "tooltip": "If you improve your Thaumium to Thauminite, you ca<br/>n make this very stylish helmet! Also comes with a<br/> very useful 5% vis discount while equipped.\n\nMayb<br/>e this new material is useful for wands too?"
                },
                {
                    "name": "\u795e\u79d8\u70f9\u996a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u952d.png",
                    "x": 492.0,
                    "y": 108.0,
                    "tooltip": "\u73b0\u5728\u662f\u65f6\u5019\u6765\u5236\u4f5c\u795e\u79d8\u952d\u4e86. \u4f60\u5728\u8fdb\u884c\u4e86\u4e00\u756a\u7814\u7a76\u4e4b\u540e\u5f97\u77e5\u5236\u4f5c\u8fd9\u79cd\u795e\u79d8\u7684\u91d1\u5c5e,\u9700\u8981\u5c06\u94c1\u952d\u6254\u8fdb\u5305\u542b\u9b54\u6cd5\u6e90\u8d28<br/>\u7684\u5927\u9505\u4e2d."
                },
                {
                    "name": "\u9009\u62e9...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7075\u6c14\u8282\u70b9.png",
                    "x": 972.0,
                    "y": 156.0,
                    "tooltip": "\u5230\u76ee\u524d\u4e3a\u6b62,\u4f60\u5e94\u8be5\u5df2\u7ecf\u6536\u96c6\u4e86\u8bb8\u591a\u7075\u6c14\u8282\u70b9\u7684\u4f4d\u7f6e\u6765\u4ece\u4e2d\u83b7\u5f97\"VIS\".\u4f46\u662f\u4f60\u4e5f\u53ef\u80fd\u6ce8\u610f\u5230\u4e86,\u6709\u4e9b\u7c7b\u578b\u7684<br/>\u7075\u6c14\u8282\u70b9\u4e2d\u7684\u5143\u7d20\u542b\u91cf\u5f88\u4f4e,\u6bd4\u5982\u8bf4\"\u79e9\u5e8f\"\u6216\u8005\"\u706b\". \u4e0d\u8fc7\u6709\u4e00\u4e2a\u597d\u6d88\u606f,\u7ed9\u6211\u4e00\u4e9b\u9b54\u6676,\u6211\u5c06\u7ed9\u4f60\u4e00\u4e9b\u6211<br/>\u539f\u6765\u7684\u7075\u6c14\u8282\u70b9.\u867d\u7136\u90fd\u662f\u82cd\u767d\u8282\u70b9,\u4f46\u662f\u6211\u611f\u89c9\u8fd9\u8fd8\u662f\u633a\u6709\u7528\u7684. \u4f46\u662f\u5728\u9009\u62e9\u524d\u8bf7\u4e09\u601d,\u4f60\u53ea\u80fd\u57286\u4e2d\u8282\u70b9\u4e2d<br/>\u9009\u62e9\u4e00\u79cd!"
                },
                {
                    "name": "\u9009\u62e9:\u98ce",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7f38\u4e2d\u8282\u70b9.png",
                    "x": 972.0,
                    "y": 120.0,
                    "tooltip": "\u7ed9\u62116\u4e2a\u98ce\u4e4b\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c<br/>\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389."
                },
                {
                    "name": "\u9009\u62e9:\u6c34",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7f38\u4e2d\u8282\u70b9.png",
                    "x": 972.0,
                    "y": 192.0,
                    "tooltip": "\u7ed9\u62116\u4e2a\u6c34\u4e4b\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c<br/>\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389."
                },
                {
                    "name": "\u9009\u62e9:\u706b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7f38\u4e2d\u8282\u70b9.png",
                    "x": 924.0,
                    "y": 192.0,
                    "tooltip": "\u7ed9\u62116\u4e2a\u706b\u4e4b\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c<br/>\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389."
                },
                {
                    "name": "\u9009\u62e9:\u79e9\u5e8f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7f38\u4e2d\u8282\u70b9.png",
                    "x": 1020.0,
                    "y": 120.0,
                    "tooltip": "\u7ed9\u62116\u4e2a\u79e9\u5e8f\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c<br/>\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389."
                },
                {
                    "name": "\u9009\u62e9:\u6df7\u6c8c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7f38\u4e2d\u8282\u70b9.png",
                    "x": 1020.0,
                    "y": 192.0,
                    "tooltip": "\u7ed9\u62116\u4e2a\u6df7\u6c8c\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c<br/>\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389."
                },
                {
                    "name": "\u9009\u62e9:\u5730",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7f38\u4e2d\u8282\u70b9.png",
                    "x": 924.0,
                    "y": 120.0,
                    "tooltip": "\u7ed9\u62116\u4e2a\u5730\u4e4b\u9b54\u6676,\u6211\u5c31\u4f1a\u628a\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u7ed9\u4f60.\u54e6,\u4e0d\u8fc7\u6ce8\u610f.\u522b\u628a\u8fd9\u4e2a\u8282\u70b9\u548c\u5176\u4ed6\u7684\u7075\u6c14\u8282\u70b9\u653e\u5f97\u592a\u8fd1,\u5982\u679c<br/>\u4f60\u653e\u5f97\u592a\u8fd1,\u8fd9\u4e2a\u7075\u6c14\u8282\u70b9\u5185\u90e8\u7684\"VIS\"\u53ef\u80fd\u5c31\u4f1a\u88ab\u5f3a\u5927\u7684\u7075\u6c14\u8282\u70b9\u541e\u566c\u6389."
                },
                {
                    "name": "\u591c\u665a\u4e0d\u518d\u6f06\u9ed1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u591c\u89c6\u836f\u6c34.png",
                    "x": 348.0,
                    "y": 300.0,
                    "tooltip": "\u771f\u5b9e\u9ed1\u591c(Hardcore-darkness)\u4ee4\u4eba\u75db\u82e6,\u4f46\u73b0\u5728\u591c\u665a\u5c06\u662f\u5149\u660e\u7684. \u81f3\u5c11,\u5728\u4f60\u770b\u8d77\u6765\u662f\u5149<br/>\u660e\u7684,\u602a\u7269\u8fd8\u662f\u4f1a\u751f\u6210!\u4f60\u8fd8\u8981\u5c0f\u5fc3,\u602a\u7269\u5e76\u4e0d\u4f1a\u88ab\u524a\u5f31.\u987a\u4fbf\u4e00\u63d0,\u4ece\u8fd9\u74f6\u836f\u6c34\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u52a0\u5de5\u51fa\u6301\u7eed\u65f6\u95f4\u66f4\u957f<br/>\u7684\u836f\u6c34.\u53e6\u5916,\u4f60\u5e94\u8be5\u4e00\u6b21\u5236\u90203\u4e2a,\u8fd9\u6837\u5c31\u4e0d\u4f1a\u6d6a\u8d39\u6750\u6599\u4e86."
                },
                {
                    "name": "\u4f60\u5df2\u7ecf\u51fa\u5e08\u4e86!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u86cb\u7cd5.png",
                    "x": 852.0,
                    "y": 156.0,
                    "tooltip": "...\u5e74\u8f7b\u7684\u5b66\u5f92.\u4f60\u5df2\u7ecf\u719f\u7ec3\u638c\u63e1\u4e86\u5982\u4f55\u4f7f\u7528\u6cd5\u6756\u64cd\u7eb56\u79cd\u57fa\u672c\u5143\u7d20,\u4e5f\u7cbe\u901a\u4e86\u5982\u4f55\u5411\u5404\u79cd\u7269\u54c1\u4e2d\u6ce8\u5165\u6e90\u8d28\u548c\"<br/>VIS\"\u7684\u65b9\u6cd5.\u4f46\u662f\u8bf7\u8bb0\u4f4f\u5e74\u8f7b\u4eba,\u5728\u63a2\u7a76\u9b54\u6cd5\u7684\u540c\u65f6,\u4f60\u4f1a\u63a5\u89e6\u5230\u4e00\u4e9b\u90aa\u6076\u529b\u91cf.\u8fd9\u79cd\u90aa\u6076\u7684\u529b\u91cf\u4f1a\u5f15\u5bfc\u4f60\u53bb<br/>\u63a2\u7a76\u90a3\u4e9b\u7981\u5fcc\u7684\u9b54\u6cd5.\u6211\u770b\u5230\u4e86\u672a\u6765\u53ef\u80fd\u4f1a\u53d1\u751f\u7684\u4e00\u4e9b\u4e8b\u60c5...\u5f02\u5e38\u7684\u5929\u6c14\u3001\u865a\u5f31\u7684\u8eab\u4f53\u3001\u604d\u60da\u7684\u795e\u5fd7\u3001\u5b9e\u4f53\u5316<br/>\u7684\u5fc3\u9b54,\u751a\u81f3\u4f1a\u6709\u90aa\u6076\u7684\u5b88\u536b\u4f20\u9001\u5230\u4f60\u7684\u8eab\u8fb9.\u4e00\u8def\u5c0f\u5fc3,\u6211\u7684\u670b\u53cb..."
                },
                {
                    "name": "\u9b54\u5bfc\u624b\u518c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9b54\u5bfc\u624b\u518c.png",
                    "x": 204.0,
                    "y": 156.0,
                    "tooltip": "\u4f60\u9700\u8981\u5c06\u5230\u76ee\u524d\u4e3a\u6b62\u7684\u6240\u6709\u53d1\u73b0\u8bb0\u5f55\u4e0b\u6765,\u4f46\u662f\u4f60\u5f88\u61d2. \u4e0d\u8fc7\u4f60\u6709\u4e00\u6839\u6cd5\u6756,\u6240\u4ee5\u4e3a\u4ec0\u4e48\u4e0d\u8bd5\u7740\u7528\u4e00\u79cd\u5f88\u795e\u5947\u7684<br/>\u65b9\u5f0f\"\u5199\u4e0b\"\u4f60\u7684\u7814\u7a76\u5462\uff1f \u4f60\u60f3\u77e5\u9053\u4f60\u662f\u5426\u53ef\u4ee5\u7528\u4f60\u7684\u6cd5\u6756\u65bd\u5c55\u9b54\u6cd5\u6765\u53d8\u5316\u51fa\u4e00\u672c\u9b54\u6cd5\u4e66,\u8fd9\u6837\u5b83\u5c31\u80fd\u8bb0\u5f55\u4f60\u7684<br/>\u6240\u6709\u53d1\u73b0... \u4f60\u53ef\u4ee5\u62ff\u7740\u6cd5\u6756\u5bf9\u7740\u4e66\u67b6\u65bd\u5c55\u9b54\u6cd5\u8bd5\u4e00\u8bd5."
                },
                {
                    "name": "Tube Madness",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e90\u8d28\u7f13\u5b58\u5668.png",
                    "x": 636.0,
                    "y": 60.0,
                    "tooltip": "So you want to move essentia from your Alchemical <br/>furnace to your warded Jars without getting it all<br/> gunked up with different essentia types?\n\nWell yo<br/>u came to the right place, with the use of buffere<br/>d tubes and your handy wand you can move your esse<br/>ntia in tubes to fill all your jars without having<br/> to manually break and replace one jar at a time.\n<br/>\nTo create a simple setup place the buffered tubes<br/> in a main line from your Arcane Alembic with tube<br/>s coming out of the main buffered tube line. These<br/> standard tubes will then go directly into a warde<br/>d jar. To get the essentia to flow correctly into <br/>the buffered tubes, shift right click the output s<br/>ide of the buffered tube with your wand untill it <br/>is red. This will change the band to a red band wh<br/>ich will limit the suction of the Essentia.\n\nThe E<br/>ssentia will be forced from the buffered tube to a<br/> normal tube then into your Warded jars. Chain you<br/>r buffered tubes as needed untill all your Warded <br/>Jars will fit.\n\u00a74\nNote: This system will get gunke<br/>d up with essentia if any of your Warded Jars are <br/>full!\n\n\u00a7rIf you would like more information please<br/> check out the guide 'A Thaumaturge Guide to Layin<br/>g Pipe' by xlstadal for more indepth Thaumcraft 4 <br/>Tube knowledge.\n\n\u00a79\u00a7n[url]https://docs.google.com/<br/>document/d/1fMvJ5HbeOdy4UgBMe47cggis02idxWoMDgK81S<br/>gowEo[/url]\u00a7r"
                },
                {
                    "name": "\u5c1d\u8bd5\u628a\u6db2\u4f53\u70bc\u5316\u6210\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u70bc\u91d1\u9505\u7089.png",
                    "x": 588.0,
                    "y": 60.0,
                    "tooltip": "\u6211\u6709\u4e00\u4e2a\u7b80\u5355\u7684\u60f3\u6cd5.\u6709\u4e9b\u4eba\u4ec5\u4ec5\u4e3a\u4e86\u4ece\u6c34\u6216\u8005\u725b\u5976\u4e2d\u83b7\u5f97\u6c34\u4e4b\u6e90\u8d28\u6216\u6cbb\u7597\u6e90\u8d28\u800c\u6d6a\u8d39\u4e86\u5927\u91cf\u7684\u6876.\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5<br/>\u70bc\u5236\u6db2\u4f53\u672c\u8eab\u4ece\u800c\u83b7\u5f97\u6e90\u8d28\u5462\uff1f\u54ce...\u8fd9\u771f\u611a\u8822."
                },
                {
                    "name": "Understanding Wand Progression",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4e66\u4e0e\u7b14.png",
                    "x": 540.0,
                    "y": 252.0,
                    "tooltip": "More advanced Thaumcraft recipes require larger an<br/>d larger amounts of vis that your initial wands ca<br/>n't handle. You need to progress bit by bit to inc<br/>rease your capabilities. The progression is two-fo<br/>ld:\n\nFirst, you need to craft more advanced wands,<br/> the Greatwood Wand is next. And secondly, you nee<br/>d to improve your crafting discounts. They reduce <br/>the vis cost of crafts and thus also let you craft<br/> higher vis recipes.\n\nIn your progression you will<br/> need to rely on both aspects. Better wands and hi<br/>gher discounts. However, as you progress, there ar<br/>e many different ways on how to procede. Some ways<br/> focus more on discounts, others more on wands. Th<br/>erefore, the questbook can only give you some gene<br/>ral advice.\n\nFor example, when making a new wand t<br/>ype, it is always cheapest to first make it with i<br/>ron caps and then try to improve it afterwards. Ho<br/>wever, if you are able to obtain enough discounts <br/>you can directly make the wand with gold caps or b<br/>etter, skipping the iron capped wand.\n\nBut before <br/>all these options really open up, let us work on t<br/>hat Greatwood Wand!"
                },
                {
                    "name": "\u626d\u66f2\u8b66\u62a5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u51cb\u7075\u9ab7\u9ac5\u5934\u9885.png",
                    "x": 252.0,
                    "y": 156.0,
                    "tooltip": "\u795e\u79d8\u65f6\u4ee3\u7684\u8bbe\u5907\u4e0e\u5de5\u5177\u53ef\u4ee5\u5e26\u6765\u5de8\u5927\u7684\u529b\u91cf. \u4f46\u529b\u91cf\u662f\u9700\u8981\u4ed8\u51fa\u4ee3\u4ef7\u7684.... \u4ece\u7248\u672c4.2\u5f00\u59cb,\u8fd9\u79cd\u4ee3\u4ef7<br/>\u4ee5\u626d\u66f2\u8868\u73b0\u51fa\u6765: \u5bf9\u89d2\u8272\u601d\u60f3\u4e0e\u7075\u9b42\u7684\u4fb5\u8680,\u9010\u6e10\u5bf9\u4ed6\u4eec\u9020\u6210\u66f4\u591a\u53ef\u6015\u7684\u5f71\u54cd.\u867d\u7136\u626d\u66f2\u7684\u6548\u679c\u5c0f\u5219\u70e6\u4eba,\u5927\u5219<br/>\u81f4\u547d,\u4f46\u79ef\u7d2f\u8db3\u591f\u591a\u7684\u626d\u66f2\u4e5f\u53ef\u4ee5\u8ba9\u4f60\u83b7\u5f97\u66f4\u5927\u7684\u529b\u91cf...\u4ee3\u4ef7\u5c31\u662f\u8d8a\u53d1\u75af\u72c2,\u4e5f\u8d8a\u53d1\u5438\u5f15\u9ed1\u6697\u529b\u91cf. \u81f3\u5c11,<br/>\u90a3\u5728\u65c1\u4eba\u770b\u6765\u662f\u75af\u72c2... \u4f46\u662f,\u5f53\u4f60\u5934\u8111\u4e2d\u7684\u58f0\u97f3\u7ed9\u51fa\u4e86\u6709\u7528\u7684\u77e5\u8bc6\u65f6\uff1b\u5728\u4f60\u79bb\u5f00\u4e4b\u524d\u51fa\u73b0\u7684\u602a\u7269\u4ecd\u7136\u7559\u5728\u4f60<br/>\u8eab\u540e\u65f6,\u4f60\u5f00\u59cb\u6000\u7591:\u5b83\u771f\u7684\u662f\u7cbe\u795e\u9519\u4e71\u5417\uff1f\u795e\u79d8\u626d\u66f2\u5b66\u6dfb\u52a0\u4e86\u4e00\u7cfb\u5217\u626d\u66f2\u6548\u679c. \u8981\u4e07\u5206\u5f53\u5fc3,\u56e0\u4e3a\u4f60\u80af\u5b9a\u4e0d\u60f3<br/>\u8ba9\u4f60\u7684\u57fa\u5730\u5185\u90e8\u6216\u5468\u56f4\u751f\u6210\u51cb\u7075.\u626d\u66f2\u6548\u679c\u4e0e\u626d\u66f2\u503c\u76f8\u5173.5\u626d\u66f2: \u8baf\u606f10\u626d\u66f2: \u865a\u62df\u7206\u70b815\u626d\u66f2: \u786c<br/>\u5e01\u3001\u5357\u74dc20\u626d\u66f2: \u4e0b\u86cb\u3001\u751f\u6210\u5e7b\u5f7125\u626d\u66f2: \u865a\u62df\u722c\u884c\u8005\u3001\u865a\u62df\u4e0b\u96e830\u626d\u66f2: \u865a\u62dfGT\u97f3\u6548\u3001\u751f\u6210\u8759\u8760<br/>35\u626d\u66f2: \u6d41\u8840\u3001\u865a\u62df\u672b\u5f71\u4eba40\u626d\u66f2: \u751f\u6210\u53cb\u65b9\u722c\u884c\u800545\u626d\u66f2: \u8df3\u8dc3\u63d0\u5347\u3001\u53cd\u80c350\u626d\u66f2: \u5931\u7720\u3001V<br/>is\u6d41\u593155\u626d\u66f2: \u96f7\u96e860\u626d\u66f2: \u751f\u6210\u4e5d\u72f1\u7131\u876065\u626d\u66f2: \u5931\u660e\u3001\u4e2d\u6bd270\u626d\u66f2: \u7272\u755c\u4e4b\u96e875\u626d\u66f2:<br/> \u751f\u6210\u5206\u8eab80\u626d\u66f2: \u751f\u6210\u672b\u5f71\u4eba\u3001\u51cb\u96f6\u6548\u679c85\u626d\u66f2: \u602a\u98ce90\u626d\u66f2: \u672b\u5f71\u73cd\u73e095\u626d\u66f2: \u706b\u7403100<br/>\u626d\u66f2: \u5965\u672f\u77f3\u854a\u8bd5\u7eb8\u3001\u5783\u573e110\u626d\u66f2: \u9ed1\u66dc\u77f3120\u626d\u66f2: \u95ea\u7535125\u626d\u66f2: \u7269\u54c1\u680f\u4ea4\u6362130\u626d\u66f2:<br/> \u968f\u673a\u4f20\u9001140\u626d\u66f2: \u52a0\u901f150\u626d\u66f2: \u865a\u62df\u51cb\u7075\u3001\u7269\u54c1\u680f\u6df7\u4e71160\u626d\u66f2: \u7206\u70b8\u5012\u6570170\u626d\u66f2: \u8611<br/>\u83c7175\u626d\u66f2: \u4e0b\u96ea(\u751f\u6210\u96ea\u5080\u5121)180\u626d\u66f2: \u88c5\u5907\u8150\u8680190\u626d\u66f2: \u751f\u673a\u52c3\u52c3200\u626d\u66f2: \u751f\u6210\u51cb\u7075"
                },
                {
                    "name": "\u4f60\u662f\u8c01,\u4e00\u4e2a\u5973\u88c1\u7f1d?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9b54\u529b\u5e03\u5339.png",
                    "x": 396.0,
                    "y": 252.0,
                    "tooltip": "\u9b54\u529b\u5e03\u5339\u662f\u5236\u4f5c\u534e\u4e3d\u957f\u888d\u548c\u6cd5\u5e08\u5957\u88c5\u7684\u5173\u952e\u6750\u6599."
                },
                {
                    "name": "\u8fd9\u5565\u73a9\u610f\u513f\uff1f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94f6\u6811\u6811\u82d7.png",
                    "x": -36.0,
                    "y": 156.0,
                    "tooltip": "\u4f60\u5df2\u7ecf\u770b\u8fc7\u5f88\u591a\u6811\u4e86,\u800c\u5176\u4e2d\u6709\u51e0\u68f5\u770b\u8d77\u6765\u5f88\u7279\u6b8a,\u4f60\u5f88\u786e\u4fe1\u5b83\u4eec\u7684\u529f\u7528\u7edd\u5bf9\u4e0d\u53ea\u662f\u62ff\u6765\u76d6\u623f\u5b50\u6216\u662f\u70e7\u6210\u6728\u70ad.\u4f60<br/>\u975e\u5e38\u80af\u5b9a,\u8fd9\u4e9b\u4e1c\u897f\u4f1a\u975e\u5e38\u91cd\u8981,\u5f88\u5feb\u2122.\u60f3\u8981\u627e\u5230\u5b83\u4eec,\u6700\u4f73\u9009\u62e9\u662f\u9b54\u6cd5\u68ee\u6797,\u8981\u662f\u4f60\u627e\u4e0d\u7740\u7684\u8bdd,\u4e5f\u53ef\u4ee5\u8bd5\u8bd5<br/>\u82b1\u56ed\u6216\u8005\u6a31\u6843\u6811\u6797.\u6216\u662f\u968f\u610f\u95f2\u901b.\u8981\u662f\u8fd9\u4e9b\u90fd\u627e\u4e0d\u5230\u7684\u8bdd,\u4f60\u53ef\u4ee5\u53bb\"\u786c\u5e01\u3001\u786c\u5e01\u3001\u786c\u5e01\"\u4efb\u52a1\u680f\u4e70\u70b9."
                },
                {
                    "name": "\u6211\u8be5\u5230\u54ea\u627e\u7425\u73c0?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7425\u73c0.png",
                    "x": 492.0,
                    "y": 12.0,
                    "tooltip": "\u6bcf\u4e2a\u795e\u79d8\u8574\u9b54\u77f3\u77ff\u8109\u90fd\u6709\u4e00\u70b9\u7425\u73c0\u77ff\u77f3. \u6211\u6562\u80af\u5b9a\u4f60\u5df2\u7ecf\u6512\u4e86\u4e0d\u5c11\u4e86.\u987a\u4fbf\u4e00\u63d0,\u7528\u7425\u73c0\u5236\u9020\u7684GT\u5de5\u5177\u81ea\u5e26\u7cbe<br/>\u51c6\u91c7\u96c6."
                },
                {
                    "name": "\u7537\u5deb\u5973\u5deb",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u79d8\u6cd5\u957f\u888d.png",
                    "x": 492.0,
                    "y": 300.0,
                    "tooltip": "\u5982\u679c\u4f60\u5df2\u7ecf\u9020\u597d\u4e86\u7eba\u8f66,\u5e76\u5b8c\u6210\u4e86\u7814\u7a76,\u540c\u65f6\u62e5\u670950-vis\u4ee5\u4e0a\u7684\u9b54\u6756,\u90a3\u4f60\u5c31\u80fd\u5236\u9020\u8fd9\u4e9b\u4e86. \u5b83\u4eec\u975e\u5e38\u6709<br/>\u7528."
                },
                {
                    "name": "\u5899\u4e0a\u7684\u53c8\u4e00\u5757\u7816...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u672f\u77f3\u7816.png",
                    "x": 588.0,
                    "y": 156.0,
                    "tooltip": "\u73b0\u5728\u662f\u9b54\u6cd5\u65f6\u95f4. \u5728\u6784\u5efa\u6ce8\u9b54\u796d\u575b\u7684\u8fc7\u7a0b\u4e2d,\u4f60\u4f1a\u9700\u89818\u5757\u5965\u672f\u77f3\u7816.\u8fd8\u6709\u53e6\u59164\u5757\u7528\u4e8e\u70bc\u91d1\u7089.\u662f\u7684,\u4f60\u9700\u8981<br/>\u4e00\u53f0MV\u7cbe\u5bc6\u6fc0\u5149\u8680\u523b\u673a--\u641e\u5b9a\u5b83."
                },
                {
                    "name": "\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94c1\u6756\u7aef\u6728\u8d28\u6cd5\u6756.png",
                    "x": 156.0,
                    "y": 156.0,
                    "tooltip": "\u4f60\u786e\u4fe1\u5728\u8fd9\u4e2a\u4e16\u754c\u53ef\u4ee5\u627e\u5230\u4f60\u60f3\u8981\u7684\u7b54\u6848.\u4e3a\u4e86\u7ee7\u7eed\u5965\u6cd5\u4e4b\u65c5,\u4f60\u9700\u8981\u4e00\u4e9b\u9053\u5177\u6765\u5904\u7406\u88ab\u79f0\u4e3a\"VIS\"\u7684\u9b54\u6cd5\u80fd<br/>\u91cf.\u4f60\u731c\u5e94\u8be5\u5236\u4f5c\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756\u4e86!\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5f00\u59cb\u8ba8\u4f10\u66ae\u8272\u68ee\u6797\u7684BOSS\u4eec,\u90a3\u5f97\u6293\u7d27\u4e86. \u6240\u6709\u7684\u6cd5\u6756<br/>\u90fd\u9700\u8981\u67d0\u79cd\u66ae\u8272BOSS\u7684\u6389\u843d\u7269,\u66f4\u597d\u7684\u6cd5\u6756\u9700\u8981\u66f4\u540e\u9762\u7684BOSS\u6389\u843d\u7269.\u5f53\u4f60\u9996\u6b21\u51fb\u6740BOSS\u4e4b\u540e,\u5c31\u53ef<br/>\u4ee5\u4e70\u5230\u5237\u602a\u86cb\u4e86(\u53ea\u80fd\u5728\u66ae\u8272\u4f7f\u7528),\u4e5f\u53ef\u4ee5\u7528\u6218\u5229\u54c1+\u4e16\u754c\u76d0\u76f4\u63a5\u5408\u6210\u6389\u843d\u7269.\u4f60\u5e94\u5f53\u5728NEIz\u4e2d\u67e5\u770b\u6cd5\u6756\u5408<br/>\u6210\u8868. \u9b54\u5bfc\u624b\u518c\u4e2d\u7684\u5408\u6210\u8868\u5e76\u4e0d\u5b8c\u6210\u6b63\u786e."
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
                    "source": "\u94a2\u53f6",
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
                    "target": "\u94a2\u53f6"
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
                    "source": "\u597d\u7d2f...\u5fc5\u987b...\u7761\u89c9...",
                    "target": "\u8fd9\u5565\u73a9\u610f\u513f\uff1f"
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