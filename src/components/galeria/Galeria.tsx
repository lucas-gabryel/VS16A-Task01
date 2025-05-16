"use client";

import React from "react";
import { useGaleria } from "../../app/hooks/useGaleria";

interface GaleriaProps {
  imagens: string[];
  largura?: string;
  altura?: string;
}

const Galeria: React.FC<GaleriaProps> = ({
  imagens,
  largura = "400px",
  altura = "300px",
}) => {
  const {
    imagemAtual,
    proximaImagem,
    imagemAnterior,
    indiceAtual,
  } = useGaleria(imagens);

  return (
    <div style={{ width: largura, height: altura, textAlign: "center" }}>
      <img
        src={imagemAtual}
        alt={`Imagem ${indiceAtual + 1}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={imagemAnterior}>⬅️ Anterior</button>
        <button onClick={proximaImagem}>Próxima ➡️</button>
      </div>
    </div>
  );
};

export default Galeria;