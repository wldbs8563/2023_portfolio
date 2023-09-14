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