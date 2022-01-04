import { Typography, makeStyles } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';

const useStyle = makeStyles({
    hello:{
        background:'',
        marginLeft:130,
        marginRight:130,
        marginTop:40
    },
    itemContainer:{
        background:'',
        marginRight:960,
        '&:hover':{
            boxShadow:'2px 2px 2px 2px #d9d7d7'
        }

    },
    itemImage:{
        width:254,
        height:160,
        paddingLeft:20,
        paddingTop:20
    },
    itemTextBox:{
        paddingLeft:20,
        paddingTop:10
    },
    itemText1:{
        fontSize:17,
    },
    itemText2:{
        color:'#686b78',
        fontSize:13
    },
    ratingBox:{
        display:'flex',
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:20
    },
    ratingIcon:{
        background:'orange',
        fontSize:20,
        color:'white',
    },
    ratingText:{
        background:'orange',
        fontSize:13,
        color:'white',
    },
    dot1:{
        fontSize:13,
        color:'#686b78',
        paddingLeft:16,
    },
    minText:{
        fontSize: 13,
        color:'#686b78',
        paddingLeft:16
    },
    dot2:{
        fontSize:13,
        color:'#686b78',
        paddingLeft:16
    },
    rupeesText:{
        fontSize:13,
        color:'#686b78',
        paddingLeft:16
    },
    spacing:{
        paddingTop:50,
        background:''
    }
})

const ItemBody =()=>{
    const classes = useStyle()

    const itemURL = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wom2pjstxtixsbdqdrqa'
    return(
        <div className={classes.hello}>
            <div className={classes.itemContainer}>
                <img src={itemURL} className={classes.itemImage}/>
                <div className={classes.itemTextBox}>
                    <Typography className={classes.itemText1}>Hotel Sahara</Typography>
                    <Typography className={classes.itemText2}>Indian,Tandoor,Chinese,Biryani</Typography>
                </div>
                <div className={classes.ratingBox}>
                    <StarIcon className={classes.ratingIcon}/>
                    <Typography className={classes.ratingText}>3.8</Typography>
                    <Typography className={classes.dot1}>.</Typography>
                    <Typography className={classes.minText}>31 MINS</Typography>
                    <Typography className={classes.dot2}>.</Typography>
                    <Typography className={classes.rupeesText}>₹500 FOR TWO</Typography>
                </div>      
            </div>
            <div className={classes.spacing}></div>

        </div>
    )
}

export default ItemBody;