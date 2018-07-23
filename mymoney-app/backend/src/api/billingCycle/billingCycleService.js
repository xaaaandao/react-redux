const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

/**
 * Define os métodos
 */
BillingCycle.methods(['get', 'put', 'post', 'delete'])
/**
 * não válido por exemplo o ano, mês, etc
 * retorna o valor da primeira inserção que foi feita em um put
 */
BillingCycle.updateOptions({new: true, runValidators: true})
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error)
            res.status(500).json({errors: [error]})
        else
            res.json({value})
    })
})

/**
 * Para o aggregate funcionar o mongodb precisa estar na versão 3.4.2
 */
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle
