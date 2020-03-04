import React, {Fragment} from 'react';
import {Avatar, Grid, IconButton, Paper} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export function IntroLeft(props) {
    const {name,position,image,twitter,linkedin,words} = props;
    return (
        <Fragment>
            <Grid container spacing={9} justify="center" alignItems="center">
                <Grid item md={3}  style={{paddingLeft:"20px",paddingBottom:"0"}} >
                    <Avatar className="avatar1" alt={name} src={image} />
                    <div className="team_member">
                        <p>{name}</p>
                        <span>{position}</span>
                    </div>
                    <div className="social_media">
                        { twitter!==""
                            ?
                            <IconButton aria-label="twitter" href={twitter}>
                                <TwitterIcon/>
                            </IconButton>
                            :
                            null
                        }
                        {
                            linkedin !==""
                                ?
                                <IconButton aria-label="linkedin" href={linkedin}>
                                    <LinkedInIcon/>
                                </IconButton>
                                :
                                null
                        }
                    </div>
                </Grid>
                <Grid item xs={11} sm={9} md={9} >
                    <Paper className="team_words" variant="outlined" >
                        {words.map((item,index)=>{
                            return(
                                <p key={index}> {item} </p>
                            )})
                        }
                    </Paper>
                </Grid>
            </Grid>

        </Fragment>
    )
}


export function IntroRight(props) {
    const {name,position,image,twitter,linkedin,words} = props
    return (
        <Fragment>
            <Grid container spacing={9}  style={{marginTop:"136px",marginBottom:"136px"}} justify="center" alignItems="center">
                <Grid item xs={11} sm={9} md={9}>
                    <Paper className="team_words" variant="outlined" >
                        {words.map((item,index)=>{
                            return(
                                <p key={index}> {item} </p>
                            )})
                        }
                    </Paper>
                </Grid>
                <Grid item md={3} style={{paddingLeft:"55px"}}>
                    <Avatar className="avatar1" alt={name} src={image} />
                    <div className="team_member">
                        <p>{name}</p>
                        <span>{position}</span>
                    </div>
                    <div className="social_media">
                        { twitter!==""
                            ?
                        <IconButton aria-label="twitter" href={twitter}>
                            <TwitterIcon/>
                        </IconButton>
                            :
                            null
                        }
                        {
                            linkedin !==""
                                ?
                            <IconButton aria-label="linkedin" href={linkedin}>
                                <LinkedInIcon/>
                            </IconButton>
                                :
                                null
                        }
                    </div>
                </Grid>
            </Grid>


        </Fragment>
    )
}

