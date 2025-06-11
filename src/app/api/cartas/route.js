import { connectToDatabase } from "../../../../lib/mongodb";
import Carta from "../../../../models/Cartas";

export async function GET() {
  await connectToDatabase();
  const cartas = await Carta.find();
  
  return Response.json(cartas.map((carta) => ({
    id: carta._id.toString(), // Converte ObjectId para string
    mensagem: carta.mensagem
  })));
}




export async function POST(req) {
  await connectToDatabase();
  const { mensagem } = await req.json();
  const novaCarta = new Carta({ mensagem });
  await novaCarta.save();
  return Response.json(novaCarta);
}
