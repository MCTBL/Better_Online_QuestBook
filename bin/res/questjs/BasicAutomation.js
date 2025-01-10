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
                    "name": "\u9ad8\u7ea7\u63a2\u6d4b\u8f68\u9053",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9ad8\u7ea7\u63a2\u6d4b\u8f68\u9053.png",
                    "x": 216.0,
                    "y": 12.0,
                    "tooltip": "\u6709\u4e86\u8d27\u7269\u7ba1\u7406\u5668\u4e4b\u540e,\u8fd8\u9700\u8981\u4e00\u4e2a\u7279\u5b9a\u7684\u8f68\u9053,\u77ff\u8f66\u5c31\u53ef\u4ee5\u4e0e\u4e4b\u4ea4\u4e92. \u53ea\u9700\u5c06\u9ad8\u7ea7\u63a2\u6d4b\u8f68\u9053\u653e\u5728\u8d27\u7269\u7ba1\u7406\u5668\u65c1\u8fb9<br/>,\u6839\u636e\u5176\u6240\u5728\u4fa7\u9762\u7684\u989c\u8272,\u4f60\u5fc5\u987b\u8c03\u6574\u8d27\u7269\u7ba1\u7406\u5668GUI\u4e2d\u7684\u8bbe\u7f6e."
                },
                {
                    "name": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "symbolSize": 31.200000000000003,
                    "x": 324.0,
                    "y": 108.0,
                    "tooltip": "\u4e3a\u4e86\u7ec4\u88c5\u6216\u5b9a\u5236\u4f60\u7684\u77ff\u8f66,\u4f60\u9700\u8981\u4e00\u4e2a\u8f66\u58f3\u6765\u9644\u52a0\u6240\u9700\u7684\u5347\u7ea7.\u6728\u5236\u7684\u53ef\u4ee5\u7528\u4e8e\u975e\u5e38\u7b80\u5355\u7684\u5e94\u7528,\u4f46\u8981\u79cd\u690d\u5c0f\u9ea6\u6216<br/>\u6811\u6728,\u4f60\u81f3\u5c11\u9700\u8981\u4e00\u4e2a\u94c1\u7684.\u8b66\u544a: \u4e0d\u53d7\u4fdd\u62a4\u7684\u77ff\u8f66\u53ef\u80fd\u4f1a\u88ab\u96f7\u7535\u51fb\u4e2d\u800c\u8131\u8f68.\u7528\u73bb\u7483(\u6216\u4efb\u4f55\u56fa\u4f53\u65b9\u5757)\u906e\u76d6<br/>\u8be5\u533a\u57df,\u4ee5\u9632\u77ff\u8f66\u6d88\u5931.\u53e6\u5916,\u8bf7\u786e\u4fdd\u5c06\u77ff\u8f66\u653e\u5728\u4e00\u4e2a\u533a\u5757\u4e2d,\u6216\u4f7f\u7528\u8986\u76d6\u6574\u4e2a\u77ff\u8f66\u5de5\u4f5c\u533a\u57df\u7684\u533a\u5757\u52a0\u8f7d\u5668.\u52a0\u8f7d<br/>/\u5378\u8f7d\u533a\u5757\u53ef\u80fd\u4f1a\u5bfc\u81f4\u77ff\u8f66\u6d88\u5931\u6216\u91cd\u590d."
                },
                {
                    "name": "\u81ea\u52a8\u88c5(\u5378)\u8f7d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8d27\u7269\u7ba1\u7406\u5668.png",
                    "x": 216.0,
                    "y": 60.0,
                    "tooltip": "\u4f60\u53ef\u4ee5\u624b\u52a8\u586b\u5145\u548c\u6e05\u7a7a\u4f60\u7684\u77ff\u8f66,\u4f46\u81ea\u52a8\u5316\u8f6c\u79fb\u7269\u54c1\u66f4\u65b9\u4fbf,\u4e0d\u662f\u5417\uff1f"
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u7164\u70ad\u5f15\u64ce",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5c0f\u578b\u7164\u70ad\u5f15\u64ce.png",
                    "x": 324.0,
                    "y": 156.0,
                    "tooltip": "\u4f60\u7684\u77ff\u8f66\u663e\u7136\u9700\u8981\u80fd\u91cf.\u77ff\u8f66\u53ef\u4ee5\u901a\u8fc7\u592a\u9633\u80fd\u6216\u5ca9\u6d46\u4f9b\u80fd.\u4f46\u73b0\u5728\u4f60\u53ea\u80fd\u7528\u7b80\u5355\u7684\u7164\u70ad\u5f15\u64ce."
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u6316\u6398",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u94c1\u5236\u94bb\u5934.png",
                    "x": 264.0,
                    "y": 60.0,
                    "tooltip": "\u60f3\u8bd5\u4e00\u8bd5\u8ba9\u77ff\u8f66\u6765\u6316\u6398\u4e48\uff1f\u7528\u94c1\u505a\u7684\u94bb\u5934\u662f\u6700\u4fbf\u5b9c\u7684\u4ee3\u66ff\u54c1."
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u519c\u4e1a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u57fa\u7840\u79cd\u690d\u5668.png",
                    "x": 384.0,
                    "y": 60.0,
                    "tooltip": "\u4e0d\u5e78\u7684\u662f,\u57fa\u7840\u519c\u4e1a\u6a21\u5757\u9664\u4e86\u5c0f\u9ea6\u4ee5\u5916\u4ec0\u4e48\u90fd\u4e0d\u80fd\u79cd.\u5b83\u5e76\u4e0d\u8d35,\u4e5f\u8bb8\u662f\u6700\u4fbf\u5b9c\u7684\u81ea\u52a8\u5316\u98df\u7269\u751f\u4ea7\u65b9\u6cd5."
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u66f4\u591a\u7684\u5b58\u50a8\u7a7a\u95f4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u524d\u90e8\u7bb1\u5b50.png",
                    "x": 432.0,
                    "y": 108.0,
                    "tooltip": "\u77ff\u8f66\u4e0d\u4f46\u53ef\u4ee5\u4fa7\u6302\u7bb1\u5b50,\u4e0a\u9762\u3001\u524d\u9762\u548c\u77ff\u8f66\u5185\u90e8\u90fd\u53ef\u4ee5\u589e\u52a0\u5b58\u50a8\u7a7a\u95f4. \u4e0d\u8fc7\u6709\u4e9b\u5730\u65b9\u662f\u9884\u7559\u7ed9\u5de5\u5177\u7684,\u6240\u4ee5\u7bb1\u5b50<br/>\u65e0\u6cd5\u653e\u5230\u90a3\u91cc."
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u57fa\u7840\u592a\u9633\u80fd\u5f15\u64ce.png",
                    "x": 264.0,
                    "y": 156.0,
                    "tooltip": "\u4f60\u7684\u77ff\u8f66\u9700\u8981\u52a8\u529b. \u77ff\u8f66\u53ef\u4ee5\u4f7f\u7528\u7164\u3001\u592a\u9633\u80fd\u6216\u8005\u5ca9\u6d46\u6765\u4f9b\u7535. \u5982\u679c\u4f60\u9020\u4e86\u592a\u9633\u80fd\u7535\u6c60\u677f,\u4f60\u53ef\u4ee5\u7528\u592a\u9633\u80fd\u6765<br/>\u4e3a\u4f60\u7684\u77ff\u8f66\u5145\u7535."
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u50a8\u5b58",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4fa7\u9762\u7bb1\u5b50.png",
                    "x": 384.0,
                    "y": 108.0,
                    "tooltip": "\u4e00\u4e2a\u57fa\u7840\u7684\u77ff\u8f66\u4e0d\u80fd\u5bb9\u7eb3\u4efb\u4f55\u7269\u54c1,\u6240\u4ee5\u4f60\u9700\u8981\u9644\u4e0a\u7279\u6b8a\u7684\u7bb1\u5b50."
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u5730\u70ed\u5f15\u64ce",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u70ed\u80fd\u5f15\u64ce.png",
                    "x": 384.0,
                    "y": 156.0,
                    "tooltip": "\u4f60\u7684\u77ff\u8f66\u9700\u8981\u52a8\u529b. \u77ff\u8f66\u53ef\u4ee5\u4f7f\u7528\u7164\u3001\u592a\u9633\u80fd\u6216\u8005\u5ca9\u6d46\u6765\u4f9b\u7535. \u8bd5\u7740\u7528\u5ca9\u6d46\u6765\u9a71\u52a8\u77ff\u8f66\u5427."
                },
                {
                    "name": "\u77ff\u8f66\u6a21\u5757:\u4f10\u6728",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u57fa\u7840\u4f10\u6728\u5668.png",
                    "x": 324.0,
                    "y": 60.0,
                    "tooltip": "\u57fa\u7840\u4f10\u6728\u673a\u7528\u4e00\u6bb5\u65f6\u95f4\u4e4b\u540e\u5c31\u4f1a\u574f,\u4f46\u662f\u4f60\u6c38\u8fdc\u90fd\u4e0d\u9700\u8981\u66f4\u6362\u5b83.\u5b83\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u94bb\u77f3\u4fee\u590d."
                },
                {
                    "name": "\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "x": 60.0,
                    "y": 60.0,
                    "tooltip": "\u73b0\u5728\u4f60\u9700\u8981\u5236\u4f5c\u4e00\u4e9b\u82af\u7247\u7528\u4e8e\u90a3\u4e9b\u63a5\u53e3\u7ba1\u9053. \u8fd9\u4e9b\u82af\u7247\u8fd8\u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528,\u4f46\u8fd9\u662f\u5236\u4f5c\u5176\u4ed6\u82af\u7247\u7684\u6750\u6599.\u73b0\u5728\u662f\u65f6<br/>\u5019\u627e\u627eIC\u4f5c\u7269\u4ee5\u83b7\u53d6\u4f60\u6240\u9700\u7684\u67d3\u6599\u4e86.\u5982\u679cNEI\u5de6\u4fa7\u7684\u4e66\u7b7e\u680f\u6321\u4f4f\u4f60\u4e86,\u53ef\u4ee5\u5c06\u5176\u5173\u95ed(O),\u76f4\u5230\u6211\u4eec\u4fee\u590d<br/>\u8fd9\u4e2a\u95ee\u9898."
                },
                {
                    "name": "\u7269\u54c1\u5408\u6210\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "x": 60.0,
                    "y": 240.0,
                    "tooltip": "\u7269\u54c1\u5408\u6210\u82af\u7247\u5b8c\u5168\u7b26\u5408\u5b83\u7684\u540d\u5b57.\u5b83\u4e0d\u4ec5\u4ec5\u9002\u7528\u4e8e\u5de5\u4f5c\u53f0\u5408\u6210.\u4f60\u8fd8\u53ef\u4ee5\u5c06\u5b83\u4e0eGT\u673a\u5668\u4e00\u8d77\u4f7f\u7528.\u53ea\u9700\u5728\u5b83\u7684\u8bbe<br/>\u7f6e\u91cc\"Matrix\"\u9009\u9879,\u7c7b\u4f3cAE\u6837\u677f\u7ec8\u7aef,\u5de6\u4fa7\u4e3a\u5de5\u4f5c\u53f0\u5408\u6210\u8868\u6216\u673a\u5668\u8f93\u5165,\u53f3\u4fa7\u4e3a\u6210\u54c1\u8f93\u51fa. \u5b83\u4eec\u7684\u91cd<br/>\u8981\u7528\u9014\u4e4b\u4e00\u5c31\u662f\u4e0e\u6d41\u4f53\u50a8\u7f50\u6216\u8d85\u7ea7\u7f38\u4e00\u8d77\u4f7f\u7528,\u4ee5\u586b\u5145\u5355\u5143. \u6211\u5f3a\u70c8\u5efa\u8bae\u4e0d\u8981\u8fc7\u5ea6\u4f7f\u7528\u6b64\u82af\u7247.\u4ee5\u540e\u4f60\u53ef\u4ee5\u89e3\u9501<br/>AE\u8fdb\u884c\u81ea\u52a8\u5408\u6210."
                },
                {
                    "name": "\u5904\u7406\u786b\u5316\u6c22",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u786b\u5316\u6c22\u5355\u5143.png",
                    "x": 60.0,
                    "y": 288.0,
                    "tooltip": "\u73b0\u5728\u8ba9\u6211\u4eec\u5c06\u6240\u6709\u786b\u5316\u6c22\u8f6c\u5316\u4e3a\u786b\u9178. \u5c06\u5316\u5b66\u53cd\u5e94\u91dc\u8fde\u63a5\u5230\u7535\u6e90,\u6c34\u548c\u7269\u54c1\u63a5\u53e3\u7ba1\u9053.\u63d2\u5165\u7269\u54c1\u54cd\u5e94\u82af\u7247,\u8bbe\u7f6e<br/>\u4e3a\u63a5\u53d7\u786b\u5316\u6c22\u5355\u5143,\u7136\u540e\u63d2\u5165\u7269\u54c1\u62bd\u53d6\u82af\u7247,\u8bbe\u7f6e\u4e3a\u62bd\u53d6\u7a7a\u5355\u5143.\u5728\u84b8\u998f\u5ba4\u4e2d\u84b8\u998f\u7a00\u786b\u9178\u5e76\u5c06\u4ea7\u7269\u50a8\u5b58\u5728\u8d85\u7ea7\u7f38\u4e2d<br/>. \u606d\u559c\u4f60!\u4f60\u73b0\u5728\u53ef\u4ee5\u5b8c\u5168\u77f3\u6cb9\u81ea\u52a8\u8131\u786b,\u81ea\u52a8\u751f\u4ea7\u6c22\u6c14\u548c\u6c27\u6c14,\u8fd8\u53ef\u4ee5\u50a8\u5b58\u6240\u6709\u786b\u9178."
                },
                {
                    "name": "\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316",
                    "symbolSize": 31.200000000000003,
                    "x": 108.0,
                    "y": 240.0,
                    "tooltip": "\u8be5\u4efb\u52a1\u7ebf\u5c06\u5411\u4f60\u5c55\u793a\u5982\u4f55\u81ea\u52a8\u8131\u786b\u77f3\u6cb9\u4ea7\u54c1. \u4e00\u65e6\u89e3\u9501\u4e86LV\u84b8\u998f\u5ba4\u7684\u4efb\u52a1\u5e76\u62e5\u6709\u4e00\u4e9b\u805a\u4e59\u70ef\u7247,\u5c31\u56de\u5230\u8fd9\u91cc."
                },
                {
                    "name": "\u77f3\u6cb9\u8131\u786b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u542b\u786b\u8f7b\u71c3\u6cb9\u5355\u5143.png",
                    "x": 108.0,
                    "y": 288.0,
                    "tooltip": "\u73b0\u5728\u662f\u65f6\u5019\u5f00\u59cb\u5b9e\u9645\u8131\u786b\u4e86. \u4f7f\u7528\u4f60\u9009\u62e9\u7684\u5316\u5b66\u53cd\u5e94\u91dc,\u586b\u5145\u542b\u786b\u8f7b\u71c3\u6cb9\u5e76\u5c06\u5176\u8fde\u63a5\u5230\u7535\u6e90. \u73b0\u5728\u8fde\u63a5\u4e00\u4e2a\u8def<br/>\u7531\u63a5\u53e3\u7ba1\u9053,\u63d2\u5165\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247,\u8bbe\u7f6e\u4e3a\u59cb\u7ec8\u4fdd\u75594\u4e2a\u6c22\u5355\u5143.\u7136\u540e\u63d2\u5165\u7269\u54c1\u62bd\u53d6\u82af\u7247,\u8bbe\u7f6e\u4e3a\u62bd\u53d6\u786b\u5316\u6c22\u5355<br/>\u5143\u548c\u7a7a\u5355\u5143.\u6700\u540e\u53bb\u4f60\u7684\u50a8\u6c22\u8d85\u7ea7\u7f38,\u63d2\u5165\u4e00\u4e2a\u7269\u54c1\u5408\u6210\u82af\u7247,\u8bbe\u7f6e\u4e3a\u7528\u4e00\u4e2a\u7a7a\u5355\u5143\u5408\u6210\u4e00\u4e2a\u6c22\u5355\u5143.\u4f60\u7684\u77f3\u6cb9\u8131<br/>\u786b\u81ea\u52a8\u5316\u5c31\u5b8c\u6210\u4e86."
                },
                {
                    "name": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?",
                    "symbolSize": 31.200000000000003,
                    "x": 324.0,
                    "y": 204.0,
                    "tooltip": "\u5982\u679c\u4f60\u6b63\u5728\u7528,\u90a3\u4e48\u5b83\u4eec\u5c31\u4e0d\u9519,\u6211\u731c. \u81f3\u5c11\u542c\u8d77\u6765\u50cf\u8fd9\u4e48\u56de\u4e8b?"
                },
                {
                    "name": "\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "x": 144.0,
                    "y": 96.0,
                    "tooltip": "\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247\u529f\u80fd\u4e0e\u7269\u54c1\u54cd\u5e94\u82af\u7247\u7c7b\u4f3c,\u4f46\u4e0d\u662f\u7531\u4f60\u8bbe\u7f6e\u5b83\u63a5\u53d7\u7684\u7269\u54c1,\u5b83\u4f1a\u63a5\u53d7\u7bb1\u5b50\u4e2d\u5b58\u5728\u7684\u7269\u54c1."
                },
                {
                    "name": "\u7535\u89e3\u6c34",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6c34.png",
                    "x": 156.0,
                    "y": 288.0,
                    "tooltip": "\u73b0\u5728\u8ba9\u6211\u4eec\u81ea\u52a8\u5c06\u6c34\u7535\u89e3\u6210\u6c27\u6c14\u548c\u6c22\u6c14. \u4f60\u9700\u8981\u6c22\u6c14\u6765\u5904\u7406\u5927\u91cf\u7684\u4e1c\u897f,\u5305\u62ec\u8131\u786b,\u83b7\u5f97\u94a8\u4ee5\u53ca\u7528\u4e8e\u785d\u9178\u751f\u4ea7.<br/> \u6c27\u6c14\u4e5f\u662f\u6709\u7528\u7684,\u56e0\u4e3a\u6211\u786e\u4fe1\u4f60\u5728\u5236\u9020\u94a2\u65f6\u6ce8\u610f\u5230\u4e86\u8fd9\u4e00\u70b9. \u5982\u4f55\u8bbe\u7f6e\u5b83: \u653e\u4e0b\u7535\u89e3\u673a\u5e76\u5c06\u5176\u8fde\u63a5\u5230\u6c34\u548c\u7535<br/>.\u5c062\u4e2a\u8d85\u7ea7\u7f38\u653e\u5728\u9644\u8fd1.\u8bbe\u7f6e\u7535\u89e3\u673a\u4ee5\u4ea7\u751f\u6c22\u6c14\u548c\u6c27\u5355\u5143.\u4f7f\u7528\u666e\u901a\u7684GT\u6d41\u4f53\u7ba1\u9053\u5c06\u6c22\u6c14\u8f93\u51fa\u5230\u4e00\u4e2a\u8d85\u7ea7\u7f38\u4e2d<br/>.\u90a3\u5c31\u662f\u4f60\u7684\u50a8\u6c22\u7f38\u4e86.\u73b0\u5728\u5c06\u8def\u7531\u63a5\u53e3\u7ba1\u9053\u8fde\u63a5\u5230\u6240\u67093\u53f0\u673a\u5668.  \u5bf9\u4e8e\u8fde\u63a5\u7535\u89e3\u673a\u7684\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247\u8bbe\u7f6e<br/>,\u59cb\u7ec8\u5728\u673a\u5668\u5185\u4fdd\u5b582\u4e2a\u7a7a\u5355\u5143.\u8fd8\u5e94\u653e\u5165\u7269\u54c1\u62bd\u53d6\u82af\u7247,\u5e76\u8bbe\u7f6e\u8fc7\u6ee4\u62bd\u53d6\u6c27\u5355\u5143. \u73b0\u5728\u50a8\u5b58\u6c27\u6c14,\u5c06\u7269\u54c1\u54cd\u5e94<br/>\u82af\u7247\u8bbe\u7f6e\u4e3a\u63a5\u53d7\u6c27\u5355\u5143,\u800c\u7269\u54c1\u62bd\u53d6\u82af\u7247\u8bbe\u7f6e\u4e3a\u62bd\u53d6\u7a7a\u5355\u5143. \u73b0\u5728\u5c06\u4e00\u4e9b\u7a7a\u5355\u5143\u653e\u5165\u4f60\u7684\u9ed8\u8ba4\u50a8\u5b58\u7bb1\u4e2d,\u4e0d\u8981\u5fd8<br/>\u8bb0\u5728\u90a3\u91cc\u8fd8\u8981\u63d2\u5165\u4e00\u4e2a\u7269\u54c1\u5e7f\u64ad\u82af\u7247."
                },
                {
                    "name": "\u8fdb\u4e00\u6b65\u81ea\u52a8\u5316",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5916\u90e8\u5206\u914d\u5668.png",
                    "x": 264.0,
                    "y": 12.0,
                    "tooltip": "\u5982\u679c\u4f60\u60f3\u4ece\u8d27\u7269\u7ba1\u7406\u5668\u4e2d\u88c5\u8f7d\u6216\u5378\u8f7d\u8bb8\u591a\u4e0d\u540c\u7684\u7269\u54c1,\u7ba1\u9053\u53ef\u80fd\u4f1a\u53d8\u5f97\u975e\u5e38\u6df7\u4e71. \u4f60\u53ef\u4ee5\u5c06\u5916\u90e8\u5206\u914d\u5668\u653e\u7f6e\u5728\u8d27<br/>\u7269\u7ba1\u7406\u5668\u65c1\u8fb9,\u5b83\u5c06\u5e2e\u52a9\u4f60\u8bbf\u95ee\u8d27\u7269\u7ba1\u7406\u5668,\u53ef\u5728\u5206\u914d\u5668GUI\u4e2d\u6307\u5b9a\u7684\u4e0d\u540c\u680f\u4f4d.\u62bd\u51fa\u7269\u54c1\u975e\u5e38\u65b9\u4fbf!"
                },
                {
                    "name": "\u4e0e\u4e1c\u897f\u4e92\u52a8",
                    "symbolSize": 31.200000000000003,
                    "x": 60.0,
                    "y": 12.0,
                    "tooltip": "\u8fd9\u4e00\u5207\u90fd\u5f88\u597d,\u4f46\u8fd9\u4e9b\u7ba1\u9053\u90fd\u6ca1\u6709\u8fde\u63a5\u5230\u7bb1\u5b50\u548c\u673a\u5668. \u6211\u8be5\u600e\u4e48\u529e\u5462\uff1f \u6211\u5f88\u9ad8\u5174\u542c\u5230\u4f60\u7684\u63d0\u95ee. \u4f60\u9700\u8981\u4e00\u79cd<br/>\u7279\u6b8a\u7684\u7ba1\u9053. \u8fd9\u662f\u7528\u6765\u8fde\u63a5\u673a\u5668\u548c\u7bb1\u5b50\u7684. \u4f60\u5fc5\u987b\u7528\u6211\u4eec\u5373\u5c06\u5236\u4f5c\u7684\u82af\u7247\u6765\u8bbe\u7f6e\u5b83."
                },
                {
                    "name": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "x": 60.0,
                    "y": 192.0,
                    "tooltip": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u544a\u8bc9\u7ba1\u9053\u7cfb\u7edf\u4e2d\u7684\u6bcf\u4e2a\u8bbe\u5907,\u6b64\u82af\u7247\u6240\u8fde\u63a5\u7684\u5e93\u5b58\u4e2d\u6709\u54ea\u4e9b\u7269\u54c1,\u5982\u679c\u6709\u8bbe\u5907\u9700\u8981\u4ec0\u4e48,\u5b83\u4f1a\u53d1\u9001\u7ed9<br/>\u90a3\u4e9b\u8bbe\u5907. \u53f3\u952e\u5355\u51fb\u5b83\u4ee5\u8bbe\u7f6e\u8981\u4f20\u8f93\u7684\u7269\u54c1. \u5982\u679c\u7559\u7a7a\u5e76\u8bbe\u7f6e\u4e3a\u9ed1\u540d\u5355\u6a21\u5f0f(*blacklisted),<br/>\u5b83\u5c06\u4f20\u8f93\u6240\u6709\u7269\u54c1. \u5efa\u8bae\u5c06\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u4e0e\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247\u7ed3\u5408\u4f7f\u7528. \u8fd9\u6837\u6ea2\u51fa\u7684\u7269\u54c1\u4f1a\u5b58\u653e\u5165\u7f13\u5b58\u7bb1\u5b50\u4e2d<br/>,\u4f46\u662f\u4f60\u7684\u7cfb\u7edf\u7684\u5176\u4f59\u8bbe\u5907\u4ecd\u53ef\u4f7f\u7528\u8fd9\u4e9b\u7269\u54c1."
                },
                {
                    "name": "\u7269\u54c1\u62bd\u53d6\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "x": 60.0,
                    "y": 144.0,
                    "tooltip": "\u8be5\u82af\u7247\u5c06\u4ece\u8fde\u63a5\u5e93\u5b58\u4e2d\u62bd\u53d6\u7269\u54c1. \u7136\u540e,\u62bd\u53d6\u7684\u7269\u54c1\u4f1a\u67e5\u627e\u5e26\u6709\u7269\u54c1\u54cd\u5e94\u82af\u7247\u7684\u7ba1\u9053,\u5176\u4e2d\u662f\u5426\u6709\u53ef\u7528\u7684\u7a7a\u95f2\u7a7a<br/>\u95f4.\u5982\u679c\u5b83\u4eec\u6ca1\u6709\u627e\u5230,\u5b83\u4eec\u5c06\u8f6c\u5230\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247\u6240\u5728\u7684\u9ed8\u8ba4\u5b58\u50a8\u7bb1. \u5982\u679c\u4f60\u60f3\u8981\u62bd\u53d6\u6240\u6709\u7269\u54c1,\u8bf7\u5c06\u8fc7\u6ee4<br/>(Filter)\u7559\u7a7a\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9ed1\u540d\u5355\u6a21\u5f0f(*blacklisted)."
                },
                {
                    "name": "\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "x": 24.0,
                    "y": 96.0,
                    "tooltip": "\u8be5\u82af\u7247\u53ef\u5c06\u7269\u54c1\u5b58\u50a8\u5230\u8fde\u63a5\u7684\u5e93\u5b58(\u5982\u7bb1\u5b50)\u4e2d.\u5b83\u4e3a\u6ca1\u6709\u5176\u4ed6\u5730\u65b9\u53ef\u53bb\u7684\u7269\u54c1\u6307\u5b9a\u5b58\u50a8\u7a7a\u95f4. \u5f3a\u70c8\u5efa\u8bae\u5728\u6bcf\u4e2a<br/>\u7ba1\u9053\u7cfb\u7edf\u4e2d\u90fd\u6709\u4e00\u4e2a\u9ed8\u8ba4\u5b58\u50a8\u7a7a\u95f4,\u5426\u5219\u4f1a\u53d1\u751f\u4e0d\u597d\u7684\u4e8b\u60c5. \u6700\u9002\u5408\u642d\u914d\u4e00\u4e9b\u5927\u7bb1\u5b50(\u5982\u94bb\u77f3\u7bb1\u5b50).\u770b\u8d77\u6765\u8fd9<br/>\u73a9\u610f\u6709\u70b9bug,\u6240\u4ee5\u5148\u505a\u4e00\u4e2a\u8bd5\u8bd5,\u522b\u4e00\u4e0b\u505a\u592a\u591a.\u4f60\u53ef\u80fd\u5fc5\u987b\u7528\u4e00\u4e2a\u666e\u901a\u7684\u7269\u54c1\u54cd\u5e94\u82af\u7247\u7136\u540e\u624b\u52a8\u6dfb\u52a0\u90a3\u4e9b\u53ef<br/>\u80fd\u8fc7\u8f7d\u7684\u7269\u54c1."
                },
                {
                    "name": "\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "x": 96.0,
                    "y": 96.0,
                    "tooltip": "\u8be5\u82af\u7247\u53ef\u5c06\u7269\u54c1\u5b58\u50a8\u5230\u8fde\u63a5\u7684\u5e93\u5b58(\u5982\u7bb1\u5b50)\u4e2d. \u5b83\u53ea\u4f1a\u5b58\u50a8\u8fc7\u6ee4(Filter)\u8bbe\u7f6e\u7684\u7269\u54c1. \u8fd9\u79cd\u82af\u7247\u4e0d<br/>\u4f1a\u4e3b\u52a8\u8bf7\u6c42\u7269\u54c1,\u5b83\u4eec\u4ec5\u4f5c\u4e3a\u7269\u54c1\u7684\u76ee\u7684\u5730.\u4f60\u53ef\u4ee5\u901a\u8fc7\u53f3\u952e\u5355\u51fb\u82af\u7247\u6253\u5f00\u83dc\u5355. \u5728\u90a3\u91cc\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u5b83\u63a5\u53d7\u54ea\u4e9b<br/>\u7269\u54c1\u4ee5\u53ca\u4f18\u5148\u7ea7. \u7269\u54c1\u5c06\u9996\u5148\u8f6c\u5230\u5177\u6709\u66f4\u9ad8\u4f18\u5148\u7ea7\u7684\u7269\u54c1\u54cd\u5e94\u82af\u7247."
                },
                {
                    "name": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247",
                    "symbolSize": 31.200000000000003,
                    "x": 108.0,
                    "y": 192.0,
                    "tooltip": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247\u4f1a\u67e5\u770b\u6240\u8fde\u63a5\u7684\u5e93\u5b58\u5e76\u4fdd\u7559\u4e00\u5b9a\u6570\u91cf\u7684\u7269\u54c1. \u5982\u679c\u8be5\u7269\u54c1\u88ab\u79fb\u9664,\u5982\u679c\u7cfb\u7edf\u5185\u6709\u8fd9\u79cd\u7269\u54c1,\u5e76<br/>\u4e14\u53ef\u4ee5\u88ab\u53d1\u9001,\u5b83\u5c06\u6bcf\u9694\u51e0\u79d2\u949f\u5c31\u5411\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u53d1\u9001\u8bf7\u6c42. \u57fa\u672c\u4e0a\u5c31\u50cf\u4e00\u4e2a\u8ba8\u538c\u7684\u5b69\u5b50.\u4e0d\u8fc7\u5b83\u771f\u7684\u5f88\u6709\u7528.<br/> \u4f8b\u5982\u4f60\u60f3\u8981\u4e00\u4e2a\u603b\u4f1a\u670964\u5757\u5706\u77f3\u548c\u6ce5\u571f\u7684\u7bb1\u5b50,\u5982\u679c\u4f60\u62ff\u8d70\u5b83\u4eec\u4f1a\u9a6c\u4e0a\u8865\u5145\uff1f\u8fd9\u5bb6\u4f19\u5c31\u975e\u5e38\u9002\u5408\u8fd9\u4efd\u5de5\u4f5c. <br/>\u8fd9\u5bf9\u4e8e\u4e00\u4e9b\u673a\u5668\u4fdd\u7559\u5e93\u5b58\u6765\u8bf4\u975e\u5e38\u68d2.  \u8fde\u63a5\u5230GT\u673a\u5668\u65f6,3x3\u7684\u5de6\u4e0a\u69fd\u76f8\u5f53\u4e8e\u673a\u5668\u7684\u5de6\u4fa7\u69fd.  \u60f3\u8981\u5316<br/>\u5b66\u53cd\u5e94\u91dc\u59cb\u7ec8\u4fdd\u75593\u4e2a\u6c22\u5355\u5143,\u4f60\u53ea\u9700\u8981\u52a0\u5165\u6c2e\u5c31\u53ef\u4ee5\u5236\u4f5c\u6c28\u4e48,\u5b83\u5c31\u5f88\u5408\u9002. \u8fd9\u91cc\u6709\u4e9b\u82af\u7247\u7ed9\u4f60."
                },
                {
                    "name": "\u4ea4\u53c9\u70b9",
                    "symbolSize": 31.200000000000003,
                    "x": 108.0,
                    "y": 12.0,
                    "tooltip": "\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u5904\u7406\u4ea4\u53c9\u70b9\u5462\uff1f \u6211\u4eec\u4f7f\u7528\u8fd9\u79cd\u4ea4\u9519\u7ba1\u9053.\u5b83\u4eec\u5f88\u806a\u660e,\u5b83\u4eec\u4f1a\u628a\u6240\u6709\u4e1c\u897f\u9001\u5230\u9700\u8981\u53bb\u7684\u5730\u65b9,\u6240\u4ee5<br/>\u5982\u679c\u4f60\u5efa\u7acb\u4e00\u4e2a\u7ba1\u9053\u7cfb\u7edf,\u4e00\u5b9a\u8981\u628a\u8fd9\u79cd\u7ba1\u9053\u653e\u5728\u4ea4\u53c9\u70b9."
                },
                {
                    "name": "\u8ba9\u6211\u4eec\u505a\u4e9b\u7ba1\u9053",
                    "symbolSize": 31.200000000000003,
                    "x": 156.0,
                    "y": 12.0,
                    "tooltip": "\u9996\u5148,\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u7ba1\u9053\u6765\u8fde\u63a5\u5404\u79cd\u4e1c\u897f. \u4e0d\u8981\u5728\u4ea4\u53c9\u70b9\u4f7f\u7528\u8fd9\u4e9b\u7ba1\u9053,\u5426\u5219\u7269\u54c1\u5c06\u968f\u673a\u9009\u62e9\u54ea\u6761\u8def\u5f84,\u800c\u4f60\u663e<br/>\u7136\u4e0d\u5e0c\u671b\u8fd9\u6837.\u8bf7\u6ce8\u610f,\u7ea2\u77f3\u8ba1\u5212\u7684\u81ea\u52a8\u5316\u53ef\u80fd\u4f1a\u9020\u6210\u5ef6\u8fdf,\u6240\u4ee5\u5728\u670d\u52a1\u5668\u4e0a\u5c3d\u91cf\u4e0d\u8981\u5927\u89c4\u6a21\u4f7f\u7528,\u7b49\u5230\u89e3\u9501AE<br/>\u540e\u518d\u5f00\u59cb\u4f60\u7684\u5168\u9762\u81ea\u52a8\u5316\u8ba1\u5212\u5427. \u5728\u5355\u673a\u7684\u8bdd\u5c31\u968f\u4f60\u4e86,\u4f46\u522b\u5fd8\u4e86AE\u7684\u529f\u80fd\u66f4\u52a0\u5f3a\u5927."
                },
                {
                    "name": "\u66f4\u591a\u7684\u6811\u79cd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6a61\u80f6\u6811\u6811\u82d7.png",
                    "x": 324.0,
                    "y": 12.0,
                    "tooltip": "\u6807\u51c6\u7684\u6728\u6750\u5207\u5272\u673a(\u53f2\u8482\u592b\u77ff\u8f66)\u53ea\u80fd\u780d\u4f10(\u548c\u91cd\u65b0\u79cd\u690d)\u539f\u7248\u6811. \u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5176\u4ed6mod\u7684\u6811\u82d7,\u90a3\u4e48\u8fd9\u4e2a<br/>\u63d2\u4ef6\u4f1a\u6d3e\u4e0a\u7528\u573a. \u8c01\u77e5\u9053-\u4e5f\u8bb8\u4f60\u5df2\u7ecf\u538c\u5026\u4e86\u7528\u6728\u9f99\u5934\u70b9\u51fb\u6a61\u80f6\u6811."
                },
                {
                    "name": "\u8def\u7531\u9700\u6c42\u7ba1\u9053",
                    "symbolSize": 31.200000000000003,
                    "x": 12.0,
                    "y": 192.0,
                    "tooltip": "\u8fd9\u4e2a\u7ba1\u9053\u8ba9\u4f60\u4ece\u7cfb\u7edf\u4e2d\u8bf7\u6c42\u7269\u54c1.\u5b83\u53ef\u663e\u793a\u7cfb\u7edf\u4e2d\u6240\u6709\u53ef\u7528\u7684\u7269\u54c1(\u5305\u62ec\u7269\u54c1\u5e7f\u64ad\u82af\u7247,\u4ee5\u53ca\u53ef\u4ee5\u901a\u8fc7\u7269\u54c1\u5408\u6210\u82af<br/>\u7247\u5408\u6210\u7684\u4ea7\u7269)."
                },
                {
                    "name": "\u5bf9\u8131\u786b\u81ea\u52a8\u5316\u7684\u5956\u52b1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6218\u5229\u54c1\u888b(Tier 1 LV).png",
                    "x": 12.0,
                    "y": 288.0,
                    "tooltip": "\u5982\u679c\u4f60\u5df2\u7ecf\u6b63\u786e\u5730\u5b8c\u6210\u4e86\u6240\u6709\u4e8b\u60c5,\u90a3\u4e48\u6700\u5927\u7684\u597d\u5904\u5c31\u662f\u8ba9\u4f60\u7684\u4e1c\u897f\u81ea\u52a8\u5316\u4e86.\u4f46\u662f\u8fd9\u91cc\u8fd8\u6709\u66f4\u591a\u7684\u5956\u52b1. \u540e\u9762<br/>\u51e0\u6b65\u5c31\u662f\u81ea\u52a8\u5316\u5236\u9020\u805a\u4e59\u70ef\u548c\u785d\u9178. \u4f7f\u7528\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247,\u4f60\u53ef\u4ee5\u968f\u65f6\u4fdd\u7559\u4e00\u5b9a\u6570\u91cf\u7684\u7269\u54c1,\u5f53\u4f60\u53d6\u51fa\u5355\u5143,<br/>\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\u65f6,\u4f60\u7684\u81ea\u52a8\u5316\u7cfb\u7edf\u5c06\u81ea\u52a8\u751f\u4ea7\u66f4\u591a."
                },
                {
                    "name": "\u7b80\u5355\u7684\u5b58\u50a8\u7cfb\u7edf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u62bd\u5c49\u7ba1\u7406\u5668.png",
                    "x": 12.0,
                    "y": 240.0,
                    "tooltip": "\u5728\u62bd\u5c49\u7ba1\u7406\u5668\u4e0a\u4f7f\u7528\u5927\u91cf\u7684\u8f93\u5165/\u8f93\u51fa\u8bbe\u5907\u5c06\u4f1a\u4e25\u91cd\u5f71\u54cdTPS! \u5982\u679c\u4f60\u5728\u516c\u5171\u670d\u52a1\u5668\u4e0a,\u8bf7\u52ff\u4f7f\u7528\u62bd\u5c49\u9635\u5217,<br/>\u5426\u5219\u4f60\u7684\u62bd\u5c49\u9635\u5217\u53ef\u80fd\u4f1a\u88ab\u5220\u9664,\u800c\u4f60\u4f1a\u88ab\u5c01\u7981.\u662f\u65f6\u5019\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u7cfb\u7edf\u6765\u5b58\u50a8\u4f60\u7684\u4e1c\u897f\u4e86. \u653e\u4e0b\u62bd\u5c49\u7ba1\u7406<br/>\u5668\u5e76\u5c06\u62bd\u5c49\u653e\u5728\u5176\u5468\u56f4.\u5c06\u8def\u7531\u63a5\u53e3\u7ba1\u9053\u8fde\u63a5\u5230\u62bd\u5c49\u7ba1\u7406\u5668,\u5e76\u5c06\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247\u548c\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u653e\u5165\u5176\u4e2d.\u4e0d<br/>\u8981\u5fd8\u8bb0\u8bbe\u7f6e\u7269\u54c1\u5e7f\u64ad\u82af\u7247\u4f20\u8f93\u6240\u6709\u7269\u54c1(\u5c06\u8fc7\u6ee4(Filter)\u7559\u7a7a\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9ed1\u540d\u5355\u6a21\u5f0f(*blackl<br/>isted)). \u73b0\u5728\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u7bb1\u5b50,\u8fde\u63a5\u7740\u8def\u7531\u53e3\u7ba1\u9053\u4e14\u7ba1\u9053\u5df2\u63d2\u5165\u7269\u54c1\u62bd\u53d6\u82af\u7247,\u4f60\u5c31\u53ef\u4ee5\u4ece\u4f60\u7684\u5b58\u50a8<br/>\u7cfb\u7edf\u4e2d\u8bf7\u6c42\u7269\u54c1,\u800c\u4f60\u653e\u5165\u7684\u6240\u6709\u7269\u54c1\u90fd\u5c06\u88ab\u5206\u7c7b\u5b58\u5165\u5b58\u50a8\u7cfb\u7edf\u4e2d."
                },
                {
                    "name": "\u5c0f\u5956\u52b1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6218\u5229\u54c1\u888b(Tier 1 LV).png",
                    "x": 156.0,
                    "y": 192.0,
                    "tooltip": "\u8fd9\u662f\u5236\u4f5c\u6240\u6709\u82af\u7247\u7684\u5c0f\u5956\u52b1."
                },
                {
                    "name": "\u50a8\u5b58\u6db2\u4f53",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8d85\u7ea7\u7f38 I.png",
                    "x": 156.0,
                    "y": 240.0,
                    "tooltip": "\u9996\u5148,\u6211\u4eec\u5e94\u8be5\u5728\u4e00\u4e9b\u5730\u65b9\u5b58\u653e\u6211\u4eec\u5c06\u4f7f\u7528\u7684\u6240\u6709\u6db2\u4f53. \u9700\u89813\u4e2a\u8d85\u7ea7\u7f38.\u5982\u679c\u4f60\u5bf9\u5b83\u4eec\u7684\u7528\u9014\u611f\u5174\u8da3:1\u4e3a\u6c27<br/>\u6c141\u4e3a\u6c22\u6c141\u4e3a\u786b\u9178"
                },
                {
                    "name": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u77ff\u8f66\u88c5\u914d\u673a.png",
                    "x": 216.0,
                    "y": 108.0,
                    "tooltip": "\u597d\u5427,\u4e5f\u8bb8\u4e0d\u662f\u7b2c\u4e00\u79cd\u81ea\u52a8\u5316.\u4f46\u4e00\u5b9a\u662f\u6700\u6d6a\u6f2b\u7684!\u9996\u5148,\u4f60\u9700\u8981\u4e00\u53f0\u77ff\u8f66\u7ec4\u88c5\u673a."
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
                    "source": "\u81ea\u52a8\u88c5(\u5378)\u8f7d",
                    "target": "\u9ad8\u7ea7\u63a2\u6d4b\u8f68\u9053"
                },
                {
                    "source": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316",
                    "target": "\u7b80\u5355\u7684\u77ff\u8f66"
                },
                {
                    "source": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316",
                    "target": "\u81ea\u52a8\u88c5(\u5378)\u8f7d"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u7164\u70ad\u5f15\u64ce"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u6316\u6398"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u519c\u4e1a"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u50a8\u5b58",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u66f4\u591a\u7684\u5b58\u50a8\u7a7a\u95f4"
                },
                {
                    "source": "\u592a\u9633\u80fd",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u50a8\u5b58"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u5730\u70ed\u5f15\u64ce"
                },
                {
                    "source": "\u7b80\u5355\u7684\u77ff\u8f66",
                    "target": "\u77ff\u8f66\u6a21\u5757:\u4f10\u6728"
                },
                {
                    "source": "\u4e0e\u4e1c\u897f\u4e92\u52a8",
                    "target": "\u82af\u7247"
                },
                {
                    "source": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247",
                    "target": "\u7269\u54c1\u5408\u6210\u82af\u7247"
                },
                {
                    "source": "\u77f3\u6cb9\u8131\u786b",
                    "target": "\u5904\u7406\u786b\u5316\u6c22"
                },
                {
                    "source": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247",
                    "target": "\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u7269\u54c1\u5408\u6210\u82af\u7247",
                    "target": "\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u7535\u89e3\u6c34",
                    "target": "\u77f3\u6cb9\u8131\u786b"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u592a\u9633\u80fd\u5f15\u64ce",
                    "target": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u5730\u70ed\u5f15\u64ce",
                    "target": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u7164\u70ad\u5f15\u64ce",
                    "target": "\u8fd8\u6709\u4eba\u4f1a\u7528\u5417?"
                },
                {
                    "source": "\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "target": "\u52a8\u6001\u7269\u54c1\u54cd\u5e94\u82af\u7247"
                },
                {
                    "source": "\u50a8\u5b58\u6db2\u4f53",
                    "target": "\u7535\u89e3\u6c34"
                },
                {
                    "source": "\u81ea\u52a8\u88c5(\u5378)\u8f7d",
                    "target": "\u8fdb\u4e00\u6b65\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u4ea4\u53c9\u70b9",
                    "target": "\u4e0e\u4e1c\u897f\u4e92\u52a8"
                },
                {
                    "source": "\u7269\u54c1\u62bd\u53d6\u82af\u7247",
                    "target": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247"
                },
                {
                    "source": "\u7269\u54c1\u54cd\u5e94\u82af\u7247",
                    "target": "\u7269\u54c1\u62bd\u53d6\u82af\u7247"
                },
                {
                    "source": "\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247",
                    "target": "\u7269\u54c1\u62bd\u53d6\u82af\u7247"
                },
                {
                    "source": "\u82af\u7247",
                    "target": "\u7269\u54c1\u8fc7\u8f7d\u54cd\u5e94\u82af\u7247"
                },
                {
                    "source": "\u82af\u7247",
                    "target": "\u7269\u54c1\u54cd\u5e94\u82af\u7247"
                },
                {
                    "source": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247",
                    "target": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247"
                },
                {
                    "source": "\u8ba9\u6211\u4eec\u505a\u4e9b\u7ba1\u9053",
                    "target": "\u4ea4\u53c9\u70b9"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def",
                    "target": "\u8ba9\u6211\u4eec\u505a\u4e9b\u7ba1\u9053"
                },
                {
                    "source": "\u77ff\u8f66\u6a21\u5757:\u4f10\u6728",
                    "target": "\u66f4\u591a\u7684\u6811\u79cd"
                },
                {
                    "source": "\u7b2c2\u9636(MV)",
                    "target": "\u66f4\u591a\u7684\u6811\u79cd"
                },
                {
                    "source": "\u7269\u54c1\u5e7f\u64ad\u82af\u7247",
                    "target": "\u8def\u7531\u9700\u6c42\u7ba1\u9053"
                },
                {
                    "source": "\u5904\u7406\u786b\u5316\u6c22",
                    "target": "\u5bf9\u8131\u786b\u81ea\u52a8\u5316\u7684\u5956\u52b1"
                },
                {
                    "source": "\u8def\u7531\u9700\u6c42\u7ba1\u9053",
                    "target": "\u7b80\u5355\u7684\u5b58\u50a8\u7cfb\u7edf"
                },
                {
                    "source": "\u7269\u54c1\u5806\u6808\u7ef4\u62a4\u82af\u7247",
                    "target": "\u5c0f\u5956\u52b1"
                },
                {
                    "source": "\u77f3\u6cb9\u63d0\u7eaf",
                    "target": "\u50a8\u5b58\u6db2\u4f53"
                },
                {
                    "source": "\u77f3\u6cb9\u8131\u786b\u81ea\u52a8\u5316",
                    "target": "\u50a8\u5b58\u6db2\u4f53"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u7194\u878d\u7ea2\u77f3?",
                    "target": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#1",
                    "target": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
                },
                {
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#4",
                    "target": "\u7b2c\u4e00\u4e2a\u81ea\u52a8\u5316"
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