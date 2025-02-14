import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  uid: number;
  username: string;
  role: string;
}

const useBuyer = (): number | null => {
  const token = Cookies.get("_auth");

  if (!token) {
    console.warn("No token found in cookies.");
    return null;
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);
    return decoded.uid ?? null;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
};

export default useBuyer;