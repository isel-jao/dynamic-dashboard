export const generateRandomString = (
  length: number,
  duplicate = true,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
) => {
  if (!duplicate) {
    if (length > characters.length)
      throw new Error(
        "Length must be less than or equal characters length to avoid duplicate characters"
      );
    for (const char of characters) {
      if (characters.split(char).length - 1 > 1)
        throw new Error(
          "Characters must be unique to avoid duplicate characters"
        );
    }
  }
  let result = "";
  const charactersLength = characters.length;
  for (let index = 0; index < length; index++) {
    let char = characters.charAt(Math.floor(Math.random() * charactersLength));
    if (!duplicate) {
      while (result.includes(char)) {
        char = characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    }
    result += char;
  }
  return result;
};
