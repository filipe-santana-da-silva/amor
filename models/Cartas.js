import mongoose from "mongoose";

const CartaSchema = new mongoose.Schema({
  mensagem: { type: String, required: true },
  data: { type: Date, default: Date.now }
});

// Evita sobrescrever o modelo caso já tenha sido compilado
export default mongoose.models.Carta || mongoose.model("Carta", CartaSchema);
