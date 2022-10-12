import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>Project Demonstacyjny</div>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={() => {}}
          >
            Demo
          </NavLink>
          <NavLink
            to="/products"
            className={() => {}}
          >
            Produkty
          </NavLink>
          <NavLink
            to="/contact"
            className={() => {}}
          >
            Kontakt
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
