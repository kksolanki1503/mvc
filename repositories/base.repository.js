const { getMongoConnection } = require("../config/mongo.config");
const { MONGO_URI_LOCAL } = require("../config/server.config");

class todoRespository {
  constructor(url) {
    this.conn = null;
    this.TodoCollection = null;
    this._connInit(url);
  }

  _connInit(url) {
    getMongoConnection(url).then((conn) => {
      this.conn = conn;
      this.TodoCollection = this.conn.db.collection("todos");
    });
  }

  async getAll() {
    return await this.TodoCollection.find({}).toArray();
  }
  async create(todoText) {
    return await this.TodoCollection.insertOne({ text: todoText });
  }
}

module.exports = new todoRespository(MONGO_URI_LOCAL);
