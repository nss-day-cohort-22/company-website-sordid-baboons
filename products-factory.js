
//create database of products
    const pygmyElephant = {
        'name' : 'Borneo Pygmy Elephant',
        'species' : 'Elephas maximus borneensis',
        'price' : '$7,499,000' ,
        'stock' : 3 ,
        'img' : "http://animalsadda.com/wp-content/uploads/2015/05/borneo-pygmy-elephant-5.jpg"
    }

    const vaquita = {
        'name' : 'Vaquita',
        'species' : 'Phocoena sinus',
        'price' :  '$2,999,995',
        'stock' : 2 ,
        'img' : "http://www.ferretsandfriends.org/uploads/6/8/4/7/68474827/vaquita_orig.jpg"
    }

    const demagorgon = {
        'name' : 'Demagorgon',
        'species' : 'Demagorgon',
        'price' : '$666,666,666',
        'stock' : 1 ,
        'img' : "http://fantmir.ru/uploads/posts/2016-09/1473255842_limkuk-art_stranger-things-demogorgon_1.jpg"
    }

    const amur = {
        'name' : 'Amur Leopard',
        'species' : 'Panthera pardus orientalis',
        'price' : '$1,249,000',
        'stock' : 2 ,
        'img' : "https://c402277.ssl.cf1.rackcdn.com/photos/2260/images/story_full_width/Amur-Leopard_08.23.2012_Help.jpg?1345726333"
    }

//created an empty array to store objects for inventory
const inventory = []

//pushed all the objects into the inventory array
inventory.push(pygmyElephant, vaquita, demagorgon, amur);

//testing array and objects......
// console.log(inventory); 
// console.log(amur);

//created variable with stringified inventory to be stored on local storage
const inventoryString = JSON.stringify(inventory);
//stored stringified inventory on local storage and named it "inventory"
localStorage.setItem("inventory", inventoryString);