// testing script to try automatic airtable api calls
// can call fetch-data.js upon loading the website
// dynamically import src/data/data into each component once the asynchronous call finishes

var Airtable = require('airtable');
// let airtableAccount = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
var base = new Airtable({ apiKey: 'keyXyv0cug5zY6Sdy' }).base('app5gc254OPlaTFG2');


// 1. use semester id from HisotryNavComponent to get the Semesters Table row
// 2. get the boardGroupId/teamGroupIds field from that semester
// 3. get the relevant rows from the Groups Table

// Semesters[groupId] -> Groups[positionIds] -> PersonPositions[personIds] -> People[name]
//                        |_name, teamPicture     |_positionTitle, picture      |_name

let semesterName = '2020a';

base('Semesters').select({
  view: 'Default View',
  filterByFormula: "{codename} = '" + { semesterName } + "'"
}).firstPage(function (err, records) {
  if (err) { console.error(err); return; }
  records.forEach(function (record) {
    console.log('Retrieved', record.get('codename'));

    groupId = record.get('boardGroupId')[0];
    teamGroupIds = record.get('teamGroupIds')[0];

    base('Groups').find(groupId, function (err2, groupRecord) {
      if (err2) { console.error(err2); return; }
      console.log('Retrieved', groupRecord.name);

      positionIds = groupRecord.positionIds;

      base('PersonPositions').find(positionIds[0], function (err3, personPositionRecord) {
        if (err3) {console.error(err3); return; }
        console.log('Retrieved', personPositionRecord.positionTitle);

        personIds = personPositionRecord.personIds;

        base('People').find(personIds[0], function (err4, peopleRecord) {
          if (err4) { console.error(err4); return; }
          console.log('Retrieved', peopleRecord.name);


        })
      })
    });


  });
});
