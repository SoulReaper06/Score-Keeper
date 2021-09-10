const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetBtn =  document.querySelector('#reset')
const span1 = document.querySelector('#p1Score');
const span2 = document.querySelector('#p2Score');
const maxPointSelect = document.querySelector('#maxPoints');

//let maxPoints = 7; 
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;


/*============= PLAYER 1 =============*/
p1Button.addEventListener('click' , () => {

  if(!isGameOver){
    p1Score++;
    if(p1Score === maxPoints) {
        isGameOver = true;
        span1.style.color = 'green';
        span2.style.color = 'red';
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    span1.textContent = p1Score;
  }
       
       
});

/*============= PLAYER 2 =============*/
p2Button.addEventListener('click' , () => {

  if(!isGameOver){
    p2Score++;
    if(p2Score === maxPoints) {
        isGameOver = true;
        span2.style.color = 'green';
        span1.style.color = 'red';
        p1Button.disabled = true;
        p2Button.disabled = true; 
    }
    span2.textContent = p2Score;
  }
    
});

/*============= RESET =============*/
function reset() {
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  span2.style.color = 'black';
  span1.style.color = 'black';
  span1.innerHTML = p1Score;
  span2.innerHTML = p2Score;
  p1Button.disabled = false;
        p2Button.disabled = false;
}


resetBtn.addEventListener('click' , reset);


/*============= DROPDOWN VALUE SELECTOR =============*/
maxPointSelect.addEventListener('change' , () => {
    maxPoints = parseInt(maxPointSelect.value);
    console.log(maxPoints);
    reset();
    
})