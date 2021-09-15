import fp from 'fastify-plugin'

const auth = fp(async (fastify, otps, next) => {
    fastify.decorate('authentication', async (req, res) => {
        try {
            const decoded = await req.jwtVerify()
            console.log('----decoded----', decoded)
            // console.log('----req----', req)
        } catch (e) {
            res.code(400).send(e)
        }
    })
    next() 
})

export default auth