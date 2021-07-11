const book = document.querySelectorAll('.seat');
var count = 0;
count2 = 70;
book.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
        if (el.classList.contains('active')) {
            count++;
        } else {
            count--;
        }
        booked.innerHTML = count
        remain.innerHTML = 72 - count


    })
});