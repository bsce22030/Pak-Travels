// Hypothetical data for each section
const breakfastOptions = ["Hotel Breakfast", "Local Cafe", "Street Food", "I won't be doing that"];
const lunchOptions = ["Traditional Restaurant", "Picnic Lunch", "Fast Food", "I won't be doing that"];
const dinnerOptions = ["Fine Dining", "Hotel Dinner", "BBQ", "I won't be doing that"];
const activities = ["Hiking", "Kayaking", "Museum Visit", "Guided Tour", "I won't be doing that"];
const sleepingPlaces = ["Hotel", "Guest House", "Camping", "I won't be doing that"];

let tripPlan = {
    destination: '',
    people: 0,
    days: 0,
    itinerary: []
};

function showStep2() {
    const destinationInput = document.getElementById("destination").value.trim();
    if (destinationInput) {
        tripPlan.destination = destinationInput;
        document.getElementById("step-1").classList.add('d-none');
        document.getElementById("step-2").classList.remove('d-none');
    } else {
        alert("Please enter a destination.");
    }
}

function showStep3() {
    const peopleInput = document.getElementById("people").value;
    const daysInput = document.getElementById("days").value;

    if (peopleInput && daysInput) {
        tripPlan.people = peopleInput;
        tripPlan.days = daysInput;
        document.getElementById("step-2").classList.add('d-none');
        document.getElementById("step-3").classList.remove('d-none');
        generateItineraryPlanner(tripPlan.days);
    } else {
        alert("Please fill all fields.");
    }
}

function generateItineraryPlanner(days) {
    const plannerDiv = document.getElementById('itinerary-planner');
    plannerDiv.innerHTML = ''; // Clear previous content

    for (let i = 1; i <= days; i++) {
        tripPlan.itinerary.push({ // Initialize each day's itinerary
            breakfast: '',
            lunch: '',
            dinner: '',
            activity: '',
            sleeping: ''
        });

        plannerDiv.innerHTML += `
            <div class="mt-4">
                <h5>Day ${i} Itinerary</h5>
                ${generateSelect('Breakfast', breakfastOptions, `breakfast-day-${i - 1}`)}
                ${generateSelect('Lunch', lunchOptions, `lunch-day-${i - 1}`)}
                ${generateSelect('Dinner', dinnerOptions, `dinner-day-${i - 1}`)}
                ${generateSelect('Activities', activities, `activity-day-${i - 1}`)}
                ${generateSelect('Sleeping Place', sleepingPlaces, `sleeping-day-${i - 1}`)}
            </div>
        `;
    }
}

function generateSelect(label, options, id) {
    let selectHTML = `<label>${label}</label><select class="form-control mb-3" id="${id}">`;
    options.forEach(option => {
        selectHTML += `<option>${option}</option>`;
    });
    selectHTML += `</select>`;
    return selectHTML;
}

function finalizeBooking() {
    const days = tripPlan.days;

    // Collect itinerary data from selects
    for (let i = 0; i < days; i++) {
        tripPlan.itinerary[i].breakfast = document.getElementById(`breakfast-day-${i}`).value;
        tripPlan.itinerary[i].lunch = document.getElementById(`lunch-day-${i}`).value;
        tripPlan.itinerary[i].dinner = document.getElementById(`dinner-day-${i}`).value;
        tripPlan.itinerary[i].activity = document.getElementById(`activity-day-${i}`).value;
        tripPlan.itinerary[i].sleeping = document.getElementById(`sleeping-day-${i}`).value;
    }

    document.getElementById("step-3").classList.add('d-none');
    document.getElementById("booking-summary").classList.remove('d-none');

    displaySummary();
}

function displaySummary() {
    const summary = document.getElementById("summary-details");
    summary.innerHTML = `<h4>Your Trip Plan to ${tripPlan.destination}</h4>
                         <p>Number of People: ${tripPlan.people}</p>
                         <p>Total Days: ${tripPlan.days}</p>
                         <h5>Planned Itinerary:</h5>`;

    tripPlan.itinerary.forEach((day, index) => {
        summary.innerHTML += `
            <div class="mt-3">
                <h6>Day ${index + 1}:</h6>
                <p><strong>Breakfast:</strong> ${day.breakfast}</p>
                <p><strong>Lunch:</strong> ${day.lunch}</p>
                <p><strong>Dinner:</strong> ${day.dinner}</p>
                <p><strong>Activity:</strong> ${day.activity}</p>
                <p><strong>Sleeping Place:</strong> ${day.sleeping}</p>
            </div>
        `;
    });

    summary.innerHTML += `<p>Thank you for booking with PakTravels. Your trip is confirmed!</p>`;
}
