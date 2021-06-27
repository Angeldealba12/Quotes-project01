import { useState } from 'react'
import Data from './Quotes.json'

const QuoteBox = () => {
    const [indexQuote, setIndexQuote] = useState(Math.floor(Math.random()*((100+1)-1)))
    console.log(Data.length)
    return(
        <div className = 'quoteBox'>
               <h4>{Data[indexQuote].quote}</h4>
               <button><i className="fa fa-twitter"></i></button>
               <button className ='button' type = 'button' onClick={() => setIndexQuote(indexQuote + 1)}>
                  New Quote</button>   
        </div>
    )
}

export default QuoteBox;

