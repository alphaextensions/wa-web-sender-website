import React, { useEffect, useState } from 'react';
// Components
import Slider from '../slider/slider';

// Plan price data

// Style
import './styles.scss';

import check from '../../svg/check.jpeg';
import cancel from '../../svg/cancel.png';
import screenshot from '../../svg/screenshot.png';
import large from '../../svg/large.png'
import stars from '../../svg/stars.png'
import recommended from '../../svg/recommended.png'

export default function Pricing() {
  const [planPeriod, setPlanPeriod] = useState('monthly');
  const [userPlanPeriod, setUserPlanPeriod] = useState('annually');
  const [planType, setPlanType] = useState('international');
  const [basicButton, setBasicButton] = useState('international');
  const [userLastPlan,setUserLastPlan] = useState(null)
  const [userCountry,setUserCountry] = useState('')
  const [userPlan,setUserPlan] = useState(null)

  const getParams = () => {
    const urlParams = typeof window !== 'undefined' ? window.location.search : '';
    const params = new URLSearchParams(urlParams);
    if(params.size > 0){
      const lastPlan = params.get('lastPlan');
      const country = params.get('country');
      const currentPlan = params.get('currentPlan')

      setUserCountry(country)
      setUserLastPlan(lastPlan)
      setUserPlan(currentPlan)
    
      if (lastPlan || country || currentPlan) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }
  };
  
  useEffect(() => {
    getParams();
  }, [userCountry]);
  
  
  function defineAdvanceButton() {
    const Script = document.createElement('script');
    const Form = document.getElementById('advance-button');
    Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js');
    Script.setAttribute('data-payment_button_id', advanceButton);
    Form.appendChild(Script);
  }

  function togglePeriod(sliderValue) {
    sliderValue ? setPlanPeriod('monthly') : setPlanPeriod('annually');
  }

  function userTogglePeriod(sliderValue) {
    sliderValue ? setUserPlanPeriod('annually') : setUserPlanPeriod('monthly');
  }

  function toggleType(sliderValue) {
    sliderValue ? setPlanType('international') : setPlanType('indian');
  }

  function getAdvanceButtonId(country,duration) {
    if (country === 'international') {
      return duration === 'monthly' ? 'https://buy.stripe.com/fZeeVe1ZM30Aeo88wL' : 'https://buy.stripe.com/6oEcN6cEqat2gwg6or';
    }
    else if (country === 'indonesia')
      return duration === 'monthly' ? 'https://buy.stripe.com/28ocN6gUGcBa7ZKdQX' : 'https://buy.stripe.com/00g7sM7k6gRq3JufZ9';
    return duration === 'monthly' ? 'https://buy.stripe.com/fZe7sMawi30Acg0bIZ' : 'https://razorpay.com/payment-button/pl_HyuXVKKhpfe28k/view';
  }

  function getBasicButtonId(country,duration) {
    if (country === 'international') {
      return duration === 'monthly' ? 'https://buy.stripe.com/4gwbJ25bYgRqa7S9AO' : 'https://buy.stripe.com/7sI4gAcEqeJi3JudQW';
    }
    else if (country === 'indonesia')
      return duration === 'monthly' ? 'https://buy.stripe.com/dR6dRa33Q7gQeo8eV2' : 'https://buy.stripe.com/fZe28s8oaat2a7S8wJ';
    return duration === 'monthly' ? 'https://buy.stripe.com/00g7sMawi30A3JucN2' : 'https://razorpay.com/payment-button/pl_HyuSnC8BpjlWV7/view';
  }

  function getBasicPlanPrice(country,duration) {
    if (country === 'international') {
      return duration === 'monthly' ? '$12.99' : '$129.99';
    }
    else if (country === 'indonesia')
      return duration === 'monthly' ? 'IDR 79000' : 'IDR 790000';
    return duration === 'monthly' ? '₹699' : '₹6999';
  }

  function getBasicPlanSlashPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$16.99' : '$169.99';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? '109000' : '1090000';
    return planPeriod === 'monthly' ? '₹999' : '₹9999';
  }

  function getBasicPlanOfferPrice(country,duration) {
    if (country === 'international') {
      return duration === 'monthly' ? '$9.09' : '';
    }
    else if (country === 'indonesia')
      return duration === 'monthly' ? 'IDR 55300' : '';
    return duration === 'monthly' ? '₹489' : '';
  }

  function getAdvancePlanPrice(country,duration) {
    if (country === 'international') {
      return duration === 'monthly' ? '$15.99' : '$159.99';
    }
    else if (country === 'indonesia')
      return duration === 'monthly' ? 'IDR 99000' : 'IDR 990000';
    return duration === 'monthly' ? '₹849' : '₹8499';
  }

  function getAdvancePlanOfferPrice(country,duration) {
    if (country === 'international') {
      return duration === 'monthly' ? '$11.19' : '';
    }
    else if (country === 'indonesia')
      return duration === 'monthly' ? 'IDR 69300' : '';
    return duration === 'monthly' ? '₹594' : '';
  }

  function getAdvancePlanSlashPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$20.99' : '$209.99';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? '139000' : '1390000';
    return planPeriod === 'monthly' ? '₹1199' : '₹11999';
  }

  function getFreePlanPrice() {
    return planType === 'international' ? '$0.00' : '₹0';
  }

  function showBasicButton() {
    const button_id = getBasicButtonId(planType,planPeriod);
    const button_text = planPeriod === 'monthly' ? 'Subscribe' : 'Buy Basic'
    return (
      <a
        href={button_id}
        target="_blank"
        className="buy_button">
        {button_text}
      </a>
    );
  }

  function showUserButton() {
    const button_id = userPlan==='basic' ? getBasicButtonId(userCountry,userPlanPeriod) : getAdvanceButtonId(userCountry,userPlanPeriod);
    let button_text = userPlanPeriod ==='annually' ? 'Buy' : 'Subscribe'
    return (
      <a
        href={button_id}
        target="_blank">
        {button_text}
      </a>
    );
  }

  function showAdvanceButton() {
    const button_id = getAdvanceButtonId(planType,planPeriod);
    const button_text = planPeriod === 'monthly' ? 'Subscribe' : 'Buy Advance'
    return (
      <a
        href={button_id}
        target="_blank"
        className="buy_button">
        {button_text}
      </a>
    );
  }

  function renderResultTabs() {
    var india = (planType == "india") ? 'active' : '';
    var indonesia = (planType == "indonesia") ? 'active' : '';
    var international = (planType == "international") ? 'active' : '';
    return (
      <div className="newsfeed_tabs">
        <div onClick={() => setPlanType('india')} className={india} style={{ padding: '16px 0px', textAlign: 'center', width: '33%' }}>India</div>
        <div onClick={() => setPlanType('indonesia')} className={indonesia} style={{ padding: '16px 0px', textAlign: 'center', width: '33%' }}>Indonesia</div>
        <div onClick={() => setPlanType('international')} className={international} style={{ padding: '16px 0px', textAlign: 'center', width: '33%' }}>International</div>
      </div>
    );
  }

  function generatePricingPopup() {
    let capPlan = userPlan.charAt(0).toUpperCase() + userPlan.slice(1)
    return (
      <>
        <div className="pricing-popup-overlay"></div>
        <div className="pricing-popup" style={userLastPlan === 'planExpired'  ? { background: '#EDF9F3' } : null}>
          <div className="pricing-popup-header">
            <img src={large} alt="Prime-Sender" />
            <h1>Prime Sender <b>{capPlan} Plan</b></h1>
          </div>
          <hr />
          <div className='pricing-recommendation-msg'>
            <img src={stars} alt="starts" />
            <div className="recommendation-msg-content">Recommended - Value for Money</div>
          </div>
          <div className="pricing-popup-slider">
            {
              userPlan==='basic' ? 
              <Slider offTextValue="Monthly Plan" onTextValue="Annual Plan" onTextHeader="Basic" offTextHeader="Basic" setValue={userTogglePeriod}/> :
              <Slider offTextValue="Monthly Plan" onTextValue="Annual Plan" onTextHeader="Advance" offTextHeader="Advance" setValue={userTogglePeriod}/>
            }
          </div>
          <div className="pricing-popup-content">
            <div className="monthly-price">
              <span className={userLastPlan==='freeTrial' ? 'pricing-popup-slash-price' : ''}>
                  {
                    userCountry !== 'india' ? <span>
                    { userPlan==='basic' ? getBasicPlanPrice(userCountry, 'monthly') : getAdvancePlanPrice(userCountry,'monthly') }
                    </span> : <span>
                    <span className="rupee"> { userPlan==='basic' ? getBasicPlanPrice(userCountry, 'monthly').substring(0,1) : getAdvancePlanPrice(userCountry,'monthly').substring(0,1)}</span>
                    <span>{ userPlan==='basic' ? getBasicPlanPrice(userCountry, 'monthly').substring(1) : getAdvancePlanPrice(userCountry,'monthly').substring(1) }</span>
                    </span>
                  }
                  /month</span>
                   <br />
                  { userLastPlan==='freeTrial' && (
                      <span className="pricing-popup-offer-price">
                      {
                        userCountry !== 'india' ? <span>
                        { userPlan==='basic' ? getBasicPlanOfferPrice(userCountry, 'monthly') : getAdvancePlanOfferPrice(userCountry,'monthly') }
                      </span> :
                      <span>
                      <span className='rupee'>{ userPlan==='basic' ? getBasicPlanOfferPrice(userCountry, 'monthly').substring(0,1) : getAdvancePlanOfferPrice(userCountry,'monthly').substring(0,1) }</span>
                      <span>{ userPlan==='basic' ? getBasicPlanOfferPrice(userCountry, 'monthly').substring(1) : getAdvancePlanOfferPrice(userCountry,'monthly').substring(1) }</span>
                    </span>
                      }
                      */month
                      </span>
                  )}
            </div>
              {
                userCountry === 'indonesia' ?
                <div className="annual-price-indonesia" >
                  <span>
                    {userPlan === 'basic' ? getBasicPlanPrice(userCountry, 'annually') : getAdvancePlanPrice(userCountry, 'annually')}({
                      (userPlan === 'basic' ? getBasicPlanPrice(userCountry, 'annually').substring(0, 4) : getAdvancePlanPrice(userCountry, 'annually').substring(0, 4)) +
                      Math.floor((userPlan === 'basic' ? getBasicPlanPrice(userCountry, 'annually').substring(4) : getAdvancePlanPrice(userCountry, 'annually').substring(4)) / 12)
                    }/month)</span> 
                </div> :
                <div className="annual-price" >
                  <span> 
                    <span className={userCountry==='india' ? 'rupee': ''}>
                      {userPlan === 'basic' ? getBasicPlanPrice(userCountry, 'annually').substring(0,1) : getAdvancePlanPrice(userCountry, 'annually').substring(0,1)}
                    </span>
                    <span>
                      {userPlan === 'basic' ? getBasicPlanPrice(userCountry, 'annually').substring(1) : getAdvancePlanPrice(userCountry, 'annually').substring(1)}
                    </span>
                    (
                      <span className={userCountry==='india' ? 'rupee': ''}>
                      {(userPlan === 'basic' ? getBasicPlanPrice(userCountry, 'annually').substring(0, 1) : getAdvancePlanPrice(userCountry, 'annually').substring(0, 1))}
                      </span>{
                      Math.floor((userPlan === 'basic' ? getBasicPlanPrice(userCountry, 'annually').substring(1) : getAdvancePlanPrice(userCountry, 'annually').substring(1)) / 12)
                    }
                    /month)</span>
              </div>
              }
          </div>
          <div className="pricing-popup-btn">
            <button>{showUserButton()}</button>
          </div>
          <div className="pricing-popup-footer">
            <div className="pricing-popup-footer-icon"><span>i</span></div>
            <div className="pricing-popup-footer-content">
              <span className='footer-instruction'>{userPlanPeriod === 'monthly' && userLastPlan==='freeTrial' ? "*Discount applicable for the first month" : ""}</span>
              {
                userPlanPeriod === 'monthly' ?
                <span>
                  By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month. By purchasing the premium plan, you agree to our <u>Terms of Service</u> and <u>Privacy Policy</u>.
                </span>:
                <span>
                  By purchasing the premium plan, you agree to our <u>Terms of Service</u> and <u>Privacy Policy</u>.
                </span>
              }
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="pricing">
      {userLastPlan && generatePricingPopup()}
      <h1 className="price-header">Our Pricing</h1>
      <div style={{ background: '#009A88', borderRadius: '5px', textAlign: 'center', color: '#fff', padding: '12px', width: '100%', maxWidth: '980px', fontWeight: 'bold', fontSize: '20px' }}>
        Early Bird Offer For New User - Extra 30% OFF. Use Code ‘NEWUSER30’
      </div>
      {/*<Slider*/}
      {/*  style={{ marginTop: '24px' }}*/}
      {/*  onText="International"*/}
      {/*  offText="India"*/}
      {/*  setValue={toggleType}*/}
      {/*/>*/}
      {renderResultTabs()}
      <table className="pricing-table">
        <thead>
          <tr>
            <th />
            <th className="pricing-header-text" style={{ padding: '24px 48px 12px !important' }}>Free</th>
            <th className="pricing-header-text" style={{ padding: '24px 48px 12px !important' }}>Basic</th>
            <th className="pricing-header-text" style={{ padding: '24px 48px 12px !important',position: 'relative' }}>
              <img src={recommended} className='recommended-img' alt='Recommended'/>Advance
            </th>
          </tr>
          <tr>
            <th />
            <th />
            <th colSpan={2} style={{ padding: '24px 0px' }}>
              <Slider onTextHeader="Monthly" offTextHeader="Annually" setValue={togglePeriod} />
            </th>
          </tr>
          <tr>
            <th />
            <th className="pricing-header-text rupee free">{getFreePlanPrice()}</th>
            <th className={`pricing-header-text ${planPeriod === 'monthly' ? 'offer' : ''} ${planType === 'indonesia' && planPeriod === "monthly" ? "offer-indo" : ""}`}>
              <div className='rupee'>{getBasicPlanPrice(planType,planPeriod)}</div>
              <div className="amount-slash">
                <span className='rupee'>{getBasicPlanSlashPrice()}</span>
              </div>
              <div>
                {planPeriod === "monthly" && (
                  <a target='_blank' href={getBasicButtonId(planType,planPeriod)} className="offer-price">
                    {"(Get at "}
                    <span className='rupee'>{getBasicPlanOfferPrice(planType,planPeriod)}</span>
                    <br />
                    Limited offer*)
                  </a>
                )}
              </div>
            </th>
            <th className={`pricing-header-text ${planPeriod === 'monthly' ? 'offer' : ''} ${planType === 'indonesia' && planPeriod === "monthly" ? "offer-indo" : ""}`}>
              <div className='rupee'>{getAdvancePlanPrice(planType,planPeriod)}</div>
              <div className="amount-slash">
                <span className='rupee'>{getAdvancePlanSlashPrice()}</span>
              </div>
              <div>
                {planPeriod === "monthly" && (
                  <a target='_blank' href={getAdvanceButtonId(planType,planPeriod)} className="offer-price">
                    {"(Get at "}
                    <span className='rupee'>{getAdvancePlanOfferPrice(planType,planPeriod)}</span>
                    <br />
                    Limited offer*)
                  </a>
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="bold">Broadcasting</th>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Attachment</th>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Customisation</th>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Chat Support</th>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Caption</th>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Priority Support</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Call support</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">No minimum time gap</th>
            <td
              style={{
                whiteSpace: 'nowrap',
                fontSize: '12px',
                color: '#F44336',
                fontWeight: 'bold'
              }}
            >
              Fixed 30 secs
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Random time gap</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Batching</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Stop Campaign</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Group Contacts Export</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Quick Replies</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={check} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Multiple Attachments</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Schedule</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Zoom Call Support</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          <tr>
            <th className="bold">Business Chat Link</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <th>
              <img src={check} className="pricing-table-logo" />
            </th>
          </tr>
          {/*<tr>*/}
          {/*  <th className="bold">Download saved contacts</th>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <th className="coming_soon">Coming Soon</th>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <th className="bold">Download all chat's contacts</th>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <th className="coming_soon">Coming Soon</th>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <th className="bold">Filter Contacts</th>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <td className="coming_soon">Coming Soon</td>*/}
          {/*  <th className="coming_soon">Coming Soon</th>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <th className="bold">To do list</th>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <td className="coming_soon">Coming Soon</td>*/}
          {/*  <th className="coming_soon">Coming Soon</th>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <th className="bold">Advanced Group Download</th>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <td className="coming_soon">Coming Soon</td>*/}
          {/*  <th className="coming_soon">Coming Soon</th>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <th className="bold">Add reminder</th>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <td className="coming_soon">Coming Soon</td>*/}
          {/*  <th className="coming_soon">Coming Soon</th>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <th className="bold">Download Chat</th>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <td className="coming_soon">Coming Soon</td>*/}
          {/*  <th className="coming_soon">Coming Soon</th>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*  <th className="bold">Add notes to conversation</th>*/}
          {/*  <td>*/}
          {/*    <img src={cancel} className="pricing-table-logo" />*/}
          {/*  </td>*/}
          {/*  <td className="coming_soon">Coming Soon</td>*/}
          {/*  <th className="coming_soon">Coming Soon</th>*/}
          {/*</tr>*/}
          <tr>
            <th />
            <th />
            <th style={{ padding: '24px 0px', paddingBottom: 12 }}>
              <div style={{ width: '200px', margin: 'auto' }}>
                {showBasicButton()}
              </div>
            </th>
            <th style={{ padding: '24px 0px', paddingBottom: 12 }}>
              <div style={{ width: '200px', margin: 'auto' }}>
                {showAdvanceButton()}
              </div>
            </th>
          </tr>
          <tr>
            <th colSpan="4" style={{ color: '#C64A23', fontSize: '12px', textDecoration: 'underline', paddingBottom: 24, textAlign: 'center' }}>By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month.</th>
          </tr>
        </tbody>
      </table>
      <div style={{ fontSize: '12px', fontWeight: 'bold' }}>By purchasing the premium plan, you agree to our Terms and Service and Privacy Policy.</div>
    </div >
  );
}
