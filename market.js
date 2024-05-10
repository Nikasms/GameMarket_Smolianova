//перевірка підключеного файлу скриптів
// console.log('перевірка підключеного файлу скрипту market.js')

//визначення масиву товарів
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N'
]

//отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items")

//перевірка існування знайденого блоку
if (itemsDiv) {
    //створення блоків по кількості елементів 
    itemsArray.forEach((item) =>{
        // console.log(item)
        // itemsDiv.innerText += item
        //спеціальний апостроф - англійська розкладка - біля кнопки 1 
        itemsDiv.innerHTML += 
        `
        <div class = "item">
        //  <h2>Товар№${index}</h2>
        //  <p>${item}</>
        </div>
        `
})


    
    //вивід знайденого елементу
    // console.log(itemsDiv)

    //Вивід значення поля знайденого елементу
    // console.log('Поле classList:', itemsDiv.classList)
    // console.log('Поле id:', itemsDiv.id)
    // console.log('Поле clientWidth:', itemsDiv.clientWidth)
    // console.log('Поле innerHTML:', itemsDiv.innerHTML)

    //Додавання тексту в блок
    // itemsDiv.innerHTML = 'Перший Програмно доданий текст'
    // // itemsDiv.innerHTML = 'Другий Програмно доданий текст'
    // itemsDiv.innerHTML += 'Другий Програмно доданий текст'
    //Додавання відформатованого HTML коду в блок
    // itemsDiv.innerHTML = '<div  class = item></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // for(let i = 0; i < 100; i++) {
    //     itemsDiv.innerHTML += '<div class="item"></div>'
    //     console.log('item')
    // }

} else {
    //вивід повідомлення про не знайдений блок
    console.log('блок товарів не знайдено')
}



// //виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item, index) =>{
//     console.log(index + '-й елемент', item)
// })


//сортування масиву
// itemsArray = itemsArray.sort()

//виведення в консоль масиву
    console.log(itemsArray)

//вииведення в консоль номерів та значень елементів масиву
// for(let i = 0; i < itemsArray.length; i++) {
//          console.log( i + '-й елемент:', itemsArray[i])
//      }

//виведення в консоль масиву
// console.log(itemsArray)
// for(let i = 0; i < 100; i++) 
//     itemsDiv.innerHTML += '<div class="item"></div>'
 //     console.log('item')
//     }

