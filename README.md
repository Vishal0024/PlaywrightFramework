# 🧪 Playwright Test Framework

This project contains UI and API tests written using [Playwright](https://playwright.dev/). It supports running tests locally and via GitHub Actions.

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js (v18 or later)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

## 🚀 Getting Started

1. **Clone the repo:**

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
```

2. **Install dependencies:**

```bash
npm install
```

3. **Install Playwright browsers:**

```bash
npx playwright install --with-deps
```

## ✅ Running Tests Locally

1. **Run all tests (UI and API):**

```bash
npx playwright test
```

2. **Run only UI tests:**

```bash
npx playwright test tests/ui
```
3. **Run only API tests:**

```bash
npx playwright test tests/api
```

4. **View the HTML report:**

```bash
npx playwright show-report
```

## ✅ Running Tests in GitHub Actions

```bash
.github/workflows/playwright.yml
```
