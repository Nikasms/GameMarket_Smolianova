//перевірка підключеного файлу скриптів
// console.log('перевірка підключеного файлу скрипту market.js')

//визначення масиву товарів
// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N'
// ]

    let itemsArray = [
       {
        title: "Мотокоса 43",
        image: "https://hotline.ua/img/tx/319/3193450945.jpg" ,
        mono: 6,
        pb: 8,
        prise_standart: 5499,
        prise_discount: 4497,
        prise_coupon: 4395,
       } ,
       {
        title: "Електричний тример 110",
        image: "https://instrument.in.ua/content/images/44/480x480l50nn0/trimmer-elektricheskiy-dnipro-m-120-59521615082483.jpg" ,
        mono: 6,
        pb: 8,
        prise_standart: 4497,
        prise_discount: 3498,
        prise_coupon: 3396,
       },

       {
        title: "Електрична газонокосарка 32",
        image: "https://images.prom.ua/3772468812_w640_h640_gazonokosilka-elektricheskaya-dnipro-m.jpg" ,
        mono: 6,
        pb: 8,
        prise_standart: 4497,
        prise_discount: 3297,
        prise_coupon: 3195,
       },

       {
        title: "Акумуляторний оприскувач 12 N",
        image: "https://static.dnipro-m.ua/cache/products/8964/catalog_origin_314479.jpg" ,
        mono: 6,
        pb: 8,
        prise_standart: 2190,
        prise_discount: 1698,
        prise_coupon: 1596,
       }


    ]




//отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items")

//перевірка існування знайденого блоку
if (itemsDiv) {
    //створення блоків по кількості елементів 
    itemsArray.forEach((item, index) =>{
        // console.log(item)
        // itemsDiv.innerText += item
        //спеціальний апостроф - англійська розкладка - біля кнопки 1 
        itemsDiv.innerHTML += 
        `
        
        <div class="item"> 

        <!-- блок назва товару  -->
        <div class="item-title">${item.title}</div>

        <!-- блок зображення товару  -->
        <div class="item-image">
          <img src="${item.image}" class = "item-image" >
        </div>

        <!-- блок з оплатою частинами -->
        <div class="parts-pay">
          <div><img src="img/lapka.png" alt="">${item.mono}</div>
          <div><img src="img/pb.jpg" alt="">${item.pb}</div>
        </div>

        <!-- блок ціни -->
        <div class="price">
          <div><span style="text-decoration-line: line-through;">${item.prise_standart}</span> <sup>грн</sup></div>
          <div><span>${item.prise_discount}</span> <sup>грн</sup></div>
        </div>

        <!-- блок бонусної ціни  -->
        <div class="price bonus">
          <div>ціна за купоном</div>
          <div><span>${item.prise_coupon}</span> <sup>грн</sup></div>
        </div>
      </div>
      
     



        
        `
})


{/* <div class = "item">
<h2>Вчитель № ${index+1} з ${itemsArray.length}</h2>
<p>${item.firstName} ${item.lastName}</p>
<p>Предмет: ${item.subject}</p>
<p><img src = "${item.photo}" class = "item-image"></p>
<p><a href = ${item.url}" target = "_blank" class = "bonus price">Профіль</a></p>
<p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank"
class = "price"> Написати </a></p>

</div>
// <h2>товар№${index}</h2>
        // <p>${item}</p> */}

    
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
    // console.log(itemsArray)

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

