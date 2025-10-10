const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const db = client.db(process.env.MONGO_DB_NAME || "my-db");
  await db.collection("users").updateOne(
    { userid: 1 },
    {
      $set: {
        userid: 1,
        name: "Alpha",
        email: "alpha@example.com",
        interests: "Watching anime",
      },
    },
    { upsert: true },
  );
  console.log("Seeded");
  await client.close();
}

run().catch(console.error);
