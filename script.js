
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

    const words = ['jump', 'book', 'far', 'car', 'ice', 'road', 'pizza', 'bike', 'london', 'street', 'juice', 'orbitz', 'apple', 'run', 'walk', 'talk', 'hot', 'cold', 'water', 'rain', 'sun'];

    // Randomizing word to be displayed

    let word = words[Math.floor(Math.random() * words.length)];

    // Word to be displayed/guess in upper case

    let wordDisp = word.toUpperCase();


    //displaying the word (word will be hlaf hidden by .hide div)

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
            $("html,body").delay(600).animate({
                scrollTop: $("#score").offset().top,
            });
            let finalGuess = guessName.val();
            let matchGuess = finalGuess.toUpperCase();

            //Counter starts with the value of 0 and adds and subtracts based on answers
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

    //Method to remove specific element from array(tried .splice but it was'nt doing exactly what I wanted)

    function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            return ele != value;
        });
    }

    // Making a copy of the array without the first word that is already displayed
    let newWords = arrayRemove(words, word);

    // getting a random word from the secon array
    function replaceWord() {
        let secondWord = newWords[Math.floor(Math.random() * words.length)];
        wordDisp = secondWord.toUpperCase();
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
    e.preventDefault();
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







