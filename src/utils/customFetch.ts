import type { RequestTypes } from "../typeUtils/enums";
const customFetch = async (link: string, method?: RequestTypes.GET) => {
  try {
    const result = await fetch(link);
    return result.json();
  } catch (error) {
    console.log(`Error While fetching data from ${link}: ${error}`);
    return null;
  }
};

export default customFetch;
