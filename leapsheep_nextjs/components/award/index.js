import React from 'react';
import Outer from "../outer";
import {Container, Grid} from "@material-ui/core";


function Award() {
    return(
        <div id="awards">
            <Outer name="Awards" Component={component} color="white"/>
        </div>
    )
}

function component() {
    return(
        <div>
            <Container maxWidth="md">
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item xs={6} sm={2} md={2}>
                        <img style={{width:"150px",height:"150px"}} src="/award_2018.jpg" alt="award2018"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Award;