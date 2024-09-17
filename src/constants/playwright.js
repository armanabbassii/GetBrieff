export const playwrightQ = [
  {
    title: "Locating Elements???",
    possibleAnswers: [
      "By using `findElement()`",
      "By using CSS selectors",
      "By using `getElementById()`",
      "By using XPath"
    ],
    trueAnswerIndex: 1,
    description: "In Playwright, the most common way to locate elements is by using CSS selectors, which provide a flexible and powerful way to find elements in the DOM.",
    tag: "#dialogs"

  },
  {
    title: "Handling Multiple Browser Contexts",
    possibleAnswers: [
      "Playwright does not support multiple browser contexts",
      "By using `browser.newContext()`",
      "By launching a new browser instance",
      "By using `browser.newPage()`"
    ],
    trueAnswerIndex: 1,
    description: "Playwright allows you to create multiple browser contexts within a single browser instance using the `browser.newContext()` method, providing an isolated environment for each test.",
    tag: "#browser-contexts"
  },
  {
    title: "Waiting for Elements",
    possibleAnswers: [
      "Using `page.waitForSelector()`",
      "Using `page.waitForTimeout()`",
      "Using `page.waitFor()`",
      "Using `page.wait()`"
    ],
    trueAnswerIndex: 0,
    description: "The `page.waitForSelector()` method in Playwright is used to wait for an element to appear in the DOM, which is essential for ensuring that elements are available before interacting with them.",
    tag: "#waiting"
  },
  {
    title: "Taking Screenshots",
    possibleAnswers: [
      "`page.screenshot()`",
      "`page.takeScreenshot()`",
      "`browser.screenshot()`",
      "`element.screenshot()`"
    ],
    trueAnswerIndex: 0,
    description: "The `page.screenshot()` method is used to capture screenshots of the current page, useful for visual testing and debugging.",
    tag: "#screenshots"
  },
  {
    title: "Running Tests in Headless Mode",
    possibleAnswers: [
      "Playwright does not support headless mode",
      "By setting `{ headless: true }` in the launch options",
      "By setting `{ headless: false }` in the launch options",
      "By using `browser.launchHeadless()`"
    ],
    trueAnswerIndex: 1,
    description: "Playwright can run browsers in headless mode by setting `{ headless: true }` in the launch options, which is useful for CI/CD pipelines and automated testing.",
    tag: "#headless-mode"
  },
  {
    title: "Handling File Uploads",
    possibleAnswers: [
      "Using `page.uploadFile()`",
      "Using `page.setInputFiles()`",
      "Using `page.chooseFile()`",
      "Using `page.attachFile()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.setInputFiles()` method is used to handle file uploads in Playwright by specifying the file paths to be uploaded.",
    tag: "#file-upload"
  },
  {
    title: "Emulating Mobile Devices",
    possibleAnswers: [
      "Using `page.emulateMobile()`",
      "Using `context.setDevice()`",
      "Using `context.newContext()`",
      "Using `browser.newContext()`"
    ],
    trueAnswerIndex: 3,
    description: "Playwright allows emulating mobile devices by using `browser.newContext()` with appropriate device descriptors.",
    tag: "#mobile-emulation"
  },
  {
    title: "Interacting with Frames",
    possibleAnswers: [
      "Using `page.getFrame()`",
      "Using `page.switchToFrame()`",
      "Using `page.frame()`",
      "Using `page.selectFrame()`"
    ],
    trueAnswerIndex: 2,
    description: "The `page.frame()` method is used to interact with frames within a page in Playwright, allowing you to handle nested browsing contexts.",
    tag: "#frames"
  },
  {
    title: "Generating PDFs",
    possibleAnswers: [
      "Using `page.printToPDF()`",
      "Using `page.createPDF()`",
      "Using `page.pdf()`",
      "Using `page.exportPDF()`"
    ],
    trueAnswerIndex: 2,
    description: "The `page.pdf()` method in Playwright is used to generate PDF files from the current page content, useful for generating reports or invoices.",
    tag: "#pdf-generation"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  },
  {
    title: "Handling Alerts and Dialogs",
    possibleAnswers: [
      "Using `page.on('alert')`",
      "Using `page.on('dialog')`",
      "Using `page.on('popup')`",
      "Using `page.handleDialog()`"
    ],
    trueAnswerIndex: 1,
    description: "The `page.on('dialog')` event listener is used to handle alerts, confirms, prompts, and other dialogs in Playwright.",
    tag: "#dialogs"
  }


];