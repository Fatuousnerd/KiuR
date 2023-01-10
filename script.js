const wrapper = document.querySelector('.wrapper'),
generatebtn = wrapper.querySelector('.form button'),
qrInput = wrapper.querySelector('.form input'),
qrImg = wrapper.querySelector('.qr-code img'),
codegen = wrapper.querySelector('.codegen'),
codereader = wrapper.querySelector('.codereader'),
cdgn = document.getElementById('cdgn'),
clicked = document.getElementById('clicked'),
cdrd = document.getElementById('cdrd');

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

//const wrapper = document.querySelector(".wrapper"),
const form = wrapper.querySelector("form"),
fileInp = form.querySelector("input"),
infoText = form.querySelector('p'),
copyBtn = wrapper.querySelector('.copy'),
closeBtn = wrapper.querySelector('.close');

function fetchRequest(formData, file){
    infoText.innerText = "Scanning Qr Code.......";
    fetch(' https://api.qrserver.com/v1/create-qr-code/?', {
        method: "POST" , body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        console.log(result);
        infoText.innerText = result ? "Upload Qr Code to scan" : "Could not scan Qr Code";
        if(!result) return;
        wrapper.querySelector('textarea').innerText = result;
        form.querySelector('img').src = URL.createObjectURL(file);
        wrapper.classList.add("active");
    }).catch(() => {
        infoText.innerText = "Could not scan Qr Code";
    });
}

fileInp.addEventListener('change', e => {
    let file = e.target.files[0];
    if(!file) return;
    let formData = new FormData();
    formData.append('file', file)
    fetchRequest(formData, file);
})

copyBtn.addEventListener('click', () => {
    let text = wrapper.querySelector('textarea').textContent;
    navigator.clipboard.writeText(text)
})

closeBtn.addEventListener('click', () =>  wrapper.classList.remove("active"))

form.addEventListener('click', () => fileInp.click());

/*for(i < 0, 1++ ){
    console.log(i)
}*/

cdgn.addEventListener('click', () => {
    if(codegen.style.display == 'none'){
        codegen.style.display == 'block'
        codereader.style.display == 'none'
        console.log("cdgen");
    }
});

cdrd.addEventListener('click', () => {
    if(codereader.style.display == 'none'){
        codereader.style.display == 'block'
        codegen.style.display == 'none'
        console.log("cdrd");
    }
});

clicked.onclick = () => {
    console.log("Clicked123")
}