'use client';
import React, { useState } from 'react';

const YourComponent: React.FC = () => {
  const [minprice, setMinprice] = useState<number>(0);
  const [maxprice, setMaxprice] = useState<number>(10000);
  const min = 0;
  const max = 10000;
  const [minthumb, setMinthumb] = useState<number>(0);
  const [maxthumb, setMaxthumb] = useState<number>(0);

  const mintrigger = () => {
    validation();
    const newMinprice = Math.min(minprice, maxprice - 500);
    setMinprice(newMinprice);
    setMinthumb(((newMinprice - min) / (max - min)) * 100);
  };

  const maxtrigger = () => {
    validation();
    const newMaxprice = Math.max(maxprice, minprice + 200);
    setMaxprice(newMaxprice);
    setMaxthumb(100 - ((newMaxprice - min) / (max - min)) * 100);
  };

  const validation = () => {
    if (/^\d*$/.test(String(minprice))) {
      if (minprice > max) {
        setMinprice(9500);
      }
      if (minprice < min) {
        setMinprice(min);
      }
    } else {
      setMinprice(0);
    }
    if (/^\d*$/.test(String(maxprice))) {
      if (maxprice > max) {
        setMaxprice(max);
      }
      if (maxprice < min) {
        setMaxprice(200);
      }
    } else {
      setMaxprice(10000);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            step={100}
            min={min}
            max={max}
            onChange={mintrigger}
            value={minprice}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <input
            type="range"
            step={100}
            min={min}
            max={max}
            onChange={maxtrigger}
            value={maxprice}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <div className="relative z-10 h-2">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
              style={{ right: `${maxthumb}%`, left: `${minthumb}%` }}></div>

            <div
              className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2"
              style={{ left: `${minthumb}%` }}></div>

            <div
              className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2"
              style={{ right: `${maxthumb}%` }}></div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700">
          <div>
            <input
              type="text"
              maxLength={5}
              onChange={mintrigger}
              value={minprice}
              className="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              maxLength={5}
              onChange={maxtrigger}
              value={maxprice}
              className="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
