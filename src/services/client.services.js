import env from "../config/env.js";
import db from "../db/db.js";

const table = `${env.prefix}client`;

class ClientServices {
  static async getUsers() {
    try {
      const text = `SELECT * FROM ${table}`;
      const item = await db.query(text);

      return { item };
    } catch (error) {
      throw error;
    }
  }

  static async getUserByEmail(email) {
    try {
      const text = `SELECT * FROM ${table} WHERE email = '${email}'`;
      const item = await db.query(text);

      return { item };
    } catch (error) {
      throw error;
    }
  }

  static async createUser({
    typeDocument,
    numberDocument,
    firstname,
    lastname,
    phone,
    email,
  }) {
    try {
      const timeNow = this.timeServer();

      const text = `INSERT INTO ${table} (doc_type, doc_number, first_name, last_name, phone, email, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
      const values = [
        typeDocument,
        numberDocument,
        firstname,
        lastname,
        phone,
        email,
        timeNow,
      ];

      const insertUser = await db.query(text, values);

      return { user: insertUser };
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, data) {
    try {
      const {
        typeDocument,
        numberDocument,
        firstname,
        lastname,
        phone,
        email,
      } = data;

      const timeNow = this.timeServer();
      let setValues = [
        typeDocument && `doc_type = ${typeDocument}`,
        numberDocument && `doc_number = '${numberDocument}'`,
        firstname && `first_name = '${firstname}'`,
        lastname && `last_name = '${lastname}'`,
        phone && `phone = ${phone}`,
        email && `email = '${email}'`,
        `upd_datetime = '${timeNow}'`,
      ].filter((element) => element).join(",");

      const text = `UPDATE ${table} SET ${setValues} WHERE client_id = ${id}`;
      const updateUser = await db.query( text );

      return { result: updateUser };
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const text = `DELETE FROM ${table} WHERE client_id = ${id}`
      const deleteUser = await db.query(text);
      return { item: { modified: deleteUser } }
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

export default ClientServices