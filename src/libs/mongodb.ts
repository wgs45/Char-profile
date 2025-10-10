import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://admin:password@mongodb:27017";
const options = {};
const dbName = process.env.MONGO_DB_NAME || "my-db";

// use a global variable to preserve client across hot relaods in dev
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise as Promise<MongoClient>;

export async function getDb() {
  const client = await clientPromise;
  return client.db(dbName);
}

export default clientPromise;
