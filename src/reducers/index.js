const reducer = (state, action) => {
    switch (action.type) {
        case "GET_ORDERS":
            return {
                ...state,
                thisDate: action.payload.thisDate,
                orders: action.payload.orders,
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.payload.status
            }
        case "SET_THISDATE":
            return {
                ...state,
                thisDate: action.payload.thisDate,
            }
        case "ADD_ORDER":
            return {
                ...state,
                orders: [
                    action.payload.newOrder,
                    ...state.orders,
                ]
            }
        default:
           return state;
    }
}

export default reducer;