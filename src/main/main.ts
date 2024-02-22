import { FS } from '../types'

figma.showUI(__html__, {
	width: 420,
	height: 360,
})

figma.on('run', async () => {
	// console.log('ok')
})

figma.on('selectionchange', async () => {})

figma.ui.onmessage = (message: FS.PluginMessage<any>) => {
	if (message.command === 'notifyError') {
		const notifyErrorMessage = message as FS.PluginMessage<{
			error: Error
			message: string
		}>
		figma.notify(notifyErrorMessage.data.message, {
			error: true,
		})
	}
}
