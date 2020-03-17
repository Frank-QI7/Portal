import React from 'react';
import {Grid, Typography, Paper, InputBase, Fab, IconButton,Dialog} from "@material-ui/core";
import {Close} from "@material-ui/icons"
import {Alert} from "@material-ui/lab"

import emailjs from 'emailjs-com';
import TwitterIcon from "@material-ui/icons/Twitter";
const message = `Sign up and get early access to our beta program`;

function Footer() {
    const [open, setOpen] = React.useState(false);

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail_test', 'leapsheep', e.target, 'user_ktTMKKT4No1antI4E4MSD')
            .then((result) => {
                console.log(result.text);
                setOpen(true)
            }, (error) => {
                // console.log(error.text);
            });
    }

    return (
    <div id="footer" style={{backgroundColor:"#402308", padding:"66px 0 28px"}}>
        <Dialog open={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          Thanks for contacting us!
        </Alert>
     </Dialog>
     
        <Grid container  wrap="nowrap" spacing={2} justify="center" direction="column" alignItems="center">
                <Grid item xs={8} sm={6}  md={6} lg={8}>
                    <Typography className="sign_up" variant="h5">{message}</Typography>
                </Grid>

                <Grid item  xs={12} sm={10} md={10} lg={8}>
                    <form onSubmit={sendEmail}>
                        <Paper square={false} style={{padding: "10px 12px 10px 30px",marginBottom:"25px"}}>
                            <InputBase
                                type="email"
                                name="user_email"
                                style={{minWidth:"250px"}}
                                required
                                placeholder="Enter your email here"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <Fab type="submit" variant="extended" color="primary" aria-label="add" >
                                Apply Now
                            </Fab>
                        </Paper>
                    </form>

                </Grid>

                <Grid item xs={2} sm={2}  md={2} lg={2}>
                    <IconButton aria-label="twitter" href="https://twitter.com/LeapSheepBiz">
                        <TwitterIcon/>
                    </IconButton>
                </Grid>

                <Grid item xs={8} sm={6}  md={6} lg={8}>
                    <p className="copy_right">© 2020 LeapSheep Pty Ltd, 615 010 903</p>
                </Grid>
            </Grid>
    </div>
    )
}
export default Footer;
