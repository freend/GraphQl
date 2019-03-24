import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
/**
 * 이것이 Model 이라고 생각하면 된다.
 */
import schema from './schema';
const server = express();

/**
 * 이렇게 request되는 부분과 response되는 end point는 여러개 생성할 수 있다.
 * 단 이건 개발용인데 추후 ejs등에 적용되는 방법등을 알아야 한다.
 */
server.use('/graphiql', graphiqlExpress({
    endpointURL: "/graphql"
}));

/**
 * connect mongoose
 */
mongoose.connect('mongodb://localhost/Authors', {
    useNewRulParser: true
}).then(
    () => {
        console.log('DB is connect success')
    }
).catch(
    () => {
        console.log('Error');
    }
)
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('data base connection success');
});

/**
 * end point에 json을 parssing하는 부분을 넣고 graphql express 에서 어떤 model을 사용하는지 정의했다.
 */
server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

server.listen(4000, () => {
    console.log('hello use port 4000');
});