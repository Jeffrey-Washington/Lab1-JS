const camalCaseFunc = (str) => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => {
      return chr.toUpperCase();
    });
  };
  
  const snakeCaseFunc = (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  
  let divBlock = document.getElementById("zadanie");
  let zadanie = prompt("Введіть номер завдання: ");
  switch (+zadanie) {
    case 1:
      {
        let podzadanie = prompt("Введіть номер підзавдання: ");
        switch (+podzadanie) {
          case 1:
            {
              let textSnakeCase = prompt("Введіть текст в форматі snake_case: ");
              alert(camalCaseFunc(textSnakeCase));
            }
            break;
          case 2:
            {
              let textCamelCase = prompt("Введіть текст в форматі camelCase: ");
              alert(snakeCaseFunc(textCamelCase));
            }
            break;
          case 3:
            {
              let date = prompt('Введіть дату формату dd/MM/YY: ')
              alert(date.split('/').join('.'));
            }
            break;
          default:
            {
              alert("Помилка!");
            }
            break;
        }
      }
      break;
    case 2:
      {
        let podzadanie = prompt("Введіть номер підзавдання: ");
        switch (+podzadanie) {
          case 1:
            {
              let numberUser = prompt("Введіть число: ");
              for (let i = 1; i <= 100; i++) {
                if (i % +numberUser === 0) {
                  divBlock.innerHTML += i + ";";
                }
              }
              divBlock.innerHTML += ".";
            }
            break;
          case 2:
            {
              let firstNumber = prompt("Введіть початок: ");
              let lastNumber = prompt("Введіть кінець: ");
  
              firstNumber = Number(firstNumber);
              lastNumber = Number(lastNumber);
  
              for (firstNumber; firstNumber <= lastNumber; firstNumber += 4) {
                divBlock.innerHTML += firstNumber + ';';
              }
            }
            break;
            case 3:{
              let A = prompt('Введіть число A: ')
              let B = prompt('Введіть число B: ')
              let index = 0;
              let suma = 0;
  
              A = Number(A)
              B = Number(B)
  
              if(A>B){
                  let C = A;
                  A = B; 
                  B = C;
              }
  
              for(A; A<=B; A++){
                 divBlock.innerHTML += A + ';';
                 suma += A;
                 index++; 
              }
  
              divBlock.innerHTML += '<br>' +'Сума='+suma
              divBlock.innerHTML += '<br>' +'Цілі числа='+index
  
            }break;
            case 4:{
              let index = prompt('Введіть число: ')
  
              index = Number(index)
  
              for(index; index>=0; index--){
                  divBlock.innerHTML += index + ';'    
              }
            }break;
            case 5:{
              let numberUser = prompt('Введіть число: ')
              let stupin = prompt('Введіть ступінь: ')
  
              numberUser = Number(numberUser)
              stupin = Number(stupin)
  
              alert(Math.pow(numberUser, stupin))
            }break;
            case 6:{
              let numberUser, prevNumber, maxNumber=0;
              while(true){
                  prevNumber = numberUser
                  numberUser = prompt('Введіть число: ')
                  numberUser=Number(numberUser)
                  if(numberUser===prevNumber){
                      break;
                  }
                  if(maxNumber<numberUser){
                      maxNumber=numberUser
                  }
              }
              divBlock.innerHTML = 'Максимальне із введених чисел: '+ maxNumber
              
            }break;
            case 7:{
              let weekday = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', `П'ятниця`, 'Субота', 'Неділя']
              let bool = true;
              for(let i=0; bool; i++){
                  if(i===weekday.length)
                      i=0
  
                  bool = confirm(`День неділі: ${weekday[i]}. Хочете побачити наступний день?`)
              }
            }break;
            case 8:{
              let firstNumber = 2;
              let secondNumber = 1;
  
              for(firstNumber; firstNumber<10; firstNumber++){
                  divBlock.innerHTML += `Таблиця множення числа ${firstNumber} <br>`
                  for(secondNumber; secondNumber<=10;secondNumber++){
                      divBlock.innerHTML += `${firstNumber}*${secondNumber} = ${firstNumber*secondNumber}; <br>`
                  }
                  secondNumber = 1
                  divBlock.innerHTML += '-------------------------------------------<br>'
              }
            }break;
          default:
            {
              alert("Помилка!");
            }
            break;
        }
      }
      break;
    default: {
      alert("Помилка!");
    }
  }
  