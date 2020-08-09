# learning-crux-course-downloader

This Project basically help to download full course from free online Learning-crux website who provide courses only to view online.

## Steps:
1. Open const.js file under Src folder
1. replace the value of URL from the course link you wish to download. Like this - `URL: "https://www.learningcrux.com/course/advanced-javascript-concepts"`
1. replace the TIME_DELAY with the time duration (in ms) you want between each download. By default it's 10sec, 
which simply means that start downloading one video and then wait for 10sec then also start downloading then next video.
Like this - `TIME_DELAY: 10000`
1. Once every thing is configured simply run `np start`

The videos will be downloaded in the downloads folder.
