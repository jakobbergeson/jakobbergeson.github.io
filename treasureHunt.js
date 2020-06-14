//alert("working")
var chest = Math.floor(Math.random() * 24)
var skull = Math.floor(Math.random() * 24)
console.log(chest)
console.log(skull)
while (chest === skull){
  skull = Math.floor(Math.random() * 24)
  console.log("redone", skull)
}
var count = 20
var end = false



const treasure = (location) => {
  //alert(`The location is ${location}`)
  if ( count === 0 || end === true) {
    return
  }
  count -= 1
  // if the count drops to 0 end the game
  document.getElementById('counter').innerHTML = count
  if (location === chest) {
    document.getElementById(location).innerHTML = "&#128176"
    alert("You won!")
    end = true
  } else if (location === skull) {
    document.getElementById(location).innerHTML = "&#x2620"
    alert("You die!")
    end = true
    } else {
    document.getElementById(location).innerHTML = "&#127998"
        if (count === 0 ){
        alert("Game Over")
  }
  }

}
