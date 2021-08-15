// 1:  title color 

const titles = document.getElementsByClassName('section-title');
for (const title of titles) {
    title.style.color = 'lightblue';
    title.style.fontSize = '30px';
    title.style.padding = '10px';

}

// 2:  section background color

document.getElementById('backpack').style.backgroundColor = 'tomato';
document.getElementById('backpack').style.borderRadius = '10px';

// 3:  card border radius 

const cardBorder = document.getElementsByClassName('card-style-js');
for (const card of cardBorder) {
    card.style.borderRadius = '30px';
}

// 4:click handler onclick function

function mainBackground1() {
    document.getElementById('main').style.backgroundColor = 'hotpink';
}
function mainBackground2() {
    document.getElementById('main').style.backgroundColor = 'white';
}

// 5: buy now button remove

const last1 = document.getElementById('remove1');
last1.addEventListener('click', function () {
    document.getElementById('last-container1').removeChild(last1);
});

const last2 = document.getElementById('remove2');
last2.addEventListener('click', function () {
    document.getElementById('last-container2').removeChild(last2);
});

const last3 = document.getElementById('remove3');
last3.addEventListener('click', function () {
    document.getElementById('last-container3').removeChild(last3);
});

const last4 = document.getElementById('remove4');
last4.addEventListener('click', function () {
    document.getElementById('last-container4').removeChild(last4);
});

const last5 = document.getElementById('remove5');
last5.addEventListener('click', function () {
    document.getElementById('last-container5').removeChild(last5);
});

const last = document.getElementById('remove6');
last.addEventListener('click', function () {
    document.getElementById('last-container6').removeChild(last);
});

// 6: input button desible or anable

document.getElementById('email-input').addEventListener('keyup', function (email) {
    const deleteBtn = document.getElementById('email-btn');
    if (email.target.value == 'email') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
});


// 7: dubble click to color change
function myFunction() {
    document.getElementById('subcribe').style.backgroundColor = 'lightblue';
};

// 8: mouseenter to image change bag image

function setNewImage() {
    document.getElementById('img1').src = '/images/banner-images/xbox.png';
};
function setOldImage() {
    document.getElementById('img1').src = '/images/banner-images/headphone.png'
};