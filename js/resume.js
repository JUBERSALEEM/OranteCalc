/* ============================================
   RESUME BUILDER PRO - MAIN JAVASCRIPT
   ============================================ */

// Variables
let currentTemplate = 'ats';
let currentCountry = 'ae';
let currentLang = 'en';
let expCount = 0;
let eduCount = 0;
let certCount = 0;
let projCount = 0;
let refCount = 0;

// Country Data
const countryData = {
    ae: { name: 'UAE', phoneFormat: '+971 XXX XXX XXXX', dateFormat: 'dd/MM/yyyy' },
    sa: { name: 'Saudi Arabia', phoneFormat: '+966 XXX XXX XXXX', dateFormat: 'dd/MM/yyyy' },
    in: { name: 'India', phoneFormat: '+91 XXXX XXX XXX', dateFormat: 'dd/MM/yyyy' },
    us: { name: 'USA', phoneFormat: '+1 (XXX) XXX-XXXX', dateFormat: 'MM/dd/yyyy' },
    uk: { name: 'UK', phoneFormat: '+44 XXXX XXXXXX', dateFormat: 'dd/MM/yyyy' }
};

// Template Select
function selectTemplate(template) {
    currentTemplate = template;
    document.querySelectorAll('.rb-template').forEach(t => t.classList.remove('active'));
    event.target.closest('.rb-template').classList.add('active');
    document.getElementById('previewFrame').src = 'pages/resume/templates/' + template + '.html';
    updatePreview();
}

// Country Change
function changeCountry(country) {
    currentCountry = country;
    updatePreview();
}

// Language Change
function changeLanguage(lang) {
    currentLang = lang;
    updatePreview();
}

// Live Preview Update
function updatePreview() {
    const data = getFormData();
    // Send data to preview iframe
    const frame = document.getElementById('previewFrame');
    if (frame.contentWindow) {
        frame.contentWindow.postMessage(data, '*');
    }
}

// Get Form Data
function getFormData() {
    return {
        fullName: document.getElementById('fullName')?.value || '',
        jobTitle: document.getElementById('jobTitle')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        whatsapp: document.getElementById('whatsapp')?.value || '',
        nationality: document.getElementById('nationality')?.value || '',
        address: document.getElementById('address')?.value || '',
        dob: document.getElementById('dob')?.value || '',
        linkedin: document.getElementById('linkedin')?.value || '',
        portfolio: document.getElementById('portfolio')?.value || '',
        summary: document.getElementById('summary')?.value || '',
        techSkills: document.getElementById('techSkills')?.value || '',
        softSkills: document.getElementById('softSkills')?.value || '',
        softwareSkills: document.getElementById('softwareSkills')?.value || '',
        country: currentCountry,
        template: currentTemplate,
        language: currentLang
    };
}

// Add Experience
function addExperience() {
    expCount++;
    const html = `
        <div class="rb-item" id="exp_${expCount}">
            <div class="rb-item-header">
                <span>Experience ${expCount}</span>
                <i class="fa-solid fa-trash rb-item-remove" onclick="removeItem('exp_${expCount}')"></i>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>Company Name</label>
                    <input type="text" class="rb-input" placeholder="Company Name">
                </div>
                <div class="rb-group">
                    <label>Job Title</label>
                    <input type="text" class="rb-input" placeholder="Your Position">
                </div>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>Location</label>
                    <input type="text" class="rb-input" placeholder="City, Country">
                </div>
                <div class="rb-group">
                    <label>Start Date</label>
                    <input type="date" class="rb-input">
                </div>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>End Date</label>
                    <input type="date" class="rb-input">
                </div>
                <div class="rb-checkbox-label">
                    <input type="checkbox" id="exp_current_${expCount}">
                    <span>Currently Working</span>
                </div>
            </div>
            <div class="rb-group">
                <label>Job Description</label>
                <textarea class="rb-textarea" placeholder="Describe your responsibilities and achievements..."></textarea>
            </div>
        </div>
    `;
    document.getElementById('experienceList').insertAdjacentHTML('beforeend', html);
}

// Add Education
function addEducation() {
    eduCount++;
    const html = `
        <div class="rb-item" id="edu_${eduCount}">
            <div class="rb-item-header">
                <span>Education ${eduCount}</span>
                <i class="fa-solid fa-trash rb-item-remove" onclick="removeItem('edu_${eduCount}')"></i>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>School/College</label>
                    <input type="text" class="rb-input" placeholder="Institution Name">
                </div>
                <div class="rb-group">
                    <label>Degree</label>
                    <input type="text" class="rb-input" placeholder="e.g., Bachelor's in Engineering">
                </div>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>Field of Study</label>
                    <input type="text" class="rb-input" placeholder="e.g., Civil Engineering">
                </div>
                <div class="rb-group">
                    <label>Grade/GPA</label>
                    <input type="text" class="rb-input" placeholder="e.g., 3.8/4.0">
                </div>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>Start Date</label>
                    <input type="date" class="rb-input">
                </div>
                <div class="rb-group">
                    <label>End Date</label>
                    <input type="date" class="rb-input">
                </div>
            </div>
        </div>
    `;
    document.getElementById('educationList').insertAdjacentHTML('beforeend', html);
}

