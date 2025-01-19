
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
                    "name": "Advanced Assembly Line",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5847927107856321162.png",
                    "x": 216.0,
                    "y": -72.0,
                    "tooltip": "Advanced Assembly Line",
                    "data": "This is the advanced assembly line from GigaGramFab.\n\nIt supports item pipelining. That is, it will mimic a real assembly line by consuming ingredients one by one instead of all at start. In effect, it offers a parallelism up to however many item input this recipe requires. You can think of an advanced assembly line as a collection of slices which are capable of processing each step independently from other slices. It will start processing once the input bus contents align with any stored data stick. The first slice will consume the input in Bus #1. After (recipe time/number of inputs) time, the first slice's work is concluded and will start the second slice. At the same time, first slice will look for input in input bus #1. If there are still enough input there slice #1 will start working again.\n\nThe terminal slice (the n-th slice, where n is number of item input in recipe) will put the recipe output in output bus when it has concluded his work. Whenever a non-terminal slice finished its work, it will try to pass the work onto next slice. If the next slice cannot find the materials in its input bus, the just-finished slice will remain in [warn]STUCK[/warn] state and hang the assembly line. To help locate these [warn]STUCK[/warn] assembly lines, the controller's front face will have its status light turned orange.\n\nThe EU/t cost of this machine is number of slices active multiplied by the original recipe EU/t. [warn]STUCK[/warn] slices do not consume power. It will use the worst energy supplying hatch's input voltage for recipe tier calculation and normal imperfect overclock. With exotic energy hatches, it can overclock beyond usual voltage tier, but will consume even more power than usual imperfect overclock. Every laser overclock will 0.3 to power exponent. 1 laser overclock will have 50% recipe time and use 430% power. 2 laser overclocks will have 25% recipe time and use 1978% power. Will not overclock beyond 1 tick. Machine first tries to parallelize, then normal imperfect overclock, then laser overclock."
                },
                {
                    "name": "Advanced Autoclaving",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6902980861914057189.png",
                    "x": 144.0,
                    "y": -144.0,
                    "tooltip": "Advanced Autoclaving",
                    "data": "In LuV, you can make the Industrial Autoclave. This is a huge multiblock with many scaling factors - it is also extremely powerful. You'll definitely want to pick one of these up to process crystal chips quickly for the crystal circuit line.\n\n[note]Coils, pipe casings, and item pipe casings are all extremely important to this multi's scaling. Use the best ones you have![/note]"
                },
                {
                    "name": "An End to Deforestation",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6915086947092752744.png",
                    "x": 240.0,
                    "y": 60.0,
                    "tooltip": "An End to Deforestation",
                    "data": "This multiblock is the perfect solution to high-speed tree farming. Do you need wood for charcoal or benzene power? Nuts for seed oil? Leaf blocks for decoration? Look no further!\n\nThe Tree Growth Simulator can farm almost any tree in the game, and produces all the items you would get by chopping it down normally. All this in a compact 3x3x3 cube, without any lag from growing a real tree.\n\nFirst, place any sapling in the controller slot of the multiblock. Then, insert tools appropriate to the part of the tree you want to harvest in an input bus. Give the machine power, turn it on, and be ready to get flooded by the outputs.\n\nDifferent tools are required to gather different parts of the tree:\n - Saw for logs\n - Branch Cutter for saplings\n - Shears for leaves\n - Knife for fruit\nBetter versions of the tools (Chainsaw, Grafter, ...) will increase the yield! Check the tooltip of the controller block for details.\n\nYou can even use multiple different tools together, and the machine will harvest several different products at the same time!\n\nNote that the tools used will slowly lose durability, so for long-term operation you might want to set up some automatic replacement.\n\n[note]While this machine only requires IV, it is quite expensive to make early in the tier. You will need 16 ZPM circuits and some fancy alloys.[/note]"
                },
                {
                    "name": "\u53e6\u4e00\u53f0\u591a\u65b9\u5757\u5316\u5b66\u53cd\u5e94\u91dc?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3210.png",
                    "x": -192.0,
                    "y": 12.0,
                    "tooltip": "\u53e6\u4e00\u53f0\u591a\u65b9\u5757\u5316\u5b66\u53cd\u5e94\u91dc?",
                    "data": "\u8fc4\u4eca\u4e3a\u6b62,\u4f60\u53ef\u80fd\u5df2\u7ecf\u5efa\u9020\u4e86\u8bb8\u591a\u53f0\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.\u62e5\u6709\u5f3a\u59274/4\u65e0\u635f\u8d85\u9891\u7684\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u662f\u6700\u5f3a\u591a\u65b9\u5757\u4e4b\u4e00.\u7136\u800c,\u5982\u679c\u8fd9\u90fd\u65e0\u6cd5\u6ee1\u8db3\u4f60\u7684\u5316\u5de5\u4ea7\u7ebf,\u600e\u4e48\u529e\u5462?\u5982\u679c\u4e00\u4e2a\u914d\u65b9\u7684\u5904\u7406\u65f6\u95f4\u5df2\u7ecf\u8d85\u9891\u5230\u4e861t(0.05\u79d2)\u4ee5\u4e0b,\u4f60\u5c31\u65e0\u6cd5\u8fdb\u4e00\u6b65\u63d0\u901f\u4e86\u5417?%n%n\u522b\u62c5\u5fc3,\u6211\u4eec\u4e3a\u4f60\u63d0\u4f9b\u4e86\u89e3\u51b3\u65b9\u6848\uff1a\u5de8\u578b\u5316\u5b66\u53cd\u5e94\u91dc.\u5b83\u6700\u9ad8\u53ef\u4ee5\u540c\u65f6\u5e76\u884c256\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u914d\u65b9!\u540c\u65f6,\u5982\u679c\u4f60\u80fd\u63d0\u4f9b\u8db3\u591f\u7684\u80fd\u91cf,\u5b83\u540c\u6837\u80fd\u591f\u8fdb\u884c\u8d85\u9891.%n%n\u7531\u4e8e\u9700\u89817\u4e2a\u805a\u53d8\u7ebf\u5708\u65b9\u5757,\u6240\u4ee5LuV\u624d\u80fd\u89e3\u9501\u5b83.\u8bf7\u67e5\u770b\u5168\u606f\u6295\u5f71\u4eea,\u83b7\u77e5\u5b83\u7684\u5177\u4f53\u7ed3\u6784\u4ee5\u53ca\u6240\u9700\u65b9\u5757.%n%n\u73bb\u7483\u7b49\u7ea7\u4f1a\u9650\u5236\u53ef\u7528\u7684\u80fd\u6e90\u4ed3\u7b49\u7ea7.\u4f60\u751a\u81f3\u53ef\u4ee5\u7528TecTech\u7684\u591aA\u80fd\u6e90\u4ed3!\u4e0d\u8fc7,\u5982\u679c\u4f60\u60f3\u7528\u6fc0\u5149\u4ed3\u7684\u8bdd,\u81f3\u5c11\u9700\u8981UV\u73bb\u7483."
                },
                {
                    "name": "A steam-powered whirl!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8361079222456284577.png",
                    "x": -24.0,
                    "y": -120.0,
                    "tooltip": "A steam-powered whirl!",
                    "data": "How does one centrifuge rare materials in the Steam Age? The answer is by building and using the Steam Separator, of course! By using steam to create a spinning force, this Multiblock can separate different materials quickly and easily.\n\nIf you think separation is taking forever, the Steam Separator will speed things up!\n\nThis Multiblock can process recipes up to LV Tier, and does accept an Output Hatch for recipes. But if you are looking to use recipes which require Fluid Inputs, you might have to build an LV Centrifuge in the future."
                },
                {
                    "name": "\u57fa\u5730\u706b\u5c71",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/389.png",
                    "x": 144.0,
                    "y": 60.0,
                    "tooltip": "\u57fa\u5730\u706b\u5c71",
                    "data": "\u751f\u4ea7\u5706\u77f3\u7684\u7ec8\u6781\u673a\u5668.\u4e5f\u53ef\u4ee5\u5c06\u7ea2\u77f3\u5927\u89c4\u6a21\u8f6c\u5316\u4e3a\u9ed1\u66dc\u77f3,\u4ee5\u83b7\u53d6\u53ef\u518d\u751f\u7684\u7845\u3001\u9541\u3001\u94c1\u548c\u6c27."
                },
                {
                    "name": "\u6c90\u6d74\u5728\u7535\u6d41\u4e2d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2029.png",
                    "x": 168.0,
                    "y": -72.0,
                    "tooltip": "\u6c90\u6d74\u5728\u7535\u6d41\u4e2d",
                    "data": "\u6210\u767e\u4e0a\u5343\u73bb\u7483\u7684\u6700\u4f73\u6765\u6e90...\u8981\u8fd9\u4e9b\u505a\u4ec0\u4e48\u5462?\u6211\u4e0d\u77e5\u9053,\u8fd8\u662f\u60f3\u70b9\u6709\u8da3\u7684\u7528\u9014,\u7ed9\u6211\u5f00\u5f00\u773c\u5427!%n%n\u5de5\u4e1a\u7535\u5f27\u7089\u7684\"\u6709\u6548\"\u7535\u538b\u6bd4\u80fd\u6e90\u4ed3\u8981\u4f4e\u4e00\u9636.\u4e3e\u4e2a\u4f8b\u5b50,\u4f7f\u7528MV\u80fd\u6e90\u4ed3,\u673a\u5668\u53ef\u5904\u7406LV\u7535\u5f27\u7089\u7684\u914d\u65b9.%n%n\u8fd9\u53f0\u673a\u5668\u8fd8\u53ef\u4ee5\u5904\u7406\u7b49\u79bb\u5b50\u7535\u5f27\u7089\u7684\u914d\u65b9.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728LuV\u9636\u6bb5\u5236\u9020. \u539f\u6599\u4e4b\u4e00\u662f\u948d-232,\u4e00\u65b9\u9762\u7528\u9014\u4e0d\u591a,\u53e6\u4e00\u65b9\u9762\u5236\u9020\u8d77\u6765\u8fd8\u7279\u522b\u9ebb\u70e6.%n%n\u8bd1\u8005\u6ce8: \u948d-232\u7b97\u5565,\u770b\u770b\u5957\u5a03\u80fd\u91cf\u6838\u5fc3! \u4e0d\u8fc7\u505a\u51fa\u6765\u4e4b\u540e\u8fd8\u662f\u5f88\u9999\u7684."
                },
                {
                    "name": "\u6405\u62cc/\u6405\u62cc/\u5de7\u514b\u529b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2030.png",
                    "x": 156.0,
                    "y": 276.0,
                    "tooltip": "\u6405\u62cc/\u6405\u62cc/\u5de7\u514b\u529b",
                    "data": "\u5976\u5976,\u4f60\u80fd\u6559\u6211\u4eec\u5de7\u514b\u529b\u4e4b\u6b4c\u5417?%n\u4e50\u610f\u4e4b\u81f3!%n\u4f60\u4f1a\u8ddf\u6211\u4eec\u4e00\u8d77\u5531\u5de7\u514b\u529b\u4e4b\u6b4c\u5417?%n\u592a\u68d2\u4e86,\u8ddf\u7740\u5976\u5976\u4e00\u8d77\u5531!%n%n\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b%n\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b%n\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b%n\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b%n%n\u6405\u62cc\u597d\u5403\u7684\u5de7\u514b\u529b,\u5de7\u514b\u529b%n\u6405\u62cc\u597d\u5403\u7684\u5de7\u514b\u529b,\u5de7\u514b\u529b%n\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b%n\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b%n%n\u73b0\u5728\u4e0d\u518d\u9700\u8981\u5355\u5143\u4e86,\u597d\u8036!%n%n\u8bd1\u8005\u6ce8:\u300a\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b\u300b(Bate-Bate-Chocolate)\u662f\u58a8\u897f\u54e5\u4f20\u7edf\u513f\u6b4c.\u4efb\u52a1\u4e66\u539f\u6587\u6b4c\u8bcd\u90e8\u5206\u5747\u4e3a\u897f\u73ed\u7259\u6587."
                },
                {
                    "name": "\u5f2f\u66f2\u3001\u8f8a\u538b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2038.png",
                    "x": -36.0,
                    "y": 216.0,
                    "tooltip": "\u5f2f\u66f2\u3001\u8f8a\u538b",
                    "data": "\u5f53\u4f60\u9700\u8981\u6210\u5343\u4e0a\u4e07\u7684\u677f\u5b50\u65f6... \u53ef\u901a\u8fc7\u87ba\u4e1d\u5200\u5207\u6362\u5377\u677f\u673a\u6a21\u5f0f\u548c\u51b2\u538b\u673a\u5e8a\u6a21\u5f0f.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "\u6700\u597d\u7684\u5207\u9762\u5305\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2032.png",
                    "x": 144.0,
                    "y": 84.0,
                    "tooltip": "\u6700\u597d\u7684\u5207\u9762\u5305\u673a",
                    "data": "\u5f53\u4f60\u6709\u4e86\u4e00\u53f0\u88c5\u6ee1\u4e86\u5c0f\u5200\u7684\u673a\u5668,\u4f60\u770b\u5565\u90fd\u50cf\u9762\u5305\u4e86. \u4f7f\u7528\u87ba\u4e1d\u5200\u53ef\u5207\u6362\u677f\u6750\u5207\u5272\u673a\u6a21\u5f0f\u548c\u98df\u6750\u5207\u7247\u673a\u6a21\u5f0f.%n%nBluebine-2019!%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "\u8d4c\u4e0a\u84b8\u998f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3137.png",
                    "x": 240.0,
                    "y": 12.0,
                    "tooltip": "\u8d4c\u4e0a\u84b8\u998f",
                    "data": "IV\u9636\u6bb5\u5e26\u6765\u4e86\u56db\u79cdGT++\u591a\u65b9\u5757\u673a\u5668,\u5305\u62ec\u84b8\u998f\u5854\u7684\u5347\u7ea7\u7248\u672c,\u79f0\u4e4b\u4e3a\u4e39\u683c\u7279\u84b8\u998f\u5382. \u5b83\u4e0e\u84b8\u998f\u5854\u5728\u7ed3\u6784\u4e0a\u5b8c\u5168\u76f8\u540c,\u53ea\u662f\u4f7f\u7528\u7684\u63a7\u5236\u5668\u65b9\u5757\u4e0d\u540c. \u8fd9\u4e2a\u63a7\u5236\u5668\u65b9\u5757\u7684\u5408\u6210\u66f4\u52a0\u590d\u6742,\u9700\u8981\u66f4\u6602\u8d35\u7684\u6750\u6599,\u5e76\u4e14\u4e5f\u9501\u5b9a\u53ea\u80fd\u7528IV\u4ee5\u4e0a\u7684\u5316\u5de5\u5382\u5408\u6210,\u8fd9\u4e5f\u4f7f\u5f97\u5982\u679c\u4ec5\u4e3a\u6b64\u5408\u6210\u5347\u7ea7\u5316\u5de5\u5382\u7684\u8bdd,\u90a3\u8fd9\u4e2a\u5408\u6210\u914d\u65b9\u5c31\u663e\u5f97\u66f4\u8d35\u4e86.%n%n\u4e0d\u8fc7\u8bdd\u8bf4\u56de\u6765,\u4e39\u683c\u7279\u89e3\u51b3\u4e86\u84b8\u998f\u5854\u8fd0\u884c\u7f13\u6162\u7684\u95ee\u9898,\u800c\u4e14\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4,\u84b8\u998f\u5854\u662f\u6240\u6709\u8fd9\u4e9b\u53ef\u518d\u751f\u8d44\u6e90\u751f\u4ea7\u7ebf\u7684\u652f\u67f1. \u60f3\u8981\u9760\u53ef\u518d\u751f\u80fd\u6e90\u83b7\u5f97\u53ef\u9760\u7684IV/LuV\u7535\u529b,\u4f60\u8fd8\u9700\u8981\u591a\u5c11\u56db\u8054\u84b8\u998f\u5854\u5462?\u53bb\u5427."
                },
                {
                    "name": "\u8d1d\u7d22\u65af\u7684\u9a84\u50b2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2039.png",
                    "x": 216.0,
                    "y": 0.0,
                    "tooltip": "\u8d1d\u7d22\u65af\u7684\u9a84\u50b2",
                    "data": "\u4e9a\u9a6c\u900a\u4ed3\u5e93\u662f\u6ee1\u8db3\u4f60\u6240\u6709\u6253\u5305\u9700\u6c42\u7684\u7ec8\u6781\u9009\u62e9.\u5c0f\u64ae\u7c89\u548c\u5c0f\u5806\u7c89\u5b9e\u5728\u592a\u591a?\u8fd9\u53f0\u673a\u5668\u4e3a\u4f60\u800c\u751f.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728LuV\u9636\u6bb5\u5236\u9020.%n%n\u8bd1\u8005\u6ce8:\u6770\u592b\u00b7\u8d1d\u7d22\u65af(Jeff Bezos)\u662f\u4e9a\u9a6c\u900a\u516c\u53f8\u7684CEO."
                },
                {
                    "name": "\u7ed9\u6211\u4e00\u5927\u6876\u805a\u4e59\u70ef!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/876.png",
                    "x": 72.0,
                    "y": 24.0,
                    "tooltip": "\u7ed9\u6211\u4e00\u5927\u6876\u805a\u4e59\u70ef!",
                    "data": "\u538c\u5026\u4e86\u4f7f\u7528\u5c0f\u5355\u5143\u6765\u5904\u7406\u5316\u5b66\u54c1?\u5efa\u9020\u4e00\u4e2a\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u5427,\u4f60\u53ef\u4ee5\u76f4\u63a5\u7528\u7ba1\u9053\u8f93\u5165\u6216\u8f93\u51fa\u6d41\u4f53,\u6216\u4f7f\u7528\u5927\u578b\u6d41\u4f53\u5355\u5143\u6765\u4ece\u8f93\u51fa\u4ed3\u8fd0\u8f93\u6d41\u4f53.%n%n\u6ce8\u610f,\u5982\u679c\u8f93\u51fa\u4ed3\u5df2\u6ee1,\u591a\u65b9\u5757\u5c06\u4f1a\u541e\u6389\u591a\u4f59\u7684\u4ea7\u7269!%n%n\u987a\u4fbf\u8bf4\u4e00\u4e0b,\u67d0\u4e9b\u65e7\u914d\u65b9\u5728\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u53d8\u5f97\u66f4\u7b80\u5355\u4e86(24\u53f7\u7535\u8def\u677f,\u53ef\u8df3\u8fc7\u4e00\u6b65\u6216\u591a\u6b65\u5408\u6210).%n%n\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u53ef\u770b\u505a\u8d85\u51c0\u95f4\u73af\u5883.%n%n\u4f60\u8fd8\u9700\u8981:%n1x\u7ef4\u62a4\u4ed3%n1x\u80fd\u6e90\u4ed3%n0+\u8f93\u5165\u603b\u7ebf(\u5982\u679c\u914d\u65b9\u9700\u8981\u8f93\u5165\u7269\u54c1\u7684\u8bdd,\u4e3a\u4e86\u5b8c\u5168\u81ea\u52a8\u5316,\u4f60\u53ef\u80fd\u9700\u8981\u6bcf\u79cd\u6750\u6599\u653e\u4e00\u4e2a\u8f93\u5165\u603b\u7ebf)%n0-1x\u8f93\u51fa\u603b\u7ebf(\u5982\u679c\u914d\u65b9\u4f1a\u8f93\u51fa\u7269\u54c1\u7684\u8bdd)%n2+\u8f93\u5165\u4ed3(\u6bcf\u79cd\u6d41\u4f53\u4e00\u4e2a\u8f93\u5165\u4ed3)%n1+\u8f93\u51fa\u4ed3(\u540c\u4e0a)%n%n\u5bf9\u51c6\u8f93\u51fa\u4ed3\u4f7f\u7528\u87ba\u4e1d\u5200,\u53ef\u4ee5\u5faa\u73af\u5207\u6362\u5176\u8f93\u51fa\u6a21\u5f0f. \u624b\u6301\u87ba\u4e1d\u5200Shift+\u53f3\u952e,\u53ef\u4ee5\u76f4\u63a5\u5207\u6362\u4e3a\u7279\u5b9a\u6d41\u4f53\u6a21\u5f0f(specific-fluid-mode),\u7136\u540e\u7528\u5355\u5143\u9501\u5b9a\u8f93\u51fa\u7684\u6d41\u4f53,\u8fd9\u6837\u81ea\u52a8\u5316\u5c31\u4f1a\u65b9\u4fbf\u591a\u4e86. \u9501\u5b9a\u6d41\u4f53\u9002\u7528\u4e8e\u6240\u6709\u8f93\u51fa\u4ed3,\u5e76\u4e0d\u4ec5\u4ec5\u652f\u6301\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc."
                },
                {
                    "name": "Can it!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5201462720540834507.png",
                    "x": -24.0,
                    "y": 72.0,
                    "tooltip": "Can it!",
                    "data": "If you've ever needed to wait on a Canning Machine to fill up your supply of tin cans, or for a Fluid Canning Machine to make mountains of coolant, consider the TurboCan Pro. This multiblock acts as both machines and has significant bonuses - when the time comes that you decide you need it!"
                },
                {
                    "name": "\u7535\u8def\u88c5\u914d\u7ebf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2601.png",
                    "x": 168.0,
                    "y": -168.0,
                    "tooltip": "\u7535\u8def\u88c5\u914d\u7ebf",
                    "data": "\u8fd9\u4e9b\u7528\u4e8e\u6784\u5efa4\u53f07\u7247\u7684\u7535\u8def\u88c5\u914d\u7ebf,\u8db3\u591f\u6ee1\u8db3\u4e00\u4e2a\u7cfb\u5217\u7684\u7535\u8def\u677f\u5236\u9020. \u5982\u679c\u4f60\u4ec5\u9700\u8981\u67d0\u4e2a\u7cfb\u5217\u4e2d\u7684\u4e00\u79cd\u7535\u8def\u677f(\u6bd4\u5982\u5fae\u5904\u7406\u5668),\u90a3\u5c31\u628a\u5b83\u9664\u4ee54.%n%n\u5047\u8bbe\u4f60\u5728LuV\u4efb\u52a1\u680f\u5df2\u7ecf\u83b7\u5f97\u4e86\u6240\u9700\u7684\u538b\u5370\u7535\u8def,\u73b0\u5728\u5c31\u53ef\u4ee5\u5f00\u59cb\u5236\u9020\u6676\u4f53\u7cfb\u5217\u7684\u7535\u8def\u88c5\u914d\u7ebf\u4e86. \u6211\u4eec\u4e00\u4e0a\u6765\u5c31\u8981\u6c424\u53f0\u662f\u56e0\u4e3a\u6bcf\u53f0\u7535\u8def\u88c5\u914d\u7ebf\u53ea\u80fd\u94ed\u523b\u4e00\u6b21,\u65e0\u6cd5\u79fb\u9664\u94ed\u523b.\u662f\u7684,\u4f60\u60f3\u7528\u7535\u8def\u88c5\u914d\u7ebf\u5236\u9020\u7684\u6bcf\u79cd\u7535\u8def\u677f\u90fd\u9700\u8981\u4e00\u53f0\u4e13\u7528\u7535\u8def\u88c5\u914d\u7ebf.%n%n\u4f5c\u4e3a\u88c5\u914d\u7ebf,\u5b83\u4e0e\u666e\u901a\u88c5\u914d\u7ebf\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e00\u81f4,\u6bcf\u4e2a\u603b\u7ebf\u6309\u987a\u5e8f\u63d0\u4f9b\u539f\u6599,\u4f46\u7531\u4e8e\u662f\u5355\u53f0\u4e13\u7528,\u6240\u4ee5\u7528\u8d77\u6765\u5c31\u5bb9\u6613\u591a\u4e86,\u540c\u65f6\u9ad8\u9636\u5408\u6210\u8868\u4e5f\u4fbf\u5b9c\u591a\u4e86.%n%n\u7535\u8def\u88c5\u914d\u7ebf\u7684\u539f\u6599\u662f\u5c01\u88c5\u7684,\u6240\u4ee5\u4e00\u6b21\u53ef\u4ee5\u5236\u902016\u4e2a\u7535\u8def\u677f(ULV\u548cLV\u7535\u8def\u66f4\u591a),\u8282\u7ea6\u65f6\u95f4\u3001EU\u8fd8\u6709\u710a\u9521(\u6216\u94cb\u94c5\u5408\u91d1).\u5728\u7ec4\u88c5\u673a\u4e2d\u914d\u5408\u805a\u4e59\u70ef\u53ef\u4ee5\u5236\u9020\u5c01\u88c5\u5143\u4ef6.%n%n\u987a\u4fbf\u4e00\u63d0,\u4f60\u53ef\u4ee5\u9009\u62e9\u5b89\u88c5\u66f4\u9ad8\u7ea7\u7684\u4ed3/\u603b\u7ebf,\u4e0d\u8fc7\u5408\u6210\u65f6\u7684\u539f\u6599\u987a\u5e8f\u8fd8\u662f\u5f97\u4e0eNEI\u4e00\u81f4.\u53e6\u5916,\u7535\u8def\u88c5\u914d\u7ebf\u53ef\u4ee5\u65e0\u635f\u8d85\u9891."
                },
                {
                    "name": "Clean Implosions?!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7261433663633078124.png",
                    "x": 216.0,
                    "y": -168.0,
                    "tooltip": "Clean Implosions?!",
                    "data": "Introducing the bigger (and better) Implosion Compressor, the Electric Implosion Compressor.\n\nThe Electric Implosion Compressor does not need any explosive and only needs electricity, isn't that very nice!\n\nFurthermore it gains extra parallels 4^(Tier - 1) based on the containment block used in the middle.\n\nTier 1: Neutronium Block\nTier 2: Infinity Block\nTier 3: transcendent Metal Block\nTier 4: Spacetime Block\nTier 5: Universium Block\n\n[note]While the structure preview shows holes in the middle, it requires the full 27 containment blocks to form, once formed the middle 5 blocks will disappear visually, but sometimes when breaking you will get them back (and sometimes you won't). [/note]\n\n[note]The minimum allowed energy hatch tier is one tier below the recipe tier, so let's start with 2 UHV energy hatches for now.[/note]"
                },
                {
                    "name": "\u771f\u7537\u4eba\u4ece\u6765\u4e0d\u56de\u5934\u770b\u7206\u70b8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2757.png",
                    "x": 252.0,
                    "y": 252.0,
                    "tooltip": "\u771f\u7537\u4eba\u4ece\u6765\u4e0d\u56de\u5934\u770b\u7206\u70b8",
                    "data": "\u4ed6\u4eec\u7528\u81ea\u52a8\u5316\u6765\u5b8c\u6210.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020,\u4e0d\u8fc7\u8fd8\u8981\u7528\u5230\u94c2\u7ebf\u548cZPM\u7535\u8def\u677f."
                },
                {
                    "name": "Cracking the World",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7508677545920872020.png",
                    "x": -96.0,
                    "y": 48.0,
                    "tooltip": "Cracking the World",
                    "data": "How much oil do you need? Or maybe it's Naquadah Fuel you're after, or Radox... either way, this massive structure can handle it, boasting 256 parallels."
                },
                {
                    "name": "\u65cb\u8f6c,\u8df3\u8dc3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1423.png",
                    "x": -12.0,
                    "y": 276.0,
                    "tooltip": "\u65cb\u8f6c,\u8df3\u8dc3",
                    "data": "\u65cb\u8f6c,\u5347\u6e29--\u542c\u8d77\u6765\u50cf\u4e00\u4e2a\u821e\u8e48. \u6216\u662f\u70ed\u529b\u79bb\u5fc3\u673a. \u5efa\u9020\u4e00\u4e2a\u5de5\u4e1a\u70ed\u529b\u7cbe\u70bc\u5382,\u4ee5\u5145\u5206\u5229\u7528\u4f60\u7684\u77ff\u77f3.%n%n\u53ea\u8981\u4fdd\u8bc1\u81f3\u5c118\u4e2a\u70ed\u5904\u7406\u673a\u68b0\u65b9\u5757,\u4f60\u5c31\u53ef\u4ee5\u7528\u566a\u97f3\u5371\u9669\u6807\u5fd7\u6765\u4ee3\u66ff\u70ed\u5904\u7406\u673a\u68b0\u65b9\u5757.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.\u6ce8\u610f\u6d88\u58f0\u4ed3\u5b89\u88c5\u5728\u5e95\u5c42."
                },
                {
                    "name": "\u628a\u6d77\u6d0b\u635e\u7a7a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2053.png",
                    "x": 240.0,
                    "y": 84.0,
                    "tooltip": "\u628a\u6d77\u6d0b\u635e\u7a7a",
                    "data": "\u4e3a\u4e86\u751f\u7269\u67f4\u6cb9,\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\u91cc,\u4f60\u90fd\u7528\u9c7c\u7b3c\u6355\u9c7c.\u73b0\u5728,\u4f60\u53ef\u4ee5\u5efa\u9020\u73e0\u6d77\u6e14\u573a,\u6536\u83b7\u6210\u5428\u7684\u9c7c\u548c\u526f\u4ea7\u7269.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "Engraving With Style",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9206015034842694688.png",
                    "x": 144.0,
                    "y": 12.0,
                    "tooltip": "Engraving With Style",
                    "data": "Sick of having to swap out lenses or make tens of laser engravers for your cleanroom? The Hyper-Intensity Laser Engraver is here for you. This multiblock can handle all of your engraving needs.\n\nBy using more powerful Laser Source Hatches in the structure, you can gain more parallels and run higher tier recipes."
                },
                {
                    "name": "Extraction Point",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7251013088481099277.png",
                    "x": 60.0,
                    "y": 276.0,
                    "tooltip": "Extraction Point",
                    "data": "Nothing turns solids to liquids faster than the Large Fluid Extractor - not yet, anyways. You'll need to make both Heating and Solenoid Coils for this multiblock.\n\n[note]This multiblock is technically EV, but it will demand a lot of tungstensteel.[/note]"
                },
                {
                    "name": "Extreme Voltage Multiblocks",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8959971444972358643.png",
                    "x": 24.0,
                    "y": 216.0,
                    "tooltip": "Extreme Voltage Multiblocks",
                    "data": "You might already have a Steam Multiblock or the Large Sifter. But in EV, IV, and the following tiers you unlock multiblocks for (almost) every GT machine. And some more on top of that!\n\nMost of them are made to do the same GT processing as the singleblock machines you've been using, but much faster. The multis can have up to three bonuses: energy savings, faster recipe time and parallels, which mean that a single recipe cycle can craft multiple items at once, if the power provided is enough to sustain it.\n\nThe variety of structures and intricacies of these new multis can go far beyond simpler multis like the EBF, LCR or VF. While some are simple cuboids, others come with more diverse mechanics and conditions to work properly. In return, they can be extremely powerful, so keep an eye out for them!"
                },
                {
                    "name": "Fits The Mold",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5744442785667642528.png",
                    "x": 168.0,
                    "y": 0.0,
                    "tooltip": "Fits The Mold",
                    "data": "Making machines for every mold sounds tiring... fortunately, the Fluid Shaper multiblock can handle any number of molds by using Solidifier Hatches. This multiblock is also extendable, gaining more parallels if you add additional segments. Be sure to expand it if it's too slow!\n\n[note]The Fluid Shaper also speeds up as it is running, making it more efficient to do large batches.[/note]"
                },
                {
                    "name": "\u51bb\u4f24!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2045.png",
                    "x": -96.0,
                    "y": 12.0,
                    "tooltip": "\u51bb\u4f24!",
                    "data": "\u8fd9\u53f0\u5de8\u578b\u771f\u7a7a\u51b7\u51bb\u673a\u53ef\u4ee5\u540c\u65f6\u5904\u7406\u6700\u591a256\u4e2a\u914d\u65b9."
                },
                {
                    "name": "\u51bb\u50f5\u4e86...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2035.png",
                    "x": 216.0,
                    "y": 96.0,
                    "tooltip": "\u51bb\u50f5\u4e86...",
                    "data": "\u6211\u597d\u51b7\u554a...\u60f3\u8981\u6b63\u5e38\u4f7f\u7528\u8fd9\u53f0\u673a\u5668,\u4f60\u9700\u8981\u7ed9\u5b83\u6301\u7eed\u4f9b\u5e94\u6781\u5bd2\u4e4b\u51db\u51b0.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728LuV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "\u4e0a\u5e1d\u7684\u953b\u9020\u53f0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2036.png",
                    "x": 168.0,
                    "y": 96.0,
                    "tooltip": "\u4e0a\u5e1d\u7684\u953b\u9020\u53f0",
                    "data": "\u70bd\u7131\u9ad8\u7089\u80fd\u4ee5\u96be\u4ee5\u7f6e\u4fe1\u7684\u901f\u5ea6\u5904\u7406\u7269\u54c1. \u60f3\u8981\u6b63\u5e38\u4f7f\u7528\u8fd9\u53f0\u673a\u5668,\u4f60\u9700\u8981\u7ed9\u5b83\u6301\u7eed\u4f9b\u5e94\u70c8\u7130\u4e4b\u70bd\u7131,\u8fd8\u5f97\u914d\u4e0a\u597d\u7684\u7ebf\u5708.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020,\u4f46\u9700\u8981\u4e24\u4e2aZPM\u7535\u8def\u677f.%n%n\u8bd1\u8005\u6ce8:\u70bd\u7131\u9ad8\u7089\u6ca1\u6709\u7535\u538b\u7b49\u7ea7\u5e26\u6765\u7684\u989d\u5916\u7089\u6e29\u5956\u52b1,\u5176\u4f59\u673a\u5236\u548c\u5de5\u4e1a\u9ad8\u7089\u4e00\u81f4."
                },
                {
                    "name": "High Voltage Multiblocks",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6615881702968461094.png",
                    "x": 24.0,
                    "y": 48.0,
                    "tooltip": "High Voltage Multiblocks",
                    "data": "Time to scale up production! In HV, a handful of new powerful multiblocks are available to you. In particular, take a look at the Large Chemical Reactor, which always perfectly overclocks, as well as the Distillation Tower, which will allow you to get all byproducts from distillation instead of targetting just one."
                },
                {
                    "name": "\u7eff\u5de8\u4eba\u91cd\u62f3\u7c89\u788e!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1421.png",
                    "x": 60.0,
                    "y": 156.0,
                    "tooltip": "\u7eff\u5de8\u4eba\u91cd\u62f3\u7c89\u788e!",
                    "data": "\u5927\u89c4\u6a21\u7834\u574f! \u6216\u8005\u81f3\u5c11,\u53ef\u4ee5\u7c89\u788e\u5f88\u591a\u5f88\u591a\u7684\u77ff\u77f3. \u5efa\u9020\u4e00\u53f0\u5de5\u4e1a\u7c89\u788e\u673a,\u5904\u7406\u4f60\u83b7\u5f97\u7684\u6240\u6709\u77ff\u77f3.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020,\u4f46\u5b83\u9700\u8981ZPM\u7684\u7535\u8def\u677f. \u526f\u4ea7\u7269\u589e\u4ea7\u7ea6\u4e3a33\uff05."
                },
                {
                    "name": "\u5de5\u4e1a3D\u6253\u5370\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/387.png",
                    "x": 144.0,
                    "y": 36.0,
                    "tooltip": "\u5de5\u4e1a3D\u6253\u5370\u673a",
                    "data": "\u9700\u8981\u5927\u91cf\u7684\u51ff\u5236\u65b9\u5757?\u8fd9\u53f0\u673a\u5668\u5f88\u9002\u5408\u4f60."
                },
                {
                    "name": "\u5de5\u4e1a\u7126\u70891",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2040.png",
                    "x": -36.0,
                    "y": 180.0,
                    "tooltip": "\u5de5\u4e1a\u7126\u70891",
                    "data": "\u539f\u6728\u5806\u6210\u4e86\u6d77?\u628a\u8fd9\u4e9b\u539f\u6728\u53d8\u6210\u6e05\u6d01\u71c3\u70e7\u7684\u6728\u70ad\u5427!\u5de5\u4e1a\u7126\u7089\u662f3x3x3\u7684\u591a\u65b9\u5757\u673a\u5668,\u8fd0\u884c\u8d77\u6765\u6bd4\u50bb\u5927\u4e2a\u70ed\u89e3\u7089\u5feb\u591a\u4e86.\u5de5\u4e1a\u7126\u7089\u81f3\u5c11\u670924\u5e76\u884c,\u4e00\u53f0\u9876\u5f97\u4e0a\u5b83\u4eec\u597d\u591a\u53f0.%n%n\u4ece\u73b0\u5728\u5f00\u59cb,\u4f60\u53ef\u4ee5\u8ba9\u70ed\u89e3\u7089\u9000\u4f11\u4e86,\u9664\u975e\u6709\u67d0\u4e9b\u975e\u5e38\u5feb\u7684\u914d\u65b9\u5b83\u4eec\u8fd8\u80fd\u8ddf\u4e0a.\u4e3e\u4e2a\u4f8b\u5b50,\u53ea\u8981\u4f60\u4e3a\u5de5\u4e1a\u7126\u7089\u4f9b\u7ed9\u8db3\u591f\u7684\u6c2e\u6c14,\u5b83\u53ef\u4ee5\u8f7b\u677e\u5403\u4e0b\u4e00\u6574\u4e2a\u6811\u573a\u7684\u539f\u6728\u4ea7\u51fa,\u5c06\u5176\u8fc5\u901f\u8f6c\u5316\u4e3a\u6728\u70ad!%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728EV\u9636\u6bb5\u5236\u9020,\u4e14\u65e0\u9700\u5408\u91d1\u51b6\u70bc\u7089."
                },
                {
                    "name": "\u5de5\u4e1a\u953b\u9020\u9524",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/386.png",
                    "x": 240.0,
                    "y": 36.0,
                    "tooltip": "\u5de5\u4e1a\u953b\u9020\u9524",
                    "data": "\u4e00\u53f0\u591a\u65b9\u5757\u953b\u9020\u9524."
                },
                {
                    "name": "Insane Voltage Multiblocks",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6208773058821867190.png",
                    "x": 192.0,
                    "y": 216.0,
                    "tooltip": "Insane Voltage Multiblocks",
                    "data": "Upon reaching the land of IV machinery, you can put together even more multis and speed up your automation!\n\nMany of the multiblocks from IV tier onwards use special alloys, which either need to be cooked like any ingots you've used before (in a Furnace or EBF), but there are also alloys which have to be made in the Alloy Blast Smelter (ABS), as a fluid, which then needs to be solidified.\n\nThe multis that need ABS alloys are further down. To unlock their quests, you will first need to craft the ABS itself. However, there is a large assortment of machines you can craft without it, just by having the respective IV singleblock equivalent and some other resources.\n\nThose will be here... but you might be able to find some more, if you look closely through NEI. Good luck!"
                },
                {
                    "name": "\u6211\u60f3\u6211\u4f1a\u751f\u75c5\u7684",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2028.png",
                    "x": 84.0,
                    "y": 252.0,
                    "tooltip": "\u6211\u60f3\u6211\u4f1a\u751f\u75c5\u7684",
                    "data": "\u7528\u591a\u65b9\u5757\u91c7\u77ff\u573a\u83b7\u5f97\u7684\u6570\u4ee5\u5343\u8ba1\u7684\u77ff\u77f3\u53ef\u4ee5\u4ea4\u7ed9\u5de5\u4e1a\u79bb\u5fc3\u673a\u5904\u7406.%n%n\u8bd1\u8005\u6ce8:\u522b\u542c\u4ed6\u778e\u8bf4,\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u9009\u62e9\u6253\u7c89-\u79bb\u5fc3\u3001\u6d17\u77ff-\u6253\u7c89-\u79bb\u5fc3\u3001\u6d17\u77ff-\u70ed\u79bb-\u6253\u7c89\u8fd9\u4e9b\u5de5\u5e8f.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "\u6211\u8981\u7684\u662f\u56fa\u4f53\u4e0d\u662f\u6db2\u4f53!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2759.png",
                    "x": 228.0,
                    "y": 156.0,
                    "tooltip": "\u6211\u8981\u7684\u662f\u56fa\u4f53\u4e0d\u662f\u6db2\u4f53!",
                    "data": "\u6709\u7684\u65f6\u5019\u6211\u4eec\u9700\u8981\u7684\u4e0d\u662f\u5408\u91d1\u51b6\u70bc\u7089. \u8fd9\u53f0\u673a\u5668\u4e5f\u4f7f\u7528\u7ebf\u5708.%n%n\u8bf7\u6ce8\u610f,\u8fd9\u662fGT\u5408\u91d1\u7089\u7684\u591a\u65b9\u5757\u7248\u672c,\u800c\u4e0d\u662fGT++\u5408\u91d1\u51b6\u70bc\u7089\u7684\u56fa\u4f53\u7248\u672c.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "\u8ba9\u6211\u5236\u9020\u4e00\u4e2a\u65b0\u7684\u5b87\u5b99...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2758.png",
                    "x": 240.0,
                    "y": -144.0,
                    "tooltip": "\u8ba9\u6211\u5236\u9020\u4e00\u4e2a\u65b0\u7684\u5b87\u5b99...",
                    "data": "\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u4e13\u7528\u4e8e\u751f\u6210UU-M\u548c\u5e9f\u6599.\u5b83\u4e5f\u662f\u6700\u96be\u5236\u9020\u7684GT++\u591a\u65b9\u5757\u673a\u5668\u4e4b\u4e00,\u4f46\u53ea\u8981\u8ba9\u5b83\u6b63\u5e38\u8fd0\u884c,\u4f60\u5c31\u53ef\u4ee5\u590d\u5236\u79cd\u7c7b\u7e41\u591a\u7684\u5404\u79cd\u6750\u6599.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728UV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "\u5de8\u578b\u5408\u91d1\u51b6\u70bc\u7089",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3285.png",
                    "x": -192.0,
                    "y": 48.0,
                    "tooltip": "\u5de8\u578b\u5408\u91d1\u51b6\u70bc\u7089",
                    "data": "\u5de8\u578b\u591a\u65b9\u5757\u673a\u5668\u548cGT++\u7684\u90aa\u6076\u7ed3\u5408\u4e00\u5b9a\u662f\u4e00\u4e9b\u75af\u5b50\u7684\u6770\u4f5c.\u5b83\u662f\u4e00\u53f0\u81f3\u591a256\u5e76\u884c\u7684\u7ec8\u6781\u5408\u91d1\u51b6\u70bc\u7089.\u5982\u679c\u4f60\u8db3\u591f\u4ed4\u7ec6\u7684\u89c2\u5bdf,\u4f60\u53ef\u4ee5\u53d1\u73b0\u4f7f\u7528\u8db3\u591f\u6602\u8d35\u7684\u7ebf\u5708\u53ef\u4ee5\u5e26\u6765\u51e0\u4e4e\u65e0\u6cd5\u53d1\u73b0\u7684\u901f\u5ea6\u63d0\u5347.%n%n\u73bb\u7483\u7684\u7b49\u7ea7\u9650\u5236\u4e86\u80fd\u6e90\u4ed3\u548c\u914d\u65b9\u7684\u7b49\u7ea7.\u548c\u5176\u4ed6\u591a\u65b9\u5757\u673a\u5668\u4e00\u6837,UEV\u73bb\u7483\u53ef\u4ee5\u89e3\u9501\u6240\u6709\u7b49\u7ea7,\u4f7f\u7528\u6fc0\u5149\u4ed3\u9700\u8981UV\u73bb\u7483."
                },
                {
                    "name": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1416.png",
                    "x": 192.0,
                    "y": 48.0,
                    "tooltip": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "data": "\u6216\u8005\u662f\u5408\u91d1\u51b6\u70bc\u7089(Alloy Blast Smelter)\uff1f \u55ef,\u660e\u767d\u4e9b\u4e86. \u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u751f\u4ea7\u66f4\u5148\u8fdb\u7684GT++\u591a\u65b9\u5757,\u4ee5\u53ca\u9ad8\u7ea7\u710a\u6599\u6240\u9700\u7684\u9ad8\u7ea7\u5408\u91d1. \u5b83\u76f4\u63a5\u5c06\u91d1\u5c5e\u7194\u70bc\u6210\u6db2\u4f53. \u8fd9\u53f0\u673a\u5668\u751a\u81f3\u53ef\u4ee5\u66f4\u5feb\u5730\u7194\u5316\u94a8\u4e4b\u7c7b\u7684\u91d1\u5c5e! \u81f3\u5c11\u5728\u4f60\u7ed9\u5de5\u4e1a\u9ad8\u7089\u66f4\u6362\u66f4\u9ad8\u7ea7\u7ebf\u5708\u4e4b\u524d\u662f\u8fd9\u6837\u7684.%n%n\u53ea\u63a5\u53d71\u4e2a\u80fd\u6e90\u4ed3.%n%n\u73b0\u5728\u4f60\u89e3\u9501\u7684GT++\u591a\u65b9\u5757\u673a\u5668\u662f\u53ef\u9009\u7684,\u4e0d\u8fc7\u5b83\u4eec\u5747\u4e3a\u73b0\u6709\u5355\u65b9\u5757\u673a\u5668\u7684\u8d85\u5f3a\u5347\u7ea7.\u4e0d\u6b62\u63d0\u4f9b\u4e86\u66f4\u5feb\u7684\u901f\u5ea6,\u8fd8\u6709\u4e00\u4e9b\u9ad8\u7ea7\u529f\u80fd\uff1a\u6bd4\u5982\u65e0\u9700\u5355\u5143\u5373\u53ef\u7535\u89e3\u5316\u5408\u7269,\u4e00\u53f0\u591a\u65b9\u5757\u673a\u5668\u5373\u53ef\u652f\u6301\u8bb8\u591a\u4e0d\u540c\u6a21\u5934.\u5b83\u4eec\u8fd8\u81ea\u5e26\u8d85\u51c0\u95f4\u548c\u4f4e\u91cd\u529b\u73af\u5883."
                },
                {
                    "name": "Mass Processing in LuV and Beyond",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8199803816494517045.png",
                    "x": 192.0,
                    "y": -120.0,
                    "tooltip": "Mass Processing in LuV and Beyond",
                    "data": "As you enter LuV and beyond, fewer mass processing multiblocks are available as you replace old setups with new systems and scale up the multiblocks you've already built - there are still some important upgrades in these higher tiers, though. \n\nDefinitely don't miss out on the Circuit Assembly Line or you'll be kicking yourself later.\n\nBe a true GT engineer and finish out your collection!"
                },
                {
                    "name": "\u8d8a\u5927\u8d8a\u597d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2044.png",
                    "x": -192.0,
                    "y": 84.0,
                    "tooltip": "\u8d8a\u5927\u8d8a\u597d",
                    "data": "\u5bf9\u4e8e\u4e00\u4e2a\u9700\u8981\u70bc\u5236\u8352\u5510\u6570\u91cf\u6750\u6599\u7684\u4eba\u6765\u8bf4,\u8fd9\u53f0\u673a\u5668\u662f\u5b8c\u7f8e\u7684.  \u8fd9\u4e2a\u673a\u5668\u602a\u517d\u53ef\u4ee5\u540c\u65f6\u5904\u7406256\u4e2a\u914d\u65b9.%n%n\u73bb\u7483\u7b49\u7ea7(\u6bd4\u5982\u5728NEI\u641c\u7d22\"\u73bb\u7483\u7b49\u7ea7:HV\")\u9650\u5236\u4e86\u8fd9\u53f0\u673a\u5668\u7684\u6700\u9ad8\u80fd\u6e90\u4ed3\u7b49\u7ea7.%n%n\u4f60\u53ef\u4ee5\u901a\u8fc7\u87ba\u4e1d\u5200\u8c03\u6574\u5176\u4e3b\u65b9\u5757\u6765\u8bbe\u7f6e\u7535\u8def\u677f\u4f18\u5148\u7ea7.%n%n\u8bd1\u8005\u6ce8:\u8fd8\u53ef\u4ee5\u7528\u526a\u7ebf\u94b3\u53f3\u952e\u4e3b\u65b9\u5757\u542f\u7528\u72ec\u7acb\u8f93\u5165\u603b\u7ebf\u529f\u80fd."
                },
                {
                    "name": "Megalomania",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8420616239779406480.png",
                    "x": -144.0,
                    "y": 48.0,
                    "tooltip": "Megalomania",
                    "data": "In HV, you now technically have the ability to construct Megas for some machines. These absolute titans will boost your production to levels never-before-seen, at a price. These multiblocks have two major benefits:\n-They innately have 256 parallels.\n-They can use TecTech exotic hatches, allowing you to empty out tremendous amounts of power into them.\n\n[note]To get real benefit from these multis, you will want to use lots of power and take advantage of their extreme parallelization - consider whether or not you can actually make use of these before you go off building a Mega Blast Furnace in HV...[/note]"
                },
                {
                    "name": "More steam, more pressure!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5991978432068446918.png",
                    "x": -24.0,
                    "y": -84.0,
                    "tooltip": "More steam, more pressure!",
                    "data": "How do you compress things in the Steam Age? Simple, putting a lot of steam in one place, under high pressure, can apply a force to compress things...\n\nLet's just make it bigger. With the Steam Squasher, you can have a Compressor in a much larger scale, similarly to the other Steam Multiblocks. If you feel like compressing recipes are taking too long, which they probably are, this is a good solution to your problems.\n\nOnce the multi forms, provide lots of steam to get lots of compressed items."
                },
                {
                    "name": "Multiblock Revolution",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8198041923981670459.png",
                    "x": 24.0,
                    "y": -180.0,
                    "tooltip": "Multiblock Revolution",
                    "data": "The steam machines you have been using until now have served you well, but there will be a time when you need to process even more items. That's where the so-called multiblocks come in. There\u2019s a variety of steam multiblocks available to you - go have a look at the Mass Processing quest tab! \n\nThis tab introduces you to a wide range of extremely powerful multiblock machines that can replace your old, worn-out singleblocks (and some that can replace your old multiblocks!). Many of these new machines will require you to handle additional mechanics and requirements, but it will be worth it!\n\nHere are some terms you should be familiar with as you enter the world of multiblocks:\n\nOverclock (OC): \nIf a machine can handle at least 4 times the voltage that is required for a recipe, it will overclock - causing it to require 4x the EU/t but also run 2x as fast. This can happen multiple times!\n\nPerfect Overclock (Often phrased as \"Does not lose efficiency when overclocked):\nSome machines conditionally (or unconditionally) perform perfect overclocks: in this case, the machine will require 4x the EU/t, but it will run 4x as fast instead, leading to both increased speed and no net increase in the total eu usage!\n\nParallel (Often phrased as \"Processes x items\"): \nMachines which parallel act as if they are running multiple of themselves - that is to say, they are able to perform multiple of the same recipe at the same time, using the recipe's EU/t multiplied by the number of parallels. Machines which parallel will [warn]PRIORITIZE[/warn] this behavior over overclocking, which is good for you! Parallels are more efficient.\n\n[note]When working with multiblocks, if power is interrupted during operation, your inputs will be lost forever... careful![/note]"
                },
                {
                    "name": "\u5927\u7537\u5b69\u5927\u5973\u5b69\u7684\u5927\u73a9\u5177",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2031.png",
                    "x": 252.0,
                    "y": 180.0,
                    "tooltip": "\u5927\u7537\u5b69\u5927\u5973\u5b69\u7684\u5927\u73a9\u5177",
                    "data": "\u6211\u4e0d\u60f3\u957f\u5927,\u6211\u60f3\u8ddf\u5927\u538b\u6a21\u673a\u73a9.%n\u4ee5\u9632\u4f60\u6ca1\u5728NEI\u770b\u8fc7\u4e3b\u65b9\u5757\u7684tooltip,\u63d0\u9192\u4e00\u4e0b:\u4f60\u53ef\u4ee5\u5728\u5de5\u4e1a\u538b\u6a21\u673a\u4e0a\u653e\u7f6e\u591a\u4e2a\u8f93\u5165\u603b\u7ebf,\u6bcf\u4e2a\u603b\u7ebf\u53ef\u653e\u5165\u4e0d\u540c\u7684\u6a21\u5934,\u8fdb\u5165\u76f8\u5e94\u603b\u7ebf\u7684\u6750\u6599\u4f1a\u88ab\u52a0\u5de5\u6210\u6a21\u5934\u5bf9\u5e94\u7684\u6210\u54c1.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "\u7cbe\u5bc6\u7ec4\u88c5\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3090.png",
                    "x": 192.0,
                    "y": 276.0,
                    "tooltip": "\u7cbe\u5bc6\u7ec4\u88c5\u673a",
                    "data": "\u7cbe\u5bc6\u7ec4\u88c5\u673a\u6709\u4e24\u79cd\u6a21\u5f0f\uff1a\u7cbe\u5bc6\u6a21\u5f0f\u548c\u5e38\u89c4\u6a21\u5f0f.%n%n\u7cbe\u5bc6\u6a21\u5f0f\u662f\u7528\u4e8e\u5236\u9020Good-Generator\u8fd9\u4e2amod\u4e2d\u7684\u67d0\u4e9b\u5148\u8fdb\u90e8\u4ef6.%n%n\u5e38\u89c4\u6a21\u5f0f\u5219\u7c7b\u4f3c\u591a\u65b9\u5757\u7248\u672c\u7684\u7ec4\u88c5\u673a.%n%n\u4f60\u4e0d\u80fd\u501f\u52a9\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u8df3\u79d1\u6280.\u9700\u8981\u901a\u8fc7\u5355\u65b9\u5757\u7ec4\u88c5\u673a\u6216GT++\u591a\u65b9\u5757\u7ec4\u88c5\u673a,\u624d\u80fd\u5236\u9020\u7b2c\u4e00\u4e2a\u9ad8\u9636\u80fd\u6e90\u4ed3,\u7136\u540e\u624d\u80fd\u628a\u5b83\u5b89\u88c5\u5728\u7cbe\u5bc6\u7ec4\u88c5\u673a\u4e0a."
                },
                {
                    "name": "Pressure washing!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8419867822017820934.png",
                    "x": -24.0,
                    "y": -156.0,
                    "tooltip": "Pressure washing!",
                    "data": "If you have been processing the ores you have gathered up until now, you will have come across a variety of crushed ores. Since these are quite dirty, you will have to clean them up to get certain byproducts. But how do you clean up this multitude of crushed ores? By using a Steam Purifier, of course! With a steady flow of Steam and a bit of Water, you can wash away impurities and get Purified Crushed Ores in no time.\n\nIf you're tired of waiting forever for your ores to clean up, this is your fix!\n\nThis Multiblock has two modes, the default Washer Mode and a Simple Washer Mode. Simple Washers process ores considerably faster, but they do not give byproducts. Like other Multiblocks, the mode can be toggled by the respective button inside the GUI or by right-clicking the Controller with a Screwdriver. Since all ore washing recipes are LV, this Multiblock can run all of them."
                },
                {
                    "name": "\u628a\u6240\u6709\u5de5\u4eba\u8d76\u51fa\u5de5\u4f5c\u5c97\u4f4d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2054.png",
                    "x": 144.0,
                    "y": -96.0,
                    "tooltip": "\u628a\u6240\u6709\u5de5\u4eba\u8d76\u51fa\u5de5\u4f5c\u5c97\u4f4d",
                    "data": "\u5927\u89c4\u6a21\u81ea\u52a8\u88c5\u914d\u673a\u53ef\u4ee5\u4e3a\u4f60\u7ec4\u88c5\u5927\u91cf\u7684\u7269\u54c1. \u5b83\u7684\u8bbe\u8ba1\u521d\u8877\u662f\u5c06\u7ec4\u88c5\u673a\u3001\u62c6\u89e3\u673a\u548c\u81ea\u52a8\u5408\u6210\u673a\u7684\u529f\u80fd\u96c6\u6210\u5230\u4e00\u8d77.\u4f46\u662f,\u76ee\u524d\u53ea\u6709\u7ec4\u88c5\u673a\u6a21\u5f0f\u53ef\u7528.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728ZPM\u9636\u6bb5\u5236\u9020.%n%n\u867d\u8bf4\u76f8\u6bd4\u7cbe\u5bc6\u7ec4\u88c5\u673a,\u5b83\u6709\u8bb8\u591a\u7f3a\u70b9,\u6bd4\u65b9\u8bf4\u89e3\u9501\u65f6\u95f4\u665a\u3001\u5e76\u884c\u4e0d\u9ad8\u3001\u4e0d\u652f\u6301TecTech\u80fd\u6e90\u4ed3;\u4e0d\u8fc7\u6709\u4e00\u70b9\u662f\u5b83\u7684\u4f18\u52bf:\u5b83\u652f\u6301\u53cc\u80fd\u6e90\u4ed3\u5347\u538b,\u5408\u6210\u4e0b\u4e00\u9636\u6bb5\u7684\u7269\u54c1."
                },
                {
                    "name": "See You Lather",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6585475866071969942.png",
                    "x": -12.0,
                    "y": 156.0,
                    "tooltip": "See You Lather",
                    "data": "Just in time for the huge number of crystal rods you'll need to get your Applied Energistics system up and running, the Industrial Precision Lathe!\n\nThe number of recipes that can be processed in parallel by the IPL depends on the item pipe casing and the voltage tier:\nParallel = Item Pipe Casing Parallel + 2 * Voltage Tier, where LV is 1.\n\nAdditionally, it gains a speed boost on all recipes according to this formula:\nSpeed Boost = (Item Pipe Casing Speed Factor + Voltage Tier) / 4\nOr equivalently, the recipe time is multiplied by a factor of 4 / (Item Pipe Casing Factor + Voltage Tier).\n[note]Note that this can actually make the processing speed [warn]slower[/warn] if you use low tier item pipe casing and voltage.[/note]\n\nThe parallel and speed factor of the item casing is listed below:\nTin: 1 Parallel, 0.75 Speed Factor\nBrass: 1 Parallel, 0.8 Speed Factor\nElectrum: 2 Parallel, 0.9 Speed Factor\nPlatinum: 4 Parallel, 1 Speed Factor\nOsmium: 8 Parallel, 1.5 Speed Factor\nQuantium: 12 Parallel, 2 Speed Factor\nFluxed Electrum: 16 Parallel, 3 Speed Factor\nBlack Plutonium: 32 Parallel, 4 Speed Factor"
                },
                {
                    "name": "\u6447\u8d77\u6765...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1420.png",
                    "x": -24.0,
                    "y": 24.0,
                    "tooltip": "\u6447\u8d77\u6765...",
                    "data": "\u4ece\u6d17\u51c0\u7684\u77ff\u77f3\u4e2d\u7b5b\u51fa...\u65e0\u8bba\u5982\u4f55,\u5de5\u4e1a\u7b5b\u9009\u673a\u4f1a\u663e\u8457\u63d0\u9ad8\u7b5b\u9009\u901f\u5ea6.\u4f60\u4f1a\u600e\u4e48\u5904\u7406\u8fd9\u4e9b\u5b9d\u77f3\u5462\uff1f%n%n\u5982\u679c\u4f60\u4e0d\u60f3\u7528\u53cc\u80fd\u6e90\u4ed3\u5347\u538b\u7684\u8bdd,\u5f97\u518d\u505a\u4e00\u4e2a\u673a\u68b0\u65b9\u5757."
                },
                {
                    "name": "\u7194\u5316\u4e07\u7269...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/85.png",
                    "x": 72.0,
                    "y": 48.0,
                    "tooltip": "\u7194\u5316\u4e07\u7269...",
                    "data": "...\u6709\u4e86\u8fd9\u9879\u4f1f\u5927\u7684\u53d1\u660e!\u53ea\u8981\u5347\u7ea7\u4f9b\u7535\u548c\u7ebf\u5708,\u5c31\u53ef\u4ee5\u7194\u70bc\u4e0d\u53ef\u80dc\u6570\u7684\u7269\u54c1."
                },
                {
                    "name": "\u7ed5\u4e86\u4e00\u5708\u53c8\u4e00\u5708",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2037.png",
                    "x": 252.0,
                    "y": 216.0,
                    "tooltip": "\u7ed5\u4e86\u4e00\u5708\u53c8\u4e00\u5708",
                    "data": "\u60f3\u8981\u7ed5\u5730\u7403\u51e0\u5708\u7684\u5bfc\u7ebf?\u8bd5\u8bd5\u8fd9\u4e2a\u5427.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "Steam Blender?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5681445710078694276.png",
                    "x": 72.0,
                    "y": -120.0,
                    "tooltip": "Steam Blender?",
                    "data": "Why use fancy wiring and circuitry to blend dusts together when you can do the same thing with steam and pistons? The Steam Blender is the largest of these Steam Multiblocks and can handle your mixing needs for a while, having more parallel than an LV singleblock Mixer.\n\n[note]This Multiblock can only process recipes up to LV tier and is unable to process Fluid recipes.[/note]"
                },
                {
                    "name": "STEAM-POWERED BREAKTHROUGH",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6003979525766501212.png",
                    "x": 24.0,
                    "y": -120.0,
                    "tooltip": "STEAM-POWERED BREAKTHROUGH",
                    "data": "You should have quite the collection of single block Steam machines by now. While these may have gotten you through processing small amounts of materials, there will be a time when you will have to process a multitude of items. This is where Multiblocks come in.\n\nWhile these Multiblocks have a material cost that is way higher than their single block counterparts, they have certain bonuses: they use less Steam, and they can process recipes in parallel, which means that a single recipe cycle can craft multiple items at once, if the Steam provided is enough to sustain it.\n\nThey do however have some quirks that need to be taken care of:\n\n-These Multiblocks require very specific I/O blocks, use only those that are part of the quest \n-They process up to 8 items, where the Basic Tier is made of Bronze and High Pressure Tier is made of Steel (checkout the Multiblock Preview in NEI which will show you different levels of tiers)\n-The Tier and amount of parallel processing can be seen via WAILA if you are looking at the Controller Block\n\n[note]With this quest, you have started your journey with Mass Processing. However, don't get too excited quite yet. While there are some Multiblocks accessible in the Steam Age, most of them only unlock in EV or later, including better versions of these Multiblocks.[/note]"
                },
                {
                    "name": "Steam stomping!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7512596816828408986.png",
                    "x": 72.0,
                    "y": -156.0,
                    "tooltip": "Steam stomping!",
                    "data": "While the Forge Hammer is quite fast already, why not build this upscaled version and make it even faster? With the Steam Presser, you can unleash the full force of steam on whatever material you feed it. Watch blocks break apart and rods get smashed together faster than ever-at least until you gain access to more advanced technology.\n\nThe Steam Presser can only process recipes up to LV Tier."
                },
                {
                    "name": "\u84b8\u6c7d\u9636\u6bb5\u7684\u591a\u65b9\u5757? \u4e0d\u53ef\u80fd!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2764.png",
                    "x": 72.0,
                    "y": -84.0,
                    "tooltip": "\u84b8\u6c7d\u9636\u6bb5\u7684\u591a\u65b9\u5757? \u4e0d\u53ef\u80fd!",
                    "data": "\u5b83\u662f\u84b8\u6c7d\u7814\u78e8\u673a\u7684\u591a\u65b9\u5757\u7248\u672c.\u4e00\u6b21\u53ea\u80fd\u540c\u65f6\u5904\u74068\u4e2a\u7269\u54c1,\u4e0d\u8fc7\u901f\u5ea6\u66f4\u5feb.%n%n\u8bf7\u6ce8\u610f,\u6b64\u591a\u65b9\u5757\u673a\u5668\u8981\u6c42\u975e\u5e38\u7279\u6b8a\u7684\u8f93\u5165/\u8f93\u51fa\u4ed3\u5ba4,\u522b\u5f04\u9519\u4e86.%n%nWIKI \u5927\u578b\u84b8\u6c7d\u7814\u78e8\u673a\uff1agtnh.huijiwiki.com/p/128"
                },
                {
                    "name": "Taking Things Apart",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8917357558952918000.png",
                    "x": -24.0,
                    "y": 48.0,
                    "tooltip": "Taking Things Apart",
                    "data": "You probably haven't thought about the extractor in a while. Is your steam extractor still collecting dust somewhere? Well, if you do find yourself needing to extract things quick, (processing industrial quantities of flowers, maybe?) pick up the Dissection Apparatus.\n\n[note]This multi gets additional parallels based on tier of item pipe casing, so use the best one you can get![/note]"
                },
                {
                    "name": "\u6d17\u77ff\u5382\u91cc\u7684\u77ff\u77f3...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1422.png",
                    "x": 24.0,
                    "y": 276.0,
                    "tooltip": "\u6d17\u77ff\u5382\u91cc\u7684\u77ff\u77f3...",
                    "data": "...\u5468\u800c\u590d\u59cb,24\u5c0f\u65f6\u8fd0\u4f5c. \u4e00\u4e2a\u5927\u578b\u7684\u6d17\u77ff\u5382\u53ef\u4ee5\u5c06\u4f60\u7684\u77ff\u77f3\u53d8\u5f97\u5e72\u51c0\u53c8\u6574\u6d01. \u901a\u8fc7\u87ba\u4e1d\u5200\u53ef\u5207\u6362\u6d17\u77ff/\u7b80\u6613\u6d17\u77ff\u6a21\u5f0f\u548c\u5316\u5b66\u6d78\u6d17\u6a21\u5f0f.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020."
                },
                {
                    "name": "\u5df4\u6bd4\u4f26\u5854",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2320.png",
                    "x": -96.0,
                    "y": 84.0,
                    "tooltip": "\u5df4\u6bd4\u4f26\u5854",
                    "data": "\u55ef...\u5982\u679c\u5c0664\u4e2a\u84b8\u998f\u5854\u5408\u4e3a\u4e00\u5ea7\u4f1a\u53d1\u751f\u4ec0\u4e48...?\u4f60\u61c2\u7684...\u4f60\u4f1a\u5f97\u5230\u4e00\u4e2a61\u5c42\u9ad8\u7684\u591a\u65b9\u5757\u7ed3\u6784.%n%n\u6b64\u591a\u65b9\u5757\u673a\u5668\u4e00\u6b21\u6700\u591a\u53ef\u4ee5\u5904\u7406256\u4e2a\u914d\u65b9."
                },
                {
                    "name": "Under Pressure",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7108514021348170205.png",
                    "x": -36.0,
                    "y": 252.0,
                    "tooltip": "Under Pressure",
                    "data": "Bigger, better, faster. The Large Electric Compressor does about what you would expect."
                },
                {
                    "name": "...with the power of science!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7992749153415472519.png",
                    "x": 240.0,
                    "y": -96.0,
                    "tooltip": "...with the power of science!",
                    "data": "This multiblock will allow you to use all that UU-Matter that your Matter Fabricator makes, not that you don't have anything else to do with it...\n\n[note]This multi is UV.[/note]"
                },
                {
                    "name": "\u4f60\u95fb\u8d77\u6765\u50cf\u6389\u5230\u4e86\u9152\u6876\u91cc!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/768.png",
                    "x": 72.0,
                    "y": 72.0,
                    "tooltip": "\u4f60\u95fb\u8d77\u6765\u50cf\u6389\u5230\u4e86\u9152\u6876\u91cc!",
                    "data": "\u5728\u4f60\u5904\u7406\u88c2\u89e3\u71c3\u6599\u6216\u70ed\u89e3\u7089\u914d\u65b9\u65f6,\u8fd9\u4e2a\u72e0\u89d2\u8272\u4f1a\u6781\u5927\u5730\u63d0\u9ad8\u526f\u4ea7\u7387.\u5982\u6b64\u4e00\u6765\u4f60\u5c31\u53ef\u4ee5\u66f4\u6709\u6548\u7387\u7684\u5236\u9020\u5de5\u4e1aTNT\u3001\u5851\u6599\u3001\u805a\u56db\u6c1f\u4e59\u70ef,\u4ee5\u53ca\u5176\u4ed6\u5851\u6599\u4ea7\u54c1.\u4f60\u4e5f\u9700\u8981\u8fd9\u53f0\u673a\u5668\u6765\u5b8c\u6210\u4f60\u7684\u94c2\u7ebf.%n%n\u4f60\u9700\u8981\u5728\u8d85\u51c0\u95f4\u4e2d\u5236\u9020EV\u7535\u8def\u677f,\u7136\u540e\u624d\u80fd\u5236\u505a\u8fd9\u53f0\u673a\u5668.%n%n\u81f3\u4e8e\u4ed3\u5ba4,\u4f60\u53ef\u4ee5\u81ea\u7531\u9009\u62e9.\u4e00\u4e2aMV\u80fd\u6e90\u4ed3\u5c31\u53ef\u4ee5\u80dc\u4efb\u5927\u591a\u6570\u6709\u7528\u7684\u914d\u65b9.\u4e24\u4e2aMV\u80fd\u6e90\u4ed3\u6216\u8005\u4e00\u4e2aHV\u80fd\u6e90\u4ed3\u5c31\u53ef\u4ee5\u8986\u76d6\u9664\u4e86\u6c61\u67d3\u7269\u6216\u4e19\u916e\u5916\u51e0\u4e4e\u6240\u6709\u7684\u914d\u65b9.%n%n\u4f60\u8fd8\u9700\u8981\u4e00\u4e2a\u8f93\u5165\u4ed3\u3001\u81f3\u5c11\u4e94\u4e2a\u8f93\u51fa\u4ed3,\u4ee5\u53ca\u4e00\u4e2a\u8f93\u51fa\u603b\u7ebf\u7528\u4e8e\u6536\u96c6\u90a3\u4e9b\u56fa\u4f53\u4ea7\u51fa.%n%nPS\uff1a\u6211\u5728\u6570\u636e\u8868\u683c\u91cc\u5217\u51fa\u4e86\u6240\u6709\u7684\u84b8\u998f\u5854\u914d\u65b9,\u8fd9\u6837\u4f60\u67e5\u770b\u8d77\u6765\u4f1a\u66f4\u52a0\u65b9\u4fbf. \u73b0\u5728\u4f60\u53ef\u4ee5\u8f7b\u6613\u6bd4\u8f83\u9009\u62e9\u5904\u7406\u77f3\u6cb9\u7684\u8def\u7ebf\u4e86!"
                },
                {
                    "name": "You've Gotta Keep 'Em Separated",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9064898237805017210.png",
                    "x": 228.0,
                    "y": 276.0,
                    "tooltip": "You've Gotta Keep 'Em Separated",
                    "data": "When you need to polarize magnets or separate magnetic materials, look to the MFE! This multiblock requires an electromagnet to be inserted into its housing - better magnets, better bonuses. In IV, you'll be stuck with an Iron Electromagnet, though.\n\n[note]At the final tier of electromagnet, you can use TecTech multi-amp hatches. Might be good to remember when you're processing a certain magnetic material...[/note]"
                },
                {
                    "name": "\u55de...\u55de...\u55de...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2034.png",
                    "x": 132.0,
                    "y": 252.0,
                    "tooltip": "\u55de...\u55de...\u55de...",
                    "data": "\u9700\u8981\u5927\u91cf\u7684\u6c27\u548c\u6c22,\u6216\u662f\u53ea\u662f\u60f3\u8981\u7535\u89e3\u6750\u6599\u83b7\u5f97\u6210\u5428\u7684\u94dd?%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020."
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
                    "source": "Mass Processing in LuV and Beyond",
                    "target": "Advanced Assembly Line"
                },
                {
                    "source": "\u88c5\u914d\u7ebf",
                    "target": "Advanced Assembly Line"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "Advanced Assembly Line"
                },
                {
                    "source": "Mass Processing in LuV and Beyond",
                    "target": "Advanced Autoclaving"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "Advanced Autoclaving"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "An End to Deforestation"
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "An End to Deforestation"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "An End to Deforestation"
                },
                {
                    "source": "Megalomania",
                    "target": "\u53e6\u4e00\u53f0\u591a\u65b9\u5757\u5316\u5b66\u53cd\u5e94\u91dc?"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u53e6\u4e00\u53f0\u591a\u65b9\u5757\u5316\u5b66\u53cd\u5e94\u91dc?"
                },
                {
                    "source": "STEAM-POWERED BREAKTHROUGH",
                    "target": "A steam-powered whirl!"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u57fa\u5730\u706b\u5c71"
                },
                {
                    "source": "Mass Processing in LuV and Beyond",
                    "target": "\u6c90\u6d74\u5728\u7535\u6d41\u4e2d"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u6c90\u6d74\u5728\u7535\u6d41\u4e2d"
                },
                {
                    "source": "IV\u6405\u62cc\u673a",
                    "target": "\u6405\u62cc/\u6405\u62cc/\u5de7\u514b\u529b"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "\u6405\u62cc/\u6405\u62cc/\u5de7\u514b\u529b"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "\u5f2f\u66f2\u3001\u8f8a\u538b"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u6700\u597d\u7684\u5207\u9762\u5305\u673a"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u8d4c\u4e0a\u84b8\u998f"
                },
                {
                    "source": "\u785d\u57fa\u82ef",
                    "target": "\u8d4c\u4e0a\u84b8\u998f"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u8d1d\u7d22\u65af\u7684\u9a84\u50b2"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u7ed9\u6211\u4e00\u5927\u6876\u805a\u4e59\u70ef!"
                },
                {
                    "source": "High Voltage Multiblocks",
                    "target": "\u7ed9\u6211\u4e00\u5927\u6876\u805a\u4e59\u70ef!"
                },
                {
                    "source": "High Voltage Multiblocks",
                    "target": "Can it!"
                },
                {
                    "source": "\u4f60\u89c9\u5f97\u53d1\u5c04\u5668\u5df2\u7ecf\u591f\u7cdf\u7cd5\u4e86\uff1f",
                    "target": "\u7535\u8def\u88c5\u914d\u7ebf"
                },
                {
                    "source": "Mass Processing in LuV and Beyond",
                    "target": "\u7535\u8def\u88c5\u914d\u7ebf"
                },
                {
                    "source": "LuV\u7535\u8def\u7ec4\u88c5\u673a",
                    "target": "\u7535\u8def\u88c5\u914d\u7ebf"
                },
                {
                    "source": "\u88c5\u914d\u7ebf",
                    "target": "\u7535\u8def\u88c5\u914d\u7ebf"
                },
                {
                    "source": "\u968f\u673a\u8fc7\u7a0b\u7edd\u5bf9\u662f\u8d85\u68d2\u7684\u6e38\u620f\u8bbe\u8ba1",
                    "target": "\u7535\u8def\u88c5\u914d\u7ebf"
                },
                {
                    "source": "\u538b\u7f29\u4e07\u7269",
                    "target": "Clean Implosions?!"
                },
                {
                    "source": "Mass Processing in LuV and Beyond",
                    "target": "Clean Implosions?!"
                },
                {
                    "source": "UHV\u8d85\u5bfc(2,097,152 EU/t)",
                    "target": "Clean Implosions?!"
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u771f\u7537\u4eba\u4ece\u6765\u4e0d\u56de\u5934\u770b\u7206\u70b8"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "\u771f\u7537\u4eba\u4ece\u6765\u4e0d\u56de\u5934\u770b\u7206\u70b8"
                },
                {
                    "source": "Megalomania",
                    "target": "Cracking the World"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "\u65cb\u8f6c,\u8df3\u8dc3"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u628a\u6d77\u6d0b\u635e\u7a7a"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "Engraving With Style"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "Extraction Point"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "Extreme Voltage Multiblocks"
                },
                {
                    "source": "High Voltage Multiblocks",
                    "target": "Extreme Voltage Multiblocks"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "Fits The Mold"
                },
                {
                    "source": "Megalomania",
                    "target": "\u51bb\u4f24!"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u51bb\u50f5\u4e86..."
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u51bb\u50f5\u4e86..."
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u4e0a\u5e1d\u7684\u953b\u9020\u53f0"
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u4e0a\u5e1d\u7684\u953b\u9020\u53f0"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "High Voltage Multiblocks"
                },
                {
                    "source": "STEAM-POWERED BREAKTHROUGH",
                    "target": "High Voltage Multiblocks"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "\u7eff\u5de8\u4eba\u91cd\u62f3\u7c89\u788e!"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u5de5\u4e1a3D\u6253\u5370\u673a"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "\u5de5\u4e1a\u7126\u70891"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u5de5\u4e1a\u953b\u9020\u9524"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "Insane Voltage Multiblocks"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "Insane Voltage Multiblocks"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "\u6211\u60f3\u6211\u4f1a\u751f\u75c5\u7684"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "\u6211\u8981\u7684\u662f\u56fa\u4f53\u4e0d\u662f\u6db2\u4f53!"
                },
                {
                    "source": "Mass Processing in LuV and Beyond",
                    "target": "\u8ba9\u6211\u5236\u9020\u4e00\u4e2a\u65b0\u7684\u5b87\u5b99..."
                },
                {
                    "source": "\u7b2c8\u9636\u6bb5(UV)",
                    "target": "\u8ba9\u6211\u5236\u9020\u4e00\u4e2a\u65b0\u7684\u5b87\u5b99..."
                },
                {
                    "source": "Megalomania",
                    "target": "\u5de8\u578b\u5408\u91d1\u51b6\u70bc\u7089"
                },
                {
                    "source": "UV\u80fd\u6e90\u4ed3",
                    "target": "\u5de8\u578b\u5408\u91d1\u51b6\u70bc\u7089"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "Mass Processing in LuV and Beyond"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "Mass Processing in LuV and Beyond"
                },
                {
                    "source": "Megalomania",
                    "target": "\u8d8a\u5927\u8d8a\u597d"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "Megalomania"
                },
                {
                    "source": "STEAM-POWERED BREAKTHROUGH",
                    "target": "More steam, more pressure!"
                },
                {
                    "source": "\u7194\u70bc!",
                    "target": "Multiblock Revolution"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "\u5927\u7537\u5b69\u5927\u5973\u5b69\u7684\u5927\u73a9\u5177"
                },
                {
                    "source": "ASoC\u8fdb\u9636\u82af\u7247\u7ea7\u7cfb\u7edf",
                    "target": "\u7cbe\u5bc6\u7ec4\u88c5\u673a"
                },
                {
                    "source": "\u9540\u94d1\u94af",
                    "target": "\u7cbe\u5bc6\u7ec4\u88c5\u673a"
                },
                {
                    "source": "\u94f1\u9507\u5408\u91d1",
                    "target": "\u7cbe\u5bc6\u7ec4\u88c5\u673a"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "\u7cbe\u5bc6\u7ec4\u88c5\u673a"
                },
                {
                    "source": "IV\u80fd\u6e90\u4ed3",
                    "target": "\u7cbe\u5bc6\u7ec4\u88c5\u673a"
                },
                {
                    "source": "STEAM-POWERED BREAKTHROUGH",
                    "target": "Pressure washing!"
                },
                {
                    "source": "Mass Processing in LuV and Beyond",
                    "target": "\u628a\u6240\u6709\u5de5\u4eba\u8d76\u51fa\u5de5\u4f5c\u5c97\u4f4d"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "\u628a\u6240\u6709\u5de5\u4eba\u8d76\u51fa\u5de5\u4f5c\u5c97\u4f4d"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "See You Lather"
                },
                {
                    "source": "\u5c06\u5b9d\u77f3\u4e0e\u7c89\u672b\u5206\u5f00",
                    "target": "\u6447\u8d77\u6765..."
                },
                {
                    "source": "High Voltage Multiblocks",
                    "target": "\u6447\u8d77\u6765..."
                },
                {
                    "source": "High Voltage Multiblocks",
                    "target": "\u7194\u5316\u4e07\u7269..."
                },
                {
                    "source": "\u9ad8\u7ea7\u7535\u8def\u677f",
                    "target": "\u7194\u5316\u4e07\u7269..."
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "\u7ed5\u4e86\u4e00\u5708\u53c8\u4e00\u5708"
                },
                {
                    "source": "STEAM-POWERED BREAKTHROUGH",
                    "target": "Steam Blender?"
                },
                {
                    "source": "Multiblock Revolution",
                    "target": "STEAM-POWERED BREAKTHROUGH"
                },
                {
                    "source": "STEAM-POWERED BREAKTHROUGH",
                    "target": "Steam stomping!"
                },
                {
                    "source": "STEAM-POWERED BREAKTHROUGH",
                    "target": "\u84b8\u6c7d\u9636\u6bb5\u7684\u591a\u65b9\u5757? \u4e0d\u53ef\u80fd!"
                },
                {
                    "source": "High Voltage Multiblocks",
                    "target": "Taking Things Apart"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "\u6d17\u77ff\u5382\u91cc\u7684\u77ff\u77f3..."
                },
                {
                    "source": "Megalomania",
                    "target": "\u5df4\u6bd4\u4f26\u5854"
                },
                {
                    "source": "Extreme Voltage Multiblocks",
                    "target": "Under Pressure"
                },
                {
                    "source": "Mass Processing in LuV and Beyond",
                    "target": "...with the power of science!"
                },
                {
                    "source": "\u7b2c8\u9636\u6bb5(UV)",
                    "target": "...with the power of science!"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u4f60\u95fb\u8d77\u6765\u50cf\u6389\u5230\u4e86\u9152\u6876\u91cc!"
                },
                {
                    "source": "High Voltage Multiblocks",
                    "target": "\u4f60\u95fb\u8d77\u6765\u50cf\u6389\u5230\u4e86\u9152\u6876\u91cc!"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "You've Gotta Keep 'Em Separated"
                },
                {
                    "source": "Insane Voltage Multiblocks",
                    "target": "\u55de...\u55de...\u55de..."
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
    