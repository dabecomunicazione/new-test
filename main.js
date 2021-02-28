const btn = document.querySelector('.btn');
const accordion = document.querySelector('.accordion-title');

btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .darktheme class to the body
  document.body.classList.toggle('darkTheme');

  if(document.body.classList.value =="lightTheme darkTheme"){
    document.getElementById('btn_changeTheme').innerHTML = "Dark theme";
  } else {
    document.getElementById('btn_changeTheme').innerHTML = "Light theme";
  }
})

accordion.click().addClass('is-open'); 
