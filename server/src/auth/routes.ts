import Router from 'koa-router'

const router = new Router()

router.get('/api/v1/login', async ctx => {
	ctx.body = 'Hello world'
})

export { router }
