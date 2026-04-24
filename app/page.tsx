"use client"

import Image from "next/image"
import Script from "next/script"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Magnum Opus Cloud Computing",
  description:
    "Cloud computing service providing Windows 11 without AI, bloatware, or advertisements. Access a full Windows 11 desktop from any device.",
  url: "https://magnumopuscloud.com",
  email: "support@magnumopuscloud.com",
  logo: "https://magnumopuscloud.com/images/magnum-opus-logo.png",
  image: "https://magnumopuscloud.com/images/magnum-opus-logo.png",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "US",
  },
  areaServed: "US",
  sameAs: ["https://youtube.com/@magnumopuscloud"],
  offers: {
    "@type": "Offer",
    name: "Windows 11 Cloud Desktop",
    description:
      "Full Windows 11 experience accessible from any device - phone, tablet, laptop, or desktop. No bloatware, no AI, free product key included.",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    availableAtOrFrom: {
      "@type": "Place",
      addressCountry: "US",
    },
  },
}

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Magnum Opus Cloud Computing",
  url: "https://magnumopuscloud.com",
  description:
    "Access Windows 11 from any device with no bloatware, no AI, and no advertisements. Free Windows 11 product key included.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Magnum Opus Cloud Computing",
    url: "https://magnumopuscloud.com",
    logo: "https://magnumopuscloud.com/images/magnum-opus-logo.png",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://magnumopuscloud.com/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this a full version of Windows 11 without AI or bloatware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is a full version of Windows 11 with NO bloatware, advertising, or AI.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a download, ROM, or emulator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, this is a fully functioning Windows 11 desktop hosted in the cloud.",
      },
    },
    {
      "@type": "Question",
      name: "How do I connect or use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can connect via remote desktop via the Windows App.",
      },
    },
    {
      "@type": "Question",
      name: "Which devices are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The following devices are supported: Android and Apple phones and tablets. In addition, we also support Windows, Apple, and Chromebook desktops and laptops.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Microsoft account to sign in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No! You do not need a Microsoft account to use our Windows 11 cloud service.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Windows COA or activation key?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, we provide that for you for free.",
      },
    },
  ],
}

const qaItems = [
  {
    question: "Q: Is this a full version of Windows 11 without AI or bloatware?",
    answer: "A: This is a full version of Windows 11 with NO bloatware, advertising, or AI.",
  },
  {
    question: "Q: Is this a download, ROM, or emulator?",
    answer: "A: No, this is a fully functioning Windows 11 desktop hosted in the cloud.",
  },
  {
    question: "Q: How do I connect or use it?",
    answer:
      "A: Go to our secure webpage login https://magnumopus2.live/guacamole/#/ for desktop and laptop login. Mobile is launching soon.",
  },
  {
    question: "Q: Which devices are supported?",
    answer:
      "A: The following devices are supported: Android and Apple phones and tablets. In addition, we also support Windows, Apple, and Chromebook desktops and laptops.",
  },
  {
    question: "Q: Are there support resources or tutorials on how to use it?",
    answer:
      "A: Yes, we have 24 hour support via email. Also, we have easy-to-follow instructions and great YouTube tutorials.",
  },
  {
    question: "Q: Do I need a Microsoft account to sign in and have Windows 11 with your service?",
    answer: "A: No!",
  },
  {
    question: "Q: Do I need a Windows COA or activation key?",
    answer: "A: No, we provide that for you for free.",
  },
  {
    question: "Q: Can I save pictures, files, and documents?",
    answer: "A: Yes",
  },
]

function WindowsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 88 88"
      className="inline-block w-[18px] h-[18px] align-middle ml-1"
      aria-hidden="true"
    >
      <path
        fill="#0078D4"
        d="M0 12.4L35.7 7.6V42.3H0zM40 7L87.3 0V42.3H40zM87.3 45.7V88L40 81V45.7zM35.7 80.4L0 75.6V45.7H35.7z"
      />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-current"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 md:w-6 h-5 md:h-6 fill-current" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

