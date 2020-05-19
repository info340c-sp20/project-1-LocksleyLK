// Get .CSV file of Covid-19 State Information from GitHub Pages.
fetch("https://info340c-sp20.github.io/project-1-LocksleyLK/us-states.csv")
    .then(function(response) {
        let stateData = response.text();
        return stateData;
    })
    .then(function(text) {
        let table = document.getElementById("covidTable");
        // Split information by line brakes to create rows.
        let rows = text.split("\n");
        rows = rows.slice(1);
        
        for(let i = 0; i < rows.length; i++) {
            console.log(i);
            let row = table.insertRow();

            // Split information by commas to create columns.
            let columns = rows[i].split(",");

            for (let column of columns) {
                let cell = row.insertCell();
                cell.innerText = column;
            }
        }
    }); 

    // This function allows the users to type in a state to view its data.
// Used w3schools as a reference:
// https://www.w3schools.com/howto/howto_js_filter_table.asp
function filterState() {
  let input = document.getElementById("state");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("covidTable");
  let tr = table.getElementsByTagName("tr");

  // Hides all of the rows that do not include the inputted value!
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      let stateInput = td.textContent || td.innerText;
      if (stateInput.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// This function allows the users to choose whether they see the death count by state due to COVID-19.
function showDeaths() {
    let table = document.getElementById("covidTable");
    let tr = table.getElementsByTagName("tr");
    var input = document.getElementById("deathCount");
    let th = table.getElementsByTagName("th")[3];

    // This makes the top heading, "Deaths," disappear.
    if (input.checked == true) {
        th.style.display = "";
      } 
    else {
        th.style.display = "none";
    }

    // When checked, display Covid-19 death column. When unchecked, COVID-19 deaths do not display.
    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        if (input.checked == true) {
          td.style.display = "";
        } 
        else {
          td.style.display = "none";
        }
      }
    }
  }
