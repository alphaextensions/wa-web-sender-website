import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
// import '../css/main_css.scss';

// undraw_attached_file_n4wm.png
// undraw_Images_re_0kll.png
// undraw_Spreadsheet_re_cn18.png
// undraw_text_field_htlv.png
import service3 from '../svg/undraw_attached_file_n4wm.png';
// import SvgCharts from '../svg/undraw_Images_re_0kll.png';
import service2 from '../svg/undraw_Spreadsheet_re_cn18.png';
import service1 from '../svg/undraw_text_field_htlv.png';
import screenshot from '../svg/screenshot.png';
import Ucard from '../components/howToUseCard';
import image1 from '../svg/howToUse1.png';
import image2 from '../svg/howToUse2.png';
import image3 from '../svg/howToUse3.png';
import report from '../svg/report.png';
import attachment from '../svg/attached.png';
import customize from '../svg/message-customize.png';
import schedule from '../svg/schedule.png';
import speed from '../svg/high-speed.png';
import support from '../svg/check.png';
import excel from '../svg/excel.png';
import download from '../svg/file.png';
import format from '../svg/message-formatting.png';
import preview from '../svg/excel preview.png';
import notification from '../svg/notification.png';
import '../css/index.css'

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Best Extension for your business
          </h1>
          <p className="mt-8 md:mt-12">
            <a
              href="https://chrome.google.com/webstore/detail/wa-web-sender/klfaghfflijdgoljefdlofkoinndmpia?src=website"
              target="_blank"
              style={{
                backgroundColor: '#009a88',
                color: '#fff',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                paddingLeft: '3rem',
                paddingRight: '3rem',
                borderRadius: '0.25rem'
              }}
            >
              Download Now
            </a>
          </p>
          <p
            className="text-2xl mt-8"
            style={{ marginRight: '24px', fontWeight: '100', fontSize: '1.4rem' }}
          >
            Best productivity and communication tool for business. Prime Sender is the best google
            chrome extension to enhance your business. It is the currently the highest rated and the
            best tool on the chrome webstore.
            <br />
            <br />
          </p>

          <p className="text-2xl">Lifetime Offer : Basic Features FREE FOREVER!</p>
          {/*<p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>*/}
        </div>
        <div className="lg:w-1/2">
          <img src={screenshot} style={{ width: '100%' }} />
        </div>
      </div>
    </section>
    <section
      id="working"
      style={{ paddingTop: '12rem' }}
      onLoad={() => {
        if (localStorage.getItem('howToUse') == 1) {
          localStorage.setItem('howToUse', 0);
          document.querySelector('#working').scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
          });
        }
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">How to Use</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
                flexWrap: 'wrap'
              }}
            >
              <Ucard
                imgSrc={image3}
                title="Step1: Upload"
                description="Enter the numbers you want to send the message to, separated by comma."
              />
              <Ucard
                imgSrc={image1}
                title="Step2: Send Message"
                description="Enter the message that you'd like to send. You could also add an attachment.
                Click on 'Add Attachment' >> Click on 'Image/Video/Document' >> Select the file you'd like to send >> The first message would be sent to you itself >> Once it is sent, open the extension and click on 'Send Message'. The messages along with the file will be sent one by one."
              />
              <Ucard
                imgSrc={image2}
                title="Step3: Download Report"
                description="Download the delivery report by clicking on 'Delivery Report' to view the delivery status of the messages and the attachment sent."
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" style={{ paddingTop: '8rem' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={report}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Report
                </p>
              </div>
              <p className="mt-4">
                Get a detailed report of your campaigns to improve sales and utilize Prime Sender to
                the fullest
                {/* Get a detailed report of your campaigns and promotions to improve sales and utilize Web Sender to the fullest */}
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div
                className="container"
                style={{ display: 'flex', justifyContent: 'center', padding: '0px 10px' }}
              >
                <img
                  src={attachment}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  File Attachment
                </p>
              </div>
              <p className="mt-4">
                You can attach and send images, document, videos, etc along with your message to
                users
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={customize}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Customise your message
                </p>
              </div>
              <p className="mt-4">
                You can customise your message according to the customer with their name, email,
                order number,etc
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={schedule}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Schedule your message
                </p>
              </div>
              <p className="mt-4">
                You can schedule at what time to send your messages to users and your messages would
                be sent automatically at the set time
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={speed}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Quick Response
                </p>
              </div>
              <p className="mt-4">
                You can respond to your customers quickly, with pre-saved responses
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={support}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Active support
                </p>
              </div>
              <p className="mt-4">
                You can click on 'Live Support' on the extension to get your queries resolved. We
                also provide call and video support.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={excel}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Upload excel of numbers
                </p>
              </div>
              <p className="mt-4">
                You can directly upload an excel sheet of numbers you want to send your message to
                without having to type or copy paste
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={download}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Download contacts from group
                </p>
              </div>
              <p className="mt-4">
                You can get a detailed download of all the contacts from a group including the ones
                you have not saved
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={format}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Message Formatting
                </p>
              </div>
              <p className="mt-4">
                You can format your message - BOLD, italic, strikethrough and Emojis
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={preview}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Real Time excel preview
                </p>
              </div>
              <p className="mt-4">Get a real time preview of uploaded CSV of numbers</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={notification}
                  style={{
                    display: 'inline-block',
                    width: '2em',
                    marginLeft: '-10px',
                    height: '2em'
                  }}
                ></img>
                <p
                  className="font-semibold text-xl"
                  style={{ display: 'inline-block', padding: '0px 10px' }}
                >
                  Real time notification
                </p>
              </div>
              <p className="mt-4">Get real time update via notifications</p>
            </Card>
          </div>
          <div className="flex-1 px-3"></div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48" style={{ paddingBottom: '0px' }}>
          <h3 className="text-3xl font-semibold leading-tight">
            Send broadcast messages in a few clicks
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Prime Sender lets you broadcast messages to users according to your customization. This
            can be done in a few clicks and the messages will be send in a few seconds.
          </p>
        </div>
      }
      secondarySlot={<img src={service1} alt="PS" />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48" style={{ paddingBottom: '0px' }}>
          <h3 className="text-3xl font-semibold leading-tight">Import CSV</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Ability to import csv of numbers.
          </p>
        </div>
      }
      secondarySlot={<img src={service2} alt="PS" />}
    />
    <SplitSection
      id="third"
      primarySlot={
          <div className="lg:pr-32 xl:pr-48" style={{ paddingBottom: '0px' }}>
            <h3 className="text-3xl font-semibold leading-tight">Add Attachment</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Add and send attachments including photos, videos, contacts, document,etc. This way
              you can send promotional posters to you customers and be connected.
            </p>
          </div>
      }
      secondarySlot={<img src={service3} alt="PS" />}
    />
    <section id="stats" style={{ paddingTop: '8rem' }}>
      <div class="container mx-auto text-center">
        <p class="uppercase tracking-wider" style={{ color: '#718096' }}>
          Our Numbers speak for themselves
        </p>
        <div class="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div
            class="w-full sm:w-1/3"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >
            <p
              class="text-4xl lg:text-6xl font-semibold"
              style={{ color: 'rgb(0 154 136)', fontSize: '4rem', marginBottom: '20px' }}
            >
              50,000+
            </p>
            <p class="font-semibold mb-6">Users</p>
          </div>
          <div
            class="w-full sm:w-1/3"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >
            <p
              class="text-4xl lg:text-6xl font-semibold"
              style={{ color: 'rgb(0 154 136)', fontSize: '4rem', marginBottom: '20px' }}
            >
              4.6/5
            </p>
            <p class="font-semibold mb-6">Users Ratings</p>
          </div>
          <div
            class="w-full sm:w-1/3"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >
            <p
              class="text-4xl lg:text-6xl font-semibold"
              style={{ color: 'rgb(0 154 136)', fontSize: '4rem', marginBottom: '20px' }}
            >
              Rank 1
            </p>
            <p class="font-semibold mb-6">Sender on Google Chrome Web Store</p>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" style={{ paddingTop: '8rem' }}>
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
