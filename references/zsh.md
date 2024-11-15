# Shell Commands

* ```cd``` - change directory
* ```..``` - represents your parent directory, one level up
* ```.``` - represents your current working directory
* ```mkdir``` - create new folder
* ```touch``` - create new file
* ```rmdir``` - remove directory (must be empty)
* ```rm -r``` -remove non-empty directory
* ```rm``` - remove file
* ```mv``` ~ - move file/ rename file
* ```cp``` - copy file or directory
* ```pwd``` - print current location
* ```ls``` - list all files in current location
* ```ls -l``` - long listing w/ file size, permissions, mod time, etc.
* ```ls-a``` - lists hidden files as well
* ```cat``` - show me contents of file
* ```unzip``` - extracts a zip archive
* ```clear``` - clear terminal
* ```q``` - takes me out of read mode
* ```command c``` - cancel

### Compile & Run

* ```javac <{fileName}>.java``` - compile
* ```java <{fileName}>``` - run



## Access Commands

* Log into ec2 instance:
    * ```ssh -i ~/.ssh/aws.pem ec2-user@{ipAddress}```
* OCA Mock Testing:
  * ```java -jar ~/SD/Java/OCA/etsviewer.jar```