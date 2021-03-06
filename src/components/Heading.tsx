import { createElement } from "react";

import headingStyles from "@styles/components/Heading.module.css";

import type { NextPage } from "next";
import type { ReactElement } from "react";

interface IHeadingProps {
  text: string;
  level: string;
  icon?: string;
}

export const HeadingPrimary: NextPage<IHeadingProps> = ({ text, level }): ReactElement => {
  return createElement(
    `h${level}`,
    {
      className: `w-full font-bold pb-2 border-b border-solid border-line-primary-color ${headingStyles.primary}`,
    },
    text,
  );
};

export const HeadingSecondary: NextPage<IHeadingProps> = ({ text, level, icon }): ReactElement => {
  const imgParams = {
    className: "inline-block pr-1",
    src: `/image/svg/${icon}.svg`,
  };

  const img = !!icon ? createElement("img", imgParams) : null;

  return createElement(`h${level}`, { className: `w-full font-bold pl-2 ${headingStyles.secondary}` }, img, text);
};
