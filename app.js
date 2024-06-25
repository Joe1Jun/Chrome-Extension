
let myLeads = [];
const inputEl = document.getElementById("input-el");
//const cant be reassigned
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
//can use this to get rid of onclick in button in html
console.log(ulEl);


inputBtn.addEventListener("click", function () {
    
    myLeads.push(inputEl.value);

    //this line below is to clear the input field

    inputEl.value = " "; 
    renderLeads();

   }
    
)

function renderLeads() {
     
    let listItems = " ";

    for (let i = 0; i < myLeads.length; i++) {

        //this is his way
        //below is noraml
        // listItems += "<li><a target = 'blank' href = ' " + myLeads + " '>" + myLeads[i] + "</a></li>";
        //below is using a template string
        //its a string , can break into mulyiple lines to make it more readable
        //use ${} to insert javascript into the template
        listItems += `<li>
                         <a target='_blank' href= '${myLeads[i]}'> 
                         ${myLeads[i]} </a>
                      </li>`
    }

    ulEl.innerHTML= listItems;
}


    
    // for (let i = 0; i < myLeads.length; i++) {
    //     //this is chat gpt way which is a bit cleaner
    //     //use innerhtml to use html elements.
    //      const anchor = document.createElement("a");
    //      anchor.href = "https://" + myLeads[i];
    //      anchor.textContent = myLeads[i];

    //     const li = document.createElement("li");
    //      li.appendChild(anchor);
    //      ulEl.appendChild(li);

        
    //      console.log(listItems);

        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> ";
        
        //this is a different cleaner way to do it
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    

    
//}



//Dom comes with a cost . do it in loop or out of loop . Do it outside of loop