export default function MagnumOpus() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#f0f6ff] to-[#e4eef8] flex flex-col items-center font-sans text-[#1a1a2e]">

        {/* Header */}
        <header className="flex flex-col px-4 md:px-8 py-3 md:py-4 w-full bg-gradient-to-r from-[#0a1628] via-[#132d54] to-[#0a1628] border-b border-[rgba(0,120,212,0.3)] shadow-lg sticky top-0 z-10 gap-1">
          {/* Top row: logo + name on left, YouTube on right */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3 md:gap-4">
              <Image
                src="/images/magnum-opus-logo.png"
                alt="Magnum Opus Cloud Computing Logo"
                width={180}
                height={108}
                className="h-14 md:h-16 w-auto object-contain"
                priority
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-base md:text-xl tracking-wide">Magnum Opus</span>
                <span className="text-[#7ec8f4] font-medium text-sm md:text-base tracking-wide">Cloud Computing</span>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              {/* Emails: hidden on mobile (shown below), visible on sm+ inline */}
              <div className="hidden sm:flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                <a href="mailto:support@magnumopus.cloud" className="text-[rgba(150,190,240,0.9)] hover:text-white transition-colors">support@magnumopus.cloud</a>
                <span className="text-[rgba(150,190,240,0.4)]">|</span>
                <a href="mailto:sales@magnumopus.cloud" className="text-[rgba(150,190,240,0.9)] hover:text-white transition-colors">sales@magnumopus.cloud</a>
              </div>
              <a
                href="https://www.youtube.com/channel/UCPPj7NBKs_M2cgRxhx5auDw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(150,190,240,0.9)] hover:text-red-400 transition-colors flex-shrink-0"
                aria-label="Magnum Opus YouTube Channel"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
          {/* Mobile-only email rows — stacked so both are always fully visible */}
          <div className="flex sm:hidden flex-col gap-0.5 pb-1">
            <a href="mailto:support@magnumopus.cloud" className="text-[rgba(150,190,240,0.9)] hover:text-white transition-colors text-xs">support@magnumopus.cloud</a>
            <a href="mailto:sales@magnumopus.cloud" className="text-[rgba(150,190,240,0.9)] hover:text-white transition-colors text-xs">sales@magnumopus.cloud</a>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-[760px] w-full px-4 md:px-6 py-6 md:py-10">

          {/* Hero Section */}
          <section className="text-center py-8 md:py-12 px-3 md:px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0078D4] mb-4 leading-tight text-balance">
              Windows 11 Without AI <WindowsIcon />
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-block bg-[#0078D4]/10 text-[#0078D4] px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                Free Product Key/COA
              </span>
              <span className="inline-block bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                No Bloatware
              </span>
              <span className="inline-block bg-purple-500/10 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                No AI
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#555] max-w-[580px] mx-auto leading-relaxed">
              Access a full version of Windows 11 from anywhere. Connect from your phone, tablet, laptop, or desktop to a
              complete Windows 11 operating system hosted securely in the cloud. No Copilot AI, no bloatware, no Microsoft
              account needed, and no advertising in our version of Windows 11.
            </p>
          </section>

          {/* Launch Status Banner */}
          <section className="mb-8 md:mb-12">
            <div className="bg-yellow-200 text-[#1a1a2e] text-center font-bold text-base sm:text-lg py-2 md:py-3 px-3 md:px-4 rounded-lg mb-6 md:mb-8">
              Currently, we have launched the desktop version and mobile will be available soon.
            </div>

            {/* Desktop Login Instructions */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] text-center mb-6 md:mb-8">
              How To Login Via Desktop &amp; Laptop
            </h2>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-[#e5e7eb] mb-8">
              <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-3">
                <span className="font-semibold">1. Turn on your VPN (Optional).</span>
              </p>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed">
                <span className="font-semibold">2. Go to our secure webpage login </span>
                <a
                  href="https://magnumopus2.live/guacamole/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0078D4] hover:underline break-all"
                >
                  https://magnumopus2.live/guacamole/#/
                </a>
              </p>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed mt-3">
                <span className="font-semibold">3. Please input your username and password</span> that was emailed to you
                from support@magnumopuscloud.com or sales@magnopus.cloud. Please check your junk and spam folders if the
                email is not in your normal inbox.
              </p>
              <div className="flex justify-center mt-4 md:mt-6 mb-4 md:mb-6">
                <Image
                  src="/images/guacamole-login-screenshot.jpg"
                  alt="Apache Guacamole Login Interface"
                  width={500}
                  height={560}
                  className="rounded-lg border border-[#ddd] shadow-md w-full max-w-xs h-auto"
                />
              </div>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed mt-3">
                <span className="font-semibold">
                  4. Please double click on the computer tab and server name (i.e. Windows1).
                </span>
              </p>
              <div className="flex justify-center mt-4 md:mt-6 mb-4 md:mb-6">
                <Image
                  src="/images/guacamole-connections-screenshot-2.jpg"
                  alt="Double-click on Windows1 connection to access desktop"
                  width={500}
                  height={400}
                  className="rounded-lg border border-[#ddd] shadow-md w-full max-w-xs h-auto"
                />
              </div>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed mt-3">
                <span className="font-semibold">5. You will see the following screen and will be logged in.</span>
              </p>
              <div className="flex justify-center mt-4 md:mt-6 mb-4 md:mb-6 px-2">
                <Image
                  src="/images/windows11-desktop-screenshot.jpg"
                  alt="Windows 11 desktop successfully logged in"
                  width={800}
                  height={600}
                  className="rounded-lg border border-[#ddd] shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto"
                />
              </div>
            </div>

            {/* Mobile Login */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] text-center mb-6 md:mb-8">
              How To Login Via Smartphone
            </h2>
            <p className="text-center text-sm sm:text-base text-[#555] mb-8">Launching soon.</p>

            {/* Q&A */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] text-center mb-6 md:mb-8">
              Questions &amp; Answers
            </h3>
            <div className="space-y-2 md:space-y-3">
              {qaItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#0078D4]"
                >
                  <p className="font-semibold text-sm sm:text-base text-[#1a1a2e] mb-2">{item.question}</p>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] text-center mb-6 md:mb-8">Contact Us</h2>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-[#e5e7eb]">
              <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-4 md:mb-6">
                We would love to hear from you. Reach out to us and we will get back to you as soon as possible.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#f8fafc] rounded-lg">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-[#0078D4]/10 rounded-full flex items-center justify-center text-[#0078D4] flex-shrink-0">
                    <EmailIcon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm md:text-base text-[#1a1a2e] font-semibold">Support</p>
                    <a href="mailto:support@magnumopus.cloud" className="text-xs md:text-sm text-[#0078D4] hover:underline break-all">
                      support@magnumopus.cloud
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#f8fafc] rounded-lg">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                    <EmailIcon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm md:text-base text-[#1a1a2e] font-semibold">Sales</p>
                    <a href="mailto:sales@magnumopus.cloud" className="text-xs md:text-sm text-green-600 hover:underline break-all">
                      sales@magnumopus.cloud
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Us */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] text-center mb-6 md:mb-8">About Us</h2>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-[#e5e7eb]">
              <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-3 md:mb-4">
                Magnum Opus Cloud Computing is a cloud computing company dedicated to providing users with a clean, secure,
                and bloatware-free Windows 11 experience. We believe that everyone deserves access to a full-featured
                operating system without intrusive AI, advertisements, or unnecessary software.
              </p>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed">
                Our mission is to deliver a seamless Windows 11 experience that can be accessed from any device — whether
                you are on a phone, tablet, laptop, or desktop. With our cloud-hosted solution, you get the power of a full
                Windows 11 desktop without the hassle of hardware limitations or bloatware.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] text-center mb-6 md:mb-8">Privacy Policy</h2>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-[#e5e7eb]">
              <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-4 md:mb-5">
                At Magnum Opus Cloud Computing, we take your privacy seriously. We are committed to protecting your personal
                information and being transparent about how we collect, use, and store your data.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-1">Information We Collect</p>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    We collect only the information necessary to provide our cloud computing services, including your email
                    address, account credentials, and usage data to improve our service quality.
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-1">How We Use Your Information</p>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    Your information is used solely to provide and improve our services. We do not sell, trade, or share
                    your personal information with third parties for marketing purposes.
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-1">Data Security</p>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    We implement industry-standard security measures to protect your data. All connections to our cloud
                    services are encrypted, and we recommend using a VPN when accessing our services on public networks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Terms of Use */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] text-center mb-6 md:mb-8">Terms of Use</h2>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-[#e5e7eb]">
              <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-4 md:mb-5">
                By accessing and using Magnum Opus Cloud Computing services, you agree to comply with these Terms of Use.
                Please read them carefully before using our cloud computing platform.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-1">License and Usage</p>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    Magnum Opus Cloud Computing grants you a limited, non-exclusive, non-transferable license to use our
                    Windows 11 cloud computing service for personal or business purposes. You agree not to reverse engineer,
                    decompile, or modify the service or any related software.
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-1">Acceptable Use Policy</p>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    You agree not to use our service for any illegal activities, harassment, distribution of malware, or any
                    purpose that violates applicable laws. You are responsible for all activity that occurs under your
                    account.
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-1">Limitation of Liability</p>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    Magnum Opus Cloud Computing provides the service on an &quot;as-is&quot; basis. We are not liable for
                    any indirect, incidental, or consequential damages arising from your use of our service. We do not
                    guarantee uninterrupted access to the service.
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-1">Termination</p>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    We reserve the right to suspend or terminate your access to our service at any time for violation of
                    these terms or for any reason we deem necessary to protect our platform and other users.
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-1">Changes to Terms</p>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                    Magnum Opus Cloud Computing may modify these Terms of Use at any time. Your continued use of the service
                    constitutes acceptance of the updated terms. Please review this page periodically for changes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gradient-to-r from-[#0a1628] via-[#132d54] to-[#0a1628] border-t border-[rgba(0,120,212,0.3)] py-6 md:py-8 mt-auto">
          <div className="max-w-[760px] mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-4 md:mb-5">
              <a href="mailto:support@magnumopus.cloud" className="text-[rgba(150,190,240,0.9)] hover:text-white transition-colors text-xs md:text-sm break-all">
                support@magnumopus.cloud
              </a>
              <span className="text-[rgba(150,190,240,0.3)]">|</span>
              <a href="mailto:sales@magnumopus.cloud" className="text-[rgba(150,190,240,0.9)] hover:text-white transition-colors text-xs md:text-sm break-all">
                sales@magnumopus.cloud
              </a>
              <span className="text-[rgba(150,190,240,0.3)]">|</span>
              <a
                href="https://www.youtube.com/channel/UCPPj7NBKs_M2cgRxhx5auDw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(150,190,240,0.9)] hover:text-red-400 transition-colors"
                aria-label="Magnum Opus YouTube Channel"
              >
                <YouTubeIcon />
              </a>
            </div>
            <p className="text-[rgba(150,190,240,0.7)] text-xs md:text-sm">
              {new Date().getFullYear()} Magnum Opus Cloud Computing. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
