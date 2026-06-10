# OrthoGuard (Alpha Test)

**OrthoGuard** is a real-time website-blocking browser extension designed to help Orthodox Christians guard their faith and maintain spiritual purity in the digital space. When a harmful domain or keyword is detected, OrthoGuard immediately disrupts the connection and redirects the user to a reflective interface featuring sacred icons and spiritual counsel to help refocus the mind.

---

## Key Features

* **Ultra-Lightweight Domain Filtering**: Real-time URL analysis blocks harmful sites in under 0.1 seconds, ensuring zero noticeable impact on browsing speed.
* **Built-in Whitelist**: Out-of-the-box exceptions for essential productivity and daily platforms (e.g., Google, YouTube, GitHub) to guarantee uninterrupted workflow.
* **Orthodox-Themed Block Screen**: Replaces digital distractions with a serene, reverent design and the spiritual wisdom of Father Seraphim Rose to help reset and guard your thoughts.
* **Easily Customizable**: Highly flexible architecture allows you to easily append personal blacklist keywords or domains directly within the configuration files.

---

## Tech Stack

* JavaScript (Web Extensions API / Manifest V3)
* HTML5 / CSS3

---

## Installation (Chrome / Edge / Chromium)

Since OrthoGuard is currently in alpha testing and not yet published on the Chrome Web Store, you can install it manually by following these steps:

### 1. Download the Project

* Go to the **Releases** section of this repository and download the latest `OrthoGuardExtension.zip` file, or clone the repository directly using your terminal:
```bash

```



git clone https://github.com/Wadotu/OrthoGuard.git

```
*   *Note: If you downloaded the ZIP file, make sure to extract it to a permanent folder.*

### 2. Navigate to the Extensions Page
Open your preferred browser and enter the appropriate address in the URL bar:
*   **Chrome:** `chrome://extensions/`
*   **Edge:** `edge://extensions/`
*   **Other Chromium Browsers:** `browser-name://extensions/`

### 3. Enable Developer Mode
*   Toggle the **Developer mode** switch in the top-right corner of the page to **ON**. This will reveal the manual installation controls.

### 4. Load the Unpacked Extension
*   Click the **Load unpacked** button in the top-left corner.
*   In the file selection dialog, choose the extracted `OrthoGuard` folder (the directory containing `manifest.json`) and click **Select Folder**.

### 5. Verify and Pin
*   Once OrthoGuard appears in your extension list, the installation is complete.
*   Click the **Puzzle icon (🧩)** in your browser toolbar and click the **Pin** icon next to OrthoGuard to easily monitor its active status.

---

## Customization

To tailor the filtering system to your personal spiritual boundaries:
1. Open the project folder and locate the `content.js` file.
2. Open the file in any text editor and locate the keyword/domain array.
3. Add your custom keywords or blocklists, then save the file.
4. Navigate back to your browser's extension management page (`://extensions/`) and click the **Reload (🔄)** icon on the OrthoGuard card to apply your changes instantly.

---

## Contributing

Contributions, bug reports, and suggestions—especially for expanding the library of spiritual quotes and icons—are highly welcome. Feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

```
