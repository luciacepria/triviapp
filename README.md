# TriviApp
<p align="center">
<img src="https://github.com/user-attachments/assets/052a9402-886f-4153-a4a1-832b0e6269ab"
  alt="Screenshot">
</p>

<p align="center">
<a href="https://www.gnu.org/licenses/gpl-3.0.html">
    <img src="https://img.shields.io/badge/Licence%20-%20GPLv3%20-%20blue"
         alt="GPLv3 Licence">
 </p>
TriviApp is a trivia game that fetches questions using AI.

## Why?
The idea behind the project is having an easy to use trivia question generator to use in any quiz game. We are used to physical board games becoming outdated, but with this app, questions will be as updated as the model is. If a game has outdated questions, just switch model for a newer one. 

## Installation

To run the app, first clone the repository:
```
git clone https://github.com/luciacepria/triviapp.git
```
Then, open the project in your favourite IDE.

### Prerequisites
This project depends on a Node.js. If you don't have it, please, download and install it through the project [download page](https://nodejs.org/en/download).

Upon launching the IDE, first install all the modules needed to run the app with:
```
npm install
```
Note that npm should have already been installed with your Node.js installation process.

### Running the app
To run a development server with the app, just type in your terminal:
```
npm run dev
```
Then access the local version in your browser, `ctrl + click` the URL in the running output of the command.
We recommend using major browsers such as [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/) or [Google Chrome](https://www.google.com/chrome/).

## Usage

After running the app and opening it in your browser, you will be presented with questions.

- Click on `Reveal Answer` to reveal the answer to the current question.
- Click on `Next Question` to show a new question.

Users also have a `?` button at the top-left corner of the page offering help in a pop-up dialog.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

Please make sure any sensitive information is not published, such as API keys or mock data containing real information. 

If you have any question or would like some input on any topic regarding the project, do not hesitate in opening an issue for other contributors to discuss it.

For full guidelines on contribution, please see the [contribution guidelines](/CONTRIBUTING.md). Make sure to follow the [code of conduct](/CODE_OF_CONDUCT.md) in every interaction with other contributors of the project.

## Roadmap
New ideas for the development of the application are listed here. More will be added as time goes by:

- LLM API service integration
- Multiple choice gamemode
- Countdown mode
- More complex game modes

If you want to work on any of these, feel free to open issues to gather input and contribute.

## License

[GPL](/LICENSE)
