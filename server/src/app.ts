import Koa from 'koa'
import Router from 'koa-router'
import passport from 'koa-passport'

import { router as authRouter } from './auth'

export const createApp = (): Koa => {
	const app = new Koa()
	const router = new Router()

	router.get('/', async ctx => {
		ctx.body = 'Hello world'
	})

	app.use(passport.initialize())
	app.use(passport.session())
	app.use(router.routes())
	app.use(authRouter.routes())

	return app
}
