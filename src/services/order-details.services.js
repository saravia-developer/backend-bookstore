import env from "../config/env.js";
import db from "../db/db.js";

const table = `${env.prefix}order_detail`;

class OrderDetailsServices {
  static async getOrderDetails() {
    try {
      const text = `SELECT * FROM ${table}`;
      const item = await db.query(text);

      return { item };
    } catch (error) {
      throw error;
    }
  }

  static async createOrderDetails({
    orderId,
    bookId,
    detailPrice, 
    quantity
  }) {
    try {
      const timeNow = this.timeServer();

      const text = `INSERT INTO ${table} (order_id, book_id, detail_price, quantity, created_at) VALUES ($1, $2, $3, $4, $5)`;
      const values = [
        orderId,
        bookId,
        detailPrice, 
        quantity,
        timeNow
      ];

      const insertOrderDetails = await db.query(text, values);

      return { result: insertOrderDetails };
    } catch (error) {
      throw error;
    }
  }

  static async updateOrderDetails(id, data) {
    try {
      const {
        orderId,
        bookId,
        detailPrice, 
        quantity
      } = data;

      const timeNow = this.timeServer();
      let setValues = [
        orderId && `order_id = ${orderId}`,
        bookId && `book_id = ${bookId}`,
        detailPrice && `detail_price = ${detailPrice}`, 
        quantity && `quantity = ${quantity}`,
        `upd_datetime = '${timeNow}'`,
      ].filter((element) => element).join(",");

      const text = `UPDATE ${table} SET ${setValues} WHERE order_detail_id = ${id}`;
      const updateOrderDetails = await db.query( text );

      return { result: updateOrderDetails };
    } catch (error) {
      throw error;
    }
  }

  static async deleteOrderDetails(id) {
    try {
      const text = `DELETE FROM ${table} WHERE order_detail_id = ${id}`
      const deleteOrderDetails = await db.query(text);
      return { item: { modified: deleteOrderDetails } }
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

export default OrderDetailsServices