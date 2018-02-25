export class User {
  id: string;
  name: string;
  email: string;
  phone: number;

  constructor(data){
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
  }
}