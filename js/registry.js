function cleanUpBugs(){
  var errors = document.getElementsByClassName("text-danger");
  for (var k = 0; k < errors.length; k++){
    errors[k].innerHTML = "";
  }
}

function validate(form) {
  cleanUpBugs();

  var allOk = true;

  // Full Name
  if (form.name.value.trim().length == 0){
    document.getElementById("nameError").innerText = "Campo obligatorio";
    form.name.focus();
    allOk = false;
  }
  
  // Email
  if (form.email.value.length == 0){
    document.getElementById("emailError").innerText = "Campo obligatorio";
    form.email.focus();
    allOk = false;
  }

  var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!expression.test(form.email.value)){
    document.getElementById("emailError").innerText = "Campo inválido";
    form.email.focus();
    allOk = false;
  }

  // Password
  if (form.password.value.length == 0){
    document.getElementById("passwordError").innerText = "Campo obligatorio";
    form.password.focus();
    allOk = false;
  }

  if (form.password.value.length >= 1 && form.password.value.length <= 6){
    document.getElementById("passwordError").innerText = "La contraseña debe tener al menos 7 caracteres";
    form.password.focus();
    allOk = false;
  }

  // Confirmation
  if (form.confirmation.value.length == 0){
    document.getElementById("confirmationError").innerText = "Campo Obligatorio";
    form.confirmation.focus();
    allOk = false;
  }

  if (form.password.value != form.confirmation.value){
    document.getElementById("confirmationError").innerText = "La contraseña debe coincidir";
    form.confirmation.focus();
    allOk = false;
  }

  // User Type
  if (form.type.value == -1){
    document.getElementById("typeError").innerText = "Campo Obligatorio";
    form.type.focus();
    allOk = false;
  };
  
  // Terms
  if (!form.terms.checked){
    document.getElementById("termsError").innerText = "Campo Obligatorio";
    form.terms.focus();
    allOk = false;
  };

  return allOk;
}
