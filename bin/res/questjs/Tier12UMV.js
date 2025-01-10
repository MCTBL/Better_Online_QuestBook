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
                    "name": "An Eye at the End of Time",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9e3f\u8499\u4e4b\u773c.png",
                    "x": 324.0,
                    "y": 108.0,
                    "tooltip": "So you have made yourself an Eternal DTPF or hopef<br/>ully a few, and now it is time for the push to the<br/> next tier, UXV.\n\nIntroducing the final multiblock<br/> in the game, and by far the most expensive. \nIt i<br/>ntroduces 4 new materials: Raw Stellar Plasma, Whi<br/>te and Black Dwarf Matter and finally Universium.\n<br/>\nIt has 3 different tiered casings with 9 tiers ea<br/>ch: \n\nSpacetime Compression Field Generator:\n- Det<br/>ermines the tier of the planet block that can be r<br/>un and decreases the processing time by 3% per tie<br/>r.\n\nTime Dilation Field Generator:\n- Decreases rec<br/>ipe time by 50% per tier, while decreasing the cha<br/>nce of a recipe succeeding by 9.25% per tier.\n\nSta<br/>bilisation Field Generator:\n- Increases the chance<br/> of a recipe succeeding by 5% per tier, while decr<br/>easing the output of a recipe by 5% per tier.\n\nLow<br/>er tier Stabilisation Field Generators have a powe<br/>r output penalty.\n\nFinding the best setup of diffe<br/>rent casing tiers might be a hard task, so a calcu<br/>lator visualing all the drops and setups has been <br/>created: [url]https://docs.google.com/spreadsheets<br/>/d/15j30mNnFIWBhwpJGuDrKTfiHBXNEEqyvB_r7ztFWlyQ[/u<br/>rl]\n\n[note]Be sure to read the tooltip of the Eye <br/>of Harmony controller, it explains everything in d<br/>etail! Depending on your GUI scale it might have m<br/>ultiple pages.[/note]"
                },
                {
                    "name": "Are you Ready?",
                    "symbolSize": 124.80000000000001,
                    "x": 324.0,
                    "y": 12.0,
                    "tooltip": "From now on, you\u2019ll be dealing with extremely slow<br/> recipes.\n\nConsider finishing up your QFTs and upg<br/>rading or replacing your old infrastructure to sav<br/>e on TPS.\n\nYou should definitely upgrade your powe<br/>r generation and infrastructure to handle millions<br/> of recipes.\n\nThe Eye of Harmony will be consuming<br/> most of your power before it starts generating mo<br/>re than it uses.\n\nMay Colen have mercy on your sou<br/>l.\n\n[note]Welcome to the waiting lounge.[/note]"
                },
                {
                    "name": "\u00a7b\u00a7lA Second Ring has Hit the Godforge",
                    "symbolSize": 31.200000000000003,
                    "x": 24.0,
                    "y": -36.0,
                    "tooltip": "As additional rings are placed closer to the star <br/>at the center of the Forge, the gravitational stre<br/>ss drastically increases on the structure. Gravito<br/>n shards alleviate these stresses while also creat<br/>ing localized spacetime bridges to link the two ri<br/>ngs and their modules\u2019 respective upgrades.\n\n[note<br/>]Adding a second ring to your Godforge allows for <br/>4 additional modules, as well as allowing you to p<br/>ick a second path in the split paths part of the u<br/>pgrade tree.[/note]\n\n[note]Usage of a second ring <br/>requires the CD upgrade.[/note]"
                },
                {
                    "name": "Black Dwarf Matter",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9ed1\u77ee\u661f\u7269\u8d28\u952d.png",
                    "x": 360.0,
                    "y": 180.0,
                    "tooltip": "Reinforcing your casings with matter from white dw<br/>arfs was a good idea.\n\nYou can now accelerate a so<br/>lar system until a black dwarf forms. This materia<br/>l will likely be key to observing and understandin<br/>g what happens next.\n\nThis is the second of your t<br/>hree EOH materials. Use it to upgrade your casings<br/> to T7.\n\n[note]The EOH becomes power positive once<br/> all the casings are Tier 7.[/note]"
                },
                {
                    "name": "Convergence",
                    "symbolSize": 31.200000000000003,
                    "x": 96.0,
                    "y": 60.0,
                    "tooltip": "Running your Dimensionally Transcendent Plasma For<br/>ge for an extended period [note](8 hours)[/note] a<br/>llows the Multidimensional Spaces to align perfect<br/>ly.\n\nWith your newly acquired technology, you can <br/>now tap into these spaces in perfect sync, enablin<br/>g your plasma forges to operate at incredible spee<br/>ds.\n\nThe Transdimensional Alignment Matrix allows <br/>the DTPF to run with Perfect Overclocks. To achiev<br/>e this, you need a full discount, and the extra po<br/>wer cost is offset by using more of the same catal<br/>yst.\n\nOverall, it is more efficient and totally wo<br/>rth it.\n\nThis process is extremely catalyst-hungry<br/>. Ensure you're producing enough to sustain it.\n\nF<br/>or recipes without a catalyst, you must specify th<br/>e catalyst in the GUI by right-clicking the Conver<br/>gence button, otherwise it will default to Crude.[<br/>/note]\n\n[note]Math for the curious:\n\nTo clear up w<br/>hat exactly happens in the background, here's an e<br/>xplanation on how the extra catalyst values are ca<br/>lculated using an example:\n\nThe example recipe of <br/>choice is the molten neutronium recipe using prosa<br/>ic catalyst, running at 64A UMV (8,589,934,592 EU/<br/>t).\nThe recipe uses 14,753L of Prosaic catalyst an<br/>d 36,484,545,600 EU per recipe without OCs or the <br/>catalyst discount. With the discount, the catalyst<br/> amount gets cut in half, meaning 7,376.5\u00a7 L of ca<br/>talyst, which are rounded to 7,376L, and due to th<br/>e 64A UMV the machine is supplied with the recipe <br/>overclocks 3 times, meaning each recipe actually u<br/>ses 36,484,545,600 * 2^3 = 291,876,364,800 EU. \n\nK<br/>nowing the amount of OCs and the base voltage of t<br/>he recipe, the difference of the needed EU per rec<br/>ipe with and without perfect OC can be calculated,<br/> that being 291,876,364,800 - 36,484,545,600 = 255<br/>,391,819,200 extra EU due to imperfect OCs.\nTo get<br/> the value of needed extra catalyst, this extra EU<br/> value has to be divided by the energy density of <br/>the relevant catalyst, prosaic in this case.\n\nThe <br/>division equates to 255,391,819,200 EU / 66,768,46<br/>0 EU/L = 3,825.037 L, rounded to 3,825L extra pros<br/>aic catalyst per recipe. For the final step, this <br/>value has to be multiplied by 0.5 as its affected <br/>by the discount, meaning the total extra catalyst <br/>that gets added to the recipe is 3,825L * 0.5 = 1,<br/>912.5 L, rounded to 1,912L.\n\nTo summarise it all i<br/>n a formula:\nAmount extra catalyst per recipe = (B<br/> * ((2^x) - 1))/2L\nwhere:\nB is base total EU of th<br/>e recipe\nx is the number of overclocks\nL is the EU<br/>/L of the relevant catalyst [/note]\n"
                },
                {
                    "name": "Finally, Universium!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5b87\u5b99\u7d20\u952d.png",
                    "x": 432.0,
                    "y": 180.0,
                    "tooltip": "You\u2019ve finally solved it. Who knew that leaving de<br/>ad stars long enough would cause your artificial s<br/>olar system to implode and lead to a Big Bang?\n\nIf<br/> only you could tap into that much mass right befo<br/>re it started expanding again, you could literally<br/> hold the entire universe in the palm of your hand<br/>.\n\nThis is your third and final material from the <br/>EOH.\n\n[note]It's mainly used for UXV crafts, but y<br/>our first few should go in the Eternity loop. The <br/>quest for it is located in the Endgame Goals tab.\n<br/>\nCongrats! You can now move on to the UXV tier.[/n<br/>ote]"
                },
                {
                    "name": "Guzzling Massive Amounts of Gas",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u592a\u7a7a\u94bb\u673a\u6a21\u5757MK-II.png",
                    "x": -96.0,
                    "y": -48.0,
                    "tooltip": "It can run 4 different recipes simultaneously, wit<br/>h 4 parallels for each recipe.\n\nA worthy upgrade f<br/>or some SpaceTime."
                },
                {
                    "name": "\u00a7b\u00a7lMagnetic Monopole Matter",
                    "symbolSize": 31.200000000000003,
                    "x": 432.0,
                    "y": 240.0,
                    "tooltip": "With total mastery of the Forge of the Gods achiev<br/>ed, it is possible to begin a new universe-spannin<br/>g initiative. It is now possible to quantize and e<br/>xtract graviton shards for use outside the Forge i<br/>n powerful new technological endeavours; produce t<br/>he most exotic plasmas beyond merely periodic elem<br/>ents; and most importantly, begin to understand th<br/>e immense power of magmatter, a form of matter mad<br/>e entirely of magnetic monopoles with density and <br/>stability billions of times that of conventional b<br/>osonic matter. It is with this development you rea<br/>lise that the completion of the Forge was not the <br/>end goal, but merely a stepping stone to universal<br/> transcendence.\n\n[note]Required for UXV components<br/>, Magmatter is the second material the Heliofusion<br/> Exoticizer can create, and will require a second <br/>module. Read the Godforge Information in the UI fo<br/>r more information on how to automate this.[/note]<br/>\n\n[note]The creation of Magmatter requires the END<br/> upgrade.[/note]\n"
                },
                {
                    "name": "\u7ec8\u4e8e,\u4f60\u5728\u8fd9\u4e86.",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7535\u52a8\u9a6c\u8fbe(UMV).png",
                    "x": -24.0,
                    "y": 60.0,
                    "tooltip": "\u8fd8\u80fd\u518d\u5f3a\u4e00\u70b9."
                },
                {
                    "name": "Raw Stellar Plasma",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u6d53\u7f29\u539f\u59cb\u6052\u661f\u7b49\u79bb\u5b50\u4f53\u6df7\u5408\u7269\u5355\u5143.png",
                    "x": 216.0,
                    "y": 180.0,
                    "tooltip": "Created by all tiers of the Eye of Harmony, Raw St<br/>ellar Plasma can be used for several things includ<br/>ing Stellar Catalyst.\n\n[note]You may want to be ca<br/>reful with this material, as later running EOH's w<br/>ith Astral Arrays requires this instead of Hydroge<br/>n and Helium, so make sure to never fully run out!<br/>[/note]"
                },
                {
                    "name": "Saving on SpaceTime",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u90e8\u4ef6\u88c5\u914d\u7ebf\u5916\u58f3(UMV).png",
                    "x": 60.0,
                    "y": 108.0,
                    "tooltip": "SpaceTime is quite a challenge, isn\u2019t it? You shou<br/>ld definitely consider upgrading your Component As<br/>sembly Lines to save on some of it.\n\n[note]Did you<br/> know you can wall-share the component casings? Ju<br/>st turn one CoAL upside down.\n\nThe CoAL will perfo<br/>rm Perfect Overclocks for the recipes below its ti<br/>er.[/note]"
                },
                {
                    "name": "Shirabon",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8c03\u5f8b\u6e90\u91d1\u952d.png",
                    "x": -24.0,
                    "y": -36.0,
                    "tooltip": "A helper material needed in some UMV and UXV compo<br/>nents. Have fun making millions.\n\n[note]This is ex<br/>tremely slow to make and to process.[/note]"
                },
                {
                    "name": "Stars, So Many Stars",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u52cb\u7ae0-\u5450\u5450\u5450\u5450\u5450\u5450\u2026\u2026\u2026\u626d\u66f2\u8005!.png",
                    "x": 432.0,
                    "y": -12.0,
                    "tooltip": "Eternal coils? Perfect time for stargate trophy nu<br/>mber three. \nYou know the drill, you give 2 starga<br/>tes' worth of stuff, you get your trophy. Simple a<br/>s that.\n\n[note]Our journey through time continues <br/>onwards, entering the UMV, aka DTPF era.\n\nSurprisi<br/>ngly, it still is the year 2022, but there have be<br/>en a huge amount of changes since our last stop in<br/> the UEV era. The DTPF exists now, hypogen & etern<br/>al coils included, and machine parts up to UMV thu<br/>s are craftable. Wireless energy is a thing now to<br/>o, both the LSC and the regular hatch kind, and AE<br/>2FC is in the pack, allowing direct fluid crafting<br/> (meaning no more volumetric flask shuffling). \nTh<br/>e power situation hasnt changed much since the UEV<br/> era, except for dyson being even more bugged and <br/>giving free uncapped infinite power (abusing this <br/>was obviously labeled as bugabuse). \nSome other ne<br/>w useful things are the MABS, Integrated Ore Facto<br/>ry, Space Elevator, UIV and UMV singleblocks (and <br/>PAs accepting up to 64 UEV+ machines), EIG, EEC, i<br/>ndustrial & mega apiary, yottanks, stocking buses,<br/> data bank chaining and the Draconic Fusion Crafte<br/>r.\nThe stargate's cost has now skyrocketed far mor<br/>e than ever before, marking the beginning of this <br/>new era of GT:NH endgame, the era of expansion.\n\nT<br/>his time around the leading \u00a7aGDCloud\u00a7r was challe<br/>nged by the team \u00a7aNeo Caelestia\u00a7r, who were progr<br/>essing at a staggering speed, inching ever closer <br/>to being first to gate, but ultimately weren't abl<br/>e to fully catch up and thus \u00a7aGDCloud\u00a7r once agai<br/>n was first to conquer the challenge on the \u00a7a19th<br/> of November, 2022\u00a7r.\n\nP.S.: You know how this wor<br/>ks, right? Here's the list:\n-PCB Factory, Componen<br/>t Assemblyline, AAL, Transcendent Plasma Mixer, EO<br/>H, QFT\n-Multi-Amp wireless hatches\n-Sub 1-tick OC,<br/> Batch Mode, inbuilt Void Protection on multis\n-Le<br/>vel Maintainer, Stocking Hatches, Crafting Input B<br/>uses\n\nP.P.S.: Chaotic capacitor bank? What's that?<br/>[/note]"
                },
                {
                    "name": "Stellar Catalyst",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6fc0\u53d1\u7684\u6052\u661f\u8d85\u7ef4\u5ea6\u50ac\u5316\u5242\u5355\u5143.png",
                    "x": 216.0,
                    "y": 240.0,
                    "tooltip": "Your attempts to improve your dimensional catalyst<br/> have been futile so far, but with the Raw Stellar<br/> Plasma from your Eye of Harmony, you can finally <br/>create a stable and more powerful catalyst.\n\nYou w<br/>ill need some higher-tier plasmas to help maintain<br/> its stability as well.\n\n[warn]Handle with care. W<br/>e are not responsible for your base turning into s<br/>upermassive black holes. /s[/warn]"
                },
                {
                    "name": "Storing Computation in the Cloud",
                    "symbolSize": 31.200000000000003,
                    "x": 60.0,
                    "y": -132.0,
                    "tooltip": "Wireless Computation is similar to Wireless Data, <br/>Cloud Computation Server Hatches send computation <br/>to Cloud Computation Client Hatches, which other m<br/>ultiblocks can use.\n\nPlace down a Server Hatch on <br/>a Quantum Computer, screwdriver the controller to <br/>enable Wireless Mode, then after placing down a Cl<br/>ient Hatch, you have to set how much computation i<br/>t should request from the Server Hatch.\n\n[note]Wir<br/>eless Data Hatches are N:M instead of 1:1[/note]"
                },
                {
                    "name": "Subspace Cooling",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5de8\u578b\u771f\u7a7a\u51b7\u51bb\u673a.png",
                    "x": -144.0,
                    "y": 72.0,
                    "tooltip": "Cooling exotic ingots proves to be a much bigger c<br/>hallenge than smelting them.\n\nFortunately, reinfor<br/>cing some of the casings with your new materials a<br/>llows you to inject exotic coolants that capture e<br/>xtreme heat in miniature tears of spacetime, helpi<br/>ng to cool your ingots a bit faster.\n\nWith Subspac<br/>e Cooling, you can enable the Vacuum Freezer to ac<br/>hieve Perfect Overclocks\u2026 at a cost.\n\nTier 1 will <br/>consume SpaceTime in liquid form at [warn]7500 L/s<br/>[/warn] and allow for 1 Perfect Overclock.\n\n[note]<br/>This cost is very high but static, remaining the s<br/>ame for each recipe being run. So, be selective ab<br/>out cooling your ingots.\n\nThe faster the recipes, <br/>the more efficient the cost, so find your optimal <br/>balance.[/note]\n\nThe Infinity Cooled Casings repla<br/>ce the Frostproof casings, so you don\u2019t need to wo<br/>rry about damaging your setups."
                },
                {
                    "name": "\u7a7a\u51bb\u5854",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u5c3d\u51b7\u5374\u673a\u68b0\u65b9\u5757.png",
                    "x": -96.0,
                    "y": 72.0,
                    "tooltip": "\u638c\u63a7\u65f6\u7a7a,\u4f60\u5df2\u7ecf\u53ef\u4ee5\u8ba9\u6e29\u5ea6\u63a5\u8fd1\u7edd\u5bf9\u96f6\u5ea6,\u8fd9\u4f7f\u5f97\u7814\u53d1\u66f4\u68d2\u7684\u51b7\u5374\u5355\u5143\u6210\u4e3a\u53ef\u80fd.\u7279\u5236\u7684\u673a\u68b0\u65b9\u5757\u53ef\u4f7f\u5185\u90e8\u4fdd\u6301<br/>\u6781\u4f4e\u6e29\u5ea6,\u540c\u65f6\u7eb3\u7c73\u8702\u7fa4\u5f97\u76ca\u4e8e\u5176\u6781\u5c0f\u7684\u4f53\u578b,\u53ef\u4ee5\u6709\u6548\u5730\u8fdb\u884c\u70ed\u91cf\u4f20\u9012.\u5355\u6709\u8fd9\u4e9b\u4ecd\u7136\u4e0d\u591f,\u8fd8\u9700\u8981\u4e00\u4e9b\u51b7\u5374\u6db2<br/>,\u4f46\u5728\u6b64\u6e29\u5ea6\u4e0b\u6c34\u4f1a\u7ed3\u51b0,\u6240\u4ee5\u8d85\u7ea7\u51b7\u5374\u6db2\u6210\u4e3a\u4e86\u6211\u4eec\u7684\u9009\u62e9.\u8fd0\u884c\u65f6,\u7a7a\u51bb\u5854\u6bcf\u79d2\u6d88\u801710\u5347\u8d85\u7ea7\u51b7\u5374\u6db2,\u8ba9\u673a<br/>\u5668\u8fdb\u884c4/4\u8d85\u9891.\u8f93\u5165\u4ed3\u4f4d\u4e8e\u7a7a\u51bb\u5854\u7684\u5e95\u5c42\u4e2d\u592e.\u6b64\u5347\u7ea7\u4e0e\u6c34\u51b7\u5854\u4e0d\u517c\u5bb9."
                },
                {
                    "name": "The SUCC",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u592a\u7a7a\u94bb\u673a\u6a21\u5757MK-III.png",
                    "x": 360.0,
                    "y": 240.0,
                    "tooltip": "Like its predecessor it can run 4 different recipe<br/>s at once, but this time each recipe has 16 parall<br/>els.\n\nA good solution for your Hydrogen and Helium<br/> problems.\n\n[note]This also requires Eternity to c<br/>raft.[/note]"
                },
                {
                    "name": "Tier 12 (UMV)",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/UMV\u673a\u5668\u5916\u58f3.png",
                    "x": -120.0,
                    "y": 12.0,
                    "tooltip": "Welcome to the current penultimate tier of New Hor<br/>izons.\n\nThis tier is the tier for upgrading everyt<br/>hing and provides access to better parts to help y<br/>ou scale up.\n\nGood Luck.\n\n[warn]This tier is not f<br/>ully complete. Expect stuff to change.[/warn]"
                },
                {
                    "name": "Tier 4 QFT Catalysts",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7ec8\u6781\u589e\u5851\u50ac\u5316\u5242.png",
                    "x": 0.0,
                    "y": -84.0,
                    "tooltip": "With Shirabon now acquired, you can finally create<br/> catalysts to use in your Tier 4 QFT.\n\n[note]These<br/> are extremely expensive, you may want to look int<br/>o DTPF convergence, and faster means of creating M<br/>etastable Oganesson before you can make many of th<br/>ese.[/note]"
                },
                {
                    "name": "UMV Energy Hatch",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/UMV\u80fd\u6e90\u4ed3.png",
                    "x": 0.0,
                    "y": 108.0,
                    "tooltip": "The penultimate energy hatch.\n\nHopefully you know <br/>what to upgrade first.\n\n[note]Have you checked out<br/> wireless energy hatches yet?[/note]"
                },
                {
                    "name": "UMV Field Generator",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u529b\u573a\u53d1\u751f\u5668(UMV).png",
                    "x": 60.0,
                    "y": 12.0,
                    "tooltip": "Another Field Generator... you are almost done."
                },
                {
                    "name": "UMV Superconductors",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/1xUMV\u8d85\u5bfc\u5bfc\u7ebf.png",
                    "x": -48.0,
                    "y": 108.0,
                    "tooltip": "One of the last wires you have to make for now.\n\n[<br/>note]Hope you're not using these for hooking up po<br/>wer to your pre-existing machines. Consider the In<br/>finity Wire.[/note]"
                },
                {
                    "name": "UXV\u7535\u8def\u677f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u91cf\u5b50\u7535\u8def.png",
                    "x": 60.0,
                    "y": -84.0,
                    "tooltip": "\u8fd9\u662fUXV\u7535\u8def\u677f."
                },
                {
                    "name": "What Do I Use This Stuff On?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u767d\u77ee\u661f\u6a21\u5934(\u7ba1\u9053).png",
                    "x": 288.0,
                    "y": 240.0,
                    "tooltip": "White Dwarf Matter, your first main EOH material! <br/>I must be able to craft all sorts of cool endgame <br/>things with this... right?\n\n[note]Currently, besid<br/>es EOH casing upgrades, White Dwarf Matter is not <br/>used anywhere on its own, often paired with Black <br/>Dwarf Matter or other later materials. Save it up <br/>for now and keep upgrading that EOH![/note]"
                },
                {
                    "name": "White Dwarf Matter",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u767d\u77ee\u661f\u7269\u8d28\u952d.png",
                    "x": 288.0,
                    "y": 180.0,
                    "tooltip": "Who knew that creating artificial solar systems wo<br/>uld finally allow you to extract the core of a fre<br/>shly dead star?\n\nWith your current crude casings, <br/>you can only accelerate the life of an artificial <br/>solar system to observe white dwarfs.\n\nPerhaps thi<br/>s matter will help you push the process even furth<br/>er.\n\n[note]This is one of the three EOH materials.<br/> Use it to upgrade your casings up to T4.[/note]"
                },
                {
                    "name": "Wireless Multi-Amp Hatches",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/64\u5b89UMV\u65e0\u7ebf\u80fd\u6e90\u4ed3.png",
                    "x": -48.0,
                    "y": -84.0,
                    "tooltip": "With Shirabon now acquired, you can create 4A, 16A<br/> and 64A wireless energy hatches. These are partic<br/>ularly useful for machines which can use multi-amp<br/>, but do not need extreme amounts of power warrant<br/>ing a laser hatch.\n\n[note]These used to be needed <br/>in large quantities, being the best energy hatch t<br/>o use on a Processing Array. May they rest in peac<br/>e.[/note]"
                },
                {
                    "name": "Yet Another Space Elevator Upgrade",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u592a\u7a7a\u7535\u68af\u52a0\u901f\u8f68\u9053MK-IV.png",
                    "x": -144.0,
                    "y": -48.0,
                    "tooltip": "This bad boi can handle 18 modules at once.\n\n"
                },
                {
                    "name": "\u73cd\u60dc\u4f60\u81ea\u5df1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/Giga Chad\u4ee3\u5e01.png",
                    "x": 432.0,
                    "y": 36.0,
                    "tooltip": "\u5982\u679c\u4f60\u8fd8\u5728\u610f\u81ea\u5df1\u7684\u7406\u667a,\u5c31\u522b\u518d\u5f80\u524d\u8d70\u4e86."
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
                    "source": "\u00a7b\u00a7lProject Godforge",
                    "target": "\u00a7b\u00a7lA Second Ring has Hit the Godforge"
                },
                {
                    "source": "UMV Field Generator",
                    "target": "\u00a7b\u00a7lA Second Ring has Hit the Godforge"
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
                    "target": "\u00a7b\u00a7lMagnetic Monopole Matter"
                },
                {
                    "source": "\u00a7b\u00a7lHeliofusion Exoticizer",
                    "target": "\u00a7b\u00a7lMagnetic Monopole Matter"
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
                    "source": "\u00a7b\u00a7lHeliothermal Plasma Fabricator",
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