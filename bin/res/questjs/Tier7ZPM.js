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
                    "name": "\u5916\u58f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u571f\u536b\u4e8c\u5730\u7262\u7816.png",
                    "x": 660.0,
                    "y": 228.0,
                    "tooltip": "\u6211\u9700\u8981\u4e00\u4e9b\u5236\u9020\u5916\u58f3\u7684\u6750\u6599. \u518d\u8bf4\u4e00\u6b21,\u6676\u4f53\u6750\u6599\u5c06\u662f\u6700\u597d\u7684\u9009\u62e9,\u56e0\u4e3a\u6211\u559c\u6b22\u5b83\u4eec\u7684\u5149\u6cfd. \u6211\u6d4b\u8bd5\u4e86\u6211\u77e5\u9053<br/>\u7684\u6240\u6709\u6676\u4f53\u6750\u6599,\u4f46\u662f\u6ca1\u6709\u4e00\u79cd\u6676\u4f53\u53ef\u4ee5\u6ee1\u8db3\u6211\u7684\u8981\u6c42. \u542c\u8bf4\u4f60\u6700\u8fd1\u6709\u7a7a\uff1f\u4f60\u5728\u5916\u8fb9\u5192\u9669\u7684\u65f6\u5019\u80fd\u4e0d\u80fd\u5e2e\u6211\u627e\u4e00<br/>\u627e\u5408\u9002\u7684\u6750\u6599\uff1f"
                },
                {
                    "name": "\u8fd8\u6709\u70b9\u4e8b\u513f...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/ZPM\u673a\u5668\u5916\u58f3.png",
                    "x": 576.0,
                    "y": 360.0,
                    "tooltip": "\u597d\u5427,\u6211\u8fd9\u91cc\u6709\u5168\u5957\u7684\u7ec4\u88c5\u8bbe\u5907.\u4f46\u662f\u4f60\u80fd\u5e2e\u6211\u51c6\u5907\u4e00\u4e9b\u989d\u5916\u7684\u914d\u4ef6\u5417\uff1f \u6211\u9700\u8981\u5347\u7ea7\u6211\u7684\u90e8\u5206\u673a\u5668.\u5728\u7814\u7a76\u4ed6\u4eec<br/>\u65f6\u6211\u7684\u90e8\u5206\u673a\u5668\u635f\u574f\u4e86.\u6765\u5427\u6211\u7ed9\u4f60\u5217\u4e2a\u6e05\u5355.\u5728\u6211\u6d4b\u8bd5\u8fd9\u4e9b\u751f\u547d\u548c\u7075\u9b42\u788e\u7247\u7684\u5bfc\u7535\u7387\u65f6\u6211\u7684\u90e8\u5206\u7535\u8def\u88ab\u70e7\u6bc1\u4e86,<br/>\u6211\u9700\u8981\u4e00\u4e9b\u66f4\u597d\u7684\u7535\u8def\u66ff\u6362\u5b83\u4eec.\u8fd8\u6709\u8fd9\u4e9b\u5929\u6740\u7684\u795e\u79d8\u788e\u7247,\u6211\u7684\u94bb\u77f3\u78e8\u5934\u5bf9\u5b83\u4eec\u65e0\u80fd\u4e3a\u529b,\u5e2e\u6211\u4e70\u4e2a\u66f4\u597d\u7684\u6765.<br/>\u8fd8\u6709\u4f60\u770b\u5230\u65c1\u8fb9\u90a3\u5806\u94d1\u548c\u94af\u4e86\u5417\uff1f\u4ec0\u4e48,\u6ca1\u770b\u5230\uff1f\u597d\u5427\u90a3\u53ef\u80fd\u662f\u56e0\u4e3a\u673a\u5668\u5df2\u7ecf\u6c14\u5316\u4e86!\u4f60\u7ed9\u4e86\u62112\u4e2a\u5947\u70b9,\u5176\u4e2d\u7b2c<br/>\u4e00\u4e2a...\u54ce...\u7b97\u4e86,\u7ed9\u6211\u5f04\u4e00\u4e2a\u66f4\u597d\u7684\u673a\u5668\u5916\u58f3\u5427.\u6700\u540e\u6211\u6ca1\u6709\u7a33\u5b9a\u5668\u6240\u9700\u8981\u7684\u529b\u573a\u53d1\u751f\u5668,\u518d\u7ed9\u6211\u5f042\u4e2a<br/>\u8fc7\u6765."
                },
                {
                    "name": "\u4e00\u4e2a\u91cd\u8981\u7684\u95ee\u9898",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u56db\u91cd\u538b\u7f29\u5706\u77f3.png",
                    "x": 492.0,
                    "y": 228.0,
                    "tooltip": "\u6211\u9700\u8981\u6253\u5f00\u4e00\u4e2a\u866b\u6d1e.\u4f46\u662f\u4e3a\u6b64\u6211\u9700\u8981\u4e00\u4e2a\u5de8\u5927\u7684\u5f15\u529b\u573a. \u5c31\u50cf\u6052\u661f\u7206\u70b8,\u9ed1\u6d1e\u90a3\u6837\u5f3a\u5927\u7684\u5f15\u529b\u573a. \u4f46\u662f\u6211\u4e0d<br/>\u53ef\u80fd\u53bb\"\u6740\u6b7b\"\u592a\u9633.\u6211\u9700\u8981\u67d0\u79cd\u65b9\u6cd5\u6765\u538b\u7f29\u7269\u8d28. \u4f46\u662f,\u600e\u4e48\u505a? \u6211\u60f3\u6211\u53ef\u80fd\u9700\u8981\u4e13\u95e8\u7684\u673a\u5668,\u4e0d\u9700\u8981\u805a\u7206<br/>\u7684,\u56e0\u4e3a\u5b83\u7684\u5bc6\u5ea6\u4e0d\u591f\u9ad8."
                },
                {
                    "name": "\u672a\u6765\u63a0\u5f71(\u4e0d\u542bFPS\u4e0b\u964d)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/Alkalus Disk [Activated].png",
                    "x": 336.0,
                    "y": 372.0,
                    "tooltip": "\u60f3\u8981\u524d\u5f80\u5e9f\u571f\u4e16\u754c,\u4f60\u9700\u898110\u4e2a\u904f\u5236\u6846\u67b6\u4ee5\u53ca\u4e00\u4e2aAlkalus\u5706\u76d8(\u6fc0\u6d3b)(Alkalus-Disk-<br/>[Activated]).  \u4e0e\u4e0b\u754c\u4f20\u9001\u95e8\u7684\u642d\u5efa\u65b9\u5f0f\u4e00\u81f4. \u8fd9\u4e2a\u5706\u76d8\u8fd8\u53ef\u4ee5\u7528\u6765\u653e\u706b(\u4e00\u79cd\u7279\u6b8a\u7684\u706b).<br/> \u8fd9\u79cd\u706b\u5728\u5730\u9762\u4e0d\u4f1a\u6269\u6563,\u4f46\u5b83\u80fd\u591f\u975e\u5e38\u5feb\u5730\u5c06\u4e00\u68f5\u6811\u70e7\u6210\u7070. \u5982\u679c\u4f60\u88ab\u5de8\u6811\u56f0\u6270\u7684\u8bdd,\u5b83\u4f1a\u662f\u5f88\u68d2\u7684\u5de5\u5177.\u5e9f<br/>\u571f\u4e16\u754c\u6ee1\u662fGT++\u77ff\u77f3. \u5982\u679c\u4f60\u5e0c\u671b\u77ff\u77f3\u7684\u5206\u5e03\u66f4\u52a0\u5408\u7406\u6216\u8005\u66f4\u683c\u96f7\u4e00\u70b9,\u4e0eAlk\u8ba8\u8bba\u8ba8\u8bba\u5427."
                },
                {
                    "name": "\u66f4\u4fbf\u5b9c\u7684EV\u7535\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91cf\u5b50\u5904\u7406\u5668.png",
                    "x": 336.0,
                    "y": 420.0,
                    "tooltip": "\u7535\u538b\u66f4\u9ad8\u540e,\u4f60\u53ef\u4ee5\u7528ASoC\u6765\u5236\u9020\u66f4\u4fbf\u5b9c\u7684\u91cf\u5b50\u5904\u7406\u5668."
                },
                {
                    "name": "\u6d53\u7f29",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6d53\u7f29\u5bcc\u96c6\u7845\u5ca9\u77ff\u6ce5\u7c89.png",
                    "x": 312.0,
                    "y": -48.0,
                    "tooltip": "\u73b0\u5728,\u8ba9\u6211\u4eec\u5c06\u6eb6\u6db2\u4e2d\u548c."
                },
                {
                    "name": "\u914d\u7f6eTecTech\u591a\u65b9\u5757\u673a\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u53c2\u6570\u4eea.png",
                    "x": 396.0,
                    "y": 24.0,
                    "tooltip": "\u8bb8\u591aTecTech\u7684\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u5185\u90e8\u6570\u5b57--\u53c2\u6570--\u6765\u8fdb\u884c\u914d\u7f6e.\u4f60\u4e0d\u518d\u9700\u8981\u5355\u72ec\u7684\u65b9\u5757\u6267\u884c\u6b64<br/>\u9879\u64cd\u4f5c,\u5982\u4eca\u53ef\u4ee5\u5728GUI\u4e2d\u76f4\u63a5\u8c03\u6574\u53c2\u6570.\u5982\u679c\u591a\u65b9\u5757GUI\u7684\"\u53c2\u6570\"\u90e8\u5206\u4e2d\u6709\u70b9\u4eae\u7684\u90e8\u5206(\u8bf7\u67e5\u770b\u4e4b\u524d\u7684T<br/>ecTech\u591a\u65b9\u5757\u4efb\u52a1),\u90a3\u4e48\u4f60\u5c31\u80fd\u914d\u7f6e\u6b64\u591a\u65b9\u5757,\u5426\u5219\u53c2\u6570\u7a97\u53e3\u6ca1\u6709\u4efb\u4f55\u4f5c\u7528.\u5728\u8fd9\u91cc\u6211\u4eec\u7528\u91cf\u5b50\u8ba1\u7b97\u673a\u4f5c<br/>\u4e3a\u793a\u4f8b,\u8fd9\u53ef\u80fd\u4e5f\u662f\u4f60\u9996\u5148\u60f3\u8981\u8fdb\u884c\u914d\u7f6e\u7684.\u9996\u5148\u6211\u4eec\u8981\u4e86\u89e3\u53c2\u6570\u547d\u540d,\u6bd4\u5982ID:0:1:I.\u7b2c\u4e00\u4e2a\u6570\u5b57\u4ee3\u8868<br/>\u53c2\u6570\u65b9\u5757.\u5bf9\u4e8e\u91cf\u5b50\u8ba1\u7b97\u673a,\u53ea\u6709\u65b9\u57570\u53ef\u7528.\u6bcf\u4e2a\u8fd9\u6837\u7684\u65b9\u5757\u6700\u591a\u53ef\u4ee5\u67094\u4e2a\u53ef\u7528\u7684\u53c2\u6570,2\u8f93\u5165\u4ee5\u53ca2\u8f93\u51fa.<br/>\u672b\u5c3e\u7684\u5b57\u6bcd\u6307\u5b9a\u53c2\u6570\u662f\u8f93\u5165(I)\u8fd8\u662f\u8f93\u51fa(O),\u800c\u4e2d\u95f4\u7684\u6570\u5b57\u533a\u5206\u4e86\u65b9\u5757\u4e2d\u540c\u79cd\u53c2\u6570\u7684\u5148\u540e,\u5728\u7b2c\u4e00,\u5c31\u662f0<br/>,\u5728\u7b2c\u4e8c,\u672a\u4f7f\u7528\u7684,\u5c31\u662f1.\u4e0a\u9762\u4e00\u884c\u4e2d\u7684\u5b57\u6bcdI\u8868\u793a\u8f93\u5165(Input),\u8981\u4e48\u7531\u53c2\u6570\u7a97\u53e3\u914d\u7f6e,\u8981\u4e48\u662f\u9ed8\u8ba4<br/>\u503c.\u4e0b\u9762\u4e00\u884c\u7684\u5b57\u6bcdO\u8868\u793a\u8f93\u51fa(Output),\u8fd9\u662f\u673a\u5668\u7ed9\u4f60\u7684\u4fe1\u606f.(\u6bd4\u5982\u70ed\u91cf\u6216\u7b97\u529b)\u5982\u679c\u4f60\u60f3\u8981\u590d\u5236\u7c98<br/>\u8d34\u914d\u7f6e,\u53ef\u80fd\u4ecd\u5e0c\u671b\u4f7f\u7528\u65b9\u5757\u5f62\u5f0f\u7684\u53c2\u6570\u4eea."
                },
                {
                    "name": "\u6570\u636e\u5e93",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6570\u636e\u5e93.png",
                    "x": 564.0,
                    "y": 72.0,
                    "tooltip": "\u4f60\u53ef\u80fd\u5df2\u7ecf\u5bf9\u88c5\u914d\u7ebf\u9700\u8981\u7684\u95ea\u5b58\u6570\u91cf\u611f\u5230\u4e0d\u77e5\u6240\u63aa\u4e86. TecTech\u63d0\u4f9b\u4e86\u4e00\u4e2a\u89e3\u51b3\u65b9\u5f0f: \u6570\u636e\u5e93. \u5b83\u6700<br/>\u9ad8\u80fd\u5b58\u50a815x16\u4e2a\u95ea\u5b58(\u4e0d\u88c5\u8f93\u51fa\u7684\u8bdd),\u800c\u76ee\u524d\u88c5\u914d\u7ebf\u4e00\u5171\u624d100\u51fa\u5934\u7684\u5408\u6210\u8868. \u53e6\u5916\u6570\u636e\u5e93\u8fd8\u53ef\u4ee5\u540c<br/>\u65f6\u4e3a\u591a\u6761\u88c5\u914d\u7ebf\u63d0\u4f9b\u6570\u636e\u652f\u6301.\u5c06\u63a7\u5236\u5668\u65b9\u5757\u653e\u7f6e\u5728\u79bb\u5730\u81f3\u5c111\u683c\u9ad8\u7684\u4f4d\u7f6e,\u7136\u540e\u5bf9\u5176\u4f7f\u7528\u591a\u65b9\u5757\u673a\u5668\u5168\u606f\u6295\u5f71\u4eea<br/>\u4ee5\u67e5\u770b\u7ed3\u6784. \u6570\u636e\u5e93\u9700\u8981\u7ef4\u62a4\u4ed3\u548c\u4e00\u4e2a\u81f3\u5c11EV\u7684\u80fd\u6e90\u4ed3,\u4e0d\u8fc7\u5982\u679c\u4f60\u6dfb\u52a0\u4e86\u5f88\u591a\u6570\u636e\u8bbf\u95ee\u4ed3\u548c\u6570\u636e\u5e93\u4e3b\u63a5\u53e3\u7684<br/>\u8bdd,\u8017\u80fd\u4f1a\u8fdc\u8d85EV,\u6240\u4ee5\u6216\u8bb8LuV\u80fd\u6e90\u4ed3\u662f\u4e0d\u9519\u7684\u9009\u62e9. \u8fd0\u884c\u6570\u636e\u5e93,\u7136\u540e\u4f7f\u7528\u4e09\u5f55\u4eea\u626b\u63cf\u4e3b\u65b9\u5757\u5373\u53ef\u83b7\u77e5<br/>\u5176\u5177\u4f53\u8017\u80fd.\u8bd1\u8005\u6ce8: \u8017\u7535=2048x\u6570\u636e\u4ed3\u6570\u91cfx\u6570\u636e\u5e93\u4e3b\u63a5\u53e3\u6570\u91cf\u6b64\u4efb\u52a1\u8981\u6c42\u7684\u65b9\u5757\u6570\u91cf\u4f4e\u4e8e\u4f60\u5b9e\u9645\u9700\u8981<br/>\u7684\u6570\u91cf,\u56e0\u4e3a\u8fd9\u53d6\u51b3\u4e8e\u4f60\u4f1a\u7528\u591a\u5c11\u6570\u636e\u8bbf\u95ee\u4ed3.\u7528\u88c5\u914d\u7ebf\u6570\u636e\u5e93\u63a5\u53e3\u66ff\u6362\u6389\u4f60\u539f\u6765\u7684\u6570\u636e\u8bbf\u95ee\u4ed3. \u4f7f\u7528\u5149\u7f06\u5c06\u5176<br/>\u8fde\u63a5\u5230\u6570\u636e\u5e93\u4e0a\u7684\u4e3b\u63a5\u53e3,\u5e76\u4e3a\u4ed3\u5ba4\u548c\u5149\u7f06\u6d82\u4e0a\u76f8\u540c\u989c\u8272.\u5982\u679c\u4f60\u4e0d\u592a\u6e05\u695a\u5404\u79cd\u4ed3\u5ba4\u8be5\u653e\u5728\u54ea\u91cc,\u8bf7\u5728\u4f7f\u7528\u6295\u5f71\u4eea<br/>\u540e\u7559\u610f\u5de6\u4e0b\u89d2\u7684\u804a\u5929\u680f. \u586b\u5145\u65b9\u5757\u4e3a\u7535\u5b50\u8ba1\u7b97\u673a\u68b0\u65b9\u5757. WIKI \u6570\u636e\u5e93\uff1agtnh.huijiwiki<br/>.com/p/411"
                },
                {
                    "name": "\u6b67\u5316\u53cd\u5e94",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u786b\u9178\u8d85\u80fd\u7845\u5ca9\u7c89.png",
                    "x": 216.0,
                    "y": -48.0,
                    "tooltip": "\u8d85\u80fd\u7845\u5ca9\u7684\u5316\u5b66\u6027\u8d28\u6709\u70b9\u602a.\u6240\u6709\u5df2\u77e5\u7269\u8d28\u90fd\u65e0\u6cd5\u8ba9\u5b83\u6790\u51fa.\u4ece\u6eb6\u6db2\u4e2d\u83b7\u53d6\u8d85\u80fd\u7845\u5ca9\u7684\u552f\u4e00\u65b9\u6cd5\u5c31\u662f\u7528\u9ad8\u80fd\u7c92\u5b50\u8fdb<br/>\u884c\u8f70\u51fb.\u4f46\u662f,\u4ea7\u7269\u4e2d\u53ea\u6709\u4e00\u90e8\u5206\u53ef\u4ee5\u8fdb\u884c\u4e0b\u4e00\u6b65\u5904\u7406,\u800c\u5269\u4f59\u90e8\u5206\u9700\u8981\u91cd\u65b0\u8fdb\u884c\u7eaf\u5316."
                },
                {
                    "name": "\u80fd\u91cf\u6ce8\u5165\u4eea",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u80fd\u91cf\u6ce8\u5165\u4eea.png",
                    "x": 564.0,
                    "y": 120.0,
                    "tooltip": "\u80fd\u91cf\u6ce8\u5165\u4eea,\u662f\u79d1\u6280\u7248\u7684\u5965\u6cd5\u4fee\u590d\u53f0,\u53ef\u4ee5\u4fee\u590d\u7269\u54c1,\u4e5f\u53ef\u4ee5\u4e3a\u7269\u54c1\u5145\u80fd.\u7ed9\u80fd\u91cf\u6ce8\u5165\u4eea\u4f9b\u80fd,\u5373\u53ef\u4e3a\u5176\u8f93\u5165\u603b\u7ebf<br/>\u4e2d\u7684\u7269\u54c1\u5145\u80fd.\u5145\u80fd\u5b8c\u6bd5\u7684\u7269\u54c1\u5c06\u88ab\u79fb\u81f3\u8f93\u51fa\u603b\u7ebf.\u7269\u54c1\u5c06\u7531\u4f7f\u7528\u7684\u80fd\u6e90\u4ed3\u63d0\u4f9b\u76f8\u5e94\u6570\u91cf\u7684\u80fd\u91cf.\u5f53\u540c\u65f6\u63d0\u4f9bUU<br/>\u7269\u8d28\u548c\u80fd\u91cf\u65f6,\u80fd\u91cf\u6ce8\u5165\u4eea\u53ef\u57fa\u4e8e\u5176\u5145\u80fd\u529f\u80fd,\u5ef6\u4f38\u51fa\u4fee\u590d\u7269\u54c1\u7684\u80fd\u529b.\u4f46\u662f,\u65e0\u6cd5\u4fee\u590dGT\u5de5\u5177.\u4fee\u590d\u6a21\u5f0f\u4e0b,<br/>\u6bcf\u4fee\u590d1\u70b9\u8010\u4e45,\u6d88\u80171\u5347UU\u7269\u8d28\u4ee5\u53ca1000EU."
                },
                {
                    "name": "\u5bcc\u96c6\u7845\u5ca9\u65f6\u95f4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9ad8\u7eaf\u5bcc\u96c6\u7845\u5ca9\u6eb6\u6db2\u5355\u5143.png",
                    "x": 312.0,
                    "y": 0.0,
                    "tooltip": "\u5bcc\u96c6\u7845\u5ca9\u7ebf\u6bd4\u7845\u5ca9\u7ebf\u77ed\u591a\u4e86,\u4e5f\u5bb9\u6613\u591a\u4e86. \u4e00\u822c\u6765\u8bf4,\u5bcc\u96c6\u7845\u5ca9\u7684\u7528\u9014\u662f\u4f5c\u4e3a\u71c3\u6599\u6216\u662f\u5408\u6210UV\u9636\u6bb5\u7684\u795e\u7ecf\u5143\u5904<br/>\u7406\u5668,\u6240\u4ee5\u5982\u679c\u4f60\u4e0d\u60f3\u8981\u8fd9\u6761\u5bcc\u96c6\u7845\u5ca9\u7ebf\u7684\u8bdd,\u8bf7\u5ffd\u7565\u8fd9\u4e9b\u4efb\u52a1."
                },
                {
                    "name": "\u5bcc\u96c6\u7845\u5ca9\u952d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5bcc\u96c6\u7845\u5ca9\u952d.png",
                    "x": 408.0,
                    "y": -48.0,
                    "tooltip": "\u554a\u54c8,\u4f60\u505a\u5230\u4e86.\u4f60\u53ef\u4ee5\u9009\u62e9\u5c06\u5176\u4e0e\u950c\u4e00\u8d77\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u7194\u70bc,\u6216\u662f\u5c06\u5176\u7535\u89e3.\u4e24\u79cd\u65b9\u5f0f\u5747\u53ef\u4ee5\u83b7\u5f97\u5bcc\u96c6\u7845\u5ca9,\u5e76<br/>\u5b8c\u5168\u56de\u6536\u950c,\u6240\u4ee5\u5982\u679c\u4f60\u8981\u7684\u662f\u952d,\u5de5\u4e1a\u9ad8\u7089\u4f1a\u66f4\u597d."
                },
                {
                    "name": "\u94d5\u63ba\u6742\u7684\u6676\u5706",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u94d5\u63ba\u6742\u7684\u5355\u6676\u7845.png",
                    "x": 396.0,
                    "y": 156.0,
                    "tooltip": "\u6bd4\u7845\u5ca9\u63ba\u6742\u7684\u6676\u5706\u66f4\u6709\u6548\u7387."
                },
                {
                    "name": "\u771f\u8d35!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u6c34\u6676\u788e\u7247.png",
                    "x": 660.0,
                    "y": 300.0,
                    "tooltip": "\u662f\u7684,\u662f\u7684!\u5c31\u662f\u5b83! \u591a\u7ed9\u6211\u51c6\u5907\u4e00\u4e9b!\u6211\u53ef\u80fd\u4f1a\u9700\u8981\u5f88\u591a\u8fd9\u79cd\u6750\u6599..."
                },
                {
                    "name": "Flocculation",
                    "symbolSize": 62.400000000000006,
                    "x": 288.0,
                    "y": 156.0,
                    "tooltip": "You want to start using your new Europium to make <br/>even better wafers, but it turns out that your old<br/> methods of creating purified water are no longer <br/>enough. You will need to use the Flocculation Puri<br/>fication Unit to make even better purified water f<br/>irst. To run this machine, you will need large amo<br/>unts of Polyaluminium Chloride, but luckily you ca<br/>n get all your Chlorine back if you properly recyc<br/>le the waste liquid."
                },
                {
                    "name": "\u805a\u53d8\u53cd\u5e94\u5806MK2-\u66f4\u5927,\u66f4\u597d,\u66f4\u5f3a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6838\u805a\u53d8\u53cd\u5e94\u5806\u63a7\u5236\u7535\u8111Mk II.png",
                    "x": 48.0,
                    "y": 372.0,
                    "tooltip": "\u73b0\u5728\u4f60\u5df2\u7ecf\u6709\u4e86\u94d5\u5757,\u53ef\u4ee5\u5c06\u805a\u53d8\u53cd\u5e94\u5806\u5347\u7ea7\u5230MK2\u4e86.MK2\u578b\u805a\u53d8\u53cd\u5e94\u5806\u642d\u5efa\u65b9\u5f0f\u548cMK1\u5b8c\u5168\u4e00\u6837,\u4e0d\u540c<br/>\u7684\u662f\u4f60\u9700\u8981\u5c06LuV\u673a\u68b0\u65b9\u5757\u5347\u7ea7\u5230\u805a\u53d8\u673a\u68b0\u65b9\u5757,\u8d85\u5bfc\u7ebf\u5708\u4e5f\u8981\u5347\u7ea7\u5230\u4e13\u4e3a\u805a\u53d8\u53cd\u5e94\u5806\u8bbe\u8ba1\u7684\u805a\u53d8\u7ebf\u5708.\u6240\u6709\u7684<br/>\u8f93\u5165/\u8f93\u51fa\u4ed3\u90fd\u9700\u8981\u5347\u7ea7\u5230ZPM\u7ea7.MK2\u578b\u53cd\u5e94\u5806\u53ef\u4ee5\u5904\u7406\u542f\u52a8\u7535\u91cf\u5c11\u4e8e320M-EU\u548c\u6301\u7eed\u4f9b\u7535\u5c11\u4e8e65<br/>536EU/t\u7684\u805a\u53d8\u914d\u65b9. \u53e6\u5916,\u5982\u679c\u4f60\u7528MK2\u53cd\u5e94\u5806\u5904\u7406MK1\u7684\u914d\u65b9,\u5c06\u4f1a\u83b7\u5f97\u8d85\u9891.\u4e0d\u540c\u4e8e\u666e\u901a\u8d85\u9891<br/>,\u805a\u53d8\u53cd\u5e94\u5806\u8d85\u9891\u65f6\u529f\u7387\u53d8\u4e3a2\u500d,\u5904\u7406\u901f\u5ea6\u4e5f\u53d8\u4e3a2\u500d,\u5373\u65e0\u635f\u8d85\u9891."
                },
                {
                    "name": "\u6211\u997f\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u81f3\u5c0a\u62ab\u8428.png",
                    "x": 576.0,
                    "y": 264.0,
                    "tooltip": "\u6211\u7684\u5de5\u4f5c\u5f88\u591a!\u8bf7\u62ff\u70b9\u5403\u7684\u7ed9\u6211."
                },
                {
                    "name": "\u6211\u9700\u8981\u4e00\u4e2a\u7a33\u5b9a\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u590d\u76f8\u9b54\u6676.png",
                    "x": 540.0,
                    "y": 228.0,
                    "tooltip": "\u5982\u4f55\u6253\u5f00\u866b\u6d1e\u662f\u4e00\u4e2a\u95ee\u9898,\u800c\u5982\u4f55\u7a33\u5b9a\u866b\u6d1e\u662f\u53e6\u5916\u4e00\u4e2a\u95ee\u9898.\u6211\u9700\u8981\u4fdd\u8bc1\u6253\u5f00\u7684\u866b\u6d1e\u4e0d\u80fd\u5a01\u80c1\u5230\u6211\u4eec\u7684\u5b89\u5168. \u6211<br/>\u60f3\u6211\u9700\u8981\u67d0\u4e9b\u6676\u4f53.\u4e3a\u4ec0\u4e48\uff1f\u56e0\u4e3a\u6211\u559c\u6b22\u6676\u4f53.\u7ed9\u6211\u627e\u4e00\u4e2a\u6709\u7528\u5de8\u5927\u529b\u91cf\u5e76\u4e14\u7531\u900f\u660e\u6750\u8d28\u6784\u6210\u7684\u6c34\u6676\u597d\u5417\uff1f"
                },
                {
                    "name": "\u6211\u9700\u8981\u4e00\u4e2a\u80fd\u91cf\"\u63d2\u5934\"",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6076\u9b54\u6c14\u8840\u788e\u7247.png",
                    "x": 612.0,
                    "y": 228.0,
                    "tooltip": "\u6211\u6b63\u5728\u5236\u9020\u7684\u8fd9\u53f0\u8bbe\u5907\u9700\u8981\u67d0\u79cd\u63d2\u5934\u6765\u505a\u80fd\u91cf\u7684\u51fa\u53e3. \u6211\u9700\u8981\u67d0\u79cd\u80fd\u591f\u5f15\u5bfc\u5de8\u5927\u80fd\u91cf\u7684\u6750\u6599. \u6211\u66fe\u7ecf\u8003\u8651\u8fc7\u8d85<br/>\u5bfc\u4f53.\u4f46\u662f\u8fd9\u79cd\u6750\u6599\u4e0d\u80fd\u5b89\u88c5\u5728\u6211\u6700\u60f3\u8981\u7684\u6c34\u6676\u5916\u58f3\u4e0a\u9762. \u6240\u4ee5\u6211\u8fd8\u662f\u9700\u89812\u79cd\u6676\u4f53,\u4e00\u79cd\u6676\u4f53\u4f5c\u4e3a\u80fd\u6e90\u8f93\u51fa\u88c5<br/>\u7f6e\u7684\u6b63\u6781,\u53e6\u5916\u8981\u4e00\u79cd\u4f5c\u4e3a\u8d1f\u6781."
                },
                {
                    "name": "\u6fc0\u5149\u89e3\u51b3\u4e00\u5207",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6fc0\u5149\u771f\u7a7a\u7ba1.png",
                    "x": 504.0,
                    "y": 24.0,
                    "tooltip": "\u6fc0\u5149\u4ed3\u662f\u53d1\u9001\u5927\u7535\u6d41\u80fd\u91cf\u7684\u9ad8\u7aef\u65b9\u5f0f,\u8d77\u6b65\u5c31\u662f32A. \u76ee\u524d\u5171\u670932/64/96/128/256/102<br/>4/4096/16384/65536/262144/1048576\u8fd9\u4e9b\u7535\u6d41\u6570. \u6fc0\u5149\u4ed3\u5b9e\u5728\u662f\u592a\u5f3a\u5927,<br/>\u5bfc\u81f4\u9664\u4e86\u9ed1\u79d1\u6280TecTech\u4ee5\u5916,\u53ea\u6709\u5c11\u91cf\u591a\u65b9\u5757\u673a\u5668\u652f\u6301\u5b83\u4eec: \u5170\u6ce2\u987f\u8d85\u7ea7\u7535\u5bb9\u5e93\u3001\u5de8\u578b\u5de5\u4e1a\u9ad8\u7089\u3001\u5de8\u578b<br/>\u771f\u7a7a\u51b7\u51bb\u673a,\u4ee5\u53ca\u80fd\u6e90\u7ad9.(\u672a\u6765\u53ef\u80fd\u8fd8\u4f1a\u6dfb\u52a0!) \u8bf7\u8bb0\u4f4f,\u6fc0\u5149\u771f\u7a7a\u7ba1\u3001\u6fc0\u5149\u6e90\u4ed3\u548c\u6fc0\u5149\u9776\u4ed3\u90fd\u9700\u8981\u6d82\u8272\u624d\u80fd<br/>\u6b63\u5e38\u4f7f\u7528. \u53e6\u5916,\u6fc0\u5149\u6e90\u4ed3=\u8f93\u51fa,\u6fc0\u5149\u9776\u4ed3=\u8f93\u5165.\u6fc0\u5149\u8f6c\u6362\u5668\u7684\u5de5\u4f5c\u673a\u5236: \u6fc0\u5149\u6e90\u4ed3(\u5728\u673a\u5668\u4e0a) -><br/> \u6fc0\u5149\u771f\u7a7a\u7ba1 -> \u6fc0\u5149\u8f6c\u6362\u5668 -> \u5206\u62105\u9762\u8f93\u51faX\u5b89. \u8bb0\u5f97\u5207\u6362\u4e3a\u63a5\u6536\u6a21\u5f0f. \u5f53\u7136\u4e5f\u53ef\u4ee5\u53cd\u8fc7\u6765\u64cd\u4f5c<br/>,\u603b\u800c\u8a00\u4e4b,\u5b83\u5c31\u662f\u4e00\u4e2a\u5c06\u6fc0\u5149\u8f6c\u6362\u5230\u7ebf\u7f06\u6216\u4ece\u7ebf\u7f06\u8f6c\u6362\u4e3a\u6fc0\u5149\u7684\u7c7b\u53d8\u538b\u5668. \u76f8\u6bd4\u4e8e\u6709\u6e90\u53d8\u538b\u5668\u7684\u635f\u8017(\u6bcf\u4e2a\u8f93<br/>\u51fa\u7535\u6d41\u635f\u8017\u4e00\u5b9a\u6bd4\u4f8b)\u800c\u8a00,\u7528\u6fc0\u5149\u8f6c\u6362\u5668\u8f6c\u6298\u6fc0\u5149\u7684\u635f\u8017\u662f\u5176\u4e09\u500d(\u4e14\u65e0\u6cd5\u53d1\u9001\u6240\u6709\u7535\u6d41). \u5982\u679c\u60f3\u8981\u907f\u514d\u8fd9<br/>\u79cd\u635f\u8017,\u8bb0\u5f97\u5728\u5b83\u4eec\u4e4b\u95f4\u52a0\u4e2a\u7535\u6c60\u7bb1.'\u4f4e\u529f\u7387'\u4ed3\u5ba4\u6216\u8f6c\u6362\u5668\u5bf9\u5e94\u4f4e\u529f\u7387\u6fc0\u5149\u7ba1,\u4f46\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f: \u6d82\u8272\u540e<br/>\u8fd9\u79cd\u6fc0\u5149\u7ba1\u65e0\u6cd5\u81ea\u52a8\u8fde\u63a5,\u9700\u8981\u4f7f\u7528\u526a\u7ebf\u94b3\u624b\u52a8\u8fde\u63a5.\u8bf7\u6ce8\u610f,\u4e0d\u8981\u6bcf\u4e2a\u6fc0\u5149\u4ed3\u90fd\u7528\u975e\u5e38\u9ad8\u7535\u6d41\u7684\u578b\u53f7,\u56e0\u4e3a\u6bcf\u4e2a<br/>\u6fc0\u5149\u4ed3,\u6bcf\u5b89\u57f9\u7535\u6d41\u90fd\u4f1a\u67091EU/s\u7684\u88ab\u52a8\u635f\u8017."
                },
                {
                    "name": "\u5b66\u4e60\u66f2\u7ebf?\u6211\u4eec\u8981\u53bb\u7684\u5730\u65b9\u6ca1\u6709\u66f2\u7ebf",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u591a\u65b9\u5757\u673a\u5668\u5168\u606f\u6295\u5f71\u4eea.png",
                    "x": 396.0,
                    "y": 72.0,
                    "tooltip": "\u53ea\u6709\u60ac\u5d16\u548c\u4e07\u4e08\u6df1\u6e0a,\u7a0d\u4e0d\u6ce8\u610f\u5c31\u4f1a\u7c89\u8eab\u788e\u9aa8.TecTech\u53ef\u4ee5\u6210\u4e3a\u5192\u9669\u3001\u6050\u60e7\u3001\u6ee1\u8db3\u4e4b\u6e90.  \u611f\u8c22Pik<br/>y/Scripted\u4e3a\u6211\u4eec\u6478\u7d22\u51fa\u4e00\u6761\u5766\u9014.\u8fd9\u6761\u8def\u4e0a\u6492\u6ee1\u4e86\u5148\u884c\u8005Scripted/Piky\u7684\u9c9c\u8840.\u73b0\u5728<br/>\u8f6e\u5230\u4f60\u4e86!  \u60f3\u8981\u83b7\u77e5TecTech\u7684\u66f4\u591a\u7ec6\u8282,\u8bbf\u95ee\u6b64wiki\u9875\u9762https://github.co<br/>m/Technus/TecTech/wiki \u4e0d\u8fc7,\u5728Discord\u4e2d\u4f60\u80fd\u83b7\u5f97\u66f4\u597d\u7684\u5e2e\u52a9."
                },
                {
                    "name": "\u7ebf\u6027\u52a0\u901f\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u786b\u9178\u5bcc\u96c6\u7845\u5ca9\u7c89.png",
                    "x": 360.0,
                    "y": -48.0,
                    "tooltip": "\u6211\u8ba4\u4e3a\u4f60\u5e94\u8be5\u5df2\u7ecf\u77e5\u9053\u600e\u4e48\u5904\u7406\u5b83\u4e86.\u9002\u54089\u5c81\u4ee5\u4e0a\u4f7f\u7528."
                },
                {
                    "name": "\u5236\u9020\u9545",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9545\u952d.png",
                    "x": 12.0,
                    "y": 468.0,
                    "tooltip": "\u60f3\u8981\u5c06\u53cd\u5e94\u5806\u8fdb\u4e00\u6b65\u5347\u7ea7,\u5e76\u53ef\u4ee5\u5236\u9020UV\u7535\u52a8\u9a6c\u8fbe,\u9700\u8981\u7528\u5230\u4e00\u4e9b\u9545. \u8fd9\u4e2a\u914d\u65b9\u5f88\u8d35,\u4f46\u662f\u5982\u679c\u4f60\u9020\u51fa\u4e86MK<br/>3\u578b\u53cd\u5e94\u5806,\u4f60\u5c06\u4f1a\u5f97\u5230\u4e00\u4e2a\u7b80\u5355,\u800c\u53c8\u4fbf\u5b9c\u7684\u914d\u65b9.\u4e0d\u8fc7\u5728\u6b64\u4e4b\u524d,\u4f60\u9700\u8981\u5927\u91cf\u7684\u9545,\u6240\u4ee5\u6700\u597d\u786e\u4fdd\u4f60\u7684\u9565\u5e93\u5b58<br/>\u5145\u8db3.MK3\u578b\u53cd\u5e94\u5806\u81f3\u5c11\u9700\u8981128\u5757\u9545\u677f(\u5b9e\u9645\u6d4b\u4e0b\u6765\u6700\u5c11316,\u6700\u591a432),\u4ee5\u53ca\u63a7\u5236\u7535\u8111MK-II<br/>I\u9700\u8981\u768413\u4e2a\u9545(9\u4e2a\u7528\u6765\u626b\u63cf\u4ee5\u83b7\u5f97\u5408\u6210\u8868,4\u4e2a\u7528\u6765\u5408\u6210.)\u8ba9\u6211\u4eec\u4ece48\u4e2a\u952d\u5f00\u59cb\u5427,\u521a\u597d\u591f\u4e00\u4e2aUV\u7535<br/>\u52a8\u9a6c\u8fbe."
                },
                {
                    "name": "\u5236\u9020\u4e09\u949b",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u4e09\u949b\u952d.png",
                    "x": 84.0,
                    "y": 468.0,
                    "tooltip": "\u60f3\u8981\u5236\u9020\u4e09\u949b,\u9996\u5148\u9700\u8981\u5236\u9020\u94ff\u94c0.\u4e09\u949b\u7528\u4e8eT6\u706b\u7bad\u3001\u91cd\u529b\u88c5\u7532\u3001\u591a\u65b9\u5757\u91c7\u77ff\u573aIV\u4ee5\u53caUHV\u7535\u8def\u677f."
                },
                {
                    "name": "\u7eb3\u7c73\u529f\u7387IC",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7eb3\u7c73\u529f\u7387IC\u6676\u5706.png",
                    "x": 396.0,
                    "y": 240.0,
                    "tooltip": "\u7eb3\u7c73\u529f\u7387IC\u7528\u4e8e\u5236\u9020\u592a\u9633\u80fd,UV->UHV\u53d8\u538b\u5668,\u4ee5\u53caZPM\u80fd\u6e90\u4ed3\u548c\u52a8\u529b\u4ed3.\u4f60\u9700\u8981ZPM\u5207\u5272\u673a,\u6216\u8005<br/>\u5de5\u4e1a\u5207\u5272\u673a\u7528\u4e8e\u5207\u5272\u6676\u5706."
                },
                {
                    "name": "\u8d85\u80fd\u7845\u5ca9\u952d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8d85\u80fd\u7845\u5ca9\u952d.png",
                    "x": 168.0,
                    "y": -48.0,
                    "tooltip": "\u5c06\u5176\u4e0e\u9541\u7c89\u4e00\u8d77\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u8fdb\u884c\u7194\u70bc."
                },
                {
                    "name": "N.N.Q.Q.N.Q.Q",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4f4e\u7eaf\u78f7\u9178\u8d85\u80fd\u7845\u5ca9\u7c89.png",
                    "x": 264.0,
                    "y": 0.0,
                    "tooltip": "\u4f60\u60f3\u8981\u4e9b\u8d85\u80fd\u7845\u5ca9?\u62b1\u6b49,\u4ece\u524d\u7684\u8d85\u80fd\u7845\u5ca9\u7c89\u53d8\u6210\u4e86\u76ee\u524d\u9762\u76ee\u53ef\u618e\u7684\u6c27\u5316\u8d85\u80fd\u7845\u5ca9\u6df7\u5408\u7269\u7c89--\u7531\u4e8eNERF.\u4f60<br/>\u5f97\u50cf\u5904\u7406\u7845\u5ca9\u90a3\u6837\u518d\u9020\u4e00\u6761\u4ea7\u7ebf."
                },
                {
                    "name": "\u73b0\u5728\u7684\u95ee\u9898!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5947\u70b9.png",
                    "x": 492.0,
                    "y": 300.0,
                    "tooltip": "\u54e6!\u7269\u8d28\u805a\u5408\u673a!\u6211\u600e\u4e48\u5c31\u6ca1\u60f3\u5230\u5462\uff1f"
                },
                {
                    "name": "\u518d\u6765\u4e00\u6b21",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4f4e\u7eaf\u786b\u9178\u8d85\u80fd\u7845\u5ca9\u7c89.png",
                    "x": 168.0,
                    "y": 0.0,
                    "tooltip": "\u4e0e\u7845\u5ca9\u7c7b\u4f3c,P-507\u548c\u8d85\u80fd\u7845\u5ca9\u7684\u6df7\u6eb6\u6027\u4e5f\u975e\u5e38\u5b8c\u7f8e.\u5927\u90e8\u5206\u7684\u8d85\u80fd\u7845\u5ca9\u53ef\u4ee5\u518d\u6b21\u6d53\u7f29."
                },
                {
                    "name": "\u586b\u8272\u6e38\u620f",
                    "symbolSize": 31.200000000000003,
                    "x": 444.0,
                    "y": 48.0,
                    "tooltip": "\u4f60\u9700\u8981\u7528\u989c\u6599\u5237\u624d\u80fd\u628a\u8fd9\u4e9b\u9ad8\u5927\u4e0a\u7684\u5149\u7f06\u6d82\u4e0a\u989c\u8272.\u4f7f\u7528\u6c34\u6876\u53bb\u9664\u6d82\u8272.\u53e6\u5916,\u4f60\u4e5f\u53ef\u4ee5\u7528IC2\u7684\u5237\u5b50\u3001GT\u55b7<br/>\u6f06\u7f50,\u6216\u662fAE2\u7684\u67d3\u8272\u5668.\u73b0\u5728BC\u7684\u989c\u6599\u5237\u53ef\u4ee5\u4e00\u6b21\u6027\u8fde\u7eed\u7c89\u5237\u5927\u91cf\u7684\u7ebf\u7f06\u548c\u7ba1\u9053\u4e86!"
                },
                {
                    "name": "pH Neutralization",
                    "symbolSize": 62.400000000000006,
                    "x": 288.0,
                    "y": 240.0,
                    "tooltip": "If you want to process your Europium-Doped Wafers <br/>with a significant speed boost, this machine is fo<br/>r you. Using the pH neutral water you get from thi<br/>s machine, you can process wafers twice as fast.\n\n<br/>This is the first real complex automation challeng<br/>e in the waterline, it's up to you to figure out h<br/>ow you want to deal with the pH neutralization pro<br/>cess. Have fun!\n\n[note]This multiblock is very pic<br/>ky about where its hatches for acids and bases go.<br/> If you can't figure out why it's not forming, cha<br/>nces are you forgot to place these hatches in the <br/>correct location. Use the hologram projector to se<br/>e where they go.[/note]"
                },
                {
                    "name": "\u80fd\u91cf,\u5f88\u591a\u7684\u80fd\u91cf!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5170\u6ce2\u987f\u80fd\u91cf\u7403\u7c07.png",
                    "x": 576.0,
                    "y": 168.0,
                    "tooltip": "\u55e8!\u4f60\u597d.\u6211\u624b\u5934\u6709\u4e00\u4e2a\u9879\u76ee\u9700\u8981\u5e2e\u52a9. \u6211\u60f3\u521b\u9020\u4e00\u4e2a\u5de8\u5927\u7684\u80fd\u91cf\u6e90,\u4f46\u662f\u6709\u4e00\u4e9b\u95ee\u9898\u9700\u8981\u5148\u89e3\u51b3. \u5f53\u7136,\u5e2e<br/>\u52a9\u6211\u4f1a\u5f97\u5230\u4e0d\u9519\u7684\u5956\u52b1\u7684!\u5f53\u4f60\u624b\u6301\u6709\u95ee\u9898\u7684\u7269\u54c1\u65f6,\u83b7\u53d6\u4e0b\u4e00\u4e2a\u7269\u54c1\u7684\u4efb\u52a1\u5c06\u4f1a\u89e6\u53d1."
                },
                {
                    "name": "\u76ae\u7c73\u80fd\u91cf\u6676\u5706",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u76ae\u7c73\u80fd\u91cf\u6676\u5706.png",
                    "x": 396.0,
                    "y": 468.0,
                    "tooltip": "\u76ae\u7c73\u529f\u7387IC\u7528\u4e8e\u5236\u9020\u592a\u9633\u80fd,UHV->UEV\u53d8\u538b\u5668,\u4ee5\u53caUV\u80fd\u6e90\u4ed3\u548c\u52a8\u529b\u4ed3.\u4f60\u9700\u8981UV\u5207\u5272\u673a,\u6216\u8005\u5de5<br/>\u4e1a\u5207\u5272\u673a\u7528\u4e8e\u5207\u5272\u6676\u5706."
                },
                {
                    "name": "\u7eaf\u5316",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9ad8\u7eaf\u8d85\u80fd\u7845\u5ca9\u6eb6\u6db2\u5355\u5143.png",
                    "x": 264.0,
                    "y": -48.0,
                    "tooltip": "\u94a1\u4f1a\u4e0e\u786b\u9178\u53d1\u751f\u53cd\u5e94,\u53d8\u6210\u4e0d\u6eb6\u6027\u7684\u7c89,\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u6eb6\u6db2\u7eaf\u5316."
                },
                {
                    "name": "\u56de\u6536\u94df",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u78f7\u9178\u94df\u7c89.png",
                    "x": 216.0,
                    "y": 0.0,
                    "tooltip": "\u94df\u81ea\u7531!\u4f60\u6709\u4e09\u79cd\u53ef\u9009\u7684\u5904\u7406\u65b9\u5f0f.1)\u7535\u89e3.2)\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u4e0e\u9499\u53cd\u5e94.3)\u5728\u6405\u62cc\u673a\u4e2d\u4e0e\u6c22\u6c27\u5316\u9553\u6df7\u5408."
                },
                {
                    "name": "\u56de\u6536\u4e09\u5143\u91d1\u5c5e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u786b\u9178\u4e09\u5143\u7c89.png",
                    "x": 360.0,
                    "y": 0.0,
                    "tooltip": "(\u6211\u611f\u89c9\u4f60\u4f1a\u76f4\u63a5\u628a\u5bcc\u96c6\u7845\u5ca9\u4e22\u6389,\u53ea\u4fdd\u7559\u4e09\u5143\u91d1\u5c5e.lol)\u5c06\u5176\u4e0e\u6c22\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u53cd\u5e94\u5373\u53ef\u83b7\u5f97\u4e09\u5143\u91d1\u5c5e,<br/>\u5f53\u7136,\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7535\u89e3."
                },
                {
                    "name": "\u7ea2\u8272\u548c\u84dd\u8272",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u751f\u547d\u788e\u7247.png",
                    "x": 612.0,
                    "y": 300.0,
                    "tooltip": "\u771f\u7684\u561b?\u4e00\u79cd\u7ea2\u84dd\u6676\u4f53?\u592a\u68d2\u4e86!\u6211\u60f3\u6211\u9700\u8981\u6bcf\u79cd8\u4e2a,\u4fdd\u9669\u8d77\u89c1."
                },
                {
                    "name": "\u7cbe\u70bc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4f4e\u7eaf\u786b\u9178\u8d85\u80fd\u7845\u5ca9\u5355\u5143.png",
                    "x": 120.0,
                    "y": 0.0,
                    "tooltip": "\u6240\u4ee5\u5b83\u662f\u4e00\u4e2a\u5708?"
                },
                {
                    "name": "\u95ea\u95ea\u53d1\u5149",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u521b\u4e16\u788e\u7247.png",
                    "x": 540.0,
                    "y": 300.0,
                    "tooltip": "\u8fd9\u5230\u5e95\u662f\u4e2a\u4ec0\u4e48\uff1f\u8fd9\u592a\u795e\u5947\u4e86!\u6211\u9700\u8981\u4f60\u63d0\u4f9b\u66f4\u591a\u7684\u8fd9\u4e2a\u4e1c\u897f! \u8fd9\u79cd\u795e\u5947\u7684\u6750\u6599\u53ef\u4ee5\u7a33\u5b9a\u866b\u6d1e."
                },
                {
                    "name": "Superdense",
                    "symbolSize": 62.400000000000006,
                    "x": 96.0,
                    "y": 240.0,
                    "tooltip": "The advanced machines you are now creating require<br/> more advanced materials, as well as more advanced<br/> ways to process them. In ZPM, you can construct t<br/>he Hot Isostatic Pressurization Unit, an upgrade t<br/>o the Large Electric Compressor. This multiblock h<br/>eats material to extreme temperatures under extrem<br/>e pressure, allowing it to create superdense plate<br/>s with minimal imperfections.\n\nThe HIP Unit heats <br/>up while it is running, and must be given some tim<br/>e to cool off. If it reaches its maximum heat thre<br/>shold, it will significantly slow your recipes or <br/>even void the inputs. Use better coils to increase<br/> how long it will take to overheat, and use Heat S<br/>ensor Hatches to automate it properly.\n\n[note]Can <br/>perform compression recipes which say \"Requires HI<br/>P Unit\" in NEI.[/note]"
                },
                {
                    "name": "TecTech\u591a\u65b9\u5757\u673a\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6b63\u9762\u65cb\u8f6c\u6273\u624b(\u72ec\u7acb).png",
                    "x": 444.0,
                    "y": 96.0,
                    "tooltip": "TecTech\u591a\u65b9\u5757\u673a\u5668\u7684\u4e00\u822c\u529f\u80fd\u591a\u5b89\u80fd\u6e90\u4ed3/\u52a8\u529b\u4ed3\u548c\u6fc0\u5149\u4ed3-\u4f7f\u80fd\u91cf\u5206\u914d\u66f4\u4fbf\u6377..\u5bfc\u80fd-\u5141\u8bb8\u8fde\u63a5\u5230\u7684<br/>\u52a8\u529b\u4ed3\u4ece\u63a7\u5236\u5668\u83b7\u5f97\u80fd\u91cf\u5e76\u8f93\u51fa,\u5c31\u50cf\u6709\u6e90\u53d8\u538b\u5668\u4e00\u6837(\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u90a3\u4e9b\u6709\u6b64\u529f\u80fd\u7684\u63a7\u5236\u5668\u65b9\u5757\u7684\u5408\u6210\u8868\u4e2d\u603b\u6709<br/>\u4e2a\u6709\u6e90\u53d8\u538b\u5668\u7684\u539f\u56e0...).\u62c6\u5378\u591a\u65b9\u5757\u673a\u5668\u65f6,\u8bf7\u786e\u4fdd\u5173\u95ed\u4e86\u5bfc\u80fd\u6309\u94ae,\u4e0d\u7136BOOM!\u5b89\u5168\u9500\u6bc1-\u6fc0\u6d3b\u6b64\u6309<br/>\u952e,\u5c06\u6240\u6709EM(\u5143\u7269\u8d28,\u5e76\u975e\u6240\u6709\u673a\u5668\u90fd\u7528\u8fd9\u4e2a)\u4ece\u8f93\u5165/\u8f93\u51fa\u4ed3\u79fb\u52a8\u5230\u6ea2\u6d41\u4ed3. \u8fd9\u4f7f\u5f97\u673a\u5668\u66f4\u5bb9\u6613\u62c6\u5378(\u5426<br/>\u5219\u4f1a\u7206\u70b8...).\u53ef\u6784\u9020\u754c\u9762-\u4f7f\u7528\u591a\u65b9\u5757\u673a\u5668\u5168\u606f\u6295\u5f71\u4eea\u663e\u793a\u7ed3\u6784(*\u6709\u4e00\u4e2aAPI\u53ef\u4ee5\u8ba9\u4efb\u4f55\u65b9\u5757\u90fd\u5b9e\u73b0\u6b64<br/>\u529f\u80fd,\u4f46\u76ee\u524d\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u4f5c\u7528).\u5728TecTech\u591a\u65b9\u5757\u673a\u5668\u7684GUI\u4e2d,\u4ece\u5de6\u5411\u53f3\u4e3a1,\u5269\u4f59\u90e8\u5206\u6309\u987a\u65f6\u9488<br/>\u6392\u5e8f.1) \u5404\u9879\u53c2\u6570-\u5b83\u4eec\u662f\u63a7\u5236\u5668\u4e0e\u73a9\u5bb6\u3001\u53c2\u6570\u8231\u53e3\u8fdb\u884c\u901a\u4fe1\u7684\u65b9\u5f0f. \u6307\u793a\u706f\u6307\u793a\u72b6\u6001,\u800c\u5c06\u9f20\u6807\u60ac\u505c\u5728\u4e0a<br/>\u65b9\u65f6\u53ef\u4ee5\u770b\u5230\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f. tooltip\u5305\u542bID\u5f62\u5f0f\u4e3a\u4ed3\u5ba4ID:\u53c2\u6570\u7f16\u53f7:\u6307\u5411,\u5f53\u524d\u72b6\u6001,\u5f53\u524d\u503c,<br/>\u4ee5\u53ca\u7b80\u77ed\u8bf4\u660e.2) \u4e0d\u786e\u5b9a\u5ea6\u72b6\u6001-\u8fd99\u4e2a\u65b9\u5757\u6307\u793a\u673a\u5668\u7684\u4e0d\u786e\u5b9a\u5ea6\u72b6\u6001(\u672a\u5b9a\u5143). \u5982\u679c\u6307\u793a\u706f\u4eae\u8d77,\u4ee3\u8868<br/>\u8fd9\u53f0\u673a\u5668\u9700\u8981\u672a\u5b9a\u5143\u89e3\u6790\u5668. \u7ea2\u8272=\u574f,\u7eff\u8272=\u597d. \u5728\u4f7f\u7528\u673a\u5668\u4e4b\u524d,\u4f60\u9700\u8981\u5148\u89e3\u51b3\u8fd9\u4e2a\u5c0f\u6e38\u620f.\u63a7\u5236\u6309\u952e-<br/>\u8fd9\u4e9b\u6309\u952e\u53ef\u80fd\u4f1a\u6839\u636e\u673a\u5668\u800c\u6539\u53d8\u5176\u529f\u80fd\u548c\u5916\u89c2,\u4f46\u901a\u5e38\u5b83\u4eec\u7684\u5de5\u4f5c\u65b9\u5f0f\u5982\u4e0b: \u4ece\u4e0a\u5230\u4e0b:3) \u5bfc\u80fd-\u5207\u6362\u5bfc\u80fd<br/>\u72b6\u6001.4) \u5b89\u5168\u9500\u6bc1-\u5207\u6362\u5b89\u5168\u9500\u6bc1.5) \u7535\u6e90\u5f00\u5173-\u76f8\u5f53\u4e8e\u8f6f\u9524\u7684\u529f\u80fd...6) \u8f93\u5165\u63d2\u69fd-\u6807\u51c6\u529f\u80fd.<br/>*\u6b63\u9762\u65cb\u8f6c-\u5141\u8bb8\u65cb\u8f6c\u673a\u5668\u7684\u6b63\u9762\u4ee5\u83b7\u5f97\u66f4\u5927\u7684\u7ed3\u6784\u5b9a\u5411\u81ea\u7531\u5ea6(\u4e5f\u53ef\u4ee5\u5728API\u4e2d\u4f7f\u7528). \u8fd9\u79cd\u65cb\u8f6c\u4e0d\u4f1a\u6539\u53d8<br/>\u63a7\u5236\u5668\u7684\u6b63\u9762,\u4ec5\u4ec5\u6539\u53d8\u65b9\u5411. \u56e0\u6b64,\u5982\u679c\u4ece\u6b63\u9762\u770b,\u5b83\u53ef\u4ee5\u987a\u65f6\u9488\u6216\u9006\u65f6\u9488\u65cb\u8f6c. \u4f60\u9700\u8981\u6b63\u9762\u65cb\u8f6c\u6273\u624b\u624d\u80fd<br/>\u505a\u5230\u8fd9\u4e9b. \u5982\u679c\u4f60\u6ca1\u770b\u61c2,\u53ef\u4ee5\u8bd5\u7740\u653e\u4e0b\u4e00\u4e2a\u63a7\u5236\u5668\u65b9\u5757,\u4f7f\u7528\u6b63\u9762\u65cb\u8f6c\u6273\u624b,\u7136\u540e\u4f7f\u7528\u84dd\u56fe\u770b\u770b\u7ed3\u6784\u53d8\u5316.*<br/>\u591a\u65b9\u5757\u673a\u5668\u84dd\u56fe-\u6b64\u84dd\u56fe\u53ef\u4ee5\u663e\u793a\u51fa\u5b8c\u6574\u591a\u65b9\u5757\u673a\u5668\u7684\u5168\u606f\u56fe,\u5de6\u4e0b\u89d2\u7684\u804a\u5929\u680f\u4f1a\u663e\u793a\u81ea\u5b9a\u4e49\u7684\u65b9\u5757.\u5982\u679c\u4f60\u5806\u53e0<br/>\u8d8a\u591a\u5f20\u84dd\u56fe\u4e00\u8d77\u4f7f\u7528,\u770b\u5230\u7684\u5c31\u662f\u591a\u65b9\u5757\u673a\u5668\u8d8a\u5927\u7684\u7248\u672c(\u5982\u679c\u6709\u7684\u8bdd)."
                },
                {
                    "name": "\u6bd5\u4e1a\u4e4b\u8def\u7684\u5f00\u7aef",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8d85\u80fd\u673a\u68b0\u65b9\u5757.png",
                    "x": 504.0,
                    "y": 72.0,
                    "tooltip": "\u6b22\u8fce\u6765\u5230TecTech!\u8fd9\u91cc\u6709\u4f60\u6bd5\u4e1a\u6240\u9700\u7684\u771f\u6b63\u7684\u5dc5\u5cf0\u79d1\u6280.\u4f46\u662f,\u5b66\u4e60TecTech\u5e38\u5e38\u8ba9\u4eba\u6478\u4e0d\u7740\u5934\u8111<br/>,\u6240\u4ee5\u4ed4\u7ec6\u542c.\u9996\u5148\u4f60\u9700\u8981\u5236\u9020\u6240\u9700\u673a\u5668\u7684\u591a\u79cd\u673a\u68b0\u65b9\u5757:\u8d85\u80fd\u673a\u68b0\u65b9\u5757,\u7535\u5b50\u8ba1\u7b97\u673a\u673a\u68b0\u65b9\u5757,\u9ad8\u7ea7\u8ba1\u7b97\u673a\u65b9\u5757<br/>\u548c\u8ba1\u7b97\u673a\u6563\u70ed\u5668.\u4f60\u9700\u8981\u5927\u91cf\u8fd9\u4e9b\u673a\u68b0\u65b9\u5757\u624d\u80fd\u7ee7\u7eed\u524d\u8fdb.\u6211\u4eec\u5217\u4e3e\u51fa\u6765\u7684\u53ea\u662f\u4e3e\u4e2a\u4f8b\u5b50,\u5b9e\u9645\u9700\u8981\u7684\u53ea\u4f1a\u66f4\u591a\u3001<br/>\u66f4\u591a\u3001\u66f4\u591a.\u4f7f\u7528\u5149\u7f06\u5c06\u673a\u5668\u8fde\u63a5\u8d77\u6765. \u786e\u4fdd\u5b83\u4eec\u5df2\u88ab\u6d82\u8272,\u540c\u65f6\u5149\u7f06\u8fde\u63a5\u5230\u7684\u65b9\u5757\u4e5f\u8981\u88ab\u6d82\u8272.*\u6295\u5f71\u4eea\u5c06\u4f1a<br/>\u663e\u793a\u5b8c\u6574\u673a\u5668\u7684\u5168\u606f\u56fe\u50cf,\u5de6\u4e0b\u89d2\u7684\u804a\u5929\u680f\u4f1a\u663e\u793a\u53ef\u53d8\u65b9\u5757\u7684\u6ce8\u91ca. \u5982\u679c\u5806\u53e0\u66f4\u591a\u6295\u5f71\u4eea\u7684\u8bdd,\u4f60\u5c31\u53ef\u4ee5\u770b\u5230\u8f83<br/>\u5927\u7248\u672c\u7684\u5168\u606f\u56fe(\u6bd4\u5982\u91cf\u5b50\u8ba1\u7b97\u673a).\u8bd1\u8005\u6ce8:TecTech\u591a\u65b9\u5757\u673a\u5668\u7684\u63a7\u5236\u5668GUI\u754c\u9762\u7684\u95ea\u7535\u6216\u662f\u7535\u6e90\u56fe<br/>\u6807\u4eae\u8d77\u65f6,\u4e0d\u8981\u7834\u574f\u4efb\u4f55\u7ed3\u6784\u65b9\u5757,\u5426\u5219\u4f1a\u5f15\u53d1\u7206\u70b8!\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u66f4\u4e0d\u80fd\u7834\u574f\u7ed3\u6784\u65b9\u5757!"
                },
                {
                    "name": "\u6700\u7ec8\u7684\u76ee\u6807",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u96f6\u70b9\u6a21\u5757.png",
                    "x": 576.0,
                    "y": 456.0,
                    "tooltip": "\u5728\u4f60\u7684\u5e2e\u52a9\u4e0b,\u6211\u7ec8\u4e8e\u521b\u9020\u4e86\u4e00\u4e2a\u7ec8\u6781\u7684\u80fd\u91cf\u6765\u6e90:\u4e00\u4e2a\u88ab\u78c1\u573a\u5305\u88f9\u7684\u8ff7\u4f60\u866b\u6d1e.\u5b83\u5c06\u4ece\u4eba\u5de5\u5b87\u5b99\u4e2d\u5438\u53d6\u80fd\u91cf,\u76f4<br/>\u5230\u5b83\u751f\u547d\u7684\u7ec8\u70b9-\u70ed\u5bc2. \u4f60\u5df2\u7ecf\u5e2e\u52a9\u6211\u5b8c\u6210\u4e86\u6211\u7684\u68a6\u60f3.\u8fd9\u4e2a\u866b\u6d1e\u5bf9\u6211\u6ca1\u4ec0\u4e48\u5b9e\u9645\u7528\u5904,\u6240\u4ee5\u73b0\u5728\u5b83\u662f\u4f60\u7684\u4e86.<br/> \u6700\u540e\u518d\u6b21\u611f\u8c22\u4f60,\u6211\u7684\u670b\u53cb!"
                },
                {
                    "name": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/ZPM\u673a\u5668\u5916\u58f3.png",
                    "x": 288.0,
                    "y": 72.0,
                    "tooltip": "ZPM\u9636\u6bb5. \u90fd\u53eb\u5b83ZPM,\u4f60\u77e5\u9053\u8fd9\u4e2a\u540d\u5b57\u662f\u6765\u81ea\u7f8e\u5267\u300a\u661f\u9645\u4e4b\u95e8-SG1\u300b\u7684\u96f6\u70b9\u6a21\u5757(Zero-Poi<br/>nt-Module)\u5417,\u5ef6\u7eed\u8fd9\u4e2a\u6545\u4e8b,\u8bd5\u8bd5\u770b\u5427! \u4e5f\u8bb8\u4f60\u5df2\u7ecf\u5728\u4e16\u754c\u4e2d\u627e\u5230\u4e00\u4e2a\u7535\u91cf\u51e0\u4e4e\u8017\u5c3d\u7684\u96f6\u70b9\u6a21\u5757\u4e86<br/>.\u5982\u679c\u4f60\u80fd\u627e\u5230\u4e9b\u5e2e\u52a9,\u6216\u8bb8\u751a\u81f3\u80fd\u521b\u9020\u4e00\u4e2a\u5168\u65b0\u7684."
                },
                {
                    "name": "\u53d8\u538b\u5e76...\u4fdd\u6301",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6709\u6e90\u53d8\u538b\u5668.png",
                    "x": 504.0,
                    "y": 120.0,
                    "tooltip": "\u6709\u6e90\u53d8\u538b\u5668\u53ef\u4ee5\u8fdb\u884c\u4efb\u610f\u7535\u538b\u95f4\u7684\u53d8\u6362,\u800c\u635f\u8017\u4ec5\u4e3a0.004\uff05,\u5982\u679c\u4e0d\u4ecb\u610f\u8fd9\u90e8\u5206\u635f\u8017\u7684\u8bdd,\u4f7f\u7528\u6709\u6e90\u53d8\u538b\u5668<br/>\u53ef\u6bd4\u7528\u4e00\u5927\u4e32\u53d8\u538b\u5668\u5c42\u5c42\u53d8\u538b\u9ad8\u7aef\u591a\u4e86. \u4e0d\u8fc7\u8fd9\u73a9\u610f\u6709\u70b9\u8d35... \u540c\u65f6,\u8fd9\u53f0\u673a\u5668\u8fd8\u53ef\u4ee5\u7528\u4e8e\u8f6c\u6298\u6fc0\u5149\u4ed3\u53d1\u51fa<br/>\u7684\u6fc0\u5149,\u8bf4\u4e0d\u5b9a\u8fd9\u624d\u662f\u5b83\u7684\u6b63\u786e\u7528\u6cd5!\u5b83\u65e0\u9700\u7ef4\u62a4\u4ed3,\u53ea\u9700\u6709\u8f93\u5165/\u8f93\u51fa\u4ed3\u5373\u53ef.\u5982\u679c\u4e0d\u60f3\u5728\u62c6\u5378\u673a\u5668\u65f6\u5f15\u53d1\u7206\u70b8<br/>,\u4e00\u5b9a\u8bb0\u5f97\u5173\u6389'\u5bfc\u80fd'\u6309\u94ae!"
                },
                {
                    "name": "\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u4e2d\u5b50\u952d.png",
                    "x": 192.0,
                    "y": 312.0,
                    "tooltip": "UV\u9636\u6bb5\u4f60\u9700\u8981\u7528\u5230\u4e2d\u5b50\u952d,T7\u706b\u7bad\u4e5f\u662f,\u6240\u4ee5\u8ba9\u6211\u4eec\u6765\u5236\u4f5c\u4e00\u4e9b\u5427.\u9996\u5148\u5bfb\u627e\u62e5\u6709\u4e2d\u5b50\u7c89\u8d2b\u7620\u77ff\u7684\u661f\u7403,\u5904\u7406<br/>\u83b7\u5f97\u4e2d\u5b50\u7c89. \u7136\u540e\u5c06\u5176\u4e0e\u6c26\u7b49\u79bb\u5b50\u4f53\u6df7\u5408\u5236\u6210\u7c97\u5236\u4e2d\u5b50\u7d20\u7c89. \u9700\u8981\u7089\u6e299000K\u5e76\u63d0\u4f9b491,520-E<br/>U/t\u7684\u9ad8\u7089. \u6b64\u914d\u65b9\u4f1a\u6d88\u8017\u5927\u91cf\u7684\u65f6\u95f4\u548c\u7535\u529b. \u6700\u597d\u53e6\u8d77\u4e00\u53f0\u5de5\u4e1a\u9ad8\u7089\u6216\u662f\u70bd\u7131\u9ad8\u7089. \u5f53\u7136\u591a\u8d77\u51e0\u53f0\u4e5f\u884c<br/>. \u6216\u662f\u5347\u7ea7\u4f60\u7684\u5de8\u578b\u5de5\u4e1a\u9ad8\u7089."
                },
                {
                    "name": "\u6ca1\u6709\u4eba\u53bb\u8fc7\u7684\u5730\u65b9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/6\u9636\u706b\u7bad.png",
                    "x": 228.0,
                    "y": 36.0,
                    "tooltip": "\u53e6\u4e00\u679a\u706b\u7bad,\u53e6\u4e00\u7ec4\u661f\u7403. \u8fd9\u4e5f\u662f\u5efa\u9020\u706b\u7bad\u7684\u610f\u4e49\u6240\u5728,\u4e0d\u662f\u5417?\u8fd9\u56de\u53ea\u6709\u4e24\u4e2a\u65b0\u7684\u661f\u7403\u53ef\u767b\u9646: \u6d77\u536b\u516b\u548c\u6d77<br/>\u536b\u4e00. \u5b83\u4eec\u90fd\u662f\u6d77\u738b\u661f\u7684\u536b\u661f.\u65b0\u77ff\u8109\u6709\u4e2d\u5b50\u3001\u94cc\u548c\u948d\u77ff\u8109. \u65b0\u77ff\u77f3\u6709: \u7cbe\u91d1\u3001\u9553\u3001\u7845\u5ca9\u3001\u4e2d\u5b50\u3001\u94cc\u3001\u949a-<br/>241\u3001\u949b\u3001\u94c0-235\u3001\u94c0-238\u548c\u9487\u77ff\u77f3.\u5728\u6d77\u536b\u4e00\u53ef\u4ee5\u901a\u8fc7\u8d2b\u7620\u77ff\u83b7\u5f97\u9ed1\u949a.\u8bb0\u5f97\u5230\u8bbf\u661f\u7403\u540e\u6536\u96c6\u4e00\u4e9b\u661f<br/>\u7403\u77f3\u5934.T7\u706b\u7bad\u7684\u8bbe\u8ba1\u56fe\u5728\u6d77\u536b\u516b."
                },
                {
                    "name": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u673a\u68b0\u81c2(ZPM).png",
                    "x": 96.0,
                    "y": 72.0,
                    "tooltip": "\u4f60\u77e5\u9053\u8be5\u505a\u4ec0\u4e48."
                },
                {
                    "name": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 2",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u4f20\u611f\u5668(ZPM).png",
                    "x": 0.0,
                    "y": 72.0,
                    "tooltip": "\u53ea\u9700\u8981\u505a\u4e00\u70b9(\u76f8\u4fe1\u6211).PS\uff1a \u4f60\u53ef\u4ee5\u5236\u9020ZPM\u7684\u7535\u8def\u88c5\u914d\u7ebf,\u5e76\u5f00\u59cb\u642d\u5efa\u6e7f\u4ef6\u7ebf,\u4f46\u4efb\u52a1\u662f\u5728UV\u9636\u6bb5,<br/>\u4e3b\u8981\u662f\u56e0\u4e3a\u6700\u540e\u4e00\u6b65\u6e7f\u4ef6\u4e3b\u673a\u9700\u8981\u5230UV\u9636\u6bb5\u624d\u53ef\u4ee5\u5236\u9020."
                },
                {
                    "name": "ZPM\u7ec4\u88c5\u673a",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7cbe\u82f1\u7ec4\u88c5\u673a II.png",
                    "x": 192.0,
                    "y": 156.0,
                    "tooltip": "\u4e0e\u4e4b\u524d\u4e00\u6837,\u4f60\u9700\u8981\u76f8\u540c\u7b49\u7ea7\u7684\u7ec4\u88c5\u673a\u6765\u5236\u9020\u80fd\u6e90\u4ed3. \u540c\u65f6\u8fd8\u7528\u4e8e\u5408\u6210\u7845\u5ca9\u5408\u91d1\u7ebf\u5708."
                },
                {
                    "name": "ZPM\u80fd\u6e90\u4ed3",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/ZPM\u80fd\u6e90\u4ed3.png",
                    "x": 288.0,
                    "y": 372.0,
                    "tooltip": "\u4e0b\u4e00\u9636\u7684\u805a\u53d8\u53cd\u5e94\u5806\u9700\u8981\u8fd9\u79cd\u80fd\u6e90\u4ed3,\u8fd9\u6837\u4f60\u5c31\u80fd\u5236\u9020\u9545\u548c\u4e09\u949b\u4e86,\u540c\u65f6\u80fd\u6e90\u4ed3\u8fd8\u53ef\u7528\u4e8e\u5347\u7ea7\u591a\u65b9\u5757\u673a\u5668."
                },
                {
                    "name": "\u529b\u573a\u53d1\u751f\u5668(ZPM)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u529b\u573a\u53d1\u751f\u5668(ZPM).png",
                    "x": 0.0,
                    "y": 240.0,
                    "tooltip": "\u4e3a\u4ec0\u4e48\u5b83\u4eec\u662f\u5706\u4e0d\u6e9c\u4e22\u7684? \u8fd9\u6837\u4e0d\u4f1a\u66f4\u96be\u88c5\u8fdb\u8bbe\u5907\u4e2d\u5417?"
                },
                {
                    "name": "ZPM\u8d85\u5bfc(131,072 EU/t)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/1xZPM\u8d85\u5bfc\u5bfc\u7ebf.png",
                    "x": 192.0,
                    "y": 240.0,
                    "tooltip": "\u4f60\u80fd\u81ea\u5df1\u5f04\u6e05\u695a\u5982\u4f55\u5236\u4f5c,\u5bf9\u5427?"
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
                    "source": "\u80fd\u91cf,\u5f88\u591a\u7684\u80fd\u91cf!",
                    "target": "\u5916\u58f3"
                },
                {
                    "source": "\u73b0\u5728\u7684\u95ee\u9898!",
                    "target": "\u8fd8\u6709\u70b9\u4e8b\u513f..."
                },
                {
                    "source": "\u6211\u997f\u4e86",
                    "target": "\u8fd8\u6709\u70b9\u4e8b\u513f..."
                },
                {
                    "source": "\u771f\u8d35!",
                    "target": "\u8fd8\u6709\u70b9\u4e8b\u513f..."
                },
                {
                    "source": "\u7ea2\u8272\u548c\u84dd\u8272",
                    "target": "\u8fd8\u6709\u70b9\u4e8b\u513f..."
                },
                {
                    "source": "\u95ea\u95ea\u53d1\u5149",
                    "target": "\u8fd8\u6709\u70b9\u4e8b\u513f..."
                },
                {
                    "source": "\u80fd\u91cf,\u5f88\u591a\u7684\u80fd\u91cf!",
                    "target": "\u4e00\u4e2a\u91cd\u8981\u7684\u95ee\u9898"
                },
                {
                    "source": "ZPM\u80fd\u6e90\u4ed3",
                    "target": "\u672a\u6765\u63a0\u5f71(\u4e0d\u542bFPS\u4e0b\u964d)"
                },
                {
                    "source": "ZPM\u80fd\u6e90\u4ed3",
                    "target": "\u66f4\u4fbf\u5b9c\u7684EV\u7535\u8def"
                },
                {
                    "source": "ASoC\u8fdb\u9636\u82af\u7247\u7ea7\u7cfb\u7edf",
                    "target": "\u66f4\u4fbf\u5b9c\u7684EV\u7535\u8def"
                },
                {
                    "source": "\u5bcc\u96c6\u7845\u5ca9\u65f6\u95f4",
                    "target": "\u6d53\u7f29"
                },
                {
                    "source": "\u5b66\u4e60\u66f2\u7ebf?\u6211\u4eec\u8981\u53bb\u7684\u5730\u65b9\u6ca1\u6709\u66f2\u7ebf",
                    "target": "\u914d\u7f6eTecTech\u591a\u65b9\u5757\u673a\u5668"
                },
                {
                    "source": "\u6bd5\u4e1a\u4e4b\u8def\u7684\u5f00\u7aef",
                    "target": "\u6570\u636e\u5e93"
                },
                {
                    "source": "\u7eaf\u5316",
                    "target": "\u6b67\u5316\u53cd\u5e94"
                },
                {
                    "source": "\u6bd5\u4e1a\u4e4b\u8def\u7684\u5f00\u7aef",
                    "target": "\u80fd\u91cf\u6ce8\u5165\u4eea"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "\u5bcc\u96c6\u7845\u5ca9\u65f6\u95f4"
                },
                {
                    "source": "\u7ebf\u6027\u52a0\u901f\u5668",
                    "target": "\u5bcc\u96c6\u7845\u5ca9\u952d"
                },
                {
                    "source": "Flocculation",
                    "target": "\u94d5\u63ba\u6742\u7684\u6676\u5706"
                },
                {
                    "source": "\u83b7\u5f97\u94d5",
                    "target": "\u94d5\u63ba\u6742\u7684\u6676\u5706"
                },
                {
                    "source": "\u89e6\u53d1\u672a\u77e5\u6c34\u6676",
                    "target": "\u771f\u8d35!"
                },
                {
                    "source": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1",
                    "target": "Flocculation"
                },
                {
                    "source": "\u00a7c\u00a7lOzonation",
                    "target": "Flocculation"
                },
                {
                    "source": "ZPM\u80fd\u6e90\u4ed3",
                    "target": "\u805a\u53d8\u53cd\u5e94\u5806MK2-\u66f4\u5927,\u66f4\u597d,\u66f4\u5f3a"
                },
                {
                    "source": "Superdense",
                    "target": "\u805a\u53d8\u53cd\u5e94\u5806MK2-\u66f4\u5927,\u66f4\u597d,\u66f4\u5f3a"
                },
                {
                    "source": "\u76ae\u7c73\u80fd\u91cf\u6676\u5706",
                    "target": "\u805a\u53d8\u53cd\u5e94\u5806MK2-\u66f4\u5927,\u66f4\u597d,\u66f4\u5f3a"
                },
                {
                    "source": "\u83b7\u5f97\u94d5",
                    "target": "\u805a\u53d8\u53cd\u5e94\u5806MK2-\u66f4\u5927,\u66f4\u597d,\u66f4\u5f3a"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(ZPM)",
                    "target": "\u805a\u53d8\u53cd\u5e94\u5806MK2-\u66f4\u5927,\u66f4\u597d,\u66f4\u5f3a"
                },
                {
                    "source": "\u80fd\u91cf,\u5f88\u591a\u7684\u80fd\u91cf!",
                    "target": "\u6211\u997f\u4e86"
                },
                {
                    "source": "\u80fd\u91cf,\u5f88\u591a\u7684\u80fd\u91cf!",
                    "target": "\u6211\u9700\u8981\u4e00\u4e2a\u7a33\u5b9a\u5668"
                },
                {
                    "source": "\u80fd\u91cf,\u5f88\u591a\u7684\u80fd\u91cf!",
                    "target": "\u6211\u9700\u8981\u4e00\u4e2a\u80fd\u91cf\"\u63d2\u5934\""
                },
                {
                    "source": "\u6bd5\u4e1a\u4e4b\u8def\u7684\u5f00\u7aef",
                    "target": "\u6fc0\u5149\u89e3\u51b3\u4e00\u5207"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "\u5b66\u4e60\u66f2\u7ebf?\u6211\u4eec\u8981\u53bb\u7684\u5730\u65b9\u6ca1\u6709\u66f2\u7ebf"
                },
                {
                    "source": "\u6d53\u7f29",
                    "target": "\u7ebf\u6027\u52a0\u901f\u5668"
                },
                {
                    "source": "\u805a\u53d8\u53cd\u5e94\u5806MK2-\u66f4\u5927,\u66f4\u597d,\u66f4\u5f3a",
                    "target": "\u5236\u9020\u9545"
                },
                {
                    "source": "\u805a\u53d8\u53cd\u5e94\u5806MK2-\u66f4\u5927,\u66f4\u597d,\u66f4\u5f3a",
                    "target": "\u5236\u9020\u4e09\u949b"
                },
                {
                    "source": "\u94d5\u63ba\u6742\u7684\u6676\u5706",
                    "target": "\u7eb3\u7c73\u529f\u7387IC"
                },
                {
                    "source": "\u6b67\u5316\u53cd\u5e94",
                    "target": "\u8d85\u80fd\u7845\u5ca9\u952d"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "N.N.Q.Q.N.Q.Q"
                },
                {
                    "source": "\u89e6\u53d1\u5947\u70b9",
                    "target": "\u73b0\u5728\u7684\u95ee\u9898!"
                },
                {
                    "source": "\u7eaf\u5316",
                    "target": "\u518d\u6765\u4e00\u6b21"
                },
                {
                    "source": "\u5b66\u4e60\u66f2\u7ebf?\u6211\u4eec\u8981\u53bb\u7684\u5730\u65b9\u6ca1\u6709\u66f2\u7ebf",
                    "target": "\u586b\u8272\u6e38\u620f"
                },
                {
                    "source": "ZPM\u80fd\u6e90\u4ed3",
                    "target": "pH Neutralization"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "\u80fd\u91cf,\u5f88\u591a\u7684\u80fd\u91cf!"
                },
                {
                    "source": "\u7eb3\u7c73\u529f\u7387IC",
                    "target": "\u76ae\u7c73\u80fd\u91cf\u6676\u5706"
                },
                {
                    "source": "N.N.Q.Q.N.Q.Q",
                    "target": "\u7eaf\u5316"
                },
                {
                    "source": "N.N.Q.Q.N.Q.Q",
                    "target": "\u56de\u6536\u94df"
                },
                {
                    "source": "\u5bcc\u96c6\u7845\u5ca9\u65f6\u95f4",
                    "target": "\u56de\u6536\u4e09\u5143\u91d1\u5c5e"
                },
                {
                    "source": "\u89e6\u53d1\u751f\u547d\u788e\u7247\u548c\u7075\u9b42\u788e\u7247",
                    "target": "\u7ea2\u8272\u548c\u84dd\u8272"
                },
                {
                    "source": "\u518d\u6765\u4e00\u6b21",
                    "target": "\u7cbe\u70bc"
                },
                {
                    "source": "\u89e6\u53d1\u521b\u4e16\u788e\u7247",
                    "target": "\u95ea\u95ea\u53d1\u5149"
                },
                {
                    "source": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1",
                    "target": "Superdense"
                },
                {
                    "source": "\u5b66\u4e60\u66f2\u7ebf?\u6211\u4eec\u8981\u53bb\u7684\u5730\u65b9\u6ca1\u6709\u66f2\u7ebf",
                    "target": "TecTech\u591a\u65b9\u5757\u673a\u5668"
                },
                {
                    "source": "\u5b66\u4e60\u66f2\u7ebf?\u6211\u4eec\u8981\u53bb\u7684\u5730\u65b9\u6ca1\u6709\u66f2\u7ebf",
                    "target": "\u6bd5\u4e1a\u4e4b\u8def\u7684\u5f00\u7aef"
                },
                {
                    "source": "\u8fd8\u6709\u70b9\u4e8b\u513f...",
                    "target": "\u6700\u7ec8\u7684\u76ee\u6807"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u7b2c7\u9636\u6bb5(ZPM)"
                },
                {
                    "source": "\u83b7\u5f97\u94d5",
                    "target": "\u7b2c7\u9636\u6bb5(ZPM)"
                },
                {
                    "source": "\u6bd5\u4e1a\u4e4b\u8def\u7684\u5f00\u7aef",
                    "target": "\u53d8\u538b\u5e76...\u4fdd\u6301"
                },
                {
                    "source": "ZPM\u80fd\u6e90\u4ed3",
                    "target": "\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?"
                },
                {
                    "source": "6\u9636\u706b\u7bad",
                    "target": "\u6ca1\u6709\u4eba\u53bb\u8fc7\u7684\u5730\u65b9"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "\u6ca1\u6709\u4eba\u53bb\u8fc7\u7684\u5730\u65b9"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1"
                },
                {
                    "source": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1",
                    "target": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 2"
                },
                {
                    "source": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1",
                    "target": "ZPM\u7ec4\u88c5\u673a"
                },
                {
                    "source": "\u7eb3\u7c73\u529f\u7387IC",
                    "target": "ZPM\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "ZPM\u8d85\u5bfc(131,072 EU/t)",
                    "target": "ZPM\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 2",
                    "target": "\u529b\u573a\u53d1\u751f\u5668(ZPM)"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u529b\u573a\u53d1\u751f\u5668(ZPM)"
                },
                {
                    "source": "ZPM\u7ec4\u88c5\u673a",
                    "target": "ZPM\u8d85\u5bfc(131,072 EU/t)"
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