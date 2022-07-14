var slider = document.querySelector('.main_slider img')
var pre = document.querySelector('.main_slider .pre')
var next = document.querySelector('.main_slider .next')
var prePage = document.querySelector('.content_page .pre')
var nextPage = document.querySelector('.content_page .next')
var nextNewproduct = document.querySelector('.content_newproduct .next')
var preNewproduct = document.querySelector('.content_newproduct .pre')
var Newproduct = document.querySelector('.newproduct_nav-card')
var Imgproduct = document.querySelectorAll('.newproduct_card')
var useName = document.querySelector('#usename')
var email = document.querySelector('#email')
var passWord = document.querySelector('#password')
var confirPassword = document.querySelector('#confirm_password')
var emailLogin = document.querySelector('#emailLogin')
var passwordLogin = document.querySelector('#passwordLogin')
var form = document.querySelector('form')
var btnform = document.querySelector('.btnform')
var btnLogin = document.querySelector('.btnLogin')

var arr = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
];

var index = 0

function chanSlider(index) {
    slider.src = arr[index]
}

AUto = function() {
    if (index == arr.length - 1) {
        index = 0
    } else {
        index++
    }
    slider.style.animation = ''

    setTimeout(function() {
        chanSlider(index)
        slider.style.animation = `Next ease 1s`
    }, 50)
}
setInterval(AUto, 5000)
next.addEventListener('click', function() {
    if (index == arr.length - 1) {
        index = 0
    } else {
        index++
    }
    slider.style.animation = ''

    setTimeout(function() {
        chanSlider(index)
        slider.style.animation = `Next ease 1s`
    }, 50)
})
pre.addEventListener('click', function() {
    if (index == 0) {
        index = arr.length - 1
    } else {
        index--
    }

    slider.style.animation = ''
    setTimeout(function() {
        chanSlider(index)
        slider.style.animation = `left-right ease 1s`
    }, 50)
})
var imgPage = document.querySelector('.content_page-img img')
var imgPage02 = document.querySelector('.content_page-img2 img')


var arrPage = [
    'page1.png',
    'page2.png',
    'page3.png',
    'page4.png',
]

var i = 0


function changeImg() {
    imgPage.src = arrPage[i]
    if (i == arrPage.length - 1) {
        imgPage02.src = arrPage[0]
    } else
        imgPage02.src = arrPage[i + 1]

}



prePage.addEventListener('click', function() {
    if (i == arrPage.length - 1) {
        i = 0
    } else {
        i++
    }
    imgPage.style.animation = ''
    imgPage02.style.animation = ''
    setTimeout(function() {
        imgPage.style.animation = `Next ease 1s`
        imgPage02.style.animation = `Next ease 1s`
        changeImg()


    }, 200)
})
nextPage.addEventListener('click', function() {
    if (i == 0) {
        i = arrPage.length - 1
    } else {
        i--
    }
    imgPage.style.animation = ''
    imgPage02.style.animation = ''
    setTimeout(function() {
        imgPage.style.animation = `left-right ease 1s`
        imgPage02.style.animation = `left-right ease 1s`
        changeImg()


    }, 200)
})


var kichthuoc = Imgproduct[0].clientWidth;
var max = kichthuoc * Imgproduct.length - kichthuoc * 6


var chuyen = 0;

function NNext(chuyen) {

    if (!(chuyen == 0)) {
        preNewproduct.classList.add('nohide')
    } else {
        preNewproduct.classList.remove('nohide')

    }
    if (chuyen == max) {
        nextNewproduct.classList.add('hide')
    } else {
        nextNewproduct.classList.remove('hide')

    }
}




nextNewproduct.addEventListener('click', function() {

    chuyen += kichthuoc

    Newproduct.style.marginLeft = '-' + chuyen + 'px';
    NNext(chuyen)
})
preNewproduct.addEventListener('click', function() {


    chuyen -= kichthuoc

    Newproduct.style.marginLeft = '-' + chuyen + 'px';
    NNext(chuyen)


})
var nextContent_new = document.querySelector('.content_new .next')
var preContent_new = document.querySelector('.content_new .pre')
var coverNewinfo = document.querySelector('.cover_new-info')
var cardNew = document.querySelectorAll('.card_new')

var kichthuoccardVew = cardNew[0].clientWidth;
var Max = kichthuoccardVew * cardNew.length - kichthuoccardVew * 4


var chuyen2 = 0;

