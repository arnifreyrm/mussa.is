import React from "react";
import { Link } from "gatsby";
import * as styles from "./text_2.module.css";
export default ({ pageContext: { verk, prevVerk, nextVerk } }) => (
  <div className={styles.root}>
    <head>
      <title>Mússa</title>
    </head>
    <Link
      to={`/verk/9a12648d-8894-47ef-b336-8c985e2b2d26`}
      className={styles.text}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={styles.text}>
        <p>
          Gleymdar filmur með rifrildum - collagemyndum (allar í einkaeigu) frá
          1979-'82 skutu óvænt upp kollinum. Ég læt þær fljóta með
        </p>
        <div className={styles.img_container}>
          <img src="../images/fullsize/mussa_icon.png" className={styles.img} />
        </div>
      </div>
    </Link>
  </div>
);
