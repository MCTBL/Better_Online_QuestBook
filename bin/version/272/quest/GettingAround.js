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
                    "name": "\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305.png",
                    "x": 132.0,
                    "y": 120.0,
                    "tooltip": "\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305\u662f\u7535\u52a8\u55b7\u6c14\u80cc\u5305\u7684\u5347\u7ea7\u7248.\u53ef\u4ee5\u88c5\u5907\u5728\u80f8\u7532\u90e8\u4f4d,\u5f53\u5145\u6ee1EU\u7535\u529b\u65f6,\u53ef\u4ee5\u98de\u884c.\u5b83\u5e76\u6ca1\u6709\u4efb\u4f55<br/>\u4fdd\u62a4\u529f\u80fd,\u4f46\u5176\u5185\u90e8\u50a8\u5b58\u76843M-EU\u7535\u529b\u53ef\u4ee5\u4e3a\u4f60\u7684\u5de5\u5177\u5145\u7535,\u5982\u540c\u8fdb\u9636\u7535\u6c60\u80cc\u5305\u4e00\u6837\u8fd0\u4f5c.\u8fdb\u9636\u55b7\u6c14\u80cc\u5305\u7684\u6700<br/>\u5927\u98de\u884c\u9ad8\u5ea6\u662f256\u5c42.\u5728\u63a7\u5236\u91cc\u7684\u91cd\u529b\u88c5\u7532(gravisuite)\u680f\u4e0b\u7684fly\u952e\u5f00\u542f\u55b7\u6c14\u80cc\u5305.\u7a7a\u683c\u952e\u63d0<br/>\u5347\u9ad8\u5ea6.\u60ac\u505c\u6a21\u5f0f\u53ef\u901a\u8fc7\u6309\u4f4f\u7a7a\u683c\u5e76\u6309\u4e0bIC2\u5207\u6362\u6a21\u5f0f\u7684\u5feb\u6377\u952e\u6fc0\u6d3b.\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305\u4e5f\u53ef\u4ee5\u4e3a\u7269\u54c1\u680f\u4e2d\u7684\u5de5<br/>\u5177\u5145\u80fd."
                },
                {
                    "name": "\u8fdb\u9636\u7eb3\u7c73\u91cd\u529b\u80f8\u7532",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8fdb\u9636\u7eb3\u7c73\u91cd\u529b\u80f8\u7532.png",
                    "x": 132.0,
                    "y": 216.0,
                    "tooltip": "\u5c06\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305\u53ca\u7eb3\u7c73\u62a4\u7532\u7ec4\u5408,\u4f1a\u5f97\u5230\u8fdb\u9636\u7eb3\u7c73\u91cd\u529b\u80f8\u7532.\u5c31\u53ef\u4ee5\u62e5\u6709\u80f8\u7532\u7684\u9632\u62a4\u80fd\u529b,\u5e76\u53ef\u4f7f\u7528\u55b7\u6c14\u80cc\u5305<br/>\u81ea\u7531\u7684\u79fb\u52a8.\u7528\u8d77\u6765\u8ddf\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305\u4e00\u6837."
                },
                {
                    "name": "Alternative to blasting off!?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4f20\u9001\u53f0.png",
                    "x": 372.0,
                    "y": 216.0,
                    "tooltip": "Are you sick and tired of using the rocket to blas<br/>t off every time and want an alternative and faste<br/>r method? The Enderio Telepad is a 3x3x1 structure<br/> that when powered with RF will teleport the playe<br/>r to a set coordinate.\n\nTo set the Coordinate you <br/>will need a Coordinate selector tool to mark an ar<br/>ea by Shift right clicking to mark. Then Shift rig<br/>ht click the middle of the Enderio Telepad pad to <br/>set the desired location.\n\nThen stand on the pad a<br/>nd click teleport to be sent in style.\n"
                },
                {
                    "name": "\u5929\u4f7f\u7fc5\u8180",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u5f3a\u5316\u7fbd\u7ffc.png",
                    "x": 36.0,
                    "y": 168.0,
                    "tooltip": "\u65e2\u7136\u4f60\u73b0\u5728\u53ef\u4ee5\u83b7\u5f97\u6bd4\u7eb8\u677f\u66f4\u597d\u7684\u6750\u6599,\u4f60\u5c31\u60f3\u5236\u9020\u7fc5\u8180.\u5929\u4f7f\u7684\u7fc5\u8180."
                },
                {
                    "name": "\u5929\u4f7f\u4e4b\u7ffc-\u7ed3\u5408!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6ce8\u9b54\u91cf\u5b50\u80f8\u7532.png",
                    "x": 84.0,
                    "y": 264.0,
                    "tooltip": "\u6700\u540e\u4e00\u6b65\u662f\u628a\u91cf\u5b50\u76d4\u7532\u548c\u91cf\u5b50\u7fc5\u8180\u7ed3\u5408\u8d77\u6765."
                },
                {
                    "name": "\u5929\u4f7f\u4e4b\u7ffc-\u8d85\u529b!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91cf\u5b50\u7fbd\u7ffc.png",
                    "x": 36.0,
                    "y": 264.0,
                    "tooltip": "\u4ece\u77ff\u77f3\u5230\u94a2\u952d,\u4ece\u7eb3\u7c73\u5230\u91cf\u5b50,\u968f\u7740\u4f60\u7684\u8fdb\u6b65,\u4f60\u7684\u6280\u672f\u6c34\u5e73\u4e5f\u4f1a\u63d0\u9ad8,\u4f60\u7684\u7fc5\u8180\u4e5f\u5e94\u8be5\u5982\u6b64."
                },
                {
                    "name": "\u4e00\u79cd\u66f4\u5feb\u6377\u7684\u51fa\u884c\u65b9\u5f0f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u978d.png",
                    "x": 36.0,
                    "y": -72.0,
                    "tooltip": "\u4f60\u51c6\u5907\u597d\u957f\u9014\u65c5\u884c\u4e86\u5417?\u5e26\u4e0a\u65b0\u7684\u5348\u9910\u76d2\u3001\u978d\u3001\u6813\u7ef3\u8fd8\u6709\u4e00\u5339\u9a6c,\u6211\u4eec\u5c31\u53ef\u4ee5\u5f00\u59cb\u4e00\u6b21\u65c5\u884c\u4e86.\u8bf7\u52ff\u6d89\u5165\u6df1\u6c34,\u9a6c<br/>\u4e0d\u559c\u6b22\u7a7f\u8fc7\u6df1\u6c34.\u5982\u679c\u5728\u6df1\u6c34\u533a\u843d\u9a6c\u4e86,\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u590d\u9a91\u4e0a\u5e76\u6bcf\u6b21\u79fb\u52a8\u4e00\u5c0f\u6bb5\u8ddd\u79bb,\u5bf9\u4e8e\u5c0f\u6cb3\u6765\u8bf4,\u8fd9\u6837\u6bd4\u6cc5\u6e21<br/>\u66f4\u5feb.\u5f53\u4e24\u5cb8\u8ddd\u79bb\u4e0d\u8fdc\u65f6,\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7eb5\u9a6c\u8df3\u8fc7.\u5982\u679c\u4f60\u662f\u5355\u673a\u73a9\u5bb6\u6216\u662f\u5728\u672c\u5730\u670d\u52a1\u5668\u8fdb\u884c\u6e38\u620f,\u9a6c\u662f\u4e00\u79cd\u975e\u5e38<br/>\u4e0d\u9519\u7684\u51fa\u884c\u65b9\u5f0f.\u4f46\u5728\u975e\u672c\u5730\u670d\u52a1\u5668\u7684\u8bdd,\u5982\u679c\u4f60\u7684\u7f51\u7edc\u4e0d\u591f\u7ed9\u529b\u6216\u662f\u670d\u52a1\u5668\u7684TPS\u582a\u5fe7,\u9a91\u9a6c\u53ef\u80fd\u4f1a\u51fa\u95ee\u9898.<br/>..\u800c\u57fa\u672c\u6240\u6709\u5b98\u65b9\u670d\u52a1\u5668\u90fd\u6709\u8fd9\u6837\u7684\u95ee\u9898...\u5f53\u4f60\u4e0b\u9a6c\u8981\u8c03\u67e5\u67d0\u7269\u65f6,\u522b\u5fd8\u4e86\u628a\u9a6c\u62f4\u5728\u6805\u680f\u4e0a."
                },
                {
                    "name": "\u66f4\u70ab\u9177\u7684\u9774\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7535\u5b50\u65c5\u884c\u8005\u4e4b\u9774.png",
                    "x": 180.0,
                    "y": 168.0,
                    "tooltip": "\u7535\u5b50\u65c5\u884c\u8005\u4e4b\u9774\u67092\uff05\u7684\u9b54\u529b\u51cf\u514d,\u4ee5\u53ca\u666e\u901a\u65c5\u884c\u8005\u4e4b\u9774\u7684\u6240\u6709\u4f18\u70b9."
                },
                {
                    "name": "\u8239\u6a21\u5177",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6a21\u5934(\u8239).png",
                    "x": -204.0,
                    "y": 24.0,
                    "tooltip": "\u522b\u6000\u7591,\u4e3a\u4e86\u505a\u66f4\u9ad8\u9636\u7684\u8239,\u4f60\u9700\u8981\u4e00\u4e2a\u65b0\u7684\u8303\u672c.\u4f46\u662f\u9996\u5148\u4f60\u9700\u8981\u5236\u4f5c\u4e00\u53f0\u538b\u6a21\u673a."
                },
                {
                    "name": "\u589e\u52a0\u4f60\u7684\u901f\u5ea6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u63a8\u8fdb\u8f68\u9053.png",
                    "x": -60.0,
                    "y": 24.0,
                    "tooltip": "\u5982\u679c\u4f60\u51b3\u5b9a\u4e0d\u4f7f\u7528\u706b\u8f66\u5934,\u4ec5\u4ec5\u60f3\u75281\u8282\u6216\u80052\u8282\u8f66\u53a2\u7684\u8bdd,\u4f60\u53ef\u4ee5\u4f7f\u7528\u63a8\u8fdb\u8f68\u9053. \u4f7f\u7528\u62c9\u6746\u6216\u8005\u5176\u4ed6\u65b9\u5f0f\u63d0\u4f9b<br/>\u7ea2\u77f3\u4fe1\u53f7\u53ef\u4ee5\u6fc0\u6d3b\u8f68\u9053. \u5b83\u4eec\u540c\u6837\u53ef\u7528\u4e8e\u51cf\u901f,\u5c24\u5176\u662f\u8f6c\u5f2f\u7684\u65f6\u5019!"
                },
                {
                    "name": "\u589e\u52a0\u4f60\u7684\u901f\u5ea6 v2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u63a8\u8fdb\u8f68\u9053.png",
                    "x": -12.0,
                    "y": 120.0,
                    "tooltip": "\u9ad8\u901f\u8fc7\u6e21\u8f68\u9053\u548c\u63a8\u8fdb\u8f68\u9053\u8ba9\u4f60\u7684\u77ff\u8f66\u4ee5\u532a\u5937\u6240\u601d\u7684\u901f\u5ea6\u79fb\u52a8.  \u4e0d\u8981\u5b8c\u5168\u4f7f\u7528\u666e\u901a\u8f68\u9053,\u5426\u5219\u4f60\u7684\u77ff\u8f66\u5c06\u4f1a\u7206\u70b8<br/>.  \u4e0d\u8981\u8bd5\u56fe\u5728\u9ad8\u901f\u884c\u9a76\u65f6\u8f6c\u5f2f,\u5426\u5219...\u4f60\u731c\u5bf9\u4e86,\u4f60\u7684\u77ff\u8f66\u5c06\u4f1a\u7206\u70b8."
                },
                {
                    "name": "\u78b3\u7ea4\u7ef4\u8f7b\u8247",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u78b3\u7ea4\u7ef4\u8f7b\u8247.png",
                    "x": -252.0,
                    "y": 72.0,
                    "tooltip": "\u4e0e\u5176\u4ed6\u5c0f\u8247\u4e0d\u540c,\u8fd9\u60ca\u4eba\u7684\u78b3\u7ea4\u7ef4\u8f7b\u8247*\u575a\u4e0d\u53ef\u6467*!\u8fd9\u8868\u793a\u4f60\u53ef\u4ee5\u5f00\u7740\u5b83\u51b2\u5411\u6c99\u6ee9\u3001\u8377\u53f6,\u751a\u81f3\u662f\u9cc4\u9c7c--\u8fde\u4e00<br/>\u70b9\u522e\u4f24\u90fd\u4e0d\u4f1a\u6709!\u8b66\u544a:\u5bf9\u4efb\u4f55\u9a76\u5165\u5ca9\u6d46\u6216\u865a\u7a7a\u9020\u6210\u7684\u635f\u4f24,\u6211\u4eec\u6055\u4e0d\u8d1f\u8d23.*\u56e0\u6b64,\u4e0d\u4e88\u4fdd\u4fee."
                },
                {
                    "name": "\u77ff\u8f66\u4e0e\u533a\u5757\u52a0\u8f7d\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4e16\u754c\u951a\u8f66.png",
                    "x": 36.0,
                    "y": 72.0,
                    "tooltip": "\u5f53\u4ece\u8fdc\u8ddd\u79bb\u8fd0\u8f93\u77f3\u6cb9\u65f6,\u706b\u8f66\u5c06\u9700\u8981\u4e00\u4e2a\u533a\u5757\u52a0\u8f7d\u5668. \u5236\u4f5c\u4e00\u4e2a,\u6211\u4f1a\u514d\u8d39\u7ed9\u4f60\u7b2c\u4e8c\u4e2a.\u6b64\u4efb\u52a1\u5728\u591a\u4eba\u6e38\u620f\u4e2d\u53ef<br/>\u80fd\u65e0\u6cd5\u5b8c\u6210?"
                },
                {
                    "name": "Celestial Gateways",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4ed9\u57df\u4e4b\u95e8.png",
                    "x": 420.0,
                    "y": 168.0,
                    "tooltip": "Celestial Gateways are a bit expensive, but they p<br/>rovide very convenient travel within a dimension.\n<br/>\nShift click with a celestial pearl on a celestial<br/> gateway to attune the pearl to that specific gate<br/>way and insert that pearl into the slot of another<br/>.\n\nShift when standing above a celestial gateway t<br/>o get the teleportation menu. It makes sense to na<br/>me the pearls in an anvil if you want to easily id<br/>entify the different locations."
                },
                {
                    "name": "Charm of Dislocation",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9519\u4f4d\u5b9d\u77f3.png",
                    "x": 372.0,
                    "y": 312.0,
                    "tooltip": "They have limited durability. So either put them o<br/>n a pedestal to avoid durability loss, or use a th<br/>aumic restorer."
                },
                {
                    "name": "\u71c3\u7164\u55b7\u6c14\u80cc\u5305",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7164\u55b7\u6c14\u80cc\u5305.png",
                    "x": 84.0,
                    "y": -24.0,
                    "tooltip": "\u4f60\u7684\u71c3\u7164\u55b7\u6c14\u80cc\u5305\u9700\u8981\u6c34\u8ddf\u70ad\u6765\u5236\u9020\u84b8\u6c7d.\u5728\u77ed\u6682\u7684\u6696\u673a\u4e4b\u540e,\u5c31\u53ef\u4ee5\u8d77\u98de\u4e86.\u8bb0\u4f4f\u4f60\u9700\u8981\u6ed1\u7fd4\u7ffc\u6765\u5b89\u5168\u7684\u964d\u843d.<br/>\u5c06\u84b8\u6c7d\u80cc\u5305\u88c5\u5728\u4f60\u7684\u80cc\u4e0a,\u5e76\u6309shift\u4ee5\u53ca\u63a2\u9669\u80cc\u5305\u52a8\u4f5c\u952e\u6765\u542f\u52a8\u5b83.\u8fd9\u4e9b\u55b7\u6c14\u80cc\u5305\u7684\u6700\u5927\u98de\u884c\u9ad8\u5ea6\u662f185<br/>\u5c42.\u5782\u76f4\u901f\u5ea6\u5728\u8d85\u8fc7\u7406\u60f3\u9ad8\u5ea6\u540e,\u4f1a\u7ebf\u6027\u964d\u4f4e.\u55b7\u6c14\u80cc\u5305\u7684\u7406\u60f3\u9ad8\u5ea6\u662f135\u5c42,\u76f4\u5347\u673a\u80cc\u5305\u7684\u7406\u60f3\u9ad8\u5ea6\u662f100<br/>\u5c42."
                },
                {
                    "name": "\u76f4\u5347\u673a\u80cc\u5305,\u66f4\u64c5\u60ac\u505c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u76f4\u5347\u673a\u80cc\u5305.png",
                    "x": 84.0,
                    "y": 24.0,
                    "tooltip": "\u76f4\u5347\u673a\u80cc\u5305\u662f\u7b2c\u4e00\u4e2a\u6709\u76d8\u65cb\u6a21\u5f0f\u7684\u55b7\u6c14\u80cc\u5305.\u5b83\u53ef\u4ee5\u4f7f\u7528\u6240\u6709\u6876\u88c5\u7684\u71c3\u6599.\u6876\u88c5\u6742\u915a\u6cb9\u3001\u5ca9\u6d46\u3001\u77f3\u6cb9,\u6216\u71c3\u6599\u90fd\u53ef<br/>\u4ee5.\u88c5\u5907\u4f60\u7684\u55b7\u6c14\u80cc\u5305,\u6309shift\u4ee5\u53ca\u63a2\u9669\u80cc\u5305\u52a8\u4f5c\u952e\u6765\u542f\u52a8\u5b83.\u4f60\u53ef\u4ee5\u5728\u6b63\u5e38\u6a21\u5f0f\u8ddf\u76d8\u65cb\u6a21\u5f0f\u95f4\u5207\u6362.\u6700\u5927<br/>\u98de\u884c\u9ad8\u5ea6\u662f200\u5c42.\u5782\u76f4\u901f\u5ea6\u5728\u8d85\u8fc7\u7406\u60f3\u9ad8\u5ea6\u540e,\u4f1a\u7ebf\u6027\u964d\u4f4e.\u55b7\u6c14\u80cc\u5305\u7684\u7406\u60f3\u9ad8\u5ea6\u662f135\u5c42,\u76f4\u5347\u673a\u80cc\u5305\u7684<br/>\u7406\u60f3\u9ad8\u5ea6\u662f100\u5c42.\u6389\u843d\u7269\u4f1a\u88ab\u5439\u8d70,\u5c31\u50cf\u73b0\u5b9e\u91cc\u7684\u76f4\u5347\u673a\u4e00\u6837,\u6240\u4ee5\u5728\u672b\u5730\u6216\u60ac\u5d16\u8fb9\u9700\u8981\u6ce8\u610f\u8fd9\u4e00\u70b9."
                },
                {
                    "name": "\u64ac\u68cd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u64ac\u68cd.png",
                    "x": -108.0,
                    "y": -24.0,
                    "tooltip": "\u64ac\u68cd\u6709RC\u7248\u672c\u8ddfGT\u7248\u672c(\u4ee5\u53ca\u795e\u79d8\u7684RC\u7248\u672c).\u53ef\u4ee5\u7528\u6765\u64cd\u4f5cRC\u7684\u673a\u5668,\u6216\u7528\u6765\u79fb\u9664\u5728GT\u7ba1\u9053\u548c\u673a\u5668\u4e0a<br/>\u7684\u8986\u76d6\u677f(\u7535\u52a8\u6cf5,\u4f20\u9001\u5e26\u7b49\u7b49).\u5e76\u53ef\u4ee5\u66f4\u5feb\u5730\u62c6\u9664\u8f68\u9053\u4e4b\u7c7b\u7684\u5bf9\u8c61.\u64ac\u68cd\u4e5f\u53ef\u7528\u6765\u5b58\u53d6RC\u7684\u7269\u54c1\u5e93\u5b58.\u624b\u6301<br/>\u64ac\u68cdShift+\u53f3\u952e\u4ee5\u94fe\u63a5\u77ff\u8f66.\u70b9\u51fb\u9996\u4e2a\u77ff\u8f66\u540e\u4f9d\u6b21\u70b9\u51fb\u6dfb\u52a0\u66f4\u591a\u77ff\u8f66.\u94fe\u63a5\u7684\u77ff\u8f66\u6570\u91cf\u8d8a\u591a,\u8fd0\u884c\u8d8a\u6162.\u64ac<br/>\u68cd\u4e5f\u53ef\u4ee5\u5f53\u6b66\u5668\u4f7f\u7528,\u867d\u7136\u653b\u51fb\u4f1a\u6d88\u8017\u53cc\u500d\u8010\u4e45(\u5c31\u50cf\u5176\u4ed6\u7684\u975e\u6b66\u5668\u5de5\u5177\u4e00\u6837...). \u8bd1\u8005\u6ce8:\u98df\u6211\u7269\u7406\u5b66\u5723<br/>\u5251\u5566!"
                },
                {
                    "name": "'\u7b80\u4fbf'\u4f20\u9001",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4f20\u9001\u5668.png",
                    "x": 420.0,
                    "y": 120.0,
                    "tooltip": "\u4f20\u9001\u5668\u975e\u5e38\u597d\u7528,\u867d\u7136\u5236\u4f5c\u8d77\u6765\u6bd4\u8f83\u75db\u82e6... \u5bf9\u77401\u53f7\u4f20\u9001\u5668\u4f7f\u7528\u4f20\u9001\u65b9\u4f4d\u6838\u5fc3\u53ef\u4ee5\u8bb0\u5f55\u5750\u6807,\u5c06\u8fd9\u4e2a\u6838\u5fc3\u653e<br/>\u51652\u53f7\u4f20\u9001\u5668\u4e2d,\u7ed92\u53f7\u4f20\u9001\u5668\u4e00\u4e2a\u7ea2\u77f3\u4fe1\u53f7\u5373\u53ef\u5c06\u8303\u56f4\u5185\u7684\u7269\u54c1\u3001\u5b9e\u4f53\u3001\u8fd8\u6709\u65b9\u5757\u4f20\u9001\u52301\u53f7\u4f20\u9001\u5668\u4e0a\u65b9. \u5f53<br/>\u7136\u8fd9\u4f1a\u6d88\u8017LP. \u8ddf\u9ad8\u7ea7\u7684\u6838\u5fc3\u62e5\u6709\u66f4\u5927\u7684\u8303\u56f4.\u8bd1\u8005\u6ce8: \u5728\u670d\u52a1\u5668\u4f7f\u7528\u6b64\u88c5\u7f6e\u4f20\u9001\u542bNBT\u7684\u65b9\u5757\u65f6\u9700\u8981\u7279<br/>\u522b\u6ce8\u610f,\u670d\u52a1\u5668\u6027\u80fd\u4e0d\u591f\u6216\u8005\u7f51\u7edc\u5361\u987f\u53ef\u80fd\u9020\u6210\u6570\u636e\u4e22\u5931. \u6ca1\u9519\u6211\u8bf4\u7684\u5c31\u662fGT\u673a\u5668,\u6211\u4e0d\u4f1a\u544a\u8bc9\u4f60\u6211\u7528\u8fd9\u73a9\u610f<br/>\u5f04\u4e22\u8fc7\u597d\u51e0\u4e2a\u77ff\u673a..."
                },
                {
                    "name": "\u7535\u52a8\u8239",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7535\u52a8\u8239.png",
                    "x": -204.0,
                    "y": 120.0,
                    "tooltip": "\u7535\u52a8\u8239\u7684\u8fd0\u4f5c\u548c\u539f\u7248\u7684\u8239\u76f8\u4f3c,\u4ee5\u76f8\u5f53\u5feb\u7684\u901f\u5ea6\u7a7f\u8fc7\u6c34\u9762.\u5f53\u649e\u51fb\u65f6\u5c06\u4f1a\u6389\u51fa\u4ed6\u7684\u539f\u578b,\u800c\u4e0d\u662f\u901a\u5e38\u7684\u6728\u68d2.\u8fd9\u5f53<br/>\u7136\u975e\u5e38\u597d,\u4f46\u5982\u679c\u6211\u4eec\u5229\u7528\u7535\u529b\u5f15\u64ce\u5462\uff1f\u5728\u80f8\u7532\u4e00\u680f\u7a7f\u4e0a\u7535\u529b\u50a8\u5b58\u88c5\u7f6e,\u4f8b\u5982\u7535\u6c60\u80cc\u5305\u6216\u50a8\u7535\u80cc\u5305.\u7535\u52a8\u8239\u5c06\u4f1a\u5438<br/>\u53d6\u80cc\u5305\u7684\u7535\u529b,\u5e76\u63a8\u52a8\u4f60\u4ee5\u8d85\u97f3\u901f\u524d\u8fdb!\u6bcf\u524d\u8fdb\u4e00\u683c\u7ea6\u6d88\u8017100EU,\u6240\u4ee5\u5c31\u7b97\u5f88\u597d\u7684\u7535\u6c60\u80cc\u5305\u4e5f\u6301\u7eed\u4e0d\u4e86\u591a\u4e45<br/>!"
                },
                {
                    "name": "\u7535\u529b\u4f9b\u7ed9\u5355\u5143",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7535\u529b\u4f9b\u7ed9\u5355\u5143.png",
                    "x": -108.0,
                    "y": 72.0,
                    "tooltip": "\u4e3a\u4e86\u4f7f\u4f60\u7684\u8f68\u9053\u4ea4\u901a\u8fdb\u5165\u7535\u6c14\u5316\u65f6\u4ee3,\u4f60\u9700\u8981\u7ed9\u4f60\u65b0\u94fa\u8bbe\u7684\u7535\u529b\u8f68\u9053\u63d0\u4f9b\u80fd\u6e90. \u4f60\u73b0\u5728\u9700\u8981\u7535\u529b\u4f9b\u7ed9\u5355\u5143\u3001\u7535\u529b<br/>\u5206\u8def\u7ebf\u7f06\u548c\u7ebf\u7f06\u652f\u6491\u67b6. \u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2aMFE\u6216\u8005\u53d8\u538b\u5668\u6765\u83b7\u53d6GT\u8f93\u5165\u7684\u7535\u80fd."
                },
                {
                    "name": "\u7535\u529b\u55b7\u6c14\u80cc\u5305",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7535\u529b\u55b7\u6c14\u80cc\u5305.png",
                    "x": 132.0,
                    "y": 72.0,
                    "tooltip": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u529b\u55b7\u6c14\u80cc\u5305.\u4f60\u9700\u8981\u6309IC2\u7684\u5207\u6362\u6a21\u5f0f\u952e\u53ca\u7a7a\u683c\u952e\u6765\u5207\u6362\u98de\u884c\u6a21\u5f0f.\u5f53\u4f60\u60f3\u4e0b\u964d\u65f6,\u8bb0\u5f97\u5173\u95ed\u60ac\u505c<br/>\u6a21\u5f0f,\u5426\u5219\u4f1a\u8017\u5c3d\u4f60\u7684\u55b7\u6c14\u80cc\u5305.\u55b7\u6c14\u80cc\u5305\u552f\u4e00\u7684\u9650\u5236\u662f\u4e0d\u80fd\u98de\u8d85\u8fc7185\u5c42.\u60f3\u8981\u5728\u65c5\u9014\u4e2d\u4e3a\u55b7\u6c14\u80cc\u5305\u5145\u7535,\u4f60<br/>\u9700\u8981\u5236\u4f5c\u4e00\u4e2aIC2\u80fd\u91cf\u5145\u7535\u7535\u6c60.\u4f60\u9700\u8981\u5c06\u55b7\u6c14\u80cc\u5305\u4ece\u88c5\u5907\u680f\u8131\u4e0b,\u653e\u5165\u5feb\u6377\u680f,\u7136\u540eshift+\u53f3\u952e\u6fc0\u6d3b\u5145<br/>\u7535\u7535\u6c60.\u5145\u7535\u7535\u6c60\u8fd8\u6709\u66f4\u9ad8\u7ea7\u7684\u578b\u53f7,\u4e0d\u8fc7\u6211\u7528\u4e0d\u7740.\u4f60\u8981\u662f\u611f\u5174\u8da3\u5c31\u67e5\u67e5NEI\u5427.\u4ee5\u540e\u8fd8\u53ef\u4ee5\u5236\u4f5c\u91cd\u529b\u80f8\u7532\u7684<br/>\u5145\u7535\u80cc\u5305\u3001GT++\u7684\u5145\u7535\u5de5\u5177\u5305(\u8170\u5e26),\u5b83\u4eec\u53ef\u4ee5\u4e3a\u4f60\u7269\u54c1\u680f\u548c\u88c5\u5907\u680f\u4e2d\u7684\u7269\u54c1\u5145\u7535.\u6700\u540e,\u8fd8\u6709GT++\u7684<br/>\u65e0\u7ebf\u5145\u7535\u5668,\u5b83\u53ef\u4ee5\u4e3a\u4f60\u7269\u54c1\u680f\u548c\u88c5\u5907\u680f\u4e2d\u7684\u7269\u54c1\u5145\u7535,\u4ee5\u4f60\u7684\u57fa\u5730\u4e3a\u4e2d\u5fc3,\u8986\u76d6\u5f88\u5927\u4e00\u7247\u8303\u56f4.\u5f53\u4f60\u5b8c\u6210\u4e86\u4f60\u7684<br/>\u7eb3\u7c73\u5957\u88c5\u540e\u4f1a\u6709\u4e00\u4e2a\u76f8\u5173\u4efb\u52a1\u89e3\u9501.\u552f\u4e00\u8981\u8bb0\u4f4f\u7684\u5c31\u662f,\u5f53\u4f60\u53bb\u4e86\u5176\u4ed6\u7ef4\u5ea6,\u4f60\u7684\u55b7\u6c14\u80cc\u5305\u5c06\u4e0d\u4f1a\u88ab\u5b9e\u65f6\u5145\u7535!"
                },
                {
                    "name": "\u7535\u529b\u673a\u8f66",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7535\u529b\u673a\u8f66.png",
                    "x": -156.0,
                    "y": -24.0,
                    "tooltip": "\u7535\u529b\u673a\u8f66\u6bd4\u84b8\u6c7d\u673a\u8f66\u8fd8\u8981\u5148\u8fdb\u4e0d\u5c11. \u60f3\u8981\u4f7f\u7528\u7535\u529b\u673a\u8f66,\u4f60\u9996\u5148\u9700\u8981\u94fa\u8bbe\u7535\u52a8\u8f68\u9053."
                },
                {
                    "name": "\u55b7\u6c14\u80cc\u5305",
                    "symbolSize": 31.200000000000003,
                    "x": 132.0,
                    "y": -24.0,
                    "tooltip": "\u6ed1\u7fd4\u7ffc\u8ba9\u4f60\u53ef\u4ee5\u5b89\u5168\u964d\u843d,\u4f46\u6ca1\u529e\u6cd5\u8ba9\u4f60\u5f80\u4e0a\u98de.\u7814\u7a76\u84dd\u77f3\u540e,\u4f60\u53d1\u73b0\u4ed6\u7684\u80fd\u91cf\u8db3\u591f\u8ba9\u4f60\u505a\u51fa\u7b2c\u4e00\u4e2a\u55b7\u6c14\u80cc\u5305.\u4e00<br/>\u4e2a\u94bb\u77f3\u80f8\u7532\u52a0\u4e0a\u56db\u4e2a\u7a7a\u7535\u6c60,\u5c31\u8db3\u591f\u8ba9\u4f60\u98de\u4e0a\u5929.\u4f46\u5b83\u5e76\u6ca1\u6709\u60ac\u505c\u6a21\u5f0f,\u6240\u4ee5\u6700\u597d\u5e26\u7740\u4f60\u7684\u6ed1\u7fd4\u7ffc.\u63d0\u793a:\u8fd9\u4e2a\u55b7<br/>\u6c14\u80cc\u5305\u65e0\u6cd5\u98de\u5230\u8d85\u8fc7Y-128\u7684\u9ad8\u5ea6."
                },
                {
                    "name": "Enhanced Charm of Dislocation",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9ad8\u7ea7\u9519\u4f4d\u5b9d\u77f3.png",
                    "x": 372.0,
                    "y": 360.0,
                    "tooltip": "Very powerful."
                },
                {
                    "name": "\u811a\u8e7c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u811a\u8e7c.png",
                    "x": 180.0,
                    "y": -72.0,
                    "tooltip": "\u53ef\u80fd\u4f60\u8fd0\u6c14\u4e0d\u9519,\u5728\u5b9d\u7bb1\u6216\u5730\u7262\u91cc\u627e\u5230\u4e86\u811a\u8e7c.\u811a\u8e7c\u53ef\u4ee5\u8ba9\u73a9\u5bb6\u7684\u6e38\u6cf3\u901f\u5ea6\u4e0e\u884c\u8d70\u901f\u5ea6\u4e00\u81f4.\u552f\u4e00\u7684\u95ee\u9898\u662f\u5b83\u4e0d\u63d0<br/>\u4f9b\u62a4\u7532\u503c.\u5982\u679c\u4f60\u6b63\u5728\u5efa\u9020\u6c34\u9762\u5efa\u7b51,\u6216\u5728\u6c34\u4e0b\u6316\u6398\u7c98\u571f\u6216\u6c99\u783e,\u4f60\u5c31\u4f1a\u53d1\u73b0\u8fd9\u73a9\u610f\u771f\u597d\u7528."
                },
                {
                    "name": "\u6d41\u4f53\u88c5\u8f7d\u673a\u548c\u5378\u8f7d\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6d41\u4f53\u88c5\u8f7d\u673a.png",
                    "x": 36.0,
                    "y": 24.0,
                    "tooltip": "\u5982\u679c\u4f60\u60f3\u628a\u77f3\u6cb9\u4ece\u5f88\u8fdc\u7684\u6cb9\u7530\u8fd0\u8f93\u56de\u6765,\u5e76\u4e14\u5b9e\u73b0\u81ea\u52a8\u5316.\u90a3\u4e48\u4f60\u9700\u8981\u4e00\u5957\u6d41\u4f53\u88c5\u8f7d/\u5378\u8f7d\u673a.\u5728\u77f3\u6cb9\u88c5\u8f7d\u6216\u5378\u8f7d<br/>\u8fc7\u7a0b\u4e2d,\u5c01\u9501\u8f68\u9053\u4f1a\u8ba9\u5217\u8f66\u957f\u65f6\u95f4\u505c\u7559.PS\uff1a \u4e5f\u53ef\u4ee5\u4f7f\u7528\u957f\u8ddd\u79bb\u6d41\u4f53\u7ba1\u9053."
                },
                {
                    "name": "\u50cf\u9e70...\u6211\u662f\u8bf4\u4e4c\u9e26\u4e00\u6837\u98de",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4e4c\u9e26\u6597\u7bf7.png",
                    "x": 228.0,
                    "y": -24.0,
                    "tooltip": "\u8fd9\u4e2a\u6597\u7bf7\u662f\u6ed1\u7fd4\u7ffc\u4e0d\u9519\u7684\u66ff\u4ee3\u54c1.\u5728\u5deb\u5e08\u5b9d\u5177\u7ae0\u8282\u4e2d\u8fd8\u6709\u8bb8\u591a\u6709\u8da3\u7684\u7269\u54c1\u503c\u5f97\u4e00\u770b.\u5982\u679c\u4f60\u60f3\u4e3a\"gliding<br/>(\u6ed1\u7fd4)\"\u7ed1\u5b9a\u5feb\u6377\u952e - \u5728\u63a7\u5236\u4e2d\u914d\u7f6e\"\u6fc0\u6d3b\u80fd\u529b1\"(Active-Ability-1),\u7136\u540e\u624b\u6301\u7269<br/>\u54c1,\u518d\u5728\u804a\u5929\u680f\u8f93\u5165\"/travellersgear bind 1\"."
                },
                {
                    "name": "\u50cf...\u739b\u4e3d\u00b7\u6ce2\u5e73\u65af\u4e00\u6837\u98de?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u6cd5\u7f30\u7ef3.png",
                    "x": 228.0,
                    "y": 24.0,
                    "tooltip": "\u5965\u6cd5\u7f30\u7ef3\u4f7f\u4f60\u80fd\u591f\u98de\u7fd4,\u6d88\u8017\u6e90\u8d28\u7f50\u5b50\u4e2d\u7684\u80fd\u91cf(Potentia)\u6e90\u8d28.\u53ef\u60dc\u901f\u5ea6\u4e0d\u5feb,\u6216\u8bb8\u66f4\u6df1\u5165\u7684\u7814\u7a76\u80fd<br/>\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5427.\u8bd1\u8005\u6ce8:\u739b\u4e3d\u00b7\u6ce2\u5e73\u65af(Mary Poppins),\u662f\u82f1\u56fd\u4f5c\u5bb6P\u00b7L\u00b7\u7279\u62c9\u5f17\u65af\u7684\u513f\u7ae5\u6587<br/>\u5b66\u7cfb\u5217\u300a\u739b\u4e3d\u00b7\u6ce2\u5e73\u65af\u300b\u7684\u4e3b\u89d2,\u5176\u5f62\u8c61\u662f\u4e00\u4f4d\u4ed9\u5973\u4fdd\u59c6."
                },
                {
                    "name": "\u65e0\u5fe7\u65e0\u8651\u5730\u98de\u7fd4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5965\u6cd5\u8170\u5e26.png",
                    "x": 228.0,
                    "y": 72.0,
                    "tooltip": "\u554a\u54c8,\u8fd9\u4e2a\u66f4\u68d2!  \u6709\u4e86\u8fd9\u6839\u8170\u5e26,\u4f60\u53ef\u4ee5\u50cf\u4e2a\u771f\u6b63\u7684\u5deb\u5e08\u4e00\u6837\u98de\u6765\u98de\u53bb\u4e86.\u53ef\u60dc\u8fd9\u9700\u8981\u6d88\u8017\u989d\u5916\u7684\u80fd\u91cf(Po<br/>tentia)\u6e90\u8d28,\u6240\u4ee5\u7ee7\u7eed\u4f60\u7684\u7814\u7a76\u5427."
                },
                {
                    "name": "\u71c3\u6c14\u55b7\u6c14\u80cc\u5305",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u55b7\u6c14\u80cc\u5305.png",
                    "x": 84.0,
                    "y": 72.0,
                    "tooltip": "\u8fd9\u4e2a\u55b7\u6c14\u80cc\u5305\u4f7f\u7528IC2\u7684\u6cbc\u6c14,\u6700\u9ad8\u53ef\u98de\u5230245\u5c42. \u4f60\u9700\u8981\u4f7f\u7528IC2\u7684\u5207\u6362\u6a21\u5f0f\u952e+\u7a7a\u683c\u952e\u6765\u5207\u6362\u98de\u884c\u6a21<br/>\u5f0f.\u4f60\u7684\u55b7\u6c14\u80cc\u5305\u53ef\u4ee5\u5728IC2\u88c5\u7f50\u673a\u4e2d\u88c5\u586b\u71c3\u6599,\u5171\u970030\u6876\u6cbc\u6c14."
                },
                {
                    "name": "\u6ed1\u7fd4\u7ffc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6ed1\u7fd4\u7ffc.png",
                    "x": 132.0,
                    "y": -72.0,
                    "tooltip": "\u5982\u679c\u4f60\u60f3\u8df3\u4e0b\u60ac\u5d16,\u800c\u4e0d\u51fa\u73b0\u67d0\u67d0\u73a9\u5bb6\u4ece\u9ad8\u5904\u8dcc\u843d\u7684\u8baf\u606f,\u627e\u4e2a\u529e\u6cd5\u964d\u4f4e\u4f60\u7684\u6389\u843d\u901f\u5ea6\u5e94\u8be5\u662f\u4e2a\u597d\u4e3b\u610f. \u5546\u5e97\u91cc<br/>\u7684\u7fbd\u843d\u836f\u6c34\u5356\u5149\u4e86,\u505a\u4e2a\u6ed1\u7fd4\u7ffc\u5427."
                },
                {
                    "name": "\u91cd\u529b\u80f8\u7532",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91cd\u529b\u80f8\u7532.png",
                    "x": 132.0,
                    "y": 264.0,
                    "tooltip": "\u91cd\u529b\u80f8\u7532\u7531\u91cf\u5b50\u62a4\u7532\u3001LuV\u53d8\u538b\u5668\u3001\u7ec8\u6781\u84dd\u535a\u987f\u7535\u6c60\u80cc\u5305\u3001\u8d85\u5bfc\u7ebf\u7f06\u3001\u51b7\u5374\u6838\u5fc3\u3001\u91cd\u529b\u5f15\u64ce\u3001\u7ec8\u6781\u6676\u4f53\u7535\u8111\u3001\u81f4<br/>\u5bc6\u94ff\u94c0\u677f\u3001\u84dd\u535a\u987f\u80fd\u91cf\u7403\u7c07\u3001\u529b\u573a\u53d1\u751f\u5668(IV)\u3001\u7535\u52a8\u9a6c\u8fbe(ZPM)\u3001\u94ff\u94c0\u87ba\u4e1d\u3001\u7194\u878d\u710a\u9521\u3001\u7194\u878d\u4e09\u949b\u7ec4\u5408\u800c<br/>\u6210.\u7a7f\u7740\u5168\u5957\u7684\u91cf\u5b50\u88c5\u5907\u6709\u9690\u85cf\u7684\u6548\u679c,\u9700\u8981\u4f60\u81ea\u5df1\u53bb\u53d1\u6398.\u6216\u8005\u627e\u627eWiki\u4e0a\u600e\u4e48\u8bf4(\u5176\u4ed6\u9760\u8c31\u7684\u6559\u7a0b\u4e5f\u884c)<br/>."
                },
                {
                    "name": "Indestructible Vessel",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5b8f\u4f1f\u4e4b\u6728\u8239.png",
                    "x": -252.0,
                    "y": -24.0,
                    "tooltip": "In light of your thaumaturgical research, you have<br/> come to the conclusion that Greatwood is, in fact<br/>, a great material for constructing a resilient bo<br/>at. Utilizing this material to its fullest potenti<br/>al has allowed you to construct a boat that is sli<br/>ghtly faster and will never break on collision."
                },
                {
                    "name": "\u5145\u6c14\u5e8a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5145\u6c14\u8247.png",
                    "x": -156.0,
                    "y": 72.0,
                    "tooltip": "\u54e6\u4e0d,\u6211\u662f\u6307\u8239...\u5145\u6c14\u8239\u662f\u7b2c\u4e00\u8258\u4e0d\u4f1a\u649e\u574f\u7684\u8239."
                },
                {
                    "name": "\u55b7\u6c14\u80cc\u5305v.0.1 \u5185\u90e8\u6d4b\u8bd5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5f39\u8df3\u677f.png",
                    "x": 84.0,
                    "y": -72.0,
                    "tooltip": "\u4f60\u559c\u6b22\u98de\u884c\u5417\uff1f\u597d,\u90a3\u505a\u4e2a\u6ed1\u6e9c\u6e9c\u7684\u5f39\u8df3\u677f,\u4eab\u53d7\u90a3\u7f8e\u597d\u7684\u89c6\u91ce!"
                },
                {
                    "name": "\u53d1\u5c04\u63a7\u5236\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u53d1\u5c04\u63a7\u5236\u5668.png",
                    "x": 372.0,
                    "y": 120.0,
                    "tooltip": "\u53d1\u5c04\u63a7\u5236\u5668\u5728GTNH\u4e2d\u88ab\u4fee\u6539\uff0c\u63d0\u4f9b\u989d\u5916\u7684\u529f\u80fd.\u5728\u53d1\u5c04\u63a7\u5236\u5668\u8fde\u63a5\u7684\u706b\u7bad\u53d1\u5c04\u5e73\u53f0\u4e0a\u53d1\u5c04\u706b\u7bad,\u5982\u679c\u8bbe\u7f6e\u5408\u9002<br/>\u7684\u8bdd,\u5012\u6570\u65f6\u95f4\u53ef\u4ee5\u5f88\u77ed,\u800c\u4e14\u4f60\u4f1a\u76f4\u63a5\u88ab\u4f20\u9001\u5230\u63a5\u6536\u5e73\u53f0.\u867d\u7136\u8fd9\u4f1a\u6d88\u8017\u6700\u5927\u71c3\u6599\u5b58\u50a8\u7684\u4e00\u534a\u71c3\u6599. \u8fd9\u4e00\u64cd\u4f5c<br/>\u5728\u9ad8\u5ef6\u8fdf\u670d\u52a1\u5668\u4e2d\u5341\u5206\u6709\u7528,\u53ef\u4ee5\u4f5c\u4e3a\u6ca1\u6709\u9b54\u6cd5\u624b\u6bb5\u65f6\u5019\u7684\u4f20\u9001\u624b\u6bb5.\u4f60\u9700\u8981\u653e\u7f6e\u4e00\u4e2a\u5e26\u6709\u53d1\u5c04\u63a7\u5236\u5668\u7684\u706b\u7bad\u53d1\u5c04<br/>\u53f0,\u53ef\u80fd\u8fd8\u6709\u4e00\u4e2a\u71c3\u6599\u6ce8\u5165\u5668\u5728\u53e6\u4e00\u8fb9.\u5982\u679c\u4f60\u4e0d\u4e3a\u81ea\u5df1\u4f7f\u7528\u706b\u7bad,\u4f60\u53ef\u4ee5\u8bd5\u8bd5\u4f7f\u7528\u8d27\u8fd0\u706b\u7bad.\u8981\u4f7f\u7528\u6ee1\u8f7d\u8d27\u8fd0\u706b<br/>\u7bad,\u9700\u8981\u88c5\u5907\u4e00\u4e2a\u706b\u7bad\u53d1\u5c04\u53f0,\u7528\u4e8e\u53d1\u9001\u7269\u54c1,\u5305\u62ec:\u71c3\u6599\u6ce8\u5165\u5668\u53d1\u5c04\u63a7\u5236\u5668\u8d27\u7269\u88c5\u8f7d\u5668\u4ee5\u53ca\u63a5\u6536\u65b9:\u71c3\u6599\u6ce8\u5165\u5668<br/>\u53d1\u5c04\u63a7\u5236\u5668\u8d27\u7269\u5378\u8f7d\u5668\u4e5f\u53ef\u4ee5\u4f7f\u7528BC\u7ba1\u9053(\u4e0d\u5b58\u5728\u7684)\u5c06\u7269\u54c1\u8f6c\u79fb\u5230\u706b\u7bad\u4e2d. \u4e0b\u4e00\u6b65\u662f\u5728\u4e24\u4e2a\u53d1\u5c04\u63a7\u5236\u5668\u4e2d\u8bbe<br/>\u7f6e\u9891\u7387(\u5373\u8bbe\u7f6e:A\u5230\u76ee\u6807B,B\u5230\u76ee\u6807A). \u67e5\u770b\u53d1\u5c04\u63a7\u5236\u5668\u4ee5\u8bbe\u7f6e\u81ea\u52a8\u53d1\u5c04. \u7b2c\u4e00\u6b21\u5fc5\u987b\u53f3\u952e\u5355\u51fb\u8d27\u8fd0\u706b<br/>\u7bad\u5e76\u6309\u53f3\u4e0a\u89d2\u7684\u53d1\u5c04."
                },
                {
                    "name": "Let's Go Lava Surfing!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u795e\u79d8\u8239.png",
                    "x": -252.0,
                    "y": 24.0,
                    "tooltip": "The Thaumium Boat is an upgraded version of your G<br/>reatwood Boat. The experience you have gained from<br/> manufacturing boats made of magical materials all<br/>ows you to create a boat that can go even faster. <br/>Additionally, the Thaumium coating allows it to sa<br/>il not only in rivers but also lava streams! Take <br/>it with you on your vacation in the Nether and enj<br/>oy."
                },
                {
                    "name": "\u706b\u8f66\u59340.1\u6d4b\u8bd5\u7248",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7194\u7089\u8f66.png",
                    "x": -108.0,
                    "y": -72.0,
                    "tooltip": "\u7194\u7089\u8f66\u662f\u4ef7\u683c\u4f4e\u5ec9\u7684\u706b\u8f66\u5934. \u62ff\u7740\u7164\u70ad\u6216\u8005\u6728\u70ad\u70b9\u51fb\u7194\u7089\u8f66\u5b83\u5c31\u4f1a\u5f00\u59cb\u79fb\u52a8."
                },
                {
                    "name": "\u957f\u8ddd\u79bb\u80fd\u91cf\u8f93\u9001",
                    "symbolSize": 31.200000000000003,
                    "x": 276.0,
                    "y": 72.0,
                    "tooltip": "\u6ca1\u6709\u6cd5\u5e08\u60f3\u88ab\u9650\u5236\u5728\u77ed\u65f6\u95f4\u98de\u884c\u5185.\u6709\u4e86\u8fd9\u4e2a\u81ea\u52a8\u5316\u9b54\u6cd5(Automagy)\u7684\u5965\u6cd5\u5c16\u5854,\u4f60\u5c31\u53ef\u4ee5\u5c06\u9b54\u6cd5\u80fd\u91cf<br/>\u76f4\u63a5\u4f20\u8f93\u5230\u4f60\u7684\u5965\u6cd5\u7f30\u7ef3\u4e2d.  \u60f3\u8981\u83b7\u5f97\u6b63\u786e\u7684\u795e\u79d8\u5757,\u4f60\u9700\u8981\u628a9\u4e2a\u795e\u79d8\u952d\u538b\u7f29\u6210GT\u795e\u79d8\u952d\u5757,\u7136\u540e\u7528\u51ff\u5b50<br/>\u5904\u7406\u8fd9\u4e2a\u65b9\u5757,\u4f7f\u5176\u53d8\u6210\u6b63\u786e\u7684\u6837\u5f0f.\u8fd9\u4e2a\u591a\u65b9\u5757\u7ed3\u6784\u9700\u89810.01\u7ea7\u7684vis\u624d\u80fd\u8fd0\u884c.\u4f60\u53ef\u4ee5\u4f7f\u75282-6\u4e2a\u5965<br/>\u6cd5\u80fd\u91cf\u67f1,\u989d\u5916\u7684\u80fd\u91cf\u67f1\u7528\u4e8e\u6269\u5c55\u8303\u56f4.\u7ed9\u8fd9\u4e2a\u7ed3\u6784\u63d0\u4f9b0.01\u7ea7\u7684\u98ce(Aer)vis\u4f7f\u5176\u8fd0\u884c,\u5b83\u4f1a\u63a5\u6536\u80fd<br/>\u91cf(Potentia)\u6e90\u8d28\u4f20\u8f93\u7ed9\u98de\u884c\u8005.\u8fd9\u4e2a\u7ed3\u6784\u8fd8\u63a5\u6536\u98ce(Aer)\u548c\u98de\u884c(Volatus)\u6e90\u8d28,\u5206\u522b<br/>\u63d0\u5347\u4f20\u8f93\u8303\u56f4\u548c\u4f20\u8f93\u901f\u7387.\u53f3\u952e\u63a7\u5236\u5668\u7684\u67d0\u4e00\u9762\u6765\u63a7\u5236\u8be5\u9762\u63a5\u6536\u4f55\u79cd\u6e90\u8d28."
                },
                {
                    "name": "\u77ff\u8f66",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u77ff\u8f66.png",
                    "x": -12.0,
                    "y": -72.0,
                    "tooltip": "\u5f53\u4f60\u505a\u597d\u7b2c\u4e00\u53f0\u8f66,\u65c5\u7a0b\u5c31\u53ef\u4ee5\u5f00\u59cb\u4e86.\u597d\u5427,\u8fd8\u4e0d\u884c,\u4f60\u8fd8\u9700\u8981\u5148\u51c6\u5907\u4e00\u4e9b\u8f68\u9053.\u8fd9\u91cc\u662f\u4efb\u52a1\u4e66\u6709\u9650\u516c\u53f8. \u6211<br/>\u4eec\u4e0d\u4fdd\u8bc1\u77ff\u8f66\u6216\u706b\u8f66\u7684\u5b9e\u7528\u6027. \u800c\u4e14\u5f53\u4f60\u6709\u4e86\u9524\u5b50\u548c\u80cc\u5305\u540e,\u4e00\u6b21\u6027\u638f\u7a7a\u4e00\u4e2a\u77ff\u8109\u4e0d\u8d39\u5439\u7070\u4e4b\u529b.\u8b66\u544a: \u4e0d\u53d7<br/>\u4fdd\u62a4\u7684\u77ff\u8f66\u53ef\u80fd\u56e0\u96f7\u51fb\u800c\u8131\u8f68.\u7528\u73bb\u7483\u906e\u76d6\u8be5\u533a\u57df,\u4ee5\u9632\u77ff\u8f66\u6d88\u5931.\u53e6\u5916,\u8bf7\u786e\u4fdd\u5c06\u77ff\u8f66\u653e\u5728\u4e00\u4e2a\u533a\u5757\u4e2d,\u6216\u4f7f\u7528<br/>\u8986\u76d6\u6574\u4e2a\u77ff\u8f66\u5de5\u4f5c\u533a\u57df\u7684\u533a\u5757\u52a0\u8f7d\u5668.\u52a0\u8f7d/\u5378\u8f7d\u533a\u5757\u53ef\u80fd\u4f1a\u5bfc\u81f4\u77ff\u8f66\u6d88\u5931\u6216\u590d\u5236."
                },
                {
                    "name": "\u8ba9\u77ff\u8f66\u53ef\u4ee5\u84c4\u6c34\u3001\u50a8\u7269\u548c\u5236\u9020\u7269\u54c1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u84c4\u6c34\u69fd\u8f66.png",
                    "x": -60.0,
                    "y": -72.0,
                    "tooltip": "\u60f3\u8fd0\u8f93\u77f3\u6cb9\u6216\u8005\u5176\u4ed6\u7684\u6d41\u4f53\uff1f\u60f3\u5728\u77ff\u8f66\u4e0a\u5b89\u88c5\u5de5\u4f5c\u53f0\u6216\u8005\u50a8\u7269\u7bb1\uff1f \u90a3\u4e48\u6211\u4eec\u6765\u5236\u9020\u8fd9\u4e9b\u5404\u79cd\u529f\u80fd\u7684\u77ff\u8f66\u5427!"
                },
                {
                    "name": "Planar Gateways",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5f02\u754c\u4f20\u5bfc\u7269\u8d28.png",
                    "x": 468.0,
                    "y": 120.0,
                    "tooltip": "A planar gateway from Thaumic Horizons lets you tr<br/>avel to a pocket dimension. Setting up multiple ga<br/>teways (up to 4) to the pocket dimension even allo<br/>ws for travel to other dimensions!"
                },
                {
                    "name": "\u88c5\u586b\u55b7\u6c14\u80cc\u5305",
                    "symbolSize": 31.200000000000003,
                    "x": 132.0,
                    "y": 24.0,
                    "tooltip": "\u597d\u6781\u4e86...\u4f60\u73b0\u5728\u6709\u4e00\u4e2a\u7a7a\u7684\u55b7\u6c14\u80cc\u5305. \u4f60\u9700\u898125\u4e2a\u84dd\u77f3\u7c89\u6765\u5b8c\u5168\u88c5\u6ee1\u5b83. \u5236\u4f5c\u84dd\u77f3\u53d1\u7535\u673a\u8ddf\u5145\u7535\u53f0\u4ee5\u4fbf<br/>\u4f7f\u7528\u84dd\u77f3\u7684\u80fd\u91cf.\u4f60\u9a6c\u4e0a\u5c31\u4f1a\u53d1\u73b0,\u867d\u7136\u5145\u7535\u53c8\u5feb\u53c8\u4fbf\u5b9c,\u4f46\u662f\u4e5f\u4f1a\u5728\u7728\u773c\u95f4\u5c31\u7528\u5c3d\u4e86.\u5c3d\u7ba1\u5982\u6b64,\u914d\u5408\u6ed1\u7fd4\u7ffc\u53ef<br/>\u4ee5\u8ba9\u4f60\u98de\u4e0a\u7a7a\u4e2d,\u9003\u79bb\u4e00\u4e9b\u56f0\u5883."
                },
                {
                    "name": "Relocator",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5b9a\u4f4d\u5668.png",
                    "x": 372.0,
                    "y": 264.0,
                    "tooltip": "The relocator allows for teleportation to previous<br/>ly marked locations, even between dimensions.\n\n[no<br/>te]Uses quite a lot of power so a GraviChestPlate <br/>or other energy sources are recommended.[/note]"
                },
                {
                    "name": "\u5212,\u5212,\u5212\u5c0f\u8239(Row, Row, Row Your Boat)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8239.png",
                    "x": -204.0,
                    "y": -72.0,
                    "tooltip": "\u4f60\u4f4f\u5728\u6c34\u8fb9\u5374\u6ca1\u6709\u8239\uff1f\u5144\u5f1f,\u632f\u4f5c\u8d77\u6765.\u4f60\u9700\u8981\u6728\u677f\u3001\u53f0\u9636\u8ddf\u5200\u6765\u5236\u4f5c\u4e00\u8258. (\u8fd9\u4e2a\u4efb\u52a1\u7f16\u53f7666,\u5c0f\u5fc3\u70b9,<br/>\u6709\u4ec0\u4e48\u4e8b\u8981\u53d1\u751f\u4e86.)\u8bd1\u8005\u6ce8:\u5728\u897f\u65b9666\u8c61\u5f81\u7740\u9b54\u9b3c. \u4e0d\u8fc7\u8fd9\u91cc\u53ef\u662f\u4efb\u52a1\u4e66,\u5fd8\u4e86\u90a3\u4e9b\u6709\u7684\u6ca1\u7684\u8c61\u5f81\u610f\u4e49\u5427<br/>. \u6807\u51c6\u7684\u4e16\u754c\u751f\u6210\u4e0d\u5305\u542b\u6d77\u6d0b\u5730\u5f62,\u6240\u4ee5\u8239\u7684\u5b9e\u7528\u6027\u53d7\u5230\u4e86\u6781\u5927\u7684\u9650\u5236. \u867d\u7136\u6709\u8bb8\u591a\u6cb3\u6d41,\u4f46\u9a6c\u53ef\u80fd\u66f4\u5b9e\u7528-<br/>-\u5982\u679c\u4e0d\u5728\u670d\u52a1\u5668\u91cc\u7684\u8bdd."
                },
                {
                    "name": "\u6a61\u76ae\u8247",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6a61\u76ae\u8247.png",
                    "x": -204.0,
                    "y": -24.0,
                    "tooltip": "\u6a61\u76ae\u8247\u53ea\u9700\u8981\u4e00\u4e9b\u6a61\u80f6\u7247.\u548c\u539f\u7248\u7684\u6728\u8239\u4e00\u6837,\u649e\u5230\u65b9\u5757\u4e0a\u4f1a\u635f\u574f\u5e76\u6563\u5f00.\u4f46\u5e76\u4e0d\u4f1a\u8fd4\u8fd8\u6728\u68cd\u8ddf\u6728\u677f,\u800c\u662f\u8fd4\u8fd8\u635f<br/>\u574f\u7684\u6a61\u76ae\u8247.\u53ef\u4ee5\u7528\u4e24\u4e2a\u6a61\u80f6\u7247\u6765\u4fee\u590d\u8fd9\u53ea\u6a61\u76ae\u8247!"
                },
                {
                    "name": "\u79d8\u5bc6-\u5929\u4f7f-\u523a\u5ba2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7eb3\u7c73\u7fbd\u7ffc.png",
                    "x": 36.0,
                    "y": 216.0,
                    "tooltip": "\u7528\u7eb3\u7c73\u6280\u672f\u6ce8\u5165\u4f60\u7684\u7fc5\u8180\u4f3c\u4e4e\u662f\u4e0b\u4e00\u6b65,\u8fdb\u4e00\u6b65\u6539\u8fdb\u5e76\u7ed3\u5408\u9b54\u6cd5\u4e0e\u79d1\u6280\u7684\u529b\u91cf."
                },
                {
                    "name": "\u6bd4\u68af\u5b50\u597d\u591a\u4e86",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7535\u68af.png",
                    "x": 372.0,
                    "y": 24.0,
                    "tooltip": "\u7535\u68af\u975e\u5e38\u9002\u5408\u5728\u4f60\u7684\u57fa\u5730\u7528\u4e8e\u5feb\u901f\u5782\u76f4\u8fd0\u8f93.\u79bb\u5f00\u6709\u8272\u7535\u68af\u5c06\u505c\u5728\u540c\u4e00\u989c\u8272\u7684\u7535\u68af\u4e0a.\u7528\u4e00\u4e9b\u66f4\u591a\u95e8(Malis<br/>is-doors)mod\u7684\u95e8\u6765\u505a\u51fa\"\u771f\u6b63\"\u7535\u68af\u7684\u6548\u679c. \u65cb\u8f6c\u7535\u68af\u4f1a\u6839\u636e\u73a9\u5bb6\u9762\u671d\u7684\u65b9\u5411\u5c06\u73a9\u5bb6\u5411\u4e0b\u6216\u5411\u4e0a<br/>\u4f20\u9001.\u5f88\u9002\u5408\u4e8e\u4f60\u7684\u7535\u68af\u4e95\u4f4d\u4e8e\u67d0\u4e00\u5c42\u7684\u4e00\u4fa7,\u800c\u53e6\u4e00\u4fa7\u662f\u53e6\u5916\u4e00\u5c42."
                },
                {
                    "name": "Speed up with the Sash",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65c5\u5c45\u8005\u8170\u5e26.png",
                    "x": 228.0,
                    "y": -72.0,
                    "tooltip": "The Sashes from Botania improves your speed passiv<br/>ely along with a jump boost and provide Step assis<br/>t all while fitting in your belt slot, how conveni<br/>ent is that?\n\nYou will need a method of powering t<br/>hem with either the mana tablet or the mana mirror<br/> linked to a pool.\n\nThe Soujorner Sash provides th<br/>e basic speed boost, jump boost and step assist wh<br/>ile the Globetrotter provides double the jump heig<br/>ht and speed boost.\n\nThe Planestrider is special s<br/>ince it provides a slowly increasing speed boost a<br/>s long as you are moving. You can even reach up to<br/> 11 times the Soujorner Sash speed boost!\n\n[note]Y<br/>ou only need to make one Sash to complete the ques<br/>t.[/note]"
                },
                {
                    "name": "\u84b8\u6c7d\u673a\u8f66",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u84b8\u6c7d\u673a\u8f66.png",
                    "x": -156.0,
                    "y": -72.0,
                    "tooltip": "\u84b8\u6c7d\u673a\u8f66\u6bd4\u7194\u7089\u8f66\u597d\u5f97\u591a.\u4f60\u53ef\u4ee5\u63a7\u5236\u673a\u8f66\u7684\u901f\u5ea6\u548c\u65b9\u5411.\u4f60\u9700\u8981\u5411\u84b8\u6c7d\u673a\u8f66\u5185\u6dfb\u52a0\u6c34\u548c\u7164\u70ad\u6765\u7ed9\u673a\u8f66\u63d0\u4f9b\u52a8\u529b."
                },
                {
                    "name": "\u722c\u5761\u52a9\u624b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6d3b\u585e\u9774\u5b50.png",
                    "x": 180.0,
                    "y": -24.0,
                    "tooltip": "\u6d3b\u585e\u9774\u5b50\u662f\u4e3a\u63a2\u9669\u8005\u51c6\u5907\u7684\u4e00\u53cc\u5f39\u529b\u978b.\u5b83\u80fd\u63d0\u5347\u4e00\u70b9\u8db3\u90e8\u62a4\u7532\u5e76\u80fd\u8d4b\u4e88\u6709\u8da3\u7684\u8df3\u8dc3\u63d0\u5347! \u5b83\u4eec\u80fd\u4f7f\u7a7f\u6234\u8005\u8df3\u8d77<br/>\u4e09\u683c\u9ad8\u5e76\u63d0\u5347\u8dd1\u6b65\u901f\u5ea6. \u5b83\u4eec\u8fd8\u80fd\u4f7f\u7a7f\u6234\u8005\u5728\u75be\u8dd1\u65f6\u81ea\u52a8\u722c\u4e0a\u4e00\u683c\u9ad8\u7684\u969c\u788d\u7269. \u53ef\u4ee5\u5728\u94c1\u7827\u4e0a\u4f7f\u7528\u76ae\u9769\u7ef4\u4fee.<br/>\u603b\u4e4b,\u5c3d\u5feb\u5408\u6210\u5b83\u5427."
                },
                {
                    "name": "\u624b\u52a8\u8f6c\u8f99\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8f6c\u8f99\u62c9\u6746.png",
                    "x": -60.0,
                    "y": -24.0,
                    "tooltip": "\u624b\u52a8\u8f6c\u8f99\u673a\u662f\u624b\u52a8\u7248\u672c\u7684\u7535\u52a8\u8f6c\u8f99\u673a,\u9700\u8981\u73a9\u5bb6\u6765\u64cd\u4f5c\u800c\u975e\u4f7f\u7528\u7ea2\u77f3\u4fe1\u53f7.\u7528\u4e8e\u591a\u79cd\u4fe1\u53f7\u7cfb\u7edf,\u4e3b\u8981\u662f\u7528\u6765\u5207\u6362\u8f6c<br/>\u8f99\u8f68\u53caY\u578b\u8f68\u7684\u8fd0\u4f5c\u65b9\u5f0f."
                },
                {
                    "name": "Teleporter",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4f20\u9001\u673a.png",
                    "x": 372.0,
                    "y": 168.0,
                    "tooltip": "The IndustrialCraft2 Teleporter allows for telepor<br/>tation between 2 connected teleporters.\nIt require<br/>s energy storing block right next to it due to the<br/> massive power demand.\n\n[note]The energy required <br/>is determined by the distance between the teleport<br/>ers and amount of items in the inventory.[/note]\n\n<br/>[note]The teleporter is quite buggy according to t<br/>he official wiki.[/note]"
                },
                {
                    "name": "\u672b\u5f71\u4eba\u7684\u529b\u91cf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65c5\u884c\u951a.png",
                    "x": 372.0,
                    "y": 72.0,
                    "tooltip": "\u7535\u68af\u5f88\u68d2,\u4f46\u5b83\u4eec\u4ec5\u9650\u4e8e\u5782\u76f4\u4f20\u9001,\u4f5c\u7528\u8303\u56f4\u4e5f\u5f88\u6709\u9650. \u65c5\u884c\u951a\u6ca1\u6709\u89d2\u5ea6\u4e0a\u7684\u9650\u5236.\u4f60\u53ef\u4ee5\u4ece\u4e00\u4e2a\u951a\u4f20\u9001\u523012<br/>8\u683c\u5185\u7684\u4efb\u4f55\u5176\u4ed6\u951a. \u53ea\u9700\u7ad9\u5728\u4e00\u4e2a\u951a\u4e0a,\u770b\u5411\u4f60\u5e0c\u671b\u4f20\u9001\u5230\u7684\u951a,\u518d\u6309\u4e0bShift,\u5373\u53ef\u5b8c\u6210\u4f20\u9001. \u4f60\u53ef<br/>\u4ee5\u547d\u540d\u5b83\u4eec,\u751a\u81f3\u628a\u5b83\u4eec\u8bbe\u4e3a\u79c1\u4eba\u7684.\u5b83\u4eec\u67092\u79d2\u7684\u4f20\u9001\u51b7\u5374\u65f6\u95f4."
                },
                {
                    "name": "\u6a2a\u8d2f\u94c1\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8f68\u9053.png",
                    "x": -12.0,
                    "y": 24.0,
                    "tooltip": "\u5df2\u53d1\u73b0\u7684\u4e0d\u540c\u77ff\u8109\u770b\u6765\u4f3c\u4e4e\u76f8\u9694\u9887\u8fdc.\u60f3\u7f29\u77ed\u8def\u7a0b\u7684\u5176\u4e2d\u4e00\u4e2a\u65b9\u6cd5\u5c31\u662f\u5236\u9020\u4e00\u6761\u4ece\u57fa\u5730\u901a\u5f80\u4e0d\u540c\u77ff\u8109\u7684\u94c1\u8def,\u7136\u800c<br/>,\u8ba9\u4eba\u96be\u8fc7\u7684\u662f,\u8fd9\u5c06\u8017\u8d39\u4f60\u5927\u91cf\u7684\u94c1\u548c\u6742\u915a\u6cb9...\u6765,\u522b\u5fd8\u4e86\u628a\u6700\u540e\u4e00\u4e2a\u8c61\u5f81\u6027\u7684\u94c6\u9489\u653e\u5728\u4f60\u7684\u5176\u4e2d\u4e00\u6761\u65b0\u706b<br/>\u8f66\u8def\u7ebf\u4e0a!"
                },
                {
                    "name": "\u6a2a\u8d2f\u5927\u9646\u7684\u9ad8\u901f\u94c1\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9ad8\u901f\u63a8\u8fdb\u8f68\u9053.png",
                    "x": -12.0,
                    "y": 72.0,
                    "tooltip": "\u4f60\u68a6\u60f3\u8fc7\u5728\u6211\u7684\u4e16\u754c\u4e2d\u9a7e\u9a76\u9ad8\u901f\u5217\u8f66\u561b\uff1f \u4f60\u7684\u68a6\u60f3\u53ef\u4ee5\u5728\u9ad8\u901f\u8f68\u9053\u4e0a\u9762\u5b9e\u73b0.\u4f46\u662f\u8981\u5c0f\u5fc3,\u5f53\u4f60\u6539\u53d8\u65b9\u5411\u6216\u8005\u51c6<br/>\u5907\u505c\u8f66\u7684\u65f6\u5019\u9700\u8981\u964d\u4f4e\u901f\u5ea6.\u5426\u5219...BOOM!"
                },
                {
                    "name": "\u6a2a\u8d2f\u5927\u9646\u7684\u9632\u7206\u94c1\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8def\u7531\u8f68\u9053.png",
                    "x": 36.0,
                    "y": -24.0,
                    "tooltip": "\u5728\u4e0b\u754c\u94fa\u8bbe\u94c1\u8def\u5341\u5206\u5371\u9669. \u56e0\u6b64\u4f60\u9700\u8981\u94fa\u8bbe\u7279\u6b8a\u8bbe\u8ba1\u8fc7\u7684\u9632\u7206\u5f3a\u5316\u8f68\u9053. \u4e0d\u8fc7\u5e0c\u671b\u4f60\u6bd4\u94c1\u8def\u66f4\u52a0\u9632\u7206...\u5f3a<br/>\u5316\u8f68\u9053\u7684\u79fb\u52a8\u901f\u5ea6\u6bd4\u666e\u901a\u8f68\u9053\u5feb25\uff05.NEI\u7684\u7b2c\u4e00\u9875\u4e0d\u5bf9. \u5f80\u540e\u7ffb\u7ffb\u4f60\u5c31\u80fd\u627e\u5230\u6b63\u786e\u7684\u5408\u6210\u8868."
                },
                {
                    "name": "\u6a2a\u8d2f\u5927\u9646\u7684\u7535\u529b\u8f68\u9053",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8def\u7531\u8f68\u9053.png",
                    "x": -60.0,
                    "y": 72.0,
                    "tooltip": "\u7535\u529b\u8f68\u9053\u9700\u8981\u548c\u4f60\u7684\u7535\u529b\u673a\u8f66\u4e00\u8d77\u4f7f\u7528. \u4f60\u9700\u8981\u7ed9\u8f68\u9053\u63d0\u4f9b\u7535\u529b.NEI\u7684\u7b2c\u4e00\u9875\u4e0d\u5bf9. \u5f80\u540e\u7ffb\u7ffb\u4f60\u5c31\u80fd\u627e\u5230<br/>\u6b63\u786e\u7684\u5408\u6210\u8868."
                },
                {
                    "name": "\u731c\u706b\u8f66",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6728\u8d28Y\u578b\u8f68\u9053.png",
                    "x": -12.0,
                    "y": -24.0,
                    "tooltip": "\u6728\u5236\u94c1\u8f68\u4e0d\u9700\u8981\u673a\u5668\u5c31\u53ef\u4ee5\u505a\u51fa\u6765.\u8ddf\u6b63\u5e38\u94c1\u8f68\u529f\u80fd\u4e00\u6837,\u4f46\u662f\u6700\u5927\u901f\u5ea6\u6bd4\u8f83\u4f4e.(\u4e3a\u4e86\u5b89\u5168\u7684\u539f\u56e0) \u63d0\u793a:\u6728<br/>\u5236\u94c1\u8f68\u53ef\u4ee5\u7528\u4e8e\u53f2\u8482\u592b\u77ff\u8f66\u519c\u573a.\u8bd1\u8005\u6ce8:\u300a\u731c\u706b\u8f66\u300b\u662f\u82f1\u56fd\u4f5c\u5bb6\u6b27\u6587\u00b7\u5a01\u5c14\u58eb\u521b\u4f5c\u7684\u4e00\u90e8\u5c0f\u8bf4.\u672c\u4e66\u7684\u8154\u8c03\u548c\u98ce<br/>\u683c,\u5f00\u521b\u4e86\u865a\u6784\u5c0f\u8bf4\u524d\u6240\u672a\u6709\u7684\u4e00\u4e2a\u65b0\u4e16\u7eaa.\u5176\u57281996\u5e74\u6539\u7f16\u6210\u7535\u5f71,\u66f4\u662f\u6210\u4e3a\u7ecf\u5178."
                },
                {
                    "name": "\u65c5\u884c\u8005\u9774\u5b50\u5347\u7ea7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65c5\u884c\u8005\u9774\u5b50.png",
                    "x": 180.0,
                    "y": 24.0,
                    "tooltip": "\u4f60\u7684\u9774\u5b50\u53ef\u4ee5\u914d\u5907\u4e00\u4e9b\u5347\u7ea7,\u5982\u6c34\u4e0a\u6b65\u884c,\u4e8c\u91cd\u8df3,\u94c5\u9774\u6216\u9ecf\u6ed1\u9774\u5b50.\u6c34\u4e0a\u6b65\u884c\u53ef\u4ee5\u8ba9\u4f60\u8d70\u8fc7\u6c34.\u4e8c\u91cd\u8df3\u8ba9\u4f60\u53ef\u4ee5<br/>\u5728\u7a7a\u4e2d\u518d\u6b21\u8df3\u8dc3.\u94c5\u9774\u5141\u8bb8\u4f60\u5728\u6c34\u4e0b\u884c\u8d70,\u9632\u6b62\u4f60\u6e38\u6cf3,\u8fd8\u53ef\u4ee5\u83b7\u5f97\u989d\u5916\u7a7a\u6c14.\u9ecf\u6ed1\u9774\u5b50\u53ef\u51cf\u5c11\u4f60\u53d7\u5230\u7684\u6389\u843d\u4f24\u5bb3<br/>.\u63d0\u793a:\u81ea\u52a8\u4fee\u590d\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u5230\u9774\u5b50\u4e0a.\u6bcf\u4ef6\u62a4\u7532\u90fd\u67093\u4e2a\u7528\u4e8e\u5347\u7ea7\u7684\u63d2\u69fd."
                },
                {
                    "name": "\u77ac\u79fb!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65c5\u884c\u6743\u6756.png",
                    "x": 324.0,
                    "y": 72.0,
                    "tooltip": "\u65c5\u884c\u6743\u6756\u53ef\u4ee5\u8ba9\u4f60\u5728\u57fa\u5730\u4e2d\u81ea\u7531\u79fb\u52a8. \u624b\u6301\u65c5\u884c\u6743\u6756,\u6309\u4f4fShift\u5e76\u53f3\u952e\u53ef\u4ee5\u5411\u7740\u9762\u5bf9\u7684\u65b9\u5411\u4f20\u9001.\u5982\u679c\u4f60<br/>\u6709\u65c5\u884c\u951a\u7684\u8bdd,\u624b\u6301\u65c5\u884c\u6743\u6756\u53f3\u952e\u5373\u53ef\u76f4\u63a5\u4f20\u9001\u5230\u951a\u5904. \u666e\u901a\u4f20\u9001\u8303\u56f4\u4e3a16\u683c,\u800c\u951a\u4f20\u9001\u8303\u56f4\u4e3a128\u683c."
                },
                {
                    "name": "\u4f20\u9001\u00b2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4f20\u9001\u6743\u6756.png",
                    "x": 324.0,
                    "y": 264.0,
                    "tooltip": "\u5982\u679c\u80fd\u7528\u4f20\u9001\u7684,\u90a3\u4e3a\u5565\u8fd8\u7528\u8d70\u7684?\u672c\u6b21\u5168\u65b0\u5347\u7ea7\u7684\u4f20\u9001\u4e4b\u6756\u66f4\u5feb\u3001\u66f4\u8fdc,\u800c\u4e14\u7edd\u65e0\u65ad\u7535\u98ce\u9669.\u53f3\u952e:*\u82e5\u6307\u5411\u4e00<br/>\u4e2a\u65b9\u5757:\u4f20\u9001\u5230\u5176\u4f4d\u7f6e,512\u683c\u8303\u56f4*\u82e5\u8303\u56f4\u5185\u6ca1\u6709\u6307\u5411\u65b9\u5757:\u5411\u524d\u4f20\u9001,64\u683c\u8303\u56f4*\u82e5\u6307\u5411\u4e00\u4e2a2\u683c\u5185\u7684\u65b9<br/>\u5757:\u4f20\u9001\u5230\u8fd9\u9762\u5899\u7684\u53e6\u4e00\u7aef,16\u683c\u8303\u56f4*\u6ca1\u6709\u4efb\u4f55\u51b7\u5374\u65f6\u95f4Shift\u53f3\u952e:\u4f20\u9001\u5230\u6307\u5411\u7684\u4f20\u9001\u951a,2048\u683c<br/>\u8303\u56f4\u63d0\u793a:\u4f60\u53ef\u80fd\u65e0\u6cd5\u770b\u5230\u592a\u8fdc\u7684\u4f20\u9001\u951a,\u4f46\u53ea\u8981\u5b83\u4eec\u5728\u8303\u56f4\u5185\u4e14\u88ab\u52a0\u8f7d,\u4f60\u4ecd\u7136\u53ef\u4ee5\u4f20\u9001\u8fc7\u53bb;\u53ef\u4ee5\u7528Joun<br/>neyMap\u8def\u5f84\u70b9\u6765\u6807\u6ce8\u65c5\u884c\u951a.\u6ce8\u610f:\u4e0e\u666e\u901a\u7684\u4f20\u9001\u4e4b\u6756\u76f8\u6bd4,\u672c\u4ea7\u54c1\u53cd\u8f6c\u4e86Shift\u952e\u7684\u529f\u80fd,\u4ee5\u4fbf\u4e8e\u7528<br/>\u6237\u7684\u4f20\u9001\u4f53\u9a8c."
                },
                {
                    "name": "\u8e6c\u9f3b\u5b50\u4e0a\u8138",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7eb3\u7c73\u65c5\u884c\u8005\u4e4b\u9774.png",
                    "x": 180.0,
                    "y": 216.0,
                    "tooltip": "\u7eb3\u7c73\u65c5\u884c\u8005\u4e4b\u9774\u76f8\u5bf9\u7535\u5b50\u65c5\u884c\u8005\u4e4b\u9774\u62e5\u6709\u66f4\u9ad8\u7684\u9b54\u529b\u51cf\u514d,\u8dd1\u5f97\u66f4\u5feb,\u8df3\u5f97\u66f4\u9ad8.\u5bf9\u5927\u5e08\u7ea7\u7684\u9b54\u6cd5\u5de5\u7a0b\u5e08\u6765\u8bf4,\u8fd9<br/>\u662f\u53cc\u4e0d\u53ef\u591a\u5f97\u7684\u9774\u5b50."
                },
                {
                    "name": "\u8de8\u8d8a\u661f\u6cb3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91cf\u5b50\u65c5\u884c\u8005\u4e4b\u9774.png",
                    "x": 180.0,
                    "y": 264.0,
                    "tooltip": "\u91cf\u5b50\u65c5\u884c\u8005\u4e4b\u9774,\u8ba9\u4f60\u8dd1\u8d77\u6765\u8fc5\u75be\u5982\u98ce.\u53ef\u80fd\u4f1a\u51fa\u95ee\u9898\u8ba9\u4f60\u7ad9\u7740\u4e0d\u52a8!"
                },
                {
                    "name": "\u66f4\u591a\u4e0d\u540c\u7684\u6728\u8f68",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8def\u7531\u8f68\u9053.png",
                    "x": -108.0,
                    "y": 24.0,
                    "tooltip": "\u4f60\u9700\u8981\u4e00\u53f0\u7ec4\u88c5\u673a\u6765\u7ec4\u88c5\u6728\u5236\u5341\u5b57\u8f68\u3001\u6728\u5236Y\u578b\u8f68\u3001\u6728\u5236\u8f6c\u8f99\u8f68.\u5b83\u4eec\u4f7f\u4f60\u53ef\u4ee5\u7ed3\u5408\u6216\u5207\u6362\u901a\u5f80\u4e0d\u540c\u5730\u70b9\u7684\u8f68\u9053.<br/>NEI\u7684\u7b2c\u4e00\u9875\u4e0d\u5bf9. \u5f80\u540e\u7ffb\u7ffb\u4f60\u5c31\u80fd\u627e\u5230\u6b63\u786e\u7684\u5408\u6210\u8868."
                },
                {
                    "name": "\u98de\u884c\u65f6\u5de5\u4f5c?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8fc5\u6377\u62a4\u8155.png",
                    "x": 180.0,
                    "y": 72.0,
                    "tooltip": "\u6709\u4e86\u8fd9\u4e9b\u8bbe\u5907,\u4f60\u73b0\u5728\u53ef\u4ee5\u5728\u4e0d\u88ab\u51cf\u901f\u7684\u60c5\u51b5\u4e0b\u540c\u65f6\u98de\u884c\u548c\u5de5\u4f5c\u4e86.  \u4f60\u53ef\u4ee5\u5728\u9b54\u5bfc\u624b\u518c\u5deb\u5e08\u5b9d\u5177\u7ae0\u8282\u627e\u5230\u5b83\u4eec<br/>.\u4f60\u9700\u8981\u4e00\u4e9b\u8fc5\u6377\u836f\u6c34."
                },
                {
                    "name": "\u5c31\u50cf\u5728\u52a8\u6f2b\u4e2d\u4e00\u6837!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7c98\u5408\u7eb8\u677f\u7fbd\u7ffc.png",
                    "x": 84.0,
                    "y": 120.0,
                    "tooltip": "\u4f60\u60f3\u98de.\u5f88\u60f3\u554a. \u6240\u4ee5\u4f60\u9700\u8981\u80f6\u5e26\u548c\u7fc5\u8180!"
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
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u590d\u5408\u80cc\u5fc3",
                    "target": "\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u7535\u529b\u55b7\u6c14\u80cc\u5305",
                    "target": "\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u78b3\u76ae\u80a4",
                    "target": "\u8fdb\u9636\u7eb3\u7c73\u91cd\u529b\u80f8\u7532"
                },
                {
                    "source": "\u8fdb\u9636\u7535\u529b\u55b7\u6c14\u80cc\u5305",
                    "target": "\u8fdb\u9636\u7eb3\u7c73\u91cd\u529b\u80f8\u7532"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(ZPM)",
                    "target": "Alternative to blasting off!?"
                },
                {
                    "source": "\u5236\u9020\u9545",
                    "target": "Alternative to blasting off!?"
                },
                {
                    "source": "\u795e\u79d8\u70f9\u996a",
                    "target": "\u5929\u4f7f\u7fc5\u8180"
                },
                {
                    "source": "\u91cf\u5b50\u80f8\u7532",
                    "target": "\u5929\u4f7f\u4e4b\u7ffc-\u7ed3\u5408!"
                },
                {
                    "source": "\u79d8\u5bc6-\u5929\u4f7f-\u523a\u5ba2",
                    "target": "\u5929\u4f7f\u4e4b\u7ffc-\u8d85\u529b!"
                },
                {
                    "source": "\u91cf\u5b50\u88c5\u7532",
                    "target": "\u5929\u4f7f\u4e4b\u7ffc-\u8d85\u529b!"
                },
                {
                    "source": "\u67d4\u8f6f\u7684\u76ae\u9769",
                    "target": "\u4e00\u79cd\u66f4\u5feb\u6377\u7684\u51fa\u884c\u65b9\u5f0f"
                },
                {
                    "source": "\u9774\u5b50\u662f\u7528\u6765\u8d70\u8def\u7684",
                    "target": "\u66f4\u70ab\u9177\u7684\u9774\u5b50"
                },
                {
                    "source": "\u6a61\u76ae\u8247",
                    "target": "\u8239\u6a21\u5177"
                },
                {
                    "source": "\u6a2a\u8d2f\u94c1\u8def",
                    "target": "\u589e\u52a0\u4f60\u7684\u901f\u5ea6"
                },
                {
                    "source": "\u6a2a\u8d2f\u5927\u9646\u7684\u9ad8\u901f\u94c1\u8def",
                    "target": "\u589e\u52a0\u4f60\u7684\u901f\u5ea6 v2"
                },
                {
                    "source": "\u8239\u6a21\u5177",
                    "target": "\u78b3\u7ea4\u7ef4\u8f7b\u8247"
                },
                {
                    "source": "\u57fa\u7840\u538b\u6a21\u673a",
                    "target": "\u78b3\u7ea4\u7ef4\u8f7b\u8247"
                },
                {
                    "source": "\u533a\u5757\u52a0\u8f7d",
                    "target": "\u77ff\u8f66\u4e0e\u533a\u5757\u52a0\u8f7d\u5668"
                },
                {
                    "source": "\u6d41\u4f53\u88c5\u8f7d\u673a\u548c\u5378\u8f7d\u673a",
                    "target": "\u77ff\u8f66\u4e0e\u533a\u5757\u52a0\u8f7d\u5668"
                },
                {
                    "source": "\u76f8\u53cd\u4e16\u754c\u7684\u788e\u7247",
                    "target": "Celestial Gateways"
                },
                {
                    "source": "\u9f99\u82af",
                    "target": "Charm of Dislocation"
                },
                {
                    "source": "\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV",
                    "target": "\u71c3\u7164\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u67f4\u6cb9\u7684\u529b\u91cf",
                    "target": "\u76f4\u5347\u673a\u80cc\u5305,\u66f4\u64c5\u60ac\u505c"
                },
                {
                    "source": "\u624b\u52a8\u8f6c\u8f99\u673a",
                    "target": "\u64ac\u68cd"
                },
                {
                    "source": "\u5bfc\u5e08\u6c14\u8840\u5b9d\u73e0:\u63a5\u8fd1\u4e86",
                    "target": "'\u7b80\u4fbf'\u4f20\u9001"
                },
                {
                    "source": "\u5145\u6c14\u5e8a",
                    "target": "\u7535\u52a8\u8239"
                },
                {
                    "source": "\u78b3\u7ea4\u7ef4\u8f7b\u8247",
                    "target": "\u7535\u52a8\u8239"
                },
                {
                    "source": "\u6a2a\u8d2f\u5927\u9646\u7684\u7535\u529b\u8f68\u9053",
                    "target": "\u7535\u529b\u4f9b\u7ed9\u5355\u5143"
                },
                {
                    "source": "\u538b\u7f29\u4e07\u7269",
                    "target": "\u7535\u529b\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u7535\u529b\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u84b8\u6c7d\u673a\u8f66",
                    "target": "\u7535\u529b\u673a\u8f66"
                },
                {
                    "source": "MV(\u4e2d\u538b)\u7ea7\u84b8\u6c7d\u8f6e\u673a",
                    "target": "\u7535\u529b\u673a\u8f66"
                },
                {
                    "source": "\u7a7a\u7535\u6c60(\u84dd\u77f3)",
                    "target": "\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "Enhanced Charm of Dislocation"
                },
                {
                    "source": "Charm of Dislocation",
                    "target": "Enhanced Charm of Dislocation"
                },
                {
                    "source": "\u89e6\u53d1\u811a\u8e7c",
                    "target": "\u811a\u8e7c"
                },
                {
                    "source": "\u597d\u7d2f...\u5fc5\u987b...\u7761\u89c9...",
                    "target": "\u811a\u8e7c"
                },
                {
                    "source": "\u6a2a\u8d2f\u94c1\u8def",
                    "target": "\u6d41\u4f53\u88c5\u8f7d\u673a\u548c\u5378\u8f7d\u673a"
                },
                {
                    "source": "\u4eba\u9760\u8863\u88c5...\u5deb\u5e08\u4e5f\u4e00\u6837",
                    "target": "\u50cf\u9e70...\u6211\u662f\u8bf4\u4e4c\u9e26\u4e00\u6837\u98de"
                },
                {
                    "source": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756",
                    "target": "\u50cf\u9e70...\u6211\u662f\u8bf4\u4e4c\u9e26\u4e00\u6837\u98de"
                },
                {
                    "source": "\u795e\u5947\u7684\u7fbd\u6bdb",
                    "target": "\u50cf\u9e70...\u6211\u662f\u8bf4\u4e4c\u9e26\u4e00\u6837\u98de"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u50cf...\u739b\u4e3d\u00b7\u6ce2\u5e73\u65af\u4e00\u6837\u98de?"
                },
                {
                    "source": "\u50cf...\u739b\u4e3d\u00b7\u6ce2\u5e73\u65af\u4e00\u6837\u98de?",
                    "target": "\u65e0\u5fe7\u65e0\u8651\u5730\u98de\u7fd4"
                },
                {
                    "source": "\u538b\u7f29\u4e07\u7269",
                    "target": "\u71c3\u6c14\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u71c3\u6c14\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u67f4\u6cb9\u7684\u529b\u91cf",
                    "target": "\u71c3\u6c14\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u6ed1\u7fd4\u7ffc"
                },
                {
                    "source": "\u67d4\u8f6f\u7684\u76ae\u9769",
                    "target": "\u6ed1\u7fd4\u7ffc"
                },
                {
                    "source": "\u5236\u9020\u4e09\u949b",
                    "target": "\u91cd\u529b\u80f8\u7532"
                },
                {
                    "source": "\u91cf\u5b50\u80f8\u7532",
                    "target": "\u91cd\u529b\u80f8\u7532"
                },
                {
                    "source": "\u5965\u6cd5\u5de5\u4f5c\u53f0",
                    "target": "Indestructible Vessel"
                },
                {
                    "source": "\u5212,\u5212,\u5212\u5c0f\u8239(Row, Row, Row Your Boat)",
                    "target": "Indestructible Vessel"
                },
                {
                    "source": "\u8239\u6a21\u5177",
                    "target": "\u5145\u6c14\u5e8a"
                },
                {
                    "source": "\u57fa\u7840\u538b\u6a21\u673a",
                    "target": "\u5145\u6c14\u5e8a"
                },
                {
                    "source": "\u538b\u7f29\u6750\u6599",
                    "target": "\u55b7\u6c14\u80cc\u5305v.0.1 \u5185\u90e8\u6d4b\u8bd5"
                },
                {
                    "source": "2\u9636\u706b\u7bad",
                    "target": "\u53d1\u5c04\u63a7\u5236\u5668"
                },
                {
                    "source": "\u9b54\u6676",
                    "target": "Let's Go Lava Surfing!"
                },
                {
                    "source": "\u795e\u79d8\u70f9\u996a",
                    "target": "Let's Go Lava Surfing!"
                },
                {
                    "source": "Indestructible Vessel",
                    "target": "Let's Go Lava Surfing!"
                },
                {
                    "source": "\u8ba9\u77ff\u8f66\u53ef\u4ee5\u84c4\u6c34\u3001\u50a8\u7269\u548c\u5236\u9020\u7269\u54c1",
                    "target": "\u706b\u8f66\u59340.1\u6d4b\u8bd5\u7248"
                },
                {
                    "source": "\u50cf...\u739b\u4e3d\u00b7\u6ce2\u5e73\u65af\u4e00\u6837\u98de?",
                    "target": "\u957f\u8ddd\u79bb\u80fd\u91cf\u8f93\u9001"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u77ff\u8f66"
                },
                {
                    "source": "\u77ff\u8f66",
                    "target": "\u8ba9\u77ff\u8f66\u53ef\u4ee5\u84c4\u6c34\u3001\u50a8\u7269\u548c\u5236\u9020\u7269\u54c1"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "Planar Gateways"
                },
                {
                    "source": "\u55b7\u6c14\u80cc\u5305",
                    "target": "\u88c5\u586b\u55b7\u6c14\u80cc\u5305"
                },
                {
                    "source": "\u805a\u53d8\u53cd\u5e94\u5806MK3-\u5347\u7ea7",
                    "target": "Relocator"
                },
                {
                    "source": "\u91cd\u8981\u7684\u5de5\u5177",
                    "target": "\u5212,\u5212,\u5212\u5c0f\u8239(Row, Row, Row Your Boat)"
                },
                {
                    "source": "\u5212,\u5212,\u5212\u5c0f\u8239(Row, Row, Row Your Boat)",
                    "target": "\u6a61\u76ae\u8247"
                },
                {
                    "source": "\u5929\u4f7f\u7fc5\u8180",
                    "target": "\u79d8\u5bc6-\u5929\u4f7f-\u523a\u5ba2"
                },
                {
                    "source": "\u78b3\u76ae\u80a4",
                    "target": "\u79d8\u5bc6-\u5929\u4f7f-\u523a\u5ba2"
                },
                {
                    "source": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3",
                    "target": "\u6bd4\u68af\u5b50\u597d\u591a\u4e86"
                },
                {
                    "source": "\u690d\u7269\u9b54\u6cd5\u6ce8\u9b54",
                    "target": "Speed up with the Sash"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "\u84b8\u6c7d\u673a\u8f66"
                },
                {
                    "source": "\u706b\u8f66\u59340.1\u6d4b\u8bd5\u7248",
                    "target": "\u84b8\u6c7d\u673a\u8f66"
                },
                {
                    "source": "\u4ec0\u4e48\u9b3c\u4e1c\u897f\uff1f",
                    "target": "\u722c\u5761\u52a9\u624b"
                },
                {
                    "source": "\u67d4\u8f6f\u7684\u76ae\u9769",
                    "target": "\u722c\u5761\u52a9\u624b"
                },
                {
                    "source": "\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u7684\u5408\u91d1",
                    "target": "\u624b\u52a8\u8f6c\u8f99\u673a"
                },
                {
                    "source": "\u731c\u706b\u8f66",
                    "target": "\u624b\u52a8\u8f6c\u8f99\u673a"
                },
                {
                    "source": "\u662f\u65f6\u5019\u83b7\u5f97\u4e00\u4e9b\u94a2\u4e86!",
                    "target": "\u624b\u52a8\u8f6c\u8f99\u673a"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "Teleporter"
                },
                {
                    "source": "\u673a\u5668\u6846\u67b6",
                    "target": "\u672b\u5f71\u4eba\u7684\u529b\u91cf"
                },
                {
                    "source": "LV\u529b\u573a\u53d1\u751f\u5668",
                    "target": "\u672b\u5f71\u4eba\u7684\u529b\u91cf"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u6a2a\u8d2f\u94c1\u8def"
                },
                {
                    "source": "\u731c\u706b\u8f66",
                    "target": "\u6a2a\u8d2f\u94c1\u8def"
                },
                {
                    "source": "\u6a2a\u8d2f\u94c1\u8def",
                    "target": "\u6a2a\u8d2f\u5927\u9646\u7684\u9ad8\u901f\u94c1\u8def"
                },
                {
                    "source": "\u5de5\u4e1a\u9ad8\u7089\u65f6\u4ee3",
                    "target": "\u6a2a\u8d2f\u5927\u9646\u7684\u9ad8\u901f\u94c1\u8def"
                },
                {
                    "source": "\u4e0d\u9508\u94a2\u4e0e\u5de5\u4e1a\u9ad8\u7089",
                    "target": "\u6a2a\u8d2f\u5927\u9646\u7684\u9632\u7206\u94c1\u8def"
                },
                {
                    "source": "\u6a2a\u8d2f\u94c1\u8def",
                    "target": "\u6a2a\u8d2f\u5927\u9646\u7684\u9632\u7206\u94c1\u8def"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u6a2a\u8d2f\u5927\u9646\u7684\u7535\u529b\u8f68\u9053"
                },
                {
                    "source": "\u6a2a\u8d2f\u94c1\u8def",
                    "target": "\u6a2a\u8d2f\u5927\u9646\u7684\u7535\u529b\u8f68\u9053"
                },
                {
                    "source": "\u77ff\u8f66",
                    "target": "\u731c\u706b\u8f66"
                },
                {
                    "source": "\u65c5\u884c\u8005\u7684\u88c5\u5907",
                    "target": "\u65c5\u884c\u8005\u9774\u5b50\u5347\u7ea7"
                },
                {
                    "source": "\u672b\u5f71\u4eba\u7684\u529b\u91cf",
                    "target": "\u77ac\u79fb!"
                },
                {
                    "source": "\u5145\u80fd\u6676\u4f53",
                    "target": "\u77ac\u79fb!"
                },
                {
                    "source": "\u6765\u81ea\u7a7a\u95f4\u4e2d\u7684\u4e2d\u5b50\u7d20",
                    "target": "\u4f20\u9001\u00b2"
                },
                {
                    "source": "\u77ac\u79fb!",
                    "target": "\u4f20\u9001\u00b2"
                },
                {
                    "source": "\u66f4\u70ab\u9177\u7684\u9774\u5b50",
                    "target": "\u8e6c\u9f3b\u5b50\u4e0a\u8138"
                },
                {
                    "source": "\u78b3\u76ae\u80a4",
                    "target": "\u8e6c\u9f3b\u5b50\u4e0a\u8138"
                },
                {
                    "source": "\u91cf\u5b50\u88c5\u7532",
                    "target": "\u8de8\u8d8a\u661f\u6cb3"
                },
                {
                    "source": "\u8e6c\u9f3b\u5b50\u4e0a\u8138",
                    "target": "\u8de8\u8d8a\u661f\u6cb3"
                },
                {
                    "source": "\u64ac\u68cd",
                    "target": "\u66f4\u591a\u4e0d\u540c\u7684\u6728\u8f68"
                },
                {
                    "source": "\u50cf...\u739b\u4e3d\u00b7\u6ce2\u5e73\u65af\u4e00\u6837\u98de?",
                    "target": "\u98de\u884c\u65f6\u5de5\u4f5c?"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u6839\u6cd5\u6756",
                    "target": "\u5c31\u50cf\u5728\u52a8\u6f2b\u4e2d\u4e00\u6837!"
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