const sub = document.querySelectorAll('nav .sub')
const nav = document.querySelectorAll('nav > ul > .gnb')
console.log(sub, nav)
for(let i of sub){i.style.display='none'}
nav.forEach(function(t,i,){
    t.addEventListener('mouseover',function(){
        sub[i].style.display='flex'
        t.firstElementChild.style.color='#C8112C'
    })
    t.addEventListener('mouseout',function(){
        t.firstElementChild.style.color='#000'
        for(let j of sub){j.style.display='none'}
    })
})
// sub[1].style.display='none'
// sub[2].style.display='none'
// sub[3].style.display='none'

