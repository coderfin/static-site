#Create A Static Site Using Harp and GitHub Pages

> This repository demonstrates an example of how to create a static site that can be hosted on GitHub using [GitHub Pages](http://pages.github.com).

##Dependencies
- Node 5.6.0+
- NPM 3.6.0+

##Steps
####harp.js
1. Create and clone a [GitHub](http://github.com) repo
1. `cd path/to/repo` and `npm init`
1. Create a directory with the same name as your repo within your repo
    - *example-repo -> example-repo*
1. Create *.jade* files within this new folder
    - *example-repo -> example-repo -> views -> layout.jade*
1. `npm install --save-dev harp`
1. `node_modules/.bin/harp server .`
    - Note the dot (`.`) at the end
1. Browse to *http://localhost:9000/example-repo*

####jspm
1. `npm install --save-dev jspm`
1. `jspm init`
    - baseURL = ./example-repo
    - jspm packages folder = ./example-repo/scripts/jspm_packages
    - config file path = ./example-repo/scripts/config.js
    - client baseURL = /example-repo

####code
1. Add desired styles, templates, scripts, and other files as desired
1. `node_modules/.bin/harp compile example-repo dist`
1. Add a *.gitignore* file
    - include *node_modules* and *example-repo/**/jspm_packages* but **do not include** any files in *dist*

####GitHub
1. Commit and push everything
1. `git subtree push origin gh-pages -P dist`
    - git-subtree
    	- `A subtree is just a subdirectory that can be committed to, branched, and merged along with your project in any way you want.`
    - -P or --prefix
    	- `Specify the path in the repository to the subtree you want to manipulate.`

##Helpful Links
- https://staticsitegenerators.net/
- http://harpjs.com/
- http://jspm.io/
- http://jspm.io/
- http://lesscss.org/
- [git-subtree](https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt)
