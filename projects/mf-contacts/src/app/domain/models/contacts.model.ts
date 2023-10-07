
interface GeneralContactService {
    phone:        string;
    job:          string;
    contact_name: string;
    email:        string;
} 

export interface ContactBody extends GeneralContactService{
    img_src:       string;
    img_extension: string;
    id?:           string;
}

export interface GetContact extends GeneralContactService{
    img:          string;
    user_id:      string;
    id:           string;
}