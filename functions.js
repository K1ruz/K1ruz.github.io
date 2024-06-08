const click=document.querySelector('.pindot');
const giftBox=document.querySelector('.giftbox');
const Shadow=document.querySelector('.shadow');
const boxContainer=document.querySelector('.box-container');
const text=document.querySelector('.sulat');

click.addEventListener('click',() =>{
    if (click.className==="pindot"){
         click.classList.add('active')
         giftBox.classList.add('active')
         Shadow.classList.add('active')
         boxContainer.classList.add('active')
         text.classList.add('active')
         text.classList.remove('active2')

    }   
    else {
        click.classList.remove('active')
        giftBox.classList.remove('active')
        Shadow.classList.remove('active')
        boxContainer.classList.remove('active')
        text.classList.remove('active')
        text.classList.add('active2')

    }
}
)