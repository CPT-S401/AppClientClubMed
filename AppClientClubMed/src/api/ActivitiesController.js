import axios from "axios";
import ControllerManager from "./ControllerManager";

class ActivitiesController extends ControllerManager {
    constructor() {
        super();
        this.name = "Activites";
    }

    GetByName(name) {
        return axios.get(`${ControllerManager.baseURL}/${this.name}/GetByName/${name}`);
    }

    GetActivitiesByClub(id){
        return axios.get(`${ControllerManager.baseURL}/${this.name}/getactivitiesbyclub/${id}`);
    }
}

export default new ActivitiesController();