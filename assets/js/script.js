const html_inputBin = document.querySelector('.input-bin')
const html_convertButton = document.querySelector('.convert-button')
const html_dec = document.querySelector('.dec')

var binary

// Listener

html_convertButton.addEventListener('click', e => {
    binary = html_inputBin.value
    
    for (var char of binary) {
        if (char != '0' && char != '1') {
            alert('Você inseriu algo diferente de 0 ou 1')
            binary = '0'
            break
        }
    }

    decimal = convert(binary)
    
    html_dec.innerText = decimal
})

html_inputBin.addEventListener('change', e => {
    binary = html_inputBin.value

    for (var char of binary) {
        if (char != '0' && char != '1') {
            alert('Você inseriu algo diferente de 0 ou 1')
            break
        }
    }
})

// Function

function convert(binary) {
    notacao_posicional = binary.length - 1
    decimal = 0

    for (var bit of binary) {
        num = 2 ** notacao_posicional * bit
        decimal += num

        notacao_posicional--
    }

    return decimal
}

// '11001' -> '25'
//  01234

//  1     1     0     0     1
//  |     |     |     |     |
//  v     v     v     v     v
// 2**4  2**3  2**2  2**1  2**0
//  16    8     4     2     1
//  16  + 8   + 0   + 0   + 1 = 25