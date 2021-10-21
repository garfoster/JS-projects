let myLeads= []

const inputBtn = document.getElementById("input-btn")
const inputEl= document.getElementById("input-el")
const ulEL= document.getElementById("ul-el")
const deleteEl= document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
    myLeads= leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value= " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)     
    })
})

deleteEl.addEventListener("dblclick", function(){
    localStorage.clear("myLeads")
    myLeads = []
    render(myLeads)
})

function render(leads){
    let listItems= ""
    for (let i = 0; i < leads.length; i ++){
        //listItems+= "<li><a target='_blank' href='" + myLeads[i]+ "'>" + myLeads[i] + "</a></li>"
        listItems+= `<li>
                        <a target='_blank' href='${leads[i]}'> 
                            ${leads[i]} 
                        </a>
                    </li>`
                        }
    ulEL.innerHTML = listItems
    }
