import axios from "axios";

export const getCatalog = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/catalogs?populate=*`;
  const data = await axios.get(url);

  return data.data;
};
