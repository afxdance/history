export namespace AFX {
  export interface Person {
    id: string;
    createdTime: string;
    name: string;
    positionIds: string[];
  }

  export interface Group {
    id: string;
    // order: string;
    type: string;
    createdTime: string;
    name: string;
    positionIds?: string[]; // only for board
    teamPicture?: Attachment[]; // only for teams
    videoUrl?: string; // only for teams
    boardSemesterId?: string[]; // todo: should not be array?
    teamSemesterId?: string[]; // todo: should not be array?
  }

  export interface Attachment {
    url: string;
    [x: string]: any;
  }

  export interface PersonPosition {
    id: string;
    createdTime: string;
    picture?: Attachment[];
    person: string[];
    group: string[];
    positionTitle: string;
    [x: string]: any;
  }

  export interface Semester {
    id: string;
    createdTime: string;
    codename: string;
    boardGroupId?: string[]; // todo: should not be array?
    teamGroupIds?: string[];
  }

  export let PersonPositions: { [x: string]: PersonPosition };
  export let Groups: { [x: string]: Group };
  export let People: { [x: string]: Person };
  export let Semesters: { [x: string]: Semester };

  People = {
    "recyq5aoBzIkd45hk": {
      "id": "recyq5aoBzIkd45hk",
      "createdTime": "2018-10-18T00:18:57.000Z",
      "name": "Aaron Luu",
      "positionIds": [
        "recEpa6g2eK4kepYU"
      ]
    },
    "rec2nvAlUafPaALoo": {
      "id": "rec2nvAlUafPaALoo",
      "createdTime": "2018-10-18T00:37:07.000Z",
      "name": "AC Dela Paz",
      "positionIds": [
        "recQ7VUlKsTaz1PA9",
        "recOJEHgsz20gcZgQ"
      ]
    },
    "rec54iAVFwg1HwrW1": {
      "id": "rec54iAVFwg1HwrW1",
      "createdTime": "2018-10-17T22:08:22.000Z",
      "name": "Ada Ng",
      "positionIds": [
        "recsZh1l7cUmPLqPW",
        "recyux8jbE3ZvF4X6"
      ]
    },
    "recaIBY8nq01IWPqM": {
      "id": "recaIBY8nq01IWPqM",
      "createdTime": "2018-10-04T02:45:10.000Z",
      "name": "Aileen Gui",
      "positionIds": [
        "recWjLug9n4YvCuex",
        "recZAsgx9Pww9moqU"
      ]
    },
    "rec9ycYnjZ88dsU32": {
      "id": "rec9ycYnjZ88dsU32",
      "createdTime": "2018-10-18T00:31:57.000Z",
      "name": "Albert Weng",
      "positionIds": [
        "reccimMJ4z1CZxCEn"
      ]
    },
    "recVwOcszdvg6tMe0": {
      "id": "recVwOcszdvg6tMe0",
      "createdTime": "2018-10-17T22:44:58.000Z",
      "name": "Alex Nguyen",
      "positionIds": [
        "recgHxVPeQJD7UKwT",
        "rectPeFl8L3r1BHn3",
        "recfp4C8UIra4GMBQ",
        "recKefbsymSU2XoQQ"
      ]
    },
    "rec1f93ALW5SsVGI9": {
      "id": "rec1f93ALW5SsVGI9",
      "createdTime": "2018-10-17T22:42:11.000Z",
      "name": "Alex Tang",
      "positionIds": [
        "recHPFEfJg3chEyPc"
      ]
    },
    "recWzPqCuU8d0RdCK": {
      "id": "recWzPqCuU8d0RdCK",
      "createdTime": "2018-10-18T00:27:17.000Z",
      "name": "Alice Lee",
      "positionIds": [
        "recqlraIAykE9FI3S"
      ]
    },
    "rec1LGQN0f3Ylkwo9": {
      "id": "rec1LGQN0f3Ylkwo9",
      "createdTime": "2018-10-17T23:56:22.000Z",
      "name": "Alicia Chow",
      "positionIds": [
        "rec7RNbDRBHYxdKqM",
        "recEx6BW29gbfazMi"
      ]
    },
    "recPocv0xCXtbE2zX": {
      "id": "recPocv0xCXtbE2zX",
      "createdTime": "2018-10-18T00:31:36.000Z",
      "name": "Alina Li",
      "positionIds": [
        "recQJrl4Ir3zMeFhy",
        "reculGDwitMiaaY6N"
      ]
    },
    "rec186CmW9PWsr87T": {
      "id": "rec186CmW9PWsr87T",
      "createdTime": "2018-10-18T00:22:56.000Z",
      "name": "Alison Ong",
      "positionIds": [
        "recPgnkPYdTsaXuLW"
      ]
    },
    "recVe7qtpA0igWgdl": {
      "id": "recVe7qtpA0igWgdl",
      "createdTime": "2018-10-17T22:11:52.000Z",
      "name": "Alyssa Alvarez",
      "positionIds": [
        "rec9arrsO6ltYsTa9",
        "recwHz7FQK4hCm7i7"
      ]
    },
    "recBPtE9xYnXjdgb4": {
      "id": "recBPtE9xYnXjdgb4",
      "createdTime": "2018-10-17T22:12:58.000Z",
      "name": "Andrew Lee",
      "positionIds": [
        "recWyPZFROrnMhz6W",
        "recyOfaGap9N8vUfi",
        "reclSqlKcWOPSBmnt"
      ]
    },
    "rec1eXKKBU2tYbs5O": {
      "id": "rec1eXKKBU2tYbs5O",
      "createdTime": "2018-10-18T01:09:28.000Z",
      "name": "Andy Santiago",
      "positionIds": [
        "recRQrCsjSiIfgJeF",
        "recVcUQWzf0jSbWCU"
      ]
    },
    "recGX7657yT6j0Wby": {
      "id": "recGX7657yT6j0Wby",
      "createdTime": "2018-10-04T02:45:10.000Z",
      "name": "Angie Liao",
      "positionIds": [
        "recqMnjyPBDVrrStY",
        "recRnQm10089GTbld",
        "recOm0w7AwBFrZEh3"
      ]
    },
    "recaFAdgok66RkVsR": {
      "id": "recaFAdgok66RkVsR",
      "createdTime": "2018-10-17T22:53:33.000Z",
      "name": "Anna Liang",
      "positionIds": [
        "recwtb0YqUyFUnBKp",
        "recKbSLDMtkNmNi57"
      ]
    },
    "recK9H06reG3BErUU": {
      "id": "recK9H06reG3BErUU",
      "createdTime": "2018-10-04T02:45:10.000Z",
      "name": "Annie Wang",
      "positionIds": [
        "rec0tUiDaoQU785n1"
      ]
    },
    "rec0Xrjy5cO0rNOIE": {
      "id": "rec0Xrjy5cO0rNOIE",
      "createdTime": "2018-10-17T23:40:19.000Z",
      "name": "Ansel Deng",
      "positionIds": [
        "rec8m5xHXr2m62FV4",
        "reclCdruw9w77flnr"
      ]
    },
    "recuxPPGm6jYZYg8b": {
      "id": "recuxPPGm6jYZYg8b",
      "createdTime": "2018-10-17T23:55:39.000Z",
      "name": "Anthony Chen",
      "positionIds": [
        "recfaaat8NOYpX42H"
      ]
    },
    "recv9osfao9kZT21F": {
      "id": "recv9osfao9kZT21F",
      "createdTime": "2018-10-18T00:04:19.000Z",
      "name": "Aram Cariaga",
      "positionIds": [
        "recvvmAiFUt1nQqg3"
      ]
    },
    "recbcCfd2aMzjtrro": {
      "id": "recbcCfd2aMzjtrro",
      "createdTime": "2018-10-17T22:22:53.000Z",
      "name": "Arthur Liou",
      "positionIds": [
        "recVF1tjI67BNcwu0",
        "rec6POiIFWbnVhXji"
      ]
    },
    "rec1NK9KoDeRi9Pq9": {
      "id": "rec1NK9KoDeRi9Pq9",
      "createdTime": "2018-10-17T22:37:20.000Z",
      "name": "Ashmitha Thinagar",
      "positionIds": [
        "recMZaerYaUo8bIa2",
        "recNGBiCiOwgqKOtw"
      ]
    },
    "recY91MTqkbqNjZjL": {
      "id": "recY91MTqkbqNjZjL",
      "createdTime": "2018-10-18T00:13:53.000Z",
      "name": "Audrey Ma",
      "positionIds": [
        "recFf0bUFGJ0IZ7rg"
      ]
    },
    "recvmgzYF7heGgA9k": {
      "id": "recvmgzYF7heGgA9k",
      "createdTime": "2018-10-17T22:31:05.000Z",
      "name": "Aurora Marie",
      "positionIds": [
        "rec61dgtt7fFuPdUc",
        "recpsLx44CYFgFzqe"
      ]
    },
    "recuE0zgh4gmxJVEO": {
      "id": "recuE0zgh4gmxJVEO",
      "createdTime": "2018-10-18T00:29:55.000Z",
      "name": "Brandon Toy",
      "positionIds": [
        "recLJGgsdMILy5XOd"
      ]
    },
    "recxwGyHwoJImSoPP": {
      "id": "recxwGyHwoJImSoPP",
      "createdTime": "2018-10-18T00:33:02.000Z",
      "name": "Cari Gan",
      "positionIds": [
        "recQafxPMYHX8f1ON",
        "recQjFIWuzTruoDx8"
      ]
    },
    "rec0osRffYVXkinft": {
      "id": "rec0osRffYVXkinft",
      "createdTime": "2018-10-17T22:24:34.000Z",
      "name": "Carol Yu",
      "positionIds": [
        "recBg9E1RVPt9HKfe"
      ]
    },
    "recrROhFCZ4KFxjAW": {
      "id": "recrROhFCZ4KFxjAW",
      "createdTime": "2018-10-17T22:25:08.000Z",
      "name": "Cathy Yang",
      "positionIds": [
        "recnOfQihz89RL3zI"
      ]
    },
    "recDphJDWcMIkCW3k": {
      "id": "recDphJDWcMIkCW3k",
      "createdTime": "2018-10-18T01:02:10.000Z",
      "name": "Chantal Herrera",
      "positionIds": [
        "recC1yAk0chU3BGIV",
        "reclcIJZgkU1xS7gL"
      ]
    },
    "recnJ1jNx4hdHcs8S": {
      "id": "recnJ1jNx4hdHcs8S",
      "createdTime": "2018-10-17T22:53:53.000Z",
      "name": "Charmaine Lai",
      "positionIds": [
        "recqnIywOC0Vr3Rlc",
        "recOpta8sOgUHtIAv",
        "recf2TJ7oiYZ3ENj7",
        "recJjiPD0zp7cn6cG"
      ]
    },
    "recrAtRib7HBEcJB9": {
      "id": "recrAtRib7HBEcJB9",
      "createdTime": "2018-10-17T22:37:47.000Z",
      "name": "Chelsea Zhang",
      "positionIds": [
        "recD9K0ch5nqXUBlx",
        "recTLInL69e8UmYh7"
      ]
    },
    "reczZGBDJP1tLF0A9": {
      "id": "reczZGBDJP1tLF0A9",
      "createdTime": "2018-10-18T00:11:24.000Z",
      "name": "Cheryl Chen",
      "positionIds": [
        "recQBI7hJmK8Dd6qe"
      ]
    },
    "reclQY37yXdhBjDGH": {
      "id": "reclQY37yXdhBjDGH",
      "createdTime": "2018-10-04T02:45:10.000Z",
      "name": "Chloe Ding",
      "positionIds": [
        "recbxMFtISlTjSCWK",
        "recKH6lInnnP3rq5v"
      ]
    },
    "recluqLVujMSWoHUV": {
      "id": "recluqLVujMSWoHUV",
      "createdTime": "2018-10-17T22:13:38.000Z",
      "name": "Chris Kim",
      "positionIds": [
        "recdcLCumD1Q3KkNn",
        "recsaxUF87czITRBf",
        "recboh27pftuiP1MF"
      ]
    },
    "recNQnSSq1R8SBkoa": {
      "id": "recNQnSSq1R8SBkoa",
      "createdTime": "2018-10-18T00:23:51.000Z",
      "name": "Chris Lee",
      "positionIds": [
        "recpoOliHHmwDIBof"
      ]
    },
    "recMwcvipXM9qiwJJ": {
      "id": "recMwcvipXM9qiwJJ",
      "createdTime": "2018-10-18T00:23:27.000Z",
      "name": "Christian Cayton",
      "positionIds": [
        "recFneoMUrd7Qitlf",
        "recsREBChFaltwzAo"
      ]
    },
    "rech7Tn0Mt2LITmpc": {
      "id": "rech7Tn0Mt2LITmpc",
      "createdTime": "2018-10-17T22:24:09.000Z",
      "name": "Christina Ong",
      "positionIds": [
        "recOTsrW10YbgxArn",
        "recwIOfNVdHw2rgi9"
      ]
    },
    "recJu9Hcotxvp8rOT": {
      "id": "recJu9Hcotxvp8rOT",
      "createdTime": "2018-10-17T23:50:10.000Z",
      "name": "Christine Ho",
      "positionIds": [
        "recgAAXh8WKL1kcO0"
      ]
    },
    "recsIrG39H7oCENrA": {
      "id": "recsIrG39H7oCENrA",
      "createdTime": "2018-10-04T02:47:57.000Z",
      "name": "Clara Park",
      "positionIds": [
        "reccrJOnJTsEoi3Ec"
      ]
    },
    "recFHTImw5G3ebb3P": {
      "id": "recFHTImw5G3ebb3P",
      "createdTime": "2018-10-18T00:29:31.000Z",
      "name": "Dan Ricciardelli",
      "positionIds": [
        "recnJSRWIQMhZbQEs"
      ]
    },
    "recfLsiC7955V83ri": {
      "id": "recfLsiC7955V83ri",
      "createdTime": "2018-10-17T22:30:02.000Z",
      "name": "Daniel He",
      "positionIds": [
        "reccuKlOcC6NdTOwO",
        "rec95Nr6rB535jmwh",
        "recWBvRimNr5bCWyI",
        "recftaxOirG0FO2uP",
        "recVhmcmenPkMyFWt",
        "rec3AKMveOXLNezy2",
        "rec7zqZoqYTawHa25"
      ]
    },
    "recJNRrxnWZBsrpZD": {
      "id": "recJNRrxnWZBsrpZD",
      "createdTime": "2018-10-18T00:08:50.000Z",
      "name": "Daniel Morales",
      "positionIds": [
        "recLqTEOmtwwffBpb"
      ]
    },
    "recoKdC5z3vmLbrhF": {
      "id": "recoKdC5z3vmLbrhF",
      "createdTime": "2018-10-17T22:38:41.000Z",
      "name": "Danielle Ip",
      "positionIds": [
        "rec0xXxNqIKyo0acv"
      ]
    },
    "rec4xqb3LIKHRZjFp": {
      "id": "rec4xqb3LIKHRZjFp",
      "createdTime": "2018-10-17T22:54:19.000Z",
      "name": "Danielle Li",
      "positionIds": [
        "recOzSRjNX9vREosk",
        "recN8aZVT9qu9xG9j",
        "recTX06RHpFGNzK9T"
      ]
    },
    "recLDaDFZxNyhrLYf": {
      "id": "recLDaDFZxNyhrLYf",
      "createdTime": "2018-10-17T22:28:46.000Z",
      "name": "Darae Kim",
      "positionIds": [
        "recH2qy05mNoxqz5l"
      ]
    },
    "recPtpRtkSg3geRhE": {
      "id": "recPtpRtkSg3geRhE",
      "createdTime": "2018-10-18T00:06:58.000Z",
      "name": "Davina Dou",
      "positionIds": [
        "recjefOkZ4BA9GSdr"
      ]
    },
    "rec7BBK1UpjDQQiJF": {
      "id": "rec7BBK1UpjDQQiJF",
      "createdTime": "2018-10-17T22:14:40.000Z",
      "name": "Davinci Lam",
      "positionIds": [
        "recPE6Z2zTr4HPmTD",
        "recBGlHz815nSSdWi"
      ]
    },
    "reciuIga5VEVPI5sb": {
      "id": "reciuIga5VEVPI5sb",
      "createdTime": "2018-10-17T22:46:03.000Z",
      "name": "Edwina Yuan",
      "positionIds": [
        "recqBbjzibVHDFjwq"
      ]
    },
    "recn9QkB6vln1iqIG": {
      "id": "recn9QkB6vln1iqIG",
      "createdTime": "2018-10-17T22:30:10.000Z",
      "name": "Emilio Cuartero",
      "positionIds": [
        "reclH2WaVrHdkjc1p",
        "recA29CYm8ous5YmT",
        "recEdqoEkjRTml6xZ",
        "recJ4qaFgB7HGebc7",
        "recSEORUAvZKBuKAW",
        "recvOgtgGVK39lPR9"
      ]
    },
    "recD2MQzODBpKusXm": {
      "id": "recD2MQzODBpKusXm",
      "createdTime": "2018-10-17T22:54:37.000Z",
      "name": "Emily Hill",
      "positionIds": [
        "recUoDEMVQwdj8pdF"
      ]
    },
    "rec4DL1eippoez0bh": {
      "id": "rec4DL1eippoez0bh",
      "createdTime": "2018-10-17T22:39:04.000Z",
      "name": "Emily Liang",
      "positionIds": [
        "rec1eoD5Alq8iuRRR",
        "rec8aO9PIE26GJjlU"
      ]
    },
    "recLxGorRTNI9I0QS": {
      "id": "recLxGorRTNI9I0QS",
      "createdTime": "2018-10-17T22:16:55.000Z",
      "name": "Emily Tsai",
      "positionIds": [
        "rec54wo9l7lwIPoDh",
        "recRYxRcI1EBvHWWr"
      ]
    },
    "recp0NmQKxjcdlu8w": {
      "id": "recp0NmQKxjcdlu8w",
      "createdTime": "2018-10-17T22:37:51.000Z",
      "name": "Eric Kim",
      "positionIds": [
        "recZRkwOqdub8rIb4"
      ]
    },
    "recOWrlg8MLtI8Py2": {
      "id": "recOWrlg8MLtI8Py2",
      "createdTime": "2018-10-17T22:38:59.000Z",
      "name": "Felix Li",
      "positionIds": [
        "rec4z6wz1bId6q4v3"
      ]
    },
    "recJMNzslDXmQM7iZ": {
      "id": "recJMNzslDXmQM7iZ",
      "createdTime": "2018-10-17T22:46:32.000Z",
      "name": "Gabrielle Balanon",
      "positionIds": [
        "rec244XFvK8gGouDq"
      ]
    },
    "recI4tz7ioKyk9TK0": {
      "id": "recI4tz7ioKyk9TK0",
      "createdTime": "2018-10-17T22:06:19.000Z",
      "name": "Geoffrey Chen",
      "positionIds": [
        "recgbIu7VI553Sybn",
        "rec3kK4A9qdmQXQdH",
        "recU54lLZqUz4LmbK",
        "rec2ArD4zfUhlWKwj"
      ]
    },
    "rec14xvdLuoluctCH": {
      "id": "rec14xvdLuoluctCH",
      "createdTime": "2018-10-17T22:46:53.000Z",
      "name": "George Wu",
      "positionIds": [
        "recWSwGnmjnUW7jWa"
      ]
    },
    "recSpdnuAOuF5svEh": {
      "id": "recSpdnuAOuF5svEh",
      "createdTime": "2018-10-17T22:23:49.000Z",
      "name": "Gordon Lai",
      "positionIds": [
        "recWqs23aXzwyEOyh",
        "recOZGvfMNPABr1FI"
      ]
    },
    "recGThjgxlEJ9Xy0B": {
      "id": "recGThjgxlEJ9Xy0B",
      "createdTime": "2018-10-18T00:19:39.000Z",
      "name": "Jacob Ngo",
      "positionIds": [
        "recqGZOgvSyf9Gphr"
      ]
    },
    "rec4rqgME4ja2gNp7": {
      "id": "rec4rqgME4ja2gNp7",
      "createdTime": "2018-10-17T22:40:53.000Z",
      "name": "Jaemin Kim",
      "positionIds": [
        "rec7CxNBh9H35Vj0A",
        "rec7h2sY81YQeHgiB"
      ]
    },
    "rec4wvItkd0rSu1w8": {
      "id": "rec4wvItkd0rSu1w8",
      "createdTime": "2018-10-17T22:14:32.000Z",
      "name": "James Arias",
      "positionIds": [
        "recitXxPLG94ld8ct"
      ]
    },
    "recIrcS0iqZm0deBi": {
      "id": "recIrcS0iqZm0deBi",
      "createdTime": "2018-10-17T23:31:47.000Z",
      "name": "James Chen",
      "positionIds": [
        "recyh95M614yPayiO",
        "rec8fq44tkasMgUFF",
        "recgR8oIWWtpRwQ41"
      ]
    },
    "recqZKVLh9MwwoRfn": {
      "id": "recqZKVLh9MwwoRfn",
      "createdTime": "2018-10-17T22:17:26.000Z",
      "name": "Jasmine Chau",
      "positionIds": [
        "recTrl8bPc8liK962",
        "recowepyieoCN1uVQ",
        "recL2c46u3NFrncta",
        "recCTWLDbdrqn2nYJ",
        "recCV8UTZJWjUgyYE"
      ]
    },
    "rec4VoP3lLO1sUyqS": {
      "id": "rec4VoP3lLO1sUyqS",
      "createdTime": "2018-10-18T00:13:08.000Z",
      "name": "Jasmine Chen",
      "positionIds": [
        "recDDSSEqMN7mjYIQ"
      ]
    },
    "recRTWAYnQmB1tE5v": {
      "id": "recRTWAYnQmB1tE5v",
      "createdTime": "2018-10-17T22:39:30.000Z",
      "name": "Jasmine Tatah",
      "positionIds": [
        "recvkizTwIECyfD8A"
      ]
    },
    "recO6btsvRqZeuJjP": {
      "id": "recO6btsvRqZeuJjP",
      "createdTime": "2018-09-28T02:33:01.000Z",
      "name": "Jeffrey Wang",
      "positionIds": [
        "recDnBRrmDOgpil2Z",
        "rec2eY3R0ExDIo5rY",
        "reckBSsIr0Y8teuIl"
      ]
    },
    "reccBSwkwjN6WIsfB": {
      "id": "reccBSwkwjN6WIsfB",
      "createdTime": "2018-10-17T22:33:32.000Z",
      "name": "Jenny Chen",
      "positionIds": [
        "recYinURnABbJOFqe"
      ]
    },
    "reclzXp3jh79lnbB0": {
      "id": "reclzXp3jh79lnbB0",
      "createdTime": "2018-10-17T22:18:36.000Z",
      "name": "Jenny Li",
      "positionIds": [
        "recCYFGpcjEB5aPVa",
        "recxsfg4zOPLAqf9R"
      ]
    },
    "recFEcamXUNR9EndJ": {
      "id": "recFEcamXUNR9EndJ",
      "createdTime": "2018-10-17T23:49:02.000Z",
      "name": "Jeremiah Kim",
      "positionIds": [
        "recY0wr9dD6XrplEt",
        "rec2TRZwtVni7Qwvf"
      ]
    },
    "recnnv2dbvHIZ2dGJ": {
      "id": "recnnv2dbvHIZ2dGJ",
      "createdTime": "2018-10-17T22:39:51.000Z",
      "name": "Jinnie Rhee",
      "positionIds": [
        "recCUymelnvLksVOH",
        "recZomHaoY9DQQBpn"
      ]
    },
    "recBiWbxo0ly1HtJS": {
      "id": "recBiWbxo0ly1HtJS",
      "createdTime": "2018-10-18T00:18:13.000Z",
      "name": "Jonah Tang",
      "positionIds": [
        "recV1ZpVswX7PICAt"
      ]
    },
    "recZ4bppVkukHelyx": {
      "id": "recZ4bppVkukHelyx",
      "createdTime": "2018-10-17T22:34:20.000Z",
      "name": "Joseph Koo",
      "positionIds": [
        "recWHyWMs5CQgy6L2"
      ]
    },
    "rec9jN75kKwlEUKlP": {
      "id": "rec9jN75kKwlEUKlP",
      "createdTime": "2018-10-17T22:26:09.000Z",
      "name": "Josh Park",
      "positionIds": [
        "recYDrXQ1G6b6s9oj",
        "recvQimuy5LNCjCSH"
      ]
    },
    "recDBy6u6VlMpeiMt": {
      "id": "recDBy6u6VlMpeiMt",
      "createdTime": "2018-10-17T22:40:15.000Z",
      "name": "Julie Yu",
      "positionIds": [
        "recRn726PeTJUTlp1"
      ]
    },
    "recFHoYhUBiV5URhr": {
      "id": "recFHoYhUBiV5URhr",
      "createdTime": "2018-10-17T22:31:40.000Z",
      "name": "Karen Ding",
      "positionIds": [
        "recpDL3KDWfgRHxc4",
        "recIjhqWDW2hFdXNs"
      ]
    },
    "reczY2iMsgy8o68WH": {
      "id": "reczY2iMsgy8o68WH",
      "createdTime": "2018-10-17T23:54:16.000Z",
      "name": "Karina Hull",
      "positionIds": [
        "recySsvbLKyHk9sfh"
      ]
    },
    "rec8WQB0KC7QXPy7z": {
      "id": "rec8WQB0KC7QXPy7z",
      "createdTime": "2018-10-17T22:32:10.000Z",
      "name": "Kathie Tian",
      "positionIds": [
        "recCsdE1LTyQrjMBW"
      ]
    },
    "recD6ol6FmNngbj9C": {
      "id": "recD6ol6FmNngbj9C",
      "createdTime": "2018-10-18T00:35:49.000Z",
      "name": "Katrina Oshima",
      "positionIds": [
        "recoz3ryR7fQCDoUq"
      ]
    },
    "recbLbxmZ4W2vEr5g": {
      "id": "recbLbxmZ4W2vEr5g",
      "createdTime": "2018-10-18T00:49:45.000Z",
      "name": "Kayla Toy",
      "positionIds": [
        "recIxLsf6AhkAYZjp"
      ]
    },
    "recXg1KTKckQDUF8R": {
      "id": "recXg1KTKckQDUF8R",
      "createdTime": "2018-10-18T01:06:05.000Z",
      "name": "Keita Yada",
      "positionIds": [
        "recu64G90wcXnucXb"
      ]
    },
    "recXJr3fTDXjPWZd6": {
      "id": "recXJr3fTDXjPWZd6",
      "createdTime": "2018-10-17T22:32:34.000Z",
      "name": "Kelly Yong",
      "positionIds": [
        "rec8nwJXLJ37OV0rQ"
      ]
    },
    "rec3RLZl3eC9SXHwJ": {
      "id": "rec3RLZl3eC9SXHwJ",
      "createdTime": "2018-10-17T22:19:05.000Z",
      "name": "Kevin Hayakawa",
      "positionIds": [
        "recnVPyrNQBtG10yJ",
        "recvod600x05DuouE"
      ]
    },
    "recTyIipOm1vPBdpw": {
      "id": "recTyIipOm1vPBdpw",
      "createdTime": "2018-10-17T22:40:57.000Z",
      "name": "Kevin Pham",
      "positionIds": [
        "recZpYxJZgts0bfGu",
        "rechneZNwlBVrMuBv"
      ]
    },
    "recewlyjxE33ebDly": {
      "id": "recewlyjxE33ebDly",
      "createdTime": "2018-10-17T22:47:58.000Z",
      "name": "Kim Ambrocio",
      "positionIds": [
        "recvYMH4qGUQzU6fU",
        "recvdEHm4j3CBAHaL"
      ]
    },
    "rec4UfhaS3ZcsKOfU": {
      "id": "rec4UfhaS3ZcsKOfU",
      "createdTime": "2018-09-28T02:33:01.000Z",
      "name": "Kirk La",
      "positionIds": [
        "recIZvsIUY7Lf3WCZ"
      ]
    },
    "recsYm4ArvX4IvB3p": {
      "id": "recsYm4ArvX4IvB3p",
      "createdTime": "2018-10-18T00:09:34.000Z",
      "name": "Kristina Kim",
      "positionIds": [
        "recmDiq3nYjxVyJde"
      ]
    },
    "recnIIrPMXGlfHFb9": {
      "id": "recnIIrPMXGlfHFb9",
      "createdTime": "2018-10-18T00:37:33.000Z",
      "name": "Lenny Dong",
      "positionIds": [
        "rec8ELbYUBDN8u2M9",
        "recD8ZQSM8cA7PbBW"
      ]
    },
    "rect0ED131TruiBcq": {
      "id": "rect0ED131TruiBcq",
      "createdTime": "2018-10-18T00:08:05.000Z",
      "name": "Manesy Cevallos",
      "positionIds": [
        "recbYs6ty7R081gTL"
      ]
    },
    "recA62lDDRZ9YpoBM": {
      "id": "recA62lDDRZ9YpoBM",
      "createdTime": "2018-10-17T23:39:24.000Z",
      "name": "Mariana Tagano",
      "positionIds": [
        "recunId6aCRH4Jc2z",
        "rec0KlBZwxCoTMOFo"
      ]
    },
    "recQEUQvGhpt2Sydx": {
      "id": "recQEUQvGhpt2Sydx",
      "createdTime": "2018-10-17T22:55:33.000Z",
      "name": "Mark Refe",
      "positionIds": [
        "recs15zKfmfMsjBgE"
      ]
    },
    "rechcalO1WrUFzO5c": {
      "id": "rechcalO1WrUFzO5c",
      "createdTime": "2018-10-18T00:50:29.000Z",
      "name": "Max McArthur",
      "positionIds": [
        "rec3pE1flR2WcvqhZ",
        "recBsur5aAWJt0obi"
      ]
    },
    "reci7k75SMLdI0Wjh": {
      "id": "reci7k75SMLdI0Wjh",
      "createdTime": "2018-09-28T02:33:01.000Z",
      "name": "Mei Mei",
      "positionIds": [
        "recHuonEXK26KidcQ",
        "recGkQe9WXhmJPUn2",
        "recRhyhlWtKnOo3f8"
      ]
    },
    "recCQaNAzI6bTDsQo": {
      "id": "recCQaNAzI6bTDsQo",
      "createdTime": "2018-10-04T02:45:10.000Z",
      "name": "Mengyan Li",
      "positionIds": [
        "recklML4eO8FNCc0Y"
      ]
    },
    "recvmimrks8m7hMNB": {
      "id": "recvmimrks8m7hMNB",
      "createdTime": "2018-10-17T22:56:43.000Z",
      "name": "Michael Chen",
      "positionIds": [
        "recWGoUj92415MYGK",
        "recQam7kgl8ewGaTj"
      ]
    },
    "reclpX3jvpv0V44dl": {
      "id": "reclpX3jvpv0V44dl",
      "createdTime": "2018-10-17T22:33:00.000Z",
      "name": "Michael Chu",
      "positionIds": [
        "recBfzJCrlmmV2q5q"
      ]
    },
    "reclVNKAxBs3D00S5": {
      "id": "reclVNKAxBs3D00S5",
      "createdTime": "2018-10-17T22:20:01.000Z",
      "name": "Mikaela Klein",
      "positionIds": [
        "recAKbFuUkG4O5I3F"
      ]
    },
    "recCmFeqHAujsDBhb": {
      "id": "recCmFeqHAujsDBhb",
      "createdTime": "2018-10-17T23:50:44.000Z",
      "name": "Monica Li",
      "positionIds": [
        "recssZGhieI9WjLJB"
      ]
    },
    "recH8tvzTKdL29gBU": {
      "id": "recH8tvzTKdL29gBU",
      "createdTime": "2018-10-17T22:48:41.000Z",
      "name": "Nancy Yang",
      "positionIds": [
        "recAuBgjfYB2N5lD4"
      ]
    },
    "reci3Xt6OvMS1EnkG": {
      "id": "reci3Xt6OvMS1EnkG",
      "createdTime": "2018-10-17T23:37:00.000Z",
      "name": "Nanxi Wang",
      "positionIds": [
        "recKPisyjQ5ifZENH"
      ]
    },
    "rec64C1WdF2Amk1VV": {
      "id": "rec64C1WdF2Amk1VV",
      "createdTime": "2018-10-17T22:20:27.000Z",
      "name": "Natalie Ma",
      "positionIds": [
        "recFik0UCmCjnsmAX",
        "reci5J6MOS8tphZcF"
      ]
    },
    "recVTIsM4iNA1qOgR": {
      "id": "recVTIsM4iNA1qOgR",
      "createdTime": "2018-10-17T23:38:41.000Z",
      "name": "Navid Jawad",
      "positionIds": [
        "recNCn5iSCGzeCbGa"
      ]
    },
    "recmLTV2BFh495bJC": {
      "id": "recmLTV2BFh495bJC",
      "createdTime": "2018-10-17T22:57:03.000Z",
      "name": "Nicole Shim",
      "positionIds": [
        "reciu5395LaD08ooO",
        "recJqvj4x8bg3k1Gb",
        "rec1ej6auMgWYirwN"
      ]
    },
    "recPgjUGxFwXXOPoQ": {
      "id": "recPgjUGxFwXXOPoQ",
      "createdTime": "2018-10-04T02:45:10.000Z",
      "name": "Nolan Pokpongkiat",
      "positionIds": [
        "recYGmt1dDyVGwtoO",
        "recA5AtEHnQjODYey"
      ]
    },
    "recen1WngPBkT2o36": {
      "id": "recen1WngPBkT2o36",
      "createdTime": "2018-10-17T22:49:00.000Z",
      "name": "Patrick Lin",
      "positionIds": [
        "rec16ckDJqJqxrZPg",
        "recePDUmIP5pFEsTc"
      ]
    },
    "recGYjEvMRqWuQabn": {
      "id": "recGYjEvMRqWuQabn",
      "createdTime": "2018-10-17T22:05:36.000Z",
      "name": "Ping Quach",
      "positionIds": [
        "recNEQCDVauvqQrk5",
        "rec1KRcNkLaFDWaly",
        "recTAdsbclNgXbvey",
        "recxlFvvUfFDj8Hyj",
        "recvXhAMyqnKWxeqy"
      ]
    },
    "recm9GGNQwNn3Y0uG": {
      "id": "recm9GGNQwNn3Y0uG",
      "createdTime": "2018-10-17T22:33:34.000Z",
      "name": "Queena Xu",
      "positionIds": [
        "recKgeJ2ciU7ic8Kr",
        "recuvB9shc9cyE0Sw"
      ]
    },
    "rec8Bd60VEzSli6cO": {
      "id": "rec8Bd60VEzSli6cO",
      "createdTime": "2018-10-04T02:47:47.000Z",
      "name": "Richard Wu",
      "positionIds": [
        "recjT5aFHb5TsnMbd"
      ]
    },
    "recKBDLL5lmSDiNTY": {
      "id": "recKBDLL5lmSDiNTY",
      "createdTime": "2018-10-17T22:58:19.000Z",
      "name": "Richard Xu",
      "positionIds": [
        "rec0CTTAqpcyachz4"
      ]
    },
    "recCmof4I4TUVFaZ3": {
      "id": "recCmof4I4TUVFaZ3",
      "createdTime": "2018-10-17T22:58:36.000Z",
      "name": "Robert Yu",
      "positionIds": [
        "recbGFrP03BLwiDTs"
      ]
    },
    "recn3dcDlodxrX69h": {
      "id": "recn3dcDlodxrX69h",
      "createdTime": "2018-10-17T22:07:11.000Z",
      "name": "Rosemary Hua",
      "positionIds": [
        "recyjjB0B4LTiqJLS"
      ]
    },
    "recH0VHagnAyTBeKG": {
      "id": "recH0VHagnAyTBeKG",
      "createdTime": "2018-10-17T22:34:00.000Z",
      "name": "Ruiling Wen",
      "positionIds": [
        "rec59rkeuQcbbDZ7V"
      ]
    },
    "reczfMxHZL2l3qHUm": {
      "id": "reczfMxHZL2l3qHUm",
      "createdTime": "2018-10-17T22:34:28.000Z",
      "name": "Ryan Barroga",
      "positionIds": [
        "recKCKwCa2KwUjvDm",
        "recq43Z718PFa7rNz"
      ]
    },
    "recLla3pij2rxqiUK": {
      "id": "recLla3pij2rxqiUK",
      "createdTime": "2018-10-17T22:42:07.000Z",
      "name": "Ryan Ta",
      "positionIds": [
        "rec58m0QuSsWYPy3i",
        "recpJ858d4kQB4EPr",
        "recPPz4kBRV4YoVeU"
      ]
    },
    "recBls2iU2PDgwqk5": {
      "id": "recBls2iU2PDgwqk5",
      "createdTime": "2018-10-17T23:48:31.000Z",
      "name": "Ryan Wong",
      "positionIds": [
        "recbuA6BMMXIx3eRa",
        "rec9wN29UB9PSc3bX"
      ]
    },
    "recxAxAFK4ULZWdyr": {
      "id": "recxAxAFK4ULZWdyr",
      "createdTime": "2018-10-04T02:47:40.000Z",
      "name": "Sean Zhu",
      "positionIds": [
        "recc9EiCmYyLyzfT0"
      ]
    },
    "recl0MAVB8URRERpr": {
      "id": "recl0MAVB8URRERpr",
      "createdTime": "2018-10-18T00:30:36.000Z",
      "name": "Seung Joo Ahn",
      "positionIds": [
        "recXaCCAUDQHqukTy",
        "reczOglPA7H4rKZD3"
      ]
    },
    "rec5hvcjPKk5mJ79f": {
      "id": "rec5hvcjPKk5mJ79f",
      "createdTime": "2018-10-17T22:08:39.000Z",
      "name": "Shawn Han",
      "positionIds": [
        "rec5EJMij7f7KaN2X"
      ]
    },
    "recxrlu4YBT1PwNh6": {
      "id": "recxrlu4YBT1PwNh6",
      "createdTime": "2018-10-17T22:32:33.000Z",
      "name": "Shawn Mei",
      "positionIds": [
        "recmv9EMTgBKiRcBw"
      ]
    },
    "recfvSbnynEXEzob9": {
      "id": "recfvSbnynEXEzob9",
      "createdTime": "2018-10-17T22:59:16.000Z",
      "name": "Sheldon Chen",
      "positionIds": [
        "rec2UtXTU4cm9hpjF"
      ]
    },
    "recLibXAEVugrELPu": {
      "id": "recLibXAEVugrELPu",
      "createdTime": "2018-10-17T22:42:27.000Z",
      "name": "Shirley Li",
      "positionIds": [
        "recbAqu4Hf1mDgAwf",
        "rec9JZQjQwYloJops"
      ]
    },
    "reccl1uy2ajMiq1O2": {
      "id": "reccl1uy2ajMiq1O2",
      "createdTime": "2018-10-17T22:21:07.000Z",
      "name": "Simon Chen",
      "positionIds": [
        "recy3JKUOpqTV1Jxr",
        "rec6ZCBxkhHM9WUFj"
      ]
    },
    "recqzbrK1cnXPa5Wd": {
      "id": "recqzbrK1cnXPa5Wd",
      "createdTime": "2018-10-17T23:52:51.000Z",
      "name": "Soo Rim Choi",
      "positionIds": [
        "recNbD8Ax95wnPUXH",
        "recuQShydZMDeFnk8"
      ]
    },
    "recdfUETv4veF8fUU": {
      "id": "recdfUETv4veF8fUU",
      "createdTime": "2018-10-04T02:45:10.000Z",
      "name": "Stephanie Kim",
      "positionIds": [
        "reciXg7xWpz61Vwo6",
        "rec2GqsZxdnvsmOMW",
        "recZFzCcA5n9Tuyij",
        "rec1vQvWschmPVm61",
        "recW91BcvTt3RoJxB"
      ]
    },
    "recv47ketfwyrgVAn": {
      "id": "recv47ketfwyrgVAn",
      "createdTime": "2018-10-17T22:31:39.000Z",
      "name": "Surmayee Tetarbe",
      "positionIds": [
        "recUFrFlIpVABapxl"
      ]
    },
    "recgVaA2OjSYAR8oD": {
      "id": "recgVaA2OjSYAR8oD",
      "createdTime": "2018-10-17T22:34:50.000Z",
      "name": "Susan Shen",
      "positionIds": [
        "recNLqvbB61XluNA8",
        "recSmcBMOj1lx3jUF"
      ]
    },
    "recoqVLPTKw2gNmA1": {
      "id": "recoqVLPTKw2gNmA1",
      "createdTime": "2018-10-17T22:35:13.000Z",
      "name": "Swan Kim",
      "positionIds": [
        "rectJjLvB0uQXlcFA"
      ]
    },
    "recDPvhPtHzXb8D5w": {
      "id": "recDPvhPtHzXb8D5w",
      "createdTime": "2018-10-17T22:50:43.000Z",
      "name": "Tan Vu",
      "positionIds": [
        "recBWKJ7nZnK49IUI"
      ]
    },
    "recRcjNWpPIB6MhSE": {
      "id": "recRcjNWpPIB6MhSE",
      "createdTime": "2018-10-17T22:35:41.000Z",
      "name": "Tiffanie Abacan",
      "positionIds": [
        "recxowEgkbgyTq4w4",
        "recwvKkgeHb2SAKOZ",
        "rechord0CVTrFiwm9"
      ]
    },
    "recULtLwOyASphrEA": {
      "id": "recULtLwOyASphrEA",
      "createdTime": "2018-10-18T00:14:37.000Z",
      "name": "Tom Cheah",
      "positionIds": [
        "recTT7RxdkCfw3qOk"
      ]
    },
    "recNxGjKy27HT3XML": {
      "id": "recNxGjKy27HT3XML",
      "createdTime": "2018-10-18T00:34:42.000Z",
      "name": "Trisha Giron",
      "positionIds": [
        "recPvx31lUvOTMzWI",
        "recWvtIchtUL1bcn7",
        "rec1fMNZGppXBQW6N",
        "rec1VNrCd7imnrsrf"
      ]
    },
    "recv8VS9Ix4izAxLg": {
      "id": "recv8VS9Ix4izAxLg",
      "createdTime": "2018-10-18T00:15:47.000Z",
      "name": "Vincent Young",
      "positionIds": [
        "recliQv8CcMvX9Lz7"
      ]
    },
    "reczKuh2qJJf55cf0": {
      "id": "reczKuh2qJJf55cf0",
      "createdTime": "2018-10-17T23:55:02.000Z",
      "name": "Vivian Tieu",
      "positionIds": [
        "reciqnqcItxwiB9ZR"
      ]
    },
    "recb1hKgi5bRfTlH9": {
      "id": "recb1hKgi5bRfTlH9",
      "createdTime": "2018-10-17T22:51:02.000Z",
      "name": "Wenhao Liao",
      "positionIds": [
        "recaKAVUiPS4axGXZ"
      ]
    },
    "recjMN8Zx4KlJGDUL": {
      "id": "recjMN8Zx4KlJGDUL",
      "createdTime": "2018-10-17T22:43:09.000Z",
      "name": "William Zheng",
      "positionIds": [
        "recsR3dCQFQBuj3Qs"
      ]
    },
    "reccusci4MPy2I4i4": {
      "id": "reccusci4MPy2I4i4",
      "createdTime": "2018-10-17T22:43:50.000Z",
      "name": "Winn Cui",
      "positionIds": [
        "recWEZvMv7ktz9kHI",
        "reccYYrL6cPXyeh6H",
        "recF4UufceUmsaz3Y"
      ]
    },
    "recrEeHaWMhxv56jE": {
      "id": "recrEeHaWMhxv56jE",
      "createdTime": "2018-10-17T22:21:32.000Z",
      "name": "Xinuye Wang",
      "positionIds": [
        "recdYsI8CVYMgmLJ4"
      ]
    },
    "reczF9UfpTvqHGWjE": {
      "id": "reczF9UfpTvqHGWjE",
      "createdTime": "2018-10-17T22:27:10.000Z",
      "name": "Xinyue Wang",
      "positionIds": [
        "recsvU27ydWdr0eSV"
      ]
    },
    "recHftRqWaKYQyKDb": {
      "id": "recHftRqWaKYQyKDb",
      "createdTime": "2018-10-18T00:34:19.000Z",
      "name": "Yanni Velasquez",
      "positionIds": [
        "rec71FUZBo7jrpSqJ"
      ]
    },
    "recxzpEID6oEGOEtD": {
      "id": "recxzpEID6oEGOEtD",
      "createdTime": "2018-10-18T00:51:14.000Z",
      "name": "Zoe Marsh",
      "positionIds": [
        "recc62zVWNCbaDchq"
      ]
    },
    "recXSiCVLPXdDO5g8": {
      "id": "recXSiCVLPXdDO5g8",
      "createdTime": "2018-10-17T22:27:50.000Z",
      "name": "Zoey Kenny",
      "positionIds": [
        "recVXN0oNRF3K1oY8"
      ]
    },
    "rect8pr6b0mWltnRl": {
      "id": "rect8pr6b0mWltnRl",
      "createdTime": "2018-11-10T18:30:34.000Z",
      "name": "Emily Zhang",
      "positionIds": [
        "recUMDlSdJPSLOorB"
      ]
    },
    "recNZcauY6F7F5QL9": {
      "id": "recNZcauY6F7F5QL9",
      "createdTime": "2018-11-10T18:30:46.000Z",
      "name": "Joseph Jiang",
      "positionIds": [
        "rechMfFiXW6u3hig7"
      ]
    },
    "recm7CbBymkkW63kg": {
      "id": "recm7CbBymkkW63kg",
      "createdTime": "2018-11-10T18:30:58.000Z",
      "name": "Jennifer Zhang",
      "positionIds": [
        "reccuIpsZHfgfMdHZ"
      ]
    },
    "recZKJLk6t9beZRcA": {
      "id": "recZKJLk6t9beZRcA",
      "createdTime": "2018-11-10T18:37:35.000Z",
      "name": "Angelica Nguyen",
      "positionIds": [
        "recfbZU6l6HbLMMLB"
      ]
    },
    "rec4njl6dqr2zVeaj": {
      "id": "rec4njl6dqr2zVeaj",
      "createdTime": "2018-11-10T18:37:42.000Z",
      "name": "Princeton Liu",
      "positionIds": [
        "recStMEX4GrBluEmG"
      ]
    },
    "rec0Ban1Wo4hXmuY5": {
      "id": "rec0Ban1Wo4hXmuY5",
      "createdTime": "2018-11-10T18:37:50.000Z",
      "name": "Brian Nguyen",
      "positionIds": [
        "recZUkLW1oR8lDFrJ"
      ]
    },
    "rect9x4ZqQWezoKQK": {
      "id": "rect9x4ZqQWezoKQK",
      "createdTime": "2018-11-10T18:38:01.000Z",
      "name": "Shenelle Perera",
      "positionIds": [
        "recrGxiMaXDrZ7TAf"
      ]
    },
    "recSHMwX0RknR4WdM": {
      "id": "recSHMwX0RknR4WdM",
      "createdTime": "2018-11-10T18:38:12.000Z",
      "name": "Jonathan Huang",
      "positionIds": [
        "reczlfmjUsmzRdu6h"
      ]
    },
    "recrhMG6f41h7ppYu": {
      "id": "recrhMG6f41h7ppYu",
      "createdTime": "2018-11-10T18:38:34.000Z",
      "name": "Ann Deng",
      "positionIds": [
        "recEMop3PhgfDFccm"
      ]
    },
    "recdFjZHoucW4IFIv": {
      "id": "recdFjZHoucW4IFIv",
      "createdTime": "2018-11-10T18:38:50.000Z",
      "name": "Ethan Chung",
      "positionIds": [
        "recTJSDEJuUa3c8aS"
      ]
    }
  }
  Groups = {
    "recs2aRRotZKq6Lvm": {
      "id": "recs2aRRotZKq6Lvm",
      "createdTime": "2018-10-17T21:52:32.000Z",
      "name": "AFX Founders 2011-2012",
      "positionIds": [
        "recNEQCDVauvqQrk5",
        "recgbIu7VI553Sybn",
        "recyjjB0B4LTiqJLS"
      ],
      "type": "board",
      "boardSemesterId": [
        "rec940RvbrFn1Y5cD"
      ]
    },
    "reclDFFQA8U6TkNNU": {
      "id": "reclDFFQA8U6TkNNU",
      "createdTime": "2018-10-17T21:54:41.000Z",
      "name": "AFX Board Spring 2013",
      "positionIds": [
        "rec5EJMij7f7KaN2X",
        "recitXxPLG94ld8ct",
        "rec1KRcNkLaFDWaly",
        "recTAdsbclNgXbvey",
        "rec3kK4A9qdmQXQdH",
        "recU54lLZqUz4LmbK",
        "recWqs23aXzwyEOyh",
        "recBg9E1RVPt9HKfe",
        "recnOfQihz89RL3zI"
      ],
      "type": "board",
      "boardSemesterId": [
        "recNoD9Wx0WqCgYfo"
      ]
    },
    "rec7AuUevOSkKy0wb": {
      "id": "rec7AuUevOSkKy0wb",
      "createdTime": "2018-10-17T21:54:52.000Z",
      "name": "AFX Board Summer/Fall 2013",
      "positionIds": [
        "recOZGvfMNPABr1FI",
        "recxlFvvUfFDj8Hyj",
        "rec2ArD4zfUhlWKwj",
        "recH2qy05mNoxqz5l",
        "reccuKlOcC6NdTOwO",
        "rec61dgtt7fFuPdUc",
        "recmv9EMTgBKiRcBw",
        "recYinURnABbJOFqe",
        "recWHyWMs5CQgy6L2",
        "recUFrFlIpVABapxl"
      ],
      "type": "board",
      "boardSemesterId": [
        "reclq9NGrcGBX4Kik"
      ]
    },
    "recefYCYkTSsb9UBW": {
      "id": "recefYCYkTSsb9UBW",
      "createdTime": "2018-10-17T21:55:22.000Z",
      "name": "AFX Board Spring 2014",
      "positionIds": [
        "recyOfaGap9N8vUfi",
        "recpsLx44CYFgFzqe",
        "recZRkwOqdub8rIb4",
        "rec4z6wz1bId6q4v3",
        "recvXhAMyqnKWxeqy",
        "rec95Nr6rB535jmwh",
        "rec7CxNBh9H35Vj0A",
        "recHPFEfJg3chEyPc",
        "recwHz7FQK4hCm7i7",
        "reci5J6MOS8tphZcF",
        "recxsfg4zOPLAqf9R",
        "recqBbjzibVHDFjwq",
        "rec6ZCBxkhHM9WUFj",
        "recCV8UTZJWjUgyYE"
      ],
      "type": "board",
      "boardSemesterId": [
        "rec7OSoLcUa7AXoRj"
      ]
    },
    "recvLyVuB39eaBWUG": {
      "id": "recvLyVuB39eaBWUG",
      "createdTime": "2018-10-17T21:55:32.000Z",
      "name": "AFX Board Summer/Fall 2014",
      "positionIds": [
        "recsZh1l7cUmPLqPW",
        "rec9arrsO6ltYsTa9",
        "recWyPZFROrnMhz6W",
        "recdcLCumD1Q3KkNn",
        "recPE6Z2zTr4HPmTD",
        "rec54wo9l7lwIPoDh",
        "recTrl8bPc8liK962",
        "recowepyieoCN1uVQ",
        "recCYFGpcjEB5aPVa",
        "recnVPyrNQBtG10yJ",
        "recFik0UCmCjnsmAX",
        "recAKbFuUkG4O5I3F",
        "recy3JKUOpqTV1Jxr",
        "recdYsI8CVYMgmLJ4",
        "recPgnkPYdTsaXuLW",
        "recFneoMUrd7Qitlf",
        "recpoOliHHmwDIBof",
        "recWBvRimNr5bCWyI",
        "rec7h2sY81YQeHgiB"
      ],
      "type": "board",
      "boardSemesterId": [
        "recbm2ludN2zPK0pF"
      ]
    },
    "rec5wYZUm8pLKCX3T": {
      "id": "rec5wYZUm8pLKCX3T",
      "createdTime": "2018-10-17T21:55:38.000Z",
      "name": "AFX Board Spring 2015",
      "positionIds": [
        "recyux8jbE3ZvF4X6",
        "recVF1tjI67BNcwu0",
        "recsaxUF87czITRBf",
        "recOTsrW10YbgxArn",
        "recBGlHz815nSSdWi",
        "recRYxRcI1EBvHWWr",
        "recL2c46u3NFrncta",
        "recYDrXQ1G6b6s9oj",
        "recvod600x05DuouE",
        "recsvU27ydWdr0eSV",
        "recVXN0oNRF3K1oY8",
        "recftaxOirG0FO2uP",
        "reclSqlKcWOPSBmnt",
        "recsREBChFaltwzAo",
        "recqlraIAykE9FI3S"
      ],
      "type": "board",
      "boardSemesterId": [
        "recciR1KW7mB2Xl9Q"
      ]
    },
    "recBUiPZV1HCyrITE": {
      "id": "recBUiPZV1HCyrITE",
      "createdTime": "2018-10-17T21:55:48.000Z",
      "name": "AFX Board Summer/Fall 2015",
      "positionIds": [
        "rec6POiIFWbnVhXji",
        "recwIOfNVdHw2rgi9",
        "reclH2WaVrHdkjc1p",
        "recCTWLDbdrqn2nYJ",
        "recvQimuy5LNCjCSH",
        "recpDL3KDWfgRHxc4",
        "recCsdE1LTyQrjMBW",
        "rec8nwJXLJ37OV0rQ",
        "recBfzJCrlmmV2q5q",
        "recKgeJ2ciU7ic8Kr",
        "rec59rkeuQcbbDZ7V",
        "recKCKwCa2KwUjvDm",
        "recNLqvbB61XluNA8",
        "rectJjLvB0uQXlcFA",
        "recxowEgkbgyTq4w4",
        "recnJSRWIQMhZbQEs",
        "recLJGgsdMILy5XOd",
        "recVhmcmenPkMyFWt",
        "recXaCCAUDQHqukTy"
      ],
      "type": "board",
      "boardSemesterId": [
        "recY0nIuoOQBEiove"
      ]
    },
    "recWYlWdGZIv2Cu5Y": {
      "id": "recWYlWdGZIv2Cu5Y",
      "createdTime": "2018-10-17T21:56:15.000Z",
      "name": "AFX Board Spring 2016",
      "positionIds": [
        "recMZaerYaUo8bIa2",
        "recD9K0ch5nqXUBlx",
        "recboh27pftuiP1MF",
        "rec0xXxNqIKyo0acv",
        "rec1eoD5Alq8iuRRR",
        "recvkizTwIECyfD8A",
        "recCUymelnvLksVOH",
        "recRn726PeTJUTlp1",
        "recIjhqWDW2hFdXNs",
        "recZpYxJZgts0bfGu",
        "recuvB9shc9cyE0Sw",
        "recq43Z718PFa7rNz",
        "rec58m0QuSsWYPy3i",
        "recbAqu4Hf1mDgAwf",
        "recwvKkgeHb2SAKOZ",
        "recsR3dCQFQBuj3Qs",
        "recWEZvMv7ktz9kHI",
        "rec3AKMveOXLNezy2",
        "recQJrl4Ir3zMeFhy",
        "reccimMJ4z1CZxCEn",
        "reczOglPA7H4rKZD3"
      ],
      "type": "board",
      "boardSemesterId": [
        "recCb5r44adqba2uh"
      ]
    },
    "reck4OThY5wJJLrfc": {
      "id": "reck4OThY5wJJLrfc",
      "createdTime": "2018-10-17T21:56:39.000Z",
      "name": "AFX Board Summer/Fall 2016",
      "positionIds": [
        "recgHxVPeQJD7UKwT",
        "recNGBiCiOwgqKOtw",
        "recTLInL69e8UmYh7",
        "rec8aO9PIE26GJjlU",
        "rec244XFvK8gGouDq",
        "recWSwGnmjnUW7jWa",
        "recZomHaoY9DQQBpn",
        "rechneZNwlBVrMuBv",
        "recvYMH4qGUQzU6fU",
        "recGkQe9WXhmJPUn2",
        "recAuBgjfYB2N5lD4",
        "rec16ckDJqJqxrZPg",
        "recpJ858d4kQB4EPr",
        "rec9JZQjQwYloJops",
        "rec2GqsZxdnvsmOMW",
        "recSmcBMOj1lx3jUF",
        "recBWKJ7nZnK49IUI",
        "recaKAVUiPS4axGXZ",
        "reccYYrL6cPXyeh6H",
        "recQafxPMYHX8f1ON",
        "reculGDwitMiaaY6N",
        "rec71FUZBo7jrpSqJ",
        "recPvx31lUvOTMzWI",
        "recA29CYm8ous5YmT",
        "recoz3ryR7fQCDoUq",
        "rec7zqZoqYTawHa25"
      ],
      "type": "board",
      "boardSemesterId": [
        "rec46uOkPIMRT94Yl"
      ]
    },
    "recSb1AY0752pOYe6": {
      "id": "recSb1AY0752pOYe6",
      "createdTime": "2018-10-17T21:56:46.000Z",
      "name": "AFX Board Spring 2017",
      "positionIds": [
        "recZAsgx9Pww9moqU",
        "rectPeFl8L3r1BHn3",
        "recRnQm10089GTbld",
        "recwtb0YqUyFUnBKp",
        "recqnIywOC0Vr3Rlc",
        "recOzSRjNX9vREosk",
        "recUoDEMVQwdj8pdF",
        "rec2eY3R0ExDIo5rY",
        "recvdEHm4j3CBAHaL",
        "recs15zKfmfMsjBgE",
        "recRhyhlWtKnOo3f8",
        "recWGoUj92415MYGK",
        "reciu5395LaD08ooO",
        "recA5AtEHnQjODYey",
        "rec0CTTAqpcyachz4",
        "recbGFrP03BLwiDTs",
        "recPPz4kBRV4YoVeU",
        "rec2UtXTU4cm9hpjF",
        "recZFzCcA5n9Tuyij",
        "recF4UufceUmsaz3Y",
        "recWvtIchtUL1bcn7",
        "recEdqoEkjRTml6xZ",
        "recQ7VUlKsTaz1PA9",
        "rec8ELbYUBDN8u2M9",
        "recQjFIWuzTruoDx8"
      ],
      "type": "board",
      "boardSemesterId": [
        "recZUIegVvDgUQVqN"
      ]
    },
    "recV60tDu2ac60oV5": {
      "id": "recV60tDu2ac60oV5",
      "createdTime": "2018-09-28T02:24:41.000Z",
      "name": "AFX Board Summer/Fall 2017",
      "positionIds": [
        "recDnBRrmDOgpil2Z",
        "recIZvsIUY7Lf3WCZ",
        "recHuonEXK26KidcQ",
        "reciXg7xWpz61Vwo6",
        "rec0tUiDaoQU785n1",
        "recklML4eO8FNCc0Y",
        "recbxMFtISlTjSCWK",
        "recWjLug9n4YvCuex",
        "recYGmt1dDyVGwtoO",
        "recqMnjyPBDVrrStY",
        "recePDUmIP5pFEsTc",
        "recKbSLDMtkNmNi57",
        "recyh95M614yPayiO",
        "recJqvj4x8bg3k1Gb",
        "recN8aZVT9qu9xG9j",
        "recKPisyjQ5ifZENH",
        "recOpta8sOgUHtIAv",
        "recNCn5iSCGzeCbGa",
        "recunId6aCRH4Jc2z",
        "rec8m5xHXr2m62FV4",
        "rechord0CVTrFiwm9",
        "recOJEHgsz20gcZgQ",
        "recD8ZQSM8cA7PbBW",
        "rec1fMNZGppXBQW6N",
        "recJ4qaFgB7HGebc7"
      ],
      "type": "board",
      "boardSemesterId": [
        "recNgq1uYEeYnepMi"
      ]
    },
    "recPWlKgpGEXDmwBI": {
      "id": "recPWlKgpGEXDmwBI",
      "createdTime": "2018-10-17T21:57:08.000Z",
      "name": "AFX Board Spring 2018",
      "positionIds": [
        "reckBSsIr0Y8teuIl",
        "rec1vQvWschmPVm61",
        "recOm0w7AwBFrZEh3",
        "recTX06RHpFGNzK9T",
        "rec8fq44tkasMgUFF",
        "recbuA6BMMXIx3eRa",
        "recY0wr9dD6XrplEt",
        "rec1ej6auMgWYirwN",
        "recgAAXh8WKL1kcO0",
        "recssZGhieI9WjLJB",
        "recf2TJ7oiYZ3ENj7",
        "recNbD8Ax95wnPUXH",
        "recKH6lInnnP3rq5v",
        "recySsvbLKyHk9sfh",
        "reciqnqcItxwiB9ZR",
        "recfaaat8NOYpX42H",
        "rec7RNbDRBHYxdKqM",
        "rec0KlBZwxCoTMOFo",
        "reclCdruw9w77flnr",
        "recSEORUAvZKBuKAW",
        "recIxLsf6AhkAYZjp",
        "rec3pE1flR2WcvqhZ",
        "recc62zVWNCbaDchq",
        "rec1VNrCd7imnrsrf",
        "recC1yAk0chU3BGIV",
        "recVcUQWzf0jSbWCU"
      ],
      "type": "board",
      "boardSemesterId": [
        "recmdSIsenKNx7Sgq"
      ]
    },
    "recacbKTL0BnOU1WC": {
      "id": "recacbKTL0BnOU1WC",
      "createdTime": "2018-10-17T21:57:27.000Z",
      "name": "AFX Board Summer/Fall 2018",
      "positionIds": [
        "recW91BcvTt3RoJxB",
        "recJjiPD0zp7cn6cG",
        "recgR8oIWWtpRwQ41",
        "recvvmAiFUt1nQqg3",
        "rec2TRZwtVni7Qwvf",
        "rec9wN29UB9PSc3bX",
        "recjefOkZ4BA9GSdr",
        "recbYs6ty7R081gTL",
        "recLqTEOmtwwffBpb",
        "recmDiq3nYjxVyJde",
        "recQBI7hJmK8Dd6qe",
        "recuQShydZMDeFnk8",
        "recDDSSEqMN7mjYIQ",
        "recFf0bUFGJ0IZ7rg",
        "recTT7RxdkCfw3qOk",
        "recliQv8CcMvX9Lz7",
        "recEx6BW29gbfazMi",
        "recV1ZpVswX7PICAt",
        "recEpa6g2eK4kepYU",
        "recqGZOgvSyf9Gphr",
        "recQam7kgl8ewGaTj",
        "reclcIJZgkU1xS7gL",
        "recu64G90wcXnucXb",
        "recBsur5aAWJt0obi",
        "recRQrCsjSiIfgJeF",
        "recvOgtgGVK39lPR9"
      ],
      "type": "board",
      "boardSemesterId": [
        "recJ4hDACtEzrRW8f"
      ]
    },
    "recAlXOGF37p5Qrtk": {
      "id": "recAlXOGF37p5Qrtk",
      "createdTime": "2018-09-28T02:24:41.000Z",
      "name": "AFX Tech Fall 2018",
      "positionIds": [
        "recc9EiCmYyLyzfT0",
        "recjT5aFHb5TsnMbd",
        "reccrJOnJTsEoi3Ec"
      ],
      "type": "board",
      "boardSemesterId": [
        "rec1E4dkGYXVTL2nr"
      ]
    },
    "recJGCk5JPfHJ5nI5": {
      "id": "recJGCk5JPfHJ5nI5",
      "createdTime": "2018-11-03T19:26:47.000Z",
      "name": "AFX Smol Chunks",
      "type": "team",
      "teamPicture": [
        {
          "id": "attcq6IkKdvyJHmCQ",
          "url": "https://dl.airtable.com/473AqyZ0R0u2jEpn5fPM_team.jpg",
          "filename": "team.jpg",
          "size": 86127,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/XI0cfSxhQTufdxZWkHqR_small_team.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/VomYSO2KRiCTxrgEH50v_large_team.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/TcsdYzJxTXeezPMePK9a_full_team.jpg",
              "width": 1080,
              "height": 716
            }
          }
        }
      ],
      "videoUrl": "https://www.youtube.com/watch?v=VrUtLZAtkbg",
      "teamSemesterId": [
        "recQyG9LRNGj3oJL9"
      ],
      "positionIds": [
        "recUMDlSdJPSLOorB",
        "reccuIpsZHfgfMdHZ",
        "rechMfFiXW6u3hig7"
      ]
    },
    "recA5CvMHkDs0G0M2": {
      "id": "recA5CvMHkDs0G0M2",
      "createdTime": "2018-10-27T20:15:26.000Z",
      "name": "AFX </3",
      "type": "team",
      "teamPicture": [
        {
          "id": "attyc37NnQ2g4cVHi",
          "url": "https://dl.airtable.com/blhxG1WiTWyQPATMUQ2Y_team.jpg",
          "filename": "team.jpg",
          "size": 86127,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/khbgEg8FRhyaFjKGRYDh_small_team.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/aCgQHGNSf6MdHqvVdd1f_large_team.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/wQDSDjj4QQK7Ct20dDvl_full_team.jpg",
              "width": 1080,
              "height": 716
            }
          }
        }
      ],
      "videoUrl": "https://www.youtube.com/watch?v=VrUtLZAtkbg",
      "teamSemesterId": [
        "recJ4hDACtEzrRW8f"
      ],
      "positionIds": [
        "recrGxiMaXDrZ7TAf",
        "reczlfmjUsmzRdu6h"
      ]
    },
    "recjSiKn95KAHbj4A": {
      "id": "recjSiKn95KAHbj4A",
      "createdTime": "2018-10-27T20:31:34.000Z",
      "name": "AFX Boom",
      "type": "team",
      "teamPicture": [
        {
          "id": "attcq6IkKdvyJHmCQ",
          "url": "https://dl.airtable.com/473AqyZ0R0u2jEpn5fPM_team.jpg",
          "filename": "team.jpg",
          "size": 86127,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/XI0cfSxhQTufdxZWkHqR_small_team.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/VomYSO2KRiCTxrgEH50v_large_team.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/TcsdYzJxTXeezPMePK9a_full_team.jpg",
              "width": 1080,
              "height": 716
            }
          }
        }
      ],
      "videoUrl": "https://www.youtube.com/watch?v=VrUtLZAtkbg",
      "teamSemesterId": [
        "recJ4hDACtEzrRW8f"
      ],
      "positionIds": [
        "recfbZU6l6HbLMMLB",
        "recZUkLW1oR8lDFrJ",
        "recStMEX4GrBluEmG"
      ]
    },
    "recXo2Wr1dwrRK7x7": {
      "id": "recXo2Wr1dwrRK7x7",
      "createdTime": "2018-10-27T20:31:34.000Z",
      "name": "AFX ETA",
      "type": "team",
      "teamPicture": [
        {
          "id": "attwmYCNB15dM9wIr",
          "url": "https://dl.airtable.com/sjqOTx8Q7OJ8QtKfU2ky_team.jpg",
          "filename": "team.jpg",
          "size": 86127,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/e8ndFOBHQaGwRQX88lcA_small_team.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/f0FdxbsjTTqkpGDSQoVV_large_team.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/G149s14nTHTg8VchFmTT_full_team.jpg",
              "width": 1080,
              "height": 716
            }
          }
        }
      ],
      "videoUrl": "https://www.youtube.com/watch?v=VrUtLZAtkbg",
      "teamSemesterId": [
        "recJ4hDACtEzrRW8f"
      ],
      "positionIds": [
        "recEMop3PhgfDFccm",
        "recTJSDEJuUa3c8aS"
      ]
    },
    "recgRpBKR0PGtPoaf": {
      "id": "recgRpBKR0PGtPoaf",
      "createdTime": "2018-10-27T20:31:53.000Z",
      "name": "AFX softcore ",
      "type": "team",
      "teamPicture": [
        {
          "id": "attcq6IkKdvyJHmCQ",
          "url": "https://dl.airtable.com/473AqyZ0R0u2jEpn5fPM_team.jpg",
          "filename": "team.jpg",
          "size": 86127,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/XI0cfSxhQTufdxZWkHqR_small_team.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/VomYSO2KRiCTxrgEH50v_large_team.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/TcsdYzJxTXeezPMePK9a_full_team.jpg",
              "width": 1080,
              "height": 716
            }
          }
        }
      ],
      "videoUrl": "https://www.youtube.com/watch?v=VrUtLZAtkbg",
      "positionIds": [
        "recfp4C8UIra4GMBQ"
      ]
    },
    "recn6LlGtFykr0SZo": {
      "id": "recn6LlGtFykr0SZo",
      "createdTime": "2018-11-03T19:33:26.000Z",
      "name": "AFX Slumber Party",
      "type": "team",
      "teamPicture": [
        {
          "id": "attcq6IkKdvyJHmCQ",
          "url": "https://dl.airtable.com/473AqyZ0R0u2jEpn5fPM_team.jpg",
          "filename": "team.jpg",
          "size": 86127,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/XI0cfSxhQTufdxZWkHqR_small_team.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/VomYSO2KRiCTxrgEH50v_large_team.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/TcsdYzJxTXeezPMePK9a_full_team.jpg",
              "width": 1080,
              "height": 716
            }
          }
        }
      ],
      "videoUrl": "https://www.youtube.com/watch?v=VrUtLZAtkbg",
      "teamSemesterId": [
        "recd2QXLEA5yJeKlX"
      ],
      "positionIds": [
        "recKefbsymSU2XoQQ"
      ]
    }
  }
  PersonPositions = {
    "recDnBRrmDOgpil2Z": {
      "id": "recDnBRrmDOgpil2Z",
      "createdTime": "2018-09-28T02:27:24.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attNbkrNw30kwoDbU",
          "url": "https://dl.airtable.com/H4SUfNJtTwWlTMZhlGDP_jeffrey.jpg",
          "filename": "jeffrey.jpg",
          "size": 168467,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/REtkkLeRsiOET7IyCjIw_small_jeffrey.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/8saKcjfRpGJ1JOSgrSTg_large_jeffrey.jpg",
              "width": 512,
              "height": 682
            },
            "full": {
              "url": "https://dl.airtable.com/o4ebLeRBSlSR4QDCfboI_full_jeffrey.jpg",
              "width": 1229,
              "height": 1638
            }
          }
        }
      ],
      "person": [
        "recO6btsvRqZeuJjP"
      ],
      "(You can't directly edit this column)": "Jeffrey Wang - Executive Director"
    },
    "recIZvsIUY7Lf3WCZ": {
      "id": "recIZvsIUY7Lf3WCZ",
      "createdTime": "2018-09-28T02:31:20.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attnwZIYHM5m7K9p7",
          "url": "https://dl.airtable.com/oCj70uE9SBmge1VkgJ4z_kirk.jpg",
          "filename": "kirk.jpg",
          "size": 217842,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ihUvCoQcQ32coLBi3VsV_small_kirk.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/74kcM03DRjfbv6vEkN7P_large_kirk.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/lfTPfPPRh23RT58JUzdg_full_kirk.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "rec4UfhaS3ZcsKOfU"
      ],
      "(You can't directly edit this column)": "Kirk La - Vice Executive"
    },
    "recHuonEXK26KidcQ": {
      "id": "recHuonEXK26KidcQ",
      "createdTime": "2018-09-29T19:04:52.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attS8uZOWk1dQraAl",
          "url": "https://dl.airtable.com/GfDcrp2eQ5mdp3OyfeqM_mei.jpg",
          "filename": "mei.jpg",
          "size": 462804,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/YliUgHOFTrSG3e0y9SAw_small_mei.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/6vBcjqR0TWusgoUGTzOO_large_mei.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/6BmvWivYTimRCnfhKKAB_full_mei.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "reci7k75SMLdI0Wjh"
      ],
      "(You can't directly edit this column)": "Mei Mei - Executive Director"
    },
    "reciXg7xWpz61Vwo6": {
      "id": "reciXg7xWpz61Vwo6",
      "createdTime": "2018-09-29T19:10:47.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attv0ex4WxKem8rqD",
          "url": "https://dl.airtable.com/pGIDYj2WQBu86FlgNA2S_stephanie.jpg",
          "filename": "stephanie.jpg",
          "size": 244741,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/RogOJFgUS5SSL1xhq0SB_small_stephanie.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/2Fy4wVK0QEumWU2CxuZT_large_stephanie.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/WQTQJj1GRQuhuBdCYqur_full_stephanie.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recdfUETv4veF8fUU"
      ],
      "(You can't directly edit this column)": "Stephanie Kim - Vice Executive"
    },
    "rec0tUiDaoQU785n1": {
      "id": "rec0tUiDaoQU785n1",
      "createdTime": "2018-09-29T19:11:01.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attinQ09qDACCQtrO",
          "url": "https://dl.airtable.com/y2uhYyGTVGpWr8po0WOQ_annie.jpg",
          "filename": "annie.jpg",
          "size": 626070,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/uhcZH2tQNeh4aL7zH5gQ_small_annie.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/t2wONZCpRqADkwCZzk23_large_annie.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/yYEd8WmQqHZF03NBPDtw_full_annie.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recK9H06reG3BErUU"
      ],
      "(You can't directly edit this column)": "Annie Wang - Events Chair"
    },
    "recklML4eO8FNCc0Y": {
      "id": "recklML4eO8FNCc0Y",
      "createdTime": "2018-09-29T19:11:17.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "atthfYe98e1KWsss4",
          "url": "https://dl.airtable.com/82Fec3JCS7q8VwogQkDA_helen.jpg",
          "filename": "helen.jpg",
          "size": 5268076,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/neO6SEpPSVqsWFVeY5Fn_small_helen.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/0ea4mNTfReyYcrR8UgPA_large_helen.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/LBP8XJCSga2qOx4Sxr8F_full_helen.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recCQaNAzI6bTDsQo"
      ],
      "(You can't directly edit this column)": "Mengyan Li - Events Chair"
    },
    "recbxMFtISlTjSCWK": {
      "id": "recbxMFtISlTjSCWK",
      "createdTime": "2018-09-29T19:11:29.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attXlm09JHmPIOePQ",
          "url": "https://dl.airtable.com/GD51ArxxSly0TF4qAmsZ_chloe.jpg",
          "filename": "chloe.jpg",
          "size": 464316,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ssuSL8s8RjK5DmoWrx8K_small_chloe.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/KKa67cc5TVqsZdgTu4O9_large_chloe.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/EGreLGnPSLDSw9NgE53a_full_chloe.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "reclQY37yXdhBjDGH"
      ],
      "(You can't directly edit this column)": "Chloe Ding - Events Chair"
    },
    "recWjLug9n4YvCuex": {
      "id": "recWjLug9n4YvCuex",
      "createdTime": "2018-09-29T19:11:38.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attG5m1kQy4sYV4el",
          "url": "https://dl.airtable.com/kvxE7YWiSaKOfkjkcBZJ_aileen.jpg",
          "filename": "aileen.jpg",
          "size": 400846,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/y8QCJklQeGloBZdWABIZ_small_aileen.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/KxR4onzyTDmlIkUGge1b_large_aileen.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/c2ocC38DTISMY0O222vI_full_aileen.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recaIBY8nq01IWPqM"
      ],
      "(You can't directly edit this column)": "Aileen Gui - Events Chair"
    },
    "recYGmt1dDyVGwtoO": {
      "id": "recYGmt1dDyVGwtoO",
      "createdTime": "2018-09-29T19:11:56.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attSZd79QwMVxgMhF",
          "url": "https://dl.airtable.com/TTlOsNhfSwqN1MzT8WgX_nolan.jpg",
          "filename": "nolan.jpg",
          "size": 265066,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/RqwRExlASoq4JzYcBZid_small_nolan.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/CW5708tKSg2BHm54fK0e_large_nolan.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/22Jll7FQQVWUWztn96XA_full_nolan.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recPgjUGxFwXXOPoQ"
      ],
      "(You can't directly edit this column)": "Nolan Pokpongkiat - Finance Chair"
    },
    "recqMnjyPBDVrrStY": {
      "id": "recqMnjyPBDVrrStY",
      "createdTime": "2018-09-29T19:12:04.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attKPTpxkWy0FqPId",
          "url": "https://dl.airtable.com/7C61UgTMROCgEu9KoPi0_angie.jpg",
          "filename": "angie.jpg",
          "size": 231986,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/9m1RotTURBSFVgNw1rKU_small_angie.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/5I3PZikPRo2dxH3L0Rqs_large_angie.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/TrKtF8lSRWgBFH7MrEI8_full_angie.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recGX7657yT6j0Wby"
      ],
      "(You can't directly edit this column)": "Angie Liao - Finance Chair"
    },
    "recc9EiCmYyLyzfT0": {
      "id": "recc9EiCmYyLyzfT0",
      "createdTime": "2018-10-04T02:47:30.000Z",
      "group": [
        "recAlXOGF37p5Qrtk"
      ],
      "positionTitle": "Committee Lead",
      "picture": [
        {
          "id": "attUbCuqI2AbYhf1h",
          "url": "https://dl.airtable.com/BECpTCkgTSyeH81ecth2_39939369_2099407156756501_5536017118589353984_o.jpg",
          "filename": "39939369_2099407156756501_5536017118589353984_o.jpg",
          "size": 654455,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/rouakvsDSK6qymk0K8io_small_39939369_2099407156756501_5536017118589353984_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/a21ovRoHQp8TchdSRmin_large_39939369_2099407156756501_5536017118589353984_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/3Nhj0IhPSEGyhDJgmOKx_full_39939369_2099407156756501_5536017118589353984_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recxAxAFK4ULZWdyr"
      ],
      "(You can't directly edit this column)": "Sean Zhu - Committee Lead"
    },
    "recjT5aFHb5TsnMbd": {
      "id": "recjT5aFHb5TsnMbd",
      "createdTime": "2018-10-04T02:48:05.000Z",
      "group": [
        "recAlXOGF37p5Qrtk"
      ],
      "positionTitle": "Project Lead",
      "person": [
        "rec8Bd60VEzSli6cO"
      ],
      "(You can't directly edit this column)": "Richard Wu - Project Lead"
    },
    "reccrJOnJTsEoi3Ec": {
      "id": "reccrJOnJTsEoi3Ec",
      "createdTime": "2018-10-04T02:48:26.000Z",
      "group": [
        "recAlXOGF37p5Qrtk"
      ],
      "positionTitle": "Project Lead",
      "person": [
        "recsIrG39H7oCENrA"
      ],
      "(You can't directly edit this column)": "Clara Park - Project Lead"
    },
    "recNEQCDVauvqQrk5": {
      "id": "recNEQCDVauvqQrk5",
      "createdTime": "2018-10-17T22:04:44.000Z",
      "group": [
        "recs2aRRotZKq6Lvm"
      ],
      "positionTitle": "Founder",
      "picture": [
        {
          "id": "att0p5qbSHYf4qC3C",
          "url": "https://dl.airtable.com/RfleS3BaRLeBxtIk91QK_13707611_10153301118629649_6258158905072127817_n.jpg",
          "filename": "13707611_10153301118629649_6258158905072127817_n.jpg",
          "size": 44295,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/rbjwm0wKS4yYQduTuu2E_small_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/zk3BicvTVOeZ6QzAcCyu_large_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/UDHI3hrLRLW6cIn2FVUW_full_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recGYjEvMRqWuQabn"
      ],
      "(You can't directly edit this column)": "Ping Quach - Founder"
    },
    "recgbIu7VI553Sybn": {
      "id": "recgbIu7VI553Sybn",
      "createdTime": "2018-10-17T22:05:14.000Z",
      "group": [
        "recs2aRRotZKq6Lvm"
      ],
      "positionTitle": "Founder",
      "picture": [
        {
          "id": "atteNHv5hkz5leXY2",
          "url": "https://dl.airtable.com/9fOFK6GaS14Eqa0GH0ku_13051780_10153967787361508_3966323251194751461_n.jpg",
          "filename": "13051780_10153967787361508_3966323251194751461_n.jpg",
          "size": 180846,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/9uA5VVvzTUS30QQAL4lp_small_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/bRpZ8HRaRC258egixmpK_large_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 514,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/iozfAQkVQeuJGJa169c5_full_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 960,
              "height": 957
            }
          }
        }
      ],
      "person": [
        "recI4tz7ioKyk9TK0"
      ],
      "(You can't directly edit this column)": "Geoffrey Chen - Founder"
    },
    "recyjjB0B4LTiqJLS": {
      "id": "recyjjB0B4LTiqJLS",
      "createdTime": "2018-10-17T22:06:58.000Z",
      "group": [
        "recs2aRRotZKq6Lvm"
      ],
      "positionTitle": "Founder",
      "picture": [
        {
          "id": "attvH0Okhvo2uOrv1",
          "url": "https://dl.airtable.com/7rHz5asVRxGAuu4KpyMx_23270536_10212447883406227_9024706850829743905_o.jpg",
          "filename": "23270536_10212447883406227_9024706850829743905_o.jpg",
          "size": 170526,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/VSHH6D8oRMmsnAaWUU9N_small_23270536_10212447883406227_9024706850829743905_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/zp8oC61OSGmNW2B73Kkt_large_23270536_10212447883406227_9024706850829743905_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/kiCDw4SLmC9F5hPimLdA_full_23270536_10212447883406227_9024706850829743905_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recn3dcDlodxrX69h"
      ],
      "(You can't directly edit this column)": "Rosemary Hua - Founder"
    },
    "rec5EJMij7f7KaN2X": {
      "id": "rec5EJMij7f7KaN2X",
      "createdTime": "2018-10-17T22:07:32.000Z",
      "group": [
        "reclDFFQA8U6TkNNU"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attORwiKJCQxf2yf0",
          "url": "https://dl.airtable.com/OUNWGhSvaFXuYqwPloOQ_22049906_10155361653778113_6833126577707796435_n.jpg",
          "filename": "22049906_10155361653778113_6833126577707796435_n.jpg",
          "size": 16789,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/qFWyDcXTh6IGe8Sl3CCQ_small_22049906_10155361653778113_6833126577707796435_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/yTvKyvBhSXuF0Y1yFa5g_large_22049906_10155361653778113_6833126577707796435_n.jpg",
              "width": 420,
              "height": 420
            },
            "full": {
              "url": "https://dl.airtable.com/Lawh0nqKSMKVcArxwhyM_full_22049906_10155361653778113_6833126577707796435_n.jpg",
              "width": 420,
              "height": 420
            }
          }
        }
      ],
      "person": [
        "rec5hvcjPKk5mJ79f"
      ],
      "(You can't directly edit this column)": "Shawn Han - Comp Captain"
    },
    "recsZh1l7cUmPLqPW": {
      "id": "recsZh1l7cUmPLqPW",
      "createdTime": "2018-10-17T22:07:54.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attUxO01058lkkeNK",
          "url": "https://dl.airtable.com/GbeGDqeLSW6wDLEV3ipO_Ada%20Ng%20-%20Events.jpg",
          "filename": "Ada Ng - Events.jpg",
          "size": 260772,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/9IrRatwRge9nADQrD2FA_small_Ada%20Ng%20-%20Events.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/rFB1Q42FQ7iyNi1VwNU6_large_Ada%20Ng%20-%20Events.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/WSRXybXOTb6T4L5eeFgr_full_Ada%20Ng%20-%20Events.jpg",
              "width": 2048,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "rec54iAVFwg1HwrW1"
      ],
      "(You can't directly edit this column)": "Ada Ng - Events Chair"
    },
    "rec9arrsO6ltYsTa9": {
      "id": "rec9arrsO6ltYsTa9",
      "createdTime": "2018-10-17T22:10:24.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attDnpakq41Ylm8Js",
          "url": "https://dl.airtable.com/7Y8dpwnMRYGzk8gRsXVJ_Alyssa%20Alvarez%20-%20PR%20Design.jpg",
          "filename": "Alyssa Alvarez - PR Design.jpg",
          "size": 56398,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/1Ag8jSEMQsqi6pVqhtxj_small_Alyssa%20Alvarez%20-%20PR%20Design.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/kvIO83kTKSapwwY722Qw_large_Alyssa%20Alvarez%20-%20PR%20Design.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/LwleMSzMQPGEwUSlKKIy_full_Alyssa%20Alvarez%20-%20PR%20Design.jpg",
              "width": 960,
              "height": 637
            }
          }
        }
      ],
      "person": [
        "recVe7qtpA0igWgdl"
      ],
      "(You can't directly edit this column)": "Alyssa Alvarez - PR Design"
    },
    "recWyPZFROrnMhz6W": {
      "id": "recWyPZFROrnMhz6W",
      "createdTime": "2018-10-17T22:12:55.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attCBP8u7wajzQG7h",
          "url": "https://dl.airtable.com/eYVpQWfvTpm1XwjMfVoV_Andrew%20Lee%20-%20Exec.jpg",
          "filename": "Andrew Lee - Exec.jpg",
          "size": 43485,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Jv6sMMHmTYWYfGjMlmy1_small_Andrew%20Lee%20-%20Exec.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/sRIw113UQtO3StEW3euO_large_Andrew%20Lee%20-%20Exec.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/JsvtER9xQVaBQJSWXy2V_full_Andrew%20Lee%20-%20Exec.jpg",
              "width": 960,
              "height": 637
            }
          }
        }
      ],
      "person": [
        "recBPtE9xYnXjdgb4"
      ],
      "(You can't directly edit this column)": "Andrew Lee - Executive Director"
    },
    "recdcLCumD1Q3KkNn": {
      "id": "recdcLCumD1Q3KkNn",
      "createdTime": "2018-10-17T22:13:32.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attmeDrBCbg0btZpq",
          "url": "https://dl.airtable.com/F4lR8j0Ty6f7tIP3sHQd_Chris%20Kim%20-%20Historian.jpg",
          "filename": "Chris Kim - Historian.jpg",
          "size": 1031392,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/aA3r0YM5Q1mUWdAXN8Eb_small_Chris%20Kim%20-%20Historian.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/hExO5US4RmibcXAXF5ME_large_Chris%20Kim%20-%20Historian.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/O4yWDo1RNS0oxcacEB9Q_full_Chris%20Kim%20-%20Historian.jpg",
              "width": 3000,
              "height": 2000
            }
          }
        }
      ],
      "person": [
        "recluqLVujMSWoHUV"
      ],
      "(You can't directly edit this column)": "Chris Kim - Historian"
    },
    "recitXxPLG94ld8ct": {
      "id": "recitXxPLG94ld8ct",
      "createdTime": "2018-10-17T22:13:39.000Z",
      "group": [
        "reclDFFQA8U6TkNNU"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "atts8JJu3tPk7CDv3",
          "url": "https://dl.airtable.com/se8zOiorRKW73O6GFIW9_36750437_2060075507338507_5789646413570768896_o.jpg",
          "filename": "36750437_2060075507338507_5789646413570768896_o.jpg",
          "size": 135206,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/kusAtRaaRiaKQYS9ecPh_small_36750437_2060075507338507_5789646413570768896_o.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/sOgLbFtQxu3pYjBpk7UT_large_36750437_2060075507338507_5789646413570768896_o.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/udKOiNzRQ1a90LfmfzfJ_full_36750437_2060075507338507_5789646413570768896_o.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "rec4wvItkd0rSu1w8"
      ],
      "(You can't directly edit this column)": "James Arias - Comp Captain"
    },
    "rec1KRcNkLaFDWaly": {
      "id": "rec1KRcNkLaFDWaly",
      "createdTime": "2018-10-17T22:14:28.000Z",
      "group": [
        "reclDFFQA8U6TkNNU"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attKWjntOeJ6IkuAn",
          "url": "https://dl.airtable.com/2edpSkoLStieck08qSyT_13707611_10153301118629649_6258158905072127817_n.jpg",
          "filename": "13707611_10153301118629649_6258158905072127817_n.jpg",
          "size": 44295,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/vLhcGR4QYezwUs4WQaD8_small_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/IkUssmXwTCuYCzEKWr1W_large_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/7IdRw2viSSur3tcumnDN_full_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recGYjEvMRqWuQabn"
      ],
      "(You can't directly edit this column)": "Ping Quach - Executive Director"
    },
    "recTAdsbclNgXbvey": {
      "id": "recTAdsbclNgXbvey",
      "createdTime": "2018-10-17T22:14:28.000Z",
      "group": [
        "reclDFFQA8U6TkNNU"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "att8FBsoblneJq7lp",
          "url": "https://dl.airtable.com/r1ypwcdNQ4u4gVvaoltU_13707611_10153301118629649_6258158905072127817_n.jpg",
          "filename": "13707611_10153301118629649_6258158905072127817_n.jpg",
          "size": 44295,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/0BOmASbRd6V1xDoZNvIA_small_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/eWEkO9ZqSgmK4j4DcaZv_large_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/07DatUwRYCTO8y6K8Rcb_full_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recGYjEvMRqWuQabn"
      ],
      "(You can't directly edit this column)": "Ping Quach - Comp Artistics"
    },
    "rec3kK4A9qdmQXQdH": {
      "id": "rec3kK4A9qdmQXQdH",
      "createdTime": "2018-10-17T22:14:31.000Z",
      "group": [
        "reclDFFQA8U6TkNNU"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attiK5hc31HSOFFPv",
          "url": "https://dl.airtable.com/KJlJcQY2NGQWO0N8WMQa_13051780_10153967787361508_3966323251194751461_n.jpg",
          "filename": "13051780_10153967787361508_3966323251194751461_n.jpg",
          "size": 180846,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/1er9SGXSsKTLqhvvOyFg_small_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/HRYxA6sRSSBRSWCgc26b_large_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 514,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/9eZG6wVBQFqNxwSuPelf_full_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 960,
              "height": 957
            }
          }
        }
      ],
      "person": [
        "recI4tz7ioKyk9TK0"
      ],
      "(You can't directly edit this column)": "Geoffrey Chen - Executive Director"
    },
    "recU54lLZqUz4LmbK": {
      "id": "recU54lLZqUz4LmbK",
      "createdTime": "2018-10-17T22:14:33.000Z",
      "group": [
        "reclDFFQA8U6TkNNU"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attvH1BR1lf6yAwdu",
          "url": "https://dl.airtable.com/faFzctCQRYW1eeyPzabR_13051780_10153967787361508_3966323251194751461_n.jpg",
          "filename": "13051780_10153967787361508_3966323251194751461_n.jpg",
          "size": 180846,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/zBBkOZwAScu715YlOrUo_small_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Wavr8VsbRNGGN6LfEaO3_large_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 514,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/mctZ6HvYQ5AlVNiBB4gB_full_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 960,
              "height": 957
            }
          }
        }
      ],
      "person": [
        "recI4tz7ioKyk9TK0"
      ],
      "(You can't directly edit this column)": "Geoffrey Chen - Comp Artistics"
    },
    "recWqs23aXzwyEOyh": {
      "id": "recWqs23aXzwyEOyh",
      "createdTime": "2018-10-17T22:14:33.000Z",
      "group": [
        "reclDFFQA8U6TkNNU"
      ],
      "positionTitle": "Communications",
      "picture": [
        {
          "id": "attLcoDHitK8eLPFQ",
          "url": "https://dl.airtable.com/SU9nAj0LQFC1HkCd4qdd_18922463_10210522522152194_4209326782606585402_o.jpg",
          "filename": "18922463_10210522522152194_4209326782606585402_o.jpg",
          "size": 75016,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/hdP2Gp8DQVialHlu2o0m_small_18922463_10210522522152194_4209326782606585402_o.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/gn031mb4RmWwuzUDg2GQ_large_18922463_10210522522152194_4209326782606585402_o.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/0VRKOiMwTLKQuzsQqWXJ_full_18922463_10210522522152194_4209326782606585402_o.jpg",
              "width": 1440,
              "height": 1440
            }
          }
        }
      ],
      "person": [
        "recSpdnuAOuF5svEh"
      ],
      "(You can't directly edit this column)": "Gordon Lai - Communications"
    },
    "recBg9E1RVPt9HKfe": {
      "id": "recBg9E1RVPt9HKfe",
      "createdTime": "2018-10-17T22:14:35.000Z",
      "group": [
        "reclDFFQA8U6TkNNU"
      ],
      "positionTitle": "Public Relations",
      "picture": [
        {
          "id": "attZvAoKueVv3L6Ik",
          "url": "https://dl.airtable.com/1VuQJq4DSUuA4VkIF8bX_11703292_10152817179557924_8152791156677549647_n.jpg",
          "filename": "11703292_10152817179557924_8152791156677549647_n.jpg",
          "size": 42107,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/xAug1A1IQLKtcnnX06MR_small_11703292_10152817179557924_8152791156677549647_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/4ua5Nz4vRO7sgoK1TGHT_large_11703292_10152817179557924_8152791156677549647_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/WaSvtbEtSwqAYSQwC2Gy_full_11703292_10152817179557924_8152791156677549647_n.jpg",
              "width": 720,
              "height": 720
            }
          }
        }
      ],
      "person": [
        "rec0osRffYVXkinft"
      ],
      "(You can't directly edit this column)": "Carol Yu - Public Relations"
    },
    "recnOfQihz89RL3zI": {
      "id": "recnOfQihz89RL3zI",
      "createdTime": "2018-10-17T22:25:04.000Z",
      "group": [
        "reclDFFQA8U6TkNNU"
      ],
      "positionTitle": "Public Relations",
      "picture": [
        {
          "id": "attguUyaBfMFIqTT2",
          "url": "https://dl.airtable.com/F56JujQT9uRIWYhyY8Qg_11885009_10207394596813288_3614778451375522020_o.jpg",
          "filename": "11885009_10207394596813288_3614778451375522020_o.jpg",
          "size": 536106,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/JPhJKyDQRP2FiUH6PDXP_small_11885009_10207394596813288_3614778451375522020_o.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/CWaYVsN3Q4Zrloq8jmmR_large_11885009_10207394596813288_3614778451375522020_o.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/U3tbDVdwQFGdaXSyD6zj_full_11885009_10207394596813288_3614778451375522020_o.jpg",
              "width": 2006,
              "height": 2006
            }
          }
        }
      ],
      "person": [
        "recrROhFCZ4KFxjAW"
      ],
      "(You can't directly edit this column)": "Cathy Yang - Public Relations"
    },
    "recOZGvfMNPABr1FI": {
      "id": "recOZGvfMNPABr1FI",
      "createdTime": "2018-10-17T22:25:56.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "att0qzb9ELbJcGkvS",
          "url": "https://dl.airtable.com/0fq4K81nQJ29zijOIvL8_18922463_10210522522152194_4209326782606585402_o.jpg",
          "filename": "18922463_10210522522152194_4209326782606585402_o.jpg",
          "size": 75016,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/BqvG86mkRgqMS563fuo6_small_18922463_10210522522152194_4209326782606585402_o.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/GT2LCDnIRWGNu5nL6qLz_large_18922463_10210522522152194_4209326782606585402_o.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/RGDjjtqoQWp6qY2k2bwx_full_18922463_10210522522152194_4209326782606585402_o.jpg",
              "width": 1440,
              "height": 1440
            }
          }
        }
      ],
      "person": [
        "recSpdnuAOuF5svEh"
      ],
      "(You can't directly edit this column)": "Gordon Lai - Executive Director"
    },
    "recxlFvvUfFDj8Hyj": {
      "id": "recxlFvvUfFDj8Hyj",
      "createdTime": "2018-10-17T22:27:21.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attEvyO2Y2ftg2964",
          "url": "https://dl.airtable.com/PThMqPD4TruXygw4x4js_13707611_10153301118629649_6258158905072127817_n.jpg",
          "filename": "13707611_10153301118629649_6258158905072127817_n.jpg",
          "size": 44295,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/c4LCprZ1RwGuxDAk9Mbb_small_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/qjelma4HSiGe7WhTxaJP_large_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/lSXEbS0PSLHJktNdlmSf_full_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recGYjEvMRqWuQabn"
      ],
      "(You can't directly edit this column)": "Ping Quach - Comp Artistics"
    },
    "rec2ArD4zfUhlWKwj": {
      "id": "rec2ArD4zfUhlWKwj",
      "createdTime": "2018-10-17T22:27:56.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attQZ5jAHjumN2FLx",
          "url": "https://dl.airtable.com/ypzQN7GhRRSfOVvW30FC_13051780_10153967787361508_3966323251194751461_n.jpg",
          "filename": "13051780_10153967787361508_3966323251194751461_n.jpg",
          "size": 180846,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/GbpMdr9S6rIxHAzerfSg_small_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Aa1dC2lfRYKV47lLZB7w_large_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 514,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/MHO6yldR5e9F8nzjhgng_full_13051780_10153967787361508_3966323251194751461_n.jpg",
              "width": 960,
              "height": 957
            }
          }
        }
      ],
      "person": [
        "recI4tz7ioKyk9TK0"
      ],
      "(You can't directly edit this column)": "Geoffrey Chen - Comp Artistics"
    },
    "recH2qy05mNoxqz5l": {
      "id": "recH2qy05mNoxqz5l",
      "createdTime": "2018-10-17T22:28:39.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attXDgspqmiIcu1dn",
          "url": "https://dl.airtable.com/1ilG38YGQya1kUO2PvbJ_11350615_10153425210498408_4242649587900320037_n.jpg",
          "filename": "11350615_10153425210498408_4242649587900320037_n.jpg",
          "size": 70606,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/NwslITLBTeerNyRl4tsg_small_11350615_10153425210498408_4242649587900320037_n.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/XW8EuNQTiCfLRdADkQBA_large_11350615_10153425210498408_4242649587900320037_n.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/PvU472oSY6QV5f0P0l9P_full_11350615_10153425210498408_4242649587900320037_n.jpg",
              "width": 640,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recLDaDFZxNyhrLYf"
      ],
      "(You can't directly edit this column)": "Darae Kim - Comp Captain"
    },
    "reccuKlOcC6NdTOwO": {
      "id": "reccuKlOcC6NdTOwO",
      "createdTime": "2018-10-17T22:28:43.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attpPaoyTIYQrxz14",
          "url": "https://dl.airtable.com/0cBCcDq7TWOnXfvywanD_17814415_10211819306979056_3288899545693974485_o.jpg",
          "filename": "17814415_10211819306979056_3288899545693974485_o.jpg",
          "size": 190509,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/AFGKDKUQQ3C5zjYn65KP_small_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/X7GR8hoT9aoaoBRGsGAg_large_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/zMDE1vvKQiKNAWc6kZks_full_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recfLsiC7955V83ri"
      ],
      "(You can't directly edit this column)": "Daniel He - Comp Captain"
    },
    "rec61dgtt7fFuPdUc": {
      "id": "rec61dgtt7fFuPdUc",
      "createdTime": "2018-10-17T22:30:41.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "Internal Relations",
      "picture": [
        {
          "id": "attEupPK2sMTz0zUm",
          "url": "https://dl.airtable.com/IxifWZ8PR46OUz5D2lBn_10336787_10203173734938313_2658813470424420589_n.jpg",
          "filename": "10336787_10203173734938313_2658813470424420589_n.jpg",
          "size": 24422,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/SXrxd2TNSi683lhwMJp9_small_10336787_10203173734938313_2658813470424420589_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/uSjiZYE1RtGNMmVQWsQ1_large_10336787_10203173734938313_2658813470424420589_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/3Iiwy6M7RdOeKEAVP7ES_full_10336787_10203173734938313_2658813470424420589_n.jpg",
              "width": 565,
              "height": 565
            }
          }
        }
      ],
      "person": [
        "recvmgzYF7heGgA9k"
      ],
      "(You can't directly edit this column)": "Aurora Marie - Internal Relations"
    },
    "recUFrFlIpVABapxl": {
      "id": "recUFrFlIpVABapxl",
      "createdTime": "2018-10-17T22:30:43.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attSednALlVt6B0LV",
          "url": "https://dl.airtable.com/EYrFyUUIQ1bFsiLAwwKk_43698067_10161048739485154_2777770867487145984_o.jpg",
          "filename": "43698067_10161048739485154_2777770867487145984_o.jpg",
          "size": 171972,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/IVWb1vxzSTuvo8mI41Dg_small_43698067_10161048739485154_2777770867487145984_o.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/HhSZ6qniSiz6cKqghwsd_large_43698067_10161048739485154_2777770867487145984_o.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/8fKjBB4TVdrEr7OorOAw_full_43698067_10161048739485154_2777770867487145984_o.jpg",
              "width": 1080,
              "height": 1080
            }
          }
        }
      ],
      "person": [
        "recv47ketfwyrgVAn"
      ],
      "(You can't directly edit this column)": "Surmayee Tetarbe - PR Marketing"
    },
    "recmv9EMTgBKiRcBw": {
      "id": "recmv9EMTgBKiRcBw",
      "createdTime": "2018-10-17T22:30:46.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "att2jtjbA4UVB3gct",
          "url": "https://dl.airtable.com/yXlMJ0e2Sg2ERPUbIP3O_44255099_473562976476941_739385315860414464_n.jpg",
          "filename": "44255099_473562976476941_739385315860414464_n.jpg",
          "size": 54641,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/T0eIm26WR7O3ofi4iPOw_small_44255099_473562976476941_739385315860414464_n.jpg",
              "width": 20,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/si3s4dCTZG7bUQNiHyg8_large_44255099_473562976476941_739385315860414464_n.jpg",
              "width": 512,
              "height": 911
            },
            "full": {
              "url": "https://dl.airtable.com/RQ0NVw1IT9KgyF0Q9jYO_full_44255099_473562976476941_739385315860414464_n.jpg",
              "width": 750,
              "height": 1334
            }
          }
        }
      ],
      "person": [
        "recxrlu4YBT1PwNh6"
      ],
      "(You can't directly edit this column)": "Shawn Mei - PR Design"
    },
    "recYinURnABbJOFqe": {
      "id": "recYinURnABbJOFqe",
      "createdTime": "2018-10-17T22:33:15.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "att1nSMDZr3uMEd7b",
          "url": "https://dl.airtable.com/uOtcP4BcTWivr8n3YHqx_14107690_10155306920701164_2842158559044562378_o.jpg",
          "filename": "14107690_10155306920701164_2842158559044562378_o.jpg",
          "size": 402098,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/jw99O1ASautKWgsK3lbQ_small_14107690_10155306920701164_2842158559044562378_o.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Jl2ZJtMQwe7swWgJ3Bwj_large_14107690_10155306920701164_2842158559044562378_o.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/sqNTGoirRISnc6JtxnMe_full_14107690_10155306920701164_2842158559044562378_o.jpg",
              "width": 2048,
              "height": 1365
            }
          }
        }
      ],
      "person": [
        "reccBSwkwjN6WIsfB"
      ],
      "(You can't directly edit this column)": "Jenny Chen - Finance Chair"
    },
    "recWHyWMs5CQgy6L2": {
      "id": "recWHyWMs5CQgy6L2",
      "createdTime": "2018-10-17T22:33:17.000Z",
      "group": [
        "rec7AuUevOSkKy0wb"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attI6DApa7HFGV2yT",
          "url": "https://dl.airtable.com/Nc9ZSuqaRJu3AQZtQSB2_24173077_10156007339882028_5981613006874063536_o.jpg",
          "filename": "24173077_10156007339882028_5981613006874063536_o.jpg",
          "size": 224059,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/80W5M1uSr6F5VrecSbmr_small_24173077_10156007339882028_5981613006874063536_o.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/saJQdsdvTZSyS6lbFPti_large_24173077_10156007339882028_5981613006874063536_o.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/yGS1BDdATDKht8Vx8xwK_full_24173077_10156007339882028_5981613006874063536_o.jpg",
              "width": 1152,
              "height": 1152
            }
          }
        }
      ],
      "person": [
        "recZ4bppVkukHelyx"
      ],
      "(You can't directly edit this column)": "Joseph Koo - Events Chair"
    },
    "recyOfaGap9N8vUfi": {
      "id": "recyOfaGap9N8vUfi",
      "createdTime": "2018-10-17T22:33:26.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attR7DgGDY08oOw9z",
          "url": "https://dl.airtable.com/LFy1PmBwRFKdGj57zblP_Andrew%20Lee%20-%20Exec.jpg",
          "filename": "Andrew Lee - Exec.jpg",
          "size": 43485,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/uaocFWPVRtKSgDzyRms5_small_Andrew%20Lee%20-%20Exec.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/GzcxaNyJQ9KZXWuPFuHR_large_Andrew%20Lee%20-%20Exec.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/XdCsUds8R1eUeD3TREQr_full_Andrew%20Lee%20-%20Exec.jpg",
              "width": 960,
              "height": 637
            }
          }
        }
      ],
      "person": [
        "recBPtE9xYnXjdgb4"
      ],
      "(You can't directly edit this column)": "Andrew Lee - Executive Director"
    },
    "recpsLx44CYFgFzqe": {
      "id": "recpsLx44CYFgFzqe",
      "createdTime": "2018-10-17T22:36:16.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attlXcE4xnYfe8a53",
          "url": "https://dl.airtable.com/021QYdnuS5SqD5HiX9AU_10336787_10203173734938313_2658813470424420589_n.jpg",
          "filename": "10336787_10203173734938313_2658813470424420589_n.jpg",
          "size": 24422,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Ur9iKLAGQmqGuYZlqk5C_small_10336787_10203173734938313_2658813470424420589_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/zU2S70vRTgKWi2muHnRw_large_10336787_10203173734938313_2658813470424420589_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/hjXesBOQkaNctA0ZHYKZ_full_10336787_10203173734938313_2658813470424420589_n.jpg",
              "width": 565,
              "height": 565
            }
          }
        }
      ],
      "person": [
        "recvmgzYF7heGgA9k"
      ],
      "(You can't directly edit this column)": "Aurora Marie - Executive Director"
    },
    "recZRkwOqdub8rIb4": {
      "id": "recZRkwOqdub8rIb4",
      "createdTime": "2018-10-17T22:37:23.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attClzHsTOkGTSDKS",
          "url": "https://dl.airtable.com/RT0mNtFVQxqcEp7oHyR0_12819195_10209240517958911_7108238715465571965_o.jpg",
          "filename": "12819195_10209240517958911_7108238715465571965_o.jpg",
          "size": 225594,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/XnV84lU0QPe1ygkfDYim_small_12819195_10209240517958911_7108238715465571965_o.jpg",
              "width": 26,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ez8ouSfpT9ClqYRgogL1_large_12819195_10209240517958911_7108238715465571965_o.jpg",
              "width": 512,
              "height": 709
            },
            "full": {
              "url": "https://dl.airtable.com/3H8kIsGWQqWVwuPcl2Qu_full_12819195_10209240517958911_7108238715465571965_o.jpg",
              "width": 1479,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recp0NmQKxjcdlu8w"
      ],
      "(You can't directly edit this column)": "Eric Kim - Comp Artistics"
    },
    "rec4z6wz1bId6q4v3": {
      "id": "rec4z6wz1bId6q4v3",
      "createdTime": "2018-10-17T22:38:44.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attxwyhPGAF9Ovfcr",
          "url": "https://dl.airtable.com/BtzR7e2pSoG7wAguFFqK_25626881_10213204123351989_6096239528565524427_o.jpg",
          "filename": "25626881_10213204123351989_6096239528565524427_o.jpg",
          "size": 351453,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/KJxXuWSaKXuS63RXhxBA_small_25626881_10213204123351989_6096239528565524427_o.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/jxxyBY4oQFSM3TblbkzA_large_25626881_10213204123351989_6096239528565524427_o.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/5Sd4RRV2QDGee4juR5ZM_full_25626881_10213204123351989_6096239528565524427_o.jpg",
              "width": 1365,
              "height": 1365
            }
          }
        }
      ],
      "person": [
        "recOWrlg8MLtI8Py2"
      ],
      "(You can't directly edit this column)": "Felix Li - Comp Artistics"
    },
    "recvXhAMyqnKWxeqy": {
      "id": "recvXhAMyqnKWxeqy",
      "createdTime": "2018-10-17T22:38:47.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "att8lPttm83KDpEzW",
          "url": "https://dl.airtable.com/krAFtssMQleIBW2xbpAX_13707611_10153301118629649_6258158905072127817_n.jpg",
          "filename": "13707611_10153301118629649_6258158905072127817_n.jpg",
          "size": 44295,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/GPbbNZPBRgeqAWHZeeth_small_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/SG8tmXNiSC2qRSi0Id7G_large_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/SBAiu2VJRiqSQfRRY9pN_full_13707611_10153301118629649_6258158905072127817_n.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recGYjEvMRqWuQabn"
      ],
      "(You can't directly edit this column)": "Ping Quach - Comp Artistics"
    },
    "rec95Nr6rB535jmwh": {
      "id": "rec95Nr6rB535jmwh",
      "createdTime": "2018-10-17T22:38:49.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attJa1vboXMa8t2jE",
          "url": "https://dl.airtable.com/vj6PmI3mRV6FwnPBahmq_17814415_10211819306979056_3288899545693974485_o.jpg",
          "filename": "17814415_10211819306979056_3288899545693974485_o.jpg",
          "size": 190509,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/1DMw6eQySF60AtBxKMPD_small_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/wsfdsFGbTdCr6TpZT8sV_large_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/pkL3kyqS6mGDv3qqYlVQ_full_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recfLsiC7955V83ri"
      ],
      "(You can't directly edit this column)": "Daniel He - Comp Captain"
    },
    "rec7CxNBh9H35Vj0A": {
      "id": "rec7CxNBh9H35Vj0A",
      "createdTime": "2018-10-17T22:38:51.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attgpacuZQ56UW6Yw",
          "url": "https://dl.airtable.com/XVoVMDDQQ6CJttvbJ8J5_Screen%20Shot%202018-10-17%20at%206.24.09%20PM.png",
          "filename": "Screen Shot 2018-10-17 at 6.24.09 PM.png",
          "size": 1958721,
          "type": "image/png",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/AfgC4kxdSdGWRykr9nnw_small_Screen%20Shot%202018-10-17%20at%206.24.09%20PM.png",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/KTSVadXRDG5d7velHFnP_large_Screen%20Shot%202018-10-17%20at%206.24.09%20PM.png",
              "width": 517,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/Rh5TbuFuSfGTkyXiyfGk_full_Screen%20Shot%202018-10-17%20at%206.24.09%20PM.png",
              "width": 1128,
              "height": 1118
            }
          }
        }
      ],
      "person": [
        "rec4rqgME4ja2gNp7"
      ],
      "(You can't directly edit this column)": "Jaemin Kim - Vice Executive"
    },
    "recHPFEfJg3chEyPc": {
      "id": "recHPFEfJg3chEyPc",
      "createdTime": "2018-10-17T22:41:19.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "PR Marketing",
      "person": [
        "rec1f93ALW5SsVGI9"
      ],
      "(You can't directly edit this column)": "Alex Tang - PR Marketing"
    },
    "recwHz7FQK4hCm7i7": {
      "id": "recwHz7FQK4hCm7i7",
      "createdTime": "2018-10-17T22:41:23.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attMQpZM8SltuBMSS",
          "url": "https://dl.airtable.com/tFJsD0tITgOaGR29oUmo_Alyssa%20Alvarez%20-%20PR%20Design.jpg",
          "filename": "Alyssa Alvarez - PR Design.jpg",
          "size": 56398,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/MPQeCumhTfaKLvcAPPzq_small_Alyssa%20Alvarez%20-%20PR%20Design.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Jab73bK1RoqqOCdqxSn4_large_Alyssa%20Alvarez%20-%20PR%20Design.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/50D4RdgdRWK25ELt1CMh_full_Alyssa%20Alvarez%20-%20PR%20Design.jpg",
              "width": 960,
              "height": 637
            }
          }
        }
      ],
      "person": [
        "recVe7qtpA0igWgdl"
      ],
      "(You can't directly edit this column)": "Alyssa Alvarez - PR Design"
    },
    "reci5J6MOS8tphZcF": {
      "id": "reci5J6MOS8tphZcF",
      "createdTime": "2018-10-17T22:41:25.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attPnPMC1q5x02eVV",
          "url": "https://dl.airtable.com/c5mljkjjTCiZjbein4GF_11060901_10152847604664103_5588632650466657168_n.jpg",
          "filename": "11060901_10152847604664103_5588632650466657168_n.jpg",
          "size": 107776,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/WMMKZ8rhTWq2OjKMaBcH_small_11060901_10152847604664103_5588632650466657168_n.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/hkGXekQyS8qdy7Iu3snm_large_11060901_10152847604664103_5588632650466657168_n.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/fttkVepTUisdebctomqE_full_11060901_10152847604664103_5588632650466657168_n.jpg",
              "width": 960,
              "height": 640
            }
          }
        }
      ],
      "person": [
        "rec64C1WdF2Amk1VV"
      ],
      "(You can't directly edit this column)": "Natalie Ma - Finance Chair"
    },
    "recxsfg4zOPLAqf9R": {
      "id": "recxsfg4zOPLAqf9R",
      "createdTime": "2018-10-17T22:41:28.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attwcvFYTg5MyLt4K",
          "url": "https://dl.airtable.com/ty9M83C4TGSQiewPZVhA_Jenny%20Li%20-%20Events.jpg",
          "filename": "Jenny Li - Events.jpg",
          "size": 41654,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/e5qWO1OTYOBWhCCZv1Fi_small_Jenny%20Li%20-%20Events.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/UhLNEJe1QAmRlVVd1wPu_large_Jenny%20Li%20-%20Events.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/WcTThE34TgiARCKldR50_full_Jenny%20Li%20-%20Events.jpg",
              "width": 960,
              "height": 637
            }
          }
        }
      ],
      "person": [
        "reclzXp3jh79lnbB0"
      ],
      "(You can't directly edit this column)": "Jenny Li - Events Chair"
    },
    "recqBbjzibVHDFjwq": {
      "id": "recqBbjzibVHDFjwq",
      "createdTime": "2018-10-17T22:44:38.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "att4RI5BVXDIsb1IX",
          "url": "https://dl.airtable.com/ImP8qMjS6KiYebT48m7k_23755098_10156228244853115_7067970468443493890_n.jpg",
          "filename": "23755098_10156228244853115_7067970468443493890_n.jpg",
          "size": 34476,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/roFt6A0cSaSJzlvO2QbT_small_23755098_10156228244853115_7067970468443493890_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Rw5Kj7fDSgaby2Rwp1kf_large_23755098_10156228244853115_7067970468443493890_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/OHyFvjXvR4KSpheScH5H_full_23755098_10156228244853115_7067970468443493890_n.jpg",
              "width": 720,
              "height": 720
            }
          }
        }
      ],
      "person": [
        "reciuIga5VEVPI5sb"
      ],
      "(You can't directly edit this column)": "Edwina Yuan - Events Chair"
    },
    "rec6ZCBxkhHM9WUFj": {
      "id": "rec6ZCBxkhHM9WUFj",
      "createdTime": "2018-10-17T22:44:42.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attvqIQ1UJ9coisuY",
          "url": "https://dl.airtable.com/dcIVliRYTdWxFE28i4hb_Simon%20Chen%20-%20Historian.jpg",
          "filename": "Simon Chen - Historian.jpg",
          "size": 157737,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/wWLhs4xxQUSuHWSsoomw_small_Simon%20Chen%20-%20Historian.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/mIt8C5ipTDOJSSZuHXTT_large_Simon%20Chen%20-%20Historian.jpg",
              "width": 398,
              "height": 600
            },
            "full": {
              "url": "https://dl.airtable.com/Pn7yNPfSqqq5F7DGZE7K_full_Simon%20Chen%20-%20Historian.jpg",
              "width": 398,
              "height": 600
            }
          }
        }
      ],
      "person": [
        "reccl1uy2ajMiq1O2"
      ],
      "(You can't directly edit this column)": "Simon Chen - Historian"
    },
    "recCV8UTZJWjUgyYE": {
      "id": "recCV8UTZJWjUgyYE",
      "createdTime": "2018-10-17T22:44:44.000Z",
      "group": [
        "recefYCYkTSsb9UBW"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attyKK7edcqAtzOzT",
          "url": "https://dl.airtable.com/zNhTtQT1mLLkhA0o02CQ_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
          "filename": "Jasmine Chau - Vice Exec + Outreach Chair.jpg",
          "size": 169881,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/gbzdL24ZSvGuvIQklgDi_small_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/UjB56YV5QISQEuVvI1dS_large_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
              "width": 401,
              "height": 600
            },
            "full": {
              "url": "https://dl.airtable.com/ACftU8j6QPKu02upVdqp_full_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
              "width": 401,
              "height": 600
            }
          }
        }
      ],
      "person": [
        "recqZKVLh9MwwoRfn"
      ],
      "(You can't directly edit this column)": "Jasmine Chau - Outreach Chair"
    },
    "recPE6Z2zTr4HPmTD": {
      "id": "recPE6Z2zTr4HPmTD",
      "createdTime": "2018-10-17T22:14:36.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attTOaC0bxhFUTmmz",
          "url": "https://dl.airtable.com/KJDdZX5QXGhA0ETlf8wZ_Davinci%20Lam%20-%20Historian.jpg",
          "filename": "Davinci Lam - Historian.jpg",
          "size": 61791,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/EN14eaJXScGkH4C0RuE5_small_Davinci%20Lam%20-%20Historian.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/1mgu4yNCRMrnE9cES7Ul_large_Davinci%20Lam%20-%20Historian.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/bhe9sVXS2bEkIQ88MtQg_full_Davinci%20Lam%20-%20Historian.jpg",
              "width": 640,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "rec7BBK1UpjDQQiJF"
      ],
      "(You can't directly edit this column)": "Davinci Lam - Historian"
    },
    "rec54wo9l7lwIPoDh": {
      "id": "rec54wo9l7lwIPoDh",
      "createdTime": "2018-10-17T22:16:53.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attRcRmRxp0TWTdSG",
          "url": "https://dl.airtable.com/PZRulihCRSusCEzFT9ax_Emily%20Tsai%20-%20PR%20Marketing.jpg",
          "filename": "Emily Tsai - PR Marketing.jpg",
          "size": 56592,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ekK2bfzRQ3aGAAujvz30_small_Emily%20Tsai%20-%20PR%20Marketing.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/8RL3fPqFRgGse68u60id_large_Emily%20Tsai%20-%20PR%20Marketing.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/qF1K4QVmTlChBx6mNtEF_full_Emily%20Tsai%20-%20PR%20Marketing.jpg",
              "width": 960,
              "height": 640
            }
          }
        }
      ],
      "person": [
        "recLxGorRTNI9I0QS"
      ],
      "(You can't directly edit this column)": "Emily Tsai - PR Marketing"
    },
    "recTrl8bPc8liK962": {
      "id": "recTrl8bPc8liK962",
      "createdTime": "2018-10-17T22:17:23.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attoU8nXhYHnFwBTZ",
          "url": "https://dl.airtable.com/pi6c7Uf7T8SiHRYSaJ8Y_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
          "filename": "Jasmine Chau - Vice Exec + Outreach Chair.jpg",
          "size": 169881,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/uONrmIOsQjiRRYLwBdRw_small_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/3QdG1NvUTQ62aGWukncZ_large_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
              "width": 401,
              "height": 600
            },
            "full": {
              "url": "https://dl.airtable.com/BVNV3O2OQ8yvXAE0yUsP_full_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
              "width": 401,
              "height": 600
            }
          }
        }
      ],
      "person": [
        "recqZKVLh9MwwoRfn"
      ],
      "(You can't directly edit this column)": "Jasmine Chau - Vice Executive"
    },
    "recowepyieoCN1uVQ": {
      "id": "recowepyieoCN1uVQ",
      "createdTime": "2018-10-17T22:17:57.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attYDnpEYT42HF8pV",
          "url": "https://dl.airtable.com/O2KXJi4HRIufrJECrwE2_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
          "filename": "Jasmine Chau - Vice Exec + Outreach Chair.jpg",
          "size": 169881,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/IL9P6YI4S2OWbhMzytbF_small_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/XsTueSbGR8WUZu4tN05N_large_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
              "width": 401,
              "height": 600
            },
            "full": {
              "url": "https://dl.airtable.com/iGNcdYMQ52EaVJ5PRt1V_full_Jasmine%20Chau%20-%20Vice%20Exec%20%2B%20Outreach%20Chair.jpg",
              "width": 401,
              "height": 600
            }
          }
        }
      ],
      "person": [
        "recqZKVLh9MwwoRfn"
      ],
      "(You can't directly edit this column)": "Jasmine Chau - Outreach Chair"
    },
    "recCYFGpcjEB5aPVa": {
      "id": "recCYFGpcjEB5aPVa",
      "createdTime": "2018-10-17T22:18:25.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "att0EYB7MzXmwgRmu",
          "url": "https://dl.airtable.com/TxDOf0SxSxCbREyZqsMJ_Jenny%20Li%20-%20Events.jpg",
          "filename": "Jenny Li - Events.jpg",
          "size": 41654,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/OsoqpxkR76R8IKY64zyQ_small_Jenny%20Li%20-%20Events.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/mZlvs46wT3KjyKRWECRk_large_Jenny%20Li%20-%20Events.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/KqFqg87TSaaD5jNUbbwe_full_Jenny%20Li%20-%20Events.jpg",
              "width": 960,
              "height": 637
            }
          }
        }
      ],
      "person": [
        "reclzXp3jh79lnbB0"
      ],
      "(You can't directly edit this column)": "Jenny Li - Events Chair"
    },
    "recnVPyrNQBtG10yJ": {
      "id": "recnVPyrNQBtG10yJ",
      "createdTime": "2018-10-17T22:19:00.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attoljWSJtaFZEclH",
          "url": "https://dl.airtable.com/S5bc0V1JTi2d54fBnXgB_Kevin%20Hayakawa%20-%20PR%20Marketing.jpg",
          "filename": "Kevin Hayakawa - PR Marketing.jpg",
          "size": 129935,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Z7gegAemSPyxK6aTkjIl_small_Kevin%20Hayakawa%20-%20PR%20Marketing.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/iAj7ghKCRC6e1UAiqC0p_large_Kevin%20Hayakawa%20-%20PR%20Marketing.jpg",
              "width": 512,
              "height": 773
            },
            "full": {
              "url": "https://dl.airtable.com/pwk699GQpBY4dcNIQIpw_full_Kevin%20Hayakawa%20-%20PR%20Marketing.jpg",
              "width": 636,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "rec3RLZl3eC9SXHwJ"
      ],
      "(You can't directly edit this column)": "Kevin Hayakawa - PR Marketing"
    },
    "recAKbFuUkG4O5I3F": {
      "id": "recAKbFuUkG4O5I3F",
      "createdTime": "2018-10-17T22:19:57.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attDWxTS1YmGnqcMT",
          "url": "https://dl.airtable.com/jOPeWGxHTwy7yRxxcsY2_Mikaela%20Klein%20-%20Finance.jpg",
          "filename": "Mikaela Klein - Finance.jpg",
          "size": 186203,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/p3NmOi3mQoqAIHyCI3yM_small_Mikaela%20Klein%20-%20Finance.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Q3SyrHsQSVqy1y9LtFwC_large_Mikaela%20Klein%20-%20Finance.jpg",
              "width": 398,
              "height": 600
            },
            "full": {
              "url": "https://dl.airtable.com/TYdpBbXtQ7ekpuGXp4HZ_full_Mikaela%20Klein%20-%20Finance.jpg",
              "width": 398,
              "height": 600
            }
          }
        }
      ],
      "person": [
        "reclVNKAxBs3D00S5"
      ],
      "(You can't directly edit this column)": "Mikaela Klein - Finance Chair"
    },
    "recFik0UCmCjnsmAX": {
      "id": "recFik0UCmCjnsmAX",
      "createdTime": "2018-10-17T22:20:23.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attCaGtMfuHfXdTvp",
          "url": "https://dl.airtable.com/DbYQwirYRvW4Hj74RTPB_Natalie%20Ma%20-%20Finance.jpg",
          "filename": "Natalie Ma - Finance.jpg",
          "size": 358095,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/nhiE3DGhRjOVBGd7jqkb_small_Natalie%20Ma%20-%20Finance.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/1MnL6gvwTOSUZdXK4ykQ_large_Natalie%20Ma%20-%20Finance.jpg",
              "width": 773,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/0ztfKmosQli1ynokgTCl_full_Natalie%20Ma%20-%20Finance.jpg",
              "width": 2048,
              "height": 1357
            }
          }
        }
      ],
      "person": [
        "rec64C1WdF2Amk1VV"
      ],
      "(You can't directly edit this column)": "Natalie Ma - Finance Chair"
    },
    "recy3JKUOpqTV1Jxr": {
      "id": "recy3JKUOpqTV1Jxr",
      "createdTime": "2018-10-17T22:21:04.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attz3lVrGAaWLvVNe",
          "url": "https://dl.airtable.com/Eslu6PLTkqUL1WhjWHr1_Simon%20Chen%20-%20Historian.jpg",
          "filename": "Simon Chen - Historian.jpg",
          "size": 157737,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/PoZuAEphTemy2dbzbxf6_small_Simon%20Chen%20-%20Historian.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/fUCCchkGSHmDMXlFs5Z1_large_Simon%20Chen%20-%20Historian.jpg",
              "width": 398,
              "height": 600
            },
            "full": {
              "url": "https://dl.airtable.com/YIPTiVjTJyuFcK34VCKv_full_Simon%20Chen%20-%20Historian.jpg",
              "width": 398,
              "height": 600
            }
          }
        }
      ],
      "person": [
        "reccl1uy2ajMiq1O2"
      ],
      "(You can't directly edit this column)": "Simon Chen - Historian"
    },
    "recdYsI8CVYMgmLJ4": {
      "id": "recdYsI8CVYMgmLJ4",
      "createdTime": "2018-10-17T22:21:28.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "att54kaKvgRJFz17u",
          "url": "https://dl.airtable.com/qRn3sl0fQTiA8EVk31Ha_Xinuye%20Wang%20-%20Finance.jpg",
          "filename": "Xinuye Wang - Finance.jpg",
          "size": 143368,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/jnztBICHQUumOgjMK6Ba_small_Xinuye%20Wang%20-%20Finance.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/vaZoH1nLREWod1glw20w_large_Xinuye%20Wang%20-%20Finance.jpg",
              "width": 400,
              "height": 600
            },
            "full": {
              "url": "https://dl.airtable.com/BCi2xSAjRQmYnXPi91cw_full_Xinuye%20Wang%20-%20Finance.jpg",
              "width": 400,
              "height": 600
            }
          }
        }
      ],
      "person": [
        "recrEeHaWMhxv56jE"
      ],
      "(You can't directly edit this column)": "Xinuye Wang - Finance Chair"
    },
    "recyux8jbE3ZvF4X6": {
      "id": "recyux8jbE3ZvF4X6",
      "createdTime": "2018-10-17T22:22:06.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attfL6xYwXKuq9Ywj",
          "url": "https://dl.airtable.com/jLqHhJXNR2ikLwRDqjxk_Ada%20Ng%20-%20Events.jpg",
          "filename": "Ada Ng - Events.jpg",
          "size": 772077,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/4UiVSKoQ6Y6Sn0gdX4pA_small_Ada%20Ng%20-%20Events.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/tDqntP0XTku2ACc6j5hr_large_Ada%20Ng%20-%20Events.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/ghyljSgKRgqdbmLJoldJ_full_Ada%20Ng%20-%20Events.jpg",
              "width": 1067,
              "height": 800
            }
          }
        }
      ],
      "person": [
        "rec54iAVFwg1HwrW1"
      ],
      "(You can't directly edit this column)": "Ada Ng - Events Chair"
    },
    "recVF1tjI67BNcwu0": {
      "id": "recVF1tjI67BNcwu0",
      "createdTime": "2018-10-17T22:22:07.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attdpoFQ28wYes9Z3",
          "url": "https://dl.airtable.com/kDA3wbcFRE2NUz3ycRwV_Arthur%20Liou%20-%20Finance.jpg",
          "filename": "Arthur Liou - Finance.jpg",
          "size": 93964,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/BIVp3Gn5QBa9dNU97sO2_small_Arthur%20Liou%20-%20Finance.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/LZLg2DIQEqeuKXLGY5wj_large_Arthur%20Liou%20-%20Finance.jpg",
              "width": 639,
              "height": 480
            },
            "full": {
              "url": "https://dl.airtable.com/lHLAbhRS4ydcmQdMyZvh_full_Arthur%20Liou%20-%20Finance.jpg",
              "width": 639,
              "height": 480
            }
          }
        }
      ],
      "person": [
        "recbcCfd2aMzjtrro"
      ],
      "(You can't directly edit this column)": "Arthur Liou - Finance Chair"
    },
    "recsaxUF87czITRBf": {
      "id": "recsaxUF87czITRBf",
      "createdTime": "2018-10-17T22:22:07.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attFZ7Q450WmifDqP",
          "url": "https://dl.airtable.com/pOh6y3elTf24G1EGA4dX_Chris%20Him%20-%20Historian.jpg",
          "filename": "Chris Him - Historian.jpg",
          "size": 135267,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/z08VU5U6QqaGhkR55uN0_small_Chris%20Him%20-%20Historian.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/kjtAYqowQ7SAgr7k3iTZ_large_Chris%20Him%20-%20Historian.jpg",
              "width": 511,
              "height": 383
            },
            "full": {
              "url": "https://dl.airtable.com/42m1ycQRB6OsfTKfBxxU_full_Chris%20Him%20-%20Historian.jpg",
              "width": 511,
              "height": 383
            }
          }
        }
      ],
      "person": [
        "recluqLVujMSWoHUV"
      ],
      "(You can't directly edit this column)": "Chris Kim - Historian"
    },
    "recOTsrW10YbgxArn": {
      "id": "recOTsrW10YbgxArn",
      "createdTime": "2018-10-17T22:22:08.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attIvSxOMH96JILQ1",
          "url": "https://dl.airtable.com/BBU6u4h1Riyvg1NHYhYO_Christina%20Ong%20-%20Historian.jpg",
          "filename": "Christina Ong - Historian.jpg",
          "size": 635705,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/24tR8q3xQ8qqelg7rDME_small_Christina%20Ong%20-%20Historian.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/glvhuXKURLi6tFv3oOTI_large_Christina%20Ong%20-%20Historian.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/COLZwlxQ9K9t6Afnzmvg_full_Christina%20Ong%20-%20Historian.jpg",
              "width": 900,
              "height": 675
            }
          }
        }
      ],
      "person": [
        "rech7Tn0Mt2LITmpc"
      ],
      "(You can't directly edit this column)": "Christina Ong - Historian"
    },
    "recBGlHz815nSSdWi": {
      "id": "recBGlHz815nSSdWi",
      "createdTime": "2018-10-17T22:22:09.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attAtMs7UuOirBgcS",
          "url": "https://dl.airtable.com/G5Tq6m16RCKc3JpcPhzg_Davinci%20Lam%20-%20PR%20Design.jpg",
          "filename": "Davinci Lam - PR Design.jpg",
          "size": 262602,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/syRtjKQbQEGfGWv7ER13_small_Davinci%20Lam%20-%20PR%20Design.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/LE2uhSxIQ0C5UQR7SF6D_large_Davinci%20Lam%20-%20PR%20Design.jpg",
              "width": 621,
              "height": 466
            },
            "full": {
              "url": "https://dl.airtable.com/KbSRp28QNm2MjfnYqKNa_full_Davinci%20Lam%20-%20PR%20Design.jpg",
              "width": 621,
              "height": 466
            }
          }
        }
      ],
      "person": [
        "rec7BBK1UpjDQQiJF"
      ],
      "(You can't directly edit this column)": "Davinci Lam - PR Design"
    },
    "recRYxRcI1EBvHWWr": {
      "id": "recRYxRcI1EBvHWWr",
      "createdTime": "2018-10-17T22:25:00.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "att0kHGLfsnOFDEve",
          "url": "https://dl.airtable.com/7hrkhheqTDGrZsNHxPnf_Emily%20Tsai%20-%20PR%20Marketing.jpg",
          "filename": "Emily Tsai - PR Marketing.jpg",
          "size": 205585,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/xHABk8y2Q2i62zyHIsO3_small_Emily%20Tsai%20-%20PR%20Marketing.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/vppaEiZTzWbvg5AtnVvi_large_Emily%20Tsai%20-%20PR%20Marketing.jpg",
              "width": 588,
              "height": 441
            },
            "full": {
              "url": "https://dl.airtable.com/jx5Wli9ZSv6HMP8MGgrZ_full_Emily%20Tsai%20-%20PR%20Marketing.jpg",
              "width": 588,
              "height": 441
            }
          }
        }
      ],
      "person": [
        "recLxGorRTNI9I0QS"
      ],
      "(You can't directly edit this column)": "Emily Tsai - PR Marketing"
    },
    "recL2c46u3NFrncta": {
      "id": "recL2c46u3NFrncta",
      "createdTime": "2018-10-17T22:25:33.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "att33rqawjytqhqOh",
          "url": "https://dl.airtable.com/ifohpCU8Rzq9stnWoMw4_Jasmine%20Chau%20-%20Exec.jpg",
          "filename": "Jasmine Chau - Exec.jpg",
          "size": 581494,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/kcFcM8rMQDmiOpc6MnPh_small_Jasmine%20Chau%20-%20Exec.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/O2GISGm7TUGBWtaD1G5O_large_Jasmine%20Chau%20-%20Exec.jpg",
              "width": 684,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/btOx4rCwQ2imgpqay3SG_full_Jasmine%20Chau%20-%20Exec.jpg",
              "width": 800,
              "height": 599
            }
          }
        }
      ],
      "person": [
        "recqZKVLh9MwwoRfn"
      ],
      "(You can't directly edit this column)": "Jasmine Chau - Executive Director"
    },
    "recYDrXQ1G6b6s9oj": {
      "id": "recYDrXQ1G6b6s9oj",
      "createdTime": "2018-10-17T22:26:02.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attudOrwe3vXWo9Ga",
          "url": "https://dl.airtable.com/Hkmb0IP4ToyDRDjSZhcX_Josh%20Park%20-%20Outreach.jpg",
          "filename": "Josh Park - Outreach.jpg",
          "size": 270234,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ATGZ0oPgTEqLkMc9gkEK_small_Josh%20Park%20-%20Outreach.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/zNhbdTwRUeK2dsdgcuI2_large_Josh%20Park%20-%20Outreach.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/lzUvFoGvTiCI6T1Sdhrb_full_Josh%20Park%20-%20Outreach.jpg",
              "width": 720,
              "height": 540
            }
          }
        }
      ],
      "person": [
        "rec9jN75kKwlEUKlP"
      ],
      "(You can't directly edit this column)": "Josh Park - Outreach Chair"
    },
    "recvod600x05DuouE": {
      "id": "recvod600x05DuouE",
      "createdTime": "2018-10-17T22:26:33.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attzjOxpIerXQ24qQ",
          "url": "https://dl.airtable.com/M3NM9tsnSIuTyDxkx1KG_Kevin%20Hayakawa%20-%20Events.jpg",
          "filename": "Kevin Hayakawa - Events.jpg",
          "size": 836589,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ozIS5GUyRYuSpan4iS6O_small_Kevin%20Hayakawa%20-%20Events.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/dhaSSzxuT8qtlK4xSGyB_large_Kevin%20Hayakawa%20-%20Events.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/upaQRa35Sqe3m5VNu6JS_full_Kevin%20Hayakawa%20-%20Events.jpg",
              "width": 1200,
              "height": 900
            }
          }
        }
      ],
      "person": [
        "rec3RLZl3eC9SXHwJ"
      ],
      "(You can't directly edit this column)": "Kevin Hayakawa - Events Chair"
    },
    "recsvU27ydWdr0eSV": {
      "id": "recsvU27ydWdr0eSV",
      "createdTime": "2018-10-17T22:27:01.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attv8uCVbe6Gyh9aS",
          "url": "https://dl.airtable.com/rtLT4VjQF6CAuVfXyxgl_Xinyue%20Wang%20-%20Finance.jpg",
          "filename": "Xinyue Wang - Finance.jpg",
          "size": 240281,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/VglGlsZDRLakyuERQwv0_small_Xinyue%20Wang%20-%20Finance.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/7PJFqyJ4SuuncTqy239a_large_Xinyue%20Wang%20-%20Finance.jpg",
              "width": 515,
              "height": 386
            },
            "full": {
              "url": "https://dl.airtable.com/v93gem1lS9yiQG3R7Dw6_full_Xinyue%20Wang%20-%20Finance.jpg",
              "width": 515,
              "height": 386
            }
          }
        }
      ],
      "person": [
        "reczF9UfpTvqHGWjE"
      ],
      "(You can't directly edit this column)": "Xinyue Wang - Finance Chair"
    },
    "recVXN0oNRF3K1oY8": {
      "id": "recVXN0oNRF3K1oY8",
      "createdTime": "2018-10-17T22:27:42.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attlJGaGb7YgaypSK",
          "url": "https://dl.airtable.com/EDnLdSJCSz68Psnv5VQS_Zoey%20Kenny%20-%20PR%20Marketing.jpg",
          "filename": "Zoey Kenny - PR Marketing.jpg",
          "size": 216274,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/P1JUVicQWeKebsxTyjwG_small_Zoey%20Kenny%20-%20PR%20Marketing.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/O0PAcaDdTLK6U6FZNTk5_large_Zoey%20Kenny%20-%20PR%20Marketing.jpg",
              "width": 640,
              "height": 480
            },
            "full": {
              "url": "https://dl.airtable.com/rSARH9fCTnmzNPvb0swr_full_Zoey%20Kenny%20-%20PR%20Marketing.jpg",
              "width": 640,
              "height": 480
            }
          }
        }
      ],
      "person": [
        "recXSiCVLPXdDO5g8"
      ],
      "(You can't directly edit this column)": "Zoey Kenny - PR Marketing"
    },
    "rec6POiIFWbnVhXji": {
      "id": "rec6POiIFWbnVhXji",
      "createdTime": "2018-10-17T22:28:34.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "att0P9lZLxAkEAFGk",
          "url": "https://dl.airtable.com/zjBW5oFSQNqNuJ4TZxkf_Arthur%20Liao%20-%20Finance.jpg",
          "filename": "Arthur Liao - Finance.jpg",
          "size": 119325,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/cKgK7DdpS1GypJMNqxVi_small_Arthur%20Liao%20-%20Finance.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/x3NFUPAkRQmL7KvCB0ch_large_Arthur%20Liao%20-%20Finance.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/WHPizGtR3OS3AAiS7WsU_full_Arthur%20Liao%20-%20Finance.jpg",
              "width": 639,
              "height": 639
            }
          }
        }
      ],
      "person": [
        "recbcCfd2aMzjtrro"
      ],
      "(You can't directly edit this column)": "Arthur Liou - Finance Chair"
    },
    "recwIOfNVdHw2rgi9": {
      "id": "recwIOfNVdHw2rgi9",
      "createdTime": "2018-10-17T22:28:34.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attC8Kl75m9aersFN",
          "url": "https://dl.airtable.com/Y6QH33ttSOa3H1I8dBZW_Christina%20Ong%20-%20Historian.jpg",
          "filename": "Christina Ong - Historian.jpg",
          "size": 279031,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/gkHYs00SgylkzwT72Ndx_small_Christina%20Ong%20-%20Historian.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/TzcnqGdYSJKf9d2WUHbO_large_Christina%20Ong%20-%20Historian.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/Gy3kayEShSZgOPkCu7kO_full_Christina%20Ong%20-%20Historian.jpg",
              "width": 551,
              "height": 551
            }
          }
        }
      ],
      "person": [
        "rech7Tn0Mt2LITmpc"
      ],
      "(You can't directly edit this column)": "Christina Ong - Historian"
    },
    "reclH2WaVrHdkjc1p": {
      "id": "reclH2WaVrHdkjc1p",
      "createdTime": "2018-10-17T22:28:35.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "att6UuxpymvgoDF8B",
          "url": "https://dl.airtable.com/PGUoSNZpTBmQyXc39S4w_Emilio%20Cuartero%20-%20PR%20Design.jpg",
          "filename": "Emilio Cuartero - PR Design.jpg",
          "size": 87673,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/rlmLtPVWQwByIoSvR9xS_small_Emilio%20Cuartero%20-%20PR%20Design.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ecZImO2pQqetZXuiEagO_large_Emilio%20Cuartero%20-%20PR%20Design.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/BEXDqxm6TAOi7GlGb7XQ_full_Emilio%20Cuartero%20-%20PR%20Design.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recn9QkB6vln1iqIG"
      ],
      "(You can't directly edit this column)": "Emilio Cuartero - PR Design"
    },
    "recCTWLDbdrqn2nYJ": {
      "id": "recCTWLDbdrqn2nYJ",
      "createdTime": "2018-10-17T22:28:35.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "att3OcmsLHNk8pfc5",
          "url": "https://dl.airtable.com/gxKtcScpQOaGVM9g6ITb_Jasmine%20Chau%20-%20Exec.jpg",
          "filename": "Jasmine Chau - Exec.jpg",
          "size": 291514,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/st6JCiu6SRW0ZBxRN09T_small_Jasmine%20Chau%20-%20Exec.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/F5Lw4qvfQnmYD4v8fKTe_large_Jasmine%20Chau%20-%20Exec.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/3qF3LXodQAqmBIv3KxKw_full_Jasmine%20Chau%20-%20Exec.jpg",
              "width": 683,
              "height": 683
            }
          }
        }
      ],
      "person": [
        "recqZKVLh9MwwoRfn"
      ],
      "(You can't directly edit this column)": "Jasmine Chau - Executive Director"
    },
    "recvQimuy5LNCjCSH": {
      "id": "recvQimuy5LNCjCSH",
      "createdTime": "2018-10-17T22:28:39.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attwKRt1xQLcKxoG5",
          "url": "https://dl.airtable.com/AXhjVMxgSmy5qPnoB7Fo_Josh%20Park%20-%20Outreach.jpg",
          "filename": "Josh Park - Outreach.jpg",
          "size": 294848,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/nkQqQyJ0REgsW4UsJbyA_small_Josh%20Park%20-%20Outreach.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ceSe41bmS6COnuHfSaUx_large_Josh%20Park%20-%20Outreach.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/TpyqJnJVTgITKqm2l9tA_full_Josh%20Park%20-%20Outreach.jpg",
              "width": 611,
              "height": 611
            }
          }
        }
      ],
      "person": [
        "rec9jN75kKwlEUKlP"
      ],
      "(You can't directly edit this column)": "Josh Park - Outreach Chair"
    },
    "recpDL3KDWfgRHxc4": {
      "id": "recpDL3KDWfgRHxc4",
      "createdTime": "2018-10-17T22:31:33.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attpaJ9du5BuHH7dt",
          "url": "https://dl.airtable.com/edtgOLNQ7Cu4pXb4FVJO_Karen%20Ding%20-%20Vice%20Exec.jpg",
          "filename": "Karen Ding - Vice Exec.jpg",
          "size": 484644,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/UO039KCwS6enfYbCaN6d_small_Karen%20Ding%20-%20Vice%20Exec.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/21yYofEoROiuhPXj0V25_large_Karen%20Ding%20-%20Vice%20Exec.jpg",
              "width": 513,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/JUxfNMXpQWOMgJbHUY7B_full_Karen%20Ding%20-%20Vice%20Exec.jpg",
              "width": 1024,
              "height": 1023
            }
          }
        }
      ],
      "person": [
        "recFHoYhUBiV5URhr"
      ],
      "(You can't directly edit this column)": "Karen Ding - Vice Executive"
    },
    "recCsdE1LTyQrjMBW": {
      "id": "recCsdE1LTyQrjMBW",
      "createdTime": "2018-10-17T22:32:05.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attIcsqLQYmqCUrYK",
          "url": "https://dl.airtable.com/dr3HkoqoTlu8xdzP01iN_Kathie%20Tian%20-%20Events.jpg",
          "filename": "Kathie Tian - Events.jpg",
          "size": 200381,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/QpZluQeZQpCoMp8FGIJj_small_Kathie%20Tian%20-%20Events.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/GbCsb6XIT4ivgny203a7_large_Kathie%20Tian%20-%20Events.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/mm0jsPwbQJO0Ta5fXbK5_full_Kathie%20Tian%20-%20Events.jpg",
              "width": 750,
              "height": 750
            }
          }
        }
      ],
      "person": [
        "rec8WQB0KC7QXPy7z"
      ],
      "(You can't directly edit this column)": "Kathie Tian - Events Chair"
    },
    "rec8nwJXLJ37OV0rQ": {
      "id": "rec8nwJXLJ37OV0rQ",
      "createdTime": "2018-10-17T22:32:29.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attSGgSwLSoJCStZe",
          "url": "https://dl.airtable.com/vJocYYMiQbSsqAYHc6mz_Kelly%20Yong%20-%20Finance.jpg",
          "filename": "Kelly Yong - Finance.jpg",
          "size": 284491,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/xsmNYgOST2YNcK9izS0c_small_Kelly%20Yong%20-%20Finance.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/LLzZXzqzQZSn7kxrNtHr_large_Kelly%20Yong%20-%20Finance.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/apusaWQ4S8639UlnmpO9_full_Kelly%20Yong%20-%20Finance.jpg",
              "width": 640,
              "height": 640
            }
          }
        }
      ],
      "person": [
        "recXJr3fTDXjPWZd6"
      ],
      "(You can't directly edit this column)": "Kelly Yong - Finance Chair"
    },
    "recBfzJCrlmmV2q5q": {
      "id": "recBfzJCrlmmV2q5q",
      "createdTime": "2018-10-17T22:32:53.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "atti51MCq2QROj5KW",
          "url": "https://dl.airtable.com/HlRR9SOqQmuLlbUBwX3W_Michael%20Chu%20-%20PR%20Marketing.jpg",
          "filename": "Michael Chu - PR Marketing.jpg",
          "size": 400579,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/2St3YTx1TZWLqudg6cM9_small_Michael%20Chu%20-%20PR%20Marketing.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/dFVHUCXUTAubEnBZKSvg_large_Michael%20Chu%20-%20PR%20Marketing.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/z73LKrP7RyucMk81ZloH_full_Michael%20Chu%20-%20PR%20Marketing.jpg",
              "width": 908,
              "height": 908
            }
          }
        }
      ],
      "person": [
        "reclpX3jvpv0V44dl"
      ],
      "(You can't directly edit this column)": "Michael Chu - PR Marketing"
    },
    "recKgeJ2ciU7ic8Kr": {
      "id": "recKgeJ2ciU7ic8Kr",
      "createdTime": "2018-10-17T22:33:27.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attq1VwsXD8RhyJlL",
          "url": "https://dl.airtable.com/ExzMyAqS261Syl5hB4K0_Queena%20Xu%20-%20Historian.jpg",
          "filename": "Queena Xu - Historian.jpg",
          "size": 374814,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/RXlnTe9jQGung7oktqtL_small_Queena%20Xu%20-%20Historian.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/WuU9hDi1TVuWgFCkqbpI_large_Queena%20Xu%20-%20Historian.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/x0Sf4tHiQZAwfhJI3Z85_full_Queena%20Xu%20-%20Historian.jpg",
              "width": 1024,
              "height": 1024
            }
          }
        }
      ],
      "person": [
        "recm9GGNQwNn3Y0uG"
      ],
      "(You can't directly edit this column)": "Queena Xu - Historian"
    },
    "rec59rkeuQcbbDZ7V": {
      "id": "rec59rkeuQcbbDZ7V",
      "createdTime": "2018-10-17T22:33:54.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attqEVohbPiPm5Mgw",
          "url": "https://dl.airtable.com/KmRc97LfSH2B9Bm5aosk_Ruiling%20Wen%20-%20PR%20Marketing.jpg",
          "filename": "Ruiling Wen - PR Marketing.jpg",
          "size": 563578,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/WfNYxPryRTm8rf0FTtLf_small_Ruiling%20Wen%20-%20PR%20Marketing.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Fj9giroTxCIJ52GjDRbc_large_Ruiling%20Wen%20-%20PR%20Marketing.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/jNSLvFORSjyfNPk9p1h9_full_Ruiling%20Wen%20-%20PR%20Marketing.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recH0VHagnAyTBeKG"
      ],
      "(You can't directly edit this column)": "Ruiling Wen - PR Marketing"
    },
    "recKCKwCa2KwUjvDm": {
      "id": "recKCKwCa2KwUjvDm",
      "createdTime": "2018-10-17T22:34:21.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attDN9fhgCwGQs09f",
          "url": "https://dl.airtable.com/a4uaG1DQfiKZl4JZobXA_Ryan%20Barroga%20-%20Vice%20Exec.jpg",
          "filename": "Ryan Barroga - Vice Exec.jpg",
          "size": 302792,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/VFnxdL6rTnOrnvWKr9HD_small_Ryan%20Barroga%20-%20Vice%20Exec.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ahNgS3qTSo6gaZ7MEsMf_large_Ryan%20Barroga%20-%20Vice%20Exec.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/3NMjuX5CQoaQQfah9MtL_full_Ryan%20Barroga%20-%20Vice%20Exec.jpg",
              "width": 640,
              "height": 640
            }
          }
        }
      ],
      "person": [
        "reczfMxHZL2l3qHUm"
      ],
      "(You can't directly edit this column)": "Ryan Barroga - Vice Executive"
    },
    "recNLqvbB61XluNA8": {
      "id": "recNLqvbB61XluNA8",
      "createdTime": "2018-10-17T22:34:45.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attoJmKIc9gjbFSEG",
          "url": "https://dl.airtable.com/LRYlrHAvQtmuu5ZIDthY_Susan%20Shen%20-%20Events.jpg",
          "filename": "Susan Shen - Events.jpg",
          "size": 441434,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/mXH1jdxHT7mohj8JY0WJ_small_Susan%20Shen%20-%20Events.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/kRrQO4zQVudIqxj2N7XS_large_Susan%20Shen%20-%20Events.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/OTom4jH7TqWQUWHcVAKU_full_Susan%20Shen%20-%20Events.jpg",
              "width": 640,
              "height": 640
            }
          }
        }
      ],
      "person": [
        "recgVaA2OjSYAR8oD"
      ],
      "(You can't directly edit this column)": "Susan Shen - Events Chair"
    },
    "rectJjLvB0uQXlcFA": {
      "id": "rectJjLvB0uQXlcFA",
      "createdTime": "2018-10-17T22:35:06.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attRriHaJzoebhkYv",
          "url": "https://dl.airtable.com/dMhqoEzhSiWQ002agTG0_Swan%20Kim%20-%20PR%20Marketing.jpeg",
          "filename": "Swan Kim - PR Marketing.jpeg",
          "size": 370862,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/SlNkIdgESbxuUe5AJYi9_small_Swan%20Kim%20-%20PR%20Marketing.jpeg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Qow2uQ83RfG3SIoNXP3m_large_Swan%20Kim%20-%20PR%20Marketing.jpeg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/oYim96TMTzWgxCPFUpEP_full_Swan%20Kim%20-%20PR%20Marketing.jpeg",
              "width": 815,
              "height": 815
            }
          }
        }
      ],
      "person": [
        "recoqVLPTKw2gNmA1"
      ],
      "(You can't directly edit this column)": "Swan Kim - PR Marketing"
    },
    "recxowEgkbgyTq4w4": {
      "id": "recxowEgkbgyTq4w4",
      "createdTime": "2018-10-17T22:35:30.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attMjJ7rs3wmuYwNF",
          "url": "https://dl.airtable.com/VcYq2XgxRiCNcOjjQgKt_Tiffanie%20Abacan%20-%20Historian.jpg",
          "filename": "Tiffanie Abacan - Historian.jpg",
          "size": 301013,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/k65EaM6QR9GowNcB2fi8_small_Tiffanie%20Abacan%20-%20Historian.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/HeXdJuEIR1t0D46FxBcw_large_Tiffanie%20Abacan%20-%20Historian.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/BN9GfmHxTrqTQcoABsj0_full_Tiffanie%20Abacan%20-%20Historian.jpg",
              "width": 640,
              "height": 640
            }
          }
        }
      ],
      "person": [
        "recRcjNWpPIB6MhSE"
      ],
      "(You can't directly edit this column)": "Tiffanie Abacan - Historian"
    },
    "recMZaerYaUo8bIa2": {
      "id": "recMZaerYaUo8bIa2",
      "createdTime": "2018-10-17T22:35:42.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attMu5h0VjVikvKTI",
          "url": "https://dl.airtable.com/gdDsI1k4S7WQc6PsUhHz_Ashmitha%20Thinagar%20-%20Finance.jpg",
          "filename": "Ashmitha Thinagar - Finance.jpg",
          "size": 78840,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/gByTJmeLTuG4Cr8RHrwq_small_Ashmitha%20Thinagar%20-%20Finance.jpg",
              "width": 49,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/rNCsstXkQkqHqLHKdUvk_large_Ashmitha%20Thinagar%20-%20Finance.jpg",
              "width": 697,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/iZLcMk0CQ1iwX5egLMb9_full_Ashmitha%20Thinagar%20-%20Finance.jpg",
              "width": 700,
              "height": 514
            }
          }
        }
      ],
      "person": [
        "rec1NK9KoDeRi9Pq9"
      ],
      "(You can't directly edit this column)": "Ashmitha Thinagar - Finance Chair"
    },
    "recD9K0ch5nqXUBlx": {
      "id": "recD9K0ch5nqXUBlx",
      "createdTime": "2018-10-17T22:37:41.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attuJ7mcbQjliKWgd",
          "url": "https://dl.airtable.com/3grEj86wT9KzP4jy8isH_Chelsea%20Zhang%20-%20PR%20Marketing.jpg",
          "filename": "Chelsea Zhang - PR Marketing.jpg",
          "size": 109452,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/SPCps3JsSj2c5sH7Mauc_small_Chelsea%20Zhang%20-%20PR%20Marketing.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/NlYGuZWbTvClNBzjDnFz_large_Chelsea%20Zhang%20-%20PR%20Marketing.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/B58Zfn1CQ5y9JdVBHTuL_full_Chelsea%20Zhang%20-%20PR%20Marketing.jpg",
              "width": 800,
              "height": 533
            }
          }
        }
      ],
      "person": [
        "recrAtRib7HBEcJB9"
      ],
      "(You can't directly edit this column)": "Chelsea Zhang - PR Marketing"
    },
    "recboh27pftuiP1MF": {
      "id": "recboh27pftuiP1MF",
      "createdTime": "2018-10-17T22:38:11.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "att7L9EFI8SrDPQX5",
          "url": "https://dl.airtable.com/aCjOsnbRa2noZvY4EKKD_Chris%20Kim%20-%20Vice%20Exec.jpg",
          "filename": "Chris Kim - Vice Exec.jpg",
          "size": 132222,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/tzGz7lTTQ2SLaV8qxJcg_small_Chris%20Kim%20-%20Vice%20Exec.jpg",
              "width": 28,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/pBZlQU0VTyuxiaCvY60G_large_Chris%20Kim%20-%20Vice%20Exec.jpg",
              "width": 512,
              "height": 661
            },
            "full": {
              "url": "https://dl.airtable.com/6mpu5pSFSgyf0uEqg0hN_full_Chris%20Kim%20-%20Vice%20Exec.jpg",
              "width": 650,
              "height": 839
            }
          }
        }
      ],
      "person": [
        "recluqLVujMSWoHUV"
      ],
      "(You can't directly edit this column)": "Chris Kim - Vice Executive"
    },
    "rec0xXxNqIKyo0acv": {
      "id": "rec0xXxNqIKyo0acv",
      "createdTime": "2018-10-17T22:38:34.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attlFEvvgsNWzgKh2",
          "url": "https://dl.airtable.com/8CIrIYVqRXuraXArAJ3y_Danielle%20Ip%20-%20Finance.jpg",
          "filename": "Danielle Ip - Finance.jpg",
          "size": 118481,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/yi5jDcaREOlOjvLeZjgo_small_Danielle%20Ip%20-%20Finance.jpg",
              "width": 49,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ikSwpsAYT0S1tZNRNe5k_large_Danielle%20Ip%20-%20Finance.jpg",
              "width": 698,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/MOXp8TEaRICZW9fsfcu1_full_Danielle%20Ip%20-%20Finance.jpg",
              "width": 954,
              "height": 700
            }
          }
        }
      ],
      "person": [
        "recoKdC5z3vmLbrhF"
      ],
      "(You can't directly edit this column)": "Danielle Ip - Finance Chair"
    },
    "rec1eoD5Alq8iuRRR": {
      "id": "rec1eoD5Alq8iuRRR",
      "createdTime": "2018-10-17T22:38:58.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attdOKHlt9oA0hF7I",
          "url": "https://dl.airtable.com/9tXs3BOkRzuZQgQxOp48_Emily%20Liang%20-%20PR%20Marketing.jpg",
          "filename": "Emily Liang - PR Marketing.jpg",
          "size": 76056,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/c7EW78Z9RJe6ipYAlnaG_small_Emily%20Liang%20-%20PR%20Marketing.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ABR7b0bQOON0ToDauFLU_large_Emily%20Liang%20-%20PR%20Marketing.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/c8RLUmDaTNybzj717MEo_full_Emily%20Liang%20-%20PR%20Marketing.jpg",
              "width": 606,
              "height": 606
            }
          }
        }
      ],
      "person": [
        "rec4DL1eippoez0bh"
      ],
      "(You can't directly edit this column)": "Emily Liang - PR Marketing"
    },
    "recvkizTwIECyfD8A": {
      "id": "recvkizTwIECyfD8A",
      "createdTime": "2018-10-17T22:39:24.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attZutfNeefHWZKne",
          "url": "https://dl.airtable.com/KquUYroS1eGkR1AoSE4d_Jasmine%20Tatah%20-%20Outreach.jpg",
          "filename": "Jasmine Tatah - Outreach.jpg",
          "size": 78766,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/0x8YmCV4QrOkKTEudbnU_small_Jasmine%20Tatah%20-%20Outreach.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/jpQdv0OMSMqbq3GC6OgD_large_Jasmine%20Tatah%20-%20Outreach.jpg",
              "width": 773,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/eASkxVdwT6arrNiXuuKf_full_Jasmine%20Tatah%20-%20Outreach.jpg",
              "width": 773,
              "height": 512
            }
          }
        }
      ],
      "person": [
        "recRTWAYnQmB1tE5v"
      ],
      "(You can't directly edit this column)": "Jasmine Tatah - Outreach Chair"
    },
    "recCUymelnvLksVOH": {
      "id": "recCUymelnvLksVOH",
      "createdTime": "2018-10-17T22:39:46.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "att2NgAKJUrodkSpW",
          "url": "https://dl.airtable.com/DJKcpgG5T5WutwtnPZBQ_Jinnie%20Rhee%20-%20PR%20Marketing.jpg",
          "filename": "Jinnie Rhee - PR Marketing.jpg",
          "size": 67809,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/RunoehRTQ6KGc3m6mMrX_small_Jinnie%20Rhee%20-%20PR%20Marketing.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/leMKCnBqRD2tPO5hG4EC_large_Jinnie%20Rhee%20-%20PR%20Marketing.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/1hqhx1NjTaajfa6JrkM7_full_Jinnie%20Rhee%20-%20PR%20Marketing.jpg",
              "width": 800,
              "height": 533
            }
          }
        }
      ],
      "person": [
        "recnnv2dbvHIZ2dGJ"
      ],
      "(You can't directly edit this column)": "Jinnie Rhee - PR Marketing"
    },
    "recRn726PeTJUTlp1": {
      "id": "recRn726PeTJUTlp1",
      "createdTime": "2018-10-17T22:40:10.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attuJY9ZFKz2dhgqu",
          "url": "https://dl.airtable.com/bSKRcxFBRIiAW4VckVqu_Julie%20Yu%20-%20Finance.jpg",
          "filename": "Julie Yu - Finance.jpg",
          "size": 83773,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/vt3zfsz4Qyu6zW5sMy8c_small_Julie%20Yu%20-%20Finance.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/lTmpoUCqSeOeVnXQ5Ffs_large_Julie%20Yu%20-%20Finance.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/4L0BzvMZQbegS94ukbif_full_Julie%20Yu%20-%20Finance.jpg",
              "width": 800,
              "height": 800
            }
          }
        }
      ],
      "person": [
        "recDBy6u6VlMpeiMt"
      ],
      "(You can't directly edit this column)": "Julie Yu - Finance Chair"
    },
    "recIjhqWDW2hFdXNs": {
      "id": "recIjhqWDW2hFdXNs",
      "createdTime": "2018-10-17T22:40:31.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "atta7f86EyNKZL2Q1",
          "url": "https://dl.airtable.com/IWc95lG9QvKuAg6CGYy1_Karen%20Ding%20-%20Vice%20Exec.jpg",
          "filename": "Karen Ding - Vice Exec.jpg",
          "size": 100322,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/g6CwmGpRTLupIMIelK7p_small_Karen%20Ding%20-%20Vice%20Exec.jpg",
              "width": 28,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Ro6EpbyiRjmPfqLD1fqM_large_Karen%20Ding%20-%20Vice%20Exec.jpg",
              "width": 512,
              "height": 661
            },
            "full": {
              "url": "https://dl.airtable.com/Wdqg99wGSv2aZV581yAo_full_Karen%20Ding%20-%20Vice%20Exec.jpg",
              "width": 620,
              "height": 800
            }
          }
        }
      ],
      "person": [
        "recFHoYhUBiV5URhr"
      ],
      "(You can't directly edit this column)": "Karen Ding - Vice Executive"
    },
    "recZpYxJZgts0bfGu": {
      "id": "recZpYxJZgts0bfGu",
      "createdTime": "2018-10-17T22:40:53.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attTHKFOMor4h6KUs",
          "url": "https://dl.airtable.com/YvSnIvNhSGqDYPSMVpzR_Kevin%20Pham%20-%20Events.jpg",
          "filename": "Kevin Pham - Events.jpg",
          "size": 94451,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/4YhxcYEQUKTDEhOO3qwc_small_Kevin%20Pham%20-%20Events.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/11IRiVbRh2d69yECPqKJ_large_Kevin%20Pham%20-%20Events.jpg",
              "width": 512,
              "height": 676
            },
            "full": {
              "url": "https://dl.airtable.com/64DCCLt3Ri6NAlA6WYZ8_full_Kevin%20Pham%20-%20Events.jpg",
              "width": 600,
              "height": 792
            }
          }
        }
      ],
      "person": [
        "recTyIipOm1vPBdpw"
      ],
      "(You can't directly edit this column)": "Kevin Pham - Events Chair"
    },
    "recuvB9shc9cyE0Sw": {
      "id": "recuvB9shc9cyE0Sw",
      "createdTime": "2018-10-17T22:41:14.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attxLmTEHc7xziTML",
          "url": "https://dl.airtable.com/HYAz6TDReimO5EMnBoqU_Queena%20Xu%20-%20Historian.jpg",
          "filename": "Queena Xu - Historian.jpg",
          "size": 88268,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/wyiAwT9IQTuVsQkSLC4I_small_Queena%20Xu%20-%20Historian.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/gVCA65RGKJAMmKX876jA_large_Queena%20Xu%20-%20Historian.jpg",
              "width": 680,
              "height": 510
            },
            "full": {
              "url": "https://dl.airtable.com/nmxd4AgST1CCP2j9mJ11_full_Queena%20Xu%20-%20Historian.jpg",
              "width": 680,
              "height": 510
            }
          }
        }
      ],
      "person": [
        "recm9GGNQwNn3Y0uG"
      ],
      "(You can't directly edit this column)": "Queena Xu - Historian"
    },
    "recq43Z718PFa7rNz": {
      "id": "recq43Z718PFa7rNz",
      "createdTime": "2018-10-17T22:41:37.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attQKgUMBF18DVJGO",
          "url": "https://dl.airtable.com/HzT0LQTMQPC2PKWJ4jlm_Ryan%20Barroga%20-%20Exec.jpg",
          "filename": "Ryan Barroga - Exec.jpg",
          "size": 131403,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/y4tgBLAZRKKpMeS1I1jQ_small_Ryan%20Barroga%20-%20Exec.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/we0OnMnlTECfbmc5PKCc_large_Ryan%20Barroga%20-%20Exec.jpg",
              "width": 512,
              "height": 762
            },
            "full": {
              "url": "https://dl.airtable.com/93OVDYqtSNyw9AqttnAX_full_Ryan%20Barroga%20-%20Exec.jpg",
              "width": 605,
              "height": 900
            }
          }
        }
      ],
      "person": [
        "reczfMxHZL2l3qHUm"
      ],
      "(You can't directly edit this column)": "Ryan Barroga - Executive Director"
    },
    "rec58m0QuSsWYPy3i": {
      "id": "rec58m0QuSsWYPy3i",
      "createdTime": "2018-10-17T22:42:01.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "att7Yywvv9pyPfMud",
          "url": "https://dl.airtable.com/A95vsiFYRDW5ZN1LM5nZ_Ryan%20Ta%20-%20Events.jpg",
          "filename": "Ryan Ta - Events.jpg",
          "size": 75996,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/wZeXtJulTAe0ziYiZlAE_small_Ryan%20Ta%20-%20Events.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/XIOTykF6QJiDRWpNwAvf_large_Ryan%20Ta%20-%20Events.jpg",
              "width": 512,
              "height": 675
            },
            "full": {
              "url": "https://dl.airtable.com/V3NczUFQKmqOqidnK07D_full_Ryan%20Ta%20-%20Events.jpg",
              "width": 546,
              "height": 720
            }
          }
        }
      ],
      "person": [
        "recLla3pij2rxqiUK"
      ],
      "(You can't directly edit this column)": "Ryan Ta - Events Chair"
    },
    "recbAqu4Hf1mDgAwf": {
      "id": "recbAqu4Hf1mDgAwf",
      "createdTime": "2018-10-17T22:42:22.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attBLZxsMVsIoETXM",
          "url": "https://dl.airtable.com/x34KDATtev3Y07yuO1Iw_Shirley%20Li%20-%20PR%20Design.jpg",
          "filename": "Shirley Li - PR Design.jpg",
          "size": 52536,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/D5lgEYbpTMmhINbMYxB2_small_Shirley%20Li%20-%20PR%20Design.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/IQR5ckQkRQukvpW6JUlm_large_Shirley%20Li%20-%20PR%20Design.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/SjMm4S5XTtOnXHB8wygX_full_Shirley%20Li%20-%20PR%20Design.jpg",
              "width": 720,
              "height": 720
            }
          }
        }
      ],
      "person": [
        "recLibXAEVugrELPu"
      ],
      "(You can't directly edit this column)": "Shirley Li - PR Design"
    },
    "recwvKkgeHb2SAKOZ": {
      "id": "recwvKkgeHb2SAKOZ",
      "createdTime": "2018-10-17T22:42:42.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attojzzyvP7RoJ3ZQ",
          "url": "https://dl.airtable.com/VDJkBGpkS9GK7r4PqAMY_Tiffanie%20Abacan%20-%20Historian.jpg",
          "filename": "Tiffanie Abacan - Historian.jpg",
          "size": 301013,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/PJ5EAfmKR9KixGxNLTFP_small_Tiffanie%20Abacan%20-%20Historian.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/qAQf4KwUS7GsBmbjRwEH_large_Tiffanie%20Abacan%20-%20Historian.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/2uxfSq0fQH64cPjZZ6iZ_full_Tiffanie%20Abacan%20-%20Historian.jpg",
              "width": 640,
              "height": 640
            }
          }
        }
      ],
      "person": [
        "recRcjNWpPIB6MhSE"
      ],
      "(You can't directly edit this column)": "Tiffanie Abacan - Historian"
    },
    "recsR3dCQFQBuj3Qs": {
      "id": "recsR3dCQFQBuj3Qs",
      "createdTime": "2018-10-17T22:43:02.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attVyydvxHkzyOyvK",
          "url": "https://dl.airtable.com/gUy2ocGLQUqBr7qQP61F_William%20Zheng%20-%20Historian.jpg",
          "filename": "William Zheng - Historian.jpg",
          "size": 86535,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/4xqiZ7SHRGqysqZWMT75_small_William%20Zheng%20-%20Historian.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/T27pCVSbTW2zwdlH8e9f_large_William%20Zheng%20-%20Historian.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/QOZ41shpTa9zgaXrEO1A_full_William%20Zheng%20-%20Historian.jpg",
              "width": 762,
              "height": 571
            }
          }
        }
      ],
      "person": [
        "recjMN8Zx4KlJGDUL"
      ],
      "(You can't directly edit this column)": "William Zheng - Historian"
    },
    "recWEZvMv7ktz9kHI": {
      "id": "recWEZvMv7ktz9kHI",
      "createdTime": "2018-10-17T22:43:42.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "att3gFZ1njvSxFvlF",
          "url": "https://dl.airtable.com/Z5A5rcUySgiDpzg6phPq_Winn%20Cui%20-%20Outreach.jpg",
          "filename": "Winn Cui - Outreach.jpg",
          "size": 88693,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/bN41hsA6SWWDriujDhRB_small_Winn%20Cui%20-%20Outreach.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ybZ2j5DfRpWlNl8v47t7_large_Winn%20Cui%20-%20Outreach.jpg",
              "width": 771,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/DTbcCnUcTuCIQdQsSthQ_full_Winn%20Cui%20-%20Outreach.jpg",
              "width": 800,
              "height": 531
            }
          }
        }
      ],
      "person": [
        "reccusci4MPy2I4i4"
      ],
      "(You can't directly edit this column)": "Winn Cui - Outreach Chair"
    },
    "recgHxVPeQJD7UKwT": {
      "id": "recgHxVPeQJD7UKwT",
      "createdTime": "2018-10-17T22:44:49.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attwSFypOzE240DJ9",
          "url": "https://dl.airtable.com/3SGVGd8ARIShQrE1ffrV_Alex%20Nguyen%20-%20Historian.jpg",
          "filename": "Alex Nguyen - Historian.jpg",
          "size": 5504490,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/nZS7RF1qTKmjRLQWX4h9_small_Alex%20Nguyen%20-%20Historian.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ZutMyKTQaiQYWDC8ascY_large_Alex%20Nguyen%20-%20Historian.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/iriFcUiS0u9QuM6slWPW_full_Alex%20Nguyen%20-%20Historian.jpg",
              "width": 3000,
              "height": 2250
            }
          }
        }
      ],
      "person": [
        "recVwOcszdvg6tMe0"
      ],
      "(You can't directly edit this column)": "Alex Nguyen - Historian"
    },
    "recNGBiCiOwgqKOtw": {
      "id": "recNGBiCiOwgqKOtw",
      "createdTime": "2018-10-17T22:44:50.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "att6ITWybIBBWhNDz",
          "url": "https://dl.airtable.com/w1xQxOtTYOvEyorIEwRH_Ashmitha%20Thinagar%20-%20Finance.jpg",
          "filename": "Ashmitha Thinagar - Finance.jpg",
          "size": 125438,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/RioftdZiQ0mGIiBHvF5M_small_Ashmitha%20Thinagar%20-%20Finance.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/fts0CzeZRxEz2UIGAUH0_large_Ashmitha%20Thinagar%20-%20Finance.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/BbHVg2PPQQC02GAhz94A_full_Ashmitha%20Thinagar%20-%20Finance.jpg",
              "width": 1356,
              "height": 1356
            }
          }
        }
      ],
      "person": [
        "rec1NK9KoDeRi9Pq9"
      ],
      "(You can't directly edit this column)": "Ashmitha Thinagar - Finance Chair"
    },
    "recTLInL69e8UmYh7": {
      "id": "recTLInL69e8UmYh7",
      "createdTime": "2018-10-17T22:44:50.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "att48EPmZGYU9PzWL",
          "url": "https://dl.airtable.com/bVbrLecrQe2OWWFQXq8i_Chelsea%20Zhang%20-%20PR%20Marketing.jpg",
          "filename": "Chelsea Zhang - PR Marketing.jpg",
          "size": 542968,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/X0VMbqmhSOad833mVYWR_small_Chelsea%20Zhang%20-%20PR%20Marketing.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/xOrAWEP9TUCiqT90ncmE_large_Chelsea%20Zhang%20-%20PR%20Marketing.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/sx7iQoxcQVybyKPw30Em_full_Chelsea%20Zhang%20-%20PR%20Marketing.jpg",
              "width": 768,
              "height": 768
            }
          }
        }
      ],
      "person": [
        "recrAtRib7HBEcJB9"
      ],
      "(You can't directly edit this column)": "Chelsea Zhang - PR Marketing"
    },
    "rec8aO9PIE26GJjlU": {
      "id": "rec8aO9PIE26GJjlU",
      "createdTime": "2018-10-17T22:44:51.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attdlt3L19ICU7wNd",
          "url": "https://dl.airtable.com/TdSsCobBRfUwwb8V2iMt_Emily%20Liang%20-%20Finance.jpg",
          "filename": "Emily Liang - Finance.jpg",
          "size": 424306,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/WfPxWwWCQBr7zU6qwa7B_small_Emily%20Liang%20-%20Finance.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/PaDpPsMZQmqblbiKqCbk_large_Emily%20Liang%20-%20Finance.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/03mUcHSHyXSK7AVFGwBQ_full_Emily%20Liang%20-%20Finance.jpg",
              "width": 640,
              "height": 640
            }
          }
        }
      ],
      "person": [
        "rec4DL1eippoez0bh"
      ],
      "(You can't directly edit this column)": "Emily Liang - Finance Chair"
    },
    "rec244XFvK8gGouDq": {
      "id": "rec244XFvK8gGouDq",
      "createdTime": "2018-10-17T22:44:51.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attUHxjcgxSC4LUfp",
          "url": "https://dl.airtable.com/7RjraW2iQtSmHm5dsiKt_Gabrielle%20Balanon%20-%20Outreach.jpg",
          "filename": "Gabrielle Balanon - Outreach.jpg",
          "size": 321036,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/wtS8AupETpGVp7eJ3DFz_small_Gabrielle%20Balanon%20-%20Outreach.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/wohB8cdsT6Ac1AerhhhG_large_Gabrielle%20Balanon%20-%20Outreach.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/3tpATZoQdGlYZNiLyV8A_full_Gabrielle%20Balanon%20-%20Outreach.jpg",
              "width": 640,
              "height": 640
            }
          }
        }
      ],
      "person": [
        "recJMNzslDXmQM7iZ"
      ],
      "(You can't directly edit this column)": "Gabrielle Balanon - Outreach Chair"
    },
    "recWSwGnmjnUW7jWa": {
      "id": "recWSwGnmjnUW7jWa",
      "createdTime": "2018-10-17T22:44:51.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attUImKdmgvJaKf9J",
          "url": "https://dl.airtable.com/1z8u5YFKSVqYnUECMxp1_George%20Wu%20-%20Finance.jpg",
          "filename": "George Wu - Finance.jpg",
          "size": 377583,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/R9ZhcupCTpWxVhwySp9P_small_George%20Wu%20-%20Finance.jpg",
              "width": 45,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/gnKih7ISTRmLec5oJyFm_large_George%20Wu%20-%20Finance.jpg",
              "width": 640,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/TMYcIXHSqW7UQIYUCP7g_full_George%20Wu%20-%20Finance.jpg",
              "width": 854,
              "height": 683
            }
          }
        }
      ],
      "person": [
        "rec14xvdLuoluctCH"
      ],
      "(You can't directly edit this column)": "George Wu - Finance Chair"
    },
    "recZomHaoY9DQQBpn": {
      "id": "recZomHaoY9DQQBpn",
      "createdTime": "2018-10-17T22:44:51.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attTmfxmwFn0MgEKP",
          "url": "https://dl.airtable.com/vVtsweygR1ALWCv3SZgW_Jinnie%20Rhee%20-%20Outreach.png",
          "filename": "Jinnie Rhee - Outreach.png",
          "size": 1034518,
          "type": "image/png",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/iMEAeHatToGcoZcfYN6V_small_Jinnie%20Rhee%20-%20Outreach.png",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/hrHJveObSz6u1ezGDERP_large_Jinnie%20Rhee%20-%20Outreach.png",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/UHR2eQoMSziNXUIFbJ67_full_Jinnie%20Rhee%20-%20Outreach.png",
              "width": 803,
              "height": 803
            }
          }
        }
      ],
      "person": [
        "recnnv2dbvHIZ2dGJ"
      ],
      "(You can't directly edit this column)": "Jinnie Rhee - Outreach Chair"
    },
    "rechneZNwlBVrMuBv": {
      "id": "rechneZNwlBVrMuBv",
      "createdTime": "2018-10-17T22:44:52.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "att9aGhMxnHce7YUq",
          "url": "https://dl.airtable.com/i0UyPBqSThaNWoQPGv5g_Kevin%20Pham%20-%20Evets.jpg",
          "filename": "Kevin Pham - Evets.jpg",
          "size": 407608,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/dnHoy0cRYq1lAwl2J6qA_small_Kevin%20Pham%20-%20Evets.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/p9fzWluNSS6oACzeRmx2_large_Kevin%20Pham%20-%20Evets.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/DoiPLlB5RVeJZAyWGTgJ_full_Kevin%20Pham%20-%20Evets.jpg",
              "width": 750,
              "height": 750
            }
          }
        }
      ],
      "person": [
        "recTyIipOm1vPBdpw"
      ],
      "(You can't directly edit this column)": "Kevin Pham - Events Chair"
    },
    "recvYMH4qGUQzU6fU": {
      "id": "recvYMH4qGUQzU6fU",
      "createdTime": "2018-10-17T22:44:52.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attiOLXo6XmdgSYPc",
          "url": "https://dl.airtable.com/2eRf6s6qSFu4nWbANo3y_Kim%20Ambrocio%20-%20Historian.jpg",
          "filename": "Kim Ambrocio - Historian.jpg",
          "size": 114946,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Tt55q9XS0yqNHdq3w6ZI_small_Kim%20Ambrocio%20-%20Historian.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/uOdIjb2QjuCE3JBXD2yn_large_Kim%20Ambrocio%20-%20Historian.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/22JiBlxSnijxgAAOhciY_full_Kim%20Ambrocio%20-%20Historian.jpg",
              "width": 683,
              "height": 512
            }
          }
        }
      ],
      "person": [
        "recewlyjxE33ebDly"
      ],
      "(You can't directly edit this column)": "Kim Ambrocio - Historian"
    },
    "recGkQe9WXhmJPUn2": {
      "id": "recGkQe9WXhmJPUn2",
      "createdTime": "2018-10-17T22:44:52.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attSSqjhVQlPWt2e2",
          "url": "https://dl.airtable.com/jZHC9XTM2XM9JJ5ZPZlQ_Mei%20Mei%20-%20Events.jpg",
          "filename": "Mei Mei - Events.jpg",
          "size": 178174,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/VRvYM5cQWKZbF3PWDXZQ_small_Mei%20Mei%20-%20Events.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/pHDAqEpVR12fKyrvGXoS_large_Mei%20Mei%20-%20Events.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/Yt6kAvcuRSu9p2wX2py1_full_Mei%20Mei%20-%20Events.jpg",
              "width": 1341,
              "height": 1340
            }
          }
        }
      ],
      "person": [
        "reci7k75SMLdI0Wjh"
      ],
      "(You can't directly edit this column)": "Mei Mei - Events Chair"
    },
    "recAuBgjfYB2N5lD4": {
      "id": "recAuBgjfYB2N5lD4",
      "createdTime": "2018-10-17T22:48:35.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attleKx81Q7DBDq6K",
          "url": "https://dl.airtable.com/Nduxp5hFS7W257Wa4TLF_Nancy%20Yang%20-%20PR%20Marketing.jpg",
          "filename": "Nancy Yang - PR Marketing.jpg",
          "size": 150571,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/PHSro7raQ9a7VA3xaIwe_small_Nancy%20Yang%20-%20PR%20Marketing.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Oh7YLLKQTC5UKXnpZ9Tp_large_Nancy%20Yang%20-%20PR%20Marketing.jpg",
              "width": 512,
              "height": 513
            },
            "full": {
              "url": "https://dl.airtable.com/SjEwmRoVSUWTz74LQXMS_full_Nancy%20Yang%20-%20PR%20Marketing.jpg",
              "width": 957,
              "height": 959
            }
          }
        }
      ],
      "person": [
        "recH8tvzTKdL29gBU"
      ],
      "(You can't directly edit this column)": "Nancy Yang - PR Marketing"
    },
    "rec16ckDJqJqxrZPg": {
      "id": "rec16ckDJqJqxrZPg",
      "createdTime": "2018-10-17T22:48:55.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "att3FMNdhioh8yINh",
          "url": "https://dl.airtable.com/x5NcoOgYRcuxPkanKaXS_Patrick%20Lin%20-%20Events.jpg",
          "filename": "Patrick Lin - Events.jpg",
          "size": 250623,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/nkzND5bRBKEdqm0HEHRs_small_Patrick%20Lin%20-%20Events.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/TREcKwGGQDu4xdPu2Llg_large_Patrick%20Lin%20-%20Events.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/RM0KnpRTXekTqYktiQD0_full_Patrick%20Lin%20-%20Events.jpg",
              "width": 681,
              "height": 681
            }
          }
        }
      ],
      "person": [
        "recen1WngPBkT2o36"
      ],
      "(You can't directly edit this column)": "Patrick Lin - Events Chair"
    },
    "recpJ858d4kQB4EPr": {
      "id": "recpJ858d4kQB4EPr",
      "createdTime": "2018-10-17T22:49:15.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attduAfqhZ54PCiNU",
          "url": "https://dl.airtable.com/dqqeE6e7SlS1KRHyy1WN_Ryan%20Ta%20-%20Exec.jpg",
          "filename": "Ryan Ta - Exec.jpg",
          "size": 404803,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/40WFAT9wRiq1BPqN4v9L_small_Ryan%20Ta%20-%20Exec.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Ju7gn1ftSUqYTvVCt9tu_large_Ryan%20Ta%20-%20Exec.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/bLPVpld5RLW1Z9YJCJzG_full_Ryan%20Ta%20-%20Exec.jpg",
              "width": 681,
              "height": 908
            }
          }
        }
      ],
      "person": [
        "recLla3pij2rxqiUK"
      ],
      "(You can't directly edit this column)": "Ryan Ta - Executive Director"
    },
    "rec9JZQjQwYloJops": {
      "id": "rec9JZQjQwYloJops",
      "createdTime": "2018-10-17T22:49:35.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attaqGBMcRzUJFHPd",
          "url": "https://dl.airtable.com/ZqfQfzUOTCuW2vKA8oMQ_Shirley%20Li%20-%20PR%20Design.jpg",
          "filename": "Shirley Li - PR Design.jpg",
          "size": 139073,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/TA4Eas7bSiWwbyNhMMvf_small_Shirley%20Li%20-%20PR%20Design.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/crAjIuBvSSCZ6L4VxlZ4_large_Shirley%20Li%20-%20PR%20Design.jpg",
              "width": 512,
              "height": 513
            },
            "full": {
              "url": "https://dl.airtable.com/6aMSI2xtScqOf7UcXKoA_full_Shirley%20Li%20-%20PR%20Design.jpg",
              "width": 959,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recLibXAEVugrELPu"
      ],
      "(You can't directly edit this column)": "Shirley Li - PR Design"
    },
    "rec2GqsZxdnvsmOMW": {
      "id": "rec2GqsZxdnvsmOMW",
      "createdTime": "2018-10-17T22:49:57.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attILVV5mwLCc4b2x",
          "url": "https://dl.airtable.com/PFjyBFVaSKSTfUPbEQ24_Stephanie%20Kim%20-%20PR%20Marketing.jpg",
          "filename": "Stephanie Kim - PR Marketing.jpg",
          "size": 32363,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/WjYZd59ISPS5kJV15uOz_small_Stephanie%20Kim%20-%20PR%20Marketing.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/DOlv5xFThm2Me1QfJtau_large_Stephanie%20Kim%20-%20PR%20Marketing.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/9dthHLKkQHiGJ44ofcN3_full_Stephanie%20Kim%20-%20PR%20Marketing.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recdfUETv4veF8fUU"
      ],
      "(You can't directly edit this column)": "Stephanie Kim - PR Marketing"
    },
    "recSmcBMOj1lx3jUF": {
      "id": "recSmcBMOj1lx3jUF",
      "createdTime": "2018-10-17T22:50:21.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attuDRCrPbvXDPiwO",
          "url": "https://dl.airtable.com/aH7mzpJcRHikgKW5xRCs_Susan%20Shen%20-%20Vice%20Exec.jpg",
          "filename": "Susan Shen - Vice Exec.jpg",
          "size": 428846,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Iev2o8j8QReMQRvKEL0C_small_Susan%20Shen%20-%20Vice%20Exec.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/qCVJxrGYSGqdgywI3Fib_large_Susan%20Shen%20-%20Vice%20Exec.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/bmPNwE2DRImchZN15Ee9_full_Susan%20Shen%20-%20Vice%20Exec.jpg",
              "width": 1024,
              "height": 768
            }
          }
        }
      ],
      "person": [
        "recgVaA2OjSYAR8oD"
      ],
      "(You can't directly edit this column)": "Susan Shen - Vice Executive"
    },
    "recBWKJ7nZnK49IUI": {
      "id": "recBWKJ7nZnK49IUI",
      "createdTime": "2018-10-17T22:50:40.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "att1lzxi4tsU1O4Dq",
          "url": "https://dl.airtable.com/QXw7j6blSpeShhcvGIyl_Tan%20Vu%20-%20Historian.jpg",
          "filename": "Tan Vu - Historian.jpg",
          "size": 69202,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/DZjhMiKmSE2aFxDA1o7Q_small_Tan%20Vu%20-%20Historian.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/KQKq03pER26p9z3A142o_large_Tan%20Vu%20-%20Historian.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/PB3Mm5HSAWAQO7995Wdk_full_Tan%20Vu%20-%20Historian.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recDPvhPtHzXb8D5w"
      ],
      "(You can't directly edit this column)": "Tan Vu - Historian"
    },
    "recaKAVUiPS4axGXZ": {
      "id": "recaKAVUiPS4axGXZ",
      "createdTime": "2018-10-17T22:50:57.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attb48eM2AjrfRhU3",
          "url": "https://dl.airtable.com/ULZuYxL4RA2N1GRkDa6n_Wenhao%20Liao%20-%20Exec.jpg",
          "filename": "Wenhao Liao - Exec.jpg",
          "size": 294511,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/1Y0AtsMHQmGI8M95B9Fg_small_Wenhao%20Liao%20-%20Exec.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/e12Q6ecUQHGOzTCzIT8s_large_Wenhao%20Liao%20-%20Exec.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/V9j7zBkRHarZ30gCwd5m_full_Wenhao%20Liao%20-%20Exec.jpg",
              "width": 683,
              "height": 683
            }
          }
        }
      ],
      "person": [
        "recb1hKgi5bRfTlH9"
      ],
      "(You can't directly edit this column)": "Wenhao Liao - Executive Director"
    },
    "reccYYrL6cPXyeh6H": {
      "id": "reccYYrL6cPXyeh6H",
      "createdTime": "2018-10-17T22:51:22.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attkv47sEYeVFQcQa",
          "url": "https://dl.airtable.com/vA7UHuMjTBiVUlhkS1kU_Winn%20Cui%20-%20Vice%20Exec.jpg",
          "filename": "Winn Cui - Vice Exec.jpg",
          "size": 164341,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/lpejwaGSjmA20gWtqzfA_small_Winn%20Cui%20-%20Vice%20Exec.jpg",
              "width": 45,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Zvmiz5TEQCCW9eG9qbM5_large_Winn%20Cui%20-%20Vice%20Exec.jpg",
              "width": 640,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/NZ2p8HaVTS6Eh3vEnwzk_full_Winn%20Cui%20-%20Vice%20Exec.jpg",
              "width": 854,
              "height": 683
            }
          }
        }
      ],
      "person": [
        "reccusci4MPy2I4i4"
      ],
      "(You can't directly edit this column)": "Winn Cui - Vice Executive"
    },
    "recZAsgx9Pww9moqU": {
      "id": "recZAsgx9Pww9moqU",
      "createdTime": "2018-10-17T22:52:12.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attjqzK90ABZA47jc",
          "url": "https://dl.airtable.com/RJGWADxeQ26wfot9JyAJ_Aileen%20Gui%20-%20Finance.jpg",
          "filename": "Aileen Gui - Finance.jpg",
          "size": 59099,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/bg6cu5s6Q1qFl7i7P7LC_small_Aileen%20Gui%20-%20Finance.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/HcAovGEKSJGwynEaR2KQ_large_Aileen%20Gui%20-%20Finance.jpg",
              "width": 512,
              "height": 773
            },
            "full": {
              "url": "https://dl.airtable.com/qlm3SBPURgaQiFF39ldc_full_Aileen%20Gui%20-%20Finance.jpg",
              "width": 636,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recaIBY8nq01IWPqM"
      ],
      "(You can't directly edit this column)": "Aileen Gui - Finance Chair"
    },
    "rectPeFl8L3r1BHn3": {
      "id": "rectPeFl8L3r1BHn3",
      "createdTime": "2018-10-17T22:52:50.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attmiDm1sJd8yEPXc",
          "url": "https://dl.airtable.com/KOQvMu9uRwKarYBrFwaa_Alex%20Nguyen%20-%20Historian.jpg",
          "filename": "Alex Nguyen - Historian.jpg",
          "size": 1080175,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/RW0lqXMbQxmFvKb6jzLy_small_Alex%20Nguyen%20-%20Historian.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/vS0Pr6SSCP39K1QFMVAg_large_Alex%20Nguyen%20-%20Historian.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/v0YLEToKR1SWYxVGWcZu_full_Alex%20Nguyen%20-%20Historian.jpg",
              "width": 2250,
              "height": 3000
            }
          }
        }
      ],
      "person": [
        "recVwOcszdvg6tMe0"
      ],
      "(You can't directly edit this column)": "Alex Nguyen - Historian"
    },
    "recRnQm10089GTbld": {
      "id": "recRnQm10089GTbld",
      "createdTime": "2018-10-17T22:53:10.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attxdbLL9gtKPxnBU",
          "url": "https://dl.airtable.com/YZhdSElRrOIcWzOAh0c2_Angie%20Liao%20-%20Outreach.jpg",
          "filename": "Angie Liao - Outreach.jpg",
          "size": 74912,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/MVByze5mSomBWkhh58a1_small_Angie%20Liao%20-%20Outreach.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/uO4gCJxASQy7rXQLn3yb_large_Angie%20Liao%20-%20Outreach.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/BmIAcDUcS16FjGSPGFFf_full_Angie%20Liao%20-%20Outreach.jpg",
              "width": 640,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recGX7657yT6j0Wby"
      ],
      "(You can't directly edit this column)": "Angie Liao - Outreach Chair"
    },
    "recwtb0YqUyFUnBKp": {
      "id": "recwtb0YqUyFUnBKp",
      "createdTime": "2018-10-17T22:53:29.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attwtiuzAh0GwwUhF",
          "url": "https://dl.airtable.com/A4C8GwkSSt68SuDgcZ71_Anna%20Liang%20-%20PR%20Marketing.jpg",
          "filename": "Anna Liang - PR Marketing.jpg",
          "size": 90188,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ZDWKWYNBRlSnFkbNErvt_small_Anna%20Liang%20-%20PR%20Marketing.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/KmzRpaPZSBmAslRN8jNq_large_Anna%20Liang%20-%20PR%20Marketing.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/UYKKLjccSQET72TZbygJ_full_Anna%20Liang%20-%20PR%20Marketing.jpg",
              "width": 720,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recaFAdgok66RkVsR"
      ],
      "(You can't directly edit this column)": "Anna Liang - PR Marketing"
    },
    "recqnIywOC0Vr3Rlc": {
      "id": "recqnIywOC0Vr3Rlc",
      "createdTime": "2018-10-17T22:53:48.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "att1qKyffCSnM7BJt",
          "url": "https://dl.airtable.com/i3oHpFj8RQG0wyoPhLSZ_Charmaine%20Lai%20-%20Historian.jpg",
          "filename": "Charmaine Lai - Historian.jpg",
          "size": 1024101,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Ds1bJJuVRuyrVutsuaTT_small_Charmaine%20Lai%20-%20Historian.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Dzqh3oNqT0mrH1s5Rq8F_large_Charmaine%20Lai%20-%20Historian.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/RIovMvYeTuWwCSxSGm1S_full_Charmaine%20Lai%20-%20Historian.jpg",
              "width": 3000,
              "height": 2000
            }
          }
        }
      ],
      "person": [
        "recnJ1jNx4hdHcs8S"
      ],
      "(You can't directly edit this column)": "Charmaine Lai - Historian"
    },
    "recOzSRjNX9vREosk": {
      "id": "recOzSRjNX9vREosk",
      "createdTime": "2018-10-17T22:54:07.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attuQfkVaQcvg7alb",
          "url": "https://dl.airtable.com/6GO2EuwTbmeMph4PX2jX_Danielle%20Li%20-%20PR%20Design.jpg",
          "filename": "Danielle Li - PR Design.jpg",
          "size": 166085,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/XdzlRAe5R4WcsNzlzE5A_small_Danielle%20Li%20-%20PR%20Design.jpg",
              "width": 31,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/wl1wZP3aTXOvqiw5jvpA_large_Danielle%20Li%20-%20PR%20Design.jpg",
              "width": 512,
              "height": 601
            },
            "full": {
              "url": "https://dl.airtable.com/ie1K8n8OSz2qY9xfjFHE_full_Danielle%20Li%20-%20PR%20Design.jpg",
              "width": 711,
              "height": 835
            }
          }
        }
      ],
      "person": [
        "rec4xqb3LIKHRZjFp"
      ],
      "(You can't directly edit this column)": "Danielle Li - PR Design"
    },
    "recUoDEMVQwdj8pdF": {
      "id": "recUoDEMVQwdj8pdF",
      "createdTime": "2018-10-17T22:54:33.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attJO0bspNmjPNUYN",
          "url": "https://dl.airtable.com/qp8eRLDQ7yeDhOYuaK8g_Emily%20Hill%20-%20PR%20Marketing.jpg",
          "filename": "Emily Hill - PR Marketing.jpg",
          "size": 95765,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/PmhAaDhRxuGGNJ9NDhFL_small_Emily%20Hill%20-%20PR%20Marketing.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/AIkwRblGTdOmvJ0v0zth_large_Emily%20Hill%20-%20PR%20Marketing.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/US53ueWaRsanWnb1T3Ja_full_Emily%20Hill%20-%20PR%20Marketing.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recD2MQzODBpKusXm"
      ],
      "(You can't directly edit this column)": "Emily Hill - PR Marketing"
    },
    "rec2eY3R0ExDIo5rY": {
      "id": "rec2eY3R0ExDIo5rY",
      "createdTime": "2018-10-17T22:54:53.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attZxu8uTURpsrxeZ",
          "url": "https://dl.airtable.com/Y0KBK4uZQ8Kylt0h4bbD_Jeffrey%20Wang%20-%20Vice%20Exec.jpg",
          "filename": "Jeffrey Wang - Vice Exec.jpg",
          "size": 763306,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/SYMiXoPORTqDgejvJhoH_small_Jeffrey%20Wang%20-%20Vice%20Exec.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/fjt6EFHTUWoHHOYDf27C_large_Jeffrey%20Wang%20-%20Vice%20Exec.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/EO0aHpTSqmND07REapIf_full_Jeffrey%20Wang%20-%20Vice%20Exec.jpg",
              "width": 2000,
              "height": 3000
            }
          }
        }
      ],
      "person": [
        "recO6btsvRqZeuJjP"
      ],
      "(You can't directly edit this column)": "Jeffrey Wang - Vice Executive"
    },
    "recvdEHm4j3CBAHaL": {
      "id": "recvdEHm4j3CBAHaL",
      "createdTime": "2018-10-17T22:55:12.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attKfiN8QNECcKsak",
          "url": "https://dl.airtable.com/IPU9ujtMQxZxYg6f8ObV_Kim%20Ambrocio%20-%20Historian.jpg",
          "filename": "Kim Ambrocio - Historian.jpg",
          "size": 39166,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/afoqI4ePSaqcQB917jhM_small_Kim%20Ambrocio%20-%20Historian.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Or1ktx4hQSSbon1chSeL_large_Kim%20Ambrocio%20-%20Historian.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/3UwlSgOdReuzWxqBXOBU_full_Kim%20Ambrocio%20-%20Historian.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recewlyjxE33ebDly"
      ],
      "(You can't directly edit this column)": "Kim Ambrocio - Historian"
    },
    "recs15zKfmfMsjBgE": {
      "id": "recs15zKfmfMsjBgE",
      "createdTime": "2018-10-17T22:55:29.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "atttMva8KO2ocHPV0",
          "url": "https://dl.airtable.com/e6105NuZTfaoFd6nquC7_Mark%20Refe%20-%20Outreach.jpg",
          "filename": "Mark Refe - Outreach.jpg",
          "size": 103086,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/fWpTnUh1RFa19NiWj8QV_small_Mark%20Refe%20-%20Outreach.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ZBOOMuxSm6gLa3ee7G9I_large_Mark%20Refe%20-%20Outreach.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/7QgWf1ohQc2yjb8FU1Nk_full_Mark%20Refe%20-%20Outreach.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recQEUQvGhpt2Sydx"
      ],
      "(You can't directly edit this column)": "Mark Refe - Outreach Chair"
    },
    "recRhyhlWtKnOo3f8": {
      "id": "recRhyhlWtKnOo3f8",
      "createdTime": "2018-10-17T22:56:16.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attKOh9aAvb7o2QU7",
          "url": "https://dl.airtable.com/VYMhI3wRsyvcNUXjLO1Q_Mei%20Mei%20-%20Vice%20Exec.jpg",
          "filename": "Mei Mei - Vice Exec.jpg",
          "size": 223286,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Y5aoNIntSSuW8OUpcYWq_small_Mei%20Mei%20-%20Vice%20Exec.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/oNvbUSBQuyVh4qfomP7T_large_Mei%20Mei%20-%20Vice%20Exec.jpg",
              "width": 512,
              "height": 770
            },
            "full": {
              "url": "https://dl.airtable.com/DXo9sLMnRbGaFX90nvO1_full_Mei%20Mei%20-%20Vice%20Exec.jpg",
              "width": 1361,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "reci7k75SMLdI0Wjh"
      ],
      "(You can't directly edit this column)": "Mei Mei - Vice Executive"
    },
    "recWGoUj92415MYGK": {
      "id": "recWGoUj92415MYGK",
      "createdTime": "2018-10-17T22:56:34.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attDw67DXnslwWUre",
          "url": "https://dl.airtable.com/AYxxrLC3T3qDpjg1rvVO_Michael%20Chan%20-%20Events.jpg",
          "filename": "Michael Chan - Events.jpg",
          "size": 315747,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/DuRt1rT5SHGwtmXJQCoJ_small_Michael%20Chan%20-%20Events.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/4BbOXtDKTaCWX311hzD6_large_Michael%20Chan%20-%20Events.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/R8orsNnTGyelTC4yL4zw_full_Michael%20Chan%20-%20Events.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recvmimrks8m7hMNB"
      ],
      "(You can't directly edit this column)": "Michael Chen - Events Chair"
    },
    "reciu5395LaD08ooO": {
      "id": "reciu5395LaD08ooO",
      "createdTime": "2018-10-17T22:57:00.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attKp9vT3YIrpFUL2",
          "url": "https://dl.airtable.com/M6h280esT1WBKRDyxm6S_Nicole%20Shim%20-%20PR%20Design.jpg",
          "filename": "Nicole Shim - PR Design.jpg",
          "size": 51700,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/PQPnzw6rTKWwis3JfSEh_small_Nicole%20Shim%20-%20PR%20Design.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/SMq1cVPNReGZvM7VEAZd_large_Nicole%20Shim%20-%20PR%20Design.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/ftgLc5hTluBkdIHHlVec_full_Nicole%20Shim%20-%20PR%20Design.jpg",
              "width": 1136,
              "height": 851
            }
          }
        }
      ],
      "person": [
        "recmLTV2BFh495bJC"
      ],
      "(You can't directly edit this column)": "Nicole Shim - PR Design"
    },
    "recA5AtEHnQjODYey": {
      "id": "recA5AtEHnQjODYey",
      "createdTime": "2018-10-17T22:57:19.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attuAi4fFt6mcT4bn",
          "url": "https://dl.airtable.com/PpQp4MhQ5ixrVaV4Ze0Y_Nolan%20Pokpongkiat%20-%20Finance.jpg",
          "filename": "Nolan Pokpongkiat - Finance.jpg",
          "size": 70468,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/SGMATceHSHypMEsGSqBK_small_Nolan%20Pokpongkiat%20-%20Finance.jpg",
              "width": 29,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/pGinV1dWRjCgUnzCdCk6_large_Nolan%20Pokpongkiat%20-%20Finance.jpg",
              "width": 512,
              "height": 640
            },
            "full": {
              "url": "https://dl.airtable.com/JClIqSPJQBSVvZDBAbd6_full_Nolan%20Pokpongkiat%20-%20Finance.jpg",
              "width": 768,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recPgjUGxFwXXOPoQ"
      ],
      "(You can't directly edit this column)": "Nolan Pokpongkiat - Finance Chair"
    },
    "recePDUmIP5pFEsTc": {
      "id": "recePDUmIP5pFEsTc",
      "createdTime": "2018-10-17T22:57:39.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attJbMzhw41YbYViK",
          "url": "https://dl.airtable.com/eJ1591MQoapVrWNzxZT6_Patrick%20Lin%20-%20PR%20Marketing.jpg",
          "filename": "Patrick Lin - PR Marketing.jpg",
          "size": 41842,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/TLCHQX6TQN2UMEPBu0kq_small_Patrick%20Lin%20-%20PR%20Marketing.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/koHMqbrSg1E7M4hcBjgQ_large_Patrick%20Lin%20-%20PR%20Marketing.jpg",
              "width": 770,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/9R7EurVoSd2xBRxnmezE_full_Patrick%20Lin%20-%20PR%20Marketing.jpg",
              "width": 1203,
              "height": 800
            }
          }
        }
      ],
      "person": [
        "recen1WngPBkT2o36"
      ],
      "(You can't directly edit this column)": "Patrick Lin - PR Marketing"
    },
    "rec0CTTAqpcyachz4": {
      "id": "rec0CTTAqpcyachz4",
      "createdTime": "2018-10-17T22:58:13.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attGoBOvWUNWYSTlb",
          "url": "https://dl.airtable.com/QDBo2ZKTTmWvCAdG61Jn_Richard%20Xu%20-%20Historian.jpg",
          "filename": "Richard Xu - Historian.jpg",
          "size": 60322,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/PdBHc7wkTquBbW0bIM6K_small_Richard%20Xu%20-%20Historian.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/hDpD0ZTBmUdRazOSb92w_large_Richard%20Xu%20-%20Historian.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/iX2rAYUZQWGzD7OOUkhk_full_Richard%20Xu%20-%20Historian.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recKBDLL5lmSDiNTY"
      ],
      "(You can't directly edit this column)": "Richard Xu - Historian"
    },
    "recbGFrP03BLwiDTs": {
      "id": "recbGFrP03BLwiDTs",
      "createdTime": "2018-10-17T22:58:33.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attI0Nmmj0MNH9KJx",
          "url": "https://dl.airtable.com/9GJxB7Y2Qy6YFidbExM4_Robert%20Yu%20-%20Events.jpg",
          "filename": "Robert Yu - Events.jpg",
          "size": 86750,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/SgZMrh6RS3aQ79hnnzY9_small_Robert%20Yu%20-%20Events.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/qSgtDsgAQiWP8uGUeca9_large_Robert%20Yu%20-%20Events.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/1UHZcar2SzuYpy16sTfK_full_Robert%20Yu%20-%20Events.jpg",
              "width": 1288,
              "height": 1288
            }
          }
        }
      ],
      "person": [
        "recCmof4I4TUVFaZ3"
      ],
      "(You can't directly edit this column)": "Robert Yu - Events Chair"
    },
    "recPPz4kBRV4YoVeU": {
      "id": "recPPz4kBRV4YoVeU",
      "createdTime": "2018-10-17T22:58:50.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attidgFkeMkLStNzU",
          "url": "https://dl.airtable.com/v8cf7bTtTL6xXT2D4Osx_Ryan%20Ta%20-%20Exec.jpg",
          "filename": "Ryan Ta - Exec.jpg",
          "size": 164663,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/V6ZaRr3gQKGVSwmda6fk_small_Ryan%20Ta%20-%20Exec.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/JEg5GmT4OxB6S3X8Pdzw_large_Ryan%20Ta%20-%20Exec.jpg",
              "width": 767,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/eCj3SCUNTRWtgw2djpeA_full_Ryan%20Ta%20-%20Exec.jpg",
              "width": 1334,
              "height": 891
            }
          }
        }
      ],
      "person": [
        "recLla3pij2rxqiUK"
      ],
      "(You can't directly edit this column)": "Ryan Ta - Executive Director"
    },
    "rec2UtXTU4cm9hpjF": {
      "id": "rec2UtXTU4cm9hpjF",
      "createdTime": "2018-10-17T22:59:10.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "att6kAJAWsBSs6StG",
          "url": "https://dl.airtable.com/QGrFiBbUQgCufhh6fG70_Sheldon%20Chen%20-%20PR%20Design.jpg",
          "filename": "Sheldon Chen - PR Design.jpg",
          "size": 67357,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/zqxVKTqrRfS5hdYFp3Ut_small_Sheldon%20Chen%20-%20PR%20Design.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Z3mmgVjSlScSphHg0tHw_large_Sheldon%20Chen%20-%20PR%20Design.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/nOzx4F9QJE7TByJQ28Qi_full_Sheldon%20Chen%20-%20PR%20Design.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recfvSbnynEXEzob9"
      ],
      "(You can't directly edit this column)": "Sheldon Chen - PR Design"
    },
    "recZFzCcA5n9Tuyij": {
      "id": "recZFzCcA5n9Tuyij",
      "createdTime": "2018-10-17T22:59:30.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "att9T596ALpv1F0SD",
          "url": "https://dl.airtable.com/Nt87ZcrWQPeDY7ZXumPj_Stephanie%20Kim%20-%20Events.jpg",
          "filename": "Stephanie Kim - Events.jpg",
          "size": 56039,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/kjK8I0YTXCrKrFp1qkjQ_small_Stephanie%20Kim%20-%20Events.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/8hWaKUgQ3edpX7KnhHII_large_Stephanie%20Kim%20-%20Events.jpg",
              "width": 518,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/6HPYxsefTzqlxyABnfO0_full_Stephanie%20Kim%20-%20Events.jpg",
              "width": 750,
              "height": 742
            }
          }
        }
      ],
      "person": [
        "recdfUETv4veF8fUU"
      ],
      "(You can't directly edit this column)": "Stephanie Kim - Events Chair"
    },
    "recF4UufceUmsaz3Y": {
      "id": "recF4UufceUmsaz3Y",
      "createdTime": "2018-10-17T22:59:47.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attGsKwG3dAi3OxCR",
          "url": "https://dl.airtable.com/3RExN89mQMG5Q1VR3b36_Winn%20Cui%20-%20Exec.jpg",
          "filename": "Winn Cui - Exec.jpg",
          "size": 117169,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/fUcXCBK6Tx66W2z66zTk_small_Winn%20Cui%20-%20Exec.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/b6yaSo8RQeW2w9I1mnF8_large_Winn%20Cui%20-%20Exec.jpg",
              "width": 770,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/29h9OEKhSaycY44JPyUx_full_Winn%20Cui%20-%20Exec.jpg",
              "width": 1000,
              "height": 665
            }
          }
        }
      ],
      "person": [
        "reccusci4MPy2I4i4"
      ],
      "(You can't directly edit this column)": "Winn Cui - Executive Director"
    },
    "recKbSLDMtkNmNi57": {
      "id": "recKbSLDMtkNmNi57",
      "createdTime": "2018-10-17T23:29:43.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attR09OInSR4QD5aR",
          "url": "https://dl.airtable.com/wKtW2AtoQxGcbser4VCe_Anna%20Liang%2C%20Board%20-%20Marketing%2C%20Fall%202017.jpg",
          "filename": "Anna Liang, Board - Marketing, Fall 2017.jpg",
          "size": 436042,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/RkRL1BTkQdSLO5WpBUcz_small_Anna%20Liang%2C%20Board%20-%20Marketing%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/prZMapjPRJOXiNReioi6_large_Anna%20Liang%2C%20Board%20-%20Marketing%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/jvmZAVaSVnyz8A2riLdg_full_Anna%20Liang%2C%20Board%20-%20Marketing%2C%20Fall%202017.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recaFAdgok66RkVsR"
      ],
      "(You can't directly edit this column)": "Anna Liang - PR Marketing"
    },
    "recyh95M614yPayiO": {
      "id": "recyh95M614yPayiO",
      "createdTime": "2018-10-17T23:31:42.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "att9lqCDjwdZjrMDm",
          "url": "https://dl.airtable.com/YJENNgFtRxCMSDhhSUMP_James%20Chen%2C%20Board%20-%20Marketing%2C%20Fall%202017.jpg",
          "filename": "James Chen, Board - Marketing, Fall 2017.jpg",
          "size": 279053,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/1Xa4kQjSv2KgyvvV0A9D_small_James%20Chen%2C%20Board%20-%20Marketing%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/86zVFJKWTJCS56TReP7o_large_James%20Chen%2C%20Board%20-%20Marketing%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/7hBCni3ETpqOmXQfZtwZ_full_James%20Chen%2C%20Board%20-%20Marketing%2C%20Fall%202017.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recIrcS0iqZm0deBi"
      ],
      "(You can't directly edit this column)": "James Chen - PR Marketing"
    },
    "recJqvj4x8bg3k1Gb": {
      "id": "recJqvj4x8bg3k1Gb",
      "createdTime": "2018-10-17T23:33:21.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "att5kemHT0Pqb8js3",
          "url": "https://dl.airtable.com/ywYLqSnRSMSK0aBhp1b0_Nicole%20Shim%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
          "filename": "Nicole Shim, Board - Design, Fall 2017.jpg",
          "size": 205632,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/D32N1XztQJq3zyQ1lE4S_small_Nicole%20Shim%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/1XvR88YGTUKlBFmfcgYW_large_Nicole%20Shim%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/fgx4ccgSfeZxKt95y3K1_full_Nicole%20Shim%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recmLTV2BFh495bJC"
      ],
      "(You can't directly edit this column)": "Nicole Shim - PR Design"
    },
    "recN8aZVT9qu9xG9j": {
      "id": "recN8aZVT9qu9xG9j",
      "createdTime": "2018-10-17T23:35:22.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attBG6AWgIzrVpnBz",
          "url": "https://dl.airtable.com/2sArAGmKTKSgJHFI66RS_Danielle%20Li%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
          "filename": "Danielle Li, Board - Design, Fall 2017.jpg",
          "size": 172698,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/xL1tzZRTlWN8KocJ36AA_small_Danielle%20Li%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/3PtYiV8SaGWwoSZmXjnI_large_Danielle%20Li%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/y4JwN0lfTeqTqhcR5pMA_full_Danielle%20Li%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
              "width": 1367,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "rec4xqb3LIKHRZjFp"
      ],
      "(You can't directly edit this column)": "Danielle Li - PR Design"
    },
    "recKPisyjQ5ifZENH": {
      "id": "recKPisyjQ5ifZENH",
      "createdTime": "2018-10-17T23:36:34.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attXQoLRxiBHW6rvG",
          "url": "https://dl.airtable.com/kpUVHZqZRrqSSzMC4CvQ_Nanxi%20Wang%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
          "filename": "Nanxi Wang, Board - Design, Fall 2017.jpg",
          "size": 396560,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/z6vB4qcGQRGT3ZzqbQpA_small_Nanxi%20Wang%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/5wosilERR7OMH0nDI1Yu_large_Nanxi%20Wang%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/iHDuVQbTBuIkEJrXSuiy_full_Nanxi%20Wang%2C%20Board%20-%20Design%2C%20Fall%202017.jpg",
              "width": 2048,
              "height": 1365
            }
          }
        }
      ],
      "person": [
        "reci3Xt6OvMS1EnkG"
      ],
      "(You can't directly edit this column)": "Nanxi Wang - PR Design"
    },
    "recOpta8sOgUHtIAv": {
      "id": "recOpta8sOgUHtIAv",
      "createdTime": "2018-10-17T23:37:47.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attW8LFTYxpHfaOxp",
          "url": "https://dl.airtable.com/OTycUsRSAKZcjXiOaKMe_Charmaine%20Lai%2C%20Board%20-%20Historian%2C%20Fall%202017.jpg",
          "filename": "Charmaine Lai, Board - Historian, Fall 2017.jpg",
          "size": 173238,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ssCIoUN6SGSimNVHrHwg_small_Charmaine%20Lai%2C%20Board%20-%20Historian%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Lt257EC8QgO9vZUHBXeB_large_Charmaine%20Lai%2C%20Board%20-%20Historian%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/AarXv7DkTeTpiyZUtdgR_full_Charmaine%20Lai%2C%20Board%20-%20Historian%2C%20Fall%202017.jpg",
              "width": 1366,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recnJ1jNx4hdHcs8S"
      ],
      "(You can't directly edit this column)": "Charmaine Lai - Historian"
    },
    "recNCn5iSCGzeCbGa": {
      "id": "recNCn5iSCGzeCbGa",
      "createdTime": "2018-10-17T23:38:35.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attcoHM2vQQlluCkZ",
          "url": "https://dl.airtable.com/CXvUgTdhQTGor6vEsxnT_Navid%20Jawad%2C%20Board%20-%20Historian%2C%20Fall%202017.jpg",
          "filename": "Navid Jawad, Board - Historian, Fall 2017.jpg",
          "size": 219243,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/drL4H1ZAR5arJW8A1EnH_small_Navid%20Jawad%2C%20Board%20-%20Historian%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/WKEgrClySvekaZ8iertL_large_Navid%20Jawad%2C%20Board%20-%20Historian%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/cByiEC9gRg2IYTBb77pI_full_Navid%20Jawad%2C%20Board%20-%20Historian%2C%20Fall%202017.jpg",
              "width": 1367,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recVTIsM4iNA1qOgR"
      ],
      "(You can't directly edit this column)": "Navid Jawad - Historian"
    },
    "recunId6aCRH4Jc2z": {
      "id": "recunId6aCRH4Jc2z",
      "createdTime": "2018-10-17T23:39:13.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attRTNnywTBXjnYrM",
          "url": "https://dl.airtable.com/UkgiQX1Sp6pSGlHsaDM9_Mariana%20Tagano%2C%20Board%20-%20Outreach%2C%20Fall%202017.jpg",
          "filename": "Mariana Tagano, Board - Outreach, Fall 2017.jpg",
          "size": 53329,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/4gnFTdorSnWIHXuJLyGe_small_Mariana%20Tagano%2C%20Board%20-%20Outreach%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/s2V3x6yKQKqODXGXJb2x_large_Mariana%20Tagano%2C%20Board%20-%20Outreach%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/75Yn5nAvTBxWmWQfeDNq_full_Mariana%20Tagano%2C%20Board%20-%20Outreach%2C%20Fall%202017.jpg",
              "width": 640,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recA62lDDRZ9YpoBM"
      ],
      "(You can't directly edit this column)": "Mariana Tagano - Outreach Chair"
    },
    "rec8m5xHXr2m62FV4": {
      "id": "rec8m5xHXr2m62FV4",
      "createdTime": "2018-10-17T23:40:14.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "att5vu93mO63BxPwd",
          "url": "https://dl.airtable.com/8zNh9SR4Shqblr4n41Pj_Ansel%20Deng%2C%20Board%20-%20Outreach%2C%20Fall%202017.jpg",
          "filename": "Ansel Deng, Board - Outreach, Fall 2017.jpg",
          "size": 237337,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/aiB2DQ1S6uOsvwHevMfS_small_Ansel%20Deng%2C%20Board%20-%20Outreach%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/KME7WOdQRu3xUHICxxOX_large_Ansel%20Deng%2C%20Board%20-%20Outreach%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/Gf7qGT2SPym3XymxXS6R_full_Ansel%20Deng%2C%20Board%20-%20Outreach%2C%20Fall%202017.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "rec0Xrjy5cO0rNOIE"
      ],
      "(You can't directly edit this column)": "Ansel Deng - Outreach Chair"
    },
    "reckBSsIr0Y8teuIl": {
      "id": "reckBSsIr0Y8teuIl",
      "createdTime": "2018-10-17T23:43:16.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attG9SYt3bK042yff",
          "url": "https://dl.airtable.com/O2kPzPPsT4qfbm7ynYvY_Jeffrey%20Wang%2C%20Board%20-%20Exec%2C%20Spring%202018.jpg",
          "filename": "Jeffrey Wang, Board - Exec, Spring 2018.jpg",
          "size": 218148,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/UAyjHAZKQ5GQTFsNr82p_small_Jeffrey%20Wang%2C%20Board%20-%20Exec%2C%20Spring%202018.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/00PDeItPTyOb09BmKk3H_large_Jeffrey%20Wang%2C%20Board%20-%20Exec%2C%20Spring%202018.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/hJdTcjNRSaUVyOytxm61_full_Jeffrey%20Wang%2C%20Board%20-%20Exec%2C%20Spring%202018.jpg",
              "width": 2048,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "recO6btsvRqZeuJjP"
      ],
      "(You can't directly edit this column)": "Jeffrey Wang - Executive Director"
    },
    "rec1vQvWschmPVm61": {
      "id": "rec1vQvWschmPVm61",
      "createdTime": "2018-10-17T23:44:26.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attKF35DiPEAKSDLE",
          "url": "https://dl.airtable.com/UXXSaJwgTjqU5JjajPIt_Stephanie%20Kim%2C%20Board%20-%20Exec%2C%20Spring%202018.jpg",
          "filename": "Stephanie Kim, Board - Exec, Spring 2018.jpg",
          "size": 138463,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/n1tYvvgT0eUoFNWKqLLg_small_Stephanie%20Kim%2C%20Board%20-%20Exec%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/s4pGX8VIS0SqDWjnlj3h_large_Stephanie%20Kim%2C%20Board%20-%20Exec%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/rjpbfaWtTxOKaEk6uZb9_full_Stephanie%20Kim%2C%20Board%20-%20Exec%2C%20Spring%202018.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recdfUETv4veF8fUU"
      ],
      "(You can't directly edit this column)": "Stephanie Kim - Executive Director"
    },
    "recOm0w7AwBFrZEh3": {
      "id": "recOm0w7AwBFrZEh3",
      "createdTime": "2018-10-17T23:45:20.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "atthmi3mtezlDSR40",
          "url": "https://dl.airtable.com/ssxEeThSj2zu4qG0Clsu_Angie%20Liao%2C%20Board%20-%20Vice%20Exec%2C%20Spring%202018.jpg",
          "filename": "Angie Liao, Board - Vice Exec, Spring 2018.jpg",
          "size": 432053,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/mP4nlDTBTVytxrN9Gnf7_small_Angie%20Liao%2C%20Board%20-%20Vice%20Exec%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/QvWiSlVFSvGnK6IQn0aF_large_Angie%20Liao%2C%20Board%20-%20Vice%20Exec%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/ZWvExuWgSfSySwvSwpGZ_full_Angie%20Liao%2C%20Board%20-%20Vice%20Exec%2C%20Spring%202018.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recGX7657yT6j0Wby"
      ],
      "(You can't directly edit this column)": "Angie Liao - Vice Executive"
    },
    "recTX06RHpFGNzK9T": {
      "id": "recTX06RHpFGNzK9T",
      "createdTime": "2018-10-17T23:46:48.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attNSmykUEEgGaJ7r",
          "url": "https://dl.airtable.com/zPKqME2QRD66bvFrTi6w_Danielle%20Li%2C%20Board%20-%20Vice%20Exec%2C%20Spring%202018.jpg",
          "filename": "Danielle Li, Board - Vice Exec, Spring 2018.jpg",
          "size": 172698,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/oEfrNdQbQCaBFNuGIFS1_small_Danielle%20Li%2C%20Board%20-%20Vice%20Exec%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/0bVrVtyySjKnjobZt88b_large_Danielle%20Li%2C%20Board%20-%20Vice%20Exec%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/fMGk7E0ZRTCApOnZOuaQ_full_Danielle%20Li%2C%20Board%20-%20Vice%20Exec%2C%20Spring%202018.jpg",
              "width": 1367,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "rec4xqb3LIKHRZjFp"
      ],
      "(You can't directly edit this column)": "Danielle Li - Vice Executive"
    },
    "rec8fq44tkasMgUFF": {
      "id": "rec8fq44tkasMgUFF",
      "createdTime": "2018-10-17T23:47:46.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attMYkM40DOSDh4mk",
          "url": "https://dl.airtable.com/yE7VC27TtWYcxJUzEsmk_James%20Chen%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
          "filename": "James Chen, Board - Marketing, Spring 2018.jpg",
          "size": 279053,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/P7SDsbrrR1OtIf0MNOvP_small_James%20Chen%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/DCt1jL6R7Cox3nwQbBwx_large_James%20Chen%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/VUh66ZhPQ9WJBL8Ird4x_full_James%20Chen%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recIrcS0iqZm0deBi"
      ],
      "(You can't directly edit this column)": "James Chen - PR Marketing"
    },
    "recbuA6BMMXIx3eRa": {
      "id": "recbuA6BMMXIx3eRa",
      "createdTime": "2018-10-17T23:48:25.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attdXqN5ICZH2usEo",
          "url": "https://dl.airtable.com/O7o4TH0SiDCD2mir6Rjw_Ryan%20Wong%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
          "filename": "Ryan Wong, Board - Marketing, Spring 2018.jpg",
          "size": 254053,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/L819vorXQXeU3PvptqUm_small_Ryan%20Wong%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/IOFPGWa0SNK0tY80MhVz_large_Ryan%20Wong%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/txyEavMURCyGxuQnr7xJ_full_Ryan%20Wong%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recBls2iU2PDgwqk5"
      ],
      "(You can't directly edit this column)": "Ryan Wong - PR Marketing"
    },
    "recY0wr9dD6XrplEt": {
      "id": "recY0wr9dD6XrplEt",
      "createdTime": "2018-10-17T23:48:58.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attOJXCrv2O9qeXpT",
          "url": "https://dl.airtable.com/rJPmPosuR4KX7lMExEDk_Jeremiah%20Kim%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
          "filename": "Jeremiah Kim, Board - Marketing, Spring 2018.jpg",
          "size": 65121,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/KY8bBmXnRlq0ozA1HpAJ_small_Jeremiah%20Kim%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/n9lZ3ihDRSKZK6eIHz5x_large_Jeremiah%20Kim%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 766
            },
            "full": {
              "url": "https://dl.airtable.com/YAiTj4iUQkWBEEROkqjU_full_Jeremiah%20Kim%2C%20Board%20-%20Marketing%2C%20Spring%202018.jpg",
              "width": 668,
              "height": 1000
            }
          }
        }
      ],
      "person": [
        "recFEcamXUNR9EndJ"
      ],
      "(You can't directly edit this column)": "Jeremiah Kim - PR Marketing"
    },
    "rec1ej6auMgWYirwN": {
      "id": "rec1ej6auMgWYirwN",
      "createdTime": "2018-10-17T23:49:32.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "atto71Riy9ORle08X",
          "url": "https://dl.airtable.com/FNqcJ9FRSVGm7yl3sdeC_Nicole%20Shim%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
          "filename": "Nicole Shim, Board - Design, Spring 2018.jpg",
          "size": 205632,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/1pHmUDTQTeQjqfdPsUDm_small_Nicole%20Shim%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/vmmaLEeFSNKfNjPcUjyk_large_Nicole%20Shim%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/aOOZRrxTRWJj5Jic9g8g_full_Nicole%20Shim%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recmLTV2BFh495bJC"
      ],
      "(You can't directly edit this column)": "Nicole Shim - PR Design"
    },
    "recgAAXh8WKL1kcO0": {
      "id": "recgAAXh8WKL1kcO0",
      "createdTime": "2018-10-17T23:50:05.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attg9Tk5BYifKeWxR",
          "url": "https://dl.airtable.com/OVswRO66SJGigZQxEJkx_Christine%20Ho%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
          "filename": "Christine Ho, Board - Design, Spring 2018.jpg",
          "size": 337240,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ThkZEwwBSoaIyIqxKBtS_small_Christine%20Ho%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/dfXlNYgURlSc9qQnfssg_large_Christine%20Ho%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/efIatjyyTh24g9a4lhv0_full_Christine%20Ho%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
              "width": 1365,
              "height": 1365
            }
          }
        }
      ],
      "person": [
        "recJu9Hcotxvp8rOT"
      ],
      "(You can't directly edit this column)": "Christine Ho - PR Design"
    },
    "recssZGhieI9WjLJB": {
      "id": "recssZGhieI9WjLJB",
      "createdTime": "2018-10-17T23:50:39.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "att35LRb7jHmmLKzm",
          "url": "https://dl.airtable.com/4f8m1jfPQh6nYrNZru5N_Monica%20Li%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
          "filename": "Monica Li, Board - Design, Spring 2018.jpg",
          "size": 115809,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/DWBz7mFsTGK4oXtSbDsj_small_Monica%20Li%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/D6ka6wGDRmuY0KqBUHyE_large_Monica%20Li%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/loMCTUcSxCaFZW3zFDxu_full_Monica%20Li%2C%20Board%20-%20Design%2C%20Spring%202018.jpg",
              "width": 1405,
              "height": 937
            }
          }
        }
      ],
      "person": [
        "recCmFeqHAujsDBhb"
      ],
      "(You can't directly edit this column)": "Monica Li - PR Design"
    },
    "recf2TJ7oiYZ3ENj7": {
      "id": "recf2TJ7oiYZ3ENj7",
      "createdTime": "2018-10-17T23:51:59.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attv5Z7uu7oaeWqa1",
          "url": "https://dl.airtable.com/FPEgUDOIQpGANESAGgxp_Charmaine%20Lai%2C%20Board%20-%20Finance%2C%20Spring%202018.jpg",
          "filename": "Charmaine Lai, Board - Finance, Spring 2018.jpg",
          "size": 173238,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/uZae0krNR7e8hFCRXC1M_small_Charmaine%20Lai%2C%20Board%20-%20Finance%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/59rjHKXRNOrlyYW8s3dA_large_Charmaine%20Lai%2C%20Board%20-%20Finance%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/mo6DwPmzThDiuMDO0RcH_full_Charmaine%20Lai%2C%20Board%20-%20Finance%2C%20Spring%202018.jpg",
              "width": 1366,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recnJ1jNx4hdHcs8S"
      ],
      "(You can't directly edit this column)": "Charmaine Lai - Finance Chair"
    },
    "recNbD8Ax95wnPUXH": {
      "id": "recNbD8Ax95wnPUXH",
      "createdTime": "2018-10-17T23:52:43.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attMhatDQ1NRLojQm",
          "url": "https://dl.airtable.com/K0qyWvVEQ92Qyt0XcHLu_Soo%20Rim%20Choi%2C%20Board%20-%20Finance%2C%20Spring%202018.jpg",
          "filename": "Soo Rim Choi, Board - Finance, Spring 2018.jpg",
          "size": 15270,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/8jnGnO7lTjauvpWQQB0w_small_Soo%20Rim%20Choi%2C%20Board%20-%20Finance%2C%20Spring%202018.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/XxJPeXjSRheayoBCy0ac_large_Soo%20Rim%20Choi%2C%20Board%20-%20Finance%2C%20Spring%202018.jpg",
              "width": 423,
              "height": 423
            },
            "full": {
              "url": "https://dl.airtable.com/DQCaErRXmcY47uL1IOog_full_Soo%20Rim%20Choi%2C%20Board%20-%20Finance%2C%20Spring%202018.jpg",
              "width": 423,
              "height": 423
            }
          }
        }
      ],
      "person": [
        "recqzbrK1cnXPa5Wd"
      ],
      "(You can't directly edit this column)": "Soo Rim Choi - Finance Chair"
    },
    "recKH6lInnnP3rq5v": {
      "id": "recKH6lInnnP3rq5v",
      "createdTime": "2018-10-17T23:53:28.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attaOKQTZJXaKscRr",
          "url": "https://dl.airtable.com/ByhwaPlSEG001jtwE2nS_Chloe%20Ding%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
          "filename": "Chloe Ding, Board - Events, Spring 2018.jpg",
          "size": 349185,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/VoLwTtOlRqflCnggQ2Pf_small_Chloe%20Ding%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/F8VkkR6HQ4qsK48rkpUq_large_Chloe%20Ding%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/DAYrbPtVTl2nnq3KHyLQ_full_Chloe%20Ding%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
              "width": 1366,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "reclQY37yXdhBjDGH"
      ],
      "(You can't directly edit this column)": "Chloe Ding - Events Chair"
    },
    "recySsvbLKyHk9sfh": {
      "id": "recySsvbLKyHk9sfh",
      "createdTime": "2018-10-17T23:54:06.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "att9a2N2s2LzMV50q",
          "url": "https://dl.airtable.com/e7aOGdX0TtKkiyE9CejN_Karina%20Hull%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
          "filename": "Karina Hull, Board - Events, Spring 2018.jpg",
          "size": 72528,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/midXl1iUSfCUKVrRAG8E_small_Karina%20Hull%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/Bl3RD6YIRGmTifgRFYbV_large_Karina%20Hull%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
              "width": 513,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/iubQpdwiR32HZWm2e2pI_full_Karina%20Hull%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
              "width": 890,
              "height": 888
            }
          }
        }
      ],
      "person": [
        "reczY2iMsgy8o68WH"
      ],
      "(You can't directly edit this column)": "Karina Hull - Events Chair"
    },
    "reciqnqcItxwiB9ZR": {
      "id": "reciqnqcItxwiB9ZR",
      "createdTime": "2018-10-17T23:54:57.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "att0WRUaMFNpUDSXh",
          "url": "https://dl.airtable.com/AKiM9SMUQoaZgyC1AHLA_Vivian%20Tieu%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
          "filename": "Vivian Tieu, Board - Events, Spring 2018.jpg",
          "size": 68614,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/CJYP26kSrKy0FGXCkWdW_small_Vivian%20Tieu%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/nfLBZfQOT7O7XD0trEpN_large_Vivian%20Tieu%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 513
            },
            "full": {
              "url": "https://dl.airtable.com/inoIbMlSnWBbFYuBZAaf_full_Vivian%20Tieu%2C%20Board%20-%20Events%2C%20Spring%202018.jpg",
              "width": 823,
              "height": 824
            }
          }
        }
      ],
      "person": [
        "reczKuh2qJJf55cf0"
      ],
      "(You can't directly edit this column)": "Vivian Tieu - Events Chair"
    },
    "recfaaat8NOYpX42H": {
      "id": "recfaaat8NOYpX42H",
      "createdTime": "2018-10-17T23:55:33.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attl9M5gDFlXefZoR",
          "url": "https://dl.airtable.com/o9Nm87UT0O02KWOf4M81_Anthony%20Chen%2C%20Board%20-%20Historian%2C%20Spring%202018.jpg",
          "filename": "Anthony Chen, Board - Historian, Spring 2018.jpg",
          "size": 291371,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/QLzfjOSSYWj7Lxw5AqFQ_small_Anthony%20Chen%2C%20Board%20-%20Historian%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/4urEu89eSTSEEL1SvFuR_large_Anthony%20Chen%2C%20Board%20-%20Historian%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/KFws8PuzQhu54X6qt5lL_full_Anthony%20Chen%2C%20Board%20-%20Historian%2C%20Spring%202018.jpg",
              "width": 1366,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recuxPPGm6jYZYg8b"
      ],
      "(You can't directly edit this column)": "Anthony Chen - Historian"
    },
    "rec7RNbDRBHYxdKqM": {
      "id": "rec7RNbDRBHYxdKqM",
      "createdTime": "2018-10-17T23:56:14.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attLkRY58NaMQ3TTk",
          "url": "https://dl.airtable.com/iykkUN0qTCCz5VtUi0Rj_Alicia%20Chow%2C%20Board%20-%20Historian%2C%20Spring%202018.jpg",
          "filename": "Alicia Chow, Board - Historian, Spring 2018.jpg",
          "size": 163589,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/V7Y5sHlBTiNo8EWBdGpF_small_Alicia%20Chow%2C%20Board%20-%20Historian%2C%20Spring%202018.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/s0jjrCXwQ4SK9MQ4aRK0_large_Alicia%20Chow%2C%20Board%20-%20Historian%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 517
            },
            "full": {
              "url": "https://dl.airtable.com/sLWG8NykRpuFEAPvh7NI_full_Alicia%20Chow%2C%20Board%20-%20Historian%2C%20Spring%202018.jpg",
              "width": 1080,
              "height": 1090
            }
          }
        }
      ],
      "person": [
        "rec1LGQN0f3Ylkwo9"
      ],
      "(You can't directly edit this column)": "Alicia Chow - Historian"
    },
    "rec0KlBZwxCoTMOFo": {
      "id": "rec0KlBZwxCoTMOFo",
      "createdTime": "2018-10-17T23:57:06.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attzQIagJDnf2NpFd",
          "url": "https://dl.airtable.com/JhrHGxCSPigw4CJmyXgS_Mariana%20Tagano%2C%20Board%20-%20Outreach%2C%20Spring%202018.jpg",
          "filename": "Mariana Tagano, Board - Outreach, Spring 2018.jpg",
          "size": 53329,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/LKWjW9c1QAq33UIspKa3_small_Mariana%20Tagano%2C%20Board%20-%20Outreach%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/IDpELK1nTRuG5dgTOuY5_large_Mariana%20Tagano%2C%20Board%20-%20Outreach%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/5auIp7dMSa0jPzhp7ilM_full_Mariana%20Tagano%2C%20Board%20-%20Outreach%2C%20Spring%202018.jpg",
              "width": 640,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recA62lDDRZ9YpoBM"
      ],
      "(You can't directly edit this column)": "Mariana Tagano - Outreach Chair"
    },
    "reclCdruw9w77flnr": {
      "id": "reclCdruw9w77flnr",
      "createdTime": "2018-10-17T23:58:00.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "att087RKZQ9yrnivz",
          "url": "https://dl.airtable.com/oEkW5LyUTo6H8Zsg8wrH_Ansel%20Deng%2C%20Board%20-%20Outreach%2C%20Spring%202018.jpg",
          "filename": "Ansel Deng, Board - Outreach, Spring 2018.jpg",
          "size": 237337,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/BRHg8oiQSO7H4B1C76D4_small_Ansel%20Deng%2C%20Board%20-%20Outreach%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/04upx2NR3mO1tx1KHD6g_large_Ansel%20Deng%2C%20Board%20-%20Outreach%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/L7xIm4dhQr6tTUEPpJlu_full_Ansel%20Deng%2C%20Board%20-%20Outreach%2C%20Spring%202018.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "rec0Xrjy5cO0rNOIE"
      ],
      "(You can't directly edit this column)": "Ansel Deng - Outreach Chair"
    },
    "recW91BcvTt3RoJxB": {
      "id": "recW91BcvTt3RoJxB",
      "createdTime": "2018-10-17T23:59:31.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attqXR9uzlcDJU7Uj",
          "url": "https://dl.airtable.com/lkxMIDPRtuV2AxovcvE8_IMG_1898%20smol%20-%20STEPHANIE%20SO-YOUNG%20KIM.jpg",
          "filename": "IMG_1898 smol - STEPHANIE SO-YOUNG KIM.jpg",
          "size": 492034,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/VRkDE452ReSLAEwnZg40_small_IMG_1898%20smol%20-%20STEPHANIE%20SO-YOUNG%20KIM.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ZURO4NOOSN6XP2EnHpdL_large_IMG_1898%20smol%20-%20STEPHANIE%20SO-YOUNG%20KIM.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/sDzSTAgRZK7pOuDHMAjF_full_IMG_1898%20smol%20-%20STEPHANIE%20SO-YOUNG%20KIM.jpg",
              "width": 1024,
              "height": 1536
            }
          }
        }
      ],
      "person": [
        "recdfUETv4veF8fUU"
      ],
      "(You can't directly edit this column)": "Stephanie Kim - Executive Director"
    },
    "recJjiPD0zp7cn6cG": {
      "id": "recJjiPD0zp7cn6cG",
      "createdTime": "2018-10-18T00:01:32.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Executive Director",
      "picture": [
        {
          "id": "attrWIsUaxHFe5Pl6",
          "url": "https://dl.airtable.com/gDiKfRBTiwe4XswJcuQN_Screen%20Shot%202018-10-17%20at%205.03.08%20PM.png",
          "filename": "Screen Shot 2018-10-17 at 5.03.08 PM.png",
          "size": 2363438,
          "type": "image/png",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ccuu6rSeSvqAmbc0p4pK_small_Screen%20Shot%202018-10-17%20at%205.03.08%20PM.png",
              "width": 39,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/LbRnCgzPR4aSkHx6nMXS_large_Screen%20Shot%202018-10-17%20at%205.03.08%20PM.png",
              "width": 557,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/MEGozS2MToSwgxED4drW_full_Screen%20Shot%202018-10-17%20at%205.03.08%20PM.png",
              "width": 1282,
              "height": 1178
            }
          }
        }
      ],
      "person": [
        "recnJ1jNx4hdHcs8S"
      ],
      "(You can't directly edit this column)": "Charmaine Lai - Executive Director"
    },
    "recgR8oIWWtpRwQ41": {
      "id": "recgR8oIWWtpRwQ41",
      "createdTime": "2018-10-18T00:03:22.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attsh2CeQw0vRYzhS",
          "url": "https://dl.airtable.com/Pt06rxT5QQS4DsXU7Zrt_F54A1544%20-%20James%20Chen.jpg",
          "filename": "F54A1544 - James Chen.jpg",
          "size": 1869056,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/5agd123iSieYDQ9lkYY7_small_F54A1544%20-%20James%20Chen.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/GtHz8iYUSHefvj9YBeIW_large_F54A1544%20-%20James%20Chen.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/q4u8YrkSOWpAVXiPli9A_full_F54A1544%20-%20James%20Chen.jpg",
              "width": 2000,
              "height": 3000
            }
          }
        }
      ],
      "person": [
        "recIrcS0iqZm0deBi"
      ],
      "(You can't directly edit this column)": "James Chen - Vice Executive"
    },
    "recvvmAiFUt1nQqg3": {
      "id": "recvvmAiFUt1nQqg3",
      "createdTime": "2018-10-18T00:04:13.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attcjID2LCI3X1AOX",
          "url": "https://dl.airtable.com/h8dX0VA5RxSVGABhrDhb_20180423_122600%20-%20Aram%20Cariaga.jpg",
          "filename": "20180423_122600 - Aram Cariaga.jpg",
          "size": 1573025,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/dPHoQbYASn2vFe5a37Zh_small_20180423_122600%20-%20Aram%20Cariaga.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/EGXWrGkrQrqLeTsLE49a_large_20180423_122600%20-%20Aram%20Cariaga.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/WGrEFSzzRIGOoh9tRMKg_full_20180423_122600%20-%20Aram%20Cariaga.jpg",
              "width": 2560,
              "height": 2561
            }
          }
        }
      ],
      "person": [
        "recv9osfao9kZT21F"
      ],
      "(You can't directly edit this column)": "Aram Cariaga - Vice Executive"
    },
    "rec2TRZwtVni7Qwvf": {
      "id": "rec2TRZwtVni7Qwvf",
      "createdTime": "2018-10-18T00:04:56.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Vice Executive",
      "picture": [
        {
          "id": "attmYe25dGOALUEUA",
          "url": "https://dl.airtable.com/RzaUnDSPmuHc2tNLehAc_KGA_6777%20-%20Jeremiah%20Kim.JPG",
          "filename": "KGA_6777 - Jeremiah Kim.JPG",
          "size": 547443,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/z5FNP8H1SwqeKLNY2SNF_small_KGA_6777%20-%20Jeremiah%20Kim.JPG",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/8dnjdesvSj6O1UL8mlIQ_large_KGA_6777%20-%20Jeremiah%20Kim.JPG",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/x1pY7jsMSmuYvmu4nsg0_full_KGA_6777%20-%20Jeremiah%20Kim.JPG",
              "width": 2002,
              "height": 3000
            }
          }
        }
      ],
      "person": [
        "recFEcamXUNR9EndJ"
      ],
      "(You can't directly edit this column)": "Jeremiah Kim - Vice Executive"
    },
    "rec9wN29UB9PSc3bX": {
      "id": "rec9wN29UB9PSc3bX",
      "createdTime": "2018-10-18T00:05:44.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attvArUBZCzhF2YcN",
          "url": "https://dl.airtable.com/CeZ6YOLTTC2iPFEft704_fullsizeoutput_4748%20-%20Ryan%20Wong.jpeg",
          "filename": "fullsizeoutput_4748 - Ryan Wong.jpeg",
          "size": 1609122,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ussgaxdFRSq9qTVRPRVP_small_fullsizeoutput_4748%20-%20Ryan%20Wong.jpeg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/g6JEDd3RJGRGYH3HJf3Q_large_fullsizeoutput_4748%20-%20Ryan%20Wong.jpeg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/9KiPbMH6T20HDOBurJLA_full_fullsizeoutput_4748%20-%20Ryan%20Wong.jpeg",
              "width": 2250,
              "height": 3000
            }
          }
        }
      ],
      "person": [
        "recBls2iU2PDgwqk5"
      ],
      "(You can't directly edit this column)": "Ryan Wong - PR Marketing"
    },
    "recjefOkZ4BA9GSdr": {
      "id": "recjefOkZ4BA9GSdr",
      "createdTime": "2018-10-18T00:06:51.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attlQoHwg0p14aluk",
          "url": "https://dl.airtable.com/09gsvrKuTZqTcd47eQmA_792B3022-FC11-4852-AD1F-287760686CBC%20-%20Davina%20Dou.JPG",
          "filename": "792B3022-FC11-4852-AD1F-287760686CBC - Davina Dou.JPG",
          "size": 787070,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/12KjBv9OQF6XP4jOHsaR_small_792B3022-FC11-4852-AD1F-287760686CBC%20-%20Davina%20Dou.JPG",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/j69rYTqKRwqLn2YcjGh6_large_792B3022-FC11-4852-AD1F-287760686CBC%20-%20Davina%20Dou.JPG",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/yiBynKTPRJS7V2EdR527_full_792B3022-FC11-4852-AD1F-287760686CBC%20-%20Davina%20Dou.JPG",
              "width": 3000,
              "height": 2248
            }
          }
        }
      ],
      "person": [
        "recPtpRtkSg3geRhE"
      ],
      "(You can't directly edit this column)": "Davina Dou - PR Marketing"
    },
    "recbYs6ty7R081gTL": {
      "id": "recbYs6ty7R081gTL",
      "createdTime": "2018-10-18T00:07:59.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "PR Marketing",
      "picture": [
        {
          "id": "attd8baSKrg4xUAJU",
          "url": "https://dl.airtable.com/wojZEpUiQNyvLZMRX8BV_IMG_9752%20(1)%20-%20Manesy%20Ceja-Cevalles.JPG",
          "filename": "IMG_9752 (1) - Manesy Ceja-Cevalles.JPG",
          "size": 490768,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/bLqOsoQVQZy9V39eQbHQ_small_IMG_9752%20(1)%20-%20Manesy%20Ceja-Cevalles.JPG",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/G7x41xnLQKuAqRo8YvyR_large_IMG_9752%20(1)%20-%20Manesy%20Ceja-Cevalles.JPG",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/m4POFHVSLO6B3pwFfNAg_full_IMG_9752%20(1)%20-%20Manesy%20Ceja-Cevalles.JPG",
              "width": 1932,
              "height": 2576
            }
          }
        }
      ],
      "person": [
        "rect0ED131TruiBcq"
      ],
      "(You can't directly edit this column)": "Manesy Cevallos - PR Marketing"
    },
    "recLqTEOmtwwffBpb": {
      "id": "recLqTEOmtwwffBpb",
      "createdTime": "2018-10-18T00:08:43.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attkZ5cDaEFBP8n3P",
          "url": "https://dl.airtable.com/ewCYLotWScGtUc4vXipM_AFX%20-%20OH_-161%20-%20Daniel%20Morales.jpg",
          "filename": "AFX - OH_-161 - Daniel Morales.jpg",
          "size": 8233908,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/pjlQAYYJSb6vhyJApxOx_small_AFX%20-%20OH_-161%20-%20Daniel%20Morales.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/WE9QXJ4eSoSUk8aRsXUq_large_AFX%20-%20OH_-161%20-%20Daniel%20Morales.jpg",
              "width": 512,
              "height": 779
            },
            "full": {
              "url": "https://dl.airtable.com/mH0lbpG0TeqUfIRDCNde_full_AFX%20-%20OH_-161%20-%20Daniel%20Morales.jpg",
              "width": 1971,
              "height": 3000
            }
          }
        }
      ],
      "person": [
        "recJNRrxnWZBsrpZD"
      ],
      "(You can't directly edit this column)": "Daniel Morales - PR Design"
    },
    "recmDiq3nYjxVyJde": {
      "id": "recmDiq3nYjxVyJde",
      "createdTime": "2018-10-18T00:09:29.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "PR Design",
      "picture": [
        {
          "id": "attdTMTJAVu9uLNfU",
          "url": "https://dl.airtable.com/WHhoM37YRHKKIUjGIaYu_birthday%20pic%20-%20Kristina%20Kim.jpg",
          "filename": "birthday pic - Kristina Kim.jpg",
          "size": 128826,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/54X98NPXQqeg4upyhlgQ_small_birthday%20pic%20-%20Kristina%20Kim.jpg",
              "width": 29,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/kdE30YufSlWNX9Dn2Rta_large_birthday%20pic%20-%20Kristina%20Kim.jpg",
              "width": 512,
              "height": 627
            },
            "full": {
              "url": "https://dl.airtable.com/kk7ZfAqGS1uJVYzbwAz0_full_birthday%20pic%20-%20Kristina%20Kim.jpg",
              "width": 784,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "recsYm4ArvX4IvB3p"
      ],
      "(You can't directly edit this column)": "Kristina Kim - PR Design"
    },
    "recQBI7hJmK8Dd6qe": {
      "id": "recQBI7hJmK8Dd6qe",
      "createdTime": "2018-10-18T00:11:21.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attGVSMei9xxm1OIi",
          "url": "https://dl.airtable.com/OZtltoM1QGabTCBDcc97_MAWsolo-169%20-%20Cheryl%20Chen.JPG",
          "filename": "MAWsolo-169 - Cheryl Chen.JPG",
          "size": 934117,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/n9XWkthRq2Dyceu09RLg_small_MAWsolo-169%20-%20Cheryl%20Chen.JPG",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/BB39dP3ORJSr4jF3HWMg_large_MAWsolo-169%20-%20Cheryl%20Chen.JPG",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/FOqc4whHRTGPW3OnJDVo_full_MAWsolo-169%20-%20Cheryl%20Chen.JPG",
              "width": 2002,
              "height": 3000
            }
          }
        }
      ],
      "person": [
        "reczZGBDJP1tLF0A9"
      ],
      "(You can't directly edit this column)": "Cheryl Chen - Finance Chair"
    },
    "recuQShydZMDeFnk8": {
      "id": "recuQShydZMDeFnk8",
      "createdTime": "2018-10-18T00:12:07.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "attO7zvqU3a2EAFzy",
          "url": "https://dl.airtable.com/E2DsgAn5TTSS1t8ly7Si_Capture%20-%20Soo%20Choi.JPG",
          "filename": "Capture - Soo Choi.JPG",
          "size": 37419,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/vr2h2qCmT0d4zYEasnlA_small_Capture%20-%20Soo%20Choi.JPG",
              "width": 52,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/XjMTA3pWSXCh8s5MHTya_large_Capture%20-%20Soo%20Choi.JPG",
              "width": 485,
              "height": 334
            },
            "full": {
              "url": "https://dl.airtable.com/Xu8Wdw3TCWr6nQDeKU0V_full_Capture%20-%20Soo%20Choi.JPG",
              "width": 485,
              "height": 334
            }
          }
        }
      ],
      "person": [
        "recqzbrK1cnXPa5Wd"
      ],
      "(You can't directly edit this column)": "Soo Rim Choi - Finance Chair"
    },
    "recDDSSEqMN7mjYIQ": {
      "id": "recDDSSEqMN7mjYIQ",
      "createdTime": "2018-10-18T00:13:03.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Finance Chair",
      "picture": [
        {
          "id": "att85MthJViRRWCJ3",
          "url": "https://dl.airtable.com/kUN1wmdZQ56yLx6jfDJ1_IMG_6482%20-%20Jasmine%20Chen.JPG",
          "filename": "IMG_6482 - Jasmine Chen.JPG",
          "size": 245019,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Qy39ZEkKQ2G8CRJ7rT3x_small_IMG_6482%20-%20Jasmine%20Chen.JPG",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/45dqqcLaTJu8Yb41vy10_large_IMG_6482%20-%20Jasmine%20Chen.JPG",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/MrV6BwXStOi0vn8wlk7K_full_IMG_6482%20-%20Jasmine%20Chen.JPG",
              "width": 1620,
              "height": 1080
            }
          }
        }
      ],
      "person": [
        "rec4VoP3lLO1sUyqS"
      ],
      "(You can't directly edit this column)": "Jasmine Chen - Finance Chair"
    },
    "recFf0bUFGJ0IZ7rg": {
      "id": "recFf0bUFGJ0IZ7rg",
      "createdTime": "2018-10-18T00:13:50.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attAxpad7qCTLKVPr",
          "url": "https://dl.airtable.com/LVMAyyulRRGXk5fXHIC0_IMG_3457%20-%20Audrey%20Ma.JPG",
          "filename": "IMG_3457 - Audrey Ma.JPG",
          "size": 5168096,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/7eCbR8T36rQ86unVwbXw_small_IMG_3457%20-%20Audrey%20Ma.JPG",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/osa4RyPfShC6Lc9zdHOP_large_IMG_3457%20-%20Audrey%20Ma.JPG",
              "width": 512,
              "height": 756
            },
            "full": {
              "url": "https://dl.airtable.com/yUWKnp29QfGYefMxY4Xr_full_IMG_3457%20-%20Audrey%20Ma.JPG",
              "width": 1567,
              "height": 2313
            }
          }
        }
      ],
      "person": [
        "recY91MTqkbqNjZjL"
      ],
      "(You can't directly edit this column)": "Audrey Ma - Events Chair"
    },
    "recTT7RxdkCfw3qOk": {
      "id": "recTT7RxdkCfw3qOk",
      "createdTime": "2018-10-18T00:14:33.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attZcHqlQ4qQc7F7C",
          "url": "https://dl.airtable.com/6yWNWkRwT66fwgt0X9SX_Use%20this%20one%20-%20Tom%20Cheah.jpg",
          "filename": "Use this one - Tom Cheah.jpg",
          "size": 8673355,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/NIopP7K9RUmt9HtQTGDI_small_Use%20this%20one%20-%20Tom%20Cheah.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/alMoMT26SWpqqlbwYNWg_large_Use%20this%20one%20-%20Tom%20Cheah.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/5GD6yuW5R0jUnz77SrvA_full_Use%20this%20one%20-%20Tom%20Cheah.jpg",
              "width": 2000,
              "height": 3000
            }
          }
        }
      ],
      "person": [
        "recULtLwOyASphrEA"
      ],
      "(You can't directly edit this column)": "Tom Cheah - Events Chair"
    },
    "recliQv8CcMvX9Lz7": {
      "id": "recliQv8CcMvX9Lz7",
      "createdTime": "2018-10-18T00:15:35.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Events Chair",
      "picture": [
        {
          "id": "attefwVgv7k1tW1We",
          "url": "https://dl.airtable.com/dJnEnbxsRgCEllKzXVZz_Profile_Pic%20-%20Vincent-Demetrio%20Young.jpg",
          "filename": "Profile_Pic - Vincent-Demetrio Young.jpg",
          "size": 195057,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/z3DrEBgSRG0g8OvziCGY_small_Profile_Pic%20-%20Vincent-Demetrio%20Young.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/xCqg9g9RgqgGBIDGOUnb_large_Profile_Pic%20-%20Vincent-Demetrio%20Young.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/Z5l7PD4xTUKBT5y00JqW_full_Profile_Pic%20-%20Vincent-Demetrio%20Young.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recv8VS9Ix4izAxLg"
      ],
      "(You can't directly edit this column)": "Vincent Young - Events Chair"
    },
    "recEx6BW29gbfazMi": {
      "id": "recEx6BW29gbfazMi",
      "createdTime": "2018-10-18T00:17:03.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attiyyvOgmyUc9TMl",
          "url": "https://dl.airtable.com/NcnM9QUmQwSic5IXSX2j_33607961_10216940145842118_1683570327549902848_n%20-%20Alicia%20Chow.jpg",
          "filename": "33607961_10216940145842118_1683570327549902848_n - Alicia Chow.jpg",
          "size": 176546,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/TcL88cgJQKGJQNHnEMZs_small_33607961_10216940145842118_1683570327549902848_n%20-%20Alicia%20Chow.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/NAEWAk3dQquDTo6HrPJv_large_33607961_10216940145842118_1683570327549902848_n%20-%20Alicia%20Chow.jpg",
              "width": 512,
              "height": 773
            },
            "full": {
              "url": "https://dl.airtable.com/8ZFoouHFSlSjeeBgx1d3_full_33607961_10216940145842118_1683570327549902848_n%20-%20Alicia%20Chow.jpg",
              "width": 1224,
              "height": 1848
            }
          }
        }
      ],
      "person": [
        "rec1LGQN0f3Ylkwo9"
      ],
      "(You can't directly edit this column)": "Alicia Chow - Historian"
    },
    "recV1ZpVswX7PICAt": {
      "id": "recV1ZpVswX7PICAt",
      "createdTime": "2018-10-18T00:18:07.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Historian",
      "picture": [
        {
          "id": "attx1nBzRGajdjHTV",
          "url": "https://dl.airtable.com/PjvygowyQSGmLkkwX2gX_IMG_1525%20-%20Jonah%20Tang.jpg",
          "filename": "IMG_1525 - Jonah Tang.jpg",
          "size": 9049656,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/yehsnUMcTqIqrQV61b5Q_small_IMG_1525%20-%20Jonah%20Tang.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/PkmkUvUBTM2cB8Y7Awkk_large_IMG_1525%20-%20Jonah%20Tang.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/ZqbytXxRSRCBjZpOlhsu_full_IMG_1525%20-%20Jonah%20Tang.jpg",
              "width": 3000,
              "height": 2000
            }
          }
        }
      ],
      "person": [
        "recBiWbxo0ly1HtJS"
      ],
      "(You can't directly edit this column)": "Jonah Tang - Historian"
    },
    "recEpa6g2eK4kepYU": {
      "id": "recEpa6g2eK4kepYU",
      "createdTime": "2018-10-18T00:18:53.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attvPAFHi8UipGsCk",
          "url": "https://dl.airtable.com/pV0QF6TQ6eQDNTnhbJbA_IMG_4929%20-%20Aaron%20Luu.jpeg",
          "filename": "IMG_4929 - Aaron Luu.jpeg",
          "size": 417944,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/7fRAqxr0Rmi3v5Kn5Esi_small_IMG_4929%20-%20Aaron%20Luu.jpeg",
              "width": 20,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/sHwK3GHR0uVUzXUxL5At_large_IMG_4929%20-%20Aaron%20Luu.jpeg",
              "width": 512,
              "height": 911
            },
            "full": {
              "url": "https://dl.airtable.com/sf10sF0hSrOReyKOdbMs_full_IMG_4929%20-%20Aaron%20Luu.jpeg",
              "width": 899,
              "height": 1600
            }
          }
        }
      ],
      "person": [
        "recyq5aoBzIkd45hk"
      ],
      "(You can't directly edit this column)": "Aaron Luu - Outreach Chair"
    },
    "recqGZOgvSyf9Gphr": {
      "id": "recqGZOgvSyf9Gphr",
      "createdTime": "2018-10-18T00:19:35.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Outreach Chair",
      "picture": [
        {
          "id": "attrxscZSBd6x9MHo",
          "url": "https://dl.airtable.com/xFm95TRQoupsCgeaztNw_30709041_1542949859149988_6787964716317671424_o%20-%20Jacob%20Huy%20Ngo.jpg",
          "filename": "30709041_1542949859149988_6787964716317671424_o - Jacob Huy Ngo.jpg",
          "size": 211166,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/pnjHRAPoTDyN2bNuFbFO_small_30709041_1542949859149988_6787964716317671424_o%20-%20Jacob%20Huy%20Ngo.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/kirSpMhRIOv0Y0mlS0Am_large_30709041_1542949859149988_6787964716317671424_o%20-%20Jacob%20Huy%20Ngo.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/wE6ZETFZSXa8BeZtmO0D_full_30709041_1542949859149988_6787964716317671424_o%20-%20Jacob%20Huy%20Ngo.jpg",
              "width": 1440,
              "height": 1440
            }
          }
        }
      ],
      "person": [
        "recGThjgxlEJ9Xy0B"
      ],
      "(You can't directly edit this column)": "Jacob Ngo - Outreach Chair"
    },
    "recPgnkPYdTsaXuLW": {
      "id": "recPgnkPYdTsaXuLW",
      "createdTime": "2018-10-18T00:22:42.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Comp Finance",
      "picture": [
        {
          "id": "attXcZfrOkT2zkveD",
          "url": "https://dl.airtable.com/uF0fqudtTV22cUlPRavo_23517757_1730434420334284_2978850615855378761_n.jpg",
          "filename": "23517757_1730434420334284_2978850615855378761_n.jpg",
          "size": 164776,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/TjW8ZiP9TqSgtjTH7wfy_small_23517757_1730434420334284_2978850615855378761_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/gVKHh1PPS025w4E51hK3_large_23517757_1730434420334284_2978850615855378761_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/iuAPhHCZRHqVzTPWt3cx_full_23517757_1730434420334284_2978850615855378761_n.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "rec186CmW9PWsr87T"
      ],
      "(You can't directly edit this column)": "Alison Ong - Comp Finance"
    },
    "recFneoMUrd7Qitlf": {
      "id": "recFneoMUrd7Qitlf",
      "createdTime": "2018-10-18T00:23:21.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attWbPNaWbr7AxkdI",
          "url": "https://dl.airtable.com/P10LpsRraho0zAUEsIfA_41677504_1972020742818719_5250966448460791808_o.jpg",
          "filename": "41677504_1972020742818719_5250966448460791808_o.jpg",
          "size": 158266,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/F75OCtYQAmcErCfOjQ0N_small_41677504_1972020742818719_5250966448460791808_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/BmaHLFQsTgqGcq2C95jE_large_41677504_1972020742818719_5250966448460791808_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/Mw5kfj0JTOWq1s38yjKp_full_41677504_1972020742818719_5250966448460791808_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recMwcvipXM9qiwJJ"
      ],
      "(You can't directly edit this column)": "Christian Cayton - Comp Captain"
    },
    "recpoOliHHmwDIBof": {
      "id": "recpoOliHHmwDIBof",
      "createdTime": "2018-10-18T00:23:44.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attqtGOB63lp7TeVP",
          "url": "https://dl.airtable.com/ePoc3pQjSHexLbDCzRGe_14890476_10210834193436695_8713618960553001811_o.jpg",
          "filename": "14890476_10210834193436695_8713618960553001811_o.jpg",
          "size": 314168,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/NVPg4igkQuG6w0fInFEs_small_14890476_10210834193436695_8713618960553001811_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/J1R49qFmThufRevuIngS_large_14890476_10210834193436695_8713618960553001811_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/4jTjL0iaSgSg1SmMtQr8_full_14890476_10210834193436695_8713618960553001811_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recNQnSSq1R8SBkoa"
      ],
      "(You can't directly edit this column)": "Chris Lee - Comp Captain"
    },
    "recWBvRimNr5bCWyI": {
      "id": "recWBvRimNr5bCWyI",
      "createdTime": "2018-10-18T00:24:06.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "atte2oq19Acf6ckFf",
          "url": "https://dl.airtable.com/uNIgkr5Q56tnrH83mp5w_17814415_10211819306979056_3288899545693974485_o.jpg",
          "filename": "17814415_10211819306979056_3288899545693974485_o.jpg",
          "size": 190509,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/bkXu4wZ0Rc63NpGnAMtG_small_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/nXG18yjlTsOUAwwA1xoK_large_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/A38ttz1sT4SOIpXZ2bFl_full_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recfLsiC7955V83ri"
      ],
      "(You can't directly edit this column)": "Daniel He - Comp Artistics"
    },
    "rec7h2sY81YQeHgiB": {
      "id": "rec7h2sY81YQeHgiB",
      "createdTime": "2018-10-18T00:24:43.000Z",
      "group": [
        "recvLyVuB39eaBWUG"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "att5PoN25tfleyMxy",
          "url": "https://dl.airtable.com/t4y9CZa3S2iAMD4R0uoP_Screen%20Shot%202018-10-17%20at%206.24.09%20PM.png",
          "filename": "Screen Shot 2018-10-17 at 6.24.09 PM.png",
          "size": 1958721,
          "type": "image/png",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/AXs3kLKaTgaaKzaKstMQ_small_Screen%20Shot%202018-10-17%20at%206.24.09%20PM.png",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/jxHfkqiQ2WWU7UpOJXzj_large_Screen%20Shot%202018-10-17%20at%206.24.09%20PM.png",
              "width": 517,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/wALJxpFRLe8PE0DUIQjg_full_Screen%20Shot%202018-10-17%20at%206.24.09%20PM.png",
              "width": 1128,
              "height": 1118
            }
          }
        }
      ],
      "person": [
        "rec4rqgME4ja2gNp7"
      ],
      "(You can't directly edit this column)": "Jaemin Kim - Comp Artistics"
    },
    "recftaxOirG0FO2uP": {
      "id": "recftaxOirG0FO2uP",
      "createdTime": "2018-10-18T00:25:17.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attlzTOJ3JdUbjApJ",
          "url": "https://dl.airtable.com/nkspRPpSeeNL6xb8GL90_17814415_10211819306979056_3288899545693974485_o.jpg",
          "filename": "17814415_10211819306979056_3288899545693974485_o.jpg",
          "size": 190509,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/QYMnZUzATyJmIU4auw9Z_small_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/TQrnPNwoRJA7TTi0Q241_large_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/0JCzyUlrS1axEF7mM2h3_full_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recfLsiC7955V83ri"
      ],
      "(You can't directly edit this column)": "Daniel He - Comp Artistics"
    },
    "reclSqlKcWOPSBmnt": {
      "id": "reclSqlKcWOPSBmnt",
      "createdTime": "2018-10-18T00:25:53.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attAlV3Npqm4kh8kf",
          "url": "https://dl.airtable.com/hL0elBQvTGSaByY1wxSW_Andrew%20Lee%20-%20Exec.jpg",
          "filename": "Andrew Lee - Exec.jpg",
          "size": 43485,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/zdPKQW0BS9WG3JUFiS1T_small_Andrew%20Lee%20-%20Exec.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/0wzqhjRUT1aZqRyrl3xS_large_Andrew%20Lee%20-%20Exec.jpg",
              "width": 772,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/bkaCjTpQ1KMJMeNxXk9V_full_Andrew%20Lee%20-%20Exec.jpg",
              "width": 960,
              "height": 637
            }
          }
        }
      ],
      "person": [
        "recBPtE9xYnXjdgb4"
      ],
      "(You can't directly edit this column)": "Andrew Lee - Comp Artistics"
    },
    "recsREBChFaltwzAo": {
      "id": "recsREBChFaltwzAo",
      "createdTime": "2018-10-18T00:26:41.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attXhFiggWHy8IT0u",
          "url": "https://dl.airtable.com/YBt5D1HrSf6anrgeA8PF_41677504_1972020742818719_5250966448460791808_o.jpg",
          "filename": "41677504_1972020742818719_5250966448460791808_o.jpg",
          "size": 158266,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/E7E6vVQVQuSaCxCdHZ70_small_41677504_1972020742818719_5250966448460791808_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/38Rx8ldHRu2JHuzXEo7O_large_41677504_1972020742818719_5250966448460791808_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/2PhxJPibS8mIdEFp87uQ_full_41677504_1972020742818719_5250966448460791808_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recMwcvipXM9qiwJJ"
      ],
      "(You can't directly edit this column)": "Christian Cayton - Comp Captain"
    },
    "recqlraIAykE9FI3S": {
      "id": "recqlraIAykE9FI3S",
      "createdTime": "2018-10-18T00:27:12.000Z",
      "group": [
        "rec5wYZUm8pLKCX3T"
      ],
      "positionTitle": "Comp Finance",
      "picture": [
        {
          "id": "attMOJXP9ZjfJekbZ",
          "url": "https://dl.airtable.com/5kMtPPp9R7ycAXwvWW44_30743668_1771855149503344_7681325623351967744_n.jpg",
          "filename": "30743668_1771855149503344_7681325623351967744_n.jpg",
          "size": 89775,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/2VBKYjKTQDeggjJ0H5aa_small_30743668_1771855149503344_7681325623351967744_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/FIwisUUnQPyj4EwIS7gZ_large_30743668_1771855149503344_7681325623351967744_n.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/gvE2ojp9S4imvNEwkjSI_full_30743668_1771855149503344_7681325623351967744_n.jpg",
              "width": 740,
              "height": 740
            }
          }
        }
      ],
      "person": [
        "recWzPqCuU8d0RdCK"
      ],
      "(You can't directly edit this column)": "Alice Lee - Comp Finance"
    },
    "recnJSRWIQMhZbQEs": {
      "id": "recnJSRWIQMhZbQEs",
      "createdTime": "2018-10-18T00:27:34.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attRml35A9fBVUlKN",
          "url": "https://dl.airtable.com/ZtVXInoUTTOMdY53DcAO_18077195_2337094809848387_5913850620716608256_o.jpg",
          "filename": "18077195_2337094809848387_5913850620716608256_o.jpg",
          "size": 265638,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/hD9rkOuXRLKJQiHijUdY_small_18077195_2337094809848387_5913850620716608256_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/uTL6nHi7SXmLH6GH7GiX_large_18077195_2337094809848387_5913850620716608256_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/zsF18MPRUekENnrnizmI_full_18077195_2337094809848387_5913850620716608256_o.jpg",
              "width": 1366,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recFHTImw5G3ebb3P"
      ],
      "(You can't directly edit this column)": "Dan Ricciardelli - Comp Captain"
    },
    "recLJGgsdMILy5XOd": {
      "id": "recLJGgsdMILy5XOd",
      "createdTime": "2018-10-18T00:29:51.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attrqg97c7PbUIhHj",
          "url": "https://dl.airtable.com/XZt6rrSNW5a7CPH2FSbg_13958198_1415176458497780_4655581795915536553_o.jpg",
          "filename": "13958198_1415176458497780_4655581795915536553_o.jpg",
          "size": 321302,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/IqfqxvydSDixiVRxhi9k_small_13958198_1415176458497780_4655581795915536553_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/sV7yClSRgtnhMKyuefUw_large_13958198_1415176458497780_4655581795915536553_o.jpg",
              "width": 512,
              "height": 770
            },
            "full": {
              "url": "https://dl.airtable.com/L2AP4dc6S8q6lPtjC99A_full_13958198_1415176458497780_4655581795915536553_o.jpg",
              "width": 1362,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recuE0zgh4gmxJVEO"
      ],
      "(You can't directly edit this column)": "Brandon Toy - Comp Captain"
    },
    "recVhmcmenPkMyFWt": {
      "id": "recVhmcmenPkMyFWt",
      "createdTime": "2018-10-18T00:30:10.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attlXn3YhUV33tAbn",
          "url": "https://dl.airtable.com/4EaWimMDRNikcULEj2Ve_17814415_10211819306979056_3288899545693974485_o.jpg",
          "filename": "17814415_10211819306979056_3288899545693974485_o.jpg",
          "size": 190509,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/uq20IRxsQlOPrYdMKVmS_small_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/OI7B4f50RGqc8WHNpc4L_large_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/Jm6BDORUQlS1L4Hft8EQ_full_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recfLsiC7955V83ri"
      ],
      "(You can't directly edit this column)": "Daniel He - Comp Artistics"
    },
    "recXaCCAUDQHqukTy": {
      "id": "recXaCCAUDQHqukTy",
      "createdTime": "2018-10-18T00:30:31.000Z",
      "group": [
        "recBUiPZV1HCyrITE"
      ],
      "positionTitle": "Comp Finance",
      "picture": [
        {
          "id": "attD30Wq00y71YR2o",
          "url": "https://dl.airtable.com/vblSv9VARiuPvVVO65ar_14889742_10209513298642715_3823053715729303370_o.jpg",
          "filename": "14889742_10209513298642715_3823053715729303370_o.jpg",
          "size": 319782,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/MPCoZk1mSjaPf8E6cTfX_small_14889742_10209513298642715_3823053715729303370_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/xYDSlCnRSUqCLSD2ySry_large_14889742_10209513298642715_3823053715729303370_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/YMxJihWcSnKVviXO0QpG_full_14889742_10209513298642715_3823053715729303370_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recl0MAVB8URRERpr"
      ],
      "(You can't directly edit this column)": "Seung Joo Ahn - Comp Finance"
    },
    "rec3AKMveOXLNezy2": {
      "id": "rec3AKMveOXLNezy2",
      "createdTime": "2018-10-18T00:30:55.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attBqznVY0rBuLGOM",
          "url": "https://dl.airtable.com/IFI6YKLfSQyr16KEoTBH_17814415_10211819306979056_3288899545693974485_o.jpg",
          "filename": "17814415_10211819306979056_3288899545693974485_o.jpg",
          "size": 190509,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/0GS7hdbETxOms15icQvd_small_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/MbckZdfBRYidfEkUD8TI_large_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/wjAxcS5rTsWW0GLplWWe_full_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recfLsiC7955V83ri"
      ],
      "(You can't directly edit this column)": "Daniel He - Comp Artistics"
    },
    "recQJrl4Ir3zMeFhy": {
      "id": "recQJrl4Ir3zMeFhy",
      "createdTime": "2018-10-18T00:31:32.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attiflkBlyisnYR19",
          "url": "https://dl.airtable.com/jtECAULnTo2RN7bvGK7g_39750210_2014411958610140_8256809060142153728_o.jpg",
          "filename": "39750210_2014411958610140_8256809060142153728_o.jpg",
          "size": 170196,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/UETOz9iHRvGVCBOppFNQ_small_39750210_2014411958610140_8256809060142153728_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/SO6328uTM6N0OHfXSxOE_large_39750210_2014411958610140_8256809060142153728_o.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/bAYnsy3SiK0MYpjk5HDq_full_39750210_2014411958610140_8256809060142153728_o.jpg",
              "width": 890,
              "height": 1334
            }
          }
        }
      ],
      "person": [
        "recPocv0xCXtbE2zX"
      ],
      "(You can't directly edit this column)": "Alina Li - Comp Captain"
    },
    "reccimMJ4z1CZxCEn": {
      "id": "reccimMJ4z1CZxCEn",
      "createdTime": "2018-10-18T00:31:53.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attNhbT0ikCshgyGg",
          "url": "https://dl.airtable.com/WIUClriR2SzOnfFPwyAi_10355612_10205028674057448_8623846652097804396_o.jpg",
          "filename": "10355612_10205028674057448_8623846652097804396_o.jpg",
          "size": 209213,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/fk3gopYJRBaaEogLBe0z_small_10355612_10205028674057448_8623846652097804396_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/7qXfB5ByRpy3Zl9OSMNG_large_10355612_10205028674057448_8623846652097804396_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/kr9wWOARSHSnZmwO8DQ8_full_10355612_10205028674057448_8623846652097804396_o.jpg",
              "width": 1366,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "rec9ycYnjZ88dsU32"
      ],
      "(You can't directly edit this column)": "Albert Weng - Comp Captain"
    },
    "reczOglPA7H4rKZD3": {
      "id": "reczOglPA7H4rKZD3",
      "createdTime": "2018-10-18T00:32:19.000Z",
      "group": [
        "recWYlWdGZIv2Cu5Y"
      ],
      "positionTitle": "Comp Finance",
      "picture": [
        {
          "id": "attLkot2Vg1p34z7t",
          "url": "https://dl.airtable.com/158GXjHSxOzZRCVYSqng_14889742_10209513298642715_3823053715729303370_o.jpg",
          "filename": "14889742_10209513298642715_3823053715729303370_o.jpg",
          "size": 319782,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/dz91gwF7QIGogvVwbo2l_small_14889742_10209513298642715_3823053715729303370_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/XfhmNzrQ4qOh7wspI29N_large_14889742_10209513298642715_3823053715729303370_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/PsUAnfaQEaG5OvfiXYDN_full_14889742_10209513298642715_3823053715729303370_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recl0MAVB8URRERpr"
      ],
      "(You can't directly edit this column)": "Seung Joo Ahn - Comp Finance"
    },
    "recQafxPMYHX8f1ON": {
      "id": "recQafxPMYHX8f1ON",
      "createdTime": "2018-10-18T00:32:57.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Comp Finance",
      "picture": [
        {
          "id": "att7KUw591vC4lEXp",
          "url": "https://dl.airtable.com/QTnvItWQSJemMt97H5Yv_14047340_10210380135730693_3095454426301111570_o.jpg",
          "filename": "14047340_10210380135730693_3095454426301111570_o.jpg",
          "size": 272262,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/iDTKDhUTEymYsYvZBO5a_small_14047340_10210380135730693_3095454426301111570_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/UaZKCGCDTgmC7Pib2xkK_large_14047340_10210380135730693_3095454426301111570_o.jpg",
              "width": 512,
              "height": 770
            },
            "full": {
              "url": "https://dl.airtable.com/zOKvn0FyQwCrPLXE8PPp_full_14047340_10210380135730693_3095454426301111570_o.jpg",
              "width": 1362,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recxwGyHwoJImSoPP"
      ],
      "(You can't directly edit this column)": "Cari Gan - Comp Finance"
    },
    "reculGDwitMiaaY6N": {
      "id": "reculGDwitMiaaY6N",
      "createdTime": "2018-10-18T00:33:03.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "att78iCO9T6iUUYux",
          "url": "https://dl.airtable.com/6OAo5cmPRma97dHPcPy5_39750210_2014411958610140_8256809060142153728_o.jpg",
          "filename": "39750210_2014411958610140_8256809060142153728_o.jpg",
          "size": 170196,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Iw0kcSMARVOd1DGWH4AN_small_39750210_2014411958610140_8256809060142153728_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/rHzGbCrRvio4x0Qt1EiP_large_39750210_2014411958610140_8256809060142153728_o.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/S6MCnoWMStzMU9lCI1A3_full_39750210_2014411958610140_8256809060142153728_o.jpg",
              "width": 890,
              "height": 1334
            }
          }
        }
      ],
      "person": [
        "recPocv0xCXtbE2zX"
      ],
      "(You can't directly edit this column)": "Alina Li - Comp Captain"
    },
    "rec71FUZBo7jrpSqJ": {
      "id": "rec71FUZBo7jrpSqJ",
      "createdTime": "2018-10-18T00:33:44.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attAkT0X2iJRIRHkP",
          "url": "https://dl.airtable.com/Eko3jPhQWal31krHpPhQ_21318943_10204116331145875_2003800272378693642_o.jpg",
          "filename": "21318943_10204116331145875_2003800272378693642_o.jpg",
          "size": 497757,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/VjfUdhDRqmhlM2bBkQ5H_small_21318943_10204116331145875_2003800272378693642_o.jpg",
              "width": 48,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/NmyGDpDsS6y8o3zwfbt4_large_21318943_10204116331145875_2003800272378693642_o.jpg",
              "width": 683,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/NQuHrcfnT8iqVUxdH6Qr_full_21318943_10204116331145875_2003800272378693642_o.jpg",
              "width": 2048,
              "height": 1536
            }
          }
        }
      ],
      "person": [
        "recHftRqWaKYQyKDb"
      ],
      "(You can't directly edit this column)": "Yanni Velasquez - Comp Captain"
    },
    "recPvx31lUvOTMzWI": {
      "id": "recPvx31lUvOTMzWI",
      "createdTime": "2018-10-18T00:34:37.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "att6kwBVYwyzYZEmo",
          "url": "https://dl.airtable.com/j6FJjuRCOt3jfC20Y5YQ_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
          "filename": "Trisha Giron, Comp Board - Artistic Director, Fall 2017.jpg",
          "size": 282908,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Q8nxP5hDQGCZXWv6UQcA_small_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/FPVeGi0qRrmmMUfHa1Ji_large_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/ltpj4Z4gRkKbppEshONl_full_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 1367,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recNxGjKy27HT3XML"
      ],
      "(You can't directly edit this column)": "Trisha Giron - Comp Artistics"
    },
    "recA29CYm8ous5YmT": {
      "id": "recA29CYm8ous5YmT",
      "createdTime": "2018-10-18T00:34:57.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "att3i4odHrxqFcIzS",
          "url": "https://dl.airtable.com/Ba45fjTAR5egFzqc5KkU_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
          "filename": "Emilio Cuartero, Comp Board - Artistic Director, Fall 2017.jpg",
          "size": 283296,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/RBM0E0AWSEaSQc7jSLZM_small_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/79cpUmx2Qd6xZrBphhQF_large_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/Xm69ZOtcSOqzBoBhyMLk_full_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recn9QkB6vln1iqIG"
      ],
      "(You can't directly edit this column)": "Emilio Cuartero - Comp Artistics"
    },
    "recoz3ryR7fQCDoUq": {
      "id": "recoz3ryR7fQCDoUq",
      "createdTime": "2018-10-18T00:35:43.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attW4uBTGp04v5ZjY",
          "url": "https://dl.airtable.com/UB5Ov6G5RLCPnRUOSww9_15078583_1460326757318358_9120757854760246645_n.jpg",
          "filename": "15078583_1460326757318358_9120757854760246645_n.jpg",
          "size": 53497,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/7qESZykiT66hN21fqz0h_small_15078583_1460326757318358_9120757854760246645_n.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/rDbWer1cR8WsdDYhHt7R_large_15078583_1460326757318358_9120757854760246645_n.jpg",
              "width": 513,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/GRmQvUkR6qv7c1M8akd5_full_15078583_1460326757318358_9120757854760246645_n.jpg",
              "width": 755,
              "height": 754
            }
          }
        }
      ],
      "person": [
        "recD6ol6FmNngbj9C"
      ],
      "(You can't directly edit this column)": "Katrina Oshima - Comp Artistics"
    },
    "recWvtIchtUL1bcn7": {
      "id": "recWvtIchtUL1bcn7",
      "createdTime": "2018-10-18T00:36:13.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attiH9HSekCIKhrJW",
          "url": "https://dl.airtable.com/TMzstBLRxu0SL0Ve1Vd6_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
          "filename": "Trisha Giron, Comp Board - Artistic Director, Fall 2017.jpg",
          "size": 282908,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/vC7U7sDSgucvAhOfDrGK_small_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/dfWyfrMoSiewZgNGFsvj_large_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/8N58XgwUT768J9QGJXji_full_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 1367,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recNxGjKy27HT3XML"
      ],
      "(You can't directly edit this column)": "Trisha Giron - Comp Artistics"
    },
    "recEdqoEkjRTml6xZ": {
      "id": "recEdqoEkjRTml6xZ",
      "createdTime": "2018-10-18T00:36:40.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attRdJT9avOnW2SVy",
          "url": "https://dl.airtable.com/vwIzvmgjSgmvbKbdabl4_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
          "filename": "Emilio Cuartero, Comp Board - Artistic Director, Fall 2017.jpg",
          "size": 283296,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ugsclt2tQKuwH7kA3ZIw_small_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/5JSnlca8S06H9tbDtNeu_large_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/UyMaeSZkRicDDgW0foBh_full_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recn9QkB6vln1iqIG"
      ],
      "(You can't directly edit this column)": "Emilio Cuartero - Comp Artistics"
    },
    "recQ7VUlKsTaz1PA9": {
      "id": "recQ7VUlKsTaz1PA9",
      "createdTime": "2018-10-18T00:37:00.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "att6DtrduX1tYkdRd",
          "url": "https://dl.airtable.com/3XO8HayaQSmNBjqz5C7P_AC%20Dela%20Paz%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
          "filename": "AC Dela Paz, Comp Board - Captain, Fall 2017.jpg",
          "size": 172569,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/zRWxKSg2TGKPnamkXQv6_small_AC%20Dela%20Paz%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/oL2eaaXQS3ynn4a5eZro_large_AC%20Dela%20Paz%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/e7TPAwUTo2fa9GDH94wl_full_AC%20Dela%20Paz%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 2048,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "rec2nvAlUafPaALoo"
      ],
      "(You can't directly edit this column)": "AC Dela Paz - Comp Captain"
    },
    "rec8ELbYUBDN8u2M9": {
      "id": "rec8ELbYUBDN8u2M9",
      "createdTime": "2018-10-18T00:37:29.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attrSBsA9o9KzBLhG",
          "url": "https://dl.airtable.com/QLnu7RWYTC21WCl4GFdM_Lenny%20Dong%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
          "filename": "Lenny Dong, Comp Board - Captain, Fall 2017.jpg",
          "size": 239226,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/4pnQwNFMTImNNpqgxtaD_small_Lenny%20Dong%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/8BjODTLSuVV8HmBYiQYQ_large_Lenny%20Dong%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/G7xHOYgsRg4AzCO2gKL2_full_Lenny%20Dong%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 2048,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "recnIIrPMXGlfHFb9"
      ],
      "(You can't directly edit this column)": "Lenny Dong - Comp Captain"
    },
    "rechord0CVTrFiwm9": {
      "id": "rechord0CVTrFiwm9",
      "createdTime": "2018-10-18T00:37:51.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Comp Finance",
      "picture": [
        {
          "id": "attb8bdzZolVMrWwS",
          "url": "https://dl.airtable.com/emyL9WciRUGvz0do3fvu_Tiffanie%20Abacan%2C%20Comp%20Board%20-%20Finance%2C%20Fall%202017.jpg",
          "filename": "Tiffanie Abacan, Comp Board - Finance, Fall 2017.jpg",
          "size": 277196,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/I6RhbMeuSzOjY8dLptnJ_small_Tiffanie%20Abacan%2C%20Comp%20Board%20-%20Finance%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/QxiPiiqQRmQWEMhoGTAz_large_Tiffanie%20Abacan%2C%20Comp%20Board%20-%20Finance%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/Tae3waTPSBSZfjzUYIbj_full_Tiffanie%20Abacan%2C%20Comp%20Board%20-%20Finance%2C%20Fall%202017.jpg",
              "width": 1366,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recRcjNWpPIB6MhSE"
      ],
      "(You can't directly edit this column)": "Tiffanie Abacan - Comp Finance"
    },
    "recQjFIWuzTruoDx8": {
      "id": "recQjFIWuzTruoDx8",
      "createdTime": "2018-10-18T00:38:49.000Z",
      "group": [
        "recSb1AY0752pOYe6"
      ],
      "positionTitle": "Comp Finance",
      "picture": [
        {
          "id": "attg9xJew3JhZEUoW",
          "url": "https://dl.airtable.com/BD4cpLXhQAmwc3rrPGXN_14047340_10210380135730693_3095454426301111570_o.jpg",
          "filename": "14047340_10210380135730693_3095454426301111570_o.jpg",
          "size": 272262,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/jhNELOikRLKhiMKa9IIG_small_14047340_10210380135730693_3095454426301111570_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/PH9nA7BoRzmuUvz1Zoc4_large_14047340_10210380135730693_3095454426301111570_o.jpg",
              "width": 512,
              "height": 770
            },
            "full": {
              "url": "https://dl.airtable.com/r6Gjy3hURRmUIDdVWl2m_full_14047340_10210380135730693_3095454426301111570_o.jpg",
              "width": 1362,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recxwGyHwoJImSoPP"
      ],
      "(You can't directly edit this column)": "Cari Gan - Comp Finance"
    },
    "recOJEHgsz20gcZgQ": {
      "id": "recOJEHgsz20gcZgQ",
      "createdTime": "2018-10-18T00:40:04.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attL636gemj8DQTM1",
          "url": "https://dl.airtable.com/v04shpJSTA6mWM0RIUig_AC%20Dela%20Paz%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
          "filename": "AC Dela Paz, Comp Board - Captain, Fall 2017.jpg",
          "size": 172569,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/7E5UTZDRTW5PnPXeXLNG_small_AC%20Dela%20Paz%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/1P7iByUISteCurMEiJfs_large_AC%20Dela%20Paz%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/cH55znmRGWjr8nWQtfoB_full_AC%20Dela%20Paz%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 2048,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "rec2nvAlUafPaALoo"
      ],
      "(You can't directly edit this column)": "AC Dela Paz - Comp Captain"
    },
    "recD8ZQSM8cA7PbBW": {
      "id": "recD8ZQSM8cA7PbBW",
      "createdTime": "2018-10-18T00:41:14.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "att1Q9cCUAwKF0UfZ",
          "url": "https://dl.airtable.com/HJ4iXToqTuyJMdTor0ox_Lenny%20Dong%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
          "filename": "Lenny Dong, Comp Board - Captain, Fall 2017.jpg",
          "size": 239226,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/xdSdMlyQRe81uHEqikP9_small_Lenny%20Dong%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/SR7CeXRBRtnMy67jJeb3_large_Lenny%20Dong%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/poVJ25jzTSmBTYhRWDhg_full_Lenny%20Dong%2C%20Comp%20Board%20-%20Captain%2C%20Fall%202017.jpg",
              "width": 2048,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "recnIIrPMXGlfHFb9"
      ],
      "(You can't directly edit this column)": "Lenny Dong - Comp Captain"
    },
    "rec1fMNZGppXBQW6N": {
      "id": "rec1fMNZGppXBQW6N",
      "createdTime": "2018-10-18T00:42:19.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attRUoWqMsgioGDcd",
          "url": "https://dl.airtable.com/9FERMvPZTtCJBQ4zrnvi_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
          "filename": "Trisha Giron, Comp Board - Artistic Director, Fall 2017.jpg",
          "size": 282908,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Iyhth4tSRCK2QVU0RYwf_small_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/ww2HdFWkTAa4iPReLTnc_large_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/b9QpmY3KT5u606gAZne8_full_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 1367,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recNxGjKy27HT3XML"
      ],
      "(You can't directly edit this column)": "Trisha Giron - Comp Artistics"
    },
    "recJ4qaFgB7HGebc7": {
      "id": "recJ4qaFgB7HGebc7",
      "createdTime": "2018-10-18T00:44:56.000Z",
      "group": [
        "recV60tDu2ac60oV5"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attWJcuvZxk2M3831",
          "url": "https://dl.airtable.com/v8J8ZHRJybQ668K2SyA4_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
          "filename": "Emilio Cuartero, Comp Board - Artistic Director, Fall 2017.jpg",
          "size": 283296,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/d0xKAjMjQ2qQkrbpv1Cf_small_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/nGnJR9w0Sru2MtxPlMWh_large_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/kOsKmSLtQKum1xsY0iNk_full_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Fall%202017.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recn9QkB6vln1iqIG"
      ],
      "(You can't directly edit this column)": "Emilio Cuartero - Comp Artistics"
    },
    "rec7zqZoqYTawHa25": {
      "id": "rec7zqZoqYTawHa25",
      "createdTime": "2018-10-18T00:47:30.000Z",
      "group": [
        "reck4OThY5wJJLrfc"
      ],
      "positionTitle": "Comp Artistic Advisor",
      "picture": [
        {
          "id": "attGvwNZkt21VlogX",
          "url": "https://dl.airtable.com/6wla3AR6BtDlaoBNIXAx_17814415_10211819306979056_3288899545693974485_o.jpg",
          "filename": "17814415_10211819306979056_3288899545693974485_o.jpg",
          "size": 190509,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Y9FtrteHQdKIoUw9m9lQ_small_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/CfbN4kfZRAW5njxRmpJs_large_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/dWNYXZrCQBue8XQevVdw_full_17814415_10211819306979056_3288899545693974485_o.jpg",
              "width": 1365,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recfLsiC7955V83ri"
      ],
      "(You can't directly edit this column)": "Daniel He - Comp Artistic Advisor"
    },
    "recSEORUAvZKBuKAW": {
      "id": "recSEORUAvZKBuKAW",
      "createdTime": "2018-10-18T00:48:17.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Comp Artistic Advisor",
      "picture": [
        {
          "id": "attFFDYCi0TCbHtjB",
          "url": "https://dl.airtable.com/iWDtrLxHR4uXYLfxEtxi_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Advisor%2C%20Spring%202018.jpg",
          "filename": "Emilio Cuartero, Comp Board - Artistic Advisor, Spring 2018.jpg",
          "size": 283296,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Li7f3bRrR4STjgkCjAsu_small_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Advisor%2C%20Spring%202018.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/k7WJdYQRR4WWXcSocr8J_large_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Advisor%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/3mzxhZgS8idlWrV26qo4_full_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Advisor%2C%20Spring%202018.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recn9QkB6vln1iqIG"
      ],
      "(You can't directly edit this column)": "Emilio Cuartero - Comp Artistic Advisor"
    },
    "recIxLsf6AhkAYZjp": {
      "id": "recIxLsf6AhkAYZjp",
      "createdTime": "2018-10-18T00:49:41.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Comp Finance",
      "picture": [
        {
          "id": "attftuD0NUaapF4En",
          "url": "https://dl.airtable.com/Mn2cT5QzODyMZgxNAzIA_Kayla%20Toy%2C%20Comp%20Board%20-%20Finance%2C%20Spring%202018.jpg",
          "filename": "Kayla Toy, Comp Board - Finance, Spring 2018.jpg",
          "size": 243036,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/wCDE0COvQiCTYIMIe4HQ_small_Kayla%20Toy%2C%20Comp%20Board%20-%20Finance%2C%20Spring%202018.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/czveRikoQiGcsqyv2Hgw_large_Kayla%20Toy%2C%20Comp%20Board%20-%20Finance%2C%20Spring%202018.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/chY3kMqaQ4ieKmZXSosJ_full_Kayla%20Toy%2C%20Comp%20Board%20-%20Finance%2C%20Spring%202018.jpg",
              "width": 2048,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "recbLbxmZ4W2vEr5g"
      ],
      "(You can't directly edit this column)": "Kayla Toy - Comp Finance"
    },
    "rec3pE1flR2WcvqhZ": {
      "id": "rec3pE1flR2WcvqhZ",
      "createdTime": "2018-10-18T00:50:22.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attXsrGc90Ju2QSS1",
          "url": "https://dl.airtable.com/wqS85llnTiO0lUVrvuZx_Max%20McArthur%2C%20Comp%20Board%20-%20Captain%2C%20Spring%202018.jpg",
          "filename": "Max McArthur, Comp Board - Captain, Spring 2018.jpg",
          "size": 229769,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/fKXS5R69T3GskpVmQFUy_small_Max%20McArthur%2C%20Comp%20Board%20-%20Captain%2C%20Spring%202018.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/d0qM1bBJQvq0Xv6CRtKl_large_Max%20McArthur%2C%20Comp%20Board%20-%20Captain%2C%20Spring%202018.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/tuUHHxlpTmib0g3F8MPR_full_Max%20McArthur%2C%20Comp%20Board%20-%20Captain%2C%20Spring%202018.jpg",
              "width": 2048,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "rechcalO1WrUFzO5c"
      ],
      "(You can't directly edit this column)": "Max McArthur - Comp Captain"
    },
    "recc62zVWNCbaDchq": {
      "id": "recc62zVWNCbaDchq",
      "createdTime": "2018-10-18T00:51:10.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "att5lPGTvTPLx5b0G",
          "url": "https://dl.airtable.com/Vz5za11T6ivnxP9NmT0v_Zoe%20Marsh%2C%20Comp%20Board%20-%20Captain%2C%20Spring%202018.jpg",
          "filename": "Zoe Marsh, Comp Board - Captain, Spring 2018.jpg",
          "size": 58396,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/vgjjg7iISqybF5YTJMD4_small_Zoe%20Marsh%2C%20Comp%20Board%20-%20Captain%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/VEEA8BqSZ2CJVjx36ByT_large_Zoe%20Marsh%2C%20Comp%20Board%20-%20Captain%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/VEetKZRRt2mVSeJj3jD7_full_Zoe%20Marsh%2C%20Comp%20Board%20-%20Captain%2C%20Spring%202018.jpg",
              "width": 758,
              "height": 1136
            }
          }
        }
      ],
      "person": [
        "recxzpEID6oEGOEtD"
      ],
      "(You can't directly edit this column)": "Zoe Marsh - Comp Captain"
    },
    "rec1VNrCd7imnrsrf": {
      "id": "rec1VNrCd7imnrsrf",
      "createdTime": "2018-10-18T01:00:47.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Comp Artistics ",
      "picture": [
        {
          "id": "attImNu4deJu3nBmP",
          "url": "https://dl.airtable.com/oEvlLrO6T7mXIrGhBQGV_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Spring%202018.jpg",
          "filename": "Trisha Giron, Comp Board - Artistic Director, Spring 2018.jpg",
          "size": 282908,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/vXNX0bBFQxKQZleh1caz_small_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/zAaejw5QAyOWyBrILlaA_large_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/y1CXZnp4QmGpgxKN4y0V_full_Trisha%20Giron%2C%20Comp%20Board%20-%20Artistic%20Director%2C%20Spring%202018.jpg",
              "width": 1367,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recNxGjKy27HT3XML"
      ],
      "(You can't directly edit this column)": "Trisha Giron - Comp Artistics "
    },
    "recC1yAk0chU3BGIV": {
      "id": "recC1yAk0chU3BGIV",
      "createdTime": "2018-10-18T01:02:03.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attJJGNnadTzXQhr2",
          "url": "https://dl.airtable.com/ywpPYvPHS7OiwJasXCMu_Chantal%20Herrera%2C%20Board%20-%20Artistic%20Director%2C%20Spring%202018.jpg",
          "filename": "Chantal Herrera, Board - Artistic Director, Spring 2018.jpg",
          "size": 371530,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Jfh7CVs4SXtELViGp7j3_small_Chantal%20Herrera%2C%20Board%20-%20Artistic%20Director%2C%20Spring%202018.jpg",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/SEwrGTXZROCAjUAuOoW2_large_Chantal%20Herrera%2C%20Board%20-%20Artistic%20Director%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 768
            },
            "full": {
              "url": "https://dl.airtable.com/yy6mRQ7JSJK5EPnrrRxI_full_Chantal%20Herrera%2C%20Board%20-%20Artistic%20Director%2C%20Spring%202018.jpg",
              "width": 1366,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recDphJDWcMIkCW3k"
      ],
      "(You can't directly edit this column)": "Chantal Herrera - Comp Artistics"
    },
    "recQam7kgl8ewGaTj": {
      "id": "recQam7kgl8ewGaTj",
      "createdTime": "2018-10-18T01:03:53.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attUpm5tfh7Y7WxzB",
          "url": "https://dl.airtable.com/oAHShTZ9QoKsRiMFRjNm_beach%20-%20MICHAEL%20CHEN.jpg",
          "filename": "beach - MICHAEL CHEN.jpg",
          "size": 114296,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/s3TwcxOQNSnvZD0JA6ZU_small_beach%20-%20MICHAEL%20CHEN.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/7aEIAGrDThaMU3UHEP3G_large_beach%20-%20MICHAEL%20CHEN.jpg",
              "width": 768,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/EUXdi8BTSKPEhAichOcS_full_beach%20-%20MICHAEL%20CHEN.jpg",
              "width": 2048,
              "height": 1366
            }
          }
        }
      ],
      "person": [
        "recvmimrks8m7hMNB"
      ],
      "(You can't directly edit this column)": "Michael Chen - Comp Artistics"
    },
    "reclcIJZgkU1xS7gL": {
      "id": "reclcIJZgkU1xS7gL",
      "createdTime": "2018-10-18T01:04:47.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Comp Artistics",
      "picture": [
        {
          "id": "attP1wab6nslZ68Ue",
          "url": "https://dl.airtable.com/a0yGi1kQlqLhdL2RHuQu_36453789_10214309858798597_7300594218718724096_n.jpg",
          "filename": "36453789_10214309858798597_7300594218718724096_n.jpg",
          "size": 35119,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/g2hhwmhRTAXae3yHZh1w_small_36453789_10214309858798597_7300594218718724096_n.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/IOW6nBg0SSOyGEDKoVzj_large_36453789_10214309858798597_7300594218718724096_n.jpg",
              "width": 402,
              "height": 536
            },
            "full": {
              "url": "https://dl.airtable.com/THrMMWX7QFOqMzKisiYb_full_36453789_10214309858798597_7300594218718724096_n.jpg",
              "width": 402,
              "height": 536
            }
          }
        }
      ],
      "person": [
        "recDphJDWcMIkCW3k"
      ],
      "(You can't directly edit this column)": "Chantal Herrera - Comp Artistics"
    },
    "recu64G90wcXnucXb": {
      "id": "recu64G90wcXnucXb",
      "createdTime": "2018-10-18T01:06:00.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attwpFhnLtbTfmrIN",
          "url": "https://dl.airtable.com/BCCsL0SRQCGgfKakFIaZ_800_9728Edit%20-%20Keita%20Yada.jpg",
          "filename": "800_9728Edit - Keita Yada.jpg",
          "size": 2698188,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/niczNz6QVOLtdFuYiWV0_small_800_9728Edit%20-%20Keita%20Yada.jpg",
              "width": 54,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/nU9tnK8TSLTW8dIomNQw_large_800_9728Edit%20-%20Keita%20Yada.jpg",
              "width": 767,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/u8woGRGSTAyZbvIMkvSr_full_800_9728Edit%20-%20Keita%20Yada.jpg",
              "width": 3000,
              "height": 2002
            }
          }
        }
      ],
      "person": [
        "recXg1KTKckQDUF8R"
      ],
      "(You can't directly edit this column)": "Keita Yada - Comp Captain"
    },
    "recBsur5aAWJt0obi": {
      "id": "recBsur5aAWJt0obi",
      "createdTime": "2018-10-18T01:07:22.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Comp Captain",
      "picture": [
        {
          "id": "attLIHnhGycaD1KtW",
          "url": "https://dl.airtable.com/tAzeABp9QgaKy0NU3HuW_KGA_3651%20-%20MAX%20D%20MCARTHUR.JPG",
          "filename": "KGA_3651 - MAX D MCARTHUR.JPG",
          "size": 857224,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/WdlJ9avjSdOe8UXZh7jA_small_KGA_3651%20-%20MAX%20D%20MCARTHUR.JPG",
              "width": 24,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/UOr6B40RXitQurlNmFmP_large_KGA_3651%20-%20MAX%20D%20MCARTHUR.JPG",
              "width": 512,
              "height": 767
            },
            "full": {
              "url": "https://dl.airtable.com/42tpp7wRYeSR5SvagZuT_full_KGA_3651%20-%20MAX%20D%20MCARTHUR.JPG",
              "width": 2002,
              "height": 3000
            }
          }
        }
      ],
      "person": [
        "rechcalO1WrUFzO5c"
      ],
      "(You can't directly edit this column)": "Max McArthur - Comp Captain"
    },
    "recVcUQWzf0jSbWCU": {
      "id": "recVcUQWzf0jSbWCU",
      "createdTime": "2018-10-18T01:08:55.000Z",
      "group": [
        "recPWlKgpGEXDmwBI"
      ],
      "positionTitle": "Comp Finance",
      "picture": [
        {
          "id": "attpbcYDfq6LsauWq",
          "url": "https://dl.airtable.com/xV3ejJi2T769m9mUpCJO_pic_of_me%20-%20Movement%20Showcase.jpg",
          "filename": "pic_of_me - Movement Showcase.jpg",
          "size": 140853,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/nbvlWv08RRuPiu24F9db_small_pic_of_me%20-%20Movement%20Showcase.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/x8mf89WLQEqR9HDSBMbY_large_pic_of_me%20-%20Movement%20Showcase.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/dWX47DU4QBGa6qniNGfd_full_pic_of_me%20-%20Movement%20Showcase.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "rec1eXKKBU2tYbs5O"
      ],
      "(You can't directly edit this column)": "Andy Santiago - Comp Finance"
    },
    "recRQrCsjSiIfgJeF": {
      "id": "recRQrCsjSiIfgJeF",
      "createdTime": "2018-10-18T01:10:11.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Comp Communications",
      "picture": [
        {
          "id": "attbmTyNmflDqfRuG",
          "url": "https://dl.airtable.com/XxyFG02FQh6739fTpLiw_pic_of_me%20-%20Movement%20Showcase.jpg",
          "filename": "pic_of_me - Movement Showcase.jpg",
          "size": 140853,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/Gq6naWVUTgGx56Vxvv5Z_small_pic_of_me%20-%20Movement%20Showcase.jpg",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/SJM7yVFFROSrU6zxUlOC_large_pic_of_me%20-%20Movement%20Showcase.jpg",
              "width": 512,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/pS9oiDC0TymQ1W4jXZuc_full_pic_of_me%20-%20Movement%20Showcase.jpg",
              "width": 960,
              "height": 960
            }
          }
        }
      ],
      "person": [
        "rec1eXKKBU2tYbs5O"
      ],
      "(You can't directly edit this column)": "Andy Santiago - Comp Communications"
    },
    "recvOgtgGVK39lPR9": {
      "id": "recvOgtgGVK39lPR9",
      "createdTime": "2018-10-18T01:11:34.000Z",
      "group": [
        "recacbKTL0BnOU1WC"
      ],
      "positionTitle": "Comp Artistic Advisor",
      "picture": [
        {
          "id": "atttuSigfGkraMa34",
          "url": "https://dl.airtable.com/Y8mrUh3qTZChxKXS1aT3_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Advisor%2C%20Spring%202018.jpg",
          "filename": "Emilio Cuartero, Comp Board - Artistic Advisor, Spring 2018.jpg",
          "size": 283296,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/ntMbpicoQj27rS1KiUXy_small_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Advisor%2C%20Spring%202018.jpg",
              "width": 27,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/rwzc74J5RcavVVMQCuMF_large_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Advisor%2C%20Spring%202018.jpg",
              "width": 512,
              "height": 683
            },
            "full": {
              "url": "https://dl.airtable.com/ati1j6btT2WGkJwn6aJr_full_Emilio%20Cuartero%2C%20Comp%20Board%20-%20Artistic%20Advisor%2C%20Spring%202018.jpg",
              "width": 1536,
              "height": 2048
            }
          }
        }
      ],
      "person": [
        "recn9QkB6vln1iqIG"
      ],
      "(You can't directly edit this column)": "Emilio Cuartero - Comp Artistic Advisor"
    },
    "recUMDlSdJPSLOorB": {
      "id": "recUMDlSdJPSLOorB",
      "createdTime": "2018-11-03T18:35:25.000Z",
      "(You can't directly edit this column)": "Emily Zhang - Director",
      "person": [
        "rect8pr6b0mWltnRl"
      ],
      "positionTitle": "Director",
      "group": [
        "recJGCk5JPfHJ5nI5"
      ]
    },
    "reccuIpsZHfgfMdHZ": {
      "id": "reccuIpsZHfgfMdHZ",
      "createdTime": "2018-11-10T18:34:38.000Z",
      "group": [
        "recJGCk5JPfHJ5nI5"
      ],
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Jennifer Zhang - Director",
      "person": [
        "recm7CbBymkkW63kg"
      ]
    },
    "rechMfFiXW6u3hig7": {
      "id": "rechMfFiXW6u3hig7",
      "createdTime": "2018-11-10T18:34:54.000Z",
      "group": [
        "recJGCk5JPfHJ5nI5"
      ],
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Joseph Jiang - Director",
      "person": [
        "recNZcauY6F7F5QL9"
      ]
    },
    "recfbZU6l6HbLMMLB": {
      "id": "recfbZU6l6HbLMMLB",
      "createdTime": "2018-11-10T18:36:33.000Z",
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Angelica Nguyen - Director",
      "group": [
        "recjSiKn95KAHbj4A"
      ],
      "person": [
        "recZKJLk6t9beZRcA"
      ]
    },
    "recrGxiMaXDrZ7TAf": {
      "id": "recrGxiMaXDrZ7TAf",
      "createdTime": "2018-11-10T18:39:51.000Z",
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Shenelle Perera - Director",
      "group": [
        "recA5CvMHkDs0G0M2"
      ],
      "person": [
        "rect9x4ZqQWezoKQK"
      ]
    },
    "reczlfmjUsmzRdu6h": {
      "id": "reczlfmjUsmzRdu6h",
      "createdTime": "2018-11-10T18:40:44.000Z",
      "group": [
        "recA5CvMHkDs0G0M2"
      ],
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Jonathan Huang - Director",
      "person": [
        "recSHMwX0RknR4WdM"
      ]
    },
    "recZUkLW1oR8lDFrJ": {
      "id": "recZUkLW1oR8lDFrJ",
      "createdTime": "2018-11-10T18:41:14.000Z",
      "group": [
        "recjSiKn95KAHbj4A"
      ],
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Brian Nguyen - Director",
      "person": [
        "rec0Ban1Wo4hXmuY5"
      ]
    },
    "recStMEX4GrBluEmG": {
      "id": "recStMEX4GrBluEmG",
      "createdTime": "2018-11-10T18:41:19.000Z",
      "group": [
        "recjSiKn95KAHbj4A"
      ],
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Princeton Liu - Director",
      "person": [
        "rec4njl6dqr2zVeaj"
      ]
    },
    "recEMop3PhgfDFccm": {
      "id": "recEMop3PhgfDFccm",
      "createdTime": "2018-11-10T18:41:26.000Z",
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Ann Deng - Director",
      "group": [
        "recXo2Wr1dwrRK7x7"
      ],
      "person": [
        "recrhMG6f41h7ppYu"
      ]
    },
    "recTJSDEJuUa3c8aS": {
      "id": "recTJSDEJuUa3c8aS",
      "createdTime": "2018-11-10T18:41:45.000Z",
      "group": [
        "recXo2Wr1dwrRK7x7"
      ],
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Ethan Chung - Director",
      "person": [
        "recdFjZHoucW4IFIv"
      ]
    },
    "recfp4C8UIra4GMBQ": {
      "id": "recfp4C8UIra4GMBQ",
      "createdTime": "2018-11-10T18:41:50.000Z",
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Alex Nguyen - Director",
      "group": [
        "recgRpBKR0PGtPoaf"
      ],
      "person": [
        "recVwOcszdvg6tMe0"
      ]
    },
    "recKefbsymSU2XoQQ": {
      "id": "recKefbsymSU2XoQQ",
      "createdTime": "2018-11-10T18:42:36.000Z",
      "positionTitle": "Director",
      "(You can't directly edit this column)": "Alex Nguyen - Director",
      "group": [
        "recn6LlGtFykr0SZo"
      ],
      "person": [
        "recVwOcszdvg6tMe0"
      ]
    }
  }
  Semesters = {
    // "rec1E4dkGYXVTL2nr": {
    //   "id": "rec1E4dkGYXVTL2nr",
    //   "createdTime": "2018-11-03T19:20:13.000Z",
    //   "codename": "2018t",
    //   "boardGroupId": [
    //     "recAlXOGF37p5Qrtk"
    //   ]
    // },
    "recJ4hDACtEzrRW8f": {
      "id": "recJ4hDACtEzrRW8f",
      "createdTime": "2018-11-03T19:19:26.000Z",
      "codename": "2018c",
      "boardGroupId": [
        "recacbKTL0BnOU1WC"
      ],
      "teamGroupIds": [
        "recA5CvMHkDs0G0M2",
        "recjSiKn95KAHbj4A",
        "recXo2Wr1dwrRK7x7"
      ]
    },
    "recQyG9LRNGj3oJL9": {
      "id": "recQyG9LRNGj3oJL9",
      "createdTime": "2018-11-03T19:27:13.000Z",
      "codename": "2018b",
      "teamGroupIds": [
        "recJGCk5JPfHJ5nI5"
      ]
    },
    "recmdSIsenKNx7Sgq": {
      "id": "recmdSIsenKNx7Sgq",
      "createdTime": "2018-11-03T19:19:22.000Z",
      "codename": "2018a",
      "boardGroupId": [
        "recPWlKgpGEXDmwBI"
      ]
    },
    "recNgq1uYEeYnepMi": {
      "id": "recNgq1uYEeYnepMi",
      "createdTime": "2018-11-03T19:19:17.000Z",
      "codename": "2017c",
      "boardGroupId": [
        "recV60tDu2ac60oV5"
      ]
    },
    "recd2QXLEA5yJeKlX": {
      "id": "recd2QXLEA5yJeKlX",
      "createdTime": "2018-11-03T19:33:50.000Z",
      "codename": "2017b",
      "teamGroupIds": [
        "recn6LlGtFykr0SZo"
      ]
    },
    "recZUIegVvDgUQVqN": {
      "id": "recZUIegVvDgUQVqN",
      "createdTime": "2018-11-03T19:19:14.000Z",
      "codename": "2017a",
      "boardGroupId": [
        "recSb1AY0752pOYe6"
      ]
    },
    "rec46uOkPIMRT94Yl": {
      "id": "rec46uOkPIMRT94Yl",
      "createdTime": "2018-11-03T19:18:58.000Z",
      "codename": "2016c",
      "boardGroupId": [
        "reck4OThY5wJJLrfc"
      ]
    },
    "recCb5r44adqba2uh": {
      "id": "recCb5r44adqba2uh",
      "createdTime": "2018-11-03T19:18:53.000Z",
      "codename": "2016a",
      "boardGroupId": [
        "recWYlWdGZIv2Cu5Y"
      ]
    },
    "recY0nIuoOQBEiove": {
      "id": "recY0nIuoOQBEiove",
      "createdTime": "2018-11-03T19:18:49.000Z",
      "codename": "2015c",
      "boardGroupId": [
        "recBUiPZV1HCyrITE"
      ]
    },
    "recciR1KW7mB2Xl9Q": {
      "id": "recciR1KW7mB2Xl9Q",
      "createdTime": "2018-11-03T19:18:45.000Z",
      "codename": "2015a",
      "boardGroupId": [
        "rec5wYZUm8pLKCX3T"
      ]
    },
    "recbm2ludN2zPK0pF": {
      "id": "recbm2ludN2zPK0pF",
      "createdTime": "2018-11-03T19:18:39.000Z",
      "codename": "2014c",
      "boardGroupId": [
        "recvLyVuB39eaBWUG"
      ]
    },
    "rec7OSoLcUa7AXoRj": {
      "id": "rec7OSoLcUa7AXoRj",
      "createdTime": "2018-11-03T19:17:15.000Z",
      "codename": "2014a",
      "boardGroupId": [
        "recefYCYkTSsb9UBW"
      ]
    },
    "reclq9NGrcGBX4Kik": {
      "id": "reclq9NGrcGBX4Kik",
      "createdTime": "2018-11-03T19:15:01.000Z",
      "codename": "2013c",
      "boardGroupId": [
        "rec7AuUevOSkKy0wb"
      ]
    },
    "recNoD9Wx0WqCgYfo": {
      "id": "recNoD9Wx0WqCgYfo",
      "createdTime": "2018-11-03T19:14:36.000Z",
      "codename": "2013a",
      "boardGroupId": [
        "reclDFFQA8U6TkNNU"
      ]
    },
    "rec940RvbrFn1Y5cD": {
      "id": "rec940RvbrFn1Y5cD",
      "createdTime": "2018-11-03T19:28:45.000Z",
      "codename": "2011",
      "boardGroupId": [
        "recs2aRRotZKq6Lvm"
      ]
    }
  }

}
export default AFX;
