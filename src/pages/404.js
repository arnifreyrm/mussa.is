import React from "react";
import * as styles from "./404.module.css";
export default ({ pageContext: { verk, prevVerk, nextVerk } }) => (
  <div className={styles.root}>
    <head>
      <title>Síða fannst ekki</title>
    </head>
    <div className={styles.text}>
      <p>Síða fannst ekki</p>
      <div className={styles.img_container}>
        <img src="../images/fullsize/mussa.png" className={styles.img} />
      </div>
    </div>
  </div>
);
