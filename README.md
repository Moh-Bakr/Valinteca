# Application Contains 3 Pages


### - the first page (welcome screen), the “get started” button should open the “register page”
<hr/>

![Alt text](README/welcome.png?raw=true)
![Alt text](README/welcome-mobile.png?raw=true)
<hr/>

### - In the second page (register page), user is asked to enter some data such as username, email,
password, you need to validate the form

![Alt text](README/register.png?raw=true)

- Username must consist of 5 to 15 characters, only letters and numbers are allowed, with no
numbers at the beginning or the end, ahmed0saber is valid, 0ahmedsaber is not valid,
ahmedsaber0 is not valid, ahmed_saber is not valid, etc...
- Email must be in a valid format
- Password must be at least 8 characters
- Display frontend validation errors below each input

![Alt text](README/register-valid.png?raw=true)

![Alt text](README/register-mobile.png?raw=true)


- If no errors from api, direct user to the last page (logged in successfully), where his email is
displayed from sessionStorage, localStorage or cookies

![Alt text](README/success.png?raw=true)
![Alt text](README/success1.png?raw=true)
