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
export const SEARCH_USERS = gql`
query searchUsers($q: String!){
    searchUsers(q: $q){
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
}
`;
export const MEMBERS = gql`
query members($orderBy: String, $skip: Int, $take: Int, $where: MemberWhereInput){
    members(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        createdAt
        id
        providerId
        roleType
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
export const PROVIDER = gql`
query provider($id: Int!){
    provider(id: $id){
        apiKey
        authorizationCode
        createdAt
        endpoint
        id
        members{
            createdAt
            id
            providerId
            roleType
            updatedAt
            userId
        }
        name
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
    }
}
`;
export const ACTIVE_PROVIDER = gql`
query activeProvider{
    activeProvider{
        apiKey
        authorizationCode
        createdAt
        endpoint
        id
        members{
            createdAt
            id
            providerId
            roleType
            updatedAt
            userId
        }
        name
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
        members{
            createdAt
            id
            providerId
            roleType
            updatedAt
            userId
        }
        name
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
export const MESSAGES = gql`
query messages($orderBy: String, $skip: Int, $take: Int, $where: MessageWhereInput){
    messages(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        content
        createdAt
        id
        role
        sessionId
        streaming
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
export const UPDATE_USER = gql`
mutation updateUser($input: UpdateUserInput!){
    updateUser(input: $input){
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
}
`;
export const ADD_MEMBER = gql`
mutation addMember($input: AddMemberInput!){
    addMember(input: $input){
        createdAt
        id
        providerId
        roleType
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
    }
}
`;
export const REMOVE_MEMBER = gql`
mutation removeMember($input: RemoveMemberInput!){
    removeMember(input: $input)
}
`;
export const EXIT_MEMBER = gql`
mutation exitMember($input: ExitMemberInput!){
    exitMember(input: $input)
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
export const UPDATE_PROVIDER = gql`
mutation updateProvider($input: UpdateProviderInput!){
    updateProvider(input: $input){
        apiKey
        authorizationCode
        createdAt
        endpoint
        id
        members{
            createdAt
            id
            providerId
            roleType
            updatedAt
            userId
        }
        name
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
        members{
            createdAt
            id
            providerId
            roleType
            updatedAt
            userId
        }
        name
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
export const UPDATE_SESSION = gql`
mutation updateSession($input: UpdateSessionInput!){
    updateSession(input: $input){
        createdAt
        id
        name
        providerId
        updatedAt
        userId
    }
}
`;
export const ADD_MESSAGE = gql`
mutation addMessage($input: AddMessageInput!){
    addMessage(input: $input){
        content
        createdAt
        id
        role
        sessionId
        streaming
        updatedAt
        userId
    }
}
`;
