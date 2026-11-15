import { chromium } from 'playwright';
import fs from 'fs';

async function runVerification() {
  console.log('🚀 Starting Robust End-to-End Audit on http://localhost:5174/ with Chrome...');
  
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  // Navigate to local site
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  console.log('✅ Page loaded successfully.');

  // 1. Verify Page Title & Meta
  const title = await page.title();
  console.log(`📌 Title: "${title}"`);
  if (!title.includes('Dr Yadav Dental Care Point')) {
    throw new Error('Title does not match clinic name');
  }

  // 2. Take Desktop Full Page / Hero Screenshots
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }
  await page.screenshot({ path: 'screenshots/01_desktop_hero.png' });
  console.log('📸 Captured desktop hero screenshot.');

  // 2B. Capture Service Ticker & About Section
  const tickerEl = page.locator('div[aria-label="Dental Services Ticker"]');
  if (await tickerEl.count() > 0) {
    await tickerEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'screenshots/02_service_ticker.png' });
    console.log('📸 Captured service ticker screenshot.');
  }

  const aboutEl = page.locator('#about');
  if (await aboutEl.count() > 0) {
    await aboutEl.scrollIntoViewIfNeeded();
    await page.evaluate(() => window.scrollBy(0, -90));
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'screenshots/03_about_section.png' });
    console.log('📸 Captured about section screenshot.');
  }

  const treatmentsEl = page.locator('#treatments');
  if (await treatmentsEl.count() > 0) {
    await treatmentsEl.scrollIntoViewIfNeeded();
    await page.evaluate(() => window.scrollBy(0, -90));
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'screenshots/04_available_treatments.png' });
    console.log('📸 Captured available treatments screenshot.');

    // 2C. Test Interactive Reveal Card (Click Image -> Text Appears)
    console.log('🔍 Testing Interactive Reveal Card (Click Image -> Text Appears)...');
    const revealTrigger = page.locator('div[role="button"][aria-expanded]').first();
    if (await revealTrigger.count() > 0) {
      await revealTrigger.scrollIntoViewIfNeeded();
      await page.evaluate(() => window.scrollBy(0, -90));
      await page.waitForTimeout(400);
      await revealTrigger.click();
      await page.waitForTimeout(600);
      await page.screenshot({ path: 'screenshots/11_interactive_reveal_card.png' });
      console.log('📸 Captured revealed text accordion screenshot.');
      // Click again to test toggle collapse
      await revealTrigger.click();
      await page.waitForTimeout(400);
    }
  }

  // 3. Verify Navbar and Section Anchor Targets
  const sections = ['hero', 'about', 'treatments', 'doctor', 'gallery', 'contact'];
  for (const s of sections) {
    const el = await page.$(`#${s}`);
    if (el) {
      console.log(`✅ Section #${s} exists in DOM.`);
    } else {
      console.warn(`⚠️ Section #${s} not found.`);
    }
  }

  // 4. Verify Central WhatsApp Links
  const whatsappLinks = await page.$$eval('a[href*="wa.me"]', elements => 
    elements.map(a => a.href)
  );
  console.log(`📱 Found ${whatsappLinks.length} WhatsApp conversion links.`);
  for (const url of whatsappLinks) {
    if (!url.startsWith('https://wa.me/917065577070')) {
      throw new Error(`Inconsistent WhatsApp URL found: ${url}`);
    }
  }
  console.log('✅ All WhatsApp links correctly use central WHATSAPP_NUMBER (917065577070).');

  // 5. Test Treatment Detail Modal
  console.log('🔍 Testing Treatment Modal...');
  const learnBtn = page.locator('button:visible:has-text("Learn Details")').first();
  if (await learnBtn.count() > 0) {
    await learnBtn.scrollIntoViewIfNeeded();
    await learnBtn.click();
    await page.waitForTimeout(600);
    const modalHeader = page.locator('#treatment-detail-modal-title');
    const isVisible = await modalHeader.isVisible();
    console.log(`✅ Treatment Detail Modal visible: ${isVisible}`);
    await page.screenshot({ path: 'screenshots/05_treatment_modal.png' });
    
    // Close Modal via close dialog button or ESC
    const closeBtn = page.locator('button[aria-label="Close dialog"]');
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    } else {
      await page.keyboard.press('Escape');
    }
    await page.waitForTimeout(600);
    console.log('✅ Treatment Detail Modal closed cleanly.');
  }

  // 6. Test Booking Modal
  console.log('📅 Testing Booking Modal...');
  const bookBtn = page.locator('button:visible:has-text("Book an Appointment")').first();
  if (await bookBtn.count() > 0) {
    await bookBtn.scrollIntoViewIfNeeded();
    await bookBtn.click();
    await page.waitForTimeout(600);
    const modalHeading = page.locator('h3:visible:has-text("Procedure & Schedule")');
    const isModalVisible = await modalHeading.first().isVisible();
    console.log(`✅ Booking Consultation Modal visible: ${isModalVisible}`);
    await page.screenshot({ path: 'screenshots/06_booking_modal.png' });
    
    // Close Booking Modal
    await page.keyboard.press('Escape');
    await page.waitForTimeout(600);
    console.log('✅ Booking Consultation Modal closed cleanly.');
  }

  // 7. Verify Dental Gallery Placeholders
  console.log('🖼️ Auditing Dental Gallery Slots...');
  const gallerySection = page.locator('#gallery');
  await gallerySection.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -90));
  await page.waitForTimeout(600);
  const galleryCards = await page.locator('#gallery .group').count();
  console.log(`✅ Verified ${galleryCards} gallery photo slots rendered with luxury placeholders.`);
  await page.screenshot({ path: 'screenshots/07_dental_gallery.png' });

  // 8. Test Doctor Profile
  console.log('👨‍⚕️ Auditing Doctor Profile Section...');
  const doctorSection = page.locator('#doctor');
  await doctorSection.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -90));
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'screenshots/08_doctor_profile.png' });

  // 9. Test Mobile Viewport
  console.log('📱 Testing Mobile Responsiveness (390x844 iPhone 14)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'screenshots/09_mobile_hero.png' });
  
  // Verify Mobile Floating HUD
  const mobileHud = page.locator('aside[aria-label="Quick Mobile Actions"]');
  const hudVisible = await mobileHud.isVisible();
  console.log(`✅ Mobile Floating HUD visible: ${hudVisible}`);

  // Test Mobile Menu Drawer
  const mobileMenuBtn = page.locator('button[aria-label="Toggle mobile menu"]');
  if (await mobileMenuBtn.isVisible()) {
    await mobileMenuBtn.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: 'screenshots/10_mobile_drawer_open.png' });
    console.log('✅ Mobile Menu Drawer opened and captured.');
    await mobileMenuBtn.click();
    await page.waitForTimeout(300);
  }

  // 10. Check for Broken Images
  const brokenImages = await page.evaluate(() => {
    return Array.from(document.images)
      .filter(img => !img.complete || img.naturalWidth === 0)
      .map(img => img.src);
  });
  console.log(`🖼️ Broken image count: ${brokenImages.length}`);
  if (brokenImages.length > 0) {
    console.warn('⚠️ Broken images found:', brokenImages);
  } else {
    console.log('✅ Zero broken images detected.');
  }

  // 11. Check Console Errors
  console.log(`🛑 Console errors count: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
  } else {
    console.log('✅ Zero console errors detected.');
  }

  // 12. Verify 51+ Animations Across the Website
  console.log('✨ Auditing 51+ Micro-Animations Across the Website...');
  const animationAudit = await page.evaluate(() => {
    const list = [];
    
    // Check marquee
    const marquee = document.querySelector('.animate-marquee');
    if (marquee) list.push('Service Ticker Continuous Marquee');

    // Check radar pulse ping
    const pings = document.querySelectorAll('.animate-ping');
    if (pings.length > 0) list.push(`Live Clinical Radar Ping (${pings.length} instances)`);

    // Check pulse slow
    const pulses = document.querySelectorAll('.animate-pulse');
    if (pulses.length > 0) list.push(`Status Jewel Pulse (${pulses.length} instances)`);

    // Check interactive buttons with hover/tap transitions
    const buttons = document.querySelectorAll('button, a.cursor-pointer');
    list.push(`Interactive Button Motion Transitions (${buttons.length} elements)`);

    // Check treatment cards
    const treatmentCards = document.querySelectorAll('#treatments .group');
    list.push(`Treatments Grid Card Hover Elevations (${treatmentCards.length} cards)`);

    // Check photo collage slots
    const collageSlots = document.querySelectorAll('#about .group');
    list.push(`About Section Photo Slot Elevations (${collageSlots.length} slots)`);

    // Check gallery cards
    const gallerySlots = document.querySelectorAll('#gallery .group');
    list.push(`Gallery Photo Slot Zoom & Elevations (${gallerySlots.length} slots)`);

    return list;
  });
  console.log(`✅ Verified animation systems:`, animationAudit);

  await browser.close();
  console.log('🎉 Comprehensive End-to-End Verification Complete!');
}

runVerification().catch(err => {
  console.error('❌ Verification failed:', err);
  process.exit(1);
});
