export const truncToTwo = (number, index) => {
    if(number.toString().includes("."))
        return number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
    else 
        return number;
}