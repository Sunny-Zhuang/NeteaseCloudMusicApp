export default function playlist(result = {}) {
    if (result.data && result.data.playlist) {
        return result.data.playlist
    }
    throw Error('no data')
}