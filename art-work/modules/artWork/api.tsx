import axios from "axios";

export const getArtworks = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/artworks?populate=*`;
  const data = await axios.get(url);

  return data.data;
};

export const getArtworksById = async (id: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/artworks/${id}?populate=*`;

  const data = await axios.get(url);

  return data.data;
};
