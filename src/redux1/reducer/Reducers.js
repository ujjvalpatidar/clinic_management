import { ActionTypes } from "../constants/Action-Types";
const intialState = {
    user_info: {},
    clinic_list:[],
    Update_reception:{},
    complete_patient:[],
    pending_patient:[],

  };
  export const DocLogInReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.USER_LOGIN:
        return { ...state, user_info: payload };
      default:
        return state;
    }
  };

  export const clinicListReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.CLINIC_LIST:
        return { ...state, clinic_list: payload };
      default:
        return state;
    }
  };
  export const updateReceptionReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.UPDATE_RECEPTION:
        return { ...state, Update_reception: payload };
      default:
        return state;
    }
  };
  export const donePatientReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.DONE_PATIENT:
        return { ...state,  complete_patient:[...state.complete_patient,payload] };
      default:
        return state;
    }
  };
  export const pendingPatientReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.UNDO_PATIENT:
        return { ...state,     pending_patient:[...state.pending_patient,payload] };
      default:
        return state;
    }
  };

 