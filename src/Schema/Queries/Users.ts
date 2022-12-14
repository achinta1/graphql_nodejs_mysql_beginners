import { GraphQLList } from "graphql";
import {UserType} from "../TypeDefs/Users"
import {Users} from "../../Entities/Users"

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
};
