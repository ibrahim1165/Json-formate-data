import React from 'react';
import "./json.css"

const Json = () => {
    const inputArea = document.querySelector(".large-area--input");
    const outputArea = document.querySelector(".large-area--output");
    const btnFormat = document.querySelector(".controls__button--format");
    // const btnMinify = document.querySelector(".controls__button--minify");
    
    // btnFormat?.addEventListener("click", () => {
      
    // });
    const handleClick =()=>{
        const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
        outputArea.value = formatted;
    }



    return (
        <div class="container">
            <textarea class="large-area large-area--input" placeholder="Enter your JSON here...">
              
            </textarea>
            <div class="controls">
                <button onClick={handleClick} type="button" class="controls__button controls__button--format">Format</button>
                <button type="button" class="controls__button controls__button--minify">Minify</button>
            </div>
            <textarea  class="large-area large-area--output" placeholder="Your JSON will appear here..." readOnly></textarea>
        </div>
    )
}
export default Json;