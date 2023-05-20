// if (typeof jQuery =='undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


const $body = $("body")
// console.log($body)

$(() => {
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

const $h4Pet = $("<h4>")
$h4Pet.addClass("dog").text("Khaleesi")
$container.append($h4Pet)    

const $h4Wand = $("<h4>")
$h4Wand.addClass("wand").text("Holly Wand with Unicorn Hair")
$container.append($h4Wand)

const $ul = $("<ul>");
$ul.attr('id', 'storage').val("trunk")
$container.append($ul)

const $li = $("<li>");
$li.text("Butter Beer");
$ul.append($li);

$("ul").append($("<li>").addClass("secret").text("invisibilty cloak"))

$("ul").append($("<li>").addClass("secret").text("magic lamp"))

$("ul").append($("<li>").addClass("secret").text("time turner"));

$("ul").append($("<li>").addClass("dog").text("leash"))

$("ul").append($("<li>").text("Bertie Boys Every Flaor[Jelly] Beans"))

});



