import { Injectable } from '@angular/core';
import { ContactsGateway } from '../../../domain/models/gateway/contacts.gateway';
import { Observable, map } from 'rxjs';
import { ContactBody, GetContact } from '../../../domain/models/contacts.model';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environments";


@Injectable({
  providedIn: 'root'
})
export class ContactsService extends ContactsGateway{

  constructor(private _http: HttpClient) {
    super();
  }

  createContact(contact: ContactBody): Observable<ContactBody> {
    return this._http.post<any>(environment.contactsEndpoint, contact);
  }
  updateContact(contact: ContactBody, id: string): Observable<any> {
    return this._http.put(`${environment.contactsEndpoint}/${id}`, contact);
  }
  getUserContacts(): Observable<GetContact[]> {
    return this._http.get<any>(environment.contactsEndpoint).pipe(map (data=> data));
  }
  deleteContact(id: string): Observable<any> {
    return this._http.delete(`${environment.contactsEndpoint}/${id}`)
  }

}
