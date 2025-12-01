document.getElementById("contactForm").onsubmit = function() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    
 
    alert("Your order has been submitted successfully!\n\nName: " + name + "\nPhone: " + phone + "\nOrder: " + message + "\n\nWe will contact you soon!");
    
    return false;
};


document.getElementsByClassName("menu-item")[0].onclick = function() {
    alert("Amsterdam Chips - 1.400 BD\n\nDelicious premium chips with special seasonings!\nAvailable now!");
};


document.getElementsByClassName("menu-item")[1].onclick = function() {
    alert("Regular Chips - 1.200 BD\n\nClassic crispy chips, perfectly seasoned!\nAvailable now!");
};


var navLinks = document.getElementsByClassName("navlink");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function(e) {
        e.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    
}
window.onload = function() {
    var navHeight = document.querySelector('nav').offsetHeight;
    document.querySelector('.banner').style.marginTop = navHeight + 'px';
};

window.onscroll = function() {
    var sections = document.getElementsByTagName("section");
    var navLinks = document.getElementsByClassName("navlink");
    
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var top = section.offsetTop - 100;
        var bottom = top + section.offsetHeight;
        
        if (window.scrollY >= top && window.scrollY < bottom) {
            for (var j = 0; j < navLinks.length; j++) {
                navLinks[j].style.background = "transparent";
            }
            
            var currentLink = document.querySelector('a[href="#' + section.id + '"]');
            if (currentLink) {
                currentLink.style.background = "white";
                currentLink.style.color = "#ff8c00";
            }
        }
    }
};
