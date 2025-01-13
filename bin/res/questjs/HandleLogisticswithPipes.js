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
                    "name": "Automating Crafting Table Recipes",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u5408\u6210\u684c.png",
                    "x": 324.0,
                    "y": 48.0,
                    "tooltip": "Automating crafting table recipes is a good first <br/>step to automate your processes. \n\nTo achieve this<br/> goal, get yourself a crafting logistics pipe and <br/>a logistics crafting table.\n\nYou can import a craf<br/>ting table recipe into a logistics crafting table <br/>and you can click the \"import\" button on the craft<br/>ing logistics pipes GUI that is connected to the c<br/>rafting table to import the recipe into the pipe. "
                },
                {
                    "name": "Better Chassis",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u5e95\u76d8Mk2.png",
                    "x": 84.0,
                    "y": 48.0,
                    "tooltip": "Now that storage is handled, you want to dive into<br/> the automation part?\n\nA Mk1 Chassis can't hold en<br/>ough modules for complex functions. We need a bett<br/>er one.\n\nChassis Mk2 can hold 2 modules. It should<br/> do for now."
                },
                {
                    "name": "Chassis",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u5e95\u76d8Mk1.png",
                    "x": 84.0,
                    "y": -24.0,
                    "tooltip": "Basic Pipes can interact with adjacent blocks, but<br/> they also don't do much on their own. \n\nLogistics<br/> Pipes has modules that provide the pipes with mor<br/>e complex functions, but the Basic Logistics Pipes<br/> can't make use of them.\n\nTo make use of the modul<br/>es, there are special pipes called Chassis. \n\nTher<br/>e are multiple tiers of Chassis in Logistics Pipes<br/>. For now, a Mk 1, which can hold 1 module, will w<br/>ork.\n\nYou can insert modules directly in the chass<br/>is by right clicking said chassis with the module.<br/> But if you need to take modules out of a chassis <br/>or configure a module in one, you need to right cl<br/>ick the chassis with a wrench to access its UI."
                },
                {
                    "name": "Crafting on Demand",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5408\u6210\u6a21\u5757.png",
                    "x": 276.0,
                    "y": 48.0,
                    "tooltip": "We can now request items, but it sucks when the sy<br/>stems lack the component while we CAN craft those <br/>components.\n\nThe system needs to know how to craft<br/> the items it is requesting.\n\nTo get started, get <br/>a crafting module. Both automation of machine-craf<br/>ted recipes and crafting table recipes need this m<br/>odule, in one way or another.\n"
                },
                {
                    "name": "Even Better Chassis",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u5e95\u76d8Mk3.png",
                    "x": 84.0,
                    "y": 96.0,
                    "tooltip": "2 Modules are still not enough? Need more recipe s<br/>lots for machines?\n\nHere is the Mk3. It can hold 3<br/> modules."
                },
                {
                    "name": "EVEN EVEN BETTER CHASSIS",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u5e95\u76d8Mk4.png",
                    "x": 84.0,
                    "y": 144.0,
                    "tooltip": "What? You need better chassis already? Need even m<br/>ore recipe slots?\n\nHere is the Chassis Mk4. It hol<br/>ds 4 modules."
                },
                {
                    "name": "Filtering by Type",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u77ff\u7269\u8f9e\u5178\u524d\u7f00\u8fc7\u6ee4\u6536\u7eb3\u6a21\u5757.png",
                    "x": 180.0,
                    "y": 0.0,
                    "tooltip": "There are situations where there are a large amoun<br/>t of the same type of items, but the quantity of e<br/>ach aren't large enough to get them dedicated stor<br/>age...\n\nThe Type Filter ItemSink Module can assign<br/> an item type to inventory space it is connected t<br/>o. All items of the same type will be assigned to <br/>that inventory space."
                },
                {
                    "name": "Fluid Storage",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u6d41\u4f53\u57fa\u7840\u7ba1\u9053.png",
                    "x": 84.0,
                    "y": -72.0,
                    "tooltip": "Logistics Pipes can handle fluids.\n\nThere are mult<br/>iple pipes for fluids in logistics pipes. Logistic<br/>s Fluid Basic Pipe will be the one you will be mai<br/>nly using.\n\nYou can attach it to a tank, assign a <br/>fluid to it, and it will assign the buffer tank fo<br/>r that fluid. Basically a fluid version of the Ite<br/>mSink."
                },
                {
                    "name": "Get Those Machines to Work",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5408\u6210\u6a21\u5757.png",
                    "x": 276.0,
                    "y": 96.0,
                    "tooltip": "Most of the recipes are made in all kinds of machi<br/>nes. While a crafting logistics pipe works, it can<br/> only hold 1 recipe per pipe.\n\nIt is not an issue <br/>for logistics crafting tables as it can only hold <br/>one crafting table recipes, but it is wasteful to <br/>assign only one recipe for one machine.\n\nFor machi<br/>nes, use chassis. Preferably a higher tier. A Mk1 <br/>chassis with a crafting module is basically just a<br/> crafting logistics pipe.\n\nYou can't shift-click r<br/>ecipes from NEI so you have to drag the recipe fro<br/>m it. Don't worry, you can drag ghost items from N<br/>EI into the slots in the module to configure it.\n\n<br/>You notice there are 3 grey slots at the right. Th<br/>ey are for satellite logistics pipes. We will talk<br/> about it later.\n\n\u00a7cNote: do NOT use the output fa<br/>ce of the machine. The output side blocks all inte<br/>ractions unless you hit it with a screwdriver.\n\nAl<br/>so do NOT use auto-output, or else the machine wil<br/>l output the item into the pipe and the network wi<br/>ll treat the product as an item inserted into the <br/>system rather than an item requested by the system<br/> and will send it to its storage. Every other face<br/> except the cover works.\u00a7r\n\nThe checkmark means yo<br/>u have read the whole thing and should know how ma<br/>chine automation works using LP. The reward of thi<br/>s quest is the knowledge of how to automate GT mac<br/>hine recipes"
                },
                {
                    "name": "I NEED THAT!!!!!!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u6d41\u4f53\u536b\u661f\u7ba1\u9053.png",
                    "x": 324.0,
                    "y": 192.0,
                    "tooltip": "A lot of recipes take fluids. But crafting modules<br/> only have slots for items...\n\nIntroducing the Flu<br/>id Crafting Upgrade. It will allow you to allocate<br/> one kind of fluid for the craft. Drag one fluid c<br/>ell containing the fluid you need into the fluid s<br/>lot and set the correct amount.\n\nDon't forget to b<br/>ind it to a fluid satellite pipe. The way it binds<br/> is identical to the satellite logistics pipe."
                },
                {
                    "name": "Inserting Fluids",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u6d41\u4f53\u62bd\u53d6\u7ba1\u9053.png",
                    "x": 84.0,
                    "y": -120.0,
                    "tooltip": "Sometimes you insert fluid in the system. You need<br/> something to get the fluid into the correct buffe<br/>r other than inserting the fluid into the buffer m<br/>anually.\n\nThere are 2 pipes that can do the job: t<br/>ransfer fluid into a tank connected to a fluid bas<br/>ic pipe allocated to said fluid.\n\n1. Logistics Flu<br/>id Extractor Pipe. It extracts fluid from connecte<br/>d buffer to the correct big storage tank. It doesn<br/>'t require a pump but it is slower.\n\n2. Logistics <br/>Fluid Insertion Pipe. It does not pull fluids from<br/> tanks actively, requiring a GT pump if you are us<br/>ing GT tanks, but it can send fluids faster.\n\nTake<br/> a pick :)"
                },
                {
                    "name": "It gets polymorphic",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u540c\u7c7b\u7269\u54c1\u6536\u7eb3\u6a21\u5757.png",
                    "x": 180.0,
                    "y": -48.0,
                    "tooltip": "Sometimes people have a storage system that contai<br/>ns a lot of different items, or they have a large <br/>quantity of the same item.\n\nHere comes the Polymor<br/>phic ItemSink. It assigns inventory space to the k<br/>ind of items already in the inventory.\n\nVery handy<br/> especially when you have a storage controller con<br/>necting to a lot of drawers."
                },
                {
                    "name": "It's DA BEST",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u5e95\u76d8Mk5.png",
                    "x": 84.0,
                    "y": 192.0,
                    "tooltip": "You still need MORE recipe slots for the crafting <br/>modules?\n\nThis one will cost you \u00a7lTITANIUM\u00a7r. Are<br/> you sure about that?\n\nYes? OK...\n\nHere is the fin<br/>al tier of chassis: Chassis Mk5. Instead of increm<br/>enting the number of modules it can hold by 1 comp<br/>ared to the last tier, it straight up doubles the <br/>slots. Hopefully you think it is worth it."
                },
                {
                    "name": "Let this Sink in",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u54c1\u6536\u7eb3\u6a21\u5757.png",
                    "x": 132.0,
                    "y": -24.0,
                    "tooltip": "A well organized storage system is crucial for a l<br/>ogistics system. \n\nWith the ability to use modules<br/> through a chassis, we can now prepare for storage<br/> modules.\n\nLogistics Pipes uses ItemSink modules t<br/>o assign storage spaces.\n\nThis ItemSink modules ca<br/>n be used in 2 ways:\n\n1. Assign the storage of a c<br/>onnected inventory with at most 9 different kinds <br/>of items by setting 9 items as filter on the modul<br/>e.\n\n2. Assign a connected inventory as a default r<br/>oute. The default route is a destination for items<br/> that have no other valid storage spaces.\n\n\u00a7cNote:<br/> remember to always check if the default route has<br/> additional spaces because items that are stuck in<br/> the pipes without a destination will eventually Y<br/>EET themselves out of the pipes."
                },
                {
                    "name": "Modular Upgrades",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5347\u7ea7\u6a21\u5757\u5347\u7ea7.png",
                    "x": 324.0,
                    "y": 144.0,
                    "tooltip": "Upgrades can be applied for pipes and modules, but<br/> an extra upgrade is needed if we need to apply up<br/>grades to modules.\n\nHere is the Upgrade Module Upg<br/>rade. But regardless of how many of these you stuf<br/>f into a chassis, there will always be 2 module up<br/>grades per module.\n\n[note]Author's Note: Why is th<br/>e Upgrade Module Upgrade the ONLY upgrade that has<br/> a more 3D-style texture while the other modules a<br/>nd upgrades are completely flat?[/note]"
                },
                {
                    "name": "More ItemSinks in NEI",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u57fa\u4e8e\u7269\u54c1\u6240\u5c5e\u6a21\u7ec4\u7684\u6536\u7eb3\u6a21\u5757.png",
                    "x": 228.0,
                    "y": -24.0,
                    "tooltip": "There are more kinds of ItemSink modules in NEI. F<br/>eel free to look through them to find the ItemSink<br/> module that suits your needs.\n\nHow they sort item<br/>s and assign inventory spaces are mostly explained<br/> by their item names."
                },
                {
                    "name": "Pls Provide",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u6d41\u4f53\u4f9b\u5e94\u7ba1\u9053.png",
                    "x": 132.0,
                    "y": -72.0,
                    "tooltip": "Just like items which have itemsink modules for st<br/>orage and provider modules for request, fluids hav<br/>e basically the equivalent pipes.\n\nThe Logistics F<br/>luid Provider Pipe will do the job. It will provid<br/>e the fluid to other pipes and machines connected <br/>to them that need the fluid."
                },
                {
                    "name": "Powering Logistics",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u80fd\u91cf\u4e2d\u67a2.png",
                    "x": 36.0,
                    "y": -24.0,
                    "tooltip": "Every system takes power. A Logistics Pipes networ<br/>k is no exception.\n\nThe Logistics Pipes system run<br/>s on an energy called LP, but there are no generat<br/>ors that generate LP.\n\nInstead, Logistics Pipes ha<br/>s a power adapter called the Logistics Power Junct<br/>ion that converts EU into LP. Use a Basic Logistic<br/>s Pipe to connect the Power Junction to the whole <br/>network.\n\nThe Power Junction can receive power fro<br/>m all 6 sides while a Basic Logistics Pipe can onl<br/>y connect to the sides in the 4 cardinal direction<br/>s. "
                },
                {
                    "name": "Preparin' for Requestin'",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u4f9b\u5e94\u6a21\u5757.png",
                    "x": 132.0,
                    "y": 48.0,
                    "tooltip": "Logistics Pipes have automation capability in plac<br/>e, but first, it needs to know what inventory that<br/> items inside can be used for requests.\n\nThe Provi<br/>der module does this job nicely. When you open the<br/> interface of the module, there is a 3*3 grid. you<br/> can pick what items that the module can provide, <br/>or you can leave it empty as \"everything in the in<br/>ventory can be provided for requests\"."
                },
                {
                    "name": "Remote requests",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8fdc\u7a0b\u8bf7\u6c42\u5668.png",
                    "x": 180.0,
                    "y": 96.0,
                    "tooltip": "Remote requests aren't always convenient. As long <br/>as you are in range with a request pipe, the remot<br/>e orderer can take the order and send it to a requ<br/>est pipe the orderer binds to.\n\nPretty handy if yo<br/>u have an ender chest and an ender pouch...\n \n[not<br/>e]Author's note: Too bad ender chests and pouches <br/>are gated behind IV and thaumcraft... And why peop<br/>le would use a LP system at that point is really b<br/>eyond me...[/note]"
                },
                {
                    "name": "Requestin' a Recipe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7269\u6d41\u8bf7\u6c42\u684c.png",
                    "x": 228.0,
                    "y": 48.0,
                    "tooltip": "Most of the time you are requesting things because<br/> you need to craft something. So here is the Logis<br/>tics Request Table.\n\nThis thing comes with a 3*3 c<br/>rafting grid that you can load with a NEI recipe a<br/>nd request the recipe. There is also an inventory <br/>buffer that you can use to store items within."
                },
                {
                    "name": "Satellites! Wait,... They don't Orbit...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u536b\u661f\u7269\u6d41\u7ba1\u9053.png",
                    "x": 324.0,
                    "y": 96.0,
                    "tooltip": "A buffer of 64 per slot is never big enough. Just <br/>look at red alloy ingot for example. It can only h<br/>old 16 recipes worth of redstone at once. You don'<br/>t really want the items to just zoom around the pi<br/>pes while waiting for the machine to make room... <br/>You want to have a big chest buffering items to be<br/> processed.\n\nIntroducing the Satellite Logistics P<br/>ipes. It provides additional input into the recipe<br/> incorporating it.\n\nThe pipe runs on a numerical f<br/>requency system, with the whole server sharing the<br/> number pool. This ensures that 2 separate systems<br/> can be connected to each other without conflict.\n<br/>\nYou can \"connect\" a crafting module with one sate<br/>llite pipe by selecting the correct frequency of t<br/>he satellite part. Multiple modules can connect to<br/> a single satellite pipe.\n\nSatellite pipe inputs a<br/>re the 3 grey slots on the right of the 9 slots of<br/> the module. Only items in the 3 grey slots will b<br/>e sent to satellite pipes.\n\n\u00a7cNote: Ensure your sa<br/>tellite pipe has any frequency other than 0. A sat<br/>ellite pipe with frequency 0 will not work."
                },
                {
                    "name": "Sorting Incoming",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5feb\u901f\u5206\u62e3\u6a21\u5757.png",
                    "x": 276.0,
                    "y": -24.0,
                    "tooltip": "Now that storage spaces are organized and assigned<br/>, time to let the network sort the items for us.\n\n<br/>There are 2 ways to insert items into the system\n\n<br/>1. Use an extraction module to extract items into <br/>the system. It is slow, but everything that has a <br/>valid destination will be sent into the network.\n\n<br/>2. Use a QuickSort module. It extracts a whole sta<br/>ck of items that has a valid destination. This mod<br/>ule will ignore items that have no destinations ot<br/>her than the default route though...\n\nIt is your c<br/>hoice. Pick what you like."
                },
                {
                    "name": "The Backbone of the System",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u65e0\u8def\u7531\u8fd0\u8f93\u7ba1\u9053.png",
                    "x": -60.0,
                    "y": -24.0,
                    "tooltip": "Welcome to Logistics Pipes! This questline is dedi<br/>cated to this automation mod, which is placed in t<br/>he MV tier to help manage your chests, crafting an<br/>d even fluid crafting. It's quite similar to Proje<br/>ctRed: Transportation, but with some differences, <br/>particularly in fluid crafting. \n\nHere, you can co<br/>nnect chests and machines to a central location, b<br/>ut before you build that central location, you hav<br/>e to get some pipes for connection. The Unrouted T<br/>ransport Pipe is the first pipe you will ever need<br/> in Logistics Pipes.\n\nThey only connect to other p<br/>ipes and don't have any item routing capabilities,<br/> but you will need a ton of them.\n\n\u00a7cWarning: Do N<br/>OT form junctions with the Unrouted Transport Pipe<br/>s. Items going into an unrouted transport pipe jun<br/>ction will come out of a random exit of the juncti<br/>on."
                },
                {
                    "name": "The Basic Pipe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u57fa\u7840\u7269\u6d41\u7ba1\u9053.png",
                    "x": -12.0,
                    "y": -24.0,
                    "tooltip": "Unrouted Transport Pipes by themselves aren't usef<br/>ul.\n\nTime to use some of them to craft some Basic <br/>Logistics Pipes.\n\nThe Basic Logistics Pipes can co<br/>nnect to adjacent inventories and blocks. They als<br/>o have item routing capabilities, so you can use t<br/>hem to form junctions.\n\nBut they also cost some di<br/>amonds..."
                },
                {
                    "name": "There Is Extra Stuff...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u526f\u4ea7\u7269\u63d0\u53d6\u5347\u7ea7.png",
                    "x": 372.0,
                    "y": 144.0,
                    "tooltip": "Sometimes, a recipe has some extra outputs but the<br/> crafting module only has 1 output slot.\n\nThat is <br/>where the Crafting Byproduct Extraction Upgrade co<br/>mes in. You can assign a byproduct of the recipe a<br/>nd this upgrade will make the module extract the b<br/>yproduct as well. Now they won't clog the output b<br/>uffer."
                },
                {
                    "name": "Time to Request",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u8bf7\u6c42\u7269\u6d41\u7ba1\u9053.png",
                    "x": 180.0,
                    "y": 48.0,
                    "tooltip": "Your system now has the capability of providing it<br/>ems for requests, time to request items.\n\nThis Req<br/>uest Logistics Pipe can send out requests that, if<br/> the network has items that can fulfill the reques<br/>ts, send the item to the pipe.\n\nAttach an inventor<br/>y to it so that when items reach the request logis<br/>tics pipe, they are stored in an inventory and don<br/>'t getting yeeted out."
                },
                {
                    "name": "Time to See The Process",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5408\u6210\u76d1\u89c6\u5347\u7ea7.png",
                    "x": 228.0,
                    "y": 96.0,
                    "tooltip": "Want to see how the system is handling the request<br/> and fix it when you find things get stuck? Here i<br/>s the upgrade for you.\n\nThe Crafting Monitoring Up<br/>grade can let you view the current progress of the<br/> request. So if you find your crafting request is <br/>taking an abnormally long time and nothing is craf<br/>ted by your machines, you may want to take a look <br/>here.\n\nIt can be applied to your Logistics Request<br/> Table."
                },
                {
                    "name": "Troubleshooting...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u5df2\u635f\u574f\u7269\u54c1.png",
                    "x": 36.0,
                    "y": -72.0,
                    "tooltip": "If you find your pipe has thick red corners, then <br/>it means something is wrong. Either the network is<br/> out of power or you formed a junction with an Unr<br/>outed Transport Pipe.\n\nWhen the system gets more c<br/>omplicated, the chances go up that something will <br/>go wrong. Have fun troubleshooting! :)"
                },
                {
                    "name": "Upgrades",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://icon/\u7ba1\u9053\u63a7\u5236\u5668.png",
                    "x": 276.0,
                    "y": 144.0,
                    "tooltip": "You want to automate recipes involving fluids, but<br/> the crafting module only accept items? You want t<br/>o see how machines are handling recipes in the req<br/>uest table to see if something gets stuck? You wil<br/>l need \u00a7lupgrades\u00a7r.\n\nYou can apply upgrades to pi<br/>pes and modules, but you can't just access the upg<br/>rade menu by right clicking the chassis with a wre<br/>nch.\n\nIntroducing the Logistics Pipe Controller. T<br/>his item is like a wrench for LP, except it will o<br/>pen the upgrades menu. It can also allow you to vi<br/>ew statistics related to the pipe you are accessin<br/>g."
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
                    "source": "Crafting on Demand",
                    "target": "Automating Crafting Table Recipes"
                },
                {
                    "source": "\u51c6\u5907\u597d,\u7b2c2\u9636\u6bb5,MV",
                    "target": "Better Chassis"
                },
                {
                    "source": "Chassis",
                    "target": "Better Chassis"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "Chassis"
                },
                {
                    "source": "Powering Logistics",
                    "target": "Chassis"
                },
                {
                    "source": "Requestin' a Recipe",
                    "target": "Crafting on Demand"
                },
                {
                    "source": "Better Chassis",
                    "target": "Even Better Chassis"
                },
                {
                    "source": "\u7b2c\u4e00\u5757\u574e\u5854\u5c14\u5408\u91d1\u952d",
                    "target": "EVEN EVEN BETTER CHASSIS"
                },
                {
                    "source": "Even Better Chassis",
                    "target": "EVEN EVEN BETTER CHASSIS"
                },
                {
                    "source": "Let this Sink in",
                    "target": "Filtering by Type"
                },
                {
                    "source": "Powering Logistics",
                    "target": "Fluid Storage"
                },
                {
                    "source": "Crafting on Demand",
                    "target": "Get Those Machines to Work"
                },
                {
                    "source": "Modular Upgrades",
                    "target": "I NEED THAT!!!!!!"
                },
                {
                    "source": "Pls Provide",
                    "target": "I NEED THAT!!!!!!"
                },
                {
                    "source": "Fluid Storage",
                    "target": "Inserting Fluids"
                },
                {
                    "source": "Let this Sink in",
                    "target": "It gets polymorphic"
                },
                {
                    "source": "EVEN EVEN BETTER CHASSIS",
                    "target": "It's DA BEST"
                },
                {
                    "source": "\u8109\u51b2\u5408\u91d1",
                    "target": "It's DA BEST"
                },
                {
                    "source": "Chassis",
                    "target": "Let this Sink in"
                },
                {
                    "source": "Upgrades",
                    "target": "Modular Upgrades"
                },
                {
                    "source": "It gets polymorphic",
                    "target": "More ItemSinks in NEI"
                },
                {
                    "source": "Filtering by Type",
                    "target": "More ItemSinks in NEI"
                },
                {
                    "source": "Fluid Storage",
                    "target": "Pls Provide"
                },
                {
                    "source": "LV\u53d8\u538b\u5668",
                    "target": "Powering Logistics"
                },
                {
                    "source": "The Basic Pipe",
                    "target": "Powering Logistics"
                },
                {
                    "source": "Chassis",
                    "target": "Preparin' for Requestin'"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#6",
                    "target": "Remote requests"
                },
                {
                    "source": "MV\u9636\u6bb5\u4f60\u4e5f\u4f1a\u8ba8\u538c\u8fd9\u4e2a#5",
                    "target": "Remote requests"
                },
                {
                    "source": "Time to Request",
                    "target": "Remote requests"
                },
                {
                    "source": "Time to Request",
                    "target": "Requestin' a Recipe"
                },
                {
                    "source": "Get Those Machines to Work",
                    "target": "Satellites! Wait,... They don't Orbit..."
                },
                {
                    "source": "More ItemSinks in NEI",
                    "target": "Sorting Incoming"
                },
                {
                    "source": "\u590d\u4ec7\u8005\u8054\u76df,\u7ec4\u88c5!",
                    "target": "The Backbone of the System"
                },
                {
                    "source": "The Backbone of the System",
                    "target": "The Basic Pipe"
                },
                {
                    "source": "Modular Upgrades",
                    "target": "There Is Extra Stuff..."
                },
                {
                    "source": "\u4f60\u4f1a\u975e\u5e38\u8ba8\u538c\u8fd9\u4e2a #5",
                    "target": "Time to Request"
                },
                {
                    "source": "Preparin' for Requestin'",
                    "target": "Time to Request"
                },
                {
                    "source": "Upgrades",
                    "target": "Time to See The Process"
                },
                {
                    "source": "Powering Logistics",
                    "target": "Troubleshooting..."
                },
                {
                    "source": "Get Those Machines to Work",
                    "target": "Upgrades"
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