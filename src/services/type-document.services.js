import env from '../config/env.js';
import db from '../db/db.js';

const table = `${env.prefix}type_document`

class TypeDocumentServices {
  static async getTypeDocuments() {
    try {
      const text = `SELECT * FROM ${table}`;
      const item = await db.query(text);

      return { item };
    } catch (error) {
      throw error;
    }
  }
}

export default TypeDocumentServices