import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;

// Check to satisfy TypeScript and prevent runtime crashes
if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
}
if (!dbName) {
  throw new Error('Invalid/Missing environment variable: "MONGO_DB_NAME"');
}

const options = {};

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Use global variable to preserve connection across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, don't use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db(dbName);
}

export default clientPromise;
