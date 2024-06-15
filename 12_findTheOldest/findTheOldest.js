function getAge(item) {
  const currentYear = new Date().getFullYear();
  return !item.yearOfDeath
  ? currentYear - item.yearOfBirth
  : item.yearOfDeath - item.yearOfBirth
}

const findTheOldest = function (people) {
  return (people.sort((a, b) => getAge(b) - getAge(a)))[0]
};

// Do not edit below this line
module.exports = findTheOldest;
