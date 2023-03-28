const pop_row = document.getElementById('row')
const pop_row_toggler = document.getElementById('pop_row_toggler')
click_time = 0

pop_row_toggler.onclick = function(){
    console.log('hi mom!')
    if(click_time % 2 == 1)
        pop_row_toggler.innerText = 'See Less'
    else
    pop_row_toggler.innerText = 'See More'
}
