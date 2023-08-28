import "./styles.scss";
export const Masthead = ({ title }) => {
  return (
    <div className="Masthead my-3 p-2">
      <p className="m-0">{title}</p>
    </div>
  );
};
