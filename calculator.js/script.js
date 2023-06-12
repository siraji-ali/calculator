 //  FUNCTION 1
       //this function adds a specific value to the result
   
       function addToResult(value) {
        //this getElementById is a built in JS method that returns a reference to the element with the specified id.
        //in this case the element being returned has the id result
        // the += is an operator called the addition assignment operator basically it adds the value on the right to the value on the left
        document.getElementById("result").value += value;
      }
      //FUNCTION 2
      //this function just clears the result by assigning an empty string to its value
      function clearResult() {
        document.getElementById("result").value = "";
      }
      //FUNCTION 3
      //this function calculates the input
      function calculate() {
        //this eval function is a built-in JS function that evaluates a string as code
        var result = eval(document.getElementById("result").value);
        //the code below replaces the input given with the answer after the calculation has been done
        document.getElementById("result").value = result;
      }
      