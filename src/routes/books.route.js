import { Router } from 'express';
import { getBooks, getBookById, getBookByISBN, createBook, updateBook, deleteBook } from '../controllers/book.controller.js';
const booksRouter = Router();

booksRouter.get('/', getBooks);
booksRouter.get('/:id', getBookById);
booksRouter.get('/isbn/:isbn', getBookByISBN);

booksRouter.post('/create', createBook);
booksRouter.patch('/:id', updateBook);
booksRouter.delete('/:id', deleteBook);


export { booksRouter };