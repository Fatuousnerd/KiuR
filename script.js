const wrapper = document.querySelector('.wrapper'),
generatebtn = wrapper.querySelector('.form button'),
qrInput = wrapper.querySelector('.form input'),
qrImg = wrapper.querySelector('.qr-code img')

generatebtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue) return
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    console.log(qrValue);
    wrapper.classList.add("active");
});

wrapper.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        let qrValue = qrInput.value;
        if(!qrValue) return
        qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
        console.log(qrValue);
        wrapper.classList.add("active");
    }
})


for(i < 0, 1++ ){
    console.log(i)
}