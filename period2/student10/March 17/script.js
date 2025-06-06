const testimonialsContainer = document.querySelector('.testimonial-container')
console.log(testimonialsContainer);
const testimonial = document.querySelector('.testimonial')
console.log(testimonial);
const userImage = document.querySelector('.user-image')
console.log(userImage);
const username = document.querySelector('.username')
console.log(username);
const role = document.querySelector('.role')
console.log(role);

let testimonials = []
let idx = 1

async function fetchTestimonials() {
    const response = await fetch('./data/testimonial.json')
    testimonials = await response.json()
    updateTestimonial()
}

function updateTestimonial() {
    // console.log(testimonials);
    // console.log(testimonials[0]);
    // console.log(testimonials[0].name);
    // console.log(testimonials[0].position);
    const { name, position, photo, text } = testimonials[idx];
    console.log(name);
    console.log(position);
    console.log(photo);
    console.log(text);

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++;
    if (idx > testimonials.length - 1) {
        idx = 0
    }
}

fetchTestimonials();
setInterval(updateTestimonial, 9000)