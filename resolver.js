import authorModel from './Models/Author.js';
const resolvers = {
    Query: {
        authors: () => {
            const authors = authorModel.find({});
            console.log('-------------------');
            console.log('data', authors);
            console.log('-------------------');
            return authors;
        },
        /**
         *
         * @param __ : This argument is Object to send current object, but not ues current. So write 'root' or '__'
         * @param args : Schema send argument Query author(age: Int)
         * @returns {*}
         */
        author: (__, args) => {
            // args json data use schema.js query author
            console.log('args is ', args);
            // return one author to find authors equal to args's age
            // return authors.find(author => author.id === args.id);
        }
    },
    Mutation: {
        addAuthor: (__, {id, name, age, books}) => {
            const author = new authorModel({id: id, name: name, age: age, books: books});
            return author.save();
        }
    }
};

export default resolvers;
