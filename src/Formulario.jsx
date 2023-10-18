import React, { useState } from "react";
import Swal from "sweetalert2";

function Formulario({ onTarefaSalva }) {
  const [exibir, setExibir] = useState(false);

  const handleTarefaSalva = (e) => {
    e.preventDefault();
    const descricao = e.currentTarget.descricao.value;
    const data = e.currentTarget.data.value;
    onTarefaSalva(descricao, data);

    exibirSweetAlert();
    
    e.currentTarget.reset();
  };

  const exibirSweetAlert = () => {
    Swal.fire({
      title: "Deseja salvar a tarefa?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: "Don't save",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Salvo!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Tarefa não salva", "", "info");
      }
    });
  };

  return (
    <div className="container">
      <div className="text-end">
        <button
          type="button"
          title="Adicionar Atividade"
          className="btn btn-outline-warning mt-4 mb-4 py-3 px-3 rounded-5 m-2"
          onClick={() => setExibir(true)}
        >
          <img src="mais.svg" width={24} />
        </button>
      </div>
      {exibir && (
        <div>
          <form className="container mb-4" onSubmit={handleTarefaSalva}>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="card text-center">
                  <h5 className="card-header bg-warning p-2 text-dark bg-opacity-7">
                    Cadastrar Atividade
                  </h5>
                  <div className="card-body bg-white p-2 text-dark">
                    <div className="row mt-3 ">
                      <div className="col">
                        <div className="row">
                          <div className="col-md-4 text-center">
                            <label
                              htmlFor="descricao"
                              className="col-form-label "
                            >
                              <span className="fw-semibold">Descrição:</span>
                            </label>
                          </div>

                          <div className="col-md-7">
                            <input
                              type="text"
                              placeholder="Descreva a Atividade"
                              className="form-control"
                              id="descricao"
                              name="descricao"
                              required
                            />
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className="col">
                            <div className="row">
                              <div className="col-md-4 text-center">
                                <label
                                  htmlFor="data"
                                  className="col-form-label"
                                >
                                  <span className="fw-semibold">Data:</span>
                                </label>
                              </div>

                              <div className="col-md-7">
                                <input
                                  type="date"
                                  className="form-control"
                                  name="Data"
                                  id="data"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row mt-4 ">
                          <div className="col mt-3 ">
                            <button
                              type="submit"
                              className="btn btn-warning  fw-semibold rounded-4 py-2 px-4"
                              title="Salvar Atividade"
                              onClick={() => setExibir(true)}
                            >
                              Adicionar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default Formulario;
