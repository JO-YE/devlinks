"use client";


import { supabase } from "@/lib/supabase";
import { useState } from 'react';

export default function Login() {
  const [data, setData] = useState<{
    email: string,
    password: string
  }>({
    email: '',
    password: ''
  })

  const login = async () => {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: "someone@email.com",
        password: "HEsNUJtHYehNIONHlyWZ",
      });

      if (data) console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col w-[1440px] px-[482px] py-[206px] justify-center items-center">
      <div className="w-[476px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full mb-[51px] ">
        <div className="w-[182.5px] flex flex-row items-start justify-start gap-[7.5px]">
          <img
          className="h-10 w-10 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/solarlinkcirclebold.svg"
          />
        <div className="flex-1 flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0">
          <img 
            className="self-stretch h-[26.3px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/devlinks.svg"
          />
        </div>
      </div>
      </div>
      <form className="m-0 self-stretch rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start p-10 box-border gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
          <h1 className="m-0 self-stretch relative text-13xl leading-[150%] font-bold font-body-m text-dark-grey text-left">
            Login
          </h1>
          <p className="self-stretch relative text-base leading-[150%] font-body-m text-grey text-left">
            Add your details below to get back into the app
          </p>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
          <h3 className="self-stretch relative text-xs leading-[150%] font-body-m text-dark-grey text-left">
            Email address
          </h3>
          <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-borders">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                alt=""
                src="/phenvelopesimplefill.svg"
              />
            </div>
            <input
              className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-body-m text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-darkslategray text-left inline-block min-w-[218px] max-w-full p-0"
              placeholder="e.g. alex@email.com"
              type="text"
              name="email"
              value={data?.email}
              onChange={handleChange}
            />
            <img
              className="h-1.5 w-3 relative hidden"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <h3 className="self-stretch relative text-xs leading-[150%] font-body-m text-dark-grey text-left">
            Password
          </h3>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 gap-[12px] border-[1px] border-solid border-borders">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                alt=""
                src="/phlockkeyfill.svg"
              />
            </div>
            <input
              className="w-[151px] [border:none] [outline:none] font-body-m text-base bg-[transparent] h-6 relative leading-[150%] text-darkslategray text-left inline-block p-0"
              placeholder="Enter your password"
              type="password"
              name="password"
              value={data?.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[11px] px-5 bg-[#633CFF] self-stretch rounded-lg flex flex-row items-start justify-center hover:bg-mediumslateblue">
          <div onClick={login} className="relative text-base leading-[150%] font-semibold font-body-m text-white text-left inline-block min-w-[43px]">
            Login
          </div>
        </button>
        <div className="self-stretch relative text-base leading-[150%] font-body-m text-center">
          <span className="text-[#737373]">{`Don’t have an account? `}</span>
          <span className="pointer text-[#633CFF]">Create account</span>
        </div>
      </form>
    </div>
  );
}
