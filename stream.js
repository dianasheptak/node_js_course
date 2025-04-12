const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'text.txt'), 'utf-8', (err, data) => {
// })

const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'));

stream.on('data', (chunk) => {
    console.log('started')
    console.log('__________',chunk, '____________')
})

stream.on('end', () => {
    console.log(
        'finished reading...'
    )
})