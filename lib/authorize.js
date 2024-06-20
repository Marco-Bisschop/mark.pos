const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'marco') {
        req.user = { name: 'marco', id: 1}
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports.authorize = authorize