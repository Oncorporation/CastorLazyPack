Vue.component('client-component', {
    data: function () {
        return {
            serviceUrl: '',
            socket: Object,
            imageurl: '',
            imgclass: 'hidden',            
            badgeclass: 'hidden', 
            queue: Object,
            fade: false,
            badgeurl: '',
            framesrc: '',
            frameclass: 'hidden',
            videosrc: '',
            videoclass: 'hidden',
            muted: true            
        };
    },
    methods: {
        timeout: function (ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    },
    mounted: function () {
        //---------------------------------
        //  Variables
        //---------------------------------

        this.serviceUrl = API_Socket;
        this.socket = new WebSocket(this.serviceUrl);
        this.queue = async.queue(async function (MySet, callback) {
            switch (MySet.element) {
                case 'video':
                    //show movie                    
                    if (MySet.uri) {
                        this.videosrc = MySet.link;
                    }
                    else {
                        this.videosrc = MySet.link + "#t=" + MySet.start;
                    }
                    this.videoclass = "video";
                    this.fade = true;                    
                    //var video = this.$refs.mymov;

                    //video.on("ready", function () {
                    //    this.on('loadedmetadata', function () {
                    //        video.currentTime(MySet.start);
                    //    });
                    //});  
                    this.muted = false;
                    await this.timeout(MySet.duration);
                    this.muted = true;

                    this.videosrc = "";
                    this.fade = false;
                    await this.timeout(1000);
                    this.videoclass = "hidden";
                    callback();
                    break;
                case 'framesrc':
                    //show movie
                    this.frameclass = "video";
                    this.framesrc = "https://www.youtube.com/embed/" + MySet.link + "?controls=0&autoplay=1" + "&start=" + MySet.start + "&end=" + (MySet.start + (MySet.duration / 1000).toString())
                    this.fade = true;
                    await this.timeout(MySet.duration);
                    this.framesrc = "";

                    this.fade = false;
                    await this.timeout(1000);
                    this.frameclass = "hidden";
                    callback();
                    break;
                case 'img':
                default:
                    //show gif
                    this.imgclass = "";                    
                    var isgiphy = (MySet.link.indexOf('giphy') > 0);
                    if (isgiphy) {
                        this.badgeclass = "";
                        this.badgeurl = "Poweredby_100px_Badge.gif";
                    }
                    this.imageurl = MySet.link;                    
                    this.fade = true;
                    await this.timeout(MySet.duration);
                    this.imageurl = "";
                    if (isgiphy) {
                        this.badgeurl = "";
                        this.badgeclass = "hidden";
                    }

                    this.fade = false;
                    await this.timeout(1000);
                    this.imgclass = "hidden";
                    
                    callback();
            }
        }.bind(this), 1);
        //---------------------------------
        //  Open Event
        //---------------------------------
        this.socket.onopen = function () {
            // Format your Authentication Information
            var auth = {
                author: "Castorr91",
                website: "https://www.twitch.tv/castorr91",
                api_key: API_Key,
                events: [
                    "EVENT_GIF", "EVENT_MOV", "EVENT_YUT"
                ]
            };
            //  Send your Data to the server
            this.socket.send(JSON.stringify(auth));
        }.bind(this);
        //---------------------------------
        //  Error Event
        //---------------------------------
        this.socket.onerror = function (error) {
            //  Something went terribly wrong... Respond?!
            console.log('Error: ' + error);
        }.bind(this);
        //---------------------------------
        //  Message Event
        //---------------------------------
        this.socket.onmessage = function (message) {
            var jsonObject = JSON.parse(message.data);

            if (jsonObject.event !== "EVENT_CONNECTED") {
                //parse jason data
                var MySet = JSON.parse(jsonObject.data);
                MySet.element = '';                
            }
            switch (jsonObject.event) {
                case "EVENT_GIF":
                    MySet.element = 'img';
                    this.queue.push(MySet);
                    break;
                case "EVENT_MOV":
                    MySet.element = 'video';
                    this.queue.push(MySet);
                    break;
                case "EVENT_YUT":
                    MySet.element = 'framesrc';
                    this.queue.push(MySet);
                    break;
                default:
            }

        }.bind(this);
        //---------------------------------
        //  Message Event
        //---------------------------------
        this.socket.onclose = function () {
            //  Connection has been closed by you or the server
            console.log('Connection Closed!');
        }.bind(this);
    }
});
