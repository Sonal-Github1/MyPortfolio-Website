<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // --- Configuration ---
    $to_email = "your_email@example.com"; // <-- REPLACE WITH YOUR EMAIL ADDRESS
    $subject = "New Client Project Request from Website";
    
    // --- Sanitize and Collect Form Data ---
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : 'N/A';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : 'N/A';
    $description = isset($_POST['description']) ? htmlspecialchars(trim($_POST['description'])) : 'N/A';
    $plan = isset($_POST['plan']) ? htmlspecialchars($_POST['plan']) : 'N/A';
    $terms = isset($_POST['terms']) ? 'Agreed' : 'Not Agreed';

    // --- Construct the Email Body ---
    $email_body = "You have received a new project request.\n\n";
    $email_body .= "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Selected Plan: " . ucfirst($plan) . "\n";
    $email_body .= "Terms Agreement: " . $terms . "\n\n";
    $email_body .= "--- Project Description ---\n" . $description . "\n";
    
    // --- Headers for the Email ---
    $headers = "From: Website Contact Form <no-reply@yourwebsite.com>" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";

    // --- Send the Email ---
    if (mail($to_email, $subject, $email_body, $headers)) {
        // Redirect to a 'thank you' page on success
        header("Location: thank_you.html"); // You can create a thank_you.html page
        exit;
    } else {
        // Failed to send email
        echo "Sorry, there was an error submitting your request. Please try again later.";
    }

} else {
    // Not a POST request
    echo "Access denied.";
}
?>