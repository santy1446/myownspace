import { UpdateContactUseCase } from './../../../domain/usecases/update-contact/update-contact.usecase';
import { DeleteContactUseCase } from './../../../domain/usecases/delete-contact/delete-contact.usecase';
import { ContactData, ContactDataAction, ImageUploaded, UiLoaderComponent, UiModalComponent, UiToastComponent } from 'mos-design-system';
import { GetUserContactsUseCase } from './../../../domain/usecases/get-user-contacts/get-user-contacts.usecase';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ContactBody, GetContact } from '../../../domain/models/contacts.model';
import { environment } from "../../../../environments/environments";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateContactUseCase } from '../../../domain/usecases/create-contact/create-contact.usecase';
const TOAST_DURATION: number = 5000;
const DEFAULT_IMAGE: string = '../../../../assets/images/profile.jpg'

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  @ViewChild('myLoader') myLoader: UiLoaderComponent = {} as any;
  @ViewChild('myToast') myToast: UiToastComponent = {} as any;
  @ViewChild('myModal') myModal: UiModalComponent = {} as any;
  @ViewChild('myModalDelete') myModalDelete: UiModalComponent = {} as any;

  contactsList: ContactData[] = [];
  contactForm: FormGroup;
  isEdit: boolean = false;
  isImageCharged: boolean = false;
  imageCharged: ImageUploaded = {} as any;
  elementSelected: ContactData = {} as any;
  modalFormTitle: string = "";
  formDefaultImage: string = DEFAULT_IMAGE;
  searchInput: string = "";

  constructor(
    private _getUserContactsUseCase: GetUserContactsUseCase,
    private _createContactUseCase: CreateContactUseCase,
    private _deleteContactUseCase: DeleteContactUseCase,
    private _updateContactUseCase: UpdateContactUseCase,
    private _cdRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,

  ) {
    this.contactForm = this.formBuilder.group({
      phone: ['', Validators.required],
      job: ['', Validators.required],
      contactName: ['', Validators.required],
      email: ['', Validators.email]
    })
  }

  ngAfterViewInit(): void {
    this.myLoader.showLoader();
    this._cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.getContacts();
  };

  contactAction(cardAction: ContactDataAction) {
    console.log(cardAction);
    this.elementSelected = cardAction.data;
    if (cardAction.action === "delete") {
      this.myModalDelete.openModal()
    }else {
      this.fillFormToEdit();
    }
  }

  /** ----------- GET CONTACTS ----------------------- */

  getContacts(): void {
    this._getUserContactsUseCase.getUserContacts().subscribe({
      next: (res: GetContact[]) => this.getNotesHandler(res),
      error: () => this.showErrorMessage()
    })
  }

  getNotesHandler(response: GetContact[]): void {
    this.myLoader.hideLoader();
    this.contactsList = response.map((elm: GetContact) => {
      let elementFormated: any = elm;
      elementFormated['name'] = elm.contact_name;
      elementFormated.img = elementFormated.img ? environment.imagesDomain + elementFormated.img :
      DEFAULT_IMAGE;
      delete elementFormated.contact_name;
      return elementFormated
    });
  }

  

  /** ----------- CREATE / EDIT CONTACT ----------------------- */


  getImage(img: ImageUploaded) {
    this.isImageCharged = true;
    this.imageCharged = img;
  }

  openCreateModal() {
    this.isEdit = false;
    this.isImageCharged = false;
    this.modalFormTitle = "Create contact";
    this.formDefaultImage = DEFAULT_IMAGE;
    this.contactForm.reset();
    this.myModal.openModal();
  }

  confirmClickModal() {
    if (this.contactForm.valid) {
      if (!this.isEdit) {
        this.createContact();
      }else{
        this.updateContact()
      }
    }else{
      this.myToast.createNotification(
        'error',
        'The form is invalid',
        TOAST_DURATION
      );
    }
  }

  prepareDataToSave(): ContactBody {
    const FORM_VALUES = this.contactForm.value;
    let contactBody: ContactBody = {
      contact_name: FORM_VALUES.contactName,
      email: FORM_VALUES.email,
      job: FORM_VALUES.job,
      phone: FORM_VALUES.phone,
      img_extension: '',
      img_src: ''
    };
    if (this.isImageCharged) {
      contactBody.img_extension = this.imageCharged.fileName.split('.').pop()!;
      contactBody.img_src = this.imageCharged.source;
    }
    debugger
    return contactBody;
  }

  createContact(): void {
    this.myLoader.showLoader();
    this._createContactUseCase.createContact(this.prepareDataToSave()).subscribe({
      next: () => this.createContactHandler(),
      error: () => this.showErrorMessage()
    })
  }

  createContactHandler(): void {
    this.myToast.createNotification(
      'success',
      'Contact created!',
      TOAST_DURATION
    );
    this.myModal.closeModal();
    this.getContacts();
  }

  fillFormToEdit(): void {
    this.contactForm.reset();
    this.contactForm.patchValue({
      phone: this.elementSelected.phone,
      job: this.elementSelected.job,
      contactName: this.elementSelected.name,
      email: this.elementSelected.email
    });
    this.modalFormTitle = "Edit contact";
    this.isImageCharged = false;
    this.isEdit = true;
    this.formDefaultImage = this.elementSelected.img;
    this.myModal.openModal();
  }

  updateContact(): void {
    this.myLoader.showLoader();
    this._updateContactUseCase.updateContact(this.prepareDataToSave(), this.elementSelected.id!).subscribe({
      next: () => this.updateContactHandler(),
      error: () => this.showErrorMessage()
    })
  }

  updateContactHandler(): void {
    this.myToast.createNotification(
      'success',
      'Contact updated!',
      TOAST_DURATION
    );
    this.myModal.closeModal();
    this.getContacts();
  }

  /** ----------- DELETE CONTACT ----------------------- */

  deleteContact(): void {
    this.myLoader.showLoader();
    this._deleteContactUseCase.deleteContact(this.elementSelected.id!).subscribe({
      next: () => this.deleteContactHandler(),
      error: () => this.showErrorMessage()
    })
  }

  deleteContactHandler(): void {
    this.myToast.createNotification(
      'success',
      'Contact deleted!',
      TOAST_DURATION
    );
    this.myModalDelete.closeModal();
    const INDEX = this.contactsList.findIndex(note => note.id === this.elementSelected.id);
    this.contactsList.splice(INDEX, 1);
    this.myLoader.hideLoader();
  }


  showErrorMessage(): void {
    this.myToast.createNotification(
      'error',
      'Something is wrong... Please try later',
      TOAST_DURATION
    );
  }
}
