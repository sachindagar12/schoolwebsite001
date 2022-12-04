function loadCoupon() {
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('main').style.opacity='0.7';
}
function closeCoupon() {
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('main').style.opacity='1';
}

const successCallback = (position) => {
    console.log(position);
};

const errorCallback = (error) => {
    console.error(error);
};


navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
    enableHighAccuracy: true,
    timeout: 5000,
});

// var content = document.getElementsByTagName('body')[0];
// var darkMode = document.getElementById('dark-change');
// darkMode.addEventListener('click', function(){
// darkMode.classList.toggle('active');
// content.classList.toggle('night');
// })

const changeMode = () => {
    let body = document.getElementsByTagName('body')[0];
    body.classList.toggle('mydark')
    console.log(body);

}

