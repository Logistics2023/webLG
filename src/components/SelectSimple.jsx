'use client';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';


export default function Select({arr, name, click, defaultValue, uuid}) {

    const router = useRouter()

    const [select, setSelect] = useState(false)
    const [state, setState] = useState(defaultValue ? defaultValue : arr[0])

    function handlerSelect () {
        setSelect(!select)
    }

    function handlerUserState (name, i) {
        setState(i)
        click(name, i, uuid)
    }


    return (
        <div>
            <div 
                className={`relative block shadow-xl  pt-2.5 mb-0 pb-0  w-full text-[12px] text-gray-900 bg-transparent px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]`} 
                onClick={handlerSelect}>
            { defaultValue }
                <span  className={select ? 'absolute right-5 rotate-[270deg]' :'absolute right-5 rotate-90'}>{'>'}</span>
                <ul 

                className={  `relative overflow-auto mt-3  transition-all rounded-[5px] bg-[#ffffff00] w-full  ${select ? ' relative h-[95px]  border-t  z-10 ' : 'h-[0]'}`}  style={{background: '#ffffff00'}} >
                    {
                        arr.map((i, index)=> <li key={index}  className='flex items-center  border-t cursor-pointer p-2' onClick={() => handlerUserState(name, i)}> {i} </li>)
                    }
                </ul>
            </div>
           </div>
    )
}

















// 'use client';

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation';
// import style from './Select.module.css'


// export default function Select({arr, click}) {

//     const router = useRouter()

//     const [select, setSelect] = useState(false)
//     const [state, setState] = useState('La Paz')

//     function handlerSelect () {
//         setSelect(!select)
//     }

//     function handlerUserState (data) {
//         setState(data)
//     }



//     return (

//         <div  className={select ? style.select : style.noSelect} onClick={handlerSelect}>
//             {state} <span>{'>'}</span>
//             <ul>
//                 {
//                     arr.map((i)=> <li key={i} onClick={() => handlerUserState(i)}>{i}</li>)
//                 }
            
//             </ul>
//         </div>
//     )
// }
