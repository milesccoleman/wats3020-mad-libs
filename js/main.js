// WATS 3020 Mad Libs Assignment
//Miles Coleman

//prompt user for input to populate madlibs variables
let honorific = prompt("Please enter fancy title (chief, doctor, etc.)");

let authorName = prompt("What is your name?");

let adjective1 = prompt("Give a random adjective.");

let vehicle = prompt("What is your favorite car?");

let vehiclePart = prompt("What is your favorite part of your favorite car?");

let parking = prompt("Where is the best place to park your favorite car?");

let precious = prompt("What is most precious to you?");

let noiseMaker = prompt("What is the most annoying musical instrument?");

let crowdBehavior = prompt("What is a fun thing to do with a large group of people?");

let adjective2 = prompt("Give a random adjective.");

let adjective3 = prompt("Give a random adjective.");

let color  = prompt("Name a color you don't see that often.");

let familyMember = prompt("Who is your favorite family member?");

let organ = prompt("What body part would you trade for your favorite car?");

let bodyPart1 = prompt("After that body part, which one would you trade for your favorite car?");

let bodyPart2 = prompt("After that body part, which one would you trade for your favorite car?");

let bodyPart3 = prompt("After that body part, which one would you trade for your favorite car?");

let thing = prompt("Name an object from where you are currently.");

let thing2 = prompt ("Name another object.");

let thing3 = prompt ("Okay, name just one more object.");

let adjective4 = prompt("Give a random adjective.");

let adjective5 = prompt("Give one final random adjective.");


//prompt user number for generating section numbers
let userNumber = prompt("Give a number greater than zero.");

let number2 = userNumber * 45

let number3 = userNumber * 300

// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;