// loadGoogleMaps.js
export const loadGoogleMaps = (apiKey) => {
  return new Promise((resolve, reject) => {
    // If Google Maps is already loaded, resolve immediately
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    // Create the script tag
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;

    // Resolve the promise once the script loads
    script.onload = () => resolve();

    // Reject if there’s an error loading the script
    script.onerror = (err) => reject(err);

    // Append the script to the head
    document.head.appendChild(script);
  });
};
