import produce from "immer";
import { OPEN_MODAL, CLOSE_MODAL } from "../actionTypes/modal";

const initialState = {
  currentlyOpenModal: "",
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case OPEN_MODAL:
        draftState.currentlyOpenModal = payload.modalName;
        break;
      case CLOSE_MODAL:
        draftState.currentlyOpenModal = null;
        break;
      default:
        break;
    }
  });
