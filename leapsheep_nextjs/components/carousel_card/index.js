import React from 'react';
import {Grid, Container, Avatar, Paper} from '@material-ui/core'
import Carousel from './Carousel'
import Outer from "../outer"

function HomeCarousel() {
    return(
        <div>
            <Outer name="Testimonials" Component={component} color="#fafafa" />
        </div>
    )
 }
 function component() {
        return (
            <Carousel>
                <div>
                    <Container maxWidth="md">
                        <Grid container spacing={4} justify="center" alignItems="center">
                            <Grid item md={3} style={{padding:"30px",marginBottom:"20px"}}>
                                <Avatar className="avatar" alt="Mark Keough" src="/Mark_Keough.png" />
                                <div className="author">
                                    <p>Mark Keough</p>
                                    <div>Founder &amp; CEO of Intrinsic Learning</div>
                                </div>
                            </Grid>

                            <Grid item xs={11} sm={9} md={9}>
                                <Paper className="words" variant="outlined" >
                                    "LeapSheep represent innovative, contemporary thinking regarding how to launch a start-up or plan business growth. They are fully aware of the nature of modern economies, how they are less tied to government and national boundaries, and what it takes to cut through the jargon, and find customers for your products and services.  Despite over 25 years starting companies myself, I learned much, and challenged my thinking in just a few hours."
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                </div>

                <div>
                    <Container maxWidth="md">
                        <Grid container spacing={4} justify="center" alignItems="center">
                            <Grid item md={3} style={{padding:"30px"}}>
                                <Avatar className="avatar" alt="Matthew Pyke" src="/Matthew_Pyke.png" />
                                <div className="author">
                                    <p>Matthew Pyke</p>
                                    <div>TilliT Market Fit Lead</div>
                                </div>
                            </Grid>

                            <Grid item xs={11} sm={9} md={9}>
                                <Paper className="words" variant="outlined" >
                                    "LeapSheep’s Business Builder program enabled us to effectively develop our idea into a business. The combination of mentoring, practical hands on operational sessions, oversight, and the validation at each stage of the business building journey meant that our Board had the information they needed to make the right decisions, at the right time, about how far to progress the business idea."
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                </div>

                <div>
                    <Container maxWidth="md">
                        <Grid container spacing={4} justify="center" alignItems="center">
                            <Grid item md={3} style={{padding:"30px"}}>
                                <Avatar className="avatar" alt="Tina McIntosh" src="/Tina_McIntosh.png" />
                                <div className="author">
                                    <p>Tina McIntosh</p>
                                    <div>CEO of Brain Changer</div>
                                </div>
                            </Grid>

                            <Grid item xs={11} sm={9} md={9}>
                                <Paper className="words" variant="outlined" >
                                    "LeapSheep has been our team's secret weapon, their unparalleled knowledge of the startup building journey and support has not only propelled our growth but kept us sane!"
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                </div>

            </Carousel>
        )
}



 export default HomeCarousel