import { Router } from 'express';
import { getTypeDocument } from '../controllers/type-document.controller.js';
const typeDocumentRouter = Router();

typeDocumentRouter.get('/', getTypeDocument);

export { typeDocumentRouter };