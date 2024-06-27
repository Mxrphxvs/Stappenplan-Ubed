document.addEventListener('DOMContentLoaded', function () {
    const resultList = document.getElementById('result-list');
    const formData = JSON.parse(localStorage.getItem('formData'));
  
    // Display the form data in the list
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${formData[key]}`;
        resultList.appendChild(li);
      }
    }
  
    // Function to find the best match
    function findBestMatch(formData, mattressData) {
      let bestMatch = null;
      let bestScore = 0;
  
      mattressData.forEach(mattress => {
        let score = 0;
  
        if (mattress.type === formData['bed-type']) {
          score++;
        }
        if (mattress.size === formData['bed-size']) {
          score++;
        }
        if (mattress.firmness === formData['mattress-firmness']) {
          score++;
        }
  
        if (score > bestScore) {
          bestMatch = mattress;
          bestScore = score;
        }
      });
  
      return bestMatch;
    }
  
    // Find the best mattress match
    const bestMatch = findBestMatch(formData, mattressData);
  
    // Display the best match if found
    if (bestMatch) {
      document.getElementById('mattress-image').src = bestMatch.image;
      document.getElementById('mattress-heading').textContent = bestMatch.heading;
      document.getElementById('mattress-description').textContent = bestMatch.description;
      document.getElementById('mattress-url').href = bestMatch.url;
    } else {
      document.getElementById('best-mattress').textContent = 'No matching mattress found.';
    }
  });
  