import axios from 'axios';

class UserService {
	constructor () {
		this.axios = axios;
		this.apiDomain = `localhost:3000`;
	}

  login (payload) {
    const url = `http://${this.apiDomain}/login`;
    return axios.post(url, payload.data );
  }

  getPatientList (payload) {
    const url = `http://${this.apiDomain}/api/patientList:id:doc:token`;
    return axios.get(url, { params: payload });
  }

  createPatient (payload) {
    const url = `http://${this.apiDomain}/api/patients/create:token`;
    return this.axios.post(url, payload.data);
  }

  getPatientDetail (payload) {
    const url = `http://${this.apiDomain}/api/patients/collect:id:token`;
    return this.axios.get(url, { params: payload });
  }
}

export default UserService;
