const mongoose = require('mongoose');
main();
async function main() {
    await mongoose.connect('mongodb+srv://Snehal:12345@cluster0.pegveid.mongodb.net/Comment')
        .then(() => {console.log('mongo connect...')})
        .catch(err => console.log(err));
}   