import React from "react";
import {imageUrl} from "../helpers/url"
import styles from "./verk.module.scss"
//import { imageUrlCSS } from "../helpers/url";
import { Link } from "gatsby";

export default ({ pageContext: { verk, prevVerk, nextVerk } }) => (
  <div className={styles.root}>
    <Link to={verk.file == "fullsize/img60.jpg" ? `/` : `/verk/${nextVerk.id}`}>
      <div>
        <img src={imageUrl(verk.file)} className={styles.image} />
      </div>
      <div className={styles.dimensions}>
        <p>{verk.height + " x " + verk.width}</p>
      </div>
    </Link>
  </div>
);
