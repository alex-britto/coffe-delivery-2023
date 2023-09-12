import { Trash } from '@phosphor-icons/react'

import styled, { W } from 'windstitch'

export default function DiscardButton({
	...rest
}: W.Infer<typeof StyledButton>) {
	return (
		<StyledButton {...rest}>
			<Trash size={16} className='fill-purple-default' />
			REMOVER
		</StyledButton>
	)
}

const StyledButton = styled.button(`
	w-fit
	text-xs
	bg-base-button
	hover:bg-base-hover
	p-2
	rounded-md
	flex
	gap-1
	items-center
	text-base-text
`)
