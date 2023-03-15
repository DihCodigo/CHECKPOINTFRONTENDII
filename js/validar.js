const NameForm = document.getElementById('NameForm');
const ReleaseDateForm = document.getElementById('ReleaseDateForm');
const DescriptionForm = document.getElementById('DescriptionForm');
const IMGForm = document.getElementById('IMGForm');

enviar.addEventListener('click', (e) => {
    // validar()

    function validar() {
        let msg = "";
        if (NameForm.value === '' || NameForm.value === null) {
            e.preventDefault();
            alert("Por favor, preencha o nome.")
        }
        if (ReleaseDateForm.value === '' || ReleaseDateForm.value === null) {
            e.preventDefault();
            alert("Por favor, preencha o ano de lançamento.")
        }
        if (DescriptionForm.value === '' || DescriptionForm.value === null) {
            e.preventDefault();
            alert("Por favor, preencha a descrição.")
        }
        if (IMGForm.value === '' || IMGForm.value === null) {
            e.preventDefault();
            alert("Por favor, preencha a foto do URL.")
        }
    }
})
