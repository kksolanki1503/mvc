const mongoose = require("mongoose");

const allConnectionCache = new Map();
exports.getMongoConnection = async (uri) => {
  try {
    if (allConnectionCache.has(uri)) return allConnectionCache.get(uri);
    const conn = await mongoose.createConnection(uri).asPromise();
    console.log("Mongo Connected Successfully to URI : ", uri);
    allConnectionCache.set(uri, conn);
    return conn;
  } catch (error) {
    console.error("Error while connecting to Mongo URI : ", uri);
  }
};
