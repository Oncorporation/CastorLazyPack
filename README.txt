###########################
#  Castorr's Lazy Pack    #
###########################

Description: Extra $parameters and !sr info when missing id/url
Made By: Castorr91
Website: https://www.twitch.tv/castorr91
Contribution by: Surn @ https://www.twitch.tv/Surn

#############################
#         Versions          #
#############################
1.5.3 By Charles Fettinger 2019-03-12
    - Reorganize folder structure to place JS/HTML/CSS in subfolder 'overlay' and add README.txt to folder
    - updated client_no_queue.js to optimize and be closer in line with newer .js file design.

1.5.2 By Charles Fettinger 2019-03-10
- Add and update Index_no_queue.html and client_no_queue.js
    These files allow the usecase when browser source is active until updated by another command.
    They were pulled from a pre-queue version and updated. Set a very long <DURATION>, <TARGET BROWSER SOURCE> is available.

1.5.1 By Charles Fettinger 2019-03-08
    - $sync regular expression issue fixed
    - fix regular expressions to allow <TARGET BROWSER SOURCE> to be optional

1.5.0.1 By Charles Fettinger 2019-03-06
    - Add GetRandomItemFromList function
    - All <TARGET BROWSER SOURCE> instances now accepts a space delimited list of browser sources, which 
        will play in a random browser source which includes the default CLP (blank). 
        If a single value is entered, it will be returned.
        Use 'clp' to include the default browser source
        - example: $giphy(streamer wins!,10.5,top left bottom) plays in a random selection of default, top, left or bottom (4 choices) browser source
        - example: $giphy(streamer wins!,10.5,left clp) plays in a random selection of left or default browser source
        - example: $giphy(streamer wins!,10.5,left) always plays in left browser source
        - example: $giphy(streamer wins!,10.5,) always plays in the default browser source

1.5 By Charles Fettinger 2019-03-05
	- Expand multiple commands to include infinite browser source targets
		- $movtw(<Twitch Clip Slug>,<START TIME>,<DURATION>,<TARGET BROWSER SOURCE>)
        - $movie(<LINK>,<START TIME>,<DURATION>,<TARGET BROWSER SOURCE>)
        - $sync(<MESSAGE>,<COUNTDOWN>,<YOUTUBE ID>,<TARGET BROWSER SOURCE>)
        - $text(<MESSAGE>,<STYLE>,<DURATION>,<TARGET BROWSER SOURCE>) 
        - $gif(<LINK>,<DURATION>,<TARGET BROWSER SOURCE>)	
        - $giphy(<SEARCH TERM>,<DURATION>,<TARGET BROWSER SOURCE>)
        - $movyt(<YOUTUBE ID>,<START TIME>,<DURATION>,<TARGET BROWSER SOURCE>)
    - Change Title index.html/index_vue.html: <title>CLP Overlay</title> This title is now used to identify Overlay browser.
        - The first word of page title <TARGET BROWSER SOURCE> is used, except "CLP" which is the default and made blank for backward compatibility.
        - This value is always converted to lowercase
	- Convert <START TIME> to allow partial seconds i.e. 10.5 seconds

1.4.9.1 by Charles Fettinger 2019-02-28
    - Add shine,spin3d $text effect
    - Convert <DURATION> to allow partial seconds i.e. 10.5 seconds

1.4.9 by Charles Fettinger 2019-01-17
    - Maintenance version combining view branch with main branch.
    
1.4.8 by Charles Fettinger 2019-01-15
    - Added $text <MESSAGE>,<STYLE>,<DURATION>
	- use + for spaces in message
    - Modified $avatar to remove username
    - Added text.css to hold standard styles for text

1.4.7.1 by Charles Fettinger 2019-01-05
	- bug fix to vuejs branch
	
1.4.7 by Charles Fettinger 2019-01-02
    - Tweaks to text responses to $movie, $gif, etc - disabled

1.4.6 by Charles Fettinger 2019-01-01
    - Update to consolidate browser sources into one queue

1.4.5 by Charles Fettinger 2019-01-01
    - Add queue in browser source for images, videos and framesource ($gif, $movie, $movtw, $movyt)

1.4.4 by Charles Fettinger 2019-01-01
	- Minor updates to Index.html and client.js to provide css transitions to browser source content.
		This is in review of a more significant upgrade adding a queue to the browser source content
		Also of note, when using $movie consider browser compatible video sources like .webm as opposed to .AVI

1.4.3 by Charles Fettinger 2018-12-09
    - Added code to maximize local file compatibility with HTML5 Video sources and graphics formats
        $gif now also uses this technique for local files, to expand to svg and many other formats
    - Added videos subfolder 
        try $movie(nuke.webm,0,5) 
        this folder can also be used for graphics
    -Added $readlinz - which outputs the lines of a file in the File folder: similar to $readlines

