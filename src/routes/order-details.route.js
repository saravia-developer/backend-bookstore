import { Router } from 'express';
import { getOrderDetails, createOrderDetails, updateOrderDetails, deleteOrderDetails } from '../controllers/order-details.controller.js';
const orderDetailsRouter = Router();

orderDetailsRouter.get('/', getOrderDetails);
orderDetailsRouter.post('/create', createOrderDetails);
orderDetailsRouter.patch('/:id', updateOrderDetails);
orderDetailsRouter.delete('/:id', deleteOrderDetails);


export { orderDetailsRouter };