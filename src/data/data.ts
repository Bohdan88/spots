import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface IContacts {
  img: string,
  address: string,
  phone: number // дополнительно задание pipe для форматирования
  weather: {
    title: string,
    icon: string,
    water: number,
    temperature: number
  },
  addressDetailed: {
    unit: number | string,
    street: string,
    postal: number | string,
  },
  social_info: {
    title: string,
    img: string,
    followers: number,
    following: number
  },
  type: string
}


export const contacts: IContacts[] = [
  {
    img: 'assets/img/warsaw.jpg',
    address: 'Warsaw',
    addressDetailed: {
      unit: 1004,
      street: 'Bosmanska 1',
      postal: '00940'
    },
    phone: 6055555551, // дополнительно задание pipe для форматирования
    weather: {
      title: 'Sunny',
      icon: 'assets/img/sunny.png',
      water: 0,
      temperature: 1
    },
    social_info: {
      title: 'Jakub',
      img: 'assets/img/warsaw_avatar.jpg',
      followers: 221,
      following: 39
    },
    type: 'str'
  },
  {
    img: 'assets/img/kiev.jpg',
    address: 'Kiev',
    addressDetailed: {
      unit: '37B',
      street: 'Antonova 22',
      postal: 33345
    },
    phone: 3809840761, // дополнительно задание pipe для форматирования
    weather: {
      title: 'Sunny',
      icon: 'assets/img/sunny.png',
      water: 0,
      temperature: -3
    },
    social_info: {
      title: 'Alex',
      img: 'assets/img/ukraine_avatar.jpg',
      followers: 350,
      following: 298
    },
    type: 'str'
  },
  {
    img: 'assets/img/london.jpg',
    address: 'London',
    addressDetailed: {
      unit: 22,
      street: 'Downing Street 10',
      postal: 'SW1A2AA'
    },
    phone: 9111234561, // дополнительно задание pipe для форматирования
    weather: {
      title: 'Sunny',
      icon: 'assets/img/sunny.png',
      water: 11,
      temperature: 37
    },
    social_info: {
      title: 'Oliver',
      img: 'assets/img/london_avatar.jpg',
      followers: 890,
      following: 944
    },
    type: 'str'
  },
  {
    img: 'assets/img/toronto.jpg',
    address: 'Toronto',
    addressDetailed: {
      unit: 1004,
      street: 'Bayly Street',
      postal: 'L1WB04'
    },
    phone: 4372288183, // дополнительно задание pipe для форматирования
    weather: {
      title: 'Sunny',
      icon: 'assets/img/sunny.png',
      water: 0,
      temperature: 6
    },
    social_info: {
      title: 'James',
      img: 'assets/img/toronto_avatar.png',
      followers: 221,
      following: 39
    },
    type: 'str'
  },
  {
    img: 'assets/img/Munich.jpg',
    address: 'Munich',
    phone: 6912345678, // дополнительно задание pipe для форматирования
    weather: {
      title: 'Cloudy',
      icon: 'assets/img/cloudy48.png',
      water: 0,
      temperature: 3
    },
    addressDetailed: {
      unit: 19,
      street: 'Schulstrasse 4',
      postal: 32547
    },
    social_info: {
      title: 'Emerson',
      img: 'assets/img/munich_avatar.jpg',
      followers: 91,
      following: 320
    },
    type: 'str'
  }
];
