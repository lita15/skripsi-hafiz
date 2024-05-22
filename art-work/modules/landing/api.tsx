import axios from "axios";

export const getCatalog = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/catalogs?populate=*`;

  const data = await axios.get(url);

  return data.data;
};

export const getCatalogById = async (id: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/catalogs/${id}?populate=*`;
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("token") as string
      )}`,
    },
  };
  const data = await axios.get(url, config);

  return data.data;
};
