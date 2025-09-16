//your JS code here. If required.
document.querySelectorAll('.code').forEach((input, index, inputs) => {
    input.addEventListener('input', () => {
        if (input.value.length >= 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            if (input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});
