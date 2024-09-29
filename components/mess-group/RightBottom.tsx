import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Image from "next/image";
import MessageInput from "./MessageInput";

const RightBottom = () => {
  return (
    <div className="flex flex-row bg-transparent items-center justify-start w-full">
      <div className="flex flex-row gap-[16px] items-center justify-center">
        <Icon
          icon="carbon:add-filled"
          width={28}
          height={28}
          className="text-primary-500 cursor-pointer"
        />
        <Icon
          icon="basil:picture-solid"
          width={28}
          height={28}
          className="text-primary-500 cursor-pointer"
        />
        <Icon
          icon="fluent:mic-record-28-filled"
          width={28}
          height={28}
          className="text-primary-500 cursor-pointer"
        />
      </div>

      <div className="flex flex-row ml-[24px] w-[80.5%] ">
        <MessageInput />
      </div>

      <div className="flex items-center justify-start w-fit ml-[16px]">
        <div className="flex items-center ">
          <Image
            src="/assets/images/icon.png"
            alt="ava"
            width={28}
            height={28}
            className="bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default RightBottom;