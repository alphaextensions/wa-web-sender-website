import React, { useState } from 'react';

// Components
import Slider from '../slider/slider';

// Plan price data

// Style
import './styles.scss';

import check from '../../svg/check.png';
import cancel from '../../svg/cancel.png';
import screenshot from '../../svg/screenshot.png';

export default function Pricing() {
  const [planPeriod, setPlanPeriod] = useState('monthly');
  const [planType, setPlanType] = useState('international');
  const [basicButton, setBasicButton] = useState('international');

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

  function toggleType(sliderValue) {
    sliderValue ? setPlanType('international') : setPlanType('indian');
  }

  function getAdvanceButtonId() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/fZeeVe1ZM30Aeo88wL' : 'https://buy.stripe.com/6oEcN6cEqat2gwg6or';
    }
    else if(planType === 'indonesia')
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/28ocN6gUGcBa7ZKdQX' : 'https://buy.stripe.com/00g7sM7k6gRq3JufZ9';
    return planPeriod === 'monthly' ? 'https://buy.stripe.com/fZe7sMawi30Acg0bIZ' : 'https://razorpay.com/payment-button/pl_HyuXVKKhpfe28k/view';
  }

  function getBasicButtonId() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/4gwbJ25bYgRqa7S9AO' : 'https://buy.stripe.com/7sI4gAcEqeJi3JudQW';
    }
    else if(planType === 'indonesia')
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/dR6dRa33Q7gQeo8eV2' : 'https://buy.stripe.com/fZe28s8oaat2a7S8wJ';
    return planPeriod === 'monthly' ? 'https://buy.stripe.com/00g7sMawi30A3JucN2' : 'https://razorpay.com/payment-button/pl_HyuSnC8BpjlWV7/view';
  }

  function getBasicPlanPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$12.99' : '$129.99';
    }
    else if(planType === 'indonesia')
      return planPeriod === 'monthly' ? 'IDR 79000' : 'IDR 790000';
    return planPeriod === 'monthly' ? '₹699' : '₹6999';
  }

  function getBasicPlanSlashPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$16.99' : '$169.99';
    }
    else if(planType === 'indonesia')
      return planPeriod === 'monthly' ? '109000' : '1090000';
    return planPeriod === 'monthly' ? '₹999' : '₹9999';
  }

  function getAdvancePlanPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$15.99' : '$159.99';
    }
    else if(planType === 'indonesia')
      return planPeriod === 'monthly' ? 'IDR 99000' : 'IDR 990000';
    return planPeriod === 'monthly' ? '₹849' : '₹8499';
  }

  function getAdvancePlanSlashPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$20.99' : '$209.99';
    }
    else if(planType === 'indonesia')
      return planPeriod === 'monthly' ? '139000' : '1390000';
    return planPeriod === 'monthly' ? '₹1199' : '₹11999';
  }

  function getFreePlanPrice(){
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

  function renderResultTabs() {
    var india = (planType == "india") ? 'active' : '';
    var indonesia = (planType == "indonesia") ? 'active' : '';
    var international = (planType == "international") ? 'active' : '';
    return (
        <div className="newsfeed_tabs">
          <div onClick={() => setPlanType('india')} className={india} style={{padding: '16px 0px', textAlign: 'center', width: '33%'}}>India</div>
          <div onClick={() => setPlanType('indonesia')} className={indonesia} style={{padding: '16px 0px', textAlign: 'center', width: '33%'}}>Indonesia</div>
          <div onClick={() => setPlanType('international')} className={international} style={{padding: '16px 0px', textAlign: 'center', width: '33%'}}>International</div>
        </div>
    );
  }

  return (
    <div className="pricing">
      <h1 className="price-header">Our Pricing</h1>
      <div style={{background: '#1E4F29', borderRadius: '5px', textAlign: 'center', color: '#fff', padding: '12px', width: '100%', maxWidth: '980px', fontWeight: 'bold', fontSize: '20px'}}>
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
            <th className="pricing-header-text" style={{padding: '24px 48px 12px !important'}}>Free</th>
            <th className="pricing-header-text" style={{padding: '24px 48px 12px !important'}}>Basic</th>
            <th className="pricing-header-text" style={{padding: '24px 48px 12px !important'}}>Advance</th>
          </tr>
          <tr>
            <th />
            <th />
            <th style={{padding: '24px 0px'}}>
              <Slider onText="Monthly" offText="Annually" setValue={togglePeriod} />
            </th>
            <th />
          </tr>
          <tr>
            <th />
            <th className="pricing-header-text">{getFreePlanPrice()}</th>
            <th className="pricing-header-text">
              <div>{getBasicPlanPrice()}</div>
              <div className="amount-slash">
                <span>{getBasicPlanSlashPrice()}</span>
              </div>
            </th>
            <th className="pricing-header-text">
              <div>{getAdvancePlanPrice()}</div>
              <div className="amount-slash">
                <span>{getAdvancePlanSlashPrice()}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="bold">Broadcasting</th>
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
            <th className="bold">Attachment</th>
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
            <th className="bold">Customisation</th>
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
            <th className="bold">Chat Support</th>
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
            <th colspan="4" style={{color: '#C64A23', fontSize: '12px', textDecoration: 'underline', paddingBottom: 24, textAlign: 'center'}}>By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month.</th>
          </tr>
        </tbody>
      </table>
      <div style={{fontSize: '12px', fontWeight: 'bold'}}>By purchasing the premium plan, you agree to our Terms and Service and Privacy Policy.</div>
    </div>
  );
}
