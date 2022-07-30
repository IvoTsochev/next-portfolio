// import { MongoClient } from 'mongodb';

export async function fetchingPosts () {

  // const username = process.env.DB_USERNAME;
  // const password = process.env.DB_PASSWORD;

  // let client;
  // let result;

  // try {
  //   client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.lh4j7.mongodb.net/?retryWrites=true&w=majority`)
  //   console.log('Connected to MongoDB');
  // } catch (err) {
  //   console.log('Error connecting to MongoDB', err);
  // }

  // const db = client.db('blog');

  // try {
  //   result = await db.collection('blogPosts').find({}).toArray();
  //   client.close();
  //   return result;
  // }
  // catch (err) {
  //   console.log('Error fetching data from MongoDB', err);
  //   client.close();
  //   return;
  // }


}


export async function fetchBlogsFromWp () {

  try {
    const result = await fetch('http://blog.headless.team/wp-json/wp/v2/blog-posts');
    const data = await result.json();
    return data;
  }
  catch (err) {
    return console.log('Error fetching data from blogs.headless.team', err);
  }
}