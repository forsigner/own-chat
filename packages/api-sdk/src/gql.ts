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
        username
    }
}
`;
export const MEMBERS = gql`
query members($orderBy: String, $skip: Int, $take: Int, $where: MemberWhereInput){
    members(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        id
        roleType
        teamId
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
            username
        }
        userId
    }
}
`;
export const VISIT = gql`
query visit{
    visit{
        activeSessionId
        activeTeamId
    }
}
`;
export const CHAT_SETTINGS = gql`
query chatSettings{
    chatSettings{
        followUpMessageLength
        id
        maxToken
        model
        showTokenCount
    }
}
`;
export const TEAM = gql`
query team($id: Int!){
    team(id: $id){
        activeProviderId
        createdAt
        id
        members{
            id
            roleType
            teamId
            userId
        }
        name
        plan{
            createdAt
            id
            interval
            price
            status
            teamId
            type
            updatedAt
        }
        providers{
            accessToken
            apiKey
            authorizationCode
            endpoint
            id
            isPlus
            proxyHost
            teamId
            type
        }
        slug
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
            username
        }
        userId
    }
}
`;
export const ACTIVE_TEAM = gql`
query activeTeam{
    activeTeam{
        activeProviderId
        createdAt
        id
        members{
            id
            roleType
            teamId
            userId
        }
        name
        plan{
            createdAt
            id
            interval
            price
            status
            teamId
            type
            updatedAt
        }
        providers{
            accessToken
            apiKey
            authorizationCode
            endpoint
            id
            isPlus
            proxyHost
            teamId
            type
        }
        slug
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
            username
        }
        userId
    }
}
`;
export const MY_TEAMS = gql`
query myTeams{
    myTeams{
        activeProviderId
        createdAt
        id
        members{
            id
            roleType
            teamId
            userId
        }
        name
        plan{
            createdAt
            id
            interval
            price
            status
            teamId
            type
            updatedAt
        }
        providers{
            accessToken
            apiKey
            authorizationCode
            endpoint
            id
            isPlus
            proxyHost
            teamId
            type
        }
        slug
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
            username
        }
        userId
    }
}
`;
export const SESSIONS = gql`
query sessions($orderBy: String, $skip: Int, $take: Int, $where: SessionWhereInput){
    sessions(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        accessType
        createdAt
        id
        name
        settings
        slug
        teamId
        updatedAt
        userId
    }
}
`;
export const SESSION_BY_SLUG = gql`
query sessionBySlug($slug: String!){
    sessionBySlug(slug: $slug){
        accessType
        createdAt
        id
        messages{
            content
            createdAt
            id
            private
            role
            sessionId
            streaming
            updatedAt
            userId
            userMessageId
            views
        }
        name
        settings
        slug
        teamId
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
        private
        role
        sessionId
        streaming
        updatedAt
        userId
        userMessageId
        views
    }
}
`;
export const PROVIDERS = gql`
query providers($orderBy: String, $skip: Int, $take: Int, $where: ProviderWhereInput){
    providers(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        accessToken
        apiKey
        authorizationCode
        endpoint
        id
        isPlus
        proxyHost
        teamId
        type
    }
}
`;
export const ACTIVE_PROVIDER = gql`
query activeProvider{
    activeProvider{
        accessToken
        apiKey
        authorizationCode
        endpoint
        id
        isPlus
        proxyHost
        teamId
        type
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
        username
    }
}
`;
export const ADD_MEMBER = gql`
mutation addMember($input: AddMemberInput!){
    addMember(input: $input){
        id
        roleType
        teamId
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
export const UPDATE_VISIT = gql`
mutation updateVisit($input: UpdateVisitInput!){
    updateVisit(input: $input)
}
`;
export const UPDATE_CHAT_SETTINGS = gql`
mutation updateChatSettings($input: UpdateChatSettingsInput!){
    updateChatSettings(input: $input)
}
`;
export const UPDATE_TEAM = gql`
mutation updateTeam($input: UpdateTeamInput!){
    updateTeam(input: $input){
        activeProviderId
        createdAt
        id
        members{
            id
            roleType
            teamId
            userId
        }
        name
        plan{
            createdAt
            id
            interval
            price
            status
            teamId
            type
            updatedAt
        }
        providers{
            accessToken
            apiKey
            authorizationCode
            endpoint
            id
            isPlus
            proxyHost
            teamId
            type
        }
        slug
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
            username
        }
        userId
    }
}
`;
export const ADD_TEAM = gql`
mutation addTeam($input: AddTeamInput!){
    addTeam(input: $input){
        activeProviderId
        createdAt
        id
        members{
            id
            roleType
            teamId
            userId
        }
        name
        plan{
            createdAt
            id
            interval
            price
            status
            teamId
            type
            updatedAt
        }
        providers{
            accessToken
            apiKey
            authorizationCode
            endpoint
            id
            isPlus
            proxyHost
            teamId
            type
        }
        slug
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
            username
        }
        userId
    }
}
`;
export const ADD_SESSION = gql`
mutation addSession($input: AddSessionInput!){
    addSession(input: $input){
        accessType
        createdAt
        id
        name
        settings
        slug
        teamId
        updatedAt
        userId
    }
}
`;
export const UPDATE_SESSION = gql`
mutation updateSession($input: UpdateSessionInput!){
    updateSession(input: $input){
        accessType
        createdAt
        id
        name
        settings
        slug
        teamId
        updatedAt
        userId
    }
}
`;
export const REMOVE_SESSION = gql`
mutation removeSession($input: RemoveSessionInput!){
    removeSession(input: $input)
}
`;
export const ADD_MESSAGE = gql`
mutation addMessage($input: AddMessageInput!){
    addMessage(input: $input){
        content
        createdAt
        id
        private
        role
        sessionId
        streaming
        updatedAt
        userId
        userMessageId
        views
    }
}
`;
export const UPDATE_MESSAGE = gql`
mutation updateMessage($input: UpdateMessageInput!){
    updateMessage(input: $input){
        content
        createdAt
        id
        private
        role
        sessionId
        streaming
        updatedAt
        userId
        userMessageId
        views
    }
}
`;
export const REMOVE_MESSAGE_PAIR = gql`
mutation removeMessagePair($input: RemoveMessagePairInput!){
    removeMessagePair(input: $input)
}
`;
export const UPDATE_PROVIDER = gql`
mutation updateProvider($input: UpdateProviderInput!){
    updateProvider(input: $input){
        accessToken
        apiKey
        authorizationCode
        endpoint
        id
        isPlus
        proxyHost
        teamId
        type
    }
}
`;
