
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
                    "name": "\u504f\u4e8c\u7532\u80bc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/856.png",
                    "x": 120.0,
                    "y": 432.0,
                    "data": "\u8981\u5236\u9020\u504f\u4e8c\u7532\u80bc,\u4f60\u9700\u8981\u5c062\u5355\u4f4d\u7684\u80bc\u548c2\u5355\u4f4d\u7684\u7532\u919b\u4ee5\u53ca4\u5355\u4f4d\u7684\u6c22\u6c14\u914d\u5408\u7532\u919b\u50ac\u5316\u5242\u5728\u5316\u5de5\u5382\u5185\u8fdb\u884c\u53cd\u5e94.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADWA==",
                    "tooltip": "<strong>\u504f\u4e8c\u7532\u80bc</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7532\u919b"
                },
                {
                    "name": "2-\u4e59\u57fa\u84bd\u6c22\u918c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2690.png",
                    "x": 120.0,
                    "y": 156.0,
                    "data": "\u60f3\u8981\u5236\u5907\u8fd9\u79cd\u542c\u8d77\u6765\u5f88\u5389\u5bb3\u7684\u5316\u5b66\u7269\u8d28,\u4f60\u9700\u8981\u5c06\u540d\u5b57\u7c7b\u4f3c\u76842-\u4e59\u57fa\u84bd\u918c\u548c\u6c22\u914d\u5408\u6a59\u8272\u50ac\u5316\u5242\u5728\u5316\u5de5\u5382\u5185\u7ed3\u5408.%n%n[note]\u4f60\u9700\u8981\u94af\u6765\u5236\u9020\u50ac\u5316\u5242.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKgg==",
                    "tooltip": "<strong>2-\u4e59\u57fa\u84bd\u6c22\u918c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2-\u4e59\u57fa\u84bd\u918c</br>\u518d\u6c89...\u4ec0\u4e48?"
                },
                {
                    "name": "2-\u4e59\u57fa\u84bd\u918c",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2691.png",
                    "x": 180.0,
                    "y": 156.0,
                    "data": "\u8fd8\u6709\u4eba\u60f3\u77e5\u9053\u4e3a\u4ec0\u4e48\u8fd9\u4e9b\u5316\u5b66\u7269\u8d28\u7684\u540d\u79f0\u4e2d\u6709\u6570\u5b57\u5417? \u6ca1\u6709? \u53ea\u6709\u6211? \u7ee7\u7eed\u524d\u8fdb,\u5c06\u90bb\u82ef\u4e8c\u7532\u9178\u9150\u7c89\u548c\u4e59\u82ef\u5728\u5316\u5de5\u5382\u5185\u7ed3\u5408\u4ee5\u5236\u59072-\u4e59\u57fa\u84bd\u918c.%n%n\u987a\u4fbf\u4e00\u63d0,\u53e6\u4e00\u4e2a\u914d\u65b9\u5728\u5904\u7406\u94fe\u7684\u540e\u671f\u4f1a\u7528\u5230. \u4f60\u53ef\u4ee5\u5faa\u73af\u4f7f\u75282-\u4e59\u57fa\u84bd\u918c,\u5982\u679c\u4f60\u4e0d\u6253\u7b97\u6269\u5927\u4ea7\u80fd\u7684\u8bdd,\u8fd9\u4e9b\u5c31\u591f\u4e86.%n%n[note]\u4e0b\u4e00\u4e2a\u4efb\u52a1,\u4f60\u4f1a\u9700\u8981\u94af.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKgw==",
                    "tooltip": "<strong>2-\u4e59\u57fa\u84bd\u918c</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u600e\u4e48\u5ff5?"
                },
                {
                    "name": "\u66f4\u597d\u7684\u706b\u7bad\u71c3\u6599",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6913291740074859566.png",
                    "x": 132.0,
                    "y": 84.0,
                    "data": "\u5982\u679c\u4f60\u60f3\u53bb\u6bd4\u706b\u661f\u66f4\u8fdc\u7684\u592a\u7a7a,\u90a3\u4e48\u4f60\u9700\u8981\u66f4\u597d\u7684\u706b\u7bad\u71c3\u6599.\u4ece\u8fd9\u91cc\u5f00\u59cb,\u53ea\u6709\u4e00\u4e2a\u9009\u62e9.\u5316\u5de5\u5382\u662f\u4ea7\u7ebf\u7684\u6838\u5fc3.\u5982\u679c\u4f60\u8fd8\u6ca1\u505a\u5316\u5de5\u5382,\u4f60\u5e94\u8be5\u7814\u7a76\u4e00\u4e0b.\u5b83\u6709\u56db\u4e2a\u72ec\u7acb\u7684\u7b49\u7ea7\u7cfb\u7edf,\u4e00\u5f00\u59cb\u53ef\u80fd\u6709\u70b9\u4ee4\u4eba\u751f\u754f,\u4f46\u6709\u672cMC\u624b\u518c\u53ef\u4ee5\u544a\u8bc9\u4f60\u5173\u4e8e\u5b83\u7684\u5168\u90e8\u4fe1\u606f.\u53e6\u5916,\u8bf7\u67e5\u770bGT++\u4efb\u52a1\u680f\u4e2d\u7684\u5316\u5de5\u5382\u4efb\u52a1.%n%n[warn]\u8bf7\u6ce8\u610f\u4e0d\u8981\u53c2\u8003NEI\u9884\u89c8\u5316\u5de5\u5382,\u5b83\u662f\u9519\u7684.[/warn]%n%nWIKI \u57c3\u514b\u68ee\u7f8e\u5b5a\u5316\u5de5\u5382\uff1ahttps://gtnh.huijiwiki.com/wiki/\u57c3\u514b\u68ee\u7f8e\u5b5a\u5316\u5de5\u5382",
                    "quest_id": "qz7VHLFvQx6gDw3KZDIj0g==",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u706b\u7bad\u71c3\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>RP-1\u706b\u7bad\u71c3\u6599</br>\u785d\u57fa!(\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9)"
                },
                {
                    "name": "\u751f\u6210\u6c27\u6c14\u7684\u66f4\u597d\u65b9\u5f0f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8825008741784511339.png",
                    "x": 1128.0,
                    "y": 276.0,
                    "data": "\u8fd9\u662f\u4e00\u79cd\u4e00\u4f53\u5316\u6c27\u6c14\u751f\u4ea7\u65b9\u6848.\u53ea\u9700\u8981\u7ed9\u5b83\u4e00\u4e2a\u5c0f\u9ea6\u79cd\u5b50\u7136\u540e\u6301\u7eed\u63d0\u4f9b\u80fd\u91cf\u5373\u53ef.",
                    "quest_id": "wB7bY61aRE6Fh0VOZjeclQ==",
                    "tooltip": "<strong>\u751f\u6210\u6c27\u6c14\u7684\u66f4\u597d\u65b9\u5f0f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u706b\u7bad"
                },
                {
                    "name": "\u9ad8\u7ea7\u6676\u5706",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/831.png",
                    "x": 408.0,
                    "y": 60.0,
                    "data": "\u66f4\u5148\u8fdb\u7684\u6676\u5706\u53ef\u4ee5\u5236\u9020\u66f4\u5148\u8fdb\u7684\u673a\u5668,\u6bd4\u5982\u9ad8\u7ea7\u592a\u9633\u80fd\u677f\u548c\u8fdb\u5165\u661f\u8fb0\u5927\u6d77\u6700\u91cd\u8981\u7684\u7ec8\u6781\u5de5\u4f5c\u53f0. \u9ad8\u7ea7\u6676\u5706\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5efa\u7acb\u7a7a\u95f4\u7ad9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADPw==",
                    "tooltip": "<strong>\u9ad8\u7ea7\u6676\u5706</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6676\u57061"
                },
                {
                    "name": "\u6c14\u5bc6\u95f8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1465.png",
                    "x": 636.0,
                    "y": 84.0,
                    "data": "\u6c14\u5bc6\u95f8\u662f\u4e00\u79cd\u6c14\u5bc6\u95e8,\u7528\u4e8e\u8fde\u901a\u5c01\u95ed\u7684\u623f\u95f4\u4e4b\u95f4\u6216\u5c01\u95ed\u7684\u623f\u95f4\u4e0e\u5916\u90e8\u7a7a\u95f4. \u5b83\u7531\u6c14\u5bc6\u6846\u67b6\u548c\u4e00\u4e2a\u6c14\u95f8\u63a7\u5236\u5668\u5236\u6210.%n%n\u6c14\u5bc6\u95f8\u5c06\u5728\u623f\u95f4\u5173\u95ed\u65f6\u4fdd\u5b58\u5ba4\u5185\u7a7a\u6c14. \u4f46\u662f\u5f53\u6c14\u95f8\u6253\u5f00\u65f6,\u623f\u95f4\u4e0d\u518d\u5bc6\u5c01,\u5fc5\u987b\u4f69\u6234\u6c27\u6c14\u88c5\u7f6e,\u76f4\u5230\u6c14\u95f8\u5173\u95ed. \u5728\u6781\u7aef\u6e29\u5ea6\u7684\u73af\u5883\u4e2d,\u8fd8\u5fc5\u987b\u88c5\u5907\u9694\u70ed\u5957\u88c5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFuQ==",
                    "tooltip": "<strong>\u6c14\u5bc6\u95f8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c27\u6c14\u4f9b\u7ed9\u5668"
                },
                {
                    "name": "\u5f27\u5149\u706f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1464.png",
                    "x": 984.0,
                    "y": 132.0,
                    "data": "\u5f27\u5149\u706f\u662f\u4e00\u79cd\u975e\u5e38\u660e\u4eae\u7684\u706f. \u5b83\u662f\u6307\u5411\u6027\u7684\u2014\u2014\u2014\u2014\u610f\u5473\u7740\u5b83\u4f1a\u5728\u6240\u671d\u5411\u7684\u65b9\u5411\u6295\u5c04\u66f4\u4eae\u7684\u5149\u7ebf. \u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u6273\u624b\u65cb\u8f6c\u5176\u671d\u5411.%n%n\u5305\u62ec\u5f27\u5149\u706f\u5728\u5185,\u9760\u8fd1\u5149\u6e90\u7684\u65b9\u5757\u7684\u4eae\u5ea6\u4e3a:%n%n\u7ea2\u77f3\u706b\u628a:3-6%n\u706b\u628a:9-12%n\u8424\u77f3:10-13%n\u5f27\u5149\u706f:13-14%n%n\u5f27\u5149\u706f\u53ef\u4ee5\u7167\u4eae\u76f8\u5f53\u5927\u7684\u533a\u57df--\u4f8b\u5982\u6574\u4e2a\u623f\u95f4--\u4f7f\u5176\u5149\u7167\u7b49\u7ea7\u4e3a14:\u51e0\u4e4e\u548c\u767d\u663c\u65f6\u4e00\u6837\u660e\u4eae.%n%n\u5f27\u5149\u706f\u4e5f\u5177\u6709\u4e3b\u52a8\u9a71\u9010\u602a\u7269\u7684\u6709\u8da3\u7279\u6027. \u5b83\u7684\u5149\u7ebf\u4e0d\u4ec5\u53ef\u4ee5\u9632\u6b62\u602a\u7269\u5728\u9644\u8fd1\u751f\u6210,\u800c\u4e14\u65e0\u6bd4\u660e\u4eae,\u4ee5\u81f3\u4e8e\u602a\u7269\u9760\u8fd1\u5b83\u4eec,\u5c31\u4f1a\u8f6c\u8eab\u8d70\u5f00. \u8fd9\u79cd\u602a\u7269\u9a71\u9010\u6548\u679c\u88ab\u8bc1\u5b9e\u53ef\u7528\u4e8e:\u50f5\u5c38\u3001\u9ab7\u9ac5\u3001\u722c\u884c\u8005\u3001\u8fdb\u5316\u7684\u50f5\u5c38\u3001\u8fdb\u5316\u7684\u9ab7\u9ac5\u3001\u8fdb\u5316\u7684\u722c\u884c\u8005. \u5b83\u4e5f\u9002\u7528\u4e8e\u5176\u4ed6\u7c7b\u578b\u7684\u602a\u7269(\u9700\u8981\u786e\u8ba4). \u4f46\u5b83\u5bf9\u8718\u86db(\u5b83\u4eec\u4e0d\u6015\u9633\u5149)\u6216boss\u602a\u6ca1\u6709\u5f71\u54cd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFuA==",
                    "tooltip": "<strong>\u5f27\u5149\u706f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u706b\u7bad"
                },
                {
                    "name": "\u4e00\u4efd\u5956\u52b1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/214.png",
                    "x": 456.0,
                    "y": 216.0,
                    "data": "\u4e00\u6b65\u6b65\u8d70\u5230\u8fd9\u91cc\u53ef\u4e0d\u5bb9\u6613!\u4e0d\u8fc7,\u62b5\u8fbe\u6708\u7403\u4ec5\u4ec5\u662f\u65c5\u7a0b\u7684\u5f00\u59cb,\u56e0\u4e3a\u4ee5\u540e\u6e38\u620f\u4e2d\u8fd8\u6709\u66f4\u5f3a\u5927\u800c\u66f4\u6709\u8da3\u7684\u4e1c\u897f.\u4f60\u5df2\u7ecf\u8bc1\u660e\u4e86\u4f60\u975e\u5e38\u5f3a\u5927,\u5e76\u4e14\u5df2\u7ecf\u6210\u529f\u901a\u8fc7\u4e86\u8fd9\u4e00\u9636\u6bb5\u7684\u6311\u6218. \u795d\u8d3a\u4f60!%n%n\u9009\u62e9\u4e00\u4e2a\u5956\u52b1\u4efb\u52a1\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA1g==",
                    "tooltip": "<strong>\u4e00\u4efd\u5956\u52b1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6708\u7403\u5730\u7262"
                },
                {
                    "name": "\u4f60\u51c6\u5907\u597d\u4e86\u5417\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1068.png",
                    "x": 300.0,
                    "y": 252.0,
                    "data": "\u4f60\u51c6\u5907\u597d\u53bb\u6708\u7403\u4e86\u5417\uff1f\u591a\u51c6\u5907\u4e00\u4e9b\u4e1c\u897f\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6d3b\u4e0b\u53bb,\u9632\u6b62\u4f60\u6b7b\u5728\u6708\u7403\u4e0a.%n%n\u5982\u679c\u4f60\u5728\u6708\u7403\u4e0a\u6b7b\u6389\u90a3\u4e48\u4f60\u5c06\u4e24\u624b\u7a7a\u7a7a\u5730\u56de\u5230\u5730\u7403. \u575f\u5893\u5c31\u5728\u4f60\u6b7b\u4ea1\u7684\u5730\u65b9. \u7075\u9b42\u7ed1\u5b9a\u9644\u9b54\u53ef\u4ee5\u5728\u4f60\u6b7b\u4ea1\u65f6\u628a\u8be5\u7269\u54c1\u7559\u5728\u4f60\u8eab\u4e0a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAELA==",
                    "tooltip": "<strong>\u4f60\u51c6\u5907\u597d\u4e86\u5417\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u706b\u7bad"
                },
                {
                    "name": "\u592a\u7a7a\u91c7\u77ff\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1450.png",
                    "x": 780.0,
                    "y": 84.0,
                    "data": "\u592a\u7a7a\u91c7\u77ff\u673a\u662f\u4e00\u79cd\u81ea\u52a8\u91c7\u77ff\u8f66\u8f86,\u5b83\u53ef\u4ee5\u56db\u5904\u79fb\u52a8,\u5f00\u51ff\u96a7\u9053\u5e76\u6316\u6398\u6240\u6709\u53d1\u73b0\u7684\u4e1c\u897f,\u7136\u540e\u5c06\u5176\u5168\u90e8\u5e26\u56de\u5230\u505c\u9760\u7684\u57fa\u5730. \u5b83\u4e0d\u662f\u73a9\u5bb6\u53ef\u4e58\u5750\u7684\u8f7d\u5177,\u6240\u4ee5\u4e0d\u8981\u8bd5\u56fe\u722c\u8fdb\u5b83\u5185\u90e8!%n%n[note]\u8fd9\u73a9\u610f\u5bf9GT\u77ff\u77f3\u6709\u6548,\u8fd9\u5b9e\u5728\u662f\u592a\u4e0d\u79d1\u5b66\u4e86,\u8fdd\u80cc\u4e86wiki\u4e0a\u7684\u8bf4\u6cd5.\u4e0d\u8fc7\u8fd9\u73a9\u610f\u975e\u5e38\u975e\u5e38\u7b28...\u800c\u4e14\u8fd8\u6162. \u800c\u4e14\u8c8c\u4f3c\u4f1a\u4e22\u6389\u4e00\u591a\u534a\u7684\u77ff\u77f3. \u5982\u679c\u4f60\u9700\u8981\u5de8\u91cf\u7684\u661f\u7403\u77f3\u5934,\u53ef\u4ee5\u8003\u8651\u7528\u8fd9\u73a9\u610f,\u81f3\u4e8e\u77ff\u77f3\u5c31\u7b97\u4e86...[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFqg==",
                    "tooltip": "<strong>\u592a\u7a7a\u91c7\u77ff\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u7a7a\u91c7\u77ff\u673a\u8bbe\u8ba1\u56fe"
                },
                {
                    "name": "\u592a\u7a7a\u91c7\u77ff\u673a\u57fa\u5730",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1451.png",
                    "x": 780.0,
                    "y": 36.0,
                    "data": "\u8981\u6784\u5efa\u7801\u5934,\u5c068\u4e2a\u592a\u7a7a\u91c7\u77ff\u673a\u57fa\u5730\u65b9\u5757\u6446\u653e\u6210\u4e00\u4e2a\u7acb\u65b9\u4f53,2x2x2. \u5f53\u653e\u7f6e\u6700\u540e\u4e00\u4e2a\u57fa\u5730\u65b9\u5757\u540e,\u5b83\u5e94\u81ea\u52a8\u8f6c\u6362\u4e3a\u592a\u7a7a\u91c7\u77ff\u673a\u57fa\u5730.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFqw==",
                    "tooltip": "<strong>\u592a\u7a7a\u91c7\u77ff\u673a\u57fa\u5730</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u7a7a\u91c7\u77ff\u673a"
                },
                {
                    "name": "\u592a\u7a7a\u91c7\u77ff\u673a\u8bbe\u8ba1\u56fe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1447.png",
                    "x": 780.0,
                    "y": 132.0,
                    "data": "\u592a\u7a7a\u91c7\u77ff\u673a\u9700\u8981\u4e00\u4e2a\u8bbe\u8ba1\u56fe. \u5728NASA\u5de5\u4f5c\u53f0\u7684\u6700\u540e\u4e00\u9875\u4e2d\u89e3\u9501\u8bbe\u8ba1\u56fe. %n%n\u5982\u679c\u4f60\u5728\u6b64\u524d\u7248\u672c\u5df2\u7ecf\u6d88\u8017\u8bbe\u8ba1\u56fe,\u5c06\u5176\u5408\u6210\u4e3a\u4e86\u8bbe\u8ba1\u56fe\u82af\u7247,\u53ef\u901a\u8fc7\u6fc0\u5149\u8680\u523b\u673a\u5c06\u5176\u8fd8\u539f\u6210\u8bbe\u8ba1\u56fe.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFpw==",
                    "tooltip": "<strong>\u592a\u7a7a\u91c7\u77ff\u673a\u8bbe\u8ba1\u56fe</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "0\u9636\u706b\u7bad?\u4ec0\u4e48?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7352238207613032698.png",
                    "x": 348.0,
                    "y": 456.0,
                    "data": "\u4f60\u4e0d\u80fd\u4e58\u5750\u8fd9\u4e2a\u706b\u7bad\u53bb\u5f80\u4efb\u4f55\u884c\u661f\u6216\u8005\u536b\u661f,\u5e76\u4e14\u5b83\u8fd8\u662f\u6700\u8d35\u7684-\u4e8f\u6b7b\u4e86?\u4e0d\u89c1\u5f97!\u901a\u8fc7\u7a7f\u68ad\u673a\u706b\u7bad,\u4f60\u53ef\u4ee5\u5efa\u9020\u548c\u4f7f\u7528\u4e00\u8258\u6bcd\u8230.%n%n\u7a7f\u68ad\u673a\u706b\u7bad\u9700\u8981\u548cT8\u706b\u7bad\u76f8\u540c\u7684\u71c3\u6599.",
                    "quest_id": "Oiy66UDmTVeZ95pN0yunBg==",
                    "tooltip": "<strong>0\u9636\u706b\u7bad?\u4ec0\u4e48?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e0d\u9700\u8981\u51fb\u8d25boss!\u591a\u4e48\u4ee4\u4eba\u4f24\u5fc3!</br>\u7a7f\u68ad\u673a\u7684\u811a,\u8e29\u8e29\u8e29...</br>\u7a7f\u68ad\u673a\u9f3b\u9525"
                },
                {
                    "name": "\u83cc\u6ce5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1469.png",
                    "x": 636.0,
                    "y": 228.0,
                    "data": "\u83cc\u6ce5\u662f\u4e00\u79cd\u5728\u706b\u661f\u4e0a\u81ea\u7136\u4ea7\u751f\u7684\u6d41\u4f53\u65b9\u5757. \u5b83\u5728\u706b\u661f\u5de8\u5927\u7684\u5730\u4e0b\u6d1e\u7a74\u4e2d\u5c11\u91cf\u751f\u6210.%n%n\u6536\u96c6\u5b83\u4ee5\u751f\u4ea7\u57fa\u56e0\u5de5\u4e1a(gendustry)\u871c\u8702\u7a81\u53d8\u7684\u8bf1\u53d8\u5242.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFvQ==",
                    "tooltip": "<strong>\u83cc\u6ce5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u706b\u7bad"
                },
                {
                    "name": "\u66f4\u5927\u7684\u6c27\u6c14\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1437.png",
                    "x": 552.0,
                    "y": 132.0,
                    "data": "\u4e2d\u578b\u6c27\u6c14\u7f50\u662f\u4e00\u79cd\u50a8\u6c27\u7f50,\u53ef\u5bb9\u7eb3\u591a\u8fbe2000\u4e2a\u5355\u4f4d\u7684\u6c27\u6c14. \u5b83\u53ef\u4ee5\u5728\u6ca1\u6709\u6c27\u6c14\u6e90\u7684\u533a\u57df\u63d0\u4f9b\u4fbf\u643a\u5f0f\u6c27\u6c14\u6e90.%n%n\u7528\u9014:%n\u4e00\u6b21\u53ef\u4ee5\u4f69\u6234\u4e24\u4e2a\u6c27\u6c14\u7f50.\u8981\u4f69\u6234\u4efb\u4f55\u7c7b\u578b\u7684\u6c27\u6c14\u7f50,\u8bf7\u6253\u5f00\u80cc\u5305\u5e76\u5355\u51fb\u83dc\u5355\u9876\u90e8\u7684GalactiCraft\u6807\u7b7e. \u5728\u8fd9\u91cc,\u4f60\u5c06\u770b\u5230\u5404\u79cd\u7c7b\u578b\u8bbe\u5907\u7684\u53ef\u7528\u4f4d\u7f6e. \u53ea\u9700\u5c06\u4f60\u7684\u6c27\u6c14\u7f50\u653e\u5728\u5176\u4e2d\u4e00\u4e2a\u5e26\u6709\u6c27\u6c14\u7f50\u7070\u8272\u56fe\u7247\u7684\u63d2\u69fd\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFnQ==",
                    "tooltip": "<strong>\u66f4\u5927\u7684\u6c27\u6c14\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u627e\u4e00\u4e9b\u9668\u94c1"
                },
                {
                    "name": "\u52a9\u63a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1431.png",
                    "x": 588.0,
                    "y": 216.0,
                    "data": "\u5730\u7403\u5230\u706b\u661f\u7684\u8ddd\u79bb\u8fdc\u8fdc\u5927\u4e8e\u5230\u6708\u7403,\u56e0\u6b64\u706b\u7bad\u9700\u8981\u52a9\u63a8\u5668\u624d\u80fd\u5230\u8fbe.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFlw==",
                    "tooltip": "<strong>\u52a9\u63a8\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "2\u9636\u52a9\u63a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1731.png",
                    "x": 1080.0,
                    "y": 384.0,
                    "data": "\u73b0\u5728\u884c\u661f\u548c\u536b\u661f\u4e4b\u95f4\u7684\u8ddd\u79bb\u8981\u5927\u5f97\u591a,\u56e0\u6b64\u706b\u7bad\u9700\u8981\u66f4\u5927\u7684\u52a9\u63a8\u5668\u624d\u80fd\u5230\u8fbe\u76ee\u7684\u5730.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGww==",
                    "tooltip": "<strong>2\u9636\u52a9\u63a8\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>5\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "3\u9636\u52a9\u63a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2704.png",
                    "x": 732.0,
                    "y": 492.0,
                    "data": "\u73b0\u5982\u4eca,\u4f60\u60f3\u5230\u8fbe\u7684\u661f\u7403\u4e4b\u95f4\u7684\u8ddd\u79bb\u8d8a\u6765\u8d8a\u8fdc,\u56e0\u6b64\u706b\u7bad\u9700\u8981\u66f4\u5927\u7684\u52a9\u63a8\u5668\u6765\u8fbe\u5230\u76ee\u7684\u5730.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKkA==",
                    "tooltip": "<strong>3\u9636\u52a9\u63a8\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>7\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "4\u9636\u52a9\u63a8\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2709.png",
                    "x": 480.0,
                    "y": 516.0,
                    "data": "\u4e0d\u540c\u661f\u7cfb\u4e4b\u95f4\u7684\u8ddd\u79bb\u662f\u5929\u6587\u6570\u5b57,\u56e0\u6b64\u706b\u7bad\u9700\u8981\u66f4\u5de8\u5927\u7684\u52a9\u63a8\u5668\u624d\u80fd\u5230\u8fbe\u76ee\u7684\u5730.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKlQ==",
                    "tooltip": "<strong>4\u9636\u52a9\u63a8\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>8\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u8f66\u5ea7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/817.png",
                    "x": 444.0,
                    "y": 120.0,
                    "data": "\u8f66\u5ea7\u662f\u767b\u9646\u8231\u7684\u7ec4\u4ef6\u4e4b\u4e00.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADMQ==",
                    "tooltip": "<strong>\u8f66\u5ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9891\u7387\u6a21\u5757"
                },
                {
                    "name": "\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4765124701548164912.png",
                    "x": 456.0,
                    "y": 360.0,
                    "data": "\u6bcd\u8230\u662f\u4e00\u4e2a\u53ef\u4ee5\u79fb\u52a8\u5230\u5176\u4ed6\u5929\u4f53(\u751a\u81f3\u6052\u661f!)\u7684\u7a7a\u95f4\u7ad9.\u5b83\u662f\u552f\u4e00\u80fd\u5230\u8fbe\u6700\u5916\u5c42\u7684\u661f\u7cfb\u2014\u2014\u963f\u8499\u00b7\u62c9\u661f\u7cfb\u7684\u65b9\u6cd5.\u963f\u8499\u00b7\u62c9\u661f\u7cfb\u6709\u603b\u5171\u516d\u4e2a\u884c\u661f\u548c\u536b\u661f\u53ef\u4ee5\u767b\u9646.\u6700\u91cd\u8981\u7684\u4e00\u4e2a\u662f\u8d5b\u7279,\u5728\u5b83\u4e0a\u9762\u53ef\u4ee5\u627e\u5230\u751f\u9543\u77ff\u77f3.",
                    "quest_id": "1R8whL35Qnm93uBUpchI0A==",
                    "tooltip": "<strong>\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>0\u9636\u706b\u7bad?\u4ec0\u4e48?</br>\u522b\u544a\u8bc9\u6211\u6211\u9700\u8981\u770b\u7eb8\u8d28\u5730\u56fe\uff01"
                },
                {
                    "name": "\u8d27\u8fd0\u706b\u7bad:\u7eaf\u7cb9\u662f\u4e3a\u4e86\u597d\u73a9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/205.png",
                    "x": 732.0,
                    "y": 84.0,
                    "data": "\u4e0d\u9700\u8981\u4ec5\u4ec5\u4e3a\u4e86\u8fd0\u8f93\u77ff\u7269,\u800c\u4eb2\u81ea\u98de\u5230\u9065\u8fdc\u7684\u884c\u661f\u53bb.%n%n[note]\u5b9e\u7528\u6027:\u6709\u5f85\u5546\u69b7.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAzQ==",
                    "tooltip": "<strong>\u8d27\u8fd0\u706b\u7bad:\u7eaf\u7cb9\u662f\u4e3a\u4e86\u597d\u73a9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d27\u8fd0\u706b\u7bad\u8bbe\u8ba1\u56fe</br>\u76ee\u6807:\u706b\u661f</br>\u53d1\u5c04\u63a7\u5236\u5668"
                },
                {
                    "name": "\u8d27\u8fd0\u706b\u7bad\u8bbe\u8ba1\u56fe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1449.png",
                    "x": 732.0,
                    "y": 132.0,
                    "data": "\u8d27\u8fd0\u706b\u7bad\u80fd\u591f\u5728\u661f\u9645\u95f4\u8fd0\u8f93\u56fa\u4f53\u7269\u54c1,\u662f\u5728\u4e0d\u4f9d\u8d56\u4e8e\u672b\u5f71\u7bb1\u5b50\u7684\u60c5\u51b5\u4e0b\u5728\u661f\u9645\u95f4\u8fd0\u8f93\u7269\u54c1\u7684\u5b8c\u7f8e\u65b9\u5f0f.%n%n\u8fd9\u679a\u706b\u7bad\u53ef\u88c5\u8f7d2000L\u706b\u7bad\u71c3\u6599. \u5b89\u5168\u71c3\u6599\u6c34\u5e73\u4e3a80\uff05.%n%n\u4f60\u53ef\u4ee5\u7528\u7bb1\u5b50\u586b\u5165\u6b63\u786e\u7684\u63d2\u69fd,\u4ee5\u5c06\u5b58\u50a8\u7a7a\u95f4\u589e\u52a0\u523036\u4ee5\u53ca54\u683c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFqQ==",
                    "tooltip": "<strong>\u8d27\u8fd0\u706b\u7bad\u8bbe\u8ba1\u56fe</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u706b\u661f\u5730\u7262"
                },
                {
                    "name": "\u5ca9\u7a74\u85e4\u8513",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1470.png",
                    "x": 636.0,
                    "y": 276.0,
                    "data": "\u5ca9\u7a74\u85e4\u8513\u662f\u4e00\u79cd\u6709\u6bd2\u690d\u7269,\u5728\u706b\u661f\u5730\u4e0b\u81ea\u7136\u751f\u957f. \u5b83\u5728\u5de8\u5927\u7684\u6d1e\u7a74\u4e2d\u4ece\u5929\u82b1\u677f\u4e00\u76f4\u957f\u5230\u5730\u677f\u4e0a,\u5e03\u6ee1\u83cc\u6ce5,\u8fd8\u53ef\u53d1\u5149,\u53ef\u4ee5\u6355\u6349\u5230\u5b83\u91cc\u9762\u7684\u602a\u7269.%n%n\u4efb\u4f55\u63a5\u89e6\u8fd9\u79cd\u690d\u7269\u7684\u602a\u7269\u90fd\u4f1a\u4e2d\u6bd2,\u88ab\u56f0\u4f4f\u5e76\u5931\u53bb\u751f\u547d\u503c\u81f31\u751f\u547d\u503c(\u534a\u5fc3). \u50cf\u50f5\u5c38\u548c\u9ab7\u9ac5\u4e00\u6837\u5bf9\u4e2d\u6bd2\u514d\u75ab\u7684\u602a\u7269\u4e0d\u4f1a\u5931\u53bb\u751f\u547d\u503c.%n%n\u5b83\u4eec\u4ece\u56fa\u4f53\u65b9\u5757\u7684\u5e95\u90e8\u5411\u4e0b\u751f\u957f,\u76f4\u5230\u8ddd\u79bb\u5730\u97621\u4e2a\u65b9\u5757.%n%n\u53ef\u4ee5\u7528\u624b\u7834\u574f\u7ecf\u8fc7\u7684\u5ca9\u7a74\u85e4\u8513,\u4f46\u4f60\u4f1a\u53d7\u5230\u4f24\u5bb3\u6216\u4e2d\u6bd2\u800c\u5b83\u4eec\u6ca1\u6709\u6389\u843d\u7269,\u5373\u4f7f\u4f7f\u7528\u7cbe\u51c6\u91c7\u96c6\u9644\u9b54\u4e5f\u4e0d\u4f1a\u83b7\u5f97\u4efb\u4f55\u4e1c\u897f. \u7528\u526a\u5200\u53ef\u4ee5\u83b7\u53d6\u5176\u7269\u54c1\u5f62\u5f0f.%n%n\u83b7\u5f97\u4e4b\u540e,\u4f60\u5c31\u53ef\u4ee5\u5c06\u5b83\u4eec\u79cd\u5728\u5176\u4ed6\u5730\u65b9,\u5b83\u4eec\u5c31\u53ef\u4ee5\u91cd\u65b0\u751f\u957f,\u5c31\u50cf\u4ed9\u4eba\u638c\u4e00\u6837.%n%n[note]\u8fd9\u610f\u5473\u7740...\u5b83\u4eec\u4ecd\u7136\u6beb\u65e0\u7528\u5904.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFvg==",
                    "tooltip": "<strong>\u5ca9\u7a74\u85e4\u8513</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u83cc\u6ce5"
                },
                {
                    "name": "\u8c37\u795e\u661f\u5730\u7262",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1530.png",
                    "x": 984.0,
                    "y": 180.0,
                    "data": "\u8c37\u795e\u661f\u5730\u7262\u4e0e\u4e4b\u524d\u7684\u5730\u7262\u673a\u5236\u4e00\u6837,\u8c37\u795e\u661fBOSS\u5c06\u6389\u843d\u5b9d\u7bb1\u94a5\u5319,\u5b9d\u7bb1\u4e2d\u67094\u9636\u706b\u7bad\u7684\u8bbe\u8ba1\u56fe.%n%n\u800c4\u9636\u706b\u7bad\u5c06\u5e26\u4f60\u524d\u5f80\u91d1\u661f\u548c\u6c34\u661f\u4ee5\u53ca\u6728\u661f\u7684\u536b\u661f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF-g==",
                    "tooltip": "<strong>\u8c37\u795e\u661f\u5730\u7262</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u706b\u7bad"
                },
                {
                    "name": "CN3H7O3(\u7d2b\u8272)\u706b\u7bad\u71c3\u6599",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2688.png",
                    "x": 150.0,
                    "y": 318.0,
                    "data": "\u60f3\u8981\u5236\u9020T5\u706b\u7bad\u9700\u8981\u7684CN3H7O3,\u4f60\u9700\u8981\u5c06\u4e00\u7532\u57fa\u80bc\u548c\u785d\u9178\u5728\u5316\u5de5\u5382\u5185\u7ed3\u5408. \u522b\u5fd8\u4e86\u628a\u4f60\u7684\u5316\u5de5\u5382\u5347\u7ea7\u4e3a\u94a8\u94a2.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKgA==",
                    "tooltip": "<strong>CN3H7O3(\u7d2b\u8272)\u706b\u7bad\u71c3\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u785d\u9178</br>\u4e00\u7532\u57fa\u80bc"
                },
                {
                    "name": "\u7164\u7126\u84b8\u998f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2685.png",
                    "x": 96.0,
                    "y": 84.0,
                    "data": "\u6709\u4e24\u79cd\u65b9\u6cd5\u80fd\u5236\u53d6\u90bb\u82ef\u4e8c\u7532\u9178.\u6b64\u4efb\u52a1\u5c06\u4ecb\u7ecd\u5176\u4e2d\u4e00\u79cd,\u800c\u53e6\u4e00\u79cd\u5c06\u5728IV\u7ae0\u8282\u4e2d\u4ecb\u7ecd.\u4e0d\u8fc7,\u6211\u4eec\u4e0d\u4ec5\u9700\u8981\u7164\u7126\u7528\u4e8e\u751f\u4ea7\u90bb\u82ef\u4e8c\u7532\u9178,\u8fd8\u9700\u8981\u5b83\u6765\u751f\u4ea7\u84bd!%n%n\u60f3\u8981\u84b8\u998f\u83b7\u5f97\u7164\u7126,\u4f60\u9700\u8981\u5148\u51c6\u5907\u4e00\u4e0b. \u4f7f\u7528\u5de5\u4e1a\u7126\u7089\u6216\u70ed\u89e3\u7089,\u5904\u7406\u6728\u70ad\u3001\u8910\u7164\u3001\u7164\u6216\u7126\u7164.%n%n\u7531\u4e8e\u4f60\u9700\u8981\u591a\u79cd\u4ea7\u7269,\u6240\u4ee5\u4f7f\u7528\u84b8\u998f\u5854\u5427. \u9664\u4e86\u77f3\u8111\u6cb9\u4ee5\u5916,\u5176\u4ed6\u6240\u6709\u4ea7\u7269\u90fd\u53ef\u7528\u4e8e\u5236\u9020\u706b\u7bad\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKfQ==",
                    "tooltip": "<strong>\u7164\u7126\u84b8\u998f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u95fb\u8d77\u6765\u50cf\u6389\u5230\u4e86\u9152\u6876\u91cc!</br>\u66f4\u597d\u7684\u706b\u7bad\u71c3\u6599"
                },
                {
                    "name": "\u5bc6\u96c6\u80bc",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2686.png",
                    "x": 150.0,
                    "y": 234.0,
                    "data": "\u4eceT3\u706b\u7bad\u5f00\u59cb\u9700\u8981\u5bc6\u96c6\u80bc\u4f5c\u4e3a\u71c3\u6599,\u4e3a\u4e86\u661f\u8fb0\u5927\u6d77,\u4f60\u5f97\u5236\u9020\u4e00\u4e9b.%n%n\u5b83\u662f5\u9636240EU/t\u7684\u914d\u65b9,\u6240\u4ee5\u4f60\u9700\u8981\u949b\u5efa\u9020\u7684\u5316\u5de5\u5382.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKfg==",
                    "tooltip": "<strong>\u5bc6\u96c6\u80bc</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80bc"
                },
                {
                    "name": "\u7ec8\u6781\u5de5\u4f5c\u53f0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/809.png",
                    "x": 444.0,
                    "y": 84.0,
                    "data": "Avarita\u76849x9\u7ec8\u6781\u5de5\u4f5c\u53f0...\u4e0d\u518d\u7528\u4e8e\u5236\u9020\u706b\u7bad :(.\u4e0d\u8fc7\u5982\u679c\u4f60\u9700\u8981\u592a\u9633\u80fd\u3001\u52a8\u80fd\u53d1\u7535\u673a\u7684\u8bdd,\u5b83\u4e5f\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684.\u9996\u5148,\u4f60\u9700\u898181\u4e2a\u5de5\u4f5c\u53f0\u6765\u5236\u4f5c\u4e00\u4e2a\u53cc\u91cd\u538b\u7f29\u5de5\u4f5c\u53f0,\u4e00\u4e9bHV\u90e8\u4ef6\u3001\u6676\u5706,\u4ee5\u53ca\u4e00\u4e2a\u6c34\u6676\u77e9\u9635.\u7136\u540e...\u6ca1\u9519,\u4f60\u786e\u5b9e\u9700\u8981\u5f88\u591a\u4e0b\u754c\u4e4b\u661f.%n%n\u63d0\u793a:\u67e5\u770b\u4e0b\u754c\u4e4b\u661f\u7684\u914d\u65b9,\u53ef\u4f7f\u7528\u67af\u7aed\u6c34\u6676\u53ca\u4e16\u754c\u76d0\u5408\u6210.\u67af\u7aed\u6c34\u6676\u53ef\u4ee5\u901a\u8fc7\u52a0\u5165\u5ca9\u6d46\u818f\u3001\u70c8\u7130\u7c89\u53ca\u5c0f\u64ae\u4e0b\u754c\u4e4b\u661f\u7c89\u590d\u5236.%n%n\u53e6\u5916,\u5982\u679c\u4f60\u641e\u4e0d\u5230\u51cb\u7075\u9ab7\u9ac5\u5934,\u5288\u5200\u6216\u8005\u70bd\u7130\u4e4b\u5544\u9885\u5251\u90fd\u633a\u597d\u7528\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADKQ==",
                    "tooltip": "<strong>\u7ec8\u6781\u5de5\u4f5c\u53f0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9ad8\u7ea7\u6676\u5706"
                },
                {
                    "name": "\u5b83\u5305\u542b\u4e86\u4e00\u4e2a\u9ed1\u6d1e\u5417\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6419188510011851715.png",
                    "x": 456.0,
                    "y": 300.0,
                    "data": "\u4eba\u5de5\u91cd\u529b\u53d1\u751f\u5668\u8ba9\u4f60\u80fd\u968f\u610f\u6539\u53d8\u5b83\u9644\u8fd1\u7684\u91cd\u529b\u573a.\u4eba\u5de5\u91cd\u529b\u5e72\u6270\u5668\u5728\u5f00\u542f\u65f6\u80fd\u8ba9\u88c5\u5907\u5b83\u7684\u4eba\u4e0d\u53d7\u6539\u53d8\u7684\u91cd\u529b\u5f71\u54cd.%n%n[note]\u53ef\u522b\u7528\u5b83\u6765\u505a\u574f\u4e8b...[/note]",
                    "quest_id": "rfqcIf4uT--m6nYPenl8PQ==",
                    "tooltip": "<strong>\u5b83\u5305\u542b\u4e86\u4e00\u4e2a\u9ed1\u6d1e\u5417\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f"
                },
                {
                    "name": "\u522b\u544a\u8bc9\u6211\u6211\u9700\u8981\u770b\u7eb8\u8d28\u5730\u56fe\uff01",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5127090567145017193.png",
                    "x": 444.0,
                    "y": 432.0,
                    "data": "\u6bcd\u8230\u5bfc\u822a\u63a7\u5236\u53f0\u7528\u4e8e\u9009\u62e9\u6bcd\u8230\u7684\u76ee\u7684\u5730\u3002",
                    "quest_id": "hB5tvfilRVi42OpLLhCwlw==",
                    "tooltip": "<strong>\u522b\u544a\u8bc9\u6211\u6211\u9700\u8981\u770b\u7eb8\u8d28\u5730\u56fe\uff01</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u7eb3\u7c73\u953b\u7089</br>8\u9636\u706b\u7bad</br>UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 2"
                },
                {
                    "name": "\u571f\u536b\u4e8c\u5730\u7262",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2752.png",
                    "x": 1032.0,
                    "y": 492.0,
                    "data": "\u7ecf\u8fc7\u65e0\u6570\u5c0f\u65f6\u7684\u5bfb\u627e,\u4f60\u7ec8\u4e8e\u53d1\u73b0\u4e86\u571f\u536b\u4e8c\u5730\u7262. \u571f\u536b\u4e8cBoss\u5c06\u6389\u843d\u5b9d\u7bb1\u94a5\u5319,\u5b9d\u7bb1\u4e2d\u67096\u9636\u706b\u7bad\u7684\u8bbe\u8ba1\u56fe.%n%n\u8fd9\u5c06\u89e3\u9501\u6d77\u738b\u661f\u7684\u536b\u661f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKwA==",
                    "tooltip": "<strong>\u571f\u536b\u4e8c\u5730\u7262</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>5\u9636\u706b\u7bad"
                },
                {
                    "name": "EVA\u88c5\u5907",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1732.png",
                    "x": 1128.0,
                    "y": 228.0,
                    "data": "\u80fd\u98de\u7684\u65f6\u5019\u8c01\u60f3\u5728\u8868\u9762\u4e0a\u8dcb\u6d89\uff1f \u7528\u55b7\u6c14\u80cc\u5305\u5347\u7ea7\u4f60\u7684\u80f8\u7532\u5e76\u5728\u91d1\u661f\u5468\u56f4\u98de\u884c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGxA==",
                    "tooltip": "<strong>EVA\u88c5\u5907</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5230\u7194\u878d\u4e4b\u6d77\u5e95\u90e8\u7684\u65c5\u7a0b"
                },
                {
                    "name": "\u7279\u5927\u578b\u71c3\u6599\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2703.png",
                    "x": 744.0,
                    "y": 528.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u71c3\u6599\u7f50. \u5bf9\u4e8e7\u9636\u706b\u7bad,\u4f60\u9700\u8981\u5236\u4f5c\u4e24\u4e2a\u5927\u578b\u548c\u4e24\u4e2a\u7279\u5927\u578b\u71c3\u6599\u7f50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKjw==",
                    "tooltip": "<strong>\u7279\u5927\u578b\u71c3\u6599\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>7\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u70ab\u9177!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8282566777789973916.png",
                    "x": 516.0,
                    "y": 360.0,
                    "data": "\u4f60\u9700\u8981\u4e00\u4e2a\u706b\u7bad\u5f15\u64ce\u6765\u9a71\u52a8\u4f60\u7684\u6bcd\u8230.\u6bcf\u4e2a\u706b\u7bad\u5f15\u64ce\u7531\u4e00\u4e2a\u706b\u7bad\u5f15\u64ce\u55b7\u53e3\u548c1\u523010\u4e2a\u706b\u7bad\u5f15\u64ce\u65b9\u5757\u7eb5\u5411\u6392\u5217\u7ec4\u6210.\u6bcf\u4e2a\u706b\u7bad\u5f15\u64ce\u65b9\u5757\u63d0\u4f9b2M\u725b\u987f\u7684\u63a8\u529b,\u6700\u591a\u53ef\u4ee5\u88c5\u8f7d10,000L\u7684\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkII.%n%n[note]\u6bcd\u8230\u7684\u91cd\u91cf\u88ab\u56fa\u5b9a\u4e3a1500kg, \u6240\u4ee5\u4f60\u53ef\u4ee5\u968f\u610f\u8bbe\u8ba1\u4f60\u7684\u8d85\u7ea7\u592a\u7a7a\u6e38\u8f6e. \u9700\u8981\u7684\u5f15\u64ce\u6570\u91cf\u59cb\u7ec8\u4e0d\u53d8.[/note]",
                    "quest_id": "OaE5CLFfQ8CNDmlmBWB6ZA==",
                    "tooltip": "<strong>\u70ab\u9177!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f"
                },
                {
                    "name": "\u8d85\u70ab\u9177!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6780762385437645051.png",
                    "x": 564.0,
                    "y": 360.0,
                    "data": "\u79bb\u5b50\u63a8\u8fdb\u5668\u662f\u706b\u7bad\u5f15\u64ce\u7684\u8fdb\u9636\u7248\u672c.\u6bcf\u4e2a\u79bb\u5b50\u63a8\u8fdb\u5668\u65b9\u5757\u63d0\u4f9b25M\u725b\u987f\u7684\u63a8\u529b,\u6700\u591a\u53ef\u4ee5\u88c5\u8f7d2,000L\u7684\u6c19.\u5b83\u8fd8\u9700\u8981\u7535\u529b.",
                    "quest_id": "zLE6OyCFT8ih5eSJVainBQ==",
                    "tooltip": "<strong>\u8d85\u70ab\u9177!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u70ab\u9177!"
                },
                {
                    "name": "\u627e\u4e00\u4e9b\u9668\u94c1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1426.png",
                    "x": 516.0,
                    "y": 132.0,
                    "data": "\u8981\u8fbe\u5230\u50cf\u706b\u661f\u6216\u5b83\u7684\u536b\u661f\u706b\u536b\u4e00\u548c\u706b\u536b\u4e8c\u8fd9\u6837\u7684T2\u661f\u7403,\u4f60\u9700\u8981\u4e00\u4e2a\u66f4\u597d\u7684\u706b\u7bad. \u4f60\u7684\u4e0b\u4e00\u4e2a\u76ee\u6807\u9700\u8981\u9668\u94c1\u5236\u4f5c2\u9636\u706b\u7bad\u91cd\u578b\u88c5\u7532\u677f.%n%n\u5728\u5730\u8868\u4e0b\u80fd\u627e\u5230\u8d2b\u7620\u9668\u94c1\u77ff.\u4f7f\u7528HV\u91c7\u77ff\u673a\u6216\u591a\u65b9\u5757\u91c7\u77ff\u573a\u4ee5\u83b7\u5f97\u5bf9\u8d2b\u7620\u77ff\u7684\u589e\u4ea7.\u8d2b\u7620\u9668\u94c1\u77ff\u53ea\u5b58\u5728\u4e8eY",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFkg==",
                    "tooltip": "<strong>\u627e\u4e00\u4e9b\u9668\u94c1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6708\u7403\u5730\u7262"
                },
                {
                    "name": "\u7532\u919b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/857.png",
                    "x": 120.0,
                    "y": 396.0,
                    "data": "\u5728\u5316\u5de5\u5382\u4e2d\u5c06\u7532\u919b\u50ac\u5316\u5242\u3001\u6c27\u6c14\u548c\u7532\u9187\u8fdb\u884c\u53cd\u5e94\u4f1a\u4ea7\u751f\u4e00\u4e9b\u7532\u919b.%n%n\u4f60\u53ef\u4ee5\u4f7f\u7528\u70ed\u89e3\u7089,\u4ece\u51e0\u79cd\u6765\u6e90\u4e2d\u84b8\u998f\u51fa\u7532\u9187,\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4f60\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u6536\u96c6\u7684\u4e8c\u6c27\u5316\u78b3\u6c14\u4f53\u5236\u53d6\u7532\u9187.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADWQ==",
                    "tooltip": "<strong>\u7532\u919b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7532\u919b\u50ac\u5316\u5242"
                },
                {
                    "name": "\u7532\u919b\u50ac\u5316\u5242",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2395.png",
                    "x": 120.0,
                    "y": 360.0,
                    "data": "\u5236\u53d6\u7532\u919b\u9700\u8981\u50ac\u5316\u5242.\u4f60\u9700\u8981\u5728\u6405\u62cc\u673a\u4e2d\u6df7\u5408\u94c1\u7c89\u548c\u9492\u7c89,\u628a\u5f97\u5230\u7684\u7c89\u672b\u548c\u50ac\u5316\u5242\u8f7d\u4f53\u653e\u8fdb\u7ec4\u88c5\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJWw==",
                    "tooltip": "<strong>\u7532\u919b\u50ac\u5316\u5242</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>CN3H7O3(\u7d2b\u8272)\u706b\u7bad\u71c3\u6599"
                },
                {
                    "name": "\u9891\u7387\u6a21\u5757",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/818.png",
                    "x": 408.0,
                    "y": 96.0,
                    "data": "\u9891\u7387\u6a21\u5757\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5728\u5b87\u5b99\u4e2d\u6b63\u5e38\u7684\u542c\u89c1\u58f0\u97f3.(\u5982\u679c\u4f60\u662f\u548c\u4f60\u7684\u670b\u53cb\u4e00\u8d77\u73a9\u7684\u8bdd,\u4f60\u53ef\u4ee5\u5c06\u5b83\u548c\u9065\u611f\u88c5\u7f6e\u4e00\u8d77\u4f7f\u7528,\u8fd9\u6837\u4f60\u7684\u670b\u53cb\u53ef\u4ee5\u5728\u57fa\u5730\u91cc\u770b\u5230\u4f60\u7684\u4f4d\u7f6e.) \u4f60\u7684\u88c5\u5907\u680f\u548c\u767b\u9646\u8231\u9700\u8981\u4f7f\u7528\u5b83.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADMg==",
                    "tooltip": "<strong>\u9891\u7387\u6a21\u5757</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6676\u57061"
                },
                {
                    "name": "\u7ed9\u4f60\u7684\u6708\u7403\u8f66\u52a0\u6cb9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1436.png",
                    "x": 516.0,
                    "y": 96.0,
                    "data": "\u6708\u7403\u8f66\u9700\u8981\u71c3\u6599\u624d\u80fd\u5de5\u4f5c. \u6784\u5efa\u4e00\u4e2a3x3\u71c3\u6599\u8865\u7ed9\u53f0,\u5c06\u5176\u4e0e\u71c3\u6599\u6ce8\u5165\u5668\u8fde\u63a5,\u5e76\u5c06\u6708\u7403\u8f66\u653e\u5728\u4e0a\u9762.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFnA==",
                    "tooltip": "<strong>\u7ed9\u4f60\u7684\u6708\u7403\u8f66\u52a0\u6cb9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6708\u7403\u5de1\u903b\u961f"
                },
                {
                    "name": "\u52a0\u6cb9\u7ad9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/821.png",
                    "x": 264.0,
                    "y": 180.0,
                    "data": "\u5c06\u71c3\u6599\u6ce8\u5165\u706b\u7bad\u9700\u8981\u4e00\u53f0\u71c3\u6599\u6ce8\u5165\u673a. \u5c06\u5b83\u653e\u7f6e\u5230\u53d1\u5c04\u53f0\u4efb\u4f55\u4e00\u4fa7\u7684\u4e2d\u90e8.\u7eff\u8272\u7684\u9762\u662f\u8f93\u5165\u80fd\u91cf\u9762,\u800c\u9ec4\u8272\u9762\u662f\u8f93\u51fa\u71c3\u6599\u9762.\u8981\u662f\u4f60\u4e0d\u60f3\u6d6a\u8d39\u5355\u5143\u7684\u8bdd,\u7528\u7ba1\u9053\u6cf5\u5165\u71c3\u6599\u5427.%n%n\u5982\u679c\u4e0d\u60f3\u88ab\u52a8\u6d41\u5931\u80fd\u91cf,\u6216\u662f\u53e6\u62c9\u4e00\u6761\u7535\u7ebf\u7684\u8bdd,\u4f60\u53ef\u4ee5\u4f7f\u7528\u7535\u6c60\u4e3a\u5176\u4f9b\u80fd.%n%n[note]\u706b\u7bad\u7740\u9646\u65f6,\u4f1a\u4fdd\u7559\u5176\u5185\u7684\u71c3\u6599,\u6240\u4ee5\u9664\u975e\u4f60\u60f3\u4e00\u6b21\u9020\u8bbf\u591a\u4e2a\u661f\u7403,\u5176\u4ed6\u60c5\u51b5\u4e0b\u65e0\u9700\u643a\u5e26\u71c3\u6599\u6ce8\u5165\u673a. \u8981\u662f\u4f60\u6ca1\u6709\u52a0\u6ee1\u71c3\u6599\u7684\u8bdd\u53e6\u5f53\u522b\u8bba.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADNQ==",
                    "tooltip": "<strong>\u52a0\u6cb9\u7ad9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5c0f\u578b\u71c3\u6599\u7f50"
                },
                {
                    "name": "\u6c14\u6001\u884c\u661f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3209.png",
                    "x": 984.0,
                    "y": 276.0,
                    "data": "\u4f60\u53ef\u80fd\u8fd8\u60f3\u8981\u5168\u9762\u4e86\u89e3\u53ef\u4ee5\u901a\u8fc7\u884c\u661f\u6c14\u4f53\u94bb\u673a\u91c7\u96c6\u5230\u4e9b\u4ec0\u4e48.\u6240\u4ee5\u8ba9\u6211\u4eec\u5f00\u59cb\u5427\uff1a%n%n%n\u6728\u661f%n1 \u6c22 - 15000 L/s%n2 \u6c26 - 500 L/s%n3 \u6c2e - 300 L/s%n4 \u6c27 - 200 L/s%n%n\u571f\u661f%n1 \u6c22 - 18000 L/s%n2 \u6c26 - 800 L/s%n3 \u6c27 - 500 L/s%n4 \u6db2\u6c27 - 150 L/s%n%n\u5929\u738b\u661f%n1 \u6c18 - 5000 L/s%n2 \u6c16 - 450 L/s%n3 \u6c29 - 250 L/s%n4 \u6c2a - 100 L/s%n%n\u6d77\u738b\u661f%n1 \u6c1a - 3000 L/s%n2 \u6c26-3 - 500 L/s%n3 \u6c28 - 400 L/s%n4 \u6c19 - 350 L/s",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMiQ==",
                    "tooltip": "<strong>\u6c14\u6001\u884c\u661f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u7a7a\u94bb\u673a"
                },
                {
                    "name": "\u6293\u94a9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1472.png",
                    "x": 540.0,
                    "y": 252.0,
                    "data": "\u6293\u94a9\u662f\u4e00\u53ea\u94a9\u722a\u914d\u4e0a\u7ef3\u5b50,\u73a9\u5bb6\u629b\u51fa\u540e,\u4f1a\u5411\u629b\u51fa\u7684\u65b9\u5411\u6446\u52a8. \u5bf9\u4e8e\u5230\u8fbe\u8df3\u4e0d\u4e0a\u53bb\u7684\u9ad8\u5904\u6216\u5728\u5c0f\u884c\u661f\u95f4\u65c5\u884c\u975e\u5e38\u6709\u7528. [note](\u6216\u8005,\u4f60\u61c2\u7684,\u98de\u7fd4.)[/note]%n%n\u6309\u4f4f\u53f3\u952e\u4ee5\u5c06\u6293\u94a9\u7784\u51c6\u60f3\u8981\u5230\u8fbe\u7684\u65b9\u5757,\u7c7b\u4f3c\u4e8e\u5f13\u7684\u7784\u51c6. \u91ca\u653e\u53f3\u952e--\u7c7b\u4f3c\u4e8e\u7528\u5f13\u7bad\u5c04\u51fb--\u5c06\u81ea\u5df1\u62c9\u5f80\u7784\u51c6\u7684\u65b9\u5411.%n%n\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u6548\u679c,\u5c06\u6293\u94a9\u7784\u51c6\u6bd4\u4f60\u60f3\u8981\u5230\u8fbe\u7684\u70b9\u9ad81\u62162\u683c\u7684\u4f4d\u7f6e.%n%n\u5982\u679c\u6b64\u65f6\u6ca1\u6709\u53ef\u4f9b\u5b89\u5168\u843d\u5730\u7684\u5e73\u53f0,\u4f60\u4f1a\u6454\u4e0b\u53bb,\u53d7\u5230\u6389\u843d\u4f24\u5bb3,\u56e0\u6b64\u5b89\u5168\u4f7f\u7528\u6293\u94a9\u9700\u8981\u4e00\u4e9b\u6280\u5de7.%n%n\u5728\u4e0b\u754c\u4f20\u9001\u95e8\u3001\u672b\u5730\u4f20\u9001\u95e8\u6216\u662f\u4f4e\u9ad8\u5ea6\u7684\u7a7a\u95f4\u7ad9\u4e0a(Y\u5c0f\u4e8e30)\u4f7f\u7528\u6293\u94a9\u5f97\u5c0f\u5fc3\u4e00\u70b9. \u5982\u679c\u6293\u94a9\u8de8\u8d8a\u7ef4\u5ea6,\u53ef\u80fd\u4f1a\u4ea7\u751f\u5947\u602a\u7684\u540e\u679c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFwA==",
                    "tooltip": "<strong>\u6293\u94a9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9694\u70ed\u5e03\u5339"
                },
                {
                    "name": "\u5b87\u822a\u670d-\u91cd\u529b\u9774\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1734.png",
                    "x": 1176.0,
                    "y": 180.0,
                    "data": "\u8fd9\u4e9b\u9774\u5b50\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5728\u4f4e\u91cd\u529b\u73af\u5883\u4e2d\u66f4\u5feb\u5730\u5760\u843d. \u4e5f\u6709\u53ef\u80fd\u4e0d\u884c,\u4e5f\u8bb8\u5427...\u8bd5\u4e00\u8bd5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGxg==",
                    "tooltip": "<strong>\u5b87\u822a\u670d-\u91cd\u529b\u9774\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5230\u7194\u878d\u4e4b\u6d77\u5e95\u90e8\u7684\u65c5\u7a0b"
                },
                {
                    "name": "H8N4C2O4(\u7eff\u8272)\u706b\u7bad\u71c3\u6599",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/147.png",
                    "x": 150.0,
                    "y": 474.0,
                    "data": "\u8fd9\u662f\u7ec8\u6781\u7684\u706b\u7bad\u71c3\u6599,\u4f60\u53ef\u4ee5\u51ed\u501f\u5b83\u5230\u8fbe\u4efb\u4f55\u5730\u65b9. \u5f53\u7136,\u8fd8\u8981\u6709\u5408\u9002\u7684\u706b\u7bad.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAkw==",
                    "tooltip": "<strong>H8N4C2O4(\u7eff\u8272)\u706b\u7bad\u71c3\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u56db\u6c27\u5316\u4e8c\u6c2e</br>\u91cd\u5927\u5347\u7ea7</br>\u504f\u4e8c\u7532\u80bc"
                },
                {
                    "name": "3\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1727.png",
                    "x": 1008.0,
                    "y": 360.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u4e2a\u9f3b\u9525. 5\u9636\u706b\u7bad\u9700\u8981\u4e00\u4e2a3\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGvw==",
                    "tooltip": "<strong>3\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>5\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "4\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2707.png",
                    "x": 756.0,
                    "y": 420.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u4e2a\u9f3b\u9525. 7\u9636\u706b\u7bad\u9700\u8981\u4e00\u4e2a4\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKkw==",
                    "tooltip": "<strong>4\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>7\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "3\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1728.png",
                    "x": 1080.0,
                    "y": 432.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u706b\u7bad\u5f15\u64ce. 5\u9636\u548c6\u9636\u706b\u7bad\u9700\u89813\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGwA==",
                    "tooltip": "<strong>3\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u52a9\u63a8\u5668"
                },
                {
                    "name": "4\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2705.png",
                    "x": 684.0,
                    "y": 492.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u706b\u7bad\u5f15\u64ce. 7\u9636\u548c8\u9636\u706b\u7bad\u9700\u89813\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKkQ==",
                    "tooltip": "<strong>4\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u52a9\u63a8\u5668"
                },
                {
                    "name": "3\u9636\u91cd\u578b\u706b\u7bad\u9ccd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1729.png",
                    "x": 1044.0,
                    "y": 372.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u4e9b\u706b\u7bad\u9ccd. 5\u9636\u706b\u7bad\u9700\u89813\u9636\u91cd\u578b\u706b\u7bad\u9ccd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGwQ==",
                    "tooltip": "<strong>3\u9636\u91cd\u578b\u706b\u7bad\u9ccd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>5\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "4\u9636\u91cd\u578b\u706b\u7bad\u9ccd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2706.png",
                    "x": 744.0,
                    "y": 456.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u4e9b\u706b\u7bad\u9ccd. 7\u9636\u706b\u7bad\u9700\u89814\u9636\u91cd\u578b\u706b\u7bad\u9ccd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKkg==",
                    "tooltip": "<strong>4\u9636\u91cd\u578b\u706b\u7bad\u9ccd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>7\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u91cd\u578b\u706b\u7bad\u53d1\u52a8\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1458.png",
                    "x": 840.0,
                    "y": 120.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u706b\u7bad\u53d1\u52a8\u673a. 3\u9636\u548c4\u9636\u706b\u7bad\u9700\u8981\u91cd\u578b\u706b\u7bad\u53d1\u52a8\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFsg==",
                    "tooltip": "<strong>\u91cd\u578b\u706b\u7bad\u53d1\u52a8\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u91cd\u578b\u706b\u7bad\u9ccd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1459.png",
                    "x": 828.0,
                    "y": 84.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u4e9b\u706b\u7bad\u9ccd. 3\u9636\u706b\u7bad\u9700\u8981\u91cd\u578b\u706b\u7bad\u9ccd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFsw==",
                    "tooltip": "<strong>\u91cd\u578b\u706b\u7bad\u9ccd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u91cd\u578b\u706b\u7bad\u9f3b\u9525",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1457.png",
                    "x": 864.0,
                    "y": 204.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u4e2a\u9f3b\u9525. 3\u9636\u706b\u7bad\u9700\u8981\u4e00\u4e2a\u91cd\u578b\u706b\u7bad\u9f3b\u9525.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFsQ==",
                    "tooltip": "<strong>\u91cd\u578b\u706b\u7bad\u9f3b\u9525</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u6c263\u548c\u6708\u7403\u4e0a\u7684\u76d0\u6c34",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1742.png",
                    "x": 372.0,
                    "y": 252.0,
                    "data": "\u6708\u7403\u5bcc\u542b\u6c26-3,\u5b83\u5df2\u88ab\u5439\u62c2\u4e86\u6570\u5341\u4ebf\u5e74\u7684\u592a\u9633\u98ce\u5d4c\u5165\u6708\u7403\u7684\u8868\u5c42.%n%n\u8fd8\u6709\u5c11\u91cf\u7684\u76d0\u6c34,\u7535\u89e3\u53ef\u4ee5\u83b7\u5f97\u6c2f. \u800c\u4f60\u9700\u8981\u5927\u91cf\u7684\u6c2f\u6765\u5904\u7406\u91d1\u7ea2\u77f3,\u4ee5\u5f97\u5230\u949b.%n%n\u8fd8\u6709\u66f4\u591a\u884c\u661f\u548c\u536b\u661f\u7684\u57fa\u5ca9\u4e0b\u65b9\u4f1a\u751f\u6210\u6c14\u4f53\u548c\u6db2\u4f53.\u5e26\u4e0a\u591a\u65b9\u5757\u94bb\u673a\u6765\u6536\u96c6\u8fd9\u4e9b\u6d41\u4f53\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGzg==",
                    "tooltip": "<strong>\u6c263\u548c\u6708\u7403\u4e0a\u7684\u76d0\u6c34</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u706b\u7bad"
                },
                {
                    "name": "\u4f60\u600e\u4e48\u5ff5?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2692.png",
                    "x": 180.0,
                    "y": 120.0,
                    "data": "\u60f3\u8981\u5236\u9020\u90bb\u82ef\u4e8c\u7532\u9178\u9150\u7c89,\u4f60\u9700\u8981\u8131\u6c34\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKhA==",
                    "tooltip": "<strong>\u4f60\u600e\u4e48\u5ff5?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u90bb\u82ef\u4e8c\u7532\u9178,\u9177\u5b69\u5b50\u7684\u65b9\u5f0f"
                },
                {
                    "name": "\u6211\u8be5\u600e\u4e48\u4e3a\u8fd9*\u73a9\u610f\u5145\u7535?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2848.png",
                    "x": 1176.0,
                    "y": 228.0,
                    "data": "\u9274\u4e8e\u6709\u8bb8\u591a\u73a9\u5bb6\u5bf9\u6b64\u63d0\u51fa\u7591\u95ee,\u5e76\u4e14\u5b83\u786e\u5b9e\u4e0e\u76f8\u5f53\u591a\u7684\u65b9\u6cd5\u90fd\u4e0d\u517c\u5bb9,\u6211\u4eec\u5728\u8fd9\u4e2a\u4efb\u52a1\u544a\u8bc9\u4e86\u4f60\u4ec0\u4e48\u53ef\u4ee5\u4e3a\u5b83\u6709\u6548\u5145\u7535.%n%n[note]\u4f60\u53ea\u9700\u8981\u9009\u62e9\u5176\u4e00.[/note]%n%n\u53e6\u5916\u522b\u5fd8\u4e86,\u5982\u679c\u4f60\u53ea\u60f3\u5145\u7535\u7684\u8bdd,\u80fd\u91cf\u5b58\u50a8\u6a21\u5757/\u50a8\u80fd\u7c07\u53ef\u4ee5\u63a5\u6536EU\u8f93\u5165,\u800c\u592a\u9633\u80fd\u677f\u5374\u4e0d\u884c(\u800c\u592a\u9633\u98ce\u53d1\u7535\u673a\u56e0\u4e3a\u67d0\u4e9b\u539f\u56e0\u4e5f\u4e0d\u517c\u5bb9...).\u66f4\u9ad8\u7ea7\u7684\u5145\u7535\u66f4\u5feb(\u9ad8\u7ea7\u592a\u9633\u80fd\u677f\u53ea\u9700\u6307\u5411\u592a\u9633\u5373\u53ef\u5728\u6574\u4e2a\u767d\u5929\u4ee5100\uff05%\u529f\u7387\u53d1\u7535,\u800c\u666e\u901a\u592a\u9633\u80fd\u677f\u53ea\u80fd\u5728\u6b63\u5348\u53d1\u7535,\u53e6\u5916\u6df7\u5408\u592a\u9633\u80fd\u677f\u66f4\u5feb.\u800c\u4e14\u6df7\u5408\u592a\u9633\u80fd\u677f\u518d\u4e5f\u4e0d\u4f1a\u53ea\u662f\u653e\u4e0b\u6765\u5c31\u8ba9\u6e38\u620f\u5d29\u6e83\u4e86!)",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALIA==",
                    "tooltip": "<strong>\u6211\u8be5\u600e\u4e48\u4e3a\u8fd9*\u73a9\u610f\u5145\u7535?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>EVA\u88c5\u5907"
                },
                {
                    "name": "\u80bc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2394.png",
                    "x": 180.0,
                    "y": 192.0,
                    "data": "\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u5c06\u6c28\u548c\u8fc7\u6c27\u5316\u6c22\u53cd\u5e94\u53ef\u4ee5\u5236\u53d6\u51fa\u80bc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJWg==",
                    "tooltip": "<strong>\u80bc</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c281</br>\u8fc7\u6c27\u5316\u6c22"
                },
                {
                    "name": "\u8fc7\u6c27\u5316\u6c22",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2396.png",
                    "x": 120.0,
                    "y": 192.0,
                    "data": "\u8fc7\u6c27\u5316\u6c22\u9700\u5728GT++\u5316\u5de5\u5382\u5236\u53d6.  \u5c06\u7a7a\u6c14\u30012-\u4e59\u57fa\u84bd\u6c22\u918c\u548c\u84bd\u8fdb\u884c\u53cd\u5e94.%n%n2-\u4e59\u57fa\u84bd\u918c\u662f\u53ef\u4ee5\u5b8c\u5168\u56de\u6536\u7684,\u6240\u4ee5\u4e0d\u7528\u505a\u592a\u591a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJXA==",
                    "tooltip": "<strong>\u8fc7\u6c27\u5316\u6c22</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2-\u4e59\u57fa\u84bd\u6c22\u918c</br>\u6c281"
                },
                {
                    "name": "\u6728\u536b\u4e00\u5730\u7262",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1723.png",
                    "x": 1080.0,
                    "y": 276.0,
                    "data": "\u7ecf\u8fc7\u65e0\u6570\u5c0f\u65f6\u7684\u5ca9\u6d46\u6e38\u6cf3,\u4f60\u4f1a\u53d1\u73b0\u6728\u536b\u4e00\u5730\u7262.\u6728\u536b\u4e00Boss\u5c06\u6389\u843d\u5b9d\u7bb1\u94a5\u5319,\u5b9d\u7bb1\u4e2d\u67095\u9636\u706b\u7bad\u7684\u8bbe\u8ba1\u56fe.%n%n\u8fd9\u5c06\u89e3\u9501\u571f\u661f\u548c\u5929\u738b\u661f\u7684\u536b\u661f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGuw==",
                    "tooltip": "<strong>\u6728\u536b\u4e00\u5730\u7262</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u706b\u7bad"
                },
                {
                    "name": "\u5230\u7194\u878d\u4e4b\u6d77\u5e95\u90e8\u7684\u65c5\u7a0b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1733.png",
                    "x": 1128.0,
                    "y": 180.0,
                    "data": "\u91d1\u661f\u5f88\u70ed,\u5f88\u70ed,\u5b83\u53ef\u4ee5\u878d\u5316\u94c5.\u6700\u91cd\u8981\u7684\u662f,\u91d1\u661f\u5927\u6c14\u662f\u5982\u6b64\u539a\u5b9e,90\u500d\u4e8e\u4e3b\u4e16\u754c,\u5b83\u5c06\u7c89\u788e\u4f60.\u66f4\u4e0d\u7528\u8bf4\u8fd8\u6709\u786b\u9178\u4e86! \u4f60\u9700\u8981\u5236\u9020\u4e00\u5957\u7279\u6b8a\u7684\u5957\u88c5\u624d\u80fd\u5728\u91d1\u661f\u4e0a\u751f\u5b58,\u800c\u4e0d\u4f1a\u7acb\u5373\u6b7b\u4ea1.%n%n[note]\u4e00\u4e9b\u76d4\u7532\u73b0\u5728\u4e5f\u53ef\u4ee5\u5728\u8fd9\u4e9b\u5927\u6c14\u4e2d\u751f\u5b58.\u5728\u5b83\u4eec\u7684tooltip\u4e2d\u4f1a\u6709\u8bf4\u660e.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGxQ==",
                    "tooltip": "<strong>\u5230\u7194\u878d\u4e4b\u6d77\u5e95\u90e8\u7684\u65c5\u7a0b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "name": "\u5927\u578b\u71c3\u6599\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1730.png",
                    "x": 1152.0,
                    "y": 360.0,
                    "data": "\u6bcf\u4e2a\u706b\u7bad\u90fd\u9700\u8981\u71c3\u6599\u7f50. \u5bf9\u4e8e5\u9636\u706b\u7bad,\u4f60\u9700\u8981\u5236\u4f5c\u4e24\u4e2a\u4e2d\u578b\u548c\u4e24\u4e2a\u91cd\u578b\u71c3\u6599\u7f50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGwg==",
                    "tooltip": "<strong>\u5927\u578b\u71c3\u6599\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>5\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u91cd\u578b\u6c27\u6c14\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1468.png",
                    "x": 684.0,
                    "y": 276.0,
                    "data": "\u91cd\u578b\u6c27\u6c14\u7f50\u662f\u4e00\u4e2a\u50a8\u6c27\u7f50,\u6700\u591a\u53ef\u5bb9\u7eb34000\u5355\u4f4d\u7a7a\u6c14. \u5b83\u7684\u4f5c\u7528\u662f\u5728\u6ca1\u6709\u6c27\u6c14\u6e90\u7684\u533a\u57df\u63d0\u4f9b\u4fbf\u643a\u5f0f\u6c27\u6c14\u6e90.%n%n\u7528\u9014:%n\u4e00\u6b21\u53ef\u4ee5\u4f69\u6234\u4e24\u4e2a\u6c27\u6c14\u7f50. \u8981\u4f69\u6234\u4efb\u4f55\u7c7b\u578b\u7684\u6c27\u6c14\u7f50,\u8bf7\u6253\u5f00\u80cc\u5305\u5e76\u5355\u51fb\u83dc\u5355\u9876\u90e8\u7684Galacticraft\u6807\u7b7e. \u5728\u8fd9\u91cc,\u4f60\u5c06\u770b\u5230\u5404\u79cd\u7c7b\u578b\u8bbe\u5907\u7684\u53ef\u7528\u4f4d\u7f6e. \u53ea\u9700\u5c06\u4f60\u7684\u6c27\u6c14\u7f50\u653e\u5728\u5176\u4e2d\u4e00\u4e2a\u5e26\u6709\u6c27\u6c14\u7f50\u7070\u8272\u56fe\u7247\u7684\u63d2\u69fd\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFvA==",
                    "tooltip": "<strong>\u91cd\u578b\u6c27\u6c14\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u706b\u7bad"
                },
                {
                    "name": "\u53d1\u5c04\u63a7\u5236\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1452.png",
                    "x": 684.0,
                    "y": 132.0,
                    "data": "\u53d1\u5c04\u63a7\u5236\u5668\u5728GTNH\u4e2d\u88ab\u4fee\u6539\uff0c\u63d0\u4f9b\u989d\u5916\u7684\u529f\u80fd.\u5728\u53d1\u5c04\u63a7\u5236\u5668\u8fde\u63a5\u7684\u706b\u7bad\u53d1\u5c04\u5e73\u53f0\u4e0a\u53d1\u5c04\u706b\u7bad,\u5982\u679c\u8bbe\u7f6e\u5408\u9002\u7684\u8bdd,\u5012\u6570\u65f6\u95f4\u53ef\u4ee5\u5f88\u77ed,\u800c\u4e14\u4f60\u4f1a\u76f4\u63a5\u88ab\u4f20\u9001\u5230\u63a5\u6536\u5e73\u53f0.\u867d\u7136\u8fd9\u4f1a\u6d88\u8017\u6700\u5927\u71c3\u6599\u5b58\u50a8\u7684\u4e00\u534a\u71c3\u6599. \u8fd9\u4e00\u64cd\u4f5c\u5728\u9ad8\u5ef6\u8fdf\u670d\u52a1\u5668\u4e2d\u5341\u5206\u6709\u7528,\u53ef\u4ee5\u4f5c\u4e3a\u6ca1\u6709\u9b54\u6cd5\u624b\u6bb5\u65f6\u5019\u7684\u4f20\u9001\u624b\u6bb5.\u4f60\u9700\u8981\u653e\u7f6e\u4e00\u4e2a\u5e26\u6709\u53d1\u5c04\u63a7\u5236\u5668\u7684\u706b\u7bad\u53d1\u5c04\u53f0,\u53ef\u80fd\u8fd8\u6709\u4e00\u4e2a\u71c3\u6599\u6ce8\u5165\u5668\u5728\u53e6\u4e00\u8fb9.%n%n\u5982\u679c\u4f60\u4e0d\u4e3a\u81ea\u5df1\u4f7f\u7528\u706b\u7bad,\u4f60\u53ef\u4ee5\u8bd5\u8bd5\u4f7f\u7528\u8d27\u8fd0\u706b\u7bad.\u8981\u4f7f\u7528\u6ee1\u8f7d\u8d27\u8fd0\u706b\u7bad,\u9700\u8981\u88c5\u5907\u4e00\u4e2a\u706b\u7bad\u53d1\u5c04\u53f0,\u7528\u4e8e\u53d1\u9001\u7269\u54c1,\u5305\u62ec:%n%n\u71c3\u6599\u6ce8\u5165\u5668%n\u53d1\u5c04\u63a7\u5236\u5668%n\u8d27\u7269\u88c5\u8f7d\u5668%n\u4ee5\u53ca\u63a5\u6536\u65b9:%n%n\u71c3\u6599\u6ce8\u5165\u5668%n\u53d1\u5c04\u63a7\u5236\u5668%n\u8d27\u7269\u5378\u8f7d\u5668%n%n\u4e5f\u53ef\u4ee5\u4f7f\u7528BC\u7ba1\u9053(\u4e0d\u5b58\u5728\u7684)\u5c06\u7269\u54c1\u8f6c\u79fb\u5230\u706b\u7bad\u4e2d. \u4e0b\u4e00\u6b65\u662f\u5728\u4e24\u4e2a\u53d1\u5c04\u63a7\u5236\u5668\u4e2d\u8bbe\u7f6e\u9891\u7387(\u5373\u8bbe\u7f6e:A\u5230\u76ee\u6807B,B\u5230\u76ee\u6807A). \u67e5\u770b\u53d1\u5c04\u63a7\u5236\u5668\u4ee5\u8bbe\u7f6e\u81ea\u52a8\u53d1\u5c04. \u7b2c\u4e00\u6b21\u5fc5\u987b\u53f3\u952e\u5355\u51fb\u8d27\u8fd0\u706b\u7bad\u5e76\u6309\u53f3\u4e0a\u89d2\u7684\u53d1\u5c04.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFrA==",
                    "tooltip": "<strong>\u53d1\u5c04\u63a7\u5236\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u706b\u7bad"
                },
                {
                    "name": "\u81ea\u52a8\u5316\u88c5\u5378\u706b\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/204.png",
                    "x": 732.0,
                    "y": 36.0,
                    "data": "\u5982\u679c\u4f60\u4e0d\u80fd\u81ea\u52a8\u88c5\u5378\u706b\u7bad\u7684\u8d27\u7269,\u90a3\u4e48\u6709\u4e00\u4e2a\u81ea\u52a8\u8d27\u8fd0\u706b\u7bad\u6709\u4ec0\u4e48\u7528\uff1f",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAzA==",
                    "tooltip": "<strong>\u81ea\u52a8\u5316\u88c5\u5378\u706b\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u76ee\u6807:\u706b\u661f</br>\u8d27\u8fd0\u706b\u7bad:\u7eaf\u7cb9\u662f\u4e3a\u4e86\u597d\u73a9"
                },
                {
                    "name": "\u6db2\u6c27\u4e0e\u9762\u5305",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1371.png",
                    "x": 552.0,
                    "y": 48.0,
                    "data": "\u6db2\u6001\u6c27\u6c14\u7f50\u662f\u8865\u5145\u6c27\u6c14\u7f50\u7684\u66ff\u4ee3\u65b9\u6848.%n%n\u5c06\u6c27\u5355\u5143\u653e\u5165\u771f\u7a7a\u51b7\u51bb\u673a\u4e2d,\u5373\u53ef\u5f97\u52301\u4e2a\u6db2\u6c27\u5355\u5143.\u5c06\u6db2\u6c27\u8f6c\u79fb\u5230\u5bb9\u5668\u91cc,\u7136\u540e\u518d\u8f6c\u79fb\u5230\u6db2\u6001\u6c27\u6c14\u7f50\u4e2d.%n%n\u8981\u91cd\u65b0\u586b\u5145\u6c27\u6c14\u7f50,\u53ea\u9700\u5c06\u7f50\u548c\u6db2\u6001\u6c27\u6c14\u7f50\u653e\u5165\u6c27\u6c14\u538b\u7f29\u673a\u4e2d\u5373\u53ef\u4f20\u8f93\u6c27\u6c14,\u4e5f\u53ef\u4ee5\u7528\u6c27\u6c14\u6536\u96c6\u5668.%n%n\u6bcf\u4e2a\u6db2\u6c27\u5355\u5143\u53ef\u4ee5\u88c5\u6ee14\u4e2a\u91cd\u578b\u6c27\u6c14\u7f50,6\u4e2a\u4e2d\u578b\u6c27\u6c14\u7f50\u621612\u4e2a\u8f7b\u578b\u6c27\u6c14\u7f50.%n%n\u8fd9\u592a\u683c\u96f7\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFWw==",
                    "tooltip": "<strong>\u6db2\u6c27\u4e0e\u9762\u5305</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c27\u6c14\u538b\u7f29\u673a"
                },
                {
                    "name": "\u706b\u661f\u5730\u7262",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1446.png",
                    "x": 732.0,
                    "y": 180.0,
                    "data": "\u706b\u661f\u5730\u7262\u4e0e\u6708\u7403\u5730\u7262\u673a\u5236\u4e00\u6837,\u706b\u661fBOSS\u5c06\u6389\u843d\u5b9d\u7bb1\u94a5\u5319,\u5b9d\u7bb1\u4e2d\u67093\u9636\u706b\u7bad\u7684\u8bbe\u8ba1\u56fe.%n%n\u5982\u679c\u4f60\u9700\u8981\u592a\u7a7a\u91c7\u77ff\u673a\u6216\u8d27\u8fd0\u706b\u7bad\u7684\u8bbe\u8ba1\u56fe,\u6740\u6b7b\u53e6\u4e00\u4e2a\u706b\u661fBOSS\u5e76\u4ea4\u6362\u8bbe\u8ba1\u56fe.%n\u5728\u4f60\u8e0f\u4e0a\u56de\u5bb6\u7684\u65c5\u9014\u524d,\u8bf7\u52a1\u5fc5\u67e5\u770bEV\u4efb\u52a1\u680f\u4e2d\u6240\u6709\u6709\u5173\u706b\u661f\u7684\u4efb\u52a1,\u770b\u770b\u662f\u5426\u6709\u9057\u6f0f.%n%n",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFpg==",
                    "tooltip": "<strong>\u706b\u661f\u5730\u7262</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u706b\u7bad"
                },
                {
                    "name": "\u706b\u661f\u767b\u9646\u8231",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1432.png",
                    "x": 588.0,
                    "y": 144.0,
                    "data": "\u8f6f\u767b\u9646\u8231\u662f\u8f6f\u7740\u9646\u6240\u5fc5\u9700\u7684. \u5c06\u706b\u661f\u767b\u9646\u8231\u653e\u5728\u964d\u843d\u4f1e\u4e0a\u5e76\u7528\u6c14\u56ca\u5305\u56f4-\u8fd9\u6837\u5c31\u53ef\u4ee5\u4e86,\u5e0c\u671b\u5427.%n%n\u63d0\u793a:\u6709\u65f6\u4f60\u4e0d\u80fd\u53f3\u952e\u6216\u7834\u574f\u767b\u9646\u8231.\u5c1d\u8bd5\u5c06\u6f0f\u6597\u653e\u5728\u4e0b\u65b9\u62bd\u51fa\u7269\u54c1. \u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5,\u8bf7\u5728\u786e\u8ba4\u767b\u9646\u8231\u5b8c\u5168\u505c\u7a33\u540e\u518d\u79bb\u5f00. \u7ea2\u706f\u505c,\u7eff\u706f\u884c,\u6bcf\u4e2a\u4eba\u90fd\u8981\u9075\u5b88\u5bf9\u5427?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFmA==",
                    "tooltip": "<strong>\u706b\u661f\u767b\u9646\u8231</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u4e2d\u578b\u71c3\u6599\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1460.png",
                    "x": 828.0,
                    "y": 276.0,
                    "data": "\u6bcf\u4e2a\u706b\u7bad\u90fd\u9700\u8981\u71c3\u6599\u50a8\u5b58\u7f50. \u5bf9\u4e8e3\u9636\u706b\u7bad,\u4f60\u9700\u8981\u5236\u4f5c\u4e24\u4e2a\u8f7b\u578b\u548c\u4e24\u4e2a\u4e2d\u578b\u71c3\u6599\u7f50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFtA==",
                    "tooltip": "<strong>\u4e2d\u578b\u71c3\u6599\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u4e00\u7532\u57fa\u80bc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2687.png",
                    "x": 156.0,
                    "y": 276.0,
                    "data": "\u5236\u9020CN3H7O3(\u7d2b\u8272)\u706b\u7bad\u71c3\u6599\u7684\u5fc5\u9700\u54c1. \u540c\u6837\u9700\u8981\u901a\u8fc7\u5316\u5de5\u5382\u5236\u9020.%n%n[note]\u67e5\u8be2CN3H7O3\u7684\u5408\u6210\u914d\u65b9,\u53ef\u4ee5\u627e\u5230\u4e00\u7532\u57fa\u80bc\u7684\u6b63\u786e\u914d\u65b9.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKfw==",
                    "tooltip": "<strong>\u4e00\u7532\u57fa\u80bc</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5bc6\u96c6\u80bc"
                },
                {
                    "name": "\u62b5\u8fbe\u6708\u7403",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1072.png",
                    "x": 300.0,
                    "y": 300.0,
                    "data": "\u6211\u6709\u4e00\u4e2a\u5c0f\u793c\u7269\u9001\u7ed9\u4f60:\u4e00\u4e2a\u62a4\u8eab\u7b26,\u5728\u8fd9\u65e0\u6bd4\u9ed1\u6697\u6ee1\u5730\u602a\u7269\u7684\u591c\u665a\u5f88\u6709\u7528.%n%n\u9996\u5148,\u4f60\u5fc5\u987b\u8bc1\u660e\u4f60\u53ef\u4ee5\u81ea\u5df1\u5728\u6708\u7403\u4e0a\u751f\u5b58.\u6316\u6398\u4e00\u4e9b\u6708\u9762\u8349\u76ae\u3001\u6ce5\u571f\u548c\u5ca9\u77f3\u540e,\u4f60\u5c31\u53ef\u4ee5\u83b7\u5f97\u5b83.%n%n\u52a1\u5fc5\u7559\u610fHV\u4efb\u52a1\u680f,\u770b\u770b\u5728\u6708\u7403\u4f60\u9700\u8981\u5bfb\u627e\u54ea\u4e9b\u77ff\u7269.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEMA==",
                    "tooltip": "<strong>\u62b5\u8fbe\u6708\u7403</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u706b\u7bad"
                },
                {
                    "name": "\u6708\u7403\u8f66\u8bbe\u8ba1\u56fe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1435.png",
                    "x": 480.0,
                    "y": 132.0,
                    "data": "\u6708\u7403\u8f66\u9700\u8981\u4e00\u4e2a\u8bbe\u8ba1\u56fe. \u5728NASA\u5de5\u4f5c\u53f0\u7684\u6700\u540e\u4e00\u9875\u4e2d\u89e3\u9501\u8bbe\u8ba1\u56fe. %n%n[note]\u5982\u679c\u4f60\u5728\u6b64\u524d\u7248\u672c\u5df2\u7ecf\u6d88\u8017\u8bbe\u8ba1\u56fe,\u5c06\u5176\u5408\u6210\u4e3a\u4e86\u8bbe\u8ba1\u56fe\u82af\u7247,\u53ef\u901a\u8fc7\u6fc0\u5149\u8680\u523b\u673a\u5c06\u5176\u8fd8\u539f\u6210\u8bbe\u8ba1\u56fe.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFmw==",
                    "tooltip": "<strong>\u6708\u7403\u8f66\u8bbe\u8ba1\u56fe</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6708\u7403\u5730\u7262"
                },
                {
                    "name": "\u6708\u7403\u7684\u767d\u5929\u548c\u9ed1\u591c\u65f6\u95f4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1445.png",
                    "x": 372.0,
                    "y": 216.0,
                    "data": "\u6708\u7403\u7684\u663c\u591c\u5468\u671f\u4e3a2\u5c0f\u65f640\u5206\u949f,\u76f8\u5f53\u4e8e8\u4e2a\u4e3b\u4e16\u754c\u663c\u591c,\u5b83\u4e0e\u4e3b\u4e16\u754c\u4e2d\u7684\u6708\u76f8\u76f8\u5173\u8054. \u6708\u7403\u4e0a\u7684\u767d\u5929\u4ece\u6ee1\u6708\u6301\u7eed\u5230\u4e0b\u4e00\u4e2a\u65b0\u6708(4\u4e2a\u4e3b\u4e16\u754c\u65e5,\u76f8\u5f53\u4e8e1\u5c0f\u65f620\u5206\u949f),\u76f8\u5e94\u7684,\u9ed1\u591c\u4ece\u65b0\u6708\u6301\u7eed\u5230\u4e0b\u4e00\u4e2a\u6ee1\u6708.%n%n\u81ea\u7b2c\u4e00\u4e2a\u4e3b\u4e16\u754c\u6ee1\u6708\u4e4b\u591c\u53d1\u5c04,\u4f60\u964d\u843d\u540e\u53ef\u4ee5\u5b89\u5168\u5ea6\u8fc7\u524d4\u5929\u7684\u4e3b\u4e16\u754c\u65e5(\u6708\u663c),\u7136\u540e\u63a5\u4e0b\u6765\u76844\u4e2a\u4e3b\u4e16\u754c\u65e5\u66f4\u5371\u9669,\u56e0\u4e3a\u654c\u5bf9\u7684\u602a\u7269\u5c06\u80fd\u591f\u5728\u9ed1\u6697\u4e2d\u751f\u6210,\u7b49\u7b49. \u5982\u679c\u4f60\u8ba1\u7b97\u9519\u8bef,\u6708\u76f8\u53ef\u4ee5\u544a\u8bc9\u4f60\u6708\u7403\u7684\u663c\u591c\u66f4\u66ff. \u6ee1\u6708\u662f\u6708\u7403\u767d\u5929\u7684\u5f00\u59cb,\u65b0\u6708(\u6216\u9ed1\u6697\u7684)\u662f\u6708\u7403\u9ed1\u591c\u7684\u5f00\u59cb.%n%n\u5728\u591c\u95f4,\u73af\u5883\u5149\u7ebf\u6c34\u5e73\u53d8\u5f97\u975e\u5e38\u4f4e,\u5141\u8bb8\u654c\u5bf9\u7684\u602a\u7269\u5728\u5730\u9762\u4e0a\u751f\u6210.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFpQ==",
                    "tooltip": "<strong>\u6708\u7403\u7684\u767d\u5929\u548c\u9ed1\u591c\u65f6\u95f4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u706b\u7bad"
                },
                {
                    "name": "\u6708\u7403\u5730\u7262",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1433.png",
                    "x": 480.0,
                    "y": 180.0,
                    "data": "\u5728\u5230\u5904\u5bfb\u627e\u9668\u94c1\u65f6,\u4f60\u4f1a\u53d1\u73b0\u4e00\u4e2a\u6708\u7403\u5730\u7262. \u5730\u7262\u5165\u53e3\u770b\u8d77\u6765\u50cf\u4e00\u4e2a\u6df1\u6d1e,\u522b\u8ddf\u9668\u77f3\u5751\u641e\u6df7\u4e86. \u53bb\u8ddf\u6708\u7403BOSS\u597d\u597d\u5e72\u4e00\u67b6\u5427.BOSS\u4f1a\u6389\u843d\u88c5\u67092\u9636\u706b\u7bad\u8bbe\u8ba1\u56fe\u7684\u5b9d\u7bb1\u94a5\u5319,\u800c\u5b9d\u7bb1\u5c31\u5728\u9694\u58c1.%n%n\u5982\u679c\u4f60\u60f3\u8981\u7b2c\u4e8c\u5f202\u9636\u706b\u7bad\u8bbe\u8ba1\u56fe,\u4ee5\u6362\u53d6\u6708\u7403\u8f66\u8bbe\u8ba1\u56fe,\u90a3\u5c31\u5728\u53e6\u4e00\u4e2a\u5730\u7262\u91cc\u518d\u6b21\u6740\u6b7b\u6708\u7403BOSS.%n%n\u6253\u5f00NASA\u5de5\u4f5c\u53f0\u7684GUI,\u70b9\u51fb\u4e0b\u4e00\u4e2a,\u5c06\u8bbe\u8ba1\u56fe\u653e\u5165\u65b0\u589e\u8bbe\u8ba1\u56fe\u9875\u9762\u5185\u7684\u63d2\u69fd\u4e2d,\u70b9\u51fb\u89e3\u9501\u8bbe\u8ba1\u56fe\u5373\u53ef. \u6b64\u89e3\u9501\u4e0e\u73a9\u5bb6\u7ed1\u5b9a,\u6240\u4ee5\u4f60\u53ef\u4ee5\u653e\u5fc3\u5730\u79fb\u52a8\u5de5\u4f5c\u53f0.%n%n[note]\u5982\u679c\u4f60\u5728\u6b64\u524d\u7248\u672c\u5df2\u7ecf\u6d88\u8017\u8bbe\u8ba1\u56fe,\u5c06\u5176\u5408\u6210\u4e3a\u4e86\u8bbe\u8ba1\u56fe\u82af\u7247,\u53ef\u901a\u8fc7\u6fc0\u5149\u8680\u523b\u673a\u5c06\u5176\u8fd8\u539f\u6210\u8bbe\u8ba1\u56fe.[/note]%n%n[note]\u6240\u6709\u7684\u5730\u7262\u673a\u5236\u90fd\u662f\u4e00\u6837\u7684,\u533a\u522b\u4ec5\u5728\u4e8eBOSS\u4e0d\u540c. \u53e6\u5916,\u6709\u7684\u65f6\u5019BOSS\u623f\u6216\u8005\u5b9d\u7bb1\u623f\u6ca1\u6709\u751f\u6210,\u5982\u679c\u56db\u5468\u6316\u5f00\u90fd\u6ca1\u627e\u5230\u7684\u8bdd,\u8bf7\u518d\u627e\u4e00\u4e2a\u5730\u7262\u5427.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFmQ==",
                    "tooltip": "<strong>\u6708\u7403\u5730\u7262</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u706b\u7bad\u53d1\u5c04\u5e73\u53f0</br>\u52a0\u6cb9\u7ad9</br>1\u9636\u706b\u7bad</br>\u6c27\u6c14\u538b\u7f29\u673a"
                },
                {
                    "name": "\u767b\u9646\u6708\u7403",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/816.png",
                    "x": 444.0,
                    "y": 156.0,
                    "data": "\u767b\u9646\u6708\u7403\u5e94\u8be5\u5b9e\u73b0\u8f6f\u7740\u9646. \u56e0\u6b64\u4f60\u9700\u8981\u4e00\u4e2a\u9891\u7387\u6a21\u5757\u6765\u63a2\u6d4b\u6708\u7403\u4e0a\u7684\u4e00\u4e9b\u72b6\u51b5,\u8fd8\u9700\u8981\u4e00\u4e2a\u8212\u670d\u7684\u5ea7\u6905(\u540e\u9762\u53ef\u80fd\u8fd8\u8981\u9020\u4e2a\u6708\u7403\u8f66).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADMA==",
                    "tooltip": "<strong>\u767b\u9646\u6708\u7403</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8f66\u5ea7</br>\u706b\u7bad\u5f15\u64ce"
                },
                {
                    "name": "\u6708\u7403\u5de1\u903b\u961f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1434.png",
                    "x": 480.0,
                    "y": 96.0,
                    "data": "\u5728\u6708\u7403\u6216\u5176\u4ed6\u661f\u7403\u8868\u9762\u4e0a\u79fb\u52a8\u5f97\u66f4\u5feb\u4f1a\u5f88\u6709\u8da3. \u6211\u76f8\u4fe1\u5b83\u5b8c\u5168\u5b89\u5168.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFmg==",
                    "tooltip": "<strong>\u6708\u7403\u5de1\u903b\u961f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6708\u7403\u8f66\u8bbe\u8ba1\u56fe"
                },
                {
                    "name": "\u8418",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2694.png",
                    "x": 96.0,
                    "y": 120.0,
                    "data": "\u5c06\u7164\u7126\u6cb9\u548c\u786b\u9178\u6df7\u5408\u4ee5\u83b7\u5f97\u542b\u786b\u7164\u7126\u6cb9.%n%n\u7136\u540e\u84b8\u998f\u7164\u7126\u6cb9\u83b7\u5f97\u8418. \u770b\u8d77\u6765\u5f88\u7b80\u5355? \u4f1a\u8d8a\u6765\u8d8a\u96be\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKhg==",
                    "tooltip": "<strong>\u8418</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7164\u7126\u84b8\u998f"
                },
                {
                    "name": "NASA\u5de5\u4f5c\u53f0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2744.png",
                    "x": 336.0,
                    "y": 12.0,
                    "data": "NASA\u5de5\u4f5c\u53f0\u7528\u4e8e\u88c5\u914d\u706b\u7bad\u53ca\u5176\u4ed6\u76f8\u5173\u8f7d\u5177. \u628a\u5b83\u9020\u51fa\u6765,\u7136\u540e\u8d70\u5411\u4f60\u7684\u661f\u8fb0\u5927\u6d77\u5427.%n%n[note]\u63d0\u793a:\u8bf7\u67e5\u770b\u4f7f\u7528\u67af\u7aed\u6c34\u6676\u548c\u4e16\u754c\u76d0\u5236\u9020\u4e0b\u754c\u4e4b\u661f\u7684\u5408\u6210\u8868. \u4f7f\u7528\u5ca9\u6d46\u818f\u3001\u70c8\u7130\u7c89\u548c\u5c0f\u64ae\u4e0b\u754c\u4e4b\u661f\u7c89\u5373\u53ef\u590d\u5236\u67af\u7aed\u6c34\u6676.[/note]%n%n[note]\u53e6\u5916,\u5982\u679c\u4f60\u7684\u51cb\u7075\u9ab7\u9ac5\u5934\u4e0d\u8db3,\u53ef\u4ee5\u8bd5\u8bd5\u5236\u9020\u5288\u5200\u6216\u70bd\u7130\u4e4b\u5544\u9885\u5251.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKuA==",
                    "tooltip": "<strong>NASA\u5de5\u4f5c\u53f0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c3\u9636\u6bb5(HV)</br>\u590d\u4ec7\u8005\u8054\u76df3,\u7ec4\u88c5!</br>\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f"
                },
                {
                    "name": "\u6f02\u4eae\u53c8\u8212\u9002 - \u5728\u592a\u7a7a!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1473.png",
                    "x": 780.0,
                    "y": 228.0,
                    "data": "\u5373\u4f7f\u5728\u6700\u5bd2\u51b7\u7684\u5916\u5c42\u7a7a\u95f4,\u8fd9\u4e9b\u4fdd\u6696\u8863\u670d\u4e5f\u80fd\u8ba9\u4f60\u4fdd\u6301\u6e29\u6696. \u51e0\u4e4e\u6240\u67093\u9636\u4ee5\u4e0a\u7684\u661f\u7403\u90fd\u9700\u8981\u5b83\u4eec.%n%n[note]\u4f60\u8fd8\u9700\u8981\u4e00\u4e9b\u805a\u82ef\u5e76\u54aa\u5511(PBI).[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFwQ==",
                    "tooltip": "<strong>\u6f02\u4eae\u53c8\u8212\u9002 - \u5728\u592a\u7a7a!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u56db\u6c27\u5316\u4e8c\u6c2e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2293.png",
                    "x": 180.0,
                    "y": 360.0,
                    "data": "\u60f3\u8981\u5236\u53d6\u56db\u6c27\u5316\u4e8c\u6c2e,\u4f60\u9700\u8981\u5c06\u4e00\u4e9b\u94dc\u7c89\u548c\u785d\u9178\u914d\u5408\u6a59\u8272\u91d1\u5c5e\u50ac\u5316\u5242\u5728\u5316\u5de5\u5382\u5185\u8fdb\u884c\u53cd\u5e94. \u50ac\u5316\u5242\u9700\u8981\u7528\u5230\u94af,\u4f60\u5df2\u7ecf\u56e4\u79ef\u4e86\u4e00\u4e9b\u662f\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI9Q==",
                    "tooltip": "<strong>\u56db\u6c27\u5316\u4e8c\u6c2e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>CN3H7O3(\u7d2b\u8272)\u706b\u7bad\u71c3\u6599</br>\u785d\u9178</br>\u94af"
                },
                {
                    "name": "\u4e0d\u9700\u8981\u51fb\u8d25boss!\u591a\u4e48\u4ee4\u4eba\u4f24\u5fc3!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5074117915743852125.png",
                    "x": 384.0,
                    "y": 492.0,
                    "data": "\u4f60\u4e0d\u9700\u8981\u51fb\u8d25\u4efb\u4f55\u5916\u661fBOSS\u6765\u83b7\u53d6\u8fd9\u5f20\u56fe\u7eb8.\u4f46\u4f60\u8fd8\u662f\u5f97\u82b1\u70b9\u65f6\u95f4.%n%n\u5728\u7814\u7a76\u7ad9\u4e2d\u626b\u63cf8\u9636\u706b\u7bad\u8bbe\u8ba1\u56fe\u540e,\u4f60\u53ef\u4ee5\u7528\u88c5\u914d\u7ebf\u5236\u4f5c\u7a7f\u68ad\u673a\u8bbe\u8ba1\u56fe.",
                    "quest_id": "gAchVo6VSBO5lRyjs6Rpow==",
                    "tooltip": "<strong>\u4e0d\u9700\u8981\u51fb\u8d25boss!\u591a\u4e48\u4ee4\u4eba\u4f24\u5fc3!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u529b\u573a\u53d1\u751f\u5668(UHV)</br>8\u9636\u706b\u7bad</br>UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 2"
                },
                {
                    "name": "\u6c27\u6c14\u5206\u914d\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1440.png",
                    "x": 336.0,
                    "y": 300.0,
                    "data": "\u6c27\u6c14\u5206\u914d\u5668\u4ece\u6c27\u6c14\u6536\u96c6\u5668\u4e2d\u5438\u53d6\u6c27\u6c14,\u5e76\u4ea7\u751f\u6c27\u6c14\u6c14\u6ce1,\u63d0\u4f9b\u4e00\u4e2a\u5b89\u5168\u547c\u5438\u7684\u533a\u57df,\u65e0\u9700\u4f9b\u6c27\u88c5\u5907. \u6c14\u6ce1\u662f\u56f4\u7ed5\u5206\u914d\u5668\u7684\u7403\u4f53,\u80fd\u7a7f\u8fc7\u5899\u58c1(\u6216\u4efb\u4f55\u65b9\u5757). \u6216\u8005,\u4f60\u53ef\u4ee5\u4f7f\u7528\u6c27\u6c14\u4f9b\u7ed9\u5668(\u9700\u8981\u538b\u7f29\u6234\u65af\u677f)\u5c06\u6c27\u6c14\u7559\u5728\u623f\u95f4\u5185.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFoA==",
                    "tooltip": "<strong>\u6c27\u6c14\u5206\u914d\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u706b\u7bad"
                },
                {
                    "name": "\u6c27\u6c14\u6536\u96c6\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/828.png",
                    "x": 444.0,
                    "y": 48.0,
                    "data": "\u6c27\u6c14\u6536\u96c6\u5668\u53ef\u4ee5\u4ece\u6811\u6728\u6216\u519c\u4f5c\u7269\u4e2d\u6536\u96c6\u6c27\u6c14,\u5e76\u63d0\u4f9b\u7ed9\u5982\u6c27\u6c14\u5206\u914d\u5668\u3001\u6c27\u6c14\u4f9b\u7ed9\u5668\u3001\u6c27\u6c14\u538b\u7f29\u673a\u6216\u5176\u4ed6\u9700\u8981\u6c27\u6c14\u7684\u8bbe\u5907.\u5982\u679c\u4f60\u6253\u7b97\u5728\u6708\u7403\u5efa\u7acb\u4e00\u4e2a\u57fa\u5730,\u90a3\u4e48\u5c31\u9700\u8981\u8fd9\u4e2a\u8bbe\u5907\u63d0\u4f9b\u6301\u7eed\u7684\u6c27\u6c14\u4f9b\u5e94.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADPA==",
                    "tooltip": "<strong>\u6c27\u6c14\u6536\u96c6\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c27\u6c14\u7f50"
                },
                {
                    "name": "\u6c27\u6c14\u538b\u7f29\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/829.png",
                    "x": 516.0,
                    "y": 48.0,
                    "data": "\u6c27\u6c14\u538b\u7f29\u673a\u662f\u7528\u6765\u8865\u5145\u672a\u6ee1\u6216\u8005\u5df2\u7ecf\u8017\u5c3d\u7684\u6c27\u6c14\u7f50\u5185\u6c27\u6c14\u7684\u8bbe\u5907. \u5c06\u6c27\u6c14\u901a\u8fc7\u6c27\u6c14\u7ba1\u9053\u8fde\u63a5\u5230\u84dd\u8272\u4e00\u4fa7\u8f93\u5165\u673a\u5668\u5185\u90e8,\u7535\u6e90\u5219\u8981\u4ece\u7070\u8272\u7684\u9762\u8f93\u5165.\u5728\u673a\u5668\u7684GUI\u53f3\u4e0b\u89d2\u653e\u5165\u6c27\u6c14\u7f50\u4ed6\u5c31\u4f1a\u5c06\u6c27\u6c14\u538b\u7f29\u8fdb\u6c27\u6c14\u7f50\u5185.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADPQ==",
                    "tooltip": "<strong>\u6c27\u6c14\u538b\u7f29\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c27\u6c14\u7f50"
                },
                {
                    "name": "\u4f9b\u6c27\u7cfb\u7edf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/822.png",
                    "x": 480.0,
                    "y": 12.0,
                    "data": "\u4f9b\u6c27\u7cfb\u7edf\u662f\u7528\u6765\u5c06\u6c27\u6c14\u7f50\u5185\u7684\u6c27\u6c14\u8f93\u9001\u81f3\u6c27\u6c14\u9762\u7f69\u5185. \u8fd9\u5bf9\u5b87\u822a\u5458\u6765\u8bf4\u53ef\u662f\u975e\u5e38\u91cd\u8981\u7684\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADNg==",
                    "tooltip": "<strong>\u4f9b\u6c27\u7cfb\u7edf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c27\u6c14\u9762\u7f69"
                },
                {
                    "name": "\u6c27\u6c14\u9762\u7f69",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/823.png",
                    "x": 444.0,
                    "y": 12.0,
                    "data": "\u6c27\u6c14\u9762\u7f69\u662f\u7528\u6765\u5728\u6ca1\u6709\u6c27\u6c14\u7684\u884c\u661f\u4e0a\u9762\u547c\u5438\u7684\u4f9b\u6c27\u7cfb\u7edf\u7684\u4e00\u90e8\u5206.\u5176\u4ed6\u7684\u8fd8\u9700\u8981\u4f9b\u6c27\u8bbe\u5907\u548c\u6c27\u6c14\u7f50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADNw==",
                    "tooltip": "<strong>\u6c27\u6c14\u9762\u7f69</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>NASA\u5de5\u4f5c\u53f0</br>\u57fa\u7840\u7535\u8def\u7ec4\u88c5\u673a"
                },
                {
                    "name": "\u6c27\u6c14\u4f9b\u7ed9\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1467.png",
                    "x": 636.0,
                    "y": 132.0,
                    "data": "\u6c27\u6c14\u4f9b\u7ed9\u5668\u662f\u4e00\u79cd\u7528\u6c27\u6c14\u586b\u5145\u623f\u95f4\u7684\u673a\u5668(\u867d\u7136\u6c27\u6c14\u901a\u5e38\u4e0d\u53ef\u89c1),\u6700\u591a\u53ef\u586b\u5145\u8fbe800-1000\u5757(\u5806\u53e0\u591a\u4e2a\u4f9b\u7ed9\u5668),\u5141\u8bb8\u73a9\u5bb6\u5728\u6ca1\u6709\u6c27\u6c14\u88c5\u5907\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u547c\u5438. \u4e0e\u6c27\u6c14\u5206\u914d\u5668\u4e0d\u540c,\u6c27\u6c14\u4f9b\u7ed9\u5668\u5c06\u6c27\u6c14\u9650\u5236\u5728\u5b83\u6240\u5904\u7684\u623f\u95f4\u5185. \u5fc5\u987b\u7ed9\u4f9b\u7ed9\u5668\u63d0\u4f9b\u80fd\u91cf\u548c\u8db3\u591f\u7684\u6c27\u6c14. \u8bf7\u53c2\u9605\u6c27\u6c14\u6536\u96c6\u5668\u4ee5\u4f9b\u5e94\u6c27\u6c14.%n%n\u4f9b\u7ed9\u5668\u4ec5\u9002\u7528\u4e8e\u4e0e\u5916\u90e8\u7a7a\u95f4\u5b8c\u5168\u5bc6\u5c01\u7684\u623f\u95f4. \u8fd9\u53ef\u4ee5\u901a\u8fc7\u5b8c\u5168\u5c01\u95ed\u7684\u623f\u95f4\u6216\u6c14\u5bc6\u95f8\u6765\u5b9e\u73b0. \u4f9b\u7ed9\u5668\u7684\u4e0a\u65b9\u5fc5\u987b\u6ca1\u6709\u4efb\u4f55\u4e1c\u897f\u963b\u6321\u5176\u901a\u98ce\u53e3. \u5b83\u5c06\u6bcf5\u79d2\u68c0\u67e5\u7a7a\u95f4\u7684\u5bc6\u95ed\u6027,\u56e0\u6b64\u8bf7\u52a1\u5fc5\u968f\u65f6\u4fdd\u6301\u5bc6\u5c01.%n%n\u6bcf\u4e2a\u4f9b\u7ed9\u5668\u6bcf\u79d2\u81f3\u5c11\u9700\u8981320\u5355\u4f4d\u7a7a\u6c14\u624d\u80fd\u8fde\u7eed\u5de5\u4f5c,\u5426\u5219\u4f1a\u5931\u6548.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFuw==",
                    "tooltip": "<strong>\u6c27\u6c14\u4f9b\u7ed9\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u706b\u7bad"
                },
                {
                    "name": "\u6c27\u6c14\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/824.png",
                    "x": 480.0,
                    "y": 48.0,
                    "data": "\u8f7b\u578b\u6c27\u6c14\u7f50\u53ef\u4ee5\u50a8\u5b581000\u5355\u4f4d\u7684\u6c27\u6c14,\u5728\u6ca1\u6709\u6c27\u6c14\u7684\u533a\u57df\u53ef\u4ee5\u4f5c\u4e3a\u4fbf\u643a\u5f0f\u7684\u6c27\u6c14\u6765\u6e90.%n%n\u4f7f\u7528\u65b9\u6cd5:%n\u6bcf\u6b21\u6700\u591a\u88c5\u5907\u4e24\u4e2a\u4efb\u610f\u7c7b\u578b\u7684\u6c27\u6c14\u7f50,\u6253\u5f00\u7269\u54c1\u680f,\u70b9\u51fb\u4e0a\u65b9\u7684Galacticraft\u6807\u7b7e,\u5728\u8fd9\u91cc\u4f60\u5c06\u4f1a\u770b\u5230\u643a\u5e26\u5404\u79cd\u88c5\u5907\u7684\u4f4d\u7f6e.\u5c06\u6c27\u6c14\u7f50\u653e\u8fdb\u6c27\u6c14\u7f50\u69fd\u4f4d\u5373\u53ef\u5b8c\u6210\u88c5\u5907. \u8fd8\u6709\u5176\u4ed6\u7c7b\u578b\u7684\u6c27\u6c14\u7f50,\u4e2d\u578b\u6c27\u6c14\u7f50\u50a8\u5b58\u7684\u6c27\u6c14\u91cf\u662f\u8f7b\u578b\u76842\u500d,\u91cd\u578b\u6c27\u6c14\u7f50\u5219\u662f4\u500d,\u8d85\u5927\u578b\u6c27\u6c14\u7f50\u662f8\u500d,\u6781\u5927\u578b\u6c27\u6c14\u7f50\u662f16\u500d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADOA==",
                    "tooltip": "<strong>\u6c27\u6c14\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f9b\u6c27\u7cfb\u7edf</br>\u6c27\u6c14\u9762\u7f69"
                },
                {
                    "name": "\u964d\u843d\u4f1e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/830.png",
                    "x": 516.0,
                    "y": 12.0,
                    "data": "\u964d\u843d\u4f1e\u53ef\u4ee5\u9632\u6b62\u5728\u8fd4\u56de\u4e3b\u4e16\u754c\u5927\u6c14\u5c42\u662f\u662f\u964d\u843d\u7684\u65f6\u5019\u6454\u6b7b. \u964d\u843d\u4f1e\u662f\u592a\u7a7a\u65c5\u884c\u4e2d\u4e0d\u53ef\u7f3a\u5c11\u7684\u5fc5\u5907\u88c5\u5907\u4e4b\u4e00. \u4e0d\u5e26\u7740\u964d\u843d\u4f1e\u5c31\u8fdb\u884c\u592a\u7a7a\u4e4b\u65c5\u662f\u975e\u5e38\u5371\u9669\u7684. \u5982\u679c\u4f60\u8bd5\u56fe\u4e0d\u5e26\u964d\u843d\u4f1e\u53d1\u5c04\u706b\u7bad,\u751a\u81f3\u4f1a\u6536\u5230\u8b66\u544a. \u4f7f\u7528\u7ec4\u88c5\u673a\u53ef\u8282\u7701\u6750\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADPg==",
                    "tooltip": "<strong>\u964d\u843d\u4f1e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f9b\u6c27\u7cfb\u7edf"
                },
                {
                    "name": "\u6c38\u4e45\u6c27\u6c14\u7cfb\u7edf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1439.png",
                    "x": 336.0,
                    "y": 336.0,
                    "data": "\u4f60\u51b3\u5b9a\u5728\u6708\u7403\u4e0a\u505c\u7559\u66f4\u957f\u65f6\u95f4,\u5bfb\u627e\u4e00\u4e2a\u6c38\u4e45\u6027\u7684\u6c27\u6c14\u8bbe\u5907\u6765\u91cd\u65b0\u586b\u5145\u4f60\u7684\u6237\u5916\u88c5\u5907\u5e76\u5efa\u9020\u4e00\u4e2a\u5c0f\u57fa\u5730. \u522b\u5fd8\u4e86\u4f60\u7684\u5de5\u5177\u548c\u88c5\u7532\u9700\u8981\u4fee\u7406!\u2014\u2014\u2014\u2014DreamMaster2018!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFnw==",
                    "tooltip": "<strong>\u6c38\u4e45\u6c27\u6c14\u7cfb\u7edf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c27\u6c14\u5206\u914d\u5668"
                },
                {
                    "name": "\u90bb\u82ef\u4e8c\u7532\u9178,\u9177\u5b69\u5b50\u7684\u65b9\u5f0f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2693.png",
                    "x": 132.0,
                    "y": 120.0,
                    "data": "\u5728\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u7528\u8418\u548c\u9502\u5236\u6210\u90bb\u82ef\u4e8c\u7532\u9178.%n%n\u8bbd\u523a\u7684\u662f,\u4f60\u65e0\u6cd5\u7528\u77f3\u8111\u6cb9\u5236\u51fa\u8fd9\u4e2a.%n%n\u8bd1\u8005\u6ce8:\u90bb\u82ef\u4e8c\u7532\u9178\u7684\u82f1\u6587\u540d\u662fPhthalic acid,\u77f3\u8111\u6cb9\u7684\u82f1\u6587\u540d\u662fNaphtha,\u4e24\u8005\u90fd\u542b\u6709\"phtha\".",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKhQ==",
                    "tooltip": "<strong>\u90bb\u82ef\u4e8c\u7532\u9178,\u9177\u5b69\u5b50\u7684\u65b9\u5f0f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8418"
                },
                {
                    "name": "\u884c\u661f\u4e4b\u6cea",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2072.png",
                    "x": 300.0,
                    "y": 216.0,
                    "data": "\u4f60\u786e\u5b9e\u4f1a\u4e3a\u6240\u6709\u7b49\u9636\u884c\u661f\u7684\u7e41\u7410\u8981\u6c42\u800c\u6d41\u6cea\u7684.\u8fd9\u91cc\u6709\u4e00\u4efd\u6709\u7528\u7684\u53c2\u8003\u8d44\u6599.%n%n1\u9636-\u9700\u8981\u4f9b\u6c27\u8bbe\u5907%n\u6708\u7403%n%n2\u9636-\u9700\u8981\u9694\u70ed\u5957\u88c5%n\u706b\u661f%n\u706b\u536b\u4e00%n\u706b\u536b\u4e8c%n%n3\u9636-\u9700\u89812\u9636\u9694\u70ed\u5957\u88c5%n\u5c0f\u884c\u661f-\u65e0\u91cd\u529b\u73af\u5883,\u56e0\u4e3a\u6ca1\u6709\u884c\u661f%n\u8c37\u795e\u661f%n\u6728\u536b\u4e8c%n\u6728\u536b\u4e09%n\u6728\u536b\u56db%n\u7f57\u65af128b-\u5b9c\u5c45\u884c\u661f(\u65e0\u9700\u4f9b\u6c27\u8bbe\u5907/\u9694\u70ed\u5957\u88c5)%n%n4\u9636-\u9700\u89812\u9636\u9694\u70ed\u5957\u88c5%n\u6728\u536b\u4e00%n\u6c34\u661f%n\u91d1\u661f-\u9700\u8981\u5b87\u822a\u670d%n%n5\u9636-\u9700\u89812\u9636\u9694\u70ed\u5957\u88c5%n\u571f\u536b\u4e8c%n\u571f\u536b\u516d%n\u5929\u536b\u4e94%n\u5929\u536b\u56db%n\u7f57\u65af128ba%n%n6\u9636-\u9700\u89812\u9636\u9694\u70ed\u5957\u88c5%n\u6d77\u536b\u516b%n\u6d77\u536b\u4e00%n%n7\u9636-\u9700\u89812\u9636\u9694\u70ed\u5957\u88c5%n\u67ef\u4f0a\u4f2f\u5e26-\u65e0\u91cd\u529b\u73af\u5883%n\u51a5\u738b\u661f%n\u598a\u795e\u661f%n\u9e1f\u795e\u661f%n%n8\u9636-\u9700\u89812\u9636\u9694\u70ed\u5957\u88c5%n\u534a\u4eba\u9a6cBb-\u9700\u8981\u5b87\u822a\u670d%n\u5df4\u7eb3\u5fb7C-\u5b9c\u5c45\u884c\u661f(\u65e0\u9700\u4f9b\u6c27\u8bbe\u5907/\u9694\u70ed\u5957\u88c5)%n\u7ec7\u5973B%n\u5df4\u7eb3\u5fb7E%n\u5df4\u7eb3\u5fb7F%n\u9cb8\u9c7c\u5ea7E-\u5b9c\u5c45\u884c\u661f(\u65e0\u9700\u4f9b\u6c27\u8bbe\u5907/\u9694\u70ed\u5957\u88c5)%n%n9\u9636%n\u8377\u9c81\u65af-\u9700\u89811\u9636\u9694\u70ed\u5957\u88c5%n\u5948\u4f69\u5c14-\u5b9c\u5c45\u884c\u661f(\u65e0\u9700\u4f9b\u6c27\u8bbe\u5907/\u9694\u70ed\u5957\u88c5)%n\u8fc8\u7f55\u5e26%n\u9a6c\u8d6b\u65af%n\u8d5b\u7279%n\u963f\u52aa\u6bd4\u65af-\u9700\u89812\u9636\u9694\u70ed\u5957\u88c5%n%n\u8bd1\u8005\u6ce8:%n%n\u5b87\u822a\u670d-\u9694\u70ed\u5957\u88c5-\u4f9b\u6c27\u8bbe\u5907-\u5b9c\u5c45\u884c\u661f%n\u8fd9\u56db\u4e2a\u9700\u6c42\u4f9d\u6b21\u964d\u4f4e,\u9ad8\u9700\u6c42\u5fc5\u987b\u5148\u6ee1\u8db3\u4f4e\u9700\u6c42.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIGA==",
                    "tooltip": "<strong>\u884c\u661f\u4e4b\u6cea</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u706b\u7bad"
                },
                {
                    "name": "\u51a5\u738b\u661f\u5730\u7262",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2708.png",
                    "x": 576.0,
                    "y": 492.0,
                    "data": "\u7ecf\u8fc7\u65e0\u6570\u5c0f\u65f6\u7684\u5bfb\u627e,\u4f60\u7ec8\u4e8e\u53d1\u73b0\u4e86\u51a5\u738b\u661f\u5730\u7262. \u51a5\u738b\u661fBoss\u5c06\u6389\u843d\u5b9d\u7bb1\u94a5\u5319,\u5b9d\u7bb1\u4e2d\u67098\u9636\u706b\u7bad\u7684\u8bbe\u8ba1\u56fe\u6216\u9f99\u82af\u56fe\u7eb8.%n%n\u8fd9\u5c06\u89e3\u9501\u592a\u9633\u7cfb\u5916\u7684\u8bb8\u591a\u661f\u7403,\u6bd4\u5982\u5df4\u7eb3\u5fb7\u661f\u7cfb.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKlA==",
                    "tooltip": "<strong>\u51a5\u738b\u661f\u5730\u7262</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>7\u9636\u706b\u7bad"
                },
                {
                    "name": "\u6d77\u536b\u516b\u5730\u7262",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2750.png",
                    "x": 840.0,
                    "y": 492.0,
                    "data": "\u7ecf\u8fc7\u65e0\u6570\u5c0f\u65f6\u7684\u5bfb\u627e,\u4f60\u7ec8\u4e8e\u53d1\u73b0\u4e86\u6d77\u536b\u516b\u5730\u7262. \u6d77\u536b\u516bBoss\u5c06\u6389\u843d\u5b9d\u7bb1\u94a5\u5319,\u5b9d\u7bb1\u4e2d\u67097\u9636\u706b\u7bad\u7684\u8bbe\u8ba1\u56fe.%n%n\u8fd9\u5c06\u89e3\u9501\u51a5\u738b\u661f\u548c\u67ef\u4f0a\u4f2f\u5e26.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKvg==",
                    "tooltip": "<strong>\u6d77\u536b\u516b\u5730\u7262</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>6\u9636\u706b\u7bad"
                },
                {
                    "name": "\u56de\u6536\u706b\u7bad,\u4fdd\u62a4\u73af\u5883",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1430.png",
                    "x": 504.0,
                    "y": 216.0,
                    "data": "\u4e3a\u4ec0\u4e48\u4e0d\u56de\u6536\u65e7\u76841\u9636\u706b\u7bad\u6765\u83b7\u5f97\u65b0\u76842\u9636\u706b\u7bad\u7684\u7ec4\u4ef6\uff1f \u5c06\u65e7\u706b\u7bad\u653e\u5165\u7535\u5f27\u7089\u6216\u7b49\u79bb\u5b50\u7535\u5f27\u7089\u4e2d\u4ee5\u56de\u6536\u5927\u91cf\u6750\u6599.%n%n\u5728\u56de\u6536\u4e4b\u524d\u8bf7\u786e\u8ba4\u662f\u5426\u5df2\u7ecf\u4e0d\u518d\u9700\u8981\u65e7\u706b\u7bad\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFlg==",
                    "tooltip": "<strong>\u56de\u6536\u706b\u7bad,\u4fdd\u62a4\u73af\u5883</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u4e07\u7269</br>\u6708\u7403\u5730\u7262"
                },
                {
                    "name": "\u9009\u62e9\u5956\u52b1:\u5956\u52b1\u5305",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/218.png",
                    "x": 480.0,
                    "y": 252.0,
                    "data": "\u4f60\u4e0d\u9700\u8981\u79c1\u4eba\u7ef4\u5ea6\uff1f\u597d\u5427\u90a3\u4e48\u4f60\u53ef\u80fd\u5f88\u9ad8\u5174\u5f97\u5230\u4e00\u4e9b\u5956\u52b1\u5305. \u505a\u597d\u4f60\u7684\u9009\u62e9!\u4f60\u53ea\u6709\u4e00\u6b21\u673a\u4f1a.%n%n[note]PS\uff1a \u5956\u52b1\u5305\u91cc\u9762\u57fa\u672c\u6ca1\u5565\u4e1c\u897f,\u522b\u9009.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA2g==",
                    "tooltip": "<strong>\u9009\u62e9\u5956\u52b1:\u5956\u52b1\u5305</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4efd\u5956\u52b1</br>\u9009\u62e9\u5956\u52b1:\u79c1\u4eba\u7ef4\u5ea6"
                },
                {
                    "name": "\u9009\u62e9\u5956\u52b1:\u79c1\u4eba\u7ef4\u5ea6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/217.png",
                    "x": 432.0,
                    "y": 252.0,
                    "data": "\u538c\u5026\u4e86\u4f60\u57fa\u5730\u91cc\u9762\u7684\u602a\u7269\uff1f\u60f3\u5728\u4e00\u4e9b\u7279\u522b\u7684\u5730\u65b9\u6765\u5efa\u9020\u4f60\u7684\u65b0\u5bb6\uff1f\u6bd4\u5982\u4e00\u4e2a\u79c1\u6709\u7ef4\u5ea6\uff1f \u90a3\u4e48\u73b0\u5728\u8fd9\u5c31\u662f\u4f60\u7684\u673a\u4f1a,\u4f60\u53ea\u6709\u4e00\u6b21\u9009\u62e9\u7684\u673a\u4f1a!%n%n\u5f53\u4f60\u9996\u6b21\u6fc0\u6d3b\u4f20\u9001\u95e8\u65f6,\u4f60\u53ef\u4ee5\u628a\u8fd9\u4e2a\u79c1\u4eba\u7ef4\u5ea6\u8bbe\u7f6e\u6210\u4f60\u60f3\u8981\u7684\u6837\u5b50\uff1a\u53ef\u4ee5\u662f\u4e00\u4e2a\u865a\u7a7a\u4e16\u754c,\u6216\u662f\u4efb\u610f\u8d85\u5e73\u5766\u4e16\u754c,\u53ea\u7531\u7c7b\u4f3c\u8349\u65b9\u5757\u3001\u77f3\u5934\u3001\u5706\u77f3\u3001\u57fa\u5ca9\u7b49\u65b9\u5757\u6784\u6210.%n\u8bf7\u6ce8\u610f! \u5b8c\u6210\u4e16\u754c\u7684\u8bbe\u7f6e\u540e,\u4f60\u5c31\u53ea\u80fd\u6539\u53d8\u6e32\u67d3\u8bbe\u7f6e\u4e86(Shift+\u53f3\u952e\u4f20\u9001\u95e8),\u6bd4\u5982\u5929\u7a7a\u989c\u8272.%n\u53ea\u6709\u670d\u52a1\u5668\u7ba1\u7406\u5458\u4e3a\u4f60\u89e3\u9501\u4e4b\u540e,\u4f60\u624d\u53ef\u4ee5\u518d\u6b21\u7f16\u8f91\u4e16\u754c\u751f\u6210\u8bbe\u7f6e (\u6307\u4ee4\u4e3a/pspace allow-worldgen-change DIMID).%n%n[note]PS\uff1a\u6df1\u6e0a\u4e16\u754c\u4e5f\u662f\u4e00\u7247\u865a\u7a7a.[/note]%n%n\u5982\u679c\u4f60\u4e4b\u524d\u7528\u7684\u662fUtilityWorlds\u8fd9\u4e2amod\u7684bug\u82b1\u56ed\u6216bug\u865a\u7a7a\u4e16\u754c\u7684\u8bdd,\u73b0\u5728\u8fd9\u662f\u4e2a\u65b0mod,\u5e94\u8be5\u89e3\u51b3\u4e86\u5927\u90e8\u5206\u7684\u5df2\u77e5\u95ee\u9898(\u6bd4\u5982\u8840\u9b54\u6cd5\u76f8\u5173\u95ee\u9898,\u7b49\u7b49).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA2Q==",
                    "tooltip": "<strong>\u9009\u62e9\u5956\u52b1:\u79c1\u4eba\u7ef4\u5ea6</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u4efd\u5956\u52b1</br>\u9009\u62e9\u5956\u52b1:\u5956\u52b1\u5305"
                },
                {
                    "name": "\u706b\u7bad\u5f15\u64ce",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/815.png",
                    "x": 408.0,
                    "y": 132.0,
                    "data": "\u6bcf\u4e00\u4e2a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u53f0\u5f15\u64ce.\u5236\u4f5c2\u53f01\u9636\u706b\u7bad\u5f15\u64ce,\u56e0\u4e3a\u5230\u8fbe\u6708\u7403\u65f6\u767b\u9646\u8231\u4e5f\u9700\u8981\u4e00\u4e2a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADLw==",
                    "tooltip": "<strong>\u706b\u7bad\u5f15\u64ce</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u706b\u7bad\u5c3e\u9ccd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/814.png",
                    "x": 300.0,
                    "y": 120.0,
                    "data": "\u6bcf\u4e00\u4e2a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u4e9b\u706b\u7bad\u5c3e\u9ccd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADLg==",
                    "tooltip": "<strong>\u706b\u7bad\u5c3e\u9ccd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u706b\u7bad\u71c3\u6599",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/827.png",
                    "x": 276.0,
                    "y": 12.0,
                    "data": "\u706b\u7bad\u6bcf\u6b21\u98de\u884c\u90fd\u9700\u8981\u4e00\u4e9b\u71c3\u6599,\u6240\u4ee5\u4e3a\u4f60\u7684\u706b\u7bad\u63d0\u70bc\u4e00\u4e9b\u706b\u7bad\u71c3\u6599\u5427.%n%nT1/T2\u706b\u7bad\u6709\u4e24\u79cd\u9009\u9879:\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9\u6216RP-1\u706b\u7bad\u71c3\u6599.\u4e0b\u4e2a\u4efb\u52a1\u5c31\u662f\u5173\u4e8e\u540e\u8005\u7684.%n%n\u66f4\u9ad8\u7ea7\u7684\u706b\u7bad\u9700\u8981\u66f4\u5f3a\u7684\u71c3\u6599.%n%n\u4e3a\u4e86\u767b\u9646\u6708\u7403,\u4f60\u6700\u597d\u628a\u706b\u7bad\u88c5\u6ee1\u71c3\u6599,\u4e0d\u7136\u53ef\u80fd\u5c31\u56de\u4e0d\u6765\u4e86.\u4f46\u4f60\u4e5f\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e9b\u989d\u5916\u7684\u71c3\u6599\u7f50\u968f\u8eab\u643a\u5e26\u4ee5\u89e3\u51b3\u71c3\u6599\u95ee\u9898.%n%n\u706b\u7bad\u71c3\u6599\u7684\u6d88\u8017\u4e0e\u76ee\u7684\u5730\u4ee5\u53ca\u71c3\u6599\u7c7b\u578b\u76f8\u5173,\u540c\u65f6,\u66f4\u9ad8\u7ea7\u7684\u706b\u7bad\u53ef\u4ee5\u5b58\u50a8\u66f4\u591a\u71c3\u6599\u4e14\u6d88\u8017\u66f4\u5c11. \u53e6\u5916,\u661f\u7403\u5f15\u529b\u4e5f\u4f1a\u5f71\u54cd\u71c3\u6599\u4f7f\u7528\u91cf,\u5f15\u529b\u8d8a\u4f4e,\u767b\u9646\u6240\u9700\u7684\u71c3\u6599\u8d8a\u5c11.%n%n WIKI \u706b\u7bad\u71c3\u6599\u4ea7\u7ebf\uff1agtnh.huijiwiki.com/p/742",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADOw==",
                    "tooltip": "<strong>\u706b\u7bad\u71c3\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>NASA\u5de5\u4f5c\u53f0"
                },
                {
                    "name": "\u706b\u7bad\u53d1\u5c04\u5e73\u53f0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/820.png",
                    "x": 300.0,
                    "y": 180.0,
                    "data": "\u53d1\u5c04\u706b\u7bad\u5f53\u7136\u9700\u8981\u53d1\u5c04\u5e73\u53f0. \u5efa\u7acb\u4e00\u4e2a3x3\u5927\u5c0f\u7684\u706b\u7bad\u53d1\u5c04\u5e73\u53f0\u7136\u540e\u5c06\u4f60\u7684\u706b\u7bad\u653e\u5728\u4e2d\u592e.%n%n\u786e\u4fdd\u4f60\u8eab\u4e0a\u6ca1\u6709\u95ea\u7535\u626d\u66f2\u6548\u679c,\u5426\u5219\u4f60\u4f1a\u5f88\u4f24\u5fc3\u7684. - \u96f7\u96e8\u4ee5\u53ca\u7c7b\u4f3c\u4f1a\u5f71\u54cd\u5b9e\u4f53\u7684\u73b0\u8c61\u90fd\u53ef\u80fd\u51fb\u843d\u4f60\u7684\u706b\u7bad,\u56e0\u6b64\u8bf7\u786e\u8ba4\u5929\u6c14\u6761\u4ef6.%n%n[warn]\u53d1\u5c04\u524d,\u8bf7\u6e05\u7406\u4e0a\u65b9\u7a7a\u57df! \u5c31\u7b97\u662f\u4e91\u4e5f\u4e0d\u80fd\u6709...[/warn]%n%n\u67e5\u770b [url]https://wiki.gtnewhorizons.com/wiki/Rockets[/url] \u9875\u9762\u83b7\u53d6\u68c0\u67e5\u5217\u8868!%n%n[note]\u540c\u65f6\u8bf7\u6ce8\u610f,\u53d1\u5c04\u65f6\u4f1a\u4ea7\u751f\u6c61\u67d3,\u5927\u91cf\u6c61\u67d3. \u6240\u4ee5\u8981\u4e48\u628a\u53d1\u5c04\u573a\u653e\u5728\u8fdc\u79bb\u57fa\u5730\u7684\u5730\u65b9,\u8981\u4e48\u4f7f\u7528\u6c61\u67d3\u6e05\u6d17\u673a. \u4e0d\u8fc7T4\u4e4b\u524d\u53ef\u4ee5\u4e0d\u7528\u62c5\u5fc3\u8fd9\u4e2a\u95ee\u9898.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADNA==",
                    "tooltip": "<strong>\u706b\u7bad\u53d1\u5c04\u5e73\u53f0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u706b\u7bad"
                },
                {
                    "name": "\u706b\u7bad\u9f3b\u9525",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/813.png",
                    "x": 372.0,
                    "y": 120.0,
                    "data": "\u6bcf\u4e2a\u706b\u7bad\u90fd\u9700\u8981\u9f3b\u9525.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADLQ==",
                    "tooltip": "<strong>\u706b\u7bad\u9f3b\u9525</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "1\u9636\u706b\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/810.png",
                    "x": 336.0,
                    "y": 180.0,
                    "data": "\u5728\u7ecf\u8fc7\u6570\u5c0f\u65f6\u7684\u8f9b\u52e4\u52aa\u529b,\u4f60\u76841\u9636\u706b\u7bad\u7ec8\u4e8e\u5df2\u7ecf\u51c6\u5907\u5c31\u7eea.\u4f46\u662f\u70b9\u706b\u767b\u6708\u4e4b\u524d\u4f60\u9700\u8981\u628a\u5b83\u771f\u6b63\u9020\u51fa\u6765.%n%n\u5982\u679c\u4f60\u5236\u4f5c\u4e86\u5e26\u7bb1\u5b50\u7684\u706b\u7bad, \u6709\u4e00\u4e2a\u5408\u6210\u914d\u65b9\u53ef\u4ee5\u628a\u5b83\u8f6c\u6362\u4e3a\u4efb\u52a1\u6240\u9700\u7684\u706b\u7bad. \u8be6\u89c1NEI.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADKg==",
                    "tooltip": "<strong>1\u9636\u706b\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u767b\u9646\u6708\u7403</br>\u5c0f\u578b\u71c3\u6599\u7f50</br>1\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</br>\u706b\u7bad\u9f3b\u9525</br>\u706b\u7bad\u5c3e\u9ccd</br>\u706b\u7bad\u5f15\u64ce"
                },
                {
                    "name": "2\u9636\u706b\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1429.png",
                    "x": 636.0,
                    "y": 180.0,
                    "data": "\u7ecf\u8fc7\u6570\u5c0f\u65f6\u7684\u52aa\u529b\u548c\u5927\u91cf\u7684\u5de5\u4e1aTNT,\u4f60\u7684\u7b2c\u4e8c\u679a\u706b\u7bad\u7ec8\u4e8e\u51c6\u5907\u597d\u4e86. \u4f46\u5728\u4f60\u53bb\u706b\u661f\u4e4b\u524d,\u4f60\u9700\u8981\u518d\u5236\u4f5c\u4e00\u4e9b\u4e1c\u897f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFlQ==",
                    "tooltip": "<strong>2\u9636\u706b\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</br>\u52a9\u63a8\u5668</br>\u706b\u661f\u767b\u9646\u8231"
                },
                {
                    "name": "3\u9636\u706b\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1454.png",
                    "x": 936.0,
                    "y": 180.0,
                    "data": "\u7ecf\u8fc7\u51e0\u5929\u7684\u8270\u82e6\u52aa\u529b\u5e76\u6d88\u8017\u4e86\u6570\u767e\u5428\u7684\u5de5\u4e1aTNT,\u4f60\u7684\u7b2c\u4e09\u679a\u706b\u7bad\u7ec8\u4e8e\u51c6\u5907\u597d\u4e86.%n%n\u4f60\u9700\u8981\u5bc6\u96c6\u80bc\u6216\u66f4\u9ad8\u7ea7\u7684\u706b\u7bad\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFrg==",
                    "tooltip": "<strong>3\u9636\u706b\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u767b\u9646\u8231</br>\u91cd\u578b\u706b\u7bad\u9f3b\u9525</br>\u91cd\u578b\u706b\u7bad\u53d1\u52a8\u673a</br>\u91cd\u578b\u706b\u7bad\u9ccd</br>\u4e2d\u578b\u71c3\u6599\u7f50</br>3\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "name": "4\u9636\u706b\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1535.png",
                    "x": 1080.0,
                    "y": 228.0,
                    "data": "\u7ecf\u8fc7\u6570\u5468\u7684\u8270\u82e6\u52aa\u529b,\u7528\u6389\u4e86\u6210\u5343\u4e0a\u4e07\u7684\u5de5\u4e1aTNT,\u4f60\u7684\u7b2c\u56db\u679a\u706b\u7bad\u7ec8\u4e8e\u51c6\u5907\u597d\u4e86. \u4f46\u5728\u53bb\u6728\u536b\u4e00\u3001\u91d1\u661f\u6216\u6c34\u661f\u4e4b\u524d,\u4f60\u9700\u8981\u518d\u5236\u4f5c\u4e00\u4e9b\u4e1c\u897f.%n%n\u4f60\u9700\u8981\u5bc6\u96c6\u80bc\u6216\u66f4\u9ad8\u7ea7\u7684\u706b\u7bad\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF_w==",
                    "tooltip": "<strong>4\u9636\u706b\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "name": "5\u9636\u706b\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1726.png",
                    "x": 1080.0,
                    "y": 492.0,
                    "data": "\u7ecf\u8fc7\u4e00\u4e2a\u6708\u7684\u52aa\u529b,\u6d88\u8017\u4e86\u6570\u4ee5\u4e07\u8ba1\u7684\u5de5\u4e1aTNT,\u4f60\u7684\u7b2c\u4e94\u679a\u706b\u7bad\u7ec8\u4e8e\u51c6\u5907\u597d\u4e86. \u4f46\u5728\u4f60\u51fa\u53d1\u53bb\u571f\u661f\u548c\u5929\u738b\u661f\u536b\u661f\u4e4b\u524d,\u4f60\u9700\u8981\u518d\u5236\u4f5c\u4e00\u4e9b\u4e1c\u897f.%n%n\u4f60\u9700\u8981CN3H7O3(\u7d2b\u8272)\u6216\u8005\u66f4\u9ad8\u7ea7\u7684\u706b\u7bad\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGvg==",
                    "tooltip": "<strong>5\u9636\u706b\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce</br>3\u9636\u91cd\u578b\u706b\u7bad\u9ccd</br>\u5927\u578b\u71c3\u6599\u7f50</br>5\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</br>3\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525"
                },
                {
                    "name": "6\u9636\u706b\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2640.png",
                    "x": 888.0,
                    "y": 492.0,
                    "data": "\u6709\u4e866\u9636\u706b\u7bad,\u4f60\u5c31\u80fd\u767b\u9646\u66f4\u591a\u661f\u7403\u4e86.%n%n\u4e0d\u8fc7\u4f60\u9700\u8981CN3H7O3(\u7d2b\u8272)\u6216\u8005\u66f4\u9ad8\u9636\u7684\u706b\u7bad\u71c3\u6599.%n%n[note]\u5982\u679c\u4f60\u60f3\u5728ZPM\u9636\u6bb5\u5efa\u9020\u5b83\u7684\u8bdd,\u5c31\u9700\u8981\u4f7f\u7528GT++\u591a\u65b9\u5757\u7ec4\u88c5\u673a.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKUA==",
                    "tooltip": "<strong>6\u9636\u706b\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>6\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "name": "7\u9636\u706b\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2642.png",
                    "x": 624.0,
                    "y": 492.0,
                    "data": "\u6709\u4e867\u9636\u706b\u7bad,\u4f60\u73b0\u5728\u80fd\u767b\u9646\u592a\u9633\u7cfb\u8fb9\u7f18\u7684\u67d0\u4e9b\u661f\u7403.%n%n\u4f60\u8fd8\u9700\u8981H8N4C2O4(\u7eff\u8272)\u706b\u7bad\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKUg==",
                    "tooltip": "<strong>7\u9636\u706b\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce</br>4\u9636\u91cd\u578b\u706b\u7bad\u9ccd</br>4\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525</br>7\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</br>\u7279\u5927\u578b\u71c3\u6599\u7f50"
                },
                {
                    "name": "8\u9636\u706b\u7bad",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2644.png",
                    "x": 432.0,
                    "y": 492.0,
                    "data": "\u76ee\u524d\u6700\u9ad8\u9636\u7684\u706b\u7bad,\u4f60\u73b0\u5728\u53ef\u4ee5\u5230\u8bbf\u5176\u4ed6\u661f\u7cfb\u4e86.%n\u67d0\u4e9b\u61a8\u61a8\u661f\u7cfb\u9664\u5916.%n%n\u4f60\u8fd8\u9700\u8981H8N4C2O4(\u7eff\u8272)\u706b\u7bad\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKVA==",
                    "tooltip": "<strong>8\u9636\u706b\u7bad</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u52a9\u63a8\u5668</br>8\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "name": "RP-1\u706b\u7bad\u71c3\u6599",
                    "symbolSize": 46.800000000000004,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2684.png",
                    "x": 150.0,
                    "y": 18.0,
                    "data": "T1/T2\u706b\u7bad\u53ef\u4ee5\u9009\u62e9\u7528RP-1\u706b\u7bad\u71c3\u6599\u9a71\u52a8.\u9996\u5148,\u4f60\u9700\u8981\u67f4\u6cb9\u6216\u8005\u7164\u7126. \u4ece\u957f\u8fdc\u6765\u770b,\u7164\u7126\u662f\u66f4\u597d\u7684\u9009\u62e9,\u5b83\u84b8\u998f\u51fa\u7684\u5176\u4ed6\u4ea7\u7269\u53ef\u7528\u4e8e\u751f\u4ea7\u5176\u4ed6\u706b\u7bad\u71c3\u6599.[note]%n%n\u67f4\u6cb9\u9700\u898120\u5355\u5143,\u7164\u7126\u9700\u898130\u5355\u5143. \u9664\u975e\u4f60\u7528\u7684\u662f\u84b8\u998f\u5854,\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b,\u5b83\u4e0d\u80fd\u914d\u5e73 :([/note]%n%n\u5728\u84b8\u998f\u5ba4\u4e2d\u84b8\u998f\u83b7\u5f97\u7164\u6cb9,\u518d\u84b8\u998f\u5c31\u80fd\u83b7\u5f97RP-1. \u6700\u540e\u4e00\u6b65\u4f60\u9700\u8981\u5316\u5de5\u5382.%n%nRP-1\u706b\u7bad\u71c3\u6599\u662f\u4e00\u4e2a4\u9636240EU/t\u7684\u914d\u65b9,\u6240\u4ee5\u4f60\u9700\u8981\u4e0d\u9508\u94a2\u4e0eHV\u673a\u68b0\u65b9\u5757\u5efa\u9020\u7684\u5316\u5de5\u5382.%n%n\u56e0\u4e3a\u592a\u7a7a\u4e2d\u6ca1\u6709\u6c27\u6c14,\u4f60\u8fd8\u9700\u8981\u6c27\u5316\u5242.\u4f46\u7531\u4e8eGC\u7684\u706b\u7bad\u53ea\u80fd\u643a\u5e26\u4e00\u79cd\u6d41\u4f53,\u6240\u4ee5\u6211\u4eec\u7a0d\u7a0d\u7b80\u5316\u4e86\u4e00\u4e0b.\u53ea\u8981\u5c06\u6db2\u6c27\u4e0eRP-1\u6df7\u5408\u5c31\u53ef\u4ee5\u5f97\u5230\u529f\u80fd\u9f50\u5907\u7684RP-1\u706b\u7bad\u71c3\u6599.%n%n\u5982\u679c\u4f60\u5bf9\u5efa\u9020/\u4f7f\u7528\u5316\u5de5\u5382\u611f\u5230\u56f0\u60d1\u7684\u8bdd,\u8bf7\u53c2\u8003\u540c\u540d\u624b\u518c\u6216GT++\u4efb\u52a1\u680f\u4e2d\u7684\u540c\u540d\u4efb\u52a1.%n%n[note]PS\uff1a\u706b\u7bad\u71c3\u6599\u4e5f\u53ef\u7528\u4f5c\u706b\u7bad\u5f15\u64ce\u53d1\u7535\u673a\u6216\u8005\u591a\u65b9\u5757\u673a\u5668\u5927\u578b\u706b\u7bad\u5f15\u64ce\u7684\u71c3\u6599.[/note]%n%n[warn]\u8bf7\u6ce8\u610f\u4e0d\u8981\u53c2\u8003NEI\u9884\u89c8\u5316\u5de5\u5382,\u5b83\u662f\u9519\u7684.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKfA==",
                    "tooltip": "<strong>RP-1\u706b\u7bad\u71c3\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u706b\u7bad\u71c3\u6599"
                },
                {
                    "name": "\u706b\u661f\u4e0a\u7684\u76d0\u6c34\u548c\u6c2f\u82ef",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1743.png",
                    "x": 588.0,
                    "y": 276.0,
                    "data": "\u706b\u661f\u5bcc\u542b\u76d0\u6c34\u548c\u6c2f\u82ef. \u5982\u679c\u4f60\u6bd4\u8f83\u7f3a\u6c2f\u7684\u8bdd,\u8fd9\u4e24\u79cd\u6d41\u4f53\u90fd\u53ef\u4ee5\u7535\u89e3\u51fa\u6c2f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGzw==",
                    "tooltip": "<strong>\u706b\u661f\u4e0a\u7684\u76d0\u6c34\u548c\u6c2f\u82ef</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u706b\u7bad"
                },
                {
                    "name": "\u91cd\u5927\u5347\u7ea7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2695.png",
                    "x": 204.0,
                    "y": 432.0,
                    "data": "\u5982\u679c\u4f60\u89c9\u5f97'\u563f,\u8fd9\u4e2a\u7d2b\u8272\u7684\u4e1c\u897f\u8fd8\u4e0d\u9519,\u4e3a\u4ec0\u4e48\u4e0d\u505a\u7eff\u8272\u7684\u5462?',\u597d\u5427,\u9996\u5148,\u4f60\u53ef\u80fd\u9700\u8981\u4e13\u4e1a\u534f\u52a9. \u5176\u6b21,\u4f60\u9700\u8981\u8fdb\u5165ZPM\u9636\u6bb5\u624d\u80fd\u5236\u9020\u6240\u9700\u7684\u673a\u68b0\u65b9\u5757,\u5b8c\u6bd5. \u4e00\u53f0ZPM\u7684\u5408\u91d1\u51b6\u70bc\u7089\u662f\u5236\u4f5c\u90e8\u4ef6\u5fc5\u4e0d\u53ef\u5c11\u7684\u673a\u5668,\u6240\u4ee5\u7b49\u4f60\u5236\u9020\u51faZPM\u80fd\u6e90\u4ed3\u518d\u6765\u5427.%n%n\u4f60\u53ef\u80fd\u53ef\u4ee5\u81ea\u884c\u89e3\u51b3\u5927\u90e8\u5206\u95ee\u9898,\u4f46\u8bf7\u8bb0\u4f4f,\u67d0\u4e9b\u6750\u6599\u9700\u8981\u5728\u5408\u91d1\u51b6\u70bc\u7089\u4e2d\u624d\u80fd\u5236\u6210,\u56fa\u5316,\u6253\u7c89,\u7136\u540e\u4f5c\u4e3a\u53e6\u4e00\u914d\u65b9\u7684\u539f\u6599\u91cd\u65b0\u6295\u5165\u5408\u91d1\u51b6\u70bc\u7089\u4e2d. \u6bd4\u5982: \u8def\u83f2\u6069\u5316\u5408\u7269\u9700\u8981\u7684\u54c8\u65af\u7279\u6d1b\u4f9d\u5408\u91d1-N, \u4ee5\u53ca\u94fc\u548c\u955d.%n%n\u94fc\u662f\u7531\u975e\u6807\u5408\u91d1\u51b6\u70bc\u7089\u914d\u65b9\u5236\u51fa\u7684,\u800c\u955d\u9700\u8981\u7a00\u571f(III)\u6216\u524d\u5f80\u5e9f\u571f\u4e16\u754c\u624d\u80fd\u5236\u5f97. \u4f60\u8fd8\u9700\u8981\u7a00\u571f(II)\u6216\u7a00\u571f(III)\u4e2d\u7684\u9571\u6216\u8005\u518d\u6b21\u524d\u5f80\u5e9f\u571f\u4e16\u754c.[warn]\u77ff\u8109\u53ef\u80fd\u975e\u5e38\u96be\u627e, \u56e0\u4e3a\u5b83\u975e\u5e38\u7a00\u6709.[/warn]\u4f60\u4e5f\u53ef\u4ee5\u8bd5\u8bd5\u901a\u8fc7GT++\u7684\u7814\u78e8\u673a\u548c\u6d6e\u9009\u673a\u4ece\u94c1\u94dd\u69b4\u77f3\u77ff\u77f3\u4e2d\u63d0\u53d6\u9571.%n%n\u73a9\u5f97\u5f00\u5fc3!%n%n[note]\u51e0\u4e4e\u53ef\u4ee5\u80af\u5b9a,\u4f60\u5c06\u9700\u8981\u7684\u6bd4\u4efb\u52a1\u8981\u6c42\u7684\u591a,\u4f46\u4e00\u5982\u65e2\u5f80,\u786e\u5207\u7684\u6570\u91cf\u53d6\u51b3\u4e8e\u4f60\u7684\u4ed3\u5ba4/\u603b\u7ebf\u6570\u91cf.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKhw==",
                    "tooltip": "<strong>\u91cd\u5927\u5347\u7ea7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c7\u9636\u6bb5(ZPM)"
                },
                {
                    "name": "\u7a7f\u68ad\u673a\u9f3b\u9525",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5843632203454110643.png",
                    "x": 372.0,
                    "y": 528.0,
                    "data": "\u8fd9\u4e2a\u9f3b\u9525\u6ca1\u6709\u5176\u4ed6\u706b\u7bad\u90a3\u6837\u7684\u5c16\u5934.\u8fd9\u662f\u597d\u4e8b\u8fd8\u662f\u574f\u4e8b?\u6211\u4e0d\u77e5\u9053,\u6211\u53ea\u4f1a\u7ed9\u4f60\u53d1\u4efb\u52a1.\u6240\u4ee5\u9020\u4e2a\u7a7f\u68ad\u673a\u9f3b\u9525!\u4e0d\u7136\u6211\u5c31\u540a\u9500\u4f60\u7684\u53d1\u5c55\u6267\u7167!",
                    "quest_id": "5IXO2dAUTXOu5z94yxWkTQ==",
                    "tooltip": "<strong>\u7a7f\u68ad\u673a\u9f3b\u9525</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u51ef\u8299\u62c9</br>8\u9636\u706b\u7bad"
                },
                {
                    "name": "\u5728\u592a\u7a7a\u4e2d\u7761\u89c9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1463.png",
                    "x": 936.0,
                    "y": 228.0,
                    "data": "\u51ac\u7720\u8231\u7528\u4e8e\u5728\u5176\u4ed6\u661f\u7403\u4e0a\u7761\u89c9\u5e76\u8df3\u8fc7\u6f2b\u957f\u7684\u9ed1\u591c. \u5b83\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u95f4\u4f7f\u7528,\u751a\u81f3\u5728\u767d\u5929,\u4e5f\u53ef\u4ee5\u5728\u4efb\u4f55\u4e16\u754c\u4f7f\u7528,\u5305\u62ec\u4e3b\u4e16\u754c. \u767d\u5929\u4f7f\u7528\u51ac\u7720\u8231\u5c06\u8df3\u81f3\u4e0b\u4e00\u4e2a\u65e5\u51fa\u7684\u65f6\u95f4,\u9664\u4e86\u5728\u5c0f\u884c\u661f,\u592a\u9633\u5728\u90a3\u91cc\u603b\u662f\u9501\u5b9a\u5728\u897f\u65b9. \u4e00\u65e6\u73a9\u5bb6\u4f7f\u7528\u4e86\u51ac\u7720\u8231,\u5728\u4ed6\u518d\u6b21\u4f7f\u7528\u51ac\u7720\u8231\u4e4b\u524d\u6709300\u79d2\u7684\u51b7\u5374\u65f6\u95f4. \u6253\u7834\u548c\u653e\u56de\u51ac\u7720\u8231\u6216\u5c1d\u8bd5\u4f7f\u7528\u4e0d\u540c\u7684\u51ac\u7720\u8231\u5c06\u4e0d\u4f1a\u91cd\u7f6e\u51b7\u5374\u65f6\u95f4,\u9664\u975e\u6b7b\u4ea1. \u51ac\u7720\u8231\u5de5\u4f5c\u4e0d\u9700\u8981\u80fd\u91cf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFtw==",
                    "tooltip": "<strong>\u5728\u592a\u7a7a\u4e2d\u7761\u89c9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u706b\u7bad"
                },
                {
                    "name": "\u9ecf\u6ed1\u602a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1471.png",
                    "x": 684.0,
                    "y": 228.0,
                    "data": "\u9ecf\u6ed1\u602a\u662f\u4e00\u79cd\u5b9e\u7528\u602a\u7269,\u5b83\u4f1a\u5728\u706b\u661f\u8868\u9762\u53d1\u73b0\u7684\u9ecf\u6ed1\u602a\u86cb\u4e2d\u751f\u6210. \u5b83\u5206\u4eab\u4e86\u539f\u7248\u72fc\u548c\u9aa1\u5b50\u7684\u4e00\u4e9b\u7279\u5f81:\u5b83\u53ef\u4ee5\u53d8\u5f62\u5e76\u653b\u51fb\u5a01\u80c1\u5176\u4e3b\u4eba\u7684\u602a\u7269,\u5e76\u4e14\u53ef\u4ee5\u914d\u5907\u4e00\u4e2a\u7279\u6b8a\u7684\u7bb1\u5b50\u6765\u8fd0\u8f93\u7269\u54c1.%n%n\u4f5c\u4e3a\u4e00\u4e2a\u53cb\u65b9\u602a\u7269,\u9ecf\u6ed1\u602a\u5c06\u79ef\u6781\u5e2e\u52a9\u5e76\u8ddf\u968f\u73a9\u5bb6--\u5e76\u4e14\u5c06\u8bd5\u56fe\u4fdd\u62a4\u4ed6\u4eec. \u5b83\u4eec\u4e5f\u53ef\u80fd\u5177\u6709\u4e2d\u7acb\u884c\u4e3a,\u4e5f\u5c31\u662f\u8bf4,\u5982\u679c\u88ab\u975e\u6240\u6709\u8005\u6311\u8845\u6216\u4f24\u5bb3,\u5b83\u4eec\u5c31\u53ef\u4ee5\u8fdb\u884c\u653b\u51fb.%n%n\u63d0\u793a:\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u5582\u517b\u9ecf\u6ed1\u602a:%n%n\u8239%n\u719f\u9c7c%n\u706b\u836f%n\u91d1\u952d%n\u7ea2\u77f3\u4e2d\u7ee7\u5668%n\u6728\u95e8%n%n\u9ecf\u6ed1\u602a\u7684\u6240\u6709\u8005\u53ef\u4ee5\u7f16\u8f91\u9ecf\u6ed1\u602a\u7684\u80cc\u5305,\u8fd0\u8f93\u7269\u54c1.%n%n\u83b7\u53d6\u4efb\u610f\u9ecf\u6ed1\u602a\u86cb\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1-\u6ce8\u610f,\u4f60\u53ef\u80fd\u9700\u8981\u4e00\u67c4\u91cd\u9550.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFvw==",
                    "tooltip": "<strong>\u9ecf\u6ed1\u602a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u706b\u7bad"
                },
                {
                    "name": "\u5c0f\u578b\u71c3\u6599\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/819.png",
                    "x": 264.0,
                    "y": 132.0,
                    "data": "\u6bcf\u4e00\u4e2a\u706b\u7bad\u90fd\u9700\u8981\u50a8\u5b58\u71c3\u6599\u7684\u50a8\u7f50. 1\u9636\u706b\u7bad\u9700\u8981\u5236\u4f5c\u4e24\u4e2a\u5c0f\u578b\u71c3\u6599\u7f50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADMw==",
                    "tooltip": "<strong>\u5c0f\u578b\u71c3\u6599\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "\u592a\u7a7a\u94bb\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3037.png",
                    "x": 1032.0,
                    "y": 276.0,
                    "data": "\u4f60\u53ef\u80fd\u66fe\u7ecf\u60f3\u8fc7\uff1a\u592a\u9633\u7cfb\u4e2d\u6709\u8fd9\u4e48\u591a\u6c14\u6001\u5de8\u884c\u661f-\u6709\u6ca1\u6709\u529e\u6cd5\"\u6536\u83b7\"\u5b83\u4eec?\u5f53\u7136\u6709.\u53ea\u8981\u6784\u5efa\"\u884c\u661f\u6c14\u4f53\u94bb\u673a\"\u8fd9\u79cd\u591a\u65b9\u5757\u673a\u5668,\u4f60\u5c31\u53ef\u4ee5\u65e0\u9650\u62bd\u53d6\u90a3\u4e9b\u6c14\u6001\u5de8\u884c\u661f(\u6728\u661f\u3001\u571f\u661f\u3001\u5929\u738b\u661f\u548c\u6d77\u738b\u661f)\u7684\u5927\u6c14\u4e86.\u5f53\u7136,\u4f60\u8fd8\u9700\u8981\u5728\u76ee\u6807\u884c\u661f\u4e0a\u7a7a\u5efa\u9020\u7a7a\u95f4\u7ad9,\u8ddd\u79bb\u4e5f\u9700\u8981\u628a\u63a7\u597d,\u65e2\u8981\u65b9\u4fbf\u62bd\u53d6,\u53c8\u4e0d\u4f1a\u5760\u5165\u5927\u6c14.%n%n\u901a\u8fc7GUI\u4e2d\u7684\u7f16\u7a0b\u7535\u8def\u63a7\u5236\u62bd\u53d6\u6df1\u5ea6,\u5373\u53ef\u63d0\u53d6\u4e0d\u540c\u6c14\u4f53.\u540c\u65f6\u8fd8\u9700\u8981\u63d0\u4f9b64*\u6df1\u5ea6\u7684\u91c7\u77ff\u7ba1\u9053,\u4ee5\u5230\u8fbe\u9009\u5b9a\u7684\u6df1\u5ea6.%n%n\u6b64\u591a\u65b9\u5757\u8fd0\u884c\u65f6\u529f\u7387\u4e3a\uff1ad*4^(T+2),T\u4e3a\u7a7a\u95f4\u7ad9\u7b49\u7ea7,d\u4e3a\u6df1\u5ea6.%n%n\u53ef\u4ee5\u5728\"\u63d0\u793a\u3001\u6280\u5de7\"\u7ae0\u8282\u627e\u5230\u4f60\u53ef\u4ee5\u5728\u4f55\u5904\u6cf5\u53d6\u4f55\u79cd\u6d41\u4f53\u7684\u6982\u8ff0.%n%n\u6728\u661f%n1 \u6c22 - 15000 L/s%n2 \u6c26 - 500 L/s%n3 \u6c2e - 300 L/s%n4 \u6c27 - 200 L/s%n%n\u571f\u661f%n1 \u6c22 - 18000 L/s%n2 \u6c26 - 800 L/s%n3 \u6c27 - 500 L/s%n4 \u6db2\u6001\u6c27 - 150 L/s%n%n\u5929\u738b\u661f%n1 \u6c18 - 5000 L/s%n2 \u6c16 - 450 L/s%n3 \u6c29 - 250 L/s%n4 \u6c2a - 100 L/s%n%n\u6d77\u738b\u661f%n1 \u6c1a - 3000 L/s%n2 \u6c26-3 - 500 L/s%n3 \u6c28 - 400 L/s%n4 \u6c19 - 350 L/s",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAL3Q==",
                    "tooltip": "<strong>\u592a\u7a7a\u94bb\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7a7a\u95f4\u7ad9</br>4\u9636\u706b\u7bad"
                },
                {
                    "name": "\u7a7a\u95f4\u7ad9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1067.png",
                    "x": 372.0,
                    "y": 300.0,
                    "data": "\u4f60\u53ef\u4ee5\u5efa\u9020\u4e00\u4e2a\u81ea\u5df1\u7684\u7a7a\u95f4\u7ad9!\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u7a7a\u95f4\u7ad9\u4e0a\u9762\u52a0\u88c5\u56db\u4e2a\u65cb\u8f6c\u63a8\u8fdb\u673a\u8ba9\u5176\u65cb\u8f6c.%n%n\u7a7a\u95f4\u7ad9\u4e0a\u9762\u7684\u4e00\u5929\u8981\u6bd4\u5730\u7403\u4e0a\u9762\u957f\u5f88\u591a,\u56e0\u6b64\u4f60\u53ef\u4ee5\u6709\u66f4\u591a\u7684\u65f6\u95f4\u6765\u4f7f\u7528\u592a\u9633\u80fd\u53d1\u7535\u673a\u53d1\u7535!%n%n\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u661f\u7403\u4e0a\u7a7a\u5efa\u9020\u7a7a\u95f4\u7ad9\uff1a%n\u6708\u7403 - T1%n\u706b\u661f - T2%n\u6728\u661f - T3%n\u91d1\u661f - T4%n\u571f\u661f - T5%n\u5929\u738b\u661f - T5%n\u6d77\u738b\u661f - T6%n%n\u63d0\u793a\uff1a\u6bcf\u4e2a\u8981\u6c42\u5bf9\u5e94\u4e00\u5ea7\u7a7a\u95f4\u7ad9(\u4e0e\u4ee5\u4e0a\u987a\u5e8f\u76f8\u540c).\u4f60\u9700\u8981\u81f3\u5c11\u5efa\u6210\u4e00\u5ea7\u7a7a\u95f4\u7ad9,\u624d\u80fd\u5b8c\u6210\u6b64\u4efb\u52a1.%n%n\u6ce8\u610f\uff1a\u5982\u679c\u76f4\u63a5\u4ece\u7a7a\u95f4\u7ad9\u8d77\u98de\u524d\u5f80\u5730\u7403\u6216\u5176\u4ed6\u7a7a\u95f4\u7ad9,\u5f88\u6709\u53ef\u80fd\u4f1a\u4e22\u5931\u706b\u7bad.\u8bf7\u786e\u4fdd\u6709\u5176\u4ed6\u624b\u6bb5\u8fd4\u56de(\u67d0\u79cd\u4f20\u9001\u624b\u6bb5)\u6216\u662f\u5148\u5230\u5176\u4ed6\u884c\u661f/\u536b\u661f\u4e2d\u8f6c\u4e00\u4e0b(\u5982\u679c\u5728\u6b64\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u95ee\u9898,\u4f60\u7684\u91cd\u751f\u70b9\u4e5f\u4f1a\u5728\u8be5\u884c\u661f/\u536b\u661f\u4e0a,\u8fd8\u53ef\u4ee5\u518d\u6b21\u53d1\u5c04\u706b\u7bad).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEKw==",
                    "tooltip": "<strong>\u7a7a\u95f4\u7ad9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u706b\u7bad"
                },
                {
                    "name": "\u592a\u7a7a\u706b\u628a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1441.png",
                    "x": 408.0,
                    "y": 216.0,
                    "data": "\u666e\u901a\u706b\u628a\u4e0d\u80fd\u5728\u592a\u7a7a\u4e2d\u5de5\u4f5c,\u53ea\u80fd\u5728\u6c27\u6c14\u6ce1\u5185\u533a\u57df\u5de5\u4f5c.%n%n\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\u662f\u8424\u77f3\u706b\u628a. \u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6mod\u7684\u706f\u548c\u706b\u70ac\u4e4b\u7c7b\u7684. \u4f60\u53ef\u80fd\u9700\u89813-5\u7ec4\u8fd9\u6837\u7684\u706b\u628a\u7528\u6765\u5728\u6316\u6398\u77ff\u8109\u65f6\u7167\u660e,\u9664\u975e\u4f60\u7528\u77ff\u673a\u6316\u77ff.%n%n\u8fd8\u6709\u5c31\u662f\u4f7f\u7528\u591c\u89c6\u548c\u5353\u8d8a\u706b\u70ac\u6216GregTech\u654c\u5bf9\u751f\u7269\u9a71\u9010\u5668\u6765\u9a71\u8d76\u602a\u7269.\u4f46\u8fd9\u4e9b\u65b9\u6cd5\u5728\u5b98\u65b9\u670d\u52a1\u5668\u4e0a\u90fd\u7528\u4e0d\u7740,\u53ea\u8981\u5708\u5730,\u89e3\u9664\u5708\u5730\u5c31\u597d\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFoQ==",
                    "tooltip": "<strong>\u592a\u7a7a\u706b\u628a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6708\u7403\u7684\u767d\u5929\u548c\u9ed1\u591c\u65f6\u95f4"
                },
                {
                    "name": "steve@mothership:~$",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7583790943377787116.png",
                    "x": 516.0,
                    "y": 420.0,
                    "data": "\u8fd9\u4e2a\u65b9\u5757\u7528\u6765\u914d\u7f6e\u6bcd\u8230\u7684\u540d\u79f0\u548c\u56fe\u6807,\u4ee5\u53ca\u8bbe\u5b9a\u8c01\u88ab\u5141\u8bb8\u767b\u4e0a\u6bcd\u8230\u3001\u4f7f\u7528\u5bfc\u822a\u63a7\u5236\u53f0\u548c\u63a8\u8fdb\u5668.",
                    "quest_id": "FMul7onaSFmWwPZRUSR3FA==",
                    "tooltip": "<strong>steve@mothership:~$</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f"
                },
                {
                    "name": "\u8d85\u5927\u578b\u6c27\u6c14\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2723.png",
                    "x": 936.0,
                    "y": 132.0,
                    "data": "\u8d85\u5927\u578b\u6c27\u6c14\u7f50\u662f\u4e00\u4e2a\u50a8\u6c27\u7f50,\u6700\u591a\u53ef\u5bb9\u7eb38000\u5355\u4f4d\u7a7a\u6c14. \u5b83\u7684\u4f5c\u7528\u662f\u5728\u6ca1\u6709\u6c27\u6c14\u6e90\u7684\u533a\u57df\u63d0\u4f9b\u4fbf\u643a\u5f0f\u6c27\u6c14\u6e90.%n%n\u7528\u9014:%n\u4e00\u6b21\u53ef\u4ee5\u4f69\u6234\u4e24\u4e2a\u6c27\u6c14\u7f50. \u8981\u4f69\u6234\u4efb\u4f55\u7c7b\u578b\u7684\u6c27\u6c14\u7f50,\u8bf7\u6253\u5f00\u80cc\u5305\u5e76\u5355\u51fb\u83dc\u5355\u9876\u90e8\u7684Galacticraft\u6807\u7b7e. \u5728\u8fd9\u91cc,\u4f60\u5c06\u770b\u5230\u5404\u79cd\u7c7b\u578b\u8bbe\u5907\u7684\u53ef\u7528\u4f4d\u7f6e. \u53ea\u9700\u5c06\u4f60\u7684\u6c27\u6c14\u7f50\u653e\u5728\u5176\u4e2d\u4e00\u4e2a\u5e26\u6709\u6c27\u6c14\u7f50\u7070\u8272\u56fe\u7247\u7684\u63d2\u69fd\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKow==",
                    "tooltip": "<strong>\u8d85\u5927\u578b\u6c27\u6c14\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94f1</br>3\u9636\u706b\u7bad"
                },
                {
                    "name": "\u6e29\u5ea6\u63a7\u5236",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1466.png",
                    "x": 684.0,
                    "y": 84.0,
                    "data": "\u73af\u5883\u6e29\u5ea6\u63a7\u5236\u5668\u662f\u4e00\u79cd\u7528\u4e8e\u6c27\u6c14\u4f9b\u7ed9\u5668\u7684\u7269\u54c1,\u53ef\u5728\u5bc6\u5c01\u7a7a\u95f4\u5185\u63a7\u5236\u73af\u5883\u6e29\u5ea6\u9002\u5b9c.%n%n\u73af\u5883\u6e29\u5ea6\u63a7\u5236\u5668\u9002\u7528\u4e8e\u592a\u51b7\u6216\u592a\u70ed\u7684\u7ef4\u5ea6,\u4f7f\u73a9\u5bb6\u65e0\u9700\u9694\u70ed\u5957\u88c5\u5373\u53ef\u5b58\u6d3b.%n%n\u5b83\u53ef\u4ee5\u653e\u7f6e\u5728\u5de5\u4f5c\u7684\u6c27\u6c14\u4f9b\u7ed9\u5668\u4e2d\u80fd\u91cf\u548c\u6c27\u6c14\u69fd\u65c1\u8fb9\u7684\u7b2c3\u4e2a\u69fd\u4e2d. \u4e00\u65e6\u73af\u5883\u6e29\u5ea6\u63a7\u5236\u5668\u653e\u5165\u6c27\u6c14\u4f9b\u7ed9\u5668,\u5b83\u5c06\u6839\u636e\u5f53\u5730\u73af\u5883\u52a0\u70ed\u6216\u51b7\u5374\u8f93\u51fa\u7684\u6c27\u6c14,\u7136\u540e\u73a9\u5bb6\u53ef\u4ee5\u5b89\u5168\u5730\u5728\u5bc6\u5c01\u7684\u623f\u95f4\u5185\u8131\u4e0b\u9694\u70ed\u5957\u88c5. \u5c3d\u7ba1\u8fd9\u770b\u4f3c\u6beb\u65e0\u610f\u4e49.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFug==",
                    "tooltip": "<strong>\u6e29\u5ea6\u63a7\u5236</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c27\u6c14\u4f9b\u7ed9\u5668"
                },
                {
                    "name": "\u7a7f\u68ad\u673a\u7684\u811a,\u8e29\u8e29\u8e29...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6186734719426077723.png",
                    "x": 396.0,
                    "y": 456.0,
                    "data": "\u7a7f\u68ad\u673a\u652f\u817f\u5f88\u6709\u7528,\u5b83\u80fd\u8ba9\u7a7f\u68ad\u673a\u81ea\u4e3b\u7740\u9646.\u6211\u5f3a\u70c8\u5efa\u8bae\u628a\u5b83\u4eec\u505a\u51fa\u6765!\u53cd\u6b63\u4f60\u4e5f\u6ca1\u5f97\u9009.",
                    "quest_id": "2qWr_EPxRGeqJE2NKQhb5Q==",
                    "tooltip": "<strong>\u7a7f\u68ad\u673a\u7684\u811a,\u8e29\u8e29\u8e29...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u51ef\u8299\u62c9</br>8\u9636\u706b\u7bad"
                },
                {
                    "name": "\u9694\u70ed\u5e03\u5339",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1462.png",
                    "x": 540.0,
                    "y": 216.0,
                    "data": "\u9694\u70ed\u5957\u88c5\u662f\u4e00\u5957\u7531\u5148\u8fdb\u9694\u70ed\u6750\u6599\u5236\u6210\u7684\u670d\u88c5. \u8fd9\u4e9b\u670d\u88c5\u80fd\u591f\u5728\u5916\u592a\u7a7a\u7684\u5bd2\u51b7\u73af\u5883\u4e2d\u4f7f\u73a9\u5bb6\u514d\u4e8e\u51bb\u6b7b.\u8fd8\u53ef\u4ee5\u907f\u514d\u73a9\u5bb6\u5728\u8fc7\u70ed\u73af\u5883\u4e2d\u9177\u70ed\u96be\u8010.%n%n\u751f\u547d\u652f\u6301HUD\u4e0a\u7684\u6e29\u5ea6\u6307\u793a\u5668\u5c06\u663e\u793a\u73a9\u5bb6\u662f\u5426\u53d8\u5f97\u592a\u70ed\u6216\u592a\u51b7-\u56e0\u4e3a\u6e29\u5ea6\u63a5\u8fd1\u5371\u9669\u7b49\u7ea7\u65f6,\u5c06\u663e\u793a\"\u65e0\u6548\u7684\u70ed\u4fdd\u62a4\"\u8b66\u544a. \u5728\u706b\u661f\u548c\u5c0f\u884c\u661f\u4e0a,\u53ea\u9700\u88c5\u5907\u4e00\u6574\u5957\u9694\u70ed\u5957\u88c5\u5c31\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898.%n%n[note]\u4f60\u8fd8\u9700\u8981\u4e00\u4e9b\u7845\u6a61\u80f6.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFtg==",
                    "tooltip": "<strong>\u9694\u70ed\u5e03\u5339</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "1\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/811.png",
                    "x": 336.0,
                    "y": 108.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u53f0\u63a7\u5236\u7535\u8111,\u4e14\u7535\u8111\u9700\u8981\u5339\u914d\u706b\u7bad\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADKw==",
                    "tooltip": "<strong>1\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>1\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "1\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/812.png",
                    "x": 336.0,
                    "y": 72.0,
                    "data": "\u706b\u7bad\u7684\u4e3b\u7bad\u4f53\u9700\u8981\u4f7f\u7528\u91cd\u578b\u88c5\u7532\u677f\u6765\u5236\u4f5c.\u8ba9\u6211\u4eec\u7528\u538b\u7f29\u94dd\u677f\u3001\u538b\u7f29\u94a2\u677f\u3001\u538b\u7f29\u9752\u94dc\u677f\u8fd9\u4e9b\u6750\u6599\u6765\u5236\u4f5c37\u4e2a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADLA==",
                    "tooltip": "<strong>1\u9636\u91cd\u578b\u88c5\u7532\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u4e07\u7269</br>NASA\u5de5\u4f5c\u53f0"
                },
                {
                    "name": "2\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1428.png",
                    "x": 588.0,
                    "y": 180.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u53f0\u63a7\u5236\u7535\u8111,\u4e14\u7535\u8111\u9700\u8981\u5339\u914d\u706b\u7bad\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFlA==",
                    "tooltip": "<strong>2\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "2\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1427.png",
                    "x": 540.0,
                    "y": 180.0,
                    "data": "\u706b\u7bad\u9700\u8981\u91cd\u578b\u88c5\u7532\u677f\u4f5c\u4e3a\u4e3b\u7bad\u4f53. \u8ba9\u6211\u4eec\u7528\u4e00\u9636\u91cd\u578b\u88c5\u7532\u677f\u548c\u9668\u94c1\u677f\u5236\u4f5c11\u4e2a2\u9636\u91cd\u578b\u88c5\u7532\u677f\u5427.%n%n\u540c\u65f6\u4f60\u8fd8\u9700\u8981\u4e00\u4e9b\u94a8\u94a2.\u83b7\u53d6\u94a8\u7684\u624b\u6bb5\u6709\u5f88\u591a,\u5904\u7406\u672b\u5730\u77f3\u6216\u672b\u5730\u77f3\u7c89,\u6216\u662f\u6253\u7c89\u6708\u5ca9\u90fd\u53ef\u4ee5.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFkw==",
                    "tooltip": "<strong>2\u9636\u91cd\u578b\u88c5\u7532\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u627e\u4e00\u4e9b\u9668\u94c1</br>\u6708\u7403\u5730\u7262"
                },
                {
                    "name": "3\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1448.png",
                    "x": 840.0,
                    "y": 240.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u53f0\u63a7\u5236\u7535\u8111,\u4e14\u7535\u8111\u9700\u8981\u5339\u914d\u706b\u7bad\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFqA==",
                    "tooltip": "<strong>3\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "3\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1453.png",
                    "x": 780.0,
                    "y": 180.0,
                    "data": "\u706b\u7bad\u7684\u4e3b\u7bad\u4f53\u9700\u8981\u91cd\u578b\u88c5\u7532\u677f. \u8ba9\u6211\u4eec\u75282\u9636\u677f\u548c\u6234\u65af\u677f\u5236\u4f5c38\u4e2a3\u9636\u91cd\u578b\u88c5\u7532\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFrQ==",
                    "tooltip": "<strong>3\u9636\u91cd\u578b\u88c5\u7532\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u706b\u661f\u5730\u7262"
                },
                {
                    "name": "3\u9636\u767b\u9646\u8231",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1456.png",
                    "x": 864.0,
                    "y": 156.0,
                    "data": "\u8f6f\u7740\u9646\u9700\u89813\u9636\u6df1\u7a7a\u767b\u9646\u8231. \u5c06\u706b\u661f\u767b\u9646\u8231\u653e\u5728\u4e00\u4e2a\u6234\u65af\u505a\u7684\u7b3c\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFsA==",
                    "tooltip": "<strong>3\u9636\u767b\u9646\u8231</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c4\u9636\u6bb5(EV)</br>3\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "4\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1531.png",
                    "x": 1080.0,
                    "y": 180.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u53f0\u63a7\u5236\u7535\u8111,\u4e14\u7535\u8111\u9700\u8981\u5339\u914d\u706b\u7bad\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF-w==",
                    "tooltip": "<strong>4\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "4\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1532.png",
                    "x": 1032.0,
                    "y": 180.0,
                    "data": "\u706b\u7bad\u7684\u4e3b\u7bad\u4f53\u9700\u8981\u91cd\u578b\u88c5\u7532\u677f. \u8ba9\u6211\u4eec\u75283\u9636\u91cd\u578b\u88c5\u7532\u677f\u548c\u538b\u7f29\u51b0\u677f\u5236\u4f5c13\u4e2a4\u9636\u91cd\u578b\u88c5\u7532\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAF_A==",
                    "tooltip": "<strong>4\u9636\u91cd\u578b\u88c5\u7532\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8c37\u795e\u661f\u5730\u7262</br>\u6728\u536b\u56db\u4e4b\u65c5</br>\u6728\u536b\u4e8c\u4e4b\u65c5"
                },
                {
                    "name": "5\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1725.png",
                    "x": 1116.0,
                    "y": 372.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u53f0\u63a7\u5236\u7535\u8111,\u4e14\u7535\u8111\u9700\u8981\u5339\u914d\u706b\u7bad\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGvQ==",
                    "tooltip": "<strong>5\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>5\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "5\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1724.png",
                    "x": 1080.0,
                    "y": 324.0,
                    "data": "\u706b\u7bad\u7684\u4e3b\u7bad\u4f53\u9700\u8981\u91cd\u578b\u88c5\u7532\u677f. \u8ba9\u6211\u4eec\u75284\u9636\u91cd\u578b\u88c5\u7532\u677f\u548c\u538b\u7f29\u91cf\u5b50\u677f\u5236\u4f5c61\u4e2a5\u9636\u91cd\u578b\u88c5\u7532\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGvA==",
                    "tooltip": "<strong>5\u9636\u91cd\u578b\u88c5\u7532\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91d1\u661f\u4e4b\u65c5</br>\u6728\u536b\u4e00\u5730\u7262"
                },
                {
                    "name": "6\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2751.png",
                    "x": 936.0,
                    "y": 492.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u53f0\u63a7\u5236\u7535\u8111,\u4e14\u7535\u8111\u9700\u8981\u5339\u914d\u706b\u7bad\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKvw==",
                    "tooltip": "<strong>6\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>6\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "6\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2639.png",
                    "x": 984.0,
                    "y": 492.0,
                    "data": "\u706b\u7bad\u7684\u4e3b\u7bad\u4f53\u9700\u8981\u91cd\u578b\u88c5\u7532\u677f. \u8ba9\u6211\u4eec\u75285\u9636\u677f\u548c\u538b\u7f29\u5965\u5229\u54c8\u94a2\u94c5\u677f\u5236\u4f5c13\u4e2a6\u9636\u91cd\u578b\u88c5\u7532\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKTw==",
                    "tooltip": "<strong>6\u9636\u91cd\u578b\u88c5\u7532\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u571f\u536b\u4e8c\u5730\u7262</br>\u5236\u9020\u4e09\u949b"
                },
                {
                    "name": "7\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2702.png",
                    "x": 756.0,
                    "y": 564.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u53f0\u63a7\u5236\u7535\u8111,\u4e14\u7535\u8111\u9700\u8981\u5339\u914d\u706b\u7bad\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKjg==",
                    "tooltip": "<strong>7\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>7\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "7\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2641.png",
                    "x": 792.0,
                    "y": 492.0,
                    "data": "\u706b\u7bad\u7684\u4e3b\u7bad\u4f53\u9700\u8981\u91cd\u578b\u88c5\u7532\u677f. \u8ba9\u6211\u4eec\u75286\u9636\u677f\u548c\u538b\u7f29\u795e\u79d8\u6c34\u6676\u677f\u5236\u4f5c79\u4e2a7\u9636\u91cd\u578b\u88c5\u7532\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKUQ==",
                    "tooltip": "<strong>7\u9636\u91cd\u578b\u88c5\u7532\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?</br>\u6d77\u536b\u516b\u5730\u7262"
                },
                {
                    "name": "8\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2710.png",
                    "x": 480.0,
                    "y": 468.0,
                    "data": "\u6bcf\u679a\u706b\u7bad\u90fd\u9700\u8981\u4e00\u53f0\u63a7\u5236\u7535\u8111,\u4e14\u7535\u8111\u9700\u8981\u5339\u914d\u706b\u7bad\u7b49\u7ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKlg==",
                    "tooltip": "<strong>8\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>8\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "name": "8\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2643.png",
                    "x": 528.0,
                    "y": 492.0,
                    "data": "\u706b\u7bad\u7684\u4e3b\u7bad\u4f53\u9700\u8981\u91cd\u578b\u88c5\u7532\u677f. \u8ba9\u6211\u4eec\u75287\u9636\u677f\u548c\u538b\u7f29\u9ed1\u949a\u677f\u5236\u4f5c19\u4e2a8\u9636\u91cd\u578b\u88c5\u7532\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKUw==",
                    "tooltip": "<strong>8\u9636\u91cd\u578b\u88c5\u7532\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u51a5\u738b\u661f\u5730\u7262</br>UHV\u80fd\u6e90\u4ed3"
                },
                {
                    "name": "\u6781\u5927\u578b\u6c27\u6c14\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2724.png",
                    "x": 1032.0,
                    "y": 228.0,
                    "data": "\u6781\u5927\u578b\u6c27\u6c14\u7f50\u662f\u4e00\u4e2a\u50a8\u6c27\u7f50,\u6700\u591a\u53ef\u5bb9\u7eb316000\u5355\u4f4d\u7a7a\u6c14. \u5b83\u7684\u4f5c\u7528\u662f\u5728\u6ca1\u6709\u6c27\u6c14\u6e90\u7684\u533a\u57df\u63d0\u4f9b\u4fbf\u643a\u5f0f\u6c27\u6c14\u6e90.%n%n\u7528\u9014:%n\u4e00\u6b21\u53ef\u4ee5\u4f69\u6234\u4e24\u4e2a\u6c27\u6c14\u7f50. \u8981\u4f69\u6234\u4efb\u4f55\u7c7b\u578b\u7684\u6c27\u6c14\u7f50,\u8bf7\u6253\u5f00\u80cc\u5305\u5e76\u5355\u51fb\u83dc\u5355\u9876\u90e8\u7684Galacticraft\u6807\u7b7e. \u5728\u8fd9\u91cc,\u4f60\u5c06\u770b\u5230\u5404\u79cd\u7c7b\u578b\u8bbe\u5907\u7684\u53ef\u7528\u4f4d\u7f6e. \u53ea\u9700\u5c06\u4f60\u7684\u6c27\u6c14\u7f50\u653e\u5728\u5176\u4e2d\u4e00\u4e2a\u5e26\u6709\u6c27\u6c14\u7f50\u7070\u8272\u56fe\u7247\u7684\u63d2\u69fd\u4e2d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKpA==",
                    "tooltip": "<strong>\u6781\u5927\u578b\u6c27\u6c14\u7f50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>4\u9636\u706b\u7bad"
                },
                {
                    "name": "\u6676\u57061",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/832.png",
                    "x": 372.0,
                    "y": 60.0,
                    "data": "\u4f60\u53ef\u4ee5\u7528\u786c\u5e01\u8d2d\u4e70\u4e00\u4e9b\u6676\u5706.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADQA==",
                    "tooltip": "<strong>\u6676\u57061</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>NASA\u5de5\u4f5c\u53f0"
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
                    "source": "\u7532\u919b",
                    "target": "\u504f\u4e8c\u7532\u80bc"
                },
                {
                    "source": "2-\u4e59\u57fa\u84bd\u918c",
                    "target": "2-\u4e59\u57fa\u84bd\u6c22\u918c"
                },
                {
                    "source": "\u518d\u6c89...\u4ec0\u4e48?",
                    "target": "2-\u4e59\u57fa\u84bd\u6c22\u918c"
                },
                {
                    "source": "\u4f60\u600e\u4e48\u5ff5?",
                    "target": "2-\u4e59\u57fa\u84bd\u918c"
                },
                {
                    "source": "RP-1\u706b\u7bad\u71c3\u6599",
                    "target": "\u66f4\u597d\u7684\u706b\u7bad\u71c3\u6599"
                },
                {
                    "source": "\u785d\u57fa!(\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9)",
                    "target": "\u66f4\u597d\u7684\u706b\u7bad\u71c3\u6599"
                },
                {
                    "source": "4\u9636\u706b\u7bad",
                    "target": "\u751f\u6210\u6c27\u6c14\u7684\u66f4\u597d\u65b9\u5f0f"
                },
                {
                    "source": "\u6676\u57061",
                    "target": "\u9ad8\u7ea7\u6676\u5706"
                },
                {
                    "source": "\u6c27\u6c14\u4f9b\u7ed9\u5668",
                    "target": "\u6c14\u5bc6\u95f8"
                },
                {
                    "source": "3\u9636\u706b\u7bad",
                    "target": "\u5f27\u5149\u706f"
                },
                {
                    "source": "\u6708\u7403\u5730\u7262",
                    "target": "\u4e00\u4efd\u5956\u52b1"
                },
                {
                    "source": "1\u9636\u706b\u7bad",
                    "target": "\u4f60\u51c6\u5907\u597d\u4e86\u5417\uff1f"
                },
                {
                    "source": "\u592a\u7a7a\u91c7\u77ff\u673a\u8bbe\u8ba1\u56fe",
                    "target": "\u592a\u7a7a\u91c7\u77ff\u673a"
                },
                {
                    "source": "\u592a\u7a7a\u91c7\u77ff\u673a",
                    "target": "\u592a\u7a7a\u91c7\u77ff\u673a\u57fa\u5730"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u592a\u7a7a\u91c7\u77ff\u673a\u8bbe\u8ba1\u56fe"
                },
                {
                    "source": "\u4e0d\u9700\u8981\u51fb\u8d25boss!\u591a\u4e48\u4ee4\u4eba\u4f24\u5fc3!",
                    "target": "0\u9636\u706b\u7bad?\u4ec0\u4e48?"
                },
                {
                    "source": "\u7a7f\u68ad\u673a\u7684\u811a,\u8e29\u8e29\u8e29...",
                    "target": "0\u9636\u706b\u7bad?\u4ec0\u4e48?"
                },
                {
                    "source": "\u7a7f\u68ad\u673a\u9f3b\u9525",
                    "target": "0\u9636\u706b\u7bad?\u4ec0\u4e48?"
                },
                {
                    "source": "2\u9636\u706b\u7bad",
                    "target": "\u83cc\u6ce5"
                },
                {
                    "source": "\u627e\u4e00\u4e9b\u9668\u94c1",
                    "target": "\u66f4\u5927\u7684\u6c27\u6c14\u7f50"
                },
                {
                    "source": "2\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u52a9\u63a8\u5668"
                },
                {
                    "source": "5\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "2\u9636\u52a9\u63a8\u5668"
                },
                {
                    "source": "7\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "3\u9636\u52a9\u63a8\u5668"
                },
                {
                    "source": "8\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "4\u9636\u52a9\u63a8\u5668"
                },
                {
                    "source": "\u9891\u7387\u6a21\u5757",
                    "target": "\u8f66\u5ea7"
                },
                {
                    "source": "0\u9636\u706b\u7bad?\u4ec0\u4e48?",
                    "target": "\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f"
                },
                {
                    "source": "\u522b\u544a\u8bc9\u6211\u6211\u9700\u8981\u770b\u7eb8\u8d28\u5730\u56fe\uff01",
                    "target": "\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f"
                },
                {
                    "source": "\u8d27\u8fd0\u706b\u7bad\u8bbe\u8ba1\u56fe",
                    "target": "\u8d27\u8fd0\u706b\u7bad:\u7eaf\u7cb9\u662f\u4e3a\u4e86\u597d\u73a9"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u661f",
                    "target": "\u8d27\u8fd0\u706b\u7bad:\u7eaf\u7cb9\u662f\u4e3a\u4e86\u597d\u73a9"
                },
                {
                    "source": "\u53d1\u5c04\u63a7\u5236\u5668",
                    "target": "\u8d27\u8fd0\u706b\u7bad:\u7eaf\u7cb9\u662f\u4e3a\u4e86\u597d\u73a9"
                },
                {
                    "source": "\u706b\u661f\u5730\u7262",
                    "target": "\u8d27\u8fd0\u706b\u7bad\u8bbe\u8ba1\u56fe"
                },
                {
                    "source": "\u83cc\u6ce5",
                    "target": "\u5ca9\u7a74\u85e4\u8513"
                },
                {
                    "source": "3\u9636\u706b\u7bad",
                    "target": "\u8c37\u795e\u661f\u5730\u7262"
                },
                {
                    "source": "\u785d\u9178",
                    "target": "CN3H7O3(\u7d2b\u8272)\u706b\u7bad\u71c3\u6599"
                },
                {
                    "source": "\u4e00\u7532\u57fa\u80bc",
                    "target": "CN3H7O3(\u7d2b\u8272)\u706b\u7bad\u71c3\u6599"
                },
                {
                    "source": "\u4f60\u95fb\u8d77\u6765\u50cf\u6389\u5230\u4e86\u9152\u6876\u91cc!",
                    "target": "\u7164\u7126\u84b8\u998f"
                },
                {
                    "source": "\u66f4\u597d\u7684\u706b\u7bad\u71c3\u6599",
                    "target": "\u7164\u7126\u84b8\u998f"
                },
                {
                    "source": "\u80bc",
                    "target": "\u5bc6\u96c6\u80bc"
                },
                {
                    "source": "\u9ad8\u7ea7\u6676\u5706",
                    "target": "\u7ec8\u6781\u5de5\u4f5c\u53f0"
                },
                {
                    "source": "\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f",
                    "target": "\u5b83\u5305\u542b\u4e86\u4e00\u4e2a\u9ed1\u6d1e\u5417\uff1f"
                },
                {
                    "source": "2\u9636\u7eb3\u7c73\u953b\u7089",
                    "target": "\u522b\u544a\u8bc9\u6211\u6211\u9700\u8981\u770b\u7eb8\u8d28\u5730\u56fe\uff01"
                },
                {
                    "source": "8\u9636\u706b\u7bad",
                    "target": "\u522b\u544a\u8bc9\u6211\u6211\u9700\u8981\u770b\u7eb8\u8d28\u5730\u56fe\uff01"
                },
                {
                    "source": "UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 2",
                    "target": "\u522b\u544a\u8bc9\u6211\u6211\u9700\u8981\u770b\u7eb8\u8d28\u5730\u56fe\uff01"
                },
                {
                    "source": "5\u9636\u706b\u7bad",
                    "target": "\u571f\u536b\u4e8c\u5730\u7262"
                },
                {
                    "source": "\u5230\u7194\u878d\u4e4b\u6d77\u5e95\u90e8\u7684\u65c5\u7a0b",
                    "target": "EVA\u88c5\u5907"
                },
                {
                    "source": "7\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u7279\u5927\u578b\u71c3\u6599\u7f50"
                },
                {
                    "source": "\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f",
                    "target": "\u70ab\u9177!"
                },
                {
                    "source": "\u70ab\u9177!",
                    "target": "\u8d85\u70ab\u9177!"
                },
                {
                    "source": "\u6708\u7403\u5730\u7262",
                    "target": "\u627e\u4e00\u4e9b\u9668\u94c1"
                },
                {
                    "source": "\u7532\u919b\u50ac\u5316\u5242",
                    "target": "\u7532\u919b"
                },
                {
                    "source": "CN3H7O3(\u7d2b\u8272)\u706b\u7bad\u71c3\u6599",
                    "target": "\u7532\u919b\u50ac\u5316\u5242"
                },
                {
                    "source": "\u6676\u57061",
                    "target": "\u9891\u7387\u6a21\u5757"
                },
                {
                    "source": "\u6708\u7403\u5de1\u903b\u961f",
                    "target": "\u7ed9\u4f60\u7684\u6708\u7403\u8f66\u52a0\u6cb9"
                },
                {
                    "source": "\u5c0f\u578b\u71c3\u6599\u7f50",
                    "target": "\u52a0\u6cb9\u7ad9"
                },
                {
                    "source": "\u592a\u7a7a\u94bb\u673a",
                    "target": "\u6c14\u6001\u884c\u661f"
                },
                {
                    "source": "\u9694\u70ed\u5e03\u5339",
                    "target": "\u6293\u94a9"
                },
                {
                    "source": "\u5230\u7194\u878d\u4e4b\u6d77\u5e95\u90e8\u7684\u65c5\u7a0b",
                    "target": "\u5b87\u822a\u670d-\u91cd\u529b\u9774\u5b50"
                },
                {
                    "source": "\u56db\u6c27\u5316\u4e8c\u6c2e",
                    "target": "H8N4C2O4(\u7eff\u8272)\u706b\u7bad\u71c3\u6599"
                },
                {
                    "source": "\u91cd\u5927\u5347\u7ea7",
                    "target": "H8N4C2O4(\u7eff\u8272)\u706b\u7bad\u71c3\u6599"
                },
                {
                    "source": "\u504f\u4e8c\u7532\u80bc",
                    "target": "H8N4C2O4(\u7eff\u8272)\u706b\u7bad\u71c3\u6599"
                },
                {
                    "source": "5\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "3\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525"
                },
                {
                    "source": "7\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "4\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525"
                },
                {
                    "source": "2\u9636\u52a9\u63a8\u5668",
                    "target": "3\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce"
                },
                {
                    "source": "3\u9636\u52a9\u63a8\u5668",
                    "target": "4\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce"
                },
                {
                    "source": "5\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "3\u9636\u91cd\u578b\u706b\u7bad\u9ccd"
                },
                {
                    "source": "7\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "4\u9636\u91cd\u578b\u706b\u7bad\u9ccd"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u91cd\u578b\u706b\u7bad\u53d1\u52a8\u673a"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u91cd\u578b\u706b\u7bad\u9ccd"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u91cd\u578b\u706b\u7bad\u9f3b\u9525"
                },
                {
                    "source": "1\u9636\u706b\u7bad",
                    "target": "\u6c263\u548c\u6708\u7403\u4e0a\u7684\u76d0\u6c34"
                },
                {
                    "source": "\u90bb\u82ef\u4e8c\u7532\u9178,\u9177\u5b69\u5b50\u7684\u65b9\u5f0f",
                    "target": "\u4f60\u600e\u4e48\u5ff5?"
                },
                {
                    "source": "EVA\u88c5\u5907",
                    "target": "\u6211\u8be5\u600e\u4e48\u4e3a\u8fd9*\u73a9\u610f\u5145\u7535?"
                },
                {
                    "source": "\u6c281",
                    "target": "\u80bc"
                },
                {
                    "source": "\u8fc7\u6c27\u5316\u6c22",
                    "target": "\u80bc"
                },
                {
                    "source": "2-\u4e59\u57fa\u84bd\u6c22\u918c",
                    "target": "\u8fc7\u6c27\u5316\u6c22"
                },
                {
                    "source": "\u6c281",
                    "target": "\u8fc7\u6c27\u5316\u6c22"
                },
                {
                    "source": "4\u9636\u706b\u7bad",
                    "target": "\u6728\u536b\u4e00\u5730\u7262"
                },
                {
                    "source": "4\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "target": "\u5230\u7194\u878d\u4e4b\u6d77\u5e95\u90e8\u7684\u65c5\u7a0b"
                },
                {
                    "source": "5\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u5927\u578b\u71c3\u6599\u7f50"
                },
                {
                    "source": "2\u9636\u706b\u7bad",
                    "target": "\u91cd\u578b\u6c27\u6c14\u7f50"
                },
                {
                    "source": "2\u9636\u706b\u7bad",
                    "target": "\u53d1\u5c04\u63a7\u5236\u5668"
                },
                {
                    "source": "\u76ee\u6807:\u706b\u661f",
                    "target": "\u81ea\u52a8\u5316\u88c5\u5378\u706b\u7bad"
                },
                {
                    "source": "\u8d27\u8fd0\u706b\u7bad:\u7eaf\u7cb9\u662f\u4e3a\u4e86\u597d\u73a9",
                    "target": "\u81ea\u52a8\u5316\u88c5\u5378\u706b\u7bad"
                },
                {
                    "source": "\u6c27\u6c14\u538b\u7f29\u673a",
                    "target": "\u6db2\u6c27\u4e0e\u9762\u5305"
                },
                {
                    "source": "2\u9636\u706b\u7bad",
                    "target": "\u706b\u661f\u5730\u7262"
                },
                {
                    "source": "2\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u706b\u661f\u767b\u9646\u8231"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u4e2d\u578b\u71c3\u6599\u7f50"
                },
                {
                    "source": "\u5bc6\u96c6\u80bc",
                    "target": "\u4e00\u7532\u57fa\u80bc"
                },
                {
                    "source": "1\u9636\u706b\u7bad",
                    "target": "\u62b5\u8fbe\u6708\u7403"
                },
                {
                    "source": "\u6708\u7403\u5730\u7262",
                    "target": "\u6708\u7403\u8f66\u8bbe\u8ba1\u56fe"
                },
                {
                    "source": "1\u9636\u706b\u7bad",
                    "target": "\u6708\u7403\u7684\u767d\u5929\u548c\u9ed1\u591c\u65f6\u95f4"
                },
                {
                    "source": "\u706b\u7bad\u53d1\u5c04\u5e73\u53f0",
                    "target": "\u6708\u7403\u5730\u7262"
                },
                {
                    "source": "\u52a0\u6cb9\u7ad9",
                    "target": "\u6708\u7403\u5730\u7262"
                },
                {
                    "source": "1\u9636\u706b\u7bad",
                    "target": "\u6708\u7403\u5730\u7262"
                },
                {
                    "source": "\u6c27\u6c14\u538b\u7f29\u673a",
                    "target": "\u6708\u7403\u5730\u7262"
                },
                {
                    "source": "\u8f66\u5ea7",
                    "target": "\u767b\u9646\u6708\u7403"
                },
                {
                    "source": "\u706b\u7bad\u5f15\u64ce",
                    "target": "\u767b\u9646\u6708\u7403"
                },
                {
                    "source": "\u6708\u7403\u8f66\u8bbe\u8ba1\u56fe",
                    "target": "\u6708\u7403\u5de1\u903b\u961f"
                },
                {
                    "source": "\u7164\u7126\u84b8\u998f",
                    "target": "\u8418"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "NASA\u5de5\u4f5c\u53f0"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df3,\u7ec4\u88c5!",
                    "target": "NASA\u5de5\u4f5c\u53f0"
                },
                {
                    "source": "\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f",
                    "target": "NASA\u5de5\u4f5c\u53f0"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u6f02\u4eae\u53c8\u8212\u9002 - \u5728\u592a\u7a7a!"
                },
                {
                    "source": "CN3H7O3(\u7d2b\u8272)\u706b\u7bad\u71c3\u6599",
                    "target": "\u56db\u6c27\u5316\u4e8c\u6c2e"
                },
                {
                    "source": "\u785d\u9178",
                    "target": "\u56db\u6c27\u5316\u4e8c\u6c2e"
                },
                {
                    "source": "\u94af",
                    "target": "\u56db\u6c27\u5316\u4e8c\u6c2e"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(UHV)",
                    "target": "\u4e0d\u9700\u8981\u51fb\u8d25boss!\u591a\u4e48\u4ee4\u4eba\u4f24\u5fc3!"
                },
                {
                    "source": "8\u9636\u706b\u7bad",
                    "target": "\u4e0d\u9700\u8981\u51fb\u8d25boss!\u591a\u4e48\u4ee4\u4eba\u4f24\u5fc3!"
                },
                {
                    "source": "UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 2",
                    "target": "\u4e0d\u9700\u8981\u51fb\u8d25boss!\u591a\u4e48\u4ee4\u4eba\u4f24\u5fc3!"
                },
                {
                    "source": "1\u9636\u706b\u7bad",
                    "target": "\u6c27\u6c14\u5206\u914d\u5668"
                },
                {
                    "source": "\u6c27\u6c14\u7f50",
                    "target": "\u6c27\u6c14\u6536\u96c6\u5668"
                },
                {
                    "source": "\u6c27\u6c14\u7f50",
                    "target": "\u6c27\u6c14\u538b\u7f29\u673a"
                },
                {
                    "source": "\u6c27\u6c14\u9762\u7f69",
                    "target": "\u4f9b\u6c27\u7cfb\u7edf"
                },
                {
                    "source": "NASA\u5de5\u4f5c\u53f0",
                    "target": "\u6c27\u6c14\u9762\u7f69"
                },
                {
                    "source": "\u57fa\u7840\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u6c27\u6c14\u9762\u7f69"
                },
                {
                    "source": "2\u9636\u706b\u7bad",
                    "target": "\u6c27\u6c14\u4f9b\u7ed9\u5668"
                },
                {
                    "source": "\u4f9b\u6c27\u7cfb\u7edf",
                    "target": "\u6c27\u6c14\u7f50"
                },
                {
                    "source": "\u6c27\u6c14\u9762\u7f69",
                    "target": "\u6c27\u6c14\u7f50"
                },
                {
                    "source": "\u4f9b\u6c27\u7cfb\u7edf",
                    "target": "\u964d\u843d\u4f1e"
                },
                {
                    "source": "\u6c27\u6c14\u5206\u914d\u5668",
                    "target": "\u6c38\u4e45\u6c27\u6c14\u7cfb\u7edf"
                },
                {
                    "source": "\u8418",
                    "target": "\u90bb\u82ef\u4e8c\u7532\u9178,\u9177\u5b69\u5b50\u7684\u65b9\u5f0f"
                },
                {
                    "source": "1\u9636\u706b\u7bad",
                    "target": "\u884c\u661f\u4e4b\u6cea"
                },
                {
                    "source": "7\u9636\u706b\u7bad",
                    "target": "\u51a5\u738b\u661f\u5730\u7262"
                },
                {
                    "source": "6\u9636\u706b\u7bad",
                    "target": "\u6d77\u536b\u516b\u5730\u7262"
                },
                {
                    "source": "\u538b\u7f29\u4e07\u7269",
                    "target": "\u56de\u6536\u706b\u7bad,\u4fdd\u62a4\u73af\u5883"
                },
                {
                    "source": "\u6708\u7403\u5730\u7262",
                    "target": "\u56de\u6536\u706b\u7bad,\u4fdd\u62a4\u73af\u5883"
                },
                {
                    "source": "\u4e00\u4efd\u5956\u52b1",
                    "target": "\u9009\u62e9\u5956\u52b1:\u5956\u52b1\u5305"
                },
                {
                    "source": "\u9009\u62e9\u5956\u52b1:\u79c1\u4eba\u7ef4\u5ea6",
                    "target": "\u9009\u62e9\u5956\u52b1:\u5956\u52b1\u5305"
                },
                {
                    "source": "\u4e00\u4efd\u5956\u52b1",
                    "target": "\u9009\u62e9\u5956\u52b1:\u79c1\u4eba\u7ef4\u5ea6"
                },
                {
                    "source": "\u9009\u62e9\u5956\u52b1:\u5956\u52b1\u5305",
                    "target": "\u9009\u62e9\u5956\u52b1:\u79c1\u4eba\u7ef4\u5ea6"
                },
                {
                    "source": "1\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u706b\u7bad\u5f15\u64ce"
                },
                {
                    "source": "1\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u706b\u7bad\u5c3e\u9ccd"
                },
                {
                    "source": "NASA\u5de5\u4f5c\u53f0",
                    "target": "\u706b\u7bad\u71c3\u6599"
                },
                {
                    "source": "1\u9636\u706b\u7bad",
                    "target": "\u706b\u7bad\u53d1\u5c04\u5e73\u53f0"
                },
                {
                    "source": "1\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u706b\u7bad\u9f3b\u9525"
                },
                {
                    "source": "\u767b\u9646\u6708\u7403",
                    "target": "1\u9636\u706b\u7bad"
                },
                {
                    "source": "\u5c0f\u578b\u71c3\u6599\u7f50",
                    "target": "1\u9636\u706b\u7bad"
                },
                {
                    "source": "1\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "target": "1\u9636\u706b\u7bad"
                },
                {
                    "source": "\u706b\u7bad\u9f3b\u9525",
                    "target": "1\u9636\u706b\u7bad"
                },
                {
                    "source": "\u706b\u7bad\u5c3e\u9ccd",
                    "target": "1\u9636\u706b\u7bad"
                },
                {
                    "source": "\u706b\u7bad\u5f15\u64ce",
                    "target": "1\u9636\u706b\u7bad"
                },
                {
                    "source": "2\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "target": "2\u9636\u706b\u7bad"
                },
                {
                    "source": "\u52a9\u63a8\u5668",
                    "target": "2\u9636\u706b\u7bad"
                },
                {
                    "source": "\u706b\u661f\u767b\u9646\u8231",
                    "target": "2\u9636\u706b\u7bad"
                },
                {
                    "source": "3\u9636\u767b\u9646\u8231",
                    "target": "3\u9636\u706b\u7bad"
                },
                {
                    "source": "\u91cd\u578b\u706b\u7bad\u9f3b\u9525",
                    "target": "3\u9636\u706b\u7bad"
                },
                {
                    "source": "\u91cd\u578b\u706b\u7bad\u53d1\u52a8\u673a",
                    "target": "3\u9636\u706b\u7bad"
                },
                {
                    "source": "\u91cd\u578b\u706b\u7bad\u9ccd",
                    "target": "3\u9636\u706b\u7bad"
                },
                {
                    "source": "\u4e2d\u578b\u71c3\u6599\u7f50",
                    "target": "3\u9636\u706b\u7bad"
                },
                {
                    "source": "3\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "target": "3\u9636\u706b\u7bad"
                },
                {
                    "source": "4\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "target": "4\u9636\u706b\u7bad"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce",
                    "target": "5\u9636\u706b\u7bad"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u706b\u7bad\u9ccd",
                    "target": "5\u9636\u706b\u7bad"
                },
                {
                    "source": "\u5927\u578b\u71c3\u6599\u7f50",
                    "target": "5\u9636\u706b\u7bad"
                },
                {
                    "source": "5\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "target": "5\u9636\u706b\u7bad"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525",
                    "target": "5\u9636\u706b\u7bad"
                },
                {
                    "source": "6\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "target": "6\u9636\u706b\u7bad"
                },
                {
                    "source": "4\u9636\u91cd\u578b\u706b\u7bad\u5f15\u64ce",
                    "target": "7\u9636\u706b\u7bad"
                },
                {
                    "source": "4\u9636\u91cd\u578b\u706b\u7bad\u9ccd",
                    "target": "7\u9636\u706b\u7bad"
                },
                {
                    "source": "4\u9636\u91cd\u578b\u706b\u7bad\u9f3b\u9525",
                    "target": "7\u9636\u706b\u7bad"
                },
                {
                    "source": "7\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "target": "7\u9636\u706b\u7bad"
                },
                {
                    "source": "\u7279\u5927\u578b\u71c3\u6599\u7f50",
                    "target": "7\u9636\u706b\u7bad"
                },
                {
                    "source": "4\u9636\u52a9\u63a8\u5668",
                    "target": "8\u9636\u706b\u7bad"
                },
                {
                    "source": "8\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111",
                    "target": "8\u9636\u706b\u7bad"
                },
                {
                    "source": "\u706b\u7bad\u71c3\u6599",
                    "target": "RP-1\u706b\u7bad\u71c3\u6599"
                },
                {
                    "source": "2\u9636\u706b\u7bad",
                    "target": "\u706b\u661f\u4e0a\u7684\u76d0\u6c34\u548c\u6c2f\u82ef"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "\u91cd\u5927\u5347\u7ea7"
                },
                {
                    "source": "\u51ef\u8299\u62c9",
                    "target": "\u7a7f\u68ad\u673a\u9f3b\u9525"
                },
                {
                    "source": "8\u9636\u706b\u7bad",
                    "target": "\u7a7f\u68ad\u673a\u9f3b\u9525"
                },
                {
                    "source": "3\u9636\u706b\u7bad",
                    "target": "\u5728\u592a\u7a7a\u4e2d\u7761\u89c9"
                },
                {
                    "source": "2\u9636\u706b\u7bad",
                    "target": "\u9ecf\u6ed1\u602a"
                },
                {
                    "source": "1\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u5c0f\u578b\u71c3\u6599\u7f50"
                },
                {
                    "source": "\u7a7a\u95f4\u7ad9",
                    "target": "\u592a\u7a7a\u94bb\u673a"
                },
                {
                    "source": "4\u9636\u706b\u7bad",
                    "target": "\u592a\u7a7a\u94bb\u673a"
                },
                {
                    "source": "1\u9636\u706b\u7bad",
                    "target": "\u7a7a\u95f4\u7ad9"
                },
                {
                    "source": "\u6708\u7403\u7684\u767d\u5929\u548c\u9ed1\u591c\u65f6\u95f4",
                    "target": "\u592a\u7a7a\u706b\u628a"
                },
                {
                    "source": "\u6211\u80fd\u4e3a\u6211\u7684\u7236\u4eb2\u5efa\u9020\u4e00\u8258\u6bcd\u8230\u5417\uff1f",
                    "target": "steve@mothership:~$"
                },
                {
                    "source": "\u94f1",
                    "target": "\u8d85\u5927\u578b\u6c27\u6c14\u7f50"
                },
                {
                    "source": "3\u9636\u706b\u7bad",
                    "target": "\u8d85\u5927\u578b\u6c27\u6c14\u7f50"
                },
                {
                    "source": "\u6c27\u6c14\u4f9b\u7ed9\u5668",
                    "target": "\u6e29\u5ea6\u63a7\u5236"
                },
                {
                    "source": "\u51ef\u8299\u62c9",
                    "target": "\u7a7f\u68ad\u673a\u7684\u811a,\u8e29\u8e29\u8e29..."
                },
                {
                    "source": "8\u9636\u706b\u7bad",
                    "target": "\u7a7f\u68ad\u673a\u7684\u811a,\u8e29\u8e29\u8e29..."
                },
                {
                    "source": "2\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "\u9694\u70ed\u5e03\u5339"
                },
                {
                    "source": "1\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "1\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "source": "\u538b\u7f29\u4e07\u7269",
                    "target": "1\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "NASA\u5de5\u4f5c\u53f0",
                    "target": "1\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "2\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "2\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "source": "\u627e\u4e00\u4e9b\u9668\u94c1",
                    "target": "2\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "\u6708\u7403\u5730\u7262",
                    "target": "2\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "3\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "source": "\u706b\u661f\u5730\u7262",
                    "target": "3\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "3\u9636\u767b\u9646\u8231"
                },
                {
                    "source": "3\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "3\u9636\u767b\u9646\u8231"
                },
                {
                    "source": "4\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "4\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "source": "\u8c37\u795e\u661f\u5730\u7262",
                    "target": "4\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "\u6728\u536b\u56db\u4e4b\u65c5",
                    "target": "4\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "\u6728\u536b\u4e8c\u4e4b\u65c5",
                    "target": "4\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "5\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "5\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "source": "\u91d1\u661f\u4e4b\u65c5",
                    "target": "5\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "\u6728\u536b\u4e00\u5730\u7262",
                    "target": "5\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "6\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "6\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "source": "\u571f\u536b\u4e8c\u5730\u7262",
                    "target": "6\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "\u5236\u9020\u4e09\u949b",
                    "target": "6\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "7\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "7\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "source": "\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?",
                    "target": "7\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "\u6d77\u536b\u516b\u5730\u7262",
                    "target": "7\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "8\u9636\u91cd\u578b\u88c5\u7532\u677f",
                    "target": "8\u9636\u706b\u7bad\u63a7\u5236\u7535\u8111"
                },
                {
                    "source": "\u51a5\u738b\u661f\u5730\u7262",
                    "target": "8\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "UHV\u80fd\u6e90\u4ed3",
                    "target": "8\u9636\u91cd\u578b\u88c5\u7532\u677f"
                },
                {
                    "source": "4\u9636\u706b\u7bad",
                    "target": "\u6781\u5927\u578b\u6c27\u6c14\u7f50"
                },
                {
                    "source": "NASA\u5de5\u4f5c\u53f0",
                    "target": "\u6676\u57061"
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
    