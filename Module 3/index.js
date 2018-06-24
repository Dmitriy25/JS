"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const login = 'Mango';
const checkLoginValidity = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  if (login.length < 4 || login.length > 16) {
    return false;
  }
};
const checkIfLoginExists = function (logins, login) {
  for (let value of logins) {
    if (value === login) {
      return true;
    }
    return false
  }
};
const addLogin = function (logins, login) {
  if (!checkLoginValidity(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (checkIfLoginExists(logins, login)) {
    return 'Такой логин уже используется!'
  }
  logins.push(login)
  return 'Логин успешно добавлен!';
}