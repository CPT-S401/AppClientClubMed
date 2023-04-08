import axios from "axios";
import ControllerManager from "./ControllerManager";

class CaracteristiquesController extends ControllerManager {
    constructor() {
        super();
        this.name = "Caracteristiques";
    }

    GetByName(name) {
        return axios.get(`${ControllerManager.baseURL}/${this.name}/GetByName/${name}`);
    }
}

export default new CaracteristiquesController();