import { RichTextType, PageType } from "@/types/types";

export const getText = (richTextArr: RichTextType[]) => {
  try {
    const textArr = richTextArr.map((richText) => richText.plain_text);
    return textArr.join("");
  } catch (error) {
    console.log(error);
  }
  return "";
};

export const getCover = (cover: PageType["cover"]) => {
  if (cover && cover.file) return cover.file.url;
  if (cover && cover.external) return cover.external.url;
  return "/notImage.png";
};

export const getDate = (data: { start: string }) => {
  try {
    return data.start;
  } catch (error) {
    console.log(error);
  }
  return "-";
};

export const getMultiSelect = (multiSelect: [{ name: string }]) => {
  try {
    return multiSelect.map((tag) => tag.name);
  } catch (error) {
    console.error(error);
  }
  return [];
};
