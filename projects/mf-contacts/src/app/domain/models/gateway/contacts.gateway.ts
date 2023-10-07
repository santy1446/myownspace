import { Observable } from "rxjs";
import { ContactBody, GetContact } from "../contacts.model";

export abstract class ContactsGateway {
    abstract createContact(contact : ContactBody): Observable<ContactBody>;
    abstract updateContact(contact : ContactBody, id: string): Observable<any>;
    abstract getUserContacts(): Observable<GetContact[]>;
    abstract deleteContact(id: string): Observable<any>;
}