const formatValue = (value: string) => {
    let temp = value

    temp = temp.replace(/ /g, '')
    temp = temp.replace('sin', 's')
    temp = temp.replace('cos', 'c')
    temp = temp.replace('tng', 't')
    temp = temp.replace('ctg', 'C')
    temp = temp.replace('sqrt', 'S')
    temp = temp.replace('ln', 'l')

    return temp
}

const toPolishNotation = (value: string) => {
    const reformatValue = formatValue(value)

    const asArray = reformatValue.split('')
    const polishNotationValue: string[] = []
    const symbolsStack: string[] = []
    let numberTemp = ''
    const symbols = '+-*/^sctCSl()'.split('')

    asArray.forEach((item, index) => {
        const isPriority = symbolsStack.length
            ? getPriority(item) >
              getPriority(symbolsStack[symbolsStack.length - 1])
            : true
        const isNumber = !symbols.includes(item)

        if (isNumber) {
            numberTemp += item
        } else {
            if (numberTemp) {
                polishNotationValue.push(numberTemp)
                numberTemp = ''
            }

            if (item != ')') {
                if (isPriority) {
                    symbolsStack.push(item)
                } else {
                    polishNotationValue.push(item)
                }
            } else {
                while (symbolsStack[symbolsStack.length - 1] != '(') {
                    polishNotationValue.push(symbolsStack.pop() as string)
                }
            }
        }

        if (index == asArray.length - 1 && numberTemp) {
            polishNotationValue.push(numberTemp)
            numberTemp = ''
        }
    })

    const stackLength = symbolsStack.length

    for (let i = 0; i < stackLength; i++) {
        polishNotationValue.push(symbolsStack.pop() as string)
    }

    console.log(polishNotationValue.join(''))

    // return polishNotationValue
}

const getPriority = (symbol: string) => {
    switch (symbol) {
        case '*':
        case '/':
            return 1
        case 's':
        case 'c':
        case 't':
        case 'C':
        case 'S':
        case 'l':
            return 2
        case '^':
            return 3
        case '(':
            return 4
        default:
            return 0
    }
}

export { toPolishNotation }
