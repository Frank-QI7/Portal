import React from 'react';
import {Grid} from '@material-ui/core'
import Header from "../components/header"
import Footer from "../components/footer";
import Layout from "../components/layout";


function Careers(props) {
    return(
        <Layout title="Careers - Leapsheep">
            <div id="career">
                <Header/>
                <Grid container justify="center" alignItems="center">
                    <Grid item lg={10} md={10} sm={10} xs={10} style={{marginTop:"100px",marginBottom:"50px"}}>
                        <p className="hiring">We’re Hiring</p>
                        <p className="hiring_content">LeapSheep are looking for talented individuals interested in working at a growing start-up. Send your CV to
                            <strong> <a href="mailto:info@leapsheep.biz">info@leapsheep.biz</a> </strong>
                            with a short note if you think you’d be a good fit for our team.
                        </p>

                    </Grid>
                </Grid>
                <Footer/>
            </div>
        </Layout>
    )

}

export default Careers;
