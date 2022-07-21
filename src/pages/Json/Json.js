import React, { useRef, useState } from 'react';
import "./json.css"

const Json = () => {
    const [copiedText, setCopiedText] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [error, setErr] = useState(null);
    const previousInputValue = useRef('');
    const outputInputValue = useRef('');
    const handleClick = () => {
        try {
            const formatted = JSON.stringify(
                JSON.parse(previousInputValue.current.value),
                null,
                1
            );
            setCopiedText(copiedText);
            setDisabled(false);
            outputInputValue.current.value = formatted;

        } catch (e) {
            setErr(e.message);
        }
    };
    const handleClear = () => {
        outputInputValue.current.value = "";
        previousInputValue.current.value = "";
        setDisabled(true);
    };

    const handleCopyFormatting = (e) => {
        console.log('copied');
        outputInputValue.current.select();
        document.execCommand('copy');
        e.target.focus();
    }

    if (error) {
        return  <h4> {error} </h4>
    }



    return (
        <div class="container">
            <textarea
                ref={previousInputValue}
                class="large-area large-area--input"
                placeholder="Enter your JSON here..."
            >
            </textarea>
            <div class="controls">
                <button
                    onClick={handleClick}
                    type="button"
                    class="controls__button controls__button--format"
                >
                    Format
                </button>

                <button
                    onClick={handleClear}
                    type="button"
                    class="controls__button controls__button--minify"
                >
                    Clear
                </button>
                <button disabled={disabled} className='controls__button' onClick={handleCopyFormatting}>Copy </button>
            </div>
            <textarea
                ref={outputInputValue}
                class="large-area large-area--output"
                placeholder="Your JSON will appear here..."
                readOnly
            ></textarea>
        </div>
    )
}
export default Json;