let persons = [
    {
        name: "Rafael",
        lastName: "Rodrigues",
        birthYear: 2002,
    },
    {
        name: "Fernando",
        lastName: "Silveira",
        birthYear: 2010,
    }
];

for (person of persons) {
    console.log(`${person.name} ${person.lastName} is ${new Date().getFullYear() - person.birthYear} years old.`);
}
