import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [hiddenBtn, setHiddenBtn] = useState(true);

  return (
    <div className="p-4">
      <div className=" flex items-center justify-center mb-4 gap-3">
        <span className="w-[8px] h-[8px] bg-slate-200 rounded-full"></span>
        <span className="w-[8px] h-[8px] bg-slate-200 rounded-full"></span>
        <span className="w-[8px] h-[8px] bg-slate-200 rounded-full"></span>
      </div>
      <div className="flex items-center gap-2">
        <motion.div
          className={`bg-slate-100 rounded-full font-medium`}
          initial={{ opacity: 0, display: "none" }}
          animate={{
            opacity: hiddenBtn ? 0 : 1,
            display: hiddenBtn ? "none" : "block",
          }}
          exit={{ opacity: 0, display: "none" }}
          // transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => setHiddenBtn(true)}
            className="w-full py-3 px-4"
          >
            Back
          </button>
        </motion.div>
        <button
          className="rounded-full w-full bg-blue-600 text-white font-semibold p-2"
          onClick={() => {
            setIsClicked(true);
            setHiddenBtn(false);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default App;
