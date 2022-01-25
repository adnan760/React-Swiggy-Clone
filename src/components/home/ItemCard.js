import { Typography, makeStyles } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

const useStyle = makeStyles({
    itemCardRoot: {
        margin: '12px 8px 24px 8px',
        padding: 10,
        '&:hover':{
            boxShadow:'3px 3px 3px 3px #e9e9eb'
        }
        
    },
    itemCardCover: {
        height: 160,
        width: 254,
        position:'relative'
    },
    itemCardImage: {
        height: '160px',
        width: '254px',
        objectFit: 'cover',
    },
    resOpt:{
        display:'flex',
        fontSize:14,
        justifyContent:'space-between',
        marginTop:15
    },
    resdot:{
        color:'#686b78',
    },
    resDeliveryTime:{
        color:'#686b78'
    },
    resPrice:{
        color:'#686b78'
    },
    resName:{
        fontSize:18,
        marginTop:10
    },
    resCuisine:{
        fontSize:13,
        color:'#686b78'
    },
    resOffer:{
        fontSize:14,
        color:'#8a584b',
        fontWeight:550,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        borderTop:'1px solid #e9e9eb',
        borderBottom:'1px solid #e9e9eb'
    },
    resRating:{
        color:'white',
        background:'green',
        paddingRight:5
    },
    resView:{
        color:'white',
        fontWeight:600,
        fontSize:13,
        marginTop:10,
        textAlign:'center',
        '&:hover':{
            color:'#5d8ed5'
        }
    },
    resDisIcon:{
        fontSize:14,
        color:'#8a584b',

    },
    starIcon:{
        fontSize:14,
    }
})

const ItemCard = ({ restaurant }) => {
    const classes = useStyle()
    const name = restaurant?.info?.name ?? "";
    const coverImg = restaurant?.info?.image?.url ?? restaurant?.info?.o2FeaturedImage?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const ratingColor = restaurant?.info?.rating?.rating_color;
    const approxPrice = restaurant?.info?.cft?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisines = restaurant?.info?.cuisine
        ?.map((item) => item.name)
        .slice(0, 3);

    const discount =
     offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null; 


    return (
        <div className={classes.itemCardRoot} > 
            <div className={classes.itemCardCover} >
                <img src={coverImg} alt={name} className={classes.itemCardImage} />
            </div>
            <div className={classes.resRow}>
                <div className={classes.resName}>{name}</div>
            </div>
            <div className={classes.resRow}>
                {cuisines.length && (
                    <div className={classes.resCuisine}>
                        {cuisines.map((item, i) => (
                            <span className={classes.resCuisineTag}>
                                {item}
                                {i !== cuisines.length - 1 && ","}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className={classes.resOpt}>
                {rating && (
                    <div className={classes.resRating} on>
                         <StarIcon className={classes.starIcon}/> {rating}
                    </div>
                )}
                <div className={classes.resdot}>.</div>
                <div className={classes.resDeliveryTime}>{deliveryTime}</div>
                <div className={classes.resdot}>.</div>
                {approxPrice && <div className={classes.resPrice}>{approxPrice}</div>}
            </div>
            <div className={classes.resOffer}>
                {discount && <div className={classes.resDiscount}> 
                <MonetizationOnOutlinedIcon className={classes.resDisIcon}/> {discount}</div>}
            </div>
            <div className={classes.resView}>
                QUICK VIEW
            </div>
        </div>
    )
}
export default ItemCard;