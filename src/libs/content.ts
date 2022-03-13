import { contentName } from "@constants/content";

export const isContent = (page: string): boolean => {
  return Object.keys(contentName).indexOf(page) !== -1;
};
