import React from 'react';
import Outer from "../../components/outer"
import {Container, Grid, Paper} from "@material-ui/core";
import Visions from "../visionbox";


function scrollToAnchor(anchorName){
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) {anchorElement.scrollIntoView( { behavior: 'smooth', block: 'start' })}
    }
}


function Service() {
    return(
        <div>
            <div id="services">
                <Outer name="Our Services" Component={component} color="white"/>
            </div>
        </div>
    )
}

function component() {
    return(
        <div>
            <Container maxWidth="md">
                <Grid container spacing={4} justify="center" alignItems="stretch">
                    {/*services*/}
                    <Grid item xs={10} sm={8} md={6}>
                        <Visions image="/services.png" title="Our Services" classname="service"
                                 content={["LeapSheep is pioneering “Hyper-growth incubation-as-a-service” empowering business builders to develop hyper-growth scale business models that are capable of attracting early stage venture investment and then successfully executing. We’re transforming the support landscape for early stage ventures by making the journey more achievable, accessible and affordable."]}
                        />
                    </Grid>
                    {/*founders*/}
                    <Grid item xs={10} sm={8} md={6}>
                        <Paper elevation={3} className="service">
                            <div>
                                <div className="icon_holder" >
                                    <img height="60px" alt="founders" src="/founders.png"/>
                                </div>
                                <div className="icon_text_holder">
                                    <div className="icon_text_inner">
                                        <h3 className="icon_title">Services For Founders</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="story_content">
                                    <p>Currently, our subscription SaaS & Expert Advisory platform is in private beta with a number of early-stage companies helping us refine our technology & services.</p>
                                    <p>If you are a founder or business owner interested in joining the waiting list for our private beta please contact us
                                        <strong onClick={()=>scrollToAnchor("story")}> here</strong>
                                    </p>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    {/*investors*/}
                    <Grid item xs={10} sm={8} md={6}>
                        <Paper elevation={3} className="service" >
                            <div>
                                <div className="icon_holder">
                                    <img alt="investors" src="/investors.png"/>
                                </div>
                                <div className="icon_text_holder">
                                    <div className="icon_text_inner">
                                        <h3 className="icon_title">Services For Start-Up Enablers And Investors</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="story_content">
                                    <p>LeapSheep fills an unmet need in the early stage venture support space which allows us to complement and partner extensively with other players including technology companies, universities, governments, accelerator programs and investors.</p>
                                    <p>If you’re an individual or organisation passionate about supporting or investing in hyper-growth start-ups please contact us
                                        <strong onClick={()=>scrollToAnchor("story")}> here</strong>
                                    </p>
                                </div>
                            </div>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Service;