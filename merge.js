import {read, print, exercise} from "./utils.js"

// Gib das Element an der Stelle `pos` zurück
function numAt(array, pos) {
  return array[pos]
}

function fillNumbers(numbers, {start, stop, step}) {
  for (let i = start; i < stop; i+=step) {
    numbers.push(i)
  }
}

function parseInput(input) {
  let arr = input.split(" ")
  let start = 0
  let stop = 1
  let step = 1
  if (arr.length > 0 && input.length > 0) {
    stop = parseInt(arr[0])
  }
  if (arr.length > 1) {
    start = parseInt(arr[0])
    stop = parseInt(arr[1])
  }
  if (arr.length > 2) {
    step = parseInt(arr[2])
  }
  return { start, stop, step }
}

function calcSum(numbers) {
  let sum = 0
  numbers.map(num => sum += num)
  return sum
}


exercise("Merge", function() {
  let input = read()
  let numbers = []
  fillNumbers(numbers, parseInput(input))
  let sum = calcSum(numbers)

  print("Summe: " + sum)
})