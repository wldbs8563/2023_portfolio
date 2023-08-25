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
const sns = document.querySelectorAll('.sns a img')
console.log(sns)
sns[0].addEventListener('mouseover',function(){
    sns[0].src='./images/icon_set_sns_08.png'

})
sns[0].addEventListener('mouseout',function(){
    sns[0].src='./images/icon_set_sns_01.png'

})
sns[1].addEventListener('mouseover',function(){
    sns[1].src='./images/icon_set_sns_09.png'

})
sns[1].addEventListener('mouseout',function(){
    sns[1].src='./images/icon_set_sns_02.png'

})
sns[2].addEventListener('mouseover',function(){
    sns[2].src='./images/icon_set_sns_10.png'

})
sns[2].addEventListener('mouseout',function(){
    sns[2].src='./images/icon_set_sns_03.png'

})
sns[3].addEventListener('mouseover',function(){
    sns[3].src='./images/icon_set_sns_11.png'

})
sns[3].addEventListener('mouseout',function(){
    sns[3].src='./images/icon_set_sns_04.png'

})
sns[4].addEventListener('mouseover',function(){
    sns[4].src='./images/icon_set_sns_12.png'

})
sns[4].addEventListener('mouseout',function(){
    sns[4].src='./images/icon_set_sns_05.png'

})
sns[5].addEventListener('mouseover',function(){
    sns[5].src='./images/icon_set_sns_13.png'

})
sns[5].addEventListener('mouseout',function(){
    sns[5].src='./images/icon_set_sns_06.png'

})
sns[6].addEventListener('mouseover',function(){
    sns[6].src='./images/icon_set_sns_14.png'

})
sns[6].addEventListener('mouseout',function(){
    sns[6].src='./images/icon_set_sns_07.png'

})
const product = document.querySelectorAll('ul > .item')
console.log(product)
product.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        txt[i].style.backgroundColor='rgba(255, 255, 255, 0.5)'
    })
    t.addEventListener('mouseout',function(){
        txt[i].style.background='none'
    })
})




