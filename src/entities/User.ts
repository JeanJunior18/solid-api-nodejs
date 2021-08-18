export class User {
  id?: string;
  name: string;
  username: string;
  email: string;

  private constructor({ name, username, email }: User) {
    this.name = name;
    this.username = username;
    this.email = email;
  }

  static create(data: User): User {
    return new User(data);
  }
}
