import api from '@/api';
import { defineStore } from 'pinia';

const controllers = defineStore( 'controllers', () => {
    const ClubController = api.ClubController;
    const ClientController = api.ClientController;
    const ActivitiesController = api.ActivitiesController;
    const BarsController = api.BarsController;
    return { ClubController, ClientController, ActivitiesController, BarsController };
});

export { controllers };