1.4.2 by Charles Fettinger 2018-12-04
    - Added Twitch Clip support 
        $movtw(<Twitch Clip Slug>,<START TIME>,<DURATION>) 
        - look up the Slug at the end of any Twitch Clip (https://clips.twitch.tv/ThisIsTheSlug)
        - use 5 for 5 seconds
    - Updated GUI for Twitch API and Twitch Base Url
    - Updated Readme documentation
    
1.4.11 by Charles Fettinger 2018-12-03
    - Fixed $movie to use data uri - you can now use local files!
    - Fixed a muted bug in !movie
    
1.4 by Charles Fettinger 2018-11-17
    - Added $giphy(<SEARCH TERM>,<DURATION>) 
        - looks up random giphy via API
        - use 5 for 5 seconds
    - Added Button to look up giphy API key
    - Added text for giphy fail over gif
    - Added base giphy url variable
    - Added $movie(<LINK>,<START TIME>,<DURATION>) 
        - use 5 for 5 seconds
    - Added $movyt(<YOUTUBE ID>,<START TIME>,<DURATION>)
        - look up the encoded string id of a you tube to display
        - use 5 for 5 seconds
    - Added $sync(<MESSAGE>,<COUNTDOWN>,<YOUTUBE VIDEO ID>,<START TIME>) command
    - Added variables and UI items to support

    - Updated client.js, index.html to support new features

1.3
	- Updated due to v2 having compatibility issues for some users
	- Added $label(textfile)
	- Removed $sessionfollows
	- Removed $lastfollow

1.1.2
- Added option to select service in settings
- Fixed copy paste error in UI_Config
- Removed some comments
- Cleared unnecessary return statements
- Made API's into variables
- $followage, $followdate, $avatar no longer needs () with username
- Fixed @time@ and @time24@
- Added $chours
- Added $default

1.1.1
- Hotfix to solve issues with $torand, (pointtouser), (touser), (age), $age, $(touser), $setctt
1.1.0
- Fixed use of more than one parameter at once
- Added usercooldown to !sr and !songrequest
- Parsing is now using less built in parameters
- Added options to disable parameters from other bots
- Removed (1) to (9) because they broke built in parameters
- Improved compability for gif links


1.0.14
- Fixed api's using $mychannel
- Removed $touser as it's built in now

1.0.13
- Updated to work with Youtube
- $ctt and $setctt now support url shortener

1.0.12
- Added buttons for twitch % streamlabs links
- Fixed twitter usernames
- Tweaked UI typos

1.0.1.1
- $touser now ignores @
- Added $ctarget

1.0.1.0
- Changed filesystem to work with Streamlabs Chatbot
    - Changed YouTube username to ID so it works for everyone
- 

1.0.0.9
    - Fixed $setctt and $age
    - Added example commands to readme.txt

1.0.0.8
    - Updated to work with Streamlabs Chatbot

1.0.0.7
    - Fixed $(querystring)

1.0.0.6
    - Added $sound parameter
    - Added $gif parameter
    - Added index.html for overlay
    - Added volume setting in UI for sound levels

1.0.0.5
    - Added $torand parameter

1.0.0.4
    - Bugfix for $ctime and $cdate

1.0.0.3
    - Added $sessionfollows
    - Added $lastfollow
    - Added WizeBot parameters

1.0.0.2
    - Added $ctt parameter
    - Added $setctt parameter

1.0.0.1
    - Added StreamElements parameters
    - Added Deepbot parameters
    - Added Phantombot parameters
    - Fixed $urban parameter
    - Added $age parameter

1.0.0.0 
    - Initial release

#############################
#      New  Parameters      #
#############################

Completely new parameters, most of them are doable through api calls.

$weather(LOCATION)      - Shows the weather for the location
$followage		    - Shows how long the user have been following your channel, if no target is picked it check users
$followdate	   	- shows what date the user followed your channel, if no target is picked it check users
$avatar         - Returns a link to the users twitch avatar in 300x300 pixels
$touser         - Works as $target if one is given, and $user if not
$cviewers        - Shows the current amount of viewers for your channel
$views          - Shows the total amount of views your channel has
$subemotes      - Shows all the sub emotes for your channel
$bttvemotes     - Shows all the BTTV emotes you got in the channel
$ffzemotes      - Shows all the FFZ emotes you got in the channel
$latestyt       - Links your latest YouTube video
$latesttweet    - Your latest tweet - uses the settings set in the UI
$age            - Shows the time of creation for the twitch account specified, if no target is picked it check users
$ctt            - Posts the click to tweet link based on the set link.
$setctt         - Sets the link used for $ctt
$sessionfollows - Show amount of follows for current session
$lastfollow     - Returns name of last follower
$torand         - Returns target and random user if no target is present
$sound(FILE.FORMAT)     - Plays the sound, file must be name.fileformat and be placed in the sounds folder. Example: $sound(Test.mp3)
$text(<MESSAGE>,<STYLE>,<DURATION>,<TARGET BROWSER SOURCE>) - displays <MESSAGE> (use + for spaces) in index.html for <DURATION> seconds with <STYLE> effect applied (fire,glitch,blue,matrix,normal,sunny,sparks,spin,spin3d,shine included)
$gif(<LINK>,<DURATION>,<TARGET BROWSER SOURCE>) - Shows the gif linked in the index.html for <DURATION> seconds, link can also be the full filepath including fileformat (c:/users/castorr/desktop/test.gif). the video folder does not need path info (fire.gif)
$giphy(<SEARCH TERM>,<DURATION>,<TARGET BROWSER SOURCE>) - find gifs or stickers from Giphy based on <SEARCH TERM> and plays in the index.html for <DURATION>
$movie(<LINK>,<START TIME>,<DURATION>,<TARGET BROWSER SOURCE>) -  Shows the movie linked in the index.html starting at <START TIME> for <DURATION> seconds, link can also be the full filepath including fileformat (c:/users/castorr/desktop/movie.mp4)
$movyt(<YOUTUBE ID>,<START TIME>,<DURATION>,<TARGET BROWSER SOURCE>) -  Shows a youtube video linked in the index.html starting at <START TIME> for <DURATION> seconds.
$movtw(<TWITCH SLUG>,<START TIME>,<DURATION>,<TARGET BROWSER SOURCE>) - Shows a Twitch Clip linked in the index.html starting at <START TIME> for <DURATION> seconds.
$default(MESSAGE)	- Shows the MESSAGE if no argument was put after the command, if there is an argument this parameter doesn't show at all

 ### Note:
    <TARGET BROWSER SOURCE> is an OPTIONAL, space delimited list of browser sources. Sources are chosen at random from the list and the default is "clp" or a blank space. 
        If a single value is entered as <TARGET BROWSER SOURCE>, it will be returned.
        Use 'clp' to include the default browser source or leave it blank or do not put in the comma that delimits the parameter.
        - example: $giphy(streamer wins!,10.5,top left bottom) plays in a randomly selected browser source consisting of default (clp), top, left or bottom (4 list items)
        - example: $giphy(streamer wins!,10.5,left clp) plays in a random selection of left or default (clp) browser source
        - example: $giphy(streamer wins!,10.5,left) always plays in left browser source
        - example: $giphy(streamer wins!,10.5,) always plays in the default (clp) browser source 
        - example: $giphy(streamer wins!,10.5) always plays in the default (clp) browser source 
        Internally, the default (clp) browser source is represented by a empty string or blank

#############################
#     Example Commands      #
#############################


$weather(LOCATION)      - https://gyazo.com/4fcac95d7d53e21f12626ac81012156a
$followage		- 
$followdate		- 
$avatar      		- 
$touser                 - https://gyazo.com/7d6e92ff518d6a50408fa4045837533e
$viewers                - https://gyazo.com/d5b2326f27942e96004e3c0de6a7c418
$views                  - https://gyazo.com/6bf432a42acb0370e6efe5aadec94b26
$subemotes              - https://gyazo.com/8547dc9c51e289592ba1879b6e76f891
$bttvemotes             - https://gyazo.com/165fa45bc2fc8fe87f349ed87a72e066
$ffzemotes              - https://gyazo.com/93aff00a158696f0785fd3ca938cf51b
$latestyt               - https://gyazo.com/dcc686bd7ff6f37b4d71b6fec33e2788
$latesttweet            - https://gyazo.com/bca763e4a4dd67038763eac065b1a796
$age                    - https://gyazo.com/5eb6f9ca70abf167d43d86716b442fed
$ctt                    - https://gyazo.com/4e56c5ced386b2068b83e82c804460ce
$setctt                 - https://gyazo.com/af080c409e7b0b2cb86aaa03efcf39cc
$sessionfollows         - https://gyazo.com/a2710f2b0acac6317e9c72c06b96f183
$lastfollow             - https://gyazo.com/01d308e6bf46500f340eb49f524816aa
$torand                 - https://gyazo.com/ba07e41cecddd874fc62f48b46d31f46
$sound(FILE.FORMAT)     - https://gyazo.com/cb2924f03ae3533f2b669153ff1fb5ee
$sync(<MESSAGE>,<COUNTDOWN>,<YOUTUBE ID>,<TARGET BROWSER SOURCE>)			
						- https://ibb.co/XtMWCyF or https://ibb.co/iqJi70 (no video)
$text(<MESSAGE>,<STYLE>,<DURATION>,<TARGET BROWSER SOURCE>) 
						- https://ibb.co/zPkqwd4
$gif(<LINK>,<DURATION>,<TARGET BROWSER SOURCE>)	
						- https://ibb.co/FnJjz5D
$giphy(<SEARCH TERM>,<DURATION>,<TARGET BROWSER SOURCE>)	
						- https://ibb.co/2gxDgpb	
$movyt(<YOUTUBE ID>,<START TIME>,<DURATION>,<TARGET BROWSER SOURCE>)	
						- https://ibb.co/1ZMSHWv
$movtw(<TWITCH SLUG>,<START TIME>,<DURATION>,<TARGET BROWSER SOURCE>)   
						- https://ibb.co/D8Q77Bk
$movie(<LINK>,<START TIME>,<DURATION>,<TARGET BROWSER SOURCE>)	
						- https://ibb.co/xgpfQmp

#############################
#   Modified  Parameters    #
#############################

Customizable version of parameters already existing in the bot.

$ctime          - Like $time but using the format set in the UI
$cdate          - Like $date but using the format set in the UI
$cranduser      - Like $randuser but allows for exclusions, added in the UI
$ctarget	- Works just like $target but ignores @ infront of usernames
$chours		- Return the amount of hours for user or target as a whole number without comma period or space

#############################
#    Nightbot Parameters    #
#############################

Parameters used in nightbot, doesn't offer anything new. 
These are added mainly to allow copy pasting commands.

$(user)
$(touser)
$(query)
$(querystring)
$(weather LOCATION)
$(urlfetch API)
$(time TIMEZONE)

#############################
# StreamElements Parameters #
#############################

Parameters used in StreamElements, doesn't offer anything new.
These are added mainly to allow copy pasting commands or from importing

${user}
${user.name}
${user.points}
${user.points_rank}
${user.time_online}
${user.time_online_rank}
${sender}
${source}
${title}
${status}
${game}
${pointsname}
${channel}
${channel.viewers}
${channel.views}
${channel.followers}
${channel.subs}
${random.chatter}
${uptime}

#############################
#    Deepbot Parameters     #
#############################

Parameters used in Deepbot, doesn't offer anything new.
These are added mainly to allow copy pasting commands or from importing

@user@
@viewers@
@time@
@time24@
@title@
@pointsname@
@target@
@pointstolevelup@
@randomuser@
@points@
@intpoints@
@hrstolevelup@
@hours@
@getcounter@
@game@
@followers@
@counter@
@followdate@
@subs@
@customapi@

#############################
#   Phantombot Parameters   #
#############################

Parameters used in Phantombot, doesn't offer anything new.
These are added mainly to allow copy pasting commands or from importing.

(sender)
(@sender)
(touser)
(pointtouser)
(currenttime)
(#)
(1) - (9)
(random)
(pointname)
(uptime)
(game)
(status)
(viewers)
(follows)
(count)
(senderrank)
(readfile FILEPATH/FILE.txt)
(readfilerand FILEPATH/FILE.txt)
(echo)
(titleinfo)
(gameinfo)
(channelname)
(subscribers)
(age)

#############################
#    Wizebot  Parameters    #
#############################

$(channel_name)
$(random_viewer)
$random(min,max)
$(current_game)
$(current_viewers)
$(todayFollow)
$(last_follow_name)
$(session_followers)
$(follow_count)
$(sub_count)
Installation
Prerequisites
First, you need the Streamlabs Chatbot, which you can download from the Streamlabs Website. Please follow the instruction provided there.
Second, you need Python 2.7.x (highest version preferable), for which there also is a link on the Streamlabs Website. (2.7.x is a restriction coming from the Chatbot. My scripts will usually also work with Python 3.x)
Install the script
Within the chatbot, you go to the "scripts" section and click on the cog in the upper right corner. There, you need to specify Python's Lib folder, usually "C:\Python27\Libs" unless you installed Python somewhere else.

Then you can simply click on "Import Script" and select the downloaded zip-file. This will install the script, right click the script and "Insert API Key" and you're done.

If you want to use the optional overlay, connect your OBS as a browser source to Index.html

In your OBS browser source, set the custom css to:

body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }
img,video {width:100%;}
Usage
Commandline Syntax
While every possible option is available via the script's UI, the most important options can also be entered via command line. Please note that the commandline will always take precedence over the settings defined via UI. The settings in the UI however will be stored in a file, and loaded upon next start of the bot automatically. The parameters on the commandline are valid only for the one, single call.

There is an entire help channel set up to help you

#########################################
#    All my scripts can be found in     #
#    the Streamlabs Chatbot discord     #
# https://discordapp.com/invite/J4QMG5m #
#########################################
