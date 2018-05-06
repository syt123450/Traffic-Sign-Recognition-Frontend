const last5EpochsConfig = {
    title: {
        text: 'Last 5 Updates'
    },
    xAxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        title: {
            text: 'Timestamp/Sample ID'
        },
    },
    yAxis: {
        title: {
            text: 'Accuracy'
        },
    },
    series: [
        {},
    ]
};

const modelHistoryConfig = {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Modle History'
    },
    plotOptions: {
        line: {
        dataLabels: {
            enabled: true
        },
            enableMouseTracking: false
        }
    },
    xAxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        title: {
            text: 'Epoch'
        },
    },
    yAxis: {
        title: {
            text: 'Accuracy'
        },
    },
    series: [
        {},
    ]
};


const MockData = {
    last5EpochsConfig: last5EpochsConfig,
    modelHistoryConfig: modelHistoryConfig,
};

export default MockData;
