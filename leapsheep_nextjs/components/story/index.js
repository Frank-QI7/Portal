import React from 'react';
import Outer from "../outer"
import {Container, Grid} from "@material-ui/core";

import Visions from "../visionbox"

function Story() {
    return (
        <div id="story">
            <Outer name="Our Story" Component={component} color="white"/>
        </div>
    )
}


function component() {
    return(
        <div>
            <Container maxWidth="md">
                <Grid container spacing={4} justify="center" alignItems="stretch">
                    {/*Vision*/}
                    <Grid item xs={10} sm={8} md={6}>
                        <Visions image="/our_vision.png" title="Our Vision" classname="stories"
                                 content={["Empowering business builders to radically transform start-up success rates"]}
                        />
                    </Grid>
                    {/*Mission*/}
                    <Grid item xs={10} sm={8} md={6}>
                        <Visions image="/our_mission.png" title="Our Mission" classname="stories"
                                 content={["To make hyper-growth business building more achievable, accessible and affordable."]}
                        />
                    </Grid>
                    {/*Values*/}
                    <Grid item xs={10} sm={8} md={6}>
                        <Visions image="/our_values.png" title="Our Values"   classname="stories"
                                 content={["Which guide our behaviours and partnerships include being Trusting & Respectful, Impactful & Collaborative, Curious & Playful, Supportive & Compassionate."]}
                        />
                    </Grid>
                    {/*Purpose*/}
                    <Grid item xs={10} sm={8} md={6}>
                        <Visions image="/our_purpose.png" title="Our Purpose"   classname="stories"
                                 content={["To enable people to satisfy their life needs, so they can focus on community needs.We believe the best way to fulfil our purpose is to assist people to build and grow businesses."]}
                        />
                    </Grid>
                    {/*Impact*/}
                    <Grid item xs={10} sm={8} md={6}>
                        <Visions image="/our_impact.png" title="Our Impact"  classname="stories"
                                 content={["An early-stage company that raises Series A capital, on average, establishes a ~US$19m valuation within 4 years + sustainable employment growth."]}
                        />
                    </Grid>
                </Grid>

            </Container>

        </div>
    )
}

export default Story;