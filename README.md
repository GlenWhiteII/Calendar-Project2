# DJ Voting Project
I've always wanted this app to exist. It's an app where DJ's can post their setlist they plan on playing that night and the individul users can collaborate and vote on songs from that setlist they want to hear sooner. I also wanted to make the artists set a little easier so instead of just "feeling the room", they can actually look at real-time statistics and see what people want to hear. 

# User Story
Artists can: 
* Sign up and create their profile
* Log in and see the votes casted on each songs
* Post their setlist for the general public to see
* See what songs have receievd the most votes and get feedback from the room.
* Update their profile photo and description so people can see what kind of music they play.

Listeners can:
* Sign up and acquire a number of votes
* Log in and cast votes on songs they want to hear

# Wireframe

![DJ App Wireframe](https://github.com/GlenWhiteII/DJ-Voting-Project/assets/136190078/1f5ab3af-6db7-4aef-8907-3f362ab13746)

# ERD

## User (Listener)
id, username, email, password, name

## User (Artist)
id, username, email, password, name

## Setlist
setlist_id, dj_id, songs - (title, artist, album, votes)

