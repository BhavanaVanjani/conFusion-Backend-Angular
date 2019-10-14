/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Dishes } from '../../models/Dishes';
import { Promotions } from '../../models/Promotions';
import { Leaders } from '../../models/Leaders';
import { Customer } from '../../models/Customer';
import { Favorite } from '../../models/Favorite';
import { Comments } from '../../models/Comments';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Dishes: Dishes,
    Promotions: Promotions,
    Leaders: Leaders,
    Customer: Customer,
    Favorite: Favorite,
    Comments: Comments,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
