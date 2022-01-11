import React from "react";
import content from "./assets/images/image-equilibrium.jpg";
import avatar from "./assets/images/image-avatar.png";
import coin from "./assets/svg/icon-ethereum.svg";
import clock from "./assets/svg/icon-clock.svg";
import view from "./assets/svg/icon-view.svg";
import "./App.scss";

function App() {
  return (
    <main className="app">
      <section className="card">
        <div className="picture">
          <img
            className="picture-main"
            alt="NFT product preview"
            src={content}
          ></img>

          <img className="picture-view" alt="preview" src={view} />
        </div>

        <h1 className="title">Equilibrium #3429</h1>

        <p className="description">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="properties">
          <div className="coin">
            <img alt="coin" src={coin} />
            <span>0.041 ETH</span>
          </div>

          <div className="time-left">
            <img alt="time left" src={clock} />
            <span>3 days left</span>
          </div>
        </div>

        <hr />

        <div className="author">
          <img alt="author" src={avatar} />
          <span className="author-info">
            Creation of <strong className="author-name">Jules Wyvern</strong>
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
