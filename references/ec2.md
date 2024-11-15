# AWS ec2

## Deploy DB

* Push DB to ec2
  * ```scp -rp -i ~/.ssh/aws.pem DB/{dbName}.sql ec2-user@{ipAddress}:~/```
* Login to server:
  * ```ec2```
* Run script:
  * ```mysql -u root -p < {fileName}.sql```
  * MySQL root password

## Deploy Angular

* Converts angular into java and packages it into dist folder:
  * ```ng build --base-href={environment.prod.ts baseUrl}```
* Copy front end into backend:
  * ```cp -rp dist/ng-{angular-project-name}/* ~/{filePath}/{bootProjectName}/src/main/resources/static```

## Deploy Boot

* Create WAR file:
  * Run the war file under ```gradle/tasks/build```
* Copy War file to tomcat:
  * ```scp -rp -i ~/.ssh/aws.pem {fileName}.war ec2-user@{ipAddress}:/var/lib/tomcat/webapps/```

## Deploy Angular front-end only
* In ng{fileName}
  * ```ng build --base-href=/dist/ng-{fileName}/```
  * ```scp -rp -i ~/.ssh/aws.pem dist/ng-{fileName}/index.html ec2-user@{ipAddress}:/var/www/html/```
  * ```scp -rp -i ~/.ssh/aws.pem dist ec2-user@{ipAddress}:/var/www/html/```

### http://{ipAddress}:8080/{warFileName}

## Notes
