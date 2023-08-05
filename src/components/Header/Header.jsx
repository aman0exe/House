import css from "./Header.module.css";
import { Link } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>LOGO</h1>
      <Link to="/login" className={css.link}>
        Войти
      </Link>
    </header>
  );
};

export default Header;
