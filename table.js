function btnClick(id) {
    var btn = document.getElementById(id);
    if (btn.textContent == '✔') {
        btn.textContent = '❌';

    } else if (btn.textContent == '❌') {
        btn.textContent = '⭕';

    } else if (btn.textContent == '⭕') {
        btn.textContent = '✔';

    }
}