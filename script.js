// Array containing specific themed images matching your interests
const hobbyImages = [
  "https://picsum.photos/id/0/600/400",    // 1. AI & Coding (A developer working at a laptop)
  "https://picsum.photos/id/964/600/400",  // 2. Boundless Universe (Deep nebula space clouds)
  "https://picsum.photos/id/903/600/400"   // 3. Astrophysics (Starry night sky / cosmic observation)
];

// Local index tracking counter state
let currentIndex = 0;

// Grab layout elements from the HTML Document Object Model (DOM)
const galleryImg = document.getElementById('gallery-img');
const nextBtn = document.getElementById('next-btn');

// Click listener logic processing
nextBtn.addEventListener('click', () => {
  // Safely increment current pointer target position
  currentIndex++;

  // CRUCIAL BOUNDS CHECK: Prevents the out-of-bounds array rendering error
  if (currentIndex >= hobbyImages.length) {
    currentIndex = 0; // Cycles execution back cleanly onto the starting index
  }

  // Sync updated array asset destination onto the document element frame
  galleryImg.src = hobbyImages[currentIndex];
  
  // Update alt attribute dynamically for perfect accessibility
  if (currentIndex === 0) galleryImg.alt = "AI and Coding";
  else if (currentIndex === 1) galleryImg.alt = "Boundless Universe";
  else if (currentIndex === 2) galleryImg.alt = "Astrophysics";
  
  // Verification printout via browser DevTools inspection console pane
  console.log(`[Gallery State Tracker]: Render target advanced to index position: ${currentIndex}`);
});
