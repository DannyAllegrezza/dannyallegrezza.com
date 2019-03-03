---
templateKey: blog-post
title: Configuring .NET Core 2.1 projects on AppVeyor
date: 2018-07-06T14:32:00.000Z
description: >-
  In my spare time I've been working on an open-source platform for automotive
  enthusiasts called GT86Registry. The goal of this project is to create a
  platform that promotes the archival of vehicles which are rare or no longer
  produced. The project is at the point to where I really needed to consider
  some type of CI/CD pipeline.


  Enter AppVeyor!
tags:
  - code
---
![AppVeyor.com homepage](/img/appveyorhomepage.jpg "AppVeyor is awesome!")

I wanted to share a template you can use to build .NET Core 2.1 projects. You can locate this on the GT86Registry [repository](https://github.com/DannyAllegrezza/GT86Registry/blob/master/appveyor.yml). 

> NOTE: I modified a template provided by [Jamie Taylor](https://dotnetcore.gaprogman.com/2017/06/08/continuous-integration-and-appveyor/). Please check out his article for a much more complete guide to AppVeyor and .NET Core!

This template will get you started and is meant to be modified. By using an `appveyor.yml` file, you'll be overriding the AppVeyor website configuration. The `.yml` file gives you more flexibility for a custom build pipeline.

```
version: '1.0.{build}'
image: Visual Studio 2017
branches:
  only:
  - master
init:
  # Good practice, because Windows line endings are different from Unix/Linux ones
  - cmd: git config --global core.autocrlf true
install:
  # Install repo specific stuff here
before_build:
  # Display .NET Core version
  - cmd: dotnet --version
  # Display minimal restore text
  - cmd: dotnet restore --verbosity m
build_script:
  # output will be in /.src/{YOUR_PROJECT_DIR}/bin/Debug/netcoreapp2.1/publish/
  - cmd: dotnet publish ./src/{YOUR_PROJECT_DIR}/{YOUR_PROJECT}.csproj
after_build:
  # For once the build has completed
artifacts:
 - path: '\src\{YOUR_PROJECT_DIR}\bin\Debug\netcoreapp2.1\publish\'
   name: YOUR_PROJECT_NAME
   type: WebDeployPackage
clone_depth: 1
test_script:
  # restore packages for our unit tests
  - cmd: dotnet restore ./tests/UnitTests/UnitTests.csproj --verbosity m
  # run the unit tests (requires changing into the test directory)
  - cmd: cd tests/UnitTests
  - cmd: dotnet test
on_finish :
  # any cleanup in here
deploy: off
```

Are you using AppVeyor or a similar service? 

Leave a comment below with your thoughts!
