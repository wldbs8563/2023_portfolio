const icon = document.querySelectorAll('.icon a')
const contents = document.querySelectorAll('.skill_contents p')
console.log(icon,contents)
for(let i of contents){i.style.display='none'}
contents[0].style.display='block'
icon.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of icon){j.classList.remove('active')}
        t.classList.add('active')
        for(let n of contents){n.style.display='none'}
        contents[i].style.display='block'
    })
})

const design_img = document.querySelectorAll('.design_img')
const d_contents = document.querySelectorAll('.d_contents > a')
for(let i of design_img){i.style.display='none'}
design_img[0].style.display='flex'

d_contents.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let j of d_contents){j.classList.remove('d_active')}
        t.classList.add('d_active')
        for(let n of design_img){n.style.display='none'}
        design_img[i].style.display='flex'
    })
})
const popup_design = document.querySelector('.popup_design')
const popup_img = document.querySelector('.popup_design img')
const design_a = document.querySelectorAll('.design_img a')
console.log(popup_design, popup_img , design_a)
popup_design.style.display='none'
design_a.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        popup_design.style.display='block'
        popup_img.src=`./images/design${i+1}.jpg`
    })
})
popup_design.addEventListener('click',function(){
    popup_design.style.display='none'
})


