import React from "react";
import { Link } from "gatsby";
import styles from "./end.module.scss";
export default ({ pageContext: { verk, prevVerk, nextVerk } }) => (
  <div className={styles.root}>
      <div className={styles.text}>
        <p>
          Fleiri myndir í vændum
        </p>
        <div className={styles.img_container}>
          <img src="../images/fullsize/mussa.png" className={styles.img} />
        </div>
      </div>
  </div>
);
