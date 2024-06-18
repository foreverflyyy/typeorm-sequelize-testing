const { v4: uuidv4 } = require('uuid');

module.exports = async (repositories) => {
    const num = 10_000;
    const arr = [];
    for (let i = 0; i < num; i++) {
        if (i % 1_000 === 0) {
            console.log(i)
        }

        arr.push({id: uuidv4()})
        // await repositories.goalsRepository.save({})
    }

    const startTime = performance.now()
    await repositories.goalsRepository.insert(arr)
    const endTime = performance.now()
    console.log(`Time: ${endTime - startTime} milliseconds`)
}