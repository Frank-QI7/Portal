import React, {Fragment,useState} from 'react';
import PropTypes from 'prop-types';
import {AppBar,Toolbar,useScrollTrigger,Fab,Zoom,Container,Grid,Divider,IconButton,Menu,MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useRouter } from 'next/router';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Link from 'next/link'



const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));
// nav bar items
const navItems = ["Our Story","Our Team","Our Services","Contact Us","Apply Now"];
// nav bar anchor
const nav_anchor = ["story","team","services","contact","footer"];


function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function BackToTop(props) {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const [clicked, setClicked] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //
    // function scrollToAnchor(anchorName){
    //     if (anchorName) {
    //         setClicked(nav_anchor.indexOf(anchorName));
    //         let anchorElement = document.getElementById(anchorName);
    //         if(anchorElement) {anchorElement.scrollIntoView( { behavior: 'smooth', block: 'start' })}
    //     }
    // }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className="header" color="transparent">
                    <Container className="nopadding" maxWidth="md" style={{display:"flex"}}>
                        <div className="header_inner_left">
                                <div className="logo_wrapper">
                                    <div className="q_logo  hh">
                                            <a href="https://leapsheep.biz">
                                                <img className="normal" src="/logo.svg" alt="Logo"/>
                                            </a>
                                    </div>
                                </div>
                            </div>
                        <Grid className="navitem" container spacing={4}  justify="center"  alignItems="center">
                            {
                                navItems.map((item,index)=>{
                                    return (
                                        <Fragment key={index}>
                                            <Grid item >
                                                <Link href={("/careers" === router.pathname) ? `/#${nav_anchor[index]}` :`#${nav_anchor[index]}`}>
                                                    <a onClick={()=>setClicked(nav_anchor.indexOf(nav_anchor[index]))}
                                                       className={(index === clicked) ? "selected_nav" : ""}
                                                    >
                                                        {item}
                                                    </a>
                                                </Link>
                                            </Grid>
                                            <Divider style={{height:(index === navItems.length - 1)? "26px":"26px"}} orientation="vertical"  />
                                        </Fragment>
                                    )
                                })
                            }
                            <Grid item >
                                <Link href='/careers'>
                                    <a onClick={()=>setClicked(99)} className={("/careers" === router.pathname) ? "selected_nav" : ""}> We’re Hiring </a>
                                </Link>

                            </Grid>
                        </Grid>
                        <Grid className="hide_button_grid" container spacing={4}  justify="flex-end">
                            <IconButton aria-controls="navigation" className="hide_button" style={{marginRight:"20px"}}
                                        onClick={handleClick} spacing={2} color="default" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Menu
                            id="navigation"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                        >
                            {
                                navItems.map((item,index)=>{
                                    return (
                                        <MenuItem key={index}>
                                            <Link href={("/careers" === router.pathname) ? `/#${nav_anchor[index]}` :`#${nav_anchor[index]}`}>
                                                <a onClick={async()=>{
                                                    await setClicked(nav_anchor.indexOf(nav_anchor[index]));
                                                    handleClose();}}
                                                >
                                                    {item}
                                                </a>
                                            </Link>
                                        </MenuItem>
                                    )
                                })
                            }
                            <MenuItem onClick={handleClose}>
                                <Link href="/careers">
                                    <a>We’re Hiring</a>
                                </Link>
                            </MenuItem>

                        </Menu>
                    </Container>

            </AppBar>
            <Toolbar id="back-to-top-anchor" />

            <ScrollTop {...props}>
                <Fab color="secondary" style={{zIndex:"10000"}} size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
