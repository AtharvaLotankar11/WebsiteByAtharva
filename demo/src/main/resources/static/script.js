const reservationForm = document.getElementById('reservation');

reservationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Basic form validation (you can enhance this)
  const departure = document.getElementById('departure').value;
  const arrival = document.getElementById('arrival').value;
  const departureDate = document.getElementById('departure_date').value;
  const passengers = document.getElementById('passengers').value;

  if (!departure || !arrival || !departureDate || !passengers) {
    alert('Please fill in all required fields.');
    return;
  }

  // Form data is valid, handle submission
  const formData = {
    departure: departure,
    arrival: arrival,
    departureDate: departureDate,
    passengers: passengers
  };

  // Here, you would typically send the formData to a backend server using AJAX or fetch API
  // For demonstration, we'll just log the data to the console:
  console.log(formData);

  // You can also display a success message or redirect the user to a confirmation page
  alert('Form submitted successfully!');
});
