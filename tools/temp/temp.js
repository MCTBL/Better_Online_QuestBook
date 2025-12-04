nodeData = [];
fetch("test.json")
    .then((response) => response.json())
    .then((data) => {
        nodeData = data["data"];
    });

var count = -1;
const timerId = setInterval(() => {
    count++;
    if (count < nodeData.length) {
        let tempOption = (optionsData = chart_this_chart.getOption());
        optionsData["series"][0]["data"].push(...nodeData[count]);
        chart_this_chart.setOption(optionsData);
    }
}, 1000);
