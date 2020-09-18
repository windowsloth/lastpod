# lastpod

Building a map of connections, a digital cork board of red thread to visualize the Truth.

Really, this is just an excuse to work on my familiarity with Javascript/other web dev/design tools while listening to a podcast that I like.

## Background

Early on in the spring/summer of 2020 (during the first episode on Walter Freeman), Marcus, Henry, and Ben joke about the idea of actually drawing out all the connections between the various people discussed on their show. This followed the revelation that Freeman knew Aleš Hrdlička, who was also featured in their Giant Humanoids episode that had aired a few weeks previous. Shortly after this riff, Marcus mentions that the woman Freeman was dating during the time period he was in DC went on to date Allen Dulles, which tied in another major player from their JFK assassination episodes. Of course, Freeman is also connected to JFK more directly, as he would go on to personally lobotomize Rosemary Kennedy.

Since I had a lot of free time thanks to the COVID lockdown in NYC, and I was also experimenting with Javascript and p5.js as part of a plan to revamp my personal website, I though trying to map these connections might actually be a fun excersize. If nothing else, a way to practice working with data and user interfaces.

## Important Notes

You might look at the chart and think to yourself "hey, why isn't so-and-so on here?" Well, they're probably not on there for one of two reasons, depending on who it is you're looking for:

1. **I just haven't gotten there.** The rogue's gallery of people included on the chart is being put together as I go back and listen to the back catalog of episodes. If there's a specific person missing, I probably just haven't gotten around to adding them, or I haven't taken notes on that episode yet. Unless...

2. **They're a serial killer.** This may seem odd, since the Heavy Hitters are such a big part of the show, but I'm choosing not to include them for a few reasons. First of all, most of them are outliers. They typically don't share any connections with anyone else on the chart, so there's no point in including them. Secondly, when there are connections to someone on the chart, they're usually either totally tangential (like Ed Gein's fascination with Ilse Koch; it was a well documented interest of his, but it's hardly an actual connection, and if it were included it would wind up indirectly tying Gein to the rest of the Nazi's on the list which I don't think is really valid), or they're Obvious Bullshit. This is kind of arbitrary, but I think there is a distinction between Obvious Bullshit (like Ted Bundy actually being George Bush, which is mentioned as an aside on the Ted Bundy Part 2) and Fun Bullshit, like the Planet Serpo.

There are a few instances where I am a still deliberating on whether someone should be included. At the time of writing, I have yet to decide if I want to include any of the Hand of Death connections covered in the Henry Lee Lucas series. Part of me thinks it should be included since there is an entire episode focusing on it, but part of me feels like it falls into Obvious Bullshit, especially considering Marcus, Henry, and Ben frame it as such in the episode. I am also torn on Robert Pickton; the whole secret clones facilities tangent does feel like it crosses the line into total lunacy, but I haven't quite decided.

## Method

Here is a (relatively) brief overview on how this was put together:

### i. Data

As of writing, all people/groups featured are stored as Javascript objects. I think of each of these objects as a "pin" in the corkboard. In real life those pins would be holding the thread in place, along with newspaper clippings and blurry photographs. In this case, each "pin" holds the following elements:

```javascript
{
  id: 0,
  name: 'Aleister Crowley',
  nickname: 'Crowley',
  blurb: 'The Great Beast 666! Famous British occultist and Left-Hand Path magician',
  cons: [],
  epfeat: []
}
```

These elements are hopefully relatively self explanatory, but to clarify:
* ``` id ``` an ID number for this particular pin
* ``` name ``` refers to the name of the person/organization in question
* ``` nickname ``` is an alternate (ideally shorter) name, used for when the map is zoomed out
* ``` blurb ``` is a description. In theory, this will be displayed when a particular pin is clicked on
* ``` cons ``` are the ``` id ``` of other pins that the pin in question should be connected to
* ``` epfeat ``` are episodes where this person/organization is featured

Originally, ``` epfeat ``` was used to draw connections, but this created problems as the chart got larger. For example, Bill Cooper is connected to MJ12 and to Stanton Freidman, but he isn't directly connected to Eisenhower, Nelson Rockfeller, or Valiant Thor. But, since every one of those is discussed in Bill Cooper Part 2 we wind up drawing lines straight from Bill Cooper to Eisenhower, when in reality it should be Bill Cooper > MJ12 > Eisenhower. My original thinking was that just cataloging episode numbers would be easier to keep track of, but I realized that when I was re-listening to episodes and taking notes I would write down the names of the people I wanted to connect anyway so it's not like writing those into the data structure directly would be that much more effort. It also saves a lot of steps later down the line, since I no longer needed to filter the different arrays of ``` epfeat ``` to find overlaps for every single pin.

A few additional elements are added to each pin object when the chart is generated, but that is done procedurally so I haven't included them in this part of the overview.

### ii. Distribution

This is subject to change, but I am relatively happy with the current way the pins get distributed. Currently, the positions are recalculated each time the page runs, which I think adds an element of chaos to the whole thing, and in my opinion that's kinda fun.

The positions aren't entirely random, since that made the charts ugly and difficult to follow. Instead, they are distributed so that pins that have more connections weighted more towards center of the chart, and pins with less pushed out towards the edges. The highest number of connections is calculated, and each pin gets a ``` score ``` element that stores that pin's percentage of the highest number of connections. The differnt ``` score ``` numbers are then split across a handful of zones, which are just concentric circles around the center of the chart.

The positions of the pins are then generated using an algorithm similar to poisson disc distribution: a random angle around the center point is caluclated, a distance from the center is chosen based on the zone the pin is assigned to, and the surrounding area is checked to make sure the pin will not fall too close to any other pins. If, after a set number of attempts no position is found that satisfies the criteria, the pin is pushed out to the next zone. Once a suitable position is found, a ``` pos ``` elemetn is added to that pin's data. I am fairly happy with the patterns that this creates, but I am still tweaking this method to try and get the best possible results.

### iii. Drawing Connections

This step is, at its core, pretty simple. We just loop through the ``` id ``` number in ``` cons ``` for each pin, and draw all the lines from the ``` pos ``` of our starting pin to the ``` pos ``` of the connected pins. There is another step in there to avoid wasting time doubling up on lines, though. We actually create a copy of ``` cons ``` called ```todraw ``` for each pin. That copy is what is actually looped through when drawing the connections, and once we draw a line we actually delete the current pin ``` id ``` from the ``` todraw ``` array in the now connected pin. So, if we're connecting Crowley to Jack Parsons, we'd draw the line from Crowley to Parsons, and then delete Crowley's pin's ``` id ``` from Parsons' ```todraw ``` array so that once we get around to drawing Parsons' connections, we skip Crowley since it's already taken care of.
