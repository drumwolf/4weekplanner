class GSX {
  constructor(gsxID) {
    this.url = `https://spreadsheets.google.com/feeds/list/${gsxID}/default/public/values?alt=json`;
  }

  fetch() {
    return this.getAjax(this.url).then(this.filter);
  }

  filter(data) {
    var filteredData = [];
    data.feed.entry.forEach(function(entry){
        var parsedObject = {};
        for (var key in entry) {
            if (key.substring(0,4) === "gsx$") {
                const keyValue = entry[key]["$t"];
                parsedObject[key.slice(4)] = keyValue && isFinite(keyValue) ? parseFloat(keyValue) : keyValue ? keyValue : null;
            }
        }
        filteredData.push(parsedObject);
    });
    return filteredData;
  }

  getAjax(url) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          const response = request.responseText;
          resolve(JSON.parse(response));
        } else {
          reject(Error(request.statusText));    // We reached our target server, but it returned an error
        }
      };
      request.onerror = function() {
        reject(Error("Network Error"));     // There was a connection error of some sort
      };
      request.send();
    });
  }

}

export default GSX;