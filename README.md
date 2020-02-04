note: deploy to github page
add 'homepage':username.github.io/project-name
yarn add gh-pages
config: "script":{
   "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
the most important thing ( check your repo setting => source => gh-branch) :)))))
End: yarn run deploy 
Happy coding !!!!!
