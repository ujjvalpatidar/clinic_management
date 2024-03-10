import { combineReducers } from "redux";
import { DocLogInReducer, clinicListReducer,updateReceptionReducer,donePatientReducer,pendingPatientReducer} from "./Reducers";
const combReducer = combineReducers({
  DocLogIn:DocLogInReducer,
  clinicList:clinicListReducer,
  updateReception:updateReceptionReducer,
  donePatient:donePatientReducer,
  pendngPatient:pendingPatientReducer,
  });
  export default combReducer;