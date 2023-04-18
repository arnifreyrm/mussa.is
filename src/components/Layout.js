import React from "react";
import * as styles from "./Layout.module.css";
import { Link } from "gatsby";
import { imageUrl } from "../helpers/url";

const Layout = ({ children, activePage }) => (
  <div className={styles.root}>
    <head>
      <title>Mússa</title>
      <link rel="icon" href="images/fullsize/mussa.ico" />
    </head>

    <Link to={`/about`}>
      <div className={styles.image__container}>
        <img src={imageUrl("Sigrun G B.jpg")} className={styles.image} />
      </div>
    </Link>
  </div>
);

export default Layout;
