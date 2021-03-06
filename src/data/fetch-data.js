// How to run this file:
// env AIRTABLE_API_KEY=YOUR_KEY_HERE node src/data/fetch-data.js > src/data/data.tsx
// See the README in this folder for more info!
let Airtable = require("airtable")

let airtableAccount = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
let base = airtableAccount.base("app5gc254OPlaTFG2")

//TODO: Need to change. Currently can only read pages that have custom made view called "Default View"
async function main() {
  for (let table of [
    "People",
    "Groups",
    "PersonPositions",
    "Semesters",
    "Years",
    "TechProjects",
    "TechPeople",
  ]) {
    recordsById = {}
    // console.log(1);
    //Right here
    await base(table)
      .select({
        view: "Default View",
      })
      .eachPage((records, fetchNextPage) => {
        // console.log(2);
        for (let r of records) {
          let json = r._rawJson

          // Flatten JSON -- fields don't need to be in their own object.
          let record = {
            createdTime: json.createdTime,
            id: json.id,
            ...json.fields,
          }
          recordsById[record.id] = record
        }

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, eachPage will emit a promised value.
        setTimeout(fetchNextPage, 50)
      })

    // console.log(3);
    let theObjectAsAString = JSON.stringify(recordsById, undefined, 2)
    // eslint-disable-next-line
    console.log(`export let ${table} = ${theObjectAsAString}\n`)
    let finishedTable = table + " completed\n"
    process.stderr.write(finishedTable)
  }
}

main()
