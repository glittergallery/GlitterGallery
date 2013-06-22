## Glitter Gallery

Glitter Gallery _will be_ an amazing way to collaborate on design! 

The goals are to allow designers to easily share their work, gather and parse feedback in a useful way, and version their work just as developers are able to. 

Glitter Gallery will be somewhat biased to support SVGs from Inkscape, and to work with the magicmockup rapid prototyping program. That doesn't mean it won't work with other filetypes, though!

### Run Glitter Gallery

Glitter Gallery runs on OpenShift, so it's really easy to run your own version.

1. [Sign up for OpenShift](http://openshift.redhat.com) if you don't already have an account
1. Create a new ruby-1.8 application and add MySQL
1. Clone the application repo: `git clone <OpenShift git URL>`
1. Change into the cloned directory
1. Add the Glitter Gallery repo: `git remote add glitter -m master git://github.com/EmilyDirsh/GlitterGallery.git`
1. Pull: `git pull -s recursive -X theirs glitter master`
1. Push: `git push`

### Get involved

Email us and let us know you're interested, and what you can do, and we'll figure out something you can help with. Or just fork it and hack on it! Up to you!

### Authors

Maírín Duffy (duffy@fedoraproject.org)

Emily Dirsh (emily@redhat.com)
