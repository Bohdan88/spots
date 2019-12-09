import { Component } from '@angular/core';
import { IContacts  } from '../data/data';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'forecast';
  // public contacts: Observable<IContacts[]> = contacts$;

}
