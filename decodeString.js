// Write your code below this line


function stringDecoder(str) {
    if (!isNaN(str[0])) {
        let shift = parseInt(str[0])
        let decodedString = ""
        for (let i = 1; i < str.length; i++) {
            if (!isNaN(str[i])) {
                return "Invalid input"
            }
            let charCode = str.charCodeAt(i)
            charCode = (charCode - 97 + shift) % 26 + 97
            decodedString += String.fromCharCode(charCode)
        }
        return decodedString
    } else {
        return "Invalid input"
    }
}

console.log(stringDecoder("2fcjjm"))