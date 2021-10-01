import clsx from "clsx";

export const productData = {
  columns: [
    { field: "id", headerName: "Id", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "codes",
      headerName: "Codes",
      width: 150,
      editable: true,
    },
    {
      field: "size",
      headerName: "Size",
      type: "number",
      width: 110,
      editable: true,
      cellClassName: (params) =>
        clsx({
          "small-size": params.value < 20,
          "big-size": params.value >= 20,
        }),
    },
    {
      field: "unitsPerCase",
      headerName: "Units Per Case",
      type: "number",
      width: 110,
      editable: true,
    },
  ],

  rows: [
    {
      id: "1",
      name: "eel",
      codes: "086623 | 342527",
      size: "52",
      unitsPerCase: "14",
    },
    {
      id: "2",
      name: "bruschetta",
      codes: "658256 | 115254",
      size: "53",
      unitsPerCase: "30",
    },
    {
      id: "3",
      name: "tarragon",
      codes: "696370 | 305150",
      size: "54",
      unitsPerCase: "64",
    },
    {
      id: "4",
      name: "squid",
      codes: "373605 | 744880",
      size: "55",
      unitsPerCase: "84",
    },
    {
      id: "5",
      name: "anchovy paste",
      codes: "536409 | 103341",
      size: "56",
      unitsPerCase: "120",
    },
    {
      id: "6",
      name: "corn",
      codes: "574223 | 811141",
      size: "57",
      unitsPerCase: "180",
    },
    {
      id: "7",
      name: "horseradish",
      codes: "129673 | 769655",
      size: "58",
      unitsPerCase: "4",
    },
    {
      id: "8",
      name: "onion powder",
      codes: "924697 | 220881",
      size: "59",
      unitsPerCase: "11",
    },
    {
      id: "9",
      name: "truffles",
      codes: "500780 | 154047",
      size: "60",
      unitsPerCase: "109",
    },
    {
      id: "10",
      name: "grouper",
      codes: "137078 | 787389",
      size: "61",
      unitsPerCase: "77",
    },
    {
      id: "11",
      name: "balsamic vinegar",
      codes: "983207 | 652315",
      size: "62",
      unitsPerCase: "11",
    },
    {
      id: "12",
      name: "kiwi",
      codes: "601607 | 192058",
      size: "63",
      unitsPerCase: "149",
    },
    {
      id: "13",
      name: "flax seed",
      codes: "218323 | 011093",
      size: "64",
      unitsPerCase: "201",
    },
    {
      id: "14",
      name: "split peas",
      codes: "658668 | 733246",
      size: "65",
      unitsPerCase: "144",
    },
    {
      id: "15",
      name: "pea beans",
      codes: "187315 | 242954",
      size: "66",
      unitsPerCase: "144",
    },
    {
      id: "16",
      name: "tuna",
      codes: "177351 | 180301",
      size: "67",
      unitsPerCase: "144",
    },
    {
      id: "17",
      name: "cream cheese",
      codes: "709791 | 323303",
      size: "68",
      unitsPerCase: "144",
    },
    {
      id: "18",
      name: "rice wine",
      codes: "279432 | 487012",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "19",
      name: "marshmallows",
      codes: "720207 | 606059",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "20",
      name: "beans",
      codes: "315413 | 499465",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "21",
      name: "raw sugar",
      codes: "102112 | 345315",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "22",
      name: "Kahlua",
      codes: "011135 | 229013",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "23",
      name: "salt",
      codes: "848437 | 460468",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "24",
      name: "barley sugar",
      codes: "279405 | 737996",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "25",
      name: "tomato juice",
      codes: "731108 | 216501",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "26",
      name: "rosemary",
      codes: "729073 | 052288",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "27",
      name: "green onions",
      codes: "309166 | 622415",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "28",
      name: "ancho chile peppers",
      codes: "998244 | 671840",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "29",
      name: "blue cheese",
      codes: "206017 | 693878",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "30",
      name: "macaroni",
      codes: "192377 | 478991",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "31",
      name: "amaretto",
      codes: "856405 | 152989",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "32",
      name: "panko bread crumbs",
      codes: "795103 | 880741",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "33",
      name: "sausages",
      codes: "233437 | 899165",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "34",
      name: "coriander",
      codes: "454573 | 813846",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "35",
      name: "mesclun greens",
      codes: "745154 | 947268",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "36",
      name: "chambord",
      codes: "529888 | 622692",
      size: "10",
      unitsPerCase: "144",
    },
    {
      id: "37",
      name: "mustard seeds",
      codes: "757371 | 985467",
      size: "10",
      unitsPerCase: "144",
    },
  ],
};