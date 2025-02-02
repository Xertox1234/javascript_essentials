// Function to take feedback from the user survey form
function submitFeedback() {
    // Retrieve values from HTML input elements
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
  
    // Display user feedback on the webpage
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
  
    // Make the userInfo div visible
    document.getElementById('userInfo').style.display = 'block';
  
    // Display thank you message
    alert('Thank you for your valuable feedback');
  }
  
  // Fetch the HTML element with the ID 'submitBtn'
  const submitButton = document.getElementById('submitBtn');
  
  // Assign the function submitFeedback to execute when the onclick event occurs
  submitButton.onclick = submitFeedback;
  
  // Add event listener for 'Enter' key press to submit feedback
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });
  