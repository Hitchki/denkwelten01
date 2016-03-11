import {Injectable} from 'angular2/core';
import {HEROES} from './hero/mock-heroes';


@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
        //return HEROES;
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

}
