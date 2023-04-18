import React from "react";
import { Link } from "gatsby";

import { imageUrlCSS } from "../helpers/url";

import Layout from "../components/Layout";
import * as styles from "./yfirlit.module.css";

export default ({ pageContext: { ollVerk } }) => (
  <Layout activePage="yfirlit">
    <div className={styles.root}>
      {ollVerk.map((verk) => (
        <Link to={`/verk/${verk.id}`}>
          <div
            className={styles.thumbnail}
            style={{ backgroundImage: imageUrlCSS(verk.file) }}
          ></div>
        </Link>
      ))}
    </div>
  </Layout>
);
