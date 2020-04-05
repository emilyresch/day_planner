# resch_homework_5

I apologize for not having README's in the last couple of assignments. I was down to the wire on getting those in on time so I didn't have the chance to write much. 
This assingment was interesting. I was a little intimidated by the concept but started to feel a bit more confident after some time because I really broke down my approach (into what I thought were bite sized pieces). I had a good amount of psuedo code and a plan of the types of if/elses, for-loops, etc. 

Unfortunately, I hit a gigantic roadblock that make it very difficult to implement moment (and change the colors of the timeblocks). I spent a good amount of time (probably too much time) researching how to go about my issue on different websites. My issue was that I had build the timeblocks in my actual html, thinking this would be simpler. Turned out, it was going to be very difficult to use for loops to determine the values of the hour columns (hourColumn) and use that to compare to the current hour (thisHour).

After reaching out to a couple of classmates, I decided the best route was to fully start over and use JS/JQuery to build my webpage. In doing this I was able to incorporate for loops to make the timeblocks and determine their colors simultaneously. You can imagine my sigh of relief. 

Now it was on to the localStorage. In my previous attempts I was able to console log the things that the user typed into the textarea, but getting the events to stay properly upon refreshing the page was very difficult as I'm still trying to fully absorb the concept of $(this) and event targeting. 
