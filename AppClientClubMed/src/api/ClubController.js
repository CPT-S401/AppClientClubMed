import axios from "axios";
import ControllerManager from "./ControllerManager";

class ClubController extends ControllerManager {
    constructor() {
        super();
        this.name = "clubs";
    }

    GetByName(name) {
        return axios.get(`${ControllerManager.baseURL}/${this.name}/GetByName/${name}`);
    }
}

export default new ClubController();