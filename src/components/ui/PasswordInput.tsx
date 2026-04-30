import React, { useState } from "react";

interface PasswordInputProps {
    label:string;
    name:string;
    register:any;
    error?:string;
}

export const PasswordInput: React.FC<PasswordInputProps>=({
    label,
    name,
    register,
    error
}) => {
    const [show,setShow] = useState(false);

    return(
        <div className= "flex flex-col gap-1" >
            <label className="font-medium">{label}</label>

            <div className="relative">
                <input
                type={show ?"text" : "password"}
                {...register(name)}
                className="border rounded px-3 py-2 w-full pr-10"
                />

                <button
                type="button"
                onClick={()=> setShow(!show)}
                className="absolute right-2 top-2 text-sm"
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>
        
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};