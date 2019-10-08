import React from "react";
import { Link } from "gatsby";

export default ({ pageContext: { verk } }) => (
  <div>
    {verk.id}
    <img src={`/images/${verk.file}`}/>
  </div>
);
