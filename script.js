//your JS code here. If required.
// Function to detect the user's browser and display the information
        function detectBrowser() {
            // Get browser name and version from the navigator object
            const browserName = navigator.appName;
            const browserVersion = navigator.appVersion;

            // Display the information in the "browser-info" div
            const browserInfoElement = document.getElementById("browser-info");
            browserInfoElement.textContent = "You are using " + browserName + " version " + browserVersion;
        }

        // Call the detectBrowser function when the page loads
        window.onload = detectBrowser;