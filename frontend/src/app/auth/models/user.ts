export class User {
  surename: string;
  name: string;
  patronymic: string;
  birthDate: string;
  city: string;
  email: string;
  password: string;


  constructor(surename: string, name: string, patronymic: string, birthDate: string, city: string, email: string, password: string) {
    this.surename = surename;
    this.name = name;
    this.patronymic = patronymic;
    this.birthDate = birthDate;
    this.city = city;
    this.email = email;
    this.password = password;
  }
}
