import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {WelcomeComponent} from './common/welcome.component';
//import {Hero} from './hero/hero';


interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h3>Denkwelten-Branch-heroes</h3>
<!--        <h2>{{title}}directory js for js-Files and templates</h2>
        <welcome-component></welcome-component>-->
        <h2>{{hero.name}} details</h2>
        <div><label>id:</label>{{hero.id}}</div>
        <div>
            <label></label>
            <div><input type="text" [(ngModel)]="hero.name" placeholder="name"></div>
        </div>
        `,
    directives : [WelcomeComponent]
})
export class AppComponent{
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
};

