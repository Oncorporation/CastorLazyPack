if( window.WebSocket ){
    //---------------------------------
    //  Variables
    //---------------------------------
    var serviceUrl = "ws://127.0.0.1:3337/streamlabs";
    var socket = new WebSocket(API_Socket);
    //---------------------------------
    //  Events
    //---------------------------------
    var targetSuffix = "";

    socket.onopen = function()
    {
        // get current target information
        var targetRegEx = new RegExp(/(?<target>[^\"\'\,\s\|\'\`]+)/);
        var matches = targetRegEx.exec(document.title);
        targetSuffix = (matches.groups.target === "CLP") ? "" : "_" + matches.groups.target.toLowerCase();
        // Format your Authentication Information
        var auth = {
            author: "Surn",
            website: "https://www.twitch.tv/surn",
            api_key: API_Key,
            events: [
                "EVENT_GIF" + targetSuffix, "EVENT_MOV" + targetSuffix, "EVENT_YUT" + targetSuffix, "EVENT_TEXT" + targetSuffix
            ]
        }
        //Send your Data to the server
        socket.send(JSON.stringify(auth));
    };

    socket.onerror = function (error) {
        //Something went terribly wrong... Respond?!
        console.log("Error: " + error);
    };

    socket.onmessage = function (message) {
        var jsonObject = JSON.parse(message.data);

        if (jsonObject.event !== "EVENT_CONNECTED") {
            //parse jason data
            var MySet = JSON.parse(jsonObject.data);
            MySet.element = '';
            console.log("Parsed:" + jsonObject);

            if (jsonObject.event === "EVENT_GIF" + targetSuffix) {
                //show gif
                var image = document.getElementById("myimg");
                var badge = document.getElementById("mybadge");
                var isgiphy = (MySet.link.indexOf('giphy') > 0);

                image.setAttribute('src', MySet.link);
                //console.log("got image " + MySet.link);
                removeClass(image, 'hidden');
                if (isgiphy) {
                    removeClass(badge, 'hidden');
                }

                setTimeout(function () {
                    image.removeAttribute('src');
                    addClass(image, 'hidden');
                    if (isgiphy) {
                        addClass(badge, 'hidden');
                    }
                }, MySet.duration);
            }

            if (jsonObject.event === "EVENT_MOV" + targetSuffix) {

                //show movie
                var video = document.getElementById('mymov');
                var source = document.createElement('source');

                if (MySet.uri) {
                    source.setAttribute('src', MySet.link);
                }
                else {
                    source.setAttribute('src', MySet.link + "#t=" + MySet.start);
                }
                source.setAttribute('type', MySet.type);
                //console.log("got movie " + MySet.type + "#t=" + MySet.start);

                video.appendChild(source);
                video.addEventListener('loadedmetadata', function () {
                    this.currentTime = MySet.start;
                }, false);
                removeClass(video, 'hidden');
                video.muted = false;

                video.autoplay = true;
                //video.get(0).play();
                video.play();

                setTimeout(function () {
                    video.pause();
                    source.removeAttribute('src'); // empty source
                    video.load();
                    video.play();
                    video.removeChild(source);
                    addClass(video, 'hidden');
                    video.muted = true;
                }, MySet.duration);
            }

            if (jsonObject.event === "EVENT_YUT" + targetSuffix) {
                //show movie
                var youtube = document.getElementById('myyut');
                youtube.setAttribute('src', "https://www.youtube.com/embed/" + MySet.link + "?controls=0&autoplay=1" + "&start=" + MySet.start + "&end=" + (MySet.start + (MySet.duration / 1000).toString()));
                removeClass(youtube, 'hidden');

                setTimeout(function () {
                    youtube.removeAttribute('src'); // empty source
                    addClass(youtube, 'hidden');
                }, MySet.duration);

            }

            if (jsonObject.event === "EVENT_TEXT" + targetSuffix) {

                var text = document.getElementById('mytext');
                var styles = MySet.style.split(" ");
                text.innerHTML = MySet.message;
                text.className = 'hidden';
                removeClass(text, 'hidden');
                if (MySet.style) {
                    for (var style in styles) {
                        addClass(text, styles[style]);
                    }
                }
                else {
                    addClass(text, 'normal');
                }

                setTimeout(function () {
                    addClass(text, 'hidden');
                    if (MySet.style) {
                        for (var style in styles) {
                            removeClass(text, styles[style]);
                        }
                    }
                    else {
                        removeClass(text, 'normal');
                    }
                    text.innerHTML = "";
                }, MySet.duration);
            }
        }
    };

    socket.onclose = function () 
    {
        //  Connection has been closed by you or the server
        console.log("Connection Closed!");
    };  
}

function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
