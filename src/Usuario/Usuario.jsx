export function Usuario() {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <form action="">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                    <i class="bi bi-person-badge"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                    <i class="bi bi-person-badge"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="input-group mb-4">
                    <span className="input-group-text">@</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Documento"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="input-group mb-4">
                    <span className="input-group-text">@</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Telefono"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="input-group mb-4">
                    <span className="input-group-text">@</span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Fecha nacimiento"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo electronico"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Departamento</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected="">Municipio</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>

              <button className="btn btn-outline-primary w-25 mx-auto d-block my-4">Registrar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
