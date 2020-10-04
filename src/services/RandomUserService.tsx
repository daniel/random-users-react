export type RandomUserProfile = {
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  phone: string
  dob: {
    date: string
    age: number
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  gender: 'male' | 'female'
}

export type RandomUserResponse = {
  results: RandomUserProfile[]
  info: {
    results: number
    page: number
  }
}

const PAGE_SIZE = 50
const BASE_URL = 'https://randomuser.me/api/'

export default class RandomUserService {
  static async get(page: number): Promise<RandomUserProfile[]> {
    return fetch(`${BASE_URL}?results=${PAGE_SIZE}&&page=${page}`)
      .then(response => response.json())
      .then((response: RandomUserResponse) => response.results)
      .catch(error => {
        console.warn(error)
        return []
      })
  }
}
