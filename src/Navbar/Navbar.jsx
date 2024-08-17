import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {

    const [isActive,setIsActive]=useState(false)


    const handleChange =(e)=>{
        setIsActive(!isActive)
    }

    return (
        <div className=''>
            <div className="navbar mx-auto bg-[#F85606] flex justify-between   ">
                <div className="flex-none ">
                    
                        <img className='w-48 ' src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="" />
                    
                </div>
                
                <div className="flex-none">
                  
                <CiMenuBurger onClick={handleChange} />
                  
                    {isActive? <>logout</>:<>
                    login
                    <div>
                        register
                    </div>
                    </>
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;