import axios from "axios";


class ApiStore {

    PostAPiCall(url, data) {
        return axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    PostCall(url, data, token) {
        return axios.post(url, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    GetApiCall(url, token) {
        return axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    PutApiCall(url, data, token) {
        return axios.put(url, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
    PutCall(url,token) {
        return axios.put(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }

    DeleApiCall(url, token) {
        return axios.delete(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
}

const SERVER = "http://tutorials.codebetter.in:3000"

export const Apiurls = {

    REGISTER_API: `${SERVER}/auth/doctor/save`,
    LOGIN: `${SERVER}/auth/login`,

    RECEPTION_SAVE: `${SERVER}/api/reception/save`,
    RECEPTION_LIST: `${SERVER}/api/reception/lists`,
    RECEPTION_DELETE: `${SERVER}/api/reception/delete/`,
    PATIENT_LIST: `${SERVER}/api/patient/list`,
    APPOINTMENT_LIST: `${SERVER}/api/patient/lists`,
    NEW_APPOINTMENT: `${SERVER}/api/patient/addpatient`,
    PATIENT_UPDATE: `${SERVER}/api/patient/update/`,
    PATIENT_DELETE: `${SERVER}/api/patient/delete/`,
APPOINTMENT_DONE:`${SERVER}/api/patient/done/`,
APPOINTMENT_UNDU:`${SERVER}/api/patient/undo/`

}

export default new ApiStore();