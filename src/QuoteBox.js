import { useState } from 'react'
import Data from './Quotes.json'

const QuoteBox = () => {
    const [indexQuote, setIndexQuote] = useState(0)
    console.log(indexQuote)
    return(
        <div className = 'quoteBox'>
               <h4>{Data[indexQuote].quote}</h4>
               <h5>{Data[indexQuote].author}</h5>
                <div className = 'twitter'>
               <button className='button1'><i className="fa fa-twitter"></i></button>
               </div>
               <button className ='button' type = 'button' onClick={() => setIndexQuote( Math.floor(Math.random()*102))}>
                New Quote</button>   
        </div>
    )
}

export default QuoteBox;

