# PlayWright Automation Framework

A robust and scalable automation framework built using [Playwright](https://playwright.dev/) for end-to-end testing of web applications. This framework is designed to help teams write reliable, maintainable, and reusable automated test scripts in a structured manner.

PlayWright_Automation_Framework/
├── tests/              # Test specifications
├── pages/              # Page Object classes
├── utils/              # Utility functions & helpers
├── configs/            # Configuration files (env, browser, etc.)
├── reports/            # Test execution reports
├── playwright.config.js # Playwright configuration
└── README.md

To execute tests:

npx playwright test
npx playwright test e2eTest E2E_UI_Flow.spec.js
npx playwright test Labels.spec.js 
