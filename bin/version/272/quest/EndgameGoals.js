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
                    "name": "Assembling on Space Steroids",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u592a\u7a7a\u7ec4\u88c5\u6a21\u5757MK-III.png",
                    "x": 336.0,
                    "y": 252.0,
                    "tooltip": "Assembling on Space Steroids",
                    "data": "Has 64 parallels and consumes ~500b EU/t per modul<br/>e, expensive to run but absolutely worth it."
                },
                {
                    "name": "Eternity",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u6c38\u6052\u952d.png",
                    "x": 132.0,
                    "y": 216.0,
                    "tooltip": "Eternity",
                    "data": "Definitely consider this for the improved Magnetoh<br/>ydrodynamically Constrained Star Matter recipe. Yo<br/>u\u2019ll also need it to make MHDCSM parts.\n\nKickstart<br/>ing the loop is expensive and RNG-based. You need <br/>20,736 L of Universium for the first 5 attempts an<br/>d a catalyst.\n\nThe QFT recipe has a 25% chance of <br/>yielding Eternity per attempt. You should probably<br/> boost the QFT with plasmas and focus on producing<br/> Eternity.\n\n[note]Did you know the QFT has a fluid<br/> mode? It could be useful for extracting molten Sh<br/>irabon. Just right click the controller with a scr<br/>ewdriver.[/note]\n\n[note]Building a full beacon out<br/> of Eternity Blocks might be a bit extravagant, do<br/>n\u2019t you think?[/note]\n\n"
                },
                {
                    "name": "Fabricating Solar Systems... in Parallel",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u661f\u9635.png",
                    "x": 336.0,
                    "y": 216.0,
                    "tooltip": "Fabricating Solar Systems... in Parallel",
                    "data": "As you've noticed, UXV components are extremely ex<br/>pensive compared to the amount of Universium you c<br/>an currently produce.\n\nThe Astral Array Fabricator<br/> allows you to run EOH recipes in parallel. You ca<br/>n review the math in the second page of the toolti<br/>p.\n\nFor a direct answer, you can use this spreadsh<br/>eet: [url]https://docs.google.com/spreadsheets/d/1<br/>5j30mNnFIWBhwpJGuDrKTfiHBXNEEqyvB_r7ztFWlyQ[/url]\n<br/>\n[warn]Be aware that the EOH will use Raw Stellar <br/>Plasma instead of Hydrogen and Helium if you use A<br/>stral Arrays.[/warn]\n\n[note]Make sure you are gene<br/>rating enough power.[/note]"
                },
                {
                    "name": "Magnetohydrodynamically Constrained Starmatter",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u78c1\u6d41\u4f53\u7ea6\u675f\u6052\u661f\u7269\u8d28\u952d.png",
                    "x": 72.0,
                    "y": 252.0,
                    "tooltip": "Magnetohydrodynamically Constrained Starmatter",
                    "data": "Or MHDCSM for short.\n\nThis is your primary materia<br/>l for UXV components. It\u2019s tricky to make and extr<br/>emely expensive, as all endgame materials should b<br/>e.\n\nInstead of solidifying it directly, you need t<br/>o coat Eternity parts with it.\n\nHave fun!"
                },
                {
                    "name": "\u00a7b\u00a7lRule of Threes",
                    "symbolSize": 28.799999999999997,
                    "x": 336.0,
                    "y": 180.0,
                    "tooltip": "\u00a7b\u00a7lRule of Threes",
                    "data": "The final external structural upgrade to the Forge<br/> requires the most advanced understanding of gravi<br/>ton shards and their applications in extreme envir<br/>onments. With this, the last 4 module slots of the<br/> Forge of the Gods are available to construct, asc<br/>ending your operation to unseen heights of technol<br/>ogical mastery.\n\n[note]Adding a third and final ri<br/>ng to your Godforge allows for 4 additional module<br/>s, as well as allowing you to pick all three paths<br/> in the split paths part of the upgrade tree, allo<br/>wing for a fully upgraded Godforge.[/note]\n\n[note]<br/>Usage of a third ring requires the EE upgrade.[/no<br/>te]"
                },
                {
                    "name": "Simulating a Solar System",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u4f18\u79c0\u7684\u5efa\u8bbe\u8005\u52cb\u7ae0.png",
                    "x": 204.0,
                    "y": 252.0,
                    "tooltip": "Simulating a Solar System",
                    "data": "Almost as expensive as the real one, right? Not to<br/> worry, this stargate and the current are only jus<br/>t the beginning.\n\n[note]Our journey reaches the cu<br/>rrent end, entering the UXV, aka EOH era.\n\nThe yea<br/>r is 2023, and the game continues to be pushed fur<br/>ther and further. The EOH exists now, along with m<br/>achine parts up to UXV. Multiblocks have gained en<br/>dless amounts of quality of life, including sub 1-<br/>tick OC, batch mode, void protection, and numerous<br/> AE2 additions like Crafting Input Buses, Stocking<br/> Hatches, Level Maintainers and more. Automation h<br/>as never been easier, yet the goal has never been <br/>placed farther. Naquadah Fuel now has many tiers a<br/>nd can compete into the late-game, even competing <br/>with (now fixed) Dyson, but outclassed by the huge<br/> amount of power a maximized EOH can make (12.8 TE<br/>U/t!).\n\nInitially the stargate recipe seemed impos<br/>sible, requiring months of runtime on hundreds of <br/>maximized EOHs, requiring some adjustments to be m<br/>ore realistic to attain. After this was changed, t<br/>he race began again, this time between Johny709 an<br/>d GDCloud. Johny burned out towards the end, and G<br/>DCloud was surpassed by a silent contender, StarSt<br/>ack, being the first to conquer this challenge on <br/>the 26th of June, 2023.\n\nBeyond just the first, th<br/>is era marked the beginning of the Group Run Era, <br/>with large runs such as Ballers Run (setting this <br/>era into motion), Bee Run (affecting wide change o<br/>n the NH project and its management as a whole), a<br/>nd Cell Run 2 (the fastest ever Stargate run, in o<br/>nly 73 days, popularizing many automation techniqu<br/>es like Level Maintained lines).\n\nAdditionally, th<br/>is version saw the first player achieve GTNH Gods,<br/> reaching Stargate in a 3rd run, earned by GDCloud<br/> as a part of Cell Run 2 on the 23rd of June, 2024<br/>. Later this Stargate would see three others reach<br/> this goal, Ramspace on the 29th of September, 202<br/>4, and StaffiX and serenibyss in a group run on th<br/>e 17th of November, 2024.\n\nP.S.: Here's the list a<br/>s usual:\n-Many new processing multiblocks like HIL<br/>E, Fluid Shaper, Industrial Autoclave, etc.\n-Forge<br/> of the Gods, Black Hole Compressor, Antimatter po<br/>wer generation, Precise Assembler T4\n-DTPF Converg<br/>ence, Component Assembly Line tiered bonuses, Mega<br/> Vac Subspace Cooling, MK5 fusion skips for Metast<br/>able Oganesson\n-Wireless Data Hatches, Wireless Op<br/>tical Hatches, Uncertainty Resolution\n-Artificial <br/>Universe Cells, smart blocking mode[/note]"
                },
                {
                    "name": "\u661f\u95e8\u5e95\u5ea7\u65b9\u5757",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u661f\u95e8\u5e95\u5ea7\u65b9\u5757.png",
                    "x": 252.0,
                    "y": 24.0,
                    "tooltip": "\u661f\u95e8\u5e95\u5ea7\u65b9\u5757",
                    "data": "\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u661f\u95e8\u5e95\u5ea7\u65b9\u5757\u6765\u4f5c\u4e3a\u661f\u95e8\u7684\u57fa\u7840."
                },
                {
                    "name": "\u661f\u95e8\u5bfc\u6807\u5347\u7ea7",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u661f\u95e8\u5bfc\u6807\u5347\u7ea7.png",
                    "x": 252.0,
                    "y": 120.0,
                    "tooltip": "\u661f\u95e8\u5bfc\u6807\u5347\u7ea7",
                    "data": "\u60f3\u8981\u8ba9\u661f\u95e8\u53ef\u4ee5\u8de8\u7ef4\u5ea6\u8fd0\u884c,\u8fd9\u4e2a\u5347\u7ea7\u5fc5\u4e0d\u53ef\u5c0f,\u5b83\u53ef\u4ee5\u5728\u4f60\u62e5\u6709\u7b2c\u4e8c\u4e2a\u661f\u95e8\u540e\u62e8\u53f7\u8fde\u63a5..."
                },
                {
                    "name": "\u661f\u95e8\u5bfc\u6807\u65b9\u5757",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u661f\u95e8\u5bfc\u6807\u65b9\u5757.png",
                    "x": 276.0,
                    "y": 72.0,
                    "tooltip": "\u661f\u95e8\u5bfc\u6807\u65b9\u5757",
                    "data": "\u4e00\u4e2a\u5b8c\u6574\u7684\u661f\u95e8\u9700\u89817\u4e2a\u5bfc\u6807\u65b9\u5757."
                },
                {
                    "name": "\u661f\u95e8\u547d\u4ee4",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u661f\u95e8\u63a7\u5236\u5668.png",
                    "x": 132.0,
                    "y": 72.0,
                    "tooltip": "\u661f\u95e8\u547d\u4ee4",
                    "data": "\u597d\u5427,\u5982\u679c\u4f60\u771f\u7684\u60f3\u4f7f\u7528\u661f\u95e8,\u4f60\u9700\u8981\u8fd9\u4e9b\u6765\u7ed9\u5b83\u4f9b\u80fd\u5e76\u8fdb\u884c\u62e8\u53f7."
                },
                {
                    "name": "\u661f\u95e8\u5916\u73af\u65b9\u5757",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u661f\u95e8\u5916\u73af\u65b9\u5757.png",
                    "x": 156.0,
                    "y": 24.0,
                    "tooltip": "\u661f\u95e8\u5916\u73af\u65b9\u5757",
                    "data": "\u4e00\u4e2a\u5b8c\u6574\u7684\u661f\u95e8\u9700\u89818\u4e2a\u5916\u73af\u65b9\u5757."
                },
                {
                    "name": "\u5929\u5802\u4e4b\u95e8?",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u661f\u95e8\u8f90\u5c04\u9632\u62a4\u677f.png",
                    "x": 204.0,
                    "y": 144.0,
                    "tooltip": "\u5929\u5802\u4e4b\u95e8?",
                    "data": "\u4f60\u9700\u8981\u5927\u91cf\u7684\u8fd9\u79cd\u65b9\u5757\u624d\u80fd\u6784\u6210\u5b8c\u6574\u7684\u661f\u95e8..."
                },
                {
                    "name": "Tier 13 (UXV)",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/UXV\u673a\u5668\u5916\u58f3.png",
                    "x": 72.0,
                    "y": 180.0,
                    "tooltip": "Tier 13 (UXV)",
                    "data": "Welcome to the final tier of NH (for now).\n\nWe hop<br/>e you enjoy your stay, though be prepared for a lo<br/>t of waiting.\n\nNow that you have a reliable way to<br/> make MHDCSM, it would be wise to upgrade your EOH<br/>s to T9 for the Universium boost.\n\nHave fun crafti<br/>ng 2 Stargates!\n\n[warn]This tier is far from compl<br/>ete. Expect changes.[/warn]\n"
                },
                {
                    "name": "\u4ec0\u4e48?\u4f60\u662f\u600e\u4e48\u505a\u5230\u7684?",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u8fbe\u5c14\u6587\u52cb\u7ae0.png",
                    "x": 204.0,
                    "y": 0.0,
                    "tooltip": "\u4ec0\u4e48?\u4f60\u662f\u600e\u4e48\u505a\u5230\u7684?",
                    "data": "\u4f60\u4e0d\u5e94\u8be5\u5728\u8fd9\u91cc... \u6211\u8ba4\u4e3a\u5982\u679c\u4f60\u662f\u5408\u6cd5\u89e3\u9501\u4e86\u6b64\u4efb\u52a1\u7684,\u4f60\u5f97\u51fa\u95e8\u6652\u6652\u592a\u9633\u4e86...\u540c\u65f6,\u8fd9\u662f\u4f60\u7684\u5956\u52b1,<br/>\u522b\u4e00\u6b21\u5168\u82b1\u5149!"
                },
                {
                    "name": "\u4f60\u53ef\u80fd\u9700\u8981\u8fd9\u4e9b",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u540a\u70b8\u5929\u7535\u5bb9.png",
                    "x": 156.0,
                    "y": 120.0,
                    "tooltip": "\u4f60\u53ef\u80fd\u9700\u8981\u8fd9\u4e9b",
                    "data": "\u5b9e\u9645\u4e0a\u5b83\u53ef\u80fd\u65e0\u6cd5\u5b58\u50a8\u4efb\u4f55\u80fd\u91cf,\u4f46\u5bf9\u4e8e\u5176\u4ed6\u4e00\u4e9b\u7ec8\u6781\u7269\u54c1\u4ecd\u7136\u6709\u7528."
                },
                {
                    "name": "UXV\u9636\u6bb5",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u7535\u52a8\u9a6c\u8fbe(UXV).png",
                    "x": 204.0,
                    "y": 216.0,
                    "tooltip": "UXV\u9636\u6bb5",
                    "data": "\u613f\u68a6\u60f3\u5927\u5e08\u5782\u601c\u4e8e\u4f60\u7684\u7075\u9b42. \u4f60\u5df2\u7ecf\u62b5\u8fbe\u4e86\u6e38\u620f\u4e2d\u80fd\u5236\u4f5c\u7684\u6700\u9ad8\u7b49\u7ea7\uff01"
                },
                {
                    "name": "Your Lord and Saviour, UXV CoAL",
                    "symbolSize": 28.799999999999997,
                    "symbol": "image://icon/\u90e8\u4ef6\u88c5\u914d\u7ebf\u5916\u58f3(UXV).png",
                    "x": 276.0,
                    "y": 216.0,
                    "tooltip": "Your Lord and Saviour, UXV CoAL",
                    "data": "You want to rush this as soon as possible.\n\nEvery <br/>L of Universium matters."
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
                    "source": "Your Lord and Saviour, UXV CoAL",
                    "target": "Assembling on Space Steroids"
                },
                {
                    "source": "Magnetohydrodynamically Constrained Starmatter",
                    "target": "Eternity"
                },
                {
                    "source": "Stellar Catalyst",
                    "target": "Eternity"
                },
                {
                    "source": "Eternity",
                    "target": "Fabricating Solar Systems... in Parallel"
                },
                {
                    "source": "Finally, Universium!",
                    "target": "Magnetohydrodynamically Constrained Starmatter"
                },
                {
                    "source": "Your Lord and Saviour, UXV CoAL",
                    "target": "\u00a7b\u00a7lRule of Threes"
                },
                {
                    "source": "\u00a7b\u00a7lProject Godforge",
                    "target": "\u00a7b\u00a7lRule of Threes"
                },
                {
                    "source": "UXV\u9636\u6bb5",
                    "target": "Simulating a Solar System"
                },
                {
                    "source": "\u661f\u95e8\u5bfc\u6807\u65b9\u5757",
                    "target": "\u661f\u95e8\u5e95\u5ea7\u65b9\u5757"
                },
                {
                    "source": "\u5929\u5802\u4e4b\u95e8?",
                    "target": "\u661f\u95e8\u5bfc\u6807\u5347\u7ea7"
                },
                {
                    "source": "\u661f\u95e8\u5bfc\u6807\u5347\u7ea7",
                    "target": "\u661f\u95e8\u5bfc\u6807\u65b9\u5757"
                },
                {
                    "source": "\u4f60\u53ef\u80fd\u9700\u8981\u8fd9\u4e9b",
                    "target": "\u661f\u95e8\u547d\u4ee4"
                },
                {
                    "source": "\u661f\u95e8\u547d\u4ee4",
                    "target": "\u661f\u95e8\u5916\u73af\u65b9\u5757"
                },
                {
                    "source": "UXV\u9636\u6bb5",
                    "target": "\u5929\u5802\u4e4b\u95e8?"
                },
                {
                    "source": "\u73cd\u60dc\u4f60\u81ea\u5df1",
                    "target": "\u5929\u5802\u4e4b\u95e8?"
                },
                {
                    "source": "Magnetohydrodynamically Constrained Starmatter",
                    "target": "Tier 13 (UXV)"
                },
                {
                    "source": "Eternity",
                    "target": "Tier 13 (UXV)"
                },
                {
                    "source": "\u661f\u95e8\u5916\u73af\u65b9\u5757",
                    "target": "\u4ec0\u4e48?\u4f60\u662f\u600e\u4e48\u505a\u5230\u7684?"
                },
                {
                    "source": "\u661f\u95e8\u5e95\u5ea7\u65b9\u5757",
                    "target": "\u4ec0\u4e48?\u4f60\u662f\u600e\u4e48\u505a\u5230\u7684?"
                },
                {
                    "source": "\u5929\u5802\u4e4b\u95e8?",
                    "target": "\u4f60\u53ef\u80fd\u9700\u8981\u8fd9\u4e9b"
                },
                {
                    "source": "An Eye at the End of Time",
                    "target": "UXV\u9636\u6bb5"
                },
                {
                    "source": "Eternity",
                    "target": "UXV\u9636\u6bb5"
                },
                {
                    "source": "\u00a7b\u00a7lMagnetic Monopole Matter",
                    "target": "UXV\u9636\u6bb5"
                },
                {
                    "source": "UXV\u9636\u6bb5",
                    "target": "Your Lord and Saviour, UXV CoAL"
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