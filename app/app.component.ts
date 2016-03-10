import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {WelcomeComponent} from './common/welcome.component';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>Denkwelten</h1>
        <h2>{{title}}directory js for js-Files and templates</h2>
        <welcome-component></welcome-component>
        `,
    directives : [WelcomeComponent]
})
export class AppComponent{
    public title = 'Denkwelten';
    public hero = 'Franz';
};

