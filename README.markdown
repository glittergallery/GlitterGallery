![Homestrip 1/2](http://thirstyforcola.files.wordpress.com/2013/05/front.jpg)
![Homestrip - 2/2](http://thirstyforcola.files.wordpress.com/2013/05/back.jpg)

Image courtesy Anirudh Menon. 

## GlitterGallery

[![Join the chat at https://gitter.im/glittergallery/GlitterGallery](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/glittergallery/GlitterGallery?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

GlitterGallery _will be_ an amazing way to collaborate on design! 

The goals are to allow designers to easily share their work, gather and parse feedback in a useful way, and version their work just as developers are able to. 

GlitterGallery will be somewhat biased to support SVGs from Inkscape, and to work with the magicmockup rapid prototyping program. That doesn't mean it won't work with other filetypes, though!

Here's a [demo](http://glittergallery-ropaku.rhcloud.com/).

### Run GlitterGallery

GlitterGallery runs on OpenShift, so it's really easy to run your own version.

1. [Sign up for OpenShift](http://openshift.redhat.com) if you don't already have an account
1. Create a new ruby-1.9 application and add MySQL
1. Clone the application repo: `git clone <OpenShift git URL>`
1. Change into the cloned directory
1. Add the GlitterGallery repo: `git remote add glitter -m master http://github.com/glittergallery/GlitterGallery.git`
1. Pull: `git pull -s recursive -X theirs glitter master`
1. Push: `git push`

For more details such as setting up email/social authentication take a look at the [wiki](https://github.com/glittergallery/GlitterGallery/wiki/Usage-Instructions)

### Get involved

Email us and let us know you're interested, and what you can do, and we'll figure out something you can help with. Or just fork it and hack on it! Up to you! More contribution points on the [wiki](http://github.com/glittergallery/GlitterGallery/wiki)!

[![Stories in Ready](https://badge.waffle.io/glittergallery/glittergallery.png?label=ready)](https://waffle.io/glittergallery/glittergallery)

### Authors

Sarup Banskota (sarup@glittergallery.net)

Rohit Paul Kuruvilla (rohitpaulk@live.com)

Maírín Duffy (duffy@fedoraproject.org)

Emily Dirsh (emily@glittergallery.net)



