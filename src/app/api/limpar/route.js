import { connectToDatabase } from "../../../../lib/mongodb";
import Carta from "../../../../models/Cartas";

export async function DELETE() {
  await connectToDatabase();
  await Carta.deleteMany({}); // Deleta todas as cartas
  return Response.json({ message: "Todas as cartas foram apagadas!" });
}
