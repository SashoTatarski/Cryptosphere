import { MODAL_HIDE, MODAL_SHOW } from './modalTypes';

const initialState = {
  isVisible: false,
  title: ''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        isVisible: true,
        title: action.payload
      };
    case MODAL_HIDE:
      return {
        ...state,
        isVisible: false,
        title: ''
      };
    default:
      return state;
  }
};

export default reducer;
