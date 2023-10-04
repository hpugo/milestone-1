function changeBackgroundImage() {
    var targetDiv = document.querySelector('#board > div');
    if (targetDiv) {
        targetDiv.style.backgroundImage = 'url("assets/POP!.png")'; // Replace 'new-background.jpg' with the path to your new image
    } else {
        console.log('Target div not found');
    }
}