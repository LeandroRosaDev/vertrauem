// @ts-nocheck
"use client";

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    NOME: "",
    TELEFONE: "",
    SEGMENTO: "",
    EMAIL: "",
    EMPRESA: "",
    NECESSIDADE: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.sheetmonkey.io/form/9Vc8moB1qU9mCoWpwcJztK",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Informações enviadas com sucesso!");
      } else {
        alert("Erro ao enviar informalções.");
      }
    } catch (error) {
      console.error("Erro durante o envio das informações:", error);
      alert("Erro ao enviar informações.");
    }
  };

  return (
    <div className="py-14">
      <h1 className="text-[#333333] text-3xl md:text-5xl font-extralight mb-10 text-center">
        PRECISA DE UM SISTEMA SOB MEDIDA?
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label htmlFor="nome" className="block text-[#545454] mb-2">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="NOME"
              placeholder="Insira seu nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-[#545454] mb-2">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="TELEFONE"
              placeholder="Insira um número para contato"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="segmento" className="block text-[#545454] mb-2">
              Segmento
            </label>
            <input
              type="text"
              id="segmento"
              name="SEGMENTO"
              placeholder="Insira o segmento"
              value={formData.segmento}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#545454] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="EMAIL"
              placeholder="Insira seu e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="empresa" className="block text-[#545454] mb-2">
              Empresa
            </label>
            <input
              type="text"
              id="empresa"
              name="EMPRESA"
              placeholder="Insira o nome da empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="mb-8">
          <label htmlFor="necessidade" className="block text-[#545454] mb-2">
            Conte-nos para qual necessidade será o seu sistema.
          </label>
          <textarea
            id="necessidade"
            name="NECESSIDADE"
            placeholder="Conte-nos sobre o sistema que planeja para a sua empresa."
            value={formData.necessidade}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded h-32"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#27AE60] text-white py-3 px-8 rounded"
          >
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
