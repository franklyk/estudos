/*Toggle between adding and removing the "responsive" class to top nav when the user cliks on the icon */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive ";
    } else {
        x.className = "topnav";
    }
}
