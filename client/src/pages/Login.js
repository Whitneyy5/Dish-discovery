import React from "react";

const Login = () => {
  return <section className="pb-5">

  <div className="rounded-lg flex flex-col border w-[32%] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
<div className="text-[2.125rem] w-full  text-center font-medium pt-4">
            <p>Shop with us</p>
      </div>
      
      <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Email Address
              </h1>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Password (minimum of 8 characters)
              </h1>
              <div className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full justify-between focus-within:border-black valid:border-[#017358]">
                <input
                  className="w-full outline-none"

                  placeholder="Enter Password"
                />
            </div>
      </div>
      <div>
             <p className="pt-2 text-[0.875rem]">
                (Use alphabets, numbers and characters)
              </p>
            </div>
            <div className="flex justify-center">
              <button className="items-center text-[#FFFFFF] rounded-lg bg-[#663056] py-2 px-5 w-[126px]">
                Login
              </button>
            </div>
          <div className="w-[22rem] mb-[10px] flex flex-col gap-8 text-base font-normal">
            <h1>
              Don’t have an account,{" "}
                <span className="text-[#663056]"> Register here</span>
              
            </h1>
          </div>
      </div>
  </section> 
};

export default Login;
