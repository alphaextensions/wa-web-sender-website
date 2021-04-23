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

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            #1 Extension to broadcast WhatsApp messages
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Send customizable messages to your customers in a single go without having to save their contact details
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg" link="https://chrome.google.com/webstore/detail/wa-web-sender/klfaghfflijdgoljefdlofkoinndmpia?src=website">Get Started</Button>
          </p>
          {/*<p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>*/}
        </div>
        <div className="lg:w-1/2">
          <iframe
                  className="youtube-iframe"
                  style={{height: '364px',
                    width: '100%',
                    margin: 'auto',
                    padding: '24px'}}
                  src="https://drive.google.com/file/d/1P7R7I-53Pn6GCG9O1sPAU5YLo5l6938Z/preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="WA Web Sender Demo"
          ></iframe>
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Report</p>
              <p className="mt-4">
                Get a detailed report of your campaigns and promotions to improve sales and utilize WAS to the fullest
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">File Attachment</p>
              <p className="mt-4">
                You can attach and send images, document, videos, etc along with your message to your customers
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">No need to save contacts</p>
              <p className="mt-4">
                You can send messages to contacts without saving them
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Upload excel of numbers</p>
              <p className="mt-4">
                You can directly upload an excel sheet of numbers you want to send your message to without having to type or copy paste
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Download contacts from group</p>
              <p className="mt-4">
                You can download all the contacts from a group including the ones you have not saved
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Message Formatting</p>
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
              <p className="font-semibold text-xl">Real Time excel preview</p>
              <p className="mt-4">
                Get a real time preview of uploaded CSV of numbers
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Real time notification</p>
              <p className="mt-4">
                Get a real time update via notifications
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Active support</p>
              <p className="mt-4">
                Your queries are answered in a matter of a day or less. You can also contact us on WhatsApp given below
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Send messages in bulk in a few clicks</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            WhatsApp bulk Sender lets you send messages in bulk to your customers according to your customization.
            This can be done in a few clicks and the messages will be send in a few seconds. You can thus promote and increase your business with minimal effort
          </p>
        </div>
      }
      secondarySlot={<img src={service1} alt="WS" />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Import your contacts via CSV
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            You can just import the contacts you want to send the messages to, via a CSV.
            You do not need to save the contacts before sending messages.
          </p>
        </div>
      }
      secondarySlot={<img src={service2} alt="WS" />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Send Photos with ease
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            WAS lets you send images and other attachments to you contacts all at once.
            This way you can send promotional posters to you customers and be connected.
          </p>
        </div>
      }
      secondarySlot={<img src={service3} alt="WS" />}
    />
  </Layout>
);
