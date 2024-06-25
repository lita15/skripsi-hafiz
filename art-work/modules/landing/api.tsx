import axios from "axios";

export const getCatalog = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/catalogs?populate=*`;

  const data = await axios.get(url);

  return data.data;
};

export const getCatalogById = async (id: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/catalogs/${id}?populate=*`;

  const data = await axios.get(url);

  return data.data;
};

export const getPromo = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/banner-promos?populate=image_url`;

  const data = await axios.get(url);

  return data.data;
};
