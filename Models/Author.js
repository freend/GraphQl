import mongoose from 'mongoose';

const schema = mongoose.Schema;

const authorSchema = new schema({
    //id, name, age, books
    id: Number,
    name: String,
    age: Number,
    books: [String]
});

const model = mongoose.model('Author', authorSchema);

// this part not see udemy tutorial
export default model;