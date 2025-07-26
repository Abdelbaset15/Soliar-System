`use strict`

//  ----------------------------------------------------



const change_img = function(){
            
    const random_img = function(min, max){
        return Math.floor(Math.random() * (max - min+1)) + min
    }

    const yy = random_img(1,5);
    console.log(yy);
    
    login_parent.style.backgroundImage=` url(extra/${yy}.jpg)`;
}

    setInterval('change_img()', 2000);


const stop = function(){
    username_name.style. animationPlayState='paused';
}

const login = function () {
    const username = username_name.value
    console.log(username);


    sessionStorage['loggedin_name'] = username;



    if(username_name.value = username)
    {location.href = 'index.html'}
    else{please.innerText = `please enter
     your name`};

}


// ------------------------------------------------------------

