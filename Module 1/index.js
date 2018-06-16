'use strict'
    const question1 = prompt('Для авторизации введите логин:'); 
if  (question1 === null) {
        alert('Отменено пользователем!')
}
else if  (question1 !== 'ADMIN_LOGIN') {
        alert('Отказ в достпуе!')
}
if  (question1 === "ADMIN_LOGIN") {
    const question2 = prompt('Для авторизации введите пароль:')
if  (question2 === null) {
        alert('Отменено пользователем!')
}
if  (question2 === 'ADMIN_PASSWORD') {
        alert('Добро пожаловать!')
}
else if  (question2 !== 'ADMIN_PASSWORD') {
        alert('Отказ в достпуе!')
    }
}