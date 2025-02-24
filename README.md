# 🌍 Renewable Energy Chart Observer (RECO)

## 📌 Overview

The **Renewable Energy Chart Observer (RECO)** is a web application designed to visualize the share of renewable energy in Germany's total energy production. Users can view forecasts for the current day or historical data spanning the last ten years.

## ✨ Features

✅ Displays **real-time renewable energy forecasts**. 
✅ Shows **historical renewable energy data**. 
✅ Interactive chart visualization using **Angular & Chart.js**. 
✅ Dynamic selection of years for historical analysis. 
✅ Fully responsive UI for seamless use on different devices.

## 🛠️ Tech Stack

- **Frontend:** Angular ⚡
- **Styling:** CSS 🎨 (Responsive Design)
- **Charts:** Chart.js 📊
- **API Data Source:** Energy-Charts API 🔌

## 🚀 Installation

To run the project locally, follow these steps:

### 📋 Prerequisites

- Install [Node.js](https://nodejs.org/) and npm
- Install Angular CLI:
  ```sh
  npm install -g @angular/cli
  ```

### 📂 Clone the Repository

```sh
git clone https://github.com/tazokuetep24/RECO.git
cd RECO
```

### 📦 Install Dependencies

```sh
npm install
```

### ▶️ Run the Application

```sh
ng serve
```

Visit `http://localhost:4200/` in your browser.

## 📁 Project Structure

```
RECO/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── app.component.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.css
│   │   │   ├── energy-chart/
│   │   │   │   ├── energy-chart.component.ts
│   │   │   │   ├── energy-chart.component.html
│   │   │   │   ├── energy-chart.component.css
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
├── README.md
```

## 📊 Usage

1. Choose between **Forecast** and **Past** data using radio buttons.
2. If "Past" is selected, use the year selector to view historical data.
3. View energy trends in an interactive chart.
4. Data is sourced dynamically from the **Energy-Charts API**.

## 🤝 Contributions

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to your branch: `git push origin feature-name`
5. Open a Pull Request.

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Energy-Charts API** for providing the renewable energy data.
- **Angular & Chart.js** for UI and chart visualization.

---

Enjoy using the **Renewable Energy Chart Observer (RECO)**! 🚀🌿

