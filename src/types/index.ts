export namespace FS {
	export type PluginMessage<T> = {
		command: string
		data: T
	}
}
