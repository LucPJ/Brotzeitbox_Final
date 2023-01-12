import Router from 'express';
import { lebensmittelListe, createLebensmittelListe, deleteLebensmittel, getLebensmittel, updateLabensmittel } from '../controller/lebensmittelController.js';

export const lebensmittelRouter = Router();

lebensmittelRouter
    .route('/')
    .get(lebensmittelListe)
    .post(createLebensmittelListe)

lebensmittelRouter
    .route('/:id')
    .get(getLebensmittel)
    .put(updateLabensmittel)
    .delete(deleteLebensmittel)