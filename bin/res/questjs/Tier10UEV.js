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
                    "name": "Absolute Purity",
                    "symbolSize": 62.400000000000006,
                    "x": 360.0,
                    "y": 84.0,
                    "tooltip": "Absolute Baryonic Perfection! This multiblock allo<br/>ws you to create water that is pure even on the su<br/>batomic level. Not a single quark is out of place <br/>in Grade 8 Purified Water. Thanks to this purity, <br/>even more advanced processes are possible, startin<br/>g with reducing the processing time of Optical Bou<br/>les and increasing yield on Optical Chips.\n\nWhile <br/>the tooltip is certainly a lot less intimidating t<br/>han the one of the Degasser, automating this proce<br/>ss will not be an easy challenge. Have fun solving<br/> the puzzle!"
                },
                {
                    "name": "Assembling in Space",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u592a\u7a7a\u7ec4\u88c5\u6a21\u5757MK-I.png",
                    "x": -108.0,
                    "y": -84.0,
                    "tooltip": "This new Space Elevator module can be used to make<br/> lapotron orbs more easily, and to make the raw co<br/>mponents for optical circuits."
                },
                {
                    "name": "\u89c9\u9192\u6838\u5fc3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u89c9\u9192\u6838\u5fc3.png",
                    "x": 468.0,
                    "y": -192.0,
                    "tooltip": "\u5230\u76ee\u524d\u4e3a\u6b62,\u4e00\u5b9a\u8fd8\u6709\u4ec0\u4e48\u4e1c\u897f,\u6c89\u7761\u5728\u4f60\u5236\u4f5c\u548c\u7814\u7a76\u7684\u6240\u6709\u9f99\u7814\u6750\u6599\u7684\u6df1\u5904.\u662f\u65f6\u5019\u5524\u9192\u5b83\u4e86!"
                },
                {
                    "name": "Capturing Light on a Circuit Board",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5149\u5b66\u7535\u8def\u57fa\u677f.png",
                    "x": -108.0,
                    "y": -156.0,
                    "tooltip": "Using various carefully picked materials, you've m<br/>anaged to create a circuit board that will be able<br/> to contain the flows of photons in these new circ<br/>uit parts.\n\n"
                },
                {
                    "name": "Cheaper ZPM Circuits",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u751f\u7269\u5904\u7406\u5668.png",
                    "x": -192.0,
                    "y": -84.0,
                    "tooltip": "Living bio chip can perform multiple tasks at once<br/> and will make your ZPM circuits cheaper!\n\n[note]T<br/>his does cost quite a bit of hypogen, perhaps hold<br/> off on using these until you can make hypogen eas<br/>ily.[/note]"
                },
                {
                    "name": "\u5316\u5b66\u7ec8\u7ed3\u8005",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91cf\u5b50\u64cd\u7eb5\u8005.png",
                    "x": 312.0,
                    "y": -168.0,
                    "tooltip": "\u5c1d\u8bd5\u5b66\u4e60\u5e76\u4e86\u89e3\u4e16\u95f4\u4e00\u5207\u4e8b\u52a1\u7684\u8fd0\u884c\u65b9\u5f0f\u662f\u806a\u9896\u7684\u6807\u5fd7,\u7136\u800c,\u8981\u8fbe\u5230\u771f\u6b63\u7684\u660e\u667a,\u8fd8\u8981\u4e86\u89e3\u5982\u4f55\u8df3\u8fc7\u4e0d\u91cd\u8981\u7684\u4e8b<br/>\u60c5.\u4f5c\u4e3a\u79d1\u5b66\u4e0e\u5965\u79d8\u7684\u638c\u63a7\u8005,\u7269\u8d28\u7684\u7406\u5316\u5c5e\u6027\u5df2\u7ecf\u4e0d\u518d\u662f\u9650\u5236\u4f60\u524d\u884c\u7684\u969c\u788d.\u91cf\u5b50\u64cd\u7eb5\u8005\u80fd\u5e2e\u4f60\u8df3\u8fc7\u4e00\u5207\u4e0d\u5fc5\u8981<br/>\u7684\u201d\u6280\u672f\u7ec6\u8282\u201d.\u8fd9\u4e2a\u591a\u65b9\u5757\u7ed3\u6784\u7684\u76ee\u6807\u5c31\u662f\u5c06GTNH\u4e2d\u6700\u53d7\u6b22\u8fce\u548c\u6700\u91cd\u8981\u7684\u52a0\u5de5\u7ebf,\u7279\u522b\u662f\u5316\u5de5\u7ebf,\u7edf\u7edf\u6254\u6389<br/>.\u7531\u4e8e\u914d\u65b9\u4e2d\u7684\u5957\u5a03,\u4f60\u9700\u8981\u65e9\u671f\u5c42\u7ea7\u7684\u6750\u6599\u6765\u5236\u4f5c\u8f83\u9ad8\u5c42\u7ea7\u7269\u54c1\u7684\u66ff\u4ee3\u7269,\u56e0\u6b64\u6709\u8bb8\u591a\u65e9\u671f\u52a0\u5de5\u7ebf\u5728\u6574\u4e2a\u6e38\u620f\u8fc7<br/>\u7a0b\u4e2d\u4fdd\u6301\u4e0d\u53d8.\u66f4\u7cdf\u7cd5\u7684\u662f,\u4e3a\u4e86\u6ee1\u8db3\u4e0d\u65ad\u589e\u957f\u7684\u9700\u6c42,\u4f60\u9700\u8981\u4e00\u904d\u53c8\u4e00\u904d\u7684\u94fa\u8bbe\u8fd9\u4e9b\u4ea7\u7ebf.\u4e3a\u4e86\u964d\u4f4e\u5ef6\u8fdf,\u8be5\u591a<br/>\u65b9\u5757\u7ed3\u6784\u5c06\u5728\u4e00\u4e2a\u6b65\u9aa4\u4e2d\u5b8c\u6210\u8fd9\u4e9b\u4ea7\u7ebf\u7684\u5de5\u4f5c,\u800c\u4e0d\u518d\u9700\u8981\u5176\u4ed6\u989d\u5916\u7684\u5904\u7406\u6b65\u9aa4.\u91cf\u5b50\u64cd\u7eb5\u8005(Quantum <br/>Force Transformer, QFT),UEV\u9636\u6bb5\u89e3\u9501,\u5728\u4f60\u62e5\u6709\u4e86\u751f\u7269\u5904\u7406\u5668\u4e3b\u673a,\u4e00\u4e2a\u6c38\u6052\u5947<br/>\u70b9,\u548c\u4e00\u70b9\u5176\u4ed6\u6750\u6599\u540e\u5c31\u53ef\u4ee5\u5236\u9020.\u5360\u573015*15,\u7531\u8bb8\u591a\u79cd\u673a\u68b0\u65b9\u5757\u7ec4\u6210,\u5176\u4e2d\u7684\u4e24\u79cd\u53ef\u4ee5\u88ab\u5347\u7ea7\u6765\u63d0\u9ad8\u591a\u65b9<br/>\u5757\u7ed3\u6784\u7684\u7b49\u7ea7.\u5c3d\u7ba1\u5b83\u5728UEV\u65f6\u53ef\u7528,\u4f46\u5347\u7ea7\u673a\u68b0\u65b9\u5757\u9700\u8981\u5927\u91cf\u5341\u5206\u6602\u8d35\u7684\u6750\u6599,\u4ee5\u4f7f\u4f60\u80fd\u591f\u8df3\u8fc7\u66f4\u591a\u79cd\u751f\u4ea7\u7ebf<br/>.\u6bd4\u5982,\u4e00\u7ea7\u91cf\u5b50\u64cd\u7eb5\u8005\u5c31\u53ef\u4ee5\u4e3a\u4f60\u8df3\u8fc7\u94c2\u7cfb\u5904\u7406\u7ebf,\u800c\u8df3\u8fc7\u51ef\u8299\u62c9\u4ea7\u7ebf\u5219\u9700\u8981\u56db\u7ea7\u91cf\u5b50\u64cd\u7eb5\u8005.\u91cf\u5b50\u64cd\u7eb5\u8005\u7684\u6bcf<br/>\u4e2a\u914d\u65b9\u90fd\u4ee3\u8868\u4e00\u6761\u4f60\u66fe\u7ecf\u75db\u82e6\u7740\u5efa\u8bbe\u8fc7\u7684\u4ea7\u7ebf,\u6216\u67d0\u6761\u4ea7\u7ebf\u7684\u5927\u90e8\u5206.\u4f8b\u5982,\u5fd8\u6389\u90a3\u4e9b\u5927\u5316\u53cd\u5427,\u4f60\u53ef\u4ee5\u901a\u8fc7\u8f93\u5165<br/>\u78b3,\u6c27,\u6c22\u7b49\u5851\u6599\u5728\u5206\u5b50\u6c34\u5e73\u7684\u5143\u7d20\u6210\u5206,\u5c31\u5f97\u5230\u5927\u91cf\u7684\u5851\u6599\u4ea7\u54c1.\u6240\u6709\u914d\u65b9\u90fd\u67093\u4e2a\u6216\u66f4\u591a\u8f93\u51fa\u4ea7\u7269,\u6bcf\u4e2a\u8f93\u51fa<br/>\u90fd\u6709\u540c\u7b49\u6982\u7387\u51fa\u73b0,\u5373\u6bcf\u4e2a\u4ea7\u7269\u4ea7\u51fa\u7684\u6982\u7387\u662f100\u9664\u4ee5\u914d\u65b9\u8f93\u51fa\u4ea7\u7269\u7684\u6570\u91cf.\u60f3\u8981\u589e\u52a0\u67d0\u79cd\u4ea7\u7269\u4ea7\u51fa\u7684\u6982\u7387?\u6709<br/>\u4e00\u4e9b\u9644\u52a0\u673a\u5236\u53ef\u4f9b\u4f60\u4f7f\u7528.\u7b80\u800c\u8a00\u4e4b,\u91cf\u5b50\u64cd\u7eb5\u8005\u901a\u8fc7\u4f7f\u7528\u5927\u91cf\u7684\u80fd\u91cf,\u64cd\u7eb5\u91cf\u5b50\u573a\u6765\u7a33\u5b9a\u5206\u89e3\u7b80\u5355\u7684\u5206\u5b50\u5e76\u5c06\u5b83<br/>\u4eec\u7ec4\u88c5\u6210\u66f4\u590d\u6742\u7684\u5206\u5b50,\u800c\u65e0\u9700\u989d\u5916\u6dfb\u52a0\u6216\u518d\u8fdb\u884c\u5176\u4ed6\u53d7\u9650\u8fc7\u7a0b.\u552f\u4e00\u4f60\u9700\u8981\u4e3a\u91cf\u5b50\u64cd\u7eb5\u8005\u51c6\u5907\u7684\u975e\u539f\u6599\u7684\u8f93\u5165\u6750<br/>\u6599\u662f\u4e00\u4e9b\u7279\u6b8a\u7684\u50ac\u5316\u5242,\u5b83\u4eec\u662f\u82af\u7247\u5de5\u4e1a\u7684\u5dc5\u5cf0\u4e4b\u4f5c.\u80fd\u6307\u5f15\u539f\u5b50\u5230\u8fbe\u4f60\u9700\u8981\u7684\u4f4d\u7f6e,\u6765\u5f62\u6210\u4f60\u6240\u9700\u8981\u7684\u4ea7\u54c1.\u6b63<br/>\u7531\u4e8e\u8fd9\u79cd\u7279\u6027,\u5b83\u4eec\u672c\u8eab\u4e5f\u6c38\u8fdc\u4e0d\u4f1a\u635f\u574f.\u8fd9\u79cd\u76f4\u63a5\u8fc7\u7a0b\u5c06\u957f\u5904\u7406\u94fe\u7b80\u5316\u4e3a\u4e00\u4e2a\u6b65\u9aa4,\u80fd\u5c06\u4e16\u754c\u4e0a\u6240\u6709\u7684\u5316\u5de5\u6559\u6750<br/>\u6254\u8fdb\u4e0b\u6c34\u9053.\u8fd9\u79cd\u6781\u81f4\u8f6c\u5316\u6709\u4e24\u4e2a\u540e\u679c:\u5176\u4e00,\u8fd9\u4e2a\u8fc7\u7a0b\u6240\u9700\u8981\u7684\u80fd\u91cf\u6781\u5176\u5de8\u5927.\u5176\u4e8c,\u5728\u91cf\u5b50\u9886\u57df,\u4e00\u5207\u90fd\u4e0d\u662f<br/>\u786e\u5b9a\u7684,\u56e0\u6b64\u4ea7\u51fa\u7ed3\u679c\u4e5f\u662f\u4e0d\u786e\u5b9a\u7684,\u9664\u975e\u6211\u4eec\u518d\u8fdb\u4e00\u6b65.\u5c06\u518d\u591a\u7684\u80fd\u91cf,\u518d\u597d\u7684\u6750\u6599\u6254\u8fdb\u673a\u5668\u4e5f\u4e0d\u80fd\u6539\u53d8\u8fd9\u7b2c\u4e8c<br/>\u70b9,\u90a3\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48?\u63a5\u4e0b\u6765\u7684\u4e24\u4e2a\u4efb\u52a1\u5c06\u544a\u8bc9\u4f60\u7b54\u6848."
                },
                {
                    "name": "Dimensional Breach Imminent",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8d85\u7ef4\u5ea6\u7b49\u79bb\u5b50\u953b\u7089.png",
                    "x": 360.0,
                    "y": 0.0,
                    "tooltip": "At last, you have done it. The DTPF is a mighty mu<br/>ltiblock fueled by large amounts of power and cata<br/>lyst. Running it constantly for 8 hours or longer <br/>reduces catalyst consumption by 50%, so you will w<br/>ant to find a way to automate this to save on expe<br/>nsive catalyst.\n\nYou will need 2112 coil blocks in<br/> total. Accepted coil tiers are\n\n- Awakened Dracon<br/>ium\n- Infinity\n- Hypogen\n- Eternal\n\nWhile you can <br/>start with Awakened Draconium coils, you will need<br/> at least infinity coils to make tesseracts for UI<br/>V, so it may be worth it to skip to those immediat<br/>ely\n\n[note]Perhaps it can be used to bake exotic c<br/>ookies?[/note]"
                },
                {
                    "name": "Download More RAM",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5149\u5b66\u517c\u5bb9\u5185\u5b58.png",
                    "x": 108.0,
                    "y": -228.0,
                    "tooltip": "Only the most advanced memory chips will do when w<br/>orking with optical computers."
                },
                {
                    "name": "\u9f99\u8840",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9f99\u8840\u7c92.png",
                    "x": -192.0,
                    "y": 60.0,
                    "tooltip": "\u4f60\u9700\u8981\u9f99\u8840\u5236\u9020\u7b2c\u4e00\u6279\u6d77\u73c0\u73cd.\u4e5f\u8bb8\u4f60\u5df2\u7ecf\u6709\u4e86\u4e9b\u9f99\u8840,\u662f\u5f88\u4e45\u4ee5\u524d\u51fb\u6740\u672b\u5f71\u9f99\u6389\u843d\u7684,\u6b63\u8eba\u5728\u67d0\u4e2a\u5730\u65b9.\u4e0d\u8fc7\u8fd8<br/>\u6709\u4e24\u4e2a\u5176\u4ed6\u9009\u62e9:\u871c\u8702\u548c\u9f99\u7814\u805a\u5408\u88c5\u7f6e(DE Fusion Crafter).\u5bf9\u4e8e\u871c\u8702\u8def\u7ebf,\u4f60\u9700\u8981\u6df1\u5165\u7814<br/>\u7a76\u871c\u8702\u57f9\u80b2\u7ebf,\u4f46\u8bf4\u4e0d\u5b9a\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86?\u4e0d\u8bba\u5982\u4f55,\u770b\u770b\"\u871c\u8702\u80b2\u79cd\"\u4efb\u52a1\u680f\u5427.\u5728\u9f99\u7814\u805a\u5408\u88c5\u7f6e\u4e2d\u6709\u4e24\u4e2a\u914d\u65b9.<br/>\u8f83\u597d\u7684\u4e00\u4e2a\u8981\u7528\u5230\u5deb\u672fmod\u7684\u65e0\u9650\u4e4b\u86cb.\u5982\u679c\u4f60\u6ca1\u6709\u5deb\u672f\u8fdb\u5ea6\u7684\u8bdd,\u5c31\u53ea\u80fd\u7528\u666e\u901a\u9f99\u86cb,\u4f7f\u7528\u8f83\u5f31\u7684\u914d\u65b9\u4e86.\u53ea<br/>\u8981\u4f60\u6709\u4e86\u4e9b\u6d77\u73c0\u73cd,\u5c31\u80fd\u4ee5\u6b64\u5f00\u59cb\u5728\u8d85\u7ef4\u5ea6\u7b49\u79bb\u5b50\u953b\u7089(DTPF)\u4e2d\u5236\u9020\u66f4\u591a,\u800c\u4e0d\u9700\u8981\u9f99\u8840\u4e86.\u6211\u4e0d\u77e5\u9053\u4e3a\u4f55<br/>\u8fd9\u4e48\u8bbe\u8ba1,\u8981\u62b1\u6028\u5c31\u627eColen\u5427.\u4e0d\u8fc7,\u4f60\u6700\u7ec8\u8fd8\u662f\u9700\u8981\u66f4\u591a\u7684\u9f99\u8840,\u4ee5\u5236\u9020UMV\u8d85\u5bfc.\u5b9e\u9645\u4e0a\u8fd8\u6709\u53e6\u4e00\u79cd<br/>\u65b9\u6cd5\u83b7\u5f97\u9f99\u8840,\u8fd9\u4e0e\u9f99\u7814\u805a\u5408\u88c5\u7f6e\u7684\u914d\u65b9\u76f8\u4f3c,\u4e0d\u8fc7\u662f\u7528\u6405\u62cc\u673a.\u5b83\u7684\u901f\u5ea6\u66f4\u6162,\u8d44\u6e90\u5229\u7528\u7387\u66f4\u4f4e.\u5c24\u5176\u8981\u6ce8\u610f\u7684<br/>\u662f,\u8fd9\u4e2a\u914d\u65b9\u4f1a\u6d88\u8017\u9f99\u86cb.\u6240\u4ee5\u53ea\u6709\u5728\u4f60\u9700\u8981\u5b8c\u5168\u907f\u5f00\u9b54\u6cd5\u548c\u871c\u8702\u7ebf\u7684\u65f6\u5019,\u624d\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u914d\u65b9.\u6d41\u4f53\u4efb\u52a1\u76ee\u6807\u53ea<br/>\u8981\u6c42\u4f60\u7269\u54c1\u680f\u5185\u67d0\u4e2a\u5bb9\u5668\u4e2d\u6709\u76f8\u5e94\u7684\u6d41\u4f53.(\u5355\u5143\u3001\u901a\u7528\u6d41\u4f53\u5355\u5143\u3001\u5927\u578b\u5355\u5143\u3001\u5bb9\u91cf\u74f6,\u7b49\u7b49.)"
                },
                {
                    "name": "Dreams of Rainbow... Stargates?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9876\u5c16\u5de5\u7a0b\u5e08\u52cb\u7ae0.png",
                    "x": 156.0,
                    "y": -156.0,
                    "tooltip": "UEV energy hatches? Great! Time for stargate troph<br/>y number two. \nOnce again, to get your trophy you <br/>have to submit two stargates' worth of materials.\n<br/>\n\u00a73Trophy number two brings us to chapter two of o<br/>ur journey through GT:NHs past, the early UEV era.<br/>\n\nThe year 2022 has just begun and the UEV tier, a<br/>lbeit still quite empty, has become more useful th<br/>an before. UEV-UMV energy hatches now have proper <br/>recipes (although with UEV parts) and optical SMDs<br/> are a thing now, hooray. \nThere finally are bette<br/>r powergen options than regular plasma turbine spa<br/>m, namely naq fuel and compact fusions + XL plasma<br/> turbine spam. Technically dyson too, but that is <br/>horribly bugged and its 'legit' power output reaso<br/>nably can't exceed around 6 billion eu/t (around t<br/>he same as a compact MK4 running helium plasma).\nS<br/>ome useful newly introduced multis are the PrAss, <br/>MCR & Mega Oil Cracker and overclocks past MAX vol<br/>tage are possible on megas now.\nStargate has once <br/>again become a distant goal, as it now required ex<br/>orbitant amounts or infinity catalyst and bio circ<br/>uits, requiring to utilize the new tech to its ful<br/>lest.\n\nTwo players, \u00a7aPhineasor\u00a73 & \u00a7aGDCloud\u00a73 we<br/>re determined to be first to completing this goal,<br/> and after months of a close friendly race, the wi<br/>nner had been decided. \u00a7a\nGDCloud\u00a73 won the race a<br/>nd conquered this round of nerfs on the \u00a7a27th of <br/>May, 2022\u00a73.\n\nP.S.: Once again, if you want to be <br/>faithful to the challenge, try completing it witho<br/>ut these additions:\n-PCB Factory, Space Elevator, <br/>Component Assemblyline, AAL, EEC, EIG, MABS\n-Any b<br/>ee related GT machines\n-Any UEV or above multis (e<br/>xcept weak dyson and naq refineries)\n-LEG\n-Sub 1-t<br/>ick OC, Batch Mode, inbuilt Void Protection on mul<br/>tis\n-PAs with more than 64 parallel (they automati<br/>cally downtiered to UHV if you used UEV machines)\n<br/>-Level Maintainer, AE Fluid Crafting, Stocking Bus<br/>es/Hatches, Crafting Input Buses, ME Output Hatche<br/>s\n\nP.P.S.: Again the chaotic capacitor banks have <br/>been left out for the same reason as stated in the<br/> UV gate quest. Oh and the stargate parts used to <br/>be UXV recipes, but since UMV hatches are not craf<br/>table in UEV anymore, they have been downtiered to<br/> UIV to make them craftable in UEV.\n"
                },
                {
                    "name": "Fueling the DTPF",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6fc0\u53d1\u7684\u5f02\u661f\u8d85\u7ef4\u5ea6\u50ac\u5316\u5242\u5355\u5143.png",
                    "x": 216.0,
                    "y": 84.0,
                    "tooltip": "To run the DTPF, you will need to feed it excited <br/>catalyst. There are four tiers of catalyst you can<br/> make right now, and one more to unlock later. Mak<br/>ing these catalysts requires a lot of power and ti<br/>me, so you will almost certainly want to passive t<br/>his with many machines.\n\nIn UIV, you will unlock t<br/>he \u00a7p\u00a7oplasma mixer\u00a7r, a dedicated multiblock that<br/> can make catalyst much faster than you currently <br/>can, although this comes at an enormous power cost<br/>. Either way, it's probably a good idea to get thi<br/>s as soon as you can."
                },
                {
                    "name": "\u74f6\u4e2d\u7684\u94f6\u6cb3...?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6838\u805a\u53d8\u53cd\u5e94\u5806\u63a7\u5236\u7535\u8111MK IV.png",
                    "x": -108.0,
                    "y": 60.0,
                    "tooltip": "\u795d\u4f60\u597d\u8fd0,\u8fd9\u73a9\u610f\u7684\u96be\u5ea6\u662fMK3\u7684\u8bb8\u591a\u8bb8\u591a\u8bb8\u591a\u500d. \u9700\u8981\u8bb8\u591a\u7ec8\u6781\u6750\u6599,\u6bd4\u5982\u6d77\u73c0\u73cd."
                },
                {
                    "name": "\u6d77\u73c0\u73cd",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6d77\u73c0\u73cd\u952d.png",
                    "x": -192.0,
                    "y": -24.0,
                    "tooltip": "\u8fd9,\u5c31\u662f\u6700\u9ad8\u7ea7\u7684GT++\u6750\u6599.\u5b83\u9700\u8981UIV\u7535\u538b\u624d\u80fd\u52a0\u5de5.\u6240\u4ee5\u73b0\u5728\u4f60\u53ea\u80fd\u7528GT++\u7684\u5927\u578b\u52a0\u5de5\u5382\u56fa\u5316\u5b83.<br/>\u53ea\u8981\u62ff\u5230\u4e86\u7b2c\u4e00\u5757\u952d,\u5c31\u53ef\u4ee5\u7528\u8d85\u7ef4\u5ea6\u7b49\u79bb\u5b50\u953b\u7089(DTPF)\u5236\u53d6\u66f4\u591a\u4e86.\u6211\u60f3\u90a3\u4e2a\u914d\u65b9\u5e94\u8be5\u6bd4\u7528MK4\u6838\u805a\u53d8<br/>\u597d\u591a\u4e86.\u8fd9\u5757\u86cb\u7cd5\u5c31\u662f\u5bf9\u4f60\u8d70\u5230\u8fd9\u4e00\u6b65\u7684\u5956\u52b1."
                },
                {
                    "name": "Infinity Boots",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u5c3d\u9774\u5b50.png",
                    "x": 504.0,
                    "y": -132.0,
                    "tooltip": "An armorset worthy of a God. These boots provide a<br/> permanent jump boost and increased running speed.<br/>\n\nWhile wearing the complete set, you are complete<br/>ly unkillable."
                },
                {
                    "name": "Infinity Breastplate",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u5c3d\u80f8\u7532.png",
                    "x": 516.0,
                    "y": -216.0,
                    "tooltip": "An armorset worthy of a God. This breastplate prov<br/>ides the user infinite creative flight and removes<br/> all negative debuffs.\n\nWhile wearing the complete<br/> set, you are completely unkillable."
                },
                {
                    "name": "\u65e0\u5c3d\u7bb1\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u5c3d\u7bb1\u5b50.png",
                    "x": 168.0,
                    "y": -36.0,
                    "tooltip": "\u5b58\u50a8\u6700\u591a243\u79cd\u4e0d\u540c\u7269\u54c1,\u6bcf\u79cd\u7269\u54c1\u7684\u6700\u5927\u5806\u53e0\u6570\u4e3a2,147,483,648. \u865a\u7a7a\u91c7\u77ff\u573a\u6316\u5230\u7684\u77ff\u7269\u592a<br/>\u591a\u65e0\u5904\u5b58\u653e,\u8bd5\u8bd5\u8fd9\u4e2a\u5427."
                },
                {
                    "name": "\u65e0\u5c3d\u5934\u76d4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u5c3d\u5934\u76d4.png",
                    "x": 504.0,
                    "y": -252.0,
                    "tooltip": "\u65e0\u5c3d\u5934\u76d4\u63d0\u4f9b\u65e0\u5c3d\u7684\u9971\u98df\u5ea6\u548c\u6c27\u6c14\u503c."
                },
                {
                    "name": "Infinity Pants",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u5c3d\u62a4\u817f.png",
                    "x": 516.0,
                    "y": -168.0,
                    "tooltip": "An armorset worthy of a God. These pants have no s<br/>pecial effects on their own but are required to co<br/>mplete the full infinity set.\n\n\nWhile wearing the <br/>complete set, you are completely unkillable."
                },
                {
                    "name": "\u5929\u5802\u9668\u843d\u957f\u5f13",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5929\u5802\u9668\u843d\u957f\u5f13.png",
                    "x": 420.0,
                    "y": -168.0,
                    "tooltip": "\u4e0e\u540c\u7b49\u7b49\u7ea7\u7684\u6b66\u5668,\u751a\u81f3\u4e0e\u8fd9\u628a\u5f13\u7684\u5408\u6210\u6750\u6599\u6b66\u5668\u76f8\u6bd4,\u8fd9\u628a\u5f13\u90fd\u5f88\u5f31. \u5b83\u4e0d\u6d88\u8017\u7bad,\u4e0d\u4f1a\u78e8\u635f,\u9020\u621010\u70b9\u4f24<br/>\u5bb3,\u5e76\u4e14\u8fd8\u6709AoE\u653b\u51fb,\u4f1a\u4ece\u5929\u800c\u964d10\u652f\u7bad,\u6bcf\u6b21\u51fb\u4e2d\u90fd\u4f1a\u9020\u621010\u70b9\u4f24\u5bb3.\u8bd1\u8005\u6ce8: \u6839\u636emcmod\u6570\u636e<br/>,\u4f24\u5bb3\u4e3a80\u5de6\u53f3,AoE\u7bad\u77e2\u6570\u91cf\u4e3a36\u652f."
                },
                {
                    "name": "My Eyes Hurt! #1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5149\u5b66\u5904\u7406\u5668.png",
                    "x": 0.0,
                    "y": -300.0,
                    "tooltip": "Finally, you are ready to assemble these new circu<br/>its. This is a UV-tier circuit."
                },
                {
                    "name": "My Eyes Hurt! #2",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5149\u5b66\u5904\u7406\u5668\u96c6\u7fa4.png",
                    "x": 216.0,
                    "y": -300.0,
                    "tooltip": "The optical assembly is the second optical circuit<br/>. It is a UHV-tier circuit."
                },
                {
                    "name": "My Eyes Hurt! #3",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5149\u5b66\u5904\u7406\u5668\u8d85\u7ea7\u7535\u8111.png",
                    "x": 360.0,
                    "y": -300.0,
                    "tooltip": "The optical computer is the third optical circuit.<br/> It is a UEV-tier circuit"
                },
                {
                    "name": "\u5149\u5b66\u7535\u8def",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5149\u5b66\u5904\u7406\u5668\u4e3b\u673a.png",
                    "x": 360.0,
                    "y": -192.0,
                    "tooltip": "\u8fd9\u662f\u4e00\u7cfb\u5217\u5168\u65b0\u7684\u7535\u8def\u677f!\u5c06\u6765\u4f1a\u6709\u66f4\u591a\u7684\u4efb\u52a1."
                },
                {
                    "name": "\u81ea\u7136\u8352\u829c\u4e4b\u65a7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u81ea\u7136\u8352\u829c\u4e4b\u65a7.png",
                    "x": 420.0,
                    "y": -216.0,
                    "tooltip": "\u65e0\u5c3d\u65a7,\u6c38\u4e0d\u78e8\u635f,\u80fd\u591f\u7acb\u5373\u780d\u5012\u6574\u68f5\u6811.\u8fd9\u662f\u4e00\u628a\u9ad8\u7ea7\u4f10\u6728\u65a7\u5b8c\u5168\u65e0\u6cd5\u505a\u5230\u7684."
                },
                {
                    "name": "One Last Time",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7ec8\u6781\u7535\u8def\u7ec4\u88c5\u673a.png",
                    "x": 0.0,
                    "y": -84.0,
                    "tooltip": "For the final circuit line currently in the game, <br/>you will need to make one last circuit assembler."
                },
                {
                    "name": "\u661f\u7403\u541e\u566c\u4e4b\u94f2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u661f\u7403\u541e\u566c\u4e4b\u94f2.png",
                    "x": 468.0,
                    "y": -264.0,
                    "tooltip": "\u65e0\u5c3d\u94f2,\u6c38\u4e0d\u78e8\u635f,\u80fd\u591f\u4e00\u6b21\u6316\u639816x16x16\u8303\u56f4."
                },
                {
                    "name": "Something From Nothing, Part 3?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u592a\u7a7a\u94bb\u673a\u6a21\u5757MK-I.png",
                    "x": 192.0,
                    "y": -132.0,
                    "tooltip": "Suck up liquids like never before! This module rep<br/>laces the infinite fluid drilling rig, but has the<br/> convenience of being inside your space elevator. <br/>Look at the NEI recipes to see which fluids you ca<br/>n pump with this."
                },
                {
                    "name": "Stabilized Baryonic Matter",
                    "symbolSize": 62.400000000000006,
                    "x": 360.0,
                    "y": 156.0,
                    "tooltip": "After automating Absolute Baryonic Perfection Puri<br/>fication Unit, you slowly start getting Stabilized<br/> Baryonic Matter, at a rate of 500mb/parallel ever<br/>y 120 seconds."
                },
                {
                    "name": "Stopping the Infinity Bleed",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u90e8\u4ef6\u88c5\u914d\u7ebf\u5916\u58f3(UEV).png",
                    "x": 240.0,
                    "y": -132.0,
                    "tooltip": "Already struggling to keep up with infinity demand<br/>? Not to worry, the component assembly line may ju<br/>st be what you need. You probably have one already<br/>. Upgrade it to UEV to allow creating UEV componen<br/>ts at a significantly reduced cost."
                },
                {
                    "name": "\u5bf0\u5b87\u652f\u914d\u4e4b\u5251",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5bf0\u5b87\u652f\u914d\u4e4b\u5251.png",
                    "x": 432.0,
                    "y": -132.0,
                    "tooltip": "\u9664\u4e86\u62e5\u6709\u5b8c\u6574\u65e0\u5c3d\u5957\u7684\u73a9\u5bb6,\u8fd9\u628a\u5251\u53ef\u4ee5\u4e00\u51fb\u6740\u6b7b\u4efb\u4f55\u751f\u7269\u6216\u73a9\u5bb6. \u7c7b\u4f3c\u4e8e/kill\u6307\u4ee4\u51fb\u6740.(\u8bd1\u8005\u6ce8: <br/>\u5b9e\u9645\u673a\u5236\u66f4\u52a0\u590d\u6742...)"
                },
                {
                    "name": "\u8d85\u7acb\u65b9\u4f53",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7c97\u5236\u8d85\u7acb\u65b9\u4f53.png",
                    "x": 444.0,
                    "y": 0.0,
                    "tooltip": "\u5176\u6784\u9020\u662f\u4f60\u65e0\u6cd5\u7406\u89e3\u7684.\u4e0d\u8fc7,\u8fd9\u4e2a\u9ad8\u7ef4\u5ea6\u7684\u7269\u4ef6\u8fd8\u662f\u5f88\u5bb9\u6613\u7528\u7c89\u788e\u673a\u6253\u788e\u7684."
                },
                {
                    "name": "The Final Frontier!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u751f\u9543\u77ff\u77f3.png",
                    "x": 108.0,
                    "y": -84.0,
                    "tooltip": "With the \u00a71\u00a7lMothership\u00a7r (see the Space Race tab <br/>for how to build one) you can visit the truly last<br/> system: the Amun-Ra system. It has six planets an<br/>d moons you can visit, each with at least one uniq<br/>ue ore vein.\n\n\n\u00a7l\u00a7nAnubis\u00a7r\nInfinity Catalyst vein<br/> (Neutronium, Adamantium, Infinity Catalyst, Bedro<br/>ckium)\n\n\u00a7l\u00a7nHorus\u00a7r\nCosmic Neutronium vein (Neutro<br/>nium, Cosmic Neutronium, Black Plutonium, Bedrocki<br/>um)\n\n\u00a7l\u00a7nMaahes\u00a7r\nNaquadria vein (Naquadah, Enrich<br/>ed Naquadah, Naquadria, Trinium)\n\n\u00a7l\u00a7nMehen Belt\u00a7r<br/>\nAwakened Draconium vein (Draconium, Draconium, Aw<br/>akened Draconium, Nether Star)\n\n\u00a7l\u00a7nNeper\u00a7r\nDilith<br/>ium (Dilithium, Dilithium, Mysterious Crystal, Vin<br/>teum)\n\n\u00a7l\u00a7nSeth\u00a7r\nRaw Tengam (Raw Tengam, Raw Teng<br/>am, Electrotine, Samarium)\n\n\nRaw Tengam is the vei<br/>n you will want the most, as you can process Raw T<br/>engam into Attuned Tengam, which is the UEV+ repla<br/>cement for Magnetic Samarium. On Horus and Neper g<br/>enerate Certus Quartz veins (Certus Quartz, Certus<br/> Quartz, Charged Certus Quartz, Quartz Sand) aswel<br/>l \u00a7mI can't imagine why you would still need that <br/>though\u00a7r."
                },
                {
                    "name": "The Perfect CPU?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5149\u5b66\u5b8c\u7f8eCPU.png",
                    "x": -108.0,
                    "y": -228.0,
                    "tooltip": "Using your new optically enhanced boards and chips<br/>, you've managed to create what looks like the per<br/>fect CPU! Surely this will be able to handle even <br/>the advanced computations you need to perform to b<br/>reach dimensional boundaries."
                },
                {
                    "name": "The Quest for Holy Water",
                    "symbolSize": 62.400000000000006,
                    "x": 0.0,
                    "y": -156.0,
                    "tooltip": "You got to take a well deserved break from the wat<br/>erline in UHV, but now that you are going to be ma<br/>king optical circuits, your Grade 6 Purified Water<br/> will no longer be enough. Using the Degasser, you<br/> can remove all the leftover decontaminants from p<br/>revious processes and make even more pure water, p<br/>ure enough for Optical Circuits. \n\nThe tooltip and<br/> list of requirements looks intimidating. Try brea<br/>king it down into small, digestible units of logic<br/> and you will quickly arrive at a solution."
                },
                {
                    "name": "Tier 10 (UEV)",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/UEV\u673a\u5668\u5916\u58f3.png",
                    "x": 0.0,
                    "y": 0.0,
                    "tooltip": "Welcome to UEV! Now that you've started making you<br/>r first infinity, it's time to start scaling up. I<br/>n this tier, every component will require infinity<br/>. Be prepared to make tons. Your main goal to adva<br/>nce will be to build the Dimensionally Transcenden<br/>t Plasma Forge, also known as the DTPF. This massi<br/>ve multiblock will unlock new powerful recipes to <br/>create infinity, neutronium and other special mate<br/>rials."
                },
                {
                    "name": "UEV Energy Hatch",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/UEV\u80fd\u6e90\u4ed3.png",
                    "x": 108.0,
                    "y": -156.0,
                    "tooltip": "Another tier, another energy hatch. You can use th<br/>ese to overclock your assembly lines to UIV voltag<br/>e and speed them up."
                },
                {
                    "name": "UEV Superconductors",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/1xUEV\u8d85\u5bfc\u5bfc\u7ebf.png",
                    "x": 216.0,
                    "y": -228.0,
                    "tooltip": "UEV superconductors, another great infinity sink. <br/>You can make the celestial tungsten and advanced n<br/>itinol in a laser engraver directly, but this is q<br/>uite slow. Perhaps consider using the celestial tu<br/>ngsten plasma line?"
                },
                {
                    "name": "Using Light to Compute",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5149\u5b66\u88f8\u7247.png",
                    "x": 0.0,
                    "y": -228.0,
                    "tooltip": "Carefully treating raw computer parts with purifie<br/>d water allows you to make optically enhanced chip<br/>s. These use light waves to do computations at a s<br/>peed you previously couldn't imagine. Making them <br/>is quite an involved process however."
                },
                {
                    "name": "\u6b22\u8fce\u6765\u5230\u5730\u72f1!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4e0d\u518d\u662f\u83dc\u9e1f\u7684\u8bc1\u660e.png",
                    "x": 0.0,
                    "y": 72.0,
                    "tooltip": "\u606d\u559c,\u4f60\u5df2\u7ecf\u901a\u8fc7\u4e86\u8fd9\u4e2a\u6574\u5408\u5305\u7684\u5927\u90e8\u5206\u5185\u5bb9.\u8fd9\u91cc\u6709\u4e00\u4e9b\u4e27\u5fc3\u75c5\u72c2\u7684\u6700\u7ec8\u6311\u6218.\u5148\u7ed9\u6211\u770b\u770b\u4f60\u7684\u8bc1\u660e\u5427."
                },
                {
                    "name": "\u597d\u5427,\u770b\u8d77\u6765...\u95ea\u4eae?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6c38\u6052\u5947\u70b9.png",
                    "x": 216.0,
                    "y": 0.0,
                    "tooltip": "\u6c38\u6052\u5947\u70b9,\u7531GTNH\u4e2d\u51e0\u4e4e\u6240\u6709\u8d44\u6e90\u6784\u6210. \u4e00\u4e2a\u661f\u95e8\u9700\u8981\u5c06\u8fd15000\u4e2a\u6c38\u6052\u5947\u70b9."
                },
                {
                    "name": "Wireless Data for Your Assembly Lines!",
                    "symbolSize": 31.200000000000003,
                    "x": 312.0,
                    "y": -216.0,
                    "tooltip": "Wireless Data Bank Transmission Connector and Wire<br/>less Assembly line Reception Connector lets you av<br/>oid building and connecting dozens of Data Banks a<br/>nd Optical Fiber Cable for the upcoming Assembly L<br/>lines you might have to build.\n\nTo use it, you hav<br/>e to screwdriver the Data Bank that is storing the<br/> data sticks, place a Wireless Data Bank Transmiss<br/>ion Connector into the Data Bank, then Wireless As<br/>sembly line Reception Connector for the Assembly L<br/>ines.\n\n[note]Wireless Data Hatches are N:M instead<br/> of 1:1[/note]"
                },
                {
                    "name": "\u4e16\u754c\u5d29\u89e3\u4e4b\u9550",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4e16\u754c\u5d29\u89e3\u4e4b\u9550.png",
                    "x": 432.0,
                    "y": -252.0,
                    "tooltip": "\u65e0\u5c3d\u9550,\u6c38\u4e0d\u78e8\u635f,\u80fd\u591f\u7834\u574f\u57fa\u5ca9\u4e14\u4e00\u6b21\u53ef\u4ee5\u6316\u639816x16x16\u8303\u56f4."
                },
                {
                    "name": "\u4f60\u77e5\u9053\u8be5\u600e\u4e48\u505a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7535\u52a8\u9a6c\u8fbe(UEV).png",
                    "x": 216.0,
                    "y": -84.0,
                    "tooltip": "\u6211\u4e0d\u786e\u5b9a\u5b83\u4eec\u5230\u5e95\u6709\u6ca1\u6709\u7528,\u4e0d\u8fc7\u5b83\u4eec\u770b\u8d77\u6765\u84dd\u84dd\u7684\u6240\u4ee5\u6709\u70b9\u9177."
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
                    "source": "Dimensional Breach Imminent",
                    "target": "Absolute Purity"
                },
                {
                    "source": "\u592a\u7a7a\u7535\u68af",
                    "target": "Assembling in Space"
                },
                {
                    "source": "Tier 10 (UEV)",
                    "target": "Assembling in Space"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u89c9\u9192\u6838\u5fc3"
                },
                {
                    "source": "\u5149\u5b66\u7535\u8def",
                    "target": "\u89c9\u9192\u6838\u5fc3"
                },
                {
                    "source": "\u53cc\u8db3\u98de\u9f99\u6838\u5fc3",
                    "target": "\u89c9\u9192\u6838\u5fc3"
                },
                {
                    "source": "Assembling in Space",
                    "target": "Capturing Light on a Circuit Board"
                },
                {
                    "source": "PCB\u5de5\u5382",
                    "target": "Capturing Light on a Circuit Board"
                },
                {
                    "source": "\u6d77\u73c0\u73cd",
                    "target": "Cheaper ZPM Circuits"
                },
                {
                    "source": "\u5149\u5b66\u7535\u8def",
                    "target": "\u5316\u5b66\u7ec8\u7ed3\u8005"
                },
                {
                    "source": "\u74f6\u4e2d\u7684\u94f6\u6cb3...?",
                    "target": "\u5316\u5b66\u7ec8\u7ed3\u8005"
                },
                {
                    "source": "\u597d\u5427,\u770b\u8d77\u6765...\u95ea\u4eae?",
                    "target": "\u5316\u5b66\u7ec8\u7ed3\u8005"
                },
                {
                    "source": "\u5149\u5b66\u7535\u8def",
                    "target": "Dimensional Breach Imminent"
                },
                {
                    "source": "Fueling the DTPF",
                    "target": "Dimensional Breach Imminent"
                },
                {
                    "source": "\u597d\u5427,\u770b\u8d77\u6765...\u95ea\u4eae?",
                    "target": "Dimensional Breach Imminent"
                },
                {
                    "source": "\u4f60\u77e5\u9053\u8be5\u600e\u4e48\u505a",
                    "target": "Dimensional Breach Imminent"
                },
                {
                    "source": "Assembling in Space",
                    "target": "Download More RAM"
                },
                {
                    "source": "UEV Superconductors",
                    "target": "Download More RAM"
                },
                {
                    "source": "Using Light to Compute",
                    "target": "Download More RAM"
                },
                {
                    "source": "\u74f6\u4e2d\u7684\u94f6\u6cb3...?",
                    "target": "\u9f99\u8840"
                },
                {
                    "source": "UEV Energy Hatch",
                    "target": "Dreams of Rainbow... Stargates?"
                },
                {
                    "source": "Tier 10 (UEV)",
                    "target": "Fueling the DTPF"
                },
                {
                    "source": "Tier 10 (UEV)",
                    "target": "\u74f6\u4e2d\u7684\u94f6\u6cb3...?"
                },
                {
                    "source": "\u9f99\u8840",
                    "target": "\u6d77\u73c0\u73cd"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "Infinity Boots"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "Infinity Breastplate"
                },
                {
                    "source": "\u597d\u5427,\u770b\u8d77\u6765...\u95ea\u4eae?",
                    "target": "\u65e0\u5c3d\u7bb1\u5b50"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "\u65e0\u5c3d\u5934\u76d4"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "\u65e0\u5c3d\u5934\u76d4"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "Infinity Pants"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "\u5929\u5802\u9668\u843d\u957f\u5f13"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "\u5929\u5802\u9668\u843d\u957f\u5f13"
                },
                {
                    "source": "\u5149\u5b66\u8d34\u7247\u5143\u4ef6",
                    "target": "My Eyes Hurt! #1"
                },
                {
                    "source": "The Perfect CPU?",
                    "target": "My Eyes Hurt! #1"
                },
                {
                    "source": "Download More RAM",
                    "target": "My Eyes Hurt! #1"
                },
                {
                    "source": "My Eyes Hurt! #1",
                    "target": "My Eyes Hurt! #2"
                },
                {
                    "source": "My Eyes Hurt! #2",
                    "target": "My Eyes Hurt! #3"
                },
                {
                    "source": "My Eyes Hurt! #3",
                    "target": "\u5149\u5b66\u7535\u8def"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "\u81ea\u7136\u8352\u829c\u4e4b\u65a7"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "\u81ea\u7136\u8352\u829c\u4e4b\u65a7"
                },
                {
                    "source": "Tier 10 (UEV)",
                    "target": "One Last Time"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "\u661f\u7403\u541e\u566c\u4e4b\u94f2"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "\u661f\u7403\u541e\u566c\u4e4b\u94f2"
                },
                {
                    "source": "\u592a\u7a7a\u7535\u68af",
                    "target": "Something From Nothing, Part 3?"
                },
                {
                    "source": "\u00a76\u00a7lSomething From Nothing pt 2",
                    "target": "Something From Nothing, Part 3?"
                },
                {
                    "source": "\u4f60\u77e5\u9053\u8be5\u600e\u4e48\u505a",
                    "target": "Something From Nothing, Part 3?"
                },
                {
                    "source": "Absolute Purity",
                    "target": "Stabilized Baryonic Matter"
                },
                {
                    "source": "\u00a76\u00a7l\u00a76\u00a7lComponent Assembly Line",
                    "target": "Stopping the Infinity Bleed"
                },
                {
                    "source": "\u4f60\u77e5\u9053\u8be5\u600e\u4e48\u505a",
                    "target": "Stopping the Infinity Bleed"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "\u5bf0\u5b87\u652f\u914d\u4e4b\u5251"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "\u5bf0\u5b87\u652f\u914d\u4e4b\u5251"
                },
                {
                    "source": "\u5347\u7ea7\u65e0\u5c3d\u7ebf\u5708",
                    "target": "\u8d85\u7acb\u65b9\u4f53"
                },
                {
                    "source": "Dimensional Breach Imminent",
                    "target": "\u8d85\u7acb\u65b9\u4f53"
                },
                {
                    "source": "Tier 10 (UEV)",
                    "target": "The Final Frontier!"
                },
                {
                    "source": "Capturing Light on a Circuit Board",
                    "target": "The Perfect CPU?"
                },
                {
                    "source": "Using Light to Compute",
                    "target": "The Perfect CPU?"
                },
                {
                    "source": "One Last Time",
                    "target": "The Quest for Holy Water"
                },
                {
                    "source": "UEV Energy Hatch",
                    "target": "The Quest for Holy Water"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "Tier 10 (UEV)"
                },
                {
                    "source": "\u7535\u8def\u677f\u5927\u5e08",
                    "target": "Tier 10 (UEV)"
                },
                {
                    "source": "UEV Superconductors",
                    "target": "UEV Energy Hatch"
                },
                {
                    "source": "\u4f60\u77e5\u9053\u8be5\u600e\u4e48\u505a",
                    "target": "UEV Superconductors"
                },
                {
                    "source": "The Quest for Holy Water",
                    "target": "Using Light to Compute"
                },
                {
                    "source": "\u6740\u622e:\u8fdb\u5316",
                    "target": "\u6b22\u8fce\u6765\u5230\u5730\u72f1!"
                },
                {
                    "source": "Tier 10 (UEV)",
                    "target": "\u6b22\u8fce\u6765\u5230\u5730\u72f1!"
                },
                {
                    "source": "Tier 10 (UEV)",
                    "target": "\u597d\u5427,\u770b\u8d77\u6765...\u95ea\u4eae?"
                },
                {
                    "source": "\u5149\u5b66\u7535\u8def",
                    "target": "Wireless Data for Your Assembly Lines!"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "\u4e16\u754c\u5d29\u89e3\u4e4b\u9550"
                },
                {
                    "source": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "target": "\u4e16\u754c\u5d29\u89e3\u4e4b\u9550"
                },
                {
                    "source": "The Final Frontier!",
                    "target": "\u4f60\u77e5\u9053\u8be5\u600e\u4e48\u505a"
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