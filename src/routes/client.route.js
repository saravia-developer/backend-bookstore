import { Router } from 'express';
import { getClients, createClient, updateClient, deleteClient, getClientByEmail } from '../controllers/client.controller.js';
const clientRouter = Router();

clientRouter.get('/', getClients);
clientRouter.get('/by-email', getClientByEmail);
clientRouter.post('/create', createClient);
clientRouter.patch('/:id', updateClient);
clientRouter.delete('/:id', deleteClient);


export { clientRouter };