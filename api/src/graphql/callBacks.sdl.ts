export const schema = gql`
  type CallBack {
    id: Int!
    buildid: String!
    deploymentid: String!
    machineID: String!
    publicIP: Int!
    privateIP: Int!
  }

  type Query {
    callBacks: [CallBack!]! @requireAuth
    callBack(id: Int!): CallBack @requireAuth
  }

  input CreateCallBackInput {
    buildid: String!
    deploymentid: String!
    machineID: String!
    publicIP: Int!
    privateIP: Int!
  }

  input UpdateCallBackInput {
    buildid: String
    deploymentid: String
    machineID: String
    publicIP: Int
    privateIP: Int
  }

  type Mutation {
    createCallBack(input: CreateCallBackInput!): CallBack! @requireAuth
    updateCallBack(id: Int!, input: UpdateCallBackInput!): CallBack!
      @requireAuth
    deleteCallBack(id: Int!): CallBack! @requireAuth
  }
`
