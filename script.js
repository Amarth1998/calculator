let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    console.log(item)                    //just for understand
    item.addEventListener('click',yes) 
}
    

    function yes (e) {
        buttonText = e.target.innerText;
        console.log(e)                       //just for understand
        console.log(buttonText)              //just for understand
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
            console.log(buttonText)           //just for understand
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
            console.log(screenValue)
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    }
// target =The target property returns the element where the event occured.
// The target property is read-only.
{/* <body onclick="myFunction(event)" style="border:1px solid black;padding:8px">
<h1>HTML DOM Events</h1>

<p>Click on any elements in this document to find out which element triggered the onclick event.</p>

<button>This is a button</button>

<p id="demo"></p>

<script>
function myFunction(event) { 
  let text = event.target.tagName;
  document.getElementById("demo").innerHTML = text;
}
</script>

</body> */}








// eval() The eval() method evaluates or executes an argument.
// syntax = eval(string)
// let x = 10;
// let y = 20;
// let text = "x * y";
// let result = eval(text);