// Add Certification
function addCertification() {
    certCount++;
    const html = `
        <div class="rb-item" id="cert_${certCount}">
            <div class="rb-item-header">
                <span>Certification ${certCount}</span>
                <i class="fa-solid fa-trash rb-item-remove" onclick="removeItem('cert_${certCount}')"></i>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>Certificate Name</label>
                    <input type="text" class="rb-input" placeholder="Certificate Title">
                </div>
                <div class="rb-group">
                    <label>Issuing Organization</label>
                    <input type="text" class="rb-input" placeholder="Organization Name">
                </div>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>Issue Date</label>
                    <input type="date" class="rb-input">
                </div>
                <div class="rb-group">
                    <label>Credential ID</label>
                    <input type="text" class="rb-input" placeholder="Credential ID">
                </div>
            </div>
        </div>
    `;
    document.getElementById('certificationList').insertAdjacentHTML('beforeend', html);
}

// Add Project
function addProject() {
    projCount++;
    const html = `
        <div class="rb-item" id="proj_${projCount}">
            <div class="rb-item-header">
                <span>Project ${projCount}</span>
                <i class="fa-solid fa-trash rb-item-remove" onclick="removeItem('proj_${projCount}')"></i>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>Project Name</label>
                    <input type="text" class="rb-input" placeholder="Project Title">
                </div>
                <div class="rb-group">
                    <label>Project URL</label>
                    <input type="url" class="rb-input" placeholder="https://...">
                </div>
            </div>
            <div class="rb-group">
                <label>Description</label>
                <textarea class="rb-textarea" placeholder="Project description..."></textarea>
            </div>
            <div class="rb-group">
                <label>Technologies Used</label>
                <input type="text" class="rb-input" placeholder="React, Node.js, MongoDB...">
            </div>
        </div>
    `;
    document.getElementById('projectList').insertAdjacentHTML('beforeend', html);
}

// Add Reference
function addReference() {
    refCount++;
    const html = `
        <div class="rb-item" id="ref_${refCount}">
            <div class="rb-item-header">
                <span>Reference ${refCount}</span>
                <i class="fa-solid fa-trash rb-item-remove" onclick="removeItem('ref_${refCount}')"></i>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>Name</label>
                    <input type="text" class="rb-input" placeholder="Reference Name">
                </div>
                <div class="rb-group">
                    <label>Designation</label>
                    <input type="text" class="rb-input" placeholder="Job Title">
                </div>
            </div>
            <div class="rb-grid">
                <div class="rb-group">
                    <label>Company</label>
                    <input type="text" class="rb-input" placeholder="Company Name">
                </div>
                <div class="rb-group">
                    <label>Phone</label>
                    <input type="tel" class="rb-input" placeholder="+971 50 XXX XXXX">
                </div>
            </div>
            <div class="rb-group">
                <label>Email</label>
                <input type="email" class="rb-input" placeholder="reference@company.com">
            </div>
        </div>
    `;
    document.getElementById('referenceList').insertAdjacentHTML('beforeend', html);
}

// Remove Item
function removeItem(id) {
    document.getElementById(id)?.remove();
}

// Add Skill Tag
function addSkillTag(input, tagContainer) {
    if (event.key === ',' || event.key === 'Enter') {
        event.preventDefault();
        const value = input.value.replace(',', '').trim();
        if (value) {
            const html = `<span class="rb-skill-tag">${value} <i class="fa-solid fa-times" onclick="this.parentElement.remove()"></i></span>`;
            document.getElementById(tagContainer).insertAdjacentHTML('beforeend', html);
            input.value = '';
        }
    }
}

// Preview Size
function setPreviewSize(size) {
    const frame = document.getElementById('previewFrame');
    document.querySelectorAll('.rb-preview-controls button').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    if (size === 'mobile') frame.style.width = '375px';
    else if (size === 'tablet') frame.style.width = '768px';
    else frame.style.width = '100%';
}

// Export PDF (Placeholder)
function exportPDF() {
    alert('PDF Export coming soon! - Use Print (Ctrl+P) for now');
}

// Export DOCX (Placeholder)
function exportDOCX() {
    alert('DOCX Export coming soon!');
}

// Print Resume
function printResume() {
    window.print();
}

// AI Summary (Placeholder)
function generateAISummary() {
    alert('AI Summary Generator coming soon!');
}

// Add event listeners for live preview
document.querySelectorAll('.rb-input, .rb-textarea').forEach(input => {
    input.addEventListener('input', updatePreview);
});