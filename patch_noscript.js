import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// Replace font-weight: 700 with 800
html = html.replace(/font-weight: 700;/g, 'font-weight: 800;');

// Update the features grid inside noscript
const oldFeaturesGrid = `<div class="features-grid">
          <div class="feature-card">
            <h3>Post Job for FREE</h3>
            <p>Eligible for any of these six job types: Freelance, Internship, Part-time, Volunteer, High-Pay Jobs, and Singapore Jobs.</p>
          </div>
          <div class="feature-card">
            <h3>Chat Directly with Jobseeker</h3>
            <p>Message candidates in-app and use templates to make hiring quick and easy.</p>
          </div>
          <div class="feature-card">
            <h3>Over 5 million candidate profiles</h3>
            <p>Your next great talent is already here. Just waiting to be found.</p>
          </div>
        </div>`;

const newFeaturesGrid = `<div class="features-grid">
          <div class="feature-card">
            <img src="https://www.maukerja.my/mkt/images/mk/reason_get3x.png" alt="Reach Candidates" style="width: 48px; height: 48px; margin-bottom: 16px;" />
            <h3>Reach 5 Million+ Candidates in One Click</h3>
            <p>Your job ad goes live across Maukerja, Ricebowl, and partner platforms. One posting, no reposting, no extra cost.</p>
          </div>
          <div class="feature-card">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-937cc484-7a5b-4825-9127-edc68a91d955.png" alt="Chat With Applicants" style="width: 48px; height: 48px; margin-bottom: 16px;" />
            <h3>Chat With Applicants Instantly</h3>
            <p>Message candidates the moment they apply on AJobThing Chat. Reply faster with templates and AI quick replies, without sharing your personal WhatsApp.</p>
          </div>
          <div class="feature-card">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-7e8c886c-ad7d-42f2-be36-64abdb2b1a47.png" alt="Post Job for FREE" style="width: 48px; height: 48px; margin-bottom: 16px;" />
            <h3>Post Job for FREE</h3>
            <p>Post freelance, part-time, internship, volunteer, high-pay, and Singapore jobs for free. Pay only when you need more.</p>
          </div>
          <div class="feature-card">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ricebowl/images/marketing-campaign/image-8edc4ee1-d023-4cc2-ad5d-e40542f77ebd.png" alt="Screening Is Not Your Job" style="width: 48px; height: 48px; margin-bottom: 16px;" />
            <h3>Screening Is Not Your Job Anymore</h3>
            <p>Our AI filters and contacts only qualified, interested candidates. Saving you hours of screening. You focus on interviews and hiring the right person.</p>
          </div>
        </div>`;

html = html.replace(oldFeaturesGrid, newFeaturesGrid);
fs.writeFileSync('index.html', html);
