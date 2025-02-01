
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
                    "name": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(MV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2823.png",
                    "x": 696.0,
                    "y": 120.0,
                    "data": "\u8fd9\u662fMV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALBw==",
                    "title": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(MV)",
                    "tooltip": "<strong>\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(MV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)"
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(EV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2779.png",
                    "x": 264.0,
                    "y": 192.0,
                    "data": "\u4f60\u4e0d\u60f3\u6bcf\u6b21\u642c\u52a8\u77ff\u673a\u7684\u65f6\u5019\u90fd\u8981\u91cd\u65b0\u5b89\u88c5\u4e00\u5927\u5957\u914d\u5957\u8bbe\u65bd,\u6240\u4ee5\u4f60\u9700\u8981\u67d0\u79cd\u7b80\u5355\u6613\u7528\u7684\u5355\u65b9\u5757\u53d1\u7535\u673a\u4e3a\u5176\u4f9b\u80fd.\u7b49\u79bb\u5b50\u53d1\u7535\u673a\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9.\u53ea\u9700\u8fdc\u7a0b\u4f20\u9001\u71c3\u6599\u5373\u53ef.</br></br>[note]\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u4e86,\u968f\u7740\u7535\u538b\u7b49\u7ea7\u7684\u63d0\u9ad8,\u7b49\u79bb\u5b50\u53d1\u7535\u673a\u7684\u71c3\u6599\u6548\u7387\u5728\u63d0\u9ad8,\u800c\u4e0d\u50cf\u5176\u4ed6\u53d1\u7535\u673a\u4e00\u6837\u4e0b\u964d.\u4eab\u53d7\u8fd9\u4e2a\u5c0f\u798f\u5229\u5427,\u867d\u8bf4\u6700\u9ad8\u6548\u7684\u4ecd\u7136\u662f\u591a\u65b9\u5757\u673a\u5668:\u5927\u578b\u7b49\u79bb\u5b50\u6da1\u8f6e.</br></br>\u8bd1\u8005\u6ce8:\u4ee5\u540e\u6709\u4e86\u865a\u7a7a\u91c7\u77ff\u573a,\u4e0d\u7528\u8001\u662f\u642c\u52a8,\u96c6\u4e2d\u4f7f\u7528\u591a\u65b9\u5757\u7b49\u79bb\u5b50\u4f9b\u80fd\u662f\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK2w==",
                    "title": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(EV)",
                    "tooltip": "<strong>\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(EV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f00\u59cb\u805a\u53d8"
                },
                {
                    "name": "\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1338.png",
                    "x": 84.0,
                    "y": 192.0,
                    "data": "\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd. \u55ef,\u90a3\u5c31\u5bf9\u4e86. \u5b83\u4eec\u76f8\u6bd4\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd\u8d35\u4e00\u70b9,\u5171\u8ba1\u9700\u8981576\u4e2a\u592a\u9633\u80fd. \u4f46\u662f\u5b83\u4eec\u53ef\u53d1\u75351000GT-EU/t,\u4e0d\u9700\u8981\u6e05\u6d17.\u600e\u4e48\u4f1a\u8fd9\u6837\uff1f \u9b54\u6cd5\u5927\u6cd5\u597d.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFOg==",
                    "title": "\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd",
                    "tooltip": "<strong>\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>IV\u7ec4\u88c5\u673a</br>\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd"
                },
                {
                    "name": "\u5730\u70ed\u5f15\u64ce(LuV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2800.png",
                    "x": 588.0,
                    "y": 300.0,
                    "data": "\u8fd9\u662fLuV\u7248\u672c.\u5c31\u7b97\u914d\u5408\u70bc\u72f1\u4e4b\u58f6\u4e00\u8d77\u4f7f\u7528,\u4f46\u771f\u7684\u6709\u7528\u5417?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK8A==",
                    "title": "\u5730\u70ed\u5f15\u64ce(LuV)",
                    "tooltip": "<strong>\u5730\u70ed\u5f15\u64ce(LuV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6e7f\u4ef6\u4e3b\u673a"
                },
                {
                    "name": "\u706b\u7bad\u5f15\u64ce(IV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2784.png",
                    "x": 336.0,
                    "y": 228.0,
                    "data": "\u8fd9\u662fIV\u7248\u672c. \u5b83\u7684\u71c3\u6599\u6548\u7387\u4e3a70\uff05,\u540c\u65f6\u6bcf\u79d2\u4ea7\u751f500\u52304000\u70b9\u6c61\u67d3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK4A==",
                    "title": "\u00a7a\u00a7l\u706b\u7bad\u5f15\u64ce(IV)",
                    "tooltip": "<strong>\u706b\u7bad\u5f15\u64ce(IV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5728IV\u4f60\u4f1a\u8ba8\u538c\u4e4b1-4</br>RP-1\u706b\u7bad\u71c3\u6599"
                },
                {
                    "name": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2948.png",
                    "x": 300.0,
                    "y": 372.0,
                    "data": "\u8fd9\u662f\u7845\u5ca9\u53cd\u5e94\u5806\u7684\u591a\u65b9\u5757\u7248\u672c,\u4f46\u5b83\u4e0e\u5355\u65b9\u5757\u7684\u7845\u5ca9\u53cd\u5e94\u5806\u5b8c\u5168\u4e0d\u540c.</br></br>\u5b83\u9700\u8981\u7684\u662f\u6d41\u4f53\u6001\u7684\u7845\u5ca9\u71c3\u6599\u6216\u6fc0\u53d1\u6001\u7684\u6838\u71c3\u6599,\u800c\u8f93\u51fa\u7684\u662f\u67af\u7aed\u7684\u71c3\u6599. \u4f60\u53ef\u4ee5\u5728NEI\u67e5\u5230\u6d41\u4f53\u71c3\u6599\u7684\u8be6\u7ec6\u6570\u636e.</br></br>\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806\u8fd0\u884c\u65f6\u6bcf\u79d2\u6d88\u80172400L\u6db2\u4f53\u7a7a\u6c14,\u5426\u5219\u5c31\u4f1a\u6301\u7eed\u6d88\u8017\u71c3\u6599\u4f46\u4e0d\u4ea7\u51fa\u80fd\u91cf.</br></br>[warn]\u4ed3\u5ba4\u4e2d\u5b58\u5728\u4e00\u79cd\u4ee5\u4e0a\u7684\u71c3\u6599\u5c06\u4f1a\u5bfc\u81f4\u7206\u70b8.[/warn]</br></br>\u00a7r\u8f93\u5165\u51b7\u5374\u6db2\u53ef\u4ee5\u63d0\u5347\u6548\u7387.</br>IC2\u51b7\u5374\u6db2:1.05x</br>\u8d85\u7ea7\u51b7\u5374\u6db2:1.5x</br>\u6781\u5bd2\u4e4b\u51db\u51b0:2.75x</br></br>\u8f93\u5165\u67d0\u4e9b\u7194\u878d\u91d1\u5c5e\u53ef\u4ee5\u63d0\u9ad8\u8f93\u51fa\u529f\u7387.</br>\u7194\u878d\u94ef:2x</br>\u7194\u878d\u94c0-235:3x</br>\u7194\u878d\u7845\u5ca9:4x</br>\u7194\u878d\u539f\u5b50\u5206\u79bb\u50ac\u5316\u5242:16x</br>\u8bf7\u6ce8\u610f:\u4e0e\u51b7\u5374\u6db2\u7684\u6548\u7387\u63d0\u5347\u4e0d\u540c(\u767d\u5ad6),\u7194\u878d\u91d1\u5c5e\u63d0\u9ad8\u529f\u7387\u7684\u4ee3\u4ef7\u662f\u6d88\u8017\u66f4\u591a\u7684\u71c3\u6599.\u66f4\u50cf\u662f\u7ed9\u53cd\u5e94\u5806\u52a0\u4e86'\u5e76\u884c'.</br></br>\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806\u540c\u6837\u652f\u6301\u00a79Tec\u00a71Tech\u00a7r\u591aA\u52a8\u529b\u4ed3\u548c\u6fc0\u5149\u4ed3.</br></br>[note]PS\uff1a\u8fd9\u53f0\u53d1\u7535\u673a\u62e5\u6709\u76ee\u524d\u6574\u4e2a\u6574\u5408\u5305\u6700\u9ad8\u7684\u8f93\u51fa\u529f\u7387,\u5728\u4f7f\u7528Mk6\u71c3\u6599\u65f6\u751a\u81f3\u80fd\u8d85\u8d8a\u6234\u68ee\u7403.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALhA==",
                    "title": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "tooltip": "<strong>\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u529b\u573a\u53d1\u751f\u5668(ZPM)"
                },
                {
                    "name": "\u70ed\u4ea4\u6362",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/196.png",
                    "x": 552.0,
                    "y": 156.0,
                    "data": "\u53cd\u5e94\u5806\u7684\u6e29\u5ea6\u4f1a\u5347\u9ad8.\u56e0\u6b64\u4f60\u9700\u8981\u5c06\u71c3\u6599\u68d2\u7684\u6e29\u5ea6\u8f6c\u79fb\u5230\u5176\u4ed6\u4ec0\u4e48\u5730\u65b9\u53bb.</br>\u70ed\u4ea4\u6362\u5668\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u79cd\u529f\u80fd,\u4f60\u5e94\u8be5\u6bcf\u4e00\u79cd\u70ed\u4ea4\u6362\u5668\u90fd\u5236\u9020\u4e00\u4e2a,\u5e76\u4e14\u8bd5\u4e00\u8bd5\u54ea\u4e00\u79cd\u66f4\u9002\u5408\u4f60\u7684\u53cd\u5e94\u5806.</br></br>\u4f60\u53ef\u4ee5\u901a\u8bfbwiki\u540e\u8bd5\u7740\u7406\u89e3\u53cd\u5e94\u5806\u7684\u5de5\u4f5c\u539f\u7406,\u6216\u8005\u76f4\u63a5\u6284\u4f5c\u4e1a...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAxA==",
                    "title": "\u00a7a\u00a7l\u70ed\u4ea4\u6362",
                    "tooltip": "<strong>\u70ed\u4ea4\u6362</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "name": "\u94c0\u57fa\u6d41\u4f53\u71c3\u6599",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2957.png",
                    "x": 372.0,
                    "y": 372.0,
                    "data": "\u6bcfmB\u51fa\u4ea712,960EU/t,\u6301\u7eed5\u79d2.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALjQ==",
                    "title": "\u94c0\u57fa\u6d41\u4f53\u71c3\u6599",
                    "tooltip": "<strong>\u94c0\u57fa\u6d41\u4f53\u71c3\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u948d\u57fa\u6d41\u4f53\u71c3\u6599"
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2813.png",
                    "x": 408.0,
                    "y": 300.0,
                    "data": "\u8fd9\u662fZPM\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK_Q==",
                    "title": "\u00a79\u00a7l\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)",
                    "tooltip": "<strong>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1</br>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)</br>\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?"
                },
                {
                    "name": "MV(\u4e2d\u538b)\u7ea7\u84b8\u6c7d\u8f6e\u673a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/89.png",
                    "x": 120.0,
                    "y": 120.0,
                    "data": "\u6765\u5230MV\u9636\u6bb5\u540e,\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u84b8\u6c7d.\u4f46\u662f\u957f\u4e45\u505c\u7559\u5e76\u4e0d\u662f\u4ec0\u4e48\u597d\u4e3b\u610f,\u5176\u4ed6\u7c7b\u578b\u7684\u71c3\u6599\u5c06\u4f1a\u8d8a\u6765\u8d8a\u6709\u7528.\u539f\u56e0\u662f\u84b8\u6c7d\u6da1\u8f6e\u7684\u6548\u7387\u4f1a\u968f\u7740\u7b49\u7ea7\u63d0\u5347\u8fc5\u901f\u4e0b\u964d(\u8fd9\u4e2a\u53ea\u670975%),\u800c\u4e14\u6bd4\u8d77\u82ef\u6216\u8005\u67f4\u6cb9,\u84b8\u6c7d\u8fd8\u9700\u8981\u5de8\u5927\u7684\u7ba1\u9053\u8fdb\u884c\u8f93\u9001.</br></br>\u8bdd\u8bf4\u56de\u6765,\u5982\u679c\u4f60\u60f3\u7ee7\u7eed\u4f7f\u7528\u84b8\u6c7d\u7684\u8bdd,\u90a3\u4e48\u5efa\u9020\u4e00\u53f0\u5927\u578b\u9752\u94dc\u9505\u7089\u6216\u662f\u4e4b\u540e\u7684\u5927\u578b\u94a2\u9505\u7089\u5c31\u662f\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f\u4e86.\u4f60\u5c06\u4f1a\u9700\u8981\u5927\u91cf\u7684\u56fa\u4f53\u71c3\u6599,\u53ef\u80fd\u662f\u6728\u70ad,\u56e0\u6b64\u8bf7\u52a1\u5fc5\u5c06\u5176\u81ea\u52a8\u5316!\u8fd8\u6709,\u7edd\u4e0d\u8981\u5fd8\u4e86\u4f9b\u6c34!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAWQ==",
                    "title": "\u00a76\u00a7lMV(\u4e2d\u538b)\u7ea7\u84b8\u6c7d\u8f6e\u673a",
                    "tooltip": "<strong>MV(\u4e2d\u538b)\u7ea7\u84b8\u6c7d\u8f6e\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "Harnessing Chaos",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6186301913252184525.png",
                    "x": 264.0,
                    "y": 444.0,
                    "data": "You\u2019ve mastered antimatter production, but raw antimatter alone won't run your machines. To turn that potential into unparalleled power, it\u2019s time to [warn]harness the chaos[/warn] itself!\n\n[quest]Introducing the Shielded Lagrangian Annihilation Matrix![/quest]\n\nThe SLAM creates raw energy by reacting the Semi-Stable Antimatter with normal matter in a controlled environment.\n\nEvery cycle, the generator will react all antimatter and matter in hatches instantly, converting it all into energy directly. The EU output is based on the equal amounts of antimatter and matter annihilated. Therefore, imbalance between the amounts will waste your precious energy.\n\nDepending on the matter used to annihilate, the antimatter amount gets an exponent applied to it, directly increasing the amount of energy produced from 1L of antimatter - this means the more you annihilate in one go, the more efficient it is!\n\nThe maximum EU for a cycle is limited by the capacity of all laser source hatches on the structure (limited to 64), even on wireless mode.\n\n[note]It can't output more than 9.22e18 EU in a cycle, or just below 43 16M UXV Laser Sources (If you're crazy enough for it)\n[/note]\n\nThe Formula and the exponents for each of the possible matters are:\n\nGenerated EU = (\u00a73Antimatter\u00a7r^\u00a76exponent\u00a7r) * 1.000.000.000\n\nMolten Copper - \u00a761.00\u00a7r\nMolten UIV SC Base - \u00a761.02\u00a7r\nMolten UMV SC Base - \u00a761.03\u00a7r\nMolten Black Dwarf Matter - \u00a761.04\u00a7r",
                    "quest_id": "_O6stWM3RR-qJdcvs0i-Mw==",
                    "title": "Harnessing Chaos",
                    "tooltip": "<strong>Harnessing Chaos</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\"Semi-Stable\" doing a lot of work in here"
                },
                {
                    "name": "2M\u6da1\u8f6e",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3187.png",
                    "x": 156.0,
                    "y": 408.0,
                    "data": "\u5e0c\u671b\u4e0d\u8981\u8d85\u8fc7\u4e00\u624b\u4e4b\u6570.\u8fd9\u91cc\u7684\u76ee\u6807\u662f\u8ba9\u6bcf\u53f0\u6da1\u8f6e\u90fd\u80fd\u8f93\u51fa\u63a5\u8fd12M-EU/t.</br></br>\u600e\u4e48\u505a\u5230\u5462?\u770b\u770bUV\u52a8\u529b\u4ed3\u7684\u5408\u6210\u8868\u5427,\u7136\u540e\u4f60\u5c31\u6709\u4e86\u65b0\u7684\u76ee\u6807.\u7b49\u4f60\u5236\u9020\u51faUV\u52a8\u529b\u4ed3\u540e,\u6bcf\u53f0\u914d\u5907\u5b83\u7684\u6da1\u8f6e\u90fd\u53ef\u4ee5\u5c06\u8f93\u51fa\u529f\u7387\u4e0a\u9650\u63d0\u5347\u4e3a2,097,152-EU/t,\u8fd9\u518d\u6b21\u62d3\u5c55\u4e86\u4f60\u9009\u62e9\u6da1\u8f6e\u7684\u8303\u56f4.\u4ee5\u4e0b\u6709\u4e00\u4e9b\u4e0d\u9519\u7684\u9009\u62e9\uff1a</br></br>\u5927\u578b\u5b87\u5b99\u4e2d\u5b50\u6001\u7d20\u6da1\u8f6e,\u6548\u7387220\uff05,\u8f93\u51fa\u529f\u73871,330,560-EU/t</br>\u5927\u578b\u7075\u5b9d\u6da1\u8f6e,\u6548\u7387220\uff05,\u8f93\u51fa\u529f\u73871,330,560-EU/t(\u8010\u4e45\u6781\u9ad8)</br>\u5927\u578b\u89c9\u9192\u9f99\u952d\u6da1\u8f6e,\u6548\u7387190\uff05,\u8f93\u51fa\u529f\u7387478,800-EU/t</br>\u5927\u578b\u4e09\u5143\u91d1\u5c5e\u6da1\u8f6e,\u6548\u7387180\uff05,\u8f93\u51fa\u529f\u73871,451,520-EU/t</br></br>\u73b0\u5728,\u4f60\u53ef\u80fd\u5728\u8003\u8651\u4fee\u5efa\u66f4\u591a\u76841\u7ea7\u6838\u805a\u53d8\u53cd\u5e94\u5806,\u7528\u4ee5\u5904\u7406\u5176\u4ed6\u6750\u6599.\u5176\u5b9e\u5373\u4fbf\u4f60\u505c\u4e0b\u751f\u4ea7\u7b49\u79bb\u5b50\u4f53\u7684\u53cd\u5e94\u5806,\u91cd\u542f\u6d88\u8017\u7684EU\u4e5f\u4e0d\u52301\u6876\u7b49\u79bb\u5b50\u4f53,\u6240\u4ee5\u5e94\u8be5\u6ca1\u4ec0\u4e48\u5927\u4e0d\u4e86\u7684.</br></br>\u5236\u9020\u4e00\u4e2aUV\u52a8\u529b\u4ed3(\u666e\u901a\u6216\u7f13\u51b2\u7684)\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMcw==",
                    "title": "2M\u6da1\u8f6e",
                    "tooltip": "<strong>2M\u6da1\u8f6e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u7ea7\u805a\u53d8 \u9521\u7b49\u79bb\u5b50\u4f53"
                },
                {
                    "name": "Balance is Everything",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6774427117513567879.png",
                    "x": 264.0,
                    "y": 372.0,
                    "data": "You already transcended dimensions, but as your power demands spike to absurd levels, maybe it's time to transcend matter!\n\nUsing the unbreakable stability of Proto-Halkonite, harnessing the power of [warn]Chaos[/warn] becomes a reality. The  Semi-Stable Antimatter Stabilization Sequencer introduces the concept of Semi-Stable Antimatter, created from Protomatter.\n\nBut it\u2019s a cruel mistress... fail to manage it, and antimatter could void itself into nothingness.\n\nThe Semi-Stable Antimatter is produced in 1 second cycles, the amount generated is based on the total of antimatter currently stocked in it's 16 Antimatter Hatches and consumes equal amounts of Proto Matter.\n\nThe average change in Antimatter is equal to (\u00a73Antimatter Total\u00a7r)^\u00a76\u00a7n0.5\u00a7r * N(\u00a7c\u00a7n0.2\u00a7r, 0.25), where N is a Gaussian Distribution, meaning the total antimatter change may be negative.\n\nThe Produced Antimatter is distributed between the 16 hatches, sampled from N(\u00a7c\u00a7n0.2\u00a7r, 1). This causes an imbalance between the hatches. To properly automate the antimatter production, it's vital to always re-balance the amount of antimatter in the hatches. At the end of each cycle, the lowest amount of antimatter present in hatches is recorded, and any hatch that contains more than the lowest amount loses half the difference!\n\nProper use of stabilization fluids can significantly reduce energy usage and boost production:\n\nIt consumes 10,000,000 + (\u00a73Antimatter\u00a7r * 1000)^\u00a72\u00a7n1.5\u00a7r EU/t passively\nMagnetic Stabilization Fluids can mitigate the passive instability and have it's \u00a72exponent\u00a7e\u00a7r reduced:\nMolten Purified Tengam Exponent = \u00a72\u00a7n1.35\u00a7r\nTachyon-Rich Fluid Exponent = \u00a72\u00a7n1.2\u00a7r\n\nFor each cycle, the SSASS uses (\u00a73Antimatter\u00a7r * 10000)^\u00a75\u00a7n1.5\u00a7r EU\nBy regulating the gravity containment of the forge, this \u00a75exponent\u00a7r can also be reduced:\nMolten Spacetime Exponent = \u00a75\u00a7n1.45\u00a7r\nSpatially Enlarged Fluid Exponent = \u00a75\u00a7n1.40\u00a7r\nMolten Eternity Exponent = \u00a75\u00a7n1.35\u00a7r\n\nBy containing the antimatter more compactly, it is possible to generate larger gains per cycle. Containment Stabilization fluids alter the \u00a76exponent\u00a7r in the production formula:\nMolten Shirabon Exponent = \u00a76\u00a7n0,55\u00a7r\nMolthen MHDSCM Exponent = \u00a76\u00a7n0,60\u00a7r\n\nBy inserting fluids with high energy potential, it's possible to alter antimatter's flow in chaos, making their randomness more favorable. Activation Stabilization Fluids alter the \u00a7cskew\u00a7r of the gaussian distribution, lowering the risks of negative changes in antimatter and favoring better gains.\nDepleted Naquadah Fuel Mk V skew = \u00a7c\u00a7n0.25\u00a7r\nDepleted Naquadah Fuel Mk VI skew = \u00a7c\u00a7n0.30\u00a7r",
                    "quest_id": "K0_-BjVuR3qh_GZt19SReQ==",
                    "title": "Balance is Everything",
                    "tooltip": "<strong>Balance is Everything</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Pseudostable Black Hole Containment Field"
                },
                {
                    "name": "\u613f\u518d\u65e0\u7206\u70b8",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1902.png",
                    "x": 480.0,
                    "y": 192.0,
                    "data": "\u6709\u4e86\u6838(\u5f39)\u53cd\u5e94\u5806\u4e4b\u540e,\u4f60\u5bf9\u57fa\u5730\u7684\u7834\u574f\u80fd\u529b\u7a81\u7834\u4e86\u5929\u9645...\u4f60\u53ef\u4ee5\u628a\u53cd\u5e94\u5806\u653e\u5f97\u8fdc\u8fdc\u7684(20\u533a\u5757\u8fdc),\u6216\u662f\u7528\u9632\u7206\u6750\u6599\u5c06\u53cd\u5e94\u5806\u56f4\u4e2a\u4e25\u4e25\u5b9e\u5b9e.</br></br>EIO\u7684\u77f3\u82f1\u73bb\u7483\u4e0d\u518d\u597d\u7528,\u5fd8\u4e86\u5b83\u4eec\u5427.\u8bf7\u4f7f\u7528GTNH\u8ba4\u8bc1\u7684\u9540\u5c42\u9632\u7206\u77f3\u7cfb\u5217!  \u00a74\u5176\u4ed6\u7684\u53ef\u9009\u9632\u7206\u6750\u6599\u8fd8\u5305\u62ec\u795e\u79d8\u7684\u5b88\u536b\u8005\u73bb\u7483.\u6839\u636e\u4f60\u7684\u53cd\u5e94\u5806\u5a01\u529b,\u53ef\u80fd\u9700\u8981\u591a\u5c42\u9632\u7206\u77f3,\u8bf7\u5728\u521b\u9020\u6a21\u5f0f\u6d4b\u8bd5. \u8bb0\u5f97\u8f6c\u89d2\u90e8\u4f4d\u4e5f\u9700\u8981\u95ed\u5408\u8d77\u6765-\u5426\u5219\u7206\u70b8\u4f1a\u4ece\u8f6c\u89d2\u7684\u7f1d\u9699\u5904\u6f0f\u51fa\u6765. \u81f3\u4e8e\u600e\u4e48\u628a\u7535\u5bfc\u51fa\u6765...\u53ea\u8981\u7ed9\u7ebf\u7f06\u6765\u51e0\u4e2a90\u00b0\u62d0\u5f2f\u5c31\u597d\u4e86,\u56e0\u4e3a\u7206\u70b8\u662f\u8d70\u76f4\u7ebf\u7684.</br></br>[note]\u6709\u516d\u79cd\u9540\u5c42\u9632\u7206\u77f3,\u5177\u4f53\u8bf7\u67e5\u770bNEI[/note].</br></br>[note]\u597d\u5427,\u597d\u5427,\u4f60\u4e0d\u5fc5\u5fd8\u8bb0\u77f3\u82f1\u73bb\u7483,\u6211\u4f1a\u7ed9\u4f60\u4e00\u4e9b\u7684.\u4e5f\u8bb8\u4f60\u53ef\u4ee5\u7528\u5b83\u6321\u96e8.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHbg==",
                    "title": "\u00a7a\u00a7l\u613f\u518d\u65e0\u7206\u70b8",
                    "tooltip": "<strong>\u613f\u518d\u65e0\u7206\u70b8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(LuV)1x1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2775.png",
                    "x": 48.0,
                    "y": 264.0,
                    "data": "\u8fd9\u662f\u4e0d\u9700\u8981\u6e05\u6d01\u7684\u65b9\u5757\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK1w==",
                    "title": "\u00a7l\u592a\u9633\u4e4b\u529b(LuV)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(LuV)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(LuV)"
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2810.png",
                    "x": 444.0,
                    "y": 228.0,
                    "data": "\u8fd9\u662fIV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK-g==",
                    "title": "\u00a79\u00a7l\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "tooltip": "<strong>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94f1</br>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)"
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2965.png",
                    "x": 480.0,
                    "y": 408.0,
                    "data": "\u6bcfmB\u51fa\u4ea7399,576,000EU/t,\u6301\u7eed8\u79d2. \u65e0\u5c3d\u7c89\u548c\u91cd\u62c9\u591aX\u7684\u6765\u6e90\u53ef\u80fd\u9700\u8981\u4e4b\u540e\u624d\u80fd\u89e3\u51b3. </br></br>\u9ad8\u7ea7\u914d\u65b9\u9700\u8981\u540c\u6837\u591a\u7684\u65e0\u5c3d\u6765\u5236\u9020\u65f6\u7a7a, \u4e0d\u8fc7\u53ea\u9700\u8981\u727a\u7272\u4e00\u70b9\u8d85\u65f6\u7a7a\u91d1\u5c5e\u4ea7\u80fd\u5c31\u80fd\u83b7\u5f9750%%\u7684\u589e\u4ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALlQ==",
                    "title": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV",
                    "tooltip": "<strong>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(LuV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2774.png",
                    "x": 12.0,
                    "y": 264.0,
                    "data": "LuV\u592a\u9633\u80fd\u8986\u76d6\u677f\u53d1\u7535\u91cf\u4e3a32768EU/t.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK1g==",
                    "title": "\u00a7l\u592a\u9633\u4e4b\u529b(LuV)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(LuV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(IV)</br>\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(UV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2783.png",
                    "x": 264.0,
                    "y": 336.0,
                    "data": "\u8fd9\u662fUV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK3w==",
                    "title": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(UV)",
                    "tooltip": "<strong>\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(UV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f00\u59cb\u805a\u53d8</br>\u529b\u573a\u53d1\u751f\u5668(UV)"
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(IV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/216.png",
                    "x": 300.0,
                    "y": 228.0,
                    "data": "\u8fd9\u662fIV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAA2A==",
                    "title": "\u00a7b\u00a7l\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(IV)",
                    "tooltip": "<strong>\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(IV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HSS-S</br>\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(HV)1x1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1007.png",
                    "x": 48.0,
                    "y": 156.0,
                    "data": "\u628a\u90a3\u4e9b512EU\u7684\u592a\u9633\u80fd\u677f\u5236\u9020\u6210\u65b9\u5757,\u8fd9\u6837\u5b83\u4eec\u80fd\u591f\u88ab\u653e\u7f6e\u5230\u4e16\u754c\u4e2d. \u4f7f\u7528HV\u7ea7\u522b\u7684\u7ec4\u88c5\u673a\u5c06HV\u7ea7\u592a\u9633\u80fd\u677f\u3001HV\u673a\u5668\u5916\u58f3\u3001\u4e00\u4e2a\u7535\u6c60\u548c\u4e00\u4e2a\u673a\u68b0\u81c2\u7ec4\u88c5\u5230\u4e00\u8d77.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD7w==",
                    "title": "\u00a7b\u00a7l\u592a\u9633\u4e4b\u529b(HV)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(HV)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(HV)"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ZPM)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2776.png",
                    "x": 12.0,
                    "y": 300.0,
                    "data": "ZPM\u592a\u9633\u80fd\u8986\u76d6\u677f\u53d1\u7535\u91cf\u4e3a131072EU/t.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK2A==",
                    "title": "\u00a7l\u592a\u9633\u4e4b\u529b(ZPM)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(ZPM)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6e7f\u4ef6\u4e3b\u673a</br>\u592a\u9633\u4e4b\u529b(LuV)"
                },
                {
                    "name": "\u98ce\u529b\u8ba1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1141.png",
                    "x": 444.0,
                    "y": 120.0,
                    "data": "\u98ce\u529b\u8ba1\u53ef\u4ee5\u6d4b\u8bd5\u5f53\u524d\u4f4d\u7f6e\u7684\u98ce\u529b\u5f3a\u5ea6. \u4f7f\u7528\u8fd9\u4e2a\u5de5\u5177\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u8ba9\u4f60\u9009\u62e9\u653e\u7f6e\u98ce\u673a\u7684\u9ad8\u5ea6.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEdQ==",
                    "title": "\u00a79\u00a7l\u98ce\u529b\u8ba1",
                    "tooltip": "<strong>\u98ce\u529b\u8ba1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)"
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(EV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2794.png",
                    "x": 300.0,
                    "y": 192.0,
                    "data": "\u5f53\u4f60\u4e0d\u624b\u6301\u71c3\u6599\u65f6,\u5b83\u7684\u786e\u662f\u6e05\u6d01\u80fd\u6e90.\u8fd9\u79cd\u4fbf\u643a\u5f0f\u80fd\u6e90\u5bf9\u91c7\u77ff\u573a\u8fd9\u7c7b\u57fa\u5730\u5916\u673a\u5668\u76f8\u5f53\u6709\u7528,\u800c\u5b83\u7684\u71c3\u6599\u6548\u7387\u968f\u7535\u538b\u7b49\u7ea7\u7684\u63d0\u5347\u800c\u63d0\u5347. \u4e0d\u8fc7\u6bcf\u4e00\u7ea7\u7535\u538b\u7684\u63d0\u5347\u5c31\u4f1a\u8981\u6c42\u66f4\u9ad8\u6d53\u5ea6\u7684\u7845\u5ca9(ZPM\u65f6\u8981\u6c42\u8d85\u80fd\u7845\u5ca9).</br></br>[note]\u71c3\u6599\u5177\u6709\u653e\u5c04\u6027,\u8be5\u6b7b.</br></br>\u5728\u9886\u53d6\u5956\u52b1\u4e4b\u524d,\u7a7f\u4e0a\u4f60\u7684\u9632\u62a4\u670d\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK6g==",
                    "title": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(EV)",
                    "tooltip": "<strong>\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(EV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HSS-G</br>\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "name": "\u6709\u4e86\u9b54\u6cd5,\u8c01\u8fd8\u8981UV\u592a\u9633\u80fd\u554a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2596.png",
                    "x": 12.0,
                    "y": 372.0,
                    "data": "\u5f53\u4f7f\u7528\u6c34\u6ce8\u9b54\u65f6,\u8fd9\u79cd\u5355\u65b9\u5757\u6700\u5927\u53ef\u4ee5\u4ea7\u751f600M-EU/t,\u8fd9\u5f88\u5e73\u8861\u5bf9\u5427...\u5bf9...\u5427?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKJA==",
                    "title": "\u6709\u4e86\u9b54\u6cd5,\u8c01\u8fd8\u8981UV\u592a\u9633\u80fd\u554a",
                    "tooltip": "<strong>\u6709\u4e86\u9b54\u6cd5,\u8c01\u8fd8\u8981UV\u592a\u9633\u80fd\u554a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)</br>\u597d\u523a\u773c! #4"
                },
                {
                    "name": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2819.png",
                    "x": 660.0,
                    "y": 84.0,
                    "data": "\u7136\u540e\u6536\u83b7\u7535\u529b\u4f5c\u4e3a\u56de\u9988.\u8981\u662f\u4f60\u7684\u4e0b\u754c\u4e4b\u661f\u591a\u5230\u7528\u4e0d\u5b8c,\u4e22\u5230\u8fd9\u91cc\u5934\u5c31\u662f\u5b83\u6700\u597d\u7684\u5f52\u5bbf\u4e86.\u8fd9\u73a9\u610f\u53ef\u4ee5\u5403\u6389\u51e0\u4e4e\u4efb\u4f55\u9b54\u6cd5\u6750\u6599(\u5927\u90e8\u5206\u975e\u5408\u6210\u7269\u54c1).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALAw==",
                    "title": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)",
                    "tooltip": "<strong>\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6</br>\u4fe1\u6807"
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(UV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2797.png",
                    "x": 300.0,
                    "y": 336.0,
                    "data": "\u8fd9\u662fUV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK7Q==",
                    "title": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(UV)",
                    "tooltip": "<strong>\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(UV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u529b\u573a\u53d1\u751f\u5668(UV)"
                },
                {
                    "name": "\u94cc\u5316",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5612826465399047400.png",
                    "x": 276.0,
                    "y": 480.0,
                    "data": "\u8fd8\u8bb0\u5f97\u94cc\u949b\u5408\u91d1\u5417?\u8fd9\u56de\u5c31\u53ea\u6709\u94cc\u5566!\u5f00\u73a9\u7b11\u7684,\u949b\u4f1a\u4ee5\u4e00\u79cd\u7279\u6b8a\u7684\u5f62\u5f0f\u53c2\u4e0e\u8fdb\u6765...</br></br>\u94cc\u7b49\u79bb\u5b50\u4f53\u548c\u950c\u7b49\u79bb\u5b50\u4f53\u7684\u914d\u65b9\u901f\u5ea6\u90fd\u5f88\u5feb,\u6240\u4ee5\u4f60\u9700\u8981\u7684\u53cd\u5e94\u5806\u4e5f\u4e0d\u8fc71\u53f0\u9664\u975e\u4f60\u7684\u89c4\u6a21\u975e\u5e38\u5927.\u65e5\u540e\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u8fdb\u884c\u5347\u7ea7,\u800c\u73b0\u5728\u9700\u8981MK2\u751a\u81f3\u662fMK3\u7684\u53cd\u5e94\u5806\u8fdb\u884c\u805a\u53d8.",
                    "quest_id": "X_rOgp6GRKiyGzwRV_p7GA==",
                    "title": "\u94cc\u5316",
                    "tooltip": "<strong>\u94cc\u5316</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f"
                },
                {
                    "name": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1894.png",
                    "x": 156.0,
                    "y": 192.0,
                    "data": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e\u76f8\u6bd4\u4e8e\u5355\u65b9\u5757\u71c3\u6c14\u8f6e\u673a,\u62e5\u6709\u66f4\u9ad8\u7684\u71c3\u6599\u6548\u7387,\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5347\u7ea7\u6d88\u58f0\u4ed3\u6765\u964d\u4f4e\u6c61\u67d3.</br></br>\u4f60\u8fd8\u9700\u8981\u6d88\u58f0\u4ed3\u3001\u7ef4\u62a4\u4ed3\u3001\u8f93\u5165\u4ed3\u548c\u52a8\u529b\u4ed3\u624d\u80fd\u6784\u5efa\u4e00\u53f0\u5b8c\u6574\u7684\u591a\u65b9\u5757\u673a\u5668.\u522b\u5fd8\u4e86\u6d41\u4f53\u6821\u51c6\u5668,\u7528\u4ee5\u63a7\u5236\u591a\u65b9\u5757\u7684\u8f93\u5165\u6d41\u901f!\u7531\u4e8e\u5927\u578b\u71c3\u6c14\u6da1\u8f6e\u6bcft\u9700\u8981\u7684\u6700\u4f73\u6d41\u91cf\u8fdc\u4f4e\u4e8e\u5927\u578b\u84b8\u6c7d\u6da1\u8f6e\u6240\u9700\u7684\u84b8\u6c7d\u6d41\u91cf,\u6240\u4ee5\u4e0d\u9700\u8981\u592a\u9ad8\u7ea7\u7684\u6d41\u4f53\u6821\u51c6\u5668(\u76ee\u524dLV\u5c31\u591f\u4e86).</br></br>\u6bcf\u79cd\u6da1\u8f6e\u6750\u6599\u90fd\u6709\u7279\u5b9a\u7684\u6da1\u8f6e\u6548\u7387(\u6548\u7387\u8d8a\u9ad8,\u76f8\u540c\u91cf\u7684\u71c3\u6599\u83b7\u5f97\u7684EU\u8d8a\u591a),\u800c\u4e14\u53ea\u6709\u71c3\u6599\u7684\u901a\u5165\u901f\u5ea6\u4e0e\u6700\u4f73\u6d41\u91cf\u5339\u914d\u65f6,\u591a\u65b9\u5757\u624d\u80fd\u8fbe\u5230\u6b64\u6da1\u8f6e\u6548\u7387.</br></br>\u518d\u6b21\u91cd\u590d,\u5f53\u4f60\u4e3a\u6da1\u8f6e\u63d0\u4f9b\u8d85\u8fc7\u6700\u4f73\u6d41\u901f\u7684\u71c3\u6599\u65f6(\u79f0\u4e4b\u4e3a\u8d85\u8f7d\u72b6\u6001),\u6da1\u8f6e\u7684\u8f93\u51fa\u7535\u538b\u63d0\u9ad8,\u4f46\u71c3\u6599\u6548\u7387\u964d\u4f4e,\u540c\u65f6\u6700\u9ad8\u8f93\u51fa\u7535\u538b\u53d6\u51b3\u4e8e\u6da1\u8f6e\u8f6c\u5b50\u7c7b\u578b\u53ca\u5176\u8d85\u8f7d\u6548\u7387\u7b49\u7ea7.\u5bf9\u4e8e\u71c3\u6c14\u6da1\u8f6e,\u8d85\u8f7d\u6548\u7387\u7b49\u7ea71\uff1a\u6700\u9ad8\u8d85\u8f7d150\uff05,\u8f93\u51fa\u529f\u7387112\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea72\uff1a\u6700\u9ad8\u8d85\u8f7d300\uff05,\u8f93\u51fa\u529f\u7387180\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea73\uff1a\u6700\u9ad8\u8d85\u8f7d450\uff05,\u8f93\u51fa\u529f\u7387252\uff05.\u8d8a\u63a5\u8fd1\u8d85\u8f7d\u6781\u9650,\u635f\u5931\u7684\u71c3\u6599\u6548\u7387\u8d8a\u591a.</br></br>\u8981\u5f97\u77e5\u6700\u4f73\u6da1\u8f6e\u6750\u6599\u7684\u4fe1\u606f,\u8bf7\u770bDiscord\u9891\u9053\u4e2d\u7684\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668\u4ee5\u53ca\u6570\u636e\u8868\u683c.</br></br>[warn]\u4ee5\u540e\u7248\u672c\u4e2d,\u5927\u578b\u71c3\u6c14\u6da1\u8f6e\u7684\u8f93\u51fa\u529f\u7387\u5c06\u88ab\u9650\u5236\u57288192EU/t.\u8981\u5f97\u5230\u66f4\u9ad8\u7684\u8f93\u51fa,\u9700\u8981\u4f7f\u7528\u8fdb\u9636\u71c3\u6c14\u6da1\u8f6e,\u5b83\u53ea\u80fd\u63a5\u53d7100kEU\u4ee5\u4e0a\u70ed\u503c\u7684\u71c3\u6599.</br></br>\u8bd1\u8005\u6ce8:\u4e5f\u53ef\u4ee5\u770b\u770b\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60MK-II(\u8f93\u51fa1A-LuV\u4ee5\u4e0a)\u6216\u8005\u7279\u5927\u71c3\u6c14\u6da1\u8f6e(\u8f93\u51fa\u65e0\u9650\u5236).[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHZg==",
                    "title": "\u00a76\u00a7l\u5927\u578b\u71c3\u6c14\u6da1\u8f6e",
                    "tooltip": "<strong>\u5927\u578b\u71c3\u6c14\u6da1\u8f6e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c4\u9636\u6bb5(EV)"
                },
                {
                    "name": "\u66f4\u597d\u7684\u67f4\u6cb9",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2787.png",
                    "x": 192.0,
                    "y": 156.0,
                    "data": "\u5728HV\u9636\u6bb5,\u4f60\u4e0d\u4f46\u89e3\u9501\u4e86\u53e6\u4e00\u79cd\u53d1\u7535\u673a,\u8fd8\u89e3\u9501\u4e86\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9.\u5728\u4e00\u7cfb\u5217\u53cd\u5e94\u4e4b\u540e,\u4f60\u53ef\u4ee5\u83b7\u5f97\u8fd9\u79cd\u8d85\u9ad8\u80fd\u5185\u71c3\u6d41\u4f53\u71c3\u6599,\u4ef7\u503c\u00a7a\u6bcf\u68761M-EU\u00a7a\u00a7r,\u5e76\u53ef\u4ee5\u5728\u8fd9\u4e9b\u6539\u8fdb\u578b\u53d1\u7535\u673a\u4e2d\u8fd0\u884c\u76f8\u5f53\u4e00\u6bb5\u65f6\u95f4.\u5728\u672c\u9636\u6bb5\u4f60\u540c\u6837\u89e3\u9501\u4e86\u84b8\u998f\u5854,\u6240\u4ee5\u6216\u8bb8\u4f60\u53ef\u4ee5\u83b7\u53d6\u66f4\u591a\u66f4\u591a\u7684\u71c3\u6599\u7528\u4e8e\u8fd9\u4e9b\u53d1\u7535\u673a.</br></br>\u5f88\u9057\u61be,\u5728EV\u9636\u6bb5\u89e3\u9501\u7684\u4e0b\u4e00\u4e2a\u71c3\u6599,\u5e76\u4e0d\u662f\u67f4\u6cb9\u4e00\u7cfb.\u5b83\u9700\u8981\u5b8c\u5168\u4e0d\u540c\u7684\u5904\u7406\u7ebf,\u4f60\u5e94\u8be5\u4f1a\u5728\u4e4b\u540e\u89e3\u51b3\u5b83\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK4w==",
                    "title": "\u66f4\u597d\u7684\u67f4\u6cb9",
                    "tooltip": "<strong>\u66f4\u597d\u7684\u67f4\u6cb9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4981735154459347867.png",
                    "x": 120.0,
                    "y": 300.0,
                    "data": "\u8fd9\u662f\u7b2c\u4e00\u4e2a\u7279\u5927\u6da1\u8f6e\u673a.\u56e0\u4e3a\u8fd9\u662f\u7b2c\u4e00\u4e2a,\u6240\u4ee5\u6b64\u4efb\u52a1\u5c06\u89e3\u91ca\u4e00\u4e9b\u7279\u5927\u6da1\u8f6e\u673a\u5171\u6709\u7684\u673a\u5236\u3002</br></br>\u6bcf\u4e2a\u7279\u5927\u6da1\u8f6e\u673a\u53ef\u4ee5\u5bb9\u7eb312\u4e2a\u6da1\u8f6e\u8f6c\u5b50,\u5206\u522b\u4f4d\u4e8e12\u4e2a\u8f6c\u5b50\u4ed3\u4e2d,\u4f46\u5b83\u4eec\u7684\u603b\u901f\u5ea6\u6bd4\u5e38\u89c4\u540c\u7b49\u591a\u65b9\u5757\u9ad8\u51fa16\u500d.\u8bf7\u786e\u4fdd\u6bcf\u4e2a\u8f6c\u5b50\u6750\u6599\u76f8\u540c,\u5e76\u4e14\u786e\u4fdd\u8db3\u591f\u7684\u8f93\u5165\u6d41\u901f\u5339\u914d\u591a\u65b9\u5757\u8bbe\u5907\u9700\u6c42\uff01\u5982\u679c\u8fd8\u9700\u8981\u66f4\u5feb\u7684\u901f\u5ea6,\u53ef\u4ee5\u4f7f\u7528\u87ba\u4e1d\u5200\u5728\u63a7\u5236\u5668\u4e0a\u542f\u7528\u9ad8\u901f\u6a21\u5f0f,\u5c06\u5176\u901f\u5ea6\u7ee7\u7eed\u63d0\u9ad8\u523048\u500d.\u4f46\u662f\u8fd9\u5c06\u5f88\u5feb\u5730\u6d88\u8017\u8f6c\u5b50\u8010\u4e45,\u9274\u4e8e\u7535\u529b\u8f93\u51fa\u8d8a\u9ad8,\u8010\u4e45\u4e0b\u964d\u8d8a\u66f4\u5feb.</br></br>\u8fd9\u4e9b\u7279\u5927\u6da1\u8f6e\u673a\u8fd8\u652f\u6301TecTech\u4ed3\u5ba4,\u6240\u4ee5\u4f60\u53ef\u4ee5\u7528\u6bd4\u5e38\u89c4\u8f93\u51fa\u66f4\u9ad8\u7684\u7f13\u51b2\u52a8\u529b\u4ed3,\u751a\u81f3\u4e4b\u540e\u4f7f\u7528\u6fc0\u5149\u4ed3\u6765\u5904\u7406\u6700\u5f3a\u6da1\u8f6e\u673a\u4ea7\u751f\u7684\u6570\u4ebfEU/t.</br></br>\u8fd9\u4e94\u53f0\u6da1\u8f6e\u673a\u4e0e\u5b83\u4eec\u7684\u4e0b\u4f4d\u66ff\u6362\u71c3\u6599\u6d88\u8017\u76f8\u540c,\u4f46\u4e5f\u6709\u4e00\u4e9b\u4f8b\u5916\u60c5\u51b5\u5c06\u5728\u76f8\u5e94\u7684\u4efb\u52a1\u4e2d\u63d0\u5230.\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e\u673a\u53ea\u6d88\u8017\u84b8\u6c7d,\u5982\u5176\u540d\u5b57\u6240\u8ff0.",
                    "quest_id": "4HoSq97QT3G63VJFeV_0ZQ==",
                    "title": "\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e",
                    "tooltip": "<strong>\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c4\u9636\u6bb5(EV)</br>\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19"
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(EV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2803.png",
                    "x": 372.0,
                    "y": 192.0,
                    "data": "\u8fd9\u662fEV\u7248\u672c,\u5176\u5de5\u4f5c\u539f\u7406\u76f8\u540c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK8w==",
                    "title": "\u00a79\u00a7l\u52a8\u80fd\u53d1\u7535\u673a(EV)",
                    "tooltip": "<strong>\u52a8\u80fd\u53d1\u7535\u673a(EV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52a8\u80fd\u53d1\u7535\u673a(HV)</br>\u94a8\u94a2"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(EV)1x1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1719.png",
                    "x": 48.0,
                    "y": 192.0,
                    "data": "\u5c06\u8fd9\u4e9b2048-EU/t\u592a\u9633\u80fd\u8986\u76d6\u677f\u8d34\u5230\u65b9\u5757\u4e0a,\u4f7f\u5176\u53ef\u4ee5\u653e\u7f6e\u5728\u4e16\u754c\u4e0a. \u6216\u4f7f\u7528IV\u7ec4\u88c5\u673a\u5c06\u592a\u9633\u80fd\u8986\u76d6\u677f\u4e0eEV\u673a\u5668\u5916\u58f3,\u7535\u6c60\u548c\u673a\u68b0\u81c2\u7ed3\u5408\u5728\u4e00\u8d77.\u90a3\u4e48\u6b64\u592a\u9633\u80fd\u8986\u76d6\u677f\u5c06\u4e0d\u518d\u9700\u8981\u624b\u52a8\u6e05\u6d01.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGtw==",
                    "title": "\u00a7b\u00a7l\u592a\u9633\u4e4b\u529b(EV)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(EV)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(EV)"
                },
                {
                    "name": "\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7251205103661839761.png",
                    "x": 120.0,
                    "y": 408.0,
                    "data": "\u7b49\u79bb\u5b50\u4f53\u6d41\u80fd\u8ba9\u6da1\u8f6e\u65cb\u8f6c\u5417?\u4e0d,\u53ea\u662f\u6c34\u53d8\u6210\u84b8\u6c7d,\u7136\u540e\u518d\u51dd\u6210\u6c34,\u53ea\u6709\u6c34\u5728\u5faa\u73af\u7f62\u4e86.\u67e5\u770b\u4e0a\u9762\u6709\u5173\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e\u5173\u4e8e\u7279\u5927\u6da1\u8f6e\u7684\u5171\u6709\u673a\u5236\u8bf4\u660e.</br></br>\u8bb0\u4f4f,\u8fd9\u53f0\u6da1\u8f6e\u673a\u4e0e\u5176\u4ed6\u5e38\u89c4\u7684\u591a\u65b9\u5757\u6da1\u8f6e\u673a\u6709\u975e\u5e38\u91cd\u8981\u7684\u533a\u522b.\u9274\u4e8e\u7b49\u79bb\u5b50\u80fd\u5f88\u5bb9\u6613\u5728\u538b\u7f29\u805a\u53d8\u5806\u7684\u52a0\u6301\u4e0b\u7206\u4ed3,\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e\u5fc5\u987b\u91c7\u53d6\u76f8\u5e94\u7684\u63aa\u65bd,\u4e0d\u7136\u4ec5\u591a\u4f59\u4e00\u4e2a\u7b49\u79bb\u5b50\u4f53\u5c31\u4f1a\u5c06\u8fdb\u7a0b\u4e2d\u7684EU\u6570\u503c\u63d0\u9ad8\u5230\u8352\u8c2c\u7684\u7a0b\u5ea6.\u7136\u800c,\u7279\u5927\u6da1\u8f6e\u673a\u7684\u4ea7\u80fd\u73b0\u5728\u6709\u4e00\u4e2a\u57fa\u4e8e\u6bd4\u8f83\u71c3\u6599\u5bc6\u5ea6\u4e0e\u5176\u6240\u4f7f\u7528\u7684\u8f6c\u5b50\u6750\u6599\u7684\u51cf\u503c.</br></br>\u67e5\u770b[url]https://i.imgur.com/vifsk0P.png[/url],\u5173\u4e8e\u5404\u79cd\u7b49\u79bb\u5b50\u4f53\u548c\u6750\u6599\u7684\u4e0d\u540c\u7ec4\u5408.Mk1\u7b49\u79bb\u5b50\u4f53\u663e\u793a\u4e3a\u7eff\u8272,Mk2\u4e3a\u9ec4\u8272,Mk3\u4e3a\u7ea2\u8272.\u4e0b\u65b9\u76843\u4e2a\u662f\u805a\u53d8\u7684\u7ec8\u4ea7\u7269.</br></br>\u8fd9\u4e2a\u516c\u5f0f\u6709\u70b9\u590d\u6742,\u4f46\u8fd9\u91cc\u5217\u51fa\u4e00\u4e9b\u91cd\u8981\u7684\u6570\u503c:</br>-> \u6c26\u7b49\u79bb\u5b50\u4f53\u5373\u4f7f\u4f7f\u7528\u65e0\u5c3d\u50ac\u5316\u5242\u4e5f\u4f1a\u53d7\u523086.1%%\u7684\u5de8\u5927\u60e9\u7f5a\u503c,\u4e0e\u6b64\u540c\u65f6\u9521\u7684\u60e9\u7f5a\u53ea\u670953.5%%,\u8fd9\u610f\u5473\u7740\u5982\u679c\u4f7f\u7528\u9521\u7b49\u79bb\u5b50\u4f53\u9884\u671f\u4ea7\u80fd\u51e0\u4e4e\u662f\u7ffb\u500d;</br>-> \u4e09\u5143\u91d1\u5c5e\u7684\u6570\u503c\u5206\u522b\u4e3a92.4%%\u548c74.5%%;</br>-> \u4f7f\u7528\u65e0\u5c3d\u7684\u60e9\u7f5a\u6570\u503c\u66f4\u9ad8,\u5206\u522b\u4e3a97.4%%\u548c91.1%%;</br>-> \u65f6\u7a7a\u7684\u6570\u503c\u4e3a98.3%%\u548c94.4%%.</br></br>\u8fd9\u610f\u5473\u7740\u5728UHV/UEV\u9636\u6bb5,\u6ca1\u6cd5\u518d\u4f9d\u8d56\u8fd9\u4e24\u79cd\u7b49\u79bb\u5b50\u4f53\u76f4\u63a5\u585e\u7ed9\u7279\u5927\u6da1\u8f6e\u673a.\u5728\u4e00\u6b65\u914d\u65b9\u7684\u7b49\u79bb\u5b50\u4f53\u4e2d,\u6700\u597d\u7684\u9009\u62e9\u662fmk3\u9545\u7b49\u79bb\u5b50\u4f53,\u5b83\u5728\u4f7f\u7528\u65e0\u5c3d\u50ac\u5316\u5242\u65f6\u53ea\u6709\u5fae\u4e0d\u8db3\u9053\u76840.8%%\u7684\u60e9\u7f5a.\u5982\u679c\u60f3\u8981\u66f4\u5feb\u7684\u53d1\u7535\u901f\u5ea6,\u8bf7\u67e5\u770b\u4ee5\u7194\u878d\u5929\u4f53\u94a8\u7ed3\u675f\u7684\u805a\u53d8,\u5b83\u5728\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e\u673a\u4e2d\u6ca1\u6709\u60e9\u7f5a\u503c\u4e3a0,\u5e76\u4e14\u4e0e\u4ee5\u524d\u7684\u6c26\u7b49\u79bb\u5b50\u4f53\u4ea7\u80fd\u76f8\u540c.\u8bf7\u67e5\u770b\u4e0b\u65b9\u6709\u5173\u805a\u53d8\u7684\u4efb\u52a1.",
                    "quest_id": "dQ1k0UZVR8ObXotgcryKbw==",
                    "title": "\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e",
                    "tooltip": "<strong>\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535</br>\u7b2c7\u9636\u6bb5(ZPM)"
                },
                {
                    "name": "\"Semi-Stable\" doing a lot of work in here",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5840241591017037228.png",
                    "x": 264.0,
                    "y": 408.0,
                    "data": "A cell of antimatter! Contained in a cell made of matter! Surely this is safe.\n\nAntimatter is exactly what you may imagine, the opposite of matter, for every atom in the universe, an \"anti atom\" exists, and when both meet...\n\nThey annihilate themselves, releasing a lot of energy!\n\nBut how could you capture this energy?",
                    "quest_id": "OEBBeZOSSRGu80s3RPeiVA==",
                    "title": "\"Semi-Stable\" doing a lot of work in here",
                    "tooltip": "<strong>\"Semi-Stable\" doing a lot of work in here</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Balance is Everything"
                },
                {
                    "name": "\u706b\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1339.png",
                    "x": 552.0,
                    "y": 48.0,
                    "data": "\u6240\u4ee5,\u4f60\u6446\u8131\u4e86\u591a\u4f59\u7684\u80fd\u91cf\u6e90\u8d28,\u4e5f\u8bb8\u4f60\u4e5f\u4e0d\u60f3\u8981\u706b\u4e4b\u6e90\u8d28\uff1f \u5236\u9020\u8fd9\u4e2a\u80fd\u591f\u71c3\u70e7\u706b\u4e4b\u8981\u7d20\u4ea7\u751f\u7535\u529b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFOw==",
                    "title": "\u706b\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "tooltip": "<strong>\u706b\u4e4b\u6e90\u8d28\u53d1\u7535\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "name": "\u4e0d\u5b8c\u5168\u71c3\u70e7",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2967.png",
                    "x": 228.0,
                    "y": 300.0,
                    "data": "LuV\u9636\u6bb5\u7684\u5316\u5b66\u71c3\u6599\u53d1\u7535\u673a?\u597d\u5427,\u5982\u679c\u4f60\u662f\u67f4\u6cb9\u795e\u6559\u6216\u5927\u82ef\u73af\u795e\u6559\u7684\u72c2\u70ed\u4fe1\u5f92,\u90a3\u4f60\u4e00\u5b9a\u4f1a\u559c\u6b22\u4e0a\u5b83\u7684.</br></br></br></br>\u8fd9\u53f0\u5f15\u64ce\u53ef\u4ee5\u63a5\u53d7\u6240\u6709\u7684\u67f4\u6cb9\u71c3\u6599\u3001\u6c14\u4f53\u71c3\u6599\u4ee5\u53ca\u706b\u7bad\u71c3\u6599(\u4e0d\u8fc7\u540e\u9762\u7528\u5927\u578b\u706b\u7bad\u5f15\u64ce\u6548\u7387\u66f4\u9ad8).\u5b83\u8fd8\u9700\u8981\u52a9\u71c3\u5242\u624d\u80fd\u4fdd\u6301\u6b63\u5e38\u8fd0\u884c.</br></br>\u8fd9\u53f0\u5f15\u64ce\u6bcf\u79d2\u4f1a\u6d88\u8017\u8f93\u5165\u4ed3\u4e2d\u6240\u6709\u7684\u71c3\u6599\u4e0e\u52a9\u71c3\u5242,\u5e76\u57fa\u4e8e\u603b\u71c3\u503c\u8f93\u51fa\u80fd\u91cf.</br></br>\u800c\u6548\u7387\u53d6\u51b3\u4e8e\u52a9\u71c3\u5242/\u71c3\u6599\u6bd4.\u8fd9\u4e2a\u6bd4\u503c\u8d8a\u5927(\u52a9\u71c3\u5242\u8d8a\u591a),\u6548\u7387\u8d8a\u9ad8,\u6700\u9ad8\u4e3a150\uff05,\u4f46\u60f3\u8981\u8fbe\u5230\u8fd9\u4e2a\u6781\u9650\u6548\u7387\u9700\u8981\u8f93\u5165\u8fd1\u4e4e\u65e0\u9650\u7684\u52a9\u71c3\u5242.\u5bf9\u4e8e\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9\u8fd9\u7c7b\u9ad8\u71c3\u503c\u71c3\u6599,\u9664\u975e\u4e0d\u8ba1\u6210\u672c\u5730\u6295\u5165\u52a9\u71c3\u5242,\u6b63\u5e38\u7684\u6548\u7387\u671f\u671b\u7ea6\u4e3a130\uff05.</br></br>\u4e3e\u4e2a\u4f8b\u5b50:\u4f60\u6bcf\u79d2\u8f93\u5165100mB\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9\u4ee5\u53ca1000mB\u52a9\u71c3\u5242.\u6548\u7387\u4e3a149\uff05,\u800c\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9\u7684\u603b\u71c3\u503c\u4e3a250,000-EU. \u6240\u4ee5\u8f93\u51fa\u80fd\u91cf\u4e3a250,000*1.49/20",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALlw==",
                    "title": "\u4e0d\u5b8c\u5168\u71c3\u70e7",
                    "tooltip": "<strong>\u4e0d\u5b8c\u5168\u71c3\u70e7</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c6\u9636\u6bb5(LuV)"
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkII",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2962.png",
                    "x": 372.0,
                    "y": 408.0,
                    "data": "\u6bcfmB\u51fa\u4ea72,300,000-EU/t,\u6301\u7eed3.5\u79d2.\u5982\u679c\u4f60\u4f9b\u5e94\u5f97\u8d77\u539f\u6599\uff0c\u8fd9\u662f\u4e2a\u589e\u52a0\u7845\u5ca9\u71c3\u6599\u53d1\u7535\u91cf\u7684\u597d\u529e\u6cd5. </br></br>\u5982\u679c\u4f60\u6253\u7b97\u5728ZPM\u5c1d\u8bd5\u8fd9\u4e2a, \u4f60\u5927\u6982\u4f1a\u9700\u8981\u5de8\u578b\u5316\u5b66\u53cd\u5e94\u91dc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALkg==",
                    "title": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkII",
                    "tooltip": "<strong>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkII</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI"
                },
                {
                    "name": "\u65e0\u5c3d\u6da1\u8f6e",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3192.png",
                    "x": 156.0,
                    "y": 444.0,
                    "data": "\u67d0\u4e9b\u6da1\u8f6e\u6750\u6599\u5bf9\u4f60\u8fd8\u4e0d\u592a\u9002\u7528,\u8981\u4e48\u662f\u56e0\u4e3a\u4f60\u8fd8\u6ca1\u6709\u8fd9\u79cd\u6750\u6599,\u8981\u4e48\u662f\u56e0\u4e3a\u6da1\u8f6e\u52a8\u529b\u4ed3\u4e0d\u591f\u5904\u7406\u7b49\u79bb\u5b50\u4f53\u7684\u8f93\u51fa\u529f\u7387.\u5728UHV\u9636\u6bb5\u60c5\u51b5\u4f1a\u6709\u6240\u4e0d\u540c,\u5c4a\u65f6\u4f60\u53ef\u4ee5\u518d\u6b21\u5c06\u6bcf\u53f0\u6da1\u8f6e\u7684\u6700\u5927\u8f93\u51fax4,\u5e76\u4e14\u8fd8\u80fd\u89e3\u9501\u65e0\u5c3d\u952d,\u4f5c\u4e3a\u6da1\u8f6e\u8f6c\u5b50\u7684\u4e00\u79cd\u53ef\u9009\u6750\u6599.</br></br>\u5927\u578b\u65e0\u5c3d\u6da1\u8f6e,\u6548\u7387270\uff05,\u8f93\u51fa\u529f\u73874,354,560-EU/t</br>\u5927\u578b\u65e0\u5c3d\u50ac\u5316\u5242\u6da1\u8f6e,\u6548\u7387200\uff05,\u8f93\u51fa\u529f\u7387806,400-EU/t</br></br>\u662f\u7684,\u57fa\u672c\u4e0a\u5c31\u662f\u8fd9\u6837.\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u524d\u6da1\u8f6e\u4efb\u52a1\u4e2d\u63d0\u5230\u7684\u4efb\u4f55\u6750\u6599,\u4e0d\u8fc7\u5f53\u4f60\u9020\u51fa8\u9636\u706b\u7bad\u5e76\u53ef\u4ee5\u5f00\u91c7\u65e0\u5c3d\u50ac\u5316\u5242\u540e,\u5c31\u591a\u4e86\u8fd9\u4e24\u4e2a\u9009\u62e9. \u663e\u7136,\u65e0\u5c3d\u7684\u6027\u80fd\u8981\u597d\u5f97\u591a,\u4f46\u8fd9\u79cd\u6750\u6599\u4e5f\u8d35\u5f97\u591a. \u5982\u679c\u4f60\u575a\u6301\u805a\u53d8\u53d1\u7535\u7684\u8bdd,\u4f60\u5c31\u9700\u8981\u4e0d\u5c11\u8fd9\u6837\u7684\u6da1\u8f6e,\u5e2e\u52a9\u4f60\u6b65\u5165\u6e38\u620f\u7ec8\u7ae0.\u8bf7\u8bb0\u4f4f,\u4f60\u53ef\u4ee5\u8f93\u5165\u8d85\u51fa\u6700\u4f73\u6d41\u91cf\u7684\u7b49\u79bb\u5b50\u4f53,\u4ee5\u635f\u5931\u71c3\u6599\u6548\u7387\u4e3a\u4ee3\u4ef7,\u4f7f\u5f97\u6bcf\u53f0\u6da1\u8f6e\u53ef\u4ee5\u8f93\u51fa\u66f4\u9ad8\u529f\u7387.</br></br>\u5236\u9020\u4e00\u4e2aUHV\u52a8\u529b\u4ed3(\u666e\u901a\u6216\u7f13\u51b2\u7684)\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMeA==",
                    "title": "\u65e0\u5c3d\u6da1\u8f6e",
                    "tooltip": "<strong>\u65e0\u5c3d\u6da1\u8f6e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8d85\u9891\u65f6\u4ee3"
                },
                {
                    "name": "2\u9636\u7ebf\u5708",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2960.png",
                    "x": 300.0,
                    "y": 444.0,
                    "data": "\u5b83\u5c06\u89e3\u9501 2 \u4e2a MkIV \u71c3\u6599\u914d\u65b9\u548c MkV \u71c3\u6599\u914d\u65b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALkA==",
                    "title": "2\u9636\u7ebf\u5708",
                    "tooltip": "<strong>2\u9636\u7ebf\u5708</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382"
                },
                {
                    "name": "\u787c\u7684\u805a\u53d8",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6752762253121630907.png",
                    "x": 180.0,
                    "y": 480.0,
                    "data": "\u787c\u7b49\u79bb\u5b50\u4f53\u9700\u8981\u6c26\u7b49\u79bb\u5b50\u4f53\u6765\u805a\u53d8.\u6ca1\u9519,\u6574\u6761\u80fd\u6e90\u4ea7\u7ebf\u662f\u5efa\u7acb\u5728\u6c26\u7b49\u79bb\u5b50\u4f53\u7684\u57fa\u7840\u4e4b\u4e0a\u7684!</br></br>\u805a\u53d8\u787c\u7b49\u79bb\u5b50\u4f53\u7684\u901f\u5ea6\u8981\u6bd4\u6c26\u7b49\u79bb\u5b50\u4f53\u6162\u5f88\u591a,\u6240\u4ee5\u5982\u679c\u7528\u4e8e\u805a\u53d8\u8fd9\u4fe9\u7b49\u79bb\u5b50\u4f53\u7684\u53cd\u5e94\u5806\u7684\u6570\u91cf\u548c\u7b49\u7ea7\u76f8\u540c,\u6c26\u7b49\u79bb\u5b50\u4f53\u5c31\u4f1a\u4e25\u91cd\u8fc7\u5269.\u4e0d\u8fc7\u6b63\u5982\u4f60\u6240\u77e5,\u6c26\u7b49\u79bb\u5b50\u4f53\u5bf9\u4e8e\u5927\u578b\u7b49\u79bb\u5b50\u6da1\u8f6e\u53d1\u7535\u5f88\u6709\u7528,\u56e0\u6b64\u53ef\u4ee5\u5c06\u8fd9\u8fc7\u5269\u7684\u6c26\u7b49\u79bb\u5b50\u4f53\u5229\u7528\u8d77\u6765\u4e3a\u5176\u4ed6\u7684\u805a\u53d8\u53cd\u5e94\u5806\u4f9b\u80fd.\u4e0d\u8fc7,\u968f\u7740\u89c4\u6a21\u7684\u6269\u5927,\u5355\u662f\u9760\u8fd9\u4e2a\u53ef\u5c31\u4e0d\u5927\u80fd\u4f9b\u4e0a\u7535\u4e86.</br></br>\u4f60\u9700\u89813.75\u53f0\u787c\u7b49\u79bb\u5b50\u4f53\u7684\u53cd\u5e94\u5806\u4f9b\u7ed9\u4e00\u53f0\u6c16\u7b49\u79bb\u5b50\u4f53\u7684\u53cd\u5e94\u5806.",
                    "quest_id": "Tfb8JzstRNuiSV6CKgTNRQ==",
                    "title": "\u787c\u7684\u805a\u53d8",
                    "tooltip": "<strong>\u787c\u7684\u805a\u53d8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b49\u79bb\u5b50\u4f53\u7cfb\u5217\u4efb\u52a1"
                },
                {
                    "name": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1200.png",
                    "x": 156.0,
                    "y": 300.0,
                    "data": "\u73b0\u5728,\u4f60\u5df2\u7ecf\u62e5\u6709\u4e86\u4e00\u4e2a\u805a\u53d8\u53cd\u5e94\u5806,\u662f\u65f6\u5019\u5229\u7528\u5b83\u8fdb\u884c\u53d1\u7535\u4e86.</br></br>\u6700\u5bb9\u6613\u83b7\u5f97\u7684\u4ea7\u80fd\u7b49\u79bb\u5b50\u4f53\u5c31\u662f\u6c26\u7b49\u79bb\u5b50\u4f53\u4e86,\u867d\u7136\u7b80\u5355\u4f46\u5b83\u80fd\u63d0\u4f9b\u7684\u80fd\u91cf\u4e00\u6837\u4e0d\u5c11. \u6c18\u53ef\u4ee5\u4ece\u53ef\u518d\u751f\u7684\u6c34\u4e2d\u83b7\u5f97,\u6c26-3\u53ef\u4ee5\u4ece\u672b\u5730\u77f3\u4e2d\u83b7\u5f97.</br></br>\u7136\u800c,\u6211\u4eec\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5c06\u7b49\u79bb\u5b50\u4f53\u4e2d\u7684\u80fd\u91cf\u8f6c\u6362\u6210EU\u91ca\u653e\u51fa\u6765. \u8981\u505a\u5230\u8fd9\u4e00\u70b9,\u4f60\u9700\u8981\u4e00\u53f0\u5927\u578b\u7b49\u79bb\u5b50\u6da1\u8f6e.\u8fd8\u9700\u8981\u4e00\u4e2a\u52a8\u529b\u4ed3\u8f93\u51fa\u80fd\u91cf,\u4f60\u53ef\u4ee5\u8c03\u6574\u4e0d\u540c\u7684\u52a8\u529b\u4ed3\u6765\u8c03\u6574\u8f93\u51fa\u529f\u7387.\u7528\u6c26\u7b49\u79bb\u5b50\u4f53\u8fdb\u884c\u53d1\u7535,\u90a3\u4e48\u4f60\u9700\u8981\u4e00\u4e2a\u4e0d\u4f4e\u4e8eLuV\u7684\u52a8\u529b\u4ed3[\u7f13\u51b2].</br></br>\u00a74\u53e6\u5916\u8fd8\u6709\u5355\u65b9\u5757\u7684\u7b49\u79bb\u5b50\u53d1\u7535\u673a,\u4e0d\u8fc7\u5b83\u4eec\u7684\u6548\u7387\u592a\u4f4e\u4e86(\u91ce\u5916\u91c7\u77ff\u5012\u662f\u4e0d\u9519).\u00a7r",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEsA==",
                    "title": "\u00a7d\u00a7l\u00a7f\u00a7c\u00a7l\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "tooltip": "<strong>\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f00\u59cb\u805a\u53d8"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ULV)1x1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/935.png",
                    "x": 48.0,
                    "y": 12.0,
                    "data": "\u628a\u4e00\u5757\u57fa\u7840\u592a\u9633\u80fd\u677f\u548c\u4e00\u4e2aULV\u673a\u5668\u65b9\u5757\u653e\u5165MV\u7ea7\u522b\u7684\u7ec4\u88c5\u673a\u4e2d,\u7ec4\u88c5\u673a\u5c06\u4f1a\u628a\u5b83\u4eec\u7ec4\u88c5\u4e3a\u4e00\u4e2aULV\u7b49\u7ea7\u7684\u592a\u9633\u80fd\u53d1\u7535\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADpw==",
                    "title": "\u00a76\u00a7l\u592a\u9633\u4e4b\u529b(ULV)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(ULV)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u80fd"
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(IV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2804.png",
                    "x": 372.0,
                    "y": 228.0,
                    "data": "\u8fd9\u662fIV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK9A==",
                    "title": "\u00a79\u00a7l\u52a8\u80fd\u53d1\u7535\u673a(IV)",
                    "tooltip": "<strong>\u52a8\u80fd\u53d1\u7535\u673a(IV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94f1</br>\u52a8\u80fd\u53d1\u7535\u673a(EV)"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(UV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2777.png",
                    "x": 12.0,
                    "y": 336.0,
                    "data": "UV\u592a\u9633\u80fd\u8986\u76d6\u677f\u53d1\u7535\u91cf\u4e3a524288EU/t.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK2Q==",
                    "title": "\u00a7l\u592a\u9633\u4e4b\u529b(UV)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(UV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf</br>\u592a\u9633\u4e4b\u529b(ZPM)"
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2812.png",
                    "x": 444.0,
                    "y": 264.0,
                    "data": "\u8fd9\u662fLuV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK_A==",
                    "title": "\u00a79\u00a7l\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "tooltip": "<strong>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4</br>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)"
                },
                {
                    "name": "\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2817.png",
                    "x": 84.0,
                    "y": 372.0,
                    "data": "\u53ef\u8f93\u51fa1,000,000-2,097,152EU/t.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALAQ==",
                    "title": "\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)",
                    "tooltip": "<strong>\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)</br>UV\u7ec4\u88c5\u673a"
                },
                {
                    "name": "\u538b\u7f29\u592a\u9633\u80fd LV",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1332.png",
                    "x": 84.0,
                    "y": 84.0,
                    "data": "\u592a\u9633\u7684\u529b\u91cfx10. \u8fd9\u4e2a\u592a\u9633\u80fd\u7535\u6c60\u677f\u62b5\u5f97\u4e0a10\u5757\u666e\u901a\u592a\u9633\u80fd\u7535\u6c60\u677f,\u4f46\u6210\u672c\u4ec5\u4e3a9.\u8fd9\u600e\u4e48\u53ef\u80fd\uff1f \u9b54\u6cd5!\u6ce8\u610f:\u5b83\u4eec\u8f93\u51faGT-EU.\u4e0d\u9700\u8981\u53d8\u538b\u5668!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFNA==",
                    "title": "\u538b\u7f29\u592a\u9633\u80fd LV",
                    "tooltip": "<strong>\u538b\u7f29\u592a\u9633\u80fd LV</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(ULV)1x1</br>\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756"
                },
                {
                    "name": "\u4f60\u8fd8\u6ca1\u6709\u5b66\u4f1a\u5206\u79bb\u6d41\u4f53?\u771f\u7684\u4e48?",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2791.png",
                    "x": 228.0,
                    "y": 192.0,
                    "data": "\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u7684\u673a\u5236\u4e0e\u5927\u578b\u5185\u71c3\u5f15\u64ce\u57fa\u672c\u76f8\u540c,\u53ea\u662f\u71c3\u6599\u6362\u4f5c\u534a\u6d41\u8d28\u71c3\u6599.\u5982\u679c\u4f60\u9700\u8981\u5c06\u5927\u91cf\u91cd\u71c3\u6cb9\u4e4b\u7c7b\u7684\u534a\u6d41\u8d28\u71c3\u6599\u8f6c\u5316\u4e3aEU,\u4f60\u53ef\u4ee5\u9020\u4e00\u53f0\u8fd9\u4e2a\u73a9\u73a9.</br></br>[note]\u8bf7\u67e5\u770b\u5927\u578b\u5185\u71c3\u5f15\u64ce\u7684\u4efb\u52a1\u83b7\u53d6\u66f4\u591a\u4fe1\u606f.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK5w==",
                    "title": "\u4f60\u8fd8\u6ca1\u6709\u5b66\u4f1a\u5206\u79bb\u6d41\u4f53?\u771f\u7684\u4e48?",
                    "tooltip": "<strong>\u4f60\u8fd8\u6ca1\u6709\u5b66\u4f1a\u5206\u79bb\u6d41\u4f53?\u771f\u7684\u4e48?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86</br>EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2820.png",
                    "x": 660.0,
                    "y": 120.0,
                    "data": "\u8fd9\u662fMV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALBA==",
                    "title": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)",
                    "tooltip": "<strong>\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1</br>\u4fe1\u6807"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ZPM)1x1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2778.png",
                    "x": 48.0,
                    "y": 300.0,
                    "data": "\u8fd9\u662f\u4e0d\u9700\u8981\u6e05\u6d01\u7684\u65b9\u5757\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK2g==",
                    "title": "\u00a7l\u592a\u9633\u4e4b\u529b(ZPM)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(ZPM)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(ZPM)"
                },
                {
                    "name": "\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5166715817697893279.png",
                    "x": 228.0,
                    "y": 492.0,
                    "data": "\u5f97\u5230\u4e4b\u524d\u7684\u4e24\u79cd\u7b49\u79bb\u5b50\u4f53\u540e,\u5373\u523b\u628a\u4ed6\u4eec\u805a\u53d8\u6210\u65b0\u7684\u4e1c\u897f\u2014\u2014\u6c16\u7b49\u79bb\u5b50\u4f53.\u76f4\u63a5\u7528\u7684\u8bdd,\u6ca1\u51c6\u4f60\u4f1a\u505a\u51fa\u6765Neon(\u9713\u8679\u706f/\u6c16\u6c14)!\u5f53\u7136\u66f4\u591a\u8fd8\u662f\u7528\u6765\u751f\u4ea7\u540e\u9762\u66f4\u6709\u7528\u7684\u6750\u6599,\u591a\u7559\u610f\u4e00\u4e0b.</br></br>\u7136\u800c\u6c16\u4e0d\u662fMK1\u6700\u540e\u4e00\u4e2a\u9700\u8981\u505a\u7684\u7b49\u79bb\u5b50\u4f53.\u4f60\u9700\u8981\u5728\u9002\u5f53\u7684\u9636\u6bb5\u641e\u5b9a\u4e09\u79cd\u7b49\u79bb\u5b50\u4f53\u7684\u751f\u4ea7,\u548c\u4e00\u4e2a\u975e\u7b49\u79bb\u5b50\u6750\u6599,\u624d\u80fd\u5f00\u59cb\u6700\u540e\u7684\u6b65\u9aa4\u5f97\u5230\u6700\u7ec8\u60f3\u8981\u7684\u53d1\u7535\u7528\u7684\u7b49\u79bb\u5b50\u4f53.\u975e\u7b49\u79bb\u5b50\u4f53\u6750\u6599\u5c31\u662f\u57fa\u5ca9,\u4f60\u4e4b\u524d\u9047\u5230\u8fc7\u7684\u57fa\u5ca9.\u7528\u6e38\u620f\u65e9\u671f\u7684\u538b\u7f29\u5706\u77f3\u6cd5\u751f\u4ea7\u57fa\u5ca9\u7684\u8d1f\u62c5\u592a\u5927\u4e86;\u7528T8\u4e4b\u540e\u865a\u7a7a\u91c7\u77ff\u573a,\u6216\u592a\u7a7a\u7535\u68af\u6765\u81ea\u52a8\u5316\u83b7\u53d6\u57fa\u5ca9\u5c31\u4f1a\u597d\u5f88\u591a.</br></br>\u7ffb\u5408\u6210\u8868\u65f6\u4f60\u5927\u6982\u4f1a\u53d1\u73b0\u5236\u4f5c1000L\u529b\u91cf\u7b49\u79bb\u5b50\u4f53\u53ea\u9700\u8981144L\u6c16\u7b49\u79bb\u5b50\u4f53,\u540e\u9762\u7cfb\u5217\u4efb\u52a1\u7684\u6700\u7ec8\u76ee\u6807\u4ea7\u51fa\u6b65\u9aa4\u4e5f\u662f\u8fd9\u4e2a\u6570\u91cf\u5173\u7cfb,\u800c\u4e14\u90fd\u662f\u4e00\u7cfb\u5217\u805a\u53d8\u914d\u65b9\u7684\u74f6\u9888\u6b65\u9aa4.\u4e00\u53f0\u529b\u91cf\u7b49\u79bb\u5b50\u4f53\u805a\u53d8\u9700\u89810.144\u53f0\u6c16\u7b49\u79bb\u5b50\u4f53\u805a\u53d8,\u6216\u8005\u8bf4,\u4e00\u53f0\u805a\u53d8\u751f\u4ea7\u6c16\u80fd\u4f9b\u7ea67\u53f0\u751f\u4ea7\u529b\u91cf\u7b49\u79bb\u5b50(\u51c6\u786e\u8bf4\u662f6.944...\u53f0).</br></br>MK1\u90e8\u5206\u7684\u6838\u805a\u53d8\u4ea7\u94fe\u5230\u529b\u91cf\u7b49\u79bb\u5b50\u4f53\u4e3a\u6b62,\u8fd9\u662f\u62e5\u6709\u6bcf\u6876150M-EU\u71c3\u6599\u503c\u7684\u7b49\u79bb\u5b50\u4f53,\u5b83\u5728\u4f7f\u7528\u65e0\u5c3d\u50ac\u5316\u5242\u8f6c\u5b50\u7684\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e\u4e2d\u7684\u6548\u7387\u60e9\u7f5a\u4e3a53.5\uff05,\u800c\u6c26\u7b49\u79bb\u5b50\u540c\u60c5\u51b5\u4e0b\u7684\u6548\u7387\u60e9\u7f5a\u4e3a86.1\uff05.\u53ef\u80fdZPM\u9636\u6bb5\u4f60\u8fd8\u4e0d\u9700\u8981\u8fd9\u4e9b,\u4f46\u8fd9\u4e9b\u5c06\u4f1a\u662f\u4f60\u672a\u6765\u53d1\u5c55\u7684\u5960\u57fa\u77f3.",
                    "quest_id": "tSCw6KSbR8a4TCNWlrmkYQ==",
                    "title": "\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f",
                    "tooltip": "<strong>\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9499\u74f6\u9888</br>\u787c\u7684\u805a\u53d8"
                },
                {
                    "name": "\u6ce8\u9b54\u592a\u9633\u80fd",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1335.png",
                    "x": 84.0,
                    "y": 48.0,
                    "data": "\u538b\u7f29\u592a\u9633\u80fd\u53ef\u901a\u8fc7\u6ce8\u9b54\u63d0\u9ad8\u53d1\u7535\u91cf.\u67e5\u770b\u5b83\u4eec\u7684tooltip,\u9009\u62e9\u4e00\u79cd\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFNw==",
                    "title": "\u6ce8\u9b54\u592a\u9633\u80fd",
                    "tooltip": "<strong>\u6ce8\u9b54\u592a\u9633\u80fd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684</br>\u538b\u7f29\u592a\u9633\u80fd LV"
                },
                {
                    "name": "\u706b\u7bad\u5f15\u64ce(EV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2294.png",
                    "x": 336.0,
                    "y": 192.0,
                    "data": "\u8fd9\u79cd\u706b\u7bad\u5f15\u64ce\u662f\u4e00\u79cd\u9ad8\u6c61\u67d3\u53d1\u7535\u8bbe\u5907,\u71c3\u6599\u6548\u7387\u4e3a80\uff05.\u6bcf\u79d2\u4ea7\u751f250-2000\u70b9\u6c61\u67d3.</br></br>[note]\u67094\u79cd\u706b\u7bad\u71c3\u6599.\u8bf7\u5728\u592a\u7a7a\u7ade\u8d5b\u4efb\u52a1\u680f\u4e0b\u67e5\u770b\u5269\u4f59\u71c3\u6599\u7684\u5236\u9020\u65b9\u5f0f.\u5982\u679c\u8981\u81ea\u52a8\u5316\u751f\u4ea7\u8fd9\u4e9b\u71c3\u6599,\u9884\u8ba1\u9700\u8981\u591a\u4e2a\u5316\u5de5\u5382.[/note] \u53e6\u5916\u706b\u7bad\u5f15\u64ce\u4e5f\u6709\u591a\u65b9\u5757\u7248\u672c.</br></br> WIKI \u706b\u7bad\u71c3\u6599\u4ea7\u7ebf\uff1a\u00a79gtnh.huijiwiki.com/p/742\u00a7r",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAI9g==",
                    "title": "\u00a7a\u00a7l\u706b\u7bad\u5f15\u64ce(EV)",
                    "tooltip": "<strong>\u706b\u7bad\u5f15\u64ce(EV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>RP-1\u706b\u7bad\u71c3\u6599</br>EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(MV)1x1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1004.png",
                    "x": 48.0,
                    "y": 120.0,
                    "data": "\u628a\u90a3\u4e9b128EU\u7684\u592a\u9633\u80fd\u677f\u5236\u9020\u6210\u65b9\u5757,\u8fd9\u6837\u4ed6\u4eec\u80fd\u591f\u88ab\u653e\u7f6e\u5230\u4e16\u754c\u4e2d. \u4f7f\u7528HV\u7ea7\u522b\u7684\u7ec4\u88c5\u673a\u5c06MV\u7ea7\u592a\u9633\u80fd\u677f\u3001MV\u673a\u5668\u5916\u58f3\u3001\u4e00\u4e2a\u7535\u6c60\u548c\u4e00\u4e2a\u673a\u68b0\u81c2\u7ec4\u88c5\u5230\u4e00\u8d77.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD7A==",
                    "title": "\u00a7a\u00a7l\u592a\u9633\u4e4b\u529b(MV)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(MV)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(MV)"
                },
                {
                    "name": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2801.png",
                    "x": 588.0,
                    "y": 156.0,
                    "data": "\u53ef\u4ee5\u8fd0\u884c\u76f8\u5f53\u76f8\u5f53\u957f\u7684\u65f6\u95f4.\u6839\u636e\u63d0\u4f9b\u7684\u9776\u4e38\u8f93\u51fa\u80fd\u91cf.</br></br>\u9545-241:16EU/t,69875\u5929</br>\u9536-90:30EU/t,62640\u5929</br>\u949a-238:64EU/t,42982\u5929</br>\u948b-210:480EU/t,34560\u5929</br></br>\u5766\u767d\u6765\u8bf4,\u8fd9\u73a9\u610f\u5b8c\u5168\u4e0d\u503c.\u7279\u522b\u662f\u8003\u8651\u5230\u4e3a\u4e86\u5236\u9020\u8fd9\u4e9b\u9776\u4e38,\u8fd8\u9700\u8981\u65b0\u4fee\u4e00\u53f0\u56de\u65cb\u52a0\u901f\u5668...\u751a\u81f3\u5236\u9020\u8fc7\u7a0b\u8fd8\u8981\u770b\u8138!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK8Q==",
                    "title": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a",
                    "tooltip": "<strong>\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "name": "\u949a\u57fa\u6d41\u4f53\u71c3\u6599",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2958.png",
                    "x": 408.0,
                    "y": 372.0,
                    "data": "\u6bcfmB\u51fa\u4ea732,400EU/t,\u6301\u7eed7.5\u79d2.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALjg==",
                    "title": "\u949a\u57fa\u6d41\u4f53\u71c3\u6599",
                    "tooltip": "<strong>\u949a\u57fa\u6d41\u4f53\u71c3\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94c0\u57fa\u6d41\u4f53\u71c3\u6599"
                },
                {
                    "name": "\u7075\u6c14\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1334.png",
                    "x": 552.0,
                    "y": 84.0,
                    "data": "\u8fd9\u53f0\u53d1\u7535\u673a\u76f8\u5f53\u68d8\u624b.\u5b83\u9700\u8981\u7075\u6c14\u6e90\u8d28,\u8fd9\u5e76\u4e0d\u5e38\u89c1,\u4f46\u5b83\u7684\u8f93\u51fa\u5f88\u68d2.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFNg==",
                    "title": "\u7075\u6c14\u6e90\u8d28\u53d1\u7535\u673a",
                    "tooltip": "<strong>\u7075\u6c14\u6e90\u8d28\u53d1\u7535\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "name": "\u4f60\u542c\u5230\u5f15\u64ce\u58f0\u4e86\u5417\uff1f",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1740.png",
                    "x": 228.0,
                    "y": 228.0,
                    "data": "\u4f60\u8001\u5f0f\u4f46\u53ef\u9760\u7684\u5185\u71c3\u53d1\u7535\u673a\u6e10\u6e10\u529b\u4e0d\u4ece\u5fc3,\u66f4\u4e0d\u7528\u8bf4\u6c61\u67d3\u95ee\u9898\u4e86. \u5982\u679c\u4f60\u60f3\u7ee7\u7eed\u4f7f\u7528\u6db2\u4f53\u71c3\u6599,\u4f60\u9700\u8981\u5236\u9020\u4e00\u4e2a\u66f4\u597d\u7684\u5f15\u64ce.</br>\u8fd9\u53f0\u591a\u65b9\u5757\u53ef\u4ee5\u9ed8\u8ba4\u4ea7\u751f1A\u7684EV\u7535\u538b,\u5982\u679c\u4f60\u7ed9\u5b83\u63d0\u4f9b\u6c27\u6c14,\u5219\u53ef\u4ee5\u4ea7\u751f3A. \u7136\u800c,\u8fd9\u79cd\u52a8\u529b\u4e0d\u662f\u6beb\u65e0\u4ee3\u4ef7\u7684-\u4f60\u9700\u8981\u4e0d\u65ad\u4e3a\u673a\u5668\u63d0\u4f9b\u5c11\u91cf\u6da6\u6ed1\u5242(\u5982\u679c\u4f60\u60f3\u63d0\u9ad8\u6548\u7387\u548c\u8f93\u51fa,\u5219\u9700\u8981\u6c27\u6c14).</br></br>\u4f60\u8fd8\u9700\u89813\u4e2a\u8f93\u5165\u4ed3,1\u4e2a\u6d88\u58f0\u4ed3\u548c\u52a8\u529b\u4ed3.\u8fd9\u4e9b\u4ed3\u5ba4\u7684\u7b49\u7ea7\u53d6\u51b3\u4e8e\u4f60.</br></br>\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9\u548c\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9(HOG)\u662f\u8fd9\u6b3e\u5f15\u64ce\u7684\u4f18\u8d28\u71c3\u6599\u6765\u6e90.</br></br>\u4f60\u9700\u8981\u4fdd\u6301\u5f15\u64ce\u524d\u65b9\u7684\u533a\u57df\u65e0\u65b9\u5757,\u4ee5\u4fbf\u80fd\u591f\u5438\u5165\u8db3\u591f\u7684\u7a7a\u6c14-\u751a\u81f3\u8fde\u706b\u628a\u90fd\u4e0d\u80fd\u6709.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGzA==",
                    "title": "\u00a76\u00a7l\u4f60\u542c\u5230\u5f15\u64ce\u58f0\u4e86\u5417\uff1f",
                    "tooltip": "<strong>\u4f60\u542c\u5230\u5f15\u64ce\u58f0\u4e86\u5417\uff1f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86</br>EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2964.png",
                    "x": 444.0,
                    "y": 408.0,
                    "data": "\u6bcfmB\u51fa\u4ea788,540,000-EU/t,\u6301\u7eed5\u79d2. \u8fd9\u4e2a\u7b49\u7ea7\u7684\u7845\u5ca9\u71c3\u6599\u5df2\u7ecf\u4e0d\u9519\u4e86. \u67e5\u770b\u948d\u57fa\u6d41\u4f53\u71c3\u6599\u4ee5\u83b7\u53d6\u6240\u9700\u7684\u9568. </br></br>\u9ad8\u7ea7\u914d\u65b9\u4f1a\u9700\u8981\u4e00\u53f0DTPF, \u4e0d\u8fc7\u80fd\u8fdb\u4e00\u6b65\u7b80\u5316\u4ea7\u7ebf. </br></br>\u8fd9\u4e2a\u9636\u6bb5\u4e5f\u53ef\u4ee5\u8003\u8651\u7528\u7194\u878d\u4e2d\u5b50\u6765\u589e\u52a0\u538b\u7f29\u6750\u6599\u7684\u4ea7\u7387\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALlA==",
                    "title": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV",
                    "tooltip": "<strong>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII"
                },
                {
                    "name": "\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/783.png",
                    "x": 120.0,
                    "y": 192.0,
                    "data": "\u4f60\u7684\u57fa\u7840\u84b8\u6c7d\u8f6e\u673a\u592a\u5360\u7a7a\u95f4\uff1f\u8be5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u4e86.\u8fd9\u53f0\u5927\u578b\u84b8\u6c7d\u8f6e\u673a\u53ef\u4ee5\u5e2e\u52a9\u4f60\u751f\u4ea7\u5927\u91cf\u7684\u80fd\u6e90.\u5b83\u8fd8\u80fd\u4e3a\u4f60\u751f\u4ea7\u84b8\u998f\u6c34,\u4e0d\u8fc7\u4f60\u6700\u597d\u5faa\u73af\u5229\u7528\u8fd9\u4e9b\u6c34. \u522b\u5fd8\u4e86\u4e3a\u5b83\u5236\u9020\u4e00\u4e2a\u6da1\u8f6e\u5e76\u653e\u5165\u63a7\u5236\u5668\u7684GUI\u4e2d,\u5426\u5219\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u5c31\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c.</br></br>\u6bcf\u79cd\u6da1\u8f6e\u90fd\u6709\u7279\u5b9a\u7684\u6700\u4f73\u6d41\u91cf,\u800c\u84b8\u6c7d\u53c8\u662f\u71c3\u6599\u6548\u7387\u6700\u9ad8\u7684\u5de5\u8d28,\u5177\u4f53\u6570\u503c\u5982\u6da1\u8f6e\u7684tooltip\u6240\u793a.\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u8986\u76d6\u677f,\u7cbe\u786e\u8c03\u6574\u6d41\u91cf\u4ee5\u5339\u914d\u5404\u79cd\u6700\u4f73\u6d41\u91cf,\u4e0d\u8fc7\u4f60\u4e5f\u53ef\u4ee5\u8d85\u51fa\u6700\u4f73\u6d41\u91cf\u4ee5\u83b7\u5f97\u66f4\u9ad8\u7684\u529f\u7387\u8f93\u51fa,\u4e0d\u8fc7\u4ee3\u4ef7\u662f\u71c3\u6599\u6548\u7387\u7684\u964d\u4f4e.\u4f60\u53ef\u4ee5\u5236\u9020\u56db\u79cd\u5c3a\u5bf8\u7684\u6da1\u8f6e\u8f6c\u5b50,\u8d8a\u5927\u7684\u8f6c\u5b50\u53ef\u4ee5\u63d0\u4f9b\u8d8a\u9ad8\u7684\u529f\u7387\u8f93\u51fa,\u4f46\u5176\u6548\u7387\u6709\u6240\u4e0d\u540c.\u4e00\u822c\u6765\u8bf4,\u5927\u578b\u6da1\u8f6e\u8f6c\u5b50\u6700\u597d,\u56e0\u4e3a\u5b83\u7684\u6548\u7387\u6700\u9ad8,\u5e76\u4e14\u62e5\u6709\u4e0d\u9519\u7684\u6700\u4f73\u6d41\u91cf.</br></br>\u4f7f\u7528\u6da1\u8f6e\u65f6,\u9700\u8981\u6ce8\u610f\u6d41\u901f.\u800c\u6240\u8c13\u6700\u4f73\u6d41\u901f,\u5373\u6da1\u8f6e\u6240\u5217\u4e0d\u540c\u71c3\u6599\u7684\u6700\u4f73\u6d41\u91cf,\u9664\u4ee5\u5bf9\u5e94\u7684\u71c3\u503c.\u4f60\u8fd8\u53ef\u4ee5\u76f4\u63a5\u7528\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668(Large-Turbine-Calculator)[\u5728\u4e3b\u6570\u636e\u8868\u683c(spreadsheet)\u5185\u6709\u4e2a\u94fe\u63a5,\u6307\u5411discord\u4e2d\u7684\u8ba1\u7b97\u5668];\u8fd8\u53ef\u4ee5\u5728\u5927\u578b\u6da1\u8f6e\u8fd0\u884c\u65f6(\u53ea\u9700\u8981\u63d0\u4f9b\u5f88\u5c11\u7684\u71c3\u6599\u8ba9\u5b83\u52a8\u8d77\u6765\u5c31\u884c),\u76f4\u63a5\u626b\u63cf\u4e3b\u65b9\u5757,\u5373\u53ef\u83b7\u77e5\u8be5\u6da1\u8f6e\u8f6c\u5b50\u4f7f\u7528\u67d0\u79cd\u71c3\u6599\u5bf9\u5e94\u7684\u6700\u4f73\u6d41\u901f. \u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u6216\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,\u786e\u4fdd\u6240\u63d0\u4f9b\u7684\u71c3\u6599\u901f\u5ea6\u4e0e\u6da1\u8f6e\u7684\u6700\u4f73\u6d41\u901f\u5339\u914d,\u4ee5\u53d1\u6325\u6700\u9ad8\u7684\u71c3\u6599\u6548\u7387;\u4e0d\u8fc7\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u8d85\u51fa\u6b64\u6700\u4f73\u6d41\u901f,\u4ee5\u964d\u4f4e\u6548\u7387\u4e3a\u4ee3\u4ef7,\u83b7\u5f97\u66f4\u9ad8\u7684\u529f\u7387\u8f93\u51fa,\u800c\u84b8\u6c7d\u6da1\u8f6e\u5728\u8d85\u51fa\u6700\u4f73\u6d41\u901f\u540e\u7684\u6548\u7387\u4fdd\u6301\u662f\u6700\u5dee\u7684.\u5728HV\u9636\u6bb5,\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528IC2\u7684\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,HV\u9636\u6bb5\u4ee5\u540e\u5c31\u80fd\u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u8986\u76d6\u677f\u4e86.</br></br>\u518d\u6b21\u91cd\u590d,\u5f53\u4f60\u4e3a\u6da1\u8f6e\u63d0\u4f9b\u8d85\u8fc7\u6700\u4f73\u6d41\u901f\u7684\u71c3\u6599\u65f6(\u79f0\u4e4b\u4e3a\u8d85\u8f7d\u72b6\u6001),\u6da1\u8f6e\u7684\u8f93\u51fa\u529f\u7387\u63d0\u9ad8,\u4f46\u71c3\u6599\u6548\u7387\u964d\u4f4e,\u540c\u65f6\u6700\u9ad8\u8f93\u51fa\u529f\u7387\u53d6\u51b3\u4e8e\u6da1\u8f6e\u8f6c\u5b50\u7c7b\u578b\u53ca\u5176\u8d85\u8f7d\u6548\u7387\u7b49\u7ea7.\u5bf9\u4e8e\u84b8\u6c7d\u6da1\u8f6e,\u8d85\u8f7d\u6548\u7387\u7b49\u7ea71\uff1a\u6700\u9ad8\u8d85\u8f7d150\uff05,\u8f93\u51fa\u529f\u7387112\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea72\uff1a\u6700\u9ad8\u8d85\u8f7d200\uff05,\u8f93\u51fa\u529f\u7387133\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea73\uff1a\u6700\u9ad8\u8d85\u8f7d250\uff05,\u8f93\u51fa\u529f\u7387156\uff05.\u8d8a\u63a5\u8fd1\u8d85\u8f7d\u6781\u9650,\u635f\u5931\u7684\u71c3\u6599\u6548\u7387\u8d8a\u591a. \u6ce8\u610f,\u8f93\u51fa\u529f\u7387\u4e0d\u8981\u8d85\u8fc7\u4f60\u52a8\u529b\u4ed3\u7684\u6700\u9ad8\u8f93\u51fa\u529f\u7387,\u4e0d\u7136,\u563f\u563f\u4f60\u5c31\u6709\u9ebb\u70e6\u4e86!</br></br>75K\u8010\u4e45\u4ee5\u4e0b\u7684\u6da1\u8f6e\u914d\u65b9\u5df2\u79fb\u9664.\u7528\u5408\u9002\u7684\u957f\u6746,\u4f7f\u7528NEI\u67e5\u8be2\u7528\u9014,\u4f60\u5c31\u80fd\u770b\u5230\u6709\u7528\u7684\u7ec4\u88c5\u914d\u65b9\u4e86.\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u67e5\u6211\u4eec\u7684\u6570\u636e\u8868\u683c.  \u957f\u9541\u94dd\u5408\u91d1\u6746\u5bf9\u5e94\u5c0f\u578b\u6da1\u8f6e\u3001\u957f\u949b\u6746\u5bf9\u5e94\u666e\u901a\u6da1\u8f6e,\u7b49\u7b49...</br></br>\u767b\u6708\u524d,\u6700\u597d\u7684\u8f6c\u5b50\u6750\u6599\u662f\u6697\u5f71\u91d1\u5c5e\u6216\u8109\u51b2\u5408\u91d1.</br></br>\u767b\u6708\u540e,\u6700\u597d\u7684HV\u8f6c\u5b50\u7531\u6697\u5f71\u91d1\u5c5e\u6216\u5965\u5229\u54c8\u94a2(\u4e0d\u8fc7\u8fd9\u662fIV\u6750\u6599)\u5236\u6210.\u5e78\u8fd0\u7684\u662f,\u73b0\u5728\u6da1\u8f6e\u673a\u53ef\u4ee5\u652f\u6301\u591aA\u52a8\u529b\u4ed3\u4e86,\u6240\u4ee5\u5982\u679c\u4f60\u9700\u8981\u989d\u5916\u7535\u6d41,\u8bd5\u8bd5\u770b\u5427!</br></br>\u81f3\u4e8e\u5176\u4ed6\u9009\u62e9,\u8be6\u89c1Discord\u9891\u9053\u4e2d\u7684\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668\u548c\u6570\u636e\u8868\u683c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADDw==",
                    "title": "\u00a76\u00a7l\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19",
                    "tooltip": "<strong>\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c3\u9636\u6bb5(HV)"
                },
                {
                    "name": "\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1336.png",
                    "x": 84.0,
                    "y": 120.0,
                    "data": "72\u4e2a1EU/t\u7684\u592a\u9633\u80fd\u5408\u8d77\u6765\u5c31\u662f100EU/t\uff1f\u542c\u8d77\u6765\u5f88\u4e0d\u9519.\u505a\u4e00\u4e2a\u5427.\u5b83\u4eec\u4e5f\u53ef\u4ee5\u6ce8\u9b54.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFOA==",
                    "title": "\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd",
                    "tooltip": "<strong>\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u538b\u7f29\u592a\u9633\u80fd LV</br>\u53ef\u6015\u7684\u9b54\u6cd5\u8f7d\u4f53"
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(ZPM)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2796.png",
                    "x": 300.0,
                    "y": 300.0,
                    "data": "\u8fd9\u662fZPM\u7248\u672c.\u5b83\u9700\u8981\u8d85\u80fd\u7845\u5ca9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK7A==",
                    "title": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(ZPM)",
                    "tooltip": "<strong>\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(ZPM)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u529b\u573a\u53d1\u751f\u5668(ZPM)"
                },
                {
                    "name": "\u67f4\u6cb9\u7684\u529b\u91cf",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1870.png",
                    "x": 192.0,
                    "y": 120.0,
                    "data": "MV\u5185\u71c3\u53d1\u7535\u673a\u71c3\u70e7\u8f7b\u71c3\u6cb9\u7684\u901f\u5ea6\u6bd4\u8d77LV\u7248\u672c\u66f4\u5feb,\u4e0d\u8fc7\u4f60\u53ef\u4ee5\u5c06\u67f4\u6cb9\u81ea\u52a8\u5316,\u5e76\u5c06\u5176\u7528\u4f5c\u66ff\u4ee3\u71c3\u6599,\u56e0\u4e3a\u67f4\u6cb9\u66f4\u52a0\u5f3a\u5927.\u67f4\u6cb9\u53ef\u4ee5\u8bf4\u662f\u73b0\u9636\u6bb5\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5316\u5e76\u4ea7\u51fa\u5927\u91cf\u80fd\u91cf\u7684\u6700\u7b80\u5355\u4e14\u6700\u9ad8\u6548\u7684\u65b9\u5f0f,\u800c\u4e14\u5982\u679c\u4f60\u4e0d\u65ad\u5bf9\u5176\u8fdb\u884c\u5347\u7ea7,\u5b83\u8fd8\u53ef\u4ee5\u6301\u7eed\u4f9b\u7ed9\u4f60\u66f4\u591a\u9636\u6bb5\u7684\u80fd\u6e90\u9700\u6c42.</br></br>\u53e6\u5916,\u67f4\u6cb9\u53ef\u7528\u4f5c\u76f4\u5347\u673a\u80cc\u5305\u7684\u71c3\u6599,\u76f4\u5347\u673a\u80cc\u5305\u662f\u5f88\u68d2\u7684\u4e00\u79cd\u55b7\u6c14\u80cc\u5305\u7c7b\u88c5\u5907,\u5b83\u53ef\u4ee5\u8ba9\u4f60\u5728\u57fa\u5730\u5185\u5916\u81ea\u7531\u79fb\u52a8.\u6240\u4ee5\u5982\u679c\u4f60\u6709\u4e9b\u67f4\u6cb9\u7684\u8bdd,\u5f3a\u70c8\u5efa\u8bae\u4f60\u505a\u4e2a\u76f4\u5347\u673a\u80cc\u5305.</br></br>[note]\u6b64\u4efb\u52a1\u8fd8\u53ef\u4ee5\u89e3\u9501\"\u6446\u8131\u6b7b\u4ea1,\u6e38\u5386\u56db\u65b9\"\u7ae0\u8282\u4e2d\u7684\u4efb\u52a1.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHTg==",
                    "title": "\u00a76\u00a7l\u67f4\u6cb9\u7684\u529b\u91cf",
                    "tooltip": "<strong>\u67f4\u6cb9\u7684\u529b\u91cf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(LV)1x1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/937.png",
                    "x": 48.0,
                    "y": 84.0,
                    "data": "\u5386\u5c3d\u5343\u8f9b\u4e07\u82e6\u4f60\u7ec8\u4e8e\u53ef\u4ee5\u5236\u9020LV\u7ea7\u522b\u7684\u592a\u9633\u80fd\u53d1\u7535\u673a\u4e86. \u628aLV\u673a\u5668\u5916\u58f3\u548cLV\u7ea7\u592a\u9633\u80fd\u8986\u76d6\u677f\u653e\u5230MV\u7684\u7ec4\u88c5\u673a\u91cc\u9762.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADqQ==",
                    "title": "\u00a7a\u00a7l\u592a\u9633\u4e4b\u529b(LV)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(LV)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(LV)"
                },
                {
                    "name": "\u5408\u9002\u7684\u80fd\u6e90",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/190.png",
                    "x": 516.0,
                    "y": 192.0,
                    "data": "\u4e0d\u7ba1\u4f60\u5728\u7528\u9b54\u6cd5\u3001\u84b8\u6c7d\u3001\u77f3\u6cb9\u6216\u8005\u6cbc\u6c14\u5728\u53d1\u7535,\u5230\u4e86\u8fd9\u4e00\u9636\u6bb5\u4f60\u90fd\u4f1a\u78b0\u5230\u95ee\u9898. \u6240\u4ee5\u4f60\u9700\u8981\u5347\u7ea7\u4f60\u7684\u7535\u7f51,\u81f3\u5c11\u5bf9\u9ad8\u7089\u4f9b\u7535\u7cfb\u7edf\u8fdb\u884c\u5347\u7ea7. \u6240\u4ee5\u8ba9\u6211\u4eec\u6765\u4f7f\u7528\u5f3a\u5927\u7684\u80fd\u6e90:\u6838\u80fd!</br></br>\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u53cd\u5e94\u5806\u7684\u5de5\u4f5c\u539f\u7406,\u8bf7\u53c2\u8003\u82f1\u7279\u7f51\u4ee5\u53ca [url]https://github.com/MauveCloud/Ic2ExpReactorPlanner/releases[/url] \u8fd9\u91cc\u7684\u6838\u7535\u8ba1\u7b97\u5668</br></br>\u00a74\u63d0\u793a: \u8fd9\u4e2a\u6574\u5408\u5305\u6838\u53cd\u5e94\u5806\u7684\u6548\u7387\u4e58\u6570\u4e3a10,\u8fd9\u610f\u5473\u7740GTNH\u724c\u53cd\u5e94\u5806\u7684\u6548\u7387\u8981\u6bd4\u4ee5\u5f80\u7684\u9ad810\u500d!!!\u8bf7\u786e\u4fdd\u5728\u9ad8\u7ea7\u4e2d\u5c06\u8ba1\u7b97\u5668\u8bbe\u7f6e\u4e3aGTNH\u6a21\u5f0f.\u53e6\u5916,\u6240\u6709\u90e8\u4ef6\u60ac\u505c\u663e\u793a\u7684\u90fd\u662f\u57fa\u7840\u6570\u636e(x10\u4e4b\u524d).</br></br>\u5728[url]https://wiki.gtnewhorizons.com/wiki/Nuclear_Reactors[/url] \u53ef\u4ee5\u83b7\u77e5\u66f4\u591aGTNH\u6838\u53cd\u5e94\u5806\u4fe1\u606f. \u76ee\u524d1920EU/t\u7684\u948d\u5806\u5e94\u8be5\u662f\u6700\u4f73\u9009\u62e9.</br></br>\u4e2d\u6587 WIKI \u6838\u53cd\u5e94\u5806\uff1a[url]gtnh.huijiwiki.com/p/977[/url]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAvg==",
                    "title": "\u00a7a\u00a7l\u5408\u9002\u7684\u80fd\u6e90",
                    "tooltip": "<strong>\u5408\u9002\u7684\u80fd\u6e90</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c4\u9636\u6bb5(EV)"
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2809.png",
                    "x": 408.0,
                    "y": 228.0,
                    "data": "\u8fd9\u662fIV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK-Q==",
                    "title": "\u00a79\u00a7l\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "tooltip": "<strong>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u94f1</br>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)"
                },
                {
                    "name": "\u6d41\u4f53\u6821\u51c6\u5668",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1893.png",
                    "x": 120.0,
                    "y": 264.0,
                    "data": "\u6da1\u8f6e\u9700\u8981\u7cbe\u786e\u63a7\u5236\u6d41\u91cf,\u5426\u5219\u5bb9\u6613\u9020\u6210[warn]\u7206\u70b8[/warn]\u6216\u6d6a\u8d39.  \u5c06\u6d41\u4f53\u6821\u51c6\u5668\u8d34\u5728\u8fde\u63a5\u5230\u8f93\u5165\u4ed3\u7684\u7ba1\u9053\u4e0a,\u63a7\u5236\u8fdb\u5165\u6da1\u8f6e\u7684\u6d41\u91cf.\u60f3\u8981\u63d0\u9ad8\u6d41\u91cf,\u5bf9\u51c6\u6d41\u4f53\u6821\u51c6\u5668\u7684\u53f3\u4fa7,\u7136\u540e:</br></br>1L-\u7a7a\u624b\u53f3\u952e</br>16L-\u624b\u6301\u87ba\u4e1d\u5200\u53f3\u952e</br>256L-\u624b\u6301\u87ba\u4e1d\u5200,Shift+\u53f3\u952e</br></br>\u60f3\u8981\u964d\u4f4e\u6d41\u91cf,\u5bf9\u51c6\u6d41\u4f53\u6821\u51c6\u5668\u7684\u5de6\u4fa7,\u5176\u4f59\u64cd\u4f5c\u4e00\u81f4.</br></br>\u8bf7\u53c2\u8003\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668\u548c\u6da1\u8f6e\u53c2\u6570\u8868\u8bbe\u7f6e\u6d41\u91cf(\u786e\u8ba4\u71c3\u6599\u540e).\u5728GTNH,\u8fd9\u4e9b\u6570\u5b66\u8ba1\u7b97\u5c31\u4ea4\u7ed9\u6211\u4eec\u5427!\u81f3\u5c11\u5728\u8fd9\u4e2a\u4efb\u52a1.</br></br>[note]\u6309\u4f4fShift,\u7a7a\u624b\u53f3\u952e\u6821\u51c6\u5668\u53ef\u4ee5\u6253\u5f00GUI,\u8fdb\u884c\u66f4\u7cbe\u786e\u7684\u8bbe\u7f6e.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHZQ==",
                    "title": "\u00a76\u00a7l\u6d41\u4f53\u6821\u51c6\u5668",
                    "tooltip": "<strong>\u6d41\u4f53\u6821\u51c6\u5668</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535</br>\u5927\u578b\u71c3\u6c14\u6da1\u8f6e</br>\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19"
                },
                {
                    "name": "\u68d8\u624b\u7684\u6838\u71c3\u6599\uff1aMOX",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/192.png",
                    "x": 552.0,
                    "y": 228.0,
                    "data": "\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b,MOX\u7684\u53d1\u7535\u4e0e\u94c0\u68d2\u76f8\u540c,\u4f46\u968f\u7740\u53cd\u5e94\u5806\u5347\u6e29,MOX\u53ef\u4ee5\u4ea7\u51fa\u66f4\u591a\u80fd\u91cf.\u60f3\u8981\u5229\u7528\u8fd9\u4e00\u4f18\u52bf,\u4f60\u9700\u8981\u5c1d\u8bd5\u8bbe\u8ba1\u51fa\u4e00\u79cd\u63a5\u8fd1\u6781\u9650\u6e29\u5ea6\u7684\u70ed\u5e73\u8861\u5806.\u5b83\u7684\u71c3\u70e7\u65f6\u95f4\u53ea\u6709\u94c0\u68d2\u7684\u4e00\u534a,\u4e14\u5f53\u53cd\u5e94\u5806\u6e29\u5ea6\u8d85\u8fc750\uff05\u65f6,MOX\u68d2\u4f1a\u653e\u51fa\u66f4\u591a\u70ed\u91cf.\u4e00\u6839\u68d2\u5b50\u9876\u6240\u6709\u5f15\u64ce!</br></br>[note]\u5982\u679c\u6ca1\u6709\u5176\u4ed6\u65b9\u5f0f\u83b7\u53d6\u949a\u7684\u8bdd,\u4f60\u9700\u8981\u5148\u8fd0\u884c\u4e00\u4e2a\u666e\u901a\u7684\u94c0\u5806,\u518d\u79bb\u5fc3\u67af\u7aed\u94c0.\u522b\u5fd8\u4e86MOX\u68d2\u4e0d\u6b62\u4e00\u79cd![/note]</br></br>[warn]\u8bf7\u786e\u4fdd\u5728\u521b\u9020\u6a21\u5f0f\u6d4b\u8bd5\u8fc7\u4e14/\u6216\u505a\u597d\u9632\u7206\u5de5\u4f5c![/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAwA==",
                    "title": "\u68d8\u624b\u7684\u6838\u71c3\u6599\uff1aMOX",
                    "tooltip": "<strong>\u68d8\u624b\u7684\u6838\u71c3\u6599\uff1aMOX</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "name": "\u6c5e\u592a\u591a\u4e86?",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2253.png",
                    "x": 624.0,
                    "y": 120.0,
                    "data": "\u4e00\u5c0f\u65f6\u53c8\u4e00\u5c0f\u65f6...\u4e00\u5929\u53c8\u4e00\u5929...\u4e00\u5468\u53c8\u4e00\u5468...\u4f60\u4e3a\u4e86\u7ea2\u5b9d\u77f3(\u94ec)\u5904\u7406\u4e86\u6210\u5428\u7684\u7ea2\u77f3,\u4e5f\u79ef\u6512\u4e86\u5927\u91cf\u7684\u6c5e,\u4e0d\u77e5\u9053\u80fd\u7528\u6765\u505a\u4ec0\u4e48.</br></br>\u4f60\u53ef\u4ee5\u5c06\u5176\u90fd\u5b58\u5230\u8d85\u7ea7\u7f38\u91cc,\u4f46\u4e8b\u5b9e\u4e0a\u6ca1\u4eba\u9700\u8981\u90a3\u4e48\u591a\u6b21\u6c2f\u9178.\u4f60\u53ef\u4ee5\u5236\u9020\u4e00\u53f0\u9178\u6027\u53d1\u7535\u673a,\u81f3\u5c11\u80fd\u767d\u5ad6\u70b9\u7535.</br></br>\u8bd1\u8005\u6ce8:\u4f7f\u7528\u6c5e\u5316\u5b66\u6d78\u6d17\u5904\u7406\u67d0\u4e9b\u77ff\u7269\u53ef\u4ee5\u589e\u4ea7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIzQ==",
                    "title": "\u00a76\u00a7l\u6c5e\u592a\u591a\u4e86?",
                    "tooltip": "<strong>\u6c5e\u592a\u591a\u4e86?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7528\u5b8c\u4e86\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\uff1f"
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2811.png",
                    "x": 408.0,
                    "y": 264.0,
                    "data": "\u8fd9\u662fLuV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK-w==",
                    "title": "\u00a79\u00a7l\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "tooltip": "<strong>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4</br>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)"
                },
                {
                    "name": "\u9178\u4e4b\u65c5",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2792.png",
                    "x": 624.0,
                    "y": 156.0,
                    "data": "\u8fd9\u662fHV\u7248\u672c.\u4e3a\u4ec0\u4e48\u4eba\u7c7b\u771f\u7684\u4f1a\u7528\u5230\u8fd9? \u6bcf\u7ec4\u7ea2\u77f3\u7c89\u5927\u7ea6\u4ef7\u503c580k-EU,\u6240\u4ee5\u770b\u770b\u81ea\u5df1\u7684\u4ed3\u5e93\u518d\u505a\u51b3\u5b9a\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK6A==",
                    "title": "\u9178\u4e4b\u65c5",
                    "tooltip": "<strong>\u9178\u4e4b\u65c5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c"
                },
                {
                    "name": "\u8fd9\u4e0d\u662f\u53bb\u592a\u7a7a\u7684\u8def",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2762.png",
                    "x": 336.0,
                    "y": 300.0,
                    "data": "\u8fd9\u53f0\u673a\u5668\u53ef\u4ee5\u5229\u7528\u706b\u7bad\u71c3\u6599\u53d1\u7535.\u60f3\u8981\u77e5\u9053\u600e\u4e48\u9020\u706b\u7bad\u71c3\u6599,\u4f60\u5f97\u53bb\"\u592a\u7a7a\u7ade\u8d5b\"\u7ae0\u8282\u770b\u770b.GT++\u6709\u4e00\u7cfb\u5217\u4e13\u6709\u7684\u706b\u7bad\u71c3\u6599,\u5c06\u5b83\u4eec\u81ea\u52a8\u5316\u53ef\u4ee5\u7528\u6765\u5728\u6b64\u591a\u65b9\u5757\u673a\u5668\u4e2d\u53d1\u7535,\u540c\u65f6\u8fd8\u53ef\u4ee5\u4e3a\u4f60\u63d0\u4f9b\u63a2\u7d22\u661f\u8fb0\u5927\u6d77\u65e0\u5c3d\u7684\u71c3\u6599.</br></br>\u5173\u4e8e\u706b\u7bad\u5f15\u64ce\u7684\u6570\u5b66\u8ba1\u7b97\u975e\u5e38\u590d\u6742.\u8bf7\u67e5\u770b\u63a7\u5236\u5668\u65b9\u5757\u7684tooltip\u4e86\u89e3\u8be6\u60c5,\u4e0d\u8fc7\u5927\u6982\u7684\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a\u63d0\u4f9b\u8db3\u91cf\u7684\u4e8c\u6c27\u5316\u78b3,\u9009\u62e9\u4f60\u60f3\u8981\u83b7\u5f97\u591a\u5c11EU/t\u7684\u8f93\u51fa,\u6839\u636e\u4f7f\u7528\u7684\u71c3\u6599\u79cd\u7c7b\u8ba1\u7b97\u6240\u9700\u7684\u71c3\u6599\u91cf,\u518d\u6839\u636eEU/t\u503c\u63d0\u4f9b\u8db3\u91cf\u7684\u6db2\u6c22\u8fdb\u884c\u589e\u538b.</br></br>\u4f60\u7ec8\u5f52\u4f1a\u5c06\u706b\u7bad\u5f15\u64ce\u589e\u538b\u7684,\u6709\u4ee5\u4e0b\u51e0\u70b9\u539f\u56e0.\u5047\u8bbe\u4f60\u81f3\u5c11\u6709\u4e00\u4e2aIV\u52a8\u529b\u4ed3(\u7f13\u51b2),\u60f3\u8981\u5728\u6b63\u5e38\u6a21\u5f0f\u8f93\u51fa\u63a5\u8fd1\u52a8\u529b\u4ed3\u6781\u9650\u7684\u7535\u529b,\u71c3\u6599\u6548\u7387\u5c06\u4f1a\u8f83\u4f4e,\u4f46\u5728\u589e\u538b\u6a21\u5f0f\u4e0b\u5c31\u4f1a\u597d\u5f88\u591a.\u53e6\u5916,\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u4e0d\u4f1a\u8fde\u7eed\u6d88\u8017\u71c3\u6599,\u800c\u662f\u5728\u6d88\u8017\u548c\u4e0d\u6d88\u8017\u4e4b\u95f4\u95f4\u9694\u4e00\u79d2,\u540c\u65f6\u8f93\u51fa\u7684\u80fd\u91cf\u4fdd\u6301\u4e0d\u53d8.\u800c\u5728\u6b64\u57fa\u7840\u4e0a\u589e\u538b\u53ef\u4ee5\u5e26\u6765\u66f4\u597d\u7684\u71c3\u6599\u6548\u7387.\u914d\u5408\u706b\u7bad\u71c3\u6599\u8d85\u9ad8\u7684\u71c3\u503c,\u706b\u7bad\u5f15\u64ce\u7684\u8f93\u51fa\u529f\u7387\u5c06\u975e\u5e38\u53ef\u89c2.</br></br>\u4e2d\u6587WIKI \u706b\u7bad\u71c3\u6599\u4ea7\u7ebf\uff1a\u00a71\u00a7n[url]https://gtnh.huijiwiki.com/p/742[/url]\u00a7r",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKyg==",
                    "title": "\u8fd9\u4e0d\u662f\u53bb\u592a\u7a7a\u7684\u8def",
                    "tooltip": "<strong>\u8fd9\u4e0d\u662f\u53bb\u592a\u7a7a\u7684\u8def</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)"
                },
                {
                    "name": "\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/194.png",
                    "x": 480.0,
                    "y": 156.0,
                    "data": "\u73b0\u5728\u4f60\u5df2\u7ecf\u521d\u6b65\u638c\u63e1\u4e86\u63a7\u5236\u53cd\u5e94\u5806\u7684\u4e00\u4e9b\u57fa\u672c\u77e5\u8bc6,\u53ef\u4ee5\u5efa\u7acb\u81ea\u5df1\u7684\u53d1\u7535\u7ad9\u4e86.\u65f6\u523b\u4e86\u89e3\u4f60\u7684\u53cd\u5e94\u5806\u7684\u8fd0\u884c\u72b6\u6001\u5341\u5206\u91cd\u8981(\u6216\u8005\u53ef\u80fd\u4f60\u4ec5\u4ec5\u662f\u770b\u4e2d\u4e86\u8fd9\u4e2a\u6f02\u4eae\u7684\u5927\u5c4f\u5e55...).\u6211\u8fd9\u91cc\u6709\u4e9b\u4e1c\u897f\u53ef\u4ee5\u5e2e\u52a9\u5230\u4f60.</br></br>\u5bf9\u7740\u4f60\u60f3\u8981\u76d1\u89c6\u7684\u65b9\u5757\u4f7f\u7528\u4f20\u611f\u5de5\u5177,\u7136\u540e\u628a\u5f97\u5230\u7684\u5361\u7247\u653e\u5728\u663e\u793a\u9762\u677f\u4e2d. \u63a5\u4e0b\u6765,\u9009\u62e9\u8981\u663e\u793a\u7684\u4fe1\u606f\u6761\u76ee.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAwg==",
                    "title": "\u00a7a\u00a7l\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806",
                    "tooltip": "<strong>\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53cd\u5e94\u5806\u6269\u5bb9"
                },
                {
                    "name": "\u5355\u6da1\u8f6eUV\u53d1\u7535",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3165.png",
                    "x": 156.0,
                    "y": 372.0,
                    "data": "\u7b49\u4f60\u5230\u8fbeZPM\u9636\u6bb5,\u53ef\u4ee5\u5236\u9020ZPM\u52a8\u529b\u4ed3\u540e,\u6bcf\u53f0\u6da1\u8f6e\u7684\u8f93\u51fa\u529f\u7387\u53ef\u4ee5\u63d0\u9ad8\u5230524,288-EU/t.\u8fbe\u5230\u8fd9\u4e2a\u6570\u5b57\u540e,\u4f60\u5bf9\u6da1\u8f6e\u6750\u6599\u7684\u9009\u62e9\u9650\u5236\u5df2\u7ecf\u5c11\u5f88\u591a\u4e86,\u5e76\u4e14\u53ef\u4ee5\u663e\u8457\u589e\u52a0\u5355\u5806\u8f93\u51fa\u7684\u603b\u529f\u7387.\u53ea\u8981\u9009\u62e9\u5408\u9002\u7684\u6da1\u8f6e\u6750\u6599,\u4f60\u5c31\u53ef\u4ee5\u75283\u53f0\u5927\u578b\u7b49\u79bb\u5b50\u6da1\u8f6e\u6d88\u5316\u6389\u5355\u5806\u8f93\u51fa\u7684\u6240\u6709\u6c26\u79bb\u5b50,\u5efa\u8bae\u6750\u6599\u5982\u4e0b:</br></br>\u5927\u578b\u9ad8\u8010\u4e45\u6027\u590d\u5408\u94a2\u6da1\u8f6e,\u6548\u7387230\uff05,\u8f93\u51fa\u529f\u7387202,860-EU/t</br>\u5927\u578b\u539f\u5b50\u5206\u79bb\u50ac\u5316\u5242\u6da1\u8f6e,\u6548\u7387200\uff05,\u8f93\u51fa\u529f\u7387399,672-EU/t</br>\u5927\u578b\u7cbe\u91d1\u6da1\u8f6e,\u6548\u7387180\uff05,\u8f93\u51fa\u529f\u7387170,010-EU/t</br>\u5927\u578b\u9f99\u952d\u6da1\u8f6e,\u6548\u7387170\uff05,\u8f93\u51fa\u529f\u7387214,200-EU/t(\u8010\u4e45\u9ad8)</br>\u5927\u578b\u4e2d\u5b50\u6da1\u8f6e,\u6548\u7387160\uff05,\u8f93\u51fa\u529f\u7387241,920-EU/t(\u8010\u4e45\u6781\u9ad8)</br></br>\u6839\u636e\u4f60\u4f7f\u7528\u6da1\u8f6e\u7684\u4e0d\u540c,\u6700\u7ec8\u7684\u6548\u7387\u4e0e\u8f93\u51fa\u529f\u7387\u4f1a\u6709\u5f88\u5927\u5dee\u5f02.\u4ee5\u4e0a\u6240\u5217\u6750\u6599\u4e2d,\u7075\u5b9d\u548c\u4e2d\u5b50\u6da1\u8f6e\u7684\u8010\u4e45\u6781\u9ad8,\u57fa\u672c\u53ef\u4ee5\u8fd1\u4e4e\u6c38\u4e45\u4f7f\u7528,\u800c\u53e6\u4e00\u4e9b\u6548\u7387\u66f4\u9ad8\u4f46\u9700\u8981\u65f6\u4e0d\u65f6\u8fdb\u884c\u66f4\u6362. \u5982\u679c\u4f60\u60f3\u8981\u5355\u6da1\u8f6e\u8f93\u51fa\u5c3d\u53ef\u80fd\u9ad8\u7684\u529f\u7387,\u5c3d\u53ef\u80fd\u8feb\u8fd1\u52a8\u529b\u4ed3\u7684\u6781\u9650\u7684\u8bdd,\u53ef\u4ee5\u63d0\u9ad8\u7b49\u79bb\u5b50\u4f53\u7684\u6d41\u91cf,\u4f46\u4e00\u5b9a\u8981\u5c0f\u5fc3!\u5343\u4e07\u4e0d\u8981\u8d85\u51fa\u52a8\u529b\u4ed3\u7684\u6781\u9650,\u800c\u4e14\u6d41\u91cf\u8d85\u8fc7\u6700\u4f73\u6d41\u91cf\u540e,\u968f\u7740\u6d41\u91cf\u7684\u8fdb\u4e00\u6b65\u63d0\u5347,\u6548\u7387\u4f1a\u9010\u6e10\u964d\u4f4e.\u66f4\u5177\u4f53\u7684\u6548\u7387\u635f\u5931\u503c,\u53ef\u4ee5\u5728LuV\u4efb\u52a1\u7ae0\u8282\u4e2d\u7684\"\u6da1\u8f6e\u65f6\u95f4\"\u4efb\u52a1\u5185\u627e\u5230.</br></br>\u5236\u9020\u4e00\u4e2aZPM\u52a8\u529b\u4ed3(\u666e\u901a\u6216\u7f13\u51b2\u7684)\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMXQ==",
                    "title": "\u5355\u6da1\u8f6eUV\u53d1\u7535",
                    "tooltip": "<strong>\u5355\u6da1\u8f6eUV\u53d1\u7535</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5355\u5806\u53d1\u7535\u91cf\u662f\u591a\u5c11?"
                },
                {
                    "name": "\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1900.png",
                    "x": 480.0,
                    "y": 300.0,
                    "data": "\u71c3\u6599\u68d2\u7ed3\u675f\u4e00\u4e2a\u5468\u671f\u540e\u4f1a\u53d8\u4e3a\u67af\u7aed\u7684\u71c3\u6599\u68d2.\u4f60\u53ef\u4ee5\u5c06\u5176\u70ed\u79bb\u4ee5\u56de\u6536\u90e8\u5206\u6750\u6599. \u6839\u636e\u71c3\u6599\u68d2\u7684\u4e0d\u540c,\u83b7\u5f97\u7684\u7269\u54c1\u4e5f\u4e0d\u540c,\u8bf7\u67e5\u770bNEI\u6216wiki\u4ee5\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHbA==",
                    "title": "\u00a7a\u00a7l\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39",
                    "tooltip": "<strong>\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))"
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1138.png",
                    "x": 444.0,
                    "y": 156.0,
                    "data": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u6839\u636e\u4e0d\u540c\u7684\u98ce\u529b,\u7535\u529b\u8f93\u51fa\u4e5f\u4f1a\u968f\u4e4b\u53d8\u5316,\u867d\u7136\u67d0\u4e9b\u56e0\u7d20\u53ef\u4ee5\u6539\u53d8\u8fd9\u4e00\u70b9.</br></br>\u548c\u98ce\u8f66\u4e0d\u540c,\u4e3a\u4e86\u4fdd\u8bc1\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u7684\u6b63\u5e38\u8fd0\u8f6c,\u4f60\u9700\u8981\u7ecf\u5e38\u7ef4\u62a4\u8f6c\u5b50.</br>\u4e00\u65e6\u8f6c\u5b50\u653e\u7f6e\u5728GUI\u4e2d,\u4f60\u9700\u8981\u786e\u5b9a\u98ce\u673a\u7684\u7ed3\u6784\u62e5\u6709\u8db3\u591f\u7684\u7a7a\u95f4,\u5e76\u4e14\u5f53\u524d\u4f4d\u7f6e\u7684\u98ce\u529b\u6c34\u5e73\u8db3\u591f\u542f\u52a8\u5f53\u524d\u7684\u8f6c\u5b50.\u5982\u679c\u8fd9\u4e9b\u6761\u4ef6\u90fd\u6ee1\u8db3,\u90a3\u4e48\u98ce\u673a\u5c31\u4f1a\u5f00\u59cb\u4ea7\u751f\u52a8\u80fd.</br></br>\u5c06\u52a8\u80fd\u53d1\u7535\u673a\u8d34\u5230\u98ce\u673a\u6b63\u786e\u7684\u9762(\u9ed1\u8272\u5706\u5708),\u52a8\u80fd\u53d1\u7535\u673a\u5c31\u4f1a\u5f00\u59cb\u5c06\u52a8\u80fd\u8f6c\u5316\u6210\u7535\u80fd.</br></br>\u5173\u4e8e\u98ce:</br>\u9996\u5148,\u67d0\u4e00\u4e2a\u5730\u533a\u7684\u98ce\u529b\u5f3a\u5ea6\u53d7\u52303\u4e2a\u56e0\u7d20\u7684\u5f71\u54cd:\u9ad8\u5ea6\u3001\u5929\u6c14\u548c\u968f\u673a\u6027.Y\u8f74\u8d8a\u9ad8,\u98ce\u529b\u5c31\u8d8a\u5f3a.\u5982\u679cY\u8f74\u4f4e\u4e8e64,\u90a3\u4e48\u4f60\u5c06\u6ca1\u6709\u8db3\u591f\u7684\u98ce\u80fd\u53ef\u4ee5\u5229\u7528,\u98ce\u673a\u4e5f\u4e0d\u4f1a\u542f\u52a8.\u5929\u6c14\u4e5f\u4f1a\u4e0d\u540c\u7a0b\u5ea6\u7684\u589e\u5f3a\u98ce\u529b\uff1b\u96e8\u5929\u5c06\u4f1a\u5c06\u4f1a\u6bd4\u6b63\u5e38\u63d0\u9ad820\uff05\u7684\u98ce\u529b,\u96f7\u96e8\u5929\u5c06\u4f1a\u63d0\u9ad8\u523050\uff05.\u6700\u540e\u968f\u673a\u6027\u5c06\u4f1a\u4f7f\u98ce\u529b\u5f3a\u5ea6\u8fdb\u884c\u4e0d\u89c4\u5f8b\u7684\u968f\u673a\u53d8\u5316,\u4f46\u662f\u8fd9\u4e2a\u968f\u673a\u53d8\u5316\u5c06\u4f1a\u9650\u5236\u5728\u4e00\u4e2a\u6bd4\u8f83\u6709\u9650\u7684\u8303\u56f4\u5185.</br></br>\u68c0\u67e5\u4e00\u4e2a\u4f4d\u7f6e\u7684\u98ce\u529b\u6c34\u5e73\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5c31\u662f\u7528\u98ce\u529b\u8ba1.</br>Y\u8f74\u5728160\u7684\u9ad8\u5ea6\u6700\u5f3a,\u800c\u5efa\u9020\u7684\u6700\u9ad8\u9650\u5236Y",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEcg==",
                    "title": "\u00a79\u00a7l\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "tooltip": "<strong>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52a8\u80fd\u53d1\u7535\u673a(HV)"
                },
                {
                    "name": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(HV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2821.png",
                    "x": 660.0,
                    "y": 156.0,
                    "data": "\u8fd9\u662fHV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALBQ==",
                    "title": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(HV)",
                    "tooltip": "<strong>\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(HV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u529b\u573a\u53d1\u751f\u5668(MV)</br>\u4fe1\u6807"
                },
                {
                    "name": "\u592a\u9633\u80fd",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/933.png",
                    "x": 12.0,
                    "y": 12.0,
                    "data": "\u73b0\u5728\u6211\u4eec\u5e94\u8be5\u7814\u7a76\u4e00\u4e9b\u522b\u7684\u53ef\u518d\u751f\u80fd\u6e90\u4e86.\u8ba9\u6211\u4eec\u4ece\u592a\u9633\u80fd\u5f00\u59cb,\u6700\u4f4e\u7b49\u7ea7\u7684\u592a\u9633\u80fd\u677f\u53d1\u7535\u91cf\u662f1EU/t.\u8fd9\u4e9b\u592a\u9633\u80fd\u677f\u53ef\u4ee5\u4f5c\u4e3a\u5927\u90e8\u5206GT\u673a\u5668\u7684\u8986\u76d6\u677f\u4f7f\u7528,\u8ba9\u8fd9\u4e9b\u673a\u5668\u80fd\u4ece\u592a\u9633\u4e2d\u83b7\u53d6\u80fd\u6e90(\u4f46\u524d\u63d0\u662f\u5b83\u53ef\u4ee5\u770b\u89c1\u592a\u9633,\u5373\u9876\u90e8\u6ca1\u6709\u4e0d\u900f\u660e\u906e\u6321).</br></br>\u5343\u4e07\u8bb0\u4f4f\u6321\u96e8,\u5728\u673a\u5668\u4e0a\u65b9\u653e\u4e00\u5c42\u73bb\u7483,\u4e5f\u522b\u5fd8\u4e86\u673a\u5668\u7d27\u90bb\u7684\u65b9\u5757\u4e5f\u4e0d\u80fd\u6dcb\u96e8.</br></br>[note]\u94dd\u94c1\u677f\u9700\u8981MV\u51b2\u538b\u673a\u5e8a.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADpQ==",
                    "title": "\u00a76\u00a7l\u592a\u9633\u80fd",
                    "tooltip": "<strong>\u592a\u9633\u80fd</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u6676\u5706"
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2807.png",
                    "x": 408.0,
                    "y": 192.0,
                    "data": "\u8fd9\u662fEV\u7248\u672c,\u5176\u5de5\u4f5c\u539f\u7406\u76f8\u540c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK9w==",
                    "title": "\u00a79\u00a7l\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "tooltip": "<strong>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)</br>\u94a8\u94a2"
                },
                {
                    "name": "\u5730\u70ed\u5f15\u64ce(EV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2798.png",
                    "x": 588.0,
                    "y": 228.0,
                    "data": "\u4ee5\u76f8\u5f53\u4f4e\u6548\u7684\u8f6c\u5316\u7387,\u5c06\u5ca9\u6d46\u8f6c\u5316\u4e3a\u80fd\u91cf.\u53e6\u5916,\u4f3c\u4e4e\u4ea7\u751f\u7684\u6c61\u67d3\u6bd4\u5b83\u8bf4\u7684\u8981\u591a...\u800c\u4e14\u76f8\u6bd4\u4e8e\u5b83\u7684\u8f93\u51fa\u7535\u538b,\u5236\u9020\u5b83\u7684\u6750\u6599\u8fd8\u8981\u9ad82\u4e2a\u7535\u538b\u7b49\u7ea7.\u4ee5\u4e0a.</br></br>[note]\u5730\u70ed\u80fd\u4e0d\u662f\u5e94\u8be5\u5bf9\u73af\u5883\u53cb\u597d\u5417?[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK7g==",
                    "title": "\u5730\u70ed\u5f15\u64ce(EV)",
                    "tooltip": "<strong>\u5730\u70ed\u5f15\u64ce(EV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "name": "\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2818.png",
                    "x": 48.0,
                    "y": 372.0,
                    "data": "\u53ef\u8f93\u51fa10,000,000-33,554,432EU/t.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALAg==",
                    "title": "\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)",
                    "tooltip": "<strong>\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)</br>\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf"
                },
                {
                    "name": "\u6563\u70ed1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/197.png",
                    "x": 552.0,
                    "y": 192.0,
                    "data": "\u4f60\u4e0d\u80fd\u8ba9\u70ed\u91cf\u805a\u96c6\u5728\u53cd\u5e94\u5806\u5185\u90e8,\u6700\u7ec8\u4f60\u9700\u8981\u5c06\u53cd\u5e94\u5806\u5185\u90e8\u7684\u70ed\u91cf\u6563\u53d1\u7684\u5927\u6c14\u4e2d. \u4e0d\u540c\u7684\u6563\u70ed\u7247\u6709\u4e0d\u540c\u7684\u6563\u70ed\u80fd\u529b,\u4f60\u9700\u8981\u627e\u51fa\u54ea\u4e00\u79cd\u6563\u70ed\u7247\u9002\u5408\u7528\u5728\u4f60\u8bbe\u8ba1\u7684\u53cd\u5e94\u5806\u4e2d. \u4e0e\u5176\u4ed6\u4efb\u52a1\u4e00\u6837,\u8981\u4e48\u901a\u8bfbwiki\u540e\u8bd5\u7740\u7406\u89e3\u53cd\u5e94\u5806\u7684\u5de5\u4f5c\u539f\u7406,\u8981\u4e48\u76f4\u63a5\u6284\u4f5c\u4e1a...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAxQ==",
                    "title": "\u00a7a\u00a7l\u6563\u70ed",
                    "tooltip": "<strong>\u6563\u70ed1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(LuV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2795.png",
                    "x": 300.0,
                    "y": 264.0,
                    "data": "\u8fd9\u662fLuV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK6w==",
                    "title": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(LuV)",
                    "tooltip": "<strong>\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(LuV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u89c9\u5f97\u53d1\u5c04\u5668\u5df2\u7ecf\u591f\u7cdf\u7cd5\u4e86\uff1f"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ULV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/934.png",
                    "x": 12.0,
                    "y": 48.0,
                    "data": "\u4e0b\u4e00\u4e2a\u7b49\u7ea7\u7684\u592a\u9633\u80fd\u677f\u7b49\u7ea7\u662fULV\u7ea7,\u4ed6\u4eec\u53ef\u4ee5\u63d0\u4f9b8EU/t\u7684\u80fd\u6e90.\u540c\u6837\u4ed6\u4eec\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5927\u90e8\u5206\u683c\u96f7\u673a\u5668\u7684\u8986\u76d6\u677f\u4f7f\u7528.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADpg==",
                    "title": "\u00a76\u00a7l\u592a\u9633\u4e4b\u529b(ULV)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(ULV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u80fd"
                },
                {
                    "name": "\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1896.png",
                    "x": 516.0,
                    "y": 264.0,
                    "data": "\u8fd9\u4e9b...\u4e0d\u592a\u503c.\u5b8c\u5168\u53ef\u4ee5\u5c06\u5bcc\u96c6\u7845\u5ca9\u62ff\u53bb\u505a\u522b\u7684,\u6bd4\u5982\u653e\u8fdb\u7845\u5ca9\u53cd\u5e94\u5806\u53d1\u7535.\u5b83\u4eec\u5728\u6838\u53cd\u5e94\u5806\u4e2d\u7684\u5de5\u4f5c\u539f\u7406,\u4e0e\u94c0\u00a7o\u5b8c\u5168\u00a7r\u76f8\u540c,\u53ea\u662f\u6d88\u8017\u7684\u6750\u6599\u4e0e\u8f93\u51fa\u80fd\u91cf\u6709\u6240\u533a\u522b.</br></br>[note]PS\uff1a\u901a\u8fc7\u79bb\u5fc3\u7845\u5ca9\u7c89\u6216\u662f\u5904\u7406\u77ff\u77f3\u90fd\u53ef\u4ee5\u83b7\u5f97\u5bcc\u96c6\u7845\u5ca9(Nq+).[/note]</br></br>[note]\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u7845\u5ca9\u71c3\u6599\u68d2\u662f\u7528\u5bcc\u96c6\u7845\u5ca9\u505a\u7684...\u8fd9\u662f\u4e2a\u597d\u95ee\u9898![/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHaA==",
                    "title": "\u00a7b\u00a7l\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9",
                    "tooltip": "<strong>\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u5757\u7845\u5ca9\u952d</br>\u6807\u51c6\u6838\u71c3\u6599:\u94c0"
                },
                {
                    "name": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1899.png",
                    "x": 480.0,
                    "y": 264.0,
                    "data": "\u9700\u8981\u66f4\u591a\u80fd\u91cf?\u4f55\u4e0d\u5c06\u71c3\u6599\u68d2\u7ed3\u5408\u8d77\u6765?\u4e8c\u8054\u71c3\u6599\u68d2\u53ef\u4ee5\u4ea7\u751f\u66f4\u591a\u80fd\u91cf(\u5e76\u4e0d\u4e00\u5b9a\u662f\u53cc\u500d,\u8fd9\u56e0\u71c3\u6599\u68d2\u7c7b\u578b\u800c\u5f02)\u4ee5\u53ca\u66f4\u591a\u70ed\u91cf(\u540c\u6837\u975e\u53cc\u500d),\u5374\u53ea\u5360\u7528\u4e00\u4e2a\u683c\u5b50.\u4f60\u9700\u8981\u66f4\u590d\u6742\u7684\u8bbe\u8ba1\u6765\u5904\u7406\u5b83\u4eec,\u4f46\u4f60\u5df2\u7ecf\u51c6\u5907\u597d\u4e86,\u5bf9\u5427?</br></br>\u6240\u4ee5\u4f55\u4e0d\u66f4\u8fdb\u4e00\u6b65,\u53cc\u500d\u53cc\u500d\u540e\u53d8\u4e3a\u56db\u500d(4x)?\u56db\u8054\u71c3\u6599\u68d2\u4f1a\u4ea7\u751f\u66f4\u591a\u66f4\u591a\u7684\u80fd\u91cf\u548c\u70ed\u91cf,\u5176\u4ed6\u5de5\u4f5c\u539f\u7406\u57fa\u672c\u76f8\u540c(\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHaw==",
                    "title": "\u00a7a\u00a7l\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))",
                    "tooltip": "<strong>\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u57fa\u7840\u6838\u71c3\u6599:\u948d"
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(IV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2780.png",
                    "x": 264.0,
                    "y": 228.0,
                    "data": "\u8fd9\u662fIV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK3A==",
                    "title": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(IV)",
                    "tooltip": "<strong>\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(IV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f00\u59cb\u805a\u53d8</br>\u83b7\u5f97\u94d5"
                },
                {
                    "name": "\u7279\u5927\u8d85\u4e34\u754c\u84b8\u6c7d\u6da1\u8f6e",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6562319546724824113.png",
                    "x": 120.0,
                    "y": 444.0,
                    "data": "\u53ef\u7528\u7684\u6700\u4e3a\u81f4\u5bc6\u7684\u84b8\u6c7d.\u67e5\u9605\u4e0a\u65b9\u7684\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e\u7ae0\u8282\u6765\u4e86\u89e3\u6240\u6709\u6da1\u8f6e\u5171\u901a\u7684\u8fd0\u4f5c\u65b9\u5f0f.</br></br>\u5728\u4f7f\u7528GTNH\u4e2d\u6700\u597d\u7684\u6da1\u8f6e\u6750\u6599\u65f6,\u8be5\u6da1\u8f6e\u4f1a\u51fa\u73b0\u610f\u6599\u4e4b\u5916\u7684\u4e0e\u6574\u578b\u6570\u636e\u9650\u5236\u76f8\u5173\u7684bug.\u5728\u6bcftick\u8f6c\u8fd0\u6570\u5341\u4ebf\u8d85\u4e34\u754c\u84b8\u6c7d\u53ef\u80fd\u4e5f\u4f1a\u6709\u5176\u4ed6\u9650\u5236.\u5728\u5c1d\u8bd5\u7ed9\u8be5\u6da1\u8f6e\u53d1\u7535\u673a\u63d0\u4f9b\u7ec8\u6781\u6750\u6599\u6da1\u8f6e\u65f6\u8fd8\u8bf7\u7559\u610f\u76f8\u5173bug.",
                    "quest_id": "bz_RazGFSl6k7fUkEt1Lzw==",
                    "title": "\u7279\u5927\u8d85\u4e34\u754c\u84b8\u6c7d\u6da1\u8f6e",
                    "tooltip": "<strong>\u7279\u5927\u8d85\u4e34\u754c\u84b8\u6c7d\u6da1\u8f6e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c7\u9636\u6bb5(ZPM)"
                },
                {
                    "name": "4\u9636\u7ebf\u5708",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5155982425555565036.png",
                    "x": 372.0,
                    "y": 444.0,
                    "data": "\u8fd9\u6b21\u5347\u7ea7\u80fd\u8ba9\u4f60\u6bd4\u4ee5\u524d\u66f4\u5feb\u7684\u751f\u4ea7\u71c3\u6599\u4e14\u5141\u8bb8\u4e86\u4e00\u4e2a\u751f\u4ea7MKVI\u71c3\u6599\u7684\u53ef\u9009\u914d\u65b9!</br>...\u4f46\u662f\u4f60\u771f\u7684\u9700\u8981\u5b83\u4e48?",
                    "quest_id": "KlI9Fbh9SsK4ckVNMJqGFA==",
                    "title": "4\u9636\u7ebf\u5708",
                    "tooltip": "<strong>4\u9636\u7ebf\u5708</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>3\u9636\u7ebf\u5708"
                },
                {
                    "name": "\u6da1\u8f6e\u4ed3",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5852276776698153963.png",
                    "x": 192.0,
                    "y": 336.0,
                    "data": "\u5728UV\u4f60\u89e3\u9501\u4e86\u7ed9\u6da1\u8f6e\u81ea\u52a8\u91cd\u88c5\u8f6c\u5b50\u7684\u80fd\u529b.</br></br>\u7279\u5927\u6da1\u8f6e\u5219\u80fd\u66f4\u65e9\u7684\u9ed8\u8ba4\u91cd\u88c5\u8f6c\u5b50...",
                    "quest_id": "J2ok3rFLS7quyIlHPaN0FQ==",
                    "title": "\u6da1\u8f6e\u4ed3",
                    "tooltip": "<strong>\u6da1\u8f6e\u4ed3</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535</br>\u7b2c8\u9636\u6bb5(UV)"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(EV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1672.png",
                    "x": 12.0,
                    "y": 192.0,
                    "data": "\u4f60\u53ef\u4ee5\u5236\u4f5c\u7684\u4e0b\u4e00\u4e2a\u592a\u9633\u80fd\u8986\u76d6\u677f\u662fEV\u7b49\u7ea7\u7684.\u5b83\u6700\u591a\u4ea7\u751f2048EU/t.\u53ef\u4ee5\u7528\u4f5c\u5927\u591a\u6570GT\u673a\u5668\u7684\u8986\u76d6\u677f. \u9996\u5148,\u4f60\u9700\u8981\u751f\u4ea7\u56db\u91cd\u9633\u5149\u5316\u5408\u7269\u677f. \u5236\u4f5c\u8fd9\u79cd\u592a\u9633\u80fd\u8986\u76d6\u677f\u9700\u8981\u65e0\u5c3d\u8d2a\u5a6a\u76849x9\u7ec8\u6781\u5de5\u4f5c\u53f0.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGiA==",
                    "title": "\u00a7b\u00a7l\u592a\u9633\u4e4b\u529b(EV)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(EV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6700\u540e--\u805a\u82ef\u5e76\u54aa\u5511!</br>\u7845\u5ca9\u63ba\u6742\u7684\u6676\u5706</br>\u592a\u9633\u4e4b\u529b(HV)"
                },
                {
                    "name": "\u68d8\u624b\u7684\u6838\u71c3\u6599II\uff1a\u8d85\u80fd\u7845\u5ca9",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1897.png",
                    "x": 552.0,
                    "y": 264.0,
                    "data": "\u5b83\u4eec\u540c\u6837\u610f\u4e49\u4e0d\u5927,\u6211\u53ea\u60f3\u628a\u6750\u6599\u8fd8\u7ed9\u4f60... \u4e0e\u666e\u901aMOX\u7684\u533a\u522b\u4ec5\u4ec5\u662f\u6750\u6599\u548c\u8f93\u51fa\u4e0d\u540c.</br></br>[note]PS\uff1a\u901a\u8fc7\u79bb\u5fc3\u7845\u5ca9\u7c89\u6216\u5bcc\u96c6\u7845\u5ca9\u7c89\u3001\u5904\u7406\u77ff\u7269,\u6216\u70ed\u529b\u79bb\u5fc3\u67af\u7aed\u7845\u5ca9\u71c3\u6599\u68d2\u90fd\u53ef\u4ee5\u83b7\u5f97\u8d85\u80fd\u7845\u5ca9(Nq*).[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHaQ==",
                    "title": "\u68d8\u624b\u7684\u6838\u71c3\u6599II\uff1a\u8d85\u80fd\u7845\u5ca9",
                    "tooltip": "<strong>\u68d8\u624b\u7684\u6838\u71c3\u6599II\uff1a\u8d85\u80fd\u7845\u5ca9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u68d8\u624b\u7684\u6838\u71c3\u6599\uff1aMOX"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(UV)1x1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2587.png",
                    "x": 48.0,
                    "y": 336.0,
                    "data": "\u767d\u5929\u65f6\u4ea7\u751f1A\u7684UV\u7535. \u5982\u679c\u4f60\u7684\u57fa\u5730\u6240\u5728\u7ef4\u5ea6\u662f\u6c38\u663c\u7684\u8bdd\u90a3\u5c31\u592a\u68d2\u4e86(\u6bd4\u5982\u82b1\u56ed\u4e16\u754c).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKGw==",
                    "title": "\u592a\u9633\u4e4b\u529b(UV)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(UV)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(UV)</br>\u7535\u8def\u677f\u5927\u5e08"
                },
                {
                    "name": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(LV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2788.png",
                    "x": 228.0,
                    "y": 84.0,
                    "data": "\u4f60\u53ef\u80fd\u6536\u96c6\u4e86\u5927\u91cf\u7684\u6742\u915a\u6cb9,\u5374\u51e0\u4e4e\u6ca1\u6709\u600e\u4e48\u7528\u5b83.\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e00\u70b9,\u5236\u9020\u4e00\u53f0\u534a\u6d41\u8d28\u53d1\u7535\u673a,\u7136\u540e\u5c06\u6742\u915a\u6cb9\u4f5c\u4e3a\u84b8\u6c7d\u5916\u7684\u7b2c\u4e8c\u80fd\u6e90\u5427!\u5355\u65b9\u5757\u53d1\u7535\u673a\u53ea\u4f1a\u5728\u6709EU\u9700\u6c42\u65f6\u4f7f\u7528\u71c3\u6599,\u6240\u4ee5\u5982\u679c\u4f60\u6ca1\u6709\u6d88\u8017\u8db3\u591f\u7684EU,\u53ef\u80fd\u6700\u7ec8\u6742\u915a\u6cb9\u4f1a\u585e\u6ee1\u4f60\u7684\u7f13\u5b58.</br></br>\u60f3\u8981\u5c06\u4f60\u7126\u7089\u4e2d\u7684\u6742\u915a\u6cb9\u63d0\u53d6\u51fa\u6765,\u4f60\u53ef\u4ee5\u624b\u52a8\u4f7f\u7528\u6876\u6216\u5355\u5143,\u6216\u8005\u901a\u8fc7\u5320\u9b42\u7684\u6d47\u6ce8\u53e3\u5bfc\u5165GT\u6d41\u4f53\u7ba1\u9053,\u53c8\u6216\u8005\u4f7f\u7528\u7535\u52a8\u6cf5\u8986\u76d6\u677f.</br></br>\u71c3\u70e7\u6742\u915a\u6cb9\u7684\u65b9\u6cd5\u8fd8\u6709\u4e0d\u5c11,\u6bd4\u65b9\u8bf4RC\u7684\u6db2\u6001\u71c3\u70e7\u5ba4,\u4e0d\u8fc7\u534a\u6d41\u8d28\u53d1\u7535\u673a\u4fbf\u5b9c\u5f97\u591a,\u4f7f\u7528\u4e5f\u66f4\u52a0\u65b9\u4fbf,\u540c\u65f6\u6548\u7387\u4e5f\u76f8\u5f53\u51fa\u8272(\u5c31\u6742\u915a\u6cb9\u800c\u8a00,\u662f\u5185\u71c3\u53d1\u7535\u673a\u76846\u500d).",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK5A==",
                    "title": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(LV)",
                    "tooltip": "<strong>\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(LV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#3"
                },
                {
                    "name": "\u98ce\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1341.png",
                    "x": 624.0,
                    "y": 84.0,
                    "data": "\u7518\u8517\u80fd\u53d1\u7535\u5417\uff1f\u8fd9\u53f0\u53d1\u7535\u673a\u4f7f\u7528\u98ce\u4e4b\u6e90\u8d28\u8fd0\u884c,\u5b83\u53ef\u80fd\u4e0d\u5982\u5b83\u7684\u540c\u7c7b\u5f3a\u5927,\u4f46\u71c3\u6599\u5f88\u4fbf\u5b9c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFPQ==",
                    "title": "\u98ce\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "tooltip": "<strong>\u98ce\u4e4b\u6e90\u8d28\u53d1\u7535\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1139.png",
                    "x": 408.0,
                    "y": 156.0,
                    "data": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u9700\u8981\u901a\u8fc7\u6c34\u5728\u6cb3\u6d41\u6216\u8005\u6d77\u6d0b\u4e2d\u7684\u6d41\u52a8\u6765\u4ea7\u751f\u52a8\u80fd. \u548c\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e00\u6837,\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e5f\u9700\u8981\u4f7f\u7528\u6728\u3001\u94c1\u3001\u94a2\u3001\u78b3\u5236\u8f6c\u5b50\u6216\u8005\u4f7f\u7528GT++\u7684\u6750\u6599.</br></br>\u5982\u679c\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u7684\u8f6c\u5b50\u4e0d\u662f\u5b8c\u5168\u6d78\u6ca1\u5728\u6c34\u4e2d,\u5219\u673a\u5668\u4f1a\u63d0\u9192\u4f60\"\u8f6c\u5b50\u6ca1\u6709\u8db3\u591f\u7684\u7a7a\u95f4\".\u5982\u679c\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e0d\u662f\u653e\u7f6e\u5728\u6cb3\u6d41\u3001\u6d77\u6d0b\u6216\u6df1\u6d77\u751f\u7269\u7fa4\u7cfb,\u90a3\u4e48\u673a\u5668\u4f1a\u63d0\u9192\u4f60\"\u5fc5\u987b\u653e\u7f6e\u5728\u6cb3\u6d41\u548c\u6d77\u6d0b\u751f\u7269\u7fa4\u7cfb\".\u67e5\u770bDiscord\u4e0a\u7684\u6e38\u620f\u673a\u5236\u8868\u683c,\u4f60\u80fd\u627e\u5230\u751f\u7269\u7fa4\u7cfb\u53ca\u5176\u6807\u7b7e\u7684\u5217\u8868.</br></br>\u867d\u7136\u4e0d\u592a\u65b9\u4fbf,\u4f46\u6c34\u529b\u53d1\u7535\u673a\u8fd0\u884c\u66f4\u52a0\u7a33\u5b9a.</br></br>[warn]\u4f60\u53ef\u4ee5\u901a\u8fc7\u5deb\u672f\u6765\u8f6c\u6362\u751f\u7269\u7fa4\u7cfb.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEcw==",
                    "title": "\u00a79\u00a7l\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "tooltip": "<strong>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u52a8\u80fd\u53d1\u7535\u673a(HV)"
                },
                {
                    "name": "\u53cd\u5e94\u5806\u6269\u5bb9",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/195.png",
                    "x": 516.0,
                    "y": 156.0,
                    "data": "\u60f3\u8981\u91ca\u653e\u53cd\u5e94\u5806\u5168\u90e8\u7684\u6f5c\u529b,\u4f60\u5c31\u9700\u8981\u7ed9\u4f60\u7684\u53cd\u5e94\u5806\u52a0\u88c56\u4e2a\u53cd\u5e94\u4ed3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAww==",
                    "title": "\u00a7a\u00a7l\u53cd\u5e94\u5806\u6269\u5bb9",
                    "tooltip": "<strong>\u53cd\u5e94\u5806\u6269\u5bb9</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "name": "\u57fa\u7840\u6838\u71c3\u6599:\u948d",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/193.png",
                    "x": 480.0,
                    "y": 228.0,
                    "data": "\u948d\u71c3\u6599\u68d2\u662f\u6240\u6709\u71c3\u6599\u68d2\u91cc\u9762\u6700\u5f31\u7684\u4e00\u4e2a.\u4f46\u662f\u4f18\u70b9\u662f\u5f88\u5bb9\u6613\u751f\u4ea7,\u800c\u4e14\u6bd4\u8f83\u597d\u63a7\u5236\u5806\u6e29,\u8fd0\u884c\u65f6\u95f4\u5f88\u957f(\u662f\u94c0\u68d2\u76842\u500d).\u751a\u81f3\u5728\u70e7\u5b8c\u540e\u8fd8\u4f1a\u8fd4\u8fd81/3\u7684\u948d! \u6240\u4ee5\u7528\u948d\u53ef\u4ee5\u505a\u4e00\u4e2a\u5b8c\u7f8e\u7684\"\u4e00\u52b3\u6c38\u9038\"\u7684\u7535\u529b\u4f9b\u5e94\u88c5\u7f6e.</br></br>[warn]\u8bf7\u6ce8\u610f:\u5f53\u948d\u71c3\u6599\u68d2\u8017\u5c3d\u540e,\u4f60\u53ef\u4ee5\u79bb\u5fc3\u5b83\u83b7\u5f97\u9565,\u800c\u9565\u662f\u805a\u53d8\u83b7\u5f97\u9545\u7684\u00a7l\u539f\u6599\u00a7r\u00a74.</br>\u867d\u7136\u4f60\u53ea\u6709\u5230UV\u9636\u6bb5\u624d\u4f1a\u9700\u8981\u9545,\u4f46\u4f60\u73b0\u5728\u5c31\u53ef\u4ee5\u5f00\u59cb\u56e4\u79ef\u9565\u4e86,\u800c\u4e14\u4f60\u8fd8\u80fd\u83b7\u5f97\u7535\u529b,\u4f55\u4e50\u800c\u4e0d\u4e3a?[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAwQ==",
                    "title": "\u00a7a\u00a7l\u57fa\u7840\u6838\u71c3\u6599:\u948d",
                    "tooltip": "<strong>\u57fa\u7840\u6838\u71c3\u6599:\u948d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkVI",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5931115528477845082.png",
                    "x": 516.0,
                    "y": 408.0,
                    "data": "\u6bcfmB\u4ea7\u51fa2,077,795,200EU/t,\u6301\u7eed12s. \u76f8\u5f53\u79bb\u8c31\u7684\u53d1\u7535, \u4e5f\u6709\u76f8\u5f53\u79bb\u8c31\u7684\u6d88\u8017. \u8fd9\u6761\u4ea7\u7ebf\u9700\u8981\u5927\u91cf\u7684\u57fa\u5efa, \u4e0d\u8fc7\u80fd\u591f\u4ea7\u51fa\u6570\u4ee5\u4e07\u4ebf\u8ba1\u7684EU/t.</br></br>\u914d\u65b9\u6240\u9700\u7684\u661f\u4f53\u949b\u548c\u5929\u4f53\u94a8\u53ef\u4ee5\u4ece\u6fc0\u5149\u8680\u523b\u6216\u8005\u7b49\u79bb\u5b50\u7ebf\u4ea7\u51fa.</br></br>\u4e09\u949b\u53ef\u4ee5\u901a\u8fc7\u805a\u53d8\u6216\u8005DD\u91c7\u77ff\u4ea7\u51fa. </br></br>\u8c03\u5f8b\u6e90\u91d1\u9700\u8981\u5927\u91cf\u7684\u805a\u53d8\u548cDTPF\u6765\u7ef4\u6301\u4ea7\u51fa.</br></br>\u5728\u62e5\u6709\u9e3f\u8499\u4e4b\u773c\u4ee5\u540e, \u4f60\u53ef\u4ee5\u4f7f\u7528\u767d\u77ee\u661f\u7269\u8d28\u6765\u63d0\u9ad8\u4ea7\u7387\u4ee5\u4ea7\u51fa\u66f4\u591a\u7684\u80fd\u91cf. </br></br>\u8981\u5f97\u5230\u6700\u9ad8\u7684MKVI\u71c3\u6599\u4ea7\u51fa, \u4f60\u8fd8\u5f97\u8003\u8651\u4f7f\u7528\u5bcc\u5feb\u5b50\u65f6\u95f4\u6d41\u4f53.",
                    "quest_id": "KHL_yx4XTKOtsHHZ60ZZpg==",
                    "title": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkVI",
                    "tooltip": "<strong>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkVI</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV"
                },
                {
                    "name": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(MV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2789.png",
                    "x": 228.0,
                    "y": 120.0,
                    "data": "\u5982\u679c\u4f60\u8fd8\u5728\u71c3\u70e7\u6742\u915a\u6cb9\u4f5c\u4e3a\u80fd\u6e90\u7684\u8bdd,\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u673a\u5668\u83b7\u5f97MV\u7535\u538b.\u867d\u8bf4\u4e0d\u592a\u6301\u4e45,\u4e5f\u7edd\u4e0d\u662f\u597d\u7684\u4e3b\u8981\u80fd\u6e90,\u4e0d\u8fc7\u5b83\u7ec8\u5f52\u80fd\u4e3a\u4f60\u8865\u5145\u4e00\u4e9bEU.</br></br>\u53e6\u4e00\u79cd\u9009\u62e9,\u91cd\u71c3\u6cb9?\u5b83\u7684\u6bcf\u6876\u71c3\u503c\u4e0e\u82ef\u76f8\u5f53,360k-EU,\u4e5f\u662f\u552f\u4e00\u4e00\u79cd\u6bcf\u6876\u71c3\u503c\u8d85\u8fc7100k-EU\u7684\u534a\u6d41\u8d28\u71c3\u6599.\u5982\u679c\u4f60\u5408\u6210\u67f4\u6cb9\u4e4b\u540e\u8fd8\u5269\u4e0b\u4e0d\u5c11\u7684\u8bdd,\u7528\u4f5c\u534a\u6d41\u8d28\u53d1\u7535\u673a\u7684\u71c3\u6599\u662f\u4e2a\u4e0d\u9519\u7684\u6cd5\u5b50.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK5Q==",
                    "title": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(MV)",
                    "tooltip": "<strong>\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(MV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3"
                },
                {
                    "name": "\u6807\u51c6\u6838\u71c3\u6599:\u94c0",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/191.png",
                    "x": 516.0,
                    "y": 228.0,
                    "data": "\u8fd9\u4ec5\u4ec5\u662f\"\u666e\u901a\"\u7684\u94c0\u71c3\u6599.\u6ca1\u6709\u4ec0\u4e48\u7279\u6b8a\u7684...\u5b83\u4ea7\u751f\u7684\u80fd\u91cf\u662f\u948d\u76845\u500d,\u800c\u4ea7\u751f\u7684\u70ed\u91cf\u4e3a\u51764\u500d,\u540c\u65f6\u6301\u7eed\u65f6\u95f4\u4e3a\u51762/5.</br></br>\u5927\u591a\u6570\u71c3\u6599\u68d2\u90fd\u5927\u540c\u5c0f\u5f02.\u901a\u5e38\u5728\u706b\u661f\u53ca\u5176\u536b\u661f\u4e0a\u83b7\u53d6\u94c0,\u522b\u5fd8\u4e86\u4ece\u948d\u4e2d\u4e5f\u53ef\u4ee5\u79bb\u5fc3\u51fa\u4e00\u70b9\u94c0.</br></br>\u987a\u4fbf\u4e00\u63d0,\u6709\u4e00\u79cd'\u8109\u51b2'\u578b\u7684\u53cd\u5e94\u5806(\u5f53\u8fc7\u70ed\u540e\u5173\u95ed\u53cd\u5e94\u5806).\u5c06\u8fd9\u4e9b\u68d2\u5b50\u6253\u5305\u540e\u51b7\u9759\u4e00\u4e0b,\u8fd9\u6837\u53ef\u4ee5\u8ba9\u6bcf\u6839\u71c3\u6599\u68d2\u8fbe\u5230\u6700\u5927\u7684\u5229\u7528\u6548\u7387.\u5f53\u7136,\u4e00\u4e0d\u5c0f\u5fc3\u5c31\u662fBOOM.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAvw==",
                    "title": "\u00a7a\u00a7l\u6807\u51c6\u6838\u71c3\u6599:\u94c0",
                    "tooltip": "<strong>\u6807\u51c6\u6838\u71c3\u6599:\u94c0</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "name": "\u90a3\u662f\u4ec0\u4e48?\u5f15\u64ce\u592a\u5435\u6211\u5565\u4e5f\u542c\u4e0d\u5230!",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1481.png",
                    "x": 228.0,
                    "y": 264.0,
                    "data": "\u6781\u9650\u5185\u71c3\u5f15\u64ce\u662f\u5927\u578b\u5185\u71c3\u5f15\u64ce\u7684IV\u7248\u672c\u5347\u7ea7,\u9700\u8981\u628a\u949b\u6362\u6210\u94a8\u94a2.\u4e24\u8005\u7ed3\u6784\u57fa\u672c\u76f8\u540c,\u6240\u7528\u4e24\u79cd\u6750\u6599\u4e4b\u6bd4\u51e0\u4e4e\u5c31\u662f1:1,\u6240\u4ee5\u7b49\u4f60\u6512\u4e86\u51e0\u7ec4\u94a8\u94a2\u540e,\u5b83\u4f1a\u662f\u4e00\u79cd\u5f88\u597d\u7684\u53d1\u7535\u673a\u9009\u62e9.</br></br>\u9700\u8981\u6ce8\u610f\u7684\u662f,\u5b83\u53ea\u80fd\u63a5\u53d7\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9.\u8fd9\u662f\u77f3\u6cb9\u51fa\u4ea7\u7684\u6700\u540e\u4e5f\u662f\u6700\u5f3a\u7684\u4e00\u79cd\u5185\u71c3\u7c7b\u71c3\u6599,\u800c\u5b83\u7684\u5904\u7406\u4ea7\u7ebf\u4e5f\u662f\u6700\u957f\u7684.\u56de\u62a5\u5c31\u662f,\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9\u7684\u80fd\u91cf\u5bc6\u5ea6\u975e\u5e38\u51fa\u8272,\u9ad8\u8fbe\u00a7e\u00a7b\u00a7a\u6bcf\u68762.5M-EU\u00a7a\u00a7r,\u518d\u914d\u5408\u6db2\u6c27\u5728\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u4e2d\u71c3\u70e7,\u5b83\u53ef\u4ee5\u4ea7\u51fa\u63a5\u8fd1\u00a7a4A-IV.</br></br>\u00a7c\u6db2\u6c27\u975e\u5e38\u91cd\u8981,\u56e0\u4e3a\u5b83\u6781\u5927\u5730\u63d0\u5347\u4e86\u591a\u65b9\u5757\u673a\u5668\u7684\u8fd0\u884c\u901f\u5ea6\u4ee5\u53ca\u71c3\u6599\u6548\u7387.\u00a7f\u00a7r\u6db2\u6c27\u7684\u4f9b\u5e94\u901f\u5ea6\u9700\u8981\u8fbe\u523040-L/s,\u6240\u4ee5\u4e3a\u4e86\u7ef4\u6301\u5f15\u64ce\u7684\u6301\u7eed\u8fd0\u884c,\u4f60\u9700\u8981\u4e0d\u6b62\u4e00\u53f0\u771f\u7a7a\u51b7\u51bb\u673a,\u51c6\u786e\u6765\u8bf4,\u4f60\u9700\u89813\u53f0HV\u771f\u7a7a\u51b7\u51bb\u673a,\u6216\u662f1\u53f0HV+1\u53f0EV.\u4ee5\u4e0b\u60c5\u51b5\u4e0b,\u53ef\u4ee5\u9002\u5f53\u964d\u4f4e\u6570\u91cf\uff1a\u8d85\u9891\u771f\u7a7a\u51b7\u51bb\u673a;\u6781\u9650\u5185\u71c3\u5f15\u64ce\u5e76\u6ca1\u6709\u6301\u7eed\u8fd0\u884c;\u6216\u8005\u4f60\u4f7f\u7528\u4e86\u51db\u51b0\u51b7\u51bb\u673a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFyQ==",
                    "title": "\u90a3\u662f\u4ec0\u4e48?\u5f15\u64ce\u592a\u5435\u6211\u5565\u4e5f\u542c\u4e0d\u5230!",
                    "tooltip": "<strong>\u90a3\u662f\u4ec0\u4e48?\u5f15\u64ce\u592a\u5435\u6211\u5565\u4e5f\u542c\u4e0d\u5230!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86</br>EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2808.png",
                    "x": 444.0,
                    "y": 192.0,
                    "data": "\u8fd9\u662fEV\u7248\u672c,\u5176\u5de5\u4f5c\u539f\u7406\u76f8\u540c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK-A==",
                    "title": "\u00a79\u00a7l\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "tooltip": "<strong>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)</br>\u94a8\u94a2"
                },
                {
                    "name": "\u706b\u7bad\u5f15\u64ce(LuV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2785.png",
                    "x": 336.0,
                    "y": 264.0,
                    "data": "\u8fd9\u662fLuV\u7248\u672c. \u5b83\u7684\u71c3\u6599\u6548\u7387\u4e3a60\uff05,\u540c\u65f6\u6bcf\u79d2\u4ea7\u751f750\u52306000\u70b9\u6c61\u67d3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK4Q==",
                    "title": "\u00a7a\u00a7l\u706b\u7bad\u5f15\u64ce(LuV)",
                    "tooltip": "<strong>\u706b\u7bad\u5f15\u64ce(LuV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4</br>RP-1\u706b\u7bad\u71c3\u6599"
                },
                {
                    "name": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a2",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2802.png",
                    "x": 588.0,
                    "y": 192.0,
                    "data": "\u53ef\u4ee5\u8fd0\u884c\u76f8\u5f53\u76f8\u5f53\u957f\u7684\u65f6\u95f4.\u6839\u636e\u63d0\u4f9b\u7684\u9776\u4e38\u8f93\u51fa\u80fd\u91cf.</br></br>\u9545-241:16EU/t,69875\u5929</br>\u9536-90:30EU/t,62640\u5929</br>\u949a-238:64EU/t,42982\u5929</br>\u948b-210:480EU/t,34560\u5929</br></br>\u5766\u767d\u6765\u8bf4,\u8fd9\u73a9\u610f\u5b8c\u5168\u4e0d\u503c.\u7279\u522b\u662f\u8003\u8651\u5230\u4e3a\u4e86\u5236\u9020\u8fd9\u4e9b\u9776\u4e38,\u8fd8\u9700\u8981\u65b0\u4fee\u4e00\u53f0\u56de\u65cb\u52a0\u901f\u5668...\u751a\u81f3\u5236\u9020\u8fc7\u7a0b\u8fd8\u8981\u770b\u8138!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK8g==",
                    "title": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a",
                    "tooltip": "<strong>\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a2</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a1</br>\u6211\u771f\u7684\u9700\u8981\u505a\u8fd9\u4e2a\u5417?</br>\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "name": "\u948d\u57fa\u6d41\u4f53\u71c3\u6599",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2956.png",
                    "x": 336.0,
                    "y": 372.0,
                    "data": "\u6700\u4fbf\u5b9c\u7684\u6d41\u4f53\u71c3\u6599,\u6bcfmB\u51fa\u4ea72200EU/t,\u6301\u7eed25\u79d2.</br></br>\u5b83\u8fd8\u662f\u9568\u7684\u6765\u6e90\u4e4b\u4e00,\u800c\u9568\u53ef\u7528\u4e8e\u5408\u6210\u7845\u5ca9\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALjA==",
                    "title": "\u948d\u57fa\u6d41\u4f53\u71c3\u6599",
                    "tooltip": "<strong>\u948d\u57fa\u6d41\u4f53\u71c3\u6599</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806"
                },
                {
                    "name": "\u6211\u6765\u6559\u4f60...\u600e\u4e48\u611f\u8c22\u592a\u9633\uff01",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6008922449644892285.png",
                    "x": 336.0,
                    "y": 336.0,
                    "data": "\u592a\u957f;\u4e0d\u770b\uff1a\u8fd9\u4e2a\u4efb\u52a1\u9700\u6c42\u7684\u673a\u68b0\u65b9\u5757\u6570\u91cf\u662f\u9020\u4e00\u4e2a\u6700\u5f3a\u7684\u592a\u9633\u80fd\u5854\u7528\u7684,\u8fd9\u4e2a\u5854\u8981\u8d85\u591a\u4e0d\u9508\u94a2,\u949b,HV\u7535\u8def\u677f,\u52a0\u4e0a\u4e00\u4e9b\u5176\u4ed6\u6750\u6599,\u4f46\u662f\u5b83\u80fd\u4ea7\u51fa\u5927\u69822A LuV.</br></br>\u4f60\u5c1d\u8bd5\u7528\u8fc7\u592a\u9633\u80fd\u677f\u5417?\u53ef\u80fd\u9020\u8fc7\u4e00\u4e9b?\u6211\u95ee\u4f60\u54e6,\u8fd9\u4e9b\u592a\u9633\u80fd\u677f\u6709\u4ec0\u4e48\u5171\u540c\u70b9...\u5b83\u4eec\u4e0d\u662f\u4ea7\u84b8\u6c7d\u5c31\u662f\u76f4\u63a5\u4ea7EU,\u592a\u6ca1\u6548\u7387\u4e86.\u6240\u6709\u4eba\u90fd\u5fd8\u8bb0\u4e86\u8fd9\u4ef6\u4e8b!</br></br>\u5355\u65b9\u5757\u592a\u9633\u5f88\u9002\u5408\u585e\u5728\u4efb\u4f55\u6709\u592a\u9633\u7684\u5730\u65b9,\u7ed9\u673a\u5668\u63d0\u4f9b\u4e00\u4e2a\u7a33\u70b9\u7684\u4f9b\u7535.\u7136\u800c,\u9274\u4e8eEU\u7684\u5b58\u50a8\u548c\u8fd0\u8f93\u76f8\u5f53\u5bb9\u6613,\u6765\u5c1d\u8bd5\u70b9\u597d\u4e1c\u897f.\u4e0d\u540c\u4e8e\u76f4\u63a5\u53d1\u7535,\u7528\u5468\u56f4\u73af\u72b6\u6392\u5217\u592a\u9633\u80fd\u53cd\u5c04\u5668\u5c06\u8fd9\u4e9b\u592a\u9633\u80fd\u5149\u675f\u96c6\u4e2d\u5230\u4e2d\u95f4\u7ed3\u6784\u4e0a,\u7136\u540e\u6c90\u6d74\u5728\u592a\u9633\u7cfb\u6700\u5f3a\u7684\u805a\u53d8\u53cd\u5e94\u5806\u7684\u8d85\u5f3a\u529b\u91cf\u4e2d\u5427!</br></br>(\u5982\u679c\u4f60\u6700\u540e\u9020\u4e86\u66f4\u5927\u7684\u805a\u53d8,\u522b\u6765\u548c\u6211\u54ac\u6587\u56bc\u5b57)</br></br>\u5927\u81f4\u7684\u539f\u7406\u5c31\u662f,\u5c06\u592a\u9633\u5149\u76f4\u63a5\u7167\u5728\u4e00\u79cd\u6bd4\u6c34\u66f4\u597d\u7684\u50a8\u80fd\u6d41\u4f53\u4e0a,\u592a\u9633\u80fd\u76d0.\u592a\u9633\u80fd\u5854\u4f1a\u52a0\u70ed\u6240\u6709\u5854\u4e2d\u5b58\u50a8\u7684\u6d41\u4f53,\u4f46\u662f\u6ce8\u610f,\u5982\u679c\u91cc\u9762\u6709\u592a\u591a\u51b7\u7684\u592a\u9633\u80fd\u76d0,\u5b83\u4eec\u4f1a\u5438\u8d70\u5927\u90e8\u5206\u70ed\u91cf\u4ece\u800c\u964d\u4f4e\u6574\u4f53\u7684\u8fd0\u884c\u6548\u7387.</br></br>\u5b9e\u9645\u4e0a\u592a\u9633\u80fd\u5854\u7684\u70ed\u91cf\u533a\u95f4\u662f0\u5230100000,\u4f46\u5b83\u53ea\u4f1a\u52a0\u70ed30000\u4ee5\u4e0a\u70ed\u91cf\u7684\u592a\u9633\u80fd\u76d0.\u6bcf\u4e2a\u5faa\u73af\u4e2d\u589e\u52a0\u7684\u80fd\u91cf\u53d6\u51b3\u4e8e\u53cd\u5c04\u5668\u7684\u6570\u91cf\u4ee5\u53ca\u5f53\u524d\u6e29\u5ea6.\u7406\u60f3\u6e29\u5ea6\u521a\u597d\u662f\u4e0a\u9650\u7684\u4e00\u534a,50000\u70ed\u91cf.\u4e3a\u4e86\u8ba9\u592a\u9633\u80fd\u5854\u5de5\u4f5c\u5728\u6700\u9ad8\u6548\u7387\u4e0a,\u4f60\u9700\u8981\u6162\u6162\u52a0\u5165\u51b7\u7684\u592a\u9633\u80fd\u76d0\u4ee5\u7ef4\u6301\u6070\u5f53\u7684\u6e29\u5ea6.\u5177\u4f53\u4ee5\u4ec0\u4e48\u6d41\u901f\u52a0\u5165\u592a\u9633\u80fd\u76d0\u5c31\u7559\u7ed9\u4f60\u81ea\u5df1\u7b97\u4e86,\u8fd9\u53d6\u51b3\u4e8e\u4f60\u6240\u4f7f\u7528\u7684\u7684\u53cd\u5c04\u5668\u7684\u6570\u91cf.</br></br>\u5728\u4ee5\u4e0a\u7684\u57fa\u7840\u4e0a\u50cf\u7528\u70ed\u51b7\u5374\u6db2\u90a3\u6837\u901a\u8fc7\u70ed\u4ea4\u6362\u4ea7\u751f\u84b8\u6c7d\u6216\u8fc7\u70ed\u84b8\u6c7d.\u5982\u679c\u4f60\u60f3\u8981\u592a\u9633\u80fd\u5854\u7684\u5de5\u4f5c\u6548\u7387\u6700\u5927\u5316,\u8bf7\u628a\u5b83\u5efa\u5728\u6c38\u8fdc\u767d\u5929\u7684\u4e2a\u4eba\u7ef4\u5ea6\u91cc.",
                    "quest_id": "Hn_igsosSbKsnATeYgvPgw==",
                    "title": "\u6211\u6765\u6559\u4f60...\u600e\u4e48\u611f\u8c22\u592a\u9633\uff01",
                    "tooltip": "<strong>\u6211\u6765\u6559\u4f60...\u600e\u4e48\u611f\u8c22\u592a\u9633\uff01</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)"
                },
                {
                    "name": "\u6df1\u5730\u70ed\u6cf5",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2766.png",
                    "x": 480.0,
                    "y": 120.0,
                    "data": "\u8fd9\u53f0\u673a\u5668\u4f7f\u7528\u5730\u70ed\u80fd\u52a0\u70ed\u51b7\u5374\u6db2,\u53ef\u4ee5\u8df3\u8fc7\u6d41\u4f53\u6838\u53cd\u5e94\u5806.</br></br>\u8bf7\u67e5\u770bhttps://gtnh.miraheze.org/wiki/Fluid_Reactor \u5e76\u7528\u6df1\u5730\u70ed\u6cf5\u66ff\u6362\u6d41\u4f53\u6838\u53cd\u5e94\u5806.</br></br>\u8fd9\u57fa\u672c\u5c31\u662f\u65e0\u9650\u80fd\u6e90,\u4e0d\u8fc7\u7528\u70bc\u72f1\u4e4b\u58f6\u914d\u5408\u6d41\u4f53\u70ed\u4ea4\u6362\u673a\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u76f8\u540c\u529f\u80fd...\u968f\u4fbf\u5566. \u8fd9\u73a9\u610f\u975e\u5e38\u975e\u5e38\u8d35,\u522b\u5fd8\u4e86\u8fd9\u4e00\u70b9!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKzg==",
                    "title": "\u6df1\u5730\u70ed\u6cf5",
                    "tooltip": "<strong>\u6df1\u5730\u70ed\u6cf5</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1137.png",
                    "x": 372.0,
                    "y": 156.0,
                    "data": "\u52a8\u80fd\u53d1\u7535\u673a\u53ef\u4ee5\u5c06\u673a\u68b0\u80fd\u8f6c\u5316\u6210\u7535\u80fd.\u4ea7\u751f\u7684\u7535\u529b\u53d6\u51b3\u4e8e\u52a8\u80fd\u8f93\u5165. \u52a8\u80fd\u53d1\u7535\u673a\u901a\u5e38\u548c\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u3001\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e00\u8d77\u4f7f\u7528.\u800c\u84b8\u6c7d\u52a8\u80fd\u53d1\u751f\u673a\u53ea\u6709\u4e00\u4e2a\u7b49\u7ea7,\u6240\u4ee5\u5982\u679c\u5bf9\u84b8\u6c7d\u611f\u5174\u8da3\u7684\u8bdd,\u53ef\u4ee5\u8003\u8651\u8003\u8651\u84b8\u6c7d\u6da1\u8f6e.</br></br>\u5f53\u653e\u7f6e\u52a8\u80fd\u53d1\u7535\u673a\u65f6,\u4efb\u4f55\u65f6\u5019,\u8f93\u5165\u7aef\u90fd\u662f\u9762\u5411\u4f60\u7684.\u6240\u4ee5\u4f60\u603b\u662f\u5148\u653e\u7f6e\u52a8\u80fd\u53d1\u7535\u673a,\u7136\u540e\u518d\u662f\u98ce\u529b/\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a,\u7136\u540e\u518d\u5c06\u8f6c\u5b50\u653e\u5165.\u80fd\u91cf\u53ef\u4ee5\u4ece\u52a8\u80fd\u53d1\u7535\u673a\u7684\u4efb\u610f\u9762\u8f93\u51fa,\u800c\u6bcf\u4e00\u9762\u7684\u6700\u9ad8\u8f93\u51fa\u5373\u52a8\u80fd\u53d1\u7535\u673a\u7684\u7535\u538b\u7b49\u7ea7.</br></br>\u8b66\u544a:\u4e0d\u6b63\u786e\u5730\u7834\u574f\u52a8\u80fd\u53d1\u7535\u673a\u5c06\u65e0\u6cd5\u6389\u843d\u53d1\u7535\u673a.\u4f60\u9700\u8981\u4f7f\u7528GT\u6273\u624b,\u53f3\u952e\u5b83.\u5b83\u5c31\u4f1a\u7acb\u523b\u6389\u843d.\u8981\u662f\u5b83\u8f6c\u4e86\u4e2a\u65b9\u5411,\u90a3\u5c31\u518d\u8bd5\u4e00\u6b21.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEcQ==",
                    "title": "\u00a79\u00a7l\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "tooltip": "<strong>\u52a8\u80fd\u53d1\u7535\u673a(HV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86"
                },
                {
                    "name": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(HV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2822.png",
                    "x": 696.0,
                    "y": 156.0,
                    "data": "\u8fd9\u662fHV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALBg==",
                    "title": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(HV)",
                    "tooltip": "<strong>\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(HV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)</br>\u529b\u573a\u53d1\u751f\u5668(MV)"
                },
                {
                    "name": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(EV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2825.png",
                    "x": 696.0,
                    "y": 192.0,
                    "data": "\u8fd9\u662fEV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALCQ==",
                    "title": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(EV)",
                    "tooltip": "<strong>\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(EV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(HV)</br>\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f"
                },
                {
                    "name": "\u963f\u7f8e\u5229\u5361!!!!!!!!!",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5802810217373252190.png",
                    "x": 408.0,
                    "y": 504.0,
                    "data": "\u4f7f\u51fa\u201c\u5408\u4f17\u7c89\u788e\u201d\u6765\u5c06\u8fd9\u4e9b\u7c92\u5b50\u6253\u5230\u4e00\u8d77,\u7136\u540e\u542f\u52a8\u53ef\u63a7\u6838\u805a\u53d8\u53cd\u5e94,\u4f7f\u6211\u4eec\u80fd\u7ee7\u7eed\u8fd9\u4e2a\u5de8\u5927\u7684\u80fd\u6e90\u4ea7\u7ebf.\u8bb0\u4f4f,\u8fd9\u5c31\u662f\u9545\u7b49\u79bb\u5b50\u4f53!</br></br>\u5b9e\u9645\u4e0a,\u5728\u5355\u914d\u65b9\u4ea7\u80fd\u88c5\u7f6e\u4e2d,\u8fd9\u4e2a\u7b49\u79bb\u5b50\u4f53\u53ef\u80fd\u662f\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e\u7684\u6700\u4f73\u9009\u62e9.\u7136\u800c,\u4e0e\u6c26\u548c\u9521\u7b49\u79bb\u5b50\u4f53\u4e4b\u524d\u7684\u72b6\u6001\u76f8\u6bd4,\u5728MK3\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806\u4e2d,\u5b83\u7684\u901f\u5ea6\u6bd4\u8f83\u6162,\u56e0\u4e3a\u9545\u7b49\u79bb\u5b50\u4f53\u6ca1\u6709192x/128x\u7684\u5e76\u884c,\u66f4\u4e0d\u7528\u8bf4\u5b83\u7684\u914d\u65b9\u65f6\u95f4\u5df2\u7ecf\u662f\u9521\u76848\u500d.</br></br>\u4e3a\u4e86\u7ef4\u6301\u4f60\u7684UEV/UIV\u7684\u57fa\u5730,\u4f60\u8fd8\u9700\u8981\u5927\u91cf\u7684Pu-241,\u4f46\u662f\u8fd9\u6761\u805a\u53d8\u4ea7\u7ebf\u53ef\u4ee5\u5927\u5927\u5730\u51cf\u5c11\u6240\u9700\u7684\u6570\u91cf,\u5373\u4f7f\u4e24\u4e2a\u8f93\u5165(\u9545\u548c\u9514)\u90fd\u9700\u8981\u949a-241.</br></br>\u8fd9\u4e00\u6b65\u6240\u9700\u7684\u65f6\u95f4\u8d85\u8fc7\u4e86\u8fd9\u6761\u4ea7\u7ebf\u6700\u540e\u4e00\u6b65\u7684\u4e00\u534a,\u56e0\u6b64\u5b83\u662f\u4e3b\u8981\u7684\u74f6\u9888\u4e4b\u4e00\uff1a\u5982\u679c\u4f60\u628a\u6700\u540e\u4e00\u6b65\u5347\u7ea7\u4e3a\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806,\u8fd9\u91cc\u4f60\u5c31\u9700\u898137\u4e2aMK3\u805a\u53d8\u53cd\u5e94\u5806\u6765\u5339\u914d\u4ea7\u7ebf\u7684\u901f\u5ea6.</br></br>\u8bd1\u8005\u6ce8\uff1a\u5173\u4e8e\"\u5408\u4f17\u7c89\u788e\",\u539f\u6587\u4e3a\"United States of SMASH\",\u662f\u6211\u7684\u82f1\u96c4\u5b66\u9662\u4e2d\u6b27\u5c14\u9ea6\u7279\u7684\u7ec8\u6781\u6218\u6597\u62db\u5f0f.\u7531\u4e8e\u9545(Americium)\u7684\u82f1\u6587\u548c\u7f8e\u56fd(America)\u76f8\u4f3c,\u56e0\u6b64\u5728\u8fd9\u91cc\u73a9\u4e86\u4e2a\u6897.",
                    "quest_id": "Qrjs7uh5TcSveEbaFnXFog==",
                    "title": "\u963f\u7f8e\u5229\u5361!!!!!!!!!",
                    "tooltip": "<strong>\u963f\u7f8e\u5229\u5361!!!!!!!!!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b"
                },
                {
                    "name": "\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2815.png",
                    "x": 84.0,
                    "y": 264.0,
                    "data": "\u53ef\u8f93\u51fa10000-32768EU/t.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK_w==",
                    "title": "\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)",
                    "tooltip": "<strong>\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd</br>LuV\u7ec4\u88c5\u673a"
                },
                {
                    "name": "\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53 - MK3\u4e4b\u7ec8",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8021583113396239664.png",
                    "x": 492.0,
                    "y": 492.0,
                    "data": "\u5230\u8fd9\u5c31\u662fMK3\u805a\u53d8\u4ea7\u7ebf\u7684\u7ed3\u5c3e\u4e86,\u4e5f\u662f\u4e09\u6761\u805a\u53d8\u4ea7\u7ebf\u7684\u603b\u548c.\u5728\u6c26\u7b49\u79bb\u5b50\u4f53\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e8614\u6b21\u805a\u53d8\u4e4b\u540e,\u7ec8\u4e8e\u5c06\u8fd9\u6765\u4e4b\u4e0d\u6613\u7684\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53\u6536\u5165\u56ca\u4e2d,\u5176\u9ad8\u8fbe720M\u7684\u70ed\u503c\u53ef\u4ee5\u514d\u75ab\u4e00\u4f17\u5de8\u578b\u6da1\u8f6e\u7684\u60e9\u7f5a,\u76f4\u81f3\u5de8\u578b\u65f6\u7a7a\u6da1\u8f6e.</br></br>\u8981\u6269\u5927\u7b49\u79bb\u5b50\u53d1\u7535\u89c4\u6a21\u76f4\u81f3\u7ec8\u6781\u76ee\u6807\u548c\u6234\u68ee\u7403,\u5f88\u53ef\u80fd\u5c31\u4f9d\u9760\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53\u6216\u9545\u7b49\u79bb\u5b50\u4f53\u4e86,\u540e\u8005\u867d\u7136\u662f\u5355\u6b65\u914d\u65b9,\u4f46\u5728\u5355\u5806\u4e0a\u7684\u53d1\u7535\u91cf\u8981\u900a\u8272\u4e8e\u524d\u8005.64\u5e76\u884c\u7684\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53\u7684MK3\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806\u914d\u5408\u65e0\u5c3d\u6da1\u8f6e\u6709\u7740\u8d85\u8fc780\u4ebfEU/t\u7684\u53d1\u7535\u91cf.\u8981\u6269\u5927\u4e0a\u8ff0\u53d1\u7535\u7684\u89c4\u6a21\u5e76\u6ca1\u6709\u90a3\u4e48...\u90a3\u4e48\u7684\u96be,\u53ea\u9700\u8981\u6e05\u695a\u54ea\u4e9b\u914d\u65b9\u4f1a\u6210\u4e3a\u6700\u5927\u7684\u74f6\u9888\u5e76\u4e14\u62e5\u6709\u5145\u8db3\u7684\u539f\u6599.</br></br>\u5230\u76ee\u524d\u4e3a\u6b62,\u8fd8\u6ca1\u7b49\u79bb\u5b50\u4f53\u9700\u8981\u7528\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53\u5236\u4f5c,\u4f46\u5728\u5c06\u6765\u53ef\u80fd\u4f1a\u65b0\u589e\u8fd9\u6837\u7684\u7b49\u79bb\u5b50\u4f53,\u5c24\u5176\u662f\u8bf8\u5982\u9f99\u8840\u7b49\u4e00\u4f17GT++\u6750\u6599.\u606d\u559c\u4f60\u5b8c\u6210\u8fd9\u6761\u805a\u53d8\u4ea7\u7ebf!\u613f\u539f\u529b\u4e0e\u4f60\u540c\u5728.",
                    "quest_id": "LSqzsH4oS7OQrZyolb7C0A==",
                    "title": "\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53 - MK3\u4e4b\u7ec8",
                    "tooltip": "<strong>\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53 - MK3\u4e4b\u7ec8</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u9ad8\u7ea7\u954d\u949b\u8bfa"
                },
                {
                    "name": "\u66f4\u591a\u84b8\u6c7d!",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/70.png",
                    "x": 120.0,
                    "y": 84.0,
                    "data": "\u4f60\u51e0\u4e4e\u5b8c\u6210\u5b83\u4e86!\u53ea\u9700\u8981\u6700\u540e\u4e00\u4e2a\u5236\u4f5c\u6b65\u9aa4\u5c31\u53ef\u4ee5\u5230\u8fbe\u7b2c1\u9636\u7684\u9700\u6c42!\u7ee7\u7eed\u524d\u8fdb\u5427!</br></br>\u8fd9\u79cd\u84b8\u6c7d\u8f6e\u673a\u53ef\u4ee5\u5c06\u84b8\u6c7d\u8f6c\u5316\u4e3aEU.\u4f60\u4e4b\u524d\u4f7f\u7528\u7684\u80fd\u6e90\u4e00\u6210\u4e0d\u53d8,\u4f46\u4ece\u6b64\u523b\u5f00\u59cb,\u4f60\u53ef\u4ee5\u751f\u4ea7EU,\u5e76\u901a\u8fc7\u7ebf\u7f06\u5c06\u5176\u8f93\u9001\u5230\u4f60\u7684\u673a\u5668\u5185,\u53d6\u4ee3\u539f\u5148\u9700\u8981\u901a\u8fc7\u7ba1\u9053\u5c06\u84b8\u6c7d\u76f4\u63a5\u9001\u5230\u673a\u5668\u5904.\u76f8\u6bd4\u9752\u94dc\u673a\u5668,\u7535\u529b\u673a\u5668\u65e0\u9700\u6392\u6c14\u53e3,\u4e14\u66f4\u52a0\u9ad8\u6548.</br></br>\u53e6\u5916,\u4e4b\u540e\u4f60\u5f88\u53ef\u80fd\u8fd8\u4f1a\u4ece\u84b8\u6c7d\u8f6c\u5411\u53e6\u4e00\u79cd\u71c3\u6599.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAARg==",
                    "title": "\u00a73\u00a7l\u66f4\u591a\u84b8\u6c7d!",
                    "tooltip": "<strong>\u66f4\u591a\u84b8\u6c7d!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def</br>\u57fa\u7840\u5236\u4f5c:\u9a6c\u8fbe</br>\u57fa\u7840\u5236\u4f5c:\u8f6c\u5b50"
                },
                {
                    "name": "\u5f15\u7206\u6db2\u4f53\u83b7\u53d6\u80fd\u91cf",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/532.png",
                    "x": 192.0,
                    "y": 84.0,
                    "data": "\u5185\u71c3\u53d1\u7535\u673a\u53ef\u4ee5\u71c3\u70e7\u51e0\u79cd\u6d41\u4f53\u4ea7\u751fEU,\u800c\u4e14\u53ea\u6709\u9700\u8981\u7684\u65f6\u5019\u624d\u4f1a\u6d88\u8017\u71c3\u6599.\u5176\u4e2d\u67d0\u4e9b\u6d41\u4f53\u66f4\u53d7\u6b22\u8fce,\u800c\u77f3\u6cb9\u5904\u7406\u7ebf\u4eceLV\u5230EV\u7684\u6bcf\u4e2a\u9636\u6bb5,\u5747\u6709\u4e00\u79cd\u4e0d\u540c\u7684\u6d41\u4f53\u71c3\u6599.</br></br>\u9996\u5148,LV\u9636\u6bb5\u4e3a\u8f7b\u71c3\u6cb9.\u76f8\u6bd4\u77f3\u6cb9\u672c\u8eab,\u8f7b\u71c3\u6cb9\u7684\u53d1\u7535\u4ef7\u503c\u8981\u9ad8\u5f97\u591a,\u6240\u4ee5\u4f60\u5e94\u8be5\u5c06\u77f3\u6cb9\u8fdb\u884c\u84b8\u998f\u5e76\u8131\u786b,\u4ee5\u83b7\u5f97\u7eaf\u51c0\u7684\u8f7b\u71c3\u6cb9\u5e76\u5c06\u5176\u7528\u4e8e\u53d1\u7535.\u8fd9\u662f\u76ee\u524d\u57fa\u5730\u7684\u6700\u4f73\u4f9b\u80fd\u65b9\u6848,\u5e76\u4e14\u8f7b\u71c3\u6cb9\u5728\u4e0b\u4e00\u9636\u6bb5\u8fd8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5347\u7ea7. \u7b49\u4f60\u5236\u9020\u4e86\u6cf5\u5e76\u627e\u5230\u4e86\u4e00\u4e9b\u77f3\u6cb9,\u8bf7\u67e5\u770b\"\u77f3\u6cb9\u5de5\u4e1a\"\u4efb\u52a1\u680f\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f.</br></br>\u5982\u679c\u4f60\u6b63\u5728\u8ba1\u5212\u7740\u642d\u5efa\u77f3\u6cb9\u5904\u7406\u7ebf,\u76f8\u4fe1\u6211,\u8fd9\u5c06\u662f\u4f60\u6700\u5e38\u7528\u7684\u53d1\u7535\u673a\u7c7b\u578b.\u00a7r",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACFA==",
                    "title": "\u00a75\u00a7l\u5f15\u7206\u6db2\u4f53\u83b7\u53d6\u80fd\u91cf",
                    "tooltip": "<strong>\u5f15\u7206\u6db2\u4f53\u83b7\u53d6\u80fd\u91cf</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#3"
                },
                {
                    "name": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3039.png",
                    "x": 228.0,
                    "y": 408.0,
                    "data": "\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4,\u6234\u68ee\u7403\u5730\u9762\u5355\u5143\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u5c31\u662f\u4e00\u5927\u5757\u592a\u9633\u80fd\u677f,\u7a0d\u5fae\u6709\u70b9\u4e0d\u540c\u7684\u662f,\u4f60\u9700\u8981\u63d2\u5165\u6234\u68ee\u7403\u6a21\u5757(\u6570\u91cf\u53d6\u51b3\u4e8e\u4f60\u60f3\u8981\u591a\u9ad8\u7684\u529f\u7387\u8f93\u51fa),\u624d\u80fd\u83b7\u5f97\u80fd\u91cf\u4ea7\u51fa.\u4e0d\u8fc7\u5b83\u5e76\u975e\u4e00\u52b3\u6c38\u9038\uff1a</br>-\u6bcf\u5c0f\u65f6m\u4e2a\u6234\u68ee\u7403\u6a21\u5757\u4e2d\u6709n\u4e2a\u4f1a\u88ab\u635f\u8017,\u516c\u5f0f\uff1an",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAL3w==",
                    "title": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143",
                    "tooltip": "<strong>\u6234\u68ee\u7403\u5730\u9762\u5355\u5143</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>UMV\u7535\u8def\u677f</br>\u8010\u8d85\u9ad8\u6e29\u7f51"
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(ZPM)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2806.png",
                    "x": 372.0,
                    "y": 300.0,
                    "data": "\u8fd9\u662fZPM\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK9g==",
                    "title": "\u00a79\u00a7l\u52a8\u80fd\u53d1\u7535\u673a(ZPM)",
                    "tooltip": "<strong>\u52a8\u80fd\u53d1\u7535\u673a(ZPM)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1</br>\u52a8\u80fd\u53d1\u7535\u673a(LuV)</br>\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?"
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2963.png",
                    "x": 408.0,
                    "y": 408.0,
                    "data": "\u6bcfmB\u51fa\u4ea79,511,000-EU/t,\u6301\u7eed4\u79d2. \u4f60\u5f97\u51c6\u5907\u597d\u4ea7\u4e00\u5927\u5806\u8fd9\u73a9\u610f,\u6bd5\u7adf\u63a5\u4e0b\u6765\u6240\u6709\u7b49\u7ea7\u7684\u7845\u5ca9\u71c3\u6599\u4ea7\u7ebf\u90fd\u4eceMk3\u5f00\u59cb.</br></br>\u9ad8\u7ea7\u914d\u65b9\u80fd\u51cf\u5c11\u7269\u6d41\u7684\u9700\u6c42\uff0c\u4f46\u662f\u5f69\u8272\u73bb\u7483\u7684\u91cf\u4ea7\u95ee\u9898\u53ef\u80fd\u4e4b\u540e\u624d\u80fd\u89e3\u51b3.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALkw==",
                    "title": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII",
                    "tooltip": "<strong>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382"
                },
                {
                    "name": "\u739b\u4e3d\u9514?",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8084303837458271711.png",
                    "x": 408.0,
                    "y": 480.0,
                    "data": "\u5c31\u50cf\u662f\u814c\u8089...\u54e6\u4e0d,\u5b8c\u5168\u4e0d\u662f,\u4eba\u4eec\u5728\u7814\u7a76\u653e\u5c04\u6027\u6750\u6599\u7684\u9053\u8def\u4e0a\u505a\u51fa\u4e86\u8bb8\u591a\u727a\u7272,\u613f\u4ed6\u4eec\u6c38\u5782\u4e0d\u673d,\u5728\u6b64\u5411\u4f60\u4eec\u81f4\u656c,\u739b\u4e3d\u548c\u76ae\u57c3\u5c14\u00b7\u5c45\u91cc.</br></br>\u8fd9\u662f\u6574\u6761\u6838\u805a\u53d8\u4ea7\u94fe\u4e0a\u751f\u4ea7\u51fa\u7684\u552f\u4e00\u4e00\u79cd\u975e\u7b49\u79bb\u5b50\u4f53.\u4f46\u8fd9\u4e0d\u662f\u91cd\u70b9: \u91cd\u70b9\u662f[warn]\u8fd9\u662f\u8fd9\u6761\u4ea7\u7ebf\u4e0a\u7684\u74f6\u9888\u4e4b\u4e00.[/warn]\u6bcf\u4e00\u53f0\u7528\u4ee5\u751f\u4ea7\u6700\u7ec8\u914d\u65b9\u7684\u805a\u53d8\u5806,\u4f60\u90fd\u4f1a\u9700\u8981\u5927\u7ea60.144\u53f0\u805a\u53d8\u5806\u751f\u4ea7\u9514\u6765\u7ef4\u6301,\u56e0\u6b64\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806\u6765\u751f\u4ea7\u6700\u7ec8\u4ea7\u7269,\u4ec5\u9760\u4e00\u53f0\u666e\u901amk1\u53cd\u5e94\u5806\u6765\u751f\u4ea7\u9514\u662f\u4e0d\u591f\u7684.\u4f60\u771f\u6b63\u9700\u8981\u7684\u6570\u91cf\u53d6\u51b3\u4e8e\u5012\u6570\u7b2c\u4e8c\u6b65\u914d\u65b9,\u4e5f\u5c31\u662f\u751f\u4ea7\u9ad8\u7ea7\u954d\u949b\u8bfa\u7684\u90a3\u4e2a.",
                    "quest_id": "3r7tJ7_bTuePzsh-B_jyIQ==",
                    "title": "\u739b\u4e3d\u9514?",
                    "tooltip": "<strong>\u739b\u4e3d\u9514?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b"
                },
                {
                    "name": "\u4e0d\u542b\u81f4\u5e7b\u5242",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2793.png",
                    "x": 624.0,
                    "y": 192.0,
                    "data": "\u8fd9\u662fEV\u7248\u672c.\u6211\u5e0c\u671b\u4f60\u6ca1\u6709\u5c06\u5176\u5f53\u505a\u4e3b\u529b\u53d1\u7535\u673a...\u4e0d\u8fc7\u81f3\u5c11,\u8fd9\u73a9\u610f\u7684\u6548\u7387\u5f88\u68d2,EV\u9636\u6bb5\u80fd\u670988\uff05,\u800c\u4e14\u628a\u4e0d\u8981\u7684\u6d41\u4f53\u7528\u4f5c\u71c3\u6599\u603b\u597d\u8fc7\u76f4\u63a5\u9500\u6bc1\u5b83\u4eec.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK6Q==",
                    "title": "\u4e0d\u542b\u81f4\u5e7b\u5242",
                    "tooltip": "<strong>\u4e0d\u542b\u81f4\u5e7b\u5242</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c4\u9636\u6bb5(EV)"
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(LuV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2781.png",
                    "x": 264.0,
                    "y": 264.0,
                    "data": "\u8fd9\u662fLuV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK3Q==",
                    "title": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(LuV)",
                    "tooltip": "<strong>\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(LuV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f00\u59cb\u805a\u53d8</br>\u5236\u9020\u9545"
                },
                {
                    "name": "\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2828.png",
                    "x": 120.0,
                    "y": 228.0,
                    "data": "\u6240\u4ee5\u8fd9\u610f\u5473\u7740\u5b83\u4f1a\u4ea7\u751f\u00a7o\u4e24\u500d\u00a7r\u7684\u80fd\u91cf!\u4f60\u53ef\u4ee5\u901a\u8fc7\u5927\u578b\u70ed\u4ea4\u6362\u673a\u3001\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60MKII\u6216\u949b/\u94a8\u94a2\u9505\u7089\u83b7\u5f97\u8fc7\u70ed\u84b8\u6c7d.\u901a\u8fc7\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e\u540e,\u8fc7\u70ed\u84b8\u6c7d\u4f1a1:1\u5730\u8f6c\u5316\u4e3a\u666e\u901a\u84b8\u6c7d,\u6240\u4ee5\u6700\u597d\u518d\u52a0\u4e00\u53f0\u666e\u901a\u84b8\u6c7d\u6da1\u8f6e\u4ee5\u8fbe\u5230\u6700\u5927\u5229\u7528\u7387.\u52a0\u8d77\u6765\u5c31\u662f,\u4e00\u53f0\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e\u914d\u5408\u4e00\u53f0\u666e\u901a\u84b8\u6c7d\u6da1\u8f6e,\u8fc7\u70ed\u84b8\u6c7d\u5f97\u5230\u4e86\u666e\u901a\u84b8\u6c7d3x\u7684\u80fd\u91cf\u8f93\u51fa.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALDA==",
                    "title": "\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d",
                    "tooltip": "<strong>\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c3\u9636\u6bb5(HV)"
                },
                {
                    "name": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2816.png",
                    "x": 84.0,
                    "y": 300.0,
                    "data": "\u53ef\u8f93\u51fa100,000-131,072EU/t.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALAA==",
                    "title": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)",
                    "tooltip": "<strong>\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>ZPM\u7ec4\u88c5\u673a</br>\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)"
                },
                {
                    "name": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk I",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2827.png",
                    "x": 156.0,
                    "y": 228.0,
                    "data": "\u5b83\u53ef\u4ee5\u4f7f\u7528\u6c14\u4f53\u71c3\u6599,\u540c\u65f6\u4ea7\u751f\u80fd\u91cf\u548c\u84b8\u6c7d(\u53ea\u5728\u52a0\u70ed\u540e\u4ea7\u751f),\u800c\u4e140\u6c61\u67d3.\u5982\u679c\u5176\u4ed6\u53d1\u7535\u673a\u90fd\u6709\u5404\u79cd\u6c61\u67d3\u95ee\u9898\u7684\u8bdd,\u90a3\u4e48\u8fd9\u79cd\u53d1\u7535\u673a\u5c31\u662f\u6700\u4f73\u89e3\u51b3\u65b9\u6848\u4e86.</br></br>\u5b83\u53ef\u4ee5\u4ea7\u51fa\u00a7a4A-HV/t\u00a7r,\u800c\u4e14\u71c3\u6599\u6548\u7387\u4e0d\u9519,\u540c\u65f6\u6bcf\u79d2\u6d88\u8017100mB\u6c27. \u71c3\u6599\u7535\u6c60\u8fd8\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u9010\u6e10\u52a0\u70ed,\u76f4\u5230\u6548\u7387\u8fbe\u5230100\uff05,\u6b64\u65f6\u5b83\u4f1a\u5f00\u59cb\u540c\u65f6\u8f93\u51fa\u84b8\u6c7d.\u4f60\u53ef\u4ee5\u4f7f\u7528\u5355\u65b9\u5757\u6216\u591a\u65b9\u5757\u7684\u84b8\u6c7d\u8f6e\u673a,\u4ece\u4e2d\u83b7\u53d6\u989d\u5916\u80fd\u91cf.</br></br>\u8fd9\u4e24\u8005\u7ed3\u5408\u4f7f\u5176\u6bd4\u4f60\u4e00\u5f00\u59cb\u5efa\u9020\u7684\u5927\u578b\u71c3\u6c14\u8f6e\u673a\u66f4\u52a0\u5f3a\u5927.\u53ea\u6709\u5f53\u4f60\u89e3\u9501\u4e86\u66f4\u597d\u7684\u6750\u6599\u65f6,\u5b83\u624d\u80fd\u6bd4\u71c3\u6599\u7535\u6c60-MK-I\u4ea7\u51fa\u66f4\u591a\u7684\u80fd\u91cf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALCw==",
                    "title": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk I",
                    "tooltip": "<strong>\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk I</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86</br>EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u6da1\u8f6e\u65f6\u95f4",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1201.png",
                    "x": 156.0,
                    "y": 336.0,
                    "data": "\u4f60\u5d2d\u65b0\u7684\u7b49\u79bb\u5b50\u6da1\u8f6e\u9700\u8981\u4e00\u4e2a\u5168\u65b0\u7684\u8f6c\u5b50\u6765\u9a71\u52a8\u5b83.</br></br>\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55GT\u6750\u6599\u5236\u9020\u6da1\u8f6e,\u4f46\u662f\u76ee\u524d\u6da1\u8f6e\u7684\u6700\u4f73\u6750\u6599\u662f\u666e\u901a\u9f99\u952d.  \u4e09\u949b\u6750\u8d28\u7684\u6da1\u8f6e\u5c06\u63d0\u4f9b\u6700\u5927\u7684EU/t\u8f93\u51fa. \u800c\u4e2d\u5b50\u6750\u8d28\u7684\u6da1\u8f6e\u5c06\u63d0\u4f9b\u6700\u9ad8\u7684\u8010\u4e45,\u4f46\u662f\u6548\u7387\u6bd4\u8f83\u4f4e,\u6574\u4f53\u7684\u6da1\u8f6e\u673a\u529f\u7387\u5c06\u6bd4\u8f83\u5c0f. \u89c9\u9192\u9f99\u952d\u6750\u8d28\u7684\u6da1\u8f6e\u5c06\u4f1a\u63d0\u4f9b\u6bd4\u8f83\u5e73\u8861\u7684\u5c5e\u6027.[warn]\u8bf7\u5148\u5728\u521b\u9020\u6a21\u5f0f\u6d4b\u8bd5![/warn]</br></br>\u4f7f\u7528\u6da1\u8f6e\u65f6,\u9700\u8981\u6ce8\u610f\u6d41\u901f.\u800c\u6240\u8c13\u6700\u4f73\u6d41\u901f,\u5373\u6da1\u8f6e\u6240\u5217\u4e0d\u540c\u71c3\u6599\u7684\u6700\u4f73\u6d41\u91cf,\u9664\u4ee5\u5bf9\u5e94\u7684\u71c3\u503c.\u4f60\u8fd8\u53ef\u4ee5\u76f4\u63a5\u7528\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668(Large-Turbine-Calculator)[\u5728\u4e3b\u6570\u636e\u8868\u683c(spreadsheet)\u5185\u6709\u4e2a\u94fe\u63a5,\u6307\u5411discord\u4e2d\u7684\u8ba1\u7b97\u5668];\u8fd8\u53ef\u4ee5\u5728\u5927\u578b\u6da1\u8f6e\u8fd0\u884c\u65f6(\u53ea\u9700\u8981\u63d0\u4f9b\u5f88\u5c11\u7684\u71c3\u6599\u8ba9\u5b83\u52a8\u8d77\u6765\u5c31\u884c),\u76f4\u63a5\u626b\u63cf\u4e3b\u65b9\u5757,\u5373\u53ef\u83b7\u77e5\u8be5\u6da1\u8f6e\u8f6c\u5b50\u4f7f\u7528\u67d0\u79cd\u71c3\u6599\u5bf9\u5e94\u7684\u6700\u4f73\u6d41\u901f. \u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u6216\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,\u786e\u4fdd\u6240\u63d0\u4f9b\u7684\u71c3\u6599\u901f\u5ea6\u4e0e\u6da1\u8f6e\u7684\u6700\u4f73\u6d41\u901f\u5339\u914d,\u4ee5\u53d1\u6325\u6700\u9ad8\u7684\u71c3\u6599\u6548\u7387;\u4e0d\u8fc7\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u8d85\u51fa\u6b64\u6700\u4f73\u6d41\u901f,\u4ee5\u964d\u4f4e\u6548\u7387\u4e3a\u4ee3\u4ef7,\u83b7\u5f97\u66f4\u9ad8\u7684\u529f\u7387\u8f93\u51fa,\u800c\u84b8\u6c7d\u6da1\u8f6e\u5728\u8d85\u51fa\u6700\u4f73\u6d41\u901f\u540e\u7684\u6548\u7387\u4fdd\u6301\u662f\u6700\u5dee\u7684.\u5728HV\u9636\u6bb5,\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528IC2\u7684\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,HV\u9636\u6bb5\u4ee5\u540e\u5c31\u80fd\u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u8986\u76d6\u677f\u4e86.</br></br>\u518d\u6b21\u91cd\u590d,\u5f53\u4f60\u4e3a\u6da1\u8f6e\u63d0\u4f9b\u8d85\u8fc7\u6700\u4f73\u6d41\u901f\u7684\u71c3\u6599\u65f6(\u79f0\u4e4b\u4e3a\u8d85\u8f7d\u72b6\u6001),\u6da1\u8f6e\u7684\u8f93\u51fa\u529f\u7387\u63d0\u9ad8,\u4f46\u71c3\u6599\u6548\u7387\u964d\u4f4e,\u540c\u65f6\u6700\u9ad8\u8f93\u51fa\u529f\u7387\u53d6\u51b3\u4e8e\u6da1\u8f6e\u8f6c\u5b50\u7c7b\u578b\u53ca\u5176\u8d85\u8f7d\u6548\u7387\u7b49\u7ea7.\u5bf9\u4e8e\u7b49\u79bb\u5b50\u6da1\u8f6e,\u8d85\u8f7d\u6548\u7387\u7b49\u7ea71\uff1a\u6700\u9ad8\u8d85\u8f7d250\uff05,\u8f93\u51fa\u529f\u7387158\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea72\uff1a\u6700\u9ad8\u8d85\u8f7d400\uff05,\u8f93\u51fa\u529f\u7387214\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea73\uff1a\u6700\u9ad8\u8d85\u8f7d550\uff05,\u8f93\u51fa\u529f\u7387301\uff05.\u8d8a\u63a5\u8fd1\u8d85\u8f7d\u6781\u9650,\u635f\u5931\u7684\u71c3\u6599\u6548\u7387\u8d8a\u591a.</br></br>\u51b3\u5b9a\u6743\u5728\u4f60!</br></br>\u8bd1\u8005\u6ce8\uff1a\u8ba1\u7b97\u6d41\u91cf\u65f6\u6ce8\u610f\u5355\u4f4d\u6362\u7b97,\u5e76\u5411\u4e0a\u53d6\u6574.</br></br>[note]\u5173\u4e8e\u805a\u53d8\u7684\u66f4\u591a\u989d\u5916\u4fe1\u606f,\u8bf7\u67e5\u770b\u65b0\u4efb\u52a1\u7ae0\u8282\"\u5f3a\u5927\u7684\u6838\u7269\u7406\".[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEsQ==",
                    "title": "\u00a7a\u00a7b\u00a7c\u00a7d\u00a7e\u00a7f\u00a7d\u00a7l\u00a7l\u00a7c\u00a7l\u6da1\u8f6e\u65f6\u95f4",
                    "tooltip": "<strong>\u6da1\u8f6e\u65f6\u95f4</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535"
                },
                {
                    "name": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(HV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2790.png",
                    "x": 228.0,
                    "y": 156.0,
                    "data": "\u5982\u679c\u4f60\u5df2\u7ecf\u4e3a\u4e86\u5347\u7ea7\u77f3\u6cb9\u5904\u7406\u7ebf\u6216\u82ef\u5904\u7406\u7ebf\u800c\u4fee\u5efa\u4e86\u84b8\u998f\u5854,\u6700\u7ec8\u53ef\u80fd\u4f1a\u83b7\u5f97\u4e0d\u5c11\u989d\u5916\u534a\u6d41\u8d28\u71c3\u6599,\u7c7b\u4f3c\u91cd\u71c3\u6cb9\u6216\u6742\u915a\u6cb9.\u8981\u662f\u5df2\u7ecf\u56e4\u4e86\u592a\u591a\u4ee5\u81f3\u4e8e\u90fd\u5f00\u59cb\u9500\u6bc1\u4e86\u7684\u8bdd,\u5236\u9020\u4e00\u53f0HV\u534a\u6d41\u8d28\u53d1\u7535\u673a\u5427,\u514d\u8d39\u7684\u80fd\u6e90\u4e0d\u7528\u767d\u4e0d\u7528!</br></br>\u5904\u7406\u6728\u7126\u6cb9\u7684\u84b8\u998f\u5854\u51fa\u4ea7\u7684\u6742\u915a\u6cb9\u5c31\u8db3\u4ee5\u4e3a\u81ea\u5df1\u4f9b\u80fd,\u7b97\u7b97\u71c3\u6599\u6548\u7387,\u4e00\u53f0HV\u534a\u6d41\u8d28\u53d1\u7535\u673a\u5c31\u7ef0\u7ef0\u6709\u4f59\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK5g==",
                    "title": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(HV)",
                    "tooltip": "<strong>\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(HV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "3\u9636\u7ebf\u5708",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2966.png",
                    "x": 336.0,
                    "y": 444.0,
                    "data": "\u4e3a\u4e86\u8d85\u9891,MKVI \u71c3\u6599\u548c\u66ff\u4ee3 MKV \u71c3\u6599\u914d\u65b9.\u7b49\u7b49,\u4f60\u60f3\u8d85\u9891UXV\u5408\u6210\u8868?",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALlg==",
                    "title": "3\u9636\u7ebf\u5708",
                    "tooltip": "<strong>3\u9636\u7ebf\u5708</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>2\u9636\u7ebf\u5708"
                },
                {
                    "name": "\u8d2a\u5a6a\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1342.png",
                    "x": 624.0,
                    "y": 48.0,
                    "data": "\u5f53\u4f60\u8017\u5c3d\u80fd\u6e90\u65f6,\u8fd9\u79cd\u9ad8\u5ea6\u626d\u66f2\u7684\u9ad8\u529f\u7387\u6e90\u8d28\u53d1\u7535\u673a\u662f\u6551\u547d\u7a3b\u8349. \u53ea\u9700\u5c06\u4e00\u4e9b\u91d1\u5236\u54c1\u6254\u8fdb\u4f60\u7684\u70bc\u91d1\u7089\u4e2d,\u7136\u540e\u70e7\u6389\u4f60\u5f97\u5230\u7684\u8d2a\u5a6a\u6e90\u8d28.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFPg==",
                    "title": "\u8d2a\u5a6a\u6e90\u8d28\u53d1\u7535\u673a",
                    "tooltip": "<strong>\u8d2a\u5a6a\u6e90\u8d28\u53d1\u7535\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "name": "\u8010\u8d85\u9ad8\u6e29\u7f51",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3038.png",
                    "x": 228.0,
                    "y": 372.0,
                    "data": "\u00a7o*\u62cd\u62cd\u8010\u8d85\u9ad8\u6e29\u7f51* \u8fd9\u4e2a\u574f\u5c0f\u5b50\u53ef\u4ee5\u627f\u53d7\u5de8\u91cf\u70ed\u91cf!\u00a7r</br></br>\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u6234\u68ee\u7403\u591a\u65b9\u5757\u7ed3\u6784\u7684\u8bdd,\u81ea\u52a8\u5316\u5408\u6210\u8010\u8d85\u9ad8\u6e29\u7f51\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u524d\u63d0\u6761\u4ef6\u4e4b\u4e00.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAL3g==",
                    "title": "\u8010\u8d85\u9ad8\u6e29\u7f51",
                    "tooltip": "<strong>\u8010\u8d85\u9ad8\u6e29\u7f51</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?"
                },
                {
                    "name": "\u7279\u5927\u6da1\u8f6e\u71c3\u6c14\u8f6e\u673a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7393385288067338253.png",
                    "x": 120.0,
                    "y": 372.0,
                    "data": "\u6765\u81eaGTNH\u7684\u7a76\u6781\u71c3\u6c14\u541e\u566c\u8005.\u67e5\u9605\u4e0a\u65b9\u7684XL\u84b8\u6c7d\u6da1\u8f6e\u7ae0\u8282\u6765\u4e86\u89e3\u6240\u6709\u6da1\u8f6e\u5171\u901a\u7684\u8fd0\u4f5c\u65b9\u5f0f.</br></br>[warn]\u8be5\u6da1\u8f6e\u4e0d\u63a5\u53d7\u82ef\u4f5c\u4e3a\u71c3\u6599.[/warn]\u8981\u60f3\u5229\u7528\u4e0a\u82ef\u4ea7\u7ebf,\u4f60\u9700\u8981\u5c06\u5176\u5347\u7ea7\u4e3a\u785d\u57fa\u82ef\u4ea7\u7ebf.\u5c06\u4f1a\u5bf9\u8be5\u6da1\u8f6e\u8fdb\u4e00\u6b65\u4fee\u6539\u4f7f\u5176\u80fd\u591f\u63a5\u53d7\u66f4\u591a\u9ad8\u7b49\u7ea7\u7684\u71c3\u6c14,\u800c\u975e\u65e0\u8111\u585e\u82ef,\u7532\u70f7\u6216\u662f\u5176\u4ed6\u4f4e\u7ea7\u71c3\u6c14.",
                    "quest_id": "Ko5ln-tKSFiZZWtAmSWv8w==",
                    "title": "\u7279\u5927\u6da1\u8f6e\u71c3\u6c14\u8f6e\u673a",
                    "tooltip": "<strong>\u7279\u5927\u6da1\u8f6e\u71c3\u6c14\u8f6e\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c6\u9636\u6bb5(LuV)</br>\u5927\u578b\u71c3\u6c14\u6da1\u8f6e"
                },
                {
                    "name": "\u8fdb\u9636\u53cd\u5e94\u5806",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2829.png",
                    "x": 552.0,
                    "y": 120.0,
                    "data": "\u6d41\u4f53\u53cd\u5e94\u5806,\u8fd8\u6709\u51b0\u7bb1\u6838\u7535\u548c\u6273\u624b\u53cd\u5e94\u5806(lol),\u662f\u4e0d\u540c\u4e8e\u666e\u901a\u7248\u7684\u8fdb\u9636\u7248\u672c.</br></br>\u6d41\u4f53\u53cd\u5e94\u5806\u7684\u5efa\u9020\u65b9\u5f0f\u4e0e\u666e\u901a\u53cd\u5e94\u5806\u4e0d\u540c(\u4f7f\u7528\u53f3\u4fa7\u7684\u8fd9\u4e9b\u65b9\u5757,\u5728\u666e\u901a\u6838\u7535\u5916\u56f4\u6210\u4e00\u4e2a5x5x5\u7684\u4e2d\u7a7a\u7acb\u65b9\u4f53),\u76ee\u7684\u662f\u4ea7\u751f\u5c3d\u53ef\u80fd\u591a\u7684\u70ed\u51b7\u5374\u6db2(\u70ed\u4ea4\u6362\u540e\u5faa\u73af\u4f7f\u7528),\u518d\u5c06\u5176\u8f6c\u5316\u4e3a\u7535\u529b.\u6d41\u4f53\u53cd\u5e94\u5806\u81ea\u5df1\u4e0d\u53d1\u7535,\u4f46\u66f4\u5168\u9762.\u5c06\u70ed\u51b7\u5374\u6db2\u9001\u5230\u5927\u578b\u70ed\u4ea4\u6362\u673a,\u5373\u53ef\u83b7\u5f97\u8fc7\u70ed\u84b8\u6c7d,\u518d\u5c06\u5176\u4f9d\u6b21\u901a\u8fc7\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e\u3001\u666e\u901a\u84b8\u6c7d\u6da1\u8f6e.</br></br>\u51b0\u7bb1\u6838\u7535(\u6211\u4eec\u4e00\u822c\u53eb\u5f3a\u51b7) \u6307\u4e0d\u901a\u8fc7\u6563\u70ed\u7247,\u800c\u662f\u4f7f\u7528\u51b7\u5374\u5355\u5143\u5438\u6536\u70ed\u91cf,\u7ef4\u6301\u53cd\u5e94\u5806\u7684\u70ed\u5e73\u8861.\u518d\u7528\u771f\u7a7a\u51b7\u51bb\u673a\u6062\u590d\u6c26/\u94a0\u94be\u51b7\u5374\u5355\u5143\u8010\u4e45.\u8fd9\u6837\u5c31\u65e0\u9700\u901a\u8fc7\u6563\u70ed\u7247\u6765\u4fdd\u8bc1\u4ea7\u70ed\u6563\u70ed\u5e73\u8861,\u610f\u5473\u7740\u53ef\u4ee5\u585e\u66f4\u591a\u7684\u71c3\u6599\u68d2,\u4f46\u4e00\u4e2a\u5c0f\u95ee\u9898\u5c31\u4f1a...KA-BOOM!</br></br>\u6273\u624b\u53cd\u5e94\u5806 \u6307\u5c06\u53cd\u5e94\u5806\u585e\u6ee1\u71c3\u6599\u68d2,\u542f\u52a8,\u5728\u5176\u7206\u70b8\u524d\u7528\u6273\u624b\u62c6\u6389,\u91cd\u7f6e\u70ed\u91cf\u72b6\u6001.\u5982\u679c\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u8fc7\u7a0b\u81ea\u52a8\u5316,\u4f60\u5c31\u80fd\u83b7\u5f97\u6211\u4eecGTNH\u6838\u79d1\u5b66\u7684\u6700\u9ad8\u5956\u7ae0!</br></br>\u8981\u662f\u4f60\u8fd8\u4e0d\u77e5\u9053MOX\u600e\u4e48\u7528,\u8ba9\u6211\u6765\u6559\u6559\u4f60.\u7b80\u800c\u8a00\u4e4b,MOX\u71c3\u6599\u68d2\u7684\u53d1\u7535\u91cf\u968f\u5806\u6e29\u5347\u9ad8\u800c\u5347\u9ad8.\u6240\u4ee5\u4f60\u9700\u8981\u7ef4\u6301\u597d\u70ed\u5e73\u8861\u5e76\u5c3d\u53ef\u80fd\u5730\u63d0\u9ad8\u5806\u6e29.\u4e0d\u8fc7\u592a\u9ad8\u7684\u5806\u6e29\u53ef\u80fd\u9020\u6210\u9644\u8fd1\u7684\u65b9\u5757\u88ab\u00a7o\u878d\u5316\u00a7r.MOX\u6216\u8005\u8d85\u80fd\u7845\u5ca9\u71c3\u6599\u68d2\u90fd\u6709\u8fd9\u6837\u7684\u529f\u6548.\u53e6\u5916,MOX\u53ef\u4ee5\u4ea7\u51fa\u4e0d\u5c11\u949a(\u800c\u94c0\u504f\u5c11).</br></br>\u589e\u6b96\u53cd\u5e94\u5806 \u6307\u642d\u5efa\u6b64\u53cd\u5e94\u5806,\u66f4\u503e\u5411\u4e8e\u83b7\u5f97\u5176\u4ea7\u7269\u800c\u975e\u9760\u5176\u53d1\u7535,\u6bd4\u5982\u7528\u948d\u5806\u83b7\u5f97\u9565,MOX\u5806\u83b7\u5f97\u949a,\u7b49\u7b49.\u8bf7\u5728NEI\u6216wiki\u4e2d\u67e5\u770b\u71c3\u6599\u68d2(\u67af\u7aedxxx)\u7684\u7528\u9014.</br></br>[note]\u7531\u4e8e\u51b7\u5374\u6db2\u8017\u5c3d\u65f6,\u6d41\u4f53\u53cd\u5e94\u5806\u5f88\u5bb9\u6613\u7206\u70b8,\u6240\u4ee5\u8bf7\u786e\u4fdd\u6b63\u786e\u8bbe\u7f6e\u4e86\u6e29\u5ea6\u76f8\u5173\u7684\u7ea2\u77f3\u4fe1\u53f7,\u53ef\u4ee5\u7d27\u6025\u5173\u505c\u53cd\u5e94\u5806.(\u5efa\u8bae\u5176\u4ed6\u4efb\u4f55\u53cd\u5e94\u5806\u90fd\u8bbe\u7f6e\u4e00\u4e2a\u6e29\u63a7\u4fdd\u9669)[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALDQ==",
                    "title": "\u8fdb\u9636\u53cd\u5e94\u5806",
                    "tooltip": "<strong>\u8fdb\u9636\u53cd\u5e94\u5806</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\"</br>\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "name": "\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\"",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1905.png",
                    "x": 516.0,
                    "y": 120.0,
                    "data": "\u5927\u578b\u70ed\u4ea4\u6362\u673a\u662f\u4e00\u79cd\u4ea7\u80fd\u591a\u65b9\u5757\u673a\u5668,\u53ef\u4ee5\u63a5\u53d7\u975e\u76f4\u63a5\u7684\u71c3\u6599,\u8f93\u51fa\u7684\u4e5f\u4e0d\u662fEU.\u90a3\u662f\u5b83\u662f\u7528\u6765\u505a\u4ec0\u4e48\u7684\u5462? \u00a77\u70e7\u5f00\u6c34!\u00a7r</br></br>\u5b9e\u9645\u4e0a,\u5b83\u662f\u4e00\u79cd\u84b8\u6c7d\u9505\u7089,\u4f7f\u7528\u67d0\u4e9b\u6d41\u4f53\u66ff\u4ee3\u4e86\u56fa\u4f53\u71c3\u6599,\u4e0d\u8fc7\u673a\u5236\u66f4\u52a0\u590d\u6742.\u5b83\u7684\u4e24\u79cd\u4e3b\u8981\"\u71c3\u6599\"\u662f\u5ca9\u6d46\u548c\u70ed\u51b7\u5374\u6db2,\u800c\u540e\u8005\u66f4\u5f3a,\u4f46\u83b7\u53d6\u4e5f\u66f4\u56f0\u96be. \u901a\u8fc7\u70bc\u72f1\u4e4b\u58f6\u6216\u65e0\u6570\u5176\u4ed6\u9009\u62e9\u90fd\u53ef\u4ee5\u8f7b\u6613\u5b9e\u73b0\u5ca9\u6d46\u81ea\u52a8\u5316,\u800c\u70ed\u51b7\u5374\u6db2\u901a\u5e38\u9700\u8981\u5408\u9002\u7684\u4ea7\u80fd\u88c5\u7f6e.</br></br>\u4f7f\u7528\u5ca9\u6d46\u65f6,\u5927\u578b\u70ed\u4ea4\u6362\u673a\u00a7d\u6bcf1mB\u5ca9\u6d46\u8f93\u51fa160mB\u84b8\u6c7d,\u8f93\u5165\u5ca9\u6d46\u901f\u5ea6\u6700\u9ad8\u4e3a1000mB/s\u00a7r(\u4e5f\u5c31\u662f100\uff05\u6da1\u8f6e\u6548\u7387\u4e0b\u00a7a4000-EU/t\u00a7r).\u800c\u4f7f\u7528\u51b7\u5374\u6db2\u65f6,\u5927\u578b\u70ed\u4ea4\u6362\u673a\u00a7d\u6bcf1mB\u70ed\u51b7\u5374\u6db2\u8f93\u51fa400mB\u84b8\u6c7d,\u8f93\u5165\u70ed\u51b7\u5374\u6db2\u901f\u5ea6\u6700\u9ad8\u4e3a800mB/s\u00a7r(\u4e5f\u5c31\u662f100\uff05\u6da1\u8f6e\u6548\u7387\u4e0b\u00a7a8000-EU/t\u00a7r).</br></br>\u00a7c\u5f53\u4f60\u8d85\u51fa\u6b64\u8f93\u5165\u901f\u5ea6\u65f6,\u8f93\u51fa\u53d8\u4e3a\u8fc7\u70ed\u84b8\u6c7d,\u9700\u8981\u901a\u8fc7\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e\u624d\u80fd\u53d8\u56de\u666e\u901a\u84b8\u6c7d.\u00a7r\u8fd9\u65f6\u7684\u6700\u5927\u8f93\u5165\u901f\u5ea6\u4e3a\u4e4b\u524d\u7684\u4e24\u500d,\u8f6c\u6362\u7387\u53d8\u4e3a\u00a7d\u5ca9\u6d461:80\u00a7r\u800c\u00a7d\u70ed\u51b7\u5374\u6db21:200\u00a7r,\u540c\u65f6100\uff05\u6da1\u8f6e\u6548\u7387\u4e0b\u80fd\u91cf\u8f93\u51fa\u4e3a\u5ca9\u6d46\u7684\u00a7a12000-EU/t\u00a7r\u4ee5\u53ca\u70ed\u51b7\u5374\u6db2\u7684\u00a7a24000-EU/t\u00a7r.</br></br>\u00a76\u00a7l\u975e\u5e38\u5f3a\u5927,\u4f46\u4e5f\u5f88\u590d\u6742,\u9700\u8981\u5927\u578b\u84b8\u6c7d\u6da1\u8f6e!\u00a7r</br></br>\u60f3\u8981\u83b7\u77e5\u66f4\u591a\u4fe1\u606f,\u8bf7\u5230[url]https://wiki.gtnewhorizons.com/wiki/Large_Heat_Exchanger[/url]\u9605\u8bfb\u5176\u673a\u5236,\u6216\u53bb\u5230[url]https://wiki.gtnewhorizons.com/wiki/Fluid_Reactor[/url],\u5b66\u4e60\u5982\u4f55\u4f7f\u7528\u6d41\u4f53\u53cd\u5e94\u5806.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHcQ==",
                    "title": "\u00a76\u00a7l\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\"",
                    "tooltip": "<strong>\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\"</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86</br>EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u9ad8\u7ea7\u954d\u949b\u8bfa",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7154632998014096877.png",
                    "x": 444.0,
                    "y": 492.0,
                    "data": "\u5728\u8fd9\u90e8\u5206,\u4f60\u53ef\u4ee5\u5728\u53d1\u7535\u4e4b\u4f59\u83b7\u5f97\u4e00\u4e9b\u6709\u7528\u7684\u4e1c\u897f.\u6c19\u548c\u9ad8\u7ea7\u954d\u949b\u8bfa,\u5176\u4e2d\u591a\u4e8f\u4e86\u4fdd\u62a4\u6c14\u914d\u65b9\u7684\u6539\u9769,\u6c19\u5728\u5de5\u4e1a\u9ad8\u7089\u4e2d\u53d8\u5f97\u5341\u5206\u6709\u7528.\u800c\u81f3\u4e8e\u9ad8\u7ea7\u954d\u949b\u8bfa,\u5982\u679c\u4f60\u8fd8\u6ca1\u4e3a\u5b83\u4e13\u8bbe\u4e00\u4e2a\u91cf\u5b50\u53cd\u5e38,\u53ef\u4ee5\u8bd5\u4e00\u4e0b\u8fd9\u4e2a\u914d\u65b9.\u8c01\u77e5\u9053\u5c06\u6765\u8fd8\u6709\u4e9b\u4ec0\u4e48.</br></br>\u7531\u4e8e\u5c31\u5728\u6700\u540e\u4e00\u6b65\u805a\u53d8\u4e4b\u524d,\u8fd9\u4e9b\u914d\u65b9\u4e5f\u662f\u548c\u4e4b\u524d\u4e00\u6837\u76840.144:1\u7684\u6bd4\u4f8b,\u6210\u4e3a\u4f60\u4f7f\u7528\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806\u7684\u969c\u788d.\u9700\u8981\u91cd\u70b9\u5173\u6ce8\u7684\u662f\u5012\u6570\u7b2c\u4e8c\u4e2a\u805a\u53d8\u914d\u65b9,\u9ad8\u7ea7\u954d\u949b\u8bfa\u7b49\u79bb\u5b50\u4f53,\u4f60\u9700\u89819.216\u6216\u8005\u8bf4\u662f10\u53f0MK3\u805a\u53d8\u53cd\u5e94\u5806\u6765\u4f9b\u7ed9\u4e00\u53f0\u805a\u53d8\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53\u7684MK3\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806.\u800c\u5982\u679c\u4f7f\u7528\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806\u5236\u4f5c\u9ad8\u7ea7\u954d\u949b\u8bfa\u7b49\u79bb\u5b50\u4f53,\u5e76\u4e14\u53ea\u8981\u80fd\u591f\u4e3a\u5176\u63d0\u4f9b\u5145\u8db3\u7684\u539f\u6599,\u90a3\u5c31\u53ef\u4ee5\u4f9b\u7ed96\u53f0\u805a\u53d8\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53\u7684MK3\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806.",
                    "quest_id": "D0JaazeIQ8qctaMx9xTqEw==",
                    "title": "\u9ad8\u7ea7\u954d\u949b\u8bfa",
                    "tooltip": "<strong>\u9ad8\u7ea7\u954d\u949b\u8bfa</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u739b\u4e3d\u9514?</br>\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b</br>\u963f\u7f8e\u5229\u5361!!!!!!!!!"
                },
                {
                    "name": "\u66f4\u591a\u538b\u7f29\u6ce8\u9b54",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1337.png",
                    "x": 120.0,
                    "y": 48.0,
                    "data": "\u4f60\u53ef\u4ee5\u6ce8\u9b54\u538b\u7f29\u592a\u9633\u80fd,\u83b7\u5f97\u67d0\u79cd\u573a\u5408\u4e0b\u66f4\u9ad8\u7684\u53d1\u7535\u91cf.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFOQ==",
                    "title": "\u66f4\u591a\u538b\u7f29\u6ce8\u9b54",
                    "tooltip": "<strong>\u66f4\u591a\u538b\u7f29\u6ce8\u9b54</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6ce8\u9b54\u592a\u9633\u80fd</br>\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd"
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2814.png",
                    "x": 444.0,
                    "y": 300.0,
                    "data": "\u8fd9\u662fZPM\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK_g==",
                    "title": "\u00a79\u00a7l\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)",
                    "tooltip": "<strong>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1</br>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)</br>\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?"
                },
                {
                    "name": "\u6728\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1340.png",
                    "x": 588.0,
                    "y": 48.0,
                    "data": "\u5f53\u4f7f\u7528\u795e\u5947\u7684\u690d\u7269\u6765\u83b7\u5f97\u6e90\u8d28\u65f6,\u4f60\u6700\u7ec8\u4f1a\u5f97\u5230\u51e0\u5341\u4e2a\u88c5\u6ee1\u6728\u4e4b\u6e90\u8d28\u7684\u7f50\u5b50. \u4f46\u4e0d\u7528\u62c5\u5fc3! \u8fd9\u53f0\u53d1\u7535\u673a\u4f7f\u7528\u6728\u4e4b\u6e90\u8d28\u8fd0\u884c!\u771f\u68d2!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFPA==",
                    "title": "\u6728\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "tooltip": "<strong>\u6728\u4e4b\u6e90\u8d28\u53d1\u7535\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "name": "\u5927\u82ef\u73af\u795e\u6559\u5723\u5802",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1869.png",
                    "x": 156.0,
                    "y": 120.0,
                    "data": "MV\u71c3\u6c14\u8f6e\u673a\u662f\u82ef\u7684\u5b8c\u7f8e\u642d\u6863,\u73b0\u5728\u4f60\u80fd\u771f\u6b63\u5236\u9020\u5b83\u4e86.\u8bf7\u5230\"\u5927\u4f17\u751f\u7269\u5b66\"\u4efb\u52a1\u680f\u67e5\u770b\u8be6\u60c5,\u5b66\u4e60\u5982\u4f55\u81ea\u52a8\u5316\u5236\u9020\u5927\u91cf\u7684\u82ef,\u6216\u8005\u76f4\u63a5\u67e5\u770bNEI\u4e5f\u884c.\u4ece\u6811\u6728\u4e2d\u83b7\u53d6\u82ef\u662f\u53ef\u518d\u751f\u7684,\u4e5f\u662f\u4e00\u79cd\u53d1\u7535\u7684\u5f3a\u529b\u624b\u6bb5,\u800c\u4e14\u5982\u679c\u4f60\u4f7f\u7528\u65b0\u89e3\u9501\u7684\u591a\u65b9\u5757\u673a\u5668\u5bf9\u4ea7\u7ebf\u4e0d\u65ad\u5347\u7ea7\u7684\u8bdd,\u5b83\u80fd\u652f\u6301\u4f60\u6570\u4e2a\u9636\u6bb5\u7684\u53d1\u5c55.</br></br>\u9002\u65f6\u653e\u5f03\u84b8\u6c7d\u662f\u4e2a\u660e\u667a\u7684\u51b3\u5b9a,\u56e0\u4e3a\u968f\u7740\u7528\u7535\u9700\u6c42\u7684\u4e0d\u65ad\u63d0\u5347,\u4f60\u9700\u8981\u5de8\u5927\u7684\u7ba1\u9053\u6765\u8f93\u9001\u84b8\u6c7d,\u800c\u4e14\u73b0\u9636\u6bb5\u7684\u84b8\u6c7d\u8f6e\u673a\u6548\u7387\u8f83\u4f4e. \u76f8\u53cd,\u5236\u9020\u70ed\u89e3\u7089\u6216\u9ad8\u7ea7\u7126\u7089,\u8ba9\u6728\u70ad\u751f\u4ea7\u66f4\u52a0\u8fc5\u901f,\u518d\u4ece\u4e2d\u63d0\u70bc\u51fa\u82ef,\u901a\u5165\u71c3\u6c14\u8f6e\u673a\u53d1\u7535,\u592a\u5999\u4e86,\u6211\u5927\u82ef\u73af\u795e\u6559!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAHTQ==",
                    "title": "\u00a76\u00a7l\u5927\u82ef\u73af\u795e\u6559\u5723\u5802",
                    "tooltip": "<strong>\u5927\u82ef\u73af\u795e\u6559\u5723\u5802</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>MV\u9a6c\u8fbe"
                },
                {
                    "name": "\u8f6c\u5b50",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1140.png",
                    "x": 408.0,
                    "y": 120.0,
                    "data": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u6216\u548c\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u90fd\u9700\u8981\u8f6c\u5b50\u6765\u8fd0\u4f5c. \u53ef\u901a\u8fc7\u6807\u51c6\u81ea\u52a8\u5316\u6dfb\u52a0\u6216\u662f\u79fb\u9664\u8f6c\u5b50. \u8d8a\u9ad8\u7ea7\u7684\u8f6c\u5b50\u4f7f\u7528\u65f6\u95f4\u5c31\u8d8a\u957f.\u6b64\u5916,\u7528\u94f1\u5236\u9020\u7684\u8f6c\u5b50\u4e0d\u4f1a\u78e8\u635f.\u800cIC2\u7684\u94f1\u8f6c\u5b50\u6709\u53ef\u80fd\u56e0\u4e3a\u8010\u4e45\u635f\u5931\u51fa\u73b0bug. \u5145\u80fd\u5408\u91d1\u8f6c\u5b50\u5728\u5f53\u524d\u53ef\u80fd\u662f\u6700\u4f18\u9009\u62e9,\u4ee5\u4e3a\u5b83\u6070\u597d\u53ef\u4ee5\u63d0\u4f9b\u6ee11A\u8f93\u51fa,\u800c\u76ee\u524d\u591a\u4f59\u8f93\u51fa\u4f1a\u88ab\u6d6a\u8d39.</br></br>[note]\u53ea\u9700\u5236\u9020\u4e00\u4e2a\u8f6c\u5b50\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1.[/note]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEdA==",
                    "title": "\u00a7c\u00a79\u00a7l\u8f6c\u5b50",
                    "tooltip": "<strong>\u8f6c\u5b50</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)</br>\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)"
                },
                {
                    "name": "\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4721119019196807237.png",
                    "x": 360.0,
                    "y": 492.0,
                    "data": "\u8981\u5b8c\u6210\u8fd9\u6761\u805a\u53d8\u4ea7\u7ebf,\u4f60\u9700\u8981\u7528\u4e00\u79cd\u7279\u6b8a\u7684\u6750\u6599,\u4e5f\u662fGT++\u7684\u6750\u6599:\u6cf0\u5766\u7cbe\u94a2,\u6765\u6fc0\u53d1\u4f60\u7684\u661f\u4f53\u949b\u7b49\u79bb\u5b50\u4f53.\u6cf0\u5766\u7cbe\u94a2\u53ef\u662f\u8017\u7535\u5927\u5934,\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u53ea\u9700\u89818L\u8fd9\u4e48\u4f4e\u7684\u8f93\u5165\u91cf,\u4f60\u4e5f\u4e0d\u5f97\u4e0d\u5229\u75283\u53f0\u51b6\u70bc\u6cf0\u5766\u7cbe\u94a2\u7684\u5408\u91d1\u51b6\u70bc\u7089\u4f9b\u7ed9\u4e00\u53f0\u805a\u53d8\u865a\u6069\u7b49\u79bb\u5b50\u4f53\u7684MK2\u53cd\u5e94\u5806.\u5982\u679c\u4f60\u60f3\u6269\u5927\u8fd9\u6761\u4ea7\u7ebf\u7684\u89c4\u6a21,\u6700\u4f73\u65b9\u6848\u5c31\u662f\u5efa\u9020\u4e00\u53f0\u5de8\u578b\u5408\u91d1\u51b6\u70bc\u7089,\u5e76\u5229\u7528\u5de5\u4e1a\u9ad8\u7089\u7684\u7ebf\u5708\u6765\u8282\u7701\u4e00\u4e9b\u7535\u529b\u6d88\u8017,\u8fdb\u800c\u63d0\u9ad8\u53d1\u7535\u4ea7\u7ebf\u6548\u7387.</br></br>\u865a\u6069\u7b49\u79bb\u5b50\u4f53\u6709\u7740350M\u7684\u70ed\u503c,\u4e5f\u5c31\u53ef\u4ee5\u5f88\u597d\u5730\u8fd0\u884c\u5728\u4e09\u5143\u91d1\u5c5e\u5de8\u578b\u6da1\u8f6e\u800c\u6ca1\u6709\u60e9\u7f5a,\u4f46\u9521\u7b49\u79bb\u5b50\u4f53\u7531\u4e8e\u5176\u70ed\u503c\u4e0d\u53ca\u865a\u6069\u7b49\u79bb\u5b50\u4f53\u7684\u4e00\u534a,\u5728\u76f8\u540c\u7684\u6da1\u8f6e\u914d\u7f6e\u4e0b\u4f1a\u670974.5%%\u7684\u60e9\u7f5a.\u5982\u679c\u4f60\u60f3\u5927\u89c4\u6a21\u6269\u5927\u7b49\u79bb\u5b50\u53d1\u7535\u91cf,\u53ef\u4ee5\u9009\u62e9MK2\u805a\u53d8\u4ea7\u7ebf,\u4f46MK3\u805a\u53d8\u4ea7\u7ebf\u53ef\u80fd\u662f\u4e2a\u66f4\u597d\u7684\u9009\u62e9.</br></br>0.144:1\u7684\u53cd\u5e94\u5806\u6bd4\u4f8b\u4e5f\u540c\u6837\u9002\u7528\u4e8e\u8fd9\u6b65.",
                    "quest_id": "DPl-UUZfTAa-ezdD_m8Huw==",
                    "title": "\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b",
                    "tooltip": "<strong>\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8fd9\u662f\u4f60\u7684\u6c2a\u661f\u77f3!"
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2961.png",
                    "x": 336.0,
                    "y": 408.0,
                    "data": "\u6bcfmB\u51fa\u4ea7975,000-EU/t,\u6301\u7eed3\u79d2. \u8bf4\u4e0d\u5b9a\u80fd\u548c\u7b49\u79bb\u5b50\u78b0\u4e00\u78b0. </br></br>\u5982\u679c\u4f60\u60f3\u8981\u91ca\u653e\u7845\u5ca9\u71c3\u6599\u4e4b\u529b, \u8d77\u7801\u51c6\u5907\u4e00\u6761\u9760\u8c31\u7684\u7845\u5ca9\u4ea7\u7ebf\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALkQ==",
                    "title": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI",
                    "tooltip": "<strong>\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806"
                },
                {
                    "name": "\u6781\u7aef\u5371\u9669\u7684\u6838\u71c3\u6599:\"\u6838\u5fc3\"",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/490.png",
                    "x": 552.0,
                    "y": 300.0,
                    "data": "\u4e3a\u90a3\u4e9b\u771f\u6b63\u75af\u72c2\u7684\u6838\u5de5\u4e1a\u79d1\u5b66\u5bb6\u51c6\u5907\u7684.\u6216\u662f\u90a3\u4e9b\u61c2\u5f97\u4e0a\u7f51\u7684\u4eba(\u4e0d\u80fd\u4fdd\u8bc1,\u8bf7\u76f8\u4fe1\u6211!).\u5982\u679c\u4f60\u9700\u8981\u7528\u5b83\u53d1\u7535\u6216\u662f\u4e0d\u60f3\u5b83\u5f00\u4e00\u79d2\u5c31\u7206\u70b8\u7684\u8bdd,\u9700\u8981\u4f7f\u7528\u5927\u91cf\u7684\u51b7\u5374\u5355\u5143.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAB6g==",
                    "title": "\u6781\u7aef\u5371\u9669\u7684\u6838\u71c3\u6599:\"\u6838\u5fc3\"",
                    "tooltip": "<strong>\u6781\u7aef\u5371\u9669\u7684\u6838\u71c3\u6599:\"\u6838\u5fc3\"</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u53ef\u9009\u6838\u71c3\u6599:\u6cf0\u4f2f\u5229\u4e9a</br>\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9"
                },
                {
                    "name": "\u5c06\u80fd\u91cf\u9001\u56de",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1145.png",
                    "x": 372.0,
                    "y": 120.0,
                    "data": "\u52a8\u80fd\u53d1\u7535\u673a\u7684\u517c\u5bb9\u6027\u5f97\u5230\u4e86\u63d0\u5347,\u73b0\u5728\u65e0\u9700\u53d8\u538b\u5668\u5373\u53ef\u6b63\u5e38\u901a\u8fc7\u7ebf\u7f06\u8f93\u51fa\u80fd\u91cf.\u4f46\u5728\u8f93\u7535\u7684\u65f6\u5019,\u4f7f\u7528\u53d8\u538b\u5668\u5347\u538b\u4ecd\u7136\u4e0d\u5931\u4e3a\u4e00\u79cd\u6781\u4f73\u7684\u964d\u4f4e\u635f\u8017\u65b9\u5f0f.\u4e3e\u4e2a\u4f8b\u5b50,\u4ece160\u683c\u7684\u53d1\u7535\u673a\u4f20\u8f93\u523063\u683c\u5730\u8868,1\u7ebf\u635f\u7684\u7ebf\u7f06,\u6bcfA\u7535\u6d41\u4f1a\u635f\u593197EU,\u5982\u679c\u662fHV\u8f93\u7535,\u5c31\u4f1a\u662f97/512,\u5c06\u8fd1\u4e94\u5206\u4e4b\u4e00\u7684\u635f\u5931;\u800c\u5982\u679c\u662fEV\u8f93\u7535,\u90a3\u4e48\u5c31\u662f97/2048,\u4e0d\u52301/20\u7684\u635f\u5931,\u8fd9\u4e0d\u5c31\u662f\u597d\u591a\u4e86\u561b.(\u5347\u538b\u524d\u9700\u8981\u901a\u8fc7\u4e00\u6bb5\u7ebf\u7f06,\u5c06\u53d1\u7535\u673a\u8f93\u51fa\u7684IC-EU\u8f6c\u5316\u4e3aGT-EU)</br></br>[warn]IC2\u673a\u5668\u4e0d\u6015\u88ab\u96e8\u6dcb,\u4f46\u522b\u5fd8\u4e86\u906e\u76d6\u53d8\u538b\u5668.[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAEeQ==",
                    "title": "\u00a79\u00a7l\u5c06\u80fd\u91cf\u9001\u56de",
                    "tooltip": "<strong>\u5c06\u80fd\u91cf\u9001\u56de</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u8f6c\u5b50"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(IV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1720.png",
                    "x": 12.0,
                    "y": 228.0,
                    "data": "\u4f60\u53ef\u4ee5\u5236\u4f5c\u7684\u4e0b\u4e00\u4e2a\u592a\u9633\u80fd\u8986\u76d6\u677f\u662fIV\u7b49\u7ea7\u7684.\u5b83\u6700\u9ad8\u4ea7\u751f8192-EU/t.\u53ef\u4ee5\u7528\u4f5c\u5927\u591a\u6570GT\u673a\u5668\u7684\u8986\u76d6\u677f. \u9996\u5148,\u4f60\u9700\u8981\u7528\u5f3a\u5316\u94f1\u548c\u9633\u5149\u5316\u5408\u7269\u751f\u4ea7\u9633\u5149\u5408\u91d1. \u5236\u4f5c\u6b64\u592a\u9633\u80fd\u8986\u76d6\u677f\u9700\u8981\u65e0\u5c3d\u8d2a\u5a6a9x9\u7ec8\u6781\u5de5\u4f5c\u53f0.</br></br>\u9664\u975e\u4f60\u771f\u7684\u5f88\u559c\u6b22\u592a\u9633\u80fd,\u5426\u5219\u8fd9\u53ef\u80fd\u662f\u503c\u5f97\u5236\u9020\u7684\u6700\u540e\u4e00\u9636\u592a\u9633\u80fd...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGuA==",
                    "title": "\u00a7c\u00a7l\u592a\u9633\u4e4b\u529b(IV)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(IV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(EV)</br>LuV\u7ec4\u88c5\u673a"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(LV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/936.png",
                    "x": 12.0,
                    "y": 84.0,
                    "data": "\u73b0\u5728\u4f60\u53ef\u4ee5\u5236\u9020LV\u7ea7\u522b\u7684\u592a\u9633\u80fd\u677f\u4e86.\u4ed6\u53ef\u4ee5\u63d0\u4f9b\u6700\u592732EU/t\u7684\u8f93\u51fa,\u5b83\u540c\u6837\u53ef\u4ee5\u4f5c\u4e3a\u8986\u76d6\u677f\u76f4\u63a5\u8d34\u5230GT\u7684\u673a\u5668\u4e0a\u9762\u6765\u7ed9\u8bbe\u5907\u4f9b\u7535.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADqA==",
                    "title": "\u00a7a\u00a7l\u592a\u9633\u4e4b\u529b(LV)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(LV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(ULV)</br>\u7ec8\u6781\u5de5\u4f5c\u53f0</br>\u5145\u80fd\u6676\u4f53"
                },
                {
                    "name": "\u4e3a\u4e86\u4f9b\u5e94\u5b83,\u4f60\u780d\u4f10\u4e86\u591a\u5c11\u68ee\u6797?",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2786.png",
                    "x": 156.0,
                    "y": 156.0,
                    "data": "\u8fd9\u662fHV\u7248\u672c,\u6548\u7387\u5df2\u7ecf\u4f4e\u81f385\uff05.\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u84b8\u998f\u5854\u4e2d\u751f\u4ea7\u66f4\u591a\u7684\u82ef,\u6765\u5f25\u8865\u8fd9\u4e00\u70b9,\u987a\u4fbf\u8fd8\u53ef\u4ee5\u4ea7\u51fa\u66f4\u591a\u82ef\u915a\u548c\u7532\u82ef;\u6216\u8005\u6362\u7528\u77f3\u8111\u6cb9...\u76ee\u524d,\u4f60\u6709\u5f88\u591a\u9009\u62e9,\u5b8c\u5168\u8db3\u4ee5\u5e94\u4ed8\u4f60\u7684\u81ea\u52a8\u5316\u4f53\u7cfb\u4e0d\u65ad\u589e\u957f\u7684\u80fd\u6e90\u9700\u6c42.</br></br>\u82ef\u5728HV\u9636\u6bb5\u65e0\u6cd5\u8fdb\u884c\u5347\u7ea7,\u8fd8\u5f97\u7b49\u5230EV\u9636\u6bb5.\u5c4a\u65f6,\u4f60\u5c31\u80fd\u5236\u9020\u00a7o\u785d\u57fa\u00a7r\u82ef\u4e86,\u7136\u540e\u5c06\u5176\u7f6e\u4e8e\u66f4\u5927\u7684\u6da1\u8f6e\u4e2d\u71c3\u70e7.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK4g==",
                    "title": "\u4e3a\u4e86\u4f9b\u5e94\u5b83,\u4f60\u780d\u4f10\u4e86\u591a\u5c11\u68ee\u6797?",
                    "tooltip": "<strong>\u4e3a\u4e86\u4f9b\u5e94\u5b83,\u4f60\u780d\u4f10\u4e86\u591a\u5c11\u68ee\u6797?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(ZPM)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2782.png",
                    "x": 264.0,
                    "y": 300.0,
                    "data": "\u8fd9\u662fZPM\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK3g==",
                    "title": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(ZPM)",
                    "tooltip": "<strong>\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(ZPM)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f00\u59cb\u805a\u53d8</br>\u5236\u9020\u9545"
                },
                {
                    "name": "\u53ef\u9009\u6838\u71c3\u6599:\u6cf0\u4f2f\u5229\u4e9a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/198.png",
                    "x": 516.0,
                    "y": 300.0,
                    "data": "\u5b83\u4eec\u4e0e\u94c0\u7c7b\u4f3c\u4e0d\u8fc7\u53d1\u70ed\u4ec5\u4e3a\u5176\u4e00\u534a.\u76ee\u524d\u8fd8\u6ca1\u6709\u73b0\u6210\u7684\u53cd\u5e94\u5806\u8bbe\u8ba1\u56fe,\u800c\u4e14\u4f60\u9700\u8981T5\u706b\u7bad(LuV),\u624d\u80fd\u5230\u8fbe\u7f57\u65af128ba,\u83b7\u53d6\u6cf0\u4f2f\u5229\u4e9a,\u6211\u89c9\u5f97\u5b8c\u5168\u4e0d\u503c.\u5982\u679c\u4f60\u4e0d\u540c\u610f\u8fd9\u4e00\u70b9,\u8bf7\u4e3a\u5927\u5bb6\u8bbe\u8ba1\u4e00\u4e2a\u6cf0\u4f2f\u5229\u4e9a\u53cd\u5e94\u5806.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAxg==",
                    "title": "\u00a7a\u00a7l\u53ef\u9009\u6838\u71c3\u6599:\u6cf0\u4f2f\u5229\u4e9a",
                    "tooltip": "<strong>\u53ef\u9009\u6838\u71c3\u6599:\u6cf0\u4f2f\u5229\u4e9a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9"
                },
                {
                    "name": "\u6c22\u6c14\u3001\u7532\u70f7\u6216\u8005\u4e00\u4e9b\u5c41(\u5929\u7136\u6c14)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/533.png",
                    "x": 156.0,
                    "y": 84.0,
                    "data": "\u5728\u65e5\u5e38\u751f\u4ea7\u4e2d\u4f60\u53ef\u80fd\u4f1a\u5269\u4e0b\u4e00\u4e9b\u6c22\u6c14\u6216\u8005\u7532\u70f7. \u6bd4\u5982\u8bf4\u5728\u79bb\u5fc3\u673a\u4e2d\u79bb\u5fc3\u68d5\u8910\u94c1\u6216\u8005\u9ec4\u8910\u94c1\u53ef\u4ee5\u5f97\u5230\u6c22\u6c14,\u628a\u4f60\u5403\u5269\u4e0b\u7684\u98df\u7269\u6254\u8fdb\u79bb\u5fc3\u673a\u53ef\u4ee5\u83b7\u5f97\u7532\u70f7.\u79bb\u5fc3\u6a61\u80f6\u6811\u539f\u6728\u53ef\u4ee5\u83b7\u5f9760mB\u7684\u7532\u70f7,\u8fd8\u6709\u8bb8\u591a\u5176\u4ed6\u4f5c\u7269\u4e5f\u53ef\u4ee5\u7528\u8fd9\u79cd\u65b9\u5f0f\u4ea7\u51fa\u7532\u70f7.</br></br>\u4f7f\u7528\u8fd9\u4e9b\u53d1\u7535\u673a\u7684\u4e3b\u8981\u53d1\u7535\u4ea7\u7ebf\u662f\u82ef,\u4f46\u90a3\u9700\u8981MV\u7ea7\u673a\u5668.</br></br>\u5982\u679c\u4f60\u6b63\u5728\u8ba1\u5212\u7740\u642d\u5efa\u53ef\u518d\u751f\u80fd\u6e90\u7ebf,\u76f8\u4fe1\u6211,\u8fd9\u5c06\u662f\u4f60\u6700\u5e38\u7528\u7684\u53d1\u7535\u673a\u7c7b\u578b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAACFQ==",
                    "title": "\u00a75\u00a7l\u6c22\u6c14\u3001\u7532\u70f7\u6216\u8005\u4e00\u4e9b\u5c41(\u5929\u7136\u6c14)",
                    "tooltip": "<strong>\u6c22\u6c14\u3001\u7532\u70f7\u6216\u8005\u4e00\u4e9b\u5c41(\u5929\u7136\u6c14)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#3"
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(LuV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2805.png",
                    "x": 372.0,
                    "y": 264.0,
                    "data": "\u8fd9\u662fLuV\u7248\u672c.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK9Q==",
                    "title": "\u00a79\u00a7l\u52a8\u80fd\u53d1\u7535\u673a(LuV)",
                    "tooltip": "<strong>\u52a8\u80fd\u53d1\u7535\u673a(LuV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4</br>\u52a8\u80fd\u53d1\u7535\u673a(IV)"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(IV)1x1",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1721.png",
                    "x": 48.0,
                    "y": 228.0,
                    "data": "\u5c06\u8fd9\u4e9b8192EU/t\u592a\u9633\u80fd\u8986\u76d6\u677f\u8d34\u5230\u65b9\u5757\u4e0a,\u4f7f\u5176\u53ef\u4ee5\u653e\u7f6e\u5728\u4e16\u754c\u4e0a. \u6216\u4f7f\u7528LuV\u7ec4\u88c5\u673a\u5c06\u592a\u9633\u80fd\u8986\u76d6\u677f\u4e0eIV\u673a\u5668\u5916\u58f3\u3001\u7535\u6c60\u548c\u673a\u68b0\u81c2\u7ed3\u5408\u5728\u4e00\u8d77.\u90a3\u4e48\u6b64\u592a\u9633\u80fd\u8986\u76d6\u677f\u5c06\u4e0d\u518d\u9700\u8981\u624b\u52a8\u6e05\u6d01.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAGuQ==",
                    "title": "\u00a7c\u00a7l\u592a\u9633\u4e4b\u529b(IV)1x1",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(IV)1x1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u592a\u9633\u4e4b\u529b(IV)"
                },
                {
                    "name": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2959.png",
                    "x": 300.0,
                    "y": 408.0,
                    "data": "\u8fd9\u53f0\u75af\u72c2\u7684\u673a\u5668\u662f\u7528\u6765\u5236\u9020MkIII\u53ca\u4ee5\u4e0a\u7845\u5ca9\u71c3\u6599\u7684.</br></br>\u5b83\u7684\u8d85\u9891\u673a\u5236\u7c7b\u4f3c\u805a\u53d8\u53cd\u5e94\u5806--\u4e0d\u80fd\u901a\u8fc7\u7b80\u5355\u5347\u538b\u5b9e\u73b0\u8d85\u9891.\u4f60\u5f97\u7528\u66f4\u9ad8\u9636\u7684\u7ebf\u5708\u624d\u884c.</br></br>\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u8fd8\u652f\u6301\u00a79Tec\u00a71Tech\u00a7r\u591aA\u80fd\u6e90\u4ed3\u548c\u6fc0\u5149\u4ed3.</br></br>\u4e3e\u4e2a\u4f8b\u5b50,MkIV\u7845\u5ca9\u71c3\u6599\u8981\u6c422\u9636\u7ebf\u5708,\u800c\u7cbe\u70bc\u5382\u5b9e\u9645\u5b89\u88c5\u4e863\u9636\u7ebf\u5708,\u90a3\u4e48\u4f1a\u8fdb\u884c\u4e00\u6b21\u7c7b\u4f3c\u4e8e\u805a\u53d8\u53cd\u5e94\u5806\u7684\u8d85\u9891--\u529f\u7387x2,\u65f6\u95f4\u51cf\u534a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALjw==",
                    "title": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382",
                    "tooltip": "<strong>\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806"
                },
                {
                    "name": "\u5730\u70ed\u5f15\u64ce(IV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2799.png",
                    "x": 588.0,
                    "y": 264.0,
                    "data": "\u8fd9\u662fIV\u7248\u672c.\u51e0\u4e4e\u53ef\u4ee5\u80af\u5b9a,\u4ea7\u751f\u7684\u6c61\u67d3\u6bd4\u5b83\u8bf4\u7684\u8981\u591a...",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAK7w==",
                    "title": "\u5730\u70ed\u5f15\u64ce(IV)",
                    "tooltip": "<strong>\u5730\u70ed\u5f15\u64ce(IV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(HV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1006.png",
                    "x": 12.0,
                    "y": 156.0,
                    "data": "\u63a5\u4e0b\u6765\u8981\u5f00\u59cb\u5236\u4f5cHV\u7ea7\u522b\u592a\u9633\u80fd\u677f,\u5b83\u53ef\u4ee5\u63d0\u4f9b\u6700\u5927512EU/t\u7684\u8f93\u51fa.\u53ef\u4ee5\u7528\u4f5c\u5927\u591a\u6570GT\u673a\u5668\u7684\u8986\u76d6\u677f.</br>\u9996\u5148\u4f60\u9700\u8981\u751f\u4ea7\u5bcc\u96c6\u9633\u5149\u5316\u5408\u7269\u548c\u94c0238\u677f. HV\u7ea7\u522b\u53ca\u4ee5\u4e0a\u7684\u592a\u9633\u80fd\u677f\u9700\u8981\u57289*9\u683c\u7684\u7ec8\u6781\u5de5\u4f5c\u53f0\u5408\u6210.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD7g==",
                    "title": "\u00a7b\u00a7l\u592a\u9633\u4e4b\u529b(HV)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(HV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>IV\u7ec4\u88c5\u673a</br>\u592a\u9633\u4e4b\u529b(MV)</br>\u94a8\u94a2</br>\u94df"
                },
                {
                    "name": "\u7279\u5927\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4842153805905438157.png",
                    "x": 120.0,
                    "y": 336.0,
                    "data": "\u9ad8\u538b,\u8fc7\u70ed\u7684\u80fd\u91cf\u8377\u8f7d.\u770b\u770b\u4e0a\u65b9\u5173\u4e8e\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e\u673a\u7684\u4ecb\u7ecd\u6765\u4e86\u89e3\u4e00\u4e0b\u6240\u6709\u6da1\u8f6e\u673a\u4e4b\u95f4\u7684\u76f8\u540c\u7684\u673a\u5236.</br></br>\u8fd9\u4e2a\u7279\u5927\u6da1\u8f6e\u548c\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e\u5347\u7ea7\u7684\u65b9\u5f0f\u5b8c\u5168\u76f8\u540c:\u53ef\u63a5\u53d7\u7684\u6d41\u4f53\u662f\u8fc7\u70ed\u84b8\u6c7d,\u5176\u4ed6\u6d41\u4f53\u90fd\u6ca1\u7528.\u4ed6\u4eec\u5e94\u8be5\u9020\u5728\u4e00\u8d77,\u6bd5\u7adf\u4f60\u8fd9\u4e2a\u9636\u6bb5\u53ef\u80fd\u6709\u7684\u84b8\u6c7d\u8bbe\u65bd\u90fd\u80af\u5b9a\u4f1a\u7528\u5230\u8fd9\u4e24\u4e2a\u6da1\u8f6e.",
                    "quest_id": "yDY1ALr9QdG8zTbEszNaMw==",
                    "title": "\u7279\u5927\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e",
                    "tooltip": "<strong>\u7279\u5927\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c5\u9636\u6bb5(IV)</br>\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d"
                },
                {
                    "name": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk II",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2826.png",
                    "x": 156.0,
                    "y": 264.0,
                    "data": "\u4e0e\u4e0a\u4e00\u7ea7\u4e00\u6837,\u4f46\u53d1\u7535\u66f4\u591a/\u66f4\u597d.\u52a0\u70ed\u65f6\u95f4\u66f4\u5c11,\u4f46\u6d88\u8017\u71c3\u6599\u7684\u901f\u5ea6\u4e5f\u66f4\u5feb.\u5728\u957f\u671f\u4ea7\u80fd\u65b9\u9762\u5b83\u4ecd\u7136\u6bd4\u4e0d\u4e0a\u5168\u901f\u8fd0\u884c\u7684\u5927\u578b\u71c3\u6c14\u6da1\u8f6e,\u4f46\u5b83\u53ef\u4ee5\u505a\u5230\u5feb\u901f\u53cd\u5e94.\u522b\u5fd8\u4e86\u8fd8\u8981\u914d\u5408\u5927\u578b\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e.</br></br>\u6b63\u786e\u8bbe\u7f6e\u540e,\u5b83\u80fd\u63d0\u4f9b1A\u4ee5\u4e0a\u7684LuV\u8f93\u51fa.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALCg==",
                    "title": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk II",
                    "tooltip": "<strong>\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk II</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u603b\u7b97\u80fd\u70bc\u949b\u4e86</br>EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(LV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2824.png",
                    "x": 696.0,
                    "y": 84.0,
                    "data": "\u5b83\u4eec\u901a\u8fc7\u5438\u6536\u8282\u70b9\u3001\u9f99\u86cb\u3001\u722c\u884c\u8005\u86cb\u7b49\u7684\u9b54\u6cd5\u80fd\u91cf\u6765\u4ea7\u751f\u7535\u529b.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAALCA==",
                    "title": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(LV)",
                    "tooltip": "<strong>\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(LV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)"
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(MV)",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1003.png",
                    "x": 12.0,
                    "y": 120.0,
                    "data": "\u73b0\u5728\u4f60\u53ef\u4ee5\u5236\u9020MV\u7ea7\u522b\u7684\u592a\u9633\u80fd\u677f\u4e86.\u5b83\u53ef\u4ee5\u63d0\u4f9b\u6700\u5927128EU/t\u7684\u8f93\u51fa,\u540c\u6837\u53ef\u4ee5\u4f5c\u4e3a\u8986\u76d6\u677f\u76f4\u63a5\u8d34\u5230GT\u7684\u673a\u5668\u4e0a\u9762\u6765\u7ed9\u8bbe\u5907\u4f9b\u7535.\u4e0d\u8fc7,\u8981\u5236\u9020MV\u592a\u9633\u80fd\u677f\u4f60\u9996\u5148\u9700\u8981\u5236\u9020\u4e00\u4e9b\u9633\u5149\u5316\u5408\u7269.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAD6w==",
                    "title": "\u00a7a\u00a7l\u592a\u9633\u4e4b\u529b(MV)",
                    "tooltip": "<strong>\u592a\u9633\u4e4b\u529b(MV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u89e6\u53d1:\u83b7\u5f97\u9633\u5149\u5316\u5408\u7269</br>\u592a\u9633\u4e4b\u529b(LV)"
                },
                {
                    "name": "\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3040.png",
                    "x": 228.0,
                    "y": 444.0,
                    "data": "\u5982\u82e5\u4f60\u4ed4\u7ec6\u9605\u8bfb\u8fc7\u6234\u68ee\u7403\u5730\u9762\u5355\u5143\u7684tooltip(\u4f60\u4e5f\u5e94\u8be5\u8fd9\u4e48\u505a),\u90a3\u4e48\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230,tooltip\u4e2d\u63d0\u5230\"\u57fa\u4e8e\u6240\u5728\u7ef4\u5ea6\u7684\u7cfb\u6570\".\u4e8b\u5b9e\u4e0a,\u6234\u68ee\u7403\u6240\u5728\u7684\u7ef4\u5ea6\u4f1a\u6781\u5927\u5f71\u54cd\u5176\u80fd\u91cf\u8f93\u51fa.</br></br>\u00a7l\u6309\u7cfb\u6570\u4ece\u9ad8\u5230\u4f4e\u6392\u5e8f\uff1a\u00a7r</br>\u00a72337\uff05 - \u8377\u9c81\u65af</br>231\uff05 - \u5df4\u7eb3\u5fb7C</br>228\uff05 - \u5948\u4f69\u91cc</br>228\uff05 - \u03b1\u534a\u4eba\u9a6cBb</br>211\uff05 - \u8fc8\u7f55\u5e26</br>198\uff05 - \u9a6c\u8d6b\u65af</br>198\uff05 - \u8d5b\u7279</br>198\uff05 - \u7ec7\u5973B</br>194\uff05 - \u91d1\u661f\u7a7a\u95f4\u7ad9</br>181\uff05 - \u963f\u52aa\u6bd4\u65af</br>176\uff05 - \u91d1\u661f</br>161\uff05 - \u6c34\u661f</br> 141\uff05 - \u5df4\u7eb3\u5fb7E</br>134\uff05 - \u9cb8\u9c7c\u5ea7T\u661fE</br>126\uff05 - \u5df4\u7eb3\u5fb7F</br>112\uff05 - \u7f57\u65af128b\u3001\u7f57\u65af128ba</br>110\uff05 - \u5730\u7403\u7a7a\u95f4\u7ad9\u00a7r</br>\u00a76100\uff05 - \u4e3b\u4e16\u754c\u3001\u6708\u7403\u00a7r</br>[warn]89\uff05 - \u706b\u661f\u7a7a\u95f4\u7ad9</br>81\uff05 - \u706b\u661f\u3001\u706b\u536b\u4e00\u3001\u706b\u536b\u4e8c</br>61\uff05 - \u5c0f\u884c\u661f</br>60\uff05 - \u8c37\u795e\u661f</br>48\uff05 - \u6728\u661f\u7a7a\u95f4\u7ad9</br>44\uff05 - \u6728\u536b\u4e8c\u3001\u6728\u536b\u4e00\u3001\u6728\u536b\u4e09</br>36\uff05 - \u571f\u661f\u7a7a\u95f4\u7ad9</br>32\uff05 - \u571f\u536b\u4e8c\u3001\u571f\u536b\u516d\u3001\u6728\u536b\u56db</br>25\uff05 - \u5929\u738b\u661f\u7a7a\u95f4\u7ad9</br>23\uff05 - \u5929\u536b\u56db\u3001\u6d77\u536b\u516b\u3001\u5929\u536b\u4e94</br>20\uff05 - \u6d77\u738b\u661f\u7a7a\u95f4\u7ad9</br>18\uff05 - \u6d77\u536b\u4e00</br>16\uff05 - \u51a5\u738b\u661f\u3001\u67ef\u4f0a\u4f2f\u5e26</br>15\uff05 - \u9e1f\u795e\u661f\u3001\u598a\u795e\u661f</br>1\uff05 - \u82b1\u56ed\u3001\u865a\u7a7a\u4e16\u754c\u4ee5\u53ca\u77ff\u754c</br>0\uff05 - \u6240\u6709\u5176\u4ed6\u7ef4\u5ea6[/warn]",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAL4A==",
                    "title": "\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?",
                    "tooltip": "<strong>\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6234\u68ee\u7403\u5730\u9762\u5355\u5143"
                },
                {
                    "name": "\u6b22\u8fce\u6765\u5230\u7b49\u79bb\u5b50\u4f53\u7cfb\u5217\u4efb\u52a1",
                    "symbolSize": 75,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5758255961960012806.png",
                    "x": 132.0,
                    "y": 492.0,
                    "data": "\u4f60\u597d!\u5982\u679c\u4f60\u5df2\u7ecf\u89e3\u9501\u4e86\u6838\u805a\u53d8,\u4f60\u5c31\u53ef\u4ee5\u5f00\u542f\u8fd9\u4e2a\u4efb\u52a1\u7cfb\u5217\u4e86,\u4e0d\u8fc7\u8bf7\u8bb0\u4f4f,\u5b83\u88ab\u5206\u4e3a\u4e86\u4e09\u4e2a\u90e8\u5206(\u5373\u4e09\u6761\u6838\u805a\u53d8\u4ea7\u94fe)\uff1a\u6bcf\u4e2a\u90e8\u5206\u5bf9\u5e94\u4e86\u4e00\u4e2a\u7b49\u7ea7\u7684\u6838\u805a\u53d8\u53cd\u5e94\u5806,\u4eceMk-I\u5230Mk-III</br></br>\u6240\u6709\u8fd9\u4e9b\u6838\u805a\u53d8\u4ea7\u94fe\u90fd\u6709\u4e00\u4e2a\u7535\u5b50\u8868\u683c,\u4f46\u5176\u4e2d\u6709\u4e9b\u53cd\u5e94\u5806\u6570\u91cf\u7684\u6570\u5b57\u5e76\u4e0d\u6b63\u786e.\u8981\u67e5\u770b\u5b83,\u8bf7\u8bbf\u95ee\u4ee5\u4e0bGitHub\u94fe\u63a5\u4e2d\u7684Excel\u8868\u683c\uff1a[url]https://github.com/GTNewHorizons/GTplusplus/pull/669[/url]</br></br>\u8fd9\u4e9b\u4efb\u52a1\u8ffd\u8e2a\u4e86\u4e00\u4e9b\u771f\u6b63\u5f3a\u5927\u7684\u7b49\u79bb\u5b50\u4f53\u7684\u5236\u9020\u6d41\u7a0b,\u5f53\u4f60\u5c06\u4ea7\u7ebf\u89c4\u6a21\u63d0\u5347\u81f3\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806\u4e0e\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e\u65f6,\u8fd9\u4e9b\u7b49\u79bb\u5b50\u4f53\u5728\u6e38\u620f\u672b\u671f\u7684\u521d\u59cb\u9636\u6bb5\u7684\u53d1\u7535\u4e2d\u5927\u653e\u5f02\u5f69.\u5982\u4f60\u6240\u89c1,\u5f53\u4f60\u4f7f\u7528\u4f18\u826f\u6750\u6599(\u5982\u4e09\u5143\u91d1\u5c5e,\u65e0\u5c3d\u7b49)\u65f6,\u8fd9\u4e9b\u5de8\u578b\u6da1\u8f6e\u4f1a\u65cb\u8f6c\u5f97\u975e\u5e38\u5feb,\u4f46\u5b83\u4eec\u4f1a\u6839\u636e\u4f7f\u7528\u7684\u7b49\u79bb\u5b50\u4f53\u7684\u71c3\u6599\u70ed\u503c\u65bd\u52a0EU/t\u60e9\u7f5a.\u8fd9\u610f\u5473\u7740\u6c26\u7b49\u79bb\u5b50\u4f53\u548c\u9521\u7b49\u79bb\u5b50\u4f53\u5728\u8fd9\u91cc\u7684\u6548\u679c\u8981\u6bd4\u5728\u5927\u578b\u7b49\u79bb\u5b50\u6da1\u8f6e\u4e2d\u5f31\u5f97\u591a.</br></br>\u8fd9\u6761\u4ea7\u7ebf\u7684\u6700\u7ec8\u4ea7\u7269\u662f\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53,\u5373\u4f7f\u4f7f\u7528\u65f6\u7a7a\u6da1\u8f6e\u4e5f\u4e0d\u4f1a\u6709\u60e9\u7f5a,\u800c\u4e14\u5e73\u5747\u5230\u6bcf\u4e2a\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806\u65f6\u53ef\u4ee5\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u8fbe\u5230\u6c26\u7b49\u79bb\u5b50\u4f53\u7684\u4ea7\u51fa.\u6700\u540e\u4e00\u6b65\u662f\u6700\u6162\u7684,\u4f46\u5982\u679c\u6ca1\u6709\u5176\u4ed6\u74f6\u9888,\u4e00\u4e2a\u538b\u7f29\u6838\u805a\u53d8\u53cd\u5e94\u5806\u8fdb\u884c\u6700\u540e\u4e00\u6b65\u53cd\u5e94,\u5728\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e\u4e2d\u4f7f\u7528\u65e0\u5c3d\u5236\u6210\u7684\u7279\u5927\u6da1\u8f6e\u65f6\u5927\u7ea6\u4f1a\u6709\u00a72\u00a7l\u8d85\u8fc78B EU/t\u00a7r\u7684\u4ea7\u51fa.</br></br>\u7136\u800c,\u8fbe\u5230\u8fd9\u4e2a\u76ee\u6807\u5e76\u4e0d\u5bb9\u6613,\u6574\u4e2a\u8fc7\u7a0b\u4f7f\u7528\u4e8615\u79cd\u805a\u53d8\u914d\u65b9,\u6750\u6599\u81ea\u52a8\u5316\u7a0b\u5ea6\u8fdc\u8fdc\u9ad8\u4e8e\u4efb\u4f55\u7b80\u5355\u7684\u805a\u53d8\u914d\u7f6e.\u8fd9\u6761\u4efb\u52a1\u94fe\u5c06\u4f1a\u89e3\u91ca\u54ea\u4e9b\u7b80\u5355,\u54ea\u4e9b\u4e0d\u7b80\u5355,\u6216\u8005\u751a\u81f3\u6210\u4e3a\u74f6\u9888.\u5982\u679c\u4f60\u5b8c\u6210\u4e86\u8fd9\u7cfb\u5217\u4efb\u52a1,\u4f60\u5c06\u83b7\u5f97\u7a33\u5b9a\u7684\u7535\u529b\u6765\u6e90,\u76f4\u5230\u4f60\u540e\u7eed\u91c7\u7528\u4e86\u6234\u68ee\u7403\u6216\u8005\u5176\u5b83\u63a5\u4e0b\u6765\u51fa\u73b0\u7684\u53d1\u7535\u624b\u6bb5,\u5e76\u4e14\u8fd9\u6761\u4ea7\u7ebf\u5728\u672a\u6765\u4ecd\u7136\u6709\u7528!",
                    "quest_id": "bNiieqPgSFqwFpC2DZkj-g==",
                    "title": "\u6b22\u8fce\u6765\u5230\u7b49\u79bb\u5b50\u4f53\u7cfb\u5217\u4efb\u52a1",
                    "tooltip": "<strong>\u6b22\u8fce\u6765\u5230\u7b49\u79bb\u5b50\u4f53\u7cfb\u5217\u4efb\u52a1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5f00\u59cb\u805a\u53d8"
                },
                {
                    "name": "\u950cininininin...",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7026708278772253011.png",
                    "x": 276.0,
                    "y": 504.0,
                    "data": "\u4f60\u77e5\u9053\u4eba\u4f53\u5185\u6709\u591a\u5c11\u950c\u5143\u7d20\u5417?\u5fae\u4e4e\u5176\u5fae,\u4f46\u5f88\u91cd\u8981.\u73b0\u5728\u60f3\u8c61\u4e00\u4e0b\u8fd9\u4e9b\u90fd\u662f\u7b49\u79bb\u5b50\u4f53!</br></br>\u548c\u94cc\u7b49\u79bb\u5b50\u4f53\u7684\u914d\u65b9\u5dee\u4e0d\u591a,\u950c\u7b49\u79bb\u5b50\u4f53\u7684\u914d\u65b9\u901f\u5ea6\u5f88\u5feb.\u552f\u4e00\u9700\u8981\u6ce8\u610f\u7684\u662f\u8be5\u914d\u65b9\u6d88\u8017\u6c1a\u800c\u975e\u4e09\u5143\u91d1\u5c5e(Tritium not Trinium),\u5176\u4e2d,\u6c1a\u662f\u6c22\u7684\u4e00\u79cd\u7a00\u6709\u540c\u4f4d\u7d20,\u53ef\u4ee5\u4ece\u6c18\u8fd9\u79cd\u4e0d\u592a\u7a00\u6709\u7684\u6c22\u7684\u540c\u4f4d\u7d20\u4e2d\u83b7\u5f97.\u6c1a\u53ef\u4ee5\u76f4\u63a5\u4ece\u6d77\u738b\u661f\u62bd\u53d6,\u4e5f\u53ef\u4ee5\u7528\u592a\u7a7a\u7535\u68af\u62bd\u53d6\u53c8\u6216\u662f\u7b80\u5355\u5730\u79bb\u5fc3\u4e3a\u6c26\u7b49\u79bb\u5b50\u4f53\u800c\u81ea\u52a8\u5316\u7684\u6c18.",
                    "quest_id": "Ng5Ldnf3TZCefB4Mr3u-rQ==",
                    "title": "\u950cininininin...",
                    "tooltip": "<strong>\u950cininininin...</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f"
                },
                {
                    "name": "\u9499\u74f6\u9888",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6653872471765810391.png",
                    "x": 180.0,
                    "y": 504.0,
                    "data": "\u7ed9\u81ea\u5df1\u6765\u4e9b\u5f3a\u7b4b\u5065\u9aa8\u7684\u9499(\u7b49\u79bb\u5b50\u4f53)\u5427.</br></br>\u805a\u53d8\u9499\u7b49\u79bb\u5b50\u4f53\u7684\u901f\u5ea6\u51e0\u4e4e\u662f\u787c\u7b49\u79bb\u5b50\u4f53\u7684\u4e24\u500d,\u6240\u4ee5\u5c31\u53ea\u9700\u8981\u534a\u6570\u4e8e\u787c\u7b49\u79bb\u5b50\u4f53\u53cd\u5e94\u5806\u7684\u805a\u53d8\u53cd\u5e94\u5806,\u53c8\u6216\u662f\u589e\u52a0\u787c\u7b49\u79bb\u5b50\u4f53\u53cd\u5e94\u5806\u7684\u6570\u91cf\u6216\u7b49\u7ea7.\u901a\u5e38\u60c5\u51b5\u4e0b,\u805a\u53d8\u9499\u7b49\u79bb\u5b50\u4f53\u7684\u901f\u5ea6\u8981\u6162\u5f88\u591a,\u4f46\u662f\u805a\u53d8\u6c16\u7b49\u79bb\u5b50\u4f53\u9700\u8981\u7684\u9499\u7b49\u79bb\u5b50\u4f53\u7684\u91cf\u5e76\u4e0d\u591a.</br></br>\u8bb0\u4f4f,\u4e09\u6761\u805a\u53d8\u94fe\u6bcf\u6761\u7684\u6700\u540e\u4e00\u6b65,\u5176\u6240\u6d88\u8017\u7b49\u79bb\u5b50\u4f53\u7684\u901f\u7387\u90fd\u4f1a\u6210\u500d\u589e\u52a0,\u4e5f\u5c31\u610f\u5473\u7740\u5982\u679c\u4f60\u662f\u5954\u7740\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53\u53bb\u7684,\u90a3\u4e48\u5927\u90e8\u5206\u74f6\u9888\u5c06\u4f1a\u51fa\u73b0\u5728\u6574\u4e2a\u4ea7\u7ebf\u7684\u672b\u7aef.</br></br>\u4f60\u9700\u89812.13\u53f0\u9499\u7b49\u79bb\u5b50\u4f53\u7684\u53cd\u5e94\u5806\u4f9b\u7ed9\u4e00\u53f0\u805a\u53d8\u6c16\u7b49\u79bb\u5b50\u4f53\u7684\u53cd\u5e94\u5806.",
                    "quest_id": "9j1Iwd3KRG6jqLI9m6YDKQ==",
                    "title": "\u9499\u74f6\u9888",
                    "tooltip": "<strong>\u9499\u74f6\u9888</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u6b22\u8fce\u6765\u5230\u7b49\u79bb\u5b50\u4f53\u7cfb\u5217\u4efb\u52a1"
                },
                {
                    "name": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1333.png",
                    "x": 588.0,
                    "y": 84.0,
                    "data": "\u538c\u5026\u4e86\u9500\u6bc1\u65e0\u7528\u7684\u80fd\u91cf\u6e90\u8d28\u5417\uff1f \u90a3\u4e48\u8fd9\u5c31\u662f\u89e3\u51b3\u65b9\u6848:\u6d88\u8017\u80fd\u91cf\u6e90\u8d28\u5e76\u8f93\u51faGT-EU!\u4e0d\u9700\u8981\u53d8\u538b\u5668!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFNQ==",
                    "title": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "tooltip": "<strong>\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u70bc\u5316\u6e90\u8d28</br>\u6b22\u8fce\u6765\u5230\u7b2c1\u9636\u6bb5,LV</br>Fuuuuuu...sion(\u878d\u5408)!"
                },
                {
                    "name": "\u9ad8\u538b\u84b8\u6c7d\u8f6e\u673a",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1403.png",
                    "x": 120.0,
                    "y": 156.0,
                    "data": "\u5728HV\u9636\u6bb5,\u4f7f\u7528\u84b8\u6c7d\u4f5c\u4e3a\u4f60\u7684\u552f\u4e00\u80fd\u6e90\u662f\u975e\u5e38\u56f0\u96be\u7684.\u4f60\u7684\u71c3\u6599\u81ea\u52a8\u5316\u9700\u8981\u975e\u5e38\u5feb,\u4f60\u7684\u7ba1\u9053\u9700\u8981\u975e\u5e38\u5de8\u5927,\u6700\u540eHV\u84b8\u6c7d\u8f6e\u673a\u7684\u6548\u7387\u4e5f\u4ec5\u670966\uff05,\u8fdc\u4f4e\u4e8e\u5176\u4ed6\u7c7b\u578b\u53d1\u7535\u673a\u768485\uff05.</br></br>\u8fd9\u53f0\u53d1\u7535\u673a\u7684\u6700\u4f73\u7528\u6cd5\u662f\u914d\u5408\u4e00\u53f0\u9ad8\u6548\u7684\u9505\u7089(\u7c7b\u4f3cGT++\u7684\u8fdb\u9636\u9505\u7089),\u4e3a\u519c\u573a\u4e4b\u7c7b\u7684\u7279\u5b9a\u65b9\u5757\u4f9b\u7535. \u5982\u679c\u60f3\u4ec5\u9760\u8fd9\u79cd\u53d1\u7535\u673a\u4e3a\u4f60\u7684\u6574\u4e2a\u57fa\u5730\u4ee5\u53ca\u81ea\u52a8\u5316\u4f53\u7cfb\u4f9b\u80fd,\u5e76\u5411EV\u53d1\u8d77\u51b2\u51fb\u7684\u8bdd,\u90a3\u5c06\u662f\u4e00\u573a\u5669\u68a6.\u5982\u679c\u4f60\u60f3\u8981\u63d0\u9ad8\u84b8\u6c7d\u7684\u6548\u7387,\u8003\u8651\u4fee\u5efa\u5927\u578b\u84b8\u6c7d\u6da1\u8f6e\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFew==",
                    "title": "\u00a79\u00a7l\u9ad8\u538b\u84b8\u6c7d\u8f6e\u673a",
                    "tooltip": "<strong>\u9ad8\u538b\u84b8\u6c7d\u8f6e\u673a</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7b2c3\u9636\u6bb5(HV)</br>HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1"
                },
                {
                    "name": "\u8fd9\u662f\u4f60\u7684\u6c2a\u661f\u77f3!",
                    "symbolSize": 37,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5875748521763021702.png",
                    "x": 312.0,
                    "y": 492.0,
                    "data": "\u8fd9\u662f\u4ffa\u8ddf\u4f60\u8bf4\u7684\u90a3\u4e2a\u5947\u8469\u7684\u949b\u3002\u4f60\u9700\u8981\u628a\u8fd9\u4e2a\u548c\u6cf0\u5766\u7cbe\u94a2\u603c\u5728\u4e00\u8d77\u6765\u5236\u4f5c\u63a5\u4e0b\u6765\u9700\u8981\u7684\u4e1c\u897f\uff0cGT++\u6750\u6599\u4e8e\u6b64\u5377\u5165\u805a\u53d8\u6d2a\u6d41\u3002</br></br>\u8fd9\u6b65\u53cd\u5e94\u9700\u8981\u4f60\u5148\u641e\u5b9a\u524d\u7f6e\u7684\u94cc\u7b49\u79bb\u5b50\u548c\u950c\u7b49\u79bb\u5b50\u805a\u53d8\u4ea7\u6c2a\u7b49\u79bb\u5b50\u2014\u2014\u4e00\u79cd\u6bd4\u4f60\u4e4b\u524d\u641e\u5230\u7684\u66f4\u7a00\u6709\u7684\u60f0\u6027\u6c14\u4f53\uff0c\u540e\u9762\u8fd8\u6709\u66f4\u7a00\u6709\u7684\u6c19\u3002\u4ece\u805a\u53d8\u4ea7\u6c2a\u7b49\u79bb\u5b50\uff0c\u5230\u661f\u4f53\u949b\u7b49\u79bb\u5b50\uff0c\u5305\u62ec\u4e4b\u524d\u7684\u529b\u91cf\u7b49\u79bb\u5b50\uff0c\u8fd9\u4e9b\u914d\u65b9\u7684\u901f\u5ea6\u90fd\u662f\u5339\u914d\u597d\u7684(\u5982\u679c\u4f7f\u7528\u76f8\u540c\u7b49\u7ea7\u7684\u6838\u805a\u53d8\u53cd\u5e94\u5806)\u3002\u5f88\u597d\uff0c\u6bcf\u6761\u751f\u4ea7\u94fe\u90fd\u9700\u8981\u4e4b\u524d\u505a\u7684\u4e00\u5207\u6765\u8fd0\u884c\u3002</br></br>\u5f97\u5230\u661f\u4f53\u949b\u7b49\u79bb\u5b50\u4f53\u540e\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u51c6\u5907MK2\u9636\u6bb5\u6700\u540e\u4e00\u6b65\u4e86\u3002",
                    "quest_id": "pLCgOVmqTUCudSXZusnceg==",
                    "title": "\u8fd9\u662f\u4f60\u7684\u6c2a\u661f\u77f3!",
                    "tooltip": "<strong>\u8fd9\u662f\u4f60\u7684\u6c2a\u661f\u77f3!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f</br>\u950cininininin...</br>\u94cc\u5316"
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
                    "source": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)",
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(MV)"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(EV)"
                },
                {
                    "source": "IV\u7ec4\u88c5\u673a",
                    "target": "\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd"
                },
                {
                    "source": "\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd",
                    "target": "\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd"
                },
                {
                    "source": "\u6e7f\u4ef6\u4e3b\u673a",
                    "target": "\u5730\u70ed\u5f15\u64ce(LuV)"
                },
                {
                    "source": "\u5728IV\u4f60\u4f1a\u8ba8\u538c\u4e4b1-4",
                    "target": "\u706b\u7bad\u5f15\u64ce(IV)"
                },
                {
                    "source": "RP-1\u706b\u7bad\u71c3\u6599",
                    "target": "\u706b\u7bad\u5f15\u64ce(IV)"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(ZPM)",
                    "target": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u70ed\u4ea4\u6362"
                },
                {
                    "source": "\u948d\u57fa\u6d41\u4f53\u71c3\u6599",
                    "target": "\u94c0\u57fa\u6d41\u4f53\u71c3\u6599"
                },
                {
                    "source": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)"
                },
                {
                    "source": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)"
                },
                {
                    "source": "\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "MV(\u4e2d\u538b)\u7ea7\u84b8\u6c7d\u8f6e\u673a"
                },
                {
                    "source": "\"Semi-Stable\" doing a lot of work in here",
                    "target": "Harnessing Chaos"
                },
                {
                    "source": "2\u7ea7\u805a\u53d8 \u9521\u7b49\u79bb\u5b50\u4f53",
                    "target": "2M\u6da1\u8f6e"
                },
                {
                    "source": "Pseudostable Black Hole Containment Field",
                    "target": "Balance is Everything"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u613f\u518d\u65e0\u7206\u70b8"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(LuV)",
                    "target": "\u592a\u9633\u4e4b\u529b(LuV)1x1"
                },
                {
                    "source": "\u94f1",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)"
                },
                {
                    "source": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(IV)",
                    "target": "\u592a\u9633\u4e4b\u529b(LuV)"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u592a\u9633\u4e4b\u529b(LuV)"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(UV)"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(UV)",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(UV)"
                },
                {
                    "source": "HSS-S",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(IV)"
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(IV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(HV)",
                    "target": "\u592a\u9633\u4e4b\u529b(HV)1x1"
                },
                {
                    "source": "\u6e7f\u4ef6\u4e3b\u673a",
                    "target": "\u592a\u9633\u4e4b\u529b(ZPM)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(LuV)",
                    "target": "\u592a\u9633\u4e4b\u529b(ZPM)"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u98ce\u529b\u8ba1"
                },
                {
                    "source": "HSS-G",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(EV)"
                },
                {
                    "source": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(EV)"
                },
                {
                    "source": "\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)",
                    "target": "\u6709\u4e86\u9b54\u6cd5,\u8c01\u8fd8\u8981UV\u592a\u9633\u80fd\u554a"
                },
                {
                    "source": "\u597d\u523a\u773c! #4",
                    "target": "\u6709\u4e86\u9b54\u6cd5,\u8c01\u8fd8\u8981UV\u592a\u9633\u80fd\u554a"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6",
                    "target": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)"
                },
                {
                    "source": "\u4fe1\u6807",
                    "target": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(UV)",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(UV)"
                },
                {
                    "source": "\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f",
                    "target": "\u94cc\u5316"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u66f4\u597d\u7684\u67f4\u6cb9"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e"
                },
                {
                    "source": "\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19",
                    "target": "\u7279\u5927\u84b8\u6c7d\u6da1\u8f6e"
                },
                {
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(EV)"
                },
                {
                    "source": "\u94a8\u94a2",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(EV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(EV)",
                    "target": "\u592a\u9633\u4e4b\u529b(EV)1x1"
                },
                {
                    "source": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "target": "\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "\u7279\u5927\u7b49\u79bb\u5b50\u6da1\u8f6e"
                },
                {
                    "source": "Balance is Everything",
                    "target": "\"Semi-Stable\" doing a lot of work in here"
                },
                {
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u706b\u4e4b\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u4e0d\u5b8c\u5168\u71c3\u70e7"
                },
                {
                    "source": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkII"
                },
                {
                    "source": "\u8d85\u9891\u65f6\u4ee3",
                    "target": "\u65e0\u5c3d\u6da1\u8f6e"
                },
                {
                    "source": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382",
                    "target": "2\u9636\u7ebf\u5708"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b49\u79bb\u5b50\u4f53\u7cfb\u5217\u4efb\u52a1",
                    "target": "\u787c\u7684\u805a\u53d8"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535"
                },
                {
                    "source": "\u592a\u9633\u80fd",
                    "target": "\u592a\u9633\u4e4b\u529b(ULV)1x1"
                },
                {
                    "source": "\u94f1",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(IV)"
                },
                {
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(EV)",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(IV)"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u592a\u9633\u4e4b\u529b(UV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(ZPM)",
                    "target": "\u592a\u9633\u4e4b\u529b(UV)"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)"
                },
                {
                    "source": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)",
                    "target": "\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)"
                },
                {
                    "source": "UV\u7ec4\u88c5\u673a",
                    "target": "\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(ULV)1x1",
                    "target": "\u538b\u7f29\u592a\u9633\u80fd LV"
                },
                {
                    "source": "\u80fd\u591f\u50a8\u5b5850\"VIS\"\u7684\u6cd5\u6756",
                    "target": "\u538b\u7f29\u592a\u9633\u80fd LV"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u4f60\u8fd8\u6ca1\u6709\u5b66\u4f1a\u5206\u79bb\u6d41\u4f53?\u771f\u7684\u4e48?"
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u4f60\u8fd8\u6ca1\u6709\u5b66\u4f1a\u5206\u79bb\u6d41\u4f53?\u771f\u7684\u4e48?"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "target": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)"
                },
                {
                    "source": "\u4fe1\u6807",
                    "target": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(ZPM)",
                    "target": "\u592a\u9633\u4e4b\u529b(ZPM)1x1"
                },
                {
                    "source": "\u9499\u74f6\u9888",
                    "target": "\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f"
                },
                {
                    "source": "\u787c\u7684\u805a\u53d8",
                    "target": "\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f"
                },
                {
                    "source": "\u8fd9\u53ef\u4e0d\u662f\u505a\u6c64\u7684",
                    "target": "\u6ce8\u9b54\u592a\u9633\u80fd"
                },
                {
                    "source": "\u538b\u7f29\u592a\u9633\u80fd LV",
                    "target": "\u6ce8\u9b54\u592a\u9633\u80fd"
                },
                {
                    "source": "RP-1\u706b\u7bad\u71c3\u6599",
                    "target": "\u706b\u7bad\u5f15\u64ce(EV)"
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u706b\u7bad\u5f15\u64ce(EV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(MV)",
                    "target": "\u592a\u9633\u4e4b\u529b(MV)1x1"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a1"
                },
                {
                    "source": "\u94c0\u57fa\u6d41\u4f53\u71c3\u6599",
                    "target": "\u949a\u57fa\u6d41\u4f53\u71c3\u6599"
                },
                {
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u7075\u6c14\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u4f60\u542c\u5230\u5f15\u64ce\u58f0\u4e86\u5417\uff1f"
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u4f60\u542c\u5230\u5f15\u64ce\u58f0\u4e86\u5417\uff1f"
                },
                {
                    "source": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19"
                },
                {
                    "source": "\u538b\u7f29\u592a\u9633\u80fd LV",
                    "target": "\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd"
                },
                {
                    "source": "\u53ef\u6015\u7684\u9b54\u6cd5\u8f7d\u4f53",
                    "target": "\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(ZPM)",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(ZPM)"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "target": "\u67f4\u6cb9\u7684\u529b\u91cf"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(LV)",
                    "target": "\u592a\u9633\u4e4b\u529b(LV)1x1"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "source": "\u94f1",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)"
                },
                {
                    "source": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)"
                },
                {
                    "source": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "target": "\u6d41\u4f53\u6821\u51c6\u5668"
                },
                {
                    "source": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e",
                    "target": "\u6d41\u4f53\u6821\u51c6\u5668"
                },
                {
                    "source": "\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19",
                    "target": "\u6d41\u4f53\u6821\u51c6\u5668"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u68d8\u624b\u7684\u6838\u71c3\u6599\uff1aMOX"
                },
                {
                    "source": "\u4f60\u7528\u5b8c\u4e86\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\uff1f",
                    "target": "\u6c5e\u592a\u591a\u4e86?"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)"
                },
                {
                    "source": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)"
                },
                {
                    "source": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c",
                    "target": "\u9178\u4e4b\u65c5"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u8fd9\u4e0d\u662f\u53bb\u592a\u7a7a\u7684\u8def"
                },
                {
                    "source": "\u53cd\u5e94\u5806\u6269\u5bb9",
                    "target": "\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806"
                },
                {
                    "source": "\u5355\u5806\u53d1\u7535\u91cf\u662f\u591a\u5c11?",
                    "target": "\u5355\u6da1\u8f6eUV\u53d1\u7535"
                },
                {
                    "source": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))",
                    "target": "\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39"
                },
                {
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(MV)",
                    "target": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(HV)"
                },
                {
                    "source": "\u4fe1\u6807",
                    "target": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(HV)"
                },
                {
                    "source": "\u7845\u6676\u5706",
                    "target": "\u592a\u9633\u80fd"
                },
                {
                    "source": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)"
                },
                {
                    "source": "\u94a8\u94a2",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)"
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u5730\u70ed\u5f15\u64ce(EV)"
                },
                {
                    "source": "\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)",
                    "target": "\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u6563\u70ed1"
                },
                {
                    "source": "\u4f60\u89c9\u5f97\u53d1\u5c04\u5668\u5df2\u7ecf\u591f\u7cdf\u7cd5\u4e86\uff1f",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(LuV)"
                },
                {
                    "source": "\u592a\u9633\u80fd",
                    "target": "\u592a\u9633\u4e4b\u529b(ULV)"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u5757\u7845\u5ca9\u952d",
                    "target": "\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9"
                },
                {
                    "source": "\u6807\u51c6\u6838\u71c3\u6599:\u94c0",
                    "target": "\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9"
                },
                {
                    "source": "\u57fa\u7840\u6838\u71c3\u6599:\u948d",
                    "target": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(IV)"
                },
                {
                    "source": "\u83b7\u5f97\u94d5",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(IV)"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "\u7279\u5927\u8d85\u4e34\u754c\u84b8\u6c7d\u6da1\u8f6e"
                },
                {
                    "source": "3\u9636\u7ebf\u5708",
                    "target": "4\u9636\u7ebf\u5708"
                },
                {
                    "source": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "target": "\u6da1\u8f6e\u4ed3"
                },
                {
                    "source": "\u7b2c8\u9636\u6bb5(UV)",
                    "target": "\u6da1\u8f6e\u4ed3"
                },
                {
                    "source": "\u6700\u540e--\u805a\u82ef\u5e76\u54aa\u5511!",
                    "target": "\u592a\u9633\u4e4b\u529b(EV)"
                },
                {
                    "source": "\u7845\u5ca9\u63ba\u6742\u7684\u6676\u5706",
                    "target": "\u592a\u9633\u4e4b\u529b(EV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(HV)",
                    "target": "\u592a\u9633\u4e4b\u529b(EV)"
                },
                {
                    "source": "\u68d8\u624b\u7684\u6838\u71c3\u6599\uff1aMOX",
                    "target": "\u68d8\u624b\u7684\u6838\u71c3\u6599II\uff1a\u8d85\u80fd\u7845\u5ca9"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(UV)",
                    "target": "\u592a\u9633\u4e4b\u529b(UV)1x1"
                },
                {
                    "source": "\u7535\u8def\u677f\u5927\u5e08",
                    "target": "\u592a\u9633\u4e4b\u529b(UV)1x1"
                },
                {
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#3",
                    "target": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(LV)"
                },
                {
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u98ce\u4e4b\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u53cd\u5e94\u5806\u6269\u5bb9"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u57fa\u7840\u6838\u71c3\u6599:\u948d"
                },
                {
                    "source": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkVI"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "target": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(MV)"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u6807\u51c6\u6838\u71c3\u6599:\u94c0"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u90a3\u662f\u4ec0\u4e48?\u5f15\u64ce\u592a\u5435\u6211\u5565\u4e5f\u542c\u4e0d\u5230!"
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u90a3\u662f\u4ec0\u4e48?\u5f15\u64ce\u592a\u5435\u6211\u5565\u4e5f\u542c\u4e0d\u5230!"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)"
                },
                {
                    "source": "\u94a8\u94a2",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "target": "\u706b\u7bad\u5f15\u64ce(LuV)"
                },
                {
                    "source": "RP-1\u706b\u7bad\u71c3\u6599",
                    "target": "\u706b\u7bad\u5f15\u64ce(LuV)"
                },
                {
                    "source": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a1",
                    "target": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a2"
                },
                {
                    "source": "\u6211\u771f\u7684\u9700\u8981\u505a\u8fd9\u4e2a\u5417?",
                    "target": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a2"
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a2"
                },
                {
                    "source": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "target": "\u948d\u57fa\u6d41\u4f53\u71c3\u6599"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u6211\u6765\u6559\u4f60...\u600e\u4e48\u611f\u8c22\u592a\u9633\uff01"
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u6df1\u5730\u70ed\u6cf5"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(HV)"
                },
                {
                    "source": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)",
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(HV)"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(MV)",
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(HV)"
                },
                {
                    "source": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(HV)",
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(EV)"
                },
                {
                    "source": "\u5904\u7406\u5668\u4e3b\u673a,\u4f60\u7684\u7b2c\u4e00\u79cdIV\u7535\u8def\u677f",
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(EV)"
                },
                {
                    "source": "\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b",
                    "target": "\u963f\u7f8e\u5229\u5361!!!!!!!!!"
                },
                {
                    "source": "\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd",
                    "target": "\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)"
                },
                {
                    "source": "LuV\u7ec4\u88c5\u673a",
                    "target": "\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)"
                },
                {
                    "source": "\u9ad8\u7ea7\u954d\u949b\u8bfa",
                    "target": "\u5929\u4f53\u94a8\u7b49\u79bb\u5b50\u4f53 - MK3\u4e4b\u7ec8"
                },
                {
                    "source": "\u4f60\u7684\u7b2c\u4e00\u4e2a\u7535\u5b50\u7535\u8def",
                    "target": "\u66f4\u591a\u84b8\u6c7d!"
                },
                {
                    "source": "\u57fa\u7840\u5236\u4f5c:\u9a6c\u8fbe",
                    "target": "\u66f4\u591a\u84b8\u6c7d!"
                },
                {
                    "source": "\u57fa\u7840\u5236\u4f5c:\u8f6c\u5b50",
                    "target": "\u66f4\u591a\u84b8\u6c7d!"
                },
                {
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#3",
                    "target": "\u5f15\u7206\u6db2\u4f53\u83b7\u53d6\u80fd\u91cf"
                },
                {
                    "source": "UMV\u7535\u8def\u677f",
                    "target": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143"
                },
                {
                    "source": "\u8010\u8d85\u9ad8\u6e29\u7f51",
                    "target": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143"
                },
                {
                    "source": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(ZPM)"
                },
                {
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(LuV)",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(ZPM)"
                },
                {
                    "source": "\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(ZPM)"
                },
                {
                    "source": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII"
                },
                {
                    "source": "\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b",
                    "target": "\u739b\u4e3d\u9514?"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u4e0d\u542b\u81f4\u5e7b\u5242"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(LuV)"
                },
                {
                    "source": "\u5236\u9020\u9545",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(LuV)"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d"
                },
                {
                    "source": "ZPM\u7ec4\u88c5\u673a",
                    "target": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)"
                },
                {
                    "source": "\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)",
                    "target": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk I"
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk I"
                },
                {
                    "source": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "target": "\u6da1\u8f6e\u65f6\u95f4"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(HV)"
                },
                {
                    "source": "2\u9636\u7ebf\u5708",
                    "target": "3\u9636\u7ebf\u5708"
                },
                {
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u8d2a\u5a6a\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?",
                    "target": "\u8010\u8d85\u9ad8\u6e29\u7f51"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u7279\u5927\u6da1\u8f6e\u71c3\u6c14\u8f6e\u673a"
                },
                {
                    "source": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e",
                    "target": "\u7279\u5927\u6da1\u8f6e\u71c3\u6c14\u8f6e\u673a"
                },
                {
                    "source": "\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\"",
                    "target": "\u8fdb\u9636\u53cd\u5e94\u5806"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u8fdb\u9636\u53cd\u5e94\u5806"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\""
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\""
                },
                {
                    "source": "\u739b\u4e3d\u9514?",
                    "target": "\u9ad8\u7ea7\u954d\u949b\u8bfa"
                },
                {
                    "source": "\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b",
                    "target": "\u9ad8\u7ea7\u954d\u949b\u8bfa"
                },
                {
                    "source": "\u963f\u7f8e\u5229\u5361!!!!!!!!!",
                    "target": "\u9ad8\u7ea7\u954d\u949b\u8bfa"
                },
                {
                    "source": "\u6ce8\u9b54\u592a\u9633\u80fd",
                    "target": "\u66f4\u591a\u538b\u7f29\u6ce8\u9b54"
                },
                {
                    "source": "\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd",
                    "target": "\u66f4\u591a\u538b\u7f29\u6ce8\u9b54"
                },
                {
                    "source": "ZPM\u9636\u6bb5\u6c38\u8fdc\u4e0d\u591fPt 1",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)"
                },
                {
                    "source": "\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)"
                },
                {
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u6728\u4e4b\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "\u5927\u82ef\u73af\u795e\u6559\u5723\u5802"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u8f6c\u5b50"
                },
                {
                    "source": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u8f6c\u5b50"
                },
                {
                    "source": "\u8fd9\u662f\u4f60\u7684\u6c2a\u661f\u77f3!",
                    "target": "\u865a\u6069\u7b49\u79bb\u5b50\u4f53 - MK2\u4e4b\u672b"
                },
                {
                    "source": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI"
                },
                {
                    "source": "\u53ef\u9009\u6838\u71c3\u6599:\u6cf0\u4f2f\u5229\u4e9a",
                    "target": "\u6781\u7aef\u5371\u9669\u7684\u6838\u71c3\u6599:\"\u6838\u5fc3\""
                },
                {
                    "source": "\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9",
                    "target": "\u6781\u7aef\u5371\u9669\u7684\u6838\u71c3\u6599:\"\u6838\u5fc3\""
                },
                {
                    "source": "\u8f6c\u5b50",
                    "target": "\u5c06\u80fd\u91cf\u9001\u56de"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(EV)",
                    "target": "\u592a\u9633\u4e4b\u529b(IV)"
                },
                {
                    "source": "LuV\u7ec4\u88c5\u673a",
                    "target": "\u592a\u9633\u4e4b\u529b(IV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(ULV)",
                    "target": "\u592a\u9633\u4e4b\u529b(LV)"
                },
                {
                    "source": "\u7ec8\u6781\u5de5\u4f5c\u53f0",
                    "target": "\u592a\u9633\u4e4b\u529b(LV)"
                },
                {
                    "source": "\u5145\u80fd\u6676\u4f53",
                    "target": "\u592a\u9633\u4e4b\u529b(LV)"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u4e3a\u4e86\u4f9b\u5e94\u5b83,\u4f60\u780d\u4f10\u4e86\u591a\u5c11\u68ee\u6797?"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(ZPM)"
                },
                {
                    "source": "\u5236\u9020\u9545",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(ZPM)"
                },
                {
                    "source": "\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9",
                    "target": "\u53ef\u9009\u6838\u71c3\u6599:\u6cf0\u4f2f\u5229\u4e9a"
                },
                {
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#3",
                    "target": "\u6c22\u6c14\u3001\u7532\u70f7\u6216\u8005\u4e00\u4e9b\u5c41(\u5929\u7136\u6c14)"
                },
                {
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(LuV)"
                },
                {
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(IV)",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(LuV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(IV)",
                    "target": "\u592a\u9633\u4e4b\u529b(IV)1x1"
                },
                {
                    "source": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "target": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u5730\u70ed\u5f15\u64ce(IV)"
                },
                {
                    "source": "IV\u7ec4\u88c5\u673a",
                    "target": "\u592a\u9633\u4e4b\u529b(HV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(MV)",
                    "target": "\u592a\u9633\u4e4b\u529b(HV)"
                },
                {
                    "source": "\u94a8\u94a2",
                    "target": "\u592a\u9633\u4e4b\u529b(HV)"
                },
                {
                    "source": "\u94df",
                    "target": "\u592a\u9633\u4e4b\u529b(HV)"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u7279\u5927\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e"
                },
                {
                    "source": "\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d",
                    "target": "\u7279\u5927\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e"
                },
                {
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk II"
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk II"
                },
                {
                    "source": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)",
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(LV)"
                },
                {
                    "source": "\u89e6\u53d1:\u83b7\u5f97\u9633\u5149\u5316\u5408\u7269",
                    "target": "\u592a\u9633\u4e4b\u529b(MV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(LV)",
                    "target": "\u592a\u9633\u4e4b\u529b(MV)"
                },
                {
                    "source": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143",
                    "target": "\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u6b22\u8fce\u6765\u5230\u7b49\u79bb\u5b50\u4f53\u7cfb\u5217\u4efb\u52a1"
                },
                {
                    "source": "\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f",
                    "target": "\u950cininininin..."
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b49\u79bb\u5b50\u4f53\u7cfb\u5217\u4efb\u52a1",
                    "target": "\u9499\u74f6\u9888"
                },
                {
                    "source": "\u70bc\u5316\u6e90\u8d28",
                    "target": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "\u6b22\u8fce\u6765\u5230\u7b2c1\u9636\u6bb5,LV",
                    "target": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "Fuuuuuu...sion(\u878d\u5408)!",
                    "target": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u9ad8\u538b\u84b8\u6c7d\u8f6e\u673a"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u9ad8\u538b\u84b8\u6c7d\u8f6e\u673a"
                },
                {
                    "source": "\u529b\u91cf\u7b49\u79bb\u5b50\u4f53 - Mk1\u7ed3\u675f",
                    "target": "\u8fd9\u662f\u4f60\u7684\u6c2a\u661f\u77f3!"
                },
                {
                    "source": "\u950cininininin...",
                    "target": "\u8fd9\u662f\u4f60\u7684\u6c2a\u661f\u77f3!"
                },
                {
                    "source": "\u94cc\u5316",
                    "target": "\u8fd9\u662f\u4f60\u7684\u6c2a\u661f\u77f3!"
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
    