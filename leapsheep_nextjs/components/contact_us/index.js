import React from 'react';
import {Grid, Typography, Paper, InputBase,Fab,Dialog,IconButton} from "@material-ui/core"
import {LocationOn,Email,Person,Create,Close} from "@material-ui/icons"
import {Alert} from "@material-ui/lab"
import emailjs from 'emailjs-com';

function Contact() {
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


    return(
        <div id="contact">
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

            <Grid container justify="center" alignItems="stretch">

                {/*contact_us*/}
                <Grid item md={6} lg={6} sm={12} xs={12}  className="contact_us">
                    <Typography variant="h2"> Contact Us</Typography>
                    <LocationOn className="location_icon" />
                    <p>Level 1, 33 Pirie Street,<br/>
                        Adelaide SA 5000<br/>
                        Australia
                    </p>
                    <Email className="email_icon" />
                    <p>info@leapsheep.biz</p>
                </Grid>

                {/*email*/}
                <Grid item md={6} lg={6} sm={12} xs={12}  className="email_us">
                    <form style={{maxWidth:"420px", margin:" 20px auto",paddingLeft:"15px",paddingRight:"15px"}} className="contact-form" onSubmit={sendEmail} >
                        <Paper style={{padding: "10px 12px 10px 10px",display: 'flex', alignItems: 'center', marginBottom:"15px"}}>
                            <Person style={{marginRight:"10px", marginTop:"-5px"}}/>
                            <InputBase
                                type="text"
                                name="user_name"
                                fullWidth
                                placeholder="Full Name"
                                required
                            />
                        </Paper>
                        <Paper style={{padding: "10px 12px 10px 10px",display: 'flex', alignItems: 'center', marginBottom:"15px"}}>
                            <Email style={{marginRight:"10px", marginTop:"-5px"}}/>
                            <InputBase
                                type="email"
                                name="user_email"
                                fullWidth
                                placeholder="Email"
                                required
                            />
                        </Paper>
                        <Paper style={{padding: "10px 12px 10px 10px",display: 'flex', alignItems: 'center', marginBottom:"15px"}}>
                            <Create style={{marginRight:"10px", marginTop:"-97px"}}/>
                            <InputBase
                                name="message"
                                fullWidth
                                placeholder="Message"
                                required
                                multiline
                                rows="6"
                            />
                        </Paper>
                        <Fab
                            type="submit"
                            style={{width:"130px", fontFamily:"Open Sans"}} variant="extended" color="primary" aria-label="submit" >
                            Send
                        </Fab>
                    </form>
                </Grid>
            </Grid>
        
        </div>
    )

}

export default Contact;