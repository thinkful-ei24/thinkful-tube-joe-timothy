const store = function(){
    videos = [];
    const setVideos = function(videos){
        this.videos = videos;
    };
    return {
        videos,
        setVideos
    }
}();