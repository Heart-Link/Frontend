import axios from 'axios';

class UserService {
	construcotr () {
		this.axios = axios;
		this.apiDomain = `ec2-54-163-104-129.compute-1.amazonaws.com:8080`
	}

	getPatientList (payload) {
		const url = `http://${this.apiDomain}/api/patientList:id?id=abc`;
		return this.axios(url, payload.data);
	}
}

export default UserService;
