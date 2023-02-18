FROM maven:3.9.0-eclipse-temurin-17-alpine as stage
WORKDIR /app
COPY pom.xml .
COPY src src
RUN mvn clean package -DskipTests

FROM openjdk:17
COPY --from=stage /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]