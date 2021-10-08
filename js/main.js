// создаем переменную с ссылкой на форму, так как мы будем работать с ней в этом коде не раз
const $form = document.querySelector('#my_form');

// вешаем прослушку (обработчик событий) на SUBMIT
$form.addEventListener('submit', (event) => {
    // убираем возможность отправлять форму браузером по умолчанию
    event.preventDefault();

    // создаем объект формы, чтобы работать с данными
    const formData = new FormData($form);
    
    // проверяем наличии `first_name` в объекте формы
    const isValidateFirstName = formData.get('first_name');

    const secondName = formData.get('second_name');
    // проверяем наличии `second_name` в объекте формы и его длина должна быть более 2 символов
    const isValidateSecondName = secondName && secondName.length >= 2;

    const age = formData.get('age');
    // проверяем наличии `age` в объекте формы и его значение должно быть более 18
    const isValidateAge = age && +age >= 18;

    const gender = formData.get('gender');
    // проверяем наличии `gender` и это должен быть male ИЛИ female
    const isValidateGender = gender && (gender === 'male' || gender === 'female');

    // formIsValidate будет true, если все элементы будут true
    const formIsValidate = (
        isValidateFirstName &&
        isValidateSecondName &&
        isValidateAge &&
        isValidateGender
    );

    // если валидно...
    if (formIsValidate) {
        // оповещаем, что всё ок и...
        alert('Is correct');
        // ...и чистим форму (рефреш)
        $form.reset();
    } else {
        // иначе, оповещаем об ошибке
        alert('Error');
    }
    console.log
});