import * as mysql from 'mysql';
import { IConnection } from 'mysql';

export class ConnectionUtil {
    private connection:IConnection;
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'admin',
            password: 'simplon',
            database: 'first_db'
        });
    }

    getConnection():IConnection {
        this.connection.connect();
        return this.connection;
    }

    closeConnection() {
        this.connection.end();
    }
}