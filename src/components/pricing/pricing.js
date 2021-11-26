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
      return planPeriod === 'monthly' ? 'pl_I0B8PGRZZSSZee' : 'pl_I0BHMbiadHeBLV';
    }
    return planPeriod === 'monthly' ? 'pl_HyXXWJfzvsmVH4' : 'pl_HyuXVKKhpfe28k';
  }

  function getBasicButtonId() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? 'pl_I0B4TeRuHo2Wln' : 'pl_I0BCjM0zwX6Tw4';
    }
    return planPeriod === 'monthly' ? 'pl_HyThizWtcY5IQI' : 'pl_HyuSnC8BpjlWV7';
  }

  function getBasicPlanPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$9' : '$90';
    }
    return planPeriod === 'monthly' ? '₹699' : '₹6999';
  }

  function getAdvancePlanPrice() {
    if (planType === 'international') {
      return planPeriod === 'monthly' ? '$12' : '$120';
    }
    return planPeriod === 'monthly' ? '₹849' : '₹8499';
  }

  function showBasicButton() {
    const button_id = getBasicButtonId();
    return (
        <a
            href={`https://razorpay.com/payment-button/${button_id}/view`}
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
            href={`https://razorpay.com/payment-button/${button_id}/view`}
            target="_blank"
            className="buy_button">
          Buy Advance
        </a>
    );
  }

  return (
    <div className="pricing">
      <h1 className="price-header">Our Pricing</h1>

      <Slider
        style={{ paddingLeft: '48px', marginTop: '24px' }}
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
            <th />
            <th className="pricing-header-text">{getBasicPlanPrice()}</th>
            <th className="pricing-header-text">{getAdvancePlanPrice()}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Broadcasting</th>
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
            <th>Attachment</th>
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
            <th>Customisation</th>
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
            <th>Chat Support</th>
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
            <th>Priority Support</th>
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
            <th>Call support</th>
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
            <th>No minimum time gap</th>
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
            <th>Random time gap</th>
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
            <th>Batching</th>
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
            <th>Group Contacts Export</th>
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
            <th>Quick Replies</th>
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
            <th>Schedule</th>
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
            <th>Zoom Call Support</th>
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
            <th>Business Chat Link</th>
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
            <th>Download saved contacts</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th>Download all chat's contacts</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th>Filter Contacts</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th>To do list</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th>Advanced Group Download</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th>Add reminder</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th>Download Chat</th>
            <td>
              <img src={cancel} className="pricing-table-logo" />
            </td>
            <td className="coming_soon">Coming Soon</td>
            <th className="coming_soon">Coming Soon</th>
          </tr>
          <tr>
            <th>Add notes to conversation</th>
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
    </div>
  );
}