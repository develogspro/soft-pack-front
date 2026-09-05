function toggleElementById(Id) {
    const dropDown = document.getElementById(Id)
    dropDown.classList.toggle('opacity-0')
    dropDown.classList.toggle('pointer-events-none')
    if (Id === 'mobile-nav') {
        document.body.classList.toggle('overflow-hidden')
    }
}

function setMaxHeight(className) {
    const elements = document.querySelectorAll('.' + className)
    let max = 0;
    elements.forEach(e => {
        if (max < e.offsetHeight) {
            max = e.offsetHeight
        }
    })
    elements.forEach(e => {
        e.style.height = max + 'px'
    })
}

function submitForm(formEvent, listOfInputs, callback, route, errorMessageParentId, submitBtnId, oldSubmitButtonValue, {errorCallback = null} = {}) {
    formEvent.preventDefault();
    console.log(route)
    let submitBtn = document.getElementById(submitBtnId)
    submitBtn.disabled = true;
    const formData = new FormData();
    listOfInputs.forEach(element => {
            if(element.type === 'file'){
                if( element.files.length > 0)
                    formData.append(element.name, element.files[0]);
            }else{
                formData.append(element.name, element.value);
            }
        //Disable inputs
        element.disabled = true;
    });

    grecaptcha.ready(function () {
        grecaptcha.execute(recaptchaSiteKey, {action: 'submit'})
            .then(async function (token) {
                formData.append('g-recaptcha-response', token);
                const response = await fetch(route, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json'
                    }
                });

                if (!response.ok) {
                    throw await response.json()
                }

                const result = await response.json();
                formEvent.target.reset(); // Reset the form
                //Enable inputs
                listOfInputs.forEach(element => {
                    element.disabled = false;
                });
                submitBtn.disabled = false;
                callback(result);
            })
            .catch(error => {
                document.getElementById(submitBtnId).innerHTML = oldSubmitButtonValue;
                let errorParent = document.getElementById(errorMessageParentId);
                errorParent.style.display = 'block'
                errorParent.innerHTML = error.message;
                setTimeout(function () {
                    errorParent.style.display = 'none'
                }, 7000)

                //Enable inputs
                listOfInputs.forEach(element => {
                    element.disabled = false;
                });
                submitBtn.disabled = false;
                submitBtn.disabled = false;
                if (errorCallback) {
                    errorCallback(error)
                }
            })
    });
}

function onlyNumberKey(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
