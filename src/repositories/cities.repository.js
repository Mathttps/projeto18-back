import { db } from "../database/db.connection.js";

export function pegarCidades() {

    const result = db.query(`SELECT * FROM cidades;`);
    return result;
}