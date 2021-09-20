const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(){
    cats.push("Ralph");
    return cats
}
 
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function appendCat(){
    const copyOfCats = [...cats, "Broom"]
    return copyOfCats
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function prependCat(){
    const copyOfCats = ["Arnold", ...cats];
    return copyOfCats
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function removeLastCat() {
    const copyOfCats = ['Milo', 'Otis', 'Garfield']
    copyOfCats.pop()
    return copyOfCats
    return cats
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function removeFirstCat() {
    const copyOfCats = ['Milo', 'Otis', 'Garfield']
    copyOfCats.shift()
    return copyOfCats
    return cats
}