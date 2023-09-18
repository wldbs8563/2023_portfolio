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
        design_img[i].style.display='block'
    })
})


