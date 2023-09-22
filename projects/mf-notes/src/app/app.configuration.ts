import { NotesGateway } from "./domain/models/gateway/notes.gateway";
import { CreateNoteUseCase } from "./domain/usecases/create-note/create-note.usecase";
import { DeleteNoteUseCase } from "./domain/usecases/delete-note/delete-note.usecase";
import { GetUserNotesUseCase } from "./domain/usecases/get-user-notes/get-user-notes.usecase";
import { UpdateNoteUseCase } from "./domain/usecases/update-note/update-note.usecase";
import { NotesService } from "./infraestructure/driven-adapter/notes/notes.service";


export const DEFAULT_PROVIDERS = [
    CreateNoteUseCase,
    DeleteNoteUseCase,
    GetUserNotesUseCase,
    UpdateNoteUseCase
];

export const DEFAULT_CONFIGURATION = {

    infrastructures: [
        {
            gateway: NotesGateway,
            implementation: NotesService
        }
    ]
};

const infrastructures = [];
for (const item of DEFAULT_CONFIGURATION.infrastructures) {
    infrastructures.push({
        provide: item.gateway,
        useClass: item.implementation,
    });
}

export const FULL_PROVIDERS = [
    ...DEFAULT_PROVIDERS,
    ...infrastructures,
];