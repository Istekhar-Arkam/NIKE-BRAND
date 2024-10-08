import React from "react";

const Button1 = () => {
  return (
    <div class="relative group">
      <div class="relative w-36 h-10 opacity-90 overflow-hidden rounded-xl bg-black z-10">
        <div class="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

        <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
          <button
            name="text"
            class="input font-semibold text-lg h-full opacity-90 w-full px-10 py-1 rounded-xl bg-black"
          >
            Shop here
          </button>
        </div>
        <div class="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]"></div>
      </div>
    </div>
  );
};

export default Button1;
