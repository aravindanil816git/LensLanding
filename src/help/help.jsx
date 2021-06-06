import "./help.css";

export default function Help() {
  return (
    <div className="outer-wrapper padding-20">
      <div className="help-wrapper padding-40">
        <div className="help-tagline-container ">
          <div className="help-title title margin-btm-20">
            Looking for help?
          </div>
          <div className="help-description">We are available by phone Monday to Sunday from 9 AM to 8 PM.
Please feel free to call us if you have any queries.</div>
        </div>
        <div>
          <div className="help-cta-wrapper">
            <div className="cta-btn-container" onClick={() => window.open('mailto:xyz@abc.com')}>
              <div className="btn-icon">
                <i className="fa fa-envelope-o"></i>
              </div>
              <div className="btn-description">Email Us</div>
            </div>
            <div className="cta-btn-container" onClick={() => window.open('mailto:xyz@abc.com')}>
              <div className="btn-icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="btn-description">Contact Us</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
