"use srict";

// This is the file where you will write the Truncate Words function and related code.

function truncateWords(longText, numWords) {
    var truncatedText = longText
    // Split string by space to get array of words.
    var words = longText.split(" ");
    // Calculate how many words need to be removed.
    var countWordsInText = words.length;
    var countWordsToRemove = countWordsInText - numWords;
    // Truncate text only if it needs to.
    if(countWordsToRemove > 0) {
        var removeStartIndex = (countWordsInText - countWordsToRemove);
        words.splice (removeStartIndex, countWordsToRemove);
        words.push ("...")
    
        truncatedText = words.join(" ")
    }

    return truncatedText;
}

// Defining global values to use to test function
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;

//Execute truncate words and assign result to variable.
var shortText = truncateWords(originalText, wordLimit);

// Display results to console.
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);   
    


// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.


