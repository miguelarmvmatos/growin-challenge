import React, { useState } from "react";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import Card from "../components/Card";

const IMAGE_SIZE = "portrait_fantastic";

function Home() {
  const [heroes, setHeroes] = useState();
  let cards;
  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        id={hero.id}
        key={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
      />
    ));
  }
  return (
    <Container>
      <h1>Marvel's Hero Database</h1>
      <SearchBar setter={setHeroes} />
      <Grid>{cards ? cards : null}</Grid>
    </Container>
  );
}

export default Home;
