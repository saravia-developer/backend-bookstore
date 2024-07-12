import express from 'express';
import { clientRouter } from './routes/client.route.js';
import { booksRouter } from './routes/books.route.js';
import { orderRouter } from './routes/order.route.js';
import { orderDetailsRouter } from './routes/order-details.route.js';
import { typeDocumentRouter } from './routes/type-document.route.js';
import { TypePaymentVoucherRouter } from './routes/type-payment-voucher.route.js';

import { errorHandler } from './lib/error-handler.js';
import cors from 'cors';

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());


app.use('/user', clientRouter);
app.use('/book', booksRouter);
app.use('/order', orderRouter);
app.use('/order-details', orderDetailsRouter);
app.use('/type-documents', typeDocumentRouter);
app.use('/type-payment-voucher', TypePaymentVoucherRouter);
app.use(errorHandler);

app.get('/health', (req, res, next) => {
  res.send('Aplicación funcionando')
})


export default app;