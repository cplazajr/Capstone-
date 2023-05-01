import html from "html-literal";

export default () => html`


<section class="contact">
<div class="content">
<h2>Contact Us</h2>
<br>
<p>Some random text here, I need to come up with some words to put into the page. The best text that will ever be written. <br> Will be some sort of long paragraph,
Im not sure what to put in here yet but we will see soon enough. Thank you for your patience.</p>
</div>
<br>
<br>
<br>
<div>
<div class="contactInfo">
<div class="box">
<div class="text">
<h3 class="email">Email</h3>
<br>
<p>cesarplaza@gmail.com</p>
</div>
</div>
</div>
</section>
<br>
<br>
<h2>Contact Form:</h2>
<br>
<br>
<section>
<form class="container">
<div>
<label for="firstName">First Name:</label>
<input type="text" id="firstName" name="firstName" placeholder="Firstname">
</div>
<br>
<div>
<label for="lastName">Last Name:</label>
<input type="text" id="lastName" name="lastName" placeholder="Lastname">
</div>
<br>
<div>
<label for="email">Email:</label>
<input type="text" id="email" name="email" placeholder="Youremail@email.com">
</div>
<br>
<div>
<label for="enterMessage">Message:</label>
<input type="text" id="enterMessage" name="enterMessage" placeholder="Enter Message Here...">
</div>
<br>
<div>
<button class="button" type="submit">Submit</button>
</div>
</form>
</section> `;
