Feature: Capture the BMI Result value & Print it 
@Login
Scenario Outline: Capture the BMI Result value & Print it 
Given  User launches URL 
And User validate the Tittle of the current page
And User click on BMI Calculator 
Then User verify the Title of the Page again
Then User enters Age as "<Age>"
And User enters height as "<Height>"
And User enters weight as "<Weight>" 
And User taps on Calulate BMI
Then User capture the BMI Result value & Print it
Then User close the browser

Examples:
|Age|Height|Weight|
|10|127|40|
|30|156|70|
|25|152|55|
|20|160|45|
|35|160|70|
