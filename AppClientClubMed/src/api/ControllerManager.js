import axios from 'axios';

class ControllerManager {
    static baseURL = "https://apiclubmeds401.azurewebsites.net/api";
    name;

    constructor() {}

    set name(value) {
        this.name = value;
    }

    get name() {
        return this.name;
    }

    GetAll() {
        return axios.get(`${ControllerManager.baseURL}/${this.name}`);  
    }

    GetById(id) {
        return axios.get(`${ControllerManager.baseURL}/${this.name}/GetById/${id}`);
    }

    GetByClub(id) {
        return axios.get(`${ControllerManager.baseURL}/${this.name}/Get${this.name}ByClub/${id}`);
    }

    Post(data) {
        return axios.post(`${ControllerManager.baseURL}/${this.name}`, data);
    }

    Put(id, data) {
        return axios.put(`${ControllerManager.baseURL}/${this.name}/${id}`, data);
    }

    Delete(id) {
        return axios.delete(`${ControllerManager.baseURL}/${this.name}/${id}`);
    }
}

export default ControllerManager;