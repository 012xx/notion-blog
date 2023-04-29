import { RichTextType } from "@/types/types";

export const getText = (richTextArr: RichTextType[]) => {
  try {
    const textArr = richTextArr.map((richText) => richText.plain_text);
    return textArr.join("");
  } catch (error) {
    console.log(error);
  }
  return "";
};
