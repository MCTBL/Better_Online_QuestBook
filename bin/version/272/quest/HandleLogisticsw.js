
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
                    "name": "Automating Crafting Table Recipes",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6708805810511929325.png",
                    "x": 324.0,
                    "y": 48.0,
                    "tooltip": "Automating Crafting Table Recipes",
                    "data": "Automating crafting table recipes is a good first step to automate your processes. \n\nTo achieve this goal, get yourself a crafting logistics pipe and a logistics crafting table.\n\nYou can import a crafting table recipe into a logistics crafting table and you can click the \"import\" button on the crafting logistics pipes GUI that is connected to the crafting table to import the recipe into the pipe."
                },
                {
                    "name": "Better Chassis",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8825999907887304936.png",
                    "x": 84.0,
                    "y": 48.0,
                    "tooltip": "Better Chassis",
                    "data": "Now that storage is handled, you want to dive into the automation part?\n\nA Mk1 Chassis can't hold enough modules for complex functions. We need a better one.\n\nChassis Mk2 can hold 2 modules. It should do for now."
                },
                {
                    "name": "Chassis",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-9040111725259888874.png",
                    "x": 84.0,
                    "y": -24.0,
                    "tooltip": "Chassis",
                    "data": "Basic Pipes can interact with adjacent blocks, but they also don't do much on their own. \n\nLogistics Pipes has modules that provide the pipes with more complex functions, but the Basic Logistics Pipes can't make use of them.\n\nTo make use of the modules, there are special pipes called Chassis. \n\nThere are multiple tiers of Chassis in Logistics Pipes. For now, a Mk 1, which can hold 1 module, will work.\n\nYou can insert modules directly in the chassis by right clicking said chassis with the module. But if you need to take modules out of a chassis or configure a module in one, you need to right click the chassis with a wrench to access its UI."
                },
                {
                    "name": "Crafting on Demand",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5479647572889222662.png",
                    "x": 276.0,
                    "y": 48.0,
                    "tooltip": "Crafting on Demand",
                    "data": "We can now request items, but it sucks when the systems lack the component while we CAN craft those components.\n\nThe system needs to know how to craft the items it is requesting.\n\nTo get started, get a crafting module. Both automation of machine-crafted recipes and crafting table recipes need this module, in one way or another."
                },
                {
                    "name": "Even Better Chassis",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4963691488064877327.png",
                    "x": 84.0,
                    "y": 96.0,
                    "tooltip": "Even Better Chassis",
                    "data": "2 Modules are still not enough? Need more recipe slots for machines?\n\nHere is the Mk3. It can hold 3 modules."
                },
                {
                    "name": "EVEN EVEN BETTER CHASSIS",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6032059115700228569.png",
                    "x": 84.0,
                    "y": 144.0,
                    "tooltip": "EVEN EVEN BETTER CHASSIS",
                    "data": "What? You need better chassis already? Need even more recipe slots?\n\nHere is the Chassis Mk4. It holds 4 modules."
                },
                {
                    "name": "Filtering by Type",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8399516922550336751.png",
                    "x": 180.0,
                    "y": 0.0,
                    "tooltip": "Filtering by Type",
                    "data": "There are situations where there are a large amount of the same type of items, but the quantity of each aren't large enough to get them dedicated storage...\n\nThe Type Filter ItemSink Module can assign an item type to inventory space it is connected to. All items of the same type will be assigned to that inventory space."
                },
                {
                    "name": "Fluid Storage",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7003067506139187002.png",
                    "x": 84.0,
                    "y": -72.0,
                    "tooltip": "Fluid Storage",
                    "data": "Logistics Pipes can handle fluids.\n\nThere are multiple pipes for fluids in logistics pipes. Logistics Fluid Basic Pipe will be the one you will be mainly using.\n\nYou can attach it to a tank, assign a fluid to it, and it will assign the buffer tank for that fluid. Basically a fluid version of the ItemSink."
                },
                {
                    "name": "Get Those Machines to Work",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-4693314276576942578.png",
                    "x": 276.0,
                    "y": 96.0,
                    "tooltip": "Get Those Machines to Work",
                    "data": "Most of the recipes are made in all kinds of machines. While a crafting logistics pipe works, it can only hold 1 recipe per pipe.\n\nIt is not an issue for logistics crafting tables as it can only hold one crafting table recipes, but it is wasteful to assign only one recipe for one machine.\n\nFor machines, use chassis. Preferably a higher tier. A Mk1 chassis with a crafting module is basically just a crafting logistics pipe.\n\nYou can't shift-click recipes from NEI so you have to drag the recipe from it. Don't worry, you can drag ghost items from NEI into the slots in the module to configure it.\n\nYou notice there are 3 grey slots at the right. They are for satellite logistics pipes. We will talk about it later.\n\nNote: do NOT use the output face of the machine. The output side blocks all interactions unless you hit it with a screwdriver.\n\nAlso do NOT use auto-output, or else the machine will output the item into the pipe and the network will treat the product as an item inserted into the system rather than an item requested by the system and will send it to its storage. Every other face except the cover works.\n\nThe checkmark means you have read the whole thing and should know how machine automation works using LP. The reward of this quest is the knowledge of how to automate GT machine recipes"
                },
                {
                    "name": "I NEED THAT!!!!!!",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8106663093148392273.png",
                    "x": 324.0,
                    "y": 192.0,
                    "tooltip": "I NEED THAT!!!!!!",
                    "data": "A lot of recipes take fluids. But crafting modules only have slots for items...\n\nIntroducing the Fluid Crafting Upgrade. It will allow you to allocate one kind of fluid for the craft. Drag one fluid cell containing the fluid you need into the fluid slot and set the correct amount.\n\nDon't forget to bind it to a fluid satellite pipe. The way it binds is identical to the satellite logistics pipe."
                },
                {
                    "name": "Inserting Fluids",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6502072158014938432.png",
                    "x": 84.0,
                    "y": -120.0,
                    "tooltip": "Inserting Fluids",
                    "data": "Sometimes you insert fluid in the system. You need something to get the fluid into the correct buffer other than inserting the fluid into the buffer manually.\n\nThere are 2 pipes that can do the job: transfer fluid into a tank connected to a fluid basic pipe allocated to said fluid.\n\n1. Logistics Fluid Extractor Pipe. It extracts fluid from connected buffer to the correct big storage tank. It doesn't require a pump but it is slower.\n\n2. Logistics Fluid Insertion Pipe. It does not pull fluids from tanks actively, requiring a GT pump if you are using GT tanks, but it can send fluids faster.\n\nTake a pick :)"
                },
                {
                    "name": "It gets polymorphic",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5135866447130008070.png",
                    "x": 180.0,
                    "y": -48.0,
                    "tooltip": "It gets polymorphic",
                    "data": "Sometimes people have a storage system that contains a lot of different items, or they have a large quantity of the same item.\n\nHere comes the Polymorphic ItemSink. It assigns inventory space to the kind of items already in the inventory.\n\nVery handy especially when you have a storage controller connecting to a lot of drawers."
                },
                {
                    "name": "It's DA BEST",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6879337197971995339.png",
                    "x": 84.0,
                    "y": 192.0,
                    "tooltip": "It's DA BEST",
                    "data": "You still need MORE recipe slots for the crafting modules?\n\nThis one will cost you TITANIUM. Are you sure about that?\n\nYes? OK...\n\nHere is the final tier of chassis: Chassis Mk5. Instead of incrementing the number of modules it can hold by 1 compared to the last tier, it straight up doubles the slots. Hopefully you think it is worth it."
                },
                {
                    "name": "Let this Sink in",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5588321033523610480.png",
                    "x": 132.0,
                    "y": -24.0,
                    "tooltip": "Let this Sink in",
                    "data": "A well organized storage system is crucial for a logistics system. \n\nWith the ability to use modules through a chassis, we can now prepare for storage modules.\n\nLogistics Pipes uses ItemSink modules to assign storage spaces.\n\nThis ItemSink modules can be used in 2 ways:\n\n1. Assign the storage of a connected inventory with at most 9 different kinds of items by setting 9 items as filter on the module.\n\n2. Assign a connected inventory as a default route. The default route is a destination for items that have no other valid storage spaces.\n\nNote: remember to always check if the default route has additional spaces because items that are stuck in the pipes without a destination will eventually YEET themselves out of the pipes."
                },
                {
                    "name": "Modular Upgrades",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5853265364517528724.png",
                    "x": 324.0,
                    "y": 144.0,
                    "tooltip": "Modular Upgrades",
                    "data": "Upgrades can be applied for pipes and modules, but an extra upgrade is needed if we need to apply upgrades to modules.\n\nHere is the Upgrade Module Upgrade. But regardless of how many of these you stuff into a chassis, there will always be 2 module upgrades per module.\n\n[note]Author's Note: Why is the Upgrade Module Upgrade the ONLY upgrade that has a more 3D-style texture while the other modules and upgrades are completely flat?[/note]"
                },
                {
                    "name": "More ItemSinks in NEI",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8256300157046271476.png",
                    "x": 228.0,
                    "y": -24.0,
                    "tooltip": "More ItemSinks in NEI",
                    "data": "There are more kinds of ItemSink modules in NEI. Feel free to look through them to find the ItemSink module that suits your needs.\n\nHow they sort items and assign inventory spaces are mostly explained by their item names."
                },
                {
                    "name": "Pls Provide",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8730662353812275470.png",
                    "x": 132.0,
                    "y": -72.0,
                    "tooltip": "Pls Provide",
                    "data": "Just like items which have itemsink modules for storage and provider modules for request, fluids have basically the equivalent pipes.\n\nThe Logistics Fluid Provider Pipe will do the job. It will provide the fluid to other pipes and machines connected to them that need the fluid."
                },
                {
                    "name": "Powering Logistics",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8463515684422388364.png",
                    "x": 36.0,
                    "y": -24.0,
                    "tooltip": "Powering Logistics",
                    "data": "Every system takes power. A Logistics Pipes network is no exception.\n\nThe Logistics Pipes system runs on an energy called LP, but there are no generators that generate LP.\n\nInstead, Logistics Pipes has a power adapter called the Logistics Power Junction that converts EU into LP. Use a Basic Logistics Pipe to connect the Power Junction to the whole network.\n\nThe Power Junction can receive power from all 6 sides while a Basic Logistics Pipe can only connect to the sides in the 4 cardinal directions."
                },
                {
                    "name": "Preparin' for Requestin'",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7597946804573803113.png",
                    "x": 132.0,
                    "y": 48.0,
                    "tooltip": "Preparin' for Requestin'",
                    "data": "Logistics Pipes have automation capability in place, but first, it needs to know what inventory that items inside can be used for requests.\n\nThe Provider module does this job nicely. When you open the interface of the module, there is a 3*3 grid. you can pick what items that the module can provide, or you can leave it empty as \"everything in the inventory can be provided for requests\"."
                },
                {
                    "name": "Remote requests",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8395721167357407219.png",
                    "x": 180.0,
                    "y": 96.0,
                    "tooltip": "Remote requests",
                    "data": "Remote requests aren't always convenient. As long as you are in range with a request pipe, the remote orderer can take the order and send it to a request pipe the orderer binds to.\n\nPretty handy if you have an ender chest and an ender pouch...\n \n[note]Author's note: Too bad ender chests and pouches are gated behind IV and thaumcraft... And why people would use a LP system at that point is really beyond me...[/note]"
                },
                {
                    "name": "Requestin' a Recipe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5996163823746127218.png",
                    "x": 228.0,
                    "y": 48.0,
                    "tooltip": "Requestin' a Recipe",
                    "data": "Most of the time you are requesting things because you need to craft something. So here is the Logistics Request Table.\n\nThis thing comes with a 3*3 crafting grid that you can load with a NEI recipe and request the recipe. There is also an inventory buffer that you can use to store items within."
                },
                {
                    "name": "Satellites! Wait,... They don't Orbit...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-5667015492294033937.png",
                    "x": 324.0,
                    "y": 96.0,
                    "tooltip": "Satellites! Wait,... They don't Orbit...",
                    "data": "A buffer of 64 per slot is never big enough. Just look at red alloy ingot for example. It can only hold 16 recipes worth of redstone at once. You don't really want the items to just zoom around the pipes while waiting for the machine to make room... You want to have a big chest buffering items to be processed.\n\nIntroducing the Satellite Logistics Pipes. It provides additional input into the recipe incorporating it.\n\nThe pipe runs on a numerical frequency system, with the whole server sharing the number pool. This ensures that 2 separate systems can be connected to each other without conflict.\n\nYou can \"connect\" a crafting module with one satellite pipe by selecting the correct frequency of the satellite part. Multiple modules can connect to a single satellite pipe.\n\nSatellite pipe inputs are the 3 grey slots on the right of the 9 slots of the module. Only items in the 3 grey slots will be sent to satellite pipes.\n\nNote: Ensure your satellite pipe has any frequency other than 0. A satellite pipe with frequency 0 will not work."
                },
                {
                    "name": "Sorting Incoming",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-8495200811387783221.png",
                    "x": 276.0,
                    "y": -24.0,
                    "tooltip": "Sorting Incoming",
                    "data": "Now that storage spaces are organized and assigned, time to let the network sort the items for us.\n\nThere are 2 ways to insert items into the system\n\n1. Use an extraction module to extract items into the system. It is slow, but everything that has a valid destination will be sent into the network.\n\n2. Use a QuickSort module. It extracts a whole stack of items that has a valid destination. This module will ignore items that have no destinations other than the default route though...\n\nIt is your choice. Pick what you like."
                },
                {
                    "name": "The Backbone of the System",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6553493705247837396.png",
                    "x": -60.0,
                    "y": -24.0,
                    "tooltip": "The Backbone of the System",
                    "data": "Welcome to Logistics Pipes! This questline is dedicated to this automation mod, which is placed in the MV tier to help manage your chests, crafting and even fluid crafting. It's quite similar to ProjectRed: Transportation, but with some differences, particularly in fluid crafting. \n\nHere, you can connect chests and machines to a central location, but before you build that central location, you have to get some pipes for connection. The Unrouted Transport Pipe is the first pipe you will ever need in Logistics Pipes.\n\nThey only connect to other pipes and don't have any item routing capabilities, but you will need a ton of them.\n\nWarning: Do NOT form junctions with the Unrouted Transport Pipes. Items going into an unrouted transport pipe junction will come out of a random exit of the junction."
                },
                {
                    "name": "The Basic Pipe",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6241120305394579605.png",
                    "x": -12.0,
                    "y": -24.0,
                    "tooltip": "The Basic Pipe",
                    "data": "Unrouted Transport Pipes by themselves aren't useful.\n\nTime to use some of them to craft some Basic Logistics Pipes.\n\nThe Basic Logistics Pipes can connect to adjacent inventories and blocks. They also have item routing capabilities, so you can use them to form junctions.\n\nBut they also cost some diamonds..."
                },
                {
                    "name": "There Is Extra Stuff...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6370490362068994558.png",
                    "x": 372.0,
                    "y": 144.0,
                    "tooltip": "There Is Extra Stuff...",
                    "data": "Sometimes, a recipe has some extra outputs but the crafting module only has 1 output slot.\n\nThat is where the Crafting Byproduct Extraction Upgrade comes in. You can assign a byproduct of the recipe and this upgrade will make the module extract the byproduct as well. Now they won't clog the output buffer."
                },
                {
                    "name": "Time to Request",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6086424367920924213.png",
                    "x": 180.0,
                    "y": 48.0,
                    "tooltip": "Time to Request",
                    "data": "Your system now has the capability of providing items for requests, time to request items.\n\nThis Request Logistics Pipe can send out requests that, if the network has items that can fulfill the requests, send the item to the pipe.\n\nAttach an inventory to it so that when items reach the request logistics pipe, they are stored in an inventory and don't getting yeeted out."
                },
                {
                    "name": "Time to See The Process",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6955704912784996817.png",
                    "x": 228.0,
                    "y": 96.0,
                    "tooltip": "Time to See The Process",
                    "data": "Want to see how the system is handling the request and fix it when you find things get stuck? Here is the upgrade for you.\n\nThe Crafting Monitoring Upgrade can let you view the current progress of the request. So if you find your crafting request is taking an abnormally long time and nothing is crafted by your machines, you may want to take a look here.\n\nIt can be applied to your Logistics Request Table."
                },
                {
                    "name": "Troubleshooting...",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-7141204399473530015.png",
                    "x": 36.0,
                    "y": -72.0,
                    "tooltip": "Troubleshooting...",
                    "data": "If you find your pipe has thick red corners, then it means something is wrong. Either the network is out of power or you formed a junction with an Unrouted Transport Pipe.\n\nWhen the system gets more complicated, the chances go up that something will go wrong. Have fun troubleshooting! :)"
                },
                {
                    "name": "Upgrades",
                    "symbolSize": 31.200000000000003,
                    "symbol": "image://version/272/quests_icons/QuestIcon/-6712615400254826381.png",
                    "x": 276.0,
                    "y": 144.0,
                    "tooltip": "Upgrades",
                    "data": "You want to automate recipes involving fluids, but the crafting module only accept items? You want to see how machines are handling recipes in the request table to see if something gets stuck? You will need upgrades.\n\nYou can apply upgrades to pipes and modules, but you can't just access the upgrade menu by right clicking the chassis with a wrench.\n\nIntroducing the Logistics Pipe Controller. This item is like a wrench for LP, except it will open the upgrades menu. It can also allow you to view statistics related to the pipe you are accessing."
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
    