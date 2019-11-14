
export const ITEMS_SUCCESS = "ITEMS_SUCCESS";
export const ITEMS_REQUEST = "ITEMS_REQUEST";
export const ITEMS_FAILURE = "ITEMS_FAILURE";
export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVED = "ITEM_REMOVED";
export const USER_UPDATE = "USER_UPDATE";

/*const USER_SUCCESS = "USER_SUCCESS";
const USER_REQUEST = "USER_REQUEST";
const USER_FAILURE = "USER_FAILURE";
*/

export const getItems = () => (dispatch, getState) => {
    if(getState().items.length > 0) return null;

    dispatch(itemsRequest());
    return fetch("/api/v1/items")
        .then(res => {
            return res.json();
        })
        .then(items => {
            dispatch(itemsSuccess(items));
        })
        .catch(err => {
            console.log("configureStore err", err);
            dispatch(itemsFailure());
        });
};

export const itemsSuccess = () => ({
    type: ITEMS_SUCCESS,
    payload: items,
});

export const itemsFailure = () => ({
    type: ITEMS_FAILURE
});

export const removeItem = (_id) => ({
    type: ITEM_REMOVED,
    payload: _id,
});

export const addItem = (item) => ({
    type: ITEM_ADDED,
    payload: item,
});

export const userUpdate = (user) => ({
    type: USER_UPDATE,
    payload: user
});