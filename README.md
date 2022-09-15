# graphql_nodejs_mysql_beginners
## use TypeScript, nodeJs, Mysql2, typeORM


#server url for graphql api
http://localhost:3001/graphql


### Sample Query
# query{
#   getAllUsers {
#    id,    name,    email, password
#   }
# }

# mutation{
#   createUser(
#     name:"test1",
#     email:"test2"
#   ){
#     actionStatus, message
#   }
# }

# mutation{
# 	deleteUser(id:3){
#     actionStatus, message
#   }
# }

# mutation{
# 	updatePassword(
#     name:"TestUser", 
#     oldPassword:null,
#     newPassword:"12345"
#   ){
#     actionStatus, message
#   }
# }
