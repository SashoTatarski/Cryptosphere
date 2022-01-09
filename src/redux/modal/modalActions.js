import { MODAL_HIDE, MODAL_SHOW } from './modalTypes';

export const hideModal = () => {
  return {
    type: MODAL_HIDE
  };
};

export const showModal = (title) => {
  return {
    type: MODAL_SHOW,
    payload: title
  };
};
