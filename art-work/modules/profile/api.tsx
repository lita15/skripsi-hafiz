import axios from "axios";

export const getArtworks = async (id: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/me?populate=artworks.image`;
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
