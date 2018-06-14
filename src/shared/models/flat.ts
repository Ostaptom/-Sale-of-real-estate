import {House} from './house';
import {FlatImageWrapper} from './utils/FlatImageWrapper';

export class Flat {
  id: number;
  image: string;
  price: number;
  house: House;
  space: number;
  priceForOneSpace: number;
  countRoom: number;
  images:FlatImageWrapper;

}
