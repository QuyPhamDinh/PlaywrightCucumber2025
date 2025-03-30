import { faker } from "@faker-js/faker";

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
    public city: string,
    public state: string,
    public zipCode: string,
    public phoneNumber: string,
    public ssn: string,
    public username: string,
    public password: string,
    public confirmPassword: string
  ) {}

  static generateFakeUser(): User {
    const password = faker.internet.password();
    return new User(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.streetAddress(),
      faker.location.city(),
      faker.location.state(),
      faker.location.zipCode(),
      faker.phone.number(),
      faker.string.numeric(9),
      faker.internet.username(),
      password,
      password
    );
  }
}
