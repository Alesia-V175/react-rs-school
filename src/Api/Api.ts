import { API } from '../constants/apiConstants';
import { RequestMethod } from '../types/enums';
import { ICardItem, ISearchParams } from '../types/interfaces';

class Api {
  private static async apiRequest(url: string): Promise<Response> {
    const response = await fetch(url, {
      method: RequestMethod.GET,
      headers: {
        Authorization: `Client-ID ${API.ACCESS_KEY}`,
      },
    });

    return response;
  }

  public static async getListCards(): Promise<ICardItem[]> {
    const url = `${API.API_URL}/photos?per_page=51`;

    const response = await this.apiRequest(url);

    if (response.ok) {
      const res = await response.json();
      return res;
    }

    return [];
  }

  public static async searchListCards(query: string): Promise<ICardItem[]> {
    const url = `${API.API_URL}/search/photos?per_page=51&query=${query}`;

    const response = await this.apiRequest(url);

    if (response.ok) {
      const res: ISearchParams = await response.json();
      return res.results;
    }

    return [];
  }

  public static async getCard(id: string): Promise<ICardItem | undefined> {
    const url = `${API.API_URL}/photos/${id}`;

    const response = await this.apiRequest(url);

    if (response.ok) {
      const res = await response.json();
      return res;
    }

    return undefined;
  }
}

export default Api;
