export const truncToTwo = (number, index) => {
    return number.toString().slice(0, (number.toString().indexOf(".")) + (index + 1));
}