import { Injectable } from '@angular/core';
import { ContactsGateway } from '../../models/gateway/contacts.gateway';
import { ContactBody } from '../../models/contacts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateContactUseCase {

  constructor(private _contactsGateway: ContactsGateway) { }

  createContact(contact: ContactBody): Observable<ContactBody> {
    return this._contactsGateway.createContact(contact);
  }
}
