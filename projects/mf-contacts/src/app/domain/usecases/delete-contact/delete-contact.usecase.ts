import { Injectable } from '@angular/core';
import { ContactsGateway } from '../../models/gateway/contacts.gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteContactUseCase {

  constructor(private _contactsGateway: ContactsGateway) { }

  deleteContact(id: string): Observable<any> {
    return this._contactsGateway.deleteContact(id);
  }

}
