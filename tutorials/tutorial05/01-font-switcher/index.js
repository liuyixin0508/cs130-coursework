let currentsize = 1.4

const makeBigger = () => {
   // alert('make bigger!');
   currentsize += 0.2
   document.querySelector("div.content").style.fontSize = `${currentsize}em` ;
   document.querySelector("header").style.fontSize = `${currentsize+0.5}em`;
   /*document.querySelector("").style.fontSize="bigger";*/
}

const makeSmaller = () => {
   currentsize -= 0.2
   document.querySelector("div.content").style.fontSize = `${currentsize}em` ;
   document.querySelector("header").style.fontSize = `${currentsize+0.5}em`;
   // alert('make smaller!');
};





