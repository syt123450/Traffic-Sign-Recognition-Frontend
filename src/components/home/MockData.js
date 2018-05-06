const ResultChartConfig = {
    chart: {
        type: 'pie',
        marginTop: 0,
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        data: [
            {
                name: "Empty",
                y: 100,
            }
        ],
        colors: ['#058DC7', '#50B432', '#ED561B'],
        colorByPoint: true,
    }],
    title: {
        text: null
    },
    credits: {
        enabled: false
    }
};

const ResultTableResults = [
    {
        image_url: "./images/stop_sign.png",
        type: "Stop sign",
        confidence: "91",
    },
    {
        image_url: "./images/stop_sign.png",
        type: "Speed limit",
        confidence: "8",
    },
    {
        image_url: "./images/speed_limit.png",
        type: "Yield===",
        confidence: "1",
    }
];

const ResultTableNewResults = [
    {
        image_url: "./images/stop_sign.png",
        type: "Stop sign === ",
        confidence: "91"
    },
    {
        image_url: "./images/speed_limit.png",
        type: "Speed limit",
        confidence: "8"
    },
    {
        image_url: "./images/yield.png",
        type: "Yield",
        confidence: "1"
    },
];


const MockData = {
    resultChartConfig: ResultChartConfig,
    resultTableResults: ResultTableResults,
    resultTableNewResults: ResultTableNewResults,
};

export default MockData;
