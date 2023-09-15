import HeartComponent from "../../components/HeartComponent/HeartComponent";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./componentTestPage.css";

// import {catadoze} from "./src/assets/catadoze.jpg";
// import "./src/assets/catadoze.jpg" as catadoze;
//this page is ment to view and develop React components
//eventualy it should be an overview of all components

//There is a dashed border around the component container div
export function ComponentTestPage() {
  return (
    <>
      <div className="page">

        {/* PokemonCard component */}
          <div className="componentContainer">
            <PokemonCard
              name = "Catadoze"
              type = {"Grass"}
              imgURL = "./src/assets/catadoze.jpg"
            />
          </div>

          {/* Heart - favorite indicator - component */}
          <div className="componentContainer">
            <HeartComponent/>
          </div>
      </div>
    </>
  );
}
export default ComponentTestPage;
