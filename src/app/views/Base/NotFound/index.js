import BaseLayout from "../../../layout/Base";
import Logo from "../../../assets/logo.svg";
import "./styles.scss";
export const NotFound = () => {
  return (
    <BaseLayout>
      <div className="NotFound text-center py-4">
        <h1 className="NotFound__title mb-2">404 Not Found</h1>
        <img src={Logo} alt="Strappberry" className="img-fluid" />
        <p className="NotFound__message">
          La página que estás buscando no se encontró.
        </p>
      </div>
    </BaseLayout>
  );
};
