let tab = document.querySelectorAll('.tab'); // Assuming you're selecting elements with class "tab"

console.log(tab);

tab.forEach(function(nike) {
    let upper = nike.querySelector('.upper');
    let lower = nike.querySelector('.lower');
    let plus = nike.querySelector('.plus');
    let on = false;

    if (upper && lower && plus) {
        upper.addEventListener('click', function(e) {
            if (!on) {
                lower.classList.add('flex' );
                lower.classList.remove('hidden');
                plus.classList.add('-rotate-180');
                on = true;
            } else {
                lower.classList.remove('flex');
                lower.classList.add('hidden');
                plus.classList.remove('-rotate-180');
                on = false;
            }
        });
    }
});
