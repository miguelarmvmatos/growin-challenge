import React from "react";

import { useParams } from "react-router-dom";

function HeroDetails() {
  let { id } = useParams();
  return <div>{id}</div>;
}

export default HeroDetails;
