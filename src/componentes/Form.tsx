// @ts-nocheck
'use client';

import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo_reclamacao: '',
    reclamacao: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObject.append(key, formData[key]);
    });

    try {
      const response = await fetch(
        'https://apikomode.altuori.com/wp-json/api/reclamacao',
        {
          method: 'POST',
          headers: {
            Authorization:
              'Bearer ' +
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaWtvbW9kZS5hbHR1b3JpLmNvbSIsImlhdCI6MTcxNTY0NDgwMCwibmJmIjoxNzE1NjQ0ODAwLCJleHAiOjI1Nzk2NDQ4MDAsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.tQ-Uuz58JbI2ksAdPJz-6OaBh6TUAE31jsbg84oXshQ',
          },
          body: formDataObject,
        },
      );

      if (response.ok) {
        alert('Reclamação enviada com sucesso!');
      } else {
        alert('Erro ao enviar reclamação.');
      }
    } catch (error) {
      console.error('Erro durante o envio da Reclamação:', error);
      alert('Erro ao enviar reclamação.');
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
              placeholder="Insira seu nome"
              value={formData.nome}
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
              placeholder="Insira seu e-mail"
              value={formData.email}
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
              placeholder="Insira um número para contato"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label
              htmlFor="tipo_reclamacao"
              className="block text-[#545454] mb-2"
            >
              Tipo de Reclamação
            </label>
            <select
              id="tipo_reclamacao"
              value={formData.tipo_reclamacao}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            >
              <option value="">Selecione um tipo</option>
              <option value="Garantia">Garantia</option>
              <option value="Pagamento">Pagamento</option>
              <option value="Entrega">Entrega</option>
              <option value="Atendimento">Atendimento</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>
        <div className="mb-8">
          <label htmlFor="reclamacao" className="block text-[#545454] mb-2">
            Reclamação
          </label>
          <textarea
            id="reclamacao"
            placeholder="Conte-nos sobre a sua reclamação"
            value={formData.reclamacao}
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
