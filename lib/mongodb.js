import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // Definir essa variável no .env

if (!MONGODB_URI) {
  throw new Error("Variável de ambiente MONGODB_URI não foi encontrada!");
}

let cached = global.mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
   cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);

  }

  cached.conn = await cached.promise;
  return cached.conn;
};
