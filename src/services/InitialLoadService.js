import axios from 'axios';

class InitialLoadService {
	constructor () {
		this.apiDomain = `ec2-54-163-104-129.compute-1.amazonaws.com:8080`
	}

	getPatientList (payload) {
		const url = `http://${this.apiDomain}/api/patientList:id`;
		return axios.get(url, { params: payload });
	}
}

export default InitialLoadService;
