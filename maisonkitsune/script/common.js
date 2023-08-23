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
const login = document.querySelector('.icon .login_box')
const icon = document.querySelectorAll('.btm_right .icon')
const icon_img = document.querySelectorAll('.icon > a > img')
console.log(login, icon, icon_img)
login.style.display='none'
icon[0].addEventListener('mouseover',function(){
    login.style.display='block'
    icon_img[0].src='./images/icon_user2.png'
})
icon[0].addEventListener('mouseout',function(){
    login.style.display='none'
    icon_img[0].src='./images/icon_user.png'
})
icon[1].addEventListener('mouseover',function(){
    icon_img[1].src='./images/icon_heart2.png'
})
icon[1].addEventListener('mouseout',function(){
    icon_img[1].src='./images/icon_heart.png'
})
icon[2].addEventListener('mouseover',function(){
    icon_img[2].src='./images/icon_mall2.png'
})
icon[2].addEventListener('mouseout',function(){
    icon_img[2].src='./images/icon_mall.png'
})




