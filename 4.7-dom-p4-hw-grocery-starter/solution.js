////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */
// const newHref = '';


let href = document.querySelectorAll('href'); 
href.textContent= "styles.css";
console.log(href); 

/* 1.2) Set the class of the image to "list-img" */


/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */




////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */



/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */





/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by removing the "display-none" class from the the total-area div
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */




////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

