module.exports = async (models) => {
    const { v4: uuidv4 } = require('uuid');
    const num = 20_000;
    const arr = [];
    for (let i = 0; i < num; i++) {
        if (i % 1_000 === 0) {
            console.log(i)
        }

        arr.push({id: uuidv4()})
    }

    const startTime = performance.now()
    await models.goals.bulkCreate(arr);
    const endTime = performance.now()
    console.log(`Time: ${endTime - startTime} milliseconds`)
}