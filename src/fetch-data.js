let Airtable = require("airtable");

let airtableAccount = new Airtable({ apiKey: "keyhVt6vNdkp7msYH" });
let base = airtableAccount.base("app5gc254OPlaTFG2");

async function main() {
  for (let table of ["People", "Groups", "PersonPositions", "Semesters"]) {
    recordsById = {};
    // console.log(1);
    await base(table)
      .select({
        view: "Grid view",
      })
      .eachPage((records, fetchNextPage) => {
        // console.log(2);
        for (let r of records) {
          let json = r._rawJson;

          // Flatten JSON -- fields don't need to be in their own object.
          let record = {
            id: json.id,
            createdTime: json.createdTime,
            ...json.fields,
          };
          recordsById[record.id] = record;
        }

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, eachPage will emit a promised value.
        fetchNextPage();
      });

    // console.log(3);
    let theObjectAsAString = JSON.stringify(recordsById, undefined, 2);
    console.log(`${table} = ${theObjectAsAString}`);
  }
}

main();
