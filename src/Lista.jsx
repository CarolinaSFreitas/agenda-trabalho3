import React, { useState, useEffect } from "react";
import Formulario from "./Formulario";

function Lista() {
  const [produtos, setProdutos] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const storedProdutos = localStorage.getItem("produtos");
    const storedDatas = localStorage.getItem("datas");

    if (storedProdutos && storedDatas) {
      setProdutos(JSON.parse(storedProdutos));
      setDatas(JSON.parse(storedDatas));
    }
  }, []);

  const handleSubmit = (descricao, data) => {
    const newProdutos = [...produtos, descricao];
    const newDatas = [...datas, data];

    setProdutos(newProdutos);
    setDatas(newDatas);

    localStorage.setItem("produtos", JSON.stringify(newProdutos));
    localStorage.setItem("datas", JSON.stringify(newDatas));
  };

  return (
    <div className="bg-warning ">
      <div className="card-header fw-bold fs-4 text-center py-3">
        Lista de Tarefas Cadastradas
      </div>
      <div className="card-body bg-light">
        <Formulario onTarefaSalva={handleSubmit} />
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="text-white bg-dark">
                  #
                </th>
                <th scope="col" className="text-white text-uppercase bg-dark">
                  Descrição
                </th>
                <th scope="col" className="text-white text-uppercase bg-dark">
                  Data
                </th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="fw-semibold">{produto}</td>
                  <td className="fw-semibold">
                    {datas[index].toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Lista;
