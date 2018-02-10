var katzDeli = [];

function takeANumber (katzDeliLine, name){
  katzDeliLine.push (name)

  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing (katzDeliLine){
  if (!katzDeliLine.length){
    return ("There is nobody waiting to be served!")
  }
  return (`Currently serving ${katzDeliLine.shift()}.`)
}

function currentLine(katzDeliLine){
  if (!katzDeliLine.length){
    return ("The line is currently empty.")
  }
  var pastrami = "The line is currently: "
  
  for (var i = 0; i < katzDeliLine-1; i++){
    pastrami += (`${i + 1}. ${katzDeliLine[i]}`) + ', '
    console.log (pastrami)
  }
  pastrami += (`${katzDeliLine.length+1}. ${katzDeliLine[katzDeliLine.length-1]}`)
}
