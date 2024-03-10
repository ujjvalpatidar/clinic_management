import { ActionTypes } from "../constants/Action-Types";

export const setDocLogIn = (user) => {
    return {
      type: ActionTypes.USER_LOGIN,
      payload: user,
    };
  };

  export const setClinicList = (data) => {
    return {
      type: ActionTypes.CLINIC_LIST,
      payload:data,
    };
  };
  export const setUpdateReception = (items) => {
    return {
      type: ActionTypes.UPDATE_RECEPTION,
      payload:items,
    };
  };
  export const setPatientDone = (items) => {
    return {
      type: ActionTypes.DONE_PATIENT,
      payload:items,
    };
  };
  export const setPatientUndo = (items) => {
    return {
      type: ActionTypes.UNDO_PATIENT,
      payload:items,
    };
  };
