const appDiv = document.querySelector("#app");

let name1 = {
    fName: "first",
    lName: "last",
    printFullName: function(){
        console.log(this.fName + " " + this.lName);
        appDiv.innerHTML = this.fName + " " + this.lName;
    },
    printFirstName: () => {
        console.log(this.fName);
        let div1 = document.createElement('div');
        div1.style.color = "green";
        div1.innerHTML = this.fName;
        appDiv.appendChild(div1);
    }
}

// name1.printFullName();
// name1.printFirstName();

let name2 = {
    fName: "java",
    lName: "script"
};

// function borrowing
// (funtion to be called).call( (what we want this this to be pointing to ) ) 
name1.printFullName.call(name2);

// other method to keep function outside

function printLastName (hometown) {
    let div1 = document.createElement('div');
    div1.style.color = "red";
    div1.innerHTML = this.lName + " from " + hometown;
    appDiv.appendChild(div1);
}

printLastName.call(name2, "web dev");

// bind
const printFullNameBind = name1.printFullName.bind(name1);
printFullNameBind();