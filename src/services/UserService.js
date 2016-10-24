import axios from 'axios';

class UserService {
	constructor () {
		this.axios = axios;
		this.apiDomain = `ec2-54-163-104-129.compute-1.amazonaws.com:8080`;
	}

	getPatientList (payload) {
		const url = `http://${this.apiDomain}/api/patientList:id?id=abc`;
		return this.axios(url, payload.data);
	}

  createPatient (payload) {
    const url = `http://${this.apiDomain}/api/patients/create`;
    return this.axios.post(url, payload.data);
  }

  getPatientDetail (payload) {
    const url = `http://${this.apiDomain}/api/patients/collect:id`;
    return this.axios.get(url, { params: payload });
  }
}

export default UserService;
