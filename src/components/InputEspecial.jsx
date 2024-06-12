'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react'
import { useUser } from '@/context/Context'


export default function Button({ type, data, node, focusTxt, id, inputRef, select, style }) {
    const { focus, setFocus } = useUser()

    const router = useRouter()
    const [showPassword, setShowPassword] = useState(true)
    // const inputRef = useRef()
    const [text, setText] = useState('')

    function handlerOnChange(e) {
        e.stopPropagation();
        setText(e.target.value)

    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    function handlerSelect(i) {
        select(i)
        setText(i)
    }

    return (
        <div>
            <div class="relative z-0 w-full  group bg-[#ffffff] shadow-xl px-5  border border-[#dddddd] rounded-[5px]" onClick={stopPropagation}>
                <input type={type} name={id} onFocus={() => setFocus(focusTxt)} onClick={stopPropagation} autocomplete="off" onChange={handlerOnChange} ref={inputRef} id={id} class="block   py-2.5  w-full text-[12px] text-gray-900 bg-transparent  appearance-none  focus:outline-none focus:ring-0  peer "  placeholder=" " required />
                <label for={id} class="z-50 peer-focus:font-medium absolute text-[12px] bg-white  text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:px-5 peer-focus:mx-2 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{node}</label>
                {<div className={`   overflow-auto   transition-all rounded-[5px]  ${focus === focusTxt ? 'bg-[#ffffff88] relative h-[95px] border-t z-10 ' : 'h-[0]'}`}>
                    {
                        data.reduce((acc, i, index) => {
                            return acc.includes(i[node.toUpperCase()]) ? acc : [...acc, i[node.toUpperCase()]]
                        }, []).map((i, index) => {
                            return i.toUpperCase().includes(inputRef.current && inputRef.current.value ? inputRef.current.value.toUpperCase() : '' ) && <div class="relative z-0 w-full  group border-t border-[#dddddd] px-2 py-2  text-[12px]" onClick={() => select(i)}>
                                {i}
                            </div>
                        })
                    }
                </div>}
            </div>
        </div>
    )
}
