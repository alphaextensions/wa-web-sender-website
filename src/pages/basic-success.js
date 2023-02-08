import React from 'react';
import { Helmet } from 'react-helmet';
import ws from '../svg/medium.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';
import check from '../svg/check.jpeg';
import cancel from '../svg/cancel.png';

function BasicSuccessPage() {
    const title =
        'Basic Success | Prime Sender';
    const description =
        'Basic Success for Prime Sender';
    return (
        <React.Fragment>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="title" property="og:title" content={title} />
                <meta name="description" content={description} />
                <link rel="icon" type="image/png" href={ws} />
                <meta name="image" property="og:image" content={ws} />
                <meta name="image" content={ws} />
            </Helmet>
            <SmallHeader/>
            <section className="container mx-auto px-8" >
                <div style={{color: '#009A88', fontSize: '28px', fontWeight: 'bold', margin: '32px auto', textAlign: 'center'}}>Congrats! You have successfully purchased PS Premium</div>
                <div style={{color: '#009A88', fontSize: '16px', textAlign: 'center'}}>Please reload WhatsApp Web after 10 minutes to activate Premium. You will receive a confirmation email soon.</div>
                <div style={{color: '#009A88', fontSize: '12px', textAlign: 'center', marginTop: '8px'}}>If Premium is not enabled, do not worry. Please click on 'Live Support' button on the top left of the extension.</div>
                <div style={{color: '#009A88', fontSize: '28px', fontWeight: 'bold', margin: '32px auto', textAlign: 'center'}}>Features</div>
                <div style={{width: '640px', margin: 'auto'}}>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Broadcasting</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Attachment</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Customisation</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Chat Support</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Priority Support</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Call support</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>No minimum time gap</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Random time gap</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Batching</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Group Contacts Export</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Quick Replies</div>
                        <img style={{float: 'right'}} src={check} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Schedule</div>
                        <img style={{float: 'right'}} src={cancel} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>Zoom call support</div>
                        <img style={{float: 'right'}} src={cancel} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    <div className="features_row">
                        <div style={{float: 'left'}}>WhatsApp Chat Link</div>
                        <img style={{float: 'right'}} src={cancel} className="pricing-table-logo" />
                        <div style={{clear: 'both'}}></div>
                    </div>
                    {/*<div className="features_row">*/}
                    {/*    <div style={{float: 'left'}}>Download chat</div>*/}
                    {/*    <div style={{float: 'right'}}>Coming Soon</div>*/}
                    {/*    <div style={{clear: 'both'}}></div>*/}
                    {/*</div>*/}
                    {/*<div className="features_row">*/}
                    {/*    <div style={{float: 'left'}}>Download all chat’s contacts</div>*/}
                    {/*    <div style={{float: 'right'}}>Coming Soon</div>*/}
                    {/*    <div style={{clear: 'both'}}></div>*/}
                    {/*</div>*/}
                    {/*<div className="features_row">*/}
                    {/*    <div style={{float: 'left'}}>Download saved contacts</div>*/}
                    {/*    <div style={{float: 'right'}}>Coming Soon</div>*/}
                    {/*    <div style={{clear: 'both'}}></div>*/}
                    {/*</div>*/}
                    {/*<div className="features_row">*/}
                    {/*    <div style={{float: 'left'}}>Advanced Group Download</div>*/}
                    {/*    <div style={{float: 'right'}}>Coming Soon</div>*/}
                    {/*    <div style={{clear: 'both'}}></div>*/}
                    {/*</div>*/}
                    {/*<div className="features_row">*/}
                    {/*    <div style={{float: 'left'}}>Add notes to conversation</div>*/}
                    {/*    <div style={{float: 'right'}}>Coming Soon</div>*/}
                    {/*    <div style={{clear: 'both'}}></div>*/}
                    {/*</div>*/}
                    {/*<div className="features_row">*/}
                    {/*    <div style={{float: 'left'}}>Add Reminder</div>*/}
                    {/*    <div style={{float: 'right'}}>Coming Soon</div>*/}
                    {/*    <div style={{clear: 'both'}}></div>*/}
                    {/*</div>*/}
                    {/*<div className="features_row">*/}
                    {/*    <div style={{float: 'left'}}>To Do List</div>*/}
                    {/*    <div style={{float: 'right'}}>Coming Soon</div>*/}
                    {/*    <div style={{clear: 'both'}}></div>*/}
                    {/*</div>*/}
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default BasicSuccessPage;
