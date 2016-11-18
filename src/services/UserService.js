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
    const url = `http://${this.apiDomain}/api/patients/create`;
    return this.axios.post(url, payload);
  }

  getPatientDetail (payload) {
    const url = `http://${this.apiDomain}/api/patients/collect:id:token`;
    return this.axios.get(url, { params: payload });
  }

  toggleFlag (payload) {
    const url = `http://${this.apiDomain}/api/patients/flag`;
    return this.axios.post(url, payload);
  }

  sendMessage (payload) {
    const url = `http://${this.apiDomain}/api/messages/id`;
    return this.axios.post(url, payload);
  }

  getMessages (payload) {
    const url = `http://${this.apiDomain}/api/messages`;
    return this.axios.post(url, payload);
  }
}

export default UserService;
