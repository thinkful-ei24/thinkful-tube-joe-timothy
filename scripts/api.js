const api = function(){
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

    
    /* const decorateResponse = function(response) {
        console.log('decorate response');
        return response.items.map(item => {
            console.log(item);
            return {
                id: item.id.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.medium.url
            };
        });
    }; */

    const fetchVideos = function(searchTerm, callback) {
            console.log('fetchVideos is running');
            const queryObject = {
                'maxresults': '5',
                'part': 'snippet',
                'q': searchTerm,
                'type': 'video',
                'key': API_KEY
            };
        
        $.getJSON(BASE_URL, queryObject, callback);
    };

    return {
        fetchVideos};
}();