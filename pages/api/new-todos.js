import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Nagendra:Varma512@cluster0.snkiwp7.mongodb.net/todos?retryWrites=true&w=majority')
        const db = client.db();

        const todosCollection = db.collection('todos');

        const result = await todosCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Todo insersted'})
    }
}

export default handler