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
     * @suite RSS Feeds
     * This suite is all about the RSS feeds definitions,
     * the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /**
         * @test
         * Tests that the allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /**
         * @test
         * TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have url', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        /**
         * @test
         * TODO: Write a test that loops through each feed
         *  in the allFeeds object and ensures it has a name defined
         *  and that the name is not empty.
         */
        it('have name', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /**
     * @suite The menu
     */
    describe('The Menu', function() {
        /**
         * @test
         * TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden', function() {
            expect($('body.menu-hidden').length).toBe(1);
        });
        /**
         * @test
         * TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('toggles on click', function() {
            $('.menu-icon-link').click();
            expect($('body.menu-hidden').length).toBe(0);
            $('.menu-icon-link').click();
            expect($('body.menu-hidden').length).toBe(1);
        });
    });

   /**
    * @suite Initial Entries
    */
    describe('Initial Entries', function() {
    	/**
    	 *
    	 *
    	 */
        beforeEach(function(done){
            $('.feed').empty();
            loadFeed(0, done);
        });
        /**
         * @test
         * TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('have at least 1 entry', function(done) {
            expect($('.feed').find('.entry')).toBeDefined();
            done();
        });
    });

    /**
     * @suite New Feed Selection
     *
     */
    describe('New Feed Selection', function(){
    	var entry_before, //
        	entry_after; //
        /**
    	 *
    	 *
    	 */
        beforeEach(function(done){

            $('.feed').empty();

            loadFeed(0, function() {
                entry_before = $('.feed').find('h2')[0].textContent;
            });

            loadFeed(1, function() {
                entry_after = $('.feed').find('h2')[0].textContent;
                done();
            });
        });
        /**
         * @test changes the content
         * TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('changes the content', function(done){
            expect(entry_before).not.toEqual(entry_after);
            done();
        });
    });

    /**
     * @suite Selected Feed Entry
     */
    describe('Selected Feed Entry', function() {
       /**
        *
        *
        */
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        afterEach(function(done) {
            loadFeed(0, done);
        });
        /**
         * @test opens new tab
         *
         */
        it('opens new tab', function() {
        	var feedEntries = document.getElementsByClassName('entry-link');
        	var length = feedEntries.length;

        	for (var i = 0; i < length; i++) {
        		var elem = feedEntries[i];

        		expect(elem.hasAttribute('target')).toBeTruthy();
        		expect(elem.getAttribute('target')).toEqual('_blank');
            }
        });

        it('changes color', function() {
        	var feedEntries = document.getElementsByClassName('entry-link');
        	var length = feedEntries.length;

        	for (var i = 0; i < length; i++) {
        		var elem = feedEntries[i];

        		expect(elem.hasAttribute('target')).toBeTruthy();
        		expect(elem.getAttribute('target')).toEqual('_blank');
            }
        });
     });

    // TODO: Test Count number of entries in feed
    // TODO: Test Change entry color if selected
    // TODO: Test unique feed names and sources only
    // TODO: Test ADD FEED BUTTON
    // TODO: Test if Google Feed Reader API is used
}());
