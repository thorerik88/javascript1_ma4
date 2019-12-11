// CREATE A LIST OF TODO CARDS ON A WEBPAGE

// global variables
function loopResults(json) {
  const resultsElement = document.querySelector(".results");
  console.log(json.length)
  for (let key in json) {
    // set output text for the div element inner html
    text = "<h1>" + "UserId: " + json[key].userId + "</h1>";
    text += "<h2>" + "id: " + json[key].id + "</h2>";
    text += "<p>" + "title: " + json[key].title + "</p>";
    text += "<p>" + "completed: " + json[key].completed + "</p>";

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
