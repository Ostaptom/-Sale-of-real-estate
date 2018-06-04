import {Provider} from '@angular/core';
import {BlogService} from './blog.service';
import {FlatService} from './flat.service';
import {HouseService} from './house.service';
import {UserService} from './user.service';
import {UserDetailsService} from './user-details.service';

export const serviceProvider:Provider[]=[
  BlogService,
  FlatService,
  HouseService,
  UserService,
  UserDetailsService
];
