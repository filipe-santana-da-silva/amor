import { connectToDatabase } from "../../../../../lib/mongodb";
import Carta from "../../../../../models/Cartas";

export async function DELETE(req, { params }) {
  await connectToDatabase();
  const id = params.id; // Captura o ID correto

  if (!id) {
    return Response.json({ error: "ID não fornecido!" }, { status: 400 });
  }

  await Carta.findByIdAndDelete(id);
  return Response.json({ message: "Carta excluída com sucesso!" });
}
