import React from "react";
import {imageUrl} from "../helpers/url"
import styles from "./verk.module.scss"

export default ({ pageContext: { verk } }) => (
  <div>
    <img src={imageUrl(verk.file)} className={styles.image} />
  </div>
);
