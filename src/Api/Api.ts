import { API } from '../constants/apiConstants';
import { RequestMethod } from '../types/enums';

class Api {
  private static API_URL = API.API_URL;

  private static ACCESS_KEY = API.ACCESS_KEY;

  public static async getListCards() {
    const url = `${this.API_URL}/photos?per_page=51`;

    const response = await fetch(url, {
      method: RequestMethod.GET,
      headers: {
        Authorization: `Client-ID ${this.ACCESS_KEY}`,
      },
    });

    if (response.ok) {
      const res = await response.json();
      return res;
    }

    return [];
  }
}

export default Api;
