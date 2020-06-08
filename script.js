
// namespacing
const wordApp = {};


// init function for the app

wordApp.init = function () {

    // Input for player name

    let Name = $('.name');

    let Value = $('.jqValue');

    const playerName = Name.on('input', function (event) {
        return Value.html(Name.val());
    });



    // Array of words to guess

    const words = ['jump', 'book', 'far', 'car', 'ice', 'road', 'pizza', 'bike', 'london', 'street'];

    // Randomizing word to be displayed

    let word = words[Math.floor(Math.random() * words.length)];

    console.log(word);


    let wordDisp = word.toUpperCase();

    console.log(wordDisp);


    //displaying the word (word needs to be half hidden eventually)

    document.getElementById("wordToGuess").innerHTML = wordDisp;

    // Setting score counter to 0

    let count = 0;

    // Player guessing the word
    let guessName = $('.playerGuess');
    let guessValue = $('.playerValue');

    guessName.on('input', function (event) {
        let guessedWord = guessName.val();
        return guessValue.html(guessedWord);
    });


    // Match the word displayed and the word player entered
    guessName.on('keypress', function (e) {

        //when player hits enter
        if (e.which === 13) {
            $("input").prop("disabled", true);
            $('#hidden').hide();
            // $("html, body").animate({ scrollTop: 2100 }, 800);
            $("html,body").delay(500).animate({
                scrollTop: $("#score").offset().top,
            });
            let finalGuess = guessName.val();
            let matchGuess = finalGuess.toUpperCase();
            //look into adding a counter here, start the value of 0 add and subtract based on answers
            if (matchGuess === wordDisp) {
                $('#score').text('a true hero!');
                count = count + 1;
                $('.count').html(count);
            } else {
                $('#score').text('Not good enough!');
                count = count - 1;
                $('.count').html(count);
            }

        }
    });

    //method to remove specific element from array

    function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            return ele != value;
        });
    }

    // Making a copy of the array without the first word
    let newWords = arrayRemove(words, word);


    console.log(newWords);

    // getting a random word from the secon array





    function replaceWord() {
        let secondWord = newWords[Math.floor(Math.random() * words.length)];
        console.log(secondWord);
        // let wordDisp = secondWord.toUpperCase();
        wordDisp = secondWord.toUpperCase();
        console.log(`second word to be displayed is ${wordDisp}`);

        document.getElementById("wordToGuess").innerHTML = wordDisp;


    }


    // on click player gets a word from the new array to guess and count is also updated

    $(".guessAgain").on('click', function (e) {
        e.preventDefault();
        console.log('clicked');
        replaceWord();
        $("input").prop("disabled", false);
        $(".playerGuess").val('');
        $('#hidden').show();
        // $("html, body").animate({ scrollTop: 1350 }, 800);
        $("html,body").animate({
            scrollTop: $("#secret").offset().top,
        });
    });

}

// on clicking takes player to quiz section

$(".letsPlay").on('click', function (e) {
    e.preventDefault();
    console.log('clicked');
    // $("html, body").animate({ scrollTop: 1360 }, 800);
    $("html,body").animate({
        scrollTop: $("#secret").offset().top,
    });
});

// Clearing the score and reloading words

function replacePage() {
    location.reload(true);
}

$(".endGame").on('click', function () {
    // e.preventDefault();
    $("html,body").animate({
        scrollTop: $("#hero").offset().top,
    });
    replacePage();
    $("html,body").animate({
        scrollTop: $("#hero").offset().top,
    });
});

// Document ready

$(document).ready(function () {

    // Calling init method within document ready

    wordApp.init();
})







