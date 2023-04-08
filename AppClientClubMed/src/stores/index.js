import api from '@/api';
import { defineStore } from 'pinia';

const controllers = defineStore( 'controllers', () => {
    const ClubController = api.ClubController;
    const ClientController = api.ClientController;
    const ActivitesController = api.ActivitesController;
    const BarsController = api.BarsController;
    const CaracteristiquesController = api.CaracteristiquesController;
    const DomaineSkiableController = api.DomaineSkiableController;
    const RestaurantsController = api.RestaurantsController;
    return { ClubController, ClientController, ActivitesController, BarsController, CaracteristiquesController, DomaineSkiableController, RestaurantsController };
});

export { controllers };