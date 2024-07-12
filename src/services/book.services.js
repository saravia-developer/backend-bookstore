import env from "../config/env.js";
import db from "../db/db.js";

const table = `${env.prefix}book`;

class BookServices {
  static async getBooks() {
    try {
      const text = `SELECT isbn, name, current_price, image FROM ${table}`;
      const item = await db.query(text);

      return { item };
    } catch (error) {
      throw error;
    }
  }

  static async getBookById(id) {
    try {
      const text = `SELECT isbn, name, current_price, image FROM ${table} WHERE book_id = ${id}`;
      const item = await db.query(text);

      return { item };
    } catch (error) {
      throw error;
    }
  }

  static async getBookByISBN(number) {
    try {
      const text = `SELECT isbn, name, current_price, image FROM ${table} WHERE isbn = ${number}`;
      const item = await db.query(text);

      return { item };
    } catch (error) {
      throw error;
    }
  }

  static async createBook({
    isbn,
    name,
    price,
    image
  }) {
    try {
      const timeNow = this.timeServer();

      const text = `INSERT INTO ${table} (isbn, name, current_price, image, created_at) VALUES ($1, $2, $3, $4, $5)`;
      const values = [
        isbn,
        name,
        price,
        image,
        timeNow
      ];

      const insertBook = await db.query(text, values);

      return { book: insertBook };
    } catch (error) {
      throw error;
    }
  }

  static async updateBook(id, data) {
    try {
      const {
        isbn,
        name,
        price,
        image
      } = data;

      const timeNow = this.timeServer();
      let setValues = [
        isbn && `isbn = ${isbn}`,
        name && `name = '${name}'`,
        price && `current_price = ${price}`,
        image && `image = ${image}`,
        `upd_datetime = '${timeNow}'`,
      ].filter((element) => element).join(",");

      const text = `UPDATE ${table} SET ${setValues} WHERE book_id = ${id}`;
      const updateBook = await db.query( text );

      return { result: updateBook };
    } catch (error) {
      throw error;
    }
  }

  static async deleteBook(id) {
    try {
      const text = `DELETE FROM ${table} WHERE book_id = ${id}`
      const deleteBook = await db.query(text);
      return { item: { modified: deleteBook } }
    } catch (error) {
      throw error
    }
  }

  static timeServer() {
    let dateNow = new Date().toISOString().substring(0, 19);
    dateNow = dateNow.split("T").join(" ");
    return dateNow;
  }
}

export default BookServices