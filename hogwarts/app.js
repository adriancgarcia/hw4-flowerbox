// if (typeof jQuery =='undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


// document.querySelector("body")
// console.dir(document.body)
const $body = $("body")
// console.log($body)

// $(() => {
    
// });

const $container = $("#container")
    console.log($container);

const $h1 = $("<h1>")
$h1.text("Hogwarts")
console.log($h1)
$container.append($h1)

const $h2 = $("<h2>")
$h2.text("Adrian")
$container.append($h2)

const $h3 = $("<h3>")
$h3.text("Slytherin")
$container.append($h3)

const $h4pet = $("<h4>")
$h4pet.addClass("dog").text("Khaleesi")
$container.append($h4pet)    

const $h4wand = $("<h4>")
$h4wand.addClass("wand").text("Holly Wand with Unicorn Hair")
$container.append($h4wand)