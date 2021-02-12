<?php

defined('BASEPATH') OR exit('Forbidden');

class Email extends CI_Controller{

	 public function __construct() {


        parent::__construct();

        if(!$this->input->is_ajax_request()){
            die("error");
        }
    }

	private function mymail(){
		return true;
	}

	public function send() {

		$response = "error";

    if (!empty($_POST)) {

        $name = substr(strip_tags(trim($_POST['name'])), 0, 64);
        $subject = substr(strip_tags(trim($_POST['subject'])), 0, 64);
        $message = substr(strip_tags(trim($_POST['message'])), 0, 64);
        $from = filter_var($_POST['remail1'], FILTER_VALIDATE_EMAIL) ? $_POST['remail1'] : $from = "";


        if (!empty($name) && !empty($from) && !empty($subject) && !empty($message)) {

            /* this forms the correct email headers to send an email */
            $headers = "From: $from\r\n";
            $headers .= "Reply-To: $from\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";

            if ($this->mymail('youremail@g.austincc.edu', $subject, $name . "\n\n" . $message, $headers)) {
                $response = 'okay';
            } else {
                $response = 'mailerror';
            }
        } else {
            $response = 'varerror';
        }
    } else {
        $response = 'posterror';
    }
    echo $response;
}

}




