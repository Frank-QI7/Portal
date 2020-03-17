import Head from "next/head";
import { initGA, logPageView } from './utils/google_analytics'

import React, {useEffect} from "react";

function Layout(props) {
    useEffect(()=>{
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
    },[]);

    return(
        <div >
            <Head>
                <meta charSet="utf-8"/>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta
                    name="description"
                    content="LeapSheep is a platform for innovation driven business builders. Access professional mentoring, resources and experts. Grow your digital business today. "
                />
                <meta name="keywords" content="innovation, business building, startups, mentoring, education, learning, "/>
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="LeapSheep"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@leapsheepbiz"/>
                <meta name="twitter:creator" content="@leapsheepbiz"/>
                <title>{props.title}</title>
            </Head>
            {props.children}
        </div>
    )
}


export default Layout;