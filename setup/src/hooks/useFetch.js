import { useEffect, useState } from "react";
const url = "https://randomuser.me/api/";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);

  const getRandomPerson = async () => {
    const randomUsersResponse = await fetch(url);
    const randomUsersData = await randomUsersResponse.json();

    const person = randomUsersData.results[0];

    const { cell, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const { age } = person.dob;
    const {
      street: { number, name },
    } = person.location;

    const newPerson = {
      image,
      name: `${first} ${last}`,
      phone: cell,
      password,
      age,
      email,
      street: `${number} ${name}`,
    };
    setPerson(newPerson);
    setLoading(false);
  };

  useEffect(() => {
    getRandomPerson();
  }, []);

  return { person, loading, getRandomPerson, setLoading };
};
