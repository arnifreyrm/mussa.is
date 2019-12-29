import React from "react";
import {imageUrl} from "../helpers/url"
import styles from "./verk.module.scss"
//import { imageUrlCSS } from "../helpers/url";
import { Link } from "gatsby";

export default ({ pageContext: { verk, prevVerk, nextVerk } }) => (
  <div className={styles.root}>
    <head>
      <title>Mússa</title>
    </head>
    <Link
      to={verk.file === "fullsize/img93.jpg" ? `/end` : verk.file === 'fullsize/img65.jpg' ? `/text`: `/verk/${nextVerk.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div>
        <img src={imageUrl(verk.file)} className={styles.image} />
      </div>
      <div className={styles.dimensions}>
        <p>{verk.height + " x " + verk.width}</p>
        <p>{verk.year}</p>
      </div>
    </Link>
  </div>
);
