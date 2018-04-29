const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const data = [
    {
        image_url: "./images/stop_sign.png",
        type: "Stop sign",
        confidence: "91",
        uploadedOn: (new Date()).toLocaleString('en-US', options),
    },
    {
        image_url: "./images/stop_sign.png",
        type: "Speed limit",
        confidence: "8",
        uploadedOn: (new Date()).toLocaleString('en-US', options),
    },
    {
        image_url: "./images/stop_sign.png",
        type: "Yield",
        confidence: "1",
        uploadedOn: (new Date()).toLocaleString('en-US', options),
    },
];

const newData = [
    {
        image_url: "./images/stop_sign.png",
        type: "Stop sign",
        confidence: "91",
        uploadedOn: (new Date()).toLocaleString('en-US', options),
    },
    {
        image_url: "./images/yield.png",
        type: "Speed limit",
        confidence: "8",
        uploadedOn: (new Date()).toLocaleString('en-US', options),
    },
    {
        image_url: "./images/speed_limit.png",
        type: "Yield",
        confidence: "1",
        uploadedOn: (new Date()).toLocaleString('en-US', options),
    },
];



const MockData = {
    data: data,
    newData: newData
};

export default MockData;