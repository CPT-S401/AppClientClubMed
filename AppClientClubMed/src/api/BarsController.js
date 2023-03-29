import axios from "axios";
import ControllerManager from "./ControllerManager";

class BarsController extends ControllerManager {
    constructor() {
        super();
        this.name = "Bars";
    }

    GetByName(name) {
        return axios.get(`${ControllerManager.baseURL}/${this.name}/GetByName/${name}`);
    }

    GetBarsByClub(id){
        return axios.get(`${ControllerManager.baseURL}/${this.name}/getbarsbyclub/${id}`);
    }
}

export default new BarsController();