/**
 * @file feedreader.js Feed Reader Tester
 * @version 0.1 2015
 * @author Karol Zyskowski
 * @email k.zysk@zoho.com
 * Please read the README.md file for more information about the
 * Feed Reader Application.
 * Here is a link to the live version:
 * {@link http://karoldavid.github.io/feedreader/ GitHub}
 * Here is a link to the Github repository:
 * {@link http://github.com/karoldavid/feedreader.git/ GitHub}
 * This project is a part of the Udacity FEND Nanodegree
 * Here is a link to the Udacity Project 6 Page:
 * {@link https://www.udacity.com/course/viewer#!/c-nd001/l-3442558598/m-3434738723}
 */
/**
 * @description
 * This is the spec file that Jasmine will read and contains all of the
 * tests that will be run against the Feed Reader Application.
 */
/**
 * @function
 * All of the tests are placed within the $() function, since some of these tests
 * may require DOM elements.
 */
$(function() {

    /**
     * @suite "RSS Feeds"
     * This suite is all about the RSS feeds definitions,
     * the allFeeds variable in the application.
     */
    describe('RSS Feeds', function() {
        /**
         * @test "are defined"
         * Tests that the allFeeds variable has been defined and that it is not
         * empty.
         * @expects allFeeds is defined
         * @expects allFeeds lenght is not 0
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /**
         * @test "have url"
         * Loops through each feed in the allFeeds object and ensures it
         * has a URL defined and that the URL is not empty.
         * @expects url is defined
         * @expects url length is not 0
         */
        it('have url', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        /**
         * @test "have name"
         * Loops through each feed in the allFeeds object and ensures
         * it has a name defined and that the name is not empty.
         * @expects feed name is definded
         * @expects fedd name length is not 0
         */
        it('have name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /**
     * @suite "The Menu"
     */
    describe('The Menu', function() {
        /**
         * @test "is hidden"
         * Ensures the menu element is hidden by default.
         * @expects the menu is hidden
         */
        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
        /**
         * @test "toggles on click"
         * Ensures the menu changes visibility when the menu icon is clicked.
         * @expects the menu displayes when clicked
         * @expects the menu hides when clicked again.
         */
        it('toggles on click', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /**
     * @suite "Initial Entries"
     */
    describe('Initial Entries', function() {
        /**
         * @function
         * Empties the feed class
         * Loads feed 0 asynchronously
         */
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, done);
        });
        /**
         * @test "have at least 1 entry"
         * Ensures when the loadFeed function is called and
         * completes its work, there is at least a single
         * .entry element within the .feed container.
         * @expects feed entry length is not 0
         */
        it('have at least 1 entry', function(done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    /**
     * @suite New Feed Selection
     */
    describe('New Feed Selection', function() {
        var entry_before, // @typpe string
            entry_after; // @type string
        /**
         * @function
         * Empties the feed class
         * Loads feed 0 asynchronously
         * Gets text content from firsts entry of feed 0
         * Loads feed 1 asynchronously
         * Gets text content from firsts entry of feed 1
         */
        beforeEach(function(done) {

            $('.feed').empty();

            loadFeed(0, function() {
                entry_before = $('.feed').find('h2')[0].textContent;
                /**
                 * The test output of the test is dependent on the timing of
                 * other uncontrollable events
                 * For more see: Race Condition https://en.wikipedia.org/wiki/Race_condition
                 */
                loadFeed(1, function() {
                    entry_after = $('.feed').find('h2')[0].textContent;
                    done();
                });
            });
        });
        /**
         * @test "changes the content"
         * Ensures when the loadFeed function is called and completes
         * its work, there is at least a single .entry element within
         * the .feed container.
         * @expects entry before and after are not equal
         */
        it('changes the content', function(done) {
            expect(entry_before).not.toEqual(entry_after);
            done();
        });
    });

    /**
     * @suite "Selected Feed Entry"
     */
    describe('Selected Feed Entry', function() {
        /**
         * @function
         * Empties the entry links
         * Loads feed 1 asynchronously
         */
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(1, done);
        });
        /**
         * @function
         * Loads feed 0 asynchronously
         */
        afterEach(function(done) {
            loadFeed(0, done);
        });
        /**
         * @test "opens new tab"
         * Ensures that entry links are opened in a new browser tab.
         * @expects that entry links have the attribute target
         * @expects that the attribute target equals '_blank'
         */
        it('opens new tab', function(done) {
            var feedEntries = document.getElementsByClassName('entry-link'),
                length = feedEntries.length;

            for (var i = 0; i < length; i++) {
                var elem = feedEntries[i];

                expect(elem.hasAttribute('target')).toBeTruthy();
                expect(elem.getAttribute('target')).toEqual('_blank');
            }
            done();
        });
        /**
         * @test "changes color"
         * Ensures that selected entry links change their color.
         * @expects that a visited .entry element contains .visited class
         */
        it('changes color', function(done) {
            var feedEntries = $('.entry'),
                length = feedEntries.length;

            for (var i = 0; i < length; i++) {
                var link = feedEntries[i];
                link.click();
                var visited = document.getElementsByClassName('entry')[i].classList.contains('visited');
                expect(visited).toBeTruthy();
                document.getElementsByClassName('entry')[i].classList.remove('visited'); // reset
            }
            done();
        });
    });
}());