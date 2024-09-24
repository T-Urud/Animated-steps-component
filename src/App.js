import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import svg from "./check.svg";

function App() {
  const [disapear, setDisapear] = useState(false);
  const [count, setCount] = useState(0);
  const max = 2;
  const minimum = 0;

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleAddClick = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };
  const handleMinusClick = () => {
    if (count > minimum) {
      setCount(count - 1);
    }
  };

  const handleHide = () => {
    if (count === 0) {
      setDisapear(true);
    }
  };

  return (
    <div className="p-4 mb-1">
      <div className=" flex items-center justify-center mb-4 gap-3">
        <span
          className={`absolute right-1/2 -z-10 bg-green-400 h-4 rounded-s-full ${
            count >= 1 ? "w-9" : null
          }`}
        ></span>
        <span
          className={`absolute left-1/2 -z-10 bg-green-400 h-4 rounded-e-full ${
            count >= 2 ? "w-9" : null
          }`}
        ></span>
        <div
          className={`${
            count >= 0 ? "bg-green-400" : "bg-white"
          } w-4 h-4 rounded-full relative z-0`}
        >
          <span className="w-[8px] h-[8px] bg-slate-100 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </div>
        <div
          className={`${
            count >= 1 ? "bg-green-400" : "bg-white"
          } w-4 h-4 rounded-full relative z-0`}
        >
          <span className="w-[8px] h-[8px] bg-slate-100 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </div>
        <div
          className={`${
            count === 2 ? "bg-green-400" : "bg-white"
          } w-4 h-4 rounded-full relative z-0`}
        >
          <span className="w-[8px] h-[8px] bg-slate-100 rounded-full absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center relative">
        <motion.div
          className={`bg-slate-100 rounded-full font-medium absolute left-0`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: count === 0 ? 0 : 1,
            x: count === 0 ? -100 : 0,
          }}
          exit={{
            opacity: count === 0 ? 0 : null,
          }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => {
              handleHide();
              handleMinusClick();
            }}
            className="w-full py-3 px-4"
          >
            Back
          </button>
        </motion.div>
        <motion.button
          className={`rounded-full bg-blue-600 text-white font-semibold p-2 max-w-[300px]`}
          initial={{ width: "100%" }}
          animate={{
            width: count === 0 ? null : "90%",
            marginLeft: count === 0 ? null : "75px",
          }}
          onClick={() => {
            handleAddClick();
          }}
        >
          {count === 2 ? (
            <motion.span
              className="flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut" }}
            >
              <img src={svg} alt="check svg" />
              Finish
            </motion.span>
          ) : (
            <span>Continue</span>
          )}
        </motion.button>
      </div>
    </div>
  );
}

export default App;
