function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

    var result = ""; 

    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

    return result; 

}

console.log(wordBlanks("Smol", "Junior The Cat", "walked", "slowly"))