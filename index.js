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
  const pastrami = []

  for (var i = 0; i < katzDeliLine; i++){
    pastrami.push (`${i + 1}. ${line[i]}`)
  }
  return (`The line is currently: ${pastrami.join(, )}`)
}
