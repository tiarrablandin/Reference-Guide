# Git Commands

### Installing & Updating Git

* ```git --version``` - check git version
* ```brew install git``` - update git version

### Setting username & email

* ```git config --global user.name "John Doe"``` - configure git username
* ```git config user.name``` - check username
* ```git config --global user.email example@email.com``` - configure git email
* ```git config user.email``` - check email

###

* ```git log``` - shows commit history
* ```git status``` - shows status of current repo
* ```git clone <{gitUrl}>``` - clone repository into home directory
* ```git reset```
* ```git branch```
* ```git checkout```
* ```git merge```

### Creating a New Repo

* ```echo "# {repoName}" >> README.md```
* ```git init``` - instantiates a new repo in current directory
* ```git add README.md``` - adds a readme file to repo
* ```git commit -m "first commit"```
* ```git branch -M main```
* ```git remote add origin https://github.com/tiarrablandin/{repoName}.git```
* ```git push -u origin main```

### Committing and Pushing to Git & GitHub

* ```git add .``` - staging all changes
  * ```git add <{fileName} {fileName}>``` - staging specific changes
* ```git commit -m "{commit message}"``` - commits staged content to git
* ```git pull``` - pulls any changes from github 
* ```git push``` - pushes everything committed to github

### Branching

* ```git init``` -
* ```git remote add origin <url>``` -
* ```git log``` -
* ```git branch -M main``` -
* ```git reset HEAD <{fileName}.java>``` - 

## Notes 

* If you remove the .git file from a directory it deletes the entire git history and repo.
* .gitignore is for files that you don't want being pushed to github.