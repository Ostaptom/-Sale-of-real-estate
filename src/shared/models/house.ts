import {Flat} from './flat';
import {Image} from './image';

export class House {
  id: number;
  information: string;
  flats: Flat[] = [];
  image: string;
  name:string;
  images: Image[]=[];
  maps:string;
}
