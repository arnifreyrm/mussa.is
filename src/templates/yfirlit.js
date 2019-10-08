import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import styles from "./yfirlit.module.scss"

export default ({ pageContext: { ollVerk } }) => (
  <Layout activePage="yfirlit">
    {ollVerk.map(verk => (
      <Link to={`/verk/${verk.id}`}>
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url(/images/${verk.file})` }}
        >hhhh</div>
      </Link>
    ))}
  </Layout>
);
