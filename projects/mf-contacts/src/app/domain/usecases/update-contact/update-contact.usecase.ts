import { Injectable } from '@angular/core';
import { ContactsGateway } from '../../models/gateway/contacts.gateway';
import { ContactBody } from '../../models/contacts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateContactUseCase {

  constructor(private _contactsGateway: ContactsGateway) { }

  updateContact(contact: ContactBody, id: string): Observable<any> {
    return this._contactsGateway.updateContact(contact, id);
  }
}
