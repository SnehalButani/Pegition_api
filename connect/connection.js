const mongoose = require('mongoose');
main();
async function main() {
    await mongoose.connect('mongodb://localhost:27017/Comment')
        .then(() => {console.log('mongo connect...')})
        .catch(err => console.log(err));
}