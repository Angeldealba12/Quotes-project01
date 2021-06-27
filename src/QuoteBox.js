import { useState } from 'react'
import Data from './Quotes.json'

const QuoteBox = () => {
    const [indexQuote, setIndexQuote] = useState(Math.floor(Math.random()*((100+1)-1)))
    


    return(
        <div className = 'quoteBox'>
               <h4>{Data[indexQuote].quote}</h4>
               <h5>{Data[indexQuote].author}</h5>
                <div className = 'twitter'>
               <button className='button1'><i className="fa fa-twitter"></i></button>
               </div>
               <button className ='button' type = 'button' onClick={() => setIndexQuote(indexQuote + 1)}>
                  New Quote</button>   
        </div>
    )
}

export default QuoteBox;

