let body = document.querySelector('body')


let container = document.createElement('div');
container.classList.add('container');
container.insertAdjacentHTML("afterbegin", "<div id='counter'></div>")
container.insertAdjacentHTML('beforeend', "<div id='button'></div>");
body.prepend(container);



counter.appendChild(document.createElement('p')).innerHTML='COUNTER'

let number = document.createElement('div');
number.classList.add('number')
number.innerHTML='<span>0</span>'
counter.appendChild(number)

button.insertAdjacentHTML("afterbegin", "<button id='plus'>+</button>")
button.insertAdjacentHTML("beforeend", "<button id='reset'>reset</button>")
button.insertAdjacentHTML("beforeend", "<button id='minus'>-</button>")



let numCount = document.querySelector('span')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let reset = document.querySelector('#reset')



plus.addEventListener('click', function(){

    let numValue = Number ( numCount.textContent );
    if( numValue == -1 ){
        numCount.style.color='black'
      }else if( numValue > -1 ){
        numCount.style.color='green'
      }

  numCount.innerHTML++;
  
});



minus.addEventListener('click', function(){

    let numValue = Number( numCount.textContent );
    if( numValue == 1 ){
        numCount.style.color='black'
    }else if( numValue < 1 ){
        numCount.style.color='red'

    }
        
  numCount.innerHTML--;
  
});



reset.addEventListener('click', function(){
    numCount.innerHTML = 0
    numCount.style.color='black'
})

















