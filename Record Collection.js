function updateRecords(records, id, prop, value) {

  if (value === "") {
    delete records[id][prop];

  } else if (prop === "tracks") {

    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }

    records[id].tracks.push(value);

  } else {
    records[id][prop] = value;
  }

  return records;
}
