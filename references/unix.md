# Unix Commands

* ```cd``` - change directory
  * ```~``` - takes me to home directory
  * ```..``` - represents your parent directory, one level up
  * ```.``` - represents your current working directory
* ```pwd``` - print working directory
* ```ls``` - list all files in current location
* ```ls -l``` - long listing w/ file size, permissions, mod time, etc.
* ```ls-a``` - lists hidden files as well
* ```cat``` - show me contents of file
* ```open .``` - opens current directory in finder
  * ```start .``` - windows command
* ```mkdir``` - create new folder
* ```touch``` - create new file
* ```rmdir``` - remove directory (must be empty)
* ```rm -r``` or ```rm -rf``` -remove non-empty directory
* ```rm``` - remove file
* ```mv``` ~ - move file/ rename file
* ```cp``` - copy file or directory
* ```unzip``` - extracts a zip archive
* ```cmd + k``` or ```clear``` - clear terminal
* ```q``` - takes me out of read mode
* ```command c``` - cancel

### Compile & Run

* ```javac <{fileName}>.java``` - compile
* ```java <{fileName}>``` - run

## Homebrew

* ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"``` - install homebrew
* ```brew update``` - update homebrew

## Access Commands

* Log into ec2 instance:
  * ```ssh -i ~/.ssh/aws.pem ec2-user@{ipAddress}```
* OCA Mock Testing:
  * ```java -jar ~/SD/Java/OCA/etsviewer.jar```