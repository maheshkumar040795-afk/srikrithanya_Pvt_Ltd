// Srikrithanya Private Limited — shared site behaviour

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }
});

const PRIMARY_PHONE = '919344643061';   // 93446 43061

function sendEnquiry(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('enquiryName')?.value.trim();
  const phone = document.getElementById('enquiryPhone')?.value.trim();
  const service = document.getElementById('enquiryService')?.value;
  const msg = document.getElementById('enquiryMsg')?.value.trim();

  if (!name || !phone) {
    alert('Please fill in your name and phone number.');
    return false;
  }

  const text = `Hello Srikrithanya Private Limited,\n\nI'm ${name}.\nPhone: ${phone}\nInterested in: ${service || 'General Enquiry'}\nMessage: ${msg || 'Please share more details about your services.'}`;
  window.open(`https://wa.me/${PRIMARY_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  return false;
}
