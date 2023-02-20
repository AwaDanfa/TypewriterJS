// grab the h1 tag by its ID
const textDisplay = document.getElementById('text')
// phrases that will be rotated
const phrases = ['Hello, my name is Awa.', 'I love coding.', 'I enjoy gaining some new skills.']
let i = 0
let j = 0 
let currentPhrase = [] // push letters into the current phrase
let isDeleting = false // delete
let isEnd = false // when 
// loop other each phrase by printing out each letter. For that, we are gonna use a nested loop. 
// So, insert a loop inside another loop. The central loop will initiate the outer loop. Each sentence represent one loop.
const loop = () => {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')// whatever the current phrase is, each time that a loop is initiated, we are gonna print out what is in the array. 
  //The join method will join the letters.
// outer loop
  if (i < phrases.length) {
// inner loop
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])// print first character of the sentence - add a letter
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]) // remove a letter a letter
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true 
      isDeleting = true // as soon as we're at the end of our first word (last character), the end will turn to true.
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false // false because we are no longer deleting letters, we are adding letters.
      i++  // move to the next letter
      if (i === phrases.length) {
        i = 0 // when reaching the final letter, the typewriter mode will start all over again.
      }
    }
  }

  // we want the timer to type randomly from a different range - establish a random range between a minimum value of 50 milliseconds and maximum value of 80 milliseconds
  const spedUp = Math.random() * (80 -50) + 50
  // spedUp is used when we are deleting a letter
  const normalSpeed = Math.random() * (300 -200) + 200 // milliseconds
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed // if we are reaching the end, we will remain on the last letter for 2000s. Otherwise, if we are deleting, I want to go at the SpedUp time or otherwise, on a normal speed.
  setTimeout(loop, time)
}

loop()

