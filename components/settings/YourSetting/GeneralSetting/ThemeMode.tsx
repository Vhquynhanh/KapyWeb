"use client";
import React, { useState } from "react";
import SettingItem from "../sharedSetting/SettingItem";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { themeMode } from "@/constants/settings";
import { useTheme } from "@/context/ThemeProvider";

const ThemeMode = () => {
  const [selectedValue, setSelectedValue] = useState("light");
  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  const { mode, setMode } = useTheme();
  return (
    <div className="flex flex-col background-light900_dark400 items-start justify-start py-3 px-4 rounded-lg w-full h-fit gap-4">
      <p className="text-dark100_light900 paragraph-medium">Mode</p>
      <div className="flex flex-col pl-2 gap-4 w-full h-fit">
        {themeMode.map((item) => {
          const general = {
            icon: item.icon,
            title: item.title,
            description: item.description
          };
          return (
            <RadioGroup value={selectedValue} onValueChange={handleValueChange}>
              <div
                className="flex flex-row items-start justify-between w-full h-fit"
                onClick={() => handleValueChange(item.description)}
                style={{ cursor: "pointer" }}
              >
                <SettingItem general={general} />
                <div className="flex h-fit w-fit">
                  <RadioGroupItem
                    value={item.description}
                    id={item.description}
                    className="data-[state=checked]:bg-primary-500 border-light-600 dark:border-dark-500 border text-light-900 data-[state=checked]:border-none h-5 w-5"
                    onClick={() => {
                      setMode(item.description);

                      if (item.description !== "system") {
                        localStorage.theme = item.description;
                      } else {
                        localStorage.removeItem("theme");
                      }
                    }}
                  />
                </div>
              </div>
            </RadioGroup>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeMode;