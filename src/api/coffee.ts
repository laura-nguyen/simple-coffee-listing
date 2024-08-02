import axios from "axios";
export interface CoffeeItem {
  id: number;
  name: string;
  image: string;
  price: string; // Since price includes a dollar sign, it's a string
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}

// not necessary
// interface ApiResponse {
//   data: CoffeeList[];
//   status: number;
// }

// interface ApiError {
//   message: string;
//   status: number;
// }

// an array of offee items

type CoffeeList = CoffeeItem[];

const url =
  "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

export async function fetchCoffeeData(): Promise<CoffeeList> {
  try {
    const response = await axios.get<CoffeeList>(url);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

//Old

// export async function fetchCoffeeData(): Promise<ApiResponse | ApiError> {
//   try {
//     const response = await axios.get<ApiResponse>(url);
//     return response.data;
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//     throw error;
//   }
// }
