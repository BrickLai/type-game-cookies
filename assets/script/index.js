'use strict';

let avatar = document.querySelector('.fa-user-tie');
let userInfo = document.querySelector('.userinfo');
let file = document.querySelector('.uploadpicture');
console.log(file);

let flag = 0;
avatar.addEventListener('click', function() {
    if(flag === 0){
        userInfo.style.visibility = 'visible';
        flag =1;
    }else {
        userInfo.style.visibility = 'hidden';
        flag =0;
    }
})	

    let postBtn = document.querySelector('.postbtn');
    let postInputContent = document.querySelector('.post-input-content')
    postBtn.addEventListener('click', function() {
        let photo = file.files;
        let div = document.createElement('div');
        let item = document.querySelector('.post-content');
        let reader = new FileReader();
        item.insertBefore(div, item.children[0]);
        reader.readAsDataURL(photo[0]);
        reader.onload = function () {
        let image = document.createElement('img');
        image.width = '450';
        image.src = reader.result; 
        let items = document.querySelector('.post-content div');
        items.append(image);
    }

        
    })