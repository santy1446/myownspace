import { Injectable } from '@angular/core';
import { ContactsGateway } from '../../models/gateway/contacts.gateway';
import { Observable } from 'rxjs';
import { GetContact } from '../../models/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class GetUserContactsUseCase {

  constructor(private _contactsGateway: ContactsGateway) { }

  getUserContacts(): Observable<GetContact[]> {
    return this._contactsGateway.getUserContacts();
  }
}
