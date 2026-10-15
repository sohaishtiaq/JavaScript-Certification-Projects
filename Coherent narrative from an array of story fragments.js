const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];


function compactFragments(fragments) {
  const compacted = [];

  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] !== undefined) {
      compacted.push(fragments[i]);
    }
  }

  if (compacted.length < fragments.length) {
    console.log("[COMPACTED] Removed undefined fragments.");
  }

  return compacted;
}

const compactedShuffledFragments =
  compactFragments(shuffledFragments);


function sortFragments(fragments) {
  const sorted = [];

  for (let i = 0; i < fragments.length; i++) {
    const current = fragments[i];
    let j = sorted.length - 1;

    while (j >= 0 && sorted[j].id > current.id) {
      sorted[j + 1] = sorted[j];
      j--;
    }

    sorted[j + 1] = current;
  }

  return sorted;
}

const sortedFragments = sortFragments(compactedShuffledFragments);


function dedupeFragments(fragments) {
  const deduped = [];

  for (let i = 0; i < fragments.length; i++) {
    if (
      i === 0 ||
      fragments[i].id !== fragments[i - 1].id
    ) {
      deduped.push(fragments[i]);
    } else if (
      fragments[i].id === fragments[i - 1].id &&
      (i === 1 || fragments[i].id !== fragments[i - 2].id)
    ) {
      console.log(
        `[DEDUPED] Removed duplicate fragment with id ${fragments[i].id}.`
      );
    }
  }

  return deduped;
}

const dedupedFragments = dedupeFragments(sortedFragments);


function fillMissingFragments(fragments) {
  const filled = [];

  if (fragments.length === 0) {
    return filled;
  }

  let expectedId = fragments[0].id;

  for (let i = 0; i < fragments.length; i++) {
    while (expectedId < fragments[i].id) {
      filled.push({
        id: expectedId,
        text: "[...]"
      });

      console.log(
        `[FILLED] Added placeholder for id ${expectedId}.`
      );

      expectedId++;
    }

    filled.push(fragments[i]);
    expectedId = fragments[i].id + 1;
  }

  return filled;
}

const filledFragments = fillMissingFragments(dedupedFragments);


function assembleStory(fragments) {
  let story = "";

  for (let i = 0; i < fragments.length; i++) {
    if (i > 0) {
      story += "\n";
    }

    story += fragments[i].text;
  }

  return story;
}

console.log(assembleStory(filledFragments));
