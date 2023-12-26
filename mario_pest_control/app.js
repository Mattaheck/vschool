const bombPrice = 40;
const cheepPrice = 30;
const goombaPrice = 50;


function calculateTotal() {
    const bombCaught = parseInt(document.getElementsByName("bombCaught")[0].value || 0);
    const cheepCaught = parseInt(document.getElementsByName("cheepCaught")[0].value || 0);
    const goombaCaught = parseInt(document.getElementsByName("goombaCaught")[0].value || 0);

    const totalCost = (bombCaught * bombPrice) + (cheepCaught * cheepPrice) + (goombaCaught * goombaPrice);

    document.getElementById("totalCaught").value = totalCost;
}

document.querySelectorAll('input[name^="bomb"], input[name^="cheep"], input[name^="goomba"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
});
