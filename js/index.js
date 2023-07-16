function randomtext(){
    var text = ["Be yourself everyone else is already taken.","I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","So many books, so little time."];
    var owner = ["Oscar Wilde","Marilyn Monroe","Albert Einstein","Frank Zappa"];

    var x = Math.round( Math.random() * text.length )
    document.getElementById("demo").innerHTML=text[x];
    document.getElementById("demo2").innerHTML=owner[x];
}

