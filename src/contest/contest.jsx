import "./contest.css";

export default function Contest() {
  return (
    <div className="outer-wrapper padding-20">
      <div className="contest-wrapper margin-btm-20 padding-40">
        <div className="contest-description">
          <div className="tagline margin-btm-5 ">Shop the Mirzapur Collection & 20 Lucky Winners per day to win</div>
          <div className="product-highlight margin-btm-20">Amazon Fire TV Stick</div>
          <div className="contest-cta">
            <button className="button-cta btn-large" onClick={() => window.location.href='#'}>VIEW COLLECTION</button>
          </div>
        </div>
      </div>
    </div>
  );
}