function NNNNext(chuyen2) {

    if (!(chuyen2 == 0)) {
        preContent_new.classList.add('nohide')
    } else {
        preContent_new.classList.remove('nohide')

    }
    if (chuyen2 == Max) {
        nextContent_new.classList.add('hide')
    } else {
        nextContent_new.classList.remove('hide')

    }
}
nextContent_new.addEventListener('click', function() {

    chuyen2 += kichthuoccardVew

    coverNewinfo.style.marginLeft = '-' + chuyen2 + 'px';
    NNNNext(chuyen2)
})
preContent_new.addEventListener('click', function() {


    chuyen2 -= kichthuoccardVew

    coverNewinfo.style.marginLeft = '-' + chuyen2 + 'px';
    NNNNext(chuyen2)


})
var modal = document.querySelector('.modal')
var modal_overlay = document.querySelector('.modal_overlay')
var modal_inner01 = document.querySelector('.modal_inner01')
var modal_inner02 = document.querySelector('.modal_inner02')
var sigNing = document.querySelector('.header_firt-phai-signing')
var loGin = document.querySelector('.header_firt-phai-login')



sigNing.addEventListener('click', function(e) {
    e.preventDefault()
    modal.classList.add('active')
})
loGin.addEventListener('click', function(e) {
    e.preventDefault()
    modal.classList.add('active')
    modal_inner01.classList.add('active')

    modal_inner02.classList.add('active')



})
modal.addEventListener('click', function() {
    modal.classList.remove('active')
    modal_inner02.classList.remove('active')
    modal_inner01.classList.remove('active')



})
modal_inner01.addEventListener('click', function(e) {
    e.stopPropagation()
})
modal_inner02.addEventListener('click', function(e) {
    e.stopPropagation()
})
var languageVN = document.querySelector('.languageVN')
var languageUS = document.querySelector('.languageUS')
var headerLanguageSelect = document.querySelector('.header_language-select')
var languageVNselect = document.querySelector('.languageVNselect')
var languageUSselect = document.querySelector('.languageUSselect')

languageUS.addEventListener('click', function() {
    languageVNselect.classList.add('active')
    languageUSselect.classList.add('active')
    languageUS.parentElement.style.background = `#fe6332`
    languageVN.parentElement.style.background = `white`

})
languageVN.addEventListener('click', function() {
    languageUSselect.classList.remove('active')
    languageVNselect.classList.remove('active')
    languageVN.parentElement.style.background = `#fe6332`
    languageUS.parentElement.style.background = `white`


})



function showError(input, message) {
    let parent = input.parentElement;
    let error = parent.querySelector('span')
    input.classList.add('error')
    error.classList.add('error')
    error.innerText = message
}

function showSucces(input) {
    let parent = input.parentElement;
    let error = parent.querySelector('span')
    input.classList.remove('error')
    error.classList.remove('error')
    error.innerText = ''
}

function checkEmty(listInput) {
    let isEmptyError = false
    listInput.forEach(function(input) {

        if (input.value.trim()) {

            showSucces(input)
        } else {
            showError(input, 'Vui lòng nhập')
            isEmptyError = true
        }
    })
    return isEmptyError
}

function checkEmail(input) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let isEmailError = !regexEmail.test(input.value.trim())
    if (regexEmail.test(input.value.trim())) {
        showSucces(input)
    } else {
        showError(input, 'Email của bạn không tồn tại')
    }
    return isEmailError
}


function showBlur(inputs) {
    inputs.forEach(function(input) {
        var newParent = input.parentElement
        var newError = newParent.querySelector('span')
        input.onblur = function() {
            if (!input.value.trim()) {
                input.classList.add('error')
                newError.classList.add('error')
                newError.innerText = 'Vui lòng nhập thông tin'
            }
        }
        input.oninput = function() {
            input.classList.remove('error')
            newError.classList.remove('error')
            newError.innerText = ''
        }
    })
}

showBlur([useName, email, passWord, confirPassword, emailLogin, passwordLogin])


function checkLengthError(input, min, max) {
    if (input.value.trim().length < min) {
        showError(input, `Tên đăng nhập phải có ít nhất ${min} ký tự`)
        return true
    }
    if (input.value.trim().length > max) {
        showError(input, `Không được quá ${max} Ký tự`)
        return true

    }
    showSucces(input)
    return false
}

function checkMathPass(passInput, cfPass) {
    if (passInput.value !== cfPass.value) {
        showError(cfPass, 'Mật khẩu không đúng')
        return true
    }
    return false
}

btnform.addEventListener('click', function(e) {
    e.preventDefault()
    let isEmptyError = checkEmty([useName, email, passWord, confirPassword])
    let isEmailError = checkEmail(email)
    let isUseNamelength = checkLengthError(useName, 4, 20)
    let isPasswordLength = checkLengthError(passWord, 4, 20)
    let isconfirPasswordLength = checkLengthError(confirPassword, 4, 20)
    let isMathPassword = checkMathPass(passWord, confirPassword)


    if (isEmptyError || isEmailError || isUseNamelength || isPasswordLength || isMathPassword || isconfirPasswordLength) {

    } else {

    }

})
btnLogin.addEventListener('click', function(e) {
    e.preventDefault()
    checkEmty([emailLogin, passwordLogin])
    checkEmail(emailLogin)
    checkLengthError(passwordLogin, 4, 20)
})