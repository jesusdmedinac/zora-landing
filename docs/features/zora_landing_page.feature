Feature: Zora Automotive Marketplace & AI Copilot Landing Page
  As a vehicle driver looking for replacement parts or a certified salvage yard operator (yonke)
  I want a fast, high-contrast, bilingual landing page
  So that I can understand Zora's value proposition, find exact auto parts without jargon, and join the network.

  Background:
    Given the user navigates to the Zora landing page
    And the page is rendered with Dark Titanium aesthetics and WebGL ambient glow

  Scenario: Brand Navigation and Bilingual Switcher
    Then the top navigation should display the Zora origami emblem and name
    And provide navigation links to "How It Works", "For Yonkes", "Virtual Garage", and "Reverse Auction"
    And provide a seamless toggle between Spanish (ES) and English (EN)
    And provide a primary action button to search for parts

  Scenario: Atmospheric Hero with Laser-White Typography and Interactive Search Prompt
    Then the hero section should display solid laser-white headlines without gradient text fills
    And display semantic badges for "Automotive Artificial Intelligence" and "Binational Yonke Network"
    And present an interactive prompt simulator where users can type or click typical vehicle issues
    And show an authority metric strip with zero technical jargon, response times, and verified yard counts

  Scenario: Dual AI-Agent Architecture
    Then the page should explain the two specialized AI agents
    And highlight the Driver Assistant translating colloquial descriptions to OEM specifications
    And highlight the Yonke Radar distributing live alerts under the Fastest-Finger-First model

  Scenario: Interactive Phone App Showcase
    Then the page should render an interactive phone mockup with realistic UI tabs
    And allow switching between Copilot Onboarding Chat, Virtual Garage Telemetry, and Contextual Parts Feed
    And display authentic two-word semantic badges such as "DIRECT FIT" and "VAULT OK"

  Scenario: Reverse Bidding & Fastest-Finger-First Workflow Visualizer
    Then the page should display a clear 4-step reverse auction visualizer
    And illustrate: Driver request -> AI translation -> Simultaneous broadcast to yards -> Best price delivery

  Scenario: Yonke B2B Value Proposition and Instant Yard Activation
    Then the page should address salvage yard owners with dedicated B2B pain points
    And explain the elimination of ghost inventory and manual cataloging
    And provide an instant registration CTA for verified auto recyclers

  Scenario: Binational Cross-Border Advantage
    Then the page should detail the Tijuana - San Diego cross-border automotive corridor
    And emphasize cross-border compatibility between US and Mexican vehicle trims
    And offer local pickup and regional shipping options

  Scenario: Anti-Fraud and OEM Compatibility Guarantee
    Then the page should highlight verification protocols
    And show donor VIN verification, pre-dispatch physical photos, and fitment guarantee

  Scenario: Conversion Call To Action and Bilingual Footer
    Then the page should provide dual CTAs for drivers and yard owners
    And provide footer links, copyright, author attribution to Jesús Daniel Medina Cruz, and legal disclaimers
