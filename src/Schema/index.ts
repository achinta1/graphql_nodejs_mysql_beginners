import { GraphQLSchema, GraphQLObjectType } from "graphql";
import {GET_ALL_USERS} from "./Queries/Users"
import {CREATE_USER,DELETE_USER,UPDATE_PASSWORD} from "./Mutations/Users"

const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        getAllUsers: GET_ALL_USERS
    },
});

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createUser : CREATE_USER,
        deleteUser : DELETE_USER,
        updatePassword : UPDATE_PASSWORD
    },
})


export const schema = new GraphQLSchema({
    query:RootQuery,
    mutation: Mutation
});