import {Component, OnInit} from '@angular/core';
import {contacts, IContacts} from "../../data/data";

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.less']
})
export class CardBodyComponent implements OnInit {

  public contacts: IContacts[] = contacts;

  public selectedContact: object;


  onSelect(contact: IContacts[]): void {
    this.selectedContact = contact;
  }

  ngOnInit(): void {
    this.selectedContact = contacts[0];
  }

}
