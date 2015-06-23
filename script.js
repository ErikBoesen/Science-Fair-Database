/*
This code was written by
___________      .__ __     __________                                    
\_   _____/______|__|  | __ \______   \ ____   ____   ______ ____   ____  
 |   ___)_\_  __ \  |  |/ /  |    |  _//  _ \_/ __ \ /  ___// __ \ /    \ 
 |        \|  | \/  |    <   |    |   (  <_> )  ___/ \___ \\  ___/|   |  \
/_______  /|__|  |__|__|_ \  |______  /\____/ \___  >____  >\___  >___|  /
        \/               \/         \/            \/     \/     \/     \/ 
Visit ErikBoesen.com/web-design
*/

/*Search funtion, called when clicking Search button on Home page.*/
function search() {
    var name = window.prompt("Enter the full name of the person you want to search for.\nSpelnlig & cApitaliZAtion count.").split(" ");
    if (name === null) {
        window.alert("That's not a valid name. Please try again.");
    } 
    else {
        name = name[1] + "_" + name[0];
        window.open("student_" + name + ".html", "_self");
    }
}

/*Start jQuery!*/

/*End jQuery*/