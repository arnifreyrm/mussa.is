import React from "react";
import styles from "./Layout.module.scss";
import { Link } from "gatsby";
import { imageUrl } from "../helpers/url";

const Layout = ({ children, activePage }) => (
  <div className={styles.root}>
    <Link to={`/about`}>
      <div className ={styles.image__container}>
        <img src={imageUrl("Sigrun G B.jpg")} className={styles.image} />
      </div>
    </Link>
  </div>
);

export default Layout;
