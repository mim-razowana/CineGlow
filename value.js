const allquestion = document.querySelectorAll(".faqQuestion");
const startButton = document.getElementById('startButton');
const emailInput = document.getElementById('email');



allquestion.forEach((v, index) => {
    v.addEventListener("click", () => {
        // Hide all other elements
        allquestion.forEach((otherQuestion) => {
            if (otherQuestion !== v) {
                let nextElement = otherQuestion.nextElementSibling;
                if (nextElement) {
                    nextElement.classList.remove("h-[auto]", "scale-y-100", "p-[20px]" ,"mb-[10px]");
                }
            }
        });

        // Toggle classes for the clicked element
        let nextElement = v.nextElementSibling;
        if (nextElement) {
            nextElement.classList.toggle("h-[auto]");
            nextElement.classList.toggle("scale-y-100");
            nextElement.classList.toggle("p-[20px]");
            nextElement.classList.toggle("mb-[10px]");
        }
    });
});

function forEmailAddress(){
const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        emailInput.value = 'Please enter an email address!';
        
    } else {
        alert('Thanks for email address!');
    }
};


startButton.addEventListener('click',forEmailAddress );

    
//     const emailValue = emailInput.value.trim();
//     if (emailValue === '') {
//         emailInput.value = 'Please enter an email address!';
        
//     } else {
//         alert('Thanks for email address!');
//     }
// });

