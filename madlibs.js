function generateMadlib() {
  
  // This is the starting story
  var story = "Welcome to ScriptEd! Our mascot is the PLURAL_NOUN.  We love to VERB! Sometimes we even verb-2. Do you like to verb-3  ";
  

  var inputValue = document.getElementById("plural-noun-1").value;
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = document.getElementById("verb-1").value;
  story = story.replace("VERB", inputValue);
  inputValue = document.getElementById("verb-2").value;
  story = story.replace("verb-2", inputValue);
  inputValue = document.getElementById("verb-3").value;
  story = story.replace("verb-3", inputValue);
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}