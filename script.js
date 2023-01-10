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

function fetchRequest(file, formData) {
    infoText.innerText = "Scanning QR Code...";
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: 'POST', body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        infoText.innerText = result ? "Upload QR Code to Scan" : "Couldn't scan QR Code";
        if(!result) return;
        document.querySelector("textarea").innerText = result;
        form.querySelector("img").src = URL.createObjectURL(file);
        wrapper.classList.add("active");
    }).catch(() => {
        infoText.innerText = "Couldn't scan QR Code";
    });
}
fileInp.addEventListener("change", async e => {
    let file = e.target.files[0];
    if(!file) return;
    let formData = new FormData();
    formData.append('file', file);
    fetchRequest(file, formData);
});
copyBtn.addEventListener("click", () => {
    let text = document.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
});
form.addEventListener("click", () => fileInp.click());
closeBtn.addEventListener("click", () => wrapper.classList.remove("active"));

/*for(i < 0, 1++ ){
    console.log(i)
}*/

cdgn.addEventListener("click", () => {
    codegen.classList.remove('none')
    wrapper.classList.remove('rd')
    codereader.classList.add('none')
});

cdrd.addEventListener("click", () => {
    codegen.classList.add('none')
    wrapper.classList.add('rd')
    codereader.classList.remove('none')
});

/*clicked.onclick = () => {
    if(codegen.style.visibilty == 'hidden'){
        codegen.style.visibilty == 'visible'
        codereader.style.visibilty == 'hidden'
    } else if(codegen.style.visibilty == 'visible'){
        codegen.style.visibilty == 'hidden'
        codereader.style.visibilty == 'visible'
    }
}*/