import axios from 'axios'

const endpoint = 'https://ddm-project.herokuapp.com/api/2'

class AdApi {
  private _throwError(error: any) {
    throw new Error(`AdApi error, ${error}`)
  }

  private _get(route: string) {
    return axios.get(endpoint + route)
  }

  async fetchAds() {
    const resp = await this._get('/all')

    if (resp.status !== 200) {
      this._throwError(`request failed with status ${resp.status}`)
    }

    return resp.data
  }
}

export default new AdApi()
