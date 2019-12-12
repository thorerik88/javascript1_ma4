// CREATE A LIST OF TODO CARDS ON A WEBPAGE

<<<<<<< HEAD
// global variables
function loopResults(json) {
  const resultsElement = document.querySelector(".results");
  console.log(json.length)
=======
let regexGreen = /false/;
function loopResults(json) {
  const resultsElement = document.querySelector(".results");
>>>>>>> css
  for (let key in json) {
    // set output text for the div element inner html
    text = "<h1>" + "UserId: " + json[key].userId + "</h1>";
    text += "<h2>" + "id: " + json[key].id + "</h2>";
    text += "<p>" + "title: " + json[key].title + "</p>";
<<<<<<< HEAD
    text += "<p>" + "completed: " + json[key].completed + "</p>";

=======
    // set red color to "false" and green value to "true"
    if (regexGreen.exec(json[key].completed)) {
      text += "<p>completed: <span class='red'>" + json[key].completed + "</span></p>";
    } else {
      text += "<p>completed: <span class='green'>" + json[key].completed + "</span></p>";
    }
>>>>>>> css
    // create a div element, add text and append to main div element
    let todo = document.createElement('div');
    todo.innerHTML = text;
    resultsElement.appendChild(todo);
  }
}

// retreive the API
async function callApi() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    loopResults(json);
  }
  catch (error) {
    console.log(error);
  }
}
callApi();
