export interface IFormData {
    user_id: string,
    first_name: string,
    dob_day: number | string,
    dob_month: number | string,
    dob_year: number | string,
    show_gender: boolean,
    gender_identity: string,
    gender_interest: string,
    email: string,
    url: string,
    about: string,
    matches: Array<string>,
}