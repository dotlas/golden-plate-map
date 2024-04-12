/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const axios = require("axios");
const cliProgress = require("cli-progress");
const path = require("path");

const restaurantsDataUrl =
  "https://dotlas-marketing.s3.amazonaws.com/interviews/california_restaurants_2024.json";
const dataSavePath = path.join(process.cwd(), "src", "data");
const restaurantsDataSavePath = path.join(dataSavePath, "restaurants.json");

async function downloadRestaurantsData() {
  try {
    const response = await axios.get(restaurantsDataUrl, {
      responseType: "stream",
    });

    if (response.status !== 200) {
      throw new Error(`Failed to download data: ${response.statusText}`);
    }

    const totalBytes = parseInt(response.headers["content-length"], 10);
    const progressBar = new cliProgress.SingleBar({
      format: "Downloading restaurants data | {bar} | {percentage}%",
      barCompleteChar: "\u2588",
      barIncompleteChar: "\u2591",
      hideCursor: true,
    });

    progressBar.start(totalBytes, 0);

    // Create the folder if it doesn't exist
    if (!fs.existsSync(dataSavePath)) {
      fs.mkdirSync(dataSavePath);
    }

    const writeStream = fs.createWriteStream(restaurantsDataSavePath);
    let downloadedBytes = 0;

    writeStream.on("drain", () => {
      progressBar.update(downloadedBytes);
    });

    writeStream.on("finish", () => {
      progressBar.stop();
      console.log("Restaurants data downloaded successfully!");
    });

    writeStream.on("error", (error) => {
      progressBar.stop();
      console.error("Error downloading data:", error);
    });

    response.data.pipe(writeStream);
    response.data.on("data", (chunk) => {
      downloadedBytes += chunk.length;
    });
  } catch (error) {
    console.error("Error downloading data:", error);
  }
}

downloadRestaurantsData();
