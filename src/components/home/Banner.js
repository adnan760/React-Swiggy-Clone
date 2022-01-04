
import Carousel from 'react-multi-carousel';
import { bannerData } from '../contents/data';
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from '@material-ui/core';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyle = makeStyles({
    image:{
        height: 280,
        width:280,
        marginTop:40,
        marginBottom:40,
        marginLeft:50,
        cursor:'pointer'
    },
    carousel:{
        marginTop:100,
        background:'#171a29',
        
    },
})

const Banner=() =>{
    const classes = useStyle();
    return(
      <Carousel responsive={responsive} className={classes.carousel}>
        {
          bannerData.map(image =>(
              <img src={image} className={classes.image}/>
          ))
        }   
        
      </Carousel>
    );
}
export default Banner;