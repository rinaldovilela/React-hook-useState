import React, { useState } from "react";

export default function Counter() {
  // Definindo o estado inicial do contador como 0
  const [contador, setContador] = useState<number>(0);

  // Função para incrementar o contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  // Função para resetar o contador
  const resetar = () => {
    setContador(0);
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Contador: {contador}</h1>
      <div className="space-x-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrementar}
        >
          Decrementar
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={incrementar}
        >
          Incrementar
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={resetar}
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
