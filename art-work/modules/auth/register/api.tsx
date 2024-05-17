import axios from "axios";

export const register = async (body: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`;
  const response = await axios.post(url, body);
  return response.data;
};
