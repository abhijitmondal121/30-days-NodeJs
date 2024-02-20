import { MongoClient } from 'mongodb';
import express from 'express';

const app = express();
const mongoURI = 'mongodb://localhost:27017';
const dbName = 'Data';
const collection = 'users';

//Pieces: Comment | Pieces: Explain

async function averageAgeOfUsers(req, res) {
  try {
    const client = new MongoClient(mongoURI, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const pipeline = [
      {
        $group: {
          id: null,
          averageAge: { $avg: '$age' },
        },
      },
    ];
    const result = await collection.aggregate(pipeline).toArray();
    await client.close();
    const averageAge = result[0].averageAge;
    res.json({ averageAge });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
app.get('/average-age', averageAgeOfUsers);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});