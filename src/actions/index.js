import Cookie from "js-cookie";

export const getOrdersByDate = payload => {
    return dispatch => {

        dispatch(setStatus({status: "loading"}));
        dispatch(setThisDate({thisDate: payload.dateString}));
        
        const bearer = Cookie.get("auth-token");
        const endpoint = `${process.env.REACT_APP_API_ENDPOINT}orders?date=${payload.dateString}`;
        fetch(endpoint, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearer}`,
            },
        })
            .then(response => response.json())
            .then(response => {
                dispatch(setStatus({status: "done"}));
                dispatch(getOrders({
                    thisDate: payload.dateString,
                    orders: response.data
                }));
                return 
            })
            .catch(error => {
                console.warn(error);
                dispatch(setStatus({status: "error"}));
                dispatch(getOrders([]));
                return 
            });
    };
};

export const getOrders = payload => ({
    type: "GET_ORDERS",
    payload,
});

export const setStatus = payload => ({
    type: "SET_STATUS",
    payload,
});

export const setThisDate = payload => ({
    type: "SET_THISDATE",
    payload,
});

export const addOrder = payload => ({
    type: "ADD_ORDER",
    payload,
})
