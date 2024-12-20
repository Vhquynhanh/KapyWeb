import { User } from "@/types/object";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Button } from "../ui/button";
import { HistoryFindFriend } from "@/types/friends";
import FirstItem from "./AccountModalItems/FirstItem";
import SecondItem from "./AccountModalItems/SecondItem";
import ThirdItem from "./AccountModalItems/ThirdItem";
import FourthItem from "./AccountModalItems/FourthItem";

interface AccountProps {
  user: User | HistoryFindFriend;
  setAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Account {
  account: AccountProps;
}

const AccountModal: React.FC<Account> = ({ account }) => {
  const { user, setAccount } = account;
  const handleBack = () => {
    setAccount(false);
  };
  return (
    <div className="modal-overlay">
      <div className="min-w-[400px] max-w-[400px] md:max-w-[520px] lg:w-[520px] h-fit rounded-lg background-light900_dark200 items-center justify-start flex flex-col gap-4 pb-4">
        <div className="flex w-full justify-between px-4 pt-2">
          <p className="text-dark100_light900 paragraph-semibold mt-2">
            Information of account
          </p>
          <Button
            className="flex bg-transparent shadow-none p-0 border-none hover:bg-transparent h-full w-fit"
            onClick={handleBack}
          >
            <Icon
              icon="iconoir:cancel"
              width={24}
              height={24}
              className="text-dark100_light900"
            />
          </Button>
        </div>

        {/*Background-Ava-Name*/}
        <FirstItem user={user} />

        <div className="flex flex-col gap-4 w-full h-fit px-4">
          <span className="flex w-full h-[0.5px] background-light500_dark400"></span>

          {/*Information*/}
          <SecondItem user={user} />

          <span className="flex w-full h-[0.5px] background-light500_dark400"></span>

          {/*Picture*/}
          <ThirdItem user={user} />

          <span className="flex w-full h-[0.5px] background-light500_dark400"></span>

          <FourthItem user={user} />
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
