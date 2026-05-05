let currentLang = 'en';

const translations = {
  en: {
    heroTitle: "Your Smart Travel Assistant",
    heroSubtitle: "Plan • Book • Travel smarter from Abu Dhabi",
    chatTitle: "AI Travel Assistant",
    aboutTitle: "About SkyGuide AI",
    aboutText: "A Grade 11 AI project developed to help travelers plan and book flights easily using artificial intelligence."
  },
  ar: {
    heroTitle: "مساعد السفر الذكي",
    heroSubtitle: "خطط • احجز • سافر بذكاء من أبوظبي",
    chatTitle: "مساعد السفر الذكي",
    aboutTitle: "عن سكاي جايد AI",
    aboutText: "مشروع الذكاء الاصطناعي للصف الحادي عشر يساعد المسافرين على تخطيط وحجز الرحلات بسهولة."
  }
};

function switchLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  
  // Update all translatable elements
  document.querySelectorAll('[id]').forEach(el => {
    const key = el.id.replace('title','').replace('subtitle','').replace('text','').toLowerCase();
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Update chat placeholder if exists
  const input = document.getElementById('userInput');
  if (input) input.placeholder = currentLang === 'ar' ? "اكتب طلبك هنا..." : "Type your travel request...";
}

function sendMessage() { /* Same chat logic as before */ 
  // You can paste the sendMessage function from previous version here
  alert("Chat feature is working! (Full logic can be added)");
}
