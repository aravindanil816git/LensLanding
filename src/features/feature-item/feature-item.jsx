import "./feature-item.css";

export default function FeatureItem(props) {
  return (
    <div className="feature-item-wrapper">
      <div className="feature-item-avatar margin-btm-20">
        <img src={props.avatar.url} alt="avatar" />
        <div className="avatar-description" dangerouslySetInnerHTML={{ __html: props.avatar.description}}></div>
      </div>
      <div className="feature-item-product margin-btm-20">
        <img src={props.product.imageUrl} alt="product" />
        <div className="product">
          <div className="product-logo">
            <img src={props.product.logoUrl} alt="logo" />
          </div>
          <div className="product-description">{props.product.description}</div>
        </div>
      </div>
      <div className="feature-item-cta">
        <button className="button-cta" onClick={() => window.location.href=`#${props.product.description}`}>BUY NOW</button>
      </div>
    </div>
  );
}
