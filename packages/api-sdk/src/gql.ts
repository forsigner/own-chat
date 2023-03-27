import gql from "gql-tag";

export const TODOS = gql`
query todos($orderBy: String, $skip: Int, $take: Int, $where: TodoWhereInput){
    todos(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        completed
        createdAt
        id
        title
        updatedAt
        userId
    }
}
`;
export const ORDERS_CONNECTION = gql`
query ordersConnection($orderBy: String, $skip: Int, $take: Int, $where: OrderWhereInput){
    ordersConnection(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        hasNextPage
        items{
            botId
            clientOrderId
            commission
            commissionAsset
            createdAt
            id
            isBuyer
            isMaker
            operationType
            orderId
            price
            qty
            quoteQty
            realizedProfit
            side
            status
            symbol
            time
            type
            updatedAt
            userId
        }
        totalCount
    }
}
`;
export const STRATEGYS_CONNECTION = gql`
query strategysConnection($orderBy: String, $skip: Int, $take: Int, $where: StrategyWhereInput){
    strategysConnection(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        hasNextPage
        items{
            config
            createdAt
            devBotId
            docs
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        totalCount
    }
}
`;
export const OWNED_STRATEGIES = gql`
query ownedStrategies{
    ownedStrategies{
        collaborators{
            createdAt
            id
            roleType
            strategyId
            updatedAt
            userId
        }
        config
        createdAt
        devBotId
        enableStopPassword
        enableTrade
        enableUI
        id
        intro
        isLazyStart
        isPublic
        name
        paramsSchema
        slug
        token
        tradeTypes
        updatedAt
        usedCount
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
            walletAddress
        }
        userId
    }
}
`;
export const PUBLIC_STRATEGIES = gql`
query publicStrategies{
    publicStrategies{
        collaborators{
            createdAt
            id
            roleType
            strategyId
            updatedAt
            userId
        }
        config
        createdAt
        devBotId
        enableStopPassword
        enableTrade
        enableUI
        id
        intro
        isLazyStart
        isPublic
        name
        paramsSchema
        slug
        token
        tradeTypes
        updatedAt
        usedCount
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
            walletAddress
        }
        userId
    }
}
`;
export const STRATEGY_CODE = gql`
query strategyCode($strategyId: Float!){
    strategyCode(strategyId: $strategyId)
}
`;
export const UI_CODE = gql`
query uiCode($strategyId: Float!){
    uiCode(strategyId: $strategyId)
}
`;
export const AGG_TRADES = gql`
query aggTrades($symbol: String!, $type: String!){
    aggTrades(symbol: $symbol, type: $type){
        aggId
        isBuyerMaker
        price
        quantity
        timestamp
    }
}
`;
export const NONCE = gql`
query nonce($address: String!){
    nonce(address: $address)
}
`;
export const WALLET = gql`
query wallet($userId: Int){
    wallet(userId: $userId){
        createdAt
        free
        frozen
        id
        updatedAt
        userId
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
        walletAddress
    }
}
`;
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
            walletAddress
        }
        userId
        value
    }
}
`;
export const OWNED_APIS = gql`
query ownedApis{
    ownedApis{
        createdAt
        exchange
        id
        isSimulated
        name
        passphrase
        updatedAt
        userId
    }
}
`;
export const API = gql`
query api($id: Int!){
    api(id: $id){
        createdAt
        exchange
        id
        isSimulated
        name
        passphrase
        updatedAt
        userId
    }
}
`;
export const BALANCE = gql`
query balance($apiId: Float!, $coin: String!, $type: String!){
    balance(apiId: $apiId, coin: $coin, type: $type){
        free
        locked
    }
}
`;
export const STRATEGY = gql`
query strategy($id: Int, $name: String){
    strategy(id: $id, name: $name){
        collaborators{
            createdAt
            id
            roleType
            strategyId
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
                walletAddress
            }
            userId
        }
        config
        createdAt
        devBotId
        docs
        enableStopPassword
        enableTrade
        enableUI
        id
        intro
        isLazyStart
        isPublic
        name
        paramsSchema
        slug
        token
        tradeTypes
        updatedAt
        usedCount
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
            walletAddress
        }
        userId
    }
}
`;
export const STRATEGYS = gql`
query strategys($orderBy: String, $skip: Int, $take: Int, $where: StrategyWhereInput){
    strategys(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        collaborators{
            createdAt
            id
            roleType
            strategyId
            updatedAt
            userId
        }
        config
        createdAt
        devBotId
        docs
        enableStopPassword
        enableTrade
        enableUI
        id
        intro
        isLazyStart
        isPublic
        name
        paramsSchema
        slug
        token
        tradeTypes
        updatedAt
        usedCount
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
            walletAddress
        }
        userId
    }
}
`;
export const SYMBOL = gql`
query symbol($symbol: String!, $tradeType: TradeType!){
    symbol(symbol: $symbol, tradeType: $tradeType){
        baseAsset
        isMarginTradingAllowed
        isSpotTradingAllowed
        maxPrice
        maxQty
        minNotional
        minPrice
        minQty
        pricePrecision
        qtyPrecision
        quoteAsset
        symbol
        tradeType
    }
}
`;
export const SYMBOLS = gql`
query symbols($quoteAsset: String, $tradeType: TradeType!){
    symbols(quoteAsset: $quoteAsset, tradeType: $tradeType){
        baseAsset
        isMarginTradingAllowed
        isSpotTradingAllowed
        maxPrice
        maxQty
        minNotional
        minPrice
        minQty
        pricePrecision
        qtyPrecision
        quoteAsset
        symbol
        tradeType
    }
}
`;
export const SAVE_SYMBOLS = gql`
query saveSymbols($tradeType: String!){
    saveSymbols(tradeType: $tradeType)
}
`;
export const OWNED_BOTS = gql`
query ownedBots($status: String!){
    ownedBots(status: $status){
        apiId
        apiKey
        backtestBotParams
        backtestParams
        backtestStatus
        createdAt
        duration
        endTime
        id
        isPublic
        name
        params
        status
        storage
        strategy{
            config
            createdAt
            devBotId
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
        userId
    }
}
`;
export const PUBLIC_BOTS = gql`
query publicBots{
    publicBots{
        apiId
        apiKey
        backtestBotParams
        backtestParams
        backtestStatus
        createdAt
        duration
        endTime
        id
        isPublic
        name
        params
        status
        storage
        strategy{
            config
            createdAt
            devBotId
            docs
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
        userId
    }
}
`;
export const BOTS = gql`
query bots($orderBy: String, $skip: Int, $take: Int, $where: BotWhereInput){
    bots(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        apiId
        apiKey
        backtestBotParams
        backtestParams
        backtestStatus
        createdAt
        duration
        endTime
        id
        isPublic
        name
        params
        status
        storage
        strategy{
            config
            createdAt
            devBotId
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
        userId
    }
}
`;
export const BOT = gql`
query bot($id: Int!){
    bot(id: $id){
        apiId
        apiKey
        backtestBotParams
        backtestParams
        backtestStatus
        createdAt
        duration
        endTime
        id
        isPublic
        name
        params
        status
        storage
        strategy{
            config
            createdAt
            devBotId
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
        userId
    }
}
`;
export const BOT_STATS = gql`
query botStats($botId: Float!){
    botStats(botId: $botId){
        duration
        orderNum
        profit
    }
}
`;
export const BOT_API_KEY = gql`
query botApiKey($botId: Float!){
    botApiKey(botId: $botId)
}
`;
export const SYMBOL_PRICE = gql`
query symbolPrice($isSpot: Boolean!, $source: String!, $symbol: String!){
    symbolPrice(isSpot: $isSpot, source: $source, symbol: $symbol)
}
`;
export const RECOMMENDED_GRID_PARAMS = gql`
query recommendedGridParams($limit: Int, $period: String!, $symbol: String!){
    recommendedGridParams(limit: $limit, period: $period, symbol: $symbol){
        gridNumber
        lowerPrice
        upperPrice
    }
}
`;
export const SPOT_ORDERS = gql`
query spotOrders($apiId: Int!, $endTime: Float, $limit: Float, $orderId: Float, $recvWindow: Float, $startTime: Float, $symbol: String!){
    spotOrders(apiId: $apiId, endTime: $endTime, limit: $limit, orderId: $orderId, recvWindow: $recvWindow, startTime: $startTime, symbol: $symbol){
        clientOrderId
        cummulativeQuoteQty
        executedQty
        icebergQty
        isWorking
        orderId
        orderListId
        origQty
        origQuoteOrderQty
        price
        side
        status
        stopPrice
        symbol
        time
        timeInForce
        type
        updateTime
    }
}
`;
export const LOGS = gql`
query logs($orderBy: String, $skip: Int, $take: Int, $where: LogWhereInput){
    logs(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        botId
        content
        createdAt
        id
        type
        updatedAt
    }
}
`;
export const LOG = gql`
query log($id: Int!){
    log(id: $id){
        botId
        content
        createdAt
        id
        type
        updatedAt
    }
}
`;
export const ORDERS = gql`
query orders($orderBy: String, $skip: Int, $take: Int, $where: OrderWhereInput){
    orders(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        botId
        clientOrderId
        commission
        commissionAsset
        createdAt
        id
        isBuyer
        isMaker
        operationType
        orderId
        price
        qty
        quoteQty
        realizedProfit
        side
        status
        symbol
        time
        type
        updatedAt
        userId
    }
}
`;
export const OPENED_ORDERS = gql`
query openedOrders($botId: Float!){
    openedOrders(botId: $botId){
        botId
        clientOrderId
        commission
        commissionAsset
        createdAt
        id
        isBuyer
        isMaker
        operationType
        orderId
        price
        qty
        quoteQty
        realizedProfit
        side
        status
        symbol
        time
        type
        updatedAt
        userId
    }
}
`;
export const ORDER = gql`
query order($id: Int, $orderId: String){
    order(id: $id, orderId: $orderId){
        botId
        clientOrderId
        commission
        commissionAsset
        createdAt
        id
        isBuyer
        isMaker
        operationType
        orderId
        price
        qty
        quoteQty
        realizedProfit
        side
        status
        symbol
        time
        type
        updatedAt
        userId
    }
}
`;
export const ORDERBOOKS = gql`
query orderbooks($symbol: String!, $type: String!){
    orderbooks(symbol: $symbol, type: $type){
        p
        q
        s
    }
}
`;
export const STORAGE_GET = gql`
query storageGet($key: String!){
    storageGet(key: $key)
}
`;
export const STORAGE_GET_ALL = gql`
query storageGetAll{
    storageGetAll
}
`;
export const KV = gql`
query kv($key: String!){
    kv(key: $key)
}
`;
export const KVS = gql`
query kvs($pattern: String!){
    kvs(pattern: $pattern)
}
`;
export const BOT_PARAMS = gql`
query botParams($botId: Float!){
    botParams(botId: $botId){
        params
    }
}
`;
export const GRID_ORDERS = gql`
query gridOrders($orderBy: String, $skip: Int, $take: Int, $where: GridOrderWhereInput){
    gridOrders(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        botId
        buyOrder{
            botId
            clientOrderId
            commission
            commissionAsset
            createdAt
            id
            isBuyer
            isMaker
            operationType
            orderId
            price
            qty
            quoteQty
            realizedProfit
            side
            status
            symbol
            time
            type
            updatedAt
            userId
        }
        buyOrderId
        createdAt
        id
        sellOrder{
            botId
            clientOrderId
            commission
            commissionAsset
            createdAt
            id
            isBuyer
            isMaker
            operationType
            orderId
            price
            qty
            quoteQty
            realizedProfit
            side
            status
            symbol
            time
            type
            updatedAt
            userId
        }
        sellOrderId
        updatedAt
    }
}
`;
export const SYMBOL_LEVERAGE = gql`
query symbolLeverage($apiId: Float!, $symbol: String!){
    symbolLeverage(apiId: $apiId, symbol: $symbol)
}
`;
export const SET_LEVERAGE = gql`
query setLeverage($input: SetLeverageInput!){
    setLeverage(input: $input)
}
`;
export const USABLE_RUNNERS = gql`
query usableRunners($strategyId: Float!){
    usableRunners(strategyId: $strategyId){
        createdAt
        heartbeatAt
        id
        machineHash
        machineIp
        name
        runnerType
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
            walletAddress
        }
        userId
    }
}
`;
export const OWNED_RUNNERS = gql`
query ownedRunners{
    ownedRunners{
        createdAt
        heartbeatAt
        id
        machineHash
        machineIp
        name
        runnerType
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
            walletAddress
        }
        userId
    }
}
`;
export const RUNNER_STRATEGYS = gql`
query runnerStrategys($orderBy: String, $skip: Int, $take: Int, $where: RunnerStrategyWhereInput){
    runnerStrategys(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        createdAt
        id
        runnerId
        strategy{
            config
            createdAt
            devBotId
            docs
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
    }
}
`;
export const OWNED_NOTIFIERS = gql`
query ownedNotifiers{
    ownedNotifiers{
        config
        id
        name
        type
        userId
    }
}
`;
export const NOTIFIERS = gql`
query notifiers($orderBy: String, $skip: Int, $take: Int, $where: NotifierWhereInput){
    notifiers(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        config
        id
        name
        type
        userId
    }
}
`;
export const NOTIFIER = gql`
query notifier($id: Int!){
    notifier(id: $id){
        config
        id
        name
        type
        userId
    }
}
`;
export const CHECK_RESET_PASSWORD_TOKEN = gql`
query checkResetPasswordToken($token: String!){
    checkResetPasswordToken(token: $token)
}
`;
export const CHECK_VERIFY_EMAIL_TOKEN = gql`
query checkVerifyEmailToken($token: String!){
    checkVerifyEmailToken(token: $token){
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
            walletAddress
        }
        userId
        username
    }
}
`;
export const CHECK_PERSONAL_TOKEN = gql`
query checkPersonalToken($token: String!){
    checkPersonalToken(token: $token){
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
        walletAddress
    }
}
`;
export const DEPOSIT_CODES = gql`
query depositCodes($orderBy: String, $skip: Int, $take: Int, $where: DepositCodeWhereInput){
    depositCodes(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        cashAmount
        code
        consumed
        createdAt
        id
        updatedAt
    }
}
`;
export const GENERATE_DEPOSIT_CODE = gql`
query generateDepositCode($input: GenerateDepositCodeInput!){
    generateDepositCode(input: $input)
}
`;
export const STATS = gql`
query stats{
    stats{
        botCount
        strategyCount
        userCount
    }
}
`;
export const TWITTER_USER_BY_USERNAME = gql`
query twitterUserByUsername($username: String!){
    twitterUserByUsername(username: $username){
        id
        name
        profile_image_url
        username
    }
}
`;
export const SIGNALS = gql`
query signals{
    signals{
        alias
        candle{
            close
            closeTime
            high
            low
            open
            openTime
            period
            volume
        }
        name
        period
        symbol
        ticker{
            ask
            askVolume
            average
            bid
            bidVolume
            change
            close
            closeVolume
            high
            low
            open
            percentage
            previousClose
            quoteVolume
            symbol
            time
            volume
        }
        time
        tradeType
    }
}
`;
export const VERIFY_PASSWORD_LINK_TOKEN = gql`
query verifyPasswordLinkToken($token: String!){
    verifyPasswordLinkToken(token: $token){
        apiId
        apiKey
        backtestBotParams
        backtestParams
        backtestStatus
        createdAt
        duration
        endTime
        id
        isPublic
        name
        params
        status
        storage
        strategy{
            config
            createdAt
            devBotId
            docs
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
        userId
    }
}
`;
export const IS_STOP_PASSWORD_EMPTY = gql`
query isStopPasswordEmpty($botId: Float!){
    isStopPasswordEmpty(botId: $botId)
}
`;
export const EXIT_RULES_CONNECTION = gql`
query exitRulesConnection($orderBy: String, $skip: Int, $take: Int, $where: ExitRuleWhereInput){
    exitRulesConnection(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        hasNextPage
        items{
            code
            createdAt
            id
            name
            type
            updatedAt
        }
        totalCount
    }
}
`;
export const EXIT_RULES = gql`
query exitRules($orderBy: String, $skip: Int, $take: Int, $where: ExitRuleWhereInput){
    exitRules(orderBy: $orderBy, skip: $skip, take: $take, where: $where){
        code
        createdAt
        id
        name
        type
        updatedAt
    }
}
`;
export const EXIT_RULE = gql`
query exitRule($id: Int!){
    exitRule(id: $id){
        code
        createdAt
        id
        name
        type
        updatedAt
    }
}
`;
export const CLI_LOGIN_STATUS = gql`
query cliLoginStatus($cliToken: String!){
    cliLoginStatus(cliToken: $cliToken)
}
`;
export const CREATE_TODO = gql`
mutation createTodo($input: CreateTodoInput!){
    createTodo(input: $input){
        completed
        createdAt
        id
        title
        updatedAt
        userId
    }
}
`;
export const UPDATE_TODO = gql`
mutation updateTodo($input: UpdateTodoInput!){
    updateTodo(input: $input){
        completed
        createdAt
        id
        title
        updatedAt
        userId
    }
}
`;
export const DELETE_TODO = gql`
mutation deleteTodo($input: DeleteTodoInput!){
    deleteTodo(input: $input)
}
`;
export const SYNC_SPOT_ORDER = gql`
mutation syncSpotOrder($endTime: Float!, $startTime: Float!, $symbol: String, $type: String, $userId: Float!){
    syncSpotOrder(endTime: $endTime, startTime: $startTime, symbol: $symbol, type: $type, userId: $userId){
        code
        msg
        total
    }
}
`;
export const GET_ORDERS = gql`
mutation getOrders($currentPage: Float!, $pageSize: Float!, $symbol: String, $type: String, $userId: Float!){
    getOrders(currentPage: $currentPage, pageSize: $pageSize, symbol: $symbol, type: $type, userId: $userId){
        data{
            botId
            clientOrderId
            commission
            commissionAsset
            createdAt
            id
            isBuyer
            isMaker
            operationType
            orderId
            price
            qty
            quoteQty
            realizedProfit
            side
            status
            symbol
            time
            type
            updatedAt
            userId
        }
        total
    }
}
`;
export const UPDATE_STRATEGY_CODE = gql`
mutation updateStrategyCode($input: UpdateStrategyCodeInput!){
    updateStrategyCode(input: $input)
}
`;
export const UPDATE_UI_CODE = gql`
mutation updateUiCode($input: UpdateUiCodeInput!){
    updateUiCode(input: $input)
}
`;
export const REGISTER_BY_EMAIL = gql`
mutation registerByEmail($input: RegisterByEmailInput!){
    registerByEmail(input: $input)
}
`;
export const LOGIN_BY_EMAIL = gql`
mutation loginByEmail($input: LoginByEmailInput!){
    loginByEmail(input: $input){
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
            walletAddress
        }
        userId
        username
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
            walletAddress
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
            walletAddress
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
            walletAddress
        }
        userId
        username
    }
}
`;
export const LOGIN_BY_WALLET = gql`
mutation loginByWallet($input: VerifySignMessageInput!){
    loginByWallet(input: $input){
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
            walletAddress
        }
        userId
        username
    }
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
        walletAddress
    }
}
`;
export const MODIFY_PASSWORD = gql`
mutation modifyPassword($input: ModifyPasswordInput!){
    modifyPassword(input: $input)
}
`;
export const ADD_COLLABORATOR = gql`
mutation addCollaborator($input: AddCollaboratorInput!){
    addCollaborator(input: $input){
        createdAt
        id
        roleType
        strategyId
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
            walletAddress
        }
        userId
    }
}
`;
export const REMOVE_COLLABORATOR = gql`
mutation removeCollaborator($input: RemoveCollaboratorInput!){
    removeCollaborator(input: $input){
        createdAt
        id
        roleType
        strategyId
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
            walletAddress
        }
        userId
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
            walletAddress
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
export const CREATE_API = gql`
mutation createApi($input: CreateApiInput!){
    createApi(input: $input){
        createdAt
        exchange
        id
        isSimulated
        name
        passphrase
        updatedAt
        userId
    }
}
`;
export const ADD_API = gql`
mutation addApi($input: AddApiInput!){
    addApi(input: $input){
        createdAt
        exchange
        id
        isSimulated
        name
        passphrase
        updatedAt
        userId
    }
}
`;
export const DELETE_API = gql`
mutation deleteApi($input: DeleteApiInput!){
    deleteApi(input: $input)
}
`;
export const UPDATE_API = gql`
mutation updateApi($input: UpdateApiInput!){
    updateApi(input: $input){
        createdAt
        exchange
        id
        isSimulated
        name
        passphrase
        updatedAt
        userId
    }
}
`;
export const MODIFY_API = gql`
mutation modifyApi($input: ModifyApiInput!){
    modifyApi(input: $input){
        createdAt
        exchange
        id
        isSimulated
        name
        passphrase
        updatedAt
        userId
    }
}
`;
export const REMOVE_API = gql`
mutation removeApi($input: RemoveApiInput!){
    removeApi(input: $input)
}
`;
export const ADD_STRATEGY = gql`
mutation addStrategy($input: AddStrategyInput!){
    addStrategy(input: $input){
        collaborators{
            createdAt
            id
            roleType
            strategyId
            updatedAt
            userId
        }
        config
        createdAt
        devBotId
        docs
        enableStopPassword
        enableTrade
        enableUI
        id
        intro
        isLazyStart
        isPublic
        name
        paramsSchema
        slug
        token
        tradeTypes
        updatedAt
        usedCount
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
            walletAddress
        }
        userId
    }
}
`;
export const UPDATE_STRATEGY = gql`
mutation updateStrategy($input: UpdateStrategyInput!){
    updateStrategy(input: $input){
        collaborators{
            createdAt
            id
            roleType
            strategyId
            updatedAt
            userId
        }
        config
        createdAt
        devBotId
        docs
        enableStopPassword
        enableTrade
        enableUI
        id
        intro
        isLazyStart
        isPublic
        name
        paramsSchema
        slug
        token
        tradeTypes
        updatedAt
        usedCount
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
            walletAddress
        }
        userId
    }
}
`;
export const MODIFY_STRATEGY = gql`
mutation modifyStrategy($input: ModifyStrategyInput!){
    modifyStrategy(input: $input)
}
`;
export const SYNC_STRATEGY = gql`
mutation syncStrategy($input: SyncStrategyInput!){
    syncStrategy(input: $input)
}
`;
export const REMOVE_STRATEGY = gql`
mutation removeStrategy($input: RemoveStrategyInput!){
    removeStrategy(input: $input)
}
`;
export const REGENERATE_STRATEGY_TOKEN = gql`
mutation regenerateStrategyToken($input: RegenerateStrategyTokenInput!){
    regenerateStrategyToken(input: $input)
}
`;
export const RUN_BACKTEST = gql`
mutation runBacktest($input: RunBacktestInput!){
    runBacktest(input: $input)
}
`;
export const STOP_BACKTEST = gql`
mutation stopBacktest($input: StopBacktestInput!){
    stopBacktest(input: $input)
}
`;
export const PUBLISH_BOT_EVENT = gql`
mutation publishBotEvent($input: PublishBotEventInput!){
    publishBotEvent(input: $input)
}
`;
export const ADD_BOT = gql`
mutation addBot($input: AddBotInput!){
    addBot(input: $input){
        apiId
        apiKey
        backtestBotParams
        backtestParams
        backtestStatus
        createdAt
        duration
        endTime
        id
        isPublic
        name
        params
        status
        storage
        strategy{
            config
            createdAt
            devBotId
            docs
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
        userId
    }
}
`;
export const DELETE_BOT = gql`
mutation deleteBot($input: DeleteBotInput!){
    deleteBot(input: $input)
}
`;
export const UPDATE_BOT = gql`
mutation updateBot($input: UpdateBotInput!){
    updateBot(input: $input){
        apiId
        apiKey
        backtestBotParams
        backtestParams
        backtestStatus
        createdAt
        duration
        endTime
        id
        isPublic
        name
        params
        status
        storage
        strategy{
            config
            createdAt
            devBotId
            docs
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
        userId
    }
}
`;
export const RUN_BOT = gql`
mutation runBot($input: RunBotInput!){
    runBot(input: $input)
}
`;
export const STOP_BOT = gql`
mutation stopBot($input: StopBotInput!){
    stopBot(input: $input)
}
`;
export const UPDATE_BOT_PARAMS = gql`
mutation updateBotParams($input: UpdateBotParamsInput!){
    updateBotParams(input: $input)
}
`;
export const UPDATE_BOT_NAME = gql`
mutation updateBotName($input: UpdateBotNameInput!){
    updateBotName(input: $input)
}
`;
export const REGENERATE_BOT_API_KEY = gql`
mutation regenerateBotApiKey($input: RegenerateBotApiKeyInput!){
    regenerateBotApiKey(input: $input)
}
`;
export const ADD_LOG = gql`
mutation addLog($input: AddLogInput!){
    addLog(input: $input){
        botId
        content
        createdAt
        id
        type
        updatedAt
    }
}
`;
export const CLEAR_LOGS = gql`
mutation clearLogs($botId: Float!){
    clearLogs(botId: $botId)
}
`;
export const CREATE_ORDER = gql`
mutation createOrder($input: CreateOrderInput!){
    createOrder(input: $input){
        botId
        clientOrderId
        commission
        commissionAsset
        createdAt
        id
        isBuyer
        isMaker
        operationType
        orderId
        price
        qty
        quoteQty
        realizedProfit
        side
        status
        symbol
        time
        type
        updatedAt
        userId
    }
}
`;
export const UPDATE_ORDER = gql`
mutation updateOrder($input: UpdateOrderInput!){
    updateOrder(input: $input){
        botId
        clientOrderId
        commission
        commissionAsset
        createdAt
        id
        isBuyer
        isMaker
        operationType
        orderId
        price
        qty
        quoteQty
        realizedProfit
        side
        status
        symbol
        time
        type
        updatedAt
        userId
    }
}
`;
export const UPDATE_MANY_ORDERS = gql`
mutation updateManyOrders($input: UpdateManyOrderInput!){
    updateManyOrders(input: $input)
}
`;
export const DELETE_MANY_ORDERS = gql`
mutation deleteManyOrders($input: DeleteOrderInput!){
    deleteManyOrders(input: $input)
}
`;
export const FUTURES_ORDER = gql`
mutation futuresOrder($input: FuturesOrderInput!){
    futuresOrder(input: $input)
}
`;
export const STORAGE_SET = gql`
mutation storageSet($input: StorageSetInput!){
    storageSet(input: $input)
}
`;
export const STORAGE_SET_ALL = gql`
mutation storageSetAll($input: StorageSetAllInput!){
    storageSetAll(input: $input)
}
`;
export const STORAGE_REMOVE = gql`
mutation storageRemove($input: StorageRemoveInput!){
    storageRemove(input: $input)
}
`;
export const STORAGE_CLEAR = gql`
mutation storageClear{
    storageClear
}
`;
export const SET_K_V = gql`
mutation setKV($input: SetKvInput!){
    setKV(input: $input)
}
`;
export const REMOVE_K_V = gql`
mutation removeKV($input: RemoveKvInput!){
    removeKV(input: $input)
}
`;
export const INCREASE_DURATION = gql`
mutation increaseDuration($input: IncreaseDurationInput!){
    increaseDuration(input: $input)
}
`;
export const MATCH_ORDER = gql`
mutation matchOrder($input: MatchOrderInput!){
    matchOrder(input: $input)
}
`;
export const REMOVE_RUNNER = gql`
mutation removeRunner($input: RemoveRunnerInput!){
    removeRunner(input: $input)
}
`;
export const REGISTER_RUNNER = gql`
mutation registerRunner($input: RegisterRunnerInput!){
    registerRunner(input: $input){
        createdAt
        heartbeatAt
        id
        machineHash
        machineIp
        name
        runnerType
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
            walletAddress
        }
        userId
    }
}
`;
export const UPDATE_RUNNER = gql`
mutation updateRunner($input: UpdateRunnerInput!){
    updateRunner(input: $input){
        createdAt
        heartbeatAt
        id
        machineHash
        machineIp
        name
        runnerType
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
            walletAddress
        }
        userId
    }
}
`;
export const ADD_RUNNER_STRATEGY = gql`
mutation addRunnerStrategy($input: AddRunnerStrategyInput!){
    addRunnerStrategy(input: $input){
        createdAt
        id
        runnerId
        strategy{
            config
            createdAt
            devBotId
            docs
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
    }
}
`;
export const REMOVE_RUNNER_STRATEGY = gql`
mutation removeRunnerStrategy($input: RemoveRunnerStrategyInput!){
    removeRunnerStrategy(input: $input){
        createdAt
        id
        runnerId
        strategy{
            config
            createdAt
            devBotId
            docs
            enableStopPassword
            enableTrade
            enableUI
            id
            intro
            isLazyStart
            isPublic
            name
            paramsSchema
            slug
            token
            tradeTypes
            updatedAt
            usedCount
            userId
        }
        strategyId
        updatedAt
    }
}
`;
export const UPDATE_RUNNER_HEARTBEAT = gql`
mutation updateRunnerHeartbeat($input: UpdateRunnerHeartbeatInput!){
    updateRunnerHeartbeat(input: $input){
        createdAt
        heartbeatAt
        id
        machineHash
        machineIp
        name
        runnerType
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
            walletAddress
        }
        userId
    }
}
`;
export const CREATE_VALIDATED_NOTIFIER = gql`
mutation createValidatedNotifier($input: CreateNotifierInput!){
    createValidatedNotifier(input: $input){
        code
        msg
    }
}
`;
export const UPDATE_VALIDATED_NOTIFIER = gql`
mutation updateValidatedNotifier($input: UpdateNotifierInput!){
    updateValidatedNotifier(input: $input){
        code
        msg
    }
}
`;
export const DELETE_NOTIFIER = gql`
mutation deleteNotifier($input: DeleteNotifierInput!){
    deleteNotifier(input: $input)
}
`;
export const FORGOT_PASSWORD = gql`
mutation forgotPassword($input: ForgotPasswordInput!){
    forgotPassword(input: $input)
}
`;
export const RESET_PASSWORD = gql`
mutation resetPassword($input: ResetPasswordInput!){
    resetPassword(input: $input)
}
`;
export const UPDATE_EMAIL = gql`
mutation updateEmail($input: UpdateEmailInput!){
    updateEmail(input: $input)
}
`;
export const DEPOSIT_BY_CODE = gql`
mutation depositByCode($input: DepositByCodeInput!){
    depositByCode(input: $input)
}
`;
export const CREATE_SPOT_ORDER = gql`
mutation createSpotOrder($input: SpotOrderInput!){
    createSpotOrder(input: $input)
}
`;
export const CLOSE_POSITION = gql`
mutation closePosition($botId: Float!){
    closePosition(botId: $botId)
}
`;
export const GENERATE_SET_STOP_PASSWORD_LINK = gql`
mutation generateSetStopPasswordLink($input: GenerateSetStopPasswordLinkInput!){
    generateSetStopPasswordLink(input: $input)
}
`;
export const GENERATE_BOT_STOP_BY_PASSWORD_LINK = gql`
mutation generateBotStopByPasswordLink($input: GenerateBotStopByPasswordLinkInput!){
    generateBotStopByPasswordLink(input: $input)
}
`;
export const SET_STOP_BOT_PASSWORD = gql`
mutation setStopBotPassword($input: SetStopBotPasswordInput!){
    setStopBotPassword(input: $input)
}
`;
export const STOP_BOT_BY_PASSWORD = gql`
mutation stopBotByPassword($input: StopBotByPasswordInput!){
    stopBotByPassword(input: $input)
}
`;
export const CREATE_EXIT_RULE = gql`
mutation createExitRule($input: CreateExitRuleInput!){
    createExitRule(input: $input){
        code
        createdAt
        id
        name
        type
        updatedAt
    }
}
`;
export const UPDATE_EXIT_RULE = gql`
mutation updateExitRule($input: UpdateExitRuleInput!){
    updateExitRule(input: $input){
        code
        createdAt
        id
        name
        type
        updatedAt
    }
}
`;
export const DELETE_EXIT_RULE = gql`
mutation deleteExitRule($input: DeleteExitRuleInput!){
    deleteExitRule(input: $input)
}
`;
export const CONFIRM_CLI_LOGIN = gql`
mutation confirmCliLogin($input: CliLoginInput!){
    confirmCliLogin(input: $input)
}
`;
export const LOGIN_BY_CLI = gql`
mutation loginByCli($input: LoginByCliInput!){
    loginByCli(input: $input){
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
            walletAddress
        }
        userId
        username
    }
}
`;
export const BACKTEST_STATUS_SUBSCRIPTION = gql`
subscription backtestStatusSubscription($botId: Float!){
    backtestStatusSubscription(botId: $botId)
}
`;
export const BACKTEST_RESULT_SUBSCRIPTION = gql`
subscription backtestResultSubscription($botId: Float!){
    backtestResultSubscription(botId: $botId){
        annualReturn
        buyAndHoldReturn
        candles{
            close
            closeTime
            high
            low
            open
            openTime
            period
            volume
        }
        chartConfig{
            bb
            candle
            ema
            kdj
            ma
            roc
            rsi
            volume
        }
        cumulativeReturn
        duration
        fee
        feeRatio
        logs{
            content
            createdAt
            type
        }
        maxDrawdown
        omegaRatio
        orders{
            botId
            clientOrderId
            commission
            commissionAsset
            createdAt
            id
            isBuyer
            isMaker
            operationType
            orderId
            price
            qty
            quoteQty
            realizedProfit
            side
            status
            symbol
            time
            type
            updatedAt
            userId
        }
        profit
        sharpeRatio
        sortino
        winRate
    }
}
`;
export const BOT_STORAGE_SUBSCRIPTION = gql`
subscription botStorageSubscription($botId: Float!){
    botStorageSubscription(botId: $botId)
}
`;
export const BOT_EVENT_SUBSCRIPTION = gql`
subscription botEventSubscription($botId: Float!){
    botEventSubscription(botId: $botId){
        data
        eventName
    }
}
`;
export const SYMBOL_PRICE_SUBSCRIPTION = gql`
subscription symbolPriceSubscription{
    symbolPriceSubscription
}
`;
export const ADD_LOG_SUBSCRIPTION = gql`
subscription addLogSubscription($botId: Float!){
    addLogSubscription(botId: $botId){
        botId
        content
        createdAt
        id
        type
        updatedAt
    }
}
`;
export const ORDERBOOKS_SUBSCRIPTION = gql`
subscription orderbooksSubscription($symbol: String!, $type: String!){
    orderbooksSubscription(symbol: $symbol, type: $type){
        p
        q
        s
    }
}
`;
export const TRADES_SUBSCRIPTION = gql`
subscription tradesSubscription($symbol: String!, $type: String!){
    tradesSubscription(symbol: $symbol, type: $type){
        aggId
        isBuyerMaker
        price
        quantity
        timestamp
    }
}
`;
