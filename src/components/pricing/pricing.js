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
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/cN2aEY7k658I7ZKbIN' : 'https://buy.stripe.com/6oEcN6cEqat2gwg6or';
    }
    return planPeriod === 'monthly' ? 'https://razorpay.com/payment-button/pl_I7DCoIINFHc2Ar/view' : 'https://razorpay.com/payment-button/pl_HyuXVKKhpfe28k/view';
  }

  function getBasicButtonId() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? 'https://buy.stripe.com/8wM4gA33QeJi6VG6os' : 'https://buy.stripe.com/7sI4gAcEqeJi3JudQW';
    }
    return planPeriod === 'monthly' ? 'https://razorpay.com/payment-button/pl_I7D9RHEnkdeDyf/view' : 'https://razorpay.com/payment-button/pl_HyuSnC8BpjlWV7/view';
  }

  function getBasicPlanPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$12.99' : '$129.99';
    }
    return planPeriod === 'monthly' ? '₹699' : '₹6999';
  }

  function getAdvancePlanPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$15.99' : '$159.99';
    }
    return planPeriod === 'monthly' ? '₹849' : '₹8499';
  }

  function getFreePlanPrice(){
    return planType === 'international' ? '$0.00' : '₹0';
  }

  function showBasicButton() {
    const button_id = getBasicButtonId();
    return (
        <a
            href={button_id}
            target="_blank"
            className="buy_button">
          Buy Basic
        </a>
    );
  }

  function showAdvanceButton() {
    const button_id = getAdvanceButtonId();
    return (
        <a
            href={button_id}
            target="_blank"
            className="buy_button">
          Buy Advance
        </a>
    );
  }

  return (
    <div className="pricing">
      <h1 className="price-header">Our Pricing</h1>
      {/*<div>Early Bird offers with 30% discount!</div>*/}
      <Slider
        style={{ marginTop: '24px' }}
        onText="International"
        offText="India"
        setValue={toggleType}
      />
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
            <th className="pricing-header-text">{getBasicPlanPrice()}</th>
            <th className="pricing-header-text">{getAdvancePlanPrice()}</th>
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
          <tr>
            <th className="bold">Download saved contacts</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th className="bold">Download all chat's contacts</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th className="bold">Filter Contacts</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th className="bold">To do list</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th className="bold">Advanced Group Download</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th className="bold">Add reminder</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th className="bold">Download Chat</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th className="bold">Add notes to conversation</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th />
            <th />
            <th style={{ padding: '24px 0px' }}>
              <div style={{ width: '200px', margin: 'auto' }}>
                {showBasicButton()}
              </div>
            </th>
            <th style={{ padding: '24px 0px' }}>
              <div style={{ width: '200px', margin: 'auto' }}>
                {showAdvanceButton()}
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <div style={{fontSize: '12px', fontWeight: 'bold'}}>By purchasing the premium plan, you agree to our Terms and Service and Privacy Policy.</div>
    </div>
  );
}
