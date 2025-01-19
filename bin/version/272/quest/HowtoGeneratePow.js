
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
                    "name": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(HV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2822.png",
                    "x": 696.0,
                    "y": 156.0,
                    "tooltip": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(HV)",
                    "data": "\u8fd9\u662fHV\u7248\u672c."
                },
                {
                    "name": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(MV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2823.png",
                    "x": 696.0,
                    "y": 120.0,
                    "tooltip": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(MV)",
                    "data": "\u8fd9\u662fMV\u7248\u672c."
                },
                {
                    "name": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(LV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2824.png",
                    "x": 696.0,
                    "y": 84.0,
                    "tooltip": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(LV)",
                    "data": "\u5b83\u4eec\u901a\u8fc7\u5438\u6536\u8282\u70b9\u3001\u9f99\u86cb\u3001\u722c\u884c\u8005\u86cb\u7b49\u7684\u9b54\u6cd5\u80fd\u91cf\u6765\u4ea7\u751f\u7535\u529b."
                },
                {
                    "name": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(EV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2825.png",
                    "x": 696.0,
                    "y": 192.0,
                    "tooltip": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(EV)",
                    "data": "\u8fd9\u662fEV\u7248\u672c."
                },
                {
                    "name": "\u9178\u4e4b\u65c5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2792.png",
                    "x": 624.0,
                    "y": 156.0,
                    "tooltip": "\u9178\u4e4b\u65c5",
                    "data": "\u8fd9\u662fHV\u7248\u672c.\u4e3a\u4ec0\u4e48\u4eba\u7c7b\u771f\u7684\u4f1a\u7528\u5230\u8fd9? \u6bcf\u7ec4\u7ea2\u77f3\u7c89\u5927\u7ea6\u4ef7\u503c580k-EU,\u6240\u4ee5\u770b\u770b\u81ea\u5df1\u7684\u4ed3\u5e93\u518d\u505a\u51b3\u5b9a\u5427."
                },
                {
                    "name": "Advanced Xeninol",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7154632998014096877.png",
                    "x": 444.0,
                    "y": 492.0,
                    "tooltip": "Advanced Xeninol",
                    "data": "It's here that you might yourself with some useful stuff alongside power. Xenon, which has become very useful in the EBF thanks to noble gas changes in its recipes, and Advanced Nitinol? If you don't already have a Quantum Anomaly setup for it, you can use this. Who knows what'll come in the future?\n\nThese recipes are the same 0.144 ratio ones that you've seen before and, since they're just before the final step, they will bottleneck you on the path to compact reactor setups. The one to focus on is Advanced Nitinol, which is the second last recipe, and where you'll need 9.216, or 10 Mk3 reactors to sustain a Celestial Tungsten compact at the end. If you build a compact here, however, you can feed 6 compacts as long as everything that comes before this is fast enough."
                },
                {
                    "name": "\u53ef\u9009\u6838\u71c3\u6599:\u6cf0\u4f2f\u5229\u4e9a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/198.png",
                    "x": 516.0,
                    "y": 300.0,
                    "tooltip": "\u53ef\u9009\u6838\u71c3\u6599:\u6cf0\u4f2f\u5229\u4e9a",
                    "data": "\u5b83\u4eec\u4e0e\u94c0\u7c7b\u4f3c\u4e0d\u8fc7\u53d1\u70ed\u4ec5\u4e3a\u5176\u4e00\u534a.\u76ee\u524d\u8fd8\u6ca1\u6709\u73b0\u6210\u7684\u53cd\u5e94\u5806\u8bbe\u8ba1\u56fe,\u800c\u4e14\u4f60\u9700\u8981T5\u706b\u7bad(LuV),\u624d\u80fd\u5230\u8fbe\u7f57\u65af128ba,\u83b7\u53d6\u6cf0\u4f2f\u5229\u4e9a,\u6211\u89c9\u5f97\u5b8c\u5168\u4e0d\u503c.\u5982\u679c\u4f60\u4e0d\u540c\u610f\u8fd9\u4e00\u70b9,\u8bf7\u4e3a\u5927\u5bb6\u8bbe\u8ba1\u4e00\u4e2a\u6cf0\u4f2f\u5229\u4e9a\u53cd\u5e94\u5806."
                },
                {
                    "name": "AMERICA!!!!!!!!!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5802810217373252190.png",
                    "x": 408.0,
                    "y": 504.0,
                    "tooltip": "AMERICA!!!!!!!!!",
                    "data": "United States of SMASH those particles together to initiate proper controlled fusion reactions that allow us to continue this immense powergen chain. This is Americium Plasma, remember that!\n\nThis is actually the plasma that is probably the best choice for XL Plasma Turbines as a 1-recipe powergen setup. However, compared to Helium and Tin Plasma's previous state, it loses out a lot on speed on a mk3 compact, because it doesn't have the 192x/128x parallels, not to mention its recipe time is already 8x as long as Tin for the same amount of plasma. \n\nIt will also demand huge amount of Pu-241 for a UEV/UIV base to be sustained, but this fusion chain greatly reduces the amount needed, even if both inputs actually need Pu-241.\n\nThis step takes more than half the time of the final step, so it's one of the major bottlenecks: if you upgrade the final step to a compact, you would need 37 mk3 reactors to match speed here."
                },
                {
                    "name": "\u5408\u9002\u7684\u80fd\u6e90",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/190.png",
                    "x": 516.0,
                    "y": 192.0,
                    "tooltip": "\u5408\u9002\u7684\u80fd\u6e90",
                    "data": "\u4e0d\u7ba1\u4f60\u5728\u7528\u9b54\u6cd5\u3001\u84b8\u6c7d\u3001\u77f3\u6cb9\u6216\u8005\u6cbc\u6c14\u5728\u53d1\u7535,\u5230\u4e86\u8fd9\u4e00\u9636\u6bb5\u4f60\u90fd\u4f1a\u78b0\u5230\u95ee\u9898. \u6240\u4ee5\u4f60\u9700\u8981\u5347\u7ea7\u4f60\u7684\u7535\u7f51,\u81f3\u5c11\u5bf9\u9ad8\u7089\u4f9b\u7535\u7cfb\u7edf\u8fdb\u884c\u5347\u7ea7. \u6240\u4ee5\u8ba9\u6211\u4eec\u6765\u4f7f\u7528\u5f3a\u5927\u7684\u80fd\u6e90:\u6838\u80fd!%n%n\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u53cd\u5e94\u5806\u7684\u5de5\u4f5c\u539f\u7406,\u8bf7\u53c2\u8003\u82f1\u7279\u7f51\u4ee5\u53ca https://github.com/MauveCloud/Ic2ExpReactorPlanner/releases \u8fd9\u91cc\u7684\u6838\u7535\u8ba1\u7b97\u5668%n%n\u63d0\u793a: \u8fd9\u4e2a\u6574\u5408\u5305\u6838\u53cd\u5e94\u5806\u7684\u6548\u7387\u4e58\u6570\u4e3a10,\u8fd9\u610f\u5473\u7740GTNH\u724c\u53cd\u5e94\u5806\u7684\u6548\u7387\u8981\u6bd4\u4ee5\u5f80\u7684\u9ad810\u500d!!!\u8bf7\u786e\u4fdd\u5728\u9ad8\u7ea7\u4e2d\u5c06\u8ba1\u7b97\u5668\u8bbe\u7f6e\u4e3aGTNH\u6a21\u5f0f.\u53e6\u5916,\u6240\u6709\u90e8\u4ef6\u60ac\u505c\u663e\u793a\u7684\u90fd\u662f\u57fa\u7840\u6570\u636e(x10\u4e4b\u524d).%n%n\u5728https://gtnh.miraheze.org/wiki/Nuclear_Reactors \u53ef\u4ee5\u83b7\u77e5\u66f4\u591aGTNH\u6838\u53cd\u5e94\u5806\u4fe1\u606f. \u76ee\u524d1920EU/t\u7684\u948d\u5806\u5e94\u8be5\u662f\u6700\u4f73\u9009\u62e9.%n%nWIKI \u6838\u53cd\u5e94\u5806\uff1agtnh.huijiwiki.com/p/977"
                },
                {
                    "name": "Balance is Everything",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6774427117513567879.png",
                    "x": 264.0,
                    "y": 372.0,
                    "tooltip": "Balance is Everything",
                    "data": "You already transcended dimensions, but as your power demands spike to absurd levels, maybe it's time to transcend matter!\n\nUsing the unbreakable stability of Proto-Halkonite, harnessing the power of [warn]Chaos[/warn] becomes a reality. The  Semi-Stable Antimatter Stabilization Sequencer introduces the concept of Semi-Stable Antimatter, created from Protomatter.\n\nBut it\u2019s a cruel mistress... fail to manage it, and antimatter could void itself into nothingness.\n\nThe Semi-Stable Antimatter is produced in 1 second cycles, the amount generated is based on the total of antimatter currently stocked in it's 16 Antimatter Hatches and consumes equal amounts of Proto Matter.\n\nThe average change in Antimatter is equal to (Antimatter Total)^0.5 * N(0.2, 0.25), where N is a Gaussian Distribution, meaning the total antimatter change may be negative.\n\nThe Produced Antimatter is distributed between the 16 hatches, sampled from N(0.2, 1). This causes an imbalance between the hatches. To properly automate the antimatter production, it's vital to always re-balance the amount of antimatter in the hatches. At the end of each cycle, the lowest amount of antimatter present in hatches is recorded, and any hatch that contains more than the lowest amount loses half the difference!\n\nProper use of stabilization fluids can significantly reduce energy usage and boost production:\n\nIt consumes 10,000,000 + (Antimatter * 1000)^1.5 EU/t passively\nMagnetic Stabilization Fluids can mitigate the passive instability and have it's exponent reduced:\nMolten Purified Tengam Exponent = 1.35\nTachyon-Rich Fluid Exponent = 1.2\n\nFor each cycle, the SSASS uses (Antimatter * 10000)^1.5 EU\nBy regulating the gravity containment of the forge, this exponent can also be reduced:\nMolten Spacetime Exponent = 1.45\nSpatially Enlarged Fluid Exponent = 1.40\nMolten Eternity Exponent = 1.35\n\nBy containing the antimatter more compactly, it is possible to generate larger gains per cycle. Containment Stabilization fluids alter the exponent in the production formula:\nMolten Shirabon Exponent = 0,55\nMolthen MHDSCM Exponent = 0,60\n\nBy inserting fluids with high energy potential, it's possible to alter antimatter's flow in chaos, making their randomness more favorable. Activation Stabilization Fluids alter the skew of the gaussian distribution, lowering the risks of negative changes in antimatter and favoring better gains.\nDepleted Naquadah Fuel Mk V skew = 0.25\nDepleted Naquadah Fuel Mk VI skew = 0.30"
                },
                {
                    "name": "\u57fa\u7840\u6838\u71c3\u6599:\u948d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/193.png",
                    "x": 480.0,
                    "y": 228.0,
                    "tooltip": "\u57fa\u7840\u6838\u71c3\u6599:\u948d",
                    "data": "\u948d\u71c3\u6599\u68d2\u662f\u6240\u6709\u71c3\u6599\u68d2\u91cc\u9762\u6700\u5f31\u7684\u4e00\u4e2a.\u4f46\u662f\u4f18\u70b9\u662f\u5f88\u5bb9\u6613\u751f\u4ea7,\u800c\u4e14\u6bd4\u8f83\u597d\u63a7\u5236\u5806\u6e29,\u8fd0\u884c\u65f6\u95f4\u5f88\u957f(\u662f\u94c0\u68d2\u76842\u500d).\u751a\u81f3\u5728\u70e7\u5b8c\u540e\u8fd8\u4f1a\u8fd4\u8fd81/3\u7684\u948d! \u6240\u4ee5\u7528\u948d\u53ef\u4ee5\u505a\u4e00\u4e2a\u5b8c\u7f8e\u7684\"\u4e00\u52b3\u6c38\u9038\"\u7684\u7535\u529b\u4f9b\u5e94\u88c5\u7f6e.%n%n\u8bf7\u6ce8\u610f:\u5f53\u948d\u71c3\u6599\u68d2\u8017\u5c3d\u540e,\u4f60\u53ef\u4ee5\u79bb\u5fc3\u5b83\u83b7\u5f97\u9565,\u800c\u9565\u662f\u805a\u53d8\u83b7\u5f97\u9545\u7684\u539f\u6599.%n\u867d\u7136\u4f60\u53ea\u6709\u5230UV\u9636\u6bb5\u624d\u4f1a\u9700\u8981\u9545,\u4f46\u4f60\u73b0\u5728\u5c31\u53ef\u4ee5\u5f00\u59cb\u56e4\u79ef\u9565\u4e86,\u800c\u4e14\u4f60\u8fd8\u80fd\u83b7\u5f97\u7535\u529b,\u4f55\u4e50\u800c\u4e0d\u4e3a?"
                },
                {
                    "name": "Boronic Fusion",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6752762253121630907.png",
                    "x": 180.0,
                    "y": 480.0,
                    "tooltip": "Boronic Fusion",
                    "data": "This plasma needs Helium Plasma to be crafted. That's right, this entire powergen chain builds on top of Helium Plasma!\n\nThe Boron Plasma step is much slower than the Helium one, so if you match the number of reactors and their tier, you will end up with a large excess of Helium Plasma. As you know, it's very useful for power in Large Plasma Turbines, so you could use this excess to power all the other reactors. As you scale up, however, this alone will probably not be enough.\n\nYou will need 3.75 reactors with this recipe to feed 1 reactor with the next step."
                },
                {
                    "name": "Calcium Bottlenecking",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6653872471765810391.png",
                    "x": 180.0,
                    "y": 504.0,
                    "tooltip": "Calcium Bottlenecking",
                    "data": "Craft yourself some bone-strengthening Calcium in plasma form.\n\nThis step is almost twice as fast as the Boron one, so you only need half the reactors, plus one, or the tier above the reactors on the Boron side. It would normally be a lot slower, but the next step needs only a small amount of Calcium.\n\nKeep in mind that, at the end of each of the three fusion chains, the plasma amount gets multiplied, which means that most of your bottlenecks will be near the end of the entire setup, if you're going for Celestial Tungsten Plasma.\n\nYou will need 2.13 reactors with this recipe to feed 1 reactor with the next step."
                },
                {
                    "name": "Celestial Tungsten Plasma - The Mk3 Finale",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8021583113396239664.png",
                    "x": 492.0,
                    "y": 492.0,
                    "tooltip": "Celestial Tungsten Plasma - The Mk3 Finale",
                    "data": "This is the end of the mk3 fusion chain, and the three chains altogether. After 14 fusion recipes on top of Helium Plasma, you hold in your tanks the elusive Celestial Tungsten Plasma, whose fuel value of 720M makes it immune to XL Plasma penalties all the way to spacetime!\n\nUpscaling plasma powergen up to endgame, and the Dyson Swarm, is most likely reliant on either this or Americium Plasma, which is 1-step but not as powerful on a per-reactor basis. This can net you above 8 billion EU per tick, for every Mk3 compact that you have running Celestial Tungsten at 64 parallels, with Infinity turbines. Upscaling this is not so so difficult, if you keep in mind which recipes will bottleneck you the most, as long as you have the resources for it.\n\nThere are no plasmas that build off Celestial Tungsten Plasma just yet, but it's possible that some might be added in the future, especially for GT++ materials such as Dragonblood. Congratulations on finishing this fusion chain! May the power be with you."
                },
                {
                    "name": "\u538b\u7f29\u592a\u9633\u80fd LV",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1332.png",
                    "x": 84.0,
                    "y": 84.0,
                    "tooltip": "\u538b\u7f29\u592a\u9633\u80fd LV",
                    "data": "\u592a\u9633\u7684\u529b\u91cfx10. \u8fd9\u4e2a\u592a\u9633\u80fd\u7535\u6c60\u677f\u62b5\u5f97\u4e0a10\u5757\u666e\u901a\u592a\u9633\u80fd\u7535\u6c60\u677f,\u4f46\u6210\u672c\u4ec5\u4e3a9.\u8fd9\u600e\u4e48\u53ef\u80fd\uff1f \u9b54\u6cd5!\u6ce8\u610f:\u5b83\u4eec\u8f93\u51faGT-EU.\u4e0d\u9700\u8981\u53d8\u538b\u5668!"
                },
                {
                    "name": "\u6df1\u5730\u70ed\u6cf5",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2766.png",
                    "x": 480.0,
                    "y": 120.0,
                    "tooltip": "\u6df1\u5730\u70ed\u6cf5",
                    "data": "\u8fd9\u53f0\u673a\u5668\u4f7f\u7528\u5730\u70ed\u80fd\u52a0\u70ed\u51b7\u5374\u6db2,\u53ef\u4ee5\u8df3\u8fc7\u6d41\u4f53\u6838\u53cd\u5e94\u5806.%n%n\u8bf7\u67e5\u770bhttps://gtnh.miraheze.org/wiki/Fluid_Reactor \u5e76\u7528\u6df1\u5730\u70ed\u6cf5\u66ff\u6362\u6d41\u4f53\u6838\u53cd\u5e94\u5806.%n%n\u8fd9\u57fa\u672c\u5c31\u662f\u65e0\u9650\u80fd\u6e90,\u4e0d\u8fc7\u7528\u70bc\u72f1\u4e4b\u58f6\u914d\u5408\u6d41\u4f53\u70ed\u4ea4\u6362\u673a\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u76f8\u540c\u529f\u80fd...\u968f\u4fbf\u5566. \u8fd9\u73a9\u610f\u975e\u5e38\u975e\u5e38\u8d35,\u522b\u5fd8\u4e86\u8fd9\u4e00\u70b9!"
                },
                {
                    "name": "\u67f4\u6cb9\u7684\u529b\u91cf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1870.png",
                    "x": 192.0,
                    "y": 120.0,
                    "tooltip": "\u67f4\u6cb9\u7684\u529b\u91cf",
                    "data": "MV\u5185\u71c3\u53d1\u7535\u673a\u71c3\u70e7\u8f7b\u71c3\u6cb9\u7684\u901f\u5ea6\u6bd4\u8d77LV\u7248\u672c\u66f4\u5feb,\u4e0d\u8fc7\u4f60\u53ef\u4ee5\u5c06\u67f4\u6cb9\u81ea\u52a8\u5316,\u5e76\u5c06\u5176\u7528\u4f5c\u66ff\u4ee3\u71c3\u6599,\u56e0\u4e3a\u67f4\u6cb9\u66f4\u52a0\u5f3a\u5927.\u67f4\u6cb9\u53ef\u4ee5\u8bf4\u662f\u73b0\u9636\u6bb5\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5316\u5e76\u4ea7\u51fa\u5927\u91cf\u80fd\u91cf\u7684\u6700\u7b80\u5355\u4e14\u6700\u9ad8\u6548\u7684\u65b9\u5f0f,\u800c\u4e14\u5982\u679c\u4f60\u4e0d\u65ad\u5bf9\u5176\u8fdb\u884c\u5347\u7ea7,\u5b83\u8fd8\u53ef\u4ee5\u6301\u7eed\u4f9b\u7ed9\u4f60\u66f4\u591a\u9636\u6bb5\u7684\u80fd\u6e90\u9700\u6c42.%n%n\u53e6\u5916,\u67f4\u6cb9\u53ef\u7528\u4f5c\u76f4\u5347\u673a\u80cc\u5305\u7684\u71c3\u6599,\u76f4\u5347\u673a\u80cc\u5305\u662f\u5f88\u68d2\u7684\u4e00\u79cd\u55b7\u6c14\u80cc\u5305\u7c7b\u88c5\u5907,\u5b83\u53ef\u4ee5\u8ba9\u4f60\u5728\u57fa\u5730\u5185\u5916\u81ea\u7531\u79fb\u52a8.\u6240\u4ee5\u5982\u679c\u4f60\u6709\u4e9b\u67f4\u6cb9\u7684\u8bdd,\u5f3a\u70c8\u5efa\u8bae\u4f60\u505a\u4e2a\u76f4\u5347\u673a\u80cc\u5305.%n%n\u6b64\u4efb\u52a1\u8fd8\u53ef\u4ee5\u89e3\u9501\"\u6446\u8131\u6b7b\u4ea1,\u6e38\u5386\u56db\u65b9\"\u7ae0\u8282\u4e2d\u7684\u4efb\u52a1."
                },
                {
                    "name": "\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1336.png",
                    "x": 84.0,
                    "y": 120.0,
                    "tooltip": "\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd",
                    "data": "72\u4e2a1EU/t\u7684\u592a\u9633\u80fd\u5408\u8d77\u6765\u5c31\u662f100EU/t\uff1f\u542c\u8d77\u6765\u5f88\u4e0d\u9519.\u505a\u4e00\u4e2a\u5427.\u5b83\u4eec\u4e5f\u53ef\u4ee5\u6ce8\u9b54."
                },
                {
                    "name": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1899.png",
                    "x": 480.0,
                    "y": 264.0,
                    "tooltip": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))",
                    "data": "\u9700\u8981\u66f4\u591a\u80fd\u91cf?\u4f55\u4e0d\u5c06\u71c3\u6599\u68d2\u7ed3\u5408\u8d77\u6765?\u4e8c\u8054\u71c3\u6599\u68d2\u53ef\u4ee5\u4ea7\u751f\u66f4\u591a\u80fd\u91cf(\u5e76\u4e0d\u4e00\u5b9a\u662f\u53cc\u500d,\u8fd9\u56e0\u71c3\u6599\u68d2\u7c7b\u578b\u800c\u5f02)\u4ee5\u53ca\u66f4\u591a\u70ed\u91cf(\u540c\u6837\u975e\u53cc\u500d),\u5374\u53ea\u5360\u7528\u4e00\u4e2a\u683c\u5b50.\u4f60\u9700\u8981\u66f4\u590d\u6742\u7684\u8bbe\u8ba1\u6765\u5904\u7406\u5b83\u4eec,\u4f46\u4f60\u5df2\u7ecf\u51c6\u5907\u597d\u4e86,\u5bf9\u5427?%n%n\u6240\u4ee5\u4f55\u4e0d\u66f4\u8fdb\u4e00\u6b65,\u53cc\u500d\u53cc\u500d\u540e\u53d8\u4e3a\u56db\u500d(4x)?\u56db\u8054\u71c3\u6599\u68d2\u4f1a\u4ea7\u751f\u66f4\u591a\u66f4\u591a\u7684\u80fd\u91cf\u548c\u70ed\u91cf,\u5176\u4ed6\u5de5\u4f5c\u539f\u7406\u57fa\u672c\u76f8\u540c(\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b).%n%n\u53e6\u5916\u660e\u667a\u7684\u505a\u6cd5\u662f1->4\u800c\u4e0d\u662f1->2->4."
                },
                {
                    "name": "\u4f60\u542c\u5230\u5f15\u64ce\u58f0\u4e86\u5417\uff1f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1740.png",
                    "x": 228.0,
                    "y": 228.0,
                    "tooltip": "\u4f60\u542c\u5230\u5f15\u64ce\u58f0\u4e86\u5417\uff1f",
                    "data": "\u4f60\u8001\u5f0f\u4f46\u53ef\u9760\u7684\u5185\u71c3\u53d1\u7535\u673a\u6e10\u6e10\u529b\u4e0d\u4ece\u5fc3,\u66f4\u4e0d\u7528\u8bf4\u6c61\u67d3\u95ee\u9898\u4e86. \u5982\u679c\u4f60\u60f3\u7ee7\u7eed\u4f7f\u7528\u6db2\u4f53\u71c3\u6599,\u4f60\u9700\u8981\u5236\u9020\u4e00\u4e2a\u66f4\u597d\u7684\u5f15\u64ce.%n\u8fd9\u53f0\u591a\u65b9\u5757\u53ef\u4ee5\u9ed8\u8ba4\u4ea7\u751f1A\u7684EV\u7535\u538b,\u5982\u679c\u4f60\u7ed9\u5b83\u63d0\u4f9b\u6c27\u6c14,\u5219\u53ef\u4ee5\u4ea7\u751f3A. \u7136\u800c,\u8fd9\u79cd\u52a8\u529b\u4e0d\u662f\u6beb\u65e0\u4ee3\u4ef7\u7684-\u4f60\u9700\u8981\u4e0d\u65ad\u4e3a\u673a\u5668\u63d0\u4f9b\u5c11\u91cf\u6da6\u6ed1\u5242(\u5982\u679c\u4f60\u60f3\u63d0\u9ad8\u6548\u7387\u548c\u8f93\u51fa,\u5219\u9700\u8981\u6c27\u6c14).%n%n\u4f60\u8fd8\u9700\u89813\u4e2a\u8f93\u5165\u4ed3,1\u4e2a\u6d88\u58f0\u4ed3\u548c\u52a8\u529b\u4ed3.\u8fd9\u4e9b\u4ed3\u5ba4\u7684\u7b49\u7ea7\u53d6\u51b3\u4e8e\u4f60.%n%n\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9\u548c\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9(HOG)\u662f\u8fd9\u6b3e\u5f15\u64ce\u7684\u4f18\u8d28\u71c3\u6599\u6765\u6e90.%n%n\u4f60\u9700\u8981\u4fdd\u6301\u5f15\u64ce\u524d\u65b9\u7684\u533a\u57df\u65e0\u65b9\u5757,\u4ee5\u4fbf\u80fd\u591f\u5438\u5165\u8db3\u591f\u7684\u7a7a\u6c14-\u751a\u81f3\u8fde\u706b\u628a\u90fd\u4e0d\u80fd\u6709."
                },
                {
                    "name": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3039.png",
                    "x": 228.0,
                    "y": 408.0,
                    "tooltip": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143",
                    "data": "\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4,\u6234\u68ee\u7403\u5730\u9762\u5355\u5143\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u5c31\u662f\u4e00\u5927\u5757\u592a\u9633\u80fd\u677f,\u7a0d\u5fae\u6709\u70b9\u4e0d\u540c\u7684\u662f,\u4f60\u9700\u8981\u63d2\u5165\u6234\u68ee\u7403\u6a21\u5757(\u6570\u91cf\u53d6\u51b3\u4e8e\u4f60\u60f3\u8981\u591a\u9ad8\u7684\u529f\u7387\u8f93\u51fa),\u624d\u80fd\u83b7\u5f97\u80fd\u91cf\u4ea7\u51fa.\u4e0d\u8fc7\u5b83\u5e76\u975e\u4e00\u52b3\u6c38\u9038\uff1a%n-\u6bcf\u79d2m\u4e2a\u6234\u68ee\u7403\u6a21\u5757\u4e2d\u6709n\u4e2a\u4f1a\u88ab\u635f\u8017,\u516c\u5f0f\uff1an"
                },
                {
                    "name": "\u7075\u6c14\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1334.png",
                    "x": 552.0,
                    "y": 84.0,
                    "tooltip": "\u7075\u6c14\u6e90\u8d28\u53d1\u7535\u673a",
                    "data": "\u8fd9\u53f0\u53d1\u7535\u673a\u76f8\u5f53\u68d8\u624b.\u5b83\u9700\u8981\u7075\u6c14\u6e90\u8d28,\u8fd9\u5e76\u4e0d\u5e38\u89c1,\u4f46\u5b83\u7684\u8f93\u51fa\u5f88\u68d2."
                },
                {
                    "name": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1333.png",
                    "x": 588.0,
                    "y": 84.0,
                    "tooltip": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "data": "\u538c\u5026\u4e86\u9500\u6bc1\u65e0\u7528\u7684\u80fd\u91cf\u6e90\u8d28\u5417\uff1f \u90a3\u4e48\u8fd9\u5c31\u662f\u89e3\u51b3\u65b9\u6848:\u6d88\u8017\u80fd\u91cf\u6e90\u8d28\u5e76\u8f93\u51faGT-EU!\u4e0d\u9700\u8981\u53d8\u538b\u5668!"
                },
                {
                    "name": "\u706b\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1339.png",
                    "x": 552.0,
                    "y": 48.0,
                    "tooltip": "\u706b\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "data": "\u6240\u4ee5,\u4f60\u6446\u8131\u4e86\u591a\u4f59\u7684\u80fd\u91cf\u6e90\u8d28,\u4e5f\u8bb8\u4f60\u4e5f\u4e0d\u60f3\u8981\u706b\u4e4b\u6e90\u8d28\uff1f \u5236\u9020\u8fd9\u4e2a\u80fd\u591f\u71c3\u70e7\u706b\u4e4b\u8981\u7d20\u4ea7\u751f\u7535\u529b."
                },
                {
                    "name": "\u6728\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1340.png",
                    "x": 588.0,
                    "y": 48.0,
                    "tooltip": "\u6728\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "data": "\u5f53\u4f7f\u7528\u795e\u5947\u7684\u690d\u7269\u6765\u83b7\u5f97\u6e90\u8d28\u65f6,\u4f60\u6700\u7ec8\u4f1a\u5f97\u5230\u51e0\u5341\u4e2a\u88c5\u6ee1\u6728\u4e4b\u6e90\u8d28\u7684\u7f50\u5b50. \u4f46\u4e0d\u7528\u62c5\u5fc3! \u8fd9\u53f0\u53d1\u7535\u673a\u4f7f\u7528\u6728\u4e4b\u6e90\u8d28\u8fd0\u884c!\u771f\u68d2!"
                },
                {
                    "name": "\u8d2a\u5a6a\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1342.png",
                    "x": 624.0,
                    "y": 48.0,
                    "tooltip": "\u8d2a\u5a6a\u6e90\u8d28\u53d1\u7535\u673a",
                    "data": "\u5f53\u4f60\u8017\u5c3d\u80fd\u6e90\u65f6,\u8fd9\u79cd\u9ad8\u5ea6\u626d\u66f2\u7684\u9ad8\u529f\u7387\u6e90\u8d28\u53d1\u7535\u673a\u662f\u6551\u547d\u7a3b\u8349. \u53ea\u9700\u5c06\u4e00\u4e9b\u91d1\u5236\u54c1\u6254\u8fdb\u4f60\u7684\u70bc\u91d1\u7089\u4e2d,\u7136\u540e\u70e7\u6389\u4f60\u5f97\u5230\u7684\u8d2a\u5a6a\u6e90\u8d28."
                },
                {
                    "name": "\u98ce\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1341.png",
                    "x": 624.0,
                    "y": 84.0,
                    "tooltip": "\u98ce\u4e4b\u6e90\u8d28\u53d1\u7535\u673a",
                    "data": "\u7518\u8517\u80fd\u53d1\u7535\u5417\uff1f\u8fd9\u53f0\u53d1\u7535\u673a\u4f7f\u7528\u98ce\u4e4b\u6e90\u8d28\u8fd0\u884c,\u5b83\u53ef\u80fd\u4e0d\u5982\u5b83\u7684\u540c\u7c7b\u5f3a\u5927,\u4f46\u71c3\u6599\u5f88\u4fbf\u5b9c."
                },
                {
                    "name": "\u66f4\u597d\u7684\u67f4\u6cb9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2787.png",
                    "x": 192.0,
                    "y": 156.0,
                    "tooltip": "\u66f4\u597d\u7684\u67f4\u6cb9",
                    "data": "\u5728HV\u9636\u6bb5,\u4f60\u4e0d\u4f46\u89e3\u9501\u4e86\u53e6\u4e00\u79cd\u53d1\u7535\u673a,\u8fd8\u89e3\u9501\u4e86\u9ad8\u5341\u516d\u70f7\u503c\u67f4\u6cb9.\u5728\u4e00\u7cfb\u5217\u53cd\u5e94\u4e4b\u540e,\u4f60\u53ef\u4ee5\u83b7\u5f97\u8fd9\u79cd\u8d85\u9ad8\u80fd\u5185\u71c3\u6d41\u4f53\u71c3\u6599,\u4ef7\u503c\u6bcf\u68761M-EU,\u5e76\u53ef\u4ee5\u5728\u8fd9\u4e9b\u6539\u8fdb\u578b\u53d1\u7535\u673a\u4e2d\u8fd0\u884c\u76f8\u5f53\u4e00\u6bb5\u65f6\u95f4.\u5728\u672c\u9636\u6bb5\u4f60\u540c\u6837\u89e3\u9501\u4e86\u84b8\u998f\u5854,\u6240\u4ee5\u6216\u8bb8\u4f60\u53ef\u4ee5\u83b7\u53d6\u66f4\u591a\u66f4\u591a\u7684\u71c3\u6599\u7528\u4e8e\u8fd9\u4e9b\u53d1\u7535\u673a.%n%n\u5f88\u9057\u61be,\u5728EV\u9636\u6bb5\u89e3\u9501\u7684\u4e0b\u4e00\u4e2a\u71c3\u6599,\u5e76\u4e0d\u662f\u67f4\u6cb9\u4e00\u7cfb.\u5b83\u9700\u8981\u5b8c\u5168\u4e0d\u540c\u7684\u5904\u7406\u7ebf,\u4f60\u5e94\u8be5\u4f1a\u5728\u4e4b\u540e\u89e3\u51b3\u5b83\u5427."
                },
                {
                    "name": "\u66f4\u591a\u538b\u7f29\u6ce8\u9b54",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1337.png",
                    "x": 120.0,
                    "y": 48.0,
                    "tooltip": "\u66f4\u591a\u538b\u7f29\u6ce8\u9b54",
                    "data": "\u4f60\u53ef\u4ee5\u6ce8\u9b54\u538b\u7f29\u592a\u9633\u80fd,\u83b7\u5f97\u67d0\u79cd\u573a\u5408\u4e0b\u66f4\u9ad8\u7684\u53d1\u7535\u91cf."
                },
                {
                    "name": "\u5f15\u7206\u6db2\u4f53\u83b7\u53d6\u80fd\u91cf",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/532.png",
                    "x": 192.0,
                    "y": 84.0,
                    "tooltip": "\u5f15\u7206\u6db2\u4f53\u83b7\u53d6\u80fd\u91cf",
                    "data": "\u5185\u71c3\u53d1\u7535\u673a\u53ef\u4ee5\u71c3\u70e7\u51e0\u79cd\u6d41\u4f53\u4ea7\u751fEU.\u5176\u4e2d\u67d0\u4e9b\u66f4\u53d7\u6b22\u8fce,\u800c\u77f3\u6cb9\u5904\u7406\u7ebf\u4eceLV\u5230EV\u7684\u6bcf\u4e2a\u9636\u6bb5,\u5747\u6709\u4e00\u79cd\u4e0d\u540c\u7684\u6d41\u4f53\u71c3\u6599.%n%n\u9996\u5148,LV\u9636\u6bb5\u4e3a\u8f7b\u71c3\u6cb9.\u76f8\u6bd4\u77f3\u6cb9\u672c\u8eab,\u8f7b\u71c3\u6cb9\u7684\u53d1\u7535\u4ef7\u503c\u8981\u9ad8\u5f97\u591a,\u6240\u4ee5\u4f60\u5e94\u8be5\u5c06\u77f3\u6cb9\u8fdb\u884c\u84b8\u998f\u5e76\u8131\u786b,\u4ee5\u83b7\u5f97\u7eaf\u51c0\u7684\u8f7b\u71c3\u6cb9\u5e76\u5c06\u5176\u7528\u4e8e\u53d1\u7535.\u8fd9\u662f\u76ee\u524d\u57fa\u5730\u7684\u6700\u4f73\u4f9b\u80fd\u65b9\u6848,\u5e76\u4e14\u8f7b\u71c3\u6cb9\u5728\u4e0b\u4e00\u9636\u6bb5\u8fd8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5347\u7ea7. \u7b49\u4f60\u5236\u9020\u4e86\u6cf5\u5e76\u627e\u5230\u4e86\u4e00\u4e9b\u77f3\u6cb9,\u8bf7\u67e5\u770b\"\u77f3\u6cb9\u5de5\u4e1a\"\u4efb\u52a1\u680f\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f.%n%n\u5982\u679c\u4f60\u6b63\u5728\u8ba1\u5212\u7740\u642d\u5efa\u77f3\u6cb9\u5904\u7406\u7ebf,\u76f8\u4fe1\u6211,\u8fd9\u5c06\u662f\u4f60\u6700\u5e38\u7528\u7684\u53d1\u7535\u673a\u7c7b\u578b."
                },
                {
                    "name": "\u6d41\u4f53\u6821\u51c6\u5668",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1893.png",
                    "x": 120.0,
                    "y": 264.0,
                    "tooltip": "\u6d41\u4f53\u6821\u51c6\u5668",
                    "data": "\u6da1\u8f6e\u9700\u8981\u7cbe\u786e\u63a7\u5236\u6d41\u91cf,\u5426\u5219\u5bb9\u6613\u9020\u6210\u7206\u70b8\u6216\u6d6a\u8d39.  \u5c06\u6d41\u4f53\u6821\u51c6\u5668\u8d34\u5728\u8fde\u63a5\u5230\u8f93\u5165\u4ed3\u7684\u7ba1\u9053\u4e0a,\u63a7\u5236\u8fdb\u5165\u6da1\u8f6e\u7684\u6d41\u91cf.\u60f3\u8981\u63d0\u9ad8\u6d41\u91cf,\u5bf9\u51c6\u6d41\u4f53\u6821\u51c6\u5668\u7684\u53f3\u4fa7,\u7136\u540e:%n%n1L-\u7a7a\u624b\u53f3\u952e%n16L-\u624b\u6301\u87ba\u4e1d\u5200\u53f3\u952e%n256L-\u624b\u6301\u87ba\u4e1d\u5200,Shift+\u53f3\u952e%n%n\u60f3\u8981\u964d\u4f4e\u6d41\u91cf,\u5bf9\u51c6\u6d41\u4f53\u6821\u51c6\u5668\u7684\u5de6\u4fa7,\u5176\u4f59\u64cd\u4f5c\u4e00\u81f4.%n%n\u8bf7\u53c2\u8003\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668\u548c\u6da1\u8f6e\u53c2\u6570\u8868\u8bbe\u7f6e\u6d41\u91cf(\u786e\u8ba4\u71c3\u6599\u540e).\u5728GTNH,\u8fd9\u4e9b\u6570\u5b66\u8ba1\u7b97\u5c31\u4ea4\u7ed9\u6211\u4eec\u5427!\u81f3\u5c11\u5728\u8fd9\u4e2a\u4efb\u52a1.%n%n\u6309\u4f4fShift,\u7a7a\u624b\u53f3\u952e\u6821\u51c6\u5668\u53ef\u4ee5\u6253\u5f00GUI,\u8fdb\u884c\u66f4\u7cbe\u786e\u7684\u8bbe\u7f6e."
                },
                {
                    "name": "Force Plasma - The Mk1 Ending",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5166715817697893279.png",
                    "x": 228.0,
                    "y": 492.0,
                    "tooltip": "Force Plasma - The Mk1 Ending",
                    "data": "Once you have the two plasmas from before, fuse them together into a new one, Neon Plasma. If you were to use this directly, you could get Neon! There are other, more useful materials to get later in this process, so keep a lookout for those.\n\nHowever, this is not the final plasma in mk1 recipes. To get it, you need to do the last activation step, which exists in all three chains, and involves adding a non-plasma related material, of the appropriate GT tier, to obtain the powergen plasma. The material you need here is Arcanite, one you probably have used before. This step requires you to preferably automate it with ABS, and have a steady supply of Thorium 232.\n\nIf you look at the last recipe, you'll see it's 144L Neon Plasma input to 1000L Force Plasma output. This multiplying makes it so that step, and all final steps, are the slowest ones. You will need 0.144 Neon Plasma reactors for every Force Plasma reactor, which means that 1 Neon reactor feeds nearly 7 Force reactors (6.9444... reactors, more precisely).\n\nOnce you get Force Plasma, this is the end of the mk1 fusion chain. Force Plasma is a 150M fuel value plasma, which means it has a 53.5% penalty with Infinity Catalyst in XL Plasma Generators. This is better than Helium Plasma with its 86.1% penalty but still not great for power generation. You probably don't need this in ZPM, but it'll be a stepping stone for your future progression."
                },
                {
                    "name": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1894.png",
                    "x": 156.0,
                    "y": 192.0,
                    "tooltip": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e",
                    "data": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e\u76f8\u6bd4\u4e8e\u5355\u65b9\u5757\u71c3\u6c14\u8f6e\u673a,\u62e5\u6709\u66f4\u9ad8\u7684\u71c3\u6599\u6548\u7387,\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5347\u7ea7\u6d88\u58f0\u4ed3\u6765\u964d\u4f4e\u6c61\u67d3.%n%n\u4f60\u8fd8\u9700\u8981\u6d88\u58f0\u4ed3\u3001\u7ef4\u62a4\u4ed3\u3001\u8f93\u5165\u4ed3\u548c\u52a8\u529b\u4ed3\u624d\u80fd\u6784\u5efa\u4e00\u53f0\u5b8c\u6574\u7684\u591a\u65b9\u5757\u673a\u5668.\u522b\u5fd8\u4e86\u6d41\u4f53\u6821\u51c6\u5668,\u7528\u4ee5\u63a7\u5236\u591a\u65b9\u5757\u7684\u8f93\u5165\u6d41\u901f!\u7531\u4e8e\u5927\u578b\u71c3\u6c14\u6da1\u8f6e\u6bcft\u9700\u8981\u7684\u6700\u4f73\u6d41\u91cf\u8fdc\u4f4e\u4e8e\u5927\u578b\u84b8\u6c7d\u6da1\u8f6e\u6240\u9700\u7684\u84b8\u6c7d\u6d41\u91cf,\u6240\u4ee5\u4e0d\u9700\u8981\u592a\u9ad8\u7ea7\u7684\u6d41\u4f53\u6821\u51c6\u5668(\u76ee\u524dLV\u5c31\u591f\u4e86).%n%n\u6bcf\u79cd\u6da1\u8f6e\u6750\u6599\u90fd\u6709\u7279\u5b9a\u7684\u6da1\u8f6e\u6548\u7387(\u6548\u7387\u8d8a\u9ad8,\u76f8\u540c\u91cf\u7684\u71c3\u6599\u83b7\u5f97\u7684EU\u8d8a\u591a),\u800c\u4e14\u53ea\u6709\u71c3\u6599\u7684\u901a\u5165\u901f\u5ea6\u4e0e\u6700\u4f73\u6d41\u91cf\u5339\u914d\u65f6,\u591a\u65b9\u5757\u624d\u80fd\u8fbe\u5230\u6b64\u6da1\u8f6e\u6548\u7387.%n%n\u518d\u6b21\u91cd\u590d,\u5f53\u4f60\u4e3a\u6da1\u8f6e\u63d0\u4f9b\u8d85\u8fc7\u6700\u4f73\u6d41\u901f\u7684\u71c3\u6599\u65f6(\u79f0\u4e4b\u4e3a\u8d85\u8f7d\u72b6\u6001),\u6da1\u8f6e\u7684\u8f93\u51fa\u7535\u538b\u63d0\u9ad8,\u4f46\u71c3\u6599\u6548\u7387\u964d\u4f4e,\u540c\u65f6\u6700\u9ad8\u8f93\u51fa\u7535\u538b\u53d6\u51b3\u4e8e\u6da1\u8f6e\u8f6c\u5b50\u7c7b\u578b\u53ca\u5176\u8d85\u8f7d\u6548\u7387\u7b49\u7ea7.\u5bf9\u4e8e\u71c3\u6c14\u6da1\u8f6e,\u8d85\u8f7d\u6548\u7387\u7b49\u7ea71\uff1a\u6700\u9ad8\u8d85\u8f7d150\uff05,\u8f93\u51fa\u529f\u7387112\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea72\uff1a\u6700\u9ad8\u8d85\u8f7d300\uff05,\u8f93\u51fa\u529f\u7387180\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea73\uff1a\u6700\u9ad8\u8d85\u8f7d450\uff05,\u8f93\u51fa\u529f\u7387252\uff05.\u8d8a\u63a5\u8fd1\u8d85\u8f7d\u6781\u9650,\u635f\u5931\u7684\u71c3\u6599\u6548\u7387\u8d8a\u591a.%n%n\u8981\u5f97\u77e5\u6700\u4f73\u6da1\u8f6e\u6750\u6599\u7684\u4fe1\u606f,\u8bf7\u770bDiscord\u9891\u9053\u4e2d\u7684\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668\u4ee5\u53ca\u6570\u636e\u8868\u683c.%n%n\u4ee5\u540e\u7248\u672c\u4e2d,\u5927\u578b\u71c3\u6c14\u6da1\u8f6e\u7684\u8f93\u51fa\u529f\u7387\u5c06\u88ab\u9650\u5236\u57288192EU/t.\u8981\u5f97\u5230\u66f4\u9ad8\u7684\u8f93\u51fa,\u9700\u8981\u4f7f\u7528\u8fdb\u9636\u71c3\u6c14\u6da1\u8f6e,\u5b83\u53ea\u80fd\u63a5\u53d7100kEU\u4ee5\u4e0a\u70ed\u503c\u7684\u71c3\u6599.%n%n\u8bd1\u8005\u6ce8:\u4e5f\u53ef\u4ee5\u770b\u770b\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60MK-II(\u8f93\u51fa1A-LuV\u4ee5\u4e0a)\u6216\u8005\u7279\u5927\u71c3\u6c14\u6da1\u8f6e(\u8f93\u51fa\u65e0\u9650\u5236).%n%n%n%n"
                },
                {
                    "name": "\u5730\u70ed\u5f15\u64ce(EV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2798.png",
                    "x": 588.0,
                    "y": 228.0,
                    "tooltip": "\u5730\u70ed\u5f15\u64ce(EV)",
                    "data": "\u4ee5\u76f8\u5f53\u4f4e\u6548\u7684\u8f6c\u5316\u7387,\u5c06\u5ca9\u6d46\u8f6c\u5316\u4e3a\u80fd\u91cf.\u53e6\u5916,\u4f3c\u4e4e\u4ea7\u751f\u7684\u6c61\u67d3\u6bd4\u5b83\u8bf4\u7684\u8981\u591a...\u800c\u4e14\u76f8\u6bd4\u4e8e\u5b83\u7684\u8f93\u51fa\u7535\u538b,\u5236\u9020\u5b83\u7684\u6750\u6599\u8fd8\u8981\u9ad82\u4e2a\u7535\u538b\u7b49\u7ea7.\u4ee5\u4e0a.%n%n\u5730\u70ed\u80fd\u4e0d\u662f\u5e94\u8be5\u5bf9\u73af\u5883\u53cb\u597d\u5417?"
                },
                {
                    "name": "\u5730\u70ed\u5f15\u64ce(IV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2799.png",
                    "x": 588.0,
                    "y": 264.0,
                    "tooltip": "\u5730\u70ed\u5f15\u64ce(IV)",
                    "data": "\u8fd9\u662fIV\u7248\u672c.\u51e0\u4e4e\u53ef\u4ee5\u80af\u5b9a,\u4ea7\u751f\u7684\u6c61\u67d3\u6bd4\u5b83\u8bf4\u7684\u8981\u591a..."
                },
                {
                    "name": "\u5730\u70ed\u5f15\u64ce(LuV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2800.png",
                    "x": 588.0,
                    "y": 300.0,
                    "tooltip": "\u5730\u70ed\u5f15\u64ce(LuV)",
                    "data": "\u8fd9\u662fLuV\u7248\u672c.\u5c31\u7b97\u914d\u5408\u70bc\u72f1\u4e4b\u58f6\u4e00\u8d77\u4f7f\u7528,\u4f46\u771f\u7684\u6709\u7528\u5417?"
                },
                {
                    "name": "\u4e0d\u542b\u81f4\u5e7b\u5242",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2793.png",
                    "x": 624.0,
                    "y": 192.0,
                    "tooltip": "\u4e0d\u542b\u81f4\u5e7b\u5242",
                    "data": "\u8fd9\u662fEV\u7248\u672c.\u6211\u5e0c\u671b\u4f60\u6ca1\u6709\u5c06\u5176\u5f53\u505a\u4e3b\u529b\u53d1\u7535\u673a...\u4e0d\u8fc7\u81f3\u5c11,\u8fd9\u73a9\u610f\u7684\u6548\u7387\u5f88\u68d2,EV\u9636\u6bb5\u80fd\u670988\uff05,\u800c\u4e14\u628a\u4e0d\u8981\u7684\u6d41\u4f53\u7528\u4f5c\u71c3\u6599\u603b\u597d\u8fc7\u76f4\u63a5\u9500\u6bc1\u5b83\u4eec."
                },
                {
                    "name": "Harnessing Chaos",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6186301913252184525.png",
                    "x": 264.0,
                    "y": 444.0,
                    "tooltip": "Harnessing Chaos",
                    "data": "You\u2019ve mastered antimatter production, but raw antimatter alone won't run your machines. To turn that potential into unparalleled power, it\u2019s time to [warn]harness the chaos[/warn] itself!\n\n[quest]Introducing the Shielded Lagrangian Annihilation Matrix![/quest]\n\nThe SLAM creates raw energy by reacting the Semi-Stable Antimatter with normal matter in a controlled environment.\n\nEvery cycle, the generator will react all antimatter and matter in hatches instantly, converting it all into energy directly. The EU output is based on the equal amounts of antimatter and matter annihilated. Therefore, imbalance between the amounts will waste your precious energy.\n\nDepending on the matter used to annihilate, the antimatter amount gets an exponent applied to it, directly increasing the amount of energy produced from 1L of antimatter - this means the more you annihilate in one go, the more efficient it is!\n\nThe maximum EU for a cycle is limited by the capacity of all laser source hatches on the structure (limited to 64), even on wireless mode.\n\n[note]It can't output more than 9.22e18 EU in a cycle, or just below 43 16M UXV Laser Sources (If you're crazy enough for it)\n[/note]\n\nThe Formula and the exponents for each of the possible matters are:\n\nGenerated EU = (Antimatter^exponent) * 1.000.000.000\n\nMolten Copper - 1.00\nMolten UIV SC Base - 1.02\nMolten UMV SC Base - 1.03\nMolten Black Dwarf Matter - 1.04"
                },
                {
                    "name": "\u4e3a\u4e86\u4f9b\u5e94\u5b83,\u4f60\u780d\u4f10\u4e86\u591a\u5c11\u68ee\u6797?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2786.png",
                    "x": 156.0,
                    "y": 156.0,
                    "tooltip": "\u4e3a\u4e86\u4f9b\u5e94\u5b83,\u4f60\u780d\u4f10\u4e86\u591a\u5c11\u68ee\u6797?",
                    "data": "\u8fd9\u662fHV\u7248\u672c,\u6548\u7387\u5df2\u7ecf\u4f4e\u81f385\uff05.\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u84b8\u998f\u5854\u4e2d\u751f\u4ea7\u66f4\u591a\u7684\u82ef,\u6765\u5f25\u8865\u8fd9\u4e00\u70b9,\u987a\u4fbf\u8fd8\u53ef\u4ee5\u4ea7\u51fa\u66f4\u591a\u82ef\u915a\u548c\u7532\u82ef;\u6216\u8005\u6362\u7528\u77f3\u8111\u6cb9...\u76ee\u524d,\u4f60\u6709\u5f88\u591a\u9009\u62e9,\u5b8c\u5168\u8db3\u4ee5\u5e94\u4ed8\u4f60\u7684\u81ea\u52a8\u5316\u4f53\u7cfb\u4e0d\u65ad\u589e\u957f\u7684\u80fd\u6e90\u9700\u6c42.%n%n\u82ef\u5728HV\u9636\u6bb5\u65e0\u6cd5\u8fdb\u884c\u5347\u7ea7,\u8fd8\u5f97\u7b49\u5230EV\u9636\u6bb5.\u5c4a\u65f6,\u4f60\u5c31\u80fd\u5236\u9020\u785d\u57fa\u82ef\u4e86,\u7136\u540e\u5c06\u5176\u7f6e\u4e8e\u66f4\u5927\u7684\u6da1\u8f6e\u4e2d\u71c3\u70e7."
                },
                {
                    "name": "\u9ad8\u538b\u84b8\u6c7d\u8f6e\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1403.png",
                    "x": 120.0,
                    "y": 156.0,
                    "tooltip": "\u9ad8\u538b\u84b8\u6c7d\u8f6e\u673a",
                    "data": "\u5728HV\u9636\u6bb5,\u4f7f\u7528\u84b8\u6c7d\u4f5c\u4e3a\u4f60\u7684\u552f\u4e00\u80fd\u6e90\u662f\u975e\u5e38\u56f0\u96be\u7684.\u4f60\u7684\u71c3\u6599\u81ea\u52a8\u5316\u9700\u8981\u975e\u5e38\u5feb,\u4f60\u7684\u7ba1\u9053\u9700\u8981\u975e\u5e38\u5de8\u5927,\u6700\u540eHV\u84b8\u6c7d\u8f6e\u673a\u7684\u6548\u7387\u4e5f\u4ec5\u670966\uff05,\u8fdc\u4f4e\u4e8e\u5176\u4ed6\u7c7b\u578b\u53d1\u7535\u673a\u768485\uff05.%n%n\u8fd9\u53f0\u53d1\u7535\u673a\u7684\u6700\u4f73\u7528\u6cd5\u662f\u914d\u5408\u4e00\u53f0\u9ad8\u6548\u7684\u9505\u7089(\u7c7b\u4f3cGT++\u7684\u8fdb\u9636\u9505\u7089),\u4e3a\u519c\u573a\u4e4b\u7c7b\u7684\u7279\u5b9a\u65b9\u5757\u4f9b\u7535. \u5982\u679c\u60f3\u4ec5\u9760\u8fd9\u79cd\u53d1\u7535\u673a\u4e3a\u4f60\u7684\u6574\u4e2a\u57fa\u5730\u4ee5\u53ca\u81ea\u52a8\u5316\u4f53\u7cfb\u4f9b\u80fd,\u5e76\u5411EV\u53d1\u8d77\u51b2\u51fb\u7684\u8bdd,\u90a3\u5c06\u662f\u4e00\u573a\u5669\u68a6.\u5982\u679c\u4f60\u60f3\u8981\u63d0\u9ad8\u84b8\u6c7d\u7684\u6548\u7387,\u8003\u8651\u4fee\u5efa\u5927\u578b\u84b8\u6c7d\u6da1\u8f6e\u5427."
                },
                {
                    "name": "\u6c22\u6c14\u3001\u7532\u70f7\u6216\u8005\u4e00\u4e9b\u5c41(\u5929\u7136\u6c14)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/533.png",
                    "x": 156.0,
                    "y": 84.0,
                    "tooltip": "\u6c22\u6c14\u3001\u7532\u70f7\u6216\u8005\u4e00\u4e9b\u5c41(\u5929\u7136\u6c14)",
                    "data": "\u5728\u65e5\u5e38\u751f\u4ea7\u4e2d\u4f60\u53ef\u80fd\u4f1a\u5269\u4e0b\u4e00\u4e9b\u6c22\u6c14\u6216\u8005\u7532\u70f7. \u6bd4\u5982\u8bf4\u5728\u79bb\u5fc3\u673a\u4e2d\u79bb\u5fc3\u68d5\u8910\u94c1\u6216\u8005\u9ec4\u8910\u94c1\u53ef\u4ee5\u5f97\u5230\u6c22\u6c14,\u628a\u4f60\u5403\u5269\u4e0b\u7684\u98df\u7269\u6254\u8fdb\u79bb\u5fc3\u673a\u53ef\u4ee5\u83b7\u5f97\u7532\u70f7.\u79bb\u5fc3\u6a61\u80f6\u6811\u539f\u6728\u53ef\u4ee5\u83b7\u5f9760mB\u7684\u7532\u70f7,\u8fd8\u6709\u8bb8\u591a\u5176\u4ed6\u4f5c\u7269\u4e5f\u53ef\u4ee5\u7528\u8fd9\u79cd\u65b9\u5f0f\u4ea7\u51fa\u7532\u70f7.%n%n\u4f7f\u7528\u8fd9\u4e9b\u53d1\u7535\u673a\u7684\u4e3b\u8981\u53d1\u7535\u4ea7\u7ebf\u662f\u82ef,\u4f46\u90a3\u9700\u8981MV\u7ea7\u673a\u5668.%n%n\u5982\u679c\u4f60\u6b63\u5728\u8ba1\u5212\u7740\u642d\u5efa\u53ef\u518d\u751f\u80fd\u6e90\u7ebf,\u76f8\u4fe1\u6211,\u8fd9\u5c06\u662f\u4f60\u6700\u5e38\u7528\u7684\u53d1\u7535\u673a\u7c7b\u578b."
                },
                {
                    "name": "I'll teach you... how to Praise the Sun!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6008922449644892285.png",
                    "x": 336.0,
                    "y": 336.0,
                    "tooltip": "I'll teach you... how to Praise the Sun!",
                    "data": "TL;DR: The casing amount in this quest is for the best Solar Tower, which generates around 2 LuV amps and is a major Stainless Steel, Titanium and HV circuit sink, amongst other things.\n\nHave you ever laid eyes upon a solar panel? You might have built a few of them here. What do they all have in common, I ask you... they generate either Steam or EU directly from sunlight, and that is not efficient. There's something that everybody forgot!\n\nSingleblock solar panels are best to insert anywhere that has sun, and provide constant power to a machine. However, EU storage and transport are easy here, so why not build something better? Instead of generating energy directly, send those warm beams of sunlight into a central structure with circles of Solar Reflectors, and bask in the eternal power of the biggest fusion reactor in the Solar System!\n\n(If you end up making a bigger one, don't come arguing to me about this. Be quiet.)\n\nThe whole idea is that the energy of the Sun's rays is directed towards a fluid that can retain the energy, a Solar Salt that does it far better than water. The Solar Tower transfers heat to all the fluid inside it, but watch out! If there's too much cold Solar Salt inside, it will drain away all the heat and slow down the entire process.\n\nIn more detail, the Solar Tower has a heat value that ranges from 0 to 100000, and it only heats up Solar Salt at 30000 or above. The amount of heat gained per cycle depends on the number of Reflectors, but also the current heat value: this process is optimal at exactly half the maximum, so 50000 heat. To get a perfect tower setup, you have to slowly feed cold Solar Salt to maintain this heat value, taking away just enough heat to keep it there. I'll let you figure out what the flow rate is, given that it depends on how many Reflectors you have.\n\nFrom there, generate Steam or SH Steam by heat-exchanging in the same way as Hot Coolant does it. If you want this setup to truly be optimal, do place it in your personal dimension for permanent daylight."
                },
                {
                    "name": "\u4e0d\u5b8c\u5168\u71c3\u70e7",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2967.png",
                    "x": 228.0,
                    "y": 300.0,
                    "tooltip": "\u4e0d\u5b8c\u5168\u71c3\u70e7",
                    "data": "LuV\u9636\u6bb5\u7684\u5316\u5b66\u71c3\u6599\u53d1\u7535\u673a?\u597d\u5427,\u5982\u679c\u4f60\u662f\u67f4\u6cb9\u795e\u6559\u6216\u5927\u82ef\u73af\u795e\u6559\u7684\u72c2\u70ed\u4fe1\u5f92,\u90a3\u4f60\u4e00\u5b9a\u4f1a\u559c\u6b22\u4e0a\u5b83\u7684.%n%n%n%n\u8fd9\u53f0\u5f15\u64ce\u53ef\u4ee5\u63a5\u53d7\u6240\u6709\u7684\u67f4\u6cb9\u71c3\u6599\u3001\u6c14\u4f53\u71c3\u6599\u4ee5\u53ca\u706b\u7bad\u71c3\u6599(\u4e0d\u8fc7\u540e\u9762\u7528\u5927\u578b\u706b\u7bad\u5f15\u64ce\u6548\u7387\u66f4\u9ad8).\u5b83\u8fd8\u9700\u8981\u52a9\u71c3\u5242\u624d\u80fd\u4fdd\u6301\u6b63\u5e38\u8fd0\u884c.%n%n\u8fd9\u53f0\u5f15\u64ce\u6bcf\u79d2\u4f1a\u6d88\u8017\u8f93\u5165\u4ed3\u4e2d\u6240\u6709\u7684\u71c3\u6599\u4e0e\u52a9\u71c3\u5242,\u5e76\u57fa\u4e8e\u603b\u71c3\u503c\u8f93\u51fa\u80fd\u91cf.%n%n\u800c\u6548\u7387\u53d6\u51b3\u4e8e\u52a9\u71c3\u5242/\u71c3\u6599\u6bd4.\u8fd9\u4e2a\u6bd4\u503c\u8d8a\u5927(\u52a9\u71c3\u5242\u8d8a\u591a),\u6548\u7387\u8d8a\u9ad8,\u6700\u9ad8\u4e3a150\uff05,\u4f46\u60f3\u8981\u8fbe\u5230\u8fd9\u4e2a\u6781\u9650\u6548\u7387\u9700\u8981\u8f93\u5165\u8fd1\u4e4e\u65e0\u9650\u7684\u52a9\u71c3\u5242.\u5bf9\u4e8e\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9\u8fd9\u7c7b\u9ad8\u71c3\u503c\u71c3\u6599,\u9664\u975e\u4e0d\u8ba1\u6210\u672c\u5730\u6295\u5165\u52a9\u71c3\u5242,\u6b63\u5e38\u7684\u6548\u7387\u671f\u671b\u7ea6\u4e3a130\uff05.%n%n\u4e3e\u4e2a\u4f8b\u5b50:\u4f60\u6bcf\u79d2\u8f93\u5165100mB\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9\u4ee5\u53ca1000mB\u52a9\u71c3\u5242.\u6548\u7387\u4e3a149\uff05,\u800c\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9\u7684\u603b\u71c3\u503c\u4e3a250,000-EU. \u6240\u4ee5\u8f93\u51fa\u80fd\u91cf\u4e3a250,000*1.49/20"
                },
                {
                    "name": "\u53cd\u5e94\u5806\u6269\u5bb9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/195.png",
                    "x": 516.0,
                    "y": 156.0,
                    "tooltip": "\u53cd\u5e94\u5806\u6269\u5bb9",
                    "data": "\u60f3\u8981\u91ca\u653e\u53cd\u5e94\u5806\u5168\u90e8\u7684\u6f5c\u529b,\u4f60\u5c31\u9700\u8981\u7ed9\u4f60\u7684\u53cd\u5e94\u5806\u52a0\u88c56\u4e2a\u53cd\u5e94\u4ed3."
                },
                {
                    "name": "\u65e0\u5c3d\u6da1\u8f6e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3192.png",
                    "x": 156.0,
                    "y": 444.0,
                    "tooltip": "\u65e0\u5c3d\u6da1\u8f6e",
                    "data": "\u67d0\u4e9b\u6da1\u8f6e\u6750\u6599\u5bf9\u4f60\u8fd8\u4e0d\u592a\u9002\u7528,\u8981\u4e48\u662f\u56e0\u4e3a\u4f60\u8fd8\u6ca1\u6709\u8fd9\u79cd\u6750\u6599,\u8981\u4e48\u662f\u56e0\u4e3a\u6da1\u8f6e\u52a8\u529b\u4ed3\u4e0d\u591f\u5904\u7406\u7b49\u79bb\u5b50\u4f53\u7684\u8f93\u51fa\u529f\u7387.\u5728UHV\u9636\u6bb5\u60c5\u51b5\u4f1a\u6709\u6240\u4e0d\u540c,\u5c4a\u65f6\u4f60\u53ef\u4ee5\u518d\u6b21\u5c06\u6bcf\u53f0\u6da1\u8f6e\u7684\u6700\u5927\u8f93\u51fax4,\u5e76\u4e14\u8fd8\u80fd\u89e3\u9501\u65e0\u5c3d\u952d,\u4f5c\u4e3a\u6da1\u8f6e\u8f6c\u5b50\u7684\u4e00\u79cd\u53ef\u9009\u6750\u6599.%n%n\u5927\u578b\u65e0\u5c3d\u6da1\u8f6e,\u6548\u7387270\uff05,\u8f93\u51fa\u529f\u73874,354,560-EU/t%n\u5927\u578b\u65e0\u5c3d\u50ac\u5316\u5242\u6da1\u8f6e,\u6548\u7387200\uff05,\u8f93\u51fa\u529f\u7387806,400-EU/t%n%n\u662f\u7684,\u57fa\u672c\u4e0a\u5c31\u662f\u8fd9\u6837.\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u524d\u6da1\u8f6e\u4efb\u52a1\u4e2d\u63d0\u5230\u7684\u4efb\u4f55\u6750\u6599,\u4e0d\u8fc7\u5f53\u4f60\u9020\u51fa8\u9636\u706b\u7bad\u5e76\u53ef\u4ee5\u5f00\u91c7\u65e0\u5c3d\u50ac\u5316\u5242\u540e,\u5c31\u591a\u4e86\u8fd9\u4e24\u4e2a\u9009\u62e9. \u663e\u7136,\u65e0\u5c3d\u7684\u6027\u80fd\u8981\u597d\u5f97\u591a,\u4f46\u8fd9\u79cd\u6750\u6599\u4e5f\u8d35\u5f97\u591a. \u5982\u679c\u4f60\u575a\u6301\u805a\u53d8\u53d1\u7535\u7684\u8bdd,\u4f60\u5c31\u9700\u8981\u4e0d\u5c11\u8fd9\u6837\u7684\u6da1\u8f6e,\u5e2e\u52a9\u4f60\u6b65\u5165\u6e38\u620f\u7ec8\u7ae0.\u8bf7\u8bb0\u4f4f,\u4f60\u53ef\u4ee5\u8f93\u5165\u8d85\u51fa\u6700\u4f73\u6d41\u91cf\u7684\u7b49\u79bb\u5b50\u4f53,\u4ee5\u635f\u5931\u71c3\u6599\u6548\u7387\u4e3a\u4ee3\u4ef7,\u4f7f\u5f97\u6bcf\u53f0\u6da1\u8f6e\u53ef\u4ee5\u8f93\u51fa\u66f4\u9ad8\u529f\u7387.%n%n\u5236\u9020\u4e00\u4e2aUHV\u52a8\u529b\u4ed3(\u666e\u901a\u6216\u7f13\u51b2\u7684)\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1."
                },
                {
                    "name": "\u6ce8\u9b54\u592a\u9633\u80fd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1335.png",
                    "x": 84.0,
                    "y": 48.0,
                    "tooltip": "\u6ce8\u9b54\u592a\u9633\u80fd",
                    "data": "\u538b\u7f29\u592a\u9633\u80fd\u53ef\u901a\u8fc7\u6ce8\u9b54\u63d0\u9ad8\u53d1\u7535\u91cf.\u67e5\u770b\u5b83\u4eec\u7684tooltip,\u9009\u62e9\u4e00\u79cd\u5427."
                },
                {
                    "name": "\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2828.png",
                    "x": 120.0,
                    "y": 228.0,
                    "tooltip": "\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d",
                    "data": "\u6240\u4ee5\u8fd9\u610f\u5473\u7740\u5b83\u4f1a\u4ea7\u751f\u4e24\u500d\u7684\u80fd\u91cf!\u4f60\u53ef\u4ee5\u901a\u8fc7\u5927\u578b\u70ed\u4ea4\u6362\u673a\u3001\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60MKII\u6216\u949b/\u94a8\u94a2\u9505\u7089\u83b7\u5f97\u8fc7\u70ed\u84b8\u6c7d.\u901a\u8fc7\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e\u540e,\u8fc7\u70ed\u84b8\u6c7d\u4f1a1:1\u5730\u8f6c\u5316\u4e3a\u666e\u901a\u84b8\u6c7d,\u6240\u4ee5\u6700\u597d\u518d\u52a0\u4e00\u53f0\u666e\u901a\u84b8\u6c7d\u6da1\u8f6e\u4ee5\u8fbe\u5230\u6700\u5927\u5229\u7528\u7387.\u52a0\u8d77\u6765\u5c31\u662f,\u4e00\u53f0\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e\u914d\u5408\u4e00\u53f0\u666e\u901a\u84b8\u6c7d\u6da1\u8f6e,\u8fc7\u70ed\u84b8\u6c7d\u5f97\u5230\u4e86\u666e\u901a\u84b8\u6c7d3x\u7684\u80fd\u91cf\u8f93\u51fa."
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(EV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2803.png",
                    "x": 372.0,
                    "y": 192.0,
                    "tooltip": "\u52a8\u80fd\u53d1\u7535\u673a(EV)",
                    "data": "\u8fd9\u662fEV\u7248\u672c,\u5176\u5de5\u4f5c\u539f\u7406\u76f8\u540c."
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1137.png",
                    "x": 372.0,
                    "y": 156.0,
                    "tooltip": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "data": "\u52a8\u80fd\u53d1\u7535\u673a\u53ef\u4ee5\u5c06\u673a\u68b0\u80fd\u8f6c\u5316\u6210\u7535\u80fd.\u4ea7\u751f\u7684\u7535\u529b\u53d6\u51b3\u4e8e\u52a8\u80fd\u8f93\u5165. \u52a8\u80fd\u53d1\u7535\u673a\u901a\u5e38\u548c\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u3001\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e00\u8d77\u4f7f\u7528.\u800c\u84b8\u6c7d\u52a8\u80fd\u53d1\u751f\u673a\u53ea\u6709\u4e00\u4e2a\u7b49\u7ea7,\u6240\u4ee5\u5982\u679c\u5bf9\u84b8\u6c7d\u611f\u5174\u8da3\u7684\u8bdd,\u53ef\u4ee5\u8003\u8651\u8003\u8651\u84b8\u6c7d\u6da1\u8f6e.%n%n\u5f53\u653e\u7f6e\u52a8\u80fd\u53d1\u7535\u673a\u65f6,\u4efb\u4f55\u65f6\u5019,\u8f93\u5165\u7aef\u90fd\u662f\u9762\u5411\u4f60\u7684.\u6240\u4ee5\u4f60\u603b\u662f\u5148\u653e\u7f6e\u52a8\u80fd\u53d1\u7535\u673a,\u7136\u540e\u518d\u662f\u98ce\u529b/\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a,\u7136\u540e\u518d\u5c06\u8f6c\u5b50\u653e\u5165.\u80fd\u91cf\u53ef\u4ee5\u4ece\u52a8\u80fd\u53d1\u7535\u673a\u7684\u4efb\u610f\u9762\u8f93\u51fa,\u800c\u6bcf\u4e00\u9762\u7684\u6700\u9ad8\u8f93\u51fa\u5373\u52a8\u80fd\u53d1\u7535\u673a\u7684\u7535\u538b\u7b49\u7ea7.%n%n\u8b66\u544a:\u4e0d\u6b63\u786e\u5730\u7834\u574f\u52a8\u80fd\u53d1\u7535\u673a\u5c06\u65e0\u6cd5\u6389\u843d\u53d1\u7535\u673a.\u4f60\u9700\u8981\u4f7f\u7528GT\u6273\u624b,\u53f3\u952e\u5b83.\u5b83\u5c31\u4f1a\u7acb\u523b\u6389\u843d.\u8981\u662f\u5b83\u8f6c\u4e86\u4e2a\u65b9\u5411,\u90a3\u5c31\u518d\u8bd5\u4e00\u6b21."
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(IV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2804.png",
                    "x": 372.0,
                    "y": 228.0,
                    "tooltip": "\u52a8\u80fd\u53d1\u7535\u673a(IV)",
                    "data": "\u8fd9\u662fIV\u7248\u672c."
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(LuV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2805.png",
                    "x": 372.0,
                    "y": 264.0,
                    "tooltip": "\u52a8\u80fd\u53d1\u7535\u673a(LuV)",
                    "data": "\u8fd9\u662fLuV\u7248\u672c."
                },
                {
                    "name": "\u52a8\u80fd\u53d1\u7535\u673a(ZPM)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2806.png",
                    "x": 372.0,
                    "y": 300.0,
                    "tooltip": "\u52a8\u80fd\u53d1\u7535\u673a(ZPM)",
                    "data": "\u8fd9\u662fZPM\u7248\u672c."
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1139.png",
                    "x": 408.0,
                    "y": 156.0,
                    "tooltip": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "data": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u9700\u8981\u901a\u8fc7\u6c34\u5728\u6cb3\u6d41\u6216\u8005\u6d77\u6d0b\u4e2d\u7684\u6d41\u52a8\u6765\u4ea7\u751f\u52a8\u80fd. \u548c\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e00\u6837,\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e5f\u9700\u8981\u4f7f\u7528\u6728\u3001\u94c1\u3001\u94a2\u3001\u78b3\u5236\u8f6c\u5b50\u6216\u8005\u4f7f\u7528GT++\u7684\u6750\u6599.%n%n\u5982\u679c\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u7684\u8f6c\u5b50\u4e0d\u662f\u5b8c\u5168\u6d78\u6ca1\u5728\u6c34\u4e2d,\u5219\u673a\u5668\u4f1a\u63d0\u9192\u4f60\"\u8f6c\u5b50\u6ca1\u6709\u8db3\u591f\u7684\u7a7a\u95f4\".\u5982\u679c\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u4e0d\u662f\u653e\u7f6e\u5728\u6cb3\u6d41\u3001\u6d77\u6d0b\u6216\u6df1\u6d77\u751f\u7269\u7fa4\u7cfb,\u90a3\u4e48\u673a\u5668\u4f1a\u63d0\u9192\u4f60\"\u5fc5\u987b\u653e\u7f6e\u5728\u6cb3\u6d41\u548c\u6d77\u6d0b\u751f\u7269\u7fa4\u7cfb\".\u67e5\u770bDiscord\u4e0a\u7684\u6e38\u620f\u673a\u5236\u8868\u683c,\u4f60\u80fd\u627e\u5230\u751f\u7269\u7fa4\u7cfb\u53ca\u5176\u6807\u7b7e\u7684\u5217\u8868.%n%n\u867d\u7136\u4e0d\u592a\u65b9\u4fbf,\u4f46\u6c34\u529b\u53d1\u7535\u673a\u8fd0\u884c\u66f4\u52a0\u7a33\u5b9a.%n%n\u4f60\u53ef\u4ee5\u901a\u8fc7\u5deb\u672f\u6765\u8f6c\u6362\u751f\u7269\u7fa4\u7cfb."
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2809.png",
                    "x": 408.0,
                    "y": 228.0,
                    "tooltip": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "data": "\u8fd9\u662fIV\u7248\u672c."
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2811.png",
                    "x": 408.0,
                    "y": 264.0,
                    "tooltip": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "data": "\u8fd9\u662fLuV\u7248\u672c."
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2807.png",
                    "x": 408.0,
                    "y": 192.0,
                    "tooltip": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "data": "\u8fd9\u662fEV\u7248\u672c,\u5176\u5de5\u4f5c\u539f\u7406\u76f8\u540c."
                },
                {
                    "name": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2813.png",
                    "x": 408.0,
                    "y": 300.0,
                    "tooltip": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)",
                    "data": "\u8fd9\u662fZPM\u7248\u672c."
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1138.png",
                    "x": 444.0,
                    "y": 156.0,
                    "tooltip": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "data": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u6839\u636e\u4e0d\u540c\u7684\u98ce\u529b,\u7535\u529b\u8f93\u51fa\u4e5f\u4f1a\u968f\u4e4b\u53d8\u5316,\u867d\u7136\u67d0\u4e9b\u56e0\u7d20\u53ef\u4ee5\u6539\u53d8\u8fd9\u4e00\u70b9.%n%n\u548c\u98ce\u8f66\u4e0d\u540c,\u4e3a\u4e86\u4fdd\u8bc1\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u7684\u6b63\u5e38\u8fd0\u8f6c,\u4f60\u9700\u8981\u7ecf\u5e38\u7ef4\u62a4\u8f6c\u5b50.%n\u4e00\u65e6\u8f6c\u5b50\u653e\u7f6e\u5728GUI\u4e2d,\u4f60\u9700\u8981\u786e\u5b9a\u98ce\u673a\u7684\u7ed3\u6784\u62e5\u6709\u8db3\u591f\u7684\u7a7a\u95f4,\u5e76\u4e14\u5f53\u524d\u4f4d\u7f6e\u7684\u98ce\u529b\u6c34\u5e73\u8db3\u591f\u542f\u52a8\u5f53\u524d\u7684\u8f6c\u5b50.\u5982\u679c\u8fd9\u4e9b\u6761\u4ef6\u90fd\u6ee1\u8db3,\u90a3\u4e48\u98ce\u673a\u5c31\u4f1a\u5f00\u59cb\u4ea7\u751f\u52a8\u80fd.%n%n\u5c06\u52a8\u80fd\u53d1\u7535\u673a\u8d34\u5230\u98ce\u673a\u6b63\u786e\u7684\u9762(\u9ed1\u8272\u5706\u5708),\u52a8\u80fd\u53d1\u7535\u673a\u5c31\u4f1a\u5f00\u59cb\u5c06\u52a8\u80fd\u8f6c\u5316\u6210\u7535\u80fd.%n%n\u5173\u4e8e\u98ce:%n\u9996\u5148,\u67d0\u4e00\u4e2a\u5730\u533a\u7684\u98ce\u529b\u5f3a\u5ea6\u53d7\u52303\u4e2a\u56e0\u7d20\u7684\u5f71\u54cd:\u9ad8\u5ea6\u3001\u5929\u6c14\u548c\u968f\u673a\u6027.Y\u8f74\u8d8a\u9ad8,\u98ce\u529b\u5c31\u8d8a\u5f3a.\u5982\u679cY\u8f74\u4f4e\u4e8e64,\u90a3\u4e48\u4f60\u5c06\u6ca1\u6709\u8db3\u591f\u7684\u98ce\u80fd\u53ef\u4ee5\u5229\u7528,\u98ce\u673a\u4e5f\u4e0d\u4f1a\u542f\u52a8.\u5929\u6c14\u4e5f\u4f1a\u4e0d\u540c\u7a0b\u5ea6\u7684\u589e\u5f3a\u98ce\u529b\uff1b\u96e8\u5929\u5c06\u4f1a\u5c06\u4f1a\u6bd4\u6b63\u5e38\u63d0\u9ad820\uff05\u7684\u98ce\u529b,\u96f7\u96e8\u5929\u5c06\u4f1a\u63d0\u9ad8\u523050\uff05.\u6700\u540e\u968f\u673a\u6027\u5c06\u4f1a\u4f7f\u98ce\u529b\u5f3a\u5ea6\u8fdb\u884c\u4e0d\u89c4\u5f8b\u7684\u968f\u673a\u53d8\u5316,\u4f46\u662f\u8fd9\u4e2a\u968f\u673a\u53d8\u5316\u5c06\u4f1a\u9650\u5236\u5728\u4e00\u4e2a\u6bd4\u8f83\u6709\u9650\u7684\u8303\u56f4\u5185.%n%n\u68c0\u67e5\u4e00\u4e2a\u4f4d\u7f6e\u7684\u98ce\u529b\u6c34\u5e73\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5c31\u662f\u7528\u98ce\u529b\u8ba1.%nY\u8f74\u5728160\u7684\u9ad8\u5ea6\u6700\u5f3a,\u800c\u5efa\u9020\u7684\u6700\u9ad8\u9650\u5236Y"
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2808.png",
                    "x": 444.0,
                    "y": 192.0,
                    "tooltip": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "data": "\u8fd9\u662fEV\u7248\u672c,\u5176\u5de5\u4f5c\u539f\u7406\u76f8\u540c."
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2810.png",
                    "x": 444.0,
                    "y": 228.0,
                    "tooltip": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "data": "\u8fd9\u662fIV\u7248\u672c."
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2812.png",
                    "x": 444.0,
                    "y": 264.0,
                    "tooltip": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)",
                    "data": "\u8fd9\u662fLuV\u7248\u672c."
                },
                {
                    "name": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2814.png",
                    "x": 444.0,
                    "y": 300.0,
                    "tooltip": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(ZPM)",
                    "data": "\u8fd9\u662fZPM\u7248\u672c."
                },
                {
                    "name": "\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\"",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1905.png",
                    "x": 516.0,
                    "y": 120.0,
                    "tooltip": "\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\"",
                    "data": "\u5927\u578b\u70ed\u4ea4\u6362\u673a\u662f\u4e00\u79cd\u4ea7\u80fd\u591a\u65b9\u5757\u673a\u5668,\u53ef\u4ee5\u63a5\u53d7\u975e\u76f4\u63a5\u7684\u71c3\u6599,\u8f93\u51fa\u7684\u4e5f\u4e0d\u662fEU.\u90a3\u662f\u5b83\u662f\u7528\u6765\u505a\u4ec0\u4e48\u7684\u5462? \u70e7\u5f00\u6c34!%n%n\u5b9e\u9645\u4e0a,\u5b83\u662f\u4e00\u79cd\u84b8\u6c7d\u9505\u7089,\u4f7f\u7528\u67d0\u4e9b\u6d41\u4f53\u66ff\u4ee3\u4e86\u56fa\u4f53\u71c3\u6599,\u4e0d\u8fc7\u673a\u5236\u66f4\u52a0\u590d\u6742.\u5b83\u7684\u4e24\u79cd\u4e3b\u8981\"\u71c3\u6599\"\u662f\u5ca9\u6d46\u548c\u70ed\u51b7\u5374\u6db2,\u800c\u540e\u8005\u66f4\u5f3a,\u4f46\u83b7\u53d6\u4e5f\u66f4\u56f0\u96be. \u901a\u8fc7\u70bc\u72f1\u4e4b\u58f6\u6216\u65e0\u6570\u5176\u4ed6\u9009\u62e9\u90fd\u53ef\u4ee5\u8f7b\u6613\u5b9e\u73b0\u5ca9\u6d46\u81ea\u52a8\u5316,\u800c\u70ed\u51b7\u5374\u6db2\u901a\u5e38\u9700\u8981\u5408\u9002\u7684\u4ea7\u80fd\u88c5\u7f6e.%n%n\u4f7f\u7528\u5ca9\u6d46\u65f6,\u5927\u578b\u70ed\u4ea4\u6362\u673a\u6bcf1mB\u5ca9\u6d46\u8f93\u51fa160mB\u84b8\u6c7d,\u8f93\u5165\u5ca9\u6d46\u901f\u5ea6\u6700\u9ad8\u4e3a1000mB/s(\u4e5f\u5c31\u662f100\uff05\u6da1\u8f6e\u6548\u7387\u4e0b4000-EU/t).\u800c\u4f7f\u7528\u51b7\u5374\u6db2\u65f6,\u5927\u578b\u70ed\u4ea4\u6362\u673a\u6bcf1mB\u70ed\u51b7\u5374\u6db2\u8f93\u51fa400mB\u84b8\u6c7d,\u8f93\u5165\u70ed\u51b7\u5374\u6db2\u901f\u5ea6\u6700\u9ad8\u4e3a800mB/s(\u4e5f\u5c31\u662f100\uff05\u6da1\u8f6e\u6548\u7387\u4e0b8000-EU/t).%n%n\u5f53\u4f60\u8d85\u51fa\u6b64\u8f93\u5165\u901f\u5ea6\u65f6,\u8f93\u51fa\u53d8\u4e3a\u8fc7\u70ed\u84b8\u6c7d,\u9700\u8981\u901a\u8fc7\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e\u624d\u80fd\u53d8\u56de\u666e\u901a\u84b8\u6c7d.\u8fd9\u65f6\u7684\u6700\u5927\u8f93\u5165\u901f\u5ea6\u4e3a\u4e4b\u524d\u7684\u4e24\u500d,\u8f6c\u6362\u7387\u53d8\u4e3a\u5ca9\u6d461:80\u800c\u70ed\u51b7\u5374\u6db21:200,\u540c\u65f6100\uff05\u6da1\u8f6e\u6548\u7387\u4e0b\u80fd\u91cf\u8f93\u51fa\u4e3a\u5ca9\u6d46\u768412000-EU/t\u4ee5\u53ca\u70ed\u51b7\u5374\u6db2\u768424000-EU/t.%n%n\u975e\u5e38\u5f3a\u5927,\u4f46\u4e5f\u5f88\u590d\u6742,\u9700\u8981\u5927\u578b\u84b8\u6c7d\u6da1\u8f6e!%n%n\u60f3\u8981\u83b7\u77e5\u66f4\u591a\u4fe1\u606f,\u8bf7\u5230https://tinyurl.com/GTNH-LHE\u9605\u8bfb\u5176\u673a\u5236,\u6216\u53bb\u5230https://gtnh.miraheze.org/wiki/Fluid_Reactor ,\u5b66\u4e60\u5982\u4f55\u4f7f\u7528\u6d41\u4f53\u53cd\u5e94\u5806."
                },
                {
                    "name": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2948.png",
                    "x": 300.0,
                    "y": 372.0,
                    "tooltip": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "data": "\u8fd9\u662f\u7845\u5ca9\u53cd\u5e94\u5806\u7684\u591a\u65b9\u5757\u7248\u672c,\u4f46\u5b83\u4e0e\u5355\u65b9\u5757\u7684\u7845\u5ca9\u53cd\u5e94\u5806\u5b8c\u5168\u4e0d\u540c.%n%n\u5b83\u9700\u8981\u7684\u662f\u6d41\u4f53\u6001\u7684\u7845\u5ca9\u71c3\u6599\u6216\u6fc0\u53d1\u6001\u7684\u6838\u71c3\u6599,\u800c\u8f93\u51fa\u7684\u662f\u67af\u7aed\u7684\u71c3\u6599. \u4f60\u53ef\u4ee5\u5728NEI\u67e5\u5230\u6d41\u4f53\u71c3\u6599\u7684\u8be6\u7ec6\u6570\u636e.%n%n\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806\u8fd0\u884c\u65f6\u6bcf\u79d2\u6d88\u80172400L\u6db2\u4f53\u7a7a\u6c14,\u5426\u5219\u5c31\u4f1a\u6301\u7eed\u6d88\u8017\u71c3\u6599\u4f46\u4e0d\u4ea7\u51fa\u80fd\u91cf.%n%n\u4ed3\u5ba4\u4e2d\u5b58\u5728\u4e00\u79cd\u4ee5\u4e0a\u7684\u71c3\u6599\u5c06\u4f1a\u5bfc\u81f4\u7206\u70b8.%n%n\u8f93\u5165\u51b7\u5374\u6db2\u53ef\u4ee5\u63d0\u5347\u6548\u7387.%nIC2\u51b7\u5374\u6db2:1.05x%n\u8d85\u7ea7\u51b7\u5374\u6db2:1.5x%n\u6781\u5bd2\u4e4b\u51db\u51b0:2.75x%n%n\u8f93\u5165\u67d0\u4e9b\u7194\u878d\u91d1\u5c5e\u53ef\u4ee5\u63d0\u9ad8\u8f93\u51fa\u529f\u7387.%n\u7194\u878d\u94ef:2x%n\u7194\u878d\u94c0-235:3x%n\u7194\u878d\u7845\u5ca9:4x%n\u7194\u878d\u539f\u5b50\u5206\u79bb\u50ac\u5316\u5242:16x%n\u8bf7\u6ce8\u610f:\u4e0e\u51b7\u5374\u6db2\u7684\u6548\u7387\u63d0\u5347\u4e0d\u540c(\u767d\u5ad6),\u7194\u878d\u91d1\u5c5e\u63d0\u9ad8\u529f\u7387\u7684\u4ee3\u4ef7\u662f\u6d88\u8017\u66f4\u591a\u7684\u71c3\u6599.\u66f4\u50cf\u662f\u7ed9\u53cd\u5e94\u5806\u52a0\u4e86'\u5e76\u884c'.%n%n\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806\u540c\u6837\u652f\u6301TecTech\u591aA\u52a8\u529b\u4ed3\u548c\u6fc0\u5149\u4ed3.%n%nPS\uff1a\u8fd9\u53f0\u53d1\u7535\u673a\u62e5\u6709\u76ee\u524d\u6574\u4e2a\u6574\u5408\u5305\u6700\u9ad8\u7684\u8f93\u51fa\u529f\u7387,\u867d\u7136\u5728\u672a\u6765\u53ef\u80fd\u4f1a\u906d\u5230nerf."
                },
                {
                    "name": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1200.png",
                    "x": 156.0,
                    "y": 300.0,
                    "tooltip": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "data": "\u73b0\u5728,\u4f60\u5df2\u7ecf\u62e5\u6709\u4e86\u4e00\u4e2a\u805a\u53d8\u53cd\u5e94\u5806,\u662f\u65f6\u5019\u5229\u7528\u5b83\u8fdb\u884c\u53d1\u7535\u4e86.%n%n\u6700\u5bb9\u6613\u83b7\u5f97\u7684\u4ea7\u80fd\u7b49\u79bb\u5b50\u4f53\u5c31\u662f\u6c26\u7b49\u79bb\u5b50\u4f53\u4e86,\u867d\u7136\u7b80\u5355\u4f46\u5b83\u80fd\u63d0\u4f9b\u7684\u80fd\u91cf\u4e00\u6837\u4e0d\u5c11. \u6c18\u53ef\u4ee5\u4ece\u53ef\u518d\u751f\u7684\u6c34\u4e2d\u83b7\u5f97,\u6c26-3\u53ef\u4ee5\u4ece\u672b\u5730\u77f3\u4e2d\u83b7\u5f97.%n%n\u7136\u800c,\u6211\u4eec\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5c06\u7b49\u79bb\u5b50\u4f53\u4e2d\u7684\u80fd\u91cf\u8f6c\u6362\u6210EU\u91ca\u653e\u51fa\u6765. \u8981\u505a\u5230\u8fd9\u4e00\u70b9,\u4f60\u9700\u8981\u4e00\u53f0\u5927\u578b\u7b49\u79bb\u5b50\u6da1\u8f6e.\u8fd8\u9700\u8981\u4e00\u4e2a\u52a8\u529b\u4ed3\u8f93\u51fa\u80fd\u91cf,\u4f60\u53ef\u4ee5\u8c03\u6574\u4e0d\u540c\u7684\u52a8\u529b\u4ed3\u6765\u8c03\u6574\u8f93\u51fa\u529f\u7387.\u7528\u6c26\u7b49\u79bb\u5b50\u4f53\u8fdb\u884c\u53d1\u7535,\u90a3\u4e48\u4f60\u9700\u8981\u4e00\u4e2a\u4e0d\u4f4e\u4e8eLuV\u7684\u52a8\u529b\u4ed3[\u7f13\u51b2].%n%n\u53e6\u5916\u8fd8\u6709\u5355\u65b9\u5757\u7684\u7b49\u79bb\u5b50\u53d1\u7535\u673a,\u4e0d\u8fc7\u5b83\u4eec\u7684\u6548\u7387\u592a\u4f4e\u4e86(\u91ce\u5916\u91c7\u77ff\u5012\u662f\u4e0d\u9519)."
                },
                {
                    "name": "Marie Curium?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8084303837458271711.png",
                    "x": 408.0,
                    "y": 480.0,
                    "tooltip": "Marie Curium?",
                    "data": "It's like cured meat... no, not at all, many sacrifices were made on the path to understanding radioactivity, may they be remembered forever. This goes to you, Marie and Pierre Curie.\n\nThis is the only non-plasma produced in a fusion reaction in this entire chain. That's not the important part, though: the important part is that [warn]this is one of the bottlenecks of the chain.[/warn] For every reactor running the final recipe, you will need around 0.144 reactors of this, so you won't make it to a compact at the end with just one mk1 reactor. Expect to follow the count of the second-to-last recipe, the Advanced Nitinol one."
                },
                {
                    "name": "\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/194.png",
                    "x": 480.0,
                    "y": 156.0,
                    "tooltip": "\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806",
                    "data": "\u73b0\u5728\u4f60\u5df2\u7ecf\u521d\u6b65\u638c\u63e1\u4e86\u63a7\u5236\u53cd\u5e94\u5806\u7684\u4e00\u4e9b\u57fa\u672c\u77e5\u8bc6,\u53ef\u4ee5\u5efa\u7acb\u81ea\u5df1\u7684\u53d1\u7535\u7ad9\u4e86.\u65f6\u523b\u4e86\u89e3\u4f60\u7684\u53cd\u5e94\u5806\u7684\u8fd0\u884c\u72b6\u6001\u5341\u5206\u91cd\u8981(\u6216\u8005\u53ef\u80fd\u4f60\u4ec5\u4ec5\u662f\u770b\u4e2d\u4e86\u8fd9\u4e2a\u6f02\u4eae\u7684\u5927\u5c4f\u5e55...).\u6211\u8fd9\u91cc\u6709\u4e9b\u4e1c\u897f\u53ef\u4ee5\u5e2e\u52a9\u5230\u4f60.%n%n\u5bf9\u7740\u4f60\u60f3\u8981\u76d1\u89c6\u7684\u65b9\u5757\u4f7f\u7528\u4f20\u611f\u5de5\u5177,\u7136\u540e\u628a\u5f97\u5230\u7684\u5361\u7247\u653e\u5728\u663e\u793a\u9762\u677f\u4e2d. \u63a5\u4e0b\u6765,\u9009\u62e9\u8981\u663e\u793a\u7684\u4fe1\u606f\u6761\u76ee."
                },
                {
                    "name": "\u8fdb\u9636\u53cd\u5e94\u5806",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2829.png",
                    "x": 552.0,
                    "y": 120.0,
                    "tooltip": "\u8fdb\u9636\u53cd\u5e94\u5806",
                    "data": "\u6d41\u4f53\u53cd\u5e94\u5806,\u8fd8\u6709\u51b0\u7bb1\u6838\u7535\u548c\u6273\u624b\u53cd\u5e94\u5806(lol),\u662f\u4e0d\u540c\u4e8e\u666e\u901a\u7248\u7684\u8fdb\u9636\u7248\u672c.%n%n\u6d41\u4f53\u53cd\u5e94\u5806\u7684\u5efa\u9020\u65b9\u5f0f\u4e0e\u666e\u901a\u53cd\u5e94\u5806\u4e0d\u540c(\u4f7f\u7528\u53f3\u4fa7\u7684\u8fd9\u4e9b\u65b9\u5757,\u5728\u666e\u901a\u6838\u7535\u5916\u56f4\u6210\u4e00\u4e2a5x5x5\u7684\u4e2d\u7a7a\u7acb\u65b9\u4f53),\u76ee\u7684\u662f\u4ea7\u751f\u5c3d\u53ef\u80fd\u591a\u7684\u70ed\u51b7\u5374\u6db2(\u70ed\u4ea4\u6362\u540e\u5faa\u73af\u4f7f\u7528),\u518d\u5c06\u5176\u8f6c\u5316\u4e3a\u7535\u529b.\u6d41\u4f53\u53cd\u5e94\u5806\u81ea\u5df1\u4e0d\u53d1\u7535,\u4f46\u66f4\u5168\u9762.\u5c06\u70ed\u51b7\u5374\u6db2\u9001\u5230\u5927\u578b\u70ed\u4ea4\u6362\u673a,\u5373\u53ef\u83b7\u5f97\u8fc7\u70ed\u84b8\u6c7d,\u518d\u5c06\u5176\u4f9d\u6b21\u901a\u8fc7\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e\u3001\u666e\u901a\u84b8\u6c7d\u6da1\u8f6e.%n%n\u51b0\u7bb1\u6838\u7535(\u6211\u4eec\u4e00\u822c\u53eb\u5f3a\u51b7) \u6307\u4e0d\u901a\u8fc7\u6563\u70ed\u7247,\u800c\u662f\u4f7f\u7528\u51b7\u5374\u5355\u5143\u5438\u6536\u70ed\u91cf,\u7ef4\u6301\u53cd\u5e94\u5806\u7684\u70ed\u5e73\u8861.\u518d\u7528\u771f\u7a7a\u51b7\u51bb\u673a\u6062\u590d\u6c26/\u94a0\u94be\u51b7\u5374\u5355\u5143\u8010\u4e45.\u8fd9\u6837\u5c31\u65e0\u9700\u901a\u8fc7\u6563\u70ed\u7247\u6765\u4fdd\u8bc1\u4ea7\u70ed\u6563\u70ed\u5e73\u8861,\u610f\u5473\u7740\u53ef\u4ee5\u585e\u66f4\u591a\u7684\u71c3\u6599\u68d2,\u4f46\u4e00\u4e2a\u5c0f\u95ee\u9898\u5c31\u4f1a...KA-BOOM!%n%n\u6273\u624b\u53cd\u5e94\u5806 \u6307\u5c06\u53cd\u5e94\u5806\u585e\u6ee1\u71c3\u6599\u68d2,\u542f\u52a8,\u5728\u5176\u7206\u70b8\u524d\u7528\u6273\u624b\u62c6\u6389,\u91cd\u7f6e\u70ed\u91cf\u72b6\u6001.\u5982\u679c\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u8fc7\u7a0b\u81ea\u52a8\u5316,\u4f60\u5c31\u80fd\u83b7\u5f97\u6211\u4eecGTNH\u6838\u79d1\u5b66\u7684\u6700\u9ad8\u5956\u7ae0!%n%n\u8981\u662f\u4f60\u8fd8\u4e0d\u77e5\u9053MOX\u600e\u4e48\u7528,\u8ba9\u6211\u6765\u6559\u6559\u4f60.\u7b80\u800c\u8a00\u4e4b,MOX\u71c3\u6599\u68d2\u7684\u53d1\u7535\u91cf\u968f\u5806\u6e29\u5347\u9ad8\u800c\u5347\u9ad8.\u6240\u4ee5\u4f60\u9700\u8981\u7ef4\u6301\u597d\u70ed\u5e73\u8861\u5e76\u5c3d\u53ef\u80fd\u5730\u63d0\u9ad8\u5806\u6e29.\u4e0d\u8fc7\u592a\u9ad8\u7684\u5806\u6e29\u53ef\u80fd\u9020\u6210\u9644\u8fd1\u7684\u65b9\u5757\u88ab\u878d\u5316.MOX\u6216\u8005\u8d85\u80fd\u7845\u5ca9\u71c3\u6599\u68d2\u90fd\u6709\u8fd9\u6837\u7684\u529f\u6548.\u53e6\u5916,MOX\u53ef\u4ee5\u4ea7\u51fa\u4e0d\u5c11\u949a(\u800c\u94c0\u504f\u5c11).%n%n\u589e\u6b96\u53cd\u5e94\u5806 \u6307\u642d\u5efa\u6b64\u53cd\u5e94\u5806,\u66f4\u503e\u5411\u4e8e\u83b7\u5f97\u5176\u4ea7\u7269\u800c\u975e\u9760\u5176\u53d1\u7535,\u6bd4\u5982\u7528\u948d\u5806\u83b7\u5f97\u9565,MOX\u5806\u83b7\u5f97\u949a,\u7b49\u7b49.\u8bf7\u5728NEI\u6216wiki\u4e2d\u67e5\u770b\u71c3\u6599\u68d2(\u67af\u7aedxxx)\u7684\u7528\u9014.%n%n\u7531\u4e8e\u51b7\u5374\u6db2\u8017\u5c3d\u65f6,\u6d41\u4f53\u53cd\u5e94\u5806\u5f88\u5bb9\u6613\u7206\u70b8,\u6240\u4ee5\u8bf7\u786e\u4fdd\u6b63\u786e\u8bbe\u7f6e\u4e86\u6e29\u5ea6\u76f8\u5173\u7684\u7ea2\u77f3\u4fe1\u53f7,\u53ef\u4ee5\u7d27\u6025\u5173\u505c\u53cd\u5e94\u5806.(\u5efa\u8bae\u5176\u4ed6\u4efb\u4f55\u53cd\u5e94\u5806\u90fd\u8bbe\u7f6e\u4e00\u4e2a\u6e29\u63a7\u4fdd\u9669)"
                },
                {
                    "name": "\u70ed\u4ea4\u6362",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/196.png",
                    "x": 552.0,
                    "y": 156.0,
                    "tooltip": "\u70ed\u4ea4\u6362",
                    "data": "\u53cd\u5e94\u5806\u7684\u6e29\u5ea6\u4f1a\u5347\u9ad8.\u56e0\u6b64\u4f60\u9700\u8981\u5c06\u71c3\u6599\u68d2\u7684\u6e29\u5ea6\u8f6c\u79fb\u5230\u5176\u4ed6\u4ec0\u4e48\u5730\u65b9\u53bb.%n\u70ed\u4ea4\u6362\u5668\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u79cd\u529f\u80fd,\u4f60\u5e94\u8be5\u6bcf\u4e00\u79cd\u70ed\u4ea4\u6362\u5668\u90fd\u5236\u9020\u4e00\u4e2a,\u5e76\u4e14\u8bd5\u4e00\u8bd5\u54ea\u4e00\u79cd\u66f4\u9002\u5408\u4f60\u7684\u53cd\u5e94\u5806.%n%n\u4f60\u53ef\u4ee5\u901a\u8bfbwiki\u540e\u8bd5\u7740\u7406\u89e3\u53cd\u5e94\u5806\u7684\u5de5\u4f5c\u539f\u7406,\u6216\u8005\u76f4\u63a5\u6284\u4f5c\u4e1a..."
                },
                {
                    "name": "MV(\u4e2d\u538b)\u7ea7\u84b8\u6c7d\u8f6e\u673a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/89.png",
                    "x": 120.0,
                    "y": 120.0,
                    "tooltip": "MV(\u4e2d\u538b)\u7ea7\u84b8\u6c7d\u8f6e\u673a",
                    "data": "\u6765\u5230MV\u9636\u6bb5\u540e,\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u84b8\u6c7d.\u4f46\u662f\u957f\u4e45\u505c\u7559\u5e76\u4e0d\u662f\u4ec0\u4e48\u597d\u4e3b\u610f,\u5176\u4ed6\u7c7b\u578b\u7684\u71c3\u6599\u5c06\u4f1a\u8d8a\u6765\u8d8a\u6709\u7528.\u539f\u56e0\u662f\u84b8\u6c7d\u6da1\u8f6e\u7684\u6548\u7387\u4f1a\u968f\u7740\u7b49\u7ea7\u63d0\u5347\u8fc5\u901f\u4e0b\u964d(\u8fd9\u4e2a\u53ea\u670975%),\u800c\u4e14\u6bd4\u8d77\u82ef\u6216\u8005\u67f4\u6cb9,\u84b8\u6c7d\u8fd8\u9700\u8981\u5de8\u5927\u7684\u7ba1\u9053\u8fdb\u884c\u8f93\u9001.%n%n\u8bdd\u8bf4\u56de\u6765,\u5982\u679c\u4f60\u60f3\u7ee7\u7eed\u4f7f\u7528\u84b8\u6c7d\u7684\u8bdd,\u90a3\u4e48\u5efa\u9020\u4e00\u53f0\u5927\u578b\u9752\u94dc\u9505\u7089\u6216\u662f\u4e4b\u540e\u7684\u5927\u578b\u94a2\u9505\u7089\u5c31\u662f\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f\u4e86.\u4f60\u5c06\u4f1a\u9700\u8981\u5927\u91cf\u7684\u56fa\u4f53\u71c3\u6599,\u53ef\u80fd\u662f\u6728\u70ad,\u56e0\u6b64\u8bf7\u52a1\u5fc5\u5c06\u5176\u81ea\u52a8\u5316!\u8fd8\u6709,\u7edd\u4e0d\u8981\u5fd8\u4e86\u4f9b\u6c34!"
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkII",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2962.png",
                    "x": 372.0,
                    "y": 408.0,
                    "tooltip": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkII",
                    "data": "\u6bcfmB\u51fa\u4ea7380,000-EU/t,\u6301\u7eed1\u79d2.\u8fd8\u662f\u5f88\u6709\u9650."
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2961.png",
                    "x": 336.0,
                    "y": 408.0,
                    "tooltip": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI",
                    "data": "\u6bcfmB\u51fa\u4ea7220,000-EU/t,\u6301\u7eed1\u79d2.\u770b\u8d77\u6765\u4e0d\u592a\u884c."
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2963.png",
                    "x": 408.0,
                    "y": 408.0,
                    "tooltip": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII",
                    "data": "\u6bcfmB\u51fa\u4ea79.5M-EU/t,\u6301\u7eed4\u79d2. \u6362\u53e5\u8bdd\u8bf41.1A-UEV."
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2964.png",
                    "x": 444.0,
                    "y": 408.0,
                    "tooltip": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV",
                    "data": "\u6bcfmB\u51fa\u4ea788.5M-EU/t,\u6301\u7eed5\u79d2."
                },
                {
                    "name": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2965.png",
                    "x": 480.0,
                    "y": 408.0,
                    "tooltip": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV",
                    "data": "\u6bcfmB\u51fa\u4ea7400M-EU/t,\u6301\u7eed8\u79d2.\u4f60\u53ef\u4ee5\u7528145k\u5355\u5143\u7684MKV\u71c3\u6599,\u586b\u6ee1\u4e00\u4e2aUHV\u5170\u6ce2\u987f\u7535\u5bb9."
                },
                {
                    "name": "Naquadah Based Fuel MkVI",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5931115528477845082.png",
                    "x": 516.0,
                    "y": 408.0,
                    "tooltip": "Naquadah Based Fuel MkVI",
                    "data": "2 077 795 200 EU/t at 12s per liter. A truly immense amount of power, with a hefty cost. You will need a lot of infrastructure to run the refinery, but doing so will reward you with trillions of EU/t.\n\nThe astral titanium and celestial tungsten for alternate recipe can be sourced from laser engravers or the Plasma Fuel Line.\n\nThe tritanium can be sourced using fusion reactors, or by mining in the Deep Dark.\n\nThe shirabon will require an immense amount of fusion reactors and DTPFs to sustain.\n\nAfter Eye of Harmony, white dwarf matter can be used to improve the yield for even more power.\n\nYou will also want to consider the Tachyon Rich Temporal Fluid to get the most out of the Mark VI."
                },
                {
                    "name": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2959.png",
                    "x": 300.0,
                    "y": 408.0,
                    "tooltip": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382",
                    "data": "\u8fd9\u53f0\u75af\u72c2\u7684\u673a\u5668\u662f\u7528\u6765\u5236\u9020MkIII\u53ca\u4ee5\u4e0a\u7845\u5ca9\u71c3\u6599\u7684.%n%n\u5b83\u7684\u8d85\u9891\u673a\u5236\u7c7b\u4f3c\u805a\u53d8\u53cd\u5e94\u5806--\u4e0d\u80fd\u901a\u8fc7\u7b80\u5355\u5347\u538b\u5b9e\u73b0\u8d85\u9891.\u4f60\u5f97\u7528\u66f4\u9ad8\u9636\u7684\u7ebf\u5708\u624d\u884c.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u8fd8\u652f\u6301TecTech\u591aA\u80fd\u6e90\u4ed3\u548c\u6fc0\u5149\u4ed3.%n%n\u4e3e\u4e2a\u4f8b\u5b50,MkIV\u7845\u5ca9\u71c3\u6599\u8981\u6c422\u9636\u7ebf\u5708,\u800c\u7cbe\u70bc\u5382\u5b9e\u9645\u5b89\u88c5\u4e863\u9636\u7ebf\u5708,\u90a3\u4e48\u4f1a\u8fdb\u884c\u4e00\u6b21\u7c7b\u4f3c\u4e8e\u805a\u53d8\u53cd\u5e94\u5806\u7684\u8d85\u9891--\u529f\u7387x2,\u65f6\u95f4\u51cf\u534a."
                },
                {
                    "name": "Niobiumization",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5612826465399047400.png",
                    "x": 276.0,
                    "y": 480.0,
                    "tooltip": "Niobiumization",
                    "data": "Do you remember Niobium-Titanium? This time, it's just Niobium! Just kidding, Titanium's coming up in a special form...\n\nBoth this and the Zinc Plasma recipe are very fast, so you won't need more than 1 reactor unless your scale is very large. Upgrade later as needed, use a mk2 or even mk3 for now."
                },
                {
                    "name": "\u613f\u518d\u65e0\u7206\u70b8",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1902.png",
                    "x": 480.0,
                    "y": 192.0,
                    "tooltip": "\u613f\u518d\u65e0\u7206\u70b8",
                    "data": "\u6709\u4e86\u6838(\u5f39)\u53cd\u5e94\u5806\u4e4b\u540e,\u4f60\u5bf9\u57fa\u5730\u7684\u7834\u574f\u80fd\u529b\u7a81\u7834\u4e86\u5929\u9645...\u4f60\u53ef\u4ee5\u628a\u53cd\u5e94\u5806\u653e\u5f97\u8fdc\u8fdc\u7684(20\u533a\u5757\u8fdc),\u6216\u662f\u7528\u9632\u7206\u6750\u6599\u5c06\u53cd\u5e94\u5806\u56f4\u4e2a\u4e25\u4e25\u5b9e\u5b9e.%n%nEIO\u7684\u77f3\u82f1\u73bb\u7483\u4e0d\u518d\u597d\u7528,\u5fd8\u4e86\u5b83\u4eec\u5427.\u8bf7\u4f7f\u7528GTNH\u8ba4\u8bc1\u7684\u9540\u5c42\u9632\u7206\u77f3\u7cfb\u5217!  \u5176\u4ed6\u7684\u53ef\u9009\u9632\u7206\u6750\u6599\u8fd8\u5305\u62ec\u795e\u79d8\u7684\u5b88\u536b\u8005\u73bb\u7483.\u6839\u636e\u4f60\u7684\u53cd\u5e94\u5806\u5a01\u529b,\u53ef\u80fd\u9700\u8981\u591a\u5c42\u9632\u7206\u77f3,\u8bf7\u5728\u521b\u9020\u6a21\u5f0f\u6d4b\u8bd5. \u8bb0\u5f97\u8f6c\u89d2\u90e8\u4f4d\u4e5f\u9700\u8981\u95ed\u5408\u8d77\u6765-\u5426\u5219\u7206\u70b8\u4f1a\u4ece\u8f6c\u89d2\u7684\u7f1d\u9699\u5904\u6f0f\u51fa\u6765. \u81f3\u4e8e\u600e\u4e48\u628a\u7535\u5bfc\u51fa\u6765...\u53ea\u8981\u7ed9\u7ebf\u7f06\u6765\u51e0\u4e2a90\u00b0\u62d0\u5f2f\u5c31\u597d\u4e86,\u56e0\u4e3a\u7206\u70b8\u662f\u8d70\u76f4\u7ebf\u7684.%n%n\u6709\u516d\u79cd\u9540\u5c42\u9632\u7206\u77f3,\u5177\u4f53\u8bf7\u67e5\u770bNEI.%n%n\u597d\u5427,\u597d\u5427,\u4f60\u4e0d\u5fc5\u5fd8\u8bb0\u77f3\u82f1\u73bb\u7483,\u6211\u4f1a\u7ed9\u4f60\u4e00\u4e9b\u7684.\u4e5f\u8bb8\u4f60\u53ef\u4ee5\u7528\u5b83\u6321\u96e8."
                },
                {
                    "name": "\u948d\u57fa\u6d41\u4f53\u71c3\u6599",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2956.png",
                    "x": 336.0,
                    "y": 372.0,
                    "tooltip": "\u948d\u57fa\u6d41\u4f53\u71c3\u6599",
                    "data": "\u6700\u4fbf\u5b9c\u7684\u6d41\u4f53\u71c3\u6599,\u6bcfmB\u51fa\u4ea72200EU/t,\u6301\u7eed25\u79d2.%n%n\u5b83\u8fd8\u662f\u9568\u7684\u6765\u6e90\u4e4b\u4e00,\u800c\u9568\u53ef\u7528\u4e8e\u5408\u6210\u7845\u5ca9\u71c3\u6599."
                },
                {
                    "name": "\u949a\u57fa\u6d41\u4f53\u71c3\u6599",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2958.png",
                    "x": 408.0,
                    "y": 372.0,
                    "tooltip": "\u949a\u57fa\u6d41\u4f53\u71c3\u6599",
                    "data": "\u6bcfmB\u51fa\u4ea732,400EU/t,\u6301\u7eed7.5\u79d2."
                },
                {
                    "name": "\u94c0\u57fa\u6d41\u4f53\u71c3\u6599",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2957.png",
                    "x": 372.0,
                    "y": 372.0,
                    "tooltip": "\u94c0\u57fa\u6d41\u4f53\u71c3\u6599",
                    "data": "\u6bcfmB\u51fa\u4ea712,960EU/t,\u6301\u7eed5\u79d2."
                },
                {
                    "name": "\u6781\u7aef\u5371\u9669\u7684\u6838\u71c3\u6599:\"\u6838\u5fc3\"",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/490.png",
                    "x": 552.0,
                    "y": 300.0,
                    "tooltip": "\u6781\u7aef\u5371\u9669\u7684\u6838\u71c3\u6599:\"\u6838\u5fc3\"",
                    "data": "\u4e3a\u90a3\u4e9b\u771f\u6b63\u75af\u72c2\u7684\u6838\u5de5\u4e1a\u79d1\u5b66\u5bb6\u51c6\u5907\u7684.\u6216\u662f\u90a3\u4e9b\u61c2\u5f97\u4e0a\u7f51\u7684\u4eba(\u4e0d\u80fd\u4fdd\u8bc1,\u8bf7\u76f8\u4fe1\u6211!).\u5982\u679c\u4f60\u9700\u8981\u7528\u5b83\u53d1\u7535\u6216\u662f\u4e0d\u60f3\u5b83\u5f00\u4e00\u79d2\u5c31\u7206\u70b8\u7684\u8bdd,\u9700\u8981\u4f7f\u7528\u5927\u91cf\u7684\u51b7\u5374\u5355\u5143."
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(EV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2779.png",
                    "x": 264.0,
                    "y": 192.0,
                    "tooltip": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(EV)",
                    "data": "\u4f60\u4e0d\u60f3\u6bcf\u6b21\u642c\u52a8\u77ff\u673a\u7684\u65f6\u5019\u90fd\u8981\u91cd\u65b0\u5b89\u88c5\u4e00\u5927\u5957\u914d\u5957\u8bbe\u65bd,\u6240\u4ee5\u4f60\u9700\u8981\u67d0\u79cd\u7b80\u5355\u6613\u7528\u7684\u5355\u65b9\u5757\u53d1\u7535\u673a\u4e3a\u5176\u4f9b\u80fd.\u7b49\u79bb\u5b50\u53d1\u7535\u673a\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9.\u53ea\u9700\u8fdc\u7a0b\u4f20\u9001\u71c3\u6599\u5373\u53ef.%n%n\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u4e86,\u968f\u7740\u7535\u538b\u7b49\u7ea7\u7684\u63d0\u9ad8,\u7b49\u79bb\u5b50\u53d1\u7535\u673a\u7684\u71c3\u6599\u6548\u7387\u5728\u63d0\u9ad8,\u800c\u4e0d\u50cf\u5176\u4ed6\u53d1\u7535\u673a\u4e00\u6837\u4e0b\u964d.\u4eab\u53d7\u8fd9\u4e2a\u5c0f\u798f\u5229\u5427,\u867d\u8bf4\u6700\u9ad8\u6548\u7684\u4ecd\u7136\u662f\u591a\u65b9\u5757\u673a\u5668:\u5927\u578b\u7b49\u79bb\u5b50\u6da1\u8f6e.%n%n\u8bd1\u8005\u6ce8:\u4ee5\u540e\u6709\u4e86\u865a\u7a7a\u91c7\u77ff\u573a,\u4e0d\u7528\u8001\u662f\u642c\u52a8,\u96c6\u4e2d\u4f7f\u7528\u591a\u65b9\u5757\u7b49\u79bb\u5b50\u4f9b\u80fd\u662f\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f."
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(IV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2780.png",
                    "x": 264.0,
                    "y": 228.0,
                    "tooltip": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(IV)",
                    "data": "\u8fd9\u662fIV\u7248\u672c."
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(LuV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2781.png",
                    "x": 264.0,
                    "y": 264.0,
                    "tooltip": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(LuV)",
                    "data": "\u8fd9\u662fLuV\u7248\u672c."
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(UV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2783.png",
                    "x": 264.0,
                    "y": 336.0,
                    "tooltip": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(UV)",
                    "data": "\u8fd9\u662fUV\u7248\u672c."
                },
                {
                    "name": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(ZPM)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2782.png",
                    "x": 264.0,
                    "y": 300.0,
                    "tooltip": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(ZPM)",
                    "data": "\u8fd9\u662fZPM\u7248\u672c."
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(IV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/216.png",
                    "x": 300.0,
                    "y": 228.0,
                    "tooltip": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(IV)",
                    "data": "\u8fd9\u662fIV\u7248\u672c."
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(EV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2794.png",
                    "x": 300.0,
                    "y": 192.0,
                    "tooltip": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(EV)",
                    "data": "\u5f53\u4f60\u4e0d\u624b\u6301\u71c3\u6599\u65f6,\u5b83\u7684\u786e\u662f\u6e05\u6d01\u80fd\u6e90.\u8fd9\u79cd\u4fbf\u643a\u5f0f\u80fd\u6e90\u5bf9\u91c7\u77ff\u573a\u8fd9\u7c7b\u57fa\u5730\u5916\u673a\u5668\u76f8\u5f53\u6709\u7528,\u800c\u5b83\u7684\u71c3\u6599\u6548\u7387\u968f\u7535\u538b\u7b49\u7ea7\u7684\u63d0\u5347\u800c\u63d0\u5347. \u4e0d\u8fc7\u6bcf\u4e00\u7ea7\u7535\u538b\u7684\u63d0\u5347\u5c31\u4f1a\u8981\u6c42\u66f4\u9ad8\u6d53\u5ea6\u7684\u7845\u5ca9(ZPM\u65f6\u8981\u6c42\u8d85\u80fd\u7845\u5ca9).%n%n\u71c3\u6599\u5177\u6709\u653e\u5c04\u6027,\u8be5\u6b7b.%n%n\u5728\u9886\u53d6\u5956\u52b1\u4e4b\u524d,\u7a7f\u4e0a\u4f60\u7684\u9632\u62a4\u670d\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u4e3b\u610f."
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(LuV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2795.png",
                    "x": 300.0,
                    "y": 264.0,
                    "tooltip": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(LuV)",
                    "data": "\u8fd9\u662fLuV\u7248\u672c."
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(ZPM)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2796.png",
                    "x": 300.0,
                    "y": 300.0,
                    "tooltip": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(ZPM)",
                    "data": "\u8fd9\u662fZPM\u7248\u672c.\u5b83\u9700\u8981\u8d85\u80fd\u7845\u5ca9."
                },
                {
                    "name": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(UV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2797.png",
                    "x": 300.0,
                    "y": 336.0,
                    "tooltip": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(UV)",
                    "data": "\u8fd9\u662fUV\u7248\u672c."
                },
                {
                    "name": "\u592a\u9633\u80fd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/933.png",
                    "x": 12.0,
                    "y": 12.0,
                    "tooltip": "\u592a\u9633\u80fd",
                    "data": "\u73b0\u5728\u6211\u4eec\u5e94\u8be5\u7814\u7a76\u4e00\u4e9b\u522b\u7684\u53ef\u518d\u751f\u80fd\u6e90\u4e86.\u8ba9\u6211\u4eec\u4ece\u592a\u9633\u80fd\u5f00\u59cb,\u6700\u4f4e\u7b49\u7ea7\u7684\u592a\u9633\u80fd\u677f\u53d1\u7535\u91cf\u662f1EU/t.\u8fd9\u4e9b\u592a\u9633\u80fd\u677f\u53ef\u4ee5\u4f5c\u4e3a\u5927\u90e8\u5206GT\u673a\u5668\u7684\u8986\u76d6\u677f\u4f7f\u7528,\u8ba9\u8fd9\u4e9b\u673a\u5668\u80fd\u4ece\u592a\u9633\u4e2d\u83b7\u53d6\u80fd\u6e90(\u4f46\u524d\u63d0\u662f\u5b83\u53ef\u4ee5\u770b\u89c1\u592a\u9633,\u5373\u9876\u90e8\u6ca1\u6709\u4e0d\u900f\u660e\u906e\u6321).%n%n\u5343\u4e07\u8bb0\u4f4f\u6321\u96e8,\u5728\u673a\u5668\u4e0a\u65b9\u653e\u4e00\u5c42\u73bb\u7483,\u4e5f\u522b\u5fd8\u4e86\u673a\u5668\u7d27\u90bb\u7684\u65b9\u5757\u4e5f\u4e0d\u80fd\u6dcb\u96e8.%n%n\u94dd\u94c1\u677f\u9700\u8981MV\u51b2\u538b\u673a\u5e8a."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(MV)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1004.png",
                    "x": 48.0,
                    "y": 120.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(MV)1x1",
                    "data": "\u628a\u90a3\u4e9b128EU\u7684\u592a\u9633\u80fd\u677f\u5236\u9020\u6210\u65b9\u5757,\u8fd9\u6837\u4ed6\u4eec\u80fd\u591f\u88ab\u653e\u7f6e\u5230\u4e16\u754c\u4e2d. \u4f7f\u7528HV\u7ea7\u522b\u7684\u7ec4\u88c5\u673a\u5c06MV\u7ea7\u592a\u9633\u80fd\u677f\u3001MV\u673a\u5668\u5916\u58f3\u3001\u4e00\u4e2a\u7535\u6c60\u548c\u4e00\u4e2a\u673a\u68b0\u81c2\u7ec4\u88c5\u5230\u4e00\u8d77."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(HV)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1007.png",
                    "x": 48.0,
                    "y": 156.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(HV)1x1",
                    "data": "\u628a\u90a3\u4e9b512EU\u7684\u592a\u9633\u80fd\u677f\u5236\u9020\u6210\u65b9\u5757,\u8fd9\u6837\u5b83\u4eec\u80fd\u591f\u88ab\u653e\u7f6e\u5230\u4e16\u754c\u4e2d. \u4f7f\u7528HV\u7ea7\u522b\u7684\u7ec4\u88c5\u673a\u5c06HV\u7ea7\u592a\u9633\u80fd\u677f\u3001HV\u673a\u5668\u5916\u58f3\u3001\u4e00\u4e2a\u7535\u6c60\u548c\u4e00\u4e2a\u673a\u68b0\u81c2\u7ec4\u88c5\u5230\u4e00\u8d77."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ULV)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/935.png",
                    "x": 48.0,
                    "y": 12.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(ULV)1x1",
                    "data": "\u628a\u4e00\u5757\u57fa\u7840\u592a\u9633\u80fd\u677f\u548c\u4e00\u4e2aULV\u673a\u5668\u65b9\u5757\u653e\u5165MV\u7ea7\u522b\u7684\u7ec4\u88c5\u673a\u4e2d,\u7ec4\u88c5\u673a\u5c06\u4f1a\u628a\u5b83\u4eec\u7ec4\u88c5\u4e3a\u4e00\u4e2aULV\u7b49\u7ea7\u7684\u592a\u9633\u80fd\u53d1\u7535\u673a."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(LV)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/937.png",
                    "x": 48.0,
                    "y": 84.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(LV)1x1",
                    "data": "\u5386\u5c3d\u5343\u8f9b\u4e07\u82e6\u4f60\u7ec8\u4e8e\u53ef\u4ee5\u5236\u9020LV\u7ea7\u522b\u7684\u592a\u9633\u80fd\u53d1\u7535\u673a\u4e86. \u628aLV\u673a\u5668\u5916\u58f3\u548cLV\u7ea7\u592a\u9633\u80fd\u8986\u76d6\u677f\u653e\u5230MV\u7684\u7ec4\u88c5\u673a\u91cc\u9762."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(EV)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1719.png",
                    "x": 48.0,
                    "y": 192.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(EV)1x1",
                    "data": "\u5c06\u8fd9\u4e9b2048-EU/t\u592a\u9633\u80fd\u8986\u76d6\u677f\u8d34\u5230\u65b9\u5757\u4e0a,\u4f7f\u5176\u53ef\u4ee5\u653e\u7f6e\u5728\u4e16\u754c\u4e0a. \u6216\u4f7f\u7528IV\u7ec4\u88c5\u673a\u5c06\u592a\u9633\u80fd\u8986\u76d6\u677f\u4e0eEV\u673a\u5668\u5916\u58f3,\u7535\u6c60\u548c\u673a\u68b0\u81c2\u7ed3\u5408\u5728\u4e00\u8d77.\u90a3\u4e48\u6b64\u592a\u9633\u80fd\u8986\u76d6\u677f\u5c06\u4e0d\u518d\u9700\u8981\u624b\u52a8\u6e05\u6d01."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(IV)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1721.png",
                    "x": 48.0,
                    "y": 228.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(IV)1x1",
                    "data": "\u5c06\u8fd9\u4e9b8192EU/t\u592a\u9633\u80fd\u8986\u76d6\u677f\u8d34\u5230\u65b9\u5757\u4e0a,\u4f7f\u5176\u53ef\u4ee5\u653e\u7f6e\u5728\u4e16\u754c\u4e0a. \u6216\u4f7f\u7528LuV\u7ec4\u88c5\u673a\u5c06\u592a\u9633\u80fd\u8986\u76d6\u677f\u4e0eIV\u673a\u5668\u5916\u58f3\u3001\u7535\u6c60\u548c\u673a\u68b0\u81c2\u7ed3\u5408\u5728\u4e00\u8d77.\u90a3\u4e48\u6b64\u592a\u9633\u80fd\u8986\u76d6\u677f\u5c06\u4e0d\u518d\u9700\u8981\u624b\u52a8\u6e05\u6d01."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(LuV)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2775.png",
                    "x": 48.0,
                    "y": 264.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(LuV)1x1",
                    "data": "\u8fd9\u662f\u4e0d\u9700\u8981\u6e05\u6d01\u7684\u65b9\u5757\u7248\u672c."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ZPM)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2778.png",
                    "x": 48.0,
                    "y": 300.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(ZPM)1x1",
                    "data": "\u8fd9\u662f\u4e0d\u9700\u8981\u6e05\u6d01\u7684\u65b9\u5757\u7248\u672c."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(EV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1672.png",
                    "x": 12.0,
                    "y": 192.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(EV)",
                    "data": "\u4f60\u53ef\u4ee5\u5236\u4f5c\u7684\u4e0b\u4e00\u4e2a\u592a\u9633\u80fd\u8986\u76d6\u677f\u662fEV\u7b49\u7ea7\u7684.\u5b83\u6700\u591a\u4ea7\u751f2048EU/t.\u53ef\u4ee5\u7528\u4f5c\u5927\u591a\u6570GT\u673a\u5668\u7684\u8986\u76d6\u677f. \u9996\u5148,\u4f60\u9700\u8981\u751f\u4ea7\u56db\u91cd\u9633\u5149\u5316\u5408\u7269\u677f. \u5236\u4f5c\u8fd9\u79cd\u592a\u9633\u80fd\u8986\u76d6\u677f\u9700\u8981\u65e0\u5c3d\u8d2a\u5a6a\u76849x9\u7ec8\u6781\u5de5\u4f5c\u53f0."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(HV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1006.png",
                    "x": 12.0,
                    "y": 156.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(HV)",
                    "data": "\u63a5\u4e0b\u6765\u8981\u5f00\u59cb\u5236\u4f5cHV\u7ea7\u522b\u592a\u9633\u80fd\u677f,\u5b83\u53ef\u4ee5\u63d0\u4f9b\u6700\u5927512EU/t\u7684\u8f93\u51fa.\u53ef\u4ee5\u7528\u4f5c\u5927\u591a\u6570GT\u673a\u5668\u7684\u8986\u76d6\u677f.%n\u9996\u5148\u4f60\u9700\u8981\u751f\u4ea7\u5bcc\u96c6\u9633\u5149\u5316\u5408\u7269\u548c\u94c0238\u677f. HV\u7ea7\u522b\u53ca\u4ee5\u4e0a\u7684\u592a\u9633\u80fd\u677f\u9700\u8981\u57289*9\u683c\u7684\u7ec8\u6781\u5de5\u4f5c\u53f0\u5408\u6210."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(IV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1720.png",
                    "x": 12.0,
                    "y": 228.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(IV)",
                    "data": "\u4f60\u53ef\u4ee5\u5236\u4f5c\u7684\u4e0b\u4e00\u4e2a\u592a\u9633\u80fd\u8986\u76d6\u677f\u662fIV\u7b49\u7ea7\u7684.\u5b83\u6700\u9ad8\u4ea7\u751f8192-EU/t.\u53ef\u4ee5\u7528\u4f5c\u5927\u591a\u6570GT\u673a\u5668\u7684\u8986\u76d6\u677f. \u9996\u5148,\u4f60\u9700\u8981\u7528\u5f3a\u5316\u94f1\u548c\u9633\u5149\u5316\u5408\u7269\u751f\u4ea7\u9633\u5149\u5408\u91d1. \u5236\u4f5c\u6b64\u592a\u9633\u80fd\u8986\u76d6\u677f\u9700\u8981\u65e0\u5c3d\u8d2a\u5a6a9x9\u7ec8\u6781\u5de5\u4f5c\u53f0.%n%n\u9664\u975e\u4f60\u771f\u7684\u5f88\u559c\u6b22\u592a\u9633\u80fd,\u5426\u5219\u8fd9\u53ef\u80fd\u662f\u503c\u5f97\u5236\u9020\u7684\u6700\u540e\u4e00\u9636\u592a\u9633\u80fd..."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(LV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/936.png",
                    "x": 12.0,
                    "y": 84.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(LV)",
                    "data": "\u73b0\u5728\u4f60\u53ef\u4ee5\u5236\u9020LV\u7ea7\u522b\u7684\u592a\u9633\u80fd\u677f\u4e86.\u4ed6\u53ef\u4ee5\u63d0\u4f9b\u6700\u592732EU/t\u7684\u8f93\u51fa,\u5b83\u540c\u6837\u53ef\u4ee5\u4f5c\u4e3a\u8986\u76d6\u677f\u76f4\u63a5\u8d34\u5230GT\u7684\u673a\u5668\u4e0a\u9762\u6765\u7ed9\u8bbe\u5907\u4f9b\u7535.%n\u4e0d\u8fc7\u8981\u5236\u9020LV\u7684\u592a\u9633\u80fd\u677f\u4f60\u9996\u5148\u9700\u8981\u5236\u9020\u4e00\u4e9b\u9633\u5149\u5316\u5408\u7269."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(LuV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2774.png",
                    "x": 12.0,
                    "y": 264.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(LuV)",
                    "data": "LuV\u592a\u9633\u80fd\u8986\u76d6\u677f\u53d1\u7535\u91cf\u4e3a32768EU/t."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(MV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1003.png",
                    "x": 12.0,
                    "y": 120.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(MV)",
                    "data": "\u73b0\u5728\u4f60\u53ef\u4ee5\u5236\u9020MV\u7ea7\u522b\u7684\u592a\u9633\u80fd\u677f\u4e86.\u5b83\u53ef\u4ee5\u63d0\u4f9b\u6700\u5927128EU/t\u7684\u8f93\u51fa,\u540c\u6837\u53ef\u4ee5\u4f5c\u4e3a\u8986\u76d6\u677f\u76f4\u63a5\u8d34\u5230GT\u7684\u673a\u5668\u4e0a\u9762\u6765\u7ed9\u8bbe\u5907\u4f9b\u7535."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(UV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2777.png",
                    "x": 12.0,
                    "y": 336.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(UV)",
                    "data": "UV\u592a\u9633\u80fd\u8986\u76d6\u677f\u53d1\u7535\u91cf\u4e3a524288EU/t."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ZPM)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2776.png",
                    "x": 12.0,
                    "y": 300.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(ZPM)",
                    "data": "ZPM\u592a\u9633\u80fd\u8986\u76d6\u677f\u53d1\u7535\u91cf\u4e3a131072EU/t."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(ULV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/934.png",
                    "x": 12.0,
                    "y": 48.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(ULV)",
                    "data": "\u4e0b\u4e00\u4e2a\u7b49\u7ea7\u7684\u592a\u9633\u80fd\u677f\u7b49\u7ea7\u662fULV\u7ea7,\u4ed6\u4eec\u53ef\u4ee5\u63d0\u4f9b8EU/t\u7684\u80fd\u6e90.\u540c\u6837\u4ed6\u4eec\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5927\u90e8\u5206\u683c\u96f7\u673a\u5668\u7684\u8986\u76d6\u677f\u4f7f\u7528."
                },
                {
                    "name": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(LV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2788.png",
                    "x": 228.0,
                    "y": 84.0,
                    "tooltip": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(LV)",
                    "data": "\u4f60\u53ef\u80fd\u6536\u96c6\u4e86\u5927\u91cf\u7684\u6742\u915a\u6cb9,\u5374\u51e0\u4e4e\u6ca1\u6709\u600e\u4e48\u7528\u5b83.\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e00\u70b9,\u5236\u9020\u4e00\u53f0\u534a\u6d41\u8d28\u53d1\u7535\u673a,\u7136\u540e\u5c06\u6742\u915a\u6cb9\u4f5c\u4e3a\u84b8\u6c7d\u5916\u7684\u7b2c\u4e8c\u80fd\u6e90\u5427!\u5355\u65b9\u5757\u53d1\u7535\u673a\u53ea\u4f1a\u5728\u6709EU\u9700\u6c42\u65f6\u4f7f\u7528\u71c3\u6599,\u6240\u4ee5\u5982\u679c\u4f60\u6ca1\u6709\u6d88\u8017\u8db3\u591f\u7684EU,\u53ef\u80fd\u6700\u7ec8\u6742\u915a\u6cb9\u4f1a\u585e\u6ee1\u4f60\u7684\u7f13\u5b58.%n%n\u60f3\u8981\u5c06\u4f60\u7126\u7089\u4e2d\u7684\u6742\u915a\u6cb9\u63d0\u53d6\u51fa\u6765,\u4f60\u53ef\u4ee5\u624b\u52a8\u4f7f\u7528\u6876\u6216\u5355\u5143,\u6216\u8005\u901a\u8fc7\u5320\u9b42\u7684\u6d47\u6ce8\u53e3\u5bfc\u5165GT\u6d41\u4f53\u7ba1\u9053,\u53c8\u6216\u8005\u4f7f\u7528\u7535\u52a8\u6cf5\u8986\u76d6\u677f.%n%n\u71c3\u70e7\u6742\u915a\u6cb9\u7684\u65b9\u6cd5\u8fd8\u6709\u4e0d\u5c11,\u6bd4\u65b9\u8bf4RC\u7684\u6db2\u6001\u71c3\u70e7\u5ba4,\u4e0d\u8fc7\u534a\u6d41\u8d28\u53d1\u7535\u673a\u4fbf\u5b9c\u5f97\u591a,\u4f7f\u7528\u4e5f\u66f4\u52a0\u65b9\u4fbf,\u540c\u65f6\u6548\u7387\u4e5f\u76f8\u5f53\u51fa\u8272(\u5c31\u6742\u915a\u6cb9\u800c\u8a00,\u662f\u5185\u71c3\u53d1\u7535\u673a\u76846\u500d)."
                },
                {
                    "name": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(HV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2790.png",
                    "x": 228.0,
                    "y": 156.0,
                    "tooltip": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(HV)",
                    "data": "\u5982\u679c\u4f60\u5df2\u7ecf\u4e3a\u4e86\u5347\u7ea7\u77f3\u6cb9\u5904\u7406\u7ebf\u6216\u82ef\u5904\u7406\u7ebf\u800c\u4fee\u5efa\u4e86\u84b8\u998f\u5854,\u6700\u7ec8\u53ef\u80fd\u4f1a\u83b7\u5f97\u4e0d\u5c11\u989d\u5916\u534a\u6d41\u8d28\u71c3\u6599,\u7c7b\u4f3c\u91cd\u71c3\u6cb9\u6216\u6742\u915a\u6cb9.\u8981\u662f\u5df2\u7ecf\u56e4\u4e86\u592a\u591a\u4ee5\u81f3\u4e8e\u90fd\u5f00\u59cb\u9500\u6bc1\u4e86\u7684\u8bdd,\u5236\u9020\u4e00\u53f0HV\u534a\u6d41\u8d28\u53d1\u7535\u673a\u5427,\u514d\u8d39\u7684\u80fd\u6e90\u4e0d\u7528\u767d\u4e0d\u7528!%n%n\u5904\u7406\u6728\u7126\u6cb9\u7684\u84b8\u998f\u5854\u51fa\u4ea7\u7684\u6742\u915a\u6cb9\u5c31\u8db3\u4ee5\u4e3a\u81ea\u5df1\u4f9b\u80fd,\u7b97\u7b97\u71c3\u6599\u6548\u7387,\u4e00\u53f0HV\u534a\u6d41\u8d28\u53d1\u7535\u673a\u5c31\u7ef0\u7ef0\u6709\u4f59\u4e86."
                },
                {
                    "name": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(MV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2789.png",
                    "x": 228.0,
                    "y": 120.0,
                    "tooltip": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(MV)",
                    "data": "\u5982\u679c\u4f60\u8fd8\u5728\u71c3\u70e7\u6742\u915a\u6cb9\u4f5c\u4e3a\u80fd\u6e90\u7684\u8bdd,\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u673a\u5668\u83b7\u5f97MV\u7535\u538b.\u867d\u8bf4\u4e0d\u592a\u6301\u4e45,\u4e5f\u7edd\u4e0d\u662f\u597d\u7684\u4e3b\u8981\u80fd\u6e90,\u4e0d\u8fc7\u5b83\u7ec8\u5f52\u80fd\u4e3a\u4f60\u8865\u5145\u4e00\u4e9bEU.%n%n\u53e6\u4e00\u79cd\u9009\u62e9,\u91cd\u71c3\u6cb9?\u5b83\u7684\u6bcf\u6876\u71c3\u503c\u4e0e\u82ef\u76f8\u5f53,360k-EU,\u4e5f\u662f\u552f\u4e00\u4e00\u79cd\u6bcf\u6876\u71c3\u503c\u8d85\u8fc7100k-EU\u7684\u534a\u6d41\u8d28\u71c3\u6599.\u5982\u679c\u4f60\u5408\u6210\u67f4\u6cb9\u4e4b\u540e\u8fd8\u5269\u4e0b\u4e0d\u5c11\u7684\u8bdd,\u7528\u4f5c\u534a\u6d41\u8d28\u53d1\u7535\u673a\u7684\u71c3\u6599\u662f\u4e2a\u4e0d\u9519\u7684\u6cd5\u5b50."
                },
                {
                    "name": "\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2815.png",
                    "x": 84.0,
                    "y": 264.0,
                    "tooltip": "\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)",
                    "data": "\u53ef\u8f93\u51fa10000-32768EU/t."
                },
                {
                    "name": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2816.png",
                    "x": 84.0,
                    "y": 300.0,
                    "tooltip": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)",
                    "data": "\u53ef\u8f93\u51fa100,000-131,072EU/t."
                },
                {
                    "name": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a2",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2802.png",
                    "x": 588.0,
                    "y": 192.0,
                    "tooltip": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a2",
                    "data": "\u53ef\u4ee5\u8fd0\u884c\u76f8\u5f53\u76f8\u5f53\u957f\u7684\u65f6\u95f4.\u6839\u636e\u63d0\u4f9b\u7684\u9776\u4e38\u8f93\u51fa\u80fd\u91cf.%n%n\u9545-241:16EU/t,69875\u5929%n\u9536-90:30EU/t,62640\u5929%n\u949a-238:64EU/t,42982\u5929%n\u948b-210:480EU/t,34560\u5929%n%n\u5766\u767d\u6765\u8bf4,\u8fd9\u73a9\u610f\u5b8c\u5168\u4e0d\u503c.\u7279\u522b\u662f\u8003\u8651\u5230\u4e3a\u4e86\u5236\u9020\u8fd9\u4e9b\u9776\u4e38,\u8fd8\u9700\u8981\u65b0\u4fee\u4e00\u53f0\u56de\u65cb\u52a0\u901f\u5668...\u751a\u81f3\u5236\u9020\u8fc7\u7a0b\u8fd8\u8981\u770b\u8138!"
                },
                {
                    "name": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2801.png",
                    "x": 588.0,
                    "y": 156.0,
                    "tooltip": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a1",
                    "data": "\u7ed9\u5b83\u63d0\u4f9b\u71c3\u6599,\u5b83\u5c31\u80fd\u4e00\u76f4\u5de5\u4f5c\u5230\u5730\u8001\u5929\u8352.\u8f93\u51fa1EU/t,\u4f46\u6bcf\u6dfb\u52a0\u4e00\u679a\u9776\u4e38\u5c31\u53ef\u4ee5\u7ffb\u500d,\u6700\u9ad832EU/t.\u53ef\u80fd\u5bf9\u519c\u573a\u6709\u7528?"
                },
                {
                    "name": "\u706b\u7bad\u5f15\u64ce(EV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2294.png",
                    "x": 336.0,
                    "y": 192.0,
                    "tooltip": "\u706b\u7bad\u5f15\u64ce(EV)",
                    "data": "\u8fd9\u79cd\u706b\u7bad\u5f15\u64ce\u662f\u4e00\u79cd\u9ad8\u6c61\u67d3\u53d1\u7535\u8bbe\u5907,\u71c3\u6599\u6548\u7387\u4e3a80\uff05.\u6bcf\u79d2\u4ea7\u751f250-2000\u70b9\u6c61\u67d3.%n%n\u67094\u79cd\u706b\u7bad\u71c3\u6599.\u8bf7\u5728\u592a\u7a7a\u7ade\u8d5b\u4efb\u52a1\u680f\u4e0b\u67e5\u770b\u5269\u4f59\u71c3\u6599\u7684\u5236\u9020\u65b9\u5f0f.\u5982\u679c\u8981\u81ea\u52a8\u5316\u751f\u4ea7\u8fd9\u4e9b\u71c3\u6599,\u9884\u8ba1\u9700\u8981\u591a\u4e2a\u5316\u5de5\u5382. \u53e6\u5916\u706b\u7bad\u5f15\u64ce\u4e5f\u6709\u591a\u65b9\u5757\u7248\u672c.%n%n WIKI \u706b\u7bad\u71c3\u6599\u4ea7\u7ebf\uff1agtnh.huijiwiki.com/p/742"
                },
                {
                    "name": "\u706b\u7bad\u5f15\u64ce(IV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2784.png",
                    "x": 336.0,
                    "y": 228.0,
                    "tooltip": "\u706b\u7bad\u5f15\u64ce(IV)",
                    "data": "\u8fd9\u662fIV\u7248\u672c. \u5b83\u7684\u71c3\u6599\u6548\u7387\u4e3a70\uff05,\u540c\u65f6\u6bcf\u79d2\u4ea7\u751f500\u52304000\u70b9\u6c61\u67d3."
                },
                {
                    "name": "\u706b\u7bad\u5f15\u64ce(LuV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2785.png",
                    "x": 336.0,
                    "y": 264.0,
                    "tooltip": "\u706b\u7bad\u5f15\u64ce(LuV)",
                    "data": "\u8fd9\u662fLuV\u7248\u672c. \u5b83\u7684\u71c3\u6599\u6548\u7387\u4e3a60\uff05,\u540c\u65f6\u6bcf\u79d2\u4ea7\u751f750\u52306000\u70b9\u6c61\u67d3."
                },
                {
                    "name": "\u8f6c\u5b50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1140.png",
                    "x": 408.0,
                    "y": 120.0,
                    "tooltip": "\u8f6c\u5b50",
                    "data": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a\u6216\u548c\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a\u90fd\u9700\u8981\u8f6c\u5b50\u6765\u8fd0\u4f5c. \u53ef\u901a\u8fc7\u6807\u51c6\u81ea\u52a8\u5316\u6dfb\u52a0\u6216\u662f\u79fb\u9664\u8f6c\u5b50. \u8d8a\u9ad8\u7ea7\u7684\u8f6c\u5b50\u4f7f\u7528\u65f6\u95f4\u5c31\u8d8a\u957f.\u6b64\u5916,\u7528\u94f1\u5236\u9020\u7684\u8f6c\u5b50\u4e0d\u4f1a\u78e8\u635f.\u800cIC2\u7684\u94f1\u8f6c\u5b50\u6709\u53ef\u80fd\u56e0\u4e3a\u8010\u4e45\u635f\u5931\u51fa\u73b0bug. \u5145\u80fd\u5408\u91d1\u8f6c\u5b50\u5728\u5f53\u524d\u53ef\u80fd\u662f\u6700\u4f18\u9009\u62e9,\u4ee5\u4e3a\u5b83\u6070\u597d\u53ef\u4ee5\u63d0\u4f9b\u6ee11A\u8f93\u51fa,\u800c\u76ee\u524d\u591a\u4f59\u8f93\u51fa\u4f1a\u88ab\u6d6a\u8d39.%n%n\u53ea\u9700\u5236\u9020\u4e00\u4e2a\u8f6c\u5b50\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1."
                },
                {
                    "name": "Runite Plasma - The Mk2 Conclusion",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4721119019196807237.png",
                    "x": 360.0,
                    "y": 492.0,
                    "tooltip": "Runite Plasma - The Mk2 Conclusion",
                    "data": "To complete this chain, you need to activate the Astral Titanium Plasma you have with a special material, also a GT++ one, called Titansteel. This is a considerable powersink, which is why the input amount is so low at 2L, and it forces you to dedicate an ABS at UV tier to feed one mk2 reactor running the Runite plasma recipe. If you decide to upscale this setup, the best option is to simply build a mega ABS, where you can also use EBF coils to save some EU, and in turn make the powergen chain more efficient.\n\nRunite Plasma has a 350M fuel value, which leaves it free to run on Trinium XLs without penalty, whereas Tin Plasma has a 74.5% penalty on the same turbines due to having less than half the fuel value. If you want to upscale your plasma powergen to great numbers, this is an option, but the mk3 chain is probably the one to choose.\n\nThe same ratio of 0.144 to 1 reactors also applies here."
                },
                {
                    "name": "\"Semi-Stable\" doing a lot of work in here",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5840241591017037228.png",
                    "x": 264.0,
                    "y": 408.0,
                    "tooltip": "\"Semi-Stable\" doing a lot of work in here",
                    "data": "A cell of antimatter! Contained in a cell made of matter! Surely this is safe.\n\nAntimatter is exactly what you may imagine, the opposite of matter, for every atom in the universe, an \"anti atom\" exists, and when both meet...\n\nThey annihilate themselves, releasing a lot of energy!\n\nBut how could you capture this energy?"
                },
                {
                    "name": "\u5c06\u80fd\u91cf\u9001\u56de",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1145.png",
                    "x": 372.0,
                    "y": 120.0,
                    "tooltip": "\u5c06\u80fd\u91cf\u9001\u56de",
                    "data": "\u52a8\u80fd\u53d1\u7535\u673a\u7684\u517c\u5bb9\u6027\u5f97\u5230\u4e86\u63d0\u5347,\u73b0\u5728\u65e0\u9700\u53d8\u538b\u5668\u5373\u53ef\u6b63\u5e38\u901a\u8fc7\u7ebf\u7f06\u8f93\u51fa\u80fd\u91cf.\u4f46\u5728\u8f93\u7535\u7684\u65f6\u5019,\u4f7f\u7528\u53d8\u538b\u5668\u5347\u538b\u4ecd\u7136\u4e0d\u5931\u4e3a\u4e00\u79cd\u6781\u4f73\u7684\u964d\u4f4e\u635f\u8017\u65b9\u5f0f.\u4e3e\u4e2a\u4f8b\u5b50,\u4ece160\u683c\u7684\u53d1\u7535\u673a\u4f20\u8f93\u523063\u683c\u5730\u8868,1\u7ebf\u635f\u7684\u7ebf\u7f06,\u6bcfA\u7535\u6d41\u4f1a\u635f\u593197EU,\u5982\u679c\u662fHV\u8f93\u7535,\u5c31\u4f1a\u662f97/512,\u5c06\u8fd1\u4e94\u5206\u4e4b\u4e00\u7684\u635f\u5931;\u800c\u5982\u679c\u662fEV\u8f93\u7535,\u90a3\u4e48\u5c31\u662f97/2048,\u4e0d\u52301/20\u7684\u635f\u5931,\u8fd9\u4e0d\u5c31\u662f\u597d\u591a\u4e86\u561b.(\u5347\u538b\u524d\u9700\u8981\u901a\u8fc7\u4e00\u6bb5\u7ebf\u7f06,\u5c06\u53d1\u7535\u673a\u8f93\u51fa\u7684IC-EU\u8f6c\u5316\u4e3aGT-EU)%n%nIC2\u673a\u5668\u4e0d\u6015\u88ab\u96e8\u6dcb,\u4f46\u522b\u5fd8\u4e86\u906e\u76d6\u53d8\u538b\u5668."
                },
                {
                    "name": "\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2818.png",
                    "x": 48.0,
                    "y": 372.0,
                    "tooltip": "\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)",
                    "data": "\u53ef\u8f93\u51fa10,000,000-33,554,432EU/t."
                },
                {
                    "name": "\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2817.png",
                    "x": 84.0,
                    "y": 372.0,
                    "tooltip": "\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)",
                    "data": "\u53ef\u8f93\u51fa1,000,000-2,097,152EU/t."
                },
                {
                    "name": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk II",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2826.png",
                    "x": 156.0,
                    "y": 264.0,
                    "tooltip": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk II",
                    "data": "\u4e0e\u4e0a\u4e00\u7ea7\u4e00\u6837,\u4f46\u53d1\u7535\u66f4\u591a/\u66f4\u597d.\u52a0\u70ed\u65f6\u95f4\u66f4\u5c11,\u4f46\u6d88\u8017\u71c3\u6599\u7684\u901f\u5ea6\u4e5f\u66f4\u5feb.\u5728\u957f\u671f\u4ea7\u80fd\u65b9\u9762\u5b83\u4ecd\u7136\u6bd4\u4e0d\u4e0a\u5168\u901f\u8fd0\u884c\u7684\u5927\u578b\u71c3\u6c14\u6da1\u8f6e,\u4f46\u5b83\u53ef\u4ee5\u505a\u5230\u5feb\u901f\u53cd\u5e94.\u522b\u5fd8\u4e86\u8fd8\u8981\u914d\u5408\u5927\u578b\u9ad8\u538b\u84b8\u6c7d\u6da1\u8f6e.%n%n\u6b63\u786e\u8bbe\u7f6e\u540e,\u5b83\u80fd\u63d0\u4f9b1A\u4ee5\u4e0a\u7684LuV\u8f93\u51fa."
                },
                {
                    "name": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk I",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2827.png",
                    "x": 156.0,
                    "y": 228.0,
                    "tooltip": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk I",
                    "data": "\u5b83\u53ef\u4ee5\u4f7f\u7528\u6c14\u4f53\u71c3\u6599,\u540c\u65f6\u4ea7\u751f\u80fd\u91cf\u548c\u84b8\u6c7d(\u53ea\u5728\u52a0\u70ed\u540e\u4ea7\u751f),\u800c\u4e140\u6c61\u67d3.\u5982\u679c\u5176\u4ed6\u53d1\u7535\u673a\u90fd\u6709\u5404\u79cd\u6c61\u67d3\u95ee\u9898\u7684\u8bdd,\u90a3\u4e48\u8fd9\u79cd\u53d1\u7535\u673a\u5c31\u662f\u6700\u4f73\u89e3\u51b3\u65b9\u6848\u4e86.%n%n\u5b83\u53ef\u4ee5\u4ea7\u51fa4A-HV/t,\u800c\u4e14\u71c3\u6599\u6548\u7387\u4e0d\u9519,\u540c\u65f6\u6bcf\u79d2\u6d88\u8017100mB\u6c27. \u71c3\u6599\u7535\u6c60\u8fd8\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u9010\u6e10\u52a0\u70ed,\u76f4\u5230\u6548\u7387\u8fbe\u5230100\uff05,\u6b64\u65f6\u5b83\u4f1a\u5f00\u59cb\u540c\u65f6\u8f93\u51fa\u84b8\u6c7d.\u4f60\u53ef\u4ee5\u4f7f\u7528\u5355\u65b9\u5757\u6216\u591a\u65b9\u5757\u7684\u84b8\u6c7d\u8f6e\u673a,\u4ece\u4e2d\u83b7\u53d6\u989d\u5916\u80fd\u91cf.%n%n\u8fd9\u4e24\u8005\u7ed3\u5408\u4f7f\u5176\u6bd4\u4f60\u4e00\u5f00\u59cb\u5efa\u9020\u7684\u5927\u578b\u71c3\u6c14\u8f6e\u673a\u66f4\u52a0\u5f3a\u5927.\u53ea\u6709\u5f53\u4f60\u89e3\u9501\u4e86\u66f4\u597d\u7684\u6750\u6599\u65f6,\u5b83\u624d\u80fd\u6bd4\u71c3\u6599\u7535\u6c60-MK-I\u4ea7\u51fa\u66f4\u591a\u7684\u80fd\u91cf."
                },
                {
                    "name": "\u6807\u51c6\u6838\u71c3\u6599:\u94c0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/191.png",
                    "x": 516.0,
                    "y": 228.0,
                    "tooltip": "\u6807\u51c6\u6838\u71c3\u6599:\u94c0",
                    "data": "\u8fd9\u4ec5\u4ec5\u662f\"\u666e\u901a\"\u7684\u94c0\u71c3\u6599.\u6ca1\u6709\u4ec0\u4e48\u7279\u6b8a\u7684...\u5b83\u4ea7\u751f\u7684\u80fd\u91cf\u662f\u948d\u76845\u500d,\u800c\u4ea7\u751f\u7684\u70ed\u91cf\u4e3a\u51764\u500d,\u540c\u65f6\u6301\u7eed\u65f6\u95f4\u4e3a\u51762/5.%n%n\u5927\u591a\u6570\u71c3\u6599\u68d2\u90fd\u5927\u540c\u5c0f\u5f02.\u901a\u5e38\u5728\u706b\u661f\u53ca\u5176\u536b\u661f\u4e0a\u83b7\u53d6\u94c0,\u522b\u5fd8\u4e86\u4ece\u948d\u4e2d\u4e5f\u53ef\u4ee5\u79bb\u5fc3\u51fa\u4e00\u70b9\u94c0.%n%n\u987a\u4fbf\u4e00\u63d0,\u6709\u4e00\u79cd'\u8109\u51b2'\u578b\u7684\u53cd\u5e94\u5806(\u5f53\u8fc7\u70ed\u540e\u5173\u95ed\u53cd\u5e94\u5806).\u5c06\u8fd9\u4e9b\u68d2\u5b50\u6253\u5305\u540e\u51b7\u9759\u4e00\u4e0b,\u8fd9\u6837\u53ef\u4ee5\u8ba9\u6bcf\u6839\u71c3\u6599\u68d2\u8fbe\u5230\u6700\u5927\u7684\u5229\u7528\u6548\u7387.\u5f53\u7136,\u4e00\u4e0d\u5c0f\u5fc3\u5c31\u662fBOOM."
                },
                {
                    "name": "\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1896.png",
                    "x": 516.0,
                    "y": 264.0,
                    "tooltip": "\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9",
                    "data": "\u8fd9\u4e9b...\u4e0d\u592a\u503c.\u5b8c\u5168\u53ef\u4ee5\u5c06\u5bcc\u96c6\u7845\u5ca9\u62ff\u53bb\u505a\u522b\u7684,\u6bd4\u5982\u653e\u8fdb\u7845\u5ca9\u53cd\u5e94\u5806\u53d1\u7535.\u5b83\u4eec\u5728\u6838\u53cd\u5e94\u5806\u4e2d\u7684\u5de5\u4f5c\u539f\u7406,\u4e0e\u94c0\u5b8c\u5168\u76f8\u540c,\u53ea\u662f\u6d88\u8017\u7684\u6750\u6599\u4e0e\u8f93\u51fa\u80fd\u91cf\u6709\u6240\u533a\u522b.%n%nPS\uff1a\u901a\u8fc7\u79bb\u5fc3\u7845\u5ca9\u7c89\u6216\u662f\u5904\u7406\u77ff\u77f3\u90fd\u53ef\u4ee5\u83b7\u5f97\u5bcc\u96c6\u7845\u5ca9(Nq+).%n%n\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u7845\u5ca9\u71c3\u6599\u68d2\u662f\u7528\u5bcc\u96c6\u7845\u5ca9\u505a\u7684...\u8fd9\u662f\u4e2a\u597d\u95ee\u9898!"
                },
                {
                    "name": "\u66f4\u591a\u84b8\u6c7d!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/70.png",
                    "x": 120.0,
                    "y": 84.0,
                    "tooltip": "\u66f4\u591a\u84b8\u6c7d!",
                    "data": "\u4f60\u51e0\u4e4e\u5b8c\u6210\u5b83\u4e86!\u53ea\u9700\u8981\u6700\u540e\u4e00\u4e2a\u5236\u4f5c\u6b65\u9aa4\u5c31\u53ef\u4ee5\u5230\u8fbe\u7b2c1\u9636\u7684\u9700\u6c42!\u7ee7\u7eed\u524d\u8fdb\u5427!%n%n\u8fd9\u79cd\u84b8\u6c7d\u8f6e\u673a\u53ef\u4ee5\u5c06\u84b8\u6c7d\u8f6c\u5316\u4e3aEU.\u4f60\u4e4b\u524d\u4f7f\u7528\u7684\u80fd\u6e90\u4e00\u6210\u4e0d\u53d8,\u4f46\u4ece\u6b64\u523b\u5f00\u59cb,\u4f60\u53ef\u4ee5\u751f\u4ea7EU,\u5e76\u901a\u8fc7\u7ebf\u7f06\u5c06\u5176\u8f93\u9001\u5230\u4f60\u7684\u673a\u5668\u5185,\u53d6\u4ee3\u539f\u5148\u9700\u8981\u901a\u8fc7\u7ba1\u9053\u5c06\u84b8\u6c7d\u76f4\u63a5\u9001\u5230\u673a\u5668\u5904.\u76f8\u6bd4\u9752\u94dc\u673a\u5668,\u7535\u529b\u673a\u5668\u65e0\u9700\u6392\u6c14\u53e3,\u4e14\u66f4\u52a0\u9ad8\u6548.%n%n\u53e6\u5916,\u4e4b\u540e\u4f60\u5f88\u53ef\u80fd\u8fd8\u4f1a\u4ece\u84b8\u6c7d\u8f6c\u5411\u53e6\u4e00\u79cd\u71c3\u6599."
                },
                {
                    "name": "\u5927\u82ef\u73af\u795e\u6559\u5723\u5802",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1869.png",
                    "x": 156.0,
                    "y": 120.0,
                    "tooltip": "\u5927\u82ef\u73af\u795e\u6559\u5723\u5802",
                    "data": "MV\u71c3\u6c14\u8f6e\u673a\u662f\u82ef\u7684\u5b8c\u7f8e\u642d\u6863,\u73b0\u5728\u4f60\u80fd\u771f\u6b63\u5236\u9020\u5b83\u4e86.\u8bf7\u5230\"\u5927\u4f17\u751f\u7269\u5b66\"\u4efb\u52a1\u680f\u67e5\u770b\u8be6\u60c5,\u5b66\u4e60\u5982\u4f55\u81ea\u52a8\u5316\u5236\u9020\u5927\u91cf\u7684\u82ef,\u6216\u8005\u76f4\u63a5\u67e5\u770bNEI\u4e5f\u884c.\u4ece\u6811\u6728\u4e2d\u83b7\u53d6\u82ef\u662f\u53ef\u518d\u751f\u7684,\u4e5f\u662f\u4e00\u79cd\u53d1\u7535\u7684\u5f3a\u529b\u624b\u6bb5,\u800c\u4e14\u5982\u679c\u4f60\u4f7f\u7528\u65b0\u89e3\u9501\u7684\u591a\u65b9\u5757\u673a\u5668\u5bf9\u4ea7\u7ebf\u4e0d\u65ad\u5347\u7ea7\u7684\u8bdd,\u5b83\u80fd\u652f\u6301\u4f60\u6570\u4e2a\u9636\u6bb5\u7684\u53d1\u5c55.%n%n\u9002\u65f6\u653e\u5f03\u84b8\u6c7d\u662f\u4e2a\u660e\u667a\u7684\u51b3\u5b9a,\u56e0\u4e3a\u968f\u7740\u7528\u7535\u9700\u6c42\u7684\u4e0d\u65ad\u63d0\u5347,\u4f60\u9700\u8981\u5de8\u5927\u7684\u7ba1\u9053\u6765\u8f93\u9001\u84b8\u6c7d,\u800c\u4e14\u73b0\u9636\u6bb5\u7684\u84b8\u6c7d\u8f6e\u673a\u6548\u7387\u8f83\u4f4e. \u76f8\u53cd,\u5236\u9020\u70ed\u89e3\u7089\u6216\u9ad8\u7ea7\u7126\u7089,\u8ba9\u6728\u70ad\u751f\u4ea7\u66f4\u52a0\u8fc5\u901f,\u518d\u4ece\u4e2d\u63d0\u70bc\u51fa\u82ef,\u901a\u5165\u71c3\u6c14\u8f6e\u673a\u53d1\u7535,\u592a\u5999\u4e86,\u6211\u5927\u82ef\u73af\u795e\u6559!"
                },
                {
                    "name": "\u8fd9\u4e0d\u662f\u53bb\u592a\u7a7a\u7684\u8def",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2762.png",
                    "x": 336.0,
                    "y": 300.0,
                    "tooltip": "\u8fd9\u4e0d\u662f\u53bb\u592a\u7a7a\u7684\u8def",
                    "data": "\u8fd9\u53f0\u673a\u5668\u53ef\u4ee5\u5229\u7528\u706b\u7bad\u71c3\u6599\u53d1\u7535.\u60f3\u8981\u77e5\u9053\u600e\u4e48\u9020\u706b\u7bad\u71c3\u6599,\u4f60\u5f97\u53bb\"\u592a\u7a7a\u7ade\u8d5b\"\u7ae0\u8282\u770b\u770b.GT++\u6709\u4e00\u7cfb\u5217\u4e13\u6709\u7684\u706b\u7bad\u71c3\u6599,\u5c06\u5b83\u4eec\u81ea\u52a8\u5316\u53ef\u4ee5\u7528\u6765\u5728\u6b64\u591a\u65b9\u5757\u673a\u5668\u4e2d\u53d1\u7535,\u540c\u65f6\u8fd8\u53ef\u4ee5\u4e3a\u4f60\u63d0\u4f9b\u63a2\u7d22\u661f\u8fb0\u5927\u6d77\u65e0\u5c3d\u7684\u71c3\u6599.%n%n\u5173\u4e8e\u706b\u7bad\u5f15\u64ce\u7684\u6570\u5b66\u8ba1\u7b97\u975e\u5e38\u590d\u6742.\u8bf7\u67e5\u770b\u63a7\u5236\u5668\u65b9\u5757\u7684tooltip\u4e86\u89e3\u8be6\u60c5,\u4e0d\u8fc7\u5927\u6982\u7684\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a\u63d0\u4f9b\u8db3\u91cf\u7684\u4e8c\u6c27\u5316\u78b3,\u9009\u62e9\u4f60\u60f3\u8981\u83b7\u5f97\u591a\u5c11EU/t\u7684\u8f93\u51fa,\u6839\u636e\u4f7f\u7528\u7684\u71c3\u6599\u79cd\u7c7b\u8ba1\u7b97\u6240\u9700\u7684\u71c3\u6599\u91cf,\u518d\u6839\u636eEU/t\u503c\u63d0\u4f9b\u8db3\u91cf\u7684\u6db2\u6c22\u8fdb\u884c\u589e\u538b.%n%n\u4f60\u7ec8\u5f52\u4f1a\u5c06\u706b\u7bad\u5f15\u64ce\u589e\u538b\u7684,\u6709\u4ee5\u4e0b\u51e0\u70b9\u539f\u56e0.\u5047\u8bbe\u4f60\u81f3\u5c11\u6709\u4e00\u4e2aIV\u52a8\u529b\u4ed3(\u7f13\u51b2),\u60f3\u8981\u5728\u6b63\u5e38\u6a21\u5f0f\u8f93\u51fa\u63a5\u8fd1\u52a8\u529b\u4ed3\u6781\u9650\u7684\u7535\u529b,\u71c3\u6599\u6548\u7387\u5c06\u4f1a\u8f83\u4f4e,\u4f46\u5728\u589e\u538b\u6a21\u5f0f\u4e0b\u5c31\u4f1a\u597d\u5f88\u591a.\u53e6\u5916,\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u4e0d\u4f1a\u8fde\u7eed\u6d88\u8017\u71c3\u6599,\u800c\u662f\u5728\u6d88\u8017\u548c\u4e0d\u6d88\u8017\u4e4b\u95f4\u95f4\u9694\u4e00\u79d2,\u540c\u65f6\u8f93\u51fa\u7684\u80fd\u91cf\u4fdd\u6301\u4e0d\u53d8.\u800c\u5728\u6b64\u57fa\u7840\u4e0a\u589e\u538b\u53ef\u4ee5\u5e26\u6765\u66f4\u597d\u7684\u71c3\u6599\u6548\u7387.\u914d\u5408\u706b\u7bad\u71c3\u6599\u8d85\u9ad8\u7684\u71c3\u503c,\u706b\u7bad\u5f15\u64ce\u7684\u8f93\u51fa\u529f\u7387\u5c06\u975e\u5e38\u53ef\u89c2.%n%n\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u53ef\u4ee5\u5728IV\u9636\u6bb5\u5236\u9020.%n%n WIKI \u706b\u7bad\u71c3\u6599\u4ea7\u7ebf\uff1agtnh.huijiwiki.com/p/742"
                },
                {
                    "name": "This is your Kryptonite!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5875748521763021702.png",
                    "x": 312.0,
                    "y": 492.0,
                    "tooltip": "This is your Kryptonite!",
                    "data": "Here's the special Titanium I promised you. GT++ materials enter the fray here, both with this and the Titansteel you need to add to that to make what comes next!\n\nThat step only comes after fusing Niobium and Zinc into Krypton Plasma. You get a rarer noble gas here than before, the next one will be Xenon. This recipe matches in speed with the next one, which uses Krypton to make Astral Titanium Plasma, by adding in the final plasma of the previous chain, Force Plasma! That's right, each chain needs everything from before to continue. \n\nOnce you have Astral Titanium Plasma, you can move on to the final mk2 step."
                },
                {
                    "name": "2\u9636\u7ebf\u5708",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2960.png",
                    "x": 300.0,
                    "y": 444.0,
                    "tooltip": "2\u9636\u7ebf\u5708",
                    "data": "2\u9636\u7ebf\u5708\u53ef\u4ee5\u89e3\u9501MkIV\u3001MkV\u71c3\u6599."
                },
                {
                    "name": "3\u9636\u7ebf\u5708",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2966.png",
                    "x": 336.0,
                    "y": 444.0,
                    "tooltip": "3\u9636\u7ebf\u5708",
                    "data": "\u4e3a\u4e86\u8d85\u9891! \u7b49\u7b49,\u4f60\u60f3\u8d85\u9891UXV\u5408\u6210\u8868?"
                },
                {
                    "name": "Tier 4 Coil",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5155982425555565036.png",
                    "x": 372.0,
                    "y": 444.0,
                    "tooltip": "Tier 4 Coil",
                    "data": "This upgrade will allow you to create fuel even faster than before and with an alternative recipe for MKVI fuel!\n...but do you really need it?"
                },
                {
                    "name": "\u6c5e\u592a\u591a\u4e86?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2253.png",
                    "x": 624.0,
                    "y": 120.0,
                    "tooltip": "\u6c5e\u592a\u591a\u4e86?",
                    "data": "\u4e00\u5c0f\u65f6\u53c8\u4e00\u5c0f\u65f6...\u4e00\u5929\u53c8\u4e00\u5929...\u4e00\u5468\u53c8\u4e00\u5468...\u4f60\u4e3a\u4e86\u7ea2\u5b9d\u77f3(\u94ec)\u5904\u7406\u4e86\u6210\u5428\u7684\u7ea2\u77f3,\u4e5f\u79ef\u6512\u4e86\u5927\u91cf\u7684\u6c5e,\u4e0d\u77e5\u9053\u80fd\u7528\u6765\u505a\u4ec0\u4e48.%n%n\u4f60\u53ef\u4ee5\u5c06\u5176\u90fd\u5b58\u5230\u8d85\u7ea7\u7f38\u91cc,\u4f46\u4e8b\u5b9e\u4e0a\u6ca1\u4eba\u9700\u8981\u90a3\u4e48\u591a\u6b21\u6c2f\u9178.\u4f60\u53ef\u4ee5\u5236\u9020\u4e00\u53f0\u9178\u6027\u53d1\u7535\u673a,\u81f3\u5c11\u80fd\u767d\u5ad6\u70b9\u7535.%n%n\u8bd1\u8005\u6ce8:\u4f7f\u7528\u6c5e\u5316\u5b66\u6d78\u6d17\u5904\u7406\u67d0\u4e9b\u77ff\u7269\u53ef\u4ee5\u589e\u4ea7."
                },
                {
                    "name": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2819.png",
                    "x": 660.0,
                    "y": 84.0,
                    "tooltip": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)",
                    "data": "\u7136\u540e\u6536\u83b7\u7535\u529b\u4f5c\u4e3a\u56de\u9988.\u8981\u662f\u4f60\u7684\u4e0b\u754c\u4e4b\u661f\u591a\u5230\u7528\u4e0d\u5b8c,\u4e22\u5230\u8fd9\u91cc\u5934\u5c31\u662f\u5b83\u6700\u597d\u7684\u5f52\u5bbf\u4e86.\u8fd9\u73a9\u610f\u53ef\u4ee5\u5403\u6389\u51e0\u4e4e\u4efb\u4f55\u9b54\u6cd5\u6750\u6599(\u5927\u90e8\u5206\u975e\u5408\u6210\u7269\u54c1)."
                },
                {
                    "name": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2820.png",
                    "x": 660.0,
                    "y": 120.0,
                    "tooltip": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)",
                    "data": "\u8fd9\u662fMV\u7248\u672c."
                },
                {
                    "name": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(HV)",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2821.png",
                    "x": 660.0,
                    "y": 156.0,
                    "tooltip": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(HV)",
                    "data": "\u8fd9\u662fHV\u7248\u672c."
                },
                {
                    "name": "\u68d8\u624b\u7684\u6838\u71c3\u6599:MOX",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/192.png",
                    "x": 552.0,
                    "y": 228.0,
                    "tooltip": "\u68d8\u624b\u7684\u6838\u71c3\u6599:MOX",
                    "data": "\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b,MOX\u7684\u53d1\u7535\u4e0e\u94c0\u68d2\u76f8\u540c,\u4f46\u968f\u7740\u53cd\u5e94\u5806\u5347\u6e29,MOX\u53ef\u4ee5\u4ea7\u51fa\u66f4\u591a\u80fd\u91cf.\u60f3\u8981\u5229\u7528\u8fd9\u4e00\u4f18\u52bf,\u4f60\u9700\u8981\u5c1d\u8bd5\u8bbe\u8ba1\u51fa\u4e00\u79cd\u63a5\u8fd1\u6781\u9650\u6e29\u5ea6\u7684\u70ed\u5e73\u8861\u5806.\u5b83\u7684\u71c3\u70e7\u65f6\u95f4\u53ea\u6709\u94c0\u68d2\u7684\u4e00\u534a,\u4e14\u5f53\u53cd\u5e94\u5806\u6e29\u5ea6\u8d85\u8fc750\uff05\u65f6,MOX\u68d2\u4f1a\u653e\u51fa\u66f4\u591a\u70ed\u91cf.\u4e00\u6839\u68d2\u5b50\u9876\u6240\u6709\u5f15\u64ce!%n%n\u5982\u679c\u6ca1\u6709\u5176\u4ed6\u65b9\u5f0f\u83b7\u53d6\u949a\u7684\u8bdd,\u4f60\u9700\u8981\u5148\u8fd0\u884c\u4e00\u4e2a\u666e\u901a\u7684\u94c0\u5806,\u518d\u79bb\u5fc3\u67af\u7aed\u94c0.\u522b\u5fd8\u4e86MOX\u68d2\u4e0d\u6b62\u4e00\u79cd!%n%n\u8bf7\u786e\u4fdd\u5728\u521b\u9020\u6a21\u5f0f\u6d4b\u8bd5\u8fc7\u4e14/\u6216\u505a\u597d\u9632\u7206\u5de5\u4f5c!"
                },
                {
                    "name": "\u68d8\u624b\u7684\u6838\u71c3\u6599II:\u8d85\u80fd\u7845\u5ca9",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1897.png",
                    "x": 552.0,
                    "y": 264.0,
                    "tooltip": "\u68d8\u624b\u7684\u6838\u71c3\u6599II:\u8d85\u80fd\u7845\u5ca9",
                    "data": "\u5b83\u4eec\u540c\u6837\u610f\u4e49\u4e0d\u5927,\u6211\u53ea\u60f3\u628a\u6750\u6599\u8fd8\u7ed9\u4f60... \u4e0e\u666e\u901aMOX\u7684\u533a\u522b\u4ec5\u4ec5\u662f\u6750\u6599\u548c\u8f93\u51fa\u4e0d\u540c.%n%nPS\uff1a\u901a\u8fc7\u79bb\u5fc3\u7845\u5ca9\u7c89\u6216\u5bcc\u96c6\u7845\u5ca9\u7c89\u3001\u5904\u7406\u77ff\u7269,\u6216\u70ed\u529b\u79bb\u5fc3\u67af\u7aed\u7845\u5ca9\u71c3\u6599\u68d2\u90fd\u53ef\u4ee5\u83b7\u5f97\u8d85\u80fd\u7845\u5ca9(Nq*)."
                },
                {
                    "name": "\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1338.png",
                    "x": 84.0,
                    "y": 192.0,
                    "tooltip": "\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd",
                    "data": "\u4e09\u91cd\u538b\u7f29\u7684\u592a\u9633\u80fd. \u55ef,\u90a3\u5c31\u5bf9\u4e86. \u5b83\u4eec\u76f8\u6bd4\u53cc\u91cd\u538b\u7f29\u592a\u9633\u80fd\u8d35\u4e00\u70b9,\u5171\u8ba1\u9700\u8981576\u4e2a\u592a\u9633\u80fd. \u4f46\u662f\u5b83\u4eec\u53ef\u53d1\u75351000GT-EU/t,\u4e0d\u9700\u8981\u6e05\u6d17.\u600e\u4e48\u4f1a\u8fd9\u6837\uff1f \u9b54\u6cd5\u5927\u6cd5\u597d."
                },
                {
                    "name": "Turbine Housing",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5852276776698153963.png",
                    "x": 192.0,
                    "y": 336.0,
                    "tooltip": "Turbine Housing",
                    "data": "At UV you unlock the ability to automatically refill turbines with rotors.\n\nXL turbines do it by default much earlier..."
                },
                {
                    "name": "\u6da1\u8f6e\u65f6\u95f4",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1201.png",
                    "x": 156.0,
                    "y": 336.0,
                    "tooltip": "\u6da1\u8f6e\u65f6\u95f4",
                    "data": "\u4f60\u5d2d\u65b0\u7684\u7b49\u79bb\u5b50\u6da1\u8f6e\u9700\u8981\u4e00\u4e2a\u5168\u65b0\u7684\u8f6c\u5b50\u6765\u9a71\u52a8\u5b83.%n%n\u4f60\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55GT\u6750\u6599\u5236\u9020\u6da1\u8f6e,\u4f46\u662f\u76ee\u524d\u6da1\u8f6e\u7684\u6700\u4f73\u6750\u6599\u662f\u666e\u901a\u9f99\u952d.  \u4e09\u949b\u6750\u8d28\u7684\u6da1\u8f6e\u5c06\u63d0\u4f9b\u6700\u5927\u7684EU/t\u8f93\u51fa. \u800c\u4e2d\u5b50\u6750\u8d28\u7684\u6da1\u8f6e\u5c06\u63d0\u4f9b\u6700\u9ad8\u7684\u8010\u4e45,\u4f46\u662f\u6548\u7387\u6bd4\u8f83\u4f4e,\u6574\u4f53\u7684\u6da1\u8f6e\u673a\u529f\u7387\u5c06\u6bd4\u8f83\u5c0f. \u89c9\u9192\u9f99\u952d\u6750\u8d28\u7684\u6da1\u8f6e\u5c06\u4f1a\u63d0\u4f9b\u6bd4\u8f83\u5e73\u8861\u7684\u5c5e\u6027.\u8bf7\u5148\u5728\u521b\u9020\u6a21\u5f0f\u6d4b\u8bd5!%n%n\u4f7f\u7528\u6da1\u8f6e\u65f6,\u9700\u8981\u6ce8\u610f\u6d41\u901f.\u800c\u6240\u8c13\u6700\u4f73\u6d41\u901f,\u5373\u6da1\u8f6e\u6240\u5217\u4e0d\u540c\u71c3\u6599\u7684\u6700\u4f73\u6d41\u91cf,\u9664\u4ee5\u5bf9\u5e94\u7684\u71c3\u503c.\u4f60\u8fd8\u53ef\u4ee5\u76f4\u63a5\u7528\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668(Large-Turbine-Calculator)[\u5728\u4e3b\u6570\u636e\u8868\u683c(spreadsheet)\u5185\u6709\u4e2a\u94fe\u63a5,\u6307\u5411discord\u4e2d\u7684\u8ba1\u7b97\u5668];\u8fd8\u53ef\u4ee5\u5728\u5927\u578b\u6da1\u8f6e\u8fd0\u884c\u65f6(\u53ea\u9700\u8981\u63d0\u4f9b\u5f88\u5c11\u7684\u71c3\u6599\u8ba9\u5b83\u52a8\u8d77\u6765\u5c31\u884c),\u76f4\u63a5\u626b\u63cf\u4e3b\u65b9\u5757,\u5373\u53ef\u83b7\u77e5\u8be5\u6da1\u8f6e\u8f6c\u5b50\u4f7f\u7528\u67d0\u79cd\u71c3\u6599\u5bf9\u5e94\u7684\u6700\u4f73\u6d41\u901f. \u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u6216\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,\u786e\u4fdd\u6240\u63d0\u4f9b\u7684\u71c3\u6599\u901f\u5ea6\u4e0e\u6da1\u8f6e\u7684\u6700\u4f73\u6d41\u901f\u5339\u914d,\u4ee5\u53d1\u6325\u6700\u9ad8\u7684\u71c3\u6599\u6548\u7387;\u4e0d\u8fc7\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u8d85\u51fa\u6b64\u6700\u4f73\u6d41\u901f,\u4ee5\u964d\u4f4e\u6548\u7387\u4e3a\u4ee3\u4ef7,\u83b7\u5f97\u66f4\u9ad8\u7684\u529f\u7387\u8f93\u51fa,\u800c\u84b8\u6c7d\u6da1\u8f6e\u5728\u8d85\u51fa\u6700\u4f73\u6d41\u901f\u540e\u7684\u6548\u7387\u4fdd\u6301\u662f\u6700\u5dee\u7684.\u5728HV\u9636\u6bb5,\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528IC2\u7684\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,HV\u9636\u6bb5\u4ee5\u540e\u5c31\u80fd\u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u8986\u76d6\u677f\u4e86.%n%n\u518d\u6b21\u91cd\u590d,\u5f53\u4f60\u4e3a\u6da1\u8f6e\u63d0\u4f9b\u8d85\u8fc7\u6700\u4f73\u6d41\u901f\u7684\u71c3\u6599\u65f6(\u79f0\u4e4b\u4e3a\u8d85\u8f7d\u72b6\u6001),\u6da1\u8f6e\u7684\u8f93\u51fa\u529f\u7387\u63d0\u9ad8,\u4f46\u71c3\u6599\u6548\u7387\u964d\u4f4e,\u540c\u65f6\u6700\u9ad8\u8f93\u51fa\u529f\u7387\u53d6\u51b3\u4e8e\u6da1\u8f6e\u8f6c\u5b50\u7c7b\u578b\u53ca\u5176\u8d85\u8f7d\u6548\u7387\u7b49\u7ea7.\u5bf9\u4e8e\u7b49\u79bb\u5b50\u6da1\u8f6e,\u8d85\u8f7d\u6548\u7387\u7b49\u7ea71\uff1a\u6700\u9ad8\u8d85\u8f7d250\uff05,\u8f93\u51fa\u529f\u7387158\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea72\uff1a\u6700\u9ad8\u8d85\u8f7d400\uff05,\u8f93\u51fa\u529f\u7387214\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea73\uff1a\u6700\u9ad8\u8d85\u8f7d550\uff05,\u8f93\u51fa\u529f\u7387301\uff05.\u8d8a\u63a5\u8fd1\u8d85\u8f7d\u6781\u9650,\u635f\u5931\u7684\u71c3\u6599\u6548\u7387\u8d8a\u591a.%n%n\u51b3\u5b9a\u6743\u5728\u4f60!%n%n\u8bd1\u8005\u6ce8\uff1a\u8ba1\u7b97\u6d41\u91cf\u65f6\u6ce8\u610f\u5355\u4f4d\u6362\u7b97,\u5e76\u5411\u4e0a\u53d6\u6574.%n%n\u5173\u4e8e\u805a\u53d8\u7684\u66f4\u591a\u989d\u5916\u4fe1\u606f,\u8bf7\u67e5\u770b\u65b0\u4efb\u52a1\u7ae0\u8282\"\u5f3a\u5927\u7684\u6838\u7269\u7406\"."
                },
                {
                    "name": "2M\u6da1\u8f6e",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3187.png",
                    "x": 156.0,
                    "y": 408.0,
                    "tooltip": "2M\u6da1\u8f6e",
                    "data": "\u5e0c\u671b\u4e0d\u8981\u8d85\u8fc7\u4e00\u624b\u4e4b\u6570.\u8fd9\u91cc\u7684\u76ee\u6807\u662f\u8ba9\u6bcf\u53f0\u6da1\u8f6e\u90fd\u80fd\u8f93\u51fa\u63a5\u8fd12M-EU/t.%n%n\u600e\u4e48\u505a\u5230\u5462?\u770b\u770bUV\u52a8\u529b\u4ed3\u7684\u5408\u6210\u8868\u5427,\u7136\u540e\u4f60\u5c31\u6709\u4e86\u65b0\u7684\u76ee\u6807.\u7b49\u4f60\u5236\u9020\u51faUV\u52a8\u529b\u4ed3\u540e,\u6bcf\u53f0\u914d\u5907\u5b83\u7684\u6da1\u8f6e\u90fd\u53ef\u4ee5\u5c06\u8f93\u51fa\u529f\u7387\u4e0a\u9650\u63d0\u5347\u4e3a2,097,152-EU/t,\u8fd9\u518d\u6b21\u62d3\u5c55\u4e86\u4f60\u9009\u62e9\u6da1\u8f6e\u7684\u8303\u56f4.\u4ee5\u4e0b\u6709\u4e00\u4e9b\u4e0d\u9519\u7684\u9009\u62e9\uff1a%n%n\u5927\u578b\u5b87\u5b99\u4e2d\u5b50\u6001\u7d20\u6da1\u8f6e,\u6548\u7387220\uff05,\u8f93\u51fa\u529f\u73871,330,560-EU/t%n\u5927\u578b\u89c9\u9192\u9f99\u952d\u6da1\u8f6e,\u6548\u7387190\uff05,\u8f93\u51fa\u529f\u7387478,800-EU/t%n\u5927\u578b\u4e09\u5143\u91d1\u5c5e\u6da1\u8f6e,\u6548\u7387180\uff05,\u8f93\u51fa\u529f\u73871,452,520-EU/t%n%n\u73b0\u5728,\u4f60\u53ef\u80fd\u5728\u8003\u8651\u4fee\u5efa\u66f4\u591a\u76841\u7ea7\u6838\u805a\u53d8\u53cd\u5e94\u5806,\u7528\u4ee5\u5904\u7406\u5176\u4ed6\u6750\u6599.\u5176\u5b9e\u5373\u4fbf\u4f60\u505c\u4e0b\u751f\u4ea7\u7b49\u79bb\u5b50\u4f53\u7684\u53cd\u5e94\u5806,\u91cd\u542f\u6d88\u8017\u7684EU\u4e5f\u4e0d\u52301\u6876\u7b49\u79bb\u5b50\u4f53,\u6240\u4ee5\u5e94\u8be5\u6ca1\u4ec0\u4e48\u5927\u4e0d\u4e86\u7684.%n%n\u5236\u9020\u4e00\u4e2aUV\u52a8\u529b\u4ed3(\u666e\u901a\u6216\u7f13\u51b2\u7684)\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1."
                },
                {
                    "name": "\u8010\u8d85\u9ad8\u6e29\u7f51",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3038.png",
                    "x": 228.0,
                    "y": 372.0,
                    "tooltip": "\u8010\u8d85\u9ad8\u6e29\u7f51",
                    "data": "*\u62cd\u62cd\u8010\u8d85\u9ad8\u6e29\u7f51* \u8fd9\u4e2a\u574f\u5c0f\u5b50\u53ef\u4ee5\u627f\u53d7\u5de8\u91cf\u70ed\u91cf!%n%n\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u6234\u68ee\u7403\u591a\u65b9\u5757\u7ed3\u6784\u7684\u8bdd,\u81ea\u52a8\u5316\u5408\u6210\u8010\u8d85\u9ad8\u6e29\u7f51\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u524d\u63d0\u6761\u4ef6\u4e4b\u4e00."
                },
                {
                    "name": "\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1900.png",
                    "x": 480.0,
                    "y": 300.0,
                    "tooltip": "\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39",
                    "data": "\u71c3\u6599\u68d2\u7ed3\u675f\u4e00\u4e2a\u5468\u671f\u540e\u4f1a\u53d8\u4e3a\u67af\u7aed\u7684\u71c3\u6599\u68d2.\u4f60\u53ef\u4ee5\u5c06\u5176\u70ed\u79bb\u4ee5\u56de\u6536\u90e8\u5206\u6750\u6599. \u6839\u636e\u71c3\u6599\u68d2\u7684\u4e0d\u540c,\u83b7\u5f97\u7684\u7269\u54c1\u4e5f\u4e0d\u540c,\u8bf7\u67e5\u770bNEI\u6216wiki\u4ee5\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f."
                },
                {
                    "name": "\u5355\u6da1\u8f6eUV\u53d1\u7535",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3165.png",
                    "x": 156.0,
                    "y": 372.0,
                    "tooltip": "\u5355\u6da1\u8f6eUV\u53d1\u7535",
                    "data": "\u7b49\u4f60\u5230\u8fbeZPM\u9636\u6bb5,\u53ef\u4ee5\u5236\u9020ZPM\u52a8\u529b\u4ed3\u540e,\u6bcf\u53f0\u6da1\u8f6e\u7684\u8f93\u51fa\u529f\u7387\u53ef\u4ee5\u63d0\u9ad8\u5230524,288-EU/t.\u8fbe\u5230\u8fd9\u4e2a\u6570\u5b57\u540e,\u4f60\u5bf9\u6da1\u8f6e\u6750\u6599\u7684\u9009\u62e9\u9650\u5236\u5df2\u7ecf\u5c11\u5f88\u591a\u4e86,\u5e76\u4e14\u53ef\u4ee5\u663e\u8457\u589e\u52a0\u5355\u5806\u8f93\u51fa\u7684\u603b\u529f\u7387.\u53ea\u8981\u9009\u62e9\u5408\u9002\u7684\u6da1\u8f6e\u6750\u6599,\u4f60\u5c31\u53ef\u4ee5\u75283\u53f0\u5927\u578b\u7b49\u79bb\u5b50\u6da1\u8f6e\u6d88\u5316\u6389\u5355\u5806\u8f93\u51fa\u7684\u6240\u6709\u6c26\u79bb\u5b50,\u5efa\u8bae\u6750\u6599\u5982\u4e0b:%n%n\u5927\u578b\u9ad8\u8010\u4e45\u6027\u590d\u5408\u94a2\u6da1\u8f6e,\u6548\u7387230\uff05,\u8f93\u51fa\u529f\u7387202,860-EU/t%n\u5927\u578b\u539f\u5b50\u5206\u79bb\u50ac\u5316\u5242\u6da1\u8f6e,\u6548\u7387200\uff05,\u8f93\u51fa\u529f\u7387399,672-EU/t%n\u5927\u578b\u7cbe\u91d1\u6da1\u8f6e,\u6548\u7387180\uff05,\u8f93\u51fa\u529f\u7387170,010-EU/t%n\u5927\u578b\u9f99\u952d\u6da1\u8f6e,\u6548\u7387170\uff05,\u8f93\u51fa\u529f\u7387214,200-EU/t(\u8010\u4e45\u9ad8)%n\u5c0f\u578b\u7075\u5b9d\u6da1\u8f6e,\u6548\u7387170\uff05,\u8f93\u51fa\u529f\u7387342,720-EU/t(\u8010\u4e45\u6781\u9ad8)%n\u5927\u578b\u4e2d\u5b50\u6da1\u8f6e,\u6548\u7387160\uff05,\u8f93\u51fa\u529f\u7387241,920-EU/t(\u8010\u4e45\u6781\u9ad8)%n%n\u6839\u636e\u4f60\u4f7f\u7528\u6da1\u8f6e\u7684\u4e0d\u540c,\u6700\u7ec8\u7684\u6548\u7387\u4e0e\u8f93\u51fa\u529f\u7387\u4f1a\u6709\u5f88\u5927\u5dee\u5f02.\u4ee5\u4e0a\u6240\u5217\u6750\u6599\u4e2d,\u7075\u5b9d\u548c\u4e2d\u5b50\u6da1\u8f6e\u7684\u8010\u4e45\u6781\u9ad8,\u57fa\u672c\u53ef\u4ee5\u8fd1\u4e4e\u6c38\u4e45\u4f7f\u7528,\u800c\u53e6\u4e00\u4e9b\u6548\u7387\u66f4\u9ad8\u4f46\u9700\u8981\u65f6\u4e0d\u65f6\u8fdb\u884c\u66f4\u6362. \u5982\u679c\u4f60\u60f3\u8981\u5355\u6da1\u8f6e\u8f93\u51fa\u5c3d\u53ef\u80fd\u9ad8\u7684\u529f\u7387,\u5c3d\u53ef\u80fd\u8feb\u8fd1\u52a8\u529b\u4ed3\u7684\u6781\u9650\u7684\u8bdd,\u53ef\u4ee5\u63d0\u9ad8\u7b49\u79bb\u5b50\u4f53\u7684\u6d41\u91cf,\u4f46\u4e00\u5b9a\u8981\u5c0f\u5fc3!\u5343\u4e07\u4e0d\u8981\u8d85\u51fa\u52a8\u529b\u4ed3\u7684\u6781\u9650,\u800c\u4e14\u6d41\u91cf\u8d85\u8fc7\u6700\u4f73\u6d41\u91cf\u540e,\u968f\u7740\u6d41\u91cf\u7684\u8fdb\u4e00\u6b65\u63d0\u5347,\u6548\u7387\u4f1a\u9010\u6e10\u964d\u4f4e.\u66f4\u5177\u4f53\u7684\u6548\u7387\u635f\u5931\u503c,\u53ef\u4ee5\u5728LuV\u4efb\u52a1\u7ae0\u8282\u4e2d\u7684\"\u6da1\u8f6e\u65f6\u95f4\"\u4efb\u52a1\u5185\u627e\u5230.%n%n\u5236\u9020\u4e00\u4e2aZPM\u52a8\u529b\u4ed3(\u666e\u901a\u6216\u7f13\u51b2\u7684)\u5373\u53ef\u5b8c\u6210\u6b64\u4efb\u52a1."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(UV)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2587.png",
                    "x": 48.0,
                    "y": 336.0,
                    "tooltip": "\u592a\u9633\u4e4b\u529b(UV)1x1",
                    "data": "\u767d\u5929\u65f6\u4ea7\u751f1A\u7684UV\u7535. \u5982\u679c\u4f60\u7684\u57fa\u5730\u6240\u5728\u7ef4\u5ea6\u662f\u6c38\u663c\u7684\u8bdd\u90a3\u5c31\u592a\u68d2\u4e86(\u6bd4\u5982\u82b1\u56ed\u4e16\u754c)."
                },
                {
                    "name": "\u6563\u70ed1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/197.png",
                    "x": 552.0,
                    "y": 192.0,
                    "tooltip": "\u6563\u70ed1",
                    "data": "\u4f60\u4e0d\u80fd\u8ba9\u70ed\u91cf\u805a\u96c6\u5728\u53cd\u5e94\u5806\u5185\u90e8,\u6700\u7ec8\u4f60\u9700\u8981\u5c06\u53cd\u5e94\u5806\u5185\u90e8\u7684\u70ed\u91cf\u6563\u53d1\u7684\u5927\u6c14\u4e2d. \u4e0d\u540c\u7684\u6563\u70ed\u7247\u6709\u4e0d\u540c\u7684\u6563\u70ed\u80fd\u529b,\u4f60\u9700\u8981\u627e\u51fa\u54ea\u4e00\u79cd\u6563\u70ed\u7247\u9002\u5408\u7528\u5728\u4f60\u8bbe\u8ba1\u7684\u53cd\u5e94\u5806\u4e2d. \u4e0e\u5176\u4ed6\u4efb\u52a1\u4e00\u6837,\u8981\u4e48\u901a\u8bfbwiki\u540e\u8bd5\u7740\u7406\u89e3\u53cd\u5e94\u5806\u7684\u5de5\u4f5c\u539f\u7406,\u8981\u4e48\u76f4\u63a5\u6284\u4f5c\u4e1a..."
                },
                {
                    "name": "Welcome to the Plasma Chain",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5758255961960012806.png",
                    "x": 132.0,
                    "y": 492.0,
                    "tooltip": "Welcome to the Plasma Chain",
                    "data": "Hello there! If you've unlocked fusion, you can start this questline, but keep in mind that it's divided into three segments (the three fusion chains): one for each tier of Fusion Reactor, from Mk1 to Mk3.\n\nThere is a spreadsheet for all these chains, although it has some reactor count numbers that aren't right. To see it, check the Excel spreadsheet that set these numbers, in the following Github link:[url]https://github.com/GTNewHorizons/GTplusplus/pull/669[/url]\n\nThese quests follow the process of creating some truly powerful plasmas that are useful for power generation at the beginning of endgame, when you've scaled up your setup to a Compact Fusion Reactor and XL Plasma Turbines. As you might have seen before, those huge turbines can go very fast with good materials, like Trinium or Infinity, but they will apply EU/t penalties according to the fuel value of the plasma used. This means that Helium and Tin Plasma are both much weaker there than they were in Large Plasma Turbines.\n\nThe end product of this whole process is Celestial Tungsten Plasma, which has no penalties even at Spacetime and can somewhat match what Helium Plasma would have produced, per compact reactor. The last step is the slowest, but, if there are no other bottlenecks, you can expect around over 8 billion EU/t assuming a single compact doing the last step with huge infinity turbines in a plasma XL.\n\nHowever, getting there won't be easy. This whole process uses 15 fusion recipes in total, and a lot more material automation than any of the simple fusion setups. This questline will help explain what is simple, not simple, or possibly a bottleneck. If you complete this, you will be sustained in powergen until the Dyson Swarm, or whatever other option appears later on, and it will continue being useful later on!"
                },
                {
                    "name": "\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/783.png",
                    "x": 120.0,
                    "y": 192.0,
                    "tooltip": "\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19",
                    "data": "\u4f60\u7684\u57fa\u7840\u84b8\u6c7d\u8f6e\u673a\u592a\u5360\u7a7a\u95f4\uff1f\u8be5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u4e86.\u8fd9\u53f0\u5927\u578b\u84b8\u6c7d\u8f6e\u673a\u53ef\u4ee5\u5e2e\u52a9\u4f60\u751f\u4ea7\u5927\u91cf\u7684\u80fd\u6e90.\u5b83\u8fd8\u80fd\u4e3a\u4f60\u751f\u4ea7\u84b8\u998f\u6c34,\u4e0d\u8fc7\u4f60\u6700\u597d\u5faa\u73af\u5229\u7528\u8fd9\u4e9b\u6c34. \u522b\u5fd8\u4e86\u4e3a\u5b83\u5236\u9020\u4e00\u4e2a\u6da1\u8f6e\u5e76\u653e\u5165\u63a7\u5236\u5668\u7684GUI\u4e2d,\u5426\u5219\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u5c31\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c.%n%n\u6bcf\u79cd\u6da1\u8f6e\u90fd\u6709\u7279\u5b9a\u7684\u6700\u4f73\u6d41\u91cf,\u800c\u84b8\u6c7d\u53c8\u662f\u71c3\u6599\u6548\u7387\u6700\u9ad8\u7684\u5de5\u8d28,\u5177\u4f53\u6570\u503c\u5982\u6da1\u8f6e\u7684tooltip\u6240\u793a.\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u8986\u76d6\u677f,\u7cbe\u786e\u8c03\u6574\u6d41\u91cf\u4ee5\u5339\u914d\u5404\u79cd\u6700\u4f73\u6d41\u91cf,\u4e0d\u8fc7\u4f60\u4e5f\u53ef\u4ee5\u8d85\u51fa\u6700\u4f73\u6d41\u91cf\u4ee5\u83b7\u5f97\u66f4\u9ad8\u7684\u529f\u7387\u8f93\u51fa,\u4e0d\u8fc7\u4ee3\u4ef7\u662f\u71c3\u6599\u6548\u7387\u7684\u964d\u4f4e.\u4f60\u53ef\u4ee5\u5236\u9020\u56db\u79cd\u5c3a\u5bf8\u7684\u6da1\u8f6e\u8f6c\u5b50,\u8d8a\u5927\u7684\u8f6c\u5b50\u53ef\u4ee5\u63d0\u4f9b\u8d8a\u9ad8\u7684\u529f\u7387\u8f93\u51fa,\u4f46\u5176\u6548\u7387\u6709\u6240\u4e0d\u540c.\u4e00\u822c\u6765\u8bf4,\u5927\u578b\u6da1\u8f6e\u8f6c\u5b50\u6700\u597d,\u56e0\u4e3a\u5b83\u7684\u6548\u7387\u6700\u9ad8,\u5e76\u4e14\u62e5\u6709\u4e0d\u9519\u7684\u6700\u4f73\u6d41\u91cf.%n%n\u4f7f\u7528\u6da1\u8f6e\u65f6,\u9700\u8981\u6ce8\u610f\u6d41\u901f.\u800c\u6240\u8c13\u6700\u4f73\u6d41\u901f,\u5373\u6da1\u8f6e\u6240\u5217\u4e0d\u540c\u71c3\u6599\u7684\u6700\u4f73\u6d41\u91cf,\u9664\u4ee5\u5bf9\u5e94\u7684\u71c3\u503c.\u4f60\u8fd8\u53ef\u4ee5\u76f4\u63a5\u7528\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668(Large-Turbine-Calculator)[\u5728\u4e3b\u6570\u636e\u8868\u683c(spreadsheet)\u5185\u6709\u4e2a\u94fe\u63a5,\u6307\u5411discord\u4e2d\u7684\u8ba1\u7b97\u5668];\u8fd8\u53ef\u4ee5\u5728\u5927\u578b\u6da1\u8f6e\u8fd0\u884c\u65f6(\u53ea\u9700\u8981\u63d0\u4f9b\u5f88\u5c11\u7684\u71c3\u6599\u8ba9\u5b83\u52a8\u8d77\u6765\u5c31\u884c),\u76f4\u63a5\u626b\u63cf\u4e3b\u65b9\u5757,\u5373\u53ef\u83b7\u77e5\u8be5\u6da1\u8f6e\u8f6c\u5b50\u4f7f\u7528\u67d0\u79cd\u71c3\u6599\u5bf9\u5e94\u7684\u6700\u4f73\u6d41\u901f. \u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u6216\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,\u786e\u4fdd\u6240\u63d0\u4f9b\u7684\u71c3\u6599\u901f\u5ea6\u4e0e\u6da1\u8f6e\u7684\u6700\u4f73\u6d41\u901f\u5339\u914d,\u4ee5\u53d1\u6325\u6700\u9ad8\u7684\u71c3\u6599\u6548\u7387;\u4e0d\u8fc7\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u8d85\u51fa\u6b64\u6700\u4f73\u6d41\u901f,\u4ee5\u964d\u4f4e\u6548\u7387\u4e3a\u4ee3\u4ef7,\u83b7\u5f97\u66f4\u9ad8\u7684\u529f\u7387\u8f93\u51fa,\u800c\u84b8\u6c7d\u6da1\u8f6e\u5728\u8d85\u51fa\u6700\u4f73\u6d41\u901f\u540e\u7684\u6548\u7387\u4fdd\u6301\u662f\u6700\u5dee\u7684.\u5728HV\u9636\u6bb5,\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528IC2\u7684\u6d41\u4f53\u6d41\u91cf\u8c03\u8282\u673a,HV\u9636\u6bb5\u4ee5\u540e\u5c31\u80fd\u4f7f\u7528\u6d41\u4f53\u6821\u51c6\u5668\u8986\u76d6\u677f\u4e86.%n%n\u518d\u6b21\u91cd\u590d,\u5f53\u4f60\u4e3a\u6da1\u8f6e\u63d0\u4f9b\u8d85\u8fc7\u6700\u4f73\u6d41\u901f\u7684\u71c3\u6599\u65f6(\u79f0\u4e4b\u4e3a\u8d85\u8f7d\u72b6\u6001),\u6da1\u8f6e\u7684\u8f93\u51fa\u529f\u7387\u63d0\u9ad8,\u4f46\u71c3\u6599\u6548\u7387\u964d\u4f4e,\u540c\u65f6\u6700\u9ad8\u8f93\u51fa\u529f\u7387\u53d6\u51b3\u4e8e\u6da1\u8f6e\u8f6c\u5b50\u7c7b\u578b\u53ca\u5176\u8d85\u8f7d\u6548\u7387\u7b49\u7ea7.\u5bf9\u4e8e\u84b8\u6c7d\u6da1\u8f6e,\u8d85\u8f7d\u6548\u7387\u7b49\u7ea71\uff1a\u6700\u9ad8\u8d85\u8f7d150\uff05,\u8f93\u51fa\u529f\u7387112\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea72\uff1a\u6700\u9ad8\u8d85\u8f7d200\uff05,\u8f93\u51fa\u529f\u7387133\uff05;\u8d85\u8f7d\u6548\u7387\u7b49\u7ea73\uff1a\u6700\u9ad8\u8d85\u8f7d250\uff05,\u8f93\u51fa\u529f\u7387156\uff05.\u8d8a\u63a5\u8fd1\u8d85\u8f7d\u6781\u9650,\u635f\u5931\u7684\u71c3\u6599\u6548\u7387\u8d8a\u591a. \u6ce8\u610f,\u8f93\u51fa\u529f\u7387\u4e0d\u8981\u8d85\u8fc7\u4f60\u52a8\u529b\u4ed3\u7684\u6700\u9ad8\u8f93\u51fa\u529f\u7387,\u4e0d\u7136,\u563f\u563f\u4f60\u5c31\u6709\u9ebb\u70e6\u4e86!%n%n75K\u8010\u4e45\u4ee5\u4e0b\u7684\u6da1\u8f6e\u914d\u65b9\u5df2\u79fb\u9664.\u7528\u5408\u9002\u7684\u957f\u6746,\u4f7f\u7528NEI\u67e5\u8be2\u7528\u9014,\u4f60\u5c31\u80fd\u770b\u5230\u6709\u7528\u7684\u7ec4\u88c5\u914d\u65b9\u4e86.\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u67e5\u6211\u4eec\u7684\u6570\u636e\u8868\u683c.  \u957f\u9541\u94dd\u5408\u91d1\u6746\u5bf9\u5e94\u5c0f\u578b\u6da1\u8f6e\u3001\u957f\u949b\u6746\u5bf9\u5e94\u666e\u901a\u6da1\u8f6e,\u7b49\u7b49...%n%n\u767b\u6708\u524d,\u6700\u597d\u7684\u8f6c\u5b50\u6750\u6599\u662f\u6697\u5f71\u91d1\u5c5e\u6216\u8109\u51b2\u5408\u91d1.%n%n\u767b\u6708\u540e,\u6700\u597d\u7684HV\u8f6c\u5b50\u7531\u6697\u5f71\u91d1\u5c5e\u6216\u5965\u5229\u54c8\u94a2(\u4e0d\u8fc7\u8fd9\u662fIV\u6750\u6599)\u5236\u6210.\u5e78\u8fd0\u7684\u662f,\u73b0\u5728\u6da1\u8f6e\u673a\u53ef\u4ee5\u652f\u6301\u591aA\u52a8\u529b\u4ed3\u4e86,\u6240\u4ee5\u5982\u679c\u4f60\u9700\u8981\u989d\u5916\u7535\u6d41,\u8bd5\u8bd5\u770b\u5427!%n%n\u81f3\u4e8e\u5176\u4ed6\u9009\u62e9,\u8be6\u89c1Discord\u9891\u9053\u4e2d\u7684\u5927\u578b\u6da1\u8f6e\u8ba1\u7b97\u5668\u548c\u6570\u636e\u8868\u683c."
                },
                {
                    "name": "\u90a3\u662f\u4ec0\u4e48?\u5f15\u64ce\u592a\u5435\u6211\u5565\u4e5f\u542c\u4e0d\u5230!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1481.png",
                    "x": 228.0,
                    "y": 264.0,
                    "tooltip": "\u90a3\u662f\u4ec0\u4e48?\u5f15\u64ce\u592a\u5435\u6211\u5565\u4e5f\u542c\u4e0d\u5230!",
                    "data": "\u6781\u9650\u5185\u71c3\u5f15\u64ce\u662f\u5927\u578b\u5185\u71c3\u5f15\u64ce\u7684IV\u7248\u672c\u5347\u7ea7,\u9700\u8981\u628a\u949b\u6362\u6210\u94a8\u94a2.\u4e24\u8005\u7ed3\u6784\u57fa\u672c\u76f8\u540c,\u6240\u7528\u4e24\u79cd\u6750\u6599\u4e4b\u6bd4\u51e0\u4e4e\u5c31\u662f1:1,\u6240\u4ee5\u7b49\u4f60\u6512\u4e86\u51e0\u7ec4\u94a8\u94a2\u540e,\u5b83\u4f1a\u662f\u4e00\u79cd\u5f88\u597d\u7684\u53d1\u7535\u673a\u9009\u62e9.%n%n\u9700\u8981\u6ce8\u610f\u7684\u662f,\u5b83\u53ea\u80fd\u63a5\u53d7\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9.\u8fd9\u662f\u77f3\u6cb9\u51fa\u4ea7\u7684\u6700\u540e\u4e5f\u662f\u6700\u5f3a\u7684\u4e00\u79cd\u5185\u71c3\u7c7b\u71c3\u6599,\u800c\u5b83\u7684\u5904\u7406\u4ea7\u7ebf\u4e5f\u662f\u6700\u957f\u7684.\u56de\u62a5\u5c31\u662f,\u9ad8\u8f9b\u70f7\u503c\u6c7d\u6cb9\u7684\u80fd\u91cf\u5bc6\u5ea6\u975e\u5e38\u51fa\u8272,\u9ad8\u8fbe\u6bcf\u68762.5M-EU,\u518d\u914d\u5408\u6db2\u6c27\u5728\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u4e2d\u71c3\u70e7,\u5b83\u53ef\u4ee5\u4ea7\u51fa\u63a5\u8fd14A-IV.%n%n\u6db2\u6c27\u975e\u5e38\u91cd\u8981,\u56e0\u4e3a\u5b83\u6781\u5927\u5730\u63d0\u5347\u4e86\u591a\u65b9\u5757\u673a\u5668\u7684\u8fd0\u884c\u901f\u5ea6\u4ee5\u53ca\u71c3\u6599\u6548\u7387.\u6db2\u6c27\u7684\u4f9b\u5e94\u901f\u5ea6\u9700\u8981\u8fbe\u523040-L/s,\u6240\u4ee5\u4e3a\u4e86\u7ef4\u6301\u5f15\u64ce\u7684\u6301\u7eed\u8fd0\u884c,\u4f60\u9700\u8981\u4e0d\u6b62\u4e00\u53f0\u771f\u7a7a\u51b7\u51bb\u673a,\u51c6\u786e\u6765\u8bf4,\u4f60\u9700\u89813\u53f0HV\u771f\u7a7a\u51b7\u51bb\u673a,\u6216\u662f1\u53f0HV+1\u53f0EV.\u4ee5\u4e0b\u60c5\u51b5\u4e0b,\u53ef\u4ee5\u9002\u5f53\u964d\u4f4e\u6570\u91cf\uff1a\u8d85\u9891\u771f\u7a7a\u51b7\u51bb\u673a;\u6781\u9650\u5185\u71c3\u5f15\u64ce\u5e76\u6ca1\u6709\u6301\u7eed\u8fd0\u884c;\u6216\u8005\u4f60\u4f7f\u7528\u4e86\u51db\u51b0\u51b7\u51bb\u673a."
                },
                {
                    "name": "\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3040.png",
                    "x": 228.0,
                    "y": 444.0,
                    "tooltip": "\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?",
                    "data": "\u5982\u82e5\u4f60\u4ed4\u7ec6\u9605\u8bfb\u8fc7\u6234\u68ee\u7403\u5730\u9762\u5355\u5143\u7684tooltip(\u4f60\u4e5f\u5e94\u8be5\u8fd9\u4e48\u505a),\u90a3\u4e48\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230,tooltip\u4e2d\u63d0\u5230\"\u57fa\u4e8e\u6240\u5728\u7ef4\u5ea6\u7684\u7cfb\u6570\".\u4e8b\u5b9e\u4e0a,\u6234\u68ee\u7403\u6240\u5728\u7684\u7ef4\u5ea6\u4f1a\u6781\u5927\u5f71\u54cd\u5176\u80fd\u91cf\u8f93\u51fa.%n%n\u6309\u7cfb\u6570\u4ece\u9ad8\u5230\u4f4e\u6392\u5e8f\uff1a%n231\uff05 - \u5df4\u7eb3\u5fb7C%n228\uff05 - \u03b1\u534a\u4eba\u9a6cBb%n198\uff05 - \u7ec7\u5973B%n194\uff05 - \u91d1\u661f\u7a7a\u95f4\u7ad9%n176\uff05 - \u91d1\u661f%n161\uff05 - \u6c34\u661f%n 141\uff05 - \u5df4\u7eb3\u5fb7E%n134\uff05 - \u9cb8\u9c7c\u5ea7T\u661fE%n126\uff05 - \u5df4\u7eb3\u5fb7F%n112\uff05 - \u7f57\u65af128b\u3001\u7f57\u65af128ba%n110\uff05 - \u5730\u7403\u7a7a\u95f4\u7ad9%n100\uff05 - \u4e3b\u4e16\u754c\u3001\u6708\u7403%n89\uff05 - \u706b\u661f\u7a7a\u95f4\u7ad9%n81\uff05 - \u706b\u661f\u3001\u706b\u536b\u4e00\u3001\u706b\u536b\u4e8c%n61\uff05 - \u5c0f\u884c\u661f%n60\uff05 - \u8c37\u795e\u661f%n48\uff05 - \u6728\u661f\u7a7a\u95f4\u7ad9%n44\uff05 - \u6728\u536b\u4e8c\u3001\u6728\u536b\u4e00\u3001\u6728\u536b\u4e09%n36\uff05 - \u571f\u661f\u7a7a\u95f4\u7ad9%n32\uff05 - \u571f\u536b\u4e8c\u3001\u571f\u536b\u516d\u3001\u6728\u536b\u56db%n25\uff05 - \u5929\u738b\u661f\u7a7a\u95f4\u7ad9%n23\uff05 - \u5929\u536b\u56db\u3001\u6d77\u536b\u516b\u3001\u5929\u536b\u4e94%n20\uff05 - \u6d77\u738b\u661f\u7a7a\u95f4\u7ad9%n18\uff05 - \u6d77\u536b\u4e00%n16\uff05 - \u51a5\u738b\u661f\u3001\u67ef\u4f0a\u4f2f\u5e26%n15\uff05 - \u9e1f\u795e\u661f\u3001\u598a\u795e\u661f%n1\uff05 - \u82b1\u56ed\u3001\u865a\u7a7a\u4e16\u754c\u4ee5\u53ca\u77ff\u754c%n0\uff05 - \u6240\u6709\u5176\u4ed6\u7ef4\u5ea6"
                },
                {
                    "name": "\u6709\u4e86\u9b54\u6cd5,\u8c01\u8fd8\u8981UV\u592a\u9633\u80fd\u554a",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2596.png",
                    "x": 12.0,
                    "y": 372.0,
                    "tooltip": "\u6709\u4e86\u9b54\u6cd5,\u8c01\u8fd8\u8981UV\u592a\u9633\u80fd\u554a",
                    "data": "\u5f53\u4f7f\u7528\u6c34\u6ce8\u9b54\u65f6,\u8fd9\u79cd\u5355\u65b9\u5757\u6700\u5927\u53ef\u4ee5\u4ea7\u751f600M-EU/t,\u8fd9\u5f88\u5e73\u8861\u5bf9\u5427...\u5bf9...\u5427?"
                },
                {
                    "name": "\u98ce\u529b\u8ba1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/1141.png",
                    "x": 444.0,
                    "y": 120.0,
                    "tooltip": "\u98ce\u529b\u8ba1",
                    "data": "\u98ce\u529b\u8ba1\u53ef\u4ee5\u6d4b\u8bd5\u5f53\u524d\u4f4d\u7f6e\u7684\u98ce\u529b\u5f3a\u5ea6. \u4f7f\u7528\u8fd9\u4e2a\u5de5\u5177\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u8ba9\u4f60\u9009\u62e9\u653e\u7f6e\u98ce\u673a\u7684\u9ad8\u5ea6."
                },
                {
                    "name": "XL Turbo Gas Turbine",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7393385288067338253.png",
                    "x": 120.0,
                    "y": 372.0,
                    "tooltip": "XL Turbo Gas Turbine",
                    "data": "The ultimate gas inhaler in GTNH. Check the XL Steam Turbine quest above for an explanation of the mechanics shared across all turbines.\n\n[warn]This turbine does not accept Benzene.[/warn] To use it with your Benzene setup, you have to upgrade it to Nitrobenzene. Further changes will be made to this turbine to favor more high-tier gases, instead of spamming Benzene, Methane or other trivial options."
                },
                {
                    "name": "XL Turbo HP Steam Turbine",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4842153805905438157.png",
                    "x": 120.0,
                    "y": 336.0,
                    "tooltip": "XL Turbo HP Steam Turbine",
                    "data": "High pressure, superheated loads of energy. Check the XL Steam Turbine quest above for an explanation of the mechanics shared across all turbines.\n\nThis XL Turbine is exactly the same as the XL Steam Turbine in the way it upgrades from the regular multi: the only accepted fluid is Superheated Steam, and nothing else works. They are meant to be built together, since any steam setups you might have at this point will surely be using the two."
                },
                {
                    "name": "XL Turbo Plasma Turbine",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7251205103661839761.png",
                    "x": 120.0,
                    "y": 408.0,
                    "tooltip": "XL Turbo Plasma Turbine",
                    "data": "Is plasma flow making the turbines spin? No, it's just water into steam into water, all recycled inside, 12 times over. Check the XL Steam Turbine quest above for an explanation of the mechanics shared across all turbines.\n\nThis turbine, unlike the others, has very important differences to the regular multi that you have to keep in mind. Given that plasma power is so easy to upscale with the use of compact reactors, XL Plasma Turbines would have to follow suit and bring progression's EU numbers to ridiculous degrees, off one single plasma. However, this XL now applies an EU/t penalty to its production by comparing the fuel value of the plasma it processes with the rotor material it has inside.\n\nSee [url]https://i.imgur.com/vifsk0P.png[/url] for various combinations of plasmas and materials. Mk1 plasmas are in green, Mk2 in yellow and Mk3 in red. The bottom 3 are the final plasmas of the fusion chains.\n\nThe formula is a bit complicated, but here are some important values:\n\n-> Helium Plasma receives a huge penalty of 86.1% even with Infinity Catalyst, whereas Tin's penalty is only 53.5%, which means that the number of reactors and XLs with this material is twice the expected amount if using Tin Plasma;\n-> Trinium changes these numbers to 92.4% and 74.5%, respectively;\n-> Infinity further increases the penalty to 97.4% and 91.1%;\n-> Spacetime sets these values to 98.3% and 94.4%.\n\nThis means that, at the UHV/UEV stage, you will no longer be able to rely on these two plasmas with your XLs. For 1-recipe plasmas, your best option is the mk3 Americium Plasma, which has an insignificant 0.8% penalty with Infinity. If you want faster powergen than that, check out the complete fusion chain that ends at Celestial Tungsten Plasma, which has no penalties in the XL Plasma Turbine and has total EU/t numbers compared to Helium's old ones. Check below for quests regarding the fusion chains."
                },
                {
                    "name": "XL Turbo SC Steam Turbine",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6562319546724824113.png",
                    "x": 120.0,
                    "y": 444.0,
                    "tooltip": "XL Turbo SC Steam Turbine",
                    "data": "The most dense steam available. Check the XL Steam Turbine quest above for an explanation of the mechanics shared across all turbines.\n\nThis turbine has unexpected bugs related to the integer limit, when using the best turbine materials in the pack. There might also be other limitations when trying to move billions of SC Steam per tick from one place to another. Be wary of bugs when trying to use this XL turbine with endgame turbine materials."
                },
                {
                    "name": "XL Turbo Steam Turbine",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4981735154459347867.png",
                    "x": 120.0,
                    "y": 300.0,
                    "tooltip": "XL Turbo Steam Turbine",
                    "data": "The first of the XL Turbines. Because this is the first, this quest will include an explanation for the mechanics shared across all XL Turbines. \n\nEvery XL Turbine can hold 12 turbine items inside, in the 12 Rotor Assemblies, but their total speed is 16x higher than the regular multiblock equivalent. Make sure all the turbine items inside are of the same material, and also that you can provide enough input to match the flow rate that the multi needs! If you need even more speed, you can enable Loose Mode with a screwdrier on the controller, which can greatly increases turbines's flowrate while decreasing the efficiency.\n\nThese huge turbines also support TecTech hatches, so you can use multi-amp dynamos with a much higher output amount than normal, or even laser outputs later on to sustain the hundreds of millions of EU/t that the strongest turbines can produce.\n\nEach of the 5 turbines takes in the same fuels as their smaller counterparts, with some exceptions that will be mentioned in the respective quest. This XL Steam Turbine only consumes Steam, as expected."
                },
                {
                    "name": "\u4f60\u8fd8\u6ca1\u6709\u5b66\u4f1a\u5206\u79bb\u6d41\u4f53?\u771f\u7684\u4e48?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/2791.png",
                    "x": 228.0,
                    "y": 192.0,
                    "tooltip": "\u4f60\u8fd8\u6ca1\u6709\u5b66\u4f1a\u5206\u79bb\u6d41\u4f53?\u771f\u7684\u4e48?",
                    "data": "\u8fd9\u53f0\u591a\u65b9\u5757\u673a\u5668\u7684\u673a\u5236\u4e0e\u5927\u578b\u5185\u71c3\u5f15\u64ce\u57fa\u672c\u76f8\u540c,\u53ea\u662f\u71c3\u6599\u6362\u4f5c\u534a\u6d41\u8d28\u71c3\u6599.\u5982\u679c\u4f60\u9700\u8981\u5c06\u5927\u91cf\u91cd\u71c3\u6cb9\u4e4b\u7c7b\u7684\u534a\u6d41\u8d28\u71c3\u6599\u8f6c\u5316\u4e3aEU,\u4f60\u53ef\u4ee5\u9020\u4e00\u53f0\u8fd9\u4e2a\u73a9\u73a9.%n%n\u8bf7\u67e5\u770b\u5927\u578b\u5185\u71c3\u5f15\u64ce\u7684\u4efb\u52a1\u83b7\u53d6\u66f4\u591a\u4fe1\u606f."
                },
                {
                    "name": "Zzzincing...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7026708278772253011.png",
                    "x": 276.0,
                    "y": 504.0,
                    "tooltip": "Zzzincing...",
                    "data": "Do you know how much Zinc you have in your body? Very little, but it's important. Now imagine it's all plasma!\n\nThis is a very fast recipe, like Niobium Plasma. The only caveat is that it uses Tritium (not Trinium), a rare isotope of Hydrogen that you can obtain from Deuterium, a less rare isotope. You can pump it directly from Neptune, through the Space Elevator or simply by centrifuging the Deuterium you already automated for Helium Plasma."
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
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(HV)"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(MV)",
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(HV)"
                },
                {
                    "source": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)",
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(MV)"
                },
                {
                    "source": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(LV)",
                    "target": "\u5438\u6536\u9b54\u6cd5\u80fd\u6e90\u8f6c\u5316\u4e3aEU(LV)"
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
                    "source": "\u9ad8\u538b\u7ea7\u522b\u7684\u5316\u5b66\u5b9e\u9a8c",
                    "target": "\u9178\u4e4b\u65c5"
                },
                {
                    "source": "Marie Curium?",
                    "target": "Advanced Xeninol"
                },
                {
                    "source": "Runite Plasma - The Mk2 Conclusion",
                    "target": "Advanced Xeninol"
                },
                {
                    "source": "AMERICA!!!!!!!!!",
                    "target": "Advanced Xeninol"
                },
                {
                    "source": "\u6807\u51c6\u6838\u71c3\u6599II:\u7845\u5ca9",
                    "target": "\u53ef\u9009\u6838\u71c3\u6599:\u6cf0\u4f2f\u5229\u4e9a"
                },
                {
                    "source": "Runite Plasma - The Mk2 Conclusion",
                    "target": "AMERICA!!!!!!!!!"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u5408\u9002\u7684\u80fd\u6e90"
                },
                {
                    "source": "Pseudostable Black Hole Containment Field",
                    "target": "Balance is Everything"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u57fa\u7840\u6838\u71c3\u6599:\u948d"
                },
                {
                    "source": "Welcome to the Plasma Chain",
                    "target": "Boronic Fusion"
                },
                {
                    "source": "Welcome to the Plasma Chain",
                    "target": "Calcium Bottlenecking"
                },
                {
                    "source": "Advanced Xeninol",
                    "target": "Celestial Tungsten Plasma - The Mk3 Finale"
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
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u6df1\u5730\u70ed\u6cf5"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "target": "\u67f4\u6cb9\u7684\u529b\u91cf"
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
                    "source": "\u57fa\u7840\u6838\u71c3\u6599:\u948d",
                    "target": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))"
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
                    "source": "UMV\u7535\u8def\u677f",
                    "target": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143"
                },
                {
                    "source": "\u8010\u8d85\u9ad8\u6e29\u7f51",
                    "target": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143"
                },
                {
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u7075\u6c14\u6e90\u8d28\u53d1\u7535\u673a"
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
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u706b\u4e4b\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u6728\u4e4b\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u8d2a\u5a6a\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "\u80fd\u91cf\u6e90\u8d28\u53d1\u7535\u673a",
                    "target": "\u98ce\u4e4b\u6e90\u8d28\u53d1\u7535\u673a"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u66f4\u597d\u7684\u67f4\u6cb9"
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
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#3",
                    "target": "\u5f15\u7206\u6db2\u4f53\u83b7\u53d6\u80fd\u91cf"
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
                    "source": "Calcium Bottlenecking",
                    "target": "Force Plasma - The Mk1 Ending"
                },
                {
                    "source": "Boronic Fusion",
                    "target": "Force Plasma - The Mk1 Ending"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e"
                },
                {
                    "source": "\u91cf\u5b50\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u5730\u70ed\u5f15\u64ce(EV)"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u5730\u70ed\u5f15\u64ce(IV)"
                },
                {
                    "source": "\u6e7f\u4ef6\u4e3b\u673a",
                    "target": "\u5730\u70ed\u5f15\u64ce(LuV)"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "\u4e0d\u542b\u81f4\u5e7b\u5242"
                },
                {
                    "source": "\"Semi-Stable\" doing a lot of work in here",
                    "target": "Harnessing Chaos"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u4e3a\u4e86\u4f9b\u5e94\u5b83,\u4f60\u780d\u4f10\u4e86\u591a\u5c11\u68ee\u6797?"
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
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#3",
                    "target": "\u6c22\u6c14\u3001\u7532\u70f7\u6216\u8005\u4e00\u4e9b\u5c41(\u5929\u7136\u6c14)"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "I'll teach you... how to Praise the Sun!"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "\u4e0d\u5b8c\u5168\u71c3\u70e7"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u53cd\u5e94\u5806\u6269\u5bb9"
                },
                {
                    "source": "\u8d85\u9891\u65f6\u4ee3",
                    "target": "\u65e0\u5c3d\u6da1\u8f6e"
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
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d"
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
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(HV)"
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
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(LuV)"
                },
                {
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(IV)",
                    "target": "\u52a8\u80fd\u53d1\u7535\u673a(LuV)"
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
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)"
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
                    "source": "LuV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u76841-4",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)"
                },
                {
                    "source": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)",
                    "target": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(LuV)"
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
                    "source": "\u52a8\u80fd\u53d1\u7535\u673a(HV)",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)"
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
                    "source": "\u94f1",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(EV)",
                    "target": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(IV)"
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
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\""
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u5927\u578b\u70ed\u4ea4\u6362\u673a-\"\u8d39\u9a6c\u5927\u5b9a\u7406\""
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(ZPM)",
                    "target": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535"
                },
                {
                    "source": "Runite Plasma - The Mk2 Conclusion",
                    "target": "Marie Curium?"
                },
                {
                    "source": "\u53cd\u5e94\u5806\u6269\u5bb9",
                    "target": "\u76d1\u89c6\u4f60\u7684\u53cd\u5e94\u5806"
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
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u70ed\u4ea4\u6362"
                },
                {
                    "source": "MV\u9a6c\u8fbe",
                    "target": "MV(\u4e2d\u538b)\u7ea7\u84b8\u6c7d\u8f6e\u673a"
                },
                {
                    "source": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkII"
                },
                {
                    "source": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkI"
                },
                {
                    "source": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII"
                },
                {
                    "source": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIII",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV"
                },
                {
                    "source": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkIV",
                    "target": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV"
                },
                {
                    "source": "\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV",
                    "target": "Naquadah Based Fuel MkVI"
                },
                {
                    "source": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "target": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382"
                },
                {
                    "source": "Force Plasma - The Mk1 Ending",
                    "target": "Niobiumization"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u613f\u518d\u65e0\u7206\u70b8"
                },
                {
                    "source": "\u5927\u578b\u7845\u5ca9\u53cd\u5e94\u5806",
                    "target": "\u948d\u57fa\u6d41\u4f53\u71c3\u6599"
                },
                {
                    "source": "\u94c0\u57fa\u6d41\u4f53\u71c3\u6599",
                    "target": "\u949a\u57fa\u6d41\u4f53\u71c3\u6599"
                },
                {
                    "source": "\u948d\u57fa\u6d41\u4f53\u71c3\u6599",
                    "target": "\u94c0\u57fa\u6d41\u4f53\u71c3\u6599"
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
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(EV)"
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
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(LuV)"
                },
                {
                    "source": "\u5236\u9020\u9545",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(LuV)"
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
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(ZPM)"
                },
                {
                    "source": "\u5236\u9020\u9545",
                    "target": "\u53e3\u888b\u91cc\u7684\u7b49\u79bb\u5b50(ZPM)"
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
                    "source": "HSS-G",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(EV)"
                },
                {
                    "source": "\u7eb3\u7c73\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(EV)"
                },
                {
                    "source": "\u4f60\u89c9\u5f97\u53d1\u5c04\u5668\u5df2\u7ecf\u591f\u7cdf\u7cd5\u4e86\uff1f",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(LuV)"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(ZPM)",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(ZPM)"
                },
                {
                    "source": "\u529b\u573a\u53d1\u751f\u5668(UV)",
                    "target": "\u4fbf\u643a\u5f0f\u6e05\u6d01\u80fd\u6e90(UV)"
                },
                {
                    "source": "\u7845\u6676\u5706",
                    "target": "\u592a\u9633\u80fd"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(MV)",
                    "target": "\u592a\u9633\u4e4b\u529b(MV)1x1"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(HV)",
                    "target": "\u592a\u9633\u4e4b\u529b(HV)1x1"
                },
                {
                    "source": "\u592a\u9633\u80fd",
                    "target": "\u592a\u9633\u4e4b\u529b(ULV)1x1"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(LV)",
                    "target": "\u592a\u9633\u4e4b\u529b(LV)1x1"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(EV)",
                    "target": "\u592a\u9633\u4e4b\u529b(EV)1x1"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(IV)",
                    "target": "\u592a\u9633\u4e4b\u529b(IV)1x1"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(LuV)",
                    "target": "\u592a\u9633\u4e4b\u529b(LuV)1x1"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(ZPM)",
                    "target": "\u592a\u9633\u4e4b\u529b(ZPM)1x1"
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
                    "source": "\u592a\u9633\u4e4b\u529b(IV)",
                    "target": "\u592a\u9633\u4e4b\u529b(LuV)"
                },
                {
                    "source": "\u6676\u4f53\u5904\u7406\u5668\u4e3b\u673a",
                    "target": "\u592a\u9633\u4e4b\u529b(LuV)"
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
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u592a\u9633\u4e4b\u529b(UV)"
                },
                {
                    "source": "\u592a\u9633\u4e4b\u529b(ZPM)",
                    "target": "\u592a\u9633\u4e4b\u529b(UV)"
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
                    "source": "\u592a\u9633\u80fd",
                    "target": "\u592a\u9633\u4e4b\u529b(ULV)"
                },
                {
                    "source": "\u4f60\u4f1a\u8ba8\u538c\u5b83\u4eec\u7684#3",
                    "target": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(LV)"
                },
                {
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(HV)"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4f1a\u8ba8\u538c\u8fd9\u4e2a #3",
                    "target": "\u628a'\u534a\u6d41\u8d28'\u585e\u56de\u53d1\u7535\u673a\u91cc(MV)"
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
                    "source": "ZPM\u7ec4\u88c5\u673a",
                    "target": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)"
                },
                {
                    "source": "\u56db\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quadruple Compressed Solar)",
                    "target": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)"
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
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u653e\u5c04\u6027\u540c\u4f4d\u7d20\u6e29\u5dee\u53d1\u7535\u673a1"
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
                    "source": "\u5728IV\u4f60\u4f1a\u8ba8\u538c\u4e4b1-4",
                    "target": "\u706b\u7bad\u5f15\u64ce(IV)"
                },
                {
                    "source": "RP-1\u706b\u7bad\u71c3\u6599",
                    "target": "\u706b\u7bad\u5f15\u64ce(IV)"
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
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u8f6c\u5b50"
                },
                {
                    "source": "\u6c34\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u8f6c\u5b50"
                },
                {
                    "source": "This is your Kryptonite!",
                    "target": "Runite Plasma - The Mk2 Conclusion"
                },
                {
                    "source": "Balance is Everything",
                    "target": "\"Semi-Stable\" doing a lot of work in here"
                },
                {
                    "source": "\u8f6c\u5b50",
                    "target": "\u5c06\u80fd\u91cf\u9001\u56de"
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
                    "source": "\u4e94\u91cd\u538b\u7f29\u592a\u9633\u80fd(Quintuple Compressed Solar)",
                    "target": "\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)"
                },
                {
                    "source": "UV\u7ec4\u88c5\u673a",
                    "target": "\u516d\u91cd\u538b\u7f29\u592a\u9633\u80fd(Sextuple Compressed Solar)"
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
                    "source": "\u603b\u7b97\u80fd\u70bc\u949b\u4e86",
                    "target": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk I"
                },
                {
                    "source": "EV\u9636\u6bb5\u8ba9\u4f60\u8ba8\u538c\u76844\u4e2a\u7269\u54c1",
                    "target": "\u56fa\u4f53\u6c27\u5316\u7269\u71c3\u6599\u7535\u6c60 Mk I"
                },
                {
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u6807\u51c6\u6838\u71c3\u6599:\u94c0"
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
                    "source": "MV\u9a6c\u8fbe",
                    "target": "\u5927\u82ef\u73af\u795e\u6559\u5723\u5802"
                },
                {
                    "source": "\u91ce\u9e2d\u751f\u9508\u81ed\u81ed(Mallard Rust Smelly)",
                    "target": "\u8fd9\u4e0d\u662f\u53bb\u592a\u7a7a\u7684\u8def"
                },
                {
                    "source": "Force Plasma - The Mk1 Ending",
                    "target": "This is your Kryptonite!"
                },
                {
                    "source": "Zzzincing...",
                    "target": "This is your Kryptonite!"
                },
                {
                    "source": "Niobiumization",
                    "target": "This is your Kryptonite!"
                },
                {
                    "source": "\u7845\u5ca9\u71c3\u6599\u7cbe\u70bc\u5382",
                    "target": "2\u9636\u7ebf\u5708"
                },
                {
                    "source": "2\u9636\u7ebf\u5708",
                    "target": "3\u9636\u7ebf\u5708"
                },
                {
                    "source": "3\u9636\u7ebf\u5708",
                    "target": "Tier 4 Coil"
                },
                {
                    "source": "\u4f60\u7528\u5b8c\u4e86\u9ec4\u91d1\u6216\u8005\u7ea2\u77f3\uff1f",
                    "target": "\u6c5e\u592a\u591a\u4e86?"
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
                    "source": "HV\u9636\u6bb5\u4f60\u6700\u8ba8\u538c\u7684\u53e6\u59162\u4e2a\u7269\u54c1",
                    "target": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)"
                },
                {
                    "source": "\u4fe1\u6807",
                    "target": "\u628a\u4f60\u7684\u9b54\u6cd5\u5783\u573e\u90fd\u6254\u5230\u8fd9\u91cc\u6765(MV)"
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
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u68d8\u624b\u7684\u6838\u71c3\u6599:MOX"
                },
                {
                    "source": "\u68d8\u624b\u7684\u6838\u71c3\u6599:MOX",
                    "target": "\u68d8\u624b\u7684\u6838\u71c3\u6599II:\u8d85\u80fd\u7845\u5ca9"
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
                    "source": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "target": "Turbine Housing"
                },
                {
                    "source": "\u7b2c8\u9636\u6bb5(UV)",
                    "target": "Turbine Housing"
                },
                {
                    "source": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "target": "\u6da1\u8f6e\u65f6\u95f4"
                },
                {
                    "source": "2\u7ea7\u805a\u53d8 \u9521\u7b49\u79bb\u5b50\u4f53",
                    "target": "2M\u6da1\u8f6e"
                },
                {
                    "source": "\u8fd9\u4e0d\u662f\u53ea\u6709\u4e2d\u5b50\u661f\u6838\u5fc3\u624d\u6709\u7684\u5417?",
                    "target": "\u8010\u8d85\u9ad8\u6e29\u7f51"
                },
                {
                    "source": "\u4e8c\u8054\u71c3\u6599\u68d2,\u53cc\u500d\u7684\u5feb\u4e50(double the fun(fuel))",
                    "target": "\u5f88\u62b1\u6b49,\u6ca1\u6709\u8d2b\u94c0\u5f39"
                },
                {
                    "source": "\u5355\u5806\u53d1\u7535\u91cf\u662f\u591a\u5c11?",
                    "target": "\u5355\u6da1\u8f6eUV\u53d1\u7535"
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
                    "source": "\u5408\u9002\u7684\u80fd\u6e90",
                    "target": "\u6563\u70ed1"
                },
                {
                    "source": "\u5f00\u59cb\u805a\u53d8",
                    "target": "Welcome to the Plasma Chain"
                },
                {
                    "source": "\u7b2c3\u9636\u6bb5(HV)",
                    "target": "\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19"
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
                    "source": "\u6234\u68ee\u7403\u5730\u9762\u5355\u5143",
                    "target": "\u6211\u5e94\u8be5\u5728\u54ea\u5efa\u9020\u6234\u68ee\u7403?"
                },
                {
                    "source": "\u4e03\u91cd\u538b\u7f29\u592a\u9633\u80fd(Septuple Compressed Solar)",
                    "target": "\u6709\u4e86\u9b54\u6cd5,\u8c01\u8fd8\u8981UV\u592a\u9633\u80fd\u554a"
                },
                {
                    "source": "\u5149\u5b66\u7535\u8def",
                    "target": "\u6709\u4e86\u9b54\u6cd5,\u8c01\u8fd8\u8981UV\u592a\u9633\u80fd\u554a"
                },
                {
                    "source": "\u98ce\u529b\u52a8\u80fd\u53d1\u751f\u673a(HV)",
                    "target": "\u98ce\u529b\u8ba1"
                },
                {
                    "source": "\u7b2c6\u9636\u6bb5(LuV)",
                    "target": "XL Turbo Gas Turbine"
                },
                {
                    "source": "\u5927\u578b\u71c3\u6c14\u6da1\u8f6e",
                    "target": "XL Turbo Gas Turbine"
                },
                {
                    "source": "\u7b2c5\u9636\u6bb5(IV)",
                    "target": "XL Turbo HP Steam Turbine"
                },
                {
                    "source": "\u5b83\u662f'\u8fc7\u70ed'\u84b8\u6c7d",
                    "target": "XL Turbo HP Steam Turbine"
                },
                {
                    "source": "\u5229\u7528\u7b49\u79bb\u5b50\u4f53\u53d1\u7535",
                    "target": "XL Turbo Plasma Turbine"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "XL Turbo Plasma Turbine"
                },
                {
                    "source": "\u7b2c7\u9636\u6bb5(ZPM)",
                    "target": "XL Turbo SC Steam Turbine"
                },
                {
                    "source": "\u7b2c4\u9636\u6bb5(EV)",
                    "target": "XL Turbo Steam Turbine"
                },
                {
                    "source": "\u6211\u4eec\u9700\u8981\u4e9b\u5927\u5bb6\u4f19",
                    "target": "XL Turbo Steam Turbine"
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
                    "source": "Force Plasma - The Mk1 Ending",
                    "target": "Zzzincing..."
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
    