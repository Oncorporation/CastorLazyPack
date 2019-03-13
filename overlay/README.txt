######################################
#  Castorr's Lazy Pack Overlay Info  #
######################################

Description: Some additional information about Overlays, how they work and how you can use them
Made By: Charles 'Surn' Fettinger
Website: https://www.twitch.tv/Surn

Overview
#########

We recently moved all the overlays in to a new folder. 

This means you will need to change your Browser Sources in your OBS or Streamlabs OBS software.

Add '/overlay' to your file path as seen in these examples: 
before: https://ibb.co/JCmcQFn
after: https://ibb.co/Zh6NHYd

There are three Overlays and you may copy them and make as many as you like. So they can be identified by CLP edit the HTML Title tag.

Example:
    <!-- first word of title is the browser source target name (CLP = blank)-->
    <title>CLP Overlay</title>

The first word of the title tag will be targeted as the LOWER CASE Browser Source Name by multiple commands.

The three basic Overlays are:
1. Index.html - the fully functionally queued, asyncronous Overlay. Based on html/css/javascript.
2. Index_vue.html - same features as Index.html, but based on Vue.js as a javascript framework.
3. Index_no_queue.html - Non-queued basic Overlay. Based on html/css/javascript.

Usage Differences
#################

Index.html is probably the Overlay you need. Many people can target the Browser Source because it is queued. 
When one person's text/clip/movie ends, the next will play. If you need multiple copies, feel free, just change the title tag on each copy.
The included version title is CLP Overlay and is targeted as 'clp' or blank.

Index_vue.html works the same as Index.html but is for people who prefer javascript frameworks. If you dont care, just use it as a second overlay. 
The included version title is Left Overlay and is targeted as 'left'.

Index_no_queue.html is unique and has no queue. Which means you can send a command with a very long <DURATION> then
replace the window with the next command to that target. You can make simple updatable graphics or use $text to make kill/death counters, and more...
This overlay can replace many uses where people currently use text files to keep persistent data. I test streamed a kill death counter 
(https://clips.twitch.tv/ProudStrangePhonePrimeMe) or in CLP Bot $movtw(ProudStrangePhonePrimeMe,1,30)
The included version title is NoQ Overlay and is targeted as 'noq'.

Targeting an Overlay
####################
Update or look up the title tag in the html file. 
The first word of the title tag is the overlay target name, as Lower Case. You can write it anyway you like, but it will be interpretted as lower case.
Stick to standard 0-9a-zA-Z characters, if you ask me why a special character won't work... I will hunt you down and frag you in game... and make it a twitch clip, that plays in a noq overlay forever!

Command Examples
################
    $giphy(streamer wins!,10.5,top left bottom) plays in a random selection of default (clp), top, left or bottom (4 choices) browser source
    $giphy(streamer wins!,10.5,left clp) plays in a random selection of 'left' or default browser source (clp)
	$giphy(streamer wins!,10.5,left) always plays in 'left' browser source
	$giphy(streamer wins!,10.5,) always plays in the default browser source (clp)
	$giphy(streamer wins!,10.5) always plays in the default browser source (clp)


Important Version Notes
######################
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

