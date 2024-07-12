import { Router } from 'express';
import { getOrders, createOrder, updateOrder, deleteOrder } from '../controllers/order.controller.js';
const orderRouter = Router();

orderRouter.get('/', getOrders);
orderRouter.post('/create', createOrder);
orderRouter.patch('/:id', updateOrder);
orderRouter.delete('/:id', deleteOrder);


export { orderRouter };