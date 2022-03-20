import { RequestTypes } from "../typeUtils/enums";

interface MethodType {
  method: RequestTypes;
  headers?: {
    Accept?: string;
    "Content-Type"?: string;
    Origin?: string;
    Host?: string;
    Authorization?: string;
  };
  body?: string;
}
const customFetch = async (link: string, method?: MethodType) => {
  try {
    const result = await fetch(link, method);
    return result.json();
  } catch (error) {
    console.log(`Error While fetching data from ${link}: ${error}`);
    return null;
  }
};

export default customFetch;
