import axios from "axios";
import ControllerManager from "./ControllerManager";

class RestaurantsController extends ControllerManager {
    constructor() {
        super();
        this.name = "Restaurants";
    }

    GetByName(name) {
        return axios.get(`${ControllerManager.baseURL}/${this.name}/ByName/${name}`);
    }
}

export default new RestaurantsController();