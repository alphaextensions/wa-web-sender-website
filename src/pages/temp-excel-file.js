import React from 'react';
import Layout from "../components/layout/Layout";
import LogoIcon from "../svg/LogoIcon";
import { Helmet } from 'react-helmet';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../components/Button";
import ws from '../svg/medium.png';
import SmallHeader from '../components/layout/SmallHeader';
import Footer from '../components/layout/Footer';


function TempExcelFile() {
    const title =
        'Template File | Prime Sender';
    const description =
        'Template File for Prime Sender';
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
                <h1 style={{fontSize: '28px', textAlign: 'center', margin: '24px 0px'}}>Template Excel File</h1>
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTPwiXz7kPQComBw4ELaOuiNgLmKTA_6BUiLOjT4FVgaT1JB2w-Uuw8gfzM3432h_7sJZZ2sxWdcstp/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
                    style={{margin: 'auto'}}>
                </iframe>
                <p style={{textAlign: 'center', marginTop: '24px'}}>
                    To edit, please download<br/><br/>
                    <a href="https://docs.google.com/spreadsheets/u/2/d/1sqbZx8sbIoZBFV4lZk5LJpyirCj0_gr5pqEdZs5aGfk/export?format=csv&id=1sqbZx8sbIoZBFV4lZk5LJpyirCj0_gr5pqEdZs5aGfk&gid=0"
                       target="_blank" download style={{marginRight: '8px'}}>Download CSV</a>
                    <a href="https://docs.google.com/spreadsheets/u/2/d/1sqbZx8sbIoZBFV4lZk5LJpyirCj0_gr5pqEdZs5aGfk/export?format=xlsx&id=1sqbZx8sbIoZBFV4lZk5LJpyirCj0_gr5pqEdZs5aGfk&gid=0"
                       target="_blank" download>Download Excel</a>
                </p>
            </section>
            <Footer/>
        </React.Fragment>
    );
}

export default TempExcelFile;