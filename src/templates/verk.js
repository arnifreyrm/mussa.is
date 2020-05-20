import React from "react";
import {imageUrl} from "../helpers/url"
import styles from "./verk.module.scss"
//import { imageUrlCSS } from "../helpers/url";
import { Link } from "gatsby";

export default ({ pageContext: { verk, prevVerk, nextVerk } }) => (
  <div className={styles.root}>
    <head>
      <title>Mússa</title>
      <link rel="preload" href={imageUrl(nextVerk.file)} as="image"></link>
    </head>
    <Link
      to={verk.file === "fullsize/img102.jpg" ? `/end` : verk.file === 'fullsize/img74.jpg' ? `/text`: `/verk/${nextVerk.id}`}
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
