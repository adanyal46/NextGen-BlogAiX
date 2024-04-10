import { Db, MongoClient } from 'mongodb'

let uri = process.env.NEXT_PUBLIC_MONGO_URI || ''
let dbName = process.env.NEXT_PUBLIC_MONGO_DB

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

if (!uri) {
  throw new Error('Please define a mongo uri enviroment variable')
}

if (!dbName) {
  throw new Error('Please define a mongo db enviroment variable')
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri)
  const db = await client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}