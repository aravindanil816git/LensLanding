import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-container outer-wrapper margin-btm-20 ou">
      <div className="hero-wrapper margin-btm-20 padding-40">
        <div className="hero-offer"></div>
        <div className="hero-description">
          <div className="tagline margin-btm-5">Shop the collection today and 20 Lucky Winners per day to win</div>
          <div className="product-highlight margin-btm-20">AMAZON FIRESTICK</div>
          <div className="contest-cta">
            <button className="button-cta orange-btn btn-large" onClick={() => window.location.href='#'}>VIEW COLLECTION</button>
          </div>
        </div>
      </div>
    </div>
  );
}
