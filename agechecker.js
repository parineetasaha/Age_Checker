const Submit = document.getElementById("my-button");
const result = document.getElementById("my-lable1");
const my_text = document.getElementById("my-text");
let age;


Submit.onclick = function () {
    age = my_text.value;
    age = Number(age);
    if (age >= 100) {
        console.log(`u can't enter to this site cause u are too old`);
        result.textContent = `u can't enter to this site cause u are too old`;
    }
    else if (age >= 18) {
        console.log(`u can enter to this site`);
        result.textContent = `u can enter to this site`;
    }
    else if (age == 0) {
        console.log(`u can't enter to this site cause u have just born`);
        result.textContent = `u can't enter to this site cause u have just born`;
    }
    else if (age < 0) {
        console.log(`ur age can't be less than 0`);
        result.textContent = `ur age can't be less than 0`;
    }
    else {
        console.log(`u can't enter to this site u are too young`);
        result.textContent = `u can't enter to this site u are too young`;
    }
}