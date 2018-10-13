export namespace AFX {
  export interface Person {
    id: string;
    createdTime: string;
    name: string;
    Positions: string[];
  }

  export interface Group {
    id: string;
    createdTime: string;
    name: string;
    positionIds: string[];
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
  export let PersonPositions: { [x: string]: PersonPosition };
  export let Groups: { [x: string]: Group };
  export let People: { [x: string]: Person };

  People = {
    rec4UfhaS3ZcsKOfU: {
      id: "rec4UfhaS3ZcsKOfU",
      createdTime: "2018-09-28T02:33:01.000Z",
      name: "Kirk La",
      Positions: ["recIZvsIUY7Lf3WCZ"],
    },
    recO6btsvRqZeuJjP: {
      id: "recO6btsvRqZeuJjP",
      createdTime: "2018-09-28T02:33:01.000Z",
      name: "Jeffrey Wang",
      Positions: ["recDnBRrmDOgpil2Z"],
    },
    reci7k75SMLdI0Wjh: {
      id: "reci7k75SMLdI0Wjh",
      createdTime: "2018-09-28T02:33:01.000Z",
      name: "Mei Mei",
      Positions: ["recHuonEXK26KidcQ"],
    },
    recdfUETv4veF8fUU: {
      id: "recdfUETv4veF8fUU",
      createdTime: "2018-10-04T02:45:10.000Z",
      name: "Stephanie Kim",
      Positions: ["reciXg7xWpz61Vwo6"],
    },
    recK9H06reG3BErUU: {
      id: "recK9H06reG3BErUU",
      createdTime: "2018-10-04T02:45:10.000Z",
      name: "Annie Wang",
      Positions: ["rec0tUiDaoQU785n1"],
    },
    recCQaNAzI6bTDsQo: {
      id: "recCQaNAzI6bTDsQo",
      createdTime: "2018-10-04T02:45:10.000Z",
      name: "Mengyan Li",
      Positions: ["recklML4eO8FNCc0Y"],
    },
    reclQY37yXdhBjDGH: {
      id: "reclQY37yXdhBjDGH",
      createdTime: "2018-10-04T02:45:10.000Z",
      name: "Chloe Ding",
      Positions: ["recbxMFtISlTjSCWK"],
    },
    recaIBY8nq01IWPqM: {
      id: "recaIBY8nq01IWPqM",
      createdTime: "2018-10-04T02:45:10.000Z",
      name: "Aileen Gui",
      Positions: ["recWjLug9n4YvCuex"],
    },
    recPgjUGxFwXXOPoQ: {
      id: "recPgjUGxFwXXOPoQ",
      createdTime: "2018-10-04T02:45:10.000Z",
      name: "Nolan Pokpongkiat",
      Positions: ["recYGmt1dDyVGwtoO"],
    },
    recGX7657yT6j0Wby: {
      id: "recGX7657yT6j0Wby",
      createdTime: "2018-10-04T02:45:10.000Z",
      name: "Angie Liao",
      Positions: ["recqMnjyPBDVrrStY"],
    },
    recxAxAFK4ULZWdyr: {
      id: "recxAxAFK4ULZWdyr",
      createdTime: "2018-10-04T02:47:40.000Z",
      name: "Sean Zhu",
      Positions: ["recc9EiCmYyLyzfT0", "rechaiCjkXnAKYHEW"],
    },
    rec8Bd60VEzSli6cO: {
      id: "rec8Bd60VEzSli6cO",
      createdTime: "2018-10-04T02:47:47.000Z",
      name: "Richard Wu",
      Positions: ["recjT5aFHb5TsnMbd"],
    },
    recsIrG39H7oCENrA: {
      id: "recsIrG39H7oCENrA",
      createdTime: "2018-10-04T02:47:57.000Z",
      name: "Clara Park",
      Positions: ["reccrJOnJTsEoi3Ec"],
    },
  };
  Groups = {
    recV60tDu2ac60oV5: {
      id: "recV60tDu2ac60oV5",
      createdTime: "2018-09-28T02:24:41.000Z",
      positionIds: [
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
        "rechaiCjkXnAKYHEW",
      ],
      name: "AFX Board Summer 2017",
    },
    recAlXOGF37p5Qrtk: {
      id: "recAlXOGF37p5Qrtk",
      createdTime: "2018-09-28T02:24:41.000Z",
      positionIds: [
        "recc9EiCmYyLyzfT0",
        "recjT5aFHb5TsnMbd",
        "reccrJOnJTsEoi3Ec",
      ],
      name: "AFX Tech Fall 2018",
    },
  };
  PersonPositions = {
    recDnBRrmDOgpil2Z: {
      id: "recDnBRrmDOgpil2Z",
      createdTime: "2018-09-28T02:27:24.000Z",
      picture: [
        {
          id: "attNbkrNw30kwoDbU",
          url: "https://dl.airtable.com/H4SUfNJtTwWlTMZhlGDP_jeffrey.jpg",
          filename: "jeffrey.jpg",
          size: 168467,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/REtkkLeRsiOET7IyCjIw_small_jeffrey.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/8saKcjfRpGJ1JOSgrSTg_large_jeffrey.jpg",
              width: 512,
              height: 682,
            },
            full: {
              url:
                "https://dl.airtable.com/o4ebLeRBSlSR4QDCfboI_full_jeffrey.jpg",
              width: 1229,
              height: 1638,
            },
          },
        },
      ],
      person: ["recO6btsvRqZeuJjP"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Executive Director",
      displayName: "Jeffrey Wang - Executive Director",
    },
    recIZvsIUY7Lf3WCZ: {
      id: "recIZvsIUY7Lf3WCZ",
      createdTime: "2018-09-28T02:31:20.000Z",
      picture: [
        {
          id: "attnwZIYHM5m7K9p7",
          url: "https://dl.airtable.com/oCj70uE9SBmge1VkgJ4z_kirk.jpg",
          filename: "kirk.jpg",
          size: 217842,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/ihUvCoQcQ32coLBi3VsV_small_kirk.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/74kcM03DRjfbv6vEkN7P_large_kirk.jpg",
              width: 512,
              height: 683,
            },
            full: {
              url: "https://dl.airtable.com/lfTPfPPRh23RT58JUzdg_full_kirk.jpg",
              width: 1536,
              height: 2048,
            },
          },
        },
      ],
      person: ["rec4UfhaS3ZcsKOfU"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Vice Executive",
      displayName: "Kirk La - Vice Executive",
    },
    recHuonEXK26KidcQ: {
      id: "recHuonEXK26KidcQ",
      createdTime: "2018-09-29T19:04:52.000Z",
      picture: [
        {
          id: "attS8uZOWk1dQraAl",
          url: "https://dl.airtable.com/GfDcrp2eQ5mdp3OyfeqM_mei.jpg",
          filename: "mei.jpg",
          size: 462804,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://dl.airtable.com/YliUgHOFTrSG3e0y9SAw_small_mei.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url: "https://dl.airtable.com/6vBcjqR0TWusgoUGTzOO_large_mei.jpg",
              width: 512,
              height: 683,
            },
            full: {
              url: "https://dl.airtable.com/6BmvWivYTimRCnfhKKAB_full_mei.jpg",
              width: 1536,
              height: 2048,
            },
          },
        },
      ],
      person: ["reci7k75SMLdI0Wjh"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Executive Director",
      displayName: "Mei Mei - Executive Director",
    },
    reciXg7xWpz61Vwo6: {
      id: "reciXg7xWpz61Vwo6",
      createdTime: "2018-09-29T19:10:47.000Z",
      picture: [
        {
          id: "attv0ex4WxKem8rqD",
          url: "https://dl.airtable.com/pGIDYj2WQBu86FlgNA2S_stephanie.jpg",
          filename: "stephanie.jpg",
          size: 244741,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/RogOJFgUS5SSL1xhq0SB_small_stephanie.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/2Fy4wVK0QEumWU2CxuZT_large_stephanie.jpg",
              width: 512,
              height: 683,
            },
            full: {
              url:
                "https://dl.airtable.com/WQTQJj1GRQuhuBdCYqur_full_stephanie.jpg",
              width: 1536,
              height: 2048,
            },
          },
        },
      ],
      person: ["recdfUETv4veF8fUU"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Vice Executive",
      displayName: "Stephanie Kim - Vice Executive",
    },
    rec0tUiDaoQU785n1: {
      id: "rec0tUiDaoQU785n1",
      createdTime: "2018-09-29T19:11:01.000Z",
      picture: [
        {
          id: "attinQ09qDACCQtrO",
          url: "https://dl.airtable.com/y2uhYyGTVGpWr8po0WOQ_annie.jpg",
          filename: "annie.jpg",
          size: 626070,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/uhcZH2tQNeh4aL7zH5gQ_small_annie.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/t2wONZCpRqADkwCZzk23_large_annie.jpg",
              width: 512,
              height: 683,
            },
            full: {
              url:
                "https://dl.airtable.com/yYEd8WmQqHZF03NBPDtw_full_annie.jpg",
              width: 1536,
              height: 2048,
            },
          },
        },
      ],
      person: ["recK9H06reG3BErUU"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Events Chair",
      displayName: "Annie Wang - Events Chair",
    },
    recklML4eO8FNCc0Y: {
      id: "recklML4eO8FNCc0Y",
      createdTime: "2018-09-29T19:11:17.000Z",
      picture: [
        {
          id: "atthfYe98e1KWsss4",
          url: "https://dl.airtable.com/82Fec3JCS7q8VwogQkDA_helen.jpg",
          filename: "helen.jpg",
          size: 5268076,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/neO6SEpPSVqsWFVeY5Fn_small_helen.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/0ea4mNTfReyYcrR8UgPA_large_helen.jpg",
              width: 512,
              height: 683,
            },
            full: {
              url:
                "https://dl.airtable.com/LBP8XJCSga2qOx4Sxr8F_full_helen.jpg",
              width: 1536,
              height: 2048,
            },
          },
        },
      ],
      person: ["recCQaNAzI6bTDsQo"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Events Chair",
      displayName: "Mengyan Li - Events Chair",
    },
    recbxMFtISlTjSCWK: {
      id: "recbxMFtISlTjSCWK",
      createdTime: "2018-09-29T19:11:29.000Z",
      picture: [
        {
          id: "attXlm09JHmPIOePQ",
          url: "https://dl.airtable.com/GD51ArxxSly0TF4qAmsZ_chloe.jpg",
          filename: "chloe.jpg",
          size: 464316,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/ssuSL8s8RjK5DmoWrx8K_small_chloe.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/KKa67cc5TVqsZdgTu4O9_large_chloe.jpg",
              width: 512,
              height: 683,
            },
            full: {
              url:
                "https://dl.airtable.com/EGreLGnPSLDSw9NgE53a_full_chloe.jpg",
              width: 1536,
              height: 2048,
            },
          },
        },
      ],
      person: ["reclQY37yXdhBjDGH"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Events Chair",
      displayName: "Chloe Ding - Events Chair",
    },
    recWjLug9n4YvCuex: {
      id: "recWjLug9n4YvCuex",
      createdTime: "2018-09-29T19:11:38.000Z",
      picture: [
        {
          id: "attG5m1kQy4sYV4el",
          url: "https://dl.airtable.com/kvxE7YWiSaKOfkjkcBZJ_aileen.jpg",
          filename: "aileen.jpg",
          size: 400846,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/y8QCJklQeGloBZdWABIZ_small_aileen.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/KxR4onzyTDmlIkUGge1b_large_aileen.jpg",
              width: 512,
              height: 683,
            },
            full: {
              url:
                "https://dl.airtable.com/c2ocC38DTISMY0O222vI_full_aileen.jpg",
              width: 1536,
              height: 2048,
            },
          },
        },
      ],
      person: ["recaIBY8nq01IWPqM"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Events Chair",
      displayName: "Aileen Gui - Events Chair",
    },
    recYGmt1dDyVGwtoO: {
      id: "recYGmt1dDyVGwtoO",
      createdTime: "2018-09-29T19:11:56.000Z",
      picture: [
        {
          id: "attSZd79QwMVxgMhF",
          url: "https://dl.airtable.com/TTlOsNhfSwqN1MzT8WgX_nolan.jpg",
          filename: "nolan.jpg",
          size: 265066,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/RqwRExlASoq4JzYcBZid_small_nolan.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/CW5708tKSg2BHm54fK0e_large_nolan.jpg",
              width: 512,
              height: 683,
            },
            full: {
              url:
                "https://dl.airtable.com/22Jll7FQQVWUWztn96XA_full_nolan.jpg",
              width: 1536,
              height: 2048,
            },
          },
        },
      ],
      person: ["recPgjUGxFwXXOPoQ"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Finance Chair",
      displayName: "Nolan Pokpongkiat - Finance Chair",
    },
    recqMnjyPBDVrrStY: {
      id: "recqMnjyPBDVrrStY",
      createdTime: "2018-09-29T19:12:04.000Z",
      picture: [
        {
          id: "attKPTpxkWy0FqPId",
          url: "https://dl.airtable.com/7C61UgTMROCgEu9KoPi0_angie.jpg",
          filename: "angie.jpg",
          size: 231986,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/9m1RotTURBSFVgNw1rKU_small_angie.jpg",
              width: 27,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/5I3PZikPRo2dxH3L0Rqs_large_angie.jpg",
              width: 512,
              height: 683,
            },
            full: {
              url:
                "https://dl.airtable.com/TrKtF8lSRWgBFH7MrEI8_full_angie.jpg",
              width: 1536,
              height: 2048,
            },
          },
        },
      ],
      person: ["recGX7657yT6j0Wby"],
      group: ["recV60tDu2ac60oV5"],
      positionTitle: "Finance Chair",
      displayName: "Angie Liao - Finance Chair",
    },
    recc9EiCmYyLyzfT0: {
      id: "recc9EiCmYyLyzfT0",
      createdTime: "2018-10-04T02:47:30.000Z",
      person: ["recxAxAFK4ULZWdyr"],
      group: ["recAlXOGF37p5Qrtk"],
      positionTitle: "Director",
      displayName: "Sean Zhu - Director",
    },
    recjT5aFHb5TsnMbd: {
      id: "recjT5aFHb5TsnMbd",
      createdTime: "2018-10-04T02:48:05.000Z",
      picture: [
        {
          id: "att3QWpyQgbSb2VeK",
          url:
            "https://dl.airtable.com/iNqq60uVTzuiwYqREjPK_15123044_10207861575520722_4534538643409813160_o.jpg",
          filename: "15123044_10207861575520722_4534538643409813160_o.jpg",
          size: 102233,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/iGIcVTDbRPS6nLuDifzo_small_15123044_10207861575520722_4534538643409813160_o.jpg",
              width: 36,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/2EJhjfsR4eYxc1NO3FDg_large_15123044_10207861575520722_4534538643409813160_o.jpg",
              width: 512,
              height: 512,
            },
            full: {
              url:
                "https://dl.airtable.com/JiguceFaSNqE9J31hJXq_full_15123044_10207861575520722_4534538643409813160_o.jpg",
              width: 1367,
              height: 1367,
            },
          },
        },
      ],
      person: ["rec8Bd60VEzSli6cO"],
      group: ["recAlXOGF37p5Qrtk"],
      positionTitle: "Director",
      displayName: "Richard Wu - Director",
    },
    reccrJOnJTsEoi3Ec: {
      id: "reccrJOnJTsEoi3Ec",
      createdTime: "2018-10-04T02:48:26.000Z",
      person: ["recsIrG39H7oCENrA"],
      group: ["recAlXOGF37p5Qrtk"],
      positionTitle: "Director",
      displayName: "Clara Park - Director",
    },
    rechaiCjkXnAKYHEW: {
      id: "rechaiCjkXnAKYHEW",
      createdTime: "2018-10-13T19:46:16.000Z",
      displayName: "Sean Zhu - Boba Runner",
      group: ["recV60tDu2ac60oV5"],
      person: ["recxAxAFK4ULZWdyr"],
      positionTitle: "Boba Runner",
      picture: [
        {
          id: "attmM5tq0AvXgombv",
          url:
            "https://dl.airtable.com/CT4r5iXeS56se4iF6yq3_150px-Bubble_Tea.png",
          filename: "150px-Bubble_Tea.png",
          size: 49433,
          type: "image/png",
          thumbnails: {
            small: {
              url:
                "https://dl.airtable.com/wEaUSIYoSx6XjilFjaBK_small_150px-Bubble_Tea.png",
              width: 19,
              height: 36,
            },
            large: {
              url:
                "https://dl.airtable.com/BMIbANPOS368L9gN6Xi5_large_150px-Bubble_Tea.png",
              width: 150,
              height: 281,
            },
            full: {
              url:
                "https://dl.airtable.com/Gl37AXwuTcueJV2inxEs_full_150px-Bubble_Tea.png",
              width: 150,
              height: 281,
            },
          },
        },
      ],
    },
  };
}

export default AFX;
