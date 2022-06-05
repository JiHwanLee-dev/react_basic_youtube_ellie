import axios from "axios";

class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: {key: key}
        })
        // this.key = key;
        // this.requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };
    }

    async mostPopular() {
        try {
            const response = await this.youtube.get('videos', {
                params: {
                    part: 'snippet',
                    chart: 'mostPopular',
                    maxResults: 25,
                    regionCode: 'kr',

                }
            });

            return response.data.items;
        } catch (error) {
            return console.log('error', error);
        }
    }

    async search(query) {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 25,
                q: query
            }
        });
        

        // const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&type=video&maxResults=25&q=${query} `, this.requestOptions);
        // const result_1 = await response.json();
        return (
            response.items.map(item => ({ ...item, id: item.id.videoId }))
            // setVideos(aa)
        );
    }
}

export default Youtube;