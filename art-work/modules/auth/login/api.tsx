import axios from "axios";

export const login = async (body: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/local`;
  const response = await axios.post(url, body);
  return response.data;
};
