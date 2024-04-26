const Formulario = () => {
  return (
    <>
      <h2>Formulario</h2>
      <hr />
      <form className="w-50 border border-success rounded-3 p-4 mb-5">
        <div className="mb-3">
          <label htmlFor="lbl-nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-nombre"
            placeholder="Ej: Heladera"
            name="nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lbl-categoria" className="form-label">
            Categoria
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-categoria"
            placeholder="Ej: Electro"
            name="categoria"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lbl-precio" className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            id="lbl-precio"
            placeholder="Ej: 123"
            name="precio"
          />
        </div>

        <button type="submit" className="btn btn-success me-2">Guardar</button>
        <button type="reset" className="btn btn-danger">Resetear</button>
      </form>
    </>
  );
};

export default Formulario;
