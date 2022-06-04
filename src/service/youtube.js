class Youtube {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular() {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${this.key}&chart=mostPopular&maxResults=25&part=snippet&regionCode=kr`, this.requestOptions);
            const result_1 = await response.json();
            return result_1.items;
        } catch (error) {
            return console.log('error', error);
        }
    }

    async search(query) {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&type=video&maxResults=25&q=${query} `, this.requestOptions);
        const result_1 = await response.json();
        return (
            result_1.items.map(item => ({ ...item, id: item.id.videoId }))
            // setVideos(aa)
        );
    }
}

export default Youtube;