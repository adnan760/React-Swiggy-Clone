import {AppBar ,Toolbar, makeStyles, Typography, Badge} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CheckBoxOutlineBlankSharpIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';


const useStyle = makeStyles({
    header:{
        background: 'white',
        height: 78,
    },
    swiggy_logo:{
        height: 48,
        width: 160,
        marginTop: 12,
        marginLeft: 120,
        cursor:'pointer'
    },
    SIconBox:{
        display: 'flex',
        marginLeft:400,
        marginTop: 15,
        color:'black',
        cursor:'pointer',
        '&:hover':{
            color:'orange'
        }
    },

    SIcon:{
        width: 30,
        height: 28,
    },
    SText:{
        paddingLeft: 2,
        paddingTop:2,
        fontSize: '17px',
    },

    OfferIconBox:{
        display: 'flex',
        marginLeft:70,
        marginTop: 15,
        color:'black',
        cursor:'pointer',
        '&:hover':{
            color:'orange'
        }
    },

    OfferIcon:{
        width:30,
        height:28
    },

    OfferText:{
        paddingLeft: 2,
        paddingTop:2,
        fontSize: '17px'
    },
    
    OfferBadgeIcon:{
        color:'orange',
        paddingLeft:12,
        fontSize:'12px'
    },

    HelpIconBox:{
        display: 'flex',
        marginLeft:70,
        marginTop: 15,
        color:'black',
        cursor:'pointer',
        '&:hover':{
            color:'orange'
        }
    },

    HelpIcon:{
        width:30,
        height:28
    },

    HelpText:{
        paddingLeft: 2,
        paddingTop:2,
        fontSize: '17px'
    },

    ProfileIconBox:{
        display: 'flex',
        marginLeft:70,
        marginTop: 15,
        color:'black',
        cursor:'pointer',
        '&:hover':{
            color:'orange'
        }
    },

    ProfileIcon:{
        width:30,
        height:28
    },

    ProfileText:{
        paddingLeft: 2,
        paddingTop:2,
        fontSize: '17px'
    },

    CartIconBox:{
        display: 'flex',
        marginLeft:70,
        marginTop: 15,
        color:'black',
        cursor:'pointer',
        '&:hover':{
            color:'orange'
        }
    },

    CartIcon:{
        width:30,
        height:28
    },

    CartText:{
        paddingLeft: 2,
        paddingTop:2,
        fontSize: '17px'
    },
    CartBadgeIcon:{
        position:'fixed',
        marginTop:14,
        marginLeft:15,
        fontWeight:'bold'
    }

})


const Header =() => {
    const classes = useStyle()
    const logoURL = 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png'
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <img src={logoURL} className={classes.swiggy_logo}/>
                <div className={classes.SIconBox}>
                   <SearchIcon className={classes.SIcon} />
                   <Typography className={classes.SText}>Search</Typography>
                </div>
                <div className={classes.OfferIconBox}>
                   <MonetizationOnOutlinedIcon className={classes.OfferIcon} />
                   <Typography className={classes.OfferText}>Offers</Typography>
                   <Badge badgeContent={'NEW'} className={classes.OfferBadgeIcon}/> 
                </div>
                <div className={classes.HelpIconBox}>
                    <SportsSoccerIcon className={classes.HelpIcon}/>
                    <Typography className={classes.HelpText}>Help</Typography>
                </div>
                <div className={classes.ProfileIconBox}>
                    <PersonOutlineIcon className={classes.ProfileIcon}/>
                    <Typography className={classes.ProfileText}>Sign In</Typography>
                </div>
                <div className={classes.CartIconBox}>
                    <Badge badgeContent={0} showZero className={classes.CartBadgeIcon}/> 
                    <CheckBoxOutlineBlankSharpIcon className={classes.CartIcon}/>
                    <Typography className={classes.CartText}>Cart</Typography>
                </div>
            </Toolbar>
            
        </AppBar>
    )
}


export default Header;
