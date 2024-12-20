import ConfirmModal from "@/components/friends/ConfirmModal";
import { Button } from "@/components/ui/button";
import { ConfirmModalProps } from "@/types/friends";
import { User } from "@/types/object";
import Image from "next/image";
import React from "react";

interface BlockMessagesProps {
  block: User;
  unBlock: boolean;
  setUnBlock: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<string>>;
}

const BlockMessages = ({
  block,
  unBlock,
  setUnBlock,
  setIndex
}: BlockMessagesProps) => {
  const confirm: ConfirmModalProps = {
    setConfirm: setUnBlock,
    setIndex: setIndex,
    listId: block.id,
    name: block.name,
    action: "unblock"
  };

  const handleUnBlock = () => {
    setUnBlock(!unBlock);
  };
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full h-fit pl-2">
        <div className="flex flex-row justify-between items-center w-full h-fit">
          <div className="flex flex-row h-fit w-fit gap-3 items-center justify-start">
            <Image
              src={block.ava === "" ? "/assets/ava/default.png" : block.ava}
              alt="ava"
              width={36}
              height={36}
              className="rounded-full"
            />
            <p className="text-dark100_light900 body-regular">{block.name}</p>
          </div>

          <Button
            className="flex border border-accent-red text-accent-red shadow-none bg-transparent hover:bg-accent-red hover:bg-opacity-20 hover:border-accent-red hover:border-opacity-0  body-regular rounded-lg px-3 py-[10px]"
            onClick={handleUnBlock}
          >
            Unblock
          </Button>
        </div>
      </div>

      {unBlock && <ConfirmModal confirm={confirm} />}
    </>
  );
};

export default BlockMessages;
