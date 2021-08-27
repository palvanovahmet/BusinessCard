const Array = [1,2,3,4,5]

const square = (elemArray) => {
    let result = 0;

    if(elemArray % 2 === 0){
        result = true;
    } else {
        result = false;
    }

    return result;
}

const newArray = Array.map(square);

console.log(newArray);