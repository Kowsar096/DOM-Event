document.getElementById('btn-update-title')
.addEventListener('click', function(){
    // console.log('Button clicked')

    const pageTitleElement = document.getElementById('page-title');

    pageTitleElement.innerText= 'Event handler Change'
})

// Input handler

document.getElementById('btn-update')
.addEventListener('click',function(){
    // get the text from input field

    const nameInput = document.getElementById('input-name');

    const name = nameInput.value;
    // set the name

    const nameP = document.getElementById('name');
    nameP.innerText = name;

})
