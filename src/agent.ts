import data from './mocks/data.json';

const StatisticData = () => JSON.parse(JSON.stringify(data));


const exportedData = {
    StatisticData
}

export default exportedData