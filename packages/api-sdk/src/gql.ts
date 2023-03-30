import gql from "gql-tag";

export const TOKENS = gql`
query tokens($orderBy: String, $skip: Int, $take: Int, $where: TokenWhereInput){
    tokens(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        createdAt
        description
        id
        type
        updatedAt
        user{
            avatar
            bio
            email
            emailValidatedAt
            githubId
            googleId
            id
            jobTitle
            login
            nickname
            phone
            planType
            username
        }
        userId
        value
    }
}
`;
export const SETTING = gql`
query setting($id: Int, $userId: Int){
    setting(id: $id, userId: $userId){
        activeProviderId
        activeSessionId
        id
        userId
    }
}
`;
export const MY_PROVIDERS = gql`
query myProviders{
    myProviders{
        apiKey
        authorizationCode
        createdAt
        endpoint
        id
        name
        type
        updatedAt
        userId
    }
}
`;
export const SESSIONS = gql`
query sessions($orderBy: String, $skip: Int, $take: Int, $where: SessionWhereInput){
    sessions(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        createdAt
        id
        name
        providerId
        updatedAt
        userId
    }
}
`;
export const LOGIN_BY_GITHUB = gql`
mutation loginByGithub($code: String!){
    loginByGithub(code: $code){
        siteName
        token
        user{
            avatar
            bio
            email
            emailValidatedAt
            githubId
            googleId
            id
            jobTitle
            login
            nickname
            phone
            planType
            username
        }
        userId
        username
    }
}
`;
export const LOGIN_BY_GOOGLE = gql`
mutation loginByGoogle($code: String!){
    loginByGoogle(code: $code){
        siteName
        token
        user{
            avatar
            bio
            email
            emailValidatedAt
            githubId
            googleId
            id
            jobTitle
            login
            nickname
            phone
            planType
            username
        }
        userId
        username
    }
}
`;
export const LOGIN_BY_PERSONAL_TOKEN = gql`
mutation loginByPersonalToken($token: String!){
    loginByPersonalToken(token: $token){
        siteName
        token
        user{
            avatar
            bio
            email
            emailValidatedAt
            githubId
            googleId
            id
            jobTitle
            login
            nickname
            phone
            planType
            username
        }
        userId
        username
    }
}
`;
export const ADD_TOKEN = gql`
mutation addToken($input: AddTokenInput!){
    addToken(input: $input){
        createdAt
        description
        id
        type
        updatedAt
        user{
            avatar
            bio
            email
            emailValidatedAt
            githubId
            googleId
            id
            jobTitle
            login
            nickname
            phone
            planType
            username
        }
        userId
        value
    }
}
`;
export const DELETE_TOKEN = gql`
mutation deleteToken($input: DeleteTokenInput!){
    deleteToken(input: $input)
}
`;
export const UPDATE_SETTING = gql`
mutation updateSetting($input: UpdateSettingInput!){
    updateSetting(input: $input){
        activeProviderId
        activeSessionId
        id
        userId
    }
}
`;
export const ADD_PROVIDER = gql`
mutation addProvider($input: AddProviderInput!){
    addProvider(input: $input){
        apiKey
        authorizationCode
        createdAt
        endpoint
        id
        name
        type
        updatedAt
        userId
    }
}
`;
export const ADD_SESSION = gql`
mutation addSession($input: AddSessionInput!){
    addSession(input: $input){
        createdAt
        id
        name
        providerId
        updatedAt
        userId
    }
}
`;
