import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="aside col-sm-4">
      <nav>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/users/">Страница пользователей</Link>
          </li>
          <li className="list-group-item">
            <Link to="/drivers/">Страница водителей</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
