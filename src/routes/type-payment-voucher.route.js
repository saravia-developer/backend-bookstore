import { Router } from 'express';
import { getTypePaymentVoucher } from '../controllers/type-payment-voucher.controller.js';
const TypePaymentVoucherRouter = Router();

TypePaymentVoucherRouter.get('/', getTypePaymentVoucher);


export { TypePaymentVoucherRouter };