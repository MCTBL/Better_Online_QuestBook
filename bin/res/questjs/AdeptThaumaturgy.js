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
                    "name": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u975e\u51e1\u85cf\u5b9d\u888b.png",
                    "x": 156.0,
                    "y": 120.0,
                    "tooltip": "\u6211\u5df2\u7ecf\u638c\u63e1\u4e86\u57fa\u672c\u7684\u9b54\u6cd5\u77e5\u8bc6.\u5e08\u5085\u7ed9\u6211\u8bb2\u8fc7\u4e00\u4e9b\u5173\u4e8e\u7981\u5fcc\u9b54\u6cd5\u7684\u4e8b\u60c5.\u4f46\u662f\u8fd9\u4e2a\u542c\u8d77\u6765\u633a\u6709\u524d\u9014\u7684.\u6211\u8ba4\u4e3a\u7a0d\u5fae<br/>\u7814\u7a76\u4e00\u4e9b\u7981\u5fcc\u7684\u4e8b\u7269\u4e0d\u4f1a\u4ea7\u751f\u4ec0\u4e48\u95ee\u9898..."
                },
                {
                    "name": "\u9ad8\u7ea7\u8282\u70b9\u7a33\u5b9a\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9ad8\u7ea7\u8282\u70b9\u7a33\u5b9a\u5668.png",
                    "x": 12.0,
                    "y": 120.0,
                    "tooltip": "\u9ad8\u7ea7\u8282\u70b9\u7a33\u5b9a\u5668\u7684\u4f5c\u7528\u7c7b\u4f3c\u4e8e\u666e\u901a\u8282\u70b9\u7a33\u5b9a\u5668,\u4f46\u5177\u6709\u5173\u952e\u5dee\u5f02. \u5b83\u4ecd\u7136\u4f1a\u963b\u6b62\u5b83\u5f71\u54cd\u7684\u8282\u70b9\u88ab\u8017\u5c3d,\u4f46\u8282\u70b9\u4ecd<br/>\u7136\u53ef\u4ee5\u4ece\u5176\u4ed6\u8f83\u5c0f\u7684\u8282\u70b9\u62bd\u53d6\u8981\u7d20. \u5b83\u8fd8\u6709\u66f4\u9ad8\u7684\u51e0\u7387\u6765\u6539\u5584\u8870\u843d\u548c\u4e0d\u7a33\u5b9a\u7684\u8282\u70b9. \u7f3a\u70b9\u662f\u5b83\u5f71\u54cd\u7684\u4efb\u4f55\u8282\u70b9<br/>\u7684\u5145\u80fd\u901f\u5ea6\u90fd\u4f1a\u6781\u6162\u6781\u6162..."
                },
                {
                    "name": "(\u51e0\u4e4e)\u81ea\u52a8\u5316\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e90\u8d28\u805a\u5408\u5668.png",
                    "x": 252.0,
                    "y": 264.0,
                    "tooltip": "\u7ed3\u5408\u6e90\u8d28\u76d1\u89c6\u548c\u53d1\u5c04\u529f\u80fd\u4e8e\u4e00\u4f53.\u7528\u4e00\u4e2a\u955c\u5b50\u548c\u4e00\u4e2a\u805a\u5408\u5668\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u6765\u7ed9\u6ce8\u9b54\u796d\u575b\u63d0\u4f9b\u6e90\u8d28.(\u9b54\u5bfc\u624b\u518c<br/>\u81ea\u52a8\u5316\u9b54\u6cd5)"
                },
                {
                    "name": "\u795e\u5947\u7684\u76d2\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9ad8\u7ea7\u672b\u5f71\u7bb1\u5b50.png",
                    "x": 492.0,
                    "y": 72.0,
                    "tooltip": "\u672b\u5f71\u7bb1\u5b50\u975e\u5e38\u795e\u5947.\u65e0\u8bba\u4f60\u5236\u9020\u4e86\u591a\u5c11\u672b\u5f71\u7bb1\u5b50,\u5b83\u4eec\u770b\u8d77\u6765\u90fd\u76f8\u4e92\u8fde\u63a5\u5230\u540c\u4e00\u7ef4\u5ea6.\u6211\u53ef\u4ee5\u5728\u4e00\u5904\u653e\u5165\u7269\u54c1,\u7136<br/>\u540e\u518d\u5728\u53e6\u4e00\u5904\u62ff\u51fa\u5b83\u4eec!\u8fd8\u53ef\u4ee5\u5bf9\u7bb1\u5b50\u9876\u90e8\u67d3\u8272\u6765\u9650\u5b9a\u9891\u9053,\u4efb\u4f55\u62e5\u6709\u76f8\u540c\u989c\u8272\u7ec4\u5408\u7684\u672b\u5f71\u7bb1\u5b50\u5171\u4eab\u540c\u4e00\u7247\u7a7a\u95f4.<br/>\u5bf9\u7bb1\u5b50\u4f7f\u7528\u94bb\u77f3\u53ef\u4ee5\u5c06\u5176\u9501\u5b9a\u4e3a\u4f60\u7684\u79c1\u4eba\u7bb1\u5b50,\u5e76\u4f7f\u7528\u79c1\u4eba\u7f51\u7edc.\u7a7a\u624bShift+\u53f3\u952e\u53ef\u4ee5\u79fb\u9664\u94bb\u77f3,\u8ba9\u7bb1\u5b50\u91cd<br/>\u65b0\u56de\u5230\u516c\u5171\u7f51\u7edc\u4e2d."
                },
                {
                    "name": "\u795e\u5947\u7684\u50a8\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9ad8\u7ea7\u672b\u5f71\u50a8\u7f50.png",
                    "x": 540.0,
                    "y": 72.0,
                    "tooltip": "\u8fd9\u4e2a\u50a8\u7f50\u4f3c\u4e4e\u603b\u662f\u8fde\u63a5\u5230\u540c\u4e00\u4e2a\u7a7a\u95f4,\u65e0\u8bba\u4f60\u5236\u9020\u4e86\u591a\u5c11\u672b\u5f71\u50a8\u7f50.  \u6211\u53ef\u4ee5\u5728\u4e00\u4e2a\u7ef4\u5ea6\u5c06\u6d41\u4f53\u901a\u5165\u50a8\u7f50,\u7136\u540e<br/>\u518d\u5b8c\u5168\u4e0d\u540c\u7684\u53e6\u4e00\u4e2a\u7ef4\u5ea6\u62bd\u53d6\u8fd9\u4e9b\u6d41\u4f53!\u6211\u53d1\u73b0\u4e86\u4e00\u4e2a\u65b9\u6cd5,\u53ef\u4ee5\u5bf9\u50a8\u7f50\u9876\u90e8\u67d3\u8272\u6765\u4e3a\u6bcf\u4e2a\u50a8\u7f50\u6307\u5b9a\u4e00\u4e2a\u9891\u9053. <br/> \u4f7f\u7528\u94bb\u77f3\u4f7f\u50a8\u7f50\u6210\u4e3a\u79c1\u6709\u7684,\u8fde\u63a5\u4f7f\u7528\u8005\u7684\u79c1\u4eba\u7f51\u7edc,\u4e14\u4e0d\u4f1a\u540c\u5176\u4ed6\u73a9\u5bb6\u7684\u50a8\u7f50\u5206\u4eab\u6d41\u4f53.Shift+\u53f3\u952e\u53ef<br/>\u4ee5\u79fb\u9664\u94bb\u77f3,\u8ba9\u50a8\u7f50\u91cd\u65b0\u56de\u5230\u516c\u5171\u7f51\u7edc\u4e2d.\u524d\u90e8\u7684\u523b\u5ea6\u76d8\u63a7\u5236\u50a8\u7f50\u7684\u8f93\u5165/\u8f93\u51fa. \u5f53\u84dd\u8272\u5728\u4e0a\u65f6,\u50a8\u7f50\u63a5\u6536\u6d41\u4f53<br/>.\u5f53\u6a59\u8272\u5728\u4e0a\u65f6,\u50a8\u7f50\u8f93\u51fa\u6d41\u4f53. \u5982\u679c\u5927\u91cf\u4f7f\u7528\u672b\u5f71\u50a8\u7f50\u9020\u6210\u4e86FPS\u4e0b\u964d,\u8bd5\u8bd5\u5728config\\Ender<br/>Storage.cfg\u91cc\u5173\u95ed\u5e95\u90e8\u7279\u6548(\u5c06disableFXTank\u8bbe\u7f6e\u4e3atrue)."
                },
                {
                    "name": "\u53ef\u6015\u7684\u9b54\u6cd5\u8f7d\u4f53",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u70bd\u70ed\u7684\u6cea.png",
                    "x": 564.0,
                    "y": 120.0,
                    "tooltip": "\u8fd9\u4e9b\u773c\u6cea...\u54c7!\u6211\u4ece\u6765\u6ca1\u6709\u89c1\u8fc7\u5982\u6b64\u5f3a\u5927\u7684\u4e1c\u897f. \u53ef\u80fd...\u6211\u53ef\u80fd\u53ef\u4ee5\u7528\u5b83\u6765\u5236\u4f5c\u4e00\u6839\u66f4\u5f3a\u5927\u7684\u6cd5\u6756\uff1f"
                },
                {
                    "name": "\"\u62a4\u7532\"",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u865a\u7a7a\u795e\u79d8\u4f7f\u515c\u5e3d.png",
                    "x": 720.0,
                    "y": 144.0,
                    "tooltip": "\u8fd9\u79cd\u65b0\u91d1\u5c5e\u662f\u5982\u6b64\u7684...\u8ff7\u4eba.\u4f60\u5728\u89e6\u6478\u5b83\u7684\u65f6\u5019\u611f\u89c9\u5f88\u8212\u670d,\u65e2\u7136\u8fd9\u6837\u4e3a\u4ec0\u4e48\u4e0d\u7528\u5b83\u4eec\u505a\u4e00\u5957\u65b0\u76d4\u7532\u5462\uff1f \u4ec0<br/>\u4e48,\u6015\u51fa\u95ee\u9898\uff1f\u653e\u5fc3\u5b83\u4e00\u5b9a\u4f1a\u4fdd\u62a4\u4f60\u7684! (\u9b54\u5bfc\u624b\u518c\u90aa\u672f\u5b66)"
                },
                {
                    "name": "\u6700\u540e,\u4e00\u67c4\u94f6\u6811\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u6756\u7aef\u94f6\u6811\u6743\u6756.png",
                    "x": 516.0,
                    "y": 120.0,
                    "tooltip": "\u6211\u5c1d\u8bd5\u628a\u5deb\u5996\u4e4b\u9aa8\u548c\u8fd9\u4e2a\u94f6\u6811\u6756\u67c4\u7ed3\u5408\u5728\u4e00\u8d77.\u7ed3\u679c\u5728\u51e0\u79d2\u949f\u5185\u5b83\u4eec\u5c31\u5316\u6210\u4e86\u4e00\u5806\u7070\u70ec.\u6211\u60f3\u6211\u9700\u8981\u4e00\u79cd\u66f4\u597d\u7684\u9b54<br/>\u5bfc\u4ecb\u8d28. \u66ae\u8272\u68ee\u6797\u7684\u4e5d\u5934\u86c7\u6709\u5f88\u5f3a\u7684\u518d\u751f\u80fd\u529b-\u80fd\u518d\u751f\u6574\u9897\u5934\u9885! \u5979\u7684\u8840\u6db2\u91cc\u9762\u4e00\u5b9a\u542b\u6709\u5927\u91cf\u7684\u9b54\u529b.\u6211\u60f3\u6211<br/>\u4eec\u9700\u8981\u4e00\u70b9\u6765\u5b8c\u6210\u6211\u4eec\u7684\u94f6\u6811\u6cd5\u6756."
                },
                {
                    "name": "\u51c0\u5316\u4f60\u7684\u7075\u9b42",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7075\u9b42\u706b\u76c6.png",
                    "x": 12.0,
                    "y": 24.0,
                    "tooltip": "\u795e\u79d8\u63a2\u9669\u7684\u7075\u9b42\u706b\u76c6\u4f1a\u5b58\u50a8\u4f60\u7684\u6c38\u4e45\u626d\u66f2.\u53ea\u8981\u6709\u706b\u4e4b\u8981\u7d20(0.01-vis)\u548c\u4ece\u4e0b\u65b9\u4f9b\u5e94\u7684\u6b7b\u4ea1(Mort<br/>uus)\u6e90\u8d28,\u7075\u9b42\u706b\u76c6\u5c31\u4f1a\u4e00\u76f4\u5de5\u4f5c,\u5373\u4f7f\u4f60\u5230\u4e86\u5176\u4ed6\u7ef4\u5ea6.\u628a\u5b83\u5173\u95ed\u6216\u662f\u4f9b\u80fd\u4e0d\u8db3,\u6240\u6709\u626d\u66f2\u5c31\u4f1a\u91cd\u65b0\u56de\u5230\u4f60<br/>\u7684\u4f53\u5185,\u6240\u4ee5\u8981\u5f53\u5fc3.\u5b58\u50a8\u626d\u66f2\u6709\u4e00\u4e2a\u7f3a\u70b9-\u6c61\u79fd.\u4f60\u9700\u8981\u60f3\u4e2a\u529e\u6cd5\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898."
                },
                {
                    "name": "\u65c5\u884c\u4f34\u4fa3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7bb1\u5b50\u5b9d\u5b9d.png",
                    "x": 12.0,
                    "y": 264.0,
                    "tooltip": "\u611f\u5230\u5b64\u5355?\u7bb1\u5b50\u5b9d\u5b9d\u662f\u4e00\u79cd\u7b80\u5355\u7684\u65c5\u884c\u4f34\u4fa3,\u4e3a\u4f60\u63d0\u4f9b\u989d\u5916\u7684\u7a7a\u95f4.\u5347\u7ea7\u540e(\u6bcf\u4e2a\u7bb1\u5b50)\u5b83\u53ef\u4ee5\u4e3a\u4f60\u63d0\u4f9b\u4e00\u4e9b\u4e0d\u9519<br/>\u7684\u589e\u76ca.\u4e0e\u5176\u4ed6\u5080\u5121\u7c7b\u4f3c,\u4f60\u53ef\u4ee5\u7528\u5080\u5121\u94c3\u94db\u5c06\u5176\u91cd\u65b0\u53d8\u6210\u6389\u843d\u7269\u6361\u8d77.\u5b83\u7684\u8111\u5b50\u4e0d\u592a\u597d\u7528,\u6240\u4ee5\u5f88\u5bb9\u6613\u5361\u4f4f.\u4f60<br/>\u53ef\u4ee5\u901a\u8fc7GUI\u547d\u4ee4\u5b83\u5728\u539f\u5730\u505c\u7559.\u53ea\u8981\u533a\u5757\u5728\u52a0\u8f7d,\u5373\u4f7f\u88ab\u5361\u4f4f\u5b83\u4e5f\u4f1a\u4f20\u9001\u56de\u4f60\u8eab\u8fb9.\u5b83\u8fd8\u80fd\u8ddf\u968f\u4f60\u5230\u5176\u4ed6\u7ef4\u5ea6<br/>.\u5b83\u4f1a\u7f13\u6162\u6cbb\u7597\u81ea\u5df1,\u5982\u679c\u4f60\u624b\u6301\u98df\u7269(\u4efb\u4f55\u98df\u7269,\u751a\u81f3\u8150\u8089\u4e5f\u53ef\u4ee5)\u53f3\u952e\u5b83,\u5b83\u5c31\u80fd\u66f4\u5feb\u5730\u6062\u590d.\u8fdc\u79bb\u5ca9\u6d46.\u5080<br/>\u5121\u5347\u7ea7\u6548\u679c:\u98ce:\u66f4\u5feb\u79fb\u52a8.\u5730:\u591a\u4e00\u884c\u7269\u54c1\u680f.\u706b:\u653b\u51fb\u654c\u5bf9\u751f\u7269,\u70b9\u71c3\u5b83\u4eec.\u6c34:\u51e0\u4e4e\u65e0\u61c8\u53ef\u51fb.\u53ea\u80fd\u7531\u653e\u7f6e<br/>\u5b83\u7684\u73a9\u5bb6\u6253\u5f00\u6216\u6361\u8d77.\u6df7\u6c8c:\u5185\u90e8\u6709\u7a7a\u95f4\u65f6,\u62fe\u53d6\u9644\u8fd1\u6389\u843d\u7269.\u79e9\u5e8f:\u6361\u8d77\u65f6\u53ef\u643a\u5e26\u5185\u90e8\u7269\u54c1,\u5e76\u53ef\u5d4c\u5957\u8fdb\u5176\u4ed6\u5b58<br/>\u50a8\u7269(\u5982\u7bb1\u5b50).\u522b\u72af\u50bb."
                },
                {
                    "name": "\u6cd5\u6756\u81ea\u52a8\u5145\u80fd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6cd5\u6756\u5145\u80fd\u57fa\u5ea7.png",
                    "x": 60.0,
                    "y": 72.0,
                    "tooltip": "\u65e2\u7136\u4f60\u627e\u5230\u4e86\u6536\u96c6\u8282\u70b9\u7684\u65b9\u6cd5. \u90a3\u4e48\u518d\u641e\u4e00\u4e2a\u81ea\u52a8\u7ed9\u6cd5\u6756\u5145\u80fd\u7684\u88c5\u7f6e\u600e\u4e48\u6837\uff1f\u90a3\u4e0d\u662f\u5f88\u65b9\u4fbf\u5417\uff1f (\u9b54\u5bfc\u624b\u518c\u795e<br/>\u79d8\u5b66\u9875\u9762-\u6cd5\u6756\u5145\u80fd\u57fa\u5ea7)"
                },
                {
                    "name": "\u6cd5\u5e08\u7684\u6743\u6756\u9876\u90e8\u6709\u9b54\u6676",
                    "symbolSize": 31.200000000000003,
                    "x": 420.0,
                    "y": 216.0,
                    "tooltip": "\u5c06\u6756\u82af\u4e24\u7aef\u88c5\u4e0a\u6756\u7aef,\u518d\u7528\u548c\u5236\u4f5c\u6cd5\u6756\u4e00\u6837\u7684\u65b9\u5f0f\u6dfb\u4e0a\u66ae\u8272\u68ee\u6797\u602a\u7269\u6389\u843d\u7269,\u4ee5\u53ca\u4e00\u4e9b\u87ba\u4e1d,\u5373\u53ef\u5236\u6210\u624b\u6756. \u6743<br/>\u6756\u65e0\u6cd5\u7528\u4e8e\u5965\u672f\u5de5\u4f5c\u53f0,\u4f46\u5b83\u53ef\u4ee5\u50a8\u5b58\u540c\u79cd\u6750\u8d28\u6cd5\u67562.5\u500d\u7684\u9b54\u529b. \u5b83\u751a\u81f3\u53ef\u4ee5\u4f5c\u4e3a\u8fd1\u6218\u6b66\u5668. \u5b83\u867d\u7136\u65e0\u6cd5<br/>\u83b7\u5f97\u6b66\u5668\u7684\u9644\u9b54,\u4f46\u4f24\u5bb3\u5f88\u53ef\u89c2\u4e14\u4e0d\u4f1a\u635f\u5931\u8010\u4e45(\u672c\u6765\u5c31\u6ca1\u6709\u8010\u4e45\u6761\u2192_\u2192)."
                },
                {
                    "name": "\u6d17\u6fa1\u505aSPA,\u81ea\u52a8\u53bb\u626d\u66f2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u672f\u6d74\u573a.png",
                    "x": 156.0,
                    "y": 24.0,
                    "tooltip": "\u5728\u5965\u672f\u6d74\u573a\u6d17\u6fa1\u80fd\u591f\u81ea\u52a8\u5730\u4e34\u65f6\u53bb\u9664\u626d\u66f2\u6548\u679c. \u8bb0\u5f97\u628a\u6d74\u76d0\u4e5f\u5e26\u8fdb\u6d74\u573a."
                },
                {
                    "name": "\u6c90\u6d74\u66f4\u8863,\u8fdc\u79bb\u626d\u66f2\u70e6\u607c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u51c0\u5316\u6d74\u76d0.png",
                    "x": 108.0,
                    "y": 24.0,
                    "tooltip": "\u5965\u672f\u77f3\u854a\u8bd5\u7eb8\u4f1a\u544a\u8bc9\u4f60\u4f60\u7684\u626d\u66f2\u5230\u5e95\u6709\u591a\u9ad8,\u90a3\u4e48\u8981\u600e\u6837\u624d\u80fd\u6446\u8131\u8fd9\u8ba8\u538c\u7684\u626d\u66f2\u6548\u679c\u5462\uff1f \u51c0\u5316\u6d74\u76d0\u53ef\u4ee5\u5728\u77ed\u65f6\u95f4<br/>\u5185\u5e2e\u4f60\u5c4f\u853d\u6389\u626d\u66f2\u6548\u679c. \u628a\u51c0\u5316\u6d74\u76d0\u6254\u8fdb\u4e00\u4e2a1*1\u683c\u7684\u6c34\u91cc\u7136\u540e\u8df3\u8fdb\u53bb. \u6d17\u5b8c\u6fa1\u4e4b\u540e\u4f60\u4f1a\u611f\u5230\u653e\u677e\u4e00\u70b9."
                },
                {
                    "name": "\u4fe1\u6807",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4fe1\u6807.png",
                    "x": 252.0,
                    "y": 72.0,
                    "tooltip": "\u4f60\u6210\u4e3a\u4e86\u4e00\u4f4d\u719f\u7ec3\u7684\u795e\u79d8\u4f7f,\u5df2\u7ecf\u505a\u597d\u6ce8\u9b54\u5408\u6210\u4fe1\u6807\u7684\u51c6\u5907\u4e86! \u4fe1\u6807\u7684\u5408\u6210\u8868\u53ef\u4ee5\u5728\u9b54\u5bfc\u624b\u518cGTNH\u9875\u9762\u4e2d\u627e<br/>\u5230.\u5728\u4f60\u7684\u57fa\u5730\u6fc0\u6d3b\u4fe1\u6807,\u83b7\u5f97\u5404\u79cd\u6709\u7528\u7684BUFF\u5427!"
                },
                {
                    "name": "\u53f2\u4e0a\u6700\u597d\u7684\u6cd5\u6756\u6756\u7aef",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5145\u80fd\u795e\u79d8\u6756\u7aef.png",
                    "x": 156.0,
                    "y": 264.0,
                    "tooltip": "\u5f53\u7136!\u795e\u79d8\u952d! \u8fd8\u6709\u4ec0\u4e48\u4e1c\u897f\u80fd\u6bd4\u8fd9\u79cd\u795e\u5947\u7684\u91d1\u5c5e\u80fd\u591f\u66f4\u597d\u5730\u5f15\u5bfcVIS\u5462\uff1f"
                },
                {
                    "name": "\u628a\u5b83\u5e26\u56de\u5bb6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8282\u70b9\u7a33\u5b9a\u5668.png",
                    "x": 60.0,
                    "y": 120.0,
                    "tooltip": "\u4f60\u7684\u8282\u70b9\u5217\u8868\u91cc\u9762\u53ef\u80fd\u6709\u8bb8\u591a\u7684\u8282\u70b9.\u4f46\u662f\u56db\u5904\u5954\u6ce2\u6765\u7ed9\u4f60\u7684\u6cd5\u6756\u5145\u80fd\u4e0d\u662f\u4e00\u4e2a\u719f\u7ec3\u7684\u795e\u79d8\u4f7f\u6240\u5e94\u8be5\u505a\u7684\u4e8b\u60c5.\u79fb<br/>\u52a8\u8282\u70b9\u4e0d\u662f\u4ec0\u4e48\u5f88\u590d\u6742\u7684\u9b54\u6cd5,\u4f46\u662f\u6beb\u65e0\u7591\u95ee\u5c06\u8282\u70b9\u5e26\u56de\u5bb6\u4e4b\u540e\u5b83\u4eec\u9700\u8981\u4e00\u4e9b\u4e1c\u897f\u6765\u4fdd\u62a4\u5b83\u4eec\u8106\u5f31\u7684\u5c0f\u8eab\u677f. (<br/>\u9b54\u5bfc\u624b\u518c\u795e\u79d8\u5b66\u9875\u9762-\u8282\u70b9\u7a33\u5b9a\u5668)"
                },
                {
                    "name": "\u4f60\u771f\u7684\u80fd\u770b\u5230\u90a3\u4e9b\u5417?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u865a\u7a7a\u6697\u5f71\u63ed\u793a\u4e4b\u62a4\u76ee\u955c.png",
                    "x": 300.0,
                    "y": 72.0,
                    "tooltip": "\u5982\u679c\u4f60\u7a0d\u5fae\u6d89\u5165\u4e00\u70b9\u9ed1\u6697\u9762\u7684\u8bdd,\u5e94\u8be5\u5c31\u80fd\u5236\u4f5c\u8fd9\u4e9b\u62a4\u76ee\u955c. \u5b83\u4eec\u7684\u9b54\u529b\u51cf\u514d\u4ec5\u6b21\u4e8e\u65e0\u5c3d\u5934\u76d4. \u800c\u4e14\u8c01\u4f1a\u53bb\u505a<br/>\u65e0\u5c3d\u5957\u5462?\u4e0d\u8fc7\u9996\u5148,\u4f60\u9700\u8981\u6ce8\u9b54\u548c\u4e00\u4e9b\u4f1a\u5e26\u6765\u626d\u66f2\u7684\u7814\u7a76.\u5982\u679c\u4f60\u662f\u4e2a\u80c6\u5c0f\u9b3c,\u4e5f\u53ef\u4ee5\u5236\u9020'\u6446\u8131\u6b7b\u4ea1,\u6e38\u5386\u56db<br/>\u65b9'\u4efb\u52a1\u680f\u4e2d\u7684\u7535\u5b50\u63ed\u793a\u62a4\u76ee\u955c."
                },
                {
                    "name": "CV(Centi-vis)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8282\u70b9\u6362\u80fd\u5668.png",
                    "x": 60.0,
                    "y": 168.0,
                    "tooltip": "\u8bb8\u591a\u9ad8\u7ea7\u673a\u5668\u9700\u8981\u63d0\u4f9bVIS\u624d\u53ef\u4ee5\u8ba9\u5b83\u4eec\u6b63\u5e38\u8fd0\u8f6c. \u4f46\u662f\u4f7f\u7528\u6cd5\u6756\u6765\u4e3a\u673a\u5668\u63d0\u4f9bVIS\u5e76\u4e0d\u80fd\u8fbe\u5230\u9884\u671f\u7684\u6548\u679c<br/>. \u5982\u679c\u4f60\u80fd\u5c06\u6495\u5f00\u53e6\u4e00\u4e2a\u7ef4\u5ea6\u7684\u5165\u53e3,\u5e76\u901a\u8fc7\u8282\u70b9\u4ece\u4e2d\u62bd\u53d6\u80fd\u91cf\u600e\u4e48\u6837? \u8fd9\u6837\u5e72\u5e94\u8be5\u4e0d\u4f1a\u51fa\u95ee\u9898\u7684\u5bf9\u5427? (<br/>\u9b54\u5bfc\u624b\u518c\u795e\u79d8\u5b66\u9875\u9762-\u638c\u63a7\u9b54\u529b)"
                },
                {
                    "name": "CV\u4e2d\u7ee7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9b54\u529b\u4e2d\u7ee7\u5668.png",
                    "x": 108.0,
                    "y": 168.0,
                    "tooltip": "\u4f60\u5e94\u8be5\u7814\u7a76\u4e00\u4e9b\u4e1c\u897f\u6765\u4f20\u8f93\u548c\u4f7f\u7528\u5145\u80fd\u8282\u70b9\u4e2d\u55b7\u53d1\u51fa\u6765\u7684VIS. (\u9b54\u5bfc\u624b\u518c\u4e2d\u795e\u79d8\u5b66)"
                },
                {
                    "name": "\u6cd5\u6756\u5f3a\u5316: \u9b54\u5b50\u7f13\u5b58",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6cd5\u6756\u5f3a\u5316\u6838\u5fc3.png",
                    "x": 300.0,
                    "y": 168.0,
                    "tooltip": "\u5c06\u8fd9\u4e2a\u5f3a\u5316\u5e94\u7528\u5230\u6cd5\u6756\u4e2d\u4f1a\u4f7f\u6cd5\u6756\u989d\u5916\u589e\u52a025\uff05\u5b58\u50a8.\u4f46\u540c\u65f6\u589e\u52a05\uff05\u7684\u4e0d\u7a33\u5b9a\u6027."
                },
                {
                    "name": "\u6e05\u7406\u7c98\u6d46",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u51c0\u5316\u94f2.png",
                    "x": 204.0,
                    "y": 360.0,
                    "tooltip": "\u5982\u679c\u4f60\u7ecf\u5e38\u8fdb\u884c\u6ce8\u9b54,\u90a3\u4e48\u4f60\u80af\u5b9a\u5f88\u8ba8\u538c\u6ce8\u9b54\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u5492\u6ce2\u7c98\u6d46.\u51c0\u5316\u94f2\u53ef\u4ee5\u5e2e\u4f60\u6e05\u7406\u8fd9\u4e9b\u5492\u6ce2\u7c98\u6d46,\u6240\u4ee5\u5728<br/>\u6ce8\u9b54\u8fc7\u7a0b\u4e2d\u8fd9\u53ef\u662f\u4e00\u4e2a\u5fc5\u4e0d\u53ef\u5c11\u7684\u5de5\u5177!(\u9b54\u5bfc\u624b\u518c\u4f2a\u7ecf)\u5b9e\u9645\u4e0a,\u5982\u679c\u4f60\u5bf9\u6240\u505a\u7684\u6ce8\u9b54\u6709\u5145\u5206\u7684\u51c6\u5907\u7684\u8bdd,\u53ef\u4ee5<br/>\u8ba9\u8fd9\u4e1c\u897f\u5b8c\u5168\u65e0\u7528\u6b66\u4e4b\u5730."
                },
                {
                    "name": "\u6d53\u7f29\u9ed1\u6697",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u865a\u7a7a\u79cd\u5b50.png",
                    "x": 684.0,
                    "y": 144.0,
                    "tooltip": "\u7531\u4e8e\u67d0\u79cd\u539f\u56e0,\u4f60\u51b3\u5b9a\u7ed9\u79cd\u5b50\u6ce8\u5165\u9ed1\u6697\u7684\u529b\u91cf. \u8fd9\u770b\u8d77\u6765\u5f88\u6709\u524d\u666f.\u4e3a\u4ec0\u4e48\uff1f\u4e0d\u77e5\u9053...\u60f3\u8981\u89e3\u9501\u90aa\u672f\u7814\u7a76,<br/>\u4f60\u9700\u8981\u5148\u8ba9\u626d\u66f2\u9ad8\u4e8e30\u624d\u80fd\u89e3\u9501\u7b2c\u4e00\u9636\u6bb5,\u7136\u540e\u5927\u4e8e50\u7684\u626d\u66f2\u518d\u89e3\u9501\u7b2c\u4e8c\u9636\u6bb5. \u4e0d\u8fc7\u4e34\u65f6\u626d\u66f2\u4e0d\u8ba1\u7b97\u5728\u5185.<br/>.."
                },
                {
                    "name": "\u521b\u9020\u66f4\u597d\u7684\u6cd5\u6756",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u94c1\u6756\u7aef\u6728\u8d28\u6cd5\u6756.png",
                    "x": 324.0,
                    "y": 120.0,
                    "tooltip": "\u867d\u7136\u4f60\u7684\u5b8f\u4f1f\u4e4b\u6728\u6cd5\u6756\u5f88\u4e0d\u9519,\u4f46\u662f\u5b83\u7684\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e-\u53ea\u80fd\u5b58\u50a850\u70b9VIS.\u6211\u8bd5\u56fe\u4f7f\u7528\u7f38\u4e2d\u8282\u70b9\u8fd9\u4e2a\u9b54\u6cd5\u6765<br/>\u79fb\u52a8\u8282\u70b9,\u4f46\u662f\u5931\u8d25\u4e86. \u4f46\u662f\u6211\u53d1\u73b0\u4e86\u4e00\u4e9b\u5176\u4ed6\u6bd4\u8f83\u5e38\u89c1\u7684\u6750\u6599\u53ef\u4ee5\u7528\u6765\u5236\u9020\u4e00\u4e9b\u65b0\u7684\u6cd5\u6756\u6756\u82af."
                },
                {
                    "name": "\u5c16\u53eb\u9ed1\u66dc\u77f3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5c16\u53eb\u9ed1\u66dc\u77f3.png",
                    "x": 108.0,
                    "y": 72.0,
                    "tooltip": "\u8fd9\u4e2a\u795e\u5947\u7684\u77f3\u5934\u5728\u4f60\u6b7b\u540e\u4f1a\u627e\u5230\u4f60\u7684\u7075\u9b42,\u6709\u4e9b\u65f6\u5019\u8fd9\u5f88\u65b9\u4fbf.\u628a\u4e24\u4e2a\u5c16\u53eb\u9ed1\u66dc\u77f3\u5782\u76f4\u653e\u7f6e\u5728\u4e00\u8d77,\u89e6\u6478\u5b83\u540e\u4f60\u5c31<br/>\u53ef\u4ee5\u628a\u4f60\u7684\u51fa\u751f\u70b9\u8bbe\u7f6e\u5230\u8fd9\u4e2a\u4f4d\u7f6e,\u800c\u4e0d\u9700\u8981\u4e00\u5f20\u5e8a\u4e86.\u4f60\u53ef\u4ee5\u60f3\u8c61\u4e00\u4e0b\u5982\u4f55\u4f7f\u7528\u5b83.(\u9b54\u5bfc\u624b\u518c\u795e\u79d8\u57fa\u7840\u4e2d\u7684\u7814<br/>\u7a76\u5185\u5bb9)"
                },
                {
                    "name": "\u4f60\u60f3\u77e5\u9053\u4f60\u73b0\u5728\u7684\u626d\u66f2\u503c\u4e48\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u672f\u77f3\u854a\u8bd5\u7eb8.png",
                    "x": 156.0,
                    "y": 72.0,
                    "tooltip": "\u5728\u8fdb\u884c\u4e86\u4e00\u4e9b\u7981\u5fcc\u7684\u7814\u7a76\u4e4b\u540e,\u4f60\u7684\u626d\u66f2\u503c\u589e\u52a0\u4e86\u4e00\u4e9b. \u4f46\u662f\u4f60\u60f3\u77e5\u9053\u4f60\u76ee\u524d\u7684\u626d\u66f2\u503c\u5230\u5e95\u6709\u591a\u9ad8\u4e48\uff1f\u5236\u4f5c\u4e00\u4e9b<br/>\u5965\u672f\u77f3\u854a\u8bd5\u7eb8\u6765\u6d4b\u4e00\u6d4b\u5427!"
                },
                {
                    "name": "\u795b\u9b54",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795b\u9b54\u53f0.png",
                    "x": 396.0,
                    "y": 24.0,
                    "tooltip": "\u5982\u679c\u4f60\u53d1\u73b0\u4e00\u4e2a\u7269\u54c1\u6216\u4e00\u672c\u4e66\u6709\u4e00\u4e2a\u4e0d\u9519\u7684\u9644\u9b54-\u4f46\u540c\u65f6\u8fd8\u6709\u4e00\u5806\u5783\u573e\u9644\u9b54.\u4f7f\u7528\u795b\u9b54\u53f0,\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u9644\u9b54\u4e00\u4e2a<br/>\u4e00\u4e2a\u5206\u79bb\u51fa\u6765,\u5c01\u5370\u5230\u4e66\u4e2d.\u5c06\u5176\u7528\u4e66\u67b6\u73af\u7ed5\u8d77\u6765,\u4ee5\u51cf\u5c11\u5bf9\u7269\u54c1\u7684\u635f\u574f."
                },
                {
                    "name": "\u9644\u9b54\u4e13\u5bb6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e17\u900f\u9644\u9b54\u53f0.png",
                    "x": 444.0,
                    "y": 72.0,
                    "tooltip": "\u7ec8\u6781\u9644\u9b54\u8bbe\u5907--\u4f60\u53ef\u4ee5\u4f7f\u7528\u6e17\u900f\u9644\u9b54\u53f0\u6765\u9009\u62e9\u4f60\u60f3\u8981\u7684\u9644\u9b54. \u8fd9\u4e2a\u9644\u9b54\u53f0\u4ee5VIS\u4e3a\u52a8\u529b,\u53ef\u4ee5\u521b\u9020\u51fa\u4f60\u80fd\u60f3<br/>\u8c61\u5230\u7684\u6700\u5f3a\u5927\u7684\u9644\u9b54\u7ec4\u5408."
                },
                {
                    "name": "\u6e90\u8d28\u5b58\u50a8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e90\u8d28\u7ed3\u6676\u5668.png",
                    "x": 156.0,
                    "y": 312.0,
                    "tooltip": "\u5f53\u7136\u4f60\u53ef\u4ee5\u4f7f\u7528\u5f88\u591a\u7684\u7f50\u5b50\u6765\u5b58\u50a8\u5927\u91cf\u7684\u6e90\u8d28,\u4f46\u662f\u7528\u7bb1\u5b50\u6216\u8005\u6876\u6765\u5b58\u50a8\u56fa\u6001\u7684\u6e90\u8d28\u4e0d\u662f\u66f4\u65b9\u4fbf\u5417\uff1f(\u9b54\u5bfc\u624b\u518c\u70bc<br/>\u91d1\u672f)"
                },
                {
                    "name": "\u6e90\u8d28\u76d1\u6d4b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6c34\u6676\u4e4b\u773c.png",
                    "x": 252.0,
                    "y": 312.0,
                    "tooltip": "\u4e00\u4e2a\u4e00\u4e2a\u53bb\u68c0\u67e5\u4f60\u7684\u6e90\u8d28\u7f50\u5b50\u662f\u4e00\u4e2a\u5f88\u9ebb\u70e6\u7684\u5de5\u4f5c.\u5728\u4f60\u60f3\u8981\u8fde\u7eed\u8fdb\u884c\u591a\u6b21\u6ce8\u9b54\u7684\u65f6\u5019\u8fd9\u79cd\u95ee\u9898\u66f4\u52a0\u7a81\u51fa. \u5e78\u8fd0<br/>\u7684\u662f,\u6e90\u8d28\u805a\u5408\u5668\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6765\u76d1\u89c6\u4e00\u4e2a\u533a\u57df\u7684\u7f50\u5b50.\u7528\u6c34\u6676\u4e4b\u773c\u6765\u7ed1\u5b9a\u4f60\u60f3\u8981\u76d1\u89c6\u533a\u57df\u7684\u7f50\u5b50.(\u9b54\u5bfc\u624b\u518c\u81ea\u52a8<br/>\u5316\u9b54\u6cd5)"
                },
                {
                    "name": "\u8f93\u9001\u6e90\u8d28",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e90\u8d28\u4e4b\u955c.png",
                    "x": 252.0,
                    "y": 216.0,
                    "tooltip": "\u8fd9\u4e9b\u955c\u5b50\u53ef\u4ee5\u5e2e\u52a9\u4f60\u4ece\u4e0d\u540c\u7684\u4f4d\u7f6e\u5c06\u6e90\u8d28\u4f20\u8f93\u5230\u6ce8\u9b54\u796d\u575b\u91cc.\u8fd9\u6837\u7684\u8bdd\u4f60\u5c31\u53ef\u4ee5\u628a\u90a3\u4e9b\u8ba8\u538c\u7684\u6e90\u8d28\u7ba1\u5b50\u4ece\u4f60\u7684\u6ce8\u9b54<br/>\u796d\u575b\u4e0a\u9762\u62ff\u4e0b\u53bb\u4e86.\u6b64\u5916,\u8fd9\u4e9b\u955c\u5b50\u53ef\u80fd\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684\u7528\u9014... (\u8be6\u7ec6\u4fe1\u606f\u53c2\u8003\u9b54\u5bfc\u624b\u518c\u70bc\u5316\u5b66-\u6e90\u8d28\u4e4b\u955c<br/>)\u4f60\u6709\u4e00\u79cd\u76f4\u89c9,\u62e5\u6709\u66f4\u5f3a\u80fd\u91cf\u7684\u91d1\u5c5e\u4f1a\u6709\u975e\u5e38\u6709\u8da3\u7684\u7528\u9014.."
                },
                {
                    "name": "\u627e\u5230\u94a5\u5319",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7b26\u6587\u77f3\u677f.png",
                    "x": 648.0,
                    "y": 288.0,
                    "tooltip": "\u4e0d!\u4e0d\u4e0d\u4e0d\u4e0d! \u4ed6\u4eec\u628a\u5b83\u85cf\u8d77\u6765\u4e86! \u6211\u5fc5\u987b\u627e\u5230...\u627e\u5230\u94a5\u5319!\u5fc5\u987b\u627e\u5230\u5b83! \u6211\u9700\u8981\u8fd9\u4e2a\u77f3\u677f\u6765\u6253\u5f00\u5927\u95e8<br/>!\u6211\u7684\u5b9d\u8d1d!"
                },
                {
                    "name": "\u553e\u624b\u53ef\u5f97\u7684\u8d22\u5bcc?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6f06\u9ed1\u4e4b\u95e8.png",
                    "x": 300.0,
                    "y": 24.0,
                    "tooltip": "\u624b\u6301\u7740\u5143\u59cb\u9b54\u529b,\u4f60\u7a81\u7136\u660e\u767d\u4e86\u8033\u8bed\u4e2d\u7684\u67d0\u4e9b\u5185\u5bb9!\u5b83\u5411\u4f60\u63cf\u8ff0\u4e86\u4e00\u7247\u571f\u5730,\u90a3\u7247\u571f\u5730\u8574\u542b\u4e86\u65e0\u9650\u7684\u8d22\u5bcc,\u53ea\u7b49\u4f60<br/>\u53bb\u652b\u53d6.\u4f60\u5632\u7b11\u8fd9\u79cd\u65e0\u7a3d\u4e4b\u8c08,\u4f46\u663e\u7136\u5982\u679c\u4f60\"\u7741\u5f00\u773c\u775b\"\u5e76\u5236\u4f5c\u51fa\u67d0\u79cd\u933e\u5236\u77f3\u523b,\u4f60\u5c31\u80fd\u5728\u6b64\u5904\u6253\u5f00\u4f20\u9001\u95e8.\u4f46<br/>\u662f\u8fd9\u53ea\u773c\u775b\u5728\u8bf4...\u8fd9\u662f\u4ec0\u4e48?\u4e5f\u8bb8\u662f\u94bb\u7814\u66f4\u9ad8\u6df1\u9ed1\u6697\u9b54\u6cd5\u7684\u94a5\u5319!\u53ea\u6709\u50bb\u5b50\u624d\u4f1a\u76f8\u4fe1\u8fd9\u79cd\u80e1\u8a00\u4e71\u8bed."
                },
                {
                    "name": "\u6de6XXXXXXXXXX...",
                    "symbolSize": 31.200000000000003,
                    "x": 624.0,
                    "y": 240.0,
                    "tooltip": "\u662f\u4e86! \u5c31\u662f\u5b83! \u773c\u775b! \u4f60\u7ec8\u4e8e\u660e\u767d\u4e86,\u8fd9\u592a\u7b80\u5355\u4e86! \u65e0\u5c3d\u7684\u8d22\u5bcc,\u90fd\u662f\u4f60\u7684! \u4e0d\u5bf9!\u8fd9\u662f\u54ea\u91cc? \u8fd9\u91cc<br/>\u662f\u7a7a\u7684? \u4e3a\u4ec0\u4e48,\u4f60\u7684\u8d22\u5bcc\u54ea\u53bb\u4e86? \u552f\u4e00\u7684\u539f\u4f4f\u6c11\u544a\u8bc9\u4f60,\u6240\u6709\u8fd9\u4e9b\u65e9\u5df2\u968f\u7740\u65f6\u95f4\u7684\u6d2a\u6d41\u6d88\u901d...\u4f46\u8fd9\u6bd5\u7adf<br/>\u610f\u5473\u7740\u4f60\u5df2\u7ecf\u5230\u8fbe\u4e86\u6b63\u786e\u7684\u4f4d\u7f6e! \u53ea\u662f\u5728\u65f6\u95f4\u7ef4\u5ea6\u4e0a\u51fa\u4e86\u70b9\u95ee\u9898. \u53ea\u8981\u7a0d\u5fae\u8c03\u6574\u4e00\u4e0b\u4f20\u9001\u95e8,\u4f60\u5c31\u53ef\u4ee5\u5728\u6b63\u786e<br/>\u7684\u65f6\u95f4\u5230\u8fbe\u6b63\u786e\u7684\u5730\u70b9,\u5e76\u5fc3\u5b89\u7406\u5f97\u5730\u4eab\u53d7\u8fd9\u65e0\u5c3d\u7684\u8d22\u5bcc. \u4f60\u6000\u7591\u8fd9\u6837\u7684\u8c03\u6574\u9700\u8981\u4e00\u4e9b\u5f3a\u5927\u7684\u7269\u54c1...\u65e0\u5c3d\u7684<br/>\u5f3a\u5927.\u540c\u65f6,\u539f\u4e3b\u4eba\u642c\u8d70\u540e,\u4f60\u5c31\u80fd\u62e5\u6709\u4e00\u4e2a\u4e16\u754c\u6765\u5b58\u653e\u81ea\u5df1\u7684\u7269\u54c1\u4e86.\u79bb\u5f00\u65f6,\u4f60\u597d\u50cf\u77a5\u89c1\u4e86\u4e00\u53ea\u5c0f\u6076\u9b42,\u5f53\u7136<br/>\u8fd9\u53ea\u662f\u5e7b\u89c9? \u4e0d\u5e78\u7684\u662f,\u968f\u7740\u65f6\u95f4\u7684\u6d41\u901d,\u4f60\u79bb\u5f00\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u9677\u5165\u8352\u539f.(\u901a\u8fc7\u4f20\u9001\u95e8\u9000\u51fa\u6df1\u6e0a\u4e16\u754c\u540e\u4f60\u5c06\u88ab<br/>\u4f20\u9001\u5230\u4e16\u754c\u51fa\u751f\u70b9)\u4e3a\u4e86\u5236\u9020\u4e00\u53f0\u80fd\u591f\u5e26\u4f60\u6765\u5230\u6b63\u786e\u65f6\u95f4\u548c\u5730\u70b9\u7684\u673a\u5668,\u4f60\u4e0d\u5f97\u4e0d\u64b8\u8d77\u8896\u5b50,\u5728\u73b0\u6709\u6280\u672f\u5b9e\u529b\u4e0b\u505a<br/>\u5230\u6781\u9650. (\u505a\u597d\u51c6\u5907\u540e,\u8bf7\u67e5\u770b\"\u7ec8\u6781\u76ee\u6807\"\u4efb\u52a1\u680f)"
                },
                {
                    "name": "\u6cbb\u7597\u4f60\u7684\u8282\u70b9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8282\u70b9\u8c03\u8282\u5668.png",
                    "x": 60.0,
                    "y": 216.0,
                    "tooltip": "\u8bb8\u591a\u91ce\u751f\u8282\u70b9\u90fd\u6709\u635f\u4f24,\u540c\u65f6\u6253\u788e\u7f38\u4e2d\u8282\u70b9\u4e5f\u53ef\u80fd\u4f1a\u9020\u6210\u635f\u4f24.\u8282\u70b9\u64cd\u7eb5\u4eea\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5c06\u8282\u70b9\u6062\u590d\u5230\u6700\u5927\u5f3a\u5ea6,\u5e76<br/>\u63d0\u5347\u5b83\u4eec\u7684\u518d\u5145\u80fd\u901f\u5ea6."
                },
                {
                    "name": "\u65e0\u89c6\u5b83\u4eec\u773c\u4e2d\u7684\u5149\u8292",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u5080\u5121.png",
                    "x": 12.0,
                    "y": 360.0,
                    "tooltip": "\u8fd9\u4e0d\u662f\u4e2a\u597d\u4e3b\u610f,\u4f46\u4e0d\u5e94\u6210\u4e3a\u4f60\u505c\u4e0b\u6765\u7684\u7406\u7531.\u4e0d\u8fc7\u662f\u6709\u8111\u5b50\u7684\u5080\u5121\u7f62\u4e86,\u80fd\u51fa\u4ec0\u4e48\u95ee\u9898?\u4f60\u53ea\u9700\u5b8c\u6210\u5176\u4e2d\u4e00\u9879\u8981<br/>\u6c42\u5373\u53ef."
                },
                {
                    "name": "\u5347\u7ea7\u4f60\u7684\u6838\u5fc3",
                    "symbolSize": 31.200000000000003,
                    "x": 12.0,
                    "y": 216.0,
                    "tooltip": "\u5c1d\u8bd5\u4e3a\u4f60\u7684\u9707\u51fb\u6838\u5fc3\u6dfb\u52a0\u6f5c\u80fd. \u57283\u7ea7\u65f6,\u4f60\u53ef\u4ee5\u6dfb\u52a0\u95ea\u7535\u94fe\u6216\u51b2\u51fb\u6ce2."
                },
                {
                    "name": "\u8ba9\u6211\u4eec\u8bd5\u8bd5\u8fd9\u4e2a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5757\u72b6\u7269.png",
                    "x": 720.0,
                    "y": 96.0,
                    "tooltip": "\u51e1\u4eba.\u54fc! \u4ed6\u4eec\u5bf9\u771f\u6b63\u7684\u529b\u91cf\u80fd\u4e86\u89e3\u591a\u5c11\uff1f \u90a3\u4e2a\u58f0\u97f3\u544a\u8bc9\u6211,\u5982\u679c\u6211\u60f3\u7ee7\u7eed\u524d\u8fdb\u6211\u9700\u8981\u5173\u6ce8\u5f02\u57df\u548c\u9ed1\u6697. \u90a3<br/>\u4e48\u98df\u7269\u600e\u4e48\u6837\uff1f (\u8be6\u7ec6\u4fe1\u606f\u53c2\u8003\u9b54\u5bfc\u624b\u518c\u795e\u79d8\u626d\u66f2\u5b66)"
                },
                {
                    "name": "\u5c0f\u5e2e\u624b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7a3b\u8349\u5080\u5121.png",
                    "x": 108.0,
                    "y": 264.0,
                    "tooltip": "\u4e00\u4e2a\u4f18\u96c5\u7684\u795e\u79d8\u4f7f\u4ece\u6765\u4e0d\u4f1a\u4eb2\u81ea\u5e72\u90a3\u4e9b\u7c97\u91cd\u7684\u6d3b\u8ba1.\u4ed6\u4eec\u4e00\u822c\u90fd\u6709\u5c0f\u5e2e\u624b.\u5728\u4f60\u7684\u6307\u6325\u4e0b\u5080\u5121\u53ef\u4ee5\u5e2e\u52a9\u4f60\u505a\u4efb\u4f55\u7b80<br/>\u5355\u7684\u5de5\u4f5c."
                },
                {
                    "name": "\u9b54\u6cd5-\u7269\u54c1\u4f20\u8f93",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9b54\u955c.png",
                    "x": 204.0,
                    "y": 216.0,
                    "tooltip": "\u5b83\u7684\u5408\u6210\u5f88\u9ebb\u70e6,\u4f46\u53ef\u7528\u4e8e\u4f20\u9001\u7269\u54c1.\u8bf7\u67e5\u770b\u9b54\u5bfc\u624b\u518c\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f."
                },
                {
                    "name": "\u9b54\u955c\u7684\u73bb\u7483?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u955c\u9762\u73bb\u7483.png",
                    "x": 204.0,
                    "y": 168.0,
                    "tooltip": "\u8fd9\u79cd\u73bb\u7483\u770b\u8d77\u6765\u7528\u9014\u633a\u591a\u7684,\u53ef\u80fd\u5305\u62ec,\u4f20\u8f93\u7269\u54c1\u6216\u6e90\u8d28?"
                },
                {
                    "name": "\u9b54\u6cd5\u6756\u82af",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5b8f\u4f1f\u4e4b\u6728\u6756\u82af.png",
                    "x": 444.0,
                    "y": 168.0,
                    "tooltip": "\u6756\u67c4\u53ef\u8fdb\u4e00\u6b65\u5408\u6210:\u4e24\u4e2a(\u5339\u914d\u7684)\u6756\u67c4\u901a\u8fc7\u5143\u59cb\u9b54\u529b\u7ed3\u5408\u8d77\u6765,\u518d\u52a0\u4e0a\u9b54\u6cd5\u6c34\u6676\u7c07\u5373\u53ef\u5236\u6210\u6756\u82af.(\u867d\u7136\u5408\u6210\u8868<br/>\u5f62\u5f0f\u90fd\u4e00\u6837,\u4f46\u6bcf\u79cd\u6756\u82af\u90fd\u9700\u8981\u5206\u522b\u7814\u7a76.)"
                },
                {
                    "name": "\u9b54\u6cd5\"\u624b\u6743\u6756\"",
                    "symbolSize": 31.200000000000003,
                    "x": 468.0,
                    "y": 216.0,
                    "tooltip": "\u5c06\u6743\u6756\u5408\u6210\u8868\u4e2d\u7684\u6756\u67c4\u6362\u6210\u6756\u82af,\u5c31\u53ef\u4ee5\u5236\u4f5c\u51fa\u4e00\u79cd\u5947\u602a\u7684\u6df7\u5408\u4f53,\u878d\u5408\u4e86\u624b\u6756(staff)\u4e0e\u6743\u6756(scep<br/>ter)(\u6709\u65f6\u88ab\u79f0\u4e3a\"\u624b\u6743\u6756\"(staffter)). \u8fd9\u79cd\u4ea7\u7269\u65e0\u6cd5\u5b89\u88c5\u6838\u5fc3\u4e5f\u65e0\u6cd5\u653e\u5165\u5965\u672f\u5de5\u4f5c\u53f0,\u4f46<br/>\u5b83\u4ecd\u7136\u53ef\u4ee5\u7528\u4e8e\u6fc0\u6d3b\u7ed3\u6784(\u5982\u6ce8\u9b54\u796d\u575b),\u6216\u662f\u4f5c\u4e3a\u62e5\u6709\u4fee\u590d\u9644\u9b54\u88c5\u5907\u7684\"vis\u7535\u6c60\",\u5b83\u8fd8\u80fd\u4e3a\u7b26\u6587\u62a4\u76fe\u5145\u80fd<br/>."
                },
                {
                    "name": "\u66f4\u5177\u6d3b\u6027\u7684\u87ba\u4e1d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5145\u80fd\u5408\u91d1\u87ba\u4e1d.png",
                    "x": 444.0,
                    "y": 120.0,
                    "tooltip": "\u7531\u4e8e\u8fd9\u4e9b\u6756\u67c4\u53ef\u4ee5\u5bb9\u7eb3\u66f4\u591a\u7684\u9b54\u529b,\u56e0\u6b64,\u5f53\u6211\u5c1d\u8bd5\u4f7f\u7528\u90a3\u4e9b\u4e0d\u9508\u94a2\u87ba\u4e1d\u56fa\u5b9a\u8fd9\u4e9b\u6756\u67c4\u7684\u65f6\u5019,\u5b83\u4eec\u90fd\u878d\u5316\u4e86. <br/>\u6240\u4ee5\u6211\u9700\u8981\u4e00\u79cd\u65b0\u6750\u6599,\u53ef\u4ee5\u517c\u5bb9\u8fd9\u4e9b\u6d3b\u6027\u80fd\u91cf\u7684\u6750\u6599,\u6211\u60f3\u6211\u5e94\u8be5\u8bd5\u8bd5\u5145\u80fd\u5408\u91d1."
                },
                {
                    "name": "\u90fd\u4e0d\u7b80\u5355",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u79bb\u706b\u4e4b\u7130.png",
                    "x": 204.0,
                    "y": 264.0,
                    "tooltip": "\u8bf7\u6ce8\u610f!\u8fd9\u4e9b\u706b\u7130\u90fd\u662f\u5341\u5206\u5371\u9669\u7684.\u4f46\u662f\u4f60\u96be\u9053\u4e0d\u60f3\u5728\u4e0b\u754c\u62e5\u6709\u4e00\u7247\u96ea\u5730\u561b\uff1f\u5728\u670d\u52a1\u5668\u4e0a\u5e94\u8be5\u7981\u7528\u706b\u7130\u8513\u5ef6,\u4ee5\u9632<br/>\u6b62\u4ea7\u751f\u5de8\u91cf\u7684\u5ef6\u8fdf\u8fdb\u800c\u5bfc\u81f4\u670d\u52a1\u5668\u5d29\u6e83. (\u51e0\u79cd\u706b\u7130\u7684\u8be6\u60c5\u53c2\u8003\u9b54\u5bfc\u624b\u518c\u4e2d\u9b54\u6cd5\u5de5\u5320\u90e8\u5206)"
                },
                {
                    "name": "...or are they?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u79d8\u6676\u6756\u7aef.png",
                    "x": 108.0,
                    "y": 312.0,
                    "tooltip": "These caps are even better than thaumium!"
                },
                {
                    "name": "\u5965\u5229\u54c8\u94a2\u87ba\u4e1d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u5229\u54c8\u94a2\u87ba\u4e1d.png",
                    "x": 516.0,
                    "y": 168.0,
                    "tooltip": "\u672b\u5f71\u87ba\u4e1d\u5f88\u597d,\u4f46\u662f\u5982\u679c\u901a\u8fc7\u5b83\u4eec\u7684vis\u592a\u591a,\u5b83\u4eec\u4f3c\u4e4e\u4f1a\u7834\u88c2. \u505a\u4e00\u4e9b\u5965\u5229\u54c8\u94a2\u87ba\u4e1d\u5427."
                },
                {
                    "name": "\u5347\u7ea7\u4f60\u7684\u6cd5\u6756\u6838\u5fc3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6838\u5fc3\u9576\u9970\u53f0.png",
                    "x": 12.0,
                    "y": 168.0,
                    "tooltip": "\u6838\u5fc3\u9576\u9970\u53f0\u9700\u8981\u7ecf\u9a8c\u7b49\u7ea7\u548cvis\u624d\u80fd\u5347\u7ea7\u6838\u5fc3. \u6bcf\u4e2a\u6838\u5fc3\u53ef\u4ee5\u5347\u7ea7\u4e94\u6b21,\u6bcf\u6b21\u5347\u7ea7\u7684\u7ecf\u9a8c\u6d88\u8017\u7b49\u7ea7\u548cvis\u6d88<br/>\u8017\u589e\u52a08. \u67d0\u4e9b\u5347\u7ea7\u53ea\u80fd\u5728\u67d0\u4e9b\u7ea7\u522b\u5e94\u7528(\u901a\u5e38\u4ec5\u5728\u7ea7\u522b3),\u800c\u5176\u4ed6\u5347\u7ea7\u5219\u5177\u6709\u5fc5\u5907\u5347\u7ea7. \u50cf\u6734\u7d20\u548c\u6f5c\u80fd\u8fd9<br/>\u6837\u7684\u4e00\u4e9b\u5347\u7ea7\u53ef\u4ee5\u591a\u6b21\u5e94\u7528. \u6240\u6709\u5347\u7ea7\u90fd\u662f\u6c38\u4e45\u6027\u7684,\u76ee\u524d\u65e0\u6cd5\u5220\u9664\u5b83\u4eec."
                },
                {
                    "name": "\u6e05\u9664...\u4f60\u7684\u90e8\u5206\u626d\u66f2?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6c61\u79fd\u6cea\u6c34.png",
                    "x": 648.0,
                    "y": 96.0,
                    "tooltip": "\u8fd9\u79cd\u5236\u4f5c\u8d77\u6765\u5f88\u9ebb\u70e6,\u4e14\u53ea\u5728\u4f60\u62e5\u670950+\u626d\u66f2\u65f6\u624d\u751f\u6548\u7684\u73a9\u610f,\u4e0d\u8fc7\u8981\u662f\u4f60\u4e3a\u7bb1\u5b50\u91cc\u5230\u5904\u4e71\u52a8\u7684\u7269\u54c1\u800c\u5927\u611f\u5934\u75db<br/>\u7684\u8bdd,\u5b83\u8fd8\u662f\u6709\u70b9\u7528\u7684.\u8bf7\u67e5\u770b\u9b54\u5bfc\u624b\u518c\u4e2d\"\u795e\u79d8\u626d\u66f2\u5b66\"\u7ae0\u8282,\u5176\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5b83\u53ca\u76f8\u5173\u7269\u54c1."
                },
                {
                    "name": "\u6e05\u9664\u4f60\u7684\u626d\u66f2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7eaf\u51c0\u6cea\u6c34.png",
                    "x": 684.0,
                    "y": 96.0,
                    "tooltip": "\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb,\u4f60\u8eab\u4e0a\u6240\u79ef\u7d2f\u7684\u626d\u66f2\u5f00\u59cb\u6210\u4e3a\u4e00\u4e2a\u8ba9\u4f60\u5934\u75db\u7684\u95ee\u9898. \u4f7f\u7528\u6d74\u76d0\u548c\u9a71\u90aa\u80a5\u7682\u4e5f\u53ea\u662f\u4e00\u79cd\u6682\u65f6\u7684\u89e3<br/>\u51b3\u529e\u6cd5.\u8981\u771f\u6b63\u7684\u6446\u8131\u626d\u66f2,\u4f60\u9700\u8981\u4e00\u4e9b\u5305\u542b\u66f4\u52a0\u5f3a\u5927\u529b\u91cf\u7684\u4e1c\u897f,\u4e00\u6ef4\u7eaf\u51c0\u6cea\u6c34. \u5982\u679c\u4f60\u5e2e\u6211\u6536\u96c6\u4e00\u4e9b\u4e1c\u897f,<br/>\u6211\u53ef\u4ee5\u7ed9\u4f60\u4e00\u6ef4. \u597d\u597d\u60f3\u60f3\u5728\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u5b83,\u56e0\u4e3a\u5982\u679c\u4f60\u60f3\u901a\u8fc7\u7814\u7a76\u6765\u89e3\u9501\u8fd9\u4e2a\u7269\u54c1,\u90a3\u53ef\u662f\u975e\u5e38\u6f2b\u957f\u7684\u8fc7\u7a0b<br/>.PS\uff1a\u94f1\u9507\u5408\u91d1\u9700\u8981LuV\u7ea7\u7684\u4f9b\u80fd."
                },
                {
                    "name": "\u6311\u6218\u6781\u9650",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8d85\u541f\u9644\u9b54\u53f0.png",
                    "x": 444.0,
                    "y": 24.0,
                    "tooltip": "\u666e\u901a\u7684\u9644\u9b54\u4f1a\u6709\u6781\u9650,\u6bd4\u5982\u8bf4\u65f6\u8fd0\u6700\u9ad8\u662f3\u7ea7. \u4f46\u662f\u4f5c\u4e3a\u795e\u79d8\u4f7f,\u4f60\u53ef\u4ee5\u5229\u7528\u9b54\u6cd5\u7a81\u7834\u8fd9\u4e00\u9650\u5236,\u81f3\u5c11\u5f3a\u90a3\u4e48\u4e00<br/>\u70b9\u70b9\uff1b\u6bd4\u5982\u8bf4\u4f60\u53ef\u4ee5\u521b\u9020\u51fa\u65f6\u8fd04\u7684\u9644\u9b54. \u4f46\u662f\u8fd9\u4e2a\u8fc7\u7a0b\u4e5f\u662f\u6709\u5c40\u9650\u6027\u7684,\u5728\u9b54\u5bfc\u624b\u518c\u795e\u79d8\u57fa\u7840\u5b66\u8fd9\u4e00\u7ae0\u4e2d\u4f60\u53ef<br/>\u4ee5\u83b7\u5f97\u66f4\u591a\u76f8\u5173\u4fe1\u606f."
                },
                {
                    "name": "\u53cd\u5e94\u5806\u6750\u6599",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7837\u94c5\u94c1.png",
                    "x": 564.0,
                    "y": 168.0,
                    "tooltip": "\u8fd9\u4e2a\u4e1c\u897f\u633a\u6709\u8da3...\u4e5f\u8bb8\u6211\u53ef\u4ee5\u7528\u5b83\u6765\u4f5c\u4e3a\u6cd5\u6756\u7684\u63a7\u5236\u88c5\u7f6e."
                },
                {
                    "name": "\u771f\u7684(\u771f\u7684!)\u9ed1\u6697\u9b54\u6cd5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8840\u8165\u4eea\u5f0f.png",
                    "x": 732.0,
                    "y": 192.0,
                    "tooltip": "\u50bb\u74dc.\u6211\u8bf4\u4ed6\u4eec\u662f\u4e00\u7fa4\u50bb\u74dc! \u4ed6\u4eec\u4ec0\u4e48\u90fd\u4e0d\u77e5\u9053!\u8fd9\u672c\u4e66\u4f1a\u6307\u5f15\u6211.\u662f\u7684!\u662f\u7684!\u6211\u7684\u5b9d\u8d1d. \u5b83\u5c06\u8ba9\u6211\u4eec\u62e5\u6709<br/>\u66f4\u52a0\u5f3a\u5927\u7684\u529b\u91cf!  \u53ef\u5728\u672c\u5730\u7684\u4e66\u5546\u4e70\u5230,\u6216\u51fb\u6740\u8840\u8165\u9a91\u58eb\u3001\u8840\u8165\u4e3b\u6559\u6389\u843d\u83b7\u5f97."
                },
                {
                    "name": "\u79d8\u5bc6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8840\u8165\u90aa\u5f92\u515c\u5e3d.png",
                    "x": 672.0,
                    "y": 192.0,
                    "tooltip": "\u6211\u611f\u89c9\u5230\u4e86!\u662f\u7684,\u662f\u7684\u662f\u7684\u662f\u7684\u662f\u7684!!!!!! \u6211\u4eec\u5c06\u83b7\u5f97\u66f4\u5927\u7684\u529b\u91cf,\u529b\u91cf!!!!\u6211\u7684\u5b9d\u8d1d!. \u8fd9\u4e9b<br/>\u58f0\u97f3\u7ed9\u4e86\u6211\u4e00\u4e2a\u7ebf\u7d22,\u6709\u4e00\u4e2a\u96be\u4ee5\u7f6e\u4fe1\u5145\u6ee1\u4e86\u9b54\u6cd5\u529b\u91cf\u7684\u7ef4\u5ea6. \u6211\u5fc5\u987b\u53bb\u90a3,\u6211\u5fc5\u987b\u53bb! \u90aa\u672f\u6559\u5f92\u4eec\u77e5\u9053\u8fd9\u4e2a<br/>\u79d8\u5bc6.\u6211\u4f1a\u5c06\u4ed6\u4eec\u6495\u6210\u788e\u7247...\u563f\u563f\u563f\u4ed6\u4eec\u4f1a\u544a\u8bc9\u6211\u7684!\u6ce8\u610f:\u4f60\u53ef\u80fd\u9700\u8981\u4e00\u4e2a\u5237\u602a\u7b3c,\u4f60\u4e0b\u4e00\u4e2a\u4efb\u52a1\u6240\u9700\u7684\u4e66<br/>,\u6389\u843d\u51e0\u7387\u4e0d\u592a\u9ad8. \u53e6\u5916,\u5b83\u4eec\u7531\u90aa\u672f\u796d\u575b\u751f\u6210,\u4e14\u4e0d\u4f1a\u91cd\u590d\u751f\u6210."
                },
                {
                    "name": "\u5979\u653e\u5f03\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u51b0\u96ea\u5973\u738b\u4e4b\u8840.png",
                    "x": 564.0,
                    "y": 216.0,
                    "tooltip": "\u51b0\u96ea\u5973\u738b\u6709\u5f3a\u5927\u7684\u9b54\u6cd5\u529b\u91cf,\u4f46\u662f\u5979\u7684\u8840\u5374\u4f3c\u4e4e\u5f88\u666e\u901a. \u4e0d\u8fc7\u6211\u786e\u4fe1\u6211\u80fd\u7528\u8fd9\u4e2a\u6765\u4f5c\u4e3a\u65b0\u7684\u9b54\u6cd5\u5a92\u4ecb."
                },
                {
                    "name": "\u7565\u80dc\u4e00\u7b79",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6728\u5934\u5080\u5121.png",
                    "x": 60.0,
                    "y": 264.0,
                    "tooltip": "\u6728\u5934\u5080\u5121\u4f1a\u6bd4\u7a3b\u8349\u5080\u5121\u7a0d\u597d\u4e00\u70b9,\u4f46\u8fd8\u662f\u5f88\u5f31.\u4e0d\u8fc7\u8fd9\u4e9b\u5c0f\u4e1c\u897f\u8fd8\u662f\u86ee\u9002\u5408\u519c\u573a\u7684\u5de5\u4f5c\u7684."
                },
                {
                    "name": "\u8f6c\u6362\u6756\u67c4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8f6c\u5316\u6756\u67c4.png",
                    "x": 384.0,
                    "y": 120.0,
                    "tooltip": "\u7ed3\u5408\u4e16\u754c\u76d0\u548c\u4e00\u4e9b\u9b54\u6676,\u4f60\u53ef\u4ee5\u5c06\u5b8f\u4f1f\u4e4b\u6728\u6756\u67c4\u5347\u7ea7\u4e3a\u8f6c\u6362\u6756\u67c4. \u5728\u76ee\u524d,\u8fd9\u770b\u4e0a\u53bb\u662f\u4e2a\u76f8\u5f53\u6709\u8da3\u7684\u9009\u62e9!"
                },
                {
                    "name": "\u4f2a\u9006\u5fbd\u7ae0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5206\u5272\u5fbd\u7ae0.png",
                    "x": 252.0,
                    "y": 24.0,
                    "tooltip": "\u4f2a\u9006\u5fbd\u7ae0\u7684\u4eea\u5f0f\u8981\u6bd4\u6fc0\u6d3b\u5206\u5272\u5fbd\u7ae0\u7684\u4eea\u5f0f\u8981\u56f0\u96be\u5f97\u591a.\u8fdb\u884c\u8fc7\u8fd9\u4e2a\u4eea\u5f0f\u4e4b\u540e\u4f60\u7684\u5fbd\u7ae0\u5c06\u53d8\u5f97\u5f02\u5e38\u7a33\u5b9a,\u7528\u5176\u5236\u4f5c\u51fa<br/>\u7684\u91d1\u5c5e\u952d\u4e5f\u4e0d\u4f1a\u7206\u70b8,\u4e14\u5fbd\u7ae0\u7684\u8010\u4e45\u65e0\u9650.\u8fd9\u4e2a\u4eea\u5f0f\u9700\u8981\u5728\u672b\u5730\u8fdb\u884c. \u4eea\u5f0f\u662f\u901a\u8fc7\u5728\u672b\u5730\u4e00\u7247\u6bd4\u8f83\u5e73\u5766\u7684\u533a\u57df\u653e<br/>\u7f6e\u4e00\u4e2a\u4fe1\u6807,\u5468\u56f4\u73af\u7ed5\u4e0a\u87ba\u65cb\u72b6\u7684\u7ea2\u77f3\u548c\u7ebf(\u53f3\u952e\u653e\u7f6e),\u5e76\u4e14\u5728\u4fe1\u6807\u56db\u4e2a\u9762\u6b63\u5bf9\u65b9\u5411\u7684\u7ebf\u5916\u5404\u653e\u4e00\u4e2a\u7bb1\u5b50.\u7136\u540e<br/>\u5728\u6bcf\u4e2a\u7bb1\u5b50\u5185\u653e\u5165\u4e00\u4e0b\u8fd9\u4e9b\u7269\u54c1:\u5317:\u77f3\u5934,\u73bb\u7483,\u6728\u70ad,\u91d1\u952d,\u94c1\u952d,\u70e4\u732a\u6392,\u70e4\u725b\u6392,\u786c\u5316\u7c98\u571f,\u70e4\u9e21\u8089,\u4ed9<br/>\u4eba\u638c\u7eff,\u70e4\u571f\u8c46,\u70e4\u9c7c.\u5357:\u6ce5\u571f,\u8349\u65b9\u5757,\u6c99\u5b50,\u6c99\u783e,\u7c98\u571f,\u4ee5\u53ca\u539f\u7248\u77ff\u77f3\u6bcf\u79cd\u4e00\u4e2a.\u4e1c:12\u79cd\u6548\u679c\u4e0d\u540c\u7684<br/>\u836f\u6c34.\u897f:12\u5f20\u4e0d\u540c\u7684\u5531\u7247.\u624b\u6301\u6fc0\u6d3b\u7684\u5206\u5272\u5fbd\u7ae0Shift\u53f3\u51fb\u4fe1\u6807\u53ef\u4ee5\u5f97\u5230\u5f53\u524d\u4eea\u5f0f\u7684\u8fdb\u884c\u8fdb\u5ea6.\u6700\u540e\u5728\u4eea<br/>\u5f0f\u4e2d\u5fc3\u6740\u6b7b\u4e00\u4e2a\u94c1\u5080\u5121,\u5982\u679c\u4eea\u5f0f\u6210\u529f,\u5c06\u4f1a\u53d1\u751f\u4e00\u6b21\u7206\u70b8,\u5e76\u6467\u6bc1\u4fe1\u6807\u548c\u7bb1\u5b50,\u5e76\u4e14\u672b\u5730\u91cc\u5c06\u4f1a\u51fa\u73b0100\u53ea\u5404<br/>\u79cd\u5404\u6837\u81ea\u5e26\u52a0\u901fbuff\u5e76\u4ec7\u6068\u9501\u5b9a\u73a9\u5bb6\u7684\u602a\u7269,\u4f60\u9700\u8981\u5c06\u5b83\u4eec\u5168\u90e8\u6740\u5149.\u5728\u6ca1\u6709\u5b8c\u6210\u4eea\u5f0f\u4e4b\u524d\u5982\u679c\u73a9\u5bb6\u79bb\u5f00\u672b\u5730<br/>\u6216\u8005\u6b7b\u4ea1,\u4eea\u5f0f\u5c06\u4f1a\u5931\u8d25,\u4f60\u5fc5\u987b\u91cd\u65b0\u8fdb\u884c\u4eea\u5f0f. \u51fb\u6740\u591f\u8db3\u591f\u6570\u91cf\u7684\u602a\u7269\u540e,\u5206\u5272\u5fbd\u7ae0\u5c06\u4f1a\u53d8\u5f97\u7a33\u5b9a. \u4f2a\u9006\u5fbd<br/>\u7ae0\u53ef\u4ee5\u65e0\u9650\u4f7f\u7528,\u5408\u6210\u7684\"\u83ab\u6bd4\u4e4c\u65af\"\u7a33\u5b9a/\u4e0d\u7a33\u5b9a\"\u952d\"\u5c06\u4e0d\u4f1a\u7206\u70b8,\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u65b9\u5f0f\u8fdb\u884c\u5408\u6210,\u8fd8\u53ef\u4ee5<br/>\u53e0\u52a0\u523064\u4e2a\u4e00\u7ec4."
                },
                {
                    "name": "\u68cd\u68d2\u548c\u77f3\u5934",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u77f3\u5934\u5080\u5121.png",
                    "x": 60.0,
                    "y": 312.0,
                    "tooltip": "\u8981\u6253\u65ad\u4f60\u7684\u9aa8\u5934!\u8fd9\u4e9b\u50cf\u77f3\u5934\u4e00\u6837\u786c\u7684\u5bb6\u4f19(\u5728\u8fd9\u91cc\u63d2\u5165\u89c2\u4f17\u7684\u7b11\u58f0)\u4f1a\u5c3d\u53ef\u80fd\u7684\u4fdd\u62a4\u4f60\u7684."
                },
                {
                    "name": "\u6d17\u6fa1\u7684\u65f6\u5019\u6253\u80a5\u7682",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795b\u90aa\u80a5\u7682.png",
                    "x": 60.0,
                    "y": 24.0,
                    "tooltip": "\u8fd9\u79cd\u80a5\u7682\u5f88\u7279\u522b.\u5b83\u4f1a\u795b\u9664\u4e34\u65f6\u626d\u66f2,\u8fd8\u6709\u5c0f\u6982\u7387\u795b\u9664\u4e00\u4e9b\u7c98\u6027\u626d\u66f2. \u8bb0\u5f97\u5148\u6d17\u4e2a\u6fa1,\u8fd9\u4f1a\u63d0\u9ad8\u795b\u9664\u7c98\u6027\u626d\u66f2\u7684<br/>\u51e0\u7387.\u63d0\u793a:\u4f60\u9700\u8981\u7528\u51ff\u5b50\u5904\u7406\u4e00\u4e0b\u6cb9\u8102\u5757\u624d\u80fd\u8ba9\u5408\u6210\u8868\u751f\u6548."
                },
                {
                    "name": "\u7bb1\u5b50\u592a\u91cd\u4e86,\u96be\u4ee5\u643a\u5e26",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u672b\u5f71\u888b\u5b50.png",
                    "x": 492.0,
                    "y": 24.0,
                    "tooltip": "\u4e0d\u60f3\u5e26\u7740\u672b\u5f71\u7bb1\u5b50\u7136\u540e\u4e0d\u505c\u5730\u653e\u4e0b\u3001\u7834\u574f\u3001\u62fe\u53d6,\u4f55\u4e0d\u8bd5\u8bd5\u65b9\u4fbf\u597d\u7528\u7684\u672b\u5f71\u888b\u5b50\u5462?\u4f60\u5fc5\u987b\u5c06\u5b83\u4e0e\u4f60\u60f3\u8981\u94fe\u63a5\u7684\u7bb1<br/>\u5b50\u540c\u6b65.\u82e5\u8981\u5c06\u5176\u4e0e\u65b0\u7684\u7bb1\u5b50\u540c\u6b65,\u624b\u6301\u888b\u5b50Shift+\u53f3\u952e\u65b0\u7684\u7bb1\u5b50."
                },
                {
                    "name": "\u57fa\u7840\u5143\u7d20",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6676\u5316\u6e90\u8d28.png",
                    "x": 156.0,
                    "y": 360.0,
                    "tooltip": "\u5f53\u7136,\u4f60\u77e5\u9053\u5982\u4f55\u83b7\u5f97\u90a3\u4e9b\u57fa\u7840\u7684\u6e90\u8d28\u7c7b\u578b,\u4f46\u4f60\u77e5\u9053...\u5bf9\u5427\uff1f"
                },
                {
                    "name": "\u8fd9\u662f\u6700\u597d\u7684?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u5080\u5121.png",
                    "x": 12.0,
                    "y": 312.0,
                    "tooltip": "\u5f88\u9ad8\u7684\u8010\u4e45,\u80fd\u643a\u5e26\u5927\u91cf\u7684\u7269\u54c1.\u795e\u79d8\u5080\u5121\u88ab\u8ba4\u4e3a\u662f\"\u9876\u7ea7\"\u7684\u5080\u5121.\u4e0d\u8fc7\u4f60\u786e\u5b9a\u8fd8\u6709\u66f4\u597d\u7684\u5080\u5121...  \u6ce8\u610f<br/>:\u76f4\u63a5\u4f7f\u7528\u538b\u7f29\u673a\u751f\u4ea7\u7684\u795e\u79d8\u952d\u5757\u65e0\u6cd5\u7528\u4e8e\u70bc\u91d1\u5236\u4f5c\u5080\u5121,\u4f60\u9700\u8981\u4f7f\u7528\u51ff\u5b50\u5904\u7406\u4e00\u4e0b."
                },
                {
                    "name": "\u9ed1\u6697\u7684\u7ef4\u5ea6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5e9f\u5f03\u7bb1\u5b50.png",
                    "x": 744.0,
                    "y": 240.0,
                    "tooltip": "\u6211\u627e\u5230\u53bb\u90a3\u4e2a\u7ef4\u5ea6\u7684\u65b9\u6cd5\u4e86...\u6211\u7684\u5b9d\u8d1d.\u6211\u627e\u5230\u5566!!!!!! \u53ea\u89814\u4e2a\u7f8e\u5473\u7684\u773c\u775b,\u8fd8\u6709\u4e00\u4e9b\u9b54\u6cd5\u529b\u91cf\u6765<br/>\u6253\u5f00\u4f20\u9001\u95e8.\u90a3\u6247\u79d8\u5bc6\u7684\u4f20\u9001\u95e8,\u4ed6\u4eec\u4e00\u76f4\u6ca1\u6709\u53d1\u73b0. \u90a3\u6247\u95e8\u4e00\u76f4\u5728\u54ea\u91cc!\u4e00\u76f4\u5728\u54ea\u91cc... \u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8<br/>\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8"
                },
                {
                    "name": "\u521b\u9020\u5929\u5730\u7684\u529b\u91cf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5143\u59cb\u73cd\u73e0.png",
                    "x": 756.0,
                    "y": 288.0,
                    "tooltip": "\u4ec0\u4e48\uff1f\u6211...\u6211\u5728\u8fd9\u91cc\u5e72\u4ec0\u4e48\uff1f\u6211\u5728\u54ea\u91cc\uff1f\u8fd9\u662f\u4ec0\u4e48\u5730\u65b9\uff1f\u54e6...\u6211\u7684\u5934\u597d\u75db! (\u4f60\u521a\u521a\u53d1\u73b0\u8fd9\u9897\u6563\u53d1\u7740\u6ce2<br/>\u52a8\u7684\u73cd\u73e0\u4f3c\u4e4e\u6cbb\u6108\u4e86\u4f60\u7684\u5927\u8111...\u6216\u8005\u795b\u9664\u4e86\u4ec0\u4e48\u4e1c\u897f.\u53ef\u80fd\u662f\u4e00\u79cd\u975e\u5e38\u975e\u5e38\u53e4\u8001\u7684\u9677\u9631,\u6765\u9a71\u9010\u90a3\u4e9b\u5fc3\u672f\u4e0d\u6b63<br/>\u7684\u4eba)  /iskamiunlocked\u547d\u4ee4\u5c06\u4f1a\u544a\u8bc9\u4f60\u662f\u5426\u89e3\u9501\u4e86Kami.  \u5982\u679c\u6ca1\u6709,\u5c1d\u8bd5\u7814\u7a76\u795e\u79d8<br/>\u64ac\u68cd\u548c\u5492\u7075\u4e4b\u5251. \u6216\u662f\u539f\u7248\u9875\u9762\u3001\u795e\u79d8\u5de5\u5320\u9875\u9762\u4e0a\u7684\u7814\u7a76. \u89e3\u9501Kami\u4e0e\u5176\u4ed6mod\u6ca1\u5565\u5173\u7cfb."
                },
                {
                    "name": "\u4ed6\u4eec\u770b\u5230\u6211,\u4ed6\u4eec\u770b\u7740\u6211!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u90aa\u672f\u4e4b\u773c.png",
                    "x": 660.0,
                    "y": 240.0,
                    "tooltip": "\u773c\u775b.\u5bf9,\u773c\u775b! \u5b9d\u8d1d\u6211\u9700\u8981\u773c\u775b. \u4e0d\u662f\u6bdb\u8338\u8338\u7684\u8718\u86db\u7684\u773c\u775b.\u662f\u53ef\u53e3\u7684\u90aa\u672f\u4e4b\u773c! \u6211\u8981\u4ece\u90aa\u672f\u6559\u5f92\u7684\u5c38\u4f53<br/>\u4e0a\u9762\u5f97\u5230\u5b83!"
                },
                {
                    "name": "\u6709\u7528\u7684\u6811",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9ec4\u91d1\u6a61\u6811\u6811\u82d7.png",
                    "x": 204.0,
                    "y": 72.0,
                    "tooltip": "\u867d\u7136\u548c\u5176\u4ed6\u690d\u7269\u7c7b\u4f3c,\u4f46\u662f\u8fd9\u51e0\u79cd\u6811\u6709\u4e00\u4e9b\u7279\u522b\u7684\u80fd\u529b,\u53ef\u4ee5\u5438\u5f15\u5404\u79cd\"\u53cb\u597d\"\u6216\u8005\"\u4e0d\u53cb\u597d\"\u7684\u751f\u7269. (\u524d\u63d0<br/>\u662f\u4f60\u6ca1\u6709\u5c06\u4ed6\u4eec\u79cd\u690d\u5728\u8352\u51c9\u7684\u751f\u7269\u7fa4\u7cfb)"
                },
                {
                    "name": "\u6cd5\u6756\u5f3a\u5316: Vis\u96a7\u9053",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6cd5\u6756\u5f3a\u5316\u6838\u5fc3.png",
                    "x": 300.0,
                    "y": 216.0,
                    "tooltip": "\u5c06\u8fd9\u4e2a\u5f3a\u5316\u5e94\u7528\u5230\u6cd5\u6756\u5c06\u4f7f\u6cd5\u6756\u51cf\u5c1110\uff05\u7684vis\u6d88\u8017.\u4f46\u540c\u65f6\u589e\u52a05\uff05\u7684\u4e0d\u7a33\u5b9a\u6027.  \u6211\u4e0d\u786e\u5b9a\u8fd9\u4e1c\u897f\u80fd\u5426<br/>\u6b63\u5e38\u5de5\u4f5c,\u4f46\u8bd5\u8bd5\u770b\u5427,\u7136\u540e\u628a\u4f60\u7684\u5b9e\u9a8c\u7ed3\u679c\u544a\u8bc9\u6211,\u597d\u5417?"
                },
                {
                    "name": "\u6cd5\u6756\u5f3a\u5316",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6cd5\u6756\u5f3a\u5316\u6838\u5fc3.png",
                    "x": 252.0,
                    "y": 168.0,
                    "tooltip": "\u795e\u79d8\u529b\u5b66(Thaumic-Machina)\u63d0\u4f9b\u4e86\u4e0d\u5c11\u6cd5\u6756\u5f3a\u5316.\u8fd9\u4e9b\u6709\u7528\u7684\u6cd5\u6756\u5f3a\u5316\u53ef\u4ee5\u63d0\u5347\u6cd5\u6756\u7684\u5bb9\u91cf,<br/>\u964d\u4f4evis\u6d88\u8017,\u6216\u8005\u63d0\u4f9b\u5176\u4ed6\u6709\u8da3\u7684\u6548\u679c."
                },
                {
                    "name": "\u8fd8\u6709\u54ea\u91cc\u53ef\u80fd\u51fa\u95ee\u9898\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e90\u8d28\u5e93.png",
                    "x": 648.0,
                    "y": 144.0,
                    "tooltip": "\u5728\u4e00\u4e2a\u65b9\u5757\u5185\u5b58\u50a8256\u70b9\u6e90\u8d28\uff1f\u8fd9\u5c31\u662f\u6211\u6240\u8bf4\u7684\u5b58\u50a8! \u6211\u786e\u5b9e\u542c\u5230\u4e86\u4e00\u4e9b\u5947\u602a\u7684\u58f0\u97f3,\u4f46\u662f\u6211\u60f3\u90a3\u6ca1\u4ec0\u4e48\u7279\u522b<br/>\u7684... (\u9b54\u5bfc\u624b\u518c\u90aa\u672f\u5b66)"
                },
                {
                    "name": "\u8c01\u9700\u8981\u670b\u53cb?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u884c\u674e\u7bb1.png",
                    "x": 396.0,
                    "y": 168.0,
                    "tooltip": "\u884c\u674e\u7bb1\u603b\u6bd4\u7b28\u91cd\u8001\u65e7\u7684\u7bb1\u5b50\u5b9d\u5b9d\u597d.\u5b83\u4f1a\u81ea\u52a8\u62fe\u53d6\u5468\u56f4\u7684\u6389\u843d\u7269,\u5e2e\u4f60\u5728\u6316\u6398\u65f6\u8282\u7701\u65f6\u95f4.\u5b83\u8fd1\u4e4e\u65e0\u61c8\u53ef\u51fb,\u5305\u62ec<br/>\u5728\u5ca9\u6d46\u4e2d.\u5b83\u4f1a\u50cf\u4e00\u53ea\u70ed\u5207\u7684\u5c0f\u72d7\u4e00\u6837\u8ddf\u7740\u4f60,\u76f4\u5230\u4e16\u754c\u7684\u5c3d\u5934-\u4f46\u5728\u6539\u6362\u7ef4\u5ea6\u4e4b\u524d,\u4f60\u53ef\u80fd\u9700\u8981\u628a\u5b83\u6361\u8d77\u6765.\u96f7<br/>\u51fb\u53ef\u63d0\u4f9b\u66f4\u591a\u7a7a\u95f4.Shift+\u53f3\u952e\u5c06\u4f1a\u628a\u5b83\u53d8\u6210\u7269\u54c1(\u643a\u5e26\u5185\u90e8\u7269\u54c1).\u5728\u9b54\u5bfc\u624b\u518c,GTNH\u7ae0\u8282\u5bfb\u627e\u5b83\u7684<br/>\u76f8\u5173\u7814\u7a76."
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
                    "source": "\u4f60\u5df2\u7ecf\u51fa\u5e08\u4e86!",
                    "target": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f"
                },
                {
                    "source": "\u628a\u5b83\u5e26\u56de\u5bb6",
                    "target": "\u9ad8\u7ea7\u8282\u70b9\u7a33\u5b9a\u5668"
                },
                {
                    "source": "\u8f93\u9001\u6e90\u8d28",
                    "target": "(\u51e0\u4e4e)\u81ea\u52a8\u5316\u6e90\u8d28"
                },
                {
                    "source": "\u6e90\u8d28\u76d1\u6d4b",
                    "target": "(\u51e0\u4e4e)\u81ea\u52a8\u5316\u6e90\u8d28"
                },
                {
                    "source": "\u66f4\u5177\u6d3b\u6027\u7684\u87ba\u4e1d",
                    "target": "\u795e\u5947\u7684\u76d2\u5b50"
                },
                {
                    "source": "\u66f4\u5177\u6d3b\u6027\u7684\u87ba\u4e1d",
                    "target": "\u795e\u5947\u7684\u50a8\u7f50"
                },
                {
                    "source": "\u6700\u540e,\u4e00\u67c4\u94f6\u6811\u6cd5\u6756",
                    "target": "\u53ef\u6015\u7684\u9b54\u6cd5\u8f7d\u4f53"
                },
                {
                    "source": "\u6d53\u7f29\u9ed1\u6697",
                    "target": "\"\u62a4\u7532\""
                },
                {
                    "source": "\u66f4\u5177\u6d3b\u6027\u7684\u87ba\u4e1d",
                    "target": "\u6700\u540e,\u4e00\u67c4\u94f6\u6811\u6cd5\u6756"
                },
                {
                    "source": "\u6d17\u6fa1\u7684\u65f6\u5019\u6253\u80a5\u7682",
                    "target": "\u51c0\u5316\u4f60\u7684\u7075\u9b42"
                },
                {
                    "source": "\u7565\u80dc\u4e00\u7b79",
                    "target": "\u65c5\u884c\u4f34\u4fa3"
                },
                {
                    "source": "\u628a\u5b83\u5e26\u56de\u5bb6",
                    "target": "\u6cd5\u6756\u81ea\u52a8\u5145\u80fd"
                },
                {
                    "source": "\u9b54\u6cd5\u6756\u82af",
                    "target": "\u6cd5\u5e08\u7684\u6743\u6756\u9876\u90e8\u6709\u9b54\u6676"
                },
                {
                    "source": "\u6c90\u6d74\u66f4\u8863,\u8fdc\u79bb\u626d\u66f2\u70e6\u607c",
                    "target": "\u6d17\u6fa1\u505aSPA,\u81ea\u52a8\u53bb\u626d\u66f2"
                },
                {
                    "source": "\u4f60\u60f3\u77e5\u9053\u4f60\u73b0\u5728\u7684\u626d\u66f2\u503c\u4e48\uff1f",
                    "target": "\u6c90\u6d74\u66f4\u8863,\u8fdc\u79bb\u626d\u66f2\u70e6\u607c"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u4fe1\u6807"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u53f2\u4e0a\u6700\u597d\u7684\u6cd5\u6756\u6756\u7aef"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u628a\u5b83\u5e26\u56de\u5bb6"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u4f60\u771f\u7684\u80fd\u770b\u5230\u90a3\u4e9b\u5417?"
                },
                {
                    "source": "\u628a\u5b83\u5e26\u56de\u5bb6",
                    "target": "CV(Centi-vis)"
                },
                {
                    "source": "CV(Centi-vis)",
                    "target": "CV\u4e2d\u7ee7"
                },
                {
                    "source": "\u6cd5\u6756\u5f3a\u5316",
                    "target": "\u6cd5\u6756\u5f3a\u5316: \u9b54\u5b50\u7f13\u5b58"
                },
                {
                    "source": "\u6e90\u8d28\u5b58\u50a8",
                    "target": "\u6e05\u7406\u7c98\u6d46"
                },
                {
                    "source": "\u4f60\u5df2\u7ecf\u51fa\u5e08\u4e86!",
                    "target": "\u6d53\u7f29\u9ed1\u6697"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u521b\u9020\u66f4\u597d\u7684\u6cd5\u6756"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u5c16\u53eb\u9ed1\u66dc\u77f3"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u4f60\u60f3\u77e5\u9053\u4f60\u73b0\u5728\u7684\u626d\u66f2\u503c\u4e48\uff1f"
                },
                {
                    "source": "\u66f4\u5177\u6d3b\u6027\u7684\u87ba\u4e1d",
                    "target": "\u795b\u9b54"
                },
                {
                    "source": "\u66f4\u5177\u6d3b\u6027\u7684\u87ba\u4e1d",
                    "target": "\u9644\u9b54\u4e13\u5bb6"
                },
                {
                    "source": "\u53f2\u4e0a\u6700\u597d\u7684\u6cd5\u6756\u6756\u7aef",
                    "target": "\u6e90\u8d28\u5b58\u50a8"
                },
                {
                    "source": "\u6e90\u8d28\u5b58\u50a8",
                    "target": "\u6e90\u8d28\u76d1\u6d4b"
                },
                {
                    "source": "\u9b54\u955c\u7684\u73bb\u7483?",
                    "target": "\u8f93\u9001\u6e90\u8d28"
                },
                {
                    "source": "\u9ed1\u6697\u7684\u7ef4\u5ea6",
                    "target": "\u627e\u5230\u94a5\u5319"
                },
                {
                    "source": "\u5143\u59cb\u9b54\u529b",
                    "target": "\u553e\u624b\u53ef\u5f97\u7684\u8d22\u5bcc?"
                },
                {
                    "source": "\u4ed6\u4eec\u770b\u5230\u6211,\u4ed6\u4eec\u770b\u7740\u6211!",
                    "target": "\u6de6XXXXXXXXXX..."
                },
                {
                    "source": "CV(Centi-vis)",
                    "target": "\u6cbb\u7597\u4f60\u7684\u8282\u70b9"
                },
                {
                    "source": "\u8fd9\u662f\u6700\u597d\u7684?",
                    "target": "\u65e0\u89c6\u5b83\u4eec\u773c\u4e2d\u7684\u5149\u8292"
                },
                {
                    "source": "\u5347\u7ea7\u4f60\u7684\u6cd5\u6756\u6838\u5fc3",
                    "target": "\u5347\u7ea7\u4f60\u7684\u6838\u5fc3"
                },
                {
                    "source": "\u6d53\u7f29\u9ed1\u6697",
                    "target": "\u8ba9\u6211\u4eec\u8bd5\u8bd5\u8fd9\u4e2a"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u5c0f\u5e2e\u624b"
                },
                {
                    "source": "\u9b54\u955c\u7684\u73bb\u7483?",
                    "target": "\u9b54\u6cd5-\u7269\u54c1\u4f20\u8f93"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u9b54\u955c\u7684\u73bb\u7483?"
                },
                {
                    "source": "\u66f4\u5177\u6d3b\u6027\u7684\u87ba\u4e1d",
                    "target": "\u9b54\u6cd5\u6756\u82af"
                },
                {
                    "source": "\u9b54\u6cd5\u6756\u82af",
                    "target": "\u9b54\u6cd5\"\u624b\u6743\u6756\""
                },
                {
                    "source": "\u8f6c\u6362\u6756\u67c4",
                    "target": "\u66f4\u5177\u6d3b\u6027\u7684\u87ba\u4e1d"
                },
                {
                    "source": "\u53f2\u4e0a\u6700\u597d\u7684\u6cd5\u6756\u6756\u7aef",
                    "target": "\u90fd\u4e0d\u7b80\u5355"
                },
                {
                    "source": "\u53f2\u4e0a\u6700\u597d\u7684\u6cd5\u6756\u6756\u7aef",
                    "target": "...or are they?"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "...or are they?"
                },
                {
                    "source": "\u53cd\u5e94\u5806\u6750\u6599",
                    "target": "\u5965\u5229\u54c8\u94a2\u87ba\u4e1d"
                },
                {
                    "source": "CV(Centi-vis)",
                    "target": "\u5347\u7ea7\u4f60\u7684\u6cd5\u6756\u6838\u5fc3"
                },
                {
                    "source": "\u6d53\u7f29\u9ed1\u6697",
                    "target": "\u6e05\u9664...\u4f60\u7684\u90e8\u5206\u626d\u66f2?"
                },
                {
                    "source": "\u6d53\u7f29\u9ed1\u6697",
                    "target": "\u6e05\u9664\u4f60\u7684\u626d\u66f2"
                },
                {
                    "source": "\u9644\u9b54\u4e13\u5bb6",
                    "target": "\u6311\u6218\u6781\u9650"
                },
                {
                    "source": "\u53ef\u6015\u7684\u9b54\u6cd5\u8f7d\u4f53",
                    "target": "\u53cd\u5e94\u5806\u6750\u6599"
                },
                {
                    "source": "\u79d8\u5bc6",
                    "target": "\u771f\u7684(\u771f\u7684!)\u9ed1\u6697\u9b54\u6cd5"
                },
                {
                    "source": "\"\u62a4\u7532\"",
                    "target": "\u79d8\u5bc6"
                },
                {
                    "source": "\u53cd\u5e94\u5806\u6750\u6599",
                    "target": "\u5979\u653e\u5f03\u4e86"
                },
                {
                    "source": "\u5c0f\u5e2e\u624b",
                    "target": "\u7565\u80dc\u4e00\u7b79"
                },
                {
                    "source": "\u521b\u9020\u66f4\u597d\u7684\u6cd5\u6756",
                    "target": "\u8f6c\u6362\u6756\u67c4"
                },
                {
                    "source": "\u5495\u565c...\u5495\u565c...\u5495\u565c...",
                    "target": "\u4f2a\u9006\u5fbd\u7ae0"
                },
                {
                    "source": "\u8fd9\u5c31\u7ed3\u675f\u4e86\uff1f\u4e0d,\u8fd9\u662f\u672b\u5730!",
                    "target": "\u4f2a\u9006\u5fbd\u7ae0"
                },
                {
                    "source": "\u4fe1\u6807",
                    "target": "\u4f2a\u9006\u5fbd\u7ae0"
                },
                {
                    "source": "\u7565\u80dc\u4e00\u7b79",
                    "target": "\u68cd\u68d2\u548c\u77f3\u5934"
                },
                {
                    "source": "\u6c90\u6d74\u66f4\u8863,\u8fdc\u79bb\u626d\u66f2\u70e6\u607c",
                    "target": "\u6d17\u6fa1\u7684\u65f6\u5019\u6253\u80a5\u7682"
                },
                {
                    "source": "\u795e\u5947\u7684\u76d2\u5b50",
                    "target": "\u7bb1\u5b50\u592a\u91cd\u4e86,\u96be\u4ee5\u643a\u5e26"
                },
                {
                    "source": "\u6e90\u8d28\u5b58\u50a8",
                    "target": "\u57fa\u7840\u5143\u7d20"
                },
                {
                    "source": "\u68cd\u68d2\u548c\u77f3\u5934",
                    "target": "\u8fd9\u662f\u6700\u597d\u7684?"
                },
                {
                    "source": "\u4ed6\u4eec\u770b\u5230\u6211,\u4ed6\u4eec\u770b\u7740\u6211!",
                    "target": "\u9ed1\u6697\u7684\u7ef4\u5ea6"
                },
                {
                    "source": "\u627e\u5230\u94a5\u5319",
                    "target": "\u521b\u9020\u5929\u5730\u7684\u529b\u91cf"
                },
                {
                    "source": "\u771f\u7684(\u771f\u7684!)\u9ed1\u6697\u9b54\u6cd5",
                    "target": "\u4ed6\u4eec\u770b\u5230\u6211,\u4ed6\u4eec\u770b\u7740\u6211!"
                },
                {
                    "source": "\u719f\u7ec3\u7684\u795e\u79d8\u4f7f",
                    "target": "\u6709\u7528\u7684\u6811"
                },
                {
                    "source": "\u6cd5\u6756\u5f3a\u5316",
                    "target": "\u6cd5\u6756\u5f3a\u5316: Vis\u96a7\u9053"
                },
                {
                    "source": "\u9b54\u955c\u7684\u73bb\u7483?",
                    "target": "\u6cd5\u6756\u5f3a\u5316"
                },
                {
                    "source": "\u5145\u80fd\u5408\u91d1",
                    "target": "\u6cd5\u6756\u5f3a\u5316"
                },
                {
                    "source": "\u6d53\u7f29\u9ed1\u6697",
                    "target": "\u8fd8\u6709\u54ea\u91cc\u53ef\u80fd\u51fa\u95ee\u9898\uff1f"
                },
                {
                    "source": "\u66f4\u5177\u6d3b\u6027\u7684\u87ba\u4e1d",
                    "target": "\u8c01\u9700\u8981\u670b\u53cb?"
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