import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb'
// import cors from 'cors'
const client = await clientPromise

export async function GET() {
  const db = client.db('landing_page')
  const data = await db.collection('home').find({}).toArray()

  return NextResponse.json({ data });
}

// export  async function  GET(req, res) {
//   console.log(req);
//   const db = client.db('landing_page')
//   switch (req.method) {
//     case 'POST':
//       let bodyObject = JSON.parse(req.body)
//       let myPost = await db.collection('posts').insertOne(bodyObject)
//       res.json(myPost.ops[0])
//       break
//     case 'GET':
//       const allMovies = await db.collection('home').find({}).toArray()
//       // res.json({ status: 200, data: allMovies })
//        NextResponse.json({ status: 200, data: allMovies });
//       break
//   }
//   // res.setHeader('Allow', ['GET'])
// }

export async function PATCH(request) {
  try {
  const req = await request.json()
    const db = client.db('landing_page')
    const { data,property,id } = req
  let result = await db.collection('home')
  .updateOne(
    { _id: id },
    { $set: { [property]: data } },
    // { new: true }
  );

  if (result.modifiedCount === 1) {
   return NextResponse.json({ success: true, data: result},{ status: 200 });
  }
   else {
    NextResponse.json({ error: 'L\'objet n\'a pas été trouvé' },{ status: 404 });
  }

} catch (error) {
  console.error(error);
  NextResponse.json({ error: 'Erreur lors de la mise à jour de l\'objet' },{ status: 500 });
}

}
