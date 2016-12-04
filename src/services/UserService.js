import axios from 'axios';

class UserService{
  constructor(){
    this.axios = axios;
    this.apiDomain = `localhost:3000`;
  }

  login (payload) {
  const url = `http://${this.apiDomain}/login`;
  return axios.post(url, payload.data );
}

  getPatientList(payload){
    const url = `http://${this.apiDomain}/api/patientList:id:doc`;
    return this.axios.get(url, {params: payload});
  }

  getPatientDetail(payload){
    const url = `http://${this.apiDomain}/api/patients/collect:id`;
    return this.axios.get(url, {params: payload});
  }

  getMessages(payload){
    const url = `http://${this.apiDomain}/api/messages`;
    return axios.post(url, payload.data);
  }

  sendMessage(payload){
    const url = `http://${this.apiDomain}/api/messages/id`;
    return axios.post(url, payload);
  }

}

export default UserService;
