const config = {
    title: {
        text: 'Model History'
    },
    xAxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        title: {
            text: 'Timestamp/Sample ID'
        },
    },
    series: [
        {
            type: 'column',
            name: 1,
            data: [3, 2, 1, 3, 4, 3, 2, 1, 3, 4, 3, 1]
        },
        {
            type: 'column',
            name: 2,
            data: [2, 3, 5, 7, 6, 2, 3, 5, 7, 6, 2, 7]
        },
        {
            type: 'column',
            name: 3,
            data: [4, 3, 3, 9, 0, 4, 3, 3, 9, 0, ]
        },
        {
            type: 'column',
            name: 4,
            data: [3, 2, 1, 3, 4, 3, 2, 1, 3, 4, 3, 1]
        },
        {
            type: 'column',
            name: 5,
            data: [2, 3, 5, 7, 6, 2, 3, 5, 7, 6, 2, 7]
        },
        {
            type: 'column',
            name: 6,
            data: [4, 3, 3, 9, 0, 4, 3, 3, 9, 0, ]
        },
        {
            type: 'column',
            name: 7,
            data: [3, 2, 1, 3, 4, 3, 2, 1, 3, 4, 3, 1]
        },
        {
            type: 'column',
            name: 8,
            data: [2, 3, 5, 7, 6, 2, 3, 5, 7, 6, 2, 7]
        },
        {
            type: 'column',
            name: 9,
            data: [4, 3, 3, 9, 0, 4, 3, 3, 9, 0, ]
        },
        {
            type: 'column',
            name: 10,
            data: [3, 2, 1, 3, 4, 3, 2, 1, 3, 4, 3, 1]
        },
        {
            type: 'column',
            name: 11,
            data: [2, 3, 5, 7, 6, 2, 3, 5, 7, 6, 2, 7]
        },
        {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33, 3, 2.67, 3, 6.33, 3.33, 3, 2.67],
            marker:
                {
                    lineWidth: 2,
                    lineColor: 'blue',
                    fillColor: 'white'
                }
        }
    ]
};

const newConfig = {
    title: {
        text: 'Model History'
    },
    xAxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        title: {
            text: 'Timestamp/Sample ID'
        },
    },
    series: [
        {
            type: 'column',
            name: 1,
            data: [2, 3, 5, 7, 6, 2, 3, 5, 7, 6, 2, 7]
        },
        {
            type: 'column',
            name: 2,
            data: [3, 2, 1, 3, 4, 3, 2, 1, 3, 4, 3, 1]
        },
        {
            type: 'column',
            name: 3,
            data: [3, 2, 1, 3, 4, 3, 2, 1, 3, 4, 3, 1]
        },
        {
            type: 'column',
            name: 4,
            data: [3, 2, 1, 3, 4, 3, 2, 1, 3, 4, 3, 1]
        },
        {
            type: 'column',
            name: 5,
            data: [2, 3, 5, 7, 6, 2, 3, 5, 7, 6, 2, 7]
        },
        {
            type: 'column',
            name: 6,
            data: [4, 3, 3, 9, 0, 4, 3, 3, 9, 0, ]
        },
        {
            type: 'column',
            name: 7,
            data: [4, 3, 3, 9, 0, 4, 3, 3, 9, 0, ]
        },
        {
            type: 'column',
            name: 8,
            data: [2, 3, 5, 7, 6, 2, 3, 5, 7, 6, 2, 7]
        },
        {
            type: 'column',
            name: 9,
            data: [4, 3, 3, 9, 0, 4, 3, 3, 9, 0, ]
        },
        {
            type: 'column',
            name: 10,
            data: [3, 2, 1, 3, 4, 3, 2, 1, 3, 4, 3, 1]
        },
        {
            type: 'column',
            name: 11,
            data: [2, 3, 5, 7, 6, 2, 3, 5, 7, 6, 2, 7]
        },
        {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33, 3, 2.67, 3, 6.33, 3.33, 3, 2.67],
            marker:
                {
                    lineWidth: 2,
                    lineColor: 'blue',
                    fillColor: 'white'
                }
        }
    ]
};

const MockData = {
    config: config,
    newConfig: newConfig
};

export default MockData;