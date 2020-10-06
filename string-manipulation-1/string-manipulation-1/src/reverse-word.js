/* eslint-disable no-unused-vars */
function reverseWord(word){
  let reverse = ""
  for (var i = word.length - 1; i >= 0; i--){
    reverse += word[i]
  }
  return reverse
}
