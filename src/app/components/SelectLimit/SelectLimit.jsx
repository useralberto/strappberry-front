import "./styles.scss";
export const SelectLimit = ({ data }) => {
  const { handleItemsPerPageChange, itemsPerPage, pageSizeOptions } = data;
  return (
    <form className="row blockLimit">
      <div className="col-6 col-lg-5">
        <select
          onChange={handleItemsPerPageChange}
          value={itemsPerPage}
          className="form-select "
          id="autoSizingSelect"
        >
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <label className="col-6 col-lg-7 col-form-label">
        Registros Visibles
      </label>
    </form>
  );
};
