const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        phone: String!
    }

    type Task {
        id: ID!
        title: String!
        description: String
        userId: String
        user: User
        createdAt: String
    }

    type SigninResponse {
        success: Boolean!
        message: String!
        token: String
    }

    type RegisterResponse {
        success: Boolean!
        message: String!
    }

    type CreateTaskResponse {
        success: Boolean!
        message: String
        task: Task
    }

    type Mutation {
        signin (email: String! password: String!): SigninResponse
        registerUserAuth (email: String! name: String! password: String!): RegisterResponse
        createTask (title: String!, description: String): CreateTaskResponse
        registerUser (email: String! name: String! phoneNumber: String): RegisterResponse
    }

    type Query {
        task (taskId: ID!): Task
        tasks: [Task]
    }
`;

export default typeDefs;