function showFormData() {
    const form = document.getElementById('travelForm');
    const formData = new FormData(form);
  
    let alertText = 'Form Data:\n';
    formData.forEach((value, key) => {
      alertText += `${key}: ${value}\n`;
    });
  
    alert(alertText);
}