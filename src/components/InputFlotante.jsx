'use client';

export default function Button({ id, name, onChange, defaultValue, required, label }) {

    function stopPropagation(e) {
        e.stopPropagation();
    }
    // console.log(id)

    return (
        <div class="relative z-0 w-full  group ">
            <input
                type="number"
                name={label} 
                id={id} 
                onChange={onChange}
                placeholder=""
                required={required}
                class="block shadow-[#b6b6b6] bg-white shadow-xl  py-2.5  w-full text-[12px] text-gray-900 bg-transparent  px-5 border border-[#dddddd] appearance-none  focus:outline-none focus:ring-0  peer rounded-[5px]" />
            <label for={id} class="z-50 peer-focus:font-medium shadow-white shadow-2xl absolute text-[12px] bg-white px-5 mx-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
        </div>
    )
}