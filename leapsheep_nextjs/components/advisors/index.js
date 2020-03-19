import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Outer from "../outer";
import {IntroLeft,IntroRight} from "../../components/member_intro/index"


function Advisor() {
    return (
        <div>
            <div id="advisor">
                <Outer name="Our Advisors" Component={component} color="white"/>
            </div>
        </div>
    )
}

function component() {
    return(
        <div>
            <Container maxWidth="md">
                <Grid container spacing={4}  justify="center" alignItems="center">
                    <IntroLeft name="Andrew Andreyev" position="ADVISOR" image="/Andrew_Andreyev.png" twitter="" linkedin="" words={["Andrew works primarily with entrepreneurs, investors and their families. He helps them to build their businesses and protect their wealth.","Andrew has a broad skillset, based on a diversity of professional experience. He has worked as a tax accountant, a merchant banker, and as a lawyer (in Australia and the UK) with an emphasis on corporate and international tax laws. Since returning to Australia in 2001 he has run his own boutique law practice with offices in Sydney and Adelaide.","He has acted for the SA and NSW state governments and several infrastructure funds on structuring asset transactions. At Macquarie Bank and Travers Smith (London) Andrew gained exposure to a number of private equity funds and gained firsthand experience as a shareholder and board member of a medical device company that raised private equity and then listed on the ASX.","Andrew has acted as an independent director or company secretary on a number of boards across a number of different industries. He regularly writes and presents on issues facing entrepreneurs, their businesses and their families."]}
                    />
                    <IntroRight name="John Flackett" position="ADVISOR" image="/John_Flackett.png" twitter="" linkedin="https://www.linkedin.com/in/johnflackett/" words={["John is the Technical Director and Co-Founder of koolth – web specialists empowering clients with next generation online tools, custom web design & development, specialist web integrations, Artificial Intelligence & Smart City solutions.","An expert on emerging technologies, John has over 20 years experience in Artificial Intelligence (PhD), web technologies and software engineering and has been speaking at events in the UK, Australia, Europe and the USA about these topics for many years. Before starting koolth, John worked in a wide range of industries (including Banking, Engineering & Education) and was a senior University lecturer in the UK teaching Artificial Intelligence, Computer Studies and Software Engineering.","John’s major achievements include being awarded his PhD in Artificial Intelligence, a First Class Honours in Computer Studies and a PgC in Research. He was also awarded the British Computer Society (BCS) award for most outstanding undergraduate final year project and was part of the award winning ‘GovHack’ competition team – winning the South Australian Premiers award, People’s Choice Australia award and Building on Science, Research and Environmental Data award."]}
                    />
                    <IntroLeft name="John Van Ruth" position="ADVISOR" image="/John_Van_Ruth.png" linkedin="https://www.linkedin.com/in/john-van-ruth-34a8271/" twitter="" words={["John currently works in the not for profit sector as CEO for Operation Flinders Foundation as well as holds a number of non-executive directorships.","Prior to that John spent four years as CFO for Coopers Brewery, the largest Australian owned brewery. Before Coopers he held a number of senior roles with other iconic South Australian companies. He was CIO at the RAA of SA Inc. (2008-2010), CIO for Adelaide Bank (2003-2007) and Executive General Manager eBusiness for Faulding in (2000 to 2001).","All up, Mr van Ruth has over 30 years of Executive management, Finance, IT, eBusiness and security experience, gained in Australia, Holland, and Canada. John is a Fellow of Chartered Accountants Australia New Zealand, Fellow of the Australian Institute of Company Directors, and Fellow of Flinders University New Venture Institute. He sits on a number of professional body and not for profit boards."]}
                    />
                </Grid>


            </Container>
        </div>
    )
}

export default Advisor;