import React from "react";
import {imageUrl} from "../helpers/url"

export default ({ pageContext: { verk } }) => (
  <div>
    {verk.id}
    <img src={imageUrl(verk.file)}/>
  </div>
);
