import React from "react";

const BarProgress = ({ stat }) => {
  const percentBarProgress = (statValue) => {
    const Max_Stat_Value = 255;
    const percent = (100 * statValue) / Max_Stat_Value;
    return `${percent}%`;
  };

  return (
    <article>
      <section className="flex justify-between px-2 ">
        <h5>{stat.name} </h5>
        <span>{stat.value}255 </span>
      </section>
      <div className="h-6  rounded-md  bg-slate-300">
        <div
          style={{ width: percentBarProgress(stat.value) }}
          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
        ></div>
      </div>
    </article>
  );
};

export default BarProgress;
