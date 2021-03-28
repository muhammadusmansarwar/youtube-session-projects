window.addEventListener('load', function() {

    let plus = document.querySelector('#plus');
    let minus = document.querySelector('#minus');
    let multiply = document.querySelector('#multiply');
    let divide = document.querySelector('#divide');

    let pressed_button = '';

    plus.addEventListener('click', function() {


        let first_value = document.querySelector('#first').value;

        let second_value = document.getElementById('second').value;

        if (first_value == '' || second_value == '') {
            alert('Please Provide Value in Empty Input Field');
        }


        document.getElementById('result').value = (parseInt(first_value) + parseInt(second_value));


    });


    minus.addEventListener('click', function() {


        let first_value = document.querySelector('#first').value;

        let second_value = document.getElementById('second').value;


        if (first_value == '' || second_value == '') {
            alert('Please Provide Value in Empty Input Field');
        }

        document.getElementById('result').value = (parseInt(first_value) - parseInt(second_value));


    });


    multiply.addEventListener('click', function() {


        let first_value = document.querySelector('#first').value;

        let second_value = document.getElementById('second').value;

        if (first_value == '' || second_value == '') {
            alert('Please Provide Value in Empty Input Field');
        }


        document.getElementById('result').value = (parseInt(first_value) * parseInt(second_value));


    });


    divide.addEventListener('click', function() {


        let first_value = document.querySelector('#first').value;

        let second_value = document.getElementById('second').value;

        if (first_value == '' || second_value == '') {
            alert('Please Provide Value in Empty Input Field');
        }

        document.getElementById('result').value = (parseInt(first_value) / parseInt(second_value));


    });
});