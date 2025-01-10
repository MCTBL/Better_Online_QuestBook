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
                    "name": "\u300c \u300d",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u963f\u5361\u897f\u8bb0\u5f55.png",
                    "x": 468.0,
                    "y": 264.0,
                    "tooltip": "\u5f53\u4f60\u4ee5\u67d0\u79cd\u65b9\u5f0f\u8bbe\u6cd5\u8fde\u63a5\u4e0a\u5b83\u540e,\u53ef\u4ee5\u83b7\u5f97\u5927\u91cf\u7684\u7814\u7a76\u70b9,\u4f46\u4f60\u4e0d\u4f1a\u56e0\u6b64\u6210\u4e3a\u4e0a\u5e1d. \u4e0d\u8fc7\u4f60\u4e5f\u4e0d\u4f1a\u5c31\u6b64\u6d88\u5931,\u6240<br/>\u4ee5\u8fd9\u53ef\u80fd\u662f\u4e00\u6b21\u4f53\u9762\u7684\u4ea4\u6613\u5427."
                },
                {
                    "name": "A Blast to the Past",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5b98\u65b9GT\u73a9\u5bb6\u52cb\u7ae0.png",
                    "x": 24.0,
                    "y": 72.0,
                    "tooltip": "Now that you have the bio mainframe, you have unlo<br/>cked the first of the stargate trophies! \nYes, the<br/>re's multiple of them, one for each major iteratio<br/>n of the stargate recipe. \nThese trophies are just<br/> that, trophies, and you can try to craft them if <br/>you want to compare the costs to today's stargate <br/>standards.\nTo complete these quests you have to su<br/>bmit two stargates' worth of materials.\n\n\u00a73Now, le<br/>t me bestow upon you a short history lesson about <br/>this point in GT:NHs past.\n\nThe year is 2020. The <br/>bio mainframe was pretty much the end of GT:NH pro<br/>gression at the time, not much above UHV existed o<br/>r was craftable. This was also the point in the pa<br/>ck where you'd start scaling for stargate, as that<br/> too was tiered at UHV. Technically UEV parts were<br/> craftable, but their only uses were singleblocks <br/>for PAs (which only held up to 16 UEV machines) an<br/>d the Deep Dark Portal. UEV-UMV energy hatches wer<br/>e craftable, but their recipes were simple hull + <br/>wire crafting table recipes \n...and that was about<br/> it for UHV+ content. \nWith the recent addition of<br/> void miners, the previously thought to be impossi<br/>ble started to seem actually attainable, a set of <br/>stargates. Specifically, to \u00a7ocraft\u00a73 a set of the<br/>m, not just find them like others have before. \n\nO<br/>ne group in particular, known as the \u00a7aGigaplex\u00a73,<br/> gave it their all and actually managed to do it, <br/>to prove that crafting stargates is possible with <br/>enough determination.\n\nThus, on the \u00a7a16th of Febr<br/>uary, 2021\u00a73, the first set of crafted stargates h<br/>ad been born.\n\nP.S.: If you want to be as faithful<br/> to the challenge as possible, try completing this<br/> quest without using any of the modern functionali<br/>ty that didn't exist back then.\nHere's a non-exhau<br/>stive list of major things that didnt exist (in no<br/> particular order):\n-PCB Factory, Space Elevator, <br/>Component Assemblyline, AAL, PrAss, EEC, EIG, Comp<br/>act Fusions, MCR, MABS\n-Any bee related GT machine<br/>s\n-Any UEV or above multis\n-XL Turbines, Naq fuel,<br/> LEG\n-Sub 1-tick OC, Batch Mode, inbuilt Void Prot<br/>ection on multis\n-PAs with more than 64 parallel (<br/>they automatically downtiered to UHV if you used U<br/>EV machines)\n-Level Maintainer, AE Fluid Crafting,<br/> Stocking Buses/Hatches, Crafting Input Buses, ME <br/>Output Buses/Hatches, non-recursive AE component r<br/>ecipes\n-Shift clicking recipes into AE patterns (p<br/>ain)\n-Early-Midgame QoL such as ghost circuits, vi<br/>sual prospecting, reprogramming circuits with a sc<br/>rewdriver, seeing Assline recipes in NEI before ha<br/>ving crafted them, and more\n\nP.P.S: This quest is <br/>missing the chaotic capacitors on purpose, because<br/> the chaotic core recipe requires spacetime now, b<br/>ut the chaotic capacitor recipe did not change at <br/>all since then. All in all the cost for these bank<br/>s was completely negligible back then and still is<br/> today, they only serve as a magic gate for SG."
                },
                {
                    "name": "\u6613\u88c5\u5378!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8fdb\u9636\u7535\u8def\u7ec4\u88c5\u673a VII.png",
                    "x": 312.0,
                    "y": 408.0,
                    "tooltip": "\u60f3\u8981\u5236\u9020\u751f\u7269\u7cfb\u5217\u7535\u8def\u677f,\u4f60\u9700\u8981\u5236\u9020UV\u7535\u8def\u7ec4\u88c5\u673a. \u8fd9\u662f\u4f60\u9700\u8981\u5236\u9020\u7684\u6700\u540e\u4e00\u4e2a\u7535\u8def\u7ec4\u88c5\u673a.\u8bd1\u8005\u6ce8:\u9664\u975e<br/>\u4f60\u8fd8\u60f3\u505a\u78c1\u5171\u632f\u7535\u8def\u7ebf..."
                },
                {
                    "name": "\u8d85\u8d8a\u6781\u9650",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u5f3a\u5316\u535a\u7279\u59c6\u5408\u91d1\u673a\u68b0\u65b9\u5757.png",
                    "x": 120.0,
                    "y": 216.0,
                    "tooltip": "\u4e3a\u4e86\u5236\u9020UEV\u90e8\u4ef6\u6216\u751f\u7269\u7535\u8def\u677f,\u4f60\u9700\u8981\u5408\u6210\u4e00\u79cd\u5168\u65b0\u7684\u6d3b\u6027\u710a\u6599,\u8fd9\u79cd\u710a\u6599\u8981\u6c42\u5f3a\u5316\u535a\u7279\u59c6\u5408\u91d1\u673a\u68b0\u65b9\u5757\u4e3a\u5916<br/>\u58f3\u7684\u5316\u5de5\u5382. \u8fd9\u4e9b\u5408\u91d1\u9020\u8d77\u6765\u53ef\u5c31\u4e0d\u592a\u5bb9\u6613\u4e86!\u6211\u76f8\u4fe1\u4f60\u4e00\u5b9a\u53ef\u4ee5\u5f04\u6e05\u695a\u5176\u4ed6\u6750\u6599\u7684\u5236\u9020,\u9664\u4e86\u9ad8\u7ea7\u954d\u949b\u8bfa\u53ef\u80fd<br/>\u8ba9\u4f60\u6709\u70b9\u5934\u75bc. \u5b83\u662f\u7531\u954d\u949b\u8bfa60\u5757\u914d\u5408\u91cf\u5b50\u53cd\u5e38\u5728\u6fc0\u5149\u8680\u523b\u673a\u5236\u6210\u7684. \u8fd9\u610f\u5473\u7740\u4f60\u9700\u8981\u5148\u642d\u4e00\u4e2aUV\u7535\u538b\u7684<br/>\u7d27\u51d1\u5f0f\u56de\u65cb\u52a0\u901f\u5668,\u5e76\u8fde\u7eed\u78b0\u4e0a\u4e24\u6b211\uff05\u7684\u51e0\u7387. \u795d\u4f60\u597d\u8fd0!"
                },
                {
                    "name": "\u751f\u7269\u7535\u8def\u677f2: \u751f\u7269\u888b\u9f20",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u751f\u7269\u5904\u7406\u5668\u96c6\u7fa4.png",
                    "x": 24.0,
                    "y": 312.0,
                    "tooltip": "\u751f\u7269\u5904\u7406\u5668\u96c6\u7fa4\u662f\u7b2c\u4e8c\u79cd\u751f\u7269\u7535\u8def\u677f. \u5b83\u662fUV\u7535\u8def\u677f."
                },
                {
                    "name": "Cheaper LuV Circuits",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6e7f\u4ef6\u5904\u7406\u5668.png",
                    "x": 216.0,
                    "y": -36.0,
                    "tooltip": "The crystal living chips are more efficient and wi<br/>ll make your wetware processors cheaper!"
                },
                {
                    "name": "\u83b7\u53d6\u4e2d\u5b50\u7d20\u7684\u53e6\u4e00\u79cd\u65b9\u5f0f",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4e2d\u5b50\u6001\u7d20\u6536\u96c6\u5668.png",
                    "x": 372.0,
                    "y": 348.0,
                    "tooltip": "\u6709\u4e86\u65e0\u5c3d\u952d,\u4f60\u5c31\u80fd\u7528\u65e0\u5c3d\u8d2a\u5a6a\u7684\u4e2d\u5b50\u6001\u7d20\u6536\u96c6\u5668\u6765\u83b7\u5f97\u4e2d\u5b50\u6001\u7d20\u5c18\u57c3. \u65e0\u9700\u4efb\u4f55\u80fd\u91cf.\u8b66\u544a:\u8fd9\u53f0\u673a\u5668\u975e\u5e38\u6162<br/>,\u6240\u4ee5\u6216\u8bb8\u4f60\u5e94\u8be5\u5e2e\u5e2e\u5b83..."
                },
                {
                    "name": "\u538b\u7f29\u661f\u6838",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u65e0\u5c3d\u50ac\u5316\u5242.png",
                    "x": 312.0,
                    "y": 216.0,
                    "tooltip": "\u4e0b\u4e00\u79cd\u6750\u6599\u662f\u65e0\u5c3d\u50ac\u5316\u5242. \u65e0\u5c3d\u50ac\u5316\u5242\u9700\u8981\u75af\u72c2\u5730\u538b\u7f29. \u552f\u4e00\u53ef\u4ee5\u505a\u5230\u7684\u5c31\u662f\u4e2d\u5b50\u6001\u7d20\u538b\u7f29\u673a. \u8ba9\u6211\u4eec\u5408\u6210<br/>\u4e00\u53f0.\u60f3\u8981\u83b7\u5f97\u50ac\u5316\u5242,\u4f60\u9700\u8981\u524d\u5f80\u7ec7\u5973\u5ea7B\u901a\u8fc7\u8d2b\u7620\u77ff\u83b7\u5f97\u7c89. \u7136\u540e\u5c0664\u4e2a\u65e0\u5c3d\u50ac\u5316\u5242\u7c89\u538b\u7f29\u6210\u4e00\u4e2a\u65e0\u5c3d\u50ac<br/>\u5316\u5242.\u5f53\u7136\u4f60\u60f3\u8bd5\u8bd5\u65e0\u5c3d\u8d2a\u5a6a\u90a3\u4e2a\u75af\u72c2\u7684\u624b\u6413\u65e0\u5c3d\u50ac\u5316\u5242\u7684\u914d\u65b9\u4e5f\u6ca1\u4eba\u62e6\u7740\u4f60,\u6311\u6218\u81ea\u6211\u5427 :P\u8fd9\u53f0\u538b\u7f29\u673a\u8fd8\u53ef<br/>\u7528\u4e8e\u5236\u9020\u5947\u70b9,\u6700\u7ec8\u5236\u6210\u6c38\u6052\u5947\u70b9.\u5982\u679c\u60f3\u8981\u81ea\u52a8\u5316\u5408\u6210\u5947\u70b9,\u73b0\u5728,\u5728\u6837\u677f\u7ec8\u7aef\u4e2d\u53ef\u4ee5\u7528\u9f20\u6807\u4e2d\u952e\u8c03\u6574\u6837\u677f\u4e2d\u7269<br/>\u54c1\u7684\u6570\u91cf,\u8fd9\u53ef\u4ee5\u8d85\u8d8a\u901a\u5e38\u7684\u9650\u5236.\u8bd1\u8005\u6ce8:\u6700\u5927\u53ef\u5230\u6bcf\u683c2.1G.\u611f\u8c22vfyjxf!"
                },
                {
                    "name": "\u9f99\u82af",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9f99\u82af.png",
                    "x": 408.0,
                    "y": 72.0,
                    "tooltip": "\u597d,\u8fd9\u5f20\u56fe\u7eb8\u592a\u5b8c\u7f8e\u4e86!\u4e0d\u7ba1\u5c5e\u4e8e\u4f55\u79cd\u5916\u661f\u6587\u660e,\u5b83\u6b63\u662f\u4f60\u6240\u9700\u8981\u7684.\u6765\u505a\u4e2a\u9f99\u82af\u5427.\u4f60\u53ef\u4ee5\u5728\u51a5\u738b\u661f\u5730\u7262\u4e2d\u627e\u5230<br/>\u56fe\u7eb8."
                },
                {
                    "name": "\u9f99\u4e4b\u8fdb\u5316",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9f99\u7814\u805a\u5408\u88c5\u7f6e.png",
                    "x": 408.0,
                    "y": 120.0,
                    "tooltip": "\u4f60\u53cd\u53cd\u590d\u590d\u6446\u5f04\u4e86\u5f88\u4e45,\u8bd5\u56fe\u5c06\u9b54\u6cd5\u548c\u79d1\u6280\u7ed3\u5408\u8d77\u6765.\u770b\u6765\u4f60\u7ec8\u4e8e\u627e\u5230\u4e86\u65b9\u6cd5!\u4f60\u5c06\u795e\u79d8\u4f7f\u548c\u8840\u9b54\u6cd5\u5e08\u7684\u529b\u91cf\u4e0eU<br/>HV\u79d1\u6280\u7ed3\u5408,\u627e\u5230\u4e86\u4e00\u79cd\u5c06\u9f99\u7684\u529b\u91cf\u7cbe\u70bc\u6210\u4e00\u4e2a\u5c0f\u6838\u5fc3\u7684\u65b9\u5f0f.\u4f60\u786e\u4fe1\u8fd9\u53f0\u673a\u5668\u5c31\u53ef\u4ee5\u505a\u8fd9\u4ef6\u4e8b--\u53ea\u8981\u4f60\u77e5\u9053<br/>\u5982\u4f55\u51c6\u786e\u5730\u7ec4\u88c5\u8fd9\u4e2a\u6838\u5fc3.\u4f7f\u7528\u591a\u65b9\u5757\u673a\u5668\u5168\u606f\u6295\u5f71\u4eea\u4e86\u89e3\u5176\u642d\u5efa\u65b9\u5f0f.\u4f60\u4e5f\u53ef\u4ee5\u5347\u7ea7\u9f99\u82af,\u4e0d\u8fc7\u8fd9\u9700\u8981\u66f4\u9ad8\u7b49\u7ea7<br/>\u7684\u56fe\u7eb8,\u540c\u65f6\u8fd8\u5f97\u5347\u7ea7\u591a\u65b9\u5757\u673a\u5668."
                },
                {
                    "name": "UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 2",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u4f20\u611f\u5668(UHV).png",
                    "x": 24.0,
                    "y": 24.0,
                    "tooltip": "\u8bb0\u5f97\u6bcf\u5c0f\u65f6\u4f11\u606f\u4e00\u6b21(lol)."
                },
                {
                    "name": "UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 1",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u673a\u68b0\u81c2(UHV).png",
                    "x": 120.0,
                    "y": 24.0,
                    "tooltip": "\u4f60\u77e5\u9053\u4f60\u53ef\u4ee5\u73a9\u5176\u4ed6\u6e38\u620f\u5417?"
                },
                {
                    "name": "\u6211\u53ef\u4ee5\u968f\u4fbf\u7528\u65e0\u7ebf\u63a5\u5165\u5668\u4e86,\u8c22\u8c22",
                    "symbolSize": 31.200000000000003,
                    "x": 564.0,
                    "y": 336.0,
                    "tooltip": "\u4e2d\u5b50\u80fd\u6e90\u5143\u4ef6\u53ef\u4ee5\u4e3a\u4f60\u7684\u7f51\u7edc\u63d0\u4f9b\u65e0\u9650\u7684\u80fd\u91cf. \u4f60\u9700\u8981\u65e0\u5c3d\u952d\u624d\u80fd\u5236\u9020\u5b83."
                },
                {
                    "name": "\u6211\u544a\u8bc9\u4f60,\u90a3\u4e0d\u662f\u9709\u83cc!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u751f\u7269\u7ec6\u80de.png",
                    "x": 408.0,
                    "y": 408.0,
                    "tooltip": "\u73b0\u5728\u8ba9\u6211\u4eec\u5236\u9020\u751f\u7269\u7ec6\u80de. \u4f60\u9700\u8981\u52a0\u70ed\u751f\u7269\u57f9\u517b\u57fa\u539f\u6db2\u5c06\u5176\u8f6c\u5316\u4e3a\u706d\u83cc\u751f\u7269\u57f9\u517b\u57fa.\u7136\u540e\u518d\u901a\u8fc7\u5316\u5b66\u53cd\u5e94\u91dc\u83b7\u5f97<br/>\u751f\u7269\u7ec6\u80de."
                },
                {
                    "name": "\u5de5\u4e1a\u5316\u751f\u4ea7\u85fb\u7c7b",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u9cb8\u9c7c\u5ea7T\u661fE\u85fb\u7c7b.png",
                    "x": 468.0,
                    "y": 216.0,
                    "tooltip": "\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86,\u751f\u7269\u7535\u8def\u677f\u9700\u8981\u7684\u9cb8\u9c7c\u5ea7\u85fb\u7c7b\u6570\u91cf\u6709\u70b9...\u5938\u5f20.\u5149\u9760\u526a\u5200\u6765\u6536\u96c6\u8fd9\u4e9b\u85fb\u7c7b\u5b9e\u5728\u4ee4\u4eba\u75db\u82e6<br/>,\u800c\u8c01\u53c8\u60f3\u4e13\u95e8\u4e3a\u4e86\u526a\u85fb\u7c7b\u4e13\u95e8\u5199\u4e2a\u7a0b\u5e8f\u63a7\u5236\u673a\u5668\u4eba\u4ee3\u52b3\u5462?\u73b0\u5728\u7ec8\u4e8e\u6709\u4e86\u4e00\u79cd\u5de5\u4e1a\u5316\u624b\u6bb5\u751f\u4ea7\u85fb\u7c7b,\u4f55\u5176\u5e78\u8fd0\u554a<br/>!\u4f60\u9700\u8981\u51c6\u5907\u7684\u7b2c\u4e00\u79cd\u6750\u6599\u662f...\u9cb8\u9c7c\u5ea7\u85fb\u7c7b!\u5c06\u85fb\u7c7b\u914d\u5408\u4ece\u540c\u4e00\u661f\u7403\u62bd\u51fa\u7684\u4e0d\u660e\u6db2\u4f53\u5236\u6210\u5408\u9002\u7684\u57f9\u517b\u76bf.\u51e0\u7387<br/>\u540c\u6837\u4f4e\u5f97\u4ee4\u4eba\u53d1\u6307,\u4f60\u8fd8\u9700\u8981\u51c6\u5907\u6700\u9ad8\u7ea7\u7684\u751f\u7269\u5b9e\u9a8c\u5ba4.\u62e5\u6709\u57f9\u517b\u76bf\u540e\u4f60\u5c31\u80fd\u5236\u9020\u6d77\u85fb\u57fa\u8d28(SeaweedBr<br/>oth),\u7531\u672a\u77e5\u8425\u517b\u743c\u8102(UnknownNutrientAgar)\u4e0e\u4e00\u7cfb\u5217\u7269\u54c1\u6df7\u5408\u5236\u6210.\u6700\u540e\u79bb\u5fc3\u5373\u53ef<br/>\u83b7\u5f97\u85fb\u7c7b."
                },
                {
                    "name": "\u65e0\u9650\u6c27\u6c14\u7f50",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u9650\u6c27\u6c14\u7f50.png",
                    "x": 516.0,
                    "y": 348.0,
                    "tooltip": "\u63d0\u4f9b\u65e0\u9650\u7684\u6c27\u6c14,\u4e4b\u524d\u53ea\u80fd\u7528\u6765\u91cd\u65b0\u586b\u5145\u5176\u4ed6\u6c27\u6c14\u7f50,\u4e0d\u8fc7\u73b0\u5728\u4f60\u53ef\u4ee5\u5c06\u5176\u76f4\u63a5\u88c5\u5907\u5728\u6c27\u6c14\u7f50\u69fd\u4f4d\u4e2d."
                },
                {
                    "name": "\u51e0\u4e4e\u65e0\u5c3d\u7684VIS?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6c34\u6676\u7f20\u7ed5\u5b87\u5b99\u4e2d\u5b50\u6001\u7d20\u6cd5\u6756.png",
                    "x": 564.0,
                    "y": 288.0,
                    "tooltip": "\u63d0\u4f9b\u5de8\u91cf\u7684VIS\u5b58\u50a8,\u4e14\u624b\u6301\u65f6\u53ef\u4ee5\u81ea\u52a8\u56de\u6ee1."
                },
                {
                    "name": "\u65e0\u5c3d\u7684\u57fa\u7840",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u5c3d\u4e4b\u5757.png",
                    "x": 372.0,
                    "y": 276.0,
                    "tooltip": "\u60f3\u8981\u7ee7\u7eed\u524d\u8fdb,\u4f60\u4f1a\u9700\u8981\u4e00\u5927\u5806\u65e0\u5c3d\u7684.\u51c6\u5907\u597d\u53d7\u82e6\u5427."
                },
                {
                    "name": "\u00a76\u00a76\u00a76\u00a7lIntegrated Ore Factory - All in One!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u96c6\u6210\u77ff\u77f3\u5904\u7406\u5382.png",
                    "x": 72.0,
                    "y": 72.0,
                    "tooltip": "The Integrated Ore Factory allows you to process o<br/>res through multiple processes at once."
                },
                {
                    "name": "\u6211\u53d1\u8a93,\u4e0d\u4f1a\u66f4\u7cdf\u7684!",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u9cb8\u9c7c\u5ea7T\u661fE\u85fb\u7c7b\u63d0\u53d6\u7269.png",
                    "x": 408.0,
                    "y": 216.0,
                    "tooltip": "\u60f3\u8981\u5236\u9020\u4e0b\u4e00\u9636\u7684\u7535\u8def\u677f(\u751f\u7269\u7535\u8def\u677f),\u4f60\u9700\u8981\u751f\u7269\u57f9\u517b\u57fa\u539f\u6db2. \u6709\u4e09\u79cd\u914d\u65b9\u53ef\u4ee5\u83b7\u5f97\u6b64\u539f\u6db2.\u7b2c\u4e00\u79cd\u914d\u65b9\u9700<br/>\u8981\u5e72\u7ec6\u80de\u3001\u795e\u79d8\u6c34\u6676\u548c\u9cb8\u9c7c\u5ea7T\u661fE\u85fb\u7c7b\u63d0\u53d6\u7269,\u63d0\u4f9bLuV\u7535\u538b\u548c94SV(\u949a),\u5728\u7ec6\u83cc\u57f9\u517b\u7f38\u4e2d\u751f\u4ea7. \u5236<br/>\u51fa\u751f\u7269\u57f9\u517b\u57fa\u539f\u6db2\u7684\u6bd4\u4f8b\u662f4:1.\u7b2c\u4e8c\u79cd\u914d\u65b9\u57fa\u4e8e\u7b2c\u4e00\u79cd,\u4f46\u628a\u4e09\u949b\u6362\u6210\u4e86\u65e0\u5c3d\u50ac\u5316\u5242,\u8981\u6c42ZPM\u7535\u538b\u548c14<br/>0SV(\u5bcc\u96c6\u7845\u5ca9). \u5236\u53d6\u6bd4\u4f8b\u662f1:1.\u7b2c\u4e09\u79cd\u914d\u65b9\u662f\u6700\u5177\u6548\u7387\u7684,\u4f46\u5b83\u9700\u8981\u751f\u7269\u7ec6\u80de(\u4f60\u6682\u65f6\u8fd8\u6ca1\u6709),\u548c<br/>4\u4e2a\u65e0\u5c3d\u50ac\u5316\u5242\u7c89,\u8981\u6c42UV\u7535\u538b\u548c150SV(\u8d85\u80fd\u7845\u5ca9). \u5236\u53d6\u6bd4\u4f8b\u662f1:2.\u7b2c\u4e8c\u548c\u7b2c\u4e09\u79cd\u65b9\u6cd5\u4f7f\u7528\u4e0d\u540c<br/>\u4e8e\u7b2c\u4e00\u79cd\u7684\u57f9\u517b\u76bf."
                },
                {
                    "name": "\u6c34\u51b7\u5854",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8d85\u9891\u5347\u7ea7.png",
                    "x": 252.0,
                    "y": 276.0,
                    "tooltip": "\u6211\u5728\u4e0d\u8d85\u9891\u7684\u72b6\u6001\u4e0b,\u5df2\u7ecf\u8fbe\u5230\u4e86\u8fd9\u53f0\u591a\u65b9\u5757\u7684\u4e0a\u9650,\u6240\u4ee5\u6211\u89c9\u5f97\u4e3a\u5176\u6dfb\u52a0\u4e00\u5ea7\u6c34\u51b7\u5854,\u4e3a\u5370\u5236\u673a\u6784\u964d\u6e29. \u8fd9\u5ea7<br/>\u6c34\u51b7\u5854\u53ef\u4ee5\u8ba9PCB\u5de5\u5382\u8fdb\u884c\u5e38\u89c4\u8d85\u9891,\u5c31\u50cf\u5176\u4ed6\u591a\u65b9\u5757\u673a\u5668\u4e00\u6837,\u901f\u5ea6x2,\u529f\u7387x4.\u9700\u8981\u4e3a\u6c34\u51b7\u5854\u7684\u8f93\u5165\u4ed3<br/>\u63d0\u4f9b\u84b8\u998f\u6c34,\u4ee5\u907f\u514d\u7ba1\u9053\u963b\u585e.\u8fd0\u884c\u65f6,\u6c34\u51b7\u5854\u6bcf\u79d2\u6d88\u801710\u5347\u84b8\u998f\u6c34,\u8ba9\u673a\u5668\u8fdb\u884c2/4\u8d85\u9891.\u8f93\u5165\u4ed3\u4f4d\u4e8e\u6c34\u51b7<br/>\u5854\u7684\u5e95\u5c42\u4e2d\u592e."
                },
                {
                    "name": "\u7535\u8def\u677f\u5927\u5e08",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u751f\u7269\u5904\u7406\u5668\u4e3b\u673a.png",
                    "x": 24.0,
                    "y": 120.0,
                    "tooltip": "\u4f60\u505a\u5230\u4e86! \u8fd9\u662f\u6e38\u620f\u4e2d\u7684\u6700\u540e\u4e00\u79cd\u7535\u8def\u677f(\u666e\u901a)!\u751f\u7269\u4e3b\u673a\u662f\u4f60\u7684\u7b2c\u4e00\u79cd\u4e5f\u662f\u552f\u4e00\u4e00\u79cdUEV\u7535\u8def\u677f.*\u60f3\u8981<br/>\u83b7\u5f97\u5b83\u7684\u95ea\u5b58,TecTech\u7814\u7a76\u7ad9\u9700\u8981\u81f3\u5c1116,000,000-EU/t(32A-UV).\u8fd8\u6709,\u8fd9\u4e1c<br/>\u897f\u53eb\u4f60\u51fa\u95e8. \u4f60\u4f1a\u559c\u6b22\u5b83\u7684."
                },
                {
                    "name": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u6709\u6e90\u53d8\u538b\u5668.png",
                    "x": 468.0,
                    "y": 312.0,
                    "tooltip": "\u8fd9\u4e9b\u662f\u975e\u5f3a\u5236\u6027\u7684\u76ee\u6807,\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u5b8c\u6210."
                },
                {
                    "name": "\u7a81\u53d8\u5f88\u68d2,\u4e0d\u662f\u561b?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u8d85\u751f\u7269\u7a81\u53d8\u7535\u8def\u57fa\u677f.png",
                    "x": 216.0,
                    "y": 408.0,
                    "tooltip": "\u5236\u9020\u751f\u7269\u57fa\u677f\u4e0e\u5236\u9020\u6e7f\u4ef6\u57fa\u677f\u5f88\u50cf,\u5c31\u662f... \u592a\u8d35\u4e86!\u60f3\u8981\u83b7\u5f97\u8d85\u751f\u7269\u7a81\u53d8\u7535\u8def\u57fa\u677f,\u4f60\u9700\u8981\u7528\u4e2d\u5b50\u7b94\u5bf9\u5176\u8fdb<br/>\u884c\u523b\u753b."
                },
                {
                    "name": "2\u9636\u7eb3\u7c73\u953b\u7089",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4e2d\u5b50\u7eb3\u7c73\u8702\u7fa4.png",
                    "x": 204.0,
                    "y": 276.0,
                    "tooltip": "\u78b3\u7eb3\u7c73\u8702\u7fa4\u4f5c\u4e3a\u521d\u59cb\u5de5\u4eba\u5f88\u4e0d\u9519,\u4f46\u5b83\u4eec\u53ea\u6709\u5341\u5206\u57fa\u7840\u7684\u8702\u7fa4\u7f51\u7edc,\u5bf9\u66f4\u590d\u6742\u7684\u7cfb\u7edf\u5c31\u6709\u4e9b\u529b\u4e0d\u4ece\u5fc3\u4e86.\u6240\u4ee5\u60f3\u8981<br/>\u751f\u4ea7\u66f4\u590d\u6742\u7684\u7eb3\u7c73\u8702\u7fa4,\u6211\u4eec\u9700\u8981\u4e00\u79cd\u66f4\u52a0\u5148\u8fdb\u7684\u65b0\u578b\u7eb3\u7c73\u8702\u7fa4.\u4e2d\u5b50\u7eb3\u7c73\u8702\u7fa4,\u662f1\u9636\u548c2\u9636\u8702\u7fa4\u4e4b\u95f4\u7684\u8fc7\u6e21\u8702<br/>\u7fa4,\u8fd8\u6709\u5176\u4ed6\u7528\u9014.\u5c06\u4e2d\u5b50\u7eb3\u7c73\u8702\u7fa4\u653e\u5165\u63a7\u5236\u5668\u7684GUI\u540e,\u4f60\u9700\u8981\u7b49\u5f85\u591a\u65b9\u5757\u673a\u5668\u518d\u6b21\u68c0\u67e5\u7ed3\u6784,\u6216\u7b80\u5355\u5730\u62c6\u9664<br/>\u63a7\u5236\u5668,\u91cd\u65b0\u653e\u7f6e\u540e\u8fc5\u901f\u585e\u5165\u4e2d\u5b50\u7eb3\u7c73\u8702\u7fa4.\u8fd9\u6837\u7eb3\u7c73\u953b\u7089\u5373\u53ef\u5236\u90202\u9636\u7eb3\u7c73\u8702\u7fa4."
                },
                {
                    "name": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u65e0\u5c3d\u4e4b\u952d.png",
                    "x": 312.0,
                    "y": 312.0,
                    "tooltip": "\u8fd9\u91cc\u662f\u4efb\u52a1\u4e66\u6709\u9650\u516c\u53f8. \u5982\u679c\u4f60\u662f\u5408\u6cd5\u73a9\u5230\u8fd9\u91cc\u7684\u8bdd,\u6211\u4eec\u4e25\u91cd\u5173\u5207\u4f60\u7684\u5065\u5eb7. \u4f60\u53ef\u4ee5\u968f\u65f6\u6682\u505c\u6e38\u620f\u51fa\u53bb\u8d70\u8d70<br/>,\u4e0d\u662f\u5417?\u987a\u4fbf\u4e00\u63d0,\u65e0\u5c3d\u952d\u53ea\u9700\u8981\u624b\u6413\u5373\u53ef\u83b7\u5f97,\u591a\u7b80\u5355\u5440. \u4f60\u5c31\u662f\u5929\u9009\u4e4b\u4eba.\u73b0\u5728\u4f60\u89e3\u9501\u4e86\u4e00\u7cfb\u5217\u7ec8\u6781\u7269\u54c1<br/>\u7684\u5408\u6210. \u67e5\u770b\u7ec8\u6781\u76ee\u6807\u4efb\u52a1\u680f\u6216\u662f\u7ec8\u6781\u5de5\u4f5c\u53f0\u7684NEI\u5408\u6210\u8868,\u4f60\u5c31\u80fd\u77e5\u9053\u8fd9\u4e9b\u7ec8\u6781\u7269\u54c1\u90fd\u662f\u5565\u4e86.\u8fd8\u6709\u4e00\u70b9\u9700<br/>\u8981\u6ce8\u610f,\u5f53\u4f60\u9700\u8981\u901a\u8fc7\u7ec8\u6781\u5de5\u4f5c\u53f0\u5927\u91cf\u5408\u6210\u65f6,\u522b\u5fd8\u4e86\u8fd8\u6709\u4e2a\u6781\u9650\u81ea\u52a8\u5408\u6210\u53f0(\u4f60\u4f1a\u9700\u8981\u5b83\u7684)."
                },
                {
                    "name": "\u5149\u5b66\u8d34\u7247\u5143\u4ef6",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5149\u5b66\u8d34\u7247\u6676\u4f53\u7ba1.png",
                    "x": 468.0,
                    "y": 120.0,
                    "tooltip": "\u4f60\u73b0\u5728\u80fd\u5236\u4f5c\u5149\u5b66\u8d34\u7247\u5143\u4ef6\u4e86!\u5b83\u4eec\u662fUEV+\u7535\u8def\u677f\u7684\u5fc5\u8981\u5143\u4ef6.\u6709\u4e9b\u539f\u6750\u6599\u8981\u7528\u5408\u91d1\u51b6\u70bc\u7089\u5236\u9020,\u4e5f\u8bb8\u662f\u65f6\u5019<br/>\u518d\u6765\u51e0\u53f0\u4e86.\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u9536\u7684\u8bdd,\u53ef\u4ee5\u4ece\u6c27\u5316\u9536(\u5904\u7406\u7a00\u571fIII\u83b7\u53d6)\u3001\u9530\u94dd\u69b4\u77f3\u6ce1\u6cab\u6216\u662f\u6f06\u9ed1\u4e16\u754c\u7684\u865a\u7a7a\u91c7<br/>\u77ff\u573a\u4ea7\u51fa\u4e2d\u5f97\u5230."
                },
                {
                    "name": "2\u9636PCB\u5de5\u5382",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5f3a\u5316\u5149\u523b\u6846\u67b6\u65b9\u5757.png",
                    "x": 516.0,
                    "y": 120.0,
                    "tooltip": "\u968f\u7740\u7eb3\u7c73\u953b\u7089\u7684\u843d\u6210,\u6211\u4eec\u53ef\u4ee5\u514d\u8d39\u63d0\u5347\u57fa\u677f\u4ea7\u91cf\u4e86,\u4f46\u7eb3\u7c73\u8702\u7fa4\u9700\u8981\u5bb9\u5668.\u73b0\u6709\u7684\u673a\u68b0\u65b9\u5757\u8fd8\u4e0d\u8db3\u4ee5\u627f\u8f7d,\u6211\u4eec<br/>\u8fd8\u9700\u8981\u53e6\u884c\u5bfb\u627e.\u7ecf\u8fc7\u4e00\u4e9b\u7814\u7a76,\u4ee5\u65e0\u5c3d\u4e3a\u6846\u67b6,\u4ee5\u5bcc\u96c6\u94ac\u4e3a\u9694\u5c42\u7684\u673a\u68b0\u65b9\u5757\u4f3c\u4e4e\u5de5\u4f5c\u826f\u597d.\u5b83\u53ef\u4ee5\u8ba9\u7eb3\u7c73\u8702\u7fa4\u901a<br/>\u8fc7\u76f4\u8fbe\u5370\u5236\u673a\u6784\u57fa\u5ea7,\u8fd9\u6837\u53ef\u4ee5\u76f4\u63a5\u53bb\u9664\u591a\u4f59\u7684\u6750\u6599,\u800c\u65e0\u9700\u964d\u901f.\u5728\u8f93\u5165\u603b\u7ebf\u4e2d\u653e\u5165\u94f6\u7eb3\u7c73\u8702\u7fa4,\u53ef\u89e3\u95012\u9636\u914d<br/>\u65b9.\u540c\u65f6\u53ef\u89e3\u9501PCB\u5de5\u5382\u7684\u5e76\u884c,\u516c\u5f0f\u5982\u4e0b\uff1a\u5e76\u884c=Log2(\u7eb3\u7c73\u8702\u7fa4\u6570)."
                },
                {
                    "name": "\u62dc\u6258...\u4e0d\u8981\u88ab\u8fd9\u4e9b\u7535\u8def\u677f\u6253\u8d25\u4e86",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u751f\u7269\u5904\u7406\u5668.png",
                    "x": 24.0,
                    "y": 408.0,
                    "tooltip": "\u751f\u7269\u5904\u7406\u5668\u662f\u4f60\u80fd\u5236\u9020\u7684\u7b2c\u4e00\u5757\u751f\u7269\u7535\u8def\u677f. \u5b83\u662fZPM\u7535\u8def\u677f."
                },
                {
                    "name": "\u91cf\u5b50\u53cd\u5e38",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u91cf\u5b50\u53cd\u5e38.png",
                    "x": 228.0,
                    "y": 216.0,
                    "tooltip": "\u6240\u6709\u7684\u7406\u8bba\u77e5\u8bc6\u90fd\u544a\u8bc9\u4f60\u5b83\u4e0d\u53ef\u80fd\u5b58\u5728.\u4f46,\u5b83\u51fa\u73b0\u4e86.\u4e5f\u8bb8\u4f60\u80fd\u627e\u5230\u8fd9\u4e1c\u897f\u7684\u4ec0\u4e48\u7528\u5904?"
                },
                {
                    "name": "\u6709\u81ea\u6211\u610f\u8bc6\u7684\u7535\u8def\u677f",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u751f\u7269\u5904\u7406\u5668\u5355\u5143.png",
                    "x": 120.0,
                    "y": 408.0,
                    "tooltip": "\u5236\u9020\u4e00\u4e2a\u751f\u7269\u5904\u7406\u5668\u5355\u5143. \u5b83\u662f\u751f\u7269\u7535\u8def\u677f\u7684\u91cd\u8981\u7ec4\u4ef6.*\u901a\u8fc7\u88c5\u914d\u7ebf\u8fdb\u884c\u5408\u6210,\u9700\u8981\u51b7\u5374\u6db2\u3001UU\u7269\u8d28\u548c\u706d\u83cc<br/>\u751f\u7269\u57f9\u517b\u57fa."
                },
                {
                    "name": "\u5916\u534f\u710a\u6599",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u7a81\u53d8\u6d3b\u6027\u710a\u6599\u5355\u5143.png",
                    "x": 120.0,
                    "y": 312.0,
                    "tooltip": "\u67d0\u4e9b\u9ad8\u65b0\u6750\u6599\u710a\u63a5\u8d77\u6765\u6bd4\u8f83\u56f0\u96be.\u4f46\u4e5f\u8bb8\u4f60\u5f00\u53d1\u7684\u65b0-\u751f\u7269\u6280\u672f\u710a\u6599\u53ef\u4ee5\u641e\u5b9a? \u4f60\u521b\u9020\u51fa\u7684\u8fd9\u79cd\u6d3b\u6027\u710a\u6599\u5b8c\u5168\u53ef<br/>\u4ee5\u80dc\u4efb!\u5b83\u80fd\u9002\u5e94\u4efb\u4f55\u6311\u6218,\u5e76\u4ece\u539f\u5b50\u7ea7\u586b\u8865\u6750\u6599\u95f4\u9699!\u4f7f\u7528\u535a\u7279\u59c6\u5408\u91d1\u7ea7\u5316\u5de5\u5382\u5236\u9020\u7a81\u53d8\u6d3b\u6027\u710a\u6599.\u50ac\u5316\u5242\u914d\u65b9<br/>\u9700\u8981\u65e0\u5c3d,\u6240\u4ee5\u6700\u597d\u5c06\u4f60\u7684\u5316\u5de5\u5382\u5347\u7ea7\u5230\u94a8\u94a2\u7ba1\u9053\u65b9\u5757,\u4ee5\u53ca\u81f3\u5c11\u89c9\u9192\u9f99\u7ebf\u5708\u624d\u80fd\u8ba9\u50ac\u5316\u5242\u514d\u4e8e\u635f\u8017."
                },
                {
                    "name": "\u8d85\u7ea7\u7535\u8111...\u548c\u7ec6\u80de?",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u751f\u7269\u5904\u7406\u5668\u8d85\u7ea7\u7535\u8111.png",
                    "x": 24.0,
                    "y": 216.0,
                    "tooltip": "\u751f\u7269\u5904\u7406\u5668\u8d85\u7ea7\u7535\u8111\u662f\u7b2c\u4e09\u79cd\u751f\u7269\u7535\u8def\u677f. \u5b83\u662fUHV\u7535\u8def\u677f.*\u60f3\u8981\u83b7\u5f97\u5b83\u7684\u95ea\u5b58,TecTech\u7814\u7a76\u7ad9\u9700<br/>\u8981\u81f3\u5c114,000,000-EU/t(8A-UV)\u7684\u4f9b\u7535."
                },
                {
                    "name": "\u6700\u540e\u7684\u8fb9\u7586",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/8\u9636\u706b\u7bad.png",
                    "x": 312.0,
                    "y": 120.0,
                    "tooltip": "\u5728\u8fd9\u4e4b\u540e\u6682\u65f6\u6ca1\u6709\u65b0\u7684\u706b\u7bad\u4e86,\u4e0d\u8fc7\u81f3\u5c11\u8fd8\u6709\u4e00\u4e2a\u7ef4\u5ea6\u53ef\u4ee5\u5230\u8bbf: \u6f06\u9ed1\u4e16\u754c(Deep-Dark),\u5176\u5185\u8574\u542b<br/>\u4e86\u51e0\u4e4e\u6240\u6709\u7684\u77ff\u77f3,\u8fd8\u6709\u66f4\u591a\u7684\u4e00\u4e9b\u4e1c\u897f.\u867d\u71368\u9636\u706b\u7bad\u53ef\u4ee5\u8ba9\u4f60\u767b\u96466\u9897\u65b0\u7684\u661f\u7403,\u4f46\u53ea\u6709\u4e24\u79cd\u65b0\u77ff\u8109.\u5df4\u7eb3\u5fb7<br/>\u661f\u7cfb\u5728\u661f\u56fe\u7684\u897f\u5317\u504f\u5317,\u4f60\u53ef\u4ee5\u5230\u8bbf\u5df4\u7eb3\u5fb7C\u3001E\u548cF.\u534a\u4eba\u9a6c\u661f\u7cfb\u5728NE\u4e1c\u5317\u4f4d\u7f6e,\u4f60\u53ef\u4ee5\u767b\u9646\u534a\u4eba\u9a6cBb(\u6bd4<br/>\u90bb\u661f\u65e0\u6cd5\u767b\u9646).\u8bb0\u5f97\u7a7f\u4e0a\u5b87\u822a\u670d!\u9cb8\u9c7c\u5ea7T\u661f\u7cfb\u5728\u897f\u5357\u504f\u5357\u90e8,\u4f60\u53ef\u4ee5\u5230\u8bbf\u5b9c\u5c45\u884c\u661f\u9cb8\u9c7c\u5ea7T\u661fE.\u7ec7\u5973\u5ea7\u661f\u7cfb<br/>\u5728\u897f\u5317\u504f\u897f,\u800c\u4f60\u53ef\u4ee5\u767b\u9646\u7ec7\u5973\u5ea7B.\u65b0\u77ff\u8109\u4e3a\u9549\u548c\u9490\u77ff\u8109. \u65b0\u77ff\u77f3\u6709: \u9549\u3001\u94ef\u3001\u94c8\u3001\u9567\u3001\u9495\u3001\u9490\u548c\u7194\u706b\u4e4b\u77f3<br/>.\u5728\u5df4\u7eb3\u5fb7E\u3001F,\u9cb8\u9c7c\u5ea7T\u661fE\u548c\u7ec7\u5973\u5ea7B\u90fd\u53ef\u4ee5\u901a\u8fc7\u8d2b\u7620\u77ff\u83b7\u5f97\u89c9\u9192\u9f99\u952d\u7c89.\u5728\u5df4\u7eb3\u5fb7F\u6709\u57fa\u5ca9\u952d\u7684\u8d2b\u7620\u77ff.<br/>\u5728\u7ec7\u5973\u5ea7B\u6709\u65e0\u5c3d\u50ac\u5316\u5242\u7684\u8d2b\u7620\u77ff.\u9664\u4e86\u77ff\u77f3\u548c\u661f\u7403\u77f3\u5934,\u8fd8\u53ef\u4ee5\u6536\u96c6\u4e00\u4e9b\u5df4\u7eb3\u5fb7C\u6811\u82d7\u548c\u6ce5\u571f,\u8fd9\u6837\u5c31\u80fd\u56de\u53bb\u81ea<br/>\u5df1\u79cd\u690d\u4e86(\u62c9\u591aX). \u5230\u5904\u90fd\u662f\u7684\u5f69\u8679\u6676\u4f53\u6253\u788e\u540e\u4f1a\u6389\u843d\u795e\u79d8\u6c34\u6676\u788e\u7247.\u66f4\u91cd\u8981\u7684\u662f\u5728\u9cb8\u9c7c\u5ea7T\u661fE\u6536\u96c6\u85fb\u7c7b.<br/> UEV\u7684\u7535\u8def\u677f\u9700\u8981\u8fd9\u4e9b\u85fb\u7c7b\u4f5c\u4e3a\u539f\u6599,\u867d\u7136\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7\u5de5\u4e1a\u624b\u6bb5\u751f\u4ea7,\u4f46\u4f60\u9700\u8981\u4e00\u5b9a\u6570\u91cf\u7684\u521d\u59cb\u85fb\u7c7b. \u4e0d<br/>\u660e\u6db2\u4f53\u53ef\u4ee5\u5728\u5df4\u7eb3\u5fb7C\u901a\u8fc7\u5730\u9762\u6e56\u6cca\u6216\u5730\u4e0b\u6d41\u4f53\u4e95\u83b7\u53d6."
                },
                {
                    "name": "\u7b2c9\u9636\u6bb5(UHV)",
                    "symbolSize": 93.60000000000001,
                    "symbol": "image://icon/UHV\u673a\u5668\u5916\u58f3.png",
                    "x": 228.0,
                    "y": 120.0,
                    "tooltip": "...\u7b49\u7b49,\u4f60\u5230\u8fd9\u4e86? \u55ef,\u6211\u4eec\u8fd8\u6ca1\u6709\u771f\u6b63\u5b8c\u6210,\u4f46\u6211\u60f3\u4f60\u53ef\u4ee5\u73af\u987e\u56db\u5468?"
                },
                {
                    "name": "UHV\u80fd\u6e90\u4ed3",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/UHV\u80fd\u6e90\u4ed3.png",
                    "x": 216.0,
                    "y": 24.0,
                    "tooltip": "\u5982\u679c\u4f60\u60f3\u5efa\u90208\u9636\u706b\u7bad\u6216MK4\u805a\u53d8\u53cd\u5e94\u5806,\u4f60\u5c31\u9700\u8981\u8fd9\u79cd\u80fd\u6e90\u4ed3. \u5f53\u7136,\u66f4\u4e3b\u8981\u7684\u7528\u9014\u8fd8\u662f\u5347\u7ea7\u591a\u65b9\u5757\u673a\u5668."
                },
                {
                    "name": "\u529b\u573a\u53d1\u751f\u5668(UHV)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/\u529b\u573a\u53d1\u751f\u5668(UHV).png",
                    "x": 120.0,
                    "y": 120.0,
                    "tooltip": "\u6211\u60f3\u77e5\u9053\u662f\u4e0d\u662f\u56e0\u4e3a\u5b83\u4eec\u57fa\u672c\u4e0a\u5c31\u662f\u5f2f\u66f2\u7684\u5bfc\u7ebf,\u6240\u4ee5\u624d\u662f\u5706\u7684--\u8fd9\u91cc\u9762\u7684\u5bfc\u7ebf\u53ef\u592a\u591a\u4e86.\u987a\u4fbf\u4e00\u63d0,\u529b\u573a\u8fd8\u6709<br/>\u66f4\u9ad8\u4e00\u7ea7\u7684\u5b58\u5728,\u8bf7\u5230\"\u7ec8\u6781\u76ee\u6807\"\u4efb\u52a1\u680f\u5bfb\u627e\u5b83\u7684\u4efb\u52a1,\u5e76\u5f00\u59cb\u5236\u9020\u4f60\u7684\u6f06\u9ed1\u4f20\u9001\u95e8. \u5b83\u975e\u5e38\u975e\u5e38\u6709\u7528."
                },
                {
                    "name": "UHV\u8d85\u5bfc(2,097,152 EU/t)",
                    "symbolSize": 62.400000000000006,
                    "symbol": "image://icon/1xUHV\u8d85\u5bfc\u5bfc\u7ebf.png",
                    "x": 312.0,
                    "y": 24.0,
                    "tooltip": "\u5728\u8fd9\u4e4b\u4e0a\u8fd8\u6709UEV\u3001UIV\u3001UMV\u3001UXV\u548cMAX\u7684\u5bfc\u7ebf.UEV\u3001UIV\u3001UMV\u751a\u81f3\u4e5f\u8fd8\u6709\u8d85\u5bfc\u7ebf. <br/>\u4f60\u53ef\u4ee5\u9009\u7528UHV\u8d85\u5bfc\u7ebf,\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8d85\u4fbf\u5b9c\u7684\u6750\u6599\u5e76\u627f\u53d7\u4e00\u4e9b\u635f\u8017\u6765\u8f93\u9001\u7535\u529b. \u540c\u65f6\u4e5f\u6709\u5176\u4ed6\u9009\u62e9,\u6bd4\u5982AE<br/>\u7684EU-P2P\u6216\u8005\u73b0\u573a\u4f9b\u7535.\u4ec0\u4e48,UHV\u8d85\u5bfc\u7ebf? \u4f60\u4e0d\u662f\u5df2\u7ecf\u505a\u4e86\u5417?\u522b\u5fd8\u4e86\u5de5\u4e1a\u9ad8\u7089\u57fa\u4e8e\u529f\u7387\u7b49\u7ea7\u7684\u7089\u6e29<br/>\u8c03\u8282\u7279\u6027.\u6240\u4ee5\u4f60\u53ef\u4ee5\u7528\u901a\u6d41\u7425\u73c0\u91d1\u7ebf\u5708\u914d\u5408UV\u7ea7\u4f9b\u80fd(\u8fbe\u523010501K\u7089\u6e29),\u5904\u7406UHV\u8d85\u5bfc\u7c97\u80da. \u4f46<br/>\u70bd\u7131\u9ad8\u7089\u5c31\u505a\u4e0d\u5230\u8fd9\u4e00\u70b9."
                },
                {
                    "name": "\u65e0\u9650\u7684LP",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u963f\u8499\u514b\u6c14\u8840\u5b9d\u73e0.png",
                    "x": 516.0,
                    "y": 276.0,
                    "tooltip": "\u5236\u6210\u8fd9\u4e2a\u7ec8\u6781\u6c14\u8840\u5b9d\u73e0,\u4f60\u5c06\u62e5\u6709\u65e0\u9650\u7684LP. \u4f46\u4f60\u4ecd\u7136\u9700\u8981\u8840\u6db2\u6765\u8fdb\u884c\u5408\u6210,\u4e0d\u662f\u5417? (\u67e5\u770b\u6c38\u9b42\u4e4b\u6ce3(C<br/>ry-of-the-Eternal-soul)\u4eea\u5f0f)\u8bd1\u8005\u6ce8: \u6b64\u5b9d\u73e0LP\u4e0a\u9650\u4e3a10\u4ebf,\u4f46\u6ce8\u610f\u9700\u8981\u624b\u6301<br/>\u6b64\u5b9d\u73e0\u624d\u80fd\u8865\u5145\u7075\u9b42\u7f51\u7edc\u4e2d\u7684LP,\u673a\u5236\u7c7b\u4f3c\u7684\u8fd8\u6709\u521b\u9020\u6cd5\u6756\u6216\u4e2d\u5b50\u6cd5\u6756."
                },
                {
                    "name": "\u592a\u9633\u4e4b\u529b(UV)1x1",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5149\u5b50\u592a\u9633\u80fd\u53d1\u7535\u673a(UV).png",
                    "x": 72.0,
                    "y": 168.0,
                    "tooltip": "\u767d\u5929\u65f6\u4ea7\u751f1A\u7684UV\u7535. \u5982\u679c\u4f60\u7684\u57fa\u5730\u6240\u5728\u7ef4\u5ea6\u662f\u6c38\u663c\u7684\u8bdd\u90a3\u5c31\u592a\u68d2\u4e86(\u6bd4\u5982\u82b1\u56ed\u4e16\u754c)."
                },
                {
                    "name": "\u7b49\u7b49,PBI(\u805a\u82ef\u5e76\u54aa\u5511)\u4e0d\u662f\u6700\u540e\u4e00\u79cd\u5851\u6599?",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u62c9\u591aX\u805a\u5408\u7269\u677f.png",
                    "x": 516.0,
                    "y": 168.0,
                    "tooltip": "\u6765\u505a\u4e00\u79cd\u5168\u65b0\u7684\u5851\u6599\u5427!\u4f60\u5728\u5df4\u7eb3\u5fb7C\u4e0a\u53d1\u73b0\u7684\u6811\u6728\u6709\u4e9b\u975e\u5e38\u6709\u8da3\u7684\u7279\u6027.\u4f46\u662f,\u4f60\u4e0d\u80fd\u53ea\u4f7f\u7528\u63d0\u53d6\u5f97\u5230\u7684\u7c97\u5236\u62c9<br/>\u591aX.\u5fc5\u987b\u7ecf\u8fc7\u4e25\u683c\u5206\u6b65\u7684\u7cbe\u70bc\u6d41\u7a0b!\u4f60\u9700\u8981\u7528\u5b83\u5236\u9020\u5927\u91cf\u4e1c\u897f,\u5982UIV\u548cUMV\u8d85\u5bfc\u3001UEV+\u4ed3\u5ba4,\u4ee5\u53ca\u6234<br/>\u68ee\u7403\u90e8\u4ef6.\u548c\u4e4b\u524d\u7684\u5851\u6599\u4e0d\u540c,\u8fd9\u91cc\u9700\u8981\u7684\u5927\u591a\u6570\u6b65\u9aa4\u90fd\u4e0d\u662f\u5316\u5b66\u53cd\u5e94.\u8fd9\u4e9b\u6b65\u9aa4\u7684\u901f\u5ea6\u4e5f\u5f88\u6162,\u6240\u4ee5\u53ef\u80fd\u9700\u8981\u4e00<br/>\u4e2a\u5de8\u578b\u591a\u65b9\u5757\u673a\u5668\u5e2e\u52a9\u89e3\u51b3\u95ee\u9898.\u8fd9\u6761\u4ea7\u7ebf\u4e5f\u5f3a\u8c03\u4e86\u5927\u89c4\u6a21\u751f\u4ea7\u7b49\u79bb\u5b50\u7684\u5fc5\u8981\u6027.\u800c\u4e14\u4f60\u4eca\u540e\u53ea\u4f1a\u9700\u8981\u66f4\u591a.\u526f\u4ea7<br/>\u7269\u91cd\u62c9\u591aX\u53ef\u4ee5\u7528\u4e8e\u7845\u5ca9\u57fa\u6d41\u4f53\u71c3\u6599-MkV."
                },
                {
                    "name": "\u65e0\u7ebf 3.0",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u91cf\u5b50\u65e0\u9650\u589e\u5e45\u5668.png",
                    "x": 468.0,
                    "y": 360.0,
                    "tooltip": "\u6b64\u5347\u7ea7\u53ef\u4ee5\u65e0\u9650\u62d3\u5c55\u4f60\u7684\u65e0\u7ebf\u8303\u56f4,\u751a\u81f3\u4e0d\u9700\u8981\u65e0\u7ebf\u8bbf\u95ee\u70b9! \u60f3\u8981\u5236\u4f5c\u5b83,\u4f60\u9700\u8981\u63d0\u4f9b\u65e0\u5c3d\u952d.\u9057\u61be\u7684\u662f,\u8fd9\u73a9<br/>\u610fbug\u5f88\u591a. \u603b\u662f\u83ab\u540d\u5176\u5999\u5730\u6d88\u5931\u6216\u8005\u6389\u51fa\u7ec8\u7aef.\u73b0\u5728\u5927\u90e8\u5206bug\u5df2\u7ecf\u4fee\u590d\u4e86.\u4e5f\u8bb8\u597d\u7528\u4e9b\u4e86?"
                },
                {
                    "name": "\u53cc\u8db3\u98de\u9f99\u6838\u5fc3",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u53cc\u8db3\u98de\u9f99\u6838\u5fc3.png",
                    "x": 408.0,
                    "y": 24.0,
                    "tooltip": "\u53cc\u8db3\u98de\u9f99\u662f\u5c11\u89c1\u7684\u4ee5\u4e24\u6761\u817f\u8d70\u8def\u7684\u9f99.\u80af\u5b9a\u66f4\u52a0\u5f3a\u5927.\u901a\u8fc7\u7814\u7a76\u9f99\u82af,\u4f60\u53d1\u73b0\u4e86\u6539\u8fdb\u5b83\u7684\u65b9\u5f0f--\u53cc\u8db3\u98de\u9f99\u6838\u5fc3."
                },
                {
                    "name": "\u5f02\u6c19\u83cc",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u83cc\u57f9\u517b\u76bf.png",
                    "x": 468.0,
                    "y": 168.0,
                    "tooltip": "\u8981\u5236\u9020\u4e0b\u4e00\u7ea7\u522b\u7684\u5851\u6599,\u62c9\u591aX\u805a\u5408\u7269,\u6216\u8005\u4e0b\u4e00\u7ea7\u7684\u8d34\u7247\u5143\u4ef6,\u4f60\u9700\u8981\u5f02\u6c19.\u8981\u505a\u51fa\u5f02\u6c19\u83cc\u7684\u57f9\u517b\u76bf\u6709\u70b9\u96be.\u914d<br/>\u65b9\u7c7b\u4f3c\u4e8e\u901a\u7528\u9175\u6bcd\u83cc. \u8bf7\u6ce8\u610f,\u6240\u6709\u8fd9\u6761\u7ebf\u4e0a\u7684\u914d\u65b9\u90fd\u662f\u4f4e\u6982\u7387\u914d\u65b9.\u7b2c\u4e00\u6b65\u662f\u83b7\u53d6\u5df4\u7eb3\u5fb7\u83cc,\u7136\u540e\u662fDNA\u6837<br/>\u54c1\u74f6,\u518d\u7136\u540e\u662f\u6570\u636e\u7403.\u5982\u679c\u4f60\u4e4b\u524d\u6ca1\u6709\u83b7\u5f97\u6811\u82d7\u548c\u6ce5\u571f(\u79cd\u690d\u66f4\u591a\u7684\u6811\u5e76\u83b7\u53d6\u539f\u6728)\u7684\u8bdd,\u56de\u5230\u5df4\u7eb3\u5fb7C\u91c7\u96c6\u4e00<br/>\u4e9b\u5427.\u4e0e\u901a\u7528\u9175\u6bcd\u83cc\u914d\u65b9\u7684\u552f\u4e00\u533a\u522b\u5c31\u662f--\u5df4\u7eb3\u5fb7\u83cc\u7684\u6570\u636e\u7403\u66ff\u6362\u4e86\u666e\u901a\u9175\u6bcd.\u4f60\u9700\u8981\u5148\u83b7\u53d6\u5df4\u7eb3\u5fb7\u83cc\u8d28\u7c92.\u518d<br/>\u6b21,\u4e0b\u4e00\u6b65\u7684\u914d\u65b9\u8fd8\u662f\u4e00\u6837\u7684,\u53ea\u662f\u6362\u6210\u4e86\u9cb8\u9c7c\u5ea7T\u661fE\u83cc\u548c\u5df4\u7eb3\u5fb7\u83cc\u8d28\u7c92,\u67097.5%\u7684\u51e0\u7387\u53ef\u4ee5\u5236\u5f97\u5f02\u6c19\u83cc.<br/>\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u6b63\u5e38\u7684\u914d\u65b9\u6765\u5236\u53d6\u66f4\u591a\u57f9\u517b\u76bf,\u56e0\u4e3a\u590d\u5236\u5f88\u5bb9\u6613\u5931\u8d25.\u5f53\u4f60\u6709\u4e86\u57f9\u517b\u76bf\u540e,\u5e94\u8be5\u80fd\u81ea\u5df1\u627e\u51fa\u5236\u9020\u5f02\u6c19<br/>\u7684\u65b9\u6cd5.\u8fc7\u4e86\u8fd9\u4e48\u591a\u5e74,\u73b0\u5728NEI\u7ec8\u4e8e\u652f\u6301\u663e\u793a\u8f6c\u5316\u7684\u914d\u65b9\u4e86!"
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
                    "source": "\u795e\u7684\u529b\u91cf",
                    "target": "\u300c \u300d"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u300c \u300d"
                },
                {
                    "source": "\u7535\u8def\u677f\u5927\u5e08",
                    "target": "A Blast to the Past"
                },
                {
                    "source": "\u6211\u544a\u8bc9\u4f60,\u90a3\u4e0d\u662f\u9709\u83cc!",
                    "target": "\u6613\u88c5\u5378!"
                },
                {
                    "source": "\u627f\u8ba4\u5427,UV\u9636\u6bb5\u4f60\u559c\u6b22\u7684Pt 2",
                    "target": "\u6613\u88c5\u5378!"
                },
                {
                    "source": "\u91cd\u5927\u5347\u7ea7",
                    "target": "\u8d85\u8d8a\u6781\u9650"
                },
                {
                    "source": "\u91cf\u5b50\u53cd\u5e38",
                    "target": "\u8d85\u8d8a\u6781\u9650"
                },
                {
                    "source": "\u62dc\u6258...\u4e0d\u8981\u88ab\u8fd9\u4e9b\u7535\u8def\u677f\u6253\u8d25\u4e86",
                    "target": "\u751f\u7269\u7535\u8def\u677f2: \u751f\u7269\u888b\u9f20"
                },
                {
                    "source": "UHV\u80fd\u6e90\u4ed3",
                    "target": "Cheaper LuV Circuits"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u83b7\u53d6\u4e2d\u5b50\u7d20\u7684\u53e6\u4e00\u79cd\u65b9\u5f0f"
                },
                {
                    "source": "\u6700\u540e\u7684\u8fb9\u7586",
                    "target": "\u538b\u7f29\u661f\u6838"
                },
                {
                    "source": "\u9f99\u4e4b\u8fdb\u5316",
                    "target": "\u9f99\u82af"
                },
                {
                    "source": "\u7075\u5b9d",
                    "target": "\u9f99\u4e4b\u8fdb\u5316"
                },
                {
                    "source": "\u6700\u540e\u7684\u8fb9\u7586",
                    "target": "\u9f99\u4e4b\u8fdb\u5316"
                },
                {
                    "source": "\u6076\u9b54\u5165\u4fb5",
                    "target": "\u9f99\u4e4b\u8fdb\u5316"
                },
                {
                    "source": "\u521b\u9020\u5929\u5730\u7684\u529b\u91cf",
                    "target": "\u9f99\u4e4b\u8fdb\u5316"
                },
                {
                    "source": "UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 1",
                    "target": "UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 2"
                },
                {
                    "source": "\u7b2c9\u9636\u6bb5(UHV)",
                    "target": "UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 1"
                },
                {
                    "source": "\u81f4\u5bc6\u80fd\u6e90\u5143\u4ef6",
                    "target": "\u6211\u53ef\u4ee5\u968f\u4fbf\u7528\u65e0\u7ebf\u63a5\u5165\u5668\u4e86,\u8c22\u8c22"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u6211\u53ef\u4ee5\u968f\u4fbf\u7528\u65e0\u7ebf\u63a5\u5165\u5668\u4e86,\u8c22\u8c22"
                },
                {
                    "source": "\u6211\u53d1\u8a93,\u4e0d\u4f1a\u66f4\u7cdf\u7684!",
                    "target": "\u6211\u544a\u8bc9\u4f60,\u90a3\u4e0d\u662f\u9709\u83cc!"
                },
                {
                    "source": "\u6211\u53d1\u8a93,\u4e0d\u4f1a\u66f4\u7cdf\u7684!",
                    "target": "\u5de5\u4e1a\u5316\u751f\u4ea7\u85fb\u7c7b"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u65e0\u9650\u6c27\u6c14\u7f50"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u51e0\u4e4e\u65e0\u5c3d\u7684VIS?"
                },
                {
                    "source": "\u6700\u597d\u7684\u6cd5\u6756",
                    "target": "\u51e0\u4e4e\u65e0\u5c3d\u7684VIS?"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u65e0\u5c3d\u7684\u57fa\u7840"
                },
                {
                    "source": "UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 1",
                    "target": "\u00a76\u00a76\u00a76\u00a7lIntegrated Ore Factory - All in One!"
                },
                {
                    "source": "\u7535\u8def\u677f\u5927\u5e08",
                    "target": "\u00a76\u00a76\u00a76\u00a7lIntegrated Ore Factory - All in One!"
                },
                {
                    "source": "\u6700\u540e\u7684\u8fb9\u7586",
                    "target": "\u6211\u53d1\u8a93,\u4e0d\u4f1a\u66f4\u7cdf\u7684!"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u6c34\u51b7\u5854"
                },
                {
                    "source": "PCB\u5de5\u5382",
                    "target": "\u6c34\u51b7\u5854"
                },
                {
                    "source": "\u8d85\u7ea7\u7535\u8111...\u548c\u7ec6\u80de?",
                    "target": "\u7535\u8def\u677f\u5927\u5e08"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879"
                },
                {
                    "source": "\u6613\u88c5\u5378!",
                    "target": "\u7a81\u53d8\u5f88\u68d2,\u4e0d\u662f\u561b?"
                },
                {
                    "source": "\u91cf\u5b50\u53cd\u5e38",
                    "target": "2\u9636\u7eb3\u7c73\u953b\u7089"
                },
                {
                    "source": "1\u9636\u7eb3\u7c73\u953b\u7089",
                    "target": "2\u9636\u7eb3\u7c73\u953b\u7089"
                },
                {
                    "source": "\u538b\u7f29\u661f\u6838",
                    "target": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf"
                },
                {
                    "source": "\u5f02\u6c19\u83cc",
                    "target": "\u5149\u5b66\u8d34\u7247\u5143\u4ef6"
                },
                {
                    "source": "\u7b49\u7b49,PBI(\u805a\u82ef\u5e76\u54aa\u5511)\u4e0d\u662f\u6700\u540e\u4e00\u79cd\u5851\u6599?",
                    "target": "2\u9636PCB\u5de5\u5382"
                },
                {
                    "source": "PCB\u5de5\u5382",
                    "target": "2\u9636PCB\u5de5\u5382"
                },
                {
                    "source": "\u6709\u81ea\u6211\u610f\u8bc6\u7684\u7535\u8def\u677f",
                    "target": "\u62dc\u6258...\u4e0d\u8981\u88ab\u8fd9\u4e9b\u7535\u8def\u677f\u6253\u8d25\u4e86"
                },
                {
                    "source": "\u7b2c9\u9636\u6bb5(UHV)",
                    "target": "\u91cf\u5b50\u53cd\u5e38"
                },
                {
                    "source": "\u6211\u771f\u7684\u9700\u8981\u505a\u8fd9\u4e2a\u5417?",
                    "target": "\u91cf\u5b50\u53cd\u5e38"
                },
                {
                    "source": "\u7a81\u53d8\u5f88\u68d2,\u4e0d\u662f\u561b?",
                    "target": "\u6709\u81ea\u6211\u610f\u8bc6\u7684\u7535\u8def\u677f"
                },
                {
                    "source": "\u6211\u544a\u8bc9\u4f60,\u90a3\u4e0d\u662f\u9709\u83cc!",
                    "target": "\u5916\u534f\u710a\u6599"
                },
                {
                    "source": "\u4e00\u952d\u5728\u624b,\u65e0\u5c3d\u529b\u91cf",
                    "target": "\u5916\u534f\u710a\u6599"
                },
                {
                    "source": "\u8d85\u8d8a\u6781\u9650",
                    "target": "\u5916\u534f\u710a\u6599"
                },
                {
                    "source": "\u751f\u7269\u7535\u8def\u677f2: \u751f\u7269\u888b\u9f20",
                    "target": "\u8d85\u7ea7\u7535\u8111...\u548c\u7ec6\u80de?"
                },
                {
                    "source": "\u5916\u534f\u710a\u6599",
                    "target": "\u8d85\u7ea7\u7535\u8111...\u548c\u7ec6\u80de?"
                },
                {
                    "source": "\u7b2c9\u9636\u6bb5(UHV)",
                    "target": "\u6700\u540e\u7684\u8fb9\u7586"
                },
                {
                    "source": "\u6e7f\u4ef6\u4e3b\u673a",
                    "target": "\u7b2c9\u9636\u6bb5(UHV)"
                },
                {
                    "source": "\u6765\u81ea\u7a7a\u95f4\u4e2d\u7684\u4e2d\u5b50\u7d20",
                    "target": "\u7b2c9\u9636\u6bb5(UHV)"
                },
                {
                    "source": "\u7b2c8\u9636\u6bb5(UV)",
                    "target": "\u7b2c9\u9636\u6bb5(UHV)"
                },
                {
                    "source": "UHV\u9636\u6bb5\u66f4\u96be,\u66f4\u597d,\u66f4\u5feb,\u66f4\u5f3a... Pt 1",
                    "target": "UHV\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "UHV\u8d85\u5bfc(2,097,152 EU/t)",
                    "target": "UHV\u80fd\u6e90\u4ed3"
                },
                {
                    "source": "\u7535\u8def\u677f\u5927\u5e08",
                    "target": "\u529b\u573a\u53d1\u751f\u5668(UHV)"
                },
                {
                    "source": "\u7b2c9\u9636\u6bb5(UHV)",
                    "target": "UHV\u8d85\u5bfc(2,097,152 EU/t)"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u65e0\u9650\u7684LP"
                },
                {
                    "source": "\u4f60\u80fd\u591f\u6709\u591a\u9ed1\u6697\uff1f",
                    "target": "\u65e0\u9650\u7684LP"
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
                    "source": "\u5f02\u6c19\u83cc",
                    "target": "\u7b49\u7b49,PBI(\u805a\u82ef\u5e76\u54aa\u5511)\u4e0d\u662f\u6700\u540e\u4e00\u79cd\u5851\u6599?"
                },
                {
                    "source": "\u7ec8\u6781\u76ee\u6807:\u6742\u9879",
                    "target": "\u65e0\u7ebf 3.0"
                },
                {
                    "source": "\u65e0\u7ebf 2.0",
                    "target": "\u65e0\u7ebf 3.0"
                },
                {
                    "source": "\u9f99\u82af",
                    "target": "\u53cc\u8db3\u98de\u9f99\u6838\u5fc3"
                },
                {
                    "source": "\u7535\u8def\u677f\u5927\u5e08",
                    "target": "\u53cc\u8db3\u98de\u9f99\u6838\u5fc3"
                },
                {
                    "source": "\u5de5\u4e1a\u5316\u751f\u4ea7\u85fb\u7c7b",
                    "target": "\u5f02\u6c19\u83cc"
                },
                {
                    "source": "\u901a\u7528\u9175\u6bcd\u83cc",
                    "target": "\u5f02\u6c19\u83cc"
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