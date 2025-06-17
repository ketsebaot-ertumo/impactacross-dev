"use client";

import React from "react";

const Loader = () => {
  return (
    <div className="w-full min-h-[500px] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
