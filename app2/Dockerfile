FROM maven:3.8.4-openjdk-11-slim AS maven
COPY pom.xml /tmp/
COPY src /tmp/src
WORKDIR /tmp/
RUN mvn clean package -DskipTests
FROM tomcat:9.0-jdk11-openjdk-slim
WORKDIR $CATALINA_HOME/webapps/
COPY --from=maven /tmp/target/*.war .
RUN rm -rf ROOT && mv *.war ROOT.war