export class User {
  id?: string;
  name: string;
  username: string;
  email: string;
  teams: string[];

  private constructor({ name, username, email, teams }: User) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.teams = teams;
  }

  static create(data: User): User {
    return new User(data);
  }
}
