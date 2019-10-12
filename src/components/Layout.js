import React from "react";
import styles from "./Layout.module.scss";
import { Link } from "gatsby";

const Layout = ({ children, activePage }) => (
  <div className={styles.root}>
    <div className={styles.sidebar}>
      <h1>Mússa</h1>
      <Link>
        <span className={activePage === "yfirlit" && styles.active}>Verk</span>
      </Link>
      <Link>
        <span className={activePage === "um" && styles.active}>
          Um Mussu
        </span>
      </Link>
    </div>
    <div>{children}</div>
  </div>
);

export default Layout;
