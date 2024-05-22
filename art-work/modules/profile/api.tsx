import axios from "axios";

export const getArtworks = async () => {
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

export const postArtworks = async (id: any, body: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/me?populate=artworks.image`;
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("token") as string
      )}`,
    },
  };
  const data = await axios.post(url, config, body);

  return data.data;
};

export const editProfile = async (id: any, body: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users`;
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("token") as string
      )}`,
    },
  };
  const data = await axios.put(url, config, body);

  return data;
};

export const profileDetail = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/me?populate=avatar`;
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

export const creatArtworks = async (body: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/artworks`;
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("token") as string
      )}`,
    },
  };
  const data = await axios.post(url, body, config);

  return data;
};

export const uploadFile = async (body: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/upload`;
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("token") as string
      )}`,
    },
  };
  const data = await axios.post(url, config, body);

  return data.data;
};
