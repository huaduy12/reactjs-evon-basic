import "./App.css";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import CardTailwind from "./components/card/CardTailwind";
import Counter from "./components/counter/Counter";
import Photos from "./components/photo/Photos";
import Game from "./components/tictactoe/Game";
import GameReducer from "./components/tictactoe/GameReducer";
import Toogle from "./components/toggle/Toogle";

function App() {
  return (
    // <div className="flex flex-wrap gap-5">
    //   {youtubeData.map((data) => (
    //     <YoutubeList
    //       key={data.id}
    //       image={data.image}
    //       avatar={data.avatar}
    //       title={data.title}
    //       description={data.description}
    //     ></YoutubeList>
    //   ))}
    // </div>
    <div>
      {/* <Toogle></Toogle>
      <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <GameReducer></GameReducer> */}
      {/* <CardList></CardList> */}
      <Photos></Photos>
    </div>
  );
}

export default App;
