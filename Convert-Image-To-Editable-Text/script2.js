var s = [];
var t = [];
var img_url2 = document.querySelector('#img-url2'),
    upload_file_btn2 = document.querySelector('#upload-file-btn2'),
    copy_text2 = document.querySelector('#copy-text2'),
    img_result2 = document.querySelector('#img-result2');

var converted_text2 = document.querySelector('#converted-text2');

img_url2.onclick = () => {
    img_url2.select();
}

copy_text2.onclick = () => {
    copy_text2.setAttribute('title', "Copied.");
    setTimeout(() => {
        copy_text2.setAttribute('title', "Copy text.");
    }, 2000);
    if (converted_text2.value != '') {
        navigator.clipboard.writeText(converted_text2.value);   
    }
}

img_url2.addEventListener('change', createFile2);
upload_file_btn2.addEventListener('change', displayImage2);

async function createFile2() {
    if (this.value != '') {
        img_result2.src = this.value;

        await fetch(this.value)
            .then(res => res.blob())
            .then(blob_file => {
                let file2 = new File([blob_file], blob_file.name, { type: blob_file.type });
                recognizeText2(file2);
            })
    }
}

function displayImage2() {
    const reader = new FileReader();
    reader.onload = () => {
        img_result2.src = reader.result;
    }
    reader.readAsDataURL(this.files[0]);
    recognizeText2(this.files[0]);
  
}

function recognizeText2(file2) {
    Tesseract.recognize(file2)
    .then(result => { converted_text2.value = result.text;
        compare2(converted_text2.value);
        
    });
    
}

