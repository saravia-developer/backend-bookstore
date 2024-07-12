import env from "../config/env.js";
import db from "../db/db.js";

const table = `${env.prefix}order`;

class OrderServices {
  static async getOrders() {
    try {
      const text = `SELECT * FROM ${table}`;
      const item = await db.query(text);

      return { item };
    } catch (error) {
      throw error;
    }
  }

  static async createOrder({
    clientId,
    total,
    typeDocument,
    numberDocument
  }) {
    try {
      const timeNow = this.timeServer();

      const text = `INSERT INTO ${table} (client_id, total, doc_type, doc_number, created_at) VALUES ($1, $2, $3, $4, $5)`;
      const values = [
        clientId,
        total,
        typeDocument,
        numberDocument,
        timeNow
      ];

      const insertOrder = await db.query(text, values);

      return { order: insertOrder };
    } catch (error) {
      throw error;
    }
  }

  static async updateOrder(id, data) {
    try {
      const {
        clientId,
        total,
        typeDocument,
        numberDocument
      } = data;

      const timeNow = this.timeServer();
      let setValues = [
        clientId && `client_id = ${clientId}`,
        total && `total = ${total}`,
        typeDocument && `doc_type = ${typeDocument}`,
        numberDocument && `doc_number = '${numberDocument}'`
        `upd_datetime = '${timeNow}'`,
      ].filter((element) => element).join(",");

      const text = `UPDATE ${table} SET ${setValues} WHERE order_id = ${id}`;
      const updateOrder = await db.query( text );

      return { result: updateOrder };
    } catch (error) {
      throw error;
    }
  }

  static async deleteOrder(id) {
    try {
      const text = `DELETE FROM ${table} WHERE order_id = ${id}`
      const deleteOrder = await db.query(text);
      return { item: { modified: deleteOrder } }
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

export default OrderServices