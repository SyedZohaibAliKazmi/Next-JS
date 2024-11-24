import React from "react";

const Navcbar = () => {
  return (
    <div>
      <div>
        <div className="flex bg-black text-blue-300 justify-between p-2 w-90[%]">
          <div>
            <h1 >Logo</h1>
          </div>

          <div className="flex">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
          </div>

          <div>
            <button>Sign Up</button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Navcbar;
