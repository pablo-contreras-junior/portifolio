function openPopup(src){
    document.getElementById('popup-image').src = src;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup(){
    document.getElementById('popup').style.display = 'none';
}
