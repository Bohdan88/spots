import {Component, EventEmitter, OnInit} from '@angular/core';
import { Input, Output } from '@angular/core';
import { IContacts } from "../../data/data";

@Component({
  selector: 'app-chosen-option',
  templateUrl: './chosen-option.component.html',
  styleUrls: ['./chosen-option.component.less']
})
export class ChosenOptionComponent {
  @Input() contact: IContacts[];

}
