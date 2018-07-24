console.log(process.argv)

function temParam(param){
    return process.argv.indexOf(param) !== -1
}

if (temParam('--producao'))
    console.log('Não fala não para mim bb')
else
    console.log('la')