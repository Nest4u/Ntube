import type { PropsWithChildren } from 'react'

import { Header } from './header/header'

export function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div
			className='relative'
			style={{
				flex: '1 1 0%'
			}}
		>
			<Header />
			<section className='p-layout'>{children}</section>
		</div>
	)
}
