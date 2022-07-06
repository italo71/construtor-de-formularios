function alter_color_black(id, l) {
    for (let i = 0; i <= 10; i++) {
        document.getElementById(`${l}_${i}`).classList.remove('black');
    }
    document.getElementById(`${id}`).classList.add('black');
}

function alter_color_gray(id) {
    for (let i = 0; i <= 4; i++)
        document.getElementById(`e_${i}`).classList.remove('gray');
    document.getElementById(`${id}`).classList.add('gray');
}
