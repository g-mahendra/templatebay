import React from "react";
import Image from "next/image";

const Card = ({ item, index }) => {
  return (
    <div className="bg-white h-min flex flex-col justify-center m-2 items-center rounded-lg hover:shadow-2xl md:w-1/3">
      <Image
        src={item.thumbnail}
        alt={item.name}
        height={200}
        width={400}
        className=" rounded-t-lg"
      />
      <div className="flex flex-col items-start w-full bg-gray-50 p-2 rounded-lg">
        <h4 className="my-2 font-bold">{item.name}</h4>
        <p className="text-xs">{item.description}</p>
        <div className="w-full flex flex-row items-center justify-evenly my-3">
          <a
            rel="noreferrer"
            href={item.previewUrl}
            target="_blank"
            className=" bg-gradient-to-b from-blue-400 to-blue-500 text-white w-2/5 rounded-lg flex flex-row justify-center"
          >
            Preview
          </a>
          <a
            rel="noreferrer"
            href={item.downloadUrl}
            target="_blank"
            className=" border-blue-500 bg-white w-2/5 rounded-lg flex flex-row justify-center"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
