
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
                    "name": "An Eye at the End of Time",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7384462910267243515.png",
                    "x": 324.0,
                    "y": 108.0,
                    "data": "So you have made yourself an Eternal DTPF or hopefully a few, and now it is time for the push to the next tier, UXV.\n\nIntroducing the final multiblock in the game, and by far the most expensive. \nIt introduces 4 new materials: Raw Stellar Plasma, White and Black Dwarf Matter and finally Universium.\n\nIt has 3 different tiered casings with 9 tiers each: \n\nSpacetime Compression Field Generator:\n- Determines the tier of the planet block that can be run and decreases the processing time by 3% per tier.\n\nTime Dilation Field Generator:\n- Decreases recipe time by 50% per tier, while decreasing the chance of a recipe succeeding by 9.25% per tier.\n\nStabilisation Field Generator:\n- Increases the chance of a recipe succeeding by 5% per tier, while decreasing the output of a recipe by 5% per tier.\n\nLower tier Stabilisation Field Generators have a power output penalty.\n\nFinding the best setup of different casing tiers might be a hard task, so a calculator visualing all the drops and setups has been created: [url]https://docs.google.com/spreadsheets/d/15j30mNnFIWBhwpJGuDrKTfiHBXNEEqyvB_r7ztFWlyQ[/url]\n\n[note]Be sure to read the tooltip of the Eye of Harmony controller, it explains everything in detail! Depending on your GUI scale it might have multiple pages.[/note]",
                    "quest_id": "kazCPEWoSmiZhR4bkHlEBQ==",
                    "tooltip": "<strong>An Eye at the End of Time</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5347\u7ea7\u6c38\u6052\u7ebf\u5708</br>Are you Ready?"
                },
                {
                    "name": "Are you Ready?",
                    "symbolSize": 124.80000000000001,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8323783763671749098.png",
                    "x": 324.0,
                    "y": 12.0,
                    "data": "From now on, you\u2019ll be dealing with extremely slow recipes.\n\nConsider finishing up your QFTs and upgrading or replacing your old infrastructure to save on TPS.\n\nYou should definitely upgrade your power generation and infrastructure to handle millions of recipes.\n\nThe Eye of Harmony will be consuming most of your power before it starts generating more than it uses.\n\nMay Colen have mercy on your soul.\n\n[note]Welcome to the waiting lounge.[/note]",
                    "quest_id": "v5GltE2BTW-Me_rEqy5uFg==",
                    "tooltip": "<strong>Are you Ready?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>UXV\u7535\u8def\u677f</br>Saving on SpaceTime</br>UMV Field Generator"
                },
                {
                    "name": "A Second Ring has Hit the Godforge",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4764888386348873901.png",
                    "x": 24.0,
                    "y": -36.0,
                    "data": "As additional rings are placed closer to the star at the center of the Forge, the gravitational stress drastically increases on the structure. Graviton shards alleviate these stresses while also creating localized spacetime bridges to link the two rings and their modules\u2019 respective upgrades.\n\n[note]Adding a second ring to your Godforge allows for 4 additional modules, as well as allowing you to pick a second path in the split paths part of the upgrade tree.[/note]\n\n[note]Usage of a second ring requires the CD upgrade.[/note]",
                    "quest_id": "Qjg1J4kuS-6937dCEUqHUw==",
                    "tooltip": "<strong>A Second Ring has Hit the Godforge</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Project Godforge</br>UMV Field Generator"
                },
                {
                    "name": "Black Dwarf Matter",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7959189288003028041.png",
                    "x": 360.0,
                    "y": 180.0,
                    "data": "Reinforcing your casings with matter from white dwarfs was a good idea.\n\nYou can now accelerate a solar system until a black dwarf forms. This material will likely be key to observing and understanding what happens next.\n\nThis is the second of your three EOH materials. Use it to upgrade your casings to T7.\n\n[note]The EOH becomes power positive once all the casings are Tier 7.[/note]",
                    "quest_id": "bPYTUdlkSCiRi0eDHHw7tw==",
                    "tooltip": "<strong>Black Dwarf Matter</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>An Eye at the End of Time</br>White Dwarf Matter"
                },
                {
                    "name": "Convergence",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7053414737734297359.png",
                    "x": 96.0,
                    "y": 60.0,
                    "data": "Running your Dimensionally Transcendent Plasma Forge for an extended period [note](8 hours)[/note] allows the Multidimensional Spaces to align perfectly.\n\nWith your newly acquired technology, you can now tap into these spaces in perfect sync, enabling your plasma forges to operate at incredible speeds.\n\nThe Transdimensional Alignment Matrix allows the DTPF to run with Perfect Overclocks. To achieve this, you need a full discount, and the extra power cost is offset by using more of the same catalyst.\n\nOverall, it is more efficient and totally worth it.\n\nThis process is extremely catalyst-hungry. Ensure you're producing enough to sustain it.\n\nFor recipes without a catalyst, you must specify the catalyst in the GUI by right-clicking the Convergence button, otherwise it will default to Crude.[/note]\n\n[note]Math for the curious:\n\nTo clear up what exactly happens in the background, here's an explanation on how the extra catalyst values are calculated using an example:\n\nThe example recipe of choice is the molten neutronium recipe using prosaic catalyst, running at 64A UMV (8,589,934,592 EU/t).\nThe recipe uses 14,753L of Prosaic catalyst and 36,484,545,600 EU per recipe without OCs or the catalyst discount. With the discount, the catalyst amount gets cut in half, meaning 7,376.5L of catalyst, which are rounded to 7,376L, and due to the 64A UMV the machine is supplied with the recipe overclocks 3 times, meaning each recipe actually uses 36,484,545,600 * 2^3 = 291,876,364,800 EU. \n\nKnowing the amount of OCs and the base voltage of the recipe, the difference of the needed EU per recipe with and without perfect OC can be calculated, that being 291,876,364,800 - 36,484,545,600 = 255,391,819,200 extra EU due to imperfect OCs.\nTo get the value of needed extra catalyst, this extra EU value has to be divided by the energy density of the relevant catalyst, prosaic in this case.\n\nThe division equates to 255,391,819,200 EU / 66,768,460 EU/L = 3,825.037 L, rounded to 3,825L extra prosaic catalyst per recipe. For the final step, this value has to be multiplied by 0.5 as its affected by the discount, meaning the total extra catalyst that gets added to the recipe is 3,825L * 0.5 = 1,912.5 L, rounded to 1,912L.\n\nTo summarise it all in a formula:\nAmount extra catalyst per recipe = (B * ((2^x) - 1))/2L\nwhere:\nB is base total EU of the recipe\nx is the number of overclocks\nL is the EU/L of the relevant catalyst [/note]",
                    "quest_id": "XoEzTtuPQjyeHTyqp9eY8Q==",
                    "tooltip": "<strong>Convergence</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>UMV Field Generator"
                },
                {
                    "name": "Finally, Universium!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6897090588793529674.png",
                    "x": 432.0,
                    "y": 180.0,
                    "data": "You\u2019ve finally solved it. Who knew that leaving dead stars long enough would cause your artificial solar system to implode and lead to a Big Bang?\n\nIf only you could tap into that much mass right before it started expanding again, you could literally hold the entire universe in the palm of your hand.\n\nThis is your third and final material from the EOH.\n\n[note]It's mainly used for UXV crafts, but your first few should go in the Eternity loop. The quest for it is located in the Endgame Goals tab.\n\nCongrats! You can now move on to the UXV tier.[/note]",
                    "quest_id": "21tDEYptRuOgSJym30Watg==",
                    "tooltip": "<strong>Finally, Universium!</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>An Eye at the End of Time</br>Black Dwarf Matter"
                },
                {
                    "name": "Guzzling Massive Amounts of Gas",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7951601137615098449.png",
                    "x": -96.0,
                    "y": -48.0,
                    "data": "It can run 4 different recipes simultaneously, with 4 parallels for each recipe.\n\nA worthy upgrade for some SpaceTime.",
                    "quest_id": "5vAyoCzxQkSRpjzlDNwtrw==",
                    "tooltip": "<strong>Guzzling Massive Amounts of Gas</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Tier 12 (UMV)"
                },
                {
                    "name": "Magnetic Monopole Matter",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4905890280735412841.png",
                    "x": 432.0,
                    "y": 240.0,
                    "data": "With total mastery of the Forge of the Gods achieved, it is possible to begin a new universe-spanning initiative. It is now possible to quantize and extract graviton shards for use outside the Forge in powerful new technological endeavours; produce the most exotic plasmas beyond merely periodic elements; and most importantly, begin to understand the immense power of magmatter, a form of matter made entirely of magnetic monopoles with density and stability billions of times that of conventional bosonic matter. It is with this development you realise that the completion of the Forge was not the end goal, but merely a stepping stone to universal transcendence.\n\n[note]Required for UXV components, Magmatter is the second material the Heliofusion Exoticizer can create, and will require a second module. Read the Godforge Information in the UI for more information on how to automate this.[/note]\n\n[note]The creation of Magmatter requires the END upgrade.[/note]",
                    "quest_id": "U7Ta5d7PSii76sbIPbltlw==",
                    "tooltip": "<strong>Magnetic Monopole Matter</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Finally, Universium!</br>Heliofusion Exoticizer"
                },
                {
                    "name": "\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86.",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3243.png",
                    "x": -24.0,
                    "y": 60.0,
                    "data": "\u8fd8\u80fd\u518d\u5f3a\u4e00\u70b9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMqw==",
                    "tooltip": "<strong>\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86.</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Tier 12 (UMV)"
                },
                {
                    "name": "Raw Stellar Plasma",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7995813544306558907.png",
                    "x": 216.0,
                    "y": 180.0,
                    "data": "Created by all tiers of the Eye of Harmony, Raw Stellar Plasma can be used for several things including Stellar Catalyst.\n\n[note]You may want to be careful with this material, as later running EOH's with Astral Arrays requires this instead of Hydrogen and Helium, so make sure to never fully run out![/note]",
                    "quest_id": "uXczmEsfT2uRCSnx8Vm4RQ==",
                    "tooltip": "<strong>Raw Stellar Plasma</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>An Eye at the End of Time"
                },
                {
                    "name": "Saving on SpaceTime",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6892498627708657446.png",
                    "x": 60.0,
                    "y": 108.0,
                    "data": "SpaceTime is quite a challenge, isn\u2019t it? You should definitely consider upgrading your Component Assembly Lines to save on some of it.\n\n[note]Did you know you can wall-share the component casings? Just turn one CoAL upside down.\n\nThe CoAL will perform Perfect Overclocks for the recipes below its tier.[/note]",
                    "quest_id": "hWXZi-whQfmgWO0EII7g2g==",
                    "tooltip": "<strong>Saving on SpaceTime</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86."
                },
                {
                    "name": "Shirabon",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9143660827823771849.png",
                    "x": -24.0,
                    "y": -36.0,
                    "data": "A helper material needed in some UMV and UXV components. Have fun making millions.\n\n[note]This is extremely slow to make and to process.[/note]",
                    "quest_id": "o8_pX-OSRJKBGzDsGujvNw==",
                    "tooltip": "<strong>Shirabon</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5347\u7ea7\u6c38\u6052\u7ebf\u5708</br>Tier 12 (UMV)</br>Metastable Oganesson"
                },
                {
                    "name": "Stars, So Many Stars",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6892214430748682531.png",
                    "x": 432.0,
                    "y": -12.0,
                    "data": "Eternal coils? Perfect time for stargate trophy number three. \nYou know the drill, you give 2 stargates' worth of stuff, you get your trophy. Simple as that.\n\n[note]Our journey through time continues onwards, entering the UMV, aka DTPF era.\n\nSurprisingly, it still is the year 2022, but there have been a huge amount of changes since our last stop in the UEV era. The DTPF exists now, hypogen & eternal coils included, and machine parts up to UMV thus are craftable. Wireless energy is a thing now too, both the LSC and the regular hatch kind, and AE2FC is in the pack, allowing direct fluid crafting (meaning no more volumetric flask shuffling). \nThe power situation hasnt changed much since the UEV era, except for dyson being even more bugged and giving free uncapped infinite power (abusing this was obviously labeled as bugabuse). \nSome other new useful things are the MABS, Integrated Ore Factory, Space Elevator, UIV and UMV singleblocks (and PAs accepting up to 64 UEV+ machines), EIG, EEC, industrial & mega apiary, yottanks, stocking buses, data bank chaining and the Draconic Fusion Crafter.\nThe stargate's cost has now skyrocketed far more than ever before, marking the beginning of this new era of GT:NH endgame, the era of expansion.\n\nThis time around the leading GDCloud was challenged by the team Neo Caelestia, who were progressing at a staggering speed, inching ever closer to being first to gate, but ultimately weren't able to fully catch up and thus GDCloud once again was first to conquer the challenge on the 19th of November, 2022.\n\nP.S.: You know how this works, right? Here's the list:\n-PCB Factory, Component Assemblyline, AAL, Transcendent Plasma Mixer, EOH, QFT\n-Multi-Amp wireless hatches\n-Sub 1-tick OC, Batch Mode, inbuilt Void Protection on multis\n-Level Maintainer, Stocking Hatches, Crafting Input Buses\n\nP.P.S.: Chaotic capacitor bank? What's that?[/note]",
                    "quest_id": "QO1gudFvTtKgWe9942dW3Q==",
                    "tooltip": "<strong>Stars, So Many Stars</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u5347\u7ea7\u6c38\u6052\u7ebf\u5708</br>Are you Ready?"
                },
                {
                    "name": "Stellar Catalyst",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5769420916380359643.png",
                    "x": 216.0,
                    "y": 240.0,
                    "data": "Your attempts to improve your dimensional catalyst have been futile so far, but with the Raw Stellar Plasma from your Eye of Harmony, you can finally create a stable and more powerful catalyst.\n\nYou will need some higher-tier plasmas to help maintain its stability as well.\n\n[warn]Handle with care. We are not responsible for your base turning into supermassive black holes. /s[/warn]",
                    "quest_id": "fj2VzJf2Rgev7uY-h3CkJQ==",
                    "tooltip": "<strong>Stellar Catalyst</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Fuwusion MK5</br>Heliothermal Plasma Fabricator</br>Raw Stellar Plasma"
                },
                {
                    "name": "Storing Computation in the Cloud",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7444237521495181899.png",
                    "x": 60.0,
                    "y": -132.0,
                    "data": "Wireless Computation is similar to Wireless Data, Cloud Computation Server Hatches send computation to Cloud Computation Client Hatches, which other multiblocks can use.\n\nPlace down a Server Hatch on a Quantum Computer, screwdriver the controller to enable Wireless Mode, then after placing down a Client Hatch, you have to set how much computation it should request from the Server Hatch.\n\n[note]Wireless Data Hatches are N:M instead of 1:1[/note]",
                    "quest_id": "lBuQcNYjQ8-YsMFqW6U1tQ==",
                    "tooltip": "<strong>Storing Computation in the Cloud</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>UXV\u7535\u8def\u677f"
                },
                {
                    "name": "Subspace Cooling",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5636991039177227943.png",
                    "x": -144.0,
                    "y": 72.0,
                    "data": "Cooling exotic ingots proves to be a much bigger challenge than smelting them.\n\nFortunately, reinforcing some of the casings with your new materials allows you to inject exotic coolants that capture extreme heat in miniature tears of spacetime, helping to cool your ingots a bit faster.\n\nWith Subspace Cooling, you can enable the Vacuum Freezer to achieve Perfect Overclocks\u2026 at a cost.\n\nTier 1 will consume SpaceTime in liquid form at [warn]7500 L/s[/warn] and allow for 1 Perfect Overclock.\n\n[note]This cost is very high but static, remaining the same for each recipe being run. So, be selective about cooling your ingots.\n\nThe faster the recipes, the more efficient the cost, so find your optimal balance.[/note]\n\nThe Infinity Cooled Casings replace the Frostproof casings, so you don\u2019t need to worry about damaging your setups.",
                    "quest_id": "hybMIjq9Q9mxxWKEE8gBWQ==",
                    "tooltip": "<strong>Subspace Cooling</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Tier 12 (UMV)"
                },
                {
                    "name": "\u7a7a\u51bb\u5854",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3277.png",
                    "x": -96.0,
                    "y": 72.0,
                    "data": "\u638c\u63a7\u65f6\u7a7a,\u4f60\u5df2\u7ecf\u53ef\u4ee5\u8ba9\u6e29\u5ea6\u63a5\u8fd1\u7edd\u5bf9\u96f6\u5ea6,\u8fd9\u4f7f\u5f97\u7814\u53d1\u66f4\u68d2\u7684\u51b7\u5374\u5355\u5143\u6210\u4e3a\u53ef\u80fd.\u7279\u5236\u7684\u673a\u68b0\u65b9\u5757\u53ef\u4f7f\u5185\u90e8\u4fdd\u6301\u6781\u4f4e\u6e29\u5ea6,\u540c\u65f6\u7eb3\u7c73\u8702\u7fa4\u5f97\u76ca\u4e8e\u5176\u6781\u5c0f\u7684\u4f53\u578b,\u53ef\u4ee5\u6709\u6548\u5730\u8fdb\u884c\u70ed\u91cf\u4f20\u9012.\u5355\u6709\u8fd9\u4e9b\u4ecd\u7136\u4e0d\u591f,\u8fd8\u9700\u8981\u4e00\u4e9b\u51b7\u5374\u6db2,\u4f46\u5728\u6b64\u6e29\u5ea6\u4e0b\u6c34\u4f1a\u7ed3\u51b0,\u6240\u4ee5\u8d85\u7ea7\u51b7\u5374\u6db2\u6210\u4e3a\u4e86\u6211\u4eec\u7684\u9009\u62e9.%n%n\u8fd0\u884c\u65f6,\u7a7a\u51bb\u5854\u6bcf\u79d2\u6d88\u801710\u5347\u8d85\u7ea7\u51b7\u5374\u6db2,\u8ba9\u673a\u5668\u8fdb\u884c4/4\u8d85\u9891.\u8f93\u5165\u4ed3\u4f4d\u4e8e\u7a7a\u51bb\u5854\u7684\u5e95\u5c42\u4e2d\u592e.%n%n\u6b64\u5347\u7ea7\u4e0e\u6c34\u51b7\u5854\u4e0d\u517c\u5bb9.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMzQ==",
                    "tooltip": "<strong>\u7a7a\u51bb\u5854</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Tier 12 (UMV)</br>\u6c34\u51b7\u5854"
                },
                {
                    "name": "The SUCC",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6890147797704476497.png",
                    "x": 360.0,
                    "y": 240.0,
                    "data": "Like its predecessor it can run 4 different recipes at once, but this time each recipe has 16 parallels.\n\nA good solution for your Hydrogen and Helium problems.\n\n[note]This also requires Eternity to craft.[/note]",
                    "quest_id": "k0ryGOkkSBOgYUcVY-J4rw==",
                    "tooltip": "<strong>The SUCC</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Eternity</br>Black Dwarf Matter"
                },
                {
                    "name": "Tier 12 (UMV)",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6087268361248963518.png",
                    "x": -120.0,
                    "y": 12.0,
                    "data": "Welcome to the current penultimate tier of New Horizons.\n\nThis tier is the tier for upgrading everything and provides access to better parts to help you scale up.\n\nGood Luck.\n\n[warn]This tier is not fully complete. Expect stuff to change.[/warn]",
                    "quest_id": "jlXvqqgIQ_Crha2tW0gEQg==",
                    "tooltip": "<strong>Tier 12 (UMV)</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Your First SpaceTime"
                },
                {
                    "name": "Tier 4 QFT Catalysts",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7369799697449707989.png",
                    "x": 0.0,
                    "y": -84.0,
                    "data": "With Shirabon now acquired, you can finally create catalysts to use in your Tier 4 QFT.\n\n[note]These are extremely expensive, you may want to look into DTPF convergence, and faster means of creating Metastable Oganesson before you can make many of these.[/note]",
                    "quest_id": "u-2IsyxKTLiZuTY417qWKw==",
                    "tooltip": "<strong>Tier 4 QFT Catalysts</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Shirabon</br>\u7b49\u7ea74:\u8f6c\u5316"
                },
                {
                    "name": "UMV Energy Hatch",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7159553166987312386.png",
                    "x": 0.0,
                    "y": 108.0,
                    "data": "The penultimate energy hatch.\n\nHopefully you know what to upgrade first.\n\n[note]Have you checked out wireless energy hatches yet?[/note]",
                    "quest_id": "6rzcSbH2QY2cpChT2zLC_g==",
                    "tooltip": "<strong>UMV Energy Hatch</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>UMV Superconductors"
                },
                {
                    "name": "UMV Field Generator",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6232511347414889484.png",
                    "x": 60.0,
                    "y": 12.0,
                    "data": "Another Field Generator... you are almost done.",
                    "quest_id": "rdzpjzaCS2epgavzZr6L9A==",
                    "tooltip": "<strong>UMV Field Generator</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86.</br>UXV\u7535\u8def\u677f"
                },
                {
                    "name": "UMV Superconductors",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4972516930668425636.png",
                    "x": -48.0,
                    "y": 108.0,
                    "data": "One of the last wires you have to make for now.\n\n[note]Hope you're not using these for hooking up power to your pre-existing machines. Consider the Infinity Wire.[/note]",
                    "quest_id": "sKLPeimGTFS6_hIyc-SOXA==",
                    "tooltip": "<strong>UMV Superconductors</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86."
                },
                {
                    "name": "UXV\u7535\u8def\u677f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3244.png",
                    "x": 60.0,
                    "y": -84.0,
                    "data": "\u8fd9\u662fUXV\u7535\u8def\u677f.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMrA==",
                    "tooltip": "<strong>UXV\u7535\u8def\u677f</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Shirabon</br>UMV\u7535\u8def\u677f"
                },
                {
                    "name": "What Do I Use This Stuff On?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6820538323233352514.png",
                    "x": 288.0,
                    "y": 240.0,
                    "data": "White Dwarf Matter, your first main EOH material! I must be able to craft all sorts of cool endgame things with this... right?\n\n[note]Currently, besides EOH casing upgrades, White Dwarf Matter is not used anywhere on its own, often paired with Black Dwarf Matter or other later materials. Save it up for now and keep upgrading that EOH![/note]",
                    "quest_id": "_Cwgzi_VR5ChWJSIIrzUvg==",
                    "tooltip": "<strong>What Do I Use This Stuff On?</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>White Dwarf Matter"
                },
                {
                    "name": "White Dwarf Matter",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5796823047327111175.png",
                    "x": 288.0,
                    "y": 180.0,
                    "data": "Who knew that creating artificial solar systems would finally allow you to extract the core of a freshly dead star?\n\nWith your current crude casings, you can only accelerate the life of an artificial solar system to observe white dwarfs.\n\nPerhaps this matter will help you push the process even further.\n\n[note]This is one of the three EOH materials. Use it to upgrade your casings up to T4.[/note]",
                    "quest_id": "DVLahVNUQ-CvjYwmvkUn-Q==",
                    "tooltip": "<strong>White Dwarf Matter</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>An Eye at the End of Time"
                },
                {
                    "name": "Wireless Multi-Amp Hatches",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6794591825239688845.png",
                    "x": -48.0,
                    "y": -84.0,
                    "data": "With Shirabon now acquired, you can create 4A, 16A and 64A wireless energy hatches. These are particularly useful for machines which can use multi-amp, but do not need extreme amounts of power warranting a laser hatch.\n\n[note]These used to be needed in large quantities, being the best energy hatch to use on a Processing Array. May they rest in peace.[/note]",
                    "quest_id": "2TXAUm6oQ0OhtMK79tC5cw==",
                    "tooltip": "<strong>Wireless Multi-Amp Hatches</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Shirabon"
                },
                {
                    "name": "Yet Another Space Elevator Upgrade",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9189987553802947566.png",
                    "x": -144.0,
                    "y": -48.0,
                    "data": "This bad boi can handle 18 modules at once.",
                    "quest_id": "MiGXZ65sRwiAdpsCrVB0Eg==",
                    "tooltip": "<strong>Yet Another Space Elevator Upgrade</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Tier 12 (UMV)"
                },
                {
                    "name": "\u73cd\u60dc\u4f60\u81ea\u5df1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/3233.png",
                    "x": 432.0,
                    "y": 36.0,
                    "data": "\u5982\u679c\u4f60\u8fd8\u5728\u610f\u81ea\u5df1\u7684\u7406\u667a,\u5c31\u522b\u518d\u5f80\u524d\u8d70\u4e86.",
                    "quest_id": "AAAAAAAAAAAAAAAAAAAMoQ==",
                    "tooltip": "<strong>\u73cd\u60dc\u4f60\u81ea\u5df1</strong></br>\u524d\u7f6e\u4efb\u52a1\u9700\u6c42:</br>Are you Ready?"
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
                    "source": "\u5347\u7ea7\u6c38\u6052\u7ebf\u5708",
                    "target": "An Eye at the End of Time"
                },
                {
                    "source": "Are you Ready?",
                    "target": "An Eye at the End of Time"
                },
                {
                    "source": "UXV\u7535\u8def\u677f",
                    "target": "Are you Ready?"
                },
                {
                    "source": "Saving on SpaceTime",
                    "target": "Are you Ready?"
                },
                {
                    "source": "UMV Field Generator",
                    "target": "Are you Ready?"
                },
                {
                    "source": "Project Godforge",
                    "target": "A Second Ring has Hit the Godforge"
                },
                {
                    "source": "UMV Field Generator",
                    "target": "A Second Ring has Hit the Godforge"
                },
                {
                    "source": "An Eye at the End of Time",
                    "target": "Black Dwarf Matter"
                },
                {
                    "source": "White Dwarf Matter",
                    "target": "Black Dwarf Matter"
                },
                {
                    "source": "UMV Field Generator",
                    "target": "Convergence"
                },
                {
                    "source": "An Eye at the End of Time",
                    "target": "Finally, Universium!"
                },
                {
                    "source": "Black Dwarf Matter",
                    "target": "Finally, Universium!"
                },
                {
                    "source": "Tier 12 (UMV)",
                    "target": "Guzzling Massive Amounts of Gas"
                },
                {
                    "source": "Finally, Universium!",
                    "target": "Magnetic Monopole Matter"
                },
                {
                    "source": "Heliofusion Exoticizer",
                    "target": "Magnetic Monopole Matter"
                },
                {
                    "source": "Tier 12 (UMV)",
                    "target": "\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86."
                },
                {
                    "source": "An Eye at the End of Time",
                    "target": "Raw Stellar Plasma"
                },
                {
                    "source": "\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86.",
                    "target": "Saving on SpaceTime"
                },
                {
                    "source": "\u5347\u7ea7\u6c38\u6052\u7ebf\u5708",
                    "target": "Shirabon"
                },
                {
                    "source": "Tier 12 (UMV)",
                    "target": "Shirabon"
                },
                {
                    "source": "Metastable Oganesson",
                    "target": "Shirabon"
                },
                {
                    "source": "\u5347\u7ea7\u6c38\u6052\u7ebf\u5708",
                    "target": "Stars, So Many Stars"
                },
                {
                    "source": "Are you Ready?",
                    "target": "Stars, So Many Stars"
                },
                {
                    "source": "Fuwusion MK5",
                    "target": "Stellar Catalyst"
                },
                {
                    "source": "Heliothermal Plasma Fabricator",
                    "target": "Stellar Catalyst"
                },
                {
                    "source": "Raw Stellar Plasma",
                    "target": "Stellar Catalyst"
                },
                {
                    "source": "UXV\u7535\u8def\u677f",
                    "target": "Storing Computation in the Cloud"
                },
                {
                    "source": "Tier 12 (UMV)",
                    "target": "Subspace Cooling"
                },
                {
                    "source": "Tier 12 (UMV)",
                    "target": "\u7a7a\u51bb\u5854"
                },
                {
                    "source": "\u6c34\u51b7\u5854",
                    "target": "\u7a7a\u51bb\u5854"
                },
                {
                    "source": "Eternity",
                    "target": "The SUCC"
                },
                {
                    "source": "Black Dwarf Matter",
                    "target": "The SUCC"
                },
                {
                    "source": "Your First SpaceTime",
                    "target": "Tier 12 (UMV)"
                },
                {
                    "source": "Shirabon",
                    "target": "Tier 4 QFT Catalysts"
                },
                {
                    "source": "\u7b49\u7ea74:\u8f6c\u5316",
                    "target": "Tier 4 QFT Catalysts"
                },
                {
                    "source": "UMV Superconductors",
                    "target": "UMV Energy Hatch"
                },
                {
                    "source": "\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86.",
                    "target": "UMV Field Generator"
                },
                {
                    "source": "UXV\u7535\u8def\u677f",
                    "target": "UMV Field Generator"
                },
                {
                    "source": "\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86.",
                    "target": "UMV Superconductors"
                },
                {
                    "source": "Shirabon",
                    "target": "UXV\u7535\u8def\u677f"
                },
                {
                    "source": "UMV\u7535\u8def\u677f",
                    "target": "UXV\u7535\u8def\u677f"
                },
                {
                    "source": "White Dwarf Matter",
                    "target": "What Do I Use This Stuff On?"
                },
                {
                    "source": "An Eye at the End of Time",
                    "target": "White Dwarf Matter"
                },
                {
                    "source": "Shirabon",
                    "target": "Wireless Multi-Amp Hatches"
                },
                {
                    "source": "Tier 12 (UMV)",
                    "target": "Yet Another Space Elevator Upgrade"
                },
                {
                    "source": "Are you Ready?",
                    "target": "\u73cd\u60dc\u4f60\u81ea\u5df1"
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
    