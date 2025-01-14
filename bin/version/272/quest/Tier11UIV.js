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
                    "name": "A Better Coolant for Your Superconductors",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/16xUIV\u8d85\u5bfc\u5bfc\u7ebf.png",
                    "x": -180.0,
                    "y": 216.0,
                    "tooltip": "A Better Coolant for Your Superconductors",
                    "data": "The subzero temperatures of SpaceTime make it an i<br/>deal substitute in all of your superconductor craf<br/>ts.\n\nYou won\u2019t need billions of Liquid Helium anym<br/>ore!\n\n[note]The earlier tiers of superconductors a<br/>re also faster to craft with this.[/note]"
                },
                {
                    "name": "\u00a7b\u00a7lAn Even More Mega EBF",
                    "symbolSize": 57.599999999999994,
                    "x": 24.0,
                    "y": -36.0,
                    "tooltip": "\u00a7b\u00a7lAn Even More Mega EBF",
                    "data": "With the project finally completed, and a new mate<br/>rial capable of harnessing the power of a neutron <br/>star, you decide the natural first application of <br/>this immense power could be used for a far superio<br/>r Blast Furnace. With a little tinkering, you deci<br/>de a second may be necessary, since this module co<br/>uld easily be retrofitted into an ordinary Furnace<br/> as well.\n\n[note]The first module of the Godforge,<br/> Helioflare Power Forge can perform EBF recipes an<br/>d Furnace recipes in separate running modes, toggl<br/>eable in the UI. Note that the Furnace mode does N<br/>OT contribute towards the Conversion milestone![/n<br/>ote]\n\n[note]Usage of this module requires the STAR<br/>T upgrade.[/note]"
                },
                {
                    "name": "Another Type of Steel",
                    "symbolSize": 57.599999999999994,
                    "x": -396.0,
                    "y": -36.0,
                    "tooltip": "Another Type of Steel",
                    "data": "Proto-Halkonite Steel is a super stable material, <br/>completely indestructible once formed.\n\nYou first <br/>have to make Proto-Halkonite base, which then you <br/>pour into components made out of infinity.\n\nAfter <br/>getting Creon and Mellion, you can make Proto-Halk<br/>onite materials cheaper."
                },
                {
                    "name": "Assembling on Steroids",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u592a\u7a7a\u7ec4\u88c5\u6a21\u5757MK-II.png",
                    "x": -504.0,
                    "y": -48.0,
                    "tooltip": "Assembling on Steroids",
                    "data": "It has 16 parallels and can utilize advanced super<br/>conductors for improved yields in optical part rec<br/>ipes.\n\n[note]You can't create the Ultimate Battery<br/> in one step yet-that's much further down the line<br/>.[/note]"
                },
                {
                    "name": "\u6df7\u6c8c\u6838\u5fc3",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6df7\u6c8c\u6838\u5fc3.png",
                    "x": -276.0,
                    "y": 216.0,
                    "tooltip": "\u6df7\u6c8c\u6838\u5fc3",
                    "data": "\u5728\u672b\u5730\u6700\u9ed1\u6697\u7684\u89d2\u843d,\u4f60\u627e\u5230\u4e86\u4e00\u6761\u4e0d\u592a\u4e00\u6837\u7684\u9f99.\u539f\u59cb\u7684\u529b\u91cf\u4ee5\u6df7\u6c8c\u7684\u5f62\u5f0f\u6d8c\u51fa,\u597d\u50cf\u5c31\u8981\u6495\u88c2\u73b0\u5b9e\u672c\u8eab!\u4f46\u5373<br/>\u4f7f\u662f\u90a3\u6761\u9f99,\u4e5f\u88ab\u4f60\u6253\u8d25\u4e86.\u5c06\u8fd9\u79cd\u539f\u59cb\u529b\u91cf\u96c6\u4e2d\u5728\u4e00\u4e2a\u6838\u5fc3\u4e2d\u5f53\u7136\u4e0d\u5bb9\u6613,\u4f46\u770b\u8d77\u6765\u4f60\u627e\u5230\u4e86\u65b9\u6cd5."
                },
                {
                    "name": "\u6df7\u6c8c\u80fd\u91cf",
                    "symbolSize": 28.799999999999997,
                    "x": -264.0,
                    "y": 252.0,
                    "tooltip": "\u6df7\u6c8c\u80fd\u91cf",
                    "data": "\u6700\u7ec8,\u65e0\u5c3d\u7684RF! ...\u4f46\u6211\u80fd\u7528\u5b83\u6765\u505a\u4ec0\u4e48?"
                },
                {
                    "name": "\u00a7b\u00a7lCrayon and Melon",
                    "symbolSize": 57.599999999999994,
                    "x": -156.0,
                    "y": -36.0,
                    "tooltip": "\u00a7b\u00a7lCrayon and Melon",
                    "data": "The Godforge will require new materials with the c<br/>orrect properties to stabilize a neutron star. Wit<br/>h your new Transcendent Plasma Mixer and MK5 Fusio<br/>n Reactor, you learn of a new material which may b<br/>e suitable, which you name [note]Creon[/note].\n\nTh<br/>is material is made as a plasma, and must be coole<br/>d alongside an extremely sturdy material. You try <br/>a curious mixture of dusts, which you decide to na<br/>me [note]Mellion[/note].\n\n[note]These materials ma<br/>y also be suitable for components you need many of<br/>, you may realize UIV components seem to handle th<br/>ese two materials quite well...[/note]"
                },
                {
                    "name": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6234\u68ee\u7403\u5730\u9762\u5355\u5143.png",
                    "x": -108.0,
                    "y": 252.0,
                    "tooltip": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143",
                    "data": "\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4,\u6234\u68ee\u7403\u5730\u9762\u5355\u5143\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u5c31\u662f\u4e00\u5927\u5757\u592a\u9633\u80fd\u677f,\u7a0d\u5fae\u6709\u70b9\u4e0d\u540c\u7684\u662f,\u4f60\u9700\u8981\u63d2\u5165\u6234\u68ee\u7403\u6a21\u5757<br/>(\u6570\u91cf\u53d6\u51b3\u4e8e\u4f60\u60f3\u8981\u591a\u9ad8\u7684\u529f\u7387\u8f93\u51fa),\u624d\u80fd\u83b7\u5f97\u80fd\u91cf\u4ea7\u51fa.\u4e0d\u8fc7\u5b83\u5e76\u975e\u4e00\u52b3\u6c38\u9038\uff1a-\u6bcf\u79d2m\u4e2a\u6234\u68ee\u7403\u6a21\u5757\u4e2d\u6709n<br/>\u4e2a\u4f1a\u88ab\u635f\u8017,\u516c\u5f0f\uff1an=X*0.0001*m^1.05,X\u4e3a0~2\u4e4b\u95f4\u7684\u6b63\u6001\u5206\u5e03\u968f\u673a\u6570,\u5747\u503c\u4e3a1.-\u6bcf<br/>\u79d2\u6d88\u80171,000L\u6781\u5bd2\u4e4b\u51db\u51b0.-\u6bcftick\u8981\u6c42\u63d0\u4f9bn\u70b9\u7b97\u529b,\u516c\u5f0f\uff1an=0.1*m^1.075-128<br/>,m\u4e3a\u6234\u68ee\u7403\u6a21\u5757\u6570.\u5982\u4f60\u6240\u89c1,\u76f8\u5f53\u4e8e\u5176\u4e2d\u6709128\u7b97\u529b\u662f\u514d\u8d39\u8d60\u9001\u7684,\u4e0d\u9519\u5427?\u63d0\u793a\uff1a\u5df2\u652f\u6301TecTech<br/>\u7684\u591aA\u52a8\u529b\u4ed3\u548c\u6fc0\u5149\u6e90\u4ed3.\u6ce8\u610f\uff1a\u53f3\u4fa7\u6240\u5217\u7684\u6bcf\u4e2a\u90e8\u5206\u53ea\u662f\u6700\u4f4e\u8981\u6c42,\u57fa\u4e8e\u4f7f\u7528\u7684\u52a8\u529b\u4ed3\u3001\u8f93\u5165\u603b\u7ebf\u3001\u8f93\u5165\u4ed3\u548c\u526f<br/>\u5149\u5b66\u63a5\u53e3\u6570\u91cf,\u4f60\u53ef\u80fd\u9700\u8981\u66f4\u591a\u80fd\u91cf\u63a5\u6536\u57fa\u5ea7\u673a\u68b0\u65b9\u5757\u3001\u6a21\u5757\u90e8\u7f72\u5355\u5143\u57fa\u5ea7\u673a\u68b0\u65b9\u5757\u6216\u63a7\u5236\u4e2d\u5fc3\u57fa\u5ea7\u673a\u68b0\u65b9\u5757.\u6709<br/>\u8da3\u7684\u4e8b\u5b9e\uff1a\u6700\u5927\u8f93\u51fa\u4e3a105,553,116,266,496-EU/t (12\u4e2aUEV-1048576<br/>A/t\u6fc0\u5149\u6e90\u4ed3)"
                },
                {
                    "name": "\u5347\u7ea7\u6c38\u6052\u7ebf\u5708",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u6c38\u6052\u7ebf\u5708\u65b9\u5757.png",
                    "x": -276.0,
                    "y": 108.0,
                    "tooltip": "\u5347\u7ea7\u6c38\u6052\u7ebf\u5708",
                    "data": "\u8d85\u8d8a\u65f6\u7a7a,\u7a81\u7834\u73b0\u5b9e.\u4f60\u5df2\u7aa5\u89c1\u4ece\u672a\u5b58\u5728\u4e8e\u4e16\u95f4\u7684\u4e8b\u7269,\u5c06\u5176\u5316\u4f5c\u6d41\u4f53,\u53c8\u51dd\u4e3a\u56fa\u4f53.\u514b\u670d\u91cd\u91cd\u56f0\u96be\u4e4b\u540e,\u5b83\u7ec8\u4e8e<br/>\u7a33\u5b9a\u4e86\u4e0b\u6765.\u6ce8\u89c6\u7740\u5b83,\u4f60\u89c9\u5f97\u4f60\u51e0\u4e4e\u53ef\u4ee5\u5c06\u6574\u4e2a\u5b87\u5b99\u63e1\u5728\u624b\u4e2d.\u4ece\u524d,\u4f60\u5c06\u6240\u6709\u6750\u6599\u7ed3\u5408\u4e3a\u4e00,\u521b\u9020\u4e86\u6c38\u6052\u5947\u70b9<br/>,\u4e00\u4e2a\u65e0\u9650\u81f4\u5bc6\u7684\u5b87\u5b99\u6837\u672c.\u7136\u800c,\u60f3\u8981\u5c06\u8fd9\u4e00\u8fc7\u7a0b\u5728DTPF\u7684\u91cf\u7ea7\u4e0a\u81ea\u52a8\u5316\u662f\u65e0\u6bd4\u8352\u8c2c\u7684,\u8fd9\u51e0\u4e4e\u4f1a\u4f7f\u4f60\u7684\u8fdb<br/>\u5ea6\u5b8c\u5168\u505c\u6ede,\u597d\u5728\u4f60\u53d1\u73b0\u4e86\u5145\u80fd\u8d85\u7acb\u65b9\u4f53.\u60f3\u8981\u5728\u6839\u672c\u4e0a\u5c55\u73b0\u51fa\u65f6\u7a7a\u672c\u8eab,\u4f60\u9996\u5148\u5f97\u5c55\u73b0\u51fa\u7b2c\u56db\u4e2a\u7a7a\u95f4\u7ef4\u5ea6,\u8fd9\u5c31<br/>\u662f\u8d85\u7acb\u65b9\u4f53\u7684\u542b\u4e49:\u4e00\u4e2a\u56db\u7ef4\u7684\u7acb\u65b9\u4f53.\u7acb\u65b9\u4f53!\u4f60\u5468\u56f4\u7684\u4e00\u5207\u51e0\u4e4e\u90fd\u7531\u7acb\u65b9\u4f53\u7ec4\u6210.\u4ec5\u4ec5\u662f\u5bf9\u56db\u7ef4\u4e16\u754c\u73b0\u5b9e\u7684\u4e00<br/>\u77a5,\u4fbf\u4f7f\u4f60\u6210\u529f\u5730\u5229\u7528\u5b83\u6765\u51dd\u7ed3\u65f6\u7a7a,\u5c06\u5176\u968f\u5fc3\u6240\u6b32\u5730\u5851\u9020\u6210\u4efb\u4f55\u5b8c\u6574\u7684\u6c38\u6052\u9020\u7269--\u4e0d\u5e78\u7684\u662f,\u8fd9\u4e00\u8fc7\u7a0b\u65e0\u6cd5\u9006<br/>\u8f6c.\u65e0\u9700\u591a\u8a00,\u8fde\u751f\u7269\u7535\u8def\u4e5f\u4e0d\u8db3\u4ee5\u7ef4\u6301\u8fd9\u4e00\u6781\u7aef\u81f4\u5bc6\u3001\u65e0\u6bd4\u7a33\u5b9a\u7684\u591a\u7ef4\u6750\u6599.\u8fd9\u662f\u76ee\u524d\u6700\u7ec8\u6781\u7684\u5347\u7ea7,\u63d0\u4f9b13<br/>501K\u7684\u57fa\u7840\u7089\u6e29.\u8ba9\u4f60\u7684\u8d85\u7ef4\u5ea6\u7b49\u79bb\u5b50\u953b\u7089(DTPF)\u5927\u653e\u5f02\u5f69\u5427!"
                },
                {
                    "name": "Fuwusion MK5",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u6838\u805a\u53d8\u53cd\u5e94\u5806\u63a7\u5236\u7535\u8111MK V.png",
                    "x": -228.0,
                    "y": -108.0,
                    "tooltip": "Fuwusion MK5",
                    "data": "After seeing how slow Shirabon is to make, you mig<br/>ht want to upgrade your Fusion setup.\n\nLike its pr<br/>edecessor, the MK4, this version also supports Per<br/>fect Overclocks. Hopefully, this will make your Me<br/>tastable Oganesson issues a bit more manageable.\n\n<br/>[note]You can specify the batch amount in the GUI <br/>if you don\u2019t want it to handle one-tick recipes.[/<br/>note]\n"
                },
                {
                    "name": "Getting More Out of Your Hypogen",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u6d77\u73c0\u73cd\u5355\u5143.png",
                    "x": -480.0,
                    "y": 180.0,
                    "tooltip": "Getting More Out of Your Hypogen",
                    "data": "Once you get your first Hypogen from Fusion, you c<br/>an easily duplicate it in your DTPF.\n\nIt is a loop<br/>, though, so be cautious."
                },
                {
                    "name": "Haha, Spinny Ingot",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8d85\u65f6\u7a7a\u91d1\u5c5e\u952d.png",
                    "x": -480.0,
                    "y": 36.0,
                    "tooltip": "Haha, Spinny Ingot",
                    "data": "Transcendent Metal is the primary metal used in UI<br/>V components.\n\nThis metal is a bit different from <br/>the ones you have been processing so far. You need<br/> to macerate your tesseracts to get the dust and t<br/>hen blast it at such high temperatures that you'll<br/> need a coolant to help manage the heat.\n\nDue to t<br/>he impossible nature of the tesseract particles, y<br/>ou'll need a medium to enable them to form 3D shap<br/>es. Tungsten, for some reason, works very well for<br/> this purpose.\n\nThe ingot itself is also not very <br/>stable; therefore, a coating of titansteel must be<br/> applied during the cooling process.\n\n[note]Consid<br/>er passively generating it. This process is slow.[<br/>/note]"
                },
                {
                    "name": "\u00a7b\u00a7lHelioflux Melting Core my Beloved",
                    "symbolSize": 57.599999999999994,
                    "x": 48.0,
                    "y": 36.0,
                    "tooltip": "\u00a7b\u00a7lHelioflux Melting Core my Beloved",
                    "data": "As usage of the Forge continues, more data on grav<br/>iton shards is gathered. It has been found that th<br/>ey can stabilize the outputs of the Forge, allowin<br/>g for the direct extraction of molten material whi<br/>le it is still close to the heart of the star.\n\n[n<br/>ote]The second module of the Godforge, Helioflux M<br/>elting Core allows processing EBF recipes by direc<br/>tly outputting molten metal when possible. This ma<br/>y not always be as efficient as other methods, but<br/> the time and scaling saved from Vacuum Freezer st<br/>eps often more than makes up for this.[/note]\n\n[no<br/>te]Usage of this module requires the FDIM upgrade.<br/>[/note]\n\n[warn]Helioflux Melting Core <3[/warn]\n"
                },
                {
                    "name": "\u00a7b\u00a7lHeliofusion Exoticizer",
                    "symbolSize": 57.599999999999994,
                    "x": -48.0,
                    "y": 132.0,
                    "tooltip": "\u00a7b\u00a7lHeliofusion Exoticizer",
                    "data": "Using large quantities of graviton shards creates <br/>regions of space so extreme that exotic forms of m<br/>atter can exist with far greater stability than us<br/>ual. Unfortunately, this region is so extreme that<br/> it is essentially spatially disconnected from the<br/> rest of the Forge, unable to utilize existing upg<br/>rades to the structure and its other modules.\n\n[no<br/>te]The fourth and final module of the Godforge, He<br/>liofusion Exoticizer allows for the production of <br/>Quark Gluon Plasma and Magmatter. Initially only Q<br/>uark Gluon Plasma is possible, with Magmatter requ<br/>iring a much later upgrade. Consult the Godforge I<br/>nformation section of the UI to read how to produc<br/>e these materials.[/note]\n\n[note]Usage of this mod<br/>ule requires the QGPIU upgrade.[/note]\n"
                },
                {
                    "name": "\u00a7b\u00a7lHeliothermal Plasma Fabricator",
                    "symbolSize": 57.599999999999994,
                    "x": 24.0,
                    "y": 108.0,
                    "tooltip": "\u00a7b\u00a7lHeliothermal Plasma Fabricator",
                    "data": "As understanding of graviton shards continues to i<br/>mprove, better control over the materials they man<br/>ipulate can be achieved. Graviton shards provide a<br/>n alternative to electromagnetic containment of pl<br/>asma using spacetime manipulation instead, allowin<br/>g the Forge to directly output processed materials<br/> as plasma.\n\n[note]The third module of the Godforg<br/>e, Heliothermal Plasma Fabricator can directly con<br/>vert materials into their plasma form, at the cost<br/> of an immense amount of power. This may not be id<br/>eal for every plasma, but can save a lot of time o<br/>n particularly slow ones. Additionally, later upgr<br/>ades allow the creation of exotic plasmas which ca<br/>nnot be created through other means.[/note]\n\n[note<br/>]Usage of this module requires the GPCI upgrade.[/<br/>note]\n"
                },
                {
                    "name": "\u5347\u7ea7\u6d77\u73c0\u73cd\u7ebf\u5708",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u6d77\u73c0\u73cd\u7ebf\u5708\u65b9\u5757.png",
                    "x": -324.0,
                    "y": 180.0,
                    "tooltip": "\u5347\u7ea7\u6d77\u73c0\u73cd\u7ebf\u5708",
                    "data": "\u7531\u6c38\u751f\u4e4b\u9f99\u7684\u8840\u6db2\u94f8\u9020,\u7ecf\u7531\u805a\u53d8\u4e4b\u529b\u878d\u5408\u800c\u6210\u7684\u8fd9\u79cd\u6750\u6599,\u51cc\u9a7e\u4e8e\u4f60\u6240\u8ba4\u77e5\u7684\u73b0\u5b9e\u4e4b\u4e0a.\u4efb\u4f55\u81ea\u7136\u5143\u7d20,\u6291\u6216\u90a3<br/>\u4e9b\u5143\u7d20\u7684\u7ed3\u5408,\u90fd\u6839\u672c\u65e0\u6cd5\u4e0e\u8fd9\u79cd\u95ea\u8000\u7740\u7684\u6a59\u8272\u6750\u6599\u76f8\u63d0\u5e76\u8bba,\u751a\u81f3\u8fde\u4f60\u4e4b\u524d\u53d6\u5f97\u7684\u89c9\u9192\u9f99\u6bd4\u4e4b\u4e5f\u5224\u82e5\u5929\u6e0a.MK<br/>-IV\u6838\u805a\u53d8\u53cd\u5e94\u5806\u5185\u5230\u5e95\u53d1\u751f\u4e86\u4ec0\u4e48?\u8fd9\u7a76\u7adf\u662f\u4f55\u79cd\u6750\u6599?\u5b83\u7684\u7c89\u672b\u8089\u773c\u53ef\u89c1\u5730\u640f\u52a8\u7740,\u4e0d\u540c\u4f53\u79ef\u7684\u640f\u52a8\u9891\u7387\u4ea6<br/>\u5404\u4e0d\u76f8\u540c.--\u5f53\u4f53\u79ef\u8d8b\u8fd1\u65b9\u5757\u5927\u5c0f\u65f6,\u6d77\u73c0\u73cd\u4fbf\u8fbe\u5230\u4e86\u4e00\u79cd\u5b8c\u5168\u5e73\u8861\u7684\u72b6\u6001,\u663e\u7136,\u4f60\u77e5\u9053\u8be5\u5bf9\u5b83\u505a\u4e9b\u4ec0\u4e48.\u6d77<br/>\u73c0\u73cd\u4e0d\u8d39\u5439\u7070\u4e4b\u529b\u4fbf\u80fd\u5438\u5165\u6216\u653e\u51fa\u80fd\u91cf,\u4f46\u8bd5\u56fe\u4e0d\u501f\u52a9\u4efb\u4f55\u5916\u90e8\u529b\u91cf\u5c06\u5176\u505a\u6210\u7ebf\u5708\u662f\u6781\u4e3a\u611a\u8822\u7684.\u6b64\u65f6\u6e7f\u4ef6\u4e0d\u518d\u9002<br/>\u7528,\u800c\u53ea\u6709\u6700\u5148\u8fdb\u7684\u751f\u7269\u7535\u8def\u677f\u624d\u80fd\u627f\u53d7\u6d77\u73c0\u73cd\u6781\u65e0\u89c4\u5f8b\u53ef\u5faa\u7684\u884c\u4e3a.\u63d0\u4f9b12601K\u7684\u57fa\u7840\u7089\u6e29.\u51e0\u4e4e\u53ef\u4ee5\u80af<br/>\u5b9a\u5730\u8bf4,\u4f60\u4f1a\u5c06\u5176\u7528\u5728\u8d85\u7ef4\u5ea6\u7b49\u79bb\u5b50\u953b\u7089(DTPF)\u4e0a."
                },
                {
                    "name": "Metastable Oganesson",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e9a\u7a33\u6001\u9feb\u952d.png",
                    "x": -276.0,
                    "y": -108.0,
                    "tooltip": "Metastable Oganesson",
                    "data": "You thought you'd be done with Fusion?"
                },
                {
                    "name": "3\u9636\u7eb3\u7c73\u953b\u7089",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8d85\u65f6\u7a7a\u91d1\u5c5e\u7eb3\u7c73\u8702\u7fa4.png",
                    "x": -480.0,
                    "y": 84.0,
                    "tooltip": "3\u9636\u7eb3\u7c73\u953b\u7089",
                    "data": "\u4e2d\u5b50\u7eb3\u7c73\u8702\u7fa4\u79fb\u52a8\u6bd4\u8f83\u7f13\u6162,\u4f46\u62e5\u6709\u590d\u6742\u7684\u8702\u7fa4\u7f51\u7edc.\u5982\u679c\u6709\u4e00\u79cd\u6750\u6599\u53ef\u4ee5\u81ea\u884c\u79fb\u52a8,\u4e00\u5b9a\u80fd\u591f\u4ee5\u6781\u5feb\u7684\u901f\u5ea6,\u5236<br/>\u9020\u66f4\u52a0\u590d\u6742\u7684\u8702\u7fa4...\u611f\u8c22\u529f\u80fd\u9f50\u5168\u7684\u8d85\u7ef4\u5ea6\u7b49\u79bb\u5b50\u953b\u7089(DTPF),\u8ba9\u6211\u4eec\u53ef\u4ee5\u5408\u6210\u8d85\u65f6\u7a7a\u91d1\u5c5e.\u4f7f\u7528\u65b9\u5f0f<br/>\u4e0e\u4e2d\u5b50\u7eb3\u7c73\u8702\u7fa4\u7c7b\u4f3c,\u6240\u4e0d\u540c\u7684\u662f,\u73b0\u5728\u7eb3\u7c73\u953b\u7089\u53ef\u4ee5\u5236\u90203\u9636\u7eb3\u7c73\u8702\u7fa4\u4e86."
                },
                {
                    "name": "\u00a7b\u00a7lNo, it's not a Typo",
                    "symbolSize": 28.799999999999997,
                    "x": -48.0,
                    "y": -36.0,
                    "tooltip": "\u00a7b\u00a7lNo, it's not a Typo",
                    "data": "Stabilizing the neutron star of the Godforge was s<br/>uccessful, but now you need something new to extra<br/>ct the power out of it into something usable. Your<br/> experiments lead you to using the newly discovere<br/>d Mellion with a Transcendent Metal Nanite to crea<br/>te what seems like a crystal seed of some type, wh<br/>ich exhibits perfect thermal conductance.\n\nProcess<br/>ing this seed further into a solution, you realize<br/> you can grow this crystal into a slurry-like solu<br/>tion, which you decide to name [note]Phonon Transf<br/>er Medium[/note]. This incredible material display<br/>s exactly the properties you were looking for, and<br/> decide that now you can move forward with the fir<br/>st module of the Godforge."
                },
                {
                    "name": "3\u9636PCB\u5de5\u5382",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u9632\u8f90\u5c04\u5149\u523b\u6846\u67b6\u65b9\u5757.png",
                    "x": -504.0,
                    "y": 120.0,
                    "tooltip": "3\u9636PCB\u5de5\u5382",
                    "data": "\u4e3a\u4ec0\u4e48\u5728\u6211\u4eec\u53ef\u4ee5\u8fd0\u7528\u7eb3\u7c73\u8702\u7fa4\u7684\u65f6\u5019,\u8fd8\u9700\u8981\u7528\u4e00\u4e2a\u5c0f\u55b7\u5634\u5728\u57fa\u677f\u4e0a\u8fdb\u884c\u5370\u5236?\u597d\u5427,\u94f6\u7eb3\u7c73\u8702\u7fa4\u4e0d\u591f\u575a\u786c,\u56e0<br/>\u6b64\u9700\u8981\u4e00\u79cd\u65b0\u7684\u7eb3\u7c73\u8702\u7fa4...\u4ee5\u53ca\u65b0\u7684\u673a\u68b0\u65b9\u5757.\u542c\u8bf4\u5929\u4f53\u94a8\u662f\u4e00\u79cd\u5f88\u597d\u7684\u6846\u67b6\u6750\u6599,\u800c\u91cf\u5b50\u53ef\u7528\u4f5c\u9694\u677f,\u53ef\u4ee5<br/>\u8ba9\u8fd9\u4e9b\u7eb3\u7c73\u8702\u7fa4\u6c38\u8fdc\u5728\u5185\u90e8\u98de\u884c.\u6574\u4f53\u7ed3\u6784\u9700\u8981\u8fdb\u884c\u8c03\u6574,\u66f4\u5927\u4e00\u70b9,\u66f4\u9ad8\u4e00\u70b9.\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u5de5\u4f5c\u65b9\u5f0f\u4e0e2\u9636<br/>PCB\u5de5\u5382\u76f8\u540c,\u4e0d\u8fc7\u53ef\u4ee5\u4f7f\u7528\u91d1\u7eb3\u7c73\u8702\u7fa4,\u4f7f\u8d44\u6e90\u6d88\u8017\u66f4\u4f4e."
                },
                {
                    "name": "\u4ee5\u592a\u4e4b\u529b",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/UEV\u65e0\u7ebf\u80fd\u6e90\u4ed3.png",
                    "x": -192.0,
                    "y": 252.0,
                    "tooltip": "\u4ee5\u592a\u4e4b\u529b",
                    "data": "\u8fd9\u4e9b\u5168\u65b0\u7684\u4ed3\u5ba4\u8ba9\u4f60\u80fd\u4ece\u4efb\u4f55\u7ef4\u5ea6\u7684\u4efb\u4f55\u4f4d\u7f6e\u65e0\u7ebf\u53d1\u9001\u3001\u5b58\u50a8\u3001\u63a5\u6536\u80fd\u91cf.\u5b83\u4eec\u53ef\u4ee5\u653e\u7f6e\u5728\u4efb\u4f55\u73b0\u6709\u7684\u591a\u65b9\u5757\u7ed3\u6784<br/>\u4e2d,\u548c\u6b63\u5e38\u7684\u80fd\u6e90\u4ed3/\u52a8\u529b\u4ed3\u4f5c\u7528\u76f8\u540c.\u65e0\u7ebf\u52a8\u529b\u4ed3\u4f1a\u6d88\u8017EU,\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u4e00\u4e2a\u4e0e\u73a9\u5bb6\u7ed1\u5b9a\u7684\u5168\u5c40\u65e0\u7ebf\u7f51\u7edc\u4e2d<br/>.\u8fd9\u4e2a\u65e0\u7ebf\u7f51\u7edc\u53ef\u4ee5\u5b58\u50a82^(2^31)EU,\u8fdc\u8fdc\u8d85\u8fc7\u4e86\u751a\u81f3\u662f\u6700\u9ad8\u7b49\u7ea7\u7684\u6fc0\u5149\u4ed3.\u53ea\u8981\u7528/gt glob<br/>al_energy_join \u73a9\u5bb61 \u73a9\u5bb62\u6307\u4ee4,\u5c31\u53ef\u4ee5\u5c06\u5176\u4ed6\u73a9\u5bb6\u52a0\u5165\u4f60\u7684\u65e0\u7ebf\u7f51\u7edc\u4e2d,\u5171\u4eab\u4e00\u4e2a\u7f51\u7edc.<br/>\u8fd9\u4f1a\u4f7f\u73a9\u5bb61\u5728\u4e0e\u5168\u5c40\u7f51\u7edc\u4ea4\u4e92\u65f6\u4f7f\u7528\u73a9\u5bb62\u7684\u80fd\u91cf.\u4f60\u4e0d\u80fd\u5c06\u5bfc\u7ebf/\u7ebf\u7f06\u63a5\u5230\u65e0\u7ebf\u80fd\u6e90\u4ed3/\u52a8\u529b\u4ed3\u4e0a.\u5b83\u4eec\u662f\u4e3a<br/>\u4e86\u5c3d\u91cf\u964d\u4f4e\u6e38\u620f\u5ef6\u8fdf\u800c\u8bbe\u8ba1\u7684,\u8fd9\u610f\u5473\u7740\u4e3a\u4e86\u9632\u6b62\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\u53d1\u751f,EU\u4ea4\u4e92\u7684\u65f6\u95f4\u95f4\u9694\u8f83\u5927.\u8fd9\u6837\u4f60\u5c31\u65e0\u9700\u642d<br/>\u5efa\u5e9e\u5927\u7684\u5bfc\u7ebf\u7f51\u7edc,\u4ece\u800c\u8282\u7701\u4e0b\u4e00\u4e9bTPS\u5ef6\u8fdf.2^(2^31)\u662f\u4e00\u4e2a\u6709646,456,994\u4f4d\u7684\u6570\u5b57-<br/>-\u5982\u679c\u4f60\u7684\u8ba1\u7b97\u5668\u7206\u4e86\u7684\u8bdd."
                },
                {
                    "name": "\u00a7b\u00a7lProject Godforge",
                    "symbolSize": 86.39999999999999,
                    "x": -48.0,
                    "y": 36.0,
                    "tooltip": "\u00a7b\u00a7lProject Godforge",
                    "data": "With your research now complete, you have finally <br/>constructed it - the Forge of the Gods.\n\nThe Forge<br/> of the Gods is an immensely powerful structure co<br/>nstructed around a stabilized neutron star - it is<br/> so advanced that its full capabilities are not ye<br/>t understood. However, through continued use, one <br/>can slowly upgrade and expand the range of abiliti<br/>es of the Forge, and learn the power hidden in the<br/> most extreme parts of the universe: [note]Gravito<br/>n Shards[/note].\n\nThis esoteric material can only <br/>be found where conventional matter and degenerate <br/>neutronium crust matter on the surface of a neutro<br/>n star meet. At this point in space, gravitons are<br/> far more common and irradiate this material mixtu<br/>re to create highly unstable graviton shards, whic<br/>h can be used to internally upgrade the Forge. Whi<br/>le these shards cannot yet exist outside the extre<br/>me conditions of the Forge, with continued researc<br/>h and utilization it may be possible to eventually<br/> isolate and extract them outside the Forge - but <br/>for what purpose?\n\n[note]Click on the logo in the <br/>UI to read more on how to operate the Godforge.[/n<br/>ote]\n"
                },
                {
                    "name": "Pseudostable Black Hole Containment Field",
                    "symbolSize": 57.599999999999994,
                    "x": -156.0,
                    "y": 108.0,
                    "tooltip": "Pseudostable Black Hole Containment Field",
                    "data": "As the materials around you achieve transcendental<br/> properties, you have found that traditional modes<br/> of compression like pistons or gases will not be <br/>enough to compact them as densely as you require.\n<br/>\nThe solution? Using the sheer force of gravity. B<br/>y using extreme amounts of explosive force on your<br/> fourth-dimensionally engineered tesseracts, you c<br/>an tear tiny rifts in the fabric of space, enough <br/>to create a seed which can birth a black hole. If <br/>you can build a machine which can harness it, it w<br/>ill be able to compress even the strongest materia<br/>ls to the most dense states possible.\n\nTaming a bl<br/>ack hole is no easy task - even with all of your p<br/>recautions, it defies your efforts to stabilize it<br/> and attempts to collapse itself constantly. Meani<br/>ngfully extending the lifespan of the black hole w<br/>ill be extremely difficult. By bending spacetime t<br/>hrough carefully aligned glass, you can reverse th<br/>e flow of hawking radiation back into the black ho<br/>le and keep it completely stable - problematically<br/>, however, the amount of spacetime required to mai<br/>ntain this process increases at an exponential rat<br/>e.\n\nAs the black hole decays, it becomes even more<br/> powerful - but be wary, as it will eventually bec<br/>ome unstable and you will no longer be able to rec<br/>over your items from the edge of the event horizon<br/>. To safely close the black hole and restart this <br/>process, you have engineered a collapser out of th<br/>e same fourth-dimensional materials.\n\n[note]The Ps<br/>eudostable Black Hole Containment Field is the mos<br/>t powerful compressor in the game, capable of crea<br/>ting superdense plates out of any material, as wel<br/>l as being able to perform more advanced neutroniu<br/>m compressor recipes that will save incredible amo<br/>unts of resources.[/note]\n\n[note]You must use prog<br/>rammed circuits in the input buses to determine if<br/> the machine will act as a Compressor or Neutroniu<br/>m Compressor![/note]"
                },
                {
                    "name": "Space Modules Galore",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u592a\u7a7a\u7535\u68af\u52a0\u901f\u8f68\u9053MK-III.png",
                    "x": -480.0,
                    "y": -12.0,
                    "tooltip": "Space Modules Galore",
                    "data": "Better modules will require a more advanced Space <br/>Elevator motor to function.\n\nThis upgrade will all<br/>ow you to access 15 modules on your Space Elevator<br/>. If you haven't built the expansion yet, now migh<br/>t be a good time.\n\n[note]You can enable the Space <br/>Elevator expansion in the GUI.[/note]"
                },
                {
                    "name": "\u00a7b\u00a7lStar Fuel and Dark Matter",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u6052\u661f\u71c3\u6599.png",
                    "x": -156.0,
                    "y": 36.0,
                    "tooltip": "\u00a7b\u00a7lStar Fuel and Dark Matter",
                    "data": "In your research on Project Godforge, you determin<br/>e that you need a new type of fuel to create a neu<br/>tron star. Naquadah Fuel possesses some of the pro<br/>perties needed, but isn't enough. Stabilizing this<br/> fuel with Exotic Catalyst, and drastically increa<br/>sing the density of the fuel with other things lea<br/>ds you to something that may just work.\n\nDuring th<br/>is synthesis, you realize that this fuel could be <br/>used to make [note]Dark Matter[/note], something y<br/>ou previously had only seen on the Mehen Belt in t<br/>he Amunra System.\n\n[note]Dark Matter Shards can be<br/> found in the Mehen Belt and mined manually, if yo<br/>u don't want to synthesize it.[/note]"
                },
                {
                    "name": "Thaumometric Essentia Cell",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u9b54\u5bfc\u6e90\u8d28\u5b58\u50a8\u5143\u4ef6.png",
                    "x": 36.0,
                    "y": 228.0,
                    "tooltip": "Thaumometric Essentia Cell",
                    "data": "After meddling with the 4th Dimension, you've fina<br/>lly discovered a way to access its unlimited Essen<br/>tia supply. The Thaumometric Essentia Cell is your<br/> tool for extracting Essentia from this boundless <br/>source\u2014think of it as your unlimited magic credit <br/>card.\n\nUnfortunately, you must filter each type of<br/> Essentia in your Essentia Cell Workbench. If only<br/> your technology were more advanced..."
                },
                {
                    "name": "The Cat is Out of the Box",
                    "symbolSize": 28.799999999999997,
                    "x": 36.0,
                    "y": 180.0,
                    "tooltip": "The Cat is Out of the Box",
                    "data": "After many hours of grind, blood, sweat, tears, an<br/>d a little bit of transcendent metal... \nYou are n<br/>ow finally able to solve mankind's hardest puzzle <br/>ever, clicking boxes randomly.\n\nThe Uncertainty Re<br/>solution, a Dyson user's wet dream, will allow you<br/> to completely skip that annoying puzzle when you <br/>need to set some (probably a lot.) Quantum Compute<br/>rs up."
                },
                {
                    "name": "\u6f06\u9ed1\u4e4b\u95e8!",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6f06\u9ed1\u4e4b\u95e8.png",
                    "x": -456.0,
                    "y": 120.0,
                    "tooltip": "\u6f06\u9ed1\u4e4b\u95e8!",
                    "data": "\u4e3a\u4e86\u4f60\u672c\u8be5\u5f97\u5230\u7684,\u65e0\u5c3d\u7684\u8d22\u5bcc,\u4f60\u9700\u8981\u5148\u5236\u9020\u4e00\u4e2a\u6f06\u9ed1\u4e4b\u95e8\u7c97\u80da,\u7136\u540e\u518d\u7528\u66f4\u591a\u7684\u6750\u6599\u5c06\u5176\u5b8c\u5584. \u6700\u540e\u4f60\u7ec8\u4e8e<br/>\u8fdb\u5165\u4e86\u8fd9\u4e2a\u7ef4\u5ea6,\u5e94\u8be5\u8574\u542b\u4e86\u6240\u6709\u53ef\u4ee5\u60f3\u5230\u7684\u77ff\u77f3...\u592a\u5012\u9709\u4e86,\u90a3\u4e9b\u53ef\u53e3\u7684\u77ff\u77f3\u88ab\u7262\u7262\u5730\u9501\u5728\u5730\u5e54\u4e4b\u4e0b. \u53ea<br/>\u6709\u901a\u8fc7\u865a\u7a7a\u91c7\u77ff\u573a\u624d\u80fd\u5bf9\u5b83\u4eec\u8fdb\u884c\u5f00\u91c7."
                },
                {
                    "name": "The Real Planet Eater",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u592a\u7a7a\u91c7\u77ff\u6a21\u5757MK-III.png",
                    "x": -456.0,
                    "y": -48.0,
                    "tooltip": "The Real Planet Eater",
                    "data": "It has 8 parallels and supports higher tiers of dr<br/>ones.\n\n[note]You can obtain pure platinum group me<br/>tals with this. It would be a nice boost if you ha<br/>ven't made the QFT for it yet.[/note]"
                },
                {
                    "name": "Tier 11 (UIV)",
                    "symbolSize": 86.39999999999999,
                    "symbol": "image://icon/UIV\u673a\u5668\u5916\u58f3.png",
                    "x": -588.0,
                    "y": 36.0,
                    "tooltip": "Tier 11 (UIV)",
                    "data": "Now that you've enjoyed your exotic cookies, let's<br/> keep going, shall we?\n\nWelcome to UIV! One of the<br/> shortest tiers in NH for now. This tier is mainly<br/> about solving your DTPF catalyst problems and get<br/>ting to Eternal Coils.\n\nThere are a few QOL additi<br/>ons introduced, like the Uncertainty Resolver and <br/>the Thaumometric Essentia Cell.\n\nYou also gain acc<br/>ess to the Dyson Swarm, an incredibly powerful pow<br/>er generation option.\n\n[warn]This tier is not full<br/>y complete. Expect changes.[/warn]"
                },
                {
                    "name": "Transcendent Plasma Mixer",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u8d85\u7ef4\u5ea6\u7b49\u79bb\u5b50\u6405\u62cc\u673a.png",
                    "x": -276.0,
                    "y": -36.0,
                    "tooltip": "Transcendent Plasma Mixer",
                    "data": "Definitely consider making one.\n\nThe Transcendent <br/>Plasma Mixer is a powerful asset for all your DTPF<br/> catalyst needs.\n\nThe base processing time is alwa<br/>ys 5 seconds. You can specify the number of parall<br/>els the machine can run in the GUI.\n\nEach parallel<br/> additively increases the power requirement, so yo<br/>u don't lose any efficiency while increasing produ<br/>ction!\n\n[note]Most of your power will go here. Con<br/>sider upgrading your naquadah fuel or creating the<br/> Dyson Swarm.[/note]"
                },
                {
                    "name": "UIV Energy Hatch",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/UIV\u80fd\u6e90\u4ed3.png",
                    "x": -276.0,
                    "y": 36.0,
                    "tooltip": "UIV Energy Hatch",
                    "data": "Woah, another Energy Hatch.\n\nYou should probably c<br/>onsider upgrading your Assembly Lines and Precise <br/>Assemblers first."
                },
                {
                    "name": "UIV Field Generator",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u529b\u573a\u53d1\u751f\u5668(UIV).png",
                    "x": -12.0,
                    "y": 204.0,
                    "tooltip": "UIV Field Generator",
                    "data": "A bit expensive, but worth the QOL items you can c<br/>raft with it."
                },
                {
                    "name": "UIV Superconductors",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/1xUIV\u8d85\u5bfc\u5bfc\u7ebf.png",
                    "x": -396.0,
                    "y": 108.0,
                    "tooltip": "UIV Superconductors",
                    "data": "Didn't expect the Rhugnor, did you?\n\nAs usual, mix<br/> your exotic dusts, blast them, form into wires, a<br/>nd superconduct."
                },
                {
                    "name": "Ultimate Voltages Require Ultimate Lubricant\u2122!",
                    "symbolSize": 57.599999999999994,
                    "x": -324.0,
                    "y": -108.0,
                    "tooltip": "Ultimate Voltages Require Ultimate Lubricant\u2122!",
                    "data": "For your UIV components to work their interdimensi<br/>onal magic, you're going to need some dimensional <br/>border easing lubricant to not cause a universal c<br/>ollapse."
                },
                {
                    "name": "UMV\u7535\u8def\u677f",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/Piko\u7535\u8def.png",
                    "x": -84.0,
                    "y": 204.0,
                    "tooltip": "UMV\u7535\u8def\u677f",
                    "data": "\u8fd9\u662fUMV\u7535\u8def\u677f."
                },
                {
                    "name": "Waterproof Tech",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6837\u677f\u8f93\u5165\u603b\u6210(ME).png",
                    "x": -228.0,
                    "y": 264.0,
                    "tooltip": "Waterproof Tech",
                    "data": "With the ability to bend spacetime at your will, y<br/>ou can prevent fluids and electronics from interac<br/>ting.\n\nFluid containing patterns can be processed.<br/>\n\n[note]Otherwise it works like crafting input bus<br/>.[/note]"
                },
                {
                    "name": "\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4e66\u4e0e\u7b14.png",
                    "x": -60.0,
                    "y": 252.0,
                    "tooltip": "\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?",
                    "data": "\u5982\u82e5\u4f60\u4ed4\u7ec6\u9605\u8bfb\u8fc7\u6234\u68ee\u7403\u5730\u9762\u5355\u5143\u7684tooltip(\u4f60\u4e5f\u5e94\u8be5\u8fd9\u4e48\u505a),\u90a3\u4e48\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230,toolti<br/>p\u4e2d\u63d0\u5230\"\u57fa\u4e8e\u6240\u5728\u7ef4\u5ea6\u7684\u7cfb\u6570\".\u4e8b\u5b9e\u4e0a,\u6234\u68ee\u7403\u6240\u5728\u7684\u7ef4\u5ea6\u4f1a\u6781\u5927\u5f71\u54cd\u5176\u80fd\u91cf\u8f93\u51fa.\u6309\u7cfb\u6570\u4ece\u9ad8\u5230\u4f4e\u6392\u5e8f\uff1a2<br/>31\uff05 - \u5df4\u7eb3\u5fb7C228\uff05 - \u03b1\u534a\u4eba\u9a6cBb198\uff05 - \u7ec7\u5973B194\uff05 - \u91d1\u661f\u7a7a\u95f4\u7ad9176\uff05 <br/>- \u91d1\u661f161\uff05 - \u6c34\u661f 141\uff05 - \u5df4\u7eb3\u5fb7E134\uff05 - \u9cb8\u9c7c\u5ea7T\u661fE126\uff05 - \u5df4\u7eb3\u5fb7F1<br/>12\uff05 - \u7f57\u65af128b\u3001\u7f57\u65af128ba110\uff05 - \u5730\u7403\u7a7a\u95f4\u7ad9100\uff05 - \u4e3b\u4e16\u754c\u3001\u6708\u740389\uff05 -<br/> \u706b\u661f\u7a7a\u95f4\u7ad981\uff05 - \u706b\u661f\u3001\u706b\u536b\u4e00\u3001\u706b\u536b\u4e8c61\uff05 - \u5c0f\u884c\u661f60\uff05 - \u8c37\u795e\u661f48\uff05 - \u6728\u661f\u7a7a\u95f4<br/>\u7ad944\uff05 - \u6728\u536b\u4e8c\u3001\u6728\u536b\u4e00\u3001\u6728\u536b\u4e0936\uff05 - \u571f\u661f\u7a7a\u95f4\u7ad932\uff05 - \u571f\u536b\u4e8c\u3001\u571f\u536b\u516d\u3001\u6728\u536b\u56db25\uff05 <br/>- \u5929\u738b\u661f\u7a7a\u95f4\u7ad923\uff05 - \u5929\u536b\u56db\u3001\u6d77\u536b\u516b\u3001\u5929\u536b\u4e9420\uff05 - \u6d77\u738b\u661f\u7a7a\u95f4\u7ad918\uff05 - \u6d77\u536b\u4e0016\uff05 <br/>- \u51a5\u738b\u661f\u3001\u67ef\u4f0a\u4f2f\u5e2615\uff05 - \u9e1f\u795e\u661f\u3001\u598a\u795e\u661f1\uff05 - \u82b1\u56ed\u3001\u865a\u7a7a\u4e16\u754c\u4ee5\u53ca\u77ff\u754c0\uff05 - \u6240\u6709\u5176\u4ed6\u7ef4\u5ea6"
                },
                {
                    "name": "\u5feb\u5230\u4e86...",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u7535\u52a8\u9a6c\u8fbe(UIV).png",
                    "x": -396.0,
                    "y": 36.0,
                    "tooltip": "\u5feb\u5230\u4e86...",
                    "data": "\u5f88\u8fd1\u4e86."
                },
                {
                    "name": "Your First SpaceTime",
                    "symbolSize": 57.599999999999994,
                    "symbol": "image://icon/\u65f6\u7a7a\u952d.png",
                    "x": -228.0,
                    "y": 180.0,
                    "tooltip": "Your First SpaceTime",
                    "data": "[note]Hurrah, you can finally move on to the UMV t<br/>ier![/note]\n\nThe residue produced from the DTPFs s<br/>eems to have an interesting interaction with reali<br/>ty, as if it bends the universe to its will.\n\nWhat<br/> if you combined it with some infinity and hypogen<br/> to excite it, and an energized tesseract as a way<br/> to fling it back and forth to the 4th Dimension?\n<br/>\nMaybe then you could achieve the unachievable, a <br/>building block of the entire universe.\n\n[note]The <br/>base recipe is horrible, so definitely make the Et<br/>ernal Coils for your DTPF first.\n\nCongrats on maki<br/>ng it this far![/note]"
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
                    "source": "Your First SpaceTime",
                    "target": "A Better Coolant for Your Superconductors"
                },
                {
                    "source": "\u00a7b\u00a7lProject Godforge",
                    "target": "\u00a7b\u00a7lAn Even More Mega EBF"
                },
                {
                    "source": "\u00a7b\u00a7lNo, it's not a Typo",
                    "target": "\u00a7b\u00a7lAn Even More Mega EBF"
                },
                {
                    "source": "\u8d85\u7acb\u65b9\u4f53",
                    "target": "Another Type of Steel"
                },
                {
                    "source": "Ultimate Voltages Require Ultimate Lubricant\u2122!",
                    "target": "Another Type of Steel"
                },
                {
                    "source": "Haha, Spinny Ingot",
                    "target": "Another Type of Steel"
                },
                {
                    "source": "\u5feb\u5230\u4e86...",
                    "target": "Assembling on Steroids"
                },
                {
                    "source": "\u6d77\u73c0\u73cd",
                    "target": "Assembling on Steroids"
                },
                {
                    "source": "Space Modules Galore",
                    "target": "Assembling on Steroids"
                },
                {
                    "source": "Haha, Spinny Ingot",
                    "target": "Assembling on Steroids"
                },
                {
                    "source": "\u89c9\u9192\u6838\u5fc3",
                    "target": "\u6df7\u6c8c\u6838\u5fc3"
                },
                {
                    "source": "UMV\u7535\u8def\u677f",
                    "target": "\u6df7\u6c8c\u6838\u5fc3"
                },
                {
                    "source": "Your First SpaceTime",
                    "target": "\u6df7\u6c8c\u6838\u5fc3"
                },
                {
                    "source": "\u6df7\u6c8c\u6838\u5fc3",
                    "target": "\u6df7\u6c8c\u80fd\u91cf"
                },
                {
                    "source": "Transcendent Plasma Mixer",
                    "target": "\u00a7b\u00a7lCrayon and Melon"
                },
                {
                    "source": "Fuwusion MK5",
                    "target": "\u00a7b\u00a7lCrayon and Melon"
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
                    "source": "\u5347\u7ea7\u6d77\u73c0\u73cd\u7ebf\u5708",
                    "target": "\u5347\u7ea7\u6c38\u6052\u7ebf\u5708"
                },
                {
                    "source": "Your First SpaceTime",
                    "target": "\u5347\u7ea7\u6c38\u6052\u7ebf\u5708"
                },
                {
                    "source": "\u597d\u5427,\u770b\u8d77\u6765...\u95ea\u4eae?",
                    "target": "\u5347\u7ea7\u6c38\u6052\u7ebf\u5708"
                },
                {
                    "source": "UIV Energy Hatch",
                    "target": "\u5347\u7ea7\u6c38\u6052\u7ebf\u5708"
                },
                {
                    "source": "Metastable Oganesson",
                    "target": "Fuwusion MK5"
                },
                {
                    "source": "Tier 11 (UIV)",
                    "target": "Getting More Out of Your Hypogen"
                },
                {
                    "source": "\u8d85\u7acb\u65b9\u4f53",
                    "target": "Haha, Spinny Ingot"
                },
                {
                    "source": "Tier 11 (UIV)",
                    "target": "Haha, Spinny Ingot"
                },
                {
                    "source": "\u00a7b\u00a7lAn Even More Mega EBF",
                    "target": "\u00a7b\u00a7lHelioflux Melting Core my Beloved"
                },
                {
                    "source": "\u00a7b\u00a7lProject Godforge",
                    "target": "\u00a7b\u00a7lHelioflux Melting Core my Beloved"
                },
                {
                    "source": "\u00a7b\u00a7lHeliothermal Plasma Fabricator",
                    "target": "\u00a7b\u00a7lHeliofusion Exoticizer"
                },
                {
                    "source": "\u00a7b\u00a7lProject Godforge",
                    "target": "\u00a7b\u00a7lHeliofusion Exoticizer"
                },
                {
                    "source": "\u00a7b\u00a7lProject Godforge",
                    "target": "\u00a7b\u00a7lHeliothermal Plasma Fabricator"
                },
                {
                    "source": "\u00a7b\u00a7lHelioflux Melting Core my Beloved",
                    "target": "\u00a7b\u00a7lHeliothermal Plasma Fabricator"
                },
                {
                    "source": "\u5347\u7ea7\u65e0\u5c3d\u7ebf\u5708",
                    "target": "\u5347\u7ea7\u6d77\u73c0\u73cd\u7ebf\u5708"
                },
                {
                    "source": "Getting More Out of Your Hypogen",
                    "target": "\u5347\u7ea7\u6d77\u73c0\u73cd\u7ebf\u5708"
                },
                {
                    "source": "\u74f6\u4e2d\u7684\u94f6\u6cb3...?",
                    "target": "Metastable Oganesson"
                },
                {
                    "source": "2\u9636\u7eb3\u7c73\u953b\u7089",
                    "target": "3\u9636\u7eb3\u7c73\u953b\u7089"
                },
                {
                    "source": "Haha, Spinny Ingot",
                    "target": "3\u9636\u7eb3\u7c73\u953b\u7089"
                },
                {
                    "source": "3\u9636\u7eb3\u7c73\u953b\u7089",
                    "target": "\u00a7b\u00a7lNo, it's not a Typo"
                },
                {
                    "source": "\u00a7b\u00a7lCrayon and Melon",
                    "target": "\u00a7b\u00a7lNo, it's not a Typo"
                },
                {
                    "source": "3\u9636\u7eb3\u7c73\u953b\u7089",
                    "target": "3\u9636PCB\u5de5\u5382"
                },
                {
                    "source": "2\u9636PCB\u5de5\u5382",
                    "target": "3\u9636PCB\u5de5\u5382"
                },
                {
                    "source": "Your First SpaceTime",
                    "target": "\u4ee5\u592a\u4e4b\u529b"
                },
                {
                    "source": "Pseudostable Black Hole Containment Field",
                    "target": "\u00a7b\u00a7lProject Godforge"
                },
                {
                    "source": "\u00a7b\u00a7lStar Fuel and Dark Matter",
                    "target": "\u00a7b\u00a7lProject Godforge"
                },
                {
                    "source": "\u00a7b\u00a7lCrayon and Melon",
                    "target": "\u00a7b\u00a7lProject Godforge"
                },
                {
                    "source": "Another Type of Steel",
                    "target": "Pseudostable Black Hole Containment Field"
                },
                {
                    "source": "Your First SpaceTime",
                    "target": "Pseudostable Black Hole Containment Field"
                },
                {
                    "source": "Haha, Spinny Ingot",
                    "target": "Space Modules Galore"
                },
                {
                    "source": "UIV Energy Hatch",
                    "target": "\u00a7b\u00a7lStar Fuel and Dark Matter"
                },
                {
                    "source": "\u4e3a\u6bd4\u6c14\u4f53\u66f4\u6c14\u4f53\u7684--\u6e90\u8d28--\u7f16\u7801",
                    "target": "Thaumometric Essentia Cell"
                },
                {
                    "source": "\u6cd5\u6756\u6838\u5fc3:\u90aa\u672f",
                    "target": "Thaumometric Essentia Cell"
                },
                {
                    "source": "UIV Field Generator",
                    "target": "Thaumometric Essentia Cell"
                },
                {
                    "source": "UIV Field Generator",
                    "target": "The Cat is Out of the Box"
                },
                {
                    "source": "\u5feb\u5230\u4e86...",
                    "target": "\u6f06\u9ed1\u4e4b\u95e8!"
                },
                {
                    "source": "Space Modules Galore",
                    "target": "The Real Planet Eater"
                },
                {
                    "source": "Haha, Spinny Ingot",
                    "target": "The Real Planet Eater"
                },
                {
                    "source": "Dimensional Breach Imminent",
                    "target": "Tier 11 (UIV)"
                },
                {
                    "source": "Another Type of Steel",
                    "target": "Transcendent Plasma Mixer"
                },
                {
                    "source": "UIV Superconductors",
                    "target": "UIV Energy Hatch"
                },
                {
                    "source": "\u5feb\u5230\u4e86...",
                    "target": "UIV Field Generator"
                },
                {
                    "source": "UMV\u7535\u8def\u677f",
                    "target": "UIV Field Generator"
                },
                {
                    "source": "\u5feb\u5230\u4e86...",
                    "target": "UIV Superconductors"
                },
                {
                    "source": "Stabilized Baryonic Matter",
                    "target": "Ultimate Voltages Require Ultimate Lubricant\u2122!"
                },
                {
                    "source": "Metastable Oganesson",
                    "target": "Ultimate Voltages Require Ultimate Lubricant\u2122!"
                },
                {
                    "source": "\u5149\u5b66\u7535\u8def",
                    "target": "UMV\u7535\u8def\u677f"
                },
                {
                    "source": "UIV Energy Hatch",
                    "target": "UMV\u7535\u8def\u677f"
                },
                {
                    "source": "Cribs",
                    "target": "Waterproof Tech"
                },
                {
                    "source": "Your First SpaceTime",
                    "target": "Waterproof Tech"
                },
                {
                    "source": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143",
                    "target": "\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?"
                },
                {
                    "source": "Another Type of Steel",
                    "target": "\u5feb\u5230\u4e86..."
                },
                {
                    "source": "Haha, Spinny Ingot",
                    "target": "\u5feb\u5230\u4e86..."
                },
                {
                    "source": "\u5347\u7ea7\u6d77\u73c0\u73cd\u7ebf\u5708",
                    "target": "Your First SpaceTime"
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