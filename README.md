# TestCafe solution for AVSystem recruitment task

The task was to automate a simple page written in the Angular framework. There were 3 views - a homepage, a stepper and a form. Tests include verification for user interaction with those components, check trimming and maximum length requirements, and redirection from invalid URLs.

My solution is written in the Testcafe test framework. To run tests you have to do the following steps (assuming that you have Node.js already installed on your machine):
0. Install node (16.14.0) on your machine
1. Clone the repository and install all dependencies with the command "npm install"
2. Run tests with the command "tc:run:chrome"
3. After the run you can check test results in the generated report (e2e/artifacts/reports/report.html). Example test report is shown below:
4. 
