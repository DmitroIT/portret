let age;

do {
  age = parseFloat(prompt("Вкажіть якого ви року народження"));
} while (isNaN(age));

// объявляем переменную для города
let city = prompt("В якому місті ви живете?");

switch (city) {
  case "Київ":
  case "київ":
  case "Киев":
  case "киев":
    alert("Ти живеш в столиці України");
    break;

  case "Вашингтон":
  case "вашингтон":
    alert("Ти живеш в столиці Америки");
    break;

  case "Лондон":
  case "лондон":
    alert("Ти живеш в столиці Англії");
    break;

  case null:
  case undefined:
  case "":
    alert("Шкода, що ви відмовились вказати місто в якому ви живете");
    break;

  default:
    alert(`Ти живеш в місті ${city}`);
    break;
}

// объявляем переменную для спорта
let sport = prompt("Який ваш улюбленний вид спорта?");

switch (sport) {
  case "бокс":
    alert("Круто! То ти хочеш стати, як Усик Олександр?");
    break;

  case "дзюдо":
    alert("Круто! То ти хочешь стати, як Григорій Зантарая?");
    break;

  case "плавання":
    case "плаванье":
    alert("Круто! То ти хочешь стати, як Яна Клочкова?");
    break;

  case null:
  case undefined:
  case "":
    alert("Шкода, що ви відмовились вказати ваш улюбленний вид спорта");
    break;

  default:
    alert(`Круто, що ти займаєшся таким видом спорту, як ${sport}`);
    break;
}

alert(
  `Отже, \n Ти ${age} року народження, \n Місто в якому ти живеш - ${city}, \n Твій улюблений вид спорту - ${sport}`
);
