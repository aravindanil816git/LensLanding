import "./terms-condition.css";

export default function TermsNCondition() {
  const conditions = [
    "20 Lucky winners everyday will be selected at random.",
    "Winners will be informed within 24 hours of order placed via SMS on registered phone number and/or email on the registered email ID",
    "Complimentary Amazon Fire TV Stick CODE will be sent to the winners on order completion. (Order Completion duration: When the order is delivered and return period of 14 days is over)",
    "The coupon code is redeemable on amazon.in. To claim, follow the steps sent on email to order complementary Amazon Fire TV Stick",
    "The purchase needs to be made from the Mirzapur inspired Sunglasses Collection only.",
    "The offer is subject to change without any prior notice and at the sole discretion of Lenskart and Amazon.",
    "Offer valid from 16th November 2018 till 23rd November 2018. Codes needs to be used before 31st December 2018.",
    "In case of failure on coupon code redemption, please follow <a href=''>Amazon's T&C.</a>",
    "For after sale service of Amazon Fire TV Stick, please follow <a href=''>Amazon's T&C.</a>"
  ];
  return (
    <div className="outer-wrapper padding-20">
      <div className="terms-condition-wrapper padding-40 bg-gray">
      <div className="terms-condition">
        <div className="margin-btm-20 title">Terms and Condition</div>
        <div className="terms-list">
          {conditions &&
            conditions.map((condition, index) => (
              <div className="terms-list-item"key={`terms-${index}`} dangerouslySetInnerHTML={{ __html: `<span>${index + 1}. ${condition}</span>`}}></div>
            ))}
        </div>
      </div>
      </div>
    </div>
  );
}
