# RelaxingSPA
Our fifth Friday Project! A site to search for services offered at a premiere spa.  This site uses a Node.js/Express back end and REST API to help manage data services.

![IndexPage](public/images/relaxingspaillustration.jpg?raw=true "IndexPage")

## Purpose and goals of this site
- To give information about services offered at a premiere spa.

## Audience
- Prospective and Returning Spa Clients  
- ### What do they want from my site?
- To search for spa services:  Acupuncture, Body Treatments, Hair Salon, Massage and Bodywork, Nail Salon, and Skin Care.
- To find out details about these services, including description, price, and time.

## Server setup and start
This assumes that the user has Node.js installed globally on their machine.

### Installing the Express framework into the application and setting up the folders:

- First, clone or copy project from GitHub down to a folder on your machine.  
- Your folder setup should look like this (folder is an example):

**Main Folder:**  
c:>RelaxingSPA
place the server.js under here

**subfolders under LearningIsFun:**
data (where the JSON data files would be placed)
public (this is your "root" directory)

**subfolders under public:**
css (your styles.css)
images (any images)
scripts (your js scripts other than server.js)

- Go to your Command Prompt
- Under your folder for the application, install the Express framework using NPM by typing:
> npm install express --save <enter>

- Then you'd install the body-parser package using NPM by next typing:
> npm install body-parser --save <enter>

- Now, you'd start the server by typing:
> node server.js <enter>

- You will get a response saying:
**App listening at port 8081**

- To view your page in the browser, you would go to:
http://localhost:8081/


