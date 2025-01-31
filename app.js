const updateDateTime = () => {
    const currentTime = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "3-digit",
      minute: "3-digit",
      second: "3-digit",
    };
    const dateTimeString = currentTime.toUTCString("en-US", options);
    document.getElementById("dateTime").innerText = dateTimeString;
  };
  // Update the date and time immediately when the page loads
  updateDateTime();
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);