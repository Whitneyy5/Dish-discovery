import React from "react";

const register = () => {
  return
  
   <section className="pb-5">
     <div
       id="background"
       className="rounded-lg flex flex-col border w-[32%] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]"
     >
       <div className="text-[2.125rem] w-full text-white  text-center font-medium pt-4">
         <h2>Shop with us</h2>
       </div>

       <div className=" w-full pl-4 outline-none focus:border-black valid:border-[white]">
         <h1 className="text-left pb-3 text-[white] text-sm font-medium">
           Email Address
         </h1>
         <input
           type="email"
           placeholder="Enter Email Address"
           className="flex bg-transparent border border-black text-[white] rounded-lg  px-2 py-3 items-center  w-full"
         />
       </div>
       <div className=" w-full pl-4 outline-none focus:border-black valid:border-[white]">
         <h1 className="text-left pb-3 text-[white] text-sm font-medium">
           Password
         </h1>
         <input
           type="password"
           placeholder="Enter Password"
           className="flex bg-transparent border border-black text-[white] rounded-lg  px-2 py-3 items-center  w-full"
         />
       </div>
       <div>
         <p className="pt-2 text-[0.875rem text-[white]">
           (Use alphabets, numbers and characters)
         </p>
       </div>
       <div className="flex justify-center">
         <button className="items-center text-[#FFFFFF] rounded-lg bg-[#663056] py-2 px-5 w-[126px]">
           Login
         </button>
       </div>
       </div>
     </div>
   </section>;
};

export default register;
