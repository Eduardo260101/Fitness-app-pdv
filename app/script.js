const form = document.getElementById('workout-form');
const workoutList = document.getElementById('workout-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const activity = document.getElementById('activity').value;
    const duration = document.getElementById('duration').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${activity} - ${duration} minutes`;

    // Add to list
    workoutList.appendChild(li);

    // Clear the form
    form.reset();
    console.log `${activity} - ${duration} minutes`;
});
