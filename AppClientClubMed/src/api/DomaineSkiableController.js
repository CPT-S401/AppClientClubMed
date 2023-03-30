import axios from "axios";
import ControllerManager from "./ControllerManager";

class DomaineSkiableController extends ControllerManager {
    constructor() {
        super();
        this.name = "Activites";
    }

    GetByName(name) {
        return axios.get(`${ControllerManager.baseURL}/${this.name}/GetByName/${name}`);
    }
}

export default new DomaineSkiableController();