
function store(){ //stores items in the localStorage
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var enroll_no = document.getElementById('enroll_no').value;
    var course = document.getElementById('course').value;
    var semester = document.getElementById('semester').value;
    var attendance = document.getElementById('attendance').value;
    
    const student = {
        first_name: firstname,
        last_name: lastname,
        enroll_no: enroll_no,
        course: course,
        semester: semester,
        attendance: attendance
    }

    window.localStorage.setItem(enroll_no,JSON.stringify(student));  
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
    var enroll_no = document.getElementById('retrieveKey').value; //gets no. from user
    console.log("retrive records");
    var records = window.localStorage.getItem(enroll_no); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(enroll_no) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("newstudent").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}