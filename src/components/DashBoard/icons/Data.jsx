// * fake data's
import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    image: faker.image.avatar(),
    name: faker.person.firstName(),
    age: faker.datatype.number(40),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});