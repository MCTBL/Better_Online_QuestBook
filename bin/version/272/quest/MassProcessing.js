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
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u88c5\u914d\u7ebf.png",
                    "x": 216.0,
                    "y": -72.0,
                    "tooltip": "Advanced Assembly Line",
                    "data": "This is the advanced assembly line from GigaGramFa<br/>b.\n\nIt supports item pipelining. That is, it will <br/>mimic a real assembly line by consuming ingredient<br/>s one by one instead of all at start. In effect, i<br/>t offers a parallelism up to however many item inp<br/>ut this recipe requires. You can think of an advan<br/>ced assembly line as a collection of slices which <br/>are capable of processing each step independently <br/>from other slices. It will start processing once t<br/>he input bus contents align with any stored data s<br/>tick. The first slice will consume the input in Bu<br/>s #1. After (recipe time/number of inputs) time, t<br/>he first slice's work is concluded and will start <br/>the second slice. At the same time, first slice wi<br/>ll look for input in input bus #1. If there are st<br/>ill enough input there slice #1 will start working<br/> again.\n\nThe terminal slice (the n-th slice, where<br/> n is number of item input in recipe) will put the<br/> recipe output in output bus when it has concluded<br/> his work. Whenever a non-terminal slice finished <br/>its work, it will try to pass the work onto next s<br/>lice. If the next slice cannot find the materials <br/>in its input bus, the just-finished slice will rem<br/>ain in [warn]STUCK[/warn] state and hang the assem<br/>bly line. To help locate these [warn]STUCK[/warn] <br/>assembly lines, the controller's front face will h<br/>ave its status light turned orange.\n\nThe EU/t cost<br/> of this machine is number of slices active multip<br/>lied by the original recipe EU/t. [warn]STUCK[/war<br/>n] slices do not consume power. It will use the wo<br/>rst energy supplying hatch's input voltage for rec<br/>ipe tier calculation and normal imperfect overcloc<br/>k. With exotic energy hatches, it can overclock be<br/>yond usual voltage tier, but will consume even mor<br/>e power than usual imperfect overclock. Every lase<br/>r overclock will 0.3 to power exponent. 1 laser ov<br/>erclock will have 50% recipe time and use 430% pow<br/>er. 2 laser overclocks will have 25% recipe time a<br/>nd use 1978% power. Will not overclock beyond 1 ti<br/>ck. Machine first tries to parallelize, then norma<br/>l imperfect overclock, then laser overclock.",
                    "quest_id": "ZIotzqvnRiKu1_1Hb9i1dg=="
                },
                {
                    "name": "Advanced Autoclaving",
                    "symbolSize": 28.799999999999997,
                    "x": 144.0,
                    "y": -144.0,
                    "tooltip": "Advanced Autoclaving",
                    "data": "In LuV, you can make the Industrial Autoclave. Thi<br/>s is a huge multiblock with many scaling factors -<br/> it is also extremely powerful. You'll definitely <br/>want to pick one of these up to process crystal ch<br/>ips quickly for the crystal circuit line.\n\n[note]C<br/>oils, pipe casings, and item pipe casings are all <br/>extremely important to this multi's scaling. Use t<br/>he best ones you have![/note]",
                    "quest_id": "_dFgSThoQTWgM696ykr2Gw=="
                },
                {
                    "name": "An End to Deforestation",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u539f\u6728\u62df\u751f\u573a.png",
                    "x": 240.0,
                    "y": 60.0,
                    "tooltip": "An End to Deforestation",
                    "data": "This multiblock is the perfect solution to high-sp<br/>eed tree farming. Do you need wood for charcoal or<br/> benzene power? Nuts for seed oil? Leaf blocks for<br/> decoration? Look no further!\n\nThe Tree Growth Sim<br/>ulator can farm almost any tree in the game, and p<br/>roduces all the items you would get by chopping it<br/> down normally. All this in a compact 3x3x3 cube, <br/>without any lag from growing a real tree.\n\nFirst, <br/>place any sapling in the controller slot of the mu<br/>ltiblock. Then, insert tools appropriate to the pa<br/>rt of the tree you want to harvest in an input bus<br/>. Give the machine power, turn it on, and be ready<br/> to get flooded by the outputs.\n\nDifferent tools a<br/>re required to gather different parts of the tree:<br/>\n - Saw for logs\n - Branch Cutter for saplings\n - <br/>Shears for leaves\n - Knife for fruit\nBetter versio<br/>ns of the tools (Chainsaw, Grafter, ...) will incr<br/>ease the yield! Check the tooltip of the controlle<br/>r block for details.\n\nYou can even use multiple di<br/>fferent tools together, and the machine will harve<br/>st several different products at the same time!\n\nN<br/>ote that the tools used will slowly lose durabilit<br/>y, so for long-term operation you might want to se<br/>t up some automatic replacement.\n\n[note]While this<br/> machine only requires IV, it is quite expensive t<br/>o make early in the tier. You will need 16 ZPM cir<br/>cuits and some fancy alloys.[/note]",
                    "quest_id": "fLH_QDPRR6mgCK0PL5iWmA=="
                },
                {
                    "name": "\u53e6\u4e00\u53f0\u591a\u65b9\u5757\u5316\u5b66\u53cd\u5e94\u91dc?",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de8\u578b\u5316\u5b66\u53cd\u5e94\u91dc.png",
                    "x": -192.0,
                    "y": 12.0,
                    "tooltip": "\u53e6\u4e00\u53f0\u591a\u65b9\u5757\u5316\u5b66\u53cd\u5e94\u91dc?",
                    "data": "\u8fc4\u4eca\u4e3a\u6b62,\u4f60\u53ef\u80fd\u5df2\u7ecf\u5efa\u9020\u4e86\u8bb8\u591a\u53f0\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.\u62e5\u6709\u5f3a\u59274/4\u65e0\u635f\u8d85\u9891\u7684\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u662f\u6700\u5f3a\u591a\u65b9\u5757\u4e4b<br/>\u4e00.\u7136\u800c,\u5982\u679c\u8fd9\u90fd\u65e0\u6cd5\u6ee1\u8db3\u4f60\u7684\u5316\u5de5\u4ea7\u7ebf,\u600e\u4e48\u529e\u5462?\u5982\u679c\u4e00\u4e2a\u914d\u65b9\u7684\u5904\u7406\u65f6\u95f4\u5df2\u7ecf\u8d85\u9891\u5230\u4e861t(0.05\u79d2<br/>)\u4ee5\u4e0b,\u4f60\u5c31\u65e0\u6cd5\u8fdb\u4e00\u6b65\u63d0\u901f\u4e86\u5417?\u522b\u62c5\u5fc3,\u6211\u4eec\u4e3a\u4f60\u63d0\u4f9b\u4e86\u89e3\u51b3\u65b9\u6848\uff1a\u5de8\u578b\u5316\u5b66\u53cd\u5e94\u91dc.\u5b83\u6700\u9ad8\u53ef\u4ee5\u540c\u65f6\u5e76\u884c2<br/>56\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u914d\u65b9!\u540c\u65f6,\u5982\u679c\u4f60\u80fd\u63d0\u4f9b\u8db3\u591f\u7684\u80fd\u91cf,\u5b83\u540c\u6837\u80fd\u591f\u8fdb\u884c\u8d85\u9891.\u7531\u4e8e\u9700\u89817\u4e2a\u805a\u53d8\u7ebf\u5708\u65b9\u5757,<br/>\u6240\u4ee5LuV\u624d\u80fd\u89e3\u9501\u5b83.\u8bf7\u67e5\u770b\u5168\u606f\u6295\u5f71\u4eea,\u83b7\u77e5\u5b83\u7684\u5177\u4f53\u7ed3\u6784\u4ee5\u53ca\u6240\u9700\u65b9\u5757.\u73bb\u7483\u7b49\u7ea7\u4f1a\u9650\u5236\u53ef\u7528\u7684\u80fd\u6e90\u4ed3\u7b49\u7ea7<br/>.\u4f60\u751a\u81f3\u53ef\u4ee5\u7528TecTech\u7684\u591aA\u80fd\u6e90\u4ed3!\u4e0d\u8fc7,\u5982\u679c\u4f60\u60f3\u7528\u6fc0\u5149\u4ed3\u7684\u8bdd,\u81f3\u5c11\u9700\u8981UV\u73bb\u7483.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMig=="
                },
                {
                    "name": "A steam-powered whirl!",
                    "symbolSize": 28.799999999999997,
                    "x": -24.0,
                    "y": -120.0,
                    "tooltip": "A steam-powered whirl!",
                    "data": "How does one centrifuge rare materials in the Stea<br/>m Age? The answer is by building and using the Ste<br/>am Separator, of course! By using steam to create <br/>a spinning force, this Multiblock can separate dif<br/>ferent materials quickly and easily.\n\nIf you think<br/> separation is taking forever, the Steam Separator<br/> will speed things up!\n\nThis Multiblock can proces<br/>s recipes up to LV Tier, and does accept an Output<br/> Hatch for recipes. But if you are looking to use <br/>recipes which require Fluid Inputs, you might have<br/> to build an LV Centrifuge in the future.",
                    "quest_id": "_pgKXw=="
                },
                {
                    "name": "\u57fa\u5730\u706b\u5c71",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u788e\u77f3\u673a.png",
                    "x": 144.0,
                    "y": 60.0,
                    "tooltip": "\u57fa\u5730\u706b\u5c71",
                    "data": "\u751f\u4ea7\u5706\u77f3\u7684\u7ec8\u6781\u673a\u5668.\u4e5f\u53ef\u4ee5\u5c06\u7ea2\u77f3\u5927\u89c4\u6a21\u8f6c\u5316\u4e3a\u9ed1\u66dc\u77f3,\u4ee5\u83b7\u53d6\u53ef\u518d\u751f\u7684\u7845\u3001\u9541\u3001\u94c1\u548c\u6c27.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABhQ=="
                },
                {
                    "name": "\u6c90\u6d74\u5728\u7535\u6d41\u4e2d",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u7535\u5f27\u7089.png",
                    "x": 168.0,
                    "y": -72.0,
                    "tooltip": "\u6c90\u6d74\u5728\u7535\u6d41\u4e2d",
                    "data": "\u6210\u767e\u4e0a\u5343\u73bb\u7483\u7684\u6700\u4f73\u6765\u6e90...\u8981\u8fd9\u4e9b\u505a\u4ec0\u4e48\u5462?\u6211\u4e0d\u77e5\u9053,\u8fd8\u662f\u60f3\u70b9\u6709\u8da3\u7684\u7528\u9014,\u7ed9\u6211\u5f00\u5f00\u773c\u5427!\u5de5\u4e1a\u7535\u5f27\u7089\u7684<br/>\"\u6709\u6548\"\u7535\u538b\u6bd4\u80fd\u6e90\u4ed3\u8981\u4f4e\u4e00\u9636.\u4e3e\u4e2a\u4f8b\u5b50,\u4f7f\u7528MV\u80fd\u6e90\u4ed3,\u673a\u5668\u53ef\u5904\u7406LV\u7535\u5f27\u7089\u7684\u914d\u65b9.\u8fd9\u53f0\u673a\u5668\u8fd8\u53ef\u4ee5\u5904<br/>\u7406\u7b49\u79bb\u5b50\u7535\u5f27\u7089\u7684\u914d\u65b9.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728LuV\u9636\u6bb5\u5236\u9020. \u539f\u6599\u4e4b\u4e00\u662f\u948d-232,\u4e00\u65b9\u9762\u7528\u9014\u4e0d\u591a,\u53e6<br/>\u4e00\u65b9\u9762\u5236\u9020\u8d77\u6765\u8fd8\u7279\u522b\u9ebb\u70e6.\u8bd1\u8005\u6ce8: \u948d-232\u7b97\u5565,\u770b\u770b\u5957\u5a03\u80fd\u91cf\u6838\u5fc3! \u4e0d\u8fc7\u505a\u51fa\u6765\u4e4b\u540e\u8fd8\u662f\u5f88\u9999\u7684.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH7Q=="
                },
                {
                    "name": "\u6405\u62cc/\u6405\u62cc/\u5de7\u514b\u529b",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u6405\u62cc\u673a.png",
                    "x": 156.0,
                    "y": 276.0,
                    "tooltip": "\u6405\u62cc/\u6405\u62cc/\u5de7\u514b\u529b",
                    "data": "\u5976\u5976,\u4f60\u80fd\u6559\u6211\u4eec\u5de7\u514b\u529b\u4e4b\u6b4c\u5417?\u4e50\u610f\u4e4b\u81f3!\u4f60\u4f1a\u8ddf\u6211\u4eec\u4e00\u8d77\u5531\u5de7\u514b\u529b\u4e4b\u6b4c\u5417?\u592a\u68d2\u4e86,\u8ddf\u7740\u5976\u5976\u4e00\u8d77\u5531!\u6405\u62cc,<br/>\u6405\u62cc,\u5de7\u514b\u529b\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b\u6405\u62cc\u597d\u5403\u7684\u5de7\u514b\u529b,\u5de7\u514b\u529b\u6405\u62cc\u597d\u5403\u7684<br/>\u5de7\u514b\u529b,\u5de7\u514b\u529b\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b\u6405\u62cc,\u6405\u62cc,\u5de7\u514b\u529b\u73b0\u5728\u4e0d\u518d\u9700\u8981\u5355\u5143\u4e86,\u597d\u8036!\u8bd1\u8005\u6ce8:\u300a\u6405\u62cc,\u6405\u62cc,\u5de7<br/>\u514b\u529b\u300b(Bate-Bate-Chocolate)\u662f\u58a8\u897f\u54e5\u4f20\u7edf\u513f\u6b4c.\u4efb\u52a1\u4e66\u539f\u6587\u6b4c\u8bcd\u90e8\u5206\u5747\u4e3a\u897f\u73ed\u7259\u6587.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH7g=="
                },
                {
                    "name": "\u5f2f\u66f2\u3001\u8f8a\u538b",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u8f8a\u538b\u673a.png",
                    "x": -36.0,
                    "y": 216.0,
                    "tooltip": "\u5f2f\u66f2\u3001\u8f8a\u538b",
                    "data": "\u5f53\u4f60\u9700\u8981\u6210\u5343\u4e0a\u4e07\u7684\u677f\u5b50\u65f6... \u53ef\u901a\u8fc7\u87ba\u4e1d\u5200\u5207\u6362\u5377\u677f\u673a\u6a21\u5f0f\u548c\u51b2\u538b\u673a\u5e8a\u6a21\u5f0f.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636<br/>\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH9g=="
                },
                {
                    "name": "\u6700\u597d\u7684\u5207\u9762\u5305\u673a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u5207\u5272\u673a.png",
                    "x": 144.0,
                    "y": 84.0,
                    "tooltip": "\u6700\u597d\u7684\u5207\u9762\u5305\u673a",
                    "data": "\u5f53\u4f60\u6709\u4e86\u4e00\u53f0\u88c5\u6ee1\u4e86\u5c0f\u5200\u7684\u673a\u5668,\u4f60\u770b\u5565\u90fd\u50cf\u9762\u5305\u4e86. \u4f7f\u7528\u87ba\u4e1d\u5200\u53ef\u5207\u6362\u677f\u6750\u5207\u5272\u673a\u6a21\u5f0f\u548c\u98df\u6750\u5207\u7247\u673a\u6a21\u5f0f.B<br/>luebine-2019!\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH8A=="
                },
                {
                    "name": "\u8d4c\u4e0a\u84b8\u998f",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e39\u683c\u7279\u84b8\u998f\u5382.png",
                    "x": 240.0,
                    "y": 12.0,
                    "tooltip": "\u8d4c\u4e0a\u84b8\u998f",
                    "data": "IV\u9636\u6bb5\u5e26\u6765\u4e86\u56db\u79cdGT++\u591a\u65b9\u5757\u673a\u5668,\u5305\u62ec\u84b8\u998f\u5854\u7684\u5347\u7ea7\u7248\u672c,\u79f0\u4e4b\u4e3a\u4e39\u683c\u7279\u84b8\u998f\u5382. \u5b83\u4e0e\u84b8\u998f\u5854\u5728\u7ed3\u6784\u4e0a<br/>\u5b8c\u5168\u76f8\u540c,\u53ea\u662f\u4f7f\u7528\u7684\u63a7\u5236\u5668\u65b9\u5757\u4e0d\u540c. \u8fd9\u4e2a\u63a7\u5236\u5668\u65b9\u5757\u7684\u5408\u6210\u66f4\u52a0\u590d\u6742,\u9700\u8981\u66f4\u6602\u8d35\u7684\u6750\u6599,\u5e76\u4e14\u4e5f\u9501\u5b9a\u53ea\u80fd<br/>\u7528IV\u4ee5\u4e0a\u7684\u5316\u5de5\u5382\u5408\u6210,\u8fd9\u4e5f\u4f7f\u5f97\u5982\u679c\u4ec5\u4e3a\u6b64\u5408\u6210\u5347\u7ea7\u5316\u5de5\u5382\u7684\u8bdd,\u90a3\u8fd9\u4e2a\u5408\u6210\u914d\u65b9\u5c31\u663e\u5f97\u66f4\u8d35\u4e86.\u4e0d\u8fc7\u8bdd\u8bf4\u56de<br/>\u6765,\u4e39\u683c\u7279\u89e3\u51b3\u4e86\u84b8\u998f\u5854\u8fd0\u884c\u7f13\u6162\u7684\u95ee\u9898,\u800c\u4e14\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4,\u84b8\u998f\u5854\u662f\u6240\u6709\u8fd9\u4e9b\u53ef\u518d\u751f\u8d44\u6e90\u751f\u4ea7\u7ebf\u7684\u652f\u67f1. \u60f3<br/>\u8981\u9760\u53ef\u518d\u751f\u80fd\u6e90\u83b7\u5f97\u53ef\u9760\u7684IV/LuV\u7535\u529b,\u4f60\u8fd8\u9700\u8981\u591a\u5c11\u56db\u8054\u84b8\u998f\u5854\u5462?\u53bb\u5427.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMQQ=="
                },
                {
                    "name": "\u8d1d\u7d22\u65af\u7684\u9a84\u50b2",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e9a\u9a6c\u900a\u4ed3\u5e93.png",
                    "x": 216.0,
                    "y": 0.0,
                    "tooltip": "\u8d1d\u7d22\u65af\u7684\u9a84\u50b2",
                    "data": "\u4e9a\u9a6c\u900a\u4ed3\u5e93\u662f\u6ee1\u8db3\u4f60\u6240\u6709\u6253\u5305\u9700\u6c42\u7684\u7ec8\u6781\u9009\u62e9.\u5c0f\u64ae\u7c89\u548c\u5c0f\u5806\u7c89\u5b9e\u5728\u592a\u591a?\u8fd9\u53f0\u673a\u5668\u4e3a\u4f60\u800c\u751f.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef<br/>\u4ee5\u5728LuV\u9636\u6bb5\u5236\u9020.\u8bd1\u8005\u6ce8:\u6770\u592b\u00b7\u8d1d\u7d22\u65af(Jeff Bezos)\u662f\u4e9a\u9a6c\u900a\u516c\u53f8\u7684CEO.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH9w=="
                },
                {
                    "name": "\u7ed9\u6211\u4e00\u5927\u6876\u805a\u4e59\u70ef!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.png",
                    "x": 72.0,
                    "y": 24.0,
                    "tooltip": "\u7ed9\u6211\u4e00\u5927\u6876\u805a\u4e59\u70ef!",
                    "data": "\u538c\u5026\u4e86\u4f7f\u7528\u5c0f\u5355\u5143\u6765\u5904\u7406\u5316\u5b66\u54c1?\u5efa\u9020\u4e00\u4e2a\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u5427,\u4f60\u53ef\u4ee5\u76f4\u63a5\u7528\u7ba1\u9053\u8f93\u5165\u6216\u8f93\u51fa\u6d41\u4f53,\u6216\u4f7f\u7528\u5927\u578b\u6d41<br/>\u4f53\u5355\u5143\u6765\u4ece\u8f93\u51fa\u4ed3\u8fd0\u8f93\u6d41\u4f53.\u6ce8\u610f,\u5982\u679c\u8f93\u51fa\u4ed3\u5df2\u6ee1,\u591a\u65b9\u5757\u5c06\u4f1a\u541e\u6389\u591a\u4f59\u7684\u4ea7\u7269!\u987a\u4fbf\u8bf4\u4e00\u4e0b,\u67d0\u4e9b\u65e7\u914d\u65b9\u5728\u5927<br/>\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u4e2d\u53d8\u5f97\u66f4\u7b80\u5355\u4e86(24\u53f7\u7535\u8def\u677f,\u53ef\u8df3\u8fc7\u4e00\u6b65\u6216\u591a\u6b65\u5408\u6210).\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc\u53ef\u770b\u505a\u8d85\u51c0\u95f4\u73af\u5883.\u4f60<br/>\u8fd8\u9700\u8981:1x\u7ef4\u62a4\u4ed31x\u80fd\u6e90\u4ed30+\u8f93\u5165\u603b\u7ebf(\u5982\u679c\u914d\u65b9\u9700\u8981\u8f93\u5165\u7269\u54c1\u7684\u8bdd,\u4e3a\u4e86\u5b8c\u5168\u81ea\u52a8\u5316,\u4f60\u53ef\u80fd\u9700\u8981\u6bcf\u79cd\u6750<br/>\u6599\u653e\u4e00\u4e2a\u8f93\u5165\u603b\u7ebf)0-1x\u8f93\u51fa\u603b\u7ebf(\u5982\u679c\u914d\u65b9\u4f1a\u8f93\u51fa\u7269\u54c1\u7684\u8bdd)2+\u8f93\u5165\u4ed3(\u6bcf\u79cd\u6d41\u4f53\u4e00\u4e2a\u8f93\u5165\u4ed3)1+\u8f93\u51fa<br/>\u4ed3(\u540c\u4e0a)\u5bf9\u51c6\u8f93\u51fa\u4ed3\u4f7f\u7528\u87ba\u4e1d\u5200,\u53ef\u4ee5\u5faa\u73af\u5207\u6362\u5176\u8f93\u51fa\u6a21\u5f0f. \u624b\u6301\u87ba\u4e1d\u5200Shift+\u53f3\u952e,\u53ef\u4ee5\u76f4\u63a5\u5207\u6362\u4e3a<br/>\u7279\u5b9a\u6d41\u4f53\u6a21\u5f0f(specific-fluid-mode),\u7136\u540e\u7528\u5355\u5143\u9501\u5b9a\u8f93\u51fa\u7684\u6d41\u4f53,\u8fd9\u6837\u81ea\u52a8\u5316\u5c31\u4f1a\u65b9\u4fbf<br/>\u591a\u4e86. \u9501\u5b9a\u6d41\u4f53\u9002\u7528\u4e8e\u6240\u6709\u8f93\u51fa\u4ed3,\u5e76\u4e0d\u4ec5\u4ec5\u652f\u6301\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADbA=="
                },
                {
                    "name": "Can it!",
                    "symbolSize": 28.799999999999997,
                    "x": -24.0,
                    "y": 72.0,
                    "tooltip": "Can it!",
                    "data": "If you've ever needed to wait on a Canning Machine<br/> to fill up your supply of tin cans, or for a Flui<br/>d Canning Machine to make mountains of coolant, co<br/>nsider the TurboCan Pro. This multiblock acts as b<br/>oth machines and has significant bonuses - when th<br/>e time comes that you decide you need it!",
                    "quest_id": "gMRufFtRRRa30LE21boFNQ=="
                },
                {
                    "name": "\u7535\u8def\u88c5\u914d\u7ebf",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7535\u8def\u88c5\u914d\u7ebf.png",
                    "x": 168.0,
                    "y": -168.0,
                    "tooltip": "\u7535\u8def\u88c5\u914d\u7ebf",
                    "data": "\u8fd9\u4e9b\u7528\u4e8e\u6784\u5efa4\u53f07\u7247\u7684\u7535\u8def\u88c5\u914d\u7ebf,\u8db3\u591f\u6ee1\u8db3\u4e00\u4e2a\u7cfb\u5217\u7684\u7535\u8def\u677f\u5236\u9020. \u5982\u679c\u4f60\u4ec5\u9700\u8981\u67d0\u4e2a\u7cfb\u5217\u4e2d\u7684\u4e00\u79cd\u7535\u8def\u677f<br/>(\u6bd4\u5982\u5fae\u5904\u7406\u5668),\u90a3\u5c31\u628a\u5b83\u9664\u4ee54.\u5047\u8bbe\u4f60\u5728LuV\u4efb\u52a1\u680f\u5df2\u7ecf\u83b7\u5f97\u4e86\u6240\u9700\u7684\u538b\u5370\u7535\u8def,\u73b0\u5728\u5c31\u53ef\u4ee5\u5f00\u59cb\u5236\u9020\u6676<br/>\u4f53\u7cfb\u5217\u7684\u7535\u8def\u88c5\u914d\u7ebf\u4e86. \u6211\u4eec\u4e00\u4e0a\u6765\u5c31\u8981\u6c424\u53f0\u662f\u56e0\u4e3a\u6bcf\u53f0\u7535\u8def\u88c5\u914d\u7ebf\u53ea\u80fd\u94ed\u523b\u4e00\u6b21,\u65e0\u6cd5\u79fb\u9664\u94ed\u523b.\u662f\u7684,\u4f60<br/>\u60f3\u7528\u7535\u8def\u88c5\u914d\u7ebf\u5236\u9020\u7684\u6bcf\u79cd\u7535\u8def\u677f\u90fd\u9700\u8981\u4e00\u53f0\u4e13\u7528\u7535\u8def\u88c5\u914d\u7ebf.\u4f5c\u4e3a\u88c5\u914d\u7ebf,\u5b83\u4e0e\u666e\u901a\u88c5\u914d\u7ebf\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e00\u81f4,\u6bcf<br/>\u4e2a\u603b\u7ebf\u6309\u987a\u5e8f\u63d0\u4f9b\u539f\u6599,\u4f46\u7531\u4e8e\u662f\u5355\u53f0\u4e13\u7528,\u6240\u4ee5\u7528\u8d77\u6765\u5c31\u5bb9\u6613\u591a\u4e86,\u540c\u65f6\u9ad8\u9636\u5408\u6210\u8868\u4e5f\u4fbf\u5b9c\u591a\u4e86.\u7535\u8def\u88c5\u914d\u7ebf\u7684<br/>\u539f\u6599\u662f\u5c01\u88c5\u7684,\u6240\u4ee5\u4e00\u6b21\u53ef\u4ee5\u5236\u902016\u4e2a\u7535\u8def\u677f(ULV\u548cLV\u7535\u8def\u66f4\u591a),\u8282\u7ea6\u65f6\u95f4\u3001EU\u8fd8\u6709\u710a\u9521(\u6216\u94cb\u94c5\u5408<br/>\u91d1).\u5728\u7ec4\u88c5\u673a\u4e2d\u914d\u5408\u805a\u4e59\u70ef\u53ef\u4ee5\u5236\u9020\u5c01\u88c5\u5143\u4ef6.\u987a\u4fbf\u4e00\u63d0,\u4f60\u53ef\u4ee5\u9009\u62e9\u5b89\u88c5\u66f4\u9ad8\u7ea7\u7684\u4ed3/\u603b\u7ebf,\u4e0d\u8fc7\u5408\u6210\u65f6\u7684\u539f<br/>\u6599\u987a\u5e8f\u8fd8\u662f\u5f97\u4e0eNEI\u4e00\u81f4.\u53e6\u5916,\u7535\u8def\u88c5\u914d\u7ebf\u53ef\u4ee5\u65e0\u635f\u8d85\u9891.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKKQ=="
                },
                {
                    "name": "Clean Implosions?!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7535\u52a8\u805a\u7206\u538b\u7f29\u673a.png",
                    "x": 216.0,
                    "y": -168.0,
                    "tooltip": "Clean Implosions?!",
                    "data": "Introducing the bigger (and better) Implosion Comp<br/>ressor, the Electric Implosion Compressor.\n\nThe El<br/>ectric Implosion Compressor does not need any expl<br/>osive and only needs electricity, isn't that very <br/>nice!\n\nFurthermore it gains extra parallels 4^(Tie<br/>r - 1) based on the containment block used in the <br/>middle.\n\nTier 1: Neutronium Block\nTier 2: Infinity<br/> Block\nTier 3: transcendent Metal Block\nTier 4: Sp<br/>acetime Block\nTier 5: Universium Block\n\n[note]Whil<br/>e the structure preview shows holes in the middle,<br/> it requires the full 27 containment blocks to for<br/>m, once formed the middle 5 blocks will disappear <br/>visually, but sometimes when breaking you will get<br/> them back (and sometimes you won't). [/note]\n\n[no<br/>te]The minimum allowed energy hatch tier is one ti<br/>er below the recipe tier, so let's start with 2 UH<br/>V energy hatches for now.[/note]",
                    "quest_id": "IlCOpa8bR9WbOjSOPxZIlA=="
                },
                {
                    "name": "\u771f\u7537\u4eba\u4ece\u6765\u4e0d\u56de\u5934\u770b\u7206\u70b8",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fdb\u9636\u805a\u7206\u538b\u7f29\u673a.png",
                    "x": 252.0,
                    "y": 252.0,
                    "tooltip": "\u771f\u7537\u4eba\u4ece\u6765\u4e0d\u56de\u5934\u770b\u7206\u70b8",
                    "data": "\u4ed6\u4eec\u7528\u81ea\u52a8\u5316\u6765\u5b8c\u6210.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020,\u4e0d\u8fc7\u8fd8\u8981\u7528\u5230\u94c2\u7ebf\u548cZPM\u7535\u8def\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKxQ=="
                },
                {
                    "name": "\u00a76\u00a7lCracking the World",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de8\u578b\u77f3\u6cb9\u88c2\u5316\u673a.png",
                    "x": -96.0,
                    "y": 48.0,
                    "tooltip": "\u00a76\u00a7lCracking the World",
                    "data": "How much oil do you need? Or maybe it's Naquadah F<br/>uel you're after, or Radox... either way, this mas<br/>sive structure can handle it, boasting 256 paralle<br/>ls.",
                    "quest_id": "d5Fxz8ClQQCXy9GN_m9BrA=="
                },
                {
                    "name": "\u65cb\u8f6c,\u8df3\u8dc3",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u70ed\u529b\u7cbe\u70bc\u5382.png",
                    "x": -12.0,
                    "y": 276.0,
                    "tooltip": "\u65cb\u8f6c,\u8df3\u8dc3",
                    "data": "\u65cb\u8f6c,\u5347\u6e29--\u542c\u8d77\u6765\u50cf\u4e00\u4e2a\u821e\u8e48. \u6216\u662f\u70ed\u529b\u79bb\u5fc3\u673a. \u5efa\u9020\u4e00\u4e2a\u5de5\u4e1a\u70ed\u529b\u7cbe\u70bc\u5382,\u4ee5\u5145\u5206\u5229\u7528\u4f60\u7684\u77ff\u77f3.\u53ea\u8981<br/>\u4fdd\u8bc1\u81f3\u5c118\u4e2a\u70ed\u5904\u7406\u673a\u68b0\u65b9\u5757,\u4f60\u5c31\u53ef\u4ee5\u7528\u566a\u97f3\u5371\u9669\u6807\u5fd7\u6765\u4ee3\u66ff\u70ed\u5904\u7406\u673a\u68b0\u65b9\u5757.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5<br/>\u5236\u9020.\u6ce8\u610f\u6d88\u58f0\u4ed3\u5b89\u88c5\u5728\u5e95\u5c42.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFjw=="
                },
                {
                    "name": "\u628a\u6d77\u6d0b\u635e\u7a7a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u73e0\u6d77\u6e14\u573a.png",
                    "x": 240.0,
                    "y": 84.0,
                    "tooltip": "\u628a\u6d77\u6d0b\u635e\u7a7a",
                    "data": "\u4e3a\u4e86\u751f\u7269\u67f4\u6cb9,\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\u91cc,\u4f60\u90fd\u7528\u9c7c\u7b3c\u6355\u9c7c.\u73b0\u5728,\u4f60\u53ef\u4ee5\u5efa\u9020\u73e0\u6d77\u6e14\u573a,\u6536\u83b7\u6210\u5428\u7684\u9c7c\u548c\u526f\u4ea7\u7269.\u8fd9\u53f0\u591a<br/>\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIBQ=="
                },
                {
                    "name": "Engraving With Style",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8d85\u7ea7\u8f93\u51fa\u603b\u7ebf(UHV).png",
                    "x": 144.0,
                    "y": 12.0,
                    "tooltip": "Engraving With Style",
                    "data": "Sick of having to swap out lenses or make tens of <br/>laser engravers for your cleanroom? The Hyper-Inte<br/>nsity Laser Engraver is here for you. This multibl<br/>ock can handle all of your engraving needs.\n\nBy us<br/>ing more powerful Laser Source Hatches in the stru<br/>cture, you can gain more parallels and run higher <br/>tier recipes. ",
                    "quest_id": "uP_FwHb_QTyAPaoZ80u74A=="
                },
                {
                    "name": "Extraction Point",
                    "symbolSize": 28.799999999999997,
                    "x": 60.0,
                    "y": 276.0,
                    "tooltip": "Extraction Point",
                    "data": "Nothing turns solids to liquids faster than the La<br/>rge Fluid Extractor - not yet, anyways. You'll nee<br/>d to make both Heating and Solenoid Coils for this<br/> multiblock.\n\n[note]This multiblock is technically<br/> EV, but it will demand a lot of tungstensteel.[/n<br/>ote]",
                    "quest_id": "Itn1KOiISHSbXzoDd2BB8w=="
                },
                {
                    "name": "Extreme Voltage Multiblocks",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u5de5\u4e1a\u79bb\u5fc3\u673a.png",
                    "x": 24.0,
                    "y": 216.0,
                    "tooltip": "Extreme Voltage Multiblocks",
                    "data": "You might already have a Steam Multiblock or the L<br/>arge Sifter. But in EV, IV, and the following tier<br/>s you unlock multiblocks for (almost) every GT mac<br/>hine. And some more on top of that!\n\nMost of them <br/>are made to do the same GT processing as the singl<br/>eblock machines you've been using, but much faster<br/>. The multis can have up to three bonuses: energy <br/>savings, faster recipe time and parallels, which m<br/>ean that a single recipe cycle can craft multiple <br/>items at once, if the power provided is enough to <br/>sustain it.\n\nThe variety of structures and intrica<br/>cies of these new multis can go far beyond simpler<br/> multis like the EBF, LCR or VF. While some are si<br/>mple cuboids, others come with more diverse mechan<br/>ics and conditions to work properly. In return, th<br/>ey can be extremely powerful, so keep an eye out f<br/>or them!",
                    "quest_id": "w5O5rPL_Q_GDp8lxWMd0DQ=="
                },
                {
                    "name": "Fits The Mold",
                    "symbolSize": 28.799999999999997,
                    "x": 168.0,
                    "y": 0.0,
                    "tooltip": "Fits The Mold",
                    "data": "Making machines for every mold sounds tiring... fo<br/>rtunately, the Fluid Shaper multiblock can handle <br/>any number of molds by using Solidifier Hatches. T<br/>his multiblock is also extendable, gaining more pa<br/>rallels if you add additional segments. Be sure to<br/> expand it if it's too slow!\n\n[note]The Fluid Shap<br/>er also speeds up as it is running, making it more<br/> efficient to do large batches.[/note]",
                    "quest_id": "6glle46JSyuwR6O4x7mLYA=="
                },
                {
                    "name": "\u51bb\u4f24!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de8\u578b\u771f\u7a7a\u51b7\u51bb\u673a.png",
                    "x": -96.0,
                    "y": 12.0,
                    "tooltip": "\u51bb\u4f24!",
                    "data": "\u8fd9\u53f0\u5de8\u578b\u771f\u7a7a\u51b7\u51bb\u673a\u53ef\u4ee5\u540c\u65f6\u5904\u7406\u6700\u591a256\u4e2a\u914d\u65b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH_Q=="
                },
                {
                    "name": "\u51bb\u50f5\u4e86...",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u51db\u51b0\u51b7\u51bb\u673a.png",
                    "x": 216.0,
                    "y": 96.0,
                    "tooltip": "\u51bb\u50f5\u4e86...",
                    "data": "\u6211\u597d\u51b7\u554a...\u60f3\u8981\u6b63\u5e38\u4f7f\u7528\u8fd9\u53f0\u673a\u5668,\u4f60\u9700\u8981\u7ed9\u5b83\u6301\u7eed\u4f9b\u5e94\u6781\u5bd2\u4e4b\u51db\u51b0.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728LuV\u9636\u6bb5\u5236\u9020<br/>.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH8w=="
                },
                {
                    "name": "\u4e0a\u5e1d\u7684\u953b\u9020\u53f0",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u70bd\u7131\u9ad8\u7089.png",
                    "x": 168.0,
                    "y": 96.0,
                    "tooltip": "\u4e0a\u5e1d\u7684\u953b\u9020\u53f0",
                    "data": "\u70bd\u7131\u9ad8\u7089\u80fd\u4ee5\u96be\u4ee5\u7f6e\u4fe1\u7684\u901f\u5ea6\u5904\u7406\u7269\u54c1. \u60f3\u8981\u6b63\u5e38\u4f7f\u7528\u8fd9\u53f0\u673a\u5668,\u4f60\u9700\u8981\u7ed9\u5b83\u6301\u7eed\u4f9b\u5e94\u70c8\u7130\u4e4b\u70bd\u7131,\u8fd8\u5f97\u914d\u4e0a\u597d<br/>\u7684\u7ebf\u5708.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020,\u4f46\u9700\u8981\u4e24\u4e2aZPM\u7535\u8def\u677f.\u8bd1\u8005\u6ce8:\u70bd\u7131\u9ad8\u7089\u6ca1\u6709\u7535\u538b\u7b49\u7ea7\u5e26\u6765\u7684<br/>\u989d\u5916\u7089\u6e29\u5956\u52b1,\u5176\u4f59\u673a\u5236\u548c\u5de5\u4e1a\u9ad8\u7089\u4e00\u81f4.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH9A=="
                },
                {
                    "name": "High Voltage Multiblocks",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u5927\u578b\u5316\u5b66\u53cd\u5e94\u91dc.png",
                    "x": 24.0,
                    "y": 48.0,
                    "tooltip": "High Voltage Multiblocks",
                    "data": "Time to scale up production! In HV, a handful of n<br/>ew powerful multiblocks are available to you. In p<br/>articular, take a look at the Large Chemical React<br/>or, which always perfectly overclocks, as well as <br/>the Distillation Tower, which will allow you to ge<br/>t all byproducts from distillation instead of targ<br/>etting just one.",
                    "quest_id": "pKSx6HEUS0WkL6qkwo742g=="
                },
                {
                    "name": "\u7eff\u5de8\u4eba\u91cd\u62f3\u7c89\u788e!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u7c89\u788e\u673a.png",
                    "x": 60.0,
                    "y": 156.0,
                    "tooltip": "\u7eff\u5de8\u4eba\u91cd\u62f3\u7c89\u788e!",
                    "data": "\u5927\u89c4\u6a21\u7834\u574f! \u6216\u8005\u81f3\u5c11,\u53ef\u4ee5\u7c89\u788e\u5f88\u591a\u5f88\u591a\u7684\u77ff\u77f3. \u5efa\u9020\u4e00\u53f0\u5de5\u4e1a\u7c89\u788e\u673a,\u5904\u7406\u4f60\u83b7\u5f97\u7684\u6240\u6709\u77ff\u77f3.\u8fd9\u53f0\u591a\u65b9<br/>\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020,\u4f46\u5b83\u9700\u8981ZPM\u7684\u7535\u8def\u677f. \u526f\u4ea7\u7269\u589e\u4ea7\u7ea6\u4e3a33\uff05.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFjQ=="
                },
                {
                    "name": "\u5de5\u4e1a3D\u6253\u5370\u673a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a3D\u6253\u5370\u673a.png",
                    "x": 144.0,
                    "y": 36.0,
                    "tooltip": "\u5de5\u4e1a3D\u6253\u5370\u673a",
                    "data": "\u9700\u8981\u5927\u91cf\u7684\u51ff\u5236\u65b9\u5757?\u8fd9\u53f0\u673a\u5668\u5f88\u9002\u5408\u4f60.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABgw=="
                },
                {
                    "name": "\u5de5\u4e1a\u7126\u7089",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u7126\u7089.png",
                    "x": -36.0,
                    "y": 180.0,
                    "tooltip": "\u5de5\u4e1a\u7126\u7089",
                    "data": "\u539f\u6728\u5806\u6210\u4e86\u6d77?\u628a\u8fd9\u4e9b\u539f\u6728\u53d8\u6210\u6e05\u6d01\u71c3\u70e7\u7684\u6728\u70ad\u5427!\u5de5\u4e1a\u7126\u7089\u662f3x3x3\u7684\u591a\u65b9\u5757\u673a\u5668,\u8fd0\u884c\u8d77\u6765\u6bd4\u50bb\u5927\u4e2a\u70ed\u89e3<br/>\u7089\u5feb\u591a\u4e86.\u5de5\u4e1a\u7126\u7089\u81f3\u5c11\u670924\u5e76\u884c,\u4e00\u53f0\u9876\u5f97\u4e0a\u5b83\u4eec\u597d\u591a\u53f0.\u4ece\u73b0\u5728\u5f00\u59cb,\u4f60\u53ef\u4ee5\u8ba9\u70ed\u89e3\u7089\u9000\u4f11\u4e86,\u9664\u975e\u6709\u67d0\u4e9b<br/>\u975e\u5e38\u5feb\u7684\u914d\u65b9\u5b83\u4eec\u8fd8\u80fd\u8ddf\u4e0a.\u4e3e\u4e2a\u4f8b\u5b50,\u53ea\u8981\u4f60\u4e3a\u5de5\u4e1a\u7126\u7089\u4f9b\u7ed9\u8db3\u591f\u7684\u6c2e\u6c14,\u5b83\u53ef\u4ee5\u8f7b\u677e\u5403\u4e0b\u4e00\u6574\u4e2a\u6811\u573a\u7684\u539f\u6728\u4ea7<br/>\u51fa,\u5c06\u5176\u8fc5\u901f\u8f6c\u5316\u4e3a\u6728\u70ad!\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728EV\u9636\u6bb5\u5236\u9020,\u4e14\u65e0\u9700\u5408\u91d1\u51b6\u70bc\u7089.",
                    "quest_id": "A=="
                },
                {
                    "name": "\u5de5\u4e1a\u953b\u9020\u9524",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u953b\u9020\u9524.png",
                    "x": 240.0,
                    "y": 36.0,
                    "tooltip": "\u5de5\u4e1a\u953b\u9020\u9524",
                    "data": "\u4e00\u53f0\u591a\u65b9\u5757\u953b\u9020\u9524.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAABgg=="
                },
                {
                    "name": "Insane Voltage Multiblocks",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u6da1\u8f6e\u71c3\u6c14\u8f6e\u673aIII.png",
                    "x": 192.0,
                    "y": 216.0,
                    "tooltip": "Insane Voltage Multiblocks",
                    "data": "Upon reaching the land of IV machinery, you can pu<br/>t together even more multis and speed up your auto<br/>mation!\n\nMany of the multiblocks from IV tier onwa<br/>rds use special alloys, which either need to be co<br/>oked like any ingots you've used before (in a Furn<br/>ace or EBF), but there are also alloys which have <br/>to be made in the Alloy Blast Smelter (ABS), as a <br/>fluid, which then needs to be solidified.\n\nThe mul<br/>tis that need ABS alloys are further down. To unlo<br/>ck their quests, you will first need to craft the <br/>ABS itself. However, there is a large assortment o<br/>f machines you can craft without it, just by havin<br/>g the respective IV singleblock equivalent and som<br/>e other resources.\n\nThose will be here... but you <br/>might be able to find some more, if you look close<br/>ly through NEI. Good luck!",
                    "quest_id": "p1gHMaeg5Sg=="
                },
                {
                    "name": "\u6211\u60f3\u6211\u4f1a\u751f\u75c5\u7684",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u79bb\u5fc3\u673a.png",
                    "x": 84.0,
                    "y": 252.0,
                    "tooltip": "\u6211\u60f3\u6211\u4f1a\u751f\u75c5\u7684",
                    "data": "\u7528\u591a\u65b9\u5757\u91c7\u77ff\u573a\u83b7\u5f97\u7684\u6570\u4ee5\u5343\u8ba1\u7684\u77ff\u77f3\u53ef\u4ee5\u4ea4\u7ed9\u5de5\u4e1a\u79bb\u5fc3\u673a\u5904\u7406.\u8bd1\u8005\u6ce8:\u522b\u542c\u4ed6\u778e\u8bf4,\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\u9009\u62e9\u6253\u7c89<br/>-\u79bb\u5fc3\u3001\u6d17\u77ff-\u6253\u7c89-\u79bb\u5fc3\u3001\u6d17\u77ff-\u70ed\u79bb-\u6253\u7c89\u8fd9\u4e9b\u5de5\u5e8f.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH7A=="
                },
                {
                    "name": "\u6211\u8981\u7684\u662f\u56fa\u4f53\u4e0d\u662f\u6db2\u4f53!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u5408\u91d1\u7089.png",
                    "x": 228.0,
                    "y": 156.0,
                    "tooltip": "\u6211\u8981\u7684\u662f\u56fa\u4f53\u4e0d\u662f\u6db2\u4f53!",
                    "data": "\u6709\u7684\u65f6\u5019\u6211\u4eec\u9700\u8981\u7684\u4e0d\u662f\u5408\u91d1\u51b6\u70bc\u7089. \u8fd9\u53f0\u673a\u5668\u4e5f\u4f7f\u7528\u7ebf\u5708.\u8bf7\u6ce8\u610f,\u8fd9\u662fGT\u5408\u91d1\u7089\u7684\u591a\u65b9\u5757\u7248\u672c,\u800c\u4e0d\u662fG<br/>T++\u5408\u91d1\u51b6\u70bc\u7089\u7684\u56fa\u4f53\u7248\u672c.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKxw=="
                },
                {
                    "name": "\u8ba9\u6211\u5236\u9020\u4e00\u4e2a\u65b0\u7684\u5b87\u5b99...",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8d28\u91cf\u53d1\u751f\u5668CPU.png",
                    "x": 240.0,
                    "y": -144.0,
                    "tooltip": "\u8ba9\u6211\u5236\u9020\u4e00\u4e2a\u65b0\u7684\u5b87\u5b99...",
                    "data": "\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u4e13\u7528\u4e8e\u751f\u6210UU-M\u548c\u5e9f\u6599.\u5b83\u4e5f\u662f\u6700\u96be\u5236\u9020\u7684GT++\u591a\u65b9\u5757\u673a\u5668\u4e4b\u4e00,\u4f46\u53ea\u8981\u8ba9\u5b83\u6b63\u5e38\u8fd0\u884c,<br/>\u4f60\u5c31\u53ef\u4ee5\u590d\u5236\u79cd\u7c7b\u7e41\u591a\u7684\u5404\u79cd\u6750\u6599.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728UV\u9636\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKxg=="
                },
                {
                    "name": "\u5de8\u578b\u5408\u91d1\u51b6\u70bc\u7089",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de8\u578b\u5408\u91d1\u51b6\u70bc\u7089.png",
                    "x": -192.0,
                    "y": 48.0,
                    "tooltip": "\u5de8\u578b\u5408\u91d1\u51b6\u70bc\u7089",
                    "data": "\u5de8\u578b\u591a\u65b9\u5757\u673a\u5668\u548cGT++\u7684\u90aa\u6076\u7ed3\u5408\u4e00\u5b9a\u662f\u4e00\u4e9b\u75af\u5b50\u7684\u6770\u4f5c.\u5b83\u662f\u4e00\u53f0\u81f3\u591a256\u5e76\u884c\u7684\u7ec8\u6781\u5408\u91d1\u51b6\u70bc\u7089.\u5982\u679c<br/>\u4f60\u8db3\u591f\u4ed4\u7ec6\u7684\u89c2\u5bdf,\u4f60\u53ef\u4ee5\u53d1\u73b0\u4f7f\u7528\u8db3\u591f\u6602\u8d35\u7684\u7ebf\u5708\u53ef\u4ee5\u5e26\u6765\u51e0\u4e4e\u65e0\u6cd5\u53d1\u73b0\u7684\u901f\u5ea6\u63d0\u5347.\u73bb\u7483\u7684\u7b49\u7ea7\u9650\u5236\u4e86\u80fd\u6e90\u4ed3<br/>\u548c\u914d\u65b9\u7684\u7b49\u7ea7.\u548c\u5176\u4ed6\u591a\u65b9\u5757\u673a\u5668\u4e00\u6837,UEV\u73bb\u7483\u53ef\u4ee5\u89e3\u9501\u6240\u6709\u7b49\u7ea7,\u4f7f\u7528\u6fc0\u5149\u4ed3\u9700\u8981UV\u73bb\u7483.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAM1Q=="
                },
                {
                    "name": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u5408\u91d1\u51b6\u70bc\u7089.png",
                    "x": 192.0,
                    "y": 48.0,
                    "tooltip": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "data": "\u6216\u8005\u662f\u5408\u91d1\u51b6\u70bc\u7089(Alloy Blast Smelter)\uff1f \u55ef,\u660e\u767d\u4e9b\u4e86. \u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u751f\u4ea7<br/>\u66f4\u5148\u8fdb\u7684GT++\u591a\u65b9\u5757,\u4ee5\u53ca\u9ad8\u7ea7\u710a\u6599\u6240\u9700\u7684\u9ad8\u7ea7\u5408\u91d1. \u5b83\u76f4\u63a5\u5c06\u91d1\u5c5e\u7194\u70bc\u6210\u6db2\u4f53. \u8fd9\u53f0\u673a\u5668\u751a\u81f3\u53ef\u4ee5\u66f4\u5feb<br/>\u5730\u7194\u5316\u94a8\u4e4b\u7c7b\u7684\u91d1\u5c5e! \u81f3\u5c11\u5728\u4f60\u7ed9\u5de5\u4e1a\u9ad8\u7089\u66f4\u6362\u66f4\u9ad8\u7ea7\u7ebf\u5708\u4e4b\u524d\u662f\u8fd9\u6837\u7684.\u53ea\u63a5\u53d71\u4e2a\u80fd\u6e90\u4ed3.\u73b0\u5728\u4f60\u89e3\u9501\u7684G<br/>T++\u591a\u65b9\u5757\u673a\u5668\u662f\u53ef\u9009\u7684,\u4e0d\u8fc7\u5b83\u4eec\u5747\u4e3a\u73b0\u6709\u5355\u65b9\u5757\u673a\u5668\u7684\u8d85\u5f3a\u5347\u7ea7.\u4e0d\u6b62\u63d0\u4f9b\u4e86\u66f4\u5feb\u7684\u901f\u5ea6,\u8fd8\u6709\u4e00\u4e9b\u9ad8\u7ea7\u529f<br/>\u80fd\uff1a\u6bd4\u5982\u65e0\u9700\u5355\u5143\u5373\u53ef\u7535\u89e3\u5316\u5408\u7269,\u4e00\u53f0\u591a\u65b9\u5757\u673a\u5668\u5373\u53ef\u652f\u6301\u8bb8\u591a\u4e0d\u540c\u6a21\u5934.\u5b83\u4eec\u8fd8\u81ea\u5e26\u8d85\u51c0\u95f4\u548c\u4f4e\u91cd\u529b\u73af\u5883.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFiA=="
                },
                {
                    "name": "Mass Processing in LuV and Beyond",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u7845\u5ca9\u6291\u5236\u5ba4.png",
                    "x": 192.0,
                    "y": -120.0,
                    "tooltip": "Mass Processing in LuV and Beyond",
                    "data": "As you enter LuV and beyond, fewer mass processing<br/> multiblocks are available as you replace old setu<br/>ps with new systems and scale up the multiblocks y<br/>ou've already built - there are still some importa<br/>nt upgrades in these higher tiers, though. \n\nDefin<br/>itely don't miss out on the Circuit Assembly Line <br/>or you'll be kicking yourself later.\n\nBe a true GT<br/> engineer and finish out your collection!",
                    "quest_id": "ECDllKcSQ4SONHHfkfO0yw=="
                },
                {
                    "name": "\u8d8a\u5927\u8d8a\u597d",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de8\u578b\u5de5\u4e1a\u9ad8\u7089.png",
                    "x": -192.0,
                    "y": 84.0,
                    "tooltip": "\u8d8a\u5927\u8d8a\u597d",
                    "data": "\u5bf9\u4e8e\u4e00\u4e2a\u9700\u8981\u70bc\u5236\u8352\u5510\u6570\u91cf\u6750\u6599\u7684\u4eba\u6765\u8bf4,\u8fd9\u53f0\u673a\u5668\u662f\u5b8c\u7f8e\u7684.  \u8fd9\u4e2a\u673a\u5668\u602a\u517d\u53ef\u4ee5\u540c\u65f6\u5904\u7406256\u4e2a\u914d\u65b9.\u73bb<br/>\u7483\u7b49\u7ea7(\u6bd4\u5982\u5728NEI\u641c\u7d22\"\u73bb\u7483\u7b49\u7ea7:HV\")\u9650\u5236\u4e86\u8fd9\u53f0\u673a\u5668\u7684\u6700\u9ad8\u80fd\u6e90\u4ed3\u7b49\u7ea7.\u4f60\u53ef\u4ee5\u901a\u8fc7\u87ba\u4e1d\u5200\u8c03\u6574\u5176\u4e3b<br/>\u65b9\u5757\u6765\u8bbe\u7f6e\u7535\u8def\u677f\u4f18\u5148\u7ea7.\u8bd1\u8005\u6ce8:\u8fd8\u53ef\u4ee5\u7528\u526a\u7ebf\u94b3\u53f3\u952e\u4e3b\u65b9\u5757\u542f\u7528\u72ec\u7acb\u8f93\u5165\u603b\u7ebf\u529f\u80fd.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH_A=="
                },
                {
                    "name": "Megalomania",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u5de8\u578b\u5de5\u4e1a\u9ad8\u7089.png",
                    "x": -144.0,
                    "y": 48.0,
                    "tooltip": "Megalomania",
                    "data": "In HV, you now technically have the ability to con<br/>struct Megas for some machines. These absolute tit<br/>ans will boost your production to levels never-bef<br/>ore-seen, at a price. These multiblocks have two m<br/>ajor benefits:\n-They innately have 256 parallels.\n<br/>-They can use TecTech exotic hatches, allowing you<br/> to empty out tremendous amounts of power into the<br/>m.\n\n[note]To get real benefit from these multis, y<br/>ou will want to use lots of power and take advanta<br/>ge of their extreme parallelization - consider whe<br/>ther or not you can actually make use of these bef<br/>ore you go off building a Mega Blast Furnace in HV<br/>...[/note]\n",
                    "quest_id": "wGINqtSuSQKLI_Yk7hAdcA=="
                },
                {
                    "name": "More steam, more pressure!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5927\u578b\u84b8\u6c7d\u538b\u7f29\u673a.png",
                    "x": -24.0,
                    "y": -84.0,
                    "tooltip": "More steam, more pressure!",
                    "data": "How do you compress things in the Steam Age? Simpl<br/>e, putting a lot of steam in one place, under high<br/> pressure, can apply a force to compress things...<br/>\n\nLet's just make it bigger. With the Steam Squash<br/>er, you can have a Compressor in a much larger sca<br/>le, similarly to the other Steam Multiblocks. If y<br/>ou feel like compressing recipes are taking too lo<br/>ng, which they probably are, this is a good soluti<br/>on to your problems.\n\nOnce the multi forms, provid<br/>e lots of steam to get lots of compressed items.",
                    "quest_id": "Plg8vg0gS9Ks2Ddc5sIVOg=="
                },
                {
                    "name": "\u00a73\u00a7lMultiblock Revolution",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5927\u578b\u84b8\u6c7d\u7814\u78e8\u673a.png",
                    "x": 24.0,
                    "y": -180.0,
                    "tooltip": "\u00a73\u00a7lMultiblock Revolution",
                    "data": "The steam machines you have been using until now h<br/>ave served you well, but there will be a time when<br/> you need to process even more items. That's where<br/> the so-called multiblocks come in. There\u2019s a vari<br/>ety of steam multiblocks available to you - go hav<br/>e a look at the Mass Processing quest tab! \n\nThis <br/>tab introduces you to a wide range of extremely po<br/>werful multiblock machines that can replace your o<br/>ld, worn-out singleblocks (and some that can repla<br/>ce your old multiblocks!). Many of these new machi<br/>nes will require you to handle additional mechanic<br/>s and requirements, but it will be worth it!\n\nHere<br/> are some terms you should be familiar with as you<br/> enter the world of multiblocks:\n\nOverclock (OC): <br/>\nIf a machine can handle at least 4 times the volt<br/>age that is required for a recipe, it will overclo<br/>ck - causing it to require 4x the EU/t but also ru<br/>n 2x as fast. This can happen multiple times!\n\nPer<br/>fect Overclock (Often phrased as \"Does not lose ef<br/>ficiency when overclocked):\nSome machines conditio<br/>nally (or unconditionally) perform perfect overclo<br/>cks: in this case, the machine will require 4x the<br/> EU/t, but it will run 4x as fast instead, leading<br/> to both increased speed and no net increase in th<br/>e total eu usage!\n\nParallel (Often phrased as \"Pro<br/>cesses x items\"): \nMachines which parallel act as <br/>if they are running multiple of themselves - that <br/>is to say, they are able to perform multiple of th<br/>e same recipe at the same time, using the recipe's<br/> EU/t multiplied by the number of parallels. Machi<br/>nes which parallel will [warn]PRIORITIZE[/warn] th<br/>is behavior over overclocking, which is good for y<br/>ou! Parallels are more efficient.\n\n[note]When work<br/>ing with multiblocks, if power is interrupted duri<br/>ng operation, your inputs will be lost forever... <br/>careful![/note]",
                    "quest_id": "hEsmeH74S4aOOrROI1AHxQ=="
                },
                {
                    "name": "\u5927\u7537\u5b69\u5927\u5973\u5b69\u7684\u5927\u73a9\u5177",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u538b\u6a21\u673a.png",
                    "x": 252.0,
                    "y": 180.0,
                    "tooltip": "\u5927\u7537\u5b69\u5927\u5973\u5b69\u7684\u5927\u73a9\u5177",
                    "data": "\u6211\u4e0d\u60f3\u957f\u5927,\u6211\u60f3\u8ddf\u5927\u538b\u6a21\u673a\u73a9.\u4ee5\u9632\u4f60\u6ca1\u5728NEI\u770b\u8fc7\u4e3b\u65b9\u5757\u7684tooltip,\u63d0\u9192\u4e00\u4e0b:\u4f60\u53ef\u4ee5\u5728\u5de5\u4e1a\u538b\u6a21<br/>\u673a\u4e0a\u653e\u7f6e\u591a\u4e2a\u8f93\u5165\u603b\u7ebf,\u6bcf\u4e2a\u603b\u7ebf\u53ef\u653e\u5165\u4e0d\u540c\u7684\u6a21\u5934,\u8fdb\u5165\u76f8\u5e94\u603b\u7ebf\u7684\u6750\u6599\u4f1a\u88ab\u52a0\u5de5\u6210\u6a21\u5934\u5bf9\u5e94\u7684\u6210\u54c1.\u8fd9\u53f0\u591a\u65b9<br/>\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH7w=="
                },
                {
                    "name": "\u7cbe\u5bc6\u7ec4\u88c5\u673a",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7cbe\u5bc6\u81ea\u52a8\u7ec4\u88c5\u673aMT-3662.png",
                    "x": 192.0,
                    "y": 276.0,
                    "tooltip": "\u7cbe\u5bc6\u7ec4\u88c5\u673a",
                    "data": "\u7cbe\u5bc6\u7ec4\u88c5\u673a\u6709\u4e24\u79cd\u6a21\u5f0f\uff1a\u7cbe\u5bc6\u6a21\u5f0f\u548c\u5e38\u89c4\u6a21\u5f0f.\u7cbe\u5bc6\u6a21\u5f0f\u662f\u7528\u4e8e\u5236\u9020Good-Generator\u8fd9\u4e2amod\u4e2d<br/>\u7684\u67d0\u4e9b\u5148\u8fdb\u90e8\u4ef6.\u5e38\u89c4\u6a21\u5f0f\u5219\u7c7b\u4f3c\u591a\u65b9\u5757\u7248\u672c\u7684\u7ec4\u88c5\u673a.\u4f60\u4e0d\u80fd\u501f\u52a9\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u8df3\u79d1\u6280.\u9700\u8981\u901a\u8fc7\u5355\u65b9\u5757\u7ec4\u88c5<br/>\u673a\u6216GT++\u591a\u65b9\u5757\u7ec4\u88c5\u673a,\u624d\u80fd\u5236\u9020\u7b2c\u4e00\u4e2a\u9ad8\u9636\u80fd\u6e90\u4ed3,\u7136\u540e\u624d\u80fd\u628a\u5b83\u5b89\u88c5\u5728\u7cbe\u5bc6\u7ec4\u88c5\u673a\u4e0a.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMEg=="
                },
                {
                    "name": "Pressure washing!",
                    "symbolSize": 28.799999999999997,
                    "x": -24.0,
                    "y": -156.0,
                    "tooltip": "Pressure washing!",
                    "data": "If you have been processing the ores you have gath<br/>ered up until now, you will have come across a var<br/>iety of crushed ores. Since these are quite dirty,<br/> you will have to clean them up to get certain byp<br/>roducts. But how do you clean up this multitude of<br/> crushed ores? By using a Steam Purifier, of cours<br/>e! With a steady flow of Steam and a bit of Water,<br/> you can wash away impurities and get Purified Cru<br/>shed Ores in no time.\n\nIf you're tired of waiting <br/>forever for your ores to clean up, this is your fi<br/>x!\n\nThis Multiblock has two modes, the default Was<br/>her Mode and a Simple Washer Mode. Simple Washers <br/>process ores considerably faster, but they do not <br/>give byproducts. Like other Multiblocks, the mode <br/>can be toggled by the respective button inside the<br/> GUI or by right-clicking the Controller with a Sc<br/>rewdriver. Since all ore washing recipes are LV, t<br/>his Multiblock can run all of them.",
                    "quest_id": "g=="
                },
                {
                    "name": "\u628a\u6240\u6709\u5de5\u4eba\u8d76\u51fa\u5de5\u4f5c\u5c97\u4f4d",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5927\u89c4\u6a21\u81ea\u52a8\u88c5\u914d\u673av1.01.png",
                    "x": 144.0,
                    "y": -96.0,
                    "tooltip": "\u628a\u6240\u6709\u5de5\u4eba\u8d76\u51fa\u5de5\u4f5c\u5c97\u4f4d",
                    "data": "\u5927\u89c4\u6a21\u81ea\u52a8\u88c5\u914d\u673a\u53ef\u4ee5\u4e3a\u4f60\u7ec4\u88c5\u5927\u91cf\u7684\u7269\u54c1. \u5b83\u7684\u8bbe\u8ba1\u521d\u8877\u662f\u5c06\u7ec4\u88c5\u673a\u3001\u62c6\u89e3\u673a\u548c\u81ea\u52a8\u5408\u6210\u673a\u7684\u529f\u80fd\u96c6\u6210\u5230\u4e00\u8d77<br/>.\u4f46\u662f,\u76ee\u524d\u53ea\u6709\u7ec4\u88c5\u673a\u6a21\u5f0f\u53ef\u7528.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728ZPM\u9636\u6bb5\u5236\u9020.\u867d\u8bf4\u76f8\u6bd4\u7cbe\u5bc6\u7ec4\u88c5\u673a,\u5b83\u6709\u8bb8\u591a\u7f3a\u70b9<br/>,\u6bd4\u65b9\u8bf4\u89e3\u9501\u65f6\u95f4\u665a\u3001\u5e76\u884c\u4e0d\u9ad8\u3001\u4e0d\u652f\u6301TecTech\u80fd\u6e90\u4ed3;\u4e0d\u8fc7\u6709\u4e00\u70b9\u662f\u5b83\u7684\u4f18\u52bf:\u5b83\u652f\u6301\u53cc\u80fd\u6e90\u4ed3\u5347\u538b,<br/>\u5408\u6210\u4e0b\u4e00\u9636\u6bb5\u7684\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAIBg=="
                },
                {
                    "name": "See You Lather",
                    "symbolSize": 28.799999999999997,
                    "x": -12.0,
                    "y": 156.0,
                    "tooltip": "See You Lather",
                    "data": "Just in time for the huge number of crystal rods y<br/>ou'll need to get your Applied Energistics system <br/>up and running, the Industrial Precision Lathe!\n\nT<br/>he number of recipes that can be processed in para<br/>llel by the IPL depends on the item pipe casing an<br/>d the voltage tier:\nParallel = Item Pipe Casing Pa<br/>rallel + 2 * Voltage Tier, where LV is 1.\n\nAdditio<br/>nally, it gains a speed boost on all recipes accor<br/>ding to this formula:\nSpeed Boost = (Item Pipe Cas<br/>ing Speed Factor + Voltage Tier) / 4\nOr equivalent<br/>ly, the recipe time is multiplied by a factor of 4<br/> / (Item Pipe Casing Factor + Voltage Tier).\n[note<br/>]Note that this can actually make the processing s<br/>peed [warn]slower[/warn] if you use low tier item <br/>pipe casing and voltage.[/note]\n\nThe parallel and <br/>speed factor of the item casing is listed below:\nT<br/>in: 1 Parallel, 0.75 Speed Factor\nBrass: 1 Paralle<br/>l, 0.8 Speed Factor\nElectrum: 2 Parallel, 0.9 Spee<br/>d Factor\nPlatinum: 4 Parallel, 1 Speed Factor\nOsmi<br/>um: 8 Parallel, 1.5 Speed Factor\nQuantium: 12 Para<br/>llel, 2 Speed Factor\nFluxed Electrum: 16 Parallel,<br/> 3 Speed Factor\nBlack Plutonium: 32 Parallel, 4 Sp<br/>eed Factor",
                    "quest_id": "VJN1qfd5SjCkm7CXVd9Pag=="
                },
                {
                    "name": "\u6447\u8d77\u6765...",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u7b5b\u9009\u673a.png",
                    "x": -24.0,
                    "y": 24.0,
                    "tooltip": "\u6447\u8d77\u6765...",
                    "data": "\u4ece\u6d17\u51c0\u7684\u77ff\u77f3\u4e2d\u7b5b\u51fa...\u65e0\u8bba\u5982\u4f55,\u5de5\u4e1a\u7b5b\u9009\u673a\u4f1a\u663e\u8457\u63d0\u9ad8\u7b5b\u9009\u901f\u5ea6.\u4f60\u4f1a\u600e\u4e48\u5904\u7406\u8fd9\u4e9b\u5b9d\u77f3\u5462\uff1f\u5982\u679c\u4f60\u4e0d\u60f3\u7528<br/>\u53cc\u80fd\u6e90\u4ed3\u5347\u538b\u7684\u8bdd,\u5f97\u518d\u505a\u4e00\u4e2a\u673a\u68b0\u65b9\u5757.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFjA=="
                },
                {
                    "name": "\u7194\u5316\u4e07\u7269...",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u7194\u7089.png",
                    "x": 72.0,
                    "y": 48.0,
                    "tooltip": "\u7194\u5316\u4e07\u7269...",
                    "data": "...\u6709\u4e86\u8fd9\u9879\u4f1f\u5927\u7684\u53d1\u660e!\u53ea\u8981\u5347\u7ea7\u4f9b\u7535\u548c\u7ebf\u5708,\u5c31\u53ef\u4ee5\u7194\u70bc\u4e0d\u53ef\u80dc\u6570\u7684\u7269\u54c1.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAAVQ=="
                },
                {
                    "name": "\u7ed5\u4e86\u4e00\u5708\u53c8\u4e00\u5708",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u7ebf\u7f06\u673a.png",
                    "x": 252.0,
                    "y": 216.0,
                    "tooltip": "\u7ed5\u4e86\u4e00\u5708\u53c8\u4e00\u5708",
                    "data": "\u60f3\u8981\u7ed5\u5730\u7403\u51e0\u5708\u7684\u5bfc\u7ebf?\u8bd5\u8bd5\u8fd9\u4e2a\u5427.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH9Q=="
                },
                {
                    "name": "Steam Blender?",
                    "symbolSize": 28.799999999999997,
                    "x": 72.0,
                    "y": -120.0,
                    "tooltip": "Steam Blender?",
                    "data": "Why use fancy wiring and circuitry to blend dusts <br/>together when you can do the same thing with steam<br/> and pistons? The Steam Blender is the largest of <br/>these Steam Multiblocks and can handle your mixing<br/> needs for a while, having more parallel than an L<br/>V singleblock Mixer.\n\n[note]This Multiblock can on<br/>ly process recipes up to LV tier and is unable to <br/>process Fluid recipes.[/note]",
                    "quest_id": "WEwrzX4ZRkSxJ3M6cBesfA=="
                },
                {
                    "name": "STEAM-POWERED BREAKTHROUGH",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u5c0f\u578b\u71c3\u7164\u9505\u7089.png",
                    "x": 24.0,
                    "y": -120.0,
                    "tooltip": "STEAM-POWERED BREAKTHROUGH",
                    "data": "You should have quite the collection of single blo<br/>ck Steam machines by now. While these may have got<br/>ten you through processing small amounts of materi<br/>als, there will be a time when you will have to pr<br/>ocess a multitude of items. This is where Multiblo<br/>cks come in.\n\nWhile these Multiblocks have a mater<br/>ial cost that is way higher than their single bloc<br/>k counterparts, they have certain bonuses: they us<br/>e less Steam, and they can process recipes in para<br/>llel, which means that a single recipe cycle can c<br/>raft multiple items at once, if the Steam provided<br/> is enough to sustain it.\n\nThey do however have so<br/>me quirks that need to be taken care of:\n\n-These M<br/>ultiblocks require very specific I/O blocks, use o<br/>nly those that are part of the quest \n-They proces<br/>s up to 8 items, where the Basic Tier is made of B<br/>ronze and High Pressure Tier is made of Steel (che<br/>ckout the Multiblock Preview in NEI which will sho<br/>w you different levels of tiers)\n-The Tier and amo<br/>unt of parallel processing can be seen via WAILA i<br/>f you are looking at the Controller Block\n\n[note]W<br/>ith this quest, you have started your journey with<br/> Mass Processing. However, don't get too excited q<br/>uite yet. While there are some Multiblocks accessi<br/>ble in the Steam Age, most of them only unlock in <br/>EV or later, including better versions of these Mu<br/>ltiblocks.[/note]",
                    "quest_id": "quLxATDCQFWsrZRuh_gspA=="
                },
                {
                    "name": "Steam stomping!",
                    "symbolSize": 28.799999999999997,
                    "x": 72.0,
                    "y": -156.0,
                    "tooltip": "Steam stomping!",
                    "data": "While the Forge Hammer is quite fast already, why <br/>not build this upscaled version and make it even f<br/>aster? With the Steam Presser, you can unleash the<br/> full force of steam on whatever material you feed<br/> it. Watch blocks break apart and rods get smashed<br/> together faster than ever-at least until you gain<br/> access to more advanced technology.\n\nThe Steam Pr<br/>esser can only process recipes up to LV Tier.",
                    "quest_id": "s6AEHSKiQe2XveT_oDZbZg=="
                },
                {
                    "name": "\u84b8\u6c7d\u9636\u6bb5\u7684\u591a\u65b9\u5757? \u4e0d\u53ef\u80fd!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5927\u578b\u84b8\u6c7d\u7814\u78e8\u673a.png",
                    "x": 72.0,
                    "y": -84.0,
                    "tooltip": "\u84b8\u6c7d\u9636\u6bb5\u7684\u591a\u65b9\u5757? \u4e0d\u53ef\u80fd!",
                    "data": "\u5b83\u662f\u84b8\u6c7d\u7814\u78e8\u673a\u7684\u591a\u65b9\u5757\u7248\u672c.\u4e00\u6b21\u53ea\u80fd\u540c\u65f6\u5904\u74068\u4e2a\u7269\u54c1,\u4e0d\u8fc7\u901f\u5ea6\u66f4\u5feb.\u8bf7\u6ce8\u610f,\u6b64\u591a\u65b9\u5757\u673a\u5668\u8981\u6c42\u975e\u5e38\u7279\u6b8a<br/>\u7684\u8f93\u5165/\u8f93\u51fa\u4ed3\u5ba4,\u522b\u5f04\u9519\u4e86.WIKI \u5927\u578b\u84b8\u6c7d\u7814\u78e8\u673a\uff1agtnh.huijiwiki.com/p/12<br/>8",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAKzA=="
                },
                {
                    "name": "Taking Things Apart",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5341\u516d\u8054\u94dc\u6d41\u4f53\u7ba1\u9053.png",
                    "x": -24.0,
                    "y": 48.0,
                    "tooltip": "Taking Things Apart",
                    "data": "You probably haven't thought about the extractor i<br/>n a while. Is your steam extractor still collectin<br/>g dust somewhere? Well, if you do find yourself ne<br/>eding to extract things quick, (processing industr<br/>ial quantities of flowers, maybe?) pick up the Dis<br/>section Apparatus.\n\n[note]This multi gets addition<br/>al parallels based on tier of item pipe casing, so<br/> use the best one you can get![/note]",
                    "quest_id": "XA467S8MQtCEPy6L23eEEA=="
                },
                {
                    "name": "\u6d17\u77ff\u5382\u91cc\u7684\u77ff\u77f3...",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u6d17\u77ff\u5382.png",
                    "x": 24.0,
                    "y": 276.0,
                    "tooltip": "\u6d17\u77ff\u5382\u91cc\u7684\u77ff\u77f3...",
                    "data": "...\u5468\u800c\u590d\u59cb,24\u5c0f\u65f6\u8fd0\u4f5c. \u4e00\u4e2a\u5927\u578b\u7684\u6d17\u77ff\u5382\u53ef\u4ee5\u5c06\u4f60\u7684\u77ff\u77f3\u53d8\u5f97\u5e72\u51c0\u53c8\u6574\u6d01. \u901a\u8fc7\u87ba\u4e1d\u5200\u53ef\u5207\u6362\u6d17\u77ff<br/>/\u7b80\u6613\u6d17\u77ff\u6a21\u5f0f\u548c\u5316\u5b66\u6d78\u6d17\u6a21\u5f0f.\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAFjg=="
                },
                {
                    "name": "\u5df4\u6bd4\u4f26\u5854",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de8\u578b\u84b8\u998f\u5854.png",
                    "x": -96.0,
                    "y": 84.0,
                    "tooltip": "\u5df4\u6bd4\u4f26\u5854",
                    "data": "\u55ef...\u5982\u679c\u5c0664\u4e2a\u84b8\u998f\u5854\u5408\u4e3a\u4e00\u5ea7\u4f1a\u53d1\u751f\u4ec0\u4e48...?\u4f60\u61c2\u7684...\u4f60\u4f1a\u5f97\u5230\u4e00\u4e2a61\u5c42\u9ad8\u7684\u591a\u65b9\u5757\u7ed3\u6784.\u6b64<br/>\u591a\u65b9\u5757\u673a\u5668\u4e00\u6b21\u6700\u591a\u53ef\u4ee5\u5904\u7406256\u4e2a\u914d\u65b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAJEA=="
                },
                {
                    "name": "Under Pressure",
                    "symbolSize": 28.799999999999997,
                    "x": -36.0,
                    "y": 252.0,
                    "tooltip": "Under Pressure",
                    "data": "Bigger, better, faster. The Large Electric Compres<br/>sor does about what you would expect.",
                    "quest_id": "qDZZLi21TrmdWXwo_KimIw=="
                },
                {
                    "name": "...with the power of science!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5927\u578b\u5143\u7d20\u590d\u5236\u673a.png",
                    "x": 240.0,
                    "y": -96.0,
                    "tooltip": "...with the power of science!",
                    "data": "This multiblock will allow you to use all that UU-<br/>Matter that your Matter Fabricator makes, not that<br/> you don't have anything else to do with it...\n\n[n<br/>ote]This multi is UV.[/note]",
                    "quest_id": "C93aeQ=="
                },
                {
                    "name": "\u4f60\u95fb\u8d77\u6765\u50cf\u6389\u5230\u4e86\u9152\u6876\u91cc!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u84b8\u998f\u5854.png",
                    "x": 72.0,
                    "y": 72.0,
                    "tooltip": "\u4f60\u95fb\u8d77\u6765\u50cf\u6389\u5230\u4e86\u9152\u6876\u91cc!",
                    "data": "\u5728\u4f60\u5904\u7406\u88c2\u89e3\u71c3\u6599\u6216\u70ed\u89e3\u7089\u914d\u65b9\u65f6,\u8fd9\u4e2a\u72e0\u89d2\u8272\u4f1a\u6781\u5927\u5730\u63d0\u9ad8\u526f\u4ea7\u7387.\u5982\u6b64\u4e00\u6765\u4f60\u5c31\u53ef\u4ee5\u66f4\u6709\u6548\u7387\u7684\u5236\u9020\u5de5\u4e1aTN<br/>T\u3001\u5851\u6599\u3001\u805a\u56db\u6c1f\u4e59\u70ef,\u4ee5\u53ca\u5176\u4ed6\u5851\u6599\u4ea7\u54c1.\u4f60\u4e5f\u9700\u8981\u8fd9\u53f0\u673a\u5668\u6765\u5b8c\u6210\u4f60\u7684\u94c2\u7ebf.\u4f60\u9700\u8981\u5728\u8d85\u51c0\u95f4\u4e2d\u5236\u9020EV\u7535\u8def<br/>\u677f,\u7136\u540e\u624d\u80fd\u5236\u505a\u8fd9\u53f0\u673a\u5668.\u81f3\u4e8e\u4ed3\u5ba4,\u4f60\u53ef\u4ee5\u81ea\u7531\u9009\u62e9.\u4e00\u4e2aMV\u80fd\u6e90\u4ed3\u5c31\u53ef\u4ee5\u80dc\u4efb\u5927\u591a\u6570\u6709\u7528\u7684\u914d\u65b9.\u4e24\u4e2aM<br/>V\u80fd\u6e90\u4ed3\u6216\u8005\u4e00\u4e2aHV\u80fd\u6e90\u4ed3\u5c31\u53ef\u4ee5\u8986\u76d6\u9664\u4e86\u6c61\u67d3\u7269\u6216\u4e19\u916e\u5916\u51e0\u4e4e\u6240\u6709\u7684\u914d\u65b9.\u4f60\u8fd8\u9700\u8981\u4e00\u4e2a\u8f93\u5165\u4ed3\u3001\u81f3\u5c11\u4e94\u4e2a\u8f93<br/>\u51fa\u4ed3,\u4ee5\u53ca\u4e00\u4e2a\u8f93\u51fa\u603b\u7ebf\u7528\u4e8e\u6536\u96c6\u90a3\u4e9b\u56fa\u4f53\u4ea7\u51fa.PS\uff1a\u6211\u5728\u6570\u636e\u8868\u683c\u91cc\u5217\u51fa\u4e86\u6240\u6709\u7684\u84b8\u998f\u5854\u914d\u65b9,\u8fd9\u6837\u4f60\u67e5\u770b\u8d77<br/>\u6765\u4f1a\u66f4\u52a0\u65b9\u4fbf. \u73b0\u5728\u4f60\u53ef\u4ee5\u8f7b\u6613\u6bd4\u8f83\u9009\u62e9\u5904\u7406\u77f3\u6cb9\u7684\u8def\u7ebf\u4e86!",
                    "quest_id": "AAAAAAAAAAAAAAAAAAADAA=="
                },
                {
                    "name": "You've Gotta Keep 'Em Separated",
                    "symbolSize": 28.799999999999997,
                    "x": 228.0,
                    "y": 276.0,
                    "tooltip": "You've Gotta Keep 'Em Separated",
                    "data": "When you need to polarize magnets or separate magn<br/>etic materials, look to the MFE! This multiblock r<br/>equires an electromagnet to be inserted into its h<br/>ousing - better magnets, better bonuses. In IV, yo<br/>u'll be stuck with an Iron Electromagnet, though.\n<br/>\n[note]At the final tier of electromagnet, you can<br/> use TecTech multi-amp hatches. Might be good to r<br/>emember when you're processing a certain magnetic <br/>material...[/note]",
                    "quest_id": "bkEol9zuRiiCMwMUopFHhg=="
                },
                {
                    "name": "\u55de...\u55de...\u55de...",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u5de5\u4e1a\u7535\u89e3\u673a.png",
                    "x": 132.0,
                    "y": 252.0,
                    "tooltip": "\u55de...\u55de...\u55de...",
                    "data": "\u9700\u8981\u5927\u91cf\u7684\u6c27\u548c\u6c22,\u6216\u662f\u53ea\u662f\u60f3\u8981\u7535\u89e3\u6750\u6599\u83b7\u5f97\u6210\u5428\u7684\u94dd?\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAH8g=="
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
                    "target": "\u00a76\u00a7lCracking the World"
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
                    "target": "\u5de5\u4e1a\u7126\u7089"
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
                    "target": "\u00a73\u00a7lMultiblock Revolution"
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
                    "source": "\u00a73\u00a7lMultiblock Revolution",
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