const projectStatus = {
  PENDING: {
    description: "Pending Execution"
  },
  SUCCESS: {
    description: "Executed Successfully"
  },
  FAILURE: {
    description: "Execution Failed"
  }
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }

  unpin(idea) {
    this.ideas = this.ideas.filter(
      (projectIdea) => projectIdea !== idea
    );
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    if (this.ideas.length === 0) {
      return `${this.title} has 0 idea(s)\n`;
    }

    return `${this.title} has ${this.ideas.length} idea(s)\n${this.ideas
      .map(
        (idea) =>
          `${idea.title} (${idea.status.description}) - ${idea.description}`
      )
      .join("\n")}\n`;
  }
}
