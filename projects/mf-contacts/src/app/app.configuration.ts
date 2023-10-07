import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ContactsGateway } from "./domain/models/gateway/contacts.gateway";
import { CreateContactUseCase } from "./domain/usecases/create-contact/create-contact.usecase";
import { DeleteContactUseCase } from "./domain/usecases/delete-contact/delete-contact.usecase";
import { GetUserContactsUseCase } from "./domain/usecases/get-user-contacts/get-user-contacts.usecase";
import { UpdateContactUseCase } from "./domain/usecases/update-contact/update-contact.usecase";
import { ContactsService } from "./infraestructure/driven-adapter/contacts/contacts.service";
import { ContactsInterceptor } from "./infraestructure/interceptor/contacts.interceptor";

export const DEFAULT_PROVIDERS = [
    CreateContactUseCase,
    DeleteContactUseCase,
    GetUserContactsUseCase,
    UpdateContactUseCase
];

export const DEFAULT_CONFIGURATION = {
    infrastructures: [
        {
            gateway: ContactsGateway,
            implementation: ContactsService
        }
    ]
};

const infrastructures = [];
for (const item of DEFAULT_CONFIGURATION.infrastructures) {
    infrastructures.push({
        provide: item.gateway,
        useClass: item.implementation,
    });
};

export const FULL_PROVIDERS = [
    ...DEFAULT_PROVIDERS,
    ...infrastructures,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ContactsInterceptor,
        multi: true,
    },
];