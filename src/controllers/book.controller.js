import BookServices from "../services/book.services.js";

const getBooks = async (req, res, next) => {
  try {
    const result = await BookServices.getBooks();
    res.json({success: true, result})
  } catch (error) {
    next(error)
    // throw error
  }
}

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await BookServices.getBookById(id);
    res.json({success: true, result})
  } catch (error) {
    next(error)
    // throw error
  }
}

const getBookByISBN = async (req, res, next) => {
  try {
    const { isbn } = req.params
    const result = await BookServices.getBookByISBN(isbn);
    res.json({success: true, result})
  } catch (error) {
    next(error)
    // throw error
  }
}

const createBook = async (req, res, next) => {
  try {
    
    const {
      isbn,
      name,
      price,
      image
    } = req.body;
  
    const insertBook = await BookServices.createBook({
      isbn,
      name,
      price,
      image
    });

    res.json({ success: true, message: 'Libro creado', response: insertBook });

  } catch (error) {
    // next(error)
    throw error
  }
}

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateBook = await BookServices.updateBook(id, req.body);

    res.json({ success: true, message: 'Libro actualizado', affectedRow: updateBook })
  } catch (error) {
    // next(error)
    throw error
  }
}

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteBook = await BookServices.deleteBook(id);

    res.json({ success: true, message: 'Libro eliminado', deleteBook })
  } catch (error) {
    // next(error)
    throw error
  }
}

export { 
  getBooks, 
  getBookById, 
  getBookByISBN, 
  createBook, 
  updateBook, 
  deleteBook 
}