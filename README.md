# lastpod

Building a map of connections, a digital cork board of red thread to visualize the Truth.

Really, this is just an excuse to work on my familiarity with Javascript/other web dev/design tools while listening to a podcast that I like.

## Background

Early on in the spring/summer of 2020 (during the first episode on Walter Freeman), Marcus, Henry, and Ben joke about the idea of actually drawing out all the connections between the various people discussed on their show. This followed the revelation that Freeman knew Aleš Hrdlička, who was also featured in their Giant Humanoids episode that had aired a few weeks previous. Shortly after this riff, Marcus mentions that the woman Freeman was dating during the time period he was in DC went on to date Allen Dulles, which tied in another major player from their JFK assassination episodes. Of course, Freeman is also connected to JFK more directly, as he would go on to personally lobotomize Rosemary Kennedy.

Since I had a lot of free time thanks to the COVID lockdown in NYC, and I was also experimenting with Javascript and p5.js as part of a plan to revamp my personal website, I though trying to map these connections might actually be a fun excersize. If nothing else, a way to practice working with data and user interfaces.

## Method

As of writing, all people/groups featured are stored as Javascript objects with the following elements:

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
* ``` id ``` an ID number for this particular "pin" on the "cork board"
* ``` name ``` refers to the name of the person/organization in question
* ``` nickname ``` is an alternate (ideally shorter) name, used for when the map is zoomed out
* ``` blurb ``` is a description. In theory, this will be displayed when a particular "pin" on the chart is clicked on
8 ``` cons ``` are the ``` id ```s of other pins that the pin in question should be connected to
* ``` epfeat ``` are episodes where this person/organization is featured
