import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Slider from '../slider/slider';

// Plan price data

// Style
import './styles.scss';

import check from '../../svg/check.jpeg';
import cancel from '../../svg/cancel.png';
import screenshot from '../../svg/screenshot.png';
import large from '../../svg/large.png'

export default function Pricing() {
  const [planPeriod, setPlanPeriod] = useState('monthly');
  const [userPlanPeriod, setUserPlanPeriod] = useState('annually');
  const [planType, setPlanType] = useState('international');
  const [basicButton, setBasicButton] = useState('international');
  const [userFreeTrial,setUserFreeTrial] = useState(false)
  const [userPlanExpired,setUserPlanExpired] = useState(false)
  const [userCountry,setUserCountry] = useState('')
  const [isUserBasic,setIsUserBasic] = useState(false)
  const [isUserAdvance,setIsUserAdvance] = useState(false)

  const location = useLocation(); 
  const getParams = () => {
    const params = new URLSearchParams(location.search);
    const freeTrial = params.get('freeTrial');
    const planExpired = params.get('planExpired');
    const plan = params.get('plan')

    if (freeTrial) {
      setUserCountry(freeTrial);
      setUserFreeTrial(true)
      setUserPlanExpired(false)
    } else if (planExpired) {
      setUserCountry(planExpired);
      setUserFreeTrial(false)
      setUserPlanExpired(true)
    }
    if(plan==='basic'){
      setIsUserBasic(true)
      setIsUserAdvance(false)
    }else if(plan==='advance'){
      setIsUserAdvance(true)
      setIsUserBasic(false)
    }
  
    if (freeTrial || planExpired) {
      window.history.replaceState(null, '', window.location.pathname);
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

  function getAdvanceButtonId() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/fZeeVe1ZM30Aeo88wL' : 'https://buy.stripe.com/6oEcN6cEqat2gwg6or';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/28ocN6gUGcBa7ZKdQX' : 'https://buy.stripe.com/00g7sM7k6gRq3JufZ9';
    return planPeriod === 'monthly' ? 'https://buy.stripe.com/fZe7sMawi30Acg0bIZ' : 'https://razorpay.com/payment-button/pl_HyuXVKKhpfe28k/view';
  }

  function getAdvanceUserButtonId() {
    if (userCountry === 'international') {
      return userPlanPeriod === 'monthly' ? 'https://buy.stripe.com/fZeeVe1ZM30Aeo88wL' : 'https://buy.stripe.com/6oEcN6cEqat2gwg6or';
    }
    else if (userCountry === 'indonesia')
      return userPlanPeriod === 'monthly' ? 'https://buy.stripe.com/28ocN6gUGcBa7ZKdQX' : 'https://buy.stripe.com/00g7sM7k6gRq3JufZ9';
    return userPlanPeriod === 'monthly' ? 'https://buy.stripe.com/fZe7sMawi30Acg0bIZ' : 'https://razorpay.com/payment-button/pl_HyuXVKKhpfe28k/view';
  }

  function getBasicButtonId() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/4gwbJ25bYgRqa7S9AO' : 'https://buy.stripe.com/7sI4gAcEqeJi3JudQW';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/dR6dRa33Q7gQeo8eV2' : 'https://buy.stripe.com/fZe28s8oaat2a7S8wJ';
    return planPeriod === 'monthly' ? 'https://buy.stripe.com/00g7sMawi30A3JucN2' : 'https://razorpay.com/payment-button/pl_HyuSnC8BpjlWV7/view';
  }

  function getBasicUserButtonId() {
    if (userCountry === 'international') {
      return userPlanPeriod === 'monthly' ? 'https://buy.stripe.com/4gwbJ25bYgRqa7S9AO' : 'https://buy.stripe.com/7sI4gAcEqeJi3JudQW';
    }
    else if (userCountry === 'indonesia')
      return userPlanPeriod === 'monthly' ? 'https://buy.stripe.com/dR6dRa33Q7gQeo8eV2' : 'https://buy.stripe.com/fZe28s8oaat2a7S8wJ';
    return userPlanPeriod === 'monthly' ? 'https://buy.stripe.com/00g7sMawi30A3JucN2' : 'https://razorpay.com/payment-button/pl_HyuSnC8BpjlWV7/view';
  }

  function getBasicPlanPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$12.99' : '$129.99';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? 'IDR 79000' : 'IDR 790000';
    return planPeriod === 'monthly' ? '₹699' : '₹6999';
  }

  function getBasicPlanSlashPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$16.99' : '$169.99';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? '109000' : '1090000';
    return planPeriod === 'monthly' ? '₹999' : '₹9999';
  }

  function getBasicPlanOfferPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$9.09' : '';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? 'IDR 55300' : '';
    return planPeriod === 'monthly' ? '₹489' : '';
  }

  function getAdvancePlanPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$15.99' : '$159.99';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? 'IDR 99000' : 'IDR 990000';
    return planPeriod === 'monthly' ? '₹849' : '₹8499';
  }

  function getAdvancePlanOfferPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$11.19' : '';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? 'IDR 69300' : '';
    return planPeriod === 'monthly' ? '₹594' : '';
  }

  function getAdvancePlanSlashPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$20.99' : '$209.99';
    }
    else if (planType === 'indonesia')
      return planPeriod === 'monthly' ? '139000' : '1390000';
    return planPeriod === 'monthly' ? '₹1199' : '₹11999';
  }

  function getBasicUserFreeTrialMonthlyPrice() {
    if (userCountry === 'international') {
      return '$12.99' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 79000' 
    return '₹699'
  }

  function getBasicUserFreeTrialMonthlyOfferPrice() {
    if (userCountry === 'international') {
      return '$9.09' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 55300' 
    return '₹489'
  }

  function getBasicUserFreeTrialAnnuallyPrice(){
    if (userCountry === 'international') {
      return '$129.99' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 790000' 
    return '₹6999'
  }

  function getAdvanceUserFreeTrialMonthlyPrice() {
    if (userCountry === 'international') {
      return '$15.99' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 99000' 
    return '₹849'
  }

  function getAdvanceUserFreeTrialMonthlyOfferPrice() {
    if (userCountry === 'international') {
      return '$11.19' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 69300' 
    return '₹594'
  }

  function getAdvanceUserFreeTrialAnnuallyPrice(){
    if (userCountry === 'international') {
      return '$159.99' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 990000' 
    return '₹8499'
  }

  function getBasicUserPlanExpiredMonthlyPrice() {
    if (userCountry === 'international') {
      return '$12.99' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 79000' 
    return '₹699'
  }

  function getBasicUserPlanExpiredAnnuallyPrice(){
    if (userCountry === 'international') {
      return '$129.99' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 790000' 
    return '₹6999'
  }

  function getAdvanceUserPlanExpiredMonthlyPrice() {
    if (userCountry === 'international') {
      return '$15.99' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 99000' 
    return '₹849'
  }

  function getAdvanceUserPlanExpiredAnnuallyPrice(){
    if (userCountry === 'international') {
      return '$159.99' 
    }
    else if (userCountry === 'indonesia')
      return 'IDR 990000' 
    return '₹8499'
  }

  function getFreePlanPrice() {
    return planType === 'international' ? '$0.00' : '₹0';
  }

  function showBasicButton() {
    const button_id = getBasicButtonId();
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

  function showBasicUserButton() {
    const button_id = getBasicUserButtonId();
    let button_text = userFreeTrial ? 'Subscribe' : 'Buy'
    return (
      <a
        href={button_id}
        target="_blank">
        {button_text}
      </a>
    );
  }

  function showAdvanceButton() {
    const button_id = getAdvanceButtonId();
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

  function showAdvanceUserButton() {
    const button_id = getAdvanceUserButtonId();
    let button_text = userFreeTrial ? 'Subscribe' : 'Buy'
    return (
      <a
        href={button_id}
        target="_blank">
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

  return (
    <div className="pricing">
      {
        userFreeTrial && isUserBasic && <>
        <div className="pricing-popup-overlay"></div>
        <div className="pricing-popup">
          <div className="pricing-popup-header">
            <img src={large} alt="Prime-Sender" />
            <h1>Prime Sender <b>Basic Plan</b></h1>
          </div>
            <hr />
            <div className="pricing-popup-slider">
              <Slider offText="Basic Monthly Plan" onText="Basic Annual Plan" setValue={userTogglePeriod} />
            </div>
            <div className="pricing-popup-content">
              <div className="monthly-price">
               <span className="pricing-popup-slash-price"><span className='rupee'>{getBasicUserFreeTrialMonthlyPrice()}</span>/month</span> <br /> 
               <span className="pricing-popup-offer-price"><span className='rupee'>{getBasicUserFreeTrialMonthlyOfferPrice()}</span>*/month</span>
              </div>
              <div className="annual-price" style={{marginTop:'-22px'}}>
                {
                  userCountry==='indonesia' ? <span className='rupee'> {getBasicUserFreeTrialAnnuallyPrice()}({
                    (getBasicUserFreeTrialAnnuallyPrice().substring(0,4)) + Math.floor((getBasicUserFreeTrialAnnuallyPrice().substring(4) / 12))
                    }/month)</span> :
                  <span className='rupee' style={{marginRight:'30px'}}> {getBasicUserFreeTrialAnnuallyPrice()}({
                    (getBasicUserFreeTrialAnnuallyPrice().substring(0,1)) + Math.floor((getBasicUserFreeTrialAnnuallyPrice().substring(1) / 12))
                    }/month)</span>
                }
              </div>
            </div>
            <div className="pricing-popup-btn">
              <button>{showBasicUserButton()}</button>
            </div>
            <div className="pricing-popup-footer">
                <div className="pricing-popup-footer-icon"><span>i</span></div>
                <div className="pricing-popup-footer-content">
                  <span>*Discount applicable for the first month</span>
                  By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month. By purchasing the premium plan, you agree to our Terms of Service and Privacy Policy
                </div>
            </div>
        </div>
      </>
      }

      {
        userPlanExpired && isUserBasic && <>
        <div className="pricing-popup-overlay"></div>
              <div className="pricing-popup" style={{background:'#EDF9F3'}}>
                <div className="pricing-popup-header">
                  <img src={large} alt="Prime-Sender" />
                  <h1>Prime Sender <b>Basic Plan</b></h1>
                </div>
                  <hr />
                  <div className="pricing-popup-slider">
                    <Slider offText="Basic Monthly Plan" onText="Basic Annual Plan" setValue={userTogglePeriod} />
                  </div>
                  <div className="pricing-popup-content">
                    <div className="monthly-price">
                      <span className='rupee'>{getBasicUserPlanExpiredMonthlyPrice()}</span>/month
                    </div>
                    <div className="annual-price">
                    {
                      userCountry==='indonesia' ? <span className='rupee'> {getBasicUserPlanExpiredAnnuallyPrice()}({
                        (getBasicUserPlanExpiredAnnuallyPrice().substring(0,4)) + Math.floor((getBasicUserPlanExpiredAnnuallyPrice().substring(4) / 12))
                        }/month)</span> :
                      <span className='rupee' style={{marginRight:'30px'}}> {getBasicUserPlanExpiredAnnuallyPrice()}({
                        (getBasicUserPlanExpiredAnnuallyPrice().substring(0,1)) + Math.floor((getBasicUserPlanExpiredAnnuallyPrice().substring(1) / 12))
                        }/month)</span>
                    }
                    </div>
                  </div>
                  <div className="pricing-popup-btn">
                    <button>{showBasicUserButton()}</button>
                  </div>
                  <div className="pricing-popup-footer">
                      <div className="pricing-popup-footer-icon"><span>i</span></div>
                      <div className="pricing-popup-footer-content">
                        <span></span>
                        {
                          userPlanPeriod==='monthly'? "By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month. By purchasing the premium plan, you agree to our Terms of Service and Privacy Policy" : "By purchasing the premium plan, you agree to our Terms of Service and Privacy Policy"
                        }
                      </div>
                  </div>
              </div>
        </>
      }

      {
        userFreeTrial && isUserAdvance && <>
        <div className="pricing-popup-overlay"></div>
        <div className="pricing-popup">
          <div className="pricing-popup-header">
            <img src={large} alt="Prime-Sender" />
            <h1>Prime Sender <b>Advance Plan</b></h1>
          </div>
            <hr />
            <div className="pricing-popup-slider">
              <Slider offText="Basic Monthly Plan" onText="Basic Annual Plan" setValue={userTogglePeriod} />
            </div>
            <div className="pricing-popup-content">
              <div className="monthly-price">
               <span className="pricing-popup-slash-price"><span className='rupee'>{getAdvanceUserFreeTrialMonthlyPrice()}</span>/month</span> <br /> 
               <span className="pricing-popup-offer-price"><span className='rupee'>{getAdvanceUserFreeTrialMonthlyOfferPrice()}</span>*/month</span>
              </div>
              <div className="annual-price" style={{marginTop:'-22px'}}>
                  {
                    userCountry==='indonesia' ? <span className='rupee'> {getAdvanceUserFreeTrialAnnuallyPrice()}({
                      (getAdvanceUserFreeTrialAnnuallyPrice().substring(0,4)) + Math.floor((getAdvanceUserFreeTrialAnnuallyPrice().substring(4) / 12))
                      }/month)</span> :
                    <span className='rupee' style={{marginRight:'30px'}}> {getAdvanceUserFreeTrialAnnuallyPrice()}({
                      (getAdvanceUserFreeTrialAnnuallyPrice().substring(0,1)) + Math.floor((getAdvanceUserFreeTrialAnnuallyPrice().substring(1) / 12))
                      }/month)</span>
                  }
              </div>
            </div>
            <div className="pricing-popup-btn">
              <button>{showAdvanceUserButton()}</button>
            </div>
            <div className="pricing-popup-footer">
                <div className="pricing-popup-footer-icon"><span>i</span></div>
                <div className="pricing-popup-footer-content">
                  <span>*Discount applicable for the first month</span>
                  By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month. By purchasing the premium plan, you agree to our Terms of Service and Privacy Policy
                </div>
            </div>
        </div>
      </>
      }

      {
        userPlanExpired && isUserAdvance && <>
        <div className="pricing-popup-overlay"></div>
              <div className="pricing-popup" style={{background:'#EDF9F3'}}>
                <div className="pricing-popup-header">
                  <img src={large} alt="Prime-Sender" />
                  <h1>Prime Sender <b>Advance Plan</b></h1>
                </div>
                  <hr />
                  <div className="pricing-popup-slider">
                    <Slider offText="Basic Monthly Plan" onText="Basic Annual Plan" setValue={userTogglePeriod} />
                  </div>
                  <div className="pricing-popup-content">
                    <div className="monthly-price">
                      <span className='rupee'>{getAdvanceUserPlanExpiredMonthlyPrice()}</span>/month
                    </div>
                    <div className="annual-price">
                    {
                      userCountry==='indonesia' ? <span className='rupee'> {getAdvanceUserPlanExpiredAnnuallyPrice()}({
                        (getAdvanceUserPlanExpiredAnnuallyPrice().substring(0,4)) + Math.floor((getAdvanceUserPlanExpiredAnnuallyPrice().substring(4) / 12))
                        }/month)</span> :
                      <span className='rupee' style={{marginRight:'30px'}}> {getAdvanceUserPlanExpiredAnnuallyPrice()}({
                        (getAdvanceUserPlanExpiredAnnuallyPrice().substring(0,1)) + Math.floor((getAdvanceUserPlanExpiredAnnuallyPrice().substring(1) / 12))
                        }/month)</span>
                    }
                    </div>
                  </div>
                  <div className="pricing-popup-btn">
                    <button>{showAdvanceUserButton()}</button>
                  </div>
                  <div className="pricing-popup-footer">
                      <div className="pricing-popup-footer-icon"><span>i</span></div>
                      <div className="pricing-popup-footer-content">
                        <span></span>
                        {
                          userPlanPeriod==='monthly'? "By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month. By purchasing the premium plan, you agree to our Terms of Service and Privacy Policy" : "By purchasing the premium plan, you agree to our Terms of Service and Privacy Policy"
                        }
                      </div>
                  </div>
              </div>
        </>
      }

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
            <th className="pricing-header-text" style={{ padding: '24px 48px 12px !important' }}>Advance</th>
          </tr>
          <tr>
            <th />
            <th />
            <th colSpan={2} style={{ padding: '24px 0px' }}>
              <Slider onText="Monthly" offText="Annually" setValue={togglePeriod} />
            </th>
          </tr>
          <tr>
            <th />
            <th className="pricing-header-text rupee free">{getFreePlanPrice()}</th>
            <th className={`pricing-header-text ${planPeriod === 'monthly' ? 'offer' : ''} ${planType === 'indonesia' && planPeriod === "monthly" ? "offer-indo" : ""}`}>
              <div className='rupee'>{getBasicPlanPrice()}</div>
              <div className="amount-slash">
                <span className='rupee'>{getBasicPlanSlashPrice()}</span>
              </div>
              <div>
                {planPeriod === "monthly" && (
                  <a target='_blank' href={getBasicButtonId()} className="offer-price">
                    {"(Get at "}
                    <span className='rupee'>{getBasicPlanOfferPrice()}</span>
                    <br />
                    Limited offer*)
                  </a>
                )}
              </div>
            </th>
            <th className={`pricing-header-text ${planPeriod === 'monthly' ? 'offer' : ''} ${planType === 'indonesia' && planPeriod === "monthly" ? "offer-indo" : ""}`}>
              <div className='rupee'>{getAdvancePlanPrice()}</div>
              <div className="amount-slash">
                <span className='rupee'>{getAdvancePlanSlashPrice()}</span>
              </div>
              <div>
                {planPeriod === "monthly" && (
                  <a target='_blank' href={getAdvanceButtonId()} className="offer-price">
                    {"(Get at "}
                    <span className='rupee'>{getAdvancePlanOfferPrice()}</span>
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
            <th className="bold">Multiple Attachments</th>
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
            <th className="bold">Stop</th>
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
