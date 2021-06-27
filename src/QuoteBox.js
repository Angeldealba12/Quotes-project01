import { useState } from 'react'
import Data from './Quotes.json'
import Colors from './Colors.json';

const QuoteBox = () => {

    // varibales of state that are going to help me assing the index of my jsons. 
    const [indexQuote, setIndexQuote] = useState(Math.floor(Math.random()*102))
    const [indexColors, setIndexColors] = useState(Math.floor(Math.random()*20))


    return(
        <div style={Colors[indexColors]} className="container">
        <div className = 'quoteBox'>

                {/*Storing my quotes and authors in a h4 and h5 heading tags*/}
               <h4><i className="fa fa-quote-left" aria-hidden="true"></i> {Data[indexQuote].quote}</h4>
               <h5>{Data[indexQuote].author}</h5>
                
                {/*buttons*/}
                <div className = 'twitter'>
                <button style={Colors[indexColors]} className='button1'><i className="fa fa-twitter"></i></button>
                </div>

                
               {/*Button with onClick function to change quote and color*/}
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

