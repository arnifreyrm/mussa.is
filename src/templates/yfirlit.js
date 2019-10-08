import React from "react";
import { Link } from "gatsby";

import {imageUrlCSS} from "../helpers/url"

import Layout from "../components/Layout";
import styles from "./yfirlit.module.scss"

export default ({ pageContext: { ollVerk } }) => (
  <Layout activePage="yfirlit">
    <div className={styles.root}>
        
        {ollVerk.map(verk => (
          <Link to={`/verk/${verk.id}`}>
            <div
              className={styles.thumbnail}
              style={{ backgroundImage: imageUrlCSS(verk.file)}}
            >hhhh</div>
          </Link>
        ))}
    </div>
  </Layout>
);
