import style from "./style.module.scss";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import Link from "next/link";
import { HTMLProps } from "react";

const NavBar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const getLinkClassName = ({
                              isActive,
                            }: {
    isActive: boolean;
  }): HTMLProps<HTMLAnchorElement>["className"] =>
      isActive ? activeLink : normalLink;

  return (
      <nav className={style.nav}>
        <div className={style.navRow}>
          <Link href="/" className={style.logo}>
            <strong>Frontend</strong> portfolio
          </Link>

          <BtnDarkMode />

          <ul className={style.navList}>
            <li className={style.navList__link}>
              <Link href="/" className={getLinkClassName({ isActive: true })}>
                Home
              </Link>
            </li>
            <li className={style.navList__link}>
              <Link
                  href="/projects"
                  className={getLinkClassName({ isActive: true })}
              >
                Projects
              </Link>
            </li>
            <li className={style.navList__link}>
              <Link
                  href="/contacts"
                  className={getLinkClassName({ isActive: true })}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default NavBar;
