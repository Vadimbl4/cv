const darkTheme = document.getElementById('darkBtn');
const q = document.querySelector('.q');
const avatar = document.querySelector('.avatar');
const ed = document.getElementById('ed');
const edLi = document.getElementById('edLi');

//-----------Блок с обработкой заголовков----
//Переменные с содержимым li
let li1 = document.querySelector('.educationList').childNodes[1].children[0].innerHTML
let li2 = document.querySelector('.educationList').childNodes[1].children[1].innerHTML
let li3 = document.querySelector('.educationList').childNodes[1].children[2].innerHTML

//Перевод строк в массивы
let liT1 = li1.trim('')
let liT2 = li2.trim('')
let liT3 = li3.trim('')

const arr1 = liT1.split('')
const arr2 = liT2.split('')
const arr3 = liT3.split('')

//Вывод элементов массива по одному
function v(arr, inr) {
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  setTimeout(()=>{inr.innerHTML += element},20 * i)
}}

//Клик по заголовку
ed.onclick = () => {
  if (edLi.style.display !== 'block') {
    //опустошаем значения li и удаляем 2 последние строчки
    document.querySelector('.educationList').childNodes[1].children[0].innerHTML = ''
    document.querySelector('.educationList').childNodes[1].children[2].innerHTML = ''
    document.querySelector('.educationList').childNodes[1].children[2].remove()
    document.querySelector('.educationList').childNodes[1].children[1].innerHTML = ''
    document.querySelector('.educationList').childNodes[1].children[1].remove()
    
    edLi.style.display = 'block'

    //первая строчка
    v(arr1,document.querySelector('.educationList').childNodes[1].children[0])
    
    //создаем еще один li
    setTimeout(() => {let li = document.createElement('li')
    document.querySelector('.educationList').childNodes[1].appendChild(li)} , 2399)

    //вторая строчка
    setTimeout(() => {
      v(arr2,document.querySelector('.educationList').childNodes[1].children[1])
       }, 2400)
    
    //создаем последний li
    setTimeout(() => {let li = document.createElement('li')
    document.querySelector('.educationList').childNodes[1].appendChild(li)} , 3799)

    //последняя строчка
    setTimeout(() => {v(arr3,document.querySelector('.educationList').childNodes[1].children[2])
    }, 3800)
    
  }
    else {
      edLi.style.display = 'none'
    }
  }
//---------Конец блока------

//---------Блок обработки аватара-------
//Мышь на аватаре
avatar.onmouseenter = () => {
  q.classList.add('avAppear');
  q.style.visibility = 'visible';
};

//Мышь вне аватара
avatar.onmouseleave = () => {
  q.style.visibility = 'hidden';
  q.classList.remove('avAppear');
};
//----------Конец блока-----------

//Темная тема
darkTheme.onclick = () => {
  if (darkTheme.style.color !== 'black') {
    darkTheme.style.color = 'black';
    darkTheme.style.background = 'white';
    document.body.style.backgroundColor = 'rgb(26,26,26)';
    document.body.style.color = 'white';
    document.querySelector('.education').style.backgroundColor =
      'rgb(17, 81, 17)';
    document.querySelector('.hobby').style.backgroundColor = 'rgb(87, 96, 21)';
    document.querySelector('.social').style.backgroundColor = 'rgb(21, 76, 99)';
    document.querySelector('.contact').style.backgroundColor =
      'rgb(55, 17, 91)';
    document.querySelector('.q').style.visibility = 'hidden';
    darkTheme.innerHTML = 'Светлая тема';
    document.querySelector('.avatar').style.boxShadow = '4px 4px 10px white';
  } else {
    darkTheme.style.color = 'white';
    darkTheme.style.background = 'black';
    document.body.style.backgroundColor = 'rgb(191, 188, 188)';
    document.body.style.color = 'black';
    document.querySelector('.education').style.backgroundColor =
      'rgb(146, 229, 146)';
    document.querySelector('.hobby').style.backgroundColor =
      'rgb(227, 243, 107)';
    document.querySelector('.social').style.backgroundColor =
      'rgb(75, 196, 248)';
    document.querySelector('.contact').style.backgroundColor =
      'rgb(170, 118, 218)';
      darkTheme.innerHTML = 'Темная тема';
    document.querySelector('.avatar').style.boxShadow =
      '4px 4px 10px rgb(43, 39, 39)';
  }
};