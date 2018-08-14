import { SHOW_MODAL, HIDE_MODAL } from "../constants";

const initialState = {
    modalType: null,
    modalProps: null
};

const actionsMap = {
    [SHOW_MODAL]: (state, action) => ({
        modalType: action.modalType,
        modalProps: action.modalProps
    }),
    [HIDE_MODAL]: () => initialState
};

export default (state = initialState, action) => {
    const handler = actionsMap[action.type];

    return handler ? handler(state, action) : state;
};
