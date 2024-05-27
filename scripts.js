const assignments = [
    {
        title: "Finance Tracking Application",
        description: "Manage Income, Expense and see history using our app.",
        previewLink: "#",
        views: "1.2K"
    },
    {
        title: "Text Editor",
        description: "Learned making text bold, italic, changing font family using JS Dom.",
        previewLink: "#",
        views: "1.2K"
    },
    {
        title: "Todo List",
        description: "Made Add, update, delete todo using JS Dom.",
        previewLink: "#",
        views: "1.2K"
    },
    // Add more assignments here
];

function createAssignmentCard(assignment) {
    const assignmentDiv = document.createElement('div');
    assignmentDiv.className = 'assignment';

    const title = document.createElement('h2');
    title.textContent = assignment.title;
    assignmentDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = assignment.description;
    assignmentDiv.appendChild(description);

    const previewLink = document.createElement('a');
    previewLink.href = assignment.previewLink;
    previewLink.textContent = 'See Preview';
    assignmentDiv.appendChild(previewLink);

    const views = document.createElement('span');
    views.className = 'views';
    views.textContent = `${assignment.views} views`;
    assignmentDiv.appendChild(views);

    return assignmentDiv;
}

const assignmentsContainer = document.getElementById('assignments-container');

for (let i = 0; i < assignments.length; i++) {
    const assignment = assignments[i];
    const assignmentCard = createAssignmentCard(assignment);
    assignmentsContainer.appendChild(assignmentCard);
}
