class Api {
  private static API_URL = 'https://api.unsplash.com/';

  private static ACCESS_KEY = 'ffcAg0EkXHPXgaZxENhlpjr1EgmLRE_0enw96WPyFpg';

  private static SECRET_KEY = '-2sQ4rXxQkeRa5qLeIIBf-a-VkycE3wSGd7JQz6Dcjc';

  public static async getListCards() {
    let url = this.API_URL + '/photos';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${this.ACCESS_KEY}`,
      },
    });

    if (response.ok) {
      const res = await response.json();
      return res;
    }

    console.log('Error: got photos');

    return [];
  }
}

export default Api;
