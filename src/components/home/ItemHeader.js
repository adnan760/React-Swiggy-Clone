import { Typography, makeStyles } from "@material-ui/core";
import SwapVerticalCircleOutlinedIcon from '@material-ui/icons/SwapVerticalCircleOutlined';

const useStyle = makeStyles({
    categoryHeader:{
        display:'flex',
        marginLeft:130,
        marginRight:130,
        marginTop:40,
        borderBottom:'1px solid grey'
    },
    resBox:{
        display:'flex',
        background:'white',
        
    },
    resText:{
        paddingLeft:10,
        fontSize:28,
        fontWeight:600,
        color:'#282c3f',
        
    },
    resNoText:{
        fontSize:28,
        fontWeight:600,
        color:'#282c3f'
    },
    RelText:{
        color:'#686b78',
        fontSize: 16,
        fontWeight:300,
        cursor:'pointer',
        paddingTop:8,
        marginLeft:200,
        borderBottom:'1px solid black'
        
    },
    DelText:{
        color:'#686b78',
        fontSize: 16,
        fontWeight:300,
        cursor:'pointer',
        paddingTop:8,
        paddingLeft:40,
    },
    RatText:{
        color:'#686b78',
        fontSize: 16,
        fontWeight:300,
        cursor:'pointer',
        paddingTop:8,
        paddingLeft:40
    },
    CLText:{
        color:'#686b78',
        fontSize: 16,
        fontWeight:300,
        cursor:'pointer',
        paddingTop:8,
        paddingLeft:40
    },
    CHText:{
        color:'#686b78',
        fontSize: 16,
        fontWeight:300,
        cursor:'pointer',
        paddingTop:8,
        paddingLeft:40
    },
    filterText:{
        color:'#282c3f',
        fontSize: 16,
        fontWeight:300,
        cursor:'pointer',
        paddingTop:8,
        paddingLeft:40,
        fontweight: 550,
        '&:hover':{
            color:'orange'
        }
    },
    filterIcon:{
        width:30,
        height:30,
        color:'orange'
    },
    filterIconBox:{
        paddingTop:8,
        paddingLeft:5,
        color:'orange',
        
    },
})
const ItemHeader =() =>{
    const classes = useStyle()
    return(
        <div className={classes.categoryHeader}>
            <div className={classes.resBox}>
                <Typography className={classes.resNoText}>Lucknow</Typography>
                <Typography className={classes.resText}>Restaurants</Typography>
            
                <Typography className={classes.RelText} >Relevance</Typography>
                <Typography className={classes.DelText} >Delivery Time</Typography>
                <Typography className={classes.RatText}>Rating</Typography>
                <Typography className={classes.CLText}>Cost: Low To High</Typography>
                <Typography className={classes.CHText}>Cost: High To Low</Typography>
                <Typography className={classes.filterText}>Filter</Typography>
                
                <div className={classes.filterIconBox}>
                <SwapVerticalCircleOutlinedIcon classname={classes.filterIcon} />
                </div>
            </div>
        </div>
    )
}

export default ItemHeader;