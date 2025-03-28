import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="header-extras">
          <div className="L">
            <p>L</p>
          </div>
          <div className="languages">
            <ul>
              <li>Brasil</li>
              <li>EUA</li>
            </ul>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/">Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/">Serviços</NavLink>
            </li>
            <li>
              <NavLink to="/">Contato</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experiências</NavLink>
            </li>
            <li>
              <NavLink to="/volunteer">Voluntário</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
