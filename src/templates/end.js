import React from "react";
import * as styles from "./end.module.css";
export default ({ pageContext: { verk, prevVerk, nextVerk } }) => (
  <div className={styles.root}>
    <head>
      <title>Mússa</title>
    </head>
    <div className={styles.text}>
      <p>Fleiri myndir í vændum</p>
      <div className={styles.img_container}>
        <img src="../images/fullsize/mussa_icon.png" className={styles.img} />
      </div>
    </div>
  </div>
);
