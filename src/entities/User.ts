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
    const user = new User(data);
    return user;
  }
}
