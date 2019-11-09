import React from "react";
import { Link } from "gatsby";
import styles from "./text.module.scss"
export default ({ pageContext: { verk, prevVerk, nextVerk } }) => (
  <div className={styles.root}>
    <Link
      to={`/verk/8e9461ee-d887-469f-b7e6-6e8e79567668`}
      className={styles.text}
    >
      <div className={styles.text}>
        <p>Velkomin á sýiningu á vatnslitamyndum mínum (allar í einkaeigu)</p>
        <p>frá árinu 1982 til dagsins í dag.</p>
        <p>
          Ljósmynd á forsíðu tók Þorvaldur 1. ág 1980. Um það leyti byrjaði ég
          að mála
        </p>
        <div className = {styles.img_container}>
          <img src="images/fullsize/mussa.png" className={styles.img} />
        </div>
      </div>
    </Link>
  </div>
);
