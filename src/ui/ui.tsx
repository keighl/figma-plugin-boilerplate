import { createRoot } from 'react-dom/client'

import WorkerClient from './workerClient'
import App from './components/App'

import './global.css'

// Instantiate a worker
const workerClient = new WorkerClient()

const root = createRoot(document.getElementById('root')!)
root.render(<App />)

// Handling messages from the main plugin code
window.onmessage = (event) => {
	const message = event.data.pluginMessage
	const { command } = message

	if (!command) {
		throw new Error('No command in plugin message.')
	}

	switch (command) {
		default:
			console.warn(`No method for ${command}`)
			break
	}
}
