# Autolist Take Home Test
Like the rest of our codebase, we want to make sure our client-side scripts are:
1. **readable**
2. **maintainable**
3. **scalable**

This document lays out the conventions we're using to ensure we don't stray away from these 3 principles.

## Time Spent
4 hours Spent total:
30 minutes spent planning, deciding what views to create, if I should use react or react with redux, thinking about Database
to handle views, what each component will look like and how they will fit together and transition to one another.
1 hour spent setting up environment this includes, rails, controllers, db, react, and initial bootstrapping of a React Component
2.5 hours working with React, adding sliders, testing and adding API, Setting up folder structure and components. 

## Setup
1. run `bundle install`
2. run `yarn`
3. run `rails s` to startup the servers
4. visit `localhost:3000` to see the app

## Approach
I did not get much done in the 4 hours. I did spend some time planning.

My first thoughts was given that I needed three pages. How should I start these pages?
Do some pages need to be a react component or can it be a simple rails static page.
My end result was that I will have one static rails view and bootstrap the main React
component (Page) to the view. This Page app will then hold everything for this test.

The second decision I had to make was should I introduce Redux. Do I need a store?
I believe here is where I made a wrong decision. I decided not to go with a Redux store
thinking that React would be sufficient. As I started to go through, I realized that I need
a store to pass information off to various components. This can be done with React, but given
this test, it would of been cleaner as well as quicker if I went with redux. I believe I would of
gotten more done if I went with Redux.

## Future Plans
There is much still I could of gotten one. Here is a list of things.
1. Naming: I want to get better at this, but my naming of components/views/controllers are not
very good. I was hoping to go back to it later when things got more fleshed out and I can think of better names.
2. I was at the point where I was fetching data. I was able to fetch data and pass it on to a SearchResults
component. But the major component missing was making the request via the Slider and passing it back to the parent Page App,
which would then make the request and pass that data onto the sibling SearchResult App. Again, this started to look like an
eye sore to me, which is why I think Redux would of been better.
3. Another area I didn't get to, and another reason why Redux would be been better, is the Details page. This part is fairly simple when done with Redux. The data is in the store and can easily be passed onto the component. Its also somewhat easy to handle with React, I just needed to add the Details component to the Page App and hide/show other components when the user
clicks on a car to view.
4. The last part I didn't get to was the tracking of data. I did not create any models yet or any database tables. My plan here was to create my own endpoint that would handle the storing of VIN numbers. This would be triggered every time the VehicleDetails component is viewed. Likewise every time a VehicleDetails page is viewed, it would also return a response of how often the page has been viewed.

## Final Thoughts
Thank you for your time. This was a fun exercise and I learned a lot. I learned mostly that I need to get better
at my planning before jumping into a problem. Its easy to say "well I was in a time crunch", but most companies
are on time crunches so these decisions need to be made in a timely manner.
