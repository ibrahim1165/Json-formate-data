import React from 'react';
import "./json.css"

const Json = () => {
    const inputArea = document?.querySelector(".large-area--input");
    const outputArea = document.querySelector(".large-area--output");

    const handleClick = () => {
        const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
        outputArea.value = formatted;
    }
    const handleClear = () => {
        outputArea.value="";
        inputArea.value="";
    }


    return (
        <div class="container">
            <textarea class="large-area large-area--input" placeholder="Enter your JSON here...">

            </textarea>
            <div class="controls">
                <button onClick={handleClick} type="button" class="controls__button controls__button--format">Format</button>

                <button onClick={handleClear} type="button" class="controls__button controls__button--minify">Clear</button>
            </div>
            <textarea class="large-area large-area--output" placeholder="Your JSON will appear here..." readOnly></textarea>
        </div>
    )
}
export default Json;