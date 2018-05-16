// `by`—The username of the item's author.
// `descendants`—In the case of stories or polls, the total comment count.
// `id`—The item's unique id.
// `score`—The story's score, or the votes for a pollopt.
// `time`—Creation date of the item, in Unix Time (seconds).
// `title`—The title of the story, poll or job.
// `type`—The type of item. One of "job", "story", "comment", "poll", or "pollopt".
// `url`—The URL of the story.


// helpers
const baseUrl = 'https://hacker-news.firebaseio.com';
const fetchJson = url => fetch(url).then(res => res.json());
const first10 = arr => arr.slice(0, 10);

// Items Ids Endpoint https://hacker-news.firebaseio.com/v0/topstories.json
const getItemsIds = () => fetchJson(`${baseUrl}/v0/topstories.json`).then(stories => first10(stories))

// Item endpoint https://hacker-news.firebaseio.com/v0/item/8863.json
const getItem = (id) => fetchJson(`${baseUrl}/v0/item/${id}.json`);

export const api = {
    getItemsIds,
    getItem,
}