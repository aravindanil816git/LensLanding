import "./features.css";
import FeatureItem from "./feature-item/feature-item";

export default function Features() {

  const featureItems = [
    {
    avatar:{
      url:"https://via.placeholder.com/150",
      description:"The iron-fisted <span class='avatar-higlight'>Akhandanand Tripathi</span> is a millionaire carpet exporter and the mafia don of Mirzapur"
    },
    product:{
      imageUrl:"https://via.placeholder.com/100/100",
      logoUrl:"https://via.placeholder.com/80x20/20",
      description:"Golden Green Full Rim"
    }
  },
  {
    avatar:{
      url:"https://via.placeholder.com/150",
      description:"Akhandanand's son, <span class='avatar-higlight'>Munna Tripathi</span> is power hungry and will not stop at anything to inherit his father's legacy"
    },
    product:{
      imageUrl:"https://via.placeholder.com/100/100",
      logoUrl:"https://via.placeholder.com/80x20/20",
      description:"Black Grey Full Rim"
    }
  },
  {
    avatar:{
      url:"https://via.placeholder.com/150",
      description:"An honest cop, <span class='avatar-higlight'>Maurya Saab</span> who goes an extra mile to eliminate the bad and the over-powering crime in the city"
    },
    product:{
      imageUrl:"https://via.placeholder.com/100/100",
      logoUrl:"https://via.placeholder.com/80x20/20",
      description:"Golden Brown Full Rim"
    }
  }
]

  return (
    <div className="outer-wrapper padding-20">
      <div className="features-wrapper margin-btm-20 padding-40 bg-gray">
        <div className="features-title title margin-btm-5 ">BOLD, DARING,STYLISH</div>
        <div className="features-subtitle margin-btm-20">
          These pilots are perfect for your grunge look
        </div>
        <div className="feature-items">
        {featureItems.map((feature,index) => <FeatureItem key={`feature-${index}`} {...feature}/>)}
        </div>
      </div>
    </div>
  );
}
