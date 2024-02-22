function* parseWalker(
	nodes: readonly SceneNode[]
): Generator<SceneNode, void, boolean> {
	for (let node of nodes) {
		if (node.visible) {
			yield node

			const { children } = node as FrameNode
			if (children) {
				yield* parseWalker(children)
			}
		}
	}
}

let indexChunkTimer: number

const readScene = async (
	nodes: readonly SceneNode[],
	resultsHandler: (results: any[], done: boolean) => Promise<void>
) => {
	const walker = parseWalker(nodes)

	const processChunk = () => {
		let results: any[] = []
		let count = 0
		let done = true
		let res

		while (!(res = walker.next()).done) {
			const node = res.value
			if (true) {
				const result = {}

				results = [...results, result]
			}

			if (++count === 200) {
				done = false
				indexChunkTimer = setTimeout(processChunk, 100)
				break
			}
		}

		// Emit result chunk
		resultsHandler(results, done)
	}

	processChunk()
}

export default readScene
