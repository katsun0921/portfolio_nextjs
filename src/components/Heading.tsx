import type { NextPage } from "next";
import type { ReactElement } from "react";
import { createElement } from "react";
import headingStyles from "@styles/components/heading.module.css";

export interface IHeadingProps {
  text: String;
  level: String;
  icon?: String;
}

export const HeadingPrimary: NextPage<IHeadingProps> = ({
  text,
  level,
}): ReactElement => {
  return createElement(
    `h${level}`,
    {
      className: `w-full font-bold pb-2 border-b border-solid border-line-primary-color ${headingStyles.primary}`,
    },
    text,
  );
};

export const HeadingSecondary: NextPage<IHeadingProps> = ({
  text,
  level,
  icon,
}): ReactElement => {
  const img = !!icon
    ? createElement("img", {
        className: "inline-block pr-1",
        src: `/image/svg/${icon}.svg`,
      })
    : null;

  return createElement(
    `h${level}`,
    { className: `w-full font-bold pl-2 ${headingStyles.secondary}` },
    img,
    text,
  );
};
