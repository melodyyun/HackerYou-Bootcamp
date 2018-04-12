const app ={};

app.nav = () => {
    const navHome = $("#home");
    navHome.on("click", function(){
        console.log("clicked on nav bar");
    });
};

app.init = () => {
    app.nav();
};

// document ready;
$(document).ready(function(){
    app.init();
});