export const decodeHTMLEntities = (text: string) => {
  let decodedText;
  const entities = [
    ["amp", "&"],
    ["nbsp", "             "],
  ];

  for (let i = 0, max = entities.length; i < max; ++i)
    decodedText = text.replace(
      new RegExp("&" + entities[i][0] + ";", "g"),
      entities[i][1]
    );

  return decodedText;
};

export const stripHtml = (text: string) => {
  const decodedText = decodeHTMLEntities(text);
  const strippedString = decodedText?.replace(/(<([^>]+)>)/gi, "");

  return strippedString;
};
