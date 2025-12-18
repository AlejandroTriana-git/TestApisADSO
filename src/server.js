// src/server.js (ESModules)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Permitir solo tu front actual
app.use(cors({ origin: "http://localhost:3002" }));

app.use("/usuarios", usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
