## Feed Reader Test Suites with Jasmine

#### Here is a link to the live version
http://karoldavid.github.io/feedreader

## Project Overview

"test-driven development" is an important part of the development process. It ensures that features, to be developed in the future, do not break existing ones. In this project, a number of tests are run against a pre-existing web-based application that reads RSS feeds. Some of the tests are required to run asynchronously.
The test suites are written within Jasmine, a JavaScript Testing Framework. They test the underlying business logic of the application, the event handling and the DOM manipulation.

## The Test Suites

The spec file 'jasmine/spec/feedreader.js' contains five test suites:

Three obligatory test suites
* RSS Feeds
 1) Is the allFeeds variable defined and is it not empty?
 2) Do all feeds have an URL and is the URL not empty?
 3) Do all feeds have a name defined and is that name not empty?

* The Menu
 1) Is the menu element hidden by default?
 2) Does the menu change visibility when the menu icon is clicked?

* Initial Entries
 1) Is there at least a single entry element onload within the feed container?

* New Feed Selection
 1) Does the content change when a new feed is selected?

One additional test suite
* Selected Feed Entry
 1) Do entry links open in a new browser tab?
 2) Do selected entry links change their color?

## HOW TO
Clone or download the source code and click on index.html to run the Feed Reader Tests:

* git clone https://github.com/karoldavid/neighborhood-map.git
* wget https://github.com/karoldavid/neighborhood-map/archive/master.zip

Alternatively, you can click on the link to the live version at the top of the readme file.

The tests, some are asynchronous, will run instantly.

## Resources
1. Jasmine Behavior-Driven JavaScript Documentation
http://jasmine.github.io/2.3/introduction.html

2. Using Jasmine 2.0's New done() Function to Test Asynchronous Processes
http://www.htmlgoodies.com/beyond/javascript/stips/using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html

3. Jasmine JS testing Cheat Sheet
http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/

4. The repository was forked from
https://github.com/udacity/frontend-nanodegree-feedreader

5. This project is part of the Udacity Front-End Webdeveloper Nanodegree
https://www.udacity.com/course/viewer#!/c-nd001/l-3442558598/m-3434738723

## Questions?
Write an email to k.zysk@zoho.com
