import { useState } from "react";

export const useGaleria = (imagens: string[]) => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setIndiceAtual((prev) =>
      prev === 0 ? imagens.length - 1 : prev - 1
    );
  };

  const imagemAtual = imagens[indiceAtual];

  return {
    imagemAtual,
    indiceAtual,
    proximaImagem,
    imagemAnterior,
  };
};