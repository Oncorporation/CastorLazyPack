Vue.component('client-component', {
    data: function () {
        return {
            serviceUrl: '',
            socket: Object,
            imageurl: '',
            queue: Object,
            fade: false
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
            //show gif
            this.imageurl = MySet.link;
            this.fade = true;
            await this.timeout(MySet.duration);
            this.imageurl = "";
            this.fade = false;

            await this.timeout(1000);
            callback();
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

            if (jsonObject.event === "EVENT_GIF") {
                //parse jason data
                var MySet = JSON.parse(jsonObject.data);

                this.queue.push(MySet);

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
