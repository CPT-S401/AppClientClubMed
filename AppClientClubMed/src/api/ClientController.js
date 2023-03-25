import axios from "axios";
import ControllerManager from "./ControllerManager";

class ClientController extends ControllerManager {
    constructor() {
        super();
        this.name = "client";
    }

    GetByName(name) {
        return axios.get(`${ControllerManager.baseURL}/${this.name}/ByName/${name}`);
    }
}

export default new ClientController();