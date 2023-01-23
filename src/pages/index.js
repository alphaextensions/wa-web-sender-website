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


export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            #1 Extension for your business
          </h1>
          {/* <p className="text-xl lg:text-2xl mt-6 font-light">
            Broadcast messages to users simply & efficiently
          </p> */}
          <p className="mt-8 md:mt-12">
            <Button size="lg" link="https://chrome.google.com/webstore/detail/wa-web-sender/klfaghfflijdgoljefdlofkoinndmpia?src=website">Download Now</Button>
          </p>
          <p className="text-2xl mt-8" style={{marginRight: '24px'}}>Prime Sender is the best google chrome extension to enhance your business. It is the currently the highest rated and the best tool on the chrome webstore. Download now! <br/><br/>

            Lifetime Offer : Basic Features FREE FOREVER!</p>
        </div>
        <div className="lg:w-1/2">
          <img src={screenshot} style={{width: '100%'}}/>
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Customisation</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Add attachment</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Download delivery report</p>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Extremely swift and quick customer service</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Schedule</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Respond to your customers with quick replies</p>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Business Chat Link for your website</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Real time update via notifications</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">No Software Installation Needed</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    {/* <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Send broadcast messages in a few clicks</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Prime Sender lets you broadcast messages to users according to your customization.
            This can be done in a few clicks and the messages will be send in a few seconds.
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
            Import CSV
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Ability to import csv of numbers.
          </p>
        </div>
      }
      secondarySlot={<img src={service2} alt="WS" />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Add Attachment
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Add and send attachments including photos, videos, contacts, document,etc.
            This way you can send promotional posters to you customers and be connected.
          </p>
        </div>
      }
      secondarySlot={<img src={service3} alt="WS" />}
    /> */}
  </Layout>
);
