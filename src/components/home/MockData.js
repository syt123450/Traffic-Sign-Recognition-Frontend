// const ResultChartConfig = {
//     chart: {
//         type: 'pie',
//         marginTop: 0,
//     },
//     series: [{
//         data: [
//             {
//                 name: "Stop sign",
//                 y: 91,
//             },
//             {
//                 name: "Speed limit",
//                 y: 8,
//             },
//             {
//                 name: "Yield",
//                 y: 1,
//             },
//         ],
//         colors: ['#058DC7', '#50B432', '#ED561B'],
//         colorByPoint: true,
//     }],
//     title: {
//         text: 'Confidence %',
//         x: 100
//     },
//     credits: {
//         enabled: false
//     }
// };

const ResultChartConfig = {
    chart: {
        type: 'pie',
        marginTop: 0,
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
        text: 'Confidence %',
        x: 100
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