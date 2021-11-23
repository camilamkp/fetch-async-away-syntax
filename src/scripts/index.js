import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");


function awaitMessage()
{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(modal)
        }, (1000*60));
    })
}
async function displayBlock ()
{
    await awaitMessage();
    modal.style.display = 'block'
}
displayBlock();

modal.addEventListener("click", (e) => 
{
    switch(e.target.className) 
    {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})


const continueButton = document.getElementById('continue');

function waitingAnimation ()
{
    return new Promise ((resolve) =>
    {
        resolve(continueButton)
    })
}

async function alertMsg()
{
    await waitingAnimation();
    continueButton.addEventListener('animationend', () =>
    {
        alert('Continue to subscribe');
    })
}

alertMsg();