/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have url', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have name', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden', function() {
            expect($('body.menu-hidden').length).toBe(1);
        });

         /* TODO: Write a test that ensures the menu changes
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

   /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it("have at least 1 entry", function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
    	 /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var title = $('.header-title').html();

        beforeEach(function(done) {
            loadFeed(1, done);
        });

        afterEach(function(done) {
            loadFeed(0, done); // reset feed to default
        });

        it('has different content', function() {
            expect($('.header-title').html()).not.toBe(title);
        });

     });

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /* TODO: Write a new test suite named "Selected Entry" */
    describe('Selected Feed Entry', function() {
    	 /* hasAttribute https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
    	    getAttribute https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
         */

        var feedLength = allFeeds.length,
            feed = feedLength === 1 ? 0 : getRandomInt(0, feedLength);

            console.log(feed);

        beforeEach(function(done) {
            loadFeed(feed, done);
        });

        afterEach(function(done) {
            loadFeed(0, done);
        });

        it('opens new tab', function() {
        	var feedEntries = document.getElementsByClassName('entry-link');
        	var length = feedEntries.length;

        	for (var i = 0; i < length; i++) {
        		var elem = feedEntries[i];
        		console.log(elem);
        		expect(elem.hasAttribute('target')).toBe(true);
        		expect(elem.getAttribute('target')).toBe('_blank');
            }
        });

     });
}());
