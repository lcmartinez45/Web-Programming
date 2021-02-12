<!----------------------
Name: Lillian Martinez
Coding 08
Purpose: This is my contact page.
---------------------->
<br>
<div class="centered" id="msg"></div>
<form id="email-form" name="email-form" role="form" accept-charset="utf-8">
  <fieldset>
    <legend>Contact</legend>
    <hr class="my-4">

    <div class="form-group">
        <label for="exampleInputName">Name</label>
        <input type="name" class="form-control" id="name" name="name" aria-describedby="nameHelp" placeholder="Enter name" maxlength="64" value="">
        <small id="nameHelp" class="form-text text-muted">Please input first and last name.</small>
    </div>

    <div class="form-group">
      <label for="exampleInputEmail1">Email Address</label>
      <input type="email" class="form-control" id="remail1" name="remail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">Please enter full email: you@email.com.</small>
    </div>

    <div class="form-group">
          <label for="exampleInputEmail1">Re-Enter Email Address</label>
          <input type="email" class="form-control" id="remail2" name="remail2" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">Please re-enter full email: you@email.com.</small>
    </div>

    <div class="form-group">
        <label for="exampleSubjectArea">Subject Title</label><br>
        <input type="text" class="form-control" id="subject" name="subject" aria-describedby="subjectHelp" placeholder="Subject" maxlength="64" value="">
    </div>

    <div class="form-group">
        Message: <span id="chars">0</span> of 1000 characters maximum
    </div>

    <div class="form-group">
      <label for="exampleTextArea">Message Area</label>
      <textarea class="form-control" id="message" name="message"  rows="3" maxlength="1000"></textarea>
    </div>

    <button id="contact-send" type="button" class="btn btn-primary">Submit</button>&nbsp;&nbsp;
    <button id="contact-clear" type="button" class="btn btn-primary">Clear</button>
  </fieldset>
</form>
