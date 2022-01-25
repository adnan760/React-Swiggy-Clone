import { Typography, makeStyles } from "@material-ui/core";
import ItemCard from "./ItemCard";


const useStyle =makeStyles({
    itemSection:{
        maxWidth: '1250px',
        margin: '0px auto',
        background:''
    },
    itemGrid:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
})

const ItemBody=({list})=>{
    const classes= useStyle()   
     return(
        <div className={classes.itemSection}>
            <div className={classes.itemGrid}>
                {list.map((restaurant)=>{
                    return (
                    <ItemCard restaurant={restaurant} />)
                })}
            </div>
        </div>
    )
}

export default ItemBody;