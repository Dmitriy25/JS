const year = prompt ('Какой сейчас год?');
if ( year === null ) {
    alert ('Ну ладно...')
}
if (year === "2018") {
    alert ('Все верно!')
}
else if (year !== "2018") {
    alert ('Но ведь на вдоре 2018!')
}