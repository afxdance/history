# history/src/data

This folder contains files for fetching and storing the history app data (people, teams, etc.) from Airtable.

- `data.tsx` contains the fetched data
  - This file must be updated when we add/modify _rows_ in Airtable.
  - To update it, use `fetch-data.js`
- `fetch-data.js` loads data from AirTable into `data.tsx`
- `types.tsx` contains the necessary headers
  - This file must be updated when you add/modify _columns_ in Airtable.
  - This file can only be manually updated right now.
  - This file needs to include all different tables in AirTable and their respective column titles

## Quick guide: How to load new data into `data.tsx` using `fetch-data.js`

1. Go to <https://airtable.com/account> \
   a. If you do not have a personal API Key, generate one.
2. Copy your API key.
3. Make sure you are cd'd to the root directory of `history`.
4. Type the following command into terminal without any extra spaces or quotes:\
   `env AIRTABLE_API_KEY=YOUR_KEY_HERE node src/data/fetch-data.js > src/data/data.tsx`
