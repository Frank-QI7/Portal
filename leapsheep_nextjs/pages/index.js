import React from 'react';
import {Grid,Container} from '@material-ui/core'
import Header from "../components/header"
// import Head from "next/head";
import Team from "../components/team"
import HomeCarousel from "../components/carousel_card"
import Story from "../components/story"
import Advisor from "../components/advisors"
import Service from "../components/service"
import Award from "../components/award"
import Footer from "../components/footer"
import Contact from "../components/contact_us"
import Layout from "../components/layout";
import Link from "next/link";


function Home(props) {

    return(
        <Layout title="Home - Leapsheep">
            <div>
                {/* header */}
                <Header/>

                {/* image */}
                <Grid container className="showimage" justify="center"  alignItems="center" >
                    <Container maxWidth="md" style={{textAlign:"center",fontFamily:"Segoe UI Semi"}}>
                        Empowering Business Builders to Achieve Hyper Growth in the New Economy
                    </Container>
                </Grid>

                {/*carousel*/}
                <HomeCarousel />

                {/*story*/}
                <Story style={{background:"white"}}/>


                {/*service*/}
                <Service/>

                {/*team*/}
                <Team/>

                {/*advisors*/}
                <Advisor/>

                {/*awards*/}
                <Award/>

                {/*contact*/}
                <Contact/>

                {/*map*/}
                <Container maxWidth={false} className="google_map">
                    <iframe title="map_wow"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1635.614462618446!2d138.60358567594005!3d-34.925795195070286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced124c62bcf%3A0xf4a965093ceb7b34!2s133%20Pirie%20St%2C%20Adelaide%20SA%205000!5e0!3m2!1sen!2sau!4v1582696488943!5m2!1sen!2sau"
                            width="100%" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen="allowfullscreen"/>
                </Container>

                {/*footer*/}
                <Footer/>

            </div>
        </Layout>

    )
}


export default React.memo(Home);