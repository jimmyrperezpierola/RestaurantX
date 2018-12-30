import axios from 'axios'
import {Resto} from './models/restaurant'

export class Api {
  static loadRestaurants(): Promise<Resto[]>{
    return new Promise<Resto[]>((resolve, reject) => {
     // get data dari zomato
      axios
      .get("https://developers.zomato.com/api/v2.1/search", {
        headers: {
          "user-key": "9e4b89f662dfa30f1ea6986c31ccda5b"
        },
        params: {
          count: 10
        }
      })
      .then(response => {
        const restaurant = response.data.restaurants.map(({restaurant}: any) => {
          return ({
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.location.address
          });
        }
      )
        resolve(restaurant) 
    })
      .catch(error => {
        reject(error);
      })
    })
  }
}