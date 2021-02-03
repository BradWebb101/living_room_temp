const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql(
temperature = {
    epochTime: Number,
    roomTemp: Number,
    roomHumidity: Number
}
)

const testData = [{
    epochTime:1612339200,
    roomTemp:15,
    roomHumidity:45,
},
{
    epochTime:1612339260,
    roomTemp:16,
    roomHumidity:45,
}
]
;
const resolvers = {
    Query: {
      testData: () => testData,
    },
  };