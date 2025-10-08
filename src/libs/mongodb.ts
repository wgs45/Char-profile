import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://admin:password@mongodb:27017";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
