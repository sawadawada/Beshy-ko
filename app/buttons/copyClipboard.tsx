'use client';
import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
export default function CopyClipboard() {

    const [string, setString] = useState('')
    const removeSpace = string.replaceAll(' ', '🤸')
    const initialText = 'Copy to Clipboard'
    const [buttonText, setButtonText] = useState(initialText)
    const [copy,setCopy] = useCopyToClipboard()
    function handleClick() {
        setCopy(removeSpace)
        console.log(removeSpace)
        setButtonText('Copied!')

        setTimeout(() => {
            setButtonText(initialText)
        }, 1000)
    }

    return (
        <div>
            <p className='text-4xl mb-3'>🤸Beshy🤸</p>
            <p className='text-lg mb-3'>🤸Beshy🤸Converter🤸</p>
            <input className='rounded-2xl border-2 font-bold text-purple-950 focus:border-purple-900 focus:outline-none p-2 my-2 text-center'
                value={string}
                onChange={e => setString(e.target.value)}
                type='text'
                placeholder='Enter a text'
            />
            <p>{removeSpace}</p>
            <div className="flex justify-center">
            {
                string.length > 4 ? <button
                    className='text-sm rounded-2xl border-2 border-purple-950 font-bold text-purple-950 mr-2 p-2 my-2 text-center'
                    onClick={handleClick}>{buttonText}</button>: <></>
            }
            {
                string.length > 4 ? <button
                    className='text-sm rounded-2xl border-2 border-purple-950 font-bold text-purple-950 p-2 my-2 text-center'
                    onClick={()=> setString('')}>Clear</button>: <></>
            }
            </div>
            
        </div>
    )
}