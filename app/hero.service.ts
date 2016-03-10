import {Injectable} from 'angular2/core';
import {HEROES} from './hero/mock-heroes';


@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
        //return HEROES;
    }
}
