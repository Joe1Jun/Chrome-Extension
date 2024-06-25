let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("del-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

//line below basically saying that if the varibale has data within it then its truthy
//and that then should execute the if statment
//so this if statement takes the data from local storage when there is an input and stores
//it .this means when its regreshed the data stored in localstorage is put on the page

if (leadsFromLocalStorage) {
    
    myLeads = leadsFromLocalStorage;

    //pass in the array you want rendered
    render(myLeads);
}


//the array is then stored as a parameter in the function by whatever name you choose
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}



delBtn.addEventListener("dblclick", function () {
    
    localStorage.clear();

    myLeads = [ ];
    
    render(myLeads)
    



})

tabBtn.addEventListener("click", function () {

    //because its an object use the dot notation to access the url
    
    //GRAB THE URL OF THE CURRENT TAB

    // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //   })

    chrome.tabs.query({ active: true, currentWindow: true, }, function (tabs) {
        
        
        myLeads.push(tabs[0].url)
        //save to local storage stringified version of myleads array
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        

    })
    
    console.log(tabs[0].url)
    
})


inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    inputEl.value = " "

    //SAVING TO LOCAL STORAGE storing key  and value of the key
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

   
    render(myLeads)
})

