const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

function timeAgo(timeStamp) {
  const diff = Date.now() - new Date(timeStamp).getTime();

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if(diff < hour) {
    return `${Math.floor(diff / minute)}m ago`
  }

  if(diff < day) {
    return `${Math.floor(diff / hour)}h ago`
  }

  return `${Math.floor(diff / day)}d ago`
  
}

function viewCount(number) {
  if(number >= 1000) {
    return `${Math.floor(number / 1000)}k`
  }

  return number
}

function forumCategory(categoryId) {
  const {category, className} = allCategories[categoryId] ?? {category: "General", className: "general"};

  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${categoryId}">${category}</a>`
}

function avatars(posters, users) {
  
  return posters.map((poster) => {
    const {avatar_template, name} = users.find((user) => user.id === poster.user_id);
    let avatarTemplate = avatar_template.replace("{size}", "30");

    if(avatarTemplate.startsWith("/")) {
      avatarTemplate = avatarUrl + avatarTemplate;
    }

    return `<img alt="${name}" src="${avatarTemplate}">`
  }).join("")
}

function showLatestPosts(data) {
  const users = data.users;
  const topics = data.topic_list.topics;

  const postsContainer = document.querySelector("#posts-container");

  postsContainer.innerHTML = topics.map(topic => {
    return `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">${topic.title}</a>
          ${forumCategory(topic.category_id)}
        </td>
        <td>
          <div class="avatar-container">
            ${avatars(topic.posters, users)}
          </div>
        </td>
        <td>${topic.posts_count - 1}</td>
        <td>${viewCount(topic.views)}</td>
        <td>${timeAgo(topic.bumped_at)}</td>
      </tr>
    `;
  }).join("");
}

async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
