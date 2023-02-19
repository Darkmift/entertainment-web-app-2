const images: { [key: string]: string } = {}

async function importAll() {
    const files = await import.meta.glob('./*.{png,jpg,jpeg,svg}')
    for (const path in files) {
        const name = path.replace(/^.\/(.+)$/, '$1')
        images[name] = ((await files[path]()) as any).default
    }
}

importAll()

export default images
