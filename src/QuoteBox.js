import { useState } from 'react'
import Data from './Quotes.json'
import Colors from './Colors.json';

const QuoteBox = () => {

    const [indexQuote, setIndexQuote] = useState(0)
    const [indexColors, setIndexColors] = useState(0)

    return(
        <div style={Colors[indexColors]} className="container">
        <div className = 'quoteBox'>
               <h4 >{Data[indexQuote].quote}</h4>
               <h5>{Data[indexQuote].author}</h5>
                <div className = 'twitter'>
               <button style={Colors[indexColors]} className='button1'><i className="fa fa-twitter"></i></button>
               </div>
               <button  style={Colors[indexColors]} className ='button' type = 'button' onClick={() => {
                   setIndexQuote(Math.floor(Math.random()*102))
                   setIndexColors(Math.floor(Math.random()*20))
                }
              }>
                New Quote</button>   
        </div>
        </div>
    )
}

export default QuoteBox